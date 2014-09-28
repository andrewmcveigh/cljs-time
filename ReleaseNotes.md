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

