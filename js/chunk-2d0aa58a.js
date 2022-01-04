(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa58a"],{"112f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("master-view",{ref:"variablesList",attrs:{header:{heading:"Variable Setup",subheading:"Variables to be used in templates",icon:"bg-happy-itmeo icon-gradient fa fa-code"},actions:[{name:"ADD_ITEM",label:"Add Variable"}],table:e.table},on:{action:e.onAction},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[n("i",{staticClass:"fas fa-edit text-primary pointer mx-2",on:{click:function(n){return e.editItem(t.item,t.index,n.target)}}}),n("i",{staticClass:"fas fa-trash text-danger pointer mx-2",on:{click:function(n){return e.removeItem(t.item,t.index,n.target)}}})]}}])}),e.oneItem?n("b-modal",{attrs:{id:e.modelName,title:"Variable Details",size:"md"},on:{hidden:e.cancelItem},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"position-relative form-group"},[n("button",{staticClass:"form-control btn btn-primary",attrs:{name:"password",id:"examplePassword",disabled:!e.isChanged},on:{click:e.saveItem}},[e._v("Save")])])]},proxy:!0}],null,!1,2704346586)},[n("base-input",{attrs:{size:"sm",name:"Variable Description",placeholder:"Company Name",rules:"required",required:""},model:{value:e.oneItem.description,callback:function(t){e.$set(e.oneItem,"description",t)},expression:"oneItem.description"}}),n("base-input",{attrs:{size:"sm",name:"Variable Key",placeholder:"company_name",rules:"required",required:""},model:{value:e.oneItem.key,callback:function(t){e.$set(e.oneItem,"key",t)},expression:"oneItem.key"}}),n("base-input",{attrs:{size:"sm",name:"Variable Value",placeholder:"ABC Pvt Ltd",rules:"required",required:""},model:{value:e.oneItem.value,callback:function(t){e.$set(e.oneItem,"value",t)},expression:"oneItem.value"}})],1):e._e()],1)},i=[],r=(n("7f7f"),n("96cf"),n("3b8d"));function s(){return{key:null,value:null,id:null,description:null}}var o={components:{},data:function(){return{actions:[],table:{fields:[{key:"key",label:"Key"},{key:"description",label:"Desc"},{key:"value",label:"Value"},{key:"actions",label:"Action"}],items:[],perPage:25,small:!0,currentPage:1,rows:0,api:"api/config/companyvar"},oneItem:s(),modelName:"MODAL_ADD_ITEM"}},computed:{isChanged:function(e){return this.oldHash!==JSON.stringify(this.oneItem)}},created:function(e){},methods:{loadItems:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.variablesList.apply();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeItem:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.delete(this.table.api,t);case 2:this.loadItems();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editItem:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in this.oneItem=s(),t)this.oneItem[n]=JSON.parse(JSON.stringify(t[n]));this.onAction({name:"EDIT_ITEM"});case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),saveItem:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.post(this.table.api,this.oneItem);case 2:this.oneItem=s(),this.onAction({name:"CANCEL"}),this.loadItems();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancelItem:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.oneItem=s(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.oneItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}}}},c=o,l=n("2877"),u=Object(l["a"])(c,a,i,!1,null,null,null);t["default"]=u.exports}}]);