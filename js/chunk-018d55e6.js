(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-018d55e6"],{"6d14":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("master-view",{attrs:{header:{heading:"Channels",subheading:"Plug-In Social Connectors",icon:"icon-gradient bg-happy-itmeo fa fa-plug"},table:e.table,actions:[{name:"add_channel",label:"Add Channel"}]},on:{action:e.onAction},scopedSlots:e._u([{key:"action(add_channel)",fn:function(t){var r=t.action;return[n("base-dropdown",{staticClass:"nav-item",attrs:{"menu-on-right":"","title-tag":"a"}},[n("a",{staticClass:"btn btn-primary",attrs:{slot:"title-container",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},slot:"title-container"},[e._v("\n                    "+e._s(r.label)+"\n                ")]),n("a",{staticClass:"dropdown-item",on:{click:function(t){return e.addItem("wa360")}}},[e._v("WhatsApp")]),n("a",{staticClass:"dropdown-item",on:{click:function(t){return e.addItem("tg")}}},[e._v("Telegram")]),n("a",{staticClass:"dropdown-item",on:{click:function(t){return e.addItem("fb")}}},[e._v("Facebook")]),n("a",{staticClass:"dropdown-item",on:{click:function(t){return e.addItem("tw")}}},[e._v("Twitter")]),n("a",{staticClass:"dropdown-item",on:{click:function(t){return e.addItem("ig")}}},[e._v("Instagram")]),n("a",{staticClass:"dropdown-item",on:{click:function(t){return e.addItem("web")}}},[e._v("WebChat")])])]}},{key:"cell(details)",fn:function(t){return[n("i",{class:[e.$global.MyDict.socialPrefix(t.item.contactType,"fa")]}),e._v("\n         "+e._s(t.item.lane)+"\n      ")]}},{key:"cell(status)",fn:function(t){return[n("my-status",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.disabled?"Disconnected":"Connected",expression:"!row.item.disabled ? 'Connected' : 'Disconnected'"}],attrs:{value:!t.item.disabled,icon:"fa fa-wave-square"}}),t.item.sandbox?n("my-status",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Sandbox",expression:"'Sandbox'"}],staticClass:"ml-1",attrs:{value:t.item.sandbox,icon:"fa fa-box-open"}}):e._e(),t.item.shared?n("my-status",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Default Page",expression:"'Default Page'"}],staticClass:"ml-1",attrs:{value:t.item.shared,icon:"far fa-address-card"}}):e._e()]}},{key:"cell(actions)",fn:function(t){return[n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],attrs:{size:"sm",disabled:t.item.readOnly,variant:"outline-primary"},on:{click:function(n){return e.editItem(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-edit"})]),e._v(" \n        "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.viewItem(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-eye"})]),e._v(" \n        "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.disabled?"Connect":"Disconnect",expression:"row.item.disabled ? 'Connect' : 'Disconnect'"}],attrs:{size:"sm",disabled:t.item.readOnly,variant:"outline-primary"},on:{click:function(n){return e.disableItem(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-plug",class:{"fa-x":t.item.disabled}})]),e._v(" \n        "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Delete",expression:"'Delete'"}],attrs:{size:"sm",disabled:t.item.readOnly,variant:"outline-primary"},on:{click:function(n){return e.deleteItem(t.item,t.index,n.target)}}},[n("i",{staticClass:"fas fa-trash"})])]}},{key:"cell(inboundQueue)",fn:function(t){return[t.item.readOnly?n("MyText",{attrs:{options:"getx:/api/config/inbound_queue",optionKey:"code",optionLabel:"code",value:t.item.inboundQueue}}):n("BaseVSelect",{staticClass:"text-sm float-left mx-1 w-50",attrs:{size:"sm",disabled:t.item.readOnly,readonly:t.item.readOnly,options:"getx:/api/config/inbound_queue",optionKey:"code",optionLabel:"code"},on:{change:function(n){return e.inboundQueueUpdate(t.item)}},model:{value:t.item.inboundQueue,callback:function(n){e.$set(t.item,"inboundQueue",n)},expression:"row.item.inboundQueue"}}),!t.item.inboundQueue&&e.$global.MyConst.config.SETUP.POSTMAN_CHAT_INBOUND_QUEUE?n("span",{staticClass:"text-sm"},[e._v("\n             Defaults to : "),n("MyText",{attrs:{options:"getx:/api/config/inbound_queue",optionKey:"code",optionLabel:"code",value:e.$global.MyConst.config.SETUP.POSTMAN_CHAT_INBOUND_QUEUE}})],1):e._e()]}}])}),e.oneItem?n("b-modal",{attrs:{id:e.modelName+"_VIEW",title:"View Details ",size:"md"},on:{hidden:e.cancelItem},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var r=t.ok;return[n("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return r()}}},[e._v("OK")])]}}],null,!1,3621299102)},[n("base-input",{attrs:{size:"sm",readonly:"",prelabel:"",copy:"",label:"Channel Id",value:e.oneItemView.channelId}}),n("base-input",{attrs:{size:"sm",readonly:"",prelabel:"",copy:"",link:"",label:"Click2Chat",value:e.$global.MyDict.c2cUrl(e.oneItemView)}}),"web"==e.oneItemView.channelType?n("base-text-area",{attrs:{size:"sm",rows:12,layout:"flushed",readonly:"",copy:"",label:"Script",value:e.createWebScript(e.oneItemView.webhookUrl,e.oneItemView.callbackPath)},scopedSlots:e._u([{key:"infoBlock",fn:function(){return[e._v("\n                  To customize widget "),n("a",{attrs:{target:"_blank",href:e.$global.MyConst.config.PROP_SERVICE_DOCS_LINK+"/guide/channel-connect/webchat/"}},[e._v("\n                    read documentation")])]},proxy:!0}],null,!1,144558885)}):e.oneItemView.webhookManual?n("base-input",{attrs:{size:"sm",readonly:"",prelabel:"",copy:"",label:"Webhook URL",value:e.oneItemView.webhookUrl+"/"+e.oneItemView.callbackPath}}):e._e()],1):e._e(),n("ValidationObserver",{ref:"form",staticClass:"modal-form",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[e.oneItem?n("b-modal",{attrs:{id:e.modelName,title:"Add/Edit Details ",size:"md","header-class":"py-2"},on:{hidden:e.cancelItem},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("button",{staticClass:"btn btn-primary btn-sm",attrs:{name:"password",id:"examplePassword",disabled:!e.isChanged||r},on:{click:e.saveItem}},[e._v("Save")])]},proxy:!0}],null,!0)},[n("x-simple-form",{attrs:{size:"sm",inputs:e.modalInputs,isnew:!e.oneItem.id},on:{change:e.onConfigChange}})],1):e._e()]}}])})],1)},a=[],o=(n("28a5"),n("7f7f"),n("96cf"),n("3b8d")),i=n("2f9b"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"x-form"},e._l(e.inputs,(function(t){return n("span",{key:t.key},[t.meta.hidden?e._e():n("span",["OPTIONS"==t.meta.inputType&&(t.meta.optionsSource||t.meta.options.length>5)?n("BaseVSelect",{attrs:{size:e.size,clearable:!1,name:t.meta.title||t.meta.key,optionKey:t.meta.optionsKey,optionlabel:t.meta.optionsLabel,options:t.meta.optionsSource||t.meta.options,value:t.meta.defaultValue,readonly:t.meta.readonly||t.meta.createonly&&!e.isnew,placeholder:"Select"},on:{change:function(n){return e.onChange(t.meta,t.config)}},model:{value:t.config.value,callback:function(n){e.$set(t.config,"value",n)},expression:"input.config.value"}}):"OPTIONS"==t.meta.inputType?n("ButtonRadioGroup",{attrs:{name:t.meta.title||t.meta.key,size:"sm",options:t.meta.options,readonly:t.meta.readonly||t.meta.createonly&&!e.isnew},on:{change:function(n){return e.onChange(t.meta,t.config)}},model:{value:t.config.value,callback:function(n){e.$set(t.config,"value",n)},expression:"input.config.value"}}):n("base-input",{staticClass:"mb-0",attrs:{size:e.size,label:t.meta.title||t.meta.key,readonly:t.meta.readonly||t.meta.createonly&&!e.isnew,value:t.meta.defaultValue,required:!t.meta.optional},on:{change:function(n){return e.onChange(t.meta,t.config)}},model:{value:t.config.value,callback:function(n){e.$set(t.config,"value",n)},expression:"input.config.value"}})],1)])})),0)},u=[],c={name:"x-simple-form",components:{},props:{inputs:{type:Array,description:"pass list of input configs",default:function(){return[{}]}},isnew:{type:Boolean,default:!1},size:{}},data:function(){return{empty:function(e){return void 0==e||null===e||""===e}}},mounted:function(e){},methods:{onChange:function(e,t){this.$emit("change",{meta:e,config:t})},getOutput:function(){return inputs}}},l=c,p=n("2877"),f=Object(p["a"])(l,s,u,!1,null,null,null),h=f.exports,d=n("d166"),m=n("b351"),b=(n("b3a4"),n("96bd"));function y(e){return{channelType:e,config:{},meta:{}}}var v={components:{MasterView:i["default"],XSimpleForm:h,MyStatus:b["a"]},data:function(){return{MyFlags:d["c"],MyDict:d["b"],MyConst:d["a"],actions:[],table:{fields:[{key:"details",label:"Channel"},{key:"name",label:"Desc"},{key:"status",label:"Status"},{key:"actions",label:"Action"},{key:"inboundQueue",label:"Default Inbound App Queue"}],items:[],perPage:25,size:"sm",currentPage:1,rows:0,api:"api/options/channels"},oneItem:y(),oneItemView:y(),modelName:"MODAL_CHANNELS",modalInputs:[],oldHash:null}},computed:{isChanged:function(){return!0}},created:function(e){},methods:{loadItems:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.get("api/options/channels");case 2:t=e.sent,this.table.items=t.results;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),saveItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.post("api/config/channel/"+this.oneItem.channelType,this.oneItem);case 2:return n=e.sent,e.next=5,this.onAction({name:"CANCEL"});case 5:t||this.viewItem(n.results[0]),this.loadItems();case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.oneItem=y(),console.log("Cannnnnn"),this.onAction({name:"CANCEL"});case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in this.oneItem=y(),t)this.oneItem[n]=JSON.parse(JSON.stringify(t[n]));this.onAction({name:"EDIT_ITEM"});case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),viewItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.get("api/config/channel/"+t.channelId+"/");case 2:n=e.sent,this.oneItemView=n.results[0]||{channelId:t.channelId},this.$bvModal.show(this.modelName+"_VIEW");case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),disableItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.get("api/config/channel/"+t.channelId+"/"+(t.disabled?"enable":"disable"),{});case 2:this.loadItems();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),inboundQueueUpdate:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in this.oneItem=y(),t)this.oneItem[n]=JSON.parse(JSON.stringify(t[n]));this.saveItem(!0);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deleteItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.get("api/config/channel/"+t.channelId+"/remove",{});case 2:this.loadItems();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.oneItem=y(t),this.onAction({name:"ADD_ITEM"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onAction:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t.name,e.next="ADD_ITEM"===e.t0?3:"EDIT_ITEM"===e.t0?6:"VIEW_ITEM"===e.t0?9:"CANCEL"===e.t0?11:13;break;case 3:return this.oldHash=JSON.stringify(this.oneItem),this.openForm(this.oneItem),e.abrupt("break",14);case 6:return this.oldHash=JSON.stringify(this.oneItem),this.openForm(this.oneItem),e.abrupt("break",14);case 9:return this.openForm(this.oneItem),e.abrupt("break",14);case 11:return this.$bvModal.hide(this.modelName),e.abrupt("break",14);case 13:console.log("NoMapping",t);case 14:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),openForm:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.get("api/meta/channel_configs/"+t.channelType);case 2:n=e.sent,console.log("oldHash",this.oldHash),this.modalInputs=n.results.map((function(e){var n=e.path||e.key;return console.log("meta.key",n,Object(m["a"])({path:"$."+n,json:t})),{meta:e,config:{key:e.key,path:e.path,value:Object(m["a"])({path:"$."+n,json:t})[0]||e.defaultValue||""}}})),this.$bvModal.show(this.modelName);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onConfigChange:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.meta,r=t.config,a=n.path||n.key,Object(m["a"])({path:"$."+a,json:this.oneItem,resultType:"all",value:r.value}),this.oneItem.__ob__.dep.notify();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),createWebScript:function(e,t){var n=(t||"").split("/"),r='       \x3c!-- Add this snippt as last tag in body --\x3e\n<script src=\'https://cdn.jsdelivr.net/gh/cherrybase/cherrybase.github.io@gh-pages/plugins/customer.js?theme=bubble\'>\n{\n  "domain" : "'.concat(this.$global.MyConst.tenant,".").concat(this.$global.MyConst.config.PROP_SERVICE_DOMAIN,'",\n  "channelId" : "').concat(n[6],'",\n  "channelKey" : "').concat(n[7],'",\n  "config" : {}\n}\n</')+"script>";return r}}},g=v,w=Object(p["a"])(g,r,a,!1,null,null,null);t["default"]=w.exports},"96bd":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{class:[e.icon,e.colorClass]}),e._t("default")],2)},a=[],o={approved:"s",rejected:"d",submitted:"w",true:"s",false:"d"},i={props:{value:{},icon:{default:"fa fa-circle"},noColor:{type:Boolean,default:!1}},computed:{colorClass:function(){if(this.noColor)return"";var e=o[this.value];return"s"==e?"text-success":"d"==e?"text-danger":"w"==e?"text-warning":void 0}}},s=i,u=n("2877"),c=Object(u["a"])(s,r,a,!1,null,null,null);t["a"]=c.exports},b351:function(e,t,n){"use strict";n("28a5");function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return c=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=Function.bind.apply(e,r),o=new a;return n&&s(o,n.prototype),o},c.apply(null,arguments)}function l(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function p(e){var t="function"===typeof Map?new Map:void 0;return p=function(e){if(null===e||!l(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return c(e,arguments,i(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,e)},p(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?f(e):t}function d(e){var t=u();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}function m(e){return b(e)||y(e)||v(e)||w()}function b(e){if(Array.isArray(e))return g(e)}function y(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function v(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}var F=Object.prototype.hasOwnProperty;function x(e,t){return e=e.slice(),e.push(t),e}function k(e,t){return t=t.slice(),t.unshift(e),t}var I=function(e){o(n,e);var t=d(n);function n(e){var r;return a(this,n),r=t.call(this,'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'),r.avoidNew=!0,r.value=e,r.name="NewError",r}return n}(p(Error));function C(e,t,n,a,o){if(!(this instanceof C))try{return new C(e,t,n,a,o)}catch(c){if(!c.avoidNew)throw c;return c.value}"string"===typeof e&&(o=a,a=n,n=t,t=e,e=null);var i=e&&"object"===r(e);if(e=e||{},this.json=e.json||n,this.path=e.path||t,this.resultType=e.resultType||"value",this.flatten=e.flatten||!1,this.wrap=!F.call(e,"wrap")||e.wrap,this.sandbox=e.sandbox||{},this.preventEval=e.preventEval||!1,this.parent=e.parent||null,this.parentProperty=e.parentProperty||null,this.callback=e.callback||a||null,this.otherTypeCallback=e.otherTypeCallback||o||function(){throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.")},!1!==e.autostart){var s={path:i?e.path:t};i?"json"in e&&(s.json=e.json):s.json=n;var u=this.evaluate(s);if(!u||"object"!==r(u))throw new I(u);return u}}C.prototype.evaluate=function(e,t,n,a){var o=this,i=this.parent,s=this.parentProperty,u=this.flatten,c=this.wrap;if(this.currResultType=this.resultType,this.currPreventEval=this.preventEval,this.currSandbox=this.sandbox,n=n||this.callback,this.currOtherTypeCallback=a||this.otherTypeCallback,t=t||this.json,e=e||this.path,e&&"object"===r(e)&&!Array.isArray(e)){if(!e.path&&""!==e.path)throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');if(!F.call(e,"json"))throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');var l=e;t=l.json,u=F.call(e,"flatten")?e.flatten:u,this.currResultType=F.call(e,"resultType")?e.resultType:this.currResultType,this.currSandbox=F.call(e,"sandbox")?e.sandbox:this.currSandbox,c=F.call(e,"wrap")?e.wrap:c,this.currPreventEval=F.call(e,"preventEval")?e.preventEval:this.currPreventEval,n=F.call(e,"callback")?e.callback:n,this.currOtherTypeCallback=F.call(e,"otherTypeCallback")?e.otherTypeCallback:this.currOtherTypeCallback,i=F.call(e,"parent")?e.parent:i,s=F.call(e,"parentProperty")?e.parentProperty:s,e=e.path}if(i=i||null,s=s||null,Array.isArray(e)&&(e=C.toPathString(e)),(e||""===e)&&t){var p=C.toPathArray(e);"$"===p[0]&&p.length>1&&p.shift(),this._hasParentSelector=null;var f=this._trace(p,t,["$"],i,s,n).filter((function(e){return e&&!e.isParentSelector}));return f.length?c||1!==f.length||f[0].hasArrExpr?f.reduce((function(e,t){var n=o._getPreferredOutput(t);return u&&Array.isArray(n)?e=e.concat(n):e.push(n),e}),[]):this._getPreferredOutput(f[0]):c?[]:void 0}},C.prototype._getPreferredOutput=function(e){var t=this.currResultType;switch(t){case"all":var n=Array.isArray(e.path)?e.path:C.toPathArray(e.path);return e.pointer=C.toPointer(n),e.path="string"===typeof e.path?e.path:C.toPathString(e.path),e;case"value":case"parent":case"parentProperty":return e[t];case"path":return C.toPathString(e[t]);case"pointer":return C.toPointer(e.path);default:throw new TypeError("Unknown result type")}},C.prototype._handleCallback=function(e,t,n){if(t){var r=this._getPreferredOutput(e);e.path="string"===typeof e.path?e.path:C.toPathString(e.path),t(r,n,e)}},C.prototype._trace=function(e,t,n,a,o,i,s,u){var c,l=this;if(!e.length)return c={path:n,value:t,parent:a,parentProperty:o,hasArrExpr:s},this._handleCallback(c,i,"value"),c;var p=e[0],f=e.slice(1),h=[];function d(e){Array.isArray(e)?e.forEach((function(e){h.push(e)})):h.push(e)}if(("string"!==typeof p||u)&&t&&F.call(t,p))d(this._trace(f,t[p],x(n,p),t,p,i,s));else if("*"===p)this._walk(p,f,t,n,a,o,i,(function(e,t,n,r,a,o,i,s){d(l._trace(k(e,n),r,a,o,i,s,!0,!0))}));else if(".."===p)d(this._trace(f,t,n,a,o,i,s)),this._walk(p,f,t,n,a,o,i,(function(e,t,n,a,o,i,s,u){"object"===r(a[e])&&d(l._trace(k(t,n),a[e],x(o,e),a,e,u,!0))}));else{if("^"===p)return this._hasParentSelector=!0,{path:n.slice(0,-1),expr:f,isParentSelector:!0};if("~"===p)return c={path:x(n,p),value:o,parent:a,parentProperty:null},this._handleCallback(c,i,"property"),c;if("$"===p)d(this._trace(f,t,n,null,null,i,s));else if(/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(p))d(this._slice(p,f,t,n,a,o,i));else if(0===p.indexOf("?(")){if(this.currPreventEval)throw new Error("Eval [?(expr)] prevented in JSONPath expression.");this._walk(p,f,t,n,a,o,i,(function(e,t,n,r,a,o,i,s){l._eval(t.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/,"$1"),r[e],e,a,o,i)&&d(l._trace(k(e,n),r,a,o,i,s,!0))}))}else if("("===p[0]){if(this.currPreventEval)throw new Error("Eval [(expr)] prevented in JSONPath expression.");d(this._trace(k(this._eval(p,t,n[n.length-1],n.slice(0,-1),a,o),f),t,n,a,o,i,s))}else if("@"===p[0]){var m=!1,b=p.slice(1,-2);switch(b){case"scalar":t&&["object","function"].includes(r(t))||(m=!0);break;case"boolean":case"string":case"undefined":case"function":r(t)===b&&(m=!0);break;case"integer":!Number.isFinite(t)||t%1||(m=!0);break;case"number":Number.isFinite(t)&&(m=!0);break;case"nonFinite":"number"!==typeof t||Number.isFinite(t)||(m=!0);break;case"object":t&&r(t)===b&&(m=!0);break;case"array":Array.isArray(t)&&(m=!0);break;case"other":m=this.currOtherTypeCallback(t,n,a,o);break;case"null":null===t&&(m=!0);break;default:throw new TypeError("Unknown value type "+b)}if(m)return c={path:n,value:t,parent:a,parentProperty:o},this._handleCallback(c,i,"value"),c}else if("`"===p[0]&&t&&F.call(t,p.slice(1))){var y=p.slice(1);d(this._trace(f,t[y],x(n,y),t,y,i,s,!0))}else if(p.includes(",")){var v,g=p.split(","),w=_(g);try{for(w.s();!(v=w.n()).done;){var I=v.value;d(this._trace(k(I,f),t,n,a,o,i,!0))}}catch(P){w.e(P)}finally{w.f()}}else!u&&t&&F.call(t,p)&&d(this._trace(f,t[p],x(n,p),t,p,i,s,!0))}if(this._hasParentSelector)for(var C=0;C<h.length;C++){var S=h[C];if(S&&S.isParentSelector){var D=this._trace(S.expr,t,S.path,a,o,i,s);if(Array.isArray(D)){h[C]=D[0];for(var O=D.length,E=1;E<O;E++)C++,h.splice(C,0,D[E])}else h[C]=D}}return h},C.prototype._walk=function(e,t,n,a,o,i,s,u){if(Array.isArray(n))for(var c=n.length,l=0;l<c;l++)u(l,e,t,n,a,o,i,s);else n&&"object"===r(n)&&Object.keys(n).forEach((function(r){u(r,e,t,n,a,o,i,s)}))},C.prototype._slice=function(e,t,n,r,a,o,i){if(Array.isArray(n)){var s=n.length,u=e.split(":"),c=u[2]&&Number.parseInt(u[2])||1,l=u[0]&&Number.parseInt(u[0])||0,p=u[1]&&Number.parseInt(u[1])||s;l=l<0?Math.max(0,l+s):Math.min(s,l),p=p<0?Math.max(0,p+s):Math.min(s,p);for(var f=[],h=l;h<p;h+=c){var d=this._trace(k(h,t),n,r,a,o,i,!0);d.forEach((function(e){f.push(e)}))}return f}},C.prototype._eval=function(e,t,n,r,a,o){e.includes("@parentProperty")&&(this.currSandbox._$_parentProperty=o,e=e.replace(/@parentProperty/g,"_$_parentProperty")),e.includes("@parent")&&(this.currSandbox._$_parent=a,e=e.replace(/@parent/g,"_$_parent")),e.includes("@property")&&(this.currSandbox._$_property=n,e=e.replace(/@property/g,"_$_property")),e.includes("@path")&&(this.currSandbox._$_path=C.toPathString(r.concat([n])),e=e.replace(/@path/g,"_$_path")),e.includes("@root")&&(this.currSandbox._$_root=this.json,e=e.replace(/@root/g,"_$_root")),/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(e)&&(this.currSandbox._$_v=t,e=e.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g,"_$_v$1"));try{return this.vm.runInNewContext(e,this.currSandbox)}catch(i){throw console.log(i),new Error("jsonPath: "+i.message+": "+e)}},C.cache={},C.toPathString=function(e){for(var t=e,n=t.length,r="$",a=1;a<n;a++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(t[a])||(r+=/^[\*0-9]+$/.test(t[a])?"["+t[a]+"]":"['"+t[a]+"']");return r},C.toPointer=function(e){for(var t=e,n=t.length,r="",a=1;a<n;a++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(t[a])||(r+="/"+t[a].toString().replace(/~/g,"~0").replace(/\//g,"~1"));return r},C.toPathArray=function(e){var t=C.cache;if(t[e])return t[e].concat();var n=[],r=e.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g,";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g,(function(e,t){return"[#"+(n.push(t)-1)+"]"})).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g,(function(e,t){return"['"+t.replace(/\./g,"%@%").replace(/~/g,"%%@@%%")+"']"})).replace(/~/g,";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g,";").replace(/%@%/g,".").replace(/%%@@%%/g,"~").replace(/(?:;)?(\^+)(?:;)?/g,(function(e,t){return";"+t.split("").join(";")+";"})).replace(/;;;|;;/g,";..;").replace(/;$|'?\]|'$/g,""),a=r.split(";").map((function(e){var t=e.match(/#([0-9]+)/);return t&&t[1]?n[t[1]]:e}));return t[e]=a,t[e].concat()};var S=function(e,t,n){for(var r=e.length,a=0;a<r;a++){var o=e[a];n(o)&&t.push(e.splice(a--,1)[0])}};function D(e,t,n){1==t.length?e[t[0]]=n:(e[t[0]]=e[t[0]]||{},D(e[t[0]],t.splice(1),n))}C.prototype.vm={runInNewContext:function(e,t){var n=Object.keys(t),r=[];S(n,r,(function(e){return"function"===typeof t[e]}));var a=n.map((function(e,n){return t[e]})),o=r.reduce((function(e,n){var r=t[n].toString();return/function/.test(r)||(r="function "+r),"var "+n+"="+r+";"+e}),"");e=o+e,/(["'])use strict\1/.test(e)||n.includes("arguments")||(e="var arguments = undefined;"+e),e=e.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/,"");var i=e.lastIndexOf(";"),s=i>-1?e.slice(0,i+1)+" return "+e.slice(i+1):" return "+e;return c(Function,m(n).concat([s])).apply(void 0,m(a))}};t["a"]=function(e){if(void 0!==e.value){var t=e.callback;e.callback=function(n,r,a){return a.parent[a.parentProperty]=e.value,t?t(n,r,a):n}}var n=C(e);if(void 0!==e.value&&0==n.length){var r=e.path.split(".");D(e.json,r.splice(1),e.value)}return n}},b3a4:function(e,t,n){}}]);