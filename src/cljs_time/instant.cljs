(ns cljs-time.instant
  (:require
   [goog.date.DateTime]
   [cljs-time.format :refer [unparse formatters]]))

(extend-protocol IPrintWithWriter
  goog.date.UtcDateTime
  (-pr-writer [obj writer opts]
    (-write writer "#inst ")
    (pr-writer (unparse (:date-time formatters) obj) writer opts))

  goog.date.DateTime
  (-pr-writer [obj writer opts]
    (-write writer "#inst ")
    (pr-writer (unparse (:date-time formatters) obj) writer opts))

  goog.date.Date
  (-pr-writer [obj writer opts]
    (-write writer "#inst ")
    (pr-writer (unparse (:date formatters) obj) writer opts)))
