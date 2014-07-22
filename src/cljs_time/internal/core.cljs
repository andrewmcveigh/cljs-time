(ns cljs-time.internal.core)

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
