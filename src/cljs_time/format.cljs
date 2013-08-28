(ns cljs-time.format
  (:require
    [clojure.string :as string]
    [goog.date :as date]))

(def months
  ["January" "February" "March" "April" "May" "June" "July" "August"
   "September" "October" "November" "December"])

(def days
  ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"])

(def date-formatters
  (let [d      #(.getDate %)
        M #(inc (.getMonth %))
        y      #(.getYear %)
        h      #(.getHours %)
        m      #(.getMinutes %)
        s      #(.getSeconds %)
        S      #(.getMilliseconds %)
        ]
    {"d" d
     "dd" #(format "%02d" (d %))
     "dth" #(let [d (d %)] (str d (case d 1 "st" 2 "nd" 3 "rd" "th")))
     "dow" #(days (.getDay %))
     "M" M
     "MM" #(format "%02d" (M %))
     "yyyy" y
     "yy" #(mod (y %) 100)
     "MMM" #(months (dec (M %)))
     "h" h
     "m" m
     "s" s
     "S" S
     "hh" #(format "%02d" (h %))
     "mm" #(format "%02d" (m %))
     "ss" #(format "%02d" (s %))
     "SSS" #(format "%03d" (S %))}))

(def date-parsers
  (let [y #(.setYear %1            (js/parseInt %2 10))
        d #(.setUTCDate %1         (js/parseInt %2 10))
        M #(.setUTCMonth %1   (dec (js/parseInt %2 10)))
        h #(.setUTCHours %1        (js/parseInt %2 10))
        m #(.setUTCMinutes %1      (js/parseInt %2 10))
        s #(.setUTCSeconds %1      (js/parseInt %2 10))
        S #(.setUTCMilliseconds %1 (js/parseInt %2 10))]
    {"d" ["(\\d{1,2})" d]
     "dd" ["(\\d{2})" d]
     "dth" ["(\\d{1,2})(?:st|nd|rd|th)" d] 
     "M" ["(\\d{1,2})" M]
     "MM" ["(\\d{2})" M]
     "y" ["(\\d{1,4})" y]
     "yy" ["(\\d{2,4})" y]
     "yyyy" ["(\\d{4})" y]
     "MMM" [(str \( (string/join \| months) \))
            #(M %1 (str (inc (.indexOf (into-array months) %2))))]
     "dow" [(str \( (string/join \| days) \)) (constantly nil)]
     "h" ["(\\d{1,2})" h]
     "m" ["(\\d{1,2})" m]
     "s" ["(\\d{1,2})" s]
     "S" ["(\\d{1,2})" S]
     "hh" ["(\\d{2})" h]
     "mm" ["(\\d{2})" m]
     "ss" ["(\\d{2})" s]
     "SSS" ["(\\d{3})" S]}))

(def date-format-pattern
  (re-pattern
    (str "(" (string/join ")|(" (reverse (sort-by count (keys date-formatters)))) ")")))

(defn date-parse-pattern [formatter]
  (re-pattern
    (string/replace formatter date-format-pattern #(first (date-parsers %)))))

(defn parse [s formatter]
  (reduce (fn [date [part do-parse]] #_(.log js/console part) (do-parse date part) date)
          (doto (date/DateTime.) (.set (js/Date. 0 0 0 0 0 0 0)))
          (map (fn [a b] [a (second (date-parsers b))])
               (nfirst (re-seq (date-parse-pattern formatter) s))
               (map first (re-seq date-format-pattern formatter)))))

(defn unparse [date formatter]
  {:pre [(not (nil? date)) (instance? date/DateTime date)]}
  (string/replace formatter date-format-pattern #((date-formatters %) date)))
