(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2224],{69734:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/stake/RedeemModal",function(){return t(13677)}])},35418:function(e,n,t){"use strict";t.d(n,{$:function(){return c},K:function(){return u}});var r=t(68806);function i(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function o(){var e=i(["\n  query GetDashboard($period: String!, $limit: Int!) {\n    getDashboard(period: $period, limit: $limit) {\n      _id\n      chainId\n      createdAt\n      marketCap\n      runway\n      tosPrice\n      tosSupply\n      sTosSupply\n      lTosSupply\n      totalValueStaked\n      treasuryBalance\n      updatedAt\n    }\n  }\n"]);return o=function(){return e},e}function a(){var e=i(["\n  query GetDashboardCard($period: String!, $limit: Int!) {\n    getDashboardCard(period: $period, limit: $limit) {\n      tosPrice\n      backingPerTos\n      ltosPrice\n      mintingRate\n      ltosIndex\n      chainId\n    }\n  }\n"]);return a=function(){return e},e}var u=(0,r.Ps)(o()),c=(0,r.Ps)(a())},66028:function(e,n,t){"use strict";function r(){var e,n,t=(e=["\n  query GetTokenPrice($tokenId: String!) {\n    getTokenPrice(tokenId: $tokenId) {\n      price\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return r=function(){return t},t}t.d(n,{N:function(){return i}});var i=(0,t(68806).Ps)(r())},81271:function(e,n,t){"use strict";var r=t(34051),i=t.n(r),o=t(37243),a=t(67294),u=t(35418),c=t(76312),l=t(45093),s=t(68462),d=t(79042),f=t(77044),m=t(35553),p=t(2593),v=t(50266),b=t(88586);function h(e,n,t,r,i,o,a){try{var u=e[o](a),c=u.value}catch(l){return void t(l)}u.done?n(c):Promise.resolve(c).then(r,i)}function x(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){h(o,r,i,a,u,"next",e)}function u(e){h(o,r,i,a,u,"throw",e)}a(void 0)}))}}n.Z=function(){var e=(0,o.Z)().selectedModalData,n=(0,a.useState)(void 0),t=n[0],r=n[1],h=(0,a.useState)(void 0),g=(h[0],h[1],(0,c.aM)(u.K,{variables:{period:"-1",limit:1},pollInterval:1e4})),y=(g.loading,g.error,g.data),P=(0,s.Z)(),k=P.BondDepositoryProxy_CONTRACT,S=P.StakingV2Proxy_CONTRACT,N=(0,f.Ge)(),w=(0,v.Z)().priceData,_=(b.Z.mainnetGasPrice,b.Z.minBondGasPrice);return(0,a.useEffect)((function(){function n(){return(n=x(i().mark((function n(){var t,o,a,u,c,s,f,v,b,h,x,g,P,j,I;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e&&y&&w&&k)){n.next=28;break}return n.next=4,k.viewMarket(e.index);case 4:return o=n.sent,n.next=7,null===k||void 0===k?void 0:k.purchasableAssetAmountAtOneTime(o.tosPrice,o.maxPayout);case 7:return a=n.sent,n.next=10,null===S||void 0===S?void 0:S.possibleIndex();case 10:return u=n.sent,n.next=13,k.getBonds();case 13:return c=n.sent,n.next=16,null===(t=N.library)||void 0===t?void 0:t.getGasPrice();case 16:s=n.sent,Number(m.formatUnits(s,9)),f=(0,d.WN)({amount:null===a||void 0===a?void 0:a.toString()}),v=(0,d.WN)({amount:null===u||void 0===u?void 0:u.toString()}),b=c[4],h=1/Number(b.toString())*1e18*w.ethPrice,x=(0,l.Z)(y.getDashboard[0].tosPrice),g=Number(x)-Number(e.bondingPrice)/(100*Number(x)),P=Number(e.discountRate.replaceAll("%",""))/100,j=p.O$.from((0,d.Az)(_)).mul(s).div((0,d.Az)(P.toString())),I=(0,d.WN)({amount:j.toString(),decimalPoints:6,decimalPlaces:6}),r({bondPrice:"$".concat((0,l.Z)(h)),marketPrice:"$".concat(x),discount:"".concat((0,l.Z)(g),"%"),minBond:"".concat(Number(I)<0?"0.000000":I),maxBond:"".concat((0,l.Z)(f)),ltosIndex:"".concat((0,l.Z)(v))});case 28:case"end":return n.stop()}}),n)})))).apply(this,arguments)}try{!function(){n.apply(this,arguments)}()}catch(t){console.log("**useBondModal err**"),console.log(t)}}),[e,y,k,S,null===N||void 0===N?void 0:N.library,w,_]),{bondModalData:t}}},17767:function(e,n,t){"use strict";var r=t(88586),i=t(60938),o=t(37243),a=t(29619),u=t(67294);n.Z=function(){var e=(0,u.useState)(!1),n=e[0],t=e[1],c=(0,u.useState)(!1),l=c[0],s=c[1],d=(0,u.useState)(!0),f=d[0],m=d[1],p=(0,u.useState)(!1),v=p[0],b=p[1],h=(0,a.Z)().userTOSBalance,x=(0,o.Z)().isModalLoading,g=(0,i.Z)("Stake_screen","stake_modal").inputValue,y=g.stake_modal_balance,P=g.stake_modal_period,k=r.Z.modalMaxWeeks;return(0,u.useEffect)((function(){return x?(t(!1),b(!1)):void 0===y||0===y.length||Number(y)<=0?(b(!0),t(!1)):h&&y?Number(y)>Number(h.replaceAll(",",""))?(b(!1),t(!0)):(b(!1),t(!1)):function(){b(!1),t(!1)}}),[y,h,x]),(0,u.useEffect)((function(){return Number(P)>k||Number(P)<0||0===P.length?s(!0):s(!1)}),[P,k,x]),(0,u.useEffect)((function(){m(n||l||v)}),[n,l,v]),{inputOver:n,inputPeriodOver:l,zeroInputBalance:v,btnDisabled:f}}},50266:function(e,n,t){"use strict";var r=t(76312),i=t(35418),o=t(66028),a=t(67294);n.Z=function(){var e=(0,a.useState)(void 0),n=e[0],t=e[1],u=(0,r.aM)(i.K,{variables:{period:"-1",limit:1}}),c=(u.loading,u.error,u.data),l=(0,r.aM)(o.N,{variables:{tokenId:"ethereum"}}).data;return(0,a.useEffect)((function(){if(c&&l){var e,n=(null===(e=c.getDashboard[0])||void 0===e?void 0:e.tosPrice)||"0",r=l.getTokenPrice.price;t({tosPrice:Number(n),ethPrice:Number(r)})}}),[c,l]),{priceData:n}}},50482:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=t(45161),o=t(18618),a=t(57747),u=t(93717),c=t(71293),l=t(95787),s=t(37243),d=t(98253);function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(e){var n=e.title,t=e.content,f=e.symbol,p=e.tooltip,v=e.isWarning,b=(0,i.If)().colorMode,h=m((0,o.a)("(max-width: 1024px)"),1)[0],x=(0,s.Z)().isModalLoading;return(0,r.jsxs)(a.xu,{display:"flex",flexDir:"column",w:h?"155px":"152px",alignItems:"center",mb:"15px",children:[(0,r.jsxs)(u.k,{alignItems:"center",mb:"6px",children:[(0,r.jsx)(c.x,{color:"dark"===b?"gray.100":"gray.1000",h:"17px",fontWeight:600,fontSize:12,textAlign:"center",mr:"6px",children:n}),(0,r.jsx)(l.Z,{label:p})]}),(0,r.jsx)(u.k,{fontWeight:600,justifyContent:"center",h:h?"28px":"25px",children:x?(0,r.jsx)(u.k,{w:"100px",h:"30px",children:(0,r.jsx)(d.default,{})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.x,{color:v?"red.100":"dark"===b?"white.100":"gray.800",fontSize:18,mr:2,children:t||"-"}),(0,r.jsx)(c.x,{color:"dark"===b?"white.200":"gray.800",fontSize:12,lineHeight:"33px",children:f||""})]})})]})}}},function(e){e.O(0,[4885,2678,8658,8555,246,3942,9002,4824,3677,9774,2888,179],(function(){return n=69734,e(e.s=n);var n}));var n=e.O();_N_E=n}]);