(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4660"],{"3b50":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("page-title",{attrs:{heading:e.heading,subheading:e.subheading,icon:e.icon,actions:e.actions},on:{action:e.onAction}}),a("b-card",{staticClass:"main-card mb-4",attrs:{title:""}},[a("b-table",{attrs:{striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,items:e.teams,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Y"==t.item.isactive?"De-Activate":"Activate",expression:"row.item.isactive == 'Y' ? 'De-Activate' : 'Activate'"}],staticClass:"fa-stack fa-1x",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(a){return e.enableTeam(t.item,t.index,a.target)}}},[a("i",{staticClass:"fas fa-users fa-stack-1x"}),"Y"!=t.item.isactive?a("i",{staticClass:"fas fa-slash fa-stack-1x",staticStyle:{color:"Tomato"}}):e._e()]),e._v(" \n              "),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Make Default Assignee",expression:"'Make Default Assignee'"}],staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(a){return e.setItemDefault(t.item,t.index,a.target)}}},[t.item.defaultValue?e._e():a("span",{staticClass:"far fa-star"}),t.item.defaultValue?a("span",{staticClass:"fas fa-star"}):e._e()])]}}])})],1),e._m(0),e.newItem?a("b-modal",{attrs:{id:e.modelName,title:(e.newItem.id?"Edit":"Add")+" Team "},on:{hidden:e.cancelReps},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"position-relative form-group"},[a("button",{staticClass:"form-control btn btn-primary",attrs:{name:"password",id:"examplePassword",disabled:!e.isChanged},on:{click:e.createTeam}},[e._v("Create")])])]},proxy:!0}],null,!1,3419879763)},[a("ValidationObserver",{ref:"form"},[a("div",{staticClass:"position-relative form-group"},[a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("label",{attrs:{for:"examplePassword"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.name,expression:"newItem.name"}],staticClass:"form-control",attrs:{name:"agent_name",id:"examplePassword",placeholder:"Online Team",type:"text"},domProps:{value:e.newItem.name},on:{input:function(t){t.target.composing||e.$set(e.newItem,"name",t.target.value)}}}),a("span",{staticClass:"v-input-error"},[e._v(e._s(t.errors[0]))])]}}],null,!1,1528031627)})],1),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"exampleEmail"}},[e._v("Code")]),a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[e._v("@")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem.code,expression:"newItem.code"}],staticClass:"form-control",attrs:{placeholder:"ONLINE,BILLING",type:"text"},domProps:{value:e.newItem.code},on:{input:function(t){t.target.composing||e.$set(e.newItem,"code",t.target.value)}}})])])])],1):e._e()],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"main-card mb-3 card"})])])}],i=(a("7f7f"),a("96cf"),a("3b8d")),r=a("e492"),o=a("ecee"),c=a("c074"),l=a("ad3d");function u(){return{code:"",dept_email:"",id:null,name:""}}o["c"].add(c["B"],c["A"],c["r"]);var m={components:{PageTitle:r["a"],"font-awesome-icon":l["a"]},data:function(){return{heading:"Teams",subheading:"can be used to handle chats in organized way",icon:"pe-7s-network icon-gradient bg-tempting-azure fa fa-users",actions:[{label:"Add Team",icon:"plus",name:"ADD_ITEM"}],fields:[{key:"name",label:"Name"},{key:"code",label:"Code"},{key:"actions",label:"Actions"}],newItem:u(),modelName:"MODAL_ADD_TEAM"}},computed:{teams:function(e){return this.$store.getters.StateTeams},isChanged:function(e){return this.oldHash!==JSON.stringify(this.newItem)}},created:function(e){this.loadAgentTeams()},methods:{loadAgentTeams:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GetTeams");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createTeam:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("CreatTeam",this.newItem);case 2:this.newItem=u(),this.$refs.form.reset(),this.onAction({name:"CANCEL"});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),enableTeam:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isactive="Y"==t.isactive?"N":"Y",e.next=3,this.$store.dispatch("CreatTeam",t);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setItemDefault:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("SetTeamsDefault",t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cancelReps:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.newItem=u(),this.onAction({name:"CANCEL"});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onAction:function(e){switch(e.name){case"ADD_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"EDIT_ITEM":this.oldHash=JSON.stringify(this.newItem),this.$bvModal.show(this.modelName),console.log("ADD_ITEM",e);break;case"CANCEL":this.$bvModal.hide(this.modelName);break;default:console.log("NoMapping",e)}}}},d=m,p=a("2877"),f=Object(p["a"])(d,n,s,!1,null,null,null);t["default"]=f.exports}}]);