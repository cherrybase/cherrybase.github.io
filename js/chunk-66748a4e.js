(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66748a4e","chunk-2d213138"],{"00d9":function(n,o,t){"use strict";t.r(o);var e=function(){var n=this,o=n._self._c;return o("div",{attrs:{id:"app"}},[o(n.layout,{tag:"component"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1)],1)},i=[],r=t("a026"),u=(t("aaac"),t("caf9")),c=window.Notification||window.webkitNotification;const a=function(n){},s=function(n){n.preventDefault(),window.focus(),n.target.close()},f=function(n){},l=function(n){},d={onerror:a,onclick:s,onclose:f,onshow:l},p={install:function(n,o){o=o||{},o.requestOnNotify=o.requestOnNotify||!0,n.notification={},n.prototype.$notification={};var t=function(){return c.requestPermission()};n.notification.requestPermission=t,n.prototype.$notification.requestPermission=t;var e=function(n,e,i){return i.onerror||(i.onerror=function(){}),i.onclick||(i.onclick=function(){}),i.onclose||(i.onclose=function(){}),i.onshow||(i.onshow=function(){}),Promise.resolve().then((function(){return o.requestOnNotify&&"granted"!==c.permission?t():c.permission})).then((function(o){if("denied"===o)return new Error("No permission to show notification");const t=function(n){d.onerror(n),i.onerror(n)},r=function(n){d.onclick(n),i.onclick(n)},u=function(n){d.onclose(n),i.onclose(n)},a=function(n){d.onshow(n),i.onshow(n)};try{const o=new c(n,e);return o.onerror=t,o.onclick=r,o.onclose=u,o.onshow=a,o}catch(i){return"TypeError"!==i.name?i:navigator.serviceWorker.ready.then((function(o){o.showNotification(n,e)})).then(a,t)}}))};n.notification.show=e,n.prototype.$notification.show=e}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(p);var h=p,w="http://hilongjw.github.io/vue-lazyload/dist/loading-spin.svg",m="http://hilongjw.github.io/vue-lazyload/dist/loading-spin.svg";r["default"].use(u["a"],{preLoad:1.3,error:m,loading:w,attempt:1,throttleWait:1e3}),r["default"].use(h,{requestOnNotify:!0});var v="default";r["default"].component("default-layout",(function(){return t.e("chunk-2d0c1f77").then(t.bind(null,"47fd"))}));var y={name:"AppCustomer",computed:{layout:function(){return(this.$route.meta.layout||v)+"-layout"}},data:function(){return{}},methods:{},created:function(){},mounted:function(){var n=document.createElement("script");n.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(n)},beforeUnmount:function(){}},k=y,g=(t("4157"),t("2877")),b=Object(g["a"])(k,e,i,!1,null,null,null);o["default"]=b.exports},4157:function(n,o,t){"use strict";t("5999")},5999:function(n,o,t){},aaac:function(n,o,t){"use strict";t.r(o);var e=t("f6c6");o["default"]=e["a"].route({app:"customer",base:window.CONST.WEBAPP_BASE,routes:[{path:"/app/chat",name:"customer-chat",component:function(){return t.e("chunk-7168ad1f").then(t.bind(null,"510c"))}}]})}}]);