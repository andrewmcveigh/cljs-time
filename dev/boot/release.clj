(ns boot.release
  (:require
   [boot.core :as b]
   [boot.git :as git]
   [boot.task.built-in :refer [pom]]
   [boot.version :as v]
   [codox.boot :refer [codox]]))

(let [ver     (v/read boot.user/+version+)
      rel-ver (v/bump ver)
      rel-str (v/print rel-ver)]
  (alter-var-root #'boot.user/+version+ (constantly rel-str))
  (b/task-options! pom (boot.user/pom-opts)
                   codox (boot.user/codox-opts)))

(alter-var-root #'boot.user/+version+ (constantly "0.5.0-SNAPSHOT"))

(defn dependency-pattern []
  [boot.user/+project+ boot.user/+version+])

(defn changes-since-last-release []
  (let [project {:root "."}]
    (->> project
         (git/latest-tag)
         (git/commit-log project))))

(defn update-release-notes [{:keys [root version] :as project}]
  (println "Updating release notes with commit log")
  (binding [eval/*dir* root]
    (let [file (io/file root "ReleaseNotes.md")
          tmp (java.io.File/createTempFile "release-notes" ".tmp")]
      (println (format "## v%s\n\n" version))
      (spit tmp (format "## v%s\n\n" version))
      (doseq [line (commit-log project (latest-tag project))]
        (println line)
        (spit tmp (str line \newline) :append true))
      (spit tmp "\n" :append true)
      (if (.exists file)
        (with-open [r (io/reader file)]
          (doseq [line (line-seq r)]
            (spit tmp (str line \newline) :append true)))
        (eval/sh "git" "add" "ReleaseNotes.md"))
      (io/copy tmp file))))

(changes-since-last-release)


;; bump version to release
;; version in readme
;; generate changelog
;; git tag
;; generate docs in gh-pages branch
;; link latest docs
;; bump version to next snapshot
