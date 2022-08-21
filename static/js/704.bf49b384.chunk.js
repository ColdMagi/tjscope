"use strict";(self.webpackChunktjscope=self.webpackChunktjscope||[]).push([[704],{704:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(3324),r=n(4942),i=n(1413),l=n(4925),s=n(2791),u=n(5863),d=n(3544),p=n(2965),o=n(6943),c=n(9642),m=["htmlSize"],f=["children","className"],h=["placement"],v=["placement"],g=["className"],I=["className"],Z=(0,d.Gp)((function(e,t){var n=e.htmlSize,a=(0,l.Z)(e,m),r=(0,d.jC)("Input",a),c=(0,p.Lr)(a),f=(0,u.Yp)(c),h=(0,o.cx)("chakra-input",e.className);return s.createElement(d.m$.input,(0,i.Z)((0,i.Z)({size:n},f),{},{__css:r.field,ref:t,className:h}))}));o.Ts&&(Z.displayName="Input"),Z.id="Input";var y=(0,c.kr)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),E=(0,a.Z)(y,2),N=E[0],x=E[1],S=(0,d.Gp)((function(e,t){var n=(0,d.jC)("Input",e),a=(0,p.Lr)(e),r=a.children,u=a.className,m=(0,l.Z)(a,f),h=(0,o.cx)("chakra-input__group",u),v={},g=(0,c.WR)(r),I=n.field;g.forEach((function(e){if(n){var t,a;if(I&&"InputLeftElement"===e.type.id)v.paddingStart=null!==(t=I.height)&&void 0!==t?t:I.h;if(I&&"InputRightElement"===e.type.id)v.paddingEnd=null!==(a=I.height)&&void 0!==a?a:I.h;"InputRightAddon"===e.type.id&&(v.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(v.borderStartRadius=0)}}));var Z=g.map((function(t){var n,a,r=(0,o.YU)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,s.cloneElement)(t,r):(0,s.cloneElement)(t,Object.assign(r,v,t.props))}));return s.createElement(d.m$.div,(0,i.Z)({className:h,ref:t,__css:{width:"100%",display:"flex",position:"relative"}},m),s.createElement(N,{value:n},Z))}));o.Ts&&(S.displayName="InputGroup");var b={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},_=(0,d.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),z=(0,d.Gp)((function(e,t){var n,a=e.placement,r=void 0===a?"left":a,u=(0,l.Z)(e,h),d=null!==(n=b[r])&&void 0!==n?n:{},p=x();return s.createElement(_,(0,i.Z)((0,i.Z)({ref:t},u),{},{__css:(0,i.Z)((0,i.Z)({},p.addon),d)}))}));o.Ts&&(z.displayName="InputAddon");var k=(0,d.Gp)((function(e,t){return s.createElement(z,(0,i.Z)((0,i.Z)({ref:t,placement:"left"},e),{},{className:(0,o.cx)("chakra-input__left-addon",e.className)}))}));o.Ts&&(k.displayName="InputLeftAddon"),k.id="InputLeftAddon";var G=(0,d.Gp)((function(e,t){return s.createElement(z,(0,i.Z)((0,i.Z)({ref:t,placement:"right"},e),{},{className:(0,o.cx)("chakra-input__right-addon",e.className)}))}));o.Ts&&(G.displayName="InputRightAddon"),G.id="InputRightAddon";var j=(0,d.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),R=(0,d.Gp)((function(e,t){var n,a,u,d=e.placement,p=void 0===d?"left":d,o=(0,l.Z)(e,v),c=x(),m=c.field,f="left"===p?"insetStart":"insetEnd",h=(0,i.Z)((u={},(0,r.Z)(u,f,"0"),(0,r.Z)(u,"width",null!==(n=null==m?void 0:m.height)&&void 0!==n?n:null==m?void 0:m.h),(0,r.Z)(u,"height",null!==(a=null==m?void 0:m.height)&&void 0!==a?a:null==m?void 0:m.h),(0,r.Z)(u,"fontSize",null==m?void 0:m.fontSize),u),c.element);return s.createElement(j,(0,i.Z)({ref:t,__css:h},o))}));R.id="InputElement",o.Ts&&(R.displayName="InputElement");var w=(0,d.Gp)((function(e,t){var n=e.className,a=(0,l.Z)(e,g),r=(0,o.cx)("chakra-input__left-element",n);return s.createElement(R,(0,i.Z)({ref:t,placement:"left",className:r},a))}));w.id="InputLeftElement",o.Ts&&(w.displayName="InputLeftElement");var C=(0,d.Gp)((function(e,t){var n=e.className,a=(0,l.Z)(e,I),r=(0,o.cx)("chakra-input__right-element",n);return s.createElement(R,(0,i.Z)({ref:t,placement:"right",className:r},a))}));C.id="InputRightElement",o.Ts&&(C.displayName="InputRightElement");var A=n(5777),L=n(6871),T=n(3859),$=n(184);var J=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],r=t[1],i=!!(0,T.s)(n),l=(0,L.s0)();return(0,$.jsxs)(S,{mt:"4",px:"2",size:"lg",children:[(0,$.jsx)(Z,{pr:"6.2rem",placeholder:"https://tjournal.ru/u/490078",size:"lg",onChange:function(e){return r(e.target.value)}}),(0,$.jsx)(C,{width:"6.7rem",children:(0,$.jsx)(A.zx,{h:"2.5rem",size:"sm",disabled:!i,onClick:function(){l("/scope?id=".concat((0,T.s)(n)))},children:"Scooope"})})]})}},3859:function(e,t,n){n.d(t,{s:function(){return a},w:function(){return r}});var a=function(e){return+(/(?:u\/)?(\d+)/.exec(e||"")||[])[1]||0},r=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}}}]);
//# sourceMappingURL=704.bf49b384.chunk.js.map