
(defn load-clj-time []
  (set-env! :dependencies #(conj % '[clj-time "0.12.0"]))
  (let [nses '[clj-time.coerce
               clj-time.core
               clj-time.format
               clj-time.instant
               clj-time.local
               clj-time.periodic
               clj-time.predicates]]
    (doseq [ns nses]
      (require ns))))

(require '[clojure.tools.reader :as r])
(import '[java.io PushbackReader])

(defn read [r]
  (try
    (r/read r false nil)
    (catch Exception _ :ex)))

(defn cljs-ns-publics [ns]
  (let [f (str (string/replace (munge (name ns)) #"\." "/") ".cljs")]
    (with-open [r (PushbackReader. (io/reader (io/resource f)))]
      (loop [form (read r)
             defs #{}]
        (if form
          (if (list? form)
            (let [[def? name? & forms] form]
              (cond (= 'defprotocol def?)
                    (recur (read r) (apply conj defs name?
                                           (map first (filter list? forms))))
                    (and (symbol? def?) (re-find #"^def" (name def?)))
                    (recur (read r) (conj defs name?))
                    :default (recur (read r) defs)))
            (recur (read r) defs))
          defs)))))

(defn api-diff [ns-part]
  (let [part (name ns-part)
        clj-ns (symbol (str "clj-time." part))
        cljs-ns (symbol (str "cljs-time." part))]
    (set/difference (set (keys (ns-publics clj-ns)))
                    (cljs-ns-publics cljs-ns))))


(comment
  
  ;; release
  (test-all)
  ;; change version
  ;; change version in readme
  
  ;; check clj-time api
  (load-clj-time)

  (api-diff 'core)
  #{to-time-zone
    in-secs ;; deprecated since 0.6.0
    time-zone-for-id ;; n/a tzs
    secs? ;; deprecated since 0.6.0
    do-at ;; in macros.clj
    local-time ;; only the time part of local-date-time, doesn't have
               ;; a corresponding goog.date obj
    utc ;; exists, but js tag reader error
    secs ;; deprecated since 0.6.0
    from-time-zone ;; n/a tzs
    available-ids ;; n/a tzs
    year-month ;; n/a unrepresented joda type
    in-msecs ;; deprecated since 0.6.0
    }

  (api-diff 'coerce) ;; diffs all sql/tzs
  #{from-sql-time
    from-sql-date
    to-sql-time
    to-timestamp
    in-time-zone
    to-sql-date}

  (api-diff 'format)
  #{with-chronology ;; n/a unrepresented joda type
    with-zone ;; n/a tz
    parse-local-time ;; n/a time part
    with-locale ;; no local in goog.date
    unparse-local-time ;; n/a time part
    with-pivot-year} ;; converts yy -> yyyy using pivot year

  (api-diff 'instant)
  #{}

  (api-diff 'local)
  #{}

  (api-diff 'periodic)
  #{}

  (api-diff 'predicates)
  #{}
  )
