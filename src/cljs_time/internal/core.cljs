(ns cljs-time.internal.core
  (:refer-clojure :exclude [=])
  (:require
   [clojure.string :as string]
   [goog.string :as gstring]
   [goog.string.format]))

(defn = [& args]
  (cond (every? #(instance? goog.date.Date %) args)
        (apply cljs.core/= (map #(.getTime %) args))
        :default (apply cljs.core/= args)))

(defn leap-year? [y]
  (cond (zero? (mod y 400)) true
        (zero? (mod y 100)) false
        (zero? (mod y 4)) true
        :else false))

(def days-in-month [31 28 31 30 31 30 31 31 30 31 30 31])

(defn year-corrected-dim [year month]
  (cond-> (days-in-month (if (= month 1) 11 (dec month)))
          (and (leap-year? year) (= month 2)) inc))

(defn valid-date?
  [{:keys [years months days hours minutes seconds millis] :as d}]
  (let [months (inc months)]
    (letfn [(>< [a b x] (and (>= x a) (<= x b)))]
      (if (and years
               (>< 1 12 months)
               (>< 1 (year-corrected-dim years months) days)
               (>< 0 23 hours)
               (>< 0 59 minutes)
               (>< 0 60 seconds)
               (>< 0 999 millis))
        d
        (throw (ex-info "Date is not valid" {:type :invalid-date
                                             :date d}))))))

(defn index-of [coll x]
  (first (keep-indexed #(when (= %2 x) %1) coll)))

(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (let [args (map (fn [x]
                    (if (or (keyword? x) (symbol? x))
                      (str x)
                      x))
                  args)]
    (apply gstring/format fmt args)))

(defn zero-pad
  "Remove the need to pull in gstring/format code in advanced compilation"
  ([n] (if (<= 0 n 9) (str "0" n) (str n)))
  ([n zeros]
   ; No need to handle negative numbers
   (if (> 1 zeros)
     (str n)
     (str (string/join (take (- zeros (count (str n))) (repeat "0")))
          n))))

(defn in-millis
  "Returns the number of milliseconds in the given Interval."
  [{:keys [start end]}]
  (- (.getTime end) (.getTime start)))

(defn in-seconds
  "Returns the number of standard seconds in the given Interval."
  [in]
  (int (/ (in-millis in) 1000)))

(defn in-minutes
  "Returns the number of standard minutes in the given Interval."
  [in]
  (int (/ (in-seconds in) 60)))

(defn in-hours
  "Returns the number of standard hours in the given Interval."
  [in]
  (int (/ (in-minutes in) 60)))

(defn in-days
  "Returns the number of standard days in the given Interval."
  [in]
  (int (/ (in-hours in) 24)))

(defn in-weeks
  "Returns the number of standard weeks in the given Interval."
  [in]
  (int (/ (in-days in) 7)))
