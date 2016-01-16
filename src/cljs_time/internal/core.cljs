(ns cljs-time.internal.core
  (:refer-clojure :exclude [=])
  (:require
   [clojure.string :as string]
   [goog.string :as gstring]
   [goog.string.format]))

(def months
  ["January" "February" "March" "April" "May" "June" "July" "August"
   "September" "October" "November" "December"])

(def days
  ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"])

(defn abbreviate [n s]
  (subs s 0 n))

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

(defn corrected-dim [month]
  (days-in-month (if (= month 1) 11 (dec month))))

(defn year-corrected-dim [year month]
  (cond-> (corrected-dim month)
    (and (leap-year? year) (= month 2)) inc))

(defn valid-date?
  [{:keys [years months days hours minutes seconds millis] :as d}]
  (let [months?  (when months (<= 1 months 12))
        dim      (if years
                   (and months months? (year-corrected-dim years months))
                   (and months months? (corrected-dim months)))
        days?    (when days (if dim (<= 1 days dim) (<= 1 days 31)))
        hours?   (when hours (<= 0 hours 23))
        minutes? (when minutes (<= 0 minutes 59))
        seconds? (when seconds (<= 0 seconds 60))
        millis?  (when millis (<= 0 millis 999))]
    (if (->> [months? days? hours? minutes? seconds? millis?]
             (remove nil?)
             (every? true?))
      d
      (throw
       (ex-info "Date is not valid"
                {:type :invalid-date :date d
                 :errors (cond-> {}
                           (false? months?)  (assoc :months months)
                           (false? days?)    (assoc :days days)
                           (false? hours?)   (assoc :hours hours)
                           (false? minutes?) (assoc :minutes minutes)
                           (false? seconds?) (assoc :seconds seconds)
                           (false? millis?)  (assoc :millis millis))})))))

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
   (if (< zeros 1)
     (str n)
     (str (string/join (take (- zeros (count (str n))) (repeat "0")))
          n))))

(defn multiplied-by [period scalar]
  (letfn [(scale-fn [field]
            (when field
              (* field scalar)))]
    (-> period
        (update-in [:millis] scale-fn)
        (update-in [:seconds] scale-fn)
        (update-in [:minutes] scale-fn)
        (update-in [:hours] scale-fn)
        (update-in [:days] scale-fn)
        (update-in [:weeks] scale-fn)
        (update-in [:months] scale-fn)
        (update-in [:years] scale-fn))))
