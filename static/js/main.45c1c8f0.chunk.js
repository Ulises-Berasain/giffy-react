(this.webpackJsonpgiffy=this.webpackJsonpgiffy||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),i=n.n(r),a=n(9),s=n.n(a),o=(n(16),n(2)),u=(n(17),n(3)),j=n(5),f=n.n(j),l=n(7),d="i9zxWJWDHjbF38g98rEjS3nyY8cDnjf7",b="https://api.giphy.com/v1/gifs";function O(t){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(f.a.mark((function t(e){var n,c,r,i,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,c=void 0===n?10:n,r=e.keyword,i=e.page,a=void 0===i?0:i,s="".concat(b,"/search?api_key=").concat(d,"&q=").concat(r,"&limit=").concat(c,"&offset=").concat(a*c,"&rating=r&lang=en"),t.next=4,fetch(s).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){var e=t.images;return{images:e,title:t.title,id:t.id,url:e.downsized_medium.url}}))}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=i.a.createContext({});function p(t){var e=t.children,n=Object(r.useState)([]),i=Object(o.a)(n,2),a=i[0],s=i[1];return Object(c.jsx)(g.Provider,{value:{gifs:a,setGifs:s},children:e})}var m=g;function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{keyword:null},e=t.keyword,n=Object(r.useState)(!1),c=Object(o.a)(n,2),i=c[0],a=c[1],s=Object(r.useState)(!1),u=Object(o.a)(s,2),j=u[0],f=u[1],l=Object(r.useState)(0),d=Object(o.a)(l,2),b=d[0],h=d[1],g=Object(r.useContext)(m),p=g.gifs,x=g.setGifs,v=e||localStorage.getItem("lastkeyword");return Object(r.useEffect)((function(){a(!0),O({keyword:v}).then((function(t){x(t),a(!1),localStorage.setItem("lastkeyword",e)}))}),[e,v,x]),Object(r.useEffect)((function(){0!==b&&(f(!0),O({keyword:v,page:b}).then((function(t){x((function(e){return e.concat(t)})),f(!1)})))}),[b,v]),{loading:i,gifs:p,loadingNextPage:j,setPage:h}}n(19);function v(t){var e=t.title,n=t.id,r=t.url;return Object(c.jsx)("div",{className:"gif",children:Object(c.jsxs)(u.a,{to:"/gif/".concat(n),className:"link-gif",children:[Object(c.jsx)("h4",{children:e}),Object(c.jsx)("img",{loading:"lazy",alt:e,id:n,src:r})]})})}function y(t){var e=t.gifs;return Object(c.jsx)("div",{children:e.map((function(t){var e=t.id,n=t.title,r=t.url;return Object(c.jsx)(v,{id:e,title:n,url:r},e)}))})}n(20);function k(){return Object(c.jsxs)("div",{className:"lds-ring",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}function w(){return(w=Object(l.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(b,"/trending?api_key=").concat(d,"&limit=10&rating=r"),t.next=3,fetch(e).then((function(t){return t.json()})).then((function(t){var e=t.data;return(void 0===e?[]:e).map((function(t){return t.title}))}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){var e=t.name,n=t.options;return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsxs)("div",{className:"trends-container",children:[Object(c.jsx)("h4",{className:"title-trends",children:e}),n.map((function(t){return Object(c.jsx)(u.a,{to:"/search/".concat(t),children:t})}))]})})}function S(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),n=e[0],i=e[1];return Object(r.useEffect)((function(){(function(){return w.apply(this,arguments)})().then(i)}),[]),Object(c.jsx)(N,{name:"Tendencias",options:n})}function C(){var t=x(),e=t.loading,n=t.gifs;return Object(c.jsx)(i.a.Fragment,{children:e?Object(c.jsx)(k,{}):[Object(c.jsx)(S,{}),Object(c.jsxs)("div",{className:"contenedor-links",children:[Object(c.jsx)("h4",{className:"ultima-busqueda",children:"Ultima Busqueda"}),", ",Object(c.jsx)(y,{gifs:n})]})]})}var F=n.p+"static/media/giffy.6c15b7f8.png";function G(t){var e=x({keyword:t.params.keyword}),n=e.loading,r=e.gifs,a=e.setPage;return Object(c.jsxs)(i.a.Fragment,{children:[n?Object(c.jsx)(k,{}):Object(c.jsx)(y,{gifs:r}),Object(c.jsx)("button",{onClick:function(){return a((function(t){return t+1}))},className:"button-more-gifs",children:"Mas Gifs"})]})}var P=n(10);function E(t){var e=t.params,n=Object(r.useContext)(m).gifs.find((function(t){return t.id===e.id}));return Object(c.jsx)(v,Object(P.a)({},n))}function D(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],i=e[1],a=Object(u.c)(),s=Object(o.a)(a,2),j=(s[0],s[1]);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u.a,{className:"link-logo",to:"/",children:Object(c.jsx)("img",{className:"logo-giffy",alt:"Giffy logo",src:F})}),Object(c.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),j("/search/".concat(n)),i("")},className:"contenedor-input",children:[Object(c.jsx)("input",{onChange:function(t){return i(t.target.value)},type:"text",value:n,id:"input-gif",placeholder:"Search a Gif"}),Object(c.jsx)("button",{className:"button-gif",children:"Search Gif"})]}),Object(c.jsxs)(p,{children:[Object(c.jsx)("div",{className:"home-container",children:Object(c.jsx)(u.b,{path:"/",component:C})}),Object(c.jsxs)("section",{className:"App-content",children:[Object(c.jsx)(u.b,{path:"/search/:keyword",component:G}),Object(c.jsx)(u.b,{path:"/gif/:id",component:E})]})]})]})}var I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),I()}},[[21,1,2]]]);
//# sourceMappingURL=main.45c1c8f0.chunk.js.map