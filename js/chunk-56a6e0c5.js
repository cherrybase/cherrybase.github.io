(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a6e0c5"],{"0423":function(t,e,s){},"1ca2":function(t,e,s){"use strict";s("e732")},"2ad1":function(t,e,s){"use strict";s("7075")},"2f21":function(t,e,s){"use strict";var a=s("79e5");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"2fdb":function(t,e,s){"use strict";var a=s("5ca1"),n=s("d2c8"),i="includes";a(a.P+a.F*s("5147")(i),"String",{includes:function(t){return!!~n(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3902:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.activeChat?s("div",t._l(t.messages,(function(e,a){return s("div",{key:a},[e?s("span",[t.$global.MyFunc.isInbound(e.type)&&(e.text||e.attachments)?s("div",{staticClass:"d-flex justify-content-start mb-4 chat-bubble",attrs:{title:e.tags?e.tags.categories:null}},[s("div",{staticClass:"msg_cotainer"},[e.replyIdExt||e.replyMessage?s("div",[s("div",{staticClass:"msg_cotainer_with_reply",attrs:{id:"reply-id-"+e.replyIdExt}},[t._v("\n                        Reply to  "),s("i",{staticClass:"fa fa-chevron-right"}),s("span",{attrs:{hidden:""}},[t._v(t._s(e.replyMessage))])]),s("b-popover",{attrs:{triggers:"hover focus",target:"reply-id-"+e.replyIdExt,"custom-class":"message-preview",placement:"right"},on:{show:function(s){return t.onReplyShow(e)}},scopedSlots:t._u([{key:"default",fn:function(){return[s("ChatMessageContent",{attrs:{message:e.replyMessage}})]},proxy:!0}],null,!0)})],1):t._e(),s("ChatMessageContent",{attrs:{message:e}})],1),s("span",{staticClass:"msg_time"},[s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))]),t._v("  "+t._s(t._f("formatDate")(e.timestamp))+"\n                "),e.logs||e.stamps?s("span",{staticClass:"msg_status_send-wrapper"},[t._v("\n                     \n                    "),e.stamps.FORWARDED?s("b-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Forwarded @ "+t.$formatters.formatStamp(e.stamps.FORWARDED),expression:"'Forwarded @ ' + $formatters.formatStamp(m.stamps.FORWARDED)"}],staticClass:"msg_status",attrs:{icon:"skip-forward-fill",variant:"dark"}}):t._e()],1):t._e()])]):t.$global.MyFunc.isOutbound(e.type)?s("div",{staticClass:"d-flex justify-content-end mb-4 chat-bubble",attrs:{"data-local-id":"m.localId","data-message-id":e.messageId}},[s("div",{staticClass:"msg_cotainer_send"},[s("ChatMessageContent",{attrs:{message:e}}),s("span",{staticClass:"msg_time_send"},[s("span",[t._v(t._s(t._f("formatDate")(e.timestamp))+"  ")]),s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))]),s("span",[t._v("  ")]),e.logs||e.stamps?s("span",{staticClass:"msg_status_send-wrapper"},[e.messageId?e.stamps.SENT_ERR?s("b-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.logs+"",expression:"m.logs+''"}],staticClass:"msg_status_send",attrs:{icon:"exclamation-triangle",scale:".8",variant:"danger"}}):e.stamps.BLCKD?s("b-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.logs+"",expression:"m.logs+''"}],staticClass:"msg_status_send",attrs:{icon:"slash-circle-fill",scale:".8",variant:"danger"}}):e.logs||e.stamps.FAILD||e.stamps.NSENT||e.stamps.SENTX_ERR?s("b-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.logs+"",expression:"m.logs+''"}],staticClass:"msg_status_send",attrs:{icon:"exclamation-triangle-fill",scale:".8",variant:"danger"}}):e.stamps.READ?s("b-icon",{staticClass:"msg_status_send",attrs:{icon:"check-all",variant:"success"}}):e.stamps.DLVRD?s("b-icon",{staticClass:"msg_status_send",attrs:{icon:"check-all",variant:"dark"}}):e.stamps.SENTX?s("b-icon",{staticClass:"msg_status_send",attrs:{icon:"check",variant:"dark"}}):e.stamps.SENT?s("b-icon",{staticClass:"msg_status_send muted",attrs:{icon:"check",variant:"muted"}}):s("b-icon",{staticClass:"msg_status_send",attrs:{icon:"check",variant:"light"}}):s("i",{staticClass:"sending fa fa-spinner fa-spin msg_status_send"},[t._v(" ")])],1):t._e()])],1)]):"A"==e.type||"L"==e.type||"N"==e.type?s("ChatMessageLog",{staticClass:"chat-bubble chat-bubble-note",attrs:{message:e}}):t._e()],1):t._e()])})),0):t._e()},n=[],i=(s("96cf"),s("3b8d")),o=(s("55dd"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center",attrs:{"data-local-id":"m.localId","data-message-id":t.m.messageId}},[t.m.messageId?t._e():s("i",{staticClass:"sending fa fa-spinner fa-spin"},[t._v(" ")]),"N"==t.m.type?s("div",{staticClass:"msg_cotainer_note"},[s("div",{staticClass:"text"},[t._v(t._s(t._f("newlines")(t._f("striphtml")(t.m.text))))]),s("span",{staticClass:"msg_user",class:{"float-right":t.m.sender==t.$global.MyConst.agent}},[t._v(t._s(t._f("blank3dash")(t.m.name)))]),s("span",{class:{"float-right":t.m.name==t.$global.MyConst.agent}},[t._v("\n            "+t._s(t._f("formatDate")(t.m.timestamp))+"  \n        ")])]):s("div",{staticClass:"msg_cotainer_action"},[t._v("\n        "+t._s(t._f("formatDate")(t.m.timestamp))+"  "),s("span",{staticClass:"msg_user"},[t._v(t._s(t._f("blank3dash")(t.m.name)))]),t._v(" "),s("span",{staticClass:"fa fa-long-arrow-alt-right"}),t._v(" "+t._s(t._f("newlines")(t._f("striphtml")(t.m.action)))+"\n        "),t.m.logs?s("span",t._l(t.m.logs,(function(e,a){return s("i",{key:a,staticClass:"prepend-comma"},[t._v("\n             "+t._s(t._f("newlines")(t._f("striphtml")(t._f("log_option")(e,t.m.action)))))])})),0):t._e()])])}),r=[],l={name:"ChatMessageLog",components:{},computed:{m:function(){return this.message}},data:function(){return{}},props:{message:{type:Object}}},c=l,u=(s("92cf"),s("2877")),d=Object(u["a"])(c,o,r,!1,null,"be560cf2",null),p=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.m?s("span",[t.m.text?s("span",{directives:[{name:"linkify",rawName:"v-linkify",value:{className:"my-clickable-link"},expression:"{ className: 'my-clickable-link'}"}]},[t._v(t._s(t._f("newlines")(t._f("striphtml")(t.m.text))))]):t._e(),t.m.attachments?s("div",[t.m.template?s("span",[s("span",{staticClass:"fa fa-paperclip"}),t._v(" "+t._s(t.m.template))]):t._e(),s("div",{staticClass:"input-group my-attachments"},t._l(t.m.attachments,(function(e){return s("span",{directives:[{name:"viewer",rawName:"v-viewer",value:t.viewerOptions,expression:"viewerOptions"}],key:e.mediaURL},["IMAGE"==e.mediaType?s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$formatters.https_thumburl(e.mediaURL),expression:"$formatters.https_thumburl(atch.mediaURL)"}],attrs:{"data-full-src":t._f("https")(e.mediaURL)}}):"AUDIO"==e.mediaType?s("audio-player",{attrs:{file:e.mediaURL}}):s("a",{staticClass:"fa fa-file-alt float-right",attrs:{href:t._f("https")(e.mediaURL)}}),s("br"),e.mediaCaption?s("small",[t._v(t._s(e.mediaCaption))]):t._e()],1)})),0)]):t.m.template?s("div",{staticClass:"my-msg-template-tag"},[s("span",{staticClass:"fa fa-tag"}),t._v(" "+t._s(t.m.template)+"\n    ")]):t._e()]):t._e()},f=[],h=s("a026"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"player"},[s("div",{staticClass:"player-controls"},[t.stoppable?s("div",{attrs:{id:"stop"}},[s("a",{attrs:{title:"Stop",href:"#"},on:{click:function(e){return e.preventDefault(),t.stop.apply(null,arguments)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{fill:"currentColor",d:"M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"}})])])]):t._e(),s("div",{attrs:{id:"play"}},[s("a",{attrs:{title:t.playing?"Pause":"Play",href:"#"},on:{click:function(e){e.preventDefault(),t.playing=!t.playing}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.playing?s("path",{attrs:{fill:"currentColor",d:"M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"}}):s("path",{attrs:{fill:"currentColor",d:"M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"}})])])]),s("div",{attrs:{id:"seek"}},[s("div",{staticClass:"player-timeline"},[s("div",{staticClass:"player-progress",style:t.progressStyle}),s("div",{staticClass:"player-seeker",attrs:{title:"Seek"},on:{click:t.seek}})]),s("div",{staticClass:"player-time"},[s("div",{staticClass:"player-time-current"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.currentSeconds)))]),s("div",{staticClass:"player-time-total"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.durationSeconds)))])])]),t.downloading?s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showVolume,expression:"!showVolume"}],attrs:{id:"download"}},[s("a",{attrs:{href:"#",title:"Download"},on:{click:function(e){return e.preventDefault(),t.download.apply(null,arguments)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{fill:"currentColor",d:"M15,7h-3V1H8v6H5l5,5L15,7z M19.338,13.532c-0.21-0.224-1.611-1.723-2.011-2.114C17.062,11.159,16.683,11,16.285,11h-1.757l3.064,2.994h-3.544c-0.102,0-0.194,0.052-0.24,0.133L12.992,16H7.008l-0.816-1.873c-0.046-0.081-0.139-0.133-0.24-0.133H2.408L5.471,11H3.715c-0.397,0-0.776,0.159-1.042,0.418c-0.4,0.392-1.801,1.891-2.011,2.114c-0.489,0.521-0.758,0.936-0.63,1.449l0.561,3.074c0.128,0.514,0.691,0.936,1.252,0.936h16.312c0.561,0,1.124-0.422,1.252-0.936l0.561-3.074C20.096,14.468,19.828,14.053,19.338,13.532z"}})])])]):t._e(),t.loopable?s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showVolume,expression:"!showVolume"}],attrs:{id:"loop"}},[s("a",{attrs:{href:"#",title:"Loop"},on:{click:function(e){e.preventDefault(),t.looping=!t.looping}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.looping?s("path",{attrs:{fill:"currentColor",d:"M20,7v7c0,1.103-0.896,2-2,2H2c-1.104,0-2-0.897-2-2V7c0-1.104,0.896-2,2-2h7V3l4,3.5L9,10V8H3v5h14V8h-3V5h4C19.104,5,20,5.896,20,7z"}}):s("path",{attrs:{fill:"currentColor",d:"M1,12V5h3v6h10V8l5,4.5L14,17v-3H3C1.895,14,1,13.104,1,12z"}})])])]):t._e(),t.mutable?s("div",{attrs:{id:"mute"}},[s("a",{attrs:{href:"#",title:"Mute"},on:{click:function(e){return e.preventDefault(),t.mute.apply(null,arguments)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.muted?s("path",{attrs:{fill:"currentColor",d:"M14.201,9.194c1.389,1.883,1.818,3.517,1.559,3.777c-0.26,0.258-1.893-0.17-3.778-1.559l-5.526,5.527c4.186,1.838,9.627-2.018,10.605-2.996c0.925-0.922,0.097-3.309-1.856-5.754L14.201,9.194z M8.667,7.941c-1.099-1.658-1.431-3.023-1.194-3.26c0.233-0.234,1.6,0.096,3.257,1.197l1.023-1.025C9.489,3.179,7.358,2.519,6.496,3.384C5.568,4.31,2.048,9.261,3.265,13.341L8.667,7.941z M18.521,1.478c-0.39-0.391-1.023-0.391-1.414,0L1.478,17.108c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.023,0.391,1.414,0l15.629-15.63C18.912,2.501,18.912,1.868,18.521,1.478z"}}):s("path",{attrs:{fill:"currentColor",d:"M5.312,4.566C4.19,5.685-0.715,12.681,3.523,16.918c4.236,4.238,11.23-0.668,12.354-1.789c1.121-1.119-0.335-4.395-3.252-7.312C9.706,4.898,6.434,3.441,5.312,4.566z M14.576,14.156c-0.332,0.328-2.895-0.457-5.364-2.928C6.745,8.759,5.956,6.195,6.288,5.865c0.328-0.332,2.894,0.457,5.36,2.926C14.119,11.258,14.906,13.824,14.576,14.156zM15.434,5.982l1.904-1.906c0.391-0.391,0.391-1.023,0-1.414c-0.39-0.391-1.023-0.391-1.414,0L14.02,4.568c-0.391,0.391-0.391,1.024,0,1.414C14.41,6.372,15.043,6.372,15.434,5.982z M11.124,3.8c0.483,0.268,1.091,0.095,1.36-0.388l1.087-1.926c0.268-0.483,0.095-1.091-0.388-1.36c-0.482-0.269-1.091-0.095-1.36,0.388L10.736,2.44C10.468,2.924,10.642,3.533,11.124,3.8z M19.872,6.816c-0.267-0.483-0.877-0.657-1.36-0.388l-1.94,1.061c-0.483,0.268-0.657,0.878-0.388,1.36c0.268,0.483,0.877,0.657,1.36,0.388l1.94-1.061C19.967,7.907,20.141,7.299,19.872,6.816z"}})])])]):t._e(),t.volumable?s("div",{attrs:{id:"volume"}},[s("a",{attrs:{title:t.volumeTitle,href:"#"},on:{click:function(t){t.preventDefault()},mouseenter:function(e){t.showVolume=!0},mouseleave:function(e){t.showVolume=!1}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{fill:"currentColor",d:"M19,13.805C19,14.462,18.462,15,17.805,15H1.533c-0.88,0-0.982-0.371-0.229-0.822l16.323-9.055C18.382,4.67,19,5.019,19,5.9V13.805z"}})]),s("input",{directives:[{name:"model",rawName:"v-model.lazy.number",value:t.volume,expression:"volume",modifiers:{lazy:!0,number:!0}},{name:"show",rawName:"v-show",value:t.showVolume,expression:"showVolume"}],staticClass:"player-volume",attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.volume},on:{change:function(e){t.volume=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})])]):t._e()]),s("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{loop:t.looping,src:t.file,preload:"auto"},on:{timeupdate:t.update,loadeddata:t.load,pause:function(e){t.playing=!1},play:function(e){t.playing=!0}}})])},g=[],_={props:{stoppable:{type:Boolean,default:!1},downloading:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},file:{type:String,default:null},loop:{type:Boolean,default:!1},loopable:{type:Boolean,default:!1},mutable:{type:Boolean,default:!1},volumable:{type:Boolean,default:!1}},data:function(){return{currentSeconds:0,durationSeconds:0,loaded:!1,looping:!1,playing:!1,previousVolume:35,showVolume:!1,volume:100}},computed:{muted:function(){return this.volume/100===0},percentComplete:function(){return parseInt(this.currentSeconds/this.durationSeconds*100)},progressStyle:function(){return{width:"".concat(this.percentComplete,"%")}},volumeTitle:function(){return"Volume (".concat(this.volume,"%)")}},filters:{convertTimeHHMMSS:function(t){t=t||0;var e=new Date(1e3*t).toISOString().substr(11,8);return 0===e.indexOf("00:")?e.substr(3):e}},watch:{playing:function(t){if(t)return this.$refs.audio.play();this.$refs.audio.pause()},volume:function(t){this.$refs.audio.volume=this.volume/100}},methods:{download:function(){this.stop(),window.open(this.file,"download")},load:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.$refs.audio.readyState>=2)){t.next=11;break}this.loaded=!0;case 2:if(this.$refs.audio.duration!==1/0){t.next=8;break}return t.next=5,new Promise((function(t){return setTimeout(t,1e3)}));case 5:this.$refs.audio.currentTime=1e7*Math.random(),t.next=2;break;case 8:return this.durationSeconds=parseInt(this.$refs.audio.duration),this.$refs.audio.currentTime=0,t.abrupt("return",this.playing=this.autoPlay);case 11:throw new Error("Failed to load sound file.");case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mute:function(){if(this.muted)return this.volume=this.previousVolume;this.previousVolume=this.volume,this.volume=0},seek:function(t){if(this.loaded){var e=t.target.getBoundingClientRect(),s=(t.clientX-e.left)/e.width;this.$refs.audio.currentTime=parseInt(this.$refs.audio.duration*s)}},stop:function(){this.playing=!1,this.$refs.audio.currentTime=0},update:function(t){this.currentSeconds=parseInt(this.$refs.audio.currentTime)}},created:function(){this.looping=this.loop}},C=_,y=(s("7495"),Object(u["a"])(C,v,g,!1,null,"6cda991c",null)),b=y.exports;const w={URL0:/(https?:\/\/[^\s]+)/gim,URL:/\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,PSEUDO_URL:/\bwww\.[\S]+\.[\S]+/gim,EMAIL_ADDRESS:/[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim},x={DEFAULT:"_blank"};function S(t=""){return[...t.matchAll(w.EMAIL_ADDRESS),...t.matchAll(w.URL)].flat()}function k(t){if(R(t)){const e=D(t?t.className:null),s=$(t?t.target:null);return`${e} ${s}`}return $()}function M(t,e,s){return null!==e.match(w.EMAIL_ADDRESS)&&(t=L(t,e,s)),null===e.match(w.URL)&&null===e.match(w.PSEUDO_URL)||(t=T(t,e,s)),t}function R(t){return t&&"object"===typeof t&&null!==t&&!Array.isArray(t)}function D(t){return t?`class="${t}"`:""}function $(t){return`target="${t||x.DEFAULT}"`}function L(t,e,s){return t.replace(e,`<a ${s} href="mailto:${e}">${e}</a>`)}function T(t,e,s){const a=-1===e.toLowerCase().indexOf("http")&&-1===e.toLowerCase().indexOf("ftp")?"//":"";return t.replace(e,`<a ${s} href="${a+e.trim()}">${e}</a>`)}function O(t,e){t.innerHTML=t.textContent.split(" ").map(t=>{let s=S(t)||[];if(s.length){const a=k(e);s.forEach(e=>{t=M(t,e,a)})}return t}).join(" ")}const A={bind:function(t,e){O(t,e?e.value:null)},componentUpdated:function(t,e,s){const a=t;a.textContent="",s&&s.children&&s.children[0]&&s.children[0].text&&(a.textContent=s.children[0].text),O(a,e?e.value:null)}};h["default"].use(A);var E={name:"ChatMessageContent",components:{AudioPlayer:b},directives:{linkify:A},computed:{m:function(t){return this.message}},data:function(){return{viewerOptions:{url:"data-full-src"}}},props:{message:{type:Object,default:function(){return{text:""}}}}},I=E,N=(s("71db"),s("6a3f"),Object(u["a"])(I,m,f,!1,null,"dff2e776",null)),P=N.exports,U={name:"ChatMessages",components:{ChatMessageLog:p,ChatMessageContent:P},computed:{messages:function(){var t=this.activeChat.sessionId;return(this.activeChat.messages||[]).filter((function(e){return t==e.sessionId})).sort((function(t,e){return t.timestamp-e.timestamp}))}},data:function(){return{}},methods:{onReplyShow:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.activeChat&&this.activeChat.messages)for(s in this.activeChat.messages)e.replyIdExt&&this.activeChat.messages[s].messageIdExt==e.replyIdExt&&(e.replyMessage=this.activeChat.messages[s]);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},props:{activeChat:{type:Object}}},V=U,z=(s("1ca2"),Object(u["a"])(V,a,n,!1,null,"3c95011e",null));e["a"]=z.exports},"3e84":function(t,e,s){"use strict";e["a"]={name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"},useHidden:{type:Boolean,default:!0}},data:function(){return{style:{},initial:!1,hidden:!1}},watch:{active:function(){this.layout()}},render:function(t){return t(this.tag,{style:this.style,attrs:this.attrs,ref:"container",on:{transitionend:this.onTransitionEnd}},this.$slots.default)},mounted:function(){this.layout(),this.initial=!0},created:function(){this.hidden=!this.active},computed:{el:function(){return this.$refs.container},attrs:function(){var t={"aria-hidden":!this.active,"aria-expanded":this.active};return this.useHidden&&(t.hidden=this.hidden),t}},methods:{layout:function(){var t=this;this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",(function(){return t.el.scrollHeight+"px"}))):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",(function(){return"0px"})))},asap:function(t){this.initial?this.$nextTick(t):t()},setHeight:function(t,e){var s=this;this.style={height:t},this.asap((function(){s.__=s.el.scrollHeight,s.style={height:e(),overflow:"hidden","transition-property":"height","transition-duration":s.duration+"ms"}}))},onTransitionEnd:function(t){t.target===this.el&&(this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end")))}}}},"457f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("master-view",{attrs:{id:"agent-session-list",header:{heading:t.heading,subheading:t.subheading,icon:t.icon},filters:[{label:"Date Range",name:"daterange"},{label:"Refresh",name:"sync"}],table:Object.assign({},t.sessions,{items:t.filtered}),busy:t.sessions.busy},scopedSlots:t._u([{key:"filter(sync)",fn:function(){return[s("span",{staticClass:"btn btn-success",on:{click:t.loadSessions}},[s("i",{staticClass:"fa fa-sync"})])]},proxy:!0},{key:"filter(daterange)",fn:function(){return[s("MyDatePicker",{attrs:{daterange:t.input.daterange},on:{dateRangeOninit:t.dateRangeOnUpdate,dateRangeOnUpdate:t.dateRangeOnUpdate}})]},proxy:!0},{key:"top-row",fn:function(e){return[s("b-th",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.assignedToAgent,expression:"filters.assignedToAgent"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.filters.assignedToAgent},on:{input:function(e){e.target.composing||t.$set(t.filters,"assignedToAgent",e.target.value)}}})]),s("b-th",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.contactName,expression:"filters.contactName"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.filters.contactName},on:{input:function(e){e.target.composing||t.$set(t.filters,"contactName",e.target.value)}}})]),s("b-th",[t._v(" ")]),s("b-th",[t._v(" ")]),s("b-th",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.fistResponseStamp,expression:"filters.fistResponseStamp"}],staticClass:"form-control form-control-sm",on:{click:function(t){t.stopPropagation(),t.preventDefault()},change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"fistResponseStamp",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("--")]),t._l(t.fistResponseOptions,(function(e){return s("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])}))],2)]),s("b-th",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.closeSessionStamp,expression:"filters.closeSessionStamp"}],staticClass:"form-control form-control-sm",on:{click:function(t){t.stopPropagation(),t.preventDefault()},change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"closeSessionStamp",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("--")]),t._l(t.closeSessionOptions,(function(e){return s("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])}))],2)])]}},{key:"cell(assignedToAgent)",fn:function(e){return[s("my-icon",{attrs:{type:"chatmode",value:e.item.mode}}),t._v("\n                "+t._s(e.item.assignedToAgent)+"\n                "),e.item.assignedToDept?s("span",[t._v("\n                  ("+t._s(e.item.assignedToDept)+")\n                ")]):t._e(),e.item.assignedToQueue?s("span",[t._v("\n                  | "+t._s(e.item.assignedToQueue)+"\n                ")]):t._e()]}},{key:"cell(contactId)",fn:function(e){return[s("i",{staticClass:"fab",class:t.MyDict.socialPrefix(e.item.contactId)}),t._v("\n                "+t._s(e.item.contactName||e.item.contactId)+"\n\n                "),s("span",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"template-details-"+e.index}}),s("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+e.index,"custom-class":"message-preview"},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"message-text"},[t._v("Name : "+t._s(e.item.contactName))]),s("div",{staticClass:"message-text"},[t._v("Id : "+t._s(e.item.contactId))]),s("div",{staticClass:"message-text"},[t._v("Session : "+t._s(e.item.sessionId))]),s("div",{staticClass:"message-text"},[t._v("_searchText : "+t._s(e.item._searchText))])]},proxy:!0}],null,!0)})]}},{key:"cell(startSessionStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.startSessionStamp))+"\n            ")]}},{key:"cell(fistResponseStamp)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.fistResponseStamp))+" \n            ")]}},{key:"cell(closeSessionStamp)",fn:function(e){return[s("span",{staticClass:"fa fa-circle text-xs",class:{"text-success":e.item.local.open,"text-danger":e.item.local.expired,"text-info":e.item.local.resolved}}),t._v("\n                  "+t._s(t._f("formatDate")(e.item.closeSessionStamp))+"\n            ")]}},{key:"cell(actions)",fn:function(e){return[s("span",{staticClass:"far fa-comment-alt mg-1 pointer",on:{click:function(s){return t.showChat(e.item,e.index,s.target)}}})]}}])}),s("div",{staticClass:"chat_archive",class:{closed:!t.session}},[t.session?s("agent-chat",{key:t.session.sessionId,attrs:{session:t.session},on:{close:t.hideChat,update:t.updateChat}}):t._e()],1)],1)},n=[],i=(s("96cf"),s("3b8d")),o=(s("6762"),s("2fdb"),s("ac6a"),s("456d"),s("e492")),r=s("d166"),l=s("df4b"),c=s("6172"),u={components:{PageTitle:o["a"],AgentChat:l["a"]},computed:{filtered:function(){var t=this;if(!this.sessions.items.length)return[];var e=this.sessions.items.filter((function(e){return Object.keys(t.filters).every((function(s){var a,n,i,o;if("closeSessionStamp"===s)switch(t.filters[s]){case"resolved":return null===e||void 0===e||null===(a=e.local)||void 0===a?void 0:a.resolved;case"opened":return null===e||void 0===e||null===(n=e.local)||void 0===n?void 0:n.active;case"expired":return null===e||void 0===e||null===(i=e.local)||void 0===i?void 0:i.expired;case"closed":return null===e||void 0===e||null===(o=e.local)||void 0===o?void 0:o.closed;default:return!0}else{if("fistResponseStamp"!==s)return"contactName"===s?String(e._searchText).toLowerCase().includes(t.filters[s].toLowerCase()):String(e[s]).toLowerCase().includes(t.filters[s].toLowerCase());switch(t.filters[s]){case 0:return 0==e[s];case"attended":return 0!=e[s];default:return!0}}}))}));return e.length>0?e:[]}},data:function(){return{MyFlags:r["c"],MyDict:r["b"],MyConst:r["a"],heading:"Chat Sessions",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-chalkboard-teacher",sessions:{sortBy:"assignedToAgent",sortDesc:!1,fields:[{key:"assignedToAgent",label:"Assigned",sortable:!0},{key:"contactId",label:"Contact",sortable:!1},{key:"actions",label:"Action",sortable:!1},{key:"startSessionStamp",label:"Start@",sortable:!0},{key:"fistResponseStamp",label:"Agent@",sortable:!1},{key:"closeSessionStamp",label:"Closed@",sortable:!0}],items:[],perPage:25,currentPage:1,rows:0,busy:!1},closeSessionOptions:[{label:"Closed",value:"closed"},{label:"Expired",value:"expired"},{label:"Resolved",value:"resolved"},{label:"Open",value:"opened"}],fistResponseOptions:[{label:"Attended",value:"attended"},{label:"Not Attended",value:0}],filters:{assignedToAgent:"",contactName:"",closeSessionStamp:"",fistResponseStamp:""},input:{daterange:{startDate:null,endDate:null,span:"Today"}},session:null}},mounted:function(t){},methods:{loadSessions:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.input.daterange.startDate){t.next=3;break}return console.error("No Data Range Specified"),t.abrupt("return");case 3:return this.sessions.busy=!0,t.prev=4,t.next=7,this.$store.dispatch("GetSessions",{agent:"TEAM",contactType:"MESSAGE_TWITTER",startStamp:this.input.daterange.startDate,endStamp:this.input.daterange.endDate});case 7:e=t.sent,this.sessions.items=e.results.map((function(t){return c["a"].session(t)})),this.sessions.rows=this.sessions.items.length,console.log("sessions",e,this.sessions);case 11:return t.prev=11,this.sessions.busy=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[4,,11,14]])})));function e(){return t.apply(this,arguments)}return e}(),dateRangeOnUpdate:function(t){console.log("dateRangeOnUpdate",t),this.input.daterange.startDate=t.startDate,this.input.daterange.endDate=t.endDate,this.loadSessions()},deleteChat:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("DeleteSessionChats",e);case 2:t.sent,this.sessions.items.splice(s,1);case 4:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}(),hideChat:function(t){this.session=null},showChat:function(t){this.session&&this.session.sessionId==t.sessionId?this.session=null:this.session=t},updateChat:function(t){this.loadSessions()}}},d=u,p=(s("a5dc"),s("2877")),m=Object(p["a"])(d,a,n,!1,null,"40e168da",null);e["default"]=m.exports},"49e0":function(t,e,s){},"55dd":function(t,e,s){"use strict";var a=s("5ca1"),n=s("d8e8"),i=s("4bf8"),o=s("79e5"),r=[].sort,l=[1,2,3];a(a.P+a.F*(o((function(){l.sort(void 0)}))||!o((function(){l.sort(null)}))||!s("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(i(this)):r.call(i(this),n(t))}})},6762:function(t,e,s){"use strict";var a=s("5ca1"),n=s("c366")(!0);a(a.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"6a3f":function(t,e,s){"use strict";s("0423")},7075:function(t,e,s){},"71db":function(t,e,s){"use strict";s("a0c7")},7495:function(t,e,s){"use strict";s("49e0")},"92cf":function(t,e,s){"use strict";s("b9e7")},a0c7:function(t,e,s){},a5dc:function(t,e,s){"use strict";s("ab59")},ab59:function(t,e,s){},b9e7:function(t,e,s){},df4b:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-shadow chat_box_wrapper"},[s("div",{staticClass:"card-header msg_head chat-head"},[s("div",{staticClass:"d-flex bd-highlight chat-header-left"},[t.activeChat?s("div",{staticClass:"img_cont",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("img",{staticClass:"rounded-circle user_img",attrs:{src:t.activeChat.profilePic||t.MyDict.profilePic}}),s("span",{staticClass:"online_icon",attrs:{hidden:""}})]):t._e(),t.activeChat?s("div",{staticClass:"user_info",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("span",{staticClass:"user_name"},[t._v(t._s(t.activeChat.name))]),t.activeChat.ilastmsg?s("p",{staticClass:"user_text"},[t._v(t._s(t._f("formatDate")(t.activeChat.ilastmsg.timestamp))+" ")]):t._e()]):t._e(),s("div",{staticClass:"video_cam"},[t._m(0),t._m(1),s("span",{attrs:{hidden:""},on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("i",{staticClass:"fas fa-history"})])])]),s("div",{staticClass:"chat-header-right"},[s("div",{staticClass:"video_cam"},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Close",expression:"'Close'"}],staticStyle:{cursor:"pointer"},on:{click:t.closeBox}},[s("i",{staticClass:"fa fa-close"})])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showMediaOptions,expression:"!showMediaOptions"}],staticClass:"card-body msg_card_body"},[s("div",{staticClass:"msg_card_body-bubbles"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots",opacity:.3,"is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),t.activeChat?s("ChatMessages",{attrs:{activeChat:t.activeChat}}):s("div",{staticClass:"msg_card_body-logo"},[s("span",{})])],1)]),s("div",{staticClass:"card-footer"},[s("b-row",[s("b-col",{attrs:{cols:"6"}},[t.activeChat.local&&t.activeChat.local.open?s("span",{staticClass:"btn btn-primary",on:{click:t.closeChat}},[t._v("\n                            Close Chat\n                            ")]):t._e()]),s("b-col",{attrs:{cols:"6"}},[t.activeChat.local&&t.activeChat.local.open?s("BaseVSelect",{staticClass:"text-sm w-100 float-left",attrs:{size:"sm","auto-position":"",options:"getx:/api/config/inbound_queue",optionKey:"code",optionLabel:"code"},on:{change:t.inboundQueueUpdate},model:{value:t.activeChat.assignedToQueue,callback:function(e){t.$set(t.activeChat,"assignedToQueue",e)},expression:"activeChat.assignedToQueue"}}):t._e()],1)],1)],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-video"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-phone"})])}],i=(s("96cf"),s("3b8d")),o=s("d166"),r=s("9062"),l=s.n(r),c=s("3e84"),u=s("3902"),d=s("6172"),p={components:{Loading:l.a,SlideUpDown:c["a"],ChatMessages:u["a"]},props:{session:Object},computed:{},data:function(){return{message_text:"",quickReplies:null,selectedMedia:null,showMediaOptions:!1,showChatOptions:!1,lastMessageId:null,ilastMessageId:null,MyDict:o["b"],MyFlags:o["c"],MyConst:o["a"],isLoading:!1,showQuickActions:!1,activeChat:{messages:null}}},created:function(){console.log("created")},updated:function(){console.log("updated")},mounted:function(){this.loadMessages(),this.loadQuickLabels()},beforeUnmount:function(){},methods:{loadMessages:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("GetSessionChats..."),this.isLoading=!0,t.next=4,this.$store.dispatch("GetSessionChats",this.session);case 4:e=t.sent,console.log("resp",e),this.activeChat=d["a"].session(e),this.isLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closeBox:function(t){this.$emit("close")},closeChat:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.submit("/api/message/session/close",{sessionId:this.activeChat.sessionId});case 2:this.loadMessages(),this.$emit("update");case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),inboundQueueUpdate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("this.activeChat.assignedToQueue",this.activeChat.assignedToQueue),t.next=3,this.$service.submit("/api/message/session/route",{sessionId:this.activeChat.sessionId,queue:this.activeChat.assignedToQueue||""});case 3:this.loadMessages(),this.$emit("update");case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadQuickLabels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("LoadQuickLabels");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},m=p,f=(s("2ad1"),s("2877")),h=Object(f["a"])(m,a,n,!1,null,"79c53453",null);e["a"]=h.exports},e732:function(t,e,s){}}]);