(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c2d4a5"],{"2b27":function(e,t,n){(function(){var t={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},n={install:function(e,t){t&&this.config(t.expires,t.path,t.domain,t.secure,t.sameSite),e.prototype&&(e.prototype.$cookies=this),e.config&&e.config.globalProperties&&(e.config.globalProperties.$cookies=this,e.provide("$cookies",this)),e.$cookies=this},config:function(e,n,a,r,s){t.expires=e||"1d",t.path=n?"; path="+n:"; path=/",t.domain=a?"; domain="+a:"",t.secure=r?"; Secure":"",t.sameSite=s?"; SameSite="+s:"; SameSite=Lax"},get:function(e){var t=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(t&&"{"===t.substring(0,1)&&"}"===t.substring(t.length-1,t.length))try{t=JSON.parse(t)}catch(n){return t}return t},set:function(e,n,a,r,s,i,o){if(!e)throw new Error("Cookie name is not found in the first argument.");if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(e))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: '+e);n&&n.constructor===Object&&(n=JSON.stringify(n));var c="";if(a=void 0==a?t.expires:a,a&&0!=a)switch(a.constructor){case Number:c=a===1/0||-1===a?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(a)){var u=a.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(a.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":c="; max-age="+2592e3*+u;break;case"d":c="; max-age="+86400*+u;break;case"h":c="; max-age="+3600*+u;break;case"min":c="; max-age="+60*+u;break;case"s":c="; max-age="+u;break;case"y":c="; max-age="+31104e3*+u;break;default:new Error('unknown exception of "set operation"')}}else c="; expires="+a;break;case Date:c="; expires="+a.toUTCString();break}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+c+(s?"; domain="+s:t.domain)+(r?"; path="+r:t.path)+(void 0==i?t.secure:i?"; Secure":"")+(void 0==o?t.sameSite:o?"; SameSite="+o:""),this},remove:function(e,n,a){return!(!e||!this.isKey(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; domain="+a:t.domain)+(n?"; path="+n:t.path)+"; SameSite=Lax",!0)},isKey:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e}};e.exports=n,"undefined"!==typeof window&&(window.$cookies=n)})()},"2f21":function(e,t,n){"use strict";var a=n("79e5");e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"321e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"}}),n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},r=[],s=(n("96cf"),n("3b8d")),i=n("a026"),o=(n("8e6e"),n("456d"),n("28a5"),n("ac6a"),n("55dd"),n("bd86")),c=n("75fc"),u=n("bc3a"),l=n.n(u),p=n("3ef3"),f=n("d166"),d=n("6172"),h={nextCache:{},first:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.nextCache[n]){e.next=9;break}return this.nextCache[n]=t(),console.log("New Set",this.nextCache[n]),e.next=5,this.nextCache[n];case 5:return a=e.sent,console.log("New Resp",a),delete this.nextCache[n],e.abrupt("return",a);case 9:return console.log("Exists",this.nextCache[n]),e.next=12,this.nextCache[n];case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},m=h,g={getItem:function(e,t){var n=localStorage.getItem("jscovery."+e);if(!n)return t||{};try{return JSON.parse(n)}catch(a){return t||{}}},setItem:function(e,t){localStorage.setItem("jscovery."+e,JSON.stringify(t))},bind:function(e,t,n){var a=this,r={};return{commit:function(s){return n(r,s||t),a.setItem(e,r),this},reover:function(s){return r=a.getItem(e,s||r),n(t,r),this}}}},v=g,b=n("8760");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=p["a"].guid;function k(e,t){return!(!e||!t)&&("null"!=e&&"null"!=t&&e===t)}var S=0,R=0,C=function(){S=Date.now()},O={user:null,agents:[],contacts:null,chats:[],chatsMessages:{},chatsVersion:0,chatsSize:null,chatsCounter:1,meta:{isOnline:void 0,isAway:!1,isLoadingChats:!1},mediaOptions:[],quickActions:[],quickLabels:[],quickReplies:[],quickTags:[],chatHistory:{sessions:null},searchChat:{tokens:[],state:"ACTIVE",limit:20,tab:"ME",text:"",mode:null,endGame:!1,chatsFetchStamp:0}},T=v.bind("agent.search",O.searchChat,(function(e,t){e.state=t.state,e.tab=t.tab,e.text=t.text,e.mode=t.mode})).reover({state:"ACTIVE",tab:"ME",text:"",mode:null}),j=function(e){return{id:e.id,category:e.category,title:e.title,text:e.title,code:e.code,color:p["a"].hexacode(e.category),selected:!1}},I={StateChats:function(e){return e.chats},StateChatsVersion:function(e){return e.chatsVersion},StateMeta:function(e){return e.meta},StateMediaOptions:function(e){return e.mediaOptions},StateQuickActions:function(e){return e.quickActions},StateQuickLabels:function(e){return e.quickLabels},StateQuickTags:function(e){return e.quickTags},StateQuickTagsSorted:function(e){var t={},n=e.quickTags;return n.map((function(e){t[e.category]=t[e.category]?[].concat(Object(c["a"])(t[e.category]),[e]):[e]})),t},StateAgentOptions:function(e){return e.agents},StateChatHistory:function(e){return e.chatHistory.sessions},SearchChat:function(e){return e.searchChat}},A={__RefeshSessionRequest:function(e){var t=e.isOnline,n=e.isUpdate,a=e.isAway;console.log("__RefeshSessionRequest",O.searchChat);var r=Date.now();return l.a.get("/api/sessions/assignments",{params:y(y({status:t,away:a,isUpdate:n,limit:O.searchChat.limit},function(e){return e?{search:O.searchChat.text}:{tab:O.searchChat.tab,searchStatus:O.searchChat.state,search:O.searchChat.mode?" MODE:"+O.searchChat.mode:void 0}}(!!O.searchChat.text)),{},{_search:O.searchChat.tokens.filter((function(e){return!e.isTag&&e.text})).map((function(e){return e.text})).join("*")})}).then((function(e){return e.data.chatsFetchStamp=r,O.searchChat.endGame=e.data.results.length<O.searchChat.limit,e}))},_RefeshSession:function(){var e=null,t=0;return function(){var n=Object(s["a"])(regeneratorRuntime.mark((function n(a){var r,s,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=a.isOnline,s=a.isUpdate,i=a.isAway,o=Date.now()-500,s=s&&t<o,s&&(t=Date.now()),!e||s){n.next=6;break}return n.abrupt("return",e);case 6:return e=A.__RefeshSessionRequest({isOnline:r,isUpdate:s,isAway:i}).then((function(e){return console.log("_UpdateChats:success"),e})).catch((function(e){console.log("_UpdateChats:error")})).then((function(t){return console.log("_UpdateChats:always"),setTimeout((function(){e=null}),f["a"].config.chatRefreshInterval),t})),n.abrupt("return",e);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(),_MatchQuickReplies:Object(b["a"])((function(e){e=e||{categories:[],text:""},e.categories=e.categories;e.text=(e.text||"").toLowerCase();var t=O.quickReplies.map((function(t){return d["a"].quickReply(t,e),t}));return t.sort((function(e,t){return t.matchScore-e.matchScore}))}),500)},L={RefeshSession:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=t.dispatch,s=Date.now()-f["a"].config.chatRefreshInterval,n||!(S>s)){e.next=4;break}return e.abrupt("return");case 4:return O.meta.isLoadingChats=!0,e.next=7,A._RefeshSession({isOnline:O.meta.isOnline,isUpdate:n,isAway:O.meta.isAway});case 7:if(i=e.sent,O.meta.isLoadingChats=!1,!i.data||!i.data.details){e.next=12;break}return e.next=12,r("SetAgentOptionsStatus",i.data.details);case 12:i.data&&i.data.results&&i.data.chatsFetchStamp>O.searchChat.chatsFetchStamp&&(O.searchChat.chatsFetchStamp=i.data.chatsFetchStamp,r("updateChats",i.data.results)),a("setMeta",O.meta),clearTimeout(R),R=setTimeout((function(){r("RefeshSession")}),f["a"].config.agentSessionTimeout),C();case 17:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),RefeshTimer:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,t.dispatch,C();case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LogIn:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,l.a.post("/auth/login/submit",n).then((function(e){if("SUCCESS"!==e.data.statusKey)throw e.data}));case 3:return e.next=5,a("setUser",n.get("username"));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LogOut:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,l.a.get("/auth/logout"),a=null,n("logout",a);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,n("RefeshSession",!0);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),RefreshChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,n("updateChats",O.chats);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),GetChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=t.dispatch,e.next=3,n("LoadChats");case 3:return e.sent,e.next=6,new Promise((function(e,t){var n;n=setInterval((function(){null!==O.chatsSize&&(clearInterval(n),e("foo"))}),2e3)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),AddChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s in t.commit,a=t.dispatch,r=Object.assign({},n),O.chats)if(O.chats[s].contactId==n.contactId&&O.chats[s].ticketHash==n.ticketHash){for(i in O.chats[s].active=!!n.active,O.chats[s].assignedToAgent=n.assignedToAgent,O.chats[s].resolved=n.resolved,n.messages)d["a"].appendMessage(O.chats[s],n.messages[i]);r.messages=O.chats[s].messages||r.messages,r.local=O.chats[s].local||r.local,d["a"].session(O.chats[s]),O.chats.splice(s,1)}r&&r.active&&O.chats.push(r),a("updateChats",O.chats);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AddHistoryChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i in a=t.commit,r=O.chatHistory.sessions||[],s=!1,r)r[i].sessionId==n.sessionId&&(r[i].active=!!n.active,r[i]=n,s=!0);O.chatHistory.sessions=r,s||O.chatHistory.sessions.push(n),a("setChatHistory",O.chatHistory);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChatPre:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,n.messageIdRef=n.messageIdRef||x(),n.version=n.version||0,a("ReadChatMessage",n);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChatPost:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,a("ReadChatMessage",n);case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,a("SendChatPre",n),r="/api/sessions/message/send","/add_stick_note"==n.action&&(r="/api/sessions/note"),e.next=6,l.a.post(r,{id:n.id,message:n.message||n.text,template:n.template,attachments:n.attachments,sessionId:n.sessionId,hsm:Object.assign({id:n.templateId,code:n.templateCode},n.template),action:n.action,contact:n.contact,messageIdRef:n.messageIdRef});case 6:return s=e.sent,a("SendChatPost",s.data.results[0]),e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendFile:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,a("SendChatPre",n.message),r=new FormData,r.append("message",JSON.stringify(n.message)),r.append("file",n.file,n.fileName),e.next=7,l.a.post("/api/sessions/message/upload",r);case 7:return s=e.sent,a("ReadChatMessage",s.results[0]),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UpdateChatMessageStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,e.t0=regeneratorRuntime.keys(O.chats);case 2:if((e.t1=e.t0()).done){e.next=22;break}if(r=e.t1.value,s=O.chats[r],!s.messages){e.next=20;break}e.t2=regeneratorRuntime.keys(s.messages);case 7:if((e.t3=e.t2()).done){e.next=20;break}if(i=e.t3.value,o=s.messages[i],!k(s.contact.contactType,n.contact.contactType)||!k(o.messageId,n.messageId)&&!k(n.messageIdExt,o.messageIdExt)){e.next=18;break}return o.stamps=o.stamps||{},o.stamps[n.status]=n.changeStamp,o.stamps=Object.assign({},o.stamps),o.status=n.status,console.log("msg.stamps",o.stamps),a("updateChats",O.chats),e.abrupt("return");case 18:e.next=7;break;case 20:e.next=2;break;case 22:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),ReadChatMessage:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,a=t.dispatch,n){e.next=3;break}return e.abrupt("return");case 3:n.messageIdRef=n.messageIdRef||x(),r=!1,e.t0=regeneratorRuntime.keys(O.chats);case 6:if((e.t1=e.t0()).done){e.next=15;break}if(s=e.t1.value,i=O.chats[s],r=n.sessionId==i.sessionId,!r){e.next=13;break}return d["a"].appendMessage(i,n),e.abrupt("break",15);case 13:e.next=6;break;case 15:a("updateChats",O.chats);case 16:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),ReadSession:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in a=t.dispatch,n)for(i in s=n[r],O.chats)o=O.chats[i],o.sessionId==s.sessionId&&(o.status=s.status,o.tagId=s.tagId);a("updateChats",O.chats);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),OnlineStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,r=!1,void 0!==n.online&&(O.meta.isOnline=n.online,r=!0),void 0!==n.away&&(O.meta.isAway=n.away),a("RefeshSession",r);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SetAgentOptionsStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=t.dispatch,e.next=3,r("LoadAgentOptions");case 3:s=(new Date).getTime()-f["a"].config.agentSessionTimeout,i=s-2*f["a"].config.agentSessionTimeout,O.agents.map((function(e){for(var t in n){var r=n[t];e.code==r.agentCode&&(e.session=r,r.isLoggedIn=r.isLoggedIn&&r.lastOnlineStamp>i,r.isAvailable=r.isLoggedIn&&r.isOnline&&r.lastOnlineStamp>s,r.isAvailableNot=r.isLoggedIn&&!r.isOnline,r.isAway=r.isOnline&&r.isLoggedIn&&r.lastOnlineStamp<s,e.statusScore=0,r.isAvailable?e.statusScore=4:r.isAway?e.statusScore=3:r.isAvailableNot?e.statusScore=2:r.isLoggedIn&&(e.statusScore=1),e.code==f["a"].agent&&(O.meta.isOnline=r.isOnline,a("setMeta",O.meta)))}e.session=e.session||{},e.statusScore=void 0==e.statusScore?-1:e.statusScore})),O.agents=O.agents.sort((function(e,t){return!e.statusScore&&t.statusScore,e.statusScore>t.statusScore?-1:e.statusScore<t.statusScore?1:e.code.toLowerCase()<t.code.toLowerCase()?-1:1})),a("setAgents",O.agents);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadAgentOptions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,a=t.dispatch,!O.agents||!O.agents.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,l.a.get("/api/options/agents");case 5:r=e.sent,r.data&&r.data.results&&n("setAgents",r.data.results),a("RefeshSession");case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadMediaOptions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,l.a.get("/gallery/map/media_reply");case 3:a=e.sent,n("setMediaOptions",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickActions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,l.a.get("/gallery/map/quick_actions");case 3:a=e.sent,n("setQuickActions",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickLabels:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,l.a.get("/gallery/map/quick_labels");case 3:a=e.sent,n("setQuickLabels",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,l.a.get("/gallery/map/quick_tags");case 3:a=e.sent,n("setQuickTags",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),AttachQuickLabels:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=n.sessionId,r=n.labels,e.next=4,l.a.post("/api/contact/label?sessionId="+a,{values:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AttachQuickTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=n.sessionId,r=n.tags,e.next=4,l.a.post("/api/contact/tag?sessionId="+a,{values:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UpdateSessionTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,r=n.sessionId,s=n.status,i=n.tags,e.next=4,l.a.post("/api/session/tag",{sessionId:r,status:s,tags:i});case 4:return o=e.sent,a("ReadSession",o.data.results),e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadQuickReplies:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,O.quickReplies&&0!=O.quickReplies.length){e.next=7;break}return e.next=4,l.a.get("/category/map/smart_reply");case 4:for(s in r=e.sent,r.data)r.data[s].template=p["a"].nullify(r.data[s].template);a("setQuickReply",r.data);case 7:return e.abrupt("return",A._MatchQuickReplies(n));case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=JSON.stringify(n),O.chatHistory.contactId!=r){e.next=4;break}return e.abrupt("return",O.chatHistory.sessions);case 4:return e.next=6,l.a.get("/api/sessions/contact",{params:n});case 6:return s=e.sent,O.chatHistory.contactId=r,O.chatHistory.sessions=s.data.results,a("setChatHistory",O.chatHistory),e.abrupt("return",s.data.results);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessionChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,e.next=3,m.first((function(){return l.a.get("/api/session/messages?sessionId="+n.sessionId,n)}),"messages:"+n.sessionId);case 3:return r=e.sent,s=y(y({},r.data.meta),{},{messages:r.data.results}),console.log("session",s),d["a"].session(s),s.local.active?a("AddChat",s):a("AddHistoryChat",s),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AssingToAgent:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,r=t.dispatch,a.sessionId,a.agentId,a.agentCode,a.deptCode,a.deptId,s=new URLSearchParams,e.next=5,l.a.post("/api/session/agent",s);case 5:return i=e.sent,r("AddChat",i.data.results[0]),e.abrupt("return",i.data);case 8:case"end":return e.stop()}}),e)})));function t(t,n,a){return e.apply(this,arguments)}return t}(),GetRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,a=n.url,r=n.params,e.next=4,l.a.get(a,{params:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),PostRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,a=n.url,r=n.params,e.next=4,l.a.post(a,r);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),updateChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,t.dispatch,r=t.rootGetters,r.local.readStamp)for(s in n)n[s].lastReadStamp=Math.max(r.local.readStamp[n[s].sessionId]||0,n[s].lastReadStamp||0);a("setChats",n);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},M={setChats:function(e,t){for(var n in t){if(t[n].msg=t[n].msg||{},t[n].messages)for(var a=0;a<t[n].messages.length;a++)"I"==t[n].messages[a].type&&(t[n].msg.lastInBoundMsg=t[n].messages[a]),["I","O"].indexOf(t[n].messages[a].type)>=0&&(t[n].msg.lastMsg=t[n].messages[a]),t[n].messages[a].stamps=t[n].messages[a].stamps||{};(!e.chatsMessages[t[n].sessionId]||!e.chatsMessages[t[n].sessionId].length||t[n].messages&&t[n].messages.length>=e.chatsMessages[t[n].sessionId].length)&&(e.chatsMessages[t[n].sessionId]=t[n].messages||e.chatsMessages[t[n].sessionId]),t[n].local=t[n].local||{active:!1,expired:!1,tags:{}},t[n].assignedToAgent&&t[n].local&&(t[n].local.agent=e.agents.filter((function(e){return e.code==t[n].assignedToAgent}))[0]),t[n].messages=e.chatsMessages[t[n].sessionId],t[n].local=t[n].local,d["a"].session(t[n])}e.chatsSize=t.length,e.chats=t,e.chatsVersion++},setChatHistory:function(e,t){e.chatHistory=t},setMeta:function(e,t){e.meta=t},setQuickReply:function(e,t){e.quickReplies=t},setQuickActions:function(e,t){e.quickActions=t},setQuickLabels:function(e,t){p["a"].addContactLabels(t),e.quickLabels=t},setQuickTags:function(e,t){var n=t.map((function(e){return j(e)}));p["a"].addContactTags(n),e.quickTags=n},setMediaOptions:function(e,t){e.mediaOptions=t},setAgents:function(e,t){e.agents=t,C()},setContactTab:function(e,t){t.tab&&(e.searchChat.tab=t.tab),t.state&&(e.searchChat.state=t.state),e.searchChat=Object.assign({},e.searchChat),T.commit(e.searchChat)},setSessionSearch:function(e,t){var n=(t.text||"").trim();e.searchChat.text=n,n&&(n+="*"),e.searchChat.tokens=n.split(/(:[\w]+)/).filter((function(e){return!!e})).map((function(e){var t=e.split(":");return{isTag:!t[0],text:(t[0]||t[1]).trim(),_text:(t[0]||t[1]).toLowerCase().replaceAll("*","").trim()}})),console.log(" state.searchChat.state",t.state),e.searchChat.state=t.state,e.searchChat.limit=t.limit,e.searchChat.tab=t.tab,e.searchChat.mode=t.mode,e.searchChat=Object.assign({},e.searchChat),T.commit(e.searchChat)},setUser:function(e,t){e.user=t},logout:function(e,t){e.user=t}},P={state:O,getters:I,actions:L,mutations:M},$=n("9af4"),_=n.n($),E=n("2b27"),H=n.n(E),q=n("9062"),D=n.n(q),U=(n("0808"),n("6944")),N=n.n(U),Q=n("f13c"),F=n.n(Q),V=n("caf9");i["default"].use(H.a),i["default"].use(D.a),i["default"].component("Loading",D.a),i["default"].use(N.a),i["default"].use(F.a);var z=n.p+"/_common/static/loading-spin.svg",G=n.p+"/_common/static/loading-spin.svg";i["default"].use(V["a"],{preLoad:1.3,error:G,loading:z,attempt:1,throttleWait:1e3});i["default"].component("app-agent-layout",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d230ab4"),n.e("chunk-2d0bb20c"),n.e("chunk-4b83ddb4")]).then(n.bind(null,"f979"))})),i["default"].component("plug-agent-layout",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d230ab4"),n.e("chunk-2d0bb20c"),n.e("chunk-301c2132")]).then(n.bind(null,"fd90"))})),i["default"].component("MySource",(function(){return n.e("chunk-6746e860").then(n.bind(null,"ebba"))})),i["default"].component("MyText",(function(){return n.e("chunk-2d1e9588").then(n.bind(null,"e26b"))})),i["default"].component("MyIcon",(function(){return n.e("chunk-2d0c4607").then(n.bind(null,"3b24"))}));var J={name:"AppAgent",computed:{layout:function(){return"plug"==this.$route.params.app||"plug_mitel"==this.$route.params.app||"mitel"==window.CONST.APP_PLUG?"plug-agent-layout":"app-agent-layout"}},data:function(){return{refreshTimer:0}},methods:{refresh:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.clearTimeout(this.refreshTimer),_.a.isSupported()&&_.a.hidden()){e.next=4;break}return e.next=4,this.$store.dispatch("RefeshSession");case 4:t=this,this.refreshTimer=window.setTimeout((function(){t.refresh()}),this.$tunnel.connected?1e4:1e3);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.$store.registerModule("DataStore",P)},mounted:function(){var e=this,t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(t),t=document.createElement("link"),t.setAttribute("rel","stylesheet"),t.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"),document.head.appendChild(t);var n=this;console.log("TUNNEL"),this.tunnel=this.$tunnel.pipe().on("/message/sent/new",(function(e){console.log("/message/sent/new===",e),n.$store.dispatch("ReadChatMessage",e),n.$store.dispatch("RefeshTimer")})).on("/message/receive/new",(function(e){e.version=3,console.log("/message/receive/new:msg===",e),n.$store.dispatch("ReadChatMessage",e),n.$store.dispatch("RefeshTimer")})).on("/dept/onassign-"+window.CONST.APP_DEPT,(function(e){console.log("/dept/onassign-"+window.CONST.APP_DEPT,e),n.$store.dispatch("AddChat",e),n.$store.dispatch("RefeshTimer")})).on("/dept/onassign-__DEPT__",(function(e){console.log("/dept/onassign-__DEPT__",e),n.$store.dispatch("AddChat",e),n.$store.dispatch("RefeshTimer")})).on("/message/update/status",(function(e){console.log("/message/update/status===",e),n.$store.dispatch("UpdateChatMessageStatus",e),n.$store.dispatch("RefeshTimer")})).on("/agent/session/update",(function(e){console.log("/agent/session/update",e),n.$store.dispatch("SetAgentOptionsStatus",[e]),n.$store.dispatch("RefeshTimer")})).on("/chat/session/update",(function(e){console.log("/chat/session/update",e),n.$store.dispatch("ReadSession",[e]),n.$store.dispatch("RefeshTimer")})),_.a.change((function(t,n){e.$store.dispatch("OnlineStatus",{type:"away",away:n})})),this.refresh()},beforeUnmount:function(){this.tunnel.off(),window.clearTimeout(this.refreshTimer)}},K=J,B=(n("79d4"),n("2877")),W=Object(B["a"])(K,a,r,!1,null,null,null);t["default"]=W.exports},"55dd":function(e,t,n){"use strict";var a=n("5ca1"),r=n("d8e8"),s=n("4bf8"),i=n("79e5"),o=[].sort,c=[1,2,3];a(a.P+a.F*(i((function(){c.sort(void 0)}))||!i((function(){c.sort(null)}))||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(s(this)):o.call(s(this),r(e))}})},"79d4":function(e,t,n){"use strict";n("a0dd")},8760:function(e,t,n){"use strict";var a=n("b012"),r=n.n(a);const s=function(e,t,n,a){let s,i,o,c;var u=r()((function(){i(e.apply(o,c)),o=c=null,s=null}),t,n,a);let l=function(){return o=this,c=arguments,s=s||new Promise((function(e){i=e})),u(),s};return l.clear=function(e){u.clear(e)},l.flush=function(e){u.flush(e)},l};t["a"]=s},"9af4":function(e,t,n){!function(t,n){e.exports=n()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a,r,s=Symbol("visibility-change-id"),i=-1;void 0!==document.hidden?(a="hidden",r="visibilitychange"):void 0!==document.msHidden?(a="msHidden",r="msvisibilitychange"):void 0!==document.webkitHidden?(a="webkitHidden",r="webkitvisibilitychange"):void 0!==document.mozHidden&&(a="mozHidden",r="mozvisibilitychange");var o,c={},u=document;function l(){o||(document.addEventListener(r,(function(){(function(e){for(var t in c)c[t].call(u,e,u[a])}).apply(p,arguments)})),o=!0)}var p={change:function(e){if(!p.isSupported())return!1;var t=i+=1;return c[t]=e,l(),t},unbind:function(e){delete c[e]},isSupported:function(){return void 0!==a},hidden:function(){return u[a]},install:function(e){e.directive("visibility-change",{bind:function(e,t){var n=t.value;"function"==typeof n?e[s]=p.change((function(e,t){n(e,t)})):console.error("You need bind a callback function for v-visibility-change")},unbind:function(e){p.unbind(e[s])}})}};t.default=p}])}))},a0dd:function(e,t,n){},b012:function(e,t){function n(e,t,n){var a,r,s,i,o;function c(){var u=Date.now()-i;u<t&&u>=0?a=setTimeout(c,t-u):(a=null,n||(o=e.apply(s,r),s=r=null))}null==t&&(t=100);var u=function(){s=this,r=arguments,i=Date.now();var u=n&&!a;return a||(a=setTimeout(c,t)),u&&(o=e.apply(s,r),s=r=null),o};return u.clear=function(){a&&(clearTimeout(a),a=null)},u.flush=function(){a&&(o=e.apply(s,r),s=r=null,clearTimeout(a),a=null)},u}n.debounce=n,e.exports=n},f13c:function(e,t,n){
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(t){return e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},t.apply(this,arguments)}var n=4,a=.001,r=1e-7,s=10,i=11,o=1/(i-1),c="function"===typeof Float32Array;function u(e,t){return 1-3*t+3*e}function l(e,t){return 3*t-6*e}function p(e){return 3*e}function f(e,t,n){return((u(t,n)*e+l(t,n))*e+p(t))*e}function d(e,t,n){return 3*u(t,n)*e*e+2*l(t,n)*e+p(t)}function h(e,t,n,a,i){var o,c,u=0;do{c=t+(n-t)/2,o=f(c,a,i)-e,o>0?n=c:t=c}while(Math.abs(o)>r&&++u<s);return c}function m(e,t,a,r){for(var s=0;s<n;++s){var i=d(t,a,r);if(0===i)return t;var o=f(t,a,r)-e;t-=o/i}return t}function g(e){return e}var v=function(e,t,n,r){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===r)return g;for(var s=c?new Float32Array(i):new Array(i),u=0;u<i;++u)s[u]=f(u*o,e,n);function l(t){for(var r=0,c=1,u=i-1;c!==u&&s[c]<=t;++c)r+=o;--c;var l=(t-s[c])/(s[c+1]-s[c]),p=r+l*o,f=d(p,e,n);return f>=a?m(t,p,e,n):0===f?p:h(t,r,r+o,e,n)}return function(e){return 0===e?0:1===e?1:f(l(e),t,r)}},b={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},w=!1;try{var y=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,y)}catch(_){}var x={$:function(e){return"string"!==typeof e?e:document.querySelector(e)},on:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};t instanceof Array||(t=[t]);for(var r=0;r<t.length;r++)e.addEventListener(t[r],n,!!w&&a)},off:function(e,t,n){t instanceof Array||(t=[t]);for(var a=0;a<t.length;a++)e.removeEventListener(t[a],n)},cumulativeOffset:function(e){var t=0,n=0;do{t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:n}}},k=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],S={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function R(e){S=t({},S,e)}var C=function(){var t,n,a,r,s,i,o,c,u,l,p,f,d,h,m,g,w,y,R,C,O,T,j,I,A,L,M,P=function(e){c&&(j=e,C=!0)};function $(e){var t=e.scrollTop;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollTop),t}function _(e){var t=e.scrollLeft;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollLeft),t}function E(){O=x.cumulativeOffset(n),T=x.cumulativeOffset(t),f&&(m=T.left-O.left+i,y=m-h),d&&(w=T.top-O.top+i,R=w-g)}function H(e){if(C)return q();A||(A=e),s||E(),L=e-A,M=Math.min(L/a,1),M=I(M),D(n,g+R*M,h+y*M),L<a?window.requestAnimationFrame(H):q()}function q(){C||D(n,w,m),A=!1,x.off(n,k,P),C&&p&&p(j,t),!C&&l&&l(t)}function D(e,t,n){d&&(e.scrollTop=t),f&&(e.scrollLeft=n),"body"===e.tagName.toLowerCase()&&(d&&(document.documentElement.scrollTop=t),f&&(document.documentElement.scrollLeft=n))}function U(m,O){var T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===e(O)?T=O:"number"===typeof O&&(T.duration=O),t=x.$(m),!t)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+m);if(n=x.$(T.container||S.container),a=T.hasOwnProperty("duration")?T.duration:S.duration,s=T.hasOwnProperty("lazy")?T.lazy:S.lazy,r=T.easing||S.easing,i=T.hasOwnProperty("offset")?T.offset:S.offset,o=T.hasOwnProperty("force")?!1!==T.force:S.force,c=T.hasOwnProperty("cancelable")?!1!==T.cancelable:S.cancelable,u=T.onStart||S.onStart,l=T.onDone||S.onDone,p=T.onCancel||S.onCancel,f=void 0===T.x?S.x:T.x,d=void 0===T.y?S.y:T.y,"function"===typeof i&&(i=i(t,n)),h=_(n),g=$(n),E(),C=!1,!o){var A="body"===n.tagName.toLowerCase()?document.documentElement.clientHeight||window.innerHeight:n.offsetHeight,L=g,M=L+A,q=w-i,D=q+t.offsetHeight;if(q>=L&&D<=M)return void(l&&l(t))}if(u&&u(t),R||y)return"string"===typeof r&&(r=b[r]||b["ease"]),I=v.apply(v,r),x.on(n,k,P,{passive:!0}),window.requestAnimationFrame(H),function(){j=null,C=!0};l&&l(t)}return U},O=C(),T=[];function j(e){for(var t=0;t<T.length;++t)if(T[t].el===e)return T.splice(t,1),!0;return!1}function I(e){for(var t=0;t<T.length;++t)if(T[t].el===e)return T[t]}function A(e){var t=I(e);return t||(T.push(t={el:e,binding:{}}),t)}function L(e){var t=A(this).binding;if(t.value){if(e.preventDefault(),"string"===typeof t.value)return O(t.value);O(t.value.el||t.value.element,t.value)}}var M={bind:function(e,t){A(e).binding=t,x.on(e,"click",L)},unbind:function(e){j(e),x.off(e,"click",L)},update:function(e,t){A(e).binding=t}},P={bind:M.bind,unbind:M.unbind,update:M.update,beforeMount:M.bind,unmounted:M.unbind,updated:M.update,scrollTo:O,bindings:T},$=function(e,t){t&&R(t),e.directive("scroll-to",P);var n=e.config.globalProperties||e.prototype;n.$scrollTo=P.scrollTo};return"undefined"!==typeof window&&window.Vue&&(window.VueScrollTo=P,window.VueScrollTo.setDefaults=R,window.VueScrollTo.scroller=C,window.Vue.use&&window.Vue.use($)),P.install=$,P}))}}]);