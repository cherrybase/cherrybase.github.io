(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5407662f"],{"0fea":function(e,t,a){"use strict";a("28a5"),a("96cf");var n=a("3b8d"),i=(a("6b54"),a("bc3a")),s={location:{isUpdated:!1,ip:"2405:201:400f:dc54:3029:c1b5:8ba8:b874",continent_code:"AS",continent_name:"Asia",country_code2:"IN",country_code3:"IND",country_name:"India",country_capital:"New Delhi",state_prov:"Maharashtra",district:"Ghansoli",city:"Navi Mumbai",zipcode:"400701",latitude:"19.13215",longitude:"73.00368",is_eu:!1,calling_code:"+91",country_tld:".in",languages:"en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc",country_flag:"https://ipgeolocation.io/static/flags/in_64.png",geoname_id:"10337890",isp:"Reliance Jio Infocomm Limited",connection_type:"",organization:"Reliance Jio Infocomm Limited",currency:{code:"INR",name:"Indian Rupee",symbol:"₹"},time_zone:{name:"Asia/Kolkata",offset:5.5,current_time:"2022-01-13 20:41:17.225+0530",current_time_unix:1642086677.225,is_dst:!1,dst_savings:0}},options:{},request:null,fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.options.ipgeolocation||!this.options.ipgeolocation.apiKey){e.next=15;break}return e.prev=1,this.request=i.get("https://api.ipgeolocation.io/ipgeo?apiKey="+this.options.ipgeolocation.apiKey),e.next=5,this.request;case 5:return t=e.sent,this.location=Object.assign({isUpdated:!0},t.data),e.abrupt("return",this.location);case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:e.next=29;break;case 15:return this.request=fetch("https://ip2c.org/self"),e.next=18,this.request;case 18:return a=e.sent,e.next=21,a.text();case 21:return n=e.sent,s=n.split(";"),this.location={isUpdated:!0},this.location.country_code2=s[1],this.location.country_code3=s[2],this.location.country_name=s[3],this.location.isUpdated=!1,e.abrupt("return",this.location);case 29:return e.abrupt("return",this.location);case 30:case"end":return e.stop()}}),e,this,[[1,10]])})))),config:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.options.ipgeolocation=t.ipgeolocation,e.next=3,this.fetch();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),get:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.location.isUpdated){e.next=4;break}return e.abrupt("return",this.location);case 4:if(!this.request){e.next=10;break}return e.next=7,this.request;case 7:return e.abrupt("return",this.location);case 10:return e.next=12,this.fetch();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()};t["a"]=s},"203c":function(e,t,a){},"2f04":function(e,t,a){"use strict";a("622f")},5556:function(e,t,a){},"56f5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("input",{attrs:{type:"radio",id:"tab1",name:"tab",checked:""}}),a("label",{attrs:{for:"tab1"}},[e._v("Mehery Smart Conversations")]),a("input",{attrs:{type:"radio",id:"tab2",name:"tab"}}),a("label",{attrs:{for:"tab2"}},[e._v("Mehery API")]),a("div",{staticClass:"line"}),a("div",{staticClass:"content-container"},[a("div",{staticClass:"content",attrs:{id:"c1"}},[a("h3",[e._v("Get access to Smart Messaging services which include connectivity to your branded Facebook Messenger, Telegram, Twitter DM, a native web chat and a WhatsApp Business API Account")]),a("SmartConversations")],1),a("div",{staticClass:"content",attrs:{id:"c2"}},[a("h3",[e._v("Get access to Mehery's Messaging API services which include connectivity to your branded Facebook Messenger, Telegram, Twitter DM, a native web chat and a WhatsApp Business API Account")]),a("Api")],1)])])},i=[],s=a("bd86"),r=a("0fea"),o=a("90a0"),l=a.n(o),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("main",[a("h1",{attrs:{align:"center"}},[e._v("Mehery Smart Conversations")]),a("br"),a("div",{staticClass:"main"},[a("table",{staticClass:"price-table"},[a("tbody",[e._m(0),e._l(e.labels,(function(t,n,i,s){return a("tr",{class:["planName"==n?"price-table-head":""]},[-1!=["text","price","boolean"].indexOf(t.type)?a("td",[e._v(e._s(t.label)+" "),""!=t.hintText?a("i",{staticClass:"fas fa-info-circle",attrs:{title:t.hintText}}):e._e()]):e._e(),-1!=["header"].indexOf(t.type)?a("td",{class:t.type,attrs:{colspan:e.planData.length+1}},[e._v(e._s(t.label))]):e._e(),e._l(e.planData,(function(i){return"price"==t.type?a("td",{class:n},["NA"!=i[n]?a("span",[e._v(e._s(i[n][e.currency]))]):a("i",{staticClass:"fas fa-times"})]):e._e()})),e._l(e.planData,(function(i){return"boolean"==t.type?a("td",[a("i",{staticClass:"fas",class:i[n]?"fa-check":"fa-times"})]):e._e()})),e._l(e.planData,(function(i){return"text"==t.type?a("td",[e._v("\n                                "+e._s(i[n])+"\n                            ")]):e._e()}))],2)})),a("tr",[a("td"),e._l(e.planData.length,(function(t){return a("td",{staticClass:"price"},[a("a",{attrs:{href:"https://app.mehery.com/partner/auth/register?purpose=smartconversations"}},[e._v("Get started")])])}))],2)],2)])])])])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",{staticClass:"price-blank"}),a("td",{staticClass:"price-blank"}),a("td",{staticClass:"price-table-popular"},[e._v("Most popular")]),a("td",{staticClass:"price-blank"})])}],A={data:function(){return{countryToCurrency:{AUT:"EUR"},text:{},labels:{planName:{label:"",type:"text",hintText:""},channel:{label:"",type:"text",hintText:""},price:{label:"Mehery License Fees (per month)",type:"price",hintText:""},perWASessionTemplate:{label:"Per WA Session / Template *",type:"text",hintText:""},nonWaMessageFee:{label:"Per Non-WA message Fee",type:"price",hintText:""},features:{label:"Features",type:"header",hintText:""},agents:{label:"Agent",type:"text",hintText:""},agentDashboard:{label:"Agent Dashboard",type:"boolean",hintText:""},templateCreationWABA:{label:"Template Creation - WABA",type:"boolean",hintText:""},marketingBroadcasts:{label:"Marketing Broadcasts",type:"boolean",hintText:""},quickReplies:{label:"Quick Replies",type:"boolean",hintText:""},whatsAppChatWidget:{label:"WhatsApp Chat Widget",type:"boolean",hintText:""},customerTags:{label:"Customer Tags",type:"boolean",hintText:""},sessionTags:{label:"Session Tags",type:"boolean",hintText:""},chatDistributionRules:{label:"Chat Distribution rules",type:"boolean",hintText:""},aPIsAndWebhooks:{label:"APIs and Webhooks",type:"boolean",hintText:""},eCommercePluginForWA:{label:"eCommerce Plugin for WA",type:"boolean",hintText:""},meheryBranding:{label:"Mehery Branding",type:"boolean",hintText:""},botWorkflows:{label:"BOT workflows",type:"boolean",hintText:""},nlpMachineLearning:{label:"NLP and Machine Learning",type:"boolean",hintText:""},addOn:{label:"Add Ons",type:"header",hintText:""},eachAdditionalAgent:{label:"Per Additional Agent, per month",type:"price",hintText:""},apiSetup:{label:"CRM, Call Centers - Set-Up Fee",type:"price",hintText:"We will integrate with any Call Center or CRM Solution of your choice."},perWhatsappNum:{label:"Per Additional WhatsApp number",type:"price",hintText:"Within the same FB Business Manager ID"},setupFee:{label:"Set-up Fees",type:"price",hintText:"Only if Mehery Support is required"},support:{label:"Support",type:"header",hintText:""},emailWhatsAppSupport:{label:"Email & WhatsApp Support",type:"boolean",hintText:""}},planData:[{planName:"STARTER",channel:"WA Only",price:{INR:"₹ 3,999",USD:"$ 49.99",EUR:"€ 45.99",IDR:"IDR 750k",GPB:"£ 39.99",NZD:"A$ 74.99",AUD:"A$ 74.99"},sessionTemplateFees:"As per Table",perWASessionTemplate:"WA Fees + 20%",nonWaMessageFee:"NA",agents:"5",agentDashboard:!0,templateCreationWABA:!0,marketingBroadcasts:!0,quickReplies:!0,whatsAppChatWidget:!0,customerTags:!0,sessionTags:!0,chatDistributionRules:!0,aPIsAndWebhooks:!1,eCommercePluginForWA:!1,meheryBranding:!0,botWorkflows:"BASIC",nlpMachineLearning:!1,eachAdditionalAgent:{INR:"₹2,000",USD:"$25",EUR:"€23.00",IDR:"IDR 375k",GPB:"£20.00",NZD:"A$37.50",AUD:"A$37.50"},apiSetup:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},perWhatsappNum:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},setupFee:{INR:"₹ 79,996",USD:"$\t1,000",EUR:"€ 1,000",IDR:"IDR 1.50mio",GPB:"£\t800",NZD:"A$ 1,500",AUD:"A$ 1,500"},emailWhatsAppSupport:!0},{planName:"BASIC",channel:"WA Only",price:{INR:"₹ 8,999",USD:"$ 109.99",EUR:"€ 99.99",IDR:"IDR 1.65mio",GPB:"£ 84.99",NZD:"A$ 159.99",AUD:"A$ 159.99"},sessionTemplateFees:"As per Table",perWASessionTemplate:"WA Fees + 20%",nonWaMessageFee:"NA",agents:"5",agentDashboard:!0,templateCreationWABA:!0,marketingBroadcasts:!0,quickReplies:!0,whatsAppChatWidget:!0,customerTags:!0,sessionTags:!0,chatDistributionRules:!0,aPIsAndWebhooks:!0,eCommercePluginForWA:!1,meheryBranding:!0,botWorkflows:"BASIC",nlpMachineLearning:!1,eachAdditionalAgent:{INR:"₹2,000",USD:"$25",EUR:"€23.00",IDR:"IDR 375k",GPB:"£20.00",NZD:"A$37.50",AUD:"A$37.50"},apiSetup:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},perWhatsappNum:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},setupFee:{INR:"₹ 79,996",USD:"$\t1,000",EUR:"€ 1,000",IDR:"IDR 1.50mio",GPB:"£\t800",NZD:"A$ 1,500",AUD:"A$ 1,500"},emailWhatsAppSupport:!0},{planName:"ADVANCE",channel:"All Channels",price:{INR:"₹34,999",USD:"$449.99",EUR:"€415.99",IDR:"IDR 6.75mio",GPB:"£349.99",NZD:"A$649.99",AUD:"A$649.99"},sessionTemplateFees:"As per Table",perWASessionTemplate:"WA Fees + 20%",nonWaMessageFee:{USD:"$ 0.0050",EUR:"€ 0.0046",INR:"₹ 0.10",IDR:"IDR 75",GPB:"£ 0.0040",NZD:"A$ 0.0075",AUD:"A$ 0.0075"},agents:"Unlimited",agentDashboard:!0,templateCreationWABA:!0,marketingBroadcasts:!0,quickReplies:!0,whatsAppChatWidget:!0,customerTags:!0,sessionTags:!0,chatDistributionRules:!0,aPIsAndWebhooks:!0,eCommercePluginForWA:!0,meheryBranding:!1,botWorkflows:"Advanced",nlpMachineLearning:!1,eachAdditionalAgent:"NA",apiSetup:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},perWhatsappNum:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},setupFee:{INR:"₹ 79,996",USD:"$\t1,000",EUR:"€ 1,000",IDR:"IDR 1.50mio",GPB:"£\t800",NZD:"A$ 1,500",AUD:"A$ 1,500"},emailWhatsAppSupport:!0},{planName:"Super",channel:"All Channels",price:{INR:"₹49,999",USD:"$649.99",EUR:"€599.99",IDR:"IDR 9.95mio",GPB:"£499.99",NZD:"A$924.99",AUD:"A$924.99"},sessionTemplateFees:"As per Table",perWASessionTemplate:"WA Fees + 20%",nonWaMessageFee:{USD:"$ 0.0050",EUR:"€ 0.0046",INR:"₹ 0.10",IDR:"IDR 75",GPB:"£ 0.0040",NZD:"A$ 0.0075",AUD:"A$ 0.0075"},agents:"Unlimited",agentDashboard:!0,templateCreationWABA:!0,marketingBroadcasts:!0,quickReplies:!0,whatsAppChatWidget:!0,customerTags:!0,sessionTags:!0,chatDistributionRules:!0,aPIsAndWebhooks:!0,eCommercePluginForWA:!0,meheryBranding:!1,botWorkflows:"Advanced",nlpMachineLearning:!0,eachAdditionalAgent:"NA",apiSetup:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},perWhatsappNum:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},setupFee:{INR:"₹ 79,996",USD:"$\t1,000",EUR:"€ 1,000",IDR:"IDR 1.50mio",GPB:"£\t800",NZD:"A$ 1,500",AUD:"A$ 1,500"},emailWhatsAppSupport:!0}],currency:"IND"}},computed:{},mounted:function(){var e=this;r["a"].get().then((function(t){var a=t.country_code2;e.currency=l.a[a],console.log("this.currency",e.currency)}))},methods:{}},u=A,h=(a("2f04"),a("2877")),D=Object(h["a"])(u,p,c,!1,null,"497df944",null),R=D.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("main",[a("h1",{attrs:{align:"center"}},[e._v("Mehery Smart Conversations")]),a("br"),a("div",{staticClass:"main"},[a("table",{staticClass:"price-table"},[a("tbody",[e._m(0),e._l(e.labels,(function(t,n,i,s){return a("tr",{class:["planName"==n?"price-table-head":""]},[-1!=["text","price","boolean"].indexOf(t.type)?a("td",[e._v(e._s(t.label)+" "),""!=t.hintText?a("i",{staticClass:"fas fa-info-circle",attrs:{title:t.hintText}}):e._e()]):e._e(),-1!=["header"].indexOf(t.type)?a("td",{class:t.type,attrs:{colspan:e.planData.length+1}},[e._v(e._s(t.label))]):e._e(),e._l(e.planData,(function(i){return"price"==t.type?a("td",{class:n},["NA"!=i[n]?a("span",[e._v(e._s(i[n][e.currency]))]):a("i",{staticClass:"fas fa-times"})]):e._e()})),e._l(e.planData,(function(i){return"boolean"==t.type?a("td",[a("i",{staticClass:"fas",class:i[n]?"fa-check":"fa-times"})]):e._e()})),e._l(e.planData,(function(i){return"text"==t.type?a("td",[e._v("\n                                "+e._s(i[n])+"\n                            ")]):e._e()}))],2)})),a("tr",[a("td"),e._l(e.planData.length,(function(t){return a("td",{staticClass:"price"},[a("a",{attrs:{href:"https://app.mehery.com/partner/auth/register?purpose=smartconversations"}},[e._v("Get started")])])}))],2)],2)])])])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",{staticClass:"price-blank"}),a("td",{staticClass:"price-table-popular"},[e._v("Most popular")])])}],m={data:function(){return{text:{},labels:{planName:{label:"",type:"text",hintText:""},channel:{label:"",type:"text",hintText:""},price:{label:"Mehery License Fees (per month)",type:"price",hintText:""},perWASessionTemplate:{label:"Per WA Session / Template *",type:"text",hintText:""},nonWaMessageFee:{label:"Per Non-WA message Fee",type:"price",hintText:""},features:{label:"Features",type:"header",hintText:""},agents:{label:"Agent",type:"text",hintText:""},agentDashboard:{label:"Agent Dashboard",type:"boolean",hintText:""},templateCreationWABA:{label:"Template Creation - WABA",type:"boolean",hintText:""},marketingBroadcasts:{label:"Marketing Broadcasts",type:"boolean",hintText:""},quickReplies:{label:"Quick Replies",type:"boolean",hintText:""},whatsAppChatWidget:{label:"WhatsApp Chat Widget",type:"boolean",hintText:""},customerTags:{label:"Customer Tags",type:"boolean",hintText:""},sessionTags:{label:"Session Tags",type:"boolean",hintText:""},chatDistributionRules:{label:"Chat Distribution rules",type:"boolean",hintText:""},aPIsAndWebhooks:{label:"APIs and Webhooks",type:"boolean",hintText:""},eCommercePluginForWA:{label:"eCommerce Plugin for WA",type:"boolean",hintText:""},meheryBranding:{label:"Mehery Branding",type:"boolean",hintText:""},botWorkflows:{label:"BOT workflows",type:"boolean",hintText:""},nlpMachineLearning:{label:"NLP and Machine Learning",type:"boolean",hintText:""},addOn:{label:"Add Ons",type:"header",hintText:""},eachAdditionalAgent:{label:"Per Additional Agent, per month",type:"price",hintText:""},apiSetup:{label:"CRM, Call Centers - Set-Up Fee",type:"price",hintText:"We will integrate with any Call Center or CRM Solution of your choice."},perWhatsappNum:{label:"Per Additional WhatsApp number",type:"price",hintText:"Within the same FB Business Manager ID"},setupFee:{label:"Set-up Fees",type:"price",hintText:"Only if Mehery Support is required"},support:{label:"Support",type:"header",hintText:""},emailWhatsAppSupport:{label:"Email & WhatsApp Support",type:"boolean",hintText:""}},planData:[{planName:"Starter",channel:"WA Only",price:{INR:"₹ 8,999",USD:"$ 109.99",EUR:"€ 99.99",IDR:"IDR 1.65mio",GPB:"£ 84.99",NZD:"A$ 159.99",AUD:"A$ 159.99"},sessionTemplateFees:"As per Table",perWASessionTemplate:"WA Fees + 20%",nonWaMessageFee:"NA",agents:!1,agentDashboard:!1,templateCreationWABA:!0,marketingBroadcasts:!0,quickReplies:!1,whatsAppChatWidget:!0,customerTags:!1,sessionTags:!1,chatDistributionRules:!1,aPIsAndWebhooks:!0,eCommercePluginForWA:!1,meheryBranding:!1,botWorkflows:"BASIC",nlpMachineLearning:!1,eachAdditionalAgent:{INR:"₹2,000",USD:"$25",EUR:"€23.00",IDR:"IDR 375k",GPB:"£20.00",NZD:"A$37.50",AUD:"A$37.50"},apiSetup:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},perWhatsappNum:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},setupFee:{INR:"₹ 79,996",USD:"$\t1,000",EUR:"€ 1,000",IDR:"IDR 1.50mio",GPB:"£\t800",NZD:"A$ 1,500",AUD:"A$ 1,500"},emailWhatsAppSupport:!0},{planName:"Advanced",channel:"All Channels",price:{INR:"₹ 24,999",USD:"$\t299.99",EUR:"€ 274.99",IDR:"IDR 4.50 mio",GPB:"£\t229.99",NZD:"A$ 429.99",AUD:"A$ 429.99"},sessionTemplateFees:"As per Table",perWASessionTemplate:"WA Fees + 20%",nonWaMessageFee:{USD:"$ 0.0050",EUR:"€ 0.0046",INR:"₹ 0.10",IDR:"IDR 75",GPB:"£ 0.0040",NZD:"A$ 0.0075",AUD:"A$ 0.0075"},agents:!1,agentDashboard:!1,templateCreationWABA:!0,marketingBroadcasts:!0,quickReplies:!1,whatsAppChatWidget:!0,customerTags:!1,sessionTags:!1,chatDistributionRules:!1,aPIsAndWebhooks:!0,eCommercePluginForWA:!1,meheryBranding:!1,botWorkflows:"Advanced",nlpMachineLearning:!1,eachAdditionalAgent:"NA",apiSetup:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},perWhatsappNum:{INR:"₹ 8,000",USD:"$\t100",EUR:"€ 92",IDR:"IDR 1.50mio",GPB:"£\t80",NZD:"A$150",AUD:"A$150"},setupFee:{INR:"₹ 79,996",USD:"$\t1,000",EUR:"€ 1,000",IDR:"IDR 1.50mio",GPB:"£\t800",NZD:"A$ 1,500",AUD:"A$ 1,500"},emailWhatsAppSupport:!0}],currency:"IND"}},computed:{},mounted:function(){var e=this;r["a"].get().then((function(t){var a=t.country_code2;e.currency=l.a[a],console.log("this.currency",e.currency)}))},methods:{}},U=m,g=(a("bd4d"),Object(h["a"])(U,d,b,!1,null,"054da159",null)),S=g.exports,N=Object(s["a"])({components:function(){},data:function(){return{}},computed:{},mounted:function(){var e=this;r["a"].get().then((function(t){var a=t.country_code2;e.currency=l.a[a],console.log("this.currency",e.currency)}))},methods:{}},"components",{SmartConversations:R,Api:S}),T=N,I=(a("6bb1"),Object(h["a"])(T,n,i,!1,null,"46d45c7f",null));t["default"]=I.exports},"622f":function(e,t,a){},"6bb1":function(e,t,a){"use strict";a("5556")},"90a0":function(e,t,a){!function(t,a){e.exports={AD:"EUR",AE:"AED",AF:"AFN",AG:"XCD",AI:"XCD",AL:"ALL",AM:"AMD",AO:"AOA",AR:"ARS",AS:"USD",AT:"EUR",AU:"AUD",AW:"AWG",AX:"EUR",AZ:"AZN",BA:"BAM",BB:"BBD",BD:"BDT",BE:"EUR",BF:"XOF",BG:"BGN",BH:"BHD",BI:"BIF",BJ:"XOF",BL:"EUR",BM:"BMD",BN:"BND",BO:"BOB",BQ:"USD",BR:"BRL",BS:"BSD",BT:"BTN",BV:"NOK",BW:"BWP",BY:"BYN",BZ:"BZD",CA:"CAD",CC:"AUD",CD:"CDF",CF:"XAF",CG:"CDF",CH:"CHE",CI:"XOF",CK:"NZD",CL:"CLF",CM:"XAF",CN:"CNY",CO:"COP",CR:"CRC",CU:"CUC",CV:"CVE",CW:"ANG",CX:"AUD",CY:"EUR",CZ:"CZK",DE:"EUR",DJ:"DJF",DK:"DKK",DM:"DOP",DO:"DOP",DZ:"DZD",EC:"USD",EE:"EUR",EG:"EGP",EH:"MAD",ER:"ERN",ES:"EUR",ET:"ETB",FI:"EUR",FJ:"FJD",FM:"USD",FO:"DKK",FR:"EUR",GA:"XAF",GB:"GBP",GD:"XCD",GE:"GEL",GF:"EUR",GG:"GBP",GH:"GHS",GI:"GIP",GL:"DKK",GM:"GMD",GN:"GNF",GP:"EUR",GQ:"XAF",GR:"EUR",GT:"GTQ",GU:"USD",GW:"XOF",GY:"GYD",HK:"HKD",HN:"HNL",HR:"HRK",HT:"HTG",HU:"HUF",ID:"IDR",IE:"EUR",IL:"ILS",IM:"GBP",IN:"INR",IO:"USD",IQ:"IQD",IR:"IRR",IS:"ISK",IT:"EUR",JE:"GBP",JM:"JMD",JO:"JOD",JP:"JPY",KE:"KES",KG:"KGS",KH:"KHR",KI:"AUD",KM:"KMF",KN:"XCD",KP:"KPW",KR:"KRW",KW:"KWD",KY:"KYD",KZ:"KZT",LB:"LBP",LC:"XCD",LI:"CHF",LK:"LKR",LR:"LRD",LS:"LSL",LT:"EUR",LU:"EUR",LV:"EUR",LY:"LYD",MA:"MAD",MC:"EUR",MD:"MDL",ME:"EUR",MF:"EUR",MG:"MGA",MH:"USD",ML:"XOF",MM:"MMK",MN:"MNT",MO:"MOP",MP:"USD",MQ:"EUR",MR:"MRU",MS:"XCD",MT:"EUR",MU:"MUR",MV:"MVR",MW:"MWK",MX:"MXN",MY:"MYR",MZ:"MZN",NA:"NAD",NC:"XPF",NE:"NGN",NF:"AUD",NG:"NGN",NI:"NIO",NL:"EUR",NO:"NOK",NP:"NPR",NR:"AUD",NU:"NZD",NZ:"NZD",OM:"OMR",PA:"PAB",PE:"PEN",PF:"XPF",PG:"PGK",PH:"PHP",PK:"PKR",PL:"PLN",PM:"EUR",PN:"NZD",PR:"USD",PT:"EUR",PW:"USD",PY:"PYG",QA:"QAR",RE:"EUR",RO:"RON",RS:"RSD",RU:"RUB",RW:"RWF",SA:"SAR",SB:"SBD",SC:"SCR",SD:"SDG",SE:"SEK",SG:"SGD",SH:"SHP",SI:"EUR",SJ:"NOK",SK:"EUR",SL:"SLL",SM:"EUR",SN:"XOF",SO:"SOS",SR:"SRD",SS:"SSP",ST:"STN",SV:"SVC",SX:"ANG",SY:"SYP",SZ:"SZL",TC:"USD",TD:"XAF",TF:"EUR",TG:"XOF",TH:"THB",TJ:"TJS",TK:"NZD",TL:"USD",TM:"TMT",TN:"TND",TO:"TOP",TR:"TRY",TT:"TTD",TV:"AUD",TW:"TWD",TZ:"TZS",UA:"UAH",UG:"UGX",UM:"USD",US:"USD",UY:"UYI",UZ:"UZS",VA:"EUR",VC:"XCD",VE:"VES",VG:"USD",VI:"USD",VN:"VND",VU:"VUV",WF:"XPF",WS:"USD",YE:"YER",YT:"EUR",ZA:"ZAR",ZM:"ZMW",ZW:"ZWL",HM:"AUD",FK:"FKP",GS:"GEL",LA:"LAK",MK:"MKD",AQ:"USD",PS:"ILS"}}()},bd4d:function(e,t,a){"use strict";a("203c")}}]);