(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76deaa3c"],{a374:function(e,t,n){"use strict";n("d868")},d868:function(e,t,n){},eeb6:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"x-form"},e._l(e.grouped,(function(n){return t("span",{key:n.superKey,staticClass:"x-form-group"},e._l(n.inputs,(function(n){return t("span",{key:n.key},[n.meta.hidden?e._e():t("span",["OPTIONS"==n.meta.inputType&&(n.meta.optionsSource||n.meta.options.length>5)?t("BaseVSelect",{attrs:{size:e.size,name:n.meta.title||n.meta.key,optionKey:n.meta.optionsKey,optionlabel:n.meta.optionsLabel,options:n.meta.optionsSource||n.meta.options,value:n.meta.defaultValue,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly,disabled:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly,placeholder:n.meta.example||"Select",searchable:"",clearable:!!n.meta.optional,filterable:""},on:{change:function(t){return e.onChange(n.meta,n.config)}},scopedSlots:e._u([{key:"help",fn:function(){return[n.meta.desc?t("small",{staticClass:"text-xs"},[e._v("  \n                         "),t("MyIcon",{attrs:{type:"infoType",value:"info"}}),e._v(" "+e._s(n.meta.desc)+"\n                  ")],1):e._e()]},proxy:!0}],null,!0),model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}}):"OPTIONS"==n.meta.inputType?t("ButtonRadioGroup",{attrs:{name:n.meta.title||n.meta.key,value:n.meta.defaultValue,size:"sm",options:n.meta.options,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly},on:{change:function(t){return e.onChange(n.meta,n.config)}},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}}):"MESSAGE"==n.meta.inputType?t("b-alert",{attrs:{show:"",variant:n.meta.messageType.toLowerCase()}},[t("span",[t("MyIcon",{attrs:{type:"infoType",value:n.meta.messageType}}),e._v(" "+e._s(n.meta.title))],1),t("br"),t("small",{staticStyle:{"white-space":"pre-line"}},[e._v(" "+e._s(n.meta.desc))])]):"JSON"==n.meta.inputType?t("div",{staticClass:"form-group form-group-input"},[t("label",{staticClass:"form-control-label text-sm"},[e._v("\n                    "+e._s(n.meta.title||n.meta.key)+"\n                ")]),t("v-jsoneditor",{attrs:{options:{mode:"code",mainMenuBar:!1,onChange:function(){return e.onChange(n.meta,n.config)}},plus:!1,height:e.settings.json_height||"400px"},on:{error:e.onJsonError},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}})],1):"TEXTAREA"==n.meta.inputType?t("base-text-area",{staticClass:"mb-0",attrs:{size:e.size,label:n.meta.title||n.meta.key,prelabel:e.prelabel,variant:e.variant,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly,value:n.meta.defaultValue,required:!n.meta.optional,placeholder:n.meta.example},on:{change:function(t){return e.onChange(n.meta,n.config)}},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}}):t("base-input",{staticClass:"mb-0",attrs:{size:e.size,label:n.meta.title||n.meta.key,prelabel:e.prelabel,variant:e.variant,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly,value:n.meta.defaultValue,required:!n.meta.optional,placeholder:n.meta.example},on:{change:function(t){return e.onChange(n.meta,n.config)}},scopedSlots:e._u([{key:"help",fn:function(){return[n.meta.desc?t("small",{staticClass:"text-xs"},[e._v("  \n                         "),t("MyIcon",{attrs:{type:"infoType",value:"info"}}),e._v(" "+e._s(n.meta.desc)+"\n                  ")],1):e._e()]},proxy:!0}],null,!0),model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}})],1)])})),0)})),0)},o=[],l=n("bcb2"),i=n.n(l),s={name:"x-simple-form",components:{VJsoneditor:i.a},props:{inputs:{type:Array,description:"pass list of input configs",default:function(){return[{}]}},settings:{type:Object,default:function(){return{}}},isnew:{type:Boolean,default:!1},size:{},readonly:{type:Boolean,default:!1},prelabel:{type:Boolean,default:!1},variant:{type:String,default:"outline-success"}},data:function(){return{empty:function(e){return void 0==e||null===e||""===e}}},computed:{grouped:function(){var e={},t=[];return this.inputs.reduce((function(n,a){return e[a.meta.superKey]||(e[a.meta.superKey]={superKey:a.meta.superKey,inputs:[]},t.push(e[a.meta.superKey])),e[a.meta.superKey].inputs.push(a),n}),t)}},mounted:function(e){},methods:{onChange:function(e,t){this.$emit("change",{meta:e,config:t})},getOutput:function(){return inputs},onJsonError:function(e){console.log("onJsonError",e)}}},u=s,r=(n("a374"),n("2877")),c=Object(r["a"])(u,a,o,!1,null,null,null);t["default"]=c.exports}}]);