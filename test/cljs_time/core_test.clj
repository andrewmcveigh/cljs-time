(ns cljs-time.core-test)

(defmacro when-available
  [sym & body]
  (and (not `(cljs.core/undefined? ~sym))
       (list* 'do body)))

(defmacro when-not-available
  [sym & body]
  (when `(cljs.core/undefined? ~sym)
    `(do ~@body)))

(defmacro try= [error & body]
  `(= ::try=error (try ~@body (catch ~error _# ::try=error))))
