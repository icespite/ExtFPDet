if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
const nativeLocalStorageSetItem = localStorage.setItem;
const nativeLocalStorageGetItem = localStorage.getItem;
const nativeConsoleLog = console.log;
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_ityHZfevE7yS29gPtbKXWA"\x3e');
const globalVars = {};
const eventHooks = window.eventhooks || {};
Object.keys(window).forEach(function (key) {
  globalVars[key] = window[key];
});
function generateUUID() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000000);
  return `${timestamp}-${random}`;
}
function validateArgs(actualArgs, expectedArgs) {
  return actualArgs.length === expectedArgs.length && expectedArgs.every((expectedArg, i) => (!expectedArg.required || actualArgs[i] !== undefined && actualArgs[i] !== null) && typeof actualArgs[i] === expectedArg.type);
}
(function () {
  var m = document.createElement('meta');
  m.setAttribute('data-jc', '82');
  m.setAttribute('data-jc-version', 'r20231207');
  var ss = document.getElementsByTagName('script')[0];
  if (ss && ss.parentNode) {
    ss.parentNode.insertBefore(m, ss);
  }
})();
(function () {
  /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var h = this || self;
  function l(a, d, b) {
    if (a) for (var c = 0; null != a && 500 > c && !b(a); ++c) a = d(a);
  }
  function m(a, d) {
    l(a, function (b) {
      try {
        return b === b.parent ? null : b.parent;
      } catch (c) {}
      return null;
    }, d);
  }
  function n(a, d) {
    if ("IFRAME" == a.tagName) d(a);else {
      a = a.querySelectorAll("IFRAME");
      for (var b = 0; b < a.length && !d(a[b]); ++b);
    }
  }
  function p(a) {
    return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null;
  }
  function q(a, d, b) {
    try {
      var c = JSON.parse(b.data);
    } catch (f) {}
    if ("object" === typeof c && c && "creativeLoad" === c.type) {
      var g = p(a);
      if (b.source && g) {
        var e;
        m(b.source, function (f) {
          try {
            if (f.parent === g) return e = f, !0;
          } catch (k) {}
        });
        e && n(a, function (f) {
          if (f.contentWindow === e) return d(c), !0;
        });
      }
    }
  }
  function r(a) {
    return "string" === typeof a ? document.getElementById(a) : a;
  }
  ;
  var t;
  t = void 0 === t ? window : t;
  t.clsn = function (a, d) {
    var b = r(a);
    if (b) if (b.onCreativeLoad) b.onCreativeLoad(d);else {
      var c = d ? [d] : [],
        g = function (e) {
          for (var f = 0; f < c.length; ++f) try {
            c[f](1, e);
          } catch (k) {}
          c = {
            push: function (k) {
              k(1, e);
            }
          };
        };
      b.onCreativeLoad = function (e) {
        c.push(e);
      };
      b.setAttribute("data-creative-load-listener", "");
      b.addEventListener("creativeLoad", function (e) {
        g(e.detail);
      });
      h.addEventListener("message", function (e) {
        q(b, g, e);
      });
    }
  };
}).call(this);
function recordEventInfo(eventType, args) {
  const stackTrace = new Error().stack;
  const callerUrlMatch = stackTrace.match(/https?:\/\/[^)\n]+/i);
  const callerUrl = callerUrlMatch ? callerUrlMatch[0] : '';
  const eventInfo = {
    eventType,
    args,
    callerUrl,
    timestamp: new Date().toISOString(),
    uuid: generateUUID()
  };
  globalVars.ajax.send({
    url: '/log/event',
    method: 'POST',
    data: eventInfo
  });
}
clsn("gcc_ityHZfevE7yS29gPtbKXWA");
function hookFunc(originalFunc, eventType, expectedArgs, callOriginal = true) {
  return function () {
    const args = Array.from(arguments);
    if (validateArgs(args, expectedArgs)) {
      recordEventInfo(eventType, args);
    }
    return callOriginal ? originalFunc(...args) : undefined;
  };
}
eventHooks.forEach(function (eventHook) {
  const originalFunc = window[eventHook.funcName];
  if (typeof originalFunc === 'function') {
    window[eventHook.funcName] = hookFunc(originalFunc, eventHook.funcName, eventHook.args);
  }
});
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CPectqfFp4MDFTzJFgUdNdkFCw\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsuYOl3FNGYExd8rGvVNPqKVLHKt3Y4RSijWhoRR22Lz_WulwDlj1wCtEYH9gZ4xiFnWuExtTTHsr4alCFzdR3mMRfeeJyg-hawOuMjq6DBDz6sQYeEtLua4TGBgmPUdAtPj1N_IKIMdSSsTMFUensOywYaI8lyafIb1q2crJlSZPj7lLPMh08pEGej2mPU8NncIQzWVBnTr9LO1CZd73LvtTTSl1Udomr1PaeYeoxNsrYNLj8B_yK7iaNrzIvRAkmHnM_OT66SBwJ-d2zLs0ufKmjHQeyP1Y3MsCLFqAtaX-Kbc9jmUUz4xXAyHpIDFbwQfUOAStem18wUEdFQPbbDvsDpICe6uJpIw1UaVK13usUuruW3TrvTkrrjjD6NDr_vhtebQ6PSy4KlI6XdKFoTIwvDS-2zsru5EeDAh-gVSl5DHvf-utqbGjQ5nO96rZjeCINNJcegwrMOVJgVvqQMia5Wx4w1rqsz9-bZJ-nN0-vXrd2Y7MEE9-svi8aCPveMLz1PscJb7XksS9Vr4XeKBOTZH9Wdttmr0CcUAV-40nYrco2-fZH3N4fJfWTlhPDznIAc_iEsiCqg_sw0i5xQy36IpL14TH52apTktJrtY-l3s-Ak_BM9P3sZSClRVUp9b7PUBkSjH0Wn1w_UBtW3M7uKBh7w3nhvWDEszWQlNjEpZq0QPpM30BiWiPVSDFzBRh6San4vEPjTwUQhLL28d4J4zDfnNz_sEUo8u4O14DO6UTbtRDdK7yXXDlbfcXh0Ngtf7mIk6qSy8wbVaK-W8CLNb4uoxUw2c47fpR0tIdD3Tqk2HPuYkIy3h_jzUTaeQVzmLZnyVTYOmGaEVMV7u5Z-qLEPXrIfknEE7V06CfSYTUobcHbtB9P96nXW75aSinThlDyejFV8US9aC0kGBWA7U1mnk732NkquPNTKRcwkP2QWDGdK8eueOqoWLL5T-cBaZMOhBKk178XpLW_US8JMRoz4n7WZlvTLLNe8jHEXW4LWelJr2PkpllU0Fjs6Hx5LkIHos0nlTqHB30Qq-1Mm3Ztdgk8ePmQ4SmZp5kpMH6EvA41BO6hOueJSk5L9WNgFlCDhgO0jLhGFWfgyz26GDAoRWGUutv5OD1o5gV9hXBtmdVEWIrnkzYW-xFwJZ7R7eBwW0J2JrG6cDkrHqXwRcMosS7dUb4fNJ3QkPbHGwtFvEscrF8EuuSxkIW2KXhXb0v8P-SFWX-wJdlIywJkh13LGeOBjleIqY3VKVDyexFIfmVYOKZ8XUnz0l7lK_a2uP5-AwjUlarugEcBVZSnWYkJkL9JbOBcFBTbAIZIMvEQiNcQcF1t1ice2yOVq8hSAXEpCJfPmtE9qAgHsYH9pMjyzV3K-rYbMsCRR6\x26amp;sai\x3dAMfl-YSHMU5FUrCu6FtPCnl__bpha4p_Quv83L8GLsNJbXKEhBy2agGmhIWP7TC8uXV5ig5vtCOcK9l_0gZf22DuXsuyA6sPV35Z5RsCtMmMUTZYsrt6tpCMcoi1qTljDCx2etOw6aFyLNBd0eBwxGJThoU2h3HcwK9byQpjNDsiKqmTMuaZpWxX-GYkZdaRWP7bklXKtxXiLnnlrHHxw3v6M55-YNUgci57aSPARBz0Z2bISKZClo2qVl1Rex_BtagE-JTgm78J5ax7iqMPy-z2yNyMRhNJy6pvqp0T5HVWmVJyYwtzW3yCCRBKMTjK4575eSm-RuKmTf-I\x26amp;sig\x3dCg0ArKJSzB2Xv34HYkRp\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d%5Bgw_fbsaeid%5D\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://azure.microsoft.com/zh-cn/free/services/azure-migrate/search%3FOCID%3DAIDcmmknmz9ars_OLA_30626129_376662344_184235643%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/4606846330227220079\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22728\x22 height\x3d\x2290\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20231207\x22 data-jcp-a-id\x3d\x22img_anch_CPectqfFp4MDFTzJFgUdNdkFCw\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dc.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var c\x3da[b];if(c\x26\x26c.Math\x3d\x3dMath)return c}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function p(a,b){if(b)a:{var c\x3dca;a\x3da.split(\x22.\x22);for(var d\x3d0;d\x3ca.length-1;d++){var e\x3da[d];if(!(e in c))break a;c\x3dc[e]}a\x3da[a.length-1];d\x3dc[a];b\x3db(d);b!\x3dd\x26\x26null!\x3db\x26\x26aa(c,a,{configurable:!0,writable:!0,value:b})}}var da\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},r; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)r\x3dObject.setPrototypeOf;else{var t;a:{var ea\x3d{a:!0},fa\x3d{};try{fa.__proto__\x3dea;t\x3dfa.a;break a}catch(a){}t\x3d!1}r\x3dt?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var ha\x3dr; function ia(a,b){a.prototype\x3dda(b.prototype);a.prototype.constructor\x3da;if(ha)ha(a,b);else for(var c in b)if(\x22prototype\x22!\x3dc)if(Object.defineProperties){var d\x3dObject.getOwnPropertyDescriptor(b,c);d\x26\x26Object.defineProperty(a,c,d)}else a[c]\x3db[c];a.A\x3db.prototype}var ja\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var c\x3d1;c\x3carguments.length;c++){var d\x3darguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)\x26\x26(a[e]\x3dd[e])}return a}; p(\x22Object.assign\x22,function(a){return a||ja});p(\x22Object.is\x22,function(a){return a?a:function(b,c){return b\x3d\x3d\x3dc?0!\x3d\x3db||1/b\x3d\x3d\x3d1/c:b!\x3d\x3db\x26\x26c!\x3d\x3dc}});p(\x22Array.prototype.includes\x22,function(a){return a?a:function(b,c){var d\x3dthis;d instanceof String\x26\x26(d\x3dString(d));var e\x3dd.length;c\x3dc||0;for(0\x3ec\x26\x26(c\x3dMath.max(c+e,0));c\x3ce;c++){var f\x3dd[c];if(f\x3d\x3d\x3db||Object.is(f,b))return!0}return!1}}); p(\x22String.prototype.includes\x22,function(a){return a?a:function(b,c){if(null\x3d\x3dthis)throw new TypeError(\x22The \x27this\x27 value for String.prototype.includes must not be null or undefined\x22);if(b instanceof RegExp)throw new TypeError(\x22First argument to String.prototype.includes must not be a regular expression\x22);return-1!\x3d\x3dthis.indexOf(b,c||0)}});p(\x22Number.isFinite\x22,function(a){return a?a:function(b){return\x22number\x22!\x3d\x3dtypeof b?!1:!isNaN(b)\x26\x26Infinity!\x3d\x3db\x26\x26-Infinity!\x3d\x3db}});/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var u\x3dthis||self;function ka(a,b){a:{var c\x3d[\x22CLOSURE_FLAGS\x22];for(var d\x3du,e\x3d0;e\x3cc.length;e++)if(d\x3dd[c[e]],null\x3d\x3dd){c\x3dnull;break a}c\x3dd}a\x3dc\x26\x26c[a];return null!\x3da?a:b};var la\x3dka(610401301,!1),w\x3dka(572417392,!0);var y,ma\x3du.navigator;y\x3dma?ma.userAgentData||null:null;function z(a){return la?y?y.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function A(a){var b;a:{if(b\x3du.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function B(){return la?!!y\x26\x260\x3cy.brands.length:!1}function C(){return B()?z(\x22Chromium\x22):(A(\x22Chrome\x22)||A(\x22CriOS\x22))\x26\x26!(B()?0:A(\x22Edge\x22))||A(\x22Silk\x22)};var na\x3dB()?!1:A(\x22Trident\x22)||A(\x22MSIE\x22);!A(\x22Android\x22)||C();C();A(\x22Safari\x22)\x26\x26(C()||(B()?0:A(\x22Coast\x22))||(B()?0:A(\x22Opera\x22))||(B()?0:A(\x22Edge\x22))||(B()?z(\x22Microsoft Edge\x22):A(\x22Edg/\x22))||B()\x26\x26z(\x22Opera\x22));var oa\x3d{},D\x3dnull;var pa\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,qa\x3d!na\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var ra\x3d!w,sa\x3d!w;var E\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0;var ta\x3dE?function(a,b){a[E]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function ua(a){var b\x3dF(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),G(a,b|1))}var F\x3dE?function(a){return a[E]|0}:function(a){return a.g|0},H\x3dE?function(a){return a[E]}:function(a){return a.g},G\x3dE?function(a,b){a[E]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})}; function va(){var a\x3d[];ta(a,1);return a}function I(a){a\x3da\x3e\x3e14\x261023;return 0\x3d\x3d\x3da?536870912:a};var wa\x3d{},xa\x3d{};function ya(a){return!(!a||\x22object\x22!\x3d\x3dtypeof a||a.s!\x3d\x3dxa)}function J(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var K,za\x3d!w;function L(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d\x3dF(a);if(d\x261)return!0;if(!(b\x26\x26(Array.isArray(b)?b.includes(c):b.has(c))))return!1;G(a,d|1);return!0}var M,Aa\x3d[];G(Aa,55);M\x3dObject.freeze(Aa);Object.freeze(new function(){});Object.freeze(new function(){});function Ba(){var a\x3dError(\x22int32\x22);a.__closure__error__context__984382||(a.__closure__error__context__984382\x3d{});a.__closure__error__context__984382.severity\x3d\x22warning\x22;return a};function Ca(a){if(\x22number\x22!\x3d\x3dtypeof a)throw Ba();if(!Number.isFinite(a))throw Ba();return a|0};var Da;function N(a,b,c){null\x3d\x3da\x26\x26(a\x3dDa);Da\x3dvoid 0;if(null\x3d\x3da){var d\x3d96;c?(a\x3d[c],d|\x3d512):a\x3d[];b\x26\x26(d\x3dd\x26-16760833|(b\x261023)\x3c\x3c14)}else{if(!Array.isArray(a))throw Error();d\x3dF(a);if(d\x2664)return a;d|\x3d64;if(c\x26\x26(d|\x3d512,c!\x3d\x3da[0]))throw Error();a:{c\x3dd;if(d\x3da.length){var e\x3dd-1;if(J(a[e])){c|\x3d256;b\x3de-(+!!(c\x26512)-1);if(1024\x3c\x3db)throw Error();d\x3dc\x26-16760833|(b\x261023)\x3c\x3c14;break a}}if(b){b\x3dMath.max(b,d-(+!!(c\x26512)-1));if(1024\x3cb)throw Error();d\x3dc\x26-16760833|(b\x261023)\x3c\x3c14}else d\x3dc}}G(a,d);return a};function Ea(a,b){return Fa(b)} function Fa(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a){if(Array.isArray(a))return za||!L(a,void 0,9999)?a:void 0;if(pa\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(qa){for(var b\x3d\x22\x22,c\x3d0,d\x3da.length-10240;c\x3cd;)b+\x3dString.fromCharCode.apply(null,a.subarray(c,c+\x3d10240));b+\x3dString.fromCharCode.apply(null,c?a.subarray(c):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!D){D\x3d{};c\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);d\x3d [\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d0;5\x3ee;e++){var f\x3dc.concat(d[e].split(\x22\x22));oa[e]\x3df;for(var h\x3d0;h\x3cf.length;h++){var g\x3df[h];void 0\x3d\x3d\x3dD[g]\x26\x26(D[g]\x3dh)}}}b\x3doa[b];c\x3dArray(Math.floor(a.length/3));d\x3db[64]||\x22\x22;for(e\x3df\x3d0;f\x3ca.length-2;f+\x3d3){var k\x3da[f],m\x3da[f+1];g\x3da[f+2];h\x3db[k\x3e\x3e2];k\x3db[(k\x263)\x3c\x3c4|m\x3e\x3e4];m\x3db[(m\x2615)\x3c\x3c2|g\x3e\x3e6];g\x3db[g\x2663];c[e++]\x3dh+k+m+g}h\x3d0;g\x3dd;switch(a.length-f){case 2:h\x3da[f+1],g\x3db[(h\x2615)\x3c\x3c2]||d;case 1:a\x3da[f],c[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|h\x3e\x3e4]+g+d}a\x3dc.join(\x22\x22)}return a}}}return a};function Ga(a,b,c,d,e,f){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26F(a)\x261?void 0:f\x26\x26F(a)\x262?a:Ha(a,b,c,void 0!\x3d\x3dd,e,f);else if(J(a)){var h\x3d{},g;for(g in a)h[g]\x3dGa(a[g],b,c,d,e,f);a\x3dh}else a\x3db(a,d);return a}}function Ha(a,b,c,d,e,f){var h\x3dd||c?F(a):0;d\x3dd?!!(h\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var g\x3d0;g\x3ca.length;g++)a[g]\x3dGa(a[g],b,c,d,e,f);c\x26\x26c(h,a);return a}function Ia(a){return a.o\x3d\x3d\x3dwa?a.toJSON():Fa(a)};function O(a,b,c){a\x3da.h;var d\x3dH(a);if(d\x262)throw Error();a:{var e\x3dI(d);if(b\x3e\x3de){var f\x3dd;if(d\x26256)e\x3da[a.length-1];else{if(null\x3d\x3dc)break a;e\x3da[e+(+!!(d\x26512)-1)]\x3d{};f|\x3d256}e[b]\x3dc;f!\x3d\x3dd\x26\x26G(a,f)}else a[b+(+!!(d\x26512)-1)]\x3dc,d\x26256\x26\x26(c\x3da[a.length-1],b in c\x26\x26delete c[b])}}function P(a,b,c){if(null!\x3dc\x26\x26\x22string\x22!\x3d\x3dtypeof c)throw Error();O(a,b,c)};function Q(a,b,c){this.h\x3dN(a,b,c)}Q.prototype.toJSON\x3dfunction(){if(K)var a\x3dR(this,this.h,!1);else a\x3dHa(this.h,Ia,void 0,void 0,!1,!1),a\x3dR(this,a,!0);return a};function S(a){K\x3d!0;try{return JSON.stringify(a.toJSON(),Ea)}finally{K\x3d!1}}Q.prototype.o\x3dwa;Q.prototype.toString\x3dfunction(){return R(this,this.h,!1).toString()}; function R(a,b,c){var d\x3da.constructor.v,e\x3dH(c?a.h:b),f\x3dI(e),h\x3d!1;if(d\x26\x26za){if(!c){b\x3dArray.prototype.slice.call(b);var g;if(b.length\x26\x26J(g\x3db[b.length-1]))for(h\x3d0;h\x3cd.length;h++)if(d[h]\x3e\x3df){Object.assign(b[b.length-1]\x3d{},g);break}h\x3d!0}f\x3db;c\x3d!c;g\x3dH(a.h);a\x3dI(g);g\x3d+!!(g\x26512)-1;for(var k,m,l\x3d0;l\x3cd.length;l++)if(m\x3dd[l],m\x3ca){m+\x3dg;var n\x3df[m];null\x3d\x3dn?f[m]\x3dc?M:va():c\x26\x26n!\x3d\x3dM\x26\x26ua(n)}else k||(n\x3dvoid 0,f.length\x26\x26J(n\x3df[f.length-1])?k\x3dn:f.push(k\x3d{})),n\x3dk[m],null\x3d\x3dk[m]?k[m]\x3dc?M:va():c\x26\x26n!\x3d\x3dM\x26\x26ua(n)}k\x3db.length;if(!k)return b; var v;if(J(f\x3db[k-1])){a:{var q\x3df;c\x3d{};a\x3d!1;for(var x in q){g\x3dq[x];if(Array.isArray(g)){l\x3dg;if(!sa\x26\x26L(g,d,+x)||!ra\x26\x26ya(g)\x26\x260\x3d\x3d\x3dg.size)g\x3dnull;g!\x3dl\x26\x26(a\x3d!0)}null!\x3dg?c[x]\x3dg:a\x3d!0}if(a){for(var Wa in c){q\x3dc;break a}q\x3dnull}}q!\x3df\x26\x26(v\x3d!0);k--}for(e\x3d+!!(e\x26512)-1;0\x3ck;k--){x\x3dk-1;f\x3db[x];if(!(null\x3d\x3df||!sa\x26\x26L(f,d,x-e)||!ra\x26\x26ya(f)\x26\x260\x3d\x3d\x3df.size))break;var Ua\x3d!0}if(!v\x26\x26!Ua)return b;var X;h?X\x3db:X\x3dArray.prototype.slice.call(b,0,k);b\x3dX;h\x26\x26(b.length\x3dk);q\x26\x26b.push(q);return b};function Ja(a){this.h\x3dN(a)}ia(Ja,Q);function Ka(a){this.h\x3dN(a)}ia(Ka,Q);function La(){var a\x3du;return a\x3dvoid 0\x3d\x3d\x3da?window:a};/*  SPDX-License-Identifier: Apache-2.0 */ var Ma\x3d/^(?!javascript:)(?:[a-z0-9+.-]+:|[^\x26:\\/?#]*(?:[\\/?#]|$))/i;var T;function Na(a,b,c,d){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+c+\x22\x26dim\x3d\x22+d)+e[2]:a}function Oa(a){var b\x3da.currentTarget,c\x3db.querySelector(\x22img[alt]\x22);c\x26\x26(a\x3dU(a,c.offsetLeft,c.offsetTop,c.width,c.height),a\x3dNa(b.href,a.j,a.l,a.i),Ma.test(a)\x26\x26(b.href\x3da))}function Pa(a,b){var c,d;null\x3d\x3d(c\x3dLa())||null\x3d\x3d(d\x3dc.fence)||d.setReportEventDataForAutomaticBeacons({eventType:a,eventData:b,destination:[\x22buyer\x22],once:!0})} function V(a,b,c){var d\x3dLa();if(\x22buyer\x22\x3d\x3dc){var e;null\x3d\x3dd||null\x3d\x3d(e\x3dd.fence)||e.reportEvent({eventType:a,eventData:b,destination:[\x22buyer\x22]})}else if(\x22component-seller\x22\x3d\x3dc){var f;null\x3d\x3dd||null\x3d\x3d(f\x3dd.fence)||f.reportEvent({eventType:a,destination:[\x22component-seller\x22]})}} function W(a){var b\x3dnew Ka;P(b,1,a);a\x3dS(T);P(b,4,a);P(b,10,Date.now().toString());Pa(\x22reserved.top_navigation\x22,S(b));Pa(\x22reserved.top_navigation_start\x22,S(b));V(\x22click\x22,S(b),\x22buyer\x22);V(\x22reserved.top_navigation\x22,null,\x22component-seller\x22);V(\x22click\x22,null,\x22component-seller\x22)}function U(a,b,c,d,e){return{j:+Math.round(a.clientX-b),l:+Math.round(a.clientY-c),i:+d+\x22x\x22+ +e,m:void 0}} function Qa(a,b){void 0!\x3du.AFMA_Communicator\x26\x26void 0!\x3du.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),u.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var Ra,Y\x3ddocument.currentScript;Ra\x3d(Y\x3dvoid 0\x3d\x3d\x3dY?null:Y)\x26\x26\x2274\x22\x3d\x3d\x3dY.getAttribute(\x22data-jc\x22)?Y:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dRa)throw Error(\x22JSC not found 74\x22);for(var Sa\x3d{},Ta\x3dRa.attributes,Z\x3dTa.length-1;0\x3c\x3dZ;Z--){var Va\x3dTa[Z].name;0\x3d\x3d\x3dVa.indexOf(\x22data-jcp-\x22)\x26\x26(Sa[Va.substring(9)]\x3dTa[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],f\x3da[\x22cc-button\x22],h\x3de?document.getElementById(e):null,g\x3df?document.getElementById(f):null;e\x3d\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22];f\x3dh\x26\x26g;T\x3dnew Ja;if(e){var k\x3df?h:b.querySelector(\x22img[alt]\x22);(f?h:b).addEventListener(\x22mousedown\x22,function(l){var n\x3dU(l,k.offsetLeft,k.offsetTop,k.clientWidth,k.clientHeight);l\x3dn.j;var v\x3dn.l,q\x3dn.i;n\x3dn.m;l\x26\x26O(T,2,null\x3d\x3dl?l:Ca(l));v\x26\x26O(T, 3,null\x3d\x3dv?v:Ca(v));q\x26\x26P(T,7,q);n\x26\x26P(T,4,n)});var m\x3da[\x22turtlex-event-ad-signals\x22];g?(g.addEventListener(\x22click\x22,function(){W(m)}),g.addEventListener(\x22auxclick\x22,function(){W(m)})):(b.addEventListener(\x22click\x22,function(){W(m)}),b.addEventListener(\x22auxclick\x22,function(){W(m)}))}else if(b.addEventListener(\x22mousedown\x22,Oa),f\x26\x26h.addEventListener(\x22mousedown\x22,function(l){l\x3dU(l,h.offsetLeft,h.offsetTop,h.clientWidth,h.clientHeight);l\x3dNa(g.href,l.j,l.l,l.i);Ma.test(l)\x26\x26(g.href\x3dl)}),c||d)b.addEventListener(\x22click\x22, function(l){Qa(l,d)}),g\x26\x26g.addEventListener(\x22click\x22,function(l){Qa(l,d)})})(Sa);}).call(this);\x3c/script\x3e');
document.write('\x3c/div\x3e');
window.localStorage.setItem = hookFunc(nativeLocalStorageSetItem, 'localStorage.setItem', [{
  type: 'string',
  required: true
}, {
  type: 'string',
  required: true
}]);
document.write('\x3cscript\x3e(function () {function addIcon(){var container \x3d document.getElementsByClassName(\x22GoogleActiveViewClass\x22)[0];if (!container) {setTimeout(addIcon, 500);return;}var imgElem \x3d document.createElement(\x27img\x27);imgElem.src\x3d\x22https://static.googleadsserving.cn/pagead/images/cn/google_ad_cccccc_08.png\x22;imgElem.id \x3d \x22chinese_ad_label\x22;imgElem.style.position \x3d \x22absolute\x22;imgElem.style.left \x3d \x220px\x22;imgElem.style.bottom \x3d \x220px\x22;imgElem.style.zIndex \x3d \x222147483647\x22;container.appendChild(imgElem);}addIcon();})();\x3c/script\x3e');
window.localStorage.getItem = hookFunc(nativeLocalStorageGetItem, 'localStorage.getItem', [{
  type: 'string',
  required: true
}]);
window.console.log = hookFunc(nativeConsoleLog, 'console.log', [{
  type: 'any',
  required: true
}]);
window.jshook = hookFunc(() => {}, 'jshook', [], false);
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:9px;right:0px;top:0px;position:absolute;width:41px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:36px;}.abgc .il-icon{height:15px;width:22px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 24 16\x22\x3e\x3cpath d\x3d\x22M10.90 4.69L10.90 5.57L3.17 5.57L3.17 7.22L3.17 7.22Q3.17 9.15 3.06 10.11L3.06 10.11L3.06 10.11Q2.95 11.07 2.58 11.92L2.58 11.92L2.58 11.92Q2.21 12.77 1.27 13.56L1.27 13.56L0.59 12.93L0.59 12.93Q2.29 11.82 2.29 8.66L2.29 8.66L2.29 4.69L6.11 4.69L6.11 2.95L7.00 2.95L7.00 4.69L10.90 4.69ZM23.00 7.34L23.00 8.22L12.80 8.22L12.80 7.34L17.55 7.34L17.55 5.53L15.12 5.53L15.12 5.53Q14.55 6.53 13.86 7.07L13.86 7.07L13.10 6.46L13.10 6.46Q14.44 5.46 14.95 3.33L14.95 3.33L15.84 3.55L15.84 3.55Q15.77 3.86 15.49 4.65L15.49 4.65L17.55 4.65L17.55 2.84L18.47 2.84L18.47 4.65L21.86 4.65L21.86 5.53L18.47 5.53L18.47 7.34L23.00 7.34ZM21.45 8.88L21.45 13.63L20.53 13.63L20.53 12.78L15.32 12.78L15.32 13.63L14.41 13.63L14.41 8.88L21.45 8.88ZM15.32 11.90L20.53 11.90L20.53 9.76L15.32 9.76L15.32 11.90Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAWyjbB7l9oOlx0yhZcDL3FKLsAZKGc1ENJyFEzOyhfgi6xi28tcTfuXSRqcCA0GbvsGrmpOCJU0J7xOkgLMG5cigs_BxO2bqDeU3Z6Un4H60oMTNdQm9S9eWd7ZM4825sqbTVvHvb3RQGuB_4MU28ltmE4zFJK6F_1bh3uqg33CdvnADiBiiyVGASpjyqH4MhVPDR8exnOlZ-oKRBmkSkucVVkbz6fCGuyl0O3ills8CEdU3F5LV9kqQb4dCb1wWYNmApYEQpoTzc_iy0ULRkOho1dayhzqpTkJti07trRTpoGbIsgNf2pbeVsNKhFQShoCYRLsOsIrQu_fN5sT79vx4HbEztyCTIENeO_VrlbqdMyCaKphvT5KptPGK7Dx97kDBdoOfXnXV1VvObk-E8JAZeGs-5t70hwhr3ephN2vKVgMvKTZvoGzkUu_qJG0TjehL3dE1bguRO0xse-M4QC528NmUcntWJo7VjDc3RD_5Tmt-E72ltN_UBYM1yYpeW8fC5_KPF7gD-HG8MIwjAa3lT-w6ioogIwD-_HhqpnJOepeNtFww5qDA3-3yzUu-45xr9wYNfWmg3qEEHqSX-4YGh0yHMQdVJVi13TUHo0l-6KI2vBPaRVExYb_MXM5yOS-aHx07KgZFhp4zGElfNjYG03dDH-OR8mhFZQH0Br-UjwCGo-xSi3-S0SPDKr1-1yi13s22o05pjTNOJ6NK_mNXs6MDpc0xWixr-4C0_OrKBff70kaACTO67JbNEaPZeDKaaoOR01TJVvU7cqLxF73rpfYWSAjwWY0tRMjFcipOZxHakZtPcaCGvw6ZAN4B23szUVvd17-eXAmYmp2pv6f0cgIwzbY7Ed8B8WSPnxFTWf6Fm5Ut3j4y4xo05urca5drhj26yy_3LzcNLwDPpojp0S8Ga02RM-m_N9UYZI9b3oV3JwceNwDmSC9ZDtyw1cp31BFHar4AIPpa2pJhe5SPu3i80AWdbgc_5sZl-imgB5mBjLpLUXfY1-_HUJtVh1qDr8ZmWvlUiTmelDT20G9A_0Goti-IUE-1UBwuONn0TbRcwdFxfrnL7eP9UP0g7P6wpdvR64pV54PMXJTK_hYYIMzgh2g20qXSciSi4iq5B5oIOYb51yTsiORV5ksNrmqMUidEFU_g24fu3YqgbSrhw2RlM3PgRKLu2WcSfqSC_uZP11WcI6ExMBnBkdh9aMeuEtCgyF2r2fcA_ciz4MNrUxem69TKAt1Yz5JKt6Aa9MB_SvNPHeKxjrdNKx4YQ0Rf1ZllSawwNhV5v5UE_v-Yl2rQwxBb6eP4j95Tmj8v9ZOEIKfFvcJZ1e08DCoW0Z-2wDcWccwImUtT3o9siDhYWUCXVzcRz-eg_fjDYYIACqVo6zvNpwm7VBoip8zNCE8I67CBneYkrmFrJrt-4QNt0CJUOxxkcwVe_SgJRCLCkWQ2jbhQyRLiQmvAzgzkwa0Kb23FtQQVuUUaQ8vVohtsHRw35pEHZ1zSBKlH3cqbTFBsVsoQzB5_yHeWsSf8qyadkJIOo71IN2dA0K0OFx0ttXSyOaYY1rzl3F1-lG62ulz-e90n6VbpGdaU3cOHnpcpiql0a8s2xZtffJ1GeDcUrJ-2BpcPhHLuAk4dO-IAAVleZd0NtgvyefHLwlMUrLDiCLw9FdCniSfNDrjEUebhzribJB2UZZGFiZRTZbSeUKJgn1noThsNRZoddoO-Cxnz2bRacSEMFlfSg8nNoQBwmi45xbxPet9028rFCPQFSL5toEn6EERC9iXI4xnZBSGijUACy2Tum0gmF8resr13ju_EPRze\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://static.googleadsserving.cn/pagead/js/r20231207/r20110914/abg_lite.js\x22 async data-jc-version\x3d\x22r20231207\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dC7Gb4h9yHZebnPP2Qpt8PnJGc8Avspeuhc46IqKXxEc_7kOPXAhABIIb3hiZgnQGgAY68oPUCyAEJqQLFlwyKJ8-CPqgDAcgDmwSqBPsBT9BPqscWwlLxMaKT_9sOhA_Hb_yxaPKZ_feXckYBLYieAzrUK9jVMHvWQa-D0fcyg_MBCserw5G-OIr0qke42Y0o2SP2OJKLW2XzP3QVxVaeJVjzWVjd4l6rtmL4-F9OA5kRcQDfuH_vJBzG8szMq-TX1jsFeVFIc2MQmKU2LvURPMZA8xAaakXY8SBTQOKYrMI_W3YmMoxjKZNmYgx7Z6zo5TLFjXYHaLrLuaYV_peLW99EGP-FWI02i7NFJgkV2zGMTPaqQTns_Sj37xLTH5dPVOVeJUQ4ZfUfQikkszewanAEBa44lHtf36TbLTNPVtt0VFRRq_t0z6DABJLHxPLBBOAEA4gFgb2g3kyQBgGgBkyAB9rD34oBqAfZtrECqAeOzhuoB5PYG6gH7paxAqgH_p6xAqgH1ckbqAemvhuoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH_56xAqgH35-xAtgHANIIHwiAYRABGB0yAooCOgSAQIBASL39wTpYzeKmpsWngwOACgOYCwHICwGADAGiDBQqEgoQ5LSxAu61sQK1uLECrLqxAqoNAkNO4g0TCOijp6bFp4MDFX2I6QUdnAgHvrAT1KuAFtATANgTDdgUAdAVAfgWAYAXAQ\\u0026sigh\x3dUynb-N8b_Tg\\u0026cid\x3dCAQSTgAvHhf_k3Kje_UfoxBcX3qwHfRANeYF0kUYMKdCBiJINkvWNxFwNfpspDp5fycJmJ15OM-qfYgbKTw7sZHIMpVHnYoy6h-9tHRaA7GYKBgB\x26quot;,\x26quot;li8b_aHxqWwIjoiopfEREIG9oN5MGL6h_YoBIhNhenVyZS5taWNyb3NvZnQuY29tMggIBRMYi7USFEIXY2EtcHViLTEwNjI5NzI4NjE1NTMzMDNIBlgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;Che cosa c\x26#39;era di sbagliato nell\x26#39;annuncio?\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;Grazie per il feedback.\x26quot;,\x26quot;Esamineremo questo annuncio per migliorare l\x26#39;esperienza in futuro.\x26quot;,\x26quot;Grazie per il feedback.\x26quot;,\x26quot;Il tuo feedback verrà usato per esaminare gli annunci su questo sito.\x26quot;,null,null,null,\x26quot;Chiusura annuncio: %1$d\x26quot;,\x26quot;谷歌广告\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.filmtv.it/%26gl%3DCN%26hl%3Dit%26ai0%3D\\u0026usg\x3dAOvVaw1vqLNVbsHk5eyMBL_9A7nB\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,0,[[\x26quot;Invia commenti\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;Che cosa c\x26#39;era di sbagliato nell\x26#39;annuncio?\x26quot;,[[\x26quot;L\x26#39;annuncio non mi interessa\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;Annuncio visto più volte\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;Annuncio inappropriato\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]],[\x26quot;Contenuto nascosto\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;Scegli Tu!\x26quot;,\x26quot;Annuncio chiuso da %1$s\x26quot;,null,\x26quot;https://www.gstatic.cn/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;Invia commenti\x26quot;,\x26quot;Grazie. I feedback ci aiutano a migliorare gli annunci Google\x26quot;,null,null,null,null,null,null,\x26quot;Mostra le mie impostazioni degli annunci Google\x26quot;,null,\x26quot;https://www.gstatic.cn\x26quot;,\x26quot;\x26quot;,\x26quot;Annunci %1$s\x26quot;,\x26quot;Impostazioni annunci\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0,0],\x26quot;AB3afGEAAAY_W1tbW251bGwsWzEwXSxudWxsLG51bGwsbnVsbCxbIjgwNTI5Il0sbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLFtudWxsLCIyOTE0NTkyNjIiXV0sW251bGwsImh0dHBzOi8vZ29vZ2xlYWRzLmcuZG91YmxlY2xpY2submV0L3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9QzdHYjRoOXlIWmViblBQMlFwdDhQbkpHYzhBdnNwZXVoYzQ2SXFLWHhFY183a09QWEFoQUJJSWIzaGlaZ25RR2dBWTY4b1BVQ3lBRUpxUUxGbHd5S0o4LUNQcWdEQWNnRG13U3FCUHNCVDlCUHFzY1d3bEx4TWFLVF85c09oQV9IYl95eGFQS1pfZmVYY2tZQkxZaWVBenJVSzlqVk1IdldRYS1EMGZjeWdfTUJDc2VydzVHLU9JcjBxa2U0MlkwbzJTUDJPSktMVzJYelAzUVZ4VmFlSlZqeldWamQ0bDZydG1MNC1GOU9BNWtSY1FEZnVIX3ZKQnpHOHN6TXEtVFgxanNGZVZGSWMyTVFtS1UyTHZVUlBNWkE4eEFhYWtYWThTQlRRT0tZck1JX1czWW1Nb3hqS1pObVlneDdaNnpvNVRMRmpYWUhhTHJMdWFZVl9wZUxXOTlFR1AtRldJMDJpN05GSmdrVjJ6R01UUGFxUVRuc19TajM3eExUSDVkUFZPVmVKVVE0WmZVZlFpa2tzemV3YW5BRUJhNDRsSHRmMzZUYkxUTlBWdHQwVkZSUnFfdDB6NkRBQkpMSHhQTEJCT0FFQTRnRmdiMmcza3lRQmdHZ0JreUFCOXJEMzRvQnFBZlp0ckVDcUFlT3podW9CNVBZRzZnSDdwYXhBcWdIX3A2eEFxZ0gxY2ticUFlbXZodW9CNW9HcUFmejBSdW9CNWJZRzZnSHFwdXhBcWdIZzYyeEFxZ0hfNTZ4QXFnSDM1LXhBdGdIQU5JSUh3aUFZUkFCR0IweUFvb0NPZ1NBUUlCQVNMMzl3VHBZemVLbXBzV25nd09BQ2dPWUN3SElDd0dBREFHaURCUXFFZ29RNUxTeEF1NjFzUUsxdUxFQ3JMcXhBcW9OQWtOTzRnMFRDT2lqcDZiRnA0TURGWDJJNlFVZG5BZ0h2ckFUMUt1QUZ0QVRBTmdURGRnVUFkQVZBZmdXQVlBWEFRXHUwMDI2c2lnaD1VeW5iLU44Yl9UZ1x1MDAyNmNpZD1DQVFTVGdBdkhoZl9rM0tqZV9VZm94QmNYM3F3SGZSQU5lWUYwa1VZTUtkQ0JpSklOa3ZXTnhGd05mcHNwRHA1ZnljSm1KMTVPTS1xZllnYktUdzdzWkhJTXBWSG5Zb3k2aC05dEhSYUE3R1lLQmdCIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZGlzcGxheWFkcy1mb3JtYXRzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hZHMvcHJldmlldy9jb250ZW50LmpzP2NsaWVudD13dGFcdTAwMjZvYmZ1c2NhdGVkQ3VzdG9tZXJJZD02NzY3ODIzNDM4XHUwMDI2Y3JlYXRpdmVJZD02NzU0OTE1Mzc0ODBcdTAwMjZ2ZXJzaW9uSWQ9MFx1MDAyNmFkR3JvdXBDcmVhdGl2ZUlkPTYxNDUyNzAwOTgwNlx1MDAyNnNpZz1BQ2lWQl94enV5WE9CRGliZHZZT0RfNHJJRXBGWkVmcTZ3Il0sbnVsbCxudWxsLDEsImxpOGJfYUh4cVd3SWpvaW9wZkVSRUlHOW9ONU1HTDZoX1lvQkloTmhlblZ5WlM1dGFXTnliM052Wm5RdVkyOXRNZ2dJQlJNWWk3VVNGRUlYWTJFdGNIVmlMVEV3TmpJNU56STROakUxTlRNek1ETklCbGdBY0FFIiwiMjA1OTg3NTkwNDEiXV1dLFtudWxsLG51bGwsMSwxLDFdLFtudWxsLG51bGwsIkNOIl1dCfsVfvPAd72Tw49Q2XesErqpXyzpc0iiABuVrFK-VnmUQ3-MLJuEpvAS-i7KD45TNtUczQGsbjfFF_o-WqToM5DOyYFQG8NMhTxbsj25vgioNUKZ5_UV0m4axmX5FXTAzF9B9rxnSbhd97M48Jie2Dd8VVewS_nP4VoMESrEoX8kYuqalfJC9bz_St_LhUE0KeCFudJygaaGM-IXP7ItKNz1gEStM2yu5YnlklLd-uBSol9bsd1VZqBLZIFc85I0Giwwd-OWw8cd-Y8wlhyGVWrz7-Kg6iufOv-34cpLFO1xNfPcTbe4PKjA3GtN3ma7e3bv6HY1PKBUj40PGfvXwQ,0J0-npa1LMgR0ez4nFEkWw\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAWyjbB7l9oOlx0yhZcDL3FKLsAZKGc1ENJyFEzOyhfgi6xi28tcTfuXSRqcCA0GbvsGrmpOCJU0J7xOkgLMG5cigs_BxO2bqDeU3Z6Un4H60oMTNdQm9S9eWd7ZM4825sqbTVvHvb3RQGuB_4MU28ltmE4zFJK6F_1bh3uqg33CdvnADiBiiyVGASpjyqH4MhVPDR8exnOlZ-oKRBmkSkucVVkbz6fCGuyl0O3ills8CEdU3F5LV9kqQb4dCb1wWYNmApYEQpoTzc_iy0ULRkOho1dayhzqpTkJti07trRTpoGbIsgNf2pbeVsNKhFQShoCYRLsOsIrQu_fN5sT79vx4HbEztyCTIENeO_VrlbqdMyCaKphvT5KptPGK7Dx97kDBdoOfXnXV1VvObk-E8JAZeGs-5t70hwhr3ephN2vKVgMvKTZvoGzkUu_qJG0TjehL3dE1bguRO0xse-M4QC528NmUcntWJo7VjDc3RD_5Tmt-E72ltN_UBYM1yYpeW8fC5_KPF7gD-HG8MIwjAa3lT-w6ioogIwD-_HhqpnJOepeNtFww5qDA3-3yzUu-45xr9wYNfWmg3qEEHqSX-4YGh0yHMQdVJVi13TUHo0l-6KI2vBPaRVExYb_MXM5yOS-aHx07KgZFhp4zGElfNjYG03dDH-OR8mhFZQH0Br-UjwCGo-xSi3-S0SPDKr1-1yi13s22o05pjTNOJ6NK_mNXs6MDpc0xWixr-4C0_OrKBff70kaACTO67JbNEaPZeDKaaoOR01TJVvU7cqLxF73rpfYWSAjwWY0tRMjFcipOZxHakZtPcaCGvw6ZAN4B23szUVvd17-eXAmYmp2pv6f0cgIwzbY7Ed8B8WSPnxFTWf6Fm5Ut3j4y4xo05urca5drhj26yy_3LzcNLwDPpojp0S8Ga02RM-m_N9UYZI9b3oV3JwceNwDmSC9ZDtyw1cp31BFHar4AIPpa2pJhe5SPu3i80AWdbgc_5sZl-imgB5mBjLpLUXfY1-_HUJtVh1qDr8ZmWvlUiTmelDT20G9A_0Goti-IUE-1UBwuONn0TbRcwdFxfrnL7eP9UP0g7P6wpdvR64pV54PMXJTK_hYYIMzgh2g20qXSciSi4iq5B5oIOYb51yTsiORV5ksNrmqMUidEFU_g24fu3YqgbSrhw2RlM3PgRKLu2WcSfqSC_uZP11WcI6ExMBnBkdh9aMeuEtCgyF2r2fcA_ciz4MNrUxem69TKAt1Yz5JKt6Aa9MB_SvNPHeKxjrdNKx4YQ0Rf1ZllSawwNhV5v5UE_v-Yl2rQwxBb6eP4j95Tmj8v9ZOEIKfFvcJZ1e08DCoW0Z-2wDcWccwImUtT3o9siDhYWUCXVzcRz-eg_fjDYYIACqVo6zvNpwm7VBoip8zNCE8I67CBneYkrmFrJrt-4QNt0CJUOxxkcwVe_SgJRCLCkWQ2jbhQyRLiQmvAzgzkwa0Kb23FtQQVuUUaQ8vVohtsHRw35pEHZ1zSBKlH3cqbTFBsVsoQzB5_yHeWsSf8qyadkJIOo71IN2dA0K0OFx0ttXSyOaYY1rzl3F1-lG62ulz-e90n6VbpGdaU3cOHnpcpiql0a8s2xZtffJ1GeDcUrJ-2BpcPhHLuAk4dO-IAAVleZd0NtgvyefHLwlMUrLDiCLw9FdCniSfNDrjEUebhzribJB2UZZGFiZRTZbSeUKJgn1noThsNRZoddoO-Cxnz2bRacSEMFlfSg8nNoQBwmi45xbxPet9028rFCPQFSL5toEn6EERC9iXI4xnZBSGijUACy2Tum0gmF8resr13ju_EPRze\x26quot;,\x26quot;Perché questo annuncio?\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],90,728,0,null,null,0,null,null,\x26quot;right\x26quot;,0,null,\x26quot;r20231207/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
document.addEventListener = new Proxy(document.addEventListener, {
  apply: function (target, thisArg, args) {
    if (validateArgs(args, [{
      type: 'string',
      required: true
    }, {
      type: 'function',
      required: true
    }, {
      type: 'boolean',
      required: false
    }])) {
      recordEventInfo('document.addEventListener', args);
    }
    return Reflect.apply(...arguments);
  }
});
if (!window.mraid) {
  document.write('\x3c/div\x3e');
}
document.removeEventListener = new Proxy(document.removeEventListener, {
  apply: function (target, thisArg, args) {
    if (validateArgs(args, [{
      type: 'string',
      required: true
    }, {
      type: 'function',
      required: true
    }, {
      type: 'boolean',
      required: false
    }])) {
      recordEventInfo('document.removeEventListener', args);
    }
    return Reflect.apply(...arguments);
  }
});
(function () {
  (function () {
    var s = document.createElement('script');
    s.setAttribute('data-jc', '86');
    s.src = 'https://static.googleadsserving.cn/pagead/js/r20231207/r20110914/elements/html/omrhp.js';
    s.setAttribute('data-jc-version', 'r20231207');
    var ss = document.getElementsByTagName('script')[0];
    if (ss && ss.parentNode) {
      ss.parentNode.insertBefore(s, ss);
    }
  })();
  window.dicnf = {
    eavp: true,
    ebrp: true,
    apfa: true,
    atsb: true,
    bvst: 'r20231207',
    eeid: 'ityHZfevE7yS29gPtbKXWA',
    aunb: true,
    adsg: '',
    uffp: true
  };
  (function () {
    function aa(a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      };
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a;
    };
    function ca(a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    }
    var da = ca(this);
    function n(a, b) {
      if (b) a: {
        var c = da;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ba(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        });
      }
    }
    function ea(a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: aa(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    var fa = "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
      }
      return a;
    };
    n("Object.assign", function (a) {
      return a || fa;
    });
    var ha = "function" == typeof Object.create ? Object.create : function (a) {
        function b() {}
        b.prototype = a;
        return new b();
      },
      ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;else {
      var ja;
      a: {
        var ka = {
            a: !0
          },
          na = {};
        try {
          na.__proto__ = ka;
          ja = na.a;
          break a;
        } catch (a) {}
        ja = !1;
      }
      ia = ja ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var oa = ia;
    function t(a, b) {
      a.prototype = ha(b.prototype);
      a.prototype.constructor = a;
      if (oa) oa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.da = b.prototype;
    }
    function pa() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    }
    n("Object.is", function (a) {
      return a ? a : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
    });
    n("Array.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || Object.is(f, b)) return !0;
        }
        return !1;
      };
    });
    n("String.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(b, c || 0);
      };
    });
    n("globalThis", function (a) {
      return a || da;
    }); /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */
    var x = this || self;
    function qa(a, b) {
      a: {
        var c = ["CLOSURE_FLAGS"];
        for (var d = x, e = 0; e < c.length; e++) if (d = d[c[e]], null == d) {
          c = null;
          break a;
        }
        c = d;
      }
      a = c && c[a];
      return null != a ? a : b;
    }
    ;
    var ra = qa(610401301, !1),
      sa = qa(572417392, !0);
    var y,
      ta = x.navigator;
    y = ta ? ta.userAgentData || null : null;
    function ua(a) {
      return ra ? y ? y.brands.some(function (b) {
        return (b = b.brand) && -1 != b.indexOf(a);
      }) : !1 : !1;
    }
    function A(a) {
      var b;
      a: {
        if (b = x.navigator) if (b = b.userAgent) break a;
        b = "";
      }
      return -1 != b.indexOf(a);
    }
    ;
    function B() {
      return ra ? !!y && 0 < y.brands.length : !1;
    }
    function va() {
      return B() ? ua("Chromium") : (A("Chrome") || A("CriOS")) && !(B() ? 0 : A("Edge")) || A("Silk");
    }
    ;
    var wa = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
      xa = Array.prototype.forEach ? function (a, b) {
        Array.prototype.forEach.call(a, b, void 0);
      } : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
      };
    function ya(a) {
      ya[" "](a);
      return a;
    }
    ya[" "] = function () {};
    var za = B() ? !1 : A("Trident") || A("MSIE");
    !A("Android") || va();
    va();
    A("Safari") && (va() || (B() ? 0 : A("Coast")) || (B() ? 0 : A("Opera")) || (B() ? 0 : A("Edge")) || (B() ? ua("Microsoft Edge") : A("Edg/")) || B() && ua("Opera"));
    var Aa = {},
      E = null;
    function Ba(a, b) {
      void 0 === b && (b = 0);
      if (!E) {
        E = {};
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
          var f = c.concat(d[e].split(""));
          Aa[e] = f;
          for (var g = 0; g < f.length; g++) {
            var h = f[g];
            void 0 === E[h] && (E[h] = g);
          }
        }
      }
      b = Aa[b];
      c = Array(Math.floor(a.length / 3));
      d = b[64] || "";
      for (e = f = 0; f < a.length - 2; f += 3) {
        var k = a[f],
          l = a[f + 1];
        h = a[f + 2];
        g = b[k >> 2];
        k = b[(k & 3) << 4 | l >> 4];
        l = b[(l & 15) << 2 | h >> 6];
        h = b[h & 63];
        c[e++] = g + k + l + h;
      }
      g = 0;
      h = d;
      switch (a.length - f) {
        case 2:
          g = a[f + 1], h = b[(g & 15) << 2] || d;
        case 1:
          a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d;
      }
      return c.join("");
    }
    ;
    var Ca = "undefined" !== typeof Uint8Array,
      Da = !za && "function" === typeof btoa;
    var Ea = !sa,
      Fa = !sa;
    var F = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
    var Ga = F ? function (a, b) {
      a[F] |= b;
    } : function (a, b) {
      void 0 !== a.s ? a.s |= b : Object.defineProperties(a, {
        s: {
          value: b,
          configurable: !0,
          writable: !0,
          enumerable: !1
        }
      });
    };
    function Ha(a) {
      var b = G(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), H(a, b | 1));
    }
    var G = F ? function (a) {
        return a[F] | 0;
      } : function (a) {
        return a.s | 0;
      },
      Ia = F ? function (a) {
        return a[F];
      } : function (a) {
        return a.s;
      },
      H = F ? function (a, b) {
        a[F] = b;
      } : function (a, b) {
        void 0 !== a.s ? a.s = b : Object.defineProperties(a, {
          s: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
          }
        });
      };
    function Ja() {
      var a = [];
      Ga(a, 1);
      return a;
    }
    function Ka(a) {
      a = a >> 14 & 1023;
      return 0 === a ? 536870912 : a;
    }
    ;
    var La = {},
      Ma = {};
    function Na(a) {
      return !(!a || "object" !== typeof a || a.ca !== Ma);
    }
    function J(a) {
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
    }
    var Oa,
      Pa = !sa;
    function Qa(a, b, c) {
      if (!Array.isArray(a) || a.length) return !1;
      var d = G(a);
      if (d & 1) return !0;
      if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
      H(a, d | 1);
      return !0;
    }
    var K,
      Ra = [];
    H(Ra, 55);
    K = Object.freeze(Ra);
    Object.freeze(new function () {}());
    Object.freeze(new function () {}());
    function Sa(a) {
      if ("boolean" !== typeof a) {
        var b = typeof a;
        throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
      }
      return a;
    }
    ;
    var Ta;
    function Ua(a, b, c) {
      null == a && (a = Ta);
      Ta = void 0;
      if (null == a) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -16760833 | (b & 1023) << 14);
      } else {
        if (!Array.isArray(a)) throw Error();
        d = G(a);
        if (d & 64) return a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error();
        a: {
          c = d;
          if (d = a.length) {
            var e = d - 1;
            if (J(a[e])) {
              c |= 256;
              b = e - (+!!(c & 512) - 1);
              if (1024 <= b) throw Error();
              d = c & -16760833 | (b & 1023) << 14;
              break a;
            }
          }
          if (b) {
            b = Math.max(b, d - (+!!(c & 512) - 1));
            if (1024 < b) throw Error();
            d = c & -16760833 | (b & 1023) << 14;
          } else d = c;
        }
      }
      H(a, d);
      return a;
    }
    ;
    function Va(a, b) {
      return Wa(b);
    }
    function Wa(a) {
      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);
        case "boolean":
          return a ? 1 : 0;
        case "object":
          if (a) {
            if (Array.isArray(a)) return Pa || !Qa(a, void 0, 9999) ? a : void 0;
            if (Ca && null != a && a instanceof Uint8Array) {
              if (Da) {
                for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                a = btoa(b);
              } else a = Ba(a);
              return a;
            }
          }
      }
      return a;
    }
    ;
    function Xa(a, b, c, d, e, f) {
      if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && G(a) & 1 ? void 0 : f && G(a) & 2 ? a : Ya(a, b, c, void 0 !== d, e, f);else if (J(a)) {
          var g = {},
            h;
          for (h in a) g[h] = Xa(a[h], b, c, d, e, f);
          a = g;
        } else a = b(a, d);
        return a;
      }
    }
    function Ya(a, b, c, d, e, f) {
      var g = d || c ? G(a) : 0;
      d = d ? !!(g & 32) : void 0;
      a = Array.prototype.slice.call(a);
      for (var h = 0; h < a.length; h++) a[h] = Xa(a[h], b, c, d, e, f);
      c && c(g, a);
      return a;
    }
    function Za(a) {
      return a.aa === La ? a.toJSON() : Wa(a);
    }
    ;
    function $a(a, b, c) {
      var d = a.l,
        e = Ia(d);
      if (e & 2) throw Error();
      ab(d, e, b, c);
      return a;
    }
    function ab(a, b, c, d) {
      var e = Ka(b);
      if (c >= e) {
        var f = b;
        if (b & 256) e = a[a.length - 1];else {
          if (null == d) return;
          e = a[e + (+!!(b & 512) - 1)] = {};
          f |= 256;
        }
        e[c] = d;
        f !== b && H(a, f);
      } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    }
    function L(a, b, c) {
      if (null != c && "string" !== typeof c) throw Error();
      return $a(a, b, c);
    }
    ;
    function M(a, b, c) {
      this.l = Ua(a, b, c);
    }
    M.prototype.toJSON = function () {
      if (Oa) var a = bb(this, this.l, !1);else a = Ya(this.l, Za, void 0, void 0, !1, !1), a = bb(this, a, !0);
      return a;
    };
    function cb(a) {
      Oa = !0;
      try {
        return JSON.stringify(a.toJSON(), Va);
      } finally {
        Oa = !1;
      }
    }
    M.prototype.aa = La;
    M.prototype.toString = function () {
      return bb(this, this.l, !1).toString();
    };
    function bb(a, b, c) {
      var d = a.constructor.ba,
        e = Ia(c ? a.l : b),
        f = Ka(e),
        g = !1;
      if (d && Pa) {
        if (!c) {
          b = Array.prototype.slice.call(b);
          var h;
          if (b.length && J(h = b[b.length - 1])) for (g = 0; g < d.length; g++) if (d[g] >= f) {
            Object.assign(b[b.length - 1] = {}, h);
            break;
          }
          g = !0;
        }
        f = b;
        c = !c;
        h = Ia(a.l);
        a = Ka(h);
        h = +!!(h & 512) - 1;
        for (var k, l, p = 0; p < d.length; p++) if (l = d[p], l < a) {
          l += h;
          var m = f[l];
          null == m ? f[l] = c ? K : Ja() : c && m !== K && Ha(m);
        } else k || (m = void 0, f.length && J(m = f[f.length - 1]) ? k = m : f.push(k = {})), m = k[l], null == k[l] ? k[l] = c ? K : Ja() : c && m !== K && Ha(m);
      }
      k = b.length;
      if (!k) return b;
      var q;
      if (J(f = b[k - 1])) {
        a: {
          var v = f;
          c = {};
          a = !1;
          for (var r in v) {
            h = v[r];
            if (Array.isArray(h)) {
              p = h;
              if (!Fa && Qa(h, d, +r) || !Ea && Na(h) && 0 === h.size) h = null;
              h != p && (a = !0);
            }
            null != h ? c[r] = h : a = !0;
          }
          if (a) {
            for (var z in c) {
              v = c;
              break a;
            }
            v = null;
          }
        }
        v != f && (q = !0);
        k--;
      }
      for (e = +!!(e & 512) - 1; 0 < k; k--) {
        r = k - 1;
        f = b[r];
        if (!(null == f || !Fa && Qa(f, d, r - e) || !Ea && Na(f) && 0 === f.size)) break;
        var w = !0;
      }
      if (!q && !w) return b;
      var u;
      g ? u = b : u = Array.prototype.slice.call(b, 0, k);
      b = u;
      g && (b.length = k);
      v && b.push(v);
      return b;
    }
    ;
    function db(a) {
      this.l = Ua(a);
    }
    t(db, M);
    function eb(a, b) {
      this.key = a;
      this.defaultValue = void 0 === b ? !1 : b;
      this.valueType = "boolean";
    }
    ;
    var fb = new eb("100000"),
      gb = new eb("45357156", !0),
      hb = new eb("45350890"),
      ib = new eb("45414892");
    var jb = ["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="];
    function kb(a, b) {
      return "&adurl=" == a.substring(a.length - 7) ? a.substring(0, a.length - 7) + b + "&adurl=" : a + b;
    }
    ;
    function O(a) {
      return a = void 0 === a ? window : a;
    }
    ;
    var P = x.dicnf || {};
    function lb(a) {
      var b = !1,
        c;
      return function () {
        b || (c = a(), b = !0);
        return c;
      };
    }
    ;
    function mb(a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    }
    function nb(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }
    ;
    function ob(a) {
      var b = "J";
      if (a.J && a.hasOwnProperty(b)) return a.J;
      b = new a();
      return a.J = b;
    }
    ;
    var pb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function qb(a, b, c, d) {
      for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f) if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
        b += e + 1;
      }
      return -1;
    }
    var rb = /#|$/,
      sb = /[?&]($|#)/;
    function tb(a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            ya(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
        return b;
      } catch (c) {
        return !1;
      }
    }
    function ub(a, b) {
      b = void 0 === b ? !1 : b;
      var c = void 0 === c ? x : c;
      for (var d = 0; c && 40 > d++ && (!b && !tb(c) || !a(c));) a: {
        try {
          var e = c.parent;
          if (e && e != c) {
            c = e;
            break a;
          }
        } catch (f) {}
        c = null;
      }
    }
    function vb() {
      if (!globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    }
    function wb(a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    }
    var xb = [];
    function yb() {
      var a = xb;
      xb = [];
      a = ea(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
          b();
        } catch (c) {}
      }
    }
    function zb(a, b) {
      "complete" === a.readyState || "interactive" === a.readyState ? (xb.push(b), 1 == xb.length && (window.Promise ? Promise.resolve().then(yb) : window.setImmediate ? setImmediate(yb) : setTimeout(yb, 0))) : a.addEventListener("DOMContentLoaded", b);
    }
    function Ab(a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    }
    ;
    function Q(a, b, c, d) {
      Bb(x, a, void 0 === b ? null : b, !1, void 0 === c ? !1 : c, void 0 === d ? !1 : d);
    }
    function Bb(a, b, c, d, e, f) {
      f = void 0 === f ? !1 : f;
      a.google_image_requests || (a.google_image_requests = []);
      var g = Ab("IMG", a.document);
      if (c || e) {
        var h = function (k) {
          c && c(k);
          if (e) {
            k = a.google_image_requests;
            var l = wa(k, g);
            0 <= l && Array.prototype.splice.call(k, l, 1);
          }
          nb(g, "load", h);
          nb(g, "error", h);
        };
        mb(g, "load", h);
        mb(g, "error", h);
      }
      d && (g.referrerPolicy = "no-referrer");
      f && (g.attributionSrc = "");
      g.src = b;
      a.google_image_requests.push(g);
    }
    var Cb = lb(function () {
      return "referrerPolicy" in Ab("IMG");
    });
    function Db() {
      this.g = {};
    }
    function R(a) {
      Eb || (Eb = new Gb());
      var b = Eb.g[a.key];
      if ("proto" === a.valueType) {
        try {
          var c = JSON.parse(b);
          if (Array.isArray(c)) return c;
        } catch (d) {}
        return a.defaultValue;
      }
      return typeof b === typeof a.defaultValue ? b : a.defaultValue;
    }
    ;
    function Gb() {
      this.g = {};
      var a = document.currentScript;
      a = (a = (a = void 0 === a ? null : a) && "0" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="0"]')) && a.getAttribute("data-jc-flags") || "";
      try {
        var b = JSON.parse(a)[0];
        a = "";
        for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
        this.g = JSON.parse(a);
      } catch (d) {}
    }
    var Eb;
    t(Gb, Db);
    function Hb(a, b) {
      var c = void 0 === c ? {} : c;
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = c;
    }
    ;
    var Ib = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    function Jb(a, b) {
      this.g = a;
      this.h = b;
    }
    function Kb(a, b) {
      this.url = a;
      this.S = !!b;
      this.depth = null;
    }
    ;
    var Lb = null;
    function Mb() {
      var a = void 0 === a ? x : a;
      return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
    }
    function Nb() {
      var a = void 0 === a ? x : a;
      return (a = a.performance) && a.now ? a.now() : null;
    }
    ;
    function Ob(a, b) {
      var c = Nb() || Mb();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random();
    }
    ;
    var S = x.performance,
      Pb = !!(S && S.mark && S.measure && S.clearMarks),
      T = lb(function () {
        var a;
        if (a = Pb) {
          var b;
          if (null === Lb) {
            Lb = "";
            try {
              a = "";
              try {
                a = x.top.location.hash;
              } catch (c) {
                a = x.location.hash;
              }
              a && (Lb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
            } catch (c) {}
          }
          b = Lb;
          a = !!b.indexOf && 0 <= b.indexOf("1337");
        }
        return a;
      });
    function Qb() {
      var a = window;
      this.h = [];
      this.i = a || x;
      var b = null;
      a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
      this.g = T() || (null != b ? b : 1 > Math.random());
    }
    function Rb(a) {
      a && S && T() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
    }
    Qb.prototype.start = function (a, b) {
      if (!this.g) return null;
      a = new Ob(a, b);
      b = "goog_" + a.label + "_" + a.uniqueId + "_start";
      S && T() && S.mark(b);
      return a;
    };
    Qb.prototype.end = function (a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = (Nb() || Mb()) - a.value;
        var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
        S && T() && S.mark(b);
        !this.g || 2048 < this.h.length || this.h.push(a);
      }
    };
    function Sb() {
      this.i = "&";
      this.h = {};
      this.j = 0;
      this.g = [];
    }
    function Tb(a, b) {
      var c = {};
      c[a] = b;
      return [c];
    }
    function Ub(a, b, c, d, e) {
      var f = [];
      wb(a, function (g, h) {
        (g = Vb(g, b, c, d, e)) && f.push(h + "=" + g);
      });
      return f.join(b);
    }
    function Vb(a, b, c, d, e) {
      if (null == a) return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (d = d || 0, d < c.length) {
          for (var f = [], g = 0; g < a.length; g++) f.push(Vb(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ub(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a));
    }
    function Wb(a, b) {
      var c = "https://pagead2.googlesyndication.com" + b,
        d = Xb(a) - b.length;
      if (0 > d) return "";
      a.g.sort(function (p, m) {
        return p - m;
      });
      b = null;
      for (var e = "", f = 0; f < a.g.length; f++) for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        var l = Ub(h[k], a.i, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.i;
            break;
          }
          b = null == b ? g : b;
        }
      }
      a = "";
      null != b && (a = e + "trn=" + b);
      return c + a;
    }
    function Xb(a) {
      var b = 1,
        c;
      for (c in a.h) b = c.length > b ? c.length : b;
      return 3997 - b - a.i.length - 1;
    }
    ;
    function Yb(a, b, c) {
      this.m = a;
      this.o = b;
      this.g = void 0 === c ? null : c;
      this.h = null;
      this.i = !1;
      this.A = this.j;
    }
    function Zb(a, b, c, d) {
      try {
        if (a.g && a.g.g) {
          var e = a.g.start(b.toString(), 3);
          var f = c();
          a.g.end(e);
        } else f = c();
      } catch (k) {
        c = a.o;
        try {
          Rb(e), c = a.A(b, new Hb(k, {
            message: $b(k)
          }), void 0, d);
        } catch (l) {
          a.j(217, l);
        }
        if (c) {
          var g, h;
          null == (g = window.console) || null == (h = g.error) || h.call(g, k);
        } else throw k;
      }
      return f;
    }
    function ac(a, b, c, d, e) {
      return function () {
        var f = pa.apply(0, arguments);
        return Zb(a, b, function () {
          return c.apply(d, f);
        }, e);
      };
    }
    Yb.prototype.j = function (a, b, c, d, e) {
      e = e || "jserror";
      try {
        var f = new Sb();
        f.g.push(1);
        f.h[1] = Tb("context", a);
        b.error && b.meta && b.id || (b = new Hb(b, {
          message: $b(b)
        }));
        if (b.msg) {
          var g = b.msg.substring(0, 512);
          f.g.push(2);
          f.h[2] = Tb("msg", g);
        }
        var h = b.meta || {};
        if (this.h) try {
          this.h(h);
        } catch (la) {}
        if (d) try {
          d(h);
        } catch (la) {}
        b = [h];
        f.g.push(3);
        f.h[3] = b;
        d = x;
        b = [];
        g = null;
        do {
          var k = d;
          if (tb(k)) {
            var l = k.location.href;
            g = k.document && k.document.referrer || null;
          } else l = g, g = null;
          b.push(new Kb(l || ""));
          try {
            d = k.parent;
          } catch (la) {
            d = null;
          }
        } while (d && k != d);
        l = 0;
        for (var p = b.length - 1; l <= p; ++l) b[l].depth = p - l;
        k = x;
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1) for (p = 1; p < b.length; ++p) {
          var m = b[p];
          m.url || (m.url = k.location.ancestorOrigins[p - 1] || "", m.S = !0);
        }
        var q = new Kb(x.location.href, !1);
        k = null;
        var v = b.length - 1;
        for (m = v; 0 <= m; --m) {
          var r = b[m];
          !k && Ib.test(r.url) && (k = r);
          if (r.url && !r.S) {
            q = r;
            break;
          }
        }
        r = null;
        var z = b.length && b[v].url;
        0 != q.depth && z && (r = b[v]);
        var w = new Jb(q, r);
        if (w.h) {
          var u = w.h.url || "";
          f.g.push(4);
          f.h[4] = Tb("top", u);
        }
        var I = {
          url: w.g.url || ""
        };
        if (w.g.url) {
          var N = w.g.url.match(pb),
            C = N[1],
            D = N[3],
            ma = N[4];
          q = "";
          C && (q += C + ":");
          D && (q += "//", q += D, ma && (q += ":" + ma));
          var Fb = q;
        } else Fb = "";
        I = [I, {
          url: Fb
        }];
        f.g.push(5);
        f.h[5] = I;
        bc(this.m, e, f, this.i, c);
      } catch (la) {
        try {
          bc(this.m, e, {
            context: "ecmserr",
            rctx: a,
            msg: $b(la),
            url: w && w.g.url
          }, this.i, c);
        } catch (ld) {}
      }
      return this.o;
    };
    function $b(a) {
      var b = a.toString();
      a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
      a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
      if (a.stack) {
        a = a.stack;
        var c = b;
        try {
          -1 == a.indexOf(c) && (a = c + "\n" + a);
          for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
          b = a.replace(RegExp("\n *", "g"), "\n");
        } catch (e) {
          b = c;
        }
      }
      return b;
    }
    ;
    function cc() {}
    ;
    function dc() {
      this.g = Math.random();
    }
    function ec() {
      var a = fc,
        b = window.google_srt;
      0 <= b && 1 >= b && (a.g = b);
    }
    function bc(a, b, c, d, e) {
      if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
        if (c instanceof Sb) var f = c;else f = new Sb(), wb(c, function (h, k) {
          var l = f,
            p = l.j++;
          h = Tb(k, h);
          l.g.push(p);
          l.h[p] = h;
        });
        var g = Wb(f, "/pagead/gen_204?id=" + b + "&");
        g && Q(g);
      } catch (h) {}
    }
    ;
    var fc,
      gc,
      U = new Qb();
    function hc() {
      window.google_measure_js_timing || (U.g = !1, U.h != U.i.google_js_reporting_queue && (T() && xa(U.h, Rb), U.h.length = 0));
    }
    (function (a) {
      fc = null != a ? a : new dc();
      "number" !== typeof window.google_srt && (window.google_srt = Math.random());
      ec();
      gc = new Yb(fc, !0, U);
      gc.h = function () {};
      gc.i = !0;
      "complete" == window.document.readyState ? hc() : U.g && mb(window, "load", function () {
        hc();
      });
    })();
    var ic = ["FRAME", "IMG", "IFRAME"],
      jc = /^[01](px)?$/;
    function kc(a) {
      return "string" === typeof a ? document.getElementById(a) : a;
    }
    function lc(a, b, c, d, e, f, g) {
      c = void 0 === c ? !0 : c;
      d = void 0 === d ? !1 : d;
      f = void 0 === f ? !1 : f;
      g = void 0 === g ? !1 : g;
      if (a = kc(a)) {
        e || (e = function (C, D, ma) {
          C.addEventListener(D, ma);
        });
        for (var h = !1, k = function (C) {
            h || (h = !0, b(C));
          }, l, p, m = 0; m < ic.length; ++m) if (ic[m] == a.tagName) {
          p = 3;
          l = [a];
          break;
        }
        l || (l = a.querySelectorAll(ic.join(",")), p = 2);
        var q = 0,
          v = 0,
          r = !g,
          z = a = !1;
        m = {};
        for (var w = 0; w < l.length; m = {
          B: m.B
        }, w++) {
          var u = l[w];
          if (!("IMG" == u.tagName && (u.complete && (!u.naturalWidth || !u.naturalHeight) || (void 0 === g ? 0 : g) && u.style && "none" === u.style.display) || jc.test(u.getAttribute("width")) && jc.test(u.getAttribute("height")))) {
            m.B = "IMG" === u.tagName;
            if ("IMG" == u.tagName) var I = u.naturalWidth && u.naturalHeight ? !0 : !1;else try {
              I = "complete" === (u.readyState ? u.readyState : u.contentWindow && u.contentWindow.document && u.contentWindow.document.readyState) ? !0 : !1;
            } catch (C) {
              I = void 0 === d ? !1 : d;
            }
            if (I) a = !0, m.B && (r = !0);else {
              q++;
              var N = function (C) {
                return function (D) {
                  q--;
                  !q && r && k(p);
                  C.B && (D = D && "error" === D.type, v--, D || (r = !0), !v && z && r && k(p));
                };
              }(m);
              e(u, "load", N);
              m.B && (v++, e(u, "error", N));
            }
          }
        }
        0 === v && (r = !0);
        l = null;
        if (0 === q && !a && "complete" === x.document.readyState) p = 5;else if (q || !a) {
          e(x, "load", function () {
            !f || !v && r ? k(4) : z = !0;
          });
          return;
        }
        c && k(p);
      }
    }
    ;
    function mc(a, b, c) {
      if (a) for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a);
    }
    function nc(a, b) {
      mc(a, function (c) {
        try {
          return c === c.parent ? null : c.parent;
        } catch (d) {}
        return null;
      }, b);
    }
    function oc(a, b) {
      if ("IFRAME" == a.tagName) b(a);else {
        a = a.querySelectorAll("IFRAME");
        for (var c = 0; c < a.length && !b(a[c]); ++c);
      }
    }
    function pc(a) {
      return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null;
    }
    function qc(a, b, c) {
      try {
        var d = JSON.parse(c.data);
      } catch (g) {}
      if ("object" === typeof d && d && "creativeLoad" === d.type) {
        var e = pc(a);
        if (c.source && e) {
          var f;
          nc(c.source, function (g) {
            try {
              if (g.parent === e) return f = g, !0;
            } catch (h) {}
          });
          f && oc(a, function (g) {
            if (g.contentWindow === f) return b(d), !0;
          });
        }
      }
    }
    function rc(a) {
      return "string" === typeof a ? document.getElementById(a) : a;
    }
    function sc(a, b) {
      var c = rc(a);
      if (c) if (c.onCreativeLoad) c.onCreativeLoad(b);else {
        var d = b ? [b] : [],
          e = function (f) {
            for (var g = 0; g < d.length; ++g) try {
              d[g](1, f);
            } catch (h) {}
            d = {
              push: function (h) {
                h(1, f);
              }
            };
          };
        c.onCreativeLoad = function (f) {
          d.push(f);
        };
        c.setAttribute("data-creative-load-listener", "");
        c.addEventListener("creativeLoad", function (f) {
          e(f.detail);
        });
        x.addEventListener("message", function (f) {
          qc(c, e, f);
        });
      }
    }
    ;
    function V(a) {
      var b = this;
      this.h = !1;
      this.g = [];
      a(function (c) {
        tc(b, c);
      });
    }
    function tc(a, b) {
      if (!a.h) if (b instanceof V) b.then(function (c) {
        tc(a, c);
      });else {
        a.h = !0;
        a.i = b;
        for (b = 0; b < a.g.length; ++b) uc(a, a.g[b]);
        a.g = [];
      }
    }
    function uc(a, b) {
      a.h ? b(a.i) : a.g.push(b);
    }
    V.prototype.then = function (a) {
      var b = this;
      return new V(function (c) {
        uc(b, function (d) {
          c(a(d));
        });
      });
    };
    function vc(a) {
      var b = a.length,
        c = 0;
      return new V(function (d) {
        if (0 == b) d([]);else for (var e = [], f = {
            v: 0
          }; f.v < b; f = {
          v: f.v
        }, ++f.v) a[f.v].then(function (g) {
          return function (h) {
            e[g.v] = h;
            ++c == b && d(e);
          };
        }(f));
      });
    }
    function wc() {
      var a,
        b = new V(function (c) {
          a = c;
        });
      return new xc(b, a);
    }
    function xc(a, b) {
      this.promise = a;
      this.resolve = b;
    }
    ;
    function yc(a) {
      return a.prerendering ? 3 : {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0;
    }
    function zc(a) {
      var b;
      a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
      return b;
    }
    ;
    function Ac(a, b, c) {
      function d(k) {
        try {
          var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
          g === l.paw_id && (window.clearTimeout(h), window.removeEventListener("message", d), l.signal ? b(l.signal) : l.error && c(l.error));
        } catch (p) {
          k = {
            msg: "postmessageError",
            err: p instanceof Error ? p.message : "nonError",
            data: null == k.data ? "null" : 500 < k.data.length ? k.data.substring(0, 500) : k.data
          }, ob(cc), l = [], !k.eid && l.length && (k.eid = l.toString()), bc(fc, "paw_sigs", k, !0);
        }
      }
      var e = {},
        f = 200;
      e = void 0 === e ? {} : e;
      b = void 0 === b ? function () {} : b;
      c = void 0 === c ? function () {} : c;
      f = void 0 === f ? 200 : f;
      var g = String(Math.floor(2147483647 * vb())),
        h = 0;
      window.addEventListener("message", function (k) {
        ac(gc, 903, function () {
          d(k);
        })();
      });
      a.postMessage(Object.assign({}, {
        paw_id: g
      }, e));
      h = window.setTimeout(function () {
        window.removeEventListener("message", d);
        c("PAW GMA postmessage timed out.");
      }, f);
    }
    function Bc() {
      var a = window,
        b,
        c;
      if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
      try {
        var d = window.parent,
          e,
          f;
        if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d;
      } catch (g) {}
      return null;
    }
    ;
    function Cc(a) {
      this.l = Ua(a);
    }
    t(Cc, M);
    function Dc(a) {
      this.l = Ua(a);
    }
    t(Dc, M);
    function Ec(a, b) {
      return L(a, 2, b);
    }
    function Fc(a, b) {
      return L(a, 3, b);
    }
    function Gc(a, b) {
      return L(a, 4, b);
    }
    function Hc(a, b) {
      return L(a, 5, b);
    }
    function Ic(a, b) {
      return L(a, 9, b);
    }
    function Jc(a, b) {
      var c = a.l,
        d = Ia(c);
      if (d & 2) throw Error();
      if (null == b) ab(c, d, 10);else {
        var e = G(b),
          f = e,
          g = !!(2 & e) || !!(2048 & e),
          h = g || Object.isFrozen(b),
          k;
        if (k = !h) k = !1;
        for (var l = !0, p = !0, m = 0; m < b.length; m++) {
          var q = b[m];
          g || (q = !!(G(q.l) & 2), l && (l = !q), p && (p = q));
        }
        g || (e |= 5, e = l ? e | 8 : e & -9, e = p ? e | 16 : e & -17);
        if (k || h && e !== f) b = Array.prototype.slice.call(b), f = 0, e = 2 & d ? e | 2 : e & -3, e = 32 & d ? e | 32 : e & -33, e &= -2049;
        e !== f && H(b, e);
        ab(c, d, 10, b);
      }
      return a;
    }
    function Kc(a, b) {
      return $a(a, 11, null == b ? b : Sa(b));
    }
    function Lc(a, b) {
      return L(a, 1, b);
    }
    function Mc(a, b) {
      return $a(a, 7, null == b ? b : Sa(b));
    }
    Dc.ba = [10, 6];
    var Nc = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Oc(a) {
      var b;
      return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
    }
    function Pc(a) {
      var b, c;
      return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
    }
    function Qc(a) {
      if (!Pc(a)) return null;
      var b = Oc(a);
      if (b.uach_promise) return b.uach_promise;
      a = a.navigator.userAgentData.getHighEntropyValues(Nc).then(function (c) {
        null != b.uach || (b.uach = c);
        return c;
      });
      return b.uach_promise = a;
    }
    function Rc(a) {
      var b;
      return Kc(Jc(Hc(Ec(Lc(Gc(Mc(Ic(Fc(new Dc(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function (c) {
        var d = new Cc();
        d = L(d, 1, c.brand);
        return L(d, 2, c.version);
      })) || []), a.wow64 || !1);
    }
    function Sc(a) {
      var b, c;
      return null != (c = null == (b = Qc(a)) ? void 0 : b.then(function (d) {
        return Rc(d);
      })) ? c : null;
    }
    ;
    function Tc(a) {
      return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function (b) {
        try {
          var c = a.frames && !!a.frames[b];
        } catch (d) {
          c = !1;
        }
        return c;
      });
    }
    ;
    function Uc() {
      this.g = x.document;
      this.o = x;
      this.h = null;
      this.i = this.j = "";
      this.u = Vc();
      Wc(this);
    }
    function Wc(a) {
      var b = [],
        c = R(hb) || !!P.aub;
      if (c || P.aunb) {
        var d = Sc(a.o);
        d && (d = d.then(function (m) {
          m = cb(m);
          for (var q = [], v = 0, r = 0; r < m.length; r++) {
            var z = m.charCodeAt(r);
            255 < z && (q[v++] = z & 255, z >>= 8);
            q[v++] = z;
          }
          m = Ba(q, 3);
          a.j = m;
        }), c && b.push(d));
      }
      if (R(gb) || R(ib)) {
        c = Bc();
        var e;
        if (null == c ? 0 : null == (e = c.gmaSdk) ? 0 : e.getViewSignals) (e = c.gmaSdk.getViewSignals()) && !R(ib) && (a.i = "&ms=" + e);else {
          var f, g;
          if (null == c ? 0 : null == (f = c.webkit) ? 0 : null == (g = f.messageHandlers) ? 0 : g.getGmaViewSignals) {
            var h, k;
            Ac(null == c ? void 0 : null == (h = c.webkit) ? void 0 : null == (k = h.messageHandlers) ? void 0 : k.getGmaViewSignals, function (m) {
              R(ib) || (a.i = "&" + m);
            }, function () {});
          }
        }
      }
      P.umi && (e = new V(function (m) {
        a.h = m;
      }), b.push(e));
      if (P.ebrpfa || R(fb)) {
        var l = wc();
        b.push(l.promise);
        zb(a.g, function () {
          lc(a.g.body, l.resolve);
        });
      }
      3 == yc(a.g) && 3 == yc(a.g) && b.push(Xc(a));
      if (P.opxdv && a.u) {
        var p = wc();
        b.push(p.promise);
        e = x.omrhp;
        "function" === typeof e ? e(p.resolve) : (e = x.document.querySelector("script[data-jc='86']")) && e.addEventListener("load", function () {
          x.omrhp(p.resolve);
        });
      }
      a.m = vc(b);
    }
    function Yc(a) {
      var b = a.search(rb);
      var c = qb(a, 0, "ase", b);
      if (0 > c) b = null;else {
        var d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        b = decodeURIComponent(a.slice(c + 4, -1 !== d ? d : 0).replace(/\+/g, " "));
      }
      if (b === 2 .toString()) {
        var e = x.document;
        e = void 0 === e ? document : e;
        var f;
        e = null != (f = e.featurePolicy) && f.allowedFeatures().includes("attribution-reporting") ? 6 : 5;
        f = a.search(rb);
        b = 0;
        for (d = []; 0 <= (c = qb(a, b, "nis", f));) d.push(a.substring(b, c)), b = Math.min(a.indexOf("&", c) + 1 || f, f);
        d.push(a.slice(b));
        d.join("").replace(sb, "$1");
        null != e && encodeURIComponent(String(e));
        e = !1;
        f = !0;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? !1 : f;
        x.fetch ? (e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors"
        }, f && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
          eventSourceEligible: "true",
          triggerEligible: "false"
        } : e.headers = {
          "Attribution-Reporting-Eligible": "event-source"
        }), x.fetch(a, e)) : Q(a, void 0, e, f);
      } else if (P.atsb) {
        e = void 0 === e ? !1 : e;
        if (f = x.navigator) f = x.navigator.userAgent, f = /Chrome/.test(f) && !/Edge/.test(f) ? !0 : !1;
        f && x.navigator.sendBeacon ? x.navigator.sendBeacon(a) : Q(a, void 0, e);
      } else Q(a);
    }
    function Vc() {
      var a = O(x).omid3p,
        b = !!a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener;
      b || ub(function (c) {
        Tc(c) && (b = !0);
        return b;
      }, !0);
      return b;
    }
    function Xc(a) {
      return new V(function (b) {
        var c = zc(a.g);
        if (c) {
          var d = function () {
            3 != yc(a.g) && (nb(a.g, c, d), b());
          };
          mb(a.g, c, d);
        }
      });
    }
    ;
    function W() {
      return new Date().getTime();
    }
    function Zc() {
      try {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !b.features().includes("attribution-reporting"));
      } catch (c) {
        return !1;
      }
    }
    var X = new Yb(new dc(), !1);
    function Y(a) {
      a.umi = P.umi ? 1 : 0;
      a.eavp = P.eavp ? 1 : 0;
      a.ebrp = P.ebrp ? 1 : 0;
      a.bvst = P.bvst || "n";
      a.opxb = P.opxb ? 1 : 0;
      a.aunb = P.aunb ? 1 : 0;
      a.aub = P.aub ? 1 : 0;
      a.fld = P.fld ? 1 : 0;
      a.uffp = P.uffp ? 1 : 0;
      a.espa = P.espa ? 1 : 0;
      a.aifbl = P.aifbl ? 1 : 0;
      Z && (a.omid = Z.u ? 1 : 0);
    }
    function $c(a, b) {
      this.I = a;
      this.o = this.i = this.g = !1;
      this.O = 1;
      this.j = P.eavp ? 1 : 0;
      this.h = P.ebrp ? 1 : 0;
      this.X = !!P.opxb;
      this.D = this.A = null;
      this.H = wc();
      this.N = W();
      this.M = null;
      this.V = .001 > Math.random();
      this.R = P.eeid || "";
      this.L = this.m = null;
      this.W = (Math.random() + "").slice(-5);
      this.u = !1;
      this.C = null;
      this.K = 0;
      this.F = this.G = null;
      this.P = !!P.fld;
      this.T = P.adsg || "";
      this.Z = !!P.uffp;
      this.Y = !!P.espa;
      var c, d;
      this.U = -1 != (null == (c = x.navigator) ? void 0 : null == (d = c.userAgent) ? void 0 : d.indexOf("Firefox"));
      ad(this, b);
    }
    var Z;
    function bd(a, b) {
      b && 0 !== a.h && (a.L = W() - a.N, cd(a, b).then(function (c) {
        c && (a.A = c);
        a.o = !0;
        dd(a);
      }));
    }
    function ed() {
      try {
        ub(function (a) {
          a = a.document;
          if (jb.length && a.head) for (var b = ea(jb), c = b.next(); !c.done; c = b.next()) if ((c = c.value) && a.head) {
            var d = Ab("META");
            a.head.appendChild(d);
            d.httpEquiv = "origin-trial";
            d.content = c;
          }
          return !1;
        }, !1);
      } catch (a) {}
    }
    function ad(a, b) {
      bd(a, b);
      ed();
      0 !== a.h || 0 !== a.j ? fd(a) ? gd(a).then(function () {
        hd(a);
      }) : hd(a) : a.C = 1;
      ob(Uc).m.then(function () {
        a.g = !0;
        dd(a);
      });
      id(a);
      dd(a);
    }
    function cd(a, b) {
      return new V(function (c) {
        function d(e, f) {
          a.D = e;
          c(f);
        }
        sc(b, d);
        lc(b, d, !0, !1, void 0, !0, a.U);
      });
    }
    function fd(a) {
      a.u = Vc();
      a.C = a.u ? 4 : 1;
      return a.u;
    }
    function gd(a) {
      return new V(function (b) {
        var c = ac(X, 1184, function (e) {
            a.C = 3;
            e && (a.G = e.src, a.F = e.sdk);
            b();
          }, null, Y),
          d = x.omrhp;
        "function" === typeof d ? d(c) : (d = x.document.querySelector("script[data-jc='86']")) && d.addEventListener("load", ac(X, 1183, function () {
          x.omrhp(c);
        }, null, Y));
      });
    }
    function hd(a) {
      a.i = !0;
      dd(a);
    }
    function dd(a) {
      if (a.g) {
        var b = null,
          c = 0;
        2 !== a.O ? b = 0 : 1 === a.j && a.g && a.i ? b = 12 : 1 === a.h && a.g && a.i && a.o && (b = 11);
        if (null != b) a: {
          if (0 === b ? 1 === a.h && a.g && a.i && a.o ? c = 2 : 1 === a.j && a.g && a.i && (c = 1) : 12 === b && 1 === a.h && a.g && a.i && a.o && (c = 2), a.X && (a.V && "" !== a.I && a.u && (a.m || 0 !== b || jd(a, !0), 12 !== b && 1 !== c && 2 !== c || jd(a, !1)), 0 === b && 0 === c)) break a;
          var d = W(),
            e = kd(a, b, c, d);
          0 === b && (a.O = 2, a.M = d);
          if (12 === b || c) a.j = 2;
          if (11 === b || 2 === c) a.h = 2;
          if (a.P) {
            e = new db();
            L(e, 1, a.T);
            e = cb(e);
            if (0 === b) {
              d = O(x);
              var f;
              null == d || null == (f = d.fence) || f.reportEvent({
                eventType: "impression",
                eventData: e,
                destination: ["buyer"]
              });
              var g;
              null == d || null == (g = d.fence) || g.reportEvent({
                eventType: "impression",
                destination: ["component-seller"]
              });
            }
            if (11 === b || 2 === c) {
              var h, k;
              null == (h = O(x)) || null == (k = h.fence) || k.reportEvent({
                eventType: "b2rimpression",
                eventData: e,
                destination: ["buyer"]
              });
            }
          } else e && (((f = a.Y && Zc()) || a.Z) && x.fetch ? (g = {
            method: "GET",
            keepalive: !0,
            credentials: "include"
          }, f ? "setAttributionReporting" in XMLHttpRequest.prototype ? (g.attributionReporting = {
            eventSourceEligible: !0,
            triggerEligible: !1
          }, g.mode = "no-cors") : g.headers = {
            "Attribution-Reporting-Eligible": "event-source"
          } : g.mode = "no-cors", x.fetch(kb(e, "&ftch=1"), g)) : Yc(e));
          0 === b && a.H.resolve();
        }
      }
    }
    function jd(a, b) {
      var c = null;
      b ? a.m = W() : c = a.m ? W() - a.m : "?";
      a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=opxhb&evt=" + (b ? "d" : "o") + ("&eid=" + encodeURIComponent(a.R)) + (null == c ? "" : "&ttp=" + c);
      Yc(a);
    }
    function kd(a, b, c, d) {
      if ("" === a.I) return null;
      var e = {
        omid: a.u ? 1 : 0,
        rm: a.C,
        ctpt: d - a.N
      };
      0 !== b && (e.vt = b, e.dtpt = d - (a.M || 0));
      0 !== c && (e.cbvp = c);
      a.D && (e.dett = a.D);
      a.A && (e.beid = a.A.eventId, e.vend = a.A.vendor);
      null != a.L && (e.cstd = a.L);
      (b = P.bvst) && (e.cisv = b + ("." + a.W));
      0 !== a.K && (e.vwbs = a.K);
      a.G && (e.oprs = a.G);
      a.F && (e.opsd = a.F);
      (b = ob(Uc).j) && (e.uach = b);
      e.arae = Number(Zc());
      var f = "";
      wb(e, function (g, h) {
        f += "&" + h + "=" + encodeURIComponent(g);
      });
      return kb(a.I, f);
    }
    function id(a) {
      var b = a.R;
      if (b && (b = x["bllsn" + b], "function" === typeof b)) try {
        b(function (c) {
          c && (a.K = c.block ? 2 : 1);
        });
      } catch (c) {}
    }
    ;
    O().btrp = function (a, b) {
      return Zb(X, 1183, function () {
        var c = Z = new $c(a, b);
        return ac(X, 1183, function (d) {
          bd(c, d);
        }, Y);
      }, Y);
    };
    O().pdib3 = function (a, b) {
      Zb(X, 1185, function () {
        var c = Z;
        c.H.promise.then(function () {
          var d = O(x),
            e;
          if (c.P && (null == (e = d.fence) ? 0 : e.reportEvent)) d.fence.reportEvent({
            destinationURL: a
          });else if (b) {
            var f = void 0 === f ? !1 : f;
            Cb() ? Bb(window, a, null, !0, f) : (d = x.document, d.body ? (e = d.getElementById("goog-srcless-iframe"), e || (e = Ab("IFRAME"), e.style.display = "none", e.id = "goog-srcless-iframe", d.body.appendChild(e)), d = e) : d = null, d && d.contentWindow && Bb(d.contentWindow, a, null, !0, f));
          } else Q(a);
        });
      }, Y);
    };
    O().vv = function () {
      var a = ob(Uc);
      if (!a.h) throw Error("aiv::err");
      a.h();
    };
    O().sasrc = function (a) {
      Z.H.promise.then(function () {
        var b = x.document.createElement("img");
        b.style.display = "none";
        b.attributionSrc = a;
        x.document.body.appendChild(b);
      });
    };
  }).call(this);
  window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjstMASp0FFyUfW2wQ3O8j_wiXoHvz3FTrp2rZFdlQT0FWAzD-pUSi_ZWqudjToLkcN04gWdlz5ynajfohyhcB1b4rWQ07rKnNr8bOib-BWAdQGoj33UEwZIkQDpgmck0HPHD9YDv07_Zw3dLMmf4qE68MraMImGDQvL-txXKeEEMRftYNbalbAToKAnoSNJayYhiSRCOiBYETnkYteYOxPjIcTkNhqg6Rex4qWj6o4qM5ACtUlZilkIHZV9XKolfDp3RSsHHXUI6kIYQIvZez5JPrwLEbsWr9Ws4tYVm4pr83mmgYXUvT07Qc3Sh9o0ADGpOdgLMTINjgFfJWCwoPrQTW-6gLnJhdXxdH6zmH9kF6k8tWdzDD3BERSVjecXKJNMU1yK_z5b_vdHK5mCeBVTcqgk5lR6uUHJz1eYKn5EhBlHYEDwtEQcAIy9OkwwfX0nHiWLkg_SfBXTJfvCyQxclRsCiczOc9UEGWIiJ2YoOgFCvaNGW-e3VcFISxUylaSNzTXeSaYeseYwOjzfrVA-WI1Y9ctSp1GIoevRQ4DuzxOpG6JlN4EYvmOU5YdkH5h4x62OzMHYoG4zBLNR5iaK3FEcysELdJGdyHDMENf2M5F2ZZcjWR1TDh6za1WqL8vqSDMqDVjqi3lwVr6-oRda_gQk3PXN-TyKe294E9AnrHDiHiuWzTQyDJR63J74gznWYUZt_vxh8O_oYzpv9Ftw-spTtR7NBWOHyawhhkrdRxjdxGH0KxLzfazTxNp-KOWMgqugwjWdl4hEO_jPZ4Bt0fcb-E0Sww0WwTSwXiRUFPH6bwNGgPpvVoWlxuCdVPVDnDAcXyF-GsH0MgD7S7WHF4ptpLb85SO3EuLybU5go5aNGlxLeoVnE_9idC00Gcs-eojPJV4MIMTZtZHm7fth_-I_ucgqTXC2KlNBc7k0YyL7DdTRv7QBfEZy_iUdGUVGj0xxMtqqpu-W-E5tY2LkhJMxv-IQ4OA0b8-h-Kl7vlOBo0E5UpFzG4j_jKtefSvpJgYaJyIJ0Bc9BLyigyIKhShzT_6FU922cKACG2Tx47tHXTM2o4QM_E9utK9Xbx0tZAbDjOsiReuGVeJYEZlqj8hm9YUZ5D0GXz5hbOsVB0lkvBFiDO_m97WDVU2yuXSO1DHFKHYZqbwYRZZG51ghDZgSNdgMXxzeu5PKVPdnXO6M3NIrh-6EQtJVutTGNEgIYXWrqx8IqPMOlFQ2bdtpnByaBo0PKDv0fkr0ZWA87GC8vFp3jQpkeOsTjp0hheSD9noQIOLWUMKA3tMdOcbLtfyo9gtWk_JEfFtcLMFfRji_j8PDNsoPEYY1LVe3CJaYicVWD2V7dQFWbKJiuW3k\x26sai\x3dAMfl-YTC7HAJVviRhM1j9_FwJVihqyn4tnt3W0W5_-0udvGWS9BFL1knSJuaxR9wqBpYdHk7aMJAlHHYNUrYIYzoXE7QIvHQ6xYamSYqOp0t9x3f1lIB-gD_l8lPpQv7hYBalwCtFAw1pXLO9o_DzuG5lR3u7tLU-0TZiAgB8TV8yQJxjyhciYK3E8-eFdwkGg_gAga_02tvnkfKauB2KoLeFZDu93t2HGoTlGupx5WoYf6Sxdd0cPFWBxXZCuqDca-j_iOzKwdF9L3MyGyYgaIyTfW0mhBSZX84Z1OVDAYsglr9IgwMI5sHDYRX_sMtLNE\x26sig\x3dCg0ArKJSzDe_7jhd6nABEAE\x26uach_m\x3d%5BUACH%5D\x26cry\x3d1\x26fbs_aeid\x3d%5Bgw_fbsaeid%5D\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_ityHZfevE7yS29gPtbKXWA"));
})();
(function () {
  (function () {
    (function () {
      var m = document.createElement('meta');
      m.setAttribute('data-jc', '78');
      m.setAttribute('data-jc-version', 'r20231207');
      var ss = document.getElementsByTagName('script')[0];
      if (ss && ss.parentNode) {
        ss.parentNode.insertBefore(m, ss);
      }
    })();
    (function () {
      /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var h = this || self;
      function k(a, c) {
        a = a.split(".");
        var b = h;
        a[0] in b || "undefined" == typeof b.execScript || b.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === c ? b[d] && b[d] !== Object.prototype[d] ? b = b[d] : b = b[d] = {} : b[d] = c;
      }
      function l(a) {
        var c = typeof a;
        c = "object" != c ? c : a ? Array.isArray(a) ? "array" : c : "null";
        return "array" == c || "object" == c && "number" == typeof a.length;
      }
      function n(a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c;
      }
      function p(a) {
        return a;
      }
      ;
      var q = Array.prototype.forEach ? function (a, c) {
        Array.prototype.forEach.call(a, c, void 0);
      } : function (a, c) {
        for (var b = a.length, d = "string" === typeof a ? a.split("") : a, f = 0; f < b; f++) f in d && c.call(void 0, d[f], f, a);
      };
      function r(a) {
        var c = a.length;
        if (0 < c) {
          for (var b = Array(c), d = 0; d < c; d++) b[d] = a[d];
          return b;
        }
        return [];
      }
      ;
      function t(a, c) {
        for (var b in a) c.call(void 0, a[b], b, a);
      }
      ;
      var u;
      function v(a) {
        this.g = a;
      }
      v.prototype.toString = function () {
        return this.g + "";
      };
      v.prototype.h = !0;
      var w = {};
      function x(a, c) {
        t(c, function (b, d) {
          b && "object" == typeof b && b.h && (b = b.g.toString());
          "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : y.hasOwnProperty(d) ? a.setAttribute(y[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
        });
      }
      var y = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
      };
      function z(a, c, b) {
        var d = arguments,
          f = document,
          e = d[1];
        var g = String(d[0]);
        g = String(g);
        "application/xhtml+xml" === f.contentType && (g = g.toLowerCase());
        g = f.createElement(g);
        e && ("string" === typeof e ? g.className = e : Array.isArray(e) ? g.className = e.join(" ") : x(g, e));
        2 < d.length && A(f, g, d);
        return g;
      }
      function A(a, c, b) {
        function d(m) {
          m && c.appendChild("string" === typeof m ? a.createTextNode(m) : m);
        }
        for (var f = 2; f < b.length; f++) {
          var e = b[f];
          if (!l(e) || n(e) && 0 < e.nodeType) d(e);else {
            a: {
              if (e && "number" == typeof e.length) {
                if (n(e)) {
                  var g = "function" == typeof e.item || "string" == typeof e.item;
                  break a;
                }
                if ("function" === typeof e) {
                  g = "function" == typeof e.item;
                  break a;
                }
              }
              g = !1;
            }
            q(g ? r(e) : e, d);
          }
        }
      }
      ; /*  SPDX-License-Identifier: Apache-2.0 */
      k("ait", function (a) {
        var c = z("IMG");
        c.src = a;
        c.border = "0";
        c.height = 1;
        c.width = 1;
        c.style.display = "none";
        document.body.appendChild(c);
      });
      k("ast", function (a) {
        var c;
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        if (void 0 === u) {
          var b = null;
          if ((c = h.trustedTypes) && c.createPolicy) {
            try {
              b = c.createPolicy("goog#html", {
                createHTML: p,
                createScript: p,
                createScriptURL: p
              });
            } catch (e) {
              h.console && h.console.error(e.message);
            }
            u = b;
          } else u = b;
        }
        a = (b = u) ? b.createScriptURL(a) : a;
        c = new v(a, w);
        b = a = document;
        b = void 0 === b ? document : b;
        b = b.createElement("script");
        b.src = c instanceof v && c.constructor === v ? c.g : "type_error:TrustedResourceUrl";
        var d, f;
        (d = (c = null == (f = (d = (b.ownerDocument && b.ownerDocument.defaultView || window).document).querySelector) ? void 0 : f.call(d, "script[nonce]")) ? c.nonce || c.getAttribute("nonce") || "" : "") && b.setAttribute("nonce", d);
        (d = a.getElementsByTagName("script")[0]) && d.parentNode && d.parentNode.insertBefore(b, d);
      });
    }).call(this);
    pdib3('https://analyticspixel.microsoft.com/aid/imp?dcmadvertiserid\x3d8391437\x26dcmcampaignid\x3d30626129\x26dcmadid\x3d567494010\x26dcmrenderingid\x3d184309727\x26dcmsiteid\x3d3654125\x26dcmplacementid\x3d376662344\x26customer\x3dMicrosoft\x26dv360auctionid\x3dABAjH0hqkRTn5lL3EddkSjooz1pq');
  })();
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = [];
  }
  window.GoogleTyFxhY.push({
    '_scs_': 'BnN81ityHZfevE7yS29gPtbKXWAAAAAA4AeAEAg',
    '_bgu_': 'https://pagead2.googlesyndication.com/bg/Dtt_-LR3WxpzwV0Gscftq1A_D1owstvxoTnWWhwY4Ow.js',
    '_bgp_': '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',
    '_ifr_': 'false',
    '_isfl_': 'false'
  });
  var gsodar = document.createElement('script');
  gsodar.type = 'text/javascript';
  gsodar.async = true;
  gsodar.src = '//tpc.googlesyndication.com/sodar/Q12zgMmT.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gsodar, s);
})();
document.dispatchEvent = new Proxy(document.dispatchEvent, {
  apply: function (target, thisArg, args) {
    if (validateArgs(args, [{
      type: 'object',
      required: true
    }])) {
      recordEventInfo('document.dispatchEvent', args);
    }
    return Reflect.apply(...arguments);
  }
});