(ns cljs-time.macros)

(defmacro do-at
  "Like clojure.core/do except evalautes the expression at the given date-time"
  [base-date-time & body]
  `(cljs-time.core/do-at* ~base-date-time
    (fn [] ~@body)))
