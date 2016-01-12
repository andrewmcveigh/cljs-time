(ns cljs-time.internal.parse
  (:refer-clojure :exclude [replace])
  (:require
   [cljs-time.internal.core :refer [valid-date?]]
   [clojure.string :as string]))

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
  ([limit] (parse-timezone 1 limit))
  ([lower upper]
   (fn [s] (parse-period s :timezone lower upper))))

(defn parse-meridiem
  ([]
   (fn [s]
     (let [[[m n :as meridiem] s] (split-at 2 s)
           [meridiem s] (cond (#{"am" "pm" "AM" "PM"} meridiem)
                                      [meridiem s]
                                      (#{\a \p} m)
                                      [({\a "am" \p "pm"} m) (str n s)]
                                      (#{\A \P} m)
                                      [({\A "am" \P "pm"} m) (str n s)])]
       [[:meridiem (keyword meridiem)] s]))))

(def months
  ["January" "February" "March" "April" "May" "June"
   "July" "August" "September" "October" "November" "December"])

(defn index-of [coll x]
  (first (keep-indexed #(when (= %2 x) %1) coll)))

(defn parse-period-name [s period periods short?]
  (let [periods (cond->> periods short? (map #(subs % 0 3)))
        [m s] (->> periods
                   (map #(-> [% (replace s (re-pattern (str \^ %)) "")]))
                   (remove (comp (partial = s) second))
                   (first))]
    [[period (index-of periods m)] s]))

(defn parse-month-name [short?]
  (fn [s]
    (-> (parse-period-name s :months months short?)
        (update-in [0 1] inc))))

(def days
  ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"])

(defn parse-day-name [short?]
  (fn [s] (parse-period-name s :days days short?)))

(defn parse-quoted [quoted]
  (fn [s]
    (let [s' (replace s (re-pattern (str \^ quoted)) "")]
      (if (= s s')
        (throw (ex-info "Quoted text not found"
                        {:type :parse-error :where :parse-quoted}))
        [[:quoted quoted] s']))))

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
      "E"    (parse-day-name true)
      "EEE"  (parse-day-name true)
      "EEEE" (parse-day-name false)
      "a"    (parse-meridiem))
    (parse-quoted pattern)))

(defn parse [pattern value]
  (loop [state value
         [parser & more] (map lookup (read-pattern pattern))
         out []]
    (let [[value state] (parser state)
          out (conj out value)]
      (if (seq state)
        (recur state more out)
        out))))

(defprotocol IDateMap
  (date-map [date]))

(extend-protocol IDateMap
  goog.date.Date
  (date-map [date]
    {:years 0 :months 0 :days 1})

  goog.date.DateTime
  (date-map [date]
    {:years 0 :months 0 :days 1 :hours 0 :minutes 0 :seconds 0 :millis 0})

  goog.date.UtcDateTime
  (date-map [date]
    {:years 0 :months 0 :days 1 :hours 0 :minutes 0 :seconds 0 :millis 0
     :time-zone nil}))

(defn compile [class values]
  (let [{:keys [years months days hours HOURS minutes seconds millis meridiem]}
        (->> values
             (remove (comp #{:quoted} first))
             (into {}))
        hours (if meridiem
                (if (#{:pm :PM} meridiem) (+ hours 12) hours)
                HOURS)]
    (if (and years months days)
      (if (and hours minutes seconds millis)
        (new class years (dec months) days hours minutes seconds millis)
        (new class years (dec months) days)))))
