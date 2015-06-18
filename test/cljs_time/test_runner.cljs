(ns cljs-time.test-runner
  (:require
   cljs-time.coerce-test
   cljs-time.core-test
   cljs-time.format-test
   cljs-time.local-test
   cljs-time.periodic-test
   cljs-time.predicates-test
   [cljs.test :refer-macros [run-all-tests]]))

(run-all-tests)
