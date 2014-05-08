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

  The date-time constructor always returns times in the UTC time zone. If you
  want a time with the specified fields in a different time zone, use
  from-time-zone:

    => (from-time-zone (date-time 1986 10 22) (time-zone-for-offset -2))
    #<DateTime 1986-10-22T00:00:00.000-02:00>

  If on the other hand you want a given absolute instant in time in a
  different time zone, use to-time-zone:

    => (to-time-zone (date-time 1986 10 22) (time-zone-for-offset -2))
    #<DateTime 1986-10-21T22:00:00.000-02:00>

  In addition to time-zone-for-offset, you can use the time-zone-for-id and
  default-time-zone functions and the utc Var to constgruct or get DateTimeZone
  instances.

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
  (:refer-clojure :exclude [extend second])
  (:require
   [cljs-time.internal.core
    :refer [->time-zone bal-units #+cljs format dow days-in-month leap-year?
            millis-since-epoch rebalance split-formats year-corrected-dim]
    :as internal.core]
   [cljs-time.tz.data :refer [zones]]))

(defprotocol DateTimeProtocol
  "Interface for various date time functions"
  (year [this] "Return the year component of the given date/time.")
  (month [this] "Return the month component of the given date/time.")
  (day [this] "Return the day of month component of the given date/time.")
  (day-of-week [this]
    "Return the day of week component of the given date/time. Monday
    is 1 and Sunday is 7")
  (hour [this]
    "Return the hour of day component of the given date/time. A time
    of 12:01am will have an hour component of 0.")
  (minute [this] "Return the minute of hour component of the given date/time.")
  (sec [this] "Return the second of minute component of the given date/time.")
  (second [this]
    "Return the second of minute component of the given date/time.")
  (milli [this]
    "Return the millisecond of second component of the given date/time.")
  (after? [this that]
    "Returns true if ReadableDateTime 'this' is strictly after
    date/time 'that'.")
  (before? [this that]
    "Returns true if ReadableDateTime 'this' is strictly before
    date/time 'that'.")
  (plus- [this period]
    "Returns a new date/time corresponding to the given date/time
    moved forwards by the given Period(s).")
  (minus- [this period]
    "Returns a new date/time corresponding to the given date/time
    moved backwards by the given Period(s)."))

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

(defn time-zone-for-id
  "Returns a DateTimeZone for the given ID, which must be in long form, e.g.
'America/Matamoros'."
  [id]
  (->time-zone (last (zones id)) id))

(def utc
  (with-meta
    {:id "Etc/UTC" :offset [:+ 0] :rules "-" :names ["UTC"]}
    {:type ::time-zone}))

(def periods
  (let [fixed-time-fn (fn [f set-fn op date value]
                        (set-fn date (op (f date) value)))]
    {:millis (partial fixed-time-fn milli #(assoc %1 :millis %2))
     :seconds (partial fixed-time-fn second #(assoc %1 :seconds %2))
     :minutes (partial fixed-time-fn minute #(assoc %1 :minutes %2))
     :hours (partial fixed-time-fn hour #(assoc %1 :hours %2))
     :days (partial fixed-time-fn day #(assoc %1 :days %2))
     :weeks (fn [op date value] (assoc date :days (op (day date) (* 7 value))))
     :months (fn [op date value]
               (let [date (fixed-time-fn month
                                         #(assoc %1 :months %2)
                                         op date value)
                     [months years] (bal-units (month date) (year date) 12 1)
                     dim (days-in-month (dec months))]
                 (assoc (if (> (day date) dim) (assoc date :days dim) date)
                   :months months
                   :years years)))
     :years (fn [op date value]
              (let [day (day date)]
                (assoc date 
                  :days (if (and (leap-year? (year date))
                                 (= 2 (month date))
                                 (= 29 day))
                          28
                          day)
                  :years (op (year date) value))))}))

(defn period-fn [p]
  (fn [operator date]
    (rebalance
     (reduce #((periods (key %2)) operator %1 (val %2)) date p))))

(defrecord DateTime
    [years months days hours minutes seconds millis time-zone]
  DateTimeProtocol
  (year [_] years)
  (month [_] months)
  (day [_] days)
  (day-of-week [_] (dow years months days))
  (hour [_] hours)
  (minute [_] minutes)
  (second [_] seconds)
  (milli [_] millis)
  (after? [this that] (> (millis-since-epoch this) (millis-since-epoch that)))
  (before? [this that] (< (millis-since-epoch this) (millis-since-epoch that)))
  (plus- [this period] ((period-fn period) + this))
  (minus- [this period] ((period-fn period) - this)))

(def ^:dynamic *sys-time* nil)

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
                  (let [ms-year (if (neg? ms) (dec year) year)
                        ms-in-year (if (leap-year? ms-year)
                                     31622400000
                                     31536000000)]
                    (if (<= ms ms-in-year)
                      [year ms]
                      (recur ((if (neg? ms) dec inc) year) (- ms ms-in-year)))))
        [dd MM] (loop [days (/ ms 86400000) month 1]
                  (let [dim (year-corrected-dim yy month)]
                    (if (<= days dim)
                      [(inc days) month]
                      (recur (- days dim) (inc month)))))]
    (rebalance
     (->DateTime yy MM dd (/ hh 3600000) (/ mm 60000) (/ ss 1000) SSS utc))))

(defn now
  "Returns a DateTime for the current instant in the UTC time zone."
  []
  (if *sys-time*
    *sys-time*
    #+cljs (from-millis-since-epoch (js/Date.now))
    #+clj (from-millis-since-epoch (.getTime (java.util.Date.)))))

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
     (date-time year month day hour minute second millis utc))
  ([year month day hour minute second millis tz]
     (->DateTime year month day hour minute second millis tz)))

(defn at-midnight [{:keys [years months days]}]
  (date-time years months days))

(defn today-at-midnight
  "Returns a DateMidnight for today at midnight in the UTC time zone."
  []
  (at-midnight (if *sys-time* *sys-time* (now))))

(defn epoch
  "Returns a DateTime for the begining of the Unix epoch in the UTC time zone."
  []
  (from-millis-since-epoch 0))

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
   (date-time year month day)))

(defn period
  ([period value]
   (with-meta {period value} {:type ::period}))
  ([p1 v1 & kvs]
   (apply assoc (period p1 v1) kvs)))

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

(defn from-now
  "Returns a DateTime a supplied period after the present.
  e.g. `(-> 30 minutes from-now)`"
  [period]
  (plus (now) period))

(defn interval
  "Returns an interval representing the span between the two given ReadableDateTimes.
  Note that intervals are closed on the left and open on the right."
  [start end]
  {:pre [(< (millis-since-epoch start) (millis-since-epoch end))]}
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
  (- (millis-since-epoch end) (millis-since-epoch start)))

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
  (map #(days-in-month (dec (month %))) (month-range interval)))

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
       (and (after? end-b start-a) (before? start-b end-a)))))

(defn abuts?
  "Returns true if Interval a abuts b, i.e. then end of a is exactly the
  beginning of b."
  [{start-a :start end-a :end} {start-b :start end-b :end}]
  (or (= start-a end-b) (= end-a start-b)))

(defn mins-ago
  [d]
  (in-minutes (interval d (now))))

(defn last-day-of-the-month
  ([dt]
     (last-day-of-the-month (year dt) (month dt)))
  ([year month]
     (-> (date-time year month 1)
         (plus (months 1))
         (minus (days 1)))))

(defn number-of-days-in-the-month
  ([dt]
   (number-of-days-in-the-month (year dt) (month dt)))
  ([year month]
   (day (last-day-of-the-month year month))))

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
        start-month (month start)
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
    (let [midnight (today-at-midnight)]
      (assoc midnight
        :hours hours
        :minutes minutes
        :seconds seconds
        :millis millis)))
  ([hours minutes seconds]
   (today-at hours minutes seconds 0))
  ([hours minutes]
   (today-at hours minutes 0)))

(defn do-at* [base-date-time body-fn]
  (binding [*sys-time* base-date-time]
    (body-fn)))
