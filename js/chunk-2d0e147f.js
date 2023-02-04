(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e147f"],{"7a87":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(a){var n=a.handleSubmit;return[t("b-card",{staticClass:"bg-greyish"},[t("b-row",{attrs:{slot:"header","align-v":"center"},slot:"header"},[t("b-col",{attrs:{cols:"8"}},[t("h3",{staticClass:"mb-0"},[e._v("Organzation Details")])]),t("b-col",{staticClass:"text-right",attrs:{cols:"4"}},[t("b-button",{staticClass:"btn btn-sm btn-outline-oa-blue",attrs:{to:"/app"}},[e._v("\n              Cancel\n          ")])],1)],1),t("b-row",{staticClass:"styler-height-fix"},[t("b-col",{attrs:{cols:"6"}},[t("base-input",{attrs:{name:"Legal Business Name",alternative:"",question:"",feedback:"",required:""},model:{value:e.company.legalBusinessName,callback:function(t){e.$set(e.company,"legalBusinessName",t)},expression:"company.legalBusinessName"}}),t("base-input",{attrs:{name:"Display Name",alternative:"",question:"",feedback:"",required:""},model:{value:e.company.displayName,callback:function(t){e.$set(e.company,"displayName",t)},expression:"company.displayName"}})],1),t("b-col",{attrs:{cols:"6"}},[t("base-select",{attrs:{name:"Country of Operation",options:"data:countries",alternative:"",question:"",required:""},model:{value:e.company.countryOfOperation,callback:function(t){e.$set(e.company,"countryOfOperation",t)},expression:"company.countryOfOperation"}}),t("base-input",{attrs:{name:"Address",alternative:"",question:"",feedback:"",required:""},model:{value:e.company.address,callback:function(t){e.$set(e.company,"address",t)},expression:"company.address"}})],1),t("b-col",{attrs:{cols:"6"}},[t("base-input",{attrs:{name:"Contact Person Name",alternative:"",question:"",feedback:"",required:""},model:{value:e.company.contactPersonName,callback:function(t){e.$set(e.company,"contactPersonName",t)},expression:"company.contactPersonName"}}),t("base-input",{attrs:{name:"Contact Person Phone",alternative:"",question:"",feedback:"",required:""},model:{value:e.company.contactPhoneNumber,callback:function(t){e.$set(e.company,"contactPhoneNumber",t)},expression:"company.contactPhoneNumber"}}),t("base-input",{attrs:{name:"Contact Person Email",alternative:"",question:"",feedback:"",required:""},model:{value:e.company.contactPersonEmailId,callback:function(t){e.$set(e.company,"contactPersonEmailId",t)},expression:"company.contactPersonEmailId"}})],1),t("b-col",{attrs:{cols:"6"}},[t("base-input",{attrs:{name:"Website",alternative:"",question:"",feedback:"",required:""},model:{value:e.company.websiteUrl,callback:function(t){e.$set(e.company,"websiteUrl",t)},expression:"company.websiteUrl"}}),t("MyUpload",{ref:"myVueDropzone",staticClass:"myVueDropzone",attrs:{autoProcessQueue:"",disablePreviews:"","upload-url":e.$global.MyConst.context+"/panel/api/v1/logo",placeholder:"Upload new Logo"},on:{uploaded:e.uploaded},model:{value:e.company.logoUrl,callback:function(t){e.$set(e.company,"logoUrl",t)},expression:"company.logoUrl"}})],1)],1),t("b-row",{attrs:{slot:"footer","align-v":"center"},slot:"footer"},[t("b-col",{attrs:{cols:"4"}},[t("b-button",{attrs:{href:"https://www.otpalerts.com/docs/guide/quick/business_verification.html",variant:"outline-oa-blue",target:"_blank"}},[e._v("\n              Verify your Business\n          ")])],1),t("b-col",{attrs:{cols:"4"}}),t("b-col",{staticClass:"text-right",attrs:{cols:"4"}},[t("b-button",{attrs:{variant:"oa-blue"},on:{click:function(t){return n(e.saveCompany)}}},[e._v("\n              Save\n          ")])],1)],1)],1)]}}])})],1)},o=[],r=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),s=(a("96cf"),a("3b8d")),c=a("debc");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{company:{legalBusinessName:"",displayName:"",number:"",countryOfOperation:"",address:"",coiFileUrl:"",gstFileUrl:"",panFileUrl:"",contactPersonName:"",contactPhoneNumber:"",contactPersonEmailId:"",companyTimeZone:"",websiteUrl:"",logoUrl:""},loading:!1}},computed:{},mounted:function(){this.$route.params.orgId&&this.loadCompany(this.$route.params.orgId)},methods:{saveCompany:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.post("/panel/api/v1/company",l({},this.company),{ref:this.$refs.formValidator});case 2:e.sent,this.$router.push({name:"Home"});case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadCompany:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.$service.get("/panel/api/v1/companys");case 3:a=e.sent,e.t0=regeneratorRuntime.keys(a.results);case 5:if((e.t1=e.t0()).done){e.next=12;break}if(n=e.t1.value,a.results[n].company.companyId!=t){e.next=10;break}return this.company=l(l({},this.company),a.results[n].company),e.abrupt("break",12);case 10:e.next=5;break;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),uploaded:function(e){console.log("uploaded",e),this.company.logoUrl=e.url}},components:{MyUpload:c["a"]}},p=u,m=a("2877"),b=Object(m["a"])(p,n,o,!1,null,null,null);t["default"]=b.exports}}]);