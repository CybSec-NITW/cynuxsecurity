(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/6YX":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var l=a("q1tI"),r=Object(l.createContext)(null),n=function(){return Object(l.useContext)(r)}},"88Mu":function(e,t,a){e.exports={paginator:"styles-module--paginator--2zpIN",link:"styles-module--link--1l59s",linkNext:"styles-module--linkNext--Wzu4u",linkPrevious:"styles-module--linkPrevious--3rCeG"}},Gvln:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=a("/6YX"),s=a("6o60"),c=a("foaU"),o=a("jkj7"),i=a("yiHH"),u=function(e){var t=e.posts,a=e.pageInfo,l=e.header;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{feedPostList:t,pageInfo:a,bigFirst:!1,header:l})),r.a.createElement(i.a,null))};t.default=function(e){var t=e.data,a=e.pageContext,l=e.location,c='Posts tagged with "'+a.tag+'"';return r.a.createElement(n.a.Provider,{value:l},r.a.createElement(s.a,{title:c,defaultMetaTitle:!0,pageInfo:a.pageInfo}),r.a.createElement(u,{pageInfo:a.pageInfo,posts:t.posts,header:c}))}},L9U3:function(e,t,a){e.exports={wrapper:"styles-module--wrapper--3zv3W",meta:"styles-module--meta--1l_sy",metaSlim:"styles-module--metaSlim--2U581",header:"styles-module--header--8Ozfz",lead:"styles-module--lead--3GvHu",posts:"styles-module--posts--1dLws"}},jkj7:function(e,t,a){"use strict";var l=a("q1tI"),r=a.n(l),n=a("TSYQ"),s=a.n(n),c=a("TJpk"),o=a.n(c),i=a("8Rtz"),u=a("/6YX");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=l.createElement("path",{fill:"#945DD6",fillRule:"evenodd",d:"M17.706 5.708a1 1 0 000-1.415l-3.999-4a.999.999 0 10-1.414 1.414L14.586 4H1a1 1 0 100 2h13.586l-2.293 2.293a.999.999 0 101.414 1.414l3.999-3.999z"});function p(e,t){return l.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:18,height:10,viewBox:"0 0 18 10",ref:t},e),d)}var f=l.forwardRef(p),h=a("88Mu"),v=a.n(h),g=r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"html { scroll-behavior: smooth; }"}}),E=function(e){var t=e.pageInfo,a=t.nextPage,n=t.previousPage;if(!n&&!a)return null;var c=Object(u.b)().state,m=Boolean(null==c?void 0:c.fromPaginator),d=Object(l.useState)(m),p=d[0],h=d[1];return Object(l.useLayoutEffect)((function(){h(!0)}),[p]),r.a.createElement("div",{className:v.a.paginator},p&&g,n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:s()(v.a.link,v.a.linkPrevious,"link-with-focus"),href:n,state:{fromPaginator:!0}},r.a.createElement(f,null),r.a.createElement("span",null,"Newer posts")),r.a.createElement(o.a,null,r.a.createElement("link",{rel:"prev",href:n}))),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:s()(v.a.link,v.a.linkNext,"link-with-focus"),href:a,state:{fromPaginator:!0}},r.a.createElement("span",null,"Older posts"),r.a.createElement(f,null)),r.a.createElement(o.a,null,r.a.createElement("link",{rel:"next",href:a}))))},w=a("LWeC"),y=a("mMPx"),b=a("9eSz"),k=a.n(b),N=a("Ntz5"),P=a("wY/t"),j=a.n(P);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var O=l.createElement("path",{fill:"#DEE8ED",d:"M0 0h650v450H0z"}),z=l.createElement("g",{opacity:.05},l.createElement("path",{d:"M201.224 274.784V166.216c0-.875.3-1.613.902-2.214.601-.601 1.285-.902 2.05-.902h40.016c15.853 0 29.41 5.603 40.672 16.81 11.261 11.207 16.892 24.682 16.892 40.426 0 15.853-5.63 29.41-16.892 40.672-11.261 11.261-24.819 16.892-40.672 16.892h-40.016c-.765 0-1.449-.3-2.05-.902-.601-.601-.902-1.34-.902-2.214zm25.584-21.156h15.744c9.184 0 16.81-3.198 22.878-9.594 6.068-6.396 9.102-14.295 9.102-23.698 0-9.293-3.034-17.138-9.102-23.534-6.068-6.396-13.694-9.594-22.878-9.594h-15.744v66.42z"}),l.createElement("path",{fill:"#464646",d:"M318.218 305.07L267.05 194.696c-.546-1.093-.519-2.077.082-2.952.602-.874 1.504-1.312 2.706-1.312h21.812c1.422 0 2.351.602 2.788 1.804l27.06 59.86h.984l27.06-59.86c.438-1.202 1.367-1.804 2.788-1.804h21.812c1.203 0 2.105.438 2.706 1.312.602.875.63 1.859.082 2.952L325.434 305.07c-.656 1.203-1.585 1.804-2.788 1.804h-1.64c-1.202 0-2.132-.601-2.788-1.804z"}),l.createElement("path",{d:"M359.73 262.484c-11.48-11.48-17.22-25.42-17.22-41.82s5.767-30.367 17.302-41.902 25.502-17.302 41.902-17.302c15.307 0 28.536 5.084 39.688 15.252 1.64 1.53 1.695 3.061.164 4.592l-12.792 13.284c-1.421 1.312-2.788 1.312-4.1 0-6.232-5.576-13.612-8.364-22.14-8.364-9.184 0-16.837 3.307-22.96 9.922-6.123 6.615-9.184 14.569-9.184 23.862 0 9.184 3.089 17.029 9.266 23.534 6.177 6.505 13.858 9.758 23.042 9.758 8.528 0 15.853-2.624 21.976-7.872 1.53-1.312 2.952-1.257 4.264.164l12.792 13.612c1.421 1.421 1.367 2.897-.164 4.428-10.933 10.605-24.217 15.908-39.852 15.908-16.4 0-30.395-5.685-41.984-17.056z"}));function I(e,t){return l.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 650 450",ref:t},e),O,z)}var L=l.forwardRef(I),M=function(e){var t=e.big,a=e.feedPost,n=a.title,c=a.description,o=a.date,u=a.picture,m=a.author,d=a.slug,p=a.timeToRead,f=m.avatar,h=m.name,v=m.links,g=Object(l.useRef)(null),E=Object(w.a)().width,b=Object(y.a)(!0),P=b[0],x=b[1];Object(l.useEffect)((function(){if(g.current){var e=g.current,t=e.scrollHeight,a=e.clientHeight;x(t<=a)}}),[E]);var O=u?t?u.big:u.small:void 0;return r.a.createElement("div",{className:s()(j.a.wrapper,t&&j.a.big,!u&&j.a.placeholder)},r.a.createElement(i.a,{href:d,className:j.a.pictureLink},u?r.a.createElement(k.a,{fluid:O,className:j.a.picture}):r.a.createElement(L,{className:j.a.picture})),r.a.createElement("div",{className:s()(j.a.body,!P&&j.a.overflown),ref:g},r.a.createElement(i.a,{href:d,className:j.a.title},n),r.a.createElement("div",{className:j.a.description},c)),r.a.createElement("div",{className:j.a.meta},r.a.createElement(N.a,{name:h,avatar:f,date:o,links:v,timeToRead:p})))},R=a("L9U3"),H=a.n(R);t.a=function(e){var t,a=e.feedPostList.nodes,l=e.pageInfo,n=e.bigFirst,c=void 0===n||n,o=e.header,i=e.leadParagraph;return r.a.createElement("div",{className:H.a.wrapper},r.a.createElement("div",{className:s()(H.a.meta,(t={},t[H.a.metaSlim]=c,t))},r.a.createElement("h2",{className:H.a.header},o),i&&r.a.createElement("div",{className:H.a.lead},i)),r.a.createElement("div",{className:H.a.posts},a.map((function(e,t){return r.a.createElement(M,{feedPost:e,key:e.id,big:c&&0===t&&1===l.currentPage})}))),r.a.createElement(E,{pageInfo:l}))}},"wY/t":function(e,t,a){e.exports={wrapper:"styles-module--wrapper--2JMnk",big:"styles-module--big--GZU0R",pictureLink:"styles-module--pictureLink--1WpRT",picture:"styles-module--picture--21RDg",placeholder:"styles-module--placeholder---kcN7",body:"styles-module--body--3MRxg",overflown:"styles-module--overflown--21hcU",title:"styles-module--title--2eUhp",description:"styles-module--description--1UwEq",meta:"styles-module--meta--3rfiW"}}}]);
//# sourceMappingURL=component---src-templates-blog-tags-tsx-a55139b6ffb5f85fd4de.js.map