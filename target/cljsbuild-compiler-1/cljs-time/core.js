goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('goog.i18n.TimeZone');
goog.require('goog.date.UtcDateTime');
/**
* @param {...*} var_args
*/
cljs_time.core._EQ_ = (function() { 
var _EQ___delegate = function (args){if(cljs.core.every_QMARK_.call(null,(function (p1__6562_SHARP_){return (p1__6562_SHARP_ instanceof goog.date.UtcDateTime);
}),args))
{return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__6563_SHARP_){return p1__6563_SHARP_.getTime();
}),args));
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.apply.call(null,cljs.core._EQ_,args);
} else
{return null;
}
}
};
var _EQ_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _EQ___delegate.call(this,args);};
_EQ_.cljs$lang$maxFixedArity = 0;
_EQ_.cljs$lang$applyTo = (function (arglist__6564){
var args = cljs.core.seq(arglist__6564);
return _EQ___delegate(args);
});
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___delegate;
return _EQ_;
})()
;
cljs_time.core.DateTimeProtocol = {};
cljs_time.core.year = (function year(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.year[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.year["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.month = (function month(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.month[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.month["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.day = (function day(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.day[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.day["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.day_of_week = (function day_of_week(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.day_of_week["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.hour = (function hour(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.hour[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.hour["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.minute = (function minute(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.minute[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.minute["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.sec = (function sec(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.sec[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.sec["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.second = (function second(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.second[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.second["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.milli = (function milli(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.milli[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.milli["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.after_QMARK_ = (function after_QMARK_(this$,that){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.after_QMARK_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});
cljs_time.core.before_QMARK_ = (function before_QMARK_(this$,that){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.before_QMARK_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});
cljs_time.core.plus_ = (function plus_(this$,period){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.plus_[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.plus_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});
cljs_time.core.minus_ = (function minus_(this$,period){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else
{var x__3517__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (cljs_time.core.minus_[goog.typeOf(x__3517__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs_time.core.minus_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});
cljs_time.core.utc = goog.i18n.TimeZone.createTimeZone(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),"UTC",new cljs.core.Keyword(null,"std_offset","std_offset",554432929),0,new cljs.core.Keyword(null,"names","names",1118489274),cljs.core.PersistentVector.fromArray(["UTC"], true),new cljs.core.Keyword(null,"transitions","transitions",3399561520),cljs.core.PersistentVector.EMPTY], true)));
cljs_time.core.leap_year_QMARK_ = (function leap_year_QMARK_(y){if((cljs.core.mod.call(null,y,400) === 0))
{return true;
} else
{if((cljs.core.mod.call(null,y,100) === 0))
{return false;
} else
{if((cljs.core.mod.call(null,y,4) === 0))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
});
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){var date__$1 = date.clone();set_fn.call(null,date__$1,op.call(null,f.call(null,date__$1),value));
return date__$1;
});return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"millis","millis",4234775992),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.milli,(function (p1__6565_SHARP_,p2__6566_SHARP_){return p1__6565_SHARP_.setMilliseconds(p2__6566_SHARP_);
})),new cljs.core.Keyword(null,"seconds","seconds",2984001009),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.second,(function (p1__6567_SHARP_,p2__6568_SHARP_){return p1__6567_SHARP_.setSeconds(p2__6568_SHARP_);
})),new cljs.core.Keyword(null,"minutes","minutes",2078806097),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.minute,(function (p1__6569_SHARP_,p2__6570_SHARP_){return p1__6569_SHARP_.setMinutes(p2__6570_SHARP_);
})),new cljs.core.Keyword(null,"hours","hours",1113373313),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.hour,(function (p1__6571_SHARP_,p2__6572_SHARP_){return p1__6571_SHARP_.setHours(p2__6572_SHARP_);
})),new cljs.core.Keyword(null,"days","days",1016980425),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.day,(function (p1__6573_SHARP_,p2__6574_SHARP_){return p1__6573_SHARP_.setDate(p2__6574_SHARP_);
})),new cljs.core.Keyword(null,"weeks","weeks",1126912625),(function (op,date,value){var date__$1 = date.clone();date__$1.setDate(op.call(null,cljs_time.core.day.call(null,date__$1),(7 * value)));
return date__$1;
}),new cljs.core.Keyword(null,"months","months",4240384357),(function (op,date,value){var date__$1 = date.clone();var m = op.call(null,cljs_time.core.month.call(null,date__$1),value);var y = cljs_time.core.year.call(null,date__$1);var y__$1 = (((m > 12))?(y + 1):(((m < 1))?(y - 1):((new cljs.core.Keyword(null,"else","else",1017020587))?y:null)));var m__$1 = (((m > 12))?cljs.core.mod.call(null,m,12):(((m < 1))?(m + 12):((new cljs.core.Keyword(null,"else","else",1017020587))?m:null)));date__$1.setMonth((m__$1 - 1));
date__$1.setYear(y__$1);
return date__$1;
}),new cljs.core.Keyword(null,"years","years",1128756040),(function (op,date,value){var date__$1 = date.clone();if(cljs.core.truth_((function (){var and__3941__auto__ = cljs_time.core.leap_year_QMARK_.call(null,cljs_time.core.year.call(null,date__$1));if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljs_time.core._EQ_.call(null,2,cljs_time.core.month.call(null,date__$1));if(cljs.core.truth_(and__3941__auto____$1))
{return cljs_time.core._EQ_.call(null,29,cljs_time.core.day.call(null,date__$1));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{date__$1.setDate(28);
} else
{}
date__$1.setYear(op.call(null,cljs_time.core.year.call(null,date__$1),value));
return date__$1;
})], true);
})();
cljs_time.core.period_fn = (function period_fn(p){return (function (operator,date){return cljs.core.reduce.call(null,(function (p1__6576_SHARP_,p2__6575_SHARP_){return cljs_time.core.periods.call(null,cljs.core.key.call(null,p2__6575_SHARP_)).call(null,operator,p1__6576_SHARP_,cljs.core.val.call(null,p2__6575_SHARP_));
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){return this$.getYear();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){return (this$.getMonth() + 1);
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){return this$.getDate();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var d = this$.getDay();if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,0)))
{return 7;
} else
{return d;
}
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){return this$.getHours();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){return this$.getMinutes();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){return this$.getSeconds();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){return this$.getMilliseconds();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){return (this$.getTime() > that.getTime());
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){return (this$.getTime() < that.getTime());
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$);
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$);
});
cljs_time.core._STAR_sys_time_STAR_ = null;
/**
* Returns a DateTime for the current instant in the UTC time zone.
*/
cljs_time.core.now = (function now(){if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_))
{return cljs_time.core._STAR_sys_time_STAR_;
} else
{return (new goog.date.UtcDateTime());
}
});
cljs_time.core.at_midnight = (function at_midnight(datetime){var datetime__$1 = datetime.clone();var G__6578 = datetime__$1;G__6578.setHours(0);
G__6578.setMinutes(0);
G__6578.setSeconds(0);
G__6578.setMilliseconds(0);
return G__6578;
});
/**
* Returns a DateMidnight for today at midnight in the UTC time zone.
*/
cljs_time.core.today_at_midnight = (function today_at_midnight(){return cljs_time.core.at_midnight.call(null,(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)?cljs_time.core._STAR_sys_time_STAR_:cljs_time.core.now.call(null)));
});
/**
* Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
*/
cljs_time.core.epoch = (function epoch(){var G__6580 = (new goog.date.UtcDateTime());G__6580.setTime(0);
return G__6580;
});
/**
* Constructs and returns a new DateMidnight in UTC.
* 
* Specify the year, month of year, day of month. Note that month and day are
* 1-indexed. Any number of least-significant components can be ommited, in
* which case they will default to 1.
*/
cljs_time.core.date_midnight = (function() {
var date_midnight = null;
var date_midnight__1 = (function (year){return date_midnight.call(null,year,1,1);
});
var date_midnight__2 = (function (year,month){return date_midnight.call(null,year,month,1);
});
var date_midnight__3 = (function (year,month,day){return (new goog.date.UtcDateTime(year,(month - 1),day));
});
date_midnight = function(year,month,day){
switch(arguments.length){
case 1:
return date_midnight__1.call(this,year);
case 2:
return date_midnight__2.call(this,year,month);
case 3:
return date_midnight__3.call(this,year,month,day);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_midnight.cljs$core$IFn$_invoke$arity$1 = date_midnight__1;
date_midnight.cljs$core$IFn$_invoke$arity$2 = date_midnight__2;
date_midnight.cljs$core$IFn$_invoke$arity$3 = date_midnight__3;
return date_midnight;
})()
;
/**
* Constructs and returns a new DateTime in UTC.
* 
* Specify the year, month of year, day of month, hour of day, minute if hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* 
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.date_time = (function() {
var date_time = null;
var date_time__1 = (function (year){return date_time.call(null,year,1,1,0,0,0,0);
});
var date_time__2 = (function (year,month){return date_time.call(null,year,month,1,0,0,0,0);
});
var date_time__3 = (function (year,month,day){return date_time.call(null,year,month,day,0,0,0,0);
});
var date_time__4 = (function (year,month,day,hour){return date_time.call(null,year,month,day,hour,0,0,0);
});
var date_time__5 = (function (year,month,day,hour,minute){return date_time.call(null,year,month,day,hour,minute,0,0);
});
var date_time__6 = (function (year,month,day,hour,minute,second){return date_time.call(null,year,month,day,hour,minute,second,0);
});
var date_time__7 = (function (year,month,day,hour,minute,second,millis){return (new goog.date.UtcDateTime(year,(month - 1),day,hour,minute,second,millis));
});
date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return date_time__1.call(this,year);
case 2:
return date_time__2.call(this,year,month);
case 3:
return date_time__3.call(this,year,month,day);
case 4:
return date_time__4.call(this,year,month,day,hour);
case 5:
return date_time__5.call(this,year,month,day,hour,minute);
case 6:
return date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_time.cljs$core$IFn$_invoke$arity$1 = date_time__1;
date_time.cljs$core$IFn$_invoke$arity$2 = date_time__2;
date_time.cljs$core$IFn$_invoke$arity$3 = date_time__3;
date_time.cljs$core$IFn$_invoke$arity$4 = date_time__4;
date_time.cljs$core$IFn$_invoke$arity$5 = date_time__5;
date_time.cljs$core$IFn$_invoke$arity$6 = date_time__6;
date_time.cljs$core$IFn$_invoke$arity$7 = date_time__7;
return date_time;
})()
;
/**
* @param {...*} var_args
*/
cljs_time.core.period = (function() {
var period = null;
var period__2 = (function (period__$1,value){return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.fromArray([period__$1,value], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword("cljs-time.core","period","cljs-time.core/period",2457815895)], true));
});
var period__3 = (function() { 
var G__6581__delegate = function (p1,v1,kvs){return cljs.core.apply.call(null,cljs.core.assoc,period.call(null,p1,v1),kvs);
};
var G__6581 = function (p1,v1,var_args){
var kvs = null;if (arguments.length > 2) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6581__delegate.call(this,p1,v1,kvs);};
G__6581.cljs$lang$maxFixedArity = 2;
G__6581.cljs$lang$applyTo = (function (arglist__6582){
var p1 = cljs.core.first(arglist__6582);
arglist__6582 = cljs.core.next(arglist__6582);
var v1 = cljs.core.first(arglist__6582);
var kvs = cljs.core.rest(arglist__6582);
return G__6581__delegate(p1,v1,kvs);
});
G__6581.cljs$core$IFn$_invoke$arity$variadic = G__6581__delegate;
return G__6581;
})()
;
period = function(p1,v1,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return period__2.call(this,p1,v1);
default:
return period__3.cljs$core$IFn$_invoke$arity$variadic(p1,v1, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
period.cljs$lang$maxFixedArity = 2;
period.cljs$lang$applyTo = period__3.cljs$lang$applyTo;
period.cljs$core$IFn$_invoke$arity$2 = period__2;
period.cljs$core$IFn$_invoke$arity$variadic = period__3.cljs$core$IFn$_invoke$arity$variadic;
return period;
})()
;
/**
* Given a number, returns a Period representing that many years.
* Without an argument, returns a PeriodType representing only years.
*/
cljs_time.core.years = (function() {
var years = null;
var years__0 = (function (){return years.call(null,null);
});
var years__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",1128756040),n);
});
years = function(n){
switch(arguments.length){
case 0:
return years__0.call(this);
case 1:
return years__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
years.cljs$core$IFn$_invoke$arity$0 = years__0;
years.cljs$core$IFn$_invoke$arity$1 = years__1;
return years;
})()
;
/**
* Given a number, returns a Period representing that many months.
* Without an argument, returns a PeriodType representing only months.
*/
cljs_time.core.months = (function() {
var months = null;
var months__0 = (function (){return months.call(null,null);
});
var months__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",4240384357),n);
});
months = function(n){
switch(arguments.length){
case 0:
return months__0.call(this);
case 1:
return months__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
months.cljs$core$IFn$_invoke$arity$0 = months__0;
months.cljs$core$IFn$_invoke$arity$1 = months__1;
return months;
})()
;
/**
* Given a number, returns a Period representing that many weeks.
* Without an argument, returns a PeriodType representing only weeks.
*/
cljs_time.core.weeks = (function() {
var weeks = null;
var weeks__0 = (function (){return weeks.call(null,null);
});
var weeks__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1126912625),n);
});
weeks = function(n){
switch(arguments.length){
case 0:
return weeks__0.call(this);
case 1:
return weeks__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
weeks.cljs$core$IFn$_invoke$arity$0 = weeks__0;
weeks.cljs$core$IFn$_invoke$arity$1 = weeks__1;
return weeks;
})()
;
/**
* Given a number, returns a Period representing that many days.
* Without an argument, returns a PeriodType representing only days.
*/
cljs_time.core.days = (function() {
var days = null;
var days__0 = (function (){return days.call(null,null);
});
var days__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",1016980425),n);
});
days = function(n){
switch(arguments.length){
case 0:
return days__0.call(this);
case 1:
return days__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
days.cljs$core$IFn$_invoke$arity$0 = days__0;
days.cljs$core$IFn$_invoke$arity$1 = days__1;
return days;
})()
;
/**
* Given a number, returns a Period representing that many hours.
* Without an argument, returns a PeriodType representing only hours.
*/
cljs_time.core.hours = (function() {
var hours = null;
var hours__0 = (function (){return hours.call(null,null);
});
var hours__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",1113373313),n);
});
hours = function(n){
switch(arguments.length){
case 0:
return hours__0.call(this);
case 1:
return hours__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hours.cljs$core$IFn$_invoke$arity$0 = hours__0;
hours.cljs$core$IFn$_invoke$arity$1 = hours__1;
return hours;
})()
;
/**
* Given a number, returns a Period representing that many minutes.
* Without an argument, returns a PeriodType representing only minutes.
*/
cljs_time.core.minutes = (function() {
var minutes = null;
var minutes__0 = (function (){return minutes.call(null,null);
});
var minutes__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",2078806097),n);
});
minutes = function(n){
switch(arguments.length){
case 0:
return minutes__0.call(this);
case 1:
return minutes__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minutes.cljs$core$IFn$_invoke$arity$0 = minutes__0;
minutes.cljs$core$IFn$_invoke$arity$1 = minutes__1;
return minutes;
})()
;
/**
* Given a number, returns a Period representing that many seconds.
* Without an argument, returns a PeriodType representing only seconds.
*/
cljs_time.core.seconds = (function() {
var seconds = null;
var seconds__0 = (function (){return seconds.call(null,null);
});
var seconds__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",2984001009),n);
});
seconds = function(n){
switch(arguments.length){
case 0:
return seconds__0.call(this);
case 1:
return seconds__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seconds.cljs$core$IFn$_invoke$arity$0 = seconds__0;
seconds.cljs$core$IFn$_invoke$arity$1 = seconds__1;
return seconds;
})()
;
/**
* Given a number, returns a Period representing that many milliseconds.
* Without an argument, returns a PeriodType representing only milliseconds.
*/
cljs_time.core.millis = (function() {
var millis = null;
var millis__0 = (function (){return millis.call(null,null);
});
var millis__1 = (function (n){return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",4234775992),n);
});
millis = function(n){
switch(arguments.length){
case 0:
return millis__0.call(this);
case 1:
return millis__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
millis.cljs$core$IFn$_invoke$arity$0 = millis__0;
millis.cljs$core$IFn$_invoke$arity$1 = millis__1;
return millis;
})()
;
/**
* Returns a new date/time corresponding to the given date/time moved forwards by
* the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.plus = (function() {
var plus = null;
var plus__2 = (function (dt,p){return cljs_time.core.plus_.call(null,dt,p);
});
var plus__3 = (function() { 
var G__6583__delegate = function (dt,p,ps){return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
};
var G__6583 = function (dt,p,var_args){
var ps = null;if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6583__delegate.call(this,dt,p,ps);};
G__6583.cljs$lang$maxFixedArity = 2;
G__6583.cljs$lang$applyTo = (function (arglist__6584){
var dt = cljs.core.first(arglist__6584);
arglist__6584 = cljs.core.next(arglist__6584);
var p = cljs.core.first(arglist__6584);
var ps = cljs.core.rest(arglist__6584);
return G__6583__delegate(dt,p,ps);
});
G__6583.cljs$core$IFn$_invoke$arity$variadic = G__6583__delegate;
return G__6583;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plus.cljs$lang$maxFixedArity = 2;
plus.cljs$lang$applyTo = plus__3.cljs$lang$applyTo;
plus.cljs$core$IFn$_invoke$arity$2 = plus__2;
plus.cljs$core$IFn$_invoke$arity$variadic = plus__3.cljs$core$IFn$_invoke$arity$variadic;
return plus;
})()
;
/**
* Returns a new date/time object corresponding to the given date/time moved backwards by
* the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.minus = (function() {
var minus = null;
var minus__2 = (function (dt,p){return cljs_time.core.minus_.call(null,dt,p);
});
var minus__3 = (function() { 
var G__6585__delegate = function (dt,p,ps){return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
};
var G__6585 = function (dt,p,var_args){
var ps = null;if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6585__delegate.call(this,dt,p,ps);};
G__6585.cljs$lang$maxFixedArity = 2;
G__6585.cljs$lang$applyTo = (function (arglist__6586){
var dt = cljs.core.first(arglist__6586);
arglist__6586 = cljs.core.next(arglist__6586);
var p = cljs.core.first(arglist__6586);
var ps = cljs.core.rest(arglist__6586);
return G__6585__delegate(dt,p,ps);
});
G__6585.cljs$core$IFn$_invoke$arity$variadic = G__6585__delegate;
return G__6585;
})()
;
minus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return minus__2.call(this,dt,p);
default:
return minus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minus.cljs$lang$maxFixedArity = 2;
minus.cljs$lang$applyTo = minus__3.cljs$lang$applyTo;
minus.cljs$core$IFn$_invoke$arity$2 = minus__2;
minus.cljs$core$IFn$_invoke$arity$variadic = minus__3.cljs$core$IFn$_invoke$arity$variadic;
return minus;
})()
;
/**
* Returns a DateTime a supplied period before the present.
* 
* e.g. `(-> 5 years ago)`
*/
cljs_time.core.ago = (function ago(period){return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
* Returns a DateTime a supplied period after the present.
* e.g. `(-> 30 minutes from-now)`
*/
cljs_time.core.from_now = (function from_now(period){return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
* Returns an interval representing the span between the two given ReadableDateTimes.
* Note that intervals are closed on the left and open on the right.
*/
cljs_time.core.interval = (function interval(start,end){if((start.getTime() < end.getTime()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",1144210702,null),new cljs.core.Symbol(null,"start","start",-1530773989,null)),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",1144210702,null),new cljs.core.Symbol(null,"end","end",-1640430956,null)))))].join('')));
}
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"start","start",1123661780),start,new cljs.core.Keyword(null,"end","end",1014004813),end], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword("cljs-time.core","interval","cljs-time.core/interval",888324179)], true));
});
/**
* Returns the start DateTime of an Interval.
*/
cljs_time.core.start = (function start(in$){return new cljs.core.Keyword(null,"start","start",1123661780).call(null,in$);
});
/**
* Returns the end DateTime of an Interval.
*/
cljs_time.core.end = (function end(in$){return new cljs.core.Keyword(null,"end","end",1014004813).call(null,in$);
});
/**
* Returns an Interval with an end ReadableDateTime the specified Period after the end
* of the given Interval
* @param {...*} var_args
*/
cljs_time.core.extend = (function() { 
var extend__delegate = function (in$,by){return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
};
var extend = function (in$,var_args){
var by = null;if (arguments.length > 1) {
  by = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return extend__delegate.call(this,in$,by);};
extend.cljs$lang$maxFixedArity = 1;
extend.cljs$lang$applyTo = (function (arglist__6587){
var in$ = cljs.core.first(arglist__6587);
var by = cljs.core.rest(arglist__6587);
return extend__delegate(in$,by);
});
extend.cljs$core$IFn$_invoke$arity$variadic = extend__delegate;
return extend;
})()
;
/**
* Returns the number of milliseconds in the given Interval.
*/
cljs_time.core.in_millis = (function in_millis(p__6588){var map__6590 = p__6588;var map__6590__$1 = ((cljs.core.seq_QMARK_.call(null,map__6590))?cljs.core.apply.call(null,cljs.core.hash_map,map__6590):map__6590);var end = cljs.core.get.call(null,map__6590__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6590__$1,new cljs.core.Keyword(null,"start","start",1123661780));return (end.getTime() - start.getTime());
});
/**
* Returns the number of standard seconds in the given Interval.
*/
cljs_time.core.in_seconds = (function in_seconds(in$){return ((cljs_time.core.in_millis.call(null,in$) / 1000) | 0);
});
/**
* Returns the number of standard minutes in the given Interval.
*/
cljs_time.core.in_minutes = (function in_minutes(in$){return ((cljs_time.core.in_seconds.call(null,in$) / 60) | 0);
});
/**
* Returns the number of standard hours in the given Interval.
*/
cljs_time.core.in_hours = (function in_hours(in$){return ((cljs_time.core.in_minutes.call(null,in$) / 60) | 0);
});
/**
* Returns the number of standard days in the given Interval.
*/
cljs_time.core.in_days = (function in_days(in$){return ((cljs_time.core.in_hours.call(null,in$) / 24) | 0);
});
/**
* Returns the number of standard weeks in the given Interval.
*/
cljs_time.core.in_weeks = (function in_weeks(in$){return ((cljs_time.core.in_days.call(null,in$) / 7) | 0);
});
cljs_time.core.month_range = (function month_range(p__6593){var map__6595 = p__6593;var map__6595__$1 = ((cljs.core.seq_QMARK_.call(null,map__6595))?cljs.core.apply.call(null,cljs.core.hash_map,map__6595):map__6595);var end = cljs.core.get.call(null,map__6595__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6595__$1,new cljs.core.Keyword(null,"start","start",1123661780));return cljs.core.take_while.call(null,(function (p1__6591_SHARP_){return cljs_time.core.before_QMARK_.call(null,p1__6591_SHARP_,end);
}),cljs.core.map.call(null,(function (p1__6592_SHARP_){return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__6592_SHARP_ + 1)));
}),cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function total_days_in_whole_months(interval){return cljs.core.map.call(null,(function (p1__6596_SHARP_){return p1__6596_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
* Returns the number of months in the given Interval.
* 
* For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
* returns 1 month.
* 
* Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
* 
* But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
* 
* And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
*/
cljs_time.core.in_months = (function in_months(p__6597){var map__6599 = p__6597;var map__6599__$1 = ((cljs.core.seq_QMARK_.call(null,map__6599))?cljs.core.apply.call(null,cljs.core.hash_map,map__6599):map__6599);var interval = map__6599__$1;var end = cljs.core.get.call(null,map__6599__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6599__$1,new cljs.core.Keyword(null,"start","start",1123661780));return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
* Returns the number of standard years in the given Interval.
*/
cljs_time.core.in_years = (function in_years(p__6600){var map__6602 = p__6600;var map__6602__$1 = ((cljs.core.seq_QMARK_.call(null,map__6602))?cljs.core.apply.call(null,cljs.core.hash_map,map__6602):map__6602);var end = cljs.core.get.call(null,map__6602__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6602__$1,new cljs.core.Keyword(null,"start","start",1123661780));var sm = cljs_time.core.month.call(null,start);var sd = cljs_time.core.day.call(null,start);var em = cljs_time.core.month.call(null,end);var ed = cljs_time.core.day.call(null,end);var d1 = (cljs.core.truth_((function (){var and__3941__auto__ = cljs_time.core._EQ_.call(null,sm,2);if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljs_time.core._EQ_.call(null,sd,29);if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = cljs_time.core._EQ_.call(null,em,2);if(cljs.core.truth_(and__3941__auto____$2))
{return cljs_time.core._EQ_.call(null,ed,28);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())?0:(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?0:(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?1:((new cljs.core.Keyword(null,"else-is-same-date","else-is-same-date",3350344536))?0:null))));return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
/**
* With 2 arguments: Returns true if the given Interval contains the given
* ReadableDateTime. Note that if the ReadableDateTime is exactly equal to the
* end of the interval, this function returns false.
* 
* With 3 arguments: Returns true if the start ReadablePartial is
* equal to or before and the end ReadablePartial is equal to or after the test
* ReadablePartial.
*/
cljs_time.core.within_QMARK_ = (function() {
var within_QMARK_ = null;
var within_QMARK___2 = (function (p__6603,date){var map__6605 = p__6603;var map__6605__$1 = ((cljs.core.seq_QMARK_.call(null,map__6605))?cljs.core.apply.call(null,cljs.core.hash_map,map__6605):map__6605);var end = cljs.core.get.call(null,map__6605__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6605__$1,new cljs.core.Keyword(null,"start","start",1123661780));return within_QMARK_.call(null,start,end,date);
});
var within_QMARK___3 = (function (start,end,date){var or__3943__auto__ = cljs_time.core._EQ_.call(null,start,date);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var and__3941__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);if(cljs.core.truth_(and__3941__auto__))
{return cljs_time.core.after_QMARK_.call(null,end,date);
} else
{return and__3941__auto__;
}
}
});
within_QMARK_ = function(start,end,date){
switch(arguments.length){
case 2:
return within_QMARK___2.call(this,start,end);
case 3:
return within_QMARK___3.call(this,start,end,date);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
within_QMARK_.cljs$core$IFn$_invoke$arity$2 = within_QMARK___2;
within_QMARK_.cljs$core$IFn$_invoke$arity$3 = within_QMARK___3;
return within_QMARK_;
})()
;
/**
* With 2 arguments: Returns true of the two given Intervals overlap.
* Note that intervals that satisfy abuts? do not satisfy overlaps?
* 
* With 4 arguments: Returns true if the range specified by start-a and end-a
* overlaps with the range specified by start-b and end-b.
*/
cljs_time.core.overlaps_QMARK_ = (function() {
var overlaps_QMARK_ = null;
var overlaps_QMARK___2 = (function (p__6606,p__6607){var map__6610 = p__6606;var map__6610__$1 = ((cljs.core.seq_QMARK_.call(null,map__6610))?cljs.core.apply.call(null,cljs.core.hash_map,map__6610):map__6610);var start_a = cljs.core.get.call(null,map__6610__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_a = cljs.core.get.call(null,map__6610__$1,new cljs.core.Keyword(null,"end","end",1014004813));var map__6611 = p__6607;var map__6611__$1 = ((cljs.core.seq_QMARK_.call(null,map__6611))?cljs.core.apply.call(null,cljs.core.hash_map,map__6611):map__6611);var start_b = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_b = cljs.core.get.call(null,map__6611__$1,new cljs.core.Keyword(null,"end","end",1014004813));return overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
});
var overlaps_QMARK___4 = (function (start_a,end_a,start_b,end_b){var or__3943__auto__ = (function (){var and__3941__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);if(cljs.core.truth_(and__3941__auto__))
{return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var and__3941__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);if(cljs.core.truth_(and__3941__auto__))
{return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else
{return and__3941__auto__;
}
}
});
overlaps_QMARK_ = function(start_a,end_a,start_b,end_b){
switch(arguments.length){
case 2:
return overlaps_QMARK___2.call(this,start_a,end_a);
case 4:
return overlaps_QMARK___4.call(this,start_a,end_a,start_b,end_b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = overlaps_QMARK___2;
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = overlaps_QMARK___4;
return overlaps_QMARK_;
})()
;
/**
* Returns true if Interval a abuts b, i.e. then end of a is exactly the
* beginning of b.
*/
cljs_time.core.abuts_QMARK_ = (function abuts_QMARK_(p__6612,p__6613){var map__6616 = p__6612;var map__6616__$1 = ((cljs.core.seq_QMARK_.call(null,map__6616))?cljs.core.apply.call(null,cljs.core.hash_map,map__6616):map__6616);var start_a = cljs.core.get.call(null,map__6616__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_a = cljs.core.get.call(null,map__6616__$1,new cljs.core.Keyword(null,"end","end",1014004813));var map__6617 = p__6613;var map__6617__$1 = ((cljs.core.seq_QMARK_.call(null,map__6617))?cljs.core.apply.call(null,cljs.core.hash_map,map__6617):map__6617);var start_b = cljs.core.get.call(null,map__6617__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_b = cljs.core.get.call(null,map__6617__$1,new cljs.core.Keyword(null,"end","end",1014004813));var or__3943__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.mins_ago = (function mins_ago(d){return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function() {
var last_day_of_the_month = null;
var last_day_of_the_month__1 = (function (dt){return last_day_of_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});
var last_day_of_the_month__2 = (function (year,month){return cljs_time.core.minus.call(null,cljs_time.core.date_time.call(null,year,(month + 1),1),cljs_time.core.days.call(null,1));
});
last_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return last_day_of_the_month__1.call(this,year);
case 2:
return last_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = last_day_of_the_month__1;
last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = last_day_of_the_month__2;
return last_day_of_the_month;
})()
;
cljs_time.core.number_of_days_in_the_month = (function() {
var number_of_days_in_the_month = null;
var number_of_days_in_the_month__1 = (function (dt){return number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});
var number_of_days_in_the_month__2 = (function (year,month){return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});
number_of_days_in_the_month = function(year,month){
switch(arguments.length){
case 1:
return number_of_days_in_the_month__1.call(this,year);
case 2:
return number_of_days_in_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = number_of_days_in_the_month__1;
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = number_of_days_in_the_month__2;
return number_of_days_in_the_month;
})()
;
cljs_time.core.first_day_of_the_month = (function() {
var first_day_of_the_month = null;
var first_day_of_the_month__1 = (function (dt){return first_day_of_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});
var first_day_of_the_month__2 = (function (year,month){return cljs_time.core.date_time.call(null,year,month,1);
});
first_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return first_day_of_the_month__1.call(this,year);
case 2:
return first_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = first_day_of_the_month__1;
first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = first_day_of_the_month__2;
return first_day_of_the_month;
})()
;
cljs_time.core.__GT_period = (function (){var method_table__3687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3688__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3689__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3690__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3691__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("->period",cljs.core.meta,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__3691__auto__,method_table__3687__auto__,prefer_table__3688__auto__,method_cache__3689__auto__,cached_hierarchy__3690__auto__));
})();
cljs.core._add_method.call(null,cljs_time.core.__GT_period,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword("cljs-time.core","interval","cljs-time.core/interval",888324179)], true),(function (p__6618){var map__6619 = p__6618;var map__6619__$1 = ((cljs.core.seq_QMARK_.call(null,map__6619))?cljs.core.apply.call(null,cljs.core.hash_map,map__6619):map__6619);var interval = map__6619__$1;var end = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__6619__$1,new cljs.core.Keyword(null,"start","start",1123661780));var years = cljs_time.core.in_years.call(null,interval);var start_year = cljs_time.core.year.call(null,start);var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));var start_month = cljs_time.core.month.call(null,start);var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval);var months = cljs.core.count.call(null,days_in_months);var days_to_remove = (((365 * years) + leap_years) + cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months));var days = (cljs_time.core.in_days.call(null,interval) - days_to_remove);var hours_to_remove = (24 * (days + days_to_remove));var hours = (cljs_time.core.in_hours.call(null,interval) - hours_to_remove);var minutes_to_remove = (60 * (hours + hours_to_remove));var minutes = (cljs_time.core.in_minutes.call(null,interval) - minutes_to_remove);var seconds_to_remove = (60 * (minutes + minutes_to_remove));var seconds = (cljs_time.core.in_seconds.call(null,interval) - seconds_to_remove);return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",1128756040),years,new cljs.core.Keyword(null,"months","months",4240384357),months,new cljs.core.Keyword(null,"days","days",1016980425),days,new cljs.core.Keyword(null,"hours","hours",1113373313),hours,new cljs.core.Keyword(null,"minutes","minutes",2078806097),minutes,new cljs.core.Keyword(null,"seconds","seconds",2984001009),seconds,new cljs.core.Keyword(null,"millis","millis",4234775992),(cljs_time.core.in_millis.call(null,interval) - (1000 * (seconds + seconds_to_remove))));
}));
cljs_time.core.today_at = (function() {
var today_at = null;
var today_at__2 = (function (hours,minutes){return today_at.call(null,hours,minutes,0);
});
var today_at__3 = (function (hours,minutes,seconds){return today_at.call(null,hours,minutes,seconds,0);
});
var today_at__4 = (function (hours,minutes,seconds,millis){var midnight = (new goog.date.Date());var G__6621 = (new goog.date.UtcDateTime(0));G__6621.setYear(midnight.getYear());
G__6621.setMonth(midnight.getMonth());
G__6621.setDate(midnight.getDate());
G__6621.setHours(hours);
G__6621.setMinutes(minutes);
G__6621.setSeconds(seconds);
G__6621.setMilliseconds(millis);
return G__6621;
});
today_at = function(hours,minutes,seconds,millis){
switch(arguments.length){
case 2:
return today_at__2.call(this,hours,minutes);
case 3:
return today_at__3.call(this,hours,minutes,seconds);
case 4:
return today_at__4.call(this,hours,minutes,seconds,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
today_at.cljs$core$IFn$_invoke$arity$2 = today_at__2;
today_at.cljs$core$IFn$_invoke$arity$3 = today_at__3;
today_at.cljs$core$IFn$_invoke$arity$4 = today_at__4;
return today_at;
})()
;
cljs_time.core.do_at_STAR_ = (function do_at_STAR_(base_date_time,body_fn){var _STAR_sys_time_STAR_6623 = cljs_time.core._STAR_sys_time_STAR_;try{cljs_time.core._STAR_sys_time_STAR_ = base_date_time;
return body_fn.call(null);
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_6623;
}});
