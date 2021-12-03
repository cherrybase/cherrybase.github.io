(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec15ee82"],{"194a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,actions:e.actions},on:{action:e.onAction}}),n("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[n("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:e.teams,fields:e.fields,"tbody-tr-class":e.rowClass},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.deleteReps(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"trash",title:"Delete"}})],1),e._v("\n               \n              "),n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return e.editReps(t.item,t.index,n.target)}}},[n("font-awesome-icon",{attrs:{icon:"eye",title:"View"}})],1)]}}])})],1),e.newItem?n("b-modal",{attrs:{id:e.modelName,title:(e.newItem.id?"Edit":"Add")+" Session Tags "},on:{hidden:e.cancelReps},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("button",{staticClass:"btn btn-warning",on:{click:e.cancelReps}},[e._v("Cancel")]),e._v("\n         \n                    "),e.newItem.id?n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isChanged},on:{click:e.creatQuickReps}},[e._v("Update")]):e._e(),e._v("\n         \n                    "),e.newItem.id?e._e():n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isChanged},on:{click:e.creatQuickReps}},[e._v("Create")])]},proxy:!0}],null,!1,2144993851)},[n("ValidationObserver",{ref:"form"},[n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Category")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.category,expression:"newItem.category"}],staticClass:"form-control",attrs:{name:"category",id:"examplePassword",placeholder:"eg : country, customerType",type:"text"},domProps:{value:e.newItem.category},on:{input:function(t){t.target.composing||e.$set(e.newItem,"category",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,4089225439)})],1),n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.title,expression:"newItem.title"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"eg: Platiinum, Verified, India",type:"text"},domProps:{value:e.newItem.title},on:{input:function(t){t.target.composing||e.$set(e.newItem,"title",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,3204024500)})],1),n("div",{staticClass:"position-relative form-group"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("label",{attrs:{for:"examplePassword"}},[e._v("Tag Code")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.code,expression:"newItem.code"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"eg:- PLATINUM, VERFD, IND",type:"text"},domProps:{value:e.newItem.code},on:{input:function(t){t.target.composing||e.$set(e.newItem,"code",t.target.value)}}}),n("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,2755673282)})],1)])],1):e._e()],1)},i=[],a=(n("7f7f"),n("96cf"),n("3b8d")),s=n("e492"),o=n("ecee"),c=n("c074"),l=n("ad3d");n("9dbb");function u(){return{category:"",title:"",code:""}}o["c"].add(c["B"],c["A"],c["t"],c["j"]);var p={components:{PageTitle:s["a"],"font-awesome-icon":l["a"]},data:function(){return{heading:"Session Tags",subheading:"Assign Session specific tags to identify the type of discussion with the Customer",icon:"pe-7s-browser icon-gradient bg-tempting-azure fa fa-user-tag",actions:[{label:"Add Session Tags",icon:"plus",name:"ADD_ITEM"}],fields:[{key:"category",label:"Category"},{key:"title",label:"Title"},{key:"code",label:"Code"},{key:"actions",label:"Options"}],newItem:u(),sample:{contact:{name:"John Doe",phone:"919876543210",email:"John.Doe@company.com"}},modelName:"MODAL_ADD_QUICK_TAG"}},computed:{teams:function(e){return this.$store.getters.StateQTags},isChanged:function(e){return this.oldHash!==JSON.stringify(this.newItem)}},created:function(e){this.loadQReps()},methods:{loadQReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("LoadQuickTags");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),creatQuickReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate();case 2:if(t=e.sent,!0!==t){e.next=9;break}return e.next=6,this.$store.dispatch("CreatQuickTags",this.newItem);case 6:this.newItem=u(),this.$refs.form.reset(),this.onAction({name:"CANCEL"});case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeleteQuickTags",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=u(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editReps:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=u(),this.newItem.id=t.id,this.newItem.category=t.category,this.newItem.title=t.title,this.newItem.code=t.code,this.onAction({name:"EDIT_ITEM"});case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),rowClass:function(e,t){if(e&&"row"===t)return this.newItem.id==e.id?"table-success":void 0},onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}}}},d=p,h=n("2877"),f=Object(h["a"])(d,r,i,!1,null,null,null);t["default"]=f.exports},"9dbb":function(e,t,n){(function(t,n){e.exports=n()})(0,(function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"===typeof e}function r(e){return t(e)?"array":typeof e}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function a(e,t){return null!=e&&"object"===typeof e&&t in e}function s(e,t){return null!=e&&"object"!==typeof e&&e.hasOwnProperty&&e.hasOwnProperty(t)}var o=RegExp.prototype.test;function c(e,t){return o.call(e,t)}var l=/\S/;function u(e){return!c(l,e)}var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function d(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return p[e]}))}var h=/\s*/,f=/\s+/,m=/\s*=/,g=/\s*\}/,v=/#|\^|\/|>|\{|&|=|!/;function w(e,n){if(!e)return[];var r,a,s,o=!1,c=[],l=[],p=[],d=!1,w=!1,k="",I=0;function _(){if(d&&!w)while(p.length)delete l[p.pop()];else p=[];d=!1,w=!1}function T(e){if("string"===typeof e&&(e=e.split(f,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(i(e[0])+"\\s*"),a=new RegExp("\\s*"+i(e[1])),s=new RegExp("\\s*"+i("}"+e[1]))}T(n||x.tags);var E,R,A,P,S,D,N=new C(e);while(!N.eos()){if(E=N.pos,A=N.scanUntil(r),A)for(var j=0,O=A.length;j<O;++j)P=A.charAt(j),u(P)?(p.push(l.length),k+=P):(w=!0,o=!0,k+=" "),l.push(["text",P,E,E+1]),E+=1,"\n"===P&&(_(),k="",I=0,o=!1);if(!N.scan(r))break;if(d=!0,R=N.scan(v)||"name",N.scan(h),"="===R?(A=N.scanUntil(m),N.scan(m),N.scanUntil(a)):"{"===R?(A=N.scanUntil(s),N.scan(g),N.scanUntil(a),R="&"):A=N.scanUntil(a),!N.scan(a))throw new Error("Unclosed tag at "+N.pos);if(S=">"==R?[R,A,E,N.pos,k,I,o]:[R,A,E,N.pos],I++,l.push(S),"#"===R||"^"===R)c.push(S);else if("/"===R){if(D=c.pop(),!D)throw new Error('Unopened section "'+A+'" at '+E);if(D[1]!==A)throw new Error('Unclosed section "'+D[1]+'" at '+E)}else"name"===R||"{"===R||"&"===R?w=!0:"="===R&&T(A)}if(_(),D=c.pop(),D)throw new Error('Unclosed section "'+D[1]+'" at '+N.pos);return b(y(l))}function y(e){for(var t,n,r=[],i=0,a=e.length;i<a;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function b(e){for(var t,n,r=[],i=r,a=[],s=0,o=e.length;s<o;++s)switch(t=e[s],t[0]){case"#":case"^":i.push(t),a.push(t),i=t[4]=[];break;case"/":n=a.pop(),n[5]=t[2],i=a.length>0?a[a.length-1][4]:r;break;default:i.push(t)}return r}function C(e){this.string=e,this.tail=e,this.pos=0}function k(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function I(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}C.prototype.eos=function(){return""===this.tail},C.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},C.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},k.prototype.push=function(e){return new k(e,this)},k.prototype.lookup=function(e){var t,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{var i,o,c,l=this,u=!1;while(l){if(e.indexOf(".")>0){i=l.view,o=e.split("."),c=0;while(null!=i&&c<o.length)c===o.length-1&&(u=a(i,o[c])||s(i,o[c])),i=i[o[c++]]}else i=l.view[e],u=a(l.view,e);if(u){t=i;break}l=l.parent}r[e]=t}return n(t)&&(t=t.call(this.view)),t},I.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},I.prototype.parse=function(e,t){var n=this.templateCache,r=e+":"+(t||x.tags).join(":"),i="undefined"!==typeof n,a=i?n.get(r):void 0;return void 0==a&&(a=w(e,t),i&&n.set(r,a)),a},I.prototype.render=function(e,t,n,r){var i=this.getConfigTags(r),a=this.parse(e,i),s=t instanceof k?t:new k(t,void 0);return this.renderTokens(a,s,n,e,r)},I.prototype.renderTokens=function(e,t,n,r,i){for(var a,s,o,c="",l=0,u=e.length;l<u;++l)o=void 0,a=e[l],s=a[0],"#"===s?o=this.renderSection(a,t,n,r,i):"^"===s?o=this.renderInverted(a,t,n,r,i):">"===s?o=this.renderPartial(a,t,n,i):"&"===s?o=this.unescapedValue(a,t):"name"===s?o=this.escapedValue(a,t,i):"text"===s&&(o=this.rawValue(a)),void 0!==o&&(c+=o);return c},I.prototype.renderSection=function(e,r,i,a,s){var o=this,c="",l=r.lookup(e[1]);function u(e){return o.render(e,r,i,s)}if(l){if(t(l))for(var p=0,d=l.length;p<d;++p)c+=this.renderTokens(e[4],r.push(l[p]),i,a,s);else if("object"===typeof l||"string"===typeof l||"number"===typeof l)c+=this.renderTokens(e[4],r.push(l),i,a,s);else if(n(l)){if("string"!==typeof a)throw new Error("Cannot use higher-order sections without the original template");l=l.call(r.view,a.slice(e[3],e[5]),u),null!=l&&(c+=l)}else c+=this.renderTokens(e[4],r,i,a,s);return c}},I.prototype.renderInverted=function(e,n,r,i,a){var s=n.lookup(e[1]);if(!s||t(s)&&0===s.length)return this.renderTokens(e[4],n,r,i,a)},I.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),i=e.split("\n"),a=0;a<i.length;a++)i[a].length&&(a>0||!n)&&(i[a]=r+i[a]);return i.join("\n")},I.prototype.renderPartial=function(e,t,r,i){if(r){var a=this.getConfigTags(i),s=n(r)?r(e[1]):r[e[1]];if(null!=s){var o=e[6],c=e[5],l=e[4],u=s;0==c&&l&&(u=this.indentPartial(s,l,o));var p=this.parse(u,a);return this.renderTokens(p,t,r,u,i)}}},I.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},I.prototype.escapedValue=function(e,t,n){var r=this.getConfigEscape(n)||x.escape,i=t.lookup(e[1]);if(null!=i)return"number"===typeof i&&r===x.escape?String(i):r(i)},I.prototype.rawValue=function(e){return e[1]},I.prototype.getConfigTags=function(e){return t(e)?e:e&&"object"===typeof e?e.tags:void 0},I.prototype.getConfigEscape=function(e){return e&&"object"===typeof e&&!t(e)?e.escape:void 0};var x={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){_.templateCache=e},get templateCache(){return _.templateCache}},_=new I;return x.clearCache=function(){return _.clearCache()},x.parse=function(e,t){return _.parse(e,t)},x.render=function(e,t,n,i){if("string"!==typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+r(e)+'" was given as the first argument for mustache#render(template, view, partials)');return _.render(e,t,n,i)},x.escape=d,x.Scanner=C,x.Context=k,x.Writer=I,x}))}}]);