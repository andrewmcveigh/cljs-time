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

(defn offset-string [{[sign hh mm ss] :offset :as timezone}]
  (if ss
    (format "%s%02d:%02d:%02d" (name sign) hh mm ss)
    (format "%s%02d:%02d" (name sign) hh mm)))

(def days-in-month [31 28 31 30 31 30 31 31 30 31 30 31])

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
                                       days (days-in-month (dec m))
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
                                 (let [days (days-in-month (dec month))
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
                                     [year month (days-in-month month)])
                                   [year
                                    (dec month)
                                    (days-in-month (- month 2))])))
        [month year] (bal-units month year 12 1)]
    (assoc dt
      :millisecond millisecond :second second :minute minute :hour hour
      :day day :month month :year year)))

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
                    (map (comp days-in-month dec) (range 1 month)))
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
