(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df209"],{"891c":function(e,t,a){"use strict";a.r(t);a("7f7f");var r=function(){var e=this,t=e._self._c;return t("div",[t("master-view",{ref:"masterView",attrs:{id:"quick-labels-list",header:e.header,table:e.table,filters:[{label:"Add "+e.header.name,icon:"plus",name:"ADD_ITEM"}],newItem:e.newItem,busy:e.table.busy},scopedSlots:e._u([{key:"filter(ADD_ITEM)",fn:function(a){var r=a.filter,i=a.createItem;return[t("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:i}},[t("i",{staticClass:"fa fa-plus",attrs:{title:"Add"}}),e._v("  "+e._s(r.label)+" \n        ")])]}},{key:"cell(actions)",fn:function(a){return[t("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:a.removeItem}},[t("i",{staticClass:"fa fa-trash",attrs:{title:"Delete"}})]),e._v("\n         \n        "),t("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:a.item.message,expression:"row.item.message"}],attrs:{size:"sm",variant:"outline-primary"},on:{click:a.editItem}},[t("i",{staticClass:"fa fa-eye",attrs:{title:"View"}})])]}},{key:"modal(edit)",fn:function(a){var r=a.itemCopy;return[r?t("ValidationObserver",{ref:"form"},[t("base-input",{staticClass:"mx-0 px-0",attrs:{label:"Category",autocomplete:"off",rules:"required",placeholder:"eg : country, customerType"},model:{value:r.category,callback:function(t){e.$set(r,"category",t)},expression:"itemCopy.category"}}),t("base-input",{staticClass:"mx-0 px-0",attrs:{label:"Title",autocomplete:"off",rules:"required",placeholder:"eg: Platiinum, Verified, India"},model:{value:r.title,callback:function(t){e.$set(r,"title",t)},expression:"itemCopy.title"}}),t("base-input",{staticClass:"mx-0 px-0",attrs:{"format-filter":"item_code","format-value":r.title,"format-live":"",label:"Tag Code",autocomplete:"off",rules:"required",placeholder:"eg:- PLATINUM, VERFD, IND"},model:{value:r.code,callback:function(t){e.$set(r,"code",t)},expression:"itemCopy.code"}})],1):e._e()]}}])})],1)},i=[],s=(a("96cf"),a("3b8d")),l={components:{},data:function(){return{header:{name:"Customer Label",heading:"Customer Labels",subheading:"Assign Customer specific labels that your agent can use",icon:"pe-7s-browser icon-gradient bg-tempting-azure fa fa-user-tag"},table:{fields:[{key:"category",label:"Category",sortable:!0},{key:"title",label:"Title",sortable:!0},{key:"code",label:"Code",sortable:!0},{key:"actions",label:"Options"}],busy:!1,sortBy:"name",api:"api/tmpl/quicklabels"},newItem:{category:"",title:"",code:""}}},computed:{},created:function(e){},methods:{loadItems:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.masterView.apply();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},n=l,o=a("2877"),c=Object(o["a"])(n,r,i,!1,null,null,null);t["default"]=c.exports}}]);