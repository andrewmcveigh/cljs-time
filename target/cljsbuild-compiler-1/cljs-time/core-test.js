goog.provide('cljs_time.core_test');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
cljs_time.core_test.test_now = (function test_now(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_now);
});
cljs_time.core_test.test_now = cljs.core.vary_meta.call(null,cljs_time.core_test.test_now,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-now","test-now",1506493652,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_now_test(){try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.date_time.call(null,2010,1,1),cljs_time.core.do_at_STAR_.call(null,cljs_time.core.date_time.call(null,2010,1,1),(function (){return cljs_time.core.now.call(null);
})));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"do-at","do-at",-1544826258,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"now","now",-1640422257,null))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"do-at","do-at",-1544826258,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"now","now",-1640422257,null))))], true));
}
return result__6723__auto__;
}catch (e7119){if((e7119 instanceof Error))
{var t__6759__auto__ = e7119;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"do-at","do-at",-1544826258,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"now","now",-1640422257,null))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7119;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_now);
cljs_time.core_test.test_today_at_midnight = (function test_today_at_midnight(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_today_at_midnight);
});
cljs_time.core_test.test_today_at_midnight = cljs.core.vary_meta.call(null,cljs_time.core_test.test_today_at_midnight,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-today-at-midnight","test-today-at-midnight",1107099612,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_today_at_midnight_test(){try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.date_midnight.call(null,2010,1,1),cljs_time.core.do_at_STAR_.call(null,cljs_time.core.date_midnight.call(null,2010,1,1),(function (){return cljs_time.core.today_at_midnight.call(null);
})));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"do-at","do-at",-1544826258,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"today-at-midnight","today-at-midnight",-2004927401,null))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"do-at","do-at",-1544826258,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"today-at-midnight","today-at-midnight",-2004927401,null))))], true));
}
return result__6723__auto__;
}catch (e7121){if((e7121 instanceof Error))
{var t__6759__auto__ = e7121;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"do-at","do-at",-1544826258,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2010,1,1),cljs.core.list(new cljs.core.Symbol(null,"today-at-midnight","today-at-midnight",-2004927401,null))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7121;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_today_at_midnight);
cljs_time.core_test.test_epoch = (function test_epoch(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_epoch);
});
cljs_time.core_test.test_epoch = cljs.core.vary_meta.call(null,cljs_time.core_test.test_epoch,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-epoch","test-epoch",-1014597305,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_epoch_test(){var e = cljs_time.core.epoch.call(null);try{var values__6722__auto___7126 = cljs.core.list.call(null,1970,cljs_time.core.year.call(null,e));var result__6723__auto___7127 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7126);if(cljs.core.truth_(result__6723__auto___7127))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7126),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1970,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"e","e",-1640531426,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7126)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1970,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"e","e",-1640531426,null)))], true));
}
}catch (e7124){if((e7124 instanceof Error))
{var t__6759__auto___7128 = e7124;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7128,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1970,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"e","e",-1640531426,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7124;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,0,cljs_time.core.second.call(null,e));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"e","e",-1640531426,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"e","e",-1640531426,null)))], true));
}
return result__6723__auto__;
}catch (e7125){if((e7125 instanceof Error))
{var t__6759__auto__ = e7125;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"e","e",-1640531426,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7125;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_epoch);
cljs_time.core_test.test_date_time_and_accessors = (function test_date_time_and_accessors(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_date_time_and_accessors);
});
cljs_time.core_test.test_date_time_and_accessors = cljs.core.vary_meta.call(null,cljs_time.core_test.test_date_time_and_accessors,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-date-time-and-accessors","test-date-time-and-accessors",947076499,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_date_time_and_accessors_test(){var d_7157 = cljs_time.core.date_time.call(null,1986);try{var values__6722__auto___7158 = cljs.core.list.call(null,1986,cljs_time.core.year.call(null,d_7157));var result__6723__auto___7159 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7158);if(cljs.core.truth_(result__6723__auto___7159))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7158),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7158)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7143){if((e7143 instanceof Error))
{var t__6759__auto___7160 = e7143;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7160,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7143;
} else
{}
}
}try{var values__6722__auto___7161 = cljs.core.list.call(null,1,cljs_time.core.month.call(null,d_7157));var result__6723__auto___7162 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7161);if(cljs.core.truth_(result__6723__auto___7162))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7161),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7161)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7144){if((e7144 instanceof Error))
{var t__6759__auto___7163 = e7144;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7163,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7144;
} else
{}
}
}try{var values__6722__auto___7164 = cljs.core.list.call(null,1,cljs_time.core.day.call(null,d_7157));var result__6723__auto___7165 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7164);if(cljs.core.truth_(result__6723__auto___7165))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7164),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7164)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7145){if((e7145 instanceof Error))
{var t__6759__auto___7166 = e7145;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7166,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7145;
} else
{}
}
}try{var values__6722__auto___7167 = cljs.core.list.call(null,0,cljs_time.core.hour.call(null,d_7157));var result__6723__auto___7168 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7167);if(cljs.core.truth_(result__6723__auto___7168))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7167),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7167)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7146){if((e7146 instanceof Error))
{var t__6759__auto___7169 = e7146;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7169,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7146;
} else
{}
}
}try{var values__6722__auto___7170 = cljs.core.list.call(null,0,cljs_time.core.minute.call(null,d_7157));var result__6723__auto___7171 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7170);if(cljs.core.truth_(result__6723__auto___7171))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7170),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7170)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7147){if((e7147 instanceof Error))
{var t__6759__auto___7172 = e7147;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7172,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7147;
} else
{}
}
}try{var values__6722__auto___7173 = cljs.core.list.call(null,0,cljs_time.core.second.call(null,d_7157));var result__6723__auto___7174 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7173);if(cljs.core.truth_(result__6723__auto___7174))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7173),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7173)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7148){if((e7148 instanceof Error))
{var t__6759__auto___7175 = e7148;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7175,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7148;
} else
{}
}
}try{var values__6722__auto___7176 = cljs.core.list.call(null,0,cljs_time.core.milli.call(null,d_7157));var result__6723__auto___7177 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7176);if(cljs.core.truth_(result__6723__auto___7177))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7176),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7176)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7149){if((e7149 instanceof Error))
{var t__6759__auto___7178 = e7149;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7178,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7149;
} else
{}
}
}var d = cljs_time.core.date_time.call(null,1986,10,14,4,3,2,1);try{var values__6722__auto___7179 = cljs.core.list.call(null,1986,cljs_time.core.year.call(null,d));var result__6723__auto___7180 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7179);if(cljs.core.truth_(result__6723__auto___7180))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7179),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7179)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7150){if((e7150 instanceof Error))
{var t__6759__auto___7181 = e7150;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7181,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7150;
} else
{}
}
}try{var values__6722__auto___7182 = cljs.core.list.call(null,10,cljs_time.core.month.call(null,d));var result__6723__auto___7183 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7182);if(cljs.core.truth_(result__6723__auto___7183))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7182),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),10,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7182)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),10,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7151){if((e7151 instanceof Error))
{var t__6759__auto___7184 = e7151;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7184,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),10,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7151;
} else
{}
}
}try{var values__6722__auto___7185 = cljs.core.list.call(null,14,cljs_time.core.day.call(null,d));var result__6723__auto___7186 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7185);if(cljs.core.truth_(result__6723__auto___7186))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7185),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),14,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7185)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),14,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7152){if((e7152 instanceof Error))
{var t__6759__auto___7187 = e7152;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7187,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),14,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7152;
} else
{}
}
}try{var values__6722__auto___7188 = cljs.core.list.call(null,4,cljs_time.core.hour.call(null,d));var result__6723__auto___7189 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7188);if(cljs.core.truth_(result__6723__auto___7189))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7188),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7188)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7153){if((e7153 instanceof Error))
{var t__6759__auto___7190 = e7153;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7190,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),4,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7153;
} else
{}
}
}try{var values__6722__auto___7191 = cljs.core.list.call(null,3,cljs_time.core.minute.call(null,d));var result__6723__auto___7192 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7191);if(cljs.core.truth_(result__6723__auto___7192))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7191),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7191)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7154){if((e7154 instanceof Error))
{var t__6759__auto___7193 = e7154;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7193,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),3,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7154;
} else
{}
}
}try{var values__6722__auto___7194 = cljs.core.list.call(null,2,cljs_time.core.second.call(null,d));var result__6723__auto___7195 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7194);if(cljs.core.truth_(result__6723__auto___7195))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7194),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),2,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7194)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),2,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7155){if((e7155 instanceof Error))
{var t__6759__auto___7196 = e7155;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7196,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),2,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7155;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,1,cljs_time.core.milli.call(null,d));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
return result__6723__auto__;
}catch (e7156){if((e7156 instanceof Error))
{var t__6759__auto__ = e7156;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7156;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_date_time_and_accessors);
cljs_time.core_test.test_date_midnight_and_accessors = (function test_date_midnight_and_accessors(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_date_midnight_and_accessors);
});
cljs_time.core_test.test_date_midnight_and_accessors = cljs.core.vary_meta.call(null,cljs_time.core_test.test_date_midnight_and_accessors,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-date-midnight-and-accessors","test-date-midnight-and-accessors",465949270,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_date_midnight_and_accessors_test(){var d_7225 = cljs_time.core.date_midnight.call(null,1986);try{var values__6722__auto___7226 = cljs.core.list.call(null,1986,cljs_time.core.year.call(null,d_7225));var result__6723__auto___7227 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7226);if(cljs.core.truth_(result__6723__auto___7227))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7226),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7226)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7211){if((e7211 instanceof Error))
{var t__6759__auto___7228 = e7211;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7228,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7211;
} else
{}
}
}try{var values__6722__auto___7229 = cljs.core.list.call(null,1,cljs_time.core.month.call(null,d_7225));var result__6723__auto___7230 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7229);if(cljs.core.truth_(result__6723__auto___7230))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7229),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7229)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7212){if((e7212 instanceof Error))
{var t__6759__auto___7231 = e7212;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7231,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7212;
} else
{}
}
}try{var values__6722__auto___7232 = cljs.core.list.call(null,1,cljs_time.core.day.call(null,d_7225));var result__6723__auto___7233 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7232);if(cljs.core.truth_(result__6723__auto___7233))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7232),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7232)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7213){if((e7213 instanceof Error))
{var t__6759__auto___7234 = e7213;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7234,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7213;
} else
{}
}
}try{var values__6722__auto___7235 = cljs.core.list.call(null,0,cljs_time.core.hour.call(null,d_7225));var result__6723__auto___7236 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7235);if(cljs.core.truth_(result__6723__auto___7236))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7235),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7235)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7214){if((e7214 instanceof Error))
{var t__6759__auto___7237 = e7214;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7237,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7214;
} else
{}
}
}try{var values__6722__auto___7238 = cljs.core.list.call(null,0,cljs_time.core.minute.call(null,d_7225));var result__6723__auto___7239 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7238);if(cljs.core.truth_(result__6723__auto___7239))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7238),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7238)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7215){if((e7215 instanceof Error))
{var t__6759__auto___7240 = e7215;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7240,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7215;
} else
{}
}
}try{var values__6722__auto___7241 = cljs.core.list.call(null,0,cljs_time.core.second.call(null,d_7225));var result__6723__auto___7242 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7241);if(cljs.core.truth_(result__6723__auto___7242))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7241),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7241)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7216){if((e7216 instanceof Error))
{var t__6759__auto___7243 = e7216;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7243,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7216;
} else
{}
}
}try{var values__6722__auto___7244 = cljs.core.list.call(null,0,cljs_time.core.milli.call(null,d_7225));var result__6723__auto___7245 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7244);if(cljs.core.truth_(result__6723__auto___7245))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7244),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7244)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7217){if((e7217 instanceof Error))
{var t__6759__auto___7246 = e7217;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7246,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7217;
} else
{}
}
}var d = cljs_time.core.date_midnight.call(null,1986,10,14);try{var values__6722__auto___7247 = cljs.core.list.call(null,1986,cljs_time.core.year.call(null,d));var result__6723__auto___7248 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7247);if(cljs.core.truth_(result__6723__auto___7248))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7247),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7247)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7218){if((e7218 instanceof Error))
{var t__6759__auto___7249 = e7218;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7249,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1986,cljs.core.list(new cljs.core.Symbol(null,"year","year",-1636826634,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7218;
} else
{}
}
}try{var values__6722__auto___7250 = cljs.core.list.call(null,10,cljs_time.core.month.call(null,d));var result__6723__auto___7251 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7250);if(cljs.core.truth_(result__6723__auto___7251))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7250),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),10,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7250)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),10,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7219){if((e7219 instanceof Error))
{var t__6759__auto___7252 = e7219;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7252,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),10,cljs.core.list(new cljs.core.Symbol(null,"month","month",-1536451527,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7219;
} else
{}
}
}try{var values__6722__auto___7253 = cljs.core.list.call(null,14,cljs_time.core.day.call(null,d));var result__6723__auto___7254 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7253);if(cljs.core.truth_(result__6723__auto___7254))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7253),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),14,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7253)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),14,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7220){if((e7220 instanceof Error))
{var t__6759__auto___7255 = e7220;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7255,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),14,cljs.core.list(new cljs.core.Symbol(null,"day","day",-1640432299,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7220;
} else
{}
}
}try{var values__6722__auto___7256 = cljs.core.list.call(null,0,cljs_time.core.hour.call(null,d));var result__6723__auto___7257 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7256);if(cljs.core.truth_(result__6723__auto___7257))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7256),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7256)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7221){if((e7221 instanceof Error))
{var t__6759__auto___7258 = e7221;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7258,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"hour","hour",-1637322851,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7221;
} else
{}
}
}try{var values__6722__auto___7259 = cljs.core.list.call(null,0,cljs_time.core.minute.call(null,d));var result__6723__auto___7260 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7259);if(cljs.core.truth_(result__6723__auto___7260))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7259),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7259)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7222){if((e7222 instanceof Error))
{var t__6759__auto___7261 = e7222;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7261,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"minute","minute",1580408781,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7222;
} else
{}
}
}try{var values__6722__auto___7262 = cljs.core.list.call(null,0,cljs_time.core.second.call(null,d));var result__6723__auto___7263 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7262);if(cljs.core.truth_(result__6723__auto___7263))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7262),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7262)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7223){if((e7223 instanceof Error))
{var t__6759__auto___7264 = e7223;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7264,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"second","second",1748155949,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7223;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,0,cljs_time.core.milli.call(null,d));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
return result__6723__auto__;
}catch (e7224){if((e7224 instanceof Error))
{var t__6759__auto__ = e7224;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"milli","milli",-1536632442,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7224;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_date_midnight_and_accessors);
cljs_time.core_test.test_day_of_week = (function test_day_of_week(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_day_of_week);
});
cljs_time.core_test.test_day_of_week = cljs.core.vary_meta.call(null,cljs_time.core_test.test_day_of_week,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-day-of-week","test-day-of-week",-590982665,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_day_of_week_test(){var d_7269 = cljs_time.core.date_time.call(null,2010,4,24);try{var values__6722__auto___7270 = cljs.core.list.call(null,6,cljs_time.core.day_of_week.call(null,d_7269));var result__6723__auto___7271 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7270);if(cljs.core.truth_(result__6723__auto___7271))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7270),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),6,cljs.core.list(new cljs.core.Symbol(null,"day-of-week","day-of-week",1323452082,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7270)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),6,cljs.core.list(new cljs.core.Symbol(null,"day-of-week","day-of-week",1323452082,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
}catch (e7267){if((e7267 instanceof Error))
{var t__6759__auto___7272 = e7267;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7272,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),6,cljs.core.list(new cljs.core.Symbol(null,"day-of-week","day-of-week",1323452082,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7267;
} else
{}
}
}var d = cljs_time.core.date_time.call(null,1918,11,11);try{var values__6722__auto__ = cljs.core.list.call(null,1,cljs_time.core.day_of_week.call(null,d));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day-of-week","day-of-week",1323452082,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day-of-week","day-of-week",1323452082,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
return result__6723__auto__;
}catch (e7268){if((e7268 instanceof Error))
{var t__6759__auto__ = e7268;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"day-of-week","day-of-week",1323452082,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7268;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_day_of_week);
cljs_time.core_test.test_after_QMARK_ = (function test_after_QMARK_(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_after_QMARK_);
});
cljs_time.core_test.test_after_QMARK_ = cljs.core.vary_meta.call(null,cljs_time.core_test.test_after_QMARK_,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-after?","test-after?",459959607,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_after_QMARK__test(){try{var values__6722__auto___7279 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1987),cljs_time.core.date_time.call(null,1986));var result__6723__auto___7280 = cljs.core.apply.call(null,cljs_time.core.after_QMARK_,values__6722__auto___7279);if(cljs.core.truth_(result__6723__auto___7280))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core.after_QMARK_,values__6722__auto___7279),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"after?","after?",1234251676,null),values__6722__auto___7279)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986))], true));
}
}catch (e7276){if((e7276 instanceof Error))
{var t__6759__auto___7281 = e7276;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7281,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7276;
} else
{}
}
}try{var values__6722__auto___7282 = cljs.core.list.call(null,cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,1986),cljs_time.core.date_time.call(null,1987)));var result__6723__auto___7283 = cljs.core.apply.call(null,cljs.core.not,values__6722__auto___7282);if(cljs.core.truth_(result__6723__auto___7283))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto___7282),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto___7282)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987)))], true));
}
}catch (e7277){if((e7277 instanceof Error))
{var t__6759__auto___7284 = e7277;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7284,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7277;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,1986),cljs_time.core.date_time.call(null,1986)));var result__6723__auto__ = cljs.core.apply.call(null,cljs.core.not,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
}
return result__6723__auto__;
}catch (e7278){if((e7278 instanceof Error))
{var t__6759__auto__ = e7278;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"after?","after?",1234251676,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7278;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_after_QMARK_);
cljs_time.core_test.test_before_QMARK_ = (function test_before_QMARK_(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_before_QMARK_);
});
cljs_time.core_test.test_before_QMARK_ = cljs.core.vary_meta.call(null,cljs_time.core_test.test_before_QMARK_,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-before?","test-before?",-103571426,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_before_QMARK__test(){try{var values__6722__auto___7291 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1986),cljs_time.core.date_time.call(null,1987));var result__6723__auto___7292 = cljs.core.apply.call(null,cljs_time.core.before_QMARK_,values__6722__auto___7291);if(cljs.core.truth_(result__6723__auto___7292))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core.before_QMARK_,values__6722__auto___7291),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"before?","before?",-1870321063,null),values__6722__auto___7291)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987))], true));
}
}catch (e7288){if((e7288 instanceof Error))
{var t__6759__auto___7293 = e7288;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7293,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7288;
} else
{}
}
}try{var values__6722__auto___7294 = cljs.core.list.call(null,cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,1987),cljs_time.core.date_time.call(null,1986)));var result__6723__auto___7295 = cljs.core.apply.call(null,cljs.core.not,values__6722__auto___7294);if(cljs.core.truth_(result__6723__auto___7295))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto___7294),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto___7294)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
}
}catch (e7289){if((e7289 instanceof Error))
{var t__6759__auto___7296 = e7289;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7296,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7289;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,1986),cljs_time.core.date_time.call(null,1986)));var result__6723__auto__ = cljs.core.apply.call(null,cljs.core.not,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
}
return result__6723__auto__;
}catch (e7290){if((e7290 instanceof Error))
{var t__6759__auto__ = e7290;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"before?","before?",-1870321063,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7290;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_before_QMARK_);
cljs_time.core_test.test_periods = (function test_periods(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_periods);
});
cljs_time.core_test.test_periods = cljs.core.vary_meta.call(null,cljs_time.core_test.test_periods,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-periods","test-periods",-552521136,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_periods_test(){try{var values__6722__auto___7301 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1986,10,14,4,3,2,1),cljs_time.core.plus.call(null,cljs_time.core.date_time.call(null,1984),cljs_time.core.years.call(null,2),cljs_time.core.months.call(null,9),cljs_time.core.days.call(null,13),cljs_time.core.hours.call(null,4),cljs_time.core.minutes.call(null,3),cljs_time.core.seconds.call(null,2),cljs_time.core.millis.call(null,1)));var result__6723__auto___7302 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7301);if(cljs.core.truth_(result__6723__auto___7302))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7301),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,3,2,1),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1984),cljs.core.list(new cljs.core.Symbol(null,"years","years",-1525679729,null),2),cljs.core.list(new cljs.core.Symbol(null,"months","months",1585948588,null),9),cljs.core.list(new cljs.core.Symbol(null,"days","days",-1637455344,null),13),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),4),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3),cljs.core.list(new cljs.core.Symbol(null,"seconds","seconds",329565240,null),2),cljs.core.list(new cljs.core.Symbol(null,"millis","millis",1580340223,null),1)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7301)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,3,2,1),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1984),cljs.core.list(new cljs.core.Symbol(null,"years","years",-1525679729,null),2),cljs.core.list(new cljs.core.Symbol(null,"months","months",1585948588,null),9),cljs.core.list(new cljs.core.Symbol(null,"days","days",-1637455344,null),13),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),4),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3),cljs.core.list(new cljs.core.Symbol(null,"seconds","seconds",329565240,null),2),cljs.core.list(new cljs.core.Symbol(null,"millis","millis",1580340223,null),1)))], true));
}
}catch (e7299){if((e7299 instanceof Error))
{var t__6759__auto___7303 = e7299;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7303,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,3,2,1),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1984),cljs.core.list(new cljs.core.Symbol(null,"years","years",-1525679729,null),2),cljs.core.list(new cljs.core.Symbol(null,"months","months",1585948588,null),9),cljs.core.list(new cljs.core.Symbol(null,"days","days",-1637455344,null),13),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),4),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3),cljs.core.list(new cljs.core.Symbol(null,"seconds","seconds",329565240,null),2),cljs.core.list(new cljs.core.Symbol(null,"millis","millis",1580340223,null),1)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7299;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1986,1,8),cljs_time.core.plus.call(null,cljs_time.core.date_time.call(null,1986,1,1),cljs_time.core.weeks.call(null,1)));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,1,8),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,1,1),cljs.core.list(new cljs.core.Symbol(null,"weeks","weeks",-1527523144,null),1)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,1,8),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,1,1),cljs.core.list(new cljs.core.Symbol(null,"weeks","weeks",-1527523144,null),1)))], true));
}
return result__6723__auto__;
}catch (e7300){if((e7300 instanceof Error))
{var t__6759__auto__ = e7300;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,1,8),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,1,1),cljs.core.list(new cljs.core.Symbol(null,"weeks","weeks",-1527523144,null),1)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7300;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_periods);
cljs_time.core_test.test_plus = (function test_plus(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_plus);
});
cljs_time.core_test.test_plus = cljs.core.vary_meta.call(null,cljs_time.core_test.test_plus,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-plus","test-plus",1428025262,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_plus_test(){try{var values__6722__auto___7308 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1986,10,14,6),cljs_time.core.plus.call(null,cljs_time.core.date_time.call(null,1986,10,14,4),cljs_time.core.hours.call(null,2)));var result__6723__auto___7309 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7308);if(cljs.core.truth_(result__6723__auto___7309))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7308),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7308)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2)))], true));
}
}catch (e7306){if((e7306 instanceof Error))
{var t__6759__auto___7310 = e7306;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7310,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7306;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1986,10,14,6,5),cljs_time.core.plus.call(null,cljs_time.core.date_time.call(null,1986,10,14,4,2),cljs_time.core.hours.call(null,2),cljs_time.core.minutes.call(null,3)));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6,5),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,2),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6,5),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,2),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3)))], true));
}
return result__6723__auto__;
}catch (e7307){if((e7307 instanceof Error))
{var t__6759__auto__ = e7307;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6,5),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,2),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7307;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_plus);
cljs_time.core_test.test_minus = (function test_minus(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_minus);
});
cljs_time.core_test.test_minus = cljs.core.vary_meta.call(null,cljs_time.core_test.test_minus,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-minus","test-minus",-1007418066,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_minus_test(){try{var values__6722__auto___7315 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1986,10,14,4),cljs_time.core.minus.call(null,cljs_time.core.date_time.call(null,1986,10,14,6),cljs_time.core.hours.call(null,2)));var result__6723__auto___7316 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7315);if(cljs.core.truth_(result__6723__auto___7316))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7315),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7315)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2)))], true));
}
}catch (e7313){if((e7313 instanceof Error))
{var t__6759__auto___7317 = e7313;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7317,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7313;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1986,10,14,4,2),cljs_time.core.minus.call(null,cljs_time.core.date_time.call(null,1986,10,14,6,5),cljs_time.core.hours.call(null,2),cljs_time.core.minutes.call(null,3)));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,2),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6,5),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,2),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6,5),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3)))], true));
}
return result__6723__auto__;
}catch (e7314){if((e7314 instanceof Error))
{var t__6759__auto__ = e7314;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,4,2),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986,10,14,6,5),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),2),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),3)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7314;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_minus);
cljs_time.core_test.test_start_end = (function test_start_end(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_start_end);
});
cljs_time.core_test.test_start_end = cljs.core.vary_meta.call(null,cljs_time.core_test.test_start_end,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-start-end","test-start-end",1858294574,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_start_end_test(){var s = cljs_time.core.date_time.call(null,1986,10,14,12,5,4);var e = cljs_time.core.date_time.call(null,1986,11,3,22,2,6);var p = cljs_time.core.interval.call(null,s,e);try{var values__6722__auto___7322 = cljs.core.list.call(null,s,cljs_time.core.start.call(null,p));var result__6723__auto___7323 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7322);if(cljs.core.truth_(result__6723__auto___7323))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7322),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"s","s",-1640531412,null),cljs.core.list(new cljs.core.Symbol(null,"start","start",-1530773989,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7322)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"s","s",-1640531412,null),cljs.core.list(new cljs.core.Symbol(null,"start","start",-1530773989,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7320){if((e7320 instanceof Error))
{var t__6759__auto___7324 = e7320;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7324,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"s","s",-1640531412,null),cljs.core.list(new cljs.core.Symbol(null,"start","start",-1530773989,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7320;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,e,cljs_time.core.end.call(null,p));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"e","e",-1640531426,null),cljs.core.list(new cljs.core.Symbol(null,"end","end",-1640430956,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"e","e",-1640531426,null),cljs.core.list(new cljs.core.Symbol(null,"end","end",-1640430956,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
return result__6723__auto__;
}catch (e7321){if((e7321 instanceof Error))
{var t__6759__auto__ = e7321;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"e","e",-1640531426,null),cljs.core.list(new cljs.core.Symbol(null,"end","end",-1640430956,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7321;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_start_end);
/**
* @param {...*} var_args
*/
cljs_time.core_test.i_EQ_ = (function() { 
var i_EQ___delegate = function (args){return cljs.core.apply.call(null,cljs_time.core._EQ_,cljs.core.map.call(null,(function (p__7327){var map__7328 = p__7327;var map__7328__$1 = ((cljs.core.seq_QMARK_.call(null,map__7328))?cljs.core.apply.call(null,cljs.core.hash_map,map__7328):map__7328);var end = cljs.core.get.call(null,map__7328__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__7328__$1,new cljs.core.Keyword(null,"start","start",1123661780));return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"start","start",1123661780),start.getTime(),new cljs.core.Keyword(null,"end","end",1014004813),end.getTime()], true);
}),args));
};
var i_EQ_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i_EQ___delegate.call(this,args);};
i_EQ_.cljs$lang$maxFixedArity = 0;
i_EQ_.cljs$lang$applyTo = (function (arglist__7329){
var args = cljs.core.seq(arglist__7329);
return i_EQ___delegate(args);
});
i_EQ_.cljs$core$IFn$_invoke$arity$variadic = i_EQ___delegate;
return i_EQ_;
})()
;
cljs_time.core_test.test_extend = (function test_extend(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_extend);
});
cljs_time.core_test.test_extend = cljs.core.vary_meta.call(null,cljs_time.core_test.test_extend,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-extend","test-extend",591099502,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_extend_test(){try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.interval.call(null,cljs_time.core.date_time.call(null,1986),cljs_time.core.date_time.call(null,1988)),cljs_time.core.extend.call(null,cljs_time.core.interval.call(null,cljs_time.core.date_time.call(null,1986),cljs_time.core.date_time.call(null,1987)),cljs_time.core.years.call(null,1)));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core_test.i_EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core_test.i_EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"i=","i=",-1640528211,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1988)),cljs.core.list(new cljs.core.Symbol(null,"extend","extend",1365391571,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987)),cljs.core.list(new cljs.core.Symbol(null,"years","years",-1525679729,null),1)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"i=","i=",-1640528211,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"i=","i=",-1640528211,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1988)),cljs.core.list(new cljs.core.Symbol(null,"extend","extend",1365391571,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987)),cljs.core.list(new cljs.core.Symbol(null,"years","years",-1525679729,null),1)))], true));
}
return result__6723__auto__;
}catch (e7331){if((e7331 instanceof Error))
{var t__6759__auto__ = e7331;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"i=","i=",-1640528211,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1988)),cljs.core.list(new cljs.core.Symbol(null,"extend","extend",1365391571,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1986),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1987)),cljs.core.list(new cljs.core.Symbol(null,"years","years",-1525679729,null),1)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7331;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_extend);
cljs_time.core_test.leap_year_interval_in = (function leap_year_interval_in(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.leap_year_interval_in);
});
cljs_time.core_test.leap_year_interval_in = cljs.core.vary_meta.call(null,cljs_time.core_test.leap_year_interval_in,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"leap-year-interval-in","leap-year-interval-in",898999067,null),new cljs.core.Keyword(null,"test","test",1017460740),(function leap_year_interval_in_test(){try{var values__6722__auto___7336 = cljs.core.list.call(null,1,cljs_time.core.in_years.call(null,cljs_time.core.interval.call(null,cljs_time.core.date_time.call(null,2012,2,29,12,5,4),cljs_time.core.date_time.call(null,2013,2,28,22,2,6))));var result__6723__auto___7337 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7336);if(cljs.core.truth_(result__6723__auto___7337))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7336),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,29,12,5,4),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2013,2,28,22,2,6))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7336)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,29,12,5,4),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2013,2,28,22,2,6))))], true));
}
}catch (e7334){if((e7334 instanceof Error))
{var t__6759__auto___7338 = e7334;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7338,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,29,12,5,4),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2013,2,28,22,2,6))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7334;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,1,cljs_time.core.in_years.call(null,cljs_time.core.interval.call(null,cljs_time.core.date_time.call(null,2011,2,28,12,5,4),cljs_time.core.date_time.call(null,2012,2,29,22,2,6))));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2011,2,28,12,5,4),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,29,22,2,6))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2011,2,28,12,5,4),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,29,22,2,6))))], true));
}
return result__6723__auto__;
}catch (e7335){if((e7335 instanceof Error))
{var t__6759__auto__ = e7335;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2011,2,28,12,5,4),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,29,22,2,6))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7335;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.leap_year_interval_in);
cljs_time.core_test.test_interval_in = (function test_interval_in(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_interval_in);
});
cljs_time.core_test.test_interval_in = cljs.core.vary_meta.call(null,cljs_time.core_test.test_interval_in,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-interval-in","test-interval-in",-1111792597,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_interval_in_test(){var p = cljs_time.core.interval.call(null,cljs_time.core.date_time.call(null,1986,10,14,12,5,4),cljs_time.core.date_time.call(null,1986,11,3,22,2,6));try{var values__6722__auto___7355 = cljs.core.list.call(null,0,cljs_time.core.in_years.call(null,p));var result__6723__auto___7356 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7355);if(cljs.core.truth_(result__6723__auto___7356))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7355),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7355)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7347){if((e7347 instanceof Error))
{var t__6759__auto___7357 = e7347;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7357,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7347;
} else
{}
}
}try{var values__6722__auto___7358 = cljs.core.list.call(null,0,cljs_time.core.in_months.call(null,p));var result__6723__auto___7359 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7358);if(cljs.core.truth_(result__6723__auto___7359))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7358),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"in-months","in-months",500359508,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7358)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"in-months","in-months",500359508,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7348){if((e7348 instanceof Error))
{var t__6759__auto___7360 = e7348;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7360,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"in-months","in-months",500359508,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7348;
} else
{}
}
}try{var values__6722__auto___7361 = cljs.core.list.call(null,2,cljs_time.core.in_weeks.call(null,p));var result__6723__auto___7362 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7361);if(cljs.core.truth_(result__6723__auto___7362))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7361),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),2,cljs.core.list(new cljs.core.Symbol(null,"in-weeks","in-weeks",1208404496,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7361)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),2,cljs.core.list(new cljs.core.Symbol(null,"in-weeks","in-weeks",1208404496,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7349){if((e7349 instanceof Error))
{var t__6759__auto___7363 = e7349;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7363,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),2,cljs.core.list(new cljs.core.Symbol(null,"in-weeks","in-weeks",1208404496,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7349;
} else
{}
}
}try{var values__6722__auto___7364 = cljs.core.list.call(null,20,cljs_time.core.in_days.call(null,p));var result__6723__auto___7365 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7364);if(cljs.core.truth_(result__6723__auto___7365))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7364),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),20,cljs.core.list(new cljs.core.Symbol(null,"in-days","in-days",251915704,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7364)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),20,cljs.core.list(new cljs.core.Symbol(null,"in-days","in-days",251915704,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7350){if((e7350 instanceof Error))
{var t__6759__auto___7366 = e7350;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7366,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),20,cljs.core.list(new cljs.core.Symbol(null,"in-days","in-days",251915704,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7350;
} else
{}
}
}try{var values__6722__auto___7367 = cljs.core.list.call(null,489,cljs_time.core.in_hours.call(null,p));var result__6723__auto___7368 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7367);if(cljs.core.truth_(result__6723__auto___7368))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7367),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),489,cljs.core.list(new cljs.core.Symbol(null,"in-hours","in-hours",1194865184,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7367)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),489,cljs.core.list(new cljs.core.Symbol(null,"in-hours","in-hours",1194865184,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7351){if((e7351 instanceof Error))
{var t__6759__auto___7369 = e7351;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7369,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),489,cljs.core.list(new cljs.core.Symbol(null,"in-hours","in-hours",1194865184,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7351;
} else
{}
}
}try{var values__6722__auto___7370 = cljs.core.list.call(null,29397,cljs_time.core.in_minutes.call(null,p));var result__6723__auto___7371 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7370);if(cljs.core.truth_(result__6723__auto___7371))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7370),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29397,cljs.core.list(new cljs.core.Symbol(null,"in-minutes","in-minutes",130847216,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7370)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29397,cljs.core.list(new cljs.core.Symbol(null,"in-minutes","in-minutes",130847216,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7352){if((e7352 instanceof Error))
{var t__6759__auto___7372 = e7352;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7372,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29397,cljs.core.list(new cljs.core.Symbol(null,"in-minutes","in-minutes",130847216,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7352;
} else
{}
}
}try{var values__6722__auto___7373 = cljs.core.list.call(null,1763822,cljs_time.core.in_seconds.call(null,p));var result__6723__auto___7374 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7373);if(cljs.core.truth_(result__6723__auto___7374))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7373),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1763822,cljs.core.list(new cljs.core.Symbol(null,"in-seconds","in-seconds",1036042128,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7373)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1763822,cljs.core.list(new cljs.core.Symbol(null,"in-seconds","in-seconds",1036042128,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7353){if((e7353 instanceof Error))
{var t__6759__auto___7375 = e7353;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7375,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1763822,cljs.core.list(new cljs.core.Symbol(null,"in-seconds","in-seconds",1036042128,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7353;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,1763822000,cljs_time.core.in_millis.call(null,p));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1763822000,cljs.core.list(new cljs.core.Symbol(null,"in-millis","in-millis",494751143,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1763822000,cljs.core.list(new cljs.core.Symbol(null,"in-millis","in-millis",494751143,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
return result__6723__auto__;
}catch (e7354){if((e7354 instanceof Error))
{var t__6759__auto__ = e7354;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1763822000,cljs.core.list(new cljs.core.Symbol(null,"in-millis","in-millis",494751143,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7354;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_interval_in);
cljs_time.core_test.test_interval_in_bigger = (function test_interval_in_bigger(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_interval_in_bigger);
});
cljs_time.core_test.test_interval_in_bigger = cljs.core.vary_meta.call(null,cljs_time.core_test.test_interval_in_bigger,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-interval-in-bigger","test-interval-in-bigger",-1538676792,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_interval_in_bigger_test(){var p = cljs_time.core.interval.call(null,cljs_time.core.date_time.call(null,1986,10,14,12,5,4),cljs_time.core.date_time.call(null,1987,11,3,22,2,6));try{var values__6722__auto___7386 = cljs.core.list.call(null,1,cljs_time.core.in_years.call(null,p));var result__6723__auto___7387 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7386);if(cljs.core.truth_(result__6723__auto___7387))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7386),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7386)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7381){if((e7381 instanceof Error))
{var t__6759__auto___7388 = e7381;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7388,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,cljs.core.list(new cljs.core.Symbol(null,"in-years","in-years",1210247911,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7381;
} else
{}
}
}try{var values__6722__auto___7389 = cljs.core.list.call(null,12,cljs_time.core.in_months.call(null,p));var result__6723__auto___7390 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7389);if(cljs.core.truth_(result__6723__auto___7390))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7389),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),12,cljs.core.list(new cljs.core.Symbol(null,"in-months","in-months",500359508,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7389)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),12,cljs.core.list(new cljs.core.Symbol(null,"in-months","in-months",500359508,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7382){if((e7382 instanceof Error))
{var t__6759__auto___7391 = e7382;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7391,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),12,cljs.core.list(new cljs.core.Symbol(null,"in-months","in-months",500359508,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7382;
} else
{}
}
}try{var values__6722__auto___7392 = cljs.core.list.call(null,55,cljs_time.core.in_weeks.call(null,p));var result__6723__auto___7393 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7392);if(cljs.core.truth_(result__6723__auto___7393))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7392),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),55,cljs.core.list(new cljs.core.Symbol(null,"in-weeks","in-weeks",1208404496,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7392)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),55,cljs.core.list(new cljs.core.Symbol(null,"in-weeks","in-weeks",1208404496,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7383){if((e7383 instanceof Error))
{var t__6759__auto___7394 = e7383;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7394,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),55,cljs.core.list(new cljs.core.Symbol(null,"in-weeks","in-weeks",1208404496,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7383;
} else
{}
}
}try{var values__6722__auto___7395 = cljs.core.list.call(null,385,cljs_time.core.in_days.call(null,p));var result__6723__auto___7396 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7395);if(cljs.core.truth_(result__6723__auto___7396))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7395),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),385,cljs.core.list(new cljs.core.Symbol(null,"in-days","in-days",251915704,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7395)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),385,cljs.core.list(new cljs.core.Symbol(null,"in-days","in-days",251915704,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
}catch (e7384){if((e7384 instanceof Error))
{var t__6759__auto___7397 = e7384;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7397,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),385,cljs.core.list(new cljs.core.Symbol(null,"in-days","in-days",251915704,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7384;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,9249,cljs_time.core.in_hours.call(null,p));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),9249,cljs.core.list(new cljs.core.Symbol(null,"in-hours","in-hours",1194865184,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),9249,cljs.core.list(new cljs.core.Symbol(null,"in-hours","in-hours",1194865184,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
}
return result__6723__auto__;
}catch (e7385){if((e7385 instanceof Error))
{var t__6759__auto__ = e7385;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),9249,cljs.core.list(new cljs.core.Symbol(null,"in-hours","in-hours",1194865184,null),new cljs.core.Symbol(null,"p","p",-1640531415,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7385;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_interval_in_bigger);
cljs_time.core_test.test_within_QMARK_ = (function test_within_QMARK_(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_within_QMARK_);
});
cljs_time.core_test.test_within_QMARK_ = cljs.core.vary_meta.call(null,cljs_time.core_test.test_within_QMARK_,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-within?","test-within?",1481365682,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_within_QMARK__test(){var d1 = cljs_time.core.date_time.call(null,1985);var d2 = cljs_time.core.date_time.call(null,1986);var d3 = cljs_time.core.date_time.call(null,1987);try{var values__6722__auto___7406 = cljs.core.list.call(null,cljs_time.core.interval.call(null,d1,d3),d2);var result__6723__auto___7407 = cljs.core.apply.call(null,cljs_time.core.within_QMARK_,values__6722__auto___7406);if(cljs.core.truth_(result__6723__auto___7407))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core.within_QMARK_,values__6722__auto___7406),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),new cljs.core.Symbol(null,"d2","d2",-1640528377,null))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"within?","within?",-285383955,null),values__6722__auto___7406)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),new cljs.core.Symbol(null,"d2","d2",-1640528377,null))], true));
}
}catch (e7402){if((e7402 instanceof Error))
{var t__6759__auto___7408 = e7402;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7408,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),new cljs.core.Symbol(null,"d2","d2",-1640528377,null))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7402;
} else
{}
}
}try{var values__6722__auto___7409 = cljs.core.list.call(null,cljs_time.core.within_QMARK_.call(null,cljs_time.core.interval.call(null,d1,d2),d3));var result__6723__auto___7410 = cljs.core.apply.call(null,cljs.core.not,values__6722__auto___7409);if(cljs.core.truth_(result__6723__auto___7410))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto___7409),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto___7409)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
}
}catch (e7403){if((e7403 instanceof Error))
{var t__6759__auto___7411 = e7403;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7411,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7403;
} else
{}
}
}try{var values__6722__auto___7412 = cljs.core.list.call(null,cljs_time.core.within_QMARK_.call(null,cljs_time.core.interval.call(null,d1,d2),d2));var result__6723__auto___7413 = cljs.core.apply.call(null,cljs.core.not,values__6722__auto___7412);if(cljs.core.truth_(result__6723__auto___7413))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto___7412),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto___7412)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)))], true));
}
}catch (e7404){if((e7404 instanceof Error))
{var t__6759__auto___7414 = e7404;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7414,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7404;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.within_QMARK_.call(null,cljs_time.core.interval.call(null,d2,d3),d1));var result__6723__auto__ = cljs.core.apply.call(null,cljs.core.not,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),new cljs.core.Symbol(null,"d1","d1",-1640528378,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),new cljs.core.Symbol(null,"d1","d1",-1640528378,null)))], true));
}
return result__6723__auto__;
}catch (e7405){if((e7405 instanceof Error))
{var t__6759__auto__ = e7405;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"within?","within?",-285383955,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),new cljs.core.Symbol(null,"d1","d1",-1640528378,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7405;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_within_QMARK_);
cljs_time.core_test.test_overlaps_QMARK_ = (function test_overlaps_QMARK_(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_overlaps_QMARK_);
});
cljs_time.core_test.test_overlaps_QMARK_ = cljs.core.vary_meta.call(null,cljs_time.core_test.test_overlaps_QMARK_,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-overlaps?","test-overlaps?",-1061949711,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_overlaps_QMARK__test(){var d1 = cljs_time.core.date_time.call(null,1985);var d2 = cljs_time.core.date_time.call(null,1986);var d3 = cljs_time.core.date_time.call(null,1987);var d4 = cljs_time.core.date_time.call(null,1988);try{var values__6722__auto___7423 = cljs.core.list.call(null,cljs_time.core.interval.call(null,d1,d3),cljs_time.core.interval.call(null,d2,d4));var result__6723__auto___7424 = cljs.core.apply.call(null,cljs_time.core.overlaps_QMARK_,values__6722__auto___7423);if(cljs.core.truth_(result__6723__auto___7424))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core.overlaps_QMARK_,values__6722__auto___7423),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),values__6722__auto___7423)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null)))], true));
}
}catch (e7419){if((e7419 instanceof Error))
{var t__6759__auto___7425 = e7419;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7425,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7419;
} else
{}
}
}try{var values__6722__auto___7426 = cljs.core.list.call(null,cljs_time.core.interval.call(null,d1,d3),cljs_time.core.interval.call(null,d2,d3));var result__6723__auto___7427 = cljs.core.apply.call(null,cljs_time.core.overlaps_QMARK_,values__6722__auto___7426);if(cljs.core.truth_(result__6723__auto___7427))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core.overlaps_QMARK_,values__6722__auto___7426),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),values__6722__auto___7426)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
}
}catch (e7420){if((e7420 instanceof Error))
{var t__6759__auto___7428 = e7420;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7428,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7420;
} else
{}
}
}try{var values__6722__auto___7429 = cljs.core.list.call(null,cljs_time.core.overlaps_QMARK_.call(null,cljs_time.core.interval.call(null,d1,d2),cljs_time.core.interval.call(null,d2,d3)));var result__6723__auto___7430 = cljs.core.apply.call(null,cljs.core.not,values__6722__auto___7429);if(cljs.core.truth_(result__6723__auto___7430))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto___7429),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto___7429)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null))))], true));
}
}catch (e7421){if((e7421 instanceof Error))
{var t__6759__auto___7431 = e7421;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7431,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7421;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.overlaps_QMARK_.call(null,cljs_time.core.interval.call(null,d1,d2),cljs_time.core.interval.call(null,d3,d4)));var result__6723__auto__ = cljs.core.apply.call(null,cljs.core.not,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null))))], true));
}
return result__6723__auto__;
}catch (e7422){if((e7422 instanceof Error))
{var t__6759__auto__ = e7422;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"overlaps?","overlaps?",1898698348,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7422;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_overlaps_QMARK_);
cljs_time.core_test.test_abuts_QMARK_ = (function test_abuts_QMARK_(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_abuts_QMARK_);
});
cljs_time.core_test.test_abuts_QMARK_ = cljs.core.vary_meta.call(null,cljs_time.core_test.test_abuts_QMARK_,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-abuts?","test-abuts?",456309760,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_abuts_QMARK__test(){var d1 = cljs_time.core.date_time.call(null,1985);var d2 = cljs_time.core.date_time.call(null,1986);var d3 = cljs_time.core.date_time.call(null,1987);var d4 = cljs_time.core.date_time.call(null,1988);try{var values__6722__auto___7440 = cljs.core.list.call(null,cljs_time.core.interval.call(null,d1,d2),cljs_time.core.interval.call(null,d2,d3));var result__6723__auto___7441 = cljs.core.apply.call(null,cljs_time.core.abuts_QMARK_,values__6722__auto___7440);if(cljs.core.truth_(result__6723__auto___7441))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core.abuts_QMARK_,values__6722__auto___7440),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),values__6722__auto___7440)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
}
}catch (e7436){if((e7436 instanceof Error))
{var t__6759__auto___7442 = e7436;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7442,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7436;
} else
{}
}
}try{var values__6722__auto___7443 = cljs.core.list.call(null,cljs_time.core.abuts_QMARK_.call(null,cljs_time.core.interval.call(null,d1,d2),cljs_time.core.interval.call(null,d3,d4)));var result__6723__auto___7444 = cljs.core.apply.call(null,cljs.core.not,values__6722__auto___7443);if(cljs.core.truth_(result__6723__auto___7444))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto___7443),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto___7443)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null))))], true));
}
}catch (e7437){if((e7437 instanceof Error))
{var t__6759__auto___7445 = e7437;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7445,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7437;
} else
{}
}
}try{var values__6722__auto___7446 = cljs.core.list.call(null,cljs_time.core.abuts_QMARK_.call(null,cljs_time.core.interval.call(null,d1,d3),cljs_time.core.interval.call(null,d2,d3)));var result__6723__auto___7447 = cljs.core.apply.call(null,cljs.core.not,values__6722__auto___7446);if(cljs.core.truth_(result__6723__auto___7447))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core.not,values__6722__auto___7446),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),values__6722__auto___7446)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null))))], true));
}
}catch (e7438){if((e7438 instanceof Error))
{var t__6759__auto___7448 = e7438;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7448,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7438;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.interval.call(null,d2,d3),cljs_time.core.interval.call(null,d1,d2));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core.abuts_QMARK_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core.abuts_QMARK_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)))], true));
}
return result__6723__auto__;
}catch (e7439){if((e7439 instanceof Error))
{var t__6759__auto__ = e7439;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"abuts?","abuts?",1230601829,null),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null)),cljs.core.list(new cljs.core.Symbol(null,"interval","interval",-1070113154,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7439;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_abuts_QMARK_);
cljs_time.core_test.mins_ago_test = (function mins_ago_test(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.mins_ago_test);
});
cljs_time.core_test.mins_ago_test = cljs.core.vary_meta.call(null,cljs_time.core_test.mins_ago_test,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"mins-ago-test","mins-ago-test",-2143920005,null),new cljs.core.Keyword(null,"test","test",1017460740),(function mins_ago_test_test(){try{var values__6722__auto__ = cljs.core.list.call(null,5,cljs_time.core.mins_ago.call(null,cljs_time.core.minus.call(null,cljs_time.core.now.call(null),cljs_time.core.minutes.call(null,5))));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),5,cljs.core.list(new cljs.core.Symbol(null,"mins-ago","mins-ago",1302688598,null),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"now","now",-1640422257,null)),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),5))))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),5,cljs.core.list(new cljs.core.Symbol(null,"mins-ago","mins-ago",1302688598,null),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"now","now",-1640422257,null)),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),5))))], true));
}
return result__6723__auto__;
}catch (e7450){if((e7450 instanceof Error))
{var t__6759__auto__ = e7450;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),5,cljs.core.list(new cljs.core.Symbol(null,"mins-ago","mins-ago",1302688598,null),cljs.core.list(new cljs.core.Symbol(null,"minus","minus",-1536630231,null),cljs.core.list(new cljs.core.Symbol(null,"now","now",-1640422257,null)),cljs.core.list(new cljs.core.Symbol(null,"minutes","minutes",-575629672,null),5))))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7450;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.mins_ago_test);
cljs_time.core_test.test_last_day_of_the_month = (function test_last_day_of_the_month(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_last_day_of_the_month);
});
cljs_time.core_test.test_last_day_of_the_month = cljs.core.vary_meta.call(null,cljs_time.core_test.test_last_day_of_the_month,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-last-day-of-the-month","test-last-day-of-the-month",-752783020,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_last_day_of_the_month_test(){var d1 = cljs_time.core.date_time.call(null,2012,1,31);var d2 = cljs_time.core.date_time.call(null,2012,2,29);var d3 = cljs_time.core.date_time.call(null,2012,3,31);var d4 = cljs_time.core.date_time.call(null,2012,4,30);var d5 = cljs_time.core.date_time.call(null,2012,5,31);var d6 = cljs_time.core.date_time.call(null,2012,6,30);var d7 = cljs_time.core.date_time.call(null,2013,2,28);var d8 = cljs_time.core.date_time.call(null,2016,2,29);try{var values__6722__auto___7471 = cljs.core.list.call(null,d1,cljs_time.core.last_day_of_the_month.call(null,2012,1));var result__6723__auto___7472 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7471);if(cljs.core.truth_(result__6723__auto___7472))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7471),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,1))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7471)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,1))], true));
}
}catch (e7461){if((e7461 instanceof Error))
{var t__6759__auto___7473 = e7461;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7473,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,1))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7461;
} else
{}
}
}try{var values__6722__auto___7474 = cljs.core.list.call(null,d1,cljs_time.core.last_day_of_the_month.call(null,cljs_time.core.date_time.call(null,2012,1,13)));var result__6723__auto___7475 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7474);if(cljs.core.truth_(result__6723__auto___7475))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7474),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,13)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7474)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,13)))], true));
}
}catch (e7462){if((e7462 instanceof Error))
{var t__6759__auto___7476 = e7462;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7476,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,13)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7462;
} else
{}
}
}try{var values__6722__auto___7477 = cljs.core.list.call(null,d2,cljs_time.core.last_day_of_the_month.call(null,2012,2));var result__6723__auto___7478 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7477);if(cljs.core.truth_(result__6723__auto___7478))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7477),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7477)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,2))], true));
}
}catch (e7463){if((e7463 instanceof Error))
{var t__6759__auto___7479 = e7463;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7479,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7463;
} else
{}
}
}try{var values__6722__auto___7480 = cljs.core.list.call(null,d2,cljs_time.core.last_day_of_the_month.call(null,cljs_time.core.date_time.call(null,2012,2,8)));var result__6723__auto___7481 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7480);if(cljs.core.truth_(result__6723__auto___7481))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7480),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,8)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7480)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,8)))], true));
}
}catch (e7464){if((e7464 instanceof Error))
{var t__6759__auto___7482 = e7464;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7482,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,8)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7464;
} else
{}
}
}try{var values__6722__auto___7483 = cljs.core.list.call(null,d3,cljs_time.core.last_day_of_the_month.call(null,2012,3));var result__6723__auto___7484 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7483);if(cljs.core.truth_(result__6723__auto___7484))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7483),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,3))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7483)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,3))], true));
}
}catch (e7465){if((e7465 instanceof Error))
{var t__6759__auto___7485 = e7465;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7485,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,3))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7465;
} else
{}
}
}try{var values__6722__auto___7486 = cljs.core.list.call(null,d4,cljs_time.core.last_day_of_the_month.call(null,2012,4));var result__6723__auto___7487 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7486);if(cljs.core.truth_(result__6723__auto___7487))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7486),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,4))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7486)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,4))], true));
}
}catch (e7466){if((e7466 instanceof Error))
{var t__6759__auto___7488 = e7466;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7488,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,4))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7466;
} else
{}
}
}try{var values__6722__auto___7489 = cljs.core.list.call(null,d5,cljs_time.core.last_day_of_the_month.call(null,2012,5));var result__6723__auto___7490 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7489);if(cljs.core.truth_(result__6723__auto___7490))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7489),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d5","d5",-1640528374,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,5))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7489)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d5","d5",-1640528374,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,5))], true));
}
}catch (e7467){if((e7467 instanceof Error))
{var t__6759__auto___7491 = e7467;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7491,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d5","d5",-1640528374,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,5))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7467;
} else
{}
}
}try{var values__6722__auto___7492 = cljs.core.list.call(null,d6,cljs_time.core.last_day_of_the_month.call(null,2012,6));var result__6723__auto___7493 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7492);if(cljs.core.truth_(result__6723__auto___7493))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7492),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d6","d6",-1640528373,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,6))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7492)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d6","d6",-1640528373,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,6))], true));
}
}catch (e7468){if((e7468 instanceof Error))
{var t__6759__auto___7494 = e7468;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7494,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d6","d6",-1640528373,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2012,6))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7468;
} else
{}
}
}try{var values__6722__auto___7495 = cljs.core.list.call(null,d7,cljs_time.core.last_day_of_the_month.call(null,2013,2));var result__6723__auto___7496 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7495);if(cljs.core.truth_(result__6723__auto___7496))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7495),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d7","d7",-1640528372,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2013,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7495)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d7","d7",-1640528372,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2013,2))], true));
}
}catch (e7469){if((e7469 instanceof Error))
{var t__6759__auto___7497 = e7469;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7497,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d7","d7",-1640528372,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2013,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7469;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,d8,cljs_time.core.last_day_of_the_month.call(null,2016,2));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d8","d8",-1640528371,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2016,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d8","d8",-1640528371,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2016,2))], true));
}
return result__6723__auto__;
}catch (e7470){if((e7470 instanceof Error))
{var t__6759__auto__ = e7470;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d8","d8",-1640528371,null),cljs.core.list(new cljs.core.Symbol(null,"last-day-of-the-month","last-day-of-the-month",1558902863,null),2016,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7470;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_last_day_of_the_month);
cljs_time.core_test.test_number_of_days_in_the_month = (function test_number_of_days_in_the_month(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_number_of_days_in_the_month);
});
cljs_time.core_test.test_number_of_days_in_the_month = cljs.core.vary_meta.call(null,cljs_time.core_test.test_number_of_days_in_the_month,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-number-of-days-in-the-month","test-number-of-days-in-the-month",-103890498,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_number_of_days_in_the_month_test(){try{var values__6722__auto___7518 = cljs.core.list.call(null,31,cljs_time.core.number_of_days_in_the_month.call(null,2012,1));var result__6723__auto___7519 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7518);if(cljs.core.truth_(result__6723__auto___7519))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7518),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,1))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7518)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,1))], true));
}
}catch (e7508){if((e7508 instanceof Error))
{var t__6759__auto___7520 = e7508;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7520,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,1))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7508;
} else
{}
}
}try{var values__6722__auto___7521 = cljs.core.list.call(null,31,cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.date_time.call(null,2012,1,3)));var result__6723__auto___7522 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7521);if(cljs.core.truth_(result__6723__auto___7522))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7521),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,3)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7521)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,3)))], true));
}
}catch (e7509){if((e7509 instanceof Error))
{var t__6759__auto___7523 = e7509;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7523,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,3)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7509;
} else
{}
}
}try{var values__6722__auto___7524 = cljs.core.list.call(null,29,cljs_time.core.number_of_days_in_the_month.call(null,2012,2));var result__6723__auto___7525 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7524);if(cljs.core.truth_(result__6723__auto___7525))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7524),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7524)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,2))], true));
}
}catch (e7510){if((e7510 instanceof Error))
{var t__6759__auto___7526 = e7510;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7526,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7510;
} else
{}
}
}try{var values__6722__auto___7527 = cljs.core.list.call(null,28,cljs_time.core.number_of_days_in_the_month.call(null,2013,2));var result__6723__auto___7528 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7527);if(cljs.core.truth_(result__6723__auto___7528))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7527),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),28,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7527)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),28,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,2))], true));
}
}catch (e7511){if((e7511 instanceof Error))
{var t__6759__auto___7529 = e7511;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7529,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),28,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7511;
} else
{}
}
}try{var values__6722__auto___7530 = cljs.core.list.call(null,30,cljs_time.core.number_of_days_in_the_month.call(null,2012,11));var result__6723__auto___7531 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7530);if(cljs.core.truth_(result__6723__auto___7531))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7530),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),30,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,11))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7530)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),30,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,11))], true));
}
}catch (e7512){if((e7512 instanceof Error))
{var t__6759__auto___7532 = e7512;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7532,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),30,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,11))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7512;
} else
{}
}
}try{var values__6722__auto___7533 = cljs.core.list.call(null,31,cljs_time.core.number_of_days_in_the_month.call(null,2012,3));var result__6723__auto___7534 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7533);if(cljs.core.truth_(result__6723__auto___7534))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7533),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,3))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7533)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,3))], true));
}
}catch (e7513){if((e7513 instanceof Error))
{var t__6759__auto___7535 = e7513;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7535,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,3))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7513;
} else
{}
}
}try{var values__6722__auto___7536 = cljs.core.list.call(null,30,cljs_time.core.number_of_days_in_the_month.call(null,2012,4));var result__6723__auto___7537 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7536);if(cljs.core.truth_(result__6723__auto___7537))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7536),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),30,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,4))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7536)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),30,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,4))], true));
}
}catch (e7514){if((e7514 instanceof Error))
{var t__6759__auto___7538 = e7514;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7538,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),30,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2012,4))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7514;
} else
{}
}
}try{var values__6722__auto___7539 = cljs.core.list.call(null,31,cljs_time.core.number_of_days_in_the_month.call(null,2013,12));var result__6723__auto___7540 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7539);if(cljs.core.truth_(result__6723__auto___7540))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7539),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,12))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7539)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,12))], true));
}
}catch (e7515){if((e7515 instanceof Error))
{var t__6759__auto___7541 = e7515;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7541,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),31,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,12))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7515;
} else
{}
}
}try{var values__6722__auto___7542 = cljs.core.list.call(null,28,cljs_time.core.number_of_days_in_the_month.call(null,2013,2));var result__6723__auto___7543 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7542);if(cljs.core.truth_(result__6723__auto___7543))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7542),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),28,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7542)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),28,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,2))], true));
}
}catch (e7516){if((e7516 instanceof Error))
{var t__6759__auto___7544 = e7516;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7544,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),28,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2013,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7516;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,29,cljs_time.core.number_of_days_in_the_month.call(null,2016,2));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2016,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2016,2))], true));
}
return result__6723__auto__;
}catch (e7517){if((e7517 instanceof Error))
{var t__6759__auto__ = e7517;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),29,cljs.core.list(new cljs.core.Symbol(null,"number-of-days-in-the-month","number-of-days-in-the-month",-1449664391,null),2016,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7517;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_number_of_days_in_the_month);
cljs_time.core_test.test_first_day_of_the_month = (function test_first_day_of_the_month(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_first_day_of_the_month);
});
cljs_time.core_test.test_first_day_of_the_month = cljs.core.vary_meta.call(null,cljs_time.core_test.test_first_day_of_the_month,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-first-day-of-the-month","test-first-day-of-the-month",-2101324016,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_first_day_of_the_month_test(){var d1 = cljs_time.core.date_time.call(null,2012,1,1);var d2 = cljs_time.core.date_time.call(null,2012,2,1);var d3 = cljs_time.core.date_time.call(null,2012,3,1);var d4 = cljs_time.core.date_time.call(null,2012,4,1);var d5 = cljs_time.core.date_time.call(null,2012,5,1);var d6 = cljs_time.core.date_time.call(null,2012,6,1);var d7 = cljs_time.core.date_time.call(null,2013,2,1);var d8 = cljs_time.core.date_time.call(null,2016,2,1);try{var values__6722__auto___7565 = cljs.core.list.call(null,d1,cljs_time.core.first_day_of_the_month.call(null,2012,1));var result__6723__auto___7566 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7565);if(cljs.core.truth_(result__6723__auto___7566))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7565),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,1))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7565)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,1))], true));
}
}catch (e7555){if((e7555 instanceof Error))
{var t__6759__auto___7567 = e7555;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7567,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,1))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7555;
} else
{}
}
}try{var values__6722__auto___7568 = cljs.core.list.call(null,d1,cljs_time.core.first_day_of_the_month.call(null,cljs_time.core.date_time.call(null,2012,1,24)));var result__6723__auto___7569 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7568);if(cljs.core.truth_(result__6723__auto___7569))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7568),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,24)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7568)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,24)))], true));
}
}catch (e7556){if((e7556 instanceof Error))
{var t__6759__auto___7570 = e7556;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7570,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,24)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7556;
} else
{}
}
}try{var values__6722__auto___7571 = cljs.core.list.call(null,d2,cljs_time.core.first_day_of_the_month.call(null,2012,2));var result__6723__auto___7572 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7571);if(cljs.core.truth_(result__6723__auto___7572))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7571),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7571)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,2))], true));
}
}catch (e7557){if((e7557 instanceof Error))
{var t__6759__auto___7573 = e7557;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7573,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7557;
} else
{}
}
}try{var values__6722__auto___7574 = cljs.core.list.call(null,d2,cljs_time.core.first_day_of_the_month.call(null,cljs_time.core.date_time.call(null,2012,2,24)));var result__6723__auto___7575 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7574);if(cljs.core.truth_(result__6723__auto___7575))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7574),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,24)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7574)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,24)))], true));
}
}catch (e7558){if((e7558 instanceof Error))
{var t__6759__auto___7576 = e7558;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7576,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d2","d2",-1640528377,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,24)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7558;
} else
{}
}
}try{var values__6722__auto___7577 = cljs.core.list.call(null,d3,cljs_time.core.first_day_of_the_month.call(null,2012,3));var result__6723__auto___7578 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7577);if(cljs.core.truth_(result__6723__auto___7578))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7577),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,3))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7577)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,3))], true));
}
}catch (e7559){if((e7559 instanceof Error))
{var t__6759__auto___7579 = e7559;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7579,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d3","d3",-1640528376,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,3))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7559;
} else
{}
}
}try{var values__6722__auto___7580 = cljs.core.list.call(null,d4,cljs_time.core.first_day_of_the_month.call(null,2012,4));var result__6723__auto___7581 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7580);if(cljs.core.truth_(result__6723__auto___7581))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7580),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,4))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7580)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,4))], true));
}
}catch (e7560){if((e7560 instanceof Error))
{var t__6759__auto___7582 = e7560;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7582,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d4","d4",-1640528375,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,4))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7560;
} else
{}
}
}try{var values__6722__auto___7583 = cljs.core.list.call(null,d5,cljs_time.core.first_day_of_the_month.call(null,2012,5));var result__6723__auto___7584 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7583);if(cljs.core.truth_(result__6723__auto___7584))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7583),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d5","d5",-1640528374,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,5))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7583)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d5","d5",-1640528374,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,5))], true));
}
}catch (e7561){if((e7561 instanceof Error))
{var t__6759__auto___7585 = e7561;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7585,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d5","d5",-1640528374,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,5))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7561;
} else
{}
}
}try{var values__6722__auto___7586 = cljs.core.list.call(null,d6,cljs_time.core.first_day_of_the_month.call(null,2012,6));var result__6723__auto___7587 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7586);if(cljs.core.truth_(result__6723__auto___7587))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7586),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d6","d6",-1640528373,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,6))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7586)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d6","d6",-1640528373,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,6))], true));
}
}catch (e7562){if((e7562 instanceof Error))
{var t__6759__auto___7588 = e7562;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7588,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d6","d6",-1640528373,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2012,6))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7562;
} else
{}
}
}try{var values__6722__auto___7589 = cljs.core.list.call(null,d7,cljs_time.core.first_day_of_the_month.call(null,2013,2));var result__6723__auto___7590 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7589);if(cljs.core.truth_(result__6723__auto___7590))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7589),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d7","d7",-1640528372,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2013,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7589)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d7","d7",-1640528372,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2013,2))], true));
}
}catch (e7563){if((e7563 instanceof Error))
{var t__6759__auto___7591 = e7563;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7591,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d7","d7",-1640528372,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2013,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7563;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,d8,cljs_time.core.first_day_of_the_month.call(null,2016,2));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d8","d8",-1640528371,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2016,2))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d8","d8",-1640528371,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2016,2))], true));
}
return result__6723__auto__;
}catch (e7564){if((e7564 instanceof Error))
{var t__6759__auto__ = e7564;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d8","d8",-1640528371,null),cljs.core.list(new cljs.core.Symbol(null,"first-day-of-the-month","first-day-of-the-month",841461621,null),2016,2))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7564;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_first_day_of_the_month);
cljs_time.core_test.test_today_at = (function test_today_at(){return cemerick.cljs.test.test_var.call(null,cljs_time.core_test.test_today_at);
});
cljs_time.core_test.test_today_at = cljs.core.vary_meta.call(null,cljs_time.core_test.test_today_at,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-today-at","test-today-at",281476819,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_today_at_test(){var n = cljs_time.core.now.call(null);var y = cljs_time.core.year.call(null,n);var m = cljs_time.core.month.call(null,n);var d = cljs_time.core.day.call(null,n);var d1 = cljs_time.core.date_time.call(null,y,m,d,13,0);try{var values__6722__auto___7596 = cljs.core.list.call(null,d1,cljs_time.core.today_at.call(null,13,0));var result__6723__auto___7597 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7596);if(cljs.core.truth_(result__6723__auto___7597))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7596),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"today-at","today-at",1346812920,null),13,0))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7596)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"today-at","today-at",1346812920,null),13,0))], true));
}
}catch (e7594){if((e7594 instanceof Error))
{var t__6759__auto___7598 = e7594;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7598,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"today-at","today-at",1346812920,null),13,0))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7594;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,d1,cljs_time.core.today_at.call(null,13,0,0));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"today-at","today-at",1346812920,null),13,0,0))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"today-at","today-at",1346812920,null),13,0,0))], true));
}
return result__6723__auto__;
}catch (e7595){if((e7595 instanceof Error))
{var t__6759__auto__ = e7595;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"d1","d1",-1640528378,null),cljs.core.list(new cljs.core.Symbol(null,"today-at","today-at",1346812920,null),13,0,0))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7595;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.core-test","cljs-time.core-test",1342954899,null),cljs_time.core_test.test_today_at);
