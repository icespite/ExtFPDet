(window.webpackJsonpCoveoForSitecore=window.webpackJsonpCoveoForSitecore||[]).push([[4],{16:function(o,t,n){"use strict";var e,i=this&&this.__extends||(e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var n in t)t.hasOwnProperty(n)&&(o[n]=t[n])})(o,t)},function(o,t){function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=function(o){function t(n,e,i){var s=o.call(this,n,t.ID,i)||this;return s.element=n,s.options=e,s.bindings=i,s.options=r.ComponentOptions.initComponentOptions(n,t,e),s.options.scSearchHub&&s.bind.oneRootElement(r.InitializationEvents.afterComponentsInitialization,s.onAfterComponentsInitialization),s}return i(t,o),t.prototype.onAfterComponentsInitialization=function(){this.componentOptionsModel.get("searchHub")||this.componentOptionsModel.set("searchHub",this.options.scSearchHub)},t.ID="ForSitecoreConfigureSearchHub",t.options={scSearchHub:r.ComponentOptions.buildStringOption()},t}(r.Component);t.CoveoForSitecoreConfigureSearchHub=s,r.Initialization.registerAutoCreateComponent(s)}}]);
//# sourceMappingURL=CoveoForSitecoreConfigureSearchHub.min.js.map