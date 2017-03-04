(ns boot.version
  (:refer-clojure :exclude [print read])
  (:require [clojure.string :as string]))

(defn read [raw-version]
  (let [[version qualifier] (string/split raw-version #"-") 
        [major minor patch] (string/split version #"\.")
        snapshot (some->> qualifier (re-find #"SNAPSHOT"))
        numerics (mapv #(Integer. %) [major minor patch])]
    (cond-> (zipmap [:major :minor :patch] numerics)
      snapshot
      (assoc :snapshot true)
      (and qualifier (not snapshot))
      (assoc :qualifier qualifier))))

(defn print [{:keys [major minor patch qualifier snapshot]}]
  (if (or qualifier snapshot)
    (format "%s.%s.%s-%s" major minor patch (if snapshot "SNAPSHOT" qualifier))
    (format "%s.%s.%s" major minor patch)))

(defn bump [version & [major-minor-patch]]
  (let [{:keys [major minor patch qualifier snapshot]} version]
    (if snapshot
      (dissoc version :snapshot)
      (case (or major-minor-patch :patch)
        :patch (-> version (update :patch inc) (assoc :snapshot true))
        :minor (-> version
                   (update :minor inc)
                   (assoc :patch 0 :snapshot true))
        :major (-> version
                   (update :major inc)
                   (assoc :minor 0
                          :patch 0
                          :snapshot true))))))
