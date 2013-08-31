(ns cljs-time.core
  (:refer-clojure :exclude [extend second]))

(set! *print-fn* (fn [x] (.log js/console x)))

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
                     m (op (month date) value)
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
                         (= 2 (month date))
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
  (month [this] (inc (.getMonth this)))
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

(defn now
  "Returns a DateTime for the current instant in the UTC time zone."
  []
  (goog.date.DateTime.))

(defn today-at-midnight
  "Returns a DateMidnight for today at midnight in the UTC time zone."
  [] 
  (doto (goog.date.DateTime.) (.set (goog.date.Date.))))

(defn epoch
  "Returns a DateTime for the begining of the Unix epoch in the UTC time zone."
  []
  (doto (goog.date.DateTime.) (.setTime 0)))

;(defn date-midnight
  ;"Constructs and returns a new DateMidnight in UTC.
;Specify the year, month of year, day of month. Note that month and day are
;1-indexed. Any number of least-significant components can be ommited, in which case
;they will default to 1."
  ;([year]
    ;(date-midnight year 1 1))
  ;([^long year ^long month]
    ;(date-midnight year month 1))
  ;([^Long year ^Long month ^Long day]
    ;(DateMidnight. year month day #^DateTimeZone utc)))

(defn date-time
  "Constructs and returns a new DateTime in UTC.
Specify the year, month of year, day of month, hour of day, minute if hour,
second of minute, and millisecond of second. Note that month and day are
1-indexed while hour, second, minute, and millis are 0-indexed.
Any number of least-significant components can be ommited, in which case
they will default to 1 or 0 as appropriate."
  ([year]
   (date-time year 1 1 0 0 0 0))
  ([year month]
   (date-time year month 1 0 0 0 0))
  ([year month day]
   (date-time year month day 0 0 0 0))
  ([year month day hour]
   (date-time year month day hour 0 0 0))
  ([year month day hour minute]
   (date-time year month day hour minute 0 0))
  ([year month day hour minute second]
   (date-time year month day hour minute second 0))
  ([year month day hour minute second millis]
   (goog.date.DateTime. year (dec month) day hour minute second millis)))

(defn period [period value]
  {:period period :value value})

(defn years
  "Given a number, returns a Period representing that many years.
Without an argument, returns a PeriodType representing only years."
  ([] (years nil))
  ([n] (period :years n)))

(defn months
  "Given a number, returns a Period representing that many months.
Without an argument, returns a PeriodType representing only months."
  ([] (months nil))
  ([n] (period :months n)))

(defn weeks
  "Given a number, returns a Period representing that many weeks.
Without an argument, returns a PeriodType representing only weeks."
  ([] (weeks nil))
  ([n] (period :weeks n)))

(defn days
  "Given a number, returns a Period representing that many days.
Without an argument, returns a PeriodType representing only days."
  ([] (days nil))
  ([n] (period :days n)))

(defn hours
  "Given a number, returns a Period representing that many hours.
Without an argument, returns a PeriodType representing only hours."
  ([] (hours nil))
  ([n] (period :hours n)))

(defn minutes
  "Given a number, returns a Period representing that many minutes.
Without an argument, returns a PeriodType representing only minutes."
  ([] (minutes nil))
  ([n] (period :minutes n)))

(defn seconds
  "Given a number, returns a Period representing that many seconds.
Without an argument, returns a PeriodType representing only seconds."
  ([] (seconds nil))
  ([n] (period :seconds n)))

(defn millis
  "Given a number, returns a Period representing that many milliseconds.
Without an argument, returns a PeriodType representing only milliseconds."
  ([] (millis nil))
  ([n] (period :millis n)))

(defn plus
  "Returns a new date/time corresponding to the given date/time moved forwards by
the given Period(s)."
  ([dt p]
     (plus- dt p))
  ([dt p & ps]
     (reduce plus- (plus- dt p) ps)))

(defn minus
  "Returns a new date/time object corresponding to the given date/time moved backwards by
the given Period(s)."
  ([dt p]
   (minus- dt p))
  ([dt p & ps]
     (reduce minus- (minus- dt p) ps)))

(defn ago
  "Returns a DateTime a supplied period before the present.
e.g. (-> 5 years ago)"
  [period]
  (minus (now) period))

(defn from-now
  "Returns a DateTime a supplied period after the present.
e.g. (-> 30 minutes from-now)"
  [period]
  (plus (now) period))

(defn interval
  "Returns an interval representing the span between the two given ReadableDateTimes.
Note that intervals are closed on the left and open on the right."
  [^goog.date.DateTime start ^goog.date.DateTime end]
  {:pre [(< (.getTime start) (.getTime end))]}
  {:start start :end end})

(defn start
  "Returns the start DateTime of an Interval."
  [in]
  (:start in))

(defn end
  "Returns the end DateTime of an Interval."
  [in]
  (:end in))

(defn extend
  "Returns an Interval with an end ReadableDateTime the specified Period after the end
of the given Interval"
  [in & by]
  (assoc in :end (apply plus (end in) by)))

(defn in-millis
  "Returns the number of milliseconds in the given Interval."
  [{:keys [start end]}]
  (- (.getTime end) (.getTime start)))

(defn in-seconds
  "Returns the number of standard seconds in the given Interval."
  [in]
  (int (/ (in-millis in) 1000)))

(defn in-minutes
  "Returns the number of standard minutes in the given Interval."
  [in]
  (int (/ (in-seconds in) 60)))

(defn in-hours
  "Returns the number of standard hours in the given Interval."
  [in]
  (int (/ (in-minutes in) 60)))

(defn in-days
  "Returns the number of standard days in the given Interval."
  [in]
  (int (/ (in-hours in) 24)))

(defn in-weeks
  "Returns the number of standard weeks in the given Interval."
  [in]
  (int (/ (in-days in) 7)))

(defn in-months
  "Returns the number of standard months in the given Interval."
  [{:keys [start end]}]
  (let [start-month (month start)
        start-month (if (= 1 (day start)) start-month (inc start-month))]
    (+ (* 12 (- (year end) (year start))) (- (month end) start-month))))

(defn in-years
  "Returns the number of standard years in the given Interval."
  [{:keys [start end]}]
  (let [sm (month start) sd (day start)
        em (month end) ed (day end)
        d1 (cond (and (= sm 2) (= sd 29) (= em 2) (= ed 28)) 0
                 (before? (date-time (year start) sm sd)
                          (date-time (year start) em ed)) 0
                 (after? (date-time (year start) sm sd)
                         (date-time (year start) em ed)) 1
                 :else-is-same-date 0)]
    (- (year end) (year start) d1)))

(defn t= [& args]
  (apply = (map #(.getTime %) args)))

(defn within?
  "With 2 arguments: Returns true if the given Interval contains the given
ReadableDateTime. Note that if the ReadableDateTime is exactly equal to the
end of the interval, this function returns false.
With 3 arguments: Returns true if the start ReadablePartial is
equal to or before and the end ReadablePartial is equal to or after the test
ReadablePartial."
  ([{:keys [start end]} date]
   (within? start end date))
  ([start end date]
   (or (t= start date)
       ;(t= end date)
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
       ;(or (t= start-a end-b) (t= start-b end-a))
       )))

(defn abuts?
  "Returns true if Interval a abuts b, i.e. then end of a is exactly the
beginning of b."
  [{start-a :start end-a :end} {start-b :start end-b :end}]
  (or (t= start-a end-b) (t= end-a start-b)))

(defn mins-ago
  [d]
  (in-minutes (interval d (now))))


(defn last-day-of-the-month
  ([dt]
     (last-day-of-the-month (year dt) (month dt)))
  ([year month]
     (minus (date-time year (inc month) 1) (days 1))))

(defn number-of-days-in-the-month
  ([dt]
   (number-of-days-in-the-month (year dt) (month dt)))
  ([year month]
   (.getDate (last-day-of-the-month year month))))

(defn ^DateTime first-day-of-the-month
  ([dt]
     (first-day-of-the-month (year dt) (month dt)))
  ([year month]
     (-> (date-time year month 1))))


(defn today-at
  ([hours minutes seconds millis]
     (let [today (doto (goog.date.DateTime.) (.set (goog.date.Date.)))]
       (doto today
         (.setHours hours)
         (.setMinutes minutes)
         (.setSeconds seconds)
         (.setMilliseconds millis))))
  ([hours minutes seconds]
     (today-at hours minutes seconds 0))
  ([hours minutes]
     (today-at hours minutes 0)))

;(defn do-at* [^BaseDateTime base-date-time body-fn]
  ;(DateTimeUtils/setCurrentMillisFixed (.getMillis base-date-time))
  ;(try
    ;(body-fn)
    ;(finally
      ;(DateTimeUtils/setCurrentMillisSystem))))

;(defmacro do-at
  ;"Like clojure.core/do except evalautes the expression at the given date-time"
  ;[^BaseDateTime base-date-time & body]
  ;`(do-at* ~base-date-time
    ;(fn [] ~@body)))
