"use strict";(self.webpackChunkreact_druhy=self.webpackChunkreact_druhy||[]).push([[617],{617:(e,t,n)=>{n.r(t);var r=n(770),o=n.n(r),a=n(338),i=n(285),c=n(252);const l=function(){return(0,r.useRef)(null),(0,r.useEffect)((function(){(0,c.mount)()}),[]),o().createElement("div",{className:"left-sidebar-module"},o().createElement("app-root",null))};var u=n(523);const s=function(){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){(0,u.mount)(e.current)}),[]),o().createElement("div",{ref:e})},p=function(){return o().createElement(i.BrowserRouter,null,o().createElement("div",null,o().createElement("nav",null,o().createElement("ul",null,o().createElement("li",null,o().createElement(i.Link,{to:"/left"},"Left Sidebar")),o().createElement("li",null,o().createElement(i.Link,{to:"/right"},"Hello Vue App")))),o().createElement(i.Routes,null,o().createElement(i.Route,{path:"/left",element:o().createElement(l,null)}),o().createElement(i.Route,{path:"/right",element:o().createElement(s,null)}))))};function f(e){return o().createElement("div",{className:"template"},"Fallback")}var d=n(72),m=n.n(d),b=n(825),v=n.n(b),h=n(659),y=n.n(h),g=n(56),E=n.n(g),x=n(540),w=n.n(x),S=n(113),j=n.n(S),k=n(653),O={};function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function A(e){var t=function(e,t){if("object"!=R(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==R(t)?t:String(t)}function C(e,t,n){return t=_(t),function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,P()?Reflect.construct(t,n||[],_(e).constructor):t.apply(e,n))}function P(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(P=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}O.styleTagTransform=j(),O.setAttributes=E(),O.insert=y().bind(null,"head"),O.domAPI=v(),O.insertStyleElement=w(),m()(k.A,O),k.A&&k.A.locals&&k.A.locals;var N=(0,r.lazy)((function(){return n.e(32).then(n.t.bind(n,32,23)).catch((function(){return{default:f}}))}));const L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,t,arguments)}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return o().createElement("div",null,o().createElement(r.Suspense,{fallback:o().createElement("div",null,"Loading...")},o().createElement("div",{className:"main-app"},o().createElement("div",{className:"title"},o().createElement("div",{className:"img"}),o().createElement("p",null,"Main Aplikácia v Reacte"))),o().createElement(N,null),o().createElement("h1",null,"Obsah Main aplikácie"),o().createElement(p,null),o().createElement(s,null),o().createElement(l,null)))}}])&&T(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.Component);var I=document.getElementById("root");(0,a.H)(I).render(o().createElement(L,null))},653:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),c=n(417),l=n.n(c),u=new URL(n(524),n.b),s=i()(o()),p=l()(u);s.push([e.id,`.main-app{background-color:#2c3e50;display:flex;align-items:center;justify-content:center;border-bottom:1px solid gray}.main-app .title{position:relative;width:14rem;height:1.2rem;padding:.5rem;background-color:#449cc9;color:#fff;text-shadow:1px 1px 1px #727171;display:flex;align-items:center;justify-content:center}.main-app .title::before{content:"";position:absolute;left:-10px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:0px solid rgba(0,0,0,0);border-bottom:35px solid rgba(0,0,0,0);border-right:10px solid #449cc9}.main-app .title::after{content:"";position:absolute;right:-10px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:0px solid rgba(0,0,0,0);border-bottom:35px solid rgba(0,0,0,0);border-left:10px solid #449cc9}.main-app .title .img{background:url(${p}) no-repeat center center;background-size:cover;width:24px;height:24px;margin-right:.5rem}.main-app .title p{margin:unset}`,""]);const f=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},338:(e,t,n)=>{var r=n(90);t.H=r.createRoot,r.hydrateRoot},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],u=r.base?l[0]+r.base:l[0],s=a[u]||0,p="".concat(u," ").concat(s);a[u]=s+1;var f=n(p),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),u=0;u<a.length;u++){var s=n(a[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},524:(e,t,n)=>{e.exports=n.p+"64b6abdbeb9a1690d34c.png"}}]);