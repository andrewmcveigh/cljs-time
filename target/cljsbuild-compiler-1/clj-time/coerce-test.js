goog.provide('clj_time.coerce_test');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
clj_time.coerce_test.test_from_date = (function test_from_date(){return cemerick.cljs.test.test_var.call(null,clj_time.coerce_test.test_from_date);
});
clj_time.coerce_test.test_from_date = cljs.core.vary_meta.call(null,clj_time.coerce_test.test_from_date,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-from-date","test-from-date",-272185809,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_from_date_test(){var dt = cljs_time.coerce.from_long.call(null,893462400000);var d = cljs_time.coerce.to_date.call(null,dt);try{var object__6742__auto___6901 = d;var result__6743__auto___6902 = (object__6742__auto___6901 instanceof Date);if(result__6743__auto___6902)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.type.call(null,object__6742__auto___6901),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol("js","Date","js/Date",-1638187440,null),new cljs.core.Symbol(null,"d","d",-1640531427,null))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.type.call(null,object__6742__auto___6901),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol("js","Date","js/Date",-1638187440,null),new cljs.core.Symbol(null,"d","d",-1640531427,null))], true));
}
}catch (e6899){if((e6899 instanceof Error))
{var t__6759__auto___6903 = e6899;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6903,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol("js","Date","js/Date",-1638187440,null),new cljs.core.Symbol(null,"d","d",-1640531427,null))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6899;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,dt,cljs_time.coerce.from_date.call(null,d));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"dt","dt",-1640528311,null),cljs.core.list(new cljs.core.Symbol(null,"from-date","from-date",-1606505046,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"dt","dt",-1640528311,null),cljs.core.list(new cljs.core.Symbol(null,"from-date","from-date",-1606505046,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
}
return result__6723__auto__;
}catch (e6900){if((e6900 instanceof Error))
{var t__6759__auto__ = e6900;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"dt","dt",-1640528311,null),cljs.core.list(new cljs.core.Symbol(null,"from-date","from-date",-1606505046,null),new cljs.core.Symbol(null,"d","d",-1640531427,null)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6900;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"clj-time.coerce-test","clj-time.coerce-test",-1514717656,null),clj_time.coerce_test.test_from_date);
clj_time.coerce_test.test_from_long = (function test_from_long(){return cemerick.cljs.test.test_var.call(null,clj_time.coerce_test.test_from_long);
});
clj_time.coerce_test.test_from_long = cljs.core.vary_meta.call(null,clj_time.coerce_test.test_from_long,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-from-long","test-from-long",-271934211,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_from_long_test(){try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1998,4,25),cljs_time.coerce.from_long.call(null,893462400000));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"from-long","from-long",-1606253448,null),893462400000))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"from-long","from-long",-1606253448,null),893462400000))], true));
}
return result__6723__auto__;
}catch (e6905){if((e6905 instanceof Error))
{var t__6759__auto__ = e6905;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"from-long","from-long",-1606253448,null),893462400000))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6905;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"clj-time.coerce-test","clj-time.coerce-test",-1514717656,null),clj_time.coerce_test.test_from_long);
clj_time.coerce_test.test_from_string = (function test_from_string(){return cemerick.cljs.test.test_var.call(null,clj_time.coerce_test.test_from_string);
});
clj_time.coerce_test.test_from_string = cljs.core.vary_meta.call(null,clj_time.coerce_test.test_from_string,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-from-string","test-from-string",-473357166,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_from_string_test(){try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.coerce.from_string.call(null,"1998-04-25T00:00:00.000Z"),cljs_time.core.date_time.call(null,1998,4,25));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"from-string","from-string",1441077581,null),"1998-04-25T00:00:00.000Z"),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"from-string","from-string",1441077581,null),"1998-04-25T00:00:00.000Z"),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25))], true));
}
return result__6723__auto__;
}catch (e6907){if((e6907 instanceof Error))
{var t__6759__auto__ = e6907;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"from-string","from-string",1441077581,null),"1998-04-25T00:00:00.000Z"),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6907;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"clj-time.coerce-test","clj-time.coerce-test",-1514717656,null),clj_time.coerce_test.test_from_string);
clj_time.coerce_test.test_to_date = (function test_to_date(){return cemerick.cljs.test.test_var.call(null,clj_time.coerce_test.test_to_date);
});
clj_time.coerce_test.test_to_date = cljs.core.vary_meta.call(null,clj_time.coerce_test.test_to_date,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-to-date","test-to-date",-1075067074,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_to_date_test(){try{var value__6725__auto___6926 = (cljs_time.coerce.to_date.call(null,null) == null);if(value__6725__auto___6926)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6926,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),null))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6926,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),null))], true));
}
}catch (e6917){if((e6917 instanceof Error))
{var t__6759__auto___6927 = e6917;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6927,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),null))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6917;
} else
{}
}
}try{var value__6725__auto___6928 = (cljs_time.coerce.to_date.call(null,"") == null);if(value__6725__auto___6928)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6928,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),""))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6928,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),""))], true));
}
}catch (e6918){if((e6918 instanceof Error))
{var t__6759__auto___6929 = e6918;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6929,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),""))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6918;
} else
{}
}
}try{var value__6725__auto___6930 = (cljs_time.coerce.to_date.call(null,"x") == null);if(value__6725__auto___6930)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6930,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),"x"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6930,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),"x"))], true));
}
}catch (e6919){if((e6919 instanceof Error))
{var t__6759__auto___6931 = e6919;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6931,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),"x"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6919;
} else
{}
}
}try{var values__6722__auto___6932 = cljs.core.list.call(null,(new Date(893462400000)),cljs_time.coerce.to_date.call(null,cljs_time.core.date_time.call(null,1998,4,25)));var result__6723__auto___6933 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6932);if(cljs.core.truth_(result__6723__auto___6933))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6932),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6932)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
}
}catch (e6920){if((e6920 instanceof Error))
{var t__6759__auto___6934 = e6920;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6934,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6920;
} else
{}
}
}try{var values__6722__auto___6935 = cljs.core.list.call(null,(new Date(893462400000)),cljs_time.coerce.to_date.call(null,cljs_time.core.date_midnight.call(null,1998,4,25)));var result__6723__auto___6936 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6935);if(cljs.core.truth_(result__6723__auto___6936))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6935),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6935)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25)))], true));
}
}catch (e6921){if((e6921 instanceof Error))
{var t__6759__auto___6937 = e6921;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6937,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6921;
} else
{}
}
}try{var values__6722__auto___6938 = cljs.core.list.call(null,(new Date(893462400000)),cljs_time.coerce.to_date.call(null,(new Date(893462400000))));var result__6723__auto___6939 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6938);if(cljs.core.truth_(result__6723__auto___6939))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6938),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6938)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
}
}catch (e6922){if((e6922 instanceof Error))
{var t__6759__auto___6940 = e6922;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6940,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6922;
} else
{}
}
}try{var values__6722__auto___6941 = cljs.core.list.call(null,(new Date(cljs.core.long$.call(null,0))),cljs_time.coerce.to_date.call(null,0));var result__6723__auto___6942 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6941);if(cljs.core.truth_(result__6723__auto___6942))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6941),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0)),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),0))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6941)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0)),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),0))], true));
}
}catch (e6923){if((e6923 instanceof Error))
{var t__6759__auto___6943 = e6923;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6943,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0)),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),0))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6923;
} else
{}
}
}try{var values__6722__auto___6944 = cljs.core.list.call(null,(new Date(893462400000)),cljs_time.coerce.to_date.call(null,893462400000));var result__6723__auto___6945 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6944);if(cljs.core.truth_(result__6723__auto___6945))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6944),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),893462400000))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6944)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),893462400000))], true));
}
}catch (e6924){if((e6924 instanceof Error))
{var t__6759__auto___6946 = e6924;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6946,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),893462400000))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6924;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,(new Date(893462400000)),cljs_time.coerce.to_date.call(null,"1998-04-25T00:00:00.000Z"));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),"1998-04-25T00:00:00.000Z"))], true));
}
return result__6723__auto__;
}catch (e6925){if((e6925 instanceof Error))
{var t__6759__auto__ = e6925;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000),cljs.core.list(new cljs.core.Symbol(null,"to-date","to-date",1453150585,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6925;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"clj-time.coerce-test","clj-time.coerce-test",-1514717656,null),clj_time.coerce_test.test_to_date);
clj_time.coerce_test.test_to_date_time = (function test_to_date_time(){return cemerick.cljs.test.test_var.call(null,clj_time.coerce_test.test_to_date_time);
});
clj_time.coerce_test.test_to_date_time = cljs.core.vary_meta.call(null,clj_time.coerce_test.test_to_date_time,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-to-date-time","test-to-date-time",-1211085874,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_to_date_time_test(){try{var value__6725__auto___6967 = (cljs_time.coerce.to_date_time.call(null,null) == null);if(value__6725__auto___6967)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6967,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),null))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6967,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),null))], true));
}
}catch (e6957){if((e6957 instanceof Error))
{var t__6759__auto___6968 = e6957;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6968,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),null))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6957;
} else
{}
}
}try{var value__6725__auto___6969 = (cljs_time.coerce.to_date_time.call(null,"") == null);if(value__6725__auto___6969)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6969,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),""))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6969,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),""))], true));
}
}catch (e6958){if((e6958 instanceof Error))
{var t__6759__auto___6970 = e6958;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6970,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),""))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6958;
} else
{}
}
}try{var value__6725__auto___6971 = (cljs_time.coerce.to_date_time.call(null,"x") == null);if(value__6725__auto___6971)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6971,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),"x"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___6971,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),"x"))], true));
}
}catch (e6959){if((e6959 instanceof Error))
{var t__6759__auto___6972 = e6959;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6972,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),"x"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6959;
} else
{}
}
}try{var values__6722__auto___6973 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1998,4,25),cljs_time.coerce.to_date_time.call(null,cljs_time.core.date_time.call(null,1998,4,25)));var result__6723__auto___6974 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6973);if(cljs.core.truth_(result__6723__auto___6974))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6973),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6973)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
}
}catch (e6960){if((e6960 instanceof Error))
{var t__6759__auto___6975 = e6960;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6975,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6960;
} else
{}
}
}try{var values__6722__auto___6976 = cljs.core.list.call(null,cljs_time.core.date_midnight.call(null,1998,4,25),cljs_time.coerce.to_date_time.call(null,cljs_time.core.date_time.call(null,1998,4,25)));var result__6723__auto___6977 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6976);if(cljs.core.truth_(result__6723__auto___6977))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6976),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6976)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
}
}catch (e6961){if((e6961 instanceof Error))
{var t__6759__auto___6978 = e6961;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6978,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6961;
} else
{}
}
}try{var values__6722__auto___6979 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,2000,1,1,1),cljs_time.core.plus.call(null,cljs_time.coerce.to_date_time.call(null,cljs_time.core.date_midnight.call(null,2000,1,1)),cljs_time.core.hours.call(null,1)));var result__6723__auto___6980 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6979);if(cljs.core.truth_(result__6723__auto___6980))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6979),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2000,1,1,1),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2000,1,1)),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),1)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6979)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2000,1,1,1),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2000,1,1)),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),1)))], true));
}
}catch (e6962){if((e6962 instanceof Error))
{var t__6759__auto___6981 = e6962;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6981,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2000,1,1,1),cljs.core.list(new cljs.core.Symbol(null,"plus","plus",-1637087405,null),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),2000,1,1)),cljs.core.list(new cljs.core.Symbol(null,"hours","hours",-1541062456,null),1)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6962;
} else
{}
}
}try{var values__6722__auto___6982 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1998,4,25),cljs_time.coerce.to_date_time.call(null,(new Date(893462400000))));var result__6723__auto___6983 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6982);if(cljs.core.truth_(result__6723__auto___6983))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6982),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6982)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
}
}catch (e6963){if((e6963 instanceof Error))
{var t__6759__auto___6984 = e6963;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6984,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6963;
} else
{}
}
}try{var values__6722__auto___6985 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1970,1,1),cljs_time.coerce.to_date_time.call(null,0));var result__6723__auto___6986 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6985);if(cljs.core.truth_(result__6723__auto___6986))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6985),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1970,1,1),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),0))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6985)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1970,1,1),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),0))], true));
}
}catch (e6964){if((e6964 instanceof Error))
{var t__6759__auto___6987 = e6964;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6987,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1970,1,1),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),0))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6964;
} else
{}
}
}try{var values__6722__auto___6988 = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1998,4,25),cljs_time.coerce.to_date_time.call(null,893462400000));var result__6723__auto___6989 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___6988);if(cljs.core.truth_(result__6723__auto___6989))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___6988),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),893462400000))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___6988)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),893462400000))], true));
}
}catch (e6965){if((e6965 instanceof Error))
{var t__6759__auto___6990 = e6965;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___6990,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),893462400000))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6965;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,cljs_time.core.date_time.call(null,1998,4,25),cljs_time.coerce.to_date_time.call(null,"1998-04-25T00:00:00.000Z"));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),"1998-04-25T00:00:00.000Z"))], true));
}
return result__6723__auto__;
}catch (e6966){if((e6966 instanceof Error))
{var t__6759__auto__ = e6966;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25),cljs.core.list(new cljs.core.Symbol(null,"to-date-time","to-date-time",-1993150861,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6966;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"clj-time.coerce-test","clj-time.coerce-test",-1514717656,null),clj_time.coerce_test.test_to_date_time);
clj_time.coerce_test.test_to_long = (function test_to_long(){return cemerick.cljs.test.test_var.call(null,clj_time.coerce_test.test_to_long);
});
clj_time.coerce_test.test_to_long = cljs.core.vary_meta.call(null,clj_time.coerce_test.test_to_long,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-to-long","test-to-long",-1074815476,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_to_long_test(){try{var value__6725__auto___7011 = (cljs_time.coerce.to_long.call(null,null) == null);if(value__6725__auto___7011)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7011,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),null))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7011,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),null))], true));
}
}catch (e7001){if((e7001 instanceof Error))
{var t__6759__auto___7012 = e7001;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7012,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),null))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7001;
} else
{}
}
}try{var value__6725__auto___7013 = (cljs_time.coerce.to_long.call(null,"") == null);if(value__6725__auto___7013)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7013,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),""))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7013,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),""))], true));
}
}catch (e7002){if((e7002 instanceof Error))
{var t__6759__auto___7014 = e7002;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7014,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),""))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7002;
} else
{}
}
}try{var value__6725__auto___7015 = (cljs_time.coerce.to_long.call(null,"x") == null);if(value__6725__auto___7015)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7015,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),"x"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7015,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),"x"))], true));
}
}catch (e7003){if((e7003 instanceof Error))
{var t__6759__auto___7016 = e7003;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7016,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),"x"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7003;
} else
{}
}
}try{var values__6722__auto___7017 = cljs.core.list.call(null,893462400000,cljs_time.coerce.to_long.call(null,cljs_time.core.date_time.call(null,1998,4,25)));var result__6723__auto___7018 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7017);if(cljs.core.truth_(result__6723__auto___7018))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7017),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7017)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
}
}catch (e7004){if((e7004 instanceof Error))
{var t__6759__auto___7019 = e7004;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7019,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7004;
} else
{}
}
}try{var values__6722__auto___7020 = cljs.core.list.call(null,0,cljs_time.coerce.to_long.call(null,cljs_time.core.date_midnight.call(null,1970)));var result__6723__auto___7021 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7020);if(cljs.core.truth_(result__6723__auto___7021))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7020),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1970)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7020)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1970)))], true));
}
}catch (e7005){if((e7005 instanceof Error))
{var t__6759__auto___7022 = e7005;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7022,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1970)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7005;
} else
{}
}
}try{var values__6722__auto___7023 = cljs.core.list.call(null,cljs_time.coerce.to_long.call(null,cljs_time.core.date_time.call(null,1993,3,15)),cljs_time.coerce.to_long.call(null,cljs_time.core.date_midnight.call(null,1993,3,15)));var result__6723__auto___7024 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7023);if(cljs.core.truth_(result__6723__auto___7024))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7023),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1993,3,15)),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1993,3,15)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7023)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1993,3,15)),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1993,3,15)))], true));
}
}catch (e7006){if((e7006 instanceof Error))
{var t__6759__auto___7025 = e7006;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7025,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1993,3,15)),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1993,3,15)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7006;
} else
{}
}
}try{var values__6722__auto___7026 = cljs.core.list.call(null,893462400000,cljs_time.coerce.to_long.call(null,(new Date(893462400000))));var result__6723__auto___7027 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7026);if(cljs.core.truth_(result__6723__auto___7027))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7026),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7026)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
}
}catch (e7007){if((e7007 instanceof Error))
{var t__6759__auto___7028 = e7007;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7028,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7007;
} else
{}
}
}try{var values__6722__auto___7029 = cljs.core.list.call(null,cljs.core.long$.call(null,0),cljs_time.coerce.to_long.call(null,0));var result__6723__auto___7030 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7029);if(cljs.core.truth_(result__6723__auto___7030))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7029),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),0))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7029)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),0))], true));
}
}catch (e7008){if((e7008 instanceof Error))
{var t__6759__auto___7031 = e7008;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7031,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0),cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),0))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7008;
} else
{}
}
}try{var values__6722__auto___7032 = cljs.core.list.call(null,893462400000,cljs_time.coerce.to_long.call(null,893462400000));var result__6723__auto___7033 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7032);if(cljs.core.truth_(result__6723__auto___7033))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7032),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),893462400000))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7032)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),893462400000))], true));
}
}catch (e7009){if((e7009 instanceof Error))
{var t__6759__auto___7034 = e7009;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7034,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),893462400000))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7009;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,893462400000,cljs_time.coerce.to_long.call(null,"1998-04-25T00:00:00.000Z"));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),"1998-04-25T00:00:00.000Z"))], true));
}
return result__6723__auto__;
}catch (e7010){if((e7010 instanceof Error))
{var t__6759__auto__ = e7010;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400000,cljs.core.list(new cljs.core.Symbol(null,"to-long","to-long",1453402183,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7010;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"clj-time.coerce-test","clj-time.coerce-test",-1514717656,null),clj_time.coerce_test.test_to_long);
clj_time.coerce_test.test_to_epoch = (function test_to_epoch(){return cemerick.cljs.test.test_var.call(null,clj_time.coerce_test.test_to_epoch);
});
clj_time.coerce_test.test_to_epoch = cljs.core.vary_meta.call(null,clj_time.coerce_test.test_to_epoch,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-to-epoch","test-to-epoch",-1289637045,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_to_epoch_test(){try{var value__6725__auto___7055 = (cljs_time.coerce.to_epoch.call(null,null) == null);if(value__6725__auto___7055)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7055,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),null))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7055,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),null))], true));
}
}catch (e7045){if((e7045 instanceof Error))
{var t__6759__auto___7056 = e7045;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7056,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),null))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7045;
} else
{}
}
}try{var value__6725__auto___7057 = (cljs_time.coerce.to_epoch.call(null,"") == null);if(value__6725__auto___7057)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7057,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),""))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7057,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),""))], true));
}
}catch (e7046){if((e7046 instanceof Error))
{var t__6759__auto___7058 = e7046;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7058,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),""))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7046;
} else
{}
}
}try{var value__6725__auto___7059 = (cljs_time.coerce.to_epoch.call(null,"x") == null);if(value__6725__auto___7059)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7059,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),"x"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7059,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),"x"))], true));
}
}catch (e7047){if((e7047 instanceof Error))
{var t__6759__auto___7060 = e7047;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7060,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),"x"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7047;
} else
{}
}
}try{var values__6722__auto___7061 = cljs.core.list.call(null,893462400,cljs_time.coerce.to_epoch.call(null,cljs_time.core.date_time.call(null,1998,4,25)));var result__6723__auto___7062 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7061);if(cljs.core.truth_(result__6723__auto___7062))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7061),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7061)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
}
}catch (e7048){if((e7048 instanceof Error))
{var t__6759__auto___7063 = e7048;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7063,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7048;
} else
{}
}
}try{var values__6722__auto___7064 = cljs.core.list.call(null,0,cljs_time.coerce.to_epoch.call(null,cljs_time.core.date_midnight.call(null,1970)));var result__6723__auto___7065 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7064);if(cljs.core.truth_(result__6723__auto___7065))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7064),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1970)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7064)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1970)))], true));
}
}catch (e7049){if((e7049 instanceof Error))
{var t__6759__auto___7066 = e7049;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7066,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),0,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1970)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7049;
} else
{}
}
}try{var values__6722__auto___7067 = cljs.core.list.call(null,cljs_time.coerce.to_epoch.call(null,cljs_time.core.date_time.call(null,1993,3,15)),cljs_time.coerce.to_epoch.call(null,cljs_time.core.date_midnight.call(null,1993,3,15)));var result__6723__auto___7068 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7067);if(cljs.core.truth_(result__6723__auto___7068))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7067),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1993,3,15)),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1993,3,15)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7067)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1993,3,15)),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1993,3,15)))], true));
}
}catch (e7050){if((e7050 instanceof Error))
{var t__6759__auto___7069 = e7050;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7069,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1993,3,15)),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1993,3,15)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7050;
} else
{}
}
}try{var values__6722__auto___7070 = cljs.core.list.call(null,893462400,cljs_time.coerce.to_epoch.call(null,(new Date(893462400000))));var result__6723__auto___7071 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7070);if(cljs.core.truth_(result__6723__auto___7071))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7070),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7070)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
}
}catch (e7051){if((e7051 instanceof Error))
{var t__6759__auto___7072 = e7051;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7072,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7051;
} else
{}
}
}try{var values__6722__auto___7073 = cljs.core.list.call(null,cljs.core.long$.call(null,0),cljs_time.coerce.to_epoch.call(null,0));var result__6723__auto___7074 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7073);if(cljs.core.truth_(result__6723__auto___7074))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7073),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),0))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7073)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),0))], true));
}
}catch (e7052){if((e7052 instanceof Error))
{var t__6759__auto___7075 = e7052;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7075,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"long","long",-1637203915,null),0),cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),0))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7052;
} else
{}
}
}try{var values__6722__auto___7076 = cljs.core.list.call(null,893462400,cljs_time.coerce.to_epoch.call(null,893462400000));var result__6723__auto___7077 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7076);if(cljs.core.truth_(result__6723__auto___7077))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7076),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),893462400000))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7076)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),893462400000))], true));
}
}catch (e7053){if((e7053 instanceof Error))
{var t__6759__auto___7078 = e7053;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7078,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),893462400000))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7053;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,893462400,cljs_time.coerce.to_epoch.call(null,"1998-04-25T00:00:00.000Z"));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),"1998-04-25T00:00:00.000Z"))], true));
}
return result__6723__auto__;
}catch (e7054){if((e7054 instanceof Error))
{var t__6759__auto__ = e7054;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),893462400,cljs.core.list(new cljs.core.Symbol(null,"to-epoch","to-epoch",-224300944,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7054;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"clj-time.coerce-test","clj-time.coerce-test",-1514717656,null),clj_time.coerce_test.test_to_epoch);
clj_time.coerce_test.test_to_string = (function test_to_string(){return cemerick.cljs.test.test_var.call(null,clj_time.coerce_test.test_to_string);
});
clj_time.coerce_test.test_to_string = cljs.core.vary_meta.call(null,clj_time.coerce_test.test_to_string,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-to-string","test-to-string",1051860449,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_to_string_test(){try{var value__6725__auto___7097 = (cljs_time.coerce.to_string.call(null,null) == null);if(value__6725__auto___7097)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7097,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),null))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7097,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),null))], true));
}
}catch (e7088){if((e7088 instanceof Error))
{var t__6759__auto___7098 = e7088;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7098,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),null))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7088;
} else
{}
}
}try{var value__6725__auto___7099 = (cljs_time.coerce.to_string.call(null,"") == null);if(value__6725__auto___7099)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7099,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),""))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7099,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),""))], true));
}
}catch (e7089){if((e7089 instanceof Error))
{var t__6759__auto___7100 = e7089;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7100,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),""))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7089;
} else
{}
}
}try{var value__6725__auto___7101 = (cljs_time.coerce.to_string.call(null,"x") == null);if(value__6725__auto___7101)
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7101,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),"x"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),value__6725__auto___7101,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),"x"))], true));
}
}catch (e7090){if((e7090 instanceof Error))
{var t__6759__auto___7102 = e7090;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7102,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),"x"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7090;
} else
{}
}
}try{var values__6722__auto___7103 = cljs.core.list.call(null,"1998-04-25T00:00:00.000Z",cljs_time.coerce.to_string.call(null,cljs_time.core.date_time.call(null,1998,4,25)));var result__6723__auto___7104 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7103);if(cljs.core.truth_(result__6723__auto___7104))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7103),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7103)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
}
}catch (e7091){if((e7091 instanceof Error))
{var t__6759__auto___7105 = e7091;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7105,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),1998,4,25)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7091;
} else
{}
}
}try{var values__6722__auto___7106 = cljs.core.list.call(null,"1998-04-25T00:00:00.000Z",cljs_time.coerce.to_string.call(null,cljs_time.core.date_midnight.call(null,1998,4,25)));var result__6723__auto___7107 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7106);if(cljs.core.truth_(result__6723__auto___7107))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7106),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7106)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25)))], true));
}
}catch (e7092){if((e7092 instanceof Error))
{var t__6759__auto___7108 = e7092;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7108,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol(null,"date-midnight","date-midnight",982137800,null),1998,4,25)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7092;
} else
{}
}
}try{var values__6722__auto___7109 = cljs.core.list.call(null,"1998-04-25T00:00:00.000Z",cljs_time.coerce.to_string.call(null,(new Date(893462400000))));var result__6723__auto___7110 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7109);if(cljs.core.truth_(result__6723__auto___7110))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7109),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7109)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
}
}catch (e7093){if((e7093 instanceof Error))
{var t__6759__auto___7111 = e7093;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7111,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",-1574508510,null),893462400000)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7093;
} else
{}
}
}try{var values__6722__auto___7112 = cljs.core.list.call(null,"1970-01-01T00:00:00.000Z",cljs_time.coerce.to_string.call(null,0));var result__6723__auto___7113 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7112);if(cljs.core.truth_(result__6723__auto___7113))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7112),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1970-01-01T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),0))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7112)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1970-01-01T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),0))], true));
}
}catch (e7094){if((e7094 instanceof Error))
{var t__6759__auto___7114 = e7094;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7114,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1970-01-01T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),0))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7094;
} else
{}
}
}try{var values__6722__auto___7115 = cljs.core.list.call(null,"1998-04-25T00:00:00.000Z",cljs_time.coerce.to_string.call(null,893462400000));var result__6723__auto___7116 = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto___7115);if(cljs.core.truth_(result__6723__auto___7116))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto___7115),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),893462400000))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7115)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),893462400000))], true));
}
}catch (e7095){if((e7095 instanceof Error))
{var t__6759__auto___7117 = e7095;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7117,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),893462400000))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7095;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,"1998-04-25T00:00:00.000Z",cljs_time.coerce.to_string.call(null,"1998-04-25T00:00:00.000Z"));var result__6723__auto__ = cljs.core.apply.call(null,cljs_time.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs_time.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),"1998-04-25T00:00:00.000Z"))], true));
}
return result__6723__auto__;
}catch (e7096){if((e7096 instanceof Error))
{var t__6759__auto__ = e7096;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"1998-04-25T00:00:00.000Z",cljs.core.list(new cljs.core.Symbol(null,"to-string","to-string",-282458788,null),"1998-04-25T00:00:00.000Z"))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7096;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"clj-time.coerce-test","clj-time.coerce-test",-1514717656,null),clj_time.coerce_test.test_to_string);
