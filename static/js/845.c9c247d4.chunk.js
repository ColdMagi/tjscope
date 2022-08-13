"use strict";(self.webpackChunktjscope=self.webpackChunktjscope||[]).push([[845],{8845:function(e,n,a){a.r(n),a.d(n,{default:function(){return Se}});var t=a(9439),r=a(4942),i=a(1413),l=a(4925),s=a(2791),o=a(1197),d=a(9642),c=a(3544),u=a(3803),m=a(7697),p=a(9894),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],h=["isDisabled","isInvalid","isReadOnly","isRequired"],Z=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"],g=["className","children","requiredIndicator","optionalIndicator"],b=(0,d.kr)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,t.Z)(b,2),E=y[0],I=y[1],N=(0,d.kr)({strict:!1,name:"FormControlContext"}),_=(0,t.Z)(N,2),x=_[0],S=_[1];var k=(0,c.Gp)((function(e,n){var a=(0,c.jC)("Form",e),r=function(e){var n=e.id,a=e.isRequired,r=e.isInvalid,c=e.isDisabled,u=e.isReadOnly,p=(0,l.Z)(e,v),f=(0,o.Me)(),h=n||"field-".concat(f),Z="".concat(h,"-label"),g="".concat(h,"-feedback"),b="".concat(h,"-helptext"),y=(0,s.useState)(!1),E=(0,t.Z)(y,2),I=E[0],N=E[1],_=(0,s.useState)(!1),x=(0,t.Z)(_,2),S=x[0],k=x[1],R=(0,o.kt)(),T=(0,t.Z)(R,2),C=T[0],q=T[1],F=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,d.lq)(n,(function(e){e&&k(!0)}))})}),[b]),G=(0,s.useCallback)((function(){var e,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},a),{},{ref:t,"data-focus":(0,m.PB)(C),"data-disabled":(0,m.PB)(c),"data-invalid":(0,m.PB)(r),"data-readonly":(0,m.PB)(u),id:null!==(e=a.id)&&void 0!==e?e:Z,htmlFor:null!==(n=a.htmlFor)&&void 0!==n?n:h})}),[h,c,C,r,u,Z]),P=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:g},e),{},{ref:(0,d.lq)(n,(function(e){e&&N(!0)})),"aria-live":"polite"})}),[g]),B=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),p),{},{ref:n,role:"group"})}),[p]),L=(0,s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!r,isReadOnly:!!u,isDisabled:!!c,isFocused:!!C,onFocus:q.on,onBlur:q.off,hasFeedbackText:I,setHasFeedbackText:N,hasHelpText:S,setHasHelpText:k,id:h,labelId:Z,feedbackId:g,helpTextId:b,htmlProps:p,getHelpTextProps:F,getErrorMessageProps:P,getRootProps:B,getLabelProps:G,getRequiredIndicatorProps:L}}((0,u.Lr)(e)),p=r.getRootProps,h=(r.htmlProps,(0,l.Z)(r,f)),Z=(0,m.cx)("chakra-form-control",e.className);return s.createElement(x,{value:h},s.createElement(E,{value:a},s.createElement(c.m$.div,(0,i.Z)((0,i.Z)({},p({},n)),{},{className:Z,__css:a.container}))))}));m.Ts&&(k.displayName="FormControl");var R=(0,c.Gp)((function(e,n){var a=S(),t=I(),r=(0,m.cx)("chakra-form__helper-text",e.className);return s.createElement(c.m$.div,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getHelpTextProps(e,n)),{},{__css:t.helperText,className:r}))}));function T(e){var n=function(e){var n,a,t,r=S(),s=e.id,o=e.disabled,d=e.readOnly,c=e.required,u=e.isRequired,p=e.isInvalid,v=e.isReadOnly,f=e.isDisabled,h=e.onFocus,g=e.onBlur,b=(0,l.Z)(e,Z),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&y.push(r.feedbackId);(null==r?void 0:r.hasHelpText)&&y.push(r.helpTextId);return(0,i.Z)((0,i.Z)({},b),{},{"aria-describedby":y.join(" ")||void 0,id:null!==s&&void 0!==s?s:null==r?void 0:r.id,isDisabled:null!==(n=null!==o&&void 0!==o?o:f)&&void 0!==n?n:null==r?void 0:r.isDisabled,isReadOnly:null!==(a=null!==d&&void 0!==d?d:v)&&void 0!==a?a:null==r?void 0:r.isReadOnly,isRequired:null!==(t=null!==c&&void 0!==c?c:u)&&void 0!==t?t:null==r?void 0:r.isRequired,isInvalid:null!==p&&void 0!==p?p:null==r?void 0:r.isInvalid,onFocus:(0,m.v0)(null==r?void 0:r.onFocus,h),onBlur:(0,m.v0)(null==r?void 0:r.onBlur,g)})}(e),a=n.isDisabled,t=n.isInvalid,r=n.isReadOnly,s=n.isRequired,o=(0,l.Z)(n,h);return(0,i.Z)((0,i.Z)({},o),{},{disabled:a,readOnly:r,required:s,"aria-invalid":(0,m.Qm)(t),"aria-required":(0,m.Qm)(s),"aria-readonly":(0,m.Qm)(r)})}m.Ts&&(R.displayName="FormHelperText");var C=(0,d.kr)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),q=(0,t.Z)(C,2),F=q[0],G=q[1],P=(0,c.Gp)((function(e,n){var a=(0,c.jC)("FormError",e),t=(0,u.Lr)(e),r=S();return(null==r?void 0:r.isInvalid)?s.createElement(F,{value:a},s.createElement(c.m$.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getErrorMessageProps(t,n)),{},{className:(0,m.cx)("chakra-form__error-message",e.className),__css:(0,i.Z)({display:"flex",alignItems:"center"},a.text)}))):null}));m.Ts&&(P.displayName="FormErrorMessage");var B=(0,c.Gp)((function(e,n){var a=G(),t=S();if(!(null==t?void 0:t.isInvalid))return null;var r=(0,m.cx)("chakra-form__error-icon",e.className);return s.createElement(p.ZP,(0,i.Z)((0,i.Z)({ref:n,"aria-hidden":!0},e),{},{__css:a.icon,className:r}),s.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));m.Ts&&(B.displayName="FormErrorIcon");var L=(0,c.Gp)((function(e,n){var a,t=(0,c.mq)("FormLabel",e),r=(0,u.Lr)(e),o=(r.className,r.children),d=r.requiredIndicator,p=void 0===d?s.createElement(z,null):d,v=r.optionalIndicator,f=void 0===v?null:v,h=(0,l.Z)(r,g),Z=S(),b=null!==(a=null==Z?void 0:Z.getLabelProps(h,n))&&void 0!==a?a:(0,i.Z)({ref:n},h);return s.createElement(c.m$.label,(0,i.Z)((0,i.Z)({},b),{},{className:(0,m.cx)("chakra-form__label",r.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t)}),o,(null==Z?void 0:Z.isRequired)?p:f)}));m.Ts&&(L.displayName="FormLabel");var z=(0,c.Gp)((function(e,n){var a=S(),t=I();if(!(null==a?void 0:a.isRequired))return null;var r=(0,m.cx)("chakra-form__required-indicator",e.className);return s.createElement(c.m$.span,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,n)),{},{__css:t.requiredIndicator,className:r}))}));m.Ts&&(z.displayName="RequiredIndicator");var A=["htmlSize"],j=["children","className"],D=["placement"],$=["placement"],w=["className"],O=["className"],M=(0,c.Gp)((function(e,n){var a=e.htmlSize,t=(0,l.Z)(e,A),r=(0,c.jC)("Input",t),o=T((0,u.Lr)(t)),d=(0,m.cx)("chakra-input",e.className);return s.createElement(c.m$.input,(0,i.Z)((0,i.Z)({size:a},o),{},{__css:r.field,ref:n,className:d}))}));m.Ts&&(M.displayName="Input"),M.id="Input";var H=(0,d.kr)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),Q=(0,t.Z)(H,2),U=Q[0],V=Q[1],W=(0,c.Gp)((function(e,n){var a=(0,c.jC)("Input",e),t=(0,u.Lr)(e),r=t.children,o=t.className,p=(0,l.Z)(t,j),v=(0,m.cx)("chakra-input__group",o),f={},h=(0,d.WR)(r),Z=a.field;h.forEach((function(e){if(a){var n,t;if(Z&&"InputLeftElement"===e.type.id)f.paddingStart=null!==(n=Z.height)&&void 0!==n?n:Z.h;if(Z&&"InputRightElement"===e.type.id)f.paddingEnd=null!==(t=Z.height)&&void 0!==t?t:Z.h;"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0)}}));var g=h.map((function(n){var a,t,r=(0,m.YU)({size:(null==(a=n.props)?void 0:a.size)||e.size,variant:(null==(t=n.props)?void 0:t.variant)||e.variant});return"Input"!==n.type.id?(0,s.cloneElement)(n,r):(0,s.cloneElement)(n,Object.assign(r,f,n.props))}));return s.createElement(c.m$.div,(0,i.Z)({className:v,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},p),s.createElement(U,{value:a},g))}));m.Ts&&(W.displayName="InputGroup");var Y={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},J=(0,c.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),K=(0,c.Gp)((function(e,n){var a,t=e.placement,r=void 0===t?"left":t,o=(0,l.Z)(e,D),d=null!==(a=Y[r])&&void 0!==a?a:{},c=V();return s.createElement(J,(0,i.Z)((0,i.Z)({ref:n},o),{},{__css:(0,i.Z)((0,i.Z)({},c.addon),d)}))}));m.Ts&&(K.displayName="InputAddon");var X=(0,c.Gp)((function(e,n){return s.createElement(K,(0,i.Z)((0,i.Z)({ref:n,placement:"left"},e),{},{className:(0,m.cx)("chakra-input__left-addon",e.className)}))}));m.Ts&&(X.displayName="InputLeftAddon"),X.id="InputLeftAddon";var ee=(0,c.Gp)((function(e,n){return s.createElement(K,(0,i.Z)((0,i.Z)({ref:n,placement:"right"},e),{},{className:(0,m.cx)("chakra-input__right-addon",e.className)}))}));m.Ts&&(ee.displayName="InputRightAddon"),ee.id="InputRightAddon";var ne=(0,c.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),ae=(0,c.Gp)((function(e,n){var a,t,o,d=e.placement,c=void 0===d?"left":d,u=(0,l.Z)(e,$),m=V(),p=m.field,v="left"===c?"insetStart":"insetEnd",f=(0,i.Z)((o={},(0,r.Z)(o,v,"0"),(0,r.Z)(o,"width",null!==(a=null==p?void 0:p.height)&&void 0!==a?a:null==p?void 0:p.h),(0,r.Z)(o,"height",null!==(t=null==p?void 0:p.height)&&void 0!==t?t:null==p?void 0:p.h),(0,r.Z)(o,"fontSize",null==p?void 0:p.fontSize),o),m.element);return s.createElement(ne,(0,i.Z)({ref:n,__css:f},u))}));ae.id="InputElement",m.Ts&&(ae.displayName="InputElement");var te=(0,c.Gp)((function(e,n){var a=e.className,t=(0,l.Z)(e,w),r=(0,m.cx)("chakra-input__left-element",a);return s.createElement(ae,(0,i.Z)({ref:n,placement:"left",className:r},t))}));te.id="InputLeftElement",m.Ts&&(te.displayName="InputLeftElement");var re=(0,c.Gp)((function(e,n){var a=e.className,t=(0,l.Z)(e,O),r=(0,m.cx)("chakra-input__right-element",a);return s.createElement(ae,(0,i.Z)({ref:n,placement:"right",className:r},t))}));re.id="InputRightElement",m.Ts&&(re.displayName="InputRightElement");var ie=a(6198),le=a.n(ie),se=a(9194),oe=["children","className"],de=["label","placement","spacing","children","className","__css"],ce=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],ue=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],me=["icon","children","isRound","aria-label"],pe=(0,d.kr)({strict:!1,name:"ButtonGroupContext"}),ve=(0,t.Z)(pe,2),fe=ve[0],he=ve[1];function Ze(e){var n=e.children,a=e.className,t=(0,l.Z)(e,oe),r=(0,s.isValidElement)(n)?(0,s.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,m.cx)("chakra-button__icon",a);return s.createElement(c.m$.span,(0,i.Z)((0,i.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},t),{},{className:o}),r)}function ge(e){var n=e.label,a=e.placement,t=e.spacing,o=void 0===t?"0.5rem":t,d=e.children,u=void 0===d?s.createElement(se.$,{color:"currentColor",width:"1em",height:"1em"}):d,p=e.className,v=e.__css,f=(0,l.Z)(e,de),h=(0,m.cx)("chakra-button__spinner",p),Z="start"===a?"marginEnd":"marginStart",g=(0,s.useMemo)((function(){var e;return(0,i.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,r.Z)(e,Z,n?o:0),(0,r.Z)(e,"fontSize","1em"),(0,r.Z)(e,"lineHeight","normal"),e),v)}),[v,n,Z,o]);return s.createElement(c.m$.div,(0,i.Z)((0,i.Z)({className:h},f),{},{__css:g}),u)}m.Ts&&(Ze.displayName="ButtonIcon"),m.Ts&&(ge.displayName="ButtonSpinner");var be=(0,c.Gp)((function(e,n){var a=he(),r=(0,c.mq)("Button",(0,i.Z)((0,i.Z)({},a),e)),d=(0,u.Lr)(e),p=d.isDisabled,v=void 0===p?null==a?void 0:a.isDisabled:p,f=d.isLoading,h=d.isActive,Z=d.children,g=d.leftIcon,b=d.rightIcon,y=d.loadingText,E=d.iconSpacing,I=void 0===E?"0.5rem":E,N=d.type,_=d.spinner,x=d.spinnerPlacement,S=void 0===x?"start":x,k=d.className,R=d.as,T=(0,l.Z)(d,ce),C=(0,s.useMemo)((function(){var e,n=le()({},null!==(e=null==r?void 0:r._focus)&&void 0!==e?e:{},{zIndex:1});return(0,i.Z)((0,i.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},r),!!a&&{_focus:n})}),[r,a]),q=function(e){var n=(0,s.useState)(!e),a=(0,t.Z)(n,2),r=a[0],i=a[1];return{ref:(0,s.useCallback)((function(e){e&&i("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(R),F=q.ref,G=q.type,P={rightIcon:b,leftIcon:g,iconSpacing:I,children:Z};return s.createElement(c.m$.button,(0,i.Z)({disabled:v||f,ref:(0,o.qq)(n,F),as:R,type:null!==N&&void 0!==N?N:G,"data-active":(0,m.PB)(h),"data-loading":(0,m.PB)(f),__css:C,className:(0,m.cx)("chakra-button",k)},T),f&&"start"===S&&s.createElement(ge,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:I},_),f?y||s.createElement(c.m$.span,{opacity:0},s.createElement(ye,(0,i.Z)({},P))):s.createElement(ye,(0,i.Z)({},P)),f&&"end"===S&&s.createElement(ge,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:I},_))}));function ye(e){var n=e.leftIcon,a=e.rightIcon,t=e.children,r=e.iconSpacing;return s.createElement(s.Fragment,null,n&&s.createElement(Ze,{marginEnd:r},n),t,a&&s.createElement(Ze,{marginStart:r},a))}m.Ts&&(be.displayName="Button");var Ee=(0,c.Gp)((function(e,n){var a=e.size,t=e.colorScheme,r=e.variant,o=e.className,d=e.spacing,u=void 0===d?"0.5rem":d,p=e.isAttached,v=e.isDisabled,f=(0,l.Z)(e,ue),h=(0,m.cx)("chakra-button__group",o),Z=(0,s.useMemo)((function(){return{size:a,colorScheme:t,variant:r,isDisabled:v}}),[a,t,r,v]),g={display:"inline-flex"};return g=p?(0,i.Z)((0,i.Z)({},g),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,i.Z)((0,i.Z)({},g),{},{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),s.createElement(fe,{value:Z},s.createElement(c.m$.div,(0,i.Z)({ref:n,role:"group",__css:g,className:h,"data-attached":p?"":void 0},f)))}));m.Ts&&(Ee.displayName="ButtonGroup");var Ie=(0,c.Gp)((function(e,n){var a=e.icon,t=e.children,r=e.isRound,o=e["aria-label"],d=(0,l.Z)(e,me),c=a||t,u=(0,s.isValidElement)(c)?(0,s.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return s.createElement(be,(0,i.Z)({padding:"0",borderRadius:r?"full":void 0,ref:n,"aria-label":o},d),u)}));m.Ts&&(Ie.displayName="IconButton");var Ne=a(6871),_e=a(3859),xe=a(184);var Se=function(){var e=(0,s.useState)(""),n=(0,t.Z)(e,2),a=n[0],r=n[1],i=!!(0,_e.s)(a),l=(0,Ne.s0)();return(0,xe.jsxs)(W,{mt:"4",size:"lg",children:[(0,xe.jsx)(M,{pr:"6.2rem",placeholder:"https://tjournal.ru/",size:"lg",onChange:function(e){return r(e.target.value)}}),(0,xe.jsx)(re,{width:"6rem",children:(0,xe.jsx)(be,{h:"2.5rem",size:"sm",disabled:!i,onClick:function(){l("/scope?id=".concat((0,_e.s)(a)))},children:"Scooope"})})]})}},3859:function(e,n,a){a.d(n,{s:function(){return t}});var t=function(e){return+(/(?:u\/)?(\d+)/.exec(e||"")||[])[1]||0}}}]);
//# sourceMappingURL=845.c9c247d4.chunk.js.map