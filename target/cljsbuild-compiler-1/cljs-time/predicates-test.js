goog.provide('cljs_time.predicates_test');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.predicates');
goog.require('cljs_time.predicates');
goog.require('cljs_time.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
cljs_time.predicates_test.test_days_of_the_week = (function test_days_of_the_week(){return cemerick.cljs.test.test_var.call(null,cljs_time.predicates_test.test_days_of_the_week);
});
cljs_time.predicates_test.test_days_of_the_week = cljs.core.vary_meta.call(null,cljs_time.predicates_test.test_days_of_the_week,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-days-of-the-week","test-days-of-the-week",-151478236,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_days_of_the_week_test(){try{var values__6722__auto___7864 = cljs.core.list.call(null,true,cljs_time.predicates.monday_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,10)));var result__6723__auto___7865 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7864);if(cljs.core.truth_(result__6723__auto___7865))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7864),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"monday?","monday?",-404378904,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,10)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7864)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"monday?","monday?",-404378904,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,10)))], true));
}
}catch (e7856){if((e7856 instanceof Error))
{var t__6759__auto___7866 = e7856;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7866,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"monday?","monday?",-404378904,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,10)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7856;
} else
{}
}
}try{var values__6722__auto___7867 = cljs.core.list.call(null,true,cljs_time.predicates.tuesday_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,11)));var result__6723__auto___7868 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7867);if(cljs.core.truth_(result__6723__auto___7868))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7867),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"tuesday?","tuesday?",-1873422005,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,11)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7867)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"tuesday?","tuesday?",-1873422005,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,11)))], true));
}
}catch (e7857){if((e7857 instanceof Error))
{var t__6759__auto___7869 = e7857;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7869,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"tuesday?","tuesday?",-1873422005,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,11)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7857;
} else
{}
}
}try{var values__6722__auto___7870 = cljs.core.list.call(null,true,cljs_time.predicates.wednesday_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,12)));var result__6723__auto___7871 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7870);if(cljs.core.truth_(result__6723__auto___7871))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7870),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"wednesday?","wednesday?",-1390752414,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,12)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7870)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"wednesday?","wednesday?",-1390752414,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,12)))], true));
}
}catch (e7858){if((e7858 instanceof Error))
{var t__6759__auto___7872 = e7858;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7872,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"wednesday?","wednesday?",-1390752414,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,12)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7858;
} else
{}
}
}try{var values__6722__auto___7873 = cljs.core.list.call(null,true,cljs_time.predicates.thursday_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,13)));var result__6723__auto___7874 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7873);if(cljs.core.truth_(result__6723__auto___7874))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7873),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"thursday?","thursday?",-151450786,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,13)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7873)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"thursday?","thursday?",-151450786,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,13)))], true));
}
}catch (e7859){if((e7859 instanceof Error))
{var t__6759__auto___7875 = e7859;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7875,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"thursday?","thursday?",-151450786,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,13)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7859;
} else
{}
}
}try{var values__6722__auto___7876 = cljs.core.list.call(null,true,cljs_time.predicates.friday_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,14)));var result__6723__auto___7877 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7876);if(cljs.core.truth_(result__6723__auto___7877))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7876),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"friday?","friday?",2054299769,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,14)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7876)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"friday?","friday?",2054299769,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,14)))], true));
}
}catch (e7860){if((e7860 instanceof Error))
{var t__6759__auto___7878 = e7860;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7878,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"friday?","friday?",2054299769,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,14)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7860;
} else
{}
}
}try{var values__6722__auto___7879 = cljs.core.list.call(null,true,cljs_time.predicates.saturday_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,15)));var result__6723__auto___7880 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7879);if(cljs.core.truth_(result__6723__auto___7880))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7879),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"saturday?","saturday?",1538693471,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,15)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7879)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"saturday?","saturday?",1538693471,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,15)))], true));
}
}catch (e7861){if((e7861 instanceof Error))
{var t__6759__auto___7881 = e7861;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7881,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"saturday?","saturday?",1538693471,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,15)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7861;
} else
{}
}
}try{var values__6722__auto___7882 = cljs.core.list.call(null,true,cljs_time.predicates.sunday_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,16)));var result__6723__auto___7883 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7882);if(cljs.core.truth_(result__6723__auto___7883))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7882),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"sunday?","sunday?",797450792,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7882)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"sunday?","sunday?",797450792,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
}
}catch (e7862){if((e7862 instanceof Error))
{var t__6759__auto___7884 = e7862;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7884,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"sunday?","sunday?",797450792,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7862;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,false,cljs_time.predicates.monday_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,16)));var result__6723__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,cljs.core.list(new cljs.core.Symbol(null,"monday?","monday?",-404378904,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,cljs.core.list(new cljs.core.Symbol(null,"monday?","monday?",-404378904,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
}
return result__6723__auto__;
}catch (e7863){if((e7863 instanceof Error))
{var t__6759__auto__ = e7863;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,cljs.core.list(new cljs.core.Symbol(null,"monday?","monday?",-404378904,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7863;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.predicates-test","cljs-time.predicates-test",945941046,null),cljs_time.predicates_test.test_days_of_the_week);
cljs_time.predicates_test.test_months_of_the_year = (function test_months_of_the_year(){return cemerick.cljs.test.test_var.call(null,cljs_time.predicates_test.test_months_of_the_year);
});
cljs_time.predicates_test.test_months_of_the_year = cljs.core.vary_meta.call(null,cljs_time.predicates_test.test_months_of_the_year,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Symbol(null,"test-months-of-the-year","test-months-of-the-year",-661606071,null),new cljs.core.Keyword(null,"test","test",1017460740),(function test_months_of_the_year_test(){try{var values__6722__auto___7911 = cljs.core.list.call(null,true,cljs_time.predicates.january_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,1,10)));var result__6723__auto___7912 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7911);if(cljs.core.truth_(result__6723__auto___7912))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7911),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"january?","january?",1862543054,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,10)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7911)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"january?","january?",1862543054,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,10)))], true));
}
}catch (e7898){if((e7898 instanceof Error))
{var t__6759__auto___7913 = e7898;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7913,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"january?","january?",1862543054,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,1,10)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7898;
} else
{}
}
}try{var values__6722__auto___7914 = cljs.core.list.call(null,true,cljs_time.predicates.february_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,2,11)));var result__6723__auto___7915 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7914);if(cljs.core.truth_(result__6723__auto___7915))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7914),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"february?","february?",-1231282538,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,11)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7914)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"february?","february?",-1231282538,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,11)))], true));
}
}catch (e7899){if((e7899 instanceof Error))
{var t__6759__auto___7916 = e7899;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7916,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"february?","february?",-1231282538,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,2,11)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7899;
} else
{}
}
}try{var values__6722__auto___7917 = cljs.core.list.call(null,true,cljs_time.predicates.march_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,3,12)));var result__6723__auto___7918 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7917);if(cljs.core.truth_(result__6723__auto___7918))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7917),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"march?","march?",1573122069,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,3,12)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7917)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"march?","march?",1573122069,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,3,12)))], true));
}
}catch (e7900){if((e7900 instanceof Error))
{var t__6759__auto___7919 = e7900;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7919,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"march?","march?",1573122069,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,3,12)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7900;
} else
{}
}
}try{var values__6722__auto___7920 = cljs.core.list.call(null,true,cljs_time.predicates.april_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,4,13)));var result__6723__auto___7921 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7920);if(cljs.core.truth_(result__6723__auto___7921))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7920),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"april?","april?",1243430962,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,4,13)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7920)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"april?","april?",1243430962,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,4,13)))], true));
}
}catch (e7901){if((e7901 instanceof Error))
{var t__6759__auto___7922 = e7901;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7922,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"april?","april?",1243430962,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,4,13)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7901;
} else
{}
}
}try{var values__6722__auto___7923 = cljs.core.list.call(null,true,cljs_time.predicates.may_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,5,14)));var result__6723__auto___7924 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7923);if(cljs.core.truth_(result__6723__auto___7924))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7923),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"may?","may?",-1637187277,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,5,14)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7923)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"may?","may?",-1637187277,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,5,14)))], true));
}
}catch (e7902){if((e7902 instanceof Error))
{var t__6759__auto___7925 = e7902;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7925,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"may?","may?",-1637187277,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,5,14)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7902;
} else
{}
}
}try{var values__6722__auto___7926 = cljs.core.list.call(null,true,cljs_time.predicates.june_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,6,15)));var result__6723__auto___7927 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7926);if(cljs.core.truth_(result__6723__auto___7927))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7926),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"june?","june?",-1539043850,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,6,15)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7926)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"june?","june?",-1539043850,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,6,15)))], true));
}
}catch (e7903){if((e7903 instanceof Error))
{var t__6759__auto___7928 = e7903;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7928,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"june?","june?",-1539043850,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,6,15)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7903;
} else
{}
}
}try{var values__6722__auto___7929 = cljs.core.list.call(null,true,cljs_time.predicates.july_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,7,16)));var result__6723__auto___7930 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7929);if(cljs.core.truth_(result__6723__auto___7930))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7929),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"july?","july?",-1539045152,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,7,16)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7929)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"july?","july?",-1539045152,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,7,16)))], true));
}
}catch (e7904){if((e7904 instanceof Error))
{var t__6759__auto___7931 = e7904;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7931,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"july?","july?",-1539045152,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,7,16)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7904;
} else
{}
}
}try{var values__6722__auto___7932 = cljs.core.list.call(null,true,cljs_time.predicates.august_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,8,16)));var result__6723__auto___7933 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7932);if(cljs.core.truth_(result__6723__auto___7933))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7932),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"august?","august?",1996312661,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,8,16)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7932)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"august?","august?",1996312661,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,8,16)))], true));
}
}catch (e7905){if((e7905 instanceof Error))
{var t__6759__auto___7934 = e7905;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7934,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"august?","august?",1996312661,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,8,16)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7905;
} else
{}
}
}try{var values__6722__auto___7935 = cljs.core.list.call(null,true,cljs_time.predicates.september_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,9,16)));var result__6723__auto___7936 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7935);if(cljs.core.truth_(result__6723__auto___7936))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7935),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"september?","september?",-141353145,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7935)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"september?","september?",-141353145,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
}
}catch (e7906){if((e7906 instanceof Error))
{var t__6759__auto___7937 = e7906;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7937,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"september?","september?",-141353145,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,9,16)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7906;
} else
{}
}
}try{var values__6722__auto___7938 = cljs.core.list.call(null,true,cljs_time.predicates.october_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,10,16)));var result__6723__auto___7939 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7938);if(cljs.core.truth_(result__6723__auto___7939))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7938),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"october?","october?",-367048936,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,10,16)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7938)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"october?","october?",-367048936,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,10,16)))], true));
}
}catch (e7907){if((e7907 instanceof Error))
{var t__6759__auto___7940 = e7907;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7940,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"october?","october?",-367048936,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,10,16)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7907;
} else
{}
}
}try{var values__6722__auto___7941 = cljs.core.list.call(null,true,cljs_time.predicates.november_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,11,16)));var result__6723__auto___7942 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7941);if(cljs.core.truth_(result__6723__auto___7942))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7941),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"november?","november?",1927839494,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,11,16)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7941)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"november?","november?",1927839494,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,11,16)))], true));
}
}catch (e7908){if((e7908 instanceof Error))
{var t__6759__auto___7943 = e7908;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7943,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"november?","november?",1927839494,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,11,16)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7908;
} else
{}
}
}try{var values__6722__auto___7944 = cljs.core.list.call(null,true,cljs_time.predicates.december_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,12,16)));var result__6723__auto___7945 = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto___7944);if(cljs.core.truth_(result__6723__auto___7945))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto___7944),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"december?","december?",-1403387277,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,12,16)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto___7944)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"december?","december?",-1403387277,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,12,16)))], true));
}
}catch (e7909){if((e7909 instanceof Error))
{var t__6759__auto___7946 = e7909;cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto___7946,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"december?","december?",-1403387277,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,12,16)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7909;
} else
{}
}
}try{var values__6722__auto__ = cljs.core.list.call(null,false,cljs_time.predicates.january_QMARK_.call(null,cljs_time.core.date_time.call(null,2012,12,31)));var result__6723__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__6722__auto__);if(cljs.core.truth_(result__6723__auto__))
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__6722__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,cljs.core.list(new cljs.core.Symbol(null,"january?","january?",1862543054,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,12,31)))], true));
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.list.call(null,new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__6722__auto__)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,cljs.core.list(new cljs.core.Symbol(null,"january?","january?",1862543054,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,12,31)))], true));
}
return result__6723__auto__;
}catch (e7910){if((e7910 instanceof Error))
{var t__6759__auto__ = e7910;return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"actual","actual",3885931776),t__6759__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),false,cljs.core.list(new cljs.core.Symbol(null,"january?","january?",1862543054,null),cljs.core.list(new cljs.core.Symbol(null,"date-time","date-time",-1935566011,null),2012,12,31)))], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7910;
} else
{return null;
}
}
}}));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"cljs-time.predicates-test","cljs-time.predicates-test",945941046,null),cljs_time.predicates_test.test_months_of_the_year);
