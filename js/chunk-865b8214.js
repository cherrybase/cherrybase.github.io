(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-865b8214"],{"02fc":function(t,e,a){"use strict";a("3170")},3170:function(t,e,a){},cca6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,actions:t.actions}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"main-card mb-3 card"},[a("ValidationObserver",{ref:"form"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Agent Details")]),a("form",{},[a("div",{staticClass:"position-relative form-group"},[a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("label",{attrs:{for:"examplePassword"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_name,expression:"newAgent.agent_name"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"John Doe",type:"text"},domProps:{value:t.newAgent.agent_name},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_name",e.target.value)}}}),a("span",{staticClass:"v-input-error"},[t._v(t._s(e.errors[0]))])]}}])})],1),a("div",{staticClass:"position-relative form-group"},[a("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("label",{attrs:{for:"exampleEmail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_email,expression:"newAgent.agent_email"}],staticClass:"form-control",attrs:{name:"email",id:"exampleEmail",placeholder:"abc@xyz.com",type:"email"},domProps:{value:t.newAgent.agent_email},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_email",e.target.value)}}}),a("span",{staticClass:"v-input-error"},[t._v(t._s(e.errors[0]))])]}}])})],1),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleEmail"}},[t._v("Agent Code")]),a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("@")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_code,expression:"newAgent.agent_code"}],staticClass:"form-control",attrs:{placeholder:"john,sam2",type:"text"},domProps:{value:t.newAgent.agent_code},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_code",e.target.value)}}})])]),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"examplePassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_password,expression:"newAgent.agent_password"}],staticClass:"form-control",attrs:{name:"password",id:"examplePassword",placeholder:"password",type:"password"},domProps:{value:t.newAgent.agent_password},on:{input:function(e){e.target.composing||t.$set(t.newAgent,"agent_password",e.target.value)}}})])])])])],1)]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"main-card mb-3 card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Dashboard options")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleSelect"}},[t._v("Team")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.dept_id,expression:"newAgent.dept_id"}],staticClass:"form-control",attrs:{name:"select",id:"exampleSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newAgent,"dept_id",e.target.multiple?a:a[0])}}},t._l(t.teams,(function(e){return"Y"==e.isactive?a("option",{domProps:{value:e.dept_id}},[t._v("\n                                      "+t._s(e.dept_name))]):t._e()})),0)]),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleCustomMutlipleSelect"}},[t._v("Channels")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newAgent.agent_channels_list,expression:"newAgent.agent_channels_list"}],staticClass:"custom-select",attrs:{multiple:"",type:"select",id:"exampleCustomMutlipleSelect",name:"customSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newAgent,"agent_channels_list",e.target.multiple?a:a[0])}}},[a("option",[t._v("WHATSAPP")]),a("option",[t._v("FACEBOOK")]),a("option",[t._v("TWITTER")]),a("option",[t._v("TELEGRAM")]),a("option",[t._v("WEBSITE")])])])]),t._m(0)])])]),t._m(1)])]),a("div",{staticClass:"main-card mb-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"mt-1 btn btn-primary float-right",on:{click:t.createAgent}},[t._v("Submit")])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6",attrs:{hidden:""}},[a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleCustomSelectDisabled"}},[t._v("Custom Select\n                                    Disabled")]),a("select",{staticClass:"custom-select",attrs:{type:"select",id:"exampleCustomSelectDisabled",name:"customSelect",disabled:""}},[a("option",{attrs:{value:""}},[t._v("Select")]),a("option",[t._v("Value 1")]),a("option",[t._v("Value 2")]),a("option",[t._v("Value 3")]),a("option",[t._v("Value 4")]),a("option",[t._v("Value 5")])])]),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleCustomMutlipleSelectDisabled"}},[t._v("Custom Multiple Select\n                                    Disabled")]),a("select",{staticClass:"custom-select",attrs:{multiple:"",type:"select",id:"exampleCustomMutlipleSelectDisabled",name:"customSelect",disabled:""}},[a("option",{attrs:{value:""}},[t._v("Select")]),a("option",[t._v("Value 1")]),a("option",[t._v("Value 2")]),a("option",[t._v("Value 3")]),a("option",[t._v("Value 4")]),a("option",[t._v("Value 5")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-card mb-3 card",attrs:{hidden:""}},[a("div",{staticClass:"card-body row"},[a("h5",{staticClass:"card-title"}),a("div",{staticClass:"position-relative form-group col-md-6"},[a("div",[a("div",{staticClass:"custom-checkbox custom-control"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox"}},[t._v("Active")])]),a("div",{staticClass:"custom-checkbox custom-control"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox2"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox2"}},[t._v("Send Email")])])])])])])}],i=(a("96cf"),a("3b8d")),o=a("e492");function r(){return{agent_code:"",agent_email:"",agent_id:null,agent_channels_list:[],agent_channels:""}}var l={components:{PageTitle:o["a"]},data:function(){return{heading:"Add Agent",subheading:"Enter Details for new Agent, once created agent will recieve email to reset password",icon:"pe-7s-add-user icon-gradient bg-tempting-azure",actions:[],newAgent:r()}},computed:{teams:function(t){return this.$store.getters.StateTeams}},created:function(t){this.loadAgentTeams()},methods:{loadAgentTeams:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetTeams");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),createAgent:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("CreateAgent",this.newAgent);case 2:this.newAgent=r(),this.$refs.form.reset();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=l,u=a("2877"),d=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports},da41:function(t,e,a){},e492:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-page-title"},[a("div",{staticClass:"page-title-wrapper"},[a("div",{staticClass:"page-title-heading"},[a("div",{staticClass:"page-title-icon"},[a("i",{class:t.icon})]),a("div",[t._v("\n                "+t._s(t.heading)+"\n                "),a("div",{staticClass:"page-title-subheading"},[t._t("subheading",(function(){return[t._v("\n                        "+t._s(t.subheading)+"\n                    ")]}))],2)])]),a("div",{staticClass:"page-title-actions"},[t._l(t.ifFilters,(function(e,n){return a("span",{key:"filter-"+n,staticClass:"filter-wrapper"},[t._t("filter("+e.name+")",(function(){return[e.hidden?t._e():a("span")]}),null,{filter:e})],2)})),t.dateranegeinput&&!t.dateranegeinput.hidden?a("span",{staticClass:"action-wrapper"},[a("date-range-picker",{attrs:{opens:"left","time-picker":!1,"control-container-class":"reportrange-text btn btn-success",ranges:t.dateranegeinput.ranges},on:{select:t.onDateRangeSelect,update:t.onDateRangeUpdate},scopedSlots:t._u([{key:"input",fn:function(e){return[a("i",{staticClass:"fa fa-calendar-alt"}),t._v(" "+t._s(t._f("date")(e.startDate))+" - "+t._s(t._f("date")(e.endDate))+"\n    ")]}}],null,!1,2163278788),model:{value:t.dateranegeinput.range,callback:function(e){t.$set(t.dateranegeinput,"range",e)},expression:"dateranegeinput.range"}})],1):t._e(),t._l(t.actions,(function(e,n){return a("span",{key:"action-"+n,staticClass:"action-wrapper"},[t._t("action("+e.name+")",(function(){return[e.hidden||!1===t.actionShow[e.name]?t._e():a("span",[e.link?a("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},attrs:{tag:"button",to:e.link,type:"button"}},[e.icon?a("i",{staticClass:"mr-2",class:e.icon}):t._e(),t._v("\n                            "+t._s(e.label)+" \n                        ")]):"lane"==e.type?a("div",{staticClass:"d-inline-flex align-items-center",staticStyle:{"min-width":"220px"}},[a("v-select",{staticClass:"w-100",attrs:{options:t.input.lane.options,searchable:!1,clearable:!1,placeholder:"Select Account"},on:{input:function(a){return t.clickAction(e)}},scopedSlots:t._u([{key:"selected-option",fn:function(e){return[a("div",{},[a("span",{staticClass:"contact_type contact_type-24 fab",class:t.MyDict.social[e.contactType]}),t._v("  "+t._s(e.lane))])]}},{key:"open-indicator",fn:function(e){var n=e.attributes;return[a("span",t._b({staticClass:"fa fa-caret-down"},"span",n,!1))]}},{key:"option",fn:function(e){var n=e.contactType,s=e.lane;return[a("span",{staticClass:"contact_type contact_type-24 fab",class:t.MyDict.social[n]}),t._v("  "+t._s(s)+"\n                                ")]}}],null,!0),model:{value:t.input.lane.value,callback:function(e){t.$set(t.input.lane,"value",e)},expression:"input.lane.value"}})],1):"search"==e.type?a("div",{staticClass:"d-inline-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.search.value,expression:"input.search.value"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:t.input.search.value},on:{input:function(e){e.target.composing||t.$set(t.input.search,"value",e.target.value)}}})]):"apply"==e.type?a("div",{staticClass:"d-inline-flex"},[a("button",{staticClass:"btn-shadow  align-items-center btn btn-success",on:{click:function(a){return t.clickAction(e)}}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(t._s(e.label))])]):a("div",{staticClass:"d-inline-flex"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:e.modal,expression:"action.modal"}],staticClass:"btn-shadow  align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},on:{click:function(a){return t.clickAction(e)}}},[e.icon?a("i",{staticClass:"mr-2",class:e.icon}):t._e(),t._v("\n                                "+t._s(e.label)+"\n                            ")])],1)],1)]}),null,{action:e})],2)}))],2)]),a("div",{staticStyle:{clear:"both",height:"0px"}})])},s=[],i=(a("7f7f"),a("96cf"),a("3b8d")),o=a("bbf5"),r=a.n(o),l=(a("53b4"),a("2ead"),a("c1df")),c=a.n(l),u=a("4a7a"),d=a.n(u),p=(a("6dfc"),a("d166"));function m(t){return t.hour(0).minute(0).seconds(0).milliseconds(0)}function v(t){return t.hour(23).minute(59).seconds(59).milliseconds(999)}var g={components:{DateRangePicker:r.a,vSelect:d.a},data:function(){var t=this;return{MyFlags:p["c"],MyDict:p["b"],MyConst:p["a"],dateranegeinput:function(){if(!t.daterange)return null;var e=t.daterange.startDate||m(c()().subtract(7,"day")).toDate(),a=t.daterange.endDate||v(c()()).toDate();return{range:{startDate:e,endDate:a},ranges:{Today:[m(c()()).toDate(),v(c()()).toDate()],"Last 7 Days":[m(c()().subtract(7,"day")).toDate(),v(c()()).toDate()],Yesterday:[m(c()().subtract(1,"day")).toDate(),v(c()().subtract(1,"day")).toDate()],"This month":[m(c()().date(1)).toDate(),v(c()()).toDate()],"Last month":[m(c()().subtract(1,"month").date(1)).toDate(),v(c()().date(0)).toDate()],"This year":[m(c()().month(0).date(1)).toDate(),v(c()()).toDate()],"Last year":[m(c()().subtract(1,"year").month(0).date(1)).toDate(),v(c()().month(0).date(0)).toDate()]}}}(),input:{lane:{options:[],value:null,sender:""},search:{value:null},contacts:""}}},computed:{ifFilters:function(){return this.filters||[]}},filters:{date:function(t){return t?t.toLocaleString():""}},created:function(t){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=m(c()()).toDate()),this.daterange.endDate||(this.daterange.endDate=v(c()()).toDate()),this.sanitizeDateRange(this.daterange)),this.loadLanes()},methods:{sanitizeDateRange:function(t){var e=c()(t.startDate),a=c()(t.endDate);return t.startDate=m(e).toDate(),t.endDate=v(a).toDate(),t},loadLanes:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.getX("/api/options/channels");case 2:t.sent,this.input.lane.options=this.$store.getters.StateApi.OptionsChannels;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onDateRangeSelect:function(t){console.log("select",t);var e=this.sanitizeDateRange(t);this.dateranegeinput.range.startDate=e.startDate,this.dateranegeinput.range.endDate=e.endDate},onDateRangeUpdate:function(t){console.log("c_update",t),this.daterange&&(this.daterange.startDate=t.startDate,this.daterange.endDate=t.endDate,this.$emit("dateRangeOnUpdate",t))},clickAction:function(t){this.$emit("action",t)},action:function(t,e,a){for(var n in this.actions)if(this.actions[n].name==t){this.actions[n][e]=a;break}},getInput:function(t){var e;return null===(e=this.input[t])||void 0===e?void 0:e.value}},props:{icon:String,heading:String,subheading:String,actions:Array,filters:Array,daterange:{type:Object,default:function(){return null}},actionShow:{type:Object,default:function(){return{message:"hello"}}}}},f=g,h=(a("02fc"),a("fb11"),a("2877")),_=Object(h["a"])(f,n,s,!1,null,null,null);e["a"]=_.exports},fb11:function(t,e,a){"use strict";a("da41")}}]);