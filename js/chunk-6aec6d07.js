(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aec6d07","chunk-2d2311aa"],{e5cf:function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("my-source",{attrs:{options:e.configs},scopedSlots:e._u([{key:"data",fn:function(n){var a=n.options;return[t("x-simple-form",{attrs:{size:"sm",readonly:e.readonly,prelabel:e.prelabel,variant:e.variant,inputs:a.map((function(t){var n=t.item,a=n.ukey||n.key;return{meta:n,config:{key:a,path:n.path,value:a?e.model[a]:e.JsonXPath({path:"$."+n.path,json:e.model})[0]||n.defaultValue||""}}}))},on:{change:e.onChange}})]}}])})},o=[],i=n("eeb6"),s=n("b351"),r={name:"my-modal-form",components:{XSimpleForm:i["default"]},props:{configs:{},model:{type:Object},isnew:{type:Boolean,default:!1},size:{},readonly:{type:Boolean,default:!1},prelabel:{type:Boolean,default:!1},variant:{type:String,default:"outline-success"}},data:function(){return{JsonXPath:s["a"],empty:function(e){return void 0==e||null===e||""===e}}},computed:{},watch:{},mounted:function(e){},methods:{loadConfigs:function(){},onChange:function(e){var t=e.meta,n=e.config;if(console.log("onChange",t.path,t.key),t.path)Object(s["a"])({path:"$."+t.path,json:this.model,resultType:"all",value:n.value});else{var a=t.ukey||t.key;this.model[a]=n.value}console.log("this.model",this.model),this.model.__ob__.dep.notify(),this.$emit("change",this.model),this.$emit("input",this.model)},getOutput:function(){return inputs}}},l=r,c=n("2877"),u=Object(c["a"])(l,a,o,!1,null,null,null);t["a"]=u.exports},ec0d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{},[t("master-view",{ref:"variablesList",attrs:{header:{heading:"Token & Keys Setup",subheading:"Token and Keys to be used for external integrations",icon:"bg-happy-itmeo icon-gradient fa fa-code"},actions:[{name:"ADD_ITEM",label:"Add Variable"}],table:e.table},on:{action:e.onAction},scopedSlots:e._u([{key:"cell(actions)",fn:function(n){return[t("b-button-group",{attrs:{size:"sm"}},[t("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(t){return e.editItem(n.item,n.index,t.target)}}},[t("i",{staticClass:"fas fa-edit pointer"})]),t("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(t){return e.removeItem(n.item,n.index,t.target)}}},[t("i",{staticClass:"fas fa-trash text-danger pointer"})]),t("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.item.disabled?"Connect":"Disconnect",expression:"row.item.disabled ? 'Connect' : 'Disconnect'"}],attrs:{size:"sm",variant:"outline-primary",disabled:n.item.readOnly},on:{click:function(t){return e.disableItem(n.item,n.index,t.target)}}},[t("i",{staticClass:"fas fa-plug",class:{"fa-x":!!n.item.disabled}})])],1)]}},{key:"cell(value)",fn:function(n){return["SWITCH"==n.item.type?t("span",[e._v("\n                  ["+e._s(e._f("display")(n.item.value,e.onOffOptions))+"]\n            ")]):e._e(),"JSON"==n.item.type?t("span",[e._v("\n                  <Object>\n            ")]):t("span",[e._v("\n              "+e._s(n.item.value)+"\n            ")])]}}])}),e.oneItem?t("b-modal",{attrs:{id:e.modelName,title:"Variable Details",size:"md"},on:{hidden:e.cancelItem},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[t("div",{staticClass:"position-relative form-group"},[t("button",{staticClass:"form-control btn btn-primary",attrs:{name:"password",id:"examplePassword",disabled:!e.isChanged},on:{click:e.saveItem}},[e._v("Save")])])]},proxy:!0}],null,!1,2704346586)},[t("base-input",{attrs:{size:"sm",name:"Variable Description",placeholder:"Company Name",rules:"required",required:""},model:{value:e.oneItem.description,callback:function(t){e.$set(e.oneItem,"description",t)},expression:"oneItem.description"}}),t("base-input",{attrs:{size:"sm",name:"Variable Key",placeholder:"company_name",rules:"required",required:""},model:{value:e.oneItem.key,callback:function(t){e.$set(e.oneItem,"key",t)},expression:"oneItem.key"}}),t("base-v-select",{ref:"integration_type",attrs:{size:"sm",disabled:!!e.oneItem.id&&!!e.oneItem.type,clearable:!1,name:"Variable Type",placeholder:"text",options:"@data/config/integration/types"},model:{value:e.oneItem.type,callback:function(t){e.$set(e.oneItem,"type",t)},expression:"oneItem.type"}}),e.oneItem.type?t("my-model-form",{staticClass:"mt-3 d-block",attrs:{size:"sm",disabled:"",configs:"@data/config/integration/type_".concat(e.oneItem.type.toLowerCase()),model:e.oneItem}}):e._e()],1):e._e()],1)},o=[],i=(n("7f7f"),n("96cf"),n("3b8d")),s=n("e5cf"),r=n("bcb2"),l=n.n(r);function c(){return{key:null,value:{},secret:{},id:null,description:null,type:"text",grouping:null}}var u={components:{VJsoneditor:l.a,MyModelForm:s["a"]},data:function(){return{actions:[],table:{fields:[{key:"group",label:"Group"},{key:"key",label:"Key"},{key:"description",label:"Desc"},{key:"actions",label:"Action"}],items:[],perPage:25,small:!0,currentPage:1,rows:0,api:"api/config/tokenkey"},oneItem:c(),modelName:"MODAL_ADD_ITEM",onOffOptions:[{value:!0,label:"ON"},{value:!1,label:"OFF"}]}},computed:{isChanged:function(e){return this.oldHash!==JSON.stringify(this.oneItem)}},created:function(e){},methods:{loadItems:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.variablesList.apply();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.delete(this.table.api,t);case 2:this.loadItems();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in this.oneItem=c(),t)this.oneItem[n]=JSON.parse(JSON.stringify(t[n]));this.oneItem.secret=this.oneItem.secret||{},this.onAction({name:"EDIT_ITEM"});case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),saveItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.post(this.table.api,this.oneItem);case 2:this.oneItem=c(),this.onAction({name:"CANCEL"}),this.loadItems();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),disableItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.disabled=!t.disabled,e.next=3,this.$service.post(this.table.api,t);case 3:this.loadItems();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.oneItem=c(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}},onJsonError:function(e){console.log("onJsonError",e)}}},m=u,p=n("2877"),d=Object(p["a"])(m,a,o,!1,null,null,null);t["default"]=d.exports},eeb6:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"x-form"},e._l(e.inputs,(function(n){return t("span",{key:n.key},[n.meta.hidden?e._e():t("span",["OPTIONS"==n.meta.inputType&&(n.meta.optionsSource||n.meta.options.length>5)?t("BaseVSelect",{attrs:{size:e.size,name:n.meta.title||n.meta.key,optionKey:n.meta.optionsKey,optionlabel:n.meta.optionsLabel,options:n.meta.optionsSource||n.meta.options,value:n.meta.defaultValue,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly,disabled:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly,placeholder:n.meta.example||"Select",searchable:"",clearable:!!n.meta.optional},on:{change:function(t){return e.onChange(n.meta,n.config)}},scopedSlots:e._u([{key:"help",fn:function(){return[n.meta.desc?t("small",{staticClass:"text-xs"},[e._v("  \n                         "),t("MyIcon",{attrs:{type:"infoType",value:"info"}}),e._v(" "+e._s(n.meta.desc)+"\n                  ")],1):e._e()]},proxy:!0}],null,!0),model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}}):"OPTIONS"==n.meta.inputType?t("ButtonRadioGroup",{attrs:{name:n.meta.title||n.meta.key,value:n.meta.defaultValue,size:"sm",options:n.meta.options,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly},on:{change:function(t){return e.onChange(n.meta,n.config)}},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}}):"MESSAGE"==n.meta.inputType?t("b-alert",{attrs:{show:"",variant:n.meta.messageType.toLowerCase()}},[t("span",[t("MyIcon",{attrs:{type:"infoType",value:n.meta.messageType}}),e._v(" "+e._s(n.meta.title))],1),t("br"),t("small",{staticStyle:{"white-space":"pre-line"}},[e._v(" "+e._s(n.meta.desc))])]):"JSON"==n.meta.inputType?t("div",{staticClass:"form-group form-group-input"},[t("label",{staticClass:"form-control-label text-sm"},[e._v("\n                    "+e._s(n.meta.title||n.meta.key)+"\n                ")]),t("v-jsoneditor",{attrs:{options:{mode:"code",mainMenuBar:!1,onChange:function(){return e.onChange(n.meta,n.config)}},plus:!1,height:e.settings.json_height||"400px"},on:{error:e.onJsonError},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}})],1):"TEXTAREA"==n.meta.inputType?t("base-text-area",{staticClass:"mb-0",attrs:{size:e.size,label:n.meta.title||n.meta.key,prelabel:e.prelabel,variant:e.variant,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly,value:n.meta.defaultValue,required:!n.meta.optional,placeholder:n.meta.example},on:{change:function(t){return e.onChange(n.meta,n.config)}},model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}}):t("base-input",{staticClass:"mb-0",attrs:{size:e.size,label:n.meta.title||n.meta.key,prelabel:e.prelabel,variant:e.variant,readonly:n.meta.readonly||n.meta.createonly&&!e.isnew||e.readonly,value:n.meta.defaultValue,required:!n.meta.optional,placeholder:n.meta.example},on:{change:function(t){return e.onChange(n.meta,n.config)}},scopedSlots:e._u([{key:"help",fn:function(){return[n.meta.desc?t("small",{staticClass:"text-xs"},[e._v("  \n                         "),t("MyIcon",{attrs:{type:"infoType",value:"info"}}),e._v(" "+e._s(n.meta.desc)+"\n                  ")],1):e._e()]},proxy:!0}],null,!0),model:{value:n.config.value,callback:function(t){e.$set(n.config,"value",t)},expression:"input.config.value"}})],1)])})),0)},o=[],i=n("bcb2"),s=n.n(i),r={name:"x-simple-form",components:{VJsoneditor:s.a},props:{inputs:{type:Array,description:"pass list of input configs",default:function(){return[{}]}},settings:{type:Object,default:function(){return{}}},isnew:{type:Boolean,default:!1},size:{},readonly:{type:Boolean,default:!1},prelabel:{type:Boolean,default:!1},variant:{type:String,default:"outline-success"}},data:function(){return{empty:function(e){return void 0==e||null===e||""===e}}},mounted:function(e){},methods:{onChange:function(e,t){this.$emit("change",{meta:e,config:t})},getOutput:function(){return inputs},onJsonError:function(e){console.log("onJsonError",e)}}},l=r,c=n("2877"),u=Object(c["a"])(l,a,o,!1,null,null,null);t["default"]=u.exports}}]);