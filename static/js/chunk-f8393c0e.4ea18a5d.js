(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8393c0e"],{"0b2a":function(t,n,e){},"4ef5":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Setting"},[e("headerBar",{staticStyle:{"background-color":"#1989FA",color:"#f5f5f5"}},[e("h3",[t._v("设置")])]),e("div",{staticClass:"main"},[t._m(0),e("p",{on:{click:function(n){return t.getImage()}}},[e("i",{staticClass:"iconfont icon-lanya"}),e("span",[t._v("蓝牙名称：")])]),e("p",{on:{click:function(n){return t.Upgrade()}}},[e("i",{staticClass:"iconfont icon-banben"}),e("span",[t._v("版本号：")])]),t._m(1),t._m(2)]),e("van-button",{attrs:{type:"danger"},on:{click:t.outlogin}},[t._v("退出登录")])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("i",{staticClass:"iconfont icon-subscriber-square"}),e("span",[t._v("登录用户：")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("i",{staticClass:"iconfont icon-qingchuhuancun"}),e("span",[t._v("清楚缓存：")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("i",{staticClass:"iconfont icon-xiaoxi"}),e("span",[t._v("消息通知：")])])}],i=(e("e17f"),e("2241")),s={data:function(){return{Website:"",VersionExplain:"",myVersion:""}},created:function(){window.plus?this.plusReady():document.addEventListener("plusready",this.plusReady,!1)},methods:{Upgrade:function(){plus.runtime.openURL(this.Website),this.getVersion()},getVersion:function(){var t=this;this.$http.post("/api/WSDA/AddData").then((function(n){t.myVersion=plus.runtime.version,t.Website=n.data.app_download,t.VersionExplain=n.data.app_info,t.myVersion!=n.data.app_version?t.$toast("有新内容 准备更新"):t.$toast("已是最新版本")}))},plusReady:function(){plus.webview.currentWebview()},getImage:function(){var t=plus.camera.getCamera(),n=t.supportedImageResolutions[0],e=t.supportedImageFormats[0];console.log("Resolution :"+n+", Format: "+e),t.captureImage((function(t){alert("调用成功: "+t)}),(function(t){alert("调用失败: "+t.message)}),{resolution:n,format:e})},outlogin:function(){var t=this;i["a"].confirm({message:"您确定要退出登录吗？"}).then((function(n){t.$toast("退出成功"),setTimeout((function(n){localStorage.removeItem("token"),localStorage.removeItem("saveLable"),localStorage.removeItem("LineID"),t.$router.push("/login")}),500),console.log("你点确定了")})).catch((function(t){console.log("你点取消了"),console.log(t)}))}},mounted:function(){}},c=s,r=(e("a299"),e("2877")),u=Object(r["a"])(c,o,a,!1,null,null,null);n["default"]=u.exports},a299:function(t,n,e){"use strict";e("0b2a")}}]);