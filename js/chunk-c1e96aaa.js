(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1e96aaa"],{"3b24":function(a,t,e){"use strict";e.r(t);var s,i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",[e("i",{class:[a.myTypeClass[0],a.valueClass[0],a.myColorClass,a.statusClass[0]]}),a._t("default")],2)},f=[],n=(e("f559"),e("bd86")),r=(e("28a5"),s={status:{_:["fa fa-circle"],approved:["text-success"],rejected:["text-danger"],submitted:["text-warning"],true:["text-success"],false:["text-danger"]},chatmode:{_:[""],$:["fa fa-th-large"],bot:["fa fa-robot"],agent:["fa fa-user-secret"],webhook:["openwebicons-webhooks"]},senderType:{_:[""],$:["fa fa-th-large"],bot:["fa fa-robot"],system:["fa fa-robot"],agent:["fa fa-user-secret"],api:["openwebicons-webhooks"],admin:[]},messageType:{_:[""],$:["fa fa-question-circle"],primary:["fa fa-dot-circle"],secondary:["fa fa-minus-circle"],success:["fa fa-check-circle"],info:["fa fa-info-circle"],warning:["fa fa-exclamation-circle"],danger:["fa fa-times-circle"],dark:["fa fa-stop-circle"]}},Object(n["a"])(s,"messageType",{_:[""],$:["fa fa-envelope"],image:["fa fa-image"],video:["fa fa-youtube"]}),Object(n["a"])(s,"fileType",Object(n["a"])({_:[""],$:["fa fa-file-alt"],"application/pdf":["fa fa-file-pdf","text-danger"],"application/word":["fa fa-file-word","text-blue"],"application/excel":["fa fa-file-excel"],"application/csv":["fa fa-file-csv"],image:["fa fa-file-image"],"image/png":["fa fa-file-image"],video:["fa fa-file-video"]},"$",(function(a,t,e){if("string"==typeof e){var s=e.split("?")[0].split("."),i=s[s.length-1];if(!i)return["fa fa-link"];switch(i){case"xls":case"xlsx":return this["application/excel"];case"docx":case"doc":return this["application/word"];case"pdf":return this["application/pdf"]}}return["fa fa-file-alt"]}))),s),l={props:{type:{default:"status"},variant:{},variantPrefix:{default:"text-"},status:{},meta:{},typeClass:{default:""},value:{},icon:{default:"fa fa-circle"},noColor:{type:Boolean,default:!1}},computed:{myType:function(){return r[this.type]||r.status||[]},myTypeClass:function(){return this.typeClass||this.myType._||[""]},valueClass:function(){return this.myType[(this.value||"").toLowerCase()]||("function"==typeof this.myType["$"]?this.myType["$"](this.value,this.status,this.meta):this.myType["$"])||""},myColorClass:function(){return this.variant?0==this.variant.indexOf("text-")||this.variant.startsWith("bg-")?this.variant:this.variantPrefix+this.variant:(this.noColor?null:this.valueClass[1])||""},statusClass:function(){return(this.status?r.status[this.status.toLowerCase()]:"")||[]}}},c=l,o=e("2877"),u=Object(o["a"])(c,i,f,!1,null,null,null);t["default"]=u.exports},f559:function(a,t,e){"use strict";var s=e("5ca1"),i=e("9def"),f=e("d2c8"),n="startsWith",r=""[n];s(s.P+s.F*e("5147")(n),"String",{startsWith:function(a){var t=f(this,a,n),e=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),s=String(a);return r?r.call(t,s,e):t.slice(e,e+s.length)===s}})}}]);