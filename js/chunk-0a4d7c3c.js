(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a4d7c3c"],{1753:function(t,e,n){"use strict";n("df4d")},4398:function(t,e,n){t.exports=n.p+"img/Mehery-logo-small.png"},"60c4":function(t,e,n){},"74d2":function(t,e,n){"use strict";n("f866")},"7c76":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return m}));
/*!
 * vue2-transitions v0.3.0
 * (c) 2019-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */
var a={inheritAttrs:!1,props:{duration:{type:[Number,Object],default:300},delay:{type:[Number,Object],default:0},group:Boolean,tag:{type:String,default:"span"},origin:{type:String,default:""},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"ease-out"}}}},computed:{componentType:function(){return this.group?"transition-group":"transition"},hooks:function(){return Object.assign({beforeEnter:this.beforeEnter,afterEnter:this.cleanUpStyles,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.cleanUpStyles},this.$listeners)}},methods:{beforeEnter:function(t){var e=this.duration.enter?this.duration.enter:this.duration;t.style.animationDuration=e+"ms";var n=this.delay.enter?this.delay.enter:this.delay;t.style.animationDelay=n+"ms",this.setStyles(t)},cleanUpStyles:function(t){var e=this;Object.keys(this.styles).forEach((function(n){var a=e.styles[n];a&&(t.style[n]="")})),t.style.animationDuration="",t.style.animationDelay=""},beforeLeave:function(t){var e=this.duration.leave?this.duration.leave:this.duration;t.style.animationDuration=e+"ms";var n=this.delay.leave?this.delay.leave:this.delay;t.style.animationDelay=n+"ms",this.setStyles(t)},leave:function(t){this.setAbsolutePosition(t)},setStyles:function(t){var e=this;this.setTransformOrigin(t),Object.keys(this.styles).forEach((function(n){var a=e.styles[n];a&&(t.style[n]=a)}))},setAbsolutePosition:function(t){return this.group&&(t.style.position="absolute"),this},setTransformOrigin:function(t){return this.origin&&(t.style.transformOrigin=this.origin),this}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } .fade-move { transition: transform .3s ease-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"fadeIn","move-class":"fade-move","leave-active-class":"fadeOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"fade-transition",mixins:[a]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomIn","move-class":"zoom-move","leave-active-class":"zoomOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-center-transition",mixins:[a]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomInX","move-class":"zoom-move","leave-active-class":"zoomOutX"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-x-transition",props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}},mixins:[a]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1); } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomInY","move-class":"zoom-move","leave-active-class":"zoomOutY"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-y-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" .collapse-move { transition: transform .3s ease-in-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"move-class":"collapse-move"},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},"component",t.$attrs,!1),t.$listeners),[t._t("default")],2)},staticRenderFns:[],name:"collapse-transition",mixins:[a],methods:{transitionStyle:function(t){void 0===t&&(t=300);var e=t/1e3,n=e+"s height ease-in-out, "+e+"s padding-top ease-in-out, "+e+"s padding-bottom ease-in-out";return n},beforeEnter:function(t){var e=this.duration.enter?this.duration.enter:this.duration;t.style.transition=this.transitionStyle(e),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0,this.setStyles(t)},enter:function(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter:function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave:function(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden",this.setStyles(t)},leave:function(t){var e=this.duration.leave?this.duration.leave:this.duration;0!==t.scrollHeight&&(t.style.transition=this.transitionStyle(e),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0),this.setAbsolutePosition(t)},afterLeave:function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"scaleIn","move-class":"scale-move","leave-active-class":"scaleOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"scale-transition",mixins:[a],props:{origin:{type:String,default:"top left"},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,type:"animation","enter-active-class":"slideYIn","move-class":"slide-move","leave-active-class":"slideYOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-y-up-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideYDownIn","leave-active-class":"slideYDownOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-y-down-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideXLeftIn","move-class":"slide-move","leave-active-class":"slideXLeftOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-x-left-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideXRightIn","move-class":"slide-move","leave-active-class":"slideXRightOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-x-right-transition",mixins:[a],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}},p={};function h(t,e){e&&e.components?e.components.forEach((function(e){return t.component(e.name,p[e.name])})):Object.keys(p).forEach((function(e){t.component(e,p[e])}))}p[o.name]=o,p[s.name]=s,p[i.name]=i,p[r.name]=r,p[c.name]=c,p[l.name]=l,p[m.name]=m,p[d.name]=d,p[u.name]=u,p[f.name]=f,"undefined"!==typeof window&&window.Vue&&window.Vue.use({install:h})},"84f5":function(t,e,n){"use strict";n("60c4")},afda:function(t,e,n){},b411:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"main-content min-vh-100"},[n("dashboard-navbar",{attrs:{type:t.$route.meta.navbarType}}),n("fade-transition",{attrs:{duration:200,origin:"center top",mode:"out-in"}},[n("router-view")],1),n("content-footer",{staticClass:"content-footer"})],1)])},o=[],s=(n("f559"),n("b7f5")),i=(n("7da8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("a",{staticClass:"logo",attrs:{href:"https://mehery.com"}},[n("img",{attrs:{alt:"Mehery",src:t.logo}})]),n("span",{staticClass:"logo"},[t._v("Pricing")]),n("input",{staticClass:"menu-btn",attrs:{type:"checkbox",id:"menu-btn"}}),t._m(0),t._m(1)])}),r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"menu-icon",attrs:{for:"menu-btn"}},[n("span",{staticClass:"navicon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"menu"},[n("li",[n("a",{attrs:{href:"/content/pricing/smart-conversations"}},[t._v("Smart Conversations")])]),n("li",[n("a",{attrs:{href:"/content/pricing/api"}},[t._v("Api")])])])}],c=(n("7f7f"),n("4398")),l=n.n(c),m={components:{},props:{type:{type:String,default:"default",description:"Look of the dashboard navbar. Default (Green) or light (gray)"}},computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)}},data:function(){return{logo:l.a,activeNotifications:!1,showMenu:!1,searchModalVisible:!1,searchQuery:""}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1}}},d=m,u=(n("74d2"),n("2877")),f=Object(u["a"])(d,i,r,!1,null,"6fa65f8a",null),p=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("section",{staticClass:"ft-main"},[n("div",{staticClass:"ft-main-item"},[n("h2",{staticClass:"ft-title"},[t._v("About")]),n("ul",[n("li",[n("a",{attrs:{href:"https://www.mehery.com/about"}},[t._v("About Mehery")])]),n("li",[n("a",{attrs:{href:"https://www.mehery.com/#Pricing"}},[t._v("Services")])]),n("li",[n("a",{attrs:{href:"https://www.mehery.com/about"}},[t._v("Pricing")])]),n("li",[n("a",{attrs:{href:"https://www.mehery.com/careers"}},[t._v("Careers")])])])]),n("div",{staticClass:"ft-main-item"},[n("h2",{staticClass:"ft-title"},[t._v("Resources")]),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.mehery.com/"}},[t._v("Docs")])]),n("li",[n("a",{attrs:{href:"https://www.mehery.com/blog"}},[t._v("Blog")])])])]),n("div",{staticClass:"ft-main-item"},[n("h2",{staticClass:"ft-title"},[t._v("Contact")]),n("ul",[n("li",[n("a",{attrs:{href:"mailto:sales@mehery.com"}},[t._v("sales@mehery.com")])])])]),n("div",{staticClass:"ft-main-item"},[n("h2",{staticClass:"ft-title"},[t._v("Address")]),n("p",[t._v("1-34, A H Wadia Baug,"),n("br"),t._v("\n                Parel Tank Road,"),n("br"),t._v("\n                Mumbai 400033.")])])]),n("section",{staticClass:"ft-social"},[n("ul",{staticClass:"ft-social-list"},[n("li",[n("a",{attrs:{href:"https://www.facebook.com/MeherY.SocCom/"}},[n("i",{staticClass:"fab fa-facebook"})])]),n("li",[n("a",{attrs:{href:"https://twitter.com/mehery_soccom"}},[n("i",{staticClass:"fab fa-twitter"})])]),n("li",[n("a",{attrs:{href:"https://www.instagram.com/mehery_soccom/"}},[n("i",{staticClass:"fab fa-instagram"})])])])]),n("section",{staticClass:"ft-legal"},[n("ul",{staticClass:"ft-legal-list"},[n("li",[n("a",{attrs:{href:"https://www.mehery.com/terms-of-service"}},[t._v("Terms of Service")])]),n("li",[n("a",{attrs:{href:"https://www.mehery.com/privacy-policy-2"}},[t._v("Privacy Policy")])]),n("li",[t._v("Copyright © 2022 Mehery. All Rights Reserved.")])])])])}],v={data:function(){return{year:(new Date).getFullYear()}}},g=v,b=(n("84f5"),Object(u["a"])(g,h,y,!1,null,"3c290518",null)),_=b.exports,T=n("7c76");function w(t){return document.getElementsByClassName(t).length>0}function O(t){w(t)?new s["a"](".".concat(t)):setTimeout((function(){O(t)}),100)}console.log("This is AppPartnerAuth");var x={components:{DashboardNavbar:p,ContentFooter:_,FadeTransition:T["b"]},methods:{initScrollbar:function(){var t=navigator.platform.startsWith("Win");t&&O("sidenav")}},mounted:function(){this.initScrollbar()}},C=x,E=(n("1753"),n("e488"),Object(u["a"])(C,a,o,!1,null,null,null));e["default"]=E.exports},df4d:function(t,e,n){},e488:function(t,e,n){"use strict";n("afda")},f559:function(t,e,n){"use strict";var a=n("5ca1"),o=n("9def"),s=n("d2c8"),i="startsWith",r=""[i];a(a.P+a.F*n("5147")(i),"String",{startsWith:function(t){var e=s(this,t,i),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return r?r.call(e,a,n):e.slice(n,n+a.length)===a}})},f866:function(t,e,n){}}]);