(defproject com.andrewmcveigh/cljs-time "0.1.0-SNAPSHOT"
  :description "A clj-time inspired date library for clojurescript."
  :url "https://github.com/andrewmcveigh/cljs-time"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :scm {:url "git@github.com:andrewmcveigh/cljs-time.git"}
  :dependencies [[prismatic/cljs-test "0.0.5"]] 
  :plugins [[lein-cljsbuild "0.3.0"]]
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
           :notify-command ["reload-chrome.sh"]
           :compiler {:output-to "target/unit-test.js"
                      :optimizations :whitespace
                      :pretty-print true}}}
   :test-commands
   {"unit" ["phantomjs" "target/unit-test.js" "resources/test.html"]}}
  :deploy-repositories
  [["snapshots" {:url "https://clojars.org/repo/" :creds :gpg}]
   ["releases" {:url "https://clojars.org/repo/" :creds :gpg}]])
