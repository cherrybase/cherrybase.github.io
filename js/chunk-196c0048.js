(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-196c0048","chunk-2d0aed76"],{"0c7d":function(e,t,n){"use strict";n.r(t);var r=n("f6c6");t["default"]=r["a"].route({app:"admin",base:"/admin/",routes:[{path:"/",alias:"/app/home",name:"myanalytics",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-2d0b90b4"),n.e("chunk-044bdcd9")]).then(n.bind(null,"0ce3"))}},{path:"/app/reports/sessions",name:"AgentSessions",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-61461aca"),n.e("chunk-fd96febe")]).then(n.bind(null,"457f"))}},{path:"/app/reports/taxonomy",name:"ReportTaxonomy",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-61461aca"),n.e("chunk-4d23c9ca")]).then(n.bind(null,"8ecf"))}},{path:"/app/moderate/import-chat",name:"ImportChat",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-9c1993ee")]).then(n.bind(null,"8fde"))}},{path:"/app/moderate/imported-chat-logs",name:"ModImportChatLogs",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-61461aca"),n.e("chunk-2d0c5559")]).then(n.bind(null,"3f3c"))}},{path:"/app/moderate/contacts",name:"ModContactMaster",component:function(){return Promise.all([n.e("chunk-74372293"),n.e("chunk-6b15b36b")]).then(n.bind(null,"e7e2"))}},{path:"/app/moderate/bulk-push-jobs",name:"ModBulkJobs",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-61461aca"),n.e("chunk-ad9b8694")]).then(n.bind(null,"7d7b"))}},{path:"/app/moderate/bulk-push-new",name:"ModBulkSend",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-eabfa370")]).then(n.bind(null,"e740"))}},{path:"/app/moderate/bulk-push-msgs/:bulkSessionId",name:"ModBulkMessages",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-61461aca"),n.e("chunk-09d3710d")]).then(n.bind(null,"6682"))}},{path:"/app/admins/agents",name:"AgentsUsers",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-2d237117")]).then(n.bind(null,"fa17"))}},{path:"/app/admins/agents/list",name:"AgentsList",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-563187c0")]).then(n.bind(null,"889d"))}},{path:"/app/admins/agents/add",name:"AgentsAdd",component:function(){return Promise.all([n.e("chunk-74372293"),n.e("chunk-2d22214b")]).then(n.bind(null,"cca6"))}},{path:"/app/admins/agents/teams",name:"AgentsTeams",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-2d0c4660")]).then(n.bind(null,"3b50"))}},{path:"/auth/login",name:"LoginBoxed",meta:{layout:"userpages"},component:function(){return n.e("chunk-7a67f546").then(n.bind(null,"c0dc"))}},{path:"/app/admins/tmpl/quickreplies",name:"quickreplies",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-2604a8f2"),n.e("chunk-2d0afe0c")]).then(n.bind(null,"0fcc"))}},{path:"/app/admins/tmpl/quickactions",name:"quickactions",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-7d44d21e")]).then(n.bind(null,"3fbe"))}},{path:"/app/admins/tmpl/quicklabels",name:"quicklabels",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-bb01d27e")]).then(n.bind(null,"51a8"))}},{path:"/app/admins/tmpl/quickmedia",name:"quickmedia",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-517e26b8"),n.e("chunk-2d0e9aaa")]).then(n.bind(null,"8f06"))}},{path:"/app/admins/tmpl/pushtemplate/:mode/:itemId",name:"pushtemplate",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-74372293"),n.e("chunk-2604a8f2"),n.e("chunk-7a2f4f18")]).then(n.bind(null,"096e"))}},{path:"/app/setup/agent-panel",name:"SetUpAgentPanel",component:function(){return Promise.all([n.e("chunk-74372293"),n.e("chunk-7ace8d66")]).then(n.bind(null,"0f73"))}},{path:"/app/setup/client-api-keys",name:"SetUpAgentPanel",component:function(){return Promise.all([n.e("chunk-74372293"),n.e("chunk-719eaeb0")]).then(n.bind(null,"5c42"))}},{path:"/app/setup/channels",name:"SetUpChannels",component:function(){return Promise.all([n.e("chunk-74372293"),n.e("chunk-29a785c0")]).then(n.bind(null,"e923"))}},{path:"app/admins/components/modals",name:"modals",component:function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-c0c1ecb6")]).then(n.bind(null,"339f"))}}]})},"4eb5":function(e,t,n){var r=n("6981"),a={autoSetContainer:!1,appendToBody:!0},c={install:function(e){var t="3."===e.version.slice(0,2)?e.config.globalProperties:e.prototype;t.$clipboardConfig=a,t.$copyText=function(e,t){return new Promise((function(n,c){var i=document.createElement("button"),o=new r(i,{text:function(){return e},action:function(){return"copy"},container:"object"===typeof t?t:document.body});o.on("success",(function(e){o.destroy(),n(e)})),o.on("error",(function(e){o.destroy(),c(e)})),a.appendToBody&&document.body.appendChild(i),i.click(),a.appendToBody&&document.body.removeChild(i)}))},e.directive("clipboard",{bind:function(e,t,n){if("success"===t.arg)e._vClipboard_success=t.value;else if("error"===t.arg)e._vClipboard_error=t.value;else{var c=new r(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"},container:a.autoSetContainer?e:void 0});c.on("success",(function(t){var n=e._vClipboard_success;n&&n(t)})),c.on("error",(function(t){var n=e._vClipboard_error;n&&n(t)})),e._vClipboard=c}},update:function(e,t){"success"===t.arg?e._vClipboard_success=t.value:"error"===t.arg?e._vClipboard_error=t.value:(e._vClipboard.text=function(){return t.value},e._vClipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){e._vClipboard&&("success"===t.arg?delete e._vClipboard_success:"error"===t.arg?delete e._vClipboard_error:(e._vClipboard.destroy(),delete e._vClipboard))}})},config:a};e.exports=c},6981:function(e,t,n){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,n){e.exports=n()}(0,(function(){return t={134:function(e,t,n){"use strict";n.d(t,{default:function(){return h}});t=n(279);var r=n.n(t),a=(t=n(370),n.n(t)),c=(t=n(817),n.n(t));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.resolveOptions(t),this.initSelection()}var t,n,r;return t=e,(n=[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir");return this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px",e=window.pageYOffset||document.documentElement.scrollTop,this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=c()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=c()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==i(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}])&&o(t.prototype,n),r&&o(t,r),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,r=f(t);return e=n?(e=f(this).constructor,Reflect.construct(r,arguments,e)):r.apply(this,arguments),r=this,!(e=e)||"object"!==s(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):e}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if(e="data-clipboard-".concat(e),t.hasAttribute(e))return t.getAttribute(e)}var h=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,r());var e,t,n,c=d(i);function i(e,t){var n;return function(e){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this),(n=c.call(this)).resolveOptions(t),n.listenClick(e),n}return e=i,n=[{key:"isSupported",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t=(e="string"==typeof e?[e]:e,!!document.queryCommandSupported);return e.forEach((function(e){t=t&&!!document.queryCommandSupported(e)})),t}}],(t=[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===s(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){e=e.delegateTarget||e.currentTarget,this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(e){return m("action",e)}},{key:"defaultTarget",value:function(e){if(e=m("target",e),e)return document.querySelector(e)}},{key:"defaultText",value:function(e){return m("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&l(e.prototype,t),n&&l(e,n),i}()},828:function(e){var t;"undefined"==typeof Element||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var r=n(828);function a(e,t,n,a,c){var i=function(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,i,c),{destroy:function(){e.removeEventListener(n,i,c)}}}e.exports=function(e,t,n,r,c){return"function"==typeof e.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,r,c)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var r=n(879),a=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return s=t,l=n,(u=e).addEventListener(s,l),{destroy:function(){u.removeEventListener(s,l)}};if(r.nodeList(e))return c=e,i=t,o=n,Array.prototype.forEach.call(c,(function(e){e.addEventListener(i,o)})),{destroy:function(){Array.prototype.forEach.call(c,(function(e){e.removeEventListener(i,o)}))}};if(r.string(e))return e=e,t=t,n=n,a(document.body,e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var c,i,o,u,s,l}},817:function(e){e.exports=function(e){var t,n="SELECT"===e.nodeName?(e.focus(),e.value):"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName?((t=e.hasAttribute("readonly"))||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),t||e.removeAttribute("readonly"),e.value):(e.hasAttribute("contenteditable")&&e.focus(),n=window.getSelection(),(t=document.createRange()).selectNodeContents(e),n.removeAllRanges(),n.addRange(t),n.toString());return n}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var c=0,i=r.length;c<i;c++)r[c].fn!==t&&r[c].fn._!==t&&a.push(r[c]);return a.length?n[e]=a:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},n={},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e(134).default;function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}};return t[r](a,a.exports,e),a.exports}var t,n}))},"7f7f":function(e,t,n){var r=n("86cc").f,a=Function.prototype,c=/^\s*function ([^ (]*)/,i="name";i in a||n("9e1e")&&r(a,i,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},ae03:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},a=[],c=(n("8e6e"),n("456d"),n("ac6a"),n("bd86")),i=n("a026"),o=(n("0c7d"),n("7f7f"),n("96cf"),n("3b8d")),u=(n("6b54"),n("bc3a")),s=n.n(u),l=n("3ef3");function p(e){return e}function d(e,t){return f.apply(this,arguments)}function f(){return f=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post(t,n);case 3:return r=e.sent,e.abrupt("return",r);case 7:if(e.prev=7,e.t0=e["catch"](0),!e.t0.response||!e.t0.response){e.next=12;break}throw p(e.t0.response),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))),f.apply(this,arguments)}var m={user:null,posts:null,agents:null,teams:null,chatsCounter:1,meta:null,quickReplies:[],qreps:null,qaxns:null,qlabels:null,qmeds:null},h={isAuthenticated:function(e){return!!e.user},StateQReps:function(e){return e.qreps},StateQMeds:function(e){return e.qmeds},StateQAxns:function(e){return e.qaxns},StateQLabels:function(e){return e.qlabels},StateTeams:function(e){return e.teams},StateAgents:function(e){return e.agents},StateMeta:function(e){return e.meta}},g={Register:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,s.a.post("register",n);case 3:return a=new FormData,a.append("username",n.username),a.append("password",n.password),e.next=8,r("LogIn",a);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LogIn:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,s.a.post("/auth/login/submit",n).then((function(e){if("SUCCESS"!==e.data.statusKey)throw e.data}));case 3:return e.next=5,r("setUser",n.get("username"));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LogOut:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,s.a.get("/auth/logout"),r=null,n("logout",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),CreatTeam:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,s.a.post("/api/admins/dept",n);case 3:a=e.sent,p(a),r("setTeams",a.data.results);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetTeams:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,s.a.get("/api/admins/dept");case 3:r=e.sent,p(r),n("setTeams",r.data.results);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),SetTeamsDefault:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new FormData,a.append("dept_id",n.id),e.next=5,s.a.post("/api/admins/dept/default",a);case 5:c=e.sent,p(c),r("setTeams",c.data.results);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetAgents:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,s.a.get("/api/admins/agent");case 3:r=e.sent,n("setAgents",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),CreateAgent:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n.agent_channels=(n.channels||[]).join(","),e.next=4,d("/api/admins/agent",n);case 4:a=e.sent,p(a),r("setAgents",a.data.results);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),SetAgentDefault:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new FormData,a.append("agent_id",n.id),e.next=5,s.a.post("/api/admins/agent/default",a);case 5:c=e.sent,p(c),r("setAgents",c.data.results);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),DeActivateAgent:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,console.log("--",n),n.isactive="Y"==n.isactive?"N":"Y",a=new FormData,a.append("agent_id",n.id),a.append("status",n.isactive),e.next=8,s.a.delete("/api/admins/agent?agent_id="+n.id+"&status="+n.isactive,{data:{id:n.id,status:n.isactive}});case 8:c=e.sent,p(c),r("setAgents",c.data);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),DeAdminAgent:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,console.log("--",n),a=new FormData,a.append("agent_id",n.id),e.next=6,s.a.post("/api/admins/agent/admin",a);case 6:c=e.sent,p(c),r("setAgents",c.data);case 9:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadAnalytics:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,s.a.post("/admin/agent-dashboard-analytics",n);case 3:return r=e.sent,p(r),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),CreatQuickReps:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new FormData,a.append("id",n.id),a.append("category",n.category),a.append("title",n.title),a.append("template",n.template),e.next=8,s.a.post("/api/tmpl/quickreps",a);case 8:c=e.sent,p(c),r("setQReps",c.data.results);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetQuickReps:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,s.a.get("/api/tmpl/quickreps");case 3:r=e.sent,n("setQReps",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickReps:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,s.a.delete("/api/tmpl/quickreps?id="+n.id,{data:{id:n.id}});case 3:a=e.sent,p(a),r("setQReps",a.data.results);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),CreatQuickAxns:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new FormData,a.append("id",n.id),a.append("category",n.category),a.append("title",n.title),a.append("code",n.code),e.next=8,s.a.post("/api/tmpl/quickaxn",a);case 8:c=e.sent,p(c),r("setQAxns",c.data.results);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetQuickAxns:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,s.a.get("/api/tmpl/quickaxn");case 3:r=e.sent,n("setQAxns",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickAxns:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,s.a.delete("/api/tmpl/quickaxn?id="+n.id,{data:{id:n.id}});case 3:a=e.sent,p(a),r("setQAxns",a.data.results);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),CreatQuickLabels:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new FormData,a.append("id",n.id),a.append("category",n.category),a.append("title",n.title),a.append("code",n.code),e.next=8,s.a.post("/api/tmpl/quicklabels",a);case 8:c=e.sent,p(c),r("setQLabels",c.data.results);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),LoadQuickLabels:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,s.a.get("/api/tmpl/quicklabels");case 3:r=e.sent,n("setQLabels",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickLabels:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,s.a.delete("/api/tmpl/quicklabels?id="+n.id,{data:{id:n.id}});case 3:a=e.sent,p(a),r("setQLabels",a.data.results);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),CreatQuickMeds:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=new FormData,a.append("name",n.name),a.append("category",n.category),a.append("title",n.title),a.append("url",n.url),a.append("content",n.content),e.next=9,s.a.post("/api/tmpl/quickmedia",a);case 9:c=e.sent,p(c),r("setQMeds",c.data.results);case 12:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetQuickMeds:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,s.a.get("/api/tmpl/quickmedia");case 3:r=e.sent,n("setQMeds",r.data.results);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),DeleteQuickMeds:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,s.a.delete("/api/tmpl/quickmedia?id="+n.name,{data:{id:n.id}});case 3:a=e.sent,p(a),r("setQMeds",a.data.results);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessions:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,s.a.get("/api/message/session",{params:n});case 3:return r=e.sent,p(r),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetSessionChats:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,s.a.post("/api/message/messages",n);case 3:return r=e.sent,p(r),e.abrupt("return",r.data.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),DeleteSessionChats:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,s.a.post("/api/message/session/remove",n);case 3:return r=e.sent,p(r),e.abrupt("return",r.data.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetTaxonomy:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,s.a.post("/admin/tag-analytics",n);case 3:return r=e.sent,p(r),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),ParseChatFile:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,r=new FormData,r.append("file",n.file),r.append("contactType",n.contactType),r.append("clientDate",n.clientDate),r.append("clientDateFormat",n.clientDateFormat),e.next=8,d("/api/message/session/parse",r);case 8:return a=e.sent,p(a),e.abrupt("return",a.data);case 11:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UploadParsedChat:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,d("/api/message/session/import",n);case 3:return r=e.sent,p(r),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetConfigs:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,s.a.get("/api/config");case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),SetConfigs:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,s.a.post("/api/config",n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GetRequest:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,r=n.url,a=n.params,e.next=4,s.a.get(r,{params:a});case 4:return c=e.sent,p(c),e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),PostRequest:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,r=n.url,a=n.params,e.next=4,s.a.post(r,a);case 4:return c=e.sent,p(c),e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},b={setQLabels:function(e,t){e.qlabels=t,l["a"].addContactLabels(t)},setQAxns:function(e,t){e.qaxns=t},setQReps:function(e,t){e.qreps=t},setQMeds:function(e,t){e.qmeds=t},setTeams:function(e,t){e.teams=t},setAgents:function(e,t){e.agents=t},setMeta:function(e,t){e.meta=t},setUser:function(e,t){e.user=t},setPosts:function(e,t){e.posts=t},logout:function(e,t){e.user=t}},v={state:m,getters:h,actions:g,mutations:b},k=n("7bb1"),y=n("4c93"),w=n("4eb5"),x=n.n(w);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}i["default"].component("admin-default-layout",(function(){return Promise.all([n.e("chunk-4c7856c2"),n.e("chunk-2d215cc0"),n.e("chunk-6d05f115")]).then(n.bind(null,"8b24"))})),i["default"].component("admin-userpages-layout",(function(){return n.e("chunk-2d0b65b3").then(n.bind(null,"1d8b"))})),i["default"].component("ValidationProvider",k["b"]),i["default"].component("ValidationObserver",k["a"]),x.a.config.autoSetContainer=!0,i["default"].use(x.a);var j="default";Object(k["d"])("email",y["email"]),Object(k["d"])("regex",y["regex"]),Object(k["d"])("required",O(O({},y["required"]),{},{message:"This field is required"})),l["a"].validators.forEach((function(e){l["a"][e]&&Object(k["d"])(e,l["a"][e])})),console.log("ADMIN APP IS LOADED");var S={name:"AppAdmin",computed:{layout:function(){return"admin-"+(this.$route.meta.layout||j)+"-layout"}},mounted:function(e){var t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(t)},created:function(){this.$store.registerModule("DataStore",v)}},A=S,E=(n("c8f5"),n("2877")),C=Object(E["a"])(A,r,a,!1,null,null,null);t["default"]=C.exports},b4a7:function(e,t,n){},c8f5:function(e,t,n){"use strict";n("b4a7")}}]);