(ns cljs-time.extend-test
  (:require-macros
   [cljs.test :refer [deftest is]])
  (:require
   [cljs-time.core :as time]
   [cljs-time.extend :as extend])
  (:import
   [goog.date Date DateTime UtcDateTime]))

(deftest equals-test
  (is (= (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")
         (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")))
  (is (not (== (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")
               (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")))))

(deftest map-test
  (is (= 4567
         ({(UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00") 4567}
          (UtcDateTime.fromIsoString "2016-03-06T15:01:22.182-00:00")))))
