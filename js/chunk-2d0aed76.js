(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aed76"],{"0c7d":function(n,e,c){"use strict";c.r(e);var a=c("f6c6");e["default"]=a["a"].route({app:"admin",base:"/admin/",routes:[{path:"/",alias:"/app/home",name:"myanalytics",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-18295214")]).then(c.bind(null,"0ce3"))}},{path:"/app/reports/sessions",name:"AgentSessions",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-0d99df0a")]).then(c.bind(null,"457f"))}},{path:"/app/reports/taxonomy",name:"ReportTaxonomy",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-939a7148")]).then(c.bind(null,"8ecf"))}},{path:"/app/moderate/import-chat",name:"ImportChat",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-21b20df8")]).then(c.bind(null,"6bbb"))}},{path:"/app/moderate/imported-chat-logs",name:"ModImportChatLogs",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-c9b794be")]).then(c.bind(null,"3c39"))}},{path:"/app/moderate/contacts",name:"ModContactMaster",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d20f363"),c.e("chunk-58577364")]).then(c.bind(null,"e7e2"))}},{path:"/app/moderate/bulk-push-jobs",name:"ModBulkJobs",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-2ffcbe52")]).then(c.bind(null,"6547"))}},{path:"/app/moderate/bulk-push-new",name:"ModBulkSend",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-f8aec3c6")]).then(c.bind(null,"8293"))}},{path:"/app/moderate/bulk-push-msgs/:bulkSessionId",name:"ModBulkMessages",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-2cbc1a8a")]).then(c.bind(null,"e1d9"))}},{path:"/app/admins/agents",name:"AgentsUsers",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-6917d88a")]).then(c.bind(null,"fa17"))}},{path:"/app/admins/agents/list",name:"AgentsList",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-3a6d6c3e")]).then(c.bind(null,"889d"))}},{path:"/app/admins/agents/add",name:"AgentsAdd",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-c3121a94")]).then(c.bind(null,"cca6"))}},{path:"/app/admins/agents/teams",name:"AgentsTeams",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-770f6115")]).then(c.bind(null,"3b50"))}},{path:"/auth/login",name:"LoginBoxed",meta:{layout:"userpages"},component:function(){return c.e("chunk-0c1d1e30").then(c.bind(null,"c0dc"))}},{path:"/app/admins/tmpl/quickreplies",name:"quickreplies",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-62e090cc")]).then(c.bind(null,"0e67"))}},{path:"/app/admins/tmpl/quickactions",name:"quickactions",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-1ec1df37")]).then(c.bind(null,"d0d6"))}},{path:"/app/admins/tmpl/quicklabels",name:"quicklabels",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-42045f22")]).then(c.bind(null,"891c"))}},{path:"/app/admins/tmpl/quicktags",name:"quicktags",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-31e65b1e")]).then(c.bind(null,"38dc"))}},{path:"/app/admins/tmpl/quickmedia",name:"quickmedia",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-6ae6040b")]).then(c.bind(null,"c2d0"))}},{path:"/app/admins/tmpl/pushtemplate/:mode/:itemId",name:"pushtemplate",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d230ab4"),c.e("chunk-10719d8c")]).then(c.bind(null,"a8b6"))}},{path:"/app/admins/tmpl/wabatemplate/view/all",name:"wabatemplates",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d0bb20c"),c.e("chunk-4e9e0dd4")]).then(c.bind(null,"9d13"))}},{path:"/app/admins/tmpl/wabatemplate/:channelId/:code/:lang",name:"wabatemplate",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d0bb20c"),c.e("chunk-4e9e0dd4")]).then(c.bind(null,"9d13"))}},{path:"/app/setup/agent-panel",name:"SetUpAgentPanel",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-1502c354")]).then(c.bind(null,"d36b"))}},{path:"/app/setup/client-api-keys",name:"SetUpApiKeys",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d21ad07"),c.e("chunk-1e41de30")]).then(c.bind(null,"4552"))}},{path:"/app/setup/appscript/:appId",name:"SetUpApiKeys",meta:{layout:"scriptus"},component:function(){return c.e("chunk-38eb486e").then(c.bind(null,"25a0"))}},{path:"/app/setup/company-vars",name:"SetUpCompanyVars",component:function(){return Promise.all([c.e("chunk-2d21ad07"),c.e("chunk-2d21e7d3")]).then(c.bind(null,"d67b"))}},{path:"/app/setup/token-keys",name:"SetUpTokenKeys",component:function(){return Promise.all([c.e("chunk-2d21ad07"),c.e("chunk-2d20f363"),c.e("chunk-6aec6d07")]).then(c.bind(null,"ec0d"))}},{path:"/app/setup/channels",name:"SetUpChannels",component:function(){return Promise.all([c.e("chunk-1518b02a"),c.e("chunk-6c75c417"),c.e("chunk-2d0be2cc"),c.e("chunk-2d21ad07"),c.e("chunk-3f2eaf51")]).then(c.bind(null,"6d14"))}},{path:"/app/console/logs",name:"ErrorLogs",component:function(){return c.e("chunk-2d0bff13").then(c.bind(null,"4056"))}},{path:"app/admins/components/modals",name:"modals",component:function(){return Promise.all([c.e("chunk-2d230ab4"),c.e("chunk-2d215cc0"),c.e("chunk-cc5d8c3c")]).then(c.bind(null,"339f"))}}]})}}]);