(ns cljs-time.format
  "### Utilities for parsing and unparsing DateTimes as Strings.

  Parsing and printing are controlled by formatters. You can either use one
  of the built in ISO 8601 and a single RFC 822 formatters or define your own, e.g.:

    (def built-in-formatter (formatters :basic-date-time))
    (def custom-formatter (formatter \"yyyyMMdd\"))

  To see a list of available built-in formatters and an example of a date-time
  printed in their format:

    (show-formatters)

  Once you have a formatter, parsing and printing are strait-forward:

    => (parse custom-formatter \"20100311\")
    #<DateTime 2010-03-11T00:00:00.000Z>

    => (unparse custom-formatter (date-time 2010 10 3))
    \"20101003\"

  By default the parse function always returns a DateTime instance with a UTC
  time zone, and the unparse function always represents a given DateTime
  instance in UTC. A formatter can be modified to different timezones, locales,
  etc with the functions with-zone, with-locale, with-chronology, and
  with-pivot-year."
  (:require
    [cljs-time.internal.core :refer [index-of valid-date? format zero-pad]]
    [cljs-time.core :as time]
    [clojure.set :refer [difference]]
    [clojure.string :as string]
    [goog.date :as date]
<<<<<<< HEAD
    [goog.date.duration :as duration]
    [goog.string :as gstring]
    [goog.string.format]))

(def months
  ["January" "February" "March" "April" "May" "June" "July" "August"
   "September" "October" "November" "December"])

(def days
  ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"])

(defn abbreviate [n s]
  (subs s 0 n))
=======
    [goog.i18n.DateTimeParse]
    [goog.i18n.DateTimeFormat]
    [goog.string :as gstring]
    [goog.string.format]))
>>>>>>> Replace parser with closure parser


(defn timezone-adjustment [d timezone-string]
  (let [[_ sign hh mm] (string/split timezone-string
                                     #"Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$")]
    (when (and sign hh mm)
      (let [sign (cond (= sign "-") time/plus
                       (= sign "+") time/minus)
            [hh mm] (map #(js/parseInt % 10) [hh mm])
            adjusted (-> d
                         (sign (time/hours hh))
                         (sign (time/minutes mm)))]
        (.setTime d (.getTime adjusted))))
    d))

(defn dth [_ dt]
  (let [d (.getDate dt)]
    (str d (case d 1 "st" 2 "nd" 3 "rd" 21 "st" 22 "nd" 23 "rd" 31 "st" "th"))))

(defn consistent-tz-str [_ dt]
  (if (zero? (.getTimezoneOffset dt))
    "Z"
    (.getTimezoneOffsetString dt)))

(def formatter-defaults
  {:pre-format {#"dow" "EEEE"}
   :post-format {#"dth" dth #"ZZ?" consistent-tz-str}
   :pre-parse {"dth" ["d" "(\\d{1,2})(?:st|nd|rd|th)" "$1"]
               "([^Z])Z$" ["$1Z" "([^Z])Z$" "$1+0000"]
               "YYYY" ["yyyy"]
               "DD" ["dd"]}})

(defn formatter
  ([fmts]
     (formatter fmts time/utc))
  ([fmts dtz]
     (with-meta
       {:format-str fmts
        :constructor goog.date.UtcDateTime}
       {:type ::formatter})))

(defn formatter-local [fmts]
  (with-meta
    {:format-str fmts
     :pre-format {#"Z" ""}}
    {:type ::formatter}))

(defn not-implemented [sym]
  #(throw (clj->js {:name :not-implemented
                    :message (format "%s not implemented yet" (name sym))})))

(defn with-default-year
  "Return a copy of a formatter that uses the given default year."
  [f default-year]
  (assoc f :default-year default-year))

(def ^{:doc "Map of ISO 8601 and a single RFC 822 formatters that can be used
for parsing and, in most cases, printing.

Note: due to current implementation limitations, timezone information
cannot be kept. Although the correct offset will be applied to UTC
time if supplied."}
  formatters
    {:basic-date (formatter "yyyyMMdd")
     :basic-date-time (formatter "yyyyMMdd'T'HHmmss.SSSZ")
     :basic-date-time-no-ms (formatter "yyyyMMdd'T'HHmmssZ")
     :basic-ordinal-date (formatter "yyyyDDD")
     :basic-ordinal-date-time (formatter "yyyyDDD'T'HHmmss.SSSZ")
     :basic-ordinal-date-time-no-ms (formatter "yyyyDDD'T'HHmmssZ")
     :basic-time (formatter "HHmmss.SSSZ")
     :basic-time-no-ms (formatter "HHmmssZ")
     :basic-t-time (formatter "'T'HHmmss.SSSZ")
     :basic-t-time-no-ms (formatter "'T'HHmmssZ")
     :basic-week-date (formatter "xxxx'W'wwe")
     :basic-week-date-time (formatter "xxxx'W'wwe'T'HHmmss.SSSZ")
     :basic-week-date-time-no-ms (formatter "xxxx'W'wwe'T'HHmmssZ")
     :date (formatter "yyyy-MM-dd")
     :date-element-parser (not-implemented 'dateElementParser)
     :date-hour (formatter "yyyy-MM-dd'T'HH")
     :date-hour-minute (formatter "yyyy-MM-dd'T'HH:mm")
     :date-hour-minute-second (formatter "yyyy-MM-dd'T'HH:mm:ss")
     :date-hour-minute-second-fraction (formatter "yyyy-MM-dd'T'HH:mm:ss.SSS")
     :date-hour-minute-second-ms (formatter "yyyy-MM-dd'T'HH:mm:ss.SSS")
     :date-opt-time (not-implemented 'dateOptionalTimeParser)
     :date-parser (not-implemented 'dateParser)
     :date-time (formatter "yyyy-MM-dd'T'HH:mm:ss.SSSZZ")
     :date-time-no-ms (formatter "yyyy-MM-dd'T'HH:mm:ssZZ")
     :date-time-parser (not-implemented 'dateTimeParser)
     :hour (formatter "HH")
     :hour-minute (formatter "HH:mm")
     :hour-minute-second (formatter "HH:mm:ss")
     :hour-minute-second-fraction (formatter "HH:mm:ss.SSS")
     :hour-minute-second-ms (formatter "HH:mm:ss.SSS")
     :local-date-opt-time (not-implemented 'localDateOptionalTimeParser)
     :local-date (not-implemented 'localDateParser)
     :local-time (not-implemented 'localTimeParser)
     :ordinal-date (formatter "yyyy-DDD")
     :ordinal-date-time (formatter "yyyy-DDD'T'HH:mm:ss.SSSZZ")
     :ordinal-date-time-no-ms (formatter "yyyy-DDD'T'HH:mm:ssZZ")
     :time (formatter "HH:mm:ss.SSSZZ")
     :time-element-parser (not-implemented 'timeElementParser)
     :time-no-ms (formatter "HH:mm:ssZZ")
     :time-parser (formatter 'timeParser)
     :t-time (formatter "'T'HH:mm:ss.SSSZZ")
     :t-time-no-ms (formatter "'T'HH:mm:ssZZ")
     :week-date (formatter "xxxx-'W'ww-e")
     :week-date-time (formatter "xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ")
     :week-date-time-no-ms (formatter "xxxx-'W'ww-e'T'HH:mm:ssZZ")
     :weekyear (formatter "xxxx")
     :weekyear-week (formatter "xxxx-'W'ww")
     :weekyear-week-day (formatter "xxxx-'W'ww-e")
     :year (formatter "yyyy")
     :year-month (formatter "yyyy-MM")
     :year-month-day (formatter "yyyy-MM-dd")
     :rfc822 (formatter "EEE, dd MMM yyyy HH:mm:ss Z")
     :mysql (formatter "yyyy-MM-dd HH:mm:ss")})

(def ^{:private true} parsers
  #{:date-element-parser :date-opt-time :date-parser :date-time-parser
    :local-date-opt-time :local-date :local-time :time-element-parser
    :time-parser})

(def ^{:private true} printers
  (difference (set (keys formatters)) parsers))

(defn parse
  "Returns a DateTime instance in the UTC time zone obtained by parsing the
  given string according to the given formatter."
  ([{:keys [format-str pre-parse default-year constructor]
     :or {constructor goog.date.UtcDateTime}} s]
   (let [pre-parse (merge (:pre-parse formatter-defaults) pre-parse)
         d (new constructor (or default-year 0))
         [s format-str] (reduce-kv (fn [[s format-str] k [v regex repl]]
                                     [(if (and regex repl)
                                        (string/replace s (re-pattern regex) repl)
                                        s)
                                      (string/replace format-str (re-pattern k) v)])
                                   [s format-str]
                                   pre-parse)
         parser (goog.i18n.DateTimeParse. format-str)
         parsed-count (.strictParse parser s d)
         success? #(and (seq s)
                        (= (count (string/replace s #"Z$" ""))
                           %))]
     (when (zero? parsed-count)
       (when (success? (.parse parser s d))
         (throw
          (ex-info "Date is not valid" {:type :invalid-date :date d})))
       (throw
        (ex-info "The parser could not match the input string."
                 {:type :parser-no-match :format-str format-str})))
     (when (success? parsed-count) d)))
  ([s]
   (first
    (for [f (->> formatters (sort-by key) (map val))
          :let [d (try (parse f s) (catch :default _))]
          :when d] d))))

(defn parse-local
  "Returns a local DateTime instance obtained by parsing the
  given string according to the given formatter."
  ([fmt s]
   (-> fmt
       (assoc :constructor goog.date.DateTime
              :pre-parse {"ZZ?$" [""]
                          "([^Z])Z$" [""]})
       (parse s)))
  ([s]
   (first
    (for [f (->> formatters (sort-by key) (map val))
          :let [d (try (parse-local f s) (catch js/Error _ nil))]
          :when d] d))))

(defn parse-local-date
  "Returns a local Date instance obtained by parsing the
  given string according to the given formatter."
  ([fmt s]
   (-> fmt
       (assoc :constructor goog.date.Date
              :pre-parse {"ZZ?$" [""]
                          "([^Z])Z$" [""]})
       (parse s)))
  ([s]
   (first
    (for [f (->> formatters (sort-by key) (map val))
          :let [d (try (parse-local-date f s) (catch js/Error _ nil))]
          :when d] d))))

(defn unparse
  "Returns a string representing the given DateTime instance in UTC and in the
  form determined by the given formatter."
  [{:keys [format-str default-year constructor pre-format post-format]
    :or {constructor goog.date.UtcDateTime}} dt]
  {:pre [(not (nil? dt)) (instance? goog.date.Date dt)]}
  (let [pre-format (merge (:pre-format formatter-defaults) pre-format)
        post-format (merge (:post-format formatter-defaults) post-format)
        post-replace-atom (atom {})
        post-replace (fn [init k v]
                       (let [i (->> (apply (fnil max 0)
                                           (keys @post-replace-atom))
                                    (or 0)
                                    inc)
                             sym (str "##" i "##")
                             s (string/replace init k sym)]
                         (when (not= s init)
                           (swap! post-replace-atom assoc i [(re-pattern sym) v]))
                         s))
        format-str (reduce-kv string/replace format-str pre-format)
        format-str (reduce-kv post-replace format-str post-format)
        formatter (goog.i18n.DateTimeFormat. format-str)]
    (reduce-kv (fn [init _ [k v]]
                 (string/replace init k (v init dt)))
               (.format formatter dt)
               @post-replace-atom)))

(defn unparse-local
  "Returns a string representing the given local DateTime instance in the
  form determined by the given formatter."
  [fmt dt]
  {:pre [(not (nil? dt)) (instance? goog.date.DateTime dt)]}
  (-> fmt
      (assoc :constructor goog.date.DateTime)
      (assoc-in [:pre-format #"Z"] "")
      (unparse dt)))

(defn unparse-local-date
  "Returns a string representing the given local Date instance in the form
  determined by the given formatter."
  [fmt dt]
  {:pre [(not (nil? dt)) (instance? goog.date.Date dt)]}
    (-> fmt
      (assoc :constructor goog.date.Date)
      (assoc-in [:pre-format #"Z"] "")
      (unparse dt)))

(defn show-formatters
  "Shows how a given DateTime, or by default the current time, would be
formatted with each of the available printing formatters."
  ([] (show-formatters (time/now)))
  ([dt]
     (doseq [p (sort printers)]
       (let [fmt (formatters p)]
         (print (format "%-40s%s\n" p (unparse fmt dt)))))))

(defprotocol Mappable
  (instant->map [instant] "Returns a map representation of the given instant.
                          It will contain the following keys: :years, :months,
                          :days, :hours, :minutes and :seconds."))

(defn unparse-duration
  "Accepts a Period or Interval and outputs an absolute duration time
  in form of \"1 day\", \"2 hours\", \"20 minutes\", \"2 days 1 hour
  15 minutes\" etc."
  [duration]
  (-> duration time/in-millis duration/format))

(defn- to-map [years months days hours minutes seconds millis]
  {:years years
   :months months
   :days days
   :hours hours
   :minutes minutes
   :seconds seconds
   :millis millis})

(extend-protocol Mappable
  goog.date.UtcDateTime
  (instant->map [dt]
    (to-map
      (.getYear dt)
      (inc (.getMonth dt))
      (.getDate dt)
      (.getHours dt)
      (.getMinutes dt)
      (.getSeconds dt)
      (.getMilliseconds dt)))

  cljs-time.core.Period
  (instant->map [m]
    (time/->period m))

  cljs-time.core.Interval
  (instant->map [m]
    (time/->period m))

  cljs.core/PersistentArrayMap
  (instant->map [m]
    (case (:type (meta m))
      :cljs-time.core/period m
      :cljs-time.core/interval (time/->period m))))
