!function(t){function n(n){for(var e,r,i=n[0],u=n[1],l=0,c=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);for(_&&_(n);c.length;)c.shift()()}function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={},o={0:0};e.e=function(t){var n=[],r=o[t];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,e){r=o[t]=[n,e]}));n.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,e.nc&&l.setAttribute("nonce",e.nc),l.src=function(t){return e.p+""+({2:"route-advanced",3:"route-home"}[t]||t)+".chunk."+{2:"3540e",3:"d9cff"}[t]+".js"}(t);var _=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(c);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;_.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",_.name="ChunkLoadError",_.type=r,_.request=i,e[1](_)}o[t]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/e-levy-calculator-gh/",e.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var _=u;e(e.s="mdyV")}({HK79:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i}));var r=function(){return"undefined"!=typeof window},o=function(t){var n=t.advanced,e=void 0!==n&&n;if(r()){var o=JSON.stringify(e);window.localStorage.setItem("elcgh-preference",o)}},i=function(){if(r()){var t=JSON.parse(window.localStorage.getItem("elcgh-preference"));return!!t&&t.advanced}}},QRet:function(t,n,e){"use strict";function r(t,n){v.options.__h&&v.options.__h(h,t,y||n),y=0;var e=h.__H||(h.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function o(t){return y=1,function(t,n,e){var o=r(p++,2);return o.t=t,o.__c||(o.__=[e?e(n):s(void 0,n),function(t){var n=o.t(o.__[0],t);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}],o.__c=h),o.__}(s,t)}function i(t,n){var e=r(p++,3);!v.options.__s&&f(e.__H,n)&&(e.__=t,e.__H=n,h.__H.__h.push(e))}function u(t){return y=5,l((function(){return{current:t}}),[])}function l(t,n){var e=r(p++,7);return f(e.__H,n)&&(e.__=t(),e.__H=n,e.__h=t),e.__}function _(){for(var t;t=m.shift();)if(t.__P)try{t.__H.__h.forEach(c),t.__H.__h.forEach(a),t.__H.__h=[]}catch(n){t.__H.__h=[],v.options.__e(n,t.__v)}}function c(t){var n=h,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),h=n}function a(t){var n=h;t.__c=t.__(),h=n}function f(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}function s(t,n){return"function"==typeof n?n(t):n}e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return u}));var p,h,d,v=e("hosL"),y=0,m=[],g=v.options.__b,b=v.options.__r,k=v.options.diffed,C=v.options.__c,A=v.options.unmount;v.options.__b=function(t){h=null,g&&g(t)},v.options.__r=function(t){b&&b(t),p=0;var n=(h=t.__c).__H;n&&(n.__h.forEach(c),n.__h.forEach(a),n.__h=[])},v.options.diffed=function(t){k&&k(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==m.push(n)&&d===v.options.requestAnimationFrame||((d=v.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),S&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);S&&(n=requestAnimationFrame(e))})(_)),h=null},v.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(c),t.__h=t.__h.filter((function(t){return!t.__||a(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],v.options.__e(e,t.__v)}})),C&&C(t,n)},v.options.unmount=function(t){A&&A(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach((function(t){try{c(t)}catch(t){n=t}})),n&&v.options.__e(n,e.__v))};var S="function"==typeof requestAnimationFrame},QfWi:function(t,n,e){"use strict";function r(t,n){for(var e in n)t[e]=n[e];return t}function o(t,n,e){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var _=i[1].split("&"),c=0;c<_.length;c++){var a=_[c].split("=");u[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=l(t.replace(o,"")),n=l(n||"");for(var f=Math.max(t.length,n.length),s=0;s<f;s++)if(n[s]&&":"===n[s].charAt(0)){var p=n[s].replace(/(^:|[+*?]+$)/g,""),h=(n[s].match(/[+*?]+$/)||k)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),y=t[s]||"";if(!y&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(y),d||v){u[p]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(n[s]!==t[s]){r=!1;break}return(!0===e.default||!1!==r)&&u}function i(t,n){return t.rank<n.rank?1:t.rank>n.rank?-1:t.index-n.index}function u(t,n){return t.index=n,t.rank=function(t){return t.props.default?0:(n=t.props.path,l(n).map(_).join(""));var n}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function _(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=C&&C.location?C.location:C&&C.getCurrentLocation?C.getCurrentLocation():"undefined"!=typeof location?location:w).pathname||"")+(t.search||"")}function a(t,n){return void 0===n&&(n=!1),"string"!=typeof t&&t.url&&(n=t.replace,t=t.url),function(t){for(var n=A.length;n--;)if(A[n].canRoute(t))return!0;return!1}(t)&&function(t,n){void 0===n&&(n="push"),C&&C[n]?C[n](t):"undefined"!=typeof history&&history[n+"State"]&&history[n+"State"](null,null,t)}(t,n?"replace":"push"),f(t)}function f(t){for(var n=!1,e=0;e<A.length;e++)!0===A[e].routeTo(t)&&(n=!0);for(var r=S.length;r--;)S[r](t);return n}function s(t){if(t&&t.getAttribute){var n=t.getAttribute("href"),e=t.getAttribute("target");if(n&&n.match(/^\//g)&&(!e||e.match(/^_?self$/i)))return a(n)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return s(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var n=t.target;do{if("A"===String(n.nodeName).toUpperCase()&&n.getAttribute("href")){if(n.hasAttribute("native"))return;if(s(n))return h(t)}}while(n=n.parentNode)}}function v(t,n){if("string"==typeof t.type)return null;var e=t.__;if(e){var r=e.__k;if(r){Array.isArray(r)||(r=[r]);var o=r.indexOf(t);-1===o&&(o=r.length);for(var i=o;i--;){var u=r[i],l=u&&u.__e||v(u,!0);if(l)return l}}return n?void 0:v(e)}}function y(t){function n(){var n=this;b.Component.call(this),e||(this.componentWillMount=function(){t((function(t){e=t&&t.default||t,n.setState({})}))},this.shouldComponentUpdate=function(){return null!=e}),this.render=function(t){if(e)return Object(b.h)(e,t);var r=v(n.__v),o=r&&r.nextSibling||(n.__P||n._parentDom).firstChild;return o&&Object(b.h)(o.localName,{dangerouslySetInnerHTML:P})}}var e;return n.preload=t,(n.prototype=new b.Component).constructor=n,n}function m(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,l=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){l=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(l)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.r(n);var b=e("hosL"),k={},C=null,A=[],S=[],w={},x=!1,O=function(t){function n(n){t.call(this,n),n.history&&(C=n.history),this.state={url:n.url||c()},x||("function"==typeof addEventListener&&(C||addEventListener("popstate",(function(){f(c())})),addEventListener("click",d)),x=!0)}return t&&(n.__proto__=t),(n.prototype=Object.create(t&&t.prototype)).constructor=n,n.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},n.prototype.canRoute=function(t){var n=Object(b.toChildArray)(this.props.children);return this.getMatchingChildren(n,t,!1).length>0},n.prototype.routeTo=function(t){this.setState({url:t});var n=this.canRoute(t);return this.updating||this.forceUpdate(),n},n.prototype.componentWillMount=function(){A.push(this),this.updating=!0},n.prototype.componentDidMount=function(){var t=this;C&&(this.unlisten=C.listen((function(n){t.routeTo(""+(n.pathname||"")+(n.search||""))}))),this.updating=!1},n.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),A.splice(A.indexOf(this),1)},n.prototype.componentWillUpdate=function(){this.updating=!0},n.prototype.componentDidUpdate=function(){this.updating=!1},n.prototype.getMatchingChildren=function(t,n,e){return t.filter(u).sort(i).map((function(t){var i=o(n,t.props.path,t.props);if(i){if(!1!==e){var u={url:n,matches:i};return r(u,i),delete u.ref,delete u.key,Object(b.cloneElement)(t,u)}return t}})).filter(Boolean)},n.prototype.render=function(t,n){var e=t.children,r=t.onChange,o=n.url,i=this.getMatchingChildren(Object(b.toChildArray)(e),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},n}(b.Component);O.subscribers=S,O.getCurrentUrl=c,O.route=a,O.Router=O,O.Route=function(t){return Object(b.createElement)(t.component,t)},O.Link=function(t){return Object(b.createElement)("a",r({onClick:p},t))},O.exec=o;var E=e("QRet"),P={},j=y((function(t){e.e(3).then(function(){var n=e("+1Jk");"function"==typeof t&&t(n)}.bind(null,e)).catch(e.oe)})),U="/e-levy-calculator-gh",T=y((function(t){e.e(2).then(function(){var n=e("nsY8");"function"==typeof t&&t(n)}.bind(null,e)).catch(e.oe)})),H=e("HK79");n.default=function(){var t=m(Object(E.c)(Object(H.a)()),2),n=t[0],e=t[1];return Object(b.h)("div",{id:"app"},Object(b.h)(O,null,!1===n?Object(b.h)(j,{path:"".concat(U,"/"),showAdvanced:function(){return e(!0)}}):Object(b.h)(T,{path:"".concat(U,"/"),showSimple:function(){return e(!1)}})))}},hosL:function(t,n,e){"use strict";function r(t,n){for(var e in n)t[e]=n[e];return t}function o(t){var n=t.parentNode;n&&n.removeChild(t)}function i(t,n,e){var r,o,i,l={};for(i in n)"key"==i?r=n[i]:"ref"==i?o=n[i]:l[i]=n[i];if(arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):e),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,n,e,r,o){var i={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=H.vnode&&H.vnode(i),i}function l(){return{current:null}}function _(t){return t.children}function c(t,n){this.props=t,this.context=n}function a(t,n){if(null==n)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?a(t):null}function f(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return f(t)}}function s(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!p.__r++||R!==H.debounceRendering)&&((R=H.debounceRendering)||I)(p)}function p(){for(var t;p.__r=D.length;)t=D.sort((function(t,n){return t.__v.__b-n.__v.__b})),D=[],t.some((function(t){var n,e,o,i,u,l;t.__d&&(u=(i=(n=t).__v).__e,(l=n.__P)&&(e=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,n.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,e,null==u?a(i):u,i.__h),A(e,i),i.__e!=u&&f(i)))}))}function h(t,n,e,r,o,i,l,c,f,s){var p,h,v,m,g,b,k,A=r&&r.__k||F,S=A.length;for(e.__k=[],p=0;p<n.length;p++)if(null!=(m=e.__k[p]=null==(m=n[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(_,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=e,m.__b=e.__b+1,null===(v=A[p])||v&&m.key==v.key&&m.type===v.type)A[p]=void 0;else for(h=0;h<S;h++){if((v=A[h])&&m.key==v.key&&m.type===v.type){A[h]=void 0;break}v=null}C(t,m,v=v||N,o,i,l,c,f,s),g=m.__e,(h=m.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===v.__k?m.__d=f=d(m,f,t):f=y(t,m,v,A,g,f),"function"==typeof e.type&&(e.__d=f)):f&&v.__e==f&&f.parentNode!=t&&(f=a(v))}for(e.__e=b,p=S;p--;)null!=A[p]&&("function"==typeof e.type&&null!=A[p].__e&&A[p].__e==e.__d&&(e.__d=a(r,p+1)),x(A[p],A[p]));if(k)for(p=0;p<k.length;p++)w(k[p],k[++p],k[++p])}function d(t,n,e){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,n="function"==typeof r.type?d(r,n,e):y(e,r,r,o,r.__e,n));return n}function v(t,n){return n=n||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,n)})):n.push(t)),n}function y(t,n,e,r,o,i){var u,l,_;if(void 0!==n.__d)u=n.__d,n.__d=void 0;else if(null==e||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,_=0;(l=l.nextSibling)&&_<r.length;_+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]=null==e?"":"number"!=typeof e||K.test(n)?e:e+"px"}function g(t,n,e,r,o){var i;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||m(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||m(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r||t.addEventListener(n,i?k:b,i):t.removeEventListener(n,i?k:b,i);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null!=e&&(!1!==e||"a"===n[0]&&"r"===n[1])?t.setAttribute(n,e):t.removeAttribute(n))}}function b(t){this.l[t.type+!1](H.event?H.event(t):t)}function k(t){this.l[t.type+!0](H.event?H.event(t):t)}function C(t,n,e,o,i,u,l,a,f){var s,p,d,v,y,m,g,b,k,C,A,w=n.type;if(void 0!==n.constructor)return null;null!=e.__h&&(f=e.__h,a=n.__e=e.__e,n.__h=null,u=[a]),(s=H.__b)&&s(n);try{t:if("function"==typeof w){if(b=n.props,k=(s=w.contextType)&&o[s.__c],C=s?k?k.props.value:s.__:o,e.__c?g=(p=n.__c=e.__c).__=p.__E:("prototype"in w&&w.prototype.render?n.__c=p=new w(b,C):(n.__c=p=new c(b,C),p.constructor=w,p.render=O),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=w.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,w.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,d)null==w.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||n.__v===e.__v){p.props=b,p.state=p.__s,n.__v!==e.__v&&(p.__d=!1),p.__v=n,n.__e=e.__e,n.__k=e.__k,n.__k.forEach((function(t){t&&(t.__=n)})),p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=C,p.props=b,p.state=p.__s,(s=H.__r)&&s(n),p.__d=!1,p.__v=n,p.__P=t,s=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),A=null!=s&&s.type===_&&null==s.key?s.props.children:s,h(t,Array.isArray(A)?A:[A],n,e,o,i,u,l,a,f),p.base=n.__e,n.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=S(e.__e,n,e,o,i,u,l,f);(s=H.diffed)&&s(n)}catch(t){n.__v=null,(f||null!=u)&&(n.__e=a,n.__h=!!f,u[u.indexOf(a)]=null),H.__e(t,n,e)}}function A(t,n){H.__c&&H.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){H.__e(t,n.__v)}}))}function S(t,n,e,r,i,u,l,_){var c,f,s,p=e.props,d=n.props,v=n.type,y=0;if("svg"===v&&(i=!0),null!=u)for(;y<u.length;y++)if((c=u[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,u[y]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,_=!1}if(null===v)p===d||_&&t.data===d||(t.data=d);else{if(u=u&&T.call(t.childNodes),f=(p=e.props||N).dangerouslySetInnerHTML,s=d.dangerouslySetInnerHTML,!_){if(null!=u)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(function(t,n,e,r,o){var i;for(i in e)"children"===i||"key"===i||i in n||g(t,i,null,e[i],r);for(i in n)o&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||e[i]===n[i]||g(t,i,n[i],e[i],r)}(t,d,p,i,_),s)n.__k=[];else if(y=n.props.children,h(t,Array.isArray(y)?y:[y],n,e,r,i&&"foreignObject"!==v,u,l,u?u[0]:e.__k&&a(e,0),_),null!=u)for(y=u.length;y--;)null!=u[y]&&o(u[y]);_||("value"in d&&void 0!==(y=d.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&g(t,"value",y,p.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==t.checked&&g(t,"checked",y,p.checked,!1))}return t}function w(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){H.__e(t,e)}}function x(t,n,e){var r,i;if(H.unmount&&H.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||w(r,null,n)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){H.__e(t,n)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&x(r[i],n,"function"!=typeof t.type);e||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function O(t,n,e){return this.constructor(t,e)}function E(t,n,e){var r,o,u;H.__&&H.__(t,n),o=(r="function"==typeof e)?null:e&&e.__k||n.__k,u=[],C(n,t=(!r&&e||n).__k=i(_,null,[t]),o||N,N,void 0!==n.ownerSVGElement,!r&&e?[e]:o?null:n.firstChild?T.call(n.childNodes):null,u,!r&&e?e:o?o.__e:n.firstChild,r),A(u,t)}function P(t,n){E(t,n,P)}function j(t,n,e){var o,i,l,_=r({},t.props);for(l in n)"key"==l?o=n[l]:"ref"==l?i=n[l]:_[l]=n[l];return arguments.length>2&&(_.children=arguments.length>3?T.call(arguments,2):e),u(t.type,_,o||t.key,i||t.ref,null)}function U(t,n){var e={__c:n="__cC"+W++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,r;return this.getChildContext||(e=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(s)},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}e.r(n),e.d(n,"render",(function(){return E})),e.d(n,"hydrate",(function(){return P})),e.d(n,"createElement",(function(){return i})),e.d(n,"h",(function(){return i})),e.d(n,"Fragment",(function(){return _})),e.d(n,"createRef",(function(){return l})),e.d(n,"isValidElement",(function(){return M})),e.d(n,"Component",(function(){return c})),e.d(n,"cloneElement",(function(){return j})),e.d(n,"createContext",(function(){return U})),e.d(n,"toChildArray",(function(){return v})),e.d(n,"options",(function(){return H}));var T,H,L,M,D,I,R,W,N={},F=[],K=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T=F.slice,H={__e:function(t,n,e,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(n){t=n}throw t}},L=0,M=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},e),this.props)),t&&r(e,t),null!=t&&this.__v&&(n&&this.__h.push(n),s(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),s(this))},c.prototype.render=_,D=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,W=0},mdyV:function(t,n,e){"use strict";e.r(n);var r=e("hosL"),o=r.h,i=r.render,u=r.hydrate,l=function(t){return t&&t.default?t.default:t},_=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(_(e.p)+"sw.js"),"function"==typeof l(e("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(e("QfWi")),n={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(n=JSON.parse(decodeURI(r.innerHTML)).preRenderData||n);var a={preRenderData:n},f=n.url?_(n.url):"";(u&&f===_(location.pathname)?u:i)(o(t,{CLI_DATA:a}),document.body,c)}()}}});
//# sourceMappingURL=bundle.107d1.js.map