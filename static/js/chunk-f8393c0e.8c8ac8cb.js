(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8393c0e"],{"0b2a":function(t,e,n){},"4ef5":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Setting"},[n("headerBar",{staticStyle:{"background-color":"#1989FA",color:"#f5f5f5"}},[n("h3",[t._v("设置")])]),n("div",{staticClass:"main"},[t._m(0),n("p",{on:{click:function(e){return t.getbluetooth()}}},[n("i",{staticClass:"iconfont icon-lanya"}),n("span",[t._v("蓝牙名称：")])]),n("p",{on:{click:function(e){return t.getImage()}}},[n("i",{staticClass:"iconfont icon-banben"}),n("span",[t._v("版本号：")])]),t._m(1),t._m(2),n("div",{staticStyle:{width:"100%",height:"20%"}}),n("svg",{staticStyle:{height:"20%"},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 512 512"}},[n("g",{attrs:{id:"icomoon-ignore"}},[n("line",{attrs:{"stroke-width":"1",x1:"",y1:"",x2:"",y2:"",stroke:"#449FDB",opacity:""}})]),n("path",{attrs:{d:"M256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM352 128c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zM160 128c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zM352.049 390.37c-19.587-32.574-55.272-54.37-96.049-54.37s-76.462 21.796-96.049 54.37l-41.164-24.698c27.98-46.535 78.958-77.672 137.213-77.672s109.232 31.137 137.213 77.672l-41.164 24.698z",fill:"#666666"}})]),n("p",{staticStyle:{"font-size":"18px","font-weight":"bolder"}},[t._v("We're sorry ...")]),n("p",{staticStyle:{"font-size":"12px"},attrs:{id:"info"}}),n("div",{staticClass:"button",attrs:{onclick:"if(history.length == 1){ws.close();}else{ws.back();ws.back();}"}},[t._v("Back")]),n("div",{staticClass:"button",attrs:{onclick:"ws.close()"}},[t._v("Close")])]),n("van-button",{attrs:{type:"danger"},on:{click:t.outlogin}},[t._v("退出登录")])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("i",{staticClass:"iconfont icon-subscriber-square"}),n("span",[t._v("登录用户：")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("i",{staticClass:"iconfont icon-qingchuhuancun"}),n("span",[t._v("清楚缓存：")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("i",{staticClass:"iconfont icon-xiaoxi"}),n("span",[t._v("消息通知：")])])}],i=(n("e17f"),n("2241")),a={data:function(){return{}},created:function(){window.plus?this.plusReady():(document.addEventListener("plusready",this.plusReady,!1),document.addEventListener("pause",this.onAppPause,!1),document.addEventListener("resume",this.onAppReume,!1))},methods:{plusReady:function(){plus.webview.currentWebview()},onAppPause:function(){console.log("Application paused!")},onAppReume:function(){alert("Application resumed!")},getbluetooth:function(){var t=null;plus.key.addEventListener("backbutton",(function(){1==history.length&&t.close();var e=setTimeout((function(){t.close()}),1e3);window.onbeforeunload=function(){clearTimeout(e)},history.go(-2)}),!1),t=plus.webview.currentWebview(),window.plus?plusReady():document.addEventListener("plusready",plusReady,!1),document.addEventListener("touchstart",(function(){return!1}),!0),document.oncontextmenu=function(){return!1},document.addEventListener("error",(function(t){info.innerText="请求的页面（"+t.href+"）无法打开"}),!1)},getImage:function(){var t=plus.camera.getCamera(),e=t.supportedImageResolutions[0],n=t.supportedImageFormats[0];console.log("Resolution :"+e+", Format: "+n),t.captureImage((function(t){alert("调用成功: "+t)}),(function(t){alert("调用失败: "+t.message)}),{resolution:e,format:n})},outlogin:function(){var t=this;i["a"].confirm({message:"您确定要退出登录吗？"}).then((function(e){t.$toast("退出成功"),setTimeout((function(e){localStorage.removeItem("token"),localStorage.removeItem("saveLable"),localStorage.removeItem("LineID"),t.$router.push("/login")}),500),console.log("你点确定了")})).catch((function(t){console.log("你点取消了"),console.log(t)}))}},mounted:function(){}},c=a,r=(n("a299"),n("2877")),u=Object(r["a"])(c,o,s,!1,null,null,null);e["default"]=u.exports},a299:function(t,e,n){"use strict";n("0b2a")}}]);