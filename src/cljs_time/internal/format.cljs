(ns cljs-time.internal.format
  (:require
   [cljs-time.internal.core :refer [zero-pad]]
   [cljs-time.internal.parse :refer [read-pattern]]
   [goog.date])
  (:import
   [goog.date Date DateTime UtcDateTime Interval]))

(defn unparse-period [s d num min max]
  (let [n (zero-pad num min)
        c (count n)
        n (subs n (- c max))]
    [(str s n) d]))

(defn unparse-millis
  ([min] (unparse-millis min min))
  ([min max]
   (fn [s d]
     (unparse-period s d (.getMilliseconds d) min max))))

(defn unparse-seconds
  ([min] (unparse-seconds min min))
  ([min max]
   (fn [s d]
     (unparse-period s d (.getSeconds d) min max))))

(defn unparse-minutes
  ([min] (unparse-minutes min min))
  ([min max]
   (fn [s d]
     (unparse-period s d (.getMinutes d) min max))))

(defn unparse-hours
  ([min] (unparse-hours min min))
  ([min max]
   (fn [s d]
     (let [hr (mod (.getHours d) 12)
           hours (if (zero? hr) 12 hr)]
       (unparse-period s d hours min max)))))

(defn unparse-HOURS
  ([min] (unparse-HOURS min min))
  ([min max]
   (fn [s d]
     (prn s d)
     (unparse-period s d (.getHours d) min max))))

(defn unparse-day
  ([min] (unparse-day min min))
  ([min max]
   (fn [s d]
     (unparse-period s d (.getDate d) min max))))

(defn unparse-day-of-year
  ([min] (unparse-day min min))
  ([min max]
   (fn [s d]
     (unparse-period s d (.getDate d) min max))))

(defn unparse-month
  ([min] (unparse-month min min))
  ([min max]
   (fn [s d]
     (unparse-period s d (inc (.getMonth d)) min max))))

(defn unparse-year
  ([min] (unparse-year min min))
  ([min max]
   (fn [s d]
     (unparse-period s d (.getYear d) min max))))

(defn unparse-quoted [quoted]
  (fn [s d]
    [(apply str s quoted) d]))

(defn unparse-period-name [s d n periods short?]
  (let [periods (vec (cond->> periods short? (map #(subs % 0 3))))]
    [(str s (periods n)) d]))

(def months
  ["January" "February" "March" "April" "May" "June"
   "July" "August" "September" "October" "November" "December"])

(def days
  ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"])

(defn unparse-month-name [short?]
  (fn [s d]
    (unparse-period-name s d (.getMonth d) months short?)))

(defn unparse-day-name [short?]
  (fn [s d]
    (unparse-period-name s d (.getDay d) days short?)))

(defn unparse-weekyear
  ([min] (unparse-weekyear min min))
  ([min max]
   (fn [s d]
     (let [year (.getYear d) month (.getMonth d) day (.getDate d)
           january (= month 0)
           december (= month 11)
           week-number (goog.date/getWeekNumber year month day)
           weekyear (cond (and january (>= week-number 52))
                          (dec year)
                          (and december (= week-number 1))
                          (inc year)
                          :else year)]
       (unparse-period s d weekyear min max)))))

(defn unparse-weekyear-week
  ([min] (unparse-weekyear-week min min))
  ([min max]
   (fn [s d]
     (let [year (.getYear d) month (.getMonth d) day (.getDate d)]
       (unparse-period s d (goog.date/getWeekNumber year month day) min max)))))

(defn unparse-meridiem [capitalize?]
  (fn [s d]
    (let [hours (.getHours d)
          meridiem (if capitalize?
                     (if (< hours 12) "AM" "PM")
                     (if (< hours 12) "am" "pm"))]
      [(str s meridiem) d])))

((unparse-meridiem false) "" d)

(defn lookup [[t pattern]]
  (if (= t :token)
    (case pattern
      "S"    (unparse-millis 1 2)
      "SSS"  (unparse-millis 3 3)
      "s"    (unparse-seconds 1 2)
      "ss"   (unparse-seconds 2 2)
      "m"    (unparse-minutes 1 2)
      "mm"   (unparse-minutes 2 2)
      "h"    (unparse-hours 1 2)
      "hh"   (unparse-hours 2 2)
      "H"    (unparse-HOURS 1 2)
      "HH"   (unparse-HOURS 2 2)
      "d"    (unparse-day 1 2)
      "dd"   (unparse-day 2 2)
      "D"    (unparse-day 1 3)
      "DD"   (unparse-day 2 3)
      "DDD"  (unparse-day 3 3)
      "M"    (unparse-month 1 2)
      "MM"   (unparse-month 2 2)
      "MMM"  (unparse-month-name true)
      "MMMM" (unparse-month-name false)
      "y"    (unparse-year 1 4)
      "yy"   (unparse-year 2 2)
      "yyyy" (unparse-year 4 4)
      "Y"    (unparse-year 1 4)
      "YY"   (unparse-year 2 2)
      "YYYY" (unparse-year 4 4)
      "x"    (unparse-weekyear 1 4)
      "xx"   (unparse-weekyear 2 2)
      "xxxx" (unparse-weekyear 4 4)
      "w"    (unparse-weekyear-week 1 2)
      "ww"   (unparse-weekyear-week 2 2)
      "E"    (unparse-day-name true)
      "EEE"  (unparse-day-name true)
      "EEEE" (unparse-day-name false)
      "a"    (unparse-meridiem false)
      "A"    (unparse-meridiem true))
    (unparse-quoted pattern)))

(defn unparse [pattern value]
  (loop [d value
         [unparser & more] (map lookup (read-pattern pattern))
         s ""]
    (if (nil? unparser)
      s
      (let [[s d] (unparser s d)]
        (recur d more s)))))

(def dd
  [[:token "dd"] [:token "MM"] [:token "yyyy"]])

(def d (DateTime. 2016 5 1 11 2 5))

(unparse "ddMMyyyy'T'HH:mm:ss.SSS" d)
