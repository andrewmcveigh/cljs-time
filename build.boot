(def +project+ 'com.andrewmcveigh/cljs-time)
(def +version+ "0.5.0-SNAPSHOT")
(def +description+ "A clj-time inspired date library for clojurescript.")

(def dependencies
  '[[org.clojure/clojure "1.8.0" :scope "provided"]
    [org.clojure/clojurescript "1.8.40" :scope "provided"]
    [org.clojure/tools.nrepl "0.2.12"]
    [funcool/codeina "0.3.0"
     :scope "test" :exclude [org.clojure/clojure org.clojure/tools.namespace]]
    [adzerk/boot-cljs "1.7.228-1"]
    [crisptrutski/boot-cljs-test "0.2.2-SNAPSHOT" :scope "test"]
    [doo "0.1.7-SNAPSHOT"]
    [funcool/boot-codeina "0.1.0-SNAPSHOT"]
    [com.cemerick/piggieback "0.2.1"
     :scope "test" :exclude [org.clojure/clojure]]])

(set-env!
 :source-paths #{"src" "test" "compile" "perf"}
 :dependencies dependencies)

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[boot.core :as boot]
 '[boot.repl :as repl]
 '[boot.task.built-in :as task]
 '[cljs.closure :as closure]
 '[clojure.java.io :as io]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]]
 '[doo.shell]
 '[doo.utils]
 '[funcool.boot-codeina :refer [apidoc]]
 '[parse-perf-test :as perf]
 'cemerick.piggieback 'cljs.repl 'cljs.repl.node)

(task-options!
 pom {:project +project+
      :version +version+
      :description +description+
      :license {:name "Eclipse Public License"
                :url "http://www.eclipse.org/legal/epl-v10.html"}
      :scm {:url "git@github.com:andrewmcveigh/cljs-time.git"}}
 apidoc {:version +version+
         :name (name +project+)
         :description +description+
         :sources #{"src"}
         :reader :clojurescript})

(boot/deftask compare-perf []
  (println
   "Average runs:"
   (pr-str (perf/compare perf/old-version perf/new-version))))

;; ;;; CLJS

(defrecord SourcePaths [paths]
  cljs.closure/Compilable
  (closure/-compile [_ opts]
    (mapcat #(closure/-compile % opts) paths))
  (closure/-find-sources [_ opts]
    (mapcat #(closure/-find-sources % opts) paths)))

(defn compile
  [optimizations & {:keys [out-dir] :or {out-dir "target"}}]
  {:pre [(#{:none :whitespace :simple :advanced} optimizations)]}
  (printf "Compiling with optimizations %s to %s...\n" optimizations out-dir)
  (let [file (str (name optimizations) ".js")
        output (-> (io/file out-dir file)
                   (.getCanonicalPath))]
    (closure/build (SourcePaths. ["src" "test"])
                   {:cache-analysis true
                    :main 'cljs-time.test-runner
                    :output-to output
                    :optimizations optimizations}))
  (println "Finished compiling"))

(def env
  (into-array String ["TZ=Australia/Canberra"]))

(alter-var-root
 #'doo.shell/exec!
 (constantly
  (fn exec! [cmd exec-dir]
    (let [command-arr (into-array String cmd)]
      (if exec-dir
        (.exec (Runtime/getRuntime) command-arr env exec-dir)
        (.exec (Runtime/getRuntime) command-arr env))))))

(deftask auto-test []
  (comp (watch)
        (speak)
        (test-cljs :js-env :node)))

(defn add-piggieware []
  ;; (require 'cemerick.piggieback)
  (swap! repl/*default-middleware* conj 'cemerick.piggieback/wrap-cljs-repl)
  (swap! repl/*default-middleware* distinct))

(defn node-repl []
  (add-piggieware)
  ;; (require ')
  (cemerick.piggieback/cljs-repl (cljs.repl.node/repl-env)))

;; (defn rhino-repl []
;;   (add-piggieware)
;;   ;; (require 'cljs.repl 'cljs.repl.rhino)
;;   (cemerick.piggieback/cljs-repl (cljs.repl.rhino/repl-env)))

;; (require '[cljs.analyzer :as ana])
;; (require '[clojure.java.io :as io])

;; (defn compile-dce-test []
;;   (let [output (.getCanonicalPath (io/file "target/dce-test.js"))]
;;     (closure/build "compile"
;;                    {:cache-analysis false
;;                     :main 'cljs-time.dce-compile-test
;;                     :output-to output
;;                     :optimizations :advanced})))

;; (boot/deftask test-dce []
;;   (compile-dce-test)
;;   (let [f (io/file "target/dce-test.js")
;;         b (.length f)]
;;     (printf "%.2f KB" (double (/ b 1024)))))
