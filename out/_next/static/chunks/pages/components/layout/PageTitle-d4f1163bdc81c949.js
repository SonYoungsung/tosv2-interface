(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3501],{80008:function(e,t,n){(e.exports=n(85177)).tz.load(n(91128))},85177:function(e,t,n){var o,r,s;!function(i,a){"use strict";e.exports?e.exports=a(n(30381)):(r=[n(30381)],void 0===(s="function"===typeof(o=a)?o.apply(t,r):o)||(e.exports=s))}(0,(function(e){"use strict";void 0===e.version&&e.default&&(e=e.default);var t,n={},o={},r={},s={},i={};e&&"string"===typeof e.version||E("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var a=e.version.split("."),u=+a[0],f=+a[1];function c(e){return e>96?e-87:e>64?e-29:e-48}function l(e){var t=0,n=e.split("."),o=n[0],r=n[1]||"",s=1,i=0,a=1;for(45===e.charCodeAt(0)&&(t=1,a=-1);t<o.length;t++)i=60*i+c(o.charCodeAt(t));for(t=0;t<r.length;t++)s/=60,i+=c(r.charCodeAt(t))*s;return i*a}function h(e){for(var t=0;t<e.length;t++)e[t]=l(e[t])}function p(e,t){var n,o=[];for(n=0;n<t.length;n++)o[n]=e[t[n]];return o}function d(e){var t=e.split("|"),n=t[2].split(" "),o=t[3].split(""),r=t[4].split(" ");return h(n),h(o),h(r),function(e,t){for(var n=0;n<t;n++)e[n]=Math.round((e[n-1]||0)+6e4*e[n]);e[t-1]=1/0}(r,o.length),{name:t[0],abbrs:p(t[1].split(" "),o),offsets:p(n,o),untils:r,population:0|t[5]}}function m(e){e&&this._set(d(e))}function x(e,t){this.name=e,this.zones=t}function b(e){var t=e.toTimeString(),n=t.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=t.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+e,this.abbr=n,this.offset=e.getTimezoneOffset()}function v(e){this.zone=e,this.offsetScore=0,this.abbrScore=0}function g(e,t){for(var n,o;o=6e4*((t.at-e.at)/12e4|0);)(n=new b(new Date(e.at+o))).offset===e.offset?e=n:t=n;return e}function z(e,t){return e.offsetScore!==t.offsetScore?e.offsetScore-t.offsetScore:e.abbrScore!==t.abbrScore?e.abbrScore-t.abbrScore:e.zone.population!==t.zone.population?t.zone.population-e.zone.population:t.zone.name.localeCompare(e.zone.name)}function w(e,t){var n,o;for(h(t),n=0;n<t.length;n++)o=t[n],i[o]=i[o]||{},i[o][e]=!0}function _(e){var t,n,o,r,a=e.length,u={},f=[],c={};for(t=0;t<a;t++)if(o=e[t].offset,!c.hasOwnProperty(o)){for(n in r=i[o]||{})r.hasOwnProperty(n)&&(u[n]=!0);c[o]=!0}for(t in u)u.hasOwnProperty(t)&&f.push(s[t]);return f}function j(){try{var e=Intl.DateTimeFormat().resolvedOptions().timeZone;if(e&&e.length>3){var t=s[M(e)];if(t)return t;E("Moment Timezone found "+e+" from the Intl api, but did not have that data loaded.")}}catch(c){}var n,o,r,i=function(){var e,t,n,o,r=(new Date).getFullYear()-2,s=new b(new Date(r,0,1)),i=s.offset,a=[s];for(o=1;o<48;o++)(n=new Date(r,o,1).getTimezoneOffset())!==i&&(e=g(s,t=new b(new Date(r,o,1))),a.push(e),a.push(new b(new Date(e.at+6e4))),s=t,i=n);for(o=0;o<4;o++)a.push(new b(new Date(r+o,0,1))),a.push(new b(new Date(r+o,6,1)));return a}(),a=i.length,u=_(i),f=[];for(o=0;o<u.length;o++){for(n=new v(S(u[o]),a),r=0;r<a;r++)n.scoreOffsetAt(i[r]);f.push(n)}return f.sort(z),f.length>0?f[0].zone.name:void 0}function M(e){return(e||"").toLowerCase().replace(/\//g,"_")}function O(e){var t,o,r,i;for("string"===typeof e&&(e=[e]),t=0;t<e.length;t++)i=M(o=(r=e[t].split("|"))[0]),n[i]=e[t],s[i]=o,w(i,r[2].split(" "))}function S(e,t){e=M(e);var r,i=n[e];return i instanceof m?i:"string"===typeof i?(i=new m(i),n[e]=i,i):o[e]&&t!==S&&(r=S(o[e],S))?((i=n[e]=new m)._set(r),i.name=s[e],i):null}function y(e){var t,n,r,i;for("string"===typeof e&&(e=[e]),t=0;t<e.length;t++)r=M((n=e[t].split("|"))[0]),i=M(n[1]),o[r]=i,s[r]=n[0],o[i]=r,s[i]=n[1]}function k(e){var t="X"===e._f||"x"===e._f;return!(!e._a||void 0!==e._tzm||t)}function E(e){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(e)}function D(t){var n,o=Array.prototype.slice.call(arguments,0,-1),r=arguments[arguments.length-1],s=e.utc.apply(null,o);return!e.isMoment(t)&&k(s)&&(n=S(r))&&s.add(n.parse(s),"minutes"),s.tz(r),s}(u<2||2===u&&f<6)&&E("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+e.version+". See momentjs.com"),m.prototype={_set:function(e){this.name=e.name,this.abbrs=e.abbrs,this.untils=e.untils,this.offsets=e.offsets,this.population=e.population},_index:function(e){var t;if((t=function(e,t){var n,o=t.length;if(e<t[0])return 0;if(o>1&&t[o-1]===1/0&&e>=t[o-2])return o-1;if(e>=t[o-1])return-1;for(var r=0,s=o-1;s-r>1;)t[n=Math.floor((r+s)/2)]<=e?r=n:s=n;return s}(+e,this.untils))>=0)return t},countries:function(){var e=this.name;return Object.keys(r).filter((function(t){return-1!==r[t].zones.indexOf(e)}))},parse:function(e){var t,n,o,r,s=+e,i=this.offsets,a=this.untils,u=a.length-1;for(r=0;r<u;r++)if(t=i[r],n=i[r+1],o=i[r?r-1:r],t<n&&D.moveAmbiguousForward?t=n:t>o&&D.moveInvalidForward&&(t=o),s<a[r]-6e4*t)return i[r];return i[u]},abbr:function(e){return this.abbrs[this._index(e)]},offset:function(e){return E("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(e)]},utcOffset:function(e){return this.offsets[this._index(e)]}},v.prototype.scoreOffsetAt=function(e){this.offsetScore+=Math.abs(this.zone.utcOffset(e.at)-e.offset),this.zone.abbr(e.at).replace(/[^A-Z]/g,"")!==e.abbr&&this.abbrScore++},D.version="0.5.45",D.dataVersion="",D._zones=n,D._links=o,D._names=s,D._countries=r,D.add=O,D.link=y,D.load=function(e){O(e.zones),y(e.links),function(e){var t,n,o,s;if(e&&e.length)for(t=0;t<e.length;t++)n=(s=e[t].split("|"))[0].toUpperCase(),o=s[1].split(" "),r[n]=new x(n,o)}(e.countries),D.dataVersion=e.version},D.zone=S,D.zoneExists=function e(t){return e.didShowError||(e.didShowError=!0,E("moment.tz.zoneExists('"+t+"') has been deprecated in favor of !moment.tz.zone('"+t+"')")),!!S(t)},D.guess=function(e){return t&&!e||(t=j()),t},D.names=function(){var e,t=[];for(e in s)s.hasOwnProperty(e)&&(n[e]||n[o[e]])&&s[e]&&t.push(s[e]);return t.sort()},D.Zone=m,D.unpack=d,D.unpackBase60=l,D.needsOffset=k,D.moveInvalidForward=!0,D.moveAmbiguousForward=!1,D.countries=function(){return Object.keys(r)},D.zonesForCountry=function(e,t){var n;if(n=(n=e).toUpperCase(),!(e=r[n]||null))return null;var o=e.zones.sort();return t?o.map((function(e){return{name:e,offset:S(e).utcOffset(new Date)}})):o};var C,A=e.fn;function Z(e){return function(){return this._z?this._z.abbr(this):e.call(this)}}function T(e){return function(){return this._z=null,e.apply(this,arguments)}}e.tz=D,e.defaultZone=null,e.updateOffset=function(t,n){var o,r=e.defaultZone;if(void 0===t._z&&(r&&k(t)&&!t._isUTC&&t.isValid()&&(t._d=e.utc(t._a)._d,t.utc().add(r.parse(t),"minutes")),t._z=r),t._z)if(o=t._z.utcOffset(t),Math.abs(o)<16&&(o/=60),void 0!==t.utcOffset){var s=t._z;t.utcOffset(-o,n),t._z=s}else t.zone(o,n)},A.tz=function(t,n){if(t){if("string"!==typeof t)throw new Error("Time zone name must be a string, got "+t+" ["+typeof t+"]");return this._z=S(t),this._z?e.updateOffset(this,n):E("Moment Timezone has no data for "+t+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},A.zoneName=Z(A.zoneName),A.zoneAbbr=Z(A.zoneAbbr),A.utc=T(A.utc),A.local=T(A.local),A.utcOffset=(C=A.utcOffset,function(){return arguments.length>0&&(this._z=null),C.apply(this,arguments)}),e.tz.setDefault=function(t){return(u<2||2===u&&f<9)&&E("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+e.version+"."),e.defaultZone=t?S(t):null,e};var I=e.momentProperties;return"[object Array]"===Object.prototype.toString.call(I)?(I.push("_z"),I.push("_a")):I&&(I._z=null),e}))},10075:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/PageTitle",function(){return n(43792)}])},88586:function(e,t){"use strict";t.Z={rebase:{epochLength:28800,beginEpochEnd:1668682800},LOCKTOS_maxWeeks:156,LOCKTOS_epochUnit:604800,modalMaxWeeks:155,rebasePerEpoch:8704505e-11,rebasePeriod:28800,mainnetGasPrice:"6849315",minBondGasPrice:"279458",errMsg:{balanceExceed:"Input has exceeded your balance",bondZeroInput:"Input has to be greater than 0",periodExceed:"Must be between 1 and 155",stakePeriodExceed:"Must be between 0 and 155",managePeriodExceed:"New lock-up period must be equal or greater than the existing lock-up period",zeroInput:"Input has to be equal to or greater than 0",periodExceedThanMaximum:"Must be less than 156 weeks"}}},27224:function(e,t,n){"use strict";var o=n(11163),r=n(67294);t.Z=function(){var e=(0,r.useState)(void 0),t=e[0],n=e[1],s=(0,o.useRouter)().pathname;return(0,r.useEffect)((function(){var e=s.replaceAll("/",""),t="dao"!==e?e.charAt(0).toUpperCase()+e.slice(1):"DAO";return n(t)}),[s]),{pathName:t}}},45379:function(e,t,n){"use strict";var o=n(88586),r=n(67294),s=n(5555);t.Z=function(e){var t=(0,r.useState)("-"),n=t[0],i=t[1],a=o.Z.rebase,u=a.epochLength,f=a.beginEpochEnd;return(0,r.useEffect)((function(){setInterval((function(){var t=(0,s.kv)(),n=u-(t-f)%u,o=(0,s.g9)(t-f>0?n:f-t,"HH:mm:ss"),r=o.hours,a=o.mins,c=o.secs,l=1===r.toString().length?"0".concat(o.hours):"".concat(o.hours),h=1===a.toString().length?"0".concat(o.mins):"".concat(o.mins),p=1===c.toString().length?"0".concat(o.secs):"".concat(o.secs);return(0,s.Ze)(),i(e?"".concat(l).concat(e).concat(h).concat(e).concat(p):"".concat(l,".").concat(h,".").concat(p))}),1e3)}),[]),n}},43792:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(45161),s=n(93717),i=n(71293),a=n(27224),u=n(20271),f=n(1885),c=n(43379),l=n(16658),h=n(25675),p=n.n(h),d=n(67294),m=n(5555),x=n(45379),b=n(83077),v=n(27520),g=function(){var e=(0,r.If)().colorMode,t=(0,d.useState)("-"),n=t[0],a=t[1],u=(0,b.O)().blockNumber;return(0,d.useEffect)((function(){var e=(0,m.df)((0,m.kv)(),"YYYY.MM.DD HH:mm");a(e)}),[u]),(0,o.jsxs)(s.k,{children:[(0,o.jsx)(p(),{src:"dark"===e?c.default:l.default,alt:"CALENDAR_ICON"}),(0,o.jsxs)(i.x,{color:"light"===e?"#7e7e8f":"#8b8b93",ml:"7px",children:["Updated on ",n," (",(0,m.Ze)(),")"]})]})},z=function(){(0,a.Z)().pathName;var e=(0,x.Z)(":"),t=(0,v.Z)().bp500px;return(0,o.jsxs)(s.k,{fontSize:12,alignItems:"center",mt:t?"30px":"",mb:t?"12px":"",children:[(0,o.jsx)(i.x,{mr:"5px",color:"#2775ff",children:e}),(0,o.jsx)(i.x,{color:"#9a9aaf",children:"to next rebase"})]})};t.default=function(){var e=(0,a.Z)().pathName,t=(0,r.If)().colorMode,n=(0,v.Z)().bp500px,c=(0,d.useMemo)((function(){switch(e){case"Bond":return(0,o.jsxs)(s.k,{flexDir:n?"column":"row",fontSize:12,w:"100%",justifyContent:"space-between",h:n?"66px":"",children:[(0,o.jsxs)(s.k,{children:[(0,o.jsx)(p(),{src:"light"===t?f.default:u.default,alt:"HOME_ICON"}),(0,o.jsx)(i.x,{ml:"3px",children:"Home"}),(0,o.jsx)(i.x,{mx:"7px",children:">"}),(0,o.jsx)(i.x,{children:"Bond"}),(0,o.jsx)(i.x,{mx:"7px",children:">"}),(0,o.jsx)(i.x,{color:"blue.200",children:"Bond List"})]}),n?(0,o.jsx)(z,{}):null,(0,o.jsx)(g,{})]});case"DAO":return null;case"Intro":return(0,o.jsxs)(s.k,{flexDir:n?"column":"row",fontSize:12,w:"100%",justifyContent:"space-between",h:n?"66px":"",children:[(0,o.jsx)(s.k,{}),(0,o.jsx)(g,{})]});default:return(0,o.jsxs)(s.k,{flexDir:n?"column":"row",fontSize:12,w:"100%",justifyContent:"space-between",h:n?"66px":"",children:[(0,o.jsxs)(s.k,{children:[(0,o.jsx)(p(),{src:u.default,alt:"HOME_ICON"}),(0,o.jsx)(i.x,{ml:"3px",children:"Home"}),(0,o.jsx)(i.x,{mx:"7px",children:">"}),(0,o.jsx)(i.x,{color:"blue.200",children:e})]}),n?(0,o.jsx)(z,{}):null,(0,o.jsx)(g,{})]})}}),[e,t,n]);return(0,o.jsxs)(s.k,{flexDir:"column",mb:n?"42px":"36px",w:"100%",children:[(0,o.jsxs)(s.k,{justifyContent:"space-between",children:[(0,o.jsx)(i.x,{fontSize:28,h:"39px",fontWeight:"bold",mb:"12px",color:"light"===t?"#07070c":"#ffffff",children:e}),!1===n&&"DAO"!==e&&(0,o.jsx)(z,{})]}),c]})}},5555:function(e,t,n){"use strict";n.d(t,{V4:function(){return d},Ze:function(){return p},ab:function(){return l},df:function(){return u},g9:function(){return h},kv:function(){return f},vI:function(){return c}});var o=n(88586),r=n(30381),s=n.n(r),i=n(80008),a=n.n(i);function u(e,t){return s().unix(e).format(t||"YYYY.MM.D")}function f(){return s()().unix()}function c(e){return e-f()<0}function l(e,t,n,o){return s().unix(e).add(t,"d").format(n||"MM.DD HH:mm:ss")}function h(e,t){var n=3600,o=86400,r=Math.floor(e/o),s=Math.floor((e-o*r)/n),i=Math.floor((e-o*r-n*s)/60);return{days:r,hours:s,mins:i,secs:e-o*r-n*s-60*i}}function p(){var e=a().tz(a().tz.guess()).format("Z").toString().split(":")[0].replaceAll("0","");return"UTC".concat(e)}function d(e){var t=e.currentEndTimeStamp,n=o.Z.LOCKTOS_epochUnit,r=t-f(),s=r/n,i=(r-604800*Math.floor(s))/86400,a=r-604800*Math.floor(s)-86400*Math.floor(i),u=h(a).hours,c=h(a).mins,l=1===u.toString().length?"0".concat(u):"".concat(u),p=1===c.toString().length?"0".concat(c):"".concat(c);return{leftWeeks:Math.floor(s).toString(),leftDays:String(Math.floor(i)),leftHourAndMin:"".concat(l,":").concat(p)}}}},function(e){e.O(0,[4885,2678,9774,2888,179],(function(){return t=10075,e(e.s=t);var t}));var t=e.O();_N_E=t}]);