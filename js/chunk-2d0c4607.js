(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4607"],{"3b24":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("span",[t("i",{class:[a.myTypeClass[0],a.valueClass[0],a.noColor?"":a.valueClass[1],a.statusClass[0]]}),a._t("default")],2)},i=[],f=t("bd86"),c=(t("28a5"),{status:{_:["fa fa-circle"],approved:["text-success"],rejected:["text-danger"],submitted:["text-warning"],true:["text-success"],false:["text-danger"]},chatmode:{_:[""],$:["fa fa-th-large"],bot:["fa fa-robot"],agent:["fa fa-user-secret"],webhook:["openwebicons-webhooks"]},senderType:{_:[""],$:["fa fa-th-large"],bot:["fa fa-robot"],system:["fa fa-robot"],agent:["fa fa-user-secret"],api:["openwebicons-webhooks"],admin:[]},messageType:{_:[""],$:["fa fa-question-circle"],primary:["fa fa-dot-circle"],secondary:["fa fa-minus-circle"],success:["fa fa-check-circle"],info:["fa fa-info-circle"],warning:["fa fa-exclamation-circle"],danger:["fa fa-times-circle"],dark:["fa fa-stop-circle"]},fileType:Object(f["a"])({_:[""],$:["fa fa-file-alt"],"application/pdf":["fa fa-file-pdf","text-danger"],"application/word":["fa fa-file-word","text-blue"],"application/excel":["fa fa-file-excel"],"application/csv":["fa fa-file-csv"],"image/png":["fa fa-file-image"]},"$",(function(a,e,t){if("string"==typeof t){var s=t.split("?")[0].split("."),i=s[s.length-1];if(!i)return["fa fa-link"];switch(i){case"xls":case"xlsx":return this["application/excel"];case"docx":case"doc":return this["application/word"];case"pdf":return this["application/pdf"]}}return["fa fa-file-alt"]}))}),l={props:{type:{default:"status"},typeClass:{default:""},value:{},icon:{default:"fa fa-circle"},noColor:{type:Boolean,default:!1},status:{},meta:{}},computed:{myType:function(){return c[this.type]||c.status||[]},myTypeClass:function(){return this.typeClass||this.myType._||[]},valueClass:function(){return this.myType[(this.value||"").toLowerCase()]||("function"==typeof this.myType["$"]?this.myType["$"](this.value,this.status,this.meta):this.myType["$"])||""},statusClass:function(){return(this.status?c.status[this.status.toLowerCase()]:"")||[]}}},n=l,o=t("2877"),r=Object(o["a"])(n,s,i,!1,null,null,null);e["default"]=r.exports}}]);