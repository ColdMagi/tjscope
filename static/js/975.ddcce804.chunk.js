"use strict";(self.webpackChunktjscope=self.webpackChunktjscope||[]).push([[975],{8975:function(e,n,r){r.r(n),r.d(n,{default:function(){return je}});var s=r(3324),t=r(9712),i=r(7549),l=r(2791),a=r(3504),o=r(3859),d=r(7762),u=r(1197),c=r(5443),x=r(9683),h=r(184);var v=function(e){var n=e.data,r=n.years,s=n.months,i=n.days,l=n.hours,a=n.ratingByEntity,o=e.options;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(t.gC,{w:"100%",children:[(0,h.jsx)(t.X6,{size:"md",children:"\u041f\u043e \u0433\u043e\u0434\u0430\u043c"}),(0,h.jsx)(x.$Q,{data:r,options:o})]}),(0,h.jsxs)(t.gC,{w:"100%",children:[(0,h.jsx)(t.X6,{size:"md",children:"\u041f\u043e \u043c\u0435\u0441\u044f\u0446\u0430\u043c"}),(0,h.jsx)(x.$Q,{data:s,options:o})]}),(0,h.jsxs)(t.gC,{w:"100%",children:[(0,h.jsx)(t.X6,{size:"md",children:"\u041f\u043e \u0434\u043d\u044f\u043c"}),(0,h.jsx)(x.$Q,{data:i,options:o})]}),(0,h.jsxs)(t.gC,{w:"100%",children:[(0,h.jsx)(t.X6,{size:"md",children:"\u041f\u043e \u0447\u0430\u0441\u0430\u043c"}),(0,h.jsx)(x.Fk,{data:l,options:o})]}),(0,h.jsxs)(t.gC,{w:"100%",children:[(0,h.jsx)(t.X6,{size:"md",children:"\u041e\u0446\u0435\u043d\u043a\u0438"}),(0,h.jsx)(x.x1,{data:a})]})]})},j=r(1413),m=r(4925),g=r(2157),f=r(4828),p=r(9382),b=function(e){var n=e.count,r=e.summ,s=Math.abs(n-(n-r)/2);return{minus:s+-1*r,plus:s}},y=["url","hitsCount","intro","date","likes","cover","subsite","title","blocks"];function k(e){var n=e.data.markdown;return(0,h.jsx)(t.xu,{p:"3",rounded:"lg",borderColor:"gray.300",borderWidth:"1px",children:n})}var Z=function(e){var n=e.entry,r=n.url,s=n.hitsCount,i=n.intro,l=n.date,a=n.likes,o=a.count,d=a.summ,u=n.cover,c=n.subsite,x=c.avatar_url,v=c.name,Z=n.title,w=n.blocks,C=((0,m.Z)(n,y),b({count:o,summ:d})),z=C.minus,P=C.plus;return(0,h.jsxs)(t.gC,{align:"flex-start",as:"a",href:r,rel:"nofollow noopener noreferrer",target:"_blank",p:"3",shadow:"md",borderWidth:"1px",rounded:"md",minW:"100%",spacing:3,children:[(0,h.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,h.jsxs)(t.Ug,{children:[(0,h.jsx)(g.qE,{size:"xs",src:x,name:v}),(0,h.jsx)(t.X6,{size:"sm",children:v})]}),(0,h.jsx)(t.xv,{color:"gray.400",as:"time",children:(0,p.Z)(1e3*l,"dd.LL.yy")})]}),(0,h.jsxs)(t.gC,{pl:"8",children:[Z&&(0,h.jsx)(t.X6,{size:"sm",children:Z}),(0,h.jsx)(t.xv,{children:i}),u&&(0,h.jsx)(f.Ee,{src:u.thumbnailUrl,alt:"",objectFit:"contain",pointerEvents:"none"}),w&&w[0]&&"tweet"===w[0].type&&(0,h.jsx)(k,(0,j.Z)({},w[0]))]}),(0,h.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,h.jsxs)(t.xv,{pl:"8",color:"gray.400",children:[s," \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"]}),(0,h.jsxs)(t.Ug,{children:[(0,h.jsx)(t.xv,{color:"red.300",children:z}),(0,h.jsx)(t.xv,{color:"green.300",children:P})]})]})]})};var w=function(e){var n=e.label,r=void 0===n?"\u0420\u0435\u0439\u0442\u0438\u043d\u0433":n,s=e.children;return(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:r}),(0,h.jsx)(c.Jf,{color:"gray.500",children:s})]})};var C=function(e){var n=e.label,r=e.children;return(0,h.jsxs)(t.gC,{align:"flex-start",minW:"100%",children:[(0,h.jsx)(t.X6,{size:"md",children:n}),r]})},z=r(3433);function P(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s={0:0,1:0,2:0,3:0,4:0,5:0,6:0},t=(0,j.Z)((0,j.Z)({},s),{},{7:0,8:0,9:0,10:0,11:0}),i={years:{},months:(0,j.Z)({},t),days:(0,j.Z)({},s),hours:(0,j.Z)((0,j.Z)({},s),{},{12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0}),ratingByEntity:{}},l=(0,d.Z)((null===e||void 0===e?void 0:e.result)||[]);try{for(l.s();!(n=l.n()).done;){var a=n.value,u=new Date(1e3*a.date),c=u.getUTCFullYear(),x=u.getUTCMonth(),h=u.getUTCDay(),v=u.getUTCHours();i.years[c]=(i.years[c]||0)+1,i.months[x]=(i.months[x]||0)+1,i.days[h]=(i.days[h]||0)+1,i.hours[v]=(i.hours[v]||0)+1,i.ratingByEntity[a.id]=b(a.likes)}}catch(g){l.e(g)}finally{l.f()}var m=(0,z.Z)(Object.values(i.ratingByEntity));return{years:{datasets:[(0,j.Z)({data:(0,z.Z)(Object.values(i.years))},r)],labels:(0,z.Z)(Object.keys(i.years))},months:{datasets:[(0,j.Z)({data:(0,z.Z)(Object.values(i.months))},r)],labels:(0,z.Z)((0,o.w)())},days:{datasets:[(0,j.Z)({data:(0,z.Z)(Object.values(i.days))},r)],labels:["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"]},hours:{datasets:[(0,j.Z)({data:(0,z.Z)(Object.values(i.hours))},r)],labels:(0,z.Z)(Object.keys(i.hours))},ratingByEntity:{datasets:[{data:(0,z.Z)(m.map((function(e){return e.minus}))),label:"\u041e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435",backgroundColor:"rgba(229,62,62, 0.2)",borderColor:"rgb(229,62,62)",borderWidth:1},{data:(0,z.Z)(m.map((function(e){return e.plus}))),label:"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",backgroundColor:"rgba(72,187,120, 0.2)",borderColor:"rgb(72,187,120)",borderWidth:1}],labels:(0,z.Z)(Object.keys(i.ratingByEntity))}}}var N=function(e){var n=e.data,r=(0,l.useMemo)((function(){var e,r={rating:0,ratingPlus:0,ratingMinus:0,comments:0,reposts:0,hits:0,mostHits:((null===n||void 0===n?void 0:n.result)||[])[0],mostLiked:((null===n||void 0===n?void 0:n.result)||[])[0],mostDisliked:((null===n||void 0===n?void 0:n.result)||[])[0]},s=(0,d.Z)((null===n||void 0===n?void 0:n.result)||[]);try{for(s.s();!(e=s.n()).done;){var t=e.value,i=b(t.likes),l=i.minus,a=i.plus;r.rating+=a-l,r.ratingPlus+=a,r.ratingMinus+=l,r.comments+=t.commentsCount,r.reposts+=Number(t.isRepost),r.hits+=t.hitsCount;var o=b(r.mostLiked.likes).plus,u=b(r.mostDisliked.likes).minus;t.hitsCount>r.mostHits.hitsCount&&(r.mostHits=t),a>o&&(r.mostLiked=t),l>u&&(r.mostDisliked=t)}}catch(c){s.e(c)}finally{s.f()}return r}),[n]),s=(0,u.Bs)({plugins:{legend:{display:!1}}}),a=(0,u.Bs)({borderColor:"rgb(237,137,54)",backgroundColor:"rgba(237,137,54,0.4)",borderWidth:1}),o=P(n||{},a);return(0,h.jsxs)(i.mQ,{variant:"enclosed",isFitted:!0,w:"100%",children:[(0,h.jsxs)(i.td,{w:"100%",children:[(0,h.jsx)(i.OK,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,h.jsx)(i.OK,{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"})]}),(0,h.jsxs)(i.nP,{w:"100%",children:[(0,h.jsx)(i.x4,{children:(0,h.jsxs)(t.gC,{align:"flex-start",w:"100%",pl:"2",spacing:4,children:[(0,h.jsxs)(t.MI,{columns:{base:2,md:3},spacing:1,justifyContent:"space-between",minW:"100%",children:[(0,h.jsx)(w,{children:r.rating}),(0,h.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043e\u043a [+]",children:r.ratingPlus}),(0,h.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043a\u0438 [-]",children:r.ratingMinus}),(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"}),(0,h.jsx)(c.Jf,{children:r.comments})]}),(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"}),(0,h.jsx)(c.Jf,{children:r.hits})]}),(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u0420\u0435\u043f\u043e\u0441\u0442\u043e\u0432"}),(0,h.jsx)(c.Jf,{children:r.reposts})]})]}),r.mostHits&&(0,h.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c\u044b\u0439",children:(0,h.jsx)(Z,{entry:r.mostHits})}),r.mostLiked&&(0,h.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043b\u044e\u0441\u043e\u0432",children:(0,h.jsx)(Z,{entry:r.mostLiked})}),r.mostDisliked&&(0,h.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432",children:(0,h.jsx)(Z,{entry:r.mostDisliked})})]})}),(0,h.jsx)(i.x4,{children:(0,h.jsx)(v,{data:o,options:s})})]})]})};var W=function(e){var n=e.comment,r=n.author,s=r.avatar_url,i=r.name,l=n.date,a=n.likes,o=a.count,d=a.summ,u=n.id,c=n.entry.url,x=n.html,v=b({count:o,summ:d}),j=v.minus,m=v.plus;return(0,h.jsxs)(t.gC,{align:"flex-start",as:"a",href:c+"?comment=".concat(u),rel:"nofollow noopener noreferrer",target:"_blank",p:"3",shadow:"md",borderWidth:"1px",rounded:"md",minW:"100%",spacing:3,children:[(0,h.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,h.jsxs)(t.Ug,{children:[(0,h.jsx)(g.qE,{size:"xs",src:s,name:i}),(0,h.jsx)(t.X6,{size:"sm",children:i})]}),(0,h.jsx)(t.xv,{color:"gray.400",as:"time",children:(0,p.Z)(1e3*l,"dd.LL.yy")})]}),(0,h.jsx)(t.gC,{pl:"8",children:(0,h.jsx)(t.xv,{dangerouslySetInnerHTML:{__html:x}})}),(0,h.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,h.jsx)("span",{}),(0,h.jsxs)(t.Ug,{children:[(0,h.jsx)(t.xv,{color:"red.300",children:j}),(0,h.jsx)(t.xv,{color:"green.300",children:m})]})]})]})};var M=function(e){var n=e.data,r=(0,l.useMemo)((function(){var e,r={rating:0,ratingPlus:0,ratingMinus:0,mostLiked:((null===n||void 0===n?void 0:n.result)||[])[0],mostDisliked:((null===n||void 0===n?void 0:n.result)||[])[0]},s=(0,d.Z)((null===n||void 0===n?void 0:n.result)||[]);try{for(s.s();!(e=s.n()).done;){var t=e.value,i=b(t.likes),l=i.plus,a=i.minus;r.rating+=l-a,r.ratingPlus+=l,r.ratingMinus+=a;var o=b(r.mostLiked.likes).plus,u=b(r.mostDisliked.likes).minus;l>o&&(r.mostLiked=t),a>u&&(r.mostDisliked=t)}}catch(c){s.e(c)}finally{s.f()}return r}),[n]),s=(0,u.Bs)({plugins:{legend:{display:!1}}}),a=(0,u.Bs)({borderColor:"rgb(49,130,206)",backgroundColor:"rgba(49,130,206,0.4)",borderWidth:1}),o=P(n||{},a);return(0,h.jsxs)(i.mQ,{variant:"enclosed",isFitted:!0,w:"100%",children:[(0,h.jsxs)(i.td,{children:[(0,h.jsx)(i.OK,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,h.jsx)(i.OK,{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"})]}),(0,h.jsxs)(i.nP,{children:[(0,h.jsx)(i.x4,{children:(0,h.jsxs)(t.gC,{align:"flex-start",w:"100%",pl:"2",spacing:4,children:[(0,h.jsxs)(t.MI,{columns:3,spacing:1,justifyContent:"space-between",minW:"100%",children:[(0,h.jsx)(w,{children:r.rating}),(0,h.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043e\u043a [+]",children:r.ratingPlus}),(0,h.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043a\u0438 [-]",children:r.ratingMinus})]}),r.mostLiked&&(0,h.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043b\u044e\u0441\u043e\u0432",children:(0,h.jsx)(W,{comment:r.mostLiked})}),r.mostDisliked&&(0,h.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432",children:(0,h.jsx)(W,{comment:r.mostDisliked})})]})}),(0,h.jsx)(i.x4,{children:(0,h.jsx)(v,{data:o,options:s})})]})]})},O=r(7552),S={host:"tjournal.ru",version:"2.31"},_=(0,l.createContext)(S),U=function(){return(0,l.useContext)(_)};var L={md:{fontSize:"18px",maxW:"180px"},sm:{fontSize:"13px",maxW:"140px"}};var E=function(e){var n=e.name,r=e.avatar_url,s=e.id,i=e.children,l=e.size,a=void 0===l?"md":l,o=U().host;return(0,h.jsxs)(t.Ug,{as:"a",href:"https://".concat(o,"/u/").concat(s),target:"_blank",children:[(0,h.jsx)(g.qE,{size:{base:"sm",md:a},name:n,src:r}),(0,h.jsx)(t.xv,{fontSize:{base:"14px",md:L[a].fontSize},as:"b",maxW:{base:"100px",md:L[a].maxW},textOverflow:"ellipsis",overflow:"hidden",align:"initial",children:n}),i]})},D=["label","name","avatar_url","id"];function T(e){var n,r=e.plus,s=e.minus;return(0,h.jsxs)(t.Ug,{spacing:2,children:[(0,h.jsx)(t.xv,{fontSize:"16px",as:"span",color:"green.300",children:r}),(0,h.jsx)(t.xv,{fontSize:"16px",as:"span",color:"red.300",children:s}),(0,h.jsx)(t.xv,{fontSize:"16px",as:"span",color:"gray.500",children:null!==(n=r+s)&&void 0!==n?n:"N/A"})]})}var H=function(e){var n=e.label,r=e.name,s=e.avatar_url,t=e.id,i=(0,m.Z)(e,D);return(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:n}),(0,h.jsx)(c.Jf,{children:(0,h.jsx)(E,{name:r,avatar_url:s,id:t})}),(0,h.jsx)(c.vh,{pl:"14",children:(0,h.jsx)(T,(0,j.Z)({},i))})]})},J=r(9894),B=r(1089),X=r(3544),F=r(9714),I=r(5777),A=r(8181),K=r(7717),R=r(1358),Q=r(7505),V=[{Header:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",accessor:function(e){return e},Cell:function(e){var n=e.value,r=n.name,s=n.avatar_url,t=n.id;return(0,h.jsx)(E,{name:r,avatar_url:s,id:t})}},{Header:"+",accessor:"plus",isNumeric:!0},{Header:"-",accessor:"minus",isNumeric:!0},{Header:"\u0412\u0441\u0435\u0433\u043e",accessor:"total",isNumeric:!0}];var $=function(e){var n=e.likers,r=(0,l.useMemo)((function(){return(0,z.Z)(Object.values(n))}),[n]),s=(0,R.useTable)({columns:V,data:r},R.useSortBy,R.usePagination),i=s.getTableProps,a=s.getTableBodyProps,o=s.headerGroups,d=s.prepareRow,u=s.page,c=s.canPreviousPage,x=s.canNextPage,v=s.pageOptions,m=s.pageCount,g=s.gotoPage,f=s.nextPage,p=s.previousPage,b=s.setPageSize,y=s.state,k=y.pageIndex,Z=y.pageSize;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(B.iA,(0,j.Z)((0,j.Z)({size:"sm"},i()),{},{children:[(0,h.jsx)(B.Rn,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043e\u0446\u0435\u043d\u043e\u043a \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c"}),(0,h.jsx)(B.hr,{children:o.map((function(e){return(0,h.jsx)(B.Tr,(0,j.Z)((0,j.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,h.jsxs)(B.Th,(0,j.Z)((0,j.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{isNumeric:e.isNumeric,children:[e.render("Header"),(0,h.jsx)(X.m$.span,{pl:"4",children:e.isSorted?e.isSortedDesc?(0,h.jsx)(Q.AS,{"aria-label":"sorted descending"}):(0,h.jsx)(Q.$l,{"aria-label":"sorted ascending"}):null})]}))}))}))}))}),(0,h.jsx)(B.p3,(0,j.Z)((0,j.Z)({},a()),{},{children:u.map((function(e){return d(e),(0,h.jsx)(B.Tr,(0,j.Z)((0,j.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,h.jsx)(B.Td,(0,j.Z)((0,j.Z)({},e.getCellProps()),{},{isNumeric:e.column.isNumeric,children:e.render("Cell")}))}))}))}))}))]})),(0,h.jsxs)(t.kC,{justifyContent:"space-between",mt:4,alignItems:"center",w:"100%",children:[(0,h.jsxs)(t.kC,{children:[(0,h.jsx)(F.u,{label:"First Page",children:(0,h.jsx)(I.hU,{onClick:function(){return g(0)},isDisabled:!c,icon:(0,h.jsx)(Q.Y4,{h:3,w:3}),mr:2,"aria-label":"First Page"})}),(0,h.jsx)(F.u,{label:"Previous Page",children:(0,h.jsx)(I.hU,{onClick:p,isDisabled:!c,icon:(0,h.jsx)(Q.wy,{h:6,w:6}),"aria-label":"Previous Page"})})]}),(0,h.jsxs)(t.kC,{alignItems:"center",children:[(0,h.jsxs)(t.xv,{flexShrink:"0",mr:2,children:[(0,h.jsx)(t.xv,{fontWeight:"bold",as:"span",children:k+1})," ","of"," ",(0,h.jsx)(t.xv,{fontWeight:"bold",as:"span",children:v.length})]}),(0,h.jsxs)(A.Y2,{ml:2,mr:2,w:16,min:1,max:v.length,onChange:function(e){g(e?+e-1:0)},display:{base:"none",md:"inline-block"},defaultValue:k+1,children:[(0,h.jsx)(A.zu,{}),(0,h.jsxs)(A.Fi,{children:[(0,h.jsx)(A.WQ,{}),(0,h.jsx)(A.Y_,{})]})]}),(0,h.jsx)(K.Ph,{w:32,value:Z,onChange:function(e){b(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return(0,h.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),(0,h.jsxs)(t.kC,{children:[(0,h.jsx)(F.u,{label:"Next Page",children:(0,h.jsx)(I.hU,{onClick:f,isDisabled:!x,icon:(0,h.jsx)(Q.XC,{h:6,w:6}),"aria-label":"Next Page"})}),(0,h.jsx)(F.u,{label:"Last Page",children:(0,h.jsx)(I.hU,{onClick:function(){return g(m-1)},isDisabled:!x,icon:(0,h.jsx)(Q.LZ,{h:3,w:3}),ml:2,"aria-label":"Last page"})})]})]})]})},Y=r(8006);function q(e){var n=e.likers,r=e.target,s=e.color,i=(0,l.useRef)(null),a=(0,l.useMemo)((function(){return(0,z.Z)(Object.values(n)).sort((function(e,n){return n[r]-e[r]}))}),[n,r]),o=(0,Y.useVirtualizer)({count:a.length,getScrollElement:function(){return i.current},getItemKey:function(e){return a[e].id},estimateSize:function(){return 50},overscan:20});return(0,h.jsx)(X.m$.div,{shadow:"md",rounded:"md",borderWidth:"1px",borderColor:"gray.300",ref:i,overflow:"auto",h:"80vh",w:"100%",p:"2",children:(0,h.jsx)(X.m$.div,{w:"100%",position:"relative",height:"".concat(o.getTotalSize(),"px"),children:o.getVirtualItems().map((function(e){return(0,h.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"".concat(e.size,"px"),transform:"translateY(".concat(e.start,"px)")},children:(0,h.jsxs)(t.Ug,{justifyContent:"space-between",children:[(0,h.jsx)(E,{avatar_url:a[e.index].avatar_url,id:a[e.index].id,name:a[e.index].name,size:"sm"}),(0,h.jsx)(t.xv,{color:s,children:a[e.index][r]})]})},e.index)}))})})}var G=function(e){var n=e.likers;return(0,h.jsxs)(t.Ug,{spacing:2,children:[(0,h.jsx)(q,{likers:n,target:"plus",color:"green.300"}),(0,h.jsx)(q,{likers:n,target:"minus",color:"red.300"})]})};function ee(e){var n=e.d;return(0,h.jsx)(J.JO,{viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",color:"currentColor",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:n})})}var ne=function(e){var n=e.likers;return(0,h.jsxs)(i.mQ,{align:"end",variant:"unstyled",w:"100%",children:[(0,h.jsxs)(i.td,{children:[(0,h.jsx)(i.OK,{_selected:{color:"green.300"},color:"gray.300",children:(0,h.jsx)(ee,{d:"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})}),(0,h.jsx)(i.OK,{_selected:{color:"green.300"},color:"gray.300",children:(0,h.jsx)(ee,{d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})]}),(0,h.jsxs)(i.nP,{maxW:"100vw",overflow:"auto",children:[(0,h.jsx)(i.x4,{px:0,children:(0,h.jsx)($,{likers:n})}),(0,h.jsx)(i.x4,{px:0,children:(0,h.jsx)(G,{likers:n})})]})]})},re=r(1943),se=r(4377),te=r(4165),ie=r(5861);function le(e,n){var r=(0,l.useRef)({}),t=(0,l.useRef)(!1),i={error:void 0,data:void 0},a=(0,l.useReducer)((function(e,n){switch(n.type){case"loading":return(0,j.Z)({},i);case"fetched":return(0,j.Z)((0,j.Z)({},i),{},{data:n.payload});case"error":return(0,j.Z)((0,j.Z)({},i),{},{error:n.payload});default:return e}}),i),o=(0,s.Z)(a,2),d=o[0],u=o[1];return(0,l.useEffect)((function(){if(e&&!e.includes("undefined")){t.current=!1;var s=function(){var s=(0,ie.Z)((0,te.Z)().mark((function s(){var i,l;return(0,te.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(u({type:"loading"}),!r.current[e]){s.next=4;break}return u({type:"fetched",payload:r.current[e]}),s.abrupt("return");case 4:return s.prev=4,s.next=7,fetch(e,n);case 7:if((i=s.sent).ok){s.next=10;break}throw new Error(i.statusText);case 10:return s.next=12,i.json();case 12:if(l=s.sent,r.current[e]=l,!t.current){s.next=16;break}return s.abrupt("return");case 16:u({type:"fetched",payload:l}),s.next=24;break;case 19:if(s.prev=19,s.t0=s.catch(4),!t.current){s.next=23;break}return s.abrupt("return");case 23:u({type:"error",payload:s.t0});case 24:case"end":return s.stop()}}),s,null,[[4,19]])})));return function(){return s.apply(this,arguments)}}();return s(),function(){t.current=!0}}}),[e]),d}function ae(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=U(),t=s.host,i=s.version;return le(e?"".concat("https://api.".concat(t,"/v").concat(i).replace("".concat(i),r||i)).concat(e):e,n)}function oe(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2.31",t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,i=(0,l.useState)({result:[]}),a=(0,s.Z)(i,2),o=a[0],d=a[1],u=(0,l.useState)(0),c=(0,s.Z)(u,2),x=c[0],h=c[1],v=ae(e+"?count=".concat(t,"&offset=").concat(x),n,r),m=v.data;return(0,l.useEffect)((function(){if(m&&(d((function(e){return(0,j.Z)((0,j.Z)((0,j.Z)({},e),m),{},{result:[].concat((0,z.Z)(e.result),(0,z.Z)(m.result))})})),m.result.length>=t)){var e=setTimeout((function(){return h((function(e){return e+t}))}),2e3);return function(){return clearTimeout(e)}}}),[m,t]),o}var de=function(e){var n,i,a,o,u,x=e.comments,v=(0,l.useMemo)((function(){return Worker&&new Worker(new URL(r.p+r.u(386),r.b))}),[]),m=(0,l.useState)([]),g=(0,s.Z)(m,2),f=g[0],p=g[1],b=(0,l.useState)({}),y=(0,s.Z)(b,2),k=y[0],Z=y[1],w=(0,l.useState)(0),C=(0,s.Z)(w,2),P=C[0],N=C[1],W=ae("/comment/likers/".concat(null===(n=((null===x||void 0===x?void 0:x.result)||[])[P])||void 0===n?void 0:n.id),void 0,"1.9").data,M=(0,l.useMemo)((function(){for(var e={plus:(0,j.Z)((0,j.Z)({},k[0]||{plus:0}),{},{id:"0"}),minus:(0,j.Z)((0,j.Z)({},k[0]||{minus:0}),{},{id:"0"}),total:(0,j.Z)((0,j.Z)({},k[0]||{plus:0,minus:0}),{},{id:"0"})},n=0,r=Object.entries(k);n<r.length;n++){var t=(0,s.Z)(r[n],2),i=t[0],l=t[1];l.minus>e.minus.minus&&(e.minus=(0,j.Z)((0,j.Z)({},l),{},{id:i})),l.plus>e.plus.plus&&(e.plus=(0,j.Z)((0,j.Z)({},l),{},{id:i})),l.plus+l.minus>e.total.plus+e.total.minus&&(e.total=(0,j.Z)((0,j.Z)({},l),{},{id:i}))}return e}),[k]);return(0,l.useEffect)((function(){if(W){p((function(e){return[].concat((0,z.Z)(e),[W])}));var e=setTimeout((function(){return N((function(e){return e+1}))}),400);return function(){return clearTimeout(e)}}}),[W]),(0,l.useEffect)((function(){v&&(v.onmessage=function(e){return Z(e.data)})}),[v]),(0,l.useEffect)((function(){((null===x||void 0===x?void 0:x.result)||[])[P]||(v?v.postMessage(f):Z(function(e){var n,r={},t=(0,d.Z)(e);try{for(t.s();!(n=t.n()).done;)for(var i=n.value,l=0,a=Object.entries(i.result);l<a.length;l++){var o=(0,s.Z)(a[l],2),u=o[0],c=o[1];Reflect.has(r,u)||(r[u]={minus:0,plus:0,total:0,avatar_url:"",name:"",id:u}),r[u].minus+=Number(c.sign<0),r[u].plus+=Number(c.sign>0),r[u].total++,r[u].avatar_url=c.avatar_url,r[u].name=c.name}}catch(x){t.e(x)}finally{t.f()}return r}(f)))}),[f,P,x,v]),(0,h.jsxs)(t.gC,{position:"relative",w:"100%",children:[(null===x||void 0===x||null===(i=x.result)||void 0===i?void 0:i.length)>P&&(0,h.jsxs)(t.gC,{w:"100%",align:"flex-end",children:[(0,h.jsx)(O.Ex,{size:"lg",value:100*(P/(null===x||void 0===x||null===(a=x.result)||void 0===a?void 0:a.length)||1),w:"100%",rounded:"md"}),(0,h.jsxs)(t.Ug,{spacing:2,children:[(0,h.jsx)(t.xv,{children:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c:"}),(0,h.jsx)(t.xv,{children:(0,re.Z)(new Date,(0,se.Z)(new Date,400*((null===x||void 0===x||null===(o=x.result)||void 0===o?void 0:o.length)-P)),{includeSeconds:!0})})]})]}),(0,h.jsxs)(t.MI,{columns:{md:2,base:1},spacing:5,justifyContent:"space-between",minW:"100%",children:[!!(0,z.Z)(Object.entries(k)).length&&(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),(0,h.jsx)(c.Jf,{children:(0,z.Z)(Object.entries(k)).length})]}),!!+M.plus.id&&(0,h.jsx)(H,(0,j.Z)((0,j.Z)({},M.plus),{},{label:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043b\u044e\u0441\u043e\u0432"})),!!+M.minus.id&&(0,h.jsx)(H,(0,j.Z)((0,j.Z)({},M.minus),{},{label:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432"})),!!+M.total.id&&(0,h.jsx)(H,(0,j.Z)((0,j.Z)({},M.total),{},{label:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a"}))]}),(null===x||void 0===x||null===(u=x.result)||void 0===u?void 0:u.length)<=P&&(0,h.jsx)(ne,{likers:k})]})};var ue=function(e){var n=e.value;return(0,h.jsx)(h.Fragment,{children:n?"\u0414\u0430":"\u041d\u0435\u0442"})};var ce=function(e){var n,r,s,i,l,a,o,d,u,x,v=e.subsite,j=e.entries,m=e.comments;return(0,h.jsxs)(t.gC,{divider:(0,h.jsx)(t.cX,{}),children:[(0,h.jsxs)(t.MI,{columns:{base:2,sm:4},spacing:3,justifyContent:"space-between",w:"100%",children:[(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u041f\u043e\u0441\u0442\u043e\u0432"}),(0,h.jsx)(c.Jf,{children:null!==(n=null!==(r=null===v||void 0===v||null===(s=v.counters)||void 0===s?void 0:s.entries)&&void 0!==r?r:j)&&void 0!==n?n:"N/A"})]}),(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"}),(0,h.jsx)(c.Jf,{children:null!==(i=null!==(l=null===v||void 0===v||null===(a=v.counters)||void 0===a?void 0:a.comments)&&void 0!==l?l:m)&&void 0!==i?i:"N/A"})]}),(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043e\u043a"}),(0,h.jsx)(c.Jf,{children:null!==(o=null===v||void 0===v||null===(d=v.counters)||void 0===d?void 0:d.subscriptions)&&void 0!==o?o:"N/A"})]}),(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"}),(0,h.jsx)(c.Jf,{children:null!==(u=null===v||void 0===v||null===(x=v.counters)||void 0===x?void 0:x.subscribers)&&void 0!==u?u:"N/A"})]})]}),(0,h.jsxs)(t.MI,{columns:2,spacing:3,justifyContent:"space-between",w:"100%",children:[(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"Plus"}),(0,h.jsx)(c.Jf,{children:(0,h.jsx)(ue,{value:null===v||void 0===v?void 0:v.isPlus})})]}),(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d"}),(0,h.jsx)(c.Jf,{children:(0,h.jsx)(ue,{value:null===v||void 0===v?void 0:v.isVerified})})]})]})]})},xe=r(811);var he=function(e){var n,r,s,i,l,a,o=e.subsite,d=e.avatar_url,u=e.rating;return(0,h.jsxs)(t.Ug,{spacing:{base:5,sm:8,md:10},position:"sticky",top:"0",bg:"white",zIndex:"1000",pt:"5",pb:"2",px:{base:2,sm:3,md:4},w:"100%",justifyContent:"center",children:[(0,h.jsx)(g.qE,{name:o.name,size:{base:"xl",md:"2xl"},src:null!==o&&void 0!==o&&null!==(n=o.avatar)&&void 0!==n&&null!==(r=n.data)&&void 0!==r&&r.uuid?"https://leonardo.osnova.io/".concat(null===o||void 0===o||null===(s=o.avatar)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.uuid,"/-/scale_crop/300x300/-/format/webp/"):d}),(0,h.jsxs)(t.gC,{children:[(0,h.jsx)(t.X6,{size:{base:"md",sm:"lg"},children:o.name}),(0,h.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,h.jsx)(w,{children:null!==(l=null!==(a=o.rating)&&void 0!==a?a:u)&&void 0!==l?l:"N/A"}),(0,h.jsxs)(c.kN,{children:[(0,h.jsx)(c.dw,{children:"\u0421\u043e\u0437\u0434\u0430\u043d"}),(0,h.jsx)(c.Jf,{children:(0,xe.Z)(o.created)?(0,p.Z)(1e3*o.created,"dd.LL.yy"):"N/A"})]})]})]})]})};var ve=function(e){var n,r,s,t,i,l,a=ae("/subsite?id=".concat(e)),o=a.data,d=a.error,u=oe("/user/".concat(e,"/entries"),void 0,"1.9"),c=oe("/user/".concat(e,"/comments"),void 0,"1.9");return{subsite:(o||{result:{subsite:{name:(null===c||void 0===c||null===(n=c.result)||void 0===n||null===(r=n.at(0))||void 0===r||null===(s=r.author)||void 0===s?void 0:s.name)||(null===u||void 0===u||null===(t=u.result)||void 0===t||null===(i=t.at(0))||void 0===i||null===(l=i.author)||void 0===l?void 0:l.name)}}}).result.subsite,subsiteError:d,entries:u,comments:c}};var je=function(){var e,n,r,d,u,c,x,v,j,m,g,f,p=(0,a.lr)(),b=(0,s.Z)(p,1)[0],y=(0,o.s)(b.get("id")||""),k=ve(y),Z=k.subsite,w=k.subsiteError,C=k.entries,z=k.comments,P=(0,l.useMemo)((function(){var e;return null===C||void 0===C||null===(e=C.result)||void 0===e?void 0:e.reduce((function(e,n){return e+n.likes.summ}),0)}),[C]),W=(0,l.useMemo)((function(){var e;return null===z||void 0===z||null===(e=z.result)||void 0===e?void 0:e.reduce((function(e,n){return e+n.likes.summ}),0)}),[z]);return(0,h.jsxs)(t.gC,{children:[w&&(0,h.jsxs)(t.gC,{align:"start",children:[(0,h.jsxs)(t.X6,{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0437\u0430\u043a\u0440\u044b\u0442"," ",!(null!==z&&void 0!==z&&null!==(e=z.result)&&void 0!==e&&e.length||null!==C&&void 0!==C&&null!==(n=C.result)&&void 0!==n&&n.length)&&(0,h.jsx)(h.Fragment,{children:"\u0438\u043b\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})]}),(0,h.jsx)(t.xv,{fontSize:"12px",color:"gray.500",children:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u0435\u0435 \u0442\u043e\u0447\u043d\u044b \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0430"})]}),(0,h.jsx)(he,{subsite:Z,avatar_url:(null===Z||void 0===Z||null===(r=Z.avatar)||void 0===r||null===(d=r.data)||void 0===d?void 0:d.url)||(null===z||void 0===z||null===(u=z.result)||void 0===u||null===(c=u.at(0))||void 0===c||null===(x=c.author)||void 0===x?void 0:x.avatar_url)||(null===C||void 0===C||null===(v=C.result)||void 0===v||null===(j=v.at(0))||void 0===j||null===(m=j.author)||void 0===m?void 0:m.avatar_url),rating:P+W}),(0,h.jsxs)(i.mQ,{variant:"soft-rounded",size:{base:"sm",md:"md"},maxW:"100%",w:"100%",children:[(0,h.jsxs)(i.td,{minW:"0",maxW:"100%",overflowX:"auto",sx:{scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"},WebkitOverflowScrolling:"touch"},px:"1",children:[(0,h.jsx)(i.OK,{children:"\u041e\u0431\u0437\u043e\u0440"}),(0,h.jsx)(i.OK,{children:"\u041f\u043e\u0441\u0442\u044b"}),(0,h.jsx)(i.OK,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),(0,h.jsx)(i.OK,{children:"\u0418\u0442\u043e\u0433"})]}),(0,h.jsxs)(i.nP,{children:[(0,h.jsx)(i.x4,{children:(0,h.jsx)(ce,{subsite:Z,entries:null===C||void 0===C||null===(g=C.result)||void 0===g?void 0:g.length,comments:null===z||void 0===z||null===(f=z.result)||void 0===f?void 0:f.length})}),(0,h.jsx)(i.x4,{children:(0,h.jsx)(N,{data:C})}),(0,h.jsx)(i.x4,{children:(0,h.jsx)(M,{data:z})}),(0,h.jsx)(i.x4,{children:(0,h.jsx)(de,{comments:z})})]})]})]})}},3859:function(e,n,r){r.d(n,{s:function(){return s},w:function(){return t}});var s=function(e){return+(/(?:u\/)?(\d+)/.exec(e||"")||[])[1]||0},t=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}}}]);
//# sourceMappingURL=975.ddcce804.chunk.js.map