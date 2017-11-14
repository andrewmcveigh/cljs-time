(def +project+ 'com.andrewmcveigh/cljs-time)
(def +version+ "0.5.3-SNAPSHOT")
(def +description+ "A clj-time inspired date library for clojurescript.")

(def dependencies
  '[[org.clojure/clojure "1.8.0" :scope "provided"]
    [org.clojure/clojurescript "1.9.521" :scope "provided"]])

(def dev-dependencies
  '[[org.clojure/tools.nrepl "0.2.12" :scope "test" :exclusions [org.clojure/clojure]]
    [boot-codox "0.10.2" :scope "test"]
    [codox-theme-rdash "0.1.1" :scope "test"]
    [adzerk/boot-cljs "1.7.228-2" :scope "test"]
    [crisptrutski/boot-cljs-test "0.3.4" :scope "test"]
    [com.cemerick/piggieback "0.2.2" :scope "test"]])

(set-env!
 :source-paths #{"src" "test" "compile" "perf"}
 :resource-paths #{"src"}
 :dependencies (vec (concat dependencies dev-dependencies)))

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[boot.core :as boot]
 '[boot.repl :as repl]
 '[boot.task.built-in :as task]
 '[cljs.closure :as closure]
 '[clojure.java.io :as io]
 '[clojure.string :as string]
 '[clojure.set :as set]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]]
 '[codox.boot :refer [codox]]
 '[parse-perf-test :as perf]
 'cljs.repl 'cljs.repl.node 'cljs.repl.rhino)

(defn documentation-namespaces []
  (->> "src"
       (clojure.java.io/file)
       (file-seq)
       (map str)
       (filter (partial re-matches #"^.*\.cljs$"))
       (map (comp #(string/replace % #"/" ".")
                  #(string/replace % #"_" "-")
                  #(string/replace % #"^src/" "")
                  #(string/replace % #"\.cljs$" "")))
       (remove (partial re-find #"^cljs-time.internal"))
       (map symbol)
       (set)))

(task-options!
 pom {:project +project+
      :version +version+
      :description +description+
      :license {"Eclipse Public License"
                "http://www.eclipse.org/legal/epl-v10.html"}
      :scm {:url "git@github.com:andrewmcveigh/cljs-time.git"}}
 codox {:version +version+
        :name (name +project+)
        :description +description+
        :source-paths #{"src"}
        :filter-namespaces (documentation-namespaces)
        :language :clojurescript
        :metadata {:doc/format :markdown}
        :themes [:rdash]
        :source-uri "https://github.com/andrewmcveigh/cljs-time/blob/v{version}/{filepath}#L{line}"}
 push {:repo "clojars"}
 target {:dir #{"target"}})

(deftask compare-perf []
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

(ns-unmap 'boot.user 'compile)
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

(deftask auto-test []
  (comp (watch)
        (speak)
        (test-cljs :js-env :node)))

(ns-unmap 'boot.user 'test)
(deftask test []
  (test-cljs :js-env :node :optimizations :simple))

(deftask test-optimized []
  (test-cljs :js-env :node :optimizations :advanced))

(deftask test-all []
  (comp (test-cljs :js-env :node :optimizations :simple)
        (test-cljs :js-env :node :optimizations :advanced)))

(boot/deftask build []
  (comp (pom) (jar) (target)))

(boot/deftask deploy []
  (comp (build) (test-all) (install) (push)))

(defn add-piggieware []
  (require 'cemerick.piggieback)
  (swap! repl/*default-middleware* conj 'cemerick.piggieback/wrap-cljs-repl)
  (swap! repl/*default-middleware* distinct))

(deftask node-repl []
  (add-piggieware)
  ((resolve 'cemerick.piggieback/cljs-repl) (cljs.repl.node/repl-env)))
