(ns cljs-time.instant
  "### Optional namespace to extend goog.date.* DateTime types

   Optionally require this namespace to extend
   cljs.core/IPrintWithWriter protocol for:

   * goog.date.Date
   * goog.date.DateTime
   * goog.date.UtcDateTime"

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
