(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-76d5f6e9":"82e82072","chunk-44805f8d":"4f7d541c","chunk-5807db9a":"73458502","chunk-5f59f46a":"6e72dbd0"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-76d5f6e9":1,"chunk-44805f8d":1,"chunk-5807db9a":1,"chunk-5f59f46a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-76d5f6e9":"c4a03b80","chunk-44805f8d":"400540b8","chunk-5807db9a":"d8e45e3e","chunk-5f59f46a":"3d597193"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22de":function(e,t,n){"use strict";var r=n("8319"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("2877"),u={},c=Object(i["a"])(u,a,o,!1,null,null,null),s=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",{staticClass:"bg-primary pt-3 pb-2"},[n("div",{staticClass:"nav d-flex text-white jc-around pb-1"},[n("div",{staticClass:"nav-inverse active"},[n("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/home"}},[e._v("首页")])],1),n("div",{staticClass:"nav-inverse"},[n("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/home"}},[e._v("攻略中心")])],1),n("div",{staticClass:"nav-inverse"},[n("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/home"}},[e._v("赛事中心")])],1)])]),n("router-view")],1)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[r("img",{attrs:{src:n("9d64"),height:"30"}}),r("div",{staticClass:"px-2 flex-1"},[r("div",{staticClass:"text-white"},[e._v("王者荣耀")]),r("div",{staticClass:"text-grey-1 fs-xxs"},[e._v("团队成就更多")])]),r("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[e._v("立即下载")])])}],p={name:"mainBox"},h=p,v=(n("22de"),Object(i["a"])(h,d,f,!1,null,null,null)),m=v.exports;r["a"].use(l["a"]);var b=[{path:"/",name:"mainBox",component:m,redirect:"/home",children:[{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-76d5f6e9"),n.e("chunk-44805f8d")]).then(n.bind(null,"bb51"))}},{path:"/articles/:id",name:"m-article",props:!0,component:function(){return Promise.all([n.e("chunk-76d5f6e9"),n.e("chunk-5807db9a")]).then(n.bind(null,"3ad6"))}}]},{path:"/heroes/:id",name:"hero",props:!0,component:function(){return Promise.all([n.e("chunk-76d5f6e9"),n.e("chunk-5f59f46a")]).then(n.bind(null,"5d88"))}}],g=new l["a"]({routes:b}),y=g,k=(n("78a7"),n("7212")),w=n.n(k),x=(n("dfa4"),n("bc3a")),_=n.n(x),C=_.a.create({baseURL:"http://106.54.2.108:3000/web/api"}),j=C;r["a"].use(w.a),r["a"].config.productionTip=!1,r["a"].prototype.$http=j,new r["a"]({router:y,render:function(e){return e(s)}}).$mount("#app")},"78a7":function(e,t,n){},8319:function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.8ff2edb4.png"}});
//# sourceMappingURL=app.4e213652.js.map