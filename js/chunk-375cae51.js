(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-375cae51","chunk-6746e860"],{9085:function(t,e,n){"use strict";n.r(e);n("7f7f");var i=function(){var t=this,e=t._self._c;return e("my-source",t._b({class:["basic-component bc-toggle btn-group-toggle","bc-span","bc-layout-"+t.layout],attrs:{options:t.options,"data-toggle":"buttons",tag:"div"},scopedSlots:t._u([{key:"data",fn:function(n){var i=n.options;return[e("b-form-group",{class:["text-"+t.size],attrs:{label:t.name,size:t.size,"label-for":"'fmg-' + inputId"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.ariaDescribedby;return[e("b-form-radio-group",{attrs:{id:"btn-radios-2",options:i,"html-field":"label","text-field":"value","aria-describedby":o,"button-variant":t.buttonVariant,name:"radio-btn-outline",buttons:"",size:t.size},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})]}}],null,!0)})]}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},"my-source",t.$attrs,!1))},o=[],s=n("ebba"),a=0,l={name:"button-radio-group",components:{MySource:s["default"]},props:{layout:{type:String,default:"default",description:"ex : flushed"},options:{description:'Radio options. Should be an array of objects {value: "", label: ""}'},value:{description:"Radio value"},name:{type:String,description:"Label value"},buttonVariant:{type:[String,Object],default:"outline-primary",description:"Inner button css classes"},size:{type:String,description:"Size xs,sm/lg/xl"}},data:function(){return{focused:!1,inputId:++a}},model:{prop:"value",event:"change"},computed:{model:{get:function(){return this.value},set:function(t){console.log("set",t),this.$emit("input",t),this.$emit("change",t)}}},methods:{}},r=l,u=n("2877"),c=Object(u["a"])(r,i,o,!1,null,null,null);e["default"]=c.exports},ab35:function(t,e,n){var i={"./chat_search_tokens.json":["bebe","chunk-2d21b4bc"],"./chat_status.json":["9518","chunk-2d0e5739"],"./config/integration/type_.json":["cda9","chunk-2d22250f"],"./config/integration/type_json.json":["5030","chunk-2d0c732e"],"./config/integration/type_text.json":["7613","chunk-2d0d7237"],"./config/integration/type_wit.json":["1cd5","chunk-2d0b6719"],"./config/integration/types.json":["b79b","chunk-2d210314"],"./contact_types.json":["4bbf","chunk-2d0cc068"],"./countries.json":["3ab4","chunk-2d0c4816"],"./hsm/message_category_types.json":["7876","chunk-2d0d7a76"],"./hsm/message_format_types.json":["e84d","chunk-2d226359"],"./industries.json":["aeb3","chunk-2d21402b"],"./languages.json":["9726","chunk-2d0e5ed8"]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id="ab35",t.exports=o},ebba:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e(t.tag,{tag:"component"},[t._t("data",(function(){return[t._v("\n        "+t._s(t.myDisplay)+"\n    ")]}),null,t.model)],2)},o=[],s=(n("a481"),n("96cf"),n("3b8d")),a=(n("28a5"),n("6b54"),n("75fc")),l=(n("7f7f"),{components:{},props:{options:{default:"/options",description:"examples;- getx:RelativeGetXUrl,dispatch:DispatchableEventName,data:PathNameIn@data"},emptyDisplay:{type:String,default:null},invalidDisplay:{type:String,default:null},optionKey:{type:String,default:"key"},optionLabel:{type:String,default:"label"},value:{default:null},selectDefault:{},filter:{},tag:{type:String,default:"span"}},data:function(){return{model:{options:[],selected:null}}},computed:{myDisplay:function(){var t,e;return null===(t=this.model)||void 0===t||null===(e=t.selected)||void 0===e?void 0:e.label}},watch:{value:function(t,e){this.valueOnChange(t,e)},options:function(t,e){this.loadOptions()}},mounted:function(){this.loadOptions()},methods:{valueOnChange:function(t,e){this.selectModelValue()},selectModelValue:function(){for(var t in this.model.selected=null,this.model.options)this.model.options[t].value==this.value&&(this.model.selected=this.model.options[t]);var e=this.model.selected;void 0!==this.model.selected&&null!==this.model.selected||(this.selectDefault&&1==this.selectDefault&&this.model.options[0]?(this.model.selected=this.model.options[0],this.onChange(this.model.selected,e)):this.invalidDisplay&&(this.model.selected={label:this.invalidDisplay,value:this.value},this.onChange(this.model.selected,e))),this.$emit("option",this.model.selected)},fromOptions:function(t){var e=this,n=!1;if(t&&t.map||console.error("options",t),this.model.options=t.map((function(t){if("string"==typeof t||"number"==typeof t)return{value:t,label:t,item:t};if(null===t||void 0===t)return n=!0,{value:t,label:e.emptyDisplay||e.placeholder,item:t};var i=e.$formatters.any(t[e.optionKey],t.id,t.key,t.code,t.value,t.label,t.name),o=t[e.optionLabel]||t.name||t.label||t.value||t.code||t.key||t.id;return{value:i,label:o||(null===i||void 0===i?e.emptyDisplay||e.placeholder:""),item:t,prefixClass:t.prefixClass||t.icon}})),!n&&e.emptyDisplay&&(this.model.options=[{value:null,label:this.emptyDisplay,item:null}].concat(Object(a["a"])(this.model.options))),this.filter){var i=[];"[object Array]"===Object.prototype.toString.call(this.filter)?i=Object(a["a"])(this.filter):"[object Object]"===Object.prototype.toString.call(this.filter)&&(i=[this.filter]),this.model.options=this.model.options.filter((function(t){return i.some((function(e){for(var n in e){var i=e[n],o=!1;0===n.indexOf("!!")&&(n=n.substr(2),o=!0);var s=n.split("."),a=s[1]?t.item[s[0]]?t.item[s[0]][s[1]]:void 0:t.item[n];if(o)return i?void 0!==a&&null!==a:void 0===a||null===a;if(i!==a)return!1}return!0}))}))}this.selectModelValue()},loadOptions:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,o,s,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.options||"string"!=typeof this.options||!/^(data\:|@data\/)/.test(this.options)){t.next=8;break}return e=this.options.split("#"),t.next=4,n("ab35")("./"+e[0].replace(/^(data:|@data\/)/,"")+".json");case 4:i=t.sent,this.fromOptions(i.options),t.next=25;break;case 8:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("getx:")){t.next=16;break}return o=this.options.replace("getx:",""),t.next=12,this.$service.getX(o);case 12:s=t.sent,this.fromOptions(s.results?s.results:s),t.next=25;break;case 16:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("dispatch:")){t.next=24;break}return a=this.options.replace("dispatch:",""),t.next=20,this.$store.dispatch(a);case 20:l=t.sent,this.fromOptions(l.results?l.results:l),t.next=25;break;case 24:this.options&&this.fromOptions(this.options);case 25:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onChange:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,n){var i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e!=n&&(s=null===(i=this.model)||void 0===i||null===(o=i.selected)||void 0===o?void 0:o.value,this.$emit("input",s),this.$emit("change",s));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),onSearch:function(t,e){this.$emit("search",t,e)},selected:function(){var t;return null===(t=this.model)||void 0===t?void 0:t.selected},option:function(){return this.selected()}}}),r=l,u=n("2877"),c=Object(u["a"])(r,i,o,!1,null,null,null);e["default"]=c.exports}}]);