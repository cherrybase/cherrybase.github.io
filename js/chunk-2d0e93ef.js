(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e93ef"],{"8d5b":function(e,n,c){"use strict";c.r(n);var o=c("f6c6");console.log("Account ROUTER"),n["default"]=o["a"].route({app:"account",base:"/account/",linkActiveClass:"active",scrollBehavior:function(e,n,c){return c||(e.hash?{selector:e.hash}:{x:0,y:0})},routes:[],noroutes:[{path:"/app",redirect:"/app/home",name:"app"},{path:"/",redirect:"/app/home",meta:{role:["DOMAIN_ADMIN"]},children:[{path:"/app/dashboard",name:"dashboard",component:function(){return Promise.all([c.e("chunk-6c5ed8b4"),c.e("chunk-4330b6b0"),c.e("chunk-11059e04"),c.e("chunk-02a43876"),c.e("demo")]).then(c.bind(null,"bc26"))},meta:{role:["DOMAIN_ADMIN"]}},{path:"/app/icons",name:"icons",component:function(){return Promise.all([c.e("chunk-6c5ed8b4"),c.e("chunk-4330b6b0"),c.e("chunk-11059e04"),c.e("chunk-02a43876"),c.e("demo")]).then(c.bind(null,"4bee"))},meta:{role:["DOMAIN_ADMIN"]}},{path:"/app/profile",name:"profile",component:function(){return Promise.all([c.e("chunk-6c5ed8b4"),c.e("chunk-4330b6b0"),c.e("chunk-11059e04"),c.e("chunk-02a43876"),c.e("demo")]).then(c.bind(null,"8604"))},meta:{role:["DOMAIN_ADMIN"]}},{path:"/app/maps",name:"maps",component:function(){return Promise.all([c.e("chunk-6c5ed8b4"),c.e("chunk-4330b6b0"),c.e("chunk-11059e04"),c.e("chunk-02a43876"),c.e("demo")]).then(c.bind(null,"acb6"))},meta:{role:["DOMAIN_ADMIN"]}},{path:"/app/tables",name:"tables",component:function(){return Promise.all([c.e("chunk-6c5ed8b4"),c.e("chunk-4330b6b0"),c.e("chunk-11059e04"),c.e("chunk-02a43876"),c.e("demo")]).then(c.bind(null,"8671"))},meta:{role:["DOMAIN_ADMIN"]}}]},{path:"/",redirect:"sample",component:function(){return Promise.all([c.e("chunk-6c5ed8b4"),c.e("chunk-4330b6b0"),c.e("chunk-11059e04"),c.e("chunk-21c619b6"),c.e("chunk-7210bfcb")]).then(c.bind(null,"61f1"))},children:[{path:"/sample",name:"sample",component:function(){return c.e("chunk-675c380d").then(c.bind(null,"2a98"))}}]}],beforeEach:function(e,n,c){console.log("beforeEach",e.path,n),window.CONST.APP_USER&&-1==e.path.indexOf("/app")?(console.log("ToApp"),c({path:"/app"})):window.CONST.APP_USER||-1!=e.path.indexOf("/auth")?c():(console.log("ToAuth"),c({path:"/auth/"}))}})}}]);