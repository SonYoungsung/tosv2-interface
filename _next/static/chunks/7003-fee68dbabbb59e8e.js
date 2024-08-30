"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7003],{23792:function(e,t,r){var n=r(34051),o=r.n(n),i=r(45093),a=r(76312),l=r(35418),c=r(67294);function u(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,o)}t.Z=function(){var e=(0,c.useState)([{title:"Treasury Balance",price:"-",priceUnit:"$",tooltip:"Total value of non TOS assets held by the Treasury"},{title:"TOS Price",price:"-",priceUnit:"$",tooltip:"TOS market price"}]),t=e[0],r=e[1],n=(0,a.a)(l.K,{variables:{period:"-1",limit:1},pollInterval:1e4}),s=(n.loading,n.error,n.data);return(0,c.useEffect)((function(){var e=function(){var e,t=(e=o().mark((function e(){var t,n,a,l,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===(t=null===s||void 0===s?void 0:s.getDashboard[0])||void 0===t?void 0:t.tosPrice)&&(null===(n=null===s||void 0===s?void 0:s.getDashboard[0])||void 0===n?void 0:n.treasuryBalance)&&(a=null===s||void 0===s?void 0:s.getDashboard[0],l=a.tosPrice,c=a.treasuryBalance,r([{title:"Treasury Balance",price:(0,i.Z)(c),priceUnit:"$",tooltip:"Total value of non TOS assets held by the Treasury"},{title:"TOS Price",price:(0,i.Z)(l),priceUnit:"$",tooltip:"TOS market price"}]));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){u(i,n,o,a,l,"next",e)}function l(e){u(i,n,o,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();e().catch((function(e){}))}),[s]),{bondTopsCards:t}}},44020:function(e,t,r){r.r(t);var n=r(85893),o=r(45161),i=r(93717),a=r(71293),l=r(67294),c=r(95787);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(e){var t=(0,o.If)().colorMode,r=e.title,s=e.price,f=e.priceUnit,d=e.style,p=e.tooltip,h=(0,l.useMemo)((function(){return"$"===f?(0,n.jsxs)(i.k,{children:[(0,n.jsx)(a.x,{fontSize:22,color:"dark"===t?"#f1f1f1":"#07070c",fontWeight:"bold",children:f}),(0,n.jsx)(a.x,{fontSize:22,color:"dark"===t?"#f1f1f1":"#07070c",fontWeight:"bold",children:s})]}):(0,n.jsxs)(i.k,{children:[(0,n.jsx)(a.x,{fontSize:22,color:"dark"===t?"#f1f1f1":"#07070c",fontWeight:"bold",children:s}),(0,n.jsx)(a.x,{alignSelf:"end",ml:"5px",color:"dark"===t?"#f1f1f1":"#07070c",fontSize:14,pb:"3px",children:f})]})}),[s,f,t]);return(0,n.jsxs)(i.k,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({w:["48.9%","48.9%","48.9%"],h:110,borderWidth:1,borderColor:"dark"===t?"gray.300":"gray.900",borderRadius:14,flexDir:"column",pl:"20px",pr:"18px",pt:"15px",pb:"10px",bgColor:"dark"===t?"gray.600":"white.100"},d,{children:[(0,n.jsxs)(i.k,{alignItems:"flex-start",mb:"12px",h:17,children:[(0,n.jsx)(a.x,{color:"dark"===t?"gray.100":"gray.200",fontSize:12,fontWeight:600,h:17,mb:"12px",mr:"6px",children:r}),(0,n.jsx)(c.Z,{label:p})]}),(0,n.jsx)(i.k,{justifyContent:"space-between",alignItems:"center",children:(0,n.jsx)(i.k,{fontWeight:"bold",fontSize:22,color:"dark"===t?"#f1f1f1":"#07070c",children:h})})]}))}},77003:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var n=r(85893),o=r(45161),i=r(48940),a=r(93717),l=r(71293),c=r(18618),u=r(23792),s=r(34051),f=r.n(s),d=r(45093),p=r(76312),h=r(35418),v=r(68462),x=r(50266),b=r(67294);function y(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,o)}var g=function(){var e=(0,b.useState)([{title:"Total Value Staked",price:"-",priceUnit:"$",tooltip:"The total dollar value of all the LTOS."},{title:"TOS APY",price:"-",priceUnit:"%",tooltip:"The annualized percentage yield in TOS for staking. This value is used to increase LTOS index at every rebase period."},{title:"LTOS Index",price:"-",priceUnit:"TOS",tooltip:"Number of TOS you get when you unstake 1 LTOS. LTOS index increases at every rebase period."}]),t=e[0],r=e[1],n=(0,v.Z)().StakingV2Proxy_CONTRACT,o=(0,x.Z)().priceData,i=(0,p.a)(h.$,{variables:{period:"-1",limit:1},pollInterval:1e4}),a=(i.loading,i.error,i.data);return(0,b.useEffect)((function(){var e=function(){var e,t=(e=f().mark((function e(){var t,i,l,c,u,s,p,h,v,x,b;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&o&&a)){e.next=22;break}return t=o.tosPrice,i=a.getDashboardCard[0].ltosIndex,e.next=5,n.totalLtos();case 5:return l=e.sent,e.next=8,n.getLtosToTosPossibleIndex(l);case 8:return c=e.sent,u=Number(c.toString())/1e18*t,e.next=12,n.rebasePerEpoch();case 12:return s=e.sent,e.next=15,n.epoch();case 15:p=e.sent,h=p.length_,v=1+s/1e18,x=31536e3/Number(h.toString()),b=100*(Math.pow(v,x)-1),r([{title:"Total Value Staked",price:(0,d.Z)(u),priceUnit:"$",tooltip:"The total dollar value of all the LTOS."},{title:"TOS APY",price:(0,d.Z)(b),priceUnit:"%",tooltip:"The annualized percentage yield in TOS for staking. This value is used to increase LTOS index at every rebase period."},{title:"LTOS Index",price:(0,d.Z)(i,7),priceUnit:"TOS",tooltip:"Number of TOS you get when you unstake 1 LTOS. LTOS index increases at every rebase period."}]);case 22:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){y(i,n,o,a,l,"next",e)}function l(e){y(i,n,o,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();e().catch((function(e){}))}),[n,o,a]),{stakeTopCards:t}},S=r(44020);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){var t=e.cardList,r=(0,o.If)().colorMode;(0,i.F)();return(0,n.jsx)(a.k,{py:"18px",pl:"15px",bgColor:"dark"===r?"gray.600":"white.100",flexDir:"column",borderWidth:1,borderColor:"dark"===r?"gray.600":"#e8edf2",borderRadius:14,w:"100%",children:t.map((function(e,o){var i=e.title,c=e.price,u=e.priceUnit;e.tooltip;return(0,n.jsxs)(a.k,{flexDir:"column",mb:o!==t.length-1?"24px":0,children:[(0,n.jsx)(l.x,{color:"dark"===r?"gray.100":"gray.1000",fontSize:12,fontWeight:600,h:17,mb:"7px",children:i}),(0,n.jsxs)(l.x,{fontSize:22,color:"dark"===r?"white.200":"gray.800",fontWeight:"bold",children:["$"===u?u:null," ",c," ","$"!==u?u:null]})]},i+o)}))})}var O=function(e){var t=e.pageKey,r=m((0,c.a)("(max-width: 510px)"),1)[0],o=(0,u.Z)().bondTopsCards,i=g().stakeTopCards,l=(0,b.useMemo)((function(){switch(t){case"Bond_screen":return o;case"Stake_screen":return i;default:return[]}}),[t,o,i]);return(0,n.jsx)(a.k,{flexDir:"column",children:r?(0,n.jsx)(k,{cardList:l}):(0,n.jsx)(a.k,{justifyContent:"space-between",columnGap:"24px",children:null===l||void 0===l?void 0:l.map((function(e,t){var r=e.title,o=e.price,i=e.priceUnit,a=e.tooltip;return(0,n.jsx)(S.default,{title:r,price:o,priceUnit:i,tooltip:a},r)}))})})}}}]);