(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-673cc8d0"],{"14a9":function(t,e,a){"use strict";var s=function(){var t,e,a,s=this,r=s.$createElement,n=s._self._c||r;return n("b-card",{class:[{"card-lift--hover":s.hover},{shadow:s.shadow},(t={},t["shadow-"+s.shadowSize]=s.shadowSize,t),(e={},e["bg-gradient-"+s.gradient]=s.gradient,e),(a={},a["bg-"+s.type]=s.type,a)],attrs:{"no-body":""}},[s._t("image"),s.$slots.header?n("b-card-header",{class:s.headerClasses},[s._t("header")],2):s._e(),s.noBody?s._e():n("b-card-body",{class:s.bodyClasses},[s._t("default")],2),s.noBody?s._t("default"):s._e(),s.$slots.footer?n("b-card-footer",{class:s.footerClasses},[s._t("footer")],2):s._e()],2)},r=[],n={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},c=n,i=a("2877"),o=Object(i["a"])(c,s,r,!1,null,null,null);e["a"]=o.exports},"2a98":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("base-header",{staticClass:"pb-6"},[a("b-row",{staticClass:"py-4",attrs:{"align-v":"center"}},[a("b-col",{attrs:{lg:"6",cols:"7"}},[a("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Default")]),a("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[a("route-bread-crumb")],1)]),a("b-col",{staticClass:"text-right",attrs:{lg:"6",cols:"5"}},[a("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),a("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)],1),a("b-row",[a("b-col",{attrs:{xl:"3",md:"6"}},[a("stats-card",{attrs:{title:"Total traffic",type:"gradient-red","sub-title":"350,897",icon:"ni ni-active-40"}},[a("template",{slot:"footer"},[a("span",{staticClass:"text-success mr-2"},[a("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),a("b-col",{attrs:{md:"6",xl:"3"}},[a("stats-card",{attrs:{title:"Total traffic",type:"gradient-orange","sub-title":"2,356",icon:"ni ni-chart-pie-35"}},[a("template",{slot:"footer"},[a("span",{staticClass:"text-success mr-2"},[a("i",{staticClass:"fa fa-arrow-up"}),t._v(" 12.18%")]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),a("b-col",{attrs:{md:"6",xl:"3"}},[a("stats-card",{attrs:{title:"Sales",type:"gradient-green","sub-title":"924",icon:"ni ni-money-coins"}},[a("template",{slot:"footer"},[a("span",{staticClass:"text-danger mr-2"},[a("i",{staticClass:"fa fa-arrow-down"}),t._v(" 5.72%")]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),a("b-col",{attrs:{md:"6",xl:"3"}},[a("stats-card",{attrs:{title:"Performance",type:"gradient-info","sub-title":"49,65%",icon:"ni ni-chart-bar-32"}},[a("template",{slot:"footer"},[a("span",{staticClass:"text-success mr-2"},[a("i",{staticClass:"fa fa-arrow-up"}),t._v(" 54.8%")]),a("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1)],1)],1),a("b-container",{staticClass:"mt--6",attrs:{fluid:""}},[a("b-row",{staticClass:"starter-page"},[t._v("\n      Sample page\n    ")])],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("bread-crumb",{attrs:{"list-classes":"breadcrumb-links breadcrumb-dark"}},[a("BreadCrumbItem",[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-home"})])],1),t._l(t.$route.matched.slice(),(function(e,s){return a("BreadCrumbItem",{key:e.name,staticStyle:{display:"inline-block"},attrs:{active:s===t.$route.matched.length-1}},[s<t.$route.matched.length-1?a("router-link",{attrs:{to:{name:e.name}}},[t._v("\n      "+t._s(e.name)+"\n    ")]):a("span",[t._v(t._s(e.name))])],1)}))],2)},c=[],i=(a("7f7f"),function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("b-breadcrumb",{class:[(t={},t["bg-"+e.type]=e.type,t),e.listClasses]},[e._t("default")],2)],1)}),o=[],l={name:"breadcrumb",props:{type:{type:String,default:"",description:"Breadcrumb background type"},listClasses:{type:[String,Object],default:"",description:"Breadcrumb list classes"}}},d=l,u=a("2877"),p=Object(u["a"])(d,i,o,!1,null,null,null),b=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-breadcrumb-item",{attrs:{active:t.active}},[t._t("default")],2)},f=[],h={name:"breadcrumb-item",props:{active:{type:Boolean,default:!1,description:"Whether breadcrumb item is active"}}},y=h,g=Object(u["a"])(y,m,f,!1,null,null,null),C=g.exports,_={name:"route-breadcrumb",components:{BreadCrumb:b,BreadCrumbItem:C},methods:{getBreadName:function(t){return t.name}}},v=_,w=Object(u["a"])(v,n,c,!1,null,"2ac1ffac",null),S=w.exports,x=a("ec5b");console.log("Started page");var B={name:"starter-page",components:{StatsCard:x["a"],RouteBreadCrumb:S},data:function(){return{}}},k=B,$=(a("7273"),Object(u["a"])(k,s,r,!1,null,null,null));e["default"]=$.exports},"2f16":function(t,e,a){},7273:function(t,e,a){"use strict";a("2f16")},"7f7f":function(t,e,a){var s=a("86cc").f,r=Function.prototype,n=/^\s*function ([^ (]*)/,c="name";c in r||a("9e1e")&&s(r,c,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},ec5b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card",{staticClass:"card-stats",attrs:{"show-footer-line":!0}},[a("b-row",[a("b-col",[t._t("default",(function(){return[t.title?a("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[t._v(t._s(t.title))]):t._e(),t.subTitle?a("span",{staticClass:"h2 font-weight-bold mb-0"},[t._v(t._s(t.subTitle))]):t._e()]}))],2),t.$slots.icon||t.icon?a("b-col",{attrs:{cols:"auto"}},[t._t("icon",(function(){return[a("div",{staticClass:"icon icon-shape text-white rounded-circle shadow",class:["bg-"+t.type,t.iconClasses]},[a("i",{class:t.icon})])]}))],2):t._e()],1),a("p",{staticClass:"mt-3 mb-0 text-sm",class:[t.footerClasses]},[t._t("footer")],2)],1)},r=[],n=a("14a9"),c={name:"stats-card",components:{Card:n["a"]},props:{type:{type:String,default:"primary"},icon:String,title:String,subTitle:String,iconClasses:[String,Array],footerClasses:[String,Array]}},i=c,o=a("2877"),l=Object(o["a"])(i,s,r,!1,null,null,null);e["a"]=l.exports}}]);