(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{dpAJ:function(t,e,r){"use strict";r.r(e),function(t){r("ls82");function e(t){throw new TypeError('"'+t+'" is read-only')}function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}var a=r("vDqi");function i(t){return c.apply(this,arguments)}function c(){return(c=o(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=o(regeneratorRuntime.mark((function e(n,o){var i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=t.env.BASE_URL,e.next=4,a.get("".concat(c,"/api/gated-asset-data?asset=").concat(r)).then((function(t){if(t&&t.data){var e=Object.keys(t.data);t.data[e[0]].functionalSlug==r&&(i=t.data[e[0]]);var o=!(!i||!i.isMediaCardRecommendationEngine)&&i.isMediaCardRecommendationEngine;n({isMediaCardRecommendationEngine:o})}})).catch((function(t){o(t),console.log(t)}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),o(e.t0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=o(regeneratorRuntime.mark((function t(r){var n,o,i,c,u,s,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o="https://my.microfocus.com","product_contact_thankyou"===r||"trial_thankyou"===r?(i=window.location.pathname.toLowerCase().split("/")[3],e("productSlug"),n="".concat(o,"/api/v1/neorec/generate/product_resources?targetID=").concat(i,"&targetNodes=case_study,guide,data_sheet,ebook,documentation,report")):"assets_thankyou"==r&&(c={"application-delivery-management":"ADM","application-modernization-and-collaboration":"AMC","application-modernization-and-connectivity":"AMC",cyberres:"SEC","information-management-and-governance":"IMG","it-operations-management":"ITOM",security:"SEC",vertica:"ALL","analytics-and-ai":"ALL"},u=window.location.pathname.toLowerCase().split("/")[3],s=c[u]||"ALL",n="".concat(o,"/api/v1/neorec/generate/bu_resources?targetID=").concat(s,"&targetNodes=case_study,guide,data_sheet,ebook,documentation,report")),t.next=5,a.get(n);case 5:if(!(l=t.sent)||200!==l.status){t.next=10;break}return t.abrupt("return",l.data);case 10:throw new Error("getRecommendedResources error");case 11:t.next=16;break;case 13:throw t.prev=13,t.t0=t.catch(0),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=o(regeneratorRuntime.mark((function t(e){var r,n,o,a,c,s,l,h,f,d,p,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r="assets_thankyou"==e)){t.next=7;break}return o=window.location.pathname,a=o.split("/")[4],t.next=6,i(a);case 6:n=t.sent;case 7:if(!r||!n||n.isMediaCardRecommendationEngine){t.next=11;break}t.t0=null,t.next=14;break;case 11:return t.next=13,u(e);case 13:t.t0=t.sent;case 14:if((c=t.t0)&&c.response&&c.response.results&&c.response.results.length>2){for(s=c.response.results.slice(0,3),l='\n\t\t\t<div class="uk-container uk-container-default">\n\t\t\t\t<h2 class="title h2 uk-margin-bottom uk-margin-small-top text-light uk-text-left pb-">\n\t\t\t\tYou might also enjoy:\n\t\t\t\t</h2>\n\t\t\t\t<div class="uk-margin-medium-top uk-margin-bottom uk-grid uk-grid-medium  uk-child-width-1-3@m"\n\t\t\t\t\tdata-uk-height-match="target: > div > .uk-card" data-uk-grid="">',h=0;h<3;h++)f=s[h].type,d=s[h].context.title,p=s[h].context.image_src,m=s[h].context.view_href,l+='<div class="media-cards-content '.concat(0===h?"uk-first-column":"",'">\n\t\t\t\t\t<a id="gated_asset_enjoy" href="').concat(m,'" target="_blank" rel="noopener"\n\t\t\t\t\t\tclass="uk-display-block uk-transition-toggle uk-card uk-margin-bottom">\n\t\t\t\t\t\t<div class="uk-overflow-hidden uk-light uk-border-rounded uk-position-relative">\n\t\t\t\t\t\t\t<div class="uk-height-medium uk-background-cover uk-light uk-transition-scale-up uk-transition-opaque"\n\t\t\t\t\t\t\t\tdata-src="').concat(p,'" data-uk-img=""\n\t\t\t\t\t\t\t\tstyle="background-image: url(&quot;').concat(p,'&quot;);">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="">\n\t\t\t\t\t\t\t<div class="h6 uk-text-muted uk-text-normal uk-margin-top uk-margin-remove-bottom">\n\t\t\t\t\t\t\t\t').concat(f,'\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h3 class="h5 uk-card-title as-columns uk-text-lead text-medium">').concat(d,"</h3>\n\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>");l+="</div></div>",document.querySelector(".media-cards").innerHTML="",document.querySelector(".media-cards").innerHTML=l}case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}/.*\/products\/.*\/(contact|demo-request)\/thankyou.*/i.test(window.location.pathname)?l("product_contact_thankyou"):/.*\/products\/.*\/free-trial\/thank-you-success.*/i.test(window.location.pathname)?l("trial_thankyou"):/.*\/assets\/.*\/.*\/thankyou/i.test(window.location.pathname)&&l("assets_thankyou")}.call(this,r("8oxB"))},ls82:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new S(n||[]);return o(i,"_invoke",{value:E(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",d="executing",p="completed",m={};function v(){}function g(){}function y(){}var w={};s(w,i,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(M([])));b&&b!==r&&n.call(b,i)&&(w=b);var x=y.prototype=v.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function E(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=R(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=h(t,e,r);if("normal"===u.type){if(n=r.done?p:"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function R(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=h(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function M(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=y,o(x,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:g,configurable:!0}),g.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,u,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=M,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);