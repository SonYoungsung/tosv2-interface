(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6053],{80008:function(t,e,n){(t.exports=n(85177)).tz.load(n(91128))},85177:function(t,e,n){var r,o,i;!function(a,s){"use strict";t.exports?t.exports=s(n(30381)):(o=[n(30381)],void 0===(i="function"===typeof(r=s)?r.apply(e,o):r)||(t.exports=i))}(0,(function(t){"use strict";void 0===t.version&&t.default&&(t=t.default);var e,n={},r={},o={},i={},a={};t&&"string"===typeof t.version||M("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var s=t.version.split("."),c=+s[0],l=+s[1];function u(t){return t>96?t-87:t>64?t-29:t-48}function f(t){var e=0,n=t.split("."),r=n[0],o=n[1]||"",i=1,a=0,s=1;for(45===t.charCodeAt(0)&&(e=1,s=-1);e<r.length;e++)a=60*a+u(r.charCodeAt(e));for(e=0;e<o.length;e++)i/=60,a+=u(o.charCodeAt(e))*i;return a*s}function p(t){for(var e=0;e<t.length;e++)t[e]=f(t[e])}function d(t,e){var n,r=[];for(n=0;n<e.length;n++)r[n]=t[e[n]];return r}function h(t){var e=t.split("|"),n=e[2].split(" "),r=e[3].split(""),o=e[4].split(" ");return p(n),p(r),p(o),function(t,e){for(var n=0;n<e;n++)t[n]=Math.round((t[n-1]||0)+6e4*t[n]);t[e-1]=1/0}(o,r.length),{name:e[0],abbrs:d(e[1].split(" "),r),offsets:d(n,r),untils:o,population:0|e[5]}}function x(t){t&&this._set(h(t))}function m(t,e){this.name=t,this.zones=e}function g(t){var e=t.toTimeString(),n=e.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=e.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+t,this.abbr=n,this.offset=t.getTimezoneOffset()}function b(t){this.zone=t,this.offsetScore=0,this.abbrScore=0}function v(t,e){for(var n,r;r=6e4*((e.at-t.at)/12e4|0);)(n=new g(new Date(t.at+r))).offset===t.offset?t=n:e=n;return t}function y(t,e){return t.offsetScore!==e.offsetScore?t.offsetScore-e.offsetScore:t.abbrScore!==e.abbrScore?t.abbrScore-e.abbrScore:t.zone.population!==e.zone.population?e.zone.population-t.zone.population:e.zone.name.localeCompare(t.zone.name)}function S(t,e){var n,r;for(p(e),n=0;n<e.length;n++)r=e[n],a[r]=a[r]||{},a[r][t]=!0}function j(t){var e,n,r,o,s=t.length,c={},l=[],u={};for(e=0;e<s;e++)if(r=t[e].offset,!u.hasOwnProperty(r)){for(n in o=a[r]||{})o.hasOwnProperty(n)&&(c[n]=!0);u[r]=!0}for(e in c)c.hasOwnProperty(e)&&l.push(i[e]);return l}function w(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;if(t&&t.length>3){var e=i[z(t)];if(e)return e;M("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")}}catch(u){}var n,r,o,a=function(){var t,e,n,r,o=(new Date).getFullYear()-2,i=new g(new Date(o,0,1)),a=i.offset,s=[i];for(r=1;r<48;r++)(n=new Date(o,r,1).getTimezoneOffset())!==a&&(t=v(i,e=new g(new Date(o,r,1))),s.push(t),s.push(new g(new Date(t.at+6e4))),i=e,a=n);for(r=0;r<4;r++)s.push(new g(new Date(o+r,0,1))),s.push(new g(new Date(o+r,6,1)));return s}(),s=a.length,c=j(a),l=[];for(r=0;r<c.length;r++){for(n=new b(k(c[r]),s),o=0;o<s;o++)n.scoreOffsetAt(a[o]);l.push(n)}return l.sort(y),l.length>0?l[0].zone.name:void 0}function z(t){return(t||"").toLowerCase().replace(/\//g,"_")}function O(t){var e,r,o,a;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)a=z(r=(o=t[e].split("|"))[0]),n[a]=t[e],i[a]=r,S(a,o[2].split(" "))}function k(t,e){t=z(t);var o,a=n[t];return a instanceof x?a:"string"===typeof a?(a=new x(a),n[t]=a,a):r[t]&&e!==k&&(o=k(r[t],k))?((a=n[t]=new x)._set(o),a.name=i[t],a):null}function _(t){var e,n,o,a;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)o=z((n=t[e].split("|"))[0]),a=z(n[1]),r[o]=a,i[o]=n[0],r[a]=o,i[a]=n[1]}function T(t){var e="X"===t._f||"x"===t._f;return!(!t._a||void 0!==t._tzm||e)}function M(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(t)}function A(e){var n,r=Array.prototype.slice.call(arguments,0,-1),o=arguments[arguments.length-1],i=t.utc.apply(null,r);return!t.isMoment(e)&&T(i)&&(n=k(o))&&i.add(n.parse(i),"minutes"),i.tz(o),i}(c<2||2===c&&l<6)&&M("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+t.version+". See momentjs.com"),x.prototype={_set:function(t){this.name=t.name,this.abbrs=t.abbrs,this.untils=t.untils,this.offsets=t.offsets,this.population=t.population},_index:function(t){var e;if((e=function(t,e){var n,r=e.length;if(t<e[0])return 0;if(r>1&&e[r-1]===1/0&&t>=e[r-2])return r-1;if(t>=e[r-1])return-1;for(var o=0,i=r-1;i-o>1;)e[n=Math.floor((o+i)/2)]<=t?o=n:i=n;return i}(+t,this.untils))>=0)return e},countries:function(){var t=this.name;return Object.keys(o).filter((function(e){return-1!==o[e].zones.indexOf(t)}))},parse:function(t){var e,n,r,o,i=+t,a=this.offsets,s=this.untils,c=s.length-1;for(o=0;o<c;o++)if(e=a[o],n=a[o+1],r=a[o?o-1:o],e<n&&A.moveAmbiguousForward?e=n:e>r&&A.moveInvalidForward&&(e=r),i<s[o]-6e4*e)return a[o];return a[c]},abbr:function(t){return this.abbrs[this._index(t)]},offset:function(t){return M("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(t)]},utcOffset:function(t){return this.offsets[this._index(t)]}},b.prototype.scoreOffsetAt=function(t){this.offsetScore+=Math.abs(this.zone.utcOffset(t.at)-t.offset),this.zone.abbr(t.at).replace(/[^A-Z]/g,"")!==t.abbr&&this.abbrScore++},A.version="0.5.45",A.dataVersion="",A._zones=n,A._links=r,A._names=i,A._countries=o,A.add=O,A.link=_,A.load=function(t){O(t.zones),_(t.links),function(t){var e,n,r,i;if(t&&t.length)for(e=0;e<t.length;e++)n=(i=t[e].split("|"))[0].toUpperCase(),r=i[1].split(" "),o[n]=new m(n,r)}(t.countries),A.dataVersion=t.version},A.zone=k,A.zoneExists=function t(e){return t.didShowError||(t.didShowError=!0,M("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!k(e)},A.guess=function(t){return e&&!t||(e=w()),e},A.names=function(){var t,e=[];for(t in i)i.hasOwnProperty(t)&&(n[t]||n[r[t]])&&i[t]&&e.push(i[t]);return e.sort()},A.Zone=x,A.unpack=h,A.unpackBase60=f,A.needsOffset=T,A.moveInvalidForward=!0,A.moveAmbiguousForward=!1,A.countries=function(){return Object.keys(o)},A.zonesForCountry=function(t,e){var n;if(n=(n=t).toUpperCase(),!(t=o[n]||null))return null;var r=t.zones.sort();return e?r.map((function(t){return{name:t,offset:k(t).utcOffset(new Date)}})):r};var C,D=t.fn;function I(t){return function(){return this._z?this._z.abbr(this):t.call(this)}}function E(t){return function(){return this._z=null,t.apply(this,arguments)}}t.tz=A,t.defaultZone=null,t.updateOffset=function(e,n){var r,o=t.defaultZone;if(void 0===e._z&&(o&&T(e)&&!e._isUTC&&e.isValid()&&(e._d=t.utc(e._a)._d,e.utc().add(o.parse(e),"minutes")),e._z=o),e._z)if(r=e._z.utcOffset(e),Math.abs(r)<16&&(r/=60),void 0!==e.utcOffset){var i=e._z;e.utcOffset(-r,n),e._z=i}else e.zone(r,n)},D.tz=function(e,n){if(e){if("string"!==typeof e)throw new Error("Time zone name must be a string, got "+e+" ["+typeof e+"]");return this._z=k(e),this._z?t.updateOffset(this,n):M("Moment Timezone has no data for "+e+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},D.zoneName=I(D.zoneName),D.zoneAbbr=I(D.zoneAbbr),D.utc=E(D.utc),D.local=E(D.local),D.utcOffset=(C=D.utcOffset,function(){return arguments.length>0&&(this._z=null),C.apply(this,arguments)}),t.tz.setDefault=function(e){return(c<2||2===c&&l<9)&&M("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+t.version+"."),t.defaultZone=e?k(e):null,t};var W=t.momentProperties;return"[object Array]"===Object.prototype.toString.call(W)?(W.push("_z"),W.push("_a")):W&&(W._z=null),t}))},43595:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dao",function(){return n(95365)}])},88586:function(t,e){"use strict";e.Z={rebase:{epochLength:28800,beginEpochEnd:1668682800},LOCKTOS_maxWeeks:156,LOCKTOS_epochUnit:604800,modalMaxWeeks:155,rebasePerEpoch:8704505e-11,rebasePeriod:28800,mainnetGasPrice:"6849315",minBondGasPrice:"279458",errMsg:{balanceExceed:"Input has exceeded your balance",bondZeroInput:"Input has to be greater than 0",periodExceed:"Must be between 1 and 155",stakePeriodExceed:"Must be between 0 and 155",managePeriodExceed:"New lock-up period must be equal or greater than the existing lock-up period",zeroInput:"Input has to be equal to or greater than 0",periodExceedThanMaximum:"Must be less than 156 weeks"}}},27224:function(t,e,n){"use strict";var r=n(11163),o=n(67294);e.Z=function(){var t=(0,o.useState)(void 0),e=t[0],n=t[1],i=(0,r.useRouter)().pathname;return(0,o.useEffect)((function(){var t=i.replaceAll("/",""),e="dao"!==t?t.charAt(0).toUpperCase()+t.slice(1):"DAO";return n(e)}),[i]),{pathName:e}}},45379:function(t,e,n){"use strict";var r=n(88586),o=n(67294),i=n(5555);e.Z=function(t){var e=(0,o.useState)("-"),n=e[0],a=e[1],s=r.Z.rebase,c=s.epochLength,l=s.beginEpochEnd;return(0,o.useEffect)((function(){setInterval((function(){var e=(0,i.kv)(),n=c-(e-l)%c,r=(0,i.g9)(e-l>0?n:l-e,"HH:mm:ss"),o=r.hours,s=r.mins,u=r.secs,f=1===o.toString().length?"0".concat(r.hours):"".concat(r.hours),p=1===s.toString().length?"0".concat(r.mins):"".concat(r.mins),d=1===u.toString().length?"0".concat(r.secs):"".concat(r.secs);return(0,i.Ze)(),a(t?"".concat(f).concat(t).concat(p).concat(t).concat(d):"".concat(f,".").concat(p,".").concat(d))}),1e3)}),[]),n}},50241:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(45161),i=n(48940),a=n(18618),s=n(93717),c=n(71293),l=n(32883),u=n(14225),f=n(11163),p=n(60483),d=n(25675),h=n.n(d),x=n(42628),m=n(37243),g=n(27520);function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){v(t,e,n[e])}))}return t}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=function(){var t=(0,o.If)().colorMode,e=(0,f.useRouter)(),n=(0,i.F)(),d=S((0,a.a)("(max-width: 1024px)"),1)[0],b=(0,g.Z)().bp500px,v=(0,m.Z)("stake_stake_modal").openModal;return(0,r.jsxs)(s.k,{w:"100%",mb:d?"30px":"60px",flexDir:"column",justifyContent:"center",alignItems:"center",px:b?0:"46px",children:[(0,r.jsx)(c.x,{fontSize:"22px",color:"light"===t?"gray.800":"white.200",letterSpacing:"0.55px",fontWeight:"bold",mb:"12px",children:"Stake"}),(0,r.jsx)(c.x,{color:"dark"===t?"gray.100":"gray.1000",textAlign:"center",fontSize:"14px",lineHeight:1.71,letterSpacing:"0.35px",fontWeight:"normal",children:"Stake TOS to get LTOS & sTOS."}),(0,r.jsx)(c.x,{color:"dark"===t?"gray.100":"gray.1000",textAlign:"center",fontSize:"14px",mb:d?"30px":"40px",lineHeight:1.71,letterSpacing:"0.35px",fontWeight:"normal",children:"LTOS is an indexed token that increases your TOS holding and sTOS token is required to obtain the rights for decision making or sharing additional profits made from the TONStarter platform."}),(0,r.jsx)(p.Z,{name:"Go to Stake",w:"200px",h:"40px",style:{fontSize:"14px"},onClick:function(){e.push("/stake"),v()}}),(0,r.jsx)(c.x,{fontSize:"22px",color:"light"===t?"gray.800":"white.200",letterSpacing:"0.55px",fontWeight:"bold",mt:d?"45px":"60px",children:"Governance"}),(0,r.jsx)(c.x,{mt:"12px",mb:"30px",color:"dark"===t?"gray.100":"gray.1000",children:"Go vote and be an owner of TONStarter"}),(0,r.jsx)(l.r,{_hover:{textDecoration:"none"},style:{textDecoration:"none"},isExternal:!0,href:"https://snapshot.org/#/tonstarter.eth",children:(0,r.jsxs)(u.z,y({w:"200px",h:"40px",_hover:{textDecoration:"none"},_focus:{backgroundColor:"#257eee"}},n.BUTTON_STYLE.submitButtonStyle(t),{fontSize:"14px",children:[(0,r.jsx)(c.x,{mr:"23px",children:"Go to Governance"}),(0,r.jsx)(h(),{src:x.default,alt:"ResourcesIcon"})]}))})]})}},67812:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var r=n(85893),o=n(45161),i=n(93717),a=n(71293),s=n(79078),c=n(68519),l=n(18618),u=n(34051),f=n.n(u),p=n(79042),d=n(83077),h=n(68462),x=n(67294);function m(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,o)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){m(i,r,o,a,s,"next",t)}function s(t){m(i,r,o,a,s,"throw",t)}a(void 0)}))}}var b=function(){var t=(0,x.useState)("-"),e=t[0],n=t[1],r=(0,x.useState)("-"),o=r[0],i=r[1],a=(0,x.useState)("-"),s=a[0],c=a[1],l=(0,d.O)().blockNumber,u=(0,h.Z)(),m=u.StakingV2Proxy_CONTRACT,b=u.LockTOS_CONTRACT;return(0,x.useEffect)((function(){function t(){return(t=g(f().mark((function t(){var e,r,o,a,s,l;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!m){t.next=6;break}return t.next=3,m.stakingPrincipal();case 3:e=t.sent,r=(0,p.WN)({amount:e,round:!1,localeString:!0}),n(null!==r&&void 0!==r?r:"-");case 6:if(!m){t.next=12;break}return t.next=9,m.totalLtos();case 9:o=t.sent,a=(0,p.WN)({amount:o,round:!1,localeString:!0}),i(null!==a&&void 0!==a?a:"-");case 12:if(!b){t.next=18;break}return t.next=15,b.totalSupply();case 15:s=t.sent,l=(0,p.WN)({amount:s,round:!1,localeString:!0}),c(null!==l&&void 0!==l?l:"-");case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().catch((function(t){console.log("**useCallStatics Err**"),console.log(t)}))}),[l,m,b]),{totalTos:e,totalLTos:o,totalSTos:s}};function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t){var e=(0,o.If)().colorMode,n=t.title,l=t.data;return(0,r.jsxs)(i.k,{justifyContent:"center",alignItems:"center",w:"100%",flexDir:"column",children:[(0,r.jsx)(a.x,{fontSize:"22px",fontWeight:"bold",letterSpacing:"0.55px",color:"dark"===e?"white.200":"gray.800",mb:"24px",children:n}),(0,r.jsx)(s.r,{templateColumns:"repeat(3, 1fr)",w:"100%",children:l.map((function(t,n){return(0,r.jsxs)(c.P,{display:"flex",flexDir:"column",justifyContent:"center",alignItems:"center",mb:"70px",children:[(0,r.jsx)(a.x,{fontSize:"14px",fontWeight:600,letterSpacing:"0.14px",color:"blue.200",mb:"6px",children:t.title}),(0,r.jsxs)(a.x,{fontSize:"21px",fontWeight:600,letterSpacing:"normal",color:"dark"===e?"white.200":"gray.800",children:[t.value," ",(0,r.jsx)("span",{style:{fontSize:"14px"},children:t.symbol})]})]},n)}))})]})}function j(t){var e=(0,o.If)().colorMode,n=t.title,l=t.data;return(0,r.jsxs)(i.k,{justifyContent:"center",alignItems:"center",w:"100%",flexDir:"column",children:[(0,r.jsx)(a.x,{fontSize:"22px",fontWeight:"bold",letterSpacing:"0.55px",color:"dark"===e?"white.200":"gray.800",mb:"24px",children:n}),(0,r.jsx)(s.r,{templateColumns:"repeat(3, 1fr)",w:"100%",children:l.map((function(t,n){return(0,r.jsxs)(c.P,{display:"flex",flexDir:"column",justifyContent:"center",alignItems:"center",mb:"40px",children:[(0,r.jsx)(a.x,{fontSize:"14px",fontWeight:600,letterSpacing:"0.14px",color:"blue.200",mb:"6px",children:t.title}),(0,r.jsx)(a.x,{w:"204px",fontSize:"14px",fontWeight:"normal",letterSpacing:"0.35px",color:"dark"===e?"gray.100":"gray.1000",textAlign:"center",children:t.value})]},n)}))})]})}function w(t){var e=(0,o.If)().colorMode,n=t.title,s=t.data;return(0,r.jsxs)(i.k,{w:"100%",minWidth:"336px",maxWidth:"556px",h:"334px",bgColor:"dark"===e?"gray.600":"white.100",borderRadius:14,borderWidth:1,flexDir:"column",alignItems:"center",py:"30px",borderColor:"dark"===e?"gray.300":"gray.900",children:[(0,r.jsx)(a.x,{fontSize:"22px",fontWeight:"bold",letterSpacing:"0.55px",color:"dark"===e?"white.200":"gray.800",mb:"24px",children:n}),s.map((function(t,n){return(0,r.jsxs)(i.k,{flexDir:"column",alignItems:"center",children:[(0,r.jsx)(a.x,{fontSize:"14px",fontWeight:600,letterSpacing:"0.14px",color:"blue.200",mb:"6px",children:t.title}),(0,r.jsxs)(a.x,{fontSize:"21px",fontWeight:600,mb:"24px",letterSpacing:"normal",color:"dark"===e?"white.200":"gray.800",children:[t.value," ",(0,r.jsx)("span",{style:{fontSize:"14px"},children:t.symbol})]})]},n)}))]})}function z(t){var e=(0,o.If)().colorMode,n=t.title,s=t.data;return(0,r.jsxs)(i.k,{w:"100%",minWidth:"336px",maxWidth:"556px",h:"370px",bgColor:"dark"===e?"gray.600":"white.100",borderRadius:14,borderWidth:1,flexDir:"column",alignItems:"center",py:"30px",borderColor:"dark"===e?"gray.300":"gray.900",children:[(0,r.jsx)(a.x,{fontSize:"22px",fontWeight:"bold",letterSpacing:"0.55px",color:"dark"===e?"white.200":"gray.800",mb:"24px",children:n}),s.map((function(t,n){return(0,r.jsxs)(i.k,{flexDir:"column",alignItems:"center",children:[(0,r.jsx)(a.x,{fontSize:"14px",fontWeight:600,letterSpacing:"0.14px",color:"blue.200",mb:"6px",children:t.title}),(0,r.jsx)(a.x,{w:"204px",fontSize:"14px",fontWeight:"normal",letterSpacing:"0.35px",mb:"24px",color:"dark"===e?"gray.100":"gray.1000",textAlign:"center",children:t.value})]},n)}))]})}var O=function(){var t=(0,o.If)().colorMode,e=y((0,l.a)("(max-width: 1024px)"),1)[0],n=b(),a=[{title:"Total TOS locked",value:n.totalTos,symbol:"TOS"},{title:"Total LTOS",value:n.totalLTos,symbol:"LTOS"},{title:"Total sTOS",value:n.totalSTos,symbol:"sTOS"}],s=[{title:"Get Dividends",value:"You can get dividends from Starter project"},{title:"Join Governance",value:"You can decide listings of projects for TONStarter"},{title:"Access Exclusive Sales",value:"You can join exclusive token sales in TONStarter"}];return(0,r.jsx)(i.k,{children:e?(0,r.jsxs)(i.k,{flexDir:"column",w:"100%",alignItems:"center",rowGap:"18px",children:[(0,r.jsx)(w,{title:"DAO statistics",data:a}),(0,r.jsx)(z,{title:"sTOS Utility",data:s})]}):(0,r.jsxs)(i.k,{w:"100%",bgColor:"dark"===t?"gray.600":"white.100",borderColor:"dark"===t?"gray.300":"gray.900",borderRadius:14,borderWidth:1,pt:"40px",flexDir:"column",children:[(0,r.jsx)(S,{title:"DAO statistics",data:a}),(0,r.jsx)(j,{title:"sTOS Utility",data:s})]})})}},14494:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(93717),i=n(43792);e.default=function(){return(0,r.jsx)(o.k,{children:(0,r.jsx)(i.default,{})})}},43792:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(45161),i=n(93717),a=n(71293),s=n(27224),c=n(20271),l=n(1885),u=n(43379),f=n(16658),p=n(25675),d=n.n(p),h=n(67294),x=n(5555),m=n(45379),g=n(83077),b=n(27520),v=function(){var t=(0,o.If)().colorMode,e=(0,h.useState)("-"),n=e[0],s=e[1],c=(0,g.O)().blockNumber;return(0,h.useEffect)((function(){var t=(0,x.df)((0,x.kv)(),"YYYY.MM.DD HH:mm");s(t)}),[c]),(0,r.jsxs)(i.k,{children:[(0,r.jsx)(d(),{src:"dark"===t?u.default:f.default,alt:"CALENDAR_ICON"}),(0,r.jsxs)(a.x,{color:"light"===t?"#7e7e8f":"#8b8b93",ml:"7px",children:["Updated on ",n," (",(0,x.Ze)(),")"]})]})},y=function(){(0,s.Z)().pathName;var t=(0,m.Z)(":"),e=(0,b.Z)().bp500px;return(0,r.jsxs)(i.k,{fontSize:12,alignItems:"center",mt:e?"30px":"",mb:e?"12px":"",children:[(0,r.jsx)(a.x,{mr:"5px",color:"#2775ff",children:t}),(0,r.jsx)(a.x,{color:"#9a9aaf",children:"to next rebase"})]})};e.default=function(){var t=(0,s.Z)().pathName,e=(0,o.If)().colorMode,n=(0,b.Z)().bp500px,u=(0,h.useMemo)((function(){switch(t){case"Bond":return(0,r.jsxs)(i.k,{flexDir:n?"column":"row",fontSize:12,w:"100%",justifyContent:"space-between",h:n?"66px":"",children:[(0,r.jsxs)(i.k,{children:[(0,r.jsx)(d(),{src:"light"===e?l.default:c.default,alt:"HOME_ICON"}),(0,r.jsx)(a.x,{ml:"3px",children:"Home"}),(0,r.jsx)(a.x,{mx:"7px",children:">"}),(0,r.jsx)(a.x,{children:"Bond"}),(0,r.jsx)(a.x,{mx:"7px",children:">"}),(0,r.jsx)(a.x,{color:"blue.200",children:"Bond List"})]}),n?(0,r.jsx)(y,{}):null,(0,r.jsx)(v,{})]});case"DAO":return null;case"Intro":return(0,r.jsxs)(i.k,{flexDir:n?"column":"row",fontSize:12,w:"100%",justifyContent:"space-between",h:n?"66px":"",children:[(0,r.jsx)(i.k,{}),(0,r.jsx)(v,{})]});default:return(0,r.jsxs)(i.k,{flexDir:n?"column":"row",fontSize:12,w:"100%",justifyContent:"space-between",h:n?"66px":"",children:[(0,r.jsxs)(i.k,{children:[(0,r.jsx)(d(),{src:c.default,alt:"HOME_ICON"}),(0,r.jsx)(a.x,{ml:"3px",children:"Home"}),(0,r.jsx)(a.x,{mx:"7px",children:">"}),(0,r.jsx)(a.x,{color:"blue.200",children:t})]}),n?(0,r.jsx)(y,{}):null,(0,r.jsx)(v,{})]})}}),[t,e,n]);return(0,r.jsxs)(i.k,{flexDir:"column",mb:n?"42px":"36px",w:"100%",children:[(0,r.jsxs)(i.k,{justifyContent:"space-between",children:[(0,r.jsx)(a.x,{fontSize:28,h:"39px",fontWeight:"bold",mb:"12px",color:"light"===e?"#07070c":"#ffffff",children:t}),!1===n&&"DAO"!==t&&(0,r.jsx)(y,{})]}),u]})}},95365:function(t,e,n){"use strict";n.r(e);var r=n(85893),o=n(48940),i=n(45161),a=n(93717),s=n(14494),c=n(50241),l=n(67812),u=n(54790),f=n(27520);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(){var t=(0,o.F)(),e=(0,i.If)().colorMode,n=(0,f.Z)().bp500px;return(0,r.jsxs)(a.k,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){p(t,e,n[e])}))}return t}({},t.PAGE_LAYOUT_STYLE.layoutTheme(e),{bg:"light"===e?"#fafbfc":"black.100",mt:n?"42px":"66px",children:[(0,r.jsx)(s.default,{}),(0,r.jsx)(c.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]}))}},5555:function(t,e,n){"use strict";n.d(e,{V4:function(){return h},Ze:function(){return d},ab:function(){return f},df:function(){return c},g9:function(){return p},kv:function(){return l},vI:function(){return u}});var r=n(88586),o=n(30381),i=n.n(o),a=n(80008),s=n.n(a);function c(t,e){return i().unix(t).format(e||"YYYY.MM.D")}function l(){return i()().unix()}function u(t){return t-l()<0}function f(t,e,n,r){return i().unix(t).add(e,"d").format(n||"MM.DD HH:mm:ss")}function p(t,e){var n=3600,r=86400,o=Math.floor(t/r),i=Math.floor((t-r*o)/n),a=Math.floor((t-r*o-n*i)/60);return{days:o,hours:i,mins:a,secs:t-r*o-n*i-60*a}}function d(){var t=s().tz(s().tz.guess()).format("Z").toString().split(":")[0].replaceAll("0","");return"UTC".concat(t)}function h(t){var e=t.currentEndTimeStamp,n=r.Z.LOCKTOS_epochUnit,o=e-l(),i=o/n,a=(o-604800*Math.floor(i))/86400,s=o-604800*Math.floor(i)-86400*Math.floor(a),c=p(s).hours,u=p(s).mins,f=1===c.toString().length?"0".concat(c):"".concat(c),d=1===u.toString().length?"0".concat(u):"".concat(u);return{leftWeeks:Math.floor(i).toString(),leftDays:String(Math.floor(a)),leftHourAndMin:"".concat(f,":").concat(d)}}}},function(t){t.O(0,[4885,2678,8658,8555,184,4790,9774,2888,179],(function(){return e=43595,t(t.s=e);var e}));var e=t.O();_N_E=e}]);