(defproject com.andrewmcveigh/cljs-time "0.1.5-SNAPSHOT"
  :description "A clj-time inspired date library for clojurescript."
  :url "https://github.com/andrewmcveigh/cljs-time"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :scm {:url "git@github.com:andrewmcveigh/cljs-time.git"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2202"]]

  :plugins [[com.cemerick/clojurescript.test "0.3.0"]
            [com.keminglabs/cljx "0.3.2"]
            [lein-cljsbuild "1.0.3"]
            [lein-marginalia "0.7.1"]
            [com.cemerick/austin "0.1.4"]]

  :source-paths ["src" "target/classes"]
  :test-paths ["test" "target/test-classes"]

  :profiles
  {:dev {:cljx
         {:builds
          [{:source-paths ["src"] :output-path "target/classes" :rules :clj}
           {:source-paths ["src"] :output-path "target/classes" :rules :cljs}]}

         :cljsbuild
         {:builds
          {:dev {:source-paths ["target/classes"]
                 :incremental? true
                 :compiler {:output-to "target/unit-test.js"
                            :optimizations :whitespace
                            :pretty-print true}}}
          :test-commands
          {"phantom" ["phantomjs" :runner "target/unit-test.js"]}}}}

  :aliases
  {"rebuild-tz" ["run" "-m" "cljs-time.tz.parser"]
   "test-all" ["with-profile" "prod" "do"
               "rebuild-tz"
               "clean," "cljx" "once," "test," "cljsbuild" "test"]
   "cleantest" ["with-profile" "test" "do"
                "clean," "cljx" "once," "test," "cljsbuild" "test"]}

  :repl-options {:timeout 240000})
