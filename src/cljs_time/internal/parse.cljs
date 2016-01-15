(ns cljs-time.internal.parse
  (:refer-clojure :exclude [replace])
  (:require
   [cljs-time.internal.core :as i]
   [clojure.string :as string])
  (:import
   [goog.date Interval]))

(defn replace [s match replacement]
  (string/replace (if (string? s) s (string/join s)) match replacement))

(defn token [s]
  [:token s])

(defn quoted [s]
  [:quoted s])

(defn read-while [pred s]
  (loop [[h & more :as s] s out []]
    (if (and h (pred h))
      (recur more (conj out h))
      [out s])))

(defn read-token [ch s]
  (let [[end s] (read-while #{ch} s)]
    [(token (apply str ch end)) s]))

(defn read-quoted [_ [h & more :as s]]
  (if (= h \')
    [(quoted "'") more]
    (let [[q s] (read-while (complement #{\'}) s)]
      [(quoted q) (rest s)])))

(defn read-punctuation [ch s]
  (let [[end s] (read-while #(not (re-find #"[a-zA-Z']" %)) s)]
    [(quoted (apply str ch end)) s]))

(defn alpha? [ch]
  (re-find #"[a-zA-Z]" (str ch)))

(defn read [s]
  (let [[h & more] s
        f (cond (= h \') read-quoted
                (alpha? h) read-token
                :else read-punctuation)]
    (f h more)))

(defn read-pattern [s]
  (loop [s s out []]
    (let [[h s] (read s)
          out (conj out h)]
      (if (seq s) (recur s out) out))))

(defn parse-number
  ([s limit] (parse-number s 1 limit))
  ([s lower upper]
   (let [[n s] (read-while #(re-find #"\d" %) s)]
     (if (>= (count n) lower)
       [(js/parseInt (apply str (take upper n))) (concat (drop upper n) s)]
       (throw (ex-info "Number does not meet minimum length"
                       {:type :parse-error :where :parse-number}))))))

(defn parse-period
  ([s period limit] (parse-period period 1 limit))
  ([s period lower upper]
   (let [[n s] (parse-number s lower upper)]
     [[period n] s])))

(defn parse-year
  ([limit] (parse-year 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :years lower upper))))

(defn parse-weekyear
  ([limit] (parse-year 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :weekyear lower upper))))

(defn parse-weekyear-week
  ([limit] (parse-year 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :weekyear-week lower upper))))

(defn parse-month
  ([limit] (parse-month 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :months lower upper))))

(defn parse-day
  ([limit] (parse-day 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :days lower upper))))

(defn parse-hours
  ([limit] (parse-hours 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :hours lower upper))))

(defn parse-HOURS
  ([limit] (parse-HOURS 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :HOURS lower upper))))

(defn parse-minutes
  ([limit] (parse-minutes 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :minutes lower upper))))

(defn parse-seconds
  ([limit] (parse-seconds 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :seconds lower upper))))

(defn parse-millis
  ([limit] (parse-millis 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :millis lower upper))))

(defn parse-timezone
  ([fmt]
   (fn [s]
     (let [[h & more] s
           err (ex-info
                (str "Invalid timezone format: " s) {:type :parse-error})]
       (if (#{\- \+} h)
         (case fmt
           :dddd (let [tz? (string/join (take 4 more))]
                   (if-let [[_ & tz] (re-find #"^(\d{2})(\d{2})" tz?)]
                     [[:timezone tz] (drop 4 more)]
                     (throw err)))
           :long (let [tz? (string/join (take 5 more))]
                   (if-let [[_ & tz] (re-find #"^(\d{2}):(\d{2})" tz?)]
                     [[:timezone tz] (drop 5 more)]
                     (throw err))))
         (case fmt
           :abbr (let [tz? (take 3 s)
                       [tz _] (read-while #(re-find #"[A-Z]" %) tz?)]
                   (if (= (count tz) 3)
                     [[:timezone (string/join tz)] (drop 3 s)]
                     (throw err)))
           :full (throw (ex-info (str "Cannot parse long form timezone:" s)
                                 {:type :parse-error}))
           (throw err)))))))

(defn parse-meridiem
  ([]
   (fn [s]
     (let [[[m n] s] (split-at 2 s)
           meridiem (str m n)
           [meridiem s] (cond (#{"am" "pm" "AM" "PM"} meridiem)
                              [meridiem s]
                              (#{\a \p} m)
                              [({\a "am" \p "pm"} m) (cons n s)]
                              (#{\A \P} m)
                              [({\A "am" \P "pm"} m) (cons n s)])]
       [[:meridiem (keyword meridiem)] (string/join s)]))))

(defn parse-period-name [s period periods short?]
  (let [periods (cond->> periods short? (map #(subs % 0 3)))
        [m s] (->> periods
                   (map #(-> [% (replace s (re-pattern (str \^ %)) "")]))
                   (remove (comp (partial = s) second))
                   (first))]
    [[period (i/index-of periods m)] s]))

(defn parse-month-name [short?]
  (fn [s]
    (-> (parse-period-name s :months i/months short?)
        (update-in [0 1] inc))))

(defn parse-day-name [short?]
  (fn [s] (parse-period-name s :days i/days short?)))

(defn parse-quoted [quoted]
  (fn [s]
    (let [s' (replace s (re-pattern (str \^ quoted)) "")]
      (if (= s s')
        (throw (ex-info "Quoted text not found"
                        {:type :parse-error :where :parse-quoted}))
        [[:quoted quoted] s']))))

(defn timezone-adjustment [d timezone-string]
  (let [d (.clone d)
        [_ sign hh mm] (string/split timezone-string
                                     #"Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$")]
    (when (and sign hh mm)
      (let [sign (cond (= sign "-") #(.add %1 (Interval. %2 (- %3)))
                       (= sign "+") #(.add %1 (Interval. %2 %3)))
            [hh mm] (map #(js/parseInt % 10) [hh mm])
            adjusted (-> d
                         (sign (Interval.HOURS hh))
                         (sign (Interval.MINUTES mm)))]
        (.setTime d (.getTime adjusted))))
    d))

(defn lookup [[t pattern]]
  (if (= t :token)
    (case pattern
      "S"    (parse-millis 1 2)
      "SSS"  (parse-millis 3 3)
      "s"    (parse-seconds 1 2)
      "ss"   (parse-seconds 2 2)
      "m"    (parse-minutes 1 2)
      "mm"   (parse-minutes 2 2)
      "h"    (parse-hours 1 2)
      "hh"   (parse-hours 2 2)
      "H"    (parse-HOURS 1 2)
      "HH"   (parse-HOURS 2 2)
      "d"    (parse-day 1 2)
      "dd"   (parse-day 2 2)
      "D"    (parse-day 1 3)
      "DD"   (parse-day 2 3)
      "DDD"  (parse-day 3 3)
      "M"    (parse-month 1 2)
      "MM"   (parse-month 2 2)
      "MMM"  (parse-month-name true)
      "MMMM" (parse-month-name false)
      "y"    (parse-year 1 4)
      "yy"   (parse-year 2 2)
      "yyyy" (parse-year 4 4)
      "Y"    (parse-year 1 4)
      "YY"   (parse-year 2 2)
      "YYYY" (parse-year 4 4)
      "x"    (parse-weekyear 1 4)
      "xx"   (parse-weekyear 2 2)
      "xxxx" (parse-weekyear 4 4)
      "w"    (parse-weekyear-week 1 2)
      "ww"   (parse-weekyear-week 2 2)
      "E"    (parse-day-name true)
      "EEE"  (parse-day-name true)
      "EEEE" (parse-day-name false)
      "a"    (parse-meridiem)
      "Z"    (parse-timezone :dddd)
      "ZZ"   (parse-timezone :long)
      "ZZZ"  (parse-timezone :abbr)
      "ZZZZ" (parse-timezone :abbr)
      "z"    (parse-timezone :abbr)
      "zz"   (parse-timezone :abbr)
      "zzz"  (parse-timezone :abbr)
      "zzzz" (parse-timezone :full))
    (parse-quoted pattern)))

(defn parse [pattern value]
  (loop [s value
         [parser & more] (map lookup (read-pattern pattern))
         out []]
    (if (seq s)
      (if (nil? parser)
        (throw
         (ex-info (str "Invalid format: " value " is malformed at " (pr-str s))
                  {:type :parse-error :sub-type :invalid-format}))
        (let [[value s] (parser s)]
          (recur s more (conj out value))))
      out)))

(defn compile [class values]
  (let [{:keys [years months days hours HOURS minutes seconds millis meridiem]
         :as date-map}
        (->> values
             (remove (comp #{:quoted} first))
             (into {}))
        hours (if meridiem
                (if (#{:pm :PM} meridiem) (+ hours 12) hours)
                HOURS)
        date-map (-> date-map
                     (assoc :hours hours)
                     (dissoc :HOURS :meridiem))]
    (i/valid-date? date-map)
    (if (and years months days)
      (if (and hours minutes seconds millis)
        (new class years (dec months) days hours minutes seconds millis)
        (new class years (dec months) days)))))
