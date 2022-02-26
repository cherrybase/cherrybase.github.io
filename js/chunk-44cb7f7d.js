(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44cb7f7d"],{4552:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("master-view",{attrs:{header:{heading:"Client Apps",subheading:"Client Apps are used to interact with messaging apis",icon:"pe-7s-key icon-gradient bg-happy-itmeo fa fa-th-large"},table:e.table,actions:e.actions},on:{action:e.onAction},scopedSlots:e._u([{key:"cell(appType)",fn:function(t){return[n("my-icon",{attrs:{type:"chatmode",value:t.item.appType}},[e._v(" "),n("small",[e._v(e._s(t.item.appType))])])]}},{key:"cell(changelog)",fn:function(t){return[n("small",[e._v("Modified on "+e._s(e._f("formatStamp")(t.item.updatedStamp))+" by "+e._s(t.item.updatedBy))])]}},{key:"cell(code)",fn:function(t){return[e._v("\n          "+e._s(t.item.code)+" "),e.$global.MyConst.config.SETUP.POSTMAN_CHAT_INBOUND_QUEUE==t.item.code?n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"This is set as default inbound queue",expression:"'This is set as default inbound queue'"}],staticClass:"btn mg-1 fa fa-star text-primary"}):e._e()]}},{key:"cell(actions)",fn:function(t){return[n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],staticClass:"mg-1",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.showItem(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-eye"})]),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],staticClass:"mg-1",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.editItem(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-edit"})]),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],staticClass:"mg-1",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.deleteItem(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-trash"})])]}}])}),e._m(0),n("ValidationObserver",{ref:"form",staticClass:"template-form"},[e.oneItem?n("b-modal",{attrs:{id:e.modelName,title:"Client App Details",size:"md"},on:{hidden:e.cancelItem},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"position-relative"},[e.oneItem.id?n("button",{staticClass:"btn btn-outline-danger btn-sm mg-1",attrs:{name:"generate",id:"resetKeys"},on:{click:function(t){return e.deleteItem(e.oneItem)}}},[e._v("Delete")]):e._e(),n("button",{staticClass:"btn btn-primary btn-sm mg-1",attrs:{name:"save",id:"saveitem",disabled:!e.isChanged},on:{click:function(t){return e.saveItem(!1)}}},[e._v("Save")])])]},proxy:!0}],null,!1,1436612058)},[n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",label:"App Name",placeholder:"My API Key 1 or Slack Connector",textLimit:60,required:"",rules:"required|min:4|max:512"},model:{value:e.oneItem.name,callback:function(t){e.$set(e.oneItem,"name",t)},expression:"oneItem.name"}}),n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",readonly:e.oneItem.id&&e.oneItem.code,label:"Queue Code",placeholder:"my_api_connector",textLimit:60,required:"",rules:"required|min:4|max:512"},model:{value:e.oneItem.code,callback:function(t){e.$set(e.oneItem,"code",t)},expression:"oneItem.code"}}),n("BaseVSelect",{staticClass:"mb-0",attrs:{size:"sm",name:"App Type",clearable:!1,options:["WEBHOOK","AGENT","BOT","MITEL"],placeholder:"Select App Type"},model:{value:e.oneItem.appType,callback:function(t){e.$set(e.oneItem,"appType",t)},expression:"oneItem.appType"}}),"WEBHOOK"==e.oneItem.appType?n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",label:"Webhook Url",placeholder:"http://yourerver.com/callback_path",rules:"required|URL"},model:{value:e.oneItem.webhook,callback:function(t){e.$set(e.oneItem,"webhook",t)},expression:"oneItem.webhook"}}):e._e(),"MITEL"==e.oneItem.appType?n("span",[n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",label:"Mitel End Point",placeholder:"http://yourerver.com/callback_path",rules:"required|URL"},model:{value:e.oneItem.props.end_point,callback:function(t){e.$set(e.oneItem.props,"end_point",t)},expression:"oneItem.props.end_point"}}),n("ButtonRadioGroup",{attrs:{size:"sm",name:"Grant Type",options:["client_credentials","password"]},model:{value:e.oneItem.props.grant_type,callback:function(t){e.$set(e.oneItem.props,"grant_type",t)},expression:"oneItem.props.grant_type"}}),n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",label:"Client Id",placeholder:"ProfessionalServices",rules:"required"},model:{value:e.oneItem.props.client_id,callback:function(t){e.$set(e.oneItem.props,"client_id",t)},expression:"oneItem.props.client_id"}}),n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",label:"Client Secret",placeholder:"B5B7194D-8C47-4E04-912D-39A003AE052C",rules:"required"},model:{value:e.oneItem.secret.client_secret,callback:function(t){e.$set(e.oneItem.secret,"client_secret",t)},expression:"oneItem.secret.client_secret"}}),n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",label:"Mitel Queue",placeholder:"6106ee72-81a1-49a7-9e10-df591d5194f3",rules:"required"},model:{value:e.oneItem.props.queue,callback:function(t){e.$set(e.oneItem.props,"queue",t)},expression:"oneItem.props.queue"}}),n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",label:"To",placeholder:"OM Queue"},model:{value:e.oneItem.props.to,callback:function(t){e.$set(e.oneItem.props,"to",t)},expression:"oneItem.props.to"}}),n("base-input",{staticClass:"mb-0",attrs:{size:"sm",autocomplete:"off",label:"Default From",placeholder:"Mehery Contact"},model:{value:e.oneItem.props.from,callback:function(t){e.$set(e.oneItem.props,"from",t)},expression:"oneItem.props.from"}})],1):e._e()],1):e._e()],1),e.lastItem?n("b-modal",{attrs:{id:e.modelName+"_VIEW",title:"Details : "+e.lastItem.name,size:"md"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.cancel;return[n("a",{staticClass:"btn btn-outline-greyer btn-sm mg-1 float-start ml-0 mr-auto",attrs:{id:"resetKeys",href:e.$global.MyConst.config.PROP_SERVICE_DOCS_API_LINK,target:"_blank",name:"generate"}},[e._v("View Docs")]),n("button",{staticClass:"btn btn-primary btn-sm mg-1",attrs:{name:"save",id:"saveitem"},on:{click:function(e){return a()}}},[e._v("OK")])]}}],null,!1,2983865726)},[n("b-input-group",{staticClass:"mt-3",attrs:{size:"sm"}},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[e._v("\n                App Name")])],1),n("b-form-input",{attrs:{readonly:"",value:e.lastItem.name}})],1),n("b-input-group",{staticClass:"mt-3",attrs:{size:"sm"}},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[e._v("\n                API Id")])],1),n("b-form-input",{attrs:{readonly:"",value:e.lastItem.id}}),n("b-input-group-append",[n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.lastItem.id,expression:"lastItem.id",arg:"copy"}],attrs:{variant:"outline-success"}},[e._v("Copy")])],1)],1),n("b-input-group",{staticClass:"mt-3",attrs:{size:"sm"}},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[e._v("\n                API Key")])],1),n("b-form-input",{attrs:{readonly:"",value:e.lastItem.key||"***********"}}),n("b-input-group-append",[e.lastItem.key?n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.lastItem.key,expression:"lastItem.key",arg:"copy"}],attrs:{variant:"outline-success"}},[e._v("Copy")]):n("b-button",{attrs:{variant:"outline-success"},on:{click:function(t){return e.resetItem(e.lastItem)}}},[e._v("Reset Key")])],1)],1),n("b-input-group",{staticClass:"mt-3",attrs:{size:"sm"}},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[e._v("\n                API Endpoint")])],1),n("b-form-input",{attrs:{readonly:"",value:"https://"+e.$global.MyConst.tenant+"."+e.$global.MyConst.config.PROP_SERVICE_DOMAIN+"/xms"}}),n("b-input-group-append",[n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:"https://"+e.$global.MyConst.tenant+"."+e.$global.MyConst.config.PROP_SERVICE_DOMAIN+"/xms",expression:"`https://${$global.MyConst.tenant}.${$global.MyConst.config.PROP_SERVICE_DOMAIN}/xms`",arg:"copy"}],attrs:{variant:"outline-success"}},[e._v("Copy")])],1)],1),e.lastItem.webhook?n("b-input-group",{staticClass:"mt-3",attrs:{size:"sm"}},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[e._v("\n                Webhook URL")])],1),n("b-form-input",{attrs:{readonly:"",value:e.lastItem.webhook}}),n("b-input-group-append",[n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.lastItem.webhook,expression:"lastItem.webhook",arg:"copy"}],attrs:{variant:"outline-success"}},[e._v("Copy")])],1)],1):e._e()],1):e._e()],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"main-card mb-3 card"})])])}],o=(n("96cf"),n("3b8d")),r=(n("a481"),n("7f7f"),n("2f9b")),i=n("d166"),c=n("7f75"),l=n.n(c);n("b3a4");function u(e){var t=e||{};return{id:(null===t||void 0===t?void 0:t.id)||null,name:(null===t||void 0===t?void 0:t.name)||"",code:(null===t||void 0===t?void 0:t.code)||"",appType:(null===t||void 0===t?void 0:t.appType)||"WEBHOOK",webhook:(null===t||void 0===t?void 0:t.webhook)||null,key:(null===t||void 0===t?void 0:t.key)||null,props:(null===t||void 0===t?void 0:t.props)||{},secret:(null===t||void 0===t?void 0:t.secret)||{}}}var p={components:{MasterView:r["default"],VSwatches:l.a},data:function(){return{MyFlags:i["c"],MyDict:i["b"],MyConst:i["a"],actions:[{label:"Create App",icon:"fa fa-plus",name:"ADD_ITEM",action:"ADD_ITEM"}],table:{fields:[{key:"name",label:"Name"},{key:"id",label:"Id"},{key:"code",label:"Queue"},{key:"appType",label:"Type"},{key:"actions",label:"Actions"},{key:"changelog",label:"Changelog"}],items:[],perPage:25,currentPage:1,rows:0},oneItem:u(),lastItem:{},modelName:"MODAL_ADD_ITEM"}},computed:{items:function(e){return this.$store.getters.StateAgents},teams:function(e){return this.$store.getters.StateTeams},isChanged:function(e){return this.oldHash!==JSON.stringify(this.oneItem)}},watch:{"oneItem.name":function(e,t){if(!this.oneItem.id){var n=(t||"").toLowerCase().replace(/[^A-Za-z0-9_]+/g,"_");this.oneItem.code&&this.oneItem.code!=n||(this.oneItem.code=e.toLowerCase().replace(/[^A-Za-z0-9_]+/g,"_"))}},"oneItem.code":function(e,t){var n;this.oneItem.code=null===(n=this.oneItem)||void 0===n?void 0:n.code.toLowerCase().replace(/[^A-Za-z0-9_]+/g,"_")}},created:function(e){this.loadItems()},methods:{loadItems:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.get("api/config/clientapikey");case 2:t=e.sent,this.table.items=t.results;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),saveItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("saveItem",t),e.next=3,this.$service.post("api/config/clientapikey",{id:this.oneItem.id,name:this.oneItem.name,code:this.oneItem.code,key:1==t?"":"**********",appType:this.oneItem.appType,webhook:this.oneItem.webhook,props:this.oneItem.props,secret:this.oneItem.secret});case 3:n=e.sent,this.lastItem=n.data,this.oneItem=u(),this.onAction({name:"CANCEL"}),this.loadItems(),this.$bvModal.show(this.modelName+"_VIEW");case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),showItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.lastItem=t,this.$bvModal.show(this.modelName+"_VIEW");case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),resetItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.oneItem=t,this.saveItem(!0);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.oneItem=u(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deleteItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.delete("api/config/clientapikey/",t);case 2:this.loadItems(),this.cancelItem();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in this.oneItem=u(t),console.log("this.oneItem",this.oneItem),t)this.oneItem[n]=JSON.parse(JSON.stringify(t[n]))||this.oneItem[n];this.onAction({name:"EDIT_ITEM"});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}}}},d=p,h=(n("4701"),n("2877")),f=Object(h["a"])(d,a,s,!1,null,null,null);t["default"]=f.exports},4701:function(e,t,n){"use strict";n("b9f3")},"7f75":function(e,t,n){(function(t,n){e.exports=n()})("undefined"!==typeof self&&self,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({"0ca3":function(e,t,n){"use strict";var a=n("c6aa"),s=n.n(a);s.a},7937:function(e,t,n){},"7fca":function(e,t,n){"use strict";var a=n("c10a"),s=n.n(a);s.a},8875:function(e,t,n){var a,s,o;(function(n,r){s=[],a=r,o="function"===typeof a?a.apply(t,s):a,void 0===o||(e.exports=o)})("undefined"!==typeof self&&self,(function(){function e(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(p){var e,t,n,a=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,s=/@([^@]*):(\d+):(\d+)\s*$/gi,o=a.exec(p.stack)||s.exec(p.stack),r=o&&o[1]||!1,i=o&&o[2]||!1,c=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");r===c&&(e=document.documentElement.outerHTML,t=new RegExp("(?:[^\\n]+?\\n){0,"+(i-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=e.replace(t,"$1").trim());for(var u=0;u<l.length;u++){if("interactive"===l[u].readyState)return l[u];if(l[u].src===r)return l[u];if(r===c&&l[u].innerHTML&&l[u].innerHTML.trim()===n)return l[u]}return null}}return e}))},9334:function(e,t,n){"use strict";var a=n("7937"),s=n.n(a);s.a},c10a:function(e,t,n){},c6aa:function(e,t,n){},fb15:function(e,t,n){"use strict";if(n.r(t),n.d(t,"DEFAULT_BACKGROUND_COLOR",(function(){return R})),n.d(t,"DEFAULT_BORDER_RADIUS",(function(){return z})),n.d(t,"DEFAULT_ROW_LENGTH",(function(){return T})),n.d(t,"DEFAULT_TRIGGER_CONTAINER_SPACE",(function(){return D})),n.d(t,"DEFAULT_SWATCH_SIZE",(function(){return L})),n.d(t,"DEFAULT_SHOW_BORDER",(function(){return N})),n.d(t,"extractPropertyFromPreset",(function(){return $})),"undefined"!==typeof window){var a=window.document.currentScript,s=n("8875");a=s(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:s});var o=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-swatches",attrs:{tabindex:"-1"},on:{blur:function(t){return e.onBlur(t.relatedTarget)}}},[e.inline?e._e():n("div",{ref:"triggerWrapper",staticClass:"vue-swatches__trigger__wrapper",on:{click:e.togglePopover}},[e._t("trigger",[n("div",{staticClass:"vue-swatches__trigger",class:{"vue-swatches--is-empty":!e.value,"vue-swatches--is-disabled":e.disabled},style:e.triggerStyles},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isNoColor,expression:"isNoColor"}],staticClass:"vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__diagonal"})])])])],2),n("transition",{attrs:{name:"vue-swatches-show-hide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.inline||e.isOpen,expression:"inline || isOpen"}],ref:"containerWrapper",staticClass:"vue-swatches__container",class:{"vue-swatches--inline":e.inline},style:e.containerStyles},[n("div",{staticClass:"vue-swatches__wrapper",style:e.wrapperStyles},[e.isNested?e._l(e.computedSwatches,(function(t,a){return n("div",{key:a,staticClass:"vue-swatches__row"},e._l(t,(function(s,o){return n("v-swatch",{key:o,attrs:{"is-last":a===e.computedSwatches.length-1&&o===t.length,"row-length-setted":null!==e.rowLength||null!==e.presetRowLength,"border-radius":e.computedBorderRadius,disabled:e.getSwatchDisabled(s),inline:e.inline,selected:e.checkEquality(e.getSwatchColor(s),e.value),"swatch-size":e.computedSwatchSize,"spacing-size":e.computedSpacingSize,"show-border":e.getSwatchShowBorder(s),"show-checkbox":e.showCheckbox,"show-labels":e.showLabels,"swatch-color":e.getSwatchColor(s),"swatch-label":e.getSwatchLabel(s),"swatch-alt":e.getSwatchAlt(s),"swatch-style":e.swatchStyle},on:{blur:function(t){return e.onBlur(t)},click:function(t){return e.updateSwatch(s)}},nativeOn:{click:function(t){return e.updateSwatch(s)}}})})),1)})):e._l(e.computedSwatches,(function(t,a){return n("v-swatch",{key:a,attrs:{"is-last":a===e.computedSwatches.length-1,"row-length-setted":null!==e.rowLength||null!==e.presetRowLength,"border-radius":e.computedBorderRadius,disabled:e.getSwatchDisabled(t),inline:e.inline,selected:e.checkEquality(e.getSwatchColor(t),e.value),"swatch-size":e.computedSwatchSize,"spacing-size":e.computedSpacingSize,"show-border":e.getSwatchShowBorder(t),"show-checkbox":e.showCheckbox,"show-labels":e.showLabels,"swatch-color":e.getSwatchColor(t),"swatch-label":e.getSwatchLabel(t),"swatch-alt":e.getSwatchAlt(t),"swatch-style":e.swatchStyle},on:{blur:function(t){return e.onBlur(t)},click:function(n){return e.updateSwatch(t)}},nativeOn:{click:function(n){return e.updateSwatch(t)}}})}))],2),e.showFallback?n("div",{staticClass:"vue-swatches__fallback__wrapper",style:e.computedFallbackWrapperStyles},[n("span",{staticClass:"vue-swatches__fallback__input--wrapper"},[n("input",{ref:"fallbackInput",staticClass:"vue-swatches__fallback__input",class:e.fallbackInputClass,attrs:{type:e.fallbackInputType},domProps:{value:e.internalValue},on:{input:function(t){return e.updateSwatch(t.target.value,{fromFallbackInput:!0})}}})]),e.showFallbackOk?n("button",{staticClass:"vue-swatches__fallback__button",class:e.fallbackOkClass,on:{click:function(t){return t.preventDefault(),e.onFallbackButtonClick(t)}}},[e._v(" "+e._s(e.fallbackOkText)+" ")]):e._e()]):e._e()])])],1)},i=[],c={colors:["#1FBC9C","#1CA085","#2ECC70","#27AF60","#3398DB","#2980B9","#A463BF","#8E43AD","#3D556E","#222F3D","#F2C511","#F39C19","#E84B3C","#C0382B","#DDE6E8","#BDC3C8"],rowLength:4},l={colors:["#CC0001","#E36101","#FFCC00","#009900","#0066CB","#000000","#FFFFFF"],showBorder:!0},u={colors:[["#000000","#434343","#666666","#999999","#b7b7b7","#cccccc","#d9d9d9","#efefef","#f3f3f3","#ffffff"],["#980000","#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#4a86e8","#0000ff","#9900ff","#ff00ff"],["#e6b8af","#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#c9daf8","#cfe2f3","#d9d2e9","#ead1dc"],["#dd7e6b","#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#a4c2f4","#9fc5e8","#b4a7d6","#d5a6bd"],["#cc4125","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6d9eeb","#6fa8dc","#8e7cc3","#c27ba0"],["#a61c00","#cc0000","#e69138","#f1c232","#6aa84f","#45818e","#3c78d8","#3d85c6","#674ea7","#a64d79"],["#85200c","#990000","#b45f06","#bf9000","#38761d","#134f5c","#1155cc","#0b5394","#351c75","#741b47"],["#5b0f00","#660000","#783f04","#7f6000","#274e13","#0c343d","#1c4587","#073763","#20124d","#4c1130"]],borderRadius:"0",rowLength:10,swatchSize:24,spacingSize:0},p=function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"vue-swatches__swatch",class:{"vue-swatches__swatch--border":t.showBorder,"vue-swatches__swatch--selected":t.selected,"vue-swatches__swatch--is-disabled":t.disabled},style:t.swatchStyles,attrs:{"aria-label":t.swatchAlt,role:"button",tabindex:"0"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("click",t.swatchColor)},blur:function(t){return e.$emit("blur",t.relatedTarget)}}},[""===t.swatchColor?a("div",{staticClass:"vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"},[a("div",{staticClass:"vue-swatches__diagonal"})]):t._e(),a("v-check",{directives:[{name:"show",rawName:"v-show",value:t.showCheckbox&&t.selected,expression:"showCheckbox && selected"}]}),t.showLabels?a("div",{staticClass:"vue-swatches__swatch__label",style:t.labelStyles},[t._v(" "+t._s(t.swatchLabel)+" ")]):t._e()],1)},d=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-swatches__check__wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__check__circle vue-swatches--has-children-centered"},[n("svg",{staticClass:"check",attrs:{version:"1.1",role:"presentation",width:"12",height:"12",viewBox:"0 0 1792 1792"}},[n("path",{staticClass:"vue-swatches__check__path",attrs:{d:"M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"}})])])])},f=[],m={name:"v-check",data:function(){return{}}},b=m;function w(e,t,n,a,s,o,r,i){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=c):s&&(c=i?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:l}}n("7fca");var g=w(b,h,f,!1,null,null,null),v=g.exports;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C={name:"v-swatch",components:{VCheck:v},props:{borderRadius:{type:String},isLast:{type:Boolean,default:!1},rowLengthSetted:{type:Boolean,default:!1},disabled:{type:Boolean},inline:{type:Boolean},selected:{type:Boolean,default:!1},showCheckbox:{type:Boolean},showBorder:{type:Boolean},showLabels:{type:Boolean},spacingSize:{type:Number},swatchColor:{type:String,default:""},swatchLabel:{type:String},swatchAlt:{type:String},swatchSize:{type:Number},swatchStyle:{type:Object}},data:function(){return{}},computed:{computedLabelStyle:function(){var e=8+3*Math.floor(this.spacingSize/5);return{bottom:"-".concat(e,"px")}},computedSwatchStyle:function(){var e={width:"".concat(this.swatchSize,"px"),height:"".concat(this.swatchSize,"px"),borderRadius:this.borderRadius,backgroundColor:""!==this.swatchColor?this.swatchColor:"#FFFFFF",cursor:this.cursorStyle};return this.inline&&this.isLast||(e.marginRight="".concat(this.spacingSize,"px")),this.inline&&!this.rowLengthSetted?e:S({},e,{marginBottom:"".concat(this.spacingSize,"px")})},cursorStyle:function(){return this.disabled?"not-allowed":"pointer"},labelStyles:function(){return[this.computedLabelStyle]},swatchStyles:function(){return[this.computedSwatchStyle,this.swatchStyle]}}},k=C,I=(n("0ca3"),w(k,p,d,!1,null,null,null)),O=I.exports;function x(e){return x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R="#ffffff",z="10px",T=4,D=5,L=42,N=!1,$=function(e,t,n){return"string"!==typeof e?null:"text-basic"===e?void 0===l[t]?null:l[t]:"text-advanced"===e?void 0===u[t]?null:u[t]:"basic"===e||n?void 0===c[t]?null:c[t]:null},P={name:"v-swatches",components:{VSwatch:O},props:{backgroundColor:{type:String,default:R},closeOnSelect:{type:Boolean,default:!0},swatches:{type:[Array,String],default:function(){return"basic"}},disabled:{type:Boolean,default:!1},fallbackInputClass:{type:[Array,Object,String],default:null},fallbackInputType:{type:String,default:function(){return"text"},validator:function(e){return-1!==["text","color"].indexOf(e)}},fallbackOkClass:{type:[Array,Object,String],default:null},fallbackOkText:{type:String,default:"Ok"},inline:{type:Boolean,default:!1},shapes:{type:String,default:"squares"},popoverX:{type:String,default:"right"},popoverY:{type:String,default:"bottom"},rowLength:{type:[Number,String],default:null},showBorder:{type:Boolean,default:null},showFallback:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!0},showLabels:{type:Boolean,default:!1},spacingSize:{type:Number,default:null},swatchSize:{type:[Number,String],default:null},swatchStyle:{type:[Object,Array],default:function(){}},triggerStyle:{type:[Object,Array],default:function(){}},wrapperStyle:{type:[Object,Array],default:function(){}},value:{type:String,default:null}},data:function(){return{alwaysOnScreenStyle:{},componentMounted:!1,internalValue:this.value,internalIsOpen:!1}},computed:{isNested:function(){return!!(this.computedSwatches&&this.computedSwatches.length&&this.computedSwatches[0]instanceof Array)},isOpen:function(){return!this.inline&&this.internalIsOpen},isNoColor:function(){return this.checkEquality("",this.value)},presetBorderRadius:function(){return $(this.swatches,"borderRadius")},presetRowLength:function(){return $(this.swatches,"rowLength")},presetShowBorder:function(){return $(this.swatches,"showBorder")},presetSwatchSize:function(){return $(this.swatches,"swatchSize")},presetSpacingSize:function(){return $(this.swatches,"spacingSize")},computedSwatches:function(){return this.swatches instanceof Array?this.swatches:"string"===typeof this.swatches?$(this.swatches,"colors",!0):[]},computedBorderRadius:function(){return null!==this.presetBorderRadius?this.presetBorderRadius:this.borderRadius},computedRowLength:function(){return null!==this.rowLength?Number(this.rowLength):null!==this.presetRowLength?this.presetRowLength:this.computedSwatches.length<T&&!this.isNested?this.computedSwatches.length:T},computedSwatchSize:function(){return null!==this.swatchSize?Number(this.swatchSize):null!==this.presetSwatchSize?this.presetSwatchSize:L},computedSpacingSize:function(){return null!==this.spacingSize?this.spacingSize:null!==this.presetSpacingSize?this.presetSpacingSize:Math.round(.25*this.computedSwatchSize)},computedShowBorder:function(){return null!==this.showBorder?this.showBorder:null!==this.presetShowBorder?this.presetShowBorder:N},showFallbackOk:function(){return!this.inline},borderRadius:function(){return"squares"===this.shapes?"".concat(Math.round(.25*this.computedSwatchSize),"px"):"circles"===this.shapes?"50%":""},wrapperWidth:function(){return this.computedRowLength*(this.computedSwatchSize+this.computedSpacingSize)},computedtriggerStyle:function(){return{width:"42px",height:"42px",backgroundColor:this.value?this.value:"#ffffff",borderRadius:"circles"===this.shapes?"50%":z}},triggerStyles:function(){return[this.computedtriggerStyle,this.triggerStyle]},containerStyles:function(){var e=[{backgroundColor:this.backgroundColor},this.alwaysOnScreenStyle];return this.inline?e:[].concat(e,[{padding:"5px",marginBottom:"5px"}])},computedWrapperStyle:function(){return this.inline?{}:{paddingTop:"".concat(this.computedSpacingSize,"px"),paddingLeft:"".concat(this.computedSpacingSize,"px"),width:"".concat(this.wrapperWidth,"px")}},wrapperStyles:function(){return[this.computedWrapperStyle,this.wrapperStyle]},computedFallbackWrapperStyle:function(){var e={marginLeft:"".concat(this.computedSpacingSize,"px"),paddingBottom:"".concat(this.computedSpacingSize,"px")};return this.inline?e:B({},e,{width:"".concat(this.wrapperWidth-this.computedSpacingSize,"px")})},computedFallbackWrapperStyles:function(){return[this.computedFallbackWrapperStyle]}},watch:{value:function(e){this.internalValue=e}},mounted:function(){this.componentMounted=!0},methods:{checkEquality:function(e,t){return!(!e&&""!==e||!t&&""!==t)&&e.toUpperCase()===t.toUpperCase()},hidePopover:function(){this.internalIsOpen=!1,this.$el.blur(),this.$emit("close",this.internalValue)},getAlwaysOnScreenStyle:function(){var e={},t=this.$refs.triggerWrapper,n=this.$refs.containerWrapper;if(!this.componentMounted||this.inline||!t||!window||!document)return e;var a=t.getBoundingClientRect(),s=5,o=(document.documentElement.clientWidth||window.innerWidth)-5,r=5,i=(document.documentElement.clientHeight||window.innerHeight)-5;n.style.visibility="hidden",n.style.display="block";var c=n.getBoundingClientRect();return n.style.display="none",n.style.visibility="visible","top"===this.popoverY?a.top-c.height<r?(e.top="".concat(a.height+D,"px"),e.bottom="auto"):(e.bottom="".concat(a.height+D,"px"),e.top="auto"):"bottom"===this.popoverY&&(a.bottom+c.height>i?(e.bottom="".concat(a.height+D,"px"),e.top="auto"):(e.top="".concat(a.height+D,"px"),e.bottom="auto")),"left"===this.popoverX?a.right-c.width<s?(e.left=0,e.right="auto"):(e.right=0,e.left="auto"):"right"===this.popoverX&&(a.left+c.width>o?(e.right=0,e.left="auto"):(e.left=0,e.right="auto")),e},getSwatchShowBorder:function(e){return"string"===typeof e?this.computedShowBorder:"object"===x(e)?void 0!==e.showBorder?e.showBorder:this.computedShowBorder:void 0},getSwatchColor:function(e){return"string"===typeof e?e:"object"===x(e)?e.color:void 0},getSwatchDisabled:function(e){return"string"===typeof e?this.disabled:"object"===x(e)?void 0!==e.disabled?e.disabled:this.disabled:void 0},getSwatchLabel:function(e){return"string"===typeof e?e:"object"===x(e)?e.label||e.color:void 0},getSwatchAlt:function(e){return"string"===typeof e?e:"object"===x(e)?e.alt||this.getSwatchLabel(e):void 0},onBlur:function(e){this.isOpen&&(null!==e&&this.$el.contains(e)||(this.internalIsOpen=!1,this.$emit("close",this.internalValue)))},onFallbackButtonClick:function(){this.hidePopover()},showPopover:function(){this.isOpen||this.inline||this.disabled||(this.alwaysOnScreenStyle=this.getAlwaysOnScreenStyle(),this.internalIsOpen=!0,this.$el.focus(),this.$emit("open"))},togglePopover:function(){this.isOpen?this.hidePopover():this.showPopover()},updateSwatch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fromFallbackInput;if(!this.getSwatchDisabled(e)){var a=this.getSwatchColor(e);this.internalValue=a,this.$emit("input",a),!this.closeOnSelect||this.inline||n||this.hidePopover()}}}},j=P,M=(n("9334"),w(j,r,i,!1,null,null,null)),F=M.exports;t["default"]=F}})["default"]}))},b3a4:function(e,t,n){},b9f3:function(e,t,n){}}]);