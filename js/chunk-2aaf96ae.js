(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2aaf96ae"],{"0fcc":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,actions:e.actions},on:{action:e.onAction}}),n("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[n("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:e.teams,fields:e.fields,"tbody-tr-class":e.rowClass},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.deleteReps(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"trash",title:"Delete"}})],1),e._v("\n                   \n                  "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.editReps(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"eye",title:"View"}})],1)]}}])})],1),e.newItem?n("b-modal",{attrs:{id:e.modelName,title:(e.newItem.id?"Edit":"Add")+" Quick Reply ",size:"xl"},on:{hidden:e.cancelReps},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"text-center form-group"},[n("button",{staticClass:"btn btn-warning",on:{click:e.cancelReps}},[e._v("Cancel")]),e._v("\n \n                        "),e.newItem.id?n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isChanged},on:{click:e.creatQuickReps}},[e._v("Update")]):e._e(),e._v("\n \n                        "),e.newItem.id?e._e():n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isChanged},on:{click:e.creatQuickReps}},[e._v("Create")])])]},proxy:!0}],null,!1,2638331502)},[n("ValidationObserver",{ref:"form"},[n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Category")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.category,expression:"newItem.category"}],staticClass:"form-control",attrs:{name:"category",id:"examplePassword",placeholder:"greeting",type:"text"},domProps:{value:e.newItem.category},on:{input:function(t){t.target.composing||e.$set(e.newItem,"category",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,1801807966)})],1),n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.title,expression:"newItem.title"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"Hello User",type:"text"},domProps:{value:e.newItem.title},on:{input:function(t){t.target.composing||e.$set(e.newItem,"title",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,3637740269)})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"position-relative form-group col-md-6"},[n("ValidationProvider",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Template")]),n("text-complete",{attrs:{placeholder:"eg: Hello {{contact.name}}",rows:12,areaClass:"form-control",strategies:e.strategies},model:{value:e.newItem.template,callback:function(t){e.$set(e.newItem,"template",t)},expression:"newItem.template"}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,2172186166)})],1),n("div",{staticClass:"position-relative form-group col-md-6"},[n("label",{attrs:{for:"examplePassword"}},[e._v("Template Preview")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.templatePreview,expression:"templatePreview"}],staticClass:"form-control",attrs:{name:"template",id:"examplePassword",rows:"10",readonly:"readonly",type:"text"},domProps:{value:e.templatePreview},on:{input:function(t){t.target.composing||(e.templatePreview=t.target.value)}}})])])])],1):e._e()],1)},r=[],a=(n("7f7f"),n("96cf"),n("3b8d")),o=(n("f559"),n("ac6a"),n("e492")),s=n("ecee"),c=n("c074"),l=n("ad3d"),u=n("9dbb"),p=n.n(u),d=n("3ef3"),h=n("bb0b");function f(){return{category:"",title:"",template:""}}s["c"].add(c["B"],c["A"],c["t"],c["j"]);var m={contact:{name:"John Doe",phone:"919876543210",email:"John.Doe@company.com"}},v=d["a"].keys(m),g={components:{PageTitle:o["a"],"font-awesome-icon":l["a"],TextComplete:h["a"]},data:function(){return{heading:"Quick Replies",subheading:"are prompt suggestion shown to Agent for Quick response.",icon:"pe-7s-browser icon-gradient bg-tempting-azure fa fa-reply-all",actions:[{label:"Add Quick Reply",icon:"plus",name:"ADD_ITEM"}],fields:[{key:"category",label:"Category"},{key:"title",label:"Title"},{key:"actions",label:"Actions"}],newItem:f(),sample:m,modelName:"MODAL_ADD_QUICK_REPLIES",strategies:[{match:/(^|\s)\{\{([a-z0-9+\-\_\.]*)$/,search:function(e,t){t(v.filter((function(t){return t.startsWith(e)})).slice(0,10))},template:function(e){return e},replace:function(e){return"$1{{"+e+"}} "}}]}},computed:{teams:function(e){var t=this;return(this.$store.getters.StateQReps||[]).map((function(e){return e.message=p.a.render(e.template||e.message||e.title||"",t.sample)||e.title,e}))},templatePreview:function(e){if(!this.newItem.template)return this.newItem.template;try{return p.a.render(this.newItem.template,this.sample)}catch(t){return this.newItem.template}},isChanged:function(e){return this.oldHash!==JSON.stringify(this.newItem)}},created:function(e){this.loadQReps()},methods:{loadQReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetQuickReps");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),creatQuickReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate();case 2:if(t=e.sent,!0!==t){e.next=9;break}return e.next=6,this.$store.dispatch("CreatQuickReps",this.newItem);case 6:this.newItem=f(),this.$refs.form.reset(),this.onAction({name:"CANCEL"});case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeleteQuickReps",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=f(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=f(),this.newItem.id=t.id,this.newItem.category=t.category,this.newItem.title=t.title,this.newItem.message=t.message,this.newItem.template=t.template,this.onAction({name:"EDIT_ITEM"});case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),rowClass:function(e,t){if(e&&"row"===t)return this.newItem.id==e.id?"table-success":void 0},onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}}}},w=g,y=n("2877"),b=Object(y["a"])(w,i,r,!1,null,null,null);t["default"]=b.exports},"386d":function(e,t,n){"use strict";var i=n("cb7c"),r=n("83a1"),a=n("5f1b");n("214f")("search",1,(function(e,t,n,o){return[function(n){var i=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,i):new RegExp(n)[t](String(i))},function(e){var t=o(n,e,this);if(t.done)return t.value;var s=i(e),c=String(this),l=s.lastIndex;r(l,0)||(s.lastIndex=0);var u=a(s,c);return r(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},"5dbc":function(e,t,n){var i=n("d3f4"),r=n("8b97").set;e.exports=function(e,t,n){var a,o=t.constructor;return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&i(a)&&r&&r(e,a),e}},"62fa":function(e,t,n){},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"8b97":function(e,t,n){var i=n("d3f4"),r=n("cb7c"),a=function(e,t){if(r(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return a(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:a}},"8f17":function(e,t,n){"use strict";n("62fa")},"9dbb":function(e,t,n){(function(t,n){e.exports=n()})(0,(function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"===typeof e}function i(e){return t(e)?"array":typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function a(e,t){return null!=e&&"object"===typeof e&&t in e}function o(e,t){return null!=e&&"object"!==typeof e&&e.hasOwnProperty&&e.hasOwnProperty(t)}var s=RegExp.prototype.test;function c(e,t){return s.call(e,t)}var l=/\S/;function u(e){return!c(l,e)}var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function d(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return p[e]}))}var h=/\s*/,f=/\s+/,m=/\s*=/,v=/\s*\}/,g=/#|\^|\/|>|\{|&|=|!/;function w(e,n){if(!e)return[];var i,a,o,s=!1,c=[],l=[],p=[],d=!1,w=!1,C="",k=0;function S(){if(d&&!w)while(p.length)delete l[p.pop()];else p=[];d=!1,w=!1}function E(e){if("string"===typeof e&&(e=e.split(f,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);i=new RegExp(r(e[0])+"\\s*"),a=new RegExp("\\s*"+r(e[1])),o=new RegExp("\\s*"+r("}"+e[1]))}E(n||I.tags);var _,R,T,P,N,A,L=new x(e);while(!L.eos()){if(_=L.pos,T=L.scanUntil(i),T)for(var O=0,z=T.length;O<z;++O)P=T.charAt(O),u(P)?(p.push(l.length),C+=P):(w=!0,s=!0,C+=" "),l.push(["text",P,_,_+1]),_+=1,"\n"===P&&(S(),C="",k=0,s=!1);if(!L.scan(i))break;if(d=!0,R=L.scan(g)||"name",L.scan(h),"="===R?(T=L.scanUntil(m),L.scan(m),L.scanUntil(a)):"{"===R?(T=L.scanUntil(o),L.scan(v),L.scanUntil(a),R="&"):T=L.scanUntil(a),!L.scan(a))throw new Error("Unclosed tag at "+L.pos);if(N=">"==R?[R,T,_,L.pos,C,k,s]:[R,T,_,L.pos],k++,l.push(N),"#"===R||"^"===R)c.push(N);else if("/"===R){if(A=c.pop(),!A)throw new Error('Unopened section "'+T+'" at '+_);if(A[1]!==T)throw new Error('Unclosed section "'+A[1]+'" at '+_)}else"name"===R||"{"===R||"&"===R?w=!0:"="===R&&E(T)}if(S(),A=c.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+L.pos);return b(y(l))}function y(e){for(var t,n,i=[],r=0,a=e.length;r<a;++r)t=e[r],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(i.push(t),n=t));return i}function b(e){for(var t,n,i=[],r=i,a=[],o=0,s=e.length;o<s;++o)switch(t=e[o],t[0]){case"#":case"^":r.push(t),a.push(t),r=t[4]=[];break;case"/":n=a.pop(),n[5]=t[2],r=a.length>0?a[a.length-1][4]:i;break;default:r.push(t)}return i}function x(e){this.string=e,this.tail=e,this.pos=0}function C(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function k(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}x.prototype.eos=function(){return""===this.tail},x.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},x.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},C.prototype.push=function(e){return new C(e,this)},C.prototype.lookup=function(e){var t,i=this.cache;if(i.hasOwnProperty(e))t=i[e];else{var r,s,c,l=this,u=!1;while(l){if(e.indexOf(".")>0){r=l.view,s=e.split("."),c=0;while(null!=r&&c<s.length)c===s.length-1&&(u=a(r,s[c])||o(r,s[c])),r=r[s[c++]]}else r=l.view[e],u=a(l.view,e);if(u){t=r;break}l=l.parent}i[e]=t}return n(t)&&(t=t.call(this.view)),t},k.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},k.prototype.parse=function(e,t){var n=this.templateCache,i=e+":"+(t||I.tags).join(":"),r="undefined"!==typeof n,a=r?n.get(i):void 0;return void 0==a&&(a=w(e,t),r&&n.set(i,a)),a},k.prototype.render=function(e,t,n,i){var r=this.getConfigTags(i),a=this.parse(e,r),o=t instanceof C?t:new C(t,void 0);return this.renderTokens(a,o,n,e,i)},k.prototype.renderTokens=function(e,t,n,i,r){for(var a,o,s,c="",l=0,u=e.length;l<u;++l)s=void 0,a=e[l],o=a[0],"#"===o?s=this.renderSection(a,t,n,i,r):"^"===o?s=this.renderInverted(a,t,n,i,r):">"===o?s=this.renderPartial(a,t,n,r):"&"===o?s=this.unescapedValue(a,t):"name"===o?s=this.escapedValue(a,t,r):"text"===o&&(s=this.rawValue(a)),void 0!==s&&(c+=s);return c},k.prototype.renderSection=function(e,i,r,a,o){var s=this,c="",l=i.lookup(e[1]);function u(e){return s.render(e,i,r,o)}if(l){if(t(l))for(var p=0,d=l.length;p<d;++p)c+=this.renderTokens(e[4],i.push(l[p]),r,a,o);else if("object"===typeof l||"string"===typeof l||"number"===typeof l)c+=this.renderTokens(e[4],i.push(l),r,a,o);else if(n(l)){if("string"!==typeof a)throw new Error("Cannot use higher-order sections without the original template");l=l.call(i.view,a.slice(e[3],e[5]),u),null!=l&&(c+=l)}else c+=this.renderTokens(e[4],i,r,a,o);return c}},k.prototype.renderInverted=function(e,n,i,r,a){var o=n.lookup(e[1]);if(!o||t(o)&&0===o.length)return this.renderTokens(e[4],n,i,r,a)},k.prototype.indentPartial=function(e,t,n){for(var i=t.replace(/[^ \t]/g,""),r=e.split("\n"),a=0;a<r.length;a++)r[a].length&&(a>0||!n)&&(r[a]=i+r[a]);return r.join("\n")},k.prototype.renderPartial=function(e,t,i,r){if(i){var a=this.getConfigTags(r),o=n(i)?i(e[1]):i[e[1]];if(null!=o){var s=e[6],c=e[5],l=e[4],u=o;0==c&&l&&(u=this.indentPartial(o,l,s));var p=this.parse(u,a);return this.renderTokens(p,t,i,u,r)}}},k.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},k.prototype.escapedValue=function(e,t,n){var i=this.getConfigEscape(n)||I.escape,r=t.lookup(e[1]);if(null!=r)return"number"===typeof r&&i===I.escape?String(r):i(r)},k.prototype.rawValue=function(e){return e[1]},k.prototype.getConfigTags=function(e){return t(e)?e:e&&"object"===typeof e?e.tags:void 0},k.prototype.getConfigEscape=function(e){return e&&"object"===typeof e&&!t(e)?e.escape:void 0};var I={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){S.templateCache=e},get templateCache(){return S.templateCache}},S=new k;return I.clearCache=function(){return S.clearCache()},I.parse=function(e,t){return S.parse(e,t)},I.render=function(e,t,n,r){if("string"!==typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+i(e)+'" was given as the first argument for mustache#render(template, view, partials)');return S.render(e,t,n,r)},I.escape=d,I.Scanner=x,I.Context=C,I.Writer=k,I}))},a0ec:function(e,t,n){(function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n="undefined"!==typeof window,i=n&&null!=window.mozInnerScreenX;function r(e,r,a){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var o=a&&a.debug||!1;if(o){var s=document.querySelector("#input-textarea-caret-position-mirror-div");s&&s.parentNode.removeChild(s)}var c=document.createElement("div");c.id="input-textarea-caret-position-mirror-div",document.body.appendChild(c);var l=c.style,u=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,p="INPUT"===e.nodeName;l.whiteSpace="pre-wrap",p||(l.wordWrap="break-word"),l.position="absolute",o||(l.visibility="hidden"),t.forEach((function(e){p&&"lineHeight"===e?l.lineHeight=u.height:l[e]=u[e]})),i?e.scrollHeight>parseInt(u.height)&&(l.overflowY="scroll"):l.overflow="hidden",c.textContent=e.value.substring(0,r),p&&(c.textContent=c.textContent.replace(/\s/g," "));var d=document.createElement("span");d.textContent=e.value.substring(r)||".",c.appendChild(d);var h={top:d.offsetTop+parseInt(u["borderTopWidth"]),left:d.offsetLeft+parseInt(u["borderLeftWidth"]),height:parseInt(u["lineHeight"])};return o?d.style.backgroundColor="#aaa":document.body.removeChild(c),h}"undefined"!=typeof e.exports?e.exports=r:n&&(window.getCaretCoordinates=r)})()},aa77:function(e,t,n){var i=n("5ca1"),r=n("be13"),a=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),p=function(e,t,n){var r={},s=a((function(){return!!o[e]()||c[e]()!=c})),l=r[e]=s?t(d):o[e];n&&(r[n]=l),i(i.P+i.F*s,"String",r)},d=p.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},bb0b:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["complete-box",e.boxClass]},[n("textarea",{ref:"textarea",class:["v-textcomplete__inner",e.areaClass],style:e.textareaStyle,attrs:{id:"v-textcomplete-"+e.id,placeholder:e.placeholder,rows:e.rows,name:"textcomplete"},domProps:{value:e.value},on:{input:function(t){return e.updateValue(t.target.value)},focus:e.handleFocus,keydown:e.keyEvent,keyup:e.keyUp}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}],staticClass:"autocomplete transition",attrs:{id:"autocomplete-"+e.id}},[n("ul",e._l(e.list,(function(t,i){return n("li",{class:e.actived.value==t?"active":"",domProps:{innerHTML:e._s(e.template(t))},on:{click:function(n){return e.selectList(t)}}})})),0)])])},a=[],o=(n("386d"),n("a481"),n("4917"),n("ac6a"),n("6b54"),n("c5f6"),"\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n"),s=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function c(e){var t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing"),i=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),r=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width")),a=s.map((function(e){return"".concat(e,":").concat(t.getPropertyValue(e))})).join(";");return{contextStyle:a,paddingSize:i,borderSize:r,boxSizing:n}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i||(i=document.createElement("textarea"),document.body.appendChild(i));var r=c(e),a=r.paddingSize,s=r.borderSize,l=r.boxSizing,u=r.contextStyle;i.setAttribute("style","".concat(u,";").concat(o)),i.value=e.value||e.placeholder||"";var p=i.scrollHeight;"border-box"===l?p+=s:"content-box"===l&&(p-=a),i.value="";var d=i.scrollHeight-a;if(null!==t){var h=d*t;"border-box"===l&&(h=h+a+s),p=Math.max(h,p)}if(null!==n){var f=d*n;"border-box"===l&&(f=f+a+s),p=Math.min(f,p)}return{height:p+"px"}}var u=n("a0ec"),p=n.n(u),d="ENTER",h="UP",f="DOWN",m="OTHER",v="BS",g={methods:{keyEvent:function(e){if(this.showList){var t=this.getCode(e);switch(t){case d:this.actived.value&&(e.preventDefault(),this.emitEnterEvent());break;case h:e.preventDefault(),this.emitMoveEvent(h);break;case f:e.preventDefault(),this.emitMoveEvent(f);break}this.$emit("key-down",e)}},keyUp:function(e){this.$emit("key-up",e)},emitEnterEvent:function(){this.selectList(this.actived.value),this.showList=!1,this.actived.value="",this.actived.index=0},emitMoveEvent:function(e){var t=this.list.length;e==h?this.actived.index=""==this.actived.value||0==this.actived.index?t-1:this.actived.index-1:e==f&&(this.actived.index=""==this.actived.value||this.actived.index==t-1?0:this.actived.index+1),this.actived.value=this.list[this.actived.index]},getCode:function(e){return 8===e.keyCode?v:9===e.keyCode||13===e.keyCode?d:38===e.keyCode?h:40===e.keyCode||83===e.keyCode&&e.shiftKey?f:87===e.keyCode&&e.shiftKey?h:m}}},w={mixins:[g],props:{resize:String,value:String,boxClass:String,areaClass:String,placeholder:String,autosize:{type:[Boolean,Object],default:!1},lineHeight:{type:Number,default:20},strategies:{type:Array,default:function(){return[]}},selectedDefaultFirst:{type:Boolean,default:!0},rows:{type:Number,default:2}},data:function(){return{id:Math.random().toString(36).substr(5),content:this.value,showList:!1,cursor:0,list:[],matched:[],match:"",actived:{value:"",index:0},template:function(){},replace:function(){},textareaCalcStyle:{}}},mounted:function(){this.resizeTextarea()},computed:{textareaStyle:function(){return Object.assign({"line-height":this.lineHeight+"px",resize:this.resize},this.textareaCalcStyle)}},watch:{value:function(){this.change(),this.resizeTextarea()}},methods:{handleFocus:function(e){this.$emit("focus",e)},resizeTextarea:function(){var e=this.autosize;if(e){var t=e.minRows,n=e.maxRows;this.textareaCalcStyle=l(this.$refs.textarea,t,n)}},updateValue:function(e){this.$refs.textarea.value=e,this.$emit("input",e)},change:function(){var e=this,t=this;this.strategies.forEach((function(n){var i=document.getElementById("autocomplete-"+t.id),r=document.getElementById("v-textcomplete-"+t.id),a=r.value.substring(0,r.selectionEnd),o="";if(o=a.match(n.match),null!=o){var s=o[2].replace(/(^\s*)|(\s*$)/g,""),c=t.getCursorPosition(r),l=t.getElementScroll(r),u=p()(r,c),d=u.top+t.lineHeight-l.top,h=u.left+r.offsetLeft,f=document.documentElement.offsetHeight;t.template=n.template,t.match=n.match,t.replace=n.replace,void 0!=n.list&&n.list.length>0&&""==o[2]?t.list=n.list:n.remote?(t.list=[],n.remote(s,(function(e){0!==e.length&&(t.list=e,n.search(s,t.getList),t.showList=!0)}))):n.search(s,t.getList),f-r.getBoundingClientRect().top<t.lineHeight*e.list.length?i.style.top=-t.lineHeight*e.list.length-2*d+"px":i.style.top=d+"px",i.style.left=h+"px",t.matched.push(o)}else t.matched.push(null)}));var n=this.matched.filter((function(e){return null!=e})).length>0;this.showList=!!(n&&this.list.length>0),this.showList||(this.actived.value="",this.actived.index=0),this.selectedDefaultFirst&&(this.actived.value=this.list[0]),this.matched=[]},getElementOffset:function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,i=n.defaultView,r=n.documentElement,a={top:t.top+i.pageYOffset,left:t.left+i.pageXOffset};return r&&(a.top-=r.clientTop,a.left-=r.clientLeft),a},getList:function(e){this.list=e},selectList:function(e){var t=document.getElementById("v-textcomplete-"+this.id),n=this.getCursorPosition(t),i=t.value.substring(0,t.selectionEnd),r=t.value.slice(t.selectionEnd);if(!i.match(this.match))return this.setCaretPosition(t,n),this.showList=!1,this.actived.value="",void(this.actived.index=0);var a=i.replace(this.match,this.replace(e));this.updateValue(a+r),t.focus();var o=a.length;this.setCaretPosition(t,o),this.showList=!1,this.actived.value="",this.actived.index=0},getCursorPosition:function(e){var t=0;if(document.selection){e.focus();var n=document.selection.createRange();n.moveStart("character",-e.value.length),t=n.text.length}else(e.selectionStart||"0"==e.selectionStart)&&(t=e.selectionStart);return t},getElementScroll:function(e){return{top:e.scrollTop,left:e.scrollLeft}},setCaretPosition:function(e,t){if(e.setSelectionRange)e.focus(),setTimeout((function(){return e.setSelectionRange(t,t)}),1);else if(e.createTextRange){var n=e.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",t),n.select()}}}},y=w,b=(n("8f17"),n("2877")),x=Object(b["a"])(y,r,a,!1,null,"e1de4606",null),C=x.exports;t["a"]=C},c5f6:function(e,t,n){"use strict";var i=n("7726"),r=n("69a8"),a=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,p=n("86cc").f,d=n("aa77").trim,h="Number",f=i[h],m=f,v=f.prototype,g=a(n("2aeb")(v))==h,w="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=w?t.trim():d(t,3);var n,i,r,a=t.charCodeAt(0);if(43===a||45===a){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+t}for(var o,c=t.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>r)return NaN;return parseInt(c,i)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof f&&(g?c((function(){v.valueOf.call(n)})):a(n)!=h)?o(new m(y(t)),n,f):y(t)};for(var b,x=n("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;x.length>C;C++)r(m,b=x[C])&&!r(f,b)&&p(f,b,u(m,b));f.prototype=v,v.constructor=f,n("2aba")(i,h,f)}},f559:function(e,t,n){"use strict";var i=n("5ca1"),r=n("9def"),a=n("d2c8"),o="startsWith",s=""[o];i(i.P+i.F*n("5147")(o),"String",{startsWith:function(e){var t=a(this,e,o),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return s?s.call(t,i,n):t.slice(n,n+i.length)===i}})},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);