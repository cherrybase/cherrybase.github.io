(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d1e9588","chunk-6746e860"],{ab35:function(t,e,n){var i={"./chat_search_tokens.json":["bebe","chunk-2d21b4bc"],"./chat_status.json":["9518","chunk-2d0e5739"],"./config/integration/type_.json":["cda9","chunk-2d22250f"],"./config/integration/type_json.json":["5030","chunk-2d0c732e"],"./config/integration/type_text.json":["7613","chunk-2d0d7237"],"./config/integration/type_wit.json":["1cd5","chunk-2d0b6719"],"./config/integration/types.json":["b79b","chunk-2d210314"],"./contact_types.json":["4bbf","chunk-2d0cc068"],"./countries.json":["3ab4","chunk-2d0c4816"],"./hsm/message_category_types.json":["7876","chunk-2d0d7a76"],"./hsm/message_format_types.json":["e84d","chunk-2d226359"],"./industries.json":["aeb3","chunk-2d21402b"],"./languages.json":["9726","chunk-2d0e5ed8"]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id="ab35",t.exports=o},e26b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("MySource",t._b({attrs:{options:t.options,filter:t.filter,optionLabel:t.optionLabel,emptyDisplay:t.emptyDisplay,invalidDisplay:t.invalidDisplay,value:t.value}},"MySource",t.$attrs,!1))},o=[],s=n("ebba"),l={inheritAttrs:!1,props:{options:{},value:{},filter:{},optionLabel:{},emptyDisplay:{},invalidDisplay:{}},components:{MySource:s["default"]}},a=l,r=n("2877"),u=Object(r["a"])(a,i,o,!1,null,null,null);e["default"]=u.exports},ebba:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e(t.tag,{tag:"component"},[t._t("data",(function(){return[t._v("\n        "+t._s(t.myDisplay)+"\n    ")]}),null,t.model)],2)},o=[],s=(n("a481"),n("96cf"),n("3b8d")),l=(n("28a5"),n("6b54"),n("75fc")),a=(n("7f7f"),{components:{},props:{options:{default:"/options",description:"examples;- getx:RelativeGetXUrl,dispatch:DispatchableEventName,data:PathNameIn@data"},emptyDisplay:{type:String,default:null},invalidDisplay:{type:String,default:null},optionKey:{type:String,default:"key"},optionLabel:{type:String,default:"label"},value:{default:null},selectDefault:{},filter:{},tag:{type:String,default:"span"}},data:function(){return{model:{options:[],selected:null}}},computed:{myDisplay:function(){var t,e;return null===(t=this.model)||void 0===t||null===(e=t.selected)||void 0===e?void 0:e.label}},watch:{value:function(t,e){this.valueOnChange(t,e)},options:function(t,e){this.loadOptions()}},mounted:function(){this.loadOptions()},methods:{valueOnChange:function(t,e){this.selectModelValue()},selectModelValue:function(){for(var t in this.model.selected=null,this.model.options)this.model.options[t].value==this.value&&(this.model.selected=this.model.options[t]);var e=this.model.selected;void 0!==this.model.selected&&null!==this.model.selected||(this.selectDefault&&1==this.selectDefault&&this.model.options[0]?(this.model.selected=this.model.options[0],this.onChange(this.model.selected,e)):this.invalidDisplay&&(this.model.selected={label:this.invalidDisplay,value:this.value},this.onChange(this.model.selected,e))),this.$emit("option",this.model.selected)},fromOptions:function(t){var e=this,n=!1;if(t&&t.map||console.error("options",t),this.model.options=t.map((function(t){if("string"==typeof t||"number"==typeof t)return{value:t,label:t,item:t};if(null===t||void 0===t)return n=!0,{value:t,label:e.emptyDisplay||e.placeholder,item:t};var i=e.$formatters.any(t[e.optionKey],t.id,t.key,t.code,t.value,t.label,t.name),o=t[e.optionLabel]||t.name||t.label||t.value||t.code||t.key||t.id;return{value:i,label:o||(null===i||void 0===i?e.emptyDisplay||e.placeholder:""),item:t,prefixClass:t.prefixClass||t.icon}})),!n&&e.emptyDisplay&&(this.model.options=[{value:null,label:this.emptyDisplay,item:null}].concat(Object(l["a"])(this.model.options))),this.filter){var i=[];"[object Array]"===Object.prototype.toString.call(this.filter)?i=Object(l["a"])(this.filter):"[object Object]"===Object.prototype.toString.call(this.filter)&&(i=[this.filter]),this.model.options=this.model.options.filter((function(t){return i.some((function(e){for(var n in e){var i=e[n],o=!1;0===n.indexOf("!!")&&(n=n.substr(2),o=!0);var s=n.split("."),l=s[1]?t.item[s[0]]?t.item[s[0]][s[1]]:void 0:t.item[n];if(o)return i?void 0!==l&&null!==l:void 0===l||null===l;if(i!==l)return!1}return!0}))}))}this.selectModelValue()},loadOptions:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,o,s,l,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.options||"string"!=typeof this.options||!/^(data\:|@data\/)/.test(this.options)){t.next=8;break}return e=this.options.split("#"),t.next=4,n("ab35")("./"+e[0].replace(/^(data:|@data\/)/,"")+".json");case 4:i=t.sent,this.fromOptions(i.options),t.next=25;break;case 8:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("getx:")){t.next=16;break}return o=this.options.replace("getx:",""),t.next=12,this.$service.getX(o);case 12:s=t.sent,this.fromOptions(s.results?s.results:s),t.next=25;break;case 16:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("dispatch:")){t.next=24;break}return l=this.options.replace("dispatch:",""),t.next=20,this.$store.dispatch(l);case 20:a=t.sent,this.fromOptions(a.results?a.results:a),t.next=25;break;case 24:this.options&&this.fromOptions(this.options);case 25:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onChange:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,n){var i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e!=n&&(s=null===(i=this.model)||void 0===i||null===(o=i.selected)||void 0===o?void 0:o.value,this.$emit("input",s),this.$emit("change",s));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),onSearch:function(t,e){this.$emit("search",t,e)},selected:function(){var t;return null===(t=this.model)||void 0===t?void 0:t.selected},option:function(){return this.selected()}}}),r=a,u=n("2877"),c=Object(u["a"])(r,i,o,!1,null,null,null);e["default"]=c.exports}}]);