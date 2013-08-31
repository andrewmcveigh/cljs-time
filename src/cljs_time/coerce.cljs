(ns cljs-time.coerce
  (:require
    [goog.date :as date]))

(defn to-date [d]
  (js/Date. (.getTime d)))

(defn from-date [date]
  (doto (date/UtcDateTime.) (.setTime (.getTime date))))
