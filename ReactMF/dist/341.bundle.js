"use strict";(self.webpackChunkreact_no_cra=self.webpackChunkreact_no_cra||[]).push([[341],{341:(e,n,t)=>{t.r(n),t.d(n,{CSSTransition:()=>S,ReplaceTransition:()=>D,SwitchTransition:()=>G,Transition:()=>C,TransitionGroup:()=>L,config:()=>p});var r=t(8168),i=t(8587),o=t(5540);function s(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var a=t(5770),l=t.n(a),c=t(9090),u=t.n(c);const p={disabled:!1},d=l().createContext(null);var h=function(e){return e.scrollTop},f="unmounted",E="exited",m="entering",v="entered",x="exiting",g=function(e){function n(n,t){var r;r=e.call(this,n,t)||this;var i,o=t&&!t.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?o?(i=E,r.appearStatus=m):i=v:i=n.unmountOnExit||n.mountOnEnter?f:E,r.state={status:i},r.nextCallback=null,r}(0,o.A)(n,e),n.getDerivedStateFromProps=function(e,n){return e.in&&n.status===f?{status:E}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==m&&t!==v&&(n=m):t!==m&&t!==v||(n=x)}this.updateStatus(!1,n)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,n,t,r=this.props.timeout;return e=n=t=r,null!=r&&"number"!=typeof r&&(e=r.exit,n=r.enter,t=void 0!==r.appear?r.appear:n),{exit:e,enter:n,appear:t}},t.updateStatus=function(e,n){if(void 0===e&&(e=!1),null!==n)if(this.cancelNextCallback(),n===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:u().findDOMNode(this);t&&h(t)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:f})},t.performEnter=function(e){var n=this,t=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[u().findDOMNode(this),r],o=i[0],s=i[1],a=this.getTimeouts(),l=r?a.appear:a.enter;!e&&!t||p.disabled?this.safeSetState({status:v},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:m},(function(){n.props.onEntering(o,s),n.onTransitionEnd(l,(function(){n.safeSetState({status:v},(function(){n.props.onEntered(o,s)}))}))})))},t.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),r=this.props.nodeRef?void 0:u().findDOMNode(this);n&&!p.disabled?(this.props.onExit(r),this.safeSetState({status:x},(function(){e.props.onExiting(r),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:E},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:E},(function(){e.props.onExited(r)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},t.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(r){t&&(t=!1,n.nextCallback=null,e(r))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:u().findDOMNode(this),r=null==e&&!this.props.addEndListener;if(t&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],o=i[0],s=i[1];this.props.addEndListener(o,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},t.render=function(){var e=this.state.status;if(e===f)return null;var n=this.props,t=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.A)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l().createElement(d.Provider,{value:null},"function"==typeof t?t(e,r):l().cloneElement(l().Children.only(t),r))},n}(l().Component);function y(){}g.contextType=d,g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:y,onEntering:y,onEntered:y,onExit:y,onExiting:y,onExited:y},g.UNMOUNTED=f,g.EXITED=E,g.ENTERING=m,g.ENTERED=v,g.EXITING=x;const C=g;var b=function(e,n){return e&&n&&n.split(" ").forEach((function(n){return r=n,void((t=e).classList?t.classList.remove(r):"string"==typeof t.className?t.className=s(t.className,r):t.setAttribute("class",s(t.className&&t.className.baseVal||"",r)));var t,r}))},N=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(e,t){var r=n.resolveArguments(e,t),i=r[0],o=r[1];n.removeClasses(i,"exit"),n.addClass(i,o?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(e,t)},n.onEntering=function(e,t){var r=n.resolveArguments(e,t),i=r[0],o=r[1]?"appear":"enter";n.addClass(i,o,"active"),n.props.onEntering&&n.props.onEntering(e,t)},n.onEntered=function(e,t){var r=n.resolveArguments(e,t),i=r[0],o=r[1]?"appear":"enter";n.removeClasses(i,o),n.addClass(i,o,"done"),n.props.onEntered&&n.props.onEntered(e,t)},n.onExit=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"appear"),n.removeClasses(t,"enter"),n.addClass(t,"exit","base"),n.props.onExit&&n.props.onExit(e)},n.onExiting=function(e){var t=n.resolveArguments(e)[0];n.addClass(t,"exit","active"),n.props.onExiting&&n.props.onExiting(e)},n.onExited=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"exit"),n.addClass(t,"exit","done"),n.props.onExited&&n.props.onExited(e)},n.resolveArguments=function(e,t){return n.props.nodeRef?[n.props.nodeRef.current,e]:[e,t]},n.getClassNames=function(e){var t=n.props.classNames,r="string"==typeof t,i=r?(r&&t?t+"-":"")+e:t[e];return{baseClassName:i,activeClassName:r?i+"-active":t[e+"Active"],doneClassName:r?i+"-done":t[e+"Done"]}},n}(0,o.A)(n,e);var t=n.prototype;return t.addClass=function(e,n,t){var r=this.getClassNames(n)[t+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===t&&i&&(r+=" "+i),"active"===t&&e&&h(e),r&&(this.appliedClasses[n][t]=r,function(e,n){e&&n&&n.split(" ").forEach((function(n){return r=n,void((t=e).classList?t.classList.add(r):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(t,r)||("string"==typeof t.className?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r)));var t,r}))}(e,r))},t.removeClasses=function(e,n){var t=this.appliedClasses[n],r=t.base,i=t.active,o=t.done;this.appliedClasses[n]={},r&&b(e,r),i&&b(e,i),o&&b(e,o)},t.render=function(){var e=this.props,n=(e.classNames,(0,i.A)(e,["classNames"]));return l().createElement(C,(0,r.A)({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(l().Component);N.defaultProps={classNames:""},N.propTypes={};const S=N;function k(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function A(e,n,t){return null!=t[n]?t[n]:e.props[n]}function O(e,n,t){var r=k(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),o=[];for(var s in e)s in n?o.length&&(i[s]=o,o=[]):o.push(s);var a={};for(var l in n){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];a[i[l][r]]=t(c)}a[l]=t(l)}for(r=0;r<o.length;r++)a[o[r]]=t(o[r]);return a}(n,r);return Object.keys(i).forEach((function(o){var s=i[o];if((0,a.isValidElement)(s)){var l=o in n,c=o in r,u=n[o],p=(0,a.isValidElement)(u)&&!u.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,a.isValidElement)(u)&&(i[o]=(0,a.cloneElement)(s,{onExited:t.bind(null,s),in:u.props.in,exit:A(s,"exit",e),enter:A(s,"enter",e)})):i[o]=(0,a.cloneElement)(s,{in:!1}):i[o]=(0,a.cloneElement)(s,{onExited:t.bind(null,s),in:!0,exit:A(s,"exit",e),enter:A(s,"enter",e)})}})),i}var T=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},R=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,o.A)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,r=o,k(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:A(e,"appear",t),enter:A(e,"enter",t),exit:A(e,"exit",t)})}))):O(e,i,o),firstRender:!1}},t.handleExited=function(e,n){var t=k(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,r.A)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,i.A)(e,["component","childFactory"]),o=this.state.contextValue,s=T(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?l().createElement(d.Provider,{value:o},s):l().createElement(d.Provider,{value:o},l().createElement(n,r,s))},n}(l().Component);R.propTypes={},R.defaultProps={component:"div",childFactory:function(e){return e}};const L=R;var w=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.handleLifecycle("onEnter",0,t)},n.handleEntering=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.handleLifecycle("onEntering",0,t)},n.handleEntered=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.handleLifecycle("onEntered",0,t)},n.handleExit=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.handleLifecycle("onExit",1,t)},n.handleExiting=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.handleLifecycle("onExiting",1,t)},n.handleExited=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.handleLifecycle("onExited",1,t)},n}(0,o.A)(n,e);var t=n.prototype;return t.handleLifecycle=function(e,n,t){var r,i=this.props.children,o=l().Children.toArray(i)[n];if(o.props[e]&&(r=o.props)[e].apply(r,t),this.props[e]){var s=o.props.nodeRef?void 0:u().findDOMNode(this);this.props[e](s)}},t.render=function(){var e=this.props,n=e.children,t=e.in,r=(0,i.A)(e,["children","in"]),o=l().Children.toArray(n),s=o[0],a=o[1];return delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,l().createElement(L,r,t?l().cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):l().cloneElement(a,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},n}(l().Component);w.propTypes={};const D=w;var M,P,j="out-in",V="in-out",_=function(e,n,t){return function(){var r;e.props[n]&&(r=e.props)[n].apply(r,arguments),t()}},F=((M={})[j]=function(e){var n=e.current,t=e.changeState;return l().cloneElement(n,{in:!1,onExited:_(n,"onExited",(function(){t(m,null)}))})},M[V]=function(e){var n=e.current,t=e.changeState,r=e.children;return[n,l().cloneElement(r,{in:!0,onEntered:_(r,"onEntered",(function(){t(m)}))})]},M),U=((P={})[j]=function(e){var n=e.children,t=e.changeState;return l().cloneElement(n,{in:!0,onEntered:_(n,"onEntered",(function(){t(v,l().cloneElement(n,{in:!0}))}))})},P[V]=function(e){var n=e.current,t=e.children,r=e.changeState;return[l().cloneElement(n,{in:!1,onExited:_(n,"onExited",(function(){r(v,l().cloneElement(t,{in:!0}))}))}),l().cloneElement(t,{in:!0})]},P),I=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))||this).state={status:v,current:null},n.appeared=!1,n.changeState=function(e,t){void 0===t&&(t=n.state.current),n.setState({status:e,current:t})},n}(0,o.A)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.appeared=!0},n.getDerivedStateFromProps=function(e,n){return null==e.children?{current:null}:n.status===m&&e.mode===V?{status:m}:!n.current||((t=n.current)===(r=e.children)||l().isValidElement(t)&&l().isValidElement(r)&&null!=t.key&&t.key===r.key)?{current:l().cloneElement(e.children,{in:!0})}:{status:x};var t,r},t.render=function(){var e,n=this.props,t=n.children,r=n.mode,i=this.state,o=i.status,s=i.current,a={children:t,current:s,changeState:this.changeState,status:o};switch(o){case m:e=U[r](a);break;case x:e=F[r](a);break;case v:e=s}return l().createElement(d.Provider,{value:{isMounting:!this.appeared}},e)},n}(l().Component);I.propTypes={},I.defaultProps={mode:j};const G=I},8168:(e,n,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{A:()=>r})},5540:(e,n,t)=>{function r(e,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,r(e,n)}t.d(n,{A:()=>i})},8587:(e,n,t)=>{function r(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(n,{A:()=>r})}}]);