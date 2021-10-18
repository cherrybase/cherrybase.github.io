(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5559"],{"3f3c":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,actions:e.actions,daterange:e.input.daterange},on:{dateRangeOnUpdate:e.dateRangeOnUpdate}}),s("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":e.sessions.perPage,"current-page":e.sessions.currentPage,items:e.sessions.items,fields:e.sessions.fields},scopedSlots:e._u([{key:"cell(assignedToAgent)",fn:function(t){return["BOT"==t.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):e._e(),"AGENT"==t.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):e._e(),e._v("\n                 "+e._s(t.item.assignedToAgent)+"\n            ")]}},{key:"cell(contact)",fn:function(t){return[s("i",{staticClass:"fab",class:e.MyDict.socialPrefix(t.item.contactId)}),e._v("\n                "+e._s(t.item.contactName)+" "),s("small",[e._v("("+e._s(t.item.contact)+")")])]}},{key:"cell(createdStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.createdStamp))+"\n            ")]}},{key:"cell(actions)",fn:function(t){return[s("span",{staticClass:"far fa-file-alt",attrs:{"cursor-pointer":"",id:"file-details"+t.index}}),s("b-popover",{attrs:{triggers:"hover focus",target:"file-details"+t.index},scopedSlots:e._u([{key:"title",fn:function(){return[s("small",[s("div",{staticClass:"text-align-left"},[e._v(" Name : "+e._s(t.item.fileName))]),s("div",{staticClass:"text-align-left"},[e._v("MD5 : "),s("em",[e._v(e._s(t.item.fileMD5))])]),s("div",{staticClass:"text-align-left"},[e._v(" Size : "+e._s(t.item.fileSize)+" KB")])])]},proxy:!0}],null,!0)}),e._v("\n                 \n                "),"COMPLETED"==t.item.status?s("span",{staticClass:"fa fa-trash",staticStyle:{cursor:"pointer"},on:{click:function(s){return e.deleteItem(t.item,t.index,s.target)}}}):e._e()]}}])}),s("b-pagination",{attrs:{"total-rows":e.sessions.rows,"per-page":e.sessions.perPage,"aria-controls":"agent-session-list"},model:{value:e.sessions.currentPage,callback:function(t){e.$set(e.sessions,"currentPage",t)},expression:"sessions.currentPage"}})],1)},a=[],i=(s("96cf"),s("3b8d")),o=s("e492"),r=s("d166"),c=s("df4b"),l=s("ecee"),u=s("c074"),d=s("ad3d");l["c"].add(u["u"],u["d"],u["a"],u["b"],u["s"],u["c"],u["e"],u["p"],u["v"]);var g={components:{PageTitle:o["a"],"font-awesome-icon":d["a"],AgentChat:c["a"]},data:function(){return{MyFlags:r["c"],MyDict:r["b"],MyConst:r["a"],heading:"Imported Chats",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",actions:[{label:"Import Another chat",name:"PAST_IMPORTS",link:"/app/moderate/import-chat",type:"link"}],input:{daterangesss:{startDate:null,endDate:null}},sessions:{fields:[{key:"contact",label:"Contact"},{key:"countMessages",label:"Messages"},{key:"countSessions",label:"Sessions"},{key:"lane",label:"Account"},{key:"sender",label:"Agent"},{key:"createdBy",label:"by"},{key:"createdStamp",label:"@"},{key:"status",label:"Status"},{key:"actions",label:"Action"}],items:[],perPage:25,currentPage:1,rows:0},session:null}},mounted:function(e){this.getItems()},methods:{getItems:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetRequest",{url:"/api/message/session/import/logs",params:{contactType:"WHATSAPP"}});case 2:t=e.sent,this.sessions.items=t.results,this.sessions.rows=this.sessions.items.length,console.log("sessions",t,this.sessions);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),dateRangeOnUpdate:function(e){console.log("dateRangeOnUpdate",e),this.input.daterange.startDate=this.input.daterange.startDate.getTime(),this.input.daterange.endDate=this.input.daterange.endDate.getTime(),this.getItems()},deleteItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,s){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("PostRequest",{url:"/api/message/session/import/trash",params:t});case 2:n=e.sent,this.sessions.items=n.results,this.sessions.rows=this.sessions.items.length;case 5:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),hideChat:function(e){this.session=null},showChat:function(e){this.session&&this.session.sessionId==e.sessionId?this.session=null:this.session=e}}},p=g,m=s("2877"),f=Object(m["a"])(p,n,a,!1,null,"df6abcfa",null);t["default"]=f.exports}}]);