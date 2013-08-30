(ns cljs-time.core
  (:refer-clojure :exclude [second]))

;(set! *print-fn* (fn [x] (.log js/console x)))

(defprotocol DateTimeProtocol
  "Interface for various date time functions"
  (year [this] "Return the year component of the given date/time.")
  (month [this] "Return the month component of the given date/time.")
  (day [this] "Return the day of month component of the given date/time.")
  (day-of-week [this] "Return the day of week component of the given date/time. Monday is 1 and Sunday is 7")
  (hour [this] "Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.")
  (minute [this] "Return the minute of hour component of the given date/time.")
  (sec [this] "Return the second of minute component of the given date/time.")
  (second [this] "Return the second of minute component of the given date/time.")
  (milli [this] "Return the millisecond of second component of the given date/time.")
  (after? [this that] "Returns true if ReadableDateTime 'this' is strictly after date/time 'that'.")
  (before? [this that] "Returns true if ReadableDateTime 'this' is strictly before date/time 'that'.")
  (plus- [this period]
    "Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).")
  (minus- [this period]
    "Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s)."))

(defn leap-year? [y]
  (cond (zero? (mod y 400)) true
        (zero? (mod y 100)) false
        (zero? (mod y 4)) true
        :else false))

(def periods
  (let [fixed-time-fn (fn [f set-fn op date value]
                        (let [date (.clone date)]
                          (set-fn date (op (f date) value))
                          date))]
    {:millis (partial fixed-time-fn milli #(.setMilliseconds %1 %2))
     :seconds (partial fixed-time-fn second #(.setSeconds %1 %2))
     :minutes (partial fixed-time-fn minute #(.setMinutes %1 %2))
     :hours (partial fixed-time-fn hour #(.setHours %1 %2))
     :days (partial fixed-time-fn day #(.setDate %1 %2))
     :weeks (fn [op date value]
              (let [date (.clone date)]
                (.setDate date (op (day date) (* 7 value)))
                date))
     :months (fn [op date value]
               (let [date (.clone date)
                     m (op (inc (month date)) value)
                     y (year date)
                     y (cond (> m 12) (+ y 1)
                             (< m 1) (- y 1)
                             :else y)
                     m (cond (> m 12) (mod m 12)
                             (< m 1) (+ m 12)
                             :else m)]
                 (.setMonth date (dec m))
                 (.setYear date y)
                 date))
     :years (fn [op date value]
              (let [date (.clone date)]
                (if (and (leap-year? (year date))
                         (= 1 (month date))
                         (= 29 (day date)))
                  (.setDate date 28))
                (.setYear date (op (year date) value))
                date))}))

(defn period-fn [{:keys [period value]}]
  (fn [operator date]
    ((periods period) operator date value)))

(extend-protocol DateTimeProtocol
  goog.date.DateTime
  (year [this] (.getYear this))
  (month [this] (.getMonth this))
  (day [this] (.getDate this))
  (day-of-week [this] (.getDay this))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (after? [this that] (> (.getTime this) (.getTime that)))
  (before? [this that] (< (.getTime this) (.getTime that)))
  (plus- [this period] ((period-fn period) + this))
  (minus- [this period] ((period-fn period) - this)))

(defn period [period value]
  {:period period :value value})

(defn years
  ([] (years nil))
  ([n] (period :years n)))

(defn months
  ([] (months nil))
  ([n] (period :months n)))

(defn weeks
  ([] (weeks nil))
  ([n] (period :weeks n)))

(defn days
  ([] (days nil))
  ([n] (period :days n)))

(defn hours
  ([] (hours nil))
  ([n] (period :hours n)))

(defn minutes
  ([] (minutes nil))
  ([n] (period :minutes n)))

(defn seconds
  ([] (seconds nil))
  ([n] (period :seconds n)))

(defn millis
  ([] (millis nil))
  ([n] (period :millis n)))

(defn today-at-midnight []
  (doto (goog.date.DateTime.) (.set (goog.date.Date.))))

(defn interval [^goog.date.DateTime start ^goog.date.DateTime end]
  {:pre [(< (.getTime start) (.getTime end))]}
  {:start start :end end})

(defn t= [& args]
  (apply = (map #(.getTime %) args)))

(defn within?
  ([{:keys [start end]} date]
   (within? start end date))
  ([start end date]
   (or (t= start date)
       (t= end date)
       (and (before? start date) (after? end date)))))

(defn overlaps?
  "With 2 arguments: Returns true of the two given Intervals overlap.
Note that intervals that satisfy abuts? do not satisfy overlaps?
With 4 arguments: Returns true if the range specified by start-a and end-a
overlaps with the range specified by start-b and end-b."
  ([{start-a :start end-a :end} {start-b :start end-b :end}]
   (overlaps? start-a end-a start-b end-b))
  ([start-a end-a start-b end-b]
   (or (and (before? start-b end-a) (after? end-b start-a))
       (and (after? end-b start-a) (before? start-b end-a))
       (or (t= start-a end-b) (t= start-b end-a)))))

(defn abuts?
  "Returns true if Interval a abuts b, i.e. then end of a is exactly the
beginning of b."
  [{start-a :start end-a :end} {start-b :start end-b :end}]
  (or (t= start-a end-b) (t= end-a start-b)))
