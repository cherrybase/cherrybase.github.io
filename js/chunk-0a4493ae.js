(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a4493ae"],{"0a2f":function(t,e,s){},"1e0c":function(t,e,s){},"2fdb":function(t,e,s){"use strict";var a=s("5ca1"),n=s("d2c8"),i="includes";a(a.P+a.F*s("5147")(i),"String",{includes:function(t){return!!~n(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"31f9":function(t,e,s){"use strict";s("a885")},"457f":function(t,e,s){"use strict";s.r(e);s("8e6e"),s("ac6a"),s("456d");var a=s("bd86");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var r=function(){var t=this,e=t._self._c;return e("div",[e("master-view",{attrs:{id:"agent-session-list",header:{heading:t.heading,subheading:t.subheading,icon:t.icon},filters:[{label:"Date Range",name:"daterange"},{label:"Refresh",name:"sync"}],table:i(i({},t.sessions),{},{items:t.filtered}),busy:t.sessions.busy},scopedSlots:t._u([{key:"filter(sync)",fn:function(){return[e("span",{staticClass:"btn btn-success margin-right-5px",on:{click:t.openFilterPopup}},[e("i",{staticClass:"fa fa-filter"})]),e("span",{staticClass:"btn btn-success",on:{click:t.loadSessions}},[e("i",{staticClass:"fa fa-refresh"})])]},proxy:!0},{key:"top-row",fn:function(s){return[e("b-th",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.assignedToAgent,expression:"filters.assignedToAgent"}],staticClass:"form-control form-control-sm",attrs:{type:"search"},domProps:{value:t.filters.assignedToAgent},on:{input:function(e){e.target.composing||t.$set(t.filters,"assignedToAgent",e.target.value)}}})]),e("b-th",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.contactName,expression:"filters.contactName"}],staticClass:"form-control form-control-sm",attrs:{type:"search"},domProps:{value:t.filters.contactName},on:{input:function(e){e.target.composing||t.$set(t.filters,"contactName",e.target.value)}}})]),e("b-th",[t._v(" ")]),e("b-th",[t._v(" ")]),e("b-th",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.fistResponseStamp,expression:"filters.fistResponseStamp"}],staticClass:"form-control form-control-sm",on:{click:function(t){t.stopPropagation(),t.preventDefault()},change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"fistResponseStamp",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:""}},[t._v("--")]),t._l(t.fistResponseOptions,(function(s){return e("option",{key:s.value,domProps:{value:s.value}},[t._v(t._s(s.label))])}))],2)]),e("b-th",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.lastSessionStamp,expression:"filters.lastSessionStamp"}],staticClass:"form-control form-control-sm",on:{click:function(t){t.stopPropagation(),t.preventDefault()},change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"lastSessionStamp",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:""}},[t._v("--")]),t._l(t.closeSessionOptions,(function(s){return e("option",{key:s.value,domProps:{value:s.value}},[t._v(t._s(s.label))])}))],2)])]}},{key:"cell(assignedToAgent)",fn:function(s){return[e("my-icon",{attrs:{type:"chatmode",value:s.item.mode}}),t._v("\n                "+t._s(s.item.assignedToAgent)+"\n                "),s.item.assignedToDept?e("span",[t._v("\n                  ("+t._s(s.item.assignedToDept)+")\n                ")]):t._e(),s.item.assignedToQueue?e("span",[t._v("\n                  | "+t._s(s.item.assignedToQueue)+"\n                ")]):t._e()]}},{key:"cell(contactId)",fn:function(s){return[e("MyText",{staticClass:"mr-2 btn btn-xs btn-outline-grey text-xs text-uppercase",attrs:{options:"getx:/api/options/channels",invalidDisplay:"DEMO",optionLabel:"channelCode"},model:{value:s.item.local.channelId,callback:function(e){t.$set(s.item.local,"channelId",e)},expression:"row.item.local.channelId"}}),e("i",{staticClass:"fab",class:t.MyDict.socialPrefix(s.item.contactType)}),t._v("\n                "+t._s(t._f("contactName")(s.item))+"\n\n                "),e("span",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"template-details-"+s.index}}),e("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+s.index,"custom-class":""},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"message-text text-bold"},[t._v(t._s(s.item.contactName))]),s.item.subject?e("div",{staticClass:"message-text text-bolder"},[t._v(t._s(s.item.subject))]):t._e(),e("div",{staticClass:"message-text text-italic text-xs"},[t._v(t._s(s.item.contactId))]),e("div",{staticClass:"message-text text-italic text-sm"},[t._v(t._s(s.item.sessionId))])]},proxy:!0}],null,!0)})]}},{key:"cell(startSessionStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.startSessionStamp))+"\n            ")]}},{key:"cell(fistResponseStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.fistResponseStamp))+" \n            ")]}},{key:"cell(lastSessionStamp)",fn:function(s){return[e("span",{staticClass:"fa text-xs",class:{"text-success":s.item.local.open,"text-danger":s.item.local.expired,"text-info":s.item.local.resolved,"fa-dot-circle":s.item.primary,"fa-circle":!s.item.primary}}),t._v("\n                  "+t._s(t._f("formatDate")(s.value))+"\n            ")]}},{key:"cell(actions)",fn:function(s){return[e("span",{staticClass:"text-center"},[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"View Chat",expression:"'View Chat'"}],staticClass:"far fa-comment-alt mg-1 pointer text-primary text-bold",on:{click:function(e){return t.showChat(s.item,s.index,e.target)}}}),t._v("\n                   "),s.item.feedback?e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:s.item.feedback.tag,expression:"row.item.feedback.tag"}],staticClass:"bi bi-emoji-smile mg-1 pointer text-primary text-bold"},[t._v("\n                    "+t._s(s.item.feedback.score)+"\n                  ")]):t._e()])]}},{key:"filter(daterange)",fn:function(){return[e("MyDatePicker",{attrs:{daterange:t.input.daterange},on:{dateRangeOninit:t.dateRangeOnUpdate,dateRangeOnUpdate:t.dateRangeOnUpdate}})]},proxy:!0}])}),e("b-modal",{attrs:{id:t.modelName,title:"Session Filter",size:"lg","hide-footer":""},scopedSlots:t._u([{key:"modal-footer",fn:function(){},proxy:!0}])},[e("div",{staticClass:"filter-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[e("span",{staticClass:"action-wrapper text-center"},[e("MyDatePicker",{staticClass:"session-search-date-picker date-range-picker-mobile",attrs:{daterange:t.input.daterange,ranges:t.input.dataranges},on:{dateRangeOninit:t.dateRangeOnUpdate,dateRangeOnUpdate:t.dateRangeOnUpdate},scopedSlots:t._u([{key:"input",fn:function(s){return[e("i",{staticClass:"fa fa-calendar-alt"}),t._v(" "+t._s(t._f("date")(s.startDate))+" - "+t._s(t._f("date")(s.endDate))+"\n                ")]}}])})],1),e("br"),e("div",{staticClass:"section-divider"},[e("span",{staticClass:"cat-title section-title"},[t._v("Chat Status")])]),e("div",t._l(t.editableStatus,(function(s,a){return e("span",{key:a,staticClass:"tag-chat-status-lg tag",class:"tag-chat-status-"+a+(-1!=t.selectedStatus.indexOf(a)?" tag-chat-status-active":""),on:{click:function(e){return t.selectStatus(a)}}},[t._v("\n                "+t._s(s.label)+"\n            ")])})),0),t._l(t.sortedQuickTags,(function(s,a){return e("div",{key:a,staticClass:"mt-3"},[e("div",{staticClass:"section-divider"},[e("span",{staticClass:"cat-title section-title"},[t._v(t._s(a))])]),t._l(t.sortedQuickTags[a],(function(s,a){return e("span",{key:a,class:"tag-chat-status-lg tag "+(s.selected?" tag-chat-status-active":""),on:{click:function(e){return t.selectTag(s)}}},[t._v("\n                "+t._s(s.title)+" \n            ")])}))],2)})),e("hr"),e("i",{staticClass:"note",class:t.searchError?"shake-horizontal":""},[t._v("Select a minimum of one filter element to continue")]),e("div",{staticStyle:{"text-align":"center"}},[e("b-button",{staticClass:"btn btn-sm text-black:hover rounded-pill btn-outline-black-dirty",staticStyle:{width:"120px"},on:{click:t.loadSessions}},[t._v(" Search ")])],1),e("hr"),e("i",{staticClass:"note"},[t._v("The search works on the principle of AND / OR operation when elements from multiple categories are selected. AND is applied across different categories and OR is applied within the category")])],2)]),e("div",{staticClass:"chat_archive",class:{closed:!t.session}},[t.session?e("agent-chat",{key:t.session.sessionId,attrs:{session:t.session},on:{close:t.hideChat,update:t.updateChat}}):t._e()],1)],1)},o=[],c=s("75fc"),l=(s("96cf"),s("3b8d")),u=(s("7f7f"),s("6762"),s("2fdb"),s("e492")),d=s("d166"),p=s("df4b"),f=s("6172"),m=(s("c1df"),s("bbf5")),h=s.n(m),g=(s("53b4"),s("3ef3"));var v={components:{PageTitle:u["a"],AgentChat:p["a"],DateRangePicker:h.a},computed:{filtered:function(){var t=this;if(!this.sessions.items.length)return[];var e=this.sessions.items.filter((function(e){return Object.keys(t.filters).every((function(s){var a,n,i,r;if("lastSessionStamp"===s)switch(t.filters[s]){case"resolved":return null===e||void 0===e||null===(a=e.local)||void 0===a?void 0:a.resolved;case"opened":return null===e||void 0===e||null===(n=e.local)||void 0===n?void 0:n.active;case"expired":return null===e||void 0===e||null===(i=e.local)||void 0===i?void 0:i.expired;case"closed":return null===e||void 0===e||null===(r=e.local)||void 0===r?void 0:r.closed;default:return!0}else{if("fistResponseStamp"!==s)return"contactName"===s?String(e._searchText).toLowerCase().includes(t.filters[s].toLowerCase()):String(e[s]).toLowerCase().includes(t.filters[s].toLowerCase());switch(t.filters[s]){case 0:return 0==e[s];case"attended":return 0!=e[s];default:return!0}}}))}));return e.length>0?e:[]},sortedQuickTags:function(){return this.$store.getters.StateQuickTagsSorted},editableStatus:function(){return Object.keys(d["b"].chatStatus).map((function(t){return d["b"].chatStatus[t]})).filter((function(t){return t.editable}))}},filters:{contactName:function(t){var e;return t.contactName||(null===t||void 0===t||null===(e=t.contact)||void 0===e?void 0:e.name)||t.contactId},date:function(t){return t?t.toLocaleDateString():""}},data:function(){return{MyFlags:d["c"],MyDict:d["b"],MyConst:d["a"],heading:"Chat Sessions",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",sessions:{sortBy:"lastSessionStamp",sortDesc:!0,fields:[{key:"assignedToAgent",label:"Assigned",sortable:!0},{key:"contactId",label:"Contact",sortable:!1},{key:"actions",label:"Action",sortable:!1},{key:"startSessionStamp",label:"Start@",sortable:!0},{key:"fistResponseStamp",label:"Agent@",sortable:!1},{key:"lastSessionStamp",label:"Closed@",sortable:!0,sortByFormatted:!0,formatter:function(t,e,s){return s.closeSessionStamp||s.updatedStamp}}],items:[],perPage:20,currentPage:1,rows:0,busy:!1},closeSessionOptions:[{label:"Closed",value:"closed"},{label:"Expired",value:"expired"},{label:"Resolved",value:"resolved"},{label:"Open",value:"opened"}],fistResponseOptions:[{label:"Attended",value:"attended"},{label:"Not Attended",value:0}],filters:{assignedToAgent:"",contactName:"",lastSessionStamp:"",fistResponseStamp:""},input:{dataranges:["Today","Last 7 Days","Yesterday","This month","Last month"],daterange:{startDate:null,endDate:null,span:"Today"}},session:null,filteron:!0,formatters:g["a"],modelName:"MODAL_FILTER",selectedStatus:[],selectedTag:null,searchError:!1,daterange:{startDate:null,endDate:null,span:"Today"}}},created:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("LoadQuickTags");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(t){},methods:{openFilterPopup:function(){this.$bvModal.show(this.modelName)},selectTag:function(t){var e=this;this.sortedQuickTags[t.category].map((function(s,a){e.sortedQuickTags[t.category][a].selected=s.id==t.id?!s.selected:s.selected}))},selectStatus:function(t){var e=this.selectedStatus.indexOf(t);-1!=e?this.selectedStatus.splice(e,1):this.selectedStatus=[].concat(Object(c["a"])(this.selectedStatus),[t]),console.log("this.selectedStatus",this.selectedStatus,t,e)},onDateRangeUpdate:function(t){this.daterange&&(this.daterange.startDate=t.startDate,this.daterange.endDate=t.endDate)},loadSessions:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(s in e=[],this.sortedQuickTags)this.sortedQuickTags[s].map((function(t){t.selected&&e.push(t)}));return this.$bvModal.hide(this.modelName),this.sessions.busy=!0,t.prev=4,t.next=7,this.$store.dispatch("GetSessions",{agent:"TEAM",contactType:"MESSAGE_TWITTER",status:this.selectedStatus,tags:e,rangeStamp:this.input.daterange.endDate-this.input.daterange.startDate,startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 7:a=t.sent,this.sessions.items=a.results.map((function(t){return f["a"].session(t)})),this.sessions.rows=this.sessions.items.length,console.log("sessions",a,this.sessions);case 11:return t.prev=11,this.sessions.busy=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[4,,11,14]])})));function e(){return t.apply(this,arguments)}return e}(),dateRangeOnUpdate:function(t){this.input.daterange.startDate=t.startDate,this.input.daterange.endDate=t.endDate,this.loadSessions()},deleteChat:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("DeleteSessionChats",e);case 2:t.sent,this.sessions.items.splice(s,1);case 4:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}(),hideChat:function(t){this.session=null},showChat:function(t){this.session&&this.session.sessionId==t.sessionId?this.session=null:this.session=t},updateChat:function(t){this.loadSessions()}}},b=v,y=(s("9b19"),s("31f9"),s("8159"),s("2877")),S=Object(y["a"])(b,r,o,!1,null,"3642013a",null);e["default"]=S.exports},6762:function(t,e,s){"use strict";var a=s("5ca1"),n=s("c366")(!0);a(a.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"75fc":function(t,e,s){"use strict";s.d(e,"a",(function(){return g}));var a=s("a745"),n=s.n(a),i=s("db2a");function r(t){if(n()(t))return Object(i["a"])(t)}var o=s("67bb"),c=s.n(o),l=s("5d58"),u=s.n(l),d=s("774e"),p=s.n(d);function f(t){if("undefined"!==typeof c.a&&null!=t[u.a]||null!=t["@@iterator"])return p()(t)}var m=s("e630");function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t){return r(t)||f(t)||Object(m["a"])(t)||h()}},8159:function(t,e,s){"use strict";s("0a2f")},"9b19":function(t,e,s){"use strict";s("1e0c")},a885:function(t,e,s){}}]);