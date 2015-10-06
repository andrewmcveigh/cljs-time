(defproject com.andrewmcveigh/cljs-time "0.3.15-SNAPSHOT"
  :description "A clj-time inspired date library for clojurescript."
  :url "https://github.com/andrewmcveigh/cljs-time"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :scm {:url "git@github.com:andrewmcveigh/cljs-time.git"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122" :scope "provided"]]

  :plugins [[lein-cljsbuild "1.1.0"]]

  :jvm-opts ["-Djava.awt.headless=true"]
  :clojurescript? true
  :cljsbuild
  {:builds
   {:dev {:source-paths ["src"]
          :compiler {:output-to "target/main.js"
                     :optimizations :whitespace
                     :pretty-print true}}
    :test {:source-paths ["src" "test"]
           :incremental? true
           :notify-command ["node" "target/unit-test.js"]
           :compiler {:output-to "target/unit-test.js"
                      :optimizations :simple
                      :pretty-print true}}}}
  :profiles
  {:prod
   {:hooks [leiningen.cljsbuild]
    :cljsbuild
    {:builds {:simple {:source-paths ["src" "test"]
                       :compiler {:output-to "target/cljs/simple.js"
                                  :optimizations :simple
                                  :pretty-print true}}
              :advanced {:source-paths ["src" "test"]
                         :compiler {:output-to "target/cljs/advanced.js"
                                    :optimizations :advanced
                                    :pretty-print true}}}
     :test-commands
     {"simple" ["node" "target/cljs/simple.js"]
      "advanced" ["node" "target/cljs/advanced.js"]}}}}

  :aliases {"test-all" ["with-profile" "prod" "test"]}

  :release-tasks [["vcs" "assert-committed"]
                  ["clean"]
                  ["test-all"]
                  ["auto-release" "checkout" "master"]
                  ["auto-release" "merge-no-ff" "develop"]
                  ["change" "version" "leiningen.release/bump-version" "release"]
                  ["auto-release" "update-release-notes"]
                  ["auto-release" "update-readme-version"]
                  ["vcs" "commit"]
                  ["vcs" "tag" "v"]
                  ["deploy" "clojars"]
                  ["vcs" "push"]
                  ["auto-release" "checkout" "develop"]
                  ["auto-release" "merge" "master"]
                  ["change" "version" "leiningen.release/bump-version"]
                  ["vcs" "commit"]
                  ["vcs" "push"]
                  ;; ["auto-release" "checkout-latest-tag"]
                  ;; ["marg"]
                  ;; ["auto-release" "update-marginalia-gh-pages"]
                  ])
