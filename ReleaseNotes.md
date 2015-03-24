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

