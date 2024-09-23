"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8227],{80966:function(e,t,n){n.d(t,{Y_:function(){return i},ac:function(){return a},oM:function(){return o}});var r=n(4480),o=(0,r.cn)({key:"checkAllValue",default:void 0}),a=(0,r.cn)({key:"checkboxValue",default:[]}),i=(0,r.nZ)({key:"selectedCheckboxValues",get:function(e){return(0,e.get)(a)},set:function(e,t){(0,e.set)(a,t)}})},79859:function(e,t,n){var r=n(85893),o=n(48940),a=n(45161),i=n(88772),l=n(80966),u=n(27224),c=n(67294),s=n(4480);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}t.Z=function(e){e.placeHolder,e.w,e.h,e.isDisabled,e.value,e.valueKey;var t=e.pageKey,n=(e.isError,e.isChecked,e.state),f=e.setState,b=(e.action,e.elseAction,e.checkAll),p=e.params,v=e.belongToSelectAll,x=((0,o.F)(),(0,a.If)().colorMode),g=((0,u.Z)().pathName,d((0,s.FV)(l.oM),2)),y=g[0],m=g[1],j=d((0,s.FV)(l.ac),2),k=j[0],S=j[1],w=(0,s.rb)(l.ac),I=(0,c.useState)(n||!1),O=I[0],C=I[1];return(0,c.useEffect)((function(){v&&C(!(!t||y!==t))}),[y,t,f,v]),(0,c.useEffect)((function(){if(O&&k&&p&&0===(null===k||void 0===k?void 0:k.filter((function(e){if(null===e||void 0===e?void 0:e.stakedId)return e.stakedId===p.stakedId}))).length){var e=h(k).concat([p]);return S(e)}}),[p,O,k,S]),(0,c.useEffect)((function(){if(!1===O&&k&&p&&1===(null===k||void 0===k?void 0:k.filter((function(e){if(null===e||void 0===e?void 0:e.stakedId)return e.stakedId===p.stakedId}))).length){var e=null===k||void 0===k?void 0:k.filter((function(e){if(null===e||void 0===e?void 0:e.stakedId)return e.stakedId!==p.stakedId}));S(e)}}),[O,k,p,S]),(0,r.jsx)(i.X,{size:"lg",style:{borderRadius:"4px",borderColor:"dark"===x?"#535353":"#c6cbd9"},isChecked:v?O:n,onChange:function(e){var n=e.target.checked;f?f(n):C(n),b&&t&&(n?m(t):w())}})}},27541:function(e,t,n){var r=n(85893),o=n(48940),a=n(45161),i=n(93717),l=n(82140),u=n(33090),c=n(71293),s=n(32735),f=n(14225),d=n(60938),h=n(27520),b=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}t.Z=function(e){e.placeHolder;var t=e.w,n=e.h,x=e.isDisabled,g=e.atomKey,y=e.isError,m=e.style,j=e.pageKey,k=e.recoilKey,S=e.maxValue,w=e.errorMsg,I=(e.rightUnit,e.minValue,e.leftDays),O=e.leftTime,C=e.isDisabledText,E=e.endTime,A=e.isManageModal,V=((0,o.F)(),(0,a.If)().colorMode),M=(0,b.useState)("Weeks"),N=M[0],D=M[1],z=(0,b.useState)(!1),P=z[0],Z=z[1],T=(0,b.useState)(!1),W=(T[0],T[1],(0,h.Z)().bp700px),_=(0,d.Z)(j,k),K=_.inputValue,R=_.value,F=_.setValue,H=(0,b.useMemo)((function(){return R&&g&&R[g]?R[g]<10?"27px":R[g]&&R[g]<100?"37px":"42px":"27px"}),[R,g]);return(0,r.jsxs)(i.k,v({flexDir:"column",pos:"relative"},m,{children:[(0,r.jsxs)(l.B,{children:[(0,r.jsx)(u.I,{isInvalid:y,isDisabled:x,w:t||270,h:n||45,ml:"auto",borderRadius:8,borderWidth:1,borderColor:"light"===V?"#e8edf2":"#313442",fontSize:14,color:!1===P?"#64646f":"light"===V?"gray.800":x?"#64646f":"#f1f1f1",_placeholder:{color:"#64646f"},_hover:{borderColor:"light"===V?"#c6cbd9":"#535353"},focusBorderColor:"none",_focus:y?{}:{outline:"none",color:"light"===V?"gray.800":"#f1f1f1",boxShadow:"",borderColor:"light"===V?"#9a9aaf":"#8a8a98"},outline:"none",errorBorderColor:x?"none":"#e23738",value:"".concat(x?C||"-":R[g]),onChange:function(e){if(!isNaN(e.target.value)&&!e.target.value.includes(".")&&!e.target.value.includes(" "))return 0===Number(e.target.value)&&(console.log("-1-"),D("Weeks"),Z(!1)),Number(e.target.value)>1&&(console.log("-2-"),D("Weeks"),Z(!0)),1===Number(e.target.value)&&(console.log("-3-"),D("Week"),Z(!0)),F(v({},K,p({},g,e.target.value)))}}),(0,r.jsx)(i.k,{pos:"absolute",left:H,textAlign:"center",lineHeight:"39px",fontSize:14,children:(!1===x||!0===A)&&I&&O&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.x,{color:!1===P?"#64646f":"light"===V?"gray.800":x?"#64646f":"#f1f1f1",children:N}),(0,r.jsxs)(c.x,{fontSize:12,ml:"9px",mr:"3px",color:P?"dark"===V?"#8b8b93":"#7e7e8f":"",children:[I," ",1===Number(I)?"Day":"Days"," ",O]})]})}),(0,r.jsx)(s.x,{mr:"8px",display:"flex",alignItems:"center",children:(0,r.jsx)(f.z,{w:"30px",h:"20px",color:"dark"===V?"#64646f":"#7e7e8f",_hover:{color:"#2775ff"},bg:"none",fontSize:14,fontWeight:600,isDisabled:x,onClick:function(){K[g]!==S&&S&&F(v({},K,p({},g,S)))},children:"Max"})})]}),y&&!1===x&&(0,r.jsx)(i.k,{w:"100%",fontSize:12,color:"#e23738",pos:"absolute",mt:"40px",textAlign:"right",justifyContent:"center",children:(0,r.jsx)(c.x,{children:w})}),E&&(0,r.jsx)(i.k,{pos:"absolute",top:"48px",w:t||270,justifyContent:W?"flex-start":"center",children:(0,r.jsxs)(c.x,{children:["End Time : ",E]})})]}))}},46850:function(e,t,n){var r=n(34051),o=n.n(r),a=n(5555),i=n(35553),l=n(83077),u=n(68462),c=n(67294);function s(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(c){return void n(c)}l.done?t(u):Promise.resolve(u).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,l,"next",e)}function l(e){s(a,r,o,i,l,"throw",e)}i(void 0)}))}}t.Z=function(){var e=(0,c.useState)(void 0),t=e[0],n=e[1],r=(0,c.useState)(void 0),s=r[0],d=r[1],h=(0,u.Z)().StakingV2Proxy_CONTRACT,b=(0,l.O)().blockNumber;return(0,c.useEffect)((function(){function e(){return(e=f(o().mark((function e(){var t,r,l,u,c,s,f,b,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=18;break}return e.next=3,h.possibleIndex();case 3:return t=e.sent,e.next=6,h.rebasePerEpoch();case 6:return r=e.sent,l=i.formatEther(r),u=i.formatUnits(t.toString(),18),c=u.split("."),s=c[0]+"."+c[1].slice(0,7),e.next=13,h.epoch();case 13:f=e.sent,b=f.end,p=(0,a.df)(b.toString(),"HH:mm:ss"),n({ltosIndex:s,ltosIndexBN:t,nextRebase:p}),d(Number(l));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){console.log("**useStakeV2 err**"),console.log(e)}))}),[h,b]),{stakeV2:t,rebasePerEpoch:s}}},27224:function(e,t,n){var r=n(11163),o=n(67294);t.Z=function(){var e=(0,o.useState)(void 0),t=e[0],n=e[1],a=(0,r.useRouter)().pathname;return(0,o.useEffect)((function(){var e=a.replaceAll("/",""),t="dao"!==e?e.charAt(0).toUpperCase()+e.slice(1):"DAO";return n(t)}),[a]),{pathName:t}}},60316:function(e,t,n){n.r(t);var r=n(85893),o=n(45161),a=n(93717),i=n(85129),l=n(38658),u=n(88586),c=n(60938),s=n(67294);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}t.default=function(e){var t=e.pageKey,n=e.subKey,h=e.periodKey,b=e.balanceKey,p=e.isSlideDisabled,v=e.minValue,x={mt:"2",ml:"-2.5",fontSize:"sm"},g=(0,c.Z)(t,n),y=g.inputValue,m=(g.value,g.setValue),j=(0,s.useState)(0),k=j[0],S=j[1],w=(0,s.useState)(!1),I=w[0],O=(w[1],(0,o.If)().colorMode),C=(0,s.useState)(!1),E=C[0],A=C[1];return(0,s.useEffect)((function(){0!==k&&A(!0)}),[k]),(0,s.useEffect)((function(){var e;if(b&&E&&(""===y[b]||void 0===y[b]))return m(d({},y,(f(e={},b,0),f(e,h,k),e)));return m(d({},y,f({},h,k)))}),[k,h,b,E]),(0,s.useEffect)((function(){if(y[h])return S(Number(y[h]))}),[y,h]),(0,s.useEffect)((function(){return S(p?0:u.Z.modalMaxWeeks)}),[p]),(0,r.jsx)(a.k,{w:"100%",h:"70px",pos:"relative",children:(0,r.jsxs)(i.iR,{focusThumbOnChange:!1,"aria-label":"slider-ex-1",defaultValue:0,min:0,max:u.Z.modalMaxWeeks,value:k,onChange:function(e){return S(v&&v>e?v:e)},h:"10px",alignSelf:"end",isDisabled:p,children:[(0,r.jsx)(i.jz,d({value:0},x,{children:"7d"})),(0,r.jsx)(i.jz,d({value:52},x,{children:"1y"})),(0,r.jsx)(i.jz,d({value:104},x,{children:"2y"})),(0,r.jsx)(i.jz,d({value:155},x,{children:"3y"})),(0,r.jsxs)(i.Uj,{bg:"light"===O?"#e7edf3":"#353d48",children:[(0,r.jsx)(i.Ms,{bg:"#2775ff"}),v&&(0,r.jsx)(i.Ms,{maxW:"".concat(v/155*100,"%"),bg:"#2bb415"})]}),(0,r.jsx)(l.u,{color:"light"===O?"#07070c":"#f1f1f1",placement:"top",bg:"transparent",w:"50px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontSize:"15px",fontWeight:600,isOpen:I,label:"".concat(k," sTOS"),children:(0,r.jsx)(i.gs,{})})]})})}}}]);