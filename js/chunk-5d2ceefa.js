(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d2ceefa"],{"1f25":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrapper bg-oa-grey"},[a("notifications"),a("side-bar",{staticClass:"bg-oa-blue text-white",attrs:{logo:t.$config.PROP_STATIC_SERVER+"/bg-x-icon-w.png"}},[a("template",{slot:"links"},[a("sidebar-item",{attrs:{"nav-link-class":"text-oa-grey text-bold",link:{name:"Dashboard",path:"/app/home",icon:"fa fa-chart-bar"}}}),t.companies&&t.companies.length>0?a("sidebar-item",{attrs:{"nav-link-class":"text-oa-grey text-bold",link:{name:"Templates",path:"/app/org/0/tmpl",icon:"fa fa-comment-alt"}}}):t._e(),a("sidebar-item",{attrs:{"nav-link-class":"text-oa-grey text-bold",hidden:"",link:{name:"APIs",path:"/app/api",icon:"fa fa-code"}}}),a("sidebar-item",{attrs:{hidden:"","nav-link-class":"text-white",link:{name:"Dashboard",path:"/app/dashboard",icon:"ni ni-tv-2 text-primary"}}}),a("sidebar-item",{attrs:{hidden:"",link:{name:"Icons",path:"/app/icons",icon:"ni ni-planet text-blue"}}}),a("sidebar-item",{attrs:{hidden:"",link:{name:"Maps",path:"/app/maps",icon:"ni ni-pin-3 text-orange"}}}),a("sidebar-item",{attrs:{hidden:"",link:{name:"User Profile",path:"/app/profile",icon:"ni ni-single-02 text-yellow"}}}),a("sidebar-item",{attrs:{hidden:"",link:{name:"Tables",path:"/app/tables",icon:"ni ni-bullet-list-67 text-red"}}}),a("sidebar-item",{attrs:{hidden:"",link:{name:"Login",path:"/app/login",icon:"ni ni-key-25 text-info"}}}),a("sidebar-item",{attrs:{hidden:"",link:{name:"Register",path:"/app/register",icon:"ni ni-circle-08 text-pink"}}})],1),a("template",{slot:"links-after"},[a("hr",{staticClass:"my-3"}),a("h6",{staticClass:"navbar-heading p-0 text-muted"},[t._v("Links")]),a("b-nav",{staticClass:"navbar-nav mb-md-3"},[a("b-nav-item",{staticClass:"text-white text-bold",attrs:{href:"https://mehery.atlassian.net/servicedesk/customer/portals",target:"_blank"}},[a("i",{staticClass:"ni ni-support-16 text-white"}),a("b-nav-text",{staticClass:"p-0 text-white"},[t._v("Support")])],1)],1)],1)],2),a("div",{staticClass:"main-content min-vh-100"},[a("dashboard-navbar",{attrs:{type:t.$route.meta.navbarType}}),a("div",{staticClass:"min-vh-100",on:{click:function(a){return t.$sidebar.displaySidebar(!1)}}},[a("b-container",{attrs:{fluid:""}},[a("div",{staticStyle:{"min-height":"85px"}}),a("fade-transition",{attrs:{duration:200,origin:"center top",mode:"out-in"}},[a("router-view")],1),a("div",{staticStyle:{"min-height":"4rem"}})],1)],1),t.$route.meta.hideFooter?t._e():a("content-footer",{staticClass:"content-footer bg-text-grey"})],1)],1)},i=[],s=(e("f559"),e("b7f5")),r=(e("7da8"),e("7f7f"),function(){var t=this,a=t._self._c;return a("base-nav",{staticClass:"navbar-top navbar-expand",class:{"navbar-dark":"default"===t.type},attrs:{"container-classes":"container-fluid"}},[a("a",{staticClass:"h4 mb-0 text-oa-blue text-uppercase d-none d-lg-inline-block active router-link-active",attrs:{href:"#","aria-current":"page"}},[t._v(" "+t._s(t.$route.name)+" ")]),a("b-navbar-nav",{staticClass:"align-items-center ml-md-auto"},[a("li",{staticClass:"nav-item d-sm-none"},[a("a",{staticClass:"nav-link",attrs:{href:"#","data-action":"search-show","data-target":"#navbar-search-main"}},[a("i",{staticClass:"ni ni-zoom-split-in"})])])]),a("b-navbar-nav",{staticClass:"align-items-center ml-auto ml-md-0"},[a("b-form",{staticClass:"navbar-search form-inline mr-sm-3",class:{"navbar-search-dark":"default"===t.type,"navbar-search-light":"light"===t.type},attrs:{id:"navbar-search-main"}},[a("b-form-group",{staticClass:"mb-0",attrs:{hidden:""}},[a("b-input-group",{staticClass:"input-group-alternative input-group-merge"},[a("b-form-input",{attrs:{placeholder:"Search",type:"text"}}),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-search"})])])],1)],1)],1),a("base-dropdown",{staticClass:"nav-item",attrs:{"menu-on-right":"",tag:"li","title-tag":"a","title-classes":"nav-link pr-0"}},[a("a",{staticClass:"nav-link pr-0",attrs:{slot:"title-container",href:"#"},on:{click:function(t){t.preventDefault()}},slot:"title-container"},[a("b-media",{staticClass:"align-items-center",attrs:{"no-body":""}},[a("span",{staticClass:"avatar avatar-sm rounded-circle"},[a("img",{attrs:{alt:"Image placeholder",src:t.profileImage}})]),a("b-media-body",{staticClass:"ml-2 d-none d-lg-block"})],1)],1),[a("b-dropdown-header",{staticClass:"noti-title"},[a("h6",{staticClass:"text-overflow m-0"},[t._v("\n            Welcome!\n          ")]),a("span",{staticClass:"mb-0 text-sm font-weight-bold text-dark"},[t._v(t._s(t.$global.MyConst.userName))])]),a("b-dropdown-item",{attrs:{href:"#!",hidden:""}},[a("i",{staticClass:"ni ni-single-02"}),a("span",[t._v("My profile")])]),a("b-dropdown-item",{attrs:{href:"#!",hidden:""}},[a("i",{staticClass:"ni ni-settings-gear-65"}),a("span",[t._v("Settings")])]),a("b-dropdown-item",{attrs:{href:"#!",hidden:""}},[a("i",{staticClass:"ni ni-calendar-grid-58"}),a("span",[t._v("Activity")])]),a("b-dropdown-item",{attrs:{href:"#!",hidden:""}},[a("i",{staticClass:"ni ni-support-16"}),a("span",[t._v("Support")])]),a("div",{staticClass:"dropdown-divider"}),a("b-dropdown-item",{attrs:{href:"/contak/panel/auth/logout?_"+Date.now()}},[a("i",{staticClass:"ni ni-user-run"}),a("span",[t._v("Logout")])])]],2)],1)],1)}),o=[],c=e("7c76"),l=e("57bd"),A=e("e445"),p=e.n(A),d={components:{CollapseTransition:c["a"],BaseNav:l["a"],Modal:l["c"]},props:{type:{type:String,default:"default",description:"Look of the dashboard navbar. Default (Green) or light (gray)"}},computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)}},data:function(){return{profileImage:p.a,activeNotifications:!1,showMenu:!1,searchModalVisible:!1,searchQuery:""}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1}}},u=d,m=e("2877"),g=Object(m["a"])(u,r,o,!1,null,null,null),h=g.exports,b=function(){var t=this,a=t._self._c;return a("footer",{staticClass:"footer px-4"},[a("b-row",{staticClass:"justify-content-lg-between",attrs:{"align-v":"center"}},[a("b-col",{attrs:{lg:"6"}},[a("div",{staticClass:"copyright text-center text-lg-left text-grey"},[t._v("\n        © "+t._s(t.year)+" "),a("a",{staticClass:"font-weight-bold ml-1",attrs:{href:t.$config.PROP_SERVICE_WEBSITE_LINK,target:"_blank"}},[t._v("\n        "+t._s(t.$config.PROP_SERVICE_NAME))])])]),a("b-col",{attrs:{lg:"6"}},[a("b-nav",{staticClass:"nav-footer justify-content-lg-end text-grey",attrs:{align:"center"}},[t.$config.PROP_SERVICE_ABOUTUS_LINK?a("b-nav-item",{staticClass:"text-grey",attrs:{href:t.$config.PROP_SERVICE_ABOUTUS_LINK,target:"_blank"}},[t._v("\n         About Us\n        ")]):t._e(),t.$config.PROP_SERVICE_BLOG_LINK?a("b-nav-item",{attrs:{href:t.$config.PROP_SERVICE_BLOG_LINK,target:"_blank"}},[t._v("\n          Blog\n        ")]):t._e(),t.$config.PROP_SERVICE_PRIVACY_LINK?a("b-nav-item",{attrs:{href:t.$config.PROP_SERVICE_PRIVACY_LINK,target:"_blank"}},[t._v("\n          Privacy Policy\n        ")]):t._e()],1)],1)],1)],1)},f=[],v={data:function(){return{year:(new Date).getFullYear()}}},C=v,I=Object(m["a"])(C,b,f,!1,null,null,null),y=I.exports,E=e("853d");function w(t){return document.getElementsByClassName(t).length>0}function x(t){w(t)?new s["a"](".".concat(t)):setTimeout((function(){x(t)}),100)}console.log("This is AppPartnerAuth");var O={mixins:[E["a"]],components:{DashboardNavbar:h,ContentFooter:y,FadeTransition:c["b"]},methods:{initScrollbar:function(){var t=navigator.platform.startsWith("Win");t&&x("sidenav")},showLink:function(t){return window.CONST.APP_USER_ROLE.indexOf(t)>-1}},mounted:function(){this.initScrollbar(),this.loadBasic()}},k=O,P=(e("8955"),Object(m["a"])(k,n,i,!1,null,null,null));a["default"]=P.exports},"3e70":function(t,a,e){},"853d":function(t,a,e){"use strict";e("96cf");var n=e("3b8d");a["a"]={data:function(){return{basic:{isSelectDefaultCompanyEnabled:!1,isLoading:!1}}},computed:{companies:function(){return this.$store.getters.StateRest.PanelApiV1Companys},iCompany:function(){if(!this.$route.params.orgId)return null;for(var t in this.companies){var a=this.companies[t];if(a.company.companyId==this.$route.params.orgId)return a.company}}},watch:{"$route.params.orgId":function(){this.basic.isSelectDefaultCompanyEnabled&&this.selectDefaultCompany()}},methods:{loadBasic:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.basic.isLoding=!0,t.prev=1,t.next=4,this.$service.getX("/panel/api/v1/companys");case 4:return t.abrupt("return",t.sent);case 5:return t.prev=5,this.basic.isLoding=!1,t.finish(5);case 8:case"end":return t.stop()}}),t,this,[[1,,5,8]])})));function a(){return t.apply(this,arguments)}return a}(),selectDefaultCompany:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadBasic();case 2:0==this.$route.params.orgId&&this.$router.push({params:{orgId:this.companies[0].companyId}}),this.basic.isSelectDefaultCompanyEnabled=!0;case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()}}},8955:function(t,a,e){"use strict";e("3e70")},e445:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAECgAwAEAAAAAQAAAEAAAAAAtWsvswAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABypJREFUeAHtmglTGksQx5tDUNGgSTRqTExSea/qff8Pk1dP44kXGg9AUBB8/etlxDK7uMJsQgo7gcWdY7v/fUzP9KZKB4d3MsaUHmPZTfQXAF4sYMwReHGBMTcAebGAFwsYcwTG3gWyv9IA7u6CrDuVSon+V7IvY4E2105jryVZDn8JAE6wTCajsqWk0+lIu92Wtl5Vakmn00JbNps1EGhnDH2TpsQBQBAE5NNoNOT8siKValV/X8vt7a1gExlty+fzMjtTkPliUWb0yr1bBSlpEFJJ7gYRPquabbZasn94JOXTH3Jzc6MipxQQ3AANpxQE/ada71j/rLyeK8rqyrLMzs4EICRoBokBYMKrSVcqVVnf3JJavS4T+jeWgNhhe3DuAwKWQb/PHz/I8tI7c5mkXCIRF3DCn52fy7f/Nsyf87mc6ZG2MOFpdPcnJiZszPrmtlnP2ofVIF7YDH6/vC+DgfAZ8/N/17+rhafugxttccj1y+dzsr1Xkv2DQ3Mldz/OHHH7eAUABjHdVutWNlR7RHOC2aCMMw7L2VIQLi4u74GMK1ycfl4B4IEAcHB0LNXalThTjsNIVJ90dyncKZUsNvheFbwB4LTfuL6Wo3JZhQ/W9CjB4t4nKOY0eF5oMD07v7B8YVCLCnumNwCYHO3D5PVNcyjTf8wokSOdSusyempu5dMKvAEAU/j8+cWFAREv3D0WNfxvNJ7NZsytsDCA9mUFXgBAWABoNltyVW941b6DhPnJD+qaT4yeBaiGAgCaiQQqB4I+xlJonzsELxYAgwDQUg11OgluYlTypi6xPt3LGwCA0LnT3Z1X9pi1R5ZC2zN694b95RUAIjWbm6QIzRMAfZK32YjKrP3s8nxF6DBBSa58QuwHAPV/hCZt9ZUAhQmP4FOTk16dzAsAMEYOgHYK09N22uNzqQIMOyvQjLBQmLazA+75IC8AOEbwz9dzc8asTzMFzLauMMXZWZnUkyPA8AWwVwCwgvn5OTPT23bHG5MAjIstLrz1mgUyrzcA0AgAoKGVd4uaELUUAB4xHLEbbOmR2rwek/HhMNWX9uHMGwBOTEBYUgCKxVeWGrvtrGt/ztVMXzWPa62triaSYnsFwFkBR9x/ff5kQbGlGhsEBObC7NH+l7WP8urVbCKnxF4BQLumNRW6UCjIP39/vT8VBgTa4hAax5Kc8ByMshGKOz7OM1yfxE+Fa1dXsrG1LZdaD6DwgXX0SHM70rsuMMDT7mqdnOLL2gcNfAvm970xfn8lBgBsYsIITOA6Oi7LYflE6locgXoW0asL0J9cYuHNa3m/vCTTmlMkpXljQr8SAwBhIK6YNEBQIKlqVeiyUpPGdUOFa9ND2zO6euS0MjRjvj5t2R71gV7ET8L84c9rXcBE7gqO0DDNh6oPmoRmNDaQzrKtbbd1a6uDAIcU2hVOKIkxHmsAILbYxARHPsHwBgCahrGM+jlEAKP+d6UnOHzq+vumGRyY4BJhZELr+Jz6/9TUpKbVU5ZaT09NSQ4wdP5Op22AMN4HEEO7gBOcGiCaq1Rrdi54qae4dT2/I4XFMvD5h1ZhAuhX4Cj8FbgL85HqYjW0Me/kZN7S4HlNs4u6HGItbc00sYphQRgYACc45ot5n/44k+OTUyHqU/ZGYNpgUP+bqTshuUaRE4gVAQB4DvMhLHOy2Vp8+0YW9IOlYE2Ol6g5+90fCAAeiHBcEVwrzCZ4Wu9RCXJC0O6DHs4HEAhNHHm/sqRgvDUrGbSU/mwAEIr1HL/e2S3JydmZMeAA8SHwU3MACC6A5c1pyk0V2TLF7qriAHtqHtpjA+B0iU+eaJ2f5IZDUAtOOpEvbcdh2vXh9InVBNf4pCCsDFBKj5UKIzw+mVXz3ts/kG/rvZI3gv8O4QGB5ZGyGcGVYuzm9k435gT7CPo8RbEAUAnV59OyW9rXh+zer9cP1+anHpRUux2O6OSU0olF39UycQE+cRTzJABMgs8fHJWtTM2DoDiTW8df8OVWC94z2tfK9M5eyRQW59F9AQiEz2jqWjHzMn9XQEaV4JcDmV11U95Hcm+d9eM3EgDzezUj8vGtnd37ZGZ0xe+Jmc1kZXtnT65jFFIjAQj8PiNlTW7YvOQ0+8LfRp2c1Tb0bTRe1CBA9qPIVoII+fyhbmMpTRNx/xQiOLOx4n0C3k3s95pOKACgSGJDPn/FBPr7TyM0T7n+jPcVdAWLor67QQAgyXhOZhX1oN9x3ylxZWmJrWMoC6EAIDD5drVWM793G47QGUb1pspAzGJz1tRtOGcLuMZjZf4EAOaP+ZDm8kojZ3MWSAiABqJ+ud8PwwJto/J3l09kQWBWMnaOYRS5F2CwO8UJG/gn3SMfeKx5x/9PFuAaGABqegnooXZdp1G7PrZC+NN7/VawSAAYOwq5PnwMS1HaZ96+APQbOCxTozI+eoEcFQ4T5mPsAfgfubXZYJ4la2sAAAAASUVORK5CYII="}}]);