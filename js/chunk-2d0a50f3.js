(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a50f3"],{"08a6":function(e,t,a){"use strict";a.r(t);a("7f7f");var n=function(){var e=this,t=e._self._c;return t("div",[t("MasterView",{ref:"masterView",attrs:{header:e.header,actions:e.actions,table:e.table,goodTable:"",size:"sm",sidebar:"",itemIdGetter:e.itemIdGetter},scopedSlots:e._u([{key:"cell(name)",fn:function(a){return[t("i",{staticClass:"fab",class:e.MyDict.socialPrefix(a.item.contactType)}),e._v("\n        "+e._s(a.item.name||a.item.csid)+"\n  ")]}},{key:"cell(actions)",fn:function(a){return[e.$config.PERMS.CONTACT_CENTER?t("span",{staticClass:"mg-1",on:{click:a.editItem}},[a.item.profile?t("i",{staticClass:"fa fa-user-check pointer text-success"}):t("i",{staticClass:"fa fa-user-plus pointer"})]):e._e()]}},{key:"cell(createdStamp)",fn:function(t){return[e._v("\n        "+e._s(e._f("formatDate")(t.item.createdStamp))+"\n  ")]}},{key:"cell(lastInBoundStamp)",fn:function(t){return[e._v("\n        "+e._s(e._f("formatDate")(t.item.lastInBoundStamp))+"\n  ")]}},{key:"cell(lastOutBoundStamp)",fn:function(t){return[e._v("\n        "+e._s(e._f("formatDate")(t.item.lastOutBoundStamp))+"\n  ")]}},{key:"sidebar(edit)",fn:function(a){var n=a.itemCopy;return[n.profile?t("my-source",{attrs:{options:"get:/api/cusomter/profile?id=".concat(n.profile.id)},scopedSlots:e._u([{key:"data",fn:function(a){var i=a.options;return[t("ul",{staticClass:"list-unstyled"},e._l(i,(function(a){return t("b-media",{key:a.id,staticClass:"border-greyed border-1px p-1",attrs:{tag:"li"},scopedSlots:e._u([{key:"aside",fn:function(){return[t("img",{attrs:{src:"https://ui-avatars.com/api/?name=".concat(a.item.name.formattedName,"&background=F0F0F0&color=333f54"),blank:"","blank-color":"#abc",width:"64",alt:"placeholder"}})]},proxy:!0}],null,!0)},[t("b-media-body",{staticClass:"p-1"},[t("h5",{staticClass:"mt-0 mb-1"},[e._v(e._s(a.item.name.formattedName))]),t("p",{staticClass:"mb-1"},[a.item.code?t("span",{staticClass:"fa fa-hashtag mg-1 border-1px border-grey p-1"},[e._v(" "+e._s(a.item.code))]):e._e(),e._l(a.item.phones,(function(a){return t("span",{key:a.phone,staticClass:"fa fa-phone mg-1 border-1px border-grey p-1"},[e._v(" "+e._s(a.phone))])})),e._l(a.item.emails,(function(a){return t("span",{key:a.email,staticClass:"fa fa-envelope mg-1 border-1px border-grey p-1"},[e._v(" "+e._s(a.email))])}))],2),t("button",{staticClass:"btn btn-xs btn-outline-success mg-1 float-right",on:{click:function(t){return e.delinkProfile(n,a.item)}}},[e._v("Un-Link")])])],1)})),1)]}}],null,!0)}):e._e(),n.profile?e._e():t("my-source",{attrs:{options:"get:/api/cusomter/profile?contactId=".concat(n.contactId)},scopedSlots:e._u([{key:"data",fn:function(a){var i=a.options;return[t("ul",{staticClass:"list-unstyled"},e._l(i,(function(a){return t("b-media",{key:a.id,staticClass:"border-greyed border-1px p-1",attrs:{tag:"li"},scopedSlots:e._u([{key:"aside",fn:function(){return[t("img",{attrs:{src:"https://ui-avatars.com/api/?name=".concat(a.item.name.formattedName,"&background=F0F0F0&color=333f54"),blank:"","blank-color":"#abc",width:"64",alt:"placeholder"}})]},proxy:!0}],null,!0)},[t("b-media-body",{staticClass:"p-1"},[t("h5",{staticClass:"mt-0 mb-1"},[e._v(e._s(a.item.name.formattedName))]),t("p",{staticClass:"mb-1"},[a.item.code?t("span",{staticClass:"fa fa-hashtag mg-1 border-1px border-grey p-1"},[e._v(" "+e._s(a.item.code))]):e._e(),e._l(a.item.phones,(function(a){return t("span",{key:a.phone,staticClass:"fa fa-phone mg-1 border-1px border-grey p-1"},[e._v(" "+e._s(a.phone))])})),e._l(a.item.emails,(function(a){return t("span",{key:a.email,staticClass:"fa fa-envelope mg-1 border-1px border-grey p-1"},[e._v(" "+e._s(a.email))])}))],2),t("button",{staticClass:"btn btn-xs btn-outline-success mg-1 float-right",on:{click:function(t){return e.linkProfile(n,a.item)}}},[e._v("Link")])])],1)})),1)]}}],null,!0)})]}}])})],1)},i=[],r=(a("96cf"),a("3b8d")),s=a("d166"),o={components:{},data:function(){return{MyFlags:s["c"],MyDict:s["b"],MyConst:s["a"],header:{heading:"Contacts",name:"Contact",subheading:"Use filters to search",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-address-book"},actions:[{label:"Search",name:"LANE_SELECT",type:"search",selectFirst:!0,placeholder:"Search by phone number"},{label:"Select Account",name:"LANE_SELECT",type:"lane",selectFirst:!0},{label:"Search",type:"apply",selectFirst:!0}],input:{daterange:{hidden:!0,startDate:null,endDate:null}},table:{fields:[{key:"name",label:"Contact",sortable:!0,filterOptions:{enabled:!0}},{key:"phone",label:"Phone",filterOptions:{enabled:!0}},{key:"email",label:"Email",filterOptions:{enabled:!0}},{key:"actions",label:"Action"},{key:"createdStamp",label:"Joined"},{key:"lastInBoundStamp",label:"LastIn"},{key:"lastOutBoundStamp",label:"LastOut"}],items:[],perPage:25,currentPage:1,rows:0,api:"/api/admins/contacts"},session:null}},mounted:function(e){},methods:{itemIdGetter:function(e){var t;return null===e||void 0===e||null===(t=e.itemCopy)||void 0===t?void 0:t.contactId},linkProfile:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.submit("/api/cusomter/profile/link",{profileId:a.id,contactId:t.contactId});case 2:n=e.sent,i=n.results,this.updateContact(t,i[0],"LINK");case 5:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),delinkProfile:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.delete("/api/cusomter/profile/link",{profileId:a.id,contactId:t.contactId});case 2:n=e.sent,i=n.results,this.updateContact(t,i[0],"DLINK");case 5:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),updateContact:function(e,t,a){var n;for(var i in t)e[i]=t[i];e.profile=t.profile,this.table.items.some((function(t){if(t.contactId==e.contactId){for(var a in e)t[a]=e[a];return!0}})),this.$refs.masterView.editItem({item:e}),console.log(a,":item.profile",null===e||void 0===e||null===(n=e.profile)||void 0===n?void 0:n.id,e)}}},l=o,c=a("2877"),u=Object(c["a"])(l,n,i,!1,null,"26705f2b",null);t["default"]=u.exports}}]);