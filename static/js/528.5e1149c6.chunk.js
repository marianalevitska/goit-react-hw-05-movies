"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[528],{7528:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(3504),a=n(6871),c=n(8683),s=n(5861),i=n(885),u=n(7757),o=n.n(u),l=n(2791),p={},v=n(8197),f=n(184);var d=function(e){var t=e.id,n=(0,l.useState)({film:{},isLoading:!1,error:null}),r=(0,i.Z)(n,2),a=r[0],u=r[1];(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u((function(e){return(0,c.Z)((0,c.Z)({},e),{},{isLoading:!0,error:null})})),e.prev=1,e.next=4,(0,v.TP)(t);case 4:n=e.sent,r=n.genres.map((function(e){return e.name})),u((function(e){return(0,c.Z)((0,c.Z)({},e),{},{isLoading:!1,film:(0,c.Z)((0,c.Z)({},n),{},{genreName:r})})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),u((function(t){return(0,c.Z)((0,c.Z)({},t),{},{isLoading:!1,error:e.t0})}));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var d=a.isLoading,m=a.error,h=a.film,x=h.vote_average,g=h.original_title,b=h.poster_path,k=h.original_name,w=h.genreName,_=h.overview,j=g||k,N=b?"https://image.tmdb.org/t/p/w500".concat(b):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpNntacA2XFNowRfDYxO1cZOVaeSYe9ozWzpVdxdQ5T41dKiJScEvBOibqiU3KtZvNTk&usqp=CAU",Z=Boolean(Object.values(h).length>0);return(0,f.jsx)("div",{children:Z&&(0,f.jsxs)("div",{className:p.info,children:[(0,f.jsx)("h2",{className:p.title,children:j}),(0,f.jsx)("img",{src:N,alt:j,className:p.img}),(0,f.jsxs)("p",{className:p.text,children:["User score: ",x]}),(0,f.jsx)("h3",{className:p.chpt,children:"Overview"}),(0,f.jsx)("p",{className:p.text,children:_}),(0,f.jsx)("h3",{className:p.chpt,children:"Genres"}),(0,f.jsx)("p",{className:p.text,children:w}),d&&(0,f.jsx)("p",{children:"...Loading"}),m&&(0,f.jsx)("p",{children:m.message})]})})},m={block:"movieDetailsPage_block__t7iSM",btn:"movieDetailsPage_btn__vW4G6",link:"movieDetailsPage_link__ZHtlQ"};var h=function(){var e,t=(0,a.UO)().movieId,n=(0,a.s0)(),c=(0,a.TH)(),s=(null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)||"/";return(0,f.jsxs)("div",{className:m.block,children:[(0,f.jsx)("button",{type:"button",className:m.button,onClick:function(){return n(s)},children:"Go Back"}),(0,f.jsx)(d,{id:t}),(0,f.jsx)(r.rU,{className:m.link,state:{from:s},to:"/movies/".concat(t,"/cast"),children:"Cast"}),(0,f.jsx)(r.rU,{className:m.link,state:{from:s},to:"/movies/".concat(t,"/reviews"),children:"Reviews"}),(0,f.jsx)(a.j3,{})]})}},8197:function(e,t,n){n.d(t,{TP:function(){return l},_L:function(){return u},tx:function(){return v},z1:function(){return o},zv:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),i=n.n(s)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"03d4c920be425f763881cb7707c96958"}}),u=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/week");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,i.get("/search/movie",{params:{language:"en-US",include_adult:!1,page:n,query:t}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=528.5e1149c6.chunk.js.map