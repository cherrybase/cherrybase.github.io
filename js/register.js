(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0127":function(e,t,r){(function(t,r){e.exports=r()})("undefined"!==typeof self&&self,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="fb15")}({"24fb":function(e,t,r){"use strict";function n(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"===typeof btoa){var a=s(n),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(o).concat([a]).join("\n")}return[r].join("\n")}function s(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"===typeof e&&(e=[[null,e,""]]);var s={};if(n)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(s[o]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);n&&s[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},"499e":function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},s=0;s<t.length;s++){var a=t[s],o=a[0],i=a[1],c=a[2],l=a[3],u={id:e+":"+s,css:i,media:c,sourceMap:l};n[o]?n[o].parts.push(u):r.push(n[o]={id:o,parts:[u]})}return r}r.r(t),r.d(t,"default",(function(){return f}));var s="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,l=!1,u=function(){},d=null,m="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,r,s){l=r,d=s||{};var o=n(e,t);return b(o),function(t){for(var r=[],s=0;s<o.length;s++){var i=o[s],c=a[i.id];c.refs--,r.push(c)}t?(o=n(e,t),b(o)):o=[];for(s=0;s<r.length;s++){c=r[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete a[c.id]}}}}function b(e){for(var t=0;t<e.length;t++){var r=e[t],n=a[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(g(r.parts[s]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var o=[];for(s=0;s<r.parts.length;s++)o.push(g(r.parts[s]));a[r.id]={id:r.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,r,n=document.querySelector("style["+m+'~="'+e.id+'"]');if(n){if(l)return u;n.parentNode.removeChild(n)}if(p){var s=c++;n=i||(i=v()),t=w.bind(null,n,s,!1),r=w.bind(null,n,s,!0)}else n=v(),t=y.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var h=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function w(e,t,r,n){var s=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=h(t,s);else{var a=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function y(e,t){var r=t.css,n=t.media,s=t.sourceMap;if(n&&e.setAttribute("media",n),d.ssrId&&e.setAttribute(m,t.id),s&&(r+="\n/*# sourceURL="+s.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},8875:function(e,t,r){var n,s,a;(function(r,o){s=[],n=o,a="function"===typeof n?n.apply(t,s):n,void 0===a||(e.exports=a)})("undefined"!==typeof self&&self,(function(){function e(){var t=Object.getOwnPropertyDescriptor(document,"currentScript");if(!t&&"currentScript"in document&&document.currentScript)return document.currentScript;if(t&&t.get!==e&&document.currentScript)return document.currentScript;try{throw new Error}catch(p){var r,n,s,a=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=a.exec(p.stack)||o.exec(p.stack),c=i&&i[1]||!1,l=i&&i[2]||!1,u=document.location.href.replace(document.location.hash,""),d=document.getElementsByTagName("script");c===u&&(r=document.documentElement.outerHTML,n=new RegExp("(?:[^\\n]+?\\n){0,"+(l-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),s=r.replace(n,"$1").trim());for(var m=0;m<d.length;m++){if("interactive"===d[m].readyState)return d[m];if(d[m].src===c)return d[m];if(c===u&&d[m].innerHTML&&d[m].innerHTML.trim()===s)return d[m]}return null}}return e}))},ad2f:function(e,t,r){"use strict";r("b422")},b422:function(e,t,r){var n=r("e874");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=r("499e").default;s("8239be8a",n,!0,{sourceMap:!1,shadowMode:!1})},e874:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,".po-password-strength-bar{border-radius:2px;-webkit-transition:all .2s linear;transition:all .2s linear;height:5px;margin-top:8px}.po-password-strength-bar.risky{background-color:#f95e68;width:10%}.po-password-strength-bar.guessable{background-color:#fb964d;width:32.5%}.po-password-strength-bar.weak{background-color:#fdd244;width:55%}.po-password-strength-bar.safe{background-color:#b0dc53;width:77.5%}.po-password-strength-bar.secure{background-color:#35cc62;width:100%}",""]),e.exports=t},fb15:function(e,t,r){"use strict";if(r.r(t),"undefined"!==typeof window){var n=window.document.currentScript,s=r("8875");n=s(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:s});var a=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);a&&(r.p=a[1])}var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"po-password-strength-bar",class:e.passwordClass})},i=[];function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){var t=0,r=0,n=0,s=0,a=0,o=/[^A-Za-z0-9]/g,i=/(.*[a-z].*)/g,c=/(.*[A-Z].*)/g,l=/(.*[0-9].*)/g,u=/(\w)(\1+\1+\1+\1+)/g,d=o.test(e),m=i.test(e),p=c.test(e),f=l.test(e),b=u.test(e);return e.length>4&&((m||p)&&f&&(a=1),p&&m&&(s=1),(m||p||f)&&d&&(n=1),e.length>8&&(r=1),e.length>12&&!b&&(r=2),e.length>25&&!b&&(r=3),t=r+n+s+a,t>4&&(t=4)),t},u=l,d=function(e){switch(e){case 0:return"risky";case 1:return"guessable";case 2:return"weak";case 3:return"safe";case 4:return"secure";default:return null}},m=d,p=function(e){var t=u(e);return m(t)},f=p,b={name:"password-meter",props:{password:String},computed:{passwordClass:function(){var e;if(!this.password)return null;var t=f(this.password),r=u(this.password);return this.$emit("score",{score:r,strength:t}),e={},c(e,t,!0),c(e,"scored",!0),e}}},v=b;r("ad2f");function g(e,t,r,n,s,a,o,i){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):s&&(c=i?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}var h=g(v,o,i,!1,null,null,null),w=h.exports;t["default"]=w}})["default"]}))},"15f5":function(e,t,r){},"179f":function(e,t,r){"use strict";r("5913")},"36ef":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"x-position-absolute"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{lg:"6",md:"8"}},[r("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[r("div",{staticClass:"text-muted text-center mt-2 mb-4"},[r("small",[e._v("Sign up with")])]),r("div",{staticClass:"text-center"},[r("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[r("span",{staticClass:"btn-inner--icon"},[r("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),r("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),r("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[r("span",{staticClass:"btn-inner--icon"},[r("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),r("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),r("b-card-body",{staticClass:"px-lg-5 py-lg-5"},[r("div",{staticClass:"text-center text-muted mb-4 d-none"},[r("small",[e._v("Or sign up with credentials")])]),r("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[r("base-input",{ref:"new_password",staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"New Password",type:"password",name:"New Password",vid:"new_password",rules:"required|min:6|max:35",required:""},model:{value:e.model.newpass,callback:function(t){e.$set(e.model,"newpass",t)},expression:"model.newpass"}}),r("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Confirm Password",type:"password",name:"Confirm Password",rules:"required|confirmed:new_password",required:""},model:{value:e.model.confirmpass,callback:function(t){e.$set(e.model,"confirmpass",t)},expression:"model.confirmpass"}}),r("password-meter",{attrs:{password:e.model.newpass},on:{score:e.onScore}}),r("div",{staticClass:"text-muted font-italic"},[r("small",[e._v("password strength: "),r("span",{staticClass:"text-success font-weight-700"},[e._v(e._s(e.model.strength))])])]),r("div",{staticClass:"text-center"},[r("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Save")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)},s=[],a=(r("96cf"),r("3b8d")),o=r("0127"),i=r.n(o),c={components:{passwordMeter:i.a},name:"register",data:function(){return{model:{code:this.$route.query.code,account:this.$route.query.account,newpass:"",confirmpass:"",strength:null,agree:!1}}},methods:{onSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$service.submit("/partner/pub/set/pass",{account:this.model.account,code:this.model.code,newpass:this.model.newpass,confirmpass:this.model.confirmpass,agree:this.model.agree}),window.location.href="/partner/app/";case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onScore:function(e){this.model.strength=e.strength}}},l=c,u=r("2877"),d=Object(u["a"])(l,n,s,!1,null,null,null);t["default"]=d.exports},"4a63":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.viewResetForm?r("b-container",{staticClass:"x-position-absolute"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{lg:"6",md:"8"}},[r("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[r("div",{staticClass:"text-muted text-center mt-2 mb-4"},[r("small",[e._v("Sign up with")])]),r("div",{staticClass:"text-center"},[r("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[r("span",{staticClass:"btn-inner--icon"},[r("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),r("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),r("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[r("span",{staticClass:"btn-inner--icon"},[r("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),r("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),r("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[r("div",{staticClass:"text-muted mb-4"},[r("h2",[e._v(" Forgot your password? ")]),r("small",[e._v(" No worry, we will send password reset link on your registered email.")])]),r("div",{staticClass:"text-center text-muted mb-4 d-none"},[r("small",[e._v("Or sign up with credentials")])]),r("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[r("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Email",name:"Email",rules:{required:!0,email:!0},required:""},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),r("div",{staticClass:"text-center"},[r("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Send Reset Link")])],1)],1)]}}],null,!1,4254930807)})],1)],1)],1)],1),e.viewMailSent?r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{lg:"6",md:"8"}},[r("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 text-center "},[r("h2",[e._v(" Email sent … ")]),r("small",[e._v(" Please check your email to reset your password.")])]),r("b-card-body",{staticClass:"px-lg-5 py-lg-4"},[r("div",{staticClass:"text-center text-muted mb-4"},[r("small",[e._v("If "+e._s(e.model.email)+" is not your email address, please go back and enter the correct one.")])]),r("div",{staticClass:"text-center text-muted mb-4"},[r("small",[e._v("If you haven't received our email in 15 minutes, please check your spam folder.")])])])],1)],1)],1):e._e()],1):e._e()],1)},s=[],a=(r("96cf"),r("3b8d")),o={name:"register",data:function(){return{model:{name:"",email:"",password:"",agree:!1},view:{screen:null}}},computed:{viewMailSent:function(e){return"MAILSENT"==this.view.screen},viewResetForm:function(e){return!this.view.screen}},methods:{onSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$service.submit("/partner/pub/forgot/pass",{email:this.model.email});case 3:t=e.sent,console.log("resp",t),this.view.MAILSENT="MAILSENT",e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("error",e.t0.response.data),this.$refs.signupContact.setErrors(e.t0.response.data.veeErrors);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}},i=o,c=r("2877"),l=Object(c["a"])(i,n,s,!1,null,null,null);t["default"]=l.exports},5913:function(e,t,r){},"7e9e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"x-position-absolute"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{lg:"6",md:"8"}},[r("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[r("h2",[e._v(" Get started free ")]),r("small",[e._v(" No credit card required")])]),r("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[r("div",{staticClass:"text-muted mb-4"},[r("h2",[e._v(" Sign in ")]),r("small",[e._v(" Use your registered details ")])]),r("div",{staticClass:"d-none"},[r("div",{staticClass:"text-muted text-center mt-2 mb-3"},[r("small",[e._v("Sign in with")])]),r("div",{staticClass:"btn-wrapper text-center"},[r("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[r("span",{staticClass:"btn-inner--icon"},[r("img",{attrs:{src:e.$config.CDN_URL+"/argon/img/icons/common/github.svg"}})]),r("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),r("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[r("span",{staticClass:"btn-inner--icon"},[r("img",{attrs:{src:e.$config.CDN_URL+"/argon/img//icons/common/google.svg"}})]),r("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),r("div",{staticClass:"text-center text-muted mb-4 d-none"},[r("small",[e._v("Or sign in with credentials")])]),r("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[r("base-input",{staticClass:"mb-3",attrs:{alternative:"",feedback:"",question:"",vid:"login.email",name:"Email",label:"Email",rules:{required:!0,email:!0}},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),r("base-input",{staticClass:"mb-3",attrs:{alternative:"",feedback:"",question:"",vid:"login.password",name:"Password",label:"Password",rules:{required:!0,min:6},type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}}),r("b-form-checkbox",{staticClass:"d-none",model:{value:e.model.rememberMe,callback:function(t){e.$set(e.model,"rememberMe",t)},expression:"model.rememberMe"}},[e._v("Remember me")]),r("div",{staticClass:"text-center"},[r("base-button",{staticClass:"my-4",attrs:{type:"primary","native-type":"submit"}},[e._v("Sign in")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)},s=[],a=(r("96cf"),r("3b8d")),o={data:function(){return{model:{email:"",password:"",rememberMe:!1}}},methods:{onSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$service.submit("/partner/pub/login",{email:this.model.email,password:this.model.password,newpass:this.model.password},{ref:this.$refs.formValidator,toast:!1});case 3:window.location.href="/partner/app/",e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()}},i=o,c=r("2877"),l=Object(c["a"])(i,n,s,!1,null,null,null);t["default"]=l.exports},cd05:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"x-position-absolute"},[e.viewSignupForm?r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{lg:"6",md:"8"}},[r("b-card",{staticClass:"bg-secondary border-0 ",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 d-none"},[r("h2",[e._v(" Get started free ")]),r("small",[e._v(" No credit card required")])]),r("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[r("div",{staticClass:"text-muted mb-4"},[r("h2",[e._v(" Get started free ")]),r("small",[e._v(" No credit card required")])]),r("div",{staticClass:"d-none"},[r("div",{staticClass:"text-muted text-center mt-2 mb-4"},[r("small",[e._v("Sign up with")])]),r("div",{staticClass:"text-center"},[r("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[r("span",{staticClass:"btn-inner--icon"},[r("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),r("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),r("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[r("span",{staticClass:"btn-inner--icon"},[r("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),r("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),r("div",{staticClass:"text-center text-muted mb-4 d-none"},[r("small",[e._v("Or sign up with credentials")])]),r("validation-observer",{ref:"signupContact",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[r("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Name",name:e.$t("fields.name"),vid:"signupContact.name",rules:{required:!0},required:""},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),r("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.email"),vid:"signupContact.email",rules:"required|emailz",required:"",valid:!0},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),r("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.phone"),vid:"signupContact.phone",rules:"required|phone",required:"",valid:!0},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}}),r("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.company"),vid:"signupContact.company",rules:{required:!0},required:""},model:{value:e.model.company,callback:function(t){e.$set(e.model,"company",t)},expression:"model.company"}}),r("base-select",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.role"),vid:"signupContact.role",rules:{required:!0},required:""},model:{value:e.model.role,callback:function(t){e.$set(e.model,"role",t)},expression:"model.role"}},[r("option",{attrs:{value:"agency_partner_developer"}},[e._v("Agency / Partner Developer")]),r("option",{attrs:{value:"professional_developer"}},[e._v("Professional Developer")]),r("option",{attrs:{value:"technology_business_manager"}},[e._v("Technology / Business Manager")]),r("option",{attrs:{value:"other"}},[e._v("Other")])]),r("base-select",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.country"),vid:"signupContact.country",rules:{required:!0},required:"",options:"data:countries"},model:{value:e.model.country,callback:function(t){e.$set(e.model,"country",t)},expression:"model.country"}}),r("b-row",{staticClass:" my-4"},[r("b-col",{attrs:{cols:"12"}},[r("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Privacy",Policy:""}},[r("b-form-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[r("span",{staticClass:"text-muted"},[e._v("I agree with the "),r("a",{attrs:{target:"_blank",href:"https://www.mehery.com/privacy-policy/#page-content"}},[e._v("Privacy Policy")])])])],1)],1)],1),r("div",{staticClass:"text-center"},[r("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Create account")])],1)],1)]}}],null,!1,1983474001)})],1)],1)],1)],1):e._e(),e.viewMailSent?r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{lg:"6",md:"8"}},[r("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 text-center "},[r("h2",[e._v(" Almost there … ")]),r("small",[e._v(" Please check your email to confirm your account.")])]),r("b-card-body",{staticClass:"px-lg-5 py-lg-4"},[r("div",{staticClass:"text-center text-muted mb-4"},[r("small",[e._v("If "+e._s(e.model.email)+" is not your email address, please go back and enter the correct one.")])]),r("div",{staticClass:"text-center text-muted mb-4"},[r("small",[e._v("If you haven't received our email in 15 minutes, please check your spam folder.")])])])],1)],1)],1):e._e()],1)],1)},s=[],a=(r("96cf"),r("3b8d")),o=(r("15f5"),{name:"register",data:function(){return{model:{name:"",email:"",phone:"",company:"",role:"",password:"",country:"",agree:!1},view:{screen:null}}},computed:{viewMailSent:function(){return"MAILSENT"==this.view.screen},viewSignupForm:function(){return!this.view.screen}},methods:{onSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$service.post("/partner/pub/register",this.model);case 3:t=e.sent,console.log("resp",t),this.view.screen="MAILSENT",e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("error",e.t0.response.data),this.$refs.signupContact.setErrors(e.t0.response.data.veeErrors);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}}),i=o,c=(r("179f"),r("2877")),l=Object(c["a"])(i,n,s,!1,null,null,null);t["default"]=l.exports}}]);