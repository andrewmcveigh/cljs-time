(ns test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [cljs-time.coerce-test]
   [cljs-time.core-test]
   [cljs-time.format-test]
   [cljs-time.local-test]
   [cljs-time.periodic-test]
   [cljs-time.predicates-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
        (run-tests
         'cljs-time.coerce-test
         'cljs-time.core-test
         'cljs-time.format-test
         'cljs-time.local-test
         'cljs-time.periodic-test
         'cljs-time.predicates-test))
    0
    1))
