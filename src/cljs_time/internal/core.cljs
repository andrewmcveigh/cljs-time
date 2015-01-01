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
        (throw (ex-info "Date is not valid" {:type :invalid-date :date d}))))))

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
