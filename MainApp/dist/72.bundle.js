"use strict";(self.webpackChunkmain_application=self.webpackChunkmain_application||[]).push([[72],{72:(e,t,n)=>{n.r(t);var r=n(770),a=n.n(r),o=n(338),c=n(679),i=n(252);const l=function(){return(0,r.useRef)(null),(0,r.useEffect)((function(){(0,i.mount)()}),[]),a().createElement("div",{className:"left-sidebar-module"},a().createElement("app-root",null))};var u=n(150);const s=function(){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){(0,u.mount)(e.current)}),[]),a().createElement("div",{ref:e})};function p(e){return a().createElement("div",{className:"template"},"Fallback")}var d=n(947);const f=function(){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){(0,d.mount)(e.current)}),[]),a().createElement("div",{ref:e})};var m=n(691),v=n.n(m),h=n(825),b=n.n(h),g=n(659),y=n.n(g),x=n(56),E=n.n(x),k=n(540),w=n.n(k),R=n(113),A=n.n(R),C=n(653),S={};S.styleTagTransform=A(),S.setAttributes=E(),S.insert=y().bind(null,"head"),S.domAPI=b(),S.insertStyleElement=w(),v()(C.A,S),C.A&&C.A.locals&&C.A.locals;const M=[{id:0,label:"ReactApp",link:"/react"},{id:1,label:"AngularApp",link:"/angular"},{id:2,label:"VueApp",link:"/vue"},{id:3,label:"SvelteApp",link:"/svelte"}];function N(){return console.log("RRRR"),a().createElement(a().Fragment,null,a().createElement(c.Switch,null,a().createElement(c.Route,{path:"/react",render:(0,r.useCallback)((function(e){return a().createElement(l,null)}),[])}),a().createElement(c.Route,{path:"/angular",render:(0,r.useCallback)((function(e){return a().createElement(l,null)}),[])}),a().createElement(c.Route,{path:"/vue",render:(0,r.useCallback)((function(e){return a().createElement(s,null)}),[])}),a().createElement(c.Route,{path:"/svelte",render:(0,r.useCallback)((function(e){return a().createElement(f,null)}),[])})))}var T=(0,r.lazy)((function(){return n.e(32).then(n.t.bind(n,32,23)).catch((function(){return{default:p}}))}));function I(){return a().createElement("div",null,a().createElement(r.Suspense,{fallback:a().createElement("div",null,"Loading...")},a().createElement("div",{className:"main-app"},a().createElement("div",{className:"title"},a().createElement("div",{className:"img"}),a().createElement("p",null,"Main Aplikácia v Reacte"))),a().createElement(T,{menuItems:M},a().createElement(N,null))))}var j=document.getElementById("root");(0,o.H)(j).render(a().createElement(I,null))},653:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(601),a=n.n(r),o=n(314),c=n.n(o),i=n(417),l=n.n(i),u=new URL(n(524),n.b),s=c()(a()),p=l()(u);s.push([e.id,`.main-app{background-color:#2c3e50;display:flex;align-items:center;justify-content:center;border-bottom:1px solid gray}.main-app .title{position:relative;width:14rem;height:1.2rem;padding:.5rem;background-color:#449cc9;color:#fff;text-shadow:1px 1px 1px #727171;display:flex;align-items:center;justify-content:center}.main-app .title::before{content:"";position:absolute;left:-10px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:0px solid rgba(0,0,0,0);border-bottom:35px solid rgba(0,0,0,0);border-right:10px solid #449cc9}.main-app .title::after{content:"";position:absolute;right:-10px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:0px solid rgba(0,0,0,0);border-bottom:35px solid rgba(0,0,0,0);border-left:10px solid #449cc9}.main-app .title .img{background:url(${p}) no-repeat center center;background-size:cover;width:24px;height:24px;margin-right:.5rem}.main-app .title p{margin:unset}.flex{display:flex}.align-item{align-items:center}.space-between{justify-content:space-between}.flexing{display:flex;align-items:center;justify-content:center}.react{width:49%}.angular{width:49%}.daco{height:400px}`,""]);const d=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&c[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},338:(e,t,n)=>{var r=n(90);t.H=r.createRoot,r.hydrateRoot},691:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var l=e[i],u=r.base?l[0]+r.base:l[0],s=o[u]||0,p="".concat(u," ").concat(s);o[u]=s+1;var d=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=a(f,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var l=r(e,a),u=0;u<o.length;u++){var s=n(o[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},524:(e,t,n)=>{e.exports=n.p+"64b6abdbeb9a1690d34c.png"}}]);