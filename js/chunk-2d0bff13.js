(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bff13"],{4056:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("master-view",{staticClass:"text-sm",attrs:{header:{heading:"Logs",subheading:"Error Logs",icon:"icon-gradient bg-happy-itmeo fa fa-exclamation-triangle"},table:e.table,filters:[{label:"Refresh",name:"apply"}]},scopedSlots:e._u([{key:"cell(timestamp)",fn:function(t){return[e._v("\n       "+e._s(e._f("formatStamp")(t.value))+"\n     ")]}},{key:"cell(session)",fn:function(t){return[e._v("\n       "+e._s(t.item.sessionId)+" "),s("br"),s("i",[e._v(" "+e._s(t.item.contactId))])]}},{key:"cell(actions)",fn:function(t){return[s("b-button",{staticClass:"fas fa-eye text-sm",attrs:{size:"xs",variant:"outline-primary"},on:{click:t.openView}}),e._v(" \n      ")]}}])})],1)},n=[],i={components:{},data:function(){return{actions:[],table:{fields:[{key:"timestamp",label:"Timestamp"},{key:"session",label:"Session"},{key:"message",label:"Message"},{key:"actions",label:"Action"}],items:[],perPage:25,size:"sm",sortBy:"timestamp",sortDir:"desc",currentPage:1,paging:"lazy",rows:0,api:"api/objects/logs"}}},computed:{},created:function(e){},methods:{}},o=i,l=s("2877"),r=Object(l["a"])(o,a,n,!1,null,null,null);t["default"]=r.exports}}]);