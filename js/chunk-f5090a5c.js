(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5090a5c"],{"1fca":function(t,s,a){"use strict";function e(t,s){if(s){var a=this.$data._chart,e=t.datasets.map((function(t){return t.label})),i=s.datasets.map((function(t){return t.label})),n=JSON.stringify(i),c=JSON.stringify(e);c===n&&s.datasets.length===t.datasets.length?(t.datasets.forEach((function(t,e){var i=Object.keys(s.datasets[e]),n=Object.keys(t),c=i.filter((function(t){return"_meta"!==t&&-1===n.indexOf(t)}));for(var l in c.forEach((function(t){delete a.data.datasets[e][t]})),t)t.hasOwnProperty(l)&&(a.data.datasets[e][l]=t[l])})),t.hasOwnProperty("labels")&&(a.data.labels=t.labels,this.$emit("labels:update")),t.hasOwnProperty("xLabels")&&(a.data.xLabels=t.xLabels,this.$emit("xlabels:update")),t.hasOwnProperty("yLabels")&&(a.data.yLabels=t.yLabels,this.$emit("ylabels:update")),a.update(),this.$emit("chart:update")):(a&&(a.destroy(),this.$emit("chart:destroy")),this.renderChart(this.chartData,this.options),this.$emit("chart:render"))}else this.$data._chart&&(this.$data._chart.destroy(),this.$emit("chart:destroy")),this.renderChart(this.chartData,this.options),this.$emit("chart:render")}a.d(s,"a",(function(){return d})),a.d(s,"c",(function(){return v})),a.d(s,"b",(function(){return g})),a.d(s,"d",(function(){return u})),a.d(s,"e",(function(){return C})),a.d(s,"f",(function(){return h})),a.d(s,"g",(function(){return p})),a.d(s,"h",(function(){return c}));var i={data:function(){return{chartData:null}},watch:{chartData:e}},n={props:{chartData:{type:Object,required:!0,default:function(){}}},watch:{chartData:e}},c={reactiveData:i,reactiveProp:n},l=a("30ef"),r=a.n(l);function o(t,s){return{render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(t){this.$data._plugins.push(t)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(t,a){if(this.$data._chart&&this.$data._chart.destroy(),!this.$refs.canvas)throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");this.$data._chart=new r.a(this.$refs.canvas.getContext("2d"),{type:s,data:t,options:a,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}var d=o("bar-chart","bar"),v=o("horizontalbar-chart","horizontalBar"),g=o("doughnut-chart","doughnut"),u=o("line-chart","line"),C=o("pie-chart","pie"),h=o("polar-chart","polarArea"),p=o("radar-chart","radar");o("bubble-chart","bubble"),o("scatter-chart","scatter")},f0dd:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),a("div",{staticClass:"mb-3 card"},[t._m(0),a("div",{staticClass:"no-gutters row"},[a("div",{staticClass:"col-sm-6 col-md-4 col-xl-4"},[a("div",{staticClass:"card no-shadow rm-border bg-transparent widget-chart text-left"},[t._m(1),a("div",{staticClass:"widget-chart-content"},[a("div",{staticClass:"widget-subheading"},[t._v("Cash Deposits")]),a("div",{staticClass:"widget-numbers"},[t._v("1,7M")]),a("div",{staticClass:"widget-description opacity-8 text-focus"},[a("div",{staticClass:"d-inline text-danger pr-1"},[a("font-awesome-icon",{attrs:{icon:"angle-down"}}),a("span",{staticClass:"pl-1"},[t._v("54.1%")])],1),t._v("\n                            less earnings\n                        ")])])]),a("div",{staticClass:"divider m-0 d-md-none d-sm-block"})]),a("div",{staticClass:"col-sm-6 col-md-4 col-xl-4"},[a("div",{staticClass:"card no-shadow rm-border bg-transparent widget-chart text-left"},[t._m(2),a("div",{staticClass:"widget-chart-content"},[a("div",{staticClass:"widget-subheading"},[t._v("Invested Dividents")]),t._m(3),a("div",{staticClass:"widget-description opacity-8 text-focus"},[t._v("\n                            Grow Rate:\n                            "),a("span",{staticClass:"text-info pl-1"},[a("font-awesome-icon",{attrs:{icon:"angle-down"}}),a("span",{staticClass:"pl-1"},[t._v("14.1%")])],1)])])]),a("div",{staticClass:"divider m-0 d-md-none d-sm-block"})]),a("div",{staticClass:"col-sm-12 col-md-4 col-xl-4"},[a("div",{staticClass:"card no-shadow rm-border bg-transparent widget-chart text-left"},[t._m(4),a("div",{staticClass:"widget-chart-content"},[a("div",{staticClass:"widget-subheading"},[t._v("Capital Gains")]),t._m(5),a("div",{staticClass:"widget-description text-focus"},[t._v("\n                            Increased by\n                            "),a("span",{staticClass:"text-warning pl-1"},[a("font-awesome-icon",{attrs:{icon:"angle-up"}}),a("span",{staticClass:"pl-1"},[t._v("7.35%")])],1)])])])])]),t._m(6)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-6"},[a("div",{staticClass:"mb-3 card"},[t._m(7),a("div",{staticClass:"p-0 card-body"},[a("div",{staticClass:"p-1 slick-slider-sm mx-auto"},[a("div",{staticClass:"widget-chart widget-chart2 text-left p-0"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[t._m(8),a("div",{staticClass:"widget-chart-wrapper he-auto opacity-10 m-0"},[a("chart1",{attrs:{height:145}})],1)])])]),a("h6",{staticClass:"text-muted text-uppercase font-size-md opacity-5 pl-3 pr-3 pb-1 font-weight-normal"},[t._v("\n                        Sales Progress")]),t._m(9)])])]),a("div",{staticClass:"col-sm-12 col-lg-6"},[a("div",{staticClass:"card-hover-shadow-2x mb-3 card"},[t._m(10),a("div",{staticClass:"scroll-area-lg"},[t._m(11)],1),t._m(12)])])]),t._m(13),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-6"},[a("div",{staticClass:"card-hover-shadow-2x mb-3 card"},[t._m(14),a("div",{staticClass:"scroll-area-lg"},[t._m(15)],1),t._m(16)])]),t._m(17)]),t._m(18)],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header-tab card-header"},[a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-charts icon-gradient bg-happy-green"}),t._v("\n                Data Statistics\n            ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon-wrapper rounded-circle"},[a("div",{staticClass:"icon-wrapper-bg opacity-10 bg-warning"}),a("i",{staticClass:"pe-7s-scissors text-white opacity-8"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon-wrapper rounded-circle"},[a("div",{staticClass:"icon-wrapper-bg opacity-9 bg-danger"}),a("i",{staticClass:"pe-7s-radio text-white"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("span",[t._v("9M")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon-wrapper rounded-circle"},[a("div",{staticClass:"icon-wrapper-bg opacity-9 bg-success"}),a("i",{staticClass:"pe-7s-musiclist text-white"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers text-success"},[a("span",[t._v("$563")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"text-center d-block p-3 card-footer"},[a("button",{staticClass:"btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg"},[a("span",{staticClass:"mr-2 opacity-7"},[a("i",{staticClass:"icon icon-anim-pulse ion-ios-analytics-outline"})]),a("span",{staticClass:"mr-1"},[t._v("View Complete Report")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header-tab card-header"},[a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-cloud-download icon-gradient bg-happy-itmeo"}),t._v("\n                        Technical Support\n                    ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-content widget-chart-content-lg pb-0"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title opacity-5 text-muted text-uppercase"},[t._v("Helpdesk\n                                            Tickets\n                                        ")])]),a("div",{staticClass:"widget-numbers"},[a("div",{staticClass:"widget-chart-flex"},[a("div",[a("span",{staticClass:"text-warning"},[t._v("34")])]),a("div",{staticClass:"widget-title ml-2 font-size-lg font-weight-normal text-dark"},[a("span",{staticClass:"opacity-5 text-muted pl-2 pr-1"},[t._v("5%")]),t._v("\n                                                increase\n                                            ")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"p-3 bg-transparent list-group-item"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-outer"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("div",{staticClass:"widget-heading"},[t._v("Total Orders")]),a("div",{staticClass:"widget-subheading"},[t._v("Last year expenses")])]),a("div",{staticClass:"widget-content-right"},[a("div",{staticClass:"widget-numbers text-success"},[a("small",[t._v("$")]),t._v("\n                                                1896\n                                            ")])])]),a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-sm progress-bar-animated-alt progress"},[a("div",{staticClass:"progress-bar bg-primary",staticStyle:{width:"43%"},attrs:{role:"progressbar","aria-valuenow":"43","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label"},[a("div",{staticClass:"sub-label-left"},[t._v("YoY Growth")]),a("div",{staticClass:"sub-label-right"},[t._v("100%")])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header-tab card-header"},[a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-lighter icon-gradient bg-amy-crisp"}),t._v("\n                        Timeline Example\n                    ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("VuePerfectScrollbar",{staticClass:"scrollbar-container"},[a("div",{staticClass:"p-4"},[a("div",{staticClass:"vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column"},[a("div",{staticClass:"dot-danger vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("All Hands Meeting")])])])]),a("div",{staticClass:"dot-warning vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("p",[t._v("Yet another one, at "),a("span",{staticClass:"text-success"},[t._v("15:00 PM")])])])])]),a("div",{staticClass:"dot-success vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("Build the production release\n                                                "),a("div",{staticClass:"badge badge-danger ml-2"},[t._v("NEW")])])])])]),a("div",{staticClass:"dot-primary vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("\n                                                Something not important\n                                            ")])])])]),a("div",{staticClass:"dot-warning vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("p",[t._v("Yet another one, at "),a("span",{staticClass:"text-success"},[t._v("15:00 PM")])])])])]),a("div",{staticClass:"dot-success vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("Build the production release\n                                                "),a("div",{staticClass:"badge badge-danger ml-2"},[t._v("NEW")])])])])]),a("div",{staticClass:"dot-info vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("This dot has an info state")])])])]),a("div",{staticClass:"dot-dark vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("This dot has a dark state")])])])]),a("div",{staticClass:"dot-danger vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("All Hands Meeting")])])])]),a("div",{staticClass:"dot-warning vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("p",[t._v("Yet another one, at "),a("span",{staticClass:"text-success"},[t._v("15:00 PM")])])])])]),a("div",{staticClass:"dot-success vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("Build the production release\n                                                "),a("div",{staticClass:"badge badge-danger ml-2"},[t._v("NEW")])])])])]),a("div",{staticClass:"dot-primary vertical-timeline-element"},[a("div",[a("span",{staticClass:"vertical-timeline-element-icon bounce-in"}),a("div",{staticClass:"vertical-timeline-element-content bounce-in"},[a("h4",{staticClass:"timeline-title"},[t._v("\n                                                Something not important\n                                            ")])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"d-block text-center card-footer"},[a("button",{staticClass:"btn-shadow btn-wide btn-pill btn btn-focus"},[t._v("\n                        View All Messages\n                    ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"fsize-4"},[a("small",{staticClass:"opacity-5"},[t._v("$")]),a("span",[t._v("874")])])])])]),a("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("sales last month")])])])])]),a("div",{staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"fsize-4"},[a("small",{staticClass:"opacity-5"},[t._v("$")]),a("span",[t._v("1283")])])])])]),a("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("sales Income")])])])])]),a("div",{staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"fsize-4"},[a("small",{staticClass:"opacity-5"},[t._v("$")]),a("span",[t._v("1286")])])])])]),a("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("last month sales")])])])])]),a("div",{staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content pt-3 pl-3 pb-1"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers"},[a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"fsize-4"},[a("small",{staticClass:"opacity-5"},[t._v("$")]),a("span",[t._v("564")])])])])]),a("h6",{staticClass:"widget-subheading mb-0 opacity-5"},[t._v("total revenue")])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header-tab card-header"},[a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-database icon-gradient bg-malibu-beach"}),t._v("Tasks List\n                    ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("VuePerfectScrollbar",{staticClass:"scrollbar-container"},[e("ul",{staticClass:"todo-list-wrapper list-group list-group-flush"},[e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"todo-indicator bg-warning"}),e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left mr-2"},[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox12"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox12"}},[t._v(" ")])])]),e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Wash the car\n                                                "),e("div",{staticClass:"badge badge-danger ml-2"},[t._v("Rejected")])]),e("div",{staticClass:"widget-subheading"},[e("i",[t._v("Written by Bob")])])]),e("div",{staticClass:"widget-content-right widget-content-actions"},[e("button",{staticClass:"border-0 btn-transition btn btn-outline-success"},[e("font-awesome-icon",{attrs:{icon:"check"}})],1),e("button",{staticClass:"border-0 btn-transition btn btn-outline-danger"},[e("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"todo-indicator bg-focus"}),e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left mr-2"},[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox1"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox1"}},[t._v(" ")])])]),e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Task with hover dropdown menu")]),e("div",{staticClass:"widget-subheading"},[e("div",[t._v("By Johnny\n                                                    "),e("div",{staticClass:"badge badge-pill badge-info ml-2"},[t._v("NEW")])])])])])])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"todo-indicator bg-primary"}),e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left mr-2"},[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox4"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox4"}},[t._v(" ")])])]),e("div",{staticClass:"widget-content-left flex2"},[e("div",{staticClass:"widget-heading"},[t._v("Badge on the right task")]),e("div",{staticClass:"widget-subheading"},[t._v("This task has show on hover actions!\n                                            ")])]),e("div",{staticClass:"widget-content-right widget-content-actions"},[e("button",{staticClass:"border-0 btn-transition btn btn-outline-success"},[e("font-awesome-icon",{attrs:{icon:"check"}})],1)]),e("div",{staticClass:"widget-content-right ml-3"},[e("div",{staticClass:"badge badge-pill badge-success"},[t._v("Latest Task")])])])])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"todo-indicator bg-info"}),e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left mr-2"},[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox2"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox2"}},[t._v(" ")])])]),e("div",{staticClass:"widget-content-left mr-3"},[e("div",{staticClass:"widget-content-left"},[e("img",{staticClass:"rounded",attrs:{width:"42",src:a("3c88"),alt:""}})])]),e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Go grocery shopping")]),e("div",{staticClass:"widget-subheading"},[t._v("A short description for this todo item\n                                            ")])]),e("div",{staticClass:"widget-content-right widget-content-actions"},[e("button",{staticClass:"border-0 btn-transition btn btn-outline-success"},[e("font-awesome-icon",{attrs:{icon:"check"}})],1),e("button",{staticClass:"border-0 btn-transition btn btn-outline-danger"},[e("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"todo-indicator bg-warning"}),e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left mr-2"},[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox12"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox12"}},[t._v(" ")])])]),e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Wash the car\n                                                "),e("div",{staticClass:"badge badge-danger ml-2"},[t._v("Rejected")])]),e("div",{staticClass:"widget-subheading"},[e("i",[t._v("Written by Bob")])])]),e("div",{staticClass:"widget-content-right widget-content-actions"},[e("button",{staticClass:"border-0 btn-transition btn btn-outline-success"},[e("font-awesome-icon",{attrs:{icon:"check"}})],1),e("button",{staticClass:"border-0 btn-transition btn btn-outline-danger"},[e("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"todo-indicator bg-focus"}),e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left mr-2"},[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox1"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox1"}},[t._v(" ")])])]),e("div",{staticClass:"widget-content-left"},[e("div",{staticClass:"widget-heading"},[t._v("Task with hover dropdown menu")]),e("div",{staticClass:"widget-subheading"},[e("div",[t._v("By Johnny\n                                                    "),e("div",{staticClass:"badge badge-pill badge-info ml-2"},[t._v("NEW")])])])]),e("div",{staticClass:"widget-content-right widget-content-actions"},[e("button",{staticClass:"border-0 btn-transition btn btn-outline-success"},[e("font-awesome-icon",{attrs:{icon:"check"}})],1),e("button",{staticClass:"border-0 btn-transition btn btn-outline-danger"},[e("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"todo-indicator bg-primary"}),e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left mr-2"},[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox4"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox4"}},[t._v(" ")])])]),e("div",{staticClass:"widget-content-left flex2"},[e("div",{staticClass:"widget-heading"},[t._v("Badge on the right task")]),e("div",{staticClass:"widget-subheading"},[t._v("This task has show on hover actions!\n                                            ")])]),e("div",{staticClass:"widget-content-right widget-content-actions"},[e("button",{staticClass:"border-0 btn-transition btn btn-outline-success"},[e("font-awesome-icon",{attrs:{icon:"check"}})],1)]),e("div",{staticClass:"widget-content-right ml-3"},[e("div",{staticClass:"badge badge-pill badge-success"},[t._v("Latest Task")])])])])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"todo-indicator bg-success"}),e("div",{staticClass:"widget-content p-0"},[e("div",{staticClass:"widget-content-wrapper"},[e("div",{staticClass:"widget-content-left mr-2"},[e("div",{staticClass:"custom-checkbox custom-control"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox3"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox3"}},[t._v(" ")])])]),e("div",{staticClass:"widget-content-left flex2"},[e("div",{staticClass:"widget-heading"},[t._v("Development Task")]),e("div",{staticClass:"widget-subheading"},[t._v("Finish Vue ToDo List App")])]),e("div",{staticClass:"widget-content-right"},[e("div",{staticClass:"badge badge-warning mr-2"},[t._v("69")])]),e("div",{staticClass:"widget-content-right"},[e("button",{staticClass:"border-0 btn-transition btn btn-outline-success"},[e("font-awesome-icon",{attrs:{icon:"check"}})],1),e("button",{staticClass:"border-0 btn-transition btn btn-outline-danger"},[e("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"d-block text-right card-footer"},[a("button",{staticClass:"mr-2 btn btn-link btn-sm"},[t._v("Cancel")]),a("button",{staticClass:"btn btn-primary"},[t._v("Add Task")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-12 col-lg-6"},[a("div",{staticClass:"card-hover-shadow-2x mb-3 card"},[a("div",{staticClass:"card-header-tab card-header"},[a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-laptop-phone mr-3 text-muted opacity-6"}),t._v("\n                        Tables Examples\n                    ")])]),a("div",{staticClass:"card-body"},[a("table",{staticClass:"table b-table table-striped table-hover table-bordered border mb-0",attrs:{"aria-busy":"false","aria-colcount":"3"}},[a("thead",{attrs:{role:"rowgroup"}},[a("tr",{attrs:{role:"row"}},[a("th",{attrs:{role:"columnheader",scope:"col","aria-colindex":"1"}},[t._v("First Name")]),a("th",{attrs:{role:"columnheader",scope:"col","aria-colindex":"2"}},[t._v("Last Name")]),a("th",{attrs:{role:"columnheader",scope:"col","aria-colindex":"3"}},[t._v("Age")])])]),a("tfoot",{attrs:{role:"rowgroup"}},[a("tr",{attrs:{role:"row"}},[a("th",{attrs:{role:"columnheader",scope:"col","aria-colindex":"1"}},[t._v("First Name")]),a("th",{attrs:{role:"columnheader",scope:"col","aria-colindex":"2"}},[t._v("Last Name")]),a("th",{attrs:{role:"columnheader",scope:"col","aria-colindex":"3"}},[t._v("Age")])])]),a("tbody",{attrs:{role:"rowgroup"}},[a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Dickerson")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Macdonald")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("40")])]),a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Larsen")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Shaw")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("21")])]),a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Geneva")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Wilson")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("89")])]),a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Dickerson")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Macdonald")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("40")])]),a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Larsen")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Shaw")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("21")])]),a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Geneva")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Wilson")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("89")])]),a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Dickerson")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Macdonald")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("40")])]),a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Larsen")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Shaw")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("21")])]),a("tr",{attrs:{role:"row"}},[a("td",{attrs:{role:"cell","aria-colindex":"1"}},[t._v("Geneva")]),a("td",{attrs:{role:"cell","aria-colindex":"2"}},[t._v("Wilson")]),a("td",{attrs:{role:"cell","aria-colindex":"3"}},[t._v("89")])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"no-gutters row"},[a("div",{staticClass:"col-md-12 col-lg-4"},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"bg-transparent list-group-item"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-outer"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("div",{staticClass:"widget-heading"},[t._v("Total Orders")]),a("div",{staticClass:"widget-subheading"},[t._v("Last year expenses")])]),a("div",{staticClass:"widget-content-right"},[a("div",{staticClass:"widget-numbers text-success"},[t._v("1896")])])])])])]),a("li",{staticClass:"bg-transparent list-group-item"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-outer"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("div",{staticClass:"widget-heading"},[t._v("Clients")]),a("div",{staticClass:"widget-subheading"},[t._v("Total Clients Profit")])]),a("div",{staticClass:"widget-content-right"},[a("div",{staticClass:"widget-numbers text-primary"},[t._v("$12.6k")])])])])])])])]),a("div",{staticClass:"col-md-12 col-lg-4"},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"bg-transparent list-group-item"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-outer"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("div",{staticClass:"widget-heading"},[t._v("Followers")]),a("div",{staticClass:"widget-subheading"},[t._v("People Interested")])]),a("div",{staticClass:"widget-content-right"},[a("div",{staticClass:"widget-numbers text-danger"},[t._v("45,9%")])])])])])]),a("li",{staticClass:"bg-transparent list-group-item"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-outer"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("div",{staticClass:"widget-heading"},[t._v("Products Sold")]),a("div",{staticClass:"widget-subheading"},[t._v("Total revenue streams")])]),a("div",{staticClass:"widget-content-right"},[a("div",{staticClass:"widget-numbers text-warning"},[t._v("$3M")])])])])])])])]),a("div",{staticClass:"col-md-12 col-lg-4"},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"bg-transparent list-group-item"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-outer"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("div",{staticClass:"widget-heading"},[t._v("Total Orders")]),a("div",{staticClass:"widget-subheading"},[t._v("Last year expenses")])]),a("div",{staticClass:"widget-content-right"},[a("div",{staticClass:"widget-numbers text-success"},[t._v("1896")])])])])])]),a("li",{staticClass:"bg-transparent list-group-item"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-outer"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("div",{staticClass:"widget-heading"},[t._v("Clients")]),a("div",{staticClass:"widget-subheading"},[t._v("Total Clients Profit")])]),a("div",{staticClass:"widget-content-right"},[a("div",{staticClass:"widget-numbers text-primary"},[t._v("$12.6k")])])])])])])])])])])}],n=a("1a01"),c=a("9d63"),l=a.n(c),r=a("1fca"),o={extends:r["d"],data:function(){return{datacollection:{labels:["January","February","March","April","May","June","July","August"],datasets:[{label:"My First dataset",fill:!0,lineTension:.5,backgroundColor:"rgba(247, 185, 36, 0.2)",borderColor:"#f7b924",borderCapStyle:"round",borderDash:[],borderWidth:4,borderDashOffset:0,borderJoinStyle:"round",pointBorderColor:"#f7b924",pointBackgroundColor:"#ffffff",pointBorderWidth:5,pointHoverRadius:6,pointHoverBackgroundColor:"#ffffff",pointHoverBorderColor:"#f7b924",pointHoverBorderWidth:2,pointRadius:4,pointHitRadius:10,data:[65,59,80,81,46,55,38,59,80]}]},options:{layout:{padding:{left:0,right:8,top:0,bottom:0}},scales:{yAxes:[{ticks:{display:!1,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{ticks:{display:!1},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},d={extends:r["d"],data:function(){return{datacollection:{labels:["January","February","March","April","May","June","July","August"],datasets:[{label:"My First dataset",fill:!0,lineTension:.5,backgroundColor:"rgba(48, 177, 255, 0.2)",borderColor:"#30b1ff",borderCapStyle:"round",borderDash:[],borderWidth:4,borderDashOffset:0,borderJoinStyle:"round",pointBorderColor:"#30b1ff",pointBackgroundColor:"#ffffff",pointBorderWidth:5,pointHoverRadius:6,pointHoverBackgroundColor:"#ffffff",pointHoverBorderColor:"#30b1ff",pointHoverBorderWidth:2,pointRadius:4,pointHitRadius:10,data:[46,55,59,80,81,38,65,59,80]}]},options:{layout:{padding:{left:0,right:8,top:0,bottom:0}},scales:{yAxes:[{ticks:{display:!1,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{ticks:{display:!1},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},v={extends:r["d"],data:function(){return{datacollection:{labels:["January","February","March","April","May","June","July","August"],datasets:[{label:"My First dataset",fill:!0,lineTension:.5,backgroundColor:"rgba(86, 196, 121, 0.2)",borderColor:"#56c479",borderCapStyle:"round",borderDash:[],borderWidth:4,borderDashOffset:0,borderJoinStyle:"round",pointBorderColor:"#56c479",pointBackgroundColor:"#ffffff",pointBorderWidth:5,pointHoverRadius:6,pointHoverBackgroundColor:"#ffffff",pointHoverBorderColor:"#56c479",pointHoverBorderWidth:2,pointRadius:4,pointHitRadius:10,data:[65,59,80,81,55,38,59,80,46]}]},options:{layout:{padding:{left:0,right:8,top:0,bottom:0}},scales:{yAxes:[{ticks:{display:!1,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{ticks:{display:!1},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},g=a("ecee"),u=a("c074"),C=a("ad3d");g["c"].add(u["Q"],u["u"],u["a"],u["d"],u["O"],u["t"]);var h={components:{PageTitle:n["a"],VuePerfectScrollbar:l.a,"font-awesome-icon":C["a"],chart1:o,chart2:d,chart3:v},data:function(){return{heading:"Analytics Dashboard",subheading:"This is an example dashboard created using build-in elements and components.",icon:"pe-7s-plane icon-gradient bg-tempting-azure"}},methods:{}},p=h,b=a("2877"),m=Object(b["a"])(p,e,i,!1,null,null,null);s["default"]=m.exports}}]);