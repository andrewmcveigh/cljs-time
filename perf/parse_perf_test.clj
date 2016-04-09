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
                    :main 'runner
                    :output-to output
                    :optimizations :simple})))

(defn run-test []
  (let [{:keys [exit out err]} (sh/sh "node" test-runner)]
    (println out)
    (println err)
    (zero? exit)))

(defn compile-run-tests []
  (compile)
  (run-test))

(defmacro btime [& body]
  `(let [start# (.getTime (java.util.Date.))
         res# (do ~@body)]
     {:time-ms (- (.getTime (java.util.Date.)) start#)
      :res res#}))

(defn run-perf [version]
  (clone)
  (checkout version)
  (compile)
  (btime (run-test)))

;; (run-perf new-version)
