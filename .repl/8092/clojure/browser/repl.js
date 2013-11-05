goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null,null);
clojure.browser.repl.repl_print = (function repl_print(data){var temp__4090__auto__ = cljs.core.deref.call(null,clojure.browser.repl.xpc_connection);if(cljs.core.truth_(temp__4090__auto__))
{var conn = temp__4090__auto__;return clojure.browser.net.transmit.call(null,conn,new cljs.core.Keyword(null,"print","print",1120839199),cljs.core.pr_str.call(null,data));
} else
{return null;
}
});
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(conn,block){var result = (function (){try{return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"success","success",3441701749),new cljs.core.Keyword(null,"value","value",1125876963),[cljs.core.str(eval(block))].join('')], true);
}catch (e8398){if((e8398 instanceof Error))
{var e = e8398;return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"exception","exception",2495529921),new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",3069736751),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8398;
} else
{return null;
}
}
}})();return cljs.core.pr_str.call(null,result);
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,0);
});
/**
* Send data to be printed in the REPL. If there is an error, try again
* up to 10 times.
*/
clojure.browser.repl.send_print = (function() {
var send_print = null;
var send_print__2 = (function (url,data){return send_print.call(null,url,data,0);
});
var send_print__3 = (function (url,data,n){var conn = clojure.browser.net.xhr_connection.call(null);clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",1110689146),(function (_){if((n < 10))
{return send_print.call(null,url,data,(n + 1));
} else
{return console.log([cljs.core.str("Could not send "),cljs.core.str(data),cljs.core.str(" after "),cljs.core.str(n),cljs.core.str(" attempts.")].join(''));
}
}));
return clojure.browser.net.transmit.call(null,conn,url,"POST",data,null,0);
});
send_print = function(url,data,n){
switch(arguments.length){
case 2:
return send_print__2.call(this,url,data);
case 3:
return send_print__3.call(this,url,data,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
send_print.cljs$core$IFn$_invoke$arity$2 = send_print__2;
send_print.cljs$core$IFn$_invoke$arity$3 = send_print__3;
return send_print;
})()
;
clojure.browser.repl.order = cljs.core.atom.call(null,0);
clojure.browser.repl.wrap_message = (function wrap_message(t,data){return cljs.core.pr_str.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),t,new cljs.core.Keyword(null,"content","content",1965434859),data,new cljs.core.Keyword(null,"order","order",1119910592),cljs.core.swap_BANG_.call(null,clojure.browser.repl.order,cljs.core.inc)], true));
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){var temp__4090__auto__ = clojure.browser.net.xpc_connection.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var repl_connection = temp__4090__auto__;var connection = clojure.browser.net.xhr_connection.call(null);clojure.browser.event.listen.call(null,connection,new cljs.core.Keyword(null,"success","success",3441701749),(function (e){return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",2953437843),e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));
clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"send-result","send-result",3729280372),(function (data){return clojure.browser.repl.send_result.call(null,connection,url,clojure.browser.repl.wrap_message.call(null,new cljs.core.Keyword(null,"result","result",4374444943),data));
}));
clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"print","print",1120839199),(function (data){return clojure.browser.repl.send_print.call(null,url,clojure.browser.repl.wrap_message.call(null,new cljs.core.Keyword(null,"print","print",1120839199),data));
}));
clojure.browser.net.connect.call(null,repl_connection,cljs.core.constantly.call(null,null));
return setTimeout((function (){return clojure.browser.repl.send_result.call(null,connection,url,clojure.browser.repl.wrap_message.call(null,new cljs.core.Keyword(null,"ready","ready",1122290965),"ready"));
}),50);
} else
{return alert("No 'xpc' param provided to child iframe.");
}
});
/**
* Connects to a REPL server from an HTML document. After the
* connection is made, the REPL will evaluate forms in the context of
* the document that called this function.
*/
clojure.browser.repl.connect = (function connect(repl_server_url){var repl_connection = clojure.browser.net.xpc_connection.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"peer_uri","peer_uri",1083496577),repl_server_url], true));cljs.core.swap_BANG_.call(null,clojure.browser.repl.xpc_connection,cljs.core.constantly.call(null,repl_connection));
clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",2953437843),(function (js){return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"send-result","send-result",3729280372),clojure.browser.repl.evaluate_javascript.call(null,repl_connection,js));
}));
return clojure.browser.net.connect.call(null,repl_connection,cljs.core.constantly.call(null,null),(function (iframe){return iframe.style.display = "none";
}));
});
