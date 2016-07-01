(ns cljs-time.extend
  "### Optional namespace to extend goog.date.* DateTime types

  Equality of goog.date.* DateTime types works differently to
  clj-time/Joda's equality. Optionally require this namespace
  to extend cljs.core/IEquiv protocol for:

   * goog.date.Date
   * goog.date.DateTime
   * goog.date.UtcDateTime"
  (:import
   [goog.date Date]
   [goog.date DateTime]
   [goog.date UtcDateTime]))

(defn hash-parts [type-hash ms-since-epoch offset]
  (let [ms-shifted (* ms-since-epoch 100000)
        adj-offset (+ offset 720)
        type-offset (* type-hash 10000)]
    (+ ms-shifted adj-offset type-offset)))

(extend-type goog.date.Date
  IEquiv
  (-equiv [o other]
    (and (instance? goog.date.Date other)
         (.equals o other)))
  IHash
  (-hash [this]
    (hash-parts 1 (.getTime this) (.getTimezoneOffset this)))
  IComparable
  (-compare [o other]
    (let [yo (.getYear o)
          yother (.getYear other)
          dayo (.getDayOfYear o)
          dayother (.getDayOfYear other)]
      (cond
        (not= yo yother) (- yo yother)
        (not= dayo dayother) (- dayo dayother)
        :else 0))))

(extend-type goog.date.DateTime
  IEquiv
  (-equiv [o other]
    (and (instance? goog.date.DateTime other)
         (identical? (.getTime o) (.getTime other))
         (identical? (.getTimezoneOffset o) (.getTimezoneOffset other))))
  IHash
  (-hash [this]
    (hash-parts 2 (.getTime this) (.getTimezoneOffset this)))
  IComparable
  (-compare [o other]
    (- (.getTime o) (.getTime other))))

(extend-type goog.date.UtcDateTime
  IEquiv
  (-equiv [o other]
    (and (instance? goog.date.UtcDateTime other)
         (identical? (.getTime o) (.getTime other))
         (identical? (.getTimezoneOffset o) (.getTimezoneOffset other))))
  IHash
  (-hash [this]
    (hash-parts 3 (.getTime this) (.getTimezoneOffset this)))
  IComparable
  (-compare [o other]
    (- (.getTime o) (.getTime other))))
