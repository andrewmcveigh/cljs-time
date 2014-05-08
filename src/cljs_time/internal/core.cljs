(ns cljs-time.internal.core
  (:require
   [cljs-time.tz.data :refer [zones]]
   [clojure.string :as string]
   #+cljs [goog.string :as gstring]
   #+cljs [goog.string.format]))

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

(def days-in-months [31 28 31 30 31 30 31 31 30 31 30 31])

(defn rebalance [{:keys [year month day hour minute second millisecond] :as dt}]
  (let [bal-units (fn [sm lg mul i]
                    (let [lg (+ lg (int (/ sm mul)))
                          sm (rem sm mul)]
                      [(if (< sm i) (+ mul sm) sm)
                       (if (< sm i) (dec lg) lg)]))
        [millisecond second] (bal-units millisecond second 1000 0)
        [second minute] (bal-units second minute 60 0)
        [minute hour] (bal-units minute hour 60 0)
        [hour day] (bal-units hour day 24 0)
        [month year] (bal-units month year 12 1)
        [year month day] (loop [year year month month day day]
                           (cond (neg? day)
                                 (let [month (if (zero? month) 12 month)
                                       prev0? (zero? (dec month))
                                       m (if prev0? 12 (dec month))
                                       days (days-in-months (dec m))
                                       days (if (and (leap-year? year)
                                                     (= m 2))
                                              (inc days)
                                              days)
                                       this-month? (<= (* -1 day) days)]
                                   (recur (if prev0? (dec year) year)
                                          (if prev0? 12 (dec month))
                                          (+ (if this-month? (inc day) day)
                                             days)))
                                 (pos? day)
                                 (let [days (days-in-months (dec month))
                                       days (if (and (leap-year? year)
                                                     (= month 2))
                                              (inc days)
                                              days)]
                                   (if (> day days)
                                     (if (= 12 month)
                                       (recur (inc year) 1 (- day days))
                                       (recur year (inc month) (- day days)))
                                     [year month day]))
                                 :else
                                 (if (zero? (dec month))
                                   (let [month 12 year (dec year)]
                                     [year month (days-in-months month)])
                                   [year
                                    (dec month)
                                    (days-in-months (- month 2))])))
        [month year] (bal-units month year 12 1)]
    (assoc dt
      :millisecond millisecond :second second :minute minute :hour hour
      :day day :month month :year year)))

(def periods
  (let [fixed-time-fn (fn [f set-fn op date value]
                        (set-fn date (op (f date) value)))]
    {:millis (partial fixed-time-fn milli #(assoc %1 :millisecond %2))
     :seconds (partial fixed-time-fn second #(assoc %1 :second %2))
     :minutes (partial fixed-time-fn minute #(assoc %1 :minute %2))
     :hours (partial fixed-time-fn hour #(assoc %1 :hour %2))
     :days (partial fixed-time-fn day #(assoc %1 :day %2))
     :weeks (fn [op date value] (assoc date :day (op (day date) (* 7 value))))
     :months (partial fixed-time-fn month #(assoc %1 :month %2))
     :years (fn [op date value]
              (let [day (day date)]
                (assoc date 
                  :day (if (and (leap-year? (year date))
                                (= 2 (month date))
                                (= 29 day))
                         28
                         day)
                  :year (op (year date) value))))}))

(defn period-fn [p]
  (fn [operator date]
    (rebalance
     (reduce #((periods (key %2)) operator %1 (val %2)) date p))))

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

(defn millis-since-epoch
  "Calulates the number of milliseconds since the Unix epoch.
A negative result indicates the number of milliseconds before the epoch.
Note: Currently does not account for leap seconds."
  [{:keys [year month day hour minute second millisecond]
    {[sign hh mm ss] :offset} :timezone}]
  (let [years (- year 1970)
        before-1970? (< year 1970)
        year-range (if before-1970? (range year 1970) (range 1970 year))
        leap-years (count (remove false? (map leap-year? year-range)))
        leap-years (if before-1970?
                     (* -1
                        (if (and (> month 2) (> day 28) (leap-year? year))
                          (dec leap-years)
                          leap-years))
                     leap-years)
        days (apply +
                    (* years 365)
                    leap-years
                    (dec day)
                    (map (comp days-in-months dec) (range 1 month)))
        offset (* (condp = sign :- 1 :+ -1)
                  (+ (* 1000 (or ss 0))
                     (* 60000 (or mm 0))
                     (* 3600000 (or hh 0))))]
    (+ millisecond
       (* 1000 second)
       (* 60000 minute)
       (* 3600000 hour)
       (* 86400000 days)
       offset)))

(def utc
  (with-meta
    {:id "Etc/UTC" :offset [:+ 0] :rules "-" :names ["UTC"]}
    {:type ::time-zone}))

(defn from-millis-since-epoch [ms]
  (let [SSS (mod ms 1000)
        ms (- ms SSS)
        ss (mod ms 60000)
        ms (- ms ss)
        mm (mod ms 3600000)
        ms (- ms mm)
        hh (mod ms 86400000)
        ms (- ms hh)
        [yy ms] (loop [year 1970 ms ms]
                  (let [ms-year (if (neg? ms) year (dec year))
                        ms-in-year (if (leap-year? ms-year)
                                     31622400000
                                     31536000000)]
                    (if (<= ms ms-in-year)
                      [year ms]
                      (recur ((if (neg? ms) dec inc) year) (- ms ms-in-year)))))
        [dd MM] (loop [days (/ ms 86400000) month 0]
                  (let [dim (days-in-months month)]
                    (if (<= days dim)
                      [days (inc month)]
                      (recur (- days dim) (inc month)))))]
    (rebalance
     (->DateTime yy MM dd (/ hh 3600000) (/ mm 60000) (/ ss 1000) SSS utc))))
