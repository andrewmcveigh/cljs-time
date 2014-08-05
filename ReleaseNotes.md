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

