(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dd19c18"],{"0a8a":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("main",[a("section",{staticClass:"relative w-full h-full py-40 min-h-screen"},[a("div",{staticClass:"absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full bg-cover-lg sm:hidden xs:hidden",style:"background-image: url('"+t.bgCoverDesktop+"');"}),a("div",{staticClass:"absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full bg-cover-sm md:hidden lg:hidden xl:hidden",style:"background-image: url('"+t.bgCoverMobile+"');"}),a("router-view"),a("footer-small",{attrs:{absolute:""}})],1)])],1)},s=[],n=a("0bee"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"pb-6",class:[t.absolute?"absolute w-full bottom-0 bg-blueGray-800":"relative"]},[a("div",{staticClass:"container mx-auto px-4"},[a("hr",{staticClass:"mb-6 border-b-1 border-blueGray-600"}),a("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center"},[a("div",{staticClass:"w-full md:w-4/12 px-4"},[a("div",{staticClass:"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"},[t._v("\n          Copyright © "+t._s(t.date)+"\n          "),a("a",{staticClass:"text-white hover:text-blueGray-300 text-sm font-semibold py-1",attrs:{href:t.$config.PROP_SERVICE_WEBSITE_LINK}},[t._v("\n            "+t._s(t.$config.PROP_SERVICE_NAME)+"\n          ")])])]),a("div",{staticClass:"w-full md:w-8/12 px-4"},[a("ul",{staticClass:"flex flex-wrap list-none md:justify-end justify-center"},[a("li",[a("a",{staticClass:"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3",attrs:{href:t.$config.PROP_SERVICE_ABOUTUS_LINK}},[t._v("\n              About Us\n            ")])]),a("li",[a("a",{staticClass:"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3",attrs:{href:t.$config.PROP_SERVICE_BLOG_LINK}},[t._v("\n              Blog\n            ")])]),a("li",[a("a",{staticClass:"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3",attrs:{href:t.$config.PROP_SERVICE_PRIVACY_LINK}},[t._v("\n              Privacy Policy\n            ")])])])])])])])},o=[],i={data:function(){return{date:(new Date).getFullYear()}},props:{absolute:{type:Boolean,default:!1}}},c=i,u=a("2877"),p=Object(u["a"])(c,r,o,!1,null,null,null),b=p.exports,f=a("2d7b"),d=a.n(f),x=a("49ca"),h=a.n(x),g={data:function(){return{bgCoverDesktop:d.a,bgCoverMobile:h.a}},components:{Navbar:n["a"],FooterSmall:b}},m=g,w=(a("54e0"),Object(u["a"])(m,l,s,!1,null,"93572744",null));e["default"]=w.exports},"0bee":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"},[a("div",{staticClass:"container px-4 mx-auto flex flex-wrap items-center justify-between"},[a("div",{staticClass:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},[a("router-link",{staticClass:"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",attrs:{to:"/"}},[a("img",{staticStyle:{"max-height":"50px"},attrs:{src:t.$config.PROP_LOGO_BG_X_LOGO_W,alt:t.$config.PROP_SERVICE_NAME}})]),a("button",{staticClass:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",attrs:{type:"button"},on:{click:t.setNavbarOpen}},[a("i",{staticClass:"text-white fas fa-bars"})])],1),a("div",{staticClass:"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none",class:[t.navbarOpen?"block rounded shadow-lg":"hidden"],attrs:{id:"example-navbar-warning"}},[t._m(0),a("ul",{staticClass:"flex flex-col lg:flex-row list-none lg:ml-auto"},[t._m(1),t._m(2),t._m(3),a("li",{staticClass:"flex items-center"},[a("LoginDropdown",{attrs:{btnClass:"bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"}})],1)])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"flex flex-col lg:flex-row list-none mr-auto hidden"},[a("li",{staticClass:"flex items-center"},[a("a",{staticClass:"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar"}},[a("i",{staticClass:"lg:text-blueGray-200 text-blueGray-400 fa fa-at text-lg leading-lg mr-2"}),t._v("\n            Docs\n          ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"flex items-center hidden",attrs:{hidden:""}},[a("a",{staticClass:"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F",target:"_blank"}},[a("i",{staticClass:"lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"}),a("span",{staticClass:"lg:hidden inline-block ml-2"},[t._v("Share")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"flex items-center hidden",attrs:{hidden:""}},[a("a",{staticClass:"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20",target:"_blank"}},[a("i",{staticClass:"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"}),a("span",{staticClass:"lg:hidden inline-block ml-2"},[t._v("Tweet")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"flex items-center hidden",attrs:{hidden:""}},[a("a",{staticClass:"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar",target:"_blank"}},[a("i",{staticClass:"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"}),a("span",{staticClass:"lg:hidden inline-block ml-2"},[t._v("Star")])])])}],n=a("2891"),r={data:function(){return{navbarOpen:!1}},methods:{setNavbarOpen:function(){this.navbarOpen=!this.navbarOpen}},components:{LoginDropdown:n["a"]}},o=r,i=a("2877"),c=Object(i["a"])(o,l,s,!1,null,null,null);e["a"]=c.exports},2891:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{ref:"btnDropdownRef",class:["",t.btnClass],attrs:{href:"#pablo"},on:{click:function(e){return t.toggleDropdown(e)}}},[t._t("button",(function(){return[t._v("\n          Login\n      ")]}))],2),a("div",{ref:"popoverDropdownRef",staticClass:"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 w-full sm:w-auto",class:{hidden:!t.dropdownPopoverShow,block:t.dropdownPopoverShow}},[a("span",{staticClass:"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"},[t._v("\n      Business User ?\n    ")]),a("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"/partner/auth"}},[t._v("\n      Client Hub\n    ")]),a("div",{staticClass:"h-0 mx-4 my-2 border border-solid border-blueGray-100"}),a("span",{staticClass:"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"},[t._v("\n      Login to workspace\n    ")]),a("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"/front/auth/?app=admin"}},[t._v("\n      Admin panel\n    ")]),a("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"/front/auth/?app=agent"}},[t._v("\n      Agent panel\n    ")])])])},s=[],n=a("39c3"),r={props:{btnClass:{type:String,default:"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"}},data:function(){return{dropdownPopoverShow:!1}},methods:{toggleDropdown:function(t){t.preventDefault(),this.dropdownPopoverShow?this.dropdownPopoverShow=!1:(this.dropdownPopoverShow=!0,Object(n["a"])(this.$refs.btnDropdownRef,this.$refs.popoverDropdownRef,{placement:"bottom"}))}}},o=r,i=a("2877"),c=Object(i["a"])(o,l,s,!1,null,null,null);e["a"]=c.exports},"2d7b":function(t,e,a){t.exports=a.p+"img/social-bg-bottom-right.png"},3590:function(t,e,a){},"49ca":function(t,e,a){t.exports=a.p+"img/social-bg-bottom.png"},"54e0":function(t,e,a){"use strict";a("3590")}}]);