(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad5191fc"],{"15c4":function(e,t,n){"use strict";n("82e9")},"1ea1":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prodLine"},[n("headerBar",[n("h3",[e._v("防错料")])]),n("el-select",{attrs:{slot:"head"},on:{change:e.getInpvalue},slot:"head",model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("div",{staticClass:"min"},e._l(e.prodlist,(function(t,l){return n("ul",{key:t.index},[n("van-cell",{attrs:{"is-link":""},on:{click:function(n){return e.showPopup(t)}}},[n("li",[e._v("制令单号："+e._s(t.MABatchNO))]),n("li",[e._v("工单号："+e._s(t.MDBillNo))]),n("li",[e._v("物料规格："+e._s(t.PCBItemName))]),n("li",[e._v("无聊料号："+e._s(t.PCBItemNo))])])],1)})),0),n("van-popup",{staticClass:"min_show",attrs:{round:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("h2",[e._v("请选择功能")]),n("div",[n("p",{on:{click:function(t){return e.navTo("/lodinMaterial?MDBillNo="+e.MDBillNo+"&MdID="+e.MdID+"&PCBItemID="+e.PCBItemID)}}},[e._v(" 上下料")]),n("p",{on:{click:function(t){return e.navTo("/replaceMaterial?MDBillNo="+e.MDBillNo+"&MdID="+e.MdID+"&PCBItemID="+e.PCBItemID)}}},[e._v(" 接换料")]),n("p",{on:{click:function(t){return e.navTo("/polling?MDBillNo="+e.MDBillNo+"&MdID="+e.MdID+"&PCBItemID="+e.PCBItemID)}}},[e._v(" 巡检")])])])],1)},i=[],a=(n("7db0"),{data:function(){return{show:!1,mater_list:[],options:[{value:"10038",label:"装配1线"},{value:"10037",label:"DIP一线"},{value:"10039",label:"DIP三线"},{value:"10036",label:"DIP四线"},{value:"10030",label:"SMT1线"},{value:"10033",label:"SMT2线"},{value:"10032",label:"SMT3线"},{value:"10035",label:"SMT4线"},{value:"10040",label:"中机2线"}],value:"DIP一线",LineID:10037,prodlist:[],MDBillNo:"",MdID:"",PCBItemID:""}},created:function(){var e=localStorage.getItem("saveLable");this.LineID=localStorage.getItem("LineID"),null==e||null==this.LineID?(this.value="DIP一线",this.LineID=10037):this.value=e,this.getProdLine_list()},mounted:function(){this.getProdLine_list()},methods:{showPopup:function(e){this.show=!0;var t=e.MDBillNo,n=e.MdID,l=e.PCBItemID;this.MDBillNo=t,this.MdID=n,this.PCBItemID=l},getInpvalue:function(e){var t=this.options.find((function(t){return t.value===e})),n=t.label;localStorage.setItem("saveLable",n),localStorage.setItem("LineID",e),this.LineID=e,this.getProdLine_list()},getProdLine_list:function(){var e=this,t=this.LineID;this.$http.get("/api/SMTModule/GetMDInfo?LineID=".concat(t)).then((function(t){0==t.ResCode&&(e.prodlist=t.ResData)}))}}}),o=a,r=(n("15c4"),n("2877")),s=Object(r["a"])(o,l,i,!1,null,null,null);t["default"]=s.exports},"65f0":function(e,t,n){var l=n("861d"),i=n("e8b5"),a=n("b622"),o=a("species");e.exports=function(e,t){var n;return i(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?l(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"7db0":function(e,t,n){"use strict";var l=n("23e7"),i=n("b727").find,a=n("44d2"),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),l({target:"Array",proto:!0,forced:r},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(o)},"82e9":function(e,t,n){},b727:function(e,t,n){var l=n("0366"),i=n("44ad"),a=n("7b0b"),o=n("50c4"),r=n("65f0"),s=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,c=4==e,v=6==e,d=7==e,f=5==e||v;return function(I,h,D,p){for(var b,M,m=a(I),B=i(m),_=l(h,D,3),P=o(B.length),g=0,w=p||r,L=t?w(I,P):n||d?w(I,0):void 0;P>g;g++)if((f||g in B)&&(b=B[g],M=_(b,g,m),e))if(t)L[g]=M;else if(M)switch(e){case 3:return!0;case 5:return b;case 6:return g;case 2:s.call(L,b)}else switch(e){case 4:return!1;case 7:s.call(L,b)}return v?-1:u||c?c:L}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},e8b5:function(e,t,n){var l=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==l(e)}}}]);