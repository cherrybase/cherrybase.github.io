(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aed76"],{"0c7d":function(n,e,c){"use strict";c.r(e);var a=c("f6c6");e["default"]=a["a"].route({app:"admin",base:"/admin/",routes:[{path:"/",alias:"/app/home",name:"myanalytics",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2d0b90b4"),c.e("chunk-044bdcd9")]).then(c.bind(null,"0ce3"))}},{path:"/app/reports/sessions",name:"AgentSessions",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-61461aca"),c.e("chunk-fd96febe")]).then(c.bind(null,"457f"))}},{path:"/app/reports/taxonomy",name:"ReportTaxonomy",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-61461aca"),c.e("chunk-4d23c9ca")]).then(c.bind(null,"8ecf"))}},{path:"/app/moderate/import-chat",name:"ImportChat",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-83babe1a")]).then(c.bind(null,"8fde"))}},{path:"/app/moderate/imported-chat-logs",name:"ModImportChatLogs",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-61461aca"),c.e("chunk-2d0c5559")]).then(c.bind(null,"3f3c"))}},{path:"/app/moderate/contacts",name:"ModContactMaster",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-6b15b36b")]).then(c.bind(null,"e7e2"))}},{path:"/app/moderate/bulk-push-jobs",name:"ModBulkJobs",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-61461aca"),c.e("chunk-ad9b8694")]).then(c.bind(null,"7d7b"))}},{path:"/app/moderate/bulk-push-new",name:"ModBulkSend",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-eabfa370")]).then(c.bind(null,"e740"))}},{path:"/app/moderate/bulk-push-msgs/:bulkSessionId",name:"ModBulkMessages",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-61461aca"),c.e("chunk-09d3710d")]).then(c.bind(null,"6682"))}},{path:"/app/admins/agents",name:"AgentsUsers",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2d237117")]).then(c.bind(null,"fa17"))}},{path:"/app/admins/agents/list",name:"AgentsList",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-563187c0")]).then(c.bind(null,"889d"))}},{path:"/app/admins/agents/add",name:"AgentsAdd",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-2d22214b")]).then(c.bind(null,"cca6"))}},{path:"/app/admins/agents/teams",name:"AgentsTeams",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2d0c4660")]).then(c.bind(null,"3b50"))}},{path:"/auth/login",name:"LoginBoxed",meta:{layout:"userpages"},component:function(){return c.e("chunk-7a67f546").then(c.bind(null,"c0dc"))}},{path:"/app/admins/tmpl/quickreplies",name:"quickreplies",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2604a8f2"),c.e("chunk-2d0afe0c")]).then(c.bind(null,"0fcc"))}},{path:"/app/admins/tmpl/quickactions",name:"quickactions",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-7d44d21e")]).then(c.bind(null,"3fbe"))}},{path:"/app/admins/tmpl/quicklabels",name:"quicklabels",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-bb01d27e")]).then(c.bind(null,"51a8"))}},{path:"/app/admins/tmpl/quicktags",name:"quicktags",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-ec15ee82")]).then(c.bind(null,"194a"))}},{path:"/app/admins/tmpl/quickmedia",name:"quickmedia",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-5e133ad8"),c.e("chunk-8520b580")]).then(c.bind(null,"8f06"))}},{path:"/app/admins/tmpl/pushtemplate/:mode/:itemId",name:"pushtemplate",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2604a8f2"),c.e("chunk-7a2f4f18")]).then(c.bind(null,"096e"))}},{path:"/app/admins/tmpl/wabatemplate/:mode/:itemId",name:"pushtemplate",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-6affe8e0")]).then(c.bind(null,"59c3"))}},{path:"/app/setup/agent-panel",name:"SetUpAgentPanel",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-7ace8d66")]).then(c.bind(null,"0f73"))}},{path:"/app/setup/client-api-keys",name:"SetUpAgentPanel",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-719eaeb0")]).then(c.bind(null,"5c42"))}},{path:"/app/setup/channels",name:"SetUpChannels",component:function(){return Promise.all([c.e("chunk-66166e18"),c.e("chunk-722b641d")]).then(c.bind(null,"e923"))}},{path:"app/admins/components/modals",name:"modals",component:function(){return Promise.all([c.e("chunk-4c7856c2"),c.e("chunk-2d215cc0"),c.e("chunk-2d0b96a3")]).then(c.bind(null,"339f"))}}]})}}]);