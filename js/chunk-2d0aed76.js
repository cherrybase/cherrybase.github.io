(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aed76"],{"0c7d":function(n,e,c){"use strict";c.r(e);var a=c("f6c6");e["default"]=a["a"].route({app:"admin",base:"/admin/",routes:[{path:"/",alias:"/app/home",name:"myanalytics",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-6edc362a")]).then(c.bind(null,"0ce3"))}},{path:"/app/reports/sessions",name:"AgentSessions",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-8e53325a")]).then(c.bind(null,"457f"))}},{path:"/app/reports/taxonomy",name:"ReportTaxonomy",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2464eda2")]).then(c.bind(null,"8ecf"))}},{path:"/app/moderate/import-chat",name:"ImportChat",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-9c1993ee")]).then(c.bind(null,"8fde"))}},{path:"/app/moderate/imported-chat-logs",name:"ModImportChatLogs",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-fb439ab6")]).then(c.bind(null,"3f3c"))}},{path:"/app/moderate/contacts",name:"ModContactMaster",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-8067b738"),c.e("chunk-2d226555")]).then(c.bind(null,"e7e2"))}},{path:"/app/moderate/bulk-push-jobs",name:"ModBulkJobs",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-7d0596e6")]).then(c.bind(null,"7d7b"))}},{path:"/app/moderate/bulk-push-new",name:"ModBulkSend",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-48dd0948")]).then(c.bind(null,"e740"))}},{path:"/app/moderate/bulk-push-msgs/:bulkSessionId",name:"ModBulkMessages",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-daf3f9fe")]).then(c.bind(null,"6682"))}},{path:"/app/admins/agents",name:"AgentsUsers",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-07aaf642")]).then(c.bind(null,"fa17"))}},{path:"/app/admins/agents/list",name:"AgentsList",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-563187c0")]).then(c.bind(null,"889d"))}},{path:"/app/admins/agents/add",name:"AgentsAdd",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-2d22214b")]).then(c.bind(null,"cca6"))}},{path:"/app/admins/agents/teams",name:"AgentsTeams",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2d0c4660")]).then(c.bind(null,"3b50"))}},{path:"/auth/login",name:"LoginBoxed",meta:{layout:"userpages"},component:function(){return c.e("chunk-7a67f546").then(c.bind(null,"c0dc"))}},{path:"/app/admins/tmpl/quickreplies",name:"quickreplies",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2aaf96ae")]).then(c.bind(null,"0fcc"))}},{path:"/app/admins/tmpl/quickactions",name:"quickactions",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-7d44d21e")]).then(c.bind(null,"3fbe"))}},{path:"/app/admins/tmpl/quicklabels",name:"quicklabels",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-bb01d27e")]).then(c.bind(null,"51a8"))}},{path:"/app/admins/tmpl/quicktags",name:"quicktags",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-ec15ee82")]).then(c.bind(null,"194a"))}},{path:"/app/admins/tmpl/quickmedia",name:"quickmedia",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-36e60076")]).then(c.bind(null,"8f06"))}},{path:"/app/admins/tmpl/pushtemplate/:mode/:itemId",name:"pushtemplate",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-321674ae")]).then(c.bind(null,"a8b6"))}},{path:"/app/admins/tmpl/wabatemplate/view/all",name:"wabatemplates",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-6c5ed8b4"),c.e("chunk-44f9ee1a"),c.e("chunk-2646a23c")]).then(c.bind(null,"9d13"))}},{path:"/app/admins/tmpl/wabatemplate/:channelId/:code/:lang",name:"wabatemplate",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-6c5ed8b4"),c.e("chunk-44f9ee1a"),c.e("chunk-2646a23c")]).then(c.bind(null,"9d13"))}},{path:"/app/setup/agent-panel",name:"SetUpAgentPanel",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-7ace8d66")]).then(c.bind(null,"0f73"))}},{path:"/app/setup/client-api-keys",name:"SetUpAgentPanel",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-8067b738"),c.e("chunk-021295cc")]).then(c.bind(null,"5c42"))}},{path:"/app/setup/channels",name:"SetUpChannels",component:function(){return Promise.all([c.e("chunk-78addef4"),c.e("chunk-8a67c292"),c.e("chunk-8067b738"),c.e("chunk-2d12b6dd")]).then(c.bind(null,"e923"))}},{path:"app/admins/components/modals",name:"modals",component:function(){return Promise.all([c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2d0b96a3")]).then(c.bind(null,"339f"))}}]})}}]);