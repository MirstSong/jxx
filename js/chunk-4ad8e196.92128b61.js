(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad8e196"],{b182:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"distrilScan"},[e("colorHeaderBar",[e("van-tab",{attrs:{title:"条码扫描"}},[e("ul",{staticClass:"main"},[e("li",[t._v("物料条码："),e("small",{staticStyle:{color:"red","margin-left":"-5px"}},[t._v("*")]),e("input",{attrs:{type:"text",placeholder:"请采集条码号/二维码"}}),e("i",{staticClass:"el-icon-full-screen",staticStyle:{"margin-left":"20px"}})]),e("div",[e("p",[t._v("所属工单："+t._s(t.ID))]),e("p",[t._v("工单型号："+t._s(t.mad_BatchNo))]),e("p",[t._v("物料名称：")]),e("p",[t._v("物料型号：")]),e("p",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("span",[t._v("工单配送数量：")]),e("span",[t._v("本次配送数量")]),e("i")])]),e("li",[t._v("数量："),e("input",{attrs:{type:"text",placeholder:"请采输入数量"}}),e("van-button",{attrs:{type:"info",size:"small"}},[t._v("确认")])],1)])]),e("van-tab",{staticClass:"billsBatch",attrs:{title:"单据明细"}},[e("div",[e("p",[t._v("物料编码： ")]),e("p",[t._v("物料名称：")]),e("p",[t._v("调拨仓库：")]),e("p",[t._v("目的仓库：")]),e("p",[t._v("数量：")]),e("p",[t._v("单位：")]),e("p",[t._v("调拨数量：")])])])],1)],1)},s=[],l={data:function(){return{active:0,bm_Model:"",mad_BatchNo:"",ID:"",billsDetail:[]}},created:function(){var t=this.$route.query,a=t.mad_BatchNo,e=t.bm_Model,i=t.ID;this.bm_Model=e,this.mad_BatchNo=a,this.ID=i},methods:{get_allotScan_list:function(){var t=this;this.billsId;this.$http.get("/api/Preelaboration/GetPSSN").then((function(a){0==a.ResCode&&(t.billsDetail=a.ResData)})).catch((function(a){t.$toast(a.ResMsg)}))}},mounted:function(){}},n=l,c=(e("c0fb"),e("2877")),o=Object(c["a"])(n,i,s,!1,null,null,null);a["default"]=o.exports},c0fb:function(t,a,e){"use strict";e("f97b")},f97b:function(t,a,e){}}]);