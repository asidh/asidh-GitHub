(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"46dee46e"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"c65370b0"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/SHELTER-ZONE/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3ddb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("transition",{attrs:{name:"fade"}},[0==t.$store.state.ishome?n("router-view",{attrs:{id:"router-view"}}):t._e()],1),n("GoTop"),n("Footer",{attrs:{id:"footer"}})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",class:{home:t.home},attrs:{id:"header"}},[t.home?t._e():n("NavBar"),n("div",{staticClass:"title-wrapper"},[n("div",{staticClass:"text-container"},[n("p",{class:{header_title:!t.home,server_name:t.home},attrs:{id:"server-name","data-aos":"fade-up","data-aos-duration":"2000","data-aos-delay":"800"}},[t._v(" SHELTER ZONE ")]),n("p",{staticClass:"sub-title",attrs:{"data-aos":"fade","data-aos-duration":"2000","data-aos-delay":"1500"}},[t._v(" 2018 / 06 / 27 Proladon #7525 ")]),n("button",{class:{hide:!t.home},attrs:{id:"enter","data-aos":"flip-right","data-aos-duration":"2000","data-aos-delay":"3000"},on:{click:t.entry}},[t._v(" Entry ")])])])],1)},s=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav","data-aos":"fade-down","data-aos-duration":"1000","data-aos-delay":"2000"}},[n("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){return t.repage(!0)}}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.repage(!1)}}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/docs"},nativeOn:{click:function(e){return t.repage(!1)}}},[t._v("Docs")]),t._v(" | "),n("router-link",{attrs:{to:"/join"},nativeOn:{click:function(e){return t.repage(!1)}}},[t._v("Join")])],1)},c=[],l=n("f5af"),d=n.n(l),f={name:"NavBar",methods:{repage:function(t){this.$store.commit("page",t),1==t?setTimeout((function(){d.a.refreshHard()}),3e3):setTimeout((function(){d.a.refreshHard()}),1100)}}},p=f,h=(n("b00e"),n("2877")),m=Object(h["a"])(p,u,c,!1,null,"17b869b3",null),v=m.exports,b={name:"Header",components:{NavBar:v},data:function(){return{home:this.$store.state.ishome}},methods:{repage:function(t){this.$store.commit("page",t),setTimeout((function(){d.a.refreshHard()}),1e3)},entry:function(){this.$router.push({path:"about"}),this.repage(!1)}},computed:{listenspage:function(){return this.$store.state.ishome}},watch:{listenspage:function(t){this.home=t}}},g=b,_=(n("d971"),Object(h["a"])(g,i,s,!1,null,"f86aa176",null)),y=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gotop"},[n("button",{on:{click:this.scrollToTop}})])},O=[],E={name:"GoTop",methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},j=E,T=(n("5a7a"),Object(h["a"])(j,w,O,!1,null,"d98c53d0",null)),k=T.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"power"},[n("p",[t._v(" Power by "),n("span",[t._v(" Vue.js ")]),t._v(" | "),n("span",[t._v(" AOS.js ")])])]),n("div",{staticClass:"build"},[n("p",[t._v(" Build on 2020 ")])])])])}],$={name:"Footer"},S=$,H=(n("96b2"),Object(h["a"])(S,C,x,!1,null,"02d1b88b",null)),P=H.exports,N={components:{Header:y,GoTop:k,Footer:P}},A=N,B=(n("5c0b"),Object(h["a"])(A,a,o,!1,null,null,null)),L=B.exports,D=(n("d3b7"),n("8c4f")),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",attrs:{"data-aos":"fade-up"}})},J=[],M={name:"Home",components:{}},G=M,q=Object(h["a"])(G,F,J,!1,null,null,null),R=q.exports;r["a"].use(D["a"]);var Z=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/docs",name:"Docs",component:function(){return n.e("about").then(n.bind(null,"eba1"))}},{path:"/join",name:"Join",component:function(){return n.e("about").then(n.bind(null,"c283"))}}],I=new D["a"]({routes:Z}),K=I,U=n("2f62");r["a"].use(U["a"]);var V=new U["a"].Store({state:{ishome:!0},mutations:{page:function(t,e){t.ishome=e}},actions:{},modules:{}});n("e829");r["a"].config.productionTip=!1,new r["a"]({created:function(){d.a.init({duration:1e3})},router:K,store:V,render:function(t){return t(L)}}).$mount("#app")},"5a7a":function(t,e,n){"use strict";var r=n("d70b"),a=n.n(r);a.a},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"96b2":function(t,e,n){"use strict";var r=n("9c46"),a=n.n(r);a.a},"9c0c":function(t,e,n){},"9c46":function(t,e,n){},a3f4:function(t,e,n){},b00e:function(t,e,n){"use strict";var r=n("3ddb"),a=n.n(r);a.a},d70b:function(t,e,n){},d971:function(t,e,n){"use strict";var r=n("a3f4"),a=n.n(r);a.a}});
//# sourceMappingURL=app.9c1587da.js.map