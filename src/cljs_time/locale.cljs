(ns cljs-time.locale
  (:require
   [clojure.string :as string])
  (:import
   [goog.i18n DateTimeSymbols]))

(defrecord Locale [symbols])

(defn locale? [x] (instance? Locale x))

(defn locale
  ([language]
   (locale language nil nil))
  ([language country]
   (locale language country nil))
  ([language country variant]
   (let [locale (->> [language country variant]
                     (remove nil?)
                     (string/join "_"))]
     (or (->Locale (aget goog.i18n (str "DateTimeSymbols_" locale)))
         (throw (ex-info (str "Unknown locale " locale
                              ". Please see goog.i18n for valid locales.")
                         {:type :unknown-locale}))))))

(def ENGLISH (locale "en"))
(def FRENCH (locale "fr"))
(def GERMAN (locale "de"))
(def ITALIAN (locale "it"))
(def JAPANESE (locale "ja"))
(def KOREAN (locale "ko"))
(def CHINESE (locale "zh"))
(def SIMPLIFIED_CHINESE (locale "zh" "CN"))
(def TRADITIONAL_CHINESE (locale "zh" "TW"))
(def FRANCE (locale "fr" "FR"))
(def GERMANY (locale "de" "DE"))
(def ITALY (locale "it" "IT"))
(def JAPAN (locale "ja" "JP"))
(def KOREA (locale "ko" "KR"))
(def CHINA SIMPLIFIED_CHINESE)
(def PRC CHINA)
(def TAIWAN TRADITIONAL_CHINESE)
(def UK (locale "en" "GB"))
(def US (locale "en" "US"))
(def CANADA (locale "en" "CA"))
(def CANADA_FRENCH (locale "fr" "CA"))

(def DEFAULT (locale goog.LOCALE))
