(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ac00cee"],{"0a49":function(t,e,s){var n=s("9b43"),a=s("626a"),i=s("4bf8"),o=s("9def"),r=s("cd1c");t.exports=function(t,e){var s=1==t,c=2==t,u=3==t,l=4==t,d=6==t,h=5==t||d,f=e||r;return function(e,r,p){for(var m,g,v=i(e),w=a(v),b=n(r,p,3),y=o(w.length),C=0,M=s?f(e,y):c?f(e,0):void 0;y>C;C++)if((h||C in w)&&(m=w[C],g=b(m,C,v),t))if(s)M[C]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return C;case 2:M.push(m)}else if(l)return!1;return d?-1:u||l?l:M}}},"0d0a":function(t,e,s){"use strict";s("28c5")},1169:function(t,e,s){var n=s("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"28c5":function(t,e,s){},"2f21":function(t,e,s){"use strict";var n=s("79e5");t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"510c":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isConfigSet?s("beautiful-chat",{attrs:{participants:t.participants,onMessageWasSent:t.onMessageWasSent,messageList:t.messageList,newMessagesCount:t.newMessagesCount,isOpen:t.isChatOpen,close:t.closeChat,open:t.openChat,showEmoji:!0,showFile:!1,showTypingIndicator:t.showTypingIndicator,showLauncher:!0,showCloseButton:!0,colors:t.colors,alwaysScrollToBottom:t.alwaysScrollToBottom,disableUserListToggle:!1,messageStyling:t.messageStyling},on:{onType:t.handleOnType,edit:t.editMessage},scopedSlots:t._u([{key:"header",fn:function(){return[t.config.header.icon.url?s("img",{staticClass:"sc-header--img",staticStyle:{width:"34px",height:"34px"},attrs:{src:t.config.header.icon.url,alt:""}}):t._e(),s("div",{staticClass:"sc-header--title"},[t._v(t._s(t.config.header.title.text))])]},proxy:!0},{key:"text-message-body",fn:function(e){var n=e.message,a=e.messageText,i=e.messageColors;return[s("p",{staticClass:"sc-message--text-content",domProps:{innerHTML:t._s(a)}}),n.data.attachments&&n.data.attachments.length>0?s("p",{staticClass:"sc-message--text-content"},t._l(n.data.attachments,(function(e){return s("span",{key:e.mediaURL},["IMAGE"==e.mediaType?s("img",{attrs:{src:t._f("thumburl")(t._f("https")(e.mediaURL)),"data-full-src":t._f("https")(e.mediaURL)}}):s("a",{staticClass:"fa fa-file-alt float-right",attrs:{href:t._f("https")(e.mediaURL),target:"_blank"}},[s("small",[t._v(" "+t._s(e.mediaCaption||e.mediaType))])]),s("br")])})),0):t._e(),n.data.inputs&&n.data.inputs.length>0?s("ul",[s("li",[t._v(t._s(n.data.inputs[0].label))])]):t._e(),n.data.timestamp?s("p",{staticClass:"sc-message--meta",style:{color:i.color}},[t._v("\n        "+t._s(t._f("formatDate")(n.data.timestamp))+" \n        "),"I"==n.data.type?s("span",[n.id?s("i",{staticClass:"fas fa-check"}):s("i",{staticClass:"fas fa-sync fa-spin"})]):t._e()]):t._e()]}}],null,!1,2514980534)}):t._e()],1)},a=[],i=(s("28a5"),s("a481"),s("7514"),s("7f7f"),s("96cf"),s("3b8d")),o=s("75fc"),r=(s("55dd"),s("a026")),c=s("e54b"),u=s.n(c),l=s("4c93"),d=s("3ef3"),h=s("8610");function f(t){if(t)return{author:"I"==t.type?"me":"support",type:"text",id:t.messageId,data:{type:t.type,text:t.text||t.message||"",template:t.template,meta:t.timestamp,timestamp:t.timestamp,attachments:t.attachments,file:t.attachments&&t.attachments[0]?{name:t.attachments[0].mediaCaption,url:d["a"].https_thumburl(t.attachments[0].mediaURL)}:null,inputs:t.options?t.options.inputs:null},suggestions:t.options&&t.options.buttons?t.options.buttons.map((function(t){return t.label})):null}}r["default"].use(u.a);var p={name:"app",data:function(){return{participants:[{id:"support",name:"Support",imageUrl:"https://avatars3.githubusercontent.com/u/1915989?s=230&v=4"}],config:{header:{icon:{url:"https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"},title:{text:"Support"}}},options:{domain:null,channelId:null,channelKey:null},messageList:[],messageMap:{},newMessagesCount:0,isChatOpen:!1,showTypingIndicator:"",colors:{header:{bg:"#4e8cff",text:"#ffffff"},launcher:{bg:"#4e8cff"},messageList:{bg:"#ffffff"},sentMessage:{bg:"#4e8cff",text:"#ffffff"},receivedMessage:{bg:"#eaeaea",text:"#222222"},userInput:{bg:"#f4f7f9",text:"#565867"}},alwaysScrollToBottom:!0,messageStyling:!0,csid:null,form_input:null,isConfigSet:!1}},methods:{sendMessage:function(t){t.length>0&&(this.newMessagesCount=this.isChatOpen?this.newMessagesCount:this.newMessagesCount+1,this.onMessageWasSent({author:"support",type:"text",data:{text:t}}))},addMessage:function(t){console.log("addMessage",t),t.id&&this.messageMap[t.id]?this.messageMap[t.id].data=t.data:(this.messageMap[t.id]=t,this.messageList=[].concat(Object(o["a"])(this.messageList),[t]).sort((function(t,e){return t.data.timestamp-e.data.timestamp})))},onMessageWasSentAsync:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,s){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.id=null,e.data.type="I",e.data.timestamp=Date.now(),this.addMessage(e),!this.options.channelId){t.next=14;break}return t.next=7,this.$service.post("ext/plugin/inbound/v2/web/callback/".concat(this.$global.MyConst.nounce,"/").concat(this.options.channelId,"/").concat(this.options.channelKey),{message:e.data.text||e.data.emoji||"",from:this.csid,form:s});case 7:n=t.sent,a=f(n.results[0]),e.id=a.id,e.data.timestamp=a.data.timestamp,e.data.attachments=a.data.attachments,t.next=21;break;case 14:return t.next=16,this.$service.post("/ext/inbound/web/callback",{message:e.data.text||e.data.emoji||"",from:this.csid,form:s});case 16:i=t.sent,a=f(i),e.id=a.id,e.data.timestamp=a.data.timestamp,e.data.attachments=a.data.attachments;case 21:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}(),onMessageWasSent:function(t){var e={};if(this.form_input){if("EMAIL"==this.form_input.type&&!l["email"].validate(t.data.text))return this.addMessage({type:"system",data:{text:"Invalid Input"}}),!1;e[this.form_input.name]=t.data.text,this.form_input=null}(t.data.text||t.data.emoji)&&this.onMessageWasSentAsync(t,e)},onMessageRecvd:function(t){this.form_input=t.data.inputs?t.data.inputs[0]:null,this.newMessagesCount=this.isChatOpen?this.newMessagesCount:this.newMessagesCount+1,this.addMessage(t)},openChat:function(){this.isChatOpen=!0,this.newMessagesCount=0,this.publishChatWindowStatus()},closeChat:function(){this.isChatOpen=!1,this.publishChatWindowStatus()},handleScrollToTop:function(){},handleOnType:function(){console.log("Emit typing event")},editMessage:function(t){var e=this.messageList.find((function(e){return e.id===t.id}));e.isEdited=!0,e.data.text=t.data.text},loadChats:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.get("../"+window.CONST.POSTMAN+"/ext/plugin/outbound/web/auth/v2",{number:this.csid,csid:this.csid,user:window.CONST.APP_USER,channelId:this.options.channelId,channelKey:this.options.channelKey});case 2:for(n in e=t.sent,console.log(e),s=e.results,s)this.addMessage(f(e.results[n]));window.CONST.STOMP_ENABLED?this.subscibeMessage():this.pollMessage(),this.closeLoading();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),subscibeMessage:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this,console.log("TUNNEL"),this.tunnel=h["a"].init().instance().on("/message/receive/new",(function(t){console.log("/message/receive/new",t),e.addMessage(f(t))}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),pollMessage:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$service.get("/ext/plugin/outbound/web/callback",{number:this.csid,csid:this.csid,user:window.CONST.APP_USER,channelId:this.options.channelId});case 3:e=t.sent,e&&this.onMessageRecvd(f(e));case 5:return t.prev=5,s=this,setTimeout((function(t){s.pollMessage()}),2e3),t.finish(5);case 9:case"end":return t.stop()}}),t,this,[[0,,5,9]])})));function e(){return t.apply(this,arguments)}return e}(),closeLoading:function(t){var e=document.getElementsByTagName("html")[0];e.className=e.className.replace(/\loading\b/g,"")},init:function(){var t=this;clearTimeout(this.fploader),this.fploader=setTimeout((function(){window.CONST.fp?(t.csid=window.CONST.fp+"00",t.loadChats()):t.init()}),1e3)},publishChatWindowStatus:function(){this.sendPostMessage({event:"ON_CHAT_TOGGLE",isChatOpen:this.isChatOpen})},onPostMessage:function(t){if(t&&t.data&&"string"==typeof t.data&&0==t.data.trim().indexOf("{")){var e=JSON.parse(t.data);if(e.myChatEvent){var s=e.myChatEvent;"CHAT_TOGGLE"==s.event?this.isChatOpen?this.closeChat():this.openChat():"function"==typeof this[s.event]&&this[s.event](s)}}},sendPostMessage:function(t){var e=JSON.stringify({myChatEvent:t});window.parent.postMessage(e,"*")},SET_OPTIONS:function(t){console.log("SET_OPTIONS",t);var e=t.options.config||{},s=this.config;for(var n in e){var a=n.split(".");"color"==a[a.length-1]?(this.colors[a[0]][a[1]]=e[n]||this.colors[a[0]][a[1]],console.log("".concat(a[0],".").concat(a[1]," == "),this.colors[a[0]][a[1]])):s[a[0]]&&s[a[0]][a[1]]?(console.log("".concat(a[0],".").concat(a[1],".").concat(a[2]," ="),s[a[0]][a[1]][a[2]]),s[a[0]][a[1]][a[2]]=e[n]):console.log("".concat(a[0],".").concat(a[1],".").concat(a[2]," !="),s[a[0]][a[1]]),this.isConfigSet=!0}t.options.config=null,delete t.options.config,this.options=Object.assign({},this.options,t.options)}},mounted:function(){this.$service.config("DISABLE_RESPONSE_INTERCEPTOR"),window.addEventListener?window.addEventListener("message",this.onPostMessage,!1):element.attachEvent&&window.attachEvent("onmessage",this.onPostMessage),this.sendPostMessage({event:"ON_CHAT_LOAD"}),this.init()},beforeDestroy:function(){window.addEventListener?window.removeEventListener("message",this.onPostMessage,!1):element.attachEvent&&window.removeEventListener("onmessage",this.onPostMessage)}},m=p,g=(s("0d0a"),s("2877")),v=Object(g["a"])(m,n,a,!1,null,null,null);e["default"]=v.exports},"55dd":function(t,e,s){"use strict";var n=s("5ca1"),a=s("d8e8"),i=s("4bf8"),o=s("79e5"),r=[].sort,c=[1,2,3];n(n.P+n.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!s("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(i(this)):r.call(i(this),a(t))}})},7514:function(t,e,s){"use strict";var n=s("5ca1"),a=s("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")(i)},"75fc":function(t,e,s){"use strict";s.d(e,"a",(function(){return g}));var n=s("a745"),a=s.n(n),i=s("db2a");function o(t){if(a()(t))return Object(i["a"])(t)}var r=s("67bb"),c=s.n(r),u=s("5d58"),l=s.n(u),d=s("774e"),h=s.n(d);function f(t){if("undefined"!==typeof c.a&&null!=t[l.a]||null!=t["@@iterator"])return h()(t)}var p=s("e630");function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t){return o(t)||f(t)||Object(p["a"])(t)||m()}},cd1c:function(t,e,s){var n=s("e853");t.exports=function(t,e){return new(n(t))(e)}},e853:function(t,e,s){var n=s("d3f4"),a=s("1169"),i=s("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),n(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}}}]);