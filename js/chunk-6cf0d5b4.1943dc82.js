(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cf0d5b4"],{"626e":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outstock"},[i("colorHeaderBar",[i("van-tab",{attrs:{title:"条码入库"}},[i("ul",{staticClass:"main"},[i("li",[t._v("单号："+t._s(t.billsId))]),i("li",[t._v("单据类型：")]),i("li",[t._v("物料条码："),i("small",{staticStyle:{color:"red","margin-left":"-5px"}},[t._v("*")]),i("input",{attrs:{type:"text",placeholder:"请采集条码号/二维码"}}),i("i",{staticClass:"el-icon-full-screen",staticStyle:{"margin-left":"20px"}})]),i("li",[t._v("物料编码：")]),i("li",[t._v("物料名称：")]),i("li",[t._v("供应商批次：")]),i("li",[t._v("批次：")]),i("li",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("span",[t._v("需求数量：")]),i("span",[t._v("以扫数量")]),i("i")]),i("li",[t._v("累计数量：0")])])]),i("van-tab",{staticClass:"billsBatch",attrs:{title:"单据明细"}},[i("div",[i("p",[t._v("物料编码："+t._s(t.wib_BillID))]),i("p",[t._v("物料名称：电力电容器")]),i("p",[t._v("数量："+t._s(t.wib_State))]),i("p",[t._v("单位："+t._s(t.pe_Name))]),i("p",[t._v("批次：")]),i("p",[t._v("扫描数量：")])])])],1)],1)},a=[],s={data:function(){return{active:0,billsId:"",pt_TypeNo:"",wib_BillID:"",wib_State:"",pe_Name:""}},created:function(){this.billsId=this.$route.query.id_;var t=this.$route.query,e=t.pt_TypeNo,i=t.wib_BillID,l=t.wib_State,a=t.pe_Name;this.pt_TypeNo=e,this.wib_BillID=i,this.wib_State=l,this.pe_Name=a},methods:{},mounted:function(){}},n=s,_=(i("8ebc"),i("2877")),c=Object(_["a"])(n,l,a,!1,null,null,null);e["default"]=c.exports},"8ebc":function(t,e,i){"use strict";i("e5a5")},e5a5:function(t,e,i){}}]);