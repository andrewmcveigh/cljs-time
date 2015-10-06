## v0.3.14

- Fix to-date-test
- Pre-mark & post-replace quoted text. Fix #44
- Merge pull request #48 from bjeanes/patch-1
  Fix Google Closure goog.date link
- Fix Google Closure goog.date link
  The authoritative docs linked from
  https://developers.google.com/closure/library/ now point to the gh-pages
  site.
- Manually check test report, do node/exit 1 on fail. Fix #46
- Change coerce/from-long to use static function
  UtcDateTime.fromTimestamp is a constructor for a UtcDateTime that accepts
  the number of milliseconds since Epoch.
- Use built-in fn for testing value betwen two bounds
- Add failing test for quoted text, ref #44

## v0.3.13

- Extend types with IComparable interface, close #42

## v0.3.12

- Use cljs's old string/replace until closure branch merged

## v0.3.11

- Correct ->period calculation for months > 12 or years > 1, fix #38
- Fix minus months when months > 12, close #39
- Add codina project info

## v0.3.10

- Remove marginalia from auto-release, as broken
- Add #'cljs-time.format/unparse-duration, close #36

## v0.3.9

- Ensure to-date inconsistency, fix #32

## v0.3.8

- Support millisecont provider function, fix #31
  Add a ^:dynamic `cljs-time.core/*ms-fn*` which returns a function that 
  provides milliseconds for the now/today/local-now/etc., functions.
  Fix test failing due to timezone offset, now uses correct
  `from-default-time-zone` function. Ref #34
- Add 'boot' build file

## v0.3.7

- Correctly calculate (properly) month-add, tested. fix #34
- Update cljs-build, use cljs.test

## v0.3.6

- Correctly calculate month-add when > 12, fix #33
- Add test for long-interval hanging bug, ref #33

## v0.3.5

- Add 'A' meridiem parser to parser-order, test. Fix #30
- Merge pull request #29 from nblumoe/patch-1
  Update README.md
- Update README.md

## v0.3.4

- Remove dev plugins from project.clj

## v0.3.3

- Catch ex-info thrown error

## v0.3.2

- Remove Java/Joda refs from docs, fix #20
- Merge pull request #25 from astine/master
  Added missing numbers to date formatter
- Added missing numbers to date formatter
  Covered 21, 22, 23, and 31 for the ordinal date formatter

## v0.3.1

- Add note to README.md/docs about equality
- Move IEquiv extension into extend ns
  Ref #19, ref #22
- Implement IEquiv for goog.date, fix #19

## v0.3.0

- Update periodic, fix plus months bug
- Correct and test with-default-year impl
- Add extra core-tests
- Implement period in-xxxx, test
- Add v0.9.0 changes to core
- Use data-oriented formatter impl, add with-default-year
- Implement Interval and Period with defrecord
- Use built-in UTC->local, add from-default-time-zone
- Bugfix: coercion/DST correction
- Update cljs, bump version
- Use js/Date setUTC* for to-default-time-zone

## v0.2.4

- Correct to-default-time-zone/today implementation
- Move to-default-time-zone to core ns

## v0.2.3

 - Add DDD parser, YYYY, fix #6

## v0.2.2

 - Fix #'interval contract to match Joda Interval

- Import clj-time periodic-seq function

## v0.2.1

 - Alias #'cljs-time.core/= from internal ns. Fix #12

## v0.2.0

 - Bugsfixes:

  * Remove missing functions from readme, ref #9
  * Remove timezone fn refs from docs. Ref #9
  * Fix overlaps? inconsistency
  * Add invalid date test case ref #5

 - API additions:

  * add weekend / weekday checks
  * Add local(-date) support & namespace
  * Core namespace follows clj-time 0.8.0
  * Add new, and missing predicates from core, ref #10
  * Add meridiem parsers
  * Add meridiem formatters
  * Add missing hour parsers

 - Breaking:

  * Latest CLJS/closure now require jdk7

## v0.1.6

 - Don't rely on browser .indexOf. Fix #8

## 0.1.5

 - Separate parse from goog.date and check for valid date

- Add meridiem support to both parser and formatter

## v0.1.4

 - Bugfixes: Timezone parsing, text length consistency
   * Parsing of timezones other than UTC works for different formats
  * Use "MMMM" & "EEEE" for full length text date elements, as is
    consistent with clj-time/joda

- Fix :date-time-no-ms parser
   * Correct regex to parse TZ ref #3
  * Implement timezone adjustment

