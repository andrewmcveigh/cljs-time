(ns cljs-time.format-test
  (:require-macros
   [cljs-test.macros :refer [is is= deftest]])
  (:require
    [cljs-time.coerce :refer [from-date to-date]]
    [cljs-test.core :as test]
    [cljs-time.format :as format]))

(deftest parse-test
  (let [date (format/parse "12/08/1938" "dd/MM/yyyy")]
    (is= 1938 (.getYear date))
    (is= 12   (.getUTCDate date))
    (is= 7    (.getUTCMonth date)))
  (let [date (format/parse "28th August 2013 14:26" "dth MMM yyyy hh:mm")]
    (is= 2013 (.getYear date))
    (is= 28   (.getUTCDate date))
    (is= 7    (.getUTCMonth date))
    (is= 14   (.getUTCHours date))
    (is= 26   (.getUTCMinutes date))))

(deftest unparse-test
  (let [date (from-date #inst "2013-08-29T00:00:00.000-00:00")]
    (is= "Thursday 29th August 2013" (format/unparse date "dow dth MMM yyyy"))
    (is= "29/08/2013 00:00:00.000" (format/unparse date "dd/MM/yyyy hh:mm:ss.SSS"))))
