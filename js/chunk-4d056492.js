(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d056492"],{"2eb3":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"dropdown"==e.type?n("v-select",e._b({staticStyle:{"min-width":"220px"},attrs:{options:e.model.options,filterable:e.filterable,searchable:e.searchable,placeholder:e.placeholder,clearable:e.clearable,appendToBody:e.appendToBody,calculatePosition:e.calculatePosition},on:{search:e.onSearch,input:e.onChange},scopedSlots:e._u([{key:"selected-option",fn:function(t){return[e.selectedPrefixClass?n("span",{class:[e.selectedPrefixClass,"mr-1"]},[e._v(" ")]):e._e(),t.prefixClass?n("span",{class:[t.prefixClass,"mr-1"]},[e._v(" ")]):e._e(),e._v(e._s(t.label)+"\n    ")]}},{key:"option",fn:function(t){return[t.prefixClass?n("span",{class:[t.prefixClass,"mr-1"]},[e._v(" ")]):e._e(),e._v(e._s(t.label)+"\n    ")]}},{key:"open-indicator",fn:function(t){var o=t.attributes;return[n("span",e._b({staticClass:"fa fa-caret-down"},"span",o,!1))]}},e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(n){return[e._t(t,null,null,n)]}}}))],null,!0),model:{value:e.model.value,callback:function(t){e.$set(e.model,"value",t)},expression:"model.value"}},"v-select",e.$attrs,!1)):n("span",[e.model.value?e._t("selected-option",(function(){return[e.selectedPrefixClass?n("span",{class:e.selectedPrefixClass},[e._v(" ")]):e._e(),e._v(e._s(e.model.value.label)+"\n    ")]}),null,{option:e.model.value}):e._e()],2)},i=[],s=(n("a481"),n("96cf"),n("3b8d")),l=(n("28a5"),n("6b54"),n("75fc")),a=(n("7f7f"),n("4a7a")),r=n.n(a),u=(n("6dfc"),n("b012")),c=n.n(u),p=n("39c3"),d={components:{vSelect:r.a},props:{options:{default:"/options",description:"examples;- getx:RelativeGetXUrl,dispatch:DispatchableEventName,data:PathNameIn@data"},searchable:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},emptyDisplay:{type:String,default:null},placeholder:{type:String,default:""},optionContext:{type:String,default:null},optionKey:{type:String,default:"key"},optionLabel:{type:String,default:"label"},value:{default:null},selectDefault:{},selectedPrefixClass:{},filter:{},type:{type:String,default:"dropdown"},autoPosition:{type:Boolean,default:!1}},data:function(){return{model:{options:[],value:null},placement:"top"}},computed:{myOptions:function(){},appendToBody:function(){return 1==this.autoPosition}},watch:{value:function(e,t){this.valueOnChange(e,t)},options:function(e,t){this.loadOptions()}},created:function(){this.onOption=c()(this.onOption)},mounted:function(){this.loadOptions()},methods:{valueOnChange:function(e,t){this.selectModelValue()},selectModelValue:function(){for(var e in this.model.value=null,this.model.options)this.model.options[e].value==this.value&&(this.model.value=this.model.options[e]);!this.selectDefault||void 0!==this.model.value&&null!==this.model.value||1==this.selectDefault&&this.model.options[0]&&(this.model.value=this.model.options[0],this.onChange()),this.onOption()},fromOptions:function(e){var t=this,n=!1;if(e&&e.map||console.error("options",e),this.model.options=e.map((function(e){if("string"==typeof e||"number"==typeof e)return{value:e,label:e,item:e};if(null===e||void 0===e)return n=!0,{value:e,label:t.emptyDisplay||t.placeholder,item:e};var o=t.optionContext?e[t.optionContext]:e,i=o[t.optionKey]||o.id||o.key||o.code||o.value||o.label||o.name,s=o[t.optionLabel]||o.name||o.label||o.value||o.code||o.key||o.id;return{value:i,label:s||(null===i||void 0===i?t.emptyDisplay||t.placeholder:""),item:e,prefixClass:e.prefixClass||e.icon}})),!n&&t.emptyDisplay&&(this.model.options=[{value:null,label:this.emptyDisplay,item:null}].concat(Object(l["a"])(this.model.options))),this.filter){var o=[];"[object Array]"===Object.prototype.toString.call(this.filter)?o=Object(l["a"])(this.filter):"[object Object]"===Object.prototype.toString.call(this.filter)&&(o=[this.filter]),this.model.options=this.model.options.filter((function(e){return o.some((function(t){for(var n in t){var o=t[n],i=!1;0===n.indexOf("!!")&&(n=n.substr(2),i=!0);var s=n.split("."),l=s[1]?e.item[s[0]]?e.item[s[0]][s[1]]:void 0:e.item[n];if(i)return o?void 0!==l&&null!==l:void 0===l||null===l;if(o!==l)return!1}return!0}))}))}this.selectModelValue()},loadOptions:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,o,i,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.options||"string"!=typeof this.options||!/^(data\:|@data\/)/.test(this.options)){e.next=7;break}return e.next=3,n("ab35")("./"+this.options.replace(/^(data:|@data\/)/,"")+".json");case 3:t=e.sent,this.fromOptions(t.options),e.next=24;break;case 7:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("getx:")){e.next=15;break}return o=this.options.replace("getx:",""),e.next=11,this.$service.getX(o);case 11:i=e.sent,this.fromOptions(i.results?i.results:i),e.next=24;break;case 15:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("dispatch:")){e.next=23;break}return s=this.options.replace("dispatch:",""),e.next=19,this.$store.dispatch(s);case 19:l=e.sent,this.fromOptions(l.results?l.results:l),e.next=24;break;case 23:this.options&&this.fromOptions(this.options);case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onChange:function(){var e=this.model.value?this.model.value.value:null;this.$emit("input",e),this.$emit("change",e)},onSearch:function(e,t){this.$emit("search",e,t)},onOption:function(e,t){this.$emit("option",this.model.value)},option:function(){return this.model.value},selected:function(){var e;return null===(e=this.model)||void 0===e?void 0:e.value},calculatePosition:function(e,t,n){var o=n.width,i=n.top,s=n.left;if(this.autoPosition)return this.withPopper(e,t,{width:o,top:i,left:s});e.style.top=i,e.style.left=s,e.style.width=o},withPopper:function(e,t,n){var o=n.width;e.style.width=o;var i=Object(p["a"])(t.$refs.toggle,e,{placement:this.placement,modifiers:[{name:"offset",options:{offset:[0,-1]}},{name:"toggleClass",enabled:!0,phase:"write",fn:function(e){var n=e.state;t.$el.classList.toggle("drop-up","top"===n.placement)}}]});return function(){return i.destroy()}}}},f=d,h=(n("6cd3"),n("2877")),m=Object(h["a"])(f,o,i,!1,null,null,null);t["default"]=m.exports},"6cd3":function(e,t,n){"use strict";n("dbda")},ab35:function(e,t,n){var o={"./chat_search_tokens.json":["bebe","chunk-2d21b4bc"],"./chat_status.json":["9518","chunk-2d0e5739"],"./contact_types.json":["4bbf","chunk-2d0cc068"],"./countries.json":["3ab4","chunk-2d0c4816"],"./hsm/message_category_types.json":["7876","chunk-2d0d7a76"],"./hsm/message_format_types.json":["e84d","chunk-2d226359"],"./industries.json":["aeb3","chunk-2d21402b"],"./languages.json":["9726","chunk-2d0e5ed8"]};function i(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return n.e(t[1]).then((function(){return n.t(i,3)}))}i.keys=function(){return Object.keys(o)},i.id="ab35",e.exports=i},b012:function(e,t){function n(e,t,n){var o,i,s,l,a;function r(){var u=Date.now()-l;u<t&&u>=0?o=setTimeout(r,t-u):(o=null,n||(a=e.apply(s,i),s=i=null))}null==t&&(t=100);var u=function(){s=this,i=arguments,l=Date.now();var u=n&&!o;return o||(o=setTimeout(r,t)),u&&(a=e.apply(s,i),s=i=null),a};return u.clear=function(){o&&(clearTimeout(o),o=null)},u.flush=function(){o&&(a=e.apply(s,i),s=i=null,clearTimeout(o),o=null)},u}n.debounce=n,e.exports=n},dbda:function(e,t,n){}}]);