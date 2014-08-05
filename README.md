# cljs-time [![Build Status](https://travis-ci.org/andrewmcveigh/cljs-time.png?branch=master)](https://travis-ci.org/andrewmcveigh/cljs-time)

A date and time library for ClojureScript, immitating the
[clj-time](https://github.com/clj-time/clj-time) library.

This is my crude and naïve attempt at replicating some of the functionality in
clj-time. This is in no way a drop-in clojurescript replacement for clj-time,
however the goal is that over time I can hopefully replicate enough of the
clj-time API and functionality to make this library "good enough" for other
projects.

This library is currently leaning on the [Google Closure goog.date](http://docs.closure-library.googlecode.com/git/namespace_goog_date.html)
library for basic date/time functionality. **The date objects in this library
are mutable**, however any operations that **alter** a date object return a
copy, leaving the referenced date object alone. In the future, immutable date
objects will be preferred.

## Artifacts

`cljs-time` artifacts are [released to Clojars](https://clojars.org/com.andrewmcveigh/cljs-time).

If you are using Maven, add the following repository definition to your `pom.xml`:

``` xml
<repository>
  <id>clojars.org</id>
  <url>http://clojars.org/repo</url>
</repository>
```

### The Most Recent Release

With Leiningen:

``` clj
[com.andrewmcveigh/cljs-time "0.1.6"]
```

With Maven:

``` xml
<dependency>
  <groupId>com.andrewmcveigh</groupId>
  <artifactId>cljs-time</artifactId>
  <version>0.1.6</version>
</dependency>
```

## Bugs and Enhancements

Please open issues against the
[cljs-time repo on Github](https://github.com/andrewmcveigh/cljs-time/issues).

**Note: version 0.1.6 follows the API of clj-time 0.6.0.**

## API

So far, most of the clj-time API has been implemented, apart from the bits that
deal with local time(s). Some of the parts that don't make sense in
clojurescript, such as Java interop, have been left out.

The majority of the tests from clj-time (that don't deal with local-time) have
been copied over, and are passing.

[API documentation](http://andrewmcveigh.github.io/cljs-time/uberdoc.html) is
available.

## Usage

### cljs-time.core

The main namespace for date-time operations in the `cljs-time` library is `cljs-time.core`.

``` clj
=> (use 'cljs-time.core)
```

Create a DateTime instance with date-time, specifying the year, month, day, hour, minute, second, and millisecond:

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

The date-time constructor always returns times in the UTC time zone. If you want a time with the specified fields in a different time zone, use `from-time-zone`:

``` clj
=> (from-time-zone (date-time 1986 10 22) (time-zone-for-offset -2))
#<DateTime 1986-10-22T00:00:00.000-02:00>
```

If on the other hand you want a given absolute instant in time in a different time zone, use `to-time-zone`:

``` clj
=> (to-time-zone (date-time 1986 10 22) (time-zone-for-offset -2))
#<DateTime 1986-10-21T22:00:00.000-02:00>
```

In addition to `time-zone-for-offset`, you can use the `time-zone-for-id` and `default-time-zone` functions and the `utc` Var to construct or get `DateTimeZone` instances.

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

Printing and printing are controlled by formatters. You can either use one of the built in ISO8601 formatters or define your own, e.g.:

``` clj
(def built-in-formatter (formatters :basic-date-time))
(def custom-formatter (formatter "yyyyMMdd"))
```

To see a list of available built-in formatters and an example of a date-time printed in their format:

``` clj
=> (show-formatters)
```

Remember that `mm` is minutes, `MM` is months, `ss` is seconds and `SS` is milliseconds.

Once you have a formatter, parsing and printing are strait-forward:

``` clj
=> (parse custom-formatter "20100311")
#<20100311T000000>

=> (unparse custom-formatter (date-time 2010 10 3))
"20101003"
```

<!--To parse dates in multiple formats and format dates in just one format, you can do this:-->

<!--``` clj-->
<!--=> (def multi-parser (formatter (default-time-zone) "YYYY-MM-dd" "YYYY/MM/dd"))-->

<!--=> (unparse multi-parser (parse multi-parser "2012-02-01"))-->
<!--"2012-02-01"-->

<!--=> (unparse multi-parser (parse multi-parser "2012/02/01"))-->
<!--"2012-02-01"-->
<!--```-->

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

For example, to convert a Joda `DateTime` to and from a Java `long`:

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

    $ lein test-all

(assumes Leiningen 2.x)

## Documentation

The complete [API documentation](http://andrewmcveigh.github.io/cljs-time/uberdoc.html)
is also available (marginalia generated).

## License

Copyright © 2013 Andrew Mcveigh

Distributed under the Eclipse Public License, the same as Clojure.
