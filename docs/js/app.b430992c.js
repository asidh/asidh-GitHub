(function(t){function e(e){for(var r,o,i=e[0],s=e[1],c=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ab2eb92c"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"5f306d34"}[t]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/SHELTER-ZONE/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"287c":function(t,e,n){"use strict";var r=n("2be3"),o=n.n(r);o.a},"2be3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("transition",{attrs:{name:"fade"}},[0==t.$store.state.ishome?n("router-view",{attrs:{id:"router-view"}}):t._e()],1),n("GoTop"),n("Footer",{attrs:{id:"footer"}})],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",class:{home:t.msg},attrs:{id:"header"}},[n("NavBar"),n("h1",{attrs:{id:"server-name","data-aos":"fade-up","data-aos-duration":"2000","data-aos-delay":"500"}},[t._v(" SHELTER ZONE ")]),n("h3",{attrs:{id:"sub-title","data-aos":"fade-up","data-aos-duration":"2000","data-aos-delay":"1000"}},[t._v("2018 / 6 / 27 Proladon#7525")])],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav","data-aos":"fade-down","data-aos-duration":"1000"}},[n("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){return t.repage(!0)}}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.repage(!1)}}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/docs"},nativeOn:{click:function(e){return t.repage(!1)}}},[t._v("Docs")]),t._v(" | "),n("router-link",{attrs:{to:"/join"},nativeOn:{click:function(e){return t.repage(!1)}}},[t._v("Join")])],1)},c=[],l=n("f5af"),f=n.n(l),d={name:"NavBar",methods:{repage:function(t){this.$store.commit("page",t),setTimeout((function(){f.a.refresh()}),1100)}}},p=d,m=(n("9842"),n("2877")),v=Object(m["a"])(p,s,c,!1,null,"03617232",null),h=v.exports,b={name:"Header",components:{NavBar:h},data:function(){return{msg:this.$store.state.ishome}},computed:{listenspage:function(){return this.$store.state.ishome}},watch:{listenspage:function(t){this.msg=t}}},g=b,_=(n("287c"),Object(m["a"])(g,u,i,!1,null,"10e0bbf7",null)),y=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gotop"},[n("button",{on:{click:this.scrollToTop}})])},O=[],E={name:"GoTop",methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},j=E,T=(n("5a7a"),Object(m["a"])(j,w,O,!1,null,"d98c53d0",null)),k=T.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v(" footer ")])},S=[],C={name:"Footer"},P=C,$=(n("af10"),Object(m["a"])(P,x,S,!1,null,"4299011a",null)),N=$.exports,H={components:{Header:y,GoTop:k,Footer:N}},A=H,L=(n("5c0b"),Object(m["a"])(A,o,a,!1,null,null,null)),B=L.exports,D=(n("d3b7"),n("8c4f")),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",attrs:{"data-aos":"fade-up"}},[t._v(" 123 ")])},J=[],M={name:"Home",components:{}},G=M,q=Object(m["a"])(G,F,J,!1,null,null,null),R=q.exports;r["a"].use(D["a"]);var Z=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/docs",name:"Docs",component:function(){return n.e("about").then(n.bind(null,"eba1"))}},{path:"/join",name:"Join",component:function(){return n.e("about").then(n.bind(null,"c283"))}}],I=new D["a"]({routes:Z}),K=I,U=n("2f62");r["a"].use(U["a"]);var z=new U["a"].Store({state:{ishome:!0},mutations:{page:function(t,e){t.ishome=e}},actions:{},modules:{}});n("e829");r["a"].config.productionTip=!1,new r["a"]({created:function(){f.a.init({duration:1e3})},router:K,store:z,render:function(t){return t(B)}}).$mount("#app")},"5a7a":function(t,e,n){"use strict";var r=n("d70b"),o=n.n(r);o.a},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"940d":function(t,e,n){},9842:function(t,e,n){"use strict";var r=n("940d"),o=n.n(r);o.a},"9c0c":function(t,e,n){},ab62:function(t,e,n){},af10:function(t,e,n){"use strict";var r=n("ab62"),o=n.n(r);o.a},d70b:function(t,e,n){}});
//# sourceMappingURL=app.b430992c.js.map