(this.webpackJsonp=this.webpackJsonp||[]).push([[50],{487:function(e,t,r){"use strict";r.r(t);var n,o=r(2),i=r(5),a=r.n(i),c=r(1),s=r.n(c),u=r(23),l=r(576),p=r(385),f=r(571),b=r(0);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=a()(n=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=(r=function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,m(t).call(this,e))).props.arcSite;return r.state={articles:[]},u.a.fetchContentForArcio(g(r),{articles:{source:"latest-articles-subsection-v1",query:{website:n,sectionId:"/opinion",subtype:"opinion",size:5},transform:r.transform}}),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),r=t,(n=[{key:"transform",value:function(e){return e&&e.articles?e.articles.map((function(e){var t=e.authors&&e.authors[0]||{},r=l.a.authorLink(t);return{avatar:t.avatar||{},profileHome:r,url:e.canonicalUrl,headline:e.headline,author:t.byline,jobTitle:t.biography}})):[]}},{key:"render",value:function(){var e=this.state.articles;return e.length>1?Object(b.jsx)("div",{"data-trackidentifier":"opinionwidget",children:Object(b.jsx)(p.default,{customFields:d({},this.props.customFields),children:e.map((function(e){return Object(b.jsx)(f.a,d({},e),e.id)}))})}):null}}])&&O(r.prototype,n),o&&O(r,o),t}(o.Component))||n;w.propTypes={children:s.a.node,arcSite:s.a.string,customFields:s.a.shape({title:s.a.string.tag({name:"Section Title",group:"Content"}),url:s.a.string.tag({name:"Ver Más Section Link",group:"Content"}),linkText:s.a.string.tag({name:"Link Text, ex. Ver más",group:"Content"})})},w.lazy=!0,t.default=w},571:function(e,t,r){"use strict";r(2);var n=r(1),o=r.n(n),i=r(46),a=r(0);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){var t=e.avatar,r=e.profileHome,n=e.url,o=e.headline,c=e.author,u=e.jobTitle,l=e.premium,p=e.contentType,f={rel:"noopener noreferrer","data-actiontype":"Author"};r?f.href=r:f.className="author-no-link";var b={className:"widget-5column-top-link"};return n&&(b.href=n),Object(a.jsx)("div",{className:"widget-5column-block story-tease-alpha",children:Object(a.jsxs)("a",s({},b,{children:[Object(a.jsx)(i.a,{className:"widget-5column-block-img",contentType:p,image:t,arcSite:"el-nuevo-dia",url:n,alt:o||""}),Object(a.jsxs)("div",{className:"widget-5column-content",children:[n&&o&&Object(a.jsx)("h4",{children:Object(a.jsxs)("a",{href:n,"data-actiontype":"Headline",children:[l&&Object(a.jsx)("i",{className:"material-icons md-12 pos-h2-h3-h4-h5",children:"lock"}),o]})}),Object(a.jsxs)("a",s({},f,{children:[c&&Object(a.jsx)("p",{className:"widget-5column-author",children:c}),u&&Object(a.jsx)("p",{className:"widget-5column-author-description",children:u})]}))]})]}))})};l.defaultProps={avatar:{alt:"",defaultUrl:"",sources:[]},profileHome:"",url:"",headline:"",author:"",jobTitle:""},l.propTypes={avatar:o.a.shape({alt:o.a.string,defaultUrl:o.a.string,sources:o.a.arrayOf(o.a.shape({media:o.a.string,srcSet:o.a.string}))}),profileHome:o.a.string,url:o.a.string,headline:o.a.string,author:o.a.string,jobTitle:o.a.string,premium:o.a.bool,contentType:o.a.string},t.a=l},576:function(e,t,r){"use strict";var n=r(111);t.a={authorLink:function(e){var t=n.a.find((function(t){return t.type===e.authorType}));return t&&t.landingPage&&e.status&&e.link?"/autor/".concat(e.link,"/"):void 0}}}}]);