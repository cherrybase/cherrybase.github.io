(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-722b641d"],{"2f9b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{ref:"pageTitle",attrs:{heading:t.header.heading,icon:t.header.icon,actions:t.actions,filters:t.filters,subheading:t.header.subheading},on:{action:t.onActionINT},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,Object.assign({},{apply:t.apply},n))]}}})),{key:"subheading",fn:function(){return[t._t("header-subheading",(function(){return[t._v("\n              "+t._s(t.header.subheading)+"      \n          ")]}))]},proxy:!0}],null,!0)}),t.table?n("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":t.table.perPage,"current-page":t.table.currentPage,items:t.table.items,fields:t.table.fields},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)}):t._e(),t.table?n("b-pagination",{attrs:{"total-rows":t.table.rows,"per-page":t.table.perPage,"aria-controls":"agent-session-list"},model:{value:t.table.currentPage,callback:function(e){t.$set(t.table,"currentPage",e)},expression:"table.currentPage"}}):t._e()],1)},a=[],i=(n("7f7f"),n("96cf"),n("3b8d")),o=n("e492"),s=n("d166"),u={components:{PageTitle:o["a"]},props:{header:{type:Object},actions:{type:Array,default:function(){return[]}},filters:{type:Array,default:function(){return[]}},daterange:{type:Object},table:{type:Object},autoApply:{type:Boolean,default:!0},actionShow:{type:Object,default:function(){return{message:"hello"}}}},data:function(){return{MyFlags:s["c"],MyDict:s["b"],MyConst:s["a"],input:{daterange:{hidden:!0,startDate:null,endDate:null}},session:null}},mounted:function(t){this.autoApply&&this.getItems()},methods:{getItems:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in e={},this.actions)console.log("actions",n,this.actions[n]),r=this.actions[n].param||this.actions[n].type,e[r]=this.getInput(r);for(n in this.filters)r=this.filters[n].name||this.filters[n].param||this.filters[n].type,e[r]=this.filters[n].value;if(!this.table||!this.table.api){t.next=11;break}return t.next=6,this.$service.get(this.table.api,e);case 6:a=t.sent,this.table.items=a.results,this.table.rows=this.table.items.length,this.session=a.meta,console.log("sessions",a,this.table);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),apply:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getItems();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onActionINT:function(t){switch(console.log("onAction",t),t.type){case"apply":this.getItems();break;default:this.$emit("action",t)}},getInput:function(t){return this.$refs.pageTitle.getInput(t)}}},c=u,l=n("2877"),p=Object(l["a"])(c,r,a,!1,null,"06517ca6",null);e["a"]=p.exports},b3a4:function(t,e,n){},e923:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("master-view",{attrs:{header:{heading:"Channels",subheading:"Plug-In Social Connectors",icon:"icon-gradient bg-happy-itmeo fa fa-plug"},table:t.table,actions:t.actions},on:{action:t.onAction},scopedSlots:t._u([{key:"cell(details)",fn:function(e){return[n("i",{class:[t.$global.MyDict.socialPrefix(e.item.contactType,"fa")]}),t._v("\n         "+t._s(e.item.lane)+"\n      ")]}},{key:"cell(disabled)",fn:function(e){return[t._v("\n        "+t._s(t._f("display")(e.item.disabled,"true:Yes;false:No"))+"\n      ")]}},{key:"cell(actions)",fn:function(e){return[n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return t.editItem(e.item,e.index,n.target)}}},[n("i",{staticClass:"fas fa-edit"})]),t._v(" \n        "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return t.viewItem(e.item,e.index,n.target)}}},[n("i",{staticClass:"fas fa-eye"})]),t._v(" \n        "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.item.disabled?"Connect":"Disconnect",expression:"row.item.disabled ? 'Connect' : 'Disconnect'"}],staticClass:"fa-stack fa-1x",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return t.deleteItem(e.item,e.index,n.target)}}},[n("i",{staticClass:"fas fa-plug fa-stack-1x"}),e.item.disabled?n("i",{staticClass:"fas fa-slash fa-stack-1x",staticStyle:{color:"Tomato"}}):t._e()])]}}])},[t._v("\n   >\n      ")]),t.oneItem?n("b-modal",{attrs:{id:t.modelName+"_VIEW",title:"View Details ",size:"md"},on:{hidden:t.cancelItem},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.ok;return[n("div",{staticClass:"position-relative form-group"},[n("button",{staticClass:"form-control btn btn-primary",on:{click:function(t){return r()}}},[t._v("OK")])])]}}],null,!1,2708243911)},[n("b-input-group",{staticClass:"mt-3"},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[t._v("\n                    Channel Id")])],1),n("b-form-input",{attrs:{readonly:"",value:t.oneItemView.channelId}}),n("b-input-group-append",[n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.oneItemView.channelId,expression:"oneItemView.channelId",arg:"copy"}],attrs:{variant:"outline-success"}},[t._v("Copy")])],1)],1),n("b-input-group",{staticClass:"mt-3"},[n("b-input-group-prepend",[n("b-button",{staticClass:"text-sm w-120px",attrs:{variant:"outline-dark"}},[t._v("\n                     Webhook URL")])],1),n("b-form-input",{attrs:{readonly:"",value:t.oneItemView.webhookUrl+"/"+t.oneItemView.callbackPath}}),n("b-input-group-append",[n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.oneItemView.webhookUrl+"/"+t.oneItemView.callbackPath,expression:"oneItemView.webhookUrl + '/' + oneItemView.callbackPath",arg:"copy"}],staticClass:"w-20",attrs:{variant:"outline-success"}},[t._v("Copy")])],1)],1)],1):t._e(),t.oneItem?n("b-modal",{attrs:{id:t.modelName,title:"Add/Edit Details ",size:"md"},on:{hidden:t.cancelItem},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"position-relative form-group"},[n("button",{staticClass:"form-control btn btn-primary",attrs:{name:"password",id:"examplePassword",disabled:!t.isChanged},on:{click:t.saveItem}},[t._v("Save")])])]},proxy:!0}],null,!1,2704346586)},[n("x-simple-form",{attrs:{inputs:t.modalInputs},on:{change:t.onConfigChange}})],1):t._e()],1)},a=[],i=(n("7f7f"),n("96cf"),n("3b8d")),o=n("2f9b"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x-form"},t._l(t.inputs,(function(e){return n("span",{key:e.key},[e.meta.hidden?t._e():n("span",["OPTIONS"==e.meta.inputType?n("b-form-group",{attrs:{label:e.meta.title||e.meta.key},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.ariaDescribedby;return[n("b-form-radio-group",{attrs:{id:"btn-radios-2",options:e.meta.options,"html-field":"label","text-field":"value",readonly:e.meta.readonly,"aria-describedby":a,"button-variant":"outline-primary",size:"sm",name:"radio-btn-outline",buttons:""},model:{value:e.config.value,callback:function(n){t.$set(e.config,"value",n)},expression:"input.config.value"}})]}}],null,!0)}):n("b-form-group",{attrs:{label:e.meta.title||e.meta.key}},[n("b-form-input",{attrs:{id:"input-1",readonly:e.meta.readonly,value:e.meta.defaultValue,trim:""},on:{change:function(n){return t.onChange(e.meta,e.config)}},model:{value:e.config.value,callback:function(n){t.$set(e.config,"value",n)},expression:"input.config.value"}})],1)],1)])})),0)},u=[],c={name:"x-simple-form",components:{},props:{inputs:{type:Array,description:"pass list of input configs",default:function(){return[{}]}}},data:function(){return{}},mounted:function(t){},methods:{onChange:function(t,e){this.$emit("change",{meta:t,config:e})},getOutput:function(){return inputs}}},l=c,p=n("2877"),f=Object(p["a"])(l,s,u,!1,null,null,null),h=f.exports,d=n("d166");n("28a5");function m(t){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function g(t,e){return g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},g(t,e)}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _(t,e,n){return _=w()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=Function.bind.apply(t,r),i=new a;return n&&g(i,n.prototype),i},_.apply(null,arguments)}function F(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function k(t){var e="function"===typeof Map?new Map:void 0;return k=function(t){if(null===t||!F(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return _(t,arguments,v(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,t)},k(t)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?x(t):e}function D(t){var e=w();return function(){var n,r=v(t);if(e){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return I(this,n)}}function C(t){return P(t)||S(t)||A(t)||O()}function P(t){if(Array.isArray(t))return E(t)}function S(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function A(t,e){if(t){if("string"===typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=A(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}var $=Object.prototype.hasOwnProperty;function T(t,e){return t=t.slice(),t.push(e),t}function N(t,e){return e=e.slice(),e.unshift(t),e}var R=function(t){y(n,t);var e=D(n);function n(t){var r;return b(this,n),r=e.call(this,'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'),r.avoidNew=!0,r.value=t,r.name="NewError",r}return n}(k(Error));function M(t,e,n,r,a){if(!(this instanceof M))try{return new M(t,e,n,r,a)}catch(u){if(!u.avoidNew)throw u;return u.value}"string"===typeof t&&(a=r,r=n,n=e,e=t,t=null);var i=t&&"object"===m(t);if(t=t||{},this.json=t.json||n,this.path=t.path||e,this.resultType=t.resultType||"value",this.flatten=t.flatten||!1,this.wrap=!$.call(t,"wrap")||t.wrap,this.sandbox=t.sandbox||{},this.preventEval=t.preventEval||!1,this.parent=t.parent||null,this.parentProperty=t.parentProperty||null,this.callback=t.callback||r||null,this.otherTypeCallback=t.otherTypeCallback||a||function(){throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.")},!1!==t.autostart){var o={path:i?t.path:e};i?"json"in t&&(o.json=t.json):o.json=n;var s=this.evaluate(o);if(!s||"object"!==m(s))throw new R(s);return s}}M.prototype.evaluate=function(t,e,n,r){var a=this,i=this.parent,o=this.parentProperty,s=this.flatten,u=this.wrap;if(this.currResultType=this.resultType,this.currPreventEval=this.preventEval,this.currSandbox=this.sandbox,n=n||this.callback,this.currOtherTypeCallback=r||this.otherTypeCallback,e=e||this.json,t=t||this.path,t&&"object"===m(t)&&!Array.isArray(t)){if(!t.path&&""!==t.path)throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');if(!$.call(t,"json"))throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');var c=t;e=c.json,s=$.call(t,"flatten")?t.flatten:s,this.currResultType=$.call(t,"resultType")?t.resultType:this.currResultType,this.currSandbox=$.call(t,"sandbox")?t.sandbox:this.currSandbox,u=$.call(t,"wrap")?t.wrap:u,this.currPreventEval=$.call(t,"preventEval")?t.preventEval:this.currPreventEval,n=$.call(t,"callback")?t.callback:n,this.currOtherTypeCallback=$.call(t,"otherTypeCallback")?t.otherTypeCallback:this.currOtherTypeCallback,i=$.call(t,"parent")?t.parent:i,o=$.call(t,"parentProperty")?t.parentProperty:o,t=t.path}if(i=i||null,o=o||null,Array.isArray(t)&&(t=M.toPathString(t)),(t||""===t)&&e){var l=M.toPathArray(t);"$"===l[0]&&l.length>1&&l.shift(),this._hasParentSelector=null;var p=this._trace(l,e,["$"],i,o,n).filter((function(t){return t&&!t.isParentSelector}));return p.length?u||1!==p.length||p[0].hasArrExpr?p.reduce((function(t,e){var n=a._getPreferredOutput(e);return s&&Array.isArray(n)?t=t.concat(n):t.push(n),t}),[]):this._getPreferredOutput(p[0]):u?[]:void 0}},M.prototype._getPreferredOutput=function(t){var e=this.currResultType;switch(e){case"all":var n=Array.isArray(t.path)?t.path:M.toPathArray(t.path);return t.pointer=M.toPointer(n),t.path="string"===typeof t.path?t.path:M.toPathString(t.path),t;case"value":case"parent":case"parentProperty":return t[e];case"path":return M.toPathString(t[e]);case"pointer":return M.toPointer(t.path);default:throw new TypeError("Unknown result type")}},M.prototype._handleCallback=function(t,e,n){if(e){var r=this._getPreferredOutput(t);t.path="string"===typeof t.path?t.path:M.toPathString(t.path),e(r,n,t)}},M.prototype._trace=function(t,e,n,r,a,i,o,s){var u,c=this;if(!t.length)return u={path:n,value:e,parent:r,parentProperty:a,hasArrExpr:o},this._handleCallback(u,i,"value"),u;var l=t[0],p=t.slice(1),f=[];function h(t){Array.isArray(t)?t.forEach((function(t){f.push(t)})):f.push(t)}if(("string"!==typeof l||s)&&e&&$.call(e,l))h(this._trace(p,e[l],T(n,l),e,l,i,o));else if("*"===l)this._walk(l,p,e,n,r,a,i,(function(t,e,n,r,a,i,o,s){h(c._trace(N(t,n),r,a,i,o,s,!0,!0))}));else if(".."===l)h(this._trace(p,e,n,r,a,i,o)),this._walk(l,p,e,n,r,a,i,(function(t,e,n,r,a,i,o,s){"object"===m(r[t])&&h(c._trace(N(e,n),r[t],T(a,t),r,t,s,!0))}));else{if("^"===l)return this._hasParentSelector=!0,{path:n.slice(0,-1),expr:p,isParentSelector:!0};if("~"===l)return u={path:T(n,l),value:a,parent:r,parentProperty:null},this._handleCallback(u,i,"property"),u;if("$"===l)h(this._trace(p,e,n,null,null,i,o));else if(/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(l))h(this._slice(l,p,e,n,r,a,i));else if(0===l.indexOf("?(")){if(this.currPreventEval)throw new Error("Eval [?(expr)] prevented in JSONPath expression.");this._walk(l,p,e,n,r,a,i,(function(t,e,n,r,a,i,o,s){c._eval(e.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/,"$1"),r[t],t,a,i,o)&&h(c._trace(N(t,n),r,a,i,o,s,!0))}))}else if("("===l[0]){if(this.currPreventEval)throw new Error("Eval [(expr)] prevented in JSONPath expression.");h(this._trace(N(this._eval(l,e,n[n.length-1],n.slice(0,-1),r,a),p),e,n,r,a,i,o))}else if("@"===l[0]){var d=!1,b=l.slice(1,-2);switch(b){case"scalar":e&&["object","function"].includes(m(e))||(d=!0);break;case"boolean":case"string":case"undefined":case"function":m(e)===b&&(d=!0);break;case"integer":!Number.isFinite(e)||e%1||(d=!0);break;case"number":Number.isFinite(e)&&(d=!0);break;case"nonFinite":"number"!==typeof e||Number.isFinite(e)||(d=!0);break;case"object":e&&m(e)===b&&(d=!0);break;case"array":Array.isArray(e)&&(d=!0);break;case"other":d=this.currOtherTypeCallback(e,n,r,a);break;case"null":null===e&&(d=!0);break;default:throw new TypeError("Unknown value type "+b)}if(d)return u={path:n,value:e,parent:r,parentProperty:a},this._handleCallback(u,i,"value"),u}else if("`"===l[0]&&e&&$.call(e,l.slice(1))){var y=l.slice(1);h(this._trace(p,e[y],T(n,y),e,y,i,o,!0))}else if(l.includes(",")){var v,g=l.split(","),w=j(g);try{for(w.s();!(v=w.n()).done;){var _=v.value;h(this._trace(N(_,p),e,n,r,a,i,!0))}}catch(C){w.e(C)}finally{w.f()}}else!s&&e&&$.call(e,l)&&h(this._trace(p,e[l],T(n,l),e,l,i,o,!0))}if(this._hasParentSelector)for(var F=0;F<f.length;F++){var k=f[F];if(k&&k.isParentSelector){var x=this._trace(k.expr,e,k.path,r,a,i,o);if(Array.isArray(x)){f[F]=x[0];for(var I=x.length,D=1;D<I;D++)F++,f.splice(F,0,x[D])}else f[F]=x}}return f},M.prototype._walk=function(t,e,n,r,a,i,o,s){if(Array.isArray(n))for(var u=n.length,c=0;c<u;c++)s(c,t,e,n,r,a,i,o);else n&&"object"===m(n)&&Object.keys(n).forEach((function(u){s(u,t,e,n,r,a,i,o)}))},M.prototype._slice=function(t,e,n,r,a,i,o){if(Array.isArray(n)){var s=n.length,u=t.split(":"),c=u[2]&&Number.parseInt(u[2])||1,l=u[0]&&Number.parseInt(u[0])||0,p=u[1]&&Number.parseInt(u[1])||s;l=l<0?Math.max(0,l+s):Math.min(s,l),p=p<0?Math.max(0,p+s):Math.min(s,p);for(var f=[],h=l;h<p;h+=c){var d=this._trace(N(h,e),n,r,a,i,o,!0);d.forEach((function(t){f.push(t)}))}return f}},M.prototype._eval=function(t,e,n,r,a,i){t.includes("@parentProperty")&&(this.currSandbox._$_parentProperty=i,t=t.replace(/@parentProperty/g,"_$_parentProperty")),t.includes("@parent")&&(this.currSandbox._$_parent=a,t=t.replace(/@parent/g,"_$_parent")),t.includes("@property")&&(this.currSandbox._$_property=n,t=t.replace(/@property/g,"_$_property")),t.includes("@path")&&(this.currSandbox._$_path=M.toPathString(r.concat([n])),t=t.replace(/@path/g,"_$_path")),t.includes("@root")&&(this.currSandbox._$_root=this.json,t=t.replace(/@root/g,"_$_root")),/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(t)&&(this.currSandbox._$_v=e,t=t.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g,"_$_v$1"));try{return this.vm.runInNewContext(t,this.currSandbox)}catch(o){throw console.log(o),new Error("jsonPath: "+o.message+": "+t)}},M.cache={},M.toPathString=function(t){for(var e=t,n=e.length,r="$",a=1;a<n;a++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[a])||(r+=/^[\*0-9]+$/.test(e[a])?"["+e[a]+"]":"['"+e[a]+"']");return r},M.toPointer=function(t){for(var e=t,n=e.length,r="",a=1;a<n;a++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[a])||(r+="/"+e[a].toString().replace(/~/g,"~0").replace(/\//g,"~1"));return r},M.toPathArray=function(t){var e=M.cache;if(e[t])return e[t].concat();var n=[],r=t.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g,";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g,(function(t,e){return"[#"+(n.push(e)-1)+"]"})).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g,(function(t,e){return"['"+e.replace(/\./g,"%@%").replace(/~/g,"%%@@%%")+"']"})).replace(/~/g,";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g,";").replace(/%@%/g,".").replace(/%%@@%%/g,"~").replace(/(?:;)?(\^+)(?:;)?/g,(function(t,e){return";"+e.split("").join(";")+";"})).replace(/;;;|;;/g,";..;").replace(/;$|'?\]|'$/g,""),a=r.split(";").map((function(t){var e=t.match(/#([0-9]+)/);return e&&e[1]?n[e[1]]:t}));return e[t]=a,e[t].concat()};var B=function(t,e,n){for(var r=t.length,a=0;a<r;a++){var i=t[a];n(i)&&e.push(t.splice(a--,1)[0])}};function V(t,e,n){1==e.length?t[e[0]]=n:(t[e[0]]=t[e[0]]||{},V(t[e[0]],e.splice(1),n))}M.prototype.vm={runInNewContext:function(t,e){var n=Object.keys(e),r=[];B(n,r,(function(t){return"function"===typeof e[t]}));var a=n.map((function(t,n){return e[t]})),i=r.reduce((function(t,n){var r=e[n].toString();return/function/.test(r)||(r="function "+r),"var "+n+"="+r+";"+t}),"");t=i+t,/(["'])use strict\1/.test(t)||n.includes("arguments")||(t="var arguments = undefined;"+t),t=t.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/,"");var o=t.lastIndexOf(";"),s=o>-1?t.slice(0,o+1)+" return "+t.slice(o+1):" return "+t;return _(Function,C(n).concat([s])).apply(void 0,C(a))}};var J=function(t){if(void 0!==t.value){var e=t.callback;t.callback=function(n,r,a){return a.parent[a.parentProperty]=t.value,e?e(n,r,a):n}}var n=M(t);if(void 0!==t.value&&0==n.length){var r=t.path.split(".");V(t.json,r.splice(1),t.value)}return n};n("b3a4");function U(){return{config:{},meta:{}}}var z={components:{MasterView:o["a"],XSimpleForm:h},data:function(){return{MyFlags:d["c"],MyDict:d["b"],MyConst:d["a"],actions:[],table:{fields:[{key:"details",label:"Channel"},{key:"name",label:"Desc"},{key:"disabled",label:"Disabled"},{key:"actions",label:"Action"}],items:[],perPage:25,currentPage:1,rows:0,api:"api/options/channels"},oneItem:U(),oneItemView:U(),modelName:"MODAL_CHANNELS",modalInputs:[],oldHash:null}},computed:{items:function(){return this.$store.getters.StateAgents},teams:function(){return this.$store.getters.StateTeams},isChanged:function(){return!0}},created:function(t){},methods:{loadItems:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.get("api/options/channels");case 2:e=t.sent,this.table.items=e.results;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.post("api/config/channel/"+this.oneItem.channelType,this.oneItem);case 2:return e=t.sent,t.next=5,this.onAction({name:"CANCEL"});case 5:this.viewItem(e.results[0]),this.loadItems();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancelItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.oneItem=U(),console.log("Cannnnnn"),this.onAction({name:"CANCEL"});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in this.oneItem=U(),e)this.oneItem[n]=JSON.parse(JSON.stringify(e[n]));this.onAction({name:"EDIT_ITEM"});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),viewItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.get("api/config/channel/"+e.channelId);case 2:n=t.sent,this.oneItemView=n.results[0],this.$bvModal.show(this.modelName+"_VIEW");case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),deleteItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.post("api/config/channel/"+e.channelType+"?disabled="+!e.disabled,e);case 2:this.loadItems();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onAction:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=e.name,t.next="ADD_ITEM"===t.t0?3:"EDIT_ITEM"===t.t0?7:"VIEW_ITEM"===t.t0?11:"CANCEL"===t.t0?14:16;break;case 3:return this.oldHash=JSON.stringify(this.oneItem),this.openForm(this.oneItem),console.log("ADD_ITEM",e),t.abrupt("break",17);case 7:return this.oldHash=JSON.stringify(this.oneItem),this.openForm(this.oneItem),console.log("ADD_ITEM",e),t.abrupt("break",17);case 11:return this.openForm(this.oneItem),console.log("ADD_ITEM",e),t.abrupt("break",17);case 14:return this.$bvModal.hide(this.modelName),t.abrupt("break",17);case 16:console.log("NoMapping",e);case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),openForm:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.get("api/meta/channel_configs/"+e.channelType);case 2:n=t.sent,console.log("oldHash",this.oldHash),this.modalInputs=n.results.map((function(t){var n=t.path||t.key;return console.log("meta.key",n,J({path:"$."+n,json:e})),{meta:t,config:{key:t.key,path:t.path,value:J({path:"$."+n,json:e})[0]||t.defaultValue||""}}})),this.$bvModal.show(this.modelName);case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onConfigChange:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.meta,r=e.config,a=n.path||n.key,J({path:"$."+a,json:this.oneItem,resultType:"all",value:r.value}),this.oneItem.__ob__.dep.notify();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},H=z,L=Object(p["a"])(H,r,a,!1,null,null,null);e["default"]=L.exports}}]);