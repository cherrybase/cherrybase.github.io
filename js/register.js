(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"05dd":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{staticClass:"x-position-absolute"},[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[s("h2",[e._v(" Get started free ")]),s("small",[e._v(" No credit card required")])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[s("div",{staticClass:"text-muted mb-4"},[s("h2",[e._v(" Sign in ")]),s("small",[e._v(" Use your registered details ")])]),s("div",{staticClass:"d-none"},[s("div",{staticClass:"text-muted text-center mt-2 mb-3"},[s("small",[e._v("Sign in with")])]),s("div",{staticClass:"btn-wrapper text-center"},[s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:e.$config.CDN_URL+"/argon/img/icons/common/github.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:e.$config.CDN_URL+"/argon/img//icons/common/google.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),s("div",{staticClass:"text-center text-muted mb-4 d-none"},[s("small",[e._v("Or sign in with credentials")])]),s("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[s("base-input",{staticClass:"mb-3",attrs:{alternative:"",feedback:"",question:"",vid:"login.email",name:"Email",label:"Email",rules:{required:!0,email:!0}},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",feedback:"",question:"",vid:"login.password",name:"Password",label:"Password",rules:{required:!0,min:6},type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}}),s("b-form-checkbox",{staticClass:"d-none",model:{value:e.model.rememberMe,callback:function(t){e.$set(e.model,"rememberMe",t)},expression:"model.rememberMe"}},[e._v("Remember me")]),s("div",{staticClass:"text-center"},[s("base-button",{staticClass:"my-4",attrs:{type:"primary","native-type":"submit"}},[e._v("Sign in")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)},r=[],n=(s("96cf"),s("3b8d")),i={data:function(){return{model:{email:"",password:"",rememberMe:!1}}},methods:{onSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$service.submit("/partner/pub/login",{email:this.model.email,password:this.model.password,newpass:this.model.password},{ref:this.$refs.formValidator,toast:!1});case 3:window.location.href="/partner/app/",e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()}},o=i,l=s("2877"),c=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=c.exports},"15f5":function(e,t,s){},"179f":function(e,t,s){"use strict";s("5913")},"1d35":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{staticClass:"x-position-absolute"},[e.viewSignupForm?s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0 ",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 d-none"},[s("h2",[e._v(" Get started free ")]),s("small",[e._v(" No credit card required")])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[s("div",{staticClass:"text-muted mb-4"},[s("h2",[e._v(" Get started free ")]),s("small",[e._v(" No credit card required")])]),s("div",{staticClass:"d-none"},[s("div",{staticClass:"text-muted text-center mt-2 mb-4"},[s("small",[e._v("Sign up with")])]),s("div",{staticClass:"text-center"},[s("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),s("div",{staticClass:"text-center text-muted mb-4 d-none"},[s("small",[e._v("Or sign up with credentials")])]),s("validation-observer",{ref:"signupContact",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Name",name:e.$t("fields.name"),vid:"signupContact.name",rules:{required:!0},required:""},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.email"),vid:"signupContact.email",rules:"required|emailz",required:"",valid:!0},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.phone"),vid:"signupContact.phone",rules:"required|phone",required:"",valid:!0},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.company"),vid:"signupContact.company",rules:{required:!0},required:""},model:{value:e.model.company,callback:function(t){e.$set(e.model,"company",t)},expression:"model.company"}}),s("base-select",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.role"),vid:"signupContact.role",rules:{required:!0},required:""},model:{value:e.model.role,callback:function(t){e.$set(e.model,"role",t)},expression:"model.role"}},[s("option",{attrs:{value:"agency_partner_developer"}},[e._v("Agency / Partner Developer")]),s("option",{attrs:{value:"professional_developer"}},[e._v("Professional Developer")]),s("option",{attrs:{value:"technology_business_manager"}},[e._v("Technology / Business Manager")]),s("option",{attrs:{value:"other"}},[e._v("Other")])]),s("base-select",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.country"),vid:"signupContact.country",rules:{required:!0},required:"",options:"data:countries"},model:{value:e.model.country,callback:function(t){e.$set(e.model,"country",t)},expression:"model.country"}}),s("b-row",{staticClass:" my-4"},[s("b-col",{attrs:{cols:"12"}},[s("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Privacy",Policy:""}},[s("b-form-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[s("span",{staticClass:"text-muted"},[e._v("I agree with the "),s("a",{attrs:{target:"_blank",href:"https://www.mehery.com/privacy-policy/#page-content"}},[e._v("Privacy Policy")])])])],1)],1)],1),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Create account")])],1)],1)]}}],null,!1,1983474001)})],1)],1)],1)],1):e._e(),e.viewMailSent?s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 text-center "},[s("h2",[e._v(" Almost there … ")]),s("small",[e._v(" Please check your email to confirm your account.")])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-4"},[s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[e._v("If "+e._s(e.model.email)+" is not your email address, please go back and enter the correct one.")])]),s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[e._v("If you haven't received our email in 15 minutes, please check your spam folder.")])])])],1)],1)],1):e._e()],1)],1)},r=[],n=(s("96cf"),s("3b8d")),i=(s("15f5"),{name:"register",data:function(){return{model:{name:"",email:"",phone:"",company:"",role:"",password:"",country:"",agree:!1},view:{screen:null}}},computed:{viewMailSent:function(){return"MAILSENT"==this.view.screen},viewSignupForm:function(){return!this.view.screen}},methods:{onSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$service.post("/partner/pub/register",this.model);case 3:t=e.sent,console.log("resp",t),this.view.screen="MAILSENT",e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("error",e.t0.response.data),this.$refs.signupContact.setErrors(e.t0.response.data.veeErrors);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}}),o=i,l=(s("7394"),s("2877")),c=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=c.exports},"36ef":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{staticClass:"x-position-absolute"},[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[s("div",{staticClass:"text-muted text-center mt-2 mb-4"},[s("small",[e._v("Sign up with")])]),s("div",{staticClass:"text-center"},[s("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-5"},[s("div",{staticClass:"text-center text-muted mb-4 d-none"},[s("small",[e._v("Or sign up with credentials")])]),s("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[s("base-input",{ref:"new_password",staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"New Password",type:"password",name:"New Password",vid:"new_password",rules:"required|min:6|max:35",required:""},model:{value:e.model.newpass,callback:function(t){e.$set(e.model,"newpass",t)},expression:"model.newpass"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Confirm Password",type:"password",name:"Confirm Password",rules:"required|confirmed:new_password",required:""},model:{value:e.model.confirmpass,callback:function(t){e.$set(e.model,"confirmpass",t)},expression:"model.confirmpass"}}),s("password-meter",{attrs:{password:e.model.newpass},on:{score:e.onScore}}),s("div",{staticClass:"text-muted font-italic"},[s("small",[e._v("password strength: "),s("span",{staticClass:"text-success font-weight-700"},[e._v(e._s(e.model.strength))])])]),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Save")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)},r=[],n=(s("96cf"),s("3b8d")),i=s("0127"),o=s.n(i),l={components:{passwordMeter:o.a},name:"register",data:function(){return{model:{code:this.$route.query.code,account:this.$route.query.account,newpass:"",confirmpass:"",strength:null,agree:!1}}},methods:{onSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$service.submit("/partner/pub/set/pass",{account:this.model.account,code:this.model.code,newpass:this.model.newpass,confirmpass:this.model.confirmpass,agree:this.model.agree}),setTimeout((function(e){window.location.href="/partner/app/"}),100);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onScore:function(e){this.model.strength=e.strength}}},c=l,u=s("2877"),d=Object(u["a"])(c,a,r,!1,null,null,null);t["default"]=d.exports},"4a63":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.viewResetForm?s("b-container",{staticClass:"x-position-absolute"},[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[s("div",{staticClass:"text-muted text-center mt-2 mb-4"},[s("small",[e._v("Sign up with")])]),s("div",{staticClass:"text-center"},[s("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[s("div",{staticClass:"text-muted mb-4"},[s("h2",[e._v(" Forgot your password? ")]),s("small",[e._v(" No worry, we will send password reset link on your registered email.")])]),s("div",{staticClass:"text-center text-muted mb-4 d-none"},[s("small",[e._v("Or sign up with credentials")])]),s("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Email",name:"Email",rules:{required:!0,email:!0},required:""},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Send Reset Link")])],1)],1)]}}],null,!1,4254930807)})],1)],1)],1)],1),e.viewMailSent?s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 text-center "},[s("h2",[e._v(" Email sent … ")]),s("small",[e._v(" Please check your email to reset your password.")])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-4"},[s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[e._v("If "+e._s(e.model.email)+" is not your email address, please go back and enter the correct one.")])]),s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[e._v("If you haven't received our email in 15 minutes, please check your spam folder.")])])])],1)],1)],1):e._e()],1):e._e()],1)},r=[],n=(s("96cf"),s("3b8d")),i={name:"register",data:function(){return{model:{name:"",email:"",password:"",agree:!1},view:{screen:null}}},computed:{viewMailSent:function(e){return"MAILSENT"==this.view.screen},viewResetForm:function(e){return!this.view.screen}},methods:{onSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$service.submit("/partner/pub/forgot/pass",{email:this.model.email});case 3:t=e.sent,console.log("resp",t),this.view.MAILSENT="MAILSENT",e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("error",e.t0.response.data),this.$refs.signupContact.setErrors(e.t0.response.data.veeErrors);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}},o=i,l=s("2877"),c=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=c.exports},5913:function(e,t,s){},6525:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{staticClass:"x-position-absolute"},[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[s("div",{staticClass:"text-muted text-center mt-2 mb-4"},[s("small",[e._v("Sign up with")])]),s("div",{staticClass:"text-center"},[s("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-5"},[s("div",{staticClass:"text-center text-muted mb-4 d-none"},[s("small",[e._v("Or sign up with credentials")])]),s("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[s("base-input",{ref:"new_password",staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"New Password",type:"password",name:"New Password",vid:"new_password",rules:"required|min:6|max:35",required:""},model:{value:e.model.newpass,callback:function(t){e.$set(e.model,"newpass",t)},expression:"model.newpass"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Confirm Password",type:"password",name:"Confirm Password",rules:"required|confirmed:new_password",required:""},model:{value:e.model.confirmpass,callback:function(t){e.$set(e.model,"confirmpass",t)},expression:"model.confirmpass"}}),s("password-meter",{attrs:{password:e.model.newpass},on:{score:e.onScore}}),s("div",{staticClass:"text-muted font-italic"},[s("small",[e._v("password strength: "),s("span",{staticClass:"text-success font-weight-700"},[e._v(e._s(e.model.strength))])])]),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Save")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)},r=[],n=(s("96cf"),s("3b8d")),i=s("0127"),o=s.n(i),l={components:{passwordMeter:o.a},name:"register",data:function(){return{model:{code:this.$route.query.code,account:this.$route.query.account,newpass:"",confirmpass:"",strength:null,agree:!1}}},methods:{onSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$service.submit("/partner/pub/set/pass",{account:this.model.account,code:this.model.code,newpass:this.model.newpass,confirmpass:this.model.confirmpass,agree:this.model.agree}),setTimeout((function(e){window.location.href="/partner/app/"}),100);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onScore:function(e){this.model.strength=e.strength}}},c=l,u=s("2877"),d=Object(u["a"])(c,a,r,!1,null,null,null);t["default"]=d.exports},7394:function(e,t,s){"use strict";s("abaf")},"7e9e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{staticClass:"x-position-absolute"},[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[s("h2",[e._v(" Get started free ")]),s("small",[e._v(" No credit card required")])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[s("div",{staticClass:"text-muted mb-4"},[s("h2",[e._v(" Sign in ")]),s("small",[e._v(" Use your registered details ")])]),s("div",{staticClass:"d-none"},[s("div",{staticClass:"text-muted text-center mt-2 mb-3"},[s("small",[e._v("Sign in with")])]),s("div",{staticClass:"btn-wrapper text-center"},[s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:e.$config.CDN_URL+"/argon/img/icons/common/github.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:e.$config.CDN_URL+"/argon/img//icons/common/google.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),s("div",{staticClass:"text-center text-muted mb-4 d-none"},[s("small",[e._v("Or sign in with credentials")])]),s("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[s("base-input",{staticClass:"mb-3",attrs:{alternative:"",feedback:"",question:"",vid:"login.email",name:"Email",label:"Email",rules:{required:!0,email:!0}},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",feedback:"",question:"",vid:"login.password",name:"Password",label:"Password",rules:{required:!0,min:6},type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}}),s("b-form-checkbox",{staticClass:"d-none",model:{value:e.model.rememberMe,callback:function(t){e.$set(e.model,"rememberMe",t)},expression:"model.rememberMe"}},[e._v("Remember me")]),s("div",{staticClass:"text-center"},[s("base-button",{staticClass:"my-4",attrs:{type:"primary","native-type":"submit"}},[e._v("Sign in")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)},r=[],n=(s("96cf"),s("3b8d")),i={data:function(){return{model:{email:"",password:"",rememberMe:!1}}},methods:{onSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$service.submit("/partner/pub/login",{email:this.model.email,password:this.model.password,newpass:this.model.password},{ref:this.$refs.formValidator,toast:!1});case 3:window.location.href="/partner/app/",e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()}},o=i,l=s("2877"),c=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=c.exports},"896a7":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.viewResetForm?s("b-container",{staticClass:"x-position-absolute"},[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"bg-transparent pb-5 d-none"},[s("div",{staticClass:"text-muted text-center mt-2 mb-4"},[s("small",[e._v("Sign up with")])]),s("div",{staticClass:"text-center"},[s("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[s("div",{staticClass:"text-muted mb-4"},[s("h2",[e._v(" Forgot your password? ")]),s("small",[e._v(" No worry, we will send password reset link on your registered email.")])]),s("div",{staticClass:"text-center text-muted mb-4 d-none"},[s("small",[e._v("Or sign up with credentials")])]),s("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Email",name:"Email",rules:{required:!0,email:!0},required:""},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Send Reset Link")])],1)],1)]}}],null,!1,4254930807)})],1)],1)],1)],1),e.viewMailSent?s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 text-center "},[s("h2",[e._v(" Email sent … ")]),s("small",[e._v(" Please check your email to reset your password.")])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-4"},[s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[e._v("If "+e._s(e.model.email)+" is not your email address, please go back and enter the correct one.")])]),s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[e._v("If you haven't received our email in 15 minutes, please check your spam folder.")])])])],1)],1)],1):e._e()],1):e._e()],1)},r=[],n=(s("96cf"),s("3b8d")),i={name:"register",data:function(){return{model:{name:"",email:"",password:"",agree:!1},view:{screen:null}}},computed:{viewMailSent:function(e){return"MAILSENT"==this.view.screen},viewResetForm:function(e){return!this.view.screen}},methods:{onSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$service.submit("/partner/pub/forgot/pass",{email:this.model.email});case 3:t=e.sent,console.log("resp",t),this.view.MAILSENT="MAILSENT",e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("error",e.t0.response.data),this.$refs.signupContact.setErrors(e.t0.response.data.veeErrors);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}},o=i,l=s("2877"),c=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=c.exports},abaf:function(e,t,s){},cd05:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{staticClass:"x-position-absolute"},[e.viewSignupForm?s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0 ",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 d-none"},[s("h2",[e._v(" Get started free ")]),s("small",[e._v(" No credit card required")])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-2"},[s("div",{staticClass:"text-muted mb-4"},[s("h2",[e._v(" Get started free ")]),s("small",[e._v(" No credit card required")])]),s("div",{staticClass:"d-none"},[s("div",{staticClass:"text-muted text-center mt-2 mb-4"},[s("small",[e._v("Sign up with")])]),s("div",{staticClass:"text-center"},[s("a",{staticClass:"btn btn-neutral btn-icon mr-4",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/github.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Github")])]),s("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[s("span",{staticClass:"btn-inner--icon"},[s("img",{attrs:{src:"/argon/img//icons/common/google.svg"}})]),s("span",{staticClass:"btn-inner--text"},[e._v("Google")])])])]),s("div",{staticClass:"text-center text-muted mb-4 d-none"},[s("small",[e._v("Or sign up with credentials")])]),s("validation-observer",{ref:"signupContact",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("b-form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",label:"Name",name:e.$t("fields.name"),vid:"signupContact.name",rules:{required:!0},required:""},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.email"),vid:"signupContact.email",rules:"required|emailz",required:"",valid:!0},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.phone"),vid:"signupContact.phone",rules:"required|phone",required:"",valid:!0},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}}),s("base-input",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.company"),vid:"signupContact.company",rules:{required:!0},required:""},model:{value:e.model.company,callback:function(t){e.$set(e.model,"company",t)},expression:"model.company"}}),s("base-select",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.role"),vid:"signupContact.role",rules:{required:!0},required:""},model:{value:e.model.role,callback:function(t){e.$set(e.model,"role",t)},expression:"model.role"}},[s("option",{attrs:{value:"agency_partner_developer"}},[e._v("Agency / Partner Developer")]),s("option",{attrs:{value:"professional_developer"}},[e._v("Professional Developer")]),s("option",{attrs:{value:"technology_business_manager"}},[e._v("Technology / Business Manager")]),s("option",{attrs:{value:"other"}},[e._v("Other")])]),s("base-select",{staticClass:"mb-3",attrs:{alternative:"",question:"",feedback:"",name:e.$t("fields.country"),vid:"signupContact.country",rules:{required:!0},required:"",options:"data:countries"},model:{value:e.model.country,callback:function(t){e.$set(e.model,"country",t)},expression:"model.country"}}),s("h4",[e._v("Product Interested In")]),e._l(e.products,(function(t,a){return s("div",[s("base-checkbox",{model:{value:e.products[a].checked,callback:function(t){e.$set(e.products[a],"checked",t)},expression:"products[key].checked"}},[s("i",{class:t.icon}),e._v("\n                    "+e._s(t.label)+"\n                  ")])],1)})),s("b-row",{staticClass:" my-4"},[s("b-col",{attrs:{cols:"12"}},[s("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Privacy",Policy:""}},[s("b-form-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[s("span",{staticClass:"text-muted"},[e._v("I agree with the "),s("a",{attrs:{target:"_blank",href:"https://www.mehery.com/privacy-policy/#page-content"}},[e._v("Privacy Policy")])])])],1)],1)],1),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("Create account")])],1)],2)]}}],null,!1,2414694879)})],1)],1)],1)],1):e._e(),e.viewMailSent?s("b-row",{staticClass:"justify-content-center"},[s("b-col",{attrs:{lg:"6",md:"8"}},[s("b-card",{staticClass:"bg-secondary border-0",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"px-lg-5 bg-transparent pb-2 text-center "},[s("h2",[e._v(" Almost there … ")]),s("small",[e._v(" Please check your email to confirm your account.")])]),s("b-card-body",{staticClass:"px-lg-5 py-lg-4"},[s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[e._v("If "+e._s(e.model.email)+" is not your email address, please go back and enter the correct one.")])]),s("div",{staticClass:"text-center text-muted mb-4"},[s("small",[e._v("If you haven't received our email in 15 minutes, please check your spam folder.")])])])],1)],1)],1):e._e()],1)],1)},r=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),i=(s("96cf"),s("3b8d")),o=(s("15f5"),s("78b3"));function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){Object(n["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u={components:{BaseCheckbox:o["a"]},name:"register",data:function(){return{model:{name:"",email:"",phone:"",company:"",role:"",password:"",country:"",agree:!1},products:[{label:"Web Chat",value:"web_chat",icon:"fas fa-globe-americas",checked:!1},{label:"WhatsApp Chat",value:"whatsapp",icon:"fab fa-whatsapp",checked:!1},{label:"Facebook Chat",value:"facebook",icon:"fab fa-facebook",checked:!1},{label:"Twitter Chat",value:"twitter",icon:"fab fa-twitter",checked:!1},{label:"Telegram Chat",value:"telegram",icon:"fab fa-telegram",checked:!1},{label:"Instagram Chat",value:"instagram",icon:"fab fa-instagram",checked:!1}],view:{screen:null}}},computed:{viewMailSent:function(){return"MAILSENT"==this.view.screen},viewSignupForm:function(){return!this.view.screen}},methods:{onSubmit:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.products.filter((function(e){return e.checked})),t=t.map((function(e){return e.value})),e.next=5,this.$service.post("/partner/pub/register",c(c({},this.model),{},{product:t}));case 5:s=e.sent,console.log("resp",s),this.view.screen="MAILSENT",e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log("error",e.t0.response.data),this.$refs.signupContact.setErrors(e.t0.response.data.veeErrors);case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}()}},d=u,m=(s("179f"),s("2877")),b=Object(m["a"])(d,a,r,!1,null,null,null);t["default"]=b.exports}}]);