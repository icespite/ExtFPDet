window['hotjarDeps'] = ["/integrations/vendor/commons.c42222c4cb2f8913500f.js"];window['hotjarLoader'] = function() { return window.hotjarIntegration=function(t){function e(e){for(var r,u,a=e[0],s=e[1],d=e[2],f=0,h=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&h.push(i[u][0]),i[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(p&&p(e);h.length;)h.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},i={66:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var a=window.webpackJsonp_name_Integration=window.webpackJsonp_name_Integration||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var p=s;return o.push(["AfFH",0]),n()}({AfFH:function(t,e,n){"use strict";var r=n("hjHq"),i=n("qMUi"),o=t.exports=r("Hotjar").option("hjid",null);o.prototype.initialize=function(){var t,e,n,r;(this.options.hjid=Number(this.options.hjid),function(t){var e={isHjidValid:i.number(t.hjid)&&!i.nan(t.hjid)&&0!==t.hjid};for(var n in e)if(!e[n])return console.warn("Hotjar Integration - "+n+" returned false, not loading."),!1;return!0}(this.options))&&(window._hjSelf=this,t=window,e=document,t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:t._hjSelf.options.hjid,hjsv:6},n=e.getElementsByTagName("head")[0],(r=e.createElement("script")).async=1,r.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,n.appendChild(r),this.ready())},o.prototype.identify=function(t){if(!t.userId())return this.debug("user id is required");var e=t.traits();delete e.id,window.hj("identify",t.userId(),e)},o.prototype.track=function(t){if(!t.event())return this.debug("event name is required");window.hj("event",t.event(),t.properties())}}});
//# sourceMappingURL=hotjar.js.map
};