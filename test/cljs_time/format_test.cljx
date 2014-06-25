(ns cljs-time.format-test
  #+cljs (:require-macros [cemerick.cljs.test :refer [is deftest]])
  (:require
    #+cljs [cemerick.cljs.test :as t]
    #+clj [clojure.test :refer [is deftest]]
    [cljs-time.coerce :refer [from-date to-date]]
    [cljs-time.core :as time :refer [date-time interval utc within?]]
    [cljs-time.format :as format
     :refer [formatter formatters instant->map parse unparse]]
    [cljs-time.internal.core :refer [parse-int]]))

(defn ->utc [{{[sign hh mm ss] :offset} :time-zone :as dt}]
  (let [sign (cond (= sign :-) time/plus
                   (= sign :+) time/minus)
        [hh mm ss] (map #(or % 0) [hh mm ss])]
    (-> dt
        (sign (time/hours hh))
        (sign (time/minutes mm))
        (sign (time/seconds ss)))))

(defn utc-int-vec [d]
  (let [d (->utc d)]
    [(time/year d) (time/month d) (time/day d)
     (time/hour d) (time/minute d) (time/second d) (time/milli d)]))

(deftest parse-test
  (is
   (= :parser-no-match 
      (try
        (format/parse (formatter "dth MMM yyyy HH:mm") "28th August 2013 14:26")
        (catch #+clj clojure.lang.ExceptionInfo #+cljs ExceptionInfo e
               (:type (ex-data e))))))
  (is
   (= :invalid-date
      (try
        (format/parse (formatter "dd/MM/yyyy") "30/02/2014")
        (catch #+clj clojure.lang.ExceptionInfo #+cljs ExceptionInfo e
               (:type (ex-data e))))))
  (is
   (= :invalid-date
      (try
        (format/parse (formatter "dd/MM/yyyy") "31/04/2013")
        (catch #+clj clojure.lang.ExceptionInfo #+cljs ExceptionInfo e
               (:type (ex-data e))))))
  (is
   (= :invalid-date
      (try
        (format/parse (formatter "dd/MM/yyyy") "32/04/2013")
        (catch #+clj clojure.lang.ExceptionInfo #+cljs ExceptionInfo e
               (:type (ex-data e))))))
  (is (= [1938 8 12 0 0 0 0]
         (utc-int-vec (format/parse (formatter "dd/MM/yyyy") "12/08/1938"))))
  (is (= [2013 8 28 14 26 0 0]
         (utc-int-vec
          (format/parse (formatter "dth MMMM yyyy HH:mm")
                        "28th August 2013 14:26"))))
  (is (= [2012 2 29 14 26 0 0]
         (utc-int-vec
          (format/parse (formatter "dth MMMM yyyy HH:mm")
                        "29th February 2012 14:26"))))
  (is (= [2014 4 1 13 57 0 0]
         (utc-int-vec
          (format/parse (formatter "yyyy-MM-dd'T'HH:mm:ssZZ")
                        "2014-04-01T14:57:00+01:00"))))
  (is (= [2014 04 1 23 27 0 0]
         (utc-int-vec
          (format/parse (:basic-date-time-no-ms format/formatters)
                        "20140401T145700-08:30"))))
  (is (= [2002 10 2 13 0 0 0]
         (utc-int-vec
          (format/parse (:rfc822 formatters)
                        "Wed, 02 Oct 2002 15:00:00 +0200")))))

(deftest unparse-test
  (let [date (from-date #inst "2013-08-29T00:00:00.000-00:00")]
    (is (= "Thursday 29th Aug 2013" (format/unparse (formatter "dow dth MMM yyyy") date)))
    (is (= "Thursday 29th August 2013" (format/unparse (formatter "dow dth MMMM yyyy") date)))
    (is (= "29/08/2013 00:00:00.000Z" (format/unparse (formatter "dd/MM/yyyy HH:mm:ss.SSSZ") date)))))

(deftest arithmetic-test
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/months 1))
         (format/parse (formatter "dd/MM/yyyy") "30/09/2013")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/months 6))
         (format/parse (formatter "dd/MM/yyyy") "28/02/2014")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/months 8))
         (format/parse (formatter "dd/MM/yyyy") "30/12/2012")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/months 1))
         (format/parse (formatter "dd/MM/yyyy") "30/07/2013")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/millis 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "30/08/2013 00:00:00.001")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/millis 1000))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "30/08/2013 00:00:01.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/millis 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "29/08/2013 23:59:59.999")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/seconds 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "30/08/2013 00:00:01.000")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/seconds 61))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "30/08/2013 00:01:01.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/seconds 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "29/08/2013 23:59:59.000")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/minutes 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "30/08/2013 00:01:00.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/minutes 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "29/08/2013 23:59:00.000")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/hours 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "30/08/2013 01:00:00.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/hours 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "29/08/2013 23:00:00.000")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "31/08/2013") (time/days 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "01/09/2013 00:00:00.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "01/08/2013") (time/days 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "31/07/2013 00:00:00.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/days 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "29/08/2013 00:00:00.000")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "31/08/2013") (time/weeks 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "07/09/2013 00:00:00.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "30/08/2013") (time/weeks 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "23/08/2013 00:00:00.000")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "31/08/2013") (time/years 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "31/08/2014 00:00:00.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "31/08/2013") (time/years 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "31/08/2012 00:00:00.000")))
  (is (= (time/plus (format/parse (formatter "dd/MM/yyyy") "29/02/2012") (time/years 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "28/02/2013 00:00:00.000")))
  (is (= (time/minus (format/parse (formatter "dd/MM/yyyy") "29/02/2012") (time/years 1))
         (format/parse (formatter "dd/MM/yyyy HH:mm:ss.SSS") "28/02/2011 00:00:00.000"))))

(deftest within?-test

  (is (within?
        (interval (date-time 2013 1 1 0 0 0 0)
                  (date-time 2013 2 1 0 0 0 0))
        (date-time 2013 1 1 0 0 0 0)))

  (is (within?
        (interval (date-time 2013 1 1 0 0 0 0)
                  (date-time 2013 2 1 0 0 0 0))
        (date-time 2013 1 11 0 0 0 0)))

  (is (within?
        (interval (date-time 2013 1 1 0 0 0 0)
                  (date-time 2013 2 1 0 0 0 0))
        (time/minus (date-time 2013 2 1 0 0 0 0)
                    (time/millis 1))))

  (is (not
        (within?
          (interval (date-time 2013 1 1 0 0 0 0)
                    (date-time 2013 2 1 0 0 0 0))
          (date-time 2013 2 1 0 0 0 0))))

  (is (not (within?
             (interval (date-time 2013 1 1 0 0 0 0)
                       (date-time 2013 3 1 0 0 0 0))
             (date-time 2013 3 1 0 0 0 1))))

  (is (not (within?
             (interval (date-time 2013 1 1 0 0 0 0)
                       (date-time 2013 3 1 0 0 0 0))
             (date-time 2012 12 31 23 59 59 999)))))


(deftest test-formatter
  (let [fmt (formatter "yyyyMMdd")]
    (is (= (date-time 2010 3 11)
           (parse fmt "20100311")))))

;(deftest test-formatter-local
;(let [fmt (formatter-local "yyyyMMdd")]
;(is (= (local-date-time 2010 3 11)
;(parse-local fmt "20100311")))))

(deftest test-parse
  (is (= (date-time 2010 10 11)
         (parse "2010-10-11T00:00:00")))
  (let [fmt (formatters :date)]
    (is (= (date-time 2010 3 11)
           (parse fmt "2010-03-11"))))
  (let [fmt (formatters :basic-date-time)]
    (is (= (date-time 2010 3 11 17 49 20 881)
           (parse fmt "20100311T174920.881Z")))))

(deftest test-unparse
  (let [fmt (formatters :date)]
    (is (= "2010-03-11"
           (unparse fmt (date-time 2010 3 11)))))
  (let [fmt (formatters :basic-date-time)]
    (is (= "20100311T174920.881Z"
           (unparse fmt (date-time 2010 3 11 17 49 20 881))))
    ;(is (= "20100311T124920.881-0500"
    ;(unparse (formatter "yyyyMMdd'T'HHmmss.SSSZ"
    ;(DateTimeZone/forOffsetHours -5))
    ;(date-time 2010 3 11 17 49 20 881))))
    ))

;(deftest test-local-parse
;(is (= (local-date-time 2010 10 11)
;(parse-local "2010-10-11T00:00:00")))
;(let [fmt (formatters :date)]
;(is (= (local-date-time 2010 3 11)
;(parse-local fmt "2010-03-11"))))
;(let [fmt (formatters :basic-date-time)]
;(is (= (local-date-time 2010 3 11 17 49 20 881)
;(parse-local fmt "20100311T174920.881Z")))))

;(deftest test-local-unparse
;(let [fmt (formatters :date)]
;(is (= "2010-03-11"
;(unparse-local fmt (local-date-time 2010 3 11)))))
;(let [fmt (formatters :basic-date-time)]
;(is (= "20100311T174920.881"
;(unparse-local fmt (local-date-time 2010 3 11 17 49 20 881))))
;(is (= "20100311T174920.881"
;(unparse-local (formatter-local "yyyyMMdd'T'HHmmss.SSS")
;(local-date-time 2010 3 11 17 49 20 881))))))

;(deftest test-local-date-parse
;(is (= (local-date 2010 10 11)
;(parse-local-date "2010-10-11T00:00:00")))
;(let [fmt (formatters :date)]
;(is (= (local-date 2010 3 11)
;(parse-local-date fmt "2010-03-11"))))
;(let [fmt (formatters :basic-date-time)]
;(is (= (local-date 2010 3 11)
;(parse-local-date fmt "20100311T000000.000Z")))))

;(deftest test-local-date-unparse
;(let [fmt (formatters :date)]
;(is (= "2010-03-11"
;(unparse-local-date fmt (local-date 2010 3 11)))))
;(let [fmt (formatters :basic-date-time)]
;(is (= "20100311T000000.000"
;(unparse-local-date fmt (local-date-time 2010 3 11 00 00 00 000))))))

;(deftest test-formatter-modifiers
;(let [fmt (formatter "YYYY-MM-dd HH:mm z" (time-zone-for-id "America/Chicago"))]
;(is (= "2010-03-11 11:49 CST"
;(unparse fmt (date-time 2010 3 11 17 49 20 881)))))
;(let [fmt (with-zone (formatters :basic-date-time) (time-zone-for-id "America/Chicago"))]
;(is (= "20100311T114920.881-0600"
;(unparse fmt (date-time 2010 3 11 17 49 20 881)))))
;(let [fmt (with-locale (formatters :rfc822) Locale/ITALY)]
;(is (= "gio, 11 mar 2010 17:49:20 +0000"
;(unparse fmt (date-time 2010 3 11 17 49 20 881)))))
;(let [fmt (with-pivot-year (formatter "YY") 2050)]
;(is (= (date-time 2075 1 1)
;(parse fmt "75")))))

;(deftest test-multi-parser
;(let [fmt (formatter utc "YYYY-MM-dd HH:mm" "YYYY/MM/dd@HH:mm" "YYYYMMddHHmm")]
;(is (= "2012-02-01 22:15"
;(unparse fmt (parse fmt "2012-02-01 22:15"))))
;(is (= "2012-02-01 22:15"
;(unparse fmt (parse fmt "2012/02/01@22:15"))))
;(is (= "2012-02-01 22:15"
;(unparse fmt (parse fmt "201202012215"))))
;(is (= (date-time 2012 2 1 22 15)
;(parse fmt "201202012215")))
;(is (= "2012-02-01 22:15"
;(unparse fmt (date-time 2012 2 1 22 15))))))

(deftest test-mysql-format
  (is (= (date-time 2013 1 1 0 0 0) (parse "2013-01-01 00:00:00")))
  (is (= (date-time 1991 1 13 11 30 45) (parse "1991-1-13 11:30:45")))
  (is (= (date-time 2013 8 3 12 11 13) (parse "2013-08-03 12:11:13"))))

(deftest test-hour-meridiem-formatter
  (let [f1 (formatter "h:mma")
        f2 (formatter "H:mm")
        morning (date-time 0 0 0  7 40 10 123)
        evening (date-time 0 0 0 16 19 49 877)
        midnight (date-time 0 0 0 0 0 0 0)
        noon (date-time 0 0 0 12 0 0 0)]
    (is (= "12:00am" (unparse f1 midnight)))
    (is (= "12:00pm" (unparse f1 noon)))
    (is (= "7:40am" (unparse f1 morning)))
    (is (= "4:19pm" (unparse f1 evening)))
    (is (= "7:40"   (unparse f2 morning)))
    (is (= "16:19"  (unparse f2 evening)))
    (is (= "12:00am" (unparse f1 (parse f1 "12:00am"))))
    (is (= "12:00pm" (unparse f1 (parse f1 "12:00pm"))))
    (is (= "7:40am"  (unparse f1 (parse f1 "7:40am"))))
    (is (= "4:19pm"  (unparse f1 (parse f1 "4:19pm"))))
    (is (= "7:40"    (unparse f2 (parse f2 "7:40"))))
    (is (= "16:19"   (unparse f2 (parse f2 "16:19"))))))

(deftest test-instant->map-from-interval
  (let [it (interval (date-time 1986 9 2 0 0 2)  (date-time 1986 11 30 2 5 12))]
    (is (= (instant->map it)
           {:years 0
            :months 2
            :days 28
            :hours 2
            :minutes 5
            :seconds 10
            :millis 0
            }))))

(deftest test-instant->map-from-date-time
  (let [dt (date-time 1986 9 2 0 0 2)]
    (is (= (instant->map dt)
           {:years 1986
            :months 9
            :days 2
            :hours 0
            :minutes 0
            :seconds 2
            :millis 0}))))
