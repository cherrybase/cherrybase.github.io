(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4be1b96d","chunk-224566de"],{"0c35":function(e,t,a){},"3b24":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("span",[t("span",{class:[e.myTypeClass[0],e.valueClass[0],e.myColorClass,e.statusClass[0]],attrs:{id:"".concat(e.myTypeClass[0]," = ").concat(e.valueClass[0]," = ").concat(e.myColorClass," = ").concat(e.statusClass[0])}},[e.noType?e._t("notype",(function(){return[e._v("\n        "+e._s(e._f("display")(e.valued,e.options))+"\n    ")]})):e._e()],2),e._t("default")],2)},i=[],f=(a("f559"),a("bd86")),c=(a("28a5"),{status:{_:["fa fa-circle"],approved:["text-success"],rejected:["text-danger"],submitted:["text-warning"],true:["text-success"],false:["text-danger"]},waba:{_:[""],$:["fa fa-circle"],approved:["fa fa-circle","text-success"],active:["fa fa-circle","text-success"],live:["fa fa-circle","text-success"],rejected:["fa fa-circle","text-danger"],submitted:["fa fa-circle","text-warning"],true:["fa fa-circle","text-success"],false:["fa fa-circle","text-danger"],verified:["fa fa-check-circle","text-success"],ready:["fa fa-check-circle","text-success"],running:["fa fa-dot-circle","text-success"],certificate_declined:["fas fa-certificate","text-warning"],pending_deletion:["fa fa-minus-circle","text-yellow"],pending:["fa fa-circle","text-yellow"]},switch:{_:["my-switch"],$:["no-type-status","text-success border-success"],on:["fa fa-toggle-on","text-success"],true:["fa fa-toggle-on","text-success"],off:["fa fa-toggle-on fa-rotate-180","text-danger"],undefined:["fa fa-toggle-on fa-rotate-180","text-danger"],false:["fa fa-toggle-on fa-rotate-180","text-danger"],null:["fa fa-toggle-off"],none:["fa fa-toggle-on fa-rotate-180","text-danger"]},chatmode:{_:[""],$:["fa fa-th-large"],bot:["fa fa-robot"],agent:["fa fa-user-secret"],webhook:["openwebicons-webhooks"]},channel:{_:[""],twitter:["fa fa-twitter"],facebook:["fa fa-facebook"],telegram:["fa fa-telegram"],whatsapp:["fa fa-whatsapp"],instagram:["fa fa-instagram"],email:["fas fa-envelope"],website:["fa fa-chrome"],$:function(e,t,a){if(e=e||"",this[e])return this[e];var s=e.split(":")[0];switch(s){case"tw":return this["twitter"];case"fb":return this["facebook"];case"tg":return this["telegram"];case"wa360":case"wa":return this["whatsapp"];case"ig":return this["instagram"];case"mailto":return this["email"];default:return this["website"]}}},senderType:{_:[""],$:["fa fa-th-large"],bot:["fa fa-robot"],system:["fa fa-robot"],agent:["fa fa-user-secret"],api:["openwebicons-webhooks"],admin:[]},infoType:{_:[""],$:["fa fa-question-circle"],primary:["fa fa-dot-circle"],secondary:["fa fa-minus-circle"],success:["fa fa-check-circle"],info:["fa fa-info-circle"],warning:["fa fa-exclamation-circle"],danger:["fa fa-times-circle"],dark:["fa fa-stop-circle"]},messageType:{_:[""],$:["fa fa-envelope"],image:["fa fa-image"],video:["fa fa-youtube"]},fileType:Object(f["a"])({_:[""],$:["fa fa-file-alt"],"application/pdf":["fa fa-file-pdf","text-danger"],"application/word":["fa fa-file-word","text-blue"],"application/excel":["fa fa-file-excel"],"application/csv":["fa fa-file-csv"],image:["fa fa-file-image"],"image/png":["fa fa-file-image"],video:["fa fa-file-video","text-info"]},"$",(function(e,t,a){if("string"==typeof a){var s=a.split("?")[0].split("."),i=s[s.length-1];if(!i)return["fa fa-link"];switch(i){case"xls":case"xlsx":return this["application/excel"];case"docx":case"doc":return this["application/word"];case"pdf":return this["application/pdf"];case"mp4":return this["video"]}}return["fa fa-file-alt"]}))}),n={props:{type:{default:"status"},variant:{},variantPrefix:{default:"text-"},status:{},meta:{},typeClass:{default:""},value:{},icon:{default:"fa fa-circle"},noColor:{type:Boolean,default:!1},options:{},showNoType:{type:Boolean,default:!1}},computed:{myType:function(){return c[this.type]||c.status||[]},myTypeClass:function(){return this.typeClass||this.myType._||[""]},valued:function(){return"".concat(this.value).toLowerCase()},noType:function(){return this.showNoType&&this.valued&&!this.myType[this.valued]},valueClass:function(){return this.myType[this.valued]||("function"==typeof this.myType["$"]?this.myType["$"](this.value,this.status,this.meta):this.myType["$"])||""},myColorClass:function(){return this.variant?0==this.variant.indexOf("text-")||this.variant.startsWith("bg-")?this.variant:this.variantPrefix+this.variant:(this.noColor?null:this.valueClass[1])||""},statusClass:function(){return(this.status?c.status[this.status.toLowerCase()]:"")||[]}}},r=n,o=(a("d25c"),a("2877")),l=Object(o["a"])(r,s,i,!1,null,"91ee7f5c",null);t["default"]=l.exports},d25c:function(e,t,a){"use strict";a("0c35")},f559:function(e,t,a){"use strict";var s=a("5ca1"),i=a("9def"),f=a("d2c8"),c="startsWith",n=""[c];s(s.P+s.F*a("5147")(c),"String",{startsWith:function(e){var t=f(this,e,c),a=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),s=String(e);return n?n.call(t,s,a):t.slice(a,a+s.length)===s}})}}]);