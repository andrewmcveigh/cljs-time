(ns cljs-time.internal.core
  (:require
   [cljs-time.tz.data :refer [zones]]
   [clojure.string :as string]
   #+cljs [goog.string :as gstring]
   #+cljs [goog.string.format]))

#+cljs
(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (let [args (map (fn [x]
                    (if (or (keyword? x) (symbol? x))
                      (str x)
                      x))
                  args)]
    (apply gstring/format fmt args)))

(defn split-formats [s]
  (vec
   (if (re-seq #"%s" s)
     [(format s "") (format s "S")]
     (string/split s #"/"))))

(defn ->time-zone [tz & [id]]
  (let [[offset rules format & until] tz]
    (with-meta
      {:id id
       :offset offset :rules rules :names (split-formats format)}
      {:type ::time-zone})))

(defn time-zone-for-abbr [abbr]
  (let [[id tz] (first
                 (filter (fn [[k v]]
                           (let [[_ _ format & _] (last v)]
                             ((set (split-formats format)) abbr)))
                         zones))]
    (assoc (->time-zone (last tz))
      :id abbr
      :rules "-")))

(defn leap-year? [y]
  (cond (zero? (mod y 400)) true
        (zero? (mod y 100)) false
        (zero? (mod y 4)) true
        :else false))

(defn offset-string [{[sign hh mm ss] :offset :as timezone}]
  (cond ss (format "%s%02d:%02d:%02d" (name sign) hh mm ss)
        mm (format "%s%02d:%02d" (name sign) hh mm)
        hh (if (zero? hh) "Z" (str (name sign) hh))))

(def days-in-month [31 28 31 30 31 30 31 31 30 31 30 31])

(defn bal-units [sm lg mul i]
  (let [lg (+ lg (int (/ sm mul)))
        sm (rem sm mul)]
    [(if (< sm i) (+ mul sm) sm)
     (if (< sm i) (dec lg) lg)]))

(defn year-corrected-dim [year month]
  (cond-> (days-in-month (if (= month 1) 11 (dec month)))
          (and (leap-year? year) (= month 2)) inc))

(defn valid-date?
  [{:keys [years months days hours minutes seconds millis] :as d}]
  (letfn [(>< [a b x] (and (>= x a) (<= x b)))]
    (if (and years
             (>< 1 12 months)
             (>< 1 (year-corrected-dim years months) days)
             (>< 0 23 hours)
             (>< 0 59 minutes)
             (>< 0 60 seconds)
             (>< 0 999 millis))
      d
      (throw (ex-info "Date is not valid" {:type :invalid-date
                                           :date d})))))

(defn rebalance
  [{:keys [years months days hours minutes seconds millis] :as dt}]
  (let [[millis seconds] (bal-units millis seconds 1000 0)
        [seconds minutes] (bal-units seconds minutes 60 0)
        [minutes hours] (bal-units minutes hours 60 0)
        [hours days] (bal-units hours days 24 0)
        [months years] (bal-units months years 12 1)
        [years months days]
        (loop [years years months months days days]
          (cond (neg? days)
                (let [months (if (zero? months) 12 months)
                      prev0? (zero? (dec months))
                      m (if prev0? 12 (dec months))
                      dim (year-corrected-dim years m)
                      this-month? (<= (* -1 days) dim)]
                  (recur (if prev0? (dec years) years)
                         (if prev0? 12 (dec months))
                         (+ (if this-month? (inc days) days)
                            dim)))
                (pos? days)
                (let [dim (year-corrected-dim years months)]
                  (if (> days dim)
                    (if (= 12 months)
                      (recur (inc years) 1 (- days dim))
                      (recur years (inc months) (- days dim)))
                    [years months days]))
                (zero? days)
                (if (zero? (dec months))
                  (let [months 12 years (dec years)]
                    [years months (days-in-month (dec months))])
                  (let [months (dec months)
                        dim (year-corrected-dim years months)]
                    [years months dim]))))
        [months years] (bal-units months years 12 1)]
    (assoc dt
      :millis millis :seconds seconds :minutes minutes :hours hours
      :days days :months months :years years)))

(defn dow
  "Calculates day of week accurately for any Gregorian date.
Translated from algorithm in C by Tomohiko Sakamoto 1993."
  [y m d]
  (let [t [0 3 2 5 0 3 5 1 4 6 2 4]
        y (if (< m 3) (dec y) y)
        day (mod (+ (- (+ y
                          (int (/ y 4)))
                       (int (/ y 100)))
                    (int (/ y 400))
                    (t (dec m))
                    d)
                 7)]
    (if (zero? day) 7 day)))

(defn doy [dt]
  (+ (:day dt)
     (reduce + (map days-in-month (range 0 (dec (:month dt)))))))

(defn millis-since-epoch
  "Calulates the number of milliseconds since the Unix epoch.
A negative result indicates the number of milliseconds before the epoch.
Note: Currently does not account for leap seconds."
  [{:keys [years months days hours minutes seconds millis]
    {[sign hh mm ss] :offset} :time-zone}]
  (let [year-diff (- years 1970)
        before-1970? (< years 1970)
        year-range (if before-1970? (range years 1970) (range 1970 years))
        leap-years (count (remove false? (map leap-year? year-range)))
        leap-years (if before-1970?
                     (* -1
                        (if (and (> months 2) (> days 28) (leap-year? years))
                          (dec leap-years)
                          leap-years))
                     leap-years)
        days (apply +
                    (* year-diff 365)
                    leap-years
                    (dec days)
                    (map (comp days-in-month dec) (range 1 months)))
        offset (* (condp = sign :- 1 :+ -1)
                  (+ (* 1000 (or ss 0))
                     (* 60000 (or mm 0))
                     (* 3600000 (or hh 0))))]
    (+ millis
       (* 1000 seconds)
       (* 60000 minutes)
       (* 3600000 hours)
       (* 86400000 days)
       offset)))

(defn index-of [coll x]
  (.indexOf #+clj coll #+cljs (into-array coll) x))

(defn parse-int [s]
  (let [s (string/replace s #"^\+" "")] ; for java6
    (#+clj Integer/parseInt #+cljs js/parseInt s 10)))
