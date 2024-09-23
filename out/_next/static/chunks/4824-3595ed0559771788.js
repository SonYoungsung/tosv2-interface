"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4824],{94359:function(e,t,n){var o=n(34051),r=n.n(o),a=n(37243),l=n(67294),i=n(45093),u=n(68462),c=n(79042),s=n(2593),d=n(77044),f=n(60938),p=n(43382),m=n(4480),v=n(54968);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(e,t,n,o,r,a,l){try{var i=e[a](l),u=i.value}catch(c){return void n(c)}i.done?t(u):Promise.resolve(u).then(o,r)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(u){i=!0,r=u}finally{try{l||null==n.return||n.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(){var e=(0,a.Z)(),t=(e.selectedModalData,e.isModalLoading),n=(0,f.Z)("Stake_screen","stake_modal").inputValue,o=(0,l.useState)(void 0),S=o[0],k=o[1],g=(0,l.useState)(void 0),h=g[0],y=g[1],_=(0,l.useState)(void 0),w=_[0],x=_[1],O=(0,l.useState)(void 0),A=(O[0],O[1],(0,l.useState)(void 0)),N=A[0],Z=A[1],L=(0,l.useState)(void 0),M=L[0],P=L[1],E=(0,u.Z)(),C=E.BondDepositoryProxy_CONTRACT,I=E.StakingV2Proxy_CONTRACT,B=(0,d.Ge)().account,V=(0,p.Z)().simpleStakingId,W=T((0,m.FV)(v.ws),2),j=(W[0],W[1]);return(0,l.useEffect)((function(){var e=n.stake_modal_balance,o=(n.stake_modal_period,function(){var n,o=(n=r().mark((function n(){var o,a,l,u,d,f,p,m,v,S,b,T;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return");case 2:if(0!==String(e).length&&void 0!==e){n.next=5;break}return k("-"),n.abrupt("return",x("-"));case 5:if(!(C&&I&&B&&e)){n.next=39;break}return o=(0,c.Az)(e.replaceAll(",","").toString()),n.next=9,I.possibleIndex();case 9:return a=n.sent,s.O$.from(o).div(a),n.next=13,I.getTosToLtosPossibleIndex(o);case 13:if(l=n.sent,u=(0,c.WN)({amount:l.toString(),localeString:!0})||"-",k(u),!V){n.next=22;break}return n.next=19,I.remainedLtos(V.toString());case 19:n.t0=n.sent,n.next=23;break;case 22:n.t0=0;case 23:return d=n.t0,f=(0,c.WN)({amount:d.toString(),localeString:!0})||"-",n.next=27,I.getLtosToTosPossibleIndex(d);case 27:return p=n.sent,m=(0,c.WN)({amount:p.toString(),localeString:!0})||"-",y(f),Z(m),v=Number(u.replaceAll(",",""))+Number(f.replaceAll(",","")),x((0,i.Z)(String(v))),S=(0,c.Az)(String(v)),n.next=36,I.getLtosToTosPossibleIndex(S);case 36:b=n.sent,T=(0,c.WN)({amount:b.toString(),localeString:!0})||"-",P(T);case 39:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(o,r){var a=n.apply(e,t);function l(e){b(a,o,r,l,i,"next",e)}function i(e){b(a,o,r,l,i,"throw",e)}l(void 0)}))});return function(){return o.apply(this,arguments)}}());o().catch((function(e){console.log("**useStakeModalData err**"),console.log(e)})).finally((function(){return j(!1)}))}),[C,I,n,B,V,j,t]),{ltos:S,currentBalance:h,newBalance:w,currentTosValue:N,newBalanceTosValue:M}}},72005:function(e,t,n){var o=n(83077),r=n(60938),a=n(67294),l=n(74506),i=n(31617),u=n(88586);t.Z=function(){var e,t=(0,r.Z)("Stake_screen","stake_modal").inputValue,n=(0,i.Z)(!1),c=(n.newEndTime,n.inputTosAmount,n.tosValue,Number(null===t||void 0===t||null===(e=t.stake_modal_balance)||void 0===e?void 0:e.replaceAll(",",""))),s=(0,l.Z)(0,t.stake_modal_period),d=s.leftDays,f=s.leftHourAndMin,p=Number(t.stake_modal_period),m=(0,a.useMemo)((function(){if(void 0!==d&&void 0!==f&&void 0!==p)return(86400*Number(d)+3600*Number(f.split(":")[0])+60*Number(f.split(":")[1]))/604800+p}),[d,f,p]),v=u.Z.rebasePerEpoch,S=((0,o.O)().blockTimeStamp,(0,a.useMemo)((function(){if(void 0!==m)return Math.floor(21*m)}),[m])),b=(0,a.useMemo)((function(){if(void 0!==c&&v&&S)return c*Math.pow(1+v,S)}),[c,v,S]);return{newBalanceStos:(0,a.useMemo)((function(){if(void 0!==b&&void 0!==m)return b*m/156}),[b,m])}}},31617:function(e,t,n){var o=n(34051),r=n.n(o),a=n(45093),l=n(79042),i=n(2593),u=n(89406),c=n(68462),s=n(60938),d=n(37243),f=n(67294),p=n(74506);function m(e,t,n,o,r,a,l){try{var i=e[a](l),u=i.value}catch(c){return void n(c)}i.done?t(u):Promise.resolve(u).then(o,r)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){m(a,o,r,l,i,"next",e)}function i(e){m(a,o,r,l,i,"throw",e)}l(void 0)}))}}t.Z=function(e){var t=(0,f.useState)("-"),n=t[0],o=t[1],m=(0,f.useState)("-"),S=m[0],b=m[1],T=(0,f.useState)(void 0),k=T[0],g=T[1],h=(0,f.useState)(void 0),y=h[0],_=h[1],w=(0,c.Z)(),x=w.StakingV2Proxy_CONTRACT,O=(w.LockTOS_CONTRACT,(0,u.Z)().stakeId),A=(0,s.Z)("Stake_screen","relock_modal").inputValue,N=(0,f.useState)(0),Z=N[0],L=N[1],M=(0,p.Z)(Z,A.stake_relockModal_period),P=M.stosReward,E=M.newEndTime,C=(0,d.Z)(),I=C.selectedModalData;return C.selectedModal,(0,f.useEffect)((function(){function e(){return(e=v(r().mark((function e(){var t,n,o,a,i,u,c,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===I||void 0===I?void 0:I.ltosAmount)&&(null===A||void 0===A?void 0:A.stake_relockModal_ltos_balance)&&x)){e.next=15;break}return t=I.ltosAmount,n=Number(t.replaceAll(",",""))-Number(A.stake_relockModal_ltos_balance.replaceAll(",","")),o=(0,l.Az)(n.toString()),e.next=6,x.getLtosToTosPossibleIndex(o);case 6:return a=e.sent,i=(0,l.WN)({amount:a.toString(),localeString:!0,round:!1}),b(null!==i&&void 0!==i?i:"-"),u=(0,l.Az)(t.toString()),e.next=12,x.getLtosToTosPossibleIndex(u);case 12:c=e.sent,s=(0,l.WN)({amount:c.toString(),localeString:!0,round:!1}),g(Number(null===s||void 0===s?void 0:s.replaceAll(",","")));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[null===I||void 0===I?void 0:I.ltosAmount,null===A||void 0===A?void 0:A.stake_relockModal_ltos_balance,x]),(0,f.useEffect)((function(){function t(){return(t=v(r().mark((function t(){var n,a,u,c,s,d,f,p,m,v;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(x&&O&&A)){t.next=28;break}if(e){t.next=10;break}return n=(0,l.Az)(String(A.stake_relockModal_ltos_balance).replaceAll(" ","")),t.next=5,x.getLtosToTosPossibleIndex(n);case 5:return a=t.sent,u=(0,l.WN)({amount:a.toString(),localeString:!0})||"-",o(u),L(Number(u.replaceAll(",",""))),t.abrupt("return");case 10:if(!e){t.next=28;break}return c=(0,l.Az)(A.stake_relockModal_tos_balance),t.next=14,x.getTosToLtosPossibleIndex(c);case 14:return s=t.sent,t.next=17,x.remainedLtos(O);case 17:return d=t.sent,f=i.O$.from(s).add(d),p=(0,l.WN)({amount:f.toString(),localeString:!0,round:!1})||"-",t.next=22,x.getLtosToTosPossibleIndex(f);case 22:return m=t.sent,v=(0,l.WN)({amount:m.toString(),localeString:!0,round:!1})||"-",o(v),L(Number(A.stake_relockModal_tos_balance.replaceAll(",",""))),_(p),t.abrupt("return");case 28:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().catch((function(e){}))}),[O,x,A,P,e]),{newEndTime:E,inputTosAmount:(0,a.Z)(Z),tosValue:n,tosBalance:S,allLtosToTosBalance:k,allLtosBalance:y}}},5371:function(e,t,n){var o=n(34051),r=n.n(o),a=n(45093),l=n(79042),i=n(5555),u=n(32082),c=n(5835),s=n(89406),d=n(68462),f=n(60938),p=n(37243),m=n(67294),v=n(74506);function S(e,t,n,o,r,a,l){try{var i=e[a](l),u=i.value}catch(c){return void n(c)}i.done?t(u):Promise.resolve(u).then(o,r)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){S(a,o,r,l,i,"next",e)}function i(e){S(a,o,r,l,i,"throw",e)}l(void 0)}))}}t.Z=function(){var e,t=(0,m.useState)("-"),n=t[0],o=t[1],S=(0,m.useState)("-"),T=S[0],k=S[1],g=(0,m.useState)(1),h=g[0],y=g[1],_=(0,m.useState)("-"),w=_[0],x=_[1],O=(0,m.useState)("-"),A=O[0],N=O[1],Z=(0,d.Z)(),L=Z.StakingV2Proxy_CONTRACT,M=(Z.LockTOS_CONTRACT,(0,s.Z)()),P=M.stakeId,E=(M.connectId,(0,c.Z)()),C=((0,p.Z)().selectedModalData,(0,f.Z)("Stake_screen","update_modal").inputValue),I=Number(null===E||void 0===E||null===(e=E.currentTosAmount)||void 0===e?void 0:e.replaceAll(",",""))+Number(C.stake_updateModal_tos_balance),B=(0,v.Z)(I,Number(C.stake_updateModal_period)),V=B.stosReward,W=B.newEndTime,j=(0,u.Z)().epochUnit;return(0,m.useEffect)((function(){function e(){return(e=b(r().mark((function e(){var t,n,o,a,l,u,c,s,d,f,p;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L&&P&&E&&(t=E.currentEndTime,n=E.currentEndTimeStamp,k("".concat(t," (").concat((0,i.Ze)(),")")),o=(0,i.kv)(),l=(a=n-o)/j,u=(a-604800*Math.floor(l))/86400,c=a-604800*Math.floor(l)-86400*Math.floor(u),s=(0,i.g9)(c,"HH:mm").hours,d=(0,i.g9)(c,"HH:mm").mins,f=1===s.toString().length?"0".concat(s):"".concat(s),p=1===d.toString().length?"0".concat(d):"".concat(d),y(Math.floor(l)),x(String(Math.floor(u))),N("".concat(f,":").concat(p)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){}))}),[P,L,E,j]),(0,m.useEffect)((function(){function e(){return(e=b(r().mark((function e(){var t,n,i,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L||!(null===E||void 0===E?void 0:E.ltosBalance)||void 0===C.stake_updateModal_tos_balance){e.next=8;break}return t=(0,l.Az)(C.stake_updateModal_tos_balance.replaceAll(",","")),e.next=4,L.getTosToLtosPossibleIndex(t);case 4:n=e.sent,i=(0,l.WN)({amount:n}),u=Number(null===E||void 0===E?void 0:E.ltosBalance.replaceAll(",",""))+Number(null===i||void 0===i?void 0:i.replaceAll(",","")),o((0,a.Z)(u));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){console.log("**useUpdateModalData2 err**"),console.log(e)}))}),[L,C,E]),{currentEndTime:T,newEndTime:W,leftWeeks:h,leftDays:w,leftTime:A,newStosBalance:V,newLtosBalance:n,totalTosAmount:I}}},43382:function(e,t,n){var o=n(34051),r=n.n(o),a=n(79042),l=n(77044),i=n(67294),u=n(28450),c=n(83077),s=n(68462);function d(e,t,n,o,r,a,l){try{var i=e[a](l),u=i.value}catch(c){return void n(c)}i.done?t(u):Promise.resolve(u).then(o,r)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){d(a,o,r,l,i,"next",e)}function i(e){d(a,o,r,l,i,"throw",e)}l(void 0)}))}}t.Z=function(){var e=(0,i.useState)({tosAllowance:void 0,stakeList:void 0,simpleStakingId:void 0}),t=e[0],n=e[1],o=(0,s.Z)().TOS_CONTRACT,d=(0,l.Ge)().account,p=u.Z.StakingV2Proxy,m=(0,c.O)().blockNumber,v=(0,s.Z)().StakingV2Proxy_CONTRACT;return(0,i.useEffect)((function(){function e(){return(e=f(r().mark((function e(){var t,l,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o&&d&&v)){e.next=9;break}return e.next=4,o.allowance(d,p);case 4:return l=e.sent,e.next=7,v.stakingOf(d);case 7:return i=e.sent,e.abrupt("return",n({tosAllowance:Number((0,a.WN)({amount:l.toString()})),stakeList:i,simpleStakingId:null===(t=i[1])||void 0===t?void 0:t.toString()}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){void 0!==e&&(console.log("**fetchUseUser err**"),console.log(e))}))}),[o,d,p,m,v]),t}},34824:function(e,t,n){n.r(t);var o=n(85893),r=n(67294),a=n(45093),l=n(93717),i=n(54968),u=n(5835),c=n(94359),s=n(72005),d=n(5371),f=n(60938),p=n(27520),m=n(68506),v=n(4480);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(u){i=!0,r=u}finally{try{l||null==n.return||n.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(e){var t,n=e.fiveDaysLockup,S=e.isRedeem,k=(0,p.Z)().bp700px,g=(0,f.Z)("Stake_screen","stake_modal"),h=g.inputValue,y=(g.setResetValue,g.setValue,(0,d.Z)()),_=(y.currentEndTime,y.newEndTime),w=(y.leftWeeks,y.leftDays,y.leftTime,y.newLtosBalance,y.totalTosAmount,(0,u.Z)(),T((0,v.FV)(i.ws),2)),x=(w[0],w[1],(0,v.sJ)(i.lW),(0,s.Z)().newBalanceStos),O=(0,c.Z)(),A=O.ltos,N=O.currentBalance,Z=O.newBalance,L=O.currentTosValue,M=O.newBalanceTosValue,P=731e-7*Number(h.stake_modal_balance),E=S?[{title:"You Burn",content:"".concat((0,a.Z)(h.stake_modal_balance)," TOS")},{title:"You Get",content:"".concat((0,a.Z)(P,4)," ETH")}]:n?[{title:"You Give",content:"".concat((0,a.Z)(h.stake_modal_balance)," TOS")},{title:"You Will Get",content:"".concat(A," LTOS"),tooltip:"You get LTOS based on what you give and sTOS is also based on the lock-up period.",secondTooltip:"".concat(h.stake_modal_balance," TOS. As LTOS index increases, the number of TOS you can get from unstaking LTOS will also increase.")},{title:"Current Balance",content:"".concat(N||"-"," LTOS"),tooltip:"Current LTOS balance without Lock-Up period",secondTooltip:"".concat(L," TOS. As LTOS index increases, the number of TOS you can get from unstaking LTOS will also increase.")},{title:"New Balance",content:"".concat(Z||"-"," LTOS"),tooltip:"New LTOS balance without Lock-Up period after staking. ",secondTooltip:"".concat(M," TOS. As LTOS index increases, the number of TOS you can get from unstaking LTOS will also increase.")}]:[{title:"You Give",content:"".concat(h.stake_modal_balance||"-"," TOS")},{title:"You Will Get",content:"".concat(A," LTOS"),secondContent:"".concat(null!==(t=(0,a.Z)(x))&&void 0!==t?t:"-"," sTOS"),tooltip:"You get LTOS based on what you give and sTOS is also based on the lock-up period.",secondTooltip:"".concat((0,a.Z)(h.stake_modal_balance)," TOS. As LTOS index increases, the number of TOS you can get from unstaking LTOS will also increase."),thirdTooltip:"sTOS\u2019s lock-up period is calculated relative to Thursday 00:00 (UTC+0)."},{title:"End Time",content:"".concat(_||"-"),tooltip:"LTOS can be unstaked after this time. "}];return(0,o.jsx)(l.k,{flexDir:"column",columnGap:"9px",mb:"30px",px:k?"20px":"50px",children:E.map((function(e){return(0,r.createElement)(m.default,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){b(e,t,n[t])}))}return e}({},e,{key:e.title}))}))})}}}]);