var main;(()=>{var e,r,t,n,o,a,i={954:(e,r,t)=>{Promise.all([t.e(770),t.e(457)]).then(t.bind(t,457))},176:(e,r,t)=>{"use strict";var n={"./SharedState":()=>Promise.all([t.e(770),t.e(124)]).then((()=>()=>t(124)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})},284:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof angularMf)return e();t.l("http://localhost:3002/remoteEntry.js",(t=>{if("undefined"!=typeof angularMf)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"angularMf")})).then((()=>angularMf))},60:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof microfrontend)return e();t.l("http://localhost:3001/remoteEntry.js",(t=>{if("undefined"!=typeof microfrontend)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"microfrontend")})).then((()=>microfrontend))},71:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof svelteMf)return e();t.l("http://localhost:3008/remoteEntry.js",(t=>{if("undefined"!=typeof svelteMf)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"svelteMf")})).then((()=>svelteMf))},163:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof vueMicrofrontend)return e();t.l("http://localhost:3004/remoteEntry.js",(t=>{if("undefined"!=typeof vueMicrofrontend)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"vueMicrofrontend")})).then((()=>vueMicrofrontend))}},f={};function u(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,exports:{}};return i[e](t,t.exports,u),t.exports}u.m=i,u.c=f,u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);u.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,u.d(o,a),o},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+".bundle.js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="main_application:",u.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,f;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var p=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),f&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={32:[32],259:[259],457:[150,252,947,967]},a={32:["default","./LayoutTemplate",60],150:["default","./vueMicrofrontend",163],252:["default","./angularMf",284],259:["default","./MiniReactApp",60],947:["default","./footerModule",71],967:["default","./miniAngularMf",284]},u.f.remotes=(e,r)=>{u.o(o,e)&&o[e].forEach((e=>{var t=u.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),u.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,f,u)=>{try{var s=e(t,a);if(!s||!s.then)return f(s,i,u);var l=s.then((e=>f(e,i)),o);if(!u)return l;r.push(n.p=l)}catch(e){o(e)}},f=(e,r,o)=>i(r.get,n[1],t,0,s,o),s=r=>{n.p=1,u.m[e]=e=>{e.exports=r()}};i(u,n[2],0,0,((e,r,t)=>e?i(u.I,n[0],0,e,f,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];u.o(u.S,t)||(u.S[t]={});var a=u.S[t],i="main_application",f=(e,r,t,n)=>{var o=a[e]=a[e]||{},f=o[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(o[r]={get:t,from:i,eager:!!n})},s=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=u(e);if(!o)return;var a=e=>e&&e.init&&e.init(u.S[t],n);if(o.then)return l.push(o.then(a,r));var i=a(o);if(i&&i.then)return l.push(i.catch(r))}catch(e){r(e)}},l=[];return"default"===t&&(f("react-dom","18.2.0",(()=>Promise.all([u.e(961),u.e(770)]).then((()=>()=>u(961))))),f("react-router-dom","5.3.4",(()=>Promise.all([u.e(393),u.e(770)]).then((()=>()=>u(393))))),f("react","18.2.0",(()=>u.e(540).then((()=>()=>u(159))))),s(284),s(71),s(163),s(60)),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),u.p="/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var o=t[0],a=o<0;a&&(o=-o-1);for(var i=0,f=1,u=!0;;f++,i++){var s,l,d=f<t.length?(typeof t[f])[0]:"";if(i>=n.length||"o"==(l=(typeof(s=n[i]))[0]))return!u||("u"==d?f>o&&!a:""==d!=a);if("u"==l){if(!u||"u"!=d)return!1}else if(u)if(d==l)if(f<=o){if(s!=t[f])return!1}else{if(a?s>t[f]:s<t[f])return!1;s!=t[f]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||f<=o)return!1;u=!1,f--}else{if(f<=o||l<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,f--)}}var p=[],c=p.pop.bind(p);for(i=1;i<t.length;i++){var h=t[i];p.push(1==h?c()|c():2==h?c()&c():h?r(h,n):!c())}return!!c()},t=(t,n,o)=>{var a=t[n];return(n=Object.keys(a).reduce(((t,n)=>!r(o,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],f=(typeof i)[0];if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(t,n)?t:n),0))&&a[n]},n=(e=>function(r,t,n,o){var a=u.I(r);return a&&a.then?a.then(e.bind(e,r,u.S[r],t,n,o)):e(r,u.S[r],t,n,o)})(((e,r,n,o,a)=>{var i=r&&u.o(r,n)&&t(r,n,o);return i?(e=>(e.loaded=1,e.get()))(i):a()})),o={},a={770:()=>n("default","react",[1,18,2,0],(()=>u.e(540).then((()=>()=>u(159))))),90:()=>n("default","react-dom",[1,18,2,0],(()=>u.e(961).then((()=>()=>u(961))))),679:()=>n("default","react-router-dom",[1,5,3,0],(()=>u.e(393).then((()=>()=>u(393)))))},i={457:[90,679],770:[770]},f={};u.f.consumes=(e,r)=>{u.o(i,e)&&i[e].forEach((e=>{if(u.o(o,e))return r.push(o[e]);if(!f[e]){var t=r=>{o[e]=0,u.m[e]=t=>{delete u.c[e],t.exports=r()}};f[e]=!0;var n=r=>{delete o[e],u.m[e]=t=>{throw delete u.c[e],r}};try{var i=a[e]();i.then?r.push(o[e]=i.then(t).catch(n)):t(i)}catch(e){n(e)}}}))}})(),(()=>{u.b=document.baseURI||self.location.href;var e={792:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(259|32|770)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=u.p+u.u(r),i=new Error;u.l(a,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,f]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);f&&f(u)}for(r&&r(t);s<a.length;s++)o=a[s],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmain_application=self.webpackChunkmain_application||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),u.nc=void 0,u(954);var s=u(176);main=s})();