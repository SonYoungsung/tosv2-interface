(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2855],{80008:function(t,e,n){(t.exports=n(85177)).tz.load(n(91128))},85177:function(t,e,n){var o,r,i;!function(s,a){"use strict";t.exports?t.exports=a(n(30381)):(r=[n(30381)],void 0===(i="function"===typeof(o=a)?o.apply(e,r):o)||(t.exports=i))}(0,(function(t){"use strict";void 0===t.version&&t.default&&(t=t.default);var e,n={},o={},r={},i={},s={};t&&"string"===typeof t.version||T("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var a=t.version.split("."),u=+a[0],f=+a[1];function c(t){return t>96?t-87:t>64?t-29:t-48}function l(t){var e=0,n=t.split("."),o=n[0],r=n[1]||"",i=1,s=0,a=1;for(45===t.charCodeAt(0)&&(e=1,a=-1);e<o.length;e++)s=60*s+c(o.charCodeAt(e));for(e=0;e<r.length;e++)i/=60,s+=c(r.charCodeAt(e))*i;return s*a}function h(t){for(var e=0;e<t.length;e++)t[e]=l(t[e])}function p(t,e){var n,o=[];for(n=0;n<e.length;n++)o[n]=t[e[n]];return o}function d(t){var e=t.split("|"),n=e[2].split(" "),o=e[3].split(""),r=e[4].split(" ");return h(n),h(o),h(r),function(t,e){for(var n=0;n<e;n++)t[n]=Math.round((t[n-1]||0)+6e4*t[n]);t[e-1]=1/0}(r,o.length),{name:e[0],abbrs:p(e[1].split(" "),o),offsets:p(n,o),untils:r,population:0|e[5]}}function m(t){t&&this._set(d(t))}function v(t,e){this.name=t,this.zones=e}function b(t){var e=t.toTimeString(),n=e.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=e.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+t,this.abbr=n,this.offset=t.getTimezoneOffset()}function z(t){this.zone=t,this.offsetScore=0,this.abbrScore=0}function g(t,e){for(var n,o;o=6e4*((e.at-t.at)/12e4|0);)(n=new b(new Date(t.at+o))).offset===t.offset?t=n:e=n;return t}function _(t,e){return t.offsetScore!==e.offsetScore?t.offsetScore-e.offsetScore:t.abbrScore!==e.abbrScore?t.abbrScore-e.abbrScore:t.zone.population!==e.zone.population?e.zone.population-t.zone.population:e.zone.name.localeCompare(t.zone.name)}function w(t,e){var n,o;for(h(e),n=0;n<e.length;n++)o=e[n],s[o]=s[o]||{},s[o][t]=!0}function x(t){var e,n,o,r,a=t.length,u={},f=[],c={};for(e=0;e<a;e++)if(o=t[e].offset,!c.hasOwnProperty(o)){for(n in r=s[o]||{})r.hasOwnProperty(n)&&(u[n]=!0);c[o]=!0}for(e in u)u.hasOwnProperty(e)&&f.push(i[e]);return f}function M(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;if(t&&t.length>3){var e=i[y(t)];if(e)return e;T("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")}}catch(c){}var n,o,r,s=function(){var t,e,n,o,r=(new Date).getFullYear()-2,i=new b(new Date(r,0,1)),s=i.offset,a=[i];for(o=1;o<48;o++)(n=new Date(r,o,1).getTimezoneOffset())!==s&&(t=g(i,e=new b(new Date(r,o,1))),a.push(t),a.push(new b(new Date(t.at+6e4))),i=e,s=n);for(o=0;o<4;o++)a.push(new b(new Date(r+o,0,1))),a.push(new b(new Date(r+o,6,1)));return a}(),a=s.length,u=x(s),f=[];for(o=0;o<u.length;o++){for(n=new z(S(u[o]),a),r=0;r<a;r++)n.scoreOffsetAt(s[r]);f.push(n)}return f.sort(_),f.length>0?f[0].zone.name:void 0}function y(t){return(t||"").toLowerCase().replace(/\//g,"_")}function O(t){var e,o,r,s;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)s=y(o=(r=t[e].split("|"))[0]),n[s]=t[e],i[s]=o,w(s,r[2].split(" "))}function S(t,e){t=y(t);var r,s=n[t];return s instanceof m?s:"string"===typeof s?(s=new m(s),n[t]=s,s):o[t]&&e!==S&&(r=S(o[t],S))?((s=n[t]=new m)._set(r),s.name=i[t],s):null}function k(t){var e,n,r,s;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)r=y((n=t[e].split("|"))[0]),s=y(n[1]),o[r]=s,i[r]=n[0],o[s]=r,i[s]=n[1]}function j(t){var e="X"===t._f||"x"===t._f;return!(!t._a||void 0!==t._tzm||e)}function T(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(t)}function A(e){var n,o=Array.prototype.slice.call(arguments,0,-1),r=arguments[arguments.length-1],i=t.utc.apply(null,o);return!t.isMoment(e)&&j(i)&&(n=S(r))&&i.add(n.parse(i),"minutes"),i.tz(r),i}(u<2||2===u&&f<6)&&T("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+t.version+". See momentjs.com"),m.prototype={_set:function(t){this.name=t.name,this.abbrs=t.abbrs,this.untils=t.untils,this.offsets=t.offsets,this.population=t.population},_index:function(t){var e;if((e=function(t,e){var n,o=e.length;if(t<e[0])return 0;if(o>1&&e[o-1]===1/0&&t>=e[o-2])return o-1;if(t>=e[o-1])return-1;for(var r=0,i=o-1;i-r>1;)e[n=Math.floor((r+i)/2)]<=t?r=n:i=n;return i}(+t,this.untils))>=0)return e},countries:function(){var t=this.name;return Object.keys(r).filter((function(e){return-1!==r[e].zones.indexOf(t)}))},parse:function(t){var e,n,o,r,i=+t,s=this.offsets,a=this.untils,u=a.length-1;for(r=0;r<u;r++)if(e=s[r],n=s[r+1],o=s[r?r-1:r],e<n&&A.moveAmbiguousForward?e=n:e>o&&A.moveInvalidForward&&(e=o),i<a[r]-6e4*e)return s[r];return s[u]},abbr:function(t){return this.abbrs[this._index(t)]},offset:function(t){return T("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(t)]},utcOffset:function(t){return this.offsets[this._index(t)]}},z.prototype.scoreOffsetAt=function(t){this.offsetScore+=Math.abs(this.zone.utcOffset(t.at)-t.offset),this.zone.abbr(t.at).replace(/[^A-Z]/g,"")!==t.abbr&&this.abbrScore++},A.version="0.5.45",A.dataVersion="",A._zones=n,A._links=o,A._names=i,A._countries=r,A.add=O,A.link=k,A.load=function(t){O(t.zones),k(t.links),function(t){var e,n,o,i;if(t&&t.length)for(e=0;e<t.length;e++)n=(i=t[e].split("|"))[0].toUpperCase(),o=i[1].split(" "),r[n]=new v(n,o)}(t.countries),A.dataVersion=t.version},A.zone=S,A.zoneExists=function t(e){return t.didShowError||(t.didShowError=!0,T("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!S(e)},A.guess=function(t){return e&&!t||(e=M()),e},A.names=function(){var t,e=[];for(t in i)i.hasOwnProperty(t)&&(n[t]||n[o[t]])&&i[t]&&e.push(i[t]);return e.sort()},A.Zone=m,A.unpack=d,A.unpackBase60=l,A.needsOffset=j,A.moveInvalidForward=!0,A.moveAmbiguousForward=!1,A.countries=function(){return Object.keys(r)},A.zonesForCountry=function(t,e){var n;if(n=(n=t).toUpperCase(),!(t=r[n]||null))return null;var o=t.zones.sort();return e?o.map((function(t){return{name:t,offset:S(t).utcOffset(new Date)}})):o};var C,E=t.fn;function D(t){return function(){return this._z?this._z.abbr(this):t.call(this)}}function I(t){return function(){return this._z=null,t.apply(this,arguments)}}t.tz=A,t.defaultZone=null,t.updateOffset=function(e,n){var o,r=t.defaultZone;if(void 0===e._z&&(r&&j(e)&&!e._isUTC&&e.isValid()&&(e._d=t.utc(e._a)._d,e.utc().add(r.parse(e),"minutes")),e._z=r),e._z)if(o=e._z.utcOffset(e),Math.abs(o)<16&&(o/=60),void 0!==e.utcOffset){var i=e._z;e.utcOffset(-o,n),e._z=i}else e.zone(o,n)},E.tz=function(e,n){if(e){if("string"!==typeof e)throw new Error("Time zone name must be a string, got "+e+" ["+typeof e+"]");return this._z=S(e),this._z?t.updateOffset(this,n):T("Moment Timezone has no data for "+e+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},E.zoneName=D(E.zoneName),E.zoneAbbr=D(E.zoneAbbr),E.utc=I(E.utc),E.local=I(E.local),E.utcOffset=(C=E.utcOffset,function(){return arguments.length>0&&(this._z=null),C.apply(this,arguments)}),t.tz.setDefault=function(e){return(u<2||2===u&&f<9)&&T("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+t.version+"."),t.defaultZone=e?S(e):null,t};var P=t.momentProperties;return"[object Array]"===Object.prototype.toString.call(P)?(P.push("_z"),P.push("_a")):P&&(P._z=null),t}))},97519:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/stake/StakeCardSection",function(){return n(56037)}])},95787:function(t,e,n){"use strict";var o=n(85893),r=n(45161),i=n(38658),s=n(21371);e.Z=function(t){var e=(0,r.If)().colorMode,n=t.label;return(0,o.jsx)(i.u,{display:0===(null===n||void 0===n?void 0:n.length)?"none":"flex",placement:"top",label:n,bg:"dark"===e?"#1f2128":"#fff",borderRadius:"3px",color:"light"===e?"#07070c":"#8b8b93",fontSize:"12px",border:"light"===e?"solid 1px #e8edf2":"solid 1px #313442",children:(0,o.jsx)(s.w,{display:0===(null===n||void 0===n?void 0:n.length)?"none":"",h:"16px",minW:"16px"})})}},88586:function(t,e){"use strict";e.Z={rebase:{epochLength:28800,beginEpochEnd:1668682800},LOCKTOS_maxWeeks:156,LOCKTOS_epochUnit:604800,modalMaxWeeks:155,rebasePerEpoch:8704505e-11,rebasePeriod:28800,mainnetGasPrice:"6849315",minBondGasPrice:"279458",errMsg:{balanceExceed:"Input has exceeded your balance",bondZeroInput:"Input has to be greater than 0",periodExceed:"Must be between 1 and 155",stakePeriodExceed:"Must be between 0 and 155",managePeriodExceed:"New lock-up period must be equal or greater than the existing lock-up period",zeroInput:"Input has to be equal to or greater than 0",periodExceedThanMaximum:"Must be less than 156 weeks"}}},5555:function(t,e,n){"use strict";n.d(e,{V4:function(){return d},Ze:function(){return p},ab:function(){return l},df:function(){return u},g9:function(){return h},kv:function(){return f},vI:function(){return c}});var o=n(88586),r=n(30381),i=n.n(r),s=n(80008),a=n.n(s);function u(t,e){return i().unix(t).format(e||"YYYY.MM.D")}function f(){return i()().unix()}function c(t){return t-f()<0}function l(t,e,n,o){return i().unix(t).add(e,"d").format(n||"MM.DD HH:mm:ss")}function h(t,e){var n=3600,o=86400,r=Math.floor(t/o),i=Math.floor((t-o*r)/n),s=Math.floor((t-o*r-n*i)/60);return{days:r,hours:i,mins:s,secs:t-o*r-n*i-60*s}}function p(){var t=a().tz(a().tz.guess()).format("Z").toString().split(":")[0].replaceAll("0","");return"UTC".concat(t)}function d(t){var e=t.currentEndTimeStamp,n=o.Z.LOCKTOS_epochUnit,r=e-f(),i=r/n,s=(r-604800*Math.floor(i))/86400,a=r-604800*Math.floor(i)-86400*Math.floor(s),u=h(a).hours,c=h(a).mins,l=1===u.toString().length?"0".concat(u):"".concat(u),p=1===c.toString().length?"0".concat(c):"".concat(c);return{leftWeeks:Math.floor(i).toString(),leftDays:String(Math.floor(s)),leftHourAndMin:"".concat(l,":").concat(p)}}},24027:function(t,e,n){"use strict";n.d(e,{I:function(){return a}});var o=n(36948),r=n(16554),i=n(67294),s=n(85893);function a(t){const{viewBox:e="0 0 24 24",d:n,displayName:a,defaultProps:u={}}=t,f=i.Children.toArray(t.path),c=(0,r.G)(((t,r)=>(0,s.jsx)(o.J,{ref:r,viewBox:e,...u,...t,children:f.length?f:(0,s.jsx)("path",{fill:"currentColor",d:n})})));return c.displayName=a,c}},21371:function(t,e,n){"use strict";n.d(e,{w:function(){return i}});var o=n(24027),r=n(85893),i=(0,o.I)({displayName:"QuestionOutlineIcon",path:(0,r.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,r.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,r.jsx)("path",{fill:"none",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,r.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]})})},90273:function(t,e,n){"use strict";n.d(e,{m:function(){return o}});var o=(0,n(24027).I)({d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",displayName:"ArrowForwardIcon"})}},function(t){t.O(0,[4885,2678,8658,9899,6037,9774,2888,179],(function(){return e=97519,t(t.s=e);var e}));var e=t.O();_N_E=e}]);