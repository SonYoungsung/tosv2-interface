(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6019],{80008:function(t,e,n){(t.exports=n(85177)).tz.load(n(91128))},85177:function(t,e,n){var o,r,i;!function(s,f){"use strict";t.exports?t.exports=f(n(30381)):(r=[n(30381)],void 0===(i="function"===typeof(o=f)?o.apply(e,r):o)||(t.exports=i))}(0,(function(t){"use strict";void 0===t.version&&t.default&&(t=t.default);var e,n={},o={},r={},i={},s={};t&&"string"===typeof t.version||A("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var f=t.version.split("."),a=+f[0],u=+f[1];function c(t){return t>96?t-87:t>64?t-29:t-48}function l(t){var e=0,n=t.split("."),o=n[0],r=n[1]||"",i=1,s=0,f=1;for(45===t.charCodeAt(0)&&(e=1,f=-1);e<o.length;e++)s=60*s+c(o.charCodeAt(e));for(e=0;e<r.length;e++)i/=60,s+=c(r.charCodeAt(e))*i;return s*f}function h(t){for(var e=0;e<t.length;e++)t[e]=l(t[e])}function p(t,e){var n,o=[];for(n=0;n<e.length;n++)o[n]=t[e[n]];return o}function d(t){var e=t.split("|"),n=e[2].split(" "),o=e[3].split(""),r=e[4].split(" ");return h(n),h(o),h(r),function(t,e){for(var n=0;n<e;n++)t[n]=Math.round((t[n-1]||0)+6e4*t[n]);t[e-1]=1/0}(r,o.length),{name:e[0],abbrs:p(e[1].split(" "),o),offsets:p(n,o),untils:r,population:0|e[5]}}function m(t){t&&this._set(d(t))}function v(t,e){this.name=t,this.zones=e}function z(t){var e=t.toTimeString(),n=e.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=e.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+t,this.abbr=n,this.offset=t.getTimezoneOffset()}function _(t){this.zone=t,this.offsetScore=0,this.abbrScore=0}function b(t,e){for(var n,o;o=6e4*((e.at-t.at)/12e4|0);)(n=new z(new Date(t.at+o))).offset===t.offset?t=n:e=n;return t}function g(t,e){return t.offsetScore!==e.offsetScore?t.offsetScore-e.offsetScore:t.abbrScore!==e.abbrScore?t.abbrScore-e.abbrScore:t.zone.population!==e.zone.population?e.zone.population-t.zone.population:e.zone.name.localeCompare(t.zone.name)}function w(t,e){var n,o;for(h(e),n=0;n<e.length;n++)o=e[n],s[o]=s[o]||{},s[o][t]=!0}function y(t){var e,n,o,r,f=t.length,a={},u=[],c={};for(e=0;e<f;e++)if(o=t[e].offset,!c.hasOwnProperty(o)){for(n in r=s[o]||{})r.hasOwnProperty(n)&&(a[n]=!0);c[o]=!0}for(e in a)a.hasOwnProperty(e)&&u.push(i[e]);return u}function O(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;if(t&&t.length>3){var e=i[x(t)];if(e)return e;A("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")}}catch(c){}var n,o,r,s=function(){var t,e,n,o,r=(new Date).getFullYear()-2,i=new z(new Date(r,0,1)),s=i.offset,f=[i];for(o=1;o<48;o++)(n=new Date(r,o,1).getTimezoneOffset())!==s&&(t=b(i,e=new z(new Date(r,o,1))),f.push(t),f.push(new z(new Date(t.at+6e4))),i=e,s=n);for(o=0;o<4;o++)f.push(new z(new Date(r+o,0,1))),f.push(new z(new Date(r+o,6,1)));return f}(),f=s.length,a=y(s),u=[];for(o=0;o<a.length;o++){for(n=new _(S(a[o]),f),r=0;r<f;r++)n.scoreOffsetAt(s[r]);u.push(n)}return u.sort(g),u.length>0?u[0].zone.name:void 0}function x(t){return(t||"").toLowerCase().replace(/\//g,"_")}function M(t){var e,o,r,s;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)s=x(o=(r=t[e].split("|"))[0]),n[s]=t[e],i[s]=o,w(s,r[2].split(" "))}function S(t,e){t=x(t);var r,s=n[t];return s instanceof m?s:"string"===typeof s?(s=new m(s),n[t]=s,s):o[t]&&e!==S&&(r=S(o[t],S))?((s=n[t]=new m)._set(r),s.name=i[t],s):null}function j(t){var e,n,r,s;for("string"===typeof t&&(t=[t]),e=0;e<t.length;e++)r=x((n=t[e].split("|"))[0]),s=x(n[1]),o[r]=s,i[r]=n[0],o[s]=r,i[s]=n[1]}function k(t){var e="X"===t._f||"x"===t._f;return!(!t._a||void 0!==t._tzm||e)}function A(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(t)}function C(e){var n,o=Array.prototype.slice.call(arguments,0,-1),r=arguments[arguments.length-1],i=t.utc.apply(null,o);return!t.isMoment(e)&&k(i)&&(n=S(r))&&i.add(n.parse(i),"minutes"),i.tz(r),i}(a<2||2===a&&u<6)&&A("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+t.version+". See momentjs.com"),m.prototype={_set:function(t){this.name=t.name,this.abbrs=t.abbrs,this.untils=t.untils,this.offsets=t.offsets,this.population=t.population},_index:function(t){var e;if((e=function(t,e){var n,o=e.length;if(t<e[0])return 0;if(o>1&&e[o-1]===1/0&&t>=e[o-2])return o-1;if(t>=e[o-1])return-1;for(var r=0,i=o-1;i-r>1;)e[n=Math.floor((r+i)/2)]<=t?r=n:i=n;return i}(+t,this.untils))>=0)return e},countries:function(){var t=this.name;return Object.keys(r).filter((function(e){return-1!==r[e].zones.indexOf(t)}))},parse:function(t){var e,n,o,r,i=+t,s=this.offsets,f=this.untils,a=f.length-1;for(r=0;r<a;r++)if(e=s[r],n=s[r+1],o=s[r?r-1:r],e<n&&C.moveAmbiguousForward?e=n:e>o&&C.moveInvalidForward&&(e=o),i<f[r]-6e4*e)return s[r];return s[a]},abbr:function(t){return this.abbrs[this._index(t)]},offset:function(t){return A("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(t)]},utcOffset:function(t){return this.offsets[this._index(t)]}},_.prototype.scoreOffsetAt=function(t){this.offsetScore+=Math.abs(this.zone.utcOffset(t.at)-t.offset),this.zone.abbr(t.at).replace(/[^A-Z]/g,"")!==t.abbr&&this.abbrScore++},C.version="0.5.45",C.dataVersion="",C._zones=n,C._links=o,C._names=i,C._countries=r,C.add=M,C.link=j,C.load=function(t){M(t.zones),j(t.links),function(t){var e,n,o,i;if(t&&t.length)for(e=0;e<t.length;e++)n=(i=t[e].split("|"))[0].toUpperCase(),o=i[1].split(" "),r[n]=new v(n,o)}(t.countries),C.dataVersion=t.version},C.zone=S,C.zoneExists=function t(e){return t.didShowError||(t.didShowError=!0,A("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!S(e)},C.guess=function(t){return e&&!t||(e=O()),e},C.names=function(){var t,e=[];for(t in i)i.hasOwnProperty(t)&&(n[t]||n[o[t]])&&i[t]&&e.push(i[t]);return e.sort()},C.Zone=m,C.unpack=d,C.unpackBase60=l,C.needsOffset=k,C.moveInvalidForward=!0,C.moveAmbiguousForward=!1,C.countries=function(){return Object.keys(r)},C.zonesForCountry=function(t,e){var n;if(n=(n=t).toUpperCase(),!(t=r[n]||null))return null;var o=t.zones.sort();return e?o.map((function(t){return{name:t,offset:S(t).utcOffset(new Date)}})):o};var T,D=t.fn;function E(t){return function(){return this._z?this._z.abbr(this):t.call(this)}}function N(t){return function(){return this._z=null,t.apply(this,arguments)}}t.tz=C,t.defaultZone=null,t.updateOffset=function(e,n){var o,r=t.defaultZone;if(void 0===e._z&&(r&&k(e)&&!e._isUTC&&e.isValid()&&(e._d=t.utc(e._a)._d,e.utc().add(r.parse(e),"minutes")),e._z=r),e._z)if(o=e._z.utcOffset(e),Math.abs(o)<16&&(o/=60),void 0!==e.utcOffset){var i=e._z;e.utcOffset(-o,n),e._z=i}else e.zone(o,n)},D.tz=function(e,n){if(e){if("string"!==typeof e)throw new Error("Time zone name must be a string, got "+e+" ["+typeof e+"]");return this._z=S(e),this._z?t.updateOffset(this,n):A("Moment Timezone has no data for "+e+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},D.zoneName=E(D.zoneName),D.zoneAbbr=E(D.zoneAbbr),D.utc=N(D.utc),D.local=N(D.local),D.utcOffset=(T=D.utcOffset,function(){return arguments.length>0&&(this._z=null),T.apply(this,arguments)}),t.tz.setDefault=function(e){return(a<2||2===a&&u<9)&&A("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+t.version+"."),t.defaultZone=e?S(e):null,t};var P=t.momentProperties;return"[object Array]"===Object.prototype.toString.call(P)?(P.push("_z"),P.push("_a")):P&&(P._z=null),t}))},69670:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/stake/modal/StakeModal_BottomContent",function(){return n(34824)}])},24027:function(t,e,n){"use strict";n.d(e,{I:function(){return f}});var o=n(36948),r=n(16554),i=n(67294),s=n(85893);function f(t){const{viewBox:e="0 0 24 24",d:n,displayName:f,defaultProps:a={}}=t,u=i.Children.toArray(t.path),c=(0,r.G)(((t,r)=>(0,s.jsx)(o.J,{ref:r,viewBox:e,...a,...t,children:u.length?u:(0,s.jsx)("path",{fill:"currentColor",d:n})})));return c.displayName=f,c}},21371:function(t,e,n){"use strict";n.d(e,{w:function(){return i}});var o=n(24027),r=n(85893),i=(0,o.I)({displayName:"QuestionOutlineIcon",path:(0,r.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,r.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,r.jsx)("path",{fill:"none",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,r.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]})})}},function(t){t.O(0,[4885,2678,8658,3942,4824,9774,2888,179],(function(){return e=69670,t(t.s=e);var e}));var e=t.O();_N_E=e}]);