(function(t){function e(e){for(var a,r,c=e[0],i=e[1],l=e[2],h=0,u=[];h<c.length;h++)r=c[h],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);v&&v(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-359fc28e":"87448eb4","chunk-569fcf4a":"aeda662d","chunk-70deb736":"3ac15e02","chunk-ad70ff4c":"7abd8f8f","chunk-c5c588ca":"e8677ee4"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-359fc28e":1,"chunk-569fcf4a":1,"chunk-70deb736":1,"chunk-ad70ff4c":1,"chunk-c5c588ca":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-359fc28e":"a077f7bc","chunk-569fcf4a":"447872f9","chunk-70deb736":"0e433876","chunk-ad70ff4c":"0e433876","chunk-c5c588ca":"1a5bdbf5"}[t]+".css",o=i.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],h=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(h===a||h===o))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],h=l.getAttribute("data-href");if(h===a||h===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],v.parentNode.removeChild(v),n(s)},v.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=c(t);var u=new Error;l=function(e){h.onerror=h.onload=null,clearTimeout(v);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:h})}),12e4);h.onerror=h.onload=l,document.head.appendChild(h)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var v=h;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"10f4":function(t,e,n){"use strict";var a=n("3837"),r=n.n(a);r.a},3837:function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("f431"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$store.state.chromeSync.theme,attrs:{id:"app"}},[n("Nav"),n("router-view")],1)},o=[],s=n("9ab4"),c=n("60a3"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("button",{attrs:{id:"menuButton",tabindex:"2"},on:{click:function(e){t.show=!0}}},[n("svg",{attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M4 18h16a1 1 0 000-2H4a1 1 0 000 2zm0-5h16a1 1 0 000-2H4a1 1 0 000 2zM3 7a1 1 0 001 1h16a1 1 0 000-2H4a1 1 0 00-1 1z"}})])]),n("div",{staticClass:"c-overlay",class:{show:t.show},on:{click:function(e){t.show=!1}}}),n("section",{class:{show:t.show},attrs:{id:"drawer"}},[n("h1",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 80","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M55.34 46.14v11.67H44.58l-2.42 18.56H28.79l2.43-18.56h-8.71l-2.42 18.56H6.82l2.51-18.56H0V46.14h10.76l1.08-8.61H2.69V26h10.68l2.24-17.26h13.18L26.55 26h8.7l2.33-17.26h13.28L48.62 26h9.15v11.53H47.18L46 46.14zm-21.52-8.61h-8.7L24 46.14h8.7zM109.09 23.63v52.74H91.51V23.63H77.07V8.74h46.47v14.89zM156.85 30.36h16.32v46h-16.32v-5.1a17 17 0 01-14.08 6.55 23 23 0 01-9.24-1.81 22.13 22.13 0 01-7.36-5.16 23.88 23.88 0 01-4.89-7.8 26.82 26.82 0 01-1.75-9.78 25.83 25.83 0 011.71-9.37A24 24 0 01126 36.1a22.52 22.52 0 017.27-5.25 22.25 22.25 0 019.33-1.93 18.77 18.77 0 0114.26 6zM136.4 53.23a10.7 10.7 0 003 7.54 10 10 0 003.32 2.23 10.69 10.69 0 004.17.81A10.39 10.39 0 00151 63a10 10 0 003.32-2.24 11.49 11.49 0 002.24-3.32 9.67 9.67 0 00.86-4 10 10 0 00-.86-4.08 11 11 0 00-2.27-3.36 9.86 9.86 0 00-3.29-2.28 10.38 10.38 0 00-4.08-.8 10.68 10.68 0 00-4.17.8A9.86 9.86 0 00139.4 46a10.88 10.88 0 00-2.2 3.27 10 10 0 00-.8 3.96zM198.74 1.92v33a19.06 19.06 0 0114.36-6 22.57 22.57 0 019.37 1.93 22.14 22.14 0 017.26 5.2 23.87 23.87 0 014.71 7.72 27.11 27.11 0 010 19.06 23.88 23.88 0 01-4.89 7.8 23.23 23.23 0 01-7.4 5.25 22 22 0 01-9.19 1.93q-9 0-14.18-6.55v5.11h-16.27V1.92zM219.2 53.5a10.52 10.52 0 00-3-7.44 11.25 11.25 0 00-3.32-2.29 9.91 9.91 0 00-4.13-.85 10 10 0 00-7.31 3 11 11 0 00-2.24 3.36 10 10 0 00-.86 4.08 10.1 10.1 0 003.05 7.31 11.21 11.21 0 003.32 2.33 9.92 9.92 0 004.08.86 10.1 10.1 0 007.31-3 11.69 11.69 0 002.24-3.32 9.46 9.46 0 00.86-4.04zM259.37 30.36v25.92q0 8.52 8.25 8.52t8.25-8.52V30.36h16.24v29.06q0 9.33-6.15 14t-18.34 4.67q-12.19 0-18.34-4.67t-6.15-14V30.36zM317.19 1.92v74.45H301V1.92zM360.64 30.36H377v46h-16.36v-5.1a17 17 0 01-14.09 6.55 23 23 0 01-9.24-1.81 22.19 22.19 0 01-7.31-5.19 23.72 23.72 0 01-4.89-7.8 26.61 26.61 0 01-1.75-9.78 25.83 25.83 0 011.64-9.37 24 24 0 014.75-7.76 22.47 22.47 0 017.25-5.25 22.25 22.25 0 019.33-1.93 18.79 18.79 0 0114.27 6zm-20.46 22.87a10.62 10.62 0 00.82 4.17 10.74 10.74 0 002.2 3.37 10 10 0 003.31 2.23 10.62 10.62 0 004.17.81 10.46 10.46 0 004.08-.81 10 10 0 003.32-2.24 11.69 11.69 0 002.24-3.32 9.66 9.66 0 00.85-4 10 10 0 00-.85-4.08 11.22 11.22 0 00-2.24-3.36 9.86 9.86 0 00-3.32-2.25 10.45 10.45 0 00-4.08-.8 10.61 10.61 0 00-4.17.8 9.86 9.86 0 00-3.32 2.25 10.88 10.88 0 00-2.2 3.27 9.81 9.81 0 00-.81 3.96zM415.11 42.2a18.9 18.9 0 00-8.79-2.33 6.64 6.64 0 00-3.63.89 2.76 2.76 0 00-1.39 2.42 3.22 3.22 0 00.22 1.31 2.32 2.32 0 001 .94 8.06 8.06 0 002.24.8q1.49.36 3.9.9c4.49.9 7.83 2.5 10.05 4.8a12.24 12.24 0 013.29 8.84 16 16 0 01-1.6 7.23 15.49 15.49 0 01-4.48 5.43 21.57 21.57 0 01-6.92 3.44 31.05 31.05 0 01-8.88 1.21 36.09 36.09 0 01-18.39-5.3l5.92-11.48q6.82 4.7 12.93 4.7a6.36 6.36 0 003.68-1 3 3 0 001.43-2.51 4.16 4.16 0 00-.22-1.48 2.43 2.43 0 00-1-1.08 7.43 7.43 0 00-2.1-.89c-.93-.27-2.14-.56-3.64-.86q-7.53-1.52-10.54-4.53t-3-8.29a16.27 16.27 0 011.44-7 14.26 14.26 0 014.12-5.25 19.26 19.26 0 016.5-3.32 28.83 28.83 0 018.48-1.17 38.52 38.52 0 0114.8 3zM463.68 30.36H480v46h-16.32v-5.1a17 17 0 01-14.09 6.55 23 23 0 01-9.24-1.81 22.19 22.19 0 01-7.35-5.19 23.72 23.72 0 01-4.89-7.8 26.61 26.61 0 01-1.75-9.78 26 26 0 011.7-9.37 24.22 24.22 0 014.76-7.76 22.47 22.47 0 017.26-5.25 22.25 22.25 0 019.33-1.93 18.79 18.79 0 0114.27 6zm-20.46 22.87a10.62 10.62 0 00.78 4.17 10.74 10.74 0 002.2 3.37 10 10 0 003.35 2.23 10.62 10.62 0 004.17.81 10.46 10.46 0 004.08-.81 10 10 0 003.32-2.24 11.9 11.9 0 002.24-3.32 9.66 9.66 0 00.85-4 10 10 0 00-.85-4.08 11.42 11.42 0 00-2.24-3.36 9.86 9.86 0 00-3.32-2.25 10.45 10.45 0 00-4.08-.8 10.61 10.61 0 00-4.17.8 9.86 9.86 0 00-3.32 2.25 10.88 10.88 0 00-2.2 3.27 9.81 9.81 0 00-.81 3.96z"}})])]),n("hr"),n("ul",[n("li",[n("router-link",{attrs:{id:"focusTarget",to:"/"},nativeOn:{click:function(e){t.show=!1}}},[n("svg",{class:"gray",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M20.21 11h-16a1 1 0 000 2h16a1 1 0 000-2zm-16 7h10a1 1 0 000-2h-10a1 1 0 000 2zM20 6H4a1 1 0 00-1 1 1 1 0 001 1h16a1 1 0 001-1 1 1 0 00-1-1z"}})]),t._v("Editor")])],1),n("li",[n("router-link",{attrs:{to:"/options"},nativeOn:{click:function(e){t.show=!1}}},[n("svg",{class:"gray",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M3 18a1 1 0 001 1h5v-2H4a1 1 0 00-1 1zM3 6a1 1 0 001 1h9V5H4a1 1 0 00-1 1zm10 14v-1h7a1 1 0 000-2h-7v-1a1 1 0 00-2 0v4a1 1 0 002 0zM7 10v1H4a1 1 0 000 2h3v1a1 1 0 002 0v-4a1 1 0 00-2 0zm14 2a1 1 0 00-1-1h-9v2h9a1 1 0 001-1zm-5-3a1 1 0 001-1V7h3a1 1 0 000-2h-3V4a1 1 0 00-2 0v4a1 1 0 001 1z"}})]),t._v("Options")])],1),n("li",[n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){t.show=!1}}},[n("svg",{class:"gray",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M12 1.81a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8zM11 16h2v2h-2zm1.61-10a4 4 0 00-4.43 2.83.91.91 0 00.87 1.17h.2a1 1 0 00.88-.67 2 2 0 012.3-1.28 2 2 0 011.57 2.1c-.1 1.34-1.62 1.63-2.45 2.88a3.33 3.33 0 00-.25.5v.08a.64.64 0 000 .07A3.72 3.72 0 0011 15h2a2.12 2.12 0 01.28-1.07l.05-.09a2.76 2.76 0 01.28-.39 3.51 3.51 0 01.33-.34c1-.91 2.26-1.65 2-3.56A4.08 4.08 0 0012.61 6z"}})]),t._v("About")])],1)]),n("hr"),n("h3",[t._v("Chrome")]),n("ul",{staticClass:"chrome"},[n("li",[n("a",{attrs:{href:"chrome://history"},on:{click:function(e){return t.chrome("history")}}},[n("svg",{class:"blue",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M13.5 3a9 9 0 00-9.25 9h-3l3.89 3.89.07.14 4-4h-3a7 7 0 017.09-7 7.09 7.09 0 016.9 6.9 7 7 0 01-11.93 5l-1.38 1.43a9 9 0 0015.35-6.62A9.1 9.1 0 0013.5 3zM12 8v5.35l4.53 2.54.72-1.21L14 12.6V8z"}})]),t._v("History")])]),n("li",[n("a",{attrs:{href:"chrome://downloads"},on:{click:function(e){return t.chrome("downloads")}}},[n("svg",{class:"blue",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M4.72 18.9h14.55v2.4H4.72zM12 16.97l7.67-7.68h-4.45V2.7H8.78v6.59H4.33z"}})]),t._v("Downloads")])]),n("li",[n("a",{attrs:{href:"chrome://bookmarks"},on:{click:function(e){return t.chrome("bookmarks")}}},[n("svg",{class:"blue",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M11.86 17.27L18 21l-1.6-7 5.46-4.73-7.19-.61L11.86 2 9.05 8.63l-7.19.61L7.32 14l-1.64 7z"}})]),t._v("Bookmarks")])]),n("li",[n("a",{attrs:{href:"chrome://extensions"},on:{click:function(e){return t.chrome("extensions")}}},[n("svg",{class:"blue",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M20.5 11H19V7a2 2 0 00-2-2h-4V3.62a2.56 2.56 0 00-1.88-2.54A2.5 2.5 0 008 3.5V5H4a2 2 0 00-2 2v4h1.2a2.62 2.62 0 012.67 2.27A2.51 2.51 0 013.38 16H2v4a2 2 0 002 2h4v-1.52a2.65 2.65 0 011.71-2.55A2.55 2.55 0 0113 20.5V22h4a2 2 0 002-2v-4h1.38a2.56 2.56 0 002.54-1.88A2.5 2.5 0 0020.5 11z"}})]),t._v("Extensions")])]),n("li",[n("a",{attrs:{href:"chrome://settings"},on:{click:function(e){return t.chrome("settings")}}},[n("svg",{class:"blue",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M20.15 13.08a9.63 9.63 0 00.09-1.08 6.47 6.47 0 00-.09-1.08l2.33-1.82a.58.58 0 00.13-.7l-2.2-3.8a.56.56 0 00-.68-.24L17 5.46a7.72 7.72 0 00-1.87-1.08l-.41-2.9A.54.54 0 0014.2 1H9.81a.56.56 0 00-.55.46l-.42 2.9A8.85 8.85 0 007 5.46l-2.75-1.1a.58.58 0 00-.68.24L1.38 8.4a.53.53 0 00.13.7l2.33 1.82a8.37 8.37 0 000 2.16L1.51 14.9a.55.55 0 00-.13.7l2.19 3.8a.56.56 0 00.68.24L7 18.54a7.66 7.66 0 001.86 1.08l.42 2.9a.54.54 0 00.55.46h4.37a.58.58 0 00.55-.46l.41-2.9A8.3 8.3 0 0017 18.54l2.74 1.1a.57.57 0 00.68-.24l2.2-3.8a.58.58 0 00-.13-.7zM12 15.29A3.29 3.29 0 1115.3 12a3.29 3.29 0 01-3.3 3.29z"}})]),t._v("Settings")])]),n("li",[n("a",{attrs:{href:"chrome://apps"},on:{click:function(e){return t.chrome("apps")}}},[n("svg",{attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M4 3.95h4v4H4z",fill:"#e34a3e"}}),n("path",{attrs:{d:"M10 15.95h4v4h-4z",fill:"#e5a439"}}),n("path",{attrs:{d:"M4 15.95h4v4H4z",fill:"#529a60"}}),n("path",{attrs:{d:"M10 9.95h4v4h-4z",fill:"#418bec"}}),n("path",{attrs:{d:"M4 9.95h4v4H4z",fill:"#529a60"}}),n("path",{attrs:{d:"M16 3.95h4v4h-4z",fill:"#e34a3e"}}),n("path",{attrs:{d:"M16 9.95h4v4h-4z",fill:"#e5a439"}}),n("path",{attrs:{d:"M10 3.95h4v4h-4z",fill:"#e34a3e"}}),n("path",{attrs:{d:"M16 15.95h4v4h-4z",fill:"#e5a439"}})]),t._v("Apps")])]),n("li",[n("a",{attrs:{href:"chrome://dino"},on:{click:function(e){return t.chrome("dino")}}},[n("svg",{class:"gray",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{d:"M22.23 6.63V2h-1V1H13v1h-1v6.67h-1v1H9.44v1H7.91v1h-1v1h-2v-1h-1v-1h-1v-2h-1v6.14h1v1h1v1h1v1h1v.52h.51v.51h.51V23h2v-1h-1v-1h1v-1h1v-1h1v1h1v3h2.05v-1H13v-4.1h1v-1h1v-1.57h1v-3.59h1v1h1v-2h-1.91V8.67h4.1v-1h-3.07v-1zm-7.16-3.07h-1v-1h1z"}})]),t._v("Dino")])])]),t._m(0)])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"copy"}},[n("small",[n("a",{attrs:{href:"https://twitter.com/psephopaiktes"}},[t._v("© Akira HIRATA")])])])}],h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.show=!1,e}return Object(s["b"])(e,t),e.prototype.chrome=function(t){try{chrome.tabs.update({url:"chrome://"+t})}catch(e){alert("This feature can't be used in Demo.")}},e=Object(s["a"])([c["a"]],e),e}(c["c"]),u=h,v=u,f=(n("10f4"),n("2877")),p=Object(f["a"])(v,i,l,!1,null,"056b0202",null),d=p.exports,m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(s["b"])(e,t),e.prototype.beforeCreate=function(){var t=this;chrome.storage.sync.get((function(e){t.$store.commit("getOptions",e)}))},e.prototype.mounted=function(){location.search.match(/options/g)&&this.$router.push("/options")},e=Object(s["a"])([Object(c["a"])({components:{Nav:d}})],e),e}(c["c"]),b=m,g=b,w=(n("5c0b"),Object(f["a"])(g,r,o,!1,null,null,null)),k=w.exports,x=n("8c4f");a["a"].use(x["a"]);var y=new x["a"]({mode:"history",base:"",routes:[{path:"/index.html",component:function(){return n.e("chunk-c5c588ca").then(n.bind(null,"49d7"))}},{path:"/",component:function(){return n.e("chunk-c5c588ca").then(n.bind(null,"49d7"))}},{path:"/tabulasa/dist/",component:function(){return n.e("chunk-c5c588ca").then(n.bind(null,"49d7"))}},{path:"/dist/",component:function(){return n.e("chunk-c5c588ca").then(n.bind(null,"49d7"))}},{path:"/options",component:function(){return n.e("chunk-359fc28e").then(n.bind(null,"2358"))}},{path:"/about",component:function(){return n.e("chunk-70deb736").then(n.bind(null,"f820"))}},{path:"/gist",component:function(){return n.e("chunk-ad70ff4c").then(n.bind(null,"3736"))}},{path:"/*",component:function(){return n.e("chunk-569fcf4a").then(n.bind(null,"dda8"))}}]}),z=n("2f62");a["a"].use(z["a"]);var M=new z["a"].Store({state:{extensionName:"Tabulasa",mode:"edit",memoData:"",chromeSync:{theme:"system",gitHubToken:"806cc639bfb74ba20810d01c763d5093fdc214f5"}},mutations:{updateMemoData:function(t,e){t.memoData=e,localStorage.memoData=e},toggleMode:function(t){switch(t.mode){case"edit":t.mode="preview";break;case"preview":t.mode="edit";break}},getOptions:function(t,e){t.chromeSync=e},setOptions:function(t,e){var n;t.chromeSync[e.key]=e.val,chrome.storage.sync.set((n={},n[e.key]=e.val,n))}},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:y,store:M,render:function(t){return t(k)}}).$mount("#app"),window.console.log("%chttps://github.com/psephopaiktes/tabulasa","\n    padding: 20px 40px;\n    margin: 40px 0px;\n    border: 2px solid #ccc;\n    border-radius: 8px;\n    letter-spacing: .1em;\n    font-size: large;\n    font-weight: bold;\n    text-align: center;\n  ")},f431:function(t,e,n){}});