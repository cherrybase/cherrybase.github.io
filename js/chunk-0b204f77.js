(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b204f77"],{"2b27":function(e,t,n){(function(){var t={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},n={install:function(e){e.prototype.$cookies=this,e.$cookies=this},config:function(e,n,a,r,s){t.expires=e||"1d",t.path=n?"; path="+n:"; path=/",t.domain=a?"; domain="+a:"",t.secure=r?"; Secure":"",t.sameSite=s?"; SameSite="+s:"; SameSite=Lax"},get:function(e){var t=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(t&&"{"===t.substring(0,1)&&"}"===t.substring(t.length-1,t.length))try{t=JSON.parse(t)}catch(n){return t}return t},set:function(e,n,a,r,s,i,o){if(!e)throw new Error("Cookie name is not find in first argument.");if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(e))throw new Error('Cookie key name illegality, Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: '+e);n&&n.constructor===Object&&(n=JSON.stringify(n));var c="";if(a=void 0==a?t.expires:a,a&&0!=a)switch(a.constructor){case Number:c=a===1/0||-1===a?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(a)){var u=a.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(a.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":c="; max-age="+2592e3*+u;break;case"d":c="; max-age="+86400*+u;break;case"h":c="; max-age="+3600*+u;break;case"min":c="; max-age="+60*+u;break;case"s":c="; max-age="+u;break;case"y":c="; max-age="+31104e3*+u;break;default:new Error('unknown exception of "set operation"')}}else c="; expires="+a;break;case Date:c="; expires="+a.toUTCString();break}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+c+(s?"; domain="+s:t.domain)+(r?"; path="+r:t.path)+(void 0==i?t.secure:i?"; Secure":"")+(void 0==o?t.sameSite:o?"; SameSite="+o:""),this},remove:function(e,n,a){return!(!e||!this.isKey(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; domain="+a:t.domain)+(n?"; path="+n:t.path)+"; SameSite=Lax",this)},isKey:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e}};e.exports=n,"undefined"!==typeof window&&(window.$cookies=n)})()},"2f21":function(e,t,n){"use strict";var a=n("79e5");e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"321e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"}}),n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},r=[],s=(n("96cf"),n("3b8d")),i=n("a026"),o=(n("28a5"),n("ac6a"),n("55dd"),n("75fc")),c=n("bc3a"),u=n.n(c),p=n("3ef3"),d=n("d166"),l=n("6172"),m={nextCache:{},first:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.nextCache[n]){e.next=9;break}return this.nextCache[n]=t(),console.log("New Set",this.nextCache[n]),e.next=5,this.nextCache[n];case 5:return a=e.sent,console.log("New Resp",a),delete this.nextCache[n],e.abrupt("return",a);case 9:return console.log("Exists",this.nextCache[n]),e.next=12,this.nextCache[n];case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},f=m,h=n("8760"),g=p["a"].guid;function v(e,t){return!(!e||!t)&&("null"!=e&&"null"!=t&&e===t)}var w=0,b=0,y=function(){w=Date.now()},k={user:null,agents:[],contacts:null,chats:[],chatsMessages:{},chatsVersion:0,chatsSize:null,chatsCounter:1,meta:{isOnline:void 0,isAway:!1},mediaOptions:[],quickActions:[],quickLabels:[],quickReplies:[],quickTags:[],chatHistory:{sessions:null},searchChat:[]},R=function(e){return{id:e.id,category:e.category,title:e.title,text:e.title,code:e.code,color:p["a"].hexacode(e.category),selected:!1}},x={StateChats:function(e){return e.chats},StateChatsVersion:function(e){return e.chatsVersion},StateMeta:function(e){return e.meta},StateMediaOptions:function(e){return e.mediaOptions},StateQuickActions:function(e){return e.quickActions},StateQuickLabels:function(e){return e.quickLabels},StateQuickTags:function(e){return e.quickTags},StateQuickTagsSorted:function(e){var t={},n=e.quickTags;return n.map((function(e){t[e.category]=t[e.category]?[].concat(Object(o["a"])(t[e.category]),[e]):[e]})),t},StateAgentOptions:function(e){return e.agents},StateChatHistory:function(e){return e.chatHistory.sessions},SearchChat:function(e){return e.searchChat}},S={_RefeshSession:function(){var e=null,t=0;return function(){var n=Object(s["a"])(regeneratorRuntime.mark((function n(a){var r,s,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=a.isOnline,s=a.isUpdate,i=a.isAway,o=Date.now()-500,s=s&&t<o,s&&(t=Date.now()),e=(s?null:e)||u.a.get("/api/sessions/assignments",{params:{status:r,away:i,isUpdate:s,tab:d["c"].agent.contactsTab,search:k.searchChat.filter((function(e){return!e.isTag&&e.text})).map((function(e){return e.text})).join("*")}}).then((function(e){return console.log("_UpdateChats:success"),e})).catch((function(e){console.log("_UpdateChats:error")})).then((function(t){return console.log("_UpdateChats:always"),setTimeout((function(){return e=null}),d["a"].config.chatRefreshInterval),t})),n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(),_MatchQuickReplies:Object(h["a"])((function(e){e=e||{categories:[],text:""},e.categories=e.categories;e.text=(e.text||"").toLowerCase();var t=k.quickReplies.map((function(t){return l["a"].quickReply(t,e),t}));return t.sort((function(e,t){return t.matchScore-e.matchScore}))}),500)},O={RefeshSession:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=t.dispatch,s=Date.now()-d["a"].config.chatRefreshInterval,n||!(w<s)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,S._RefeshSession({isOnline:k.meta.isOnline,isUpdate:n,isAway:k.meta.isAway});case 6:i=e.sent,i.data&&i.data.details&&r("SetAgentOptionsStatus",i.data.details),i.data&&i.data.results&&r("updateChats",i.data.results),a("setMeta",k.meta),clearTimeout(b),b=setTimeout((function(){r("RefeshSession")}),d["a"].config.agentSessionTimeout),y();case 13:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),RefeshTimer:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,t.dispatch,y();case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LogIn:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,u.a.post("/auth/login/submit",n).then((function(e){if("SUCCESS"!==e.data.statusKey)throw e.data}));case 3:return e.next=5,a("setUser",n.get("username"));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LogOut:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,u.a.get("/auth/logout"),a=null,n("logout",a);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,n("RefeshSession",!0);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),RefreshChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,n("updateChats",k.chats);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),GetChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=t.dispatch,e.next=3,n("LoadChats");case 3:return e.sent,e.next=6,new Promise((function(e,t){var n;n=setInterval((function(){null!==k.chatsSize&&(clearInterval(n),e("foo"))}),2e3)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),AddChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s in t.commit,a=t.dispatch,r=Object.assign({},n),k.chats)if(k.chats[s].contactId==n.contactId){for(i in k.chats[s].active=!!n.active,k.chats[s].getAssignedToAgent=n.getAssignedToAgent,k.chats[s].resolved=n.resolved,n.messages)l["a"].appendMessage(k.chats[s],n.messages[i]);r.messages=k.chats[s].messages||r.messages,r.local=k.chats[s].local||r.local,l["a"].session(k.chats[s]),k.chats.splice(s,1)}r&&r.active&&k.chats.push(r),a("updateChats",k.chats);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AddHistoryChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s in a=t.commit,r=k.chatHistory.sessions,r)r[s].sessionId==n.sessionId&&(r[s].active=!!n.active,r[s]=n);a("setChatHistory",k.chatHistory);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChatPre:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,n.messageIdRef=n.messageIdRef||g(),n.version=n.version||0,a("ReadChatMessage",n);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChatPost:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,a("ReadChatMessage",n);case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,a("SendChatPre",n),r="/api/sessions/message/send","/add_stick_note"==n.action&&(r="/api/sessions/note"),e.next=6,u.a.post(r,{id:n.id,message:n.text,template:n.template,attachments:n.attachments,sessionId:n.sessionId,hsm:Object.assign({id:n.templateId,code:n.templateCode},n.template),action:n.action,contact:n.contact,messageIdRef:n.messageIdRef});case 6:return s=e.sent,a("SendChatPost",s.data.results[0]),e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendFile:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,a("SendChatPre",n.message),r=new FormData,r.append("message",JSON.stringify(n.message)),r.append("file",n.file,n.fileName),e.next=7,u.a.post("/api/sessions/message/upload",r);case 7:return s=e.sent,a("ReadChatMessage",s.results[0]),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UpdateChatMessageStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,e.t0=regeneratorRuntime.keys(k.chats);case 2:if((e.t1=e.t0()).done){e.next=21;break}if(r=e.t1.value,s=k.chats[r],!s.messages){e.next=19;break}e.t2=regeneratorRuntime.keys(s.messages);case 7:if((e.t3=e.t2()).done){e.next=19;break}if(i=e.t3.value,o=s.messages[i],!v(s.contact.contactType,n.contact.contactType)||!v(o.messageId,n.messageId)&&!v(n.messageIdExt,o.messageIdExt)){e.next=17;break}return o.stamps=o.stamps||{},o.stamps[n.status]=n.changeStamp,o.stamps=Object.assign({},o.stamps),console.log("msg.stamps",o.stamps),a("updateChats",k.chats),e.abrupt("return");case 17:e.next=7;break;case 19:e.next=2;break;case 21:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),ReadChatMessage:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,a=t.dispatch,n){e.next=3;break}return e.abrupt("return");case 3:n.messageIdRef=n.messageIdRef||g(),r=!1,e.t0=regeneratorRuntime.keys(k.chats);case 6:if((e.t1=e.t0()).done){e.next=15;break}if(s=e.t1.value,i=k.chats[s],r=n.sessionId==i.sessionId,!r){e.next=13;break}return l["a"].appendMessage(i,n),e.abrupt("break",15);case 13:e.next=6;break;case 15:a("updateChats",k.chats);case 16:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),ReadSession:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in a=t.dispatch,n)for(i in s=n[r],k.chats)o=k.chats[i],o.sessionId==s.sessionId&&(o.status=s.status,o.tagId=s.tagId);a("updateChats",k.chats);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),OnlineStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,r=!1,void 0!==n.online&&(k.meta.isOnline=n.online,r=!0),void 0!==n.away&&(k.meta.isAway=n.away),a("RefeshSession",r);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SetAgentOptionsStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i in a=t.commit,r=(new Date).getTime()-d["a"].config.agentSessionTimeout,s=r-2*d["a"].config.agentSessionTimeout,n)k.agents.map((function(e){var t=n[i];e.code==t.agentCode&&(e.session=t,t.isLoggedIn=t.isLoggedIn&&t.lastOnlineStamp>s,t.isAvailable=t.isLoggedIn&&t.isOnline&&t.lastOnlineStamp>r,t.isAvailableNot=t.isLoggedIn&&!t.isOnline,t.isAway=t.isOnline&&t.isLoggedIn&&t.lastOnlineStamp<r,e.statusScore=0,t.isAvailable?e.statusScore=4:t.isAway?e.statusScore=3:t.isAvailableNot?e.statusScore=2:t.isLoggedIn&&(e.statusScore=1),e.code==d["a"].agent&&(k.meta.isOnline=t.isOnline,a("setMeta",k.meta)))}));k.agents=k.agents.sort((function(e,t){return e.statusScore>t.statusScore?-1:e.statusScore<t.statusScore?1:e.code.toLowerCase()<t.code.toLowerCase()?-1:1})),a("setAgents",k.agents);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadAgentOptions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.next=3,u.a.get("/api/options/agents");case 3:r=e.sent,r.data&&r.data.results&&n("setAgents",r.data.results),a("RefeshSession");case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadMediaOptions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,u.a.get("/gallery/map/media_reply");case 3:a=e.sent,n("setMediaOptions",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickActions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,u.a.get("/gallery/map/quick_actions");case 3:a=e.sent,n("setQuickActions",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickLabels:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,u.a.get("/gallery/map/quick_labels");case 3:a=e.sent,n("setQuickLabels",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,u.a.get("/gallery/map/quick_tags");case 3:a=e.sent,n("setQuickTags",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),AttachQuickLabels:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=n.sessionId,r=n.labels,e.next=4,u.a.post("/api/contact/label?sessionId="+a,{values:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AttachQuickTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=n.sessionId,r=n.tags,e.next=4,u.a.post("/api/contact/tag?sessionId="+a,{values:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UpdateSessionTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,r=n.sessionId,s=n.status,i=n.tags,e.next=4,u.a.post("/api/session/tag",{sessionId:r,status:s,tags:i});case 4:return o=e.sent,a("ReadSession",o.data.results),e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadQuickReplies:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,k.quickReplies&&0!=k.quickReplies.length){e.next=7;break}return e.next=4,u.a.get("/category/map/smart_reply");case 4:for(s in r=e.sent,r.data)r.data[s].template=p["a"].nullify(r.data[s].template);a("setQuickReply",r.data);case 7:return e.abrupt("return",S._MatchQuickReplies(n));case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=JSON.stringify(n),k.chatHistory.contactId!=r){e.next=4;break}return e.abrupt("return",k.chatHistory.sessions);case 4:return e.next=6,u.a.get("/api/sessions/contact",{params:n});case 6:return s=e.sent,k.chatHistory.contactId=r,k.chatHistory.sessions=s.data.results,a("setChatHistory",k.chatHistory),e.abrupt("return",s.data.results);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessionChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,e.next=3,f.first((function(){return u.a.post("/api/sessions/messages?sessionId="+n.sessionId,n)}),"messages:"+n.sessionId);case 3:return r=e.sent,l["a"].session(r.data.results[0]),r.data.results[0].local.active?a("AddChat",r.data.results[0]):a("AddHistoryChat",r.data.results[0]),e.abrupt("return",r.data.results[0]);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AssingToAgent:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,r=n.sessionId,s=n.agentId,i=new URLSearchParams,i.append("sessionId",r),i.append("agentId",s),e.next=7,u.a.post("/api/session/agent",i);case 7:return o=e.sent,a("AddChat",o.data.results[0]),e.abrupt("return",o.data);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,a=n.url,r=n.params,e.next=4,u.a.get(a,{params:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),PostRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,a=n.url,r=n.params,e.next=4,u.a.post(a,r);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),updateChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,t.dispatch,r=t.rootGetters,r.local.readStamp)for(s in n)n[s].lastReadStamp=Math.max(r.local.readStamp[n[s].sessionId]||0,n[s].lastReadStamp||0);a("setChats",n);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},C={setChats:function(e,t){for(var n in t){if(t[n].lastmsg=t[n].lastmsg||{},t[n].messages)for(var a=0;a<t[n].messages.length;a++)"I"==t[n].messages[a].type&&(t[n].ilastmsg=t[n].messages[a]),["I","O"].indexOf(t[n].messages[a].type)>=0&&(t[n].lastmsg=t[n].messages[a]),t[n].messages[a].stamps=t[n].messages[a].stamps||{};else t[n].msg&&(t[n].ilastmsg=t[n].msg.lastInBoundMsg||t[n].ilastmsg,t[n].lastmsg=t[n].msg.lastMsg||t[n].lastmsg);(!e.chatsMessages[t[n].sessionId]||!e.chatsMessages[t[n].sessionId].length||t[n].messages&&t[n].messages.length>=e.chatsMessages[t[n].sessionId].length)&&(e.chatsMessages[t[n].sessionId]=t[n].messages||e.chatsMessages[t[n].sessionId]),t[n].messages=e.chatsMessages[t[n].sessionId],t[n].local=t[n].local,l["a"].session(t[n])}e.chatsSize=t.length,e.chats=t,e.chatsVersion++},setChatHistory:function(e,t){e.chatHistory=t},setMeta:function(e,t){e.meta=t},setQuickReply:function(e,t){e.quickReplies=t},setQuickActions:function(e,t){e.quickActions=t},setQuickLabels:function(e,t){p["a"].addContactLabels(t),e.quickLabels=t},setQuickTags:function(e,t){var n=t.map((function(e){return R(e)}));p["a"].addContactTags(n),e.quickTags=n},setMediaOptions:function(e,t){e.mediaOptions=t},setAgents:function(e,t){e.agents=t,y()},setSessionSearch:function(e,t){t=(t||"").trim(),t&&(t+="*"),e.searchChat=t.split(/(:[\w]+)/).filter((function(e){return!!e})).map((function(e){var t=e.split(":");return{isTag:!t[0],text:(t[0]||t[1]).trim(),_text:(t[0]||t[1]).toLowerCase().replaceAll("*","").trim()}}))},setUser:function(e,t){e.user=t},logout:function(e,t){e.user=t}},I={state:k,getters:x,actions:O,mutations:C},T=n("8610"),j=n("9af4"),A=n.n(j),_=n("2b27"),L=n.n(_),M=n("9062"),$=n.n(M),P=(n("0808"),n("6944")),U=n.n(P),q=n("caf9");i["default"].use(L.a),i["default"].use($.a),i["default"].component("Loading",$.a),i["default"].use(U.a);var H=n.p+"/_common/static/loading-spin.svg",E=n.p+"/_common/static/loading-spin.svg";i["default"].use(q["a"],{preLoad:1.3,error:E,loading:H,attempt:1,throttleWait:1e3});var Q="default";i["default"].component("default-agent-layout",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d230ab4"),n.e("chunk-2d0bb20c"),n.e("chunk-559cb6f2")]).then(n.bind(null,"f979"))})),i["default"].component("plug-agent-layout",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d230ab4"),n.e("chunk-2d0bb20c"),n.e("chunk-c3d0c154")]).then(n.bind(null,"fd90"))}));var N={name:"AppAgent",computed:{layout:function(){return(this.$route.meta.layout||Q)+"-agent-layout"}},data:function(){return{refreshTimer:0}},methods:{refresh:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.clearTimeout(this.refreshTimer),A.a.isSupported()&&A.a.hidden()){e.next=4;break}return e.next=4,this.$store.dispatch("RefeshSession");case 4:t=this,this.refreshTimer=window.setTimeout((function(){t.refresh()}),T["a"].connected?1e4:1e3);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.$store.registerModule("DataStore",I)},mounted:function(){var e=this,t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(t);var n=this;console.log("TUNNEL"),this.tunnel=T["a"].init().instance().on("/message/sent/new",(function(e){console.log("/message/sent/new===",e),n.$store.dispatch("ReadChatMessage",e),n.$store.dispatch("RefeshTimer")})).on("/message/receive/new",(function(e){e.version=3,console.log("/message/receive/new:msg===",e),n.$store.dispatch("ReadChatMessage",e),n.$store.dispatch("RefeshTimer")})).on("/dept/onassign-"+window.CONST.APP_DEPT,(function(e){console.log("/dept/onassign-"+window.CONST.APP_DEPT,e),n.$store.dispatch("AddChat",e),n.$store.dispatch("RefeshTimer")})).on("/dept/onassign-__DEPT__",(function(e){console.log("/dept/onassign-__DEPT__",e),n.$store.dispatch("AddChat",e),n.$store.dispatch("RefeshTimer")})).on("/message/update/status",(function(e){console.log("/message/update/status===",e),n.$store.dispatch("UpdateChatMessageStatus",e),n.$store.dispatch("RefeshTimer")})).on("/agent/session/update",(function(e){console.log("/agent/session/update",e),n.$store.dispatch("SetAgentOptionsStatus",[e]),n.$store.dispatch("RefeshTimer")})).on("/chat/session/update",(function(e){console.log("/chat/session/update",status),n.$store.dispatch("ReadSession",[e]),n.$store.dispatch("RefeshTimer")})),A.a.change((function(t,n){e.$store.dispatch("OnlineStatus",{type:"away",away:n})})),this.refresh()},beforeUnmount:function(){this.tunnel.off(),window.clearTimeout(this.refreshTimer)}},D=N,G=(n("79d4"),n("2877")),J=Object(G["a"])(D,a,r,!1,null,null,null);t["default"]=J.exports},"55dd":function(e,t,n){"use strict";var a=n("5ca1"),r=n("d8e8"),s=n("4bf8"),i=n("79e5"),o=[].sort,c=[1,2,3];a(a.P+a.F*(i((function(){c.sort(void 0)}))||!i((function(){c.sort(null)}))||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(s(this)):o.call(s(this),r(e))}})},"75fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("a745"),r=n.n(a),s=n("db2a");function i(e){if(r()(e))return Object(s["a"])(e)}var o=n("67bb"),c=n.n(o),u=n("5d58"),p=n.n(u),d=n("774e"),l=n.n(d);function m(e){if("undefined"!==typeof c.a&&null!=e[p.a]||null!=e["@@iterator"])return l()(e)}var f=n("e630");function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e){return i(e)||m(e)||Object(f["a"])(e)||h()}},"79d4":function(e,t,n){"use strict";n("a0dd")},8610:function(e,t,n){"use strict";t["a"]={client:null,connected:!1,init:function(){if(!this.client){var e=this;this.client=window.tunnelClient.config({user:window.CONST.APP_USER,context:window.CONST.APP_CONTEXT}),window.__onsocket_disconnect__=function(t,n){console.log("MSG",t),"CLOSED"==t.type&&(e.connected=!1,n())},window.__onsocket_connect__=function(t,n){e.connected=!0}}return this.client},instance:function(){return this.client.instance()}}},8760:function(e,t,n){"use strict";var a=n("b012"),r=n.n(a);const s=function(e,t,n,a){let s,i,o,c;var u=r()((function(){i(e.apply(o,c)),o=c=null,s=null}),t,n,a);let p=function(){return o=this,c=arguments,s=s||new Promise((function(e){i=e})),u(),s};return p.clear=function(e){u.clear(e)},p.flush=function(e){u.flush(e)},p};t["a"]=s},"9af4":function(e,t,n){!function(t,n){e.exports=n()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a,r,s=Symbol("visibility-change-id"),i=-1;void 0!==document.hidden?(a="hidden",r="visibilitychange"):void 0!==document.msHidden?(a="msHidden",r="msvisibilitychange"):void 0!==document.webkitHidden?(a="webkitHidden",r="webkitvisibilitychange"):void 0!==document.mozHidden&&(a="mozHidden",r="mozvisibilitychange");var o,c={},u=document;function p(){o||(document.addEventListener(r,(function(){(function(e){for(var t in c)c[t].call(u,e,u[a])}).apply(d,arguments)})),o=!0)}var d={change:function(e){if(!d.isSupported())return!1;var t=i+=1;return c[t]=e,p(),t},unbind:function(e){delete c[e]},isSupported:function(){return void 0!==a},hidden:function(){return u[a]},install:function(e){e.directive("visibility-change",{bind:function(e,t){var n=t.value;"function"==typeof n?e[s]=d.change((function(e,t){n(e,t)})):console.error("You need bind a callback function for v-visibility-change")},unbind:function(e){d.unbind(e[s])}})}};t.default=d}])}))},a0dd:function(e,t,n){},b012:function(e,t){function n(e,t,n){var a,r,s,i,o;function c(){var u=Date.now()-i;u<t&&u>=0?a=setTimeout(c,t-u):(a=null,n||(o=e.apply(s,r),s=r=null))}null==t&&(t=100);var u=function(){s=this,r=arguments,i=Date.now();var u=n&&!a;return a||(a=setTimeout(c,t)),u&&(o=e.apply(s,r),s=r=null),o};return u.clear=function(){a&&(clearTimeout(a),a=null)},u.flush=function(){a&&(o=e.apply(s,r),s=r=null,clearTimeout(a),a=null)},u}n.debounce=n,e.exports=n}}]);