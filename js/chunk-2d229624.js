(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229624"],{dce4:function(e,n,t){"use strict";t.r(n);var a=t("f6c6");console.log("Partner ROUTER"),n["default"]=a["a"].route({app:"partner",base:"/partner/",linkActiveClass:"active",scrollBehavior:function(e,n,t){return t||(e.hash?{selector:e.hash}:{x:0,y:0})},routes:[{path:"/",redirect:"/app/home",name:"root",meta:{role:["DOMAIN_ADMIN","GUEST"]}},{path:"/app",name:"app",redirect:"/app/home",component:function(){return Promise.all([t.e("chunk-41fa46ac"),t.e("chunk-1187cd8b"),t.e("chunk-125e3cf0"),t.e("chunk-38822dc6"),t.e("chunk-0933e784")]).then(t.bind(null,"598e"))},meta:{role:["DOMAIN_ADMIN"]},children:[{path:"/app/home",name:"Domains",component:function(){return Promise.all([t.e("chunk-a918ef7c"),t.e("chunk-6c75c417"),t.e("chunk-2d0be2cc"),t.e("chunk-2d0bb20c"),t.e("demo")]).then(t.bind(null,"68a9"))},meta:{role:["DOMAIN_ADMIN"]}},{path:"/app/waba",name:"Waba Channels",component:function(){return Promise.all([t.e("chunk-a918ef7c"),t.e("chunk-6c75c417"),t.e("chunk-2d0be2cc"),t.e("chunk-2d0bb20c"),t.e("demo")]).then(t.bind(null,"7a74"))},meta:{role:["DOMAIN_ADMIN"]}}]},{path:"/auth",name:"auth",redirect:"/auth/login",component:function(){return Promise.all([t.e("chunk-41fa46ac"),t.e("chunk-1187cd8b"),t.e("chunk-125e3cf0"),t.e("chunk-38822dc6"),t.e("chunk-75b11e93")]).then(t.bind(null,"1656"))},children:[{path:"/auth/login",name:"login",component:function(){return t.e("register").then(t.bind(null,"7e9e"))},meta:{role:["GUEST"]}},{path:"/auth/register",name:"register",component:function(){return t.e("register").then(t.bind(null,"cd05"))},meta:{role:["GUEST"]}},{path:"/auth/forgot-pass",name:"forgot-pass",component:function(){return t.e("register").then(t.bind(null,"4a63"))},meta:{role:["GUEST"]}},{path:"/auth/reset-pass",name:"reset-pass",component:function(){return t.e("register").then(t.bind(null,"36ef"))},meta:{role:["GUEST"]}},{path:"/auth/verify-link",name:"verify-link",component:function(){return t.e("register").then(t.bind(null,"36ef"))},meta:{role:["GUEST"]}},{path:"*",component:function(){return t.e("chunk-2d0e8e6d").then(t.bind(null,"8af4"))}}]}],beforeEach:function(e,n,t){console.log("beforeEach",e.path,n),window.CONST.APP_USER&&-1==e.path.indexOf("/app")?(console.log("ToApp"),t({path:"/app"})):window.CONST.APP_USER||-1!=e.path.indexOf("/auth")?t():(console.log("ToAuth"),t({path:"/auth/"}))},accessDenied:function(e,n,t){window.CONST.APP_USER||-1!=e.path.indexOf("/auth")?t():(console.log("ToAuth"),t({path:"/auth"}))}})}}]);