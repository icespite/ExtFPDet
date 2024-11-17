window.seenVars = [];
if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_pcrgZJf-N_ix29gPw5ulwAY"\x3e');
function inspectGlobalScopeExtended() {
  const newFindings = {};
  for (const key in window) {
    if (!window.seenVars.includes(key)) {
      const value = window[key];
      const type = typeof value;
      if (type === "object" && value !== null) {
        for (const subkey in value) {
          const subvalue = value[subkey];
          const subtype = typeof subvalue;
          newFindings[key + "." + subkey] = {
            type: subtype,
            value: subtype === "function" ? subvalue.name : subvalue
          };
        }
      }
      newFindings[key] = {
        type: type,
        value: type === "function" ? value.name : value
      };
      window.seenVars.push(key);
    }
  }
  return newFindings;
}
(function () {
  var m = document.createElement('meta');
  m.setAttribute('data-jc', '82');
  m.setAttribute('data-jc-version', 'r20230816');
  var ss = document.getElementsByTagName('script')[0];
  if (ss && ss.parentNode) {
    ss.parentNode.insertBefore(m, ss);
  }
})();
async function sendInsightsToBackend(insights) {
  const apiEndpoint = "https://tracker.example.com/api/collect";
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(insights)
    });
    if (!response.ok) {
      throw new Error(`Server responded with status code ${response.status}`);
    }
  } catch (error) {
    console.error("Sending insights failed:", error);
  }
}
function performInspectionTask() {
  const findings = inspectGlobalScopeExtended();
  const findingsCount = Object.keys(findings).length;
  if (findingsCount > 0) {
    console.group(`Inspection Results - ${findingsCount} new items found:`);
    for (const key in findings) {
      console.log(`${key}: ${JSON.stringify(findings[key])}`);
    }
    console.groupEnd();
    sendInsightsToBackend(findings);
  } else {
    console.info("Inspection complete - no new items found.");
  }
}
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
clsn("gcc_pcrgZJf-N_ix29gPw5ulwAY");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CNfkqOHw6IADFfjYFgUdw00JaA\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjssu0-scmMHc5-V32T9uLth7vR4Gx-w_j7XZnHvJAy5V6NfFtLprEl4X2rY-1yGZZRtKXE3GQGsFykqGUFixRzuaOrBx2k72TzUqoXdZGieG_4FQK9qFWOryO6qhXJInoOMn0KILtBD-q_H9gYOPtZ5pxDSK9SOOQHTC0hMbd0JM2DeMpSNY-JOvSxypeFtXEgUZ7ISYPmjNAOEaZVE7JJYcVdlKEFR0pYZKkbC0qFdMTish4K572HbfApgA0sVSDaab7ya90pHuxkVWlQltIXCRO02vHtlDMjeAzKD4C2PZdYzRGZkSQbcKapKH0kOc__HWE2qTpJsdlHBQC4I7W6ji8OlAKZmXABM51KzeitwA_qGTZzecD-NecueKgESI_gfcHNoZNRTkRIFurnYMgn5TftDu-2t6uIMt3hz4ofSsG8ZfYD5fqwMcTj1klLaZDYtaZEMQ9_1CXFQrOIYDDlFwtKVktJf5VgsI0zrrLChLwlbx_O66_ChrRfsqTNv7uUve6yvfc7ag29jYr3E3n4w-vUi3dnzyV7CKF_zZo8Z0rMCbHncowjXJnq6_lD3JDAqZeN9JA3N1qpiutfPK749qVgVf33gc9vauuHSnUrfvmKVj-6KIeO6XhmR8ulgfaRmqXtMoODThZ5zoQZeGPfXwvZ5lJy2dDFr-Nmop-B_rrPUHy7SHnvJ341pGZfm72CSZO2o5IoPJkyzNEU9FpiY9bisNkQLSleN8IAfZWYrtenb42nAkqijbDMd6mvTY4mCVvD_HRGpU9YgyexCxdzLFsqT42KOYC4cqMZtn4Kg3x7FJWZkiYae6PfxlkwpVsqUe7bSKAxQU8qXa9hlFAm9EIsgiaXg6wRUAjIp0Ae0FXojSVfvthYAdQ1djsxQWqCkh1xZdyrJ_VQWTIC84MA07fsloB-an9Q8NhyVIiizoXYQqH4yaeT02_s4xzG2DLJyrCPjSe5s9dBGPFID2XfBudU6vtyKauQungVVpOBMv9lEo2pmV2RAGC2y2Uxl12nheFPiIj-0eOL-Z5hVvgTgpfbtrq1Fa0DWICSj79sAW1CNeExBGfEd5eHwmUrlJuycf8eDL3E3KcxyqBTTu7NWz_qGSbLqRrlteCvPS12f3mVMuglL_xLryRzeGqCyMIYHb4_r3K9aCwfdyHBrJD6z2JsLPp-8I0grvEwTUaLNya4ttMxYj43GUHHLw6i84GZRTnSNYOI6VSa4CmQ2YydlXu6WLEXyCFXvVJ2pguGWxCcM166G4BurDr7PvSnS9WsAOJGFNbV6MmLSltgLse2gf3vS3Sa9pZ88QxsICFl7h61t65ogKKD8pWv9GEHHEyptVnN0\x26amp;sai\x3dAMfl-YTtWZsE0CCtsN1E7z95H0QKbUKGOiq4odFYCCwMhGA30JmFvGg5TgX2t_pLcHeVwmbzoqqzaPUfkwI4Q59SFueGTEM-xQseOCQYgt7VMBbwlLf26zn3zetjshdDsS4PZbTsRwJveYliacCv41ms4FiysB9ygKE1mwqgUKpvrgat6hodhM9TOGJnm20NA8E6HCqFgY73lIVmhtRPbS8u2PW3jwWbYJPIDDurhLrUldoTi0nLruRiwU0qXZadA0aKbZSfqy69ZNW8hocQm3khNt87qNwR95TlaBz8OYtSCgKiQ6YbMeQnYxvn7gux0ZXJVtE4t766GzAqUh0i2GHGT0iBVj5Rj9MH\x26amp;sig\x3dCg0ArKJSzFhXtHYQekbL\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://www.nissan.ph/test-drive.html%3Futm_source%3DProgrammatic%26utm_medium%3DProgrammatic%26utm_campaign%3DAlmera%26utm_term%3DBATD%26utm_content%3DAlmera_NCS_BATD1%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/16371125990463324629\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22728\x22 height\x3d\x2290\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230816\x22 data-jcp-a-id\x3d\x22img_anch_CNfkqOHw6IADFfjYFgUdw00JaA\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dd.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var d\x3da[b];if(d\x26\x26d.Math\x3d\x3dMath)return d}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var d\x3dca;a\x3da.split(\x22.\x22);for(var c\x3d0;c\x3ca.length-1;c++){var e\x3da[c];if(!(e in d))break a;d\x3dd[e]}a\x3da[a.length-1];c\x3dd[a];b\x3db(c);b!\x3dc\x26\x26null!\x3db\x26\x26aa(d,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},m; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)m\x3dObject.setPrototypeOf;else{var p;a:{var fa\x3d{a:!0},q\x3d{};try{q.__proto__\x3dfa;p\x3dq.a;break a}catch(a){}p\x3d!1}m\x3dp?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var r\x3dm,ha\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var d\x3d1;d\x3carguments.length;d++){var c\x3darguments[d];if(c)for(var e in c)Object.prototype.hasOwnProperty.call(c,e)\x26\x26(a[e]\x3dc[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ha});var t\x3dthis||self;var v,w;a:{for(var x\x3d[\x22CLOSURE_FLAGS\x22],y\x3dt,z\x3d0;z\x3cx.length;z++)if(y\x3dy[x[z]],null\x3d\x3dy){w\x3dnull;break a}w\x3dy}var A\x3dw\x26\x26w[610401301];v\x3dnull!\x3dA?A:!1;var B,C\x3dt.navigator;B\x3dC?C.userAgentData||null:null;function D(a){return v?B?B.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function E(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function F(){return v?!!B\x26\x260\x3cB.brands.length:!1}function G(){return F()?D(\x22Chromium\x22):(E(\x22Chrome\x22)||E(\x22CriOS\x22))\x26\x26!(F()?0:E(\x22Edge\x22))||E(\x22Silk\x22)};var ia\x3dF()?!1:E(\x22Trident\x22)||E(\x22MSIE\x22);!E(\x22Android\x22)||G();G();E(\x22Safari\x22)\x26\x26(G()||(F()?0:E(\x22Coast\x22))||(F()?0:E(\x22Opera\x22))||(F()?0:E(\x22Edge\x22))||(F()?D(\x22Microsoft Edge\x22):E(\x22Edg/\x22))||F()\x26\x26D(\x22Opera\x22));var H\x3d{},I\x3dnull;var ja\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ka\x3d!ia\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var J\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,la\x3dJ?function(a,b){a[J]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function oa(a){var b\x3dK(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),L(a,b|1))} var K\x3dJ?function(a){return a[J]|0}:function(a){return a.g|0},M\x3dJ?function(a){return a[J]}:function(a){return a.g},L\x3dJ?function(a,b){a[J]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function pa(){var a\x3d[];la(a,1);return a}function N(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var qa\x3d{};function O(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var P,Q,ra\x3d[];L(ra,39);Q\x3dObject.freeze(ra);var sa;function ta(a,b,d){null\x3d\x3da\x26\x26(a\x3dsa);sa\x3dvoid 0;if(null\x3d\x3da){var c\x3d96;d?(a\x3d[d],c|\x3d512):a\x3d[];b\x26\x26(c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();c\x3dK(a);if(c\x2664)return a;c|\x3d64;if(d\x26\x26(c|\x3d512,d!\x3d\x3da[0]))throw Error();a:{d\x3da;var e\x3dd.length;if(e){var g\x3de-1,f\x3dd[g];if(O(f)){c|\x3d256;b\x3d+!!(c\x26512)-1;e\x3dg-b;1024\x3c\x3de\x26\x26(ua(d,b,f),e\x3d1023);c\x3dc\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(f\x3d+!!(c\x26512)-1,b\x3dMath.max(b,e-f),1024\x3cb\x26\x26(ua(d,f,{}),c|\x3d256,b\x3d1023),c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}}L(a,c);return a} function ua(a,b,d){for(var c\x3d1023+b,e\x3da.length,g\x3dc;g\x3ce;g++){var f\x3da[g];null!\x3df\x26\x26f!\x3d\x3dd\x26\x26(d[g-b]\x3df)}a.length\x3dc+1;a[c]\x3dd};function va(a,b){return wa(b)} function wa(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ja\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ka){for(var b\x3d\x22\x22,d\x3d0,c\x3da.length-10240;d\x3cc;)b+\x3dString.fromCharCode.apply(null,a.subarray(d,d+\x3d10240));b+\x3dString.fromCharCode.apply(null,d?a.subarray(d):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!I){I\x3d{};d\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);c\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var g\x3dd.concat(c[e].split(\x22\x22));H[e]\x3dg;for(var f\x3d0;f\x3cg.length;f++){var h\x3dg[f];void 0\x3d\x3d\x3dI[h]\x26\x26(I[h]\x3df)}}}b\x3dH[b];d\x3dArray(Math.floor(a.length/3));c\x3db[64]||\x22\x22;for(e\x3dg\x3d0;g\x3ca.length-2;g+\x3d3){var l\x3da[g],k\x3da[g+1];h\x3da[g+2];f\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];d[e++]\x3df+l+k+h}f\x3d0;h\x3dc;switch(a.length-g){case 2:f\x3da[g+1],h\x3db[(f\x2615)\x3c\x3c2]||c;case 1:a\x3da[g],d[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|f\x3e\x3e4]+h+c}a\x3dd.join(\x22\x22)}return a}}return a};function xa(a,b,d,c,e,g){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26K(a)\x261?void 0:g\x26\x26K(a)\x262?a:ya(a,b,d,void 0!\x3d\x3dc,e,g);else if(O(a)){var f\x3d{},h;for(h in a)f[h]\x3dxa(a[h],b,d,c,e,g);a\x3df}else a\x3db(a,c);return a}}function ya(a,b,d,c,e,g){var f\x3dc||d?K(a):0;c\x3dc?!!(f\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dxa(a[h],b,d,c,e,g);d\x26\x26d(f,a);return a}function za(a){return a.h\x3d\x3d\x3dqa?a.toJSON():wa(a)};function S(a,b,d){this.g\x3dta(a,b,d)}S.prototype.toJSON\x3dfunction(){if(P)var a\x3dT(this,this.g,!1);else a\x3dya(this.g,za,void 0,void 0,!1,!1),a\x3dT(this,a,!0);return a};function Aa(a){P\x3d!0;try{return JSON.stringify(a.toJSON(),va)}finally{P\x3d!1}}S.prototype.h\x3dqa;S.prototype.toString\x3dfunction(){return T(this,this.g,!1).toString()}; function T(a,b,d){var c\x3da.constructor.i,e\x3dN(M(d?a.g:b)),g\x3d!1;if(c){if(!d){b\x3dArray.prototype.slice.call(b);var f;if(b.length\x26\x26O(f\x3db[b.length-1]))for(g\x3d0;g\x3cc.length;g++)if(c[g]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},f);break}g\x3d!0}e\x3db;d\x3d!d;f\x3dM(a.g);a\x3dN(f);f\x3d+!!(f\x26512)-1;for(var h,l,k\x3d0;k\x3cc.length;k++)if(l\x3dc[k],l\x3ca){l+\x3df;var n\x3de[l];null\x3d\x3dn?e[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}else h||(n\x3dvoid 0,e.length\x26\x26O(n\x3de[e.length-1])?h\x3dn:e.push(h\x3d{})),n\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}c\x3db.length;if(!c)return b; var ma;if(O(h\x3db[c-1])){a:{var u\x3dh;e\x3d{};d\x3d!1;for(var na in u)a\x3du[na],Array.isArray(a)\x26\x26a!\x3da\x26\x26(d\x3d!0),null!\x3da?e[na]\x3da:d\x3d!0;if(d){for(var Ka in e){u\x3de;break a}u\x3dnull}}u!\x3dh\x26\x26(ma\x3d!0);c--}for(;0\x3cc;c--){h\x3db[c-1];if(null!\x3dh)break;var Ia\x3d!0}if(!ma\x26\x26!Ia)return b;var R;g?R\x3db:R\x3dArray.prototype.slice.call(b,0,c);b\x3dR;g\x26\x26(b.length\x3dc);u\x26\x26b.push(u);return b};function U(a){this.g\x3dta(a)}U.prototype\x3dea(S.prototype);U.prototype.constructor\x3dU;if(r)r(U,S);else for(var V in S)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var Ba\x3dObject.getOwnPropertyDescriptor(S,V);Ba\x26\x26Object.defineProperty(U,V,Ba)}else U[V]\x3dS[V];var Ca\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Da(a,b,d,c){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+d+\x22\x26dim\x3d\x22+c)+e[2]:a}function Ea(a){var b\x3da.currentTarget,d\x3db.querySelector(\x22img[alt]\x22);d\x26\x26(a\x3dDa(b.href,+Math.round(a.clientX-d.offsetLeft),+Math.round(a.clientY-d.offsetTop),+d.width+\x22x\x22+ +d.height),Ca.test(a)\x26\x26(b.href\x3da))} function Fa(a){var b\x3dt;b\x3dvoid 0\x3d\x3d\x3db?window:b;var d\x3dnew U;if(null!\x3da\x26\x26\x22string\x22!\x3d\x3dtypeof a)throw Error();var c\x3dd.g,e\x3dM(c);if(e\x262)throw Error();a:{var g\x3dN(e);if(1\x3e\x3dg){var f\x3de;if(e\x26256)g\x3dc[c.length-1];else{if(null\x3d\x3da)break a;g\x3dc[g+(+!!(e\x26512)-1)]\x3d{};f|\x3d256}g[1]\x3da;f!\x3d\x3de\x26\x26L(c,f)}else c[1+(+!!(e\x26512)-1)]\x3da,e\x26256\x26\x26(a\x3dc[c.length-1],1 in a\x26\x26delete a[1])}var h;null\x3d\x3db||null\x3d\x3d(h\x3db.fence)||h.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var l; null\x3d\x3db||null\x3d\x3d(l\x3db.fence)||l.reportEvent({eventType:\x22click\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var k;null\x3d\x3db||null\x3d\x3d(k\x3db.fence)||k.reportEvent({eventType:\x22reserved.top_navigation\x22,destination:[\x22component-seller\x22]});var n;null\x3d\x3db||null\x3d\x3d(n\x3db.fence)||n.reportEvent({eventType:\x22click\x22,destination:[\x22component-seller\x22]})} function Ga(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var Ha\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var Ja\x3dY[Z].name;0\x3d\x3d\x3dJa.indexOf(\x22data-jcp-\x22)\x26\x26(Ha[Ja.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],g\x3da[\x22cc-button\x22],f\x3de?document.getElementById(e):null,h\x3dg?document.getElementById(g):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var l\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){Fa(l)}):b.addEventListener(\x22click\x22,function(){Fa(l)})}else if(b.addEventListener(\x22mousedown\x22,Ea),f\x26\x26h\x26\x26f.addEventListener(\x22mousedown\x22,function(k){k\x3dDa(h.href, +Math.round(k.clientX-f.offsetLeft),+Math.round(k.clientY-f.offsetTop),+f.clientWidth+\x22x\x22+ +f.clientHeight);Ca.test(k)\x26\x26(h.href\x3dk)}),d||c)b.addEventListener(\x22click\x22,function(k){Ga(k,c)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Ga(k,c)})})(Ha);}).call(this);\x3c/script\x3e');
window.addEventListener("load", performInspectionTask);
document.write('\x3c/div\x3e');
window.addEventListener("storage", performInspectionTask);
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:9px;right:0px;top:0px;position:absolute;width:31px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:68px;}.abgc .il-icon{height:15px;width:15px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAVs1JPIOO-pXoagZ1Fr1BO3dIvjtmpehAjiHXlcRHoi7Qx2licID4XSruhG0BAZhPhmBnGiJsIxfFFmTD3Jji61IgZqiLKkNVZQ8IGN13DoPibP5XEHFAF76ZDDzNq5DrzsdurY7bH3JnTmCNpm4PgyRDZjFuYGlPswAifRmCS8rvyC-00Lb-vUwbZ7uCDV5C0vIO1AhkkIJ-thdLP-zbV7F5B0nlSVqTTZ0lJMvo9Mk-WFF1gDtKmtC8QclIHPJOCv2txW2iOfKkmkC3C6-igiIr9A4B9VrFTB8-nB2HuS9lSw5Y10lBuyxuUyk8DVbp4REqqBN0ehNLkEGcmWpyCtGSs4jycMfUZBVGqrW2pqIOGage0bxB3DU06F6-FqPlmVkJc_yhANB7_knnA2FIGXdafdVUb_UWiQRs6FaZTAW945TH5LKvO7lvghUlHz4Ul39VcfhwrhjnjbqJTh3XRjUUe5qLI3ZZ_ZxvGNAgE9BK6dHRqg3cvb2te7LYdfGHfc2IEFFiIoLeSTROv1UFEP0UNTQU-kU9k5Yee9BN6UxG13fJ1crMMJjIgcZlpYAN5CYH1z3pJFWOntQ0a6b6DLPtL3gqhrHbVeZReMpnT81k5ChXeDS4bnY-R-5NZTjCGPCIM-JcIIbjBpf47ZGWgzMQJxBpEu_bkEWF2h_ESmKsUJy-z9aAF5LRTUA-Wg4rFNN_5bGQOvIKXk_bE-8IYokOWyRPdjxfs7OGRn-tq4pBfeK6oCTL_mhORhRqQAWzhaMVs9EMXIt-eq72_tMq4uOFevZq5KNf_Mwo8agCb3b5Z2pr6EZ-JIIu_Rm7IRFu1yXp_cZ2OzAF1TsYWiiv1H864wDUYcB8PbmqXyiXroJEVAC7DoMH8WJ1GOJFxWW_4OvPmgc0KR0Ro8RBx90XIbu1ySgvG6ZTVjKVALGHIFJbf5Kqk3b4JmGZKbDSo7lq2ZZOeqZbL5xWGgIxeh6qEIdK8e3wOeuoXD9C8VXUYNbNpGgJHf7nj7HrLIzkA0gkvnZ_7g8DoFMNDvRFDnDpW3fBlA_fe4nreGPwHXG177dY96qZzPPl1sAw7sDKJso-najLdAw95baGmRGXCkvjb50OlX4jFlVCVI2IY9aU9vNIezFwsyX0Ny3pHmVxcoW8jyVVcFOu-jqOpjVJNL9n2Nfci3IRQbDERMJO0dYdtEwWpIRiNgdWIUII0WMdBgI2bfZSCRy1tDGIqMF7iYU9xYJDbaTasiUhEUBHoWtL7MBIdcH_gvRvFdnQbG4VlDGaua6Co2bj3Aq5ltJflNVfCOgmfnU8k6XpZHQ--CZ8wgBmgokMzSZ84WC49QlbrR1uVH88MUSxE8N7ZnYe5xC1shflE5QgbXYREvVbMcjunKVOYS3M4JCzjs4GIYcax3RV7HNx7wF-NdQjwF3eOU_7RJ7UkaaJJhnGf3Tkj3p6kx6WctJ9KSmJzrdtJvsGwwBU14avSbezEh5kqYjr7whBg3MRJaVoW-aZP65Q5v8BEUfB1aP4IkYHdq65MpeqTk5xk88XCjHxqA5L4tNbOMqi0xc_adbN11mzXvMN0hzfcvl8LpIDWudCFguq0GPi2RzBeBy5hH3VboPPlBtMXjs7lRBBFALxYzrr-3GYSjfBErbYi1kRx6a7evKcRxkmktRpBY41eBko1nx62adyVfQ149SR78nNRUzVRWrNG9c\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://pagead2.googlesyndication.com/pagead/js/r20230816/r20110914/abg_lite.js\x22 async data-jc-version\x3d\x22r20230816\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCecw0osrgZKSxB8K2vcAPlpWjgAXVwpyHcoeb1J3dEfAuEAEgqLKFfGDhBKABxrnduwHIAQmoAwHIA5sEqgT8AU_QytbEzD8lopUAhGECtTWCZcHEeG-mFxtUIETzYbtcKTD2vXg7-WBmSrkVE7Ok3J4jfZX_wQaNtOqM3TgpoLqngHQt9wWeQ2XER6OZ7qTeenejkRfLp8vkIqyfK7q0ulpk9TPP6SjpKWZKJzzaPGhw5lApVVVYCyIui71HLwH4ps4Jc_0PsAIVdn9OBE0H-iPY68TN03VI0imc8J5Txmve5UTRtzn45Mcel_I_R2OwzwDJoUWDka36evFlI_6PzwbnYJlATSovc7fyktiXSROoXakFZdNXNvf2QORAlD9fP2wNOjWgtp0XE7btRwAGSflTH4kXB9FzfzYXXsAE8vfrsaQE4AQDkAYBoAZMgAeixqLEAqgH2baxAqgHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAeaBqgH89EbqAeW2BuoB6qbsQKoB4OtsQKoB_-esQKoB9-fsQLYBwDSCBQIgGEQARgdMgKKAjoCgEBIvf3BOvIIG2FkeC1zdWJzeW4tODU0OTQzMzEwODYzNzgyNYAKA5gLAcgLAYAMAaoNAlBIyA0BsBPY6LUU0BMA2BMNiBQB2BQB0BUB-BYBgBcB\\u0026sigh\x3dGxx01CicWGk\\u0026cid\x3dCAQSOwBpAlJW_SVeVfYH5ywHhqfLv9mfrqAfGTfGI_fhsumCal3MonqeVkyDqHfFTCRX1yE8D6cbMEOQizzCGAE\x26quot;,\x26quot;_2pkNq53bcwIh5vUnd0REIO4kolMGOi5w8QCIgluaXNzYW4ucGgyCAgFExj0ywEUQhdjYS1wdWItMjkzMDgwNTEwNDQxODIwNEgZWABwAQ\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;ما الخلل في هذا الإعلان؟\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;شكرًا جزيلاً على تعليقاتك.\x26quot;,\x26quot;سنراجع هذا الإعلان لتحسين التجربة في المستقبل.\x26quot;,\x26quot;شكرًا جزيلاً على تعليقاتك.\x26quot;,\x26quot;سنستخدم تعليقاتك لمراجعة الإعلانات على هذا الموقع.\x26quot;,null,null,null,\x26quot;إغلاق الإعلان: %1$d\x26quot;,\x26quot;Ads by Google\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.elwatannews.com/%26gl%3DJP%26hl%3Dar%26ai0%3D\\u0026usg\x3dAOvVaw2URtlgD5LGY_CD04eFBYdN\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,1,[[\x26quot;إرسال ملاحظات\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;ما الخلل في هذا الإعلان؟\x26quot;,[[\x26quot;غير مهتم بهذا الإعلان\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;إعلان يحجب المحتوى\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]],[\x26quot;رأيت هذا الإعلان عدة مرات\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;كان الإعلان غير ملائم\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;خيارات الإعلان\x26quot;,\x26quot;تم إغلاق الإعلان بواسطة %1$s\x26quot;,null,\x26quot;https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;إرسال ملاحظات\x26quot;,\x26quot;شكرًا لك. تساعد التعليقات على تحسين خدمة \\\x26quot;إعلانات Google\\\x26quot;\x26quot;,null,null,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/abg/iconx2-000000.png\x26quot;,\x26quot;إعلانات Google\x26quot;,null,\x26quot;الاطّلاع على إعدادات إعلانات Google\x26quot;,null,\x26quot;https://www.gstatic.com\x26quot;,\x26quot;\x26quot;,\x26quot;إعلانات %1$s\x26quot;,\x26quot;إعدادات الإعلان\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAXmW1tbW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxbbnVsbCwiNjgwNTgyMzc2Il1dLFtudWxsLCJodHRwczovL2dvb2dsZWFkcy5nLmRvdWJsZWNsaWNrLm5ldC9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUNlY3cwb3NyZ1pLU3hCOEsydmNBUGxwV2pnQVhWd3B5SGNvZWIxSjNkRWZBdUVBRWdxTEtGZkdEaEJLQUJ4cm5kdXdISUFRbW9Bd0hJQTVzRXFnVDhBVV9ReXRiRXpEOGxvcFVBaEdFQ3RUV0NaY0hFZUctbUZ4dFVJRVR6WWJ0Y0tURDJ2WGc3LVdCbVNya1ZFN09rM0o0amZaWF93UWFOdE9xTTNUZ3BvTHFuZ0hRdDl3V2VRMlhFUjZPWjdxVGVlbmVqa1JmTHA4dmtJcXlmSzdxMHVscGs5VFBQNlNqcEtXWktKenphUEdodzVsQXBWVlZZQ3lJdWk3MUhMd0g0cHM0SmNfMFBzQUlWZG45T0JFMEgtaVBZNjhUTjAzVkkwaW1jOEo1VHhtdmU1VVRSdHpuNDVNY2VsX0lfUjJPd3p3REpvVVdEa2EzNmV2RmxJXzZQendibllKbEFUU292YzdmeWt0aVhTUk9vWGFrRlpkTlhOdmYyUU9SQWxEOWZQMndOT2pXZ3RwMFhFN2J0UndBR1NmbFRINGtYQjlGemZ6WVhYc0FFOHZmcnNhUUU0QVFEa0FZQm9BWk1nQWVpeHFMRUFxZ0gyYmF4QXFnSGpzNGJxQWVUMkJ1b0ItNldzUUtvQl82ZXNRS29CNlNqc1FLb0I5WEpHNmdIcHI0YnFBZWFCcWdIODlFYnFBZVcyQnVvQjZxYnNRS29CNE90c1FLb0JfLWVzUUtvQjktZnNRTFlCd0RTQ0JRSWdHRVFBUmdkTWdLS0Fqb0NnRUJJdmYzQk92SUlHMkZrZUMxemRXSnplVzR0T0RVME9UUXpNekV3T0RZek56Z3lOWUFLQTVnTEFjZ0xBWUFNQWFvTkFsQkl5QTBCc0JQWTZMVVUwQk1BMkJNTmlCUUIyQlFCMEJVQi1CWUJnQmNCXHUwMDI2c2lnaD1HeHgwMUNpY1dHa1x1MDAyNmNpZD1DQVFTT3dCcEFsSldfU1ZlVmZZSDV5d0hocWZMdjltZnJxQWZHVGZHSV9maHN1bUNhbDNNb25xZVZreURxSGZGVENSWDF5RThENmNiTUVPUWl6ekNHQUUiLFtudWxsLG51bGwsbnVsbCwiaHR0cHM6Ly9kaXNwbGF5YWRzLWZvcm1hdHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2Fkcy9wcmV2aWV3L2NvbnRlbnQuanM_Y2xpZW50PXd0YVx1MDAyNm9iZnVzY2F0ZWRDdXN0b21lcklkPTc3NTExMTcyMjRcdTAwMjZjcmVhdGl2ZUlkPTY2NTYyOTc5MDM0M1x1MDAyNnZlcnNpb25JZD0wXHUwMDI2YWRHcm91cENyZWF0aXZlSWQ9NjA5MTQyMjQ2NzkxXHUwMDI2c2lnPUFDaVZCX3kwZ0VFcTdNaDdwLWNqZ0ZHOWJKZ2hFUEpUM2ciXSxudWxsLG51bGwsMSwiXzJwa05xNTNiY3dJaDV2VW5kMFJFSU80a29sTUdPaTV3OFFDSWdsdWFYTnpZVzR1Y0dneUNBZ0ZFeGoweXdFVVFoZGpZUzF3ZFdJdE1qa3pNRGd3TlRFd05EUXhPREl3TkVnWldBQndBUSIsIjIwNDIwMjcxMTA3Il1dXSxbbnVsbCxudWxsLDEsMSwxXSxbbnVsbCxudWxsLCJKUCJdXWbkPeNGQSJxMbLjyhjioGWEo2CyFwW0_oiofcI0Rlxby-DlM3xX5Wr-8JZfK6K4mAyG1_2uo1k4p9S34jBVjA0GeV8H1wqu8cFCLTjpitqHJ03yBSrPdnl2RVWUahD5h0goERGPui3YjHq6Rj4riwJC81rRaPfm0w64zORea5KEZ1ilWR8kP01c-RGGJg6U0TUaAyXJFIJ6abwe1p3Asvv8BZCAEh7xu_HRc9wYbc9W7L3aYuefFbwTfApV6Oct8LNkp5rMyZ3m9qMH3RIpMf1dPu562Gj6DPAWaRrv2UqrsnpHf9_O1z_wiCLI-84YGO3QrXP34KCG9NCyLHYg-Gg,GDhYXPM2Ssw2VitYw6dr0w\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAVs1JPIOO-pXoagZ1Fr1BO3dIvjtmpehAjiHXlcRHoi7Qx2licID4XSruhG0BAZhPhmBnGiJsIxfFFmTD3Jji61IgZqiLKkNVZQ8IGN13DoPibP5XEHFAF76ZDDzNq5DrzsdurY7bH3JnTmCNpm4PgyRDZjFuYGlPswAifRmCS8rvyC-00Lb-vUwbZ7uCDV5C0vIO1AhkkIJ-thdLP-zbV7F5B0nlSVqTTZ0lJMvo9Mk-WFF1gDtKmtC8QclIHPJOCv2txW2iOfKkmkC3C6-igiIr9A4B9VrFTB8-nB2HuS9lSw5Y10lBuyxuUyk8DVbp4REqqBN0ehNLkEGcmWpyCtGSs4jycMfUZBVGqrW2pqIOGage0bxB3DU06F6-FqPlmVkJc_yhANB7_knnA2FIGXdafdVUb_UWiQRs6FaZTAW945TH5LKvO7lvghUlHz4Ul39VcfhwrhjnjbqJTh3XRjUUe5qLI3ZZ_ZxvGNAgE9BK6dHRqg3cvb2te7LYdfGHfc2IEFFiIoLeSTROv1UFEP0UNTQU-kU9k5Yee9BN6UxG13fJ1crMMJjIgcZlpYAN5CYH1z3pJFWOntQ0a6b6DLPtL3gqhrHbVeZReMpnT81k5ChXeDS4bnY-R-5NZTjCGPCIM-JcIIbjBpf47ZGWgzMQJxBpEu_bkEWF2h_ESmKsUJy-z9aAF5LRTUA-Wg4rFNN_5bGQOvIKXk_bE-8IYokOWyRPdjxfs7OGRn-tq4pBfeK6oCTL_mhORhRqQAWzhaMVs9EMXIt-eq72_tMq4uOFevZq5KNf_Mwo8agCb3b5Z2pr6EZ-JIIu_Rm7IRFu1yXp_cZ2OzAF1TsYWiiv1H864wDUYcB8PbmqXyiXroJEVAC7DoMH8WJ1GOJFxWW_4OvPmgc0KR0Ro8RBx90XIbu1ySgvG6ZTVjKVALGHIFJbf5Kqk3b4JmGZKbDSo7lq2ZZOeqZbL5xWGgIxeh6qEIdK8e3wOeuoXD9C8VXUYNbNpGgJHf7nj7HrLIzkA0gkvnZ_7g8DoFMNDvRFDnDpW3fBlA_fe4nreGPwHXG177dY96qZzPPl1sAw7sDKJso-najLdAw95baGmRGXCkvjb50OlX4jFlVCVI2IY9aU9vNIezFwsyX0Ny3pHmVxcoW8jyVVcFOu-jqOpjVJNL9n2Nfci3IRQbDERMJO0dYdtEwWpIRiNgdWIUII0WMdBgI2bfZSCRy1tDGIqMF7iYU9xYJDbaTasiUhEUBHoWtL7MBIdcH_gvRvFdnQbG4VlDGaua6Co2bj3Aq5ltJflNVfCOgmfnU8k6XpZHQ--CZ8wgBmgokMzSZ84WC49QlbrR1uVH88MUSxE8N7ZnYe5xC1shflE5QgbXYREvVbMcjunKVOYS3M4JCzjs4GIYcax3RV7HNx7wF-NdQjwF3eOU_7RJ7UkaaJJhnGf3Tkj3p6kx6WctJ9KSmJzrdtJvsGwwBU14avSbezEh5kqYjr7whBg3MRJaVoW-aZP65Q5v8BEUfB1aP4IkYHdq65MpeqTk5xk88XCjHxqA5L4tNbOMqi0xc_adbN11mzXvMN0hzfcvl8LpIDWudCFguq0GPi2RzBeBy5hH3VboPPlBtMXjs7lRBBFALxYzrr-3GYSjfBErbYi1kRx6a7evKcRxkmktRpBY41eBko1nx62adyVfQ149SR78nNRUzVRWrNG9c\x26quot;,\x26quot;لماذا هذا الإعلان؟\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],90,728,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230816/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
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
    eeid: 'pcrgZJf-N_ix29gPw5ulwAY',
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
  window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjssYo_cxO47xFBpaNwkfUo0-pKSTkcrUG0F2kHDcRQ8dG2gU_PrCFjzWp09CNbVXKd8i1aAAVPz30z3_5N0wdxyR13nYEwb5AJFOi6BiGGNVVACnwVtn86CsHCRvWmJfVRkFIiM8ECXYbcL5yUalacCFL3WP9D1PEKh0hXcNYF5IPcvMFy4B9DdgSCEvak5kX1M5Pb11L2paGezugNLPGQInFMPs4E0JQTs9UTVnOCARbVQQQwp9TMb17xcIL37iEDEBwt-fQZbUoUP2Pd30-m5AMemlAg3O2rluVwIXUija5-Xxin8wA_WHtLZzUOabg2MuFPfQT2CTjDuV6dXCglDTD5rdnunZ01jEKiwMW2fkSCWQKfFFsLZebENX7C7RsEolAfNi8KDNzgt0A5p4pxUCENJXLoKpWFhtNpXNNWkEJHObydzkHPy-R36XYEbXCoM3u3aD-1pUGQWkoXUga1yF6AdDXgFZrUrtcDVpUveEXS9TBliKSUbyAqVO4tvJ-8kp4OZDZFsQ-VvCZ8MBhK4S8XsXeI_tASai4IXZBS58fgdsAAlPJo-XOQ67_ShH7jwn4ZHMZ9cft699VYlbdVmUCuLp8zRi083W99NP5VFH5b7JcpOsrn_wg06KhGwF2IYAeaOaZZC47JSWxwuKTNF9pXJ5hiMv59IdtgK__6FP-CM5P_DY3K0sNYY4jRoE-2jq56LChsXJcgYGckGw8VBdWf4qZjMkLE6ZtxhDgQHldXg2cFmp2aHxfUhmdBRvmIjiK_cvIvkEvwvxLCFVtR6pD7eYmLtTp2dTbBUu7POLl5ybYspem22yYJX_ntOCjwSDgEiIoJMPNVcLijY0pceXKni7EGyDxgeO_5gLVzejRTAdcDCCspdzNF_aSNf8zaO0zlTd6qzpo3l4I0TaaviHk5q0caQlObUnGD9r2NZZSsSvy9CL1zH3-MDe_FVG1nxqYHSxGzPbX8t7MaSCXl5UxM20EgvfN3w8eg7VaPmGFyzilUlePc_VdsckXyc_DyaEWBHOueatHNMZSKfEYbRqg_e5oUkuVrIpa0zaGmbRJJVLWUZJzXA9yGPsYlKvIIWUJtlAwXiaeVV3-txIZQZyfEVqtLGEpgfO9PVDHnRL7iz2q6EaiWB1Fzp5-FfxLtFXVsbCHci6cFH4b0UiOWC6cNBzSaaWoNUa_5N4CKgXU4JPIzfYag1AFm8ZTpBXRYQ4MzpZf7rewAfX9vLPBdUC7H5_fkbWbcyaCT-pp4Wq21rynBhn7vkdJ53LLPuqw07-WbWVP0NYR1kDgzAF_X3yNmwpbOzTXTN0sfmeZeoUR7SSHs_x0CxcLDsKjwsm8Jc8kF8htdg\x26sai\x3dAMfl-YR3Cwiknc9qOZvj7wMZiu3MieKLnW7m52JFwCgeFJdJ7gGyXvmB42LdbZIZjPOiNxWVDTtR9IBVeJq7zUD9icCt5ROIM83anxgjhpGUp2JApHbDAbeYfMmIwQgR4LqbhshchKHTgqoSZcRVvGLbPm90H7A7SGrGjwX7OujbF15UtEhcJ_R0j7tuoRnHqA37chElrDC1EkRqwpex67rFcW2speOKqzm18zEMK_67ZieSvS4pUTCHE7E0jpiwO59spxWp\x26sig\x3dCg0ArKJSzMTczwg02Nx5EAE\x26uach_m\x3d[UACH]\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_pcrgZJf-N_ix29gPw5ulwAY"));
})();
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    performInspectionTask();
  }
});
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = [];
  }
  window.GoogleTyFxhY.push({
    '_scs_': 'BlLNrpcrgZJf-N_ix29gPw5ulwAYAAAAAOAHgBAI',
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
window.onclick = function (event) {
  sendInsightsToBackend({
    click: {
      element: event.target.nodeName,
      id: event.target.id,
      class: event.target.className
    }
  });
};