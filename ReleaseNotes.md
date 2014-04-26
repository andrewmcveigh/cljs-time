## v0.1.4

 - Bugfixes: Timezone parsing, text length consistency
   * Parsing of timezones other than UTC works for different formats
  * Use "MMMM" & "EEEE" for full length text date elements, as is
    consistent with clj-time/joda

- Fix :date-time-no-ms parser
   * Correct regex to parse TZ ref #3
  * Implement timezone adjustment

