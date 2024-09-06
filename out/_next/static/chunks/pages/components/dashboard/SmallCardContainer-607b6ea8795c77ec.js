(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9108],{7462:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dashboard/SmallCardContainer",function(){return r(4068)}])},95787:function(e,t,r){"use strict";var n=r(85893),i=r(45161),o=r(38658),a=r(21371);t.Z=function(e){var t=(0,i.If)().colorMode,r=e.label;return(0,n.jsx)(o.u,{display:0===(null===r||void 0===r?void 0:r.length)?"none":"flex",placement:"top",label:r,bg:"dark"===t?"#1f2128":"#fff",borderRadius:"3px",color:"light"===t?"#07070c":"#8b8b93",fontSize:"12px",border:"light"===t?"solid 1px #e8edf2":"solid 1px #313442",children:(0,n.jsx)(a.w,{display:0===(null===r||void 0===r?void 0:r.length)?"none":"",h:"16px",minW:"16px"})})}},35418:function(e,t,r){"use strict";r.d(t,{$:function(){return c},K:function(){return l}});var n=r(68806);function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(){var e=i(["\n  query GetDashboard($period: String!, $limit: Int!) {\n    getDashboard(period: $period, limit: $limit) {\n      _id\n      chainId\n      createdAt\n      marketCap\n      runway\n      tosPrice\n      tosSupply\n      sTosSupply\n      lTosSupply\n      totalValueStaked\n      treasuryBalance\n      updatedAt\n    }\n  }\n"]);return o=function(){return e},e}function a(){var e=i(["\n  query GetDashboardCard($period: String!, $limit: Int!) {\n    getDashboardCard(period: $period, limit: $limit) {\n      tosPrice\n      backingPerTos\n      ltosPrice\n      mintingRate\n      ltosIndex\n      chainId\n    }\n  }\n"]);return a=function(){return e},e}var l=(0,n.Ps)(o()),c=(0,n.Ps)(a())},32228:function(e,t,r){"use strict";r.r(t);var n=r(85893),i=r(45161),o=r(71293),a=r(93717),l=r(99839),c=r(67294),u=r(95787);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(e){var t=e.title,r=e.price,s=e.priceUnit,f=(e.priceChangePercent,e.style),h=(e.tooltip,e.tooltipMessage),g=p((0,l.d)(),1)[0]<490,m=(0,i.If)().colorMode,y=(0,c.useMemo)((function(){return"$"===s?(0,n.jsxs)(o.x,{fontSize:22,fontWeight:"bold",color:"dark"===m?"white.200":"gray.800",children:[s," ",r]}):(0,n.jsxs)(a.k,{children:[(0,n.jsx)(o.x,{fontSize:22,fontWeight:"bold",color:"dark"===m?"white.200":"gray.800",children:r}),(0,n.jsx)(o.x,{alignSelf:"end",ml:"5px",fontSize:14,pb:"3px",color:"dark"===m?"white.200":"gray.800",children:s})]})}),[r,s,m]);return(0,n.jsxs)(a.k,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({h:110,borderWidth:g?"none":1,borderColor:g?"":"dark"===m?"gray.300":"gray.900",borderRadius:g?"none":14,flexDir:"column",pl:"20px",pr:"18px",pt:"15px",pb:"10px",bgColor:"dark"===m?"gray.600":"white.100"},f,{children:[(0,n.jsxs)(a.k,{children:[(0,n.jsx)(o.x,{color:"gray.100",fontSize:12,fontWeight:600,h:17,mb:"12px",mr:"6px",children:t}),(0,n.jsx)(u.Z,{label:h})]}),(0,n.jsx)(a.k,{justifyContent:"space-between",alignItems:"center",children:(0,n.jsx)(a.k,{fontSize:22,color:"dark"===m?"white.200":"gray.800",fontWeight:"bold",children:y})})]}))}},4068:function(e,t,r){"use strict";r.r(t);var n=r(85893),i=r(45161),o=r(93717),a=r(57747),l=r(5674),c=r(68462),u=r(99839),s=r(67294),d=r(32228),p=r(35418),f=r(76312),h=r(45093),g=r(79102);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,s.useState)(void 0),t=e[0],r=e[1],m=y((0,u.d)(),1)[0],b=(0,c.Z)().Treasury_CONTRACT,x=(0,i.If)().colorMode,v=(0,f.aM)(p.$,{variables:{period:"-1",limit:2},pollInterval:1e4}),j=(v.loading,v.error,v.data);return(0,s.useEffect)((function(){if(j){var e=j.getDashboardCard[0],t=e.tosPrice,n=e.backingPerTos,i=e.mintingRate,o=e.ltosIndex,a=j.getDashboardCard[0],l=a.tosPrice,c=(a.backingPerTos,a.ltosPrice,a.ltosIndex),u=Number((0,h.Z)(t-l))/Number((0,h.Z)(l))*100,s=Number((0,h.Z)(o-c))/Number((0,h.Z)(c))*100,d=(0,g.WN)({amount:n,decimalPlaces:7,decimalPoints:7}),p=[{price:(0,h.Z)(t),priceUnit:"$",priceChangePercent:u,title:"TOS Price",tooltip:!0,tooltipMessage:"TOS market price in USD"},{price:d,priceUnit:"ETH",title:"Backing Per TOS",tooltip:!0,tooltipMessage:"Amount of treasury asset backed per 1 TOS in ETH"},{price:(0,h.Z)(i),priceUnit:"TOS",title:"Minting Rate Per ETH",tooltip:!0,tooltipMessage:"Minting rate per ETH determines how many TOS gets minted for every 1 ETH that gets bonded"},{price:(0,h.Z)(o,7),priceUnit:"TOS",priceChangePercent:s,title:"LTOS Index",tooltip:!0,tooltipMessage:"Number of TOS you get when you unstake 1 LTOS. LTOS index increases every 8 hours."}];r(p)}}),[b,j]),m<490?(0,n.jsx)(o.k,{flexDir:"column",borderWidth:1,borderColor:"dark"===x?"gray.300":"gray.900",borderRadius:14,children:null===t||void 0===t?void 0:t.map((function(e,r){return(0,n.jsx)(a.xu,{w:"100%",minW:"210px",children:(0,n.jsx)(d.default,{price:e.price,priceChangePercent:e.priceChangePercent,title:e.title,priceUnit:e.priceUnit,tooltipMessage:e.tooltipMessage,style:0===r?{borderTopRadius:14}:r===t.length-1?{borderBottomRadius:14}:{}})},"".concat(e.title,"_").concat(r))}))}):(0,n.jsx)(l.M,{columnGap:"24px",rowGap:"24px",justifyContent:"center",columns:m<960?2:4,children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,n.jsx)(a.xu,{w:"100%",minW:"210px",children:(0,n.jsx)(d.default,{price:e.price,priceChangePercent:e.priceChangePercent,title:e.title,priceUnit:e.priceUnit,tooltipMessage:e.tooltipMessage})},"".concat(e.title,"_").concat(t))}))})}},45093:function(e,t){"use strict";t.Z=function(e,t){if(void 0===e||null===e)return"-";if(isNaN(e))return"-";if(0===e||"0"===e)return t?"0.".concat("0".repeat(t)):"0.00";var r=e.toString().split(".");return r[0].length>=4&&(r[0]=r[0].replace(/(\d)(?=(\d{3})+$)/g,"$1,")),r[1]&&r[1].length>=2&&(r[1]=r[1].slice(0,t||2)),void 0===r[1]&&(r[1]="".concat("0".repeat(null!==t&&void 0!==t?t:2))),r.join(".").replaceAll(" ","")}},24027:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var n=r(36948),i=r(16554),o=r(67294),a=r(85893);function l(e){const{viewBox:t="0 0 24 24",d:r,displayName:l,defaultProps:c={}}=e,u=o.Children.toArray(e.path),s=(0,i.G)(((e,i)=>(0,a.jsx)(n.J,{ref:i,viewBox:t,...c,...e,children:u.length?u:(0,a.jsx)("path",{fill:"currentColor",d:r})})));return s.displayName=l,s}},21371:function(e,t,r){"use strict";r.d(t,{w:function(){return o}});var n=r(24027),i=r(85893),o=(0,n.I)({displayName:"QuestionOutlineIcon",path:(0,i.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,i.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,i.jsx)("path",{fill:"none",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,i.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]})})},5674:function(e,t,r){"use strict";r.d(t,{M:function(){return u}});var n=r(79078),i=r(16554),o=r(48940),a=r(7634),l=r(33951),c=r(85893),u=(0,i.G)((function(e,t){const{columns:r,spacingX:i,spacingY:u,spacing:s,minChildWidth:d,...p}=e,f=(0,o.F)(),h=d?function(e,t){return(0,l.XQ)(e,(e=>{const r=(0,a.LP)("sizes",e,"number"===typeof(n=e)?`${n}px`:n)(t);var n;return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`}))}(d,f):(g=r,(0,l.XQ)(g,(e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`)));var g;return(0,c.jsx)(n.r,{ref:t,gap:s,columnGap:i,rowGap:u,templateColumns:h,...p})}));u.displayName="SimpleGrid"}},function(e){e.O(0,[8658,8555,9774,2888,179],(function(){return t=7462,e(e.s=t);var t}));var t=e.O();_N_E=t}]);