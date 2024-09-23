(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{29183:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/common/modal/StakeGraph",function(){return n(60316)}])},88586:function(e,t){"use strict";t.Z={rebase:{epochLength:28800,beginEpochEnd:1668682800},LOCKTOS_maxWeeks:156,LOCKTOS_epochUnit:604800,modalMaxWeeks:155,rebasePerEpoch:8704505e-11,rebasePeriod:28800,mainnetGasPrice:"6849315",minBondGasPrice:"279458",errMsg:{balanceExceed:"Input has exceeded your balance",bondZeroInput:"Input has to be greater than 0",periodExceed:"Must be between 1 and 155",stakePeriodExceed:"Must be between 0 and 155",managePeriodExceed:"New lock-up period must be equal or greater than the existing lock-up period",zeroInput:"Input has to be equal to or greater than 0",periodExceedThanMaximum:"Must be less than 156 weeks"}}},60938:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(4480),a={bond_modal_period:155,bond_modal_balance:void 0},u=(0,r.cn)({key:"bond_bondModal_input",default:a}),o=(0,r.nZ)({key:"bond_bondModal_input_state",get:function(e){return(0,e.get)(u)}});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,u=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);o=!0);}catch(i){l=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(e){var t=(0,r.sJ)(o),n=i((0,r.FV)(u),2),a=n[0],l=n[1],s=(0,r.rb)(u);return"bond_modal"===e?{inputValue:t,value:a,setValue:l,resetValue:s}:{inputValue:void 0,value:void 0,setValue:void 0,resetValue:void 0}},c=n(88586).Z.modalMaxWeeks,d={stake_modal_period:c,stake_modal_balance:void 0},f=(0,r.cn)({key:"stake_stakeModal_input",default:d}),p=(0,r.nZ)({key:"stake_stakeModal_input_state",get:function(e){return(0,e.get)(f)}}),b={stake_unstakeModal_balance:void 0},_=(0,r.cn)({key:"stake_unstakeModal_input",default:b}),v=(0,r.nZ)({key:"stake_unstakeModal_input_state",get:function(e){return(0,e.get)(_)}}),m={stake_updateModal_period:c,stake_updateModal_ltos_balance:void 0,stake_updateModal_tos_balance:void 0},h=(0,r.cn)({key:"stake_updateModal_input",default:m}),y=(0,r.nZ)({key:"stake_updateModal_input_state",get:function(e){return(0,e.get)(h)}}),k={stake_relockModal_period:c,stake_relockModal_ltos_balance:void 0,stake_relockModal_tos_balance:void 0},g=(0,r.cn)({key:"stake_relockModal_input",default:k}),V=(0,r.nZ)({key:"stake_relockModal_input_state",get:function(e){return(0,e.get)(g)}});function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,u=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);o=!0);}catch(i){l=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(e){var t=(0,r.sJ)(p),n=M((0,r.FV)(f),2),a=n[0],u=n[1],o=(0,r.rb)(f),l=(0,r.sJ)(y),i=M((0,r.FV)(h),2),s=i[0],c=i[1],d=(0,r.rb)(h),b=(0,r.sJ)(v),m=M((0,r.FV)(_),2),k=m[0],x=m[1],j=(0,r.rb)(_),w=(0,r.sJ)(V),S=M((0,r.FV)(g),2),O=S[0],E=S[1],A=(0,r.rb)(g);switch(e){case"stake_modal":return{inputValue:t,value:a,setValue:u,resetValue:o};case"update_modal":return{inputValue:l,value:s,setValue:c,resetValue:d};case"unstake_modal":return{inputValue:b,value:k,setValue:x,resetValue:j};case"relock_modal":return{inputValue:w,value:O,setValue:E,resetValue:A};default:return{inputValue:void 0,value:void 0,setValue:void 0,resetValue:void 0}}};var w=function(e,t){var n=j(t),r=n.inputValue,a=n.value,u=n.setValue,o=n.resetValue,l=s(t),i=l.inputValue,c=l.value,d=l.setValue,f=l.resetValue;switch(e){case"Stake_screen":return{inputValue:r,value:a,setValue:u,setResetValue:o};case"Bond_screen":return{inputValue:i,value:c,setValue:d,setResetValue:f};default:return{inputValue:void 0,value:void 0,setValue:void 0}}}},60316:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(45161),u=n(93717),o=n(85129),l=n(38658),i=n(88586),s=n(60938),c=n(67294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}t.default=function(e){var t=e.pageKey,n=e.subKey,p=e.periodKey,b=e.balanceKey,_=e.isSlideDisabled,v=e.minValue,m={mt:"2",ml:"-2.5",fontSize:"sm"},h=(0,s.Z)(t,n),y=h.inputValue,k=(h.value,h.setValue),g=(0,c.useState)(0),V=g[0],x=g[1],M=(0,c.useState)(!1),j=M[0],w=(M[1],(0,a.If)().colorMode),S=(0,c.useState)(!1),O=S[0],E=S[1];return(0,c.useEffect)((function(){0!==V&&E(!0)}),[V]),(0,c.useEffect)((function(){var e;if(b&&O&&(""===y[b]||void 0===y[b]))return k(f({},y,(d(e={},b,0),d(e,p,V),e)));return k(f({},y,d({},p,V)))}),[V,p,b,O]),(0,c.useEffect)((function(){if(y[p])return x(Number(y[p]))}),[y,p]),(0,c.useEffect)((function(){return x(_?0:i.Z.modalMaxWeeks)}),[_]),(0,r.jsx)(u.k,{w:"100%",h:"70px",pos:"relative",children:(0,r.jsxs)(o.iR,{focusThumbOnChange:!1,"aria-label":"slider-ex-1",defaultValue:0,min:0,max:i.Z.modalMaxWeeks,value:V,onChange:function(e){return x(v&&v>e?v:e)},h:"10px",alignSelf:"end",isDisabled:_,children:[(0,r.jsx)(o.jz,f({value:0},m,{children:"7d"})),(0,r.jsx)(o.jz,f({value:52},m,{children:"1y"})),(0,r.jsx)(o.jz,f({value:104},m,{children:"2y"})),(0,r.jsx)(o.jz,f({value:155},m,{children:"3y"})),(0,r.jsxs)(o.Uj,{bg:"light"===w?"#e7edf3":"#353d48",children:[(0,r.jsx)(o.Ms,{bg:"#2775ff"}),v&&(0,r.jsx)(o.Ms,{maxW:"".concat(v/155*100,"%"),bg:"#2bb415"})]}),(0,r.jsx)(l.u,{color:"light"===w?"#07070c":"#f1f1f1",placement:"top",bg:"transparent",w:"50px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontSize:"15px",fontWeight:600,isOpen:j,label:"".concat(V," sTOS"),children:(0,r.jsx)(o.gs,{})})]})})}},23169:function(e,t,n){"use strict";function r(e,t){let n=function(e){const t=parseFloat(e);return"number"!==typeof t||Number.isNaN(t)?0:t}(e);const r=10**(null!=t?t:10);return n=Math.round(n*r)/r,t?n.toFixed(t):n.toString()}function a(e){if(!Number.isFinite(e))return 0;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n+=1;return n}function u(e,t,n){return 100*(e-t)/(n-t)}function o(e,t,n){return(n-t)*e+t}function l(e,t,n){return r(Math.round((e-t)/n)*n+t,a(n))}function i(e,t,n){return null==e?e:(n<t&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(e,t),n))}n.d(t,{HU:function(){return i},Rg:function(){return u},WP:function(){return l},WS:function(){return o},Zd:function(){return r},vk:function(){return a}})}},function(e){e.O(0,[8658,7277,9774,2888,179],(function(){return t=29183,e(e.s=t);var t}));var t=e.O();_N_E=t}]);