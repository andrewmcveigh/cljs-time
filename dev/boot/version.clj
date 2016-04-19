(ns boot.version)

(defn read-version []
  (let [[version qualifier] (-> (slurp "VERSION") (string/split #"-")) 
        [major minor patch] (string/split version #"\.")
        snapshot? (re-find #"SNAPSHOT" qualifier)
        numerics (mapv #(Integer. %) [major minor patch])]
    (cond-> (zipmap [:major :minor :patch] numerics)
      snapshot?
      (assoc :snapshot? true)
      (not snapshot?)
      (assoc :qualifier qualifier))))

(defn print-version [{:keys [major minor patch qualifier snapshot?]}]
  (if (or qualifier snapshot?)
    (format "%s.%s.%s-%s" major minor patch (if snapshot? "SNAPSHOT" qualifier))
    (format "%s.%s.%s" major minor patch)))

(defn bump-release [major-minor-patch]
  (let [{:keys [major minor patch qualifier snapshot?]} version]
    (case (or major-minor-patch :patch)
      :patch (-> version (update :patch inc) (dissoc :snapshot?))
      :minor (-> version
                 (update :minor inc)
                 (assoc :patch 0)
                 (dissoc :snapshot?))
      :major (-> version
                 (update :major inc)
                 (assoc :minor 0)
                 (assoc :patch 0)
                 (dissoc :snapshot?)))))
