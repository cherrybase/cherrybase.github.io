(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4736b36"],{"02fc":function(t,e,n){"use strict";n("3170")},3170:function(t,e,n){},"7f75":function(t,e,n){(function(e,n){t.exports=n()})("undefined"!==typeof self&&self,(function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"0ca3":function(t,e,n){"use strict";var a=n("c6aa"),s=n.n(a);s.a},7937:function(t,e,n){},"7fca":function(t,e,n){"use strict";var a=n("c10a"),s=n.n(a);s.a},8875:function(t,e,n){var a,s,i;(function(n,o){s=[],a=o,i="function"===typeof a?a.apply(e,s):a,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(p){var t,e,n,a=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,s=/@([^@]*):(\d+):(\d+)\s*$/gi,i=a.exec(p.stack)||s.exec(p.stack),o=i&&i[1]||!1,r=i&&i[2]||!1,c=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");o===c&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(r-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var u=0;u<l.length;u++){if("interactive"===l[u].readyState)return l[u];if(l[u].src===o)return l[u];if(o===c&&l[u].innerHTML&&l[u].innerHTML.trim()===n)return l[u]}return null}}return t}))},9334:function(t,e,n){"use strict";var a=n("7937"),s=n.n(a);s.a},c10a:function(t,e,n){},c6aa:function(t,e,n){},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"DEFAULT_BACKGROUND_COLOR",(function(){return R})),n.d(e,"DEFAULT_BORDER_RADIUS",(function(){return L})),n.d(e,"DEFAULT_ROW_LENGTH",(function(){return A})),n.d(e,"DEFAULT_TRIGGER_CONTAINER_SPACE",(function(){return j})),n.d(e,"DEFAULT_SWATCH_SIZE",(function(){return z})),n.d(e,"DEFAULT_SHOW_BORDER",(function(){return F})),n.d(e,"extractPropertyFromPreset",(function(){return P})),"undefined"!==typeof window){var a=window.document.currentScript,s=n("8875");a=s(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:s});var i=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-swatches",attrs:{tabindex:"-1"},on:{blur:function(e){return t.onBlur(e.relatedTarget)}}},[t.inline?t._e():n("div",{ref:"triggerWrapper",staticClass:"vue-swatches__trigger__wrapper",on:{click:t.togglePopover}},[t._t("trigger",[n("div",{staticClass:"vue-swatches__trigger",class:{"vue-swatches--is-empty":!t.value,"vue-swatches--is-disabled":t.disabled},style:t.triggerStyles},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isNoColor,expression:"isNoColor"}],staticClass:"vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__diagonal"})])])])],2),n("transition",{attrs:{name:"vue-swatches-show-hide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.inline||t.isOpen,expression:"inline || isOpen"}],ref:"containerWrapper",staticClass:"vue-swatches__container",class:{"vue-swatches--inline":t.inline},style:t.containerStyles},[n("div",{staticClass:"vue-swatches__wrapper",style:t.wrapperStyles},[t.isNested?t._l(t.computedSwatches,(function(e,a){return n("div",{key:a,staticClass:"vue-swatches__row"},t._l(e,(function(s,i){return n("v-swatch",{key:i,attrs:{"is-last":a===t.computedSwatches.length-1&&i===e.length,"row-length-setted":null!==t.rowLength||null!==t.presetRowLength,"border-radius":t.computedBorderRadius,disabled:t.getSwatchDisabled(s),inline:t.inline,selected:t.checkEquality(t.getSwatchColor(s),t.value),"swatch-size":t.computedSwatchSize,"spacing-size":t.computedSpacingSize,"show-border":t.getSwatchShowBorder(s),"show-checkbox":t.showCheckbox,"show-labels":t.showLabels,"swatch-color":t.getSwatchColor(s),"swatch-label":t.getSwatchLabel(s),"swatch-alt":t.getSwatchAlt(s),"swatch-style":t.swatchStyle},on:{blur:function(e){return t.onBlur(e)},click:function(e){return t.updateSwatch(s)}},nativeOn:{click:function(e){return t.updateSwatch(s)}}})})),1)})):t._l(t.computedSwatches,(function(e,a){return n("v-swatch",{key:a,attrs:{"is-last":a===t.computedSwatches.length-1,"row-length-setted":null!==t.rowLength||null!==t.presetRowLength,"border-radius":t.computedBorderRadius,disabled:t.getSwatchDisabled(e),inline:t.inline,selected:t.checkEquality(t.getSwatchColor(e),t.value),"swatch-size":t.computedSwatchSize,"spacing-size":t.computedSpacingSize,"show-border":t.getSwatchShowBorder(e),"show-checkbox":t.showCheckbox,"show-labels":t.showLabels,"swatch-color":t.getSwatchColor(e),"swatch-label":t.getSwatchLabel(e),"swatch-alt":t.getSwatchAlt(e),"swatch-style":t.swatchStyle},on:{blur:function(e){return t.onBlur(e)},click:function(n){return t.updateSwatch(e)}},nativeOn:{click:function(n){return t.updateSwatch(e)}}})}))],2),t.showFallback?n("div",{staticClass:"vue-swatches__fallback__wrapper",style:t.computedFallbackWrapperStyles},[n("span",{staticClass:"vue-swatches__fallback__input--wrapper"},[n("input",{ref:"fallbackInput",staticClass:"vue-swatches__fallback__input",class:t.fallbackInputClass,attrs:{type:t.fallbackInputType},domProps:{value:t.internalValue},on:{input:function(e){return t.updateSwatch(e.target.value,{fromFallbackInput:!0})}}})]),t.showFallbackOk?n("button",{staticClass:"vue-swatches__fallback__button",class:t.fallbackOkClass,on:{click:function(e){return e.preventDefault(),t.onFallbackButtonClick(e)}}},[t._v(" "+t._s(t.fallbackOkText)+" ")]):t._e()]):t._e()])])],1)},r=[],c={colors:["#1FBC9C","#1CA085","#2ECC70","#27AF60","#3398DB","#2980B9","#A463BF","#8E43AD","#3D556E","#222F3D","#F2C511","#F39C19","#E84B3C","#C0382B","#DDE6E8","#BDC3C8"],rowLength:4},l={colors:["#CC0001","#E36101","#FFCC00","#009900","#0066CB","#000000","#FFFFFF"],showBorder:!0},u={colors:[["#000000","#434343","#666666","#999999","#b7b7b7","#cccccc","#d9d9d9","#efefef","#f3f3f3","#ffffff"],["#980000","#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#4a86e8","#0000ff","#9900ff","#ff00ff"],["#e6b8af","#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#c9daf8","#cfe2f3","#d9d2e9","#ead1dc"],["#dd7e6b","#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#a4c2f4","#9fc5e8","#b4a7d6","#d5a6bd"],["#cc4125","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6d9eeb","#6fa8dc","#8e7cc3","#c27ba0"],["#a61c00","#cc0000","#e69138","#f1c232","#6aa84f","#45818e","#3c78d8","#3d85c6","#674ea7","#a64d79"],["#85200c","#990000","#b45f06","#bf9000","#38761d","#134f5c","#1155cc","#0b5394","#351c75","#741b47"],["#5b0f00","#660000","#783f04","#7f6000","#274e13","#0c343d","#1c4587","#073763","#20124d","#4c1130"]],borderRadius:"0",rowLength:10,swatchSize:24,spacingSize:0},p=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"vue-swatches__swatch",class:{"vue-swatches__swatch--border":e.showBorder,"vue-swatches__swatch--selected":e.selected,"vue-swatches__swatch--is-disabled":e.disabled},style:e.swatchStyles,attrs:{"aria-label":e.swatchAlt,role:"button",tabindex:"0"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("click",e.swatchColor)},blur:function(e){return t.$emit("blur",e.relatedTarget)}}},[""===e.swatchColor?a("div",{staticClass:"vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"},[a("div",{staticClass:"vue-swatches__diagonal"})]):e._e(),a("v-check",{directives:[{name:"show",rawName:"v-show",value:e.showCheckbox&&e.selected,expression:"showCheckbox && selected"}]}),e.showLabels?a("div",{staticClass:"vue-swatches__swatch__label",style:e.labelStyles},[e._v(" "+e._s(e.swatchLabel)+" ")]):e._e()],1)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-swatches__check__wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__check__circle vue-swatches--has-children-centered"},[n("svg",{staticClass:"check",attrs:{version:"1.1",role:"presentation",width:"12",height:"12",viewBox:"0 0 1792 1792"}},[n("path",{staticClass:"vue-swatches__check__path",attrs:{d:"M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"}})])])])},f=[],m={name:"v-check",data:function(){return{}}},g=m;function w(t,e,n,a,s,i,o,r){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):s&&(c=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}n("7fca");var b=w(g,h,f,!1,null,null,null),v=b.exports;function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C={name:"v-swatch",components:{VCheck:v},props:{borderRadius:{type:String},isLast:{type:Boolean,default:!1},rowLengthSetted:{type:Boolean,default:!1},disabled:{type:Boolean},inline:{type:Boolean},selected:{type:Boolean,default:!1},showCheckbox:{type:Boolean},showBorder:{type:Boolean},showLabels:{type:Boolean},spacingSize:{type:Number},swatchColor:{type:String,default:""},swatchLabel:{type:String},swatchAlt:{type:String},swatchSize:{type:Number},swatchStyle:{type:Object}},data:function(){return{}},computed:{computedLabelStyle:function(){var t=8+3*Math.floor(this.spacingSize/5);return{bottom:"-".concat(t,"px")}},computedSwatchStyle:function(){var t={width:"".concat(this.swatchSize,"px"),height:"".concat(this.swatchSize,"px"),borderRadius:this.borderRadius,backgroundColor:""!==this.swatchColor?this.swatchColor:"#FFFFFF",cursor:this.cursorStyle};return this.inline&&this.isLast||(t.marginRight="".concat(this.spacingSize,"px")),this.inline&&!this.rowLengthSetted?t:S({},t,{marginBottom:"".concat(this.spacingSize,"px")})},cursorStyle:function(){return this.disabled?"not-allowed":"pointer"},labelStyles:function(){return[this.computedLabelStyle]},swatchStyles:function(){return[this.computedSwatchStyle,this.swatchStyle]}}},k=C,O=(n("0ca3"),w(k,p,d,!1,null,null,null)),x=O.exports;function D(t){return D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R="#ffffff",L="10px",A=4,j=5,z=42,F=!1,P=function(t,e,n){return"string"!==typeof t?null:"text-basic"===t?void 0===l[e]?null:l[e]:"text-advanced"===t?void 0===u[e]?null:u[e]:"basic"===t||n?void 0===c[e]?null:c[e]:null},T={name:"v-swatches",components:{VSwatch:x},props:{backgroundColor:{type:String,default:R},closeOnSelect:{type:Boolean,default:!0},swatches:{type:[Array,String],default:function(){return"basic"}},disabled:{type:Boolean,default:!1},fallbackInputClass:{type:[Array,Object,String],default:null},fallbackInputType:{type:String,default:function(){return"text"},validator:function(t){return-1!==["text","color"].indexOf(t)}},fallbackOkClass:{type:[Array,Object,String],default:null},fallbackOkText:{type:String,default:"Ok"},inline:{type:Boolean,default:!1},shapes:{type:String,default:"squares"},popoverX:{type:String,default:"right"},popoverY:{type:String,default:"bottom"},rowLength:{type:[Number,String],default:null},showBorder:{type:Boolean,default:null},showFallback:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!0},showLabels:{type:Boolean,default:!1},spacingSize:{type:Number,default:null},swatchSize:{type:[Number,String],default:null},swatchStyle:{type:[Object,Array],default:function(){}},triggerStyle:{type:[Object,Array],default:function(){}},wrapperStyle:{type:[Object,Array],default:function(){}},value:{type:String,default:null}},data:function(){return{alwaysOnScreenStyle:{},componentMounted:!1,internalValue:this.value,internalIsOpen:!1}},computed:{isNested:function(){return!!(this.computedSwatches&&this.computedSwatches.length&&this.computedSwatches[0]instanceof Array)},isOpen:function(){return!this.inline&&this.internalIsOpen},isNoColor:function(){return this.checkEquality("",this.value)},presetBorderRadius:function(){return P(this.swatches,"borderRadius")},presetRowLength:function(){return P(this.swatches,"rowLength")},presetShowBorder:function(){return P(this.swatches,"showBorder")},presetSwatchSize:function(){return P(this.swatches,"swatchSize")},presetSpacingSize:function(){return P(this.swatches,"spacingSize")},computedSwatches:function(){return this.swatches instanceof Array?this.swatches:"string"===typeof this.swatches?P(this.swatches,"colors",!0):[]},computedBorderRadius:function(){return null!==this.presetBorderRadius?this.presetBorderRadius:this.borderRadius},computedRowLength:function(){return null!==this.rowLength?Number(this.rowLength):null!==this.presetRowLength?this.presetRowLength:this.computedSwatches.length<A&&!this.isNested?this.computedSwatches.length:A},computedSwatchSize:function(){return null!==this.swatchSize?Number(this.swatchSize):null!==this.presetSwatchSize?this.presetSwatchSize:z},computedSpacingSize:function(){return null!==this.spacingSize?this.spacingSize:null!==this.presetSpacingSize?this.presetSpacingSize:Math.round(.25*this.computedSwatchSize)},computedShowBorder:function(){return null!==this.showBorder?this.showBorder:null!==this.presetShowBorder?this.presetShowBorder:F},showFallbackOk:function(){return!this.inline},borderRadius:function(){return"squares"===this.shapes?"".concat(Math.round(.25*this.computedSwatchSize),"px"):"circles"===this.shapes?"50%":""},wrapperWidth:function(){return this.computedRowLength*(this.computedSwatchSize+this.computedSpacingSize)},computedtriggerStyle:function(){return{width:"42px",height:"42px",backgroundColor:this.value?this.value:"#ffffff",borderRadius:"circles"===this.shapes?"50%":L}},triggerStyles:function(){return[this.computedtriggerStyle,this.triggerStyle]},containerStyles:function(){var t=[{backgroundColor:this.backgroundColor},this.alwaysOnScreenStyle];return this.inline?t:[].concat(t,[{padding:"5px",marginBottom:"5px"}])},computedWrapperStyle:function(){return this.inline?{}:{paddingTop:"".concat(this.computedSpacingSize,"px"),paddingLeft:"".concat(this.computedSpacingSize,"px"),width:"".concat(this.wrapperWidth,"px")}},wrapperStyles:function(){return[this.computedWrapperStyle,this.wrapperStyle]},computedFallbackWrapperStyle:function(){var t={marginLeft:"".concat(this.computedSpacingSize,"px"),paddingBottom:"".concat(this.computedSpacingSize,"px")};return this.inline?t:B({},t,{width:"".concat(this.wrapperWidth-this.computedSpacingSize,"px")})},computedFallbackWrapperStyles:function(){return[this.computedFallbackWrapperStyle]}},watch:{value:function(t){this.internalValue=t}},mounted:function(){this.componentMounted=!0},methods:{checkEquality:function(t,e){return!(!t&&""!==t||!e&&""!==e)&&t.toUpperCase()===e.toUpperCase()},hidePopover:function(){this.internalIsOpen=!1,this.$el.blur(),this.$emit("close",this.internalValue)},getAlwaysOnScreenStyle:function(){var t={},e=this.$refs.triggerWrapper,n=this.$refs.containerWrapper;if(!this.componentMounted||this.inline||!e||!window||!document)return t;var a=e.getBoundingClientRect(),s=5,i=(document.documentElement.clientWidth||window.innerWidth)-5,o=5,r=(document.documentElement.clientHeight||window.innerHeight)-5;n.style.visibility="hidden",n.style.display="block";var c=n.getBoundingClientRect();return n.style.display="none",n.style.visibility="visible","top"===this.popoverY?a.top-c.height<o?(t.top="".concat(a.height+j,"px"),t.bottom="auto"):(t.bottom="".concat(a.height+j,"px"),t.top="auto"):"bottom"===this.popoverY&&(a.bottom+c.height>r?(t.bottom="".concat(a.height+j,"px"),t.top="auto"):(t.top="".concat(a.height+j,"px"),t.bottom="auto")),"left"===this.popoverX?a.right-c.width<s?(t.left=0,t.right="auto"):(t.right=0,t.left="auto"):"right"===this.popoverX&&(a.left+c.width>i?(t.right=0,t.left="auto"):(t.left=0,t.right="auto")),t},getSwatchShowBorder:function(t){return"string"===typeof t?this.computedShowBorder:"object"===D(t)?void 0!==t.showBorder?t.showBorder:this.computedShowBorder:void 0},getSwatchColor:function(t){return"string"===typeof t?t:"object"===D(t)?t.color:void 0},getSwatchDisabled:function(t){return"string"===typeof t?this.disabled:"object"===D(t)?void 0!==t.disabled?t.disabled:this.disabled:void 0},getSwatchLabel:function(t){return"string"===typeof t?t:"object"===D(t)?t.label||t.color:void 0},getSwatchAlt:function(t){return"string"===typeof t?t:"object"===D(t)?t.alt||this.getSwatchLabel(t):void 0},onBlur:function(t){this.isOpen&&(null!==t&&this.$el.contains(t)||(this.internalIsOpen=!1,this.$emit("close",this.internalValue)))},onFallbackButtonClick:function(){this.hidePopover()},showPopover:function(){this.isOpen||this.inline||this.disabled||(this.alwaysOnScreenStyle=this.getAlwaysOnScreenStyle(),this.internalIsOpen=!0,this.$el.focus(),this.$emit("open"))},togglePopover:function(){this.isOpen?this.hidePopover():this.showPopover()},updateSwatch:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fromFallbackInput;if(!this.getSwatchDisabled(t)){var a=this.getSwatchColor(t);this.internalValue=a,this.$emit("input",a),!this.closeOnSelect||this.inline||n||this.hidePopover()}}}},$=T,N=(n("9334"),w($,o,r,!1,null,null,null)),M=N.exports;e["default"]=M}})["default"]}))},b3a4:function(t,e,n){},b723:function(t,e,n){},b8f2:function(t,e,n){"use strict";n("b723")},d36b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon,actions:t.actions},on:{action:t.onAction}}),n("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[n("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:t.table.items,fields:t.table.fields},scopedSlots:t._u([{key:"cell(value)",fn:function(e){return["OPTIONS"==e.item.meta.inputType?n("span",[e.item.meta.optionsSource?n("span",[n("MySource",{attrs:{value:e.item.config.value,options:e.item.meta.optionsSource,optionKey:e.item.meta.optionsKey}})],1):n("span",[t._v("\n                    "+t._s(t._f("display")(e.item.config.value,e.item.meta.options))+"\n                ")])]):"COLOR"==e.item.meta.inputType?n("span",[n("v-swatches",{attrs:{value:e.item.config.value,"show-fallback":"","popover-x":"left",disabled:"","swatch-size":"10","trigger-style":t.swatch.style}})],1):"COLOR_PALLETE"==e.item.meta.inputType?n("span",[n("v-swatches",{attrs:{value:e.item.config.value.primary,"show-fallback":"","popover-x":"left",disabled:"","swatch-size":"10","trigger-style":t.swatch.style}}),n("v-swatches",{attrs:{value:e.item.config.value.secondary,"show-fallback":"","popover-x":"left",disabled:"","swatch-size":"10","trigger-style":t.swatch.style}}),n("v-swatches",{attrs:{value:e.item.config.value.accent,"show-fallback":"","popover-x":"left",disabled:"","swatch-size":"10","trigger-style":t.swatch.style}})],1):n("span",[t._v(t._s(e.item.config.value))])]}},{key:"cell(actions)",fn:function(e){return[n("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:function(n){return t.editItem(e.item,e.index,n.target)}}},[n("i",{staticClass:"fas fa-edit"})])]}}])})],1),t._m(0),n("ValidationObserver",{ref:"form",staticClass:"modal-form",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[t.oneItem?n("b-modal",{attrs:{id:t.modelName,title:"Update Property ",size:"md"},on:{hidden:t.cancelItem},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"position-relative form-group"},[n("button",{staticClass:"form-control btn btn-primary",attrs:{name:"password",id:"examplePassword",disabled:!t.isChanged||a},on:{click:t.saveItem}},[t._v("Save")])])]},proxy:!0}],null,!0)},[n("div",{staticClass:"form-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.oneItem.meta.title,expression:"oneItem.meta.title"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"John Doe",type:"text",readonly:""},domProps:{value:t.oneItem.meta.title},on:{input:function(e){e.target.composing||t.$set(t.oneItem.meta,"title",e.target.value)}}})]),n("br"),"OPTIONS"==t.oneItem.meta.inputType?n("div",{staticClass:"form-row"},[t.oneItem.meta.optionsSource?n("span",{staticClass:"w-100"},[n("BaseVSelect",{staticClass:"w-100",attrs:{optionKey:t.oneItem.meta.optionsKey,options:t.oneItem.meta.optionsSource},model:{value:t.oneItem.config.value,callback:function(e){t.$set(t.oneItem.config,"value",e)},expression:"oneItem.config.value"}})],1):n("span",[t.oneItem.meta.options.length<5?n("ButtonRadioGroup",{attrs:{size:"sm",options:t.oneItem.meta.options},model:{value:t.oneItem.config.value,callback:function(e){t.$set(t.oneItem.config,"value",e)},expression:"oneItem.config.value"}}):n("BaseVSelect",{staticClass:"w-100",attrs:{size:"sm",options:t.oneItem.meta.options,placeholder:"Select Language"},model:{value:t.oneItem.config.value,callback:function(e){t.$set(t.oneItem.config,"value",e)},expression:"oneItem.config.value"}})],1)]):"COLOR"==t.oneItem.meta.inputType?n("div",{staticClass:"form-row"},[n("v-swatches",{staticClass:"d-flex justify-content-center",attrs:{"show-fallback":"","fallback-input-type":"color","fallback-input-class":"swatches-fallback-input-class",inline:"",swatches:t.swatch.colors,"swatch-style":t.swatch.style,"wrapper-style":{margin:"auto",width:"90%"}},model:{value:t.oneItem.config.value,callback:function(e){t.$set(t.oneItem.config,"value",e)},expression:"oneItem.config.value"}})],1):"COLOR_PALLETE"==t.oneItem.meta.inputType?n("div",{staticClass:"form-row"},[n("v-swatches",{staticClass:"d-flex justify-content-center",attrs:{"show-fallback":"","fallback-input-type":"color","fallback-input-class":"swatches-fallback-input-class",inline:"",swatches:t.swatch.colors,"swatch-style":t.swatch.style,"wrapper-style":{margin:"auto",width:"90%"}},model:{value:t.oneItem.config.value.primary,callback:function(e){t.$set(t.oneItem.config.value,"primary",e)},expression:"oneItem.config.value.primary"}}),n("v-swatches",{staticClass:"d-flex justify-content-center",attrs:{"show-fallback":"","fallback-input-type":"color","fallback-input-class":"swatches-fallback-input-class",inline:"",swatches:t.swatch.colors,"swatch-style":t.swatch.style,"wrapper-style":{margin:"auto",width:"90%"}},model:{value:t.oneItem.config.value.secondary,callback:function(e){t.$set(t.oneItem.config.value,"secondary",e)},expression:"oneItem.config.value.secondary"}}),n("v-swatches",{staticClass:"d-flex justify-content-center",attrs:{"show-fallback":"","fallback-input-type":"color","fallback-input-class":"swatches-fallback-input-class",inline:"",swatches:t.swatch.colors,"swatch-style":t.swatch.style,"wrapper-style":{margin:"auto",width:"90%"}},model:{value:t.oneItem.config.value.accent,callback:function(e){t.$set(t.oneItem.config.value,"accent",e)},expression:"oneItem.config.value.accent"}})],1):n("div",{staticClass:"form-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.oneItem.config.value,expression:"oneItem.config.value"}],staticClass:"form-control",attrs:{name:"email",placeholder:"A,1232, https://soem.url etc",type:"text"},domProps:{value:t.oneItem.config.value},on:{input:function(e){e.target.composing||t.$set(t.oneItem.config,"value",e.target.value)}}})])]):t._e()]}}])})],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"main-card mb-3 card"})])])}],i=(n("7f7f"),n("96cf"),n("3b8d")),o=n("e492"),r=n("d166"),c=n("7f75"),l=n.n(c);n("b3a4");function u(){return{config:{},meta:{}}}var p={components:{PageTitle:o["a"],VSwatches:l.a},data:function(){return{MyFlags:r["c"],MyDict:r["b"],MyConst:r["a"],heading:"Configuration Setup",subheading:"Control Agent Panel setting",icon:"pe-7s-users icon-gradient bg-happy-itmeo fa fa-tools",actions:[],table:{fields:[{key:"meta.title",label:"Property"},{key:"value",label:"Value"},{key:"config.description",label:"Desc"},{key:"actions",label:"Action"}],items:[],perPage:25,currentPage:1,rows:0},swatch:{style:{margin:"5px",width:"25px",height:"25px","border-radius":"8px"},colors:["#1FBC9C","#1CA085","#2ECC70","#27AF60","#3398DB","#2980B9","#A463BF","#8E43AD","#3D556E","#222F3D","#F2C511","#F39C19","#E84B3C","#C0382B","#DDE6E8","#BDC3C8","#4b56c0","#ffc976","#40a6db","#f1a948","#db3a70","#25d366","#00BFFF","#4267b2","#0648AA","#00bfb6","#22625F","#18547C"]},oneItem:u(),modelName:"MODAL_ADD_USERS"}},computed:{items:function(t){return this.$store.getters.StateAgents},teams:function(t){return this.$store.getters.StateTeams},isChanged:function(t){return this.oldHash!==JSON.stringify(this.oneItem)}},created:function(t){this.loadItems()},methods:{loadItems:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("GetConfigs");case 2:e=t.sent,this.table.items=e.results.map((function(t){return null!==t.config.value&&void 0!==t.config.value||(t.config.value=t.meta.defaultValue),t}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("SetConfigs",{key:this.oneItem.meta.key,value:this.oneItem.config.value});case 2:this.oneItem=u(),this.onAction({name:"CANCEL"}),this.loadItems();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancelItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.oneItem=u(),this.onAction({name:"CANCEL"});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),editItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in this.oneItem=u(),e)this.oneItem[n]=JSON.parse(JSON.stringify(e[n]));this.onAction({name:"EDIT_ITEM"});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onAction:function(t){switch(t.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",t);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",t);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",t)}}}},d=p,h=(n("b8f2"),n("2877")),f=Object(h["a"])(d,a,s,!1,null,null,null);e["default"]=f.exports},da41:function(t,e,n){},e492:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:t.icon})]),n("div",[t._v("\n                "+t._s(t.heading)+"\n                "),n("div",{staticClass:"page-title-subheading"},[t._t("subheading",(function(){return[t._v("\n                        "+t._s(t.subheading)+"\n                    ")]}))],2)])]),n("div",{staticClass:"page-title-actions"},[t._l(t.ifFilters,(function(e,a){return n("span",{key:"filter-"+a,staticClass:"filter-wrapper"},[t._t("filter("+e.name+")",(function(){return[e.hidden?t._e():n("span")]}),null,{filter:e})],2)})),t.dateranegeinput&&!t.dateranegeinput.hidden?n("span",{staticClass:"action-wrapper"},[n("date-range-picker",{attrs:{opens:"left","time-picker":!1,"control-container-class":"reportrange-text btn btn-success",ranges:t.dateranegeinput.ranges},on:{select:t.onDateRangeSelect,update:t.onDateRangeUpdate},scopedSlots:t._u([{key:"input",fn:function(e){return[n("i",{staticClass:"fa fa-calendar-alt"}),t._v(" "+t._s(t._f("date")(e.startDate))+" - "+t._s(t._f("date")(e.endDate))+"\n    ")]}}],null,!1,2163278788),model:{value:t.dateranegeinput.range,callback:function(e){t.$set(t.dateranegeinput,"range",e)},expression:"dateranegeinput.range"}})],1):t._e(),t._l(t.actions,(function(e,a){return n("span",{key:"action-"+a,staticClass:"action-wrapper"},[t._t("action("+e.name+")",(function(){return[e.hidden||!1===t.actionShow[e.name]?t._e():n("span",[e.link?n("router-link",{staticClass:"btn-shadow d-inline-flex align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},attrs:{tag:"button",to:e.link,type:"button"}},[e.icon?n("i",{staticClass:"mr-2",class:e.icon}):t._e(),t._v("\n                            "+t._s(e.label)+" \n                        ")]):"lane"==e.type?n("div",{staticClass:"d-inline-flex align-items-center",staticStyle:{"min-width":"220px"}},[n("v-select",{staticClass:"w-100",attrs:{options:t.input.lane.options,searchable:!1,clearable:!1,placeholder:"Select Account"},on:{input:function(n){return t.clickAction(e)}},scopedSlots:t._u([{key:"selected-option",fn:function(e){return[n("div",{},[n("span",{staticClass:"contact_type contact_type-24 fab",class:t.MyDict.social[e.contactType]}),t._v("  "+t._s(e.lane))])]}},{key:"open-indicator",fn:function(e){var a=e.attributes;return[n("span",t._b({staticClass:"fa fa-caret-down"},"span",a,!1))]}},{key:"option",fn:function(e){var a=e.contactType,s=e.lane;return[n("span",{staticClass:"contact_type contact_type-24 fab",class:t.MyDict.social[a]}),t._v("  "+t._s(s)+"\n                                ")]}}],null,!0),model:{value:t.input.lane.value,callback:function(e){t.$set(t.input.lane,"value",e)},expression:"input.lane.value"}})],1):"search"==e.type?n("div",{staticClass:"d-inline-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.search.value,expression:"input.search.value"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:t.input.search.value},on:{input:function(e){e.target.composing||t.$set(t.input.search,"value",e.target.value)}}})]):"apply"==e.type?n("div",{staticClass:"d-inline-flex"},[n("button",{staticClass:"btn-shadow  align-items-center btn btn-success",on:{click:function(n){return t.clickAction(e)}}},[e.icon?n("i",{class:e.icon}):t._e(),t._v(t._s(e.label))])]):n("div",{staticClass:"d-inline-flex"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:e.modal,expression:"action.modal"}],staticClass:"btn-shadow  align-items-center btn",class:{"btn-link":"link"==e.type,"btn-success":!e.type||"button"==e.type},on:{click:function(n){return t.clickAction(e)}}},[e.icon?n("i",{staticClass:"mr-2",class:e.icon}):t._e(),t._v("\n                                "+t._s(e.label)+"\n                            ")])],1)],1)]}),null,{action:e})],2)}))],2)]),n("div",{staticStyle:{clear:"both",height:"0px"}})])},s=[],i=(n("7f7f"),n("96cf"),n("3b8d")),o=n("bbf5"),r=n.n(o),c=(n("53b4"),n("2ead"),n("c1df")),l=n.n(c),u=n("4a7a"),p=n.n(u),d=(n("6dfc"),n("d166"));function h(t){return t.hour(0).minute(0).seconds(0).milliseconds(0)}function f(t){return t.hour(23).minute(59).seconds(59).milliseconds(999)}var m={components:{DateRangePicker:r.a,vSelect:p.a},data:function(){var t=this;return{MyFlags:d["c"],MyDict:d["b"],MyConst:d["a"],dateranegeinput:function(){if(!t.daterange)return null;var e=t.daterange.startDate||h(l()().subtract(7,"day")).toDate(),n=t.daterange.endDate||f(l()()).toDate();return{range:{startDate:e,endDate:n},ranges:{Today:[h(l()()).toDate(),f(l()()).toDate()],"Last 7 Days":[h(l()().subtract(7,"day")).toDate(),f(l()()).toDate()],Yesterday:[h(l()().subtract(1,"day")).toDate(),f(l()().subtract(1,"day")).toDate()],"This month":[h(l()().date(1)).toDate(),f(l()()).toDate()],"Last month":[h(l()().subtract(1,"month").date(1)).toDate(),f(l()().date(0)).toDate()],"This year":[h(l()().month(0).date(1)).toDate(),f(l()()).toDate()],"Last year":[h(l()().subtract(1,"year").month(0).date(1)).toDate(),f(l()().month(0).date(0)).toDate()]}}}(),input:{lane:{options:[],value:null,sender:""},search:{value:null},contacts:""}}},computed:{ifFilters:function(){return this.filters||[]}},filters:{date:function(t){return t?t.toLocaleString():""}},created:function(t){this.daterange&&(this.daterange.startDate||(this.daterange.startDate=h(l()()).toDate()),this.daterange.endDate||(this.daterange.endDate=f(l()()).toDate()),this.sanitizeDateRange(this.daterange)),this.loadLanes()},methods:{sanitizeDateRange:function(t){var e=l()(t.startDate),n=l()(t.endDate);return t.startDate=h(e).toDate(),t.endDate=f(n).toDate(),t},loadLanes:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.getX("/api/options/channels");case 2:t.sent,this.input.lane.options=this.$store.getters.StateApi.OptionsChannels;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onDateRangeSelect:function(t){console.log("select",t);var e=this.sanitizeDateRange(t);this.dateranegeinput.range.startDate=e.startDate,this.dateranegeinput.range.endDate=e.endDate},onDateRangeUpdate:function(t){console.log("c_update",t),this.daterange&&(this.daterange.startDate=t.startDate,this.daterange.endDate=t.endDate,this.$emit("dateRangeOnUpdate",t))},clickAction:function(t){this.$emit("action",t)},action:function(t,e,n){for(var a in this.actions)if(this.actions[a].name==t){this.actions[a][e]=n;break}},getInput:function(t){var e;return null===(e=this.input[t])||void 0===e?void 0:e.value}},props:{icon:String,heading:String,subheading:String,actions:Array,filters:Array,daterange:{type:Object,default:function(){return null}},actionShow:{type:Object,default:function(){return{message:"hello"}}}}},g=m,w=(n("02fc"),n("fb11"),n("2877")),b=Object(w["a"])(g,a,s,!1,null,null,null);e["a"]=b.exports},fb11:function(t,e,n){"use strict";n("da41")}}]);