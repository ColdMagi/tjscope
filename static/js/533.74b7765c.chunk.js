"use strict";(self.webpackChunktjscope=self.webpackChunktjscope||[]).push([[533],{533:function(e,n,r){r.r(n),r.d(n,{default:function(){return fe}});var s=r(3324),t=r(9712),i=r(7549),l=r(2791),a=r(3504),o=r(3859),d=r(1413),u=r(7762),c=r(1197),x=r(5443),h=r(9683),v=r(184);var m=function(e){var n=e.data,r=n.years,s=n.months,i=n.days,l=n.hours,a=n.ratingByEntity,o=e.options;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(t.gC,{w:"100%",children:[(0,v.jsx)(t.X6,{size:"md",children:"\u041f\u043e \u0433\u043e\u0434\u0430\u043c"}),(0,v.jsx)(h.$Q,{data:r,options:o})]}),(0,v.jsxs)(t.gC,{w:"100%",children:[(0,v.jsx)(t.X6,{size:"md",children:"\u041f\u043e \u043c\u0435\u0441\u044f\u0446\u0430\u043c"}),(0,v.jsx)(h.$Q,{data:s,options:o})]}),(0,v.jsxs)(t.gC,{w:"100%",children:[(0,v.jsx)(t.X6,{size:"md",children:"\u041f\u043e \u0434\u043d\u044f\u043c"}),(0,v.jsx)(h.$Q,{data:i,options:o})]}),(0,v.jsxs)(t.gC,{w:"100%",children:[(0,v.jsx)(t.X6,{size:"md",children:"\u041f\u043e \u0447\u0430\u0441\u0430\u043c"}),(0,v.jsx)(h.Fk,{data:l,options:o})]}),(0,v.jsxs)(t.gC,{w:"100%",children:[(0,v.jsx)(t.X6,{size:"md",children:"\u041e\u0446\u0435\u043d\u043a\u0438"}),(0,v.jsx)(h.x1,{data:a})]})]})},j=r(4925),f=r(2157),g=r(4828),p=r(9382),b=function(e){var n=e.count,r=e.summ,s=Math.abs(n-(n-r)/2);return{minus:s+-1*r,plus:s}},y=["url","hitsCount","intro","date","likes","cover","subsite","title","blocks"];function k(e){var n=e.data.markdown;return(0,v.jsx)(t.xu,{p:"3",rounded:"lg",borderColor:"gray.300",borderWidth:"1px",children:n})}var Z=function(e){var n=e.entry,r=n.url,s=n.hitsCount,i=n.intro,l=n.date,a=n.likes,o=a.count,u=a.summ,c=n.cover,x=n.subsite,h=x.avatar_url,m=x.name,Z=n.title,w=n.blocks,C=((0,j.Z)(n,y),b({count:o,summ:u})),W=C.minus,z=C.plus;return(0,v.jsxs)(t.gC,{align:"flex-start",as:"a",href:r,rel:"nofollow noopener noreferrer",target:"_blank",p:"3",shadow:"md",borderWidth:"1px",rounded:"md",minW:"100%",spacing:3,children:[(0,v.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,v.jsxs)(t.Ug,{children:[(0,v.jsx)(f.qE,{size:"xs",src:h,name:m}),(0,v.jsx)(t.X6,{size:"sm",children:m})]}),(0,v.jsx)(t.xv,{color:"gray.400",as:"time",children:(0,p.Z)(1e3*l,"dd.LL.yy")})]}),(0,v.jsxs)(t.gC,{pl:"8",children:[Z&&(0,v.jsx)(t.X6,{size:"sm",children:Z}),(0,v.jsx)(t.xv,{children:i}),c&&(0,v.jsx)(g.Ee,{src:c.thumbnailUrl,alt:"",objectFit:"contain",pointerEvents:"none"}),w&&w[0]&&"tweet"===w[0].type&&(0,v.jsx)(k,(0,d.Z)({},w[0]))]}),(0,v.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,v.jsxs)(t.xv,{pl:"8",color:"gray.400",children:[s," \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"]}),(0,v.jsxs)(t.Ug,{children:[(0,v.jsx)(t.xv,{color:"red.300",children:W}),(0,v.jsx)(t.xv,{color:"green.300",children:z})]})]})]})};var w=function(e){var n=e.label,r=void 0===n?"\u0420\u0435\u0439\u0442\u0438\u043d\u0433":n,s=e.children;return(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:r}),(0,v.jsx)(x.Jf,{color:"gray.500",children:s})]})};var C=function(e){var n=e.label,r=e.children;return(0,v.jsxs)(t.gC,{align:"flex-start",minW:"100%",children:[(0,v.jsx)(t.X6,{size:"md",children:n}),r]})},W=r(3433),z=r(4165),P=r(5861),S={host:"tjournal.ru",version:"2.31",proxy:"https://guileless-malasada-7737f0.netlify.app/.netlify/functions/server"},N=(0,l.createContext)(S),O=function(){return(0,l.useContext)(N)};function M(e,n){var r=(0,l.useRef)({}),t=(0,l.useRef)(!1),i={error:void 0,data:void 0},a=(0,l.useReducer)((function(e,n){switch(n.type){case"loading":return(0,d.Z)({},i);case"fetched":return(0,d.Z)((0,d.Z)({},i),{},{data:n.payload});case"error":return(0,d.Z)((0,d.Z)({},i),{},{error:n.payload});default:return e}}),i),o=(0,s.Z)(a,2),u=o[0],c=o[1];return(0,l.useEffect)((function(){if(e&&!e.includes("undefined")){t.current=!1;var s=function(){var s=(0,P.Z)((0,z.Z)().mark((function s(){var i,l;return(0,z.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(c({type:"loading"}),!r.current[e]){s.next=4;break}return c({type:"fetched",payload:r.current[e]}),s.abrupt("return");case 4:return s.prev=4,s.next=7,fetch(e,n);case 7:if((i=s.sent).ok){s.next=10;break}throw new Error(i.statusText);case 10:return s.next=12,i.json();case 12:if(l=s.sent,r.current[e]=l,!t.current){s.next=16;break}return s.abrupt("return");case 16:c({type:"fetched",payload:l}),s.next=24;break;case 19:if(s.prev=19,s.t0=s.catch(4),!t.current){s.next=23;break}return s.abrupt("return");case 23:c({type:"error",payload:s.t0});case 24:case"end":return s.stop()}}),s,null,[[4,19]])})));return function(){return s.apply(this,arguments)}}();return s(),function(){t.current=!0}}}),[e]),u}function _(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=O(),t=s.host,i=s.version;return M(e?"".concat("https://api.".concat(t,"/v").concat(i).replace("".concat(i),r||i)).concat(e):e,n)}function U(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2.31",t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,i=(0,l.useState)({result:[]}),a=(0,s.Z)(i,2),o=a[0],u=a[1],c=(0,l.useState)(0),x=(0,s.Z)(c,2),h=x[0],v=x[1],m=_(e+"?count=".concat(t,"&offset=").concat(h),n,r),j=m.data;return(0,l.useEffect)((function(){if(j&&(u((function(e){return(0,d.Z)((0,d.Z)((0,d.Z)({},e),j),{},{result:[].concat((0,W.Z)(e.result),(0,W.Z)(j.result))})})),j.result.length>=t)){var e=setTimeout((function(){return v((function(e){return e+t}))}),2e3);return function(){return clearTimeout(e)}}}),[j,t]),o}var E=function(e,n,t){var i,a,o=(0,l.useMemo)((function(){return Worker&&new Worker(new URL(r.p+r.u(994),r.b))}),[]),c=(0,l.useState)([]),x=(0,s.Z)(c,2),h=x[0],v=x[1],m=(0,l.useState)({}),j=(0,s.Z)(m,2),f=j[0],g=j[1],p=(0,l.useState)(0),b=(0,s.Z)(p,2),y=b[0],k=b[1],Z=(0,l.useMemo)((function(){for(var e={plus:(0,d.Z)((0,d.Z)({},f[0]||{plus:0}),{},{id:"0"}),minus:(0,d.Z)((0,d.Z)({},f[0]||{minus:0}),{},{id:"0"}),total:(0,d.Z)((0,d.Z)({},f[0]||{plus:0,minus:0}),{},{id:"0"})},n=0,r=Object.entries(f);n<r.length;n++){var t=(0,s.Z)(r[n],2),i=t[0],l=t[1];l.minus>e.minus.minus&&(e.minus=(0,d.Z)((0,d.Z)({},l),{},{id:i})),l.plus>e.plus.plus&&(e.plus=(0,d.Z)((0,d.Z)({},l),{},{id:i})),l.plus+l.minus>e.total.plus+e.total.minus&&(e.total=(0,d.Z)((0,d.Z)({},l),{},{id:i}))}return e}),[f]);return(0,l.useEffect)((function(){var n;t(null===(n=((null===e||void 0===e?void 0:e.result)||[])[y])||void 0===n?void 0:n.id)}),[t,e,y]),(0,l.useEffect)((function(){if(n){v((function(e){return[].concat((0,W.Z)(e),[n])}));var e=setTimeout((function(){return k((function(e){return e+1}))}),400);return function(){return clearTimeout(e)}}}),[n]),(0,l.useEffect)((function(){o&&(o.onmessage=function(e){return g(e.data)})}),[o]),(0,l.useEffect)((function(){((null===e||void 0===e?void 0:e.result)||[])[y]||(o?o.postMessage(h):g(function(e){var n,r={},t=(0,u.Z)(e);try{for(t.s();!(n=t.n()).done;)for(var i=n.value,l=0,a=Object.entries(i.result);l<a.length;l++){var o=(0,s.Z)(a[l],2),d=o[0],c=o[1];Reflect.has(r,d)||(r[d]={minus:0,plus:0,total:0,avatar_url:"",name:"",id:d}),r[d].minus+=Number(c.sign<0),r[d].plus+=Number(c.sign>0),r[d].total++,r[d].avatar_url=c.avatar_url,r[d].name=c.name}}catch(x){t.e(x)}finally{t.f()}return r}(h)))}),[h,y,e,o]),{size:(null===e||void 0===e||null===(i=e.result)||void 0===i?void 0:i.length)||0,stats:Z,loading:((null===e||void 0===e||null===(a=e.result)||void 0===a?void 0:a.length)||0)>y,timeoutTime:400,loaded:y,data:f||{}}};function L(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s={0:0,1:0,2:0,3:0,4:0,5:0,6:0},t=(0,d.Z)((0,d.Z)({},s),{},{7:0,8:0,9:0,10:0,11:0}),i={years:{},months:(0,d.Z)({},t),days:(0,d.Z)({},s),hours:(0,d.Z)((0,d.Z)({},s),{},{12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0}),ratingByEntity:{}},l=(0,u.Z)((null===e||void 0===e?void 0:e.result)||[]);try{for(l.s();!(n=l.n()).done;){var a=n.value,c=new Date(1e3*a.date),x=c.getUTCFullYear(),h=c.getUTCMonth(),v=c.getUTCDay(),m=c.getUTCHours();i.years[x]=(i.years[x]||0)+1,i.months[h]=(i.months[h]||0)+1,i.days[v]=(i.days[v]||0)+1,i.hours[m]=(i.hours[m]||0)+1,i.ratingByEntity[a.id]=b(a.likes)}}catch(f){l.e(f)}finally{l.f()}var j=(0,W.Z)(Object.values(i.ratingByEntity));return{years:{datasets:[(0,d.Z)({data:(0,W.Z)(Object.values(i.years))},r)],labels:(0,W.Z)(Object.keys(i.years))},months:{datasets:[(0,d.Z)({data:(0,W.Z)(Object.values(i.months))},r)],labels:(0,W.Z)((0,o.w)())},days:{datasets:[(0,d.Z)({data:(0,W.Z)(Object.values(i.days))},r)],labels:["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"]},hours:{datasets:[(0,d.Z)({data:(0,W.Z)(Object.values(i.hours))},r)],labels:(0,W.Z)(Object.keys(i.hours))},ratingByEntity:{datasets:[{data:(0,W.Z)(j.map((function(e){return e.minus}))),label:"\u041e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435",backgroundColor:"rgba(229,62,62, 0.2)",borderColor:"rgb(229,62,62)",borderWidth:1},{data:(0,W.Z)(j.map((function(e){return e.plus}))),label:"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",backgroundColor:"rgba(72,187,120, 0.2)",borderColor:"rgb(72,187,120)",borderWidth:1}],labels:(0,W.Z)(Object.keys(i.ratingByEntity))}}}var T=r(7552),D={md:{fontSize:"18px",maxW:"180px"},sm:{fontSize:"13px",maxW:"140px"}};var H=function(e){var n=e.name,r=e.avatar_url,s=e.id,i=e.children,l=e.size,a=void 0===l?"md":l,o=O().host;return(0,v.jsxs)(t.Ug,{as:"a",href:"https://".concat(o,"/u/").concat(s),target:"_blank",children:[(0,v.jsx)(f.qE,{size:{base:"sm",md:a},name:n,src:r}),(0,v.jsx)(t.xv,{fontSize:{base:"14px",md:D[a].fontSize},lineHeight:1.1,as:"b",maxW:{base:"100px",md:D[a].maxW},textOverflow:"ellipsis",overflow:"hidden",align:"initial",children:n}),i]})},J=["label","name","avatar_url","id"];function X(e){var n,r=e.plus,s=e.minus;return(0,v.jsxs)(t.Ug,{spacing:2,children:[(0,v.jsx)(t.xv,{fontSize:"16px",as:"span",color:"green.300",children:r}),(0,v.jsx)(t.xv,{fontSize:"16px",as:"span",color:"red.300",children:s}),(0,v.jsx)(t.xv,{fontSize:"16px",as:"span",color:"gray.500",children:null!==(n=r+s)&&void 0!==n?n:"N/A"})]})}var B=function(e){var n=e.label,r=e.name,s=e.avatar_url,t=e.id,i=(0,j.Z)(e,J);return(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:n}),(0,v.jsx)(x.Jf,{children:(0,v.jsx)(H,{name:r,avatar_url:s,id:t})}),(0,v.jsx)(x.vh,{pl:"14",children:(0,v.jsx)(X,(0,d.Z)({},i))})]})},F=r(9894),I=r(1089),K=r(3544),A=r(9714),R=r(5777),Q=r(8181),V=r(7717),$=r(1358),Y=r(7505),q=[{Header:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",accessor:function(e){return e},Cell:function(e){var n=e.value,r=n.name,s=n.avatar_url,t=n.id;return(0,v.jsx)(H,{name:r,avatar_url:s,id:t})}},{Header:"+",accessor:"plus",isNumeric:!0},{Header:"-",accessor:"minus",isNumeric:!0},{Header:"\u0412\u0441\u0435\u0433\u043e",accessor:"total",isNumeric:!0}];var G=function(e){var n=e.likers,r=(0,l.useMemo)((function(){return(0,W.Z)(Object.values(n))}),[n]),s=(0,$.useTable)({columns:q,data:r},$.useSortBy,$.usePagination),i=s.getTableProps,a=s.getTableBodyProps,o=s.headerGroups,u=s.prepareRow,c=s.page,x=s.canPreviousPage,h=s.canNextPage,m=s.pageOptions,j=s.pageCount,f=s.gotoPage,g=s.nextPage,p=s.previousPage,b=s.setPageSize,y=s.state,k=y.pageIndex,Z=y.pageSize;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(I.iA,(0,d.Z)((0,d.Z)({size:"sm"},i()),{},{children:[(0,v.jsx)(I.Rn,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043e\u0446\u0435\u043d\u043e\u043a \u043f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c"}),(0,v.jsx)(I.hr,{children:o.map((function(e){return(0,v.jsx)(I.Tr,(0,d.Z)((0,d.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,v.jsxs)(I.Th,(0,d.Z)((0,d.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{},{isNumeric:e.isNumeric,children:[e.render("Header"),(0,v.jsx)(K.m$.span,{pl:"4",children:e.isSorted?e.isSortedDesc?(0,v.jsx)(Y.AS,{"aria-label":"sorted descending"}):(0,v.jsx)(Y.$l,{"aria-label":"sorted ascending"}):null})]}))}))}))}))}),(0,v.jsx)(I.p3,(0,d.Z)((0,d.Z)({},a()),{},{children:c.map((function(e){return u(e),(0,v.jsx)(I.Tr,(0,d.Z)((0,d.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,v.jsx)(I.Td,(0,d.Z)((0,d.Z)({},e.getCellProps()),{},{isNumeric:e.column.isNumeric,children:e.render("Cell")}))}))}))}))}))]})),(0,v.jsxs)(t.kC,{justifyContent:"space-between",mt:4,alignItems:"center",w:"100%",children:[(0,v.jsxs)(t.kC,{children:[(0,v.jsx)(A.u,{label:"First Page",children:(0,v.jsx)(R.hU,{onClick:function(){return f(0)},isDisabled:!x,icon:(0,v.jsx)(Y.Y4,{h:3,w:3}),mr:2,"aria-label":"First Page"})}),(0,v.jsx)(A.u,{label:"Previous Page",children:(0,v.jsx)(R.hU,{onClick:p,isDisabled:!x,icon:(0,v.jsx)(Y.wy,{h:6,w:6}),"aria-label":"Previous Page"})})]}),(0,v.jsxs)(t.kC,{alignItems:"center",children:[(0,v.jsxs)(t.xv,{flexShrink:"0",mr:2,children:[(0,v.jsx)(t.xv,{fontWeight:"bold",as:"span",children:k+1})," ","of"," ",(0,v.jsx)(t.xv,{fontWeight:"bold",as:"span",children:m.length})]}),(0,v.jsxs)(Q.Y2,{ml:2,mr:2,w:16,min:1,max:m.length,onChange:function(e){f(e?+e-1:0)},display:{base:"none",md:"inline-block"},defaultValue:k+1,children:[(0,v.jsx)(Q.zu,{}),(0,v.jsxs)(Q.Fi,{children:[(0,v.jsx)(Q.WQ,{}),(0,v.jsx)(Q.Y_,{})]})]}),(0,v.jsx)(V.Ph,{w:32,value:Z,onChange:function(e){b(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return(0,v.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),(0,v.jsxs)(t.kC,{children:[(0,v.jsx)(A.u,{label:"Next Page",children:(0,v.jsx)(R.hU,{onClick:g,isDisabled:!h,icon:(0,v.jsx)(Y.XC,{h:6,w:6}),"aria-label":"Next Page"})}),(0,v.jsx)(A.u,{label:"Last Page",children:(0,v.jsx)(R.hU,{onClick:function(){return f(j-1)},isDisabled:!h,icon:(0,v.jsx)(Y.LZ,{h:3,w:3}),ml:2,"aria-label":"Last page"})})]})]})]})},ee=r(8006);function ne(e){var n=e.likers,r=e.target,s=e.color,i=(0,l.useRef)(null),a=(0,l.useMemo)((function(){return(0,W.Z)(Object.values(n)).filter((function(e){return e[r]})).sort((function(e,n){return n[r]-e[r]}))}),[n,r]),o=(0,ee.useVirtualizer)({count:a.length,getScrollElement:function(){return i.current},getItemKey:function(e){return a[e].id},estimateSize:function(){return 50},overscan:20});return(0,v.jsx)(K.m$.div,{shadow:"md",rounded:"md",borderWidth:"1px",borderColor:"gray.300",ref:i,overflow:"auto",h:"80vh",w:"100%",p:"2",children:(0,v.jsx)(K.m$.div,{w:"100%",position:"relative",height:"".concat(o.getTotalSize(),"px"),children:o.getVirtualItems().map((function(e){return(0,v.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"".concat(e.size,"px"),transform:"translateY(".concat(e.start,"px)")},children:(0,v.jsxs)(t.Ug,{justifyContent:"space-between",children:[(0,v.jsx)(H,{avatar_url:a[e.index].avatar_url,id:a[e.index].id,name:a[e.index].name,size:"sm"}),(0,v.jsx)(t.xv,{color:s,children:a[e.index][r]})]})},e.index)}))})})}var re=function(e){var n=e.likers;return(0,v.jsxs)(t.Ug,{spacing:2,children:[(0,v.jsx)(ne,{likers:n,target:"plus",color:"green.300"}),(0,v.jsx)(ne,{likers:n,target:"minus",color:"red.300"})]})};function se(e){var n=e.d;return(0,v.jsx)(F.JO,{viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",color:"currentColor",children:(0,v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:n})})}var te=function(e){var n=e.likers;return(0,v.jsxs)(i.mQ,{align:"end",variant:"unstyled",w:"100%",children:[(0,v.jsxs)(i.td,{children:[(0,v.jsx)(i.OK,{_selected:{color:"green.300"},color:"gray.300",children:(0,v.jsx)(se,{d:"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})}),(0,v.jsx)(i.OK,{_selected:{color:"green.300"},color:"gray.300",children:(0,v.jsx)(se,{d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})]}),(0,v.jsxs)(i.nP,{maxW:"100vw",overflow:"auto",children:[(0,v.jsx)(i.x4,{px:0,children:(0,v.jsx)(G,{likers:n})}),(0,v.jsx)(i.x4,{px:0,children:(0,v.jsx)(re,{likers:n})})]})]})},ie=r(1943),le=r(4377);var ae=function(e){var n=e.loading,r=e.loaded,s=e.size,i=e.data,l=e.stats,a=e.timeoutTime;return(0,v.jsxs)(t.gC,{position:"relative",w:"100%",children:[n&&(0,v.jsxs)(t.gC,{w:"100%",align:"flex-end",children:[(0,v.jsx)(T.Ex,{size:"lg",value:100*(r/s||1),w:"100%",rounded:"md"}),(0,v.jsxs)(t.Ug,{spacing:2,children:[(0,v.jsx)(t.xv,{children:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c:"}),(0,v.jsx)(t.xv,{children:(0,ie.Z)(new Date,(0,le.Z)(new Date,a*(s-r)),{includeSeconds:!0})})]})]}),!n&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(t.MI,{columns:{md:2,base:1},spacing:5,justifyContent:"space-between",minW:"100%",children:[!!(0,W.Z)(Object.entries(i)).length&&(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),(0,v.jsx)(x.Jf,{children:(0,W.Z)(Object.entries(i)).length})]}),!!+l.plus.id&&(0,v.jsx)(B,(0,d.Z)((0,d.Z)({},l.plus),{},{label:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043b\u044e\u0441\u043e\u0432"})),!!+l.minus.id&&(0,v.jsx)(B,(0,d.Z)((0,d.Z)({},l.minus),{},{label:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432"})),!!+l.total.id&&(0,v.jsx)(B,(0,d.Z)((0,d.Z)({},l.total),{},{label:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0446\u0435\u043d\u043e\u043a"}))]}),(0,v.jsx)(te,{likers:i})]})]})};function oe(e){var n=(0,l.useState)(void 0),r=(0,s.Z)(n,2),t=r[0],i=r[1],a=(0,l.useState)(void 0),o=(0,s.Z)(a,2),d=o[0],u=o[1],c=function(e,n){var r=O().proxy;return M("".concat(r).concat(e),n)}("/entry/likers?id=".concat(t)).data,x=E(e,d,i);return(0,l.useEffect)((function(){if(c){for(var e={result:{}},n=0,r=Object.entries(c.data.likers);n<r.length;n++){var t=(0,s.Z)(r[n],2),i=t[0],l=t[1];e.result[i]={avatar_url:l.avatar_url,name:l.user_name,sign:l.sign}}console.log(e,c),u(e)}}),[c]),x}var de=function(e){var n=e.data,r=(0,l.useMemo)((function(){var e,r={rating:0,ratingPlus:0,ratingMinus:0,comments:0,reposts:0,hits:0,mostHits:((null===n||void 0===n?void 0:n.result)||[])[0],mostLiked:((null===n||void 0===n?void 0:n.result)||[])[0],mostDisliked:((null===n||void 0===n?void 0:n.result)||[])[0]},s=(0,u.Z)((null===n||void 0===n?void 0:n.result)||[]);try{for(s.s();!(e=s.n()).done;){var t=e.value,i=b(t.likes),l=i.minus,a=i.plus;r.rating+=a-l,r.ratingPlus+=a,r.ratingMinus+=l,r.comments+=t.commentsCount,r.reposts+=Number(t.isRepost),r.hits+=t.hitsCount;var o=b(r.mostLiked.likes).plus,d=b(r.mostDisliked.likes).minus;t.hitsCount>r.mostHits.hitsCount&&(r.mostHits=t),a>o&&(r.mostLiked=t),l>d&&(r.mostDisliked=t)}}catch(c){s.e(c)}finally{s.f()}return r}),[n]),s=oe(n),a=(0,c.Bs)({plugins:{legend:{display:!1}}}),o=(0,c.Bs)({borderColor:"rgb(237,137,54)",backgroundColor:"rgba(237,137,54,0.4)",borderWidth:1}),h=L(n||{},o);return(0,v.jsxs)(i.mQ,{variant:"soft-rounded",size:{base:"sm",md:"md"},maxW:"100%",w:"100%",colorScheme:"orange",children:[(0,v.jsxs)(i.td,{minW:"0",maxW:"100%",overflowX:"auto",sx:{scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"},WebkitOverflowScrolling:"touch"},px:"1",children:[(0,v.jsx)(i.OK,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,v.jsx)(i.OK,{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"}),(0,v.jsx)(i.OK,{children:"\u041e\u0446\u0435\u043d\u043a\u0438"})]}),(0,v.jsxs)(i.nP,{w:"100%",children:[(0,v.jsx)(i.x4,{children:(0,v.jsxs)(t.gC,{align:"flex-start",w:"100%",pl:"2",spacing:4,children:[(0,v.jsxs)(t.MI,{columns:{base:2,md:3},spacing:1,justifyContent:"space-between",minW:"100%",children:[(0,v.jsx)(w,{children:r.rating}),(0,v.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043e\u043a [+]",children:r.ratingPlus}),(0,v.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043a\u0438 [-]",children:r.ratingMinus}),(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"}),(0,v.jsx)(x.Jf,{children:r.comments})]}),(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"}),(0,v.jsx)(x.Jf,{children:r.hits})]}),(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u0420\u0435\u043f\u043e\u0441\u0442\u043e\u0432"}),(0,v.jsx)(x.Jf,{children:r.reposts})]})]}),r.mostHits&&(0,v.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c\u044b\u0439",children:(0,v.jsx)(Z,{entry:r.mostHits})}),r.mostLiked&&(0,v.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043b\u044e\u0441\u043e\u0432",children:(0,v.jsx)(Z,{entry:r.mostLiked})}),r.mostDisliked&&(0,v.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432",children:(0,v.jsx)(Z,{entry:r.mostDisliked})})]})}),(0,v.jsx)(i.x4,{children:(0,v.jsx)(m,{data:h,options:a})}),(0,v.jsx)(i.x4,{children:(0,v.jsx)(ae,(0,d.Z)({},s))})]})]})};var ue=function(e){var n=e.comment,r=n.author,s=r.avatar_url,i=r.name,l=n.date,a=n.likes,o=a.count,d=a.summ,u=n.id,c=n.entry.url,x=n.html,h=b({count:o,summ:d}),m=h.minus,j=h.plus;return(0,v.jsxs)(t.gC,{align:"flex-start",as:"a",href:c+"?comment=".concat(u),rel:"nofollow noopener noreferrer",target:"_blank",p:"3",shadow:"md",borderWidth:"1px",rounded:"md",minW:"100%",spacing:3,children:[(0,v.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,v.jsxs)(t.Ug,{children:[(0,v.jsx)(f.qE,{size:"xs",src:s,name:i}),(0,v.jsx)(t.X6,{size:"sm",children:i})]}),(0,v.jsx)(t.xv,{color:"gray.400",as:"time",children:(0,p.Z)(1e3*l,"dd.LL.yy")})]}),(0,v.jsx)(t.gC,{pl:"8",children:(0,v.jsx)(t.xv,{dangerouslySetInnerHTML:{__html:x}})}),(0,v.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,v.jsx)("span",{}),(0,v.jsxs)(t.Ug,{children:[(0,v.jsx)(t.xv,{color:"red.300",children:m}),(0,v.jsx)(t.xv,{color:"green.300",children:j})]})]})]})};var ce=function(e){var n=e.data,r=(0,l.useMemo)((function(){var e,r={rating:0,ratingPlus:0,ratingMinus:0,mostLiked:((null===n||void 0===n?void 0:n.result)||[])[0],mostDisliked:((null===n||void 0===n?void 0:n.result)||[])[0]},s=(0,u.Z)((null===n||void 0===n?void 0:n.result)||[]);try{for(s.s();!(e=s.n()).done;){var t=e.value,i=b(t.likes),l=i.plus,a=i.minus;r.rating+=l-a,r.ratingPlus+=l,r.ratingMinus+=a;var o=b(r.mostLiked.likes).plus,d=b(r.mostDisliked.likes).minus;l>o&&(r.mostLiked=t),a>d&&(r.mostDisliked=t)}}catch(c){s.e(c)}finally{s.f()}return r}),[n]),a=(0,l.useState)(void 0),o=(0,s.Z)(a,2),x=o[0],h=o[1],j=_("/comment/likers/".concat(x),void 0,"1.9").data,f=E(n,j,h),g=(0,c.Bs)({plugins:{legend:{display:!1}}}),p=(0,c.Bs)({borderColor:"rgb(49,130,206)",backgroundColor:"rgba(49,130,206,0.4)",borderWidth:1}),y=L(n||{},p);return(0,v.jsxs)(i.mQ,{variant:"soft-rounded",size:{base:"sm",md:"md"},maxW:"100%",w:"100%",colorScheme:"teal",children:[(0,v.jsxs)(i.td,{minW:"0",maxW:"100%",overflowX:"auto",sx:{scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"},WebkitOverflowScrolling:"touch"},px:"1",children:[(0,v.jsx)(i.OK,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,v.jsx)(i.OK,{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"}),(0,v.jsx)(i.OK,{children:"\u041e\u0446\u0435\u043d\u043a\u0438"})]}),(0,v.jsxs)(i.nP,{children:[(0,v.jsx)(i.x4,{children:(0,v.jsxs)(t.gC,{align:"flex-start",w:"100%",pl:"2",spacing:4,children:[(0,v.jsxs)(t.MI,{columns:3,spacing:1,justifyContent:"space-between",minW:"100%",children:[(0,v.jsx)(w,{children:r.rating}),(0,v.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043e\u043a [+]",children:r.ratingPlus}),(0,v.jsx)(w,{label:"\u041e\u0446\u0435\u043d\u043a\u0438 [-]",children:r.ratingMinus})]}),r.mostLiked&&(0,v.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043b\u044e\u0441\u043e\u0432",children:(0,v.jsx)(ue,{comment:r.mostLiked})}),r.mostDisliked&&(0,v.jsx)(C,{label:"\u041d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0441\u043e\u0432",children:(0,v.jsx)(ue,{comment:r.mostDisliked})})]})}),(0,v.jsx)(i.x4,{children:(0,v.jsx)(m,{data:y,options:g})}),(0,v.jsx)(i.x4,{children:(0,v.jsx)(ae,(0,d.Z)({},f))})]})]})};var xe=function(e){var n=e.value;return(0,v.jsx)(v.Fragment,{children:n?"\u0414\u0430":"\u041d\u0435\u0442"})};var he=function(e){var n,r,s,i,l,a,o,d,u,c,h=e.subsite,m=e.entries,j=e.comments;return(0,v.jsxs)(t.gC,{divider:(0,v.jsx)(t.cX,{}),children:[(0,v.jsxs)(t.MI,{columns:{base:2,sm:4},spacing:3,justifyContent:"space-between",w:"100%",children:[(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u041f\u043e\u0441\u0442\u043e\u0432"}),(0,v.jsx)(x.Jf,{children:null!==(n=null!==(r=null===h||void 0===h||null===(s=h.counters)||void 0===s?void 0:s.entries)&&void 0!==r?r:m)&&void 0!==n?n:"N/A"})]}),(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"}),(0,v.jsx)(x.Jf,{children:null!==(i=null!==(l=null===h||void 0===h||null===(a=h.counters)||void 0===a?void 0:a.comments)&&void 0!==l?l:j)&&void 0!==i?i:"N/A"})]}),(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043e\u043a"}),(0,v.jsx)(x.Jf,{children:null!==(o=null===h||void 0===h||null===(d=h.counters)||void 0===d?void 0:d.subscriptions)&&void 0!==o?o:"N/A"})]}),(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"}),(0,v.jsx)(x.Jf,{children:null!==(u=null===h||void 0===h||null===(c=h.counters)||void 0===c?void 0:c.subscribers)&&void 0!==u?u:"N/A"})]})]}),(0,v.jsxs)(t.MI,{columns:2,spacing:3,justifyContent:"space-between",w:"100%",children:[(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"Plus"}),(0,v.jsx)(x.Jf,{children:(0,v.jsx)(xe,{value:null===h||void 0===h?void 0:h.isPlus})})]}),(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d"}),(0,v.jsx)(x.Jf,{children:(0,v.jsx)(xe,{value:null===h||void 0===h?void 0:h.isVerified})})]})]})]})},ve=r(811);var me=function(e){var n,r,s,i,l,a,o=e.subsite,d=e.avatar_url,u=e.rating;return(0,v.jsxs)(t.Ug,{spacing:{base:5,sm:8,md:10},position:"sticky",top:"0",bg:"white",zIndex:"1000",pt:"5",pb:"2",px:{base:2,sm:3,md:4},w:"100%",justifyContent:"center",children:[(0,v.jsx)(f.qE,{name:o.name,size:{base:"xl",md:"2xl"},src:null!==o&&void 0!==o&&null!==(n=o.avatar)&&void 0!==n&&null!==(r=n.data)&&void 0!==r&&r.uuid?"https://leonardo.osnova.io/".concat(null===o||void 0===o||null===(s=o.avatar)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.uuid,"/-/scale_crop/300x300/-/format/webp/"):d}),(0,v.jsxs)(t.gC,{children:[(0,v.jsx)(t.X6,{size:{base:"md",sm:"lg"},children:o.name}),(0,v.jsxs)(t.Ug,{justifyContent:"space-between",minW:"100%",children:[(0,v.jsx)(w,{children:null!==(l=null!==(a=o.rating)&&void 0!==a?a:u)&&void 0!==l?l:"N/A"}),(0,v.jsxs)(x.kN,{children:[(0,v.jsx)(x.dw,{children:"\u0421\u043e\u0437\u0434\u0430\u043d"}),(0,v.jsx)(x.Jf,{children:(0,ve.Z)(o.created)?(0,p.Z)(1e3*o.created,"dd.LL.yy"):"N/A"})]})]})]})]})};var je=function(e){var n,r,s,t,i,l,a=_("/subsite?id=".concat(e)),o=a.data,d=a.error,u=U("/user/".concat(e,"/entries"),void 0,"1.9"),c=U("/user/".concat(e,"/comments"),void 0,"1.9");return{subsite:(o||{result:{subsite:{name:(null===c||void 0===c||null===(n=c.result)||void 0===n||null===(r=n.at(0))||void 0===r||null===(s=r.author)||void 0===s?void 0:s.name)||(null===u||void 0===u||null===(t=u.result)||void 0===t||null===(i=t.at(0))||void 0===i||null===(l=i.author)||void 0===l?void 0:l.name)}}}).result.subsite,subsiteError:d,entries:u,comments:c}};var fe=function(){var e,n,r,d,u,c,x,h,m,j,f,g,p=(0,a.lr)(),b=(0,s.Z)(p,1)[0],y=(0,o.s)(b.get("id")||""),k=je(y),Z=k.subsite,w=k.subsiteError,C=k.entries,W=k.comments,z=(0,l.useMemo)((function(){var e;return null===C||void 0===C||null===(e=C.result)||void 0===e?void 0:e.reduce((function(e,n){return e+n.likes.summ}),0)}),[C]),P=(0,l.useMemo)((function(){var e;return null===W||void 0===W||null===(e=W.result)||void 0===e?void 0:e.reduce((function(e,n){return e+n.likes.summ}),0)}),[W]);return(0,v.jsxs)(t.gC,{children:[w&&(0,v.jsxs)(t.gC,{align:"start",children:[(0,v.jsxs)(t.X6,{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0437\u0430\u043a\u0440\u044b\u0442"," ",!(null!==W&&void 0!==W&&null!==(e=W.result)&&void 0!==e&&e.length||null!==C&&void 0!==C&&null!==(n=C.result)&&void 0!==n&&n.length)&&(0,v.jsx)(v.Fragment,{children:"\u0438\u043b\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})]}),(0,v.jsx)(t.xv,{fontSize:"12px",color:"gray.500",children:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u0435\u0435 \u0442\u043e\u0447\u043d\u044b \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0430"})]}),(0,v.jsx)(me,{subsite:Z,avatar_url:(null===Z||void 0===Z||null===(r=Z.avatar)||void 0===r||null===(d=r.data)||void 0===d?void 0:d.url)||(null===W||void 0===W||null===(u=W.result)||void 0===u||null===(c=u.at(0))||void 0===c||null===(x=c.author)||void 0===x?void 0:x.avatar_url)||(null===C||void 0===C||null===(h=C.result)||void 0===h||null===(m=h.at(0))||void 0===m||null===(j=m.author)||void 0===j?void 0:j.avatar_url),rating:z+P}),(0,v.jsxs)(i.mQ,{variant:"soft-rounded",size:{base:"sm",md:"md"},maxW:"100%",w:"100%",colorScheme:"cyan",children:[(0,v.jsxs)(i.td,{minW:"0",maxW:"100%",overflowX:"auto",sx:{scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"},WebkitOverflowScrolling:"touch"},px:"1",children:[(0,v.jsx)(i.OK,{children:"\u041e\u0431\u0437\u043e\u0440"}),(0,v.jsx)(i.OK,{children:"\u041f\u043e\u0441\u0442\u044b"}),(0,v.jsx)(i.OK,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"})]}),(0,v.jsxs)(i.nP,{children:[(0,v.jsx)(i.x4,{children:(0,v.jsx)(he,{subsite:Z,entries:null===C||void 0===C||null===(f=C.result)||void 0===f?void 0:f.length,comments:null===W||void 0===W||null===(g=W.result)||void 0===g?void 0:g.length})}),(0,v.jsx)(i.x4,{children:(0,v.jsx)(de,{data:C})}),(0,v.jsx)(i.x4,{px:0,children:(0,v.jsx)(ce,{data:W})})]})]})]})}},3859:function(e,n,r){r.d(n,{s:function(){return s},w:function(){return t}});var s=function(e){return+(/(?:u\/)?(\d+)/.exec(e||"")||[])[1]||0},t=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}}}]);
//# sourceMappingURL=533.74b7765c.chunk.js.map