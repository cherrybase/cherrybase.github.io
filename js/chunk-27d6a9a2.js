(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27d6a9a2"],{"09f7":function(t,a,e){},"14a9":function(t,a,e){"use strict";var s=e("bd86"),r=function(){var t=this,a=t._self._c;return a("b-card",{class:[{"card-lift--hover":t.hover},{shadow:t.shadow},Object(s["a"])({},"shadow-".concat(t.shadowSize),t.shadowSize),Object(s["a"])({},"bg-gradient-".concat(t.gradient),t.gradient),Object(s["a"])({},"bg-".concat(t.type),t.type)],attrs:{"no-body":""}},[t._t("image"),t.$slots.header?a("b-card-header",{class:t.headerClasses},[t._t("header")],2):t._e(),t.noBody?t._e():a("b-card-body",{class:t.bodyClasses},[t._t("default")],2),t.noBody?t._t("default"):t._e(),t.$slots.footer?a("b-card-footer",{class:t.footerClasses},[t._t("footer")],2):t._e()],2)},n=[],c={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},o=c,i=e("2877"),l=Object(i["a"])(o,r,n,!1,null,null,null);a["a"]=l.exports},"2a98":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[a("base-header",{staticClass:"pb-6"},[a("b-row",{staticClass:"py-4",attrs:{"align-v":"center"}},[a("b-col",{attrs:{lg:"6",cols:"7"}},[a("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Default")]),a("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[a("route-bread-crumb")],1)]),a("b-col",{staticClass:"text-right",attrs:{lg:"6",cols:"5"}},[a("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),a("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)],1),a("b-row",[a("b-col",{attrs:{xl:"3",md:"6"}},[a("stats-card",{attrs:{title:"Total traffic",type:"gradient-red","sub-title":"350,897",icon:"ni ni-active-40"}},[a("template",{slot:"footer"},[a("span",{staticClass:"text-success mr-2"},[a("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),a("b-col",{attrs:{md:"6",xl:"3"}},[a("stats-card",{attrs:{title:"Total traffic",type:"gradient-orange","sub-title":"2,356",icon:"ni ni-chart-pie-35"}},[a("template",{slot:"footer"},[a("span",{staticClass:"text-success mr-2"},[a("i",{staticClass:"fa fa-arrow-up"}),t._v(" 12.18%")]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),a("b-col",{attrs:{md:"6",xl:"3"}},[a("stats-card",{attrs:{title:"Sales",type:"gradient-green","sub-title":"924",icon:"ni ni-money-coins"}},[a("template",{slot:"footer"},[a("span",{staticClass:"text-danger mr-2"},[a("i",{staticClass:"fa fa-arrow-down"}),t._v(" 5.72%")]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),a("b-col",{attrs:{md:"6",xl:"3"}},[a("stats-card",{attrs:{title:"Performance",type:"gradient-info","sub-title":"49,65%",icon:"ni ni-chart-bar-32"}},[a("template",{slot:"footer"},[a("span",{staticClass:"text-success mr-2"},[a("i",{staticClass:"fa fa-arrow-up"}),t._v(" 54.8%")]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1)],1)],1),a("b-container",{staticClass:"mt--6",attrs:{fluid:""}},[a("b-row",{staticClass:"starter-page"},[t._v("\n      Sample page\n    ")])],1)],1)},r=[],n=(e("7f7f"),function(){var t=this,a=t._self._c;return a("bread-crumb",{attrs:{"list-classes":"breadcrumb-links breadcrumb-dark"}},[a("BreadCrumbItem",[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-home"})])],1),t._l(t.$route.matched.slice(),(function(e,s){return a("BreadCrumbItem",{key:e.name,staticStyle:{display:"inline-block"},attrs:{active:s===t.$route.matched.length-1}},[s<t.$route.matched.length-1?a("router-link",{attrs:{to:{name:e.name}}},[t._v("\n      "+t._s(e.name)+"\n    ")]):a("span",[t._v(t._s(e.name))])],1)}))],2)}),c=[],o=e("bd86"),i=function(){var t=this,a=t._self._c;return a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("b-breadcrumb",{class:[Object(o["a"])({},"bg-".concat(t.type),t.type),t.listClasses]},[t._t("default")],2)],1)},l=[],d={name:"breadcrumb",props:{type:{type:String,default:"",description:"Breadcrumb background type"},listClasses:{type:[String,Object],default:"",description:"Breadcrumb list classes"}}},u=d,b=e("2877"),p=Object(b["a"])(u,i,l,!1,null,null,null),m=p.exports,f=function(){var t=this,a=t._self._c;return a("b-breadcrumb-item",{attrs:{active:t.active}},[t._t("default")],2)},h=[],y={name:"breadcrumb-item",props:{active:{type:Boolean,default:!1,description:"Whether breadcrumb item is active"}}},C=y,_=Object(b["a"])(C,f,h,!1,null,null,null),g=_.exports,v={name:"route-breadcrumb",components:{BreadCrumb:m,BreadCrumbItem:g},methods:{getBreadName:function(t){return t.name}}},w=v,S=Object(b["a"])(w,n,c,!1,null,"2ac1ffac",null),x=S.exports,B=e("ec5b");console.log("Started page");var j={name:"starter-page",components:{StatsCard:B["a"],RouteBreadCrumb:x},data:function(){return{}}},O=j,k=(e("dc15"),Object(b["a"])(O,s,r,!1,null,null,null));a["default"]=k.exports},dc15:function(t,a,e){"use strict";e("09f7")},ec5b:function(t,a,e){"use strict";var s=function(){var t=this,a=t._self._c;return a("card",{staticClass:"card-stats",attrs:{"show-footer-line":!0}},[a("b-row",[a("b-col",[t._t("default",(function(){return[t.title?a("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[t._v(t._s(t.title))]):t._e(),t.subTitle?a("span",{staticClass:"h2 font-weight-bold mb-0"},[t._v(t._s(t.subTitle))]):t._e()]}))],2),t.$slots.icon||t.icon?a("b-col",{attrs:{cols:"auto"}},[t._t("icon",(function(){return[a("div",{staticClass:"icon icon-shape text-white rounded-circle shadow",class:["bg-".concat(t.type),t.iconClasses]},[a("i",{class:t.icon})])]}))],2):t._e()],1),a("p",{staticClass:"mt-3 mb-0 text-sm",class:[t.footerClasses]},[t._t("footer")],2)],1)},r=[],n=e("14a9"),c={name:"stats-card",components:{Card:n["a"]},props:{type:{type:String,default:"primary"},icon:String,title:String,subTitle:String,iconClasses:[String,Array],footerClasses:[String,Array]}},o=c,i=e("2877"),l=Object(i["a"])(o,s,r,!1,null,null,null);a["a"]=l.exports}}]);