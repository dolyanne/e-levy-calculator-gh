(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2qYX":function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){var t=100;return e>=t?0:e<t?t-e:t}function o(e,t){var n=e-t;return n<0?0:n}function l(e,t){return e*t}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c,o,l=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var h=n("hosL"),m=n("QRet"),b=function(e){var t=e.className,n=e.children;return Object(h.h)("div",{className:"gridItem ".concat(t)},n)};b.defaultProps={className:""};var d=b,p=function(e){var t=e.className,n=e.children;return Object(h.h)("div",{className:"inputGroup ".concat(t)},n)};p.defaultProps={className:""};var f=p,g=function(e){var t=e.children;return Object(h.h)("main",{className:"mainContainer"},t)},O=function(){return Object(h.h)("div",{className:"arrowContainer"},Object(h.h)("span",{className:"arrow"},Object(h.h)("span",{className:"alternateText"},"to"),Object(h.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right"},Object(h.h)("path",{d:"M5 12L19 12"}),Object(h.h)("path",{d:"M12 5L19 12 12 19"}))))},j=function(e){var t=e.handleSelect,n=e.theme;return Object(h.h)("div",{className:"pickerItem ".concat(n),role:"button",onClick:t},Object(h.h)("span",{className:"pickerContent"}))};j.defaultProps={title:"",theme:""};var v=j,y=function(e){var t=e.data,n=e.title,a=e.updateChoice,c=e.close;return Object(h.h)("div",{className:"overlayContainer",onClick:function(){return c()}},Object(h.h)("div",{className:"pickerContainer"},Object(h.h)("span",{className:"close pointer",role:"button",onClick:function(){return c()}},Object(h.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},Object(h.h)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(h.h)("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),Object(h.h)("div",{className:"pickerTitle alignCenter"},Object(h.h)("span",{className:"labelText"},n)),Object(h.h)("div",{className:"pickerItemContainer"},r(t.values()).map((function(e){return Object(h.h)(v,{key:e.key,title:e.name,theme:e.theme,handleSelect:function(){return a(e.key),c(),!1}})})))))},N=n("ZH8P"),w=.75,k=100,C=new Map([["mtn",{name:"MTN",company:"MTN",img:"./assets/white-waves.png",key:"mtn",theme:"mtn",getCharge:function(e){var t=e.amount,n=0,r=k,a=w;return e.destination===e.source?(t>=1e3?n=7.5:t>100&&(n=t*w/100),r=k,a=w):(t>=1e3?n=7.5:t>k&&(n=.75*t/100),r=k,a=.75),{charge:n,exempt:r,rate:a}}}],["vodafone",{name:"Vodafone",company:"Vodafone",img:"./assets/white-waves.png",key:"vodafone",theme:"vodafone",getCharge:function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),{charge:0,exempt:0,rate:0}}}],["airtel",{name:"AirtelTigo",company:"AirtelTigo",img:"./assets/white-waves.png",key:"airtel",theme:"airtel",getCharge:function(e){var t=e.amount,n=0;return n=.75*t/100,t>=1e3&&(n=7.5),t<=100&&(n=0),{charge:n,exempt:0,rate:.75}}}]]),x=.01,P=function(e,t,n){var r="",a="";if(""===e&&""===t)return 0;""!==e&&""!==t?(r=C.get(e).key,a=C.get(t).key):""!==e&&(r=C.get(e).key,a=C.get(e).key);var c=function(e){var t=e.source,n=e.destination,r=e.amount;return(0,C.get(t).getCharge)({source:t,destination:n,amount:r})}({source:r,destination:a,amount:n});return c.charge},I=function(e){var t=e.label,n=e.className;return Object(h.h)("span",{className:"labelText ".concat(n)},t)};I.defaultProps={className:""};var S=I,T=function(e){var t=e.className,n=e.children;return Object(h.h)("span",{className:"displayText ".concat(t)},n)};T.defaultProps={className:""};var A=T,F=function(e){var t=e.className,n=e.value,r=e.chargeProps;return Object(h.h)("span",i({},r,{className:"chargeAlt ".concat(t)}),"+ ".concat(n.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})," GHS"))};F.defaultProps={className:"",chargeProps:{}};var M=F,L=function(){return Object(h.h)("span",{className:"disclaimer"},"Disclaimer: We did our best to provide accurate results however, you may experience differences in real-world usage, since Information on Telco and GHIPPS charges are inconsistent.")},G=function(e){var t=e.id,n=e.handleChange,r=e.title,a=e.theme;return Object(h.h)("div",{className:"fromGrid",tabIndex:3},Object(h.h)("div",{className:"selectedText alignRight"},Object(h.h)("span",{className:"selectedPlatform pointer",role:"button",onClick:function(e){return n(e,t)}},r),Object(h.h)("span",{role:"button",className:"togglePicker pointer",onClick:function(e){return n(e,t)}},"Tap to change")),Object(h.h)("div",{className:"selectedVisual ".concat(a," pointer"),role:"button",onClick:function(e){return n(e,t)}}))};G.defaultProps={theme:""};var Y=G,U=function(e){var t=e.id,n=e.handleChange,r=e.title,a=e.theme;return Object(h.h)("div",{className:"toGrid",tabIndex:4},Object(h.h)("div",{className:"selectedVisual ".concat(a," pointer"),role:"button",onClick:function(e){return n(e,t)}}),Object(h.h)("div",{className:"selectedText"},Object(h.h)("span",{className:"selectedPlatform pointer",role:"button",onClick:function(e){return n(e,t)}},r),Object(h.h)("span",{role:"button",className:"togglePicker pointer",onClick:function(e){return n(e,t)}},"Tap to change")))};U.defaultProps={theme:""};var E=U,R=n("HK79"),_=n("NdmY");t.default=function(e){var t=e.showSimple,n=s(Object(m.c)(""),2),r=n[0],a=n[1],i=s(Object(m.c)(""),2),u=i[0],b=i[1],p=s(Object(m.c)(!1),2),j=p[0],v=p[1],w=s(Object(m.c)(""),2),k=w[0],I=w[1],T=s(Object(m.c)(0),2),F=T[0],G=T[1],U=s(Object(m.c)(0),2),H=U[0],V=U[1],D=s(Object(m.c)("mtn"),2),B=D[0],K=D[1],W=s(Object(m.c)("mtn"),2),$=W[0],q=W[1],J=s(Object(m.c)(0),2),Q=J[0],Z=J[1],X=Object(m.b)(null),z={from:{pickerTitle:"You are sending money using:",updateChoice:K},to:{pickerTitle:"You are sending money to someone with:",updateChoice:q}};Object(m.a)((function(){if(""==r)G(0),V(0);else if(""!==u){var e=c(u),t=l(o(r,e),x),n=P(B,$,r);G(r+t+n),V(t),Z(n)}else if(r>0){var a=c(0),i=l(o(r,a),x),s=P(B,$,r);G(r+i+s),V(i),Z(s)}else G(r),V(0)}),[r,u,B,$]);var ee=function(e,t){var n=parseInt(e.target.value.replaceAll(",",""),10);isNaN(n)?t(""):t(n)},te=function(e,t){console.log(t),I(t),v(!0)};return Object(h.h)(g,null,Object(h.h)("form",{className:"gridContainer",method:"POST"},Object(h.h)(d,{className:"gridItemFull"},Object(h.h)("div",{className:"inputGroup centerFlex"},Object(h.h)("h1",{className:"displayText"},"E-LEVY CALCULATOR"))),Object(h.h)(d,{className:"gridItemFullMobileOnly"},Object(h.h)(f,null,Object(h.h)(N.a,{label:"You want to send:",id:"amount",placeholder:"0",inputProps:{pattern:"[0-9,.]",inputMode:"numeric",required:!0,value:r.toLocaleString("en-US"),onInput:function(e){return ee(e,a)},tabIndex:1}}))),Object(h.h)(d,{className:"gridItemFullMobileOnly"},Object(h.h)(f,null,Object(h.h)(N.a,{label:"You have already sent today: (optional)",id:"previousAmount",placeholder:"0",inputProps:{pattern:"[0-9,.]",inputMode:"numeric",value:u.toLocaleString("en-US"),onInput:function(e){return ee(e,b)},tabIndex:2,onKeyUp:function(e){13==e.keyCode&&X.current.focus()}}}))),Object(h.h)(d,{className:"gridItemFull"},Object(h.h)(f,{className:"pickerRow"},Object(h.h)("div",{className:"platformPickerGrid"},Object(h.h)(Y,{title:C.get(B).name,theme:C.get(B).theme,id:"from",handleChange:te}),Object(h.h)(O,null),Object(h.h)(E,{title:C.get($).name,theme:C.get($).theme,id:"to",handleChange:te})))),Object(h.h)(d,{className:"noMargin"},Object(h.h)(f,{className:"divider chargePadding"},Object(h.h)(S,{className:"alignRight",label:"E-Levy Charge"}),Object(h.h)(A,{className:"alignRight"},Object(h.h)(M,{value:H})))),Object(h.h)(d,{className:"noMargin"},Object(h.h)(f,{className:"chargePadding"},Object(h.h)(S,{label:"".concat(C.get(B).company," Charge")}),Object(h.h)(A,null,Object(h.h)(M,{chargeProps:{ref:X,tabIndex:5},value:Q})))),Object(h.h)(d,{className:"centerFlex gridItemFull"},Object(h.h)(f,null,Object(h.h)(S,{className:"alignCenter",label:"You will pay:"}),Object(h.h)(A,null,Object(h.h)(M,{className:"charge",value:F})))),Object(h.h)(d,{className:"gridItemFull"},Object(h.h)(f,{className:"centerFlex"},Object(h.h)("button",{className:"labelText button",type:"button",onClick:function(e){return e.preventDefault(),Object(R.b)({advanced:!1}),t(),!1}},"Simple View"))),j&&Object(h.h)(y,{data:C,selectedPicker:k,title:z[k].pickerTitle,close:function(){return v(!1)},updateChoice:z[k].updateChoice}),Object(h.h)(d,{className:"gridItemFull"},Object(h.h)(f,{className:"centerFlex"},Object(h.h)(_.a,null))),Object(h.h)(d,{className:"gridItemFull"},Object(h.h)(f,{className:"centerFlex"},Object(h.h)(L,null)))))}},NdmY:function(e,t,n){"use strict";(function(e){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c,o,l=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=n("hosL"),o=n("QRet");t.a=function(){var t=r(Object(o.c)(!1),2),n=t[0],a=t[1];return Object(o.a)((function(){var e,t=(e=window.matchMedia("(display-mode: standalone)").matches,document.referrer.startsWith("android-app://")?"twa":navigator.standalone||e?"standalone":"browser");console.log("pwaDisplayMode",t),"twa"!==t&&a(!0)}),[]),Object(c.h)(e,null,n&&Object(c.h)("a",{href:"https://play.google.com/store/apps/details?id=com.e_levy_calculator.www.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",target:"_blank",rel:"noopener noreferrer"},Object(c.h)("img",{alt:"Get it on Google Play",height:70,src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"})))}}).call(this,n("hosL").Fragment)},ZH8P:function(e,t,n){"use strict";(function(e){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var a=n("hosL"),c=function(t){var n=t.label,c=t.id,o=t.placeholder,l=t.inputProps;return Object(a.h)(e,null,Object(a.h)("label",{for:c,className:"labelText"},n),Object(a.h)("div",null,Object(a.h)("input",r({type:"text",name:c,placeholder:o,className:"inputField",id:c},l)),Object(a.h)("span",{className:"currency"},"GHS")))};c.defaultProps={label:"label",id:"",placeholder:"",inputProps:{}},t.a=c}).call(this,n("hosL").Fragment)}}]);
//# sourceMappingURL=route-advanced.chunk.3228f.js.map