(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0b45"],{"9e03":function(n,e,t){"use strict";t.r(e);var a=t("f6c6");e["default"]=a["a"].route({app:"agent",base:"/agent/",routes:[{path:"/",redirect:"/app/home/CHATBOX",name:"app"},{path:"/app/home",redirect:"/app/home/CHATBOX",name:"agent-home"},{path:"/app/home/:mvu",name:"agent-action",component:function(){return Promise.all([t.e("chunk-2d230ab4"),t.e("chunk-cc5d6428")]).then(t.bind(null,"37d7"))}},{path:"/app/chat/:contactId/:sessionId",name:"agent-chat",component:function(){return Promise.all([t.e("chunk-2d230ab4"),t.e("chunk-cc5d6428")]).then(t.bind(null,"37d7"))}},{path:"/app/chat/:contactId/:sessionId/:profileId",name:"agent-chat-profile",component:function(){return Promise.all([t.e("chunk-2d230ab4"),t.e("chunk-cc5d6428")]).then(t.bind(null,"37d7"))}},{path:"/app/chat/:contactId/:sessionId/:profileId/:profileView",name:"agent-chat-profile-view",component:function(){return Promise.all([t.e("chunk-2d230ab4"),t.e("chunk-cc5d6428")]).then(t.bind(null,"37d7"))}},{path:"/app/chat/:contactId/:sessionId/:profileId/:profileView/:mvu",name:"defAgentView",component:function(){return Promise.all([t.e("chunk-2d230ab4"),t.e("chunk-cc5d6428")]).then(t.bind(null,"37d7"))}},{path:"/app/chistory/:contactId/:sessionId",name:"agent-chat-session",component:function(){return Promise.all([t.e("chunk-2d230ab4"),t.e("chunk-cc5d6428")]).then(t.bind(null,"37d7"))}}]})}}]);