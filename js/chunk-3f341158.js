(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f341158","chunk-6746e860"],{"75fc":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var i=n("a745"),o=n.n(i),s=n("db2a");function a(t){if(o()(t))return Object(s["a"])(t)}var l=n("67bb"),r=n.n(l),u=n("5d58"),c=n.n(u),d=n("774e"),p=n.n(d);function h(t){if("undefined"!==typeof r.a&&null!=t[c.a]||null!=t["@@iterator"])return p()(t)}var f=n("e630");function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t){return a(t)||h(t)||Object(f["a"])(t)||m()}},ab35:function(t,e,n){var i={"./chat_status.json":["9518","chunk-2d0e5739"],"./contact_types.json":["4bbf","chunk-2d0cc068"],"./countries.json":["3ab4","chunk-2d0c4816"],"./hsm/message_category_types.json":["7876","chunk-2d0d7a76"],"./hsm/message_format_types.json":["e84d","chunk-2d226359"],"./industries.json":["aeb3","chunk-2d21402b"],"./languages.json":["9726","chunk-2d0e5ed8"]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id="ab35",t.exports=o},ebba:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component"},[t._t("data",(function(){return[t._v("\n        "+t._s(t.myDisplay)+"\n    ")]}),null,t.model)],2)},o=[],s=(n("a481"),n("96cf"),n("3b8d")),a=(n("28a5"),n("6b54"),n("75fc")),l=(n("7f7f"),{components:{},props:{options:{default:"/options",description:"examples;- getx:RelativeGetXUrl,dispatch:DispatchableEventName,data:PathNameIn@data"},emptyDisplay:{type:String,default:null},invalidDisplay:{type:String,default:null},optionKey:{type:String,default:"key"},optionLabel:{type:String,default:"label"},value:{default:null},selectDefault:{},filter:{},tag:{type:String,default:"span"}},data:function(){return{model:{options:[],selected:null}}},computed:{myDisplay:function(){var t,e;return null===(t=this.model)||void 0===t||null===(e=t.selected)||void 0===e?void 0:e.label}},watch:{value:function(t,e){this.valueOnChange(t,e)},options:function(t,e){this.loadOptions()}},mounted:function(){this.loadOptions()},methods:{valueOnChange:function(t,e){this.selectModelValue()},selectModelValue:function(){for(var t in this.model.selected=null,this.model.options)this.model.options[t].value==this.value&&(this.model.selected=this.model.options[t]);var e=this.model.selected;void 0!==this.model.selected&&null!==this.model.selected||(this.selectDefault&&1==this.selectDefault&&this.model.options[0]?(this.model.selected=this.model.options[0],this.onChange(this.model.selected,e)):this.invalidDisplay&&(this.model.selected={label:this.invalidDisplay,value:this.value},this.onChange(this.model.selected,e))),this.$emit("option",this.model.selected)},fromOptions:function(t){var e=this,n=!1;if(t&&t.map||console.error("options",t),this.model.options=t.map((function(t){if("string"==typeof t||"number"==typeof t)return{value:t,label:t,item:t};if(null===t||void 0===t)return n=!0,{value:t,label:e.emptyDisplay||e.placeholder,item:t};var i=e.$formatters.any(t[e.optionKey],t.id,t.key,t.code,t.value,t.label,t.name),o=t[e.optionLabel]||t.name||t.label||t.value||t.code||t.key||t.id;return{value:i,label:o||(null===i||void 0===i?e.emptyDisplay||e.placeholder:""),item:t,prefixClass:t.prefixClass||t.icon}})),!n&&e.emptyDisplay&&(this.model.options=[{value:null,label:this.emptyDisplay,item:null}].concat(Object(a["a"])(this.model.options))),this.filter){var i=[];"[object Array]"===Object.prototype.toString.call(this.filter)?i=Object(a["a"])(this.filter):"[object Object]"===Object.prototype.toString.call(this.filter)&&(i=[this.filter]),this.model.options=this.model.options.filter((function(t){return i.some((function(e){for(var n in e){var i=e[n],o=!1;0===n.indexOf("!!")&&(n=n.substr(2),o=!0);var s=n.split("."),a=s[1]?t.item[s[0]]?t.item[s[0]][s[1]]:void 0:t.item[n];if(o)return i?void 0!==a&&null!==a:void 0===a||null===a;if(i!==a)return!1}return!0}))}))}this.selectModelValue()},loadOptions:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,o,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.options||"string"!=typeof this.options||!/^(data\:|@data\/)/.test(this.options)){t.next=7;break}return t.next=3,n("ab35")("./"+this.options.replace(/^(data:|@data\/)/,"")+".json");case 3:e=t.sent,this.fromOptions(e.options),t.next=24;break;case 7:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("getx:")){t.next=15;break}return i=this.options.replace("getx:",""),t.next=11,this.$service.getX(i);case 11:o=t.sent,this.fromOptions(o.results?o.results:o),t.next=24;break;case 15:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("dispatch:")){t.next=23;break}return s=this.options.replace("dispatch:",""),t.next=19,this.$store.dispatch(s);case 19:a=t.sent,this.fromOptions(a.results?a.results:a),t.next=24;break;case 23:this.options&&this.fromOptions(this.options);case 24:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onChange:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,n){var i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e!=n&&(s=null===(i=this.model)||void 0===i||null===(o=i.selected)||void 0===o?void 0:o.value,this.$emit("input",s),this.$emit("change",s));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),onSearch:function(t,e){this.$emit("search",t,e)},selected:function(){var t;return null===(t=this.model)||void 0===t?void 0:t.selected},option:function(){return this.selected()}}}),r=l,u=n("2877"),c=Object(u["a"])(r,i,o,!1,null,null,null);e["default"]=c.exports}}]);