(ns cljs-time.core
  "### The core namespace for date-time operations in the cljs-time library.

  Create a DateTime instance with date-time (or a LocalDateTime instance with local-date-time),
  specifying the year, month, day, hour, minute, second, and millisecond:

    => (date-time 1986 10 14 4 3 27 456)
    #<DateTime 1986-10-14T04:03:27.456Z>

    => (local-date-time 1986 10 14 4 3 27 456)
    #<LocalDateTime 1986-10-14T04:03:27.456>

  Less-significant fields can be omitted:

    => (date-time 1986 10 14)
    #<DateTime 1986-10-14T00:00:00.000Z>

    => (local-date-time 1986 10 14)
    #<LocalDateTime 1986-10-14T00:00:00.000>

  Get the current time with (now) and the start of the Unix epoch with (epoch).

  Once you have a date-time, use accessors like hour and second to access the
  corresponding fields:

    => (hour (date-time 1986 10 14 22))
    22

    => (hour (local-date-time 1986 10 14 22))
    22

  The functions after? and before? determine the relative position of two
  DateTime instances:

    => (after? (date-time 1986 10) (date-time 1986 9))
    true

    => (after? (local-date-time 1986 10) (local-date-time 1986 9))
    true

  Often you will want to find a date some amount of time from a given date. For
  example, to find the time 1 month and 3 weeks from a given date-time:

    => (plus (date-time 1986 10 14) (months 1) (weeks 3))
    #<DateTime 1986-12-05T00:00:00.000Z>

    => (plus (local-date-time 1986 10 14) (months 1) (weeks 3))
    #<LocalDateTime 1986-12-05T00:00:00.000Z>

  An Interval is used to represent the span of time between two DateTime
  instances. Construct one using interval, then query them using within?,
  overlaps?, and abuts?

    => (within? (interval (date-time 1986) (date-time 1990)) (date-time 1987))
    true

  To find the amount of time encompased by an interval, use in-seconds and
  in-minutes:

    => (in-minutes (interval (date-time 1986 10 2) (date-time 1986 10 14)))
    17280

  Note that all functions in this namespace work with Joda objects or ints. If
  you need to print or parse date-times, see cljs-time.format. If you need to
  ceorce date-times to or from other types, see cljs-time.coerce."
  (:refer-clojure :exclude [= extend second])
  (:require
   [cljs-time.internal.core :refer [leap-year? period format]]
   [goog.date.Date]
   [goog.date.DateTime]
   [goog.date.UtcDateTime]
   [goog.i18n.TimeZone]))

(def ^:dynamic *sys-time* nil)

(def = cljs-time.internal.core/=)

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
  (plus- [this period] "Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).")
  (minus- [this period] "Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s)."))

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

(defn period-fn [p]
  (fn [operator date]
    (reduce #((periods (key %2)) operator %1 (val %2)) date p)))

(extend-protocol DateTimeProtocol
  goog.date.UtcDateTime
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (let [d (.getDay this)] (if (= d 0) 7 d)))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (after? [this that] (> (.getTime this) (.getTime that)))
  (before? [this that] (< (.getTime this) (.getTime that)))
  (plus- [this period] ((period-fn period) + this))
  (minus- [this period] ((period-fn period) - this))

  goog.date.DateTime
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (let [d (.getDay this)] (if (= d 0) 7 d)))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (after? [this that] (> (.getTime this) (.getTime that)))
  (before? [this that] (< (.getTime this) (.getTime that)))
  (plus- [this period] ((period-fn period) + this))
  (minus- [this period] ((period-fn period) - this))

  goog.date.Date
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (let [d (.getDay this)] (if (= d 0) 7 d)))
  (after? [this that] (> (.getTime this) (.getTime that)))
  (before? [this that] (< (.getTime this) (.getTime that)))
  (plus- [this period] ((period-fn period) + this))
  (minus- [this period] ((period-fn period) - this)))

(def utc (goog.i18n.TimeZone/createTimeZone
           (clj->js {:id "UTC"
                     :std_offset 0
                     :names ["UTC"]
                     :transitions []})))

(defn now
  "Returns a DateTime for the current instant in the UTC time zone."
  []
  (if *sys-time* *sys-time* (goog.date.UtcDateTime.)))

(defn time-now
  "Returns a LocalTime for the current instant without date or time zone
  using ISOChronology in the current time zone."
  []
  (goog.date.DateTime.))

(defn at-midnight [datetime]
  (let [datetime (.clone datetime)]
    (doto datetime
      (.setHours 0)
      (.setMinutes 0)
      (.setSeconds 0)
      (.setMilliseconds 0))))

(defn today-at-midnight
  "Returns a DateMidnight for today at midnight in the UTC time zone."
  []
  (at-midnight (now)))

(defn epoch
  "Returns a DateTime for the begining of the Unix epoch in the UTC time zone."
  []
  (doto (goog.date.UtcDateTime.) (.setTime 0)))

(defn date-midnight
  "Constructs and returns a new DateMidnight in UTC.

  Specify the year, month of year, day of month. Note that month and day are
  1-indexed. Any number of least-significant components can be ommited, in
  which case they will default to 1."
  ([year]
   (date-midnight year 1 1))
  ([year month]
   (date-midnight year month 1))
  ([year month day]
   (goog.date.UtcDateTime. year (dec month) day)))

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
   (goog.date.UtcDateTime. year (dec month) day hour minute second millis)))

(defn local-date-time
  "Constructs and returns a new LocalDateTime.
Specify the year, month of year, day of month, hour of day, minute of hour,
second of minute, and millisecond of second. Note that month and day are
1-indexed while hour, second, minute, and millis are 0-indexed.
Any number of least-significant components can be ommited, in which case
they will default to 1 or 0 as appropriate."
  ([year]
   (local-date-time year 1 1 0 0 0 0))
  ([year month]
   (local-date-time year month 1 0 0 0 0))
  ([year month day]
   (local-date-time year month day 0 0 0 0))
  ([year month day hour]
   (local-date-time year month day hour 0 0 0))
  ([year month day hour minute]
   (local-date-time year month day hour minute 0 0))
  ([year month day hour minute second]
   (local-date-time year month day hour minute second 0))
  ([year month day hour minute second millis]
   (goog.date.DateTime. year (dec month) day hour minute second millis)))

(defn local-date
  "Constructs and returns a new LocalDate.
Specify the year, month, and day. Does not deal with timezones."
  [year month day]
  (goog.date.Date. year (dec month) day))

(defn today
  "Constructs and returns a new LocalDate representing today's date.
LocalDate objects do not deal with timezones at all."
  []
  (goog.date.Date.))

(defn time-zone-for-offset
  "Returns a DateTimeZone for the given offset, specified either in hours or
  hours and minutes."
  ([hours]
     (time-zone-for-offset hours nil))
  ([hours minutes]
     (let [sign (if (neg? hours) :- :+)
           fmt (str "UTC%s%02d" (when minutes ":%02d"))
           hours (if (neg? hours) (* -1 hours) hours)
           tz-name (if minutes
                     (format fmt (name sign) hours minutes)
                     (format fmt (name sign) hours))]
       (with-meta
         {:id tz-name
          :offset [sign hours (or minutes 0) 0]
          :rules "-"
          :names [tz-name]}
         {:type ::time-zone}))))

(defn default-time-zone
  "Returns the default DateTimeZone for the current environment."
  []
  (let [hours (/ (* -1 (.getTimezoneOffset (goog.date.DateTime.))) 60)]
    (prn 'default-time-zone hours (int hours) (mod hours 1))
    (time-zone-for-offset (int hours) (mod hours 1))))

(defn to-time-zone
  "Returns a new ReadableDateTime corresponding to the same absolute instant in time as
the given ReadableDateTime, but with calendar fields corresponding to the given
TimeZone."
  [dt tz]
  (.withZone dt tz))

(defn from-time-zone
  "Returns a new ReadableDateTime corresponding to the same point in calendar time as
the given ReadableDateTime, but for a correspondingly different absolute instant in
time."
  [dt tz]
  (.withZoneRetainFields dt tz))

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

  e.g. `(-> 5 years ago)`"
  [period]
  (minus (now) period))

(defn yesterday
  "Returns a DateTime for yesterday relative to now"
  []
  (-> 1 days ago))

(defn from-now
  "Returns a DateTime a supplied period after the present.
  e.g. `(-> 30 minutes from-now)`"
  [period]
  (plus (now) period))

(defn earliest
  "Returns the earliest of the supplied DateTimes"
  ([dt1 dt2]
     (if (before? dt1 dt2) dt1 dt2))
  ([dts]
     (reduce earliest dts)))

(defn latest
  "Returns the latest of the supplied DateTimes"
  ([dt1 dt2]
     (if (after? dt1 dt2) dt1 dt2))
  ([dts]
     (reduce latest dts)))

(defn interval
  "Returns an interval representing the span between the two given ReadableDateTimes.
  Note that intervals are closed on the left and open on the right."
  [start end]
  {:pre [(< (.getTime start) (.getTime end))]}
  (with-meta {:start start :end end} {:type ::interval}))

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

(defn month-range [{:keys [start end]}]
  (take-while #(before? % end) (map #(plus start (months (inc %))) (range))))

(defn total-days-in-whole-months [interval]
  (map #(.getNumberOfDaysInMonth %) (month-range interval)))

(defn in-months
  "Returns the number of months in the given Interval.

  For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
  returns 1 month.

  Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.

  But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.

  And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months."
  [{:keys [start end] :as interval}]
  (count (total-days-in-whole-months interval)))

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
   (or (= start date)
       ;(= end date)
       (and (before? start date) (after? end date)))))

(defn overlaps?
  "With 2 arguments: Returns true of the two given Intervals overlap.
  Note that intervals that satisfy abuts? do not satisfy overlaps?

  With 4 arguments: Returns true if the range specified by start-a and end-a
  overlaps with the range specified by start-b and end-b."
  ([{start-a :start end-a :end} {start-b :start end-b :end}]
     (and (not (or (= start-a end-b) (= end-a start-b)))
          (overlaps? start-a end-a start-b end-b)))
  ([start-a end-a start-b end-b]
     (or (and (before? start-b end-a) (after? end-b start-a))
         (and (after? end-b start-a) (before? start-b end-a))
         (or (= start-a end-b) (= start-b end-a)))))

(defn abuts?
  "Returns true if Interval a abuts b, i.e. then end of a is exactly the
  beginning of b."
  [{start-a :start end-a :end} {start-b :start end-b :end}]
  (or (= start-a end-b) (= end-a start-b)))

(defn date? [x]
 (satisfies? DateTimeProtocol x))

(defn interval? [x]
 (= ::interval (:type (meta x))))

(defn period? [x]
 (= ::period (:type (meta x))))

(defn period-type? [type x]
  (and (period? x) (contains? x type)))

(defn years?
  "Returns true if the given value is an instance of Years"
  [val]
  (period-type? :years val))

(defn months?
  "Returns true if the given value is an instance of Months"
  [val]
  (period-type? :months val))

(defn weeks?
  "Returns true if the given value is an instance of Weeks"
  [val]
  (period-type? :weeks val))

(defn days?
  "Returns true if the given value is an instance of Days"
  [val]
  (period-type? :days val))

(defn hours?
  "Returns true if the given value is an instance of Hours"
  [val]
  (period-type? :hours val))

(defn minutes?
  "Returns true if the given value is an instance of Minutes"
  [val]
  (period-type? :minutes val))

(defn seconds?
  "Returns true if the given value is an instance of Seconds"
  [val]
  (period-type? :seconds val))

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

(defn first-day-of-the-month
  ([dt]
   (first-day-of-the-month (year dt) (month dt)))
  ([year month]
   (-> (date-time year month 1))))

(defmulti ->period meta)

(defmethod ->period {:type ::interval} [{:keys [start end] :as interval}]
  (let [years (in-years interval)
        start-year (year start)
        leap-years (count
                     (remove false?
                             (map leap-year?
                                  (range start-year (+ start-year years)))))
        start-month  (month start)
        days-in-months (total-days-in-whole-months interval)
        months (count days-in-months)
        days-to-remove (+ (* 365 years) leap-years (reduce + days-in-months))
        days (- (in-days interval) days-to-remove)
        hours-to-remove (* 24 (+ days days-to-remove))
        hours (- (in-hours interval) hours-to-remove)
        minutes-to-remove (* 60 (+ hours hours-to-remove))
        minutes (- (in-minutes interval) minutes-to-remove)
        seconds-to-remove (* 60 (+ minutes minutes-to-remove))
        seconds (- (in-seconds interval) seconds-to-remove)]
    (period :years years
            :months months
            :days days
            :hours hours
            :minutes minutes
            :seconds seconds
            :millis (- (in-millis interval)
                       (* 1000 (+ seconds seconds-to-remove))))))

(defn today-at
  ([hours minutes seconds millis]
   (let [midnight (goog.date.Date.)]
     (doto (goog.date.UtcDateTime. 0)
       (.setYear (.getYear midnight))
       (.setMonth (.getMonth midnight))
       (.setDate (.getDate midnight))
       (.setHours hours)
       (.setMinutes minutes)
       (.setSeconds seconds)
       (.setMilliseconds millis))))
  ([hours minutes seconds]
   (today-at hours minutes seconds 0))
  ([hours minutes]
   (today-at hours minutes 0)))

(defn do-at* [base-date-time body-fn]
  (binding [*sys-time* base-date-time]
    (body-fn)))
