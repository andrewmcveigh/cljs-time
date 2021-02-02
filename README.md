# cljs-time [![Build Status](https://travis-ci.org/andrewmcveigh/cljs-time.svg?branch=master)](https://travis-ci.org/andrewmcveigh/cljs-time)

A date and time library for ClojureScript, imitating the API of the
[clj-time](https://github.com/clj-time/clj-time) library.

Cljs-time is an attempt at replicating the functionality and API of
clj-time.  **This is not a drop-in clojurescript replacement for
clj-time**, however the goal is that over time enough functionality of
the clj-time API can be replicated to make this library "good enough"
for other projects.

This library is currently leaning on the
[Google Closure goog.date](https://google.github.io/closure-library/api/goog.date.html)
library for basic date/time functionality. **The date objects in this
library are mutable**, however any operations that **alter** a date
object return a copy, leaving the referenced date object alone. In the
future, immutable date objects will be preferred.

## Artifacts
Update your **deps.edn** to use:
``` clj
{:deps
 {logseq/cljs-time
  {:git/url "https://github.com/logseq/cljs-time" :sha "xxxx"}}}
```

## Bugs and Enhancements

Please open issues against the
[cljs-time repo on Github](https://github.com/andrewmcveigh/cljs-time/issues).

**Note: version 0.5.* follows the API of clj-time 0.11.0.**

## API

Most of the clj-time API has been implemented. Some of the parts that
don't make sense in clojurescript, such as Java interop, and
java.sql.* have been left out. Timezone functionality in javascript is
minimal, and therefore so is cljs-time's.

The majority of the tests from clj-time have been ported, and are
passing.

[API documentation](http://andrewmcveigh.github.io/cljs-time/latest/index.html) is
available.

## Usage

**Note:** Equality in goog.date.* (and also with plain javascript
dates) is not the same as in Joda/clj-time. Two date objects
representing the same instant in time in goog.date.* are not equal.

If you need to test for equality use either `cljs-time.core/=`, or
optionally you can require the `cljs-time.extend` namespace which will
extend the goog.date.* datatypes, so that clojure.core/= works as
expected.

If you want your goog.date.* serializable with `pr-str`, require
`cljs-time.instant` namespace.

### cljs-time.core

The main namespace for date-time operations in the `cljs-time` library
is `cljs-time.core`.

``` clj
=> (use 'cljs-time.core)
```

Create a DateTime instance with date-time, specifying the year, month,
day, hour, minute, second, and millisecond:

``` clj
=> (date-time 1986 10 14 4 3 27 456)
#<DateTime 1986-10-14T04:03:27.456Z>
```

Less-significant fields can be omitted:

``` clj
=> (date-time 1986 10 14)
#<DateTime 1986-10-14T00:00:00.000Z>
```

Get the current time with `(now)` and the start of the Unix epoch with `(epoch)`.

Once you have a date-time, use accessors like `hour` and `second` to access the corresponding fields:

``` clj
=> (hour (date-time 1986 10 14 22))
22
```

The date-time constructor always returns times in the UTC time zone.

If you only want a date with no time component, consider using the `local-date` and `today` functions.
These return `LocalDate` instances that do not have time components (and thus don't suffer from timezone-related shifting).

``` clj
=> (local-date 2013 3 20)
#<LocalDate 2013-03-20>
```

The functions `after?` and `before?` determine the relative position of two
DateTime instances:

``` clj
=> (after? (date-time 1986 10) (date-time 1986 9))
true
```

Often you will want to find a date some amount of time from a given date. For
example, to find the time 1 month and 3 weeks from a given date-time:

``` clj
=> (plus (date-time 1986 10 14) (months 1) (weeks 3))
#<DateTime 1986-12-05T00:00:00.000Z>
```

An `Interval` is used to represent the span of time between two `DateTime`
instances. Construct one using `interval`, then query them using `within?`,
`overlaps?`, and `abuts?`

``` clj
=> (within? (interval (date-time 1986) (date-time 1990))
            (date-time 1987))
true
```

The `in-seconds` and `in-minutes` functions can be used to describe intervals in the corresponding temporal units:

``` clj
=> (in-minutes (interval (date-time 1986 10 2) (date-time 1986 10 14)))
17280
```

### cljs-time.format

If you need to parse or print date-times, use `cljs-time.format`:

``` clj
=> (use 'cljs-time.format)
```

Printing and parsing are controlled by formatters. You can either use one of the built in ISO8601 formatters or define your own, e.g.:

``` clj
(def built-in-formatter (formatters :basic-date-time))
(def custom-formatter (formatter "yyyyMMdd"))
```

To see a list of available built-in formatters and an example of a date-time printed in their format:

``` clj
=> (show-formatters)
```

Remember that `mm` is minutes, `MM` is months, `ss` is seconds and `SSS` is milliseconds.

Once you have a formatter, parsing and printing are straight-forward:

``` clj
=> (parse custom-formatter "20100311")
#<20100311T000000>

=> (unparse custom-formatter (date-time 2010 10 3))
"20101003"
```

`cljs-time.core/today-at` returns a moment in time at the given hour, minute and second
on the current date:

``` clojure
=> (today-at 12 00)
#<20130329T120000>
=> (today-at 12 00 05)
#<20130329T120005>
```


### cljs-time.coerce

The namespace `cljs-time.coerce` contains utility functions for coercing Google Closure `DateTime` instances to and from various other types:

``` clj
=> (use 'cljs-time.coerce)
```

For example, to convert a goog.date `DateTime` to and from a js `Number`:

``` clj
=> (to-long (date-time 1998 4 25))
893462400000

=> (from-long 893462400000)
#<19980425T000000>
```

And by the magic of protocols you can pass in an isoformat string and get the unix epoch milliseconds:

``` clj
=> (to-long "2013-08-01")
1375315200000
```

<!--### cljs-time.local-->

<!--**Note: this namespace has not been implemented yet!**-->

<!--The namespace `cljs-time.local` contains functions for working with local time without having to shift to/from utc,-->
<!--the preferred time zone of cljs-time.core.-->

<!--Get the current local time with-->

<!--``` clj-->
<!--=> (local-now)-->
<!--```-->

<!--Get a local date-time instance retaining the time fields with-->

<!--``` clj-->
<!--=> (to-local-date-time obj)-->
<!--```-->

<!--The following all return 1986-10-14 04:03:27.246 with the local time zone.-->

<!--``` clj-->
<!--(to-local-date-time (cljs-time.core/date-time 1986 10 14 4 3 27 246))-->
<!--(to-local-date-time "1986-10-14T04:03:27.246")-->
<!--(to-local-date-time "1986-10-14T04:03:27.246Z")-->
<!--```-->

<!--The dynamic var \*local-formatters\* contains a map of local formatters for parsing and printing. It is initialized-->
<!--with all the formatters in cljs-time.format localized.-->

<!--to-local-date-time for strings uses \*local-formatters\* to parse.-->

<!--Format an obj using a formatter in \*local-formatters\* corresponding to the format-key passed in with-->

<!--``` clj-->
<!--=> (format-local-time (local-now) :basic-date-time)-->
<!--```-->


<!--### cljs-time.periodic-->

<!--**Note: this namespace has not been implemented yet!**-->

<!--`cljs-time.periodic/periodic-seq` returns an infinite sequence of instants-->
<!--separated by a time period starting with the given point in time:-->

<!--``` clojure-->
<!--(use 'cljs-time.periodic)-->
<!--(use 'clj.time.core)-->

<!--;; returns 10 instants starting with current time separated-->
<!--;; by 12 hours-->
<!--(take 10 (periodic-seq (now) (hours 12)))-->
<!--```-->


## Development

Running the tests:

    $ shadow-cljs compile test

### Getting a REPL

    $ shadow-cljs watch app

## Documentation

The complete [API documentation](http://andrewmcveigh.github.io/cljs-time/latest/index.html)
is also available.

## License

Copyright © 2013-2016 Andrew Mcveigh

Distributed under the Eclipse Public License, the same as Clojure.
