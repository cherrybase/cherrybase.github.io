(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){e.exports=n("56d7")},1370:function(e,t,n){"use strict";var a=n("7618");n("6b54"),n("4917");function r(e){var t=null;if("string"==typeof e)try{var n=e.trim();if("{"==n[0]&&"}"==n[n.length-1])t=JSON.parse(e);else{var a=n.match(/^([a-zA-Z0-9\ ]*)\((.*)\)$/);a&&a.length>2?(t={},t[a[1]+"()"]=r(a[2])):t=e}}catch(i){console.log("NO for ",e),t=e}else t=e;if("[object Object]"===Object.prototype.toString.call(t)||"[object Array]"===Object.prototype.toString.call(t))for(var o in t)t[o]=r(t[o]);return t}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];for(var r in e)"object"!=Object(a["a"])(e[r])?n.push(t+r):n=n.concat(o(e[r],t+r+"."));return n}function i(e){var t={};function n(e,a){if(Object(e)!==e)t[a]=e;else if(Array.isArray(e)){for(var r=0,o=e.length;r<o;r++)n(e[r],a+"["+r+"]");0==o&&(t[a]=[])}else{var i=!0;for(var s in e)i=!1,n(e[s],a?a+"."+s:s);i&&a&&(t[a]={})}}return n(e,""),t}t["a"]={copy:function(e){return e?JSON.parse(JSON.stringify(e)):e},deepParse:r,paths:o,flatten:i}},2864:function(e,t,n){"use strict";n("672d")},"3ef3":function(e,t,n){"use strict";var a=n("768b"),r=(n("ac6a"),n("456d"),n("28a5"),n("7618")),o=(n("4917"),n("a481"),n("6b54"),n("a026")),i=n("c1df"),s=n.n(i),c=n("6612"),l=n.n(c),u=n("1370"),d={},f={},p=function(e){var t=new Date;return e.getDate()==t.getDate()&&e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()};function m(e,t){if(!e)return"";var n=new Date,a=new Date(e),r=s()(n).diff(a,"day");return r<1&&p(a)?s()(a).format("h:mm a"):r<3?s()(a).format("hh:mm a ddd"):r<7?s()(a).format("h:mm a ddd"):s()(a).format("h:mm a DD MMM YY")}function b(e,t){var n=new Date(e);return s()(n).format("h:mm a DD MMM YY")}var g=3600,A=24*g,h=7*A;function v(e){return e<60?l()(e).format("0.0")+" sec":e<g?l()(e/60).format("0.0")+" min":e<A?l()(e/3600).format("0.0")+" hrs":e<h?l()(e/A).format("0.0")+" days":e>=h?l()(e/h).format("0.0a")+" wks":s()(e).format("0.0").toLowerCase()}function w(e){e=e||"";for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t}function O(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}function j(e){return!!/^\d{10}$/.test(e)||(!!/^[1-9]{1}[0-9]{3,14}$/.test(e)||(!!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e)||(!!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(e)||(!!/^(\+\d{1,3}( )?)?((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$/.test(e)||(!!/^(\d{3}[- .]?){2}\d{4}$/.test(e)||!!/^((\(\d{3}\))|\d{3})[- .]?\d{3}[- .]?\d{4}$/.test(e))))))}var T={instance:function(e){},addContactLabels:function(e){for(var t in e)d[e[t].id]=e[t]},addContactTags:function(e){for(var t in e)f[e[t].id]=e[t]},timespan:v,formatStamp:b,hexacode:function(e){return O(w(e))},contactLabels:function(e){return d[e]||{id:e,title:e}},contactTags:function(e){return f[e]||{id:e,title:e}},isEmpty:function(e){return null===e||void 0===e||""===e||"null"===e},nullify:function(e){return null===e||void 0===e||""===e||"null"===e?null:e},undify:function(e){if(null!==e&&void 0!==e&&""!==e&&"null"!==e)return e},any:function(){for(var e in arguments)if(void 0!==arguments[e]&&null!==arguments[e])return arguments[e];return arguments[arguments.length-1]},toNum:function(e,t){var n=t||0;return(isNaN(e)||!e?n:e)-0},guid:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},https:function(e){return e?e.replace("http://","https://"):e},thumburl:function(e){if(!e)return e;if(0!=e.indexOf("data:")){var t=e.match(/(.+)\/(res.cloudinary.com)\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9]+)\/(upload)\/([a-zA-Z0-9,_-]+)\/(.*)/);if(t&&t.length)return t[6]="w_100,h_100",t.slice(1).join("/");var n=e.match(/(.+)\/(.+).(s3.amazonaws.com)\/(.+)/);return n&&n.length?"https://ik.imagekit.io/meherysoccom/".concat(n[2],"/").concat(n[4],"?tr=w-100,h-100"):e}},https_thumburl:function(e){return this.thumburl(this.https(e))},stripslash:function(e){return(e||"").replace(/\/+$/g,"").replace(/^\/+/,"")},clean_url:function(e){return e.replace(/(\/)\/+/g,"$1").replace(/^https?:/,"https:/")},keys:function e(t,n){n=n||"";var a=[];for(var o in t)"object"!=Object(r["a"])(t[o])?a.push(n+o):a=a.concat(e(t[o],n+o+"."));return a},map_from_string:function(e){var t=";",n=":";return(e||"").split(t).reduce((function(e,t){var a=(t||"").split(n),r=(a[0]||"").trim();return r&&(e[r]=a[1]),e}),{})},message_form_options:function(e){var t=[],n=[];return Object.keys(e).map((function(a){if(0==a.indexOf("form-input-")){var r=(e[a]||"").split("\\|");t.push({name:a.replace("form-input-",""),label:r[0]||"",type:r[1]||""})}else if(0==a.indexOf("actions-button-")){r=(e[a]||"").split("\\|");n.push({name:a.replace("actions-button-",""),label:r[0]||"",type:r[1]||""})}})),e["inputs"]=t,e["buttons"]=n,e},validators:["phone","phoneML","emailz","alphanum","HBNumVar","HBPrefixedVar","URL"],alphanum:function(e){return!!/^[a-zA-Z0-9]*$/.test(e)||"errors.ValidAlphaNum"},emailz:function(e){return!!/^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}/.test(e)||"errors.ValidEmail"},phone:function(e){return!!j(e)||(!!j(e.replace(/[\ \+]/g,""))||"errors.ValidPhone")},phoneML:function(e){var t=e.match(/[^\r\n\,]+/g);for(var n in t)if(t[n]&&!j(t[n])&&!j(t[n].replace(/[\ \+]/g,"")))return"errors.ValidPhonesPerLine";return!0},HBPrefixedVar:function(e,t){t=t||[];var n=t[0],a=t[1],r=t[2],o=t.slice(3),i=/({{([\w\d\.\_]+)}})/g,s=e.match(i)||[];for(var c in s)if(!o.some((function(e){return 0==s[c].indexOf("{{"+e)})))return"errors.InvalidVariable";return this.HBVar({contents:e,position:n,min:a,max:r,vars:s})},HBNumVar:function(e,t){var n=Object(a["a"])(t,3),r=n[0],o=n[1],i=n[2],s=/({{([\w\d\.\_]+)}})/g,c=e.match(s)||[];return this.HBVar({contents:e,position:r,min:o,max:i,vars:c,ordered:!0})},HBVar:function(e){var t=e.contents,n=e.position,a=e.min,r=e.max,o=e.vars,i=e.ordered;console.log("HBVar",o);var s=o;if(a&&(a=parseInt(a),s.length<a))return"errors.LessVariable";if(r&&(r=parseInt(r),s.length>r))return"errors.ExtraVariable";if("end"==n&&s.length){var c=t.length,l=s[s.length-1];if(t.indexOf(l)!=c-l.length)return"errors.PositionVariable"}if(i)for(var u=0;u<s.length;u++)if(console.log("HBVar","{{"+(u+1)+"}}"!==s[u]),"{{"+(u+1)+"}}"!==s[u])return"errors.InvalidVariableSeq";return!0},URL:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t;try{t=new URL(e)}catch(n){return!1}return("http:"===t.protocol||"https:"===t.protocol)&&(t.href==e||t.origin==e)})),item_code:function(e){return(e||"").toLowerCase().trim().replace(/[^A-Za-z0-9_]+/g,"_").replace(/[_]+/g,"_")},init:function(){var e=this;o["default"].filter("formatDate",m),o["default"].filter("formatStamp",b),o["default"].filter("newlines",(function(e){return e.trim()})),o["default"].filter("lowercase",(function(e){return(e||"").toLowerCase()})),o["default"].filter("uppercase",(function(e){return(e||"").toUpperCase()})),o["default"].filter("number",(function(e,t){var n=t||"0,0a";return l()(e).format(n).toUpperCase()})),o["default"].filter("timespan",v),o["default"].filter("striphtml",(function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.textContent||t.innerText||"";return n})),o["default"].filter("blank3dash",(function(e){return e||"---"})),o["default"].filter("stripslash",(function(t){return e.stripslash(t)})),o["default"].filter("https",(function(t){return e.https(t)})),o["default"].filter("thumburl",(function(t){return e.thumburl(t)})),o["default"].filter("contact_label",(function(t){return e.contactLabels(t).title})),o["default"].filter("contact_tag",(function(t){return e.contactTags(t).title})),o["default"].filter("display",(function(e,t,n){if("string"==typeof t){var a=T.map_from_string(t);return a[e]}var r=(t||[]).filter((function(t){return t.value==e}))[0]||{};return r&&void 0!==r.label&&null!==r.label?r.label:e})),o["default"].filter("log_option",(function(t,n){switch(n){case"LABEL_ADDED":case"LABEL_REMOVED":return e.contactLabels(t).title;case"TAG_ADDED":case"TAG_REMOVED":return e.contactTags(t).title;default:return t}})),o["default"].filter("hexacode",(function(t){return e.hexacode(t)})),o["default"].filter("json",(function(e){return JSON.stringify(u["a"].deepParse(e),null,2)})),o["default"].filter("item_code",e.item_code)}};T.init(),o["default"].prototype.$formatters=T,t["a"]=T},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="4678"},"53da":function(e,t,n){var a={"./app-account/router":["8d5b","chunk-2d0e93ef"],"./app-admin/router":["0c7d","chunk-2d0aed76"],"./app-agent/router":["9e03","chunk-2d0f0b45"],"./app-content/router":["ca6d","chunk-2d2214c2"],"./app-cpanel/router":["4800","chunk-2d0c1c7a"],"./app-customer/router":["aaac","chunk-2d213138"],"./app-dev/router":["3494","chunk-2d0b9a32"],"./app-front/router":["e18a","chunk-2d22498b"],"./app-partner/router":["dce4","chunk-2d229624"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="53da",e.exports=r},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("adcf");var a=n("a026"),r=n("f6c6"),o=n("2f62"),i=n("0e44"),s=(n("96cf"),n("3b8d")),c=n("bc3a"),l=n.n(c),u={api:{}},d={StateApi:function(e){return e.api}},f={UpdateApiStore:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,r={},r[n.pathKey]=n.data,a("setApiStore",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},p={setApiStore:function(e,t){for(var n in t)e.api[n]=t[n]}},m={state:u,getters:d,actions:f,mutations:p},b={local:{}},g={local:function(e){return e.local}},A={UpdateLocalStore:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,b.local[n.namespace]=b.local[n.namespace]||{},b.local[n.namespace][n.key]=n.data,a("setLocalStore",b.local);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},h={setLocalStore:function(e,t){for(var n in t)e.local[n]=Object.assign({},e.local[n],t[n])}},v={state:b,getters:g,actions:A,mutations:h};a["default"].use(o["a"]);var w=new o["a"].Store({modules:{apiStore:m,localStore:v},plugins:[Object(i["a"])({paths:["localStore"]})]}),O=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("28a5"),n("bd86")),j=(n("aef6"),n("6172")),T=n("a925"),S=n("7bb1"),E=n("d4d7"),C=n("2593");a["default"].use(T["a"]),console.log("i18NLoaded");var P={locale:"en",messages:{ar:{fields:{email:"البريد الاليكتروني",password:"كلمة السر"},validation:E.messages},en:{fields:{email:"E-mail",name:"Name",phone:"Phone",company:"Company Name",country:"Country",role:"Role",password:"Password"},validation:C.messages,errors:{NotNull:"The {_field_} is required",ValidPhone:"Enter valid {_field_} eg +91 XXXXX XXXXX",ValidPhonesPerLine:"Enter valid mobile number eg 91XXXXXXXXXX per line",ValidEmail:"Enter valid email address eg you@company.com",Pattern:"Enter valid {_field_}",LessVariable:"Insufficent number of valiables in {_field_}",ExtraVariable:"More than allowed valiables in {_field_}",InvalidVariable:"Invalid valiables in {_field_}",InvalidVariableSeq:"Invalid valiables sequence in {_field_}",PositionVariable:"Invalid position of valiables in {_field_}"}}}};Object(S["e"])(P);var N=new T["a"](P),y=n("3ef3");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(O["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=l.a.interceptors.response.use((function(e){var t=e.config;if(e.request.responseURL.endsWith("/auth/login")){var n=new URL(e.request.responseURL);n.searchParams.append("referer",encodeURIComponent(window.location.href)),window.location.reload()}return!1!==t.toast&&e.data&&e.data.message&&a["default"].$toast&&a["default"].$toast.success&&a["default"].$toast.success(e.data.message),e}),(function(e,t){var n=e.response,r=e.config;return!1!==r.toast&&n.data&&n.data.message&&a["default"].$toast&&a["default"].$toast.error&&a["default"].$toast.error(n.data.message),e.response.data.errors&&(e.response.data.veeErrors=e.response.data.errors.reduce((function(e,t){var n=[];t.obzect&&n.push(t.obzect),t.field&&n.push(t.field);var a=n.join("."),r="fields."+a,o=N.t("fields."+a);o=o==r?N.t("fields."+t.field):o;var i,s=["errors."+t.codeKey,"errors."+t.code,"errors."+t.description,t.codeKey,t.code,t.description];for(var c in s)if(s[c]&&(i=N.t(s[c],I(I({},t),{},{_field_:o})),i!=s[c]))break;return e[a]=i,e}),{})),Promise.reject(e)}));function R(e){return e.replace(/\/$/,"").replace(/^\//,"").replace(/^api\//,"").split(/[\/\_]/).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}function x(e,t){var n=null===e||void 0===e?void 0:e._processor;if(n&&j["a"][n]&&t.results)for(var a in t.results)t.results[a]=j["a"][n](t.results[a]);return t}function M(e){return y["a"].clean_url(e)}var L={dispatch:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",w.dispatch(t,n,a));case 1:case"end":return e.stop()}}),e)})));function t(t,n,a){return e.apply(this,arguments)}return t}(),_GET_X:{},getX:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=M(t),a=R(t),!this._GET_X[a]){e.next=5;break}return e.next=5,this._GET_X[a];case 5:if(!w.getters.StateApi[a]){e.next=7;break}return e.abrupt("return",w.getters.StateApi[a]);case 7:return r=l.a.get(t,{params:n}),this._GET_X[a]=r,e.next=11,r;case 11:return o=e.sent,delete this._GET_X[a],i=x(n,o.data),s=i.results?i.results:i,0!=t.indexOf("/api/")&&0!=t.indexOf("api/")||(console.log("getX",o.data),w.dispatch("UpdateApiStore",{pathKey:a,data:s})),e.abrupt("return",s);case 17:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),get:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=M(t),r=a||{},r.params=n,e.next=5,l.a.get(t,r);case 5:return o=e.sent,e.abrupt("return",x(n,o.data));case 7:case"end":return e.stop()}}),e)})));function t(t,n,a){return e.apply(this,arguments)}return t}(),post:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=M(t),e.next=3,l.a.post(t,n,a);case 3:return r=e.sent,e.abrupt("return",x(n,r.data));case 5:case"end":return e.stop()}}),e)})));function t(t,n,a){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o in t=M(t),r=new URLSearchParams,n)r.append(o,n[o]);return e.prev=3,e.next=6,l.a.post(t,r,a);case 6:return i=e.sent,e.abrupt("return",x(n,i.data));case 10:return e.prev=10,e.t0=e["catch"](3),a&&a.ref&&"function"==typeof a.ref.setErrors&&a.ref.setErrors(e.t0.response.data.veeErrors),e.abrupt("return",Promise.reject(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));function t(t,n,a){return e.apply(this,arguments)}return t}(),delete:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=M(t),r=a||{},r.params=n,e.next=5,l.a.delete(t,r);case 5:return o=e.sent,e.abrupt("return",x(n,o.data));case 7:case"end":return e.stop()}}),e)})));function t(t,n,a){return e.apply(this,arguments)}return t}(),config:function(e){switch(e){case"DISABLE_RESPONSE_INTERCEPTOR":l.a.interceptors.response.eject(k);break}},store:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.dispatch("UpdateLocalStore",{namespace:t,key:n,data:a});case 1:case"end":return e.stop()}}),e)})));function t(t,n,a){return e.apply(this,arguments)}return t}()};a["default"].prototype.$service=L;var D=L,U=n("5f5b"),B=n("b1e0"),G=n("9062"),z=n.n(G),V=(n("e40d"),n("e37d")),W=n("b079"),H=n.n(W),X=(n("4238"),n("4c93"));function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){Object(O["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(S["d"])("email",X["email"]),Object(S["d"])("regex",X["regex"]),Object(S["d"])("min",X["min"]),Object(S["d"])("max",X["max"]),Object(S["d"])("numeric",X["numeric"]),Object(S["d"])("required",F(F({},X["required"]),{},{message:"This field is required"})),y["a"].validators.forEach((function(e){y["a"][e]&&Object(S["d"])(e,{validate:function(t,n,a){var r=y["a"][e](t,n);return!0===r||N.t(r)}})})),Object(S["c"])({classes:{valid:"is-valid",invalid:"is-invalid",dirty:["is-dirty","is-dirty"]},defaultMessage:function(e,t){var n="fields.".concat(e),a=N.t(n);return t._field_=a==n?e:a,N.t("validation.".concat(t._rule_),t)}});var Q=n("0086"),Y=n.n(Q),J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",attrs:{id:"app"}},[n(e.app,{tag:"component"})],1)},K=[],q={name:"AppWrapper",computed:{app:function(){return"app-"+window.CONST.APP}}},$=q,ee=(n("2864"),n("2877")),te=Object(ee["a"])($,J,K,!1,null,null,null),ne=te.exports;l.a.defaults.withCredentials=!0,l.a.defaults.baseURL=function(){var e=window.location.origin;return window.CONST&&window.CONST.APP_CONTEXT?e+window.CONST.APP_CONTEXT:e}(),console.log("baseURL====",l.a.defaults.baseURL),console.log("location.pathname====",location.pathname),a["default"].config.productionTip=!1,a["default"].use(U["a"]),a["default"].use(B["a"]),a["default"].use(z.a),a["default"].use(V["a"]),V["a"].options.defaultClass="my-tooltip",V["a"].options.defaultTemplate='<div class="foo" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',V["a"].enabled=window.innerWidth>768,a["default"].use(H.a),a["default"].use(Y.a),function(e,t){var o=e[t]||e.dev;console.log("ALWAYS",t,o),"function"==typeof o.beforeLoad&&o.beforeLoad(),a["default"].component("app-".concat(t),o.component),n("53da")("./app-".concat(t,"/router")).then((function(e){new a["default"]({el:"#app",store:w,service:D,i18n:N,router:r["a"].router(),template:"<AppWrapper/>",components:{AppWrapper:ne}})}))}({admin:{component:function(){return Promise.all([n.e("chunk-2d221a67"),n.e("chunk-3df1b0c1"),n.e("chunk-72c60f3a")]).then(n.bind(null,"ae03"))}},agent:{component:function(){return Promise.all([n.e("chunk-2d221a67"),n.e("chunk-3df1b0c1"),n.e("chunk-8586f122")]).then(n.bind(null,"321e"))}},customer:{component:function(){return Promise.all([n.e("chunk-2d221a67"),n.e("chunk-741a0e06")]).then(n.bind(null,"bb9d"))}},account:{beforeLoad:function(){},component:function(){return Promise.all([n.e("chunk-6c5ed8b4"),n.e("chunk-4330b6b0"),n.e("chunk-1c5fb068"),n.e("chunk-307a324d"),n.e("chunk-aaf3ecce")]).then(n.bind(null,"a124"))}},partner:{beforeLoad:function(){},component:function(){return Promise.all([n.e("chunk-6c5ed8b4"),n.e("chunk-4330b6b0"),n.e("chunk-1c5fb068"),n.e("chunk-307a324d"),n.e("chunk-8e298b6c")]).then(n.bind(null,"b1d6"))}},cpanel:{beforeLoad:function(){},component:function(){return Promise.all([n.e("chunk-6c5ed8b4"),n.e("chunk-4330b6b0"),n.e("chunk-1c5fb068"),n.e("chunk-307a324d"),n.e("chunk-704223e2")]).then(n.bind(null,"5b6e"))}},front:{component:function(){return n.e("chunk-15cb7429").then(n.bind(null,"bd6c"))}},dev:{component:function(){return Promise.all([n.e("chunk-6c5ed8b4"),n.e("chunk-4330b6b0"),n.e("chunk-1c5fb068"),n.e("chunk-307a324d"),n.e("chunk-2a9d33de")]).then(n.bind(null,"bb7e"))}},content:{beforeLoad:function(){},component:function(){return n.e("chunk-2d2107da").then(n.bind(null,"b7b1"))}}},window.CONST.APP)},6172:function(e,t,n){"use strict";n("4917"),n("7f7f"),n("a481");var a=n("3ef3"),r=n("d166");n("1d9e");function o(e,t){if(!e||!e)return 0;e=e.replace(/([_-])/g," "),t=t.replace(/([_-])/g," ");var n=e.score(t)+t.score(e);return n}function i(e,t){return!(!e||!t)&&("null"!=e&&"null"!=t&&e===t)}t["a"]={session:function(e){var t,n,o,i,s,c,l,u,d,f;e._stamp=(new Date).getTime(),e.local=e.local||{active:!1,expired:!1,tags:{}};var p,m,b=e._stamp-r["a"].config.chatSessionTimeout;(e.local.activeInbound=e.lastInComingStamp>0&&e.lastInComingStamp>b,e.local.expired=(e.expired||e.lastInComingStamp>0&&e.lastInComingStamp<b)&&!e.resolved,e.local.active=e.active&&!e.local.expired,e.local.lastActivityStamp=e.lastInComingStamp||e.updatedStamp,e.local.channelId=(null===e||void 0===e||null===(t=e.contact)||void 0===t?void 0:t.channelId)||(null===e||void 0===e||null===(n=e.contact)||void 0===n?void 0:n.channelType)+":"+(null===e||void 0===e||null===(o=e.contact)||void 0===o?void 0:o.lane),e.local.lane=(null===e||void 0===e||null===(i=e.contact)||void 0===i?void 0:i.lane)||"",e.local.resolved=!!e.resolved,e.local.open=e.local.active&&!e.local.expired&&e.local.activeInbound,e.local.closed=e.local.expired||!e.local.active,e.local.isModeAgent="AGENT"==e.mode,e.local.isModeBot="BOT"==e.mode,e.local.isShowAgentPush=e.local.closed||!e.local.isModeAgent,e._assignedToMe=r["a"].agent==e.assignedToAgent&&!e.resolved,e.assignedToDept!==r["a"].dept?e._tab="ORG":e.assignedToAgent!=r["a"].agent&&e.assignedToAgent?e.assignedToAgent!=r["a"].agent&&e.assignedToAgent&&(e._tab="TEAM"):e._tab="ME",e.local.active,e.local.is_agent_responded=!1,null!==e&&void 0!==e&&null!==(s=e.msg)&&void 0!==s&&s.lastMsg)&&("I"==e.msg.lastMsg.type?(e.local.isInBound=!0,e.lastInComingStamp=Math.max(e.lastInComingStamp,e.msg.lastMsg.timestamp)):"O"==e.msg.lastMsg.type&&(e.local.isOutBound=!0,e.lastResponseStamp=Math.max(e.lastInComingStamp,e.msg.lastMsg.timestamp)),"AGENT"==(null===(p=e.msg.lastMsg)||void 0===p||null===(m=p.route)||void 0===m?void 0:m.senderType)&&(e.local.is_agent_responded=!0));e._gracestamp=e._stamp-r["a"].config.chatIdleTimeout,e._waitingSinceStamp=Math.max(e.lastResponseStamp,e.agentSessionStamp),e.local.is_waiting=e.local.isModeAgent&&!e.local.resolved&&(e.lastResponseStamp<e.lastInComingStamp||e.local.isInBound||!e.local.is_agent_responded),e._waitingstamp_en=a["a"].timespan((e._stamp-e._waitingSinceStamp)/1e3),e.local.is_waiting_long=e.local.is_waiting&&e.lastResponseStamp<e._gracestamp,e._new=e.lastReadStamp<e.lastInComingStamp||e.local.is_waiting&&e.lastInComingStamp>r["a"].sessionLoadStamp&&(!e._lastReadStamp||e._lastReadStamp<e.lastInComingStamp),e._searchText=[null===e||void 0===e||null===(c=e.contact)||void 0===c?void 0:c.name,null===e||void 0===e||null===(l=e.contact)||void 0===l?void 0:l.email,null===e||void 0===e||null===(u=e.contact)||void 0===u?void 0:u.phone,null===e||void 0===e||null===(d=e.contact)||void 0===d?void 0:d.csid].join(" ").toLowerCase(),e.local.is_unassigned="AGENT"==e.mode&&!e.assignedToAgent,e.local.is_assigned="AGENT"==e.mode&&e.assignedToAgent;var g=null===e||void 0===e||null===(f=e.local)||void 0===f?void 0:f.agent;return e.local.is_offline_agent=!1,null!==g&&void 0!==g&&g.session&&(e.local.is_offline_agent=g.session.isAvailableNot||!g.session.isLoggedIn),e.local.is_unattended=!g||e.local.is_waiting_long&&e.local.is_offline_agent,e},appendMessage:function(e,t){if(t&&!t.length){var n=e,a=-1;for(var r in n.messages){var o=n.messages[r];if(i(o.messageIdRef,t.messageIdRef)&&(o.messageId=t.messageId,o.version=1),i(o.messageId,t.messageId)||i(o,t)||i(o.messageIdExt,t.messageIdExt)||i(o.messageIdRef,t.messageIdRef)){a=r,t.version<o.version&&(t=o);break}}return t.name=t.name||e.name,t.replyMessage=t.replyMessage||null,"I"==t.type?e.lastInComingStamp=Math.max(e.lastInComingStamp,t.timestamp):"O"==t.type&&(e.lastResponseStamp=Math.max(e.lastResponseStamp,t.timestamp)),n.messages&&(a<0?n.messages.push(t):n.messages.splice(a,1,t)),n.msg.lastMsg=t,n}},quickReply:function(e,t){var n=t.text,a=t.categories||[];e.title=e.title||"",e.title_len=e.title.length||1,e.template=e.template||"",e.matchIndex=n?e.title.toLowerCase().indexOf(n):-1,e.match=a.indexOf(e.category)>-1;var r=(e.match?.5:0)+o(a.join(" "),e.category)/2;e.matchScore=(0==e.matchIndex?1:0)+(e.matchIndex>0?e.matchIndex/e.title_len:0)+r+o(n,e.title)+o(n,e.template)}}},"672d":function(e,t,n){},adce:function(e,t){e.exports="data:image/png;base64,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"},adcf:function(e,t,n){window.CONST&&window.CONST.CDN_URL&&(n.p=window.CONST.CDN_URL+"/"),window.CONST=window.CONST||{},window.CONST.APP=window.CONST.APP||"content";var a=location.pathname;/^\/[a-z]+\/plugin\/customer\/.*$/.test(a)||/^\/[a-z]+\/[a-z]+\/plugin\/customer\/.*$/.test(a)?window.CONST.APP="customer":0==a.indexOf("/admin")?window.CONST.APP="admin":0==a.indexOf("/agent")?window.CONST.APP="agent":0==a.indexOf("/dev")?window.CONST.APP="dev":0==a.indexOf("/content")?window.CONST.APP="content":0==a.indexOf("/front")&&(window.CONST.APP="front"),window.callMobileEventListener=function(e){console.log("callMobileEventListener",e)},window.parent.postMessage("SocComApp","*"),console.log("preloader",window.CONST)},d166:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return c}));n("a481");var a=n("a026");window.CONST.dev="false"!=window.CONST.dev;var r={some:"Settings",app:window.CONST.APP,appView:window.CONST.APP_VIEW,cdn:window.CONST.CDN_URL,appPrefix:"/"+window.CONST.APP,tenant:window.CONST.TENANT,appDomain:window.CONST.APP_DOMAIN,appDomainId:window.CONST.APP_DOMAIN_ID,context:window.CONST.CONTEXT,user:window.CONST.APP_USER,dept:window.CONST.APP_DEPT,userName:window.CONST.APP_USER_NAME,agent:window.CONST.APP_USER,nounce:window.CONST.NOUNCE,config:function(e){return e.chatRefreshInterval=e.chatIdleTimeout/5,e}(Object.assign({chatSessionTimeout:864e5,chatIdleTimeout:3e5,agentSessionTimeout:6e5,CHAT_TAG_ENABLED:!0,AGENT_CHAT_INIT:!1},window.CONST.CONFIG||window.CONST.CONFG,(window.CONST.dev,{}))),logo:{full:window.CONST.CDN_URL+"/logo/logo-long.png",full_inverse:window.CONST.CDN_URL+"/logo/logo-long-o.png",short:window.CONST.CDN_URL+"/logo/logo-short.png",short_inverse:window.CONST.CDN_URL+"/logo/logo-short-o.png"},sessionLoadStamp:(new Date).getTime()},o=function(){var e={isDuperUser:(window.CONST.APP_USER_ROLE||[]).indexOf("DUPER_USER")>=0,isSuperDev:(window.CONST.APP_USER_ROLE||[]).indexOf("SUPER_DEV")>=0};return e.isMultiDomainUser=e.isDuperUser||e.isSuperDev,e}(),i={showSidebar:!1,showContactProfile:!0,agent:{showProfile:!0,showProfileAllowed:!1,showContactSearch:!1,showSessionSearch:!1,profileView:"history",contactsTab:"ME",mvu:"CONTACTS"}},s={social:{FACEBOOK:"fa fa-facebook",WEBSITE:"fa fa-chrome",TELEGRAM:"fa fa-telegram",TWITTER:"fa fa-twitter",WHATSAPP:"fa fa-whatsapp",INSTAGRAM:"fa fa-instagram",EMAIL:"fas fa-envelope"},chatStatus:{UNASSIGNED:{label:"UNASSIGNED"},OPEN:{label:"OPEN",editable:!0},ATTENTION:{label:"ATTENTION",editable:!0},URGENT:{label:"URGENT",editable:!0},ONHOLD:{label:"ONHOLD",editable:!0},EXPIRED:{label:"EXPIRED"},RESOLVED:{label:"RESOLVED",editable:!0},CLOSED:{label:"CLOSED"}},socialPrefix:function(e,t){var n=this._socialPrefix(e);return t?n.replace(/^fa |^f /,t+" "):n.replace(/^f /,"")},_socialPrefix:function(e){return e=e||"",this.social[e]?this.social[e]:0==e.indexOf("tw")?this.social.TWITTER:0==e.indexOf("tg")?this.social.TELEGRAM:0==e.indexOf("fb")?this.social.FACEBOOK:0==e.indexOf("wa")?this.social.WHATSAPP:0==e.indexOf("ig")?this.social.INSTAGRAM:this.social.WEBSITE},c2cUrl:function(e){return"FACEBOOK"==e.contactType?"https://m.me/".concat(e.facebook.handler):"TWITTER"==e.contactType?"https://twitter.com/".concat(e.twitter.handler):"WHATSAPP"==e.contactType?"https://api.whatsapp.com/send/?phone=".concat(e.lane).concat(e.sandbox?"&text=/proxy "+(r.appDomain||r.tenant):""):"TELEGRAM"==e.contactType?"https://telegram.me/".concat(e.telegram.lane):"INSTAGRAM"==e.contactType?"https://instagram.com/".concat(e.instagram.handler):"https://".concat(r.tenant,".").concat(r.config.PROP_SERVICE_SERVER)},profilePic:n("adce"),profilePicFun:function(e,t,n){if(e)return e;switch(n){case"FACEBOOK":return"https://ui-avatars.com/api/?name=".concat(t,"&background=a0acbe&color=333f54");case"TWITTER":return"https://ui-avatars.com/api/?name=".concat(t,"&background=b7d9ec&color=102f41");case"WHATSAPP":return"https://ui-avatars.com/api/?name=".concat(t,"&background=b9c4be&color=394f42");case"TELEGRAM":return"https://ui-avatars.com/api/?name=".concat(t,"&background=8ca5b2&color=243037");case"INSTAGRAM":return"https://ui-avatars.com/api/?name=".concat(t,"&background=cabcc6&color=371e4f");case"EMAIL":return"https://ui-avatars.com/api/?name=".concat(t,"&background=a9a9a9&color=313030");default:return"https://ui-avatars.com/api/?name=".concat(t,"&background=c6d7ee&color=20262d")}}},c={isInbound:function(e){return["I","Ii"].indexOf(e)>-1},isOutbound:function(e){return["O","Oi"].indexOf(e)>-1}};a["default"].prototype.$config=r.config,a["default"].prototype.$global={MyConst:r,MyFlags:i,MyDict:s,MyFunc:c,User:o,isMobileApp:"mobile"==window.CONST.APP_VIEW}},f6c6:function(e,t,n){"use strict";var a=n("a026"),r=n("8c4f");a["default"].use(r["a"]),t["a"]={options:{},route:function(e){console.log(1,e,window.CONST.APP),e.app==window.CONST.APP&&(this.options=e)},router:function(){console.log(2,this.options,window.CONST.APP);var e=new r["a"]({mode:"history",base:this.options.base,scrollBehavior:this.options.scrollBehavior||function(){return window.scrollTo({top:0,behavior:"smooth"})},routes:this.options.routes}),t=this.options;return t.beforeEach=t.beforeEach||function(e,t,n){n()},t.accessDenied=t.accessDenied||function(e,t,n){n(!1)},t.matchNotFound=t.matchNotFound||function(e,t,n){n()},e.beforeEach((function(e,n,a){console.log(e,"--\x3e",n,e.matched),e.matched&&0!=e.matched.length?e.matched.some((function(e){return!e.meta||!window.CONST.APP_USER_ROLE||(console.log(e.meta.role,window.CONST.APP_USER_ROLE),!(e.meta.role&&e.meta.role.indexOf(window.CONST.APP_USER_ROLE)<0))}))?(console.log("NextDone"),t.beforeEach(e,n,a)):(console.log("NextFailed"),t.accessDenied(e,n,a)):(console.log("matchNotFound"),t.matchNotFound(e,n,a))})),e}}}}]);