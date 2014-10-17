(ns cljs-time.periodic
  (:require [cljs-time.core :as time]))

(defn periodic-seq
  "Returns an infinite sequence of date-time values growing over specific period.
  The 2 argument function takes as input the starting value and the growing value,
  returning a lazy infinite sequence.
  The 3 argument function takes as input the starting value, the upper bound value,
  and the growing value, return a lazy sequence."
  ([start period-like]
   (iterate #(time/plus % period-like) start))
  ([start end period-like]
   (take-while #(time/before? % end) (periodic-seq start period-like))))
