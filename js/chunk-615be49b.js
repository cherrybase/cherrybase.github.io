(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-615be49b"],{"0b43":function(e,t,a){"use strict";a("f3c0")},"853d":function(e,t,a){"use strict";a("96cf");var r=a("3b8d");t["a"]={data:function(){return{basic:{isSelectDefaultCompanyEnabled:!1,isLoading:!1}}},computed:{companies:function(){return this.$store.getters.StateRest.PanelApiV1Companys},iCompany:function(){if(!this.$route.params.orgId)return null;for(var e in this.companies){var t=this.companies[e];if(t.company.companyId==this.$route.params.orgId)return t.company}}},watch:{"$route.params.orgId":function(){this.basic.isSelectDefaultCompanyEnabled&&this.selectDefaultCompany()}},methods:{loadBasic:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.basic.isLoding=!0,e.prev=1,e.next=4,this.$service.getX("/panel/api/v1/companys");case 4:return e.abrupt("return",e.sent);case 5:return e.prev=5,this.basic.isLoding=!1,e.finish(5);case 8:case"end":return e.stop()}}),e,this,[[1,,5,8]])})));function t(){return e.apply(this,arguments)}return t}(),selectDefaultCompany:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadBasic();case 2:0==this.$route.params.orgId&&this.$router.push({params:{orgId:this.companies[0].companyId}}),this.basic.isSelectDefaultCompanyEnabled=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}},dc9d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(a){var r=a.handleSubmit;return[t("b-card",{staticClass:"bg-greyish"},[e.iCompany?t("b-row",{attrs:{slot:"header","align-v":"center"},slot:"header"},[t("b-col",{attrs:{cols:"4"}},[t("base-v-select",{attrs:{size:"sm",disabled:"",options:e.companies.map((function(e){return{id:e.companyId,label:e.company.displayName}})),alternative:"",question:""},model:{value:e.iCompany.companyId,callback:function(t){e.$set(e.iCompany,"companyId",t)},expression:"iCompany.companyId"}})],1),t("b-col",{staticClass:"text-right",attrs:{cols:"8"}},[t("b-button",{staticClass:"btn btn-sm btn-outline-oa-blue",attrs:{to:"/app/org/0/tmpl"}},[e._v("\n              Cancel\n          ")])],1)],1):e._e(),t("b-row",{staticClass:"styler-height-fix"},[e.companies?t("b-col",{attrs:{cols:"4"}},[t("base-input",{attrs:{name:"Template Code",alternative:"",question:"",feedback:"",required:"",disabled:!e.editable},model:{value:e.template.code,callback:function(t){e.$set(e.template,"code",t)},expression:"template.code"}}),t("base-input",{attrs:{name:"Header Label",alternative:"",question:"",feedback:"",required:"",disabled:!e.editable},model:{value:e.template.header.label,callback:function(t){e.$set(e.template.header,"label",t)},expression:"template.header.label"}})],1):e._e(),t("b-col",{attrs:{cols:"4"}},[t("base-v-select",{attrs:{name:"Message Type",options:[{code:"OTP"},{code:"TRANSACTIONAL",label:"Transactional"}],alternative:"",question:"",required:"",disabled:!e.editable},model:{value:e.template.type,callback:function(t){e.$set(e.template,"type",t)},expression:"template.type"}}),t("base-v-select",{attrs:{name:"Header Variant",options:"data:color_variant",alternative:"",question:"",required:"",disabled:!e.editable},model:{value:e.template.header.variant,callback:function(t){e.$set(e.template.header,"variant",t)},expression:"template.header.variant"}})],1),t("b-col",{attrs:{cols:"4"}},[t("base-v-select",{ref:"category",attrs:{name:"Message Category",disabled:!e.editable,options:"data:hsm/message_categories",alternative:"",question:"",required:""},on:{change:e.loadDefault},model:{value:e.template.category,callback:function(t){e.$set(e.template,"category",t)},expression:"template.category"}})],1),t("b-col",{attrs:{cols:"8"}},[t("base-input",{attrs:{name:"Title",alternative:"",question:"",feedback:"",required:"",disabled:!e.editable,rules:"required|max:30"},model:{value:e.template.title,callback:function(t){e.$set(e.template,"title",t)},expression:"template.title"}}),t("base-text-area",{staticClass:"template-body",attrs:{name:"Body",alternative:"",question:"",feedback:"",required:"",disabled:!e.editable,placeholder:"Type here",rules:"required|max:360",rows:6,textLimit:360,helpMessage:e.bodyTextLimit},model:{value:e.template.body,callback:function(t){e.$set(e.template,"body",t)},expression:"template.body"}}),t("base-input",{attrs:{name:"Footer",disabled:!e.editable,alternative:"",question:"",feedback:"",rules:"max:20"},model:{value:e.template.footer,callback:function(t){e.$set(e.template,"footer",t)},expression:"template.footer"}})],1)],1),t("b-row",{attrs:{slot:"footer","align-v":"center"},slot:"footer"},[t("b-col",{attrs:{cols:"8"}}),t("b-col",{staticClass:"text-right",attrs:{cols:"4"}},[t("b-button",{attrs:{variant:"oa-blue",disabled:!e.editable},on:{click:function(t){return r(e.saveTemplate)}}},[e._v("\n              Save\n          ")])],1)],1)],1)]}}])})],1)},n=[],i=(a("8e6e"),a("456d"),a("bd86")),s=(a("ac6a"),a("96cf"),a("3b8d")),o=a("853d");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={mixins:[o["a"]],data:function(){return{template:{templateId:"",companyId:"",code:"",type:"OTP",category:"",header:{label:"",variant:"MAJOR"},title:"",body:"",footer:"",cta:[]},isTemplateLoding:!1}},computed:{editable:function(){return!this.basic.isLoding&&!this.isTemplateLoding&&!this.template.templateId},bodyTextLimit:function(){return this.template.body.length>180?"SMS with length greater than 180 characters will usually split\n            into multiple parts in case of fallback":""}},mounted:function(){this.load()},methods:{load:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadBasic();case 2:if(this.template.companyId=this.iCompany.companyId,!this.$route.params.templateId){e.next=19;break}return this.isTemplateLoding=!0,e.next=7,this.$service.get("/panel/api/v1/hsm/tmpl",{companyId:this.iCompany.companyId});case 7:t=e.sent,e.t0=regeneratorRuntime.keys(t.results);case 9:if((e.t1=e.t0()).done){e.next=16;break}if(a=e.t1.value,t.results[a].templateId!=this.$route.params.templateId){e.next=14;break}return this.template=t.results[a],e.abrupt("break",16);case 14:e.next=9;break;case 16:this.isTemplateLoding=!1,e.next=20;break;case 19:this.loadDefault();case 20:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadDefault:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=null===(t=this.$refs.category)||void 0===t?void 0:t.selected(),r&&null!==r&&void 0!==r&&r.item&&null!==(a=r.item)&&void 0!==a&&a.header&&(this.template.header.label=null===(n=r.item.header)||void 0===n?void 0:n.label,this.template.header.variant=(null===(i=r.item.header)||void 0===i?void 0:i.variant)||this.template.header.variant);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),saveTemplate:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.post("/panel/api/v1/hsm/tmpl",c({},this.template),{ref:this.$refs.formValidator});case 2:e.sent,this.$router.push({name:"Templates"});case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},components:{}},p=u,d=(a("0b43"),a("2877")),m=Object(d["a"])(p,r,n,!1,null,null,null);t["default"]=m.exports},f3c0:function(e,t,a){}}]);