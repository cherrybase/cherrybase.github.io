(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d1c094c"],{3100:function(t,a,s){},"62ee":function(t,a,s){"use strict";s("3100")},8070:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-content bg-default"},[s("base-nav",{staticClass:"navbar-horizontal navbar-main navbar-top navbar-dark",attrs:{transparent:!0,"menu-classes":"justify-content-end",expand:"lg"},model:{value:t.showMenu,callback:function(a){t.showMenu=a},expression:"showMenu"}},[s("div",{staticClass:"navbar-wrapper",attrs:{slot:"brand"},slot:"brand"},[s("b-navbar-brand",{attrs:{to:"/"}},[s("img",{attrs:{src:"/logo/logo-long-o.png"}})])],1),[s("div",{staticClass:"navbar-collapse-header"},[s("b-row",[s("b-col",{staticClass:"collapse-brand",attrs:{cols:"6"}},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:"/argon/img/brand/green.png"}})])],1),s("b-col",{staticClass:"collapse-close",attrs:{cols:"6"}},[s("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:function(a){t.showMenu=!1}}},[s("span"),s("span")])])],1)],1),s("b-navbar-nav",{staticClass:"align-items-lg-center ml-lg-auto"},[s("b-nav-item",{attrs:{to:"/register"}},[s("i",{staticClass:"ni ni-circle-08"}),s("span",{staticClass:"nav-link-inner--text"},[t._v("Register")])]),s("b-nav-item",{attrs:{to:"/login"}},[s("i",{staticClass:"ni ni-key-25"}),s("span",{staticClass:"nav-link-inner--text"},[t._v("Login")])])],1)]],2),s("b-row",{staticClass:"min-vh-100 w-100 m-0 p-0"},[s("b-col",{attrs:{md:"4"}},[s("div",{staticClass:"main-content min-vh-100 w-75 m-auto pt-7 pb-3"},[s("ul",{staticClass:"list-unstyled bg-transparent text-white"},[s("li",{staticClass:"media bg-transparent mt-4"},[s("span",{staticClass:"icon mr-3 "},[s("i",{staticClass:"far fa-user-circle"})]),s("div",{staticClass:"clearfix"}),s("div",{staticClass:"media-body"},[s("h2",{staticClass:"info-title text-white"},[t._v("Free account")]),s("p",{staticClass:"description"},[t._v(" \n          Create free account and add multiple channles for free\n      ")])])]),s("li",{staticClass:"media bg-transparent mt-4"},[s("span",{staticClass:"icon mr-3"},[s("i",{staticClass:"far fa-comments"})]),s("div",{staticClass:"clearfix"}),s("div",{staticClass:"media-body"},[s("h2",{staticClass:"info-title text-white"},[t._v("Multi channel")]),s("p",{staticClass:"description"},[t._v(" \n        Connect with your custmers on popular social channles from single screen. \n        Focus on communication not the mode.\n      ")])])]),s("li",{staticClass:"media bg-transparent mt-4"},[s("span",{staticClass:"icon mr-3"},[s("i",{staticClass:"fa fa-user-astronaut"})]),s("div",{staticClass:"clearfix"}),s("div",{staticClass:"media-body"},[s("h2",{staticClass:"info-title text-white"},[t._v("Smart communication")]),s("p",{staticClass:"description"},[t._v(" \n        Define message formats, reply suggestions, manage your customer support action from agent panel\n      ")])])]),s("li",{staticClass:"media bg-transparent mt-4"},[s("span",{staticClass:"icon mr-3"},[s("i",{staticClass:"fa fa-bolt"})]),s("div",{staticClass:"clearfix"}),s("div",{staticClass:"media-body"},[s("h2",{staticClass:"info-title text-white"},[t._v("Quick response")]),s("p",{staticClass:"description"},[t._v(" \n        Quick replies, automated responses.\n      ")])])])])])]),s("b-col",{staticClass:"bg-secondary",attrs:{md:"8"}},[s("div",{staticClass:"main-content min-vh-100 pt-7 pb-3 w-100"},[s("zoom-center-transition",{attrs:{duration:t.pageTransitionDuration,mode:"out-in"}},[s("router-view")],1)],1)])],1),s("footer",{staticClass:"py-3 bg-secondary",attrs:{id:"footer-main"}},[s("b-container",[s("b-row",{staticClass:"justify-content-xl-between",attrs:{"align-v":"center"}},[s("b-col",{attrs:{xl:"6"}},[s("div",{staticClass:"copyright text-center text-xl-left text-muted"},[t._v("\n              © "+t._s(t.year)+"\n              "),s("a",{staticClass:"font-weight-bold ml-1",attrs:{href:"https://www.mehery.com",target:"_blank"}},[t._v("MeherY")])])]),s("b-col",{staticClass:"col-xl-6",attrs:{xl:"6"}},[s("b-nav",{staticClass:"nav-footer justify-content-center justify-content-xl-end"},[s("b-nav-item",{attrs:{href:"https://www.creative-tim.com",target:"_blank"}},[t._v("\n                Creative Tim\n              ")]),s("b-nav-item",{attrs:{href:"https://www.creative-tim.com/presentation",target:"_blank"}},[t._v("\n                About Us\n              ")]),s("b-nav-item",{attrs:{href:"http://blog.creative-tim.com",target:"_blank"}},[t._v("\n                Blog\n              ")]),s("b-nav-item",{attrs:{href:"https://www.creative-tim.com/license",target:"_blank"}},[t._v("\n                License\n              ")])],1)],1)],1)],1)],1)],1)},e=[],i=(s("7f7f"),s("57bd")),o=s("7c76"),r={components:{BaseNav:i["a"],ZoomCenterTransition:o["d"]},props:{backgroundColor:{type:String,default:"black"}},data:function(){return{showMenu:!1,menuTransitionDuration:250,pageTransitionDuration:200,year:(new Date).getFullYear(),pageClass:"login-page"}},computed:{title:function(){return"".concat(this.$route.name," Page")}},methods:{toggleNavbar:function(){document.body.classList.toggle("nav-open"),this.showMenu=!this.showMenu},closeMenu:function(){document.body.classList.remove("nav-open"),this.showMenu=!1},setBackgroundColor:function(){document.body.classList.add("bg-default")},removeBackgroundColor:function(){document.body.classList.remove("bg-default")},updateBackground:function(){this.$route.meta.noBodyBackground?this.removeBackgroundColor():this.setBackgroundColor()}},beforeDestroy:function(){this.removeBackgroundColor()},beforeRouteUpdate:function(t,a,s){this.showMenu?(this.closeMenu(),setTimeout((function(){s()}),this.menuTransitionDuration)):s()},watch:{$route:{immediate:!0,handler:function(){this.updateBackground()}}}},c=r,l=(s("62ee"),s("2877")),u=Object(l["a"])(c,n,e,!1,null,null,null);a["default"]=u.exports}}]);