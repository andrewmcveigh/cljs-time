goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs_time.core');
goog.require('goog.string');
goog.require('goog.date');
goog.require('clojure.string');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.date');
goog.require('goog.string');
goog.require('cljs_time.core');
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs_time.format.format = (function() { 
var format__delegate = function (fmt,args){var args__$1 = cljs.core.map.call(null,(function (x){if((function (){var or__3943__auto__ = (x instanceof cljs.core.Keyword);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x instanceof cljs.core.Symbol);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__6342){
var fmt = cljs.core.first(arglist__6342);
var args = cljs.core.rest(arglist__6342);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
cljs_time.format.months = cljs.core.PersistentVector.fromArray(["January","February","March","April","May","June","July","August","September","October","November","December"], true);
cljs_time.format.days = cljs.core.PersistentVector.fromArray(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], true);
/**
* **Note: not all formatters have been implemented yet.**
* 
* The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
* time zone names cannot be parsed and a few more symbols are supported. All
* ASCII letters are reserved as pattern letters, which are defined as follows:
* 
* Symbol  Meaning                      Presentation  Examples
* ------  -------                      ------------  -------
* G       era                          text          AD
* C       century of era (>=0)         number        20
* Y       year of era (>=0)            year          1996
* 
* x       weekyear                     year          1996
* w       week of weekyear             number        27
* e       day of week                  number        2
* E       day of week                  text          Tuesday; Tue
* 
* y       year                         year          1996
* D       day of year                  number        189
* M       month of year                month         July; Jul; 07
* d       day of month                 number        10
* 
* a       halfday of day               text          PM
* K       hour of halfday (0~11)       number        0
* h       clockhour of halfday (1~12)  number        12
* 
* H       hour of day (0~23)           number        0
* k       clockhour of day (1~24)      number        24
* m       minute of hour               number        30
* s       second of minute             number        55
* S       fraction of second           number        978
* 
* z       time zone                    text          Pacific Standard Time; PST
* Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
* 
* '       escape for text              delimiter
* ''      single quote                 literal       '
* 
* The count of pattern letters determine the format.
* 
* **Text:** If the number of pattern letters is 4 or more, the full form is used;
* otherwise a short or abbreviated form is used if available.
* 
* **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
* amount.
* 
* **Year:** Numeric presentation for year and weekyear fields are handled
* specially. For example, if the count of 'y' is 2, the year will be displayed
* as the zero-based year of the century, which is two digits.
* 
* **Month:** 3 or over, use text, otherwise use number.
* 
* **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
* colon, 'ZZZ' or more outputs the zone id.
* 
* **Zone names:** Time zone names ('z') cannot be parsed.
* 
* Any characters in the pattern that are not in the ranges of ['a'..'z'] and
* ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
* '.', ' ', '#' and '?' will appear in the resulting time text even they are
* not embraced within single quotes.
*/
cljs_time.format.date_formatters = (function (){var d = (function (p1__6343_SHARP_){return p1__6343_SHARP_.getDate();
});var M = ((function (d){
return (function (p1__6344_SHARP_){return (p1__6344_SHARP_.getMonth() + 1);
});})(d))
;var y = ((function (d,M){
return (function (p1__6345_SHARP_){return p1__6345_SHARP_.getYear();
});})(d,M))
;var h = ((function (d,M,y){
return (function (p1__6346_SHARP_){return p1__6346_SHARP_.getHours();
});})(d,M,y))
;var m = ((function (d,M,y,h){
return (function (p1__6347_SHARP_){return p1__6347_SHARP_.getMinutes();
});})(d,M,y,h))
;var s = ((function (d,M,y,h,m){
return (function (p1__6348_SHARP_){return p1__6348_SHARP_.getSeconds();
});})(d,M,y,h,m))
;var S = ((function (d,M,y,h,m,s){
return (function (p1__6349_SHARP_){return p1__6349_SHARP_.getMilliseconds();
});})(d,M,y,h,m,s))
;var Z = ((function (d,M,y,h,m,s,S){
return (function (p1__6350_SHARP_){return p1__6350_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,m,s,S))
;return cljs.core.PersistentHashMap.fromArrays(["dd","HH","hh","MM","mm","yyyy","ss","yy","ZZ","d","EEE","h","dow","M","m","MMM","S","s","SSS","dth","Z"],[(function (p1__6351_SHARP_){return cljs_time.format.format.call(null,"%02d",d.call(null,p1__6351_SHARP_));
}),(function (p1__6359_SHARP_){return cljs_time.format.format.call(null,"%02d",h.call(null,p1__6359_SHARP_));
}),(function (p1__6358_SHARP_){return cljs_time.format.format.call(null,"%02d",h.call(null,p1__6358_SHARP_));
}),(function (p1__6355_SHARP_){return cljs_time.format.format.call(null,"%02d",M.call(null,p1__6355_SHARP_));
}),(function (p1__6360_SHARP_){return cljs_time.format.format.call(null,"%02d",m.call(null,p1__6360_SHARP_));
}),y,(function (p1__6361_SHARP_){return cljs_time.format.format.call(null,"%02d",s.call(null,p1__6361_SHARP_));
}),(function (p1__6356_SHARP_){return cljs.core.mod.call(null,y.call(null,p1__6356_SHARP_),100);
}),Z,d,(function (p1__6354_SHARP_){return cljs_time.format.days.call(null,p1__6354_SHARP_.getDay());
}),h,(function (p1__6353_SHARP_){return cljs_time.format.days.call(null,p1__6353_SHARP_.getDay());
}),M,m,(function (p1__6357_SHARP_){return cljs_time.format.months.call(null,(M.call(null,p1__6357_SHARP_) - 1));
}),S,s,(function (p1__6362_SHARP_){return cljs_time.format.format.call(null,"%03d",S.call(null,p1__6362_SHARP_));
}),(function (p1__6352_SHARP_){var d__$1 = d.call(null,p1__6352_SHARP_);return [cljs.core.str(d__$1),cljs.core.str((function (){var G__6363 = d__$1;if(cljs.core._EQ_.call(null,3,G__6363))
{return "rd";
} else
{if(cljs.core._EQ_.call(null,2,G__6363))
{return "nd";
} else
{if(cljs.core._EQ_.call(null,1,G__6363))
{return "st";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "th";
} else
{return null;
}
}
}
}
})())].join('');
}),Z]);
})();
cljs_time.format.date_parsers = (function (){var y = (function (p1__6364_SHARP_,p2__6365_SHARP_){return p1__6364_SHARP_.setYear(parseInt(p2__6365_SHARP_,10));
});var d = ((function (y){
return (function (p1__6366_SHARP_,p2__6367_SHARP_){return p1__6366_SHARP_.setDate(parseInt(p2__6367_SHARP_,10));
});})(y))
;var M = ((function (y,d){
return (function (p1__6368_SHARP_,p2__6369_SHARP_){return p1__6368_SHARP_.setMonth((parseInt(p2__6369_SHARP_,10) - 1));
});})(y,d))
;var h = ((function (y,d,M){
return (function (p1__6370_SHARP_,p2__6371_SHARP_){return p1__6370_SHARP_.setHours(parseInt(p2__6371_SHARP_,10));
});})(y,d,M))
;var m = ((function (y,d,M,h){
return (function (p1__6372_SHARP_,p2__6373_SHARP_){return p1__6372_SHARP_.setMinutes(parseInt(p2__6373_SHARP_,10));
});})(y,d,M,h))
;var s = ((function (y,d,M,h,m){
return (function (p1__6374_SHARP_,p2__6375_SHARP_){return p1__6374_SHARP_.setSeconds(parseInt(p2__6375_SHARP_,10));
});})(y,d,M,h,m))
;var S = ((function (y,d,M,h,m,s){
return (function (p1__6376_SHARP_,p2__6377_SHARP_){return p1__6376_SHARP_.setMilliseconds(parseInt(p2__6377_SHARP_,10));
});})(y,d,M,h,m,s))
;return cljs.core.PersistentHashMap.fromArrays(["dd","HH","hh","MM","mm","yyyy","ss","yy","d","E","EEE","dow","M","m","MMM","S","s","SSS","dth","y","Z"],[cljs.core.PersistentVector.fromArray(["(\\d{2})",d], true),cljs.core.PersistentVector.fromArray(["(\\d{2})",h], true),cljs.core.PersistentVector.fromArray(["(\\d{2})",h], true),cljs.core.PersistentVector.fromArray(["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], true),cljs.core.PersistentVector.fromArray(["(\\d{2})",m], true),cljs.core.PersistentVector.fromArray(["(\\d{4})",y], true),cljs.core.PersistentVector.fromArray(["(\\d{2})",s], true),cljs.core.PersistentVector.fromArray(["(\\d{2,4})",y], true),cljs.core.PersistentVector.fromArray(["(\\d{1,2})",d], true),cljs.core.PersistentVector.fromArray([[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__6380_SHARP_){return clojure.string.join.call(null,cljs.core.take.call(null,3,p1__6380_SHARP_));
}),cljs_time.format.days))),cljs.core.str(")")].join(''),cljs.core.constantly.call(null,null)], true),cljs.core.PersistentVector.fromArray([[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.days)),cljs.core.str(")")].join(''),cljs.core.constantly.call(null,null)], true),cljs.core.PersistentVector.fromArray([[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.days)),cljs.core.str(")")].join(''),cljs.core.constantly.call(null,null)], true),cljs.core.PersistentVector.fromArray(["(\\d{1,2})",M], true),cljs.core.PersistentVector.fromArray(["(\\d{1,2})",m], true),cljs.core.PersistentVector.fromArray([[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.months)),cljs.core.str(")")].join(''),(function (p1__6378_SHARP_,p2__6379_SHARP_){return M.call(null,p1__6378_SHARP_,[cljs.core.str((cljs.core.into_array.call(null,cljs_time.format.months).indexOf(p2__6379_SHARP_) + 1))].join(''));
})], true),cljs.core.PersistentVector.fromArray(["(\\d{1,2})",S], true),cljs.core.PersistentVector.fromArray(["(\\d{1,2})",s], true),cljs.core.PersistentVector.fromArray(["(\\d{3})",S], true),cljs.core.PersistentVector.fromArray(["(\\d{1,2})(?:st|nd|rd|th)",d], true),cljs.core.PersistentVector.fromArray(["(\\d{1,4})",y], true),cljs.core.PersistentVector.fromArray(["((?:\\+|\\-\\d{2}:\\d{2})|Z+)",cljs.core.constantly.call(null,null)], true)]);
})();
cljs_time.format.parser_sort_order_pred = (function parser_sort_order_pred(parser){return cljs.core.into_array.call(null,cljs.core.PersistentVector.fromArray(["yyyy","yy","y","d","dd","dth","M","MM","MMM","dow","h","m","s","S","hh","mm","ss","SSS","Z"], true)).indexOf(parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern.call(null,[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,")|(",cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.count,cljs.core.keys.call(null,cljs_time.format.date_formatters))))),cljs.core.str(")")].join(''));
cljs_time.format.date_parse_pattern = (function date_parse_pattern(formatter){return cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__6381_SHARP_){return cljs.core.first.call(null,cljs_time.format.date_parsers.call(null,p1__6381_SHARP_));
})));
});
cljs_time.format.formatter = (function formatter(fmts){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"parser","parser",4313460625),(function (p1__6382_SHARP_){return cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.call(null,2,cljs.core.interleave.call(null,cljs.core.nfirst.call(null,cljs.core.re_seq.call(null,cljs_time.format.date_parse_pattern.call(null,fmts),p1__6382_SHARP_)),cljs.core.map.call(null,cljs.core.first,cljs.core.re_seq.call(null,cljs_time.format.date_format_pattern,fmts)))));
}),new cljs.core.Keyword(null,"formatter","formatter",2825495612),(function (date){return cljs.core.PersistentVector.fromArray([clojure.string.replace.call(null,fmts,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__6383_SHARP_){return cljs_time.format.date_formatters.call(null,p1__6383_SHARP_).call(null,date);
})], true);
})], true);
});
cljs_time.format.not_implemented = (function not_implemented(sym){return (function (){throw cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"not-implemented","not-implemented",2585045114),new cljs.core.Keyword(null,"message","message",1968829305),cljs_time.format.format.call(null,"%s not implemented yet",cljs.core.name.call(null,sym))], true));
});
});
/**
* Map of ISO 8601 and a single RFC 822 formatters that can be used
* for parsing and, in most cases, printing.
*/
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"basic-week-date-time","basic-week-date-time",2079026660),new cljs.core.Keyword(null,"t-time-no-ms","t-time-no-ms",3543854237),new cljs.core.Keyword(null,"basic-week-date-time-no-ms","basic-week-date-time-no-ms",2293868937),new cljs.core.Keyword(null,"basic-date-time","basic-date-time",4159957535),new cljs.core.Keyword(null,"date","date",1016980256),new cljs.core.Keyword(null,"date-hour-minute-second-ms","date-hour-minute-second-ms",1519934594),new cljs.core.Keyword(null,"time-element-parser","time-element-parser",2478157442),new cljs.core.Keyword(null,"weekyear-week","weekyear-week",3724533122),new cljs.core.Keyword(null,"weekyear-week-day","weekyear-week-day",2020756945),new cljs.core.Keyword(null,"basic-date-time-no-ms","basic-date-time-no-ms",2491731332),new cljs.core.Keyword(null,"basic-time","basic-time",4138729598),new cljs.core.Keyword(null,"date-time","date-time",718869758),new cljs.core.Keyword(null,"hour-minute-second-fraction","hour-minute-second-fraction",2770095869),new cljs.core.Keyword(null,"basic-ordinal-date-time-no-ms","basic-ordinal-date-time-no-ms",2805241128),new cljs.core.Keyword(null,"ordinal-date","ordinal-date",2248222972),new cljs.core.Keyword(null,"basic-week-date","basic-week-date",2303005306),new cljs.core.Keyword(null,"date-element-parser","date-element-parser",3374683009),new cljs.core.Keyword(null,"weekyear","weekyear",4687528355),new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",569382179),new cljs.core.Keyword(null,"basic-time-no-ms","basic-time-no-ms",4308099235),new cljs.core.Keyword(null,"date-opt-time","date-opt-time",848185432),new cljs.core.Keyword(null,"year","year",1017609135),new cljs.core.Keyword(null,"week-date","week-date",3156884825),new cljs.core.Keyword(null,"ordinal-date-time","ordinal-date-time",2099452066),new cljs.core.Keyword(null,"hour","hour",1017112918),new cljs.core.Keyword(null,"week-date-time-no-ms","week-date-time-no-ms",3717549386),new cljs.core.Keyword(null,"time-no-ms","time-no-ms",713593252),new cljs.core.Keyword(null,"year-month-day","year-month-day",4084846769),new cljs.core.Keyword(null,"date-hour-minute-second-fraction","date-hour-minute-second-fraction",3014285662),new cljs.core.Keyword(null,"basic-date","basic-date",4138245471),new cljs.core.Keyword(null,"basic-t-time-no-ms","basic-t-time-no-ms",4710397916),new cljs.core.Keyword(null,"date-time-parser","date-time-parser",4459979506),new cljs.core.Keyword(null,"rfc822","rfc822",4374831323),new cljs.core.Keyword(null,"local-time","local-time",2271441761),new cljs.core.Keyword(null,"ordinal-date-time-no-ms","ordinal-date-time-no-ms",2867449287),new cljs.core.Keyword(null,"hour-minute-second-ms","hour-minute-second-ms",1872672097),new cljs.core.Keyword(null,"t-time","t-time",4380004344),new cljs.core.Keyword(null,"basic-ordinal-date-time","basic-ordinal-date-time",2641050819),new cljs.core.Keyword(null,"hour-minute","hour-minute",3073402255),new cljs.core.Keyword(null,"local-date","local-date",2270957634),new cljs.core.Keyword(null,"date-parser","date-parser",831867536),new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",2016657782),new cljs.core.Keyword(null,"basic-t-time","basic-t-time",1733736055),new cljs.core.Keyword(null,"time-parser","time-parser",4635555473),new cljs.core.Keyword(null,"time","time",1017464383),new cljs.core.Keyword(null,"date-hour-minute-second","date-hour-minute-second",2863045141),new cljs.core.Keyword(null,"date-hour","date-hour",718518293),new cljs.core.Keyword(null,"basic-ordinal-date","basic-ordinal-date",3414766651),new cljs.core.Keyword(null,"mysql","mysql",1118286868),new cljs.core.Keyword(null,"year-month","year-month",1878773858),new cljs.core.Keyword(null,"date-hour-minute","date-hour-minute",2897826288),new cljs.core.Keyword(null,"hour-minute-second","hour-minute-second",2004813206),new cljs.core.Keyword(null,"week-date-time","week-date-time",2017015397)],[cljs_time.format.formatter.call(null,"xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"timeElementParser","timeElementParser",14100007,null)),cljs_time.format.formatter.call(null,"xxxx-'W'ww"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e"),cljs_time.format.formatter.call(null,"yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.call(null,"HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyy-DDD"),cljs_time.format.formatter.call(null,"xxxx'W'wwe"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateElementParser","dateElementParser",1588215526,null)),cljs_time.format.formatter.call(null,"xxxx"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"HHmmssZ"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",-728321325,null)),cljs_time.format.formatter.call(null,"yyyy"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e"),cljs_time.format.formatter.call(null,"yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"HH"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyyMMdd"),cljs_time.format.formatter.call(null,"'T'HHmmssZ"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",321483091,null)),cljs_time.format.formatter.call(null,"EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localTimeParser","localTimeParser",223975632,null)),cljs_time.format.formatter.call(null,"yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"HH:mm"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localDateParser","localDateParser",-37271311,null)),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateParser","dateParser",-1211918554,null)),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",-411104226,null)),cljs_time.format.formatter.call(null,"'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,new cljs.core.Symbol(null,"timeParser","timeParser",-950671611,null)),cljs_time.format.formatter.call(null,"HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH"),cljs_time.format.formatter.call(null,"yyyyDDD"),cljs_time.format.formatter.call(null,"yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.call(null,"yyyy-MM"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.call(null,"HH:mm:ss"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ")]);
cljs_time.format.parsers = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"time-element-parser","time-element-parser",2478157442),null,new cljs.core.Keyword(null,"date-element-parser","date-element-parser",3374683009),null,new cljs.core.Keyword(null,"date-opt-time","date-opt-time",848185432),null,new cljs.core.Keyword(null,"date-time-parser","date-time-parser",4459979506),null,new cljs.core.Keyword(null,"local-time","local-time",2271441761),null,new cljs.core.Keyword(null,"local-date","local-date",2270957634),null,new cljs.core.Keyword(null,"date-parser","date-parser",831867536),null,new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",2016657782),null,new cljs.core.Keyword(null,"time-parser","time-parser",4635555473),null], true);
cljs_time.format.printers = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs_time.format.formatters)),cljs_time.format.parsers);
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function() {
var parse = null;
var parse__1 = (function (s){return cljs.core.first.call(null,(function (){var iter__3599__auto__ = (function iter__6403(s__6404){return (new cljs.core.LazySeq(null,(function (){var s__6404__$1 = s__6404;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6404__$1);if(temp__4092__auto__)
{var s__6404__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6404__$2))
{var c__3597__auto__ = cljs.core.chunk_first.call(null,s__6404__$2);var size__3598__auto__ = cljs.core.count.call(null,c__3597__auto__);var b__6406 = cljs.core.chunk_buffer.call(null,size__3598__auto__);if((function (){var i__6405 = 0;while(true){
if((i__6405 < size__3598__auto__))
{var f = cljs.core._nth.call(null,c__3597__auto__,i__6405);var d = (function (){try{return parse.call(null,f,s);
}catch (e6409){if((e6409 instanceof Error))
{var _ = e6409;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6409;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append.call(null,b__6406,d);
{
var G__6411 = (i__6405 + 1);
i__6405 = G__6411;
continue;
}
} else
{{
var G__6412 = (i__6405 + 1);
i__6405 = G__6412;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6406),iter__6403.call(null,cljs.core.chunk_rest.call(null,s__6404__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6406),null);
}
} else
{var f = cljs.core.first.call(null,s__6404__$2);var d = (function (){try{return parse.call(null,f,s);
}catch (e6410){if((e6410 instanceof Error))
{var _ = e6410;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6410;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons.call(null,d,iter__6403.call(null,cljs.core.rest.call(null,s__6404__$2)));
} else
{{
var G__6413 = cljs.core.rest.call(null,s__6404__$2);
s__6404__$1 = G__6413;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3599__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});
var parse__2 = (function (p__6384,s){var map__6398 = p__6384;var map__6398__$1 = ((cljs.core.seq_QMARK_.call(null,map__6398))?cljs.core.apply.call(null,cljs.core.hash_map,map__6398):map__6398);var parser = cljs.core.get.call(null,map__6398__$1,new cljs.core.Keyword(null,"parser","parser",4313460625));if(cljs.core.seq.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-1640417768,null),new cljs.core.Symbol(null,"s","s",-1640531412,null))))].join('')));
}
var min_parts = cljs.core.count.call(null,clojure.string.split.call(null,s,/(?:[^\w]+|'[^']+'|[TW])/));var parse_seq = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p__6399){var vec__6400 = p__6399;var a = cljs.core.nth.call(null,vec__6400,0,null);var b = cljs.core.nth.call(null,vec__6400,1,null);return cljs.core.PersistentVector.fromArray([a,cljs.core.second.call(null,cljs_time.format.date_parsers.call(null,b))], true);
}),parser.call(null,s)));if((cljs.core.count.call(null,parse_seq) >= min_parts))
{return cljs.core.reduce.call(null,(function (date,p__6401){var vec__6402 = p__6401;var part = cljs.core.nth.call(null,vec__6402,0,null);var do_parse = cljs.core.nth.call(null,vec__6402,1,null);do_parse.call(null,date,part);
return date;
}),(new goog.date.UtcDateTime(0,0,0,0,0,0,0)),parse_seq);
} else
{return null;
}
});
parse = function(p__6384,s){
switch(arguments.length){
case 1:
return parse__1.call(this,p__6384);
case 2:
return parse__2.call(this,p__6384,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse.cljs$core$IFn$_invoke$arity$1 = parse__1;
parse.cljs$core$IFn$_invoke$arity$2 = parse__2;
return parse;
})()
;
/**
* Returns a string representing the given DateTime instance in UTC and in the
* form determined by the given formatter.
*/
cljs_time.format.unparse = (function unparse(p__6414,date){var map__6416 = p__6414;var map__6416__$1 = ((cljs.core.seq_QMARK_.call(null,map__6416))?cljs.core.apply.call(null,cljs.core.hash_map,map__6416):map__6416);var formatter = cljs.core.get.call(null,map__6416__$1,new cljs.core.Keyword(null,"formatter","formatter",2825495612));if(!((date == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"date","date",-1637455513,null)))))].join('')));
}
if((date instanceof goog.date.DateTime))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol("date","DateTime","date/DateTime",412769137,null),new cljs.core.Symbol(null,"date","date",-1637455513,null))))].join('')));
}
return cljs.core.apply.call(null,clojure.string.replace,formatter.call(null,date));
});
cljs_time.format.Mappable = {};
cljs_time.format.instant__GT_map = (function instant__GT_map(instant){if((function (){var and__3941__auto__ = instant;if(and__3941__auto__)
{return instant.cljs_time$format$Mappable$instant__GT_map$arity$1;
} else
{return and__3941__auto__;
}
})())
{return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else
{var x__3517__auto__ = (((instant == null))?null:instant);return (function (){var or__3943__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.format.instant__GT_map["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mappable.instant->map",instant);
}
}
})().call(null,instant);
}
});
cljs_time.format.to_map = (function to_map(years,months,days,hours,minutes,seconds,millis){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"years","years",1128756040),years,new cljs.core.Keyword(null,"months","months",4240384357),months,new cljs.core.Keyword(null,"days","days",1016980425),days,new cljs.core.Keyword(null,"hours","hours",1113373313),hours,new cljs.core.Keyword(null,"minutes","minutes",2078806097),minutes,new cljs.core.Keyword(null,"seconds","seconds",2984001009),seconds,new cljs.core.Keyword(null,"millis","millis",4234775992),millis], true);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){return cljs_time.format.to_map.call(null,dt.getYear(),(dt.getMonth() + 1),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds());
});
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var G__6417 = new cljs.core.Keyword(null,"type","type",1017479852).call(null,cljs.core.meta.call(null,m));if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs-time.core","interval","cljs-time.core/interval",888324179),G__6417))
{return cljs_time.core.__GT_period.call(null,m);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs-time.core","period","cljs-time.core/period",2457815895),G__6417))
{return m;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1017479852).call(null,cljs.core.meta.call(null,m)))].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var G__6418 = new cljs.core.Keyword(null,"type","type",1017479852).call(null,cljs.core.meta.call(null,m));if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs-time.core","interval","cljs-time.core/interval",888324179),G__6418))
{return cljs_time.core.__GT_period.call(null,m);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs-time.core","period","cljs-time.core/period",2457815895),G__6418))
{return m;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1017479852).call(null,cljs.core.meta.call(null,m)))].join('')));
} else
{return null;
}
}
}
});
