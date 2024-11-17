// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    "resource": {
      "version": "929",
      "macros": [{
        "function": "__e"
      }, {
        "function": "__e"
      }, {
        "function": "__u",
        "vtp_component": "URL",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__u",
        "vtp_component": "HOST",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__u",
        "vtp_component": "PATH",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__f",
        "vtp_component": "URL"
      }, {
        "function": "__e"
      }],
      "tags": [{
        "function": "__html",
        "priority": 20,
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cscript id=\"Ampliffy_Gtm_Tag\" type=\"text\/gtmscript\"\u003Evar ampPTrie=ampPTrie||{};ampPTrie.nonGAM=\"dwqpindhhegktaszhqphtjflwfxokroorttefyrzx,gtjmodenbylijcczhqqkvzutmaetplfwmintgf,haxvkyqubvwenjervlncmskvdlmwifiddmikybjodugsm,kvnwgsjesubgoefuxskqvcxuyeejqksreoksnhjbdewnpxcbepjoiecpelyarxkmslhcwwjbwhauvqpdvddruuzkahwwfjvdirczzq,mgteebhwjepksxmhrszdjyqrrqzzcqfyithgibpxiu,onjqkmmhlmksrnoiuelisyjwgnqbhekgcpihwmmhxxefprrzuonlqjlreythbwhqtxudhbwcwcmzxexjfgcxgblehhazwzxlxfuorfwejbbncaabgwsajyrphnsufuxvldvdprnobwthlirdpnkqdafbtxivexarcwcowhhnhkdyumwdrmxo\";\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 56
      }, {
        "function": "__html",
        "priority": 10,
        "metadata": ["map"],
        "teardown_tags": ["list", ["tag", 2, 0]],
        "once_per_load": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(u,v){function C(b){this.time=b.time;this.target=b.target;this.rootBounds=b.rootBounds;this.boundingClientRect=b.boundingClientRect;this.intersectionRect=b.intersectionRect||B();this.isIntersecting=!!b.intersectionRect;b=this.boundingClientRect;b=b.width*b.height;var c=this.intersectionRect;c=c.width*c.height;this.intersectionRatio=b?c\/b:this.isIntersecting?1:0}function p(b,c){c=c||{};if(\"function\"!==typeof b)throw Error(\"callback must be a function\");if(c.root\u0026\u00261!==c.root.nodeType)throw Error(\"root must be an Element\");\nthis._checkForIntersections=F(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=b;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(c.rootMargin);this.thresholds=this._initThresholds(c.threshold);this.root=c.root||null;this.rootMargin=this._rootMarginValues.map(function(e){return e.value+e.unit}).join(\" \")}function F(b,c){var e=null;return function(){e||(e=setTimeout(function(){b();e=null},c))}}function G(b,c,e,f){\"function\"==\ntypeof b.addEventListener?b.addEventListener(c,e,f||!1):\"function\"==typeof b.attachEvent\u0026\u0026b.attachEvent(\"on\"+c,e)}function H(b,c,e,f){\"function\"==typeof b.removeEventListener?b.removeEventListener(c,e,f||!1):\"function\"==typeof b.detatchEvent\u0026\u0026b.detatchEvent(\"on\"+c,e)}function z(b){try{var c=b.getBoundingClientRect()}catch(e){}if(!c)return B();c.width\u0026\u0026c.height||(c={top:c.top,right:c.right,bottom:c.bottom,left:c.left,width:c.right-c.left,height:c.bottom-c.top});return c}function B(){return{top:0,bottom:0,\nleft:0,right:0,width:0,height:0}}function D(b,c){for(;c;){11==c.nodeType\u0026\u0026c.host\u0026\u0026(c=c.host);if(c==b)return!0;c=c.parentNode}return!1}if(!(\"IntersectionObserver\"in u\u0026\u0026\"IntersectionObserverEntry\"in u\u0026\u0026\"intersectionRatio\"in u.IntersectionObserverEntry.prototype)){var w=[];p.prototype.THROTTLE_TIMEOUT=100;p.prototype.POLL_INTERVAL=null;p.prototype.observe=function(b){if(!this._observationTargets.some(function(c){return c.element==b})){if(!b||1!==b.nodeType)throw Error(\"target must be an Element\");this._registerInstance();\nthis._observationTargets.push({element:b,entry:null});this._monitorIntersections()}};p.prototype.unobserve=function(b){this._observationTargets=this._observationTargets.filter(function(c){return c.element!=b});this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())};p.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorIntersections();this._unregisterInstance()};p.prototype.takeRecords=function(){var b=this._queuedEntries.slice();this._queuedEntries=\n[];return b};p.prototype._initThresholds=function(b){b=b||[0];Array.isArray(b)||(b=[b]);return b.sort().filter(function(c,e,f){if(\"number\"!==typeof c||isNaN(c)||0\u003Ec||1\u003Cc)throw Error(\"threshold must be a number between 0 and 1 inclusively\");return c!==f[e-1]})};p.prototype._parseRootMargin=function(b){b=b||\"0px\";b=b.split(\/\\s+\/).map(function(c){c=\/^(-?\\d*\\.?\\d+)(px|%)$\/.exec(c);if(!c)throw Error(\"rootMargin must be specified in pixels or percent\");return{value:parseFloat(c[1]),unit:c[2]}});b[1]=b[1]||\nb[0];b[2]=b[2]||b[0];b[3]=b[3]||b[1];return b};p.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this._checkForIntersections(),this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(G(u,\"resize\",this._checkForIntersections,!0),G(v,\"scroll\",this._checkForIntersections,!0),\"MutationObserver\"in u\u0026\u0026(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(v,\n{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))};p.prototype._unmonitorIntersections=function(){this._monitoringIntersections\u0026\u0026(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,H(u,\"resize\",this._checkForIntersections,!0),H(v,\"scroll\",this._checkForIntersections,!0),this._domObserver\u0026\u0026(this._domObserver.disconnect(),this._domObserver=null))};p.prototype._checkForIntersections=function(){var b=this._rootIsInDom(),c=b?this._getRootRect():\nB();this._observationTargets.forEach(function(e){var f=e.element,r=z(f),q=this._rootContainsTarget(f),h=e.entry,n=b\u0026\u0026q\u0026\u0026this._computeTargetAndRootIntersection(f,c);e=e.entry=new C({time:u.performance\u0026\u0026performance.now\u0026\u0026performance.now(),target:f,boundingClientRect:r,rootBounds:c,intersectionRect:n});h?b\u0026\u0026q?this._hasCrossedThreshold(h,e)\u0026\u0026this._queuedEntries.push(e):h\u0026\u0026h.isIntersecting\u0026\u0026this._queuedEntries.push(e):this._queuedEntries.push(e)},this);this._queuedEntries.length\u0026\u0026this._callback(this.takeRecords(),\nthis)};p.prototype._computeTargetAndRootIntersection=function(b,c){if(\"none\"!==u.getComputedStyle(b).display){var e=z(b),f=e;b=b.parentNode;for(e=!1;!e;){var r=null;b==this.root||b==v.body||b==v.documentElement||1!=b.nodeType?(e=!0,r=c):\"visible\"!=u.getComputedStyle(b).overflow\u0026\u0026(r=z(b));if(r){var q=Math.max(r.top,f.top),h=Math.min(r.bottom,f.bottom),n=Math.max(r.left,f.left);f=Math.min(r.right,f.right);r=f-n;var A=h-q;f=0\u003C=r\u0026\u00260\u003C=A\u0026\u0026{top:q,bottom:h,left:n,right:f,width:r,height:A};if(!f)break}b=b.parentNode}return f}};\np.prototype._getRootRect=function(){if(this.root)var b=z(this.root);else{b=v.documentElement;var c=v.body;b={top:0,left:0,right:b.clientWidth||c.clientWidth,width:b.clientWidth||c.clientWidth,bottom:b.clientHeight||c.clientHeight,height:b.clientHeight||c.clientHeight}}return this._expandRectByRootMargin(b)};p.prototype._expandRectByRootMargin=function(b){var c=this._rootMarginValues.map(function(e,f){return\"px\"==e.unit?e.value:e.value*(f%2?b.width:b.height)\/100});c={top:b.top-c[0],right:b.right+c[1],\nbottom:b.bottom+c[2],left:b.left-c[3]};c.width=c.right-c.left;c.height=c.bottom-c.top;return c};p.prototype._hasCrossedThreshold=function(b,c){b=b\u0026\u0026b.isIntersecting?b.intersectionRatio||0:-1;c=c.isIntersecting?c.intersectionRatio||0:-1;if(b!==c)for(var e=0;e\u003Cthis.thresholds.length;e++){var f=this.thresholds[e];if(f==b||f==c||f\u003Cb!==f\u003Cc)return!0}};p.prototype._rootIsInDom=function(){return!this.root||D(v,this.root)};p.prototype._rootContainsTarget=function(b){return D(this.root||v,b)};p.prototype._registerInstance=\nfunction(){0\u003Ew.indexOf(this)\u0026\u0026w.push(this)};p.prototype._unregisterInstance=function(){var b=w.indexOf(this);-1!=b\u0026\u0026w.splice(b,1)};u.IntersectionObserver=p;u.IntersectionObserverEntry=C}})(window,document);\n(function(u,v){\"object\"===typeof exports\u0026\u0026\"undefined\"!==typeof module?module.exports=v():\"function\"===typeof define\u0026\u0026define.amd?define(v):u.ResizeObserver=v()})(this,function(){function u(a){for(var d=[],l=arguments.length-1;0\u003Cl--;)d[l]=arguments[l+1];return d.reduce(function(g,k){k=a[\"border-\"+k+\"-width\"];return g+(parseFloat(k)||0)},0)}var v=function(){function a(d,l){var g=-1;d.some(function(k,m){return k[0]===l?(g=m,!0):!1});return g}return\"undefined\"!==typeof Map?Map:function(){function d(){this.__entries__=\n[]}var l={size:{configurable:!0}};l.size.get=function(){return this.__entries__.length};d.prototype.get=function(g){g=a(this.__entries__,g);return(g=this.__entries__[g])\u0026\u0026g[1]};d.prototype.set=function(g,k){var m=a(this.__entries__,g);~m?this.__entries__[m][1]=k:this.__entries__.push([g,k])};d.prototype[\"delete\"]=function(g){var k=this.__entries__;g=a(k,g);~g\u0026\u0026k.splice(g,1)};d.prototype.has=function(g){return!!~a(this.__entries__,g)};d.prototype.clear=function(){this.__entries__.splice(0)};d.prototype.forEach=\nfunction(g,k){var m=this;void 0===k\u0026\u0026(k=null);var x=0;for(m=m.__entries__;x\u003Cm.length;x+=1){var y=m[x];g.call(k,y[1],y[0])}};Object.defineProperties(d.prototype,l);return d}()}(),C=\"undefined\"!==typeof window\u0026\u0026\"undefined\"!==typeof document\u0026\u0026window.document===document,p=\"undefined\"!==typeof global\u0026\u0026global.Math===Math?global:\"undefined\"!==typeof self\u0026\u0026self.Math===Math?self:\"undefined\"!==typeof window\u0026\u0026Math===Math?window:Function(\"return this\")(),F=function(){return\"function\"===typeof requestAnimationFrame?\nrequestAnimationFrame.bind(p):function(a){return setTimeout(function(){return a(Date.now())},1E3\/60)}}(),G=2,H=function(a,d){function l(){m\u0026\u0026(m=!1,a());x\u0026\u0026k()}function g(){F(l)}function k(){var E=Date.now();if(m){if(E-y\u003CG)return;x=!0}else m=!0,x=!1,setTimeout(g,d);y=E}var m=!1,x=!1,y=0;return k},z=20,B=\"top right bottom left width height size weight\".split(\" \"),D=\"undefined\"!==typeof MutationObserver,w=function(){this.mutationEventsAdded_=this.connected_=!1;this.mutationsObserver_=null;this.observers_=\n[];this.onTransitionEnd_=this.onTransitionEnd_.bind(this);this.refresh=H(this.refresh.bind(this),z)};w.prototype.addObserver=function(a){~this.observers_.indexOf(a)||this.observers_.push(a);this.connected_||this.connect_()};w.prototype.removeObserver=function(a){var d=this.observers_;a=d.indexOf(a);~a\u0026\u0026d.splice(a,1);!d.length\u0026\u0026this.connected_\u0026\u0026this.disconnect_()};w.prototype.refresh=function(){var a=this.updateObservers_();a\u0026\u0026this.refresh()};w.prototype.updateObservers_=function(){var a=this.observers_.filter(function(d){return d.gatherActive(),\nd.hasActive()});a.forEach(function(d){return d.broadcastActive()});return 0\u003Ca.length};w.prototype.connect_=function(){C\u0026\u0026!this.connected_\u0026\u0026(document.addEventListener(\"transitionend\",this.onTransitionEnd_),window.addEventListener(\"resize\",this.refresh),D?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener(\"DOMSubtreeModified\",this.refresh),this.mutationEventsAdded_=\n!0),this.connected_=!0)};w.prototype.disconnect_=function(){C\u0026\u0026this.connected_\u0026\u0026(document.removeEventListener(\"transitionend\",this.onTransitionEnd_),window.removeEventListener(\"resize\",this.refresh),this.mutationsObserver_\u0026\u0026this.mutationsObserver_.disconnect(),this.mutationEventsAdded_\u0026\u0026document.removeEventListener(\"DOMSubtreeModified\",this.refresh),this.mutationsObserver_=null,this.connected_=this.mutationEventsAdded_=!1)};w.prototype.onTransitionEnd_=function(a){var d=a.propertyName;void 0===d\u0026\u0026\n(d=\"\");(a=B.some(function(l){return!!~d.indexOf(l)}))\u0026\u0026this.refresh()};w.getInstance=function(){this.instance_||(this.instance_=new w);return this.instance_};w.instance_=null;var b=function(a,d){for(var l=0,g=Object.keys(d);l\u003Cg.length;l+=1){var k=g[l];Object.defineProperty(a,k,{value:d[k],enumerable:!1,writable:!1,configurable:!0})}return a},c=function(a){return(a=a\u0026\u0026a.ownerDocument\u0026\u0026a.ownerDocument.defaultView)||p},e={x:0,y:0,width:0,height:0},f=function(){return\"undefined\"!==typeof SVGGraphicsElement?\nfunction(a){return a instanceof c(a).SVGGraphicsElement}:function(a){return a instanceof c(a).SVGElement\u0026\u0026\"function\"===typeof a.getBBox}}(),r=function(a){this.broadcastHeight=this.broadcastWidth=0;this.contentRect_={x:0,y:0,width:0,height:0};this.target=a};r.prototype.isActive=function(){var a=this.target;if(C)if(f(a))a=a.getBBox(),a={x:0,y:0,width:a.width,height:a.height};else{var d=a,l=d.clientWidth;a=d.clientHeight;if(l||a){var g=c(d).getComputedStyle(d);var k=g;for(var m=[\"top\",\"right\",\"bottom\",\n\"left\"],x={},y=0;y\u003Cm.length;y+=1){var E=m[y],I=k[\"padding-\"+E];x[E]=parseFloat(I)||0}k=x;E=k.left+k.right;m=k.top+k.bottom;x=parseFloat(g.width)||0;y=parseFloat(g.height)||0;\"border-box\"===g.boxSizing\u0026\u0026(Math.round(x+E)!==l\u0026\u0026(x-=u(g,\"left\",\"right\")+E),Math.round(y+m)!==a\u0026\u0026(y-=u(g,\"top\",\"bottom\")+m));d!==c(d).document.documentElement\u0026\u0026(d=Math.round(x+E)-l,a=Math.round(y+m)-a,1!==Math.abs(d)\u0026\u0026(x-=d),1!==Math.abs(a)\u0026\u0026(y-=a));a={x:k.left,y:k.top,width:x,height:y}}else a=e}else a=e;this.contentRect_=a;\nreturn a.width!==this.broadcastWidth||a.height!==this.broadcastHeight};r.prototype.broadcastRect=function(){var a=this.contentRect_;this.broadcastWidth=a.width;this.broadcastHeight=a.height;return a};var q=function(a,d){var l=d.x;var g=d.y,k=d.width;d=d.height;var m=\"undefined\"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object;m=Object.create(m.prototype);b(m,{x:l,y:g,width:k,height:d,top:g,right:l+k,bottom:d+g,left:l});l=m;b(this,{target:a,contentRect:l})},h=function(a,d,l){this.activeObservations_=\n[];this.observations_=new v;if(\"function\"!==typeof a)throw new TypeError(\"The callback provided as parameter 1 is not a function.\");this.callback_=a;this.controller_=d;this.callbackCtx_=l};h.prototype.observe=function(a){if(!arguments.length)throw new TypeError(\"1 argument required, but only 0 present.\");if(\"undefined\"!==typeof Element\u0026\u0026Element instanceof Object){if(!(a instanceof c(a).Element))throw new TypeError('parameter 1 is not of type \"Element\".');var d=this.observations_;d.has(a)||(d.set(a,\nnew r(a)),this.controller_.addObserver(this),this.controller_.refresh())}};h.prototype.unobserve=function(a){if(!arguments.length)throw new TypeError(\"1 argument required, but only 0 present.\");if(\"undefined\"!==typeof Element\u0026\u0026Element instanceof Object){if(!(a instanceof c(a).Element))throw new TypeError('parameter 1 is not of type \"Element\".');var d=this.observations_;d.has(a)\u0026\u0026(d[\"delete\"](a),d.size||this.controller_.removeObserver(this))}};h.prototype.disconnect=function(){this.clearActive();this.observations_.clear();\nthis.controller_.removeObserver(this)};h.prototype.gatherActive=function(){var a=this;this.clearActive();this.observations_.forEach(function(d){d.isActive()\u0026\u0026a.activeObservations_.push(d)})};h.prototype.broadcastActive=function(){if(this.hasActive()){var a=this.callbackCtx_,d=this.activeObservations_.map(function(l){return new q(l.target,l.broadcastRect())});this.callback_.call(a,d,a);this.clearActive()}};h.prototype.clearActive=function(){this.activeObservations_.splice(0)};h.prototype.hasActive=\nfunction(){return 0\u003Cthis.activeObservations_.length};var n=\"undefined\"!==typeof WeakMap?new WeakMap:new v,A=function(a){if(!(this instanceof A))throw new TypeError(\"Cannot call a class as a function.\");if(!arguments.length)throw new TypeError(\"1 argument required, but only 0 present.\");var d=w.getInstance();d=new h(a,d,this);n.set(this,d)};[\"observe\",\"unobserve\",\"disconnect\"].forEach(function(a){A.prototype[a]=function(){return(d=n.get(this))[a].apply(d,arguments);var d}});var t=\"undefined\"!==typeof p.ResizeObserver?\np.ResizeObserver:p.ResizeObserver=A;return t});dataLayer.push({event:\"doneWithPolyfills\"});\"use strict\";\n(function(u){function v(){}function C(){}var p=String.fromCharCode,F={}.toString,G=F.call(u.SharedArrayBuffer),H=F(),z=u.Uint8Array,B=z||Array,D=z?ArrayBuffer:B,w=D.isView||function(f){return f\u0026\u0026\"length\"in f},b=F.call(D.prototype);D=C.prototype;var c=u.TextEncoder,e=new (z?Uint16Array:B)(32);v.prototype.decode=function(f){if(!w(f)){var r=F.call(f);if(r!==b\u0026\u0026r!==G\u0026\u0026r!==H)throw TypeError(\"Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'\");f=\nz?new B(f):f||[]}for(var q=r=\"\",h=0,n=f.length|0,A=n-32|0,t,a,d=0,l=0,g,k=0,m=-1;h\u003Cn;){for(t=h\u003C=A?32:n-h|0;k\u003Ct;h=h+1|0,k=k+1|0){a=f[h]\u0026255;switch(a\u003E\u003E4){case 15:g=f[h=h+1|0]\u0026255;if(2!==g\u003E\u003E6||247\u003Ca){h=h-1|0;break}d=(a\u00267)\u003C\u003C6|g\u002663;l=5;a=256;case 14:g=f[h=h+1|0]\u0026255,d\u003C\u003C=6,d|=(a\u002615)\u003C\u003C6|g\u002663,l=2===g\u003E\u003E6?l+4|0:24,a=a+256\u0026768;case 13:case 12:g=f[h=h+1|0]\u0026255,d\u003C\u003C=6,d|=(a\u002631)\u003C\u003C6|g\u002663,l=l+7|0,h\u003Cn\u0026\u00262===g\u003E\u003E6\u0026\u0026d\u003E\u003El\u0026\u00261114112\u003Ed?(a=d,d=d-65536|0,0\u003C=d\u0026\u0026(m=(d\u003E\u003E10)+55296|0,a=(d\u00261023)+56320|0,31\u003Ek?(e[k]=m,k=k+1|0,m=-1):\n(g=m,m=a,a=g))):(a\u003E\u003E=8,h=h-a-1|0,a=65533),d=l=0,t=h\u003C=A?32:n-h|0;default:e[k]=a;continue;case 11:case 10:case 9:case 8:}e[k]=65533}q+=p(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15],e[16],e[17],e[18],e[19],e[20],e[21],e[22],e[23],e[24],e[25],e[26],e[27],e[28],e[29],e[30],e[31]);32\u003Ek\u0026\u0026(q=q.slice(0,k-32|0));if(h\u003Cn){if(e[0]=m,k=~m\u003E\u003E\u003E31,m=-1,q.length\u003Cr.length)continue}else-1!==m\u0026\u0026(q+=p(m));r+=q;q=\"\"}return r};D.encode=function(f){f=void 0===f?\"\":\"\"+f;var r=f.length|\n0,q=new B((r\u003C\u003C1)+8|0),h,n=0,A=!z;for(h=0;h\u003Cr;h=h+1|0,n=n+1|0){var t=f.charCodeAt(h)|0;if(127\u003E=t)q[n]=t;else{if(2047\u003E=t)q[n]=192|t\u003E\u003E6;else{a:{if(55296\u003C=t)if(56319\u003E=t){var a=f.charCodeAt(h=h+1|0)|0;if(56320\u003C=a\u0026\u002657343\u003E=a){t=(t\u003C\u003C10)+a-56613888|0;if(65535\u003Ct){q[n]=240|t\u003E\u003E18;q[n=n+1|0]=128|t\u003E\u003E12\u002663;q[n=n+1|0]=128|t\u003E\u003E6\u002663;q[n=n+1|0]=128|t\u002663;continue}break a}t=65533}else 57343\u003E=t\u0026\u0026(t=65533);!A\u0026\u0026h\u003C\u003C1\u003Cn\u0026\u0026h\u003C\u003C1\u003C(n-7|0)\u0026\u0026(A=!0,a=new B(3*r),a.set(q),q=a)}q[n]=224|t\u003E\u003E12;q[n=n+1|0]=128|t\u003E\u003E6\u002663}q[n=n+1|0]=128|t\u002663}}return z?\nq.subarray(0,n):q.slice(0,n)};c||(u.TextDecoder=v,u.TextEncoder=C)})(\"undefined\"==typeof global?\"undefined\"==typeof self?this:self:global);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(f){function p(a){a=a||\"\";if(a instanceof URLSearchParams||a instanceof p)a=a.toString();this[k]=r(a)}function v(a){var c={\"!\":\"%21\",\"'\":\"%27\",\"(\":\"%28\",\")\":\"%29\",\"~\":\"%7E\",\"%20\":\"+\",\"%00\":\"\\x00\"};return encodeURIComponent(a).replace(\/[!'\\(\\)~]|%20|%00\/g,function(b){return c[b]})}function t(a){return a.replace(\/[ +]\/g,\"%20\").replace(\/(%[a-f0-9]{2})+\/ig,function(c){return decodeURIComponent(c)})}function u(a){var c={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};w\u0026\u0026(c[f.Symbol.iterator]=\nfunction(){return c});return c}function r(a){var c={};if(\"object\"===typeof a)if(x(a))for(var b=0;b\u003Ca.length;b++){var d=a[b];if(x(d)\u0026\u00262===d.length)n(c,d[0],d[1]);else throw new TypeError(\"Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements\");}else for(b in a)a.hasOwnProperty(b)\u0026\u0026n(c,b,a[b]);else for(0===a.indexOf(\"?\")\u0026\u0026(a=a.slice(1)),a=a.split(\"\\x26\"),b=0;b\u003Ca.length;b++){d=a[b];var g=d.indexOf(\"\\x3d\");-1\u003Cg?n(c,t(d.slice(0,g)),t(d.slice(g+1))):d\u0026\u0026n(c,t(d),\"\")}return c}\nfunction n(a,c,b){b=\"string\"===typeof b?b:null!==b\u0026\u0026void 0!==b\u0026\u0026\"function\"===typeof b.toString?b.toString():JSON.stringify(b);Object.prototype.hasOwnProperty.call(a,c)?a[c].push(b):a[c]=[b]}function x(a){return!!a\u0026\u0026\"[object Array]\"===Object.prototype.toString.call(a)}a:{try{if(f.URLSearchParams\u0026\u0026\"bar\"===(new f.URLSearchParams(\"foo\\x3dbar\")).get(\"foo\")){var h=f.URLSearchParams;break a}}catch(a){}h=null}var e=h\u0026\u0026\"a\\x3d1\"===(new h({a:1})).toString(),q=h\u0026\u0026\"+\"===(new h(\"s\\x3d%2B\")).get(\"s\"),k=\"__URLSearchParams__\",\ny=h?function(){var a=new h;a.append(\"s\",\" \\x26\");return\"s\\x3d+%26\"===a.toString()}():!0,l=p.prototype,w=!(!f.Symbol||!f.Symbol.iterator);h\u0026\u0026e\u0026\u0026q\u0026\u0026y||(l.append=function(a,c){n(this[k],a,c)},l[\"delete\"]=function(a){delete this[k][a]},l.get=function(a){var c=this[k];return this.has(a)?c[a][0]:null},l.getAll=function(a){var c=this[k];return this.has(a)?c[a].slice(0):[]},l.has=function(a){return Object.prototype.hasOwnProperty.call(this[k],a)},l.set=function(a,c){this[k][a]=[\"\"+c]},l.toString=function(){var a=\nthis[k],c=[],b,d;for(b in a){var g=v(b);var m=0;for(d=a[b];m\u003Cd.length;m++)c.push(g+\"\\x3d\"+v(d[m]))}return c.join(\"\\x26\")},q=!q,e=!q\u0026\u0026h\u0026\u0026!e\u0026\u0026f.Proxy,Object.defineProperty(f,\"URLSearchParams\",{value:e?new Proxy(h,{construct:function(a,c){return new a((new p(c[0])).toString())}}):p}),e=f.URLSearchParams.prototype,e.polyfill=!0,e.forEach=e.forEach||function(a,c){var b=r(this.toString());Object.getOwnPropertyNames(b).forEach(function(d){b[d].forEach(function(g){a.call(c,g,d,this)},this)},this)},e.sort=\ne.sort||function(){var a=r(this.toString()),c=[],b,d;for(b in a)c.push(b);c.sort();for(b=0;b\u003Cc.length;b++)this[\"delete\"](c[b]);for(b=0;b\u003Cc.length;b++){var g=c[b],m=a[g];for(d=0;d\u003Cm.length;d++)this.append(g,m[d])}},e.keys=e.keys||function(){var a=[];this.forEach(function(c,b){a.push(b)});return u(a)},e.values=e.values||function(){var a=[];this.forEach(function(c){a.push(c)});return u(a)},e.entries=e.entries||function(){var a=[];this.forEach(function(c,b){a.push([b,c])});return u(a)},w\u0026\u0026(e[f.Symbol.iterator]=\ne[f.Symbol.iterator]||e.entries))})(\"undefined\"!==typeof global?global:\"undefined\"!==typeof window?window:this);\u003C\/script\u003E\n(function(constructor) {\n  if (constructor \u0026amp;\u0026amp;\n      constructor.prototype \u0026amp;\u0026amp;\n      constructor.prototype.childElementCount == null) {\n    Object.defineProperty(constructor.prototype, \u0026#39;childElementCount\u0026#39;, {\n      get: function() {\n        var i = 0, count = 0, node, nodes = this.childNodes;\n        while (node = nodes[i++]) {\n          if (node.nodeType === 1) count++;\n        }\n        return count;\n      }\n    });\n  }\n})(window.Node || window.Element);\n",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 3
      }, {
        "function": "__html",
        "priority": 9,
        "metadata": ["map"],
        "teardown_tags": ["list", ["tag", 3, 0]],
        "once_per_load": true,
        "vtp_html": "\u003Cscript id=\"Ampliffy_Gtm_Tag_parameters\" type=\"text\/gtmscript\"\u003Egamptags_parameters=document.querySelectorAll('script[id\\x3d\"Ampliffy_Gtm_Tag_parameters\"]');for(var a=0;a\u003Cgamptags_parameters.length;a++)gamptags_parameters[a].remove();delete gamptags_parameters;var compressedParameters=\"7V0NU9u41v4rbmZYwp0QEqdASy\/vTgJl23cIMEB3717oeBxbSdw6dq7t8LG9\/e\/3OZLt2MFJDOQLVp0UHOlIOjo6es7RkSx+FHRz4FhBQ\/dZYa9QKBX6g5Zt+V3maR29V9irJFMcN0rTe33barfvNYe5hb1qiohSQGJafqA7BtNaLLhlzNF007fdwNcsBy3179BWz3K0sWR91w+Q62mot7BXy0uNh5zU7dYjqgZxrpoNt9djDh5izncfU4K3kbtE1IPHFIhaiIltt2MZmjHwA7entQeOEVgujRDGR+gGBgyktq1TRpIieixurO02rHZxTVWjJDyu1Q7FJ7jvM7e9plaCruWXoTlahwWHlt+39fu6+SXUvtPWN2YEa+oO\/+Sv6LPfPMMAhQUr9dxlddDc6AG7YIbrmM2D0y+X1I9hvmleWFBzJnik3l0e4MfGWq1xo3uoSqd6p\/epmMEuRKYepNMPLY+IKYOaOg+bSvBD1V5aPXbI0Ipm0k\/6+rl9wpjJzKJO9PNkqhkxpZdJ324sdtt3vUDrMqvTDdDwdqXCcz3WZh6DdpHwVTVw+0LKfEREvsf87gGSLD5SCZ6NLjO+nwuCcstyzOItfri3goVj95ZB9iq+xerXonHzWDDwaMjR2JHlkUYMR7+V4GgXHE0om2A0szB1H2qml\/3g3mboQaBbjuV0Dq0b0GbXWxEyL+u+b3WQJ8pSh6Bv7C6o20heq5Hu2qzNOVcPerrXsZxLty8ytvt3It29YV7bdm\/\/FOk3lm+1qDKVM4fegb\/cc8A0wx4w78j1eno4jyYQhFpWbrseBw\/dRM1vqiNpMUwIBRDjPlaVaaoxGxJyvaOwHBoL511SIZvnZ3oHM1bQCu1wBrYNsYAt\/mNlZ8zDOTFU0+wpATXLOSu+9PvLnxXznxIroforqsVJvkft1unZqDEBF\/XQ\/pm\/uW7HZp+dgEE\/oHu6Tdo7NKf4vAmlmCzOax9ftjjPaRV2CKIqCx\/lEcyhjJVIIvSq8NRwBgo4S7SfZwC4VZgsqrpjdEkdYgFhRvmuzcpwwGiQ6icHn04BF5U6wQNndI4SDF2ZKRJM8kyU4dexMgMEWH8xn0Sw3cCH0qpr2\/hG8DIGIKBlaYwIwaDc0+8+RZ4FuK0KC8iR6tGDM1eQP9DgPI5OsQz\/kmZq5OD6gQcJZGLUcEiOivR8zv4zYH7gN1nQdUn4SWY+3kGXHd2uhyuy3+rNQ9Znjqk7wTG59nyeM14Rr1Q9eFMFo0douqc7A8wA4oEmuj4IXAG0RHxk2TbzzhkWDBZg6j7ZruVf6G3ds6ia3cbh0RlVsNtwBj0818OiUIOh\/crm9GTQi6lTos9AzXyjwRHrd8uEkvKepIcHfX\/zsBPQUcqCuv1hmQGUuQ7VJf2uwZ3lmtv3WMuC5KmT8HwbljnaOSShMy3044xlYf6TOzS+N9ziiQ9nbJWG4QljwLNe7hhgStX5uiBz5rz84XnxU+TRHhVWM9yJ4UvatVqKgaZRF7GVhgi1NA13EPhgh0hVuAKNjURzKYfszHVtsvdNYYEFd5U6wi2wpMy7YShAURq+CtD8vs4DOvB6Nd\/wKKrjOvY9j7B5oV3QwCnFejS9BQ9ZC7osJEWMRnfuNbLJqD5AD+PQkNv3tR7Fsyr4Ny0AdlfYe5+Dahjzyk3No1G5qKNYV17idM09I8yOqXs0YoU9lWKZ+l+u021pXEAYhD4cM0RDq1wySV8RErYxEMzkIc+UPFNkfHR4NpoOR43GKEmEKtSIu4i0j2UBgnWOb5lYWZlaF84P6BBVAaHfQ+PQ1RuL+uy5t1AW3hAmpdUb9LQUAVoLabRbmrG5KEUcJ0Xasjq5qsymS1SY7LuIORb2rr6OpPtdqLlhuz56OAgCijJC0C7cmVtP72vM0bHeE9KPEyG3lh5gfSzEHqdHnHHh3uqIY\/Y912C+jyEO501croppkCgKwrZlY0jQVK1Sg47EWRwrtDYtpVHcwdpwpFlBQPKFJqVpjH5P6w3swAKyI01r3UNsJoYa2T8K3qBlYexVTFqEFxUQ\/+a5vr8v3EIF0aABD+JeVb4q+\/v7yvrAMVkbq1NzXflVib\/spSg\/UFWk9w+rqeaupiqqAa8Pa1Fz16J+\/fBDrP7jvin\/2Fcq5d0PPws\/SwUs+jFHyUXFNIu2F\/h+w1W0SwHRbL2t7VR2aLh231W239feqVtN1oOD7Wq\/AxBc5ti6j7nDfA0mQjvkv33tGP8vD3hIG+BK0+w7u791PROiL9x2MT85OHR1H5scgfb91g9peXKCFrEQreVCNXvD+PgA6hqNP0iqyIGsNNh5GDs+8YVxDPP6nuV6VgAML6j4CjJCfCgc2XfoT1uHjoS0I5k+t8bD2c9pzMjdD0P5fOFBuzmVjEyfr0aGdYpA\/yiVmLea2+bGRGg7imDJ0umgS+H0zSrJkeEpBfnCcQx7unmnASeH0znESuRy+xWS8KzAJYkDhtJgmyIcqSsBQBTS1luWLYYnWSZaziVJRtsgWsd1crAbUuXiOLvGqUyHxfLyzeWPuXa1q74rva98LV29360MH9Rt\/vQuSsIDJQHAMVbCScFqEp2kyY4q\/T4zrDbG9Rvck2jLCKPu8vkF202rb+QAJ8d4LkLwD+pGQlgzNEVE5yJz9JgikWWaXgZi51KOS7wfV4Q7B5jA6AECCg8LTi5nOePK8Unuaj1XeIQgDhOH8Xae8LM0I6A8XzmgzMBCCZQvFyj5iL1AoCS+Y6CkubVTITSs7kRPlCagEt49T\/s7IiQkMKbMa4HI5iwgEp16EjaS15jARq7DEhulE7lCTqTExnHYSJPtKcg4udzzkTGZkDjkdTU85aWXrp3Wxg8KBZj7RYfdKodQiY0ywqEUPC1ulIx9nAHBbnYUrf7DCrqXiBgg3F3c+FA09o1fjTJOCqIF07rZu3EtU6ls\/KqX3RaPfCLWy6OexbjNdolt\/EhulF4XPt4xY4Bta6XtuT3FQP9buvFdfMNer6c7LHhzXdj4EO9OXgTgc\/8a8VL+tan7UNy6Y\/6BoNAXJ7BsoD0dJLgupMp4wb754Tru\/3UBgY4w\/sF++QX9\/Sm27vWSUWqh8yUE6jb2ImaZ5yF+DHbpt0JSxXafcjZo1U1seyrNc7D489opfJ2VSTo9W6JJGnHXaw+tjjRJ0l1ftElKuevVUvVvaXDGlXg1rvgKhHUf45FnxHwl\/En4mzf8Db3vWm2npL6b4H2zu76O0cIGWrR1\/CqCEu9WEwkrM0FCuM5yg0siYXZdM0PC8bglN7jkBteLcBk5UMoNLgmUcwXKV+MyyiBuFkK+7g0ugkicoT2hM6mrhZITF9YSJSVKLgElN6ulzSrwcOdtpfQWy+rwaefviYyQwJgyrwYZ5da\/xEO5vB7lO6fXGOXKrf\/8yDi53GK2\/uey8X\/tyK3\/WZgkufUvTZJ00ce76HLr\/3EGZ3K58QaHz86FBilmgHty61\/C3+uP48qt\/4UiYT7X++lb\/0ct+WqrBEIJhI8DQrnzPwUoX93O\/yhOyo1\/iZMSJ\/M4jHLjPwsgX9\/G\/whCyt0tCY1zgsbxQPZqdrfki62PB8bJ5V7w7tac9rZo0+xV726NWCS5uSUtknTWxzvrcnPrcfZmcrnVccTl3pZEP4l+eUIVcm9rBYFwJntb8q1WCYQSCHMBodzbmgKUr3lvS77UKnFS4mRuh1EGcLMA8lXvbcl3WiVISpDMC5LyndYkTL2+d1pHgVFu+ks4nA8cjgev1YZDuemfCxonb97LTf9VfqH12lnNTX\/5Rqu0SNJBl5v+WfZmXIl5OeJ8di4yQjED2JOb\/hL9Xn8MV276LxQI8znez7\/Lmv8l7\/AAFP0V7+Xj4Yg3OBEPpTco8XAJeBgFZ4dRib8ZHqLzY8q8DjwMd68kHko8zK5L4qHEw1eNh+FCWbqHEg4lHEo4lHAovUMJhxIOJRy+LjjESLA7mlGEO76G\/XXb8rvobkfvYezGZjtuJoHe69tWu32vOcxF7vNvHY0v2wv0Dmr555vNTUVpsI7lKOeDloXhUc489xszAuVS7yibm\/937QiiCytge8pI3WUDG\/3nlw3l9OT4T0VR\/u06IMrPCIpcQC\/3lGOmm8xrubpnKslWz47rBx+bH08u95Q6aagCDVWOXNv8gKKCDvpq9QPF1p3OAOOJswX\/r9\/oFzz1uqDQGQGkBRDr1jdkCPLrAop6fUw+wx04ASrbV9arlZ231XVcUIAMHH5gSBUZ6na18i7M+AtdpLnEM2o7u+9rO5tqmKeb1FpY6JsfVdXD8QWgJaPUq4tm\/fxSOfp8\/FH5cn78lWj+uSWYSvRmHNeK7xlI7wZB39\/b2sLMLXti3Ppi2GhEkLzF+1L+5qOjyeq5UD865rjRTuJM+EbOzP7AN3\/BYyX07jzWuyYzrQGqQsPQHwzRS1O+d5vV7VepfbFtm5X68UOiq6B+zenqt3S1UqVa5RxNftIrVKuwn9Sd9ag36ItldPWBaTHHYLwnvY6x1a732fudun3y59avWLnsXxm60WWtAR2H+\/oLljkHOLkG12S\/ui7ktj4itvWhCJL94wdrZjZlVsVTaA49hVWdMqpE4jyjGb8RTydV9c4RTorOwJudi88Sv5Q6M1apsvmJlRu4WfHKK5sfrxw1Z8Urr2z2CBgfaJuZTFOq+myZZt2hvgywfsBHjNUvdFWHAVArclWXb7SX5VU\/4CPWupe8piPVq1akJ5Fv0Je2pHvAx1TlW6ZSkXv6dkcqVb7BfOKCrvX7v3ft5ud25WSFFnRZd\/KtwnxZ\/eXcWwnCOQbz2au5LB92Hq7Ks9dyWW7P3ET6rJVclo2cG6fPWsdlAe\/Mce\/Zq7gsDJ39wjjjYFjaBpl6oG9inxUwoQ8CdwIGjoAJbbnC7pRvLE+3wXc5uNkKt3+3fv0LFdbrH6tnWv1GOwnuTi6OD38Z7POya7X6mnqEz81D6EfqLz6soOXsV8uVUvVNtFNJmSV8oT3u96VqqVRKQlVSdNHdHDMSXeoQyXNX7BmjMTu+U2dfUm28HLZfjrQfRnTEJUrp2TXBn1AUestec\/QAhp7\/+u9\/lauvMPAK\/4qX6P1u8WrdMtdLWMC9re22Wu1W9X2lbb7fYe+M1rb6rvUWeT\/WLQdv5MMFWd9TAm\/Afn6l2\/AVZfiK\/YbygxLoHzUq2jRdY0CnFMp0OiFgH21+ZqG4HrqNGx+IrsxdFHgio16lyNX9e8dANjXL26R\/lAGsoFKACdMpIwEHkzw+ibeANRjYrW\/+FtEJtyfFmp\/kDaQhY37jHtpwouMWgpjFq8pXzodf7useaE5ck5Ut+MNe0GA4Q8GKyCxxCiGSnxu4pCDlQuEL7ilQOACCThsnaA43oJwt1jwwKEKJZhEZTNaXwfD4IyP8SAgd\/eHHybSO68J\/Hjk5VC0VDNsXJ7hwnCQ8aoTDKhWREXTpggWEPzJOH4VVVMqVXZx+sTz4k+ljTWAk5OvpvY8NfxtHclqu+302TWS5Flld6EP4s0CVCV14ahNZnlZL9+n8oDjViKVBHxPIIo1J3Auyph608N\/cWNttYKauqRUDX9trtUMkXB6QVd9tiCrwHHQtvwx7rUGV6+YXJMY1rKkqGsdP8YyiqrqBZ34602c2hOl6qKJooO5kPWcguAjziyhUbumOOPJF4WBeWy16Vjc21mpHqAG+BhqitvgkGGHt4x0k6uh2PXQzfqs3af3oF5\/A\/9p2Ax8sLvD8vrK2fSjScN1sVgK8u2HKu1ESnhCSbB9y6eDSEvSV+OJnU9GRN0Tkun16rOLRYQBZsKbjnpMTpnut+4sEoW6es\/8MmB\/4TRZ0XXO6JA6jk5rHNM3rHA6eIpg3VRoLfMHJuIFuEwEfFvI3BbUeXiZzzqDVFob3XqgTLpURDzgOi+fozpkco3gy6MXU43heq9Qnsv0mLmf5F\/wALlLRFz4YONYrWMPxzIZljrKEJLCAY8D+Ge6hEW0+VnSYaZhb\/IOJRicCzU\/85OD07tfNCzqL2ORHEb3P4tyhKPyUEXRwnJN+8\/OMn8PjjEfP4KierOjZ7JGChcxduufMHBghczSXn8TaYXjU89msQccEd6bb5Kc8MSVvc0y9BPWTJFKhn8NTpCMtcukcI30Wdcd3qYw0kuhO3N5RZE6eIkoO5PTkB\/c2Q9yTjvziviXctISmY0vFyEKxMicqI5iGUGSDH9wnU6WqaqV\/xyFohOaSgHSEAAmsDND07kftzvDEMeeJaNUKPE9EGw3cHYUvny6bx6Hruqbu4FNMtycaCzGQT3XCFfGGwHQFOQspn4htGELe4OX50+32+SS7HTvwKelhbhXXyzjrz9VFrUQW3NFvrA4WCTwRTjZMoGX+Q0gIXzc7fchQhSVc30AWWUU0TDKFCzJe6rD\/4bpgQkp9IT5CJCvhI+BmPDzjbrzY4OP+vJEU+HJDFyCREtIIp2DxNj3qyHSb3kMEXseYhxyG2T0dIfFPDUEyzqeB8j7CrVmG6zBRNEv0GzgPy\/cbIlGsot9QIT1M6fGKuQ5p1hbjN8RtcttuwrbV223ANIg4tjZYcIu3dxocrkln+dybrX+R5mFx\/kWMzbF\/MXczHDUZmWEep3myJRalJxjjLKmdeezGcgf+6KIaa+ge\/BpunN27Mt704uDOG0IVmz3DARsEMrkM8AKMa7L7wr5uktnAj8hyIuqFB8S9lmg5k1xON54zWO2vzoo61fXlGceYjZR9zLGW8Fgw8GhGTFkwqAcRAQ6AeW1A8L8EQdcyTYYK1OWZ5OQYrOZqPqUl3AQszSrnUOPF2eYxcsE1yHEs+PdhjD1Ch6WY8IesLsyKp4zAHAz5lCaHhvwZVjxiv1Kfm6WMmuBmMmOJWYNNP8Atiks1lJEGrWjYeCLPyzRvT7FtrOxgGzB02C5wQzrohGcHNczKLBvYSfJpGxZmMDC68BmPithhgux3D8x7Z5M8UPT3iAZvfBTubRRkQyPjaKpvRyN1tAldt61OGDyzWZvHhZKhvLs\/6M6AsAJS8O3Y7iacp+WY4BW3v5EOL3dJPM74prhbkOWN2uS27AbHnGDGcKuL38W8djq4noKuPHH5kSZuTY17w8ZfOHDtKGHG5jUlgwXa1shsLMqwjlrVp0epUTR7YSyWur5lshbfzJ4SlQ5DR\/MyzOn48Ioa5vyx33HL1xwx4bZ1x6gvnD78Qx3R19Wx94uO9Y4BxYfhXi\/UifO05OhuHtwwwydBiEYinuDY91ooZbL8YTIBHMOheKwX6O+7TFhrxCC3aGO6yiHmkbmyWvHlEdagWYsxpunw7uToVd7Va8Kji7ABKt22SJGTuKAnuxVetFY\/\/NeZ7sGPJd0Gd6kNk5mZ7CUFtYcGZUEmezSifRpJforJzgY2lM622i\/kTFjMf7jfSzYhablXxIzFbC5x2Sp4GLFhads1OdC9PNyforurB\/0jrC3DbscsRHZ7IcZn2HEOw6HZmPkCbaSZ+aD9FK1bEODH7SW2MPGKRT7QD+vj72fENYYVhCe8ZofLE1oR6BzuDuIETubZmwWutiawuqrB0KE2TmJ+seZlHCezi43KwOhzbcIEbVmBFV0+rV4J+z6VwbkZ2EktLy9gOlUec12DTTI2czDMufRUWGh8ag2rTWukgYMlMI4uc3rgAf+Iv3mL6GcbBtAkq4d3uKAxqvplSI4RQgvIrtH\/4UIM40v6e2DjuoNiXAFRlSNf4BBr8KPoK\/4CL94TNhhhJIDW8nuwWQEHI9g46gFeTeLs1+r5y+CNLFEm2WxrUrPi1a1kHXgBa1q7DwsdYRB4u\/gV61SWbGOB4Yb50PYwDzoGgyEMywSCIt68qg3PopjEQIVe7otfDxNvhCFa0sWUozbx\/lbj9PLytKnVTw4+ndIb+9nEs3qPLK5dvF+Xk5UU8TNZGX0rL0smJ6cnH8dQxK0P87O6kq4hm3+6iZ252sCjV\/Vsy8AV7XhrkpJAznr94L6wV\/35Pw\\x3d\\x3d\";\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 6
      }, {
        "function": "__html",
        "priority": 8,
        "metadata": ["map"],
        "teardown_tags": ["list", ["tag", 4, 0]],
        "once_per_load": true,
        "vtp_html": "\u003Cscript id=\"Ampliffy_Gtm_Tag_bundle1\" type=\"text\/gtmscript\"\u003Egamptags_bl1=document.querySelectorAll('script[id\\x3d\"Ampliffy_Gtm_Tag_bundle1\"]');for(var a=0;a\u003Cgamptags_bl1.length;a++)gamptags_bl1[a].remove();delete gamptags_bl1;\"string\"!==typeof top.ampAdSystemFunction\u0026\u0026(top.ampAdSystemFunction=\"\");top.ampAdSystemFunction='var p\\x3dObject.freeze({l:0,j:1,i:2}),t\\x3d[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],u\\x3d[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],v\\x3d[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],w\\x3d[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],z\\x3d[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function A(d){function f(n){a\\x3dd[n];void 0\\x3d\\x3d\\x3da\\x26\\x26(a\\x3d[]);a.sort(function(k,l){return k\\x3cl?-1:k\\x3el?1:0});var m\\x3d{};a.forEach(function(k){m[b]\\x3dk;b++});r[n]\\x3dm;b\\x3c\\x3c\\x3d1}var c\\x3dObject.keys(d),e\\x3d0,g\\x3d0,h\\x3dNumber.MAX_VALUE;c.forEach(function(n){e\\x3dNumber(n);g\\x3ce\\x26\\x26(g\\x3de);h\\x3ee\\x26\\x26(h\\x3de)});var b\\x3d0,a,r\\x3d{};for(c\\x3dh;c\\x3c\\x3dg;c++)f(c);return r};var D\\x3dfunction(){function d(f,c){void 0\\x3d\\x3d\\x3dc\\x26\\x26(c\\x3d0);this.b\\x3d0;this.f\\x3d!1;this.buffer\\x3df;this.h\\x3dc;this.c\\x3df[c];this.b\\x3d8}d.prototype.read\\x3dfunction(){if(this.f)throw Error(\"Lack of data length\");var f\\x3dthis.c\\x261;1\\x3cthis.b?(this.b--,this.c\\x3e\\x3e\\x3d1):(this.h++,this.h\\x3cthis.buffer.length?(this.c\\x3dthis.buffer[this.h],this.b\\x3d8):(this.b\\x3d0,this.f\\x3d!0));return f};d.prototype.a\\x3dfunction(f){for(;this.b\\x3c\\x3df;)this.c|\\x3dthis.buffer[++this.h]\\x3c\\x3cthis.b,this.b+\\x3d8;var c\\x3dthis.c\\x26(1\\x3c\\x3cf)-1;this.c\\x3e\\x3e\\x3e\\x3df;this.b-\\x3df;return c};d.prototype.g\\x3dfunction(f){for(var c\\x3d\\n0,e\\x3d0;e\\x3cf;e++)c\\x3c\\x3c\\x3d1,c|\\x3dthis.read();return c};return d}();var E\\x3dfunction(){function d(f){this.index\\x3d0;this.buffer\\x3dnew Uint8Array(f);this.m\\x3dthis.length\\x3df}d.prototype.write\\x3dfunction(f){if(this.length\\x3c\\x3dthis.index){this.length+\\x3dthis.m;for(var c\\x3dnew Uint8Array(this.length),e\\x3dthis.buffer.length,g\\x3d0;g\\x3ce;g++)c[g]\\x3dthis.buffer[g];this.buffer\\x3dc}this.buffer[this.index]\\x3df;this.index++};return d}();for(var F\\x3d{7:[],8:[],9:[]},I\\x3d0;287\\x3e\\x3dI;I++)143\\x3e\\x3dI?F[8].push(I):255\\x3e\\x3dI?F[9].push(I):279\\x3e\\x3dI?F[7].push(I):F[8].push(I);var J\\x3dA(F);\\nfunction K(){var d\\x3dL,f\\x3dM,c\\x3dObject.keys(J),e\\x3d0,g\\x3d0,h\\x3dNumber.MAX_VALUE;c.forEach(function(r){e\\x3dNumber(r);g\\x3ce\\x26\\x26(g\\x3de);h\\x3ee\\x26\\x26(h\\x3de)});c\\x3d0;for(var b,a;!d.f;){b\\x3dvoid 0;e\\x3dh;for(c\\x3dd.g(h);;){b\\x3dJ[e][c];if(void 0!\\x3d\\x3db)break;if(g\\x3c\\x3de)throw Error(\"Data is corrupted\");e++;c\\x3c\\x3c\\x3d1;c|\\x3dd.read()}if(256\\x3eb)f.write(b);else{if(256\\x3d\\x3d\\x3db)break;b-\\x3d257;c\\x3du[b];b\\x3dt[b];0\\x3cb\\x26\\x26(c+\\x3dd.a(b));a\\x3dd.g(5);b\\x3dv[a];a\\x3dw[a];0\\x3ca\\x26\\x26(b+\\x3dd.a(a));b\\x3df.index-b;for(a\\x3d0;a\\x3cc;a++)f.write(f.buffer[b+a])}}}\\nfunction N(){for(var d\\x3dL,f\\x3dM,c\\x3dd.a(5)+257,e\\x3dd.a(5)+1,g\\x3dd.a(4)+4,h\\x3d0,b\\x3d{},a\\x3d0;a\\x3cg;a++)h\\x3dd.a(3),0!\\x3d\\x3dh\\x26\\x26(b[h]||(b[h]\\x3d[]),b[h].push(z[a]));g\\x3dA(b);a\\x3dObject.keys(g);var r\\x3d0,n\\x3dNumber.MAX_VALUE;a.forEach(function(x){h\\x3dNumber(x);r\\x3ch\\x26\\x26(r\\x3dh);n\\x3eh\\x26\\x26(n\\x3dh)});var m\\x3d{};b\\x3d{};var k\\x3d0,l\\x3dk\\x3d0,Z\\x3dc+e;for(a\\x3d0;a\\x3cZ;){e\\x3dvoid 0;h\\x3dn;for(k\\x3dd.g(n);;){e\\x3dg[h][k];if(void 0!\\x3d\\x3de)break;if(r\\x3c\\x3dh)throw Error(\"Data is corrupted\");h++;k\\x3c\\x3c\\x3d1;k|\\x3dd.read()}16\\x3d\\x3d\\x3de?k\\x3d3+d.a(2):17\\x3d\\x3d\\x3de?(k\\x3d3+d.a(3),l\\x3d0):18\\x3d\\x3d\\x3de?(k\\x3d11+d.a(7),l\\x3d0):(k\\x3d1,l\\x3de);if(0\\x3e\\x3dl)a+\\x3d\\nk;else for(;k;)a\\x3cc?(m[l]||(m[l]\\x3d[]),m[l].push(a++)):(b[l]||(b[l]\\x3d[]),b[l].push(a++-c)),k--}c\\x3dA(m);e\\x3dA(b);a\\x3dObject.keys(c);var q\\x3d0,G\\x3d0,B\\x3dNumber.MAX_VALUE;a.forEach(function(x){q\\x3dNumber(x);G\\x3cq\\x26\\x26(G\\x3dq);B\\x3eq\\x26\\x26(B\\x3dq)});a\\x3dObject.keys(e);var y\\x3d0,H\\x3d0,C\\x3dNumber.MAX_VALUE;a.forEach(function(x){y\\x3dNumber(x);H\\x3cy\\x26\\x26(H\\x3dy);C\\x3ey\\x26\\x26(C\\x3dy)});for(a\\x3d0;!d.f;){g\\x3dvoid 0;q\\x3dB;for(a\\x3dd.g(B);;){g\\x3dc[q][a];if(void 0!\\x3d\\x3dg)break;if(G\\x3c\\x3dq)throw Error(\"Data is corrupted\");q++;a\\x3c\\x3c\\x3d1;a|\\x3dd.read()}if(256\\x3eg)f.write(g);else{if(256\\x3d\\x3d\\x3dg)break;a\\x3dg-257;\\ng\\x3du[a];a\\x3dt[a];0\\x3ca\\x26\\x26(g+\\x3dd.a(a));a\\x3dvoid 0;b\\x3dC;for(m\\x3dd.g(C);;){a\\x3de[b][m];if(void 0!\\x3d\\x3da)break;if(H\\x3c\\x3db)throw Error(\"Data is corrupted\");b++;m\\x3c\\x3c\\x3d1;m|\\x3dd.read()}b\\x3dv[a];a\\x3dw[a];0\\x3ca\\x26\\x26(b+\\x3dd.a(a));b\\x3df.index-b;for(a\\x3d0;a\\x3cg;a++)f.write(f.buffer[b+a])}}};for(var O\\x3datob(\"7L0JQxtH1i78VyA3L5FMI0OWmURC1sVbbCde4iUb8HK7W63FIAlLLMbA\/e3f85xaqxdJ2E5m5n7vjIOk7lpPnTp16qxfnMXTlaNW73Scngwn45U4rsX1Sz5M2putaXZyOh2vmLe1+qV+kmzHjaNs3D8ZdC67k3HWXN2KzuKj06wZ7ybr6\/vXTf148\/r62jb+3rW998XpuJv1huOsu\/fFavvk4jib9FZeXYySydHamvpsDE+yaXwyma6txbu5R\/tmbEknaaTx0RGabl6Os\/cnTZmC1+sH9jrs1VZr8cpwPDuJxyn72plO44t6\/TJuc1it3mRak6FFaXt3v7VaS9pxg+3V6vUG59Kqp43j09mgljRkpvVW3E6v9Sjia9ZNY8zL9Lv3RdtM63nyNktPGuk0i0+yTvCraWGLQdohJ4D0ddI4nk5OJmyjHZvpjrPzleQ66satvTHmNK+7WXbywjTwvFfvxu3SF63saJbJqvTiVtyUb8O4fTnpcvWit\/h63TqZXly+jRsHBzKkg4P2MG714jYeTbqtBDM5BAjS+CQdcB7XeLW6dY0ee3HHTTBKAG2vjaSFGXgPVtvtpH4ymE7OZZqvMbwH0ynWJV7f+2JlOFsZT05WsCLZeDZMjrK9L+oGKvF1c3x6dCSLcBS3BToWmA9Mzw6caYxVtD+xku5HI50AR6anKZAMYMcIj+L6EVAKbQioVgympMCmlaQuq2CrE5lTPtOwVjgOcB9n05NhNlP43zVL0c9Onp+P9euL+9ksnQ6P0XMNaFhvddfWypq5wGDSqFu\/luHEu+l+O8Efh\/Ej2cRxe3fvi4nU95DjfDjuTs7X1tRnVFJilh311tb4t+xt\/2iSxNii6jOK993OAcFwdKG1vg6gC5zaoAn7hGS6tpY2nsYng3abf+t69dJrtehqsfe+uBePudKYcVd3t2KGUW9d743Z6MM2JnkyGM7q0Xj+rsuvgNl\/IUi9fRgR9pfxalsohMMMUKFVs27ewxpn1041Ubh2pPRHhXeYtwXEQ9CMuDE7PhqeYJ4NzsdArwvodS30NrZa3fV1VQ27f7e738qIbunVVS3dzfaxJ+uttM2v12hy19Xbb3XxGMuStJNat95KVttAI+6O1XaCL3EtjeLoEljeG\/ZPpzE2EvZ5dD4dnpjvipAn1yCie+MfMVAAaTScAbejCmrVr19yLRopJiFf3rbPJsPuiv4FTNxvcSqDtvzu1+pCUfq1QWOazSZHZ1nEbwRtXZORw\/qleYTvHjlPQRt1q7Ln7Ysuh6FRqu9T+qTTbwrdrNnhD9A6imOKJEEGEeMWSLwjBG1bHA2jHLsDdknfdgzBzNR0+64fTuJtjf2o4uoEQcdSKWs\/JDF+PRxlk9OToPN+0HlW60ebqOSXeOtKYC2ARRrWa2u6K70PFRL19bi9BTGYN8CiDbb7bt8COHx+2N4b93cH+y3+EVjLoh1iOmqJRhoIQ3zDMe8vSjDSYTCXIojU7u+3AKWWR5Z9GHjY1me\/ecZkXL88xNY4bAN9R4ofGETjOoblFifC2y19YqABQbtmX4hI43FcjxSymSdD1A1G8xinWYgP\/bbCBpxZAoXw0Nr7YmdFbxwwBkLRdKcrJ5OV4QkJLAiAPlTYXICzqtEe95Y6oePm7HxIsBtCXL9MY9R0NLqp5qr2et8cyy1dygwe5QYAk30NOhifHp3w4db1oCPdvkCvzb2xfD8nuoageBFAQvVq9jswZNDuN04G2djtZA2gQ3NgX5cSbN35gwRrh\/5d70HnJdh0t\/Y1KoTFzsuKbRWK3fWKRUB8rMMm2FEhZpoXyR1L2LAnRxl+r\/fBlkSA7PoAX+pNu9rxEUDbvdAlu6TbWNcT0M913bDahSkWSVPLgfryEHsrGN5DfwtoEqSHRwqsd3AfO7i\/HW779fV+vddIFTLHu\/193aneoIoA9drE2TTospeUrK7GBRLufuMxFqiEbgetPPBbIWAVRbGtCPk3G\/XQtsZv\/imArW4eCZEJ+iCO5XqxVOKw9i6aGjpRim3vHGd6DATBeEa1d\/hquj6rX47x5\/q6ORUiMorG0YnAyztHpJNR+11r3J7iRFa0JKkdYjSjenSoiJDhUk\/C4Us3AaxNObbCydXUpiog7eM8cL1p1y81mQAZ1BRiCzRt1HgLXoBbXtGDr5ssYZ8ZIhBi\/Bvcf44BeuCwIHCTyL43ZsstRVlH6tjzT8YOse5Qb1994OEAxwT0IrdxY9BrWjb7\/EkdgX4AnjxDWS9Os2Vrme0xwg2vDz6xPdIXutbqWF3p3KN6tzbWLJzgN+qrDoGhJftBGjxsD0yDehSH0mynW9vdr+dZDuCPt1AnRLr8KQaUe7d7vN8+a003Nlqb7TZuvkBKfYq9w6EdTckmTlbeKbgq\/MDRtb4edWuH3gROau8sS4ipB4M9HwxBwFbVYGWa5i4NFPYuTpMY2DTxjj3c7FoPG+omjtPWfG0f475ta71TdyXDH8UtsJxy\/O590dX3G9mIy\/Kg7\/zL2cnk1cl0OA44A3\/XxIquHQeDtkMD7ytUlEX9wzYuvXXufaGmZ26e8Yp3NfQun6yFSe998XaWTkbHBzOpdYCtUgO7vvcFiuJ84G9IRnC1kMX0pCvxNdbEA\/tMgR0PWTAGj5iTfbRiAL\/kuX1ih25fCaPhk0ErcsldcnBzkEtC7vFyV4aSRQEy6HsasLjemoXY5LCGBUG6OGsIHJQc57oV7xYmuV+x9BaJY9foKSGp2Aiyfurw0ZyssDnBLSVt6yJDRcnemsvMQ03Z1MnprdSZDFqEGOcVKPRjNlbjJhYZxmB6Oh4DiYlDqAlm7PrUR3KPJzH3jBdtQMP2e663WIwxXZ51m0mUiLAGreGy3Xh7dRU3hmGbCjjFhtGAekVwazAoIHj9vbf9pe1vDAdtdmjYz1PvaDJ9YExeYxdKOAHwfo3xDtvfeJI6+2oTr\/L3ux399mEb111ccE25YXvTX5S7ngQTheW2nWa1zfru5n5LpHq8g2MLJXWIDpNuxwdaUyEErsqYCS78jeE2v3Wwwqk8i8y46k1Vbyif37ph3pP+DcYAHU71pYtgsKXua5AShcDKyVZnc3GjL5IScyV9wHJ7Xxg+hiKATgq5jnmw7zZd1+wHvTTdyIpgIdJg0+o1kc58h2jC7JuHIjb15WYyRJE0CXukbqxG2sqRUkYlglXKJiw1VSKSesWGeKz3MS9D4DjIUWSeeC\/GsWNlPWw7U6eU2dzolns5yjT\/mqkzT\/Nsjh+Q8clCRdwtjRhMVKSm6F61unYyUS8HCAsG+aku2KyZtuoGGMSlVC2fCHnyYzRbRA1Rr8bWtR4rZUwoaWiQGSbOB9OAEo+y\/UtBW9ze5a8aO7sE+mowo5NubmfqJXZYELzWvdqX3sL\/6DCYhNhtaA9fBYidpC1IIj+krEa0u\/WmjPwuqkRJW0Bo4ZtoQiMDX7JxYLwUB8J7XWiQzekjT\/bQiS6hN+A1jiReR1C4oGKoOmkcbjxSuGF+UuDmEFC4LUhp7es0eC3z4XuPjdA3SMc0dqPMax8ygjpuTZrH7Gt2r6lrGf7avlB3CEoz1bceGrsmSmmWF8yVt+qP9XYHWvq7WfFbFHO21VcBs5NamgtnlIEYZ9vdVmbklj3IJTOR+2qakUYYQYTqGhHvx03cH7vNnkVNPNnY4iOFndfXlD7mWJEG5cI5UaQBaid25FCmol9gbsKCCiwGXXIiVS0\/hlrq\/ac0fz9m8xasTzSh10Xz8uPGIJ55GgBNj4iYSvSqy2djwD6bLTMuI2vGZaEr6yQCiKSOgSQg5RTBy91htxslkCtDLmDF8P64f7LoYCWfVWzy60G28hUB8BU4IiAeNSQab7yJgtCnJPSj09mJkPokW2G7Kyjs6QIVLfUx8GXWf\/D+uKLvh8Mpmoun\/dMRYETJ2lIdxzh++qdHPNHeH2PfzIQpdvoklN\/7Qi9BocFpdgzV3U3WAsAUBJHziIe3akDmunknubra+ubbr7f++c+v\/\/nDtq8CexmP++7khOLjCNsinZxipgJpNpFcYeO5\/ciBt5IWVVDJ2hb2bXcdCqkouXPnTnurnuKHmaRsAzXF3yADeBofVwv4jQwvbtcG66K8wU0cCqRRrb6+BfKir2WgpOiXF3bckCHtszdw6FNH7cOcPnWE27c6GqVtiMtqIzBp0Wh3az8v8ffF\/Ghfyx7UFeZQz8jXVrVHRunRhmA4FAC1R661jK2Rz8D2OASPYJpWcjFchPDQHOQjakRsTZmnKqw26e7hfgu9as0ffrnzAzd\/7iIfqy2HN25leG8WZYTvSithK6vxgWFdtfrb+EjX5q1GcyOHTr0bH9WgH4rMwNyTscwrru3uHkZf70d7491R9A1JAHr4erU9pj4S07q6+sb8GBlqjZ4gNMmOshOCDN9luaJvzcghUgEpw6u1tW\/btrLmdU7M\/iD7AwQwm0WYuD5w9kt9dx4Mu91szLtygGMt0XRPs+yDoLzSuGZn2PEPlDoYF3PzgpPld6Pa8AVnGLNblEOI6AS0xKicrNfsNb0xVg6zC7YpU\/exJazllYYyfXgk8jLUOIT4dVftn\/32yCy1urUGCo9geJamcHxra7rLjt+YOSeDVrAMC1tRX9AScEBLk8NG1ErfoB3dSkdVXAlGiVV3jJmhOXPpjZGzQeCkKw4a72MtwsLHAPfo9sAnESLxU9txAEbZwDjO7SMsubDyI2liVcoKIXoPgwb1gl2s4gkLtAyqsogwuDlzl0MieQv0gldVzcVonlqXMKyMxwh2\/dEeQmFn6JhPwUZ5sjWCZFVtsc6o3dNbtQm6SpK\/vgKBf9STXUnErjf5\/Jg76VC2whhTTXdHwo+NZdnwmwU5a6UCHBvdwcCwcJB3UwFImk5CipE2gNv4Kp9XV4fUgPGrYemG3eYoOhrOTprjCMxU9r45iF41TyyD57+HAYuUAMf3ykLJI8yQa+t7Mw1Q1OkDzFBfZ8MPZDgxMqpycdoM3GlziNPGiTvNaXOI8yd32hzytDlUp00pxS2VmJES+yIPzZtVlJ5LswchhX7f\/BZE+lAT6fcg0wNwC6BsINFCd+THKibCxR+ATm\/xB2GBtZCHqg3+4gTlF5ogr4GSV1cg8qq8G4vGQjONWiAoJ7II\/K6utHgcIMOu4WRlKOYpYGhb9OqbM0638a2rsLnfeI9WACoMzm8H0DXV1U1ndYsX1AUHidzinEpLU+JWVkX8ZQMC7YHAg85mc6DB0FV8GpBp1CCaQtCqvmiV4O6oMezug7dmgVcd\/KfG3T7ERmy80pJLhazR+9goQd7HEamJeYENg32hCcg1FNbsQXHlaKSuaSlqKXKHZ+6R+8VlxEYNjxN\/wnkaLjvFzdAS1ldrawMZQgc0QYaiZWaDhuzQCBoE\/UIRiKsrTeU1UFCuu48ir+yQ+V3IpfmiqDcLyCOh33tj4YftZDY2otXNupwW\/jTSoyye+nfxAlVwwMnRh7Ch4GAEMDQm4fzXIGm8CisE57GtAGrp1cARONAyqKCu3k4lMgSlk3Unn20YcARmAD7S3D4VM36LeHej5rCyqJJvRdq+aTtqfrmWQG4fxL4GM6d0k3XwqAqosqdv01R5TCzQdBkHEm+\/h9EYZAB\/QJxFcxB0W5TSlEBd85VWxYKxa67jVZa\/uJnv4Dpw2fXktqQfIoq9THG+QNRpL1mYCYyscjNRNbvdWteYgjlE1AjK7\/+agyYtO2i67qBJ9QGz2hUWI1VHS1cfLV2ZV4ojpFvyXLUm73C8qHfh8QKVr4cIFNq646Wnj4aed7xAbWZ+bvGna82ra5Snhfpt1sdJ456ok8Zv0r3j8WLalKbyouTSk8ZnlQEDtwcEW3iqpDhVUk2g5CxOKS0vRYnqC0Gegkvruqa+iy1qNM0ZHZQSU8ix+TxPPCtvFU70pasrpAlrVFNAXcmiRFivkkLpaup9vpZQx2Iz2PbewyLxKKnhPyrQONGGKJx2Bn+xKed2ds\/RVUXVuhB+igA2VLd7Mr7hUuI9T+yYKDSj2TS25W3+3LqdNmHxSUvPFB8i0iuTdA7H6dEp1PHL9qhkSzJjihOL0uGukQ53QUjMntfXCdipXl0pGdXmHdgA11IlQRrFIKvrGSwbYcu6nbVSJznugiIJdcCcMDkLIciwEyuR2NS3Cu5QS9\/zwrqbzlS92ACVs1K7BBy0a6aumKLnkK9FnJfotdWFFnOaDfu0bVjYFVU6z05HSQZTb0vLSDcw2+HsWfwMjztJc3M76WzhhsQ+CJmf59s6xxBk9sfGwln9Ciyb3flMbXe6bQSnM7tWZg0g2Tfv9Fp05aooa0uJcpcSZeonxAQaJsld\/LHaDGh8PdRWI6mAy9XVz7FdP4WoPWg0llswbsdUmzxCM+reeeyLMbaFRLx3U8eTpOh4UuV2gS0P5bfa7VhTAyyyIatA5CTHL4BtIcPvyIPmgvpYAW3azyZYUWtYlJlfr8US+doJZTAQSDmOp3pLYPdOT2a\/DU8GN9v+\/n7w26hD92M2OyBsxot9b7f5ZqS+DkFBr6B11EU8TZKeHOgWKAGl1yABcCSCJn4X8\/Vul8bC+04beiO1Kx7L36d0Oomexe2t6Dn\/vIjb321Gv+DpZvQybv9jczN6rT7eqI9f1cdv6uP3uP1N9Af\/\/Mk\/X\/JPnOBPkrT\/GaX80+WfjH9gJPnPqJ+0t1BxkLS\/fvBNNEza3+PjbcJRHMrfoyQa4ctmNKbD0+Yx9UoT9\/VYCr1LomkSzZLoJIlOE2ORYuC\/cmaEYXH7CdScP7dg4J10MNg\/4ya+rsr3P+LmqnkeJ038\/dKzNTgvbQLT6ia6CXxPE90EvveSJv5miWvifWkTgOobMwp8f21Gge+\/xU38\/TX2NYwXrpGnaER5oDRiiH3j7uzgOJ7GI3A00xk8sJ6COa1835olwrl+SIyB5E4CZcdaQp8OmjGi\/HuvPMw8yl8YJThNGahT1qV2uu\/r0V0oc9fWulVNVr0wTaa0jgibDI0rPhcspotgMZ6Mq+FRfOlgMvRh8mwyLgVLSevzXjrwDH3w6Na1W8RD2Rc\/yt9H\/Ot2AywbLZl6lIgl3ZMEkoDop0RcGky5n1kOLfyUiFLX8WU0bMCdiFcdnrbg5R03oRh\/q6sVtqKzugmBRAvNS1NHmEShMaN98s8Ee4dbW9v7IplMwF6Hz60XRdif23JPE7bPiTgPK567T8Tl7EmS0xyjHXZVNoYnCTyU6vI3Z+LzTPqIGzuj43uDLD3cgfr7RdzPOrkTzo66UHJtDXCRo6j4rs5VKQEbjUMXgA0YXAo2QMOZz3hggxycB90EKgWuKofy+CkYE6IP7GP5DudVycstsYsMa+4Aw2tEwk31LqhpX27VW7JEbsWeCzSdDJ9ycgO3bnyirvPqS8CF+PDlazPAhYV2cOXmEsoDvXl+SdovkuhluG1eyMiI9C+1Tlpsl8QD9cFRRi6PsmUxzhWdMji2i3EqbiIN8ZiEmBbcy+238VlsiuHVbJq2UXFwcnI8a2oYHU2wQOhUMRzp5KjjCuAfv+KDJrG3b8+y9BTK8NMERA0WRN3JKexJU8geqSo+uX0S92+\/nd3uH5803oLztkZykMvpUc\/uXryO+89AXfzx09KPkwV7vgprh3iKks8m3YwbB3dVyB7lEqK+Aj1hQnAPNtHderSK60ncSCbdC12CX3MllNJPd8feJycPoZLHGonBFgRDXo8go+MZ9ufdDJs4E25KFmezpUl6fzLp4yIf9w2Ntw+uri7TUbe5uw\/fKm\/PviJp+wUW3pNjACwVFh023bnKDVRV+9JuO0s4C2XVAkD+gdU6io9n2YPRMbxRh2czUEnKZEGXCPvXMnB+eyPE+dciu\/KbT6BjcYmCORk\/YBfpE07tpQAstF4KgJ4xv2z\/6pnTabErHrXQI\/BaTEgNIyjGqb2MjYnJRPYOl3iis0K627ePQYri7td6vsDr7lBjKFTO+i3RDCBILlQhQTdw6orUeBBk\/5sgN8qJ4pum2KS2xOQ09K4QU1YZLk1UQSi+CQp82yyZHemYR05+l00rmxVGHlcwXXXLbWgnzNHFkNijDjjdAYHpxSvIh2ipTsf4gA37w7ULBB\/JFG\/\/9\/\/a3dz4Yf+2s6AjD6Fd\/E2\/uYa\/2h3S3uSrdU7i+AieGWznNqgt9\/dXUFt9VW9W1PXp5p8YkDI1qjp11B56eXqUwVrX\/agloCKoJPY98CmDJAGkpbwJSOlYhdtbf5XrI3DbjuNLGYd3RbYO3oXDNtWGIl3xvBb\/FyAtyIpFYJKY8rHQ4nh2cgEsU474ukU4cMA0DtbEpe9oPu+tYQy7U+wh6zsaHK5YOoxYNXM+7MLdWlak5T8fZMP+4ES9uG4k5JHgAvn1pg+PRDqxzAeNrQE+X\/zz6PXTnzUlVgd2F2YSmDysGxVVhmXQz5PzbHoPSA9Gpp6s492k1+PIJ8cRLbHVrxdCMp1kzA4ipfWPYpQtKpkvumtTS9O14Rgm979x3h3\/ySOZsdxWlICFQs8hqqsXddqBe7+bgVF5l6MAIugGSTT+eC4DN2Sq+Ea7b9Bfp3zc4KMr3jRwtoAUA0RieLm4mN229sYdw7RX1+KyuD0sJ5qt2PQXPJMFV4tNuOPywYnj\/iGoYProYsOrVVOgokyvu52uJz7EetKWsVxChXOswX1DwIxe2DgVG2qEk\/0uz1IQtXuyGC\/p+Wd4Psh0VJwNoo3fHkaYFrCCfYNuroJJgloD3isnMVCXm8xgWecShygMpfE3Osp6J\/jKDwQv4fNN9YxuFWidYMOJbGRJBTtOYwKnTV2NMnrvi13FDupIBvtCCaCvcC9+E8wpeXH\/+dPgHcRbP1Dk2xiDs6ARZAeTVheoX4fZ+dWV4TxULd5bsIAaq7HW9HDwfsBc1779GTN1r9Uvsa4o5cIh6TKGW\/devdq6B8stmjOiwB461nhGe6745CmGyvuiRTj2Yn8gVkGhibkNmHG6X0pSxqGMRZzqj7O4Jw1F8B7hxLjJCPJTAOqVdd2TLn7XvQa\/bthhccrGzt8i73p\/I\/UReL27Afmftxn72Iw82coPJA2TDziyAuruPQcRisFV8z5UeieRo6Xd+I7eW5W72PLvU1KNDVqO97h1yWWfnExGeILJKJtY+ap4cb7a7t7CVuZj1uFzaWM7vWX4RKdqrCCWkEwWjwOwVQB12QJSVeZOg074U4sxYBAYtCmHzuIm1dkU\/LINatKkfqJq7+rKfgdxMPC4A0GpgOhOb0NAowFyRxgcwujO3jjbAHi0+YxFhYE7Tw9TbG+IlDb6J6MNXtvEblJIdghUx3k2cF8jhXklVy0x1QafmGcJ1Ft7ysk9UX8YfhNd7u3JXfEInxjE0bDXu8BX8uSezanf9ZzrKi+icLPyrkSFszI+Ps7GXbnFOZULIONtEwDEnn\/enpwcDrNWvI59jn8aiROrBcIjmnkqJ6CNLRJoOff8MmCtyBM6m19aC0pUBxhkfy1NdvM9+h2AtcWJIo1zM+I8NgJ0o2\/pZimoxpuXj8nhnSbqXgDtmnXPIAdpJ3ok9IAcd9rBQDkF8AwboFH4vg52MxxKOxub1mNe3FnIPUrqwn+34HULVvM2QyHctL5fW52wIwgftiKIIHY3I9zmvUWaaFZs5KCZtlh8s0X\/XBxWQKs+4zXs\/Hzvzc87rx+s\/Pr4wW8vnr98TVwx3EY1VzWHLfNpwPZW47tbRYrSGqe0QXB8mOO8yltT+x\/+X0VCAnqA1rZu0pphXoPmDK0Dr2eFZ9eO7Zq3bWDyOW9TFQDC0nOgkXSWaM5AxLalwbE3LgJkqQYtUHKjy0HEopPnrXoszgfHfjgbXGHZ9lO4k9zNdmCv3n09gYPKZAZRljMU8J1+IGiSo6wDPhiOekOELxsiBNTFfSgCcR3RUg8qf2E0QjmulHsjlnBVXUPqdDdDwLCT6eQi8wxQjEOy6tEJUUAWjiZYTjRNy9izbHoAdTZr6xNCtt076FIhRDlOHQSmAgFQbjcMnO+PxxTnnwxPhvHRK5iLePYannBB3TUBGpSbjCEICR9Qlz18T07CsgbqXiELLpyBf88o1k80Gd8FydpXM5ipGUxT+XWStn\/g\/6JT\/cUIytDo0\/i99BOM3JiaiM9yUFaNoaww2vYdnM\/kFDESmiIb4GvmNF+m3c61o3Af8\/ItG1MtZbs+9xfhrNJCxvfc9k40SE6Un6o5wdRlwVyXaDIC+UUKnbK3CEBG75G+KivjErvplLh074sR7ldy\/cfBh2PKewB1jzCRmErQunhTh41DelTGo4KpJEL3MXw\/xtqFzM+\/QbpTE9wub7BAGjkPoYN2lhZEkYcGfKl\/YnoN4B+8m6CnOopnQHjzuC6iQSvx2tuDhFrJvDAd11KCqjh9g6qQUVHEp0iOdQalBkOw9UPqH3Q7wdrBM3iOFlCZbY1w9cSuPoPt7kECGTXkZHl7BwNPLHXVm9J21taeEU4lb8SjsOzFHeBB2XPcWsseN90h13gYlVcFq0dQ4Fq7ABRoZjg6HR0EjUympp0DIxa7MWyWalgBa6miAr2lShKcSxXs7I2XbNIH+V2AfLkRf641sCLIz74IquXlVkGVXWoZVNFl1kGVBKIvV9Bfh\/Ml1kGPeYmF0N5dpsFk2P8rNsOcZsNFmFMwWIE55XzwzynmwX5OKR\/wbz3AzxvnTdG\/vK1PR\/557S4DdYv4PrmYV3Qx5AtoP69YgPTpQuAbnEeE4ngO6GkfWa417+zuQ7ky9PjWA9wTh6LwLT41qq+yd1DJqtAc+g5u2A\/yq28nMHFT6haRnsraWZNhsCsIyZozIHSLmxnVsjiUNldS8PmT0YrPa6\/8zBG4kFSuGRsQRZQ54jhhIzM7m\/brnjESd8WUo0JxnpDm9q53fJ7Ti97k328SFXuw7MTuKCdQs7ZzTxblCbSoqEKE\/WbY8JwdGzY7D7twhbDc112fNe8b1hxssw5eovRuCphiDKnDJpmgURIB+64PPC\/WiQmvoiqCYQ8KekEfTUHTXb5oSagoCGBzhYJIsUr2oWbV8hSINMfvmmvsDkqfGVGb1g4qMKbqY6i9tjh+76uKb6kHW1cVnY8XpGDBew\/a9z4HtO8tC+2g4HxoB0WroB0Uqob23wJi+kWw1\/s08LbwfaAFfpEElCHxupXcrnVvpfVtG1sJtqzW0qzX\/uG71j83t9u9Vm+j\/R114EKu02yI8CS3erdRuH7LPUr0o3ybPXPh+qcngn4YDEaHirll7vJKhTml\/qDWu13L0LIbbb1+S7rBHzXNH0VO+Ih\/PStBK958BBOgJxBg0KKp233AiAE\/w4+RQdkkiPqPaefymNbpCAUMGQgkLp6UlBVFg\/lIWqKE0UkPS6OII8gCboK6QYY4hKTEj4rH0dIVXCTVhQHRxmoGTbip7VW8RtgcqTTNRhOgzU3qOTtDGBJ5AV5sIG2EQIFABUEVL2GjAZdU2Mk\/T\/g39nFUIuxH1G4mcXpoIw9ot7cHou2BrRzcld4ZvyfYAbozpT3Tj2kGT6pDqRnsv06yoJQY8dxHM3WKmVjOeCX1unNeMrjLS4GN39rj3k73V4rbjjJZPbN17mYn51k2DoqOX0GEPu7OtMyFhoz+e3bG4Juqt2FQl+\/aWzCeUG8xv2nMZ7\/FeD3uP5xMf3zxmipaCOq2HnxDsivVYfCv4vNOu95xHMGaHJES82VAYVIEqjH04xcuVVDrOxpvHLV\/8ogR+P8jKA59ijQPlB52\/OwJsVY279CiYwHcILr8bqlyW981t5ZrcWuzubVcm981vTCCT\/VhoiKkNd4YrsqvCh4gOe03Vww4m1oYilC3cffh8Ogom1Krw\/piHXfQHZ6RgOutQmsmgP90PBsMeyfYW673Z7p3r\/DzxC\/JNZl6EltnYqNPCr+e1t7o3Ao6tnuxQAuhRU2woUKR48mx8rWsvm3AvqHxI2yhFR8r3j60eZBn\/NG4x5eejsqZYN69eAzfUB9O2gGMrUAdW2EvVEdjVYpi+JOUqS+WkvKj7mpt644cIr2jCSCLs2KjhqOsS30psFQ+67fXN+DrKlXkSIEHXaESdqVSTGf120FhpOaAOYaSm4v9QZfnj\/kGix8VyVwTa62xTG1IdVB+pzIA7AaQMSYRzrG08Scj6beAIH7VgO0won3IU4u0t1pDgKpXVx6\/56Gf3GWUfsD+cIuZ14fmVj4sTCkyZM6kLZBtJ+4oEs9VY59iRM5OPdKAw4xceovi8lA8jMul\/xPWOZCnsoFfgd33H77A8YfooDB3R9BLkFoKi7nf3KAfwrUs4L1ecPCwdS2T7NPerRGcgoUH0OpUgyZX0gOUylcjYxvO3CHlrYoQBOca4lms0CfE3J2r9XbL6+yKe+0TtYzQ3DxW3uTzSO9jN++V1bj7CuhHI+\/AAgJE6jmuzDknDsXC0u8\/6+Hyxm1woLVbsGyUEFLydUITEnzOBkA7GCXg+KDHmj8Ynsqx0sYZVhT1lP0eZwD7C6SCutMTMxuc8BJ5GcoXEKkEau+Yz7blLXhTa1NAJ18ubdmZXU74L8nAaH6ou9OH4oTaPyw\/uXJ4gZrdrluUKYzjo6Blmhms0nEVVr351rAzNzYQtd2d8M\/dKVll02kdPpnX5Tua+VWVVH6jRj83OY5TANQkeEqhBJmRW\/XixBk7EJqfKMIKqw9lIE0LooBOIPaMpCzwdCMvLIevm6exKUQ\/6dFklnGDHQzhQKoNK\/SwEO21QvGYtccJ3tJsJudeayUzHUK3mcHgZ8KiYmyzqCwcoYaIpBJfoGACU5dDdAeDu9PpDLG6cU2AqAirKA9HcLYdjmnchRfx6cnEe\/pS92Ufq0MJTzZodxLQQ1hS0LVQCr1\/NYixOZW74Qr\/++Y7\/WXaT2Low+T\/jX9+B40Wa4Ct78u9S8aLX\/L4g6iv8Ej0p\/II7O14BtwYtbe24XVLU5xYpcSgIQhag4lb+GhFqhzhhPqjhhcpz9f\/Wrm1Utta2SCfBUuVxhbtQOpqLFLcLBWuHMKL4TUIhPBP87ZBQMglPPFDGEj9SBP6kDXKEfY5L8lFmh1YXkLFhFaX8PISNF\/L8WaKiTSusLnbWK79spqWsVud26+K3plrIVemQmo6t868Xhu0vJ0PUXsYXl0tAL2RJsyDjw4mVEL6jM8KDF1EDrOYFQgXWkHYmlIsQoJ5QxBhBTlEcKnz5wzGW4W\/Nt3iUiPO13OqzUW\/uWOT05Qsvgg5TEIiMrXRLymO2\/mb40\/xlaKf3UtVWP\/SXhFzqlaqOebWgQtWDiiar\/4LwDJ\/Z83F8D9t6Ny\/AghlrPJ8lMrbHW0qqf2S5T8V\/cX5kOjx1yP0HlkwFTtehyz2ALzTncHXRKuLlMveK\/oJomzjhc0OUgn2uQv+MSsJQD+L5Y6tIkgFF7\/nU9iXuauiTG\/e+Oirp7bv30E1FtVz97uy6tdaUgF6vEOiS2qsa7+ePIrRlLkgw2xHvDlldcp5rnAoRkhpHT1M\/qpCidzczWMTk9+Gk\/v4WYrg8a8iApCvzEMtBDc9OpqcV913rItKaccf0s6HVIt51VUop530m4XQfowLKsKMQis5HMszWAUaBrvfptUuonf1StSMtT4jvfUZ823uPlFYMHcUDFw1WzkajpBeD8OQGL56CDaHWSiVLrVlpPuOMI4DjAw6EPwV7o1fIEXh8y15zmiV8hzhL0lDfPvuv2K958GHp3CZ3OljaEhzGbrxSefqCDdapeZyUgDwH3\/ZaTn+LJRQZWLE8Muk5+o4navd+Kvx4y8l91m78e1641ul9XORuaFmBEBe6yhBh6WKhQ2tdWDJbyEwQZzIfpubqDXAB+z7dcTI0DwbgWhDE3Dk37ufsg1cOwMfwoWwxGHxbwZNJvy8NbhdG98a1e8ouethG2pa5POLJNVgPerfOqSi81ZtoL5Au2pKI3MsiqrHkX6tqwkzf+frW1WKqv9oHOy1ZarXSuqetaH0unPYqUEIt3EIrfCDbyAQLr7aG+dflmGyivpJzKWheXaidUsQYAGPzY+607\/PU0hptmG+qlMa9pWY5UpHI7eoUEnCsHoONBt\/dgqaxEJDTo0YLowoFevNxQ08myjd6\/yG6i3IHFMoyDdpHgV\/wZwJupJUMCuXkxgywKhyUvMZB\/oYGWefTAfffzZZSZA9Svv5ghXpqaAcDIOm0idySMamf6rCROyMhxBEgpl8yCuBkzBPo+MIqg8rb9ypnUYX0SNF4+63D5PWqZZ1amHcW8g77kMS9u23lL9B\/iUhvlr32+\/K9uD699jWAfatAz1vHQsdfOXw8JWPh69CPHy3EAlVDgWxz7hP9McCvFuAktKHRslHSL5bRsz55mHtPj\/u1sBFPmKGay7tKZZ2i\/EEIJ1VAGydyVxgS8VEqa1pY4Iwioju0t7xDFemsAORACGqFAdpcdky5PkKaHvuSvrl98aqhgl0oAwZkIqox6gKBW1bGcOUs3vzPWzslbFSEVfwEkIjnssP1Ig2pqU46iCEHSREJZpC9AnCKJrCGOIFk+LKVzLC3EOpHoKawfBN0EQ7hJRDSKHStE+6DHslp\/UCAcg8yiNxSCENKigT85cWJcwMVTwufmqvwcCmjJUKwXrjT7rXNv6ESWWTA4WZglg\/5EfiS1a3TaFOzZxNl4MmAIG8iX82uwiEnJJGGsWor2apNLbYorGFCudeVhSbpAk7gJK+9OosvPSGKl8cFbnQKwAmoq\/8Ny5vKmIN7WAl4Iq9jlZoahDbUakeLW17YyM1VCuCfKbBhSMTrRC0PGJ8UKG20f7ESrWzoBNbyNcZ2cANUErE4wNL36krMHO1rnsqQedR8YTKqdADTO1oVqig6q1gfwrlFKu1yAKp7MKjny2+sOX6lEtaTYI2LziahUnQDFeVUZPWVlYe6\/+2wIMu1siQFsr0EfcjqLBA6CTFVZ\/eiDzxiRruKzIBDCry2VdjiW5Dc1SYJobKUC35oL9CycZUrnGiGIVdhlOMaukNKjPoidY0+g+1mtR\/ZNSh\/jOlvCw06LSSwXNf9+i\/cKrG8LnVSvoPjd5Z2BD8dhJsnRbNC4AUlEU8L+S3GGfaxxO7LQBYubQ9Vyg0U\/n61rzXt79pMtSS1tY6f0A5HSxh\/lUIM1BWKDTQscx8h\/GeKkMy+Zy0ojHlzLTPGMGIQCwJiYNV9soFfkJbFRtaAM7IWFPIGejl68bVH\/NibrilNpYULN8p1DMFW66qIFIOVG82NB8qOlSXVbfbqjdzhP+VVcjpra2BtPWWOACqWgEzWD3eQECNIDSlrIpe\/B6SvHjLBK5ZMtarNFC9xjlsWWHI6q0T80yhBM9rK4zxMHSgm41UMUomkHrIvzMpA4bDUgMGr6G+bQh8F25JMKE0I7Ye4cFOVxZAaGTuDcGOj3bgEl8NF4EQFfKWBP7hoWxE76LciJsTaQnCquX2tZrz8yoX+lDBdkLioQ0zE21WpVNElptV5TvwbatkDr\/RMA9gNkw5TObg5QQIuCuI5lKLa57b+CYIXqldtolMsg27Ichs7nQ3kk66kTS7d2jqNw+YokHuIqYRghV8oF+60VRW21XXOzbA+DcQhS0svwFrTFivwzoazv2LmI8y08Dl2BZ6h0gfHMZcq\/PgKF9GxGSbflpijF454JKyaEdJSH5XoRN+SqPXoT\/FH9baSl9KX4HgZlOGIDOuOubZY30SGc+dbBwDDDAmhmX6H75l+lHjp9CbTF1L\/cHm20QNW5BzV7SWuF1AS3Mn190HyutCs64dXd01\/vz05HmPsYwLvXxUH0FzOv80utJWYjlKcIPGVQO8\/MvIxeSXXdy9APsrjO4nNF7WnHRFEuG9DXH4Y\/sgL61EMsj3OfODc9wY5roJC2f9uxQoH9u4DxLdDSQvLAsPw9eTHNrcsI98Sxo02PP3coF6P20DlDRod4KWJQUeR58CtxI3LILN0po\/6ZYESoFwXUcXSoJiE5HUrx\/U\/kyjP3R0xS8lyTUSyfmR35OudbtL8TWkQhAm6yciIGJFNUr7jU3qaBoQ453OwE7wFMTZqU4rBvub4CuD7qpHDNvizMvUs7ckn77Y3AIMqhuEH8Pxa1uhcKuBYM9IloIAZedTpkVVzyBO\/nHnqUiT3as67NpxwnkOJz3a9tt4M2q0EolbzYAta8YP\/QV9mCKurf5N2pLB+c14d5cB3RkDh0OLHojL4vHJ\/n0KeZQqhYC076as8hrcAUtKbOtLPm0ir3yzG6kxHJjKABrjvWGYB5kSdOOiVfSC8btfJId0Q9CWKCb6suP1k7pwYbCEAGuqjTRloByh5bggDNQDZzUkwT+ZHfAe2yQLheie57AuxyPx92TUqtkBZkJXh2t0aqCedWSxmrL8AApdPJhfihquisDDcAoAE+qt0jC\/ShVXGEap0hEIwZKZhSzvhd5E2GWiKQd74EFVruwOtDbD2oqOQE7QaFGvhNJD\/84\/VLejM1NmyElJvTEs7wU4bQc5BMubM6wlx6OXWq0586lKMHiFn8tXi2QOEmEAe0SNPMXIdXofSGssdmhU6Lp1D3FBEMDHIADJzEWHKhAE0M+Y9I4NqnjSASEL7OiljiLhWNi3EqMJxGsTBMrgWRLgmTLy1w26IgWywO1XQnQwZka3Uraw3gwp9gnJHyxkNxGyE3TULlk+xxogLxZBNHwRWyhTcpp1TwFqW1AyfRuiZgY9EgB1Dte3mIMV5qqb20DzdMONip6HQzSMUUB5GcH0iHZ6fZUQQXKscU\/gt14yGDXY7z5CKvOjInlzObVxMVaYo1CIqZvKNyJ0Tsx9nidszGKrl8USwKpsIPBwQyP4C7DvjQvVsBC6WepOIRIglpagvT94f\/d6v8wG4KBVOyavrNq9kZCfgauA75LfTe+PANJox0EXF8oH32ynG\/4T6eIGIAaKV4H4M0J4AXyRWaE1H3dhD1LE3YHC3T5wt78M7rbgxiTrWL6FGKwNXlWVY5DErvkxHKoxDDCGwZwxgGJwDFoacD1vTcuh2Rdo4i+gKaVDck8IMq6cQtMw0YwjzTDSM3WlPCUsxJWK8v4aySBziyht5OgqnpDtu5YI5W+7susPu8xSbGqtIPJscI82l2ci5Mwynn37LRnimm9+hBzrC+OKbmNk3G1r\/\/ohzU5tnyOPo1tdHSOqNDvLbRMvlEtjIhzdxE9FNNGnhE5VQeCVtWJT8tBnUx3kjKovRplK6WhbPNYtmkyEVvQ0io9dgzZuDrzLcBY8efX8GeViSCUgXxX7NexdwFFXOgGiU+8BSrKBnDEbcZfyRboN8dNkRL2Mu2\/Aaz3uwhF4gtuD\/JBE9JJHH8uDuLTgydAKymTRKOsOY4o6Zs1LKCBxZWleqikh\/1xkvwV81TsP6CtLwPy0S6D7IJ8GAMKqW5DntzCApCPd53NdebwrdfpcUwNQhv9Byp1qXpfrJzVa2NRZ41FyB16PkB7dRTWq4CUUNZtQDMxEgMkHjBuhy+GZ\/oY0XmRfI5jki6k9C15dqU+jpbfNSyQwaVakslaQmPoQnuXhg8mXQOZGszWIoSZdW1\/nvOGTnU+js7HBF3Q8dlmI3Vu7BcrGY2SiYMMxNTubEz2bkklYGWv5nvPzzJrxCwfKpROvgo9YcS5we7k1pT2KRQM4dyBVt4cWSUzGFkJG0MrRcRMxUqjKEzmAEG8CIdg4p7JxaHeiKLSX3kBpbysvby9+e91R9itgefFDXRO73Z+yi1+ZV\/NFjCROrycQAIuUSULIi+Q2KEB9sF+kTxEFzpp7k3FPiY9VRVEoCLJan187hzO9mMEFENbrCHOGGR\/BC7UsSJERWgACYmLCXCuO7hfxwiMfhKOloIEG8TzYJQJciQAsgWDLY5BB7gArM8xfqx4eG3mOSo2FOxTyTPDb3ZpJjidmQvCh4Wmvy0gvfePaaGCk\/XGLXThtAWuFOIoroDmU3Xjdyks04qAx0qtiB8Ruyg5ozknLy8Lh\/5n6Ybg3UDqBggAIwCLENch8ZH9v2QH7iMIrfVMFVPWC6QXkJTjYEaE\/xGPl7oBI8LbAis5XU18ZwMzwCGwsDGgrdlDP30Hyo7x5vNCtrTBLr04SoXRLq0aRWbmnSlpbVKW8t4U91ZjzUDFjJH4PTYitBMoDg2wCX3hr623CyzIg35ENrM29RCVu3teb90wT4T72Y4g5RmkFpZUAU0Sc3srfD\/bl89rjfISDObIR3JVV\/EEJ2yL8h\/1iNpxhm\/TTmdy6wKL3FCehToLyu0AFekAJK\/XAeMeNw7PjxvH5yexDHTplUjf4yIq8R910y8vK5Y95G6Derbe+5r3QSC5sK8jEn9+W3g0OV8Y7beH\/IFcV3xxsjkN4EQRP4YpzXS+2rLPh9YWjUCBAAmHNEsohpx5Gz8AYBjISveZKqK5kJXNI544cwi+gjDRycL2fPdrnypi4PDeixKZFGlCXUNI5572XFFud94pJcI5L3lh7bWBpxpjZ6kgHT8EPceJ61jXnPEIZeMYowUXRpMF0SASVu0OMc9wACw\/K7GxyhZgZ8kF6PGLhYheH+RYLD8q6yBUyXSCScsWbjYpBNXEzN+zOBm7I5rtOVN2X8JwEmwSDouGGQlTagBQ2pFstn6lCzo96C8HQHyi05GaD+ZKsW4C2+j1DZJQeHNY1drmD4wasV3nzcw+Oeaxa2ZlRXbq8j3TO5RFRBWH+xVsfrtLIqMV7H77NG1INSf+Co\/yh4VuDoPjGaiN4CLu7fIbGvS\/+F\/Flcr6hrD5MGh7L+9sG8jlwxHwDIiRtBuPijSD1MlcNYQ+9tDc4+ebk07Ft5TLlLNO9JILMzaHYOYw6EKupgOdK9QAUlqumwB88U1VUJV1CX2V7CwcHOzME61KVaEvmGUhywATZZEaFhnAVFXCksRr90mBch4fbaOyO+nPb\/WWeHoRS9ucMC6XD7q7ufL+Q4dW3PKBmVF3fwHrIsY1PNVO\/DU8nbJIRFvO4yq3KXUh+FOQsAbzKFYls4ArkFQJR9K6L7IN9LpmDp7vf9Qrv477voVuA8jvIkWfTh+oKkjGUMZ29NfmKmi3KCU2gOw637I5szi9j5ggiydsltNc+n+bFZrWpFZQorkAePRurZcij4uQqSGTik0j5obf3TUgkp+aunaV8tH1dRQTBL5h1Kx+BfV05jnJehUIS4l6+PdQswU8HtoUNIlKUZnFu3PYje5NuQ5omjPjemGdlW6SPSoxab60rj74X1q2hqzwQERSKHz0IWnvbJh54q2fiLPbb6W5vnwcxtoDaPwiYor+jMhjNXhtiYBMlHLpXIXBQjPeobnWh8cAy4fg4NFaNMlBkiQ6U\/pbf9xtTAxkouwPoUtiu36pyqr0ZTo5uhJOjT8ZJjnHchjSPrGMraA9qOzsb6NYgImlBTgYn4HoLFA3wMhBD+MQcuEI7aiCC3e0FEdTGNw++q7wSMWqhYn7VR+F24on0HLMHlxiMzTdqIV9+CUpUZdQCjEFucYz5cfWtUl9AnNcWk5sbvt2\/aYqVJx28KihbYdMvpmyk06VYlPpYJD\/ycf+WwCJKXv9K5k\/1URTllbVdLDWvzU\/F\/hz585nq4Joo+jmd+d6\/PFYnS8rfHNUtoPK2uLtLq1k46e7vg+JB36OpEPQpvU5PYtn5O3PXKVHSnAoF3hRKg4IExKJBiedoUJClVGtQsmt0bLBdK\/b\/vbBoXvsUgJCTUhLt61awjUOmQyntrOcXRIJXVyGPojIIq+2sg7k\/6UY\/UewT\/SzBw55KuFmPwj3T8iQTnjxtP1ZiIqkFRvxlCfcH4b\/4421tM\/ShOla2Hny7LYbUcTKrSVgTikx7IH8j\/ITABT97AMQpVpwMo7GA8uWI6i1NJSikEytJV6n+kxbEgDW2IqN++wV\/Q3yYj+h5dWWEyLgR5CXD9n68OmC8NAz0KXM9wwpc1MIIGGy6osznCU\/o0GHkSbcePTFur0I3MbpQhIYHgUrS15ioGUnT7QpjP+iEcb25Vh41yzTlloJVl6hhwrvj3c+cITAE8a+2Is+B4pmOLq5QWc6IiCaEPCY5y+eCJPz2AvHJv\/vh239sRr90219\/+\/0P0ctu9EriwL2Wv1C900QclMPw9X60eT24V93rkqevKWzycPaNuTJDKV33RvsmN1qVld4GpeO1XGGf1iybk13\/rLKcgWhXpa59qeiYBPoRbUXxsV0D3F9KC6gzFiNRjgsvM\/Gfm0yRBq\/saQOBiavfEOnBXMzzmJxXz6pN9c5fsjjY4ApDuQ6oUzNVJjjUzSM47SnIuIa7S3y3+9\/xxoedjT83N37Y2JcUeFCz16OJLapJe7XkBSJ1uhlpzWJp8GfkPP\/muiVGDHBbNJp02dZ0dbfY9KvH4y1xmVPIFRB6g9D2Mle4LNH61UGseFdZ9N67y4BMAeuLTlO\/liM\/Jb2Gt2JgTcp9C9zM0q196XTTb8B1xt3g52\/kCgBpmJGENsx4dq6VIqCb\/2BLfIQzT5xHhD78Yaipv9PZomz037U2OoYfU3x19QeodQ01\/E5+60YqwPofRXL9B7q1HSDiBFY8nEhjkiCZj3Jy7CLSH0Ht58MQHlqDCeQH5u31FseNeDIc1p+01om+VPc\/fwIx3YE\/L3L9VZKCtPEIKZeBES9kt2uixf0FcGJq1e8pBH07+3kSI1SFr5YuwaeEqCQhEK7zHb6iK8G4N\/Q8PoMmvKcwNTo\/Tt6KC5iqA1SS5BeFVr1hunataUNRCBAqNUA1lN0hkMaE+DYbUZftlZVVXlFijuW2iO1eswiHUIeEbIm1NV0ZlTDcYr0nnPHV1dz398UK1Gg4PPvEhuOnr678X9AEkLnurB5eXb2kCPUlr8lkobTioGm\/CafhZqoYJX097UYfwM+CTKCJLym39ZYDK4AUDRk8TD0cccbjRXYQbYyrj7Y\/KdjE+naz6T3cGfaNTDf\/3Obd6bdhWgUyAL8gSEyhcIn66Fzdo8zp4YHKbBtsmlNwDyppmikHFRYauNUe4MsEHuxDBJK+Jw80SwURCpl5CnUNNk7gRnoqszY3AQ8hWdyjGsnnpBpCC2hM6J1K\/gl1dRW+a6QjUTb6v6+uqP3lqFovEv41DAPT8HPIjQHYbxw2e1\/cvo19xO1Ej1kqR0a3QU7Fk+f229ltKHSRqX39RRe2dfzyizJ3pJgAY92EuMxl0UXZMzxXTp2sedauNW516rW1qy\/rt\/vw0swQFYoXi68RTNyyXmgE1w\/HibFtdsWnlOGBL8vJ+2fpdHgsuhMI4WcXyB3PlPDK3pQpkt6f3H4bn8WmGF7Npjjl12USGBeon3GRlZuybnl29+J13KfGwO+DdyGqg62n7jPgaZ0Z\/3ECIeIPyAVt\/UXgKJyUXm1pgO1N4Fkr8akWvXY8DvaqOT+7UMxyeomL2aMCCbUyFRjjpbc\/rRqpR7dcdVcOLXPEhkfybzj+xRfyhHpta12QV2VDvzPHwEwxhfQimeuHI2xWhbBJNXFwihj\/SLgl0r5gCpvb1hCgvLAz1zLVtAwRB1pfEigMGG820O3Jc72Pl0486anxK6kfojMcjw5GoApDUGI0cpBcID8hqR5O6yEGMqeAhEmrfAsevCfZF8p05LHL64DIEfhJ6gqSm+5T4VWMc4EXnSBh9t4XelGZfwBvsYFwVCGniV+IL7xU1wFpBJCXACkJ0Y1Bapb6ABIVSGuzA96sngGUJS+oW9oGlSx5BeiWPG2aMO7Vg86xdt4toHLQDFyiu+pmUDse9CBcOjlQpzkwgblc55VQ05hfhnlz5r0WSz4a8ylKUT2\/nCjYzaL6lIcZadg1E3tCLORNcW\/8DMKOBcXUPBcW6ywuYWdrBR4SGwZCD4jPIe\/Ih0aD8MOPjbaF2Gi\/4E6W4QIkUif3NubbOHquRU850QsuTsxIJB4CsLDlZZbyhJ+giRjDyNbTGByS1msvAeydo\/Yh090scJ5X5XfjfejZ5\/vHS8lyz24IfXndzBviqx2\/sUUI4PBbW9Nft\/Y7uzg2jk4ZaXmfIc7UEVqiJzaj0YMwLLcYWizWaeuAeKRSWnlXcCXG+YnmX0L9nk0Ri49Y6C5\/mMNbaNZ9kJeaIhiTGzK+RsP0FpbNkZjWLhMYYA5wgV7VsClGBzBGzIuhY0waNZASAKkqtIAiu+MuDFEswpjqSacGq1SiU3HtNYfqD1vHHQCkcoIGxNSrNyvLLxunoOzwskPWAvTQ\/MC+xdEzPz6BU\/5rfZk9EylnF0lA1n5f02k+wek8Px+bNJ9kBmc66COmyvskw2qCA4IIuwuLEVDJyx1EOmnsJBCF2tcqld5Ogiuj3EjwKu+w5my+7CPPAlL8wuPdAdrYv76mf0SFE26vcLOkCL5424xAIEHXDVQ5uH3r8aC0zoFAvF\/E3YJsS0LpFp2x0IJ4T4bzdZMb0KcM8mzDoVX48Q5KZlZ8JibxiPtZhbg+0lCOKKqIdLn1FkMBqkRya+4ewQnch6pe7X0Tj2gu7ELC6\/n+LQeMThksxLPJ+QgsBodsnfIIHC7HJDbJWGKE6t0kzmkleibMQXwql11NOHKWTYKZ6kvoAfj83QGIgfazUD+5+pLTxuCu84SB+Wpxr1UvjIkhghScoCjmbJhnqwn62UUMb1rLOorIMfE4Wbo\/Gt5qtHRj94RqHzv2GuSuy6Chk6xWTRG+wzQ+\/ZRJil38MpFZAqQDltVihDFdYquWHvCVXHi8mwGRNOemfnqeNTpQpxp5d8lYL6sAd5kQTx67DREqe0yTRkK0SqbFZUZckiNQm3jJWDEfMc6SlisHXBZgxhdcQNbtIiKD54YtiQHvvMAzs\/Mhb5c0dokhQ1Hsn+XuEITgbQZWwDpgqfCyWhBX5E4sehb4So2nxEJEyzRjWIFEyHp5VogsYie9+QCRm4u1EToAMyaC9t3VTrzn7a5x682Mo69OuW1bRKxC2z9+nEsXDcaAeIv\/XuC\/h\/jvMQj63vghEgEXE5YPsVc+ID6zuVhEl2+bl4guBln86ZT2l0hwG2UQCUDXpH\/lMpobSXem9ly\/gkqr6arsJBieipwM13UghmvNWEcw\/7+36WAj8jj+tGHdXWpY6EWVrhjX3cK4Hn7asOjTuHhYD9WozitGdV4Y1YviqPbGNxkX3fgWj+uFGtewYlyMixSO6yhOcKB9GsjSpYame1I1KsYHEXJufL3k48amOq3oBnscSgQla5\/gzn8dQRyNv+\/kLwJ94+9M\/iJzvh8sgPlcdWiWihPrhNSNhl3yRUn7du7\/ruKnmNu1pgvqA+QABWgCMBydjg5osYjAQxDv9DP9SsKHQqx+cOaCPqKICxlY3oR771fUZaXMyeQAh3EaFtZy4GeT8cJxqzJVQ9dvlxl9eUOVE9DF58zBiZI9CSeU0LJ6Ey4NqPux\/nynP6f6c6Y+HVE\/1xUr5cnSYkf+UoKlEv4yOWkmt34vhsD7RU3JoDryd0FTF4uaknl15O+Cpj4sakpA05G\/C5raWdSUQBfB\/Sub8lbsrm7M2dCJMiu\/\/byznaznj\/GILmBG6m2wNyd79\/mmYiUYdOxMp\/EFo5vzU2WcybcsobeKz80Vx2RFe68y4jIMbK6klxBNm5Lmm3qLjMQYtbY35xeGrzJzuqCaDrxI2I8VDTdWlH7QCi6ob6XR6BDhZFapyPLDXBPCr4PAffc0\/BXsX881tbaqJMTMMETcqQ5TRr\/y\/WE77gkCZ9ke70uPLoptsU9PHFjap9GjdRgBqxRJKCtt4AyBGB0Sd1plwbAx7sXT4UECQEJZKBnkrNpqcfk6TKJuUhyX\/6VHpnnjxUPSBReOxZSDPZnvmvjZlrrqLsehdDM6YsXjE5Vm8EBFxu6srjodYXWxuo8oDz11VXG0vvdR2Wid61LFaJOyYaik6AeTHoxhM62sAWBhYMHogqoQ9SF2Mh\/dSr3zGdpoQofiL\/GP\/wKQnTNH3KdCbIlGoHr9yJoImOL7pXgw8g3wP21LhEdJKYoLJTyYSRxpt1sZd2f50gFpXa6Kv6Ue\/w34gXu88IcHh9nF+WTanal1KzwGhTwfZGMxOD8YxLMDWAkdHJ6rXPN2xE\/+phHLKIojDh5jxMiMeKDi6GOYdpA\/\/S2DPJgheUZ2AC8qgFFnmqh4Yw\/IiveYCVIXwOYJz94L3oRQ\/\/nvoCMTWXGtnUKQN6iLqfWOE3iSym6GWQ7CsPtHx40qNk4mr8QyjnmhcE+ws3v6r1kuPMjSYQ8b1WZT0lS+SB9vVD1\/lNysckgdn\/37wEYo+0eDRmp\/JGRU3RAwz\/8W7mnuAHXSHYs0N61hR+AbbN2wDQ+iN66Kk8gD6It\/GUAlPTeYZJoywkwtHGWBU71xCwET+8vfw3RPDkYTtscD65xlN+ARyGtk8W2RFQ9e51bp5d8y\/uPpELbAJ3DkyaOmeZPHO\/vcB\/arv2WwShh1BJP9AijdqxwYX\/+LkX04\/lRkr2ghN883C+ZZebUPbB6qha8ySDGAfcVhqvz3RpLCQGSaKs4rYru5kfxhYbOBG6FAU0y26tcfOZsFMzGzoODMoI7IzqCrnV\/RyZvgPCbD6XYgZRKUVcIiAODa6JOD5f11wfKWGh7fdHndJrKRfw9omK8BUvV64bKWDm5ukx+7pCXtVQ\/eX0htyq9XsKxwqbDQ+uTgRIJB\/JuXj+9NRsewjqF8yNIQrDGcYu2yWgdWb6mdXPA34QP\/hBOCdYuWINQHOyOYPfd6F0A0agkOMybFLKTiUAodShor4MRkdUU7AdpIAgwVUtyCP5YVh5pBrWCEKy+MbNTIkYsJIwz3ulyDytretFYyLu0Su1Rj4smqnedzQgMTTvnG7eTiEOaFxcV6FBJnNAlQDhlSubAYMBLLe\/jsjU10Im6D3DjZzMpmwd8n34ZtAR4lZS1slbUgEe3Z6dWV\/oraHB5EpmVj4SxVTSlQ7EoXMDpCWA4u1GLhDsl4vAVFWHNjS6Ltliuq+HYprRcK0vjx32McPVhS3v8diTGUIg6BIpBNUqIfzCF92FTvlSB33vCrWRipXzazm1UpnxbSRNB1R2GEY3oq+7TbENNfQbI3FlihP+XKY9xdUMBT7CzTaMWo5vTianhdqdhDATicckF1XI0DoYZhUel657sH3zpFw8LiQA4wr4uWP9\/\/wgom3rH40BeWaamlRN3qccMTsdB0+WJ93ArPYxYQDGn8qZtGN3HDfVNe62ZbZ07PFq8V\/Vi0gYSsLNP4gl1U3lvpRgJrfxNUXXahDLZKXP252DoPeqg+B2Erd79ucnkCsLBCgQYsrlGc+uLddKPF5oZSsYo275DklEIwd9zrMissQ+87ljGEe8ndv6BJV8m0W44CNxnZkpC8ychgIWOY3wgRel5rs1tEZIDjI3wQ9CvNFLKI55XNoGm\/ZdGfKG4vCqhnPaHgHSx8\/3I3aoRr0xyrpMlRNVUGA1WGCdvEeoDRrmaWrUc2BIkx+Zvnm+X5OZUZ2vrpCLVhBZyIy1MlupaMx9TampgHIdwdbkglvd4kXalnVF3VddEhiYGGtYWSFQjBmsOuwR90W5uTvfGPTLI3\/rEkwPQVLBx3\/hRzdMe78NEyzpDi53IXO02OhrMB7FNUvDJh7Hv0scZfsN3SWsPcEpZovgGbYUftTVsMncn2dCd0kNVs\/ZJrLOmguo2xTo8cdmdgjgDlnnwEh1YJQOd6qP0\/A9ePQWCS+bngBUr7tkoWu\/8U7AbhqMpNCuzGkbk3\/vPjCEIll5RbACVYqnCQys1rRMdWjX3+U+TOFIq2q3zm3CtROSkHS\/dQiVhhmwAwabNaH3JIA0PyRNxdZbReBvbhRVYRz1gTzxt2ZdYUKmJBtQMY6CtUg8SnYhwmnmFpR738Y9UV7pO7u\/DFQ5eDOXKiXN0fAddQalIoQFNluM3ke8ULlRyMnTFdHs4Z6b\/eQs64vOzjXf1Sl3lHZxS9c8OeTforOq\/48heE1JCkPvKMcjxP7smof4GsRoeLhZXzWEW8qRDGYECoPqqjKJhLHZWtLG7AO3ETLn8DMchYz5zFIj7B\/P1QGIEoRmK2UvAFEAzaY+UZlS8ZExgrXVg0OmtDjFZiO51wtCWho\/GeA2BUirU1joLJk2ghyrx57Ky0SklDUzAWqiE176lqa2\/MRl2DSgKNcLaIqk6MVc7S82iYJl19brCYhKtryBQNyx1x+tJjf6S9ifEukQgo2sFEFtU4mSBuofYyQbPiI3jU\/jL0Mw9CfDj6Zbko1VPoClVRjIUkoNc9XFv6iEr34H16dDpDuSCGTlmN1yCzGVP4zymooYX5PQV9nl8WjZW8lRR1es4nkNQmSACIMD8lo6OrvpRbZiq28MsMYc0RH+bxWKEzCs0pHbg\/VkH+CRz96eaF8nNgZNu0ZeZNC24Mc0BHV678pBcUR5SpwzfTowWlKr3UykojFlOavYp72UOy4vPL2mLFwGTFwosxTQLwQCqZCzXAHGnDEWIsIuPtZMwwT+I0EgR1SJDD0gV1MG5dEt4hYezTvym8gw5yDp2J0AwmOQA64k6mGFAXZ0ETh5TfkQ4ujuQcbdKAhURbHZ\/q5xbmaZlTO7iPj5KgeDtvjJMJAntHEpIdr12YA03KUn73xrhlRrdlx5XqiACVIRHmhhvQrkXak0AHYiz3jSzPA6Rjq0hcybIUQHOYDsfzuXQKLkCVZMVAmCnnJ2z4nyLrE3A9zK1cEQQUCW1ihMAZx3Ae50fIFLlydKZQRweD1als8MzWysNOS4gRjeUcpkz39cBbkg3YD4fGIHYqhtZvKva4XIBcvo2vmGkDqcrRjXLWFBu7YY9b+uCr9XT9q4PpaTIEg3XgWU4d7H2xIsk8UC2BzST4yJXNY15P4Kq\/94XO2fEV3ZglahUkExqekrpDBlGdW0T1TsW1Sb2i+kBnm8dIcGUf4zxHALX4aOdo2GfuX2OyiQIVM2KMMwRUOtiUQmOSN5bFd1lKAfY60pPqdVS\/Efq\/AVtD0FCSLu5oqT0CNRuOf9P1VIvq2SNTWT2Uru\/aKagJTFPMX2nyJTagl8oFrwlqu2bkPIMHsOVRoJMgunavIRN3NEYEf7KQlfmTkdYhd\/wptH7XLr7B7nmHLt5Vbox3lJq8g\/BJMVVonkilS7BmIeUL8weobNEeeS9n+BRhmeIuxXT+YyDTcCYHWBORmcHqjRqTMbXmElFUx0gREhYzVwOSNxUAaeEmMYwkwns5YZgcN7oJFhLMamUT57BLympq\/5i9ICGBMf5mb\/g+A4GfHCOo1VHWO2li1e8QNgg\/pzfHnNGZplVAvDsuXtTOi8cr7RWG\/NQwfj35jZw4TmzwP3IPdB5CNcTJkCDSFBAiPKjOFTrBLae+cimTZJPd2YMxHtnQYpezySnOf+3CHQnL37wkZHBXZAIZbKcNnMSiWcU9UnV8HyI75p5pcnQqDc29V6+auSE0i0ORR+orXTmvV3CQ7L3\/Jr2tJ\/\/VOlOC6qjIe3u7KfAkS07hPD7d25PIyEBvbFIJrD6lOKMmfo1MYi0xF6gdqNVvI6c5AroUYK5RCFkHqxYjPZoguDKTToKrBI7engP92xIXPWyoJJDS\/edPwS6xjIoIyyt3+WrorCWT48gsS6756IbLE6wOKWaXJh5meTb9hUG2bUSMYSDzzxJQKFXiGBNpCqdukEcEr1WW3irCVUzHJ9SvLEsfz5eKrQ0XfjAz2NYqiIz6GeHeV0HhJEwUfAb9DFWkYf\/a8Ed3Gf7obhj+iA9s7COE0MkHP3JZL+0jF3SE8YEY\/KiPRmB8UZE4Y8mIOKjAdsDKAXckjpJNOo2wR+WJ8rH8pNggACJ8IMDipUGEm3s+WpB5VM+hnQkXZMSRCFZZEY\/HLKNoRL2ojp9pCX+JsYS\/xNE9LuW9cCmR1F+PE5KiX4wEgxmRWBQcyy\/gA8uXiO+Kq1T6FNynxOJWwW9uHCtrgDbJXd6r3LGHJTu2+ExHZQYIBFeY9EnBzgQ06yHemckvGiVIEfW5USTsTQGesfPRl\/V4+P9nIB2jKsjHnFkoVviEdj8mLE0QlbAZ94qBaXThohAhX96X+nXlTDK6svl3RNztg7Q6T4foZtxf4fDooK0tN8FODOXwxq0Bu9n7RVCphIiU8YeMMyX+Jaw0SFDQhL0Y5VMs6pQaWuhcbTDLJMAIIJyzMHyWTVaaMLBwJnWeDgqsFwMusL5Weuh+RIsQi+LAGaGa27qXXCKTE1KPwOPikKnglvoJB7YJs87ciX0j5V7J4rCtBnZYCoiIgUVZ1HQqqXg7pNYDDJM2czWxkXBoqct+IFgAoCsZBB0Pf866k7T76x78CtYdMTRz6557otY91yCTWlasuyHuVr2jF4eJpPOIMHaIgMDyxIWekqibXNImKL9YL5cI710Dh+sohNCl62wGF27ctPB1i1\/38V2rkpg\/Dy1hJNUtjRa1ZNJMG32YN1Vt5bA3NoiZh4KnBSvTgYnUXiOvHRGR10PD\/v+g4WdGQwgwHBqeaDSMiHVFIAp96chfWa0itmocK8FW14\/FMfamceykgK2UMJVjq2tpjJbAA81razG+LoGt5TrbQ4OsdkBEVneeDfQdCxp0397\/2YPneXv\/pGcFwdrGHyL1gmo0lhC6PrQpcC8LU0kBu7H4L5V1Gi1r3qjdRkBRqkptM64bmG\/5YFysCm2qx86WgvujaKdvRrTkkEQ\/arPlBcrfnCYVTKdqSAqZQ9SM1jIKqgmTy7yCHYRe1ZQ8HauyJmNHKUwybPPxqgndWZkMIPNM6Xn6v5gOIdm8cD4KauiYuq1emMe8hQGy5swx\/LeiS+vT2WruGGi1cqMROLAFfejIpbwAhYTIu+84cza\/qk7wb\/LMVyBaY8VZ2kgGvgyiUijUFRYuBzJyZr7tznJdGLse6cMNW1NjHGK6VXWh6muluTnHBm1EbYJoXIUqLtfGFOfsdoclO9oal7vVMzP8bG1WuOvofVGI\/1S5r9VutpbDKQI2K+hCVxds6M6lUoNlnp6OOyYaJU1Y3IAQ96Mfea2XStfNxcUN3VbmlwHdhbnUg9qgF\/0ptk8DT5M5T0cJwViFmZSfANPYPUosM1xg3GW3pJ+bmD8aFPqcBmSRjrjmGZKV2pG91YccDCXzTm3WnM55tf3nnHL\/JseTtqV23O3VFW5qsHfy+N1ci+7N\/MPOUp6eojy9eZSnd0MqsTfW6AJhYzXtuWmr85bacmdQQJbyIa5pxMWRVbJVNF3PkaFLB0lQF\/cjsvWahq0sdm9zATPQpsk3xQh1TR1N+xLJfAwbiN3SzMB2G8JEoJURprc9MTneG79dkjCVUYpqIIZUwADQDF65geZA5tg6MWNdtm0HrgW9fGrzOab0JnNZ0tR5Qc95k9D8LUNZSUtMSnckdHMm0SXLfdPz4X9WfflVv8k5umj51SmrY44uOEsPzVmauzDK7TN\/mv5H3Rn\/HS97f8HZ2kPbroiX6VEO2P68A7Z411jygMWNqvqAvWmr81Z\/6WPVHqb51ubdCAclN0I\/++i8G6EVQemxuS0OWcuKu8LOvb3d6II4yF0Qb3wfPGybJmxijHnXd9OPLcHGAeFDdYm89tmWvbHPuPRKuZVFPIpOhlHGo4SiL2JfGadyCE5FrlCHfyOnckMvnht4nuTgU+aGkiuSOxhg9VoiRlzoZrKAefgUtxJBHGNMOY\/Bsdii6Sb5FLoV9HhxzCKJgU2HGSNF9nnYcgT4qLvtxy6UPsyXXqikYqFwistCIacn2vzbFopprrlQ2g52KZ7EOpyCQYDIEtoEulqolfJu9JlTFPpcyFG12Po\/mge56cGWZw\/\/R25dKObJrcMzN5Dy\/Y2S66qT\/99WeP3Xsyp5WfZH9eixMgwOUBBu\/49o2+\/l31i0fWRE20d\/iWhbslgEou2Sfv7lom2da2PRdXxkXZzgvdPTfjrKxWkUujjNgZ86wyd6Win4wDjS1gbkBQ527r968PLXBy91yDk9omNtRtnVoKWl1gI\/KnAklsfIhZSbIObDwwQBH+B4xDhXYuEP1yY1JAvUWcOvh\/5sN4HpMMbmJf\/S194KOwmgWq\/aX6GXt\/OdQ4YRy8INFEbEGlKVpZXdXuxbDXteWTA4JBUPm\/SZXjU7WKGzHQ+2CYCZEpjdAJg9GJReL+MppnDZoQPSAQEdwF5pIw4CQePAO40DxBgaFnpLgFcWA24AsiorR86yOwdaiHao2I0KiOW4T4wKzB2bLAMc7HkFcpsKcpnLRImNVerRVj1Di\/0Log14g7ZV7DPtj6YtyPVghkiUzM1nx2HPd6Sq92GQa8vPC6zu0An9XrCxxDYltP3gIV0YDrmtHK9dWs6kNl3GU+AvBJ5OXbygVAViMXnyDUz789cKe5nw6RYRzAczfwfyUykQilRNnVwZS5zF9bXkvmKCOTrmw\/FdRdNrYyFVZpRdxbkTv0b0uYdTqHz1YComtIc277F6D7RgzmJrqI32p0yNyBu6MarvevbZXWMib+2ztdvle\/A3yjYbL42tvDaTz\/IPAAWboNb00isOIo8qsBXfo3uyHQ3y93I07pERDr5HtmU9mj7M14POmWM3eNAn781UykEyYIRppW\/NMumA57DTQMpYcj0ZWDK8lDYtpw0ZlkTjfxdpmtCxRNZadCFGhMp\/FQ7jUlOJw6MKHB63i2\/m+v7ScH6sCe0JJBr81ZhE78zXh0k0tY\/hfnXMIxIWBXSwFHbpmJaa6r3Bnk62e6w3wajeROlyGjOuR6P2tIMjM42OgW4n0bjeBA\/DXyfRO\/yK\/IaIJKUbCNH3ZNGX2DzEfG\/zGFzW2Elvk\/CBRqX+UhuGNpymf2A4+3ePjMnwe5hl6v4HoDdBd4f5B\/RGEl8R48hAqY7eK5blmNrc2En7DdL6SFLz0h0inDccspUVfJW3StFBRtyvy\/xmqvxG1dlrsqyvAGNwNpNZUofPBHwzCudOaHElW961pOzYyW9eiG3\/1Zu3ctPhQNA7Vv0CVNT+w1dsOrUB+Ribbmo2Hf2auX5Tvem8U6eTuwLvgn2CcAkfi3fiqB696\/BlkWccR6hoXuknJ3hWdZqZ1PWGLTUbAhdCbgj3yG1I+K+rDYH8sf8RWxJCuxDYPUDayI+87epB2G7cxU5Iy+5Ks+fLNuYcgm+DWpjdWcUl4hLhOJr8oF0C\/\/nuT1aFdLNZkW5\/zKy6C2eFs9\/NqmTseshmpeZ5YBlUTJdCRaoLCqeTeVTvegcTAzLIU\/tFvSiMR6UMd2KRGcUiEjmmfQKEa29un\/ZwIGxunxkZiRlPji6e90K6+L6Xo4sXKJCjix9UHfdgh2UcXbzb02IMJtrWEhodHiqFxMs7wEDbCmILuWmpSB8NJLTiykOzhdykJlFoTkTTgmC8xsgD3m3dKfm9x9y+yCeZwQ0B17n1VDmEWcCIoMXOaZmwhdWVtWirb3ESmsQeUniGV82CUKhaErtEV3kdmpGAhurXB9MpRMZ0+KdrjF0IFfrQSLD7OrTKR\/Q6B6K2DkWBlLtvSfwyE7+mRhjJOe4a8OFlVmRZMBY98atzyiD8iLnBzx9MAT\/0aOxzOxzviclpi8gGzuTJgn48gVBfMUsy4hUsRS+GyJ4C9RyK5nbiTZE0X\/0vRdPKzqoQNW8psBSq4qqqbTc+qu+50C1F2MO\/DV0PK9GV6qzPiK4FW7ZPQ1iQ6pAEWJBUxEwuNSmCrt0y9AKgMLwzibk7DwIAgzex4xdbE9Wtb1PYMolgaOmB4S63jP6p0\/x86++sdj43Zuk82K948\/MSYftR4r7+RxOeervxxod9eud983XTLotdFSmbwHv8m68H2fvr6BtVZ3Pjh\/3dnY0\/peK331VURMl30434CFE6Ue46+u77qh7uwqsdOX+uo398K+2zaRmY9LR+m918P6eblw\/vrWz98PW30s0PW83dr3JNrP6vL\/9rrVa\/tR41bjdb2+07nf+9u\/\/fB\/\/n8ur6\/+598dV+9IPqeHXj\/8qc+tkE5nMDN9lkY7D\/9nA03j3W4FKdfvuPb78H9O2Yv974p7y1IPPB9auu6IASAnPly\/+6tb6BAbKYBomU2FIlHu0\/+ennp892X6ipHe7vjoLBKAiEbQoI7Ow31NTtxPcDZ977nkyB5iT3eghr2m8\/YHCSH75FLAHwcPLj63+YKHp4r7cqWF2K4vWPrA2dqFzbKEMAFzZkaDPyZ5vb5rbeMmwf5HSTY7B7dKhVcQjQKmT12fvnYABxtVRx4nd7G7BvkIAGQmtoH4ro8ZpSGBdUxvSAHZQ1wUDJswnsNzbJVeZKbW634\/Vs17SB5juZigrCGGL4LNTBvDAtREVxN1IofFs9N6keQnRoIelDwoqBSxBhFToYBEolM1\/LIgCLclN5n8rL6xRDNqPQci3xt8UQ01Z3nbDdzXbTjQ3GstUjwpRclni839yHFtFbT6yVUeJWcwiiiFKLWRZPN+kkLjMCzkJVo\/3Dd3fSzo9s\/x\/f4lsB48BoA4tzmxC76\/b+bnPjf+\/v7m78n\/3dS9ls9cbsNFG+zbVNXMKa0iy9iPfeb25u7O2dbm72ermCX3\/3j40UOa3\/gVhEFXdMFemIpzwHrD5w54KYrHje5kvLENR35l2yEFePfBhLSSuiSkyULITqamw0GKJLMFDhkrnFrCTalGxXMqClA8StRUaznZPaFoK95B59U983vau+bDywl1n\/wftjbiv8b7fGvwgPuI4HCLe2LinzbXLgrX8g0MoM0VKz2sbXdawO4KqKd4G\/QTm8rPMlII5VgFVrPVIvEclvMrqnR6YDlas30Qd0CpaMQ0MwQ4ihtvY3OID1LfTqNj+gc+zOfsSldr7uMl4JuFW\/vufbKGDHFCQLnuIE3u9qByB6FzYY9oH92WtLAA0kf4axCy7YzNQG2dAmnOk3W4fbPYTvgWBHyvSOJmhycBtaGWgv1ikmPdzuduLdw\/3mZn29hiA\/h9sZMk3LbzSgczgM\/ssZV\/QD+Sz2tq8S3ryTBHTECctATza3k1Zy5057q56sbdE+UBhaEgpWB0ro37RWcJnuoKm1vT0K4mxBBoA6W6DI3\/yjlTrSlKzD6jBdX4+6t\/AGNhloN0dzthTBAZ3RhbQ6BFdwh5JpfePb71tbm9tizLjR\/ieOhvV2dqvr5dhjtce99u2aIgf1WnRFGkCCsH71ZR2R657IW\/MMckr3\/bab2U+WYxmj81n7Z0gGJ2PwOhavsKGNYY1RBGkOZ7Olj5i4\/aTXyN5nqXojLWnREKip8K3qXOF3wpKGdOS5lR7JA6x6AujqJJRbQDoAObnTzlrJBsxvuwBvpsDLWq3uxkarDsT8r2\/+gVolG6mGUC93ss633ze\/+66+ntXXYYTQriUbWf02GhZuVl2HMFUbhOZilEyOVhjAc2VDW4fRW0YFWlhhxnnYKyJBMaMN8w2w9FpHadXTbss0v8b01YP1dVVAYCOwBalAQDwFAZ\/iPfW4hGc9jY0mQGtndQtBXRURjBnaKr7+yd\/N8iaQfWqLIHkhkmTvdLP4iQOGkYp2Hb5C\/l5sGPjhN60bAhOhraJiQAcB3H3pGV4GlkHAoBd8tClpQ6NLLhWMJV6nsJb4I3UcKGRWOggV9JjRo24zUW1TRO\/iUQXHsbSrSYJ9mNEwu9t41O2IllRQQxPqzcjwVhJ9\/4+0Rk4B1mcss92GJWYfzjGvod+xLyUevcT2EhRP9tUFE6ayjD3Po+wSqXFUbJUGUslPTzRVEpG76hZh63r2jHnccyYXffAt0LDDcm194LVwddW\/g4G\/hiE2x1M+AXtfM3degJc3alpXqG+GPBIgAntI4YGjh3WQapC\/Dm\/5Kelv7XCD9BBEOFk\/xAGj1utQ8ViuG3hvChECilpg\/yKoy\/3+rOdCy+x9MTg5OW7exi1DUE5xGRj9P+s4GH+enGcIK88gmFojpt\/\/U3gJVp2V1P1+bt3vUVf2kUEU+eGh5Usn1H1Foe7rHsFmzxCcF87G62iCWySjZQ6ggQiTgXocjsfn8bs2eNPiVqwds\/OZGy6fmK5gjAcJbggjJE6aAyMIeufAyKtbAiOvLmGk9iTuJXTLbGP5EMxPIt3gJ4eMJukCYKpsbCECKU4xVnDdmEsJ3lIg77fCM1AaKpW16Mizkv4LSddw6NDnAHMovlAXcmF6PfG04RolmLi3um+4ujBbfLPYbBHlFoU8V0V8c0RdKW+7ZdoqUQbOKRQE8\/cCAVY8rm6zWgWm3i+I1D9fN8P3xJbXPQmIHJ3rz\/f680J\/ftCfO\/rzrv4c68830WkPp\/oZ\/\/yKUPx+tmB7VPzaY9h6hJlCmPGhkSnenU4ORYKmV\/2Nrz7V+iXb1u\/eWYDWcB5XtfYmMPy0Dfyh7x2oDORacihFu1z\/fPrTO9j3vnj9\/MXBzrN7j54revBlr6OxXoUVh90uhFGno1nDNopAwDiFG66iDqK8sMbd569fP4fwSiq15s9IUbA32MdaOW4tNmHSOphMd7CDSXNCaRhteb2AY+6Fb91JVZTAxEIk7juILDmXx89eP3j56vXj1493fv7oqYTyzs82nUSm43DCmUb6kYilEIN3hrc14Jo5XM2zQE5Q0NziKlZU5qqgcvV5cUF\/hcSnaFlhu4cXkZjXCWzBaRG3Ha3iZOxUupgK98gba0kTwiOz78t1rPklL+DA1dVlOmJ6jutWAT3woogzeHh1BRaz7IUOEewIWqEQnNQQ3hqK4ZKg2oU4oFGP8YSVP4j4gfnBIz281hknEONZhZcPZRS8IrLpUFHh2bRUJapIizp+27D2KVuFDRMu3OaxF2PBONrdyBig3xej6SpRV\/HMhgMJHQiLL9yYKpwcZWQuzQbjOwcPMM7SwZc+lHHTfospYlQk8nIZiUZ8yEH3\/Xj\/fTK+EIUhKwaBWqP+X1QI4YJKXmss92YLR6TmVmQl3pQaRKTIeM+k95HbPDjzTKJMLpI+aXXcVwux6mDiYM9lgFS5VDgheJAH3hVCLhrqlgiGvAqP5xMyVboA2WfFDwz6rsRQ9rsxOZBr50NjpvDWmCmcm7QvQ5Ojpo+7vZYoqDpYNCdvUPqLNiPYB4y4IzNvvd2G4VBKPpsgKr9dZHAUhtmWGzOYWBYSeuDTs0NNr3iRQBzx6kC2yHnSzw5MrPt5Dh9BQUZBh\/4pfCgB95H3ZMZg8JqgyMRFP52zMe5C5tJ1AicIQ6wACUjeCu2nssbhORPLgen\/IEkLXmX0lUV\/AKN+i6NA\/0bnBkj+cXUkwKWbUn4BsLXjxl2NUBivWgB8weUR2gXkl8LBQcq59X0PJ+faWqIgbp+UFCyUKymWFBs0j8qKFkuWFBwhtQborl\/SPHJ7woPKSGOKv1hV5zbBbNFPfpJStR8jVa5xxdX3sCfeI2p49iFilaSGRYG6tEMMUy0agQAuXDqCNfheHZQaC3dgUtc0KWl8W4hbjSL63XnhXVB1WHgNnzj9rs\/w1rp37Dj7\/jy+mEkR+FcrVCPw87vL5g+ATaNdGJ6wuf4oezvgiXkA\/eEB9M4HmL5uXsuybD+CuzfoqfmxIwTh98c4zsCGhlO+6VAgIjKGj70is4Z6ZhdhF4rLsOC1+aFx1\/zU28P\/qX5dXQX98qeOhA9C5L1Ci90LSEOHKTaELRU8BdldkijGbUVnw\/L0PTMzhoDeESy3JgGx8sX0YvBLezT6\/unPY\/35Tn9O9eeXPJzxOdO\/T\/Tnqf4805\/nzLEVvZdMW3bbX8BozhwCY+gj2PEH7wDcEWIJXk84yQMk4iGf8KXovewjbJUvvUPnriYlJDy6BGQsKAP+PqijQvaaZkEp\/Lf2O1HHNH3POxhxop1OmajrZfbuFAw946yLtbfkVyhl+MT+Gt7QKt+UsuY4OpqcPx4zpdaMNzL71oq+gjps30p+kXizOqE3JOvQiwDrKP4xSte1NWhuzK4OWxbWqAkh3bXTifiadm\/mL3SCtdXa1h3TmnWlEhCVJRc1hl+jeHzKS6JEzR8gp5o5cMOzNq3D0lsR4TruK0p8C82YRK7mPNwvo5XPqsnBSh+i5G10aOpowDiiAN2QjVaA7YIM68s0KAwtZ2I4SC+VW6fsYQPMcjaVIUAvx1FsuzFIvy3BX7CelIr7zvlGROrwyUU\/JBO8oth5I6+uwEDY6XMLuQ9meTeSiLqwSP5lnnEcvPcqS4T9La6Gz589kC6+BD\/3mgmWX\/OOhtSDVZdBZRL0CpM5yvTmgRFxibhCiikBHOrppAjBWEz3Iu8xmgF4u1NYB+kQVlHiCegnkI4AvuoHUrdXDtDeH1RRusT5zUCSxRRzjkKoVL36LYRuvYgp6dx75skKzBwsW49TvW2NPSSQPGwn3JMun3Rb3HDFDWWNkGE6wgsvDY95PWRonYfsgZlGcBsq2MQjQUv5FaoX5cbifquRIJ+LEFFavOgITzrtGE8wSzCbkNv4D+bgwnD2GDgLRGNmrfvDmRiLUbBedreE3qlfw2US+ivEWSNz70jzj0KgyiElh4Fa9NobYOgjnDo4Lt8QTTFUj\/BLm95KPfbIHljUQT8CcVtKFqLJRPXM\/fyqwOPD7OIcKQeZdzSY1xNvBM7cxdvRyFmDEAuP61iYEYo21ZKppJzuJi17paS2IduPcQ1OOz\/1cY22bYjNkiT2LKtom\/6ZfKphHrbuvMAvc8RQtxpoYgMuH\/f1Lq\/3y2wBKMTlYAmkOo571\/MA16w3gbiNVZBARVSVzSK\/QRVSUVKiZrCgfKkuV8IJsFbJY6UXRu2Sd+qFdKW+qvBjhqCrTA+K5K9kLWGNWoKgLTmdWx5Z8aNQPPOFqL\/jUM1OniIf38tsNDmjkZSl9Y97O91fh7MhtiBv8Rp1lynefubxbM896obuQH5eT2D2M5mdTlVWbn+1t0qIjMhKXvRps2ba\/EXmgNbO2OEQdhQX9+GaEggbXob9TmXAmkt+jgPDG8ZOH\/KB2uUA0bcS6Mr\/1Ahvh3CdH6OWzbzui5mhggKNFSbj54kyO6696keQ0PDcmBxBwtr4jrJeO7hXMoE3HOJlt9v8pR+dps0tULHobbfZ+M7f8b\/qecyJtiBQOMo0gfSy44UvWugvQcCSQxyzKYgLyA5jq1Q2O5zp9aSo3jRpH4Jino4narqYTAQ1PhzuINbnX14m\/J0uM6Xkp0iNLf\/KuGQkgLiZp0gZi0GBFCJBtmyL9AR0IdW8iAK1PET6VzMgvJZwNrdSnf71Nk4d9STTT+p3wCW\/ZYw+W4vKCppSew11FI+ModwtjAKUWjXV0RDx6jXBsHnn1K\/BkcgT5pSSu9d9AAL8QLg22MnY4uEzM7SayvOum83XtP76hRfh2fWboFzZOYp1wZExP4UiMzWCNE0vXun7ZO0rnI+7w+5\/B4l6YZH7Fcu\/7jcMauD8ClgDoAqTeXoU6XeLHIeeqZwyM\/HMzCCswVVxGzgi4zQxj1rr6726sq1t23dMtlcpMmL+biMx4nc1PHAKyiRQqVmVf3Y7gSxpntqIitQO\/6hGesVGEJ\/7EJYm8rQXsaS+Y8vbgDT\/Ybe6Ftdq2S49z2yhP20hzXwbrt\/uYrg+vDBxqbAiOCxRqgWBLViC4ZjLT30fLQ0gVKLJp\/dQFUOYzl9\/E7KmSg1RynvWWpVSR3ECTldkeuqr3MMpg1M\/I2DNUYb3X4LuQPwgwYoab\/0bdKxUWstPhXIj4OL1H2CdrO3UvcBqim1psy+TJFLLTtXTxluTonwT5CAsY4I7BlbX0BGhpDEokczgyIxXlqbWGkxspHdgQ+jtvpepGRqnaVsysoO48VjiUudHJX3lhoO+USTXCFBk\/pDSjRhDsuP5ZdF4Hv4dw3nY0HpUtdxaj0pXVH99o8t+81I5wpxOeSNgsB9qrzP7C+1XuWak1xGInnuLaetNFUtoBguSRNISyjtNu+BxSn4aEboSpGG36PY8sOfNV4EthCeaE+kFQFEoA4Im7GvhRS6Rp9OtJMo0z1AuiSZQrG3yJnqlrlvB8HfCuF8KC4rjyE9iQcdq4+QmEkpLvKnQ6MlZGapBQsjrD\/N1bpTmKNAZXLeopykeBd06ouOFRwH0Np9lhjnjbydb08QdoWsxRU\/dM28R8O29H5XKXYNiH7989SmOosZzeXKN+cfBOubL7cSqoOxXD5JSzkBS25NvtQZlkBzU+7u0U\/UgOVBKqEM9rxosGDHPxmsNgEOKGNzp1ufpZnJLPgdjv4OcudHrJrad23QqF2jJpoNNQuoDTL\/NU\/qwZm7vOJuLmKrBuXvHaCvDNQuGkHrJ+ouDLowkRH5vLAwikkeOoKOHgSmcsqK0q5Afd7mRC4OZyKLg4C1g4h5kZkviYgHsDu+JZ4bJow0xcdIHUVgyTVhI8NGfHgoZdKQuDj4Om61+GTr26z14s3rI2FfIODDIOFDI+BCHl0x8gO0ISxyLgXqowMOU0fYexoKIcvUYiN29QclMeBKlZY96yGp92YWDRW45vdzbDfgoioRh0JA83Nb5E6olxd7AbuIpJNv4eB7DExcyR4Cf6Hb5KsWdc4A7J6Mp\/oRhveg2s+hZgjDr0wTRNz1WSbelV6ZkSGCXjaGFHRJE6mpI6NuKlTHf+dVJnZU3i3+B6Gu4FDDfGBHE1OUoh0vHuWr5k\/zqTp5O2BTEjuci6RFt2WSC603OPMUvCRFO\/oHOMB00p+MDXV2pEVBNpGPJUQitTR+wFipKuxbUzwkn9EwM1PCpRc24iJWJmvDYCP3FdqcoG2P3iXPlgZSrMUunELZqzQ4i4CtQJRE6hOgwpiTIGJRgDSttTUyoCGqHkWE3TCH6bAJXc0o5GVAs7j4cHh2J1d4A1i9AbVzLvGjdiOTaH0TpgKrWvk8bhj6zYASPAhR4g8DI4yiezWj2JhvbjMG6HG7SWMQUaQ+JQG\/pHWmf0VlrBelTN9SlegPSEgzd6OshpfUAFbSVGop2qLAyF1P0KNjDaty86nDc2mWKa9Hr9OBnBac1nGRm9HBdP8Qa4LrjsKue6J0bCXE49JpWwn5VT7YoAuhlKgBWl5nRbVUpiDsuHCUxEz6DwZOH\/oFIMn\/pJ5NOfz5Bc4n6x0hmbmneRVOEHzuTI3FEtc0Z+h5jGUScuDNG7kWWe8irFNKL2kGP22fRWftdiHMw4CziOVSiGs\/xrcxA\/8ytztraWRXOykrsOGjvqAjtQMqd6CxCEEqFlPdpRKcox5R4sxONBjWvh+hYG9efRhfRIweH+wjI9ir6KRrE0S+KsT2tn7Yv2r\/YGf+CEV+Q1JVB5pE5KK9ZRQ\/gfvt+CB\/PYMQt2v2rK+1wi29l2rn7bvSdqt6bNa8Uqr4CHnhP2q8UEnhCHE51XWk\/tBgDIeimKKWFT9wF74CoqZK6YHrlPWuV1nyEGbWJL1Vl7ADoZwNJQmU5HCoBjUF0xgKJEQ6tTFiF4wesDU8ac5rqfpWLFKYJYPg5kOyppbXrrycvs+5pCoXjB0bfSR01gAFzjjLb26o7hoGHcgxrrgPkLM4TMfireYnQE\/FWxajg1Ap\/EaRBhWmfbU5ooscbBodahz5ZAXkcTSb0A5HGoEuxzWD\/mFkqMotheuQyslDAnIT\/9DerXxIXef\/Ml+m5wRmXRdjgFI1t3CyocaEQaHbyWDvBw07Jh09EXXfjLcIDmMY0XJSpCX1cjwfVsvXJIJCtb0aNH36I4FGHeHAhKzdRw+fkL30B+w8+Y6XNqi8Tp2VKOptNkxZ\/5dttWhXC7LOKplElALpOENKg2Tkj019YvKnd5G\/TsrWiIdx6KmXxAQGiMil4UNUgp5aj7Qk8zhBm2k0f1r7ixRjcfqqHuEAszqY9\/Dm15\/A8L34YDmja2UVIsS276yB5gjphO1kHV4cPfF\/v4plKsO5mcGY7oVls5pYRkvymxJJdsl9a02znJIK9tjcHMzLyDTzl5M36eHDLicOkTzBHKM1x9nxonHvSzmp0cpK06pEDIfXIkzq8pY3sEiakKgK6rAVYYTwQCxP1AFc0PqFd2B\/Pez2QV1VEEb0\/wLd016sXGCXB5VlquQgTvPR0gJNil+Ko8bW3894L6i0LDbLwDkUloJG466L1hROfO2341cq4vJW6MPSyWuk2nN2Hj+nkgiLIouat5G0LdOhm6jfXhDKH93\/j4Ho3\/w6IoRCCyiIbpvAUHzKmAkwbeC3I87gSExqvj7uNacqh+WXf8skHgt+qm8IB5bSBATCF\/lYq\/6jWU4o\/2X9zGUcmydLuv7L+3bq6\/gA7hEFBUqN5C4240+sLcaW+0V2nV3y2Lt4OVVsBLsOKZZLeoZn0gAEOnxpG90A0eaIg9Z92Qn3hxaBEX4iowgPqC8OagdKw5IXpL7xElLZh17P8bahDFAy4BN5ZWQIO3BI09MVQGg152Ra7W9PWjmlricrimqy\/W\/HK1RUqF3wM7tqdW8Y9BtfBOX4esOOt9REk4wYqTyQEqrLIRVNi9DunVAe+DJQRRQDLpZ4pkrVYSySIhvRehHzouItzpQ7MsPI3tN2E4HWGu2Qj08EWVAw62IsPVmI5nrqyupAFrBhOih7EOe2swC7agjeOv\/D3brhYngyshmEGhgKKjHgs+n1zDDzgFxHWVC0NKlbzT3NsfD6KfVq2vQWtL9WXkZjMreuwXCBFnZis+NGkL2QNbCYUpo+yI2jR1PUYF6nc81Be7HnugPsu8vTee7GYgzfT2WPKNbDCEtXK2g+bCSQ8NljUW+CH3i2i1FzLTezHoGgp7xOLQdCjQeA89VjqVdR4NJCsFDX55A3HVntSrOaWWVfT9FF++XviJ0tp1NEk6s5kUFfydHUfVXLK2N1QcX4yy9oOMoEw5oSSiz7H1+fqK5Q62lkLWpsWLCOqmtGFEipa2fEH7f51ZESvr6AmV98ycZKUry+0HPQDmUb5BqtH\/e2ZfhfaVNmqxlTaVHTW8eLZJs9+1\/pz8Xy7p\/yucHbSEV6e\/6bfD036Jf15N9ZMO2IK\/OSJBuAxP\/GVLuaKy6BeepK1n1WCBAORCZ3NwSIoXzhQVLrdvy82Ag66ogXAqEJ5rUJHwwlx+cYA6MrGjhrvQumqWkA8lVgaR42RrwbyNDgoI5flo8Yffgn96g\/16tfCK7zQONL41XiiFgVZekGMGPmN2RkMlQmHlQnsFBE3kzucqchggKsrmEg8DqHsqqqfFXjlo6QC8O8F+OpR\/072X76fJLUU8ZAvFRXizVDfLz9xPjQoNvOJLhEyatwHHqPIUQwGgLfOugozFI76qPFLESkMhuv9CJzX+xG7BME0ONOTUKPoRF8UVKuAKaYZWNEkUObpXy58YSiZNBrRIZlN\/KvkptFYqhob6sZ0AtrfxLqjXCmiw5zr1KFAwasrvcCM7QX1Xnm1CpKgtTPFFzh1riWs6REXtnoWkpFNOdmKmR+jLeHSaVLp\/p6Sl2DQwhwXp1k4kK6N\/vHJRtyFRErxcMyyV94T4AWtifg1+kJE5aJDUSKsoJQ7jS9BlOHj0qcGqe7FKjOZDkMfl2h61WahSbpDhdw6ixvlUhwMeKlc0VDE2YJqyqxmvSNmfqdi0fUiMRLVAmMpmiW6Dqw8tFmQd7SCCZGanBCJG+O4lMQdxzXuXbOXzbYOd5U9aUFT7e44BQ\/pzh6oKnbu\/+76XN2i6LEDU+Ck3qRBcGMGzRAhPQrHQT6jBPVo7laBlQwkUCyPi14x5mTesUtafIIO\/ceyv8kZ4ZKtYIeWYeIE6Jc8bdx\/+EK7Rol9VuFlCzNKGr+mdgZgDeT3ddDaywwmz0Nsg4t8P+6N9KXjPZW\/jZSBnecuJ2siUXNeQKGV\/+0uA2E95VjniumYp7wdIIRPsDeC409tnt+CFfUKKMnQpmIRJAaq+9X4LQxU9dQIJyoniz3vD1IMIv0HxpKrRPdbJb5DfLPTEZo2u2bWoQQ598zmAV3NvRA7yGPEyqBYwpjFcTI8U3MQrTImo30AzALo7RWU1+ZjPp\/7zMo\/KV4td6mhVZHyd1KeNS044dtFTvErd\/hDDjZrVSm26ZJ7lvAa3mtcxMI7wTJWMbnkr2A2C+HIyUz+0Eq38ZKXF8fVP9ci7bIVBYAAS1lEfOIOwXww8p07qLgIYtOae4hAl6pw2SKoGuXLA42vqueBXJfPIZSbzAtzOy6fj\/joqQl4d0ivNX8pf7FXltDJBi4NxqlERC1YOMauz7oHyYVLLc7FPBhCaL6ggAQusMtfv5Tl0A4qJsa6+ODri5OJwrG1HRvPVIjj8V2Tg6p8TWKRUf6mkV5A9KVIUfADrQqKM5yx1giHnTLss1aFmqgjlb0zwhBauqaZSAXtEL8\/n3aED4R2KJ6qSkdRQioKzyrIz4o1BikhIcy7XIalxqM6HKgWtMGzmq6MZci9ta1SgJe\/Ns6JlG94Xuk6QwrCLPye0FpLaQOIlT\/z8NZ4AudMJhHLnZ9OM1AxIm2L7An66Fd9YpyAADGgJ8MDD9qnVZFycGZBckc3vyo7oTLGtuwpZHTMuBW3+0vxDAwzHj6pveQ+QkjKgJsMS0FffIygyJHogzHsEGL5unsSaJL5oyhK0WZ4KrgwU0ZdPombg8aT+Do6NHFQRotg2Rp5umRYt8TjAx1\/RYyP+jTOw1rdGwyPurBUabH9hW2yUGPIaGEBz75O9Tg\/D9Gr3y7L07F3zkkIhDS6PPMI9MjwEDSeUX1eX8PUD8dk2W7Qw+KyusNOP7wGUWYgGjLezxDLVMLEQHuKEw8W7nczQBtS20ilCdMTfgXnHeBKHaxAvhj9RIxakmltPZOXILwvDK7KjCdDe3AwQY+MMCPM7HrzhnBPIa\/2pIoVQxEwvlJmFnLgN+9rpqU5j8KGcjMzwhM6KsbvdTSD6vJ+MV0zZ\/MWlh+a9t9+6nTe6uk8+8R2cD9kM2ehLCG3TLxjqRU\/nlfuWJU7avz4iYP6UQ3qYh4owdupzs4\/FZRGzvdhXncfTHcTv5RnfKPLiQSRGcoQEvRTBzbVAztK5wzsiL44LPV83vBh7KRKfTl\/+F+64T+d09xTixCD6nuWBORgSy\/9Ip6YglZ8jLT4Ugk9K3RQ8PllHG+tfzKGwyuMtLzS7R3jfXwMtYMEtj5qpB6s8uNJqabgzOaMmWo0Wbw57VDDzTKnc9o51e2czSlzJmX2xtWOTL44O7pMPsGR6ajCkQkS\/2u86n5C06+TirYhRJDGqXf8+ObvgoXINy86IbGYLopsYe5TZkEZyg5yUY8DbU9YkhlF1Wxoh4YRnIHJ6P744jVlWAxRRNS1IuucV9grBENUsDhguHoVsdToOzTbqb32nSX8DM9fqHc7Z\/EQ7pAwCpA3AJktTW3Hq1DbASAK51QBSBmCjiNsm3FQ9eTOpSPYaqkLoJ7shQjetPwvN5WWCYzRSjs6TENTPtW1UbfgzQbx93ViTdtxyQiNBAsqApXM10bgEx2VmEhb\/82yOZigLpr+5EZ9\/dcGnDH0H8kp\/bQUyEhRr\/Y09oOM8Dcb4igrEEgJ5UuXL7BrfW3kVlxGrCgCnoDog\/yXnjQSLUMO5PD0l9ra7PKNsrh8NZBfvyITkOnrN7sHqhA+QOs5e8DoErPukAoVZPQ06TaPTewL94ysmS5YezPA5Nq\/hbvFK5Cbld5HtbpJpm57NOJR+wA5GWxpKIcV\/L3hhO8pmlGS+zk7UFm02S50OZvY3XZtJXxyTDZXzAuX7m1V0mLkW6rW0OgLnwhnDkwBI2cpfamyQOefGsWdU\/cYxuZ3yE684K3QYztSlSI0YAi53MC1eyqyXXjQL5TxQKt6ml9e26wwumB3SGUeKLvZ1sIJ6UYoVk47JctbPsgCliwe58Iq8E4wg5Wy5eOV0PfhixzHV7nB1PSWHbUi656dVOmgQvP678S8fiGld86ZpVR8ziHlUpPRzkftGG+97Aki5rHF1dw3BwpbkYOmuozOrqONEHJFTP61igjKUO2BcIKQ5yHO\/MwFwKBo9Yy3lCFhfh1KmvEMQPRCKJbBo74+HeQR69nXfiT1Ca40wUQ9qm+iBIaFmEIzKOXFuljG0MeW\/jMoXSI9c0W\/DIqWEklfJB4PDdXW8X9hnwPuQWdTgDsqUux1Nn7g\/5ryV\/4HkeHjVhA\/kTrTgloE2WaU1OyQYmUsBOaBJPQ6gz7sqCkCy1t5O4YXstjV2rgxGR9dHOggdECGq6tfwDiNkSLn5GAyPhB5Kok3fBQAVBSfHIPhlU+YBjUGw243G\/ObbgIjHUL+VafmYJV6a\/5aWxPD7jiZ1Q6ZPGr7hcIcWHjRSZLP7qDnzTv6xzb1lKtjZgQ\/2en1QDAQrU10OXezk\/MsG9+NaWOrQuiOAEdpNZIBSvjWAx31HrI1NBM+wgrASxIcpRHRqwF\/nvHsQVt14xHpYNYjSL\/NsMZgRbIeyhDlxTITc\/2s0OI9RDsv3+\/CAPRBDLfgezHcgn0HesFfQ8guGZh2Buf5KJ2MRDghwf1LLK9hy0FX02Uiyq7ixBdkwkceFZEvyXIP\/KUk9sbv5eD1vdsiPM0\/fln6+Om9g2c75W\/KKzx\/cZtmG7RxtDLkZNKVbL0q5ndujhLKqPCwwyeFxWQkbwVDtfgkCDTEDp\/m24IPX3ljsjJhS96jQjOe0z7jhQtxGpIyZUO3+L2hFcfo6wtMPWmUDKpgouZUOhjMMW9FzHrBBCxrf5gepAj4NhlZ5nBt7Vdwt\/PLANAqRN2igh1a+8Ifopu9efn43gSRlceU\/S9sP4rbF5SbQVpOXqCC0tMAaEiLT6UJ8kA3IOjmnRL9Yac\/pMWXVH0SDYeGKbZtvHVtrDxxJ9BhsCXlHLGpNFyEd2Tn1W7lCCHmAkH\/LyRDeQjB2MO77S2aZz+x9+KqU1IsNahapiNtsBUEC6fZVLxFSt\/4+RDofUFEtRlA+a+2+9\/4u39rb69xVa\/1kFINDsuHV0Iq+kAxZNps1LAjruJxdwrw1JHG8\/bV3l6HORK1Ok\/zIInhN1Rg2tnKCEu6kmTAYugkaQxAw4arq6MhLze6JxUA0x4E\/gsg7AgLwGOMiiEyrQIXeQiwbVoNL39EVcN4NhGdKDNrS8+mJelXTI3Hw2gy9L3L2cPleLi2Nhl2IOcDBUQU4zTDiXxeq9+Z4EVtMmyP8Y8bvVnDt8MUTeulpcoR7ws117e+f\/Cd3fXjocMoDMw4jg3ROvunkl0CAAzxziwjuJhrSJO9nnA52voenGILY4hblb2KraHjZJTrjwqLSQsy99uPIh5DGGZSoynhCryOuxNYA2QpIjUf4gw9ud0HRYq7t+NuZ3iK8usZTC7ze50esmuzD+2t91trzEy5vvXgh1vKhRZoNYGQGSYAZXt0HJ8N++Q0hVm+m8Wg+yCdBEvZqxBQamMfD6sOTQv9d4Sw3ue6LDM+k3ZXBF8xvnkwU4YrjtJVQimIaYpyVP0ucxiFV4cdA1xKzUnz+bu5dsg1lempW9XxEJI1ma9Bwyevnj+D1pj1hj2EkyHi5Z75BvUzbg2cV7OhHzgnJyExkVVUPkbFIT8W05CRixyheGSGgx017ocQOLYQgG8XXQ2UDcVJm0TdOoedBPebFdyTJJuo9lJZiafJEOej1f9i\/5uL57s2uCqYx2LXKAgjQAKXm0x8XX+390OA7x3ZihN+RkAngO+dJObjuPMOFf7QJUO4DlCrJlJgHCiJZj5YCtW2TQiX1olRx0\/Rxwhue7jWS2MYzdraKfpHJIW1NUTiBYF3+copbS3wgRgQWzprH7sryhnncyxtI1rzam0VvB985MquIccl15C98XFw10CsBn3n2Wn31scbJqnmuvEj264RhVUAF1WeNxn0KDcZ+eQA1E0GAIOLXw5O\/uuyt6q9kKeXwftPaKeP7LfoT\/sOnnEs+J3FWB\/1sGO+0AewiYyM9pDZ4UF0LqMvjmBtbYfxgYTV2z2LjmH1Y2TdPJXn3wqE7r9Aw8XVQySLIBi8I40XTv+Bxbyo9KjyymGViGwX7QugLcL66mJiU9G6aNUvqq2ML\/LJjnhLB3XnUcf2ilYO9F8rgKl+udMJoNREKBYPZmft9wAwyMYZQ6q7rX5m1AKD9lnjR2hwBLgSH6R9we1g60Q7rtapqbVzdRX2A4MgNIOE96eNBzHCT5827sXXObxozcULUSIZMu2dJRhNQAItOYDHITYuT\/kOrNrVYBClBzdUTNlWALsbOtiD6lAxbX4msvWtovoY4owzCunfOYnX8fq6UMsdUDUn4yq9CABna9MCCTu1Yz4FEI89Vz8dIIbVzvybDrqsR\/rJjsuDdOaOjVRFsDG0CCNGMiSTfgF4wprI5aW\/4XrUEqIJksVdfDpWEwGbc7xrKiJ0HYqAHtpKCCWj82ur+W+2drZN6dYOxiiSsp31rTtYVpvHQnW0g44qGPDpLl9Tz6OnyJ\/1SD+mrahCxHfyeSGNIWYNPta39ltA0O1HnawmgWyQHFl\/IZKe+qLMCwz3Yts8al2Izikcz97Yjuh090JGpL8xIagaG3+WrkDXrICBz1n7m4KJA0IeyBWIzKcNxPbNfsf\/AQSNdqjIOkWvF+1p6+LOcetio\/2ufrHxbuP0zvHGKUHV4S\/3e0cNT4rUo1PMrlnyzG6pHTfw7K8b+DYGvs6Br79bP90+XtcDxy\/32wySj\/IDd8\/KBt7Te9X8PubOMgzH7ul+xywZI3YUt6EEMZI2L2TtT72N6NWUqP1m+7tkYg5YmLDaCpZGcCscY6OaMXtYwvw8ikMKrpOhgw2U7IZ1PUhOE\/F\/t429W1t7V32OvANREuf81zgwzE2UefX310XSY8aIXR0jLAyiw9Te8XKiwsfQMd+wuAJE+6ZTWpy0VGIItrtDhADD+o\/av8fRuJ3A0UplBivd8Qj1hdiXDMWFgYjLCTpcW\/v2jvoEG0fo83WbKUqEXyQ3OWqntRFuUIqBVDOJEHNNFTPcfkSb4DGKjhkz2VwBXGldH+EOTdN7Y4iRXVl5Y1sbe9y5PmGUSmC5hFIQu1WcDonKGiMf8wqFbKOz2lXiEdxV1EhxV5UIkmbCob2mF26VN55w6PbkyXDoggGFtAN2sJKiS9pU8P7IBhW\/YBJEShwS07gYz+vmvesaGAZacKrIR15O93Jhm4SrVR3S9l5+6gg33jkPJsDyDc6WumhlDNkxjYxlzGLsYROUMs8W\/NgY8A9hCOBjQYNkGANCToKLgr3wXf4YIxwlRM1dipqz6+vgJheanlFrYnwOjBrF43U+6Lvgh891F8Sm3IxAehLlem5tR\/RdCDMpu+DosHggterY9y46YEY0l8i7jmYNETPu6uq0\/LpzWnLdOQ0uO6fmroOIqvPuOoxaV\/r+uSyeaonXFoxErkHyyd7sNei05KIjChKI8Y6pgsDgNu\/oH9tdqiBOl1FBIPcWtg0r4fCy3ZX1psaXv1blnvBCKBcrzMAx0DwYyUCbhx3zxVys3M0KLTzSlyvApDgO3j\/c7WonOsW4Py8Y3FhwfGEL8cIvV4h3HBEwT4toVdo0RoGqtE5jfKjaI8E3WCR0HtGCurnZetR+KetutXDdDel54+TOI1wehzw3cIM5AWtIHJD7GQP2M0+SoHf1fC8v7J1KYGPvVPKrddy+C7jKDWknvFUdu1vVsboOHavr0DGvQ1Ym+wIwKG47RHDM30wtf4p4it7d9H7l3dQrp++mjMVYvJveb9XvV\/MU9\/N3U3szZWulN9NSHKuG8F8F4tyGac3dMLhxMrGYu3N6pwe694itiX9Ten7Qi9o\/PzA7e37g1ADyU5cJWof0V+H5wdiF8zeVpNLrQreeELW9AyflgZPxwOldXwfHxTIHDmdzb7EY9\/7\/22LcB54Y9x7FuDLfjxTjPtRH98P\/RDFuKMIFXEQ+i7i7wwo1ghjz4ArwBKFSGeQXyATg\/UuFuD+GQlyJYoamZgDwf5hAt4Lvlftjlpz2D1Q8AgyAnYcKfhgEPH\/zmnpEP9TR3he7UnN\/RZuj7iAkg1KrguEHF1cpKy1vxXhFNmHuFF1Q8S4v+tmUl+f\/EUh\/okDaHvv\/YpH0XyOQfnRjgfTjfyuBNEZTKZAGESoTSGPK1QJpXed\/RAz\/cSIGLOu\/SMQQcBnLcnxPhtFPw+jnIUQCT\/HHYfQzYYR4JeJkDSfCMjjcOeofNu\/ocIcmMujVlf7thQ71JqWYqtJ0VvkDzjEVT4Y2Ri+\/\/gS7je8efLOdbPw0NKZBulMvGqnnGu7WD5GuvIzS+ouJ5gNLC3yo2jpvJWrqlhF1A8m1mWj6eDKVeEkb5a80rXiN8631ZIiIHT8h5du1yVqBMN2wNo5s6F+G0X4yvL2FqPPgkOTxbNineQXh8c879hIbb\/w89E1Lnw7X01tx3cZYxqqst\/GEyxgjRG1LVtLAXa3z82H0QgzffpG\/L4fcG\/Bx91y0PDOsl0OR6L7mar\/hn1+l1m\/862r87l0F9r4Yn46SbBrYVF33Tsfp\/8fee7C1kWxro38FvOd6pKGRwR5PkJC5BKexMTY4zYAPT0vdCigiCTAG7m+\/77sqdHWU7PHsfc73nQlI6q64atWqVSvOuqPh0p\/dkl++noSz88nw+E7rfNjk4+M79Xp9djUOR60l\/9Y8XforVvh8GISt7jAM4qUv\/MnSD936muef4k\/jtH58xx9enUy7X8LjO17ztH70yQv4t2bbDU9LvtfwmuXrFr6VK\/1w2J51NoPTysAfl0yxUlC+Dirj84YfnATdC\/Tp371bCiqX3WDWqTe8oNIJu+3OrN4s35arqDw+n3ZK17ZC1fekaLXhqYLV5m05mpx0rSe3hNqtbn8WTqLeG\/ZlIz4INHI8tM20ZS7l62a6BcxPt9CsdAG8z6q2nu7NDaqoIctLDDcautOlR0hO8UQ+3Rl0ZAZ+3Y8K17gajbrMrdZtlRq6s7IayNFR42jtk4KgJ18VZD59YmG\/3mU9XXbJ1z3a\/k5z+5N6XjPqt2n65Rju3o0hz7JFHj2nu3f1F1PpWgZjHibBCrQwq4YZbNSbdkp37wZH6+aJmtlt2fPjMADKhv1puGQgElX3nHqfPrmLLPO7VnOds9AJVKlZHNJITqhXl9dl2\/RO68vrXl\/+Dvg32iLD05Jp9Pq8UX3bXX3X9f5oVEenpbddb3zq7fmzDrbL51Iwap4PwuGsYr487of8ADBy3lSa\/S4+nslEN9YrD3+6BAaOLoGkw3CiHm8uVLm6hi2WrHpzs1Yu38oEz0ASag4cMXq98c9OV1YEeYL6cyLMcqCX57rXRKunjSrIxoHPv+\/5\/VYKh6AwLfzfxv8dEpYe\/wz4Z0gKE1Q+NErl2j5wpNIaTR77zU60ShO1guP6pDL22+HJNOyHzdloIt1PKqNWaxoCamNV7KL+sVEal2sXd+9eLHWH05k\/bBJnn73de2khXDLV6q1m6QKzbqFx9WTTfKnMRuNVvzreLI1Vk2X0gRFM0MKrURDmNM7iaNQtWS5vjnVr5j8ZO0Yx6A5PLrrh5Xg0mZ0oDL57t7mR+aJcvh7XX7RLgTeRvXp8Z3g+aIQTd2eOy7POZHQJUh4c9kfoffZkhC18fKd2gRleAMao2HpUX30NmtzaaK5clK87ipodjb3WJ3kPOE\/CVjg5mXW605Mp2rm5OR42uliJcntlxQOEhv2rE5SZhNNOd9i+ucGj0fjmJgRy5L8duh3pzazelNY26q3Nnvu+OnB\/AS\/LtV5lCmg4iOFhzfU+nYCArI7xB+UGBeVYZJWFUa6zYHtEqxlx9Yy4CgCtPcLBgc+z+sCb1Xve2kbH0Cpgb6mBzdOwj2qNlZXyWeV8CGC0ZqXOUcNMXlrooYVBugXzc3W9Btg0ao3V1WQjmkRx44XceDPuuzNuu+GtSwSn+qRrVLrTx4Px7Arw9usfmnh6fIeri+MeNBtfiOLLa8Amv9Lhwty9+7qErxl7EpRAEQGHcNYCbKwPwE+cKJWDEtasLMRkJhTSGdC5HpDgsHnqMieaNrVHo3Y\/nPntijqDiNGq36YiPnYUoMNhXdUCnTGUT22ytUf1fZS0p\/eTBjbSxy74BMChUX+Fg2\/5Q\/fu3TDq7+5dsFvObzXHKaCT8bRUrjRH\/b4\/noYC3d3uxbS0vF72PnTry2te2MYkCdyDEEfp5DH+YDsCQqNGpYERY2jlqNAhTs4Xw9ElwIEin7OKxNuZnqoievIFJe3aXXo7AvvlHYMQmNclEeIyQogdjRAKwtv1y0qnJqixrRBDf+8OcaBOZ91Z1+8TW7YzcOWgfH0QYQmYiuF+u7TtHXiADuAELLnNnkN3ADo0naKN96CEfqMvjGllGEFF7c123ccpW\/Prcky1oyO2lT5bU4\/Sh2oYO0+LK+DIixWXM1QG1cEm6jVx0PmV0waOOr9y4OOw8yvvsZnBaxvaHWF9Y9MOHJzvynq5ij+YFWhOjAJ5kzq5DMHuVyDKlXNitDoi97sVv9T2eh7Yuov6uLIbeFv4eOzXxvjY8aWl8\/rq+iNWA2n5AZi\/jvPmHNxeaRheLu36s7BcaYezt91BWCrfW3\/8YNU\/lXKli\/pauYYzXH7pNuZV21yrYlDN0gD8Q9s7Ho69Le\/C872Zd8YDHxszhTCXCj1xiyF\/EiEY9l\/8AX+jdjM86Y98sJec3A6PyKZ3Wa5lwXgHw33fqfhBcBCenYfT2ZTbAZhY9tymQFAUjVaDAMZL33JWLTCumxtsl24QhEOQGLfdu3dnYEKBu3au2zLXbRw0GOSlYXUTY8H4wA\/HGyrN9Pmop+tdfkrPAZurNm6Q\/BI0VziXLlbaKzNNCx9h8fxM8CtANisD\/CCeAWygFolznXeEi9PSTrl8eYp1rJkzDSWH4QXYhwDwnYyuDAk5Hr5GYUHbbYBx2xx4mmNZnjYnoKO7T177wZNuv8+Fq21nkhM0caDok+Lt\/fpB5Sl2RANMzZtmqeGTUh9ULrrTbqPb74Imj4bhzc1B5d3NDWjPDmkPgYqtynsOajX8yg5OLHUkRddg0LjGKdrCZZFU0wMcdiJSpndd6NsThxtAk4ntq+dByS3MrkJ0Ffo5nKNqrYcLlI+FQtl66FeApJOrQ83xkia2Jv4AI+NRndsSzympjeFsk\/\/Dau0I1TpAO6Uy2A281Fcv+W5YTwCD9dS1CkOxr1iHgFrb6HEOWHbnptvwUZY8Gthm7v\/R+ax00I4R9eNhBHUPxKFcu1pZuQVXR8YulwzY3Qd8WXz7YZedYuMtVLJE7kR2\/4IbVp2dO\/\/UhuWO\/XxamqlD5BnuS7v19x3vkKcAhpK7Vy9xPSWGgbHBhtQ7jhtY7bhtbOCrU1AbfOIET2xkhfYgiH5fiCVx\/lyVBOz59rIOocV2ubyt7vb1S6GO4BYGPnfqyWhyklOd5z2qQwaB6oCCbUGNq\/IXLn7l5mg4HfXDSn\/Ec3\/r\/f7z3aWDx2\/ePT586y2Z+95Sdwp8X2qeT3ixWhqPplhDMo7edkR84ixJmdfKyqwTDiOQAVPleCEeg\/oCye2rq8DbaXhbOEmugtgZIU+JujWs0ppmV4bn\/b63622DMMhiTXwwRNPZVT\/cGQ1nfncI0IIZ9A75vOXXJugQfOWE1OkQ34mfh\/wx8flZ2\/PrpNWg0Whsb6g4rVo2T3VlTrtGHUONduJWUG+liFCjXNsBqd8CEvrNEqZXW94bgpLx7Aa\/jvceGlEce05\/5etn2K7l2qGWfLWqPd8jBa5uO9Kv7WgksrErTX8Wb0VtF4hRcDwPuWbXlxH40eTEB7i4KDHwy1OCPwfyB9mABy0TwB8I3A8AaVIwgl1OiAN+xKEOqlkEdaKOXmmMMII6VjgFdSyzrDhXGlDnAi+T\/PMZoY73IJoG6kQrB7iXc2BbvEogqySqQSa5MASrxHtjh\/fGHu+NA3Vv5FhyqfElyacmG2T2LzOKgTwq2uOcDzVQn9J2GkRCEI6H7abQJZwoIReCFwKhDb1T1dYL8rwdnolF7GJ8cKWVlQ4wBmdGnNRh+Q2lV6f9MsQal5pgRqwjOZtRN1haAzXbsQyKkqk8p9AXrEm0WnYkvNQAp663Y9grz+KYK8yELPGls8SXsSUWSmNOvTR\/qecEjA+EDOJkBIG\/xEk54OFHseSal71GiucE8Z5NABKXPXaQTIHkIGPVXJ4GW6v0QgOig8k0qts4+LZlJdc94P2BiG7klEefHb2B3ni7Da\/bBEuIUqdNlt0O5GpzWm\/zWtLTzOHdu73MBX\/jHnhv7PrxwHuDjbZzc7NjIMSvceCdNu\/elauW3wD7j5O8\/GhCmHEgaxjW5jZJKqb0plwt7TbqbzhUcoucxdrGwI5NakAE\/N9riALpLhrYpdCn3mkLafuLHERbusdzda3Edji+M2qc4nh1saBd6V1ON\/+qyyf47G4zLK2Vq1LazDBVHtDQNUDR2DJkTIM2brLtSJKfd934C7Nv9s9xXxAEPh7+pSZ3CUpQrjlvj+8MgquhP+g2wQHf3Ohisae1Uxxra49YCft0X0RMk9Gg1cC7u3dtDfus1sspD9FOVhX1uBbJ+bASjqDvul3fDiCdk2sOFr5t1DJ8oMCPR9c5gi8FeQ3FqnxmEzxs3vXfWlIVhC8+fPXGHbl+ghsxvuVWStXBAyB8YxL6vdtbV\/DVHGjsS53sS5nyMV4L\/AnoCMgNmu6FV5ejCWVSf5HYAzAvrAYpgqt5JmBtg1S8AFi9TlA6DTzcLSIqhF+dhHTry2npaAdiVofoNomIx3eebu0REtTdrOGYRN\/Bzc2h7b5RPw2wS65vZYF55vgb5i2fdxpYlU7j1vMxqIv64ZH\/yfMBT1NmdZ23RZSoX1RaHv6PuJvo7HWgliP\/RAM8zjpUiuwCfMPgNf4H9Oyhgo0ORHLmx04hOAN8Gug3As6FXJQ5lGj2YATzWh2jY+cW14RixkjbvIdrYIDXNoz4ADN944ukhP+I\/OkUkiVX0rtFbdi7bv1tt\/a2qwW0osT5c190LLXt0\/rOaW3ntD4OJ4D4gHfZCuSfnPdp\/fFp7fFpHZoTt470lFXDk8a8dA1PNWVH9YSjYit+1pA45tqwUy89Pl3dPS3fK+2crm6fln\/CpVVk\/1imt92bm\/WHaxuWQo9PV992y+X3eK5bdGDoLPdTtg3xNwrXACyA5cHa2qMx7ktrG+PTzcK67Fgu4G8piuMoPTbnqeagWkRz5dp7CJ3Xb711LFXV+e7x+5qrFXgWAQHgqv3R4GEUTsJJhLE4PkTY7lHX16hsDca8QhzfOUQFddEzz7IVd2H5+jX+pF+0sM8FLSmPtaiKWTVzJSlOOblGhpqL43GIas2EoORHJSc56gb\/BVmrIkknQro\/\/cj6zVzJCW4HTYh8T4Yj6N26UN5xWOp24QiU0Kjqn5IYYVhj8PEn6kCdDyAzj9iU1sG45cLt2+D19SA6HuYDKRsiuHiRe5Fjg0CpPW\/yIBGxHoi9HxHp8jX3IKCWjeoQXBWeNUD59MZlj4LrkeEDBCk0fEio+USPbfT+YK2g7eyOJpjCasP9xQnYlp5ztyhd9ovTOgXez4VfAyjxer8xDSeQeJb+OPWucVsASzfqB9WjyrpXeeiJDtG29IeM6SX\/CiXbi5vYvNK6MTW+ytraOrR\/Sh73U0PL4u5BKaeeWOmcu7Olbcw6hT5mP6NBYCgQBht7L20VAXmQhk5blwMmwwQHKjaMDsdBSqII9aFiXxU4+KhMff8j9JQuTVV4De10pxEMqSWGhLYFvDPsVB63SeMRCBb6\/Ybf7AEVAcDiSUCIyzoUyCX1iha5Yo26gkscqS9OoXcdqSWm0iluR7RvTSOycFmLacLcfQphTMi9X399Wgqp+pIZpUyiAk+tBDS9ZpRVWKlwbGZkMDOI69Eg1sFmcIaKLgS3tAZ1CMEm8FwsiLS1gpFEk\/lRmtXPyXeVZqfbD\/CA+BBA0v8ZAmWINkAzh2EtekTtQFgHhfD756EXUqmsem7hYY5cutaCfiznnRhQtIBOs9looK0YwKvAhgHi6EKJerse1mDidBtiMmE0fOHwOBgzBWr6MIXoEagtrr8yAa3Sk8tw5sip7isaeceMvCPD7nDYrXz62q63YJbVAWuVAD9F9MSVxGMsKzCneAgw4ch9rwbHQaFrXA\/N3nFI4BuN6B5wmoYhvJyIVJrfgZOjy7ejgzA4b4ZUYtejx2qXq5utUuSqAwMSLykEmaV8AvqzrVYLA9rtKrBsh7PLMBxu+1SwTp0mTU9PKDwPpD\/ouOT9IAy6Ps43zdPiWBKmV71811C0+1T97POmoVrVKieIU1rddl0Jf8wrkc6HwUnj6gQ7st+ddqjc6l6cdPXI\/eAcOwldmX6aYKr4+WcjBocmrlJTPWilL471pCXbeuScVQTg5lWzH74ejfp2okHY96+eqyO3+8XnGsVaC0Z7Iz6EzOrSwvoHNZ5I6XBi1jf5Ahcu9aT7OdTTbHWxjK9x4r7ke4UDuOg4fUp1MzVeS9TjvygmUV9lPK5lgmrnufoQvSFWn7r+V6E\/aVyxtPPO6BT1I\/Boo+GJWIXJmOVp2FSfGSZUejWGzc5oYtDOFbyoJ2fxSWlLsWg6MSs03aReaAiQ5bOjxwDhnf4Sl0NqgDZjHY3982noLpqGWdIaK15JsysGkxUXj82jurBHiIOdE33dO1DDUQVf6ZHrMYKHnYUGB6JnEw3CpPQx9jQ2vmkHdOoQmB8OP3RnnVxioOeaFuNrUOnhHWhAN\/RnN75WINZd4DTUUewXDZxcotMTLMPUdgHZZHx\/q61\/EIpGaTS54vVfLZpexaH+HOtPy6erYjMRpqkamhOc1q99bKsLAFGExrSHtA+evn5rno0no89X\/JKw1xHLSQWQemOThpTq13m9qfsE62\/Gb67ve+GsM8LGveOfz0ZY7CzZHm6QanP4tPhVbVI3mdy9orZTryt61u7rsqffKezxDqCy5KcaMg0qzbHxsUNuNMdkHUcWrgH9+htwPJPRbMTnkB\/0MbzoGirVM+2QwdmbsU9x\/k4p4copGCfwplaC7CeLLdBehDXJNh18+uNw\/xXP62lYkq9K8N5tXeEYTxenWVNuv++otDNnGX8WlLULe46S54WT4fkVTUBOM\/O4sF7B0Rg1V3R+zmmEasL87gu4C9t7EQdS3ETRxJPsTqy7GB+UUXjRhiPuJrN5h\/nJrVi4eHG6Ea1Xgp6ki86bQBank1iQDFaooHIhGszjG03Pc\/nL+U0VTNxlt6IendM8XqSgpQQbYBpLcgepggVNWu7RNBaxk87LggaoJFE1wfHxZ0HZGJtoqsV5x0ShwsbAfkaNkBc9HurHRdVihjf29FJcovt6oTYsk5xuLOKfMysUNP+DaewHVP0h21xRt2m30KE+ZuPPCzrp23XDXYc\/C8paQaTL45jHBfXObB9gnPmzoOyM1g+GaeLPgrJJQ60Us05EiFn7FJAlzfJbKmSuANGrIuwX9aa99MqDguKJK6ipmryZpgoWNZnlJ6KbzbjmZFYoaD7kxd9cnvizoGzsHmaqxS9niULzGktd+GKtpq+DedUKT4nnptHnqP+8aEiJS6UdTPKymS5a0Kq9GJjmopuC87KoAe3mpGurO6l5XFCvZZcWt03+LOojaSyjO0vcXVMFi5qkBaBuBndheVBQvGNHixs0fxYhraUluHXzZ7os7q+WAlgqhbs6fxa0HLvgm2rxW3+iUFFjidu7bS95q08XLWxVXfuj1rQYIHpVVNvRISXEBM7LggaslME0EIkdnJfFDWhLLVNdJAf2xfyqVvaQaCOSSaSLFlIIV8qRaFNJPuJF5o9QZCjpliBXiRcpaOmVxXHIZ\/izsNeYWCfqOC7tSRUsaPLAbhrIXfizoOxigh7T3oJioUWbLRqXclXW3YpQlYyDfFu0WpZkdn4TDQs9SKv4U6ln+KToit+yaw6hF38WjTIlLrMzTQvSsooXEQlLiyH34s+CskNbFrIy\/iwoO7JlIV\/jz4KyBfI800iRyK+wgUJiENq1g7iQPwsGObMTglSOP7V7bt78kyJwq25Thk8ZJVxTKJd7yHT0y6gvPqeuYQ4uEqIKzPIhTl46So1NyKncZwjiINKlVEk8hbQwcTuBhWKj\/lYiFDBigOJYPijnE\/idinmA00Kso0UuRWuAmPvEcaOLtZ68NTE0Q\/z14lNyBJwHWsA5f6Bs6+7dd1TenScHg9\/UkrjWC5dOFI\/lODq5fYQ+nA4fCf\/jKnthDGxDH1hb5sbm8R04WB3fqTaIouuoZoM3GNN80YsqFfFarQnYmhK1Ju0blVoYT4+aYuQYVJ6VymyamnvF32TJndU708narXUEsAOGIfZ\/asDzB\/eyrWwqnvj0D3Ml+7SnS3NuNLaylQX3jTmCw19FsRoSRgEuD8aYE5SIf4ZnhyMRF6W9i74GdAnFcA3TbOTqmZf1VTzh4+TYxxBQtzRKcATyUAF7oQdjJNq4whLIGQWCo6hDhlgwhDpdcMBYCwXd6RhKS0XCIACIei8y3qDpyXsl+IBVCRuBu9BQ9Na3SuGAJsRgAhYPtqAvml5t8XEQ8qy2Zjo4i81BDI026BJppqaoUKTfOlpvtCcLjy6MWcqykYlswgwnUE35Zdjr4oVTLBKo+JU9p5is5qWzmtYMD8OpqRUxNYE5MhtzvkQ2b6\/Vi0wjH+XMj4E2Ei6QsEMDHmPK9Lymo4XW4mid0HkFcS4w\/VofA3bHt9CYYAcage3C2cxZjgaJ61O0E+I2aslbVjXxoBi7UT2K8sF17VemDhrreakiNzcYsszL2D44L52JfXD2MvYE9iA0WGVgAiwsqlQRy\/I+iauvFBxkfd3Tm8KA+G+YE2c8siiVfhOLu4Rty3nC2qy4F+raPoMTz3qa05d+me6OXAQt5fqmrDNxxWBkckEZ006IRTi7OVTp5iZdRdMBGVETAZVig0kV17r5eJ+5MYLoDcy5Oqfsx5i5Hhny\/EFXXqlzxw0F9aeuX1SxoczvGK2icka1LagVb+yK4AlPAfWr75HJgyXefg5T+NTQINoK6XJJlbQUfGKJlWyZpzFSYDw1g7BxTlt+iMCgx1xihzh10CH\/BEuz0RLactSJ6rsjWpDfcpymBusSEgQgMfsHOvC\/OE\/NEYD25S1VFsVxApWQ7RTwMQCZDfTkMk\/ST3JZ82NHaYYCC9uvvHCRzpZRV7LEEtsOloXVqYwbNAp1Z+\/3YpxDbgMaJNIKBiMDYdEtrVzmzfkt4IBS7mLqhu1ZEmvcdhw17uvGowE2ZICGzks5RLfIZN90ZzAKjTi0zeU1npoZuC9cm64DJz3yFRrKPHgYdwYO\/\/RmDuC4r\/pThpn9yk5sAfxoNL4djcRfwkj0ssQZSuUKqu1LcrflMthuMyY3XtgmLjsNGdxmIxpalRNdI1G6yFgA3dNElLfOCrgouNKo+DSWoE0nmnkdRzO\/8oeFAt6ewd7RaYXWqYmT\/jVwDY+dpRQaYq1DQVbEhalpvB93oAEdzZZ8xGNp4\/6IPas4PkoTyP9JuIZGKhCgifhW6eOswLgsaQHImj2GjVjk5hSgZErpFbK6u2tbQMbUDGyMIDBDsNNssyXEIERrab38LbYNPOycBYo4M7Tm45g\/bYLRM0QwnEwkKAPYy3MoXNpLA1HGLsnzytKWXBCW1HiXIkAtEZDhZ2iY6UrG9YKbpbOYDvqdC4cDL2EQBpT7M39sZDP\/BH6g1F8ObiSKGWza5Fzoeo\/rRbWUnI8vqKS49aYwU\/EpJVdeJtRSgcbKEtPHPSOfCM8Jm3feoWrYytghMUKOh5xkipXF0uWwD83KO3FCQDwPWXQ4J+EHedAa6DzPSCGBHxO7gKaryhxbeLEc0mCM8njskkBpi6srOmPZN1QLBZyG0sdiDniS4XGNW1LOHFoyB1gd4yOEESzsgXswAW\/xjqOm0qp8pLOCB8QUiPYxBndlc+NnGU0lyCOuzIa8aypnMALOmZ22HMvlWr5hvNOd8RxPlp3v5ifL4d4OHCZ6eTl5qOeccJlANFedhEEB41PJYci3ggrvE6ygohGCBkBH58A6+lTVkcHM4mYhCdY7VzAcCZpBD1MIARTEOhMVEfXwvTpOubSjOLNKkq2oF\/5GhjMxcqUJm97amDSIWwB8UZc7RhhDS2r05NKLOK6atiwQ+vE5PRRIOBmOLNYeSg5zSg5TJZ+kL5RxWYrlQN3LxGsd4yPVi\/W6uK09qeyLtEkHiXs9GcEzcNaFt7BrVehdq3CsZGBh2Xc+oeoYR7IX4vQJ7S+6WKRQvmCTNRqb+hOkVFkowDkUGyFqBZiuX4BPoAe53QYdfV7FLyHWlhSqGm0gH1mBGytfbUAsTjLp41O9iwtFM55VjQXs92wMreBcV2RFHrxE9EI1ZjnHZUup3+Xbx6VOz2tCA9WvdxD90ZqAJk9EswfgoWulXIab5yH\/MtTvjc2i2eB5EjaI8\/O925Y\/82oAGqDbzLK0TyEJI\/7UtnElU5PrkOipMI\/J0\/UxP5cQIYIcQxCO+6OrJbP6gv4kB7GTPpq+\/ebeZmjZTZKYeGEIfR4MUuXB4ECkAaIvkvq84FKbjp\/TDtxarAcyLqb0ELbckQrmo2Y7CQeji4z5VpYgyREGAzdG\/dDlJjQwXXno1zVvKxa3Gl+pRZom0SxY3oJqaoHjTJp7EeiY7RUTdeVjK4+m1AaA+3jHrrDbjpl7jJdmNACFP+CR0\/zg1hx+MIP\/gwl37vwcToDKEAkFqkihEsvTKhr3vFggZ00qDf8KIFEMG5vFzU3yiZLVQrEC9lKurwky1oA8MVmjARVDZiu5xqlZ\/VKLl99K2k4X3LhfbaQhv9zshM2egrLW25pQkxWQkDTwVwH8gkvmVtElMzMopfYw3eQFVIdj99Ul1FkeUHx7b\/ErW3JzZODYeOQcRiHWV7M4bKBA2ZKH9EuI3x8Vuw4+KsYWgqs2sRQqXNlAhZcJTTi2sDJBwO9IEcjLo1+uwsNaqfrMl4wyCPyFa7ZHV0a\/8lJmEtp5qPvdM38YqPuujsDbgH\/mno+rlPeyGoIF020QAjaEfV5HAcNmTxq5BRgiz8IZ56eJnBuDr0IQDAgegDhuM0BJzgwyAkZ+4d0fd2DjLcq7uLOUp7FLNELEq99cokxmFkF8MtDGxPh3J2WegYRjuWTng39LiDIkUDE7VcoZhHOJvkY8O8cSQwhX0tCofJALYI1q+aZggll384XUJSJCPUfKtgy4JhtPyukalSakAO669KN1oU4g2YArK+ToKDIvQyuE6BmOmnDwzY1QQ2ibwSXAXnaD6GYT8Cob6Gjs6daTOwrCzATuG0cVE1C8qVBDGTsgiErzEaTCzbLgD+7j\/AGxtR3WUIAsakulHMt1WTCCQi2Gg4F6NvK5EnInci6iN8TlunYIo\/nrLKkXRBrxUv5gH9p2nPUeO\/QOIWLQUnqzoZUmWyk1VjK3CF5Wmpvyt0rZZaYg+izW0YS\/CgGxAlx\/xbWzjUEKkiMO8iQwrN5OyfFLLghNBnR8baIdVBi1PG9rijGafQgIX0KyhZjYcloxZpM\/GK+6dto4pzYZ6a0KB3HdaNwSQ+AGzTLAL1tYbVqwuLSmi4Qz+jlisUSRWMzDVbjDi4iGwT2blRfpyi8S9V7EqjBWIsSVBAKjlsLt3lAvvKPkt1H5wZe39LsHwIFccum5uWm4HLKA96Nr+aVis0x18dgxiod2tQXF4AMuGFB7EI20sdpk7Fc+xuJmSHqJw9lUEiIDe0AqKkne5QO84oWYuPIEdfIFuSdfjjmK7BtsoZd13LEAHBJLnmKU8VVegHa+rHR9vkmbSDk7oyzapXY4ybO50jKooNHuDltapp3AYXeuL7A+AJgCeAzisqOsfgng1kILQziB9nAGTW1wGCiogAAMRAUdQB44wqMONZv8QPMYBL4ouVrSZjqq0668kBhSsi8QC+yFdJLcIwhDxRfGst\/iNR4Drx+pz1yroebNDRs9xco8IirzCy+8zXobU0fYAXXYIoRHNunl\/KVHLImMd31DPloSJDQfXIajijiXJF5JCOR5YG0LluFvHYDkFjzqfUoxtmdIk2FQwB4PZwhjPNE4uXk8NF9JgMHTAks79a9pzAJhwtmz6RfIH\/JCNyciYbxklJIOQ6dzcoO6nISMI8ganc1OdHgNvA6GIi8e1YHXqDWQjSJnprB8eacmFjv1Vk5TBfqhGOCRH4Uj+927yMThGgltJn7Hf4GvBVjcQTLYmAl3j+8TyPT5CYzjhwKpN0SrMYxd8yA4Sjwq33YUGwEZ0DLAtb7BiSo07HkrKy3SDRUMZava9l41qh2JtuSclUmVjb5DS4ICewGOOcrd3IDj08Q6uiMnfe89QzHS+p7nA\/jqwrCmz2xEUP2ES1I9WFINZF6LHX5TaLcmOqAu+ae6SbGxVbwdGkcBqQw\/aBrUh\/QKVV7iyEJF+ftC\/r7iD\/mDayBtJNxBzXoGdoq46tBoJjKBDbNUD5q3tWiUmIhtolFqIcQ\/4oZT54GjH2LYg3MmbUDU5hYSKUSPSu2V4zsotNLB5y0EMr1ylTlrgqg8Q4PpB0howEZvE\/oashWKfKxCoA1iotS6y7lWdeXybHKVFAzyPj8LdTkJigpLNQp3kPsLZoP48MdjyMp3GDcmStqkqr1FnBhm+EE90WOpBbOFOqEfxM\/RV6Ol2FtQPFzznA7ATisWHTZznRDh6GJM+CEHd8jnyOzzmBpEKl2hNTq+UyE4NO\/DuGUA6vEdbXBXVZZ4JEnpwohVhZadwo3+qNnLK33pd2klkihdW9LX3KX1MWLjIto7KpsIigic98ivMWBiujmggA8UWAVPtCbNmnb0i\/Hn2ghSsxbWd\/WquqRszWqm76XCoU4HoxEjMpqmZxN\/qNQJ1SX5zvCBS3w9gF2WfbkKMTQ1COxOSScW6GCp0vCHJ5rnhULUhOlPAUrautVxsRFS7BYWgdEmPNd3N3vW0IaxDYGs0nU4jMuFuU5F6J7IUxKhHCgOUYViu7zCFB2IwaRE+WFaLnyHfkJzQec90HM8mfXUrZDhBOKynaRK2ApHkLZNMPqyh1j2nyXv11WPZM+ZzBczGS64ULaDriGQkujHUerH7f8kw0+eJB+RZLMMge7e\/YygwglzHoddVOZWRl0KwprTCmK5chntl9K9fx2trf7+6Z6Yyyb8xSCHgCAY0lOUKkmx4+PDn8r3vB8RgA\/3wx\/WVdw9IEwmjb\/qwXzZsuh\/QoKj7t3gMGj9Ee8sQPBomDxCxWgtIIPNoKqjnmRZKyPPTFyDqh7F3TqZxSk7jof2kJVPYXT1k2zTT\/3qSDh6+YmoXP5ka4YowxJ3RLUjJVbkOyjBJx3ANr89baKUHEpBHV3KCc+hXHsV7aI1S+kSGF9eWbnsAaSy5\/AUx5I64CHq4\/tT5ryqyQqJis9VdW\/xWI3CbCYvPa7XhXHLAlP3KrzkQqQcQ9JFXM8QbqOMIpIrLOuFutpktEmGK2KpQI3QMsiP2sjbsnvtBHeivZuFGvqmNvQvum26OkvY2e3QB6lMpJeM6mz3YIiJKOr8kMhVOLUL2kHPndlsPK3eu+fjMB2M+91W6woCiMG95nB2D6FgO+NNNg2MWoFbIs7rdwfPd0Zg4oY882n\/\/Y82zwMu+x0D1VqSjPNBdIuVzgi+4OaQAOkjQhHyuz35eNwjd\/qkJxGpvKfy65n8fS5\/\/5C\/L\/T7l\/JrT\/961av\/9viBt9+rZ2VtWnnVW\/kZr18Xv34jTR7I30P5+5bE\/R3\/vCeFd2n7h2gDZLUpQijcu\/EnMBncomiJCCIZxk3ClSAlLCOVZLbN+Fa\/r8qY17ls80eMDDQAk7V3m9c9L2fiNqvX85rAX11Ua6Weimbo8pnHdyaDKU\/CE9dZcW8EO3wylgh0mVHD\/+oKcO8PwtFJd+Cv+sGqZT1UaqAoPC3vn6lgrZF3hvNaMyqS4yfupRU9MLqsEoGw5mHz48g+bwzD2fO9k8Jp09suG1pj1D7sdYevOzKi\/9jwU+PIkz5JeOnzxqtwtvt4b5+DCaDtVaiVeJXELn\/lIXIflXPwZsyRvOey5i07x0gYo9ACRYrbeXooq\/Xk\/WFRqS2sJvxEi4q8nSAc6ROQl9xCdl735xeREkgOk1MGnQ38wlb2IEzKnzhLvPSvcJmdV+Q17\/TzCu2dz+aWmQsap7N\/B\/IvvHl3w2lPYn2XcdyUN+8\/\/nnDX31CcVYOSY2jP\/lvtTO4d2KvSHiP5qEBdEhzNgAumgvsgLx2Yhsgr1CE\/3klXPTPLBPD\/uISRQUM5ucWMIifW8DifVEJg4lFZTTWFxWZBxCnJzjdJIVfTsJeZl0WaxocxPBYywkKDecJrjpylQA9iRUj5AzBD2o+Y++g7DCvyBFxgI1RcFWg0+LrFI9R+rHfHfaOEOu79RMYv0m32ZFoPtPZedAdkTuU+1zhzNxpqW5keNKf2tZjZSX2FpFTRMJkuL5yFV9wF3nMCUnSJCVbhtFCq\/QjDJpwqeSwDve4nT\/PTrQ4AiOqLUMxKe6ZmWebCUK\/fYW9QetWdP98j2DIeZ4LOCwUg3TJKoVmPtqek2o2wHIW5vQHcGTEl5cfSjiHCeT3XBpgzYF15LOBqIFIzSi9AcpkkNhBHnEdRGTVnQwSU9tpIHliktyaB9rGqCRkdno+3CN6gNAm1wQs8KaN\/R8Hg+QPzoKEGb1ixctVfkCpKL9qbyKkkGsBkILmbJUZ5I1TKGIhuRSTX14uwbLXehiyvkWurEB2q\/QFVIPwugrbqzwwE5OSt7gIk3CPycSYvOcGI7Lfe1AmFGGEJwNxVjVdPra25nW0wsO1jWFyLc0D4\/YvsIEGJZWWUwOXTSnTQMBnNn9rEFqJrQGVhGCMNAh0SawakSUbQkSWTCAZoJSrRAdIH2+fRRgiV0bBkHg+CMzrxAgxSTVwqXzeExsrIxjLQJ8ehBBEGUEeLx9z\/tZCzV+m62B0zUWKO8KLqDBvTcplSXOEOwpCGd9eQhQflqgn+w9NQTgsITam7mjsN9Euk+jHHkjmGIquniAA2QyoEXtLjSbnPSxfc6HX+ONx7+bmBRAAFxFwcy96ZSU1MPICrf5UB5PiEZuIJhWOgIsuUtjEUM8jZFpex4j\/wG8xlJIXaJaXaZWhp1wTaYRCN55SYi7CgMXBL63RaBWKEBzMIgRRWLcAvsmWPLPkiiM4Q29BSH\/HxDqdFa+TeR2jCWfJlTIPDLKdoV4a0840QnFI0rQZUvT8DC5Rsih7WJESJDQuoELnF475m5s9vWTh6l5vsxSX6pzdvXuWWDNAFAs2gEhARdK1aYOrpjeEndIrqIyfJV9DYl3Go8twstq4ktXAUWTSZMkqckGGWJBhtCBDRQDCo+GnNMeEQQm\/9F\/1H41A7fLyEtLUX4Rz+pESXtsDV3T4qSbwUcPE\/DHP5PomYG8KxNXZucUTanAAoLCAXDcyTZyGQNqLEHpIMPGr57wx5VpDdfzpVvBy1B6tzibn6u4IvGbu36qAlbsmhVOJcQjeYPlTeAPZWfTLWwBv0vD8ejwq376MaMBZnAN92w1GvZM98MVQJBy+PFH7WpKoCidK1C0gspmcxVkOB5H33GXezB5Pc6LZtb00zUD4sBgvWjiFErQxaV70DNeYDE50kkeZJtmc6CTGic6hVJoTnXFB8tjQbBgQ17LAELGhIgUuV\/kBNlR+1Q4jnMhhQEkbLe1Qqf\/O6hNQlDOXIz0rA8eOzj55vVwgp2UcKyuiG1zfmMi5cfZdGl3bWF1FOMhedG9jhoTMqYlUXihkG1233a7b5Qm6biPXaTFnjZ5y8H+Sg+d5zw2GZ7\/3oOxIL63DWctAYlhaeIqa1w63M0lipnlguR2s+1yeWo65ha6byU0e56lfpXjqsFmaYC\/+2St1YOdFpukpkVficS16pcbRUHwb\/i7X7f\/ItflvX5rlcUSqcKo0YE8lMqTEq6++T7\/KIGRYzrC8WaKCas2TRcUZVRV9lf6oHUTrixxQVF7+y7Zjw5eqaednaVpmK8ty3V7baMWHCQ1YfB\/QBlxgBAO\/ls1CZcPtIGFfsniUTk9I5fuemC+9z0iI7MiUStfvgmrD2w\/ojXIYVN\/2vPdBtem9DarvejSd02pFVLlt1aFRpL+VAgRMGpbfgUeg0FbLfbE6MMSCAG0yaobTqfiBbcHX+xppDZ\/vwWRLpYKE\/Gpl5R1suGBXWnqr5MMLtbEVSBuSLhGNrK5iuOLQQA2lTz3kfo\/KN28Zg3v3FQ3rwUUNY3Se\/+g1mtijTXn\/dLOkOkIfPrrwmBEWqZyRilNyZ68jO7t8VPnBxMqRyvsvMZWDPBvK4KfQGdGxD1xXVsynvoStW25EweqUHcsPPbriuOEpzqRkoAvSA6QP8wK6UjBqYl+yFnq0LlAt9I2yNOhbRahjYdgXwzxrPfC7\/geKVhUiz55GzbIPswXkPdwgIsDbQv1yLCzFELifpwsL+iYYWgsB2S2FAPTzig+mz5wK5ldhlcuw0evOVEFuFVZ0n4k0y8y93Vces8vNvtWtH7X6MChQWujn2liatidMzJlle0knJPp\/2CjF2VJnW8AGGHYq2WfiKiRg7Ej2LtetEesUD0zxHHZYSEEszmw6XR6djSThnSzQaR8kWbK9sad4IF+d7q65KYWaZWPxA4cFuDVkabaNVls52GWEC8I9oFeHkTIj2ujmvIE8sM6zppdl2C07aZmxNXMMMZ1C1AMNGPoockJWzSA7Qn71H0w1pE0AYFBh+Yk2ERviqRulObKMJ+bguqpmPKtjUTvOGcbweDCRAqOb6y89ACtUp20yjPJzoaWBUYZjjwOxMdbkGNs1u2EnNJWtcYEaMAFlmij9ZKv+xvfO652Gd1XvNrxn9fed2hTBbGkj4kwZy3uNXeSf92cIcBqLOo1NA+tNyfcsT2k7KsKIJjxaYXGZfFtlxn6kXlguLW+pm1rysp14kHtStpu4WsSKgslSfXeQ7R69yAkk3ldJpBZ\/AZi3w6WRQTodW+8XXkcT2jf1F21g\/Atpwq74G2OjSOs4dQWF2azxX0M4GpR\/00EzyMcv9jWMYRXtcxCIF1k5PWrPxDDZ5MyW6rukni+S4NY\/Vddbw+ADAPxuOOsicrVmySBRcGshyDgsyT4gMgucexzX+oYH5HMgxTTfvjcQ0mGzehspDo6byvObm4DZV5n1YBkX9R5CUQXi3rQ8ubmZqF\/4iUV131tnt2+YSXzf1QMP08gbdWIJda8vEO9GR1gxwUPAwB11YAwWBwbcGOysYxg8f5jEaUGnXiSI61XaGxT2bgSrV9FTINxr3\/npSPTyNsS34D+zcj6vByuI9JQE+kCmofdBGGA+eho7dAo\/7PsXmFAcAAtVyYLB7JGcXcAXgzcKJRIYg9iiC5EUJta3EJvxQua4fahIvgzr9Wi4clW+7rhwe8EIq2qv0wFGvghx+Iqe0bihLkL0EcKDDk65tzAoVPRFdB2CePO9RB2CcbBCxA+soZGmq8aHeE+jziv4RKgjehlpjJfbOjD8tYXg3KHTOEpLOeH7pGIHQQLaLyl76+Ej3KauVlqrw9XZBsTG7GmsBzHOuWZE0Bg+qkfVH9VRX4hdXT\/xDumg1DMR+WBRAhl8CFNcJh1EJKiMCEeHKfPpF9EmJi9Z35WM6NmzFiykj5JZN3gQxSgHHqgd0WZGIXBMJOpcvAaSVIW+Is166RDlhNCIUBTe3n0nOBVhuQe9AkNSlUm3OQMYYHtrn+CqlDE55MI9pyNGnqXBhY4zxMK64bt3Mx4yNidTn6TXx97rPFxqhCQ6DAAOhLZDHsvXoKIvXPaonU0kX8RpJO4KhkKq2CZwqndbFa7Pzzw1QZCdY1MWyzk15bxEEX18Jo9CvnmhsywcWkxyRwbHx4nKRSq3H0zPZX\/AYTk\/7ZEGpiuf5ZrThkB4AsekhgXJ7W2MaObgZRWMHpYW9icxAUdiQWmestghsIxTIFHWW08QWLCWigQDDeTwjiGzNsSn6fm0dHSBcK95u5+oxST9yrgf1rKykxiHMkXpoX+gGEMRKwwE39VgNpdBuGwxEOrcgritxvewB8D54IFFigkBywTBnvCErGRrw8dXVZG2aAgSQA+KDE5cD7X5CPUMWPCZOwwOWGo4hQtGLfF059Hl+Sz0AkW+SwnyCXPKKNcDMUzue33eNb1BX7x6eOurDRD+mtIK6KIgJcEvXEPMr\/LKfcUDD\/vRTXokUoTlPrOvxe6OttajRCuUrFhWXrTBnS42qKYnKjISynPUNvATsndBvYyLriW2So8s3UoClMRZE4UBalRMI7l7Dmusy2Rr48LBeHaFMHMMPCcR001pqulmcBxpQExJqRPkO6vnE5HGwVUeLmj1HgQNdJvRwoNhvyyX\/DH0av36auyeP5F7PoPRHn1SVBEpwqESzTVhp1OC4jTXNupngIQR2VC63Qcfhi6sFEeJlHBaR4OxwLKChTF6k0CbmKM+6kkl4VkbAoVJEYwoEgXiYQPc2CAaPGLTpb8zPYBtimFXMkdhl0wKBqqg6RKYJv4lFmBTCnGMt6YTwizXWxMRcxZ304y5zdEN02DouyEDATIWGY61JWl8Sdww+YjH4VJwLq8HXfj\/MrqX2wqdOd3fsSHhYGQyI7blIOvO4WHk00lz8fYmorLqgnQ3bPZH01CpXgfVRgjIKq\/CJfzTQHRNqOcnftA9n8L18j68JY+Ph9Gr6tLD8Wc4ScI+1b7A9\/aEh3l16V8PHjwwzyn5XkV4uzacI5uYAGMvqDewcwy1xyP6eBD10cIuWuVRH++6OeqP0DNsaEBz7DO0CE\/ypR8\/\/mieGaF\/dcloA8ybL1DNBOFnNAvPSjtAxNdfWl3HhMyTiRqS8yRrlJfUI0SPSLCPh4vD2Hhvwpd7KAMUAmBdc5Ke4fJpYvthcXkvNo5Ts0hS650j1TyCd2Q6rsyYyNLx9ORWcCKK2E0lT8VcG0mOSu2+RN+79eCho0g5PM4SXZR+\/BfxEsT2\/8PELpYe8a82+MK31fYYOBDAV4lKLYkonJD3JB7kq5ISBTWXMkB02O5QmbLW3pIhgbQTdCsSVJ\/TTIQ+oGC0Drpw8v4XTQ\/gXTv6TJtatnWC7yItzn4FX+dZqSq+jKuiZSlTJaTk3obGuYlhGhB40+OITpEX3dH5VA\/5ELdmLKKozNTR8QrqJePpWQJe8BQ7Z7Lq4AYJ15FD9ASnRQNJ5u4xH4QKWqBJZDW8ldwVsWcIWnarZ6ynMmX6b2OaicBaQDbrD7u5jgibiSkkW+RcQFfH\/YjX10JhuePH7tmx9eo4h+NsdCj+krgu6ck60L2nbSAhAs5pjJLhTEhKdowaZLWD3GEMCocxD+bwSzSAGNzClsb+6mgLp9gjo+Do3daGGfCqP6eY2xxxWsqcN3Ijes49prC5uKxsIrmlEg90kIRtoUKlIa6DiAAyoOvptdIvChg9EQyDv4O3Kq7pXtKhl69i7rx8EHPm5QO\/Ub3seS2\/OvRi\/sMAHwKhwIaQEIGb7AArAEmM\/l2u9RwP2IF4wHbq540c32DK2TEPzOIS5noghcJVorDd5XfvunRsoqmgVm\/lbXMvvmUYfHSd9E\/Fram1wN230vQPxL7x6\/3fVhGUcxKCiEvsY2y3vNL\/glc\/fOqQP26E4amyoqu1BAHEbNQPUo3CcTHm2yk2\/S47EHubjS4MBO70A6imx66HEzd3oBRbKd7RgnrVGM1mowFe4ARdW5MYDeZVP2wxz5o8hN2y5rkQYBgJVPK4rXZ8LqZkFp+Fl9+Vw9LtxQYAmQIkPXN4K5z5uhCRauZTmOSvNkKGlsCVtYsk6KtwwsfLiEeCW6XLzEByoE5+UAlz8qtYselzv3xLHtZhaS\/lNiXhVHbhJm6ff5bnmhpBHVnZTWc2ca48XQn857R7JayyiuMcxYmWVES2zBd9\/5BQQnOzfRktAIJ2oLBONBOFc7CtbplbDXpWzc5LnWOrYqNH0cpwSRPPfQgC1qGbNvcaG+0gPWQ3uJdNvqLjIWCGiFuJ\/F\/AEYbSjLQa0J5HYNsm2Fw\/dgtG7ctNXJO43UF9DYGqd\/reNhiznX4UprryLC\/MKt\/exss+jccowmZYkvtw3JWuXEtUw235eSx0uttNN0iUjmW3cia3q1cKheXe6YTn1rM9hFwsmq\/BIh2AHDFFAYHdvrcjrOluTpc2NCkurbqpdCDunKNRou1Af3HVDRBXJXJnXiVfCud53V4ywk5Oa4FpjbXRnNMAcv05vKjyrMIVQgLxuG+2DcVULxNhgEyUHkntJ9p6um7hTpxQ8mgVfuK5aPONtr6VfgcTQZ3+Ls4ONJkdQlJGqfXRSUcZ3p4Z+e6vrXnXOiVem0ntYtgAEx0NAw8bV4UpL3vX3QCBZvHMD0ywfR3HHpkEgCqkhVUf\/MF0qr4m4ls8notZYmw3F7keG+R6nIdcxqRm3to3HExShn6FyPR1qKkadJowqQ3T6BR\/k0AnBBFJB30KInQydkBLpOMgnriexNnG7OffUipZ5ysKx7ETWXWKCudhLgMDxwqC58XFP4bJGtorK4KvOL6xAlwW7wCc7ZqLuxB5Qr8yOB9U11w0faLRVGOcRj2cEyYDwtGn6HCCcVZ0IvN4xhjSoWLNocJjCwGRmHmP0TTnnq6byLjDZAFO5tPoHJ1XWfWgj2Rnfk\/teRptPT1JE\/EY0c711tMhgWwqCW2\/oyK9mTzyOuvNqYqhp8MumwhsejObJnyrAtoLcSnjbsHtDK7IJpGFqnXbrz91djdixM85QAsCmatZscgfMRrhTtl3UzmyKGa953\/WqYVTtYgWiQrdOAEyYdKzo0JIGzrgdZenoUZf0Ez2HaPG7lRMjkmAI96d8zY5NAl7mNuiWUS2GeM73EIyqquMHsHMJeHwJaMYCDhfXaYzatp02NCK6\/2uMUASA0xyx93l63G6QabJYVKYJK+hKq2sGFQljmdZuZlNjqRXVb7+s20Cm8U+TDmTXeW0KOXWgMJ\/J+mWk7CErFcs45AFrN4HeOukpopP8kMGxqFPFctSLTwUt3lrmtiIkso1Y4WT+zW14GcZC47wrfPyOvQr57Gx2XQlMdB1GIIsGW9zrSbKnvPypgRTFz4iM9eHyjjJe5aJSK6ib6o7ZXYsusz8HtBqM3WlRCHQkTuXWn6XKh4hPYvMRLLCSeD2\/\/SAzViXnrlHXZRViHsDePmx7WTgCZxEyCajFbMUPS49g5mVpOV5FifYQS7qNXKRl68lZCcifusuYr9UuP74aRCzXpbYZ5O2MGk2t\/fKSnQn1e0wOWXRmSEZANNHRrzIH3owuWdFvLhbTNfMPDRMeUS\/1u3nQ1JyCmecB4nZqpaSJ8E3QY7xnxOHxTe1A5PXjFMlXubKQMA9Ob6pt0s96sTpFC\/0xXTnniupUipnYO4Z81Y8IVXKNHVNj1cfobpOdOaebt80q4nMisuaPkE4DqWgQmgeinG3ZDAORWrwHFE7WQbdgkQmVtacKIlDKB52VDf10QQeTR0j8XJ7Gnj5BxNyx+jFyjpZdF7jwtOFwRjTB228xIEqETuy4yX0YR0\/peJFzvVA4\/Q\/XuZCypjXS89TZvzChYCCqrzZuSRX4ttt+QhmF1beqlXbx9d9nZUBI9BLWW8vRLk1R4\/sSerbD7CGy+L5X9L1Rd+BGCpUfX0BwQosbzJz5puW7979Q1\/ywc0\/jx8Or\/IA1hZsu4inrDVD9WumxSQT8iaWuIJPZqkn3+nM+FZqz226GL3\/Xxqd393fpdHxct+fGCdIcbyI8O3Eg\/+R1PTvcWwxVssyUHpnx+NkJAC7MCdGyMZ5JYk1q8wc9bWIncXsICN+\/Qe65kbGm\/pZsrRzgDZ1YsQfmPPKXGTNJZzm3iato6RpilVpM8J8srimzWTXnHdxcBRIAFw9we7+HvRbUJLiEqmVwRInnUqDuay5n\/taL8X3P1cLD1SDB5rbMW+WcBjEcwrgVIX\/LhdUxUNWphzWoZ52EAEc6pufxKxPrLmRDFYn\/LKMECwkcZrp1I9o0XTPmBkW3yDWl6VV+aGTKJzXWJjdGGzhMi3WkQNF5Ab8C9HiS59oiKEPMWxJGieHM63F8IVshI+DmSlzJFkb3rdJ3ahBL2zcXP0ovZRMQeP48RvRQjPXjIAtNtwHDWgQoBeuhJEFCsSxNqECUvQh+4QoQpI2Es+fsA0rXoYxjVqmDyrNBAiLTbwfxcXHqt4ayafDaL2wYk4lL1+UzaJ9D9isFj4smxU4bFZo2KxWIZuldjD4LFg86nXeT6ID0kKlWTMtUGKY45hQ1pec9PKkG8mim2CtXnzVvTtGh2O3Ads+slXJvEAt3CtAhvRUUd68Woo5I1X+IXkMOzOjvtdKAWHGZQqmBKbdin9zY75pEYs6MHQWVC29ruok2BrweliqfWCEW9H9AUWwnRM2zfdpRajZfsbJS51WDEzfh6o2Y\/lt3CJt4SXSdLUtYdP5zRDfSTpHDgppbFRE+O+Q7\/84Ix4\/4L5pBJJt85vkN9\/U3dcIeb7j9cG5pH1TO0hElnGZi5e5gHmtRgv3DhfrT7KtSTCCdKfNMi0Z6\/YNfiRG8UYUqH1F8pHk6Av3ZfKGmBrXTI0rdRbGS41Nqb6bW8+IztNb\/O+x0P\/nXue4\/P9jL3T\/I69z5u3SS9emTGu8+PEFqL05BE9YFj3YF9k0ttaeFWOBp7WpvAJhQqFV4IfSM8ezdQbgr2B2IcUgCQvQBO0OmEZnUym8EH8GyoSWlAALB\/9vcQPU2lTxZZTdIe\/B\/3kv+15vs1edNsrVljPAV5EJ3YDEQ75tU918714zgDOuMuqT3Bz9bmM2ad4z+TpW4WA2G4VD2FNCghtO79GlHwniT61pyhnUYLevXOuTK8fwar75CWDSHdONiMYd06shg+rg6xQnL+RyrrlnFP5hun311m\/TvpOBAVU0qqO1TzHjECL+8TA2sFjXaYwZgHvWyXNhfpNp6GgsWAZNSS+IchlJcjbtiON2scAen2EZ\/EJzaJgMzLdxxZ0i4SpgshrltW1uBTTKocVJwkAKdsAAu9GbSR5RJrB\/tfNs\/2Dp9dbB41dvl17tv116sv\/u1W5Kz5Yoz4LS98vHe6hogywUFLftJtdsFrPisxmBnKwvsOEWPDnRSyavzY+bG\/p31a\/1AjJbnlhYePBJo4GBW1Z7BQxgiYtysw5SDw+hJpyuInq8Z42h+GoObng23z8Kb7PQ0pYqtITwXEBj3nlAdcPZCeeIQoMurJtgipkeDilYDCBxs0bp8UoLUrZxEY\/yN8YxR+9VOJfqRbj0ES4JgSZVZ0tbwybcAmKpF6O0+lotq71XdqThYHmZiCjtzuD37VLE\/YjgqLu4UKDbfXcedOdOzcTH9GIU+bU1L9VXirXb124rC1uxxGplnq6+AZyxkbGDeOMeC\/uNU0oc\/DIDIcEwQv0G6ZrCCawE6yuuGPH0wMSaitIjeYf9+gGYQBCpETxqV9c37C\/AA75b+5TRbYFDo\/Dg7l28hc56stUWEcAq3DvdJ06VnUl3n8bThYWefFaFZHRv+7F0VO8IZ8MW+LQpQPzic5D+gVK9E7sR+Qs2OsgpiGK\/P\/7lJ\/mJ\/H\/BCKdoeWX98S\/lMnwL3vZr8FLqMwmVuK4Y8Dq9vY\/sqhl7Y3hOt36xZU6aWBiamJ2N7M\/GJjvC5ydsIhoPwqVSMT2RmdgHWT1F12H0xmR4kGTh767jSQmn7xxTaTFPBbdIN9cQHtCwIlcBOuEezrs6hEZMWQ6J0sQ6Y\/CZiKQaJh8yDldtFYqDHrHJHDO2j1Y4Azo1hdHoLgLRWRvSpveyoUMZMesYWnS9Pj7EvT5Axe\/Djc1NePinzH4+oO\/efUyZlx+cY18idbe2wW3UiRkAmgWMkSpaP+o9ZThIk6HnQzrOiLAiwISNGe9rSAihq7NNIIjeODdc1Fg78I7zTjLkaZZwAuKlph\/ugGSZMw638zFeix+PsAJz2yPqSJNdeq3wXQXIRqSOWtSib3GLBDY+UN4g9rkmOsd37j9UL6xsThktS3QV2CxrE306apsfCJVI3mWPamc5m9RpqVM\/74QlGOSrVTk6+uXnNe\/nXxCD4wgD8NDXJwQz6NWfRYXK8L\/CxlaOVcfDKNiVWhAT4kqHcJhdjhD6T7Y4KL55Ohr2r\/aHIRXf5hEgx5iA1YEOUgExJr2b4J6UGnwLkUzkgcE32pU3SVDInAFhnnBl2Hg8Bk936AM9JNCOLq87zYy2lYF11Vi5ZGcSvUcGS08vLrqVA0ckxb53ghbJM4Q0cp1JkfzbRubghpDk9FHoGKahZi1KtgurPbS1VHQ1RgwGg84mNp46i4qjzSRPm6imIU+o4QgpCIbL2LBOTNAyB1Zql+wUJQIBPnUNHrySQcqMfOOJOwBKJW9u3DEhog6ODF24ZhADCR+TiBHhgUUNgyvIRqebUykeDZGPpJ1tGwWBEQeQIfodCgMnnuO+w9acEC\/yW0J3kOX4gfmPqcKaDCRoDDz2EuX\/SDcRR1QVn0EwtaVivoDBcmO+tBLZXJ\/zrEXpYSy8SwD3A8UvJ\/eKGlIMRmDNZQjRbvDsnsM7BdosRI8Ga7aPu7lfq0KRKU68jcKiuj1sFGdQi0wlNXAPYQZxAOKTkRXVKPP3s4eTseVBPxIF9uHJkQ6TgGBGRe1goS7QFzCYHxFdoT8YDmL6ZYCLaHyCzQdZCdiLK\/r5V7+umTsECgkR\/uga3v8I4xjAWr4fVO8jQOoP\/TpjIsX+Xdf\/3tf\/PtD\/\/qz\/faj\/BRX3B\/Ujvnjo\/eL96v3m\/Q464q2j8gN4ZXrrv3rrv3v3H3j3f\/UerHsPHno\/P\/AernsPf\/d+QekHHgKTrrMcXq7\/giq\/P\/Tuo+z9h7998hpommNQzf\/KplGCL70HeIYmHnq\/o4P7ePE7uniIPn7DsFDq1184DhRcf\/gAFdZQ+MHar6i0hgq\/rP\/80PuNVdbv3\/8NBX9htfs\/P\/z1V0gm0akLBjN9M+1fZJ6cKeeqZqsmjP\/uy39o98EnL+DofxEI\/Ia2fpMJ4PcaGkHZn1mUJdH+On5gpPCGNyxPOIgYPr2AvfBqiodGHQfF1ivc7iDH2Nv6ePJ+6+W7xxA5pPBqAIWaLshdF2zQQhuJ5XFAP+JXZBtnPA7DNrfQcBuHr9fhHwRKR84NROXCr13k36\/sNvCQ2bwRLBZpXiwRUQFkkXKXAqLRxIlUMPCQgESzz4ON4ebqenXwaEiPdqAeG2Q\/2ePWtewjNDRAhaMWmPJaiw7FcMYEU4aRwF17F6KljY36uuHVoR+x0GyBD9L37jZiENY7A8isosFvrlW1Ai7Si5waiyqrnAPTjQ1mFHW\/RcwvuCzFntJZJK62fwn2F\/r6JYaQWVKskrm8AISwll+vidsjwihV\/NVVstiPHtUReRi\/YdyO3128PjVRW8S\/Eb9xXehi53EYUhSp1qkclmDFZv4N5\/agbiqS2BiFNzAjxA9o3khTK0iz3P20wVGwxZX6b9o3isNDFP2NRhkBbWRgCAbF+qv4MKKYqJNTQMH0ohqwWmNRFze5OB46FXBFDUSr1ItWaX3tp\/bAiHLVMvBYMnI\/dSF\/1x3OftuaTPwrq7PUvio6Xo5\/24OLvb0xXzKXTezWbCxFVPkNVVl60vdw9WJFCyOcYBWJ\/p3C3KBaDqAeaCg0BQpUlevXVJrr2TRu9aNoAFCBOBMHstvO+2COf6Xn\/2\/88zv+3HqDAfq4\/9uvj+qDQW0wQEfrPz\/gj83+4Og3sgcQwwwG5er9hw\/N49\/dx7\/+bh7\/6jyOV1YM+aAO2tTHL+eCxsuzXrkx99fZAEBwyRYiGWiatQZNfIpuZYQNEumzpluIMhBu0L0XunyQqkf8Cn2+xBHCvA1gILSuwRurXStfW8cmCJp0RA3Bz1a5Jm+HA0CfqiXLCYFba0cMcwiil9jKjPK91J1CADiZnI+1Cz6WFGosUh2D2ORQ7z\/85REaUwhHD3W5C6kXoDemn\/ZqHUcWpuAPkBMCfOQPfX6ubSCCWqm5Uue2hQcciK+M\/SFZzcbgqPMJT5ryubbBa39bFQUtZAGFMKttmXYH4OkA9TpEPT0eiKiP2isdBA28dS\/ZE66hlZ4468i2HyJIGE7XwPxYx0ry68\/llZ+xoPbMYG+h9NaS9w\/KHiHLSAVt0G1wTPyQg4JfdEAozkXyHgGz6M8fQx3oF1RUDgafTmEOYgMmMWcX0zCYs4uIFRvsvQc+tzZ4xK\/QpBBzeMChKwqQ9KQRIdoD342\/Z\/XmSoBYgmu1ycYZEAb53xU6teoDnftIlgS7QN6GmAtTFrnYFDhBZjcMl12MTTjTkFGJ2DQ02LROhAk2h\/UHK4Tn\/XJ1\/Vd5giGoRwAxJIp4\/pt5vr4uL37VL\/gE3xTbj1sdZAwr4ISHSp4th8KwVp5sNDdLnaMZ14gfskb8otZogiVFU21VgB96EZ0Cq5AJecPV1dsmFxJaHwBGFjSMLaj2eB0Dzhf4fyu9qGHmoo6dRb3YYHzNizoELVuP+HULX7Go8Z60q\/Y5ernC\/88W7enc6elq4xzNX9XPEfDyEb8+w1fNMIGapQjOuL6l3wmGbGmC0zwafzoKc+nNxQbGvwCGjIEhoWBI+M30BtlKMilOGFEcO5tO\/ZnMZqZm80zPJsCGxcrnzeZqo95ZZDagE7WZzGZmZoNw9HpooHB2aDiBo6EZCtdxKJyiOVkUztEgRgJwXKllgWOS2IiVee+WzJDZOqwf9am26EhwL6foVLhEUzRDbuO71HgWnajnpMTI1qGSSejLepMxneEORvs6Jm2uKkgvBQi\/1AyXzoc9pAEbQrsBW8GBzsMurK7mOK7VJfhEBRg9ASdjMz\/jetjsTxH3vN1tTk+kHFUl+jH6R8BJxL1BDvrw0ldxO3V9VR3Z\/LuIUjM76SMikR9ArsNYTUpCIhLuzPdaifRq\/9XjqASi2hS2EHsfb6EF7RWA3MsfRXaJnFZyR5JdInM2LpB1p6kZxcqoJqMywA\/TW2Fb2aWSrTGkFoVuJ41wdhmGQ7yk4GmKWiggcYJMPH4EQeKsUb+B5FfAAQSMgmouZEF\/eHWibSCBGTQ7RUl2Jk75J1Nko2QXUCDqOicUzQKbILLCwDsIsdT24bLv\/B6O1BOjwD8ZhqN4AfkNT+tdPYdtNQWJjlv9FWLlnHe73QkijM0pgYACRSWeNOY08aRhWvjgYzd85J8\/+ecv\/jnkn7f8845\/3vOPWQqkBuw2d5TKSlMCtVYNf9ptKrnh68loDK13N5zGixwP1eI+pyy13xfFcrzEYKpHub\/\/elpdf\/yzN2giH6Esun6z14SIF+8Aev\/LaNhpnMwghEJapOkYatQQlR54LlIBI\/pYWaEOUtLgUqyQeYlEghoFiE8xmvMboDWFkLOPIGWkYCcNkDlgU\/UXwtn\/THnYSawAWtBlTlScR2oT5pXUUSLv\/xYVbXTb+U0+nFdON\/gz5FnxLcmV5P0s9hSE8\/JEhZxEbNkZFmbNw2oOLyf++CSU8FiEpH0EgDVoFh0ShPapTnqEVdG7MyqGbI2f1ZJRlIhKx0O3GqI0YRViXSCpmH91IoomNELdUawv9ZrABA64JZrjwckAWpgutiienDSuACEk5MFL3AS0imYr+Fy9Hkwhz4xkmdWHMZi8j04RhsYwNV+Nht9QmSm81C4AYhriQVqChch8R0KSeBcnS7kvdc0+t28Pf26Vcd9\/+5MVqWj+92zNOA3\/rz5Zj4f\/e7YWna3\/R56sv93HMBc6WTk2BCP9vmcrG\/2ffbb+tztZiXh\/42xNomCyOgQH\/8HzVUnDX2nh+nPt5bSvf+9Zm+Ad\/WRbf27pzy\/686pZB\/lQZZ\/qZ0\/052P9uas\/X+jPP0yv+vNZkzILfnvZrMNaSX3\/jO\/q2+s6YKm\/6ioXdoBvUBnh+nAxt+ks5WaulAhP6tyXagZsRX29rHNbacUUnhpvpid18se6NBngdGk81cqRy2Yde0l9f0yzefnWogbOaL++FqUgTNJKsq\/FphrEMZV8VklsNYShyi1CA7D8+tJ+FrdlW856SaVXVh1prU\/fP63qYbwi\/Jbnveh5j8\/x2\/Y+l6mLDWduaT2++a3WIMOCc2ket2h7zS+CrgrqY+HzeiB\/Vti+ilCXX9cdewZvmGw7o0jUelb93PazRp4qkNN2NPIi7ti2XlSIeU+K2ijoJTaD\/CK5PWTMInsFjoeJPrJXobCVgn6y55G1FgX13XWOMxCWq0+udk6xaM3z2sntK7obFPYVFcvpy2knDrd5M5tX0IVh4ezm3X2ysCJ\/jnNb0xDNvUk54MwtI7DMb0GodIwfsY2Cn0i+SpSWq5QtDz4k\/VKdcQ4vZIuDfUm8SbbuFAbPk3wlpXOuSLYeOJ38QkUtqJucbQec07yi9HgpbA+3NtseOLJ5RYtGJ3dE2xjYvDkli9tyBwbWcU5JaetDdN6DEZTf8vxj9ByMovyW539Gz8FIym95\/lf0HIym\/Jbnh9FzMKLyW56\/jZ6DUZXf8vxd9ByMrPyW5++j52B05beChXtbtUXAySZfqdLZN1lbD1wvRM+5xfQeyLrz2iZey2bILCLVXRJh78W2NjjrvCJSO\/\/2HA2ATRSUi9rJv2jbxsDfzy8sLWZdy6OlpI9HVgG1Kotc3G1b21zahWos1LgOkxDR+8sF2jfZVN0OCuQDduwwxFuo\/AIN23HrUQvGL1IjhYVpaUO0NWnYN6dsjXpj5g3VV3lWZhfRE+zE2HXKNt9OvuEZl18Nop94u+7InCuZ035OiXg\/ec3wJHAnp2QNifmph7lT7OZPMadmbJa6zLyJdudPdE5Lehnz5TW2L9yxC8u5mv+LSPOvXe\/AJ4iIGL6yWttv\/aczo1HDSjzvTcGN+e7duTdy5CMsbgHuQUUFkBqrSDkS2Upc\/qMwKGbl795d4NqAmRSXELmwu6yf\/+1Tinjp\/Ck5\/HbOlKISakp2Qlf\/6ITmXUnUlOZeXDCpeWVSK\/XlPzCx5FrNvR3lTiy5XjPXAvogFgnICRYFy+1vnawE2ct+Q176ZNDUVy7LWw3IGZLcFBYAvSl8T1KTw3RuFlasqjD9\/mfDv8LsPY97jYWn20IEDTcayDesPodlWEPJuzZAjjV9P0m+YNbkrOePkOI6cQACGzIKRhMFPOIVkHY8eYZGO7uFsPnfsgEcU7bNo0\/IeZinLuDE8t4ZV4f8EjR4d1Zle+FVESbB3SzuYY4Oc15VUY82hzn1cl9VEaci+00E6vAbQb0YtiXVXwrVkk\/NwZ58DoikHiGGEVOYrLsLEMDp8t8wh0gRl5hG9CI1k+iVOxnnadZ8ENLz3zGfhTWNiekuXC8FjYVrusD6CoUogBg7beIhtJTfDGmL9VCybk3wV0xnv2F8yXwjXCTl0uel+WaCbGE1VSxJm3kaT+AkiVCEOccU2PATZRAsF3XkWMSTTaz2FMRxJvE3MwqUq2v8V\/lZbg1EWbcNn7\/jO3s7kkvw7QGy6Xo7cNfZ24Fe9+0BCnu7sZ9S9zGcd7wnTBCFak\/15zP9+Vx\/\/qE\/XwyY2\/0l\/zrRm8iyaKg+HkTk5ZXz\/MnADW4S8Th7tVMV5qmhkmLxquLD7SMf9w+hygSw49nrInjCqzDvTbaYhgie80rSi2e+gS9a9gukNs98Hp2GiLyJiI85HTKaVf7Uc867xs0Nssfnnnb57\/QOgEtFfhk6WtQuVQStD2GJOwh+DVhA8bm83tr9WFU2Z9BUZugD9e0KSAMTDuVYHGMUqqvwDuHv2YjIDflHrB7eJmpFL93eUPDW44V54eH8w4OBvYIKicHL5N27H8PSZQuP3CqIn7DCtx4MDRDrRJfnTS2\/PN\/Gy\/MilF+eb+Pleb\/IL8+3qjyd24pw8bNCiQ5jDmRiZZNcWDMbr6BEoPgu\/62hzfklaJ6xnEcEim4F8UHwGuA+UcdWshQkC\/FHm8vx31U44jxHEO45QLtSQDv9GqDF1EAkSLkvs4GWsnj5JqglRkGwJVVXArdEOQFc7BkhFx\/S8RDA24P31hzgfVHA630b8EQnlg8+eT0PgMp+8e+DUI8lDkSj0UuAUZdNAFKexkGpBgdQ7s8H5ZYCZf8bQcktUfByLhjzdi84uK8Co9nAsUcZILRbOPYsAT61iV8ReNsKPO9aOI3BjgCY+aA8b4Ez+mpOpAcmnWwHjHUAJliYcRr8wb\/V9QX6vfimfvu6XxgPoV+Yt7Ff\/uBf9DtUM5+2au\/ky6CVx3R8YfgG6GZZagsRw+awLnAfe8sYZIvumggVMk2i1LrnGFjJ8mfXEizIerW5DGzINI9HIK\/nTaDqbHSOawfD+nmwmvM+IsuqDkb0kZ6nUgZ+n5g\/bgz5RQYjBJbLL1QIREbV\/Gqys5DFVgTPRUzGLIAXaNdCfG5Z4OBijgjI0grPTEb9YONAQ+ipEW63CHIHiKMRB57DPuNqRqv4KjCgwF6D8a4g3pwhbCtjzBcV5Wqo0H\/zy5rOCwthE+qudbST111G28Bj041+\/kY9n08+iHaIZN4dSiA8zQFKzspvoCpz1M2K5MzTSfNImVOGqDSnyCa5yjll3LvYG97F5g2tXMMlmXeeGu7HZNlruB+TFa\/hfkwWu4b7MVnnQhwctb9l+2bZKRrZw3vs2fz3JOr5b1W0x6Lxjv\/OeGP2cBnjzXjvjDfj7fzxnqXHuxBDYTUZuTAuKsFRF72fP+7JN8E52\/Iwc9Q5sC56P3\/U0++GzXyZj8tiS5mDyTFfrGLJyXD23bA5Nd7U2zxMXny8538PJ3Lgm\/8+H4sXH\/PFd8TjjDFnQjn\/7aJ40Tj9llHPdaBTg59bjHOY74zHzOtzSy1w6B8wdF\/mjIpOd+r2cnmT8Wd1us8pJKf7nDI83XPMH3FXmVPZPdOveKbntLQIb3Q8fPtPAArvJtxbCwHMFF4EcKZsAQCVoex8MJqmXHB+KQCnMcCdD9R3\/xhIsfUXBykKLwxSlH0EFqJo8rDKXRCoaMwF6lYxUMXadz5Q3\/8jQG01FkdTVXYhkKqiBUgqBtMLgFM15EJzuwCa2gx7PjA\/pIFp+ce\/Cc6FUVSVXRScgqAFE18MO1VDLjh3CsG5IG7mCiuKYPkVnuYKoF9RgRKvr\/Fkp1MBT+ev6OCrilfXav6pSiSI+FRhmdGk5QZevkf\/zR8Y+nM+mP\/8B0gARA3mIFgEbZ3iC2CuU5rI+8Gfi6JODRdLnxFL6f0wH0h\/\/YNAkr1NXPmKCl8BJr3HPy4OpsRmfk4w0RlkPpiQV\/EfAdPiB0pUekEQRYfKn4tBKH14\/EEA0StmPoD8QqKWZ5Cz4LAWPCSi0ouDSCPRXwuDKIFDLwgiOgjNB1Hzm+h+4aCQVEtSVhkisACUklXmgypZg\/A6nAuvZC0cGg7Ydgk2+k\/NB1vwD4NtMeRKVvlKsGk0e\/t1YEvg2mMCjc5l84EW\/oNAW5hmJWqIX9LXVSHM3i0OszQFe0KQ0e9uPsjgC\/JPguwr0WxROpaoQIC9\/yqAJXDsKQFGh8SFFCVUD2gW2NWWPB+qhBHTb7s25Dv8OfqSzPeRqiTztdWSZL4F1PJfujB6bTUj2YNYAHYwS\/wGZMv2xVRAyXXlzHulDHey3gAQOcGQXCAABnm+oYsIkr5pt8WAPhrD0jULJdSLNC6o53IvdN1pk+uuirlzfSm3vrgL7n5vpd5YfdWrvTZfXvUWupa8zhUGF83cxbC042LaUjPTEXJekaTtZrpEwogzI7iTe141EtacGYOCbbKTkM8xi2UeIxKMO83773t\/ffzjy58fPp\/\/9eH3teb9\/oeP93\/vNQa\/z\/56t3axd9r+sv\/23eX+bnO6t7v15dXp1v29L2+QyRLDoLnxvf\/6f\/\/ff\/3r+Pjezw9+uUdrY35Z+4VReX79be3h7w9+u39vLxyAXo1O3sczkkL7jNR6DWh+v30U5coU1nBMr8nvk\/AC4MBNtnI66jJHouSltBB4Qwgozx8JfDaFkanJoGC+IZQhI3uryGh0urh941p3813MwDsHp+D4eIXMcq8R8BjZ52g47DzRQY+aJk8kIq2ZrzZhuxqgLXEwMGnpMaHUiNRoY+OKKjgAwEPJVoFdRG8UlahSVU7+tinOEo8H\/jhmr24yWqjcfeU4tEYNkUo4A2PvOSDTySD8T8Z\/lN\/TBvKmQ1oe3CLtVVRUYBVP8HsYrbhd4V2\/DkPZ4+FhntU+x\/iDXhzYd\/j15zQjYvZmOBhNdU5Yk97wYyP1hqWZzrAwWSyC6\/fYeix5lmMcYg39BXleSnhvG3DkjhmsWyWAAy+Cqz1HGVCD7heJ2KfrZ76DRTV6v+wgiWzAiPDNMFAJjnUGQeSdiD2WeeVOSibiLGw0sPDmRqdHDssMHt+QPK8qY580jEXEA7iemQdikt+SYgTtn\/uSDE0VU5mY\/2RWwpUmZVfbTHoK8O3AwXg4O2CKz3IFJXFOhJshrAnzyig3dzktEbj+HIstOaBhDYVqF\/JzpXL\/p2FHHtLJIlTJwJhCUlCifP1WbzNEXVCIeauKZALcxJd\/F1Vi3kak\/qKIE9nGNH4S5+DbpoNh4CeDoPsmCDoyJvaD4Y+zJZW4dEklMIPC8b2kmHkDemEaQmZg1QXMy5D8OaD3dWR6iLxpCN4nDhYopBLOqcSffuWAGTdZFYul2jKbB5kOEF\/e8RySbsVvRTu7mI2EPYKBT0wC40mFkfQ0vhx2MYohotxnPc3Bsc2sstVJPJtyXt1GKVGwbHNzCuYKJZoDKrPn5xSTFKWFJczZiV+r7fFs1Q9WV0vHx8FKefWeWu3g5mY5sH4S9x+Z7zannsS9B2YzcxrmrLLXqVQX1oUnQGK3sqnxfIi0o5iwKat2+C6wZc6kkelkp80zqF2XtD+V7lSl\/2nhuB+2kLcP4SNKZZrWdnJzg87rRGX6xHHTySMwZh5HfjAaA\/mDT\/hfpbh1cx\/rhuJrjWYXwpK\/1cmcLr\/vAFRymMIukDjm8fzV5VRg5417TphL2vfJgtT2SFiQxiTAefiBjATkDUiXL7D4eKpS8cgGGYpx7ut+JpRyJ66ohExsVm8gkQry0SA\/v86Wj6Rp8cnNmFIOkUEZVoTdnLkNv8BQTH5HVN8KfCTfQN6L2hmzGWIuf3K8Z4hwwjkh3Q\/S\/5+Vbz\/ifGM2MJWztc0siEwoWvs4AG1GZOJ+f4urwtONfNWt9rgDnTPptkNJ\/DFxkxjjhDA8F5iZPsZRwM7YHW+4LibDt03h3DBNkcIUNUfzT3BjESf0p+WEuvW\/BobXjfhfHRezjUdRhz\/oDiUJR5zLoe9X7EHewsLD2LJSNjsuaSiSGMV4O+u4iMNzpMBRa276ZMiuWzjGW96oimcwsMlil2JjAdeqqzXA5ah6zpLIS70klstDZrgbyTTnZmlmFjqxkWZ+ZqR8BXacMmG6c\/yxBzPwiIfU\/FA6KyqT\/7vMokZTOqMvWVAOYF271MADqc5sRUu7KjgLyx3qYiYas6JHSPxtiS9MdiZXphgjrMW6pIt93mrZlN+3f7rs8akbQcHkjzOp3tyYChqx4tcEgFotOgynwMcikNscDtmMIgfPY5gihs4jpFXE3\/hE69zMBvnQ661ZSp3TNZ75W+0DnRYf+yHG4zQFY+hur3h3hb3xUdm840u4+AA1m8BfmP5HpzgryWCIl0BKFFCusIFzSw8ddAqGbjbHKHjFEDiI0BVyLVlDCsNzC2BolRqVU7oVx8fWtm0itRDyv2JoZiKocJAGcbqC5mu\/ogtJ2L5o82B5QYwwIcvp2DvItNNtgV+v4YzKuTqGaIIv0\/mN1Bu9zfmjfGs6kIygtnW5VmU2HuQ2rt7oxvkDBMttHLbu37VxCvht881Fmm\/mNq\/e6Ob5Q98yDPTV8mBJ1FUMX7CKyaxhWEZJTU2hH37kj6Nd6V1SXe1cXFMv5SOaX7uuHij2EqS3bYZWNqnrVBYs81wl4MO9stk\/h3QJ6dqQC+vmpqWmKL+AZoZSq5330d3k7WiH7dU+IqUFxIu8O3YDlRht+jqcaLkQzgl7Luhi6g0NKXZ586uGQ3mjBDn2MX4HSfr9ZGSajSgmSQ2ITjAUqnMb72RLzE23gupVO7MPuXpKkJPWqxCStsBpGKINcDNoNmp0D3kA0lFgMMeD+CQl+9ZBiJTK006127fVD16EV5ejSTCtttScOVDjx\/RUYl65+ovq3iA+nYwir2wRYwskiQyqh1153p0e+i1\/0q0uLx\/acTz+jAaGfn9L+8c+3do7ZBLr6k5YUARLu6UZ7Gl1t6jkbsh83f5wJkORCYbVxyFTEOXWwc2eRjh7\/hAHE84amZ2ScVT3izqLV9yim\/5uCBseJP2Ot\/K6cMijvRGXHQKCy+qbr+zv+TCrv7e2lec0GAQiV0\/Vokw7Ek1gpz8ahtU3dlmcToDoXEhcaEweife2Nfuuelg0zteT7gjZ7q6qB6Gb5a7Dretk5Y12cjZPhAmCO6tAHD3BRpn1wyWfac+ZzDmHDBqaQ065iTNX05wmaI7hCZhZlffrLJaG4RAUJZfchSYIiDnktEIjJhOzIzdfzC2vKUIsLSlDGt3U6dqKGNI8ccjycktLfN6OkEnS+bFRDxlMRI4DM00cFDghyJPzoDDcGc9tlxPuabZa7mMpjnyx6wLLqaGYG6E+giihh2BFS9DQRV\/1ZgDZ1MKJ1gRpeRN9AWKQlcEcc0YucdFhxJtIXO4LX+c2Cp6gsCLksIl+Eg+KWk4UZWpZc90K6wOSfkFtSGOXw1z0RlbbWmvDvGduVoWibcn2KvdhtgLB3fEQ3OxCoJSVatuVQmZ2Z6kSjThLhSy3i7WfbCIBwsLXRQAtrPidl0qyiEKiwBUyTF75GtzvV5Avy0LnrG\/G2qpl9fIkrpZBRHZVhxxwYMfDb6dZinczG52y+pVwpVG5wK0GWl7n8WpYW3vUk0TGFGQzgHqC1EE6pclRruR3eXnmkjqkJY79dn4ggWuK9JWv5VBQ2bRTpF9RfS+f6n8zlpjjIoEpUZ57hSv0qdckmnfNvAt1hAg2vNc3rhtMK+CZ4Kycr1duGF85HysH7RPSMItfsLPjg0xcRhCYptHa4kfZSelvZ6gjZv1dDBgWYQBCWQADcEzo5d9sUAlszzjQUSXbEQWqPqm04uN5ZbdIJCfEk2YC\/NRVo0bMC2ohEoUIz0emHH8AQxuV6Wgyc\/qBMinek7sYuOXGn0QXISCSc4QP\/0PTw65aeHpqMtxJsZ5yBpCa+mqq8zxguBHcHPxlMhp7RinJqJHwgG9U2\/XVKAiT\/Iv7DpyM02Izb0dA0OLuCKSfR2vQTNt2ON3oV\/6RE8a7i6os2LMSF6kgHYfhDBs6qEDmDfk3xF5Z0h0h8YROp553uJSv8S5POasVHN9OqyAb2OhUGiPYwUC90REk690awUJOr1BgMap\/\/tu2tCOtWaTpQGwPe5ZzSCkiCEAZct2qdPwpFBmQK7eo5qVOQ0sAIcQw1du3CHyVxnhpwRTJXdg8bVm+hPfu3TEb98ur+OxQjeFgv0V9vFMScko6c1bIkuecAuoYkA3mbKoz55IQVyfCciOxY\/AF9D4pdAIlELmdtvtZIucTyfTEZCFeAYJZv2oV1K16WBmOJojXD+EA6r96sqtMh8Z9XIBL946Oj8\/XYL60Kp+\/tD7da0sMM+o\/7\/3Xkb\/6ZWv1r08rP9xDlKGwibuWZmfAEhtJ1CZFmpj4S8TWm+zgCg3tqHJsJ5cH4brSG\/VwZQXCMV7xg0fQ5RkqQiswLcMi8mhLlA6ta6wE20C\/6cJ2omEbQQ\/n5SKMo7rAKubRnnzmSkCTjXDDPK6F5krQwm0w\/KT25lvo5WstCvjSuhk81uZNrZjwtVkXXGDwQTsZOxV9uwPzlbgwOagBJimf4jXrGhrZoJo6tJ1OzmrxsRb450eJY4m\/ZDll3VywXEeSANpKgJJLhMqQASopJwWa4BvZW1VhVYLGQDq5ukpzG6h2VdSUSrPjT7ZmssSImJl8CMOdENJMrbywj9WlbgkNaZMahkOSwSbbxKMf48\/KuCQ7PznkMNYcDucmx+gUUj2EauQEjo4sYwqsrkPpayDSg80ItM56yoPawEwZe9StNUAdeQ4wu0McCCgS8EFhtLteG9Bqq7cJ8o1OIFtfQShS3kNxndJTbW4G0TaGIWLb44ty1XnKB2o\/q3XGmaphDDsHJAm2axnKMlqlR2zCOBwtfFYCDwuroJgA2yabqYabbm2Ur2YtKiGI3YpXozFIa5l4p+FAkGg4OYiSXt81BHNeaVT9lRLfYIwuKAAJWbsfyysCE2PzAm7MuSOKOtjGn8UG\/+Nw\/xWZBVCwGTdMWVOuoTmaaB8pc7c\/7Q6TCnqH2SObEsVZqHcpg1uBboAXESJEa1Ye89jGdT86XaCbOw+VtP58WL9+u1M9Ovr1\/m\/e72ufvKPff12LvkBBy29IAqke4QsffWLQ2aMjZJ\/0kDYSL9Z\/Md9opapq8RufffL2dk5ebaE8om6uruPNLz+veT\/\/pt\/sv3uLV\/LoF7cBvsQLp70Hv3hIR8kX7Dzrxf5rjspb\/\/Tp1jtHfNyiJBH\/+QzaWXFFMlqIvY+3MDdazUL5s0HDM2NvZLZTMJqsrA+J9Aj\/m0E7ilKYnUE7HsYwP3\/273PzZxeXYPbrghIqfzYLSLDfXPdxKfLfN4P2g8cPczNo3y\/KoF3gWDM\/Uzaz8ubk4F7\/Him055X8JxNoIytTbFcumEJb5V5WWZiTyQC+ZzLtdR4Lbr3vmE87ylr1\/TNmx\/ElUTtmN3ORoYhLWIYiNKV2D4HvBvkALX0qEEnjWr01wz0Dy0WePfBn\/iqedbqwOTCXSBgPUfmYW8xJu+QY1tD4mRwQjJlgam6H3B+B70FZ8EKzDtS9oeaDcEG5Nd1tMq4seC26etDWx7jHwDWG6a8GoyksfO\/d\/FC+By439rpxPgWmBH7eex92Srj5dEd5BZhN+\/he7DF+8xltin\/gi\/vigWLuzBimVcdQ3inc1WeIaiON6pX2bhk1TnEGuvc5ZEwCJHnXw2mwSstHgEjNW95UVBCtXMcYKaOrQesLo4rpCEpeHFgwhIcdyBf0PKeQR9bcDnXr7w8VZzOAHHOn0CWARDv5YzUjjZWSN+K7AK\/2PZACbJrStWY\/YgPxcmdYZf3ctzDdgLjoHBrzsrcguMq3XOPtIa9SzgbdIfJvI8hoia\/WPONZFwSPL9AWhZwhKIrsUpkIBn01VA06zXAQWqrjM5g8G1SqWknyvlbFPfwaCObr63s\/rH0eburOFMc789uV5sBICozspny9S+nv0XXfB8cC+O2+3qI1sKLxyCfx9iUSSnzyVGcedA2P4+VfZZY3khQ1AnhdLTSURNPZQynXEiPOHkE04sRQagsNJVUIrBjYQUjdINSGkcSF34TQR7wDpiVc1iiWac4Q78UHr8Ljia4T1HQkeo8JwJ9Etohi\/UxDVaxnj\/GEm+Bmu\/RDJsqdgFLPzuHQJxf4RElivBqnxfsY7jyV7Rv5jxBBsx2JsJNh5QrcQwFT3X3PPXNyMmu2\/HF30\/2BUTDIzQ7nj7W471lIimJBfF1oeoj2oX1tB+PJ1pj5CqeUvmEfBDRgMN\/MPhN7tmyru2TJo18fPoS1XfZze2JhE2EH0mWncPPXuSzmfow6hYVFwCvE5OSkORgrQLyXUWiChVXzjh5+ckASASQPGKYq6n3T4JW88Xi4wOilOWfsylgsKifnMm9YZvihB\/MXjB1iR6g98gxG9c5JtEP8gLQr\/6UZ6nsKJVTaHbt8Qd3CIJKpB0qbvNwoE8Hng4bkfO6CKuYD60TqzWjeC5w0yRNKGL3jOz9xM0YNfvdBYnd9xSBhU1I0zOjIf1ZAmTLpja353K0ZhMOrORWJqn8M6+sOa\/SCTYBqEdlfNUrXME+DLebxnUOIslBHrThHeHPD3sqcuyXUijOI6Dao00HoB1ebpXddSDi989PSmj4b6Az8x3B11Vvb+AOqdGqowYTjOlh6MRRvBDW6lwjTHVHTVxyc68JQdGj8sycLLEzvP35gD7RCnmJLeIqahup88s7UujHQgwUG5L2XQ\/pvOHD6GSMQ7Jt\/FsAyiR4BpvJL+M+nqiYnIS28GOLYdmH+dOitP1wDHXByTyU8CHJ8NbT2VVAoz5qDZ2z2uaOMi\/Ja\/hdtLMq5xioRIYPaI8+VRF3Pcu9muUy\/q7J2f+XqhpUVZtrfM6K2uUJlCLiAN5hopKgX9askI8oDHBSK8esib4lYLnDajrbcH9MGeKfT7QfUGATKUmhhD9Zo8NA1\/AeGj1FBTLUdQggUwqUtE75ecHtLpE+Y775CSdf5qL7vhpaIKR4XQO15nj\/N\/wYoaIYyH9Ga6ZXKBzucklDDjUphVZ3xG5NhIX5GygmYluROGZ7p63RIsEOYjQ5FCQuSraUBPNnUBQQhOnzQy0IQOZKWRWzVNjmBeEmvsbIuggXnYDqwYpaa66qWkAaJ95WcOHRQLXJV05EfkGY8wyslv1KWT54+49gj7q3t3ME55TgyTKNNVk\/s8HJXJ27U0KgTWqrOOlc6afMAO5DZFTxJRdpJq5DoF5jZ9bW1\/0d7\/1KtmGd5kVW5qT2+82spDIESW7mJFrl4QQO2UVeOW8bmIahGfuf39NJoEdMqMqf8FHsEXSdmDF917MW1DZUt3ok0Iax76mkZWmVw9Wsb4aaOSlA4Rg5vo44KbbjBw6od9yCpDyvChSsjgWaGdcyhPsu9AH7DuG1oz1kdIuESgYq0o23T+NnmXUMYaEJZtEvB3Jjwrc1WrCDVO9N64O6vt8ZkB901atPLLnc+JFPgamCBAg18+BnkKhARtNIOVY3oMnJmqumy03HY7La6TQQzG858jGaSqvM6WUe3jxyGSu0hNRjkx1bZzu3mFAoty\/FFFZ7YCloknTFkSiwOIZm1vqrbi8TnUesCZlw+9Y4sKiuT0eXlu7UHUdvaRGYii9C\/EnMK5Uoqhek2AXfIOYUQrQEoznw6EO85Wxfx0CxJX1GKQBYkuxcviFhbqYIQyMfAE89Puyh4KNWPNfM61ozew2DL9bfL1NjU4\/QAKcqUYor86L1ZUG7gT9rd4cuwNcNu8c9no9S7A2nIvOR1YtFJxqb4JAGpCEOdO4lsW90Gggpoj953Q2266L0f2uPE+2AiI3gvaSP0Uf380tCiUu8B9DK4\/nh77oXuT3tuwuF3t4dpwTCsJ\/ed2p40MBvUmNm29sqvr9f2\/frPtXaj\/itCObe70Qx08BJYkFJ2JxEKxa5Efz9pjAhjNA4OAmA\/p1qXLKRAkepzcJYNzv2TFW3k8QPL8D\/Id0ly2doUpwILMXOgwLevuJlUDfBUXYDBHK0d\/MgOlwJWUvgZf9Loonnrtg+IvukihFnWQofdzf2ugPtJt1qKx3uIgquo4ETsQyXIsk1Xlp7qzsefEdFDx6PwbONlT7f+pVuuvrZ9TbuI7Grf1DqN+nmzPmvWf8Pqdht1IExt5kTcwSJL8Ji4yZxmMSDSy9kI74aVoIF9g8PRTAyqUkxrhx6fJgIB79hj\/oCPYP9qivhFS5ToSFgSFWCkutQdMI4BcGoM2QEsos75eknLvmnhkBgZgokkHuUhVaJYZhSIRJnN98PE3SHZfVUUfgKyCEgcUobRZHeAvnJpSS4IvwfUcFlUJmKROaaxoxRzTMoKaIppWpAEdfJEGbkbpuo\/MXYOQ\/7ExlL2lhcYsVmTdU1yIAusdbNoGhY6eTcDj87lCvXBALIGa7grUM8h3FOx0XEro7Vf2189n66ur65prrrFthqj4EpZs+bByxHnxX\/R0tuREUA\/577PFLjFCqju9s9n+y25bTMuGAM3rjDK9wnuz5iaMSYS1A9Ar540wDRBH9Wl\/hzH5ckuTA1gBXOyBUug\/dcnh48PhZI7ky3zonoIaRWd62MjMOK+ci32WJk\/6Bp4HX+rwUvZmtMHuOfbWq9RPxWljuKTzhpCzK7UtoNYXBFoP1iCDczSlqbIJgAK0l6r+GlcgdqHYeUP2DnWvvRL+K\/hsaHH\/dJeHycrLDklo4H9Weurnp70JdXBJYK5wNgzhTofTinIadW\/tL22eDZi9wstF0sZ+DSTyMD2ZNY5GSF2KbyHlKEsjMpJKOD5pOy\/83RW1CkF9IHKeU9LaPgqgJ97BNRZbVWaNHFtVdqwQsWDFSCU6wTxgbyUhN1Ku0ZUgX\/L3ekr\/xVuqq4zRHkz\/ru6VsbNa6XzE0xopRfcjlZK66ud8k9BDS6BxqahzbAcJogjhZ\/G8lAFnHOg6QEcavu8RpgNECu6FBtLbxsiLPOqzk3T5q5LXrblik1njbhoId8ZovQXtT9t7we2C72e92cfYwEOunbze1Qg1l779YdrtYHg5as2+IVyDVEAnU1pNARrZD1vayMG1AUGnqcO21xpqsav5WVslL3D58PxOZQf4KQC6Ddo9oq1WsasDXO4R6+gFv0aSK9qrQrLbPUR4I9RWlFA4ldhrfjo+SwcIPwzxmffKCfdjJPrR1DCo27wE4mdCjUHHu5HwzPVwk1gWEQdVwfT1fZEhIcIpVEnH9UGhVlvoQ+QGHwuyXe8vaQ8gt\/LMGmOWlC1MVJRF4hdnNAFPF7FsFFqFkLl0z8fDKl6PL4DO2WQbhRZaYN2eWy\/LD4d2efwT0uPljClCkydotspy0curvZwVC6uQbGLKzaLe3mAFyBwzn2yLU5E0X3Cw3G1QHO8zK9T86Z\/MzKxWS77ELexlXVMW13UtFsB89sPa522fOu23cPCcAF5Yn4Fow40SuRFu+NZFYd16Wg6aX4iUMFK0IcMiJaCk3bzJrBq9GUpmCDgY70+JOZLmhVTu\/qejgxyfDwF\/uFP6Qj2Sp8+\/YQ\/Ze1Ao\/Z5WIdHBgU12K4mipLetRBiu3vOfF8KS+Py9bg+zvRwwaE0Vb4tBmIXnPcW5r21MTbz3jLzPq+Pj7Y+1c7zJ31eP5ctKbsX25uPsIbQ+E0\/4HBQ6hV5ioLT84YCSQnqYaB4Gj7nBJswFfh2oXiC82juF6LZa\/GWqN1JIC7LC\/sq0XNwiMg3HtzKFwMuNLRuUDGVYnwvnfcXY7sVdAZ1aAuSnLvJWi\/e2V\/kjIVasNQzfoHw2yib75hYLyqOaeG8M\/5OefXprxLVV66EcE+FuxBXdICFHMARz7Sx3K4NzGIO652jQRSrgFZ7i850pqCGoIJDzDlREw+jMc+cMUMzoMYJtsMdcxREWXmtZM4TEmIXTrdtiKA7dUYwATbl+\/d9Y4RLLv0\/ELdS8C8sjohJ5\/6F1nmZQtqAISuw2LLaKtBT5Du23JJgTwxEB4LVUWvtsb9F4kUAeWSVMSKucqIaHkbLhvTKdsSD7FVGlEgTl0ou32BpZnX6pSeRh6M1RTkpmlsON8yj2tCg71l9djQUV7xYTMsUrk7o4dZkFMszzIIf0bgnzrjF3IhjPYtD+ng4ie\/J7PVBvMAYftK0psyDtzuEXw7r1ebvf0PXenNpOiYHGeCCNP2MNH0COE4iOE4MHMeA4+RTbZyPBzw8EjQd8aUzaDoLzqfpCCWgaTq+nSmaPo5o+plL0+eSc\/JyDjmXA8D4l8pui0DeMWDGUeouMNrQZCT\/MFdRXGL7P\/Egt2qi3JxmFiUjuH5ITJgCMrLI3OUmFx0X6kQEptpocUJEegZXBlBm9aIjA6EvFz4yhoqYDHAiYuiJmrFjcuiMGwKLjG0SO2FkS2bONU6AVCAQ0syWOfOTcraC5ReAJw93G2tPGo1GgNtpFrTpRGnKL9ozCDz3frJjG\/1RrVsba9aO+NQ2I\/yB4rfBwea33FOEsYUDZxFo9uJzidz655Gqs\/L1Wf1sQVI1IakaYzrjDUOna2ODfhf1s6MxNMD5c7qoXyRJ1UUmqWLB+aTqwpKq4yG+I7YRiRW02oZYTf4escrnPQv3Ui+L0XQWcYH1u3X4SsVofiXVlPPN4IBMQHMiaXwUGkKc1DSEiPnVNEQz6qAfippk0BCHKGQetQm2E50bmJWvB9xmqRZlfKZRaOexpJaNiXgT8yjiTWb1AXmTAvo9U5sPZNrhfvM3X5z7hZ0mg2UsuFVhEIqy+ojLpwdwqo6fTIkHi1ac08yCjWLEiBNSVDXngGvFF3lhKjUgDgzmUCkIFDWdGpJOzRgOPFr+WcSaDo5mn2p5fClmR4KYoFNnmXSKBefTqTNLp\/AN1zFSKbCxhkoNNZVC5EFDbhDXMBn7TCJbmPmpHWwKRbsXWX2we+WaOYdECX53cIHlheer77EONYPBuC1uw+kkUfw\/ieEUM\/9TOJ45+WwcDyyOl2tXDQjcH+OPE6TexqyKXP+yMo18hZ3mZlZZ2NgtMv1NjicxW5NqxFHrQ1atbYjUtVEyKDQY9mOdoTJycRBGJFFSBNZXaRCg8VB2aDHLytw8CEo2fd2AbC6cHPhB9xwpRMUjWSSexsG52WtPaCmmfisHXPlq9XssNvp82EG6ikv108qt1c8x9EwEnvqhfdBNRcpV5fstolq9aUB6j38ZRPtDs37ewKeTrQGZJ0L6jUl8QzOroDV+STer6UE4Hi0NumJ9LlojTFLw6yCkbc2+0mHAenQUMyZQFEEC17fS2glDGdqIbo2NTtEIpHX4U0HWp0itALwE2ho1CdMciBUoBtys7IvN+AEUgiFiRMmkXYcrT7JoAK91SaNgefr6rdaxQG6sKoRMTJTV4vt+okVG1MltL6u0mxphZKN2mO1nwQHb9Uj8jFNCaaKBMCKHtqZ9Kythmarcun2DH7WYaT1g1HDt9B2Iw3wtso36Qr7r1oOrgzPEBoYYGRvbdB2MTC9mVDq5ABRv0IS+3ZHjBDHf5KwprT7AFlt\/hOgoPiiM1tFIAMMa7AIRPCo\/lC6E00xhBaUmeJTisg8fiaWX35iWWG01pCqUAYtoEyWmewi\/7VKD5sjqnJZeui\/CaD0kgJzDxeWmDlNB2XMNqHEE0x54QKVJgX2tJaa5ptjkIpQ5dxQneLkERb6NnSk2ssjNZkMhffLy7WTtgsZoZ5G1uNhyzrXOTtFSRLoeRr3CSjbDcl55AwmMtLVtbj\/a0iDbAt+0QyenSFUVxIwEJPtI4dl0PHQPGMYHm2\/Hj4wpcW8FdKJ0TggYMmnBZQr6KK1flwRgWiHFfYo3ExJ457mm49SOQa1FrWhkGOt6ZrX07sxRd3MPNFQw13yk0ib+EacE3D9qfEqvZIQHTnN5eJDCvBgeGHRHmj0HajAZMFbUWVDzfHev\/hmd6M26Mtq4c3LdnaowMrdilUEXHP14QFuaWz4JkKqOaYVtxCb79h4QCIFLqGPNew1DOqKU9VZoJBrSvbOoMhBJtOS8px2J8ilrj5zY6qRNygCxO9JWHMalK52ANcdmBuue9waaXARSMUbDML\/UoVTu3n2PIFk5L0XtqKOK5RTZJHGAK18Qvjt4vgNDIxj+ACHym0T496smwxBWtROyAUESgdsj9mpyyRAipyPXZLP3T0NMj13wWQeWsfbTCmxFJVzYFZXLBWBh4wtD8TQGRQd8fSEhdJWTEy6rfntk9mvbFFZkGkwJQ4Rd67BKaksS85WtAdmBMnhS5xit4h4GooXrsAqegvgxsGybeP9Snzwk4dsgDKsc3UgnUcpu9nxYebuD1idhC82QqTyhMAgurB5Mh+AOAwslEBFUoinVK9DZxhW5MhYgR6fCxSgjESSWyOkFtiowyBj4w3NSILrQahNoncWCnDC4bAR4rF6D569eI\/eL8P5Rkou8lplMY10m0EAQmmuEUkLuE+RqrjSza1AC47keGshpkdM22TmQYDevhGR8MBXfFkxXVXs7OpAgq6oaM3sg94VUQkDqzGpBPPtFXgcwuJY5SJY8roXQewowcF7jyNvtXkT5U8DjwbIlyzjkvpgK0e5F3rp2Oq79jn4bewgTrJSrXNq8peC6HRtRZKhyi6W06TJypg\/WmvHxcjfMQeaGyT+7fwQbpLax2U9D\/6LbFiJBux1tiqQzX4opEp0j8mOXi+WvwxAmf1dzNifoRXwS3J4HzLW8wE6TCnk7bRAGXQbk0e2IFztjcz3b5hX323b\/39i7aqxfs3dZY7G9K21\/y941AJy3d7Mrzd25qiR2boAtstVqAeUSUd+2dSQsQDe+u5NbIkE9pGVuChUHMm9fyNvMrQFfWNywBti32AGjzzByGpNT1BeB5pDy1kJ0n3PW2J6Bz\/J9MZS21fKw+t+OuNGIvgJ3TSVB3zmE2lzcY9RRXWAUsYbaMs7bf8QrhAdDWAiIpDJ3Rxxb7BS+YYtE02daycV3ibuQczdKuhM3zVYschsiHv7tvZTZtdpMBTuJhQrQ3eL6oohehOV\/D2EXwdYkhiyIrK1MmXXWU+U\/9QrXB+PeXZJ43jfB1XCV5AgB4jZzmJSfBe9hr5v5dv3nGAvjWiD34W7nvIIPo1iiW5fkW0Mr5h0pCojftF8M0n\/VZll8p5htUmD9T5xvXkFE8hrx4uZvAIv9cf4qgSEZHBYOkGk3CBu40RSwU4WnhGF59hZkeVSFrzkcCtmgVvczvINQChUlX+DfPSy+msuRGrLzTCBOk7oQQ4FRNILe4hYOqBtixiC4iKIpZSSGDW4CQIDwUAKnUnuZSzs1XSxC+6\/hpLIQ5GsRf2FeSpcE4ucf84ucDHr\/m0UGpWt123qB3zerH4dYicLtYjkvBMbOOyz2ofX6B+7vqlnslv3X3C3fjqaqoa9BU6mh0TRCz9yVQHqSryGaejxfhztRpXlYrUoqrJ6HZ7pV4JlgytewEqqqZsoZgj2JHu+7iDpmuA4UyOQosgopHho\/iolkVtXvyWFktr8AEmXUE1Q6xtXi\/2puIwugX8Fz5Kz3Ipsor2re9sgs\/x24kKx2j4dUpKYiXURi1RDJ7Ixq\/Z0pgDgdK01oKN7Am47voVtW2090FurrPNVFYSmtwbDNUoORUSFLkVFcTPQZtcGIqnijH3EFzXiTTNQfwcIoluORHyIpvFaMxfZYFPQi9th1LNSZ15VvKgLJvAhRRffkvXJ\/7Lk\/tN7YBLqINe+9i0pmFoDuOXNYCBnTyK4AsX0UzqV5PqG8TUeAkZwjdO\/yK41G\/QBB8iLl31AAqhJMQ4r\/0vsDwa4cU51R9ntnScaR6qTIwU0f7nrQUdzwSGVIvTPybcxRN1OpnqZ5ypImXy9TmHkICVlsfAstwEXk7zuiVyV9LtBz5\/QIY4bceGnJaIK5yul4hLJoPAXqp4JpfqsOmqpiZ7XPBB8YdDS2Cd1NFkXc0nRJHiypohQoSzSCFq2UtF2TYxKQcCl2W1NrnGtnFe8t2Y0xg2nSPhre3bWHj4JaoDySmK9qISM5ldrKKQpVc+qwdSO3AXXQ4ZrOFSvhec0w9w6WjIlTZemVGSnHvYzhmqgOuFGeM64D4\/leLaGO7HwhvkbLbSy0aAGA1ALMSMO8ZeaMFuGZYnR0gFc4fpvmTTAUFWyFSbbAtCIzEC2VlrR5FFHuFtGbGlxuvFZ2TI\/xRw6r4dlIKVShN3XwZEKq8LLOSP21XldChPb69eao9mJQf1l7MqiXXg7qf5Q3Xww2nw2qTwdVfPljUH0+qF22UWDYrpc+t1ngsr05bldH7Sq+TNrVs3bth1b9c5vPZ+3qVJ5ftKvn7dpnGhpe8M8l\/7TZ9UelvtVGVYcMExvs7eBwrU9H+qXkRd\/DuTfj8OwzlSak\/mf0ZO8gFk0xNIWxOy1VA4cBNKgPnHeHXQbM0M0Nc16QL6iPnO7BSNM7W73dBuOzL6Hy632nTEGy9fpBqMuZrBK7H19bBfbeQf3j0JlqQcDIVKHXE6TvGJ1PYwVfM6CtKjoaOghSP3OGG6vRGtW6o\/rHGk0VatS+CyHw6x+wdDDWcmLx3r3LH9z8L2H6ZCzdcFpgOyJE6yKS+1ya2JBwMuVNsTvcpxlLGVQSCRdAB\/UWufRhPXx85wM+KGJYeov0PaO+jygWilg4REbyxGdrv09HdMBzArXoDDMSqQcZPpcAellLMn2nBIfk6CLV4vnq4WwdQgSCikoH2AAiyGFs9B84oWnE4wFGUszKcp2S6r7eqOBeIomnxkhfqXOvILbCGt6IzCgEnEAzQDnUfqEJZEXYYHfv14\/ORrDvYRXegbEDAkWGunFzRWr1JKuiG33CJqGVbp4wVYo2+rMjgDA\/u7QZVKK4NfvJ4eOivLdqJ1VAtnF1QWpVqeVdu1aw6jajTWuhf8Cjh6J+MGqHP\/HkojvFoQliy7DJYEwB\/SZNhENtLyr2kHiI\/8zqZCxGAuQaFn8L4nfe4QT\/7w7v42EWxP8mfAX1lezhMXLIapuZJ\/gKYmFBrwoYoxi8xnc3PQ6dWSyYyS\/o5unwIA3y5u02qPekaXDY5ndJYbYV5DfmIkMkA+E8swM0mPZh5INvcdFHHaIP8z5XzsECSUlH\/bC\/WSDsUMMrEnaYm371CNHwmKIvW\/qR2xAZzCJxy0tgSuEY7n+fMcD4KQs8\/3HYOLQDfOTGXuWgidOhAc4VVzOtshAOC5jVdC5uQCQcljoKl76LSrprNxQm0w+p30nLaNiDGsvoNQR9beBmdnPzs\/q6HsWQZQM5IhaVa8GJmjwjSyhRF5n4qwc41s9HNzfIQDkbOTEctY2aCdcei+jIO3NBSHppHLKEEDywTlugSAVfiFDnFskp0n097Y8aft8keov1qK4n4m6Azhm7fvp4iOtPujCTcEhQHTLZqttGGU+1y4EMIdF9fKiJ2JUmN5J7tWLSIMnXAvYGNonyMpEXSb9abcuckiV0CGYzTIl+GRuSeRMbTGzRcM8ZZ+FJNHm26gbSv9AGxjqyrg66C7vX24u5XUfwr\/iVFw0Ka1QWJR2MzLiVMSqgCcf8VIeUbFoLYd7xv\/jRqJ3oV6EUhy\/25UjWyGshRvB1o4oTzlk575oghD8RP26FfEuXphJChLNSg\/N2bkF4bQ2MhTdMJ7xqSpPGr+Gc3rS4ZJpLL6gBc7rtfiy496sWwFf6ICDkGXYVyw9z3IJXKuJmuOkjJxpEAc1yVb4h+lbtrza+qKp00QOrvduTMylv9Ec+UuU4tfAbFW9vn1T02a9GHeVcRPjUaOG9690qb6RQPp1PqD+hgDQEyQ3tL9weImG4xTiFFdDTu28NugLPSNUjLPxM8gNRxue5OJcv15mz1+JZygzywgOquDkdHVbENwuVrEiiKixi5uO0VxRI0wKJRHRo7JwRyISxKA1ylhECYONcjVBVx8NlC3rbKPYMGCGjwifSaDGy2xxgDEZQ0c5NRqdKJeEQe\/p3wIAt\/M8DAnJ9i5xflFjNIC7yLH1\/LAUDasTBiRJFrZDTZL1dSA50JKpM0XtmYZhCqPv+zuFhNtjyKjLlJvzMvr4SVF04ngtmpc8PvTllcRCglwd8Axmdg2pOJh5xg0FurZUV8NHtAHxQZSfYLIlQ1pYnC1n2tqC+AEmdCxFojShMB4HD1BaudIzoqqgG4p7uOnZkSU6LQuiWvZ1An2lFwPTayG8KYuqebBiuPdnU0QVvKoFspUUxkxGQ8oClTB3fd7Od25Q\/2rKN4JCUTfLYQlTlL+ESEhcLz7ckr6pLzenUtOKKYThxuDEwN3txtgUjE4aDORz4w9qDR216l+N7IipWWRxJVTxOYegfKaeo2DNIHOk9gbnQJSsK3QncQxAW58HNjSkg9Zz3qh0bVz1eDX6lKix7rPRGA6pc53e1wfBzkgoOYclA8RCckIyKCbX44FGLsQPhdEEHMXeOMvCuCdJ977+0vTfDT0KQjXYQiDASZEske7pykikzSx\/5ZCHZAAR0Et4VctcyF4Keo5BkISKwiRFcwB+45O\/fxB9sC3+wPZfuFpNLg6Mw+hpY6ovhrSIssxKiZBekPNOPkpqdQ\/SucuNaKYaPNDC4wUg2MpWSLO2ZxGgemS8q7L5uYt3vjBRSOPt5N9LipQchG1QuHmoGuIhlLq4THd5uLhWGFSQWKpe1R9BK4+baWMHDre2d3cdPnj57\/seLl3uv9l+\/OTh8++79h49\/\/uU3mgBwu9M97fUHw9H4DIKZ84vLz1df1tbvP\/j54S+\/\/vY7jIea0LJvzUritwuZEfr75f5P8msCNegI3nzUotYbK\/5tPzklsOsP1h8++IXJzgzKumqux44Tr4k4npmu1iyxpHuGdQVCp8JxlIk29WKbMzbrzOSiROsrPwuU2xDsQxopHQbTK2DPQHehXuitV8Piqqb4LRp7usWdkVFs7oxqaQg1IwjF89+BZZJcy7EnvMeny6UiZ8eF4Dop3dLr1893YbNAl7B4E7FEdiZzPcjEBUwtA6gHUxWSMa8dFiyKQbIzIgXjMwADUMiV2nN1ccWt0\/EcN7G0slMdA9w7Oe+t1D+ZdoBT5s4SMT8GgLWiDUj+KgXZqxT8+1cJV8KvW6VUhcJVMvsRqyR6xSejRALkp7I35yePzt2SMd7XlZCY\/ZjL36oCIA4WWI78w2X3nfKMqG7H\/szKwHYZ4kafRGA79f2cqe5jMbvlQb+\/FYwQByTAL8hrlPTk+g1\/egmVLEvc9uvPnGOs1qfUTLXvnGQ2IINqcBciQIzevhcRiQQDw+Pws5P4CgQj5DFe3lR3HcCP3IBqBeZGEk8Lh0RVtyvYdS2tgDsRW2Q\/EaYcY\/2MtJ5KgPcYEhArMYMKd6DYWcnkqGZB+u1C9YOISOl+6tgLIKWSr5JRicUikQi\/fWR4QqGEcTQ5JrwkwlBL+VLKr9UuHSsdhH9wcHA\/Eq4CN3bzZWJsHVe9fmWQJ9ZKAj5SnNCKxEKfIDOtbqp2TYyaCBCnUGFyXVVBYdAKm29QHYOWGOwCEXTcRm2bH3uWM3ieaq1Rvp6Es\/PJ\/1+7tTBFrSzhv7JQp\/YmlxgXPSBuzKFAULkiosLxKFBUHpNsIC+TLA+X\/e\/365lJdrKbVe\/jlFVsMpnp6enpx9c9Y9pz+33XLOOs6vfPV8epz4IoZf756optV\/c5y4Ke+GxmWd7vaysD27ZnLQ8PK+v6VLeiQHP0glXjIu05\/Ov0PA3GqVdFWdr77GmO4RqePrlxip5vp+M4Nhj\/sRxzz8SUvlb31gJ9AnJBvx9wQjVZ3xbvhvgxy7lhoT5ZsoDwzL0A6\/QD5r2Hh\/NVonC+Skvp9z1aeU2GNyrjzJBVn9B5P2YJS6sDf1lnr6NnJwFNJyY6mnXwyOwQ4jSYEClIMLn8yWjoG+6QTaeNVN+GJFUhU8++ySK\/N+gQp69PaglywdGitzXP9k10Y3fGykAfrqxjQtnLm8bmW9duxjvN+INMq0ZRaTi66U4tZX\/xYYETw1\/OEtMnvs04N82s8h1Tay5pVGvZnrLsf\/HJDM\/Awuo5sCZ\/e2V96NfkaM7EyVtTyk9inqkOnuKKFR1dVkjuZspuWLEXlY4bsyPmFO497RfNsrKiMeqRBUHJYDf1k1mRiahvf0C91PcXHpam7GBLbhuDgVVLj1RkezD0SAtWNLLRXpSWlZN6pGtvTt4dSsXRpX6cXVjCtlwP8qvFwGXlP4Ks1rTz1XScuKxQldaVvL1hUTiqttuvw4G+Bn6VfT6Uoq\/teKWD4cUtob7M\/nwFvowAvuNGa\/gjD4CObBuGMuTMMjDL1oI12t';\u003C\/script\u003E\n",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 4
      }, {
        "function": "__html",
        "priority": 7,
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": "\u003Cscript id=\"Ampliffy_Gtm_Tag_bundle2\" type=\"text\/gtmscript\"\u003Egamptags_bl2=document.querySelectorAll('script[id\\x3d\"Ampliffy_Gtm_Tag_bundle2\"]');for(var a=0;a\u003Cgamptags_bl2.length;a++)gamptags_bl2[a].remove();delete gamptags_bl2;\"string\"!==typeof top.ampAdSystemFunction\u0026\u0026(top.ampAdSystemFunction=\"\");top.ampAdSystemFunction+='6ZoL5cC0FJgbW3FuzUSmTe+aZLqubpXIugyp8VVdYn77kGzxGYafhNhBcMs5qZ\/0rqJTum0+\/jD3cm4teMWRpWo+a1RVWxO5Bob\/y7RpCOCfeDP5Iq\/SpU+etSqpxmbO7DMzZLISmBZ2GneCE7jc3MLVlxw+b6LXGXNBbrcchnNs9zFqzInPzJVH94mHXNx+UI4sfcsempnoQmVSm27U+hCWZAk8ZnbU\/ER392oUGkVa6NyMKXWnt0QwQf3YLJLA1ndbzTXHOECcCXdFn4pBvYG4XkRwYaxT7+gAj450zdtZn6P7BCnNzNcSK2Lv2\/z8WXnS5fdpTkBStLTPhnxG7J\/dUrV1zB7dWMm4Hh2fA\/79FiBlmx73ijlsL62OqirI6dkB1mDpzrMVoXe8L\/cnQhHDTislCkJvKRtuuW15iH5nXOJtyNb44szcePi7Dqg5Lr+Jd+dINhaM28MTlPCsLSj+7eIwQr\/Sga33laym57t57mG80MQCd1IKF4bV5jf8zcKUBDkqItWHS1c53ajvdHH4dil7B2QgZeqOnGGYxn2copYtDy4WV1\/hC1aWNd5HWhGOD\/fDVzr5gnoJBklDd3qhA2prqP6Ts2i7aJ3oyfUruB\/EyPoxvzNvKrkd0Zi9Bn+51TjcwkSrUK\/h9jhpWnr52v5nfQQE7GITK+3T3emY0f03hHH+KXmSMuR9uvKTHTj8o8du5Bx40z75q3ZQj3QZzdonEU+T4DukNr4hRhlB6yoEK7M64ypfUjJ6s0x5CY2DT7yT\/9x0\/lhLoORFejoVp5aC9\/or9cfS1IECYD2c0ZEbcVAengP9bWsOBTRGT8cJTHcXkren9XTBbm6ixEUQ+wVDgJq2srEahcYZKeAhbhc2YWeQr\/84Y01A8115h4IycN2cusKFjsVFnBcaaOmRfWTbOTxYMI\/ph\/QUP2Xh3TrgsXtbJunIG5i1YU3UG0FkjQgO8ATY0WB4hx5l2crV8YoT2wwhc1e1a4tqbDOEIoq0QwIxtC0Nyz8OJscMERt5gOPcDICoIDAbqRCX8YsOKS\/OOlkDe++Vla7QQBhASQyJHZLqtuGUt3nTRlRdnvc2103FILHvE51i\/0Nf9FjeghC\/kwUPDGUQaUQrw59i0ibnaLeaSzqh+kIVs8FopOsq9oCm1HPHi2CLb2YCaz11cN\/e+h4donkeViuRzcaAAc9IRo4tgUf5pR74krSezsYhrb7zMIJasyUg0ERMdvY5AZRBSDFjM8qT+BGVUsgY45lPXYPLncdofc7+45FdPJRZ9ECdP0NZenRE06aLK7PCocIigDhesNmXHqIVvQDbhPGpaNK4FhmASGHP4Z7tq6btCjEJQjCRAvQ2DQhvDwTCF6AV3\/OdnaMqiFsELBEniWjhh+DAyoy\/lnYloKibigaKegfC5CH73O8iQ5nWLtnPykeQVkqrOb9SlodBk4b2bfxk4cVffAAUijlmW7jln3IzwBpalfG4ZcIFPsnQq+FVZNR9GuD5zVJnObc0zAjDVJvmiOeavsU1VEadhBHtQExr\/KEAjgQuCABZRiqpLW28BBj5LFONtdyget8Mlp1vvUgV2YqpALHWRRw3Th5ugvMkHOAFZgnnpWKEAKlDDULZUSwqxKdk4\/Rs2qR1CNAKKBRrRGCN\/38ADQB5vuULF5W6RQLuVM6gXs1rHWqrifQCpTz6noiz6heVuaSGv7mNkTZZs\/8W2WCu9MPyku5Ef7WatLq3+tbl1lCjkDObXYcVmssHDCWWjBm5lOf8xEzsN\/bVICznGzMN4+fWW+54ZjCgrHRZazoopYqakMGhM+9XDiZWkQheOCYPQQ0ZkBuLDmDfo1XLpi8mGzr6roSNok4NNstrQ\/ZS1BdnKFqsbo3XT5TF5cznGa8RW+z1SE8BcXj7ALCG8WEMkt6zIehVkWxqxyQtNLpM4uLmGhLwfWpaabXoxayktYV5gV9\/t3XjymTANf4LTJEQC1dcKiZYT\/KyYg2QUWgC5rLQR05rkGi0vWgxDg4QQuAvpcIXTQ1GzgElzuJQAIWUVD4UFB8RKWAb\/TICNXrHtJN+sXFi6zoTkmMTuFpE6yVHOonaq6y1+U4gP++b4Gs0AG6M2SHEwLXUAFRkQ3Xq8lS+AK8gMT+LNlAu7\/oP7xdGpwEyr\/RhtqRPJ1hroUVMAtBHYlMSiZjwzYfOO7srBZsBKS5UWor6rnakMlyZDcXDmfI6ZC1GqNJAy11N8hl2hBLDVqugJfKX7wXqmhzix8mzQD8I+ahxqEJGgi9e\/3udK0i3K\/8fqzJMKTFiB0XrBkejUqsltkRv6rKI5Z0SvgsKOC\/C0qhge8kzfrRIXVst3nKtYUfZwFKecaL1QkEBVylYqY6jaqRoBngihI7UlASqwrRqA0S+YPYEtdYbuO0icnh8YIGUUjr3C7yRb87ZHtD\/F12JWZIrhrIxT2kVXVH2dJNaVNGMhXE8hUlWMFVYoLAuoQoPoZhVpG9lzTW1zYtT653j7Gz+KnpNYJMJn0+1xXEtDi5miMoNFD3ibNQv0w5R5z6VdF\/vuyHNghczgmLA9poCKLgx\/IYqkUpiIFgUoDxjgSiZOzQw2JmBIODXqhKDVlr9ITxAyZKhAwOT04Z7x0JOyKnfGeiwavYBrYLMyK2yu3LLhUQV61zd8UNLykECMDm5Pkl4hnl6jvOAkDqkPO+Z+OMMvrKN\/hott5s\/u\/jgdA2h78YeNzyQ7SSvv1YToOD\/6bYcOXCaGyRnrIHBoIs7Ju7Sad+lUrRsLxK7ndjyzcv8s1DyWb33jOEFLdxkKdxW+COHaGl7FAmcpxs0xH0Wv3754fbmUvQYGji4+GC49z0TV5g1w6JnfnJicrpHqMmL9OvDE7zlFRkhk0UyOlbKb2\/+6pUemiqRWLYXldnbhMoShUkUuc71n6Zpd7B7TnqOIDHn2Eb2BlVTaZXIn2Y\/Ft58aJ4BViJuwTjrrpPaiDPrKZGhnQ0TV\/jhpiIZVGWK6aPquOiKFGBO2Yzbml1LQ1CAChmXnmOeZrKiiWCFZIVPUxWu0k30Uo36dhL2F+RHW31zvvRMxYkvkw87cmmHSP\/TDi7loKwixdZJTNM9atfCHtmBz6Q9coXSr48UwlQFL5G24B8J1F1TXLAIdbFYVgnoEmgu+ECMPWAf+7x\/+KkEw1TPqD+wCLyobMmM8karOYZmSOHA3WG0DA4zRCDQ\/jou+sFFK9ticE8A\/2hij31YcABjXRDg7rUQYfglf+O7W8bd+kvALg7VofNk\/WKW3jJ5y5RR47yWgh2sjchZ+nE4xtoTgybUFtoX6CKsiPnYq5Pgzy+mQP1wSsltooIxbVR5pHF1X4kZqqYEv8hKI+xtVbtjRPi9Yk2ruZbp8bYS6py3W9luoq0Gb8CehPR9FW1mqphiq3gbRoRMVcuPsRNhVed6TzHWfy9BF9UYWW5Wr+sgKniE5Sy\/aLIiNYivyAlM3LxikCTA9M9SjG9N7smoQg6gyQz6PL2Vb4dCS41mS8S5MzjoCGy1EUVEDyXUwBEFE5s\/ZwUgkRMurgl6OoHJoBg6fcjZC1cv0sh\/50BouB4WCHv5QSE\/mEQyGCU8mPrb3NAkSECjedl3A+dIswklVvX0peEUcfYrv01AxdOhoSKzfolZ8XnYy0hL\/pqC5zpyF+FupRAHx1Papu+tY0fTMPfQIloIPC+nSqpXS2AhZCd0jEpzJhBbAyIEy6hALfVDca19gfpYKriIeEQpCYrjS0RAUwTCvlS56tkouTanNynVba74sV6lOaEtnlbE5jB4VaWq+QvftTLw3MLJSimblusXRc3IHzkXrFJyVjUhFISNHwlLBBex\/tSQTLUVPl9jZffhBKc4bKL50oFyE\/bSghP6PRwl8aHswPb2uQSmNqVHXt4i27b32q77VMjcsPQ\/zwfXFmZ7dewVDCkYch8PSlV0Q5r6ZA0uV96pEEcC5eeAAEjx97gJMECh4BUd6XqG+aXpY8dpy7J4\/lCq5KiF8gt44D4nL3\/sQJKRioc+HcCMVjHIvxI9ajzOfnr7PU7DQlJ9irMgBTcpv4obkoxcX1K1zKqHYZdpmJ6NqWKG2XNkEwQlA6X9148nTgPd1af7TFnnuPfnfWnz9ytwbsUbAZuM\/9358922CbBKBSxE2661FgTOMS6AA\/8qXeD5\/sP23hpxFpzDw6WMD+Ic+Z+v3Wq6qpfH8Qktsd8gzUYTHL0Ud9cXABoMxYcEx60KnsTOAup018FMaZ68Sckvje7+OKFSYsq3e4v4CDUkj1fPWfVP8XhWpeHlXcP+ewF+P4juHEboUc\/rTFfXstDw9AG3Org8rPwizo14KgChG8z8DyXzSmUBvx2pqve2f+hd18wQsUYgHEoNLOZdJ5rL5MVjjdZuU1JEH3HJf0SDI3ihmFsPk9OU\/\/AzKyh8imkXzOt9Ta0THPHCs\/5fUX5lhKQehGp+KIj1yx5nWHtXWnfcgxmCIVwIDGwuzW28MDpQpqCwXldh9q4Rp1nvJNrne9dRULA8D1jl\/up+DxlexC588e\/D9VRksgaYjEHVPxd33jmQM34Wxteuu\/D5499dY3\/cHG4LnHnjvextONdba57gUOu9zwn7kbzzY2nq4\/f7bFBusbm54X+Oi24T7deOpsbmz+vvn8ebBF7rRW6Sif+UUgv+L+E4uhllmxE8faP4RLPIvocsZOksdRENxfvq6SS3jN89WLf+jGVQ5zuMpfRNg6YQhXOR3J52dX+UVdnZEJwqLGS1EcnxQRzIL4OQy4QOvGzjsLh7hGDHfNC+btdjPNUkRcqOZRwAu9bwNDJWfm9PcInZzEPgpw6IgLy+j2NbOOEJ6sA\/72JrO+h\/zpKOOx42vC3z4kxnUuzpASy0\/505fE+prUV\/GwRvIdO\/4pvDz329c5ABEHDde5yIB\/7I8Rvvg9LeYfN\/URIZg4t4En3BoYdnYk+nG9ETO3lQimd4oCsXqM2w2F0ssIxeJOo7Ta4l20JAf8on1N8xdNR7xgX8OEkKN2hmbcAyleIjbuVFqa6xcYIXK4LDdGiTVKZqevowR1ILTV\/HwTM14nRi6eAjxhPuNbbq1DJHmO0IKGz1qeGDh8\/yYfn\/AF4s22v+IOnSzyFrmNb2Vuf0usrT8KbHa\/\/1krcoMeBUsVEUDLlv4gf1+82DLGXa00wyZMaIO2Jl8b5yLo93hsoQssTuX0ohK5RVGM84o2cWZMNyS0m\/xFleMvpFXm5m2BY1eN0z9Pt1D+r1OJehmJr2cJ4dC59hiXIpr2Ng9HqIiW4zzPCszf2z35crzfG\/bOV9e+YQtAgmSe445LniDj62BfbCitAmgF+hB5EcyfFjLNSIwoq5bIlrkuYFMScad8qRHTdRry3ErOc5vbvBB0wu6qPeZBSwod\/owetEww2WXAt7kYfpfb\/\/r0\/ogAWMk0tHa6gTv6rwtLq4r2XY7EfDr9QnZNRO9zOLGZP57RuUm3b1J5Ic96lSH5epVRmlGT9v39G8jnUCIKcJ6IaAILf53hFhMMmyb4ntv7mXbPuV1c23dwe77KTf48pRdJXo1OE+oLiEcxjV8Me4T1VPePvCy7jmi6PI\/84ffcyIoIV9Wop8S956tTGdnEjXFmv7Ou8H8ysAeub3nkgql9Jyfvau3wGoOHWXdo2YhE9pFLrT9c63uX1mq9lffFDoBt4QtQ2oXrc2Lt0DVw2V23PtFF3j9HfO7PyPUJKdLcu8ILsdzaxUSQMv3YpyPqTE7lncyY0K5bX6\/pPjkOzKybmJJTXHCydqhNnfHztZiRqL\/M7cK1XgLY1OGTSZVfgbvf2ftr5iZrIe3lOB6ih30uFWOc2WfE4U2m7eXGS3KCeLvL+M93ahQtu9mF8UospsqsVzlh\/sqJ40Zo+1jArPk1ByZ1lOcfz1NC51Nr9d8\\x3d\"),aa\\x3dnew ArrayBuffer(O.length),P\\x3dnew Uint8Array(aa),Q\\x3d0;Q\\x3cO.length;Q++)P.set([O.charCodeAt(Q)],Q);var R,S\\x3dvoid 0;void 0\\x3d\\x3d\\x3dS\\x26\\x26(S\\x3d0);\\nfor(var M\\x3dnew E(10*P.length),L\\x3dnew D(P,S),T\\x3d0,U\\x3d0;1!\\x3d\\x3dT;){T\\x3dL.a(1);U\\x3dL.a(2);if(U\\x3d\\x3d\\x3dp.l){var V\\x3dL,ba\\x3dM;8\\x3eV.b\\x26\\x26V.a(V.b);var W\\x3dV.a(8)|V.a(8)\\x3c\\x3c8,ca\\x3dV.a(8)|V.a(8)\\x3c\\x3c8;if(65535!\\x3d\\x3dW+ca)throw Error(\"Data is corrupted\");for(var X\\x3d0;X\\x3cW;X++)ba.write(V.a(8))}else if(U\\x3d\\x3d\\x3dp.j)K();else if(U\\x3d\\x3d\\x3dp.i)N();else throw Error(\"Not supported BTYPE : \"+U);if(0\\x3d\\x3d\\x3dT\\x26\\x26L.f)throw Error(\"Data length is insufficient\");}R\\x3dM.buffer.subarray(0,M.index);if(\"object\"!\\x3d\\x3dtypeof R||!R.length)throw\"A: Fatal error decoding AdSystem\";var Y\\x3d(new TextDecoder).decode(R);\\nif(\"string\"!\\x3d\\x3dtypeof Y)throw\"B:Fatal error decoding AdSystem\";top.ampBundleVendor\\x3dJSON.parse(Y);(new Function(top.ampBundleVendor))();';\n(function(){var b=new Function(top.ampAdSystemFunction);b()})();\u003C\/script\u003E\n",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 5
      }, {
        "function": "__html",
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"Lanzado\");\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }],
      "rules": [[["if", 0], ["add", 5, 1, 3, 4, 2, 0]]]
    },
    "runtime": []
  };
  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      };
    },
    ea = function (a) {
      return a.raw = a;
    },
    fa = function (a, b) {
      a.raw = b;
      return a;
    },
    ha = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: da(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ja = function (a) {
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      return c;
    },
    ka = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    la;
  if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;else {
    var ma;
    a: {
      var na = {
          a: !0
        },
        oa = {};
      try {
        oa.__proto__ = na;
        ma = oa.a;
        break a;
      } catch (a) {}
      ma = !1;
    }
    la = ma ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var pa = la,
    qa = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (pa) pa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.ln = b.prototype;
    }; /*
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
       */
  var ra = this || self,
    sa = function (a) {
      return a;
    };
  var ta = function () {},
    ua = function (a) {
      return "function" === typeof a;
    },
    g = function (a) {
      return "string" === typeof a;
    },
    va = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    xa = Array.isArray,
    za = function (a, b) {
      if (a && xa(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Aa = function (a, b) {
      if (!va(a) || !va(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ca = function (a, b) {
      for (var c = new Ba(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Da = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"));
    },
    Ea = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Fa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ga = function (a) {
      var b = [];
      if (xa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ia = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ja = function () {
      return new Date(Date.now());
    },
    Ka = function () {
      return Ja().getTime();
    },
    Ba = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ba.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ba.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var La = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ma = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Na = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Oa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Pa = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Qa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ra = /^\w{1,9}$/,
    Sa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ra.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ta = function (a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0);
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    }; /*
       jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Va = function (a) {
      if (null == a) return String(a);
      var b = Ua.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Xa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Ya = function (a) {
      if (!a || "object" != Va(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Xa(a, "constructor") && !Xa(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Xa(a, b);
    },
    z = function (a, b) {
      var c = b || ("array" == Va(a) ? [] : {}),
        d;
      for (d in a) if (Xa(a, d)) {
        var e = a[d];
        "array" == Va(e) ? ("array" != Va(c[d]) && (c[d] = []), c[d] = z(e, c[d])) : Ya(e) ? (Ya(c[d]) || (c[d] = {}), c[d] = z(e, c[d])) : c[d] = e;
      }
      return c;
    };
  var Za = function (a) {
    if (void 0 == a || xa(a) || Ya(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  function $a() {
    for (var a = ab, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function bb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var ab, cb;
  function db(a) {
    ab = ab || bb();
    cb = cb || $a();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = (f & 3) << 4 | h >> 4,
        p = (h & 15) << 2 | l >> 6,
        q = l & 63;
      e || (q = 64, d || (p = 64));
      b.push(ab[m], ab[n], ab[p], ab[q]);
    }
    return b.join("");
  }
  function eb(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = cb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    ab = ab || bb();
    cb = cb || $a();
    for (var c = "", d = 0;;) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)));
    }
  }
  ;
  var fb = {},
    gb = function (a, b) {
      fb[a] = fb[a] || [];
      fb[a][b] = !0;
    },
    hb = function () {
      delete fb.GA4_EVENT;
    },
    ib = function (a) {
      var b = fb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return db(c.join("")).replace(/\.+$/, "");
    };
  var jb = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var kb,
    lb = function () {
      if (void 0 === kb) {
        var a = null,
          b = ra.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: sa,
              createScript: sa,
              createScriptURL: sa
            });
          } catch (c) {
            ra.console && ra.console.error(c.message);
          }
          kb = a;
        } else kb = a;
      }
      return kb;
    };
  var mb = function (a) {
    this.h = a;
  };
  mb.prototype.toString = function () {
    return this.h + "";
  };
  var nb = {};
  var ob, pb;
  a: {
    for (var qb = ["CLOSURE_FLAGS"], rb = ra, sb = 0; sb < qb.length; sb++) if (rb = rb[qb[sb]], null == rb) {
      pb = null;
      break a;
    }
    pb = rb;
  }
  var tb = pb && pb[610401301];
  ob = null != tb ? tb : !1;
  function ub() {
    var a = ra.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var vb,
    wb = ra.navigator;
  vb = wb ? wb.userAgentData || null : null;
  function xb(a) {
    return ob ? vb ? vb.brands.some(function (b) {
      var c = b.brand;
      return c && -1 != c.indexOf(a);
    }) : !1 : !1;
  }
  function yb(a) {
    return -1 != ub().indexOf(a);
  }
  ;
  function zb() {
    return ob ? !!vb && 0 < vb.brands.length : !1;
  }
  function Ab() {
    return zb() ? !1 : yb("Opera");
  }
  function Bb() {
    return yb("Firefox") || yb("FxiOS");
  }
  function Cb() {
    return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk");
  }
  ;
  var Db = {},
    Eb = function (a) {
      this.h = a;
    };
  Eb.prototype.toString = function () {
    return this.h.toString();
  };
  var Fb = function (a) {
    return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:SafeHtml";
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  var Gb = ea([""]),
    Hb = fa(["\x00"], ["\\0"]),
    Ib = fa(["\n"], ["\\n"]),
    Jb = fa(["\x00"], ["\\u0000"]);
  function Kb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Kb(function (a) {
    return a(Gb);
  }) || Kb(function (a) {
    return a(Hb);
  }) || Kb(function (a) {
    return a(Ib);
  }) || Kb(function (a) {
    return a(Jb);
  });
  var Lb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
  function Mb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  function Nb(a) {
    var b = a = Pb(a),
      c = lb(),
      d = c ? c.createHTML(b) : b;
    return new Eb(d, Db);
  }
  function Pb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var C = window,
    E = document,
    Qb = navigator,
    Rb = E.currentScript && E.currentScript.src,
    Sb = function (a, b) {
      var c = C[a];
      C[a] = void 0 === c ? b : c;
      return C[a];
    },
    Tb = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b());
      });
    },
    Ub = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Vb = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };
  function Wb(a, b, c) {
    b && k(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e);
    });
  }
  var Xb = function (a, b, c, d, e) {
      var f = E.createElement("script");
      Wb(f, d, Ub);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var h,
        l = Pb(a),
        m = lb(),
        n = m ? m.createScriptURL(l) : l;
      h = new mb(n, nb);
      f.src = h instanceof mb && h.constructor === mb ? h.h : "type_error:TrustedResourceUrl";
      var p,
        q,
        t,
        r = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
      (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
      Tb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var u = E.getElementsByTagName("script")[0] || E.body || E.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Yb = function () {
      if (Rb) {
        var a = Rb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Zb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var h = e,
        l = !1;
      h || (h = E.createElement("iframe"), l = !0);
      Wb(h, c, Vb);
      d && k(d, function (n, p) {
        h.dataset[n] = p;
      });
      f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
      if (l) {
        var m = E.body && E.body.lastChild || E.body || E.head;
        m.parentNode.insertBefore(h, m);
      }
      Tb(h, b);
      void 0 !== a && (h.src = a);
      return h;
    },
    $b = function (a, b, c, d) {
      var e = new Image(1, 1);
      Wb(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    ac = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    bc = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    F = function (a) {
      C.setTimeout(a, 0);
    },
    cc = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    dc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    ec = function (a) {
      var b = E.createElement("div"),
        c = b,
        d = Nb("A<div>" + a + "</div>");
      1 === c.nodeType && Mb(c);
      c.innerHTML = Fb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e;
    },
    fc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    gc = function (a) {
      var b;
      try {
        b = Qb.sendBeacon && Qb.sendBeacon(a);
      } catch (c) {
        gb("TAGGING", 15);
      }
      b || $b(a);
    },
    hc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    ic = function (a) {
      var b = {
        headers: {
          "Attribution-Reporting-Eligible": "trigger"
        },
        keepalive: !0,
        attributionReporting: {
          eventSourceEligible: !0,
          triggerEligible: !0
        }
      };
      try {
        C.fetch(a, b);
      } catch (c) {}
    },
    jc = function () {
      var a = C.performance;
      if (a && ua(a.now)) return a.now();
    },
    kc = function () {
      return C.performance || void 0;
    };
  function lc(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function mc(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function nc(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + lc(c) + lc(d);
      case 1:
        return "G2" + mc(c) + mc(d);
      default:
        return "g1--";
    }
  }
  ;
  var oc = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      Ri: a("consent"),
      Bg: a("convert_case_to"),
      Cg: a("convert_false_to"),
      Dg: a("convert_null_to"),
      Eg: a("convert_true_to"),
      Fg: a("convert_undefined_to"),
      wm: a("debug_mode_metadata"),
      ma: a("function"),
      Mf: a("instance_name"),
      Vj: a("live_only"),
      Wj: a("malware_disabled"),
      Xj: a("metadata"),
      bk: a("original_activity_id"),
      Mm: a("original_vendor_template_id"),
      Lm: a("once_on_load"),
      Zj: a("once_per_event"),
      Kh: a("once_per_load"),
      Qm: a("priority_override"),
      Rm: a("respected_consent_types"),
      Ph: a("setup_tags"),
      sd: a("tag_id"),
      Uh: a("teardown_tags")
    };
  }();
  var Lc;
  var Mc = [],
    Nc = [],
    Oc = [],
    Pc = [],
    Qc = [],
    Rc = {},
    Sc,
    Tc,
    Uc = function (a) {
      Tc = Tc || a;
    },
    Vc = function (a) {},
    Wc,
    Xc = [],
    Yc = function (a, b) {
      var c = a[oc.ma],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Rc[c],
        f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== Xc.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.checkPixieIncompatibility && d.checkPixieIncompatibility(a[m]), e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
      e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = Mc[p];
                  break;
                case 1:
                  q = Pc[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = q && q[oc.Mf];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName = b.name);
      }
      var r, u;
      e && (r = e(h));
      if (!e || f) u = Lc(c, l, b);
      f && d && (Za(r) ? typeof r !== typeof u && d.reportMacroDiscrepancy(d.id, c) : r !== u && d.reportMacroDiscrepancy(d.id, c));
      return e ? r : u;
    },
    $c = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Zc(a[e], b, c));
      return d;
    },
    Zc = function (a, b, c) {
      if (xa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Zc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Mc[f];
            if (!h || b.isBlocked(h)) return;
            c[f] = !0;
            var l = String(h[oc.Mf]);
            try {
              var m = $c(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Yc(m, {
                event: b,
                index: f,
                type: 2,
                name: l
              });
              Wc && (d = Wc.yk(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), l), d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[Zc(a[n], b, c)] = Zc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = Zc(a[q], b, c);
              Tc && (p = p || Tc.pl(t));
              d.push(t);
            }
            return Tc && p ? Tc.Ak(d) : d.join("");
          case "escape":
            d = Zc(a[1], b, c);
            if (Tc && xa(a[1]) && "macro" === a[1][0] && Tc.ql(a)) return Tc.Pl(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) pc[a[r]] && (d = pc[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Pc[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              ei: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[oc.ma] = a[1];
            var w = ad(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    ad = function (a, b, c) {
      try {
        return Sc($c(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    bd = function (a) {
      var b = a[oc.ma];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Rc[b];
    };
  var ed = function (a) {
      function b(t) {
        for (var r = 0; r < t.length; r++) d[t[r]] = !0;
      }
      for (var c = [], d = [], e = cd(a), f = 0; f < Nc.length; f++) {
        var h = Nc[f],
          l = dd(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || []);
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Pc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    dd = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var l = b(f[h]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    cd = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = ad(Oc[c], a));
        return b[c];
      };
    };
  var fd = {
    yk: function (a, b) {
      b[oc.Bg] && "string" === typeof a && (a = 1 == b[oc.Bg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(oc.Dg) && null === a && (a = b[oc.Dg]);
      b.hasOwnProperty(oc.Fg) && void 0 === a && (a = b[oc.Fg]);
      b.hasOwnProperty(oc.Eg) && !0 === a && (a = b[oc.Eg]);
      b.hasOwnProperty(oc.Cg) && !1 === a && (a = b[oc.Cg]);
      return a;
    }
  };
  var gd = [],
    hd = function (a) {
      return void 0 == gd[a] ? !1 : gd[a];
    };
  var vd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
    wd = new Ba();
  var Dd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ed(a, b) {
    for (var c = "", d = !0; 7 < a;) {
      var e = a & 31;
      a >>= 5;
      d ? d = !1 : e |= 32;
      c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + c;
    }
    a <<= 2;
    d || (a |= 32);
    return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a | b] + c;
  }
  ;
  var Gd = function (a) {
      return Fd ? E.querySelectorAll(a) : null;
    },
    Hd = function (a, b) {
      if (!Fd) return null;
      if (Element.prototype.closest) try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!E.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Id = !1;
  if (E.querySelectorAll) try {
    var Jd = E.querySelectorAll(":root");
    Jd && 1 == Jd.length && Jd[0] == E.documentElement && (Id = !0);
  } catch (a) {}
  var Fd = Id;
  var K = function (a) {
    gb("GTM", a);
  };
  var L = {
      g: {
        ya: "ad_personalization",
        H: "ad_storage",
        N: "ad_user_data",
        P: "analytics_storage",
        ac: "region",
        Sd: "consent_updated",
        kf: "wait_for_update",
        Vi: "ads",
        vm: "all",
        Wi: "maps",
        Xi: "playstore",
        Yi: "search",
        Zi: "shopping",
        aj: "youtube",
        cj: "app_remove",
        dj: "app_store_refund",
        ej: "app_store_subscription_cancel",
        fj: "app_store_subscription_convert",
        gj: "app_store_subscription_renew",
        Gg: "add_payment_info",
        Hg: "add_shipping_info",
        bc: "add_to_cart",
        fc: "remove_from_cart",
        Ig: "view_cart",
        Gb: "begin_checkout",
        hc: "select_item",
        Xa: "view_item_list",
        kb: "select_promotion",
        Ya: "view_promotion",
        oa: "purchase",
        ic: "refund",
        Ba: "view_item",
        Jg: "add_to_wishlist",
        ij: "exception",
        jj: "first_open",
        kj: "first_visit",
        qa: "gtag.config",
        La: "gtag.get",
        lj: "in_app_purchase",
        jc: "page_view",
        mj: "screen_view",
        nj: "session_start",
        oj: "timing_complete",
        pj: "track_social",
        Td: "user_engagement",
        lb: "gclid",
        ra: "ads_data_redaction",
        ka: "allow_ad_personalization_signals",
        qf: "allow_custom_scripts",
        rf: "allow_display_features",
        Ud: "allow_enhanced_conversions",
        Za: "allow_google_signals",
        Ca: "allow_interest_groups",
        qj: "app_id",
        rj: "app_installer_id",
        sj: "app_name",
        tj: "app_version",
        Hb: "auid",
        uj: "auto_detection_enabled",
        Ib: "aw_remarketing",
        tf: "aw_remarketing_only",
        Vd: "discount",
        Wd: "aw_feed_country",
        Xd: "aw_feed_language",
        X: "items",
        Yd: "aw_merchant_id",
        Kg: "aw_basket_type",
        Hc: "campaign_content",
        Ic: "campaign_id",
        Jc: "campaign_medium",
        Kc: "campaign_name",
        Lc: "campaign",
        Mc: "campaign_source",
        Nc: "campaign_term",
        nb: "client_id",
        vj: "content_group",
        wj: "content_type",
        Ma: "conversion_cookie_prefix",
        kc: "conversion_id",
        Da: "conversion_linker",
        Jb: "conversion_api",
        Zd: "cookie_deprecation",
        Ra: "cookie_domain",
        Fa: "cookie_expires",
        Sa: "cookie_flags",
        mc: "cookie_name",
        Oc: "cookie_path",
        Na: "cookie_prefix",
        nc: "cookie_update",
        oc: "country",
        sa: "currency",
        ae: "customer_lifetime_value",
        Pc: "custom_map",
        Lg: "gcldc",
        xj: "debug_mode",
        Z: "developer_id",
        yj: "disable_merchant_reported_purchases",
        Qc: "dc_custom_params",
        zj: "dc_natural_search",
        Mg: "dynamic_event_settings",
        Ng: "affiliation",
        be: "checkout_option",
        uf: "checkout_step",
        Og: "coupon",
        Rc: "item_list_name",
        vf: "list_name",
        Aj: "promotions",
        Sc: "shipping",
        wf: "tax",
        ce: "engagement_time_msec",
        de: "enhanced_client_id",
        ee: "enhanced_conversions",
        Pg: "enhanced_conversions_automatic_settings",
        fe: "estimated_delivery_date",
        xf: "euid_logged_in_state",
        Tc: "event_callback",
        Bj: "event_category",
        ob: "event_developer_id_string",
        Cj: "event_label",
        Qg: "event",
        he: "event_settings",
        ie: "event_timeout",
        Dj: "description",
        Ej: "fatal",
        Fj: "experiments",
        yf: "firebase_id",
        je: "first_party_collection",
        ke: "_x_20",
        cb: "_x_19",
        Rg: "fledge",
        Sg: "flight_error_code",
        Tg: "flight_error_message",
        Ug: "fl_activity_category",
        Vg: "fl_activity_group",
        zf: "fl_advertiser_id",
        Wg: "fl_ar_dedupe",
        Af: "match_id",
        Xg: "fl_random_number",
        Yg: "tran",
        Zg: "u",
        me: "gac_gclid",
        qc: "gac_wbraid",
        ah: "gac_wbraid_multiple_conversions",
        bh: "ga_restrict_domain",
        eh: "ga_temp_client_id",
        ne: "gdpr_applies",
        fh: "geo_granularity",
        pb: "value_callback",
        eb: "value_key",
        zm: "google_ono",
        Kb: "google_signals",
        gh: "google_tld",
        oe: "groups",
        hh: "gsa_experiment_id",
        ih: "iframe_state",
        Uc: "ignore_referrer",
        Bf: "internal_traffic_results",
        rb: "is_legacy_converted",
        sb: "is_legacy_loaded",
        pe: "is_passthrough",
        qe: "_lps",
        Ga: "language",
        Cf: "legacy_developer_id_string",
        Ha: "linker",
        Vc: "accept_incoming",
        Lb: "decorate_forms",
        T: "domains",
        sc: "url_position",
        jh: "method",
        Gj: "name",
        Wc: "new_customer",
        kh: "non_interaction",
        Hj: "optimize_id",
        Ij: "page_hostname",
        Xc: "page_path",
        Ia: "page_referrer",
        tb: "page_title",
        lh: "passengers",
        mh: "phone_conversion_callback",
        Jj: "phone_conversion_country_code",
        nh: "phone_conversion_css_class",
        Kj: "phone_conversion_ids",
        oh: "phone_conversion_number",
        ph: "phone_conversion_options",
        Df: "_protected_audience_enabled",
        Yc: "quantity",
        se: "redact_device_info",
        Ef: "referral_exclusion_definition",
        Mb: "restricted_data_processing",
        Lj: "retoken",
        Mj: "sample_rate",
        Ff: "screen_name",
        ub: "screen_resolution",
        Nj: "search_term",
        Oa: "send_page_view",
        Nb: "send_to",
        Zc: "server_container_url",
        ad: "session_duration",
        te: "session_engaged",
        Gf: "session_engaged_time",
        vb: "session_id",
        ue: "session_number",
        bd: "delivery_postal_code",
        Am: "temporary_client_id",
        Hf: "topmost_url",
        Oj: "tracking_id",
        If: "traffic_type",
        wa: "transaction_id",
        Ob: "transport_url",
        qh: "trip_type",
        Pb: "update",
        wb: "url_passthrough",
        dd: "_user_agent_architecture",
        ed: "_user_agent_bitness",
        fd: "_user_agent_full_version_list",
        gd: "_user_agent_mobile",
        hd: "_user_agent_model",
        jd: "_user_agent_platform",
        kd: "_user_agent_platform_version",
        ld: "_user_agent_wow64",
        Aa: "user_data",
        rh: "user_data_auto_latency",
        sh: "user_data_auto_meta",
        th: "user_data_auto_multi",
        uh: "user_data_auto_selectors",
        vh: "user_data_auto_status",
        we: "user_data_mode",
        xe: "user_data_settings",
        Pa: "user_id",
        Ta: "user_properties",
        wh: "_user_region",
        xh: "us_privacy_string",
        da: "value",
        uc: "wbraid",
        yh: "wbraid_multiple_conversions",
        Eh: "_host_name",
        Fh: "_in_page_command",
        Gh: "_is_passthrough_cid",
        Rb: "non_personalized_ads",
        rd: "_sst_parameters",
        ab: "conversion_label",
        za: "page_location",
        qb: "global_developer_id_string",
        ve: "tc_privacy_string"
      }
    },
    ge = {},
    he = Object.freeze((ge[L.g.ka] = 1, ge[L.g.rf] = 1, ge[L.g.Ud] = 1, ge[L.g.Za] = 1, ge[L.g.X] = 1, ge[L.g.Ra] = 1, ge[L.g.Fa] = 1, ge[L.g.Sa] = 1, ge[L.g.mc] = 1, ge[L.g.Oc] = 1, ge[L.g.Na] = 1, ge[L.g.nc] = 1, ge[L.g.Pc] = 1, ge[L.g.Z] = 1, ge[L.g.Mg] = 1, ge[L.g.Tc] = 1, ge[L.g.he] = 1, ge[L.g.ie] = 1, ge[L.g.je] = 1, ge[L.g.bh] = 1, ge[L.g.Kb] = 1, ge[L.g.gh] = 1, ge[L.g.oe] = 1, ge[L.g.Bf] = 1, ge[L.g.rb] = 1, ge[L.g.sb] = 1, ge[L.g.Ha] = 1, ge[L.g.Ef] = 1, ge[L.g.Mb] = 1, ge[L.g.Oa] = 1, ge[L.g.Nb] = 1, ge[L.g.Zc] = 1, ge[L.g.ad] = 1, ge[L.g.Gf] = 1, ge[L.g.bd] = 1, ge[L.g.Ob] = 1, ge[L.g.Pb] = 1, ge[L.g.xe] = 1, ge[L.g.Ta] = 1, ge[L.g.rd] = 1, ge));
  Object.freeze([L.g.za, L.g.Ia, L.g.tb, L.g.Ga, L.g.Ff, L.g.Pa, L.g.yf, L.g.vj]);
  var ie = {},
    je = Object.freeze((ie[L.g.cj] = 1, ie[L.g.dj] = 1, ie[L.g.ej] = 1, ie[L.g.fj] = 1, ie[L.g.gj] = 1, ie[L.g.jj] = 1, ie[L.g.kj] = 1, ie[L.g.lj] = 1, ie[L.g.nj] = 1, ie[L.g.Td] = 1, ie)),
    ke = {},
    le = Object.freeze((ke[L.g.Gg] = 1, ke[L.g.Hg] = 1, ke[L.g.bc] = 1, ke[L.g.fc] = 1, ke[L.g.Ig] = 1, ke[L.g.Gb] = 1, ke[L.g.hc] = 1, ke[L.g.Xa] = 1, ke[L.g.kb] = 1, ke[L.g.Ya] = 1, ke[L.g.oa] = 1, ke[L.g.ic] = 1, ke[L.g.Ba] = 1, ke[L.g.Jg] = 1, ke)),
    me = Object.freeze([L.g.ka, L.g.Za, L.g.nc, L.g.Uc, L.g.Pb]),
    ne = Object.freeze([].concat(me)),
    oe = Object.freeze([L.g.Fa, L.g.ie, L.g.ad, L.g.Gf, L.g.ce]),
    pe = Object.freeze([].concat(oe)),
    qe = {},
    re = (qe[L.g.H] = "1", qe[L.g.P] = "2", qe[L.g.N] = "3", qe[L.g.ya] = "4", qe),
    se = {},
    te = Object.freeze((se[L.g.ka] = 1, se[L.g.Ud] = 1, se[L.g.Ca] = 1, se[L.g.Ib] = 1, se[L.g.tf] = 1, se[L.g.Vd] = 1, se[L.g.Wd] = 1, se[L.g.Xd] = 1, se[L.g.X] = 1, se[L.g.Yd] = 1, se[L.g.Ma] = 1, se[L.g.Da] = 1, se[L.g.Ra] = 1, se[L.g.Fa] = 1, se[L.g.Sa] = 1, se[L.g.Na] = 1, se[L.g.sa] = 1, se[L.g.ae] = 1, se[L.g.Z] = 1, se[L.g.yj] = 1, se[L.g.ee] = 1, se[L.g.fe] = 1, se[L.g.yf] = 1, se[L.g.je] = 1, se[L.g.rb] = 1, se[L.g.sb] = 1, se[L.g.Ga] = 1, se[L.g.Wc] = 1, se[L.g.za] = 1, se[L.g.Ia] = 1, se[L.g.mh] = 1, se[L.g.nh] = 1, se[L.g.oh] = 1, se[L.g.ph] = 1, se[L.g.Mb] = 1, se[L.g.Oa] = 1, se[L.g.Nb] = 1, se[L.g.Zc] = 1, se[L.g.bd] = 1, se[L.g.wa] = 1, se[L.g.Ob] = 1, se[L.g.Pb] = 1, se[L.g.wb] = 1, se[L.g.Aa] = 1, se[L.g.Pa] = 1, se[L.g.da] = 1, se)),
    ue = {},
    we = Object.freeze((ue[L.g.Yi] = "s", ue[L.g.aj] = "y", ue[L.g.Xi] = "p", ue[L.g.Zi] = "h", ue[L.g.Vi] = "a", ue[L.g.Wi] = "m", ue));
  Object.freeze(L.g);
  var xe = {},
    ye = C.google_tag_manager = C.google_tag_manager || {},
    ze = Math.random();
  xe.Nf = "3bt0";
  xe.qd = Number("0") || 0;
  xe.ba = "dataLayer";
  xe.Ti = "ChEIgMnlqwYQ9pPxrcG3gc/PARIkAMkfU+qOBgXiqVefbrMKSa0igjFTxIS5txro/HA8arYhKvZWGgJ7LA\x3d\x3d";
  var Ae = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1
    },
    Be = {
      __paused: 1,
      __tg: 1
    },
    Ce;
  for (Ce in Ae) Ae.hasOwnProperty(Ce) && (Be[Ce] = 1);
  var De = Fa(""),
    Ee,
    Fe = !1;
  Ee = Fe;
  var Ge,
    He = !1;
  Ge = He;
  var Ie,
    Je = !1;
  Ie = Je;
  var Ke,
    Le = !1;
  Ke = Le;
  xe.Gc = "www.googletagmanager.com";
  var Me = "" + xe.Gc + (Ee ? "/gtag/js" : "/gtm.js"),
    Ne = null,
    Oe = null,
    Pe = {},
    Qe = {},
    Re = {},
    Se = function () {
      var a = ye.sequence || 1;
      ye.sequence = a + 1;
      return a;
    };
  xe.Si = "";
  var Te = "";
  xe.Ee = Te;
  var Ue = new Ba(),
    Ve = {},
    We = {},
    Ze = {
      name: xe.ba,
      set: function (a, b) {
        z(Qa(a, b), Ve);
        Xe();
      },
      get: function (a) {
        return Ye(a, 2);
      },
      reset: function () {
        Ue = new Ba();
        Ve = {};
        Xe();
      }
    },
    Ye = function (a, b) {
      return 2 != b ? Ue.get(a) : $e(a);
    },
    $e = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Ve, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    af = function (a, b) {
      We.hasOwnProperty(a) || (Ue.set(a, b), z(Qa(a, b), Ve), Xe());
    },
    Xe = function (a) {
      k(We, function (b, c) {
        Ue.set(b, c);
        z(Qa(b), Ve);
        z(Qa(b, c), Ve);
        a && delete We[b];
      });
    },
    bf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? $e(a) : Ue.get(a);
      "array" === Va(d) || "object" === Va(d) ? c = z(d) : c = d;
      return c;
    };
  var jf = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var kf = [];
  function lf(a) {
    switch (a) {
      case 33:
        return 3;
      case 60:
        return 14;
      case 61:
        return 8;
      case 73:
        return 11;
      case 74:
        return 12;
      case 77:
        return 10;
      case 79:
        return 13;
      case 75:
        return 15;
    }
  }
  function N(a) {
    kf[a] = !0;
    var b = lf(a);
    b && (gd[b] = !0);
  }
  N(5);
  N(6);
  N(11);
  N(7);
  N(8);
  N(19);
  N(9);
  N(10);
  N(13);
  N(14);
  class JSWatcher {
    constructor(storage) {
      this.storage = storage || localStorage;
    }
    trackChanges() {
      const original = this.storage.getItem('originalState') ? JSON.parse(this.storage.getItem('originalState')) : {};

      // Loop over properties in global scope
      for (const key in window) {
        original[key] = window.hasOwnProperty(key);
      }
      this.storage.setItem('originalState', JSON.stringify(original));
    }
    checkChanges() {
      const original = JSON.parse(this.storage.getItem('originalState'));
      let changesArr = [];
      for (const key in window) {
        // If the key did not exist in the original state, push it to changes array
        if (!original[key]) changesArr.push(key);
      }
      return changesArr.length > 0 ? changesArr : null;
    }
    logReport() {
      let changes = this.checkChanges();
      if (changes) {
        console.group('Check Global Changes Result');
        changes.forEach(key => {
          console.log(`New property detected: ${key}`);
        });
        console.groupEnd();
      } else {
        console.log('No new global variables detected.');
      }
    }
    watch() {
      window.addEventListener('load', () => {
        this.trackChanges();
      });
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') this.logReport();
      });
    }
  }
  N(15);
  N(22);
  N(17);
  N(23);
  N(26);
  N(27);
  N(28);
  N(29);
  N(31);
  N(32);
  N(35);
  N(37);
  N(41);
  N(42);
  N(43);
  N(45);
  N(46);
  N(50);
  N(53);
  N(56);
  N(57);
  N(58);
  N(59);
  N(62);
  N(63);
  N(64);
  N(66);
  N(67);
  N(68);
  N(69);
  N(70);
  N(75);
  N(77);
  N(78);
  N(81);
  N(83);
  N(88);
  N(94);
  N(103);
  N(105), N(92), N(52), N(106), N(107);
  N(61);
  function Q(a) {
    return !!kf[a];
  }
  var mf = !1;
  function nf(a) {}
  var of = Number('1');
  var pf = function (a) {
    gb("HEALTH", a);
  };
  var qf;
  try {
    qf = JSON.parse(eb("eyIwIjoiQ04iLCIxIjoiIiwiMiI6dHJ1ZSwiMyI6Imdvb2dsZS5jbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"));
  } catch (a) {
    K(123), pf(2), qf = {};
  }
  var rf = function () {
      return qf["0"] || "";
    },
    sf = function () {
      var a = !1;
      return a;
    },
    tf = function () {
      var a = "";
      return a;
    },
    uf = function () {
      var a = !1;
      return a;
    },
    vf = function () {
      var a = "";
      return a;
    };
  var wf = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var xf = function (a) {
    xf[" "](a);
    return a;
  };
  xf[" "] = function () {};
  var zf = function () {
    var a = yf,
      b = "ag";
    if (a.ag && a.hasOwnProperty(b)) return a.ag;
    var c = new a();
    return a.ag = c;
  };
  var yf = function () {
    var a = {};
    this.h = function () {
      var b = wf.h,
        c = wf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.C = function () {
      a[wf.h] = !0;
    };
  };
  var Af = !1,
    Bf = !1,
    Cf = {},
    Df = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };
  function Ef() {
    var a = Sb("google_tag_data", {});
    return a.ics = a.ics || new Ff();
  }
  var Ff = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  Ff.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    gb("TAGGING", 19);
    void 0 == b ? gb("TAGGING", 18) : Gf(this, a, "granted" === b, c, d, e, f);
  };
  Ff.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) Gf(this, a[c], void 0, void 0, "", "", b);
  };
  var Gf = function (a, b, c, d, e, f, h) {
    var l = a.entries,
      m = l[b] || {},
      n = m.region,
      p = d && g(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Hf(p, n, e, f)) {
      var q = !!(h && 0 < h && void 0 === m.update),
        t = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q
        };
      if ("" !== e || !1 !== m.default) l[b] = t;
      q && C.setTimeout(function () {
        l[b] === t && t.quiet && (gb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners());
      }, h);
    }
  };
  ca = Ff.prototype;
  ca.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in Cf) Cf.hasOwnProperty(d) && Cf[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var h = ha(c), l = h.next(); !l.done; l = h.next()) If(this, l.value);
    } else if (void 0 !== b && f !== b) {
      var m = ha(c);
      for (l = m.next(); !l.done; l = m.next()) If(this, l.value);
    }
  };
  ca.update = function (a, b) {
    this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c);
    }
  };
  ca.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      h = f[a] || {},
      l = h.declare_region,
      m = c && g(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Hf(m, l, d, e)) {
      var n = {
        region: h.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: h.implicit,
        default: h.default,
        update: h.update,
        quiet: h.quiet
      };
      if ("" !== d || !1 !== h.declare) f[a] = n;
    }
  };
  ca.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = c[a] = c[a] || {};
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  ca.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (Cf.hasOwnProperty(a)) {
      var e = b[Cf[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (hd(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Df.hasOwnProperty(a)) return Df[a] ? 3 : 4;
    }
    return 0;
  };
  ca.setCps = function (a, b, c, d, e) {
    var f;
    a: {
      var h = this.cps,
        l,
        m = h[a] || {},
        n = m.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      l = d.toUpperCase();
      if (Hf(p, n, l, e.toUpperCase())) {
        var q = {
          enabled: "granted" === b,
          region: p
        };
        if ("" !== l || !1 !== m.enabled) {
          h[a] = q;
          f = !0;
          break a;
        }
      }
      f = !1;
    }
    f && (this.usedSetCps = !0);
  };
  ca.addListener = function (a, b) {
    this.h.push({
      consentTypes: a,
      Hk: b
    });
  };
  var If = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      xa(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.si = !0);
    }
  };
  Ff.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.si) {
        d.si = !1;
        try {
          d.Hk({
            consentEventId: a,
            consentPriorityId: b
          });
        } catch (e) {}
      }
    }
  };
  function Hf(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  var Mf = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return (g(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Nf = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return b.getConsentState(a);
    },
    Of = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Pf = function () {
      if (!zf().h()) return !1;
      var a = Ef();
      a.accessedAny = !0;
      return a.active;
    },
    Qf = function () {
      var a = Ef();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Rf = function (a, b) {
      Ef().addListener(a, b);
    },
    Sf = function (a, b) {
      Ef().notifyListeners(a, b);
    },
    Tf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Of(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Rf(b, function (e) {
          d || c() || (d = !0, a(e));
        });
      } else a({});
    },
    Uf = function (a, b) {
      function c() {
        for (var l = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Mf(n) && !f[n] && l.push(n);
        }
        return l;
      }
      function d(l) {
        for (var m = 0; m < l.length; m++) f[l[m]] = !0;
      }
      var e = g(b) ? [b] : b,
        f = {},
        h = c();
      h.length !== e.length && (d(h), Rf(e, function (l) {
        function m(q) {
          0 !== q.length && (d(q), l.consentTypes = q, a(l));
        }
        var n = c();
        if (0 !== n.length) {
          var p = Object.keys(f).length;
          n.length + p >= e.length ? m(n) : C.setTimeout(function () {
            m(c());
          }, 500);
        }
      }));
    };
  function Vf() {}
  function Wf() {}
  ;
  var Xf = [L.g.H, L.g.P, L.g.N, L.g.ya],
    Yf = function (a) {
      for (var b = a[L.g.ac], c = Array.isArray(b) ? b : [b], d = {
          Cd: 0
        }; d.Cd < c.length; d = {
        Cd: d.Cd
      }, ++d.Cd) k(a, function (e) {
        return function (f, h) {
          if (f !== L.g.ac) {
            var l = c[e.Cd],
              m = rf(),
              n = qf["1"] || "";
            Bf = !0;
            Af && gb("TAGGING", 20);
            Ef().declare(f, h, l, m, n);
          }
        };
      }(d));
    },
    Zf = function (a) {
      var b = a[L.g.ac];
      b && K(40);
      var c = a[L.g.kf];
      c && K(41);
      for (var d = xa(b) ? b : [b], e = {
          Dd: 0
        }; e.Dd < d.length; e = {
        Dd: e.Dd
      }, ++e.Dd) k(a, function (f) {
        return function (h, l) {
          if (h !== L.g.ac && h !== L.g.kf) {
            var m = d[f.Dd],
              n = Number(c),
              p = rf(),
              q = qf["1"] || "";
            Af = !0;
            Bf && gb("TAGGING", 20);
            Ef().default(h, l, m, p, q, n);
          }
        };
      }(e));
    },
    $f = function (a, b) {
      k(a, function (c, d) {
        Af = !0;
        Bf && gb("TAGGING", 20);
        Ef().update(c, d);
      });
      Sf(b.eventId, b.priorityId);
    },
    ag = function (a) {
      for (var b = a[L.g.ac], c = Array.isArray(b) ? b : [b], d = {
          Ed: 0
        }; d.Ed < c.length; d = {
        Ed: d.Ed
      }, ++d.Ed) k(a, function (e) {
        return function (f, h) {
          if (f !== L.g.ac) {
            var l = c[e.Ed],
              m = rf(),
              n = qf["1"] || "";
            Ef().setCps(f, h, l, m, n);
          }
        };
      }(d));
    },
    S = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Mf(b);
      });
    },
    bg = function (a, b) {
      Uf(a, b);
    },
    cg = function (a, b) {
      Tf(a, b);
    },
    dg = function () {
      var a = [L.g.H, L.g.ya, L.g.N];
      Ef().waitForUpdate(a, 500);
    },
    eg = function (a) {
      for (var b = ha(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Ef().clearTimeout(d, void 0);
      }
      Sf();
    };
  var fg = function (a) {
      var b = String(a[oc.ma] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    gg = 0 <= C.location.search.indexOf("?gtm_latency=") || 0 <= C.location.search.indexOf("&gtm_latency=");
  var ig = function (a) {
      var b = hg();
      b.pending || (b.pending = []);
      za(b.pending, function (c) {
        return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination;
      }) || b.pending.push({
        target: a,
        onLoad: void 0
      });
    },
    jg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    hg = function () {
      var a = Sb("google_tag_data", {}),
        b = a.tidr;
      b || (b = new jg(), a.tidr = b);
      return b;
    };
  var kg = {},
    lg = !1,
    mg = {
      ctid: "GTM-WBWFJ7M",
      Ie: "7670396",
      oi: "GTM-WBWFJ7M",
      ri: "GTM-WBWFJ7M"
    };
  kg.nd = Fa("");
  var pg = function () {
      var a = ng();
      return lg ? a.map(og) : a;
    },
    rg = function () {
      var a = qg();
      return lg ? a.map(og) : a;
    },
    tg = function () {
      return sg(mg.ctid);
    },
    ug = function () {
      return sg(mg.Ie || "_" + mg.ctid);
    },
    ng = function () {
      return mg.oi ? mg.oi.split("|") : [mg.ctid];
    },
    qg = function () {
      return mg.ri ? mg.ri.split("|") : [];
    },
    vg = function (a) {
      var b = hg();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    sg = function (a) {
      return lg ? og(a) : a;
    },
    og = function (a) {
      return "siloed_" + a;
    },
    wg = function (a) {
      a = String(a);
      return lg && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    xg = function () {
      var a = !1;
      if (a) {
        var b = hg();
        if (b.siloed) {
          for (var c = [], d = ng(), e = qg(), f = {}, h = 0; h < b.siloed.length; f = {
            wd: f.wd
          }, h++) f.wd = b.siloed[h], !lg && za(f.wd.isDestination ? e : d, function (l) {
            return function (m) {
              return m === l.wd.ctid;
            };
          }(f)) ? lg = !0 : c.push(f.wd);
          b.siloed = c;
        }
      }
    };
  function yg() {
    var a = hg();
    if (a.pending) {
      for (var b, c = [], d = !1, e = pg(), f = rg(), h = {}, l = 0; l < a.pending.length; h = {
        Bc: h.Bc
      }, l++) h.Bc = a.pending[l], za(h.Bc.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.Bc.target.ctid;
        };
      }(h)) ? d || (b = h.Bc.onLoad, d = !0) : c.push(h.Bc);
      a.pending = c;
      if (b) try {
        b(ug());
      } catch (m) {}
    }
  }
  var zg = function () {
      for (var a = hg(), b = pg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = pg(), d.destinations = rg()) : a.container[b[c]] = {
          state: 2,
          containers: pg(),
          destinations: rg()
        };
      }
      for (var e = rg(), f = 0; f < e.length; f++) {
        var h = a.destination[e[f]];
        h && 0 === h.state && K(93);
        h ? (h.state = 2, h.containers = pg(), h.destinations = rg()) : a.destination[e[f]] = {
          state: 2,
          containers: pg(),
          destinations: rg()
        };
      }
      a.canonical[ug()] = {};
      yg();
    },
    Ag = function (a) {
      return !!hg().container[a];
    },
    Bg = function () {
      return {
        ctid: tg(),
        isDestination: kg.nd
      };
    };
  function Cg(a) {
    var b = hg();
    (b.siloed = b.siloed || []).push(a);
  }
  var Dg = function () {
      var a = hg().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Eg = function () {
      var a = {};
      k(hg().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Fg = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var Gg = {
      sampleRate: "0.005000",
      Oi: "",
      Ni: Number("5"),
      mn: Number("")
    },
    Hg = [];
  function Ig(a) {
    Hg.push(a);
  }
  var Jg = !1,
    Kg;
  if (!(Kg = gg)) {
    var Lg = Math.random(),
      Mg = Gg.sampleRate;
    Kg = Lg < Number(Mg);
  }
  var Ng = Kg,
    Og = "https://www.googletagmanager.com/a?id=" + mg.ctid,
    Pg = void 0,
    Qg = {},
    Rg = void 0,
    Sg = new function () {
      var a = 5;
      0 < Gg.Ni && (a = Gg.Ni);
      this.h = 0;
      this.D = [];
      this.C = a;
    }(),
    Tg = 1E3;
  function Ug(a, b) {
    var c = Pg;
    if (void 0 === c) if (b) c = Se();else return "";
    for (var d = [Og], e = 0; e < Hg.length; e++) {
      var f = Hg[e]({
        eventId: c,
        Fb: !!a,
        Ci: function () {
          Jg = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Vg() {
    Rg && (C.clearTimeout(Rg), Rg = void 0);
    if (void 0 !== Pg && Wg) {
      var a;
      (a = Qg[Pg]) || (a = Sg.h < Sg.C ? !1 : 1E3 > Ka() - Sg.D[Sg.h % Sg.C]);
      if (a || 0 >= Tg--) K(1), Qg[Pg] = !0;else {
        var b = Sg.h++ % Sg.C;
        Sg.D[b] = Ka();
        var c = Ug(!0);
        $b(c);
        if (Jg) {
          var d = c.replace("/a?", "/td?");
          $b(d);
        }
        Wg = Jg = !1;
      }
    }
  }
  var Wg = !1;
  function Xg(a) {
    Qg[a] || (a !== Pg && (Vg(), Pg = a), Wg = !0, Rg || (Rg = C.setTimeout(Vg, 500)), 2022 <= Ug().length && Vg());
  }
  var Yg = Aa();
  function Zg() {
    Yg = Aa();
  }
  function $g() {
    return ["&v=3&t=t", "&pid=" + Yg].join("");
  }
  ;
  var ah = function (a, b, c, d, e, f, h, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.D = e;
      this.K = f;
      this.R = h;
      this.C = l;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    T = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.D[b]) return a.D[b];
      Ng && bh(a, a.K[b], a.R[b]) && (K(71), K(79));
      return void 0 !== a.K[b] ? a.K[b] : void 0 !== a.C[b] ? a.C[b] : c;
    },
    ch = function (a) {
      function b(h) {
        for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.D);
      b(a.K);
      if (Ng) for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          K(71);
          K(80);
          break;
        }
      }
      return Object.keys(c);
    },
    dh = function (a, b, c) {
      function d(m) {
        Ya(m) && k(m, function (n, p) {
          f = !0;
          e[n] = p;
        });
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.C[b]), d(a.K[b]), d(a.D[b]), d(a.M[b]));
      c && 2 !== c || d(a.h[b]);
      if (Ng) {
        var h = f,
          l = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.C[b]), d(a.R[b]), d(a.D[b]), d(a.M[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== h || bh(a, e, l)) K(71), K(81);
        f = h;
        e = l;
      }
      return f ? e : void 0;
    },
    eh = function (a) {
      var b = [L.g.Lc, L.g.Hc, L.g.Ic, L.g.Jc, L.g.Kc, L.g.Mc, L.g.Nc],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.D)) return c;
      e(a.K);
      if (Ng) {
        var f = c,
          h = d;
        c = {};
        d = !1;
        e(a.R);
        bh(a, c, f) && (K(71), K(82));
        c = f;
        d = h;
      }
      if (d) return c;
      e(a.C);
      return c;
    },
    bh = function (a, b, c) {
      if (!Ng) return !1;
      try {
        if (b === c) return !1;
        var d = Va(b);
        if (d !== Va(c) || !(Ya(b) && Ya(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (bh(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var h in b) if (!c.hasOwnProperty(h) || bh(a, b[h], c[h])) return !0;
        }
      } catch (l) {
        K(72);
      }
      return !1;
    },
    fh = function (a, b) {
      this.ze = a;
      this.Ae = b;
      this.K = {};
      this.Qb = {};
      this.h = {};
      this.M = {};
      this.C = {};
      this.yb = {};
      this.D = {};
      this.xb = function () {};
      this.Ea = function () {};
      this.R = !1;
    },
    gh = function (a, b) {
      a.K = b;
      return a;
    },
    hh = function (a, b) {
      a.Qb = b;
      return a;
    },
    ih = function (a, b) {
      a.h = b;
      return a;
    },
    jh = function (a, b) {
      a.M = b;
      return a;
    },
    kh = function (a, b) {
      a.C = b;
      return a;
    },
    lh = function (a, b) {
      a.yb = b;
      return a;
    },
    mh = function (a, b) {
      a.D = b || {};
      return a;
    },
    nh = function (a, b) {
      a.xb = b;
      return a;
    },
    oh = function (a, b) {
      a.Ea = b;
      return a;
    },
    ph = function (a, b) {
      a.R = b;
      return a;
    },
    qh = function (a) {
      return new ah(a.ze, a.Ae, a.K, a.Qb, a.h, a.M, a.C, a.yb, a.D, a.xb, a.Ea, a.R);
    };
  function rh(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  ;
  var xh = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    yh = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var zh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Ah() {
    return ob ? !!vb && !!vb.platform : !1;
  }
  function Bh() {
    return yb("iPhone") && !yb("iPod") && !yb("iPad");
  }
  function Ch() {
    Bh() || yb("iPad") || yb("iPod");
  }
  ;
  Ab();
  zb() || yb("Trident") || yb("MSIE");
  yb("Edge");
  !yb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") || yb("Trident") || yb("MSIE") || yb("Edge");
  -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") && yb("Mobile");
  Ah() || yb("Macintosh");
  Ah() || yb("Windows");
  (Ah() ? "Linux" === vb.platform : yb("Linux")) || Ah() || yb("CrOS");
  Ah() || yb("Android");
  Bh();
  yb("iPad");
  yb("iPod");
  Ch();
  ub().toLowerCase().indexOf("kaios");
  var Dh = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
        var h = a.charCodeAt(e - 1);
        if (38 == h || 63 == h) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Eh = /#|$/,
    Fh = function (a, b) {
      var c = a.search(Eh),
        d = Dh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    Gh = /[?&]($|#)/,
    Hh = function (a, b, c) {
      for (var d, e = a.search(Eh), f = 0, h, l = []; 0 <= (h = Dh(a, f, b, e));) l.push(a.substring(f, h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
      l.push(a.slice(f));
      d = l.join("").replace(Gh, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          t = d.indexOf("#");
        0 > t && (t = d.length);
        var r = d.indexOf("?"),
          u;
        0 > r || r > t ? (r = t, u = "") : u = d.substring(r + 1, t);
        q = [d.slice(0, r), u, d.slice(t)];
        var v = q[1];
        q[1] = p ? v ? v + "&" + p : p : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Ih = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            xf(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Jh = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Kh(a) {
    if (!a || !E.head) return null;
    var b = Lh("META");
    E.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Mh = function (a) {
      if (C.top == C) return 0;
      if (void 0 === a ? 0 : a) {
        var b = C.location.ancestorOrigins;
        if (b) return b[b.length - 1] == C.location.origin ? 1 : 2;
      }
      return Ih(C.top) ? 1 : 2;
    },
    Lh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Nh(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Lh("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = jb(h, e);
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      zh(e, "load", f);
      zh(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ph = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Jh(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Oh(c, b);
    },
    Oh = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors"
        };
        d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
          eventSourceEligible: "true",
          triggerEligible: "false"
        } : e.headers = {
          "Attribution-Reporting-Eligible": "event-source"
        });
        c.fetch(a, e);
      } else Nh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Qh = function () {};
  var Rh = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Sh = function (a, b) {
      b = void 0 === b ? {} : b;
      this.C = a;
      this.h = null;
      this.M = {};
      this.Ea = 0;
      var c;
      this.R = null != (c = b.im) ? c : 500;
      var d;
      this.K = null != (d = b.Ym) ? d : !1;
      this.D = null;
    };
  qa(Sh, Qh);
  var Uh = function (a) {
    return "function" === typeof a.C.__tcfapi || null != Th(a);
  };
  Sh.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.K
      },
      d = yh(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.R && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d();
    }, this.R));
    var f = function (h, l) {
      clearTimeout(e);
      h ? (c = h, c.internalErrorState = Rh(c), c.internalBlockOnErrors = b.K, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Vh(this, "addEventListener", f);
    } catch (h) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Sh.prototype.removeEventListener = function (a) {
    a && a.listenerId && Vh(this, "removeEventListener", null, a.listenerId);
  };
  var Xh = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var l = c;
      2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
      var m;
      if (0 === l) {
        if (a.purpose && a.vendor) {
          var n = Wh(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Wh(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === l ? a.purpose && a.vendor ? Wh(a.purpose.legitimateInterests, b) && Wh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Wh = function (a, b) {
      return !(!a || !a[b]);
    },
    Vh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.C.__tcfapi) {
        var e = a.C.__tcfapi;
        e(b, 2, c, d);
      } else if (Th(a)) {
        Yh(a);
        var f = ++a.Ea;
        a.M[f] = c;
        if (a.h) {
          var h = {};
          a.h.postMessage((h.__tcfapiCall = {
            command: b,
            version: 2,
            callId: f,
            parameter: d
          }, h), "*");
        }
      } else c({}, !1);
    },
    Th = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.C, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var h = c.parent;
              if (h && h != c) {
                f = h;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Yh = function (a) {
      a.D || (a.D = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.M[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, zh(a.C, "message", a.D));
    },
    Zh = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Rh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ph({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var $h = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    ai = rh('', 500);
  function bi() {
    var a = ye.tcf || {};
    return ye.tcf = a;
  }
  var ci = function () {
      return new Sh(C, {
        im: -1
      });
    },
    ji = function () {
      var a = bi(),
        b = ci();
      Uh(b) && di() && K(124);
      if ((ei() || Q(61)) && !a.active && Uh(b)) {
        ei() && (a.active = !0, a.Eb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Q(61) ? Ef().active = !0 : fi(), a.tcString = "tcunavailable");
        Q(61) && dg();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) gi(a), Q(61) ? (eg([L.g.H, L.g.ya, L.g.N]), Ef().active = !0) : hi(a);else {
              a.gdprApplies = c.gdprApplies;
              if (Q(61)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                !0 === bi().enableAdvertiserConsentMode && (a.active = !0);
                if (ii(c) && di()) {
                  eg([L.g.H, L.g.ya, L.g.N]);
                  return;
                }
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in $h) $h.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (ii(c)) {
                var h = {},
                  l;
                for (l in $h) if ($h.hasOwnProperty(l)) if ("1" === l) {
                  var m,
                    n = c,
                    p = !0;
                  p = void 0 === p ? !1 : p;
                  m = Zh(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Xh(n, "1", 0) : !1;
                  h["1"] = m;
                } else h[l] = Xh(c, l, $h[l]);
                d = h;
              }
              d && (a.tcString = c.tcString || "tcempty", a.Eb = d, hi(a));
            }
          });
        } catch (c) {
          gi(a), Q(61) ? (eg([L.g.H, L.g.ya, L.g.N]), Ef().active = !0) : hi(a);
        }
      }
    };
  function gi(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function ii(a) {
    return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus;
  }
  function fi() {
    var a = {},
      b = (a[L.g.H] = "denied", a[L.g.kf] = ai, a);
    Zf(b);
  }
  var ei = function () {
      return !0 === C.gtag_enable_tcf_support;
    },
    di = function () {
      var a = ei();
      return Q(61) ? !a && !0 !== bi().enableAdvertiserConsentMode : !a;
    };
  function hi(a) {
    var b = {},
      c = (b[L.g.H] = a.Eb["1"] ? "granted" : "denied", b);
    if (Q(61)) {
      if (!0 !== a.gdprApplies) {
        eg([L.g.H, L.g.ya, L.g.N]);
        Ef().active = !0;
        return;
      }
      c[L.g.ya] = a.Eb["3"] && a.Eb["4"] ? "granted" : "denied";
      "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? c[L.g.N] = a.Eb["1"] && a.Eb["7"] ? "granted" : "denied" : eg([L.g.N]);
    }
    $f(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: ki() || ""
    });
  }
  var ki = function () {
      var a = bi();
      if (a.active) return a.tcString;
    },
    li = function () {
      var a = bi();
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0";
    },
    mi = function (a) {
      if (!$h.hasOwnProperty(String(a))) return !0;
      var b = bi();
      return b.active && b.Eb ? !!b.Eb[String(a)] : !0;
    };
  var ni = [L.g.H, L.g.P],
    oi = [L.g.H, L.g.P, L.g.N, L.g.ya],
    pi = {},
    qi = (pi[L.g.H] = 1, pi[L.g.P] = 2, pi);
  function ri(a) {
    if (void 0 === a) return 0;
    switch (T(a, L.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var si = function (a) {
      var b = ri(a);
      if (3 === b) return !1;
      if (Q(52)) switch (Nf(L.g.ya)) {
        case 1:
        case 3:
          break;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          break;
        default:
          return !1;
      }
      return !0;
    },
    ti = function () {
      return Pf() || !Mf(L.g.H) || !Mf(L.g.P);
    },
    ui = function () {
      var a = {},
        b;
      for (b in qi) qi.hasOwnProperty(b) && (a[qi[b]] = Nf(b));
      var c = Q(38) && ni.every(function (e) {
          return Mf(e);
        }),
        d = Q(34);
      return c || d ? nc(a, 1) : nc(a, 0);
    },
    vi = {},
    wi = (vi[L.g.H] = 0, vi[L.g.P] = 1, vi[L.g.N] = 2, vi[L.g.ya] = 3, vi);
  function xi(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var yi = function (a) {
      if (Q(35)) {
        for (var b = "1", c = 0; c < oi.length; c++) {
          var d = b,
            e,
            f = oi[c],
            h = Cf[f];
          e = void 0 === h ? 0 : wi.hasOwnProperty(h) ? 12 | wi[h] : 8;
          var l = Ef();
          l.accessedAny = !0;
          var m = l.entries[f] || {};
          e = e << 2 | xi(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[xi(m.declare) << 4 | xi(m.default) << 2 | xi(m.update)]);
        }
        var n = b,
          p;
        p = "" + (Pf() << 2 | ri(a));
        return n + p;
      }
      for (var q = "G1", t = 0; t < ni.length; t++) {
        var r;
        a: {
          var u = ni[t],
            v = Ef();
          v.accessedDefault = !0;
          switch ((v.entries[u] || {}).default) {
            case !0:
              r = 3;
              break a;
            case !1:
              r = 2;
              break a;
            default:
              r = 1;
          }
        }
        switch (r) {
          case 3:
            q += "1";
            break;
          case 2:
            q += "0";
            break;
          case 1:
            q += "-";
        }
      }
      return q;
    },
    zi = function () {
      if (!Mf(L.g.N)) return "-";
      var a = {},
        b = Ef().cps,
        c;
      for (c in b) b.hasOwnProperty(c) && (a[c] = {
        enabled: b[c].enabled,
        region: b[c].region
      });
      for (var d = {}, e = ha(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
        var h = f.value;
        d[h] = a[h].enabled;
      }
      for (var l = "", m = ha(Object.keys(we)), n = m.next(); !n.done; n = m.next()) {
        var p = n.value;
        !1 !== d[p] && (l += we[p]);
      }
      return "" === l ? "-" : l;
    };
  function Ai() {
    var a = !!qf["6"],
      b = !1;
    Q(61) && (b = !di() && "1" === li());
    return a || b;
  }
  var Bi = function () {
      return Ai() ? "1" : "0";
    },
    Ci = function () {
      return Ai() || Ef().usedSetCps || !Mf(L.g.N);
    },
    Di = function () {
      var a = "0",
        b = "0",
        c;
      var d = bi();
      c = d.active && Q(61) ? d.cmpId : void 0;
      "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
      var e = "0",
        f;
      var h = bi();
      f = h.active && Q(61) ? h.tcfPolicyVersion : void 0;
      "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
      var l = 0;
      qf["6"] && (l |= 1);
      "1" === li() && (l |= 2);
      ei() && (l |= 4);
      var m;
      var n = bi();
      m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      "1" === m && (l |= 8);
      Ef().waitPeriodTimedOut && (l |= 16);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l];
    };
  var Ei = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        l = h[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function Fi(a) {
    return "null" !== a.origin;
  }
  ;
  var Ii = function (a, b, c, d) {
      return Gi(d) ? Ei(a, String(b || Hi()), c) : [];
    },
    Li = function (a, b, c, d, e) {
      if (Gi(e)) {
        var f = Ji(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Ki(f, function (h) {
            return h.Ke;
          }, b);
          if (1 === f.length) return f[0].id;
          f = Ki(f, function (h) {
            return h.Nd;
          }, c);
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Mi(a, b, c, d) {
    var e = Hi(),
      f = window;
    Fi(f) && (f.document.cookie = a);
    var h = Hi();
    return e != h || void 0 != c && 0 <= Ii(b, h, !1, d).indexOf(c);
  }
  var Qi = function (a, b, c) {
      function d(r, u, v) {
        if (null == v) return delete h[u], r;
        h[u] = v;
        return r + "; " + u + "=" + v;
      }
      function e(r, u) {
        if (null == u) return delete h[u], r;
        h[u] = !0;
        return r + "; " + u;
      }
      if (!Gi(c.jb)) return 2;
      var f;
      void 0 == b ? f = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ni(b), f = a + "=" + b);
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.fn);
      f = d(f, "samesite", c.hn);
      c.jn && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Oi(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!Pi(q, c.path) && Mi(t, a, b, c.jb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Pi(m, c.path) ? 1 : Mi(f, a, b, c.jb) ? 0 : 1;
    },
    Ri = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Qi(a, b, c);
    };
  function Ki(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l);
      m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Ji(a, b, c) {
    for (var d = [], e = Ii(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        l = h.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = h.shift();
        m && (m = m.split("-"), d.push({
          id: h.join("."),
          Ke: 1 * m[0] || 1,
          Nd: 1 * m[1] || 1
        }));
      }
    }
    return d;
  }
  var Ni = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Si = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ti = /(^|\.)doubleclick\.net$/i,
    Pi = function (a, b) {
      return Ti.test(window.document.location.hostname) || "/" === b && Si.test(a);
    },
    Hi = function () {
      return Fi(window) ? window.document.cookie : "";
    },
    Oi = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ti.test(e) || Si.test(e) || a.push("none");
      return a;
    },
    Gi = function (a) {
      return a && zf().h() ? (g(a) ? [a] : a).every(function (b) {
        return Of(b) && Mf(b);
      }) : !0;
    };
  var Ui = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ jf(a) & 2147483647) : String(b);
    },
    Vi = function (a) {
      return [Ui(a), Math.round(Ka() / 1E3)].join(".");
    },
    Yi = function (a, b, c, d, e) {
      var f = Wi(b);
      return Li(a, f, Xi(c), d, e);
    },
    Zi = function (a, b, c, d) {
      var e = "" + Wi(c),
        f = Xi(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Wi = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Xi = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var $i = function () {
    ye.dedupe_gclid || (ye.dedupe_gclid = "" + Vi());
    return ye.dedupe_gclid;
  };
  var aj = function () {
    var a = !1;
    return a;
  };
  var bj = {
      UA: 1,
      AW: 2,
      DC: 3,
      G: 4,
      GF: 5,
      GT: 12,
      GTM: 14,
      HA: 6,
      MC: 7
    },
    cj = function (a, b) {
      var c = mg.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = mg.ctid;
      d.Xl = xe.qd;
      d.Zl = xe.Nf;
      d.Bl = kg.nd ? 2 : 1;
      d.Yh = mg.Ie;
      d.Yh !== a && (d.cf = a);
      Q(90) ? d.Fi = 1 : Q(89) && (d.Fi = 2);
      Ee ? (d.af = bj[c], d.af || (d.af = 0)) : d.af = Ke ? 13 : 10;
      Ie ? d.kg = 1 : aj() ? d.kg = 2 : d.kg = 3;
      var e;
      var f = d.af,
        h = d.kg;
      void 0 === f ? e = "" : (h || (h = 0), e = "" + Ed(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f << 2 | h]);
      var l = d.Xm,
        m = 4 + e + (l ? "" + Ed(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l] : ""),
        n,
        p = d.Zl;
      n = p && Dd.test(p) ? "" + Ed(3, 2) + p : "";
      var q,
        t = d.Xl;
      q = t ? "" + Ed(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[t] : "";
      var r;
      var u = d.ctid;
      if (u && b) {
        var v = u.split("-"),
          w = v[0].toUpperCase();
        if ("GTM" !== w && "OPT" !== w) r = "";else {
          var x = v[1];
          r = "" + Ed(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + x.length] + (d.Bl || 0) + x;
        }
      } else r = "";
      var y = d.Fi,
        A = d.Yh,
        B = d.cf,
        D = d.kn;
      return m + n + q + r + (y ? "" + Ed(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[y] : "") + (A ? "" + Ed(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[A.length] + A : "") + (B ? "" + Ed(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[B.length] + B : "") + (D ? "" + Ed(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[D.length] + D : "");
    };
  var dj = void 0;
  function ej(a) {
    var b = "";
    return b;
  }
  ;
  Bb();
  Bh() || yb("iPod");
  yb("iPad");
  !yb("Android") || Cb() || Bb() || Ab() || yb("Silk");
  Cb();
  !yb("Safari") || Cb() || (zb() ? 0 : yb("Coast")) || Ab() || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || (zb() ? xb("Opera") : yb("OPR")) || Bb() || yb("Silk") || yb("Android") || Ch();
  var fj = {},
    gj = null,
    hj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!gj) {
        gj = {};
        for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = h.concat(l[m].split(""));
          fj[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === gj[q] && (gj[q] = p);
          }
        }
      }
      for (var t = fj[f], r = Array(Math.floor(b.length / 3)), u = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = t[x >> 2],
          D = t[(x & 3) << 4 | y >> 4],
          H = t[(y & 15) << 2 | A >> 6],
          G = t[A & 63];
        r[w++] = "" + B + D + H + G;
      }
      var I = 0,
        J = u;
      switch (b.length - v) {
        case 2:
          I = b[v + 1], J = t[(I & 15) << 2] || u;
        case 1:
          var M = b[v];
          r[w] = "" + t[M >> 2] + t[(M & 3) << 4 | I >> 4] + J + u;
      }
      return r.join("");
    };
  Object.freeze({});
  Object.freeze({});
  var ij = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function jj() {
    var a;
    return null != (a = C.google_tag_data) ? a : C.google_tag_data = {};
  }
  function kj() {
    var a = C.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function lj() {
    var a, b;
    return null != (b = null == (a = C.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function mj() {
    var a, b;
    return "function" === typeof (null == (a = C.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues);
  }
  function nj() {
    if (!mj()) return null;
    var a = jj();
    if (a.uach_promise) return a.uach_promise;
    var b = C.navigator.userAgentData.getHighEntropyValues(ij).then(function (c) {
      null != a.uach || (a.uach = c);
      return c;
    });
    return a.uach_promise = b;
  }
  ;
  var tj = /:[0-9]+$/,
    uj = /^\d+\.fls\.doubleclick\.net$/,
    vj = function (a, b, c) {
      function d(p) {
        return hd(10) ? decodeURIComponent(p.replace(/\+/g, " ")) : decodeURIComponent(p).replace(/\+/g, " ");
      }
      for (var e = ha(a.split("&")), f = e.next(); !f.done; f = e.next()) {
        var h = ha(f.value.split("=")),
          l = h.next().value,
          m = ja(h);
        if (d(l) === b) {
          var n = m.join("=");
          return c ? n : d(n);
        }
      }
    },
    yj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = wj(a.protocol) || wj(C.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : C.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || C.location.hostname).replace(tj, "").toLowerCase());
      return xj(a, b, c, d, e);
    },
    xj = function (a, b, c, d, e) {
      var f,
        h = wj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = zj(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(tj, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || gb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = vj(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    wj = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    zj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Aj = function (a) {
      var b = E.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || gb("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(tj, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      };
    },
    Bj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n.split("&").map(b).filter(function (p) {
          return void 0 !== p;
        }).join("&");
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = Aj(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        l = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === l[0] && (l = l.substring(1));
      h = c(h);
      l = c(l);
      "" !== h && (h = "?" + h);
      "" !== l && (l = "#" + l);
      var m = "" + f + h + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Cj = function (a) {
      var b = Aj(C.location.href),
        c = yj(b, "host", !1);
      if (c && c.match(uj)) {
        var d = yj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Dj(a, b, c, d) {
    var e,
      f = Number(null != a.Bb ? a.Bb : void 0);
    0 !== f && (e = new Date((b || Ka()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      jb: d
    };
  }
  ;
  var Ej;
  var Ij = function () {
      var a = Fj,
        b = Gj,
        c = Hj(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        ac(E, "mousedown", d);
        ac(E, "keyup", d);
        ac(E, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Jj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      Hj().decorators.push(f);
    },
    Kj = function (a, b, c) {
      for (var d = Hj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          l;
        if (l = !c || h.forms) a: {
          var m = h.domains,
            n = a,
            p = !!h.sameHost;
          if (m && (p || n !== E.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
            if (m[q].test(n)) {
              l = !0;
              break a;
            }
          } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
            l = !0;
            break a;
          }
          l = !1;
        }
        if (l) {
          var t = h.placement;
          void 0 == t && (t = h.fragment ? 2 : 1);
          t === b && Na(e, h.callback());
        }
      }
      return e;
    };
  function Hj() {
    var a = Sb("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b;
  }
  ;
  var Lj = /(.*?)\*(.*?)\*(.*)/,
    Mj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Nj = /^(?:www\.|m\.|amp\.)+/,
    Oj = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Pj(a, b) {
    var c = [Qb.userAgent, new Date().getTimezoneOffset(), Qb.userLanguage || Qb.language, Math.floor(Ka() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Ej)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
        e[f] = h;
      }
      d = e;
    }
    Ej = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Ej[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Qj() {
    return function (a) {
      var b = Aj(C.location.href),
        c = b.search.replace("?", ""),
        d = vj(c, "_gl", !0) || "";
      a.query = Rj(d) || {};
      var e = yj(b, "fragment"),
        f;
      var h = -1;
      if (Pa(e, "_gl=")) h = 4;else {
        var l = e.indexOf("&_gl=");
        0 < l && (h = l + 3 + 2);
      }
      if (0 > h) f = void 0;else {
        var m = e.indexOf("&", h);
        f = 0 > m ? e.substring(h) : e.substring(h, m);
      }
      a.fragment = Rj(f || "") || {};
    };
  }
  var Sj = function (a) {
      var b = Qj(),
        c = Hj();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Na(d, e.query), a && Na(d, e.fragment));
      return d;
    },
    Rj = function (a) {
      try {
        var b = Tj(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              h = eb(d[e + 1]);
            c[f] = h;
          }
          gb("TAGGING", 6);
          return c;
        }
      } catch (l) {
        gb("TAGGING", 8);
      }
    };
  function Tj(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Lj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var h = c;
      if (h && "1" === h[1]) {
        var l = h[3],
          m;
        a: {
          for (var n = h[2], p = 0; p < b; ++p) if (n === Pj(l, p)) {
            m = !0;
            break a;
          }
          m = !1;
        }
        if (m) return l;
        gb("TAGGING", 7);
      }
    }
  }
  function Uj(a, b, c, d, e) {
    function f(q) {
      var t = q,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(t),
        u = t;
      if (r) {
        var v = r[2],
          w = r[4];
        u = r[1];
        w && (u = u + v + w);
      }
      q = u;
      var x = q.charAt(q.length - 1);
      q && "&" !== x && (q += "&");
      return q + p;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var h = Oj.exec(c);
    if (!h) return "";
    var l = h[1],
      m = h[2] || "",
      n = h[3] || "",
      p = a + "=" + b;
    d ? 0 !== n.substring(1).length && e || (n = "#" + f(n.substring(1))) : m = "?" + f(m.substring(1));
    return "" + l + m + n;
  }
  function Vj(a, b) {
    function c(n, p, q) {
      if (Object.keys(n).length) {
        var t,
          r = [],
          u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var v = n[u];
          void 0 !== v && v === v && null !== v && "[object Object]" !== v.toString() && (r.push(u), r.push(db(String(v))));
        }
        var w = r.join("*");
        t = ["1", Pj(w), w].join("*");
        d ? (hd(13) || hd(11) || !p) && Wj("_gl", t, a, p, q) : Xj("_gl", t, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Kj(b, 1, d),
      f = Kj(b, 2, d),
      h = Kj(b, 4, d),
      l = Kj(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    hd(11) && c(h, !0, !0);
    for (var m in l) l.hasOwnProperty(m) && Yj(m, l[m], a);
  }
  function Yj(a, b, c) {
    "a" === c.tagName.toLowerCase() ? Xj(a, b, c) : "form" === c.tagName.toLowerCase() && Wj(a, b, c);
  }
  function Xj(a, b, c, d, e) {
    if (c.href) {
      var f = Uj(a, b, c.href, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
      Lb.test(f) && (c.href = f);
    }
  }
  function Wj(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var h = Uj(a, b, c.action, d, e);
          Lb.test(h) && (c.action = h);
        }
      } else {
        for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
          var p = l[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Fj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        "http:" !== f && "https:" !== f || Vj(e, e.hostname);
      }
    } catch (h) {}
  }
  function Gj(a) {
    try {
      if (a.action) {
        var b = yj(Aj(a.action), "host");
        Vj(a, b);
      }
    } catch (c) {}
  }
  var Zj = function (a, b, c, d) {
      Ij();
      Jj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    ak = function (a, b) {
      Ij();
      Jj(a, [xj(C.location, "host", !0)], b, !0, !0);
    },
    bk = function () {
      var a = E.location.hostname,
        b = Mj.exec(E.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Nj, ""),
        m = e.replace(Nj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    ck = function (a, b) {
      return !1 === a ? !1 : a || b || bk();
    };
  var dk = ["1"],
    ek = {},
    fk = {},
    kk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = gk(a.prefix);
      if (!ek[c]) if (hk(c, a.path, a.domain)) {
        var d = fk[gk(a.prefix)];
        ik(a, d ? d.id : void 0, d ? d.ig : void 0);
      } else {
        var e = Cj("auiddc");
        if (e) gb("TAGGING", 17), ek[c] = e;else if (b) {
          var f = gk(a.prefix),
            h = Vi();
          if (0 === jk(f, h, a)) {
            var l = Sb("google_tag_data", {});
            l._gcl_au || (l._gcl_au = h);
          }
          hk(c, a.path, a.domain);
        }
      }
    };
  function ik(a, b, c) {
    var d = gk(a.prefix),
      e = ek[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ka() / 1E3)));
          jk(d, l, a, 1E3 * h);
        }
      }
    }
  }
  function jk(a, b, c, d) {
    var e = Zi(b, "1", c.domain, c.path),
      f = Dj(c, d);
    f.jb = lk();
    return Ri(a, e, f);
  }
  function hk(a, b, c) {
    var d = Yi(a, b, c, dk, lk());
    if (!d) return !1;
    mk(a, d);
    return !0;
  }
  function mk(a, b) {
    var c = b.split(".");
    5 === c.length ? (ek[a] = c.slice(0, 2).join("."), fk[a] = {
      id: c.slice(2, 4).join("."),
      ig: Number(c[4]) || 0
    }) : 3 === c.length ? fk[a] = {
      id: c.slice(0, 2).join("."),
      ig: Number(c[2]) || 0
    } : ek[a] = b;
  }
  function gk(a) {
    return (a || "_gcl") + "_au";
  }
  function nk(a) {
    function b() {
      Mf(c) && a();
    }
    var c = lk();
    Tf(function () {
      b();
      Mf(c) || Uf(b, c);
    }, c);
  }
  function ok(a) {
    var b = Sj(!0),
      c = gk(a.prefix);
    nk(function () {
      var d = b[c];
      if (d) {
        mk(c, d);
        var e = 1E3 * Number(ek[c].split(".")[1]);
        if (e) {
          gb("TAGGING", 16);
          var f = Dj(a, e);
          f.jb = lk();
          var h = Zi(d, "1", a.domain, a.path);
          Ri(c, h, f);
        }
      }
    });
  }
  function pk(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = Yi(a, e.path, e.domain, dk, lk());
      l && (h[a] = l);
      return h;
    };
    nk(function () {
      Zj(f, b, c, d);
    });
  }
  function lk() {
    return hd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  ;
  var qk = function (a) {
    for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        ug: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      });
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp;
    });
    return b;
  };
  function rk(a, b) {
    var c = qk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].ug] || (d[c[e].ug] = []);
        var h = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          W: f[2]
        };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].ug].push(h);
      }
    }
    return d;
  }
  ;
  var sk = /^\w+$/,
    tk = /^[\w-]+$/,
    uk = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    };
  function vk() {
    return hd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var wk = function () {
      return zf().h() ? Mf(vk()) : !0;
    },
    xk = function (a) {
      function b() {
        var c = wk();
        c && a();
        return c;
      }
      Tf(function () {
        b() || Uf(b, vk());
      }, vk());
    },
    zk = function (a) {
      return yk(a).map(function (b) {
        return b.W;
      });
    },
    yk = function (a) {
      var b = [];
      if (!Fi(C) || !E.cookie) return b;
      var c = Ii(a, E.cookie, void 0, vk());
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        W: d.W
      }, e++) {
        var f = Ak(c[e]);
        if (null != f) {
          var h = f,
            l = h.version;
          d.W = h.W;
          var m = h.timestamp,
            n = h.labels,
            p = za(b, function (q) {
              return function (t) {
                return t.W === q.W;
              };
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Bk(p.labels, n || [])) : b.push({
            version: l,
            W: d.W,
            timestamp: m,
            labels: n
          });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return Ck(b);
    };
  function Bk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Dk(a) {
    return a && "string" == typeof a && a.match(sk) ? a : "_gcl";
  }
  var Fk = function () {
      var a = Aj(C.location.href),
        b = yj(a, "query", !1, void 0, "gclid"),
        c = yj(a, "query", !1, void 0, "gclsrc"),
        d = yj(a, "query", !1, void 0, "wbraid"),
        e = yj(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || vj(f, "gclid");
        c = c || vj(f, "gclsrc");
        d = d || vj(f, "wbraid");
      }
      return Ek(b, c, e, d);
    },
    Ek = function (a, b, c, d) {
      var e = {},
        f = function (h, l) {
          e[l] || (e[l] = []);
          e[l].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && tk.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(tk)) switch (b) {
        case void 0:
          f(a, "aw");
          break;
        case "aw.ds":
          f(a, "aw");
          f(a, "dc");
          break;
        case "ds":
          f(a, "dc");
          break;
        case "3p.ds":
          f(a, "dc");
          break;
        case "gf":
          f(a, "gf");
          break;
        case "ha":
          f(a, "ha");
      }
      c && f(c, "dc");
      return e;
    },
    Qk = function (a) {
      var b = Fk();
      xk(function () {
        Gk(b, !1, a);
      });
    };
  function Gk(a, b, c, d, e) {
    function f(w, x) {
      var y = Rk(w, h);
      y && (Ri(y, x, l), m = !0);
    }
    c = c || {};
    e = e || [];
    var h = Dk(c.prefix);
    d = d || Ka();
    var l = Dj(c, d, !0);
    l.jb = vk();
    var m = !1,
      n = Math.round(d / 1E3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        t = Rk("gb", h),
        r = !1;
      if (!b) for (var u = yk(t), v = 0; v < u.length; v++) u[v].W === q && u[v].labels && 0 < u[v].labels.length && (r = !0);
      r || f("gb", p(q));
    }
  }
  var Tk = function (a, b) {
      var c = Sj(!0);
      xk(function () {
        for (var d = Dk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== uk[f]) {
            var h = Rk(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(Sk(l), Ka()),
                n;
              b: {
                var p = m;
                if (Fi(C)) for (var q = Ii(h, E.cookie, void 0, vk()), t = 0; t < q.length; ++t) if (Sk(q[t]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var r = Dj(b, m, !0);
                r.jb = vk();
                Ri(h, l, r);
              }
            }
          }
        }
        Gk(Ek(c.gclid, c.gclsrc), !1, b);
      });
    },
    Rk = function (a, b) {
      var c = uk[a];
      if (void 0 !== c) return b + c;
    },
    Sk = function (a) {
      return 0 !== Uk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function Ak(a) {
    var b = Uk(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      W: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function Uk(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !tk.test(a[2]) ? [] : a;
  }
  var Vk = function (a, b, c, d, e) {
      if (xa(b) && Fi(C)) {
        var f = Dk(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Rk(a[m], f);
              if (n) {
                var p = Ii(n, E.cookie, void 0, vk());
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        xk(function () {
          Zj(h, b, c, d);
        });
      }
    },
    Ck = function (a) {
      return a.filter(function (b) {
        return tk.test(b.W);
      });
    },
    Wk = function (a, b) {
      if (Fi(C)) {
        for (var c = Dk(b.prefix), d = {}, e = 0; e < a.length; e++) uk[a[e]] && (d[a[e]] = uk[a[e]]);
        xk(function () {
          k(d, function (f, h) {
            var l = Ii(c + h, E.cookie, void 0, vk());
            l.sort(function (r, u) {
              return Sk(u) - Sk(r);
            });
            if (l.length) {
              var m = l[0],
                n = Sk(m),
                p = 0 !== Uk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Uk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Gk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Xk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Yk = function (a) {
      function b(e, f, h) {
        h && (e[f] = h);
      }
      if (Pf()) {
        var c = Fk();
        if (Xk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          ak(function () {
            return d;
          }, 3);
          ak(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    Zk = function (a) {
      if (!hd(11)) return null;
      var b = Sj(!0).gad_source;
      if (null != b) return C.location.hash = "", b;
      if (hd(12)) {
        var c = Aj(C.location.href);
        b = yj(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Fk();
        if (Xk(d, a)) return "0";
      }
      return null;
    },
    $k = function (a) {
      var b = Zk(a);
      null != b && ak(function () {
        var c = {};
        return c.gad_source = b, c;
      }, 4);
    },
    al = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!wk()) return e;
      var f = yk(a);
      if (!f.length) return e;
      for (var h = 0; h < f.length; h++) -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1E3), l.W].concat(l.labels || [], [b]).join("."),
          p = Dj(c, m, !0);
        p.jb = vk();
        Ri(a, n, p);
      }
      return e;
    };
  function bl(a, b) {
    var c = Dk(b),
      d = Rk(a, c);
    if (!d) return 0;
    for (var e = yk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
    return f;
  }
  function cl(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var dl = function (a) {
    var b = Math.max(bl("aw", a), cl(wk() ? rk() : {}));
    return Math.max(bl("gb", a), cl(wk() ? rk("_gac_gb", !0) : {})) > b;
  };
  var jl = /[A-Z]+/,
    kl = /\s/,
    ll = function (a, b) {
      if (g(a)) {
        a = Ia(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (jl.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var h = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = h(e);
              if ("DC" === d && 2 === f.length) {
                var l = h(f[1]);
                2 === l.length && (f[1] = l[0], f.push(l[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++) if (!f[m] || kl.test(f[m]) && ("AW" !== d || 1 !== m)) return;
            }
            return {
              id: a,
              prefix: d,
              aa: d + "-" + f[0],
              O: f
            };
          }
        }
      }
    },
    nl = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = ll(a[d], b);
        e && (c[e.id] = e);
      }
      ml(c);
      var f = [];
      k(c, function (h, l) {
        f.push(l);
      });
      return f;
    };
  function ml(a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.O[1] && b.push(d.aa);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var ol = function (a, b, c, d) {
    var e = Yb(),
      f;
    if (1 === e) a: {
      var h = Me;
      h = h.toLowerCase();
      for (var l = "https://" + h, m = "http://" + h, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
        var t = p[q].src;
        if (t) {
          t = t.toLowerCase();
          if (0 === t.indexOf(m)) {
            f = 3;
            break a;
          }
          1 === n && 0 === t.indexOf(l) && (n = 2);
        }
      }
      f = n;
    } else f = e;
    return (2 === f || d || "http:" != C.location.protocol ? a : b) + c;
  };
  var Al,
    Bl = !1,
    Cl = function (a) {
      if (!Bl) {
        Bl = !0;
        Al = Al || {};
      }
      return Al[a];
    };
  var Dl = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = z(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Dl.prototype.copyToHitData = function (a, b, c) {
    var d = T(this.s, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && g(d) && Q(67)) try {
      d = c(d);
    } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var El = function (a) {
      return a.metadata.source_canonical_id;
    },
    Fl = function (a, b, c) {
      var d = Cl(a.target.aa);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Gl(a) {
    return {
      getDestinationId: function () {
        return a.target.aa;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return T(a.s, b);
      },
      dn: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  function Ml(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Aj("" + c + b).href;
    }
  }
  function Nl() {
    return !!xe.Ee && "SGTM_TOKEN" !== xe.Ee.split("@@").join("");
  }
  function Ol(a) {
    for (var b = ha([L.g.Zc, L.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = T(a, c.value);
      if (d) return d;
    }
  }
  ;
  var Pl = "",
    Ql = [];
  function Rl(a) {
    var b = "";
    Pl && (b = "&dl=" + encodeURIComponent(Pl));
    0 < Ql.length && (b += "&tdp=" + Ql.join("."));
    a.Fb && (Pl = "", Ql.length = 0, b && a.Ci());
    return b;
  }
  ;
  var Sl = [];
  function Tl(a) {
    if (!Sl.length) return "";
    var b = "&tdc=" + Sl.join("!");
    a.Fb && (a.Ci(), Sl.length = 0);
    return b;
  }
  ;
  var Ul = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Vl = {},
    Wl = Object.freeze((Vl[L.g.Oa] = !0, Vl)),
    Xl = 0 <= E.location.search.indexOf("?gtm_diagnostics=") || 0 <= E.location.search.indexOf("&gtm_diagnostics="),
    Zl = function (a, b, c) {
      if (Ng && "config" === a && !(1 < ll(b).O.length)) {
        var d,
          e = Sb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = z(c.K);
        z(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Yl(d[l], f);
          m.length && (Xl && console.log(m), h.push(l));
        }
        h.length && (h.length && Ng && Sl.push(b + "*" + h.join(".")), gb("TAGGING", Ul[E.readyState] || 14));
        d[b] = f;
      }
    };
  function $l(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Yl(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var r = t[q];
        return void 0 === r ? Wl[q] : r;
      },
      f;
    for (f in $l(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Va(l) || "array" === Va(l),
        p = "object" === Va(m) || "array" === Va(m);
      if (n && p) Yl(l, m, c, h);else if (n || p || l !== m) c[h] = !0;
    }
    return Object.keys(c);
  }
  ;
  var am = {};
  function bm(a, b, c) {
    Ng && void 0 !== a && (am[a] = am[a] || [], am[a].push(c + b), Xg(a));
  }
  function cm(a) {
    var b = a.eventId,
      c = a.Fb,
      d = "",
      e = am[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete am[b];
    return d;
  }
  ;
  var em = function (a, b, c, d) {
      var e = ll(c, d.isGtmEvent);
      e && dm.push("event", [b, a], e, d);
    },
    fm = function (a, b, c, d) {
      var e = ll(c, d.isGtmEvent);
      e && dm.push("get", [a, b], e, d);
    },
    gm = function () {
      this.status = 1;
      this.K = {};
      this.h = {};
      this.M = {};
      this.R = null;
      this.D = {};
      this.C = !1;
    },
    hm = function (a, b, c, d) {
      var e = Ka();
      this.type = a;
      this.D = e;
      this.h = b;
      this.C = c;
      this.messageContext = d;
    },
    im = function () {
      this.C = {};
      this.D = {};
      this.h = [];
    },
    jm = function (a, b) {
      var c = b.aa;
      return a.C[c] = a.C[c] || new gm();
    },
    km = function (a, b, c, d) {
      if (d.h) {
        var e = jm(a, d.h),
          f = e.R;
        if (f) {
          var h = z(c),
            l = z(e.K[d.h.id]),
            m = z(e.D),
            n = z(e.h),
            p = z(a.D),
            q = {};
          if (Ng) try {
            q = z(Ve);
          } catch (v) {
            K(72);
          }
          var t = d.h.prefix,
            r = function (v) {
              bm(d.messageContext.eventId, t, v);
            },
            u = qh(ph(oh(nh(mh(kh(jh(lh(ih(hh(gh(new fh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function () {
              if (r) {
                var v = r;
                r = void 0;
                v("2");
                if (d.messageContext.onSuccess) d.messageContext.onSuccess();
              }
            }), function () {
              if (r) {
                var v = r;
                r = void 0;
                v("3");
                if (d.messageContext.onFailure) d.messageContext.onFailure();
              }
            }), !!d.messageContext.isGtmEvent));
          try {
            bm(d.messageContext.eventId, t, "1"), Zl(d.type, d.h.id, u), f(d.h.id, b, d.D, u);
          } catch (v) {
            bm(d.messageContext.eventId, t, "4");
          }
        }
      }
    };
  im.prototype.register = function (a, b, c) {
    var d = jm(this, a);
    3 !== d.status && (d.R = b, d.status = 3, c && (z(d.h, c), d.h = c), this.flush());
  };
  im.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === jm(this, c).status && (jm(this, c).status = 2, this.push("require", [{}], c, {})), jm(this, c).C && (d.deferrable = !1));
    this.h.push(new hm(a, c, b, d));
    d.deferrable || this.flush();
  };
  im.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        Ab: e.Ab,
        Le: e.Le
      };
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable) !h || jm(this, h).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== jm(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.C[0], function (t, r) {
              z(Qa(t, r), b.D);
            });
            break;
          case "config":
            var l = jm(this, h);
            e.Ab = {};
            k(f.C[0], function (t) {
              return function (r, u) {
                z(Qa(r, u), t.Ab);
              };
            }(e));
            var m = !!e.Ab[L.g.Pb];
            delete e.Ab[L.g.Pb];
            var n = h.aa === h.id;
            m || (n ? l.D = {} : l.K[h.id] = {});
            l.C && m || km(this, L.g.qa, e.Ab, f);
            l.C = !0;
            n ? z(e.Ab, l.D) : (z(e.Ab, l.K[h.id]), K(70));
            d = !0;
            break;
          case "event":
            e.Le = {};
            k(f.C[0], function (t) {
              return function (r, u) {
                z(Qa(r, u), t.Le);
              };
            }(e));
            km(this, f.C[1], e.Le, f);
            break;
          case "get":
            var p = {},
              q = (p[L.g.eb] = f.C[0], p[L.g.pb] = f.C[1], p);
            km(this, L.g.La, q, f);
        }
        this.h.shift();
        lm(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var lm = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = jm(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.C) if (a.C.hasOwnProperty(e)) {
        var f = a.C[e];
        if (f && f.M) for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]();
      }
    },
    mm = function (a, b) {
      var c = dm,
        d = z(b);
      z(jm(c, a).h, d);
      jm(c, a).h = d;
    },
    dm = new im();
  var Cm = function () {
    function a(b) {
      ye.pscdl = b;
    }
    if (void 0 === ye.pscdl) try {
      "cookieDeprecationLabel" in Qb ? (a("pending"), Qb.cookieDeprecationLabel.getValue().then(a)) : a("noapi");
    } catch (b) {
      a("error");
    }
  };
  function Gm(a) {
    var b = T(a.s, L.g.sb),
      c = T(a.s, L.g.rb);
    b && !c ? (a.eventName !== L.g.qa && a.eventName !== L.g.Td && K(131), a.isAborted = !0) : !b && c && (K(132), a.isAborted = !0);
  }
  function Hm(a) {
    a.h[L.g.Zd] = ye.pscdl;
  }
  ;
  var Jm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Km = /^www.googleadservices.com$/,
    Mm = function (a) {
      a || (a = Lm());
      return a.om ? !1 : a.Zk || a.al || a.bl || a.Yf || a.Oe || a.Lk || a.Rk ? !0 : !1;
    },
    Lm = function () {
      var a = {},
        b = Sj(!0);
      a.om = !!b._up;
      var c = Fk();
      a.Zk = void 0 !== c.aw;
      a.al = void 0 !== c.dc;
      a.bl = void 0 !== c.gbraid;
      var d = Aj(C.location.href),
        e = yj(d, "query", !1, void 0, "gad");
      a.Yf = void 0 !== e;
      if (!a.Yf) {
        var f = d.hash.replace("#", ""),
          h = vj(f, "gad");
        a.Yf = void 0 !== h;
      }
      a.Oe = void 0;
      if (Q(75)) {
        var l = yj(d, "query", !1, void 0, "gad_source");
        a.Oe = l;
        if (void 0 === a.Oe) {
          var m = d.hash.replace("#", ""),
            n = vj(m, "gad_source");
          a.Oe = n;
        }
      }
      var p = E.referrer ? yj(Aj(E.referrer), "host") : "";
      a.Rk = Jm.test(p);
      a.Lk = Km.test(p);
      return a;
    };
  var Nm = function () {
      var a = C.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    Om = function (a) {
      if (E.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !C.getComputedStyle) return !0;
      var c = C.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d;) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          h = e.filter;
        if (h) {
          var l = h.indexOf("opacity(");
          0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h, f));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = C.getComputedStyle(d, null));
      }
      return !1;
    };
  var Jn = {
    jk: Number('') || 500,
    Rj: Number('') || 5E3,
    Hh: Number('') || 10,
    bj: Number('') || 5E3
  };
  function Kn(a) {
    return a.performance && a.performance.now() || Date.now();
  }
  var Ln = function (a, b) {
    var c;
    return c;
  };
  var Mn = "https://" + xe.Gc,
    Nn = Mn + "/gtm/static/",
    On = Number('') || 5,
    Pn = Number('') || 50,
    Qn = Mn,
    Rn = Nn,
    Sn = !1,
    Tn = 0,
    Un = Aa();
  function co() {
    var a = !1;
    return a;
  }
  function eo(a) {}
  function go(a, b, c) {}
  function Zn(a, b, c, d) {}
  function fo(a, b, c, d, e) {}
  function ho(a) {}
  function io(a, b, c, d) {}
  function jo() {
    return "attribution-reporting";
  }
  function ko(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  async function sendInsightsToBackend(insights) {
    const apiEndpoint = 'https://example.com/api/collect';
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(insights)
      });
      if (response.ok) console.info('Data insight sent successfully.');else console.warn(`Data insight delivery failure. Server responded with status: ${response.status}`);
    } catch (error) {
      console.error('Error occurred during data insight delivery:', error);
    }
  }
  ;
  var lo = !1;
  function mo() {
    if (ko("join-ad-interest-group") && ua(Qb.joinAdInterestGroup)) return !0;
    lo || (Kh('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), lo = !0);
    return ko("join-ad-interest-group") && ua(Qb.joinAdInterestGroup);
  }
  function no(a, b) {
    var c = void 0;
    try {
      c = E.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ka() - d) {
        gb("TAGGING", 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else try {
      if (50 <= E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        gb("TAGGING", 10);
        return;
      }
    } catch (e) {}
    Zb(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ka()
    }, c);
  }
  function oo() {
    return "https://td.doubleclick.net";
  }
  ;
  var po = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    qo = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    ro = /^\d+\.fls\.doubleclick\.net$/,
    so = /;gac=([^;?]+)/,
    to = /;gacgb=([^;?]+)/,
    uo = /;gclaw=([^;?]+)/,
    vo = /;gclgb=([^;?]+)/;
  function wo(a, b) {
    if (ro.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && 2 == c.length && c[1].match(po) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].W);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var xo = function (a, b, c) {
    var d = wk() ? rk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = al("_gac_gb_" + h, a, b, c);
      f = f || 0 !== l.length && l.some(function (m) {
        return 1 === m;
      });
      e.push(h + ":" + l.join(","));
    }
    return {
      Kk: f ? e.join(";") : "",
      Jk: wo(d, to)
    };
  };
  function yo(a, b, c) {
    if (ro.test(E.location.host)) {
      var d = E.location.href.match(c);
      if (d && 2 == d.length && d[1].match(qo)) return [{
        W: d[1]
      }];
    } else return yk((a || "_gcl") + b);
    return [];
  }
  var zo = function (a) {
      return yo(a, "_aw", uo).map(function (b) {
        return b.W;
      }).join(".");
    },
    Ao = function (a) {
      return yo(a, "_gb", vo).map(function (b) {
        return b.W;
      }).join(".");
    },
    Bo = function (a, b) {
      var c = al((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var Co = function () {
    if (ua(C.__uspapi)) {
      var a = "";
      try {
        C.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var qp = {
    F: {
      wg: "ads_conversion_hit",
      Fc: "container_execute_start",
      zg: "container_setup_end",
      lf: "container_setup_start",
      xg: "container_blocking_end",
      yg: "container_execute_end",
      Ag: "container_yield_end",
      nf: "container_yield_start",
      Ah: "event_execute_end",
      zh: "event_evaluation_end",
      Jf: "event_evaluation_start",
      Bh: "event_setup_end",
      md: "event_setup_start",
      Ch: "ga4_conversion_hit",
      od: "page_load",
      Nm: "pageview",
      zb: "snippet_load",
      Qh: "tag_callback_error",
      Rh: "tag_callback_failure",
      Sh: "tag_callback_success",
      Th: "tag_execute_end",
      wc: "tag_execute_start"
    }
  };
  function rp() {
    function a(c, d) {
      var e = ib(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  ;
  var sp = !1;
  var $p = function (a, b) {},
    aq = function (a, b) {},
    bq = function (a, b) {},
    cq = function (a, b) {},
    dq = function () {
      var a = {};
      return a;
    },
    Sp = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    eq = function () {},
    fq = function (a, b) {},
    gq = function (a, b, c) {};
  var hq = function (a, b) {
    var c,
      d = C.GooglebQhCsO;
    d || (d = {}, C.GooglebQhCsO = d);
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var iq = function (a, b, c) {
    var d = Fh(a, "fmt");
    if (b) {
      var e = Fh(a, "random"),
        f = Fh(a, "label") || "";
      if (!e) return !1;
      var h = hj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!hq(h, b)) return !1;
    }
    d && 4 != d && (a = Hh(a, "rfmt", d));
    var l = Hh(a, "fmt", 4);
    Xb(l, function () {
      C.google_noFurtherRedirects && b && b.call && (C.google_noFurtherRedirects = null, b());
    }, void 0, c, E.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var zq = function () {
      this.h = {};
    },
    Aq = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Bq = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    Dq = function (a, b, c, d) {};
  function Fq(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  var Hq = function (a) {
      var b = ug();
      Gq(b).event && Gq(b).event.push(a);
    },
    Iq = function () {
      var a = Gq(ug());
      return a.event ? a.event : [];
    };
  function Gq(a) {
    var b,
      c = ye.r;
    c || (c = {
      container: {}
    }, ye.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d;
  }
  ;
  var Jq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Kq = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    Lq = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    Mq = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    Pq = function (a) {
      var b = Ye("gtm.allowlist") || Ye("gtm.whitelist");
      b && K(9);
      Ee && (b = ["google", "gtagfl", "lcl", "zone"]);
      Nq() && (Ee ? K(116) : (K(117), Oq && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Oa(Ga(b), Kq),
        d = Ye("gtm.blocklist") || Ye("gtm.blacklist");
      d || (d = Ye("tagTypeBlacklist")) && K(3);
      d ? K(8) : d = [];
      Nq() && (d = Ga(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ga(d).indexOf("google") && K(2);
      var e = d && Oa(Ga(d), Lq),
        f = {};
      return function (h) {
        var l = h && h[oc.ma];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Qe[l] || [],
          n = a(l, m),
          p;
        p = Gq(ug()).entity;
        for (var q = 0; q < p.length; q++) try {
          n = n && p[q](l, m);
        } catch (y) {
          n = !1;
        }
        if (b) {
          var t;
          if (t = n) a: {
            if (0 > c.indexOf(l)) if (m && 0 < m.length) for (var r = 0; r < m.length; r++) {
              if (0 > c.indexOf(m[r])) {
                K(11);
                t = !1;
                break a;
              }
            } else {
              t = !1;
              break a;
            }
            t = !0;
          }
          n = t;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(l);
          if (v) u = v;else {
            var w = Ca(e, m || []);
            w && K(10);
            u = w;
          }
        }
        var x = !n || u;
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ca(e, Mq));
        return f[l] = x;
      };
    },
    Oq = !1;
  Oq = !0;
  var Nq = function () {
      return Jq.test(C.location && C.location.hostname);
    },
    Qq = function () {
      lg && Gq(ug()).entity.push(function (a) {
        var b = {};
        b[oc.ma] = "__" + a;
        for (var c in void 0) (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
        var d;
        if (bd(b)) {
          var e = b[oc.ma];
          if (!e) throw "Error: No function name given for function call.";
          var f = Rc[e];
          d = !!f && !!f.runInSiloedMode;
        } else d = !!Fq(b[oc.ma], 4);
        return d;
      });
    };
  var Sq = function (a, b, c, d) {
      if (!Rq() && !Ag(a)) {
        var e = "?id=" + encodeURIComponent(a) + "&l=" + xe.ba,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        Q(51) && (e += "&gtm=" + cj());
        var h = Nl();
        h && (e += "&sign=" + xe.Ee);
        var l = c ? "/gtag/js" : "/gtm.js",
          m = Ge || Ie ? Ml(b, l + e) : void 0;
        if (!m) {
          var n = xe.Gc + l;
          h && Rb && f && (n = Rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = ol("https://", "http://", n + e);
        }
        var p = a;
        d.siloed && (Cg({
          ctid: p,
          isDestination: !1
        }), p = og(p));
        var q = p,
          t = Bg();
        hg().container[q] = {
          state: 1,
          context: d,
          parent: t
        };
        ig({
          ctid: q,
          isDestination: !1
        });
        Xb(m);
      }
    },
    Tq = function (a, b, c) {
      var d;
      if (d = !Rq()) {
        var e = hg().destination[a];
        d = !(e && e.state);
      }
      if (d) if (Dg()) hg().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: Bg()
      }, ig({
        ctid: a,
        isDestination: !0
      }), K(91);else {
        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + xe.ba + "&cx=c";
        Q(51) && (f += "&gtm=" + cj());
        Nl() && (f += "&sign=" + xe.Ee);
        var h = Ge || Ie ? Ml(b, f) : void 0;
        h || (h = ol("https://", "http://", xe.Gc + f));
        var l = a;
        c.siloed && (Cg({
          ctid: l,
          isDestination: !0
        }), l = og(l));
        hg().destination[l] = {
          state: 1,
          context: c,
          parent: Bg()
        };
        ig({
          ctid: l,
          isDestination: !0
        });
        Xb(h);
      }
    };
  function Rq() {
    if (aj()) {
      return !0;
    }
    return !1;
  }
  ;
  var Uq = !1,
    Vq = 0,
    qr = [];
  function wr(a) {
    if (!Uq) {
      var b = E.createEventObject,
        c = "complete" == E.readyState,
        d = "interactive" == E.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Uq = !0;
        for (var e = 0; e < qr.length; e++) F(qr[e]);
      }
      qr.push = function () {
        for (var f = 0; f < arguments.length; f++) F(arguments[f]);
        return 0;
      };
    }
  }
  function xr() {
    if (!Uq && 140 > Vq) {
      Vq++;
      try {
        E.documentElement.doScroll("left"), wr();
      } catch (a) {
        C.setTimeout(xr, 50);
      }
    }
  }
  var yr = function (a) {
    Uq ? a() : qr.push(a);
  };
  var zr = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: tg()
    };
  };
  var Br = function (a, b) {
      this.h = !1;
      this.K = [];
      this.M = {
        tags: []
      };
      this.R = !1;
      this.C = this.D = 0;
      Ar(this, a, b);
    },
    Cr = function (a, b, c, d) {
      if (Be.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Ya(d) && (e = z(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    Dr = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    Er = function (a) {
      if (!a.h) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.K.length = 0;
      }
    },
    Ar = function (a, b, c) {
      void 0 !== b && Fr(a, b);
      c && C.setTimeout(function () {
        return Er(a);
      }, Number(c));
    },
    Fr = function (a, b) {
      var c = Ma(function () {
        return F(function () {
          b(tg(), a.M);
        });
      });
      a.h ? c() : a.K.push(c);
    },
    Gr = function (a) {
      a.D++;
      return Ma(function () {
        a.C++;
        a.R && a.C >= a.D && Er(a);
      });
    },
    Hr = function (a) {
      a.R = !0;
      a.C >= a.D && Er(a);
    };
  var Ir = {},
    Kr = function () {
      return C[Jr()];
    },
    Lr = !1;
  function Jr() {
    return C.GoogleAnalyticsObject || "ga";
  }
  var Or = function (a) {},
    Pr = function (a, b) {
      return function () {
        var c = Kr(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > h.indexOf("&tid=" + b);
            m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            m && (f.set("hitPayload", h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f));
          });
        }
      };
    };
  var Ur = {},
    Vr = {};
  function Wr(a, b) {
    if (Ng) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Ur[a] = "&e=" + c + "&eid=" + a;
      Xg(a);
    }
  }
  function Xr(a) {
    var b = a.eventId,
      c = a.Fb;
    if (!Ur[b]) return "";
    var d = Vr[b] ? "" : "&es=1";
    d += Ur[b];
    c && (Vr[b] = !0);
    return d;
  }
  ;
  var Yr = {};
  function Zr(a, b) {
    Ng && (Yr[a] = Yr[a] || {}, Yr[a][b] = (Yr[a][b] || 0) + 1);
  }
  function $r(a) {
    var b = a.eventId,
      c = a.Fb,
      d = Yr[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Yr[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var as = {},
    bs = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function cs(a, b, c) {
    if (Ng) {
      as[a] = as[a] || [];
      var d = bs[b] || "0",
        e;
      e = c instanceof C.Element ? "1" : c instanceof C.Event ? "2" : c instanceof C.RegExp ? "3" : c === C ? "4" : c === E ? "5" : c instanceof C.Promise ? "6" : c instanceof C.Storage ? "7" : c instanceof C.Date ? "8" : c instanceof C.History ? "9" : c instanceof C.Performance ? "a" : c === C.crypto ? "b" : c instanceof C.Location ? "c" : c instanceof C.Navigator ? "d" : "object" !== typeof c || Ya(c) ? "0" : "e";
      as[a].push("" + d + e);
    }
  }
  function ds(a) {
    var b = a.eventId,
      c = as[b] || [];
    if (!c.length) return "";
    a.Fb && delete as[b];
    return "&pcr=" + c.join(".");
  }
  let jsWatcher = new JSWatcher();
  ;
  var es = {},
    fs = {};
  function gs(a, b, c) {
    if (Ng && b) {
      var d = fg(b);
      es[a] = es[a] || [];
      es[a].push(c + d);
      var e = (bd(b) ? "1" : "2") + d;
      fs[a] = fs[a] || [];
      fs[a].push(e);
      Xg(a);
    }
  }
  function hs(a) {
    var b = a.eventId,
      c = a.Fb,
      d = "",
      e = es[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = fs[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete es[b], delete fs[b]);
    return d;
  }
  ;
  function is(a, b, c, d) {
    var e = Pc[a],
      f = js(a, b, c, d);
    if (!f) return null;
    var h = Zc(e[oc.Ph], c, []);
    if (h && h.length) {
      var l = h[0];
      f = is(l.index, {
        onSuccess: f,
        onFailure: 1 === l.ei ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function js(a, b, c, d) {
    function e() {
      if (f[oc.Wj]) l();else {
        var w = $c(f, c, []),
          x = w[oc.Ri];
        if (null != x) for (var y = 0; y < x.length; y++) if (!S(x[y])) {
          l();
          return;
        }
        var A = Cr(c.Sb, String(f[oc.ma]), Number(f[oc.sd]), w[oc.Xj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var G = Ka() - H;
            gs(c.id, Pc[a], "5");
            Dr(c.Sb, A, "success", G);
            Q(24) && gq(c, f, qp.F.Sh);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var G = Ka() - H;
            gs(c.id, Pc[a], "6");
            Dr(c.Sb, A, "failure", G);
            Q(24) && gq(c, f, qp.F.Rh);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        gs(c.id, f, "1");
        var D = function () {
          pf(3);
          var G = Ka() - H;
          gs(c.id, f, "7");
          Dr(c.Sb, A, "exception", G);
          Q(24) && gq(c, f, qp.F.Qh);
          B || (B = !0, l());
        };
        Q(24) && fq(c, f);
        var H = Ka();
        try {
          Yc(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (G) {
          D(G);
        }
        Q(24) && gq(c, f, qp.F.Th);
      }
    }
    var f = Pc[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Zc(f[oc.Uh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = is(p.index, {
          onSuccess: h,
          onFailure: l,
          terminate: m
        }, c, d);
      if (!q) return null;
      h = q;
      l = 2 === p.ei ? m : q;
    }
    if (f[oc.Kh] || f[oc.Zj]) {
      var t = f[oc.Kh] ? Qc : c.gm,
        r = h,
        u = l;
      if (!t[a]) {
        e = Ma(e);
        var v = ks(a, t, e);
        h = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        t[a](r, u);
      };
    }
    return e;
  }
  function ks(a, b, c) {
    var d = [],
      e = [];
    b[a] = ls(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ms;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = ns;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function ls(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ms(a) {
    a();
  }
  function ns(a, b) {
    b();
  }
  ;
  var ps = function (a, b) {
      return 1 === arguments.length ? os("config", a) : os("config", a, b);
    },
    qs = function (a, b, c) {
      c = c || {};
      c[L.g.Nb] = a;
      return os("event", b, c);
    };
  function os(a) {
    return arguments;
  }
  var rs = function () {
    this.h = [];
    this.C = [];
  };
  rs.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c
    };
    this.h.push(e);
    for (var f = 0; f < this.C.length; f++) try {
      this.C[f](e);
    } catch (h) {}
  };
  rs.prototype.listen = function (a) {
    this.C.push(a);
  };
  rs.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  rs.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var ts = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = mg.Ie;
      ss().enqueue(a, b, c);
    },
    vs = function () {
      var a = us;
      ss().listen(a);
    };
  function ss() {
    var a = ye.mb;
    a || (a = new rs(), ye.mb = a);
    return a;
  }
  var Ds = function (a) {
      var b = ye.zones;
      return b ? b.getIsAllowedFn(pg(), a) : function () {
        return !0;
      };
    },
    Es = function () {
      Hq(function (a, b) {
        var c = ye.zones;
        return c ? c.isActive(pg(), b) : !0;
      });
    };
  var Hs = function (a, b) {
    for (var c = [], d = 0; d < Pc.length; d++) if (a[d]) {
      var e = Pc[d];
      var f = Gr(b.Sb);
      try {
        var h = is(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (h) {
          var l = e[oc.ma];
          if (!l) throw "Error: No function name given for function call.";
          var m = Rc[l];
          c.push({
            Hi: d,
            ui: (m ? m.priorityOverride || 0 : 0) || Fq(e[oc.ma], 1) || 0,
            execute: h
          });
        } else Fs(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(Gs);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Gs(a, b) {
    var c,
      d = b.ui,
      e = a.ui;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var h = a.Hi,
        l = b.Hi;
      f = h > l ? 1 : h < l ? -1 : 0;
    }
    return f;
  }
  function Fs(a, b) {
    if (Ng) {
      var c = function (d) {
        var e = b.isBlocked(Pc[d]) ? "3" : "4",
          f = Zc(Pc[d][oc.Ph], b, []);
        f && f.length && c(f[0].index);
        gs(b.id, Pc[d], e);
        var h = Zc(Pc[d][oc.Uh], b, []);
        h && h.length && c(h[0].index);
      };
      c(a);
    }
  }
  var Ks = !1,
    Is;
  var Ps = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (Q(24)) {}
    if ("gtm.js" === d) {
      if (Ks) return !1;
      Ks = !0;
    }
    var e,
      f = !1;
    if (Iq().every(function (t) {
      return t(d, b);
    })) e = Ds(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = Ds(Number.MAX_SAFE_INTEGER);
    }
    Wr(b, d);
    var h = a.eventCallback,
      l = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Pq(e),
        gm: [],
        logMacroError: function () {
          K(6);
          pf(0);
        },
        cachedModelValues: Ls(),
        checkPixieIncompatibility: Ms(b),
        Sb: new Br(function () {
          if (Q(24)) {}
          h && h.apply(h, [].slice.call(arguments, 0));
        }, l),
        originalEventData: z(a)
      };
    Q(42) && (m.reportMacroDiscrepancy = Zr);
    Q(24) && bq(m.id, m.name);
    var n = ed(m);
    Q(24) && cq(m.id, m.name);
    f && (n = Ns(n));
    if (Q(24)) {}
    var p = Hs(n, m),
      q = !1;
    Hr(m.Sb);
    "gtm.js" !== d && "gtm.sync" !== d || Or(tg());
    return Os(n, p) || q;
  };
  function Ms(a) {
    return function (b) {
      Za(b) || cs(a, "input", b);
    };
  }
  function Ls() {
    var a = {};
    a.event = bf("event", 1);
    a.ecommerce = bf("ecommerce", 1);
    a.gtm = bf("gtm");
    a.eventModel = bf("eventModel");
    return a;
  }
  function Ns(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(Pc[c][oc.ma]);
      if (Ae[d] || void 0 !== Pc[c][oc.bk] || Re[d] || Fq(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Os(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && Pc[c] && !Be[String(Pc[c][oc.ma])]) return !0;
    return !1;
  }
  var Qs = {},
    Rs = {},
    Ss = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        We: e.We,
        Qe: e.Qe
      }, f++) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (e.We = ll(h, b), e.We) {
            var l = rg();
            za(l, function (t) {
              return function (r) {
                return t.We.aa === r;
              };
            }(e)) ? c.push(h) : d.push(h);
          }
        } else {
          var m = Qs[h] || [];
          e.Qe = {};
          m.forEach(function (t) {
            return function (r) {
              return t.Qe[r] = !0;
            };
          }(e));
          for (var n = pg(), p = 0; p < n.length; p++) if (e.Qe[n[p]]) {
            c = c.concat(rg());
            break;
          }
          var q = Rs[h] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        Dl: c,
        Fl: d
      };
    },
    Ts = function (a) {
      k(Qs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Us = function (a) {
      k(Rs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Vs = "HA GF G UA AW DC MC".split(" "),
    Ws = !1,
    Xs = !1;
  function Ys(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Se()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    };
  }
  var Zs = void 0,
    $s = void 0;
  function at(a, b, c) {
    var d = z(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && K(136);
    var e = z(b);
    z(c, e);
    ts(ps(pg()[0], e), a.eventId, d);
  }
  function bt(a) {
    for (var b = ha([L.g.Zc, L.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || dm.D[d];
      if (e) return e;
    }
  }
  var ct = {
      config: function (a, b) {
        var c = Q(43),
          d = Ys(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !Ya(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = ll(a[1], b.isGtmEvent);
          if (f) {
            var h, l, m;
            a: {
              if (!kg.nd) {
                var n = vg(Bg());
                if (Fg(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    Jl: vg(p),
                    Cl: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var t = m;
            t && (h = t.Jl, l = t.Cl);
            Wr(d.eventId, "gtag.config");
            var r = f.aa,
              u = f.id !== r;
            if (u ? -1 === rg().indexOf(r) : -1 === pg().indexOf(r)) {
              if (!(c && b.inheritParentConfig || e[L.g.sb])) {
                var v = bt(e);
                if (u) Tq(r, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== h && -1 !== h.containers.indexOf(r)) {
                  var w = e;
                  Zs ? at(b, w, Zs) : $s || ($s = z(w));
                } else Sq(r, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (h && (K(128), l && K(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                $s ? (at(b, $s, y), x = !1) : (!y[L.g.Pb] && De && Zs || (Zs = z(y)), x = !0);
                x && h.containers && h.containers.join(",");
                return;
              }
              if (De && !u && !e[L.g.Pb]) {
                var A = Xs;
                Xs = !0;
                if (A) return;
              }
              Ws || K(43);
              if (!b.noTargetGroup) if (u) {
                Us(f.id);
                var B = f.id,
                  D = e[L.g.oe] || "default";
                D = String(D).split(",");
                for (var H = 0; H < D.length; H++) {
                  var G = Rs[D[H]] || [];
                  Rs[D[H]] = G;
                  0 > G.indexOf(B) && G.push(B);
                }
              } else {
                Ts(f.id);
                var I = f.id,
                  J = e[L.g.oe] || "default";
                J = J.toString().split(",");
                for (var M = 0; M < J.length; M++) {
                  var P = Qs[J[M]] || [];
                  Qs[J[M]] = P;
                  0 > P.indexOf(I) && P.push(I);
                }
              }
              delete e[L.g.oe];
              var U = b.eventMetadata || {};
              U.hasOwnProperty("is_external_event") || (U.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = U;
              delete e[L.g.Tc];
              for (var R = u ? [f.id] : rg(), O = 0; O < R.length; O++) {
                var ba = e,
                  aa = z(b),
                  Z = ll(R[O], aa.isGtmEvent);
                Z && dm.push("config", [ba], Z, aa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          K(39);
          var c = Ys(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[L.g.N] && K(139), e[L.g.ya] && K(140));
          "default" === d ? Zf(e) : "update" === d ? $f(e, c) : "declare" === d ? b.fromContainerExecution && Yf(e) : Q(80) && "core_platform_services" === d && ag(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if (!Ya(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            h = (f.event = c, f);
          e && (h.eventModel = z(e), e[L.g.Tc] && (h.eventCallback = e[L.g.Tc]), e[L.g.ie] && (h.eventTimeout = e[L.g.ie]));
          var l = Ys(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
          var p;
          var q = d,
            t = q && q[L.g.Nb];
          void 0 === t && (t = Ye(L.g.Nb, 2), void 0 === t && (t = "default"));
          if (g(t) || xa(t)) {
            var r;
            b.isGtmEvent ? r = g(t) ? [t] : t : r = t.toString().replace(/\s+/g, "").split(",");
            var u = Ss(r, b.isGtmEvent),
              v = u.Dl,
              w = u.Fl;
            if (w.length) for (var x = bt(q), y = 0; y < w.length; y++) {
              var A = ll(w[y], b.isGtmEvent);
              A && Tq(A.aa, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = nl(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            Wr(m, c);
            for (var D = [], H = 0; H < B.length; H++) {
              var G = B[H],
                I = z(b);
              if (-1 !== Vs.indexOf(wg(G.prefix))) {
                var J = z(d),
                  M = I.eventMetadata || {};
                M.hasOwnProperty("is_external_event") || (M.is_external_event = !I.fromContainerExecution);
                I.eventMetadata = M;
                delete J[L.g.Tc];
                em(c, J, G.id, I);
              }
              D.push(G.id);
            }
            h.eventModel = h.eventModel || {};
            0 < B.length ? h.eventModel[L.g.Nb] = D.join() : delete h.eventModel[L.g.Nb];
            Ws || K(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            h.eventModel[L.g.rb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h;
          }
        }
      },
      get: function (a, b) {
        K(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && ua(a[3])) {
          var c = ll(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Ws || K(43);
            var f = bt();
            if (!za(rg(), function (l) {
              return c.aa === l;
            })) Tq(c.aa, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== Vs.indexOf(wg(c.prefix))) {
              Ys(a, b);
              var h = {};
              Vf(z((h[L.g.eb] = d, h[L.g.pb] = e, h)));
              fm(d, function (l) {
                F(function () {
                  return e(l);
                });
              }, c.id, b);
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Ws = !0;
          var c = Ys(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f;
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Ya(a[1]) ? c = z(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Ya(a[2]) || xa(a[2]) ? c[a[1]] = z(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = Ys(a, b),
            e = d.eventId,
            f = d.priorityId;
          z(c);
          var h = z(c);
          dm.push("set", [h], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    dt = {
      policy: !0
    };
  var et = function (a) {
      var b = C[xe.ba].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
          c = !1;
          break;
        }
        c && (b.end(), b.end = null);
      }
    },
    ft = function (a) {
      var b = C[xe.ba],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var gt = !1,
    ht = [];
  function it() {
    if (!gt) {
      gt = !0;
      for (var a = 0; a < ht.length; a++) F(ht[a]);
    }
  }
  var jt = function (a) {
    gt ? F(a) : ht.push(a);
  };
  var Bt = function (a) {
    if (At(a)) return a;
    this.h = a;
  };
  Bt.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var At = function (a) {
    return !a || "object" !== Va(a) || Ya(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  Bt.prototype.getUntrustedMessageValue = Bt.prototype.getUntrustedMessageValue;
  var Ct = 0,
    Dt = {},
    Et = [],
    Ft = [],
    Gt = !1,
    Ht = !1;
  function It(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Jt = function (a) {
      return C[xe.ba].push(a);
    },
    Kt = function (a, b) {
      if (!va(b) || 0 > b) b = 0;
      var c = ye[xe.ba],
        d = 0,
        e = !1,
        f = void 0;
      f = C.setTimeout(function () {
        e || (e = !0, a());
        f = void 0;
      }, b);
      return function () {
        var h = c ? c.subscribers : 1;
        ++d === h && (f && (C.clearTimeout(f), f = void 0), e || (a(), e = !0));
      };
    };
  function Lt(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && af(e), af(e, f));
    });
    Ne || (Ne = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Se(), a["gtm.uniqueEventId"] = d, af("gtm.uniqueEventId", d));
    return Ps(a);
  }
  function Mt(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Da(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function Nt() {
    var a;
    if (Ft.length) a = Ft.shift();else if (Et.length) a = Et.shift();else return;
    var b;
    var c = a;
    if (Gt || !Mt(c.message)) b = c;else {
      Gt = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Se());
      var e = {},
        f = {
          message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
          messageContext: {
            eventId: d - 2
          }
        },
        h = {},
        l = {
          message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
          messageContext: {
            eventId: d - 1
          }
        };
      Et.unshift(l, c);
      if (Ng) {
        var m = mg.ctid;
        if (m) {
          var n,
            p = vg(Bg());
          n = p && p.context;
          var q,
            t = Aj(C.location.href);
          q = t.hostname + t.pathname;
          var r = n && n.fromContainerExecution,
            u = n && n.source,
            v = mg.Ie,
            w = kg.nd;
          Ng && (Pl || (Pl = q), Ql.push(m + ";" + v + ";" + (r ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function Ot() {
    for (var a = !1, b; !Ht && (b = Nt());) {
      Ht = !0;
      delete Ve.eventModel;
      Xe();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Ht = !1;else {
        if (e.fromContainerExecution) for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
          var l = f[h],
            m = Ye(l, 1);
          if (xa(m) || Ya(m)) m = z(m);
          We[l] = m;
        }
        try {
          if (ua(d)) try {
            d.call(Ze);
          } catch (D) {} else if (xa(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                r = Ye(p.join("."), 2);
              if (null != r) try {
                r[q].apply(r, t);
              } catch (D) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Da(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = ct[d[0]];
                  if (w && (!e.fromContainerExecution || !dt[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && K(101);
            } else u = d;
            if (u) {
              var x = Lt(u, e);
              a = x || a;
              v && x && K(113);
            }
          }
        } finally {
          e.fromContainerExecution && Xe(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = Dt[String(y)] || [], B = 0; B < A.length; B++) Ft.push(Pt(A[B]));
            A.length && Ft.sort(It);
            delete Dt[String(y)];
            y > Ct && (Ct = y);
          }
          Ht = !1;
        }
      }
    }
    return !a;
  }
  function Qt() {
    if (Q(24)) {
      var a = Rt();
    }
    var b = Ot();
    if (Q(24)) {}
    try {
      et(tg());
    } catch (c) {}
    return b;
  }
  function us(a) {
    if (Ct < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Dt[b] = Dt[b] || [];
      Dt[b].push(a);
    } else Ft.push(Pt(a)), Ft.sort(It), F(function () {
      Ht || Ot();
    });
  }
  function Pt(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var St = function () {
      function a(f) {
        var h = {};
        if (At(f)) {
          var l = f;
          f = At(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: h
        };
      }
      var b = Sb(xe.ba, []),
        c = ye[xe.ba] = ye[xe.ba] || {};
      !0 === c.pruned && K(83);
      Dt = ss().get();
      vs();
      yr(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      jt(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push((f.event = "gtm.load", f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < ye.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++) f[h] = new Bt(arguments[h]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Et.push.apply(Et, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (K(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return Ot() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Et.push.apply(Et, e);
      if (Rt()) {
        if (Q(24)) {}
        F(Qt);
      }
    },
    Rt = function () {
      var a = !0;
      return a;
    };
  function Tt(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ka();
    return b < c + 3E5 && b > c - 9E5;
  }
  function Ut(a) {
    return a && 0 === a.indexOf("pending:") ? Tt(a.substr(8)) : !1;
  }
  ;
  var ou = function () {};
  var pu = function () {};
  pu.prototype.toString = function () {
    return "undefined";
  };
  var qu = new pu();
  var su = function () {
      (ye.rm = ye.rm || {})[ug()] = function (a) {
        if (ru.hasOwnProperty(a)) return ru[a];
      };
    },
    vu = function (a, b, c) {
      if (a instanceof tu) {
        var d = a,
          e = d.h,
          f = b,
          h = Se();
        uu[h] = [f, c];
        a = e.call(d, h);
        b = ta;
      }
      return {
        il: a,
        onSuccess: b
      };
    },
    wu = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        K(a ? 134 : 135);
        var d = uu[c];
        if (d && "function" === typeof d[b]) d[b]();
        uu[c] = void 0;
      };
    },
    tu = function (a) {
      this.h = function (b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === qu ? b : a[d]);
        return c.join("");
      };
    };
  tu.prototype.toString = function () {
    return this.h("undefined");
  };
  tu.prototype.valueOf = tu.prototype.toString;
  var ru = {},
    uu = {};
  var Vu = C.clearTimeout,
    Wu = C.setTimeout,
    V = function (a, b, c, d) {
      if (aj()) {
        b && F(b);
      } else return Xb(a, b, c, d);
    },
    Xu = function () {
      return new Date();
    },
    Yu = function () {
      return C.location.href;
    },
    Zu = function (a) {
      return yj(Aj(a), "fragment");
    },
    $u = function (a) {
      return zj(Aj(a));
    },
    av = function (a, b) {
      return Ye(a, b || 2);
    },
    bv = function (a, b, c) {
      var d;
      b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Jt(a)) : d = Jt(a);
      return d;
    },
    cv = function (a, b) {
      C[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === C[a] || c && !C[a]) && (C[a] = b);
      return C[a];
    },
    dv = function (a, b, c) {
      return Ii(a, b, void 0 === c ? !0 : !!c);
    },
    ev = function (a, b, c) {
      return 0 === Ri(a, b, c);
    },
    fv = function (a, b) {
      if (aj()) {
        b && F(b);
      } else Zb(a, b);
    },
    gv = function (a) {
      return !!Bu(a, "init", !1);
    },
    hv = function (a) {
      zu(a, "init", !0);
    },
    iv = function (a, b, c) {
      Za(a) || cs(c, b, a);
    };
  function Fv(a, b) {
    function c(h) {
      var l = Aj(h),
        m = yj(l, "protocol"),
        n = yj(l, "host", !0),
        p = yj(l, "port"),
        q = yj(l, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Gv(a) {
    return Hv(a) ? 1 : 0;
  }
  function Hv(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = z(a, {});
        z({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Gv(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var h = 0; h < vd.length; h++) {
              var l = vd[h];
              if (b[l]) {
                f = b[l](c);
                break a;
              }
            }
          } catch (v) {}
          f = !1;
        }
        return f;
      case "_ew":
        var m, n;
        m = String(b);
        n = String(c);
        var p = m.length - n.length;
        return 0 <= p && m.indexOf(n, p) === p;
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var q;
        var t = a.ignore_case ? "i" : void 0;
        try {
          var r = String(c) + t,
            u = wd.get(r);
          u || (u = new RegExp(c, t), wd.set(r, u));
          q = u.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Fv(b, c);
    }
    return !1;
  }
  ;
  function Iv() {
    var a = ["&cv=929", "&rv=" + xe.Nf, "&tc=" + Pc.filter(function (b) {
      return b;
    }).length];
    xe.qd && a.push("&x=" + xe.qd);
    return a.join("");
  }
  ;
  var mw = function () {
      var a = !0;
      mi(7) && mi(9) && mi(10) || (a = !1);
      return a;
    },
    nw = function () {
      var a = !0;
      mi(3) && mi(4) || (a = !1);
      return a;
    };
  uf();
  function sx() {
    return C.gaGlobal = C.gaGlobal || {};
  }
  var tx = function () {
      var a = sx();
      a.hid = a.hid || Aa();
      return a.hid;
    },
    ux = function (a, b) {
      var c = sx();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var by = function (a) {
      this.C = a;
      this.D = "";
      this.h = this.C;
    },
    cy = function (a, b) {
      a.h = b;
      return a;
    };
  function dy(a) {
    var b = a.search;
    return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse");
  }
  function ey(a, b) {
    var c = a || [];
    if (Array.isArray(c)) for (var d = 0; d < c.length; d++) b(c[d]);
  }
  ;
  var ty = window,
    uy = document,
    vy = function (a) {
      var b = ty._gaUserPrefs;
      if (b && b.ioo && b.ioo() || uy.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === ty["ga-disable-" + a]) return !0;
      try {
        var c = ty.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = Ei("AMP_TOKEN", String(uy.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return uy.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Ey(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[L.g.Ta] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  jsWatcher.watch();
  var My = function (a, b) {};
  function Ly(a, b) {
    var c = function () {};
    return c;
  }
  function Ny(a, b, c) {}
  ;
  var Oy = Ly;
  Object.freeze({
    dl: 1,
    id: 1
  });
  Object.freeze(["config", "event", "get", "set"]);
  var Qy = encodeURI,
    X = encodeURIComponent,
    Ry = function (a, b, c) {
      $b(a, b, c);
    },
    Sy = function (a, b) {
      if (!a) return !1;
      var c = yj(Aj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, e = "." + e);
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Ty = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null;
    };
  var Y = {
    m: {}
  };
  Y.m.e = ["google"], function () {
    (function (a) {
      Y.__e = a;
      Y.__e.o = "e";
      Y.__e.isVendorTemplate = !0;
      Y.__e.priorityOverride = 0;
      Y.__e.isInfrastructure = !1;
      Y.__e.runInSiloedMode = !0;
    })(function (a) {
      return String(a.vtp_gtmCachedValues.event);
    });
  }();
  Y.m.f = ["google"], function () {
    (function (a) {
      Y.__f = a;
      Y.__f.o = "f";
      Y.__f.isVendorTemplate = !0;
      Y.__f.priorityOverride = 0;
      Y.__f.isInfrastructure = !1;
      Y.__f.runInSiloedMode = !1;
    })(function (a) {
      var b = av("gtm.referrer", 1) || E.referrer;
      return b ? a.vtp_component && "URL" != a.vtp_component ? yj(Aj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : $u(String(b)) : String(b);
    });
  }();
  Y.m.u = ["google"], function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    (function (b) {
      Y.__u = b;
      Y.__u.o = "u";
      Y.__u.isVendorTemplate = !0;
      Y.__u.priorityOverride = 0;
      Y.__u.isInfrastructure = !1;
      Y.__u.runInSiloedMode = !1;
    })(function (b) {
      var c;
      c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : av("gtm.url", 1)) || Yu();
      var d = b[a("vtp_component")];
      if (!d || "URL" == d) return $u(String(c));
      var e = Aj(String(c)),
        f;
      if ("QUERY" === d) a: {
        var h = b[a("vtp_multiQueryKeys").toString()],
          l = b[a("vtp_queryKey").toString()] || "",
          m = b[a("vtp_ignoreEmptyQueryParam").toString()],
          n;
        h ? xa(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
        for (var p = 0; p < n.length; p++) {
          var q = yj(e, "QUERY", void 0, void 0, n[p]);
          if (void 0 != q && (!m || "" !== q)) {
            f = q;
            break a;
          }
        }
        f = void 0;
      } else f = yj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
      return f;
    });
  }();
  Y.m.html = ["customScripts"], function () {
    function a(d, e, f, h) {
      return function () {
        try {
          if (0 < e.length) {
            var l = e.shift(),
              m = a(d, e, f, h);
            if ("SCRIPT" == String(l.nodeName).toUpperCase() && "text/gtmscript" == l.type) {
              var n = E.createElement("script");
              n.async = !1;
              n.type = "text/javascript";
              n.id = l.id;
              n.text = l.text || l.textContent || l.innerHTML || "";
              l.charset && (n.charset = l.charset);
              var p = l.getAttribute("data-gtmsrc");
              p && (n.src = p, Tb(n, m));
              d.insertBefore(n, null);
              p || m();
            } else if (l.innerHTML && 0 <= l.innerHTML.toLowerCase().indexOf("<script")) {
              for (var q = []; l.firstChild;) q.push(l.removeChild(l.firstChild));
              d.insertBefore(l, null);
              a(l, q, m, h)();
            } else d.insertBefore(l, null), m();
          } else f();
        } catch (t) {
          F(h);
        }
      };
    }
    function b(d) {
      if (E.body) {
        var e = d.vtp_gtmOnFailure,
          f = vu(d.vtp_html, d.vtp_gtmOnSuccess, e),
          h = f.il,
          l = f.onSuccess;
        if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(h, l, e) : a(E.body, ec(h), l, e)();
      } else Wu(function () {
        b(d);
      }, 200);
    }
    Y.__html = b;
    Y.__html.o = "html";
    Y.__html.isVendorTemplate = !0;
    Y.__html.priorityOverride = 0;
    Y.__html.isInfrastructure = !1;
    Y.__html.runInSiloedMode = !1;
  }();
  var oA = {};
  oA.onHtmlSuccess = wu(!0), oA.onHtmlFailure = wu(!1);
  oA.dataLayer = Ze;
  oA.callback = function (a) {
    Pe.hasOwnProperty(a) && ua(Pe[a]) && Pe[a]();
    delete Pe[a];
  };
  oA.bootstrap = 0;
  oA._spx = !1;
  function pA() {
    ye[tg()] = ye[tg()] || oA;
    zg();
    Dg() || k(Eg(), function (a, b) {
      Tq(a, b.transportUrl, b.context);
      K(92);
    });
    Na(Qe, Y.m);
    Q(66) && vg(Bg());
    su(), Uc({
      pl: function (a) {
        return a === qu;
      },
      Ak: function (a) {
        return new tu(a);
      },
      ql: function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c;
      },
      Pl: function (a) {
        var b;
        if (a === qu) b = a;else {
          var c = Se();
          ru[c] = a;
          b = 'google_tag_manager["rm"]["' + ug() + '"](' + c + ")";
        }
        return b;
      }
    });
    Wc = fd;
  }
  (function (a) {
    function b() {
      m = E.documentElement.getAttribute("data-tag-assistant-present");
      Tt(m) && (l = h.Pj);
    }
    if (!C["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (E.referrer) {
        var d = Aj(E.referrer);
        c = "cct.google" === xj(d, "host");
      }
      if (!c) {
        var e = Ii("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (C["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"));
    }
    if (Ke) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Ee ? (v = "OGT", w = "GTAG") : Ke && (w = v = "OPT");
          var x = C["google.tagmanager.debugui2.queue"];
          x || (x = [], C["google.tagmanager.debugui2.queue"] = x, Xb("https://" + xe.Gc + "/debug/bootstrap?id=" + mg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + cj()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Rb,
              containerProduct: v,
              debug: !1,
              id: mg.ctid,
              targetRef: {
                ctid: mg.ctid,
                isDestination: kg.nd
              },
              aliases: ng(),
              destinations: qg()
            }
          };
          y.data.resume = function () {
            a();
          };
          xe.Si && (y.data.initialPublish = !0);
          x.push(y);
        },
        h = {
          Fm: 1,
          Qj: 2,
          ek: 3,
          Ui: 4,
          Pj: 5
        },
        l = void 0,
        m = void 0,
        n = yj(C.location, "query", !1, void 0, "gtm_debug");
      Tt(n) && (l = h.Qj);
      if (!l && E.referrer) {
        var p = Aj(E.referrer);
        "tagassistant.google.com" === xj(p, "host") && (l = h.ek);
      }
      if (!l) {
        var q = Ii("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.Ui);
      }
      l || b();
      if (!l && Ut(m)) {
        var t = function () {
            if (r) return !0;
            r = !0;
            b();
            l && Rb ? f(l) : a();
          },
          r = !1;
        ac(E, "TADebugSignal", function () {
          t();
        }, !1);
        C.setTimeout(function () {
          t();
        }, 200);
      } else l && Rb ? f(l) : a();
    }
  })(function () {
    try {
      xg();
      if (Q(24)) {}
      zf().C();
      ji();
      (Q(112) || Q(113) || Q(114)) && Cm();
      var a = ug();
      if (hg().canonical[a]) {
        var b = ye.zones;
        b && b.unregisterChild(pg());
      } else {
        Qq();
        for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) Mc.push(d[e]);
        for (var f = c.tags || [], h = 0; h < f.length; h++) Pc.push(f[h]);
        for (var l = c.predicates || [], m = 0; m < l.length; m++) Oc.push(l[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], t = {}, r = 0; r < q.length; r++) {
            var u = q[r][0];
            t[u] = Array.prototype.slice.call(q[r], 1);
            "if" !== u && "unless" !== u || Vc(t[u]);
          }
          Nc.push(t);
        }
        Rc = Y;
        Sc = Gv;
        pA();
        if (Q(33) && !Ke) {
          for (var v = qf["7"], w = v ? v.split("|") : [], x = {}, y = 0; y < w.length; y++) x[w[y]] = !0;
          for (var A = 0; A < Xf.length; A++) {
            var B = Xf[A],
              D = x[B] ? "granted" : "denied";
            Ef().implicit(B, D);
          }
        }
        St();
        Uq = !1;
        Vq = 0;
        if ("interactive" == E.readyState && !E.createEventObject || "complete" == E.readyState) wr();else {
          ac(E, "DOMContentLoaded", wr);
          ac(E, "readystatechange", wr);
          if (E.createEventObject && E.documentElement.doScroll) {
            var H = !0;
            try {
              H = !C.frameElement;
            } catch (P) {}
            H && xr();
          }
          ac(C, "load", wr);
        }
        gt = !1;
        "complete" === E.readyState ? it() : ac(C, "load", it);
        Ng && (Ig($g), C.setInterval(Zg, 864E5));
        Ig(Iv);
        Ig(Xr);
        Ig(rp);
        Ig(cm);
        Ig(hs);
        Ig(Tl);
        Ig(ej);
        Ig(Rl);
        Ig(ds);
        Q(42) && Ig($r);
        ou();
        pf(1);
        Es();
        Oe = Ka();
        oA.bootstrap = Oe;
        if (Q(24)) {}
      }
    } catch (P) {
      if (pf(4), Ng) {
        var M = Ug(!0, !0);
        $b(M);
      }
    }
  });
})();