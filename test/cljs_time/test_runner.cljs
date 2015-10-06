(ns cljs-time.test-runner
  (:require
   cljs-time.coerce-test
   cljs-time.core-test
   cljs-time.format-test
   cljs-time.local-test
   cljs-time.periodic-test
   cljs-time.predicates-test
   [cljs.test :refer-macros [run-all-tests]]))

(defmethod cljs.test/report [:cljs.test/default :end-run-tests]
  [{:keys [fail error]}]
  (when-not (and (zero? fail) (zero? error))
    ((aget js/process "exit") 1)))

(run-all-tests)
