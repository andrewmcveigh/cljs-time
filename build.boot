(def project 'com.andrewmcveigh/cljs-time)
(def version "0.3.8-SNAPSHOT")

(set-env!
 :source-paths #{"src" "test"}
 :dependencies '[[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228" :scope "provided"]
                 [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                 [com.cemerick/piggieback "0.2.1" :scope "test"]
                 [funcool/codeina "0.3.0"
                  :scope "test"
                  :exclusions [org.clojure/clojure]]])

(require 'cemerick.piggieback)

(swap! boot.repl/*default-middleware* conj 'cemerick.piggieback/wrap-cljs-repl)
(swap! boot.repl/*default-middleware* distinct)

(task-options! pom {:project project :version "0.1.0-SNAPSHOT"})

(require '[boot.core :as boot])
(require '[boot.task.built-in :as task])


;;; CLJS

(require '[clojure.java.io :as io])
(require '[clojure.java.shell :as shell])
(require '[cljs.build.api :as cljs])
(require '[cljs.closure :as closure])
(require '[cljs.repl])
(require '[cljs.repl.node])

(defrecord SourcePaths [paths]
  cljs.closure/Compilable
  (-compile [_ opts]
    (mapcat #(closure/-compile % opts) paths)))

(defn compile
  [optimizations & {:keys [out-dir] :or {out-dir "target"}}]
  {:pre [(#{:none :whitespace :simple :advanced} optimizations)]}
  (let [output (.getCanonicalPath
                (io/file "target" (str (name optimizations) ".js")))]
    (closure/build (SourcePaths. ["src" "test"])
                   {:cache-analysis true
                    :main 'cljs-time.test-runner
                    :output-to output
                    :optimizations optimizations})))

(defn run-test
  [[test-name test-command]]
  (println "Running ClojureScript test:" test-name)
  (let [{:keys [exit out err]} (apply shell/sh test-command)]
    (println out)
    (println err)
    (zero? exit)))

(defn run-tests [test-commands]
  (when-not (->> test-commands (map run-test) doall (every? true?))
    (throw (ex-info "Tests failed." {:type :test-failed}))))

(defn test-command [optimization]
  (let [optimization (name optimization)]
    [[optimization ["node" (format "target/%s.js" optimization)]]]))

(defn compile-run-tests [& optimizations]
  (doseq [o optimizations]
    (compile o)
    (run-tests (test-command o))))

(require '[cljs.repl.rhino :as rhino])
(require '[cemerick.piggieback])

(boot/deftask node-repl []
  (cemerick.piggieback/cljs-repl (cljs.repl.node/repl-env)))

(boot/deftask rhino-repl []
  (cemerick.piggieback/cljs-repl (rhino/repl-env)))

(require '[codeina.core :as codeina])

(merge-env! :source-paths #{"checkouts/codeina/src"})

(require '[cljs.analyzer :as ana])
(require '[clojure.java.io :as io])

(boot/deftask gen-docs []
  (codeina/generate-docs
   {:language :clojurescript
    :reader :clojurescript
    :name project
    :version version
    :output-dir "docs"
    :exclude '[cljs.core cljs.user]}))
