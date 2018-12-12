(ns cljs-time.coerce-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [cljs-time.core
    :refer [date-time date-midnight from-utc-time-zone plus hours
            local-date local-date-time]]
   [cljs-time.coerce :refer
    [from-date from-long from-string to-date to-date-time to-epoch to-long
     to-string to-local-date to-local-date-time]]
   [cljs-time.local]
   [cljs-time.format :refer [instant->map]]
   [cljs-time.extend]
   [goog.date :as date]))

(deftest test-from-date
  (let [dt (from-long 893462400000)
        d  (to-date dt)]
    (is (instance? js/Date d))
    (is (= dt (from-date d)))))

(deftest test-from-long
  (is (= (date-time 1998 4 25) (from-long 893462400000))))

(deftest test-from-string
  (is (= (from-string "1998-04-25T00:00:00.000Z")
         (date-time 1998 4 25))))

(deftest test-from-local-date
  (is (= (from-utc-time-zone (local-date 2013 03 20))
         (date-time 2013 03 20))))

(deftest test-from-local-date-time
  (is (= (from-utc-time-zone (local-date-time 2013 03 20 14 00 34 16))
         (date-time 2013 03 20 14 00 34 16))))
;;; ^^ The above 2 original clj-time tests don't really make sense
;;; here. LocalDate/Time means something different in clj-time vs
;;; cljs-time

(deftest test-to-date
  (is (nil? (to-date nil)))
  (is (nil? (to-date "")))
  (is (nil? (to-date "x")))
  (is (= (js/Date. 893462400000) (to-date (date-time 1998 4 25))))
  (is (= (js/Date. 893462400000) (to-date (date-midnight 1998 4 25))))
  (is (= (js/Date. 893462400000) (to-date (js/Date. 893462400000))))
  (is (= (js/Date. (long 0)) (to-date 0)))
  (is (= (js/Date. 893462400000) (to-date 893462400000)))
  (is (= (js/Date. 893462400000) (to-date "1998-04-25T00:00:00.000Z"))))

(deftest test-to-date-time
  (is (nil? (to-date-time nil)))
  (is (nil? (to-date-time "")))
  (is (nil? (to-date-time "x")))
  (is (= (date-time 1998 4 25) (to-date-time (date-time 1998 4 25))))
  (is (= (date-midnight 1998 4 25) (to-date-time (date-time 1998 4 25))))
  (is (= (date-time 2000 1 1 1) (plus (to-date-time (date-midnight 2000 1 1)) (hours 1))))
  (is (= (date-time 1998 4 25) (to-date-time (js/Date. 893462400000))))
  (is (= (date-time 1970 1 1) (to-date-time 0)))
  (is (= (date-time 1998 4 25) (to-date-time 893462400000)))
  (is (= (date-time 1998 4 25) (to-date-time "1998-04-25T00:00:00.000Z"))))

(deftest test-to-long
  (is (nil? (to-long nil)))
  (is (nil? (to-long "")))
  (is (nil? (to-long "x")))
  (is (= 893462400000 (to-long (date-time 1998 4 25))))
  (is (= 0 (to-long (date-midnight 1970))))
  (is (= (to-long (date-time 1993 3 15)) (to-long (date-midnight 1993 3 15))))
  (is (= 893462400000 (to-long (js/Date. 893462400000))))
  (is (= (long 0) (to-long 0)))
  (is (= 893462400000 (to-long 893462400000)))
  (is (= 893462400000 (to-long "1998-04-25T00:00:00.000Z"))))

(deftest test-to-epoch
  (is (nil? (to-epoch nil)))
  (is (nil? (to-epoch "")))
  (is (nil? (to-epoch "x")))
  (is (= 893462400 (to-epoch (date-time 1998 4 25))))
  (is (= 0 (to-epoch (date-midnight 1970))))
  (is (= (to-epoch (date-time 1993 3 15)) (to-epoch (date-midnight 1993 3 15))))
  (is (= 893462400 (to-epoch (js/Date. 893462400000))))
  (is (= (long 0) (to-epoch 0)))
  (is (= 893462400 (to-epoch 893462400000)))
  (is (= 893462400 (to-epoch "1998-04-25T00:00:00.000Z")))
  (testing "times with fractions of a second are rounded down"
    (is (= 893462400 (to-epoch 893462400001)))
    (is (= 893462400 (to-epoch 893462400999)))))

(deftest test-to-string
  (is (nil? (to-string nil)))
  (is (nil? (to-string "")))
  (is (nil? (to-string "x")))
  (is (= "1998-04-25T00:00:00.000Z" (to-string (date-time 1998 4 25))))
  (is (= "1998-04-25T00:00:00.000Z" (to-string (date-midnight 1998 4 25))))
  (is (= "1998-04-25T00:00:00.000Z" (to-string (js/Date. 893462400000))))
  (is (= "1970-01-01T00:00:00.000Z" (to-string 0)))
  (is (= "1998-04-25T00:00:00.000Z" (to-string 893462400000)))
  (is (= "1998-04-25T00:00:00.000Z" (to-string "1998-04-25T00:00:00.000Z"))))

(deftest test-to-local-date
  (is (nil? (to-local-date nil)))
  (is (nil? (to-local-date "")))
  (is (nil? (to-local-date "x")))
  (is (= (date/Date. 1998 3 25) (to-local-date (date-time 1998 4 25))))
  (is (= (date/Date. 1998 3 25) (to-local-date (date-midnight 1998 4 25))))
  (is (= (date/Date. 1998 3 25) (to-local-date (js/Date. 893462400000))))
  (is (= (date/Date. 1970 0 1) (to-local-date 0)))
  (is (= (date/Date. 1998 3 25) (to-local-date 893462400000)))
  (is (= (date/Date. 1998 3 25) (to-local-date "1998-04-25T00:00:00.000Z")))
  (is (= (date/Date. 1998 3 25) (to-local-date (to-local-date "1998-04-25")))))

(deftest test-to-local-date-time
  (is (nil? (to-local-date-time nil)))
  (is (nil? (to-local-date-time "")))
  (is (nil? (to-local-date-time "x")))
  (is (= (date/DateTime. 1998 3 25 10 20) (to-local-date-time (date-time 1998 4 25 10 20))))
  (is (= (date/DateTime. 1998 3 25 0 0) (to-local-date-time (date-midnight 1998 4 25))))
  (is (= (date/DateTime. 1970 0 1 0 0) (to-local-date-time 0)))
  (is (= (date/DateTime. 1998 3 25 0 0 55 0) (to-local-date-time 893462455000)))
  (is (= (date/DateTime. 1998 3 25 10 20 30 400) (to-local-date-time "1998-04-25T10:20:30.400Z"))))

(defn to-date-from-date
  [d]
  (-> d
      (to-date)
      (from-date)
      (instant->map)))

(deftest test-to-date-2
  (let [now (cljs-time.core/*ms-fn*)]
    ;; We create a raw Date as the base for both of these types, as
    ;; the tests will occasionally fail if you cross the millisecond boundary
    ;; after running (now) and before running (time-now)
    (is (= (to-date-from-date (doto (cljs-time.core/now) (.setTime now)))
           (to-date-from-date (doto (cljs-time.core/time-now) (.setTime now)))))))
