(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82709f88"],{"06f3":function(t,e,n){},"3f90":function(t,e,n){"use strict";n("9b2f")},"4eb5":function(t,e,n){var r=n("6981"),o={autoSetContainer:!1,appendToBody:!0},i={install:function(t){var e="3."===t.version.slice(0,2)?t.config.globalProperties:t.prototype;e.$clipboardConfig=o,e.$copyText=function(t,e){return new Promise((function(n,i){var a=document.createElement("button"),s=new r(a,{text:function(){return t},action:function(){return"copy"},container:"object"===typeof e?e:document.body});s.on("success",(function(t){s.destroy(),n(t)})),s.on("error",(function(t){s.destroy(),i(t)})),o.appendToBody&&document.body.appendChild(a),a.click(),o.appendToBody&&document.body.removeChild(a)}))},t.directive("clipboard",{bind:function(t,e,n){if("success"===e.arg)t._vClipboard_success=e.value;else if("error"===e.arg)t._vClipboard_error=e.value;else{var i=new r(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:o.autoSetContainer?t:void 0});i.on("success",(function(e){var n=t._vClipboard_success;n&&n(e)})),i.on("error",(function(e){var n=t._vClipboard_error;n&&n(e)})),t._vClipboard=i}},update:function(t,e){"success"===e.arg?t._vClipboard_success=e.value:"error"===e.arg?t._vClipboard_error=e.value:(t._vClipboard.text=function(){return e.value},t._vClipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){t._vClipboard&&("success"===e.arg?delete t._vClipboard_success:"error"===e.arg?delete t._vClipboard_error:(t._vClipboard.destroy(),delete t._vClipboard))}})},config:o};t.exports=i},6981:function(t,e,n){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e,n){t.exports=n()}(0,(function(){return e={686:function(t,e,n){"use strict";n.d(e,{default:function(){return y}});e=n(279);var r=n.n(e),o=(e=n(370),n.n(e)),i=(e=n(817),n.n(e));function a(t){try{return document.execCommand(t)}catch(t){return}}var s=function(t){return t=i()(t),a("cut"),t};function c(t,e){var n,r;n=t,r="rtl"===document.documentElement.getAttribute("dir"),(t=document.createElement("textarea")).style.fontSize="12pt",t.style.border="0",t.style.padding="0",t.style.margin="0",t.style.position="absolute",t.style[r?"right":"left"]="-9999px",r=window.pageYOffset||document.documentElement.scrollTop,t.style.top="".concat(r,"px"),t.setAttribute("readonly",""),t.value=n,t=t;return e.container.appendChild(t),e=i()(t),a("copy"),t.remove(),e}var u=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=c(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=c(t.value,e):(n=i()(t),a("copy")),n};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container;e=t.target,t=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?u(t,{container:r}):e?"cut"===n?s(e):u(e,{container:r}):void 0};function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var t,r=v(e);return t=n?(t=v(this).constructor,Reflect.construct(r,arguments,t)):r.apply(this,arguments),r=this,!(t=t)||"object"!==f(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):t}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){if(t="data-clipboard-".concat(t),e.hasAttribute(t))return e.getAttribute(t)}var y=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(a,r());var t,e,n,i=h(a);function a(t,e){var n;return function(t){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this),(n=i.call(this)).resolveOptions(e),n.listenClick(t),n}return t=a,n=[{key:"copy",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return u(t,e)}},{key:"cut",value:function(t){return s(t)}},{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e=(t="string"==typeof t?[t]:t,!!document.queryCommandSupported);return t.forEach((function(t){e=e&&!!document.queryCommandSupported(t)})),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=o()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy";t=p({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(t?"success":"error",{action:n,text:t,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){if(t=m("target",t),t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&d(t.prototype,e),n&&d(t,n),a}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var r=n(828);function o(t,e,n,o,i){var a=function(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return u=e,l=n,(c=t).addEventListener(u,l),{destroy:function(){c.removeEventListener(u,l)}};if(r.nodeList(t))return i=t,a=e,s=n,Array.prototype.forEach.call(i,(function(t){t.addEventListener(a,s)})),{destroy:function(){Array.prototype.forEach.call(i,(function(t){t.removeEventListener(a,s)}))}};if(r.string(t))return t=t,e=e,n=n,o(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var i,a,s,c,u,l}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},n={},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t(686).default;function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}var e,n}))},"9b2f":function(t,e,n){},ab5c:function(t,e,n){"use strict";n("06f3")},b600:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("b-input-group",{class:["mt-3","input-group-"+t.size]},[e("b-input-group-prepend",[e("b-button",{class:["w-120px","text-"+t.size],attrs:{variant:"outline-dark"}},[t._v("\n                "+t._s(t.label))])],1),e("b-form-input",{attrs:{readonly:"",value:t.showValue}}),e("b-input-group-append",[t.reset&&!t.value?e("b-button",{attrs:{variant:"outline-success"},on:{click:t.onReset}},[t._v("Reset")]):e("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.value,expression:"value",arg:"copy"}],staticClass:"w-20",attrs:{variant:"outline-success"}},[t._v("Copy")])],1)],1)},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("96cf"),n("3b8d")),a=(n("7f7f"),n("bd86"));n("c5f6");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=0,l={inheritAttrs:!1,name:"base-copy",props:{label:{type:String,description:"Input label (text before input)"},value:{type:[String,Number,Boolean],description:"Input value"},size:{type:[String],description:"Size value"},reset:{type:Boolean,description:"Is it reset"}},data:function(){return{focused:!1,inputId:++u,selectOptions:null}},computed:{listeners:function(){return c(c({},this.$listeners),{},{input:this.updateValue,focus:this.onFocus,blur:this.onBlur})},slotData:function(){return c({focused:this.focused,error:this.error},this.listeners)},hasIcon:function(){var t=this.$slots,e=t.append,n=t.prepend;return void 0!==e||void 0!==n||void 0!==this.appendIcon||void 0!==this.prependIcon||this.group},showValue:function(){return this.reset?this.value||"***********":this.value}},created:function(){this.loadOptions()},methods:{updateValue:function(t){var e=t.target.value;this.$emit("input",e)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)},onReset:function(t){this.$emit("reset",t)},fromOptions:function(t){this.selectOptions=t.map((function(t){return"string"==typeof t||"number"==typeof t?{id:t,name:t}:{id:t.id||t.key||t.code||t.value||t.label||t.name,name:t.name||t.label||t.value||t.code||t.key||t.id}}))},loadOptions:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.options||"string"!=typeof this.options||0!=this.options.indexOf("data:")){t.next=7;break}return t.next=3,n("ab35")("./"+this.options.replace("data:","")+".json");case 3:e=t.sent,this.fromOptions(e.options),t.next=8;break;case 7:this.options&&this.fromOptions(this.options);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},p=l,f=(n("ab5c"),n("2877")),d=Object(f["a"])(p,r,o,!1,null,"83622a08",null);e["default"]=d.exports},bb7e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"wrapper"}},[e("AppReleases")],1)])},o=[],i=n("a026"),a=n("70af"),s=n("4eb5"),c=n.n(s),u=function(){var t=this,e=t._self._c;return e("div",[e("b-container",{staticClass:"x-position-absolute"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{lg:"6",md:"8"}},[e("div",[e("b-tabs",{attrs:{"content-class":"mt-3"}},[e("b-tab",{attrs:{title:"Cherry Client Info"}},[e("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2"},[e("base-select",{staticClass:"mb-3",attrs:{alternative:"",feedback:"",name:"Client",placeholder:"Select Client",rules:{required:!0},required:"",options:t.clientOptions},on:{change:t.clientOnChange},model:{value:t.model.client,callback:function(e){t.$set(t.model,"client",e)},expression:"model.client"}}),t.clientOption.env&&t.clientOption.env.length?e("base-select",{staticClass:"mb-3",attrs:{hidden:"",alternative:"",feedback:"",name:"Env",placeholder:"Select Env",rules:{required:!0},required:"",options:t.clientOption.env},model:{value:t.model.env,callback:function(e){t.$set(t.model,"env",e)},expression:"model.env"}}):t._e()],1),e("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[e("b-form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(t.onSubmit)}}},[e("BaseCopy",{attrs:{label:"Release Version",value:t.model.releaseVersion,size:"sm"}}),e("BaseCopy",{attrs:{label:"Release Url",value:t.model.releaseVersion,size:"sm"}})],1)],1),e("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[e("b-form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(t.onSubmit)}}},[e("BaseCopy",{attrs:{label:"Beta Version",value:t.model.betaVersion,size:"sm"}}),e("BaseCopy",{attrs:{label:"Beta Url",value:t.model.betaVersion,size:"sm"}})],1),t.deployed.version&&t.deployed.version!=t.model.betaVersion?e("div",{staticClass:"text-center mt-2"},[e("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.updateAlpha(t.model.betaVersion)}}},[t._v("Update Beta")])]):t._e()],1),e("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[e("b-form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(t.onSubmit)}}},[e("BaseCopy",{attrs:{label:"Alpha Version",value:t.model.alphaVersion,size:"sm"}}),e("BaseCopy",{attrs:{label:"Alpha Url",value:"https://cdn.jsdelivr.net/gh/cherrybase/".concat(t.model.client,"@").concat(t.model.alphaVersion),size:"sm"}})],1),t.deployed.version&&t.deployed.version!=t.model.alphaVersion?e("div",{staticClass:"text-center mt-2"},[e("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.updateAlpha(t.model.alphaVersion)}}},[t._v("Update Alpha")])]):t._e()],1)],1)],1),e("b-tab",{attrs:{title:"Deployed Versions",active:""}},[e("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[e("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[e("BaseCopy",{attrs:{label:"owa",value:t.deployed.version,size:"sm"}}),e("small",{staticClass:"float-right"},[t._v("  "+t._s(t.deployed.stamp)+" "),e("i",{staticClass:"fa fa-clock"})])],1),t._l(t.deployed.servers,(function(n){return e("b-card-body",{key:n.title,staticClass:"px-lg-5 py-lg-2"},[e("BaseCopy",{attrs:{label:n.title,value:n.version,size:"sm"}}),e("small",{staticClass:"float-right"},[t._v("  "+t._s(n.stamp)+" "),e("i",{staticClass:"fa fa-clock"})])],1)}))],2)],1),e("b-tab",{attrs:{title:"Controller"}},[e("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[e("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[e("base-input",{attrs:{size:"sm",label:"Config",prelabel:"",readonly:"",value:" Clear all config cache"},scopedSlots:t._u([{key:"actions",fn:function(){return[e("b-button",{staticClass:"w-20",attrs:{variant:"outline-success"},on:{click:t.clearCache}},[t._v("\n                                  Clear")])]},proxy:!0}])}),e("base-input",{attrs:{size:"sm",label:"CDN",prelabel:"",readonly:"",value:" Reset to master Config"},scopedSlots:t._u([{key:"actions",fn:function(){return[e("b-button",{staticClass:"w-20",attrs:{variant:"outline-success"},on:{click:t.resetCDN}},[t._v("\n                                  Reset")])]},proxy:!0}])})],1)],1)],1)],1)],1)])],1)],1)],1)},l=[],p=(n("a481"),n("6b54"),n("28a5"),n("7f7f"),n("96cf"),n("3b8d")),f=n("b600"),d=n("1675"),b="https://api.github.com/",h={components:{BaseCopy:f["default"],BaseInput:d["default"]},data:function(){return{tab:null,model:{client:"cherrybase.github.io",env:"",releaseVersion:"",betaVersion:"",alphaVersion:""},clientOptions:[{name:"UI-CDN",value:"cherrybase.github.io",env:["sandbox","app","release"],alpha:"app",beta:"sandbox",release:"gh-pages"},{name:"Cherry Webpick",value:"cherry-webpick",env:[],alpha:"publish",beta:"publish",release:"publish"}],deployed:{version:null,stamp:null,servers:[{context:"",version:"",stamp:"",title:"Account"},{context:"/admin",version:"",stamp:"",title:"AdminPanel"},{context:"/agent",version:"",stamp:"",title:"AgentDesk"},{context:"/bot",version:"",stamp:"",title:"BotMan"},{context:"/postman",version:"",stamp:"",title:"PostMan"},{context:"/xms",version:"",stamp:"",title:"XMS"}]}}},computed:{clientOption:function(){var t=this.model.client;return this.clientOptions.filter((function(e){return e.value==t}))[0]||{}},currentTab:function(){return this.tab||"client"}},mounted:function(){this.clientOnChange();var t=this;function e(){return n.apply(this,arguments)}function n(){return n=Object(p["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in t.deployed.servers)t.clientInf(t.deployed.servers[n]);case 1:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)}e(),setInterval((function(){return e()}),3e3)},methods:{clientOnChange:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this,fetch(new Request(b+"repos/cherrybase/".concat(this.model.client,"/commits/").concat(this.clientOption.alpha,"?page=0&per_page=1"),{method:"GET"})).then((function(t){return t.text()})).then((function(t){return JSON.parse(t)})).then((function(t){e.model.alphaVersion=t.sha})).catch((function(t){console.log(t)})),fetch(new Request(b+"repos/cherrybase/".concat(this.model.client,"/commits/").concat(this.clientOption.beta,"?page=0&per_page=1"),{method:"GET"})).then((function(t){return t.text()})).then((function(t){return JSON.parse(t)})).then((function(t){e.model.betaVersion=t.sha})).catch((function(t){console.log(t)})),fetch(new Request(b+"repos/cherrybase/".concat(this.model.client,"/tags?page=0&per_page=1"),{method:"GET"})).then((function(t){return t.text()})).then((function(t){return JSON.parse(t)})).then((function(t){e.model.releaseVersion=(t[0]||{}).name})).catch((function(t){console.log(t)})),"cherrybase.github.io"==this.model.client&&fetch(new Request("/api/config/cdn?beta=false",{method:"POST"})).then((function(t){return t.text()})).then((function(t){return JSON.parse(t)})).then((function(t){e.deployed.version=(t.results[0].value||"").split("@")[1]||"NULL"})).catch((function(t){console.error(t)}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateAlpha:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this,"cherrybase.github.io"==this.model.client&&(r=new URLSearchParams,r.append("version",e),r.append("url","https://cdn.jsdelivr.net/gh/cherrybase/".concat(this.model.client,"@").concat(e)),fetch(new Request("/api/config/cdn?beta=false",{method:"POST",body:r})).then((function(t){return t.text()})).then((function(t){return JSON.parse(t)})).then((function(t){n.deployed.version=(t.results[0].value||"").split("@")[1]||"NULL"})).catch((function(t){console.error(t)})));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),clientInf:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this,fetch(new Request(e.context+"/v2/api-docs?group=latest",{method:"GET"})).then((function(t){return t.text()})).then((function(t){return JSON.parse(t)})).then((function(t){e.version=t.info.version,e.stamp=new Date(e.version.replace("1.0 - ","")).toString()})).catch((function(t){console.error(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),clearCache:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch(new Request("/pub/amx/config/shared/clear/all",{method:"GET"}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),resetCDN:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch(new Request("/api/config?key=mry.cdn.url",{method:"DELETE"}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},v=h,m=n("2877"),y=Object(m["a"])(v,u,l,!1,null,null,null),g=y.exports;i["default"].use(a["a"]),c.a.config.autoSetContainer=!0,i["default"].use(c.a);var w={components:{AppReleases:g},computed:{layout:function(){return"dev-"+(this.$route.meta.layout||default_layout)+"-layout"}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(t)}},C=w,x=(n("3f90"),Object(m["a"])(C,r,o,!1,null,null,null));e["default"]=x.exports}}]);