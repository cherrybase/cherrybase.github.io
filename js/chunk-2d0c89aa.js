(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c89aa"],{"561d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",on:{click:t.onClick}},[t.active?t._t("active",(function(){return[a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.active?t.activeTitle:t.title,expression:"active ? activeTitle : title"}],class:t.activeClass})]})):t._t("default",(function(){return[a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.active?t.activeTitle:t.title,expression:"active ? activeTitle : title"}],class:t.inactiveClass})]}))],2)},n=[],s=(a("96cf"),a("3b8d")),c={props:{api:{},tag:{default:"span"},active:{type:Boolean,default:!1},activeClass:{default:"fa fa-toggle-on"},inactiveClass:{default:"fa fa-toggle-off"},title:{},activeTitle:{},body:{},params:{}},computed:{},methods:{onClick:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("this.body",this.body),t.next=3,this.$service.post(this.api,this.body,{params:this.params});case 3:e=t.sent,this.$emit("complete",e);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},o=c,l=a("2877"),r=Object(l["a"])(o,i,n,!1,null,null,null);e["default"]=r.exports}}]);