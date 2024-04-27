"use strict";(self.webpackChunkmain_application=self.webpackChunkmain_application||[]).push([[481],{481:(e,t,n)=>{n.r(t);var r=n(770),o=n.n(r),a=n(338),i=n(285),l=n(252);const c=function(){return(0,r.useRef)(null),(0,r.useEffect)((function(){(0,l.mount)()}),[]),o().createElement("div",{className:"left-sidebar-module"},o().createElement("app-root",null))};var u=n(150);const s=function(){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){(0,u.mount)(e.current)}),[]),o().createElement("div",{ref:e})},p=function(){return o().createElement(i.BrowserRouter,null,o().createElement("div",null,o().createElement("nav",null,o().createElement("ul",null,o().createElement("li",null,o().createElement(i.Link,{to:"/left"},"Left Sidebar")),o().createElement("li",null,o().createElement(i.Link,{to:"/right"},"Hello Vue App")))),o().createElement(i.Routes,null,o().createElement(i.Route,{path:"/left",element:o().createElement(c,null)}),o().createElement(i.Route,{path:"/right",element:o().createElement(s,null)}))))};function f(e){return o().createElement("div",{className:"template"},"Fallback")}var d=n(947);const m=function(){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){(0,d.mount)(e.current)}),[]),o().createElement("div",{ref:e})};function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const b=function(){var e,t,n=(e=(0,r.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],i=n[1];return o().createElement("div",null,o().createElement("input",{type:"text",value:a,onChange:function(e){var t=e.target.value;i(t),function(e){console.log("Sending data:",e);var t=new CustomEvent("MicrofrontendData",{detail:{data:e}});window.dispatchEvent(t)}({message:t})},placeholder:"Type a message to send"}),o().createElement("p",null,"Správa z Reactu: ",a))},y=[{id:0,label:"ReactApp",link:"/react"},{id:1,label:"AngularApp",link:"/angular"},{id:2,label:"VueApp",link:"/vue"},{id:3,label:"SvelteApp",link:"/svelte"}];var h=n(72),g=n.n(h),E=n(825),w=n.n(E),x=n(659),S=n.n(x),j=n(56),A=n.n(j),k=n(540),O=n.n(k),R=n(113),C=n.n(R),T=n(653),N={};function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function P(e){var t=function(e,t){if("object"!=I(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==I(t)?t:String(t)}function _(e,t,n){return t=H(t),function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,L()?Reflect.construct(t,n||[],H(e).constructor):t.apply(e,n))}function L(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(L=function(){return!!e})()}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}N.styleTagTransform=C(),N.setAttributes=A(),N.insert=S().bind(null,"head"),N.domAPI=w(),N.insertStyleElement=O(),g()(T.A,N),T.A&&T.A.locals&&T.A.locals;var U=(0,r.lazy)((function(){return n.e(32).then(n.t.bind(n,32,23)).catch((function(){return{default:f}}))}));const z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,t,arguments)}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return console.log("menuItems",y),o().createElement("div",null,o().createElement(r.Suspense,{fallback:o().createElement("div",null,"Loading...")},o().createElement("div",{className:"main-app"},o().createElement("div",{className:"title"},o().createElement("div",{className:"img"}),o().createElement("p",null,"Main Aplikácia v Reacte"))),o().createElement(U,{menuItems:y}),o().createElement(s,null),o().createElement("div",{className:"flex space-between"},o().createElement("div",{className:"react"},o().createElement("h1",null,"Obsah Main aplikácie"),o().createElement(b,null),o().createElement(p,null)),o().createElement("div",{className:"angular"},o().createElement("h1",null,"Obsah Angular mikrofrontendu"),o().createElement(c,null))),o().createElement("div",{className:"daco"}),o().createElement(m,null)))}}])&&M(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.Component);var D=document.getElementById("root");(0,a.H)(D).render(o().createElement(z,null))},653:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),l=n(417),c=n.n(l),u=new URL(n(524),n.b),s=i()(o()),p=c()(u);s.push([e.id,`.main-app{background-color:#2c3e50;display:flex;align-items:center;justify-content:center;border-bottom:1px solid gray}.main-app .title{position:relative;width:14rem;height:1.2rem;padding:.5rem;background-color:#449cc9;color:#fff;text-shadow:1px 1px 1px #727171;display:flex;align-items:center;justify-content:center}.main-app .title::before{content:"";position:absolute;left:-10px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:0px solid rgba(0,0,0,0);border-bottom:35px solid rgba(0,0,0,0);border-right:10px solid #449cc9}.main-app .title::after{content:"";position:absolute;right:-10px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:0px solid rgba(0,0,0,0);border-bottom:35px solid rgba(0,0,0,0);border-left:10px solid #449cc9}.main-app .title .img{background:url(${p}) no-repeat center center;background-size:cover;width:24px;height:24px;margin-right:.5rem}.main-app .title p{margin:unset}.flex{display:flex}.align-item{align-items:center}.space-between{justify-content:space-between}.flexing{display:flex;align-items:center;justify-content:center}.react{width:49%}.angular{width:49%}.daco{height:400px}`,""]);const f=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},338:(e,t,n)=>{var r=n(90);t.H=r.createRoot,r.hydrateRoot},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],u=r.base?c[0]+r.base:c[0],s=a[u]||0,p="".concat(u," ").concat(s);a[u]=s+1;var f=n(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,r);r.byIndex=l,t.splice(l,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var c=r(e,o),u=0;u<a.length;u++){var s=n(a[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},524:(e,t,n)=>{e.exports=n.p+"64b6abdbeb9a1690d34c.png"}}]);