(ns cljs-time.internal.unparse
  (:require
   [cljs-time.internal.core :as i]
   [cljs-time.internal.parse :refer [read-pattern]]
   [goog.date])
  (:import
   [goog.date Date DateTime UtcDateTime Interval]))

(defn unparse-period [s d num min max]
  (let [n (i/zero-pad num min)
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

(defn unparse-period-name [s d n periods]
  [(str s (nth periods n)) d])

(defn unparse-month-name [months]
  (fn [s d]
    (unparse-period-name s d (.getMonth d) months)))

(defn unparse-day-name [days]
  (fn [s d]
    (unparse-period-name s d (.getDay d) days)))

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

(defn unparse-timezone []
  (fn [s d]
    (if (instance? UtcDateTime d)
      [(str s (.getTimezoneOffsetString d)) d]
      [s d])))

(defn unparse-ordinal-suffix [getter]
  (fn [s d]
    (let [n (getter d)
          o (case n 1 "st" 2 "nd" 3 "rd" 21 "st" 22 "nd" 23 "rd" 31 "st" "th")]
      [(str s o) d])))

(defn lookup [locale [t pattern]]
  (if (= t :token)
    (case pattern
      "S"    [:millis 1 2]
      "SSS"  [:millis 3 3]
      "s"    [:seconds 1 2]
      "ss"   [:seconds 2 2]
      "m"    [:minutes 1 2]
      "mm"   [:minutes 2 2]
      "h"    [:hours 1 2]
      "hh"   [:hours 2 2]
      "H"    [:HOURS 1 2]
      "HH"   [:HOURS 2 2]
      "d"    [:day 1 2]
      "dd"   [:day 2 2]
      "D"    [:day 1 3]
      "DD"   [:day 2 3]
      "DDD"  [:day 3 3]
      "M"    [:month 1 2]
      "MM"   [:month 2 2]
      "MMM"  [:month-name (.-SHORTMONTHS (:symbols locale))]
      "MMMM" [:month-name (.-MONTHS (:symbols locale))]
      "y"    [:year 1 4]
      "yy"   [:year 2 2]
      "yyyy" [:year 4 4]
      "Y"    [:year 1 4]
      "YY"   [:year 2 2]
      "YYYY" [:year 4 4]
      "x"    [:weekyear 1 4]
      "xx"   [:weekyear 2 2]
      "xxxx" [:weekyear 4 4]
      "w"    [:weekyear-week 1 2]
      "ww"   [:weekyear-week 2 2]
      "E"    [:day-name (.-SHORTWEEKDAYS (:symbols locale))]
      "EEE"  [:day-name (.-SHORTWEEKDAYS (:symbols locale))]
      "EEEE" [:day-name (.-WEEKDAYS (:symbols locale))]
      "a"    [:meridiem false]
      "A"    [:meridiem true]
      "Z"    [:timezone]
      "ZZ"   [:timezone]
      "o"    [:ordinal-suffix])
    [:quoted pattern]))

(defn lookup-getter [key]
  (case key
    :millis         #(.getMilliseconds %)
    :seconds        #(.getSeconds %)
    :minutes        #(.getMinutes %)
    :hours          #(.getHours %)
    :HOURS          #(.getHours %)
    :day            #(.getDate %)
    :month          #(.getMonth %)
    :year           #(.getYear %)))

(defn lookup-fn [syntax-list i [key & args]]
  (case key
    :millis         (apply unparse-millis args)
    :seconds        (apply unparse-seconds args)
    :minutes        (apply unparse-minutes args)
    :hours          (apply unparse-hours args)
    :HOURS          (apply unparse-HOURS args)
    :day            (apply unparse-day args)
    :month          (apply unparse-month args)
    :month-name     (apply unparse-month-name args)
    :year           (apply unparse-year args)
    :weekyear       (apply unparse-weekyear args)
    :weekyear-week  (apply unparse-weekyear-week args)
    :day-name       (apply unparse-day-name args)
    :meridiem       (apply unparse-meridiem args)
    :timezone       (apply unparse-timezone args)
    :ordinal-suffix (let [[k] (syntax-list (dec i))]
                      (unparse-ordinal-suffix (lookup-getter k)))
    :quoted         (apply unparse-quoted args)))

(defn unparse [{:keys [format-str locale] :as fmt} value]
  (let [syn-list (mapv (partial lookup locale)
                                      (read-pattern format-str))]
    (loop [d value
           [unparser & more] (map-indexed (partial lookup-fn syn-list) syn-list)
           s ""]
      (if (nil? unparser)
        s
        (let [[s d] (unparser s d)]
          (recur d more s))))))
