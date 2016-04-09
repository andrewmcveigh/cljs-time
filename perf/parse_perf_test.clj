;; How to test:
;; need old code, compiled vs
;; new code compiled with same settings
;; run a number of parsing/formatting tests 1000x or something

;; tuning:
;; leave old code as is, new code needs to be as fast, or faster. No
;; gain from improving old code
;; need:
;; quick compile/test loop
;; compile in clojure? run in node/shell?
;; compile in cljs? run in cljs-env?

;; cleanest/most extendable way:
;; * checkout/clone repo to /tmp
;; * checkout 1st version
;; * compile
;; * run
;; * repeat with 2nd version

(ns parse-perf-test
  (:refer-clojure :exclude [compile compare])
  (:require
   [cljs.build.api :as api]
   [cljs.closure :as closure]
   [clojure.java.shell :as sh]
   [clojure.java.io :as io]))

(def repo "." #_"https://github.com/andrewmcveigh/cljs-time.git")
(def checkout-dir (str "/tmp/cljs-time-perf-test" (.getTime (java.util.Date.))))
(def test-runner (str checkout-dir "/perf_test_runner.js"))
(def old-version "v0.4.0")
(def new-version "a9a241f")

(defn clone []
  (when (.exists (io/file checkout-dir)) (sh/sh "rm" "-rf" checkout-dir))
  (let [{:keys [exit]} (sh/sh "git" "clone" repo checkout-dir)]
    (zero? exit)))

(defn checkout [label]
  (let [{:keys [exit]} (sh/sh "git" "checkout" label
                              :dir (io/file checkout-dir))]
    (zero? exit)))

(defrecord SourcePaths [paths]
  cljs.closure/Compilable
  (closure/-compile [_ opts]
    (mapcat #(closure/-compile % opts) paths))
  (closure/-find-sources [_ opts]
    (mapcat #(closure/-find-sources % opts) paths)))

(defn compile []
  (let [output (.getCanonicalPath (io/file test-runner))]
    (closure/build (SourcePaths. [(str checkout-dir "/perf")
                                  (str checkout-dir "/src")])
                   {:cache-analysis true
                    :main 'cljs-time.runner
                    :output-to output
                    :optimizations :simple})))

(defn run-test []
  (println "Running perf test:")
  (let [{:keys [exit out err]} (sh/sh "time" "node" test-runner)]
    (println out)
    (println err)
    (zero? exit)))

(defn compile-run-tests []
  (compile)
  (run-test))

(clone)
(checkout new-version)
(compile)
(time (run-test))
