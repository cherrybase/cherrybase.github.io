(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d694"],{d0d6:function(e,t,a){"use strict";a.r(t);a("7f7f");var i=function(){var e=this,t=e._self._c;return t("div",[t("master-view",{ref:"masterView",attrs:{id:"quick-actions-list",header:e.header,table:e.table,filters:[{label:"Add "+e.header.name,icon:"plus",name:"ADD_ITEM"}],newItem:e.newItem,busy:e.table.busy},scopedSlots:e._u([{key:"filter(ADD_ITEM)",fn:function(a){var i=a.filter,r=a.createItem;return[t("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:r}},[t("i",{staticClass:"fa fa-plus",attrs:{title:"Add"}}),e._v("  "+e._s(i.label)+" \n        ")])]}},{key:"cell(actions)",fn:function(a){return[t("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:a.removeItem}},[t("i",{staticClass:"fa fa-trash",attrs:{title:"Delete"}})]),e._v("\n         \n        "),t("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:a.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:a.editItem}},[t("i",{staticClass:"fa fa-eye",attrs:{title:"View"}})])]}},{key:"modal(edit)",fn:function(a){var i=a.itemCopy;return[i?t("ValidationObserver",{ref:"form"},[t("base-input",{staticClass:"mx-0 px-0",attrs:{label:"Category",autocomplete:"off",rules:"required",placeholder:"eg : country, customerType"},model:{value:i.category,callback:function(t){e.$set(i,"category",t)},expression:"itemCopy.category"}}),t("base-input",{staticClass:"mx-0 px-0",attrs:{label:"Title",autocomplete:"off",rules:"required",placeholder:"eg: Platiinum, Verified, India"},model:{value:i.title,callback:function(t){e.$set(i,"title",t)},expression:"itemCopy.title"}}),t("base-input",{staticClass:"mx-0 px-0",attrs:{"format-filter":"item_code","format-value":i.title,"format-live":"",label:"Code",autocomplete:"off",rules:"required",placeholder:"eg:- PLATINUM, VERFD, IND"},model:{value:i.code,callback:function(t){e.$set(i,"code",t)},expression:"itemCopy.code"}})],1):e._e()]}}])})],1)},r=[],n=(a("96cf"),a("3b8d")),o={components:{},data:function(){return{header:{name:"Quick Action",heading:"Quick Actions",subheading:"are used by agents to trigger functionalty in core business app ",icon:"pe-7s-browser icon-gradient bg-tempting-azure fa fa-location-arrow"},table:{fields:[{key:"category",label:"Category"},{key:"title",label:"Title"},{key:"code",label:"Action Code"},{key:"actions",label:"Options"}],busy:!1,sortBy:"name",api:"api/tmpl/quickaxn"},newItem:{category:"",title:"",code:""}}},computed:{},created:function(e){},methods:{loadItems:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.masterView.apply();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},s=o,l=a("2877"),c=Object(l["a"])(s,i,r,!1,null,null,null);t["default"]=c.exports}}]);