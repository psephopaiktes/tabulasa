(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63938b24"],{2358:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"c-page"},[a("h1",[e._v("Options")]),a("h2",{attrs:{id:"theme"}},[e._v("Editor Theme")]),a("ul",[a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"system",checked:""},domProps:{checked:e._q(e.theme,"system")},on:{change:function(t){e.theme="system"}}}),e._v("system")])]),a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"light"},domProps:{checked:e._q(e.theme,"light")},on:{change:function(t){e.theme="light"}}}),e._v("light")])]),a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"dark"},domProps:{checked:e._q(e.theme,"dark")},on:{change:function(t){e.theme="dark"}}}),e._v("dark")])])]),a("h2",{attrs:{id:"wallpaper"}},[e._v("Wallpaper")]),a("p",[e._v("You can show Wallpaper when not the editor is focused.")]),a("h3",[e._v(" background image")]),a("ul",[a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"system",checked:""},domProps:{checked:e._q(e.theme,"system")},on:{change:function(t){e.theme="system"}}}),e._v("none")])]),a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"light"},domProps:{checked:e._q(e.theme,"light")},on:{change:function(t){e.theme="light"}}}),e._v("daily cat")])]),a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"dark"},domProps:{checked:e._q(e.theme,"dark")},on:{change:function(t){e.theme="dark"}}}),e._v("solid color")])]),a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"dark"},domProps:{checked:e._q(e.theme,"dark")},on:{change:function(t){e.theme="dark"}}}),e._v("image url on web")])])]),a("h3",[e._v("clock")]),a("ul",[a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"system",checked:""},domProps:{checked:e._q(e.theme,"system")},on:{change:function(t){e.theme="system"}}}),e._v("none")])]),a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"light"},domProps:{checked:e._q(e.theme,"light")},on:{change:function(t){e.theme="light"}}}),e._v("analog")])]),a("li",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{type:"radio",name:"theme",value:"dark"},domProps:{checked:e._q(e.theme,"dark")},on:{change:function(t){e.theme="dark"}}}),e._v("digit")])])]),a("h2",{attrs:{id:"token"}},[e._v("GitHub Token")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],attrs:{type:"text",placeholder:"input your GitHub Token."},domProps:{value:e.token},on:{input:function(t){t.target.composing||(e.token=t.target.value)}}}),e._m(0),e._m(1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Required to post notes to "),a("a",{attrs:{href:"https://gist.github.com/",target:"_brank"}},[e._v("Gist")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("details",[n("summary",[e._v("How to get Token.")]),n("div",[n("ol",[n("li",[e._v("Signin or Signup to "),n("a",{attrs:{href:"https://github.com/",target:"_brank"}},[e._v("GitHub")]),e._v(".")]),n("li",[e._v('Access "'),n("a",{attrs:{href:"https://github.com/settings/tokens/new",target:"_brank"}},[e._v("New personal access token")]),e._v('" page, and cofirm password.')]),n("li",[e._v('Enter "Tabulasa" in "Note", check "gist", and press the "Generate token" button.'),n("img",{attrs:{src:a("656d"),alt:"GitHub Screen capture."}})]),n("li",[e._v("New token is generated.")])])])])}],i=a("9ab4"),r=a("60a3"),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i["b"])(t,e),t.prototype.beforeCreate=function(){window.document.title="Customize | "+this.$store.state.extensionName},t.prototype.set=function(){this.$store.commit("setOptions",{key:"theme",val:"dark"})},Object.defineProperty(t.prototype,"theme",{get:function(){return this.$store.state.chromeSync.theme},set:function(e){this.$store.commit("setOptions",{key:"theme",val:e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"token",{get:function(){return this.$store.state.chromeSync.gitHubToken},set:function(e){this.$store.commit("setOptions",{key:"gitHubToken",val:e})},enumerable:!0,configurable:!0}),t=Object(i["a"])([r["a"]],t),t}(r["c"]),s=m,l=s,h=(a("6727"),a("2877")),c=Object(h["a"])(l,n,o,!1,null,"e162f534",null);t["default"]=c.exports},3204:function(e,t,a){},"656d":function(e,t,a){e.exports=a.p+"img/gist-token.2087e843.png"},6727:function(e,t,a){"use strict";var n=a("3204"),o=a.n(n);o.a}}]);