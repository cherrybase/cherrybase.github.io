(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-010320e5"],{"2ad1":function(e,t,s){"use strict";s("7075")},"2f21":function(e,t,s){"use strict";var a=s("79e5");e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"2fdb":function(e,t,s){"use strict";var a=s("5ca1"),n=s("d2c8"),i="includes";a(a.P+a.F*s("5147")(i),"String",{includes:function(e){return!!~n(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"457f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("master-view",{attrs:{id:"agent-session-list",header:{heading:e.heading,subheading:e.subheading,icon:e.icon},filters:[{label:"Date Range",name:"daterange"},{label:"Refresh",name:"sync"}],table:Object.assign({},e.sessions,{items:e.filtered}),busy:e.sessions.busy},scopedSlots:e._u([{key:"filter(sync)",fn:function(){return[s("span",{staticClass:"btn btn-success",on:{click:e.loadSessions}},[s("i",{staticClass:"fa fa-sync"})])]},proxy:!0},{key:"filter(daterange)",fn:function(){return[s("MyDatePicker",{attrs:{daterange:e.input.daterange},on:{dateRangeOninit:e.dateRangeOnUpdate,dateRangeOnUpdate:e.dateRangeOnUpdate}})]},proxy:!0},{key:"top-row",fn:function(t){return[s("b-th",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.assignedToAgent,expression:"filters.assignedToAgent"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:e.filters.assignedToAgent},on:{input:function(t){t.target.composing||e.$set(e.filters,"assignedToAgent",t.target.value)}}})]),s("b-th",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filters.contactName,expression:"filters.contactName"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:e.filters.contactName},on:{input:function(t){t.target.composing||e.$set(e.filters,"contactName",t.target.value)}}})]),s("b-th",[e._v(" ")]),s("b-th",[e._v(" ")]),s("b-th",[s("select",{directives:[{name:"model",rawName:"v-model",value:e.filters.fistResponseStamp,expression:"filters.fistResponseStamp"}],staticClass:"form-control form-control-sm",on:{click:function(e){e.stopPropagation(),e.preventDefault()},change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.filters,"fistResponseStamp",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v("--")]),e._l(e.fistResponseOptions,(function(t){return s("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.label))])}))],2)]),s("b-th",[s("select",{directives:[{name:"model",rawName:"v-model",value:e.filters.closeSessionStamp,expression:"filters.closeSessionStamp"}],staticClass:"form-control form-control-sm",on:{click:function(e){e.stopPropagation(),e.preventDefault()},change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.filters,"closeSessionStamp",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v("--")]),e._l(e.closeSessionOptions,(function(t){return s("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.label))])}))],2)])]}},{key:"cell(assignedToAgent)",fn:function(t){return[s("span",{staticClass:"fa",class:{"fa-robot":"BOT"==t.item.mode,"fa-user":"AGENT"==t.item.mode,"fas fa-fast-forward":"WEBHOOK"==t.item.mode}}),e._v("\n                 "+e._s(t.item.assignedToAgent)+"\n                "),t.item.assignedToDept?s("span",[e._v("\n                  ("+e._s(t.item.assignedToDept)+")\n                ")]):e._e(),t.item.assignedToQueue?s("span",[e._v("\n                  | "+e._s(t.item.assignedToQueue)+"\n                ")]):e._e()]}},{key:"cell(contactId)",fn:function(t){return[s("i",{staticClass:"fab",class:e.MyDict.socialPrefix(t.item.contactId)}),e._v("\n                "+e._s(t.item.contactName||t.item.contactId)+"\n\n                "),s("span",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"template-details-"+t.index}}),s("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+t.index,"custom-class":"message-preview"},scopedSlots:e._u([{key:"default",fn:function(){return[s("div",{staticClass:"message-text"},[e._v("Name : "+e._s(t.item.contactName))]),s("div",{staticClass:"message-text"},[e._v("Id : "+e._s(t.item.contactId))]),s("div",{staticClass:"message-text"},[e._v("Session : "+e._s(t.item.sessionId))])]},proxy:!0}],null,!0)})]}},{key:"cell(startSessionStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.startSessionStamp))+"\n            ")]}},{key:"cell(fistResponseStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.fistResponseStamp))+" \n            ")]}},{key:"cell(closeSessionStamp)",fn:function(t){return[s("span",{staticClass:"fa fa-circle text-xs",class:{"text-success":t.item.local.open,"text-danger":t.item.local.expired,"text-info":t.item.local.resolved}}),e._v("\n                  "+e._s(e._f("formatDate")(t.item.closeSessionStamp))+"\n            ")]}},{key:"cell(actions)",fn:function(t){return[s("span",{staticClass:"far fa-comment-alt mg-1 pointer",on:{click:function(s){return e.showChat(t.item,t.index,s.target)}}})]}}])}),s("div",{staticClass:"chat_archive",class:{closed:!e.session}},[e.session?s("agent-chat",{key:e.session.sessionId,attrs:{session:e.session},on:{close:e.hideChat,update:e.updateChat}}):e._e()],1)],1)},n=[],i=(s("96cf"),s("3b8d")),o=(s("6762"),s("2fdb"),s("ac6a"),s("456d"),s("e492")),r=s("d166"),c=s("df4b"),l=s("6172"),u={components:{PageTitle:o["a"],AgentChat:c["a"]},computed:{filtered:function(){var e=this;if(this.sessions.items.length){var t=this.sessions.items.filter((function(t){return Object.keys(e.filters).every((function(s){var a,n,i,o;if("closeSessionStamp"===s)switch(e.filters[s]){case"resolved":return null===t||void 0===t||null===(a=t.local)||void 0===a?void 0:a.resolved;case"opened":return null===t||void 0===t||null===(n=t.local)||void 0===n?void 0:n.active;case"expired":return null===t||void 0===t||null===(i=t.local)||void 0===i?void 0:i.expired;case"closed":return null===t||void 0===t||null===(o=t.local)||void 0===o?void 0:o.closed;default:return!0}else{if("fistResponseStamp"!==s)return String(t[s]).toLowerCase().includes(e.filters[s].toLowerCase());switch(e.filters[s]){case 0:return 0==t[s];case"attended":return 0!=t[s];default:return!0}}}))}));return t.length>0?t:[Object.keys(this.sessions.items[0]).reduce((function(e,t){return e[t]="",e}),{})]}}},data:function(){return{MyFlags:r["c"],MyDict:r["b"],MyConst:r["a"],heading:"Chat Sessions",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",sessions:{sortBy:"assignedToAgent",sortDesc:!1,fields:[{key:"assignedToAgent",label:"Assigned",sortable:!0},{key:"contactId",label:"Contact",sortable:!1},{key:"actions",label:"Action",sortable:!1},{key:"startSessionStamp",label:"Start@",sortable:!0},{key:"fistResponseStamp",label:"Agent@",sortable:!1},{key:"closeSessionStamp",label:"Closed@",sortable:!0}],items:[],perPage:25,currentPage:1,rows:0,busy:!1},closeSessionOptions:[{label:"Closed",value:"closed"},{label:"Expired",value:"expired"},{label:"Resolved",value:"resolved"},{label:"Open",value:"opened"}],fistResponseOptions:[{label:"Attended",value:"attended"},{label:"Not Attended",value:0}],filters:{assignedToAgent:"",contactName:"",closeSessionStamp:"",fistResponseStamp:""},input:{daterange:{startDate:null,endDate:null,span:"Today"}},session:null}},mounted:function(e){},methods:{loadSessions:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.input.daterange.startDate){e.next=3;break}return console.error("No Data Range Specified"),e.abrupt("return");case 3:return this.sessions.busy=!0,e.prev=4,e.next=7,this.$store.dispatch("GetSessions",{agent:"TEAM",contactType:"MESSAGE_TWITTER",startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 7:t=e.sent,this.sessions.items=t.results.map((function(e){return l["a"].session(e)})),this.sessions.rows=this.sessions.items.length,console.log("sessions",t,this.sessions);case 11:return e.prev=11,this.sessions.busy=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[4,,11,14]])})));function t(){return e.apply(this,arguments)}return t}(),dateRangeOnUpdate:function(e){console.log("dateRangeOnUpdate",e),this.input.daterange.startDate=e.startDate,this.input.daterange.endDate=e.endDate,this.loadSessions()},deleteChat:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeleteSessionChats",t);case 2:e.sent,this.sessions.items.splice(s,1);case 4:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),hideChat:function(e){this.session=null},showChat:function(e){this.session&&this.session.sessionId==e.sessionId?this.session=null:this.session=e},updateChat:function(e){this.loadSessions()}}},d=u,f=(s("feda"),s("2877")),p=Object(f["a"])(d,a,n,!1,null,"ce24ca60",null);t["default"]=p.exports},"55dd":function(e,t,s){"use strict";var a=s("5ca1"),n=s("d8e8"),i=s("4bf8"),o=s("79e5"),r=[].sort,c=[1,2,3];a(a.P+a.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!s("2f21")(r)),"Array",{sort:function(e){return void 0===e?r.call(i(this)):r.call(i(this),n(e))}})},6762:function(e,t,s){"use strict";var a=s("5ca1"),n=s("c366")(!0);a(a.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},7075:function(e,t,s){},df4b:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card card-shadow chat_box_wrapper"},[s("div",{staticClass:"card-header msg_head chat-head"},[s("div",{staticClass:"d-flex bd-highlight chat-header-left"},[e.activeChat?s("div",{staticClass:"img_cont",on:{click:function(t){e.MyFlags.showContactProfile=!e.MyFlags.showContactProfile}}},[s("img",{staticClass:"rounded-circle user_img",attrs:{src:e.activeChat.profilePic||e.MyDict.profilePic}}),s("span",{staticClass:"online_icon",attrs:{hidden:""}})]):e._e(),e.activeChat?s("div",{staticClass:"user_info",on:{click:function(t){e.MyFlags.showContactProfile=!e.MyFlags.showContactProfile}}},[s("span",{staticClass:"user_name"},[e._v(e._s(e.activeChat.name))]),e.activeChat.ilastmsg?s("p",{staticClass:"user_text"},[e._v(e._s(e._f("formatDate")(e.activeChat.ilastmsg.timestamp))+" ")]):e._e()]):e._e(),s("div",{staticClass:"video_cam"},[e._m(0),e._m(1),s("span",{attrs:{hidden:""},on:{click:function(t){e.MyFlags.showContactProfile=!e.MyFlags.showContactProfile}}},[s("i",{staticClass:"fas fa-history"})])])]),s("div",{staticClass:"chat-header-right"},[s("div",{staticClass:"video_cam"},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Close",expression:"'Close'"}],staticStyle:{cursor:"pointer"},on:{click:e.closeBox}},[s("i",{staticClass:"fa fa-close"})])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showMediaOptions,expression:"!showMediaOptions"}],staticClass:"card-body msg_card_body"},[s("div",{staticClass:"msg_card_body-bubbles"},[s("loading",{attrs:{active:e.isLoading,"can-cancel":!1,loader:"dots",opacity:.3,"is-full-page":!1},on:{"update:active":function(t){e.isLoading=t}}}),e.activeChat?s("ChatMessages",{attrs:{activeChat:e.activeChat}}):s("div",{staticClass:"msg_card_body-logo"},[s("span",{})])],1)]),s("div",{staticClass:"card-footer"},[s("b-row",[s("b-col",{attrs:{cols:"6"}},[e.activeChat.local&&e.activeChat.local.open?s("span",{staticClass:"btn btn-primary",on:{click:e.closeChat}},[e._v("\n                            Close Chat\n                            ")]):e._e()]),s("b-col",{attrs:{cols:"6"}},[e.activeChat.local&&e.activeChat.local.open?s("BaseVSelect",{staticClass:"text-sm w-100 float-left",attrs:{size:"sm","auto-position":"",options:"getx:/api/config/inbound_queue",optionKey:"code",optionLabel:"code"},on:{change:e.inboundQueueUpdate},model:{value:e.activeChat.assignedToQueue,callback:function(t){e.$set(e.activeChat,"assignedToQueue",t)},expression:"activeChat.assignedToQueue"}}):e._e()],1)],1)],1)])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-video"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-phone"})])}],i=(s("96cf"),s("3b8d")),o=s("d166"),r=s("9062"),c=s.n(r),l=s("3e84"),u=s("3902"),d=s("6172"),f={components:{Loading:c.a,SlideUpDown:l["a"],ChatMessages:u["a"]},props:{session:Object},computed:{},data:function(){return{message_text:"",quickReplies:null,selectedMedia:null,showMediaOptions:!1,showChatOptions:!1,lastMessageId:null,ilastMessageId:null,MyDict:o["b"],MyFlags:o["c"],MyConst:o["a"],isLoading:!1,showQuickActions:!1,activeChat:{messages:null}}},created:function(){console.log("created")},updated:function(){console.log("updated")},mounted:function(){this.loadMessages(),this.loadQuickLabels()},beforeUnmount:function(){},methods:{loadMessages:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("GetSessionChats..."),this.isLoading=!0,e.next=4,this.$store.dispatch("GetSessionChats",this.session);case 4:t=e.sent,console.log("resp",t),this.activeChat=d["a"].session(t),this.isLoading=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),closeBox:function(e){this.$emit("close")},closeChat:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.submit("/api/message/session/close",{sessionId:this.activeChat.sessionId});case 2:this.loadMessages(),this.$emit("update");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),inboundQueueUpdate:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("this.activeChat.assignedToQueue",this.activeChat.assignedToQueue),e.next=3,this.$service.submit("/api/message/session/route",{sessionId:this.activeChat.sessionId,queue:this.activeChat.assignedToQueue||""});case 3:this.loadMessages(),this.$emit("update");case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadQuickLabels:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("LoadQuickLabels");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},p=f,h=(s("2ad1"),s("2877")),m=Object(h["a"])(p,a,n,!1,null,"79c53453",null);t["a"]=m.exports},ec74:function(e,t,s){},feda:function(e,t,s){"use strict";s("ec74")}}]);