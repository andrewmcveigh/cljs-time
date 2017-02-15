(def +project+ 'com.andrewmcveigh/cljs-time)
(def +version+ "0.5.0-SNAPSHOT")
(def +description+ "A clj-time inspired date library for clojurescript.")

(set-env!
 :source-paths #{"src"}
 :resource-paths #{"src"}
 :dependencies '[[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.89" :scope "provided"]
                 [adzerk/boot-cljs "1.7.228-2" :scope "test"]
                 [crisptrutski/boot-cljs-test "0.3.0" :scope "test"]
                 [boot-codox "0.10.2" :scope "test"]
                 [codox-theme-rdash "0.1.1" :scope "test"]])

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[clojure.java.io :as io]
 '[clojure.string :as string]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]]
 '[codox.boot :refer [codox]])

(defn documentation-namespaces []
  (->> (io/file "src")
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

(defn pom-opts []
  {:project +project+
   :version +version+
   :description +description+
   :license {"Eclipse Public License"
             "http://www.eclipse.org/legal/epl-v10.html"}
   :scm {:url "git@github.com:andrewmcveigh/cljs-time.git"}})

(defn codox-opts []
  {:version +version+
   :name (name +project+)
   :description +description+
   :source-paths #{"src"}
   :filter-namespaces (documentation-namespaces)
   :language :clojurescript
   :metadata {:doc/format :markdown}
   :themes [:rdash]
   :source-uri "https://github.com/andrewmcveigh/cljs-time/blob/v{version}/{filepath}#L{line}"})

(task-options!
 pom (pom-opts)
 codox (codox-opts)
 push {:repo "clojars"}
 target {:dir #{"target"}})

(deftask auto-test []
  (comp (watch)
        (speak)
        (test-cljs :js-env :node)))

(ns-unmap 'boot.user 'test)
(deftask test []
  (set-env! :source-paths #(conj % "test"))
  (test-cljs :js-env :node :optimizations :simple))

(deftask test-all []
  (set-env! :source-paths #(conj % "test"))
  (comp (test-cljs :js-env :node :optimizations :simple)
        (test-cljs :js-env :node :optimizations :advanced)))

(deftask build []
  (comp (pom) (jar) (target)))

(deftask deploy []
  (comp (test-all) (build) (install) (push)))

(defn cider? []
  (get (ns-publics 'boot.user) 'cider))
