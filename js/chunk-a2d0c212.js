(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2d0c212"],{"2b27":function(e,t,n){(function(){var t={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},n={install:function(e,t){t&&this.config(t.expires,t.path,t.domain,t.secure,t.sameSite),e.prototype&&(e.prototype.$cookies=this),e.config&&e.config.globalProperties&&(e.config.globalProperties.$cookies=this,e.provide("$cookies",this)),e.$cookies=this},config:function(e,n,a,r,s){t.expires=e||"1d",t.path=n?"; path="+n:"; path=/",t.domain=a?"; domain="+a:"",t.secure=r?"; Secure":"",t.sameSite=s?"; SameSite="+s:"; SameSite=Lax"},get:function(e){var t=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(t&&"{"===t.substring(0,1)&&"}"===t.substring(t.length-1,t.length))try{t=JSON.parse(t)}catch(n){return t}return t},set:function(e,n,a,r,s,i,o){if(!e)throw new Error("Cookie name is not found in the first argument.");if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(e))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: '+e);n&&n.constructor===Object&&(n=JSON.stringify(n));var c="";if(a=void 0==a?t.expires:a,a&&0!=a)switch(a.constructor){case Number:c=a===1/0||-1===a?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(a)){var u=a.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(a.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":c="; max-age="+2592e3*+u;break;case"d":c="; max-age="+86400*+u;break;case"h":c="; max-age="+3600*+u;break;case"min":c="; max-age="+60*+u;break;case"s":c="; max-age="+u;break;case"y":c="; max-age="+31104e3*+u;break;default:new Error('unknown exception of "set operation"')}}else c="; expires="+a;break;case Date:c="; expires="+a.toUTCString();break}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+c+(s?"; domain="+s:t.domain)+(r?"; path="+r:t.path)+(void 0==i?t.secure:i?"; Secure":"")+(void 0==o?t.sameSite:o?"; SameSite="+o:""),this},remove:function(e,n,a){return!(!e||!this.isKey(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; domain="+a:t.domain)+(n?"; path="+n:t.path)+"; SameSite=Lax",!0)},isKey:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e}};e.exports=n,"undefined"!==typeof window&&(window.$cookies=n)})()},"2f21":function(e,t,n){"use strict";var a=n("79e5");e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"321e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"}}),n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},r=[],s=(n("96cf"),n("3b8d")),i=n("a026"),o=(n("28a5"),n("ac6a"),n("55dd"),n("75fc")),c=n("bc3a"),u=n.n(c),l=n("3ef3"),f=n("d166"),p=n("6172"),d={nextCache:{},first:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.nextCache[n]){e.next=9;break}return this.nextCache[n]=t(),console.log("New Set",this.nextCache[n]),e.next=5,this.nextCache[n];case 5:return a=e.sent,console.log("New Resp",a),delete this.nextCache[n],e.abrupt("return",a);case 9:return console.log("Exists",this.nextCache[n]),e.next=12,this.nextCache[n];case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},m=d,h=n("8760"),g=l["a"].guid;function v(e,t){return!(!e||!t)&&("null"!=e&&"null"!=t&&e===t)}var w=0,b=0,y=function(){w=Date.now()},k={user:null,agents:[],contacts:null,chats:[],chatsMessages:{},chatsVersion:0,chatsSize:null,chatsCounter:1,meta:{isOnline:void 0,isAway:!1,isLoadingChats:!1},mediaOptions:[],quickActions:[],quickLabels:[],quickReplies:[],quickTags:[],chatHistory:{sessions:null},searchChat:{tokens:[],status:"ACTIVE",limit:0,tab:"ME"}},x=function(e){return{id:e.id,category:e.category,title:e.title,text:e.title,code:e.code,color:l["a"].hexacode(e.category),selected:!1}},R={StateChats:function(e){return e.chats},StateChatsVersion:function(e){return e.chatsVersion},StateMeta:function(e){return e.meta},StateMediaOptions:function(e){return e.mediaOptions},StateQuickActions:function(e){return e.quickActions},StateQuickLabels:function(e){return e.quickLabels},StateQuickTags:function(e){return e.quickTags},StateQuickTagsSorted:function(e){var t={},n=e.quickTags;return n.map((function(e){t[e.category]=t[e.category]?[].concat(Object(o["a"])(t[e.category]),[e]):[e]})),t},StateAgentOptions:function(e){return e.agents},StateChatHistory:function(e){return e.chatHistory.sessions},SearchChat:function(e){return e.searchChat}},S={__RefeshSessionRequest:function(e){var t=e.isOnline,n=e.isUpdate,a=e.isAway;return u.a.get("/api/sessions/assignments",{params:{status:t,away:a,isUpdate:n,tab:f["c"].agent.contactsTab,searchStatus:k.searchChat.status,limit:k.searchChat.limit,search:k.searchChat.tokens.filter((function(e){return!e.isTag&&e.text})).map((function(e){return e.text})).join("*")}})},_RefeshSession:function(){var e=null,t=0;return function(){var n=Object(s["a"])(regeneratorRuntime.mark((function n(a){var r,s,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=a.isOnline,s=a.isUpdate,i=a.isAway,o=Date.now()-500,s=s&&t<o,s&&(t=Date.now()),!e||s){n.next=6;break}return n.abrupt("return",e);case 6:return e=S.__RefeshSessionRequest({isOnline:r,isUpdate:s,isAway:i}).then((function(e){return console.log("_UpdateChats:success"),e})).catch((function(e){console.log("_UpdateChats:error")})).then((function(t){return console.log("_UpdateChats:always"),setTimeout((function(){e=null}),f["a"].config.chatRefreshInterval),t})),n.abrupt("return",e);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(),_MatchQuickReplies:Object(h["a"])((function(e){e=e||{categories:[],text:""},e.categories=e.categories;e.text=(e.text||"").toLowerCase();var t=k.quickReplies.map((function(t){return p["a"].quickReply(t,e),t}));return t.sort((function(e,t){return t.matchScore-e.matchScore}))}),500)},O={RefeshSession:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=t.dispatch,s=Date.now()-f["a"].config.chatRefreshInterval,n||!(w>s)){e.next=4;break}return e.abrupt("return");case 4:return k.meta.isLoadingChats=!0,e.next=7,S._RefeshSession({isOnline:k.meta.isOnline,isUpdate:n,isAway:k.meta.isAway});case 7:i=e.sent,k.meta.isLoadingChats=!1,i.data&&i.data.details&&r("SetAgentOptionsStatus",i.data.details),i.data&&i.data.results&&r("updateChats",i.data.results),a("setMeta",k.meta),clearTimeout(b),b=setTimeout((function(){r("RefeshSession")}),f["a"].config.agentSessionTimeout),y();case 15:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),RefeshTimer:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,t.dispatch,y();case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LogIn:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,u.a.post("/auth/login/submit",n).then((function(e){if("SUCCESS"!==e.data.statusKey)throw e.data}));case 3:return e.next=5,a("setUser",n.get("username"));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LogOut:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,u.a.get("/auth/logout"),a=null,n("logout",a);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,n("RefeshSession",!0);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),RefreshChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,n("updateChats",k.chats);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),GetChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=t.dispatch,e.next=3,n("LoadChats");case 3:return e.sent,e.next=6,new Promise((function(e,t){var n;n=setInterval((function(){null!==k.chatsSize&&(clearInterval(n),e("foo"))}),2e3)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),AddChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s in t.commit,a=t.dispatch,r=Object.assign({},n),k.chats)if(k.chats[s].contactId==n.contactId){for(i in k.chats[s].active=!!n.active,k.chats[s].getAssignedToAgent=n.getAssignedToAgent,k.chats[s].resolved=n.resolved,n.messages)p["a"].appendMessage(k.chats[s],n.messages[i]);r.messages=k.chats[s].messages||r.messages,r.local=k.chats[s].local||r.local,p["a"].session(k.chats[s]),k.chats.splice(s,1)}r&&r.active&&k.chats.push(r),a("updateChats",k.chats);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AddHistoryChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s in a=t.commit,r=k.chatHistory.sessions,r)r[s].sessionId==n.sessionId&&(r[s].active=!!n.active,r[s]=n);a("setChatHistory",k.chatHistory);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChatPre:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,n.messageIdRef=n.messageIdRef||g(),n.version=n.version||0,a("ReadChatMessage",n);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChatPost:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,a("ReadChatMessage",n);case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendChat:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,a("SendChatPre",n),r="/api/sessions/message/send","/add_stick_note"==n.action&&(r="/api/sessions/note"),e.next=6,u.a.post(r,{id:n.id,message:n.message||n.text,template:n.template,attachments:n.attachments,sessionId:n.sessionId,hsm:Object.assign({id:n.templateId,code:n.templateCode},n.template),action:n.action,contact:n.contact,messageIdRef:n.messageIdRef});case 6:return s=e.sent,a("SendChatPost",s.data.results[0]),e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SendFile:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,a("SendChatPre",n.message),r=new FormData,r.append("message",JSON.stringify(n.message)),r.append("file",n.file,n.fileName),e.next=7,u.a.post("/api/sessions/message/upload",r);case 7:return s=e.sent,a("ReadChatMessage",s.results[0]),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UpdateChatMessageStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,e.t0=regeneratorRuntime.keys(k.chats);case 2:if((e.t1=e.t0()).done){e.next=22;break}if(r=e.t1.value,s=k.chats[r],!s.messages){e.next=20;break}e.t2=regeneratorRuntime.keys(s.messages);case 7:if((e.t3=e.t2()).done){e.next=20;break}if(i=e.t3.value,o=s.messages[i],!v(s.contact.contactType,n.contact.contactType)||!v(o.messageId,n.messageId)&&!v(n.messageIdExt,o.messageIdExt)){e.next=18;break}return o.stamps=o.stamps||{},o.stamps[n.status]=n.changeStamp,o.stamps=Object.assign({},o.stamps),o.status=n.status,console.log("msg.stamps",o.stamps),a("updateChats",k.chats),e.abrupt("return");case 18:e.next=7;break;case 20:e.next=2;break;case 22:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),ReadChatMessage:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,a=t.dispatch,n){e.next=3;break}return e.abrupt("return");case 3:n.messageIdRef=n.messageIdRef||g(),r=!1,e.t0=regeneratorRuntime.keys(k.chats);case 6:if((e.t1=e.t0()).done){e.next=15;break}if(s=e.t1.value,i=k.chats[s],r=n.sessionId==i.sessionId,!r){e.next=13;break}return p["a"].appendMessage(i,n),e.abrupt("break",15);case 13:e.next=6;break;case 15:a("updateChats",k.chats);case 16:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),ReadSession:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in a=t.dispatch,n)for(i in s=n[r],k.chats)o=k.chats[i],o.sessionId==s.sessionId&&(o.status=s.status,o.tagId=s.tagId);a("updateChats",k.chats);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),OnlineStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,a=t.dispatch,r=!1,void 0!==n.online&&(k.meta.isOnline=n.online,r=!0),void 0!==n.away&&(k.meta.isAway=n.away),a("RefeshSession",r);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SetAgentOptionsStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=t.dispatch,e.next=3,r("LoadAgentOptions");case 3:for(o in s=(new Date).getTime()-f["a"].config.agentSessionTimeout,i=s-2*f["a"].config.agentSessionTimeout,n)k.agents.map((function(e){var t=n[o];e.code==t.agentCode&&(e.session=t,t.isLoggedIn=t.isLoggedIn&&t.lastOnlineStamp>i,t.isAvailable=t.isLoggedIn&&t.isOnline&&t.lastOnlineStamp>s,t.isAvailableNot=t.isLoggedIn&&!t.isOnline,t.isAway=t.isOnline&&t.isLoggedIn&&t.lastOnlineStamp<s,e.statusScore=0,t.isAvailable?e.statusScore=4:t.isAway?e.statusScore=3:t.isAvailableNot?e.statusScore=2:t.isLoggedIn&&(e.statusScore=1),e.code==f["a"].agent&&(k.meta.isOnline=t.isOnline,a("setMeta",k.meta)))}));k.agents=k.agents.sort((function(e,t){return e.statusScore>t.statusScore?-1:e.statusScore<t.statusScore?1:e.code.toLowerCase()<t.code.toLowerCase()?-1:1})),a("setAgents",k.agents);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadAgentOptions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,a=t.dispatch,!k.agents||!k.agents.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,u.a.get("/api/options/agents");case 5:r=e.sent,r.data&&r.data.results&&n("setAgents",r.data.results),a("RefeshSession");case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadMediaOptions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,u.a.get("/gallery/map/media_reply");case 3:a=e.sent,n("setMediaOptions",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickActions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,u.a.get("/gallery/map/quick_actions");case 3:a=e.sent,n("setQuickActions",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickLabels:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,u.a.get("/gallery/map/quick_labels");case 3:a=e.sent,n("setQuickLabels",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LoadQuickTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,u.a.get("/gallery/map/quick_tags");case 3:a=e.sent,n("setQuickTags",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),AttachQuickLabels:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=n.sessionId,r=n.labels,e.next=4,u.a.post("/api/contact/label?sessionId="+a,{values:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AttachQuickTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=n.sessionId,r=n.tags,e.next=4,u.a.post("/api/contact/tag?sessionId="+a,{values:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UpdateSessionTags:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,r=n.sessionId,s=n.status,i=n.tags,e.next=4,u.a.post("/api/session/tag",{sessionId:r,status:s,tags:i});case 4:return o=e.sent,a("ReadSession",o.data.results),e.abrupt("return",o.data);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadQuickReplies:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,k.quickReplies&&0!=k.quickReplies.length){e.next=7;break}return e.next=4,u.a.get("/category/map/smart_reply");case 4:for(s in r=e.sent,r.data)r.data[s].template=l["a"].nullify(r.data[s].template);a("setQuickReply",r.data);case 7:return e.abrupt("return",S._MatchQuickReplies(n));case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=JSON.stringify(n),k.chatHistory.contactId!=r){e.next=4;break}return e.abrupt("return",k.chatHistory.sessions);case 4:return e.next=6,u.a.get("/api/sessions/contact",{params:n});case 6:return s=e.sent,k.chatHistory.contactId=r,k.chatHistory.sessions=s.data.results,a("setChatHistory",k.chatHistory),e.abrupt("return",s.data.results);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessionChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,e.next=3,m.first((function(){return u.a.post("/api/sessions/messages?sessionId="+n.sessionId,n)}),"messages:"+n.sessionId);case 3:return r=e.sent,p["a"].session(r.data.results[0]),r.data.results[0].local.active?a("AddChat",r.data.results[0]):a("AddHistoryChat",r.data.results[0]),e.abrupt("return",r.data.results[0]);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),AssingToAgent:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,a=t.dispatch,r=n.sessionId,s=n.agentId,i=new URLSearchParams,i.append("sessionId",r),i.append("agentId",s),e.next=7,u.a.post("/api/session/agent",i);case 7:return o=e.sent,a("AddChat",o.data.results[0]),e.abrupt("return",o.data);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,a=n.url,r=n.params,e.next=4,u.a.get(a,{params:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),PostRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,a=n.url,r=n.params,e.next=4,u.a.post(a,r);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),updateChats:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,t.dispatch,r=t.rootGetters,r.local.readStamp)for(s in n)n[s].lastReadStamp=Math.max(r.local.readStamp[n[s].sessionId]||0,n[s].lastReadStamp||0);a("setChats",n);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},C={setChats:function(e,t){for(var n in t){if(t[n].lastmsg=t[n].lastmsg||{},t[n].messages)for(var a=0;a<t[n].messages.length;a++)"I"==t[n].messages[a].type&&(t[n].ilastmsg=t[n].messages[a]),["I","O"].indexOf(t[n].messages[a].type)>=0&&(t[n].lastmsg=t[n].messages[a]),t[n].messages[a].stamps=t[n].messages[a].stamps||{};else t[n].msg&&(t[n].ilastmsg=t[n].msg.lastInBoundMsg||t[n].ilastmsg,t[n].lastmsg=t[n].msg.lastMsg||t[n].lastmsg);(!e.chatsMessages[t[n].sessionId]||!e.chatsMessages[t[n].sessionId].length||t[n].messages&&t[n].messages.length>=e.chatsMessages[t[n].sessionId].length)&&(e.chatsMessages[t[n].sessionId]=t[n].messages||e.chatsMessages[t[n].sessionId]),t[n].messages=e.chatsMessages[t[n].sessionId],t[n].local=t[n].local,p["a"].session(t[n])}e.chatsSize=t.length,e.chats=t,e.chatsVersion++},setChatHistory:function(e,t){e.chatHistory=t},setMeta:function(e,t){e.meta=t},setQuickReply:function(e,t){e.quickReplies=t},setQuickActions:function(e,t){e.quickActions=t},setQuickLabels:function(e,t){l["a"].addContactLabels(t),e.quickLabels=t},setQuickTags:function(e,t){var n=t.map((function(e){return x(e)}));l["a"].addContactTags(n),e.quickTags=n},setMediaOptions:function(e,t){e.mediaOptions=t},setAgents:function(e,t){e.agents=t,y()},setSessionSearch:function(e,t){var n=(t.text||"").trim();n&&(n+="*"),e.searchChat.tokens=n.split(/(:[\w]+)/).filter((function(e){return!!e})).map((function(e){var t=e.split(":");return{isTag:!t[0],text:(t[0]||t[1]).trim(),_text:(t[0]||t[1]).toLowerCase().replaceAll("*","").trim()}})),console.log(" state.searchChat.status",t.status),e.searchChat.status=t.status,e.searchChat.limit=t.limit,e.searchChat.tab=t.tab,e.searchChat=Object.assign({},e.searchChat)},setUser:function(e,t){e.user=t},logout:function(e,t){e.user=t}},T={state:k,getters:R,actions:O,mutations:C},I=n("8610"),j=n("9af4"),A=n.n(j),L=n("2b27"),_=n.n(L),M=n("9062"),P=n.n(M),$=(n("0808"),n("6944")),E=n.n($),q=n("f13c"),U=n.n(q),H=n("caf9");i["default"].use(_.a),i["default"].use(P.a),i["default"].component("Loading",P.a),i["default"].use(E.a),i["default"].use(U.a);var D=n.p+"/_common/static/loading-spin.svg",N=n.p+"/_common/static/loading-spin.svg";i["default"].use(H["a"],{preLoad:1.3,error:N,loading:D,attempt:1,throttleWait:1e3});i["default"].component("app-agent-layout",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d230ab4"),n.e("chunk-2d0bb20c"),n.e("chunk-d9bdb48c")]).then(n.bind(null,"f979"))})),i["default"].component("plug-agent-layout",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d230ab4"),n.e("chunk-2d0bb20c"),n.e("chunk-dcdae3f2")]).then(n.bind(null,"fd90"))})),i["default"].component("MySource",(function(){return n.e("chunk-6746e860").then(n.bind(null,"ebba"))})),i["default"].component("MyText",(function(){return n.e("chunk-2d1e9588").then(n.bind(null,"e26b"))}));var Q={name:"AppAgent",computed:{layout:function(){return"plug"==this.$route.params.app||"plug_mitel"==this.$route.params.app||"mitel"==window.CONST.APP_PLUG?"plug-agent-layout":"app-agent-layout"}},data:function(){return{refreshTimer:0}},methods:{refresh:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.clearTimeout(this.refreshTimer),A.a.isSupported()&&A.a.hidden()){e.next=4;break}return e.next=4,this.$store.dispatch("RefeshSession");case 4:t=this,this.refreshTimer=window.setTimeout((function(){t.refresh()}),I["a"].connected?1e4:1e3);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.$store.registerModule("DataStore",T)},mounted:function(){var e=this,t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(t);var n=this;console.log("TUNNEL"),this.tunnel=I["a"].init().instance().on("/message/sent/new",(function(e){console.log("/message/sent/new===",e),n.$store.dispatch("ReadChatMessage",e),n.$store.dispatch("RefeshTimer")})).on("/message/receive/new",(function(e){e.version=3,console.log("/message/receive/new:msg===",e),n.$store.dispatch("ReadChatMessage",e),n.$store.dispatch("RefeshTimer")})).on("/dept/onassign-"+window.CONST.APP_DEPT,(function(e){console.log("/dept/onassign-"+window.CONST.APP_DEPT,e),n.$store.dispatch("AddChat",e),n.$store.dispatch("RefeshTimer")})).on("/dept/onassign-__DEPT__",(function(e){console.log("/dept/onassign-__DEPT__",e),n.$store.dispatch("AddChat",e),n.$store.dispatch("RefeshTimer")})).on("/message/update/status",(function(e){console.log("/message/update/status===",e),n.$store.dispatch("UpdateChatMessageStatus",e),n.$store.dispatch("RefeshTimer")})).on("/agent/session/update",(function(e){console.log("/agent/session/update",e),n.$store.dispatch("SetAgentOptionsStatus",[e]),n.$store.dispatch("RefeshTimer")})).on("/chat/session/update",(function(e){console.log("/chat/session/update",status),n.$store.dispatch("ReadSession",[e]),n.$store.dispatch("RefeshTimer")})),A.a.change((function(t,n){e.$store.dispatch("OnlineStatus",{type:"away",away:n})})),this.refresh()},beforeUnmount:function(){this.tunnel.off(),window.clearTimeout(this.refreshTimer)}},z=Q,V=(n("79d4"),n("2877")),G=Object(V["a"])(z,a,r,!1,null,null,null);t["default"]=G.exports},"55dd":function(e,t,n){"use strict";var a=n("5ca1"),r=n("d8e8"),s=n("4bf8"),i=n("79e5"),o=[].sort,c=[1,2,3];a(a.P+a.F*(i((function(){c.sort(void 0)}))||!i((function(){c.sort(null)}))||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(s(this)):o.call(s(this),r(e))}})},"75fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("a745"),r=n.n(a),s=n("db2a");function i(e){if(r()(e))return Object(s["a"])(e)}var o=n("67bb"),c=n.n(o),u=n("5d58"),l=n.n(u),f=n("774e"),p=n.n(f);function d(e){if("undefined"!==typeof c.a&&null!=e[l.a]||null!=e["@@iterator"])return p()(e)}var m=n("e630");function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e){return i(e)||d(e)||Object(m["a"])(e)||h()}},"79d4":function(e,t,n){"use strict";n("a0dd")},8610:function(e,t,n){"use strict";t["a"]={client:null,connected:!1,init:function(){if(!this.client){var e=this;this.client=window.tunnelClient.config({user:window.CONST.APP_USER,context:window.CONST.APP_CONTEXT}),window.__onsocket_disconnect__=function(t,n){console.log("MSG",t),"CLOSED"==t.type&&(e.connected=!1,n())},window.__onsocket_connect__=function(t,n){e.connected=!0}}return this.client},instance:function(){return this.client.instance()}}},8760:function(e,t,n){"use strict";var a=n("b012"),r=n.n(a);const s=function(e,t,n,a){let s,i,o,c;var u=r()((function(){i(e.apply(o,c)),o=c=null,s=null}),t,n,a);let l=function(){return o=this,c=arguments,s=s||new Promise((function(e){i=e})),u(),s};return l.clear=function(e){u.clear(e)},l.flush=function(e){u.flush(e)},l};t["a"]=s},"9af4":function(e,t,n){!function(t,n){e.exports=n()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a,r,s=Symbol("visibility-change-id"),i=-1;void 0!==document.hidden?(a="hidden",r="visibilitychange"):void 0!==document.msHidden?(a="msHidden",r="msvisibilitychange"):void 0!==document.webkitHidden?(a="webkitHidden",r="webkitvisibilitychange"):void 0!==document.mozHidden&&(a="mozHidden",r="mozvisibilitychange");var o,c={},u=document;function l(){o||(document.addEventListener(r,(function(){(function(e){for(var t in c)c[t].call(u,e,u[a])}).apply(f,arguments)})),o=!0)}var f={change:function(e){if(!f.isSupported())return!1;var t=i+=1;return c[t]=e,l(),t},unbind:function(e){delete c[e]},isSupported:function(){return void 0!==a},hidden:function(){return u[a]},install:function(e){e.directive("visibility-change",{bind:function(e,t){var n=t.value;"function"==typeof n?e[s]=f.change((function(e,t){n(e,t)})):console.error("You need bind a callback function for v-visibility-change")},unbind:function(e){f.unbind(e[s])}})}};t.default=f}])}))},a0dd:function(e,t,n){},b012:function(e,t){function n(e,t,n){var a,r,s,i,o;function c(){var u=Date.now()-i;u<t&&u>=0?a=setTimeout(c,t-u):(a=null,n||(o=e.apply(s,r),s=r=null))}null==t&&(t=100);var u=function(){s=this,r=arguments,i=Date.now();var u=n&&!a;return a||(a=setTimeout(c,t)),u&&(o=e.apply(s,r),s=r=null),o};return u.clear=function(){a&&(clearTimeout(a),a=null)},u.flush=function(){a&&(o=e.apply(s,r),s=r=null,clearTimeout(a),a=null)},u}n.debounce=n,e.exports=n},f13c:function(e,t,n){
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(t){return e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},t.apply(this,arguments)}var n=4,a=.001,r=1e-7,s=10,i=11,o=1/(i-1),c="function"===typeof Float32Array;function u(e,t){return 1-3*t+3*e}function l(e,t){return 3*t-6*e}function f(e){return 3*e}function p(e,t,n){return((u(t,n)*e+l(t,n))*e+f(t))*e}function d(e,t,n){return 3*u(t,n)*e*e+2*l(t,n)*e+f(t)}function m(e,t,n,a,i){var o,c,u=0;do{c=t+(n-t)/2,o=p(c,a,i)-e,o>0?n=c:t=c}while(Math.abs(o)>r&&++u<s);return c}function h(e,t,a,r){for(var s=0;s<n;++s){var i=d(t,a,r);if(0===i)return t;var o=p(t,a,r)-e;t-=o/i}return t}function g(e){return e}var v=function(e,t,n,r){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===r)return g;for(var s=c?new Float32Array(i):new Array(i),u=0;u<i;++u)s[u]=p(u*o,e,n);function l(t){for(var r=0,c=1,u=i-1;c!==u&&s[c]<=t;++c)r+=o;--c;var l=(t-s[c])/(s[c+1]-s[c]),f=r+l*o,p=d(f,e,n);return p>=a?h(t,f,e,n):0===p?f:m(t,r,r+o,e,n)}return function(e){return 0===e?0:1===e?1:p(l(e),t,r)}},w={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},b=!1;try{var y=Object.defineProperty({},"passive",{get:function(){b=!0}});window.addEventListener("test",null,y)}catch($){}var k={$:function(e){return"string"!==typeof e?e:document.querySelector(e)},on:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};t instanceof Array||(t=[t]);for(var r=0;r<t.length;r++)e.addEventListener(t[r],n,!!b&&a)},off:function(e,t,n){t instanceof Array||(t=[t]);for(var a=0;a<t.length;a++)e.removeEventListener(t[a],n)},cumulativeOffset:function(e){var t=0,n=0;do{t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:n}}},x=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],R={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function S(e){R=t({},R,e)}var O=function(){var t,n,a,r,s,i,o,c,u,l,f,p,d,m,h,g,b,y,S,O,C,T,I,j,A,L,_,M=function(e){c&&(I=e,O=!0)};function P(e){var t=e.scrollTop;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollTop),t}function $(e){var t=e.scrollLeft;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollLeft),t}function E(){C=k.cumulativeOffset(n),T=k.cumulativeOffset(t),p&&(h=T.left-C.left+i,y=h-m),d&&(b=T.top-C.top+i,S=b-g)}function q(e){if(O)return U();A||(A=e),s||E(),L=e-A,_=Math.min(L/a,1),_=j(_),H(n,g+S*_,m+y*_),L<a?window.requestAnimationFrame(q):U()}function U(){O||H(n,b,h),A=!1,k.off(n,x,M),O&&f&&f(I,t),!O&&l&&l(t)}function H(e,t,n){d&&(e.scrollTop=t),p&&(e.scrollLeft=n),"body"===e.tagName.toLowerCase()&&(d&&(document.documentElement.scrollTop=t),p&&(document.documentElement.scrollLeft=n))}function D(h,C){var T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===e(C)?T=C:"number"===typeof C&&(T.duration=C),t=k.$(h),!t)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+h);if(n=k.$(T.container||R.container),a=T.hasOwnProperty("duration")?T.duration:R.duration,s=T.hasOwnProperty("lazy")?T.lazy:R.lazy,r=T.easing||R.easing,i=T.hasOwnProperty("offset")?T.offset:R.offset,o=T.hasOwnProperty("force")?!1!==T.force:R.force,c=T.hasOwnProperty("cancelable")?!1!==T.cancelable:R.cancelable,u=T.onStart||R.onStart,l=T.onDone||R.onDone,f=T.onCancel||R.onCancel,p=void 0===T.x?R.x:T.x,d=void 0===T.y?R.y:T.y,"function"===typeof i&&(i=i(t,n)),m=$(n),g=P(n),E(),O=!1,!o){var A="body"===n.tagName.toLowerCase()?document.documentElement.clientHeight||window.innerHeight:n.offsetHeight,L=g,_=L+A,U=b-i,H=U+t.offsetHeight;if(U>=L&&H<=_)return void(l&&l(t))}if(u&&u(t),S||y)return"string"===typeof r&&(r=w[r]||w["ease"]),j=v.apply(v,r),k.on(n,x,M,{passive:!0}),window.requestAnimationFrame(q),function(){I=null,O=!0};l&&l(t)}return D},C=O(),T=[];function I(e){for(var t=0;t<T.length;++t)if(T[t].el===e)return T.splice(t,1),!0;return!1}function j(e){for(var t=0;t<T.length;++t)if(T[t].el===e)return T[t]}function A(e){var t=j(e);return t||(T.push(t={el:e,binding:{}}),t)}function L(e){var t=A(this).binding;if(t.value){if(e.preventDefault(),"string"===typeof t.value)return C(t.value);C(t.value.el||t.value.element,t.value)}}var _={bind:function(e,t){A(e).binding=t,k.on(e,"click",L)},unbind:function(e){I(e),k.off(e,"click",L)},update:function(e,t){A(e).binding=t}},M={bind:_.bind,unbind:_.unbind,update:_.update,beforeMount:_.bind,unmounted:_.unbind,updated:_.update,scrollTo:C,bindings:T},P=function(e,t){t&&S(t),e.directive("scroll-to",M);var n=e.config.globalProperties||e.prototype;n.$scrollTo=M.scrollTo};return"undefined"!==typeof window&&window.Vue&&(window.VueScrollTo=M,window.VueScrollTo.setDefaults=S,window.VueScrollTo.scroller=O,window.Vue.use&&window.Vue.use(P)),M.install=P,M}))}}]);