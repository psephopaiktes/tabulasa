(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96e1d584"],{"354a":function(t,e,o){},3736:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"c-page"},[o("h1",[t._v("Post to Gist")]),t.$store.state.chromeSync.gitHubToken?t.error?o("div",{attrs:{id:"error"}},[t._m(0),o("p",[t._v(t._s(t.error))])]):t.url?o("div",{attrs:{id:"complete"}},[o("p",[t._v("Post complete.")]),o("p",[o("a",{attrs:{href:t.url}},[t._v("Show in Gist.")])])]):o("form",{attrs:{id:"form"},on:{submit:t.post}},[o("label",[t._v("file name"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fileName,expression:"fileName"}],attrs:{type:"text",required:"",placeholder:"File name including extension...",spellcheck:"false",autofocus:""},domProps:{value:t.fileName},on:{focus:function(t){return t.target.select()},input:function(e){e.target.composing||(t.fileName=e.target.value)}}})]),o("label",[t._v("description"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fileDescription,expression:"fileDescription"}],attrs:{type:"text",placeholder:"Gist description... *optional"},domProps:{value:t.fileDescription},on:{input:function(e){e.target.composing||(t.fileDescription=e.target.value)}}})]),o("label",[t._v("content"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fileBody,expression:"fileBody"}],attrs:{required:"",rows:"10"},domProps:{value:t.fileBody},on:{input:function(e){e.target.composing||(t.fileBody=e.target.value)}}})]),o("button",{staticClass:"c-btn",attrs:{type:"submit"}},[o("svg",{class:"gray",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[o("path",{attrs:{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}}),o("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),t._v("POST")])]):o("div",{attrs:{id:"nonToken"}},[o("p",[t._v("GitHub Token is required.")]),o("p",[t._v("Please set from "),o("router-link",{attrs:{to:"/options"}},[t._v("here")]),t._v(".")],1)]),o("router-link",{staticClass:"back",attrs:{to:"/"}},[o("svg",{class:"gray",attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[o("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),o("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})]),t._v("back to editor")])],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("strong",[t._v("Error has occurred.")])])}],n=o("9ab4"),s=o("60a3"),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.url="",e.error="",e.fileName="",e.fileDescription="",e.fileBody="",e}return Object(n["b"])(e,t),e.prototype.beforeCreate=function(){window.document.title="Post to Gist | "+this.$store.state.extensionName},e.prototype.mounted=function(){var t=new Date;this.fileName="tabulasa_"+t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()+"_"+t.getHours()+"-"+t.getMinutes()+".md",this.fileBody=this.$store.state.memoData},e.prototype.post=function(t){var e=this,o=this.$store.state.chromeSync.gitHubToken,i={Authorization:"token "+o,"Content-Type":"application/json"},r={description:this.fileDescription,public:!0,files:{}};r.files[this.fileName]={content:this.fileBody},fetch("https://api.github.com/gists",{method:"POST",mode:"cors",headers:i,body:JSON.stringify(r)}).then((function(t){return t.json()})).then((function(t){return t.html_url?e.url=t.html_url:e.error="Post failed. "+t.message,window.console.log("Success:",JSON.stringify(t))})).catch((function(t){return e.error=t,window.console.error("Error:",t)})),t.preventDefault()},e=Object(n["a"])([s["a"]],e),e}(s["c"]),l=a,c=l,u=(o("cd2d"),o("2877")),p=Object(u["a"])(c,i,r,!1,null,"1a047053",null);e["default"]=p.exports},cd2d:function(t,e,o){"use strict";var i=o("354a"),r=o.n(i);r.a}}]);