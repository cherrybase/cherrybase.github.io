(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72c60f3a","chunk-2d0aed76"],{"0c7d":function(e,t,n){"use strict";n.r(t);var r=n("f6c6");t["default"]=r["a"].route({app:"admin",base:"/admin/",routes:[{path:"/",alias:"/app/home",name:"myanalytics",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-a9d2bcac")]).then(n.bind(null,"0ce3"))}},{path:"/app/reports/sessions",name:"AgentSessions",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-59840bcc")]).then(n.bind(null,"457f"))}},{path:"/app/reports/taxonomy",name:"ReportTaxonomy",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-762ff695")]).then(n.bind(null,"8ecf"))}},{path:"/app/moderate/import-chat",name:"ImportChat",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-ea416a88")]).then(n.bind(null,"8fde"))}},{path:"/app/moderate/imported-chat-logs",name:"ModImportChatLogs",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-5fa31614")]).then(n.bind(null,"3f3c"))}},{path:"/app/moderate/contacts",name:"ModContactMaster",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d20f363"),n.e("chunk-486d4ed2")]).then(n.bind(null,"e7e2"))}},{path:"/app/moderate/bulk-push-jobs",name:"ModBulkJobs",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-3a7f241f")]).then(n.bind(null,"7d7b"))}},{path:"/app/moderate/bulk-push-new",name:"ModBulkSend",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-183ac54d")]).then(n.bind(null,"e740"))}},{path:"/app/moderate/bulk-push-msgs/:bulkSessionId",name:"ModBulkMessages",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-7c1f3924")]).then(n.bind(null,"6682"))}},{path:"/app/admins/agents",name:"AgentsUsers",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-4faf0ef7")]).then(n.bind(null,"fa17"))}},{path:"/app/admins/agents/list",name:"AgentsList",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-64e4705d")]).then(n.bind(null,"889d"))}},{path:"/app/admins/agents/add",name:"AgentsAdd",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-865b8214")]).then(n.bind(null,"cca6"))}},{path:"/app/admins/agents/teams",name:"AgentsTeams",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-757f3ce2")]).then(n.bind(null,"3b50"))}},{path:"/auth/login",name:"LoginBoxed",meta:{layout:"userpages"},component:function(){return n.e("chunk-157d340e").then(n.bind(null,"c0dc"))}},{path:"/app/admins/tmpl/quickreplies",name:"quickreplies",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-0c2703ba")]).then(n.bind(null,"0fcc"))}},{path:"/app/admins/tmpl/quickactions",name:"quickactions",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-300496ba")]).then(n.bind(null,"3fbe"))}},{path:"/app/admins/tmpl/quicklabels",name:"quicklabels",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-70018d06")]).then(n.bind(null,"51a8"))}},{path:"/app/admins/tmpl/quicktags",name:"quicktags",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-7032cc84")]).then(n.bind(null,"194a"))}},{path:"/app/admins/tmpl/quickmedia",name:"quickmedia",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-7d305698")]).then(n.bind(null,"8f06"))}},{path:"/app/admins/tmpl/pushtemplate/:mode/:itemId",name:"pushtemplate",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d230ab4"),n.e("chunk-52427dde")]).then(n.bind(null,"a8b6"))}},{path:"/app/admins/tmpl/wabatemplate/view/all",name:"wabatemplates",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-6c5ed8b4"),n.e("chunk-8a718592")]).then(n.bind(null,"9d13"))}},{path:"/app/admins/tmpl/wabatemplate/:channelId/:code/:lang",name:"wabatemplate",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-6c5ed8b4"),n.e("chunk-8a718592")]).then(n.bind(null,"9d13"))}},{path:"/app/setup/agent-panel",name:"SetUpAgentPanel",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-f4736b36")]).then(n.bind(null,"d36b"))}},{path:"/app/setup/client-api-keys",name:"SetUpApiKeys",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d20f363"),n.e("chunk-4a51ee3c")]).then(n.bind(null,"4552"))}},{path:"/app/setup/company-vars",name:"SetUpCompanyVars",component:function(){return n.e("chunk-2d0aa58a").then(n.bind(null,"112f"))}},{path:"/app/setup/channels",name:"SetUpChannels",component:function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d20f363"),n.e("chunk-2a7f2a4f")]).then(n.bind(null,"6d14"))}},{path:"app/admins/components/modals",name:"modals",component:function(){return Promise.all([n.e("chunk-2d230ab4"),n.e("chunk-2d215cc0"),n.e("chunk-cc5d8c3c")]).then(n.bind(null,"339f"))}}]})},"206e":function(e,t,n){"use strict";var r={bind:function(e,t,n){e.clickOutsideEvent=function(r){e==r.target||e.contains(r.target)||n.context[t.expression](r)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},a={install:function(e){e.directive("click-outside",r)}};t["a"]=a},"4eb5":function(e,t,n){var r=n("6981"),a={autoSetContainer:!1,appendToBody:!0},c={install:function(e){var t="3."===e.version.slice(0,2)?e.config.globalProperties:e.prototype;t.$clipboardConfig=a,t.$copyText=function(e,t){return new Promise((function(n,c){var u=document.createElement("button"),o=new r(u,{text:function(){return e},action:function(){return"copy"},container:"object"===typeof t?t:document.body});o.on("success",(function(e){o.destroy(),n(e)})),o.on("error",(function(e){o.destroy(),c(e)})),a.appendToBody&&document.body.appendChild(u),u.click(),a.appendToBody&&document.body.removeChild(u)}))},e.directive("clipboard",{bind:function(e,t,n){if("success"===t.arg)e._vClipboard_success=t.value;else if("error"===t.arg)e._vClipboard_error=t.value;else{var c=new r(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"},container:a.autoSetContainer?e:void 0});c.on("success",(function(t){var n=e._vClipboard_success;n&&n(t)})),c.on("error",(function(t){var n=e._vClipboard_error;n&&n(t)})),e._vClipboard=c}},update:function(e,t){"success"===t.arg?e._vClipboard_success=t.value:"error"===t.arg?e._vClipboard_error=t.value:(e._vClipboard.text=function(){return t.value},e._vClipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){e._vClipboard&&("success"===t.arg?delete e._vClipboard_success:"error"===t.arg?delete e._vClipboard_error:(e._vClipboard.destroy(),delete e._vClipboard))}})},config:a};e.exports=c},6981:function(e,t,n){
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,n){e.exports=n()}(0,(function(){return t={686:function(e,t,n){"use strict";n.d(t,{default:function(){return g}});t=n(279);var r=n.n(t),a=(t=n(370),n.n(t)),c=(t=n(817),n.n(t));function u(e){try{return document.execCommand(e)}catch(e){return}}var o=function(e){return e=c()(e),u("cut"),e},i=function(e){var t,n,r,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},o="";return"string"==typeof e?(t=e,n="rtl"===document.documentElement.getAttribute("dir"),(r=document.createElement("textarea")).style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[n?"right":"left"]="-9999px",n=window.pageYOffset||document.documentElement.scrollTop,r.style.top="".concat(n,"px"),r.setAttribute("readonly",""),r.value=t,r=r,a.container.appendChild(r),o=c()(r),u("copy"),r.remove()):(o=c()(e),u("copy")),o};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,r=e.container;t=e.target,e=e.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==t){if(!t||"object"!==s(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return e?i(e,{container:r}):t?"cut"===n?o(t):i(t,{container:r}):void 0};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,r=h(t);return e=n?(e=h(this).constructor,Reflect.construct(r,arguments,e)):r.apply(this,arguments),r=this,!(e=e)||"object"!==l(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):e}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if(e="data-clipboard-".concat(e),t.hasAttribute(e))return t.getAttribute(e)}var g=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,r());var e,t,n,c=f(u);function u(e,t){var n;return function(e){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")}(this),(n=c.call(this)).resolveOptions(t),n.listenClick(e),n}return e=u,n=[{key:"copy",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return i(e,t)}},{key:"cut",value:function(e){return o(e)}},{key:"isSupported",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t=(e="string"==typeof e?[e]:e,!!document.queryCommandSupported);return e.forEach((function(e){t=t&&!!document.queryCommandSupported(e)})),t}}],(t=[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===l(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy";e=p({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(e?"success":"error",{action:n,text:e,trigger:t,clearSelection:function(){t&&t.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return b("action",e)}},{key:"defaultTarget",value:function(e){if(e=b("target",e),e)return document.querySelector(e)}},{key:"defaultText",value:function(e){return b("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&d(e.prototype,t),n&&d(e,n),u}()},828:function(e){var t;"undefined"==typeof Element||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var r=n(828);function a(e,t,n,a,c){var u=function(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,u,c),{destroy:function(){e.removeEventListener(n,u,c)}}}e.exports=function(e,t,n,r,c){return"function"==typeof e.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,r,c)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var r=n(879),a=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return s=t,p=n,(i=e).addEventListener(s,p),{destroy:function(){i.removeEventListener(s,p)}};if(r.nodeList(e))return c=e,u=t,o=n,Array.prototype.forEach.call(c,(function(e){e.addEventListener(u,o)})),{destroy:function(){Array.prototype.forEach.call(c,(function(e){e.removeEventListener(u,o)}))}};if(r.string(e))return e=e,t=t,n=n,a(document.body,e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var c,u,o,i,s,p}},817:function(e){e.exports=function(e){var t,n="SELECT"===e.nodeName?(e.focus(),e.value):"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName?((t=e.hasAttribute("readonly"))||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),t||e.removeAttribute("readonly"),e.value):(e.hasAttribute("contenteditable")&&e.focus(),n=window.getSelection(),(t=document.createRange()).selectNodeContents(e),n.removeAllRanges(),n.addRange(t),n.toString());return n}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var c=0,u=r.length;c<u;c++)r[c].fn!==t&&r[c].fn._!==t&&a.push(r[c]);return a.length?n[e]=a:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},n={},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e(686).default;function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}};return t[r](a,a.exports,e),a.exports}var t,n}))},ae03:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("MyTheme")],1)},a=[],c=n("a026"),u=(n("0c7d"),n("7f7f"),n("96cf"),n("3b8d")),o=n("bc3a"),i=n.n(o),s=n("3ef3");function p(e,t){return l.apply(this,arguments)}function l(){return l=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post(t,n);case 3:return r=e.sent,e.abrupt("return",r);case 7:if(e.prev=7,e.t0=e["catch"](0),!e.t0.response||!e.t0.response){e.next=11;break}throw e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),l.apply(this,arguments)}var d={user:null,posts:null,agents:null,teams:null,chatsCounter:1,meta:null,quickReplies:[],qreps:null,qaxns:null,qlabels:null,qtags:null,qmeds:null},m={isAuthenticated:function(e){return!!e.user},StateQReps:function(e){return e.qreps},StateQMeds:function(e){return e.qmeds},StateQAxns:function(e){return e.qaxns},StateQLabels:function(e){return e.qlabels},StateQTags:function(e){return e.qtags},StateTeams:function(e){return e.teams},StateAgents:function(e){return e.agents},StateMeta:function(e){return e.meta}},f={Register:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,i.a.post("register",n);case 3:return a=new URLSearchParams,a.append("username",n.username),a.append("password",n.password),e.next=8,r("LogIn",a);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LogIn:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i.a.post("/auth/login/submit",n).then((function(e){if("SUCCESS"!==e.data.statusKey)throw e.data}));case 3:return e.next=5,r("setUser",n.get("username"));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LogOut:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,i.a.get("/auth/logout"),r=null,n("logout",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),CreatTeam:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i.a.post("/api/admins/dept",n);case 3:a=e.sent,r("setTeams",a.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetTeams:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,i.a.get("/api/admins/dept");case 3:r=e.sent,n("setTeams",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),SetTeamsDefault:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new URLSearchParams,a.append("dept_id",n.id),e.next=5,i.a.post("/api/admins/dept/default",a);case 5:c=e.sent,r("setTeams",c.data.results);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetAgents:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,i.a.get("/api/admins/agent");case 3:r=e.sent,n("setAgents",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),CreateAgent:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n.agent_channels=(n.channels||[]).join(","),e.next=4,p("/api/admins/agent",n);case 4:a=e.sent,r("setAgents",a.data.results);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SetAgentDefault:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new URLSearchParams,a.append("agent_id",n.id),e.next=5,i.a.post("/api/admins/agent/default",a);case 5:c=e.sent,r("setAgents",c.data.results);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),DeActivateAgent:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,console.log("--",n),n.isactive="Y"==n.isactive?"N":"Y",a=new URLSearchParams,a.append("agent_id",n.id),a.append("status",n.isactive),e.next=8,i.a.delete("/api/admins/agent?agent_id="+n.id+"&status="+n.isactive,{data:{id:n.id,status:n.isactive}});case 8:c=e.sent,r("setAgents",c.data);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),DeAdminAgent:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,console.log("--",n),a=new URLSearchParams,a.append("agent_id",n.id),e.next=6,i.a.post("/api/admins/agent/admin",a);case 6:c=e.sent,r("setAgents",c.data);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadAnalytics:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,i.a.post("/admin/agent-dashboard-analytics",n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadAgentList:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/admin/fetch-agent-chat-session-list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),CreatQuickReps:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new URLSearchParams,a.append("id",n.id),a.append("category",n.category),a.append("title",n.title),a.append("template",n.template),e.next=8,i.a.post("/api/tmpl/quickreps",a);case 8:c=e.sent,r("setQReps",c.data.results);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetQuickReps:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,i.a.get("/api/tmpl/quickreps");case 3:r=e.sent,n("setQReps",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickReps:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i.a.delete("/api/tmpl/quickreps?id="+n.id,{data:{id:n.id}});case 3:a=e.sent,r("setQReps",a.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),CreatQuickAxns:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new URLSearchParams,a.append("id",n.id),a.append("category",n.category),a.append("title",n.title),a.append("code",n.code),e.next=8,i.a.post("/api/tmpl/quickaxn",a);case 8:c=e.sent,r("setQAxns",c.data.results);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetQuickAxns:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,i.a.get("/api/tmpl/quickaxn");case 3:r=e.sent,n("setQAxns",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickAxns:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i.a.delete("/api/tmpl/quickaxn?id="+n.id,{data:{id:n.id}});case 3:a=e.sent,r("setQAxns",a.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),CreatQuickLabels:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new URLSearchParams,a.append("id",n.id),a.append("category",n.category),a.append("title",n.title),a.append("code",n.code),e.next=8,i.a.post("/api/tmpl/quicklabels",a);case 8:c=e.sent,r("setQLabels",c.data.results);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadQuickLabels:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,i.a.get("/api/tmpl/quicklabels");case 3:r=e.sent,n("setQLabels",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickLabels:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i.a.delete("/api/tmpl/quicklabels?id="+n.id,{data:{id:n.id}});case 3:a=e.sent,r("setQLabels",a.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),CreatQuickTags:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new URLSearchParams,a.append("id",n.id),a.append("category",n.category),a.append("title",n.title),a.append("code",n.code),e.next=8,i.a.post("/api/tmpl/quicktags",a);case 8:c=e.sent,r("setQTags",c.data.results);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadQuickTags:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,i.a.get("/api/tmpl/quicktags");case 3:r=e.sent,n("setQTags",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickTags:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i.a.delete("/api/tmpl/quicktags?id="+n.id,{data:{id:n.id}});case 3:a=e.sent,r("setQTags",a.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),CreatQuickMeds:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new URLSearchParams,a.append("name",n.name),a.append("category",n.category),a.append("title",n.title),a.append("url",n.url),a.append("content",n.content),e.next=9,i.a.post("/api/tmpl/quickmedia",a);case 9:c=e.sent,r("setQMeds",c.data.results);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetQuickMeds:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,i.a.get("/api/tmpl/quickmedia");case 3:r=e.sent,n("setQMeds",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickMeds:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i.a.delete("/api/tmpl/quickmedia?id="+n.name,{data:{id:n.id}});case 3:a=e.sent,r("setQMeds",a.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessions:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,i.a.get("/api/message/session",{params:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessionChats:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,i.a.post("/api/message/messages",n);case 3:return r=e.sent,e.abrupt("return",r.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),DeleteSessionChats:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,i.a.post("/api/message/session/remove",n);case 3:return r=e.sent,e.abrupt("return",r.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetTaxonomy:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,i.a.post("/admin/tag-analytics",n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),ParseChatFile:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,r=new FormData,r.append("file",n.file),r.append("contactType",n.contactType),r.append("clientDate",n.clientDate),r.append("clientDateFormat",n.clientDateFormat),e.next=8,p("/api/message/session/parse",r);case 8:return a=e.sent,e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UploadParsedChat:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,p("/api/message/session/import",n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetConfigs:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,i.a.get("/api/config");case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),SetConfigs:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,i.a.post("/api/config",n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetRequest:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,r=n.url,a=n.params,e.next=4,i.a.get(r,{params:a});case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),PostRequest:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,r=n.url,a=n.params,e.next=4,i.a.post(r,a);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},h={setQLabels:function(e,t){e.qlabels=t,s["a"].addContactLabels(t)},setQTags:function(e,t){e.qtags=t,s["a"].addContactLabels(t)},setQAxns:function(e,t){e.qaxns=t},setQReps:function(e,t){e.qreps=t},setQMeds:function(e,t){e.qmeds=t},setTeams:function(e,t){e.teams=t},setAgents:function(e,t){e.agents=t},setMeta:function(e,t){e.meta=t},setUser:function(e,t){e.user=t},setPosts:function(e,t){e.posts=t},logout:function(e,t){e.user=t}},b={state:d,getters:m,actions:f,mutations:h},g=n("7bb1"),k=n("4eb5"),v=n.n(k),y=n("206e"),w=(n("0808"),n("6944")),x=n.n(w),R=n("caf9"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("style",{tag:"component",domProps:{innerHTML:e._s(e.style)}})},O=[],P={props:{},components:{},computed:{style:function(){return"\n                :root {\n                    --scheme-color: ".concat(this.$global.MyConst.config.SETUP.POSTMAN_AGENT_SCHEME_COLOR,";\n                    --scheme-color-rgb : ").concat(this.hex2rgb(this.$global.MyConst.config.SETUP.POSTMAN_AGENT_SCHEME_COLOR).rgb,";\n                    --scheme-color-rgba : ").concat(this.hex2rgb(this.$global.MyConst.config.SETUP.POSTMAN_AGENT_SCHEME_COLOR).rgba,";\n                }\n                ")}},methods:{hex2rgb:function(e){var t,n,r;if("#"==e[0]&&(e=e.substr(1)),console.log("color",e),6==e.length)t="".concat(e[0]).concat(e[1]),n="".concat(e[2]).concat(e[3]),r="".concat(e[4]).concat(e[5]);else{if(3!=e.length)return{};t="".concat(e[0]).concat(e[0]),n="".concat(e[1]).concat(e[1]),r="".concat(e[2]).concat(e[2])}return t=parseInt(t,16),n=parseInt(n,16),r=parseInt(r,16),{rgb:"".concat(t," ").concat(n," ").concat(r),rgba:"".concat(t," , ").concat(n," , ").concat(r)}}}},A=P,C=n("2877"),T=Object(C["a"])(A,S,O,!1,null,null,null),j=T.exports;c["default"].component("admin-default-layout",(function(){return Promise.all([n.e("chunk-2d230ab4"),n.e("chunk-2d215cc0"),n.e("chunk-45b62573")]).then(n.bind(null,"8b24"))})),c["default"].component("admin-userpages-layout",(function(){return n.e("chunk-2d0b65b3").then(n.bind(null,"1d8b"))})),c["default"].component("master-view",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d20f363"),n.e("chunk-1ebc24b8")]).then(n.bind(null,"2f9b"))})),c["default"].component("ValidationProvider",g["b"]),c["default"].component("ValidationObserver",g["a"]),c["default"].component("BaseInput",(function(){return n.e("chunk-6c5ed8b4").then(n.bind(null,"1675"))})),c["default"].component("BaseTextArea",(function(){return Promise.all([n.e("chunk-91ce23c8"),n.e("chunk-55cff984")]).then(n.bind(null,"2051"))})),c["default"].component("BaseSelect",(function(){return n.e("chunk-5c5f1bba").then(n.bind(null,"de0d"))})),c["default"].component("ButtonRadioGroup",(function(){return n.e("chunk-60f9446e").then(n.bind(null,"9085"))})),c["default"].component("BaseDropdown",(function(){return n.e("chunk-05bace0a").then(n.bind(null,"860d"))})),c["default"].use(y["a"]),c["default"].component("XSimpleForm",(function(){return n.e("chunk-2d2311aa").then(n.bind(null,"eeb6"))})),c["default"].component("MyModalBox",(function(){return n.e("chunk-2d0ac3fc").then(n.bind(null,"1975"))})),c["default"].component("MySource",(function(){return n.e("chunk-3f341158").then(n.bind(null,"ebba"))})),c["default"].component("MyText",(function(){return n.e("chunk-fcd13698").then(n.bind(null,"e26b"))})),c["default"].component("MyDatePicker",(function(){return Promise.all([n.e("chunk-6c75c417"),n.e("chunk-2d0be2cc"),n.e("chunk-2d217aa7")]).then(n.bind(null,"c862"))})),c["default"].component("ForEachOption",(function(){return n.e("chunk-63ed33e5").then(n.bind(null,"2a67"))})),c["default"].component("MyVSelect",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-2d0bb20c"),n.e("chunk-4c70da1a")]).then(n.bind(null,"2eb3"))})),c["default"].component("BaseVSelect",(function(){return Promise.all([n.e("chunk-1518b02a"),n.e("chunk-2d0bb20c"),n.e("chunk-d8f58932")]).then(n.bind(null,"ecdf2"))})),c["default"].component("MyAxon",(function(){return n.e("chunk-2d0c89aa").then(n.bind(null,"561d"))})),c["default"].component("MyIcon",(function(){return n.e("chunk-2d0c4607").then(n.bind(null,"3b24"))})),v.a.config.autoSetContainer=!0,c["default"].use(v.a),c["default"].use(x.a);var E=n.p+"/_common/static/loading-spin.svg",_=n.p+"/_common/static/loading-spin.svg";c["default"].use(R["a"],{preLoad:1.3,error:_,loading:E,attempt:1,throttleWait:1e3});var L="default";console.log("ADMIN APP IS LOADED");var M={name:"AppAdmin",components:{MyTheme:j},computed:{layout:function(){return"admin-"+(this.$route.meta.layout||L)+"-layout"}},mounted:function(e){var t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(t)},created:function(){this.$store.registerModule("DataStore",b)}},q=M,Q=(n("c8f5"),Object(C["a"])(q,r,a,!1,null,null,null));t["default"]=Q.exports},b4a7:function(e,t,n){},c8f5:function(e,t,n){"use strict";n("b4a7")}}]);