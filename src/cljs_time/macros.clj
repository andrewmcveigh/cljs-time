(ns cljs-time.macros "### Supporting macros")

(defmacro do-at
  "Like clojure.core/do except evalautes the expression at the given date-time"
  [base-date-time & body]
  `(cljs-time.core/do-at* ~base-date-time
    (fn [] ~@body)))

(require '[clojure.data.json :as json])

(defmacro defjs
  "Expands into js form at compile-time"
  [name expr]
  `(def ~name (~'js* ~(json/write-str expr))))
