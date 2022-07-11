(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13d8c0fb"],{"096a":function(t,e,a){"use strict";a("e1ea")},"6d46":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto px-4 h-full"},[e("div",{staticClass:"flex content-center items-center justify-center h-full"},[e("div",{staticClass:"w-full lg:w-4/12 px-4"},[e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"},[e("div",{staticClass:"rounded-t mb-0 px-6 py-5"},[t._m(0),t.domain?e("div",{staticClass:"btn-wrapper text-center"},[e("h6",{staticClass:"text-blueGray-500 text-sm"},[e("span",{staticClass:"text-emerald-600"},[t._v("https://")]),e("span",{staticClass:"text-blueGray-600 font-bold"},[t._v(t._s(t.domain))]),e("span",{staticClass:"text-blueGray-500 font-bold"},[t._v("."+t._s(t.$config.PROP_SERVICE_SERVER))])])]):t._e(),e("hr",{staticClass:"mt-2 border-b-1 border-blueGray-300"})]),e("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0 pb-1"},[t._m(1),e("validation-observer",{ref:"formValidator"},[t.domain?t.domain?e("form",[t.$global.isMobileApp?t._e():e("div",{staticClass:"btn-wrapper text-center"},[e("a",{staticClass:"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150",class:{"border-2 border-blueGray-600":"agent"==t.$route.query.app||!t.$route.query.app},attrs:{href:"/front/auth/?app=agent&domain=".concat(t.front_domain),type:"button"}},[e("i",{staticClass:"w-5 mr-1 fa fa-user-secret"}),t._v("\n                Agent\n              ")]),e("a",{staticClass:"bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150",class:{"border-2 border-blueGray-600":"admin"==t.$route.query.app},attrs:{href:"/front/auth/?app=admin&domain=".concat(t.front_domain),type:"button"}},[e("i",{staticClass:"w-5 mr-1 fa fa-user-shield"}),t._v("\n                Admin\n              ")])]),e("div",{staticClass:"relative w-full mb-3"},[e("validation-provider",{attrs:{rules:"required",vid:"login.username"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors;return[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"grid-password"}},[t._v("\n                Username\n              ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.email,expression:"model.email"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{name:"username",placeholder:"Username"},domProps:{value:t.model.email},on:{input:function(e){e.target.composing||t.$set(t.model,"email",e.target.value)}}}),n[0]?e("span",{staticClass:"text-red-500 text-sm"},[t._v("\n                      "+t._s(n[0])+"\n                ")]):t._e()]}}])})],1),e("div",{staticClass:"relative w-full mb-3"},[e("validation-provider",{attrs:{rules:"required",name:"Password",vid:"login.password"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors;return[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"grid-password"}},[t._v("\n                  Password\n                ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],staticClass:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}}),n[0]?e("span",{staticClass:"text-red-500 text-sm"},[t._v("\n                      "+t._s(n[0])+"\n                ")]):t._e()]}}])})],1),e("div",{staticClass:"hidden"},[e("label",{staticClass:"inline-flex items-center cursor-pointer hidden"},[e("input",{staticClass:"form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150",attrs:{id:"customCheckLogin",type:"checkbox"}}),e("span",{staticClass:"ml-2 text-sm font-semibold text-blueGray-600"},[t._v("\n                  Remember me\n                ")])])]),e("div",{staticClass:"text-center mt-6"},[e("button",{staticClass:"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:t.loginSubmit}},[t._v("\n                Sign In\n              ")])])]):t._e():e("form",{ref:"domainForm",attrs:{action:"https://app.".concat(t.$config.PROP_SERVICE_SERVER,"/front/auth/login")}},[e("div",{staticClass:"relative w-full mb-3"},[e("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"grid-password"}},[t._v("\n                Enter your domain\n              ")]),e("div",{staticClass:"domain-box border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"},[e("div",{staticClass:"domain-box-center"},[e("div",{staticClass:"domain-box-center-half"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.app,expression:"app"}],attrs:{name:"app",type:"hidden"},domProps:{value:t.app},on:{input:function(e){e.target.composing||(t.app=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.domainInput,expression:"domainInput"}],staticClass:"domain-input",style:{width:t.domainSize+"px"},attrs:{id:"domain",type:"text",autocomplete:"off",name:"domain",placeholder:t.domainPlaceholder},domProps:{value:t.domainInput},on:{input:function(e){e.target.composing||(t.domainInput=e.target.value)}}}),e("label",{staticClass:"font-bold",attrs:{for:"domain"}},[t._v("."+t._s(t.$config.PROP_SERVICE_SERVER))]),e("div",{staticClass:"domain-width-wrapper"},[e("div",{ref:"domainWidth",staticClass:"domain-width"},[e("div",[t._v(t._s(t.domainInput||t.domainPlaceholder))])])])])]),e("div",{staticClass:"clear-both"})])]),e("div",{staticClass:"text-center mt-6"},[e("button",{staticClass:"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:t.domainSubmit}},[t._v("\n                "+t._s(t.domainPreFilled?"Continue":"Submit")+"\n              ")])])])]),e("div",[e("form",{ref:"loginForm",attrs:{action:t.formUrl,method:"POST"}},[e("input",{attrs:{name:"domainName",type:"hidden"},domProps:{value:t.model.domainName}}),e("input",{attrs:{name:"domainId",type:"hidden"},domProps:{value:t.model.domainId}}),e("input",{attrs:{name:"domainToken",type:"hidden"},domProps:{value:t.model.domainToken}}),e("input",{attrs:{name:"domainUser",type:"hidden"},domProps:{value:t.model.domainUser}}),e("input",{attrs:{name:"domainUserEmail",type:"hidden"},domProps:{value:t.model.domainUserEmail}})])])],1),t.domain?e("div",{staticClass:"flex flex-wrap mt-1 mb-3 relative justify-center text-bold"},[e("div",{staticClass:"w-1/2 text-center font-bold"},[e("span",{staticClass:"text-blueGray-600 cursor-pointer",attrs:{pointer:""},on:{click:function(e){t.domain=""}}},[e("small",[t._v("Switch domain?")])])]),e("div",{staticClass:"w-1/2 text-center font-bold hidden"},[e("router-link",{staticClass:"text-blueGray-600",attrs:{to:"/auth/register"}},[e("small",[t._v("Forgot password?")])])],1)]):t._e()]),t.$global.isMobileApp?t._e():e("div",{staticClass:"flex flex-wrap mt-0 relative justify-center"},[t._m(2)])])])])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center mb-3"},[e("h6",{staticClass:"text-blueGray-500 text-sm font-bold"},[t._v("\n              Sign in to your domain\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-blueGray-400 text-center mb-3 font-bold hidden"},[e("small",[t._v("Or sign in with credentials")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center mt-1"},[e("a",{staticClass:"bg-white text-blueGray-600 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",attrs:{href:"/partner/auth",type:"button"}},[t._v("\n             Domain Manager Login\n          ")])])}],i=(a("96cf"),a("3b8d")),s=(a("a481"),a("e5a1")),r=a.n(s),l=a("f954"),d=a.n(l),m="",u={data:function(){return{nounce:Date.now(),github:r.a,google:d.a,domain:m,app:"agent",domainInput:"",domainPlaceholder:"enter your domain",domainWidth:0,model:{email:null,password:null,domainName:null,domainId:null,domainToken:null,domainUser:null}}},computed:{domainSize:function(){return Math.max(this.domainWidth||this.domainInput.length||this.domainPlaceholder.length,22)+1},domainPreFilled:function(){return this.$global.MyConst.appDomainId&&this.$global.MyConst.appDomain==this.domainInput},formUrl:function(){return"https://"+this.model.domainName+"."+this.$config.PROP_SERVICE_SERVER+"/"+this.model.app+"/auth/login/direct?_="+this.nounce}},watch:{"$route.query.app":function(t){this.updateTarget()},"$route.query.domain":function(t){this.updateTarget()},domainInput:function(t){this.domainInput=(t||"").toLowerCase().trim().replace(/[^A-Za-z0-9]+/g,"")}},mounted:function(){var t=this;this.updateTarget(),t.$nextTick((function(){t.getDomainWidth()}))},updated:function(){var t=this;t.$nextTick((function(){t.getDomainWidth()}))},methods:{updateTarget:function(){this.$global.MyConst.appDomainId&&(this.domainInput=this.$global.MyConst.appDomain),this.$route.query.app&&(this.app=this.$route.query.app),(this.$route.query.domain||this.$global.MyConst.tenant==this.$global.MyConst.appDomain&&"app"!=this.$global.MyConst.tenant)&&this.domainSubmit()},domainSubmit:function(){this.domainPreFilled?this.domain=this.domainInput:this.domainInput&&this.$refs.domainForm.submit()},loginSubmit:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$service.submit("/user/pub/login?tnt="+this.domain,{username:this.model.email,password:this.model.password,app:this.app,domainId:this.$global.MyConst.appDomainId},{ref:this.$refs.formValidator,toast:!1});case 3:e=t.sent,this.model.app=e.data.app,this.model.domainName=e.data.domainName,this.model.domainId=e.data.domainId,this.model.domainToken=e.data.domainToken,this.model.domainUser=e.data.domainUser,this.model.domainUserEmail=e.data.domainUserEmail,a=this,console.log("formUrl",this.formUrl),this.model.domainToken&&setTimeout((function(){a.$refs.loginForm.submit()}),100),t.next=17;break;case 15:t.prev=15,t.t0=t["catch"](0);case 17:case"end":return t.stop()}}),t,this,[[0,15]])})));function e(){return t.apply(this,arguments)}return e}(),getDomainWidth:function(){this.domainWidth=this.$refs.domainWidth?this.$refs.domainWidth.clientWidth:0}}},p=u,c=(a("096a"),a("2877")),h=Object(c["a"])(p,n,o,!1,null,"473a8157",null);e["default"]=h.exports},e1ea:function(t,e,a){},e5a1:function(t,e,a){t.exports=a.p+"img/github.svg"},f954:function(t,e,a){t.exports=a.p+"img/google.svg"}}]);