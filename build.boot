(def +project+ 'com.andrewmcveigh/cljs-time)
(def +version+ "0.5.0-alpha2")
(def +description+ "A clj-time inspired date library for clojurescript.")

(def dependencies
  '[[org.clojure/clojure "1.8.0" :scope "provided"]
    [org.clojure/clojurescript "1.9.89" :scope "provided"]])

(def dev-dependencies
  '[[org.clojure/tools.nrepl "0.2.12" :scope "test" :exclusions [org.clojure/clojure]]
    [boot-codox "0.10.2" :scope "test"]
    [codox-theme-rdash "0.1.1"]
    [adzerk/boot-cljs "1.7.228-2" :scope "test"]
    [crisptrutski/boot-cljs-test "0.3.0" :scope "test"]])

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

(deftask test []
  (test-cljs :js-env :node :optimizations :simple))

(deftask test-all []
  (comp (test-cljs :js-env :node :optimizations :simple)
        (test-cljs :js-env :node :optimizations :advanced)))

(boot/deftask build []
  (comp (pom) (jar) (target)))

(boot/deftask deploy []
  (comp (test-all) (build) (install) (push)))

(defn compile-dce-test []
  (let [output (.getCanonicalPath (io/file "target/dce-test.js"))]
    (closure/build "compile"
                   {:cache-analysis false
                    :main 'cljs-time.dce-compile-test
                    :output-to output
                    :optimizations :advanced})))

(deftask test-dce []
  (compile-dce-test)
  (let [f (io/file "target/dce-test.js")
        b (.length f)]
    (printf "%.2f KB" (double (/ b 1024)))))

(defn load-clj-time []
  (set-env! :dependencies #(conj % '[clj-time "0.12.0"]))
  (let [nses '[clj-time.coerce
               clj-time.core
               clj-time.format
               clj-time.instant
               clj-time.local
               clj-time.periodic
               clj-time.predicates]]
    (doseq [ns nses]
      (require ns))))

(require '[clojure.tools.reader :as r])
(import '[java.io PushbackReader])

(defn read [r]
  (try
    (r/read r false nil)
    (catch Exception _ :ex)))

(defn cljs-ns-publics [ns]
  (let [f (str (string/replace (munge (name ns)) #"\." "/") ".cljs")]
    (with-open [r (PushbackReader. (io/reader (io/resource f)))]
      (loop [form (read r)
             defs #{}]
        (if form
          (if (list? form)
            (let [[def? name? & forms] form]
              (cond (= 'defprotocol def?)
                    (recur (read r) (apply conj defs name?
                                           (map first (filter list? forms))))
                    (and (symbol? def?) (re-find #"^def" (name def?)))
                    (recur (read r) (conj defs name?))
                    :default (recur (read r) defs)))
            (recur (read r) defs))
          defs)))))

(defn api-diff [ns-part]
  (let [part (name ns-part)
        clj-ns (symbol (str "clj-time." part))
        cljs-ns (symbol (str "cljs-time." part))]
    (set/difference (set (keys (ns-publics clj-ns)))
                    (cljs-ns-publics cljs-ns))))


(comment
  
  ;; release
  (test-all)
  ;; change version
  ;; change version in readme
  
  ;; check clj-time api
  (load-clj-time)

  (api-diff 'core)
  #{to-time-zone
    in-secs ;; deprecated since 0.6.0
    time-zone-for-id ;; n/a tzs
    secs? ;; deprecated since 0.6.0
    do-at ;; in macros.clj
    local-time ;; only the time part of local-date-time, doesn't have
               ;; a corresponding goog.date obj
    utc ;; exists, but js tag reader error
    secs ;; deprecated since 0.6.0
    from-time-zone ;; n/a tzs
    available-ids ;; n/a tzs
    year-month ;; n/a unrepresented joda type
    in-msecs ;; deprecated since 0.6.0
    }

  (api-diff 'coerce) ;; diffs all sql/tzs
  #{from-sql-time
    from-sql-date
    to-sql-time
    to-timestamp
    in-time-zone
    to-sql-date}

  (api-diff 'format)
  #{with-chronology ;; n/a unrepresented joda type
    with-zone ;; n/a tz
    parse-local-time ;; n/a time part
    with-locale ;; no local in goog.date
    unparse-local-time ;; n/a time part
    with-pivot-year} ;; converts yy -> yyyy using pivot year

  (api-diff 'instant)
  #{}

  (api-diff 'local)
  #{}

  (api-diff 'periodic)
  #{}

  (api-diff 'predicates)
  #{}
  )
