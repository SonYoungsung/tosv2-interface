"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9002],{26882:function(r,e,n){n.d(e,{v:function(){return w}});var t=n(85893),o=n(48940),i=n(45161),l=n(18618),u=n(93717),a=n(82140),c=n(77555),f=n(71293),s=n(32735),d=n(14225),h=n(54968),v=n(60938),p=n(67294),y=n(4480);function b(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function g(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function m(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){g(r,e,n[e])}))}return r}function x(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,i=[],l=!0,u=!1;try{for(n=n.call(r);!(l=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);l=!0);}catch(a){u=!0,o=a}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return i}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return b(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(r){var e,n=r.placeHolder,b=r.w,w=r.h,S=r.isDisabled,j=r.atomKey,k=r.isError,A=r.style,C=r.pageKey,O=r.recoilKey,M=r.maxValue,I=r.errorMsg,_=r.rightUnit,z=((0,o.F)(),(0,i.If)().colorMode),E=(0,v.Z)(C,O),P=E.inputValue,V=E.value,D=E.setValue,T=(0,y.sJ)(h.ZC),N=(0,p.useRef)();x((0,l.a)("(max-width: 700px)"),1)[0];(0,p.useEffect)((function(){if(M&&j)return D(m({},P,g({},j,String(M))))}),[M,T,j,D]);var Z=(0,p.useMemo)((function(){if(N.current&&N.current.value)return"".concat(9*N.current.value.length+17,"px")}),[null===N||void 0===N||null===(e=N.current)||void 0===e?void 0:e.value]);return(0,t.jsxs)(u.k,m({flexDir:"column",w:b||270},A,{children:[(0,t.jsxs)(a.B,{children:[(0,t.jsx)(c.Y2,{isInvalid:k,isDisabled:S,w:b||270,h:w||45,ml:"auto",borderRadius:8,borderWidth:1,borderColor:"light"===z?"#e8edf2":"#313442",fontSize:14,color:"light"===z?"gray.800":"#f1f1f1",_hover:{borderColor:"light"===z?"#c6cbd9":"#535353"},focusBorderColor:"none",placeholder:n,_focus:{outline:"none",color:"light"===z?"gray.800":"#f1f1f1",boxShadow:"",borderColor:"light"===z?"#9a9aaf":"#8a8a98"},errorBorderColor:"#e23738",outline:"none",defaultValue:M,value:V[j],display:"flex",children:(0,t.jsx)(c.zu,{h:"100%",placeholder:n,onChange:function(r){var e=r.target.value;if(!(String(e).split(".").length>=3)&&!isNaN(r.target.value)&&!r.target.value.includes(" ")&&"."!==e&&"-"!==e)return D(m({},P,g({},j,e)))},fontSize:14,border:{},_placeholder:{color:"dark"===z?"#64646f":"#7e7e8f"},ref:N})}),V[j]&&_&&(0,t.jsx)(u.k,{pos:"absolute",textAlign:"center",lineHeight:"45px",h:"100%",fontSize:14,left:Z,color:S?"#64646f":"light"===z?"gray.800":"#f1f1f1",children:(0,t.jsx)(f.x,{children:_})}),(0,t.jsx)(s.x,{ml:"30px",w:"30px",mr:"12px",children:(0,t.jsx)(d.z,{w:"30px",h:"20px",color:"dark"===z?"#64646f":"#7e7e8f",_hover:{color:"#2775ff"},bg:"none",fontSize:14,fontWeight:600,isDisabled:S,onClick:function(){return M&&D(m({},P,g({},j,String(M))))},children:"Max"})})]}),k&&(0,t.jsx)(u.k,{fontSize:12,color:"#e23738",justifyContent:"flex-start",pl:"6px",children:(0,t.jsx)(f.x,{children:I})})]}))}},57683:function(r,e,n){n.d(e,{Z:function(){return h}});var t=n(34051),o=n.n(t),i=n(7963),l=n(10226),u=n(4480);var a=function(){var r=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return r()+r()+"-"+r()+"-"+r()+"-"+r()+"-"+r()+r()+r()};function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function f(r,e,n,t,o,i,l){try{var u=r[i](l),a=u.value}catch(c){return void n(c)}u.done?e(a):Promise.resolve(a).then(t,o)}function s(r){return function(){var e=this,n=arguments;return new Promise((function(t,o){var i=r.apply(e,n);function l(r){f(i,t,o,l,u,"next",r)}function u(r){f(i,t,o,l,u,"throw",r)}l(void 0)}))}}function d(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,i=[],l=!0,u=!1;try{for(n=n.call(r);!(l=(t=n.next()).done)&&(i.push(t.value),!e||i.length!==e);l=!0);}catch(a){u=!0,o=a}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return i}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return c(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(r){(0,i.p)();var e=d((0,u.FV)(l.Zb),2),n=(e[0],e[1]),t=d((0,u.FV)(l.t),2),c=(t[0],t[1]);function f(){return(f=s(o().mark((function e(t){var i,l,u,f,s,d,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n(!0),!(i=t)){e.next=15;break}return l=a(),c({id:l,message:null!==(u=null===r||void 0===r?void 0:r.submittedMessage)&&void 0!==u?u:"Tx is successfully submmited!",type:"success",link:null===r||void 0===r?void 0:r.submittedLink}),e.next=9,i.wait();case 9:if(!e.sent){e.next=15;break}return f=a(),c({id:f,message:null!==(s=null===r||void 0===r?void 0:r.confirmedMessage)&&void 0!==s?s:"Tx is successfully confirmed!",type:"confirmed",link:null===r||void 0===r?void 0:r.confirmedLink}),e.abrupt("return",n(!1));case 15:e.next=23;break;case 17:e.prev=17,e.t0=e.catch(0),n(!1),d=a(),c({id:d,message:null!==(h=null===r||void 0===r?void 0:r.errorMessage)&&void 0!==h?h:"Something went wrong",type:"error",link:null===r||void 0===r?void 0:r.errorLink});case 23:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}return{setTx:function(r){return f.apply(this,arguments)}}}}}]);