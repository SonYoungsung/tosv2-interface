"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9683],{88772:function(e,n,t){t.d(n,{X:function(){return D}});var a=t(67294);var o=t(55227),[i,r]=(0,o.k)({name:"CheckboxGroupContext",strict:!1}),s=t(22548),c=t(85893);function l(e){return(0,c.jsx)(s.m.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:(0,c.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function d(e){return(0,c.jsx)(s.m.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:(0,c.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function u(e){const{isIndeterminate:n,isChecked:t,...a}=e,o=n?d:l;return t||n?(0,c.jsx)(s.m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,c.jsx)(o,{...a})}):null}var v=t(28912),f=t(26245),p=t(52366),m=t(35155),h=t(81103),k=t(25432),b={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},y=t(12934);function C(e={}){const n=(0,v.K)(e),{isDisabled:t,isReadOnly:o,isRequired:i,isInvalid:r,id:s,onBlur:c,onFocus:l,"aria-describedby":d}=n,{defaultChecked:u,isChecked:C,isFocusable:g,onChange:x,isIndeterminate:B,name:w,value:E,tabIndex:I,"aria-label":L,"aria-labelledby":_,"aria-invalid":S,...D}=e,j=function(e,n=[]){const t=Object.assign({},e);for(const a of n)a in t&&delete t[a];return t}(D,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),M=(0,m.W)(x),N=(0,m.W)(c),F=(0,m.W)(l),[R,K]=(0,a.useState)(!1),[q,G]=(0,a.useState)(!1),[T,z]=(0,a.useState)(!1),[A,O]=(0,a.useState)(!1);(0,a.useEffect)((()=>(0,y.BT)(K)),[]);const W=(0,a.useRef)(null),[U,H]=(0,a.useState)(!0),[X,$]=(0,a.useState)(!!u),Y=void 0!==C,J=Y?C:X,Q=(0,a.useCallback)((e=>{o||t?e.preventDefault():(Y||$(J?e.target.checked:!!B||e.target.checked),null==M||M(e))}),[o,t,J,Y,B,M]);(0,f.G)((()=>{W.current&&(W.current.indeterminate=Boolean(B))}),[B]),(0,p.r)((()=>{t&&G(!1)}),[t,G]),(0,f.G)((()=>{const e=W.current;if(!(null==e?void 0:e.form))return;const n=()=>{$(!!u)};return e.form.addEventListener("reset",n),()=>{var t;return null==(t=e.form)?void 0:t.removeEventListener("reset",n)}}),[]);const V=t&&!g,Z=(0,a.useCallback)((e=>{" "===e.key&&O(!0)}),[O]),ee=(0,a.useCallback)((e=>{" "===e.key&&O(!1)}),[O]);(0,f.G)((()=>{if(!W.current)return;W.current.checked!==J&&$(W.current.checked)}),[W.current]);const ne=(0,a.useCallback)(((e={},n=null)=>({...e,ref:n,"data-active":(0,k.PB)(A),"data-hover":(0,k.PB)(T),"data-checked":(0,k.PB)(J),"data-focus":(0,k.PB)(q),"data-focus-visible":(0,k.PB)(q&&R),"data-indeterminate":(0,k.PB)(B),"data-disabled":(0,k.PB)(t),"data-invalid":(0,k.PB)(r),"data-readonly":(0,k.PB)(o),"aria-hidden":!0,onMouseDown:(0,k.v0)(e.onMouseDown,(e=>{q&&e.preventDefault(),O(!0)})),onMouseUp:(0,k.v0)(e.onMouseUp,(()=>O(!1))),onMouseEnter:(0,k.v0)(e.onMouseEnter,(()=>z(!0))),onMouseLeave:(0,k.v0)(e.onMouseLeave,(()=>z(!1)))})),[A,J,t,q,R,T,B,r,o]),te=(0,a.useCallback)(((e={},n=null)=>({...e,ref:n,"data-active":(0,k.PB)(A),"data-hover":(0,k.PB)(T),"data-checked":(0,k.PB)(J),"data-focus":(0,k.PB)(q),"data-focus-visible":(0,k.PB)(q&&R),"data-indeterminate":(0,k.PB)(B),"data-disabled":(0,k.PB)(t),"data-invalid":(0,k.PB)(r),"data-readonly":(0,k.PB)(o)})),[A,J,t,q,R,T,B,r,o]),ae=(0,a.useCallback)(((e={},n=null)=>({...j,...e,ref:(0,h.lq)(n,(e=>{e&&H("LABEL"===e.tagName)})),onClick:(0,k.v0)(e.onClick,(()=>{var e;U||(null==(e=W.current)||e.click(),requestAnimationFrame((()=>{var e;null==(e=W.current)||e.focus({preventScroll:!0})})))})),"data-disabled":(0,k.PB)(t),"data-checked":(0,k.PB)(J),"data-invalid":(0,k.PB)(r)})),[j,t,J,r,U]),oe=(0,a.useCallback)(((e={},n=null)=>({...e,ref:(0,h.lq)(W,n),type:"checkbox",name:w,value:E,id:s,tabIndex:I,onChange:(0,k.v0)(e.onChange,Q),onBlur:(0,k.v0)(e.onBlur,N,(()=>G(!1))),onFocus:(0,k.v0)(e.onFocus,F,(()=>G(!0))),onKeyDown:(0,k.v0)(e.onKeyDown,Z),onKeyUp:(0,k.v0)(e.onKeyUp,ee),required:i,checked:J,disabled:V,readOnly:o,"aria-label":L,"aria-labelledby":_,"aria-invalid":S?Boolean(S):r,"aria-describedby":d,"aria-disabled":t,style:b})),[w,E,s,Q,N,F,Z,ee,i,J,V,o,L,_,S,r,d,t,I]),ie=(0,a.useCallback)(((e={},n=null)=>({...e,ref:n,onMouseDown:(0,k.v0)(e.onMouseDown,P),"data-disabled":(0,k.PB)(t),"data-checked":(0,k.PB)(J),"data-invalid":(0,k.PB)(r)})),[J,t,r]);return{state:{isInvalid:r,isFocused:q,isChecked:J,isActive:A,isHovered:T,isIndeterminate:B,isDisabled:t,isReadOnly:o,isRequired:i},getRootProps:ae,getCheckboxProps:ne,getIndicatorProps:te,getInputProps:oe,getLabelProps:ie,htmlProps:j}}function P(e){e.preventDefault(),e.stopPropagation()}var g=t(70917),x=t(16554),B=t(77030),w=t(33179),E={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},I={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},L=(0,g.F4)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),_=(0,g.F4)({from:{opacity:0},to:{opacity:1}}),S=(0,g.F4)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),D=(0,x.G)((function(e,n){const t=r(),o={...t,...e},i=(0,B.jC)("Checkbox",o),l=(0,w.Lr)(e),{spacing:d="0.5rem",className:v,children:f,iconColor:p,iconSize:m,icon:h=(0,c.jsx)(u,{}),isChecked:b,isDisabled:y=(null==t?void 0:t.isDisabled),onChange:P,inputProps:g,...x}=l;let D=b;(null==t?void 0:t.value)&&l.value&&(D=t.value.includes(l.value));let j=P;(null==t?void 0:t.onChange)&&l.value&&(j=(0,k.PP)(t.onChange,P));const{state:M,getInputProps:N,getCheckboxProps:F,getLabelProps:R,getRootProps:K}=C({...x,isDisabled:y,isChecked:D,onChange:j}),q=function(e){const[n,t]=(0,a.useState)(e),[o,i]=(0,a.useState)(!1);return e!==n&&(i(!0),t(e)),o}(M.isChecked),G=(0,a.useMemo)((()=>({animation:q?M.isIndeterminate?`${_} 20ms linear, ${S} 200ms linear`:`${L} 200ms linear`:void 0,fontSize:m,color:p,...i.icon})),[p,m,q,M.isIndeterminate,i.icon]),T=(0,a.cloneElement)(h,{__css:G,isIndeterminate:M.isIndeterminate,isChecked:M.isChecked});return(0,c.jsxs)(s.m.label,{__css:{...I,...i.container},className:(0,k.cx)("chakra-checkbox",v),...K(),children:[(0,c.jsx)("input",{className:"chakra-checkbox__input",...N(g,n)}),(0,c.jsx)(s.m.span,{__css:{...E,...i.control},className:"chakra-checkbox__control",...F(),children:T}),f&&(0,c.jsx)(s.m.span,{className:"chakra-checkbox__label",...R(),__css:{marginStart:d,...i.label},children:f})]})}));D.displayName="Checkbox"},33090:function(e,n,t){t.d(n,{I:function(){return d}});var a=t(28912),o=t(16554),i=t(77030),r=t(33179),s=t(22548),c=t(25432),l=t(85893),d=(0,o.G)((function(e,n){const{htmlSize:t,...o}=e,d=(0,i.jC)("Input",o),u=(0,r.Lr)(o),v=(0,a.Y)(u),f=(0,c.cx)("chakra-input",e.className);return(0,l.jsx)(s.m.input,{size:t,...v,__css:d.field,ref:n,className:f})}));d.displayName="Input",d.id="Input"},12934:function(e,n,t){t.d(n,{BT:function(){return b}});var a=()=>"undefined"!==typeof document;var o=!1,i=null,r=!1,s=!1,c=new Set;function l(e,n){c.forEach((t=>t(e,n)))}var d="undefined"!==typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function u(e){var n;r=!0,(n=e).metaKey||!d&&n.altKey||n.ctrlKey||"Control"===n.key||"Shift"===n.key||"Meta"===n.key||(i="keyboard",l("keyboard",e))}function v(e){if(i="pointer","mousedown"===e.type||"pointerdown"===e.type){r=!0;const n=e.composedPath?e.composedPath()[0]:e.target;let t=!1;try{t=n.matches(":focus-visible")}catch{}if(t)return;l("pointer",e)}}function f(e){var n;(0===(n=e).mozInputSource&&n.isTrusted||0===n.detail&&!n.pointerType)&&(r=!0,i="virtual")}function p(e){e.target!==window&&e.target!==document&&(r||s||(i="virtual",l("virtual",e)),r=!1,s=!1)}function m(){r=!1,s=!0}function h(){return"pointer"!==i}function k(){if(!a()||o)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){r=!0,e.apply(this,n)},document.addEventListener("keydown",u,!0),document.addEventListener("keyup",u,!0),document.addEventListener("click",f,!0),window.addEventListener("focus",p,!0),window.addEventListener("blur",m,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",v,!0),document.addEventListener("pointermove",v,!0),document.addEventListener("pointerup",v,!0)):(document.addEventListener("mousedown",v,!0),document.addEventListener("mousemove",v,!0),document.addEventListener("mouseup",v,!0)),o=!0}function b(e){k(),e(h());const n=()=>e(h());return c.add(n),()=>{c.delete(n)}}}}]);