(ns cljs-time.periodic-test
  (:refer-clojure :exclude [=])
  (:require-macros
    [cemerick.cljs.test :refer [is are deftest]])
  (:require
    [cemerick.cljs.test :as t]
    [cljs-time.core :refer [= date-time hours months]]
    [cljs-time.periodic :refer [periodic-seq]]))

(deftest test-periodic-sequence
  (let [d0  (date-time 2014 10 15 4 33)
        d1  (date-time 2014 10 15 5 33)
        d2  (date-time 2014 10 15 6 33)
        d3  (date-time 2014 10 15 7 33)
        d42 (date-time 2014 10 16 22 33)
        s   (periodic-seq d0 (hours 1))]
    (are [a b] (= a b)
         d0  (first s)
         d1  (second s)
         d2  (nth s 2)
         d3  (nth s 3)
         d42 (nth s 42))))

(deftest test-limited-periodic-sequence
  (let [d0 (date-time 2014 11 25)
        d1 (date-time 2014 12 25)
        d2 (date-time 2015  1 25)
        d3 (date-time 2015  2 25)
        s  (periodic-seq d0 d3 (months 1))]
    (are [a b] (= a b)
         d0 (first s)
         d1 (second s)
         d2 (nth s 2))
    (is (= 3 (count s)))))
