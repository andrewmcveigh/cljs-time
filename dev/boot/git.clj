(ns boot.git
  (:refer-clojure :exclude [merge])
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.string :as string]))

(def last-branch (atom nil))

(defn branches [{:keys [root]} & opts]
  (let [{:keys [out] :as cmd}
        (apply shell/sh (concat ["git" "branch"] opts [:dir root]))]
    (->> (java.io.StringReader. out)
         (io/reader)
         (line-seq)
         (map #(if-let [[[_ current]] (re-seq #"^\* ([\w\-]+)" %)]
                 {:current current}
                 (string/trim %))))))

(defn current-branch [project]
  (->> (branches project)
       (keep :current)
       (first)))

(defn branch-exists? [project branch]
  (->> (branches project)
       (map #(or (:current %) %))
       (some #{branch})))

(defn remote-exists? [project branch]
  (->> (branches project "--all")
       (map #(or (:current %) %))
       (some #{(format "remotes/origin/%s" branch)})))

(defn fetch-all [{:keys [root]}]
  (let [{:keys [out exit] :as cmd} (shell/sh "git" "fetch" "--all" :dir root)]
    (= 0 exit)))

(defn remote-update [{:keys [root]}]
  (let [{:keys [out exit] :as cmd} (shell/sh "git" "remote" "update" :dir root)]
    (= 0 exit)))

(defn up-to-date? [{:keys [root]} branch]
  (let [{:keys [out exit] :as cmd}
        (shell/sh "git"
                  "rev-list"
                  (format "%s...origin/%s" branch branch)
                  "--count"
                  :dir root)]
    (= "0\n" out)))

(defn tracking? [project branch]
  (and (branch-exists? project branch)
       (remote-exists? project (format "origin/%s" branch))))

(defn latest-tag [{:keys [root]}]
  (let [{:keys [out] :as cmd} (shell/sh "git" "tag" :dir root)]
    (->> (java.io.StringReader. out)
         (io/reader)
         (line-seq)
         (map #(re-seq #"(\d+)\.(\d+)\.(\d+)(:?-(\w+))?$" %))
         (map first)
         (sort-by (fn [[ver maj min patch]] [(Integer. maj) (Integer. min) (Integer. patch)]))
         (map first)
         (last))))

(defn ensure-repo [{:keys [root release-tasks] :as project}]
  (try
    (assert (remote-update project) "Remote update failed")
    (assert (or (not (tracking? project "master"))
                (up-to-date? project "master"))
            "Branch `master` not up to date")
    (catch AssertionError e
      (println e)
      (System/exit 1))))

(defn checkout [{:keys [root] :as project} branch & opts]
  (when-let [current (current-branch project)]
    (printf "Branch: %s\n" (reset! last-branch current)))
  (apply shell/sh (concat ["git" "checkout"] opts [branch])))

(defn checkout-latest-tag [project]
  (checkout project (format "v%s" (latest-tag project))))

(defn checkout-last-branch [project]
  (checkout project @last-branch))

(defn push [project & args]
  (apply shell/sh "git" "push" args))

(defn pull [project]
  (shell/sh "git" "pull"))

(defn checkout-gh-pages-branch [{:keys [root] :as project}]
  (if (branch-exists? project "gh-pages")
    (do
      (checkout project "gh-pages")
      (pull project)
      {:existed? true})
    (do
      (checkout project "gh-pages" "--orphan")
      (let [files (remove #(.startsWith (.getName %) ".")
                          (.listFiles (io/file root)))]
        (doseq [file (filter #(.isDirectory %) files)]
          (try
            (shell/sh "rm" "-r" (.getCanonicalPath file))
            (catch Exception _))
          (try
            (shell/sh "git" "rm" "-r" "--cached" (.getCanonicalPath file))
            (catch Exception _)))
        (doseq [file (remove #(.isDirectory %) files)]
          (try
            (shell/sh "rm" (.getCanonicalPath file))
            (catch Exception _))
          (try
            (shell/sh "git" "rm" "--cached" (.getCanonicalPath file))
            (catch Exception _))))
      {:existed? false})))

(defn add [project & args]
  (apply shell/sh "git" "add" args))

(defn commit [project message & opts]
  (apply shell/sh (concat ["git" "commit"] opts ["-m" message])))

(defn merge-no-ff [{:keys [root]} branch]
  (shell/sh "git" "merge" "--no-ff" branch "--no-edit"))

(defn merge [{:keys [root]} branch]
  (shell/sh "git" "merge" branch "--no-edit"))

(defn tag [{:keys [root version]} & [prefix]]
  (let [tag (if prefix
              (str prefix version)
              version)]
    (shell/sh "git" "tag" tag "-m" (str "Release " version))))

(defn can-ff? [{:keys [root]}]
  (let [{:keys [out] :as cmd} (shell/sh "git" "status" :dir root)]
    (re-find #"and can be fast-forwarded" out)))

(defn ensure-ff-branch [project branch]
  (checkout project branch)
  (let [ff? (can-ff? project)]
    (checkout-last-branch project)
    ff?))

(defn ff-branch [project branch]
  {:pre [(ensure-ff-branch project branch)]}
  (checkout project branch)
  (pull project)
  (checkout-last-branch project))

(defn commit-log [{:keys [root]} last-version]
  (let [{:keys [out] :as cmd}
        (shell/sh "git" "--no-pager" "log" "--format=%H" (format "v%s.." last-version)
                  :dir root)
        {:keys [out] :as cmd}
        (shell/sh "git" "log" "--pretty=changelog" "--stdin" "--no-walk"
                  :dir root :in out)]
    (->> (java.io.StringReader. out)
         (io/reader)
         (line-seq)
         (remove #(or (empty? %)
                      (re-seq #"^- Bump to" %)
                      (re-seq #"^- Bump version to" %)
                      (re-seq #"^- Release " %)
                      (re-seq #"^- Version " %)
                      (re-seq #"^- Merge branch " %)
                      (re-seq #"^- Merged in " %))))))
