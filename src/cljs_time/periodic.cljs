(ns cljs-time.periodic
  (:require
   [cljs-time.core :as ct]
   [cljs-time.internal.core :as internal]))

(defn periodic-seq
  "Returns a sequence of date-time values growing over specific period.
  The 2 argument function takes as input the starting value and the growing value,
  returning a lazy infinite sequence.
  The 3 argument function takes as input the starting value, the upper bound value,
  and the growing value, return a lazy sequence."
  ([start period-like]
   (let [period (ct/->period period-like)]
     (map (fn [i]
            (ct/plus start (internal/multiplied-by period i)))
          (iterate inc 0))))
  ([start end period-like]
   (let [period (ct/->period period-like)]
     (take-while (fn [next]
                   (ct/before? next end))
                 (periodic-seq start period-like)))))
