(ns parse-perf-test
  (:refer-clojure :exclude [compile compare])
  (:require
   [cljs.build.api :as api]
   [cljs.closure :as closure]
   [clojure.java.shell :as sh]
   [clojure.java.io :as io]))

(def repo ".")
(def checkout-dir (str "/tmp/cljs-time-perf-test" (.getTime (java.util.Date.))))
(def test-runner (str checkout-dir "/perf_test_runner.js"))
(def old-version "develop")
(def new-version "wip/real-parser")

(defn clone []
  (println "Git cloning" repo "to" checkout-dir)
  (when (.exists (io/file checkout-dir)) (sh/sh "rm" "-rf" checkout-dir))
  (let [{:keys [exit]} (sh/sh "git" "clone" repo checkout-dir)]
    (zero? exit)))

(defn checkout [label]
  (println "Checking out" label)
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
    (println "Compiling 'runner to" output)
    (closure/build (SourcePaths. [(str checkout-dir "/perf")
                                  (str checkout-dir "/src")])
                   {:cache-analysis true
                    :main 'runner
                    :output-to output
                    :optimizations :advanced})))

(defn run-test []
  (let [{:keys [exit out err]} (sh/sh "node" test-runner)]
    (when (seq out) (println out))
    (when (seq err) (println err))
    (zero? exit)))

(defn compile-run-tests []
  (compile)
  (run-test))

(defn ensure-perf []
  (let [perf (io/file checkout-dir "perf")]
    (when-not (.exists perf)
      (sh/sh "cp" "-r" "perf" (str checkout-dir "/")))))

(defmacro btime [& body]
  `(let [start# (.getTime (java.util.Date.))
         res# (do ~@body)
         ms# (- (.getTime (java.util.Date.)) start#)]
     (println "Run took" ms# "ms")
     {:time-ms ms# :res res#}))

(defn run-perf [version]
  (let [n-times 3]
    (clone)
    (checkout version)
    (ensure-perf)
    (compile)
    (println "Running 'runner" n-times "times")
    (-> (->> #(btime (run-test))
             (repeatedly n-times)
             (map :time-ms)
             (reduce +))
        (/ n-times)
        (int))))

(defn compare [v1 v2]
  (let [v1-avg (run-perf v1)
        v2-avg (run-perf v2)]
    {:v1-avg-ms v1-avg :v2-avg-ms v2-avg}))

(defn run
  ([] (run old-version new-version))
  ([v1 v2]
    (println
      "Average runs:"
      (pr-str (compare v1 v2)))))

(comment

  (compare old-version new-version))
