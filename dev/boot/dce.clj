
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
