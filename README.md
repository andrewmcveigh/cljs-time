# cljs-time

This is my crude and naïve attempt at replicating some of the functionality in
clj-time. This is in no way a drop-in clojurescript replacement for clj-time,
however the goal is that over time I can hopefully replicate enough of the
clj-time API and functionality to make this library "good enough" for other
projects.

## Usage

Put `[com.andrewmcveigh/cljs-time "0.1.0-SNAPSHOT"]` into your `:dependencies`.

## API

So far, the API is very limited, and is likely to change. Only basic
implementations of `cljs-time.format/parse` and `cljs-time.format/unparse` have
been realised, however for me it is already useful.

## Examples

```clojure
=> (require '[cljs-time.format :as f])
nil

=> (require '[cljs-time.coerce :refer [from-date to-date])
nil

=> (to-date
     (f/parse "28th August 2013 14:26" "dth MMM yyyy hh:mm"))
#inst "2013-08-28T14:26:00.000-00:00"

=> (f/unparse (from-date #inst "2013-08-29T00:00:00.000-00:00")
              "dow dth MMM yyyy")
"Thursday 29th August 2013"
```

## License

Copyright © 2013 Andrew Mcveigh

Distributed under the Eclipse Public License, the same as Clojure.
