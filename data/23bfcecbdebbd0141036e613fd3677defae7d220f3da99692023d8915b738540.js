(window.webpackJsonpCoveoForSitecore=window.webpackJsonpCoveoForSitecore||[]).push([[5],{20:function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),c=n(5),u=function(e){function t(n,o,i){var c=e.call(this,n,t.ID,i)||this;return c.element=n,c.options=o,c.bindings=i,c.options=r.ComponentOptions.initComponentOptions(n,t,o),c.bind.onRootElement(s.SitecoreContextEvents.onSitecoreContextInitialization,c.afterComponentsInitialization),c}return i(t,e),t.prototype.afterComponentsInitialization=function(e){var t=this;this.root.dataset.coveoForSitecoreEventRegistered||(this.root.dataset.coveoForSitecoreEventRegistered="true",this.bind.onRootElement(r.QueryEvents.buildingQuery,function(n){t.onBuildingQuery(n,e)}))},t.prototype.onBuildingQuery=function(e,t){var n=this.triggerBuildingSitecoreExternalContent(),o=this.triggerBuildingLocalSitecoreInstanceEvent(n.sources);o.expression.isEmpty()||e.queryBuilder.constantExpression.add(o.expression.build(" OR "))},t.prototype.triggerBuildingSitecoreExternalContent=function(){var e={sources:[]};return this.bind.trigger(this.element,c.SitecoreExpressionEvents.onBuildingSitecoreExternalContent,e),{sources:this.filterUnique(e.sources)}},t.prototype.triggerBuildingLocalSitecoreInstanceEvent=function(e){var t={expression:new r.ExpressionBuilder,externalSources:e,buildingQueryAlreadyProcessed:!1};return this.bind.trigger(this.element,c.SitecoreExpressionEvents.onBuildingLocalSitecoreInstanceExpression,t),t},t.prototype.filterUnique=function(e){return e.filter(function(e,t,n){return n.indexOf(e)===t})},t.ID="ForSitecoreExpressions",t.options={},t}(r.Component);t.CoveoForSitecoreExpressions=u,r.Initialization.registerAutoCreateComponent(u)}}]);
//# sourceMappingURL=CoveoForSitecoreExpressions.min.js.map