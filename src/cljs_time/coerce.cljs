(ns cljs-time.coerce
  "### Utilites to coerce goog.data DateTime instances to and from
  various other types.

  For example, to convert a goog.date DateTime to and from a js number:

    => (to-long (date-time 1998 4 25))
    893462400000

    => (from-long 893462400000)
    #<19980425T000000>"
  (:refer-clojure :exclude [extend second])
  (:require
    [cljs-time.core :refer
     [date-time from-default-time-zone year month day hour minute second milli]]
    [cljs-time.format :as time-fmt])
  (:import [goog.date UtcDateTime]))

(defprotocol ICoerce
  (to-date-time [obj] "Convert `obj` to a goog.date.DateTime instance."))

(defn from-long
  "Returns a DateTime instance in the UTC time zone corresponding to the given
  number of milliseconds after the Unix epoch."
  [millis]
  (UtcDateTime.fromTimestamp millis))

(defn from-string
  "Returns DateTime instance from string using formatters in cljs-time.format,
  returning first which parses"
  [s]
  (first
    (for [f (vals time-fmt/formatters)
          :let [d (try (time-fmt/parse f s) (catch js/Error _))]
          :when d] d)))

(defn from-date
  "Returns a DateTime instance in the UTC time zone corresponding to the given
  js Date object."
  [date]
  (from-long (.getTime date)))

(defn to-long
  "Convert `obj` to the number of milliseconds after the Unix epoch."
  [obj]
  (if-let [dt (to-date-time obj)]
    (.getTime dt)))

(defn to-epoch
  "Convert `obj` to Unix epoch."
  [obj]
  (let [millis (to-long obj)]
    (and millis (/ millis 1000))))

(defn to-date
  "Convert `obj` to a JavaScript Date instance."
  [obj]
  (if-let [dt (to-date-time obj)]
    (js/Date. (.getTime dt))))

(defn to-string
  "Returns a string representation of obj in UTC time-zone
  using \"yyyy-MM-dd'T'HH:mm:ss.SSSZZ\" date-time representation."
  [obj]
  (if-let [dt (to-date-time obj)]
    (time-fmt/unparse (:date-time time-fmt/formatters) dt)))

(defn to-local-date
  "Convert `obj` to a goog.date.Date instance"
  [obj]
  (if-let [dt (to-date-time obj)]
    (goog.date.Date. (.getYear dt) (.getMonth dt) (.getDate dt))))

(defn to-local-date-time
  "Convert `obj` to a goog.date.DateTime instance"
  [obj]
  (if-let [dt (to-date-time obj)]
    (doto (goog.date.DateTime. (.getYear dt) (.getMonth dt) (.getDate dt))
      (.setHours (.getHours dt))
      (.setMinutes (.getMinutes dt))
      (.setSeconds (.getSeconds dt))
      (.setMilliseconds (.getMilliseconds dt)))))

(extend-protocol ICoerce
  nil
  (to-date-time [_]
    nil)

  js/Date
  (to-date-time [date]
    (from-date date))

  goog.date.Date
  (to-date-time [local-date]
    (doto (goog.date.UtcDateTime.) (.set local-date)))

  goog.date.DateTime
  (to-date-time [local-date-time]
    (doto (goog.date.UtcDateTime.) (.setTime (.getTime local-date-time))))

  goog.date.UtcDateTime
  (to-date-time [date-time]
    date-time)

  number
  (to-date-time [long]
    (from-long long))

  string
  (to-date-time [string]
    (from-string string)))
