(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8252],{80008:function(t,e,n){(t.exports=n(85177)).tz.load(n(91128))},85177:function(t,e,n){var r,o,i;!function(u,a){"use strict";t.exports?t.exports=a(n(30381)):(o=[n(30381)],void 0===(i="function"===typeof(r=a)?r.apply(e,o):r)||(t.exports=i))}(0,(function(t){"use strict";void 0===t.version&&t.default&&(t=t.default);var e,n={},r={},o={},i={},u={};t&&"string"===typeof t.version||A("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var a=t.version.split("."),s=+a[0],c=+a[1];function l(t){return t>96?t-87:t>64?t-29:t-48}function f(t){var e=0,n=t.split("."),r=n[0],o=n[1]||"",i=1,u=0,a=1;for(45===t.charCodeAt(0)&&(e=1,a=-1);e<r.length;e++)u=60*u+l(r.charCodeAt(e));for(e=0;e<o.length;e++)i/=60,u+=l(o.charCodeAt(e))*i;return u*a}function d(t){for(var e=0;e<t.length;e++)t[e]=f(t[e])}function p(t,e){var n,r=[];for(n=0;n<e.length;n++)r[n]=t[e[n]];return r}function h(t){var e=t.split("|"),n=e[2].split(" "),r=e[3].split(""),o=e[4].split(" ");return d(n),d(r),d(o),function(t,e){for(var n=0;n<e;n++)t[n]=Math.round((t[n-1]||0)+6e4*t[n]);t[e-1]=1/0}(o,r.length),{name:e[0],abbrs:p(e[1].split(" "),r),offsets:p(n,r),untils:o,population:0|e[5]}}function m(t){t&&this._set(h(t))}function v(t,e){this.name=t,this.zones=e}function x(t){var e=t.toTimeString(),n=e.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=e.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+t,this.abbr=n,this.offset=t.getTimezoneOffset()}function b(t){this.zone=t,this.offsetScore=0,this.abbrScore=0}function g(t,e){for(var n,r;r=6e4*((e.at-t.at)/12e4|0);)(n=new x(new Date(t.at+r))).offset===t.offset?t=n:e=n;return t}function y(t,e){return t.offsetScore!==e.offsetScore?t.offsetScore-e.offsetScore:t.abbrScore!==e.abbrScore?t.abbrScore-e.abbrScore:t.zone.population!==e.zone.population?e.zone.population-t.zone.population:e.zone.name.localeCompare(t.zone.name)}function w(t,e){var n,r;for(d(e),n=0;n<e.length;n++)r=e[n],u[r]=u[r]||{},u[r][t]=!0}function k(t){var e,n,r,o,a=t.length,s={},c=[],l={};for(e=0;e<a;e++)if(r=t[e].offset,!l.hasOwnProperty(r)){for(n in o=u[r]||{})o.hasOwnProperty(n)&&(s[n]=!0);l[r]=!0}for(e in s)s.hasOwnProperty(e)&&c.push(i[e]);return c}function S(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;if(t&&t.length>3){var e=i[j(t)];if(e)return e;A("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")}}catch(l){}var n,r,o,u=function(){var t,e,n,r,o=(new Date).getFullYear()-2,i=new x(new Date(o,0,1)),u=i.offset,a=[i];for(r=1;r<48;r++)(n=new Date(o,r,1).getTimezoneOffset())!==u&&(t=g(i,e=new x(new Date(o,r,1))),a.push(t),a.push(new x(new Date(t.at+6e4))),i=e,u=n);for(r=0;r<4;r++)a.push(new x(new Date(o+r,0,1))),a.push(new x(new Date(o+r,6,1)));return a}(),a=u.length,s=k(u),c=[];for(r=0;r<s.length;r++){for(n=new b(O(s[r]),a),o=0;o<a;o++)n.scoreOffsetAt(u[o]);c.push(n)}return c.sort(y),c.length>0?c[0].zone.name:void 0}function j(t){return(t||"").toLowerCase().replace(/\//g,"_")}function z(t){var e,r,o,u;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)u=j(r=(o=t[e].split("|"))[0]),n[u]=t[e],i[u]=r,w(u,o[2].split(" "))}function O(t,e){t=j(t);var o,u=n[t];return u instanceof m?u:"string"===typeof u?(u=new m(u),n[t]=u,u):r[t]&&e!==O&&(o=O(r[t],O))?((u=n[t]=new m)._set(o),u.name=i[t],u):null}function _(t){var e,n,o,u;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)o=j((n=t[e].split("|"))[0]),u=j(n[1]),r[o]=u,i[o]=n[0],r[u]=o,i[u]=n[1]}function M(t){var e="X"===t._f||"x"===t._f;return!(!t._a||void 0!==t._tzm||e)}function A(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(t)}function T(e){var n,r=Array.prototype.slice.call(arguments,0,-1),o=arguments[arguments.length-1],i=t.utc.apply(null,r);return!t.isMoment(e)&&M(i)&&(n=O(o))&&i.add(n.parse(i),"minutes"),i.tz(o),i}(s<2||2===s&&c<6)&&A("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+t.version+". See momentjs.com"),m.prototype={_set:function(t){this.name=t.name,this.abbrs=t.abbrs,this.untils=t.untils,this.offsets=t.offsets,this.population=t.population},_index:function(t){var e;if((e=function(t,e){var n,r=e.length;if(t<e[0])return 0;if(r>1&&e[r-1]===1/0&&t>=e[r-2])return r-1;if(t>=e[r-1])return-1;for(var o=0,i=r-1;i-o>1;)e[n=Math.floor((o+i)/2)]<=t?o=n:i=n;return i}(+t,this.untils))>=0)return e},countries:function(){var t=this.name;return Object.keys(o).filter((function(e){return-1!==o[e].zones.indexOf(t)}))},parse:function(t){var e,n,r,o,i=+t,u=this.offsets,a=this.untils,s=a.length-1;for(o=0;o<s;o++)if(e=u[o],n=u[o+1],r=u[o?o-1:o],e<n&&T.moveAmbiguousForward?e=n:e>r&&T.moveInvalidForward&&(e=r),i<a[o]-6e4*e)return u[o];return u[s]},abbr:function(t){return this.abbrs[this._index(t)]},offset:function(t){return A("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(t)]},utcOffset:function(t){return this.offsets[this._index(t)]}},b.prototype.scoreOffsetAt=function(t){this.offsetScore+=Math.abs(this.zone.utcOffset(t.at)-t.offset),this.zone.abbr(t.at).replace(/[^A-Z]/g,"")!==t.abbr&&this.abbrScore++},T.version="0.5.45",T.dataVersion="",T._zones=n,T._links=r,T._names=i,T._countries=o,T.add=z,T.link=_,T.load=function(t){z(t.zones),_(t.links),function(t){var e,n,r,i;if(t&&t.length)for(e=0;e<t.length;e++)n=(i=t[e].split("|"))[0].toUpperCase(),r=i[1].split(" "),o[n]=new v(n,r)}(t.countries),T.dataVersion=t.version},T.zone=O,T.zoneExists=function t(e){return t.didShowError||(t.didShowError=!0,A("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!O(e)},T.guess=function(t){return e&&!t||(e=S()),e},T.names=function(){var t,e=[];for(t in i)i.hasOwnProperty(t)&&(n[t]||n[r[t]])&&i[t]&&e.push(i[t]);return e.sort()},T.Zone=m,T.unpack=h,T.unpackBase60=f,T.needsOffset=M,T.moveInvalidForward=!0,T.moveAmbiguousForward=!1,T.countries=function(){return Object.keys(o)},T.zonesForCountry=function(t,e){var n;if(n=(n=t).toUpperCase(),!(t=o[n]||null))return null;var r=t.zones.sort();return e?r.map((function(t){return{name:t,offset:O(t).utcOffset(new Date)}})):r};var C,I=t.fn;function Z(t){return function(){return this._z?this._z.abbr(this):t.call(this)}}function P(t){return function(){return this._z=null,t.apply(this,arguments)}}t.tz=T,t.defaultZone=null,t.updateOffset=function(e,n){var r,o=t.defaultZone;if(void 0===e._z&&(o&&M(e)&&!e._isUTC&&e.isValid()&&(e._d=t.utc(e._a)._d,e.utc().add(o.parse(e),"minutes")),e._z=o),e._z)if(r=e._z.utcOffset(e),Math.abs(r)<16&&(r/=60),void 0!==e.utcOffset){var i=e._z;e.utcOffset(-r,n),e._z=i}else e.zone(r,n)},I.tz=function(e,n){if(e){if("string"!==typeof e)throw new Error("Time zone name must be a string, got "+e+" ["+typeof e+"]");return this._z=O(e),this._z?t.updateOffset(this,n):A("Moment Timezone has no data for "+e+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},I.zoneName=Z(I.zoneName),I.zoneAbbr=Z(I.zoneAbbr),I.utc=P(I.utc),I.local=P(I.local),I.utcOffset=(C=I.utcOffset,function(){return arguments.length>0&&(this._z=null),C.apply(this,arguments)}),t.tz.setDefault=function(e){return(s<2||2===s&&c<9)&&A("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+t.version+"."),t.defaultZone=e?O(e):null,t};var E=t.momentProperties;return"[object Array]"===Object.prototype.toString.call(E)?(E.push("_z"),E.push("_a")):E&&(E._z=null),t}))},44775:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/stake/MultiUnstakeModal",function(){return n(17495)}])},95787:function(t,e,n){"use strict";var r=n(85893),o=n(45161),i=n(38658),u=n(21371);e.Z=function(t){var e=(0,o.If)().colorMode,n=t.label;return(0,r.jsx)(i.u,{display:0===(null===n||void 0===n?void 0:n.length)?"none":"flex",placement:"top",label:n,bg:"dark"===e?"#1f2128":"#fff",borderRadius:"3px",color:"light"===e?"#07070c":"#8b8b93",fontSize:"12px",border:"light"===e?"solid 1px #e8edf2":"solid 1px #313442",children:(0,r.jsx)(u.w,{display:0===(null===n||void 0===n?void 0:n.length)?"none":"",h:"16px",minW:"16px"})})}},88586:function(t,e){"use strict";e.Z={rebase:{epochLength:28800,beginEpochEnd:1668682800},LOCKTOS_maxWeeks:156,LOCKTOS_epochUnit:604800,modalMaxWeeks:155,rebasePerEpoch:8704505e-11,rebasePeriod:28800,mainnetGasPrice:"6849315",minBondGasPrice:"279458",errMsg:{balanceExceed:"Input has exceeded your balance",bondZeroInput:"Input has to be greater than 0",periodExceed:"Must be between 1 and 155",stakePeriodExceed:"Must be between 0 and 155",managePeriodExceed:"New lock-up period must be equal or greater than the existing lock-up period",zeroInput:"Input has to be equal to or greater than 0",periodExceedThanMaximum:"Must be less than 156 weeks"}}},46850:function(t,e,n){"use strict";var r=n(34051),o=n.n(r),i=n(5555),u=n(35553),a=n(83077),s=n(68462),c=n(67294);function l(t,e,n,r,o,i,u){try{var a=t[i](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){l(i,r,o,u,a,"next",t)}function a(t){l(i,r,o,u,a,"throw",t)}u(void 0)}))}}e.Z=function(){var t=(0,c.useState)(void 0),e=t[0],n=t[1],r=(0,c.useState)(void 0),l=r[0],d=r[1],p=(0,s.Z)().StakingV2Proxy_CONTRACT,h=(0,a.O)().blockNumber;return(0,c.useEffect)((function(){function t(){return(t=f(o().mark((function t(){var e,r,a,s,c,l,f,h,m;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!p){t.next=18;break}return t.next=3,p.possibleIndex();case 3:return e=t.sent,t.next=6,p.rebasePerEpoch();case 6:return r=t.sent,a=u.formatEther(r),s=u.formatUnits(e.toString(),18),c=s.split("."),l=c[0]+"."+c[1].slice(0,7),t.next=13,p.epoch();case 13:f=t.sent,h=f.end,m=(0,i.df)(h.toString(),"HH:mm:ss"),n({ltosIndex:l,ltosIndexBN:e,nextRebase:m}),d(Number(a));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().catch((function(t){console.log("**useStakeV2 err**"),console.log(t)}))}),[p,h]),{stakeV2:e,rebasePerEpoch:l}}},57683:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(34051),o=n.n(r),i=n(7963),u=n(10226),a=n(4480);var s=function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()};function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e,n,r,o,i,u){try{var a=t[i](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){l(i,r,o,u,a,"next",t)}function a(t){l(i,r,o,u,a,"throw",t)}u(void 0)}))}}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(s){a=!0,o=s}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(t){(0,i.p)();var e=d((0,a.FV)(u.Zb),2),n=(e[0],e[1]),r=d((0,a.FV)(u.t),2),c=(r[0],r[1]);function l(){return(l=f(o().mark((function e(r){var i,u,a,l,f,d,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n(!0),!(i=r)){e.next=15;break}return u=s(),c({id:u,message:null!==(a=null===t||void 0===t?void 0:t.submittedMessage)&&void 0!==a?a:"Tx is successfully submmited!",type:"success",link:null===t||void 0===t?void 0:t.submittedLink}),e.next=9,i.wait();case 9:if(!e.sent){e.next=15;break}return l=s(),c({id:l,message:null!==(f=null===t||void 0===t?void 0:t.confirmedMessage)&&void 0!==f?f:"Tx is successfully confirmed!",type:"confirmed",link:null===t||void 0===t?void 0:t.confirmedLink}),e.abrupt("return",n(!1));case 15:e.next=23;break;case 17:e.prev=17,e.t0=e.catch(0),n(!1),d=s(),c({id:d,message:null!==(p=null===t||void 0===t?void 0:t.errorMessage)&&void 0!==p?p:"Something went wrong",type:"error",link:null===t||void 0===t?void 0:t.errorLink});case 23:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}return{setTx:function(t){return l.apply(this,arguments)}}}},43382:function(t,e,n){"use strict";var r=n(34051),o=n.n(r),i=n(79042),u=n(77044),a=n(67294),s=n(28450),c=n(83077),l=n(68462);function f(t,e,n,r,o,i,u){try{var a=t[i](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){f(i,r,o,u,a,"next",t)}function a(t){f(i,r,o,u,a,"throw",t)}u(void 0)}))}}e.Z=function(){var t=(0,a.useState)({tosAllowance:void 0,stakeList:void 0,simpleStakingId:void 0}),e=t[0],n=t[1],r=(0,l.Z)().TOS_CONTRACT,f=(0,u.Ge)().account,p=s.Z.StakingV2Proxy,h=(0,c.O)().blockNumber,m=(0,l.Z)().StakingV2Proxy_CONTRACT;return(0,a.useEffect)((function(){function t(){return(t=d(o().mark((function t(){var e,u,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r&&f&&m)){t.next=9;break}return t.next=4,r.allowance(f,p);case 4:return u=t.sent,t.next=7,m.stakingOf(f);case 7:return a=t.sent,t.abrupt("return",n({tosAllowance:Number((0,i.WN)({amount:u.toString()})),stakeList:a,simpleStakingId:null===(e=a[1])||void 0===e?void 0:e.toString()}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){void 0!==t&&(console.log("**fetchUseUser err**"),console.log(t))}))}),[r,f,p,h,m]),e}},98253:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(93717);e.default=function(){return(0,r.jsx)(o.k,{w:"100%",h:"100%",className:"gradient"})}},50482:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(45161),i=n(18618),u=n(57747),a=n(93717),s=n(71293),c=n(95787),l=n(37243),f=n(98253);function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(s){a=!0,o=s}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=function(t){var e=t.title,n=t.content,d=t.symbol,h=t.tooltip,m=t.isWarning,v=(0,o.If)().colorMode,x=p((0,i.a)("(max-width: 1024px)"),1)[0],b=(0,l.Z)().isModalLoading;return(0,r.jsxs)(u.xu,{display:"flex",flexDir:"column",w:x?"155px":"152px",alignItems:"center",mb:"15px",children:[(0,r.jsxs)(a.k,{alignItems:"center",mb:"6px",children:[(0,r.jsx)(s.x,{color:"dark"===v?"gray.100":"gray.1000",h:"17px",fontWeight:600,fontSize:12,textAlign:"center",mr:"6px",children:e}),(0,r.jsx)(c.Z,{label:h})]}),(0,r.jsx)(a.k,{fontWeight:600,justifyContent:"center",h:x?"28px":"25px",children:b?(0,r.jsx)(a.k,{w:"100px",h:"30px",children:(0,r.jsx)(f.default,{})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.x,{color:m?"red.100":"dark"===v?"white.100":"gray.800",fontSize:18,mr:2,children:n||"-"}),(0,r.jsx)(s.x,{color:"dark"===v?"white.200":"gray.800",fontSize:12,lineHeight:"33px",children:d||""})]})})]})}},17495:function(t,e,n){"use strict";n.r(e);var r=n(34051),o=n.n(r),i=n(85893),u=n(45161),a=n(93717),s=n(71293),c=n(48940),l=n(18618),f=n(35541),d=n(19778),p=n(14581),h=n(54346),m=n(4480),v=n(54968),x=n(37243),b=n(25675),g=n.n(b),y=n(79822),w=n(60483),k=n(67294),S=n(50482),j=n(46850),z=n(29619),O=n(68462),_=n(79042),M=n(43382),A=n(57683),T=n(2593);function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function I(t,e,n,r,o,i,u){try{var a=t[i](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,o)}function Z(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){I(i,r,o,u,a,"next",t)}function a(t){I(i,r,o,u,a,"throw",t)}u(void 0)}))}}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(s){a=!0,o=s}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t){var e=(0,u.If)().colorMode,n=t.title,r=t.content;return(0,i.jsx)(a.k,{children:(0,i.jsxs)(a.k,{w:"100%",justifyContent:"space-between",fontSize:14,children:[(0,i.jsx)(s.x,{color:"dark"===e?"gray.100":"gray.1000",children:n}),(0,i.jsx)(s.x,{color:"dark"===e?"white.200":"gray.800",fontWeight:600,children:r})]})})}e.default=function(){var t=(0,m.sJ)(v.ZC),e=((0,c.F)(),(0,u.If)().colorMode),n=(0,x.Z)(),r=n.closeModal,b=n.selectedModalData,C=(0,j.Z)().stakeV2,I=((0,z.Z)().userLTOSBalance,(0,O.Z)().StakingV2Proxy_CONTRACT),N=((0,M.Z)().simpleStakingId,(0,A.Z)().setTx),D=(0,k.useState)("-"),L=D[0],U=D[1],W=(0,k.useState)("-"),V=W[0],F=W[1],R=P((0,l.a)("(max-width: 1024px)"),1)[0],G=[{title:"You Give",content:"".concat(L," LTOS")},{title:"You Will Get",content:"".concat(V," TOS")}],Y=(0,k.useCallback)((function(){r()}),[r]),B=(0,k.useCallback)(Z(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!b){t.next=11;break}if(e=null===b||void 0===b?void 0:b.map((function(t){if(t)return t.stakedId})),!I){t.next=11;break}if(console.log("--unstake(uint256 _stakeId)--"),console.log(e),!e){t.next=11;break}return t.next=8,I.multiUnstake(e);case 8:return n=t.sent,N(n),t.abrupt("return",Y());case 11:case"end":return t.stop()}}),t)}))),[I,Y,N,b]);return(0,k.useEffect)((function(){function t(){return t=Z(o().mark((function t(){var e,n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=null===b||void 0===b?void 0:b.map((function(t){if(t)return t.stakedId})),!I||!e){t.next=8;break}return t.next=4,Promise.all(null===e||void 0===e?void 0:e.map(function(){var t=Z(o().mark((function t(e){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=8;break}return t.next=3,I.remainedLtos(e);case 3:return n=t.sent,t.next=6,I.getLtosToTosPossibleIndex(n);case 6:return r=t.sent,t.abrupt("return",{ltosAmount:n,tosAmount:r});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:n=t.sent,r=n.reduce((function(t,e){return{ltosAmount:T.O$.from((null===t||void 0===t?void 0:t.ltosAmount)||"0").add(null===e||void 0===e?void 0:e.ltosAmount),tosAmount:T.O$.from((null===t||void 0===t?void 0:t.tosAmount)||"0").add(null===e||void 0===e?void 0:e.tosAmount)}}),void 0),U((0,_.WN)({amount:null===r||void 0===r?void 0:r.ltosAmount,localeString:!0})||"-"),F((0,_.WN)({amount:null===r||void 0===r?void 0:r.tosAmount,localeString:!0})||"-");case 8:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}(function(){return t.apply(this,arguments)})().catch((function(t){}))}),[I,b]),(0,i.jsxs)(f.u_,{isOpen:"stake_multiUnstake_modal"===t,isCentered:!0,onClose:Y,children:[(0,i.jsx)(d.Z,{className:"modalOverlayDrawer",bg:"none"}),(0,i.jsx)(p.h,{bg:"light"===e?"white.100":"#121318",minW:R?"350px":"43.75em",children:(0,i.jsx)(h.f,{px:0,pt:"30px",pb:"40px",children:(0,i.jsxs)(a.k,{w:"100%",flexDir:"column",children:[(0,i.jsx)(a.k,{flexDir:"column",pos:"relative",children:(0,i.jsxs)(a.k,{w:"100%",justifyContent:"center",mb:"33px",children:[(0,i.jsx)(s.x,{color:"light"===e?"gray.800":"white.200",fontSize:20,fontWeight:600,children:"Unstake"}),(0,i.jsx)(a.k,{pos:"absolute",right:"1.56em",cursor:"pointer",onClick:function(){return Y()},children:(0,i.jsx)(g(),{src:y.default,alt:"CLOSE_ICON"})})]})}),(0,i.jsxs)(a.k,{w:"100%",flexDir:"column",mb:"30px",children:[(0,i.jsx)(a.k,{w:"100%",flexDir:"column",px:R?"20px":"120px",children:(0,i.jsxs)(a.k,{w:"100%",justifyContent:R?"center":"space-between",mb:R?"15px":"9px",flexDir:R?"column":"row",children:[R?(0,i.jsx)(a.k,{mb:"9px",justifyContent:"center",w:"100%",children:(0,i.jsx)(S.default,{title:"Next Rebase",content:null===C||void 0===C?void 0:C.nextRebase,tooltip:"Time left until LTOS index is increased."})}):(0,i.jsx)(S.default,{title:"Next Rebase",content:null===C||void 0===C?void 0:C.nextRebase,tooltip:"Time left until LTOS index is increased."}),(0,i.jsx)(S.default,{title:"LTOS Index",content:null===C||void 0===C?void 0:C.ltosIndex,symbol:"TOS",tooltip:"Number of TOS you get when you unstake 1 LTOS. LTOS index increases every 8 hours."})]})}),(0,i.jsx)(a.k,{flexDir:"column",rowGap:"9px",px:R?"20px":"50px",children:G.map((function(t,e){return(0,i.jsx)(E,{title:t.title,content:t.content},t.title+e)}))})]}),(0,i.jsx)(a.k,{flexDir:"column",alignItems:"center",rowGap:"15px",children:(0,i.jsx)(w.Z,{w:R?310:460,h:42,name:"Unstake",onClick:B})})]})})})]})}},5555:function(t,e,n){"use strict";n.d(e,{V4:function(){return h},Ze:function(){return p},ab:function(){return f},df:function(){return s},g9:function(){return d},kv:function(){return c},vI:function(){return l}});var r=n(88586),o=n(30381),i=n.n(o),u=n(80008),a=n.n(u);function s(t,e){return i().unix(t).format(e||"YYYY.MM.D")}function c(){return i()().unix()}function l(t){return t-c()<0}function f(t,e,n,r){return i().unix(t).add(e,"d").format(n||"MM.DD HH:mm:ss")}function d(t,e){var n=3600,r=86400,o=Math.floor(t/r),i=Math.floor((t-r*o)/n),u=Math.floor((t-r*o-n*i)/60);return{days:o,hours:i,mins:u,secs:t-r*o-n*i-60*u}}function p(){var t=a().tz(a().tz.guess()).format("Z").toString().split(":")[0].replaceAll("0","");return"UTC".concat(t)}function h(t){var e=t.currentEndTimeStamp,n=r.Z.LOCKTOS_epochUnit,o=e-c(),i=o/n,u=(o-604800*Math.floor(i))/86400,a=o-604800*Math.floor(i)-86400*Math.floor(u),s=d(a).hours,l=d(a).mins,f=1===s.toString().length?"0".concat(s):"".concat(s),p=1===l.toString().length?"0".concat(l):"".concat(l);return{leftWeeks:Math.floor(i).toString(),leftDays:String(Math.floor(u)),leftHourAndMin:"".concat(f,":").concat(p)}}},24027:function(t,e,n){"use strict";n.d(e,{I:function(){return a}});var r=n(36948),o=n(16554),i=n(67294),u=n(85893);function a(t){const{viewBox:e="0 0 24 24",d:n,displayName:a,defaultProps:s={}}=t,c=i.Children.toArray(t.path),l=(0,o.G)(((t,o)=>(0,u.jsx)(r.J,{ref:o,viewBox:e,...s,...t,children:c.length?c:(0,u.jsx)("path",{fill:"currentColor",d:n})})));return l.displayName=a,l}},21371:function(t,e,n){"use strict";n.d(e,{w:function(){return i}});var r=n(24027),o=n(85893),i=(0,r.I)({displayName:"QuestionOutlineIcon",path:(0,o.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,o.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,o.jsx)("path",{fill:"none",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,o.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]})})}},function(t){t.O(0,[4885,2678,8658,9774,2888,179],(function(){return e=44775,t(t.s=e);var e}));var e=t.O();_N_E=e}]);