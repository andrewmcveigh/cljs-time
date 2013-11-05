(ns cemerick.cljs.test
  (:require-macros [cemerick.cljs.test :refer (with-test-out)])
  (:require [clojure.string :as str]))

;;; GLOBALS USED BY THE REPORTING FUNCTIONS

; bound to an atom of a map in test-ns
(def ^:dynamic *report-counters* nil)

; used to initialize *report-counters*
(def ^:dynamic *initial-report-counters* {:test 0, :pass 0, :fail 0, :error 0})

; bound to hierarchy of "vars" (actually, symbols naming top-levels) being tested
(def ^:dynamic *testing-vars* (list))

; bound to hierarchy of "testing" strings
(def ^:dynamic *testing-contexts* (list))

; *print-fn* for emitting test output
(def ^:dynamic *test-print-fn* nil)

;;; "Namespaces are one honking great idea -- let's do more of those!"
; could skip the atoms in this environment....
; atom mapping namespace symbols to sets of top-level test fns
(def registered-tests (atom {}))
; atom mapping namespace symbols to top-level namespace-hook fns
(def registered-test-hooks (atom {}))
; atom mapping namespace symbols to collections of fixture HOFs
(def registered-fixtures (atom {}))

(defn register-test!
  [ns name]
  (swap! registered-tests update-in [ns] (fnil conj #{}) name))

(defn register-test-ns-hook!
  [ns name]
  (swap! registered-test-hooks assoc ns name))

;;; UTILITIES FOR REPORTING FUNCTIONS

(defn testing-vars-str
  "Returns a string representation of the current test.  Renders names
  in *testing-vars* as a list, then the source file and line of
  current assertion."
  {:added "1.1"}
  [m]
  (let [{:keys [file line]} m]
    (str
     (pr-str (reverse *testing-vars*))
     " (" file ":" line ")")))

(defn testing-contexts-str
  "Returns a string representation of the current test context. Joins
  strings in *testing-contexts* with spaces."
  {:added "1.1"}
  []
  (apply str (interpose " " (reverse *testing-contexts*))))

(defn inc-report-counter
  "Increments the named counter in *report-counters*, a ref to a map.
  Does nothing if *report-counters* is nil."
  {:added "1.1"}
  [name]
  (when *report-counters*
    (swap! *report-counters* update-in [name] (fnil inc 0))))

;;; TEST RESULT REPORTING

(defmulti
  ^{:doc "Generic reporting function, may be overridden to plug in
   different report formats (e.g., TAP, JUnit).  Assertions such as
   'is' call 'report' to indicate results.  The argument given to
   'report' will be a map with a :type key.  See the documentation at
   the top of test_is.clj for more information on the types of
   arguments for 'report'."
     :dynamic true
     :added "1.1"}
  report :type)

(defn- file-and-line 
  [error]
  {:file (.-fileName error) :line (.-lineNumber error)})

(defn do-report
  "Add file and line information to a test result and call report.
   If you are writing a custom assert-expr method, call this function
   to pass test results to report."
  {:added "1.2"}
  [m]
  (report
   (case
    (:type m)
    :fail (merge (file-and-line (js/Error)) m)
    :error (merge (file-and-line (:actual m)) m) 
    m)))

(defmethod report :default [m]
  (with-test-out (prn m)))

(defmethod report :pass [m]
  (with-test-out (inc-report-counter :pass)))

(defmethod report :fail [m]
  (with-test-out
    (inc-report-counter :fail)
    (println "\nFAIL in" (testing-vars-str m))
    (when (seq *testing-contexts*) (println (testing-contexts-str)))
    (when-let [message (:message m)] (println message))
    (println "expected:" (pr-str (:expected m)))
    (println "  actual:" (pr-str (:actual m)))))

(defmethod report :error [m]
  (with-test-out
   (inc-report-counter :error)
   (println "\nERROR in" (testing-vars-str m))
   (when (seq *testing-contexts*) (println (testing-contexts-str)))
   (when-let [message (:message m)] (println message))
   (println "expected:" (pr-str (:expected m)))
   (print "  actual: ")
   (let [actual (:actual m)]
     (if (instance? js/Error actual)
       (println (.-stack actual))
       (prn actual)))))

(defmethod report :summary [m]
  (with-test-out
   (println "\nRan" (:test m) "tests containing"
            (+ (:pass m) (:fail m) (:error m)) "assertions.")
   (println (:fail m) "failures," (:error m) "errors.")))

(defmethod report :begin-test-ns [m]
  (with-test-out
   (println "\nTesting" (:ns m))))

;; Ignore these message types:
(defmethod report :end-test-ns [m])
(defmethod report :begin-test-var [m])
(defmethod report :end-test-var [m])


;;; REGISTERING FIXTURES

(defn register-fixtures!
  "Wrap test runs in a fixture function to perform setup and
  teardown. Using a fixture-type of :each wraps every test
  individually, while :once wraps the whole run in a single function."
  [ns-sym fixture-type & fixture-fns]
  (swap! registered-fixtures update-in [ns-sym fixture-type] (constantly fixture-fns)))

(defn- default-fixture
  "The default, empty, fixture function.  Just calls its argument."
  {:added "1.1"}
  [f]
  (f))

(defn compose-fixtures
  "Composes two fixture functions, creating a new fixture function
  that combines their behavior."
  {:added "1.1"}
  [f1 f2]
  (fn [g] (f1 (fn [] (f2 g)))))

(defn join-fixtures
  "Composes a collection of fixtures, in order.  Always returns a valid
  fixture function, even if the collection is empty."
  {:added "1.1"}
  [fixtures]
  (reduce compose-fixtures default-fixture fixtures))

;;; RUNNING TESTS: LOW-LEVEL FUNCTIONS
;; TODO since there's no vars, rename these helpers to *-fn?
(defn test-var
  "If v has a function in its :test metadata, calls that function,
  with *testing-vars* bound to (conj *testing-vars* v)."
  {:dynamic true, :added "1.1"}
  [v]
  (assert (fn? v) "test-var must be passed the function to be tested (not a symbol naming it)")
  (when-let [t (:test (meta v))]
    (binding [*testing-vars* (conj *testing-vars* (or (:name (meta v)) v))]
      (do-report {:type :begin-test-var, :var v})
      (inc-report-counter :test)
      (try (t)
           (catch js/Error e
             (do-report {:type :error, :message "Uncaught exception, not in assertion."
                      :expected nil, :actual e})))
      (do-report {:type :end-test-var, :var v}))))

(defn test-all-vars
  "Calls test-var on every var interned in the namespace, with fixtures."
  {:added "1.1"}
  [ns-sym]
  (let [once-fixture-fn (-> @registered-fixtures ns-sym :once join-fixtures)
        each-fixture-fn (-> @registered-fixtures ns-sym :each join-fixtures)]
    (once-fixture-fn
     (fn []
       (doseq [v (get @registered-tests ns-sym)]
         (when (:test (meta v))
           (each-fixture-fn (fn [] (test-var v)))))))))

(defn test-ns
  "If the namespace defines a function named test-ns-hook, calls that.
  Otherwise, calls test-all-vars on the namespace.  'ns' is a
  namespace object or a symbol.

  Internally binds *report-counters* to an atom initialized to
  *inital-report-counters*.  Returns the final, dereferenced state of
  *report-counters*."
  {:added "1.1"}
  [ns-sym]
  (binding [*report-counters* (atom *initial-report-counters*)]
    (do-report {:type :begin-test-ns, :ns ns-sym})
    ;; If the namespace has a test-ns-hook function, call that:
    (if-let [test-hook (get @registered-test-hooks ns-sym)]
      (test-hook)
      ;; Otherwise, just test every var in the namespace.
      (test-all-vars ns-sym))

    (do-report {:type :end-test-ns, :ns ns-sym})
    @*report-counters*))


;;; RUNNING TESTS: HIGH-LEVEL FUNCTIONS

(defn ^:export run-tests*
  "Runs all tests in the given namespaces; prints results.
  Defaults to current namespace if none given.  Returns a map
  summarizing test results."
  {:added "1.1"}
  [& namespaces]
  (let [summary (assoc (apply merge-with + (map test-ns namespaces))
                  :type :summary)]
    (do-report summary)
    summary))

(defn ^:export run-all-tests
  "Runs all tests in all namespaces; prints results.
  Optional argument is a regular expression; only namespaces with
  names matching the regular expression (with re-matches) will be
  tested."
  {:added "1.1"}
  ([] (apply run-tests* (keys @registered-tests)))
  ([re] (apply run-tests* (filter #(re-matches re (name %)) (keys @registered-tests)))))

(defn ^:export successful?
  "Returns true if the given test summary indicates all tests
  were successful, false otherwise."
  {:added "1.1"}
  [summary]
  (and (zero? (:fail summary 0))
       (zero? (:error summary 0))))

(defn ^:export set-print-fn! [f]
  (set! cljs.core.*print-fn* f))
