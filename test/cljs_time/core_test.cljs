(ns cljs-time.core-test
  (:refer-clojure :exclude [extend second])
  (:require-macros
    [cljs-time.macros :refer [do-at]]
    [cljs-time.core-test :refer [try= when-available when-not-available]])
  (:require
    [cljs.test :refer-macros [deftest is are]]
    [cljs-time.coerce :refer [from-long to-long]]
    [cljs-time.core :as time :refer
     [date-time epoch year month day date-midnight today-at-midnight hour
      minute second milli abuts? interval overlaps? last-day-of-the-month
      number-of-days-in-the-month first-day-of-the-month today-at now within?
      in-years in-months in-weeks in-days in-hours in-minutes in-seconds
      in-millis minus plus earliest latest
      local-date local-date-time today
      day-of-week after? before? ago from-now
      years months weeks days hours minutes seconds millis
      years? months? weeks? days? hours? minutes? seconds?
      extend start end mins-ago default-time-zone
      to-default-time-zone from-default-time-zone]]
    [cljs-time.extend]))

(deftest test-now
  (is (= (date-time 2010 1 1)
         (do-at (date-time 2010 1 1)
                (now)))))

#_(deftest test-now-skew
  (set! now (fn []
              (plus (goog.date.UtcDateTime.)
                    (minutes 5)
                    (seconds 6))))
  (prn "test-now-skew-2" (pr-str (now))))

(deftest test-today-at-midnight
  (is (= (date-midnight 2010 1 1)
         (do-at (date-midnight 2010 1 1)
                (today-at-midnight)))))

(deftest test-epoch
  (let [e (epoch)]
    (is (= 1970 (year e)))
    (is (= 0 (second e)))))

(deftest test-date-time-and-accessors
  (let [d (date-time 1986)]
    (is (= 1986 (year   d)))
    (is (= 1    (month  d)))
    (is (= 1    (day    d)))
    (is (= 0    (hour   d)))
    (is (= 0    (minute d)))
    (is (= 0    (second d)))
    (is (= 0    (milli  d))))
  (let [d (date-time 1986 10 14 4 3 2 1)]
    (is (= 1986 (year   d)))
    (is (= 10   (month  d)))
    (is (= 14   (day    d)))
    (is (= 4    (hour   d)))
    (is (= 3    (minute d)))
    (is (= 2    (second d)))
    (is (= 1    (milli  d)))))

(deftest test-date-midnight-and-accessors
  (let [d (date-midnight 1986)]
    (is (= 1986 (year   d)))
    (is (= 1    (month  d)))
    (is (= 1    (day    d)))
    (is (= 0    (hour   d)))
    (is (= 0    (minute d)))
    (is (= 0    (second    d)))
    (is (= 0    (milli  d))))
  (let [d (date-midnight 1986 10 14)]
    (is (= 1986 (year   d)))
    (is (= 10   (month  d)))
    (is (= 14   (day    d)))
    (is (= 0    (hour   d)))
    (is (= 0    (minute d)))
    (is (= 0    (second d)))
    (is (= 0    (milli  d)))))

(deftest test-local-date-time-and-accessors
  (let [d (local-date-time 1986)]
    (is (= 1986 (year   d)))
    (is (= 1    (month  d)))
    (is (= 1    (day    d)))
    (is (= 0    (hour   d)))
    (is (= 0    (minute d)))
    (is (= 0    (second d)))
    (is (= 0    (milli  d))))
  (let [d (date-time 1986 10 14 4 3 2 1)]
    (is (= 1986 (year   d)))
    (is (= 10   (month  d)))
    (is (= 14   (day    d)))
    (is (= 4    (hour   d)))
    (is (= 3    (minute d)))
    (is (= 2    (second d)))
    (is (= 1    (milli  d)))))

(deftest test-year-month-and-accessors
  ;; (let [d (year-month 1986)]
  ;;   (is (= 1986 (year   d)))
  ;;   (is (= 1    (month  d))))
  (let [d (date-time 1986 10)]
    (is (= 1986 (year   d)))
    (is (= 10   (month  d)))))

(deftest test-local-date-and-accessors
  (let [d (local-date 2013 3 19)]
    (is (= 2013 (year   d)))
    (is (= 3    (month  d)))
    (is (= 19   (day    d)))
    (is (= 2    (day-of-week d)))))

;; (deftest test-today
;;   (is (= (local-date 2013 4 20)
;;          (do-at (from-time-zone (date-time 2013 4 20) (default-time-zone))
;;                 (today)))))

(deftest test-to-default-time-zone
  (let [dt1 (date-time 1986 10 14 6)
        cest? (re-find #"\(CEST\)$" (str (js/Date. (.getTime dt1))))
        dt2 (to-default-time-zone dt1)]
    (when cest?
      (is (= 8 (hour dt2))))
    (is (= (.getTime dt1) (.getTime dt2)))))

(deftest test-from-default-time-zone
  (let [dt1 (date-time 1986 10 14 6)
        cest? (re-find #"\(CEST\)$" (str (js/Date. (.getTime dt1))))
        dt2 (from-default-time-zone dt1)]
    (when cest?
      (is (= 6 (hour dt2))))
    (cond (zero? (.getTimezoneOffset dt2))
          (is (= (.getTime dt1) (.getTime dt2)))
          (< (.getTimezoneOffset dt2) 0)
          (is (> (.getTime dt1) (.getTime dt2)))
          (> (.getTimezoneOffset dt2) 0)
          (is (< (.getTime dt1) (.getTime dt2))))))

(deftest test-today-default
  (is (= (local-date 2013 4 20)
         (do-at (from-default-time-zone (date-time 2013 4 20))
                (today)))))

(deftest test-dst-time-default
  (let [summer-time-change (js/Date. (.getTime (local-date-time 2013 3 31 3)))
        cest? (re-find #"\(CEST\)$" (str summer-time-change))]
    (when cest?
      (is (= (local-date-time 2013 3 30 1)
             (to-default-time-zone (date-time 2013 3 30 0))))
      (is (= (local-date-time 2013 3 31 3)
             (to-default-time-zone (date-time 2013 3 31 1))))
      (is (= (local-date-time 2013 10 26 2)
             (to-default-time-zone (date-time 2013 10 26 0))))
      (is (= (local-date-time 2013 10 27 2)
             (to-default-time-zone (date-time 2013 10 27 1)))))))

(deftest test-day-of-week
  (let [d (date-time 2010 4 24)]
    (is (= 6 (day-of-week d))))
  (let [d (date-time 1918 11 11)]
    (is (= 1 (day-of-week d)))))

(deftest test-after?
  (is (after? (date-time 1987) (date-time 1986)))
  (is (not (after? (date-time 1986) (date-time 1987))))
  (is (not (after? (date-time 1986) (date-time 1986)))))

(deftest test-before?
  (is (before? (date-time 1986) (date-time 1987)))
  (is (not (before? (date-time 1987) (date-time 1986))))
  (is (not (before? (date-time 1986) (date-time 1986)))))

(deftest test-periods
  (is (= (date-time 1986 10 14 4 3 2 1)
         (plus (date-time 1984)
           (years 2)
           (months 9)
           (days 13)
           (hours 4)
           (minutes 3)
           (seconds 2)
           (millis 1))))
  (is (= (date-time 1986 1 8)
         (plus (date-time 1986 1 1) (weeks 1)))))

(deftest test-plus
  (is (= (date-time 1986 10 14 6)
         (plus (date-time 1986 10 14 4) (hours 2))))
  (is (= (date-time 1986 10 14 6 5)
         (plus (date-time 1986 10 14 4 2) (hours 2) (minutes 3)))))

(deftest test-minus
  (is (= (date-time 1986 10 14 4)
         (minus (date-time 1986 10 14 6) (hours 2))))
  (is (= (date-time 1986 10 14 4 2)
         (minus (date-time 1986 10 14 6 5) (hours 2) (minutes 3)))))

(deftest test-after?-local
  (is (after? (local-date-time 1987) (local-date-time 1986)))
  (is (not (after? (local-date-time 1986) (local-date-time 1987))))
  (is (not (after? (local-date-time 1986) (local-date-time 1986)))))

(deftest test-before?-local
  (is (before? (local-date-time 1986) (local-date-time 1987)))
  (is (not (before? (local-date-time 1987) (local-date-time 1986))))
  (is (not (before? (local-date-time 1986) (local-date-time 1986)))))

(deftest test-periods-local
  (is (= (local-date-time 1986 10 14 4 3 2 1)
         (plus (local-date-time 1984)
           (years 2)
           (months 9)
           (days 13)
           (hours 4)
           (minutes 3)
           (seconds 2)
           (millis 1))))
  (is (= (local-date-time 1986 1 8)
         (plus (local-date-time 1986 1 1) (weeks 1)))))

(deftest test-plus-local
  (is (= (local-date-time 1986 10 14 6)
         (plus (local-date-time 1986 10 14 4) (hours 2))))
  (is (= (local-date-time 1986 10 14 6 5)
         (plus (local-date-time 1986 10 14 4 2) (hours 2) (minutes 3)))))

(deftest test-minus-local
  (is (= (local-date-time 1986 10 14 4)
         (minus (local-date-time 1986 10 14 6) (hours 2))))
  (is (= (local-date-time 1986 10 14 4 2)
         (minus (local-date-time 1986 10 14 6 5) (hours 2) (minutes 3)))))

(deftest test-ago
  (when-available
    with-redefs
    (with-redefs [now #(date-time 2011 4 16 10 9 00)]
      (is (= (-> 10 years ago)
             (date-time 2001 4 16 10 9 00)))))
  (when-not-available
    with-redefs
    (binding [now #(date-time 2011 4 16 10 9 00)]
      (is (= (-> 10 years ago)
             (date-time 2001 4 16 10 9 00))))))

(deftest test-from-now
  (when-available
    with-redefs
    (with-redefs [now #(date-time 2011 4 16 10 9 00)]
      (is (= (-> 30 minutes from-now)
             (date-time 2011 4 16 10 39 00)))))
  (when-not-available
    with-redefs
    (binding [now #(date-time 2011 4 16 10 9 00)]
      (is (= (-> 30 minutes from-now)
             (date-time 2011 4 16 10 39 00))))))

(deftest test-earliest
  (let [d1 (date-time 1990 1 1 23 1 1)
        d2 (date-time 2000 1 1 23 1 1)
        d3 (date-time 2010 1 1 23 1 1)
        d4 (date-time 2020 1 1 23 1 1)]
    (is (= d1 (earliest d1 d2)))
    (is (= d2 (earliest d2 d3)))
    (is (= d1 (earliest d1 d3)))
    (is (= d1 (earliest [d1 d2 d3 d4])))
    (is (= d1 (earliest [d4 d2 d3 d1])))
    (is (= d2 (earliest [d4 d3 d2])))
    (is (= d4 (earliest [d4])))
    (is (try= js/TypeError (earliest [d1 d2 nil])))
    (is (try= js/TypeError (earliest d2 nil)))))

(deftest test-latest
  (let [d1 (date-time 1990 1 1 23 1 1)
        d2 (date-time 2000 1 1 23 1 1)
        d3 (date-time 2010 1 1 23 1 1)
        d4 (date-time 2020 1 1 23 1 1)]
    (is (= d2 (latest d1 d2)))
    (is (= d3 (latest d2 d3)))
    (is (= d3 (latest d1 d3)))
    (is (= d4 (latest [d1 d2 d3 d4])))
    (is (= d4 (latest [d4 d2 d3 d1])))
    (is (= d3 (latest [d2 d3 d1])))
    (is (= d1 (latest [d1])))
    (is (try= js/TypeError (latest [d1 d2 nil])))
    (is (try= js/TypeError (latest d2 nil)))))

(deftest test-start-end
  (let [s (date-time 1986 10 14 12 5 4)
        e (date-time 1986 11 3  22 2 6)
        p (interval s e)]
    (is (= s (start p)))
    (is (= e (end p)))))

(defn i= [& args]
  (apply = (map (fn [{:keys [start end]}]
                  {:start (.getTime start) :end (.getTime end)})
                args)))

(deftest test-extend
  (is (i= (interval (date-time 1986) (date-time 1988))
         (extend (interval (date-time 1986) (date-time 1987)) (years 1)))))

(deftest leap-year-interval-in
  (is (= 1 (in-years (interval (date-time 2012 2 29 12 5 4)
                               (date-time 2013 2 28 22 2 6)))))
  (is (= 1 (in-years (interval (date-time 2011 2 28 12 5 4)
                               (date-time 2012 2 29 22 2 6))))))

(deftest test-interval-in
  (let [p (interval (date-time 1986 10 14 12 5 4) (date-time 1986 11 3  22 2 6))]
    (is (= 0       (in-years p)))
    (is (= 0       (in-months p)))
    (is (= 2       (in-weeks p)))
    (is (= 20      (in-days p)))
    (is (= 489     (in-hours p)))
    (is (= 29397   (in-minutes p)))
    (is (= 1763822 (in-seconds p)))
    (is (= 1763822000 (in-millis p)))))

(deftest test-interval-in-bigger
  (let [p (interval (date-time 1986 10 14 12 5 4) (date-time 1987 11 3  22 2 6))]
    (is (= 1       (in-years p)))
    (is (= 12      (in-months p)))
    (is (= 55      (in-weeks p)))
    (is (= 385     (in-days p)))
    (is (= 9249    (in-hours p)))))

(deftest test-period-in-millis
  (is (= 30000      (-> 30 seconds in-millis)))
  (is (= 240000     (-> 4 minutes in-millis)))
  (is (= 43200000   (-> 12 hours in-millis)))
  (is (= 777600000  (-> 9 days in-millis)))
  (is (= 1814400000 (-> 3 weeks in-millis)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 months in-millis)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 years in-millis))))

(deftest test-period-in-seconds
  (is (= 30      (-> 30 seconds in-seconds)))
  (is (= 240     (-> 4 minutes in-seconds)))
  (is (= 43200   (-> 12 hours in-seconds)))
  (is (= 777600  (-> 9 days in-seconds)))
  (is (= 1814400 (-> 3 weeks in-seconds)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 months in-seconds)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 years in-seconds))))

(deftest test-period-in-minutes
  (is (= 0     (-> 30 seconds in-minutes)))
  (is (= 4     (-> 4 minutes in-minutes)))
  (is (= 720   (-> 12 hours in-minutes)))
  (is (= 12960 (-> 9 days in-minutes)))
  (is (= 30240 (-> 3 weeks in-minutes)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 months in-minutes)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 years in-minutes))))

(deftest test-period-in-hours
  (is (= 0   (-> 30 seconds in-hours)))
  (is (= 0   (-> 4 minutes in-hours)))
  (is (= 12  (-> 12 hours in-hours)))
  (is (= 216 (-> 9 days in-hours)))
  (is (= 504 (-> 3 weeks in-hours)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 months in-hours)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 years in-hours))))

(deftest test-period-in-days
  (is (= 0  (-> 30 seconds in-days)))
  (is (= 0  (-> 4 minutes in-days)))
  (is (= 0  (-> 12 hours in-days)))
  (is (= 9  (-> 9 days in-days)))
  (is (= 21 (-> 3 weeks in-days)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 months in-days)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 years in-days))))

(deftest test-period-in-weeks
  (is (= 0  (-> 30 seconds in-weeks)))
  (is (= 0  (-> 4 minutes in-weeks)))
  (is (= 0  (-> 12 hours in-weeks)))
  (is (= 1  (-> 9 days in-weeks)))
  (is (= 3  (-> 3 weeks in-weeks)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 months in-weeks)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 years in-weeks))))

(deftest test-period-in-months
  (is (thrown? cljs.core/ExceptionInfo (-> 2 seconds in-months)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 minutes in-months)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 hours in-months)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 days in-months)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 weeks in-months)))
  (is (= 7  (-> 7 months in-months)))
  (is (= 36 (-> 3 years in-months))))

(deftest test-period-in-years
  (is (thrown? cljs.core/ExceptionInfo (-> 2 seconds in-years)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 minutes in-years)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 hours in-years)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 days in-years)))
  (is (thrown? cljs.core/ExceptionInfo (-> 2 weeks in-years)))
  (is (= 1 (-> 14 months in-years)))
  (is (= 3 (-> 3 years in-years))))

(deftest test-within?
  (let [d1 (date-time 1985)
        d2 (date-time 1986)
        d3 (date-time 1987)
        ld1 (local-date 2013 1 1)
        ld2 (local-date 2013 2 28)
        ld3 (local-date 2013 10 5)]
    (is (within? (interval d1 d3) d2))
    (is (not (within? (interval d1 d2) d3)))
    (is (not (within? (interval d1 d2) d2)))
    (is (not (within? (interval d2 d3) d1)))
    (is (within? ld1 ld3 ld2))
    (is (not (within? ld1 ld2 ld3)))
    (is (not (within? ld3 ld2 ld1)))
    (is (not (within? ld2 ld3 ld1)))))

(deftest test-overlaps?
  (let [d1 (date-time 1985)
        d2 (date-time 1986)
        d3 (date-time 1987)
        d4 (date-time 1988)
        ld1 (local-date 2013 1 1)
        ld2 (local-date 2013 2 5)
        ld3 (local-date 2013 2 28)
        ld4 (local-date 2014 1 1)
        ld5 (local-date 2014 5 6)]
    (is (overlaps? (interval d1 d3) (interval d2 d4)))
    (is (overlaps? (interval d1 d3) (interval d2 d3)))
    (is (not (overlaps? (interval d1 d2) (interval d2 d3))))
    (is (not (overlaps? (interval d1 d2) (interval d3 d4))))
    (is (overlaps? ld1 ld3 ld2 ld4))
    (is (overlaps? ld2 ld4 ld3 ld5))
    (is (overlaps? ld1 ld5 ld1 ld5))
    (is (overlaps? ld1 ld5 ld2 ld4))
    (is (overlaps? ld2 ld4 ld1 ld5))
    (is (overlaps? ld1 ld2 ld2 ld3))
    (is (overlaps? ld2 ld3 ld1 ld2))
    (is (not (overlaps? ld1 ld2 ld3 ld4)))
    (is (not (overlaps? ld1 ld3 ld4 ld5)))))

(deftest test-abuts?
  (let [d1 (date-time 1985)
        d2 (date-time 1986)
        d3 (date-time 1987)
        d4 (date-time 1988)]
    (is (abuts? (interval d1 d2) (interval d2 d3)))
    (is (not (abuts? (interval d1 d2) (interval d3 d4))))
    (is (not (abuts? (interval d1 d3) (interval d2 d3))))
    (is (abuts? (interval d2 d3) (interval d1 d2)))))

(deftest test-years?
  (is (years? (years 2))))

(deftest test-months?
  (is (months? (months 2))))

(deftest test-weeks?
  (is (weeks? (weeks 2))))

(deftest test-days?
  (is (days? (days 2))))

(deftest test-hours?
  (is (hours? (hours 2))))

(deftest test-minutes?
  (is (minutes? (minutes 2))))

(deftest test-secs?
  (is (seconds? (seconds 2))))

(deftest mins-ago-test
  (is (= 5 (mins-ago (minus (now) (minutes 5))))))

;;
;; ported from quartzite.date-time
;;

(deftest test-last-day-of-the-month
  (let [d1 (date-time 2012 1 31)
        d2 (date-time 2012 2 29)
        d3 (date-time 2012 3 31)
        d4 (date-time 2012 4 30)
        d5 (date-time 2012 5 31)
        d6 (date-time 2012 6 30)
        d7 (date-time 2013 2 28)
        d8 (date-time 2016 2 29)
        d9 (local-date 2014 1 31)
        d10 (local-date 2014 1 5)
        d11 (local-date 2014 1 29)]
    (is (= d1 (last-day-of-the-month 2012 1)))
    (is (= d1 (last-day-of-the-month (date-time 2012 1 13))))
    (is (= d2 (last-day-of-the-month 2012 2)))
    (is (= d2 (last-day-of-the-month (date-time 2012 2 8))))
    (is (= d3 (last-day-of-the-month 2012 3)))
    (is (= d4 (last-day-of-the-month 2012 4)))
    (is (= d5 (last-day-of-the-month 2012 5)))
    (is (= d6 (last-day-of-the-month 2012 6)))
    (is (= d7 (last-day-of-the-month 2013 2)))
    (is (= d8 (last-day-of-the-month 2016 2)))
    (is (= d9 (last-day-of-the-month d9)))
    (is (= d9 (last-day-of-the-month d10)))
    (is (= d9 (last-day-of-the-month d11)))))

(deftest test-number-of-days-in-the-month
  (is (= 31 (number-of-days-in-the-month 2012 1)))
  (is (= 31 (number-of-days-in-the-month (date-time 2012 1 3))))
  (is (= 29 (number-of-days-in-the-month 2012 2)))
  (is (= 28 (number-of-days-in-the-month 2013 2)))
  (is (= 30 (number-of-days-in-the-month 2012 11)))
  (is (= 31 (number-of-days-in-the-month 2012 3)))
  (is (= 30 (number-of-days-in-the-month 2012 4)))
  (is (= 31 (number-of-days-in-the-month 2013 12)))
  (is (= 28 (number-of-days-in-the-month 2013 2)))
  (is (= 29 (number-of-days-in-the-month 2016 2))))


(deftest test-first-day-of-the-month
  (let [d1 (date-time 2012 1 1)
        d2 (date-time 2012 2 1)
        d3 (date-time 2012 3 1)
        d4 (date-time 2012 4 1)
        d5 (date-time 2012 5 1)
        d6 (date-time 2012 6 1)
        d7 (date-time 2013 2 1)
        d8 (date-time 2016 2 1)
        d9 (local-date 2014 1 1)
        d10 (local-date 2014 1 2)
        d11 (local-date 2014 1 31)]
    (is (= d1 (first-day-of-the-month 2012 1)))
    (is (= d1 (first-day-of-the-month (date-time 2012 1 24))))
    (is (= d2 (first-day-of-the-month 2012 2)))
    (is (= d2 (first-day-of-the-month (date-time 2012 2 24))))
    (is (= d3 (first-day-of-the-month 2012 3)))
    (is (= d4 (first-day-of-the-month 2012 4)))
    (is (= d5 (first-day-of-the-month 2012 5)))
    (is (= d6 (first-day-of-the-month 2012 6)))
    (is (= d7 (first-day-of-the-month 2013 2)))
    (is (= d8 (first-day-of-the-month 2016 2)))
    (is (= d9 (first-day-of-the-month d9)))
    (is (= d9 (first-day-of-the-month d10)))
    (is (= d9 (first-day-of-the-month d11)))))

(deftest test-today-at
  (let [n  (now)
        y  (year n)
        m  (month n)
        d  (day n)
        d1 (date-time y m d 13 0)]
    (is (= d1 (today-at 13 0)))
    (is (= d1 (today-at 13 0 0)))))

(deftest group-by-equiv-test
  (is (= {(date-midnight 2015 6 1) '[(a 1433152980000) (b 1433196180000)]
          (date-midnight 2015 6 2) '[(c 1433239380000) (d 1433282580000)]
          (date-midnight 2015 6 3) '[(e 1433325780000) (f 1433368980000)]}
         (->> (date-time 2015 6 1 10 3)
              (to-long)
              (iterate #(+ % (* 12 60 60 1000)))
              (interleave '[a b c d e f])
              (partition 2)
              (group-by
               (fn [[_ t]]
                 (let [d (from-long t)]
                   (date-midnight (year d) (month d) (day d)))))))))


(deftest long-interval-test
  (are [n x y] (= n (in-months (interval x y)))
    108 (date-time 2015 5 5) (date-time 2024 5 5)
    107 (date-time 2015 5 5) (date-time 2024 5 4)
    106 (date-time 2015 5 5) (date-time 2024 4 4)))

(enable-console-print!)
