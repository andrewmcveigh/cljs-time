(ns cljs-time.instant-test
  (:require [cljs-time.instant]
            [cljs.test])
  (:require-macros [cljs.test :refer [deftest is]])
  (:import [goog.date Date DateTime UtcDateTime]))

(deftest date-format-test
  (is (= (with-out-str (pr (Date. 2017 0 1)))
         "#inst \"2017-01-01\"")))

(deftest date-time-format-test
  (is (= (with-out-str (pr (DateTime. 2017 0 1)))
         "#inst \"2017-01-01T00:00:00.000\""))
  (is (= (with-out-str (pr (UtcDateTime. 2017 0 1)))
         "#inst \"2017-01-01T00:00:00.000Z\"")))
