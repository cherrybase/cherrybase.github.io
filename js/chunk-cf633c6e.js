(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf633c6e"],{1027:function(t,e,n){},"243c":function(t,e,n){},"2eb3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"dropdown"==t.type?n("v-select",t._b({staticStyle:{"min-width":"220px"},attrs:{options:t.model.options,filterable:t.filterable,searchable:t.searchable,placeholder:t.placeholder,clearable:t.clearable},on:{search:t.onSearch,input:t.onChange},scopedSlots:t._u([{key:"selected-option",fn:function(e){return[t.selectedPrefixClass?n("span",{class:[t.selectedPrefixClass,"mr-1"]},[t._v(" ")]):t._e(),e.prefixClass?n("span",{class:[e.prefixClass,"mr-1"]},[t._v(" ")]):t._e(),t._v(t._s(e.label)+"\n    ")]}},{key:"option",fn:function(e){return[e.prefixClass?n("span",{class:[e.prefixClass,"mr-1"]},[t._v(" ")]):t._e(),t._v(t._s(e.label)+"\n    ")]}},{key:"open-indicator",fn:function(e){var a=e.attributes;return[n("span",t._b({staticClass:"fa fa-caret-down"},"span",a,!1))]}},t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0),model:{value:t.model.value,callback:function(e){t.$set(t.model,"value",e)},expression:"model.value"}},"v-select",t.$attrs,!1)):n("span",[t.model.value?t._t("selected-option",(function(){return[t.selectedPrefixClass?n("span",{class:t.selectedPrefixClass},[t._v(" ")]):t._e(),t._v(t._s(t.model.value.label)+"\n    ")]}),null,{option:t.model.value}):t._e()],2)},s=[],i=(n("a481"),n("96cf"),n("3b8d")),o=(n("6b54"),n("75fc")),r=(n("7f7f"),n("4a7a")),l=n.n(r),c=(n("6dfc"),n("b012")),u=n.n(c),p={components:{vSelect:l.a},props:{options:{default:"/options",description:"examples;- getx:RelativeGetXUrl,dispatch:DispatchableEventName,data:PathNameIn@data"},searchable:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},emptyDisplay:{type:String,default:null},placeholder:{type:String,default:""},optionKey:{type:String,default:"key"},optionLabel:{type:String,default:"label"},value:{default:null},selectDefault:{},selectedPrefixClass:{},filter:{},type:{type:String,default:"dropdown"}},data:function(){return{model:{options:[],value:null,sender:""}}},computed:{myOptions:function(){}},watch:{value:function(t,e){this.valueOnChange(t,e)},options:function(t,e){this.loadOptions()}},created:function(){this.onOption=u()(this.onOption)},mounted:function(){this.loadOptions()},methods:{valueOnChange:function(t,e){this.selectModelValue()},selectModelValue:function(){for(var t in this.model.value=null,this.model.options)this.model.options[t].value==this.value&&(this.model.value=this.model.options[t]);!this.selectDefault||void 0!==this.model.value&&null!==this.model.value||1==this.selectDefault&&this.model.options[0]&&(this.model.value=this.model.options[0],this.onChange()),this.onOption()},fromOptions:function(t){var e=this,n=!1;if(t&&t.map||console.error("options",t),this.model.options=t.map((function(t){if("string"==typeof t||"number"==typeof t)return{value:t,label:t,item:t};if(null===t||void 0===t)return n=!0,{value:t,label:e.emptyDisplay||e.placeholder,item:t};var a=t[e.optionKey]||t.id||t.key||t.code||t.value||t.label||t.name,s=t[e.optionLabel]||t.name||t.label||t.value||t.code||t.key||t.id;return{value:a,label:s||(null===a||void 0===a?e.emptyDisplay||e.placeholder:""),item:t,prefixClass:t.prefixClass||t.icon}})),!n&&e.emptyDisplay&&(this.model.options=[{value:null,label:this.emptyDisplay,item:null}].concat(Object(o["a"])(this.model.options))),this.filter){var a=[];"[object Array]"===Object.prototype.toString.call(this.filter)?a=Object(o["a"])(this.filter):"[object Object]"===Object.prototype.toString.call(this.filter)&&(a=[this.filter]),this.model.options=this.model.options.filter((function(t){return a.some((function(e){for(var n in e)if(!0===e[n]){if(!t.item[n])return!1}else if(e[n]!==t.item[n])return!1;return!0}))}))}this.selectModelValue()},loadOptions:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("data:")){t.next=7;break}return t.next=3,n("ab35")("./"+this.options.replace("data:","")+".json");case 3:e=t.sent,this.fromOptions(e.options),t.next=24;break;case 7:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("getx:")){t.next=15;break}return a=this.options.replace("getx:",""),t.next=11,this.$service.getX(a);case 11:s=t.sent,this.fromOptions(s.results?s.results:s),t.next=24;break;case 15:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("dispatch:")){t.next=23;break}return i=this.options.replace("dispatch:",""),t.next=19,this.$store.dispatch(i);case 19:o=t.sent,this.fromOptions(o.results?o.results:o),t.next=24;break;case 23:this.options&&this.fromOptions(this.options);case 24:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onChange:function(){var t=this.model.value?this.model.value.value:null;this.$emit("input",t),this.$emit("change",t)},onSearch:function(t,e){this.$emit("search",t,e)},onOption:function(t,e){this.$emit("option",this.model.value)},option:function(){return this.model.value}}},f=p,d=(n("6cd3"),n("2877")),h=Object(d["a"])(f,a,s,!1,null,null,null);e["a"]=h.exports},6704:function(t,e,n){"use strict";n("7907")},"6ad2":function(t,e,n){"use strict";n("243c")},"6cd3":function(t,e,n){"use strict";n("dbda")},"75fc":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n("a745"),s=n.n(a),i=n("db2a");function o(t){if(s()(t))return Object(i["a"])(t)}var r=n("67bb"),l=n.n(r),c=n("5d58"),u=n.n(c),p=n("774e"),f=n.n(p);function d(t){if("undefined"!==typeof l.a&&null!=t[u.a]||null!=t["@@iterator"])return f()(t)}var h=n("e630");function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t){return o(t)||d(t)||Object(h["a"])(t)||m()}},7907:function(t,e,n){},"88b4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.templateId?n("MyVSelect",t._b({ref:"channelSelect",staticClass:"w-100 text-black",staticStyle:{"min-width":"220px"},attrs:{hidden:"",options:t.src,searchable:!1,clearable:!0,placeholder:"Select Template"},on:{option:t.optionReady,input:t.clickAction},model:{value:t.templateId,callback:function(e){t.templateId=e},expression:"templateId"}},"MyVSelect",t.$attrs,!1)):t._e(),t.templateConfig?n("div",{staticClass:"message-preview w-100",class:t.local_format},["WHATSAPP"==t.format?n("span",[n("div",{staticClass:"message-text"},[t.templateConfig.attachments&&t.templateConfig.attachments[0]?n("div",{class:["message-attachment-inline","attachment-"+t.templateConfig.attachments[0].mediaType]}):t._e(),t.content.header?n("div",{staticClass:"message-title"},[t._v(t._s(t.content.header))]):t._e(),n("div",{staticClass:"message-body"},[t._v(t._s(t.content.text))]),n("div",{staticClass:"message-footer"},[t._v(t._s(t.templateConfig.footer))])]),t.content.options?n("div",{staticClass:"message-buttons"},t._l(t.content.options.buttons,(function(e,a){return n("div",{key:a,staticClass:"message-button"},["URL"==e.type?n("i",{staticClass:"fa fa-external-link-alt"},[t._v(" ")]):t._e(),"PHONE_NUMBER"==e.type?n("i",{staticClass:"fa fa-phone-alt"},[t._v(" ")]):t._e(),t._v(t._s(e.label)+"\n            ")])})),0):t._e()]):n("span",[n("div",{staticClass:"message-text"},[t.content.header?n("div",{staticClass:"message-title"},[t._v(t._s(t.content.header))]):t._e(),n("div",[t._v(t._s(t.content.text))])]),t.content.options?n("div",{staticClass:"message-buttons"},t._l(t.content.options.buttons,(function(e,a){return n("div",{key:a,staticClass:"message-button"},["URL"==e.type?n("i",{staticClass:"fa fa-external-link-alt"}):t._e(),t._v(t._s(e.label)+"\n            ")])})),0):t._e()])]):t._e()],1)},s=[],i=(n("28a5"),n("3ef3")),o=n("9dbb"),r=n.n(o),l=n("2eb3"),c={contact:{name:"John Doe",phone:"919876543210",email:"John.Doe@company.com"}},u={name:"MessagePreview",components:{MyVSelect:l["a"]},data:function(){return{templateConfig:null}},computed:{content:function(){if(!this.templateConfig)return{text:"",options:{}};var t=this.templateConfig.template,e=this.templateConfig.header||this.templateConfig.title;try{var n,a,s,o;t=r.a.render(this.templateConfig.template,Object.assign(c,{data:null===(n=this.templateConfig)||void 0===n?void 0:n.data,contact:(null===this||void 0===this||null===(a=this.model)||void 0===a?void 0:a.contact)||c.contact})),e=r.a.render(e,Object.assign(c,{data:null===(s=this.templateConfig)||void 0===s?void 0:s.data,contact:(null===this||void 0===this||null===(o=this.model)||void 0===o?void 0:o.contact)||c.contact}))}catch(p){}var l=(t||"").split("---options---"),u=i["a"].message_form_options(i["a"].map_from_string(l[1]));return{text:l[0],header:e,options:Object.assign({},u,this.templateConfig.options,{buttons:(u.buttons||[]).concat(this.templateConfig.options.buttons||[])})}},options:function(){},local_format:function(){return this.format||"WHATSAPP"}},mounted:function(){this.templateConfig=this.template},methods:{clickAction:function(){},optionReady:function(t){console.log("Option",t),t&&(this.templateConfig=t.item)}},props:{icon:String,heading:String,subheading:String,actions:Array,template:{type:Object},templateId:{type:String},src:{type:String,default:"getx:/api/options/tmpl/hsm"},format:{type:String,default:"WHATSAPP"},model:{}},watch:{template:function(){this.templateConfig=this.template}}},p=u,f=(n("6ad2"),n("2877")),d=Object(f["a"])(p,a,s,!1,null,null,null);e["a"]=d.exports},"9dbb":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function n(t){return"function"===typeof t}function a(t){return e(t)?"array":typeof t}function s(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(t,e){return null!=t&&"object"===typeof t&&e in t}function o(t,e){return null!=t&&"object"!==typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var r=RegExp.prototype.test;function l(t,e){return r.call(t,e)}var c=/\S/;function u(t){return!l(c,t)}var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function f(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return p[t]}))}var d=/\s*/,h=/\s+/,m=/\s*=/,v=/\s*\}/,b=/#|\^|\/|>|\{|&|=|!/;function g(t,n){if(!t)return[];var a,i,o,r=!1,l=[],c=[],p=[],f=!1,g=!1,C="",k=0;function S(){if(f&&!g)while(p.length)delete c[p.pop()];else p=[];f=!1,g=!1}function O(t){if("string"===typeof t&&(t=t.split(h,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);a=new RegExp(s(t[0])+"\\s*"),i=new RegExp("\\s*"+s(t[1])),o=new RegExp("\\s*"+s("}"+t[1]))}O(n||x.tags);var j,T,P,A,D,E,M=new w(t);while(!M.eos()){if(j=M.pos,P=M.scanUntil(a),P)for(var $=0,I=P.length;$<I;++$)A=P.charAt($),u(A)?(p.push(c.length),C+=A):(g=!0,r=!0,C+=" "),c.push(["text",A,j,j+1]),j+=1,"\n"===A&&(S(),C="",k=0,r=!1);if(!M.scan(a))break;if(f=!0,T=M.scan(b)||"name",M.scan(d),"="===T?(P=M.scanUntil(m),M.scan(m),M.scanUntil(i)):"{"===T?(P=M.scanUntil(o),M.scan(v),M.scanUntil(i),T="&"):P=M.scanUntil(i),!M.scan(i))throw new Error("Unclosed tag at "+M.pos);if(D=">"==T?[T,P,j,M.pos,C,k,r]:[T,P,j,M.pos],k++,c.push(D),"#"===T||"^"===T)l.push(D);else if("/"===T){if(E=l.pop(),!E)throw new Error('Unopened section "'+P+'" at '+j);if(E[1]!==P)throw new Error('Unclosed section "'+E[1]+'" at '+j)}else"name"===T||"{"===T||"&"===T?g=!0:"="===T&&O(P)}if(S(),E=l.pop(),E)throw new Error('Unclosed section "'+E[1]+'" at '+M.pos);return _(y(c))}function y(t){for(var e,n,a=[],s=0,i=t.length;s<i;++s)e=t[s],e&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(a.push(e),n=e));return a}function _(t){for(var e,n,a=[],s=a,i=[],o=0,r=t.length;o<r;++o)switch(e=t[o],e[0]){case"#":case"^":s.push(e),i.push(e),s=e[4]=[];break;case"/":n=i.pop(),n[5]=e[2],s=i.length>0?i[i.length-1][4]:a;break;default:s.push(e)}return a}function w(t){this.string=t,this.tail=t,this.pos=0}function C(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function k(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}w.prototype.eos=function(){return""===this.tail},w.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},w.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},C.prototype.push=function(t){return new C(t,this)},C.prototype.lookup=function(t){var e,a=this.cache;if(a.hasOwnProperty(t))e=a[t];else{var s,r,l,c=this,u=!1;while(c){if(t.indexOf(".")>0){s=c.view,r=t.split("."),l=0;while(null!=s&&l<r.length)l===r.length-1&&(u=i(s,r[l])||o(s,r[l])),s=s[r[l++]]}else s=c.view[t],u=i(c.view,t);if(u){e=s;break}c=c.parent}a[t]=e}return n(e)&&(e=e.call(this.view)),e},k.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},k.prototype.parse=function(t,e){var n=this.templateCache,a=t+":"+(e||x.tags).join(":"),s="undefined"!==typeof n,i=s?n.get(a):void 0;return void 0==i&&(i=g(t,e),s&&n.set(a,i)),i},k.prototype.render=function(t,e,n,a){var s=this.getConfigTags(a),i=this.parse(t,s),o=e instanceof C?e:new C(e,void 0);return this.renderTokens(i,o,n,t,a)},k.prototype.renderTokens=function(t,e,n,a,s){for(var i,o,r,l="",c=0,u=t.length;c<u;++c)r=void 0,i=t[c],o=i[0],"#"===o?r=this.renderSection(i,e,n,a,s):"^"===o?r=this.renderInverted(i,e,n,a,s):">"===o?r=this.renderPartial(i,e,n,s):"&"===o?r=this.unescapedValue(i,e):"name"===o?r=this.escapedValue(i,e,s):"text"===o&&(r=this.rawValue(i)),void 0!==r&&(l+=r);return l},k.prototype.renderSection=function(t,a,s,i,o){var r=this,l="",c=a.lookup(t[1]);function u(t){return r.render(t,a,s,o)}if(c){if(e(c))for(var p=0,f=c.length;p<f;++p)l+=this.renderTokens(t[4],a.push(c[p]),s,i,o);else if("object"===typeof c||"string"===typeof c||"number"===typeof c)l+=this.renderTokens(t[4],a.push(c),s,i,o);else if(n(c)){if("string"!==typeof i)throw new Error("Cannot use higher-order sections without the original template");c=c.call(a.view,i.slice(t[3],t[5]),u),null!=c&&(l+=c)}else l+=this.renderTokens(t[4],a,s,i,o);return l}},k.prototype.renderInverted=function(t,n,a,s,i){var o=n.lookup(t[1]);if(!o||e(o)&&0===o.length)return this.renderTokens(t[4],n,a,s,i)},k.prototype.indentPartial=function(t,e,n){for(var a=e.replace(/[^ \t]/g,""),s=t.split("\n"),i=0;i<s.length;i++)s[i].length&&(i>0||!n)&&(s[i]=a+s[i]);return s.join("\n")},k.prototype.renderPartial=function(t,e,a,s){if(a){var i=this.getConfigTags(s),o=n(a)?a(t[1]):a[t[1]];if(null!=o){var r=t[6],l=t[5],c=t[4],u=o;0==l&&c&&(u=this.indentPartial(o,c,r));var p=this.parse(u,i);return this.renderTokens(p,e,a,u,s)}}},k.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},k.prototype.escapedValue=function(t,e,n){var a=this.getConfigEscape(n)||x.escape,s=e.lookup(t[1]);if(null!=s)return"number"===typeof s&&a===x.escape?String(s):a(s)},k.prototype.rawValue=function(t){return t[1]},k.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"===typeof t?t.tags:void 0},k.prototype.getConfigEscape=function(t){return t&&"object"===typeof t&&!e(t)?t.escape:void 0};var x={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){S.templateCache=t},get templateCache(){return S.templateCache}},S=new k;return x.clearCache=function(){return S.clearCache()},x.parse=function(t,e){return S.parse(t,e)},x.render=function(t,e,n,s){if("string"!==typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+a(t)+'" was given as the first argument for mustache#render(template, view, partials)');return S.render(t,e,n,s)},x.escape=f,x.Scanner=w,x.Context=C,x.Writer=k,x}))},ab35:function(t,e,n){var a={"./countries.json":["3ab4","chunk-2d0c4816"],"./industries.json":["aeb3","chunk-2d21402b"],"./languages.json":["9726","chunk-2d0e5ed8"],"./waba/message_categories.json":["f3c4","chunk-2d22ca74"],"./waba/message_types.json":["31c4","chunk-2d0b9405"]};function s(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],s=e[0];return n.e(e[1]).then((function(){return n.t(s,3)}))}s.keys=function(){return Object.keys(a)},s.id="ab35",t.exports=s},b012:function(t,e){function n(t,e,n){var a,s,i,o,r;function l(){var c=Date.now()-o;c<e&&c>=0?a=setTimeout(l,e-c):(a=null,n||(r=t.apply(i,s),i=s=null))}null==e&&(e=100);var c=function(){i=this,s=arguments,o=Date.now();var c=n&&!a;return a||(a=setTimeout(l,e)),c&&(r=t.apply(i,s),i=s=null),r};return c.clear=function(){a&&(clearTimeout(a),a=null)},c.flush=function(){a&&(r=t.apply(i,s),i=s=null,clearTimeout(a),a=null)},c}n.debounce=n,t.exports=n},b82a:function(t,e,n){"use strict";n("1027")},dbda:function(t,e,n){},e740:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,actions:t.actions},on:{action:t.onAction}}),n("ValidationObserver",{ref:"session_form",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[n("div",{staticClass:"row"},[n("b-card",{staticClass:"col-md-4"},[n("ValidationProvider",{staticClass:"form-row",attrs:{rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("label",[t._v("Account Details")]),n("v-select",{staticClass:"w-100",attrs:{options:t.input.lane.values,searchable:!1,clearable:!1,placeholder:"Select Account"},scopedSlots:t._u([{key:"selected-option",fn:function(e){return[n("div",{staticClass:"user_assignment-selected"},[n("span",{staticClass:"contact_type fab",class:t.MyDict.social[e.contactType]}),t._v("  "+t._s(e.lane))])]}},{key:"open-indicator",fn:function(e){var a=e.attributes;return[n("span",t._b({staticClass:"fa fa-caret-down"},"span",a,!1))]}},{key:"option",fn:function(e){var a=e.contactType,s=e.lane;return[n("span",{staticClass:"contact_type fab",class:t.MyDict.social[a]}),t._v("  "+t._s(s)+"\n                              ")]}}],null,!0),model:{value:t.input.lane.selected,callback:function(e){t.$set(t.input.lane,"selected",e)},expression:"input.lane.selected"}})]}}],null,!0)}),n("br"),n("ValidationProvider",{staticClass:"form-row",attrs:{rules:"required|phoneML",vid:"input_contact_number",name:"Contact Number",mode:"lazy"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("label",[t._v("Contacts")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input.contacts,expression:"input.contacts"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.input.contacts},on:{input:function(e){e.target.composing||t.$set(t.input,"contacts",e.target.value)}}}),n("span",{staticClass:"v-input-error"},[t._v(t._s(e.errors[0]))])]}}],null,!0)})],1),n("b-card",{staticClass:"col-md-4 session-list"},[n("ValidationProvider",{staticClass:"form-row",attrs:{rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("label",[t._v("Template")]),n("v-select",{staticClass:"w-100",attrs:{options:t.input.templates.values,searchable:!1,clearable:!1,placeholder:"Select Account"},scopedSlots:t._u([{key:"selected-option",fn:function(e){return[t._v("\n                                  "+t._s(e.name)+"    \n                              ")]}},{key:"open-indicator",fn:function(e){var a=e.attributes;return[n("span",t._b({staticClass:"fa fa-caret-down"},"span",a,!1))]}},{key:"option",fn:function(e){var a=e.category,s=e.name;return[n("small",{},[t._v(t._s(a))]),t._v("   "+t._s(s)+"\n                              ")]}}],null,!0),model:{value:t.input.templates.selected,callback:function(e){t.$set(t.input.templates,"selected",e)},expression:"input.templates.selected"}})]}}],null,!0)}),n("br"),n("ValidationProvider",{staticClass:"form-row",attrs:{rules:"required|phone",vid:"input_contact_number",name:"Contact Number"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("label",[t._v("Message Preview")]),t.input.templates.selected?n("TemplatePreview",{attrs:{template:t.input.templates.selected}}):t._e(),n("span",{staticClass:"v-input-error"},[t._v(t._s(e.errors[0]))])]}}],null,!0)}),n("br"),n("b-form-row",[n("button",{staticClass:"form-control btn btn-primary",attrs:{name:"password",id:"examplePassword",disabled:a},on:{click:t.sendBulk}},[t._v("Send")])])],1)],1)]}}])})],1)},s=[],i=(n("4917"),n("7f7f"),n("96cf"),n("3b8d")),o=(n("28a5"),n("88b4")),r=n("d166"),l=n("3ef3"),c=n("e492"),u=n("9dbb"),p=n.n(u),f=n("ecee"),d=n("c074"),h=n("ad3d"),m=n("4a7a"),v=n.n(m);n("6dfc");function b(){return{code:"",dept_email:"",id:null,name:""}}f["c"].add(d["B"],d["A"],d["r"]);var g={contact:{name:"John Doe",phone:"919876543210",email:"John.Doe@company.com"}},y={components:{PageTitle:c["a"],"font-awesome-icon":h["a"],vSelect:v.a,TemplatePreview:o["a"]},data:function(){return{MyFlags:r["c"],MyDict:r["b"],MyConst:r["a"],heading:"Send Bulk",subheading:"Send bulk Messages to conatcts",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-file-import",actions:[{label:"View Past Jobs",name:"BULK_PUSH_JOBS",link:"/app/moderate/bulk-push-jobs",type:"link"}],input:{lane:{values:[],selected:[],sender:""},templates:{values:[],selected:null,sender:""},contacts:""},table:{fields:[{key:"actions",label:"Action"},{key:"startSessionStamp",label:"Start@"},{key:"closeSessionStamp",label:"Closed@"}],items:[],perPage:25,currentPage:1,rows:0},meta:{sender:null,contact:null,contactMobile:null,contactName:null,lane:null},newItem:b(),modelName:"MODAL_ADD_TEAM",sample:g}},computed:{preview:function(t){if(!this.input.templates.selected||!this.input.templates.selected.template)return{preview:"",text:""};var e=this.input.templates.selected.template.split("---options---");return{text:p.a.render(e[0],this.sample),options:l["a"].message_form_options(l["a"].map_from_string(e[1]))}}},created:function(t){this.loadLanes(),this.loadTemplates()},methods:{loadLanes:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.get("/api/options/channels");case 2:e=t.sent,this.input.lane.values=e.results.filter((function(t){return"WHATSAPP"==t.contactType}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadTemplates:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.get("/api/tmpl/pushtemplate");case 2:e=t.sent,this.input.templates.values=e.results;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onAction:function(t){switch(t.name){case"IMPORT_CHAT":this.$refs.file.click();break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",t);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",t)}},sendBulk:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.post("/api/message/bulk/push/send",{message:this.preview.text,subject:this.input.lane.selected.title,templateId:this.input.templates.selected.id,contact:{contactType:this.input.lane.selected.contactType,lane:this.input.lane.selected.lane,channel:this.input.lane.selected.channel},to:this.input.contacts.match(/[^\r\n\,]+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}))});case 2:t.sent,this.$router.push("/app/moderate/bulk-push-jobs");case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},_=y,w=(n("6704"),n("b82a"),n("2877")),C=Object(w["a"])(_,a,s,!1,null,"aa3a184a",null);e["default"]=C.exports}}]);