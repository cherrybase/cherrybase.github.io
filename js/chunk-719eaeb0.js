(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-719eaeb0"],{"2f9b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{ref:"pageTitle",attrs:{heading:t.header.heading,icon:t.header.icon,actions:t.actions,filters:t.filters,subheading:t.header.subheading},on:{action:t.onActionINT},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,Object.assign({},{apply:t.apply},n))]}}})),{key:"subheading",fn:function(){return[t._t("header-subheading",(function(){return[t._v("\n              "+t._s(t.header.subheading)+"      \n          ")]}))]},proxy:!0}],null,!0)}),t.table?n("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":t.table.perPage,"current-page":t.table.currentPage,items:t.table.items,fields:t.table.fields},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)}):t._e(),t.table?n("b-pagination",{attrs:{"total-rows":t.table.rows,"per-page":t.table.perPage,"aria-controls":"agent-session-list"},model:{value:t.table.currentPage,callback:function(e){t.$set(t.table,"currentPage",e)},expression:"table.currentPage"}}):t._e()],1)},a=[],i=(n("7f7f"),n("96cf"),n("3b8d")),s=n("e492"),o=n("d166"),c={components:{PageTitle:s["a"]},props:{header:{type:Object},actions:{type:Array,default:function(){return[]}},filters:{type:Array,default:function(){return[]}},daterange:{type:Object},table:{type:Object},autoApply:{type:Boolean,default:!0},actionShow:{type:Object,default:function(){return{message:"hello"}}}},data:function(){return{MyFlags:o["c"],MyDict:o["b"],MyConst:o["a"],input:{daterange:{hidden:!0,startDate:null,endDate:null}},session:null}},mounted:function(t){this.autoApply&&this.getItems()},methods:{getItems:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in e={},this.actions)console.log("actions",n,this.actions[n]),r=this.actions[n].param||this.actions[n].type,e[r]=this.getInput(r);for(n in this.filters)r=this.filters[n].name||this.filters[n].param||this.filters[n].type,e[r]=this.filters[n].value;if(!this.table||!this.table.api){t.next=11;break}return t.next=6,this.$service.get(this.table.api,e);case 6:a=t.sent,this.table.items=a.results,this.table.rows=this.table.items.length,this.session=a.meta,console.log("sessions",a,this.table);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),apply:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getItems();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onActionINT:function(t){switch(console.log("onAction",t),t.type){case"apply":this.getItems();break;default:this.$emit("action",t)}},getInput:function(t){return this.$refs.pageTitle.getInput(t)}}},l=c,u=n("2877"),h=Object(u["a"])(l,r,a,!1,null,"06517ca6",null);e["a"]=h.exports},"5c42":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("master-view",{attrs:{header:{heading:t.heading,subheading:t.subheading,icon:t.icon},table:t.table,actions:t.actions},on:{action:t.onAction},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return t.deleteItem(e.item,e.index,n.target)}}},[n("i",{staticClass:"fas fa-trash"})])]}}])}),t._m(0),t.oneItem?n("b-modal",{attrs:{id:t.modelName,title:"Add Key ",size:"md"},on:{hidden:t.cancelItem},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"position-relative form-group"},[n("button",{staticClass:"form-control btn btn-primary",attrs:{name:"save",id:"examplePassword",disabled:!t.isChanged},on:{click:t.saveItem}},[t._v("Save")])])]},proxy:!0}],null,!1,3820954212)},[n("div",{staticClass:"form-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.oneItem.keyName,expression:"oneItem.keyName"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"My API Key 1",type:"text"},domProps:{value:t.oneItem.keyName},on:{input:function(e){e.target.composing||t.$set(t.oneItem,"keyName",e.target.value)}}})]),n("br")]):t._e(),t.lastItem?n("b-modal",{attrs:{id:t.modelName+"_VIEW",title:"Key : "+t.lastItem.keyName,size:"md"}},[n("b-input-group",{staticClass:"mt-3"},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[t._v("\n                Key Name")])],1),n("b-form-input",{attrs:{readonly:"",value:t.lastItem.keyName}})],1),n("b-input-group",{staticClass:"mt-3"},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[t._v("\n                API Id")])],1),n("b-form-input",{attrs:{readonly:"",value:t.lastItem.id}}),n("b-input-group-append",[n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.lastItem.id,expression:"lastItem.id",arg:"copy"}],attrs:{variant:"outline-success"}},[t._v("Copy")])],1)],1),n("b-input-group",{staticClass:"mt-3"},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[t._v("\n                API Key")])],1),n("b-form-input",{attrs:{readonly:"",value:t.lastItem.key}}),n("b-input-group-append",[n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.lastItem.key,expression:"lastItem.key",arg:"copy"}],attrs:{variant:"outline-success"}},[t._v("Copy")])],1)],1)],1):t._e()],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"main-card mb-3 card"})])])}],i=(n("7f7f"),n("96cf"),n("3b8d")),s=n("2f9b"),o=n("d166"),c=n("7f75"),l=n.n(c);n("b3a4");function u(){return{keyName:null}}var h={components:{MasterView:s["a"],VSwatches:l.a},data:function(){return{MyFlags:o["c"],MyDict:o["b"],MyConst:o["a"],heading:"API Keys",subheading:"Create Keys to use APIs",icon:"pe-7s-key icon-gradient bg-happy-itmeo fa fa-key",actions:[{label:"Add Keys",icon:"fa fa-plus",name:"ADD_ITEM",action:"ADD_ITEM"}],table:{fields:[{key:"keyName",label:"Name"},{key:"id",label:"Id"},{key:"actions",label:"Actions"}],items:[],perPage:25,currentPage:1,rows:0},oneItem:u(),lastItem:{},modelName:"MODAL_ADD_ITEM"}},computed:{items:function(t){return this.$store.getters.StateAgents},teams:function(t){return this.$store.getters.StateTeams},isChanged:function(t){return this.oldHash!==JSON.stringify(this.oneItem)}},created:function(t){this.loadItems()},methods:{loadItems:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.get("api/config/clientapikey");case 2:e=t.sent,this.table.items=e.results;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.post("api/config/clientapikey",{keyName:this.oneItem.keyName});case 2:e=t.sent,this.lastItem=e.data,this.oneItem=u(),this.onAction({name:"CANCEL"}),this.loadItems(),this.$bvModal.show(this.modelName+"_VIEW");case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancelItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.oneItem=u(),this.onAction({name:"CANCEL"});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),deleteItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.delete("api/config/clientapikey/",e);case 2:this.loadItems();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in this.oneItem=u(),e)this.oneItem[n]=JSON.parse(JSON.stringify(e[n]));this.onAction({name:"EDIT_ITEM"});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onAction:function(t){switch(t.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",t);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",t);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",t)}}}},p=h,d=(n("d550"),n("2877")),f=Object(d["a"])(p,r,a,!1,null,null,null);e["default"]=f.exports},"7f75":function(t,e,n){(function(e,n){t.exports=n()})("undefined"!==typeof self&&self,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"0ca3":function(t,e,n){"use strict";var r=n("c6aa"),a=n.n(r);a.a},7937:function(t,e,n){},"7fca":function(t,e,n){"use strict";var r=n("c10a"),a=n.n(r);a.a},8875:function(t,e,n){var r,a,i;(function(n,s){a=[],r=s,i="function"===typeof r?r.apply(e,a):r,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(h){var t,e,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,a=/@([^@]*):(\d+):(\d+)\s*$/gi,i=r.exec(h.stack)||a.exec(h.stack),s=i&&i[1]||!1,o=i&&i[2]||!1,c=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");s===c&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(o-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var u=0;u<l.length;u++){if("interactive"===l[u].readyState)return l[u];if(l[u].src===s)return l[u];if(s===c&&l[u].innerHTML&&l[u].innerHTML.trim()===n)return l[u]}return null}}return t}))},9334:function(t,e,n){"use strict";var r=n("7937"),a=n.n(r);a.a},c10a:function(t,e,n){},c6aa:function(t,e,n){},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"DEFAULT_BACKGROUND_COLOR",(function(){return E})),n.d(e,"DEFAULT_BORDER_RADIUS",(function(){return N})),n.d(e,"DEFAULT_ROW_LENGTH",(function(){return R})),n.d(e,"DEFAULT_TRIGGER_CONTAINER_SPACE",(function(){return P})),n.d(e,"DEFAULT_SWATCH_SIZE",(function(){return D})),n.d(e,"DEFAULT_SHOW_BORDER",(function(){return L})),n.d(e,"extractPropertyFromPreset",(function(){return z})),"undefined"!==typeof window){var r=window.document.currentScript,a=n("8875");r=a(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:a});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-swatches",attrs:{tabindex:"-1"},on:{blur:function(e){return t.onBlur(e.relatedTarget)}}},[t.inline?t._e():n("div",{ref:"triggerWrapper",staticClass:"vue-swatches__trigger__wrapper",on:{click:t.togglePopover}},[t._t("trigger",[n("div",{staticClass:"vue-swatches__trigger",class:{"vue-swatches--is-empty":!t.value,"vue-swatches--is-disabled":t.disabled},style:t.triggerStyles},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isNoColor,expression:"isNoColor"}],staticClass:"vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__diagonal"})])])])],2),n("transition",{attrs:{name:"vue-swatches-show-hide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.inline||t.isOpen,expression:"inline || isOpen"}],ref:"containerWrapper",staticClass:"vue-swatches__container",class:{"vue-swatches--inline":t.inline},style:t.containerStyles},[n("div",{staticClass:"vue-swatches__wrapper",style:t.wrapperStyles},[t.isNested?t._l(t.computedSwatches,(function(e,r){return n("div",{key:r,staticClass:"vue-swatches__row"},t._l(e,(function(a,i){return n("v-swatch",{key:i,attrs:{"is-last":r===t.computedSwatches.length-1&&i===e.length,"row-length-setted":null!==t.rowLength||null!==t.presetRowLength,"border-radius":t.computedBorderRadius,disabled:t.getSwatchDisabled(a),inline:t.inline,selected:t.checkEquality(t.getSwatchColor(a),t.value),"swatch-size":t.computedSwatchSize,"spacing-size":t.computedSpacingSize,"show-border":t.getSwatchShowBorder(a),"show-checkbox":t.showCheckbox,"show-labels":t.showLabels,"swatch-color":t.getSwatchColor(a),"swatch-label":t.getSwatchLabel(a),"swatch-alt":t.getSwatchAlt(a),"swatch-style":t.swatchStyle},on:{blur:function(e){return t.onBlur(e)},click:function(e){return t.updateSwatch(a)}},nativeOn:{click:function(e){return t.updateSwatch(a)}}})})),1)})):t._l(t.computedSwatches,(function(e,r){return n("v-swatch",{key:r,attrs:{"is-last":r===t.computedSwatches.length-1,"row-length-setted":null!==t.rowLength||null!==t.presetRowLength,"border-radius":t.computedBorderRadius,disabled:t.getSwatchDisabled(e),inline:t.inline,selected:t.checkEquality(t.getSwatchColor(e),t.value),"swatch-size":t.computedSwatchSize,"spacing-size":t.computedSpacingSize,"show-border":t.getSwatchShowBorder(e),"show-checkbox":t.showCheckbox,"show-labels":t.showLabels,"swatch-color":t.getSwatchColor(e),"swatch-label":t.getSwatchLabel(e),"swatch-alt":t.getSwatchAlt(e),"swatch-style":t.swatchStyle},on:{blur:function(e){return t.onBlur(e)},click:function(n){return t.updateSwatch(e)}},nativeOn:{click:function(n){return t.updateSwatch(e)}}})}))],2),t.showFallback?n("div",{staticClass:"vue-swatches__fallback__wrapper",style:t.computedFallbackWrapperStyles},[n("span",{staticClass:"vue-swatches__fallback__input--wrapper"},[n("input",{ref:"fallbackInput",staticClass:"vue-swatches__fallback__input",class:t.fallbackInputClass,attrs:{type:t.fallbackInputType},domProps:{value:t.internalValue},on:{input:function(e){return t.updateSwatch(e.target.value,{fromFallbackInput:!0})}}})]),t.showFallbackOk?n("button",{staticClass:"vue-swatches__fallback__button",class:t.fallbackOkClass,on:{click:function(e){return e.preventDefault(),t.onFallbackButtonClick(e)}}},[t._v(" "+t._s(t.fallbackOkText)+" ")]):t._e()]):t._e()])])],1)},o=[],c={colors:["#1FBC9C","#1CA085","#2ECC70","#27AF60","#3398DB","#2980B9","#A463BF","#8E43AD","#3D556E","#222F3D","#F2C511","#F39C19","#E84B3C","#C0382B","#DDE6E8","#BDC3C8"],rowLength:4},l={colors:["#CC0001","#E36101","#FFCC00","#009900","#0066CB","#000000","#FFFFFF"],showBorder:!0},u={colors:[["#000000","#434343","#666666","#999999","#b7b7b7","#cccccc","#d9d9d9","#efefef","#f3f3f3","#ffffff"],["#980000","#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#4a86e8","#0000ff","#9900ff","#ff00ff"],["#e6b8af","#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#c9daf8","#cfe2f3","#d9d2e9","#ead1dc"],["#dd7e6b","#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#a4c2f4","#9fc5e8","#b4a7d6","#d5a6bd"],["#cc4125","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6d9eeb","#6fa8dc","#8e7cc3","#c27ba0"],["#a61c00","#cc0000","#e69138","#f1c232","#6aa84f","#45818e","#3c78d8","#3d85c6","#674ea7","#a64d79"],["#85200c","#990000","#b45f06","#bf9000","#38761d","#134f5c","#1155cc","#0b5394","#351c75","#741b47"],["#5b0f00","#660000","#783f04","#7f6000","#274e13","#0c343d","#1c4587","#073763","#20124d","#4c1130"]],borderRadius:"0",rowLength:10,swatchSize:24,spacingSize:0},h=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"vue-swatches__swatch",class:{"vue-swatches__swatch--border":e.showBorder,"vue-swatches__swatch--selected":e.selected,"vue-swatches__swatch--is-disabled":e.disabled},style:e.swatchStyles,attrs:{"aria-label":e.swatchAlt,role:"button",tabindex:"0"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("click",e.swatchColor)},blur:function(e){return t.$emit("blur",e.relatedTarget)}}},[""===e.swatchColor?r("div",{staticClass:"vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"},[r("div",{staticClass:"vue-swatches__diagonal"})]):e._e(),r("v-check",{directives:[{name:"show",rawName:"v-show",value:e.showCheckbox&&e.selected,expression:"showCheckbox && selected"}]}),e.showLabels?r("div",{staticClass:"vue-swatches__swatch__label",style:e.labelStyles},[e._v(" "+e._s(e.swatchLabel)+" ")]):e._e()],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-swatches__check__wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__check__circle vue-swatches--has-children-centered"},[n("svg",{staticClass:"check",attrs:{version:"1.1",role:"presentation",width:"12",height:"12",viewBox:"0 0 1792 1792"}},[n("path",{staticClass:"vue-swatches__check__path",attrs:{d:"M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"}})])])])},f=[],b={name:"v-check",data:function(){return{}}},m=b;function w(t,e,n,r,a,i,s,o){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n("7fca");var g=w(m,d,f,!1,null,null,null),y=g.exports;function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k={name:"v-swatch",components:{VCheck:y},props:{borderRadius:{type:String},isLast:{type:Boolean,default:!1},rowLengthSetted:{type:Boolean,default:!1},disabled:{type:Boolean},inline:{type:Boolean},selected:{type:Boolean,default:!1},showCheckbox:{type:Boolean},showBorder:{type:Boolean},showLabels:{type:Boolean},spacingSize:{type:Number},swatchColor:{type:String,default:""},swatchLabel:{type:String},swatchAlt:{type:String},swatchSize:{type:Number},swatchStyle:{type:Object}},data:function(){return{}},computed:{computedLabelStyle:function(){var t=8+3*Math.floor(this.spacingSize/5);return{bottom:"-".concat(t,"px")}},computedSwatchStyle:function(){var t={width:"".concat(this.swatchSize,"px"),height:"".concat(this.swatchSize,"px"),borderRadius:this.borderRadius,backgroundColor:""!==this.swatchColor?this.swatchColor:"#FFFFFF",cursor:this.cursorStyle};return this.inline&&this.isLast||(t.marginRight="".concat(this.spacingSize,"px")),this.inline&&!this.rowLengthSetted?t:S({},t,{marginBottom:"".concat(this.spacingSize,"px")})},cursorStyle:function(){return this.disabled?"not-allowed":"pointer"},labelStyles:function(){return[this.computedLabelStyle]},swatchStyles:function(){return[this.computedSwatchStyle,this.swatchStyle]}}},C=k,O=(n("0ca3"),w(C,h,p,!1,null,null,null)),x=O.exports;function I(t){return I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E="#ffffff",N="10px",R=4,P=5,D=42,L=!1,z=function(t,e,n){return"string"!==typeof t?null:"text-basic"===t?void 0===l[e]?null:l[e]:"text-advanced"===t?void 0===u[e]?null:u[e]:"basic"===t||n?void 0===c[e]?null:c[e]:null},T={name:"v-swatches",components:{VSwatch:x},props:{backgroundColor:{type:String,default:E},closeOnSelect:{type:Boolean,default:!0},swatches:{type:[Array,String],default:function(){return"basic"}},disabled:{type:Boolean,default:!1},fallbackInputClass:{type:[Array,Object,String],default:null},fallbackInputType:{type:String,default:function(){return"text"},validator:function(t){return-1!==["text","color"].indexOf(t)}},fallbackOkClass:{type:[Array,Object,String],default:null},fallbackOkText:{type:String,default:"Ok"},inline:{type:Boolean,default:!1},shapes:{type:String,default:"squares"},popoverX:{type:String,default:"right"},popoverY:{type:String,default:"bottom"},rowLength:{type:[Number,String],default:null},showBorder:{type:Boolean,default:null},showFallback:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!0},showLabels:{type:Boolean,default:!1},spacingSize:{type:Number,default:null},swatchSize:{type:[Number,String],default:null},swatchStyle:{type:[Object,Array],default:function(){}},triggerStyle:{type:[Object,Array],default:function(){}},wrapperStyle:{type:[Object,Array],default:function(){}},value:{type:String,default:null}},data:function(){return{alwaysOnScreenStyle:{},componentMounted:!1,internalValue:this.value,internalIsOpen:!1}},computed:{isNested:function(){return!!(this.computedSwatches&&this.computedSwatches.length&&this.computedSwatches[0]instanceof Array)},isOpen:function(){return!this.inline&&this.internalIsOpen},isNoColor:function(){return this.checkEquality("",this.value)},presetBorderRadius:function(){return z(this.swatches,"borderRadius")},presetRowLength:function(){return z(this.swatches,"rowLength")},presetShowBorder:function(){return z(this.swatches,"showBorder")},presetSwatchSize:function(){return z(this.swatches,"swatchSize")},presetSpacingSize:function(){return z(this.swatches,"spacingSize")},computedSwatches:function(){return this.swatches instanceof Array?this.swatches:"string"===typeof this.swatches?z(this.swatches,"colors",!0):[]},computedBorderRadius:function(){return null!==this.presetBorderRadius?this.presetBorderRadius:this.borderRadius},computedRowLength:function(){return null!==this.rowLength?Number(this.rowLength):null!==this.presetRowLength?this.presetRowLength:this.computedSwatches.length<R&&!this.isNested?this.computedSwatches.length:R},computedSwatchSize:function(){return null!==this.swatchSize?Number(this.swatchSize):null!==this.presetSwatchSize?this.presetSwatchSize:D},computedSpacingSize:function(){return null!==this.spacingSize?this.spacingSize:null!==this.presetSpacingSize?this.presetSpacingSize:Math.round(.25*this.computedSwatchSize)},computedShowBorder:function(){return null!==this.showBorder?this.showBorder:null!==this.presetShowBorder?this.presetShowBorder:L},showFallbackOk:function(){return!this.inline},borderRadius:function(){return"squares"===this.shapes?"".concat(Math.round(.25*this.computedSwatchSize),"px"):"circles"===this.shapes?"50%":""},wrapperWidth:function(){return this.computedRowLength*(this.computedSwatchSize+this.computedSpacingSize)},computedtriggerStyle:function(){return{width:"42px",height:"42px",backgroundColor:this.value?this.value:"#ffffff",borderRadius:"circles"===this.shapes?"50%":N}},triggerStyles:function(){return[this.computedtriggerStyle,this.triggerStyle]},containerStyles:function(){var t=[{backgroundColor:this.backgroundColor},this.alwaysOnScreenStyle];return this.inline?t:[].concat(t,[{padding:"5px",marginBottom:"5px"}])},computedWrapperStyle:function(){return this.inline?{}:{paddingTop:"".concat(this.computedSpacingSize,"px"),paddingLeft:"".concat(this.computedSpacingSize,"px"),width:"".concat(this.wrapperWidth,"px")}},wrapperStyles:function(){return[this.computedWrapperStyle,this.wrapperStyle]},computedFallbackWrapperStyle:function(){var t={marginLeft:"".concat(this.computedSpacingSize,"px"),paddingBottom:"".concat(this.computedSpacingSize,"px")};return this.inline?t:j({},t,{width:"".concat(this.wrapperWidth-this.computedSpacingSize,"px")})},computedFallbackWrapperStyles:function(){return[this.computedFallbackWrapperStyle]}},watch:{value:function(t){this.internalValue=t}},mounted:function(){this.componentMounted=!0},methods:{checkEquality:function(t,e){return!(!t&&""!==t||!e&&""!==e)&&t.toUpperCase()===e.toUpperCase()},hidePopover:function(){this.internalIsOpen=!1,this.$el.blur(),this.$emit("close",this.internalValue)},getAlwaysOnScreenStyle:function(){var t={},e=this.$refs.triggerWrapper,n=this.$refs.containerWrapper;if(!this.componentMounted||this.inline||!e||!window||!document)return t;var r=e.getBoundingClientRect(),a=5,i=(document.documentElement.clientWidth||window.innerWidth)-5,s=5,o=(document.documentElement.clientHeight||window.innerHeight)-5;n.style.visibility="hidden",n.style.display="block";var c=n.getBoundingClientRect();return n.style.display="none",n.style.visibility="visible","top"===this.popoverY?r.top-c.height<s?(t.top="".concat(r.height+P,"px"),t.bottom="auto"):(t.bottom="".concat(r.height+P,"px"),t.top="auto"):"bottom"===this.popoverY&&(r.bottom+c.height>o?(t.bottom="".concat(r.height+P,"px"),t.top="auto"):(t.top="".concat(r.height+P,"px"),t.bottom="auto")),"left"===this.popoverX?r.right-c.width<a?(t.left=0,t.right="auto"):(t.right=0,t.left="auto"):"right"===this.popoverX&&(r.left+c.width>i?(t.right=0,t.left="auto"):(t.left=0,t.right="auto")),t},getSwatchShowBorder:function(t){return"string"===typeof t?this.computedShowBorder:"object"===I(t)?void 0!==t.showBorder?t.showBorder:this.computedShowBorder:void 0},getSwatchColor:function(t){return"string"===typeof t?t:"object"===I(t)?t.color:void 0},getSwatchDisabled:function(t){return"string"===typeof t?this.disabled:"object"===I(t)?void 0!==t.disabled?t.disabled:this.disabled:void 0},getSwatchLabel:function(t){return"string"===typeof t?t:"object"===I(t)?t.label||t.color:void 0},getSwatchAlt:function(t){return"string"===typeof t?t:"object"===I(t)?t.alt||this.getSwatchLabel(t):void 0},onBlur:function(t){this.isOpen&&(null!==t&&this.$el.contains(t)||(this.internalIsOpen=!1,this.$emit("close",this.internalValue)))},onFallbackButtonClick:function(){this.hidePopover()},showPopover:function(){this.isOpen||this.inline||this.disabled||(this.alwaysOnScreenStyle=this.getAlwaysOnScreenStyle(),this.internalIsOpen=!0,this.$el.focus(),this.$emit("open"))},togglePopover:function(){this.isOpen?this.hidePopover():this.showPopover()},updateSwatch:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fromFallbackInput;if(!this.getSwatchDisabled(t)){var r=this.getSwatchColor(t);this.internalValue=r,this.$emit("input",r),!this.closeOnSelect||this.inline||n||this.hidePopover()}}}},$=T,F=(n("9334"),w($,s,o,!1,null,null,null)),M=F.exports;e["default"]=M}})["default"]}))},"9d35":function(t,e,n){},b3a4:function(t,e,n){},d550:function(t,e,n){"use strict";n("9d35")}}]);