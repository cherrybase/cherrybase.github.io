(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d45166c8"],{"0423":function(t,e,s){},1798:function(t,e,s){},"2f21":function(t,e,s){"use strict";var a=s("79e5");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},3902:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.activeChat?s("div",t._l(t.messages,(function(e,a){return s("div",{key:a},[e?s("span",[t.$global.MyFunc.isInbound(e.type)&&(e.text||e.attachments)?s("div",{staticClass:"d-flex justify-content-start mb-4 chat-bubble",attrs:{title:e.tags?e.tags.categories:null}},[s("div",{staticClass:"msg_cotainer"},[e.replyIdExt||e.replyMessage?s("div",[s("div",{staticClass:"msg_cotainer_with_reply",attrs:{id:"reply-id-"+e.replyIdExt}},[t._v("\n                        Reply to  "),s("i",{staticClass:"fa fa-chevron-right"}),s("span",{attrs:{hidden:""}},[t._v(t._s(e.replyMessage))])]),s("b-popover",{attrs:{triggers:"hover focus",target:"reply-id-"+e.replyIdExt,"custom-class":"message-preview",placement:"right"},on:{show:function(s){return t.onReplyShow(e)}},scopedSlots:t._u([{key:"default",fn:function(){return[s("ChatMessageContent",{attrs:{message:e.replyMessage}})]},proxy:!0}],null,!0)})],1):t._e(),s("ChatMessageContent",{attrs:{message:e}})],1),s("span",{staticClass:"msg_time"},[s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))]),t._v("  "+t._s(t._f("formatDate")(e.timestamp)))])]):t.$global.MyFunc.isOutbound(e.type)?s("div",{staticClass:"d-flex justify-content-end mb-4 chat-bubble",attrs:{"data-local-id":"m.localId","data-message-id":e.messageId}},[s("div",{staticClass:"msg_cotainer_send"},[s("ChatMessageContent",{attrs:{message:e}}),s("span",{staticClass:"msg_time_send"},[s("span",[t._v(t._s(t._f("formatDate")(e.timestamp))+"  ")]),s("span",{staticClass:"msg_user"},[t._v(t._s(e.name||"---"))]),s("span",[t._v("  ")]),e.logs||e.stamps?s("span",{staticClass:"msg_status_send-wrapper"},[e.messageId?e.stamps.SENT_ERR?s("b-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.logs+"",expression:"m.logs+''"}],staticClass:"msg_status_send",attrs:{icon:"exclamation-triangle",scale:".8",variant:"danger"}}):e.stamps.BLCKD?s("b-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.logs+"",expression:"m.logs+''"}],staticClass:"msg_status_send",attrs:{icon:"slash-circle-fill",scale:".8",variant:"danger"}}):e.logs||e.stamps.FAILD||e.stamps.NSENT||e.stamps.SENTX_ERR?s("b-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.logs+"",expression:"m.logs+''"}],staticClass:"msg_status_send",attrs:{icon:"exclamation-triangle-fill",scale:".8",variant:"danger"}}):e.stamps.READ?s("b-icon",{staticClass:"msg_status_send",attrs:{icon:"check-all",variant:"success"}}):e.stamps.DLVRD?s("b-icon",{staticClass:"msg_status_send",attrs:{icon:"check-all",variant:"dark"}}):e.stamps.SENTX?s("b-icon",{staticClass:"msg_status_send",attrs:{icon:"check",variant:"dark"}}):e.stamps.SENT?s("b-icon",{staticClass:"msg_status_send muted",attrs:{icon:"check",variant:"muted"}}):s("b-icon",{staticClass:"msg_status_send",attrs:{icon:"check",variant:"light"}}):s("i",{staticClass:"sending fa fa-spinner fa-spin msg_status_send"},[t._v(" ")])],1):t._e()])],1)]):"A"==e.type||"L"==e.type||"N"==e.type?s("ChatMessageLog",{staticClass:"chat-bubble chat-bubble-note",attrs:{message:e}}):t._e()],1):t._e()])})),0):t._e()},n=[],i=(s("96cf"),s("3b8d")),r=(s("55dd"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center",attrs:{"data-local-id":"m.localId","data-message-id":t.m.messageId}},[t.m.messageId?t._e():s("i",{staticClass:"sending fa fa-spinner fa-spin"},[t._v(" ")]),"N"==t.m.type?s("div",{staticClass:"msg_cotainer_note"},[s("div",{staticClass:"text"},[t._v(t._s(t._f("newlines")(t._f("striphtml")(t.m.text))))]),s("span",{staticClass:"msg_user",class:{"float-right":t.m.sender==t.$global.MyConst.agent}},[t._v(t._s(t._f("blank3dash")(t.m.name)))]),s("span",{class:{"float-right":t.m.name==t.$global.MyConst.agent}},[t._v("\n            "+t._s(t._f("formatDate")(t.m.timestamp))+"  \n        ")])]):s("div",{staticClass:"msg_cotainer_action"},[t._v("\n        "+t._s(t._f("formatDate")(t.m.timestamp))+"  "),s("span",{staticClass:"msg_user"},[t._v(t._s(t._f("blank3dash")(t.m.name)))]),t._v(" "),s("span",{staticClass:"fa fa-long-arrow-alt-right"}),t._v(" "+t._s(t._f("newlines")(t._f("striphtml")(t.m.action)))+"\n        "),t.m.logs?s("span",t._l(t.m.logs,(function(e,a){return s("i",{key:a,staticClass:"prepend-comma"},[t._v("\n             "+t._s(t._f("newlines")(t._f("striphtml")(t._f("log_option")(e,t.m.action)))))])})),0):t._e()])])}),o=[],l={name:"ChatMessageLog",components:{},computed:{m:function(){return this.message}},data:function(){return{}},props:{message:{type:Object}}},c=l,u=(s("92cf"),s("2877")),p=Object(u["a"])(c,r,o,!1,null,"be560cf2",null),d=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.m?s("span",[t.m.text?s("span",{directives:[{name:"linkify",rawName:"v-linkify",value:{className:"my-clickable-link"},expression:"{ className: 'my-clickable-link'}"}]},[t._v(t._s(t._f("newlines")(t._f("striphtml")(t.m.text))))]):t._e(),t.m.attachments?s("div",[t.m.template?s("span",[s("span",{staticClass:"fa fa-paperclip"}),t._v(" "+t._s(t.m.template))]):t._e(),s("div",{staticClass:"input-group my-attachments"},t._l(t.m.attachments,(function(e){return s("span",{directives:[{name:"viewer",rawName:"v-viewer",value:t.viewerOptions,expression:"viewerOptions"}],key:e.mediaURL},["IMAGE"==e.mediaType?s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$formatters.https_thumburl(e.mediaURL),expression:"$formatters.https_thumburl(atch.mediaURL)"}],attrs:{"data-full-src":t._f("https")(e.mediaURL)}}):"AUDIO"==e.mediaType?s("audio-player",{attrs:{file:e.mediaURL}}):s("a",{staticClass:"fa fa-file-alt float-right",attrs:{href:t._f("https")(e.mediaURL)}}),s("br"),e.mediaCaption?s("small",[t._v(t._s(e.mediaCaption))]):t._e()],1)})),0)]):t.m.template?s("div",{staticClass:"my-msg-template-tag"},[s("span",{staticClass:"fa fa-tag"}),t._v(" "+t._s(t.m.template)+"\n    ")]):t._e()]):t._e()},f=[],m=s("a026"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"player"},[s("div",{staticClass:"player-controls"},[t.stoppable?s("div",{attrs:{id:"stop"}},[s("a",{attrs:{title:"Stop",href:"#"},on:{click:function(e){return e.preventDefault(),t.stop.apply(null,arguments)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{fill:"currentColor",d:"M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"}})])])]):t._e(),s("div",{attrs:{id:"play"}},[s("a",{attrs:{title:t.playing?"Pause":"Play",href:"#"},on:{click:function(e){e.preventDefault(),t.playing=!t.playing}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.playing?s("path",{attrs:{fill:"currentColor",d:"M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"}}):s("path",{attrs:{fill:"currentColor",d:"M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"}})])])]),s("div",{attrs:{id:"seek"}},[s("div",{staticClass:"player-timeline"},[s("div",{staticClass:"player-progress",style:t.progressStyle}),s("div",{staticClass:"player-seeker",attrs:{title:"Seek"},on:{click:t.seek}})]),s("div",{staticClass:"player-time"},[s("div",{staticClass:"player-time-current"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.currentSeconds)))]),s("div",{staticClass:"player-time-total"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.durationSeconds)))])])]),t.downloading?s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showVolume,expression:"!showVolume"}],attrs:{id:"download"}},[s("a",{attrs:{href:"#",title:"Download"},on:{click:function(e){return e.preventDefault(),t.download.apply(null,arguments)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{fill:"currentColor",d:"M15,7h-3V1H8v6H5l5,5L15,7z M19.338,13.532c-0.21-0.224-1.611-1.723-2.011-2.114C17.062,11.159,16.683,11,16.285,11h-1.757l3.064,2.994h-3.544c-0.102,0-0.194,0.052-0.24,0.133L12.992,16H7.008l-0.816-1.873c-0.046-0.081-0.139-0.133-0.24-0.133H2.408L5.471,11H3.715c-0.397,0-0.776,0.159-1.042,0.418c-0.4,0.392-1.801,1.891-2.011,2.114c-0.489,0.521-0.758,0.936-0.63,1.449l0.561,3.074c0.128,0.514,0.691,0.936,1.252,0.936h16.312c0.561,0,1.124-0.422,1.252-0.936l0.561-3.074C20.096,14.468,19.828,14.053,19.338,13.532z"}})])])]):t._e(),t.loopable?s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showVolume,expression:"!showVolume"}],attrs:{id:"loop"}},[s("a",{attrs:{href:"#",title:"Loop"},on:{click:function(e){e.preventDefault(),t.looping=!t.looping}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.looping?s("path",{attrs:{fill:"currentColor",d:"M20,7v7c0,1.103-0.896,2-2,2H2c-1.104,0-2-0.897-2-2V7c0-1.104,0.896-2,2-2h7V3l4,3.5L9,10V8H3v5h14V8h-3V5h4C19.104,5,20,5.896,20,7z"}}):s("path",{attrs:{fill:"currentColor",d:"M1,12V5h3v6h10V8l5,4.5L14,17v-3H3C1.895,14,1,13.104,1,12z"}})])])]):t._e(),t.mutable?s("div",{attrs:{id:"mute"}},[s("a",{attrs:{href:"#",title:"Mute"},on:{click:function(e){return e.preventDefault(),t.mute.apply(null,arguments)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.muted?s("path",{attrs:{fill:"currentColor",d:"M14.201,9.194c1.389,1.883,1.818,3.517,1.559,3.777c-0.26,0.258-1.893-0.17-3.778-1.559l-5.526,5.527c4.186,1.838,9.627-2.018,10.605-2.996c0.925-0.922,0.097-3.309-1.856-5.754L14.201,9.194z M8.667,7.941c-1.099-1.658-1.431-3.023-1.194-3.26c0.233-0.234,1.6,0.096,3.257,1.197l1.023-1.025C9.489,3.179,7.358,2.519,6.496,3.384C5.568,4.31,2.048,9.261,3.265,13.341L8.667,7.941z M18.521,1.478c-0.39-0.391-1.023-0.391-1.414,0L1.478,17.108c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.023,0.391,1.414,0l15.629-15.63C18.912,2.501,18.912,1.868,18.521,1.478z"}}):s("path",{attrs:{fill:"currentColor",d:"M5.312,4.566C4.19,5.685-0.715,12.681,3.523,16.918c4.236,4.238,11.23-0.668,12.354-1.789c1.121-1.119-0.335-4.395-3.252-7.312C9.706,4.898,6.434,3.441,5.312,4.566z M14.576,14.156c-0.332,0.328-2.895-0.457-5.364-2.928C6.745,8.759,5.956,6.195,6.288,5.865c0.328-0.332,2.894,0.457,5.36,2.926C14.119,11.258,14.906,13.824,14.576,14.156zM15.434,5.982l1.904-1.906c0.391-0.391,0.391-1.023,0-1.414c-0.39-0.391-1.023-0.391-1.414,0L14.02,4.568c-0.391,0.391-0.391,1.024,0,1.414C14.41,6.372,15.043,6.372,15.434,5.982z M11.124,3.8c0.483,0.268,1.091,0.095,1.36-0.388l1.087-1.926c0.268-0.483,0.095-1.091-0.388-1.36c-0.482-0.269-1.091-0.095-1.36,0.388L10.736,2.44C10.468,2.924,10.642,3.533,11.124,3.8z M19.872,6.816c-0.267-0.483-0.877-0.657-1.36-0.388l-1.94,1.061c-0.483,0.268-0.657,0.878-0.388,1.36c0.268,0.483,0.877,0.657,1.36,0.388l1.94-1.061C19.967,7.907,20.141,7.299,19.872,6.816z"}})])])]):t._e(),t.volumable?s("div",{attrs:{id:"volume"}},[s("a",{attrs:{title:t.volumeTitle,href:"#"},on:{click:function(t){t.preventDefault()},mouseenter:function(e){t.showVolume=!0},mouseleave:function(e){t.showVolume=!1}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{fill:"currentColor",d:"M19,13.805C19,14.462,18.462,15,17.805,15H1.533c-0.88,0-0.982-0.371-0.229-0.822l16.323-9.055C18.382,4.67,19,5.019,19,5.9V13.805z"}})]),s("input",{directives:[{name:"model",rawName:"v-model.lazy.number",value:t.volume,expression:"volume",modifiers:{lazy:!0,number:!0}},{name:"show",rawName:"v-show",value:t.showVolume,expression:"showVolume"}],staticClass:"player-volume",attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.volume},on:{change:function(e){t.volume=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})])]):t._e()]),s("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{loop:t.looping,src:t.file,preload:"auto"},on:{timeupdate:t.update,loadeddata:t.load,pause:function(e){t.playing=!1},play:function(e){t.playing=!0}}})])},v=[],_={props:{stoppable:{type:Boolean,default:!1},downloading:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},file:{type:String,default:null},loop:{type:Boolean,default:!1},loopable:{type:Boolean,default:!1},mutable:{type:Boolean,default:!1},volumable:{type:Boolean,default:!1}},data:function(){return{currentSeconds:0,durationSeconds:0,loaded:!1,looping:!1,playing:!1,previousVolume:35,showVolume:!1,volume:100}},computed:{muted:function(){return this.volume/100===0},percentComplete:function(){return parseInt(this.currentSeconds/this.durationSeconds*100)},progressStyle:function(){return{width:"".concat(this.percentComplete,"%")}},volumeTitle:function(){return"Volume (".concat(this.volume,"%)")}},filters:{convertTimeHHMMSS:function(t){t=t||0;var e=new Date(1e3*t).toISOString().substr(11,8);return 0===e.indexOf("00:")?e.substr(3):e}},watch:{playing:function(t){if(t)return this.$refs.audio.play();this.$refs.audio.pause()},volume:function(t){this.$refs.audio.volume=this.volume/100}},methods:{download:function(){this.stop(),window.open(this.file,"download")},load:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.$refs.audio.readyState>=2)){t.next=11;break}this.loaded=!0;case 2:if(this.$refs.audio.duration!==1/0){t.next=8;break}return t.next=5,new Promise((function(t){return setTimeout(t,1e3)}));case 5:this.$refs.audio.currentTime=1e7*Math.random(),t.next=2;break;case 8:return this.durationSeconds=parseInt(this.$refs.audio.duration),this.$refs.audio.currentTime=0,t.abrupt("return",this.playing=this.autoPlay);case 11:throw new Error("Failed to load sound file.");case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mute:function(){if(this.muted)return this.volume=this.previousVolume;this.previousVolume=this.volume,this.volume=0},seek:function(t){if(this.loaded){var e=t.target.getBoundingClientRect(),s=(t.clientX-e.left)/e.width;this.$refs.audio.currentTime=parseInt(this.$refs.audio.duration*s)}},stop:function(){this.playing=!1,this.$refs.audio.currentTime=0},update:function(t){this.currentSeconds=parseInt(this.$refs.audio.currentTime)}},created:function(){this.looping=this.loop}},y=_,C=(s("7495"),Object(u["a"])(y,g,v,!1,null,"6cda991c",null)),w=C.exports;const b={URL0:/(https?:\/\/[^\s]+)/gim,URL:/\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,PSEUDO_URL:/\bwww\.[\S]+\.[\S]+/gim,EMAIL_ADDRESS:/[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim},x={DEFAULT:"_blank"};function k(t=""){return[...t.matchAll(b.EMAIL_ADDRESS),...t.matchAll(b.URL)].flat()}function M(t){if($(t)){const e=E(t?t.className:null),s=L(t?t.target:null);return`${e} ${s}`}return L()}function S(t,e,s){return null!==e.match(b.EMAIL_ADDRESS)&&(t=T(t,e,s)),null===e.match(b.URL)&&null===e.match(b.PSEUDO_URL)||(t=I(t,e,s)),t}function $(t){return t&&"object"===typeof t&&null!==t&&!Array.isArray(t)}function E(t){return t?`class="${t}"`:""}function L(t){return`target="${t||x.DEFAULT}"`}function T(t,e,s){return t.replace(e,`<a ${s} href="mailto:${e}">${e}</a>`)}function I(t,e,s){const a=-1===e.toLowerCase().indexOf("http")&&-1===e.toLowerCase().indexOf("ftp")?"//":"";return t.replace(e,`<a ${s} href="${a+e.trim()}">${e}</a>`)}function R(t,e){t.innerHTML=t.textContent.split(" ").map(t=>{let s=k(t)||[];if(s.length){const a=M(e);s.forEach(e=>{t=S(t,e,a)})}return t}).join(" ")}const D={bind:function(t,e){R(t,e?e.value:null)},componentUpdated:function(t,e,s){const a=t;a.textContent="",s&&s.children&&s.children[0]&&s.children[0].text&&(a.textContent=s.children[0].text),R(a,e?e.value:null)}};m["default"].use(D);var P={name:"ChatMessageContent",components:{AudioPlayer:w},directives:{linkify:D},computed:{m:function(t){return this.message}},data:function(){return{viewerOptions:{url:"data-full-src"}}},props:{message:{type:Object,default:function(){return{text:""}}}}},O=P,j=(s("71db"),s("6a3f"),Object(u["a"])(O,h,f,!1,null,"dff2e776",null)),U=j.exports,V={name:"ChatMessages",components:{ChatMessageLog:d,ChatMessageContent:U},computed:{messages:function(){var t=this.activeChat.sessionId;return(this.activeChat.messages||[]).filter((function(e){return t==e.sessionId})).sort((function(t,e){return t.timestamp-e.timestamp}))}},data:function(){return{}},methods:{onReplyShow:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.activeChat&&this.activeChat.messages)for(s in this.activeChat.messages)e.replyIdExt&&this.activeChat.messages[s].messageIdExt==e.replyIdExt&&(e.replyMessage=this.activeChat.messages[s]);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},props:{activeChat:{type:Object}}},A=V,H=(s("5afc"),Object(u["a"])(A,a,n,!1,null,"97a53d0e",null));e["a"]=H.exports},"3e84":function(t,e,s){"use strict";e["a"]={name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"},useHidden:{type:Boolean,default:!0}},data:function(){return{style:{},initial:!1,hidden:!1}},watch:{active:function(){this.layout()}},render:function(t){return t(this.tag,{style:this.style,attrs:this.attrs,ref:"container",on:{transitionend:this.onTransitionEnd}},this.$slots.default)},mounted:function(){this.layout(),this.initial=!0},created:function(){this.hidden=!this.active},computed:{el:function(){return this.$refs.container},attrs:function(){var t={"aria-hidden":!this.active,"aria-expanded":this.active};return this.useHidden&&(t.hidden=this.hidden),t}},methods:{layout:function(){var t=this;this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",(function(){return t.el.scrollHeight+"px"}))):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",(function(){return"0px"})))},asap:function(t){this.initial?this.$nextTick(t):t()},setHeight:function(t,e){var s=this;this.style={height:t},this.asap((function(){s.__=s.el.scrollHeight,s.style={height:e(),overflow:"hidden","transition-property":"height","transition-duration":s.duration+"ms"}}))},onTransitionEnd:function(t){t.target===this.el&&(this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end")))}}}},"49e0":function(t,e,s){},"55dd":function(t,e,s){"use strict";var a=s("5ca1"),n=s("d8e8"),i=s("4bf8"),r=s("79e5"),o=[].sort,l=[1,2,3];a(a.P+a.F*(r((function(){l.sort(void 0)}))||!r((function(){l.sort(null)}))||!s("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(i(this)):o.call(i(this),n(t))}})},5701:function(t,e,s){},"5afc":function(t,e,s){"use strict";s("5701")},6682:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-title",{attrs:{heading:t.heading,icon:t.icon,actions:t.actions},scopedSlots:t._u([{key:"subheading",fn:function(){return[t.session?s("span",[t._v("\n          published by "+t._s(t.session.createdBy)+" @ "+t._s(t._f("formatDate")(t.session.createdStamp))+"\n        ")]):t._e()]},proxy:!0}])}),s("b-table",{attrs:{id:"agent-session-list",striped:!0,bordered:!0,outlined:!1,small:!0,hover:!0,dark:!1,fixed:!1,"foot-clone":!1,"per-page":t.table.perPage,"current-page":t.table.currentPage,items:t.table.items,fields:t.table.fields},scopedSlots:t._u([{key:"cell(account)",fn:function(e){return[s("i",{staticClass:"fab",class:t.MyDict.socialPrefix(t.session.contactType)}),t._v("\n                  "+t._s(t.session.lane)+"\n            ")]}},{key:"cell(contact)",fn:function(e){return[s("i",{staticClass:"fab",class:t.MyDict.socialPrefix(t.session.contactType)}),t._v("\n                  "+t._s(e.item.contact.phone)+"\n            ")]}},{key:"cell(createdBy)",fn:function(e){return[t._v("\n                  "+t._s(e.item.sender)+"\n            ")]}},{key:"cell(sendType)",fn:function(e){return[t._v("\n                  "+t._s(e.item.meta.composeType)+"-"+t._s(e.item.meta.sendType)+"\n            ")]}},{key:"cell(template)",fn:function(e){return[s("span",{staticClass:"fa fa-comment",attrs:{"cursor-pointer":"",id:"template-details-"+e.index}}),t._v(" "+t._s(e.item.templateId)+"\n                "),s("b-popover",{attrs:{triggers:"hover focus",target:"template-details-"+e.index,"custom-class":"message-preview"},scopedSlots:t._u([{key:"default",fn:function(){return[s("div",{staticClass:"message-text"},[t._v(t._s(e.item.text))])]},proxy:!0}],null,!0)})]}},{key:"cell(initiated)",fn:function(e){return[t._v("\n                "+t._s(t._f("formatDate")(e.item.stamps.INIT))+"\n            ")]}},{key:"cell(status)",fn:function(e){return[s("div",{staticClass:"fa fa-info-circle",attrs:{"cursor-pointer":"",id:"job-status-details-"+e.index}}),t._v("\n                  "+t._s(e.item.status)+"\n                "),e.item.logs?s("div",{staticClass:"fa fa-exclamation-triangle float-right",staticStyle:{"line-height":"21px"},attrs:{"cursor-pointer":"",id:"job-logs-details-"+e.index}}):t._e(),s("b-popover",{attrs:{triggers:"hover focus",target:"job-status-details-"+e.index},scopedSlots:t._u([{key:"title",fn:function(){return t._l(e.item.stamps,(function(e,a){return s("div",{staticClass:"text-align-left row",staticStyle:{width:"400px"}},[s("small",{staticClass:"col-2"},[t._v(" "+t._s(a)+" ")]),s("small",{staticClass:"col-10"},[t._v(":  "+t._s(t._f("formatDate")(e)))])])}))},proxy:!0}],null,!0)}),e.item.logs?s("b-popover",{attrs:{triggers:"hover focus",target:"job-logs-details-"+e.index},scopedSlots:t._u([{key:"title",fn:function(){return t._l(e.item.logs,(function(e,a){return s("small",{staticClass:"text-align-left"},[t._v(" \n                     "+t._s(e)+"\n                    ")])}))},proxy:!0}],null,!0)}):t._e()]}}])}),s("b-pagination",{attrs:{"total-rows":t.table.rows,"per-page":t.table.perPage,"aria-controls":"agent-session-list"},model:{value:t.table.currentPage,callback:function(e){t.$set(t.table,"currentPage",e)},expression:"table.currentPage"}})],1)},n=[],i=(s("96cf"),s("3b8d")),r=s("e492"),o=s("d166"),l=s("df4b"),c=s("ecee"),u=s("c074"),p=s("ad3d");c["c"].add(u["u"],u["d"],u["a"],u["b"],u["s"],u["c"],u["e"],u["p"],u["v"]);var d={components:{PageTitle:r["a"],"font-awesome-icon":p["a"],AgentChat:l["a"]},data:function(){return{MyFlags:o["c"],MyDict:o["b"],MyConst:o["a"],heading:"Bulk Messages",subheading:"Select date range for report",icon:"pe-7s-chat icon-gradient bg-tempting-azure fa fa-mail-bulk",actions:[{label:"View Past Jobs",name:"BULK_PUSH_JOBS",link:"/app/moderate/bulk-push-jobs",type:"link"}],input:{daterange:{hidden:!0,startDate:null,endDate:null}},table:{fields:[{key:"messageId",label:"Id"},{key:"contact",label:"Contact"},{key:"sessionId",label:"SessionId"},{key:"template",label:"Template"},{key:"createdBy",label:"by"},{key:"initiated",label:"@"},{key:"sendType",label:"SendType"},{key:"status",label:"Status"}],items:[],perPage:25,currentPage:1,rows:0},session:null}},mounted:function(t){this.getItems()},methods:{getItems:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.submit("/api/message/bulk/push/messages",{contactType:"WHATSAPP",bulkSessionId:this.$route.params.bulkSessionId});case 2:e=t.sent,this.table.items=e.results,this.table.rows=this.table.items.length,this.session=e.meta,console.log("sessions",e,this.table);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,s){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("PostRequest",{url:"/api/message/session/import/trash",params:e});case 2:a=t.sent,this.sessions.items=a.results,this.sessions.rows=this.sessions.items.length;case 5:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}(),hideChat:function(t){this.session=null},showChat:function(t){this.session&&this.session.sessionId==t.sessionId?this.session=null:this.session=t}}},h=d,f=(s("a672"),s("2877")),m=Object(f["a"])(h,a,n,!1,null,"1e15cb41",null);e["default"]=m.exports},"6a3f":function(t,e,s){"use strict";s("0423")},"71db":function(t,e,s){"use strict";s("a0c7")},"720c":function(t,e,s){"use strict";s("1798")},7495:function(t,e,s){"use strict";s("49e0")},"92cf":function(t,e,s){"use strict";s("b9e7")},"9dbb":function(t,e,s){(function(e,s){t.exports=s()})(0,(function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function s(t){return"function"===typeof t}function a(t){return e(t)?"array":typeof t}function n(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(t,e){return null!=t&&"object"===typeof t&&e in t}function r(t,e){return null!=t&&"object"!==typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var o=RegExp.prototype.test;function l(t,e){return o.call(t,e)}var c=/\S/;function u(t){return!l(c,t)}var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function d(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return p[t]}))}var h=/\s*/,f=/\s+/,m=/\s*=/,g=/\s*\}/,v=/#|\^|\/|>|\{|&|=|!/;function _(t,s){if(!t)return[];var a,i,r,o=!1,l=[],c=[],p=[],d=!1,_=!1,b="",x=0;function M(){if(d&&!_)while(p.length)delete c[p.pop()];else p=[];d=!1,_=!1}function S(t){if("string"===typeof t&&(t=t.split(f,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);a=new RegExp(n(t[0])+"\\s*"),i=new RegExp("\\s*"+n(t[1])),r=new RegExp("\\s*"+n("}"+t[1]))}S(s||k.tags);var $,E,L,T,I,R,D=new w(t);while(!D.eos()){if($=D.pos,L=D.scanUntil(a),L)for(var P=0,O=L.length;P<O;++P)T=L.charAt(P),u(T)?(p.push(c.length),b+=T):(_=!0,o=!0,b+=" "),c.push(["text",T,$,$+1]),$+=1,"\n"===T&&(M(),b="",x=0,o=!1);if(!D.scan(a))break;if(d=!0,E=D.scan(v)||"name",D.scan(h),"="===E?(L=D.scanUntil(m),D.scan(m),D.scanUntil(i)):"{"===E?(L=D.scanUntil(r),D.scan(g),D.scanUntil(i),E="&"):L=D.scanUntil(i),!D.scan(i))throw new Error("Unclosed tag at "+D.pos);if(I=">"==E?[E,L,$,D.pos,b,x,o]:[E,L,$,D.pos],x++,c.push(I),"#"===E||"^"===E)l.push(I);else if("/"===E){if(R=l.pop(),!R)throw new Error('Unopened section "'+L+'" at '+$);if(R[1]!==L)throw new Error('Unclosed section "'+R[1]+'" at '+$)}else"name"===E||"{"===E||"&"===E?_=!0:"="===E&&S(L)}if(M(),R=l.pop(),R)throw new Error('Unclosed section "'+R[1]+'" at '+D.pos);return C(y(c))}function y(t){for(var e,s,a=[],n=0,i=t.length;n<i;++n)e=t[n],e&&("text"===e[0]&&s&&"text"===s[0]?(s[1]+=e[1],s[3]=e[3]):(a.push(e),s=e));return a}function C(t){for(var e,s,a=[],n=a,i=[],r=0,o=t.length;r<o;++r)switch(e=t[r],e[0]){case"#":case"^":n.push(e),i.push(e),n=e[4]=[];break;case"/":s=i.pop(),s[5]=e[2],n=i.length>0?i[i.length-1][4]:a;break;default:n.push(e)}return a}function w(t){this.string=t,this.tail=t,this.pos=0}function b(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function x(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}w.prototype.eos=function(){return""===this.tail},w.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var s=e[0];return this.tail=this.tail.substring(s.length),this.pos+=s.length,s},w.prototype.scanUntil=function(t){var e,s=this.tail.search(t);switch(s){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,s),this.tail=this.tail.substring(s)}return this.pos+=e.length,e},b.prototype.push=function(t){return new b(t,this)},b.prototype.lookup=function(t){var e,a=this.cache;if(a.hasOwnProperty(t))e=a[t];else{var n,o,l,c=this,u=!1;while(c){if(t.indexOf(".")>0){n=c.view,o=t.split("."),l=0;while(null!=n&&l<o.length)l===o.length-1&&(u=i(n,o[l])||r(n,o[l])),n=n[o[l++]]}else n=c.view[t],u=i(c.view,t);if(u){e=n;break}c=c.parent}a[t]=e}return s(e)&&(e=e.call(this.view)),e},x.prototype.clearCache=function(){"undefined"!==typeof this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(t,e){var s=this.templateCache,a=t+":"+(e||k.tags).join(":"),n="undefined"!==typeof s,i=n?s.get(a):void 0;return void 0==i&&(i=_(t,e),n&&s.set(a,i)),i},x.prototype.render=function(t,e,s,a){var n=this.getConfigTags(a),i=this.parse(t,n),r=e instanceof b?e:new b(e,void 0);return this.renderTokens(i,r,s,t,a)},x.prototype.renderTokens=function(t,e,s,a,n){for(var i,r,o,l="",c=0,u=t.length;c<u;++c)o=void 0,i=t[c],r=i[0],"#"===r?o=this.renderSection(i,e,s,a,n):"^"===r?o=this.renderInverted(i,e,s,a,n):">"===r?o=this.renderPartial(i,e,s,n):"&"===r?o=this.unescapedValue(i,e):"name"===r?o=this.escapedValue(i,e,n):"text"===r&&(o=this.rawValue(i)),void 0!==o&&(l+=o);return l},x.prototype.renderSection=function(t,a,n,i,r){var o=this,l="",c=a.lookup(t[1]);function u(t){return o.render(t,a,n,r)}if(c){if(e(c))for(var p=0,d=c.length;p<d;++p)l+=this.renderTokens(t[4],a.push(c[p]),n,i,r);else if("object"===typeof c||"string"===typeof c||"number"===typeof c)l+=this.renderTokens(t[4],a.push(c),n,i,r);else if(s(c)){if("string"!==typeof i)throw new Error("Cannot use higher-order sections without the original template");c=c.call(a.view,i.slice(t[3],t[5]),u),null!=c&&(l+=c)}else l+=this.renderTokens(t[4],a,n,i,r);return l}},x.prototype.renderInverted=function(t,s,a,n,i){var r=s.lookup(t[1]);if(!r||e(r)&&0===r.length)return this.renderTokens(t[4],s,a,n,i)},x.prototype.indentPartial=function(t,e,s){for(var a=e.replace(/[^ \t]/g,""),n=t.split("\n"),i=0;i<n.length;i++)n[i].length&&(i>0||!s)&&(n[i]=a+n[i]);return n.join("\n")},x.prototype.renderPartial=function(t,e,a,n){if(a){var i=this.getConfigTags(n),r=s(a)?a(t[1]):a[t[1]];if(null!=r){var o=t[6],l=t[5],c=t[4],u=r;0==l&&c&&(u=this.indentPartial(r,c,o));var p=this.parse(u,i);return this.renderTokens(p,e,a,u,n)}}},x.prototype.unescapedValue=function(t,e){var s=e.lookup(t[1]);if(null!=s)return s},x.prototype.escapedValue=function(t,e,s){var a=this.getConfigEscape(s)||k.escape,n=e.lookup(t[1]);if(null!=n)return"number"===typeof n&&a===k.escape?String(n):a(n)},x.prototype.rawValue=function(t){return t[1]},x.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"===typeof t?t.tags:void 0},x.prototype.getConfigEscape=function(t){return t&&"object"===typeof t&&!e(t)?t.escape:void 0};var k={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new x;return k.clearCache=function(){return M.clearCache()},k.parse=function(t,e){return M.parse(t,e)},k.render=function(t,e,s,n){if("string"!==typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+a(t)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(t,e,s,n)},k.escape=d,k.Scanner=w,k.Context=b,k.Writer=x,k}))},a0c7:function(t,e,s){},a672:function(t,e,s){"use strict";s("b264")},b264:function(t,e,s){},b9e7:function(t,e,s){},df4b:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-shadow chat_box_wrapper"},[s("div",{staticClass:"card-header msg_head chat-head"},[s("div",{staticClass:"d-flex bd-highlight chat-header-left"},[t.activeChat?s("div",{staticClass:"img_cont",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("img",{staticClass:"rounded-circle user_img",attrs:{src:t.activeChat.profilePic||t.MyDict.profilePic}}),s("span",{staticClass:"online_icon",attrs:{hidden:""}})]):t._e(),t.activeChat?s("div",{staticClass:"user_info",on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("span",{staticClass:"user_name"},[t._v(t._s(t.activeChat.name))]),t.activeChat.ilastmsg?s("p",{staticClass:"user_text"},[t._v(t._s(t._f("formatDate")(t.activeChat.ilastmsg.timestamp))+" ")]):t._e()]):t._e(),s("div",{staticClass:"video_cam"},[t._m(0),t._m(1),s("span",{attrs:{hidden:""},on:{click:function(e){t.MyFlags.showContactProfile=!t.MyFlags.showContactProfile}}},[s("i",{staticClass:"fas fa-history"})])])]),s("div",{staticClass:"chat-header-right"},[s("div",{staticClass:"video_cam"},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Close",expression:"'Close'"}],staticStyle:{cursor:"pointer"},on:{click:t.closeBox}},[s("i",{staticClass:"fa fa-close"})])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showMediaOptions,expression:"!showMediaOptions"}],staticClass:"card-body msg_card_body"},[s("div",{staticClass:"msg_card_body-bubbles"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots",opacity:.3,"is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),t.activeChat?s("ChatMessages",{attrs:{activeChat:t.activeChat}}):s("div",{staticClass:"msg_card_body-logo"},[s("span",{})])],1)]),s("div",{staticClass:"card-footer"})])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-video"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{hidden:""}},[s("i",{staticClass:"fas fa-phone"})])}],i=(s("96cf"),s("3b8d")),r=(s("ecee"),s("ad3d")),o=s("d166"),l=s("9062"),c=s.n(l),u=(s("9dbb"),s("3e84")),p=s("3902"),d={components:{"font-awesome-icon":r["a"],Loading:c.a,SlideUpDown:u["a"],ChatMessages:p["a"]},props:{session:Object},computed:{},data:function(){return{message_text:"",quickReplies:null,selectedMedia:null,showMediaOptions:!1,showChatOptions:!1,lastMessageId:null,ilastMessageId:null,MyDict:o["b"],MyFlags:o["c"],MyConst:o["a"],isLoading:!1,showQuickActions:!1,activeChat:{messages:null}}},created:function(){console.log("created")},updated:function(){console.log("updated")},mounted:function(){this.loadMessages(),this.loadQuickLabels()},beforeUnmount:function(){},methods:{loadMessages:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("GetSessionChats..."),this.isLoading=!0,t.next=4,this.$store.dispatch("GetSessionChats",this.session);case 4:e=t.sent,console.log("resp",e),this.activeChat=e,this.isLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closeBox:function(t){this.$emit("close")},loadQuickLabels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("LoadQuickLabels");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},h=d,f=(s("720c"),s("2877")),m=Object(f["a"])(h,a,n,!1,null,"7e46954c",null);e["a"]=m.exports}}]);