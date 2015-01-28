(ns cljs-time.local-test
  (:refer-clojure :exclude [extend second])
  (:require-macros
   [cemerick.cljs.test :refer [is deftest]]
   [cljs-time.macros :refer [do-at]]
   [cljs-time.core-test :refer [when-available when-not-available]])
  (:require
   [cemerick.cljs.test :as t]
   [cljs-time.core :as time]
   [cljs-time.extend]
   [cljs-time.format :as fmt]
   [cljs-time.local
    :refer [*local-formatters* format-local-time local-now to-local-date-time]]))

;; (deftest test-now
;;   (is (= (time/from-time-zone (time/date-time 2010 1 1) (time/default-time-zone))
;;          (time/do-at (time/from-time-zone (time/date-time 2010 1 1) (time/default-time-zone)) 
;;                      (local-now)))))

(deftest test-to-local-date-time
  (is (nil? (to-local-date-time nil)))
  (is (nil? (to-local-date-time "")))
  (is (nil? (to-local-date-time "x")))
  ;; (is (= (time/from-time-zone (time/date-time 1998 4 25) (time/default-time-zone)) (to-local-date-time (time/date-time 1998 4 25))))
  ;; (is (= (time/to-time-zone (time/date-time 1998 4 25) (time/default-time-zone)) (to-local-date-time (js/Date. 893462400000))))
  ;; (is (= (time/from-time-zone (time/date-time 1970 1 1) (time/default-time-zone)) (to-local-date-time 0)))
  ;; (is (= (time/from-time-zone (time/date-time 1998 4 25) (time/default-time-zone)) (to-local-date-time 893462400000)))
  ;; (is (= (time/to-time-zone (time/date-time 1998 4 25) (time/default-time-zone)) (to-local-date-time (goog.date.UtcDateTime. 893462400000))))
  ;; (is (= (time/from-time-zone (time/date-time 1998 4 25) (time/default-time-zone)) (to-local-date-time "1998-04-25T00:00:00.000")))
  )

(deftest test-format-local-time
  (is (nil? (format-local-time nil :basic-date-time)))
  (is (nil? (format-local-time (local-now) ::bad-formatter)))
  (is (nil? (format-local-time "bad-time" :basic-date-time)))
  (is (nil? (format-local-time "bad-time" ::bad-formatter)))
  ;; (is (= (fmt/unparse (ISODateTimeFormat/basicDateTime) (time/from-time-zone (time/date-time 1998 4 25) (time/default-time-zone)))
  ;;        (format-local-time (time/from-time-zone (time/date-time 1998 4 25) (time/default-time-zone)) :basic-date-time)))
  ;; (is (= (fmt/unparse (ISODateTimeFormat/basicDateTime) (time/from-time-zone (time/date-time 1998 4 25) (time/default-time-zone)))
  ;;        (format-local-time (time/date-time 1998 4 25) :basic-date-time)))
  ;; (is (= (fmt/unparse (ISODateTimeFormat/basicDateTime) (time/to-time-zone (time/date-time 1998 4 25) (time/default-time-zone)))
  ;;        (format-local-time (Date. 893462400000) :basic-date-time)))
  ;; (is (= (fmt/unparse (ISODateTimeFormat/basicDateTime) (time/to-time-zone (time/date-time 1998 4 25) (time/default-time-zone)))
  ;;        (format-local-time (java.sql.Date. 893462400000) :basic-date-time)))
  ;; (is (= (fmt/unparse (ISODateTimeFormat/basicDateTime) (time/from-time-zone (time/date-time 1970 1 1) (time/default-time-zone)))
  ;;        (format-local-time 0 :basic-date-time)))
  ;; (is (= (fmt/unparse (ISODateTimeFormat/basicDateTime) (time/from-time-zone (time/date-time 1998 4 25) (time/default-time-zone)))
  ;;        (format-local-time 893462400000 :basic-date-time)))
  ;; (is (= (fmt/unparse (ISODateTimeFormat/basicDateTime) (time/to-time-zone (time/date-time 1998 4 25) (time/default-time-zone)))
  ;;        (format-local-time (Timestamp. 893462400000) :basic-date-time)))
  ;; (is (= (fmt/unparse (ISODateTimeFormat/basicDateTime) (time/from-time-zone (time/date-time 1998 4 25) (time/default-time-zone)))
  ;;        (format-local-time "1998-04-25T00:00:00.000" :basic-date-time)))
  
  )

(deftest test-local-formatters
  (letfn [(time-zone-fn []  (time/time-zone-for-offset -7))
          (asserts []
            (let [formatters {:mmddyyyy-slash (fmt/formatter "MM/dd/yyyy" (time/default-time-zone))
                              :mmddyyyy-hhmmss-slash (fmt/formatter "MM/dd/yyyy HH:mm:ss" (time/default-time-zone))}]
              (binding [*local-formatters* formatters]
                (is (= (time/time-zone-for-offset -7) (time/default-time-zone)))
                (is (= "04/25/1998" (format-local-time (time/date-time 1998 4 25 11 59 1) :mmddyyyy-slash)))
                (is (= "04/25/1998 11:59:01" (format-local-time (time/date-time 1998 4 25 11 59 1) :mmddyyyy-hhmmss-slash)))
                ;; (is (= (time/from-time-zone (time/date-time 1998 4 25 11 59 1) (time/default-time-zone))
                ;;        (to-local-date-time "04/25/1998 11:59:01")))
                ;; (is (= (time/default-time-zone)
                ;;        (let [hours (/ (* -1 (.getTimezoneOffset (to-local-date-time "04/25/1998 11:59:01"))) 60)]
                ;;          (prn 'test-local-formatters (to-local-date-time "04/25/1998 11:59:01"))
                ;;          (time/time-zone-for-offset (int hours) (mod hours 1)))))
                )))]
    (when-available
     with-redefs
     (with-redefs [time/default-time-zone time-zone-fn]
       (asserts)))
    (when-not-available
     with-redefs
     (binding [time/default-time-zone time-zone-fn]
       (asserts)))))
