(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{ZH8P:function(e,t,a){"use strict";(function(e){function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},c.apply(this,arguments)}var n=a("hosL");const l=({label:t,id:a,placeholder:l,inputProps:s})=>Object(n.h)(e,null,Object(n.h)("label",{for:a,className:"labelText"},t),Object(n.h)("div",null,Object(n.h)("input",c({type:"text",name:a,placeholder:l,className:"inputField",id:a},s)),Object(n.h)("span",{className:"currency"},"GHS")));l.defaultProps={label:"label",id:"",placeholder:"",inputProps:{}},t.a=l}).call(this,a("hosL").Fragment)},nsY8:function(e,t,a){"use strict";function c(e){let t=0,a=100;return t=e>=a?0:e<a?a-e:a,t}function n(e,t){let a=e-t;return a<0?0:a}function l(e,t){return e*t}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},s.apply(this,arguments)}a.r(t);var r=a("hosL"),o=a("QRet");const i=({className:e,children:t})=>Object(r.h)("div",{className:`gridItem ${e}`},t);i.defaultProps={className:""};var h=i;const m=({className:e,children:t})=>Object(r.h)("div",{className:`inputGroup ${e}`},t);m.defaultProps={className:""};var u=m;var b=({children:e})=>Object(r.h)("main",{className:"mainContainer"},e);var d=()=>Object(r.h)("div",{className:"arrowContainer"},Object(r.h)("span",{className:"arrow"},Object(r.h)("span",{className:"alternateText"},"to"),Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right"},Object(r.h)("path",{d:"M5 12L19 12"}),Object(r.h)("path",{d:"M12 5L19 12 12 19"}))));const p=({handleSelect:e,theme:t})=>Object(r.h)("div",{className:`pickerItem ${t}`,role:"button",onClick:e},Object(r.h)("span",{className:"pickerContent"}));p.defaultProps={title:"",theme:""};var O=p;var g=({data:e,title:t,updateChoice:a,close:c})=>Object(r.h)("div",{className:"overlayContainer",onClick:()=>c()},Object(r.h)("div",{className:"pickerContainer"},Object(r.h)("span",{className:"close pointer",role:"button",onClick:()=>c()},Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},Object(r.h)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(r.h)("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))),Object(r.h)("div",{className:"pickerTitle alignCenter"},Object(r.h)("span",{className:"labelText"},t)),Object(r.h)("div",{className:"pickerItemContainer"},[...e.values()].map((e=>Object(r.h)(O,{key:e.key,title:e.name,theme:e.theme,handleSelect:()=>(a(e.key),c(),!1)})))))),j=a("ZH8P");const N=.75,v=100,f=new Map([["mtn",{name:"MTN",company:"MTN",img:"./assets/white-waves.png",key:"mtn",theme:"mtn",getCharge:function({source:e,destination:t,amount:a}){let c=0,n=v,l=N;return t===e?(a>=1e3?c=7.5:a>100&&(c=a*N/100),n=v,l=N):(a>=1e3?c=7.5:a>v&&(c=.75*a/100),n=v,l=.75),{charge:c,exempt:n,rate:l}}}],["vodafone",{name:"Vodafone",company:"Vodafone",img:"./assets/white-waves.png",key:"vodafone",theme:"vodafone",getCharge:function({}){return{charge:0,exempt:0,rate:0}}}],["airtel",{name:"AirtelTigo",company:"AirtelTigo",img:"./assets/white-waves.png",key:"airtel",theme:"airtel",getCharge:function({amount:e}){let t=0;return t=.75*e/100,e>=1e3&&(t=7.5),e<=100&&(t=0),{charge:t,exempt:0,rate:.75}}}]]),k=.015,y=(e,t,a)=>{let c="",n="";if(""===e&&""===t)return 0;""!==e&&""!==t?(c=f.get(e).key,n=f.get(t).key):""!==e&&(c=f.get(e).key,n=f.get(e).key);const{charge:l}=function({source:e,destination:t,amount:a}){return(0,f.get(e).getCharge)({source:e,destination:t,amount:a})}({source:c,destination:n,amount:a});return l},C=({label:e,className:t})=>Object(r.h)("span",{className:`labelText ${t}`},e);C.defaultProps={className:""};var w=C;const x=({className:e,children:t})=>Object(r.h)("span",{className:`displayText ${e}`},t);x.defaultProps={className:""};var P=x;const T=({className:e,value:t,chargeProps:a})=>Object(r.h)("span",s({},a,{className:`chargeAlt ${e}`}),`+ ${t.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})} GHS`);T.defaultProps={className:"",chargeProps:{}};var I=T;var F=()=>Object(r.h)("span",{className:"disclaimer"},"Disclaimer: We did our best to provide accurate results, however you may experience differences in real-world usage, since Information on Telco and GHIPPS charges are inconsistent.");const L=({id:e,handleChange:t,title:a,theme:c})=>Object(r.h)("div",{className:"fromGrid",tabIndex:3},Object(r.h)("div",{className:"selectedText alignRight pointer",role:"button",onClick:a=>t(a,e)},Object(r.h)("span",{className:"selectedPlatform"},a),Object(r.h)("span",{role:"button",className:"togglePicker pointer",onClick:a=>t(a,e)},"Tap to change")),Object(r.h)("div",{className:`selectedVisual ${c} pointer`,role:"button",onClick:a=>t(a,e)}));L.defaultProps={theme:""};var S=L;const M=({id:e,handleChange:t,title:a,theme:c})=>Object(r.h)("div",{className:"toGrid",tabIndex:4},Object(r.h)("div",{className:`selectedVisual ${c} pointer`,role:"button",onClick:a=>t(a,e)}),Object(r.h)("div",{className:"selectedText pointer",role:"button",onClick:a=>t(a,e)},Object(r.h)("span",{className:"selectedPlatform"},a),Object(r.h)("span",{role:"button",className:"togglePicker pointer",onClick:a=>t(a,e)},"Tap to change")));M.defaultProps={theme:""};var $=M;t.default=({showSimple:e})=>{const[t,a]=Object(o.c)(""),[s,i]=Object(o.c)(""),[m,p]=Object(o.c)(!1),[O,N]=Object(o.c)(""),[v,C]=Object(o.c)(0),[x,T]=Object(o.c)(0),[L,M]=Object(o.c)("mtn"),[G,A]=Object(o.c)("mtn"),[Y,R]=Object(o.c)(0);let H=Object(o.b)(null);const U={from:{pickerTitle:"You are sending money using:",updateChoice:M},to:{pickerTitle:"You are sending money to someone with:",updateChoice:A}};Object(o.a)((()=>{if(""==t)C(0),T(0);else if(""!==s){let e=c(s),a=l(n(t,e),k);const r=y(L,G,t);C(t+a+r),T(a),R(r)}else if(t>0){let e=c(0),a=l(n(t,e),k);const s=y(L,G,t);C(t+a+s),T(a),R(s)}else C(t),T(0)}),[t,s,L,G]);const V=(e,t)=>{const a=parseInt(e.target.value.replaceAll(",",""),10);isNaN(a)?t(""):t(a)},D=(e,t)=>{console.log(t),N(t),p(!0)};return Object(r.h)(b,null,Object(r.h)("form",{className:"gridContainer",method:"POST"},Object(r.h)(h,{className:"gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("h1",{className:"displayText"},"E-LEVY CALCULATOR"))),Object(r.h)(h,{className:"gridItemFullMobileOnly"},Object(r.h)(u,null,Object(r.h)(j.a,{label:"You want to send:",id:"amount",placeholder:"0",inputProps:{pattern:"[0-9,.]",inputMode:"numeric",required:!0,value:t.toLocaleString("en-US"),onInput:e=>V(e,a),tabIndex:1}}))),Object(r.h)(h,{className:"gridItemFullMobileOnly"},Object(r.h)(u,null,Object(r.h)(j.a,{label:"You have already sent today: (optional)",id:"previousAmount",placeholder:"0",inputProps:{pattern:"[0-9,.]",inputMode:"numeric",value:s.toLocaleString("en-US"),onInput:e=>V(e,i),tabIndex:2},onKeyUp:e=>{13==e.keyCode&&H.current.focus()}}))),Object(r.h)(h,{className:"gridItemFull"},Object(r.h)(u,{className:"pickerRow"},Object(r.h)("div",{className:"platformPickerGrid"},Object(r.h)(S,{title:f.get(L).name,theme:f.get(L).theme,id:"from",handleChange:D}),Object(r.h)(d,null),Object(r.h)($,{title:f.get(G).name,theme:f.get(G).theme,id:"to",handleChange:D})))),Object(r.h)(h,{className:"noMargin"},Object(r.h)(u,{className:"divider chargePadding"},Object(r.h)(w,{className:"alignRight",label:"E-Levy Charge"}),Object(r.h)(P,{className:"alignRight"},Object(r.h)(I,{value:x})))),Object(r.h)(h,{className:"noMargin"},Object(r.h)(u,{className:"chargePadding"},Object(r.h)(w,{label:`${f.get(L).company} Charge`}),Object(r.h)(P,null,Object(r.h)(I,{chargeProps:{ref:H,tabIndex:5},value:Y})))),Object(r.h)(h,{className:"centerFlex gridItemFull"},Object(r.h)(u,null,Object(r.h)(w,{className:"alignCenter",label:"You will pay:"}),Object(r.h)(P,null,Object(r.h)(I,{className:"charge",value:v})))),Object(r.h)(h,{className:"gridItemFull"},Object(r.h)(u,{className:"centerFlex"},Object(r.h)("button",{className:"labelText button",type:"button",onClick:t=>(t.preventDefault(),e(),!1)},"Calculate E-Levy Only"))),m&&Object(r.h)(g,{data:f,selectedPicker:O,title:U[O].pickerTitle,close:()=>p(!1),updateChoice:U[O].updateChoice}),Object(r.h)(h,{className:"gridItemFull"},Object(r.h)(u,{className:"centerFlex"},Object(r.h)(F,null)))))}}}]);
//# sourceMappingURL=route-advanced.chunk.05fb4.esm.js.map