(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d48e2e0"],{"9cd3":function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"inGodown"},[e("headerBar",{staticStyle:{"background-color":"#1989FA",color:"#f5f5f5"}},[e("h3",[t._v("装箱扫描")])]),e("i",{staticClass:"el-icon-plus",on:{click:t.add}}),t._m(0),t._m(1)],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"min"},[e("ul",[e("li",[t._v("入库清单:")]),e("li",[t._v("单据类型:")]),e("li",[t._v("日期:")]),e("li",[t._v("单据状态：")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"foot"},[e("p",[t._v("已无更多数据")])])}],o=(e("e17f"),e("2241")),l={data:function(){return{}},created:function(){},mounted:function(){this.getinGoodown_list()},methods:{add:function(){o["a"].confirm({title:"标题",message:"快去扫码"}).then((function(){})).catch((function(){}))},getinGoodown_list:function(){this.$http.get("/api/InStokInfo/GetBill").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},s=l,a=(e("ee33"),e("2877")),u=Object(a["a"])(s,c,i,!1,null,null,null);n["default"]=u.exports},c432:function(t,n,e){},ee33:function(t,n,e){"use strict";e("c432")}}]);