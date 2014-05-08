(ns cljs-time.internal.core
  (:require
   [cljs-time.tz.data :refer [zones]]
   [clojure.string :as string]
   [goog.string :as gstring]
   [goog.string.format]))

(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (let [args (map (fn [x]
                    (if (or (keyword? x) (symbol? x))
                      (str x)
                      x))
                  args)]
    (apply gstring/format fmt args)))

(defn split-formats [s]
  (vec
   (if (re-seq #"%s" s)
     [(format s "") (format s "S")]
     (string/split s #"/"))))
