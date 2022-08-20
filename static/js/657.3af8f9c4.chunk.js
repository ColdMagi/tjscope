"use strict";(self.webpackChunktjscope=self.webpackChunktjscope||[]).push([[657],{5777:function(e,a,n){n.d(a,{hU:function(){return T},zx:function(){return R}});var r=n(4942),i=n(1413),l=n(4925),t=n(3324),o=n(2791),s=n(1197),d=n(3544),c=n(2965),u=n(6198),m=n.n(u),v=n(6943),p=n(9642),f=n(9194),h=["children","className"],Z=["label","placement","spacing","children","className","__css"],b=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],g=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],y=["icon","children","isRound","aria-label"],_=(0,p.kr)({strict:!1,name:"ButtonGroupContext"}),E=(0,t.Z)(_,2),N=E[0],x=E[1];function I(e){var a=e.children,n=e.className,r=(0,l.Z)(e,h),t=(0,o.isValidElement)(a)?(0,o.cloneElement)(a,{"aria-hidden":!0,focusable:!1}):a,s=(0,v.cx)("chakra-button__icon",n);return o.createElement(d.m$.span,(0,i.Z)((0,i.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},r),{},{className:s}),t)}function k(e){var a=e.label,n=e.placement,t=e.spacing,s=void 0===t?"0.5rem":t,c=e.children,u=void 0===c?o.createElement(f.$,{color:"currentColor",width:"1em",height:"1em"}):c,m=e.className,p=e.__css,h=(0,l.Z)(e,Z),b=(0,v.cx)("chakra-button__spinner",m),g="start"===n?"marginEnd":"marginStart",y=(0,o.useMemo)((function(){var e;return(0,i.Z)((e={display:"flex",alignItems:"center",position:a?"relative":"absolute"},(0,r.Z)(e,g,a?s:0),(0,r.Z)(e,"fontSize","1em"),(0,r.Z)(e,"lineHeight","normal"),e),p)}),[p,a,g,s]);return o.createElement(d.m$.div,(0,i.Z)((0,i.Z)({className:b},h),{},{__css:y}),u)}v.Ts&&(I.displayName="ButtonIcon"),v.Ts&&(k.displayName="ButtonSpinner");var R=(0,d.Gp)((function(e,a){var n=x(),r=(0,d.mq)("Button",(0,i.Z)((0,i.Z)({},n),e)),u=(0,c.Lr)(e),p=u.isDisabled,f=void 0===p?null==n?void 0:n.isDisabled:p,h=u.isLoading,Z=u.isActive,g=u.children,y=u.leftIcon,_=u.rightIcon,E=u.loadingText,N=u.iconSpacing,I=void 0===N?"0.5rem":N,R=u.type,F=u.spinner,T=u.spinnerPlacement,S=void 0===T?"start":T,P=u.className,C=u.as,B=(0,l.Z)(u,b),D=(0,o.useMemo)((function(){var e,a=m()({},null!==(e=null==r?void 0:r._focus)&&void 0!==e?e:{},{zIndex:1});return(0,i.Z)((0,i.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},r),!!n&&{_focus:a})}),[r,n]),O=function(e){var a=(0,o.useState)(!e),n=(0,t.Z)(a,2),r=n[0],i=n[1];return{ref:(0,o.useCallback)((function(e){e&&i("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(C),M=O.ref,G=O.type,$={rightIcon:_,leftIcon:y,iconSpacing:I,children:g};return o.createElement(d.m$.button,(0,i.Z)({disabled:f||h,ref:(0,s.qq)(a,M),as:C,type:null!==R&&void 0!==R?R:G,"data-active":(0,v.PB)(Z),"data-loading":(0,v.PB)(h),__css:D,className:(0,v.cx)("chakra-button",P)},B),h&&"start"===S&&o.createElement(k,{className:"chakra-button__spinner--start",label:E,placement:"start",spacing:I},F),h?E||o.createElement(d.m$.span,{opacity:0},o.createElement(q,(0,i.Z)({},$))):o.createElement(q,(0,i.Z)({},$)),h&&"end"===S&&o.createElement(k,{className:"chakra-button__spinner--end",label:E,placement:"end",spacing:I},F))}));function q(e){var a=e.leftIcon,n=e.rightIcon,r=e.children,i=e.iconSpacing;return o.createElement(o.Fragment,null,a&&o.createElement(I,{marginEnd:i},a),r,n&&o.createElement(I,{marginStart:i},n))}v.Ts&&(R.displayName="Button");var F=(0,d.Gp)((function(e,a){var n=e.size,r=e.colorScheme,t=e.variant,s=e.className,c=e.spacing,u=void 0===c?"0.5rem":c,m=e.isAttached,p=e.isDisabled,f=(0,l.Z)(e,g),h=(0,v.cx)("chakra-button__group",s),Z=(0,o.useMemo)((function(){return{size:n,colorScheme:r,variant:t,isDisabled:p}}),[n,r,t,p]),b={display:"inline-flex"};return b=m?(0,i.Z)((0,i.Z)({},b),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,i.Z)((0,i.Z)({},b),{},{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),o.createElement(N,{value:Z},o.createElement(d.m$.div,(0,i.Z)({ref:a,role:"group",__css:b,className:h,"data-attached":m?"":void 0},f)))}));v.Ts&&(F.displayName="ButtonGroup");var T=(0,d.Gp)((function(e,a){var n=e.icon,r=e.children,t=e.isRound,s=e["aria-label"],d=(0,l.Z)(e,y),c=n||r,u=(0,o.isValidElement)(c)?(0,o.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(R,(0,i.Z)({padding:"0",borderRadius:t?"full":void 0,ref:a,"aria-label":s},d),u)}));v.Ts&&(T.displayName="IconButton")},5863:function(e,a,n){n.d(a,{Kn:function(){return F},Yp:function(){return q}});var r=n(1413),i=n(4925),l=n(3324),t=n(2791),o=n(1197),s=n(9642),d=n(3544),c=n(2965),u=n(6943),m=n(9894),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],f=["isDisabled","isInvalid","isReadOnly","isRequired"],h=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"],Z=["className","children","requiredIndicator","optionalIndicator"],b=(0,s.kr)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,l.Z)(b,2),y=g[0],_=g[1],E=(0,s.kr)({strict:!1,name:"FormControlContext"}),N=(0,l.Z)(E,2),x=N[0],I=N[1];var k=(0,d.Gp)((function(e,a){var n=(0,d.jC)("Form",e),m=function(e){var a=e.id,n=e.isRequired,d=e.isInvalid,c=e.isDisabled,m=e.isReadOnly,p=(0,i.Z)(e,v),f=(0,o.Me)(),h=a||"field-".concat(f),Z="".concat(h,"-label"),b="".concat(h,"-feedback"),g="".concat(h,"-helptext"),y=(0,t.useState)(!1),_=(0,l.Z)(y,2),E=_[0],N=_[1],x=(0,t.useState)(!1),I=(0,l.Z)(x,2),k=I[0],R=I[1],q=(0,o.kt)(),F=(0,l.Z)(q,2),T=F[0],S=F[1],P=(0,t.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:g},e),{},{ref:(0,s.lq)(a,(function(e){e&&R(!0)}))})}),[g]),C=(0,t.useCallback)((function(){var e,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},n),{},{ref:i,"data-focus":(0,u.PB)(T),"data-disabled":(0,u.PB)(c),"data-invalid":(0,u.PB)(d),"data-readonly":(0,u.PB)(m),id:null!==(e=n.id)&&void 0!==e?e:Z,htmlFor:null!==(a=n.htmlFor)&&void 0!==a?a:h})}),[h,c,T,d,m,Z]),B=(0,t.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,s.lq)(a,(function(e){e&&N(!0)})),"aria-live":"polite"})}),[b]),D=(0,t.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),p),{},{ref:a,role:"group"})}),[p]),O=(0,t.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:a,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!d,isReadOnly:!!m,isDisabled:!!c,isFocused:!!T,onFocus:S.on,onBlur:S.off,hasFeedbackText:E,setHasFeedbackText:N,hasHelpText:k,setHasHelpText:R,id:h,labelId:Z,feedbackId:b,helpTextId:g,htmlProps:p,getHelpTextProps:P,getErrorMessageProps:B,getRootProps:D,getLabelProps:C,getRequiredIndicatorProps:O}}((0,c.Lr)(e)),f=m.getRootProps,h=(m.htmlProps,(0,i.Z)(m,p)),Z=(0,u.cx)("chakra-form-control",e.className);return t.createElement(x,{value:h},t.createElement(y,{value:n},t.createElement(d.m$.div,(0,r.Z)((0,r.Z)({},f({},a)),{},{className:Z,__css:n.container}))))}));u.Ts&&(k.displayName="FormControl");var R=(0,d.Gp)((function(e,a){var n=I(),i=_(),l=(0,u.cx)("chakra-form__helper-text",e.className);return t.createElement(d.m$.div,(0,r.Z)((0,r.Z)({},null==n?void 0:n.getHelpTextProps(e,a)),{},{__css:i.helperText,className:l}))}));function q(e){var a=F(e),n=a.isDisabled,l=a.isInvalid,t=a.isReadOnly,o=a.isRequired,s=(0,i.Z)(a,f);return(0,r.Z)((0,r.Z)({},s),{},{disabled:n,readOnly:t,required:o,"aria-invalid":(0,u.Qm)(l),"aria-required":(0,u.Qm)(o),"aria-readonly":(0,u.Qm)(t)})}function F(e){var a,n,l,t=I(),o=e.id,s=e.disabled,d=e.readOnly,c=e.required,m=e.isRequired,v=e.isInvalid,p=e.isReadOnly,f=e.isDisabled,Z=e.onFocus,b=e.onBlur,g=(0,i.Z)(e,h),y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&y.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&y.push(t.helpTextId),(0,r.Z)((0,r.Z)({},g),{},{"aria-describedby":y.join(" ")||void 0,id:null!==o&&void 0!==o?o:null==t?void 0:t.id,isDisabled:null!==(a=null!==s&&void 0!==s?s:f)&&void 0!==a?a:null==t?void 0:t.isDisabled,isReadOnly:null!==(n=null!==d&&void 0!==d?d:p)&&void 0!==n?n:null==t?void 0:t.isReadOnly,isRequired:null!==(l=null!==c&&void 0!==c?c:m)&&void 0!==l?l:null==t?void 0:t.isRequired,isInvalid:null!==v&&void 0!==v?v:null==t?void 0:t.isInvalid,onFocus:(0,u.v0)(null==t?void 0:t.onFocus,Z),onBlur:(0,u.v0)(null==t?void 0:t.onBlur,b)})}u.Ts&&(R.displayName="FormHelperText");var T=(0,s.kr)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),S=(0,l.Z)(T,2),P=S[0],C=S[1],B=(0,d.Gp)((function(e,a){var n=(0,d.jC)("FormError",e),i=(0,c.Lr)(e),l=I();return(null==l?void 0:l.isInvalid)?t.createElement(P,{value:n},t.createElement(d.m$.div,(0,r.Z)((0,r.Z)({},null==l?void 0:l.getErrorMessageProps(i,a)),{},{className:(0,u.cx)("chakra-form__error-message",e.className),__css:(0,r.Z)({display:"flex",alignItems:"center"},n.text)}))):null}));u.Ts&&(B.displayName="FormErrorMessage");var D=(0,d.Gp)((function(e,a){var n=C(),i=I();if(!(null==i?void 0:i.isInvalid))return null;var l=(0,u.cx)("chakra-form__error-icon",e.className);return t.createElement(m.ZP,(0,r.Z)((0,r.Z)({ref:a,"aria-hidden":!0},e),{},{__css:n.icon,className:l}),t.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));u.Ts&&(D.displayName="FormErrorIcon");var O=(0,d.Gp)((function(e,a){var n,l=(0,d.mq)("FormLabel",e),o=(0,c.Lr)(e),s=(o.className,o.children),m=o.requiredIndicator,v=void 0===m?t.createElement(M,null):m,p=o.optionalIndicator,f=void 0===p?null:p,h=(0,i.Z)(o,Z),b=I(),g=null!==(n=null==b?void 0:b.getLabelProps(h,a))&&void 0!==n?n:(0,r.Z)({ref:a},h);return t.createElement(d.m$.label,(0,r.Z)((0,r.Z)({},g),{},{className:(0,u.cx)("chakra-form__label",o.className),__css:(0,r.Z)({display:"block",textAlign:"start"},l)}),s,(null==b?void 0:b.isRequired)?v:f)}));u.Ts&&(O.displayName="FormLabel");var M=(0,d.Gp)((function(e,a){var n=I(),i=_();if(!(null==n?void 0:n.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return t.createElement(d.m$.span,(0,r.Z)((0,r.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,a)),{},{__css:i.requiredIndicator,className:l}))}));u.Ts&&(M.displayName="RequiredIndicator")}}]);
//# sourceMappingURL=657.3af8f9c4.chunk.js.map