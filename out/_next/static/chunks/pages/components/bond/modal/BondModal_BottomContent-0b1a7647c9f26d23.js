(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7607],{80008:function(t,e,n){(t.exports=n(85177)).tz.load(n(91128))},85177:function(t,e,n){var o,r,i;!function(a,u){"use strict";t.exports?t.exports=u(n(30381)):(r=[n(30381)],void 0===(i="function"===typeof(o=u)?o.apply(e,r):o)||(t.exports=i))}(0,(function(t){"use strict";void 0===t.version&&t.default&&(t=t.default);var e,n={},o={},r={},i={},a={};t&&"string"===typeof t.version||M("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var u=t.version.split("."),s=+u[0],c=+u[1];function f(t){return t>96?t-87:t>64?t-29:t-48}function l(t){var e=0,n=t.split("."),o=n[0],r=n[1]||"",i=1,a=0,u=1;for(45===t.charCodeAt(0)&&(e=1,u=-1);e<o.length;e++)a=60*a+f(o.charCodeAt(e));for(e=0;e<r.length;e++)i/=60,a+=f(r.charCodeAt(e))*i;return a*u}function d(t){for(var e=0;e<t.length;e++)t[e]=l(t[e])}function p(t,e){var n,o=[];for(n=0;n<e.length;n++)o[n]=t[e[n]];return o}function h(t){var e=t.split("|"),n=e[2].split(" "),o=e[3].split(""),r=e[4].split(" ");return d(n),d(o),d(r),function(t,e){for(var n=0;n<e;n++)t[n]=Math.round((t[n-1]||0)+6e4*t[n]);t[e-1]=1/0}(r,o.length),{name:e[0],abbrs:p(e[1].split(" "),o),offsets:p(n,o),untils:r,population:0|e[5]}}function m(t){t&&this._set(h(t))}function v(t,e){this.name=t,this.zones=e}function b(t){var e=t.toTimeString(),n=e.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=e.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+t,this.abbr=n,this.offset=t.getTimezoneOffset()}function _(t){this.zone=t,this.offsetScore=0,this.abbrScore=0}function y(t,e){for(var n,o;o=6e4*((e.at-t.at)/12e4|0);)(n=new b(new Date(t.at+o))).offset===t.offset?t=n:e=n;return t}function w(t,e){return t.offsetScore!==e.offsetScore?t.offsetScore-e.offsetScore:t.abbrScore!==e.abbrScore?t.abbrScore-e.abbrScore:t.zone.population!==e.zone.population?e.zone.population-t.zone.population:e.zone.name.localeCompare(t.zone.name)}function g(t,e){var n,o;for(d(e),n=0;n<e.length;n++)o=e[n],a[o]=a[o]||{},a[o][t]=!0}function z(t){var e,n,o,r,u=t.length,s={},c=[],f={};for(e=0;e<u;e++)if(o=t[e].offset,!f.hasOwnProperty(o)){for(n in r=a[o]||{})r.hasOwnProperty(n)&&(s[n]=!0);f[o]=!0}for(e in s)s.hasOwnProperty(e)&&c.push(i[e]);return c}function O(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;if(t&&t.length>3){var e=i[T(t)];if(e)return e;M("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")}}catch(f){}var n,o,r,a=function(){var t,e,n,o,r=(new Date).getFullYear()-2,i=new b(new Date(r,0,1)),a=i.offset,u=[i];for(o=1;o<48;o++)(n=new Date(r,o,1).getTimezoneOffset())!==a&&(t=y(i,e=new b(new Date(r,o,1))),u.push(t),u.push(new b(new Date(t.at+6e4))),i=e,a=n);for(o=0;o<4;o++)u.push(new b(new Date(r+o,0,1))),u.push(new b(new Date(r+o,6,1)));return u}(),u=a.length,s=z(a),c=[];for(o=0;o<s.length;o++){for(n=new _(S(s[o]),u),r=0;r<u;r++)n.scoreOffsetAt(a[r]);c.push(n)}return c.sort(w),c.length>0?c[0].zone.name:void 0}function T(t){return(t||"").toLowerCase().replace(/\//g,"_")}function x(t){var e,o,r,a;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)a=T(o=(r=t[e].split("|"))[0]),n[a]=t[e],i[a]=o,g(a,r[2].split(" "))}function S(t,e){t=T(t);var r,a=n[t];return a instanceof m?a:"string"===typeof a?(a=new m(a),n[t]=a,a):o[t]&&e!==S&&(r=S(o[t],S))?((a=n[t]=new m)._set(r),a.name=i[t],a):null}function k(t){var e,n,r,a;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)r=T((n=t[e].split("|"))[0]),a=T(n[1]),o[r]=a,i[r]=n[0],o[a]=r,i[a]=n[1]}function A(t){var e="X"===t._f||"x"===t._f;return!(!t._a||void 0!==t._tzm||e)}function M(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(t)}function j(e){var n,o=Array.prototype.slice.call(arguments,0,-1),r=arguments[arguments.length-1],i=t.utc.apply(null,o);return!t.isMoment(e)&&A(i)&&(n=S(r))&&i.add(n.parse(i),"minutes"),i.tz(r),i}(s<2||2===s&&c<6)&&M("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+t.version+". See momentjs.com"),m.prototype={_set:function(t){this.name=t.name,this.abbrs=t.abbrs,this.untils=t.untils,this.offsets=t.offsets,this.population=t.population},_index:function(t){var e;if((e=function(t,e){var n,o=e.length;if(t<e[0])return 0;if(o>1&&e[o-1]===1/0&&t>=e[o-2])return o-1;if(t>=e[o-1])return-1;for(var r=0,i=o-1;i-r>1;)e[n=Math.floor((r+i)/2)]<=t?r=n:i=n;return i}(+t,this.untils))>=0)return e},countries:function(){var t=this.name;return Object.keys(r).filter((function(e){return-1!==r[e].zones.indexOf(t)}))},parse:function(t){var e,n,o,r,i=+t,a=this.offsets,u=this.untils,s=u.length-1;for(r=0;r<s;r++)if(e=a[r],n=a[r+1],o=a[r?r-1:r],e<n&&j.moveAmbiguousForward?e=n:e>o&&j.moveInvalidForward&&(e=o),i<u[r]-6e4*e)return a[r];return a[s]},abbr:function(t){return this.abbrs[this._index(t)]},offset:function(t){return M("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(t)]},utcOffset:function(t){return this.offsets[this._index(t)]}},_.prototype.scoreOffsetAt=function(t){this.offsetScore+=Math.abs(this.zone.utcOffset(t.at)-t.offset),this.zone.abbr(t.at).replace(/[^A-Z]/g,"")!==t.abbr&&this.abbrScore++},j.version="0.5.45",j.dataVersion="",j._zones=n,j._links=o,j._names=i,j._countries=r,j.add=x,j.link=k,j.load=function(t){x(t.zones),k(t.links),function(t){var e,n,o,i;if(t&&t.length)for(e=0;e<t.length;e++)n=(i=t[e].split("|"))[0].toUpperCase(),o=i[1].split(" "),r[n]=new v(n,o)}(t.countries),j.dataVersion=t.version},j.zone=S,j.zoneExists=function t(e){return t.didShowError||(t.didShowError=!0,M("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!S(e)},j.guess=function(t){return e&&!t||(e=O()),e},j.names=function(){var t,e=[];for(t in i)i.hasOwnProperty(t)&&(n[t]||n[o[t]])&&i[t]&&e.push(i[t]);return e.sort()},j.Zone=m,j.unpack=h,j.unpackBase60=l,j.needsOffset=A,j.moveInvalidForward=!0,j.moveAmbiguousForward=!1,j.countries=function(){return Object.keys(r)},j.zonesForCountry=function(t,e){var n;if(n=(n=t).toUpperCase(),!(t=r[n]||null))return null;var o=t.zones.sort();return e?o.map((function(t){return{name:t,offset:S(t).utcOffset(new Date)}})):o};var C,N=t.fn;function E(t){return function(){return this._z?this._z.abbr(this):t.call(this)}}function P(t){return function(){return this._z=null,t.apply(this,arguments)}}t.tz=j,t.defaultZone=null,t.updateOffset=function(e,n){var o,r=t.defaultZone;if(void 0===e._z&&(r&&A(e)&&!e._isUTC&&e.isValid()&&(e._d=t.utc(e._a)._d,e.utc().add(r.parse(e),"minutes")),e._z=r),e._z)if(o=e._z.utcOffset(e),Math.abs(o)<16&&(o/=60),void 0!==e.utcOffset){var i=e._z;e.utcOffset(-o,n),e._z=i}else e.zone(o,n)},N.tz=function(e,n){if(e){if("string"!==typeof e)throw new Error("Time zone name must be a string, got "+e+" ["+typeof e+"]");return this._z=S(e),this._z?t.updateOffset(this,n):M("Moment Timezone has no data for "+e+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},N.zoneName=E(N.zoneName),N.zoneAbbr=E(N.zoneAbbr),N.utc=P(N.utc),N.local=P(N.local),N.utcOffset=(C=N.utcOffset,function(){return arguments.length>0&&(this._z=null),C.apply(this,arguments)}),t.tz.setDefault=function(e){return(s<2||2===s&&c<9)&&M("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+t.version+"."),t.defaultZone=e?S(e):null,t};var Z=t.momentProperties;return"[object Array]"===Object.prototype.toString.call(Z)?(Z.push("_z"),Z.push("_a")):Z&&(Z._z=null),t}))},29099:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/bond/modal/BondModal_BottomContent",function(){return n(44269)}])},77395:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var o=n(34051),r=n.n(o),i=n(79042),a=n(74506),u=n(68462),s=n(60938),c=n(67294),f=n(88586),l=n(4480),d=n(54968),p=n(83077);var h=function(t){var e=(0,s.Z)("Bond_screen","bond_modal").inputValue,n=(0,a.Z)(t,e.bond_modal_period),o=n.leftDays,r=n.leftHourAndMin,i=Number(e.bond_modal_period),u=(0,c.useMemo)((function(){if(void 0!==o&&void 0!==r&&void 0!==i)return(86400*Number(o)+3600*Number(r.split(":")[0])+60*Number(r.split(":")[1]))/604800+i}),[o,r,i]),l=f.Z.rebasePerEpoch,d=((0,p.O)().blockTimeStamp,(0,c.useMemo)((function(){if(void 0!==u)return Math.floor(21*u)}),[u])),h=(0,c.useMemo)((function(){if(void 0!==t&&l&&d)return t*Math.pow(1+l,d)}),[t,l,d]);return{newBalanceStos:(0,c.useMemo)((function(){if(void 0!==h&&void 0!==u)return h*u/156}),[h,u])}},m=n(45093);function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function b(t,e,n,o,r,i,a){try{var u=t[i](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(o,r)}function _(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){b(i,o,r,a,u,"next",t)}function u(t){b(i,o,r,a,u,"throw",t)}a(void 0)}))}}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(s){u=!0,r=s}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(t){var e=(0,c.useState)(void 0),n=e[0],o=e[1],p=(0,c.useState)(void 0),v=p[0],b=p[1],w=(0,c.useState)(void 0),g=w[0],z=w[1],O=(0,c.useState)("-"),T=O[0],x=O[1],S=(0,u.Z)(),k=S.StakingV2Proxy_CONTRACT,A=S.BondDepositoryProxy_CONTRACT,M=S.LockTOS_CONTRACT,j=(0,s.Z)("Bond_screen","bond_modal").inputValue,C=(0,a.Z)(Number(g),null===j||void 0===j?void 0:j.bond_modal_period).newEndTime,N=h(Number(g)).newBalanceStos,E=f.Z.rebasePeriod,P=y((0,l.FV)(d.ws),2),Z=(P[0],P[1]);return(0,c.useEffect)((function(){function e(){return(e=_(r().mark((function e(){var n,o,a,u,s,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(null===j||void 0===j?void 0:j.bond_modal_balance)&&void 0!==(null===j||void 0===j?void 0:j.bond_modal_balance)&&0!==(null===j||void 0===j?void 0:j.bond_modal_balance.length)&&void 0!==t){e.next=2;break}return e.abrupt("return",z(void 0));case 2:if(!(k&&A&&M&&(null===j||void 0===j?void 0:j.bond_modal_balance)&&t)){e.next=14;break}return n=j.bond_modal_balance,o=(0,i.Az)(n),e.next=7,A.viewMarket(t);case 7:return a=e.sent,u=a.tosPrice,e.next=11,A.calculateTosAmountForAsset(u,o);case 11:return s=e.sent,c=(0,i.WN)({amount:s.toString()}),e.abrupt("return",z(c));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(t){}))}),[j,k,A,M,t,E]),(0,c.useEffect)((function(){function e(){return(e=_(r().mark((function e(){var n,a,u,s,c,f,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(null===j||void 0===j?void 0:j.bond_modal_balance)&&""!==(null===j||void 0===j?void 0:j.bond_modal_balance)){e.next=2;break}return e.abrupt("return",o("-"));case 2:if(!(k&&A&&(null===j||void 0===j?void 0:j.bond_modal_balance)&&t)){e.next=18;break}return n=j.bond_modal_balance,a=(0,i.Az)(n),e.next=7,A.viewMarket(t);case 7:return u=e.sent,s=u.tosPrice,e.next=11,A.calculateTosAmountForAsset(s,a);case 11:return c=e.sent,e.next=14,k.getTosToLtosPossibleIndex(c);case 14:return f=e.sent,l=(0,i.WN)({amount:f,localeString:!0}),x((0,i.WN)({amount:c.toString()})||"-"),e.abrupt("return",o(l));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(t){})).finally((function(){Z(!1)}))}),[k,A,t,null===j||void 0===j?void 0:j.bond_modal_balance]),(0,c.useEffect)((function(){function t(){return(t=_(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b("".concat(C)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().catch((function(t){}))}),[C]),{youWillGet:n,endTime:v,stosReward:(0,m.Z)(N),originalTosAmount:T}}},44269:function(t,e,n){"use strict";n.r(e);var o=n(85893),r=n(67294),i=n(93717),a=n(60938),u=n(27520),s=n(37243),c=n(68506),f=n(77395);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(t){var e=t.fiveDaysLockup,n=t.fiveDaysLockupEndTime,d=(0,u.Z)().bp700px,p=(0,a.Z)("Bond_screen","bond_modal"),h=p.inputValue,m=(p.setResetValue,p.setValue,(0,s.Z)()),v=m.selectedModalData,b=(m.selectedModal,m.closeModal,null===v||void 0===v?void 0:v.index),_=(0,f.Z)(b),y=_.youWillGet,w=_.endTime,g=_.stosReward,z=_.originalTosAmount,O=[{title:"You Give",content:"".concat(h.bond_modal_balance||"-"," ETH"),tooltip:""},{title:"You Will Get",content:"".concat(null!==y&&void 0!==y?y:"-"," LTOS"),secondContent:"".concat(e?"0":g," sTOS"),tooltip:"You get LTOS based on what you give and sTOS is also based on the lock-up period.",secondTooltip:"Currently worth ".concat(z," TOS. As LTOS index increases, the number of TOS you can get from unstaking LTOS will also increase."),thirdTooltip:"sTOS\u2019s lock-up period is calculated relative to Thursday 00:00 (UTC+0)."},{title:"End Time",content:e?n:w||"-",tooltip:"LTOS can be unstaked after this time. "}];return(0,o.jsx)(i.k,{flexDir:"column",columnGap:"9px",mb:"30px",px:d?"20px":"50px",children:O.map((function(t){return(0,r.createElement)(c.default,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){l(t,e,n[e])}))}return t}({},t,{key:t.title}))}))})}},24027:function(t,e,n){"use strict";n.d(e,{I:function(){return u}});var o=n(36948),r=n(16554),i=n(67294),a=n(85893);function u(t){const{viewBox:e="0 0 24 24",d:n,displayName:u,defaultProps:s={}}=t,c=i.Children.toArray(t.path),f=(0,r.G)(((t,r)=>(0,a.jsx)(o.J,{ref:r,viewBox:e,...s,...t,children:c.length?c:(0,a.jsx)("path",{fill:"currentColor",d:n})})));return f.displayName=u,f}},21371:function(t,e,n){"use strict";n.d(e,{w:function(){return i}});var o=n(24027),r=n(85893),i=(0,o.I)({displayName:"QuestionOutlineIcon",path:(0,r.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,r.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,r.jsx)("path",{fill:"none",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,r.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]})})}},function(t){t.O(0,[4885,2678,8658,3942,9774,2888,179],(function(){return e=29099,t(t.s=e);var e}));var e=t.O();_N_E=e}]);