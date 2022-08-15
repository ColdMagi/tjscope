"use strict";(self.webpackChunktjscope=self.webpackChunktjscope||[]).push([[874],{1874:function(e,n,s){s.r(n),s.d(n,{default:function(){return $}});var r=s(1413),i=s(9439),t=s(3433),l=s(7762),d=s(9712),a=s(5443),u=s(1197),o=s(7549),c=s(2157),x=s(1089),h=s(7552),j=s(184);var v=function(e){var n=e.value;return(0,j.jsx)(j.Fragment,{children:n?"\u0414\u0430":"\u041d\u0435\u0442"})},m=s(2804),f=function(e){var n=e.count,s=e.summ,r=s,i=n-r;return s<0&&(i=(r=Math.abs(n-(n-s)/2))+-1*s),{minus:i,plus:r}};var p=function(e){var n=e.comment,s=n.author,r=s.avatar_url,i=s.name,t=n.date,l=n.likes,a=l.count,u=l.summ,o=n.id,x=n.entry.url,h=n.html,v=f({count:a,summ:u}),p=v.minus,g=v.plus;return(0,j.jsxs)(d.gC,{align:"flex-start",as:"a",href:x+"?comment=".concat(o),rel:"nofollow noopener noreferrer",target:"_blank",p:"3",shadow:"md",borderWidth:"1px",rounded:"md",minW:"100%",spacing:3,children:[(0,j.jsxs)(d.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,j.jsxs)(d.Ug,{children:[(0,j.jsx)(c.qE,{size:"xs",src:r,name:i}),(0,j.jsx)(d.X6,{size:"sm",children:i})]}),(0,j.jsx)(d.xv,{color:"gray.400",as:"time",children:(0,m.Z)(1e3*t,"dd.LL.yy")})]}),(0,j.jsx)(d.gC,{pl:"8",children:(0,j.jsx)(d.xv,{dangerouslySetInnerHTML:{__html:h}})}),(0,j.jsxs)(d.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,j.jsx)("span",{}),(0,j.jsxs)(d.Ug,{children:[(0,j.jsx)(d.xv,{color:"red.300",children:p}),(0,j.jsx)(d.xv,{color:"green.300",children:g})]})]})]})},g=s(4925),b=s(4828),y=["url","hitsCount","intro","date","likes","cover","subsite","title","blocks"];function k(e){var n=e.data.markdown;return(0,j.jsx)(d.xu,{p:"3",rounded:"lg",borderColor:"gray.300",borderWidth:"1px",children:n})}var Z=function(e){var n=e.entry,s=n.url,i=n.hitsCount,t=n.intro,l=n.date,a=n.likes,u=a.count,o=a.summ,x=n.cover,h=n.subsite,v=h.avatar_url,p=h.name,Z=n.title,w=n.blocks,C=((0,g.Z)(n,y),f({count:u,summ:o})),N=C.minus,z=C.plus;return(0,j.jsxs)(d.gC,{align:"flex-start",as:"a",href:s,rel:"nofollow noopener noreferrer",target:"_blank",p:"3",shadow:"md",borderWidth:"1px",rounded:"md",minW:"100%",spacing:3,children:[(0,j.jsxs)(d.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,j.jsxs)(d.Ug,{children:[(0,j.jsx)(c.qE,{size:"xs",src:v,name:p}),(0,j.jsx)(d.X6,{size:"sm",children:p})]}),(0,j.jsx)(d.xv,{color:"gray.400",as:"time",children:(0,m.Z)(1e3*l,"dd.LL.yy")})]}),(0,j.jsxs)(d.gC,{pl:"8",children:[Z&&(0,j.jsx)(d.X6,{size:"sm",children:Z}),(0,j.jsx)(d.xv,{children:t}),x&&(0,j.jsx)(b.Ee,{src:x.thumbnailUrl,alt:"",objectFit:"contain",pointerEvents:"none"}),w&&w[0]&&"tweet"===w[0].type&&(0,j.jsx)(k,(0,r.Z)({},w[0]))]}),(0,j.jsxs)(d.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,j.jsxs)(d.xv,{pl:"8",color:"gray.400",children:[i," \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"]}),(0,j.jsxs)(d.Ug,{children:[(0,j.jsx)(d.xv,{color:"red.300",children:N}),(0,j.jsx)(d.xv,{color:"green.300",children:z})]})]})]})};var w=function(e){var n=e.label,s=void 0===n?"\u0420\u0435\u0439\u0442\u0438\u043d\u0433":n,r=e.children;return(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:s}),(0,j.jsx)(a.Jf,{color:"gray.500",children:r})]})},C=s(811),N=s(4165),z=s(5861),W=s(2791),_="https://api.tjournal.ru/v2.31",O=(0,W.createContext)(_),M=function(){return(0,W.useContext)(O)};function T(e,n){var s=(0,W.useRef)({}),t=(0,W.useRef)(!1),l={error:void 0,data:void 0},d=(0,W.useReducer)((function(e,n){switch(n.type){case"loading":return(0,r.Z)({},l);case"fetched":return(0,r.Z)((0,r.Z)({},l),{},{data:n.payload});case"error":return(0,r.Z)((0,r.Z)({},l),{},{error:n.payload});default:return e}}),l),a=(0,i.Z)(d,2),u=a[0],o=a[1];return(0,W.useEffect)((function(){if(e&&!e.includes("undefined")){t.current=!1;var r=function(){var r=(0,z.Z)((0,N.Z)().mark((function r(){var i,l;return(0,N.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o({type:"loading"}),!s.current[e]){r.next=4;break}return o({type:"fetched",payload:s.current[e]}),r.abrupt("return");case 4:return r.prev=4,r.next=7,fetch(e,n);case 7:if((i=r.sent).ok){r.next=10;break}throw new Error(i.statusText);case 10:return r.next=12,i.json();case 12:if(l=r.sent,s.current[e]=l,!t.current){r.next=16;break}return r.abrupt("return");case 16:o({type:"fetched",payload:l}),r.next=24;break;case 19:if(r.prev=19,r.t0=r.catch(4),!t.current){r.next=23;break}return r.abrupt("return");case 23:o({type:"error",payload:r.t0});case 24:case"end":return r.stop()}}),r,null,[[4,19]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){t.current=!0}}}),[e]),u}function L(e,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2.31",r=M();return T(e?"".concat(r.replace("2.31",s)).concat(e):e,n)}function J(e,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2.31",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,d=(0,W.useState)({result:[]}),a=(0,i.Z)(d,2),u=a[0],o=a[1],c=(0,W.useState)(0),x=(0,i.Z)(c,2),h=x[0],j=x[1],v=L(e+"?count=".concat(l,"&offset=").concat(h),n,s),m=v.data;return(0,W.useEffect)((function(){if(m&&(o((function(e){return(0,r.Z)((0,r.Z)((0,r.Z)({},e),m),{},{result:[].concat((0,t.Z)(e.result),(0,t.Z)(m.result))})})),m.result.length>=l)){var e=setTimeout((function(){return j((function(e){return e+l}))}),2e3);return function(){return clearTimeout(e)}}}),[m,l]),u}var E=s(9683),U=s(3504),D=s(3859),X=s(2204);function S(e){var n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={0:0,1:0,2:0,3:0,4:0,5:0,6:0},d=(0,r.Z)((0,r.Z)({},i),{},{7:0,8:0,9:0,10:0,11:0}),a={years:{},months:(0,r.Z)({},d),days:(0,r.Z)({},i),hours:(0,r.Z)((0,r.Z)({},i),{},{12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0}),ratingByEntity:{}},u=(0,l.Z)((null===e||void 0===e?void 0:e.result)||[]);try{for(u.s();!(n=u.n()).done;){var o=n.value,c=new Date(1e3*o.date),x=c.getUTCFullYear(),h=c.getUTCMonth(),j=c.getUTCDay(),v=c.getUTCHours();a.years[x]=(a.years[x]||0)+1,a.months[h]=(a.months[h]||0)+1,a.days[j]=(a.days[j]||0)+1,a.hours[v]=(a.hours[v]||0)+1,a.ratingByEntity[o.id]=f(o.likes)}}catch(p){u.e(p)}finally{u.f()}var m=(0,t.Z)(Object.values(a.ratingByEntity));return{years:{datasets:[(0,r.Z)({data:(0,t.Z)(Object.values(a.years))},s)],labels:(0,t.Z)(Object.keys(a.years))},months:{datasets:[(0,r.Z)({data:(0,t.Z)(Object.values(a.months))},s)],labels:(0,t.Z)((0,D.w)())},days:{datasets:[(0,r.Z)({data:(0,t.Z)(Object.values(a.days))},s)],labels:["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"]},hours:{datasets:[(0,r.Z)({data:(0,t.Z)(Object.values(a.hours))},s)],labels:(0,t.Z)(Object.keys(a.hours))},ratingByEntity:{datasets:[{data:(0,t.Z)(m.map((function(e){return e.minus}))),label:"\u041e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435",backgroundColor:"rgba(229,62,62, 0.2)",borderColor:"rgb(229,62,62)",borderWidth:1},{data:(0,t.Z)(m.map((function(e){return e.plus}))),label:"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",backgroundColor:"rgba(72,187,120, 0.2)",borderColor:"rgb(72,187,120)",borderWidth:1}],labels:(0,t.Z)(Object.keys(a.ratingByEntity))}}}function P(e){var n,s,r,i,t,l,u,o,c,x,h=e.subsite,m=e.entries,f=e.comments;return(0,j.jsxs)(d.gC,{divider:(0,j.jsx)(d.cX,{}),children:[(0,j.jsxs)(d.MI,{columns:{base:2,sm:4},spacing:3,justifyContent:"space-between",w:"100%",children:[(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u041f\u043e\u0441\u0442\u043e\u0432"}),(0,j.jsx)(a.Jf,{children:null!==(n=null!==(s=null===h||void 0===h||null===(r=h.counters)||void 0===r?void 0:r.entries)&&void 0!==s?s:m)&&void 0!==n?n:"N/A"})]}),(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"}),(0,j.jsx)(a.Jf,{children:null!==(i=null!==(t=null===h||void 0===h||null===(l=h.counters)||void 0===l?void 0:l.comments)&&void 0!==t?t:f)&&void 0!==i?i:"N/A"})]}),(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043e\u043a"}),(0,j.jsx)(a.Jf,{children:null!==(u=null===h||void 0===h||null===(o=h.counters)||void 0===o?void 0:o.subscriptions)&&void 0!==u?u:"N/A"})]}),(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"}),(0,j.jsx)(a.Jf,{children:null!==(c=null===h||void 0===h||null===(x=h.counters)||void 0===x?void 0:x.subscribers)&&void 0!==c?c:"N/A"})]})]}),(0,j.jsxs)(d.MI,{columns:2,spacing:3,justifyContent:"space-between",w:"100%",children:[(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"Plus"}),(0,j.jsx)(a.Jf,{children:(0,j.jsx)(v,{value:null===h||void 0===h?void 0:h.isPlus})})]}),(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d"}),(0,j.jsx)(a.Jf,{children:(0,j.jsx)(v,{value:null===h||void 0===h?void 0:h.isVerified})})]})]})]})}function A(e){var n=e.label,s=e.children;return(0,j.jsxs)(d.gC,{align:"flex-start",minW:"100%",children:[(0,j.jsx)(d.X6,{size:"md",children:n}),s]})}function B(e){var n=e.data,s=(0,W.useMemo)((function(){var e,s={rating:0,ratingPlus:0,ratingMinus:0,comments:0,reposts:0,hits:0,mostHits:((null===n||void 0===n?void 0:n.result)||[])[0],mostLiked:((null===n||void 0===n?void 0:n.result)||[])[0],mostDisliked:((null===n||void 0===n?void 0:n.result)||[])[0]},r=(0,l.Z)((null===n||void 0===n?void 0:n.result)||[]);try{for(r.s();!(e=r.n()).done;){var i=e.value,t=f(i.likes),d=t.minus,a=t.plus;s.rating+=a-d,s.ratingPlus+=a,s.ratingMinus+=d,s.comments+=i.commentsCount,s.reposts+=Number(i.isRepost),s.hits+=i.hitsCount;var u=f(s.mostLiked.likes).plus,o=f(s.mostDisliked.likes).minus;i.hitsCount>s.mostHits.hitsCount&&(s.mostHits=i),a>u&&(s.mostLiked=i),d>o&&(s.mostDisliked=i)}}catch(c){r.e(c)}finally{r.f()}return s}),[n]),r=(0,u.Bs)({plugins:{legend:{display:!1}}}),i=(0,u.Bs)({borderColor:"rgb(237,137,54)",backgroundColor:"rgba(237,137,54,0.4)",borderWidth:1}),t=S(n||{},i);return(0,j.jsxs)(o.mQ,{variant:"enclosed",isFitted:!0,w:"100%",children:[(0,j.jsxs)(o.td,{w:"100%",children:[(0,j.jsx)(o.OK,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,j.jsx)(o.OK,{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"})]}),(0,j.jsxs)(o.nP,{w:"100%",children:[(0,j.jsx)(o.x4,{children:(0,j.jsxs)(d.gC,{align:"flex-start",w:"100%",pl:"2",spacing:4,children:[(0,j.jsxs)(d.MI,{columns:{base:2,md:3},spacing:1,justifyContent:"space-between",minW:"100%",children:[(0,j.jsx)(w,{children:s.rating}),(0,j.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043e\u043a [+]",children:s.ratingPlus}),(0,j.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043a\u0438 [-]",children:s.ratingMinus}),(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"}),(0,j.jsx)(a.Jf,{children:s.comments})]}),(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"}),(0,j.jsx)(a.Jf,{children:s.hits})]}),(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u0420\u0435\u043f\u043e\u0441\u0442\u043e\u0432"}),(0,j.jsx)(a.Jf,{children:s.reposts})]})]}),s.mostHits&&(0,j.jsx)(A,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c\u044b\u0439",children:(0,j.jsx)(Z,{entry:s.mostHits})}),s.mostLiked&&(0,j.jsx)(A,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043b\u044e\u0441\u043e\u0432",children:(0,j.jsx)(Z,{entry:s.mostLiked})}),s.mostDisliked&&(0,j.jsx)(A,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432",children:(0,j.jsx)(Z,{entry:s.mostDisliked})})]})}),(0,j.jsx)(o.x4,{children:(0,j.jsx)(I,{data:t,options:r})})]})]})}function F(e){var n=e.data,s=(0,W.useMemo)((function(){var e,s={rating:0,ratingPlus:0,ratingMinus:0,mostLiked:((null===n||void 0===n?void 0:n.result)||[])[0],mostDisliked:((null===n||void 0===n?void 0:n.result)||[])[0]},r=(0,l.Z)((null===n||void 0===n?void 0:n.result)||[]);try{for(r.s();!(e=r.n()).done;){var i=e.value,t=f(i.likes),d=t.plus,a=t.minus;s.rating+=d-a,s.ratingPlus+=d,s.ratingMinus+=a;var u=f(s.mostLiked.likes).plus,o=f(s.mostDisliked.likes).minus;d>u&&(s.mostLiked=i),a>o&&(s.mostDisliked=i)}}catch(c){r.e(c)}finally{r.f()}return s}),[n]),r=(0,u.Bs)({plugins:{legend:{display:!1}}}),i=(0,u.Bs)({borderColor:"rgb(49,130,206)",backgroundColor:"rgba(49,130,206,0.4)",borderWidth:1}),t=S(n||{},i);return(0,j.jsxs)(o.mQ,{variant:"enclosed",isFitted:!0,w:"100%",children:[(0,j.jsxs)(o.td,{children:[(0,j.jsx)(o.OK,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,j.jsx)(o.OK,{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"})]}),(0,j.jsxs)(o.nP,{children:[(0,j.jsx)(o.x4,{children:(0,j.jsxs)(d.gC,{align:"flex-start",w:"100%",pl:"2",spacing:4,children:[(0,j.jsxs)(d.MI,{columns:3,spacing:1,justifyContent:"space-between",minW:"100%",children:[(0,j.jsx)(w,{children:s.rating}),(0,j.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043e\u043a [+]",children:s.ratingPlus}),(0,j.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043a\u0438 [-]",children:s.ratingMinus})]}),s.mostLiked&&(0,j.jsx)(A,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043b\u044e\u0441\u043e\u0432",children:(0,j.jsx)(p,{comment:s.mostLiked})}),s.mostDisliked&&(0,j.jsx)(A,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432",children:(0,j.jsx)(p,{comment:s.mostDisliked})})]})}),(0,j.jsx)(o.x4,{children:(0,j.jsx)(I,{data:t,options:r})})]})]})}function I(e){var n=e.data,s=n.years,r=n.months,i=n.days,t=n.hours,l=n.ratingByEntity,a=e.options;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(d.gC,{w:"100%",children:[(0,j.jsx)(d.X6,{size:"md",children:"\u041f\u043e \u0433\u043e\u0434\u0430\u043c"}),(0,j.jsx)(E.$Q,{data:s,options:a})]}),(0,j.jsxs)(d.gC,{w:"100%",children:[(0,j.jsx)(d.X6,{size:"md",children:"\u041f\u043e \u043c\u0435\u0441\u044f\u0446\u0430\u043c"}),(0,j.jsx)(E.$Q,{data:r,options:a})]}),(0,j.jsxs)(d.gC,{w:"100%",children:[(0,j.jsx)(d.X6,{size:"md",children:"\u041f\u043e \u0434\u043d\u044f\u043c"}),(0,j.jsx)(E.$Q,{data:i,options:a})]}),(0,j.jsxs)(d.gC,{w:"100%",children:[(0,j.jsx)(d.X6,{size:"md",children:"\u041f\u043e \u0447\u0430\u0441\u0430\u043c"}),(0,j.jsx)(E.Fk,{data:t,options:a})]}),(0,j.jsxs)(d.gC,{w:"100%",children:[(0,j.jsx)(d.X6,{size:"md",children:"\u041e\u0446\u0435\u043d\u043a\u0438"}),(0,j.jsx)(E.x1,{data:l})]})]})}function K(e){var n,s=e.source,r=s.plus,i=s.minus;return(0,j.jsxs)(d.Ug,{spacing:2,children:[(0,j.jsx)(d.xv,{fontSize:"16px",as:"span",color:"green.300",children:r}),(0,j.jsx)(d.xv,{fontSize:"16px",as:"span",color:"red.300",children:i}),(0,j.jsx)(d.xv,{fontSize:"16px",as:"span",color:"gray.500",children:null!==(n=r+i)&&void 0!==n?n:"N/A"})]})}function H(e){var n=e.name,s=e.avatar_url,r=e.id,i=e.children,t=e.size,l=void 0===t?"md":t;return(0,j.jsxs)(d.Ug,{as:"a",href:"https://tjournal.ru/u/".concat(r),target:"_blank",children:[(0,j.jsx)(c.qE,{size:l,name:n,src:s}),(0,j.jsx)(d.xv,{fontSize:"md"===l?"18px":"14px",as:"b",maxW:{base:"150px",md:"180px",lg:"200px"},textOverflow:"ellipsis",overflow:"hidden",children:n}),i]})}function Q(e){var n=e.likers;return(0,j.jsx)(x.xJ,{children:(0,j.jsxs)(x.iA,{variant:"simple",size:{base:"sm",md:"md",lg:"lg"},children:[(0,j.jsx)(x.Rn,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043e\u0446\u0435\u043d\u043e\u043a \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c"}),(0,j.jsx)(x.hr,{children:(0,j.jsxs)(x.Tr,{children:[(0,j.jsx)(x.Th,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),(0,j.jsx)(x.Th,{isNumeric:!0,color:"green.300",children:"+"}),(0,j.jsx)(x.Th,{isNumeric:!0,color:"red.300",children:"-"}),(0,j.jsx)(x.Th,{isNumeric:!0,children:"\u0412\u0441\u0435\u0433\u043e"})]})}),(0,j.jsx)(x.p3,{children:(0,t.Z)(Object.entries(n)).sort((function(e,n){var s=(0,i.Z)(e,2),r=(s[0],s[1]),t=(0,i.Z)(n,2),l=(t[0],t[1]);return l.plus+l.minus-(r.plus+r.minus)})).map((function(e){var n=(0,i.Z)(e,2),s=n[0],r=n[1],t=r.name,l=r.avatar_url,d=r.minus,a=r.plus;return(0,j.jsxs)(x.Tr,{children:[(0,j.jsx)(x.Td,{children:(0,j.jsx)(H,{name:t,avatar_url:l,id:s})}),(0,j.jsx)(x.Td,{children:a}),(0,j.jsx)(x.Td,{children:d}),(0,j.jsx)(x.Td,{children:d+a})]},s)}))})]})})}function R(e){var n,s,t,l=e.comments,u=(0,W.useState)({}),o=(0,i.Z)(u,2),c=o[0],x=o[1],v=(0,W.useState)(0),m=(0,i.Z)(v,2),f=m[0],p=m[1],g=L("/comment/likers/".concat(null===(n=((null===l||void 0===l?void 0:l.result)||[])[f])||void 0===n?void 0:n.id),void 0,"1.9").data,b=(0,W.useMemo)((function(){for(var e={plus:(0,r.Z)((0,r.Z)({},c[0]||{plus:0}),{},{id:"0"}),minus:(0,r.Z)((0,r.Z)({},c[0]||{minus:0}),{},{id:"0"}),total:(0,r.Z)((0,r.Z)({},c[0]||{plus:0,minus:0}),{},{id:"0"})},n=0,s=Object.entries(c);n<s.length;n++){var t=(0,i.Z)(s[n],2),l=t[0],d=t[1];d.minus>e.minus.minus&&(e.minus=(0,r.Z)((0,r.Z)({},d),{},{id:l})),d.plus>e.plus.plus&&(e.plus=(0,r.Z)((0,r.Z)({},d),{},{id:l})),d.plus+d.minus>e.total.plus+e.total.minus&&(e.total=(0,r.Z)((0,r.Z)({},d),{},{id:l}))}return e}),[c]);return(0,W.useEffect)((function(){if(g){x((function(e){for(var n=(0,r.Z)({},e),s=0,t=Object.entries(g.result);s<t.length;s++){var l=(0,i.Z)(t[s],2),d=l[0],a=l[1];Reflect.has(n,d)||(n[d]={minus:0,plus:0,avatar_url:"",name:""}),n[d].minus+=Number(a.sign<0),n[d].plus+=Number(a.sign>0),n[d].avatar_url=a.avatar_url,n[d].name=a.name}return n}));var e=setTimeout((function(){return p((function(e){return e+1}))}),2e3);return function(){return clearTimeout(e)}}}),[g]),(0,j.jsxs)(d.gC,{position:"relative",children:[(null===l||void 0===l||null===(s=l.result)||void 0===s?void 0:s.length)>f&&(0,j.jsx)(h.Ex,{size:"xs",isIndeterminate:!0,w:"100%"}),(0,j.jsxs)(d.MI,{columns:{md:2,base:1},spacing:5,justifyContent:"space-between",minW:"100%",children:[!!+b.plus.id&&(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043b\u044e\u0441\u043e\u0432"}),(0,j.jsx)(a.Jf,{children:(0,j.jsx)(H,{name:b.plus.name,avatar_url:b.plus.avatar_url,id:b.plus.id})}),(0,j.jsx)(a.vh,{pl:"14",children:(0,j.jsx)(K,{source:b.plus})})]}),!!+b.minus.id&&(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432"}),(0,j.jsx)(a.Jf,{children:(0,j.jsx)(H,{name:b.minus.name,avatar_url:b.minus.avatar_url,id:b.minus.id})}),(0,j.jsx)(a.vh,{pl:"14",children:(0,j.jsx)(K,{source:b.minus})})]}),!!+b.total.id&&(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a"}),(0,j.jsx)(a.Jf,{children:(0,j.jsx)(H,{name:b.total.name,avatar_url:b.total.avatar_url,id:b.total.id})}),(0,j.jsx)(a.vh,{pl:"14",children:(0,j.jsx)(K,{source:b.total})})]})]}),(null===l||void 0===l||null===(t=l.result)||void 0===t?void 0:t.length)<=f&&(0,j.jsx)(Q,{likers:c})]})}function q(e){var n,s,r,i,t,l,u=e.subsite,o=e.avatar_url,x=e.rating;return(0,j.jsxs)(d.Ug,{spacing:{base:5,sm:8,md:10},position:"sticky",top:"0",bg:"white",zIndex:"1000",pt:"5",pb:"2",px:{base:2,sm:3,md:4},w:"100%",justifyContent:"center",children:[(0,j.jsx)(c.qE,{name:u.name,size:{base:"xl",md:"2xl"},src:null!==u&&void 0!==u&&null!==(n=u.avatar)&&void 0!==n&&null!==(s=n.data)&&void 0!==s&&s.uuid?"https://leonardo.osnova.io/".concat(null===u||void 0===u||null===(r=u.avatar)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.uuid,"/-/scale_crop/300x300/-/format/webp/"):o}),(0,j.jsxs)(d.gC,{children:[(0,j.jsx)(d.X6,{size:{base:"md",sm:"lg"},children:u.name}),(0,j.jsxs)(d.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,j.jsx)(w,{children:null!==(t=null!==(l=u.rating)&&void 0!==l?l:x)&&void 0!==t?t:"N/A"}),(0,j.jsxs)(a.kN,{children:[(0,j.jsx)(a.dw,{children:"\u0421\u043e\u0437\u0434\u0430\u043d"}),(0,j.jsx)(a.Jf,{children:(0,C.Z)(u.created)?(0,m.Z)(1e3*u.created,"dd.LL.yy"):"N/A"})]})]})]})]})}X.kL.register(X.uw,X.f$,X.l7,X.ZL,X.od,X.jn,X.Gu,X.Dx,X.u,X.De);var $=function(){var e,n,s,r,t,l,a,u,c,x,h,v,m,f,p,g,b=(0,U.lr)(),y=(0,i.Z)(b,1)[0],k=(0,D.s)(y.get("id")||""),Z=L("/subsite?id=".concat(k)),w=Z.data,C=Z.error,N=J("/user/".concat(k,"/entries"),void 0,"1.9"),z=J("/user/".concat(k,"/comments"),void 0,"1.9"),_=(0,W.useMemo)((function(){var e;return null===N||void 0===N||null===(e=N.result)||void 0===e?void 0:e.reduce((function(e,n){return e+n.likes.summ}),0)}),[N]),O=(0,W.useMemo)((function(){var e;return null===z||void 0===z||null===(e=z.result)||void 0===e?void 0:e.reduce((function(e,n){return e+n.likes.summ}),0)}),[z]),M=(w||{result:{subsite:{name:(null===z||void 0===z||null===(e=z.result)||void 0===e||null===(n=e.at(0))||void 0===n||null===(s=n.author)||void 0===s?void 0:s.name)||(null===N||void 0===N||null===(r=N.result)||void 0===r||null===(t=r.at(0))||void 0===t||null===(l=t.author)||void 0===l?void 0:l.name)}}}).result.subsite;return(0,j.jsxs)(d.gC,{children:[C&&(0,j.jsxs)(d.gC,{align:"start",children:[(0,j.jsxs)(d.X6,{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0437\u0430\u043a\u0440\u044b\u0442"," ",!(null!==z&&void 0!==z&&null!==(a=z.result)&&void 0!==a&&a.length||null!==N&&void 0!==N&&null!==(u=N.result)&&void 0!==u&&u.length)&&(0,j.jsx)(j.Fragment,{children:"\u0438\u043b\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})]}),(0,j.jsx)(d.xv,{fontSize:"12px",color:"gray.500",children:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u0435\u0435 \u0442\u043e\u0447\u043d\u044b \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0430"})]}),(0,j.jsx)(q,{subsite:M,avatar_url:(null===z||void 0===z||null===(c=z.result)||void 0===c||null===(x=c.at(0))||void 0===x||null===(h=x.author)||void 0===h?void 0:h.avatar_url)||(null===N||void 0===N||null===(v=N.result)||void 0===v||null===(m=v.at(0))||void 0===m||null===(f=m.author)||void 0===f?void 0:f.avatar_url),rating:_+O}),(0,j.jsxs)(o.mQ,{variant:"soft-rounded",size:{base:"sm",md:"md"},maxW:"100%",w:"100%",children:[(0,j.jsxs)(o.td,{minW:"0",maxW:"100%",overflowX:"auto",sx:{scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"},WebkitOverflowScrolling:"touch"},px:"1",children:[(0,j.jsx)(o.OK,{children:"\u041e\u0431\u0437\u043e\u0440"}),(0,j.jsx)(o.OK,{children:"\u041f\u043e\u0441\u0442\u044b"}),(0,j.jsx)(o.OK,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),(0,j.jsx)(o.OK,{children:"\u0418\u0442\u043e\u0433"})]}),(0,j.jsxs)(o.nP,{children:[(0,j.jsx)(o.x4,{children:(0,j.jsx)(P,{subsite:M,entries:null===N||void 0===N||null===(p=N.result)||void 0===p?void 0:p.length,comments:null===z||void 0===z||null===(g=z.result)||void 0===g?void 0:g.length})}),(0,j.jsx)(o.x4,{children:(0,j.jsx)(d.gC,{align:"flex-start",divider:(0,j.jsx)(d.cX,{}),children:(0,j.jsx)(B,{data:N})})}),(0,j.jsx)(o.x4,{children:(0,j.jsx)(d.gC,{align:"flex-start",divider:(0,j.jsx)(d.cX,{}),children:(0,j.jsx)(F,{data:z})})}),(0,j.jsx)(o.x4,{children:(0,j.jsx)(R,{comments:z})})]})]})]})}},3859:function(e,n,s){s.d(n,{s:function(){return r},w:function(){return i}});var r=function(e){return+(/(?:u\/)?(\d+)/.exec(e||"")||[])[1]||0},i=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}}}]);
//# sourceMappingURL=874.718a0006.chunk.js.map