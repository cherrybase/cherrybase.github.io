(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c7f9c85"],{"1af6":function(e,t,n){var a=n("63b6");a(a.S,"Array",{isArray:n("9003")})},"20fd":function(e,t,n){"use strict";var a=n("d9f6"),i=n("aebd");e.exports=function(e,t,n){t in e?a.f(e,t,i(0,n)):e[t]=n}},"2eb3":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-select",e._b({staticStyle:{"min-width":"220px"},attrs:{options:e.model.options,filterable:e.filterable,searchable:e.searchable,placeholder:e.placeholder,clearable:e.clearable},on:{search:e.onSearch,input:e.clickAction},scopedSlots:e._u([{key:"selected-option",fn:function(t){return[e.selectedPrefixClass?n("span",{class:e.selectedPrefixClass},[e._v(" ")]):e._e(),e._v(e._s(t.label)+"\n    ")]}},{key:"open-indicator",fn:function(t){var a=t.attributes;return[n("span",e._b({staticClass:"fa fa-caret-down"},"span",a,!1))]}},e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(n){return[e._t(t,null,null,n)]}}}))],null,!0),model:{value:e.model.value,callback:function(t){e.$set(e.model,"value",t)},expression:"model.value"}},"v-select",e.$attrs,!1))},i=[],o=(n("a481"),n("96cf"),n("3b8d")),s=n("75fc"),l=(n("7f7f"),n("4a7a")),r=n.n(l),c=(n("6dfc"),{components:{vSelect:r.a},props:{options:{default:"/options",description:"examples;- getx:RelativeGetXUrl,dispatch:DispatchableEventName,data:PathNameIn@data"},searchable:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},emptyDisplay:{type:String,default:null},placeholder:{type:String,default:""},optionKey:{type:String,default:"key"},optionLabel:{type:String,default:"label"},value:{default:null},selectDefault:{},selectedPrefixClass:{}},data:function(){return{model:{options:[],value:null,sender:""}}},computed:{myOptions:function(){}},watch:{value:function(e,t){this.selectModelValue()},options:function(e,t){this.loadOptions()}},mounted:function(){this.loadOptions()},methods:{selectModelValue:function(){for(var e in this.model.options)this.model.options[e].value==this.value&&(this.model.value=this.model.options[e]);!this.selectDefault||void 0!==this.model.value&&null!==this.model.value||1==this.selectDefault&&this.model.options[0]&&(this.model.value=this.model.options[0],this.clickAction()),console.log("option"),this.$emit("option",this.model.value)},fromOptions:function(e){var t=this,n=!1;this.model.options=e.map((function(e){if("string"==typeof e||"number"==typeof e)return{value:e,label:e,item:e};if(null===e||void 0===e)return n=!0,{value:e,label:t.emptyDisplay||t.placeholder,item:e};var a=e[t.optionKey]||e.id||e.key||e.code||e.value||e.label||e.name,i=e[t.optionLabel]||e.name||e.label||e.value||e.code||e.key||e.id;return{value:a,label:i||(null===a||void 0===a?t.emptyDisplay||t.placeholder:""),item:e}})),!n&&t.emptyDisplay&&(this.model.options=[{value:null,label:this.emptyDisplay,item:null}].concat(Object(s["a"])(this.model.options))),this.selectModelValue()},loadOptions:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("data:")){e.next=7;break}return e.next=3,n("ab35")("./"+this.options.replace("data:","")+".json");case 3:t=e.sent,this.fromOptions(t.options),e.next=24;break;case 7:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("getx:")){e.next=15;break}return a=this.options.replace("getx:",""),e.next=11,this.$service.getX(a);case 11:i=e.sent,this.fromOptions(i.results?i.results:i),e.next=24;break;case 15:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("dispatch:")){e.next=23;break}return o=this.options.replace("dispatch:",""),e.next=19,this.$store.dispatch(o);case 19:s=e.sent,this.fromOptions(s.results?s.results:s),e.next=24;break;case 23:this.options&&this.fromOptions(this.options);case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),clickAction:function(){var e=this.model.value?this.model.value.value:null;this.$emit("input",e),this.$emit("change",e)},onSearch:function(e,t){this.$emit("search",e,t)},option:function(){return this.model.value}}}),u=c,p=(n("6cd3"),n("2877")),f=Object(p["a"])(u,a,i,!1,null,null,null);t["a"]=f.exports},"2f9b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{ref:"pageTitle",attrs:{heading:e.header.heading,icon:e.header.icon,actions:e.actions,filters:e.filters,subheading:e.header.subheading},on:{action:e.onActionINT},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(n){return[e._t(t,null,null,Object.assign({},{apply:e.apply},n))]}}})),{key:"subheading",fn:function(){return[e._t("header-subheading",(function(){return[e._v("\n              "+e._s(e.header.subheading)+"      \n          ")]}))]},proxy:!0}],null,!0)}),e.table?n("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":e.table.perPage,"current-page":e.table.currentPage,items:e.table.items,fields:e.table.fields},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(n){return[e._t(t,null,null,n)]}}}))],null,!0)}):e._e(),e.table?n("b-pagination",{attrs:{"total-rows":e.table.rows,"per-page":e.table.perPage,"aria-controls":"agent-session-list"},model:{value:e.table.currentPage,callback:function(t){e.$set(e.table,"currentPage",t)},expression:"table.currentPage"}}):e._e()],1)},i=[],o=(n("7f7f"),n("96cf"),n("3b8d")),s=n("e492"),l=n("d166"),r={components:{PageTitle:s["a"]},props:{header:{type:Object},actions:{type:Array,default:function(){return[]}},filters:{type:Array,default:function(){return[]}},daterange:{type:Object},table:{type:Object},autoApply:{type:Boolean,default:!0},actionShow:{type:Object,default:function(){return{message:"hello"}}}},data:function(){return{MyFlags:l["c"],MyDict:l["b"],MyConst:l["a"],input:{daterange:{hidden:!0,startDate:null,endDate:null}},session:null}},mounted:function(e){this.autoApply&&this.getItems()},methods:{getItems:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in n={},this.actions)console.log("actions",a,this.actions[a]),i=this.actions[a].param||this.actions[a].type,n[i]=this.getInput(i);for(a in this.filters)i=this.filters[a].name||this.filters[a].param||this.filters[a].type,n[i]=this.filters[a].value;for(o in t)n[o]=t[o];if(!this.table||!this.table.api){e.next=12;break}return e.next=7,this.$service.get(this.table.api,n);case 7:s=e.sent,this.table.items=s.results,this.table.rows=this.table.items.length,this.session=s.meta,console.log("sessions",s,this.table);case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),apply:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.getItems();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onActionINT:function(e){switch(console.log("onAction",e),e.type){case"apply":this.getItems();break;default:this.$emit("action",e)}},getInput:function(e){return this.$refs.pageTitle.getInput(e)}}},c=r,u=n("2877"),p=Object(u["a"])(c,a,i,!1,null,"5ba92127",null);t["a"]=p.exports},"549b":function(e,t,n){"use strict";var a=n("d864"),i=n("63b6"),o=n("241e"),s=n("b0dc"),l=n("3702"),r=n("b447"),c=n("20fd"),u=n("7cd6");i(i.S+i.F*!n("4ee1")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,i,p,f=o(e),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,b=void 0!==m,v=0,y=u(f);if(b&&(m=a(m,h>2?arguments[2]:void 0,2)),void 0==y||d==Array&&l(y))for(t=r(f.length),n=new d(t);t>v;v++)c(n,v,b?m(f[v],v):f[v]);else for(p=y.call(f),n=new d;!(i=p.next()).done;v++)c(n,v,b?s(p,m,[i.value,v],!0):i.value);return n.length=v,n}})},"594a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MyVSelect",e._b({ref:"myVSelect",staticClass:"w-100 text-black",staticStyle:{"min-width":"220px"},attrs:{options:e.options,searchable:!1,clearable:!0,placeholder:"Select Template"},on:{input:e.clickAction},model:{value:e.model.value,callback:function(t){e.$set(e.model,"value",t)},expression:"model.value"}},"MyVSelect",e.$attrs,!1))},i=[],o=n("2eb3"),s={components:{MyVSelect:o["a"]},props:{options:{default:"getx:/api/tmpl/pushtemplate"},value:{default:null}},data:function(){return{model:{options:[],value:null,sender:""}}},mounted:function(){this.model.value=this.value},methods:{clickAction:function(){var e=this.model.value;this.$emit("input",e),this.$emit("change",e)},option:function(){return this.$refs.myVSelect.option()}}},l=s,r=n("2877"),c=Object(r["a"])(l,a,i,!1,null,null,null);t["a"]=c.exports},"59c3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("master-view",{attrs:{header:{heading:"WhatsApp Templates",subheading:"All the templates registered with WhatsApp",icon:"icon-gradient bg-happy-itmeo fa fa-whatsapp"},table:e.table,filters:e.filters,autoApply:!1},on:{action:e.onAction},scopedSlots:e._u([{key:"filter(channelId)",fn:function(t){var a=t.apply,i=t.filter;return[n("MyChannelSelect",{on:{change:a},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"filter.value"}})]}},{key:"filter(sync)",fn:function(e){var t=e.apply,a=e.filter;return[n("b-button",{staticClass:"fa fa-sync",attrs:{variant:"success"},on:{click:function(e){a.value=!0,t()}}})]}},{key:"cell(row_actions)",fn:function(t){var a=t.item;return[n("MyHSMTmplSelect",{on:{change:function(t){return e.onChange(a,"hsmTemplateId")}},model:{value:a.hsmTemplateId,callback:function(t){e.$set(a,"hsmTemplateId",t)},expression:"item.hsmTemplateId"}})]}}])})],1)},i=[],o=(n("7f7f"),n("96cf"),n("3b8d")),s=n("2f9b"),l=n("7f14"),r=n("594a"),c={components:{MasterView:s["a"],MyChannelSelect:l["a"],MyHSMTmplSelect:r["a"]},data:function(){return{filters:[{name:"sync",label:"Sync",value:!1},{label:"Select Account",name:"channelId",type:"lane",value:""}],table:{fields:[{key:"template.category",label:"category"},{key:"template.name",label:"name"},{key:"template.namespace",label:"namespace"},{key:"template.status",label:"status"},{key:"template.language",label:"language"},{key:"row_actions",label:"Linked HSM Template"}],items:[],perPage:25,currentPage:1,rows:0,api:"api/tmpl/hsm/waba_templates"},modelName:"MODAL_CHANNELS",modalInputs:[],oldHash:null,model:{channelId:""}}},computed:{items:function(){return this.$store.getters.StateAgents},teams:function(){return this.$store.getters.StateTeams},isChanged:function(){return!0}},created:function(e){},methods:{loadItems:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.get("api/options/channels");case 2:t=e.sent,this.table.items=t.results;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),viewItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),onAction:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:switch(t.name){default:console.log("NoMapping",t)}case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),onChange:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("hsmTemplateId"!=n){e.next=3;break}return e.next=3,this.$service.submit("api/tmpl/hsm/link",{templateId:t.id,hsmTemplateId:t.hsmTemplateId});case 3:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}},u=c,p=n("2877"),f=Object(p["a"])(u,a,i,!1,null,null,null);t["default"]=f.exports},"6cd3":function(e,t,n){"use strict";n("dbda")},"75fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("a745"),i=n.n(a);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e){if(i()(e))return o(e)}var l=n("67bb"),r=n.n(l),c=n("5d58"),u=n.n(c),p=n("774e"),f=n.n(p);function d(e){if("undefined"!==typeof r.a&&null!=e[u.a]||null!=e["@@iterator"])return f()(e)}function h(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?f()(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e){return s(e)||d(e)||h(e)||m()}},"774e":function(e,t,n){e.exports=n("d2d5")},"7f14":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MyVSelect",{ref:"myVSelect",staticClass:"w-100",staticStyle:{"min-width":"220px"},attrs:{options:e.options,searchable:!1,clearable:!1,placeholder:"Select Account",selectDefault:!0},on:{input:e.clickAction},scopedSlots:e._u([{key:"selected-option",fn:function(t){return[n("div",{},[n("span",{staticClass:"contact_type contact_type-24 fab",class:e.$global.MyDict.social[t.item.contactType]}),e._v("  "+e._s(t.item.lane)+"\n        ")])]}},{key:"option",fn:function(t){var a=t.item;return[n("span",{staticClass:"contact_type contact_type-24 fab",class:e.$global.MyDict.social[a.contactType]}),e._v("\n        "+e._s(a.lane)+"\n    ")]}}]),model:{value:e.model.value,callback:function(t){e.$set(e.model,"value",t)},expression:"model.value"}})},i=[],o=n("2eb3"),s={components:{MyVSelect:o["a"]},props:{options:{default:"getx:/api/options/channels"},value:{default:null}},data:function(){return{model:{value:null,sender:"",option:null}}},computed:{},mounted:function(){this.model.value=this.value},methods:{clickAction:function(){var e=this.model.value;this.$emit("input",e),this.$emit("change",e)},option:function(){return this.$refs.myVSelect.option()}}},l=s,r=n("2877"),c=Object(r["a"])(l,a,i,!1,null,null,null);t["a"]=c.exports},a745:function(e,t,n){e.exports=n("f410")},ab35:function(e,t,n){var a={"./countries.json":["3ab4","chunk-2d0c4816"],"./industries.json":["aeb3","chunk-2d21402b"]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n.t(i,3)}))}i.keys=function(){return Object.keys(a)},i.id="ab35",e.exports=i},d2d5:function(e,t,n){n("1654"),n("549b"),e.exports=n("584a").Array.from},dbda:function(e,t,n){},f410:function(e,t,n){n("1af6"),e.exports=n("584a").Array.isArray}}]);