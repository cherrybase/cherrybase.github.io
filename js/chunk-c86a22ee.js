(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c86a22ee"],{"6cbc":function(t,e,a){t.exports=a.p+"img/company-profile-1.png"},"6dcc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("sidebar"),e("div",{staticClass:"relative md:ml-64 bg-blueGray-100"},[e("admin-navbar"),e("header-stats"),e("div",{staticClass:"px-4 md:px-10 mx-auto w-full -m-24"},[e("router-view"),e("footer-admin")],1)],1)],1)},l=[],r=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"},[e("div",{staticClass:"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"},[e("a",{staticClass:"text-white text-sm uppercase hidden lg:inline-block font-semibold",attrs:{href:"javascript:void(0)"}},[t._v("\n        Dashboard\n      ")]),t._m(0),e("ul",{staticClass:"flex-col md:flex-row list-none items-center hidden md:flex"},[e("user-dropdown")],1)])])},n=[function(){var t=this,e=t._self._c;return e("form",{staticClass:"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"},[e("div",{staticClass:"relative flex w-full flex-wrap items-stretch"},[e("span",{staticClass:"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"},[e("i",{staticClass:"fas fa-search"})]),e("input",{staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10",attrs:{type:"text",placeholder:"Search here..."}})])])}],o=function(){var t=this,e=t._self._c;return e("div",[e("a",{ref:"btnDropdownRef",staticClass:"text-blueGray-500 block",attrs:{href:"#pablo"},on:{click:function(e){return t.toggleDropdown(e)}}},[e("div",{staticClass:"items-center flex"},[e("span",{staticClass:"w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"},[e("img",{staticClass:"w-full rounded-full align-middle border-none shadow-lg",attrs:{alt:"...",src:t.image}})])])]),e("div",{ref:"popoverDropdownRef",staticClass:"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",class:{hidden:!t.dropdownPopoverShow,block:t.dropdownPopoverShow}},[e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"javascript:void(0);"}},[t._v("\n        Action\n      ")]),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"javascript:void(0);"}},[t._v("\n        Another action\n      ")]),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"javascript:void(0);"}},[t._v("\n        Something else here\n      ")]),e("div",{staticClass:"h-0 my-2 border border-solid border-blueGray-100"}),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"javascript:void(0);"}},[t._v("\n        Seprated link\n      ")])])])},i=[],c=a("39c3"),d=a("6cbc"),u=a.n(d),f={data:function(){return{dropdownPopoverShow:!1,image:u.a}},methods:{toggleDropdown:function(t){t.preventDefault(),this.dropdownPopoverShow?this.dropdownPopoverShow=!1:(this.dropdownPopoverShow=!0,Object(c["a"])(this.$refs.btnDropdownRef,this.$refs.popoverDropdownRef,{placement:"bottom-start"}))}}},p=f,b=a("2877"),m=Object(b["a"])(p,o,i,!1,null,null,null),x=m.exports,w={components:{UserDropdown:x}},v=w,h=Object(b["a"])(v,r,n,!1,null,null,null),y=h.exports,C=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"},[e("div",{staticClass:"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"},[e("button",{staticClass:"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",attrs:{type:"button"},on:{click:function(e){return t.toggleCollapseShow("bg-white m-2 py-3 px-6")}}},[e("i",{staticClass:"fas fa-bars"})]),e("router-link",{staticClass:"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",attrs:{to:"/"}},[t._v("\n        Vue Notus\n      ")]),e("ul",{staticClass:"md:hidden items-center flex flex-wrap list-none"},[e("li",{staticClass:"inline-block relative"},[e("notification-dropdown")],1),e("li",{staticClass:"inline-block relative"},[e("user-dropdown")],1)]),e("div",{staticClass:"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded",class:t.collapseShow},[e("div",{staticClass:"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-6/12"},[e("router-link",{staticClass:"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",attrs:{to:"/"}},[t._v("\n                Vue Notus\n              ")])],1),e("div",{staticClass:"w-6/12 flex justify-end"},[e("button",{staticClass:"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",attrs:{type:"button"},on:{click:function(e){return t.toggleCollapseShow("hidden")}}},[e("i",{staticClass:"fas fa-times"})])])])]),t._m(0),e("hr",{staticClass:"my-4 md:min-w-full"}),e("h6",{staticClass:"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v("\n          Admin Layout Pages\n        ")]),e("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none"},[e("li",{staticClass:"items-center"},[e("router-link",{attrs:{to:"/admin/dashboard"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.href,l=a.navigate,r=a.isActive;return[e("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[r?"text-emerald-500 hover:text-emerald-600":"text-blueGray-700 hover:text-blueGray-500"],attrs:{href:s},on:{click:l}},[e("i",{staticClass:"fas fa-tv mr-2 text-sm",class:[r?"opacity-75":"text-blueGray-300"]}),t._v("\n                Dashboard\n              ")])]}}])})],1),e("li",{staticClass:"items-center"},[e("router-link",{attrs:{to:"/admin/settings"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.href,l=a.navigate,r=a.isActive;return[e("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[r?"text-emerald-500 hover:text-emerald-600":"text-blueGray-700 hover:text-blueGray-500"],attrs:{href:s},on:{click:l}},[e("i",{staticClass:"fas fa-tools mr-2 text-sm",class:[r?"opacity-75":"text-blueGray-300"]}),t._v("\n                Settings\n              ")])]}}])})],1),e("li",{staticClass:"items-center"},[e("router-link",{attrs:{to:"/admin/tables"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.href,l=a.navigate,r=a.isActive;return[e("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[r?"text-emerald-500 hover:text-emerald-600":"text-blueGray-700 hover:text-blueGray-500"],attrs:{href:s},on:{click:l}},[e("i",{staticClass:"fas fa-table mr-2 text-sm",class:[r?"opacity-75":"text-blueGray-300"]}),t._v("\n                Tables\n              ")])]}}])})],1),e("li",{staticClass:"items-center"},[e("router-link",{attrs:{to:"/admin/maps"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.href,l=a.navigate,r=a.isActive;return[e("a",{staticClass:"text-xs uppercase py-3 font-bold block",class:[r?"text-emerald-500 hover:text-emerald-600":"text-blueGray-700 hover:text-blueGray-500"],attrs:{href:s},on:{click:l}},[e("i",{staticClass:"fas fa-map-marked mr-2 text-sm",class:[r?"opacity-75":"text-blueGray-300"]}),t._v("\n                Maps\n              ")])]}}])})],1)]),e("hr",{staticClass:"my-4 md:min-w-full"}),e("h6",{staticClass:"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v("\n          Auth Layout Pages\n        ")]),e("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none md:mb-4"},[e("li",{staticClass:"items-center"},[e("router-link",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",attrs:{to:"/auth/login"}},[e("i",{staticClass:"fas fa-fingerprint text-blueGray-300 mr-2 text-sm"}),t._v("\n              Login\n            ")])],1),e("li",{staticClass:"items-center"},[e("router-link",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",attrs:{to:"/auth/register"}},[e("i",{staticClass:"fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"}),t._v("\n              Register\n            ")])],1)]),e("hr",{staticClass:"my-4 md:min-w-full"}),e("h6",{staticClass:"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v("\n          No Layout Pages\n        ")]),e("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none md:mb-4"},[e("li",{staticClass:"items-center"},[e("router-link",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",attrs:{to:"/landing"}},[e("i",{staticClass:"fas fa-newspaper text-blueGray-300 mr-2 text-sm"}),t._v("\n              Landing Page\n            ")])],1),e("li",{staticClass:"items-center"},[e("router-link",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",attrs:{to:"/profile"}},[e("i",{staticClass:"fas fa-user-circle text-blueGray-300 mr-2 text-sm"}),t._v("\n              Profile Page\n            ")])],1)]),e("hr",{staticClass:"my-4 md:min-w-full"}),e("h6",{staticClass:"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"},[t._v("\n          Documentation\n        ")]),t._m(1)])],1)])},g=[function(){var t=this,e=t._self._c;return e("form",{staticClass:"mt-6 mb-4 md:hidden"},[e("div",{staticClass:"mb-3 pt-0"},[e("input",{staticClass:"border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal",attrs:{type:"text",placeholder:"Search"}})])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"md:flex-col md:min-w-full flex flex-col list-none md:mb-4"},[e("li",{staticClass:"inline-flex"},[e("a",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/vue/colors/notus",target:"_blank"}},[e("i",{staticClass:"fas fa-paint-brush mr-2 text-blueGray-300 text-base"}),t._v("\n              Styles\n            ")])]),e("li",{staticClass:"inline-flex"},[e("a",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus",target:"_blank"}},[e("i",{staticClass:"fab fa-css3-alt mr-2 text-blueGray-300 text-base"}),t._v("\n              CSS Components\n            ")])]),e("li",{staticClass:"inline-flex"},[e("a",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus",target:"_blank"}},[e("i",{staticClass:"fab fa-angular mr-2 text-blueGray-300 text-base"}),t._v("\n              Angular\n            ")])]),e("li",{staticClass:"inline-flex"},[e("a",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus",target:"_blank"}},[e("i",{staticClass:"fab fa-js-square mr-2 text-blueGray-300 text-base"}),t._v("\n              Javascript\n            ")])]),e("li",{staticClass:"inline-flex"},[e("a",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus",target:"_blank"}},[e("i",{staticClass:"fab fa-react mr-2 text-blueGray-300 text-base"}),t._v("\n              NextJS\n            ")])]),e("li",{staticClass:"inline-flex"},[e("a",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus",target:"_blank"}},[e("i",{staticClass:"fab fa-react mr-2 text-blueGray-300 text-base"}),t._v("\n              React\n            ")])]),e("li",{staticClass:"inline-flex"},[e("a",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus",target:"_blank"}},[e("i",{staticClass:"fas fa-link mr-2 text-blueGray-300 text-base"}),t._v("\n              Svelte\n            ")])]),e("li",{staticClass:"inline-flex"},[e("a",{staticClass:"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",attrs:{href:"https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus",target:"_blank"}},[e("i",{staticClass:"fab fa-vuejs mr-2 text-blueGray-300 text-base"}),t._v("\n              VueJS\n            ")])])])}],G=function(){var t=this,e=t._self._c;return e("div",[e("a",{ref:"btnDropdownRef",staticClass:"text-blueGray-500 block py-1 px-3",on:{click:function(e){return t.toggleDropdown(e)}}},[e("i",{staticClass:"fas fa-bell"})]),e("div",{ref:"popoverDropdownRef",staticClass:"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",class:{hidden:!t.dropdownPopoverShow,block:t.dropdownPopoverShow}},[e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"javascript:void(0);"}},[t._v("\n        Action\n      ")]),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"javascript:void(0);"}},[t._v("\n        Another action\n      ")]),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"javascript:void(0);"}},[t._v("\n        Something else here\n      ")]),e("div",{staticClass:"h-0 my-2 border border-solid border-blueGray-100"}),e("a",{staticClass:"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",attrs:{href:"javascript:void(0);"}},[t._v("\n        Seprated link\n      ")])])])},k=[],_={data:function(){return{dropdownPopoverShow:!1}},methods:{toggleDropdown:function(t){t.preventDefault(),this.dropdownPopoverShow?this.dropdownPopoverShow=!1:(this.dropdownPopoverShow=!0,Object(c["a"])(this.$refs.btnDropdownRef,this.$refs.popoverDropdownRef,{placement:"bottom-start"}))}}},S=_,j=Object(b["a"])(S,G,k,!1,null,null,null),P=j.exports,D={data:function(){return{collapseShow:"hidden"}},methods:{toggleCollapseShow:function(t){this.collapseShow=t}},components:{NotificationDropdown:P,UserDropdown:x}},A=D,I=Object(b["a"])(A,C,g,!1,null,null,null),N=I.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative bg-emerald-600 md:pt-32 pb-32 pt-12"},[e("div",{staticClass:"px-4 md:px-10 mx-auto w-full"},[e("div",[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 xl:w-3/12 px-4"},[e("card-stats",{attrs:{statSubtitle:"TRAFFIC",statTitle:"350,897",statArrow:"up",statPercent:"3.48",statPercentColor:"text-emerald-500",statDescripiron:"Since last month",statIconName:"far fa-chart-bar",statIconColor:"bg-red-500"}})],1),e("div",{staticClass:"w-full lg:w-6/12 xl:w-3/12 px-4"},[e("card-stats",{attrs:{statSubtitle:"NEW USERS",statTitle:"2,356",statArrow:"down",statPercent:"3.48",statPercentColor:"text-red-500",statDescripiron:"Since last week",statIconName:"fas fa-chart-pie",statIconColor:"bg-orange-500"}})],1),e("div",{staticClass:"w-full lg:w-6/12 xl:w-3/12 px-4"},[e("card-stats",{attrs:{statSubtitle:"SALES",statTitle:"924",statArrow:"down",statPercent:"1.10",statPercentColor:"text-orange-500",statDescripiron:"Since yesterday",statIconName:"fas fa-users",statIconColor:"bg-pink-500"}})],1),e("div",{staticClass:"w-full lg:w-6/12 xl:w-3/12 px-4"},[e("card-stats",{attrs:{statSubtitle:"PERFORMANCE",statTitle:"49,65%",statArrow:"up",statPercent:"12",statPercentColor:"text-emerald-500",statDescripiron:"Since last month",statIconName:"fas fa-percent",statIconColor:"bg-emerald-500"}})],1)])])])])},O=[],T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"},[e("div",{staticClass:"flex-auto p-4"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"relative w-full pr-4 max-w-full flex-grow flex-1"},[e("h5",{staticClass:"text-blueGray-400 uppercase font-bold text-xs"},[t._v("\n            "+t._s(t.statSubtitle)+"\n          ")]),e("span",{staticClass:"font-semibold text-xl text-blueGray-700"},[t._v("\n            "+t._s(t.statTitle)+"\n          ")])]),e("div",{staticClass:"relative w-auto pl-4 flex-initial"},[e("div",{staticClass:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full",class:[t.statIconColor]},[e("i",{class:[t.statIconName]})])])]),e("p",{staticClass:"text-sm text-blueGray-400 mt-4"},[e("span",{staticClass:"mr-2",class:[t.statPercentColor]},[e("i",{class:["up"===t.statArrow?"fas fa-arrow-up":"fas fa-arrow-down"]}),t._v("\n          "+t._s(t.statPercent)+"%\n        ")]),e("span",{staticClass:"whitespace-nowrap"},[t._v(t._s(t.statDescripiron))])])])])},L=[],E={name:"card-stats",props:{statSubtitle:{type:String,default:"Traffic"},statTitle:{type:String,default:"350,897"},statArrow:{default:"up",validator:function(t){return-1!==["up","down"].indexOf(t)}},statPercent:{type:String,default:"3.48"},statPercentColor:{type:String,default:"text-emerald-500"},statDescripiron:{type:String,default:"Since last month"},statIconName:{type:String,default:"far fa-chart-bar"},statIconColor:{type:String,default:"bg-red-500"}}},z=E,F=Object(b["a"])(z,T,L,!1,null,null,null),J=F.exports,U={components:{CardStats:J}},$=U,M=Object(b["a"])($,R,O,!1,null,null,null),V=M.exports,q=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"block py-4"},[e("div",{staticClass:"container mx-auto px-4"},[e("hr",{staticClass:"mb-4 border-b-1 border-blueGray-200"}),e("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center"},[e("div",{staticClass:"w-full md:w-4/12 px-4"},[e("div",{staticClass:"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"},[t._v("\n            Copyright © "+t._s(t.date)+"\n            "),e("a",{staticClass:"text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1",attrs:{href:"https://www.creative-tim.com?ref=vn-footer-admin"}},[t._v("\n              Creative Tim\n            ")])])]),t._m(0)])])])},B=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full md:w-8/12 px-4"},[e("ul",{staticClass:"flex flex-wrap list-none md:justify-end justify-center"},[e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3",attrs:{href:"https://www.creative-tim.com?ref=vn-footer-admin"}},[t._v("\n                Creative Tim\n              ")])]),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3",attrs:{href:"https://www.creative-tim.com/presentation?ref=vn-footer-admin"}},[t._v("\n                About Us\n              ")])]),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3",attrs:{href:"http://blog.creative-tim.com?ref=vn-footer-admin"}},[t._v("\n                Blog\n              ")])]),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3",attrs:{href:"https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer-admin"}},[t._v("\n                MIT License\n              ")])])])])}],H={data:function(){return{date:(new Date).getFullYear()}}},W=H,Y=Object(b["a"])(W,q,B,!1,null,null,null),K=Y.exports,Q={name:"admin-layout",components:{AdminNavbar:y,Sidebar:N,HeaderStats:V,FooterAdmin:K}},X=Q,Z=Object(b["a"])(X,s,l,!1,null,null,null);e["default"]=Z.exports}}]);