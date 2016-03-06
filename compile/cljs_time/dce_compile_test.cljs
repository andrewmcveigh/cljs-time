(ns cljs-time.dce-compile-test
  (:require
   [cljs-time.core :as time]
   ;; [cljs-time.format :as format]
   ))

;; (.log js/console (time/plus (time/date-time 2014) (time/months 1)))
;; (+ 1 1)
(.log js/console (aget time/period-fns "seconds"))

;; (format/parse (format/formatters :basic-date) "20140808")
;; (format/formatters :basic-date)

;; (def d1 (format/parse (format/formatters :basic-date) "20140808"))
;; (.log js/console d1)

;; (format/unparse (format/formatters :basic-date) d1)
;; (format/unparse (format/formatters :basic-date) d1)
