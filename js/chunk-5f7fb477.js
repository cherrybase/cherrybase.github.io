(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f7fb477"],{"0bee":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"},[e("div",{staticClass:"container px-4 mx-auto flex flex-wrap items-center justify-between"},[e("div",{staticClass:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},[e("router-link",{staticClass:"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",attrs:{to:t.$global.isMobileApp?"/front/auth/login?app=".concat(t.$route.query.app,"&domain=").concat(t.$route.query.domain,"&APP_VIEW=mobile"):"/"}},[e("img",{staticStyle:{"max-height":"50px"},attrs:{src:t.$config.PROP_LOGO_BG_X_LOGO_W,alt:t.$config.PROP_SERVICE_NAME}})]),e("button",{staticClass:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",attrs:{type:"button"},on:{click:t.setNavbarOpen}},[e("i",{staticClass:"text-white fas fa-bars"})])],1),e("div",{staticClass:"lg:flex flex-grow items-center bg-whites xl:bg-opacity-0 lg:shadow-none",class:[t.navbarOpen?"block rounded shadow-lg":"hidden"],attrs:{id:"example-navbar-warning"}},[t._m(0),e("ul",{staticClass:"flex flex-col lg:flex-row list-none lg:ml-auto"},[t._m(1),t._m(2),t._m(3),e("li",{staticClass:"flex items-center"},[e("LoginDropdown",{attrs:{href:"/front/auth?domain=".concat(t.front_domain),btnClass:"bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"}},[t._v("\n            Login\n          ")])],1)])])])])},n=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"flex flex-col lg:flex-row list-none mr-auto hidden"},[e("li",{staticClass:"flex items-center"},[e("a",{staticClass:"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar"}},[e("i",{staticClass:"lg:text-blueGray-200 text-blueGray-400 fa fa-at text-lg leading-lg mr-2"}),t._v("\n            Docs\n          ")])])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"flex items-center hidden",attrs:{hidden:""}},[e("a",{staticClass:"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F",target:"_blank"}},[e("i",{staticClass:"lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"}),e("span",{staticClass:"lg:hidden inline-block ml-2"},[t._v("Share")])])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"flex items-center hidden",attrs:{hidden:""}},[e("a",{staticClass:"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20",target:"_blank"}},[e("i",{staticClass:"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"}),e("span",{staticClass:"lg:hidden inline-block ml-2"},[t._v("Tweet")])])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"flex items-center hidden",attrs:{hidden:""}},[e("a",{staticClass:"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar",target:"_blank"}},[e("i",{staticClass:"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"}),e("span",{staticClass:"lg:hidden inline-block ml-2"},[t._v("Star")])])])}],l=a("2891"),o={data:function(){return{navbarOpen:!1}},methods:{setNavbarOpen:function(){this.navbarOpen=!this.navbarOpen}},components:{LoginDropdown:l["a"]}},r=o,i=a("2877"),c=Object(i["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},2891:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",[e("a",{ref:"btnDropdownRef",class:["",t.btnClass],attrs:{href:t.href||"#pablo"},on:{click:function(e){return t.toggleDropdown(e)}}},[t._t("default",(function(){return[t._v("\n          Login\n      ")]}))],2),e("div",{ref:"popoverDropdownRef",staticClass:"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 w-full sm:w-auto",class:{hidden:!t.dropdownPopoverShow,block:t.dropdownPopoverShow}},[e("span",{staticClass:"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"},[t._v("\n      Business User ?\n    ")]),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"".concat(t.base_url,"/partner/auth")}},[t._v("\n      Domain Manager\n    ")]),e("div",{staticClass:"h-0 mx-4 my-2 border border-solid border-blueGray-100"}),e("span",{staticClass:"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"},[t._v("\n      Login to workspace\n    ")]),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"".concat(t.base_url,"/front/auth/?app=admin&domain=").concat(t.front_domain)}},[t._v("\n      Admin panel\n    ")]),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"".concat(t.base_url,"/front/auth/?app=agent&domain=").concat(t.front_domain)}},[t._v("\n      Agent panel\n    ")])])])},n=[],l=a("39c3"),o={props:{btnClass:{type:String,default:"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"},href:{}},data:function(){return{dropdownPopoverShow:!1}},methods:{toggleDropdown:function(t){this.href||(t.preventDefault(),this.dropdownPopoverShow?this.dropdownPopoverShow=!1:(this.dropdownPopoverShow=!0,Object(l["a"])(this.$refs.btnDropdownRef,this.$refs.popoverDropdownRef,{placement:"bottom"})))}}},r=o,i=a("2877"),c=Object(i["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},"4f4d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"readpage"},[e("navbar"),e("main",[e("div",{staticClass:"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"},[t._m(0),e("div",{staticClass:"container relative mx-auto"},[e("div",{staticClass:"items-center flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[e("div",{staticClass:"pr-12"},[e("h1",{staticClass:"text-white font-semibold text-5xl"},[t._v("\n                "+t._s(t.content.title)+"\n              ")])])])])])]),e("section",{staticClass:"pb-20 bg-blueGray-200 -mt-48"},[e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full md:w-12/12 px-4"},[e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"},[e("div",{staticClass:"px-4 py-5 flex-auto"},[e("span",{staticClass:"mt-2 mb-4 text-blueGray-500",domProps:{innerHTML:t._s(t.text.markdownToHtml)}})])])])])])])]),e("footer-component")],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800"},[e("span",{staticClass:"w-full h-full absolute opacity-100 bg-default",attrs:{id:"blackOverlay"}})])}],l=(a("96cf"),a("3b8d")),o=a("0bee"),r=a("69b5"),i=a("7c5c"),c={data:function(){return{text:{markdownToHtml:"..."},urls:{privacy:{md:this.$config.PROP_SERVICE_PRIVACY_MD,title:"Privicy Policy"},aboutus:{md:this.$config.PROP_SERVICE_ABOUTUS_MD,title:"About Us"},tos:{md:this.$config.PROP_SERVICE_TOS_MD,title:"Terms of Service"}}}},computed:{content:function(){return this.urls[this.$route.params.content]}},mounted:function(){this.loadContent()},methods:{loadContent:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(this.content.md);case 3:return e=t.sent,t.next=6,e.text();case 6:a=t.sent,this.text.markdownToHtml=i["marked"].parse(a),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("Error in fetch",t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}()},components:{Navbar:o["a"],FooterComponent:r["a"]}},u=c,f=(a("8e40"),a("2877")),b=Object(f["a"])(u,s,n,!1,null,null,null);e["default"]=b.exports},"69b5":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"relative bg-blueGray-200 pt-8 pb-6"},[e("div",{staticClass:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20",staticStyle:{transform:"translateZ(0)"}},[e("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[e("polygon",{staticClass:"text-blueGray-200 fill-current",attrs:{points:"2560 0 2560 100 0 100"}})])]),e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"flex flex-wrap text-center lg:text-left"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("h4",{staticClass:"text-3xl font-semibold"},[t._v("Let's keep in touch!")]),e("h5",{staticClass:"text-lg mt-0 mb-2 text-blueGray-600"},[t._v("\n          Find us on any of these platforms, we respond within 1-2 business days.\n        ")]),e("div",{staticClass:"mt-6 lg:mb-0 mb-6"},[t.$config.PROP_SOCIAL_TWITTER?e("button",{staticClass:"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",attrs:{type:"button"}},[e("a",{staticClass:"fab fa-twitter",attrs:{target:"_blank",href:"https://twitter.com/".concat(t.$config.PROP_SOCIAL_TWITTER)}})]):t._e(),t.$config.PROP_SOCIAL_FACEBOOK?e("button",{staticClass:"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",attrs:{type:"button"}},[e("a",{staticClass:"fab fa-facebook-square",attrs:{target:"_blank",href:"https://facebook.com/".concat(t.$config.PROP_SOCIAL_FACEBOOK)}})]):t._e(),t.$config.PROP_SOCIAL_INSTAGRAM?e("button",{staticClass:"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",attrs:{type:"button"}},[e("a",{staticClass:"fab fa-instagram",attrs:{target:"_blank",href:"https://instagram.com/".concat(t.$config.PROP_SOCIAL_INSTAGRAM)}})]):t._e(),t.$config.PROP_SOCIAL_TELEGRAM?e("button",{staticClass:"bg-white text-telegram shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",attrs:{type:"button"}},[e("a",{staticClass:"fab fa-telegram-plane",attrs:{target:"_blank",href:"https://t.me/".concat(t.$config.PROP_SOCIAL_TELEGRAM,"?start=/start")}})]):t._e()])]),e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"flex flex-wrap items-top mb-6"},[e("div",{staticClass:"w-full lg:w-4/12 px-4 ml-auto"},[e("span",{staticClass:"block uppercase text-blueGray-500 text-sm font-semibold mb-2"},[t._v("\n              Useful Links\n            ")]),e("ul",{staticClass:"list-unstyled"},[t.$config.PROP_SERVICE_ABOUTUS_LINK?e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:t.$config.PROP_SERVICE_ABOUTUS_LINK}},[t._v("\n                  About Us\n                ")])]):t._e(),t.$config.PROP_SERVICE_BLOG_LINK?e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:t.$config.PROP_SERVICE_BLOG_LINK}},[t._v("\n                  Blog\n                ")])]):t._e(),t.$config.PROP_SOCIAL_GIIHUB?e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:t.$config.PROP_SOCIAL_GIIHUB}},[t._v("\n                  Github\n                ")])]):t._e()])]),e("div",{staticClass:"w-full lg:w-4/12 px-4"},[e("span",{staticClass:"block uppercase text-blueGray-500 text-sm font-semibold mb-2"},[t._v("\n              Other Resources\n            ")]),e("ul",{staticClass:"list-unstyled"},[t._m(0),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:t.$config.PROP_SERVICE_TOS_LINK}},[t._v("\n                  Terms & Conditions\n                ")])]),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:t.$config.PROP_SERVICE_PRIVACY_LINK}},[t._v("\n                  Privacy Policy\n                ")])]),e("li",{attrs:{hidden:""}},[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:t.$config.PROP_SERVICE_PRIVACY_LINK}},[t._v("\n                  Contact Us\n                ")])])])])])])]),e("hr",{staticClass:"my-6 border-blueGray-300"}),e("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center"},[e("div",{staticClass:"w-full md:w-4/12 px-4 mx-auto text-center"},[e("div",{staticClass:"text-sm text-blueGray-500 font-semibold py-1"},[t._v("\n          Copyright © "+t._s(t.date)+"\n          "),e("a",{staticClass:"text-blueGray-500 hover:text-blueGray-800",attrs:{href:t.$config.PROP_SERVICE_WEBSITE_LINK}},[t._v("\n            "+t._s(t.$config.PROP_SERVICE_NAME)+"\n          ")]),t._v("\n          .\n        ")])])])])])},n=[function(){var t=this,e=t._self._c;return e("li",{attrs:{hidden:""}},[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer"}},[t._v("\n                  MIT License\n                ")])])}],l={data:function(){return{date:(new Date).getFullYear()}}},o=l,r=a("2877"),i=Object(r["a"])(o,s,n,!1,null,null,null);e["a"]=i.exports},"8e40":function(t,e,a){"use strict";a("c445")},c445:function(t,e,a){}}]);