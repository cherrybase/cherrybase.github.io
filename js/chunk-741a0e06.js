(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-741a0e06","chunk-2d213138"],{"530d":function(t,n,e){},8610:function(t,n,e){"use strict";n["a"]={client:null,connected:!1,init:function(){if(!this.client){var t=this;this.client=window.tunnelClient.config({user:window.CONST.APP_USER,context:window.CONST.APP_CONTEXT}),window.__onsocket_disconnect__=function(n,e){console.log("MSG",n),"CLOSED"==n.type&&(t.connected=!1,e())},window.__onsocket_connect__=function(n,e){t.connected=!0}}return this.client},instance:function(){return this.client.instance()}}},aaac:function(t,n,e){"use strict";e.r(n);var o=e("f6c6");n["default"]=o["a"].route({app:"customer",base:window.CONST.WEBAPP_BASE,routes:[{path:"/app/chat",name:"customer-chat",component:function(){return Promise.all([e.e("chunk-2d225814"),e.e("chunk-5ac00cee")]).then(e.bind(null,"510c"))}}]})},bb9d:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e(t.layout,{tag:"component"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)],1)},c=[],a=e("a026"),i=(e("aaac"),e("d166"),e("8610"),e("3ef3"),e("e54b")),u=e.n(i),r=e("caf9");a["default"].use(u.a);var d="http://hilongjw.github.io/vue-lazyload/dist/loading-spin.svg",s="http://hilongjw.github.io/vue-lazyload/dist/loading-spin.svg";a["default"].use(r["a"],{preLoad:1.3,error:s,loading:d,attempt:1,throttleWait:1e3});var l="default";a["default"].component("default-layout",(function(){return e.e("chunk-2d0c1f77").then(e.bind(null,"47fd"))}));var f={name:"AppCustomer",computed:{layout:function(){return(this.$route.meta.layout||l)+"-layout"}},data:function(){return{}},methods:{},created:function(){},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(t)},beforeUnmount:function(){}},p=f,h=(e("cda8"),e("2877")),m=Object(h["a"])(p,o,c,!1,null,null,null);n["default"]=m.exports},cda8:function(t,n,e){"use strict";e("530d")}}]);