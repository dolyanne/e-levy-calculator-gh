(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{NdmY:function(e,t,a){"use strict";(function(e){var c=a("hosL"),n=a("QRet");t.a=()=>{const[t,a]=Object(n.c)(!1);return Object(n.a)((()=>{const e=function(){const e=window.matchMedia("(display-mode: standalone)").matches;return document.referrer.startsWith("android-app://")?"twa":navigator.standalone||e?"standalone":"browser"}();console.log("pwaDisplayMode",e),"twa"!==e&&a(!0)}),[]),Object(c.h)(e,null,t&&Object(c.h)("a",{href:"https://play.google.com/store/apps/details?id=com.e_levy_calculator.www.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",target:"_blank",rel:"noopener noreferrer"},Object(c.h)("img",{alt:"Get it on Google Play",height:70,src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"})))}}).call(this,a("hosL").Fragment)},OhRI:function(e,t,a){"use strict";(function(e){var c=a("hosL");t.a=()=>Object(c.h)(e,null,Object(c.h)("span",{className:"disclaimer"},"Disclaimer: We did our best to provide accurate results however, you may experience differences in real-world usage, since Information on Telco and GHIPPS charges are inconsistent."),Object(c.h)("a",{className:"privacy",href:"/privacy-policy/"},"Privacy Policy"))}).call(this,a("hosL").Fragment)},ZH8P:function(e,t,a){"use strict";(function(e){function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},c.apply(this,arguments)}var n=a("hosL");const l=({label:t,id:a,placeholder:l,inputProps:s})=>Object(n.h)(e,null,Object(n.h)("label",{for:a,className:"labelText"},t),Object(n.h)("div",null,Object(n.h)("input",c({type:"text",name:a,placeholder:l,className:"inputField",id:a},s)),Object(n.h)("span",{className:"currency"},"GHS")));l.defaultProps={label:"label",id:"",placeholder:"",inputProps:{}},t.a=l}).call(this,a("hosL").Fragment)},nsY8:function(e,t,a){"use strict";function c(e){let t=0,a=100;return t=e>=a?0:e<a?a-e:a,t}function n(e,t){let a=e-t;return a<0?0:a}function l(e,t){return e*t}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},s.apply(this,arguments)}a.r(t);var o=a("hosL"),r=a("QRet");const i=({className:e,children:t})=>Object(o.h)("div",{className:`gridItem ${e}`},t);i.defaultProps={className:""};var h=i;const m=({className:e,children:t})=>Object(o.h)("div",{className:`inputGroup ${e}`},t);m.defaultProps={className:""};var u=m;var d=({children:e})=>Object(o.h)("main",{className:"mainContainer"},e);var b=()=>Object(o.h)("div",{className:"arrowContainer"},Object(o.h)("span",{className:"arrow"},Object(o.h)("span",{className:"alternateText"},"to"),Object(o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right"},Object(o.h)("path",{d:"M5 12L19 12"}),Object(o.h)("path",{d:"M12 5L19 12 12 19"}))));const p=({handleSelect:e,theme:t})=>Object(o.h)("div",{className:`pickerItem ${t}`,role:"button",onClick:e},Object(o.h)("span",{className:"pickerContent"}));p.defaultProps={title:"",theme:""};var g=p;var O=({data:e,title:t,updateChoice:a,close:c})=>Object(o.h)("div",{className:"overlayContainer",onClick:()=>c()},Object(o.h)("div",{className:"pickerContainer"},Object(o.h)("span",{className:"close pointer",role:"button",onClick:()=>c()},Object(o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},Object(o.h)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(o.h)("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),Object(o.h)("div",{className:"pickerTitle alignCenter"},Object(o.h)("span",{className:"labelText"},t)),Object(o.h)("div",{className:"pickerItemContainer"},[...e.values()].map((e=>Object(o.h)(g,{key:e.key,title:e.name,theme:e.theme,handleSelect:()=>(a(e.key),c(),!1)})))))),j=a("ZH8P");const N=.75,v=100,f=new Map([["mtn",{name:"MTN",company:"MTN",img:"./assets/white-waves.png",key:"mtn",theme:"mtn",getCharge:function({source:e,destination:t,amount:a}){let c=0,n=v,l=N;return t===e?(a>=1e3?c=7.5:a>100&&(c=a*N/100),n=v,l=N):(a>=1e3?c=7.5:a>v&&(c=.75*a/100),n=v,l=.75),{charge:c,exempt:n,rate:l}}}],["vodafone",{name:"Vodafone",company:"Vodafone",img:"./assets/white-waves.png",key:"vodafone",theme:"vodafone",getCharge:function({}){return{charge:0,exempt:0,rate:0}}}],["airtel",{name:"AirtelTigo",company:"AirtelTigo",img:"./assets/white-waves.png",key:"airtel",theme:"airtel",getCharge:function({amount:e}){let t=0;return t=.75*e/100,e>=1e3&&(t=7.5),e<=100&&(t=0),{charge:t,exempt:0,rate:.75}}}]]),y=.01,w=(e,t,a)=>{let c="",n="";if(""===e&&""===t)return 0;""!==e&&""!==t?(c=f.get(e).key,n=f.get(t).key):""!==e&&(c=f.get(e).key,n=f.get(e).key);const{charge:l}=function({source:e,destination:t,amount:a}){return(0,f.get(e).getCharge)({source:e,destination:t,amount:a})}({source:c,destination:n,amount:a});return l},k=({label:e,className:t})=>Object(o.h)("span",{className:`labelText ${t}`},e);k.defaultProps={className:""};var C=k;const x=({className:e,children:t})=>Object(o.h)("span",{className:`displayText ${e}`},t);x.defaultProps={className:""};var P=x;const T=({className:e,value:t,chargeProps:a})=>Object(o.h)("span",s({},a,{className:`chargeAlt ${e}`}),`+ ${t.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})} GHS`);T.defaultProps={className:"",chargeProps:{}};var I=T,F=a("OhRI");const L=({id:e,handleChange:t,title:a,theme:c})=>Object(o.h)("div",{className:"fromGrid",tabIndex:3},Object(o.h)("div",{className:"selectedText alignRight"},Object(o.h)("span",{className:"selectedPlatform pointer",role:"button",onClick:a=>t(a,e)},a),Object(o.h)("span",{role:"button",className:"togglePicker pointer",onClick:a=>t(a,e)},"Tap to change")),Object(o.h)("div",{className:`selectedVisual ${c} pointer`,role:"button",onClick:a=>t(a,e)}));L.defaultProps={theme:""};var M=L;const S=({id:e,handleChange:t,title:a,theme:c})=>Object(o.h)("div",{className:"toGrid",tabIndex:4},Object(o.h)("div",{className:`selectedVisual ${c} pointer`,role:"button",onClick:a=>t(a,e)}),Object(o.h)("div",{className:"selectedText"},Object(o.h)("span",{className:"selectedPlatform pointer",role:"button",onClick:a=>t(a,e)},a),Object(o.h)("span",{role:"button",className:"togglePicker pointer",onClick:a=>t(a,e)},"Tap to change")));S.defaultProps={theme:""};var G=S,$=a("HK79"),R=a("NdmY");t.default=({showSimple:e})=>{const[t,a]=Object(r.c)(""),[s,i]=Object(r.c)(""),[m,p]=Object(r.c)(!1),[g,N]=Object(r.c)(""),[v,k]=Object(r.c)(0),[x,T]=Object(r.c)(0),[L,S]=Object(r.c)("mtn"),[Y,A]=Object(r.c)("mtn"),[_,D]=Object(r.c)(0);let H=Object(r.b)(null);const V={from:{pickerTitle:"You are sending money using:",updateChoice:S},to:{pickerTitle:"You are sending money to someone with:",updateChoice:A}};Object(r.a)((()=>{if(""==t)k(0),T(0);else if(""!==s){let e=c(s),a=l(n(t,e),y);const o=w(L,Y,t);k(t+a+o),T(a),D(o)}else if(t>0){let e=c(0),a=l(n(t,e),y);const s=w(L,Y,t);k(t+a+s),T(a),D(s)}else k(t),T(0)}),[t,s,L,Y]);const U=(e,t)=>{const a=parseInt(e.target.value.replaceAll(",",""),10);isNaN(a)?t(""):t(a)},B=(e,t)=>{console.log(t),N(t),p(!0)};return Object(o.h)(d,null,Object(o.h)("form",{className:"gridContainer",method:"POST"},Object(o.h)(h,{className:"gridItemFull"},Object(o.h)("div",{className:"inputGroup centerFlex"},Object(o.h)("h1",{className:"displayText"},"E-LEVY CALCULATOR"),Object(o.h)("h5",{className:"subDisplayText"},"Find out how much you will be charged as e-levy for sending money electronically in Ghana"))),Object(o.h)(h,{className:"gridItemFullMobileOnly"},Object(o.h)(u,null,Object(o.h)(j.a,{label:"You want to send:",id:"amount",placeholder:"0",inputProps:{pattern:"[0-9,.]",inputMode:"numeric",required:!0,value:t.toLocaleString("en-US"),onInput:e=>U(e,a),tabIndex:1}}))),Object(o.h)(h,{className:"gridItemFullMobileOnly"},Object(o.h)(u,null,Object(o.h)(j.a,{label:"You have already sent today: (optional)",id:"previousAmount",placeholder:"0",inputProps:{pattern:"[0-9,.]",inputMode:"numeric",value:s.toLocaleString("en-US"),onInput:e=>U(e,i),tabIndex:2,onKeyUp:e=>{13==e.keyCode&&H.current.focus()}}}))),Object(o.h)(h,{className:"gridItemFull"},Object(o.h)(u,{className:"pickerRow"},Object(o.h)("div",{className:"platformPickerGrid"},Object(o.h)(M,{title:f.get(L).name,theme:f.get(L).theme,id:"from",handleChange:B}),Object(o.h)(b,null),Object(o.h)(G,{title:f.get(Y).name,theme:f.get(Y).theme,id:"to",handleChange:B})))),Object(o.h)(h,{className:"noMargin"},Object(o.h)(u,{className:"divider chargePadding"},Object(o.h)(C,{className:"alignRight",label:"E-Levy Charge"}),Object(o.h)(P,{className:"alignRight"},Object(o.h)(I,{value:x})))),Object(o.h)(h,{className:"noMargin"},Object(o.h)(u,{className:"chargePadding"},Object(o.h)(C,{label:`${f.get(L).company} Charge`}),Object(o.h)(P,null,Object(o.h)(I,{chargeProps:{ref:H,tabIndex:5},value:_})))),Object(o.h)(h,{className:"centerFlex gridItemFull"},Object(o.h)(u,null,Object(o.h)(C,{className:"alignCenter",label:"You will pay:"}),Object(o.h)(P,null,Object(o.h)(I,{className:"charge",value:v})))),Object(o.h)(h,{className:"gridItemFull"},Object(o.h)(u,{className:"centerFlex"},Object(o.h)("button",{className:"labelText button",type:"button",onClick:t=>(t.preventDefault(),Object($.b)({advanced:!1}),e(),!1)},"Simple View"))),m&&Object(o.h)(O,{data:f,selectedPicker:g,title:V[g].pickerTitle,close:()=>p(!1),updateChoice:V[g].updateChoice}),Object(o.h)(h,{className:"gridItemFull"},Object(o.h)(u,{className:"centerFlex"},Object(o.h)(R.a,null))),Object(o.h)(h,{className:"gridItemFull"},Object(o.h)(u,{className:"centerFlex"},Object(o.h)(F.a,null)))))}}}]);
//# sourceMappingURL=route-advanced.chunk.abff0.esm.js.map