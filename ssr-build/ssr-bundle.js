module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/e-levy-calculator-gh/",n(n.s="QfWi")}({HteQ:function(e,t){e.exports=require("preact")},QfWi:function(e,t,n){"use strict";n.r(t);var r=n("HteQ"),a={};function o(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),c={};if(i&&i[1])for(var l=i[1].split("&"),s=0;s<l.length;s++){var h=l[s].split("=");c[decodeURIComponent(h[0])]=decodeURIComponent(h.slice(1).join("="))}e=u(e.replace(o,"")),t=u(t||"");for(var f=Math.max(e.length,t.length),p=0;p<f;p++)if(t[p]&&":"===t[p].charAt(0)){var m=t[p].replace(/(^:|[+*?]+$)/g,""),d=(t[p].match(/[+*?]+$/)||a)[0]||"",b=~d.indexOf("+"),v=~d.indexOf("*"),g=e[p]||"";if(!g&&!v&&(d.indexOf("?")<0||b)){r=!1;break}if(c[m]=decodeURIComponent(g),b||v){c[m]=e.slice(p).map(decodeURIComponent).join("/");break}}else if(t[p]!==e[p]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function l(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,u(t).map(s).join(""));var t}(e),e.props}function u(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function s(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var h=null,f=[],p=[],m={};function d(){var e;return""+((e=h&&h.location?h.location:h&&h.getCurrentLocation?h.getCurrentLocation():"undefined"!=typeof location?location:m).pathname||"")+(e.search||"")}function b(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=f.length;t--;)if(f[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),h&&h[t]?h[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),v(e)}function v(e){for(var t=!1,n=0;n<f.length;n++)!0===f[n].routeTo(e)&&(t=!0);for(var r=p.length;r--;)p[r](e);return t}function g(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return b(t)}}function y(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return g(e.currentTarget||e.target||this),_(e)}function _(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function O(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(g(t))return _(e)}}while(t=t.parentNode)}}var j=!1;var N=function(e){function t(t){e.call(this,t),t.history&&(h=t.history),this.state={url:t.url||d()},j||("function"==typeof addEventListener&&(h||addEventListener("popstate",(function(){v(d())})),addEventListener("click",O)),j=!0)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){f.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;h&&(this.unlisten=h.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),f.splice(f.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(l).sort(c).map((function(e){var a=i(t,e.props.path,e.props);if(a){if(!1!==n){var c={url:t,matches:a};return o(c,a),delete c.ref,delete c.key,Object(r.cloneElement)(e,c)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,a=e.onChange,o=t.url,i=this.getMatchingChildren(Object(r.toChildArray)(n),o,!0),c=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof a&&a({router:this,url:o,previous:l,active:i,current:c})),c},t}(r.Component);N.subscribers=p,N.getCurrentUrl=d,N.route=b,N.Router=N,N.Route=function(e){return Object(r.createElement)(e.component,e)},N.Link=function(e){return Object(r.createElement)("a",o({onClick:y},e))},N.exec=i;var x,C,w,S=0,k=[],A=r.options.__b,I=r.options.__r,T=r.options.diffed,P=r.options.__c,F=r.options.unmount;function H(e,t){r.options.__h&&r.options.__h(C,e,S||t),S=0;var n=C.__H||(C.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function M(e){return S=1,function(e,t,n){var r=H(x++,2);return r.t=e,r.__c||(r.__=[n?n(t):$(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=C),r.__}($,e)}function U(e,t){var n=H(x++,3);!r.options.__s&&Y(n.__H,t)&&(n.__=e,n.__H=t,C.__H.__h.push(n))}function E(e){return S=5,L((function(){return{current:e}}),[])}function L(e,t){var n=H(x++,7);return Y(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function G(){for(var e;e=k.shift();)if(e.__P)try{e.__H.__h.forEach(D),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],r.options.__e(t,e.__v)}}r.options.__b=function(e){C=null,A&&A(e)},r.options.__r=function(e){I&&I(e),x=0;var t=(C=e.__c).__H;t&&(t.__h.forEach(D),t.__h.forEach(K),t.__h=[])},r.options.diffed=function(e){T&&T(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==k.push(t)&&w===r.options.requestAnimationFrame||((w=r.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),R&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);R&&(t=requestAnimationFrame(n))})(G)),C=null},r.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(D),e.__h=e.__h.filter((function(e){return!e.__||K(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],r.options.__e(n,e.__v)}})),P&&P(e,t)},r.options.unmount=function(e){F&&F(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{D(e)}catch(e){t=e}})),t&&r.options.__e(t,n.__v))};var R="function"==typeof requestAnimationFrame;function D(e){var t=C,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),C=t}function K(e){var t=C;e.__c=e.__(),C=t}function Y(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function $(e,t){return"function"==typeof t?t(e):t}var W=function(){return"undefined"!=typeof window},q=function(e){var t=e.advanced,n=void 0!==t&&t;if(W()){var r=JSON.stringify(n);window.localStorage.setItem("elcgh-preference",r)}};function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=function(e){var t=e.showAdvanced,n=Q(M(""),2),a=n[0],o=n[1],i=Q(M(0),2),c=i[0],l=i[1],u=Q(M(0),2),s=u[0],h=u[1],f=E(null),p=E(null);U((function(){if(""==a)l(0),h(0);else if(a>100){var e=.015*(a-100);l(a+e),h(e)}else l(a),h(0)}),[a]);return Object(r.h)("main",{className:"mainContainer"},Object(r.h)("form",{className:"gridContainer",ref:f,method:"POST"},Object(r.h)("div",{className:"gridItem gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("h1",{className:"displayText"},"E-LEVY CALCULATOR"))),Object(r.h)("div",{className:"gridItem gridItemFullMobileOnly"},Object(r.h)("div",{className:"inputGroup"},Object(r.h)("label",{for:"amount",className:"labelText"},"You want to send:"),Object(r.h)("div",null,Object(r.h)("input",{tabIndex:1,type:"text",name:"amount",placeholder:"0",pattern:"[0-9,.]",inputMode:"numeric",value:a.toLocaleString("en-US"),onInput:function(e){var t=parseInt(e.target.value.replaceAll(",",""),10);isNaN(t)?o(""):o(t)},className:"inputField",id:"amount",onKeyUp:function(e){13==e.keyCode&&p.current.focus()}}),Object(r.h)("span",{className:"currency"},"GHS")))),Object(r.h)("div",{className:"gridItem gridItemFullMobileOnly"},Object(r.h)("div",{className:"inputGroup"},Object(r.h)("label",{for:"transferAmount",className:"labelText"},"You will pay:"),Object(r.h)("div",null,Object(r.h)("input",{type:"text",value:"".concat(c.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})),readOnly:!0,name:"transferAmount",className:"inputField inputFieldEmphasis",id:"transferAmount"}),Object(r.h)("span",{className:"currency"},"GHS")))),Object(r.h)("div",{className:"gridItem gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("span",{className:"labelText"},"E-Levy Charge:"),Object(r.h)("span",{className:"displayText charge",tabIndex:2,ref:p},"+ GHS"," ","".concat(s.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2}))),Object(r.h)("span",{className:"labelText"},"Rate: 1.5%, first 100GHS exempt"))),Object(r.h)("div",{className:"gridItem gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("button",{className:"labelText button",type:"button",onClick:function(e){return e.preventDefault(),q({advanced:!0}),t(),!1}},"Click for more Options"))),Object(r.h)("div",{className:"gridItem gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("span",{className:"disclaimer"},"Disclaimer: We did our best to provide accurate results, however you may experience differences in real-world usage.")))))},J=function(e){var t=e.className,n=e.children;return Object(r.h)("div",{className:"gridItem ".concat(t)},n)};J.defaultProps={className:""};var Z=J,z=function(e){var t=e.className,n=e.children;return Object(r.h)("div",{className:"inputGroup ".concat(t)},n)};z.defaultProps={className:""};var X=z,ee=function(e){var t=e.children;return Object(r.h)("main",{className:"mainContainer"},t)},te=function(){return Object(r.h)("div",{className:"arrowContainer"},Object(r.h)("span",{className:"arrow"},Object(r.h)("span",{className:"alternateText"},"to"),Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right"},Object(r.h)("path",{d:"M5 12L19 12"}),Object(r.h)("path",{d:"M12 5L19 12 12 19"}))))},ne=function(e){e.title;var t=e.handleSelect,n=e.theme;return Object(r.h)("div",{className:"pickerItem ".concat(n),role:"button",onClick:t},Object(r.h)("span",{className:"pickerContent"}))};ne.defaultProps={title:"",theme:""};var re=ne;function ae(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ie=function(e){var t=e.data,n=e.title,a=e.updateChoice,o=e.close;return Object(r.h)("div",{className:"overlayContainer",onClick:function(){return o()}},Object(r.h)("div",{className:"pickerContainer"},Object(r.h)("span",{className:"close pointer",role:"button",onClick:function(){return o()}},Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},Object(r.h)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(r.h)("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),Object(r.h)("div",{className:"pickerTitle alignCenter"},Object(r.h)("span",{className:"labelText"},n)),Object(r.h)("div",{className:"pickerItemContainer"},ae(t.values()).map((function(e){return Object(r.h)(re,{key:e.key,title:e.name,theme:e.theme,handleSelect:function(){return a(e.key),o(),!1}})})))))},ce=n("ZH8P");var le=new Map([["mtn",{name:"MTN",company:"MTN",img:"./assets/white-waves.png",key:"mtn",theme:"mtn",getCharge:function(e){e.source,e.destination;var t=e.amount,n=0;return t>=1e3?n=7.5:t>100&&(n=.75*t/100),{charge:n,exempt:100,rate:.75}}}],["vodafone",{name:"Vodafone",company:"Vodafone",img:"./assets/white-waves.png",key:"vodafone",theme:"vodafone",getCharge:function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),{charge:0,exempt:0,rate:0}}}],["airtel",{name:"AirtelTigo",company:"AirtelTigo",img:"./assets/white-waves.png",key:"airtel",theme:"airtel",getCharge:function(e){var t=e.amount,n=0;return n=.75*t/100,t>=1e3&&(n=7.5),t<=100&&(n=0),{charge:n,exempt:0,rate:.75}}}]]);function ue(e){return e>=100?0:e<100?100-e:100}function se(e,t){var n=e-t;return n<0?0:n}function he(e,t){return e*t}var fe=function(e,t,n){var r="",a="";return""===e&&""===t?0:(""!==e&&""!==t?(r=le.get(e).key,a=le.get(t).key):""!==e&&(r=le.get(e).key,a=le.get(e).key),function(e){var t=e.source,n=e.destination,r=e.amount;return(0,le.get(t).getCharge)({source:t,destination:n,amount:r})}({source:r,destination:a,amount:n}).charge)},pe=function(e){var t=e.label,n=e.className;return Object(r.h)("span",{className:"labelText ".concat(n)},t)};pe.defaultProps={className:""};var me=pe,de=function(e){var t=e.className,n=e.children;return Object(r.h)("span",{className:"displayText ".concat(t)},n)};de.defaultProps={className:""};var be=de;function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ge=function(e){var t=e.className,n=e.value,a=e.chargeProps;return Object(r.h)("span",ve({},a,{className:"chargeAlt ".concat(t)}),"+ ".concat(n.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})," GHS"))};ge.defaultProps={className:"",chargeProps:{}};var ye=ge,_e=function(){return Object(r.h)("span",{className:"disclaimer"},"Disclaimer: We did our best to provide accurate results however, you may experience differences in real-world usage since Information on Telco and GHIPPS charges are inconsistent.")},Oe=function(e){var t=e.id,n=e.handleChange,a=e.title,o=e.theme;return Object(r.h)("div",{className:"fromGrid",tabIndex:3},Object(r.h)("div",{className:"selectedText alignRight"},Object(r.h)("span",{className:"selectedPlatform pointer",role:"button",onClick:function(e){return n(e,t)}},a),Object(r.h)("span",{role:"button",className:"togglePicker pointer",onClick:function(e){return n(e,t)}},"Tap to change")),Object(r.h)("div",{className:"selectedVisual ".concat(o," pointer"),role:"button",onClick:function(e){return n(e,t)}}))};Oe.defaultProps={theme:""};var je=Oe,Ne=function(e){var t=e.id,n=e.handleChange,a=e.title,o=e.theme;return Object(r.h)("div",{className:"toGrid",tabIndex:4},Object(r.h)("div",{className:"selectedVisual ".concat(o," pointer"),role:"button",onClick:function(e){return n(e,t)}}),Object(r.h)("div",{className:"selectedText"},Object(r.h)("span",{className:"selectedPlatform pointer",role:"button",onClick:function(e){return n(e,t)}},a),Object(r.h)("span",{role:"button",className:"togglePicker pointer",onClick:function(e){return n(e,t)}},"Tap to change")))};Ne.defaultProps={theme:""};var xe=Ne;function Ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return we(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return we(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Se=function(e){var t=e.showSimple,n=Ce(M(""),2),a=n[0],o=n[1],i=Ce(M(""),2),c=i[0],l=i[1],u=Ce(M(!1),2),s=u[0],h=u[1],f=Ce(M(""),2),p=f[0],m=f[1],d=Ce(M(0),2),b=d[0],v=d[1],g=Ce(M(0),2),y=g[0],_=g[1],O=Ce(M("mtn"),2),j=O[0],N=O[1],x=Ce(M("mtn"),2),C=x[0],w=x[1],S=Ce(M(0),2),k=S[0],A=S[1],I=E(null),T={from:{pickerTitle:"You are sending money using:",updateChoice:N},to:{pickerTitle:"You are sending money to someone with:",updateChoice:w}};U((function(){if(""==a)v(0),_(0);else if(""!==c){var e=ue(c),t=he(se(a,e),.015),n=fe(j,C,a);v(a+t+n),_(t),A(n)}else if(a>0){var r=ue(0),o=he(se(a,r),.015),i=fe(j,C,a);v(a+o+i),_(o),A(i)}else v(a),_(0)}),[a,c,j,C]);var P=function(e,t){var n=parseInt(e.target.value.replaceAll(",",""),10);isNaN(n)?t(""):t(n)},F=function(e,t){console.log(t),m(t),h(!0)};return Object(r.h)(ee,null,Object(r.h)("form",{className:"gridContainer",method:"POST"},Object(r.h)(Z,{className:"gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("h1",{className:"displayText"},"E-LEVY CALCULATOR"))),Object(r.h)(Z,{className:"gridItemFullMobileOnly"},Object(r.h)(X,null,Object(r.h)(ce.a,{label:"You want to send:",id:"amount",placeholder:"0",inputProps:{pattern:"[0-9,.]",inputMode:"numeric",required:!0,value:a.toLocaleString("en-US"),onInput:function(e){return P(e,o)},tabIndex:1}}))),Object(r.h)(Z,{className:"gridItemFullMobileOnly"},Object(r.h)(X,null,Object(r.h)(ce.a,{label:"You have already sent today: (optional)",id:"previousAmount",placeholder:"0",inputProps:{pattern:"[0-9,.]",inputMode:"numeric",value:c.toLocaleString("en-US"),onInput:function(e){return P(e,l)},tabIndex:2,onKeyUp:function(e){13==e.keyCode&&I.current.focus()}}}))),Object(r.h)(Z,{className:"gridItemFull"},Object(r.h)(X,{className:"pickerRow"},Object(r.h)("div",{className:"platformPickerGrid"},Object(r.h)(je,{title:le.get(j).name,theme:le.get(j).theme,id:"from",handleChange:F}),Object(r.h)(te,null),Object(r.h)(xe,{title:le.get(C).name,theme:le.get(C).theme,id:"to",handleChange:F})))),Object(r.h)(Z,{className:"noMargin"},Object(r.h)(X,{className:"divider chargePadding"},Object(r.h)(me,{className:"alignRight",label:"E-Levy Charge"}),Object(r.h)(be,{className:"alignRight"},Object(r.h)(ye,{value:y})))),Object(r.h)(Z,{className:"noMargin"},Object(r.h)(X,{className:"chargePadding"},Object(r.h)(me,{label:"".concat(le.get(j).company," Charge")}),Object(r.h)(be,null,Object(r.h)(ye,{chargeProps:{ref:I,tabIndex:5},value:k})))),Object(r.h)(Z,{className:"centerFlex gridItemFull"},Object(r.h)(X,null,Object(r.h)(me,{className:"alignCenter",label:"You will pay:"}),Object(r.h)(be,null,Object(r.h)(ye,{className:"charge",value:b})))),Object(r.h)(Z,{className:"gridItemFull"},Object(r.h)(X,{className:"centerFlex"},Object(r.h)("button",{className:"labelText button",type:"button",onClick:function(e){return e.preventDefault(),q({advanced:!1}),t(),!1}},"Calculate E-Levy Only"))),s&&Object(r.h)(ie,{data:le,selectedPicker:p,title:T[p].pickerTitle,close:function(){return h(!1)},updateChoice:T[p].updateChoice}),Object(r.h)(Z,{className:"gridItemFull"},Object(r.h)(X,{className:"centerFlex"},Object(r.h)(_e,null)))))};function ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ie=function(){var e=ke(M(function(){if(W()){var e=JSON.parse(window.localStorage.getItem("elcgh-preference"));return!!e&&e.advanced}}()),2),t=e[0],n=e[1];return Object(r.h)("div",{id:"app"},Object(r.h)(N,null,!1===t?Object(r.h)(B,{path:"".concat("/","/"),showAdvanced:function(){return n(!0)}}):Object(r.h)(Se,{path:"".concat("/","/"),showSimple:function(){return n(!1)}})))};t.default=Ie},ZH8P:function(e,t,n){"use strict";(function(e){var r=n("HteQ");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=function(t){var n=t.label,o=t.id,i=t.placeholder,c=t.inputProps;return Object(r.h)(e,null,Object(r.h)("label",{for:o,className:"labelText"},n),Object(r.h)("div",null,Object(r.h)("input",a({type:"text",name:o,placeholder:i,className:"inputField",id:o},c)),Object(r.h)("span",{className:"currency"},"GHS")))};o.defaultProps={label:"label",id:"",placeholder:"",inputProps:{}},t.a=o}).call(this,n("HteQ").Fragment)}});
//# sourceMappingURL=ssr-bundle.js.map