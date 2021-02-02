(ns cljs-time.extend-test
  (:require
   [cljs.test :refer-macros [deftest is]]
   [cljs-time.core :as time]
   [cljs-time.extend :as extend])
  (:import
   [goog.date Date DateTime UtcDateTime]))

(deftest equals-test
         (is (= (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")
                (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")))
         (is (not (== (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")
                      (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")))))

(deftest compare-test
         (is (= -1
                (compare (goog.date.Date. 2018 10 1)
                         (goog.date.Date. 2018 10 2))))
         (is (= (doto (goog.date.Date.) (.setTime 1467151200000))
                (doto (goog.date.Date.) (.setTime 1467151200003))))
         )



(deftest map-test
  (is (= 4567
         ({(UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00") 4567}
          (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")))))
