(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2311aa"],{eeb6:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"x-form"},e._l(e.inputs,(function(n){return t("span",{key:n.key},[n.meta.hidden?e._e():t("span",["OPTIONS"==n.meta.inputType&&(n.meta.optionsSource||n.meta.options.length>5)?t("BaseVSelect",{attrs:{size:e.size,clearable:!1,name:n.meta.title||n.meta.key,optionKey:n.meta.optionsKey,optionlabel:n.meta.optionsLabel,options:n.meta.optionsSource||n.meta.options,value:n.meta.defaultValue,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew,placeholder:"Select"},on:{change:function(t){return e.onChange(n.meta,n.config)}},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}}):"OPTIONS"==n.meta.inputType?t("ButtonRadioGroup",{attrs:{name:n.meta.title||n.meta.key,size:"sm",options:n.meta.options,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew},on:{change:function(t){return e.onChange(n.meta,n.config)}},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}}):t("base-input",{staticClass:"mb-0",attrs:{size:e.size,label:n.meta.title||n.meta.key,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew,value:n.meta.defaultValue,required:!n.meta.optional},on:{change:function(t){return e.onChange(n.meta,n.config)}},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}})],1)])})),0)},o=[],i={name:"x-simple-form",components:{},props:{inputs:{type:Array,description:"pass list of input configs",default:function(){return[{}]}},isnew:{type:Boolean,default:!1},size:{}},data:function(){return{empty:function(e){return void 0==e||null===e||""===e}}},mounted:function(e){},methods:{onChange:function(e,n){this.$emit("change",{meta:e,config:n})},getOutput:function(){return inputs}}},l=i,u=t("2877"),s=Object(u["a"])(l,a,o,!1,null,null,null);n["default"]=s.exports}}]);