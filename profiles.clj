{:test
 {:cljx
  {:builds
   [{:source-paths ["src"] :output-path "target/classes" :rules :clj}
    {:source-paths ["test"] :output-path "target/test-classes" :rules :clj}
    {:source-paths ["src"] :output-path "target/classes" :rules :cljs}
    {:source-paths ["test"] :output-path "target/test-classes" :rules :cljs}]}

  :cljsbuild
  {:builds {:test {:source-paths ["target/classes" "target/test-classes"]
                   :incremental? true
                   :compiler {:output-to "target/unit-test.js"
                              :optimizations :whitespace
                              :pretty-print true}}}
   :test-commands
   {"phantom" ["phantomjs" :runner "target/unit-test.js"]}}}

 :prod
 {:cljx
  {:builds
   [{:source-paths ["src"] :output-path "target/classes" :rules :clj}
    {:source-paths ["test"] :output-path "target/test-classes" :rules :clj}
    {:source-paths ["src"] :output-path "target/classes" :rules :cljs}
    {:source-paths ["test"] :output-path "target/test-classes" :rules :cljs}]}

  :cljsbuild
  {:builds {:whitespace {:source-paths ["target/classes" "target/test-classes"]
                         :compiler {:output-to "target/cljs/whitespace.js"
                                    :optimizations :whitespace
                                    :pretty-print true}}
            :simple {:source-paths ["target/classes" "target/test-classes"]
                     :compiler {:output-to "target/cljs/simple.js"
                                :optimizations :simple
                                :pretty-print true}}
            :advanced {:source-paths ["target/classes" "target/test-classes"]
                       :compiler {:output-to "target/cljs/advanced.js"
                                  :optimizations :advanced
                                  :pretty-print true}}}
   :test-commands
   {"phantom-whitespace" ["phantomjs" :runner "target/cljs/whitespace.js"]
    "phantom-simple" ["phantomjs" :runner "target/cljs/simple.js"]
    "phantom-advanced" ["phantomjs" :runner "target/cljs/advanced.js"]}}}}
