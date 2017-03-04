
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
