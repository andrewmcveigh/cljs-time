(defproject com.andrewmcveigh/cljs-time "0.1.4-SNAPSHOT"
  :description "A clj-time inspired date library for clojurescript."
  :url "https://github.com/andrewmcveigh/cljs-time"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :scm {:url "git@github.com:andrewmcveigh/cljs-time.git"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2202"]]

  :plugins [[com.cemerick/clojurescript.test "0.3.0"]
            [lein-cljsbuild "1.0.3"]
            [lein-marginalia "0.7.1"]
            [com.cemerick/austin "0.1.4"]]

  :hooks [leiningen.cljsbuild]
  :clojurescript? true
  :cljsbuild
  {:builds
   {:dev {:source-paths ["src"]
          :compiler {:output-to "target/main.js"
                     :optimizations :whitespace
                     :pretty-print true}}
    :test {:source-paths ["src" "test"]
           :incremental? true
           :notify-command
           ["phantomjs" "resources/runner.js" "target/unit-test.js"]
           :compiler {:output-to "target/unit-test.js"
                      :optimizations :whitespace
                      :pretty-print true}}}}
  :profiles
  {:prod
   {:cljsbuild
    {:builds {:whitespace {:source-paths ["src" "test"]
                           :compiler {:output-to "target/cljs/whitespace.js"
                                      :optimizations :whitespace
                                      :pretty-print true}}
              :simple {:source-paths ["src" "test"]
                       :compiler {:output-to "target/cljs/simple.js"
                                  :optimizations :simple
                                  :pretty-print true}}
              :advanced {:source-paths ["src" "test"]
                         :compiler {:output-to "target/cljs/advanced.js"
                                    :optimizations :advanced
                                    :pretty-print true}}}
     :test-commands
     {"phantom-whitespace"
      ["phantomjs" "resources/runner.js" "target/cljs/whitespace.js"]
      "phantom-simple"
      ["phantomjs" "resources/runner.js" "target/cljs/simple.js"]
      "phantom-advanced"
      ["phantomjs" "resources/runner.js" "target/cljs/advanced.js"]}}}}
  :aliases {"test-all" ["with-profile" "prod" "test"]})
