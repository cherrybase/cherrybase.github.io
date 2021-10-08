(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226555"],{e7e2:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MasterView",{attrs:{header:e.header,actions:e.actions,table:e.table},scopedSlots:e._u([{key:"cell(contact)",fn:function(t){return[n("i",{staticClass:"fab",class:e.MyDict.socialPrefix(t.item.contactType)}),e._v("\n        "+e._s(t.item.name||t.item.csid)+"\n  ")]}},{key:"cell(createdStamp)",fn:function(t){return[e._v("\n        "+e._s(e._f("formatDate")(t.item.createdStamp))+"\n  ")]}},{key:"cell(lastInBoundStamp)",fn:function(t){return[e._v("\n        "+e._s(e._f("formatDate")(t.item.lastInBoundStamp))+"\n  ")]}},{key:"cell(lastOutBoundStamp)",fn:function(t){return[e._v("\n        "+e._s(e._f("formatDate")(t.item.lastOutBoundStamp))+"\n  ")]}}])})],1)},a=[],i=(n("96cf"),n("3b8d")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{ref:"pageTitle",attrs:{heading:e.header.heading,icon:e.header.icon,actions:e.actions,subheading:e.header.subheading},on:{action:e.onAction},scopedSlots:e._u([{key:"subheading",fn:function(){return[e._t("header-subheading",(function(){return[e._v("\n              "+e._s(e.header.subheading)+"      \n          ")]}))]},proxy:!0}],null,!0)}),e.table?n("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":e.table.perPage,"current-page":e.table.currentPage,items:e.table.items,fields:e.table.fields},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(n){return[e._t(t,null,null,n)]}}}))],null,!0)}):e._e(),n("b-pagination",{attrs:{"total-rows":e.table.rows,"per-page":e.table.perPage,"aria-controls":"agent-session-list"},model:{value:e.table.currentPage,callback:function(t){e.$set(e.table,"currentPage",t)},expression:"table.currentPage"}})],1)},o=[],l=n("e492"),c=n("d166"),u={components:{PageTitle:l["a"]},data:function(){return{MyFlags:c["c"],MyDict:c["b"],MyConst:c["a"],input:{daterange:{hidden:!0,startDate:null,endDate:null}},session:null}},mounted:function(e){this.getItems()},methods:{getItems:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in t={},this.actions)console.log("actions",n,this.actions[n]),s=this.actions[n].param||this.actions[n].type,t[s]=this.getInput(s);return e.next=4,this.$service.get(this.table.api,t);case 4:a=e.sent,this.table.items=a.results,this.table.rows=this.table.items.length,this.session=a.meta,console.log("sessions",a,this.table);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onAction:function(e){switch(console.log("onAction",e),e.type){case"apply":this.getItems();break;default:console.log("NoMapping",e)}},getInput:function(e){return this.$refs.pageTitle.getInput(e)}},props:{header:{type:Object},actions:{type:Array,default:function(){return[]}},daterange:{type:Object},table:{type:Object},actionShow:{type:Object,default:function(){return{message:"hello"}}}}},p=u,h=n("2877"),d=Object(h["a"])(p,r,o,!1,null,"1e8c9a83",null),m=d.exports,b={components:{MasterView:m},data:function(){return{MyFlags:c["c"],MyDict:c["b"],MyConst:c["a"],header:{heading:"Contacts",subheading:"Use filters to search",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-address-book"},actions:[{label:"Search",name:"LANE_SELECT",type:"search",selectFirst:!0},{label:"Select Account",name:"LANE_SELECT",type:"lane",selectFirst:!0},{label:"Search",type:"apply",selectFirst:!0}],input:{daterange:{hidden:!0,startDate:null,endDate:null}},table:{fields:[{key:"contact",label:"Contact"},{key:"phone",label:"Phone"},{key:"email",label:"Email"},{key:"createdStamp",label:"Joined"},{key:"lastInBoundStamp",label:"LastIn"},{key:"lastOutBoundStamp",label:"LastOut"}],items:[],perPage:25,currentPage:1,rows:0,api:"/api/admins/contacts"},session:null}},mounted:function(e){},methods:{getItems:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.submit("/api/message/bulk/push/messages",{contactType:"WHATSAPP",bulkSessionId:this.$route.params.bulkSessionId});case 2:t=e.sent,this.table.items=t.results,this.table.rows=this.table.items.length,this.session=t.meta,console.log("sessions",t,this.table);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("PostRequest",{url:"/api/message/session/import/trash",params:t});case 2:s=e.sent,this.sessions.items=s.results,this.sessions.rows=this.sessions.items.length;case 5:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),hideChat:function(e){this.session=null},showChat:function(e){this.session&&this.session.sessionId==e.sessionId?this.session=null:this.session=e}}},f=b,g=Object(h["a"])(f,s,a,!1,null,"e62d1c02",null);t["default"]=g.exports}}]);