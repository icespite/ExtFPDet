"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{8796:function(t,n,e){e.d(n,{S:function(){return g}});var r=e(2492),o=e(3390),c=e.n(o),i=e(7667),a=e.n(i),u=e(9654),s=e(5302),l=e(9130),f=e(348),d=c()("div").withConfig({displayName:"SectionContainer___StyledDiv",componentId:"y77chx-0"})(["",""],(function(t){return t._css})),v=c()("div").withConfig({displayName:"SectionContainer___StyledDiv2",componentId:"y77chx-1"})(["",""],(function(t){return t._css2})),g=a().forwardRef((function(t,n){var e=t.children,c=t.maxWidth,i=t.wrapperStyles,a=t.columnsXS,g=t.columnsS,m=t.columnsM,y=t.columnsL,p=t.columnsXL,h={XXS:u.BW,XS:a,S:g,M:m,L:y,XL:p},b=Object.keys(h).filter((function(t){return h[t]})).map((function(t){return(0,o.css)(["",""],(0,l.c)({min:s.Ri[t]},(0,o.css)(["grid-column:"," / span ",";"],(n=h[t],(u.BW-n)/2+1),h[t])));var n})),w=(0,f.jsx)(d,{ref:n,_css:[i].concat((0,r.Z)(b)),children:e});return c?(0,f.jsx)(v,{_css2:[u.eC,"full"===c?u.wf:u.K9],children:w}):w}))},1190:function(t,n,e){e.r(n),e.d(n,{CategoryCarouselSection:function(){return Z}});var r=e(3214),o=e(7667),c=e.n(o),i=e(2378),a=e(7985),u=e(1336),s=e(3390),l=e.n(s),f=e(1552),d=e(6882),v=e(9470),g=e(2171),m=e(5302),y=e(6602),p=e(7236),h=e(9130),b=e(9925),w=g.rS.spacing,_=g.rS.text,C={XXS:_.BODY.SM,M:_.BODY.MD},S=(0,s.css)(["display:grid;border-radius:",";text-decoration:none;width:",";"," ",""],(0,p.Q)(10),(0,p.Q)(228),(0,h.c)({min:m.Ri.M},(0,s.css)(["width:",";"],(0,p.Q)(271))),(0,h.c)({min:m.Ri.L},(0,s.css)(["&:hover{",";}"],b.ml))),k=(0,s.css)(["border-top-left-radius:",";border-top-right-radius:",";object-fit:cover;height:",";overflow:hidden;display:block;width:100%;",""],(0,p.Q)(10),(0,p.Q)(10),(0,p.Q)(228),(0,h.c)({min:m.Ri.M},(0,s.css)(["height:",";"],(0,p.Q)(271)))),O=(0,s.css)(["background-color:var(--backgroundColor,var(--neutral-black-10));padding:",";margin:0;height:",";color:var(--neutral-black-base);",";",";border-bottom-left-radius:",";border-bottom-right-radius:",";"],(0,p.Q)(w.md),(0,p.Q)(88),g.XR,(0,y.MB)(C),(0,p.Q)(10),(0,p.Q)(10)),x=l()("a").withConfig({displayName:"CategoryCard___StyledA",componentId:"sc-12tteuf-0"})(["",""],(function(t){return t._css})),j=l()(f.E).withConfig({displayName:"CategoryCard___StyledImage",componentId:"sc-12tteuf-1"})(["",""],(function(t){return t._css2})),L=l()("p").withConfig({displayName:"CategoryCard___StyledP",componentId:"sc-12tteuf-2"})(["",""],(function(t){return t._css3})),I=function(t){var n,e=t.categoryName,r=t.categoryHref,o=t.backgroundColor,i=t.images,a=t.imageWidth,u=t.imageHeight,s=t.onLinkClick,l=t.lazyImages,f=i.map((function(t){return{src:t.src,width:t.width,unit:"w"}}));return c().createElement(x,{href:r,onClick:function(t){null===s||void 0===s||s(t)},_css:S},c().createElement(j,{width:a,height:u,src:null===(n=i[0])||void 0===n?void 0:n.src,srcSet:(0,v.P)(f),sizes:(0,d.T)({XXS:"".concat(228,"px"),M:"".concat(271,"px")}),loading:l?"lazy":"eager",_css2:k}),c().createElement(L,{style:{"--backgroundColor":o},_css3:O},e))},P=e(8968);function N(){return(N=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function Q(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var X=function(t){var n=t.categories,e=t.title,r=t.onVisible,o=void 0===r?function(){}:r,s=t.onCategoryClick,l=t.onNavigation,f=t.lazyImages,d=(0,P.QQ)(),v=(0,i.g)((function(){return o()})).observedElementRef,g=n.length;return c().createElement("div",{ref:v},c().createElement(a.l,{columnGap:d,onNavigateLeft:function(t){var n=t.swiped;return null===l||void 0===l?void 0:l(n,"prev")},onNavigateRight:function(t){var n=t.swiped;return null===l||void 0===l?void 0:l(n,"next")},title:e},n.map((function(t,n){var e=t.categoryId,r=Q(t,["categoryId"]);return c().createElement(u.d,{key:e,ariaLabel:"slide ".concat(n+1," of ").concat(g)},c().createElement(I,N({lazyImages:f},r,{onLinkClick:function(t){return null===s||void 0===s?void 0:s(t,{index:n})}})))}))))},R=e(8953),E=e(1029),T=e(2137),M=e(851),A=e(8796),D=e(6542),z=g.rS.spacing,B=(0,s.css)(["margin:",";"],(0,D.k)(z.xxxl)),W=e(348);function K(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function U(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?K(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):K(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var Z=function(t){var n=t.trackingTitle,e=t.trackingPosition,r=t.categories,o=t.title,c={trackingPosition:e,trackingTitle:n,trackingContentType:"Category carousel"};return(0,W.jsx)(A.S,{wrapperStyles:B,maxWidth:"max",columnsXL:10,children:(0,W.jsx)(X,{title:o,categories:r,onVisible:function(){r.length>0&&(0,E.K)(U(U({},c),{},{numberOfItems:r.length}))},onCategoryClick:function(t,n){var e=n.index,o=r[e],i=o.categoryName,a=o.productCode;t.currentTarget.href=(0,M.R)(t.currentTarget.href,a),(0,T.N)(t,U(U({},c),{},{link:{index:e,name:i,href:t.currentTarget.href},numberOfItems:r.length,actionName:"Category click"}))},onNavigation:function(t,n){var e="next"===n?"next":"previous";(0,R.P)(t,e,U(U({},c),{},{numberOfItems:r.length}))}})})}},8953:function(t,n,e){e.d(n,{P:function(){return o}});var r=e(8431),o=function(t,n,e){var o=e.trackingContentType,c=e.trackingPosition,i=e.trackingTitle,a=e.numberOfItems,u=t?"Swipe":"Arrow click";(0,r.N)({event:"custom_event",event_action:"".concat(u," ").concat(n),event_category:"".concat(c," | ").concat(o),event_label:"".concat(c," | ").concat(i," | ").concat(a).toLowerCase(),event_name:"content_interaction",event_details:"".concat(u," ").concat(n).toLowerCase(),content_position:"".concat(c),content_type:"".concat(o,"|").concat(i).toLowerCase(),total_options:"".concat(a)})}},1029:function(t,n,e){e.d(n,{K:function(){return o}});var r=e(8431),o=function(t){var n=t.trackingPosition,e=t.trackingTitle,o=t.numberOfItems,c=t.trackingContentType;(0,r.N)({event:"custom_event",event_action:"Impression",event_category:"".concat(n," | ").concat(c),event_label:"".concat(n," | ").concat(e," | ").concat(o).toLowerCase(),event_name:"view_content",content_position:"".concat(n),content_type:"".concat(c,"|").concat(e).toLowerCase(),total_options:"".concat(o)})}},2137:function(t,n,e){e.d(n,{N:function(){return o}});var r=e(2701),o=function(t,n){var e=n.link,o=e.name,c=e.href,i=e.index,a=n.numberOfItems,u=n.trackingPosition,s=n.trackingTitle,l=n.trackingContentType,f=n.actionName;(0,r.K)(t,{event:"custom_event",event_action:"".concat(f),event_category:"".concat(u," | ").concat(l),event_label:"".concat(u," | ").concat(s," | ").concat(i+1," | ").concat(o).toLowerCase(),event_name:"select_content",event_details:"".concat(f).toLowerCase(),content_position:"".concat(u),content_type:"".concat(l,"|").concat(s).toLowerCase(),total_options:"".concat(a),selected_position:"".concat(i+1),item_id:"".concat(o).toLowerCase(),destination_URL:"".concat(window.location.origin).concat(c)})}},851:function(t,n,e){e.d(n,{R:function(){return o}});var r=e(6141),o=function(t,n){var e=t.split("?"),o=(0,r.Z)(e,2),c=o[0],i=o[1],a=new URLSearchParams(i);return a.set("featuredProductCode",n.toString()),"".concat(c,"?").concat(a.toString())}},6882:function(t,n,e){e.d(n,{T:function(){return a}});var r=e(5302);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,c=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return e}(t,n)||c(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){if(t){if("string"===typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,n):void 0}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var a=function(t){var n,e=t.XXS,i=void 0===e?"100vw":e,a=t.XS,u=t.S,s=t.M,l=t.L,f=t.XL,d="",v=function(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=c(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}(new Map([[r.Ri.XL,f],[r.Ri.L,l],[r.Ri.M,s],[r.Ri.S,u],[r.Ri.XS,a]]));try{for(v.s();!(n=v.n()).done;){var g=o(n.value,2),m=g[0],y=g[1];y&&(d=d.concat("(min-width: ".concat(m,"px) ").concat(y,", ")))}}catch(p){v.e(p)}finally{v.f()}return d.concat(i)}},9470:function(t,n,e){e.d(n,{P:function(){return r}});var r=function(t){return t.sort((function(t,n){return n.width-t.width})).map((function(t){var n=t.src,e=t.width,r=t.unit;return"".concat(n," ").concat(e).concat(r)})).join(", ")}},9925:function(t,n,e){e.d(n,{ml:function(){return c},Cv:function(){return i}});var r=e(3390),o=e(7236),c=(0,r.css)(["box-shadow:0 "," "," 0 rgba(0,0,0,0.2);"],(0,o.Q)(2),(0,o.Q)(4)),i=(0,r.css)(["box-shadow:0 "," "," 0 rgba(0,0,0,0.2);"],(0,o.Q)(4),(0,o.Q)(8));(0,o.Q)(6),(0,o.Q)(16)}}]);
//# sourceMappingURL=190.0701cd3eb8ee98fa.js.map