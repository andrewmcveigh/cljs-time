(ns cljs-time.format-test
  (:require-macros
   [cljs-test.macros :refer [is is= deftest]])
  (:require
    [cljs-time.coerce :refer [from-date to-date]]
    [cljs-time.core :as time :refer [interval within?]]
    [cljs-time.format :as format]
    [cljs-test.core :as test]
    ))

(deftest parse-test
  (let [date (format/parse "12/08/1938" "dd/MM/yyyy")]
    (is= 1938 (.getYear date))
    (is= 12   (.getDate date))
    (is= 7    (.getMonth date)))
  (let [date (format/parse "28th August 2013 14:26" "dth MMM yyyy hh:mm")]
    (is= 2013 (.getYear date))
    (is= 28   (.getDate date))
    (is= 7    (.getMonth date))
    (is= 14   (.getHours date))
    (is= 26   (.getMinutes date)))
  (let [date (format/parse "29th February 2012 14:26" "dth MMM yyyy hh:mm")]
    (is= 2012 (.getYear date))
    (is= 29   (.getDate date))
    (is= 1    (.getMonth date))
    (is= 14   (.getHours date))
    (is= 26   (.getMinutes date))))

(deftest unparse-test
  (let [date (from-date #inst "2013-08-29T00:00:00.000-00:00")]
    (is= "Thursday 29th August 2013" (format/unparse date "dow dth MMM yyyy"))
    (is= "29/08/2013 00:00:00.000" (format/unparse date "dd/MM/yyyy hh:mm:ss.SSS"))))

(defn ist=
  "Is time ="
  [a b]
  (is= (.getTime a) (.getTime b)))

(deftest arithmetic-test
  (ist= (time/plus (format/parse "30/08/2013" "dd/MM/yyyy") (time/months 1))
        (format/parse "30/09/2013" "dd/MM/yyyy"))
  (ist= (time/plus (format/parse "30/08/2013" "dd/MM/yyyy") (time/months 6))
        (format/parse "30/02/2014" "dd/MM/yyyy"))
  (ist= (time/minus (format/parse "30/08/2013" "dd/MM/yyyy") (time/months 8))
        (format/parse "30/12/2012" "dd/MM/yyyy"))
  (ist= (time/minus (format/parse "30/08/2013" "dd/MM/yyyy") (time/months 1))
        (format/parse "30/07/2013" "dd/MM/yyyy"))
  (ist= (time/plus (format/parse "30/08/2013" "dd/MM/yyyy") (time/millis 1))
        (format/parse "30/08/2013 00:00:00.001" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "30/08/2013" "dd/MM/yyyy") (time/millis 1000))
        (format/parse "30/08/2013 00:00:01.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "30/08/2013" "dd/MM/yyyy") (time/millis 1))
        (format/parse "29/08/2013 23:59:59.999" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "30/08/2013" "dd/MM/yyyy") (time/seconds 1))
        (format/parse "30/08/2013 00:00:01.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "30/08/2013" "dd/MM/yyyy") (time/seconds 61))
        (format/parse "30/08/2013 00:01:01.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "30/08/2013" "dd/MM/yyyy") (time/seconds 1))
        (format/parse "29/08/2013 23:59:59.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "30/08/2013" "dd/MM/yyyy") (time/minutes 1))
        (format/parse "30/08/2013 00:01:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "30/08/2013" "dd/MM/yyyy") (time/minutes 1))
        (format/parse "29/08/2013 23:59:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "30/08/2013" "dd/MM/yyyy") (time/hours 1))
        (format/parse "30/08/2013 01:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "30/08/2013" "dd/MM/yyyy") (time/hours 1))
        (format/parse "29/08/2013 23:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "31/08/2013" "dd/MM/yyyy") (time/days 1))
        (format/parse "01/09/2013 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "01/08/2013" "dd/MM/yyyy") (time/days 1))
        (format/parse "31/07/2013 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "30/08/2013" "dd/MM/yyyy") (time/days 1))
        (format/parse "29/08/2013 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "31/08/2013" "dd/MM/yyyy") (time/weeks 1))
        (format/parse "07/09/2013 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "30/08/2013" "dd/MM/yyyy") (time/weeks 1))
        (format/parse "23/08/2013 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "31/08/2013" "dd/MM/yyyy") (time/years 1))
        (format/parse "31/08/2014 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "31/08/2013" "dd/MM/yyyy") (time/years 1))
        (format/parse "31/08/2012 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/plus (format/parse "29/02/2012" "dd/MM/yyyy") (time/years 1))
        (format/parse "28/02/2013 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS"))
  (ist= (time/minus (format/parse "29/02/2012" "dd/MM/yyyy") (time/years 1))
        (format/parse "28/02/2011 00:00:00.000" "dd/MM/yyyy hh:mm:ss.SSS")))

(deftest within?-test

  (is (within?
        (interval (goog.date.DateTime. 2013 0 1 0 0 0 0)
                  (goog.date.DateTime. 2013 1 1 0 0 0 0))
        (goog.date.DateTime. 2013 0 1 0 0 0 0)))

  (is (within?
        (interval (goog.date.DateTime. 2013 0 1 0 0 0 0)
                  (goog.date.DateTime. 2013 1 1 0 0 0 0))
        (goog.date.DateTime. 2013 0 11 0 0 0 0)))

  (is (within?
        (interval (goog.date.DateTime. 2013 0 1 0 0 0 0)
                  (goog.date.DateTime. 2013 1 1 0 0 0 0))
        (time/minus (goog.date.DateTime. 2013 1 1 0 0 0 0)
                    (time/millis 1))))

  (is (not
        (within?
          (interval (goog.date.DateTime. 2013 0 1 0 0 0 0)
                    (goog.date.DateTime. 2013 1 1 0 0 0 0))
          (goog.date.DateTime. 2013 1 1 0 0 0 0))))

  (is (not (within?
             (interval (goog.date.DateTime. 2013 0 1 0 0 0 0)
                       (goog.date.DateTime. 2013 2 1 0 0 0 0))
             (goog.date.DateTime. 2013 2 1 0 0 0 1))))

  (is (not (within?
             (interval (goog.date.DateTime. 2013 0 1 0 0 0 0)
                       (goog.date.DateTime. 2013 2 1 0 0 0 0))
             (goog.date.DateTime. 2012 11 31 23 59 59 999)))))
