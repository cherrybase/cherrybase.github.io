(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43af2cbb"],{"1c21":function(t,e,a){"use strict";a("d5b7")},"386b":function(t,e,a){var n=a("5ca1"),s=a("79e5"),i=a("be13"),r=/"/g,o=function(t,e,a,n){var s=String(i(t)),o="<"+e;return""!==a&&(o+=" "+a+'="'+String(n).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(o),n(n.P+n.F*s((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",a)}},"386d":function(t,e,a){"use strict";var n=a("cb7c"),s=a("83a1"),i=a("5f1b");a("214f")("search",1,(function(t,e,a,r){return[function(a){var n=t(this),s=void 0==a?void 0:a[e];return void 0!==s?s.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=r(a,t,this);if(e.done)return e.value;var o=n(t),l=String(this),c=o.lastIndex;s(c,0)||(o.lastIndex=0);var u=i(o,l);return s(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]}))},"48aa":function(t,e,a){},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8fc6":function(t,e,a){"use strict";a("48aa")},b54a:function(t,e,a){"use strict";a("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},cca6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,actions:t.actions}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"main-card mb-3 card"},[e("ValidationObserver",{ref:"form"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Agent Details")]),e("form",{},[e("div",{staticClass:"position-relative form-group"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("label",{attrs:{for:"examplePassword"}},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_name,expression:"newAgent.agent_name"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"John Doe",type:"text"},domProps:{value:t.newAgent.agent_name},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_name",e.target.value)}}}),e("span",{staticClass:"v-input-error"},[t._v(t._s(a.errors[0]))])]}}])})],1),e("div",{staticClass:"position-relative form-group"},[e("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("label",{attrs:{for:"exampleEmail"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_email,expression:"newAgent.agent_email"}],staticClass:"form-control",attrs:{name:"email",id:"exampleEmail",placeholder:"abc@xyz.com",type:"email"},domProps:{value:t.newAgent.agent_email},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_email",e.target.value)}}}),e("span",{staticClass:"v-input-error"},[t._v(t._s(a.errors[0]))])]}}])})],1),e("div",{staticClass:"position-relative form-group"},[e("label",{attrs:{for:"exampleEmail"}},[t._v("Agent Code")]),e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[t._v("@")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_code,expression:"newAgent.agent_code"}],staticClass:"form-control",attrs:{placeholder:"john,sam2",type:"text"},domProps:{value:t.newAgent.agent_code},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_code",e.target.value)}}})])]),e("div",{staticClass:"position-relative form-group"},[e("label",{attrs:{for:"examplePassword"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_password,expression:"newAgent.agent_password"}],staticClass:"form-control",attrs:{name:"password",id:"examplePassword",placeholder:"password",type:"password"},domProps:{value:t.newAgent.agent_password},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_password",e.target.value)}}})])])])])],1)]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"main-card mb-3 card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Dashboard options")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"position-relative form-group"},[e("label",{attrs:{for:"exampleSelect"}},[t._v("Team")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.dept_id,expression:"newAgent.dept_id"}],staticClass:"form-control",attrs:{name:"select",id:"exampleSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newAgent,"dept_id",e.target.multiple?a:a[0])}}},t._l(t.teams,(function(a){return"Y"==a.isactive?e("option",{domProps:{value:a.dept_id}},[t._v("\n                                      "+t._s(a.dept_name))]):t._e()})),0)]),e("div",{staticClass:"position-relative form-group"},[e("label",{attrs:{for:"exampleCustomMutlipleSelect"}},[t._v("Channels")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_channels_list,expression:"newAgent.agent_channels_list"}],staticClass:"custom-select",attrs:{multiple:"",type:"select",id:"exampleCustomMutlipleSelect",name:"customSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newAgent,"agent_channels_list",e.target.multiple?a:a[0])}}},[e("option",[t._v("WHATSAPP")]),e("option",[t._v("FACEBOOK")]),e("option",[t._v("TWITTER")]),e("option",[t._v("TELEGRAM")]),e("option",[t._v("WEBSITE")])])])]),t._m(0)])])]),t._m(1)])]),e("div",{staticClass:"main-card mb-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"mt-1 btn btn-primary float-right",on:{click:t.createAgent}},[t._v("Submit")])])])])],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-6",attrs:{hidden:""}},[e("div",{staticClass:"position-relative form-group"},[e("label",{attrs:{for:"exampleCustomSelectDisabled"}},[t._v("Custom Select\n                                    Disabled")]),e("select",{staticClass:"custom-select",attrs:{type:"select",id:"exampleCustomSelectDisabled",name:"customSelect",disabled:""}},[e("option",{attrs:{value:""}},[t._v("Select")]),e("option",[t._v("Value 1")]),e("option",[t._v("Value 2")]),e("option",[t._v("Value 3")]),e("option",[t._v("Value 4")]),e("option",[t._v("Value 5")])])]),e("div",{staticClass:"position-relative form-group"},[e("label",{attrs:{for:"exampleCustomMutlipleSelectDisabled"}},[t._v("Custom Multiple Select\n                                    Disabled")]),e("select",{staticClass:"custom-select",attrs:{multiple:"",type:"select",id:"exampleCustomMutlipleSelectDisabled",name:"customSelect",disabled:""}},[e("option",{attrs:{value:""}},[t._v("Select")]),e("option",[t._v("Value 1")]),e("option",[t._v("Value 2")]),e("option",[t._v("Value 3")]),e("option",[t._v("Value 4")]),e("option",[t._v("Value 5")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-card mb-3 card",attrs:{hidden:""}},[e("div",{staticClass:"card-body row"},[e("h5",{staticClass:"card-title"}),e("div",{staticClass:"position-relative form-group col-md-6"},[e("div",[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox"}},[t._v("Active")])]),e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox2"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox2"}},[t._v("Send Email")])])])])])])}],i=(a("96cf"),a("3b8d")),r=a("e492");function o(){return{agent_code:"",agent_email:"",agent_id:null,agent_channels_list:[],agent_channels:""}}var l={components:{PageTitle:r["a"]},data:function(){return{heading:"Add Agent",subheading:"Enter Details for new Agent, once created agent will recieve email to reset password",icon:"pe-7s-add-user icon-gradient bg-tempting-azure",actions:[],newAgent:o()}},computed:{teams:function(t){return this.$store.getters.StateTeams}},created:function(t){this.loadAgentTeams()},methods:{loadAgentTeams:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetTeams");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),createAgent:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("CreateAgent",this.newAgent);case 2:this.newAgent=o(),this.$refs.form.reset();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=l,u=a("2877"),d=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports},d5b7:function(t,e,a){},e492:function(t,e,a){"use strict";a("386d"),a("b54a"),a("7f7f");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-page-title"},[e("div",{staticClass:"page-title-wrapper"},[e("div",{staticClass:"page-title-heading"},[e("div",{staticClass:"page-title-icon"},[e("i",{class:t.icon})]),e("div",[t._t("heading",(function(){return[t._v("\n                      "+t._s(t.heading)+"\n                ")]})),e("div",{staticClass:"page-title-subheading"},[t._t("subheading",(function(){return[t._v("\n                        "+t._s(t.subheading)+"\n                    ")]}))],2)],2)]),e("div",{staticClass:"page-title-actions"},[t.$scopedSlots.filters?e("span",{staticClass:"filter-wrapper"},[t._t("filters")],2):t._e(),t._l(t.ifFilters,(function(a,n){return e("span",{key:"filter-"+n,staticClass:"filter-wrapper"},[t._t("filter("+a.name+")",(function(){return[a.hidden?t._e():e("span")]}),null,{filter:a})],2)})),t.dateranegeinput&&!t.dateranegeinput.hidden?e("span",{staticClass:"action-wrapper"},[e("date-range-picker",{attrs:{opens:"left","time-picker":!1,"control-container-class":"reportrange-text btn btn-success",ranges:t.dateranegeinput.ranges},on:{select:t.onDateRangeSelect,update:t.onDateRangeUpdate},scopedSlots:t._u([{key:"input",fn:function(a){return[e("i",{staticClass:"fa fa-calendar-alt"}),t._v(" "+t._s(t._f("date")(a.startDate))+" - "+t._s(t._f("date")(a.endDate))+"\n    ")]}}],null,!1,2163278788),model:{value:t.dateranegeinput.range,callback:function(e){t.$set(t.dateranegeinput,"range",e)},expression:"dateranegeinput.range"}})],1):t._e(),t._l(t.actions,(function(a,n){return e("span",{key:"action-"+n,staticClass:"action-wrapper"},[t._t("action("+a.name+")",(function(){return[a.hidden||!1===t.actionShow[a.name]?t._e():e("span",[a.link?e("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==a.type,"btn-success":!a.type||"button"==a.type},attrs:{tag:"button",to:a.link,type:"button"}},[a.icon?e("i",{staticClass:"mr-2",class:a.icon}):t._e(),t._v("\n                            "+t._s(a.label)+" \n                        ")]):"lane"==a.type?e("div",{staticClass:"d-inline-flex align-items-center",staticStyle:{"min-width":"220px"}},[e("v-select",{staticClass:"w-100",attrs:{options:t.input.lane.options,searchable:!1,clearable:!1,placeholder:"Select Account"},on:{input:function(e){return t.clickAction(a)}},scopedSlots:t._u([{key:"selected-option",fn:function(a){return[e("div",{},[e("span",{staticClass:"contact_type contact_type-24 fab",class:t.MyDict.social[a.contactType]}),t._v("  "+t._s(a.lane))])]}},{key:"open-indicator",fn:function(a){var n=a.attributes;return[e("span",t._b({staticClass:"fa fa-caret-down"},"span",n,!1))]}},{key:"option",fn:function(a){var n=a.contactType,s=a.lane;return[e("span",{staticClass:"contact_type contact_type-24 fab",class:t.MyDict.social[n]}),t._v("  "+t._s(s)+"\n                                ")]}}],null,!0),model:{value:t.input.lane.value,callback:function(e){t.$set(t.input.lane,"value",e)},expression:"input.lane.value"}})],1):"search"==a.type?e("div",{staticClass:"d-inline-flex"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.search.value,expression:"input.search.value"}],staticClass:"form-control",attrs:{type:"text",name:"",placeholder:a.placeholder},domProps:{value:t.input.search.value},on:{input:function(e){e.target.composing||t.$set(t.input.search,"value",e.target.value)}}})]):"apply"==a.type?e("div",{staticClass:"d-inline-flex"},[e("button",{staticClass:"btn-shadow align-items-center btn btn-success",on:{click:function(e){return t.clickAction(a)}}},[a.icon?e("i",{class:a.icon}):t._e(),t._v(t._s(a.label))])]):e("div",{staticClass:"d-inline-flex"},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:a.modal,expression:"action.modal"}],staticClass:"btn-shadow align-items-center btn",class:{"btn-link":"link"==a.type,"btn-success":!a.type||"button"==a.type},on:{click:function(e){return t.clickAction(a)}}},[a.icon?e("i",{staticClass:"mr-2",class:a.icon}):t._e(),t._v("\n                                "+t._s(a.label)+"\n                            ")])],1)],1)]}),null,{action:a})],2)}))],2)]),e("div",{staticStyle:{clear:"both",height:"0px"}})])},s=[],i=(a("96cf"),a("3b8d")),r=a("bbf5"),o=a.n(r),l=(a("53b4"),a("2ead"),a("c1df")),c=a.n(l),u=a("4a7a"),d=a.n(u),p=(a("6dfc"),a("d166"));function m(t){return t.hour(0).minute(0).seconds(0).milliseconds(0)}function v(t){return t.hour(23).minute(59).seconds(59).milliseconds(999)}var g={components:{DateRangePicker:o.a,vSelect:d.a},data:function(){var t=this;return{MyFlags:p["c"],MyDict:p["b"],MyConst:p["a"],dateranegeinput:function(){if(!t.daterange)return null;var e=t.daterange.startDate||m(c()().subtract(7,"day")).toDate(),a=t.daterange.endDate||v(c()()).toDate();return{range:{startDate:e,endDate:a},ranges:{Today:[m(c()()).toDate(),v(c()()).toDate()],"Last 7 Days":[m(c()().subtract(7,"day")).toDate(),v(c()()).toDate()],Yesterday:[m(c()().subtract(1,"day")).toDate(),v(c()().subtract(1,"day")).toDate()],"This month":[m(c()().date(1)).toDate(),v(c()()).toDate()],"Last month":[m(c()().subtract(1,"month").date(1)).toDate(),v(c()().date(0)).toDate()],"This year":[m(c()().month(0).date(1)).toDate(),v(c()()).toDate()],"Last year":[m(c()().subtract(1,"year").month(0).date(1)).toDate(),v(c()().month(0).date(0)).toDate()]}}}(),input:{lane:{options:[],value:null,sender:""},search:{value:null},contacts:""}}},computed:{ifFilters:function(){return this.filters||[]}},filters:{date:function(t){return t?t.toLocaleString():""}},created:function(t){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=m(c()()).toDate()),this.daterange.endDate||(this.daterange.endDate=v(c()()).toDate()),this.sanitizeDateRange(this.daterange)),this.loadLanes()},methods:{sanitizeDateRange:function(t){var e=c()(t.startDate),a=c()(t.endDate);return t.startDate=m(e).toDate(),t.endDate=v(a).toDate(),t},loadLanes:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.getX("/api/options/channels");case 2:t.sent,this.input.lane.options=this.$store.getters.StateApi.OptionsChannels;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onDateRangeSelect:function(t){console.log("select",t);var e=this.sanitizeDateRange(t);this.dateranegeinput.range.startDate=e.startDate,this.dateranegeinput.range.endDate=e.endDate},onDateRangeUpdate:function(t){console.log("c_update",t),this.daterange&&(this.daterange.startDate=t.startDate,this.daterange.endDate=t.endDate,this.$emit("dateRangeOnUpdate",t))},clickAction:function(t){this.$emit("action",t)},action:function(t,e,a){for(var n in this.actions)if(this.actions[n].name==t){this.actions[n][e]=a;break}},getInput:function(t){var e;return null===(e=this.input[t])||void 0===e?void 0:e.value}},props:{icon:String,heading:String,subheading:String,actions:Array,filters:Array,daterange:{type:Object,default:function(){return null}},actionShow:{type:Object,default:function(){return{message:"hello"}}}}},f=g,h=(a("8fc6"),a("1c21"),a("2877")),_=Object(h["a"])(f,n,s,!1,null,null,null);e["a"]=_.exports}}]);