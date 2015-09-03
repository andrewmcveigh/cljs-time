(ns cljs-time.extend
  "### Optional namespace to extend goog.date.* DateTime types

  Equality of goog.date.* DateTime types works differently to
  clj-time/Joda's equality. Optionally require this namespace
  to extend cljs.core/IEquiv protocol for:

   * goog.date.Date
   * goog.date.DateTime
   * goog.date.UtcDateTime"
  (:require
   [goog.date.Date]
   [goog.date.DateTime]
   [goog.date.UtcDateTime]))

(extend-type goog.date.Date
  IEquiv
  (-equiv [o other]
    (and (instance? goog.date.Date other)
         (identical? (.getTime o) (.getTime other))
         (identical? (.getTimezoneOffset o) (.getTimezoneOffset other))))
  IComparable
  (-compare [o other]
    (- (.getTime o) (.getTime other))))

(extend-type goog.date.DateTime
  IEquiv
  (-equiv [o other]
    (and (instance? goog.date.Date other)
         (identical? (.getTime o) (.getTime other))
         (identical? (.getTimezoneOffset o) (.getTimezoneOffset other))))
  IComparable
  (-compare [o other]
    (- (.getTime o) (.getTime other))))

(extend-type goog.date.UtcDateTime
  IEquiv
  (-equiv [o other]
    (and (instance? goog.date.Date other)
         (identical? (.getTime o) (.getTime other))
         (identical? (.getTimezoneOffset o) (.getTimezoneOffset other))))
  IComparable
  (-compare [o other]
    (- (.getTime o) (.getTime other))))
