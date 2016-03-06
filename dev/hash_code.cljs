(ns hash-code)

(def ERAS      (byte 1))
(def CENTURIES (byte 2))
(def WEEKYEARS (byte 3))
(def YEARS     (byte 4))
(def MONTHS    (byte 5))
(def WEEKS     (byte 6))
(def DAYS      (byte 7))
(def HALFDAYS  (byte 8))
(def HOURS     (byte 9))
(def MINUTES  (byte 10))
(def SECONDS  (byte 11))
(def MILLIS   (byte 12))
(def TIMEZONE (byte 13))
(def DATE     (byte 14))
(def DATETIME (byte 15))
(def UTCDT    (byte 16))

(defn ordinal-hash [o]
  (bit-shift-left 1 o))

(defn hash-code [d]
  (let [hash-field (fn [d t [ordinal get-value]]
                     (-> t
                         (* 23)
                         (+ (get-value d))
                         (* 23)
                         (+ (ordinal-hash ordinal))))
        total 157
        fields {YEARS #(.getYear %)
                MONTHS #(.getMonth %)
                DAYS #(.getDate %)
                HOURS #(.getHours %)
                MINUTES #(.getMinutes %)
                SECONDS #(.getSeconds %)
                MILLIS #(.getMilliseconds %)
                TIMEZONE #(.getTimezoneOffset %)}]
    (reduce (partial hash-field d) total fields)))
