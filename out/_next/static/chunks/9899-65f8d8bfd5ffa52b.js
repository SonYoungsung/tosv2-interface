"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9899],{20858:function(e,t,n){n.d(t,{QX:function(){return o},oM:function(){return i}});var r=n(4480),i=(0,r.cn)({key:"stake_filter_radio",default:"All"}),o=((0,r.nZ)({key:"stake_filter_radio_state",get:function(e){return(0,e.get)(i)}}),(0,r.cn)({key:"stake_filter_sort",default:"Recently"}));(0,r.nZ)({key:"stake_filter_sort_state",get:function(e){return(0,e.get)(o)}})},50750:function(e,t,n){var r=n(34051),i=n.n(r),o=n(79042),a=n(5555),u=n(77044),s=n(20858),c=n(83077),d=n(68462),l=n(67294),f=n(4480);function k(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,i)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){k(o,r,i,a,u,"next",e)}function u(e){k(o,r,i,a,u,"throw",e)}a(void 0)}))}}t.Z=function(){var e=(0,l.useState)(void 0),t=e[0],n=e[1],r=(0,l.useState)(!1),k=r[0],p=r[1],T=(0,f.sJ)(s.oM),g=(0,f.sJ)(s.QX),x=(0,u.Ge)().account,b=(0,d.Z)(),S=b.StakingV2Proxy_CONTRACT,m=b.LockTOS_CONTRACT,y=(0,c.O)().blockNumber;return(0,l.useEffect)((function(){var e=function(){var e=v(i().mark((function e(){var t,r,u,s,c,d,l,f,k,b,y,h,O,_,L,C,w,I,N;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(S&&m&&x)){e.next=46;break}return e.next=3,S.stakingOf(x);case 3:return t=e.sent,e.next=6,Promise.all(t.map(function(){var e=v(i().mark((function e(n,r){var u,s,c,d,l,f,k,v,p,T,g,x,b;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t[r].toString(),e.next=3,S.stakeInfo(u);case 3:if(s=e.sent,c=s.ltos.toString(),d=s.deposit.toString(),l="".concat((0,o.WN)({amount:d,localeString:!0})," TOS"),f=(0,a.df)(s.endTime.toString(),"YYYY.MM.DD HH:mm"),k="".concat((0,o.WN)({amount:c,localeString:!0})," LTOS"),v=(0,a.vI)(s.endTime.toString()),1!==r){e.next=12;break}return e.abrupt("return",{staked:{ltos:k,stos:void 0},principal:l,isOver:!1,stakedType:"LTOS Staking",endTime:f,tokenType:"TOS",stakedId:u});case 12:if(!(r>1)){e.next=29;break}return p=s.marketId.toString(),e.next=16,S.connectId(u);case 16:if(T=e.sent,g=T.toString(),"0"===p){e.next=25;break}if("0"!==g){e.next=21;break}return e.abrupt("return",{staked:{ltos:k,stos:void 0},principal:l,isOver:v,stakedType:"Bond",endTime:f,tokenType:"ETH",stakedId:u,isWithoutLockup:!0});case 21:return e.next=23,m.balanceOfLock(g);case 23:return x=e.sent,e.abrupt("return",{staked:{ltos:k,stos:"".concat((0,o.WN)({amount:x.toString(),localeString:!0,round:!1})," sTOS")},principal:l,isOver:v,stakedType:"Bond",endTime:f,tokenType:"ETH",stakedId:u});case 25:return e.next=27,m.balanceOfLock(g);case 27:return b=e.sent,e.abrupt("return",{staked:{ltos:k,stos:"".concat((0,o.WN)({amount:b.toString(),localeString:!0})," sTOS")},principal:l,isOver:v,stakedType:"Staking",endTime:f,tokenType:"TOS",stakedId:u});case 29:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 6:if((r=e.sent).length>0&&p(!0),"All"!==T){e.next=21;break}if("Recently"!==g){e.next=15;break}return u=r.reverse(),s=r.filter((function(e){if("LTOS Staking"===(null===e||void 0===e?void 0:e.stakedType))return e})),c=u.filter((function(e){if("LTOS Staking"!==(null===e||void 0===e?void 0:e.stakedType))return e})),d=s.concat(c),e.abrupt("return",n(d));case 15:if("Earliest"!==g){e.next=18;break}return l=r.sort((function(e,t){return e&&t?(null===e||void 0===e?void 0:e.endTime)>(null===t||void 0===t?void 0:t.endTime)?1:-1:0})),e.abrupt("return",n(l));case 18:if("Latest"!==g){e.next=21;break}return f=r.sort((function(e,t){return e&&t?(null===e||void 0===e?void 0:e.endTime)>(null===t||void 0===t?void 0:t.endTime)?-1:1:0})).sort((function(e,t){return"LTOS Staking"===(null===e||void 0===e?void 0:e.stakedType)?-1:1})),e.abrupt("return",n(f));case 21:if("Bond"!==T){e.next=32;break}if(k=r.filter((function(e){if("Bond"===(null===e||void 0===e?void 0:e.stakedType))return e})),"Recently"!==g){e.next=26;break}return b=k.reverse(),e.abrupt("return",n(b));case 26:if("Earliest"!==g){e.next=29;break}return y=k.sort((function(e,t){return e&&t?(null===e||void 0===e?void 0:e.endTime)>(null===t||void 0===t?void 0:t.endTime)?1:-1:0})),e.abrupt("return",n(y));case 29:if("Latest"!==g){e.next=32;break}return h=k.sort((function(e,t){return e&&t?(null===e||void 0===e?void 0:e.endTime)>(null===t||void 0===t?void 0:t.endTime)?-1:1:0})),e.abrupt("return",n(h));case 32:if("Stake"!==T){e.next=46;break}if(O=r.filter((function(e){if("LTOS Staking"===(null===e||void 0===e?void 0:e.stakedType)||"Staking"===(null===e||void 0===e?void 0:e.stakedType))return e})),"Recently"!==g){e.next=40;break}return _=O.reverse(),L=O.filter((function(e){if("LTOS Staking"===(null===e||void 0===e?void 0:e.stakedType))return e})),C=_.filter((function(e){if("LTOS Staking"!==(null===e||void 0===e?void 0:e.stakedType))return e})),w=L.concat(C),e.abrupt("return",n(w));case 40:if("Earliest"!==g){e.next=43;break}return I=O.sort((function(e,t){return"LTOS Staking"===(null===e||void 0===e?void 0:e.stakedType)?0:e&&t?(null===e||void 0===e?void 0:e.endTime)>(null===t||void 0===t?void 0:t.endTime)?1:-1:0})),e.abrupt("return",n(I));case 43:if("Latest"!==g){e.next=46;break}return N=O.sort((function(e,t){return"LTOS Staking"===(null===e||void 0===e?void 0:e.stakedType)?0:e&&t?(null===e||void 0===e?void 0:e.endTime)>(null===t||void 0===t?void 0:t.endTime)?-1:1:0})).sort((function(e,t){return"LTOS Staking"===(null===e||void 0===e?void 0:e.stakedType)?-1:1})),e.abrupt("return",n(N));case 46:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){console.log("**useStakeList err**"),console.log(e)}))}),[S,x,m,y,T,g]),{stakeCards:t,hasList:k}}},49899:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(85893),i=n(45161),o=n(93717),a=n(14225),u=n(71293),s=n(90273);var c=function(e){var t=e.currentPage,n=e.setCurrentPage,o=e.pageSize,c=(0,i.If)().colorMode,d=t+1>o;return(0,r.jsxs)(a.z,{w:"82px",h:"40px",border:"dark"===c?"solid 1px #313442":"1px solid #e8edf2",borderRadius:6,background:"none",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"dark"===c?"gray.200":"gray.700",_hover:d?{}:{color:"#257eee",borderColor:"#257eee"},_disabled:{color:"dark"===c?"#2c2c35":"#c6cbd9",borderColor:"dark"===c?"#2c2c35":"#e8edf2"},_active:{bg:"transparent"},isDisabled:d,onClick:function(){return n(t+1)},children:[(0,r.jsx)(u.x,{mr:"9px",fontSize:12,children:"Next"}),(0,r.jsx)(s.m,{})]})};var d=function(e){var t=e.pageNumber,n=e.currentPage,a=e.onClick,s=(0,i.If)().colorMode,c=n===Number(t);return(0,r.jsx)(o.k,{w:"40px",h:"40px",color:c||"dark"===s?"white.200":"#2c2c35",bg:c?"blue.100":"",_hover:{color:c?"white.200":"blue.100"},textAlign:"center",lineHeight:"40px",cursor:"pointer",alignItems:"center",borderRadius:"6px",onClick:function(){return a(t)},children:(0,r.jsx)(u.x,{w:"100%",children:t})})},l=n(67294),f=n(37243),k=n(50750);var v=function(e){var t=e.setCurrentPage,n=e.currentPage,a=e.pageSize,u=(new Array(a),(0,k.Z)().stakeCards),s=((0,f.Z)("stake_stake_modal").openModal,(0,i.If)().colorMode,(0,l.useMemo)((function(){if(a){for(var e=[],t=0;t<a;t++)e.push(t);return e}}),[a]));return(0,r.jsx)(o.k,{h:"40px",mt:"27px",mb:"3px",children:(0,r.jsxs)(o.k,{children:[(0,r.jsx)(o.k,{mr:"27px",children:u&&u.length>0&&(null===s||void 0===s?void 0:s.map((function(e,i){return(0,r.jsx)(d,{currentPage:n,onClick:t,pageNumber:i+1},"key_".concat(i))})))}),(0,r.jsx)(o.k,{children:(0,r.jsx)(c,{pageSize:a,currentPage:n,setCurrentPage:t})})]})})}}}]);