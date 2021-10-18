(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd96febe"],{"457f":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,daterange:e.input.daterange},on:{dateRangeOnUpdate:e.dateRangeOnUpdate}}),s("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":e.sessions.perPage,"current-page":e.sessions.currentPage,items:e.sessions.items,fields:e.sessions.fields},scopedSlots:e._u([{key:"cell(assignedToAgent)",fn:function(t){return["BOT"==t.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"robot"}}):e._e(),"AGENT"==t.item.mode?s("font-awesome-icon",{style:{color:"grey"},attrs:{icon:"user"}}):e._e(),e._v("\n                 "+e._s(t.item.assignedToAgent)+"\n            ")]}},{key:"cell(contactId)",fn:function(t){return[s("i",{staticClass:"fab",class:e.MyDict.socialPrefix(t.item.contactId)}),e._v("\n                "+e._s(t.item.contactName||t.item.contactId)+"\n\n                "),s("span",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"template-details-"+t.index}}),s("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+t.index,"custom-class":"message-preview"},scopedSlots:e._u([{key:"default",fn:function(){return[s("div",{staticClass:"message-text"},[e._v("Name : "+e._s(t.item.contactName))]),s("div",{staticClass:"message-text"},[e._v("Id : "+e._s(t.item.contactId))]),s("div",{staticClass:"message-text"},[e._v("Session : "+e._s(t.item.sessionId))])]},proxy:!0}],null,!0)})]}},{key:"cell(startSessionStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.startSessionStamp))+"\n            ")]}},{key:"cell(fistResponseStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.fistResponseStamp))+" \n            ")]}},{key:"cell(closeSessionStamp)",fn:function(t){return[e._v("\n                "+e._s(e._f("formatDate")(t.item.closeSessionStamp))+"\n                "),t.item.active?s("font-awesome-icon",{style:{color:"green"},attrs:{icon:"circle"}}):e._e()]}},{key:"cell(actions)",fn:function(t){return[s("span",{staticClass:"far fa-comment-alt",staticStyle:{cursor:"pointer"},on:{click:function(s){return e.showChat(t.item,t.index,s.target)}}}),e._v("\n                 \n            ")]}}])}),s("b-pagination",{attrs:{"total-rows":e.sessions.rows,"per-page":e.sessions.perPage,"aria-controls":"agent-session-list"},model:{value:e.sessions.currentPage,callback:function(t){e.$set(e.sessions,"currentPage",t)},expression:"sessions.currentPage"}}),s("div",{staticClass:"chat_archive",class:{closed:!e.session}},[e.session?s("agent-chat",{key:e.session.sessionId,attrs:{session:e.session},on:{close:e.hideChat}}):e._e()],1)],1)},a=[],i=(s("96cf"),s("3b8d")),o=s("bd86"),r=s("e492"),c=s("d166"),l=s("df4b"),d=s("ecee"),u=s("c074"),p=s("ad3d");d["c"].add(u["u"],u["d"],u["a"],u["b"],u["s"],u["c"],u["e"],u["p"],u["v"]);var g={components:{PageTitle:r["a"],"font-awesome-icon":p["a"],AgentChat:l["a"]},data:function(){var e;return e={MyFlags:c["c"],MyDict:c["b"],MyConst:c["a"],heading:"Chat Sessions",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",input:{daterange:{startDate:null,endDate:null}},sessions:{fields:[{key:"assignedToAgent",label:"Assigned"},{key:"contactId",label:"Contact"},{key:"actions",label:"Action"},{key:"startSessionStamp",label:"Start@"},{key:"fistResponseStamp",label:"Agent@"},{key:"closeSessionStamp",label:"Closed@"}],items:[],perPage:25,currentPage:1,rows:0}},Object(o["a"])(e,"input",{daterange:{startDate:null,endDate:null}}),Object(o["a"])(e,"session",null),e},mounted:function(e){this.dateRangeOnUpdate()},methods:{getSessions:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetSessions",{agent:"TEAM",contactType:"MESSAGE_TWITTER",startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 2:t=e.sent,this.sessions.items=t.results,this.sessions.rows=this.sessions.items.length,console.log("sessions",t,this.sessions);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),dateRangeOnUpdate:function(e){console.log("dateRangeOnUpdate",e),this.input.daterange.startDate=this.input.daterange.startDate.getTime(),this.input.daterange.endDate=this.input.daterange.endDate.getTime(),this.getSessions()},deleteChat:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DeleteSessionChats",t);case 2:e.sent,this.sessions.items.splice(s,1);case 4:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),hideChat:function(e){this.session=null},showChat:function(e){this.session&&this.session.sessionId==e.sessionId?this.session=null:this.session=e}}},f=g,m=(s("68b3"),s("2877")),h=Object(m["a"])(f,n,a,!1,null,"62a12cfb",null);t["default"]=h.exports},"68b3":function(e,t,s){"use strict";s("6f6a")},"6f6a":function(e,t,s){}}]);