(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d1e9588","chunk-6746e860"],{ab35:function(t,e,n){var i={"./chat_search_tokens.json":["bebe","chunk-2d21b4bc"],"./chat_status.json":["9518","chunk-2d0e5739"],"./color_variant.json":["99f9","chunk-2d0e6ca9"],"./config/integration/type_.json":["cda9","chunk-2d22250f"],"./config/integration/type_google.json":["1c05","chunk-2d0b60cd"],"./config/integration/type_json.json":["5030","chunk-2d0c732e"],"./config/integration/type_navitaire.json":["f83f","chunk-2d22d79b"],"./config/integration/type_text.json":["7613","chunk-2d0d7237"],"./config/integration/type_wit.json":["1cd5","chunk-2d0b6719"],"./config/integration/types.json":["b79b","chunk-2d210314"],"./config/sms_provider.json":["a7d9","chunk-2d2093c1"],"./contact_types.json":["4bbf","chunk-2d0cc068"],"./countries.json":["3ab4","chunk-2d0c4816"],"./hsm/message_categories.json":["2b1d","chunk-2d0bd1b9"],"./hsm/message_category_types.json":["7876","chunk-2d0d7a76"],"./hsm/message_format_types.json":["e84d","chunk-2d226359"],"./industries.json":["aeb3","chunk-2d21402b"],"./languages.json":["9726","chunk-2d0e5ed8"]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id="ab35",t.exports=o},e26b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("MySource",t._b({attrs:{options:t.options,filter:t.filter,optionLabel:t.optionLabel,emptyDisplay:t.emptyDisplay,invalidDisplay:t.invalidDisplay,value:t.value}},"MySource",t.$attrs,!1))},o=[],s=n("ebba"),l={inheritAttrs:!1,props:{options:{},value:{},filter:{},optionLabel:{},emptyDisplay:{},invalidDisplay:{}},components:{MySource:s["default"]}},a=l,r=n("2877"),c=Object(r["a"])(a,i,o,!1,null,null,null);e["default"]=c.exports},ebba:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e(t.tag,{tag:"component"},[t._t("data",(function(){return[t.prependIcon&&t.myIcon?e("i",{class:t.myIcon},[t._v(" ")]):t._e(),t._v(t._s(t.myDisplay)+"\n    ")]}),null,t.model)],2)},o=[],s=(n("a481"),n("96cf"),n("3b8d")),l=(n("28a5"),n("6b54"),n("75fc")),a=(n("7f7f"),{components:{},props:{options:{default:"/options",description:"examples;- getx:RelativeGetXUrl,dispatch:DispatchableEventName,data:PathNameIn@data"},emptyDisplay:{type:String,default:null},invalidDisplay:{type:String,default:null},optionKey:{type:String,default:"key"},optionLabel:{type:String,default:"label"},value:{default:null},selectDefault:{},filter:{},tag:{type:String,default:"span"},prependIcon:{type:Boolean,default:!0}},data:function(){return{model:{options:[],selected:null,value:null}}},computed:{myDisplay:function(){var t,e;return null===(t=this.model)||void 0===t||null===(e=t.selected)||void 0===e?void 0:e.label},myIcon:function(){var t,e,n;return null===(t=this.model)||void 0===t||null===(e=t.selected)||void 0===e||null===(n=e.item)||void 0===n?void 0:n.icon}},watch:{value:function(t,e){this.valueOnChange(t,e)},options:function(t,e){this.loadOptions()},filter:function(t,e){JSON.stringify(t)!=JSON.stringify(e)&&this.loadOptions()}},mounted:function(){this.loadOptions()},methods:{valueOnChange:function(t,e){this.selectModelValue()},selectModelValue:function(){var t;for(var e in this.model.selected=null,this.model.value=null===(t=this.model.selected)||void 0===t?void 0:t.value,this.model.options){var n;if(this.model.options[e].value==this.value)this.model.selected=this.model.options[e],this.model.value=null===(n=this.model.selected)||void 0===n?void 0:n.value}var i,o=this.model.selected;if(void 0===this.model.selected||null===this.model.selected)if(this.selectDefault&&1==this.selectDefault&&this.model.options[0])this.model.selected=this.model.options[0],this.model.value=null===(i=this.model.selected)||void 0===i?void 0:i.value,this.onChange(this.model.selected,o);else if(this.invalidDisplay){var s;this.model.selected={label:this.invalidDisplay,value:this.value},this.model.value=null===(s=this.model.selected)||void 0===s?void 0:s.value,this.onChange(this.model.selected,o)}this.$emit("option",this.model.selected)},fromOptions:function(t){var e=this,n=!1;if(t&&t.map||console.error("options",t,"for",this),this.model.options=t.map((function(t){if("string"==typeof t||"number"==typeof t)return{value:t,label:t,item:t};if(null===t||void 0===t)return n=!0,{value:t,label:e.emptyDisplay||e.placeholder,item:t};var i=e.$formatters.any(t[e.optionKey],t.id,t.key,t.code,t.value,t.label,t.name),o=t[e.optionLabel]||t.name||t.label||t.value||t.code||t.key||t.id;return{value:i,label:o||(null===i||void 0===i?e.emptyDisplay||e.placeholder:""),item:t,prefixClass:t.prefixClass||t.icon}})),!n&&e.emptyDisplay&&(this.model.options=[{value:null,label:this.emptyDisplay,item:null}].concat(Object(l["a"])(this.model.options))),this.filter){var i=[];"[object Array]"===Object.prototype.toString.call(this.filter)?i=Object(l["a"])(this.filter):"[object Object]"===Object.prototype.toString.call(this.filter)&&(i=[this.filter]),this.model.options=this.model.options.filter((function(t){return i.some((function(e){for(var n in e){var i=e[n],o=!1;0===n.indexOf("!!")&&(n=n.substr(2),o=!0);var s=n.split("."),l=s[1]?t.item[s[0]]?t.item[s[0]][s[1]]:void 0:t.item[n];if(o)return i?void 0!==l&&null!==l:void 0===l||null===l;if(i!==l)return!1}return!0}))}))}this.selectModelValue()},loadOptions:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,o,s,l,a,r,c,u,d,p,h,f,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.options||"string"!=typeof this.options||!/^(data\:|@data\/)/.test(this.options)){t.next=8;break}return e=this.options.split("#"),t.next=4,n("ab35")("./"+e[0].replace(/^(data:\/|data:|@data\/)/,"")+".json");case 4:i=t.sent,this.fromOptions(i.options),t.next=48;break;case 8:if(!this.options||"string"!=typeof this.options||!/^(json\:|@json\/)/.test(this.options)){t.next=21;break}return o=this.options.split("#"),console.log("__webpack_public_path__",n.p),s=n.p+"/_json/"+o[0].replace(/^(json:\/|json:|@json\/)/,"")+".json",t.next=14,fetch(s);case 14:return l=t.sent,t.next=17,l.json();case 17:a=t.sent,this.fromOptions(a.options),t.next=48;break;case 21:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("getx:")){t.next=30;break}return r=this.options.replace("getx:","").split("#"),t.next=25,this.$service.getX(r[0]);case 25:c=t.sent,u=r[1]||"results",this.fromOptions(c[u]?c[u]:c),t.next=48;break;case 30:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("get:")){t.next=39;break}return d=this.options.replace("get:","").split("#"),t.next=34,this.$service.get(d[0]);case 34:p=t.sent,h=d[1]||"results",this.fromOptions(p[h]?p[h]:p),t.next=48;break;case 39:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("dispatch:")){t.next=47;break}return f=this.options.replace("dispatch:",""),t.next=43,this.$store.dispatch(f);case 43:m=t.sent,this.fromOptions(m.results?m.results:m),t.next=48;break;case 47:this.options&&this.fromOptions(this.options);case 48:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onChange:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,n){var i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e!=n&&(s=null===(i=this.model)||void 0===i||null===(o=i.selected)||void 0===o?void 0:o.value,this.$emit("input",s),this.$emit("change",s));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),onSearch:function(t,e){this.$emit("search",t,e)},selected:function(){var t;return null===(t=this.model)||void 0===t?void 0:t.selected},option:function(){return this.selected()}}}),r=a,c=n("2877"),u=Object(c["a"])(r,i,o,!1,null,null,null);e["default"]=u.exports}}]);