(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ac26b86"],{2601:function(t,e,n){},"2eb3":function(t,e,n){"use strict";n.r(e);n("ac6a"),n("456d");var o=function(){var t=this,e=t._self._c;return"dropdown"==t.type?e("v-select",t._b({staticStyle:{"min-width":"220px"},attrs:{options:t.model.options,filterable:t.filterable,searchable:t.searchable,placeholder:t.placeholder,clearable:t.clearable,appendToBody:t.appendToBody,calculatePosition:t.calculatePosition},on:{search:t.onSearch,input:t.onChange},scopedSlots:t._u([{key:"selected-option",fn:function(n){return[t.selectedPrefixClass?e("span",{class:[t.selectedPrefixClass,"mr-1"]},[t._v(" ")]):t._e(),n.prefixClass?e("span",{class:[n.prefixClass,"mr-1"]},[t._v(" ")]):t._e(),t._v(t._s(n.label)+"\n    ")]}},{key:"option",fn:function(n){return[n.prefixClass?e("span",{class:[n.prefixClass,"mr-1"]},[t._v(" ")]):t._e(),t._v(t._s(n.label)+"\n    ")]}},{key:"open-indicator",fn:function(n){var o=n.attributes;return[e("span",t._b({staticClass:"fa fa-caret-down"},"span",o,!1))]}},t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0),model:{value:t.model.value,callback:function(e){t.$set(t.model,"value",e)},expression:"model.value"}},"v-select",t.$attrs,!1)):e("span",[t.model.value?t._t("selected-option",(function(){return[t.selectedPrefixClass?e("span",{class:t.selectedPrefixClass},[t._v(" ")]):t._e(),t._v(t._s(t.model.value.label)+"\n    ")]}),null,{option:t.model.value}):t._e()],2)},i=[],s=(n("a481"),n("96cf"),n("3b8d")),l=(n("28a5"),n("6b54"),n("75fc")),a=(n("7f7f"),n("4a7a")),r=n.n(a),u=(n("6dfc"),n("b012")),c=n.n(u),p=n("39c3"),d={components:{vSelect:r.a},props:{options:{default:"/options",description:"examples;- getx:RelativeGetXUrl,dispatch:DispatchableEventName,data:PathNameIn@data"},searchable:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},emptyDisplay:{type:String,default:null},placeholder:{type:String,default:""},optionContext:{type:String,default:null},optionKey:{type:String,default:"key"},optionLabel:{type:String,default:"label"},value:{default:null},selectDefault:{},selectedPrefixClass:{},filter:{},type:{type:String,default:"dropdown"},autoPosition:{type:Boolean,default:!1}},data:function(){return{model:{options:[],value:null},placement:"top"}},computed:{myOptions:function(){},appendToBody:function(){return 1==this.autoPosition}},watch:{value:function(t,e){this.valueOnChange(t,e)},options:function(t,e){this.loadOptions()}},created:function(){this.onOption=c()(this.onOption)},mounted:function(){this.loadOptions()},methods:{valueOnChange:function(t,e){this.selectModelValue()},selectModelValue:function(){for(var t in this.model.value=null,this.model.options)this.model.options[t].value==this.value&&(this.model.value=this.model.options[t]);!this.selectDefault||void 0!==this.model.value&&null!==this.model.value||1==this.selectDefault&&this.model.options[0]&&(this.model.value=this.model.options[0],this.onChange()),this.onOption()},fromOptions:function(t){var e=this,n=!1;if(t&&t.map||console.error("options",t),this.model.options=t.map((function(t){if("string"==typeof t||"number"==typeof t)return{value:t,label:t,item:t};if(null===t||void 0===t)return n=!0,{value:t,label:e.emptyDisplay||e.placeholder,item:t};var o=e.optionContext?t[e.optionContext]:t,i=o[e.optionKey]||o.id||o.key||o.code||o.value||o.label||o.name,s=o[e.optionLabel]||o.name||o.label||o.value||o.code||o.key||o.id;return{value:i,label:s||(null===i||void 0===i?e.emptyDisplay||e.placeholder:""),item:t,prefixClass:t.prefixClass||t.icon}})),!n&&e.emptyDisplay&&(this.model.options=[{value:null,label:this.emptyDisplay,item:null}].concat(Object(l["a"])(this.model.options))),this.filter){var o=[];"[object Array]"===Object.prototype.toString.call(this.filter)?o=Object(l["a"])(this.filter):"[object Object]"===Object.prototype.toString.call(this.filter)&&(o=[this.filter]),this.model.options=this.model.options.filter((function(t){return o.some((function(e){for(var n in e){var o=e[n],i=!1;0===n.indexOf("!!")&&(n=n.substr(2),i=!0);var s=n.split("."),l=s[1]?t.item[s[0]]?t.item[s[0]][s[1]]:void 0:t.item[n];if(i)return o?void 0!==l&&null!==l:void 0===l||null===l;if(o!==l)return!1}return!0}))}))}this.selectModelValue()},loadOptions:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,o,i,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.options||"string"!=typeof this.options||!/^(data\:|@data\/)/.test(this.options)){t.next=7;break}return t.next=3,n("ab35")("./"+this.options.replace(/^(data:|@data\/)/,"")+".json");case 3:e=t.sent,this.fromOptions(e.options),t.next=24;break;case 7:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("getx:")){t.next=15;break}return o=this.options.replace("getx:",""),t.next=11,this.$service.getX(o);case 11:i=t.sent,this.fromOptions(i.results?i.results:i),t.next=24;break;case 15:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("dispatch:")){t.next=23;break}return s=this.options.replace("dispatch:",""),t.next=19,this.$store.dispatch(s);case 19:l=t.sent,this.fromOptions(l.results?l.results:l),t.next=24;break;case 23:this.options&&this.fromOptions(this.options);case 24:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onChange:function(){var t=this.model.value?this.model.value.value:null;this.$emit("input",t),this.$emit("change",t)},onSearch:function(t,e){this.$emit("search",t,e)},onOption:function(t,e){this.$emit("option",this.model.value)},option:function(){return this.model.value},selected:function(){var t;return null===(t=this.model)||void 0===t?void 0:t.value},calculatePosition:function(t,e,n){var o=n.width,i=n.top,s=n.left;if(this.autoPosition)return this.withPopper(t,e,{width:o,top:i,left:s});t.style.top=i,t.style.left=s,t.style.width=o},withPopper:function(t,e,n){var o=n.width;t.style.width=o;var i=Object(p["a"])(e.$refs.toggle,t,{placement:this.placement,modifiers:[{name:"offset",options:{offset:[0,-1]}},{name:"toggleClass",enabled:!0,phase:"write",fn:function(t){var n=t.state;e.$el.classList.toggle("drop-up","top"===n.placement)}}]});return function(){return i.destroy()}}}},f=d,h=(n("c840"),n("2877")),m=Object(h["a"])(f,o,i,!1,null,null,null);e["default"]=m.exports},ab35:function(t,e,n){var o={"./chat_search_tokens.json":["bebe","chunk-2d21b4bc"],"./chat_status.json":["9518","chunk-2d0e5739"],"./config/integration/type_.json":["cda9","chunk-2d22250f"],"./config/integration/type_json.json":["5030","chunk-2d0c732e"],"./config/integration/type_navitaire.json":["f83f","chunk-2d22d79b"],"./config/integration/type_text.json":["7613","chunk-2d0d7237"],"./config/integration/type_wit.json":["1cd5","chunk-2d0b6719"],"./config/integration/types.json":["b79b","chunk-2d210314"],"./contact_types.json":["4bbf","chunk-2d0cc068"],"./countries.json":["3ab4","chunk-2d0c4816"],"./hsm/message_category_types.json":["7876","chunk-2d0d7a76"],"./hsm/message_format_types.json":["e84d","chunk-2d226359"],"./industries.json":["aeb3","chunk-2d21402b"],"./languages.json":["9726","chunk-2d0e5ed8"]};function i(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],i=e[0];return n.e(e[1]).then((function(){return n.t(i,3)}))}i.keys=function(){return Object.keys(o)},i.id="ab35",t.exports=i},b012:function(t,e){function n(t,e,n){var o,i,s,l,a;function r(){var u=Date.now()-l;u<e&&u>=0?o=setTimeout(r,e-u):(o=null,n||(a=t.apply(s,i),s=i=null))}null==e&&(e=100);var u=function(){s=this,i=arguments,l=Date.now();var u=n&&!o;return o||(o=setTimeout(r,e)),u&&(a=t.apply(s,i),s=i=null),a};return u.clear=function(){o&&(clearTimeout(o),o=null)},u.flush=function(){o&&(a=t.apply(s,i),s=i=null,clearTimeout(o),o=null)},u}n.debounce=n,t.exports=n},c840:function(t,e,n){"use strict";n("2601")}}]);