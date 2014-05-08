(ns clj-time.coerce-test
  (:refer-clojure :exclude [extend second])
  #+cljs (:require-macros [cemerick.cljs.test :refer [is deftest]])
  (:require
    #+cljs [cemerick.cljs.test :as t]
    #+clj [clojure.test :refer [is deftest]]
    [cljs-time.core
     :refer [from-millis-since-epoch date-time date-midnight plus hours]]
    [cljs-time.coerce :refer
     [from-date from-long from-string to-date to-date-time to-epoch to-long
      to-string]]))

(deftest test-from-date
  (let [dt (from-long 893462400000)
        d  (to-date dt)]
    (is (instance? cljs_time.core.DateTime d))
    (is (= dt (from-date d)))))

(deftest test-from-long
  (is (= (date-time 1998 4 25) (from-long 893462400000))))

(deftest test-from-string
  (is (= (from-string "1998-04-25T00:00:00.000Z")
         (date-time 1998 4 25))))

;(deftest test-from-year-month
  ;(is (= (to-date-time (year-month 1998 4))
         ;(date-time 1998 4))))

;(deftest test-from-local-date
  ;(is (= (to-date-time (local-date 2013 03 20))
         ;(date-time 2013 03 20))))

(defn ->date [l]
  (#+clj java.util.Date. #+cljs js/Date. l))

(deftest test-to-date
  (is (nil? (to-date nil)))
  (is (nil? (to-date "")))
  (is (nil? (to-date "x")))
  (is (= (->date 893462400000) (to-date (date-time 1998 4 25))))
  (is (= (->date 893462400000) (to-date (date-midnight 1998 4 25))))
  (is (= (->date 893462400000) (to-date (from-millis-since-epoch 893462400000))))
  (is (= (->date (long 0)) (to-date 0)))
  (is (= (->date 893462400000) (to-date 893462400000)))
  (is (= (->date 893462400000) (to-date "1998-04-25T00:00:00.000Z"))))

(deftest test-to-date-time
  (is (nil? (to-date-time nil)))
  (is (nil? (to-date-time "")))
  (is (nil? (to-date-time "x")))
  (is (= (date-time 1998 4 25) (to-date-time (date-time 1998 4 25))))
  (is (= (date-midnight 1998 4 25) (to-date-time (date-time 1998 4 25))))
  (is (= (date-time 2000 1 1 1) (plus (to-date-time (date-midnight 2000 1 1)) (hours 1))))
  (is (= (date-time 1998 4 25) (to-date-time (from-millis-since-epoch 893462400000))))
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
  (is (= 893462400000 (to-long (from-millis-since-epoch 893462400000))))
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
  (is (= 893462400 (to-epoch (from-millis-since-epoch 893462400000))))
  (is (= (long 0) (to-epoch 0)))
  (is (= 893462400 (to-epoch 893462400000)))
  (is (= 893462400 (to-epoch "1998-04-25T00:00:00.000Z"))))

(deftest test-to-string
  (is (nil? (to-string nil)))
  (is (nil? (to-string "")))
  (is (nil? (to-string "x")))
  (is (= "1998-04-25T00:00:00.000Z" (to-string (date-time 1998 4 25))))
  (is (= "1998-04-25T00:00:00.000Z" (to-string (date-midnight 1998 4 25))))
  (is (= "1998-04-25T00:00:00.000Z" (to-string (from-millis-since-epoch 893462400000))))
  (is (= "1970-01-01T00:00:00.000Z" (to-string 0)))
  (is (= "1998-04-25T00:00:00.000Z" (to-string 893462400000)))
  (is (= "1998-04-25T00:00:00.000Z" (to-string "1998-04-25T00:00:00.000Z"))))
