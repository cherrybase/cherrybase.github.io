(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eb1ded6"],{"0926":function(t,e,i){},2987:function(t,e,i){"use strict";i("0926")},"61f1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("notifications"),e("side-bar",{scopedSlots:t._u([{key:"links",fn:function(t){return[e("sidebar-item",{attrs:{link:{name:"Dashboards",icon:"ni ni-shop text-primary"}}},[e("sidebar-item",{attrs:{link:{name:"Dashboard",path:"/dashboard"}}})],1)]}}])}),e("div",{staticClass:"main-content"},[e("dashboard-navbar"),e("div",{on:{click:function(e){return t.$sidebar.displaySidebar(!1)}}},[e("fade-transition",{attrs:{duration:200,origin:"center top",mode:"out-in"}},[e("router-view")],1)],1),t.$route.meta.hideFooter?t._e():e("content-footer")],1)],1)},r=[],l=(i("f559"),i("b7f5")),o=(i("7da8"),function(){var t=this,e=t._self._c;return e("base-nav",{staticClass:"navbar-top border-bottom navbar-expand",class:t.$route.meta.navbarClasses?t.$route.meta.navbarClasses:"bg-success navbar-dark",attrs:{"container-classes":"container-fluid",type:""}},[e("b-form",{staticClass:"navbar-search form-inline mr-sm-3",class:t.$route.meta.searchClasses?t.$route.meta.searchClasses:"navbar-search-light",attrs:{id:"navbar-search-main"}},[e("b-form-group",{staticClass:"mb-0"},[e("b-input-group",{staticClass:"input-group-alternative input-group-merge"},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-search"})])]),e("b-form-input",{attrs:{placeholder:"Search",type:"text"}})],1)],1),e("button",{staticClass:"close",attrs:{type:"button","data-action":"search-close","data-target":"#navbar-search-main","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],1),e("b-navbar-nav",{staticClass:"align-items-center ml-md-auto"},[e("li",{staticClass:"nav-item d-xl-none"},[e("div",{staticClass:"pr-3 sidenav-toggler sidenav-toggler-dark",on:{click:t.toggleSidebar}},[e("div",{staticClass:"sidenav-toggler-inner"},[e("i",{staticClass:"sidenav-toggler-line"}),e("i",{staticClass:"sidenav-toggler-line"}),e("i",{staticClass:"sidenav-toggler-line"})])])]),e("li",{staticClass:"nav-item d-sm-none"},[e("a",{staticClass:"nav-link",attrs:{href:"#","data-action":"search-show","data-target":"#navbar-search-main"}},[e("i",{staticClass:"ni ni-zoom-split-in"})])])]),e("b-navbar-nav",{staticClass:"align-items-center ml-auto ml-md-0"},[e("b-nav-item-dropdown",{attrs:{right:""}},[e("b-dropdown-item",{staticClass:"pr-0",attrs:{href:"#"}},[e("b-media",{staticClass:"align-items-center",attrs:{"no-body":""}},[e("span",{staticClass:"avatar avatar-sm"},[e("b-img",{attrs:{alt:"SImage placeholder",rounded:"circle",src:"/argon/img/theme/team-4.jpg"}})],1),e("b-media-body",{staticClass:"ml-2 d-none d-lg-block"},[e("span",{staticClass:"mb-0 text-sm font-weight-bold"},[t._v("John Snow")])])],1)],1),e("b-dropdown",[e("b-dropdown-header",{staticClass:"noti-title"},[e("h6",{staticClass:"text-overflow m-0"},[t._v("Welcome!")])]),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-single-02"}),e("span",[t._v("My profile")])]),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-settings-gear-65"}),e("span",[t._v("Settings")])]),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-calendar-grid-58"}),e("span",[t._v("Activity")])]),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-support-16"}),e("span",[t._v("Support")])]),e("div",{staticClass:"dropdown-divider"}),e("b-dropdown-item",{attrs:{href:"#!"}},[e("i",{staticClass:"ni ni-user-run"}),e("span",[t._v("Logout")])])],1)],1)],1)],1)}),s=[],a=(i("7f7f"),i("7c76")),c=i("57bd"),h={components:{CollapseTransition:a["a"],BaseNav:c["a"],Modal:c["c"]},computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)},isRTL:function(){return this.$rtl.isRTL}},data:function(){return{activeNotifications:!1,showMenu:!1,searchModalVisible:!1,searchQuery:""}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1},toggleSidebar:function(){this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)},hideSidebar:function(){this.$sidebar.displaySidebar(!1)}}},u=h,d=(i("2987"),i("2877")),f=Object(d["a"])(u,o,s,!1,null,"48f8a4c4",null),p=f.exports,b=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer px-4 mx-2"},[e("b-row",{staticClass:"justify-content-lg-between",attrs:{"align-v":"center"}},[e("b-col",{attrs:{lg:"6"}},[e("div",{staticClass:"copyright text-center text-lg-left text-muted"},[t._v("\n        © "+t._s(t.year)+" "),e("a",{staticClass:"font-weight-bold ml-1",attrs:{href:"https://www.creative-tim.com",target:"_blank"}},[t._v("Creative Tim")])])]),e("b-col",{attrs:{lg:"6"}},[e("b-nav",{staticClass:"nav-footer justify-content-center justify-content-lg-end"},[e("b-nav-item",{ref:"https://www.creative-tim.com",attrs:{target:"_blank"}},[t._v("\n          Creative Tim\n        ")]),e("b-nav-item",{attrs:{href:"https://www.creative-tim.com/presentation",target:"_blank"}},[t._v("\n         About Us\n        ")]),e("b-nav-item",{attrs:{href:"http://blog.creative-tim.com",target:"_blank"}},[t._v("\n          Blog\n        ")]),e("b-nav-item",{attrs:{href:"https://www.creative-tim.com/license",target:"_blank"}},[t._v("\n          License\n        ")])],1)],1)],1)],1)},g=[],v={data:function(){return{year:(new Date).getFullYear()}}},m=v,w=Object(d["a"])(m,b,g,!1,null,null,null),y=w.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("FadeTransition",{attrs:{duration:200,mode:"out-in"}},[e("router-view")],1)],1)},X=[],W={components:{FadeTransition:a["b"]}},L=W,T=Object(d["a"])(L,Y,X,!1,null,null,null),C=T.exports;function R(t){return document.getElementsByClassName(t).length>0}function S(t){R(t)?new l["a"](".".concat(t)):setTimeout((function(){S(t)}),100)}var H={components:{DashboardNavbar:p,ContentFooter:y,DashboardContent:C,FadeTransition:a["b"]},methods:{initScrollbar:function(){var t=document.body.classList,e=navigator.platform.startsWith("Win");e?(S("scrollbar-inner"),t.add("perfect-scrollbar-on")):t.add("perfect-scrollbar-off")}}},E=H,x=Object(d["a"])(E,n,r,!1,null,null,null);e["default"]=x.exports},"7da8":function(t,e,i){},b7f5:function(t,e,i){"use strict";
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function n(t){return getComputedStyle(t)}function r(t,e){for(var i in e){var n=e[i];"number"===typeof n&&(n+="px"),t.style[i]=n}return t}function l(t){var e=document.createElement("div");return e.className=t,e}var o="undefined"!==typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function s(t,e){if(!o)throw new Error("No element matching method supported");return o.call(t,e)}function a(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function c(t,e){return Array.prototype.filter.call(t.children,(function(t){return s(t,e)}))}var h={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},u={x:null,y:null};function d(t,e){var i=t.element.classList,n=h.state.scrolling(e);i.contains(n)?clearTimeout(u[e]):i.add(n)}function f(t,e){u[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(h.state.scrolling(e))}),t.settings.scrollingThreshold)}function p(t,e){d(t,e),f(t,e)}var b=function(t){this.element=t,this.handlers={}},g={isEmpty:{configurable:!0}};b.prototype.bind=function(t,e){"undefined"===typeof this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},b.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter((function(n){return!(!e||n===e)||(i.element.removeEventListener(t,n,!1),!1)}))},b.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},g.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(b.prototype,g);var v=function(){this.eventElements=[]};function m(t){if("function"===typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function w(t,e,i,n,r){var l;if(void 0===n&&(n=!0),void 0===r&&(r=!1),"top"===e)l=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");l=["contentWidth","containerWidth","scrollLeft","x","left","right"]}y(t,i,l,n,r)}function y(t,e,i,n,r){var l=i[0],o=i[1],s=i[2],a=i[3],c=i[4],h=i[5];void 0===n&&(n=!0),void 0===r&&(r=!1);var u=t.element;t.reach[a]=null,u[s]<1&&(t.reach[a]="start"),u[s]>t[l]-t[o]-1&&(t.reach[a]="end"),e&&(u.dispatchEvent(m("ps-scroll-"+a)),e<0?u.dispatchEvent(m("ps-scroll-"+c)):e>0&&u.dispatchEvent(m("ps-scroll-"+h)),n&&p(t,a)),t.reach[a]&&(e||r)&&u.dispatchEvent(m("ps-"+a+"-reach-"+t.reach[a]))}function Y(t){return parseInt(t,10)||0}function X(t){return s(t,"input,[contenteditable]")||s(t,"select,[contenteditable]")||s(t,"textarea,[contenteditable]")||s(t,"button,[contenteditable]")}function W(t){var e=n(t);return Y(e.width)+Y(e.paddingLeft)+Y(e.paddingRight)+Y(e.borderLeftWidth)+Y(e.borderRightWidth)}v.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new b(t),this.eventElements.push(e)),e},v.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},v.prototype.unbind=function(t,e,i){var n=this.eventElement(t);n.unbind(e,i),n.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(n),1)},v.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},v.prototype.once=function(t,e,i){var n=this.eventElement(t),r=function(t){n.unbind(e,r),i(t)};n.bind(e,r)};var L={isWebKit:"undefined"!==typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!==typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!==typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!==typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function T(t){var e=t.element,i=Math.floor(e.scrollTop),n=e.getBoundingClientRect();t.containerWidth=Math.round(n.width),t.containerHeight=Math.round(n.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(c(e,h.element.rail("x")).forEach((function(t){return a(t)})),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(c(e,h.element.rail("y")).forEach((function(t){return a(t)})),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=C(t,Y(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=Y((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=C(t,Y(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=Y(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),R(e,t),t.scrollbarXActive?e.classList.add(h.state.active("x")):(e.classList.remove(h.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(h.state.active("y")):(e.classList.remove(h.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function C(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function R(t,e){var i={width:e.railXWidth},n=Math.floor(t.scrollTop);e.isRtl?i.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:i.left=t.scrollLeft,e.isScrollbarXUsingBottom?i.bottom=e.scrollbarXBottom-n:i.top=e.scrollbarXTop+n,r(e.scrollbarXRail,i);var l={top:n,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?l.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:l.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?l.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:l.left=e.scrollbarYLeft+t.scrollLeft,r(e.scrollbarYRail,l),r(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),r(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function S(t){t.element;t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,n=i>t.scrollbarYTop?1:-1;t.element.scrollTop+=n*t.containerHeight,T(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,n=i>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=n*t.containerWidth,T(t),e.stopPropagation()}))}function H(t){E(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),E(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function E(t,e){var i=e[0],n=e[1],r=e[2],l=e[3],o=e[4],s=e[5],a=e[6],c=e[7],u=e[8],p=t.element,b=null,g=null,v=null;function m(e){e.touches&&e.touches[0]&&(e[r]=e.touches[0].pageY),p[a]=b+v*(e[r]-g),d(t,c),T(t),e.stopPropagation(),e.type.startsWith("touch")&&e.changedTouches.length>1&&e.preventDefault()}function w(){f(t,c),t[u].classList.remove(h.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",m)}function y(e,o){b=p[a],o&&e.touches&&(e[r]=e.touches[0].pageY),g=e[r],v=(t[n]-t[i])/(t[l]-t[s]),o?t.event.bind(t.ownerDocument,"touchmove",m):(t.event.bind(t.ownerDocument,"mousemove",m),t.event.once(t.ownerDocument,"mouseup",w),e.preventDefault()),t[u].classList.add(h.state.clicking),e.stopPropagation()}t.event.bind(t[o],"mousedown",(function(t){y(t)})),t.event.bind(t[o],"touchstart",(function(t){y(t,!0)}))}function x(t){var e=t.element,i=function(){return s(e,":hover")},n=function(){return s(t.scrollbarX,":focus")||s(t.scrollbarY,":focus")};function r(i,n){var r=Math.floor(e.scrollTop);if(0===i){if(!t.scrollbarYActive)return!1;if(0===r&&n>0||r>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(0===n){if(!t.scrollbarXActive)return!1;if(0===l&&i<0||l>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",(function(l){if(!(l.isDefaultPrevented&&l.isDefaultPrevented()||l.defaultPrevented)&&(i()||n())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else while(o.shadowRoot)o=o.shadowRoot.activeElement;if(X(o))return}var s=0,a=0;switch(l.which){case 37:s=l.metaKey?-t.contentWidth:l.altKey?-t.containerWidth:-30;break;case 38:a=l.metaKey?t.contentHeight:l.altKey?t.containerHeight:30;break;case 39:s=l.metaKey?t.contentWidth:l.altKey?t.containerWidth:30;break;case 40:a=l.metaKey?-t.contentHeight:l.altKey?-t.containerHeight:-30;break;case 32:a=l.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(e.scrollTop-=a,e.scrollLeft+=s,T(t),r(s,a)&&l.preventDefault())}}))}function M(t){var e=t.element;function i(i,n){var r,l=Math.floor(e.scrollTop),o=0===e.scrollTop,s=l+e.offsetHeight===e.scrollHeight,a=0===e.scrollLeft,c=e.scrollLeft+e.offsetWidth===e.scrollWidth;return r=Math.abs(n)>Math.abs(i)?o||s:a||c,!r||!t.settings.wheelPropagation}function r(t){var e=t.deltaX,i=-1*t.deltaY;return"undefined"!==typeof e&&"undefined"!==typeof i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}function l(t,i,r){if(!L.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(t))return!1;var l=t;while(l&&l!==e){if(l.classList.contains(h.element.consuming))return!0;var o=n(l);if(r&&o.overflowY.match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&(l.scrollTop>0&&r<0||l.scrollTop<s&&r>0))return!0}if(i&&o.overflowX.match(/(scroll|auto)/)){var a=l.scrollWidth-l.clientWidth;if(a>0&&(l.scrollLeft>0&&i<0||l.scrollLeft<a&&i>0))return!0}l=l.parentNode}return!1}function o(n){var o=r(n),s=o[0],a=o[1];if(!l(n.target,s,a)){var c=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(a?e.scrollTop-=a*t.settings.wheelSpeed:e.scrollTop+=s*t.settings.wheelSpeed,c=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(s?e.scrollLeft+=s*t.settings.wheelSpeed:e.scrollLeft-=a*t.settings.wheelSpeed,c=!0):(e.scrollTop-=a*t.settings.wheelSpeed,e.scrollLeft+=s*t.settings.wheelSpeed),T(t),c=c||i(s,a),c&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault())}}"undefined"!==typeof window.onwheel?t.event.bind(e,"wheel",o):"undefined"!==typeof window.onmousewheel&&t.event.bind(e,"mousewheel",o)}function k(t){if(L.supportsTouch||L.supportsIePointer){var e=t.element,i={},r=0,l={},o=null;L.supportsTouch?(t.event.bind(e,"touchstart",d),t.event.bind(e,"touchmove",p),t.event.bind(e,"touchend",b)):L.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",d),t.event.bind(e,"pointermove",p),t.event.bind(e,"pointerup",b)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",d),t.event.bind(e,"MSPointerMove",p),t.event.bind(e,"MSPointerUp",b)))}function s(i,n){var r=Math.floor(e.scrollTop),l=e.scrollLeft,o=Math.abs(i),s=Math.abs(n);if(s>o){if(n<0&&r===t.contentHeight-t.containerHeight||n>0&&0===r)return 0===window.scrollY&&n>0&&L.isChrome}else if(o>s&&(i<0&&l===t.contentWidth-t.containerWidth||i>0&&0===l))return!0;return!0}function a(i,n){e.scrollTop-=n,e.scrollLeft-=i,T(t)}function c(t){return t.targetTouches?t.targetTouches[0]:t}function u(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function d(t){if(u(t)){var e=c(t);i.pageX=e.pageX,i.pageY=e.pageY,r=(new Date).getTime(),null!==o&&clearInterval(o)}}function f(t,i,r){if(!e.contains(t))return!1;var l=t;while(l&&l!==e){if(l.classList.contains(h.element.consuming))return!0;var o=n(l);if(r&&o.overflowY.match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&(l.scrollTop>0&&r<0||l.scrollTop<s&&r>0))return!0}if(i&&o.overflowX.match(/(scroll|auto)/)){var a=l.scrollWidth-l.clientWidth;if(a>0&&(l.scrollLeft>0&&i<0||l.scrollLeft<a&&i>0))return!0}l=l.parentNode}return!1}function p(t){if(u(t)){var e=c(t),n={pageX:e.pageX,pageY:e.pageY},o=n.pageX-i.pageX,h=n.pageY-i.pageY;if(f(t.target,o,h))return;a(o,h),i=n;var d=(new Date).getTime(),p=d-r;p>0&&(l.x=o/p,l.y=h/p,r=d),s(o,h)&&t.preventDefault()}}function b(){t.settings.swipeEasing&&(clearInterval(o),o=setInterval((function(){t.isInitialized?clearInterval(o):l.x||l.y?Math.abs(l.x)<.01&&Math.abs(l.y)<.01?clearInterval(o):t.element?(a(30*l.x,30*l.y),l.x*=.8,l.y*=.8):clearInterval(o):clearInterval(o)}),10))}}var A=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},_={"click-rail":S,"drag-thumb":H,keyboard:x,wheel:M,touch:k},D=function(t,e){var i=this;if(void 0===e&&(e={}),"string"===typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var o in this.element=t,t.classList.add(h.main),this.settings=A(),e)this.settings[o]=e[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return t.classList.add(h.state.focus)},a=function(){return t.classList.remove(h.state.focus)};this.isRtl="rtl"===n(t).direction,!0===this.isRtl&&t.classList.add(h.rtl),this.isNegativeScroll=function(){var e=t.scrollLeft,i=null;return t.scrollLeft=-1,i=t.scrollLeft<0,t.scrollLeft=e,i}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new v,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=l(h.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=l(h.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=n(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=Y(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=Y(c.borderLeftWidth)+Y(c.borderRightWidth),r(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=Y(c.marginLeft)+Y(c.marginRight),r(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=l(h.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=l(h.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var u=n(this.scrollbarYRail);this.scrollbarYRight=parseInt(u.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=Y(u.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?W(this.scrollbarY):null,this.railBorderYWidth=Y(u.borderTopWidth)+Y(u.borderBottomWidth),r(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=Y(u.marginTop)+Y(u.marginBottom),r(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return _[t](i)})),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return i.onScroll(t)})),T(this)};D.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,r(this.scrollbarXRail,{display:"block"}),r(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=Y(n(this.scrollbarXRail).marginLeft)+Y(n(this.scrollbarXRail).marginRight),this.railYMarginHeight=Y(n(this.scrollbarYRail).marginTop)+Y(n(this.scrollbarYRail).marginBottom),r(this.scrollbarXRail,{display:"none"}),r(this.scrollbarYRail,{display:"none"}),T(this),w(this,"top",0,!1,!0),w(this,"left",0,!1,!0),r(this.scrollbarXRail,{display:""}),r(this.scrollbarYRail,{display:""}))},D.prototype.onScroll=function(t){this.isAlive&&(T(this),w(this,"top",this.element.scrollTop-this.lastScrollTop),w(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},D.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),a(this.scrollbarX),a(this.scrollbarY),a(this.scrollbarXRail),a(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},D.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")},e["a"]=D}}]);