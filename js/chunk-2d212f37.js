(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212f37"],{ab33:function(e,n,t){"use strict";t.r(n);var a=t("f6c6");console.log("contak ROUTER"),n["default"]=a["a"].route({app:"contak",base:"/contak/",linkActiveClass:"active",scrollBehavior:function(e,n,t){return t||(e.hash?{selector:e.hash}:{x:0,y:0})},routes:[{path:"/",redirect:"/app/home",name:"root",meta:{role:["DOMAIN_ADMIN","GUEST"]}},{path:"/app",name:"app",redirect:"/app/home",component:function(){return Promise.all([t.e("chunk-41fa46ac"),t.e("chunk-1187cd8b"),t.e("chunk-125e3cf0"),t.e("chunk-38822dc6"),t.e("chunk-472a2666")]).then(t.bind(null,"1f25"))},meta:{role:["DOMAIN_ADMIN"]},children:[{path:"/app/home",name:"Domains",component:function(){return Promise.all([t.e("chunk-a918ef7c"),t.e("chunk-6c75c417"),t.e("chunk-2d0be2cc"),t.e("chunk-2d0bb20c"),t.e("demo")]).then(t.bind(null,"9e64"))},meta:{}},{path:"/app/demo",component:function(){return Promise.all([t.e("chunk-2d0bb20c"),t.e("chunk-41fa46ac"),t.e("chunk-c4daadb8"),t.e("chunk-2d0de2b8")]).then(t.bind(null,"8505"))}}]},{path:"/auth",name:"auth",redirect:"/auth/login",component:function(){return Promise.all([t.e("chunk-41fa46ac"),t.e("chunk-1187cd8b"),t.e("chunk-125e3cf0"),t.e("chunk-38822dc6"),t.e("chunk-2854ab00")]).then(t.bind(null,"0704"))},children:[{path:"/auth/login",name:"login",component:function(){return t.e("register").then(t.bind(null,"10af"))},meta:{role:["GUEST"]}},{path:"/auth/register",name:"register",component:function(){return t.e("register").then(t.bind(null,"6df8"))},meta:{role:["GUEST"]}},{path:"/auth/forgot-pass",name:"forgot-pass",component:function(){return t.e("register").then(t.bind(null,"4aae"))},meta:{role:["GUEST"]}},{path:"/auth/reset-pass",name:"reset-pass",component:function(){return t.e("register").then(t.bind(null,"e5f8"))},meta:{role:["GUEST"]}},{path:"/auth/verify-link",name:"verify-link",component:function(){return t.e("register").then(t.bind(null,"e5f8"))},meta:{role:["GUEST"]}},{path:"*",component:function(){return t.e("chunk-2d2178da").then(t.bind(null,"c6e6"))}}]}]})}}]);