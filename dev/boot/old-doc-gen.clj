(require '[clojure.java.io :as io])

(defn mv-doc [vername]
  (fn [h]
    (fn [fs]
      (let [x (h fs)]
        (prn (clojure.java.shell/sh "cp" "-r" (str "target/tmp-doc/" vername) "/tmp/tmp-doc/"))
        x))))

(defn gen-all-docs []
  (doseq [dir (seq (.listFiles (io/file "tmp")))
          :let [vername (.getName dir)
                version (second (re-find #"(\d+\.\d+\.\d+(?:-\w+)?)" vername))]]
    (boot
     (comp
      (codox
       :version version
       :name (name +project+)
       :description +description+
       :source-paths #{(str dir)}
       :output-path (str "tmp-doc/" vername)
       :filter-namespaces (documentation-namespaces)
       :language :clojurescript
       ;; :metadata {:doc/format :markdown}
       ;; :themes [:rdash]
       :source-uri "https://github.com/andrewmcveigh/cljs-time/blob/v{version}/{filepath}#L{line}")
      (mv-doc vername)))))
