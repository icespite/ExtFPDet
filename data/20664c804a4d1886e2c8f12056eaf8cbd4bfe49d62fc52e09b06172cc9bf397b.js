const originalSetTimeout = window.setTimeout;
const originalLocalStorageSetItem = localStorage.setItem;
const originalGlobalEventApply = Event.prototype.apply;
(function () {
  function cb(a, b, g, e) {
    function n() {
      return function () {
        e() ? b && b() : g && g();
      };
    }
    function f(a) {
      return function () {
        a = a.splice(0, a.length);
        q(a).each(function () {
          this();
        });
      };
    }
    function p() {
      var b = void 0;
      q(yb).each(function () {
        if (this.url === a) return b = this, !1;
      });
      return b;
    }
    (function () {
      if (e()) b && setTimeout(b, 1);else {
        var d = p();
        d ? d.runs.length ? d.runs.push(n()) : g && setTimeout(g, 1) : (d = [n()], yb.push({
          url: a,
          runs: d
        }), q.ajax({
          dataType: "script",
          cache: !0,
          url: a
        }).always(f(d)));
      }
    })();
  }
  function ia(a, b, g, e, n) {
    var f = xa(n);
    if (e(f)) return b(f);
    e = n.ownerDocument;
    n = e.createElement("script");
    n.async = !0;
    n.src = a;
    n.onload = function () {
      b(f);
    };
    n.onerror = g;
    e.body.appendChild(n);
    return n;
  }
  function xa(a) {
    a = a.ownerDocument;
    return a.defaultView || a.parentWindow;
  }
  function da() {
    var a = window;
    try {
      for (; a !== a.parent && a.parent.document;) a = a.parent;
    } catch (b) {}
    return a;
  }
  function db(a) {
    var b = null;
    try {
      for (;;) {
        var g = xa(b || a).frameElement;
        if (!g) break;
        b = g;
      }
    } catch (e) {}
    return b;
  }
  function Na(a, b, g, e, n) {
    function f(d) {
      var c = null;
      try {
        c = JSON.parse(d.data);
      } catch (l) {
        A.log("JSON.parse: " + l);
        return;
      }
      null !== c && c.id === b && (a.contentWindow ? (p.removeEventListener("message", f), e()) : n && "function" === typeof n && n());
    }
    if (function (a, b, l) {
      b = '\x3cscript type\x3d"text/javascript"\x3e(' + da + ')().postMessage(\'{"event": "ready", "id": "' + b + "\"}', '*');\x3c/script\x3e";
      a = a.contentWindow || a.contentDocument;
      a.document && (a = a.document);
      if (!a) return !1;
      a.write('\x3chtml lang\x3d"en"\x3e\x3chead\x3e\x3cmeta charset\x3d"UTF-8"\x3e\x3c/head\x3e\x3cbody style\x3d"margin:0;padding:0"\x3e' + (l || "") + b + "\x3c/body\x3e\x3c/html\x3e");
      a.close();
      return !0;
    }(a, b, g)) {
      var p = da();
      p.addEventListener("message", f);
    } else n && "function" === typeof n && n();
  }
  function Qb(a, b, g, e) {
    if (b && b.fraudTag) {
      var n = q("\x3ciframe\x3e\x3c/iframe\x3e").hide()[0];
      q(a).append(n);
      Na(n, "" + Math.random(), null, function () {
        Oa(b.fraudTag, 0, 0, !1, g, b, function (a) {
          var b = n.contentWindow;
          b.apiPro = e;
          q(b.document.body).append("\x3cdiv\x3e" + a + "\x3c/div\x3e");
        });
      });
    }
  }
  function zb(a) {
    function b(b) {
      A.log("isAutoplaySupported " + b);
      a(b);
      a = U;
      e.remove();
    }
    var g = !W,
      e = function () {
        var a = document.createElement("video");
        a.setAttribute("webkit-playsinline", "");
        a.setAttribute("playsinline", "");
        a.playing = !1;
        a.autoplay = !0;
        a.muted = !g;
        a.src = g ? Pa + "/player/video/t.mp4" : "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE\x3d";
        a.load();
        return a;
      }(),
      n = e.play();
    void 0 !== n ? n.then(function () {
      b(!0);
    }).catch(function () {
      b(!1);
    }) : (e.play(), e.onplay = function () {
      b(!0);
    }, e.oncanplaythrough = function () {
      setTimeout(function () {
        b(!1);
      }, 50);
    });
    g && setTimeout(function () {
      a !== U && (A.log("isAutoplaySupported timeout"), e.pause(), b(!1));
    }, 1E3);
  }
  function Qa(a, b, g) {
    b ? setTimeout(a, g || 0) : a();
  }
  function ja(a) {
    if (!Rb || !a || "string" !== typeof a || !za(a, "http://")) return a;
    A.log("checkProtocol replace for " + a);
    return "https" + a.substring(4, a.length);
  }
  function Aa(a, b) {
    if (!a || "string" !== typeof a) return !1;
    a = a.toLowerCase();
    b = b.toLowerCase();
    return -1 !== a.indexOf(b) && a.length === a.indexOf(b) + b.length;
  }
  function eb(a) {
    if (!a) return !0;
    a = a.toLowerCase();
    return "null" === a || "undefined" === a;
  }
  function Sb(a, b) {
    a._pType || (a._pType = "df");
    a.muted = Ra(a.muted, !1);
    a.width && (a.width += "");
    a.type || (a.type = "inStream");
    -1 === ["inStream", "inPage", "inView", "inBanner"].indexOf(a.type) ? delete a.margin : a.margin || "inView" === a.type || "inPage" === a.type || (a.margin = "initial");
    "inApp" === a.type && (a._vType = "inApp", a.type = "inBanner", a.inApp = !0);
    "amp" === a._type && (delete a.margin, a._vType = "av", a.type = "rewarded");
    b || a.aspectratio || a.height || -1 === ["inStream", "inPage", "inBanner"].indexOf(a.type) || (a.height = 160);
    if (b) {
      delete a.soundByHover;
      delete a.aspectratio;
      delete a.videoCloseButton;
      delete a.margin;
      a.autoStart = !0;
      a.type = "inBanner";
      var g = !0;
    }
    "inStream" === a.type && (g = !0);
    a.muted || delete a.soundByHover;
    if (a.file) if ("string" === typeof a.file && eb(a.file)) delete a.file;else {
      var e = Ba(a.file);
      a.file = a.autoStart || "string" !== typeof e || -1 !== e.indexOf("#") || Aa(a.file, ".m3u8") || Aa(a.file, ".mpd") ? e : e.trim() + "#t\x3d0.1";
    }
    (function () {
      function e(a) {
        if (a && a.types) {
          var b = [],
            c;
          for (c in a.types) if (a.types.hasOwnProperty(c)) {
            var l = {
              type: a.types[c]
            };
            a.types[c] === ha.MID && (a.startOn && (l.startOn = a.startOn), a.startOnPercent && (l.startOnPercent = a.startOnPercent));
            b.push(l);
          }
          return b;
        }
      }
      var f = a.advertising;
      f ? (b && (delete f.watermarkLink, delete f.watermarkIcon, delete f.controls), (!a.advertising.sticky || "inBanner" !== a.type && "inPage" !== a.type) && delete f.stickyCloseButton, f.breakSchedule || (f.breakSchedule = e(f.adBreakSchedule)), delete f.adBreakSchedule, f.tag && (q.isArray(f.tag) || (f.tag = [f.tag]), f.tag.forEach(function (a, b) {
        "string" === typeof a && (f.tag[b] = {
          url: a
        });
      }), f.tag = function () {
        function b(b) {
          if (!b.breakScheduleType) return b;
          if (!b.breakScheduleType.length) return delete b.breakScheduleType, b;
          if (f.breakSchedule) {
            var d = !1,
              l;
            for (l in b.breakScheduleType) b.breakScheduleType.hasOwnProperty(l) && -1 < q.inArray(b.breakScheduleType[l], c) && (d = b[b.breakScheduleType[l]] = !0);
            d && "inStream" !== a.type && (a.forceFile = !0);
            return d && b;
          }
          if (-1 < q.inArray(ha.PRE, b.breakScheduleType)) return b[ha.PRE] = !0, delete b.breakScheduleType, b;
        }
        var d = [],
          c = [];
        f.breakSchedule && f.breakSchedule.forEach(function (a) {
          c.push(a.type);
        });
        f.tag.forEach(function (a) {
          (a = b(a)) && d.push(a);
        });
        return d;
      }(), f.tag = function () {
        return f.tag.filter(function (a) {
          var b = a.platform;
          return (void 0 === b || W && "mobile" === b || !W && "desktop" === b) && !Sa(a.vtId, a);
        });
      }(), f.bestTimeout = Ra(f.bestTimeout, 2E3), f.requestTimeout = f.requestTimeout || (g ? 2E3 : 1 === f.tag.length ? 3E4 : 1E4), f.creativeTimeout = f.creativeTimeout || (g ? 5E3 : 1 === f.tag.length ? 3E4 : 1E4))) : a.advertising = {};
    })();
  }
  function Ra(a, b) {
    return void 0 === a ? b : a;
  }
  function Tb(a, b, g) {
    return a ? void 0 === a[b] ? g : a[b] : g;
  }
  function Ta(a) {
    if (!a || 1 > a) return "00:00";
    a = Math.floor(a);
    for (var b = "", g = 0; 3 > g && (0 !== a || 2 !== g); g++) {
      var e = a % 60;
      b = (9 < e ? e : "0" + e) + (b ? ":" + b : b);
      if (0 === a) break;
      a = (a - e) / 60;
    }
    return b;
  }
  function Ca(a) {
    return !0 === a || "true" === a;
  }
  function Ab(a, b) {
    a.attr("data-hidden", !b);
  }
  function fb(a, b) {
    if (!a) return "";
    var g = a.copyright,
      e = g && g.playbackIcon ? g.playbackIcon : a.watermarkIcon;
    g = g && g.playbackLink ? g.playbackLink : a.watermarkLink;
    var n = e ? '\x3cimg src\x3d"' + e + '" /\x3e' : Bb || b ? "" : "Advertisement";
    return n ? g ? '\x3ca href\x3d"' + g + '" class\x3d"orp-control orp-title" style\x3d"display: none" target\x3d"_blank"\x3e' + n + "\x3c/a\x3e" : '\x3cdiv class\x3d"orp-control orp-title ' + (e ? "" : "orp-title-text") + '" style\x3d"display: none"\x3e' + n + "\x3c/div\x3e" : "";
  }
  function gb(a, b, g) {
    try {
      if (b) (100 > b.width() || 100 > b.height()) && A.log("init element is small");else {
        var e = q(a).closest("body");
        a ? q(a).closest("html").length ? e.length ? q(a).is(":hidden") && A.log("init element is hidden", g) : A.initError(a, "element not in body", g) : A.initError(a, "element not in html", g) : A.initError(a, "element is null", g);
      }
    } catch (n) {
      A.log(n);
    }
  }
  function Ub(a) {
    try {
      var b = Da(a.url);
      b && b !== Da(Ua()) && A.log("init element invalid domain " + b);
    } catch (g) {
      A.log(g);
    }
  }
  function Ba(a) {
    return a && "string" === typeof a && za(a.trim(), "{") ? JSON.parse(a.trim()) : a;
  }
  function hb(a, b, g) {
    var e = q("\x3cdiv\x3e\x3c/div\x3e");
    e.attr("data-id", b);
    a = q(a);
    g && !a.is("body") ? a.after(e) : a.append(e);
    return e.get(0);
  }
  function Va() {
    try {
      return localStorage.getItem(""), !0;
    } catch (a) {
      return !1;
    }
  }
  function ib(a, b) {
    return function () {
      try {
        return a.apply(this, arguments);
      } catch (g) {
        try {
          b && console.error(g);
        } catch (e) {}
      }
    };
  }
  function Cb(a, b, g, e, n) {
    function f(c) {
      var l = c.pageX;
      void 0 === l && c.originalEvent.touches && (l = c.originalEvent.touches[0].pageX);
      d = l - a.offset().left;
      d /= a.width();
      d = 1 < d ? 1 : 0 > d ? 0 : d;
      b.width(100 * d + "%");
      e && e(d);
    }
    var p = q(a.get(0).ownerDocument),
      d = 0,
      c = !1;
    if (g || e) {
      var l = !1;
      a.on("mousedown touchstart", function (a) {
        function b() {
          p.off("mousemove touchmove", f).off("mouseup touchend", b);
          n && n(d);
          l = !1;
        }
        c || l || (l = !0, g && g(), p.on("mousemove touchmove", f).on("mouseup touchend", b), f(a));
      });
      return function (a) {
        c = a;
      };
    }
    a.mouseenter(function () {
      a.on("mousemove touchmove", f);
    }).mouseleave(function () {
      a.off("mousemove touchmove", f);
      b.width(0);
    });
  }
  function Ua() {
    return Vb(function () {
      if (window.top !== window) {
        try {
          return window.top.location.href;
        } catch (b) {}
        var a = da().document.referrer;
        if (Da(a)) return a;
      }
      return window.location.href;
    }());
  }
  function U() {}
  function Oa(a, b, g, e, n, f, p) {
    function d(b, d, f) {
      d = d || "";
      !f && d && (d = encodeURIComponent(d));
      a = a.replace(b, d || "");
    }
    n = Ua();
    d(/\$\$REFERER\$\$/g, n);
    d(/\$\$REFERER_DOMAIN\$\$/g, Da(n));
    d(/\$\$REFERER_PAGE\$\$/g, function () {
      try {
        var a = window.top.document.referrer;
        if (Da(a)) return a;
      } catch (l) {}
      return "";
    }());
    d(/\$\$CLIENT_USER_AGENT\$\$/g, navigator.userAgent);
    d(/\$\$RANDOM\$\$/g, Math.random(), !0);
    d(/\$\$RANDOM_10\$\$/g, Math.floor(9E9 * Math.random() + 1E9), !0);
    d(/\$\$HEIGHT\$\$/g, b, !0);
    d(/\$\$WIDTH\$\$/g, g, !0);
    f && d(/\$\$PLACEMENT_ID\$\$/g, f[fa], !0);
    e && (d(/\$\$APP_LAT\$\$/g, e.appLat), d(/\$\$APP_LON\$\$/g, e.appLon), d(/\$\$DNT\$\$/g, e.dnt), d(/\$\$APP_BUNDLE\$\$/g, e.appBundle), d(/\$\$APP_NAME\$\$/g, e.appName), d(/\$\$APP_STORE_URL\$\$/g, e.appStoreUrl), d(/\$\$APP_VERSION\$\$/g, e.appVersion), d(/\$\$DEVICE_ID\$\$/g, e.deviceId), d(/\$\$DEVICE_MAKE\$\$/g, e.deviceMake), Db(e, function (a, b) {
      d(new RegExp("\\$\\$" + a + "\\$\\$", "g"), b);
    }));
    (function () {
      var b = 0,
        l = function () {
          b--;
        };
      (function () {
        function c(a, b) {
          var c = !1,
            m = "";
          b && (c = a.gdprApplies || a.isUserInEu, m = a.tcString || a.consentData);
          d(/\$\$GDPR\$\$/g, c ? "1" : "0");
          d(/\$\$GDPR_CONSENT\$\$/g, m);
          l();
        }
        if (-1 !== a.indexOf("$$GDPR$$") || -1 !== a.indexOf("$$GDPR_CONSENT$$")) b++, Wa("__tcfapi", "getTCData", 2, c) || Wa("__cmp", "getConsentData", null, c) || c();
      })();
      (function () {
        function c(a, b) {
          var c = "1---";
          b && (c = a.uspString);
          d(/\$\$CCPA\$\$/g, c);
          l();
        }
        -1 !== a.indexOf("$$CCPA$$") && (b++, Wa("__uspapi", "getUSPData", 1, c) || c());
      })();
      0 === b ? p(a) : l = function () {
        0 === --b && p(a);
      };
    })();
  }
  function Wa(a, b, g, e, n) {
    function f() {
      for (var c = window; c;) {
        try {
          if (c[a]) return d("find"), c[a](b, g, e), !0;
          if (c.frames[a + "Locator"]) return d("find Locator"), p(c), !0;
        } catch (v) {
          console.log(v), e();
        }
        if (c === window.top) break;
        c = c.parent;
      }
    }
    function p(d) {
      var l = a + Math.random();
      c = function (b) {
        var c = {};
        try {
          c = "string" === typeof b.data ? JSON.parse(b.data) : b.data;
        } catch (E) {}
        (b = c[a + "Return"]) && b.callId === l && e(b.returnValue, b.success);
      };
      window.addEventListener("message", c, !1);
      var m = {};
      m[a + "Call"] = {
        command: b,
        parameter: n,
        version: g,
        callId: l
      };
      d.postMessage(m, "*");
    }
    function d(b) {
      A.log("cmp " + a + " " + b);
    }
    var c,
      l = e,
      r;
    e = function (a, b) {
      d("callback " + b);
      l(a, b);
      l = U;
      r && clearTimeout(r);
      r = 0;
      c && removeEventListener("message", c);
    };
    return function () {
      if (!f()) return !1;
      r = setTimeout(function () {
        d("timeout");
        e();
      }, 1E3);
      return !0;
    }();
  }
  function Wb(a) {
    var b = {};
    a && Db(a, function (a, e) {
      b[a] = e;
    });
    return b;
  }
  function Db(a, b) {
    for (var g in a) a.hasOwnProperty(g) && za(g, "C_") && b(g, a[g]);
  }
  function la(a) {
    var b;
    a || (a = 0);
    if ("number" === typeof a) {
      if (b = Ea[a]) return b.getApi();
    } else if ("string" === typeof a && (a = document.getElementById(a)), gb(a), a) {
      for (var g in Ea) if ((b = Ea[g]) && b instanceof jb && b.getElement().parentElement === a) return b.getApi();
      b = new jb(function (a) {
        var b = document.createElement("div");
        b.classList.add("orp-player-wrapper");
        a.appendChild(b);
        return b;
      }(a), function () {
        Ea[e] = null;
      }, a.id, !1);
      new Eb(b);
      Ea.push(b);
      var e = Ea.length - 1;
      return b.getApi();
    }
  }
  function jb(a, b, g, e) {
    function n(a, b) {
      function c() {
        u || (u = !0, W || Ia ? (m.initAdPlayer(), setTimeout(function () {
          r.trigger(x.beforePlay);
        }, 1)) : r.trigger(x.beforePlay));
      }
      if (!1 === a) {
        I.trigger(x.showAd);
        if (b) q(da()).one("touchstart", c);
        q(r.getWrapper()).one("click", c);
      } else r.trigger(x.beforePlay);
    }
    function f() {
      z || (z = !0, I.trigger(x.startLoad, l));
    }
    function p(a) {
      var b = O("dotceIesarPtlecnmenrIf"),
        c = O("Hpv_42oQSI7crqHe1Dwo8wpEu8VEw7KCBYGHKl8nzVxEWeyGiEaO");
      c && c !== b || (c = g);
      c = a[fa] || c;
      a.advertising[fa] = c;
    }
    function d() {
      A.event(A.types.init, l.advertising, "", function () {
        C = !0;
      });
    }
    var c = this,
      l,
      r,
      m,
      v,
      w,
      z = !1,
      u = !1,
      E = !1,
      C = !1,
      H,
      I = new Xa();
    this.d = function () {
      return C;
    };
    this.inStream = function () {
      return E;
    };
    this.getAdController = function () {
      return m;
    };
    this.getSizeController = function () {
      return v;
    };
    this.setDisableResizeAd = function (a) {};
    this.on = I.on;
    this.one = I.one;
    this.trigger = I.trigger;
    this.destroy = function () {
      H = !0;
      v && v.off();
      r && r.destroy();
    };
    this.getElement = function () {
      return a;
    };
    this.isAdapter = function () {
      return e;
    };
    var G = new function () {
      this.setup = function (b) {
        function e(a, b) {
          var c = "data-player-orp-" + (b ? "e" : "i");
          q("style[" + c + "]", a).get(0) || (c = '\x3cstyle type\x3d"text/css" ' + c + "\x3e" + (b ? "/*basic in-view styles (ivm \x3d in-view mode) */ [class*\x3d'orp-player-ivm-'] { position: fixed !important; box-shadow: 0 0 10px rgba(0,0,0,0.3); transition: left 0.4s 0s linear, right 0.4s 0s linear, top 0.4s 0s linear, bottom 0.4s 0s linear; z-index: 9999; opacity: 0; max-width: 100%; } .orp-player-ipm [class*\x3d'orp-player-ivm-'] { transition: none !important; opacity: 1; position: fixed !important; padding: 0 !important; } .orp-player-ipm.orp-went-sticky .orp-light-player-wrapper { transition: none !important; } .orp-player-ipm [class*\x3d'orp-player-ivm-'].orp-js-positioned-sticky { position: absolute !important; /*fix controls hiding when some parent transformed*/ } /*in-view player positioning:*/ /*top*/ .orp-player-ivm-TL {top: 20px; left: 20px; opacity: 1;} .orp-player-ivm-TC {top: 20px; left: 50vw; opacity: 1; transform: translateX(-50%);} .orp-player-ivm-TR {top: 20px; right: 20px; opacity: 1;} /*mid*/ .orp-player-ivm-ML {left: 20px; top: 0; bottom: 0; margin: auto; opacity: 1;} .orp-player-ivm-MR {right: 20px; top: 0; bottom: 0; margin: auto; opacity: 1;} /*bottom*/ .orp-player-ivm-BL {bottom: 20px; left: 20px; opacity: 1;} .orp-player-ivm-BC {bottom: 0px; left: 50vw; opacity: 1; transform: translateX(-50%);} .orp-player-ivm-BR {bottom: 0px; right: 0px; opacity: 1;} /*hidden in-view player*/ .orp-player-ivm-hidden.orp-player-ivm-TL, .orp-player-ivm-hidden.orp-player-ivm-ML, .orp-player-ivm-hidden.orp-player-ivm-BL {left: -100%; right: auto;} .orp-player-ivm-hidden.orp-player-ivm-TR, .orp-player-ivm-hidden.orp-player-ivm-MR, .orp-player-ivm-hidden.orp-player-ivm-BR {right: -100%; left: auto;} .orp-player-ivm-hidden.orp-player-ivm-TC {top: -100%;} .orp-player-ivm-hidden.orp-player-ivm-BC {bottom: -150%;} /*hidden in-page player*/ /* rewarded type (based on in-view type) */ .orp-player-rewarded { width: 100% !important; height: 100% !important; margin: auto; position: fixed !important; top: 0; left: 0; right: 0; bottom: 0; box-shadow: 0 0 10px rgba(0,0,0,0.3); transition: all 0.2s 0s; z-index: 9999; max-width: 100%; } .orp-player-ivm-hidden.orp-player-rewarded { top: -100%; bottom: auto; } .orp-player-ipm { transition: height 0.5s 0s, margin-top 0.5s 0s, margin-bottom 0.5s 0s; margin: 0 auto; display: block; } .orp-player-ipm-hidden, .orp-player-ipm-hidden .orp-player-iframe { height: 0 !important; opacity: 0; } .orp-player-ipm-hidden.orp-aspectRateFixed .orp-light-player-wrapper { padding-bottom: 1px !important; } .orp-player-ipm-hidden { margin: 0 !important; } .orp-player-wrapper:not(.orp-aspectRateFixed) { height: 100%; } .orp-light-player-wrapper { width: 100%; height: 100%; } .orp-aspectRateFixed .orp-light-player-wrapper { position: relative; height: 0; transition: padding 0.5s 0s; } .orp-player-iframe .orp-light-player-wrapper { height: 100%; } .orp-player-iframe { position: absolute; left: 0; top: 0; width: 100%; height: 100%; } .orp-player-ipm-hidden.orp-proReady .orp-player-iframe, .orp-player-ivm-hidden.orp-proReady .orp-player-iframe { height: 100px !important; width: 100px !important; position: fixed; bottom: 0; right: 0; opacity: 0; transition-duration: 0s; } /*XS screen styles*/ @media (max-width: 768px) { .orp-player-ivm-TL, .orp-player-ivm-ML, .orp-player-ivm-BL {left: 0;} .orp-player-ivm-TR, .orp-player-ivm-MR, .orp-player-ivm-BR {right: 0;} } /*copy styles for default banner */ .orp-close { position: absolute; width: 38px; height: 38px; right: 19px; top: 20px; opacity: 0.5; cursor: pointer; z-index: 3; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTkgMTkiPjx0aXRsZT5BcnRib2FyZCAxPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjE3IDQgMTUgMiA5LjUgNy41IDQgMiAyIDQgNy41IDkuNSAyIDE1IDQgMTcgOS41IDExLjUgMTUgMTcgMTcgMTUgMTEuNSA5LjUgMTcgNCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNSwybDIsMkwxMS41LDkuNSwxNywxNWwtMiwyTDkuNSwxMS41LDQsMTcsMiwxNSw3LjUsOS41LDIsNCw0LDIsOS41LDcuNSwxNSwybTAtMWExLDEsMCwwLDAtLjcxLjI5TDkuNSw2LjA5LDQuNzEsMS4yOWExLDEsMCwwLDAtMS40MiwwbC0yLDJhMSwxLDAsMCwwLDAsMS40Mkw2LjA5LDkuNWwtNC44LDQuNzlhMSwxLDAsMCwwLDAsMS40MmwyLDJhMSwxLDAsMCwwLDEuNDIsMGw0Ljc5LTQuOCw0Ljc5LDQuOGExLDEsMCwwLDAsMS40MiwwbDItMmExLDEsMCwwLDAsMC0xLjQyTDEyLjkxLDkuNWw0LjgtNC43OWExLDEsMCwwLDAsMC0xLjQybC0yLTJBMSwxLDAsMCwwLDE1LDFaIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4\x3d') no-repeat 0 0; background-size: contain; } .orp-defaultTag { text-align: center; background-color: #d9d9d9; overflow: hidden; } .orp-defaultTag.orp-rel { position: relative; } .orp-defaultTag img { max-height: 100%; max-width: 100%; } .orp-defaultTag.orp-aspectRateFixed, .orp-defaultTag.orp-aspectRateFixed * { max-height: 600px; transition: all 0.3s 0s; } .orp-defaultTag .orp-close { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOSAxOS4wNCI+PHBhdGggZD0iTTE3IDRsLTItMi01LjUgNS41TDQgMiAyIDRsNS41IDUuNUwyIDE1bDIgMiA1LjUtNS41TDE1IDE3bDItMi01LjUtNS41TDE3IDR6IiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg\x3d\x3d'); } .orp-defaultTag .orp-close:hover { opacity: 1; } /*iPhone 4-5 screen styles*/ @media (max-width: 320px) { .orp-player-ipm, .orp-player-ipm .orp-player-iframe { transition: height 0s; } .orp-aspectRateFixed .orp-light-player-wrapper { position: relative; height: 0; transition: padding 0s; } } .orp-force-hide-player { overflow: hidden; position: relative; transition-timing-function: linear; transition-duration: 0.3s; margin-top: 0 !important; margin-bottom: 0 !important; } .orp-force-hide-player:before { content: ' '; display: block; height: 1px; background: #fff; } .orp-force-hide-player:not(.orp-defaultTag) { background: #000000; } .orp-force-hide-player:not(.orp-aspectRateFixed) { height: 0 !important; } .orp-force-hide-player.orp-aspectRateFixed .orp-light-player-wrapper { padding-bottom: 0 !important; transition: padding 0.5s 0s !important; } .orp-force-hide-player.orp-went-sticky .orp-light-player-wrapper { height: 0 !important; } .orp-force-hide-player.orp-went-sticky .orp-fkstck { transition: padding 0.2s 0s; padding-bottom: 0 !important; } .orp-force-hide-player.orp-aspectRateFixed.orp-defaultTag, .orp-force-hide-player.orp-aspectRateFixed.orp-defaultTag * { max-height: 0; padding: 0; } [data-hidden\x3d'true'] { height: 0 !important; overflow: hidden; } [class*\x3d'orp-player-ivm-'].orp-defaultTag.orp-force-hide-player { display: none; } .orp-powered { position: absolute; right: 20px; bottom: 10px; opacity: 0.8; z-index: 3; display: inline-block; text-decoration: none; } .orp-powered:before { /*vertical align helper*/ content: ''; display: inline-block; vertical-align: middle; height: 100%; width: 0; } div.orp-powered, div.orp-powered * { cursor: default !important; } .orp-powered span { font-size: 12px; color: #000; display: inline-block; vertical-align: middle; line-height: 100%; padding-right: 5px; font-family: Arial, sans-serif; } .orp-powered img { max-width: 200px; max-height: 90px; display: inline-block; vertical-align: middle; line-height: 100%; } .orp-notMobile a.orp-powered:hover { opacity: 1; text-shadow: 0 0 1px rgba(0,0,0,0.2); }" : ".orp-light-player-wrapper { position: relative; width: 100%; height: 100%; background: #000; text-align: center; user-select: none; /*min-width: 250px;*/ max-width: 100%; } .orp-light-player-wrapper * { -webkit-tap-highlight-color: rgba(0,0,0,0); font-family: Arial, sans-serif !important; } .orp-light-player-wrapper .orp-lp-holder { height: 100%; /*display: inline-block;*/ /*line-height: 1px;*/ position: relative; overflow: hidden; /*min-width: 250px;*/ max-width: 100%; outline: none !important; } .orp-defaultTag { text-align: center; background-color: #d9d9d9; overflow: hidden; } .orp-defaultTag.orp-rel { position: relative; } .orp-defaultTag img { max-height: 100%; max-width: 100%; } .orp-full-screened.orp-lp-holder { position: fixed; width: 100%; height: 100%; top: 0; bottom: 0; left: 0; right: 0; background: #000; } .orp-lp-holder .orp-error-block { position: absolute; display: none; width: 100%; height: 100%; left: 0; top: 0; color: #fff; background: -moz-linear-gradient(top, #121212 0%, #181818 100%); background: -webkit-linear-gradient(top, #121212 0%,#181818 100%); background: linear-gradient(to bottom, #121212 0%, #181818 100%); z-index: 5; vertical-align: middle; } .orp-lp-holder .orp-error-block span { vertical-align: middle; line-height: normal; font-size: 16px; font-weight: bold; color: #efefef; } .orp-lp-holder .orp-error-block:before { content: ''; display: inline-block; vertical-align: middle; height: 100%; width: 0; } .orp-lp-holder.orp-error .orp-error-block { display: block; } .orp-lp-holder.orp-fit-fill video { object-fit: fill; } .orp-light-player-wrapper video { top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; max-width: 100%; max-height: 100%; margin: auto; position: relative; } .orp-lp-controls-wrapper { position: absolute; width: 100%; height: 100%; top: 0; left: 0; } .orp-lp-controls-wrapper .orp-lp-controls-wrapper { /*for wrapper*/ width: auto; max-width: 100%; height: 100%; } .orp-light-player-wrapper .orp-ctrls { position: absolute; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; z-index: 2; background: rgba(0,0,0,0.6); margin: auto; box-sizing: border-box; transition: opacity 0.2s; } .orp-isHiddenControls.orp-isPlaying .orp-ctrls, .orp-isInit .orp-c-close { opacity: 0; z-index: -1; } .orp-isHiddenControls.orp-isPlaying .orp-sliderInUse .orp-ctrls { opacity: 1; z-index: 2; } .orp-isHiddenControls.orp-full-screened, .orp-isHiddenControls.orp-full-screened * { cursor: none !important; } .orp-isHiddenControls.orp-full-screened .orp-vast-blocker { cursor: default !important; } .orp-isHiddenControls.orp-full-screened .orp-vast-skip-button { cursor: pointer !important; } .orp-light-player-wrapper .orp-ctrl { color: #dddddc; position: absolute; } .orp-ctrl.orp-c-play-big { display: none; } .orp-ctrl.orp-c-play { width: 64px; height: 64px; border-radius: 32px; left: 50%; margin-left: -32px; top: 50%; margin-top: -32px; background-color: rgba(0,0,0,0.5); } .orp-ctrl.orp-c-play:before { content: ''; position: absolute; width: 21px; height: 24px; top: 50%; margin-top: -12px; left: 50%; margin-left: -10px; } .orp-isPlaying .orp-ctrl.orp-c-play:before { width: 25px; height: 21px; margin-top: -11px; margin-left: -12px; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjMgMjYiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNOSAyM0gzVjNoNnpNMjAgM2gtNnYyMGg2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik05IDN2MjBIM1YzaDZtMC0xSDNhMSAxIDAgMCAwLTEgMXYyMGExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTF6bTExIDF2MjBoLTZWM2g2bTAtMWgtNmExIDEgMCAwIDAtMSAxdjIwYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjNhMSAxIDAgMCAwLTEtMXoiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyM3YyNkgweiIvPjwvZz48L2c+PC9zdmc+') no-repeat center center; background-size: contain; } .orp-ctrl.orp-c-next { display: none; width: 80px; height: 80px; border-radius: 40px; top: 50%; margin-top: -40px; left: auto; margin-left: 0; right: 25%; margin-right: -40px; } .orp-ctrl.orp-c-next:before { content: ''; position: absolute; width: 22px; height: 22px; top: 50%; margin-top: -11px; left: 50%; margin-left: -11px; } .orp-ctrl.orp-c-next:before, .orp-vast-skip-button:before { background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDpub25lO30uY2xzLTN7b3BhY2l0eTowLjE7fS5jbHMtNHtvcGFjaXR5OjAuMTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmljb24tbmV4dC12MzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjE2IiB5PSI2IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYgMTggMTQgMTIgNiA2IDYgMTgiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02LDZsOCw2TDYsMThWNk02LDVhLjkxLjkxLDAsMCwwLS40NS4xMUExLDEsMCwwLDAsNSw2VjE4YTEsMSwwLDAsMCwuNTUuODlBLjkxLjkxLDAsMCwwLDYsMTlhMSwxLDAsMCwwLC42LS4ybDgtNmExLDEsMCwwLDAsMC0xLjZsLTgtNkExLDEsMCwwLDAsNiw1WiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTYiIHk9IjYiIHdpZHRoPSIyIiBoZWlnaHQ9IjEyIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTguMTQsNUgxNS44NmEuODIuODIsMCwwLDAtLjg2Ljc4VjE4LjIyYS44Mi44MiwwLDAsMCwuODYuNzhoMi4yOGEuODIuODIsMCwwLDAsLjg2LS43OFY1Ljc4QS44Mi44MiwwLDAsMCwxOC4xNCw1WiIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTggNiAxOCAxOCAxNiAxOCAxNiA2IDE4IDYiLz48L2c+PC9nPjwvc3ZnPg\x3d\x3d') no-repeat 0 0; background-size: contain; } .orp-light-player-wrapper .orp-ctrls { height: 70px; padding: 28px 15px 0; background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%); background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%); } div.orp-isInit .orp-lp-holder .orp-ctrls, div.orp-isInit .orp-lp-holder .orp-c-play-big { display: none; } .orp-ctrls:after { content: ''; display: block; height: 0; float: none; clear: both; } .orp-ctrls .orp-ctrl { width: 36px; height: 36px; line-height: 36px; position: relative; float: left; border-radius: 18px; background: none; margin: 0 6px; left: auto; right: auto; top: auto; font-size: 11px; color: #fff; font-weight: bold; opacity: 0.85; cursor: pointer; transition: all 0.2s; } .orp-ctrls .orp-ctrl.orp-isSelected, .orp-ctrls .orp-ctrl.orp-isSelected .orp-ctrl, .orp-ctrls .orp-ctrl:hover { opacity: 1; } .orp-ctrl.orp-c-screen, .orp-ctrl.orp-c-settings { float: right; } .orp-ctrl.orp-c-progress-bg { position: absolute; height: 15px; left: 15px; right: 15px; bottom: 43px; z-index: 1; width: auto; background: none; cursor: pointer; opacity: 1 !important; touch-action: none; } .orp-c-progress-bg:before, .orp-c-progress-cache, .orp-c-progress-curr, .orp-c-progress-hover { content: ''; width: 100%; max-width: 100% !important; height: 3px; left: 0; top: 6px; border-radius: 1px; position: absolute; background-color: rgba(255,255,255,0.1); } .orp-c-progress-bg:hover:before, .orp-c-progress-bg:hover .orp-c-progress-cache, .orp-c-progress-bg:hover .orp-c-progress-curr, .orp-c-progress-bg:hover .orp-c-progress-hover { height: 5px; top: 5px; border-radius: 2px; } .orp-c-progress-cache { z-index: 2; background-color: rgba(255,255,255,0.15); width: 0; } .orp-c-progress-curr { z-index: 5; background-color: rgb(46, 149, 255); width: 0; } .orp-c-progress-curr:after { content: ''; position: absolute; width: 0; height: 0; right: 0; top: 0; background-color: #3686d0; z-index: 10; transition: all 0.2s 0s; } .orp-c-progress-bg:hover .orp-c-progress-curr { background-color: rgba(46, 149, 255, 0.76); } .orp-c-progress-bg:hover .orp-c-progress-curr:after { width: 11px; height: 11px; border-radius: 6px; right: -5px; top: -3px; } .orp-c-progress-hover { z-index: 3; background-color: rgba(255,255,255,0.30); width: 0; opacity: 0; transition: opacity 0.2s; } .orp-c-progress { width: 1%; height: 3px; max-width: 100% !important; top: 6px; position: absolute; background-color: #fffa19; z-index: 4; } .orp-c-progress-bg:hover .orp-c-progress-hover { opacity: 1; } .orp-ctrls .orp-c-time { width: auto; padding: 0 5px; line-height: 35px; opacity: 0.85 !important; cursor: default; } .orp-c-play-big:before { display: none; } .orp-ctrl.orp-c-play-big { width: 100%; height: 100%; left: 0; top: 0; cursor: default; opacity: 1; transition: opacity 0.2s; display: block; border-radius: 0; margin: 0; background: none; } .orp-init-placeholder { width: 100%; height: 100%; left: 0; top: 0; cursor: default; background: rgba(0,0,0,0.5); display: none; position: absolute; } .orp-isInit .orp-init-placeholder { display: block; } .orp-c-play-big i, .orp-init-placeholder .orp-init-button { display: block; position: absolute; width: 80px; height: 80px; border-radius: 40px; left: 50%; margin-left: -40px; top: 50%; margin-top: -40px; background-color: rgba(0,0,0,0.5); z-index: 2; transition: all 0.2s 0s; } .orp-c-play-big i:hover, .orp-init-placeholder .orp-init-button:hover { cursor: pointer; background-color: rgba(0,0,0,0.7); } .orp-c-play-big i:before, .orp-init-placeholder .orp-init-button:before { content: ''; position: absolute; top: 50%; left: 50%; width: 24px; height: 27px; margin: -13px 0 0 -10px; z-index: 2; } .orp-c-play-big i:before, .orp-ctrl.orp-c-play:before, .orp-init-placeholder .orp-init-button:before { background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMzEiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNMjMuMzEgMTQuMTdMNS4yNiAzLjIyQTEuNSAxLjUgMCAwIDAgMyA0LjU1djIxLjlhMS41IDEuNSAwIDAgMCAyLjI2IDEuMzNsMTgtMTFhMS41NyAxLjU3IDAgMCAwIC4wNS0yLjYxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00LjUgM2ExLjQyIDEuNDIgMCAwIDEgLjc2LjIybDE4IDExYTEuNTcgMS41NyAwIDAgMSAwIDIuNjZsLTE4IDExYTEuNDIgMS40MiAwIDAgMS0uNzYuMTJBMS41MyAxLjUzIDAgMCAxIDMgMjYuNDVWNC41NUExLjUzIDEuNTMgMCAwIDEgNC41IDNtMC0xQTIuNTEgMi41MSAwIDAgMCAyIDQuNTV2MjEuOUEyLjUxIDIuNTEgMCAwIDAgNC41IDI5YTIuNDcgMi40NyAwIDAgMCAxLjI2LS4zNWwxOC0xMC45NWEyLjU5IDIuNTkgMCAwIDAgMC00LjRsLTE4LTExQTIuNDcgMi40NyAwIDAgMCA0LjUgMnoiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyOHYzMUgweiIvPjwvZz48L2c+PC9zdmc+') no-repeat center center; background-size: contain; } .orp-landing-page { width: 100%; height: 100%; left: 0; top: 0; cursor: default; display: none; position: absolute; z-index: 100; } .orp-jsLandingPage .orp-landing-page { display: block; } .orp-isOver .orp-c-play-big i:before, .orp-isOver .orp-c-play:before, .orp-isPlaylist.orp-isOverPlaylist.orp-isOver .orp-c-play-big i:before, .orp-isPlaylist.orp-isOverPlaylist.orp-isOver .orp-c-play:before { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyNCI+PHBhdGggZD0iTTI1LjMzIDEzLjA5bC00LjYgNS4wOWEuNzYuNzYgMCAwIDEtMS4wOCAwbC00LjgxLTUuMDhhLjY2LjY2IDAgMCAxIC41My0xLjFoNC4xOGMwLTQuMS0yLjg2LTcuNDQtNy03LjQ0YTcuNDQgNy40NCAwIDEgMCAwIDE0Ljg4VjIyYTEwIDEwIDAgMSAxIDAtMjBjNS41NiAwIDkuMjUgNC40OCA5LjI1IDEwaDNhLjY2LjY2IDAgMCAxIC41MyAxLjA5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi41NiAyYzUuNTYgMCA5LjI1IDQuNDggOS4yNSAxMGgzYS42Ni42NiAwIDAgMSAuNTQgMS4wOWwtNC42IDUuMDlhLjc2Ljc2IDAgMCAxLTEuMDggMGwtNC44My01LjA4YS42Ni42NiAwIDAgMSAuNTMtMS4xaDQuMThjMC00LjEtMi44Ni03LjQ0LTctNy40NGE3LjQ0IDcuNDQgMCAxIDAgMCAxNC44OFYyMmExMCAxMCAwIDEgMSAwLTIwbTAtMWExMSAxMSAwIDEgMCAwIDIyLjA2IDEgMSAwIDAgMCAxLTF2LTIuNjJhMSAxIDAgMCAwLTEtMSA2LjQxIDYuNDEgMCAxIDEgMC0xMi44MiA2IDYgMCAwIDEgNS45IDUuMzhoLTMuMDhhMS43MyAxLjczIDAgMCAwLTEuNiAxIDEuNjQgMS42NCAwIDAgMCAuMzIgMS44bDQuODIgNS4wOGExLjc0IDEuNzQgMCAwIDAgMS4yOC41NSAxLjc4IDEuNzggMCAwIDAgMS4zLS41N2w0LjYtNS4wOWExLjY2IDEuNjYgMCAwIDAgLjMtMS43OSAxLjc1IDEuNzUgMCAwIDAtMS42LTFoLTJDMjIuMzUgNS4yIDE4LjEgMSAxMi41NiAxeiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4\x3d'); } .orp-isPlaylist.orp-isOver .orp-c-play-big i:before, .orp-isPlaylist.orp-isOver .orp-c-play:before { background-image: none; } .orp-isPlaying .orp-c-play-big i { display: none; } .orp-isPlaying .orp-proVideo .orp-isPlaying .orp-c-play-big i { display: none; } .orp-isPlaying .orp-proVideo .orp-c-play-big i { display: block; } /*loading spinner*/ @keyframes spin { 100% {transform:rotate(360deg);} } @keyframes lp-loader-fade { 0% { background-color: rgba(204,204,204,.5) } 50% { background-color: rgba(204,204,204,.15) } to { background-color: rgba(204,204,204,.15) } } @keyframes IE_fix_shake { 0% {margin-top: -1px;} to {margin-top: 0;} } /*----MS IE11 CSS----*/ @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) { .orp-light-player-wrapper \x3e .orp-isPlaying video { animation-name: IE_fix_shake; animation-duration: .1s; animation-iteration-count: 2; } } /*----MS Edge CSS----*/ @supports (display:-ms-grid) { .orp-light-player-wrapper \x3e .orp-isPlaying video { animation-name: IE_fix_shake; animation-duration: .1s; animation-iteration-count: 2; } } .orp-lp-loader-dots { pointer-events: none; position: absolute; width: 20%; padding-bottom: 20%; top: 50%; left: 50%; margin-top: -10%; margin-left: -10%; display: none; } .orp-lp-loader-dot { position: absolute; width: 100%; padding-bottom: 100%; border-radius: 100%; background-color: rgba(204,204,204,0); animation: lp-loader-fade .8s cubic-bezier(0.4,0.0,0.2,1) infinite } .orp-lp-loader-dot-0 { top: -143.5%; left: 0 } .orp-lp-loader-dot-1 { top: -101.5%; left: 101.5%; animation-delay: .1s } .orp-lp-loader-dot-2 { top: 0; left: 143.5%; animation-delay: .2s } .orp-lp-loader-dot-3 { top: 101.5%; left: 101.5%; animation-delay: .3s } .orp-lp-loader-dot-4 { top: 143.5%; left: 0; animation-delay: .4s } .orp-lp-loader-dot-5 { top: 101.5%; left: -101.5%; animation-delay: .5s } .orp-lp-loader-dot-6 { top: 0; left: -143.5%; animation-delay: .6s } .orp-lp-loader-dot-7 { top: -101.5%; left: -101.5%; animation-delay: .7s } .orp-isPlaying.orp-isLoading .orp-c-play-big i { opacity: 1 !important; z-index: 2; } .orp-isPlaying.orp-isLoading .orp-c-play-big i, .orp-isPlaying.orp-isLoading .orp-lp-loader-dots { display: block; } .orp-isPlaying.orp-isLoading .orp-c-play-big i:before { display: none; } .orp-init-loading .orp-init-placeholder .orp-init-button { background-color: rgba(0,0,0,0.5); cursor: default; } .orp-init-loading .orp-init-placeholder .orp-init-button:before { display: none; } .orp-init-loading .orp-init-placeholder .orp-lp-loader-dots { display: block; } .orp-ctrl.orp-c-screen:before { content: ''; display: block; position: absolute; top: 50%; left: 50%; width: 18px; height: 18px; margin: -10px 0 0 -9px; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE4IDJ2NmgtM1Y1aC0zVjJoNnptLTMgMTB2M2gtM3YzaDZ2LTZ6TTggMkgydjZoM1Y1aDN6TTUgMTV2LTNIMnY2aDZ2LTN6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE4IDJ2NmgtM1Y1aC0zVjJoNm0wLTFoLTZhMSAxIDAgMCAwLTEgMXYzYTEgMSAwIDAgMCAxIDFoMnYyYTEgMSAwIDAgMCAxIDFoM2ExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXptMCAxMXY2aC02di0zaDN2LTNoM20wLTFoLTNhMSAxIDAgMCAwLTEgMXYyaC0yYTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xek04IDJ2M0g1djNIMlYyaDZtMC0xSDJhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoM2ExIDEgMCAwIDAgMS0xVjZoMmExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXpNNSAxMnYzaDN2M0gydi02aDNtMC0xSDJhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xdi0zYTEgMSAwIDAgMC0xLTFINnYtMmExIDEgMCAwIDAtMS0xeiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4\x3d') no-repeat 0 0; background-size: contain; } .orp-full-screened .orp-ctrl.orp-c-screen:before { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTEyIDhWMmgzdjNoM3YzaC02em0zIDEwdi0zaDN2LTNoLTZ2NnpNMiA4aDZWMkg1djNIMnptMyA3djNoM3YtNkgydjN6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE1IDJ2M2gzdjNoLTZWMmgzbTAtMWgtM2ExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNWExIDEgMCAwIDAtMS0xaC0yVjJhMSAxIDAgMCAwLTEtMXptMyAxMXYzaC0zdjNoLTN2LTZoNm0wLTFoLTZhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoM2ExIDEgMCAwIDAgMS0xdi0yaDJhMSAxIDAgMCAwIDEtMXYtM2ExIDEgMCAwIDAtMS0xek04IDJ2NkgyVjVoM1YyaDNtMC0xSDVhMSAxIDAgMCAwLTEgMXYySDJhMSAxIDAgMCAwLTEgMXYzYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXptMCAxMXY2SDV2LTNIMnYtM2g2bTAtMUgyYTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDJ2MmExIDEgMCAwIDAgMSAxaDNhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xeiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4\x3d'); } .orp-ctrl.orp-c-playlist { float: right; margin: 0; } .orp-ctrl.orp-c-playlist:before { content: ''; display: block; position: absolute; top: 50%; left: 50%; width: 23px; height: 23px; margin: -12px 0 0 -7px; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDVINEgyMEgyMVY3SDIwSDRIM1Y1Wk0xMCA5SDExTDIwIDlIMjFWMTFIMjBMMTEgMTFIMTBWOVpNMTEgMTNIMTBWMTVIMTFMMjAgMTVIMjFWMTNIMjBMMTEgMTNaTTMgMTdINEgyMEgyMVYxOUgyMEg0SDNWMTdaTTMgOS4wNDAzMVYxNC45NTk3QzMgMTUuMzc4OSAzLjQ4NDk3IDE1LjYxMiAzLjgxMjM1IDE1LjM1MDFMNy41MTE5NiAxMi4zOTA0QzcuNzYyMTYgMTIuMTkwMyA3Ljc2MjE2IDExLjgwOTcgNy41MTE5NiAxMS42MDk2TDMuODEyMzUgOC42NDk4OEMzLjQ4NDk3IDguMzg3OTcgMyA4LjYyMTA2IDMgOS4wNDAzMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo\x3d') no-repeat 0 0; background-size: contain; } .orp-ctrl.orp-c-settings:before { content: ''; display: block; position: absolute; top: 50%; left: 50%; width: 18px; height: 18px; margin: -10px 0 0 -7px; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC44NSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNjI3NyAyLjg1MTY2QzE0LjU1NDMgMi4zNjIxNCAxNC4xMzM4IDIgMTMuNjM4OCAySDEwLjM2MTFDOS44NjYxNCAyIDkuNDQ1NjMgMi4zNjIxNCA5LjM3MjIgMi44NTE2Nkw5LjAxMTE0IDUuMjU4NjlDOC45MTU4MSA1Ljg5NDI2IDguMjU0MjkgNi4yNzYxOSA3LjY1NjIxIDYuMDQwOTZMNS4zOTExMSA1LjE1MDEyQzQuOTMwNDYgNC45Njg5NSA0LjQwNjU4IDUuMTUyMDYgNC4xNTkwOCA1LjU4MDc0TDIuNTIwMjcgOC40MTkyNEMyLjI3Mjc3IDguODQ3OTIgMi4zNzYxNCA5LjM5MzE3IDIuNzYzMzYgOS43MDE1Mkw0LjY2NzM4IDExLjIxNzdDNS4xNzAxNCAxMS42MTgxIDUuMTcwMTQgMTIuMzgxOSA0LjY2NzM4IDEyLjc4MjNMMi43NjMzNiAxNC4yOTg1QzIuMzc2MTQgMTQuNjA2OCAyLjI3Mjc3IDE1LjE1MjEgMi41MjAyNyAxNS41ODA3TDQuMTU5MDggMTguNDE5MkM0LjQwNjU4IDE4Ljg0NzkgNC45MzA0NiAxOS4wMzEgNS4zOTExMSAxOC44NDk5TDcuNjU2MiAxNy45NTlDOC4yNTQyOSAxNy43MjM4IDguOTE1ODEgMTguMTA1NyA5LjAxMTE0IDE4Ljc0MTNMOS4zNzIyIDIxLjE0ODNDOS40NDU2MyAyMS42Mzc5IDkuODY2MTQgMjIgMTAuMzYxMSAyMkgxMy42Mzg4QzE0LjEzMzggMjIgMTQuNTU0MyAyMS42Mzc5IDE0LjYyNzcgMjEuMTQ4M0wxNC45ODg4IDE4Ljc0MTNDMTUuMDg0MSAxOC4xMDU3IDE1Ljc0NTYgMTcuNzIzOCAxNi4zNDM3IDE3Ljk1OUwxOC42MDg3IDE4Ljg0OTlDMTkuMDY5NCAxOS4wMzEgMTkuNTkzMyAxOC44NDc5IDE5Ljg0MDggMTguNDE5MkwyMS40Nzk2IDE1LjU4MDdDMjEuNzI3MSAxNS4xNTIxIDIxLjYyMzcgMTQuNjA2OCAyMS4yMzY1IDE0LjI5ODVMMTkuMzMyNSAxMi43ODIzQzE4LjgyOTcgMTIuMzgxOSAxOC44Mjk3IDExLjYxODEgMTkuMzMyNSAxMS4yMTc3TDIxLjIzNjUgOS43MDE1MkMyMS42MjM3IDkuMzkzMTcgMjEuNzI3MSA4Ljg0NzkyIDIxLjQ3OTYgOC40MTkyNEwxOS44NDA4IDUuNTgwNzRDMTkuNTkzMyA1LjE1MjA2IDE5LjA2OTQgNC45Njg5NSAxOC42MDg3IDUuMTUwMTJMMTYuMzQzNyA2LjA0MDk1QzE1Ljc0NTYgNi4yNzYxNyAxNS4wODQxIDUuODk0MjUgMTQuOTg4NyA1LjI1ODY4TDE0LjYyNzcgMi44NTE2NlpNMTIgMTUuNTk3NkMxMy45ODY5IDE1LjU5NzYgMTUuNTk3NiAxMy45ODY5IDE1LjU5NzYgMTJDMTUuNTk3NiAxMC4wMTMxIDEzLjk4NjkgOC40MDIzNCAxMiA4LjQwMjM0QzEwLjAxMzEgOC40MDIzNCA4LjQwMjM0IDEwLjAxMzEgOC40MDIzNCAxMkM4LjQwMjM0IDEzLjk4NjkgMTAuMDEzMSAxNS41OTc2IDEyIDE1LjU5NzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo\x3d') no-repeat 0 0; background-size: contain; } .orp-ctrl.orp-c-vol:before { content: ''; display: block; position: absolute; top: 50%; width: 23px; height: 18px; left: 6px; margin: -9px 0 0 0; } .orp-ctrl.orp-c-vol:before, .orp-vol { background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyMCI+PHBhdGggZD0iTTE0LjcgNGEzMS41MiAzMS41MiAwIDAgMSAxLjMgNiAzMS41MiAzMS41MiAwIDAgMS0xLjMgNnMzLjMtMi41IDMuMy02LTMuMy02LTMuMy02ek03IDZINEMzIDYgMiA5IDIgOXYycy45IDMgMiAzaDRsMyAzaDFWM2gtMXptMTIuMi0zLjdsLTEuOS0uMUE5LjA5IDkuMDkgMCAwIDEgMjEgMTBhOS4yOSA5LjI5IDAgMCAxLTMuNiA3LjhsMS45LS4xQTEwLjE4IDEwLjE4IDAgMCAwIDIzIDEwYTEwLjEyIDEwLjEyIDAgMCAwLTMuOC03Ljd6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE0LjcgNFMxOCA2LjUgMTggMTBzLTMuMyA2LTMuMyA2YTMxLjUyIDMxLjUyIDAgMCAwIDEuMy02IDMxLjUyIDMxLjUyIDAgMCAwLTEuMy02bTAtMWExIDEgMCAwIDAtLjU3LjE4IDEgMSAwIDAgMC0uMzkgMS4xMkEyOS4wOSAyOS4wOSAwIDAgMSAxNSAxMGEyOS4wOSAyOS4wOSAwIDAgMS0xLjI2IDUuNyAxIDEgMCAwIDAgLjM5IDEuMTIgMSAxIDAgMCAwIC41Ny4xOCAxIDEgMCAwIDAgLjYtLjJjLjE1LS4xMiAzLjctMi44IDMuNy02LjhzLTMuNTUtNi42OC0zLjctNi44YTEgMSAwIDAgMC0uNi0uMnpNMTIgM3YxNGgtMWwtMy0zSDRjLTEuMSAwLTItMy0yLTNWOXMxLTMgMi0zaDNsNC0zaDFtMC0xaC0xYTEgMSAwIDAgMC0uNi4yTDYuNjcgNUg0QzIuNTggNSAxLjYxIDcgMS4wNSA4LjY4QTEuMTkgMS4xOSAwIDAgMCAxIDl2MmExIDEgMCAwIDAgMCAuMjlDMS40NiAxMi42NyAyLjQgMTUgNCAxNWgzLjU5bDIuNyAyLjcxQTEgMSAwIDAgMCAxMSAxOGgxYTEgMSAwIDAgMCAxLTFWM2ExIDEgMCAwIDAtMS0xem01LjMuMmwxLjkuMUExMC4xMiAxMC4xMiAwIDAgMSAyMyAxMGExMC4xOCAxMC4xOCAwIDAgMS0zLjcgNy43bC0xLjkuMUE5LjI5IDkuMjkgMCAwIDAgMjEgMTBhOS4wOSA5LjA5IDAgMCAwLTMuNy03LjhtMC0xYTEgMSAwIDAgMC0uOTUuNjhBMSAxIDAgMCAwIDE2Ljc0IDMgOC4xOCA4LjE4IDAgMCAxIDIwIDEwYTguMzEgOC4zMSAwIDAgMS0zLjE5IDcgMSAxIDAgMCAwIC41OSAxLjgxaC4wNWwxLjktLjFhMSAxIDAgMCAwIC42MS0uMjVBMTEuMTcgMTEuMTcgMCAwIDAgMjQgMTBhMTEuMDUgMTEuMDUgMCAwIDAtNC4xNi04LjQ3IDEgMSAwIDAgMC0uNTktLjIzbC0xLjktLjF6IiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg\x3d\x3d') no-repeat 0 0; background-size: contain; } .orp-ctrl.orp-c-vol.orp-vol-mid:before { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyMCI+PHBhdGggZD0iTTE0LjcgNGEzMS41MiAzMS41MiAwIDAgMSAxLjMgNiAzMS41MiAzMS41MiAwIDAgMS0xLjMgNnMzLjMtMi41IDMuMy02LTMuMy02LTMuMy02ek03IDZINEMzIDYgMiA5IDIgOXYycy45IDMgMiAzaDRsMyAzaDFWM2gtMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTQuNyA0UzE4IDYuNSAxOCAxMHMtMy4zIDYtMy4zIDZhMzEuNTIgMzEuNTIgMCAwIDAgMS4zLTYgMzEuNTIgMzEuNTIgMCAwIDAtMS4zLTZtMC0xYTEgMSAwIDAgMC0uNTcuMTggMSAxIDAgMCAwLS4zOSAxLjEyQTI5LjA5IDI5LjA5IDAgMCAxIDE1IDEwYTI5LjA5IDI5LjA5IDAgMCAxLTEuMjYgNS43IDEgMSAwIDAgMCAuMzkgMS4xMiAxIDEgMCAwIDAgLjU3LjE4IDEgMSAwIDAgMCAuNi0uMmMuMTUtLjEyIDMuNy0yLjggMy43LTYuOHMtMy41NS02LjY4LTMuNy02LjhhMSAxIDAgMCAwLS42LS4yek0xMiAzdjE0aC0xbC0zLTNINGMtMS4xIDAtMi0zLTItM1Y5czEtMyAyLTNoM2w0LTNoMW0wLTFoLTFhMSAxIDAgMCAwLS42LjJMNi42NyA1SDRDMi41OCA1IDEuNjEgNyAxLjA1IDguNjhBMS4xOSAxLjE5IDAgMCAwIDEgOXYyYTEgMSAwIDAgMCAwIC4yOUMxLjQ2IDEyLjY3IDIuNCAxNSA0IDE1aDMuNTlsMi43IDIuNzFBMSAxIDAgMCAwIDExIDE4aDFhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTF6IiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg\x3d\x3d'); } .orp-ctrl.orp-c-vol.orp-vol-off:before, .orp-is-muted .orp-vol { background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyMCI+PHBhdGggZD0iTTcgNkg0QzMgNiAyIDkgMiA5djJzLjkgMyAyIDNoNGwzIDNoMVYzaC0xem0xNS45LjM4YS44Mi44MiAwIDAgMSAwIDEuMTZsLTIuNiAyLjYgMi42IDIuNmEuODIuODIgMCAwIDEtMS4xNiAxLjE2bC0yLjYtMi42LTIuNiAyLjZhLjgyLjgyIDAgMCAxLTEuMTYtMS4xNmwyLjYtMi42LTIuNi0yLjZhLjgyLjgyIDAgMCAxIDEuMTYtMS4xNkwxOS4xNCA5bDIuNi0yLjZhLjgyLjgyIDAgMCAxIDEuMTYgMHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTIgM3YxNGgtMWwtMy0zSDRjLTEuMSAwLTItMy0yLTNWOXMxLTMgMi0zaDNsNC0zaDFtMC0xaC0xYTEgMSAwIDAgMC0uNi4yTDYuNjcgNUg0QzIuNTggNSAxLjYxIDcgMS4wNSA4LjY4QTEuMTkgMS4xOSAwIDAgMCAxIDl2MmExIDEgMCAwIDAgMCAuMjlDMS40NiAxMi42NyAyLjQgMTUgNCAxNWgzLjU5bDIuNyAyLjcxQTEgMSAwIDAgMCAxMSAxOGgxYTEgMSAwIDAgMCAxLTFWM2ExIDEgMCAwIDAtMS0xem0xMC4zMiA0LjE0YS44Mi44MiAwIDAgMSAuNTggMS40bC0yLjYgMi42IDIuNiAyLjZhLjgyLjgyIDAgMCAxLTEuMTYgMS4xNmwtMi42LTIuNi0yLjYgMi42YS44Mi44MiAwIDAgMS0xLjE2LTEuMTZsMi42LTIuNi0yLjYtMi42YS44Mi44MiAwIDAgMSAxLjE2LTEuMTZMMTkuMTQgOWwyLjYtMi42YS44Mi44MiAwIDAgMSAuNTgtLjI0bTAtMWExLjgxIDEuODEgMCAwIDAtMS4zMi41MWwtMS45IDEuOS0xLjktMS45YTEuODEgMS44MSAwIDAgMC0xLjItLjUzQTEuODEgMS44MSAwIDAgMCAxNC4xNCA3YTEuODEgMS44MSAwIDAgMCAuNTMgMS4yOGwxLjkgMS45LTEuOSAxLjgyYTEuODIgMS44MiAwIDAgMCAyLjU3IDIuNTdsMS45LTEuOSAxLjkgMS45YTEuODEgMS44MSAwIDAgMCAxLjI4LjUzIDEuODIgMS44MiAwIDAgMCAxLjI5LTMuMWwtMS45LTEuOSAxLjktMS45YTEuODEgMS44MSAwIDAgMCAuNTMtMS4yIDEuODEgMS44MSAwIDAgMC0xLjgyLTEuODJ6IiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg\x3d\x3d'); } .orp-notMobile .orp-ctrl.orp-c-vol.orp-isSelected, .orp-notMobile .orp-ctrl.orp-c-vol:hover { width: 114px; } .orp-c-vol-changer { display: none; } .orp-notMobile .orp-ctrl.orp-c-vol.orp-isSelected .orp-c-vol-changer, .orp-notMobile .orp-ctrl.orp-c-vol:hover .orp-c-vol-changer { display: block; height: 11px; position: absolute; left: 40px; top: 12px; width: 60px; background: none; margin: 0; opacity: 1; } .orp-c-vol-changer:before, .orp-c-vol-curr{ content: ''; position: absolute; width: 60px; height: 3px; background: #9d9d9d; left: 0; top: 4px; } .orp-c-vol-toggle { width: 36px; height: 36px; position: absolute; left: 0; top: 0; } .orp-c-vol-curr { background: #fff; width: 100%; max-width: 100%; } .orp-c-vol-curr:after { content: ''; position: absolute; width: 11px; height: 11px; background: #fff; right: -4px; top: -4px; border-radius: 6px; } .orp-isMobile .orp-lp-controls-wrapper .orp-ctrl.orp-c-vol { /*display: none !important;*/ } .orp-c-live { display: none; width: auto; padding: 0 5px 0 10px; line-height: 35px; opacity: 0.85 !important; cursor: default !important; margin: 0 6px !important; } .orp-c-live:before { content: ''; position: absolute; width: 6px; height: 6px; border-radius: 50%; background: #FF3333; left: 0; top: 50%; margin-top: -3px; } .orp-live .orp-c-live {display: block !important;} .orp-live .orp-c-progress-bg, .orp-live .orp-c-time {display: none !important;} /*mobile styles*/ .orp-isMobile .orp-c-vol-changer { display: none !important; } .orp-isMobile .orp-ctrl.orp-c-progress-bg:before, .orp-isMobile .orp-c-progress-cache, .orp-isMobile .orp-c-progress-curr, .orp-isMobile .orp-c-progress-hover, .orp-isMobile .orp-c-progress { height: 2px !important; top: 7px !important; } .orp-isMobile .orp-ctrl.orp-c-progress-bg:before { background-color: rgba(255,255,255,0.2); } .orp-isMobile .orp-c-progress-curr:after { width: 16px !important; height: 16px !important; border-radius: 8px !important; top: -7px !important; right: -7px !important; } .orp-isMobile .orp-isPlaying .orp-ctrls, .orp-isMobile .orp-full-screened .orp-ctrls { display: block; } .orp-isMobile .orp-lp-holder .orp-error-block span { font-size: 12px; } .orp-vast-blocker { display: block; position: absolute; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0; } .orp-vast-skip-button.orp-counter { background: rgba(0,0,0,0.5); color: #e6e6e6; display: block; position: absolute; bottom: 37px; right: 0; margin-left: -40px; font: normal 11px Arial, sans-serif; min-width: 155px; width: auto; padding: 7px 20px; line-height: 21px; text-align: center; border: 0; cursor: default; } .orp-vast-skip-button.orp-counter:before { display: none; } .orp-notMobile .orp-vast-skip-button.orp-counter:hover { background: rgba(0,0,0,0.5); } .orp-vast-skip-button { background: rgba(0,0,0,0.5); display: block; position: absolute; bottom: 37px; right: 0; margin-left: -40px; font: normal 18px Arial, sans-serif; padding: 9px 32px 8px 10px; width: auto; text-align: center; cursor: pointer; transition: background 0.2s; border: 1px solid rgba(255, 255, 255, 0.5); border-right: 0; } .orp-vast-skip-button:before { content: ''; position: absolute; width: 24px; height: 24px; right: 6px; top: 7px; } .orp-notMobile .orp-vast-skip-button:hover { border-color: rgba(255, 255, 255, 1); } .orp-notMobile .orp-vast-skip-button:hover { background: rgba(0,0,0,0.8); } .orp-vast-icon { display: block; position: absolute; z-index: 2; } .orp-vast-icon * { width: 100%; height: 100%; overflow: hidden; } .orp-nonlinear { bottom: 70px; width: 100%; position: absolute; text-align: center; left: 0; right: 0; margin: auto; z-index: 10; } .orp-nonlinear .orp-nonlinear-holder { display: inline-block; text-align: center; position: relative; } .orp-nonlinear .orp-nonlinear-holder \x3e * { max-height: 100%; } .orp-nonlinear .orp-close { /*round close*/ background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTEgMTEiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PHBhdGggZD0iTTUuNSAxQTQuNSA0LjUgMCAxIDEgMSA1LjUgNC41MSA0LjUxIDAgMCAxIDUuNSAxbTAtMUE1LjUgNS41IDAgMSAwIDExIDUuNSA1LjUgNS41IDAgMCAwIDUuNSAwem0yLjM1IDMuODVsLS43LS43TDUuNSA0Ljc5IDMuODUgMy4xNWwtLjcuN0w0Ljc5IDUuNSAzLjE1IDcuMTVsLjcuN0w1LjUgNi4yMWwxLjY1IDEuNjQuNy0uN0w2LjIxIDUuNXoiIGZpbGw9IiM0MTQ4NTEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIvPjwvZz48L3N2Zz4\x3d')no-repeat center center; width: 15px; height: 15px; border-radius: 8px; top: 0; right: 0; position: absolute; cursor: pointer; background-size: contain; } .orp-proVideo { top: 0; left: 0; right: 0; bottom: 0; width: auto; height: 100%; max-width: 100%; max-height: 100%; z-index: -1000; margin: auto; position: absolute; } .orp-proVideo.orp-jsShow { z-index: 100; } .orp-proVideo .orp-vast-skip-button { z-index: 100; } .orp-proVideo .orp-lp-holder { position: absolute; width: 100%; height: 100%; display: block; line-height: normal; } .orp-vpaid-container { z-index: 1; position: absolute; width: 100%; height: 100%; top: 0; } .orp-vpaid-container iframe { position: absolute; left: 0; top: 0; margin: 0; padding: 0; border: none; width: 100%; height: 100%; } /*outstream player block*/ .orp-controls-wrapper { position: absolute; width: 100%; height: 100%; } .orp-more, .orp-close, .orp-c-close, .orp-title, .orp-vol, .orp-progress-bg, .orp-replay { z-index: 2; opacity: 0.5; } .orp-went-sticky.orp-sticky-close .orp-ima-container .orp-close-bg, .orp-went-sticky.orp-sticky-close .orp-ima-container .orp-close, .orp-went-sticky.orp-sticky-close .orp-c-close { display: block !important; } .orp-notMobile .orp-more:hover, .orp-notMobile .orp-close:hover, .orp-notMobile .orp-c-close:hover, .orp-defaultTag .orp-close:hover, .orp-defaultTag .orp-c-close:hover, .orp-notMobile .orp-vol:hover, .orp-notMobile .orp-progress-bg:hover, .orp-notMobile .orp-replay:hover { opacity: 1; } .orp-socials { position: absolute; top: 56px; left: 20px; z-index: 2; text-align: left; max-height: calc(100% - 106px); display: flex; flex-direction: column; flex-wrap: wrap; justify-content: left; align-content: flex-start; } .orp-socials a { display: inline-block; width: 40px; height: 40px; border-radius: 4px; background: #000 no-repeat center center; margin: 0 4px 4px 0; opacity: 0.7; } .orp-notMobile .orp-socials a:hover { opacity: 1; } /*yt, fb, ig, tt, sc, tw, ok, vk*/ .orp-socials .orp-social-yt {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADXSURBVHgB7VXRDYIwEL0QB2CEjsAojuAGuoEj6AZdwU1wA9hANnje2QYvRuFOyh8veQkkj/factcj2uABgMC8MDvmA3aItmVG8fhl3jhNp8KabysvYa5DXjupcsaZWVM5iNdRBzRUHnsdEGbEA7MnH94nYjjTkHUHpAozwRygl4VUEBEG/BXgCRJdRcsQTCrPDvi1Zl5hgDlATLPuBEdDyje7nCFlONVobQ7xNKN4jv9gmBEH8nd6rwNuVB738QkrXnY6ZL3r+mMnEWl4eAdOhzSsAm3w4AkT1lmoeoMC7gAAAABJRU5ErkJggg\x3d\x3d')} .orp-socials .orp-social-fb {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABuSURBVHgB7ZLBDYAgEAQXYyGWYofagS3RAXZgCes9fBAieBqMCd4km0DI3vA44FeQHCSTZGMEanAMDzwBNZA5CzOUej30jMl9lvirkoOS9KdO0PQ6vEzjgtKmRE/hsUCJ/1Rga2oCE9wTrJlz4+wDo3HdgzsmBQAAAABJRU5ErkJggg\x3d\x3d')} .orp-socials .orp-social-ig {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB7ZXvDYIwEMVPJ8ANdAM2sBvABriBcQJYwUl0E9wANigbnNdwxgv2D239yC95kPTa99IeDQAbKSCiIj1IA0mjn57nNmvNO0ynC5lfMB8lPfeLjAryufoCjhDHiSUpfQEl2BlJinTYEfSuecxGAS4cZzqQCsvcgms/xAZUXDMfgGbThsdUdoCoDWJYi114A/YQQByPPKbJPKgdU2h9MAC+jb/B3Fhj2nF4DTGgnQH/2GTtCamFsXKZhwKciyLopeeyBy/IZ/QF3CGfp7dKW2wxnRbWgPOtNT+RPmD4udlm7hk2UngDXQCsUTgrG3EAAAAASUVORK5CYII\x3d')} .orp-socials .orp-social-tt {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADaSURBVHgB7ZTtEYIwDIZTzgFwAh3BERjBDWQEN8ANHIFRcAPdADeADWJ6V8+2pp+Ufzx37/GR8iY0BICN0iDiiD8mKA3+c/Ctr2A5VygJ8vSkE7deQCLSzROehRD7NRMAJTA8q4BZQ7qTBtIFMtg5jGs69KSzdvvh8GjUOtmDGmJQFdt0KmYQ8qoY81ZVtQ5M9YM+TKlvwCWwOfriIb+YSZ5hAVyCt3XdfU+o4JsVe0Eq8mthtmlSskmfDXqoRvOX7GKEXGRjA0lGu/m5iVrSUzMe1BbGTexGDB8m/225MJv01wAAAABJRU5ErkJggg\x3d\x3d')} .orp-socials .orp-social-sc {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgB7ZRvDcIwEMWvKJiEOgAUIAUk4AAJm4NJQEJxMAkMBzh4vIaFkWbdtd0+7pe8NE0ud+39E9lYAwBXymGko86yBnTUIE4rS6CDC3TKfxKkJYab87FTYhxEx8qCAIvRArxl7QDMqaXu1I3XSnQq2tZDvXR7b+TbD/m4pADBT1KxMT9zNUh/jdJJkyBtBn7pyXXeIJ86xbFfDR3KeSJYHWEN9lKSzxFfN336Udamk5vVRAJYHieqp47U1ND5KW+ox3B/GWN6KQHfmWj/Xusw0/sbWXwAXVsHeEiFmzEAAAAASUVORK5CYII\x3d')} .orp-socials .orp-social-tw {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADbSURBVHgB7ZNfEcIwDMZTFNQBlYCDVQIOwAFzMFAwCZOABEDBcFAJ4CBk1zzkof+POx7Y7y63W5d+X9I1ACv/ByLqgpyewqFnpjjwuqXYJcV5o0nknDHMi810ysByctREVB5i+TZApgPJJI1EATHi4kJkDGy88XqfMdjmxA3FFf15VlNSvW4VJ+aQ5ka+KKXe9LhAG8/iTKrmiOnbEqKDXAcCS5EdOMGdun8UZ6P/2a6iegO1sMlQYHSCFtAP1fRVcdqwRz9ULiO85HTQAh/NyCJyJhx31Ca88jM+60R3HppKyJQAAAAASUVORK5CYII\x3d')} .orp-socials .orp-social-ok {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgB5ZThEYIwDIWDE7CB3cBuoCO4gSPIBrCBbqAbOAJswAjABI4Q0+P15GLhhPJLv7teveZ4L01Sif4CZraySllP7qllnWgNIO6FNReKRUQaiDmT3GWO23gOtBT5+DgQMirmTR5TGhuaZoe9TZKkVbEKu6UIgw57KpmmKma8OS3FiQ5K5CbH4CwbnJ8pBjR2jCZws9VMSt34EAl9CTJ1TTeyKml6RzGIYIFMb6FM0YsC72N+qdx8B+pdwrDmz9e9nWtg+f2Kp3BGyydJPt4HbuNvlPNKU2QDBvF/dBA3PF6qjGJBQz3ud6bqb2PEr6rmKc7z0PlccaNEjIrfB/H5U8T9Q2pQBjMSr8fiv8MLgtM2oWHEGrQAAAAASUVORK5CYII\x3d')} .orp-socials .orp-social-vk {background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgB7ZNhEYMwDIVTB5WAhE3BkDAHzAE4QAISamFOtikoDsBBltzKXQYpdMf41+8u5CCvfW1oATKZvRh+IGJJqQjfRmPMfRJQzVJqKGoKGz73FGfSjUJ3olTxeIoXxZPq/VQc8JtODuR3XHIRmoLCz+oehKBVJihFvdwwcEq9kgZW2YUP7Vk1oHxTag7mRHbRJRh4ZWGFZmAVMdNEzOtQkwzq5Bu9/oUWtoisNhWP4nAcZcJUe0241/wP3IrmmmLS4PL4Mq3Q8EX02iIgBfzcUkfxiLUA9ZvcQSbzF97UqdgNRfvkCgAAAABJRU5ErkJggg\x3d\x3d')} .orp-controls-wrapper .orp-isOver { cursor: default; } .orp-controls-wrapper .orp-isOver:before { content: ''; position: absolute; left: 0; right: 0; top: 0; bottom: 0; background-color: rgba(0, 255, 255, 0); z-index: 2; } .orp-isInBanner .orp-controls-wrapper .orp-isOver { background-color: rgba(255, 255, 255, 0.85); } .orp-controls-wrapper * { cursor: pointer; color: #fff; font-family: Arial, sans-serif; box-sizing: border-box; transition: opacity 0.2s; } @keyframes reduceWidth { 100% { width: 34px; padding: 9px 0 9px 36px; color: #fff; } } @-ms-keyframes reduceWidth { 100% { width: 34px; padding: 9px 0 9px 36px; color: #fff; } } .orp-tap-unmute { background: #fff; position: absolute; width: 147px; padding: 9px 12px 9px 36px; left: 20px; top: 54px; font-size: 12px; z-index: 5; text-transform: uppercase; border: 1px solid #eee; color: #000; border-radius: 1px; animation: reduceWidth 0.2s 2.5s linear forwards; -ms-animation: reduceWidth 0.2s 2.5s linear forwards; white-space: nowrap; overflow: hidden; } .orp-tap-unmute:before { content: ''; display: block; position: absolute; top: 50%; width: 23px; height: 18px; left: 6px; margin: -9px 0 0 0; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNSAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGQ9Ik03LDZjMCwwLTIsMC0zLDBTMiw5LDIsOXYyYzAsMCwwLjksMywyLDNzNCwwLDQsMGwzLDNoMVYzaC0xTDcsNnogTTIyLjksNi40YzAuMywwLjMsMC4zLDAuOCwwLDEuMmwtMi42LDIuNmwyLjYsMi42DQoJYzAuMywwLjMsMC4zLDAuOCwwLDEuMmMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwLjJjLTAuMiwwLTAuNC0wLjEtMC42LTAuMmwtMi42LTIuNmwtMi42LDIuNmMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwLjINCgljLTAuMiwwLTAuNC0wLjEtMC42LTAuMmMtMC4zLTAuMy0wLjMtMC44LDAtMS4ybDIuNi0yLjZsLTIuNi0yLjZjLTAuMy0wLjMtMC4zLTAuOCwwLTEuMmMwLjItMC4yLDAuNC0wLjIsMC42LTAuMg0KCWMwLjIsMCwwLjQsMC4xLDAuNiwwLjJMMTkuMSw5bDIuNi0yLjZjMC4yLTAuMiwwLjQtMC4yLDAuNi0wLjJDMjIuNSw2LjEsMjIuNyw2LjIsMjIuOSw2LjR6Ii8+DQo8L3N2Zz4NCg\x3d\x3d') no-repeat center center; background-size: contain; } .orp-notMobile .orp-tap-unmute:hover { border-color: #bfbfbf; } .orp-lp-holder .orp-more { position: absolute; padding: 6px 14px; border: 2px solid #fff; border-radius: 4px; color: #fff!important; left: 20px; top: 20px; font-size: 12px; } .orp-close, .orp-c-close { position: absolute; width: 38px; height: 38px; right: 19px; top: 20px; opacity: 0.5; cursor: pointer; z-index: 3; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTkgMTkiPjx0aXRsZT5BcnRib2FyZCAxPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjE3IDQgMTUgMiA5LjUgNy41IDQgMiAyIDQgNy41IDkuNSAyIDE1IDQgMTcgOS41IDExLjUgMTUgMTcgMTcgMTUgMTEuNSA5LjUgMTcgNCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNSwybDIsMkwxMS41LDkuNSwxNywxNWwtMiwyTDkuNSwxMS41LDQsMTcsMiwxNSw3LjUsOS41LDIsNCw0LDIsOS41LDcuNSwxNSwybTAtMWExLDEsMCwwLDAtLjcxLjI5TDkuNSw2LjA5LDQuNzEsMS4yOWExLDEsMCwwLDAtMS40MiwwbC0yLDJhMSwxLDAsMCwwLDAsMS40Mkw2LjA5LDkuNWwtNC44LDQuNzlhMSwxLDAsMCwwLDAsMS40MmwyLDJhMSwxLDAsMCwwLDEuNDIsMGw0Ljc5LTQuOCw0Ljc5LDQuOGExLDEsMCwwLDAsMS40MiwwbDItMmExLDEsMCwwLDAsMC0xLjQyTDEyLjkxLDkuNWw0LjgtNC43OWExLDEsMCwwLDAsMC0xLjQybC0yLTJBMSwxLDAsMCwwLDE1LDFaIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4\x3d')no-repeat 0 0; background-size: contain; } .orp-close-bg { position: absolute; width: 30px; height: 30px; right: 15px; top: 15px; z-index: 3; padding: 5px 0 0 5px; pointer-events: none; } .orp-ima-container .orp-close-bg { pointer-events: auto; } /*IE10-11 hack*/ @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { .orp-isPlaying .orp-close, .orp-isPlaying .orp-c-close, .orp-isPlaying .orp-vol { transition: right 0.1s 0.5s; right: 18px; } } /*Edge hack*/ @supports (-ms-ime-align:auto) { .orp-isPlaying .orp-close, .orp-isPlaying .orp-c-close, .orp-isPlaying .orp-vol { transition: right 0.1s 0.5s; right: 18px; } } .orp-lp-holder .orp-title { position: absolute; left: 20px; bottom: 66px; font-size: 12px; opacity: 0.5; text-decoration: none; cursor: default !important; color: #fff!important; } .orp-isPlaying.orp-isHiddenControls .orp-title, .orp-controls-wrapper .orp-title { bottom: 16px; } .orp-isPlaying.orp-isHiddenControls .orp-sliderInUse .orp-title{ bottom: 66px; } .orp-notMobile a.orp-title:hover { opacity: 1; cursor: pointer !important; } .orp-title img { max-height: 90px; max-width: 200px; } div.orp-title img { cursor: default; } .orp-isInit .orp-title { display: none !important; } .orp-vol { position: absolute; width: 25px; height: 20px; right: 19px; bottom: 14px; } .orp-progress-bg, .orp-progress { position: absolute; height: 3px; width: 100%; left: 0; bottom: 0; background-color: rgba(255, 255, 255, 0.2); opacity: 1 !important; cursor: default; } .orp-progress { background-color: #2e95ff; width: 0; z-index: 2; } .orp-replay, .orp-isOver .orp-progress-bg, .orp-isOver .orp-vol { display: none; } .orp-isOver .orp-replay, .orp-isOver .orp-more { position: absolute; width: 140px; height: 40px; padding: 0 25px 0 42px; left: 50%; top: 50%; margin-left: -70px; margin-top: -46px; border: 0; border-radius: 4px; font-size: 12px; line-height: 40px; color: #000; font-weight: bold; background-color: rgba(0,0,0,0.06); z-index: 3; opacity: 1 !important; display: block; } .orp-notMobile .orp-isOver .orp-replay:hover, .orp-notMobile .orp-isOver .orp-more:hover { background-color: rgba(0,0,0,0.15); } .orp-isOver .orp-replay:before, .orp-isOver .orp-more:before { content: ''; width: 23px; height: 20px; position: absolute; left: 10px; top: 10px; background-position: 0 -13px; background-size: 25px; } .orp-isOver .orp-more { margin-top: 6px; } .orp-isOver .orp-more:before { height: 12px; top: 14px; background-position: 3px 0; } .orp-timer { font-size: 11px; color: #fff; cursor: default; position: absolute; background: rgba(0,0,0,0.4); bottom: 10px; left: 50%; z-index: 10; width: 36px; border-radius: 2px; padding: 2px 0; margin-left: -18px; } .orp-isOver .orp-close { background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOSAxOS4wNCI+PHBhdGggZD0iTTE3IDRsLTItMi01LjUgNS41TDQgMiAyIDRsNS41IDUuNUwyIDE1bDIgMiA1LjUtNS41TDE1IDE3bDItMi01LjUtNS41TDE3IDR6IiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg\x3d\x3d') no-repeat 0 0; } .orp-proVideo .orp-isOver .orp-ctrl.orp-c-play-big, .orp-proVideo .orp-isOver .orp-vast-blocker { display: none !important; } .orp-isMobile .orp-c-vol.orp-vol-off { display: block !important; width: 36px; z-index: 3; } /*.orp-isMobile .orp-lp-controls-wrapper .orp-vol-off .orp-c-vol-toggle:before {*/ /* content: 'Enable volume';*/ /* position: absolute;*/ /* display: block;*/ /* color: #000;*/ /* background: #fff;*/ /* font-size: 10px;*/ /* padding: 5px 0;*/ /* width: 90px;*/ /* top: -20px;*/ /* left: 50%;*/ /* margin-left: -45px;*/ /* line-height: normal;*/ /* border-radius: 2px;*/ /*}*/ /*.orp-isMobile .orp-lp-controls-wrapper .orp-vol-off .orp-c-vol-toggle:after {*/ /* content: '';*/ /* position: absolute;*/ /* display: block;*/ /* border: 6px solid transparent;*/ /* border-top-color: #fff;*/ /* left: 50%;*/ /* margin-left: -6px;*/ /*}*/ .orp-isMobile .orp-vol-off .orp-c-vol-changer { display: none !important; } /*XS screen styles*/ @media (max-width: 768px) { .orp-isOver .orp-replay { margin-top: -56px; } .orp-isOver .orp-more { margin-top: -4px; } } .orp-ima-container div:first-child { z-index: 2; } .orp-ima-container .orp-close-bg { left: 15px; right: auto; } .orp-ima-container .orp-close { left: 20px; right: auto; } .orp-ima-container .orp-lp-holder div:first-child { max-width: 100%; } .orp-ya-container .orp-close { top: 40px; left: 10px; } .orp-ya-container .orp-c-play-big { display: none!important; } /*RSS styles*/ .orp-isRss .orp-ctrls { display: none!important; } .orp-isRss .orp-c-close, .orp-isOver.orp-isRss .orp-c-close { top: 6px; right: 7px; z-index: 6; } .orp-error .orp-rss-container { display: none; } .orp-rss-container { width: 100%; height: 100%; } .orp-rss-container .orp-item { position: absolute; display: none; width: 100%; height: 100%; overflow: hidden; } .orp-rss-container i { display: block; width: 100%; height: 100%; background: no-repeat center center; background-size: contain; } .orp-rss-container .orp-play { display: block; } .orp-rss-container .orp-play i { transform: scale(1.15, 1.15); } .orp-rss-container .orp-reset i { transition: none 0s ease 0s; transform: none; } .orp-rss-container .orp-rss-control { position: absolute; display: flex; justify-content: space-between; width: 100%; left: 0; bottom: 0; } .orp-rss-container .orp-rss-control .orp-progressHover { height: 30px; cursor: pointer; } .orp-rss-container .orp-rss-control .orp-progress { background: rgba(255, 255, 255, 0.5); width: 100%; height: 3px; position: relative; margin-top: 27px; } .orp-rss-container .orp-rss-control .orp-progress div { position: absolute; bottom: 0; left: 0; width: 0; height: 3px; } .orp-rss-container .orp-rss-control .orp-progressHover:hover div { margin-top: 25px; height: 5px; } .orp-rss-container .orp-rss-control .orp-play div { width: 100%; } .orp-rss-container .orp-rss-control .orp-viewed div { width: 100%; transition: none 0s ease 0s!important; transform: none!important; } .orp-rss-container .orp-rss-control .orp-reset div { width: 0; transition: none 0s ease 0s!important; transform: none!important; } .orp-rss-container .orp-title { position: absolute; left: 20px; right: 20px; bottom: 20px; background: rgba(0, 0, 0, 0.6); border-radius: 4px; padding: 16px 112px 16px 60px; } .orp-rss-container .orp-text { font-style: normal; font-size: 13px; line-height: 16px; color: rgba(255,255,255,0.85); max-height: 32px; overflow: hidden; } .orp-rss-container .orp-counter { position: absolute; width: 36px; height: 24px; font-size: 14px; line-height: 24px; left: 12px; top: 50%; margin-top: -12px; color: rgba(255,255,255,0.85); background: rgba(255, 255, 255, 0.15); border-radius: 4px; text-align: center; } .orp-rss-container .orp-button { position: absolute; width: 90px; height: 28px; right: 12px; top: 50%; margin-top: -14px; background: rgba(0, 0, 0, 0.1); border: 2px solid rgba(255, 255, 255, 0.5); box-sizing: border-box; border-radius: 4px; font-size: 12px; line-height: 24px; text-align: center; color: rgba(255, 255, 255, 0.6); cursor: pointer; } .orp-notMobile .orp-rss-container .orp-button:hover { border-color: #fff; color: #fff; } @media (max-width: 400px) { .orp-rss-container .orp-title { padding: 12px 52px 12px 12px; } .orp-rss-container .orp-title .orp-counter, .orp-rss-container .orp-title .orp-button { display: none; } .orp-rss-container .orp-title:after { content: ''; position: absolute; width: 24px; height: 24px; top: 50%; margin-top: -12px; right: 12px; background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDE5SDVWNWg2VjNINUMzLjksMywzLDMuOSwzLDV2MTRjMCwxLjEsMC45LDIsMiwyaDE0YzEuMSwwLDItMC45LDItMnYtNmgtMlYxOXogTTE0LjUsMwoJQzE0LjIsMywxNCwzLjIsMTQsMy41djFDMTQsNC44LDE0LjIsNSwxNC41LDVoMy4xbC03LjUsNy41Yy0wLjIsMC4yLTAuMiwwLjUsMCwwLjdsMC43LDAuN2MwLjIsMC4yLDAuNSwwLjIsMC43LDBMMTksNi40djMuMQoJYzAsMC4zLDAuMiwwLjUsMC41LDAuNWgxYzAuMywwLDAuNS0wLjIsMC41LTAuNVYzSDE0LjV6Ii8+Cjwvc3ZnPgo\x3d') no-repeat center center; } } /*Ad controls*/ .orp-proVideo .orp-ctrls { background: none; pointer-events: none; } .orp-proVideo .orp-isControlsDisplay:not(.orp-isHiddenControls) .orp-title { bottom: 38px; } .orp-proVideo .orp-ctrls .orp-ctrl { pointer-events: all; } .orp-proVideo .orp-ctrls :before, .orp-proVideo .orp-c-vol-curr:after { filter: drop-shadow(0 0 3px rgba(0,0,0,0.5)); } /*fix buttons overlap for ipad fuulscreen*/ .orp-full-screened .orp-ipad-os .orp-tap-unmute, .orp-full-screened .orp-ipad-os .videoAdUiLearnMore { transform: translateY(30px); } .orp-full-screened .orp-ipad-os .orp-close { display: none; } /*playlist*/ .orp-c-playlist-holder { display: none; position: absolute; top: 0; right: 0; bottom: 0; z-index: 4; background: rgba(0, 0, 0, 0.85); width: 320px; text-align: left; max-width: 100%; } .orp-show-playlist .orp-c-playlist-holder { display: block; } .orp-c-playlist-holder * { box-sizing: border-box; } .orp-c-playlist-head { position: absolute; top: 0; left: 0; right: 0; height: 54px; border-bottom: 1px solid rgba(255, 255, 255, 0.15); } .orp-c-playlist-close { width: 24px; height: 24px; position: absolute; right: 16px; top: 16px; cursor: pointer; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNUwxMiAxMC41OUw2LjQxIDVMNSA2LjQxTDEwLjU5IDEyTDUgMTcuNTlMNi40MSAxOUwxMiAxMy40MUwxNy41OSAxOUwxOSAxNy41OUwxMy40MSAxMkwxOSA2LjQxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg\x3d\x3d') no-repeat center center; } .orp-c-playlist-count { position: absolute; height: 24px; top: 16px; left: 16px; background: rgba(255, 255, 255, 0.15); border-radius: 4px; padding: 4px; color: #fff; font-weight: bold; font-size: 14px; line-height: 16px; text-align: center; max-width: 42px; min-width: 38px; } .orp-c-playlist-name { position: absolute; left: 62px; right: 40px; top: 16px; font-weight: bold; font-size: 14px; line-height: 24px; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .orp-c-playlist-body { position: absolute; top: 57px; left: 0; right: 2px; bottom: 2px; overflow: auto; scrollbar-color: #aaa #eee; } .orp-c-playlist-body::-webkit-scrollbar { width: 8px; } .orp-c-playlist-body::-webkit-scrollbar-track, .orp-c-playlist-body::-webkit-scrollbar-thumb { background-color: transparent; border-radius: 4px; } .orp-c-playlist-body:hover::-webkit-scrollbar-track { background-color: #eee; opacity: 0.9; } .orp-c-playlist-body:hover::-webkit-scrollbar-thumb { background-color: #aaaaaa; } .orp-c-playlist-body::-webkit-scrollbar-thumb:hover { background-color: #8f8f8f; } .orp-c-playlist-item { padding: 8px 16px 8px 112px; position: relative; color: #fff; min-height: 96px; cursor: pointer; } .orp-c-playlist-it-poster { position: absolute; width: 80px; height: 80px; left: 16px; top: 8px; background: no-repeat center center; background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgNEMxNS41NTIzIDQgMTYgNC40NDc3MiAxNiA1QzE2IDUuNTUyMjggMTUuNTUyMyA2IDE1IDZIN0M2LjQ0NzcyIDYgNiA2LjQ0NzcyIDYgN1YxNUM2IDE1LjU1MjMgNS41NTIyOSAxNiA1IDE2QzQuNDQ3NzEgMTYgNCAxNS41NTIzIDQgMTVWN0M0IDUuMzQzMTUgNS4zNDMxNSA0IDcgNEgxNVpNNjQgNUM2NCA0LjQ0NzcyIDY0LjQ0NzcgNCA2NSA0SDczQzc0LjY1NjkgNCA3NiA1LjM0MzE1IDc2IDdWMTVDNzYgMTUuNTUyMyA3NS41NTIzIDE2IDc1IDE2Qzc0LjQ0NzcgMTYgNzQgMTUuNTUyMyA3NCAxNVY3Qzc0IDYuNDQ3NzIgNzMuNTUyMyA2IDczIDZINjVDNjQuNDQ3NyA2IDY0IDUuNTUyMjggNjQgNVpNNjQgNzVDNjQgNzUuNTUyMyA2NC40NDc3IDc2IDY1IDc2SDczQzc0LjY1NjkgNzYgNzYgNzQuNjU2OSA3NiA3M1Y2NUM3NiA2NC40NDc3IDc1LjU1MjMgNjQgNzUgNjRDNzQuNDQ3NyA2NCA3NCA2NC40NDc3IDc0IDY1VjczQzc0IDczLjU1MjMgNzMuNTUyMyA3NCA3MyA3NEg2NUM2NC40NDc3IDc0IDY0IDc0LjQ0NzcgNjQgNzVaTTE2IDc1QzE2IDc1LjU1MjMgMTUuNTUyMyA3NiAxNSA3Nkg3QzUuMzQzMTUgNzYgNCA3NC42NTY5IDQgNzNWNjVDNCA2NC40NDc3IDQuNDQ3NzEgNjQgNSA2NEM1LjU1MjI5IDY0IDYgNjQuNDQ3NyA2IDY1VjczQzYgNzMuNTUyMyA2LjQ0NzcyIDc0IDcgNzRIMTVDMTUuNTUyMyA3NCAxNiA3NC40NDc3IDE2IDc1Wk0xNiAxOEMxNiAxNS43OTA5IDE3Ljc5MDkgMTQgMjAgMTRINjBDNjIuMjA5MSAxNCA2NCAxNS43OTA5IDY0IDE4VjU4QzY0IDYwLjIwOTEgNjIuMjA5MSA2MiA2MCA2MkgyMEMxNy43OTA5IDYyIDE2IDYwLjIwOTEgMTYgNThWMThaTTI5Ljk4NzUgMzJDMzIuMTk3NCAzMiAzMy45ODkgMzAuMjA5MSAzMy45ODkgMjhDMzMuOTg5IDI1Ljc5MDkgMzIuMTk3NCAyNCAyOS45ODc1IDI0QzI3Ljc3NzUgMjQgMjUuOTg2IDI1Ljc5MDkgMjUuOTg2IDI4QzI1Ljk4NiAzMC4yMDkxIDI3Ljc3NzUgMzIgMjkuOTg3NSAzMlpNNjIgNThWNTEuNTgxM0w0OC44OTE3IDM0LjUxNjRDNDguNjkxNSAzNC4yNTU4IDQ4LjI5ODUgMzQuMjU1OCA0OC4wOTgzIDM0LjUxNjRMMzUuMjg2NSA1MS4xOTU0TDI5Ljg3NzYgNDQuNDgzM0MyOS42NzczIDQ0LjIzNDkgMjkuMjk4NyA0NC4yMzQ5IDI5LjA5ODUgNDQuNDgzM0wxOCA1OC4yNTU3QzE4LjEyNTYgNTkuMjM5NSAxOC45NjYyIDYwIDE5Ljk4NDUgNjBINTkuOTk5M0M2MS4xMDQyIDYwIDYyIDU5LjEwNDYgNjIgNThaIiBmaWxsPSIjNEQ0RDREIi8+Cjwvc3ZnPgo\x3d'); background-size: cover; } .orp-c-playlist-it-time { position: absolute; display: none; height: 20px; right: 4px; bottom: 4px; font-size: 12px; line-height: 16px; background: rgba(0, 9, 25, 0.8); border-radius: 4px; padding: 2px; color: #FFFFFF; opacity: 0.85; } .orp-c-playlist-it-name { font-weight: bold; font-size: 14px; line-height: 16px; } .orp-c-playlist-it-description { font-size: 12px; line-height: 16px; color: #FFFFFF; opacity: 0.7; margin-top: 5px; height: 34px; text-overflow: ellipsis; max-height: 34px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; } .orp-c-playlist-item:hover { background: rgba(255, 255, 255, 0.1); /*background: #313131;*/ } .orp-c-playlist-item.orp-is-playing .orp-c-playlist-it-poster { box-shadow: inset -2px -2px #008BF6, inset 2px 2px #008BF6; } .orp-c-playlist-item.orp-is-playing .orp-c-playlist-it-name { color: #008BF6; } .orp-size-small .orp-c-playlist-item { padding-left: 92px; min-height: 76px; } .orp-size-small .orp-c-playlist-it-poster { width: 60px; height: 60px; } .orp-size-small .orp-c-playlist-it-name { font-size: 12px; } @media (max-width: 400px) { .orp-c-playlist-item { padding-left: 92px; min-height: 76px; } .orp-c-playlist-it-poster { width: 60px; height: 60px; } .orp-c-playlist-it-name { font-size: 12px; } } /*settings*/ .orp-settings-holder { display: none; position: absolute; top: 0; right: 0; bottom: 0; z-index: 4; background: rgba(0, 0, 0, 0.85); width: 200px; text-align: left; max-width: 100%; } .orp-show-settings .orp-settings-holder { display: block; } .orp-settings-holder * { box-sizing: border-box; text-align: left; } .orp-settings-head { position: absolute; top: 0; left: 0; right: 0; height: 54px; border-bottom: 1px solid rgba(255, 255, 255, 0.15); } .orp-settings-close { width: 24px; height: 24px; position: absolute; right: 16px; top: 16px; cursor: pointer; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNUwxMiAxMC41OUw2LjQxIDVMNSA2LjQxTDEwLjU5IDEyTDUgMTcuNTlMNi40MSAxOUwxMiAxMy40MUwxNy41OSAxOUwxOSAxNy41OUwxMy40MSAxMkwxOSA2LjQxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg\x3d\x3d') no-repeat center center; } .orp-settings-name { position: absolute; left: 16px; right: 40px; top: 16px; font-size: 14px; line-height: 24px; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .orp-settings-body { position: absolute; top: 57px; left: 0; right: 2px; bottom: 2px; overflow: auto; scrollbar-color: #aaa #eee; } .orp-settings-body::-webkit-scrollbar { width: 8px; } .orp-settings-body::-webkit-scrollbar-track, .orp-settings-body::-webkit-scrollbar-thumb { background-color: transparent; border-radius: 4px; } .orp-settings-body:hover::-webkit-scrollbar-track { background-color: #eee; opacity: 0.9; } .orp-settings-body:hover::-webkit-scrollbar-thumb { background-color: #aaaaaa; } .orp-settings-body::-webkit-scrollbar-thumb:hover { background-color: #8f8f8f; } .orp-settings-item { padding: 8px 16px; position: relative; color: rgba(255,255,255,0.7); cursor: pointer; font-size: 12px; line-height: 16px; } .orp-settings-item:hover { background: rgba(255, 255, 255, 0.1); /*background: #313131;*/ } .orp-settings-item.orp-is-active:before { content: ''; position: absolute; width: 24px; height: 24px; right: 16px; top: 4px; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk5OSAxNS4yTDUuNzk5OSAxMUw0LjM5OTkgMTIuNEw5Ljk5OTkgMThMMTkuNSA4LjVMMTguMSA3LjFMOS45OTk5IDE1LjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTk5OSAxNS4yTDUuNzk5OSAxMUw0LjM5OTkgMTIuNEw5Ljk5OTkgMThMMTkuNSA4LjVMMTguMSA3LjFMOS45OTk5IDE1LjJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K') no-repeat 0 0; } .orp-settings-item.orp-is-hd:after { content: 'HD'; color: red; font-weight: 600; font-size: 10px; line-height: 10px; vertical-align: top; padding: 0 2px; } .orp-c-settings.orp-is-hd-selected:after { content: ''; position: absolute; width: 18px; height: 12px; right: -2px; top: 6px; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMkMwIDAuODk1NDMxIDAuODk1NDMxIDAgMiAwSDE1Ljk5OTVDMTcuMTA0IDAgMTcuOTk5NSAwLjg5NTQzMSAxNy45OTk1IDJWMTBDMTcuOTk5NSAxMS4xMDQ2IDE3LjEwNCAxMiAxNS45OTk1IDEySDJDMC44OTU0MzEgMTIgMCAxMS4xMDQ2IDAgMTBWMloiIGZpbGw9IiNGRjMzMzMiLz4KPHBhdGggZD0iTTcuOTg0MjggNFYxMEg2LjU5NDUyVjcuNTQwODVINC4zODk3NlYxMEgzVjRINC4zODk3NlY2LjMyMzk0SDYuNTk0NTJWNEg3Ljk4NDI4WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC43Ii8+CjxwYXRoIGQ9Ik0xMC4wMjQ0IDEwVjRIMTEuOTk5NEMxMi40OTY1IDQgMTIuOTMxNSA0LjA3ODg3IDEzLjMwNDQgNC4yMzY2MkMxMy42NzczIDQuMzk0MzcgMTMuOTg4IDQuNjA4NDUgMTQuMjM2NiA0Ljg3ODg3QzE0LjQ5MDggNS4xNDkzIDE0LjY4MDEgNS40Njc2MSAxNC44MDQzIDUuODMzOEMxNC45MzQzIDYuMTk0MzcgMTQuOTk5MiA2LjU4MDI4IDE0Ljk5OTIgNi45OTE1NUMxNC45OTkyIDcuNDQ3ODkgMTQuOTI4NiA3Ljg2MTk3IDE0Ljc4NzQgOC4yMzM4QzE0LjY0NjIgOC42IDE0LjQ0MjggOC45MTU0OSAxNC4xNzczIDkuMTgwMjhDMTMuOTE3NCA5LjQzOTQ0IDEzLjYwMSA5LjY0MjI1IDEzLjIyODEgOS43ODg3M0MxMi44NjA5IDkuOTI5NTggMTIuNDUxMyAxMCAxMS45OTk0IDEwSDEwLjAyNDRaTTEzLjU4NDEgNi45OTE1NUMxMy41ODQxIDYuNzI2NzYgMTMuNTQ3MyA2LjQ4NzMyIDEzLjQ3MzkgNi4yNzMyNEMxMy40MDYxIDYuMDUzNTIgMTMuMzA0NCA1Ljg2NDc5IDEzLjE2ODggNS43MDcwNEMxMy4wMzMyIDUuNTQ5MyAxMi44NjY2IDUuNDI4MTcgMTIuNjY4OSA1LjM0MzY2QzEyLjQ3MTEgNS4yNTkxNSAxMi4yNDggNS4yMTY5IDExLjk5OTQgNS4yMTY5SDExLjQxNDJWOC43ODMxSDExLjk5OTRDMTIuMjUzNiA4Ljc4MzEgMTIuNDc5NiA4LjczODAzIDEyLjY3NzMgOC42NDc4OUMxMi44NzUxIDguNTU3NzUgMTMuMDM4OSA4LjQzMzggMTMuMTY4OCA4LjI3NjA2QzEzLjMwNDQgOC4xMTI2OCAxMy40MDYxIDcuOTIzOTQgMTMuNDczOSA3LjcwOTg2QzEzLjU0NzMgNy40OTAxNCAxMy41ODQxIDcuMjUwNyAxMy41ODQxIDYuOTkxNTVaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPHBhdGggZD0iTTcuOTg0MjggM1Y5SDYuNTk0NTJWNi41NDA4NUg0LjM4OTc2VjlIM1YzSDQuMzg5NzZWNS4zMjM5NEg2LjU5NDUyVjNINy45ODQyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMC4wMjQ0IDlWM0gxMS45OTk0QzEyLjQ5NjUgMyAxMi45MzE1IDMuMDc4ODcgMTMuMzA0NCAzLjIzNjYyQzEzLjY3NzMgMy4zOTQzNyAxMy45ODggMy42MDg0NSAxNC4yMzY2IDMuODc4ODdDMTQuNDkwOCA0LjE0OTMgMTQuNjgwMSA0LjQ2NzYxIDE0LjgwNDMgNC44MzM4QzE0LjkzNDMgNS4xOTQzNyAxNC45OTkyIDUuNTgwMjggMTQuOTk5MiA1Ljk5MTU1QzE0Ljk5OTIgNi40NDc4OSAxNC45Mjg2IDYuODYxOTcgMTQuNzg3NCA3LjIzMzhDMTQuNjQ2MiA3LjYgMTQuNDQyOCA3LjkxNTQ5IDE0LjE3NzMgOC4xODAyOEMxMy45MTc0IDguNDM5NDQgMTMuNjAxIDguNjQyMjUgMTMuMjI4MSA4Ljc4ODczQzEyLjg2MDkgOC45Mjk1OCAxMi40NTEzIDkgMTEuOTk5NCA5SDEwLjAyNDRaTTEzLjU4NDEgNS45OTE1NUMxMy41ODQxIDUuNzI2NzYgMTMuNTQ3MyA1LjQ4NzMyIDEzLjQ3MzkgNS4yNzMyNEMxMy40MDYxIDUuMDUzNTIgMTMuMzA0NCA0Ljg2NDc5IDEzLjE2ODggNC43MDcwNEMxMy4wMzMyIDQuNTQ5MyAxMi44NjY2IDQuNDI4MTcgMTIuNjY4OSA0LjM0MzY2QzEyLjQ3MTEgNC4yNTkxNSAxMi4yNDggNC4yMTY5IDExLjk5OTQgNC4yMTY5SDExLjQxNDJWNy43ODMxSDExLjk5OTRDMTIuMjUzNiA3Ljc4MzEgMTIuNDc5NiA3LjczODAzIDEyLjY3NzMgNy42NDc4OUMxMi44NzUxIDcuNTU3NzUgMTMuMDM4OSA3LjQzMzggMTMuMTY4OCA3LjI3NjA2QzEzLjMwNDQgNy4xMTI2OCAxMy40MDYxIDYuOTIzOTQgMTMuNDczOSA2LjcwOTg2QzEzLjU0NzMgNi40OTAxNCAxMy41ODQxIDYuMjUwNyAxMy41ODQxIDUuOTkxNTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K') no-repeat 0 0; } .orp-tiny-size .orp-ctrl { margin-left: 0; margin-right: 0; } .orp-yt-container .orp-yt-player { width: 100%; height: 100%; } .orp-yt-container .orp-c-play-big { display: none!important; } .orp-yt-container .orp-vol { left: 5px; bottom: 3px; } .orp-proVideo .orp-yt-container .orp-title, .orp-yt-container:not(.orp-isPlaying) .orp-title { display:none; left: 6px; bottom: 30px; } .orp-yt-container .orp-title.orp-title-text { display:block; left: 37px; bottom: 6px; } .orp-yt-container .orp-close, .orp-yt-container .orp-c-close { display: none; top: 15px; right: 9px; } .orp-yt-container.orp-isPlaying .orp-title, .orp-yt-container.orp-isPlaying .orp-close, .orp-yt-container.orp-isPlaying .orp-c-close { display:block; } .orp-yt-container .orp-skip { bottom: 46px; } .orp-info-bar { position: absolute; left: 0; bottom: 0; width: 100%; }") + "\x3c/style\x3e", q("head", a).append(c));
        }
        function g() {
          E && b.file && "string" === typeof b.file && r.src(b.file);
          var l = new Xb(r, b, I);
          l.build();
          r.on("fullscreenChange", function (a) {
            v.setFullscreen(a);
          });
          E && new Yb(r, b).build();
          w = b.type;
          d();
          var e = new Zb(c, r, b, l.startLoad);
          m = e.build(u);
          v.setAdController(m);
          f();
          (function () {
            m.onAdStart(l.startLoad);
            m.onForceShow(l.endLoad);
            m.onAdStarted(l.endLoad);
            m.onBeforeGlobalStop(function () {
              l.startLoad(!0);
            });
            m.onGlobalStopped(function () {
              if (E || "inBanner" === w) l.isOver(), r.on("ended", l.isOver);
            });
            m.onAdVolumeChange(function () {
              m.soundByHover() || m.isMuted() === r.muted() || r.muted(m.isMuted());
            });
            (function () {
              var a = window.mobPlayerProStart,
                b = window.mobPlayerProStop;
              q.isFunction(a) && q.isFunction(b) && (m.onAdStarted(a), m.onGlobalStopped(b));
            })();
          })();
          I.on(x.close, m.videoUserClose);
          I.trigger(x.apiReady);
          z(function (a, b, c) {
            e.soundBehavior(b);
            l.autoplay(a);
            n(a, c);
          });
          Qb(r.getWrapper(), b.advertising, a, F);
        }
        function u(a, c) {
          var d = q('\x3cvideo playsinline preload\x3d"' + (c ? b.preload || "metadata" : "auto") + '" ' + (c ? "" : "autoplay") + "/\x3e"),
            m = q('\x3cdiv class\x3d"orp-lp-holder"\x3e\x3c/div\x3e'),
            f = new $b(m.get(0), d.get(0), c, function () {
              return v && v.width() / v.height();
            });
          d = q(f.getWrapper()).append(d);
          c ? (m = q('\x3cdiv class\x3d"orp-light-player-wrapper"\x3e\x3c/div\x3e').append(d), C(m), a.append(m), d.wrap("\x3cdiv class\x3d'orp-player-iframe'\x3e\x3cdiv class\x3d'orp-light-player-wrapper'\x3e\x3c/div\x3e\x3c/div\x3e"), setTimeout(function () {
            g();
          }, 0)) : (q(a).append(m), d.wrap("\x3cdiv class\x3d'orp-light-player-wrapper'\x3e\x3c/div\x3e"));
          c && new mc(f, l);
          c && new nc(f, l, G);
          c && new oc(f, l);
          c && !W && new pc(f, l);
          c && new qc(f, l);
          return f;
        }
        function C(a) {
          var c = b.infoBar;
          if (c && c.icon) {
            var d = q('\x3cimg src\x3d"' + c.icon + '" style\x3d"display:inline-block !important;height:14px !important;max-height:14px !important;vertical-align:middle !important;margin:1px 3px !important;padding:0 !important;border:none !important;width:auto !important;opacity:1 !important;" /\x3e');
            c.link && (d = q('\x3ca href\x3d"' + c.link + '" target\x3d"_blank" rel\x3d"noreferrer" style\x3d"text-decoration:none !important;font-size:12px !important;line-height:1.2 !important;"\x3e\x3c/a\x3e').html(d));
            a.append(q('\x3cdiv class\x3d"orp-info-bar"\x3e\x3c/div\x3e').html(q('\x3cdiv style\x3d"text-align: right !important;font-size:10px !important;"\x3e\x3c/div\x3e').html(d)).show());
          }
        }
        function z(a) {
          !W && Ia ? a(l.autoStart, !0) : W && l.autoStart ? zb(function (b) {
            a(b, !0, !b);
          }) : !W && (l.autoStart && !l.muted || l.soundByHover) ? zb(function (b) {
            l.soundByHover && b && m.soundByHover(!0);
            a(l.autoStart, !b || l.muted);
          }) : a(l.autoStart, l.muted);
        }
        b = q.extend(!0, {}, b);
        if (!("mobile" === b.platform && !W || "desktop" === b.platform && W)) return Sb(b, c.isAdapter()), l = b, A.prepare(l, c), a.innerHTML = "", "inView" !== b.type && "rewarded" !== b.type ? q(a).css({
          display: "block",
          overflow: "hidden"
        }) : q(a).css("position", "absolute"), (E = "inStream" === b.type) || Ab(q(a)), b.advertising && (A.debugMode(b.advertising.debugMode), b.advertising.id = new Date().getTime() + Math.random(), p(b)), function () {
          var c = xa(a[0] || a).document;
          e(c, !0);
          e(c, !1);
          r = u(q(a), !0);
          v = new rc(a, b);
          gb(a, v, b);
        }(), this;
      };
      this.load = function (a) {
        r.trigger(x.resetStatus, a);
        if (!z) return r.next(a.file), this;
        f();
        r.next(a.file);
        r.trigger(x.beforePlay);
        return this;
      };
      this.globalStop = function () {
        m && m.globalStop();
      };
      this.getHeight = function () {
        return v.height();
      };
      this.getWidth = function () {
        return v.width();
      };
      this.resize = function (a, b, c) {
        v.resizeApi(a, b, c);
      };
      this.remove = function () {
        b();
        H || (m && m.adClose(), c.destroy(), q(a).empty());
      };
    }();
    this.getCurrentApi = function () {
      return G;
    };
    var F = new sc(this);
    this.getApi = function () {
      return F;
    };
  }
  function sc(a) {
    function b() {
      n.forEach(function (a) {
        g(a[0], a[1], a[2]);
      });
    }
    function g(b, p, d) {
      if (e) {
        var c = a.getAdController().getPlayerListeners();
        d = d ? c.safeOn : c.off;
        b === x.adStopped ? d(x.globalStopped, p) : "AdClicked" === b ? d(x.adClickThru, p) : (b === x.adLoaded && (b = x.globalLoaded), d(b, p));
      } else n.push([b, p, d]);
    }
    var e = !1,
      n = [];
    a.one(x.apiReady, function () {
      e = !0;
      b();
    });
    this.setup = function (b) {
      try {
        return a.getCurrentApi().setup(b), this;
      } catch (p) {
        throw A.initError(a.getElement(), "setup " + p, b), p;
      }
    };
    this.load = function (b) {
      a.getCurrentApi().load(b);
    };
    this.resize = function (b, e, d) {
      a.getCurrentApi().resize(b, e, d);
    };
    this.remove = function () {
      a.getCurrentApi().remove();
    };
    this.on = function (a, b) {
      g(a, b, !0);
      return this;
    };
    this.off = function (a, b) {
      g(a, b, !1);
      return this;
    };
    this.resizeAd = function (b, e, d) {
      a.getCurrentApi().resize(b, e, "fullscreen" === d);
    };
    this.stopAd = function () {
      a.getAdController().adClose();
    };
    this.pauseAd = function () {
      a.getAdController().pauseAd();
    };
    this.resumeAd = function () {
      a.getAdController().resumeAd();
    };
    this.skipAd = function () {
      a.getAdController().skipAd();
    };
    this.getAdWidth = function () {
      return a.getCurrentApi().getWidth();
    };
    this.getAdHeight = function () {
      return a.getCurrentApi().getHeight();
    };
    this.getAdRemainingTime = function () {
      return a.getAdController().getAdRemainingTime();
    };
    this.getAdDuration = function () {
      return a.getAdController().getAdDuration();
    };
    this.getAdVolume = function () {
      return a.getAdController().volume();
    };
    this.setAdVolume = function (b) {
      return a.getAdController().volume(b);
    };
    this.getAdSkippableState = function () {
      return a.getAdController().getAdSkippableState();
    };
  }
  function tc() {
    function a(a, b) {
      function d() {
        0 === f && (f = 1, b());
      }
      function l() {
        1 !== f && (f = 2, b());
      }
      if (a !== x.adStarted) e.getApi().on(a, b);else {
        var f = 0;
        e.getApi().on(x.forceShow, d);
        e.getApi().on(x.adStarted, l);
        var n = c[b];
        c[b] = function () {
          n && n();
          e.getApi().off(x.forceShow, d);
          e.getApi().off(x.adStarted, l);
        };
      }
    }
    function b(a) {
      A.log("vpaid " + a);
    }
    function g() {
      return e.getAdController();
    }
    var e,
      n,
      f = [],
      p,
      d,
      c = {};
    this.handshakeVersion = function (a) {
      return "2.0";
    };
    this.subscribe = function (c, d, m) {
      b("subscribe " + d);
      var l = c.bind(m);
      d !== x.adError && d !== x.adSkipped && (e ? a(d, l) : (b("subscribe array"), f.push({
        f: function () {
          b("call event " + d);
          l();
        },
        e: d
      })));
    };
    this.unsubscribe = function (a, d) {
      b("unsubscribe " + d);
      e.getApi().off(d, a);
      d === x.adStarted && c[a] && c[a]();
    };
    this.initAd = function (c, n, m, g, w, z) {
      b("initAd");
      m = JSON.parse(w.AdParameters);
      g = m.attributes;
      g[fa] = m.id;
      g.width = c;
      g.height = n;
      p = c;
      d = n;
      g._pType = "vp";
      e = new jb(hb(z.slot, m.id), U, m.id, !0);
      new Eb(e);
      e.getApi().setup(g);
      q(f).each(function () {
        b("initAd " + this.e);
        a(this.e, this.f);
      });
      f = null;
      Ub(m);
    };
    this.resizeAd = function (a, b, c) {
      g() && e.getApi().resize(a, b, "fullscreen" === c);
    };
    this.startAd = function () {
      g() && (b("startAd"), n || (n = !0, g().adStart(), e.getApi().on(x.globalLoaded, g().adStart)));
    };
    this.stopAd = function () {
      g() && (b("stopAd"), g().adClose());
    };
    this.pauseAd = function () {
      g() && g().pauseAd();
    };
    this.resumeAd = function () {
      g() && g().resumeAd();
    };
    this.expandAd = function () {};
    this.collapseAd = function () {};
    this.skipAd = function () {
      g() && g().skipAd();
    };
    this.getAdLinear = function () {
      return !0;
    };
    this.getAdWidth = function () {
      return g() ? e.getApi().getAdWidth() : p;
    };
    this.getAdHeight = function () {
      return g() ? e.getApi().getAdHeight() : d;
    };
    this.getAdExpanded = function () {
      return !1;
    };
    this.skipOffset = function () {
      return -1;
    };
    this.getAdSkippableState = function () {
      return !1;
    };
    this.getAdRemainingTime = function () {
      return g() ? g().getAdRemainingTime() : -2;
    };
    this.getAdDuration = function () {
      return g() ? g().getAdDuration() : -2;
    };
    this.getAdVolume = function () {
      return g() ? g().volume() : -1;
    };
    this.setAdVolume = function (a) {
      if (g()) return g().volume(a);
    };
    this.getAdCompanions = function () {
      return "";
    };
    this.getAdIcons = function () {
      return !1;
    };
  }
  function Xa(a) {
    function b(a, b, l) {
      var c = l ? ib(a, !0) : a;
      this.original = function () {
        return a;
      };
      this.run = function (d) {
        var l = c;
        b && (a = c = U);
        l(d);
        return b;
      };
    }
    function g(a) {
      function b() {
        0 === e && (d = d.filter(function (a) {
          return a.original() !== U;
        }));
      }
      var d = [a],
        e = 0;
      this.off = function (a) {
        d.forEach(function (b, c) {
          a && d[c].original() !== a || (d[c] = p);
        });
        b();
      };
      this.trigger = function (a) {
        e++;
        try {
          for (var c = 0; c < d.length; c++) d.hasOwnProperty(c) && d[c].run(a);
        } finally {
          e--;
        }
        b();
      };
      this.push = function (a) {
        d.push(a);
      };
    }
    function e(d, c, l, e) {
      var m = n[d];
      c = new b(c, l, e);
      m ? m.push(c) : (n[d] = new g(c), a && a.addEventListener(d.toLowerCase(), function () {
        f.trigger(d);
      }));
    }
    var n = {},
      f = this,
      p = new b(U);
    this.on = function (a, b, l) {
      e(a, b, l);
    };
    this.one = function (a, b) {
      f.on(a, b, !0);
    };
    this.safeOn = function (a, b, l) {
      e(a, b, l, !0);
    };
    this.off = function (a, b) {
      var c = n[a];
      c && c.off(b);
    };
    this.offAll = function () {
      for (var a in n) n.hasOwnProperty(a) && f.off(a);
    };
    this.trigger = function (a, b) {
      var c = n[a];
      c && c.trigger(b);
    };
  }
  function uc(a, b, g) {
    function e(a, b, c) {
      var d;
      if (d = a ? b.requestFullscreen || b.webkitRequestFullscreen || b.mozRequestFullScreen || b.enterFullscreen || b.webkitEnterFullscreen || b.msRequestFullscreen : b.exitFullscreen || b.webkitCancelFullScreen || b.webkitExitFullscreen || b.mozCancelFullScreen || b.msExitFullscreen) return void 0 === Fa && (Fa = !c), function () {
        var a = d.apply(c ? q(b).parent().get(0) : b);
        void 0 !== a && "function" === typeof a.then && a.then(null, function (a) {
          A.log("fullscreen conflict, reason:" + a);
        });
      };
    }
    function n(a) {
      return function () {
        p = a;
        g.trigger("fullscreenChange", a);
      };
    }
    function f() {
      var a = document;
      return !!(p || a.fullscreenElement || a.webkitFullscreenElement || a.webkitCurrentFullScreenElement || a.mozFullScreenElement || a.msFullscreenElement);
    }
    var p = !1,
      d = !1;
    this.fullscreenOpen = e(!0, a, !0);
    this.fullscreenOpen || (this.fullscreenOpen = e(!0, b)) && (d = !0);
    this.fullscreenClose = e(!1, document);
    this.fullscreenClose || (this.fullscreenClose = e(!1, b));
    this.isFullscreenElement = function () {
      return d;
    };
    !this.fullscreenOpen && (this.fullscreenOpen = n(!0));
    !this.fullscreenClose && (this.fullscreenClose = n(!1));
    this.isFullscreen = f;
    q(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", function () {
      g.trigger("fullscreenChange", f());
    });
    q(b).on("webkitbeginfullscreen", function () {
      p = !0;
      g.trigger("fullscreenChange", f());
    });
    q(b).on("webkitendfullscreen", function () {
      p = !1;
      g.trigger("fullscreenChange", f());
    });
    var c = !1;
    this.isError = function () {
      return c;
    };
    g.on("error", function () {
      c = !0;
    });
    g.on(x.resetStatus, function () {
      c = !1;
    });
  }
  function $b(a, b, g, e) {
    function n(a) {
      w = !0;
      var c = b.play();
      void 0 !== c && "function" === typeof c.then && c.then(null, function (b) {
        b && (!l.muted() && a ? (l.muted(!0), n(!1)) : l.pause());
      });
    }
    function f() {
      if (Aa(m, ".m3u8")) {
        if (b.canPlayType("application/vnd.apple.mpegurl")) v = function () {
          return Infinity === b.duration;
        }, d.one("loadedmetadata", function () {
          w && E.play();
        });else return ia("https://serving.stat-rock.com/player/hls/0.12.4.js", function (a) {
          var c = new a.Hls();
          c.loadSource(m);
          c.attachMedia(b);
          c.on(a.Hls.Events.LEVEL_LOADED, function (a, b) {
            v = function () {
              return b.details.live;
            };
          });
          c.on(a.Hls.Events.MANIFEST_PARSED, function () {
            w && E.play();
          });
        }, function () {
          A.log("fail hls");
        }, function (a) {
          return !!a.Hls;
        }, b), !0;
      } else v = !1;
    }
    function p() {
      function a(a) {
        var c = a.dashjs.MediaPlayer().create();
        c.updateSettings({
          debug: {
            logLevel: a.dashjs.Debug.LOG_LEVEL_ERROR
          }
        });
        c.initialize(b, m, !1);
        v = function () {
          return !isNaN(c.getCurrentLiveLatency());
        };
        c.on("playbackMetaDataLoaded", function () {
          d.trigger("loadedPlayerDash", c);
        });
        c.on("canPlay", function () {
          w && c.play();
        });
        d.one("destroy", function () {
          c && c.reset();
        });
      }
      if (Aa(m, ".mpd")) return ia("https://serving.stat-rock.com/player/dash/3.0.0.js", a, function () {
        A.log("fail dash");
      }, function (a) {
        return !!a.dashjs;
      }, b), !0;
    }
    var d = new Xa(b),
      c = new uc(a, b, d),
      l = this,
      r = !1,
      m,
      v = !1,
      w = !1,
      z = q(a),
      u = q(b),
      E = this;
    this.getWrapper = function () {
      return a;
    };
    this.getVideo = function () {
      return b;
    };
    this.play = function () {
      n(!0);
    };
    this.promisePlay = function () {
      if (r || Ia) this.play();else l.one("canplay", this.play);
    };
    this.pause = function () {
      b.pause();
    };
    this.currentTime = function (a) {
      if (void 0 === a || isNaN(a)) return b.currentTime > b.duration ? b.duration : b.currentTime;
      b.currentTime = a;
    };
    this.duration = function () {
      return b.duration;
    };
    this.ended = function () {
      return b.ended;
    };
    this.src = function (a) {
      void 0 !== a && (v = !1, m = eb(a) ? "" : a, f() || p() || (b.src = m), r = !1);
      return m;
    };
    this.preload = function (a) {
      b.preload = a;
    };
    this.volume = function (a) {
      void 0 !== a && (b.volume = a);
      return b.volume;
    };
    this.muted = function (a) {
      void 0 !== a && (b.muted = a);
      return b.muted;
    };
    this.buffered = function () {
      return b.buffered;
    };
    this.canPlayType = function (a) {
      return b.canPlayType(a);
    };
    this.isPaused = function () {
      return b.paused;
    };
    this.next = function (a) {
      l.src(a);
      b.load();
    };
    this.getBuffer = function () {
      var a = l.buffered(),
        b = l.duration(),
        c = l.currentTime();
      if (a && a.length && b) for (var d = 0; d < a.length; d++) if (c >= a.start(d) && c <= a.end(d)) return Math.min(100 * a.end(d) / b, 100);
      return 0;
    };
    this.calcFit = function () {
      if (l.isFullscreen()) z.toggleClass("orp-fit-fill", !1);else {
        try {
          var a = z.hasClass("orp-ima-container") ? 16 / 9 : b.videoWidth / b.videoHeight;
          a /= e();
        } catch (H) {}
        a && A.log("orp-fit-fill " + a);
        z.toggleClass("orp-fit-fill", .98 < a && 1.02 > a);
      }
    };
    u.on("loadedmetadata", E.calcFit);
    this.isLive = function () {
      return v && v();
    };
    u.on("canplay", function () {
      r = !0;
    });
    d.on("ended", function () {
      d.trigger(x.beforeComplete);
    });
    d.on("error", function () {
      var a = l.src();
      setTimeout(function () {
        a === l.src() && (b.error || l.error) && d.trigger(x.beforeComplete);
      }, 3E3);
    });
    (function () {
      function a(a, b) {
        if (!c) return b;
        var d = localStorage.getItem(O("odPleyarPrA") + "." + a);
        return d ? d : b;
      }
      var c = g;
      Va() || (c = !1);
      b.volume = Number(a("volume", 100)) / 100;
      b.muted = "true" === a("muted", b.muted);
      var l = b.volume,
        m = b.muted;
      q(b).on("volumechange", function () {
        if (l !== b.volume) {
          l = b.volume;
          b.muted = 0 === l;
          var a = Math.round(100 * l);
          c && localStorage.setItem(O("odPleyarPrA") + ".volume", a);
          d.trigger("volume", {
            volume: a
          });
        }
        m !== b.muted && (a = b.muted, c && localStorage.setItem(O("odPleyarPrA") + ".muted", a), m = b.muted, d.trigger("mute", {
          mute: m
        }));
      });
    })();
    this.on = d.on;
    this.one = d.one;
    this.offAndOne = function (a, b) {
      d.off(a, b);
      d.one(a, b);
    };
    this.off = d.off;
    this.offAll = d.offAll;
    this.trigger = d.trigger;
    this.isError = c.isError;
    this.fullscreenOpen = c.fullscreenOpen;
    this.fullscreenClose = c.fullscreenClose;
    this.isFullscreen = c.isFullscreen;
    this.isFullscreenElement = c.isFullscreenElement;
    this.destroy = function () {
      d.trigger("destroy");
      b.pause();
      b.removeAttribute("src");
      b.load();
    };
  }
  function rc(a, b) {
    function g() {
      var a = D ? P.width() : l(),
        b = D ? P.height() : r();
      e(a, b, F && !D);
    }
    function e(a, b, c) {
      if (a !== H || b !== I) c && T.width(a).height(b), G && G.resize(a, b, D), H = a, I = b;
    }
    function n(a) {
      400 > a.width() ? M.addClass("orp-tiny-size") : M.removeClass("orp-tiny-size");
    }
    function f() {
      if (b.fixTransform) return M.parents().toArray().find(function (a) {
        return "none" !== q(a).css("transform");
      });
    }
    function p(a, c, d, l, m) {
      a && b.advertising.position !== a || T.css({
        margin: ("TC" === a || "BC" === a) && "auto",
        left: ("TC" === a || "BC" === a) && 0,
        right: l || 0,
        bottom: m || "auto",
        transform: c || d ? "translate(" + c + "px, " + d + "px)" : "none"
      });
    }
    function d() {
      if (N) {
        var a = 20,
          b = 20;
        q.isNumeric(L) && (a = L);
        q.isNumeric(K) && (b = K);
        var c = P[0].scrollY - q(N).offset().top;
        a = P[0].scrollY - q(N).offset().top + P[0].innerHeight - a;
        var d = -q(N).offset().left;
        b = P[0].document.body.scrollWidth - q(N).offset().left - b;
        var l = P[0].innerWidth / 2 - (N.clientWidth / 2 + q(N).offset().left);
        p("TL", d, c, !1, !1);
        p("TC", l, c, !1, !1);
        p("TR", b, c, N.clientWidth, !1);
        p("BL", d, a, !1, N.clientHeight);
        p("BC", l, a, !1, N.clientHeight);
        p("BR", b, a, N.clientWidth, N.clientHeight);
      }
    }
    function c() {
      M.width(w).height(z + Q);
      C && (V = q('\x3cdiv class\x3d"orp-fkstck"\x3e\x3c/div\x3e'), M.append(V).addClass("orp-aspectRateFixed"), T.css("paddingBottom", 100 * C + "%"));
      n(M);
    }
    function l(a) {
      return D || A ? P.width() : F && !a && u ? Math.floor(u) : Math.floor(M.width());
    }
    function r(a) {
      if (D || A) return P.height();
      if (F && !a && E) return Math.floor(E);
      a = C ? C * l(a) : z || P.height();
      return Math.floor(a);
    }
    function m(a) {
      return a ? ~~a : a;
    }
    function v() {
      P.off("resize", g);
      P.off("scroll resize", d);
      g();
    }
    var w,
      z,
      u,
      E,
      C,
      H,
      I,
      G,
      F,
      J,
      D = !1,
      B,
      N,
      L,
      K,
      Q = b.infoBar ? m(b.infoBarHeight) || 16 : 0,
      M = q(a),
      T = q(".orp-light-player-wrapper:first", M),
      V,
      P = q(xa(a)),
      A;
    (function () {
      A = "rewarded" === b.type;
      Q && q(".orp-player-iframe", M).css("height", "calc(100% - " + Q + "px)");
      if (b.aspectratio) {
        var a = b.aspectratio.split(":");
        C = (a[1] / a[0]).toFixed(2);
      } else C = void 0;
      C && (M.parent().css("flex", "0 1 100%"), b.maxWidth && M.css("max-width", ("" + b.maxWidth).replace("px", "") + "px"));
      w = (a = b.width) ? C ? a.replace("%", "") + "%" : a : "100%";
      z = C ? void 0 : m(b.height);
      (a = b.advertising) && a.sticky && (u = m(a.stickyWidth), E = m(a.stickyHeight), L = m(a.stickyVerticalMargin), K = m(a.stickyHorizontalMargin), J = "orp-player-ivm-" + (a.position || "BR"));
      c();
      H = l();
      I = r();
      P.resize(g);
      N = f();
    })();
    this.resizeApi = function (a, b, d) {
      v();
      w = a;
      z = b;
      E = u = 0;
      C && (C = 0, V.remove(), V = 0, M.removeClass("orp-aspectRateFixed"), T.css("paddingBottom", ""));
      D = d;
      c();
      e(l(), r(), F);
    };
    this.setAdController = function (a) {
      G = a;
      G.sizeController(this);
    };
    this.stickyState = function (a) {
      if (F = a) {
        var c = l();
        var m = r();
        C ? V && V.css("paddingBottom", 100 * C + "%") : V && V.height(r(!0));
        T.addClass(J).width(c).height(m + Q);
        M.addClass("orp-went-sticky");
        n(T);
      } else T.removeClass(J).width("").height(""), V && V.height("").css("paddingBottom", 0), n(M);
      var f = F;
      a = b.advertising.position || "BR";
      var g = q.isNumeric(L),
        I = q.isNumeric(K);
      g && I && 2 !== a.length || (f ? (f = {}, g && ("T" === a.charAt(0) && (f.top = L + "px"), "B" === a.charAt(0) && (f.bottom = L + "px")), I && ("L" === a.charAt(1) && (f.left = K + "px"), "R" === a.charAt(1) && (f.right = K + "px")), T.css(f)) : T.css({
        top: "",
        right: "",
        bottom: "",
        left: ""
      }));
      a = F;
      N && (T.toggleClass("orp-js-positioned-sticky", a), a ? (setTimeout(d, 0), P.on("scroll resize", d)) : (P.off("scroll resize", d), setTimeout(p, 100)));
      e(c || l(), m || r());
      B = B || q(G.getWrapper()).parents(".orp-light-player-wrapper");
      B.toggleClass("orp-went-sticky", F);
    };
    this.setFullscreen = function (a) {
      a = !!a;
      a !== D && (D = a, g());
    };
    this.isInSticky = function () {
      return F;
    };
    this.getAspectRatio = function () {
      return C;
    };
    this.width = l;
    this.height = r;
    this.off = v;
  }
  function Xb(a, b, g) {
    function e(a, b, c, d, l) {
      return Cb(a, b, function () {
        a.parents(".orp-lp-controls-wrapper").addClass("orp-sliderInUse");
        c && c();
      }, d, function (b) {
        a.parents(".orp-lp-controls-wrapper").removeClass("orp-sliderInUse");
        l && l(b);
      });
    }
    function n() {
      v = setTimeout(function () {
        f(!0);
      }, 3E3);
    }
    function f(a, b) {
      clearTimeout(v);
      a === w || c.toggleClass("orp-isHiddenControls", a);
      b && n();
      w = a;
    }
    function p(a) {
      a ? (c.removeClass("orp-isOver orp-isLoading orp-error").addClass("orp-isPlaying"), f(!1, !0), m(!1)) : c.removeClass("orp-isPlaying");
      r = a;
    }
    function d(c) {
      if (b.image) {
        var d = q(a.getWrapper(), ".orp-init-placeholder");
        c ? d.css({
          "background-image": "url(" + b.image + ")",
          "background-repeat": "no-repeat",
          "background-position": "center"
        }) : d.removeAttr("style");
      }
    }
    var c,
      l = !1,
      r = !1,
      m,
      v,
      w,
      z = this;
    this.build = function () {
      function u(a) {
        return I.find(a);
      }
      function v() {
        a.isFullscreen() ? a.fullscreenClose() : a.fullscreenOpen();
      }
      function C() {
        c.hasClass("orp-isOver") && (a.isPaused() || a.pause(), a.currentTime(0));
        a.isPaused() ? (a.play(), p(!0)) : (a.pause(), p(!1));
      }
      var H = b && b.errorMessage ? b.errorMessage : "An error occurred. Please try again later";
      c = q(a.getWrapper(), ".orp-light-player-wrapper");
      c.parent().addClass("orp-isInit");
      "inBanner" === b.type && (c.parent().addClass("orp-isInBanner"), b.inApp && c.parent().addClass("orp-isInApp"));
      var I = q('\x3cdiv class\x3d"orp-lp-controls-wrapper"\x3e\x3c/div\x3e').appendTo(a.getWrapper()).append('\x3cdiv class\x3d"orp-ctrl orp-c-close" style\x3d"display: none"\x3e\x3c/div\x3e' + fb(b.advertising, !0) + '\x3cdiv class\x3d"orp-ctrl orp-c-play-big"\x3e\x3ci class\x3d"orp-c-play-small"\x3e\x3cdiv class\x3d"orp-lp-loader-dots"\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-0"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-1"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-2"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-3"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-4"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-5"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-6"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-7"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrls"\x3e\x3cdiv id\x3d"ct2" class\x3d"orp-ctrl orp-c-progress-bg"\x3e\x3cdiv class\x3d"orp-c-progress-cache"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-progress-curr"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-progress-hover"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-play"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-next"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-vol"\x3e\x3cdiv class\x3d"orp-c-vol-toggle"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-vol-changer"\x3e\x3cdiv class\x3d"orp-c-vol-curr"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-time"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-live"\x3eLIVE\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-screen"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-error-block"\x3e\x3cspan\x3e' + H + '\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-init-placeholder"\x3e\x3cdiv class\x3d"orp-init-button"\x3e\x3cdiv class\x3d"orp-lp-loader-dots"\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-0"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-1"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-2"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-3"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-4"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-5"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-6"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-7"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-landing-page"\x3e\x3c/div\x3e'),
        G = u(".orp-c-progress-bg");
      a.on("playing", function () {
        l = !0;
        u(".orp-title").show();
        z.endLoad();
      });
      a.on("durationchange", function () {
        u(".orp-ctrls").toggleClass("orp-live", a.isLive());
      });
      a.one(x.beforePlay, function () {
        c.parent().addClass("orp-init-loading");
        d(!1);
      });
      "inStream" !== b.type && (b.videoCloseButton || b.advertising.stickyCloseButton) && (H = u(".orp-c-close"), b.videoCloseButton && H.show(), H.click(function () {
        a.isPaused() || a.pause();
        g.trigger(x.close);
      }));
      (function () {
        G.remove(".orp-c-progress");
        a.on(x.timeTags, function (b) {
          function c() {
            var c = a.duration();
            c && q(b).each(function () {
              var a = ~~this;
              -1 === a && (a = ~~c);
              0 <= a && a <= c && G.append('\x3cdiv class\x3d"orp-c-progress" style\x3d"left: ' + Math.floor(100 * a / c) + '%"\x3e\x3c/div\x3e');
            });
          }
          if (b && b.length) if (a.duration()) c();else a.one("loadedmetadata", c);
        });
      })();
      a.on("canplaythrough playing", function () {
        c.removeClass("orp-isLoading");
      });
      a.on("waiting", function () {
        c.addClass("orp-isLoading");
        a.one("timeupdate", function () {
          c.removeClass("orp-isLoading");
        });
      });
      a.on("play", function () {
        p(!0);
      });
      a.on("pause", function () {
        a.ended() || p(!1);
      });
      a.on("ended", function () {
        m(!0);
        a.isFullscreenElement() && a.isFullscreen() && a.fullscreenClose();
      });
      var F = u(".orp-c-play-big");
      W ? (u(".orp-c-play-big").click(function () {
        a.isPaused() || (w ? f(!1, !0) : f(!0));
      }), u(".orp-ctrls").on("touchstart", function () {
        f(!1);
      }).on("touchend touchcancel", n)) : (F.mousemove(function () {
        f(!1, !0);
      }), c.mouseleave(function () {
        f(!0);
      }), u(".orp-ctrls").mouseenter(function () {
        f(!1);
      }));
      a.on("adShow", function () {
        a.isFullscreenElement() && a.isFullscreen() && a.fullscreenClose();
      });
      var J = u(".orp-c-screen").click(v);
      a.on(x.hideScreen, function () {
        J.hide();
        F.off("dblclick", v);
      });
      F.dblclick(v);
      a.on("fullscreenChange", function (b) {
        a.isFullscreenElement() ? b || p(!a.isPaused()) : (c.toggleClass("orp-full-screened", b), c.parent().toggleClass("orp-full-screened", b));
      });
      W ? (u(".orp-c-play-small").click(function () {
        (a.isPaused() || c.hasClass("orp-isOver")) && C();
      }), u(".orp-c-play").click(C)) : u(".orp-c-play,.orp-c-play-big").click(C);
      var D = u(".orp-c-progress-curr");
      a.on("timeupdate", function () {
        var b = 0;
        a.duration() && (b = 100 * a.currentTime() / a.duration());
        D.width(b + "%");
      });
      m = e(G, D, U, null, function (b) {
        a.currentTime(a.duration() * b);
        r && !a.ended() ? a.play() : 1 <= b && !a.ended() && a.play();
      });
      e(G, u(".orp-c-progress-hover"));
      H = new function () {
        var b = u(".orp-c-progress-cache"),
          c;
        this.init = function () {
          c || (c = setInterval(function () {
            b.width(a.getBuffer() + "%");
          }, 100));
        };
        this.clear = function () {
          c && clearInterval(c);
          c = 0;
        };
      }();
      a.one("playing", H.init);
      a.on("play", H.init);
      a.on("pause", H.clear);
      a.on("ended", H.clear);
      a.on("error", H.clear);
      var B = u(".orp-c-time");
      a.on("timeupdate", function () {
        B.text(Ta(a.currentTime()) + " / " + Ta(a.duration()));
      });
      (function () {
        b.landingPage && (c.addClass("orp-jsLandingPage"), u(".orp-landing-page").one("click", function () {
          window.open(b.landingPage, "_blank");
          a.pause();
          c.removeClass("orp-jsLandingPage");
          return !1;
        }));
      })();
      a.on(x.resetStatus, function () {
        a.getVideo().error = null;
        c.removeClass("orp-error");
      });
      a.on("error", function () {
        c.addClass("orp-error");
      });
      W ? c.parent().addClass("orp-isMobile") : c.parent().addClass("orp-notMobile");
      (function () {
        function b() {
          var b = a.volume();
          a.muted() && (b = 0);
          var c = b;
          .5 < c ? d.removeClass("orp-vol-mid orp-vol-off") : 0 === c ? d.removeClass("orp-vol-mid").addClass("orp-vol-off") : d.removeClass("orp-vol-off").addClass("orp-vol-mid");
          l.width(100 * b + "%");
        }
        var c = a.volume(),
          d = u(".orp-c-vol"),
          l = u(".orp-c-vol-curr");
        b();
        e(u(".orp-c-vol-changer"), l, function () {
          d.addClass("orp-isSelected");
        }, function (b) {
          a.volume(b);
          !!b === a.muted() && a.muted(!b);
        }, function () {
          var b = a.volume();
          !!b === a.muted() && a.muted(!b);
          a.volume() ? c = a.volume() : a.volume(c || .1);
          d.removeClass("orp-isSelected");
        });
        u(".orp-c-vol-toggle").click(function () {
          d.hasClass("orp-vol-off") ? (a.volume(c || .1), a.muted(!1)) : a.muted(!0);
        });
        a.on("volume", b);
        a.on("mute", b);
      })();
    };
    this.autoplay = function (a) {
      a || d(!0);
    };
    this.startLoad = function (b) {
      (b || !l && !a.ended()) && c.parent().addClass("orp-isInit");
    };
    this.endLoad = function () {
      c.parent().removeClass("orp-isInit");
    };
    this.isOver = function () {
      p(!1);
      z.endLoad();
      c.addClass("orp-isOver");
    };
  }
  function Yb(a, b) {
    this.build = function () {
      function g(b) {
        var d = a.duration(),
          c = b ? a.currentTime() + f.seekStep : a.currentTime() - f.seekStep;
        c >= d && n.removeClass("orp-isPlaying orp-isLoading orp-error").addClass("orp-isOver");
        a.currentTime(c);
        !b && n.hasClass("orp-isOver") && a.play();
      }
      function e(b) {
        var d = a.volume();
        b ? (b = d + f.volumeStep, b = 1 < b ? 1 : b) : (b = d - f.volumeStep, b = 0 > b ? 0 : b);
        a.volume(b);
      }
      var n = q(a.getWrapper(), ".orp-light-player-wrapper");
      n.attr("tabIndex", "-1");
      var f = {
        volumeStep: .1,
        seekStep: 5
      };
      if (!b.autoStart) a.one("play", function () {
        n.focus();
      });
      n.on("keydown", function (b) {
        if (q(".orp-proVideo", n).is(":visible")) return !1;
        switch (b.which) {
          case 32:
            b.preventDefault();
            a.isPaused() ? (a.play(), n.removeClass("orp-isOver orp-isLoading orp-error").addClass("orp-isPlaying")) : (a.pause(), n.removeClass("orp-isPlaying"));
            break;
          case 37:
            b.preventDefault();
            g(!1);
            break;
          case 39:
            b.preventDefault();
            g(!0);
            break;
          case 40:
            b.preventDefault();
            e(!1);
            break;
          case 38:
            b.preventDefault();
            e(!0);
            break;
          case 77:
            a.muted(!a.muted());
            break;
          case 70:
            a.isFullscreen() ? a.fullscreenClose() : a.fullscreenOpen(), n.focus();
        }
      });
    };
  }
  function oc(a, b) {
    function g(b) {
      function f(a) {
        return function () {
          l.find(".orp-is-active").removeClass("orp-is-active");
          q(this).addClass("orp-is-active");
          v.toggleClass("orp-is-hd-selected", q(this).hasClass("orp-is-hd"));
          var c = "true" === q(this).attr("data-quality-auto");
          c && e || !c && !e || (e = c, b.updateSettings({
            streaming: {
              abr: {
                autoSwitchBitrate: {
                  video: c
                }
              }
            }
          }));
          b.setQualityFor("video", a);
          g();
        };
      }
      function g() {
        c.hide();
      }
      var d = q(".orp-lp-controls-wrapper", q(a.getWrapper())),
        c = q('\x3cdiv class\x3d"orp-settings-holder"\x3e\x3c/div\x3e');
      d.append(c);
      c.append('\x3cdiv class\x3d"orp-settings-head"\x3e\x3cdiv class\x3d"orp-settings-name"\x3eVideo quality\x3c/div\x3e\x3cdiv class\x3d"orp-settings-close"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-settings-body"\x3e\x3c/div\x3e');
      var l = q(".orp-settings-body", c),
        n,
        m = function () {
          var a = [];
          b.getBitrateInfoListFor("video").reverse().forEach(function (b) {
            a.find(function (a) {
              return b.height === a.height;
            }) || a.push(b);
          });
          return a;
        }();
      m.forEach(function (a, c) {
        var d = q('\x3cdiv class\x3d"orp-settings-item" data-quality-id\x3d"' + a.qualityIndex + '"\x3e' + a.height + "p\x3c/div\x3e");
        1080 <= a.height && d.addClass("orp-is-hd");
        d.click(f(a.qualityIndex));
        l.append(d);
        b.getQualityFor("video") === a.qualityIndex && (n = a);
      });
      var v = q('\x3cdiv class\x3d"orp-ctrl orp-c-settings"\x3e\x3c/div\x3e');
      v.click(function () {
        c.show();
      });
      d.find(".orp-ctrls").append(v);
      c.find(".orp-settings-close").click(g);
      (function () {
        n = n || m[m.length - 1];
        var a = q('.orp-settings-item[data-quality-id\x3d"' + n.qualityIndex + '"]', l);
        a.attr("data-quality-auto", !0).addClass("orp-is-active").text("Auto (" + n.height + "p)");
        v.toggleClass("orp-is-hd-selected", a.hasClass("orp-is-hd"));
      })();
    }
    var e = !0;
    if (b.file && Aa(b.file, ".mpd")) a.one("loadedPlayerDash", g);
  }
  function mc(a, b) {
    function g() {
      r = l.limit || r;
      a.play = p;
      a.promisePlay = p;
      a.src = function () {
        return l.url;
      };
      a.next = U;
      q.get(l.url, e).fail(function () {
        f([]);
      });
    }
    function e(a) {
      function b(a, b) {
        var c = 0;
        0 === a.length ? b() : a.forEach(function (l) {
          d(l, g, function (d) {
            (d || g) && (l._skip = !0);
            d && e.push(d);
            ++c === a.length && b();
          });
        });
      }
      function c() {
        m = m.filter(function (a) {
          return !a._skip;
        });
      }
      function d(a, b, c) {
        var d = n(a);
        d && d.title && d.link && d.img ? c(d) : b && d && d.link ? q.get(d.link, function (b) {
          b = n(a, b);
          c(b && b.title && b.link && b.img ? b : !1);
        }).fail(function () {
          c();
        }) : c();
      }
      var m = q(a).find("item").toArray(),
        e = [],
        g = !1;
      m.forEach(function (a, b) {
        a._id = b;
      });
      b(m, function () {
        e.length >= r || !l.parsePage ? f(e) : (g = !0, c(), b(m.slice(0, Math.min(r - e.length, m.length)), function () {
          f(e);
        }));
      });
    }
    function n(a, b) {
      try {
        var c = q(a),
          d = b && q("\x3cb\x3e" + b + "\x3c/b\x3e"),
          m = {
            title: function () {
              return c.find("title").text();
            },
            link: function () {
              return c.find("link").text();
            },
            img: function () {
              return q("\x3cb\x3e" + c.find("description").text() + "\x3c/b\x3e").find("img").attr("src");
            }
          };
        l.parser && new Function("parser", "$item", "$", "$page", "page", l.parser)(m, c, q, d, b);
        return {
          _id: a._id,
          title: m.title(),
          link: m.link(),
          img: m.img()
        };
      } catch (E) {
        A.log([E, a]);
      }
    }
    function f(m) {
      m.sort(function (a, b) {
        return a._id - b._id;
      });
      m = m.slice(0, Math.min(r, m.length));
      b.advertising && b.advertising.barColor && (l.barColor = b.advertising.barColor);
      d = new vc(a, l, m);
      c && d.play();
    }
    function p() {
      d ? d.play() : c = !0;
    }
    var d,
      c,
      l,
      r = 5;
    (l = b.file && Ba(b.file)) && l.url && "rss" === l.type && g();
  }
  function vc(a, b, g) {
    function e(b) {
      r && q(a.getWrapper()).removeClass("orp-isOver").addClass("orp-isPlaying orp-isHiddenControls");
      n(b);
      b = q.isNumeric(b) ? b : d + 1;
      b >= p.length ? (r = !0, a.trigger("ended")) : (p[d].img.hide().removeClass("orp-play").addClass("orp-reset").off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", e), d = b, p[d].img.show(), setTimeout(function () {
        p[d].progress.removeClass("orp-reset").addClass("orp-play");
        p[d].img.removeClass("orp-reset").addClass("orp-play").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", e);
      }, 300));
    }
    function n(a) {
      q.isNumeric(a) && (p[a].progress.find("div").css("with", "0"), p.forEach(function (b, c) {
        c < a ? b.progress.removeClass("orp-reset").addClass("orp-viewed") : b.progress.removeClass("orp-viewed").addClass("orp-reset");
      }));
    }
    function f() {
      function d(a) {
        W || a.hover(function () {
          q(".orp-progress", this).css("background", b.barColor || "#2e95ff");
        }, function () {
          q(".orp-progress", this).css("background", "");
        });
      }
      function f(a) {
        return function () {
          window.open(a, "_blank");
          return !1;
        };
      }
      function n(a) {
        return function () {
          e(a);
        };
      }
      m = !0;
      q(".orp-lp-controls-wrapper", q(a.getWrapper())).append(l);
      q(a.getWrapper()).addClass("orp-isRss");
      var r = q('\x3cdiv class\x3d"orp-rss-items"\x3e\x3c/div\x3e'),
        E = q('\x3cdiv class\x3d"orp-rss-control"\x3e\x3c/div\x3e');
      l.append(r).append(E);
      var C = Math.floor(100 / g.length) + (1 < g.length ? "% - 4px" : "%"),
        H = "animation-duration: " + c + "s; transition: transform " + c + "000ms linear 0s;",
        I = "transition: width " + c + "s linear; background-color:" + (b.barColor || "#2e95ff");
      g.forEach(function (a, b) {
        var c = q('\x3cdiv class\x3d"orp-item orp-reset"\x3e\x3ci style\x3d"' + H + '"\x3e\x3c/i\x3e\x3cdiv class\x3d"orp-title"\x3e\x3cdiv class\x3d"orp-counter"\x3e' + (b + 1) + "/" + g.length + '\x3c/div\x3e\x3cdiv class\x3d"orp-text"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-button"\x3eRead more\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        c.find("i").css("background-image", "url(" + a.img + ")").attr("alt", a.title);
        c.find(".text").text(a.title);
        c.click(f(a.link));
        r.append(c);
        var l = q('\x3cdiv class\x3d"orp-progressHover" style\x3d"width: calc(' + C + ')"\x3e\x3cdiv class\x3d"orp-progress"\x3e\x3cdiv style\x3d"' + I + '"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        d(l, b);
        l.click(n(b));
        E.append(l);
        p.push({
          img: c,
          progress: l.find(".orp-progress")
        });
      });
    }
    var p = [],
      d = 0,
      c = b && b.speed ? b.speed : "6",
      l = q('\x3cdiv class\x3d"orp-rss-container" style\x3d"display: none"\x3e\x3c/div\x3e'),
      r = !1,
      m;
    this.play = function () {
      !m && f();
      A.log("RssControlsPlugin " + (g && g.length));
      g.length ? (q(a.getWrapper()).parent().removeClass("orp-isInit"), r = !0, l.show(), e(0)) : (A.log("RssControlsPlugin error"), q(a.getWrapper()).addClass("orp-error"), a.error = !0, a.trigger("error"));
    };
  }
  function qc(a, b) {
    function g() {
      q(a.getWrapper()).addClass("orp-isInit orp-isYTContent");
      r.type = b.type;
      a.isYTContent = !0;
      a.play = e;
      a.promisePlay = e;
      a.preload = f(a.preload);
      a.preload();
      a.src = function () {
        return r.videoId;
      };
      p(function () {
        c = new wc(a, r, d());
        a.pause = c.pause;
        a.ended = c.ended;
        a.isPaused = c.isPaused;
        a.currentTime = c.currentTime;
        a.duration = c.duration;
        a.volume = n(a.volume, c.volume);
        a.destroy = n(a.destroy, c.destroy);
        a.isError = c.isError;
        a.next = U;
        l && c.play();
      });
    }
    function e() {
      c ? c.play() : l = !0;
    }
    function n(a, b) {
      return function (c) {
        return b(a, c);
      };
    }
    function f(a) {
      return function () {
        a("none");
      };
    }
    function p(c) {
      ia("https://www.youtube.com/iframe_api", function () {
        d().loaded ? c() : d().ready(c);
      }, function () {
        A.event(A.types.error, b, "load js yt");
      }, function () {
        return !!d();
      }, a.getVideo());
    }
    function d() {
      return xa(a.getVideo()).YT;
    }
    var c, l, r;
    (r = b.file && Ba(b.file)) && r.videoId && "youtube" === r.type && g();
  }
  function wc(a, b, g) {
    function e() {
      function e(b) {
        r.clear();
        A.log("error init youtube: " + b);
        z = !0;
        a.trigger("error");
      }
      function C(a, b) {
        clearTimeout(l);
        u.toggleClass("orp-isHiddenControls", a);
        b && H();
      }
      function H() {
        l = setTimeout(function () {
          C(!0);
        }, 3E3);
      }
      f || (f = !0, q("\x3cdiv\x3e").attr("id", b.videoId).addClass("orp-yt-player").prependTo(q(a.getVideo()).parent().find(".orp-lp-controls-wrapper")), Fa && q(".orp-c-screen", u).hide(), n = new g.Player(b.videoId, {
        width: "100%",
        height: "100%",
        videoId: b.videoId,
        playerVars: {
          controls: 0,
          enablejsapi: 1,
          modestbranding: 1,
          rel: 0,
          fs: 0
        },
        events: {
          onReady: function () {
            function b() {
              (d = a.muted()) && n.mute() || n.unMute();
              m = 100 * a.volume();
              n.setVolume(m);
            }
            0 === n.getDuration() ? e("yt duration is 0") : (n.addEventListener("onStateChange", function (c) {
              function d() {
                v && (a.trigger("play"), a.trigger("playing"));
                v = !1;
                r.init();
              }
              q(a.getWrapper()).parent().removeClass("orp-isInit");
              w = !1;
              p || !W && c.data !== g.PlayerState.PLAYING ? c.data === g.PlayerState.PLAYING ? d() : c.data === g.PlayerState.PAUSED ? (v || a.trigger("pause"), v = !0, r.clear()) : c.data === g.PlayerState.ENDED && (v = !0, p && (w = !0, a.trigger("ended"), r.clear())) : (p = !0, b(), u.removeClass("orp-isInit").addClass("orp-isPlaying orp-yt-container"), d(), C(!1, !0));
            }), a.trigger("loadedmetadata"), a.trigger("canplay"), b(), c && n.playVideo());
          },
          onError: e
        }
      }), r = new function () {
        function b() {
          a.trigger("timeupdate");
        }
        var c;
        this.init = function () {
          c || (c = setInterval(b, 50));
        };
        this.clear = function () {
          c && clearInterval(c);
          c = 0;
          b();
        };
      }(), u.mouseover(function () {
        C(!1, !0);
      }), u.mouseleave(function () {
        C(!0);
      }));
    }
    var n,
      f,
      p,
      d,
      c,
      l,
      r,
      m,
      v = !0,
      w = !1,
      z = !1,
      u = q(a.getWrapper());
    this.play = function () {
      f && n && n.playVideo ? n.playVideo() : (c = !0, e());
    };
    this.pause = function () {
      n && n.pauseVideo && n.pauseVideo();
    };
    this.isPaused = function () {
      return v;
    };
    this.ended = function () {
      return w;
    };
    this.duration = function () {
      return n && n.getDuration && n.getDuration();
    };
    this.currentTime = function (b) {
      if (n && n.seekTo) return void 0 !== b && (w = !1, n.seekTo(b)), b = w && n.getDuration() || n.getCurrentTime(), a.getVideo().currentTime = b;
    };
    this.volume = function (b, c) {
      if (!n || !n.setVolume) return b(c);
      void 0 === c && a.muted() && !n.isMuted() && (c = 0);
      void 0 !== c && (n.setVolume(100 * c), 0 === c && n.mute() || n.unMute());
      return b(c);
    };
    this.destroy = function (a) {
      r && r.clear();
      a();
    };
    this.isError = function () {
      return z;
    };
    a.one(x.beforePlay, e);
  }
  function xc(a, b) {
    function g(a) {
      return za(a, "http") ? a : p + a;
    }
    function e(a) {
      a = a.split(".");
      a = a[0].split(":");
      return 1E3 * (a[2] ? 3600 * a[0] + 60 * a[1] + 1 * a[2] : a[1] ? 60 * a[0] + 1 * a[1] : 1 * a[0]);
    }
    function n(a) {
      if (null == a || "object" != typeof a) return a;
      var b = a.constructor(),
        d;
      for (d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
      return b;
    }
    function f(a, b) {
      var c = RegExp("(?:#xywh\x3d)([0-9]+),([0-9]+),([0-9]+),([0-9]+)", "gi").exec(b);
      return q.extend(!0, {
        x: c[1],
        y: c[2],
        w: c[3],
        h: c[4]
      }, a);
    }
    var p = a.substring(0, a.lastIndexOf("/") + 1);
    return new Promise(function (a) {
      var c = {},
        d = [],
        p = !1,
        m = b.split("\n");
      m.forEach(function (a, b) {
        " " !== a.replace(/<\/?[^>]+(>|$)/g, "") && "" !== a.replace(/<\/?[^>]+(>|$)/g, "") && (-1 !== a.indexOf("--\x3e") ? (p = !0, c.start && d.push(n(c)), c = {
          start: e(a.split("--\x3e")[0].trimRight().split(" ").pop()),
          end: e(a.split("--\x3e")[1].trimLeft().split(" ").shift()),
          part: ""
        }) : "" !== a.replace(/<\/?[^>]+(>|$)/g, "") && " " !== a.replace(/<\/?[^>]+(>|$)/g, "") && p && (0 !== d.length ? d[d.length - 1].part.replace(/<\/?[^>]+(>|$)/g, "") !== a.replace(/<\/?[^>]+(>|$)/g, "") && (0 === c.part.length ? (c.part = g(a), c = f(c, a)) : c.part = "${current.part} ${line}", b === m.length - 1 && d.push(n(c))) : (c.part = g(a), c = f(c, a), d.push(n(c)), c.part = "")));
      });
      0 > q.inArray(c, d) && d.push(n(c));
      c = [];
      d.forEach(function (a) {
        a.part = a.part && a.part.replace(/<\/?[^>]+(>|$)/g, "") || "";
      });
      a(d);
    });
  }
  function pc(a, b) {
    function g(b, f) {
      function g() {
        e && e.load([]);
      }
      g();
      if (b.file && (b.tracks || a.isPlaylist)) {
        var d = a.isPlaylist && f && b.file.playlist.length ? b.file.playlist[0].tracks : b.tracks;
        q.isArray(d) && (d = d[0]);
        if (d && d.file) a.one(x.beforePlay, function () {
          q.get(d.file, function (b) {
            xc(d.file, b).then(function (b) {
              e || (e = new yc(a));
              e.load(b);
            });
          }).fail(g);
        });
      }
    }
    var e;
    g(b, !0);
    a.on(x.resetStatus, g);
  }
  function yc(a) {
    function b(b) {
      var c = b.pageX;
      b.changedTouches && (c = b.changedTouches[0].pageX);
      var d = c - f[0].getBoundingClientRect().left;
      b = Math.floor(a.duration() / (f.width() / d));
      var g = e(b || 0);
      g && (p.css({
        left: function () {
          var a = g.w,
            b = g.w / 2;
          return d + b > f.width() ? f.width() - a + 21 : 0 <= d - b ? d + 21 - b : 21;
        }() + "px",
        "background-image": "url(" + g.part + ")",
        "background-repeat": "no-repeat",
        "background-position": "-" + g.x + "px -" + g.y + "px"
      }), p.show());
    }
    function g() {
      p.hide();
    }
    function e(a) {
      a *= 1E3;
      return n.find(function (b) {
        if (b.start <= a && b.end > a) return b;
      });
    }
    var n = [],
      f = q(".orp-c-progress-bg", a.getWrapper()),
      p = q('\x3cdiv class\x3d"orp-vtt" style\x3d"display: none"\x3e\x3c/div\x3e');
    this.load = function (a) {
      n = a;
      (a = e(0)) && p.css({
        position: "absolute",
        top: "-" + (a.h - 10) + "px",
        width: a.w + "px",
        height: a.h + "px"
      });
    };
    f.after(p);
    f.on("mousemove", b);
    f.on("touchmove", b);
    f.on("mouseout", g);
    f.on("touchcancel", g);
    f.on("touchend", g);
  }
  function nc(a, b, g) {
    function e(a) {
      return function () {
        d ? d.play(a) : f = !0;
      };
    }
    function n(a) {
      var b = [];
      a.forEach(function (a, c) {
        a.file && (a.id = c, b.push(a));
      });
      return b;
    }
    var f, p;
    if ((p = b.file && Ba(b.file)) && "playlist" === p.type && (b.forceFile = !0, p.playlist = n(p.playlist), p.playlist.length)) {
      var d = new zc(a, b, g, p);
      f && d.play();
      a.isPlaylist = !0;
      a.src = d.src;
      a.play = e(a.play);
      a.promisePlay = e(a.play);
      a.next = U;
      a.on(x.beforeComplete, d.next);
    }
  }
  function zc(a, b, g, e) {
    var n = this,
      f = e.playlist,
      p = q('\x3cdiv class\x3d"orp-c-playlist-holder"\x3e\x3c/div\x3e'),
      d = 0,
      c = b.advertising.lifecycleLoop || 0,
      l,
      r,
      m,
      v = 0;
    this.src = function () {
      var b = f[d];
      a.getVideo().getAttribute("src") !== b.file && a.getVideo().setAttribute("src", b.file);
      return b.file;
    };
    this.play = function (b) {
      l ? (q(a.getWrapper()).removeClass("orp-isOverPlaylist"), n.next(0)) : b();
    };
    this.next = function (e) {
      l = !1;
      p.hide();
      m && m.find("[data-playlist-id]").removeClass("orp-is-playing");
      d = void 0 !== e ? e : ++d;
      f[d] ? a.isPlaylistOver = !1 : (a.isPlaylistOver = !0, d = 0);
      e = f[d];
      !e || !(2 <= v ? 0 : a.isPlaylistOver ? Ca(c) || c-- : 1) || a.isError() && a.getVideo().getAttribute("src") === e.file ? (q(a.getWrapper()).addClass("orp-isOverPlaylist"), c = 0, l = !0) : (a.isError() || (v = 0), a.currentTime(0), m && m.find('[data-playlist-id\x3d"' + d + '"]').addClass("orp-is-playing"), b.file = e.file, b.tracks = e.tracks, g.load(b));
    };
    a.one(x.beforePlay, function () {
      function b(a) {
        return function () {
          n.next(a);
          return !1;
        };
      }
      function c(a) {
        if (a) {
          var b = new Date(0);
          b.setSeconds(a);
          return 3600 <= a ? b.toISOString().substr(11, 8) : b.toISOString().substr(14, 5);
        }
      }
      q(a.getWrapper()).addClass("orp-isPlaylist");
      var l = q(".orp-lp-controls-wrapper", q(a.getWrapper()));
      l.append(p);
      p.append('\x3cdiv class\x3d"orp-c-playlist-head"\x3e\x3cdiv class\x3d"orp-c-playlist-count"\x3e' + (d + 1 + "/" + f.length) + '\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-name"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-close"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-body"\x3e\x3c/div\x3e');
      p.find(".orp-c-playlist-name").text(e.name);
      m = q(".orp-c-playlist-body", p);
      f.forEach(function (a, d) {
        var l = q('\x3cdiv class\x3d"orp-c-playlist-item" data-playlist-id\x3d"' + d + '"\x3e\x3cdiv class\x3d"orp-c-playlist-it-poster"\x3e\x3cdiv class\x3d"orp-c-playlist-it-time"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-it-name"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-c-playlist-it-description"\x3e\x3c/div\x3e\x3c/div\x3e');
        0 === d && l.addClass("orp-is-playing");
        a.image && l.find(".orp-c-playlist-it-poster").css("background-image", "url(" + a.image + ")").attr("alt", a.title);
        a.duration && l.find(".orp-c-playlist-it-time").css("display", "block").text(c(~~a.duration));
        l.find(".orp-c-playlist-it-name").text(a.title);
        l.find(".orp-c-playlist-it-description").text(a.description);
        l.click(b(a.id));
        m.append(l);
      });
      var g = p.find(".orp-c-playlist-count"),
        v = q('\x3cdiv class\x3d"orp-ctrl orp-c-playlist"\x3e\x3c/div\x3e');
      v.click(function () {
        g.text(d + 1 + "/" + f.length);
        p.show();
        (r = a.isPaused()) || a.pause();
      });
      l.find(".orp-ctrls").append(v);
      p.find(".orp-c-playlist-close").click(function () {
        p.hide();
        r || a.play();
      });
    });
    a.on("error", function () {
      v++;
    });
  }
  function Fb(a) {
    function b(b, d) {
      e("AdError");
      b && A.log(b);
      a.trigger(x.adError, d || b + "");
    }
    function g() {
      d || setTimeout(function () {
        a.trigger(x.adImpression);
      }, 1);
      d = !0;
    }
    function e(a) {
      A.log("tag, event: " + p + ", " + a);
    }
    var n, f, p, d;
    this.setVastTracker = function (a) {
      n = a;
    };
    this.getVastTracker = function () {
      return n;
    };
    this.setAdvertisingOptions = function (a) {
      p = (f = a) && f.tag ? f.tag.tagId || f.tag.url.partnerId && JSON.stringify(f.tag.url) || f.tag.url : "noAdvOptsTag";
    };
    this.onAdLoaded = function () {
      A.event(A.types.loaded, f);
      e("AdLoaded");
      a.trigger(x.adLoaded);
      d = !1;
    };
    this.onAdStarted = function () {
      e("AdStarted");
      a.trigger(x.adStarted);
    };
    this.onAdImpression = function () {
      A.event(A.types.impression, f);
      n && n.load();
      e("AdImpression");
      g();
    };
    this.onAdPaused = function () {
      n && n.setPaused(!0);
      a.trigger(x.adPaused);
      e("AdPaused");
    };
    this.onAdUserClose = function () {
      n && n.close();
      a.trigger(x.adUserClose);
      e("onAdUserClose");
    };
    this.onAdPlaying = function () {
      n && n.setPaused(!1);
      a.trigger(x.adResumed);
      e("AdPlaying");
    };
    this.onAdStopped = function () {
      n && n.stop();
      e("AdStopped");
      a.trigger(x.adStopped);
    };
    this.onAdSkipped = function () {
      n && n.skip();
      e("AdSkipped");
      a.trigger(x.adSkipped);
    };
    this.onAdCompleted = function () {
      n && n.complete();
      e("AdCompleted");
      a.trigger(x.adCurrentPercent, 100);
      a.trigger(x.adCompleted);
    };
    this.onAdSizeChange = function (b) {
      n && void 0 !== b && n.setFullscreen(b);
      e("AdSizeChange to: new dimensions");
      a.trigger(x.adSizeChange);
    };
    this.onAdSkippableStateChange = function () {
      e("AdSkippableStateChange");
      a.trigger(x.adSkippableStateChange);
    };
    this.onAdDurationChange = function () {
      e("AdDurationChange");
    };
    this.onAdVolumeChange = function (b) {
      n && b && n.setMuted(0 === b);
      e("AdVolumeChange: " + b);
      a.trigger(x.adVolumeChange);
    };
    this.onAdClickThru = function (b, d, g) {
      A.event(A.types.click, f);
      n && n.click();
      a.trigger(x.adClickThru);
      e("AdClickThru " + b + " " + d + " " + g);
      b && g && window.open(b);
    };
    this.onAdError = function (a, d) {
      a = a || "";
      d && d.message && (a = a + " | " + d.message);
      n && n.errorWithCode(a);
      b(d, a);
    };
    this.onAdErrorStatic = b;
    this.onAdTimeUpdate = function (a, b) {
      n && (b && 0 < b && n.assetDuration !== b && n.setDuration(b), n.setProgress(a));
    };
    this.onProgressPercent = function (b) {
      n && n.setProgressPercent(b);
      e("onProgress " + b + "%");
      a.trigger(x.adCurrentPercent, b);
    };
    this.onAdLog = e;
  }
  function Ac(a, b, g) {
    function e(a) {
      if (p.getVastTracker()) {
        if (a = a || p.getVastTracker().clickThroughURLTemplate) {
          p.getVastTracker().setProgress(b.currentTime());
          var c = Ha.util.resolveURLTemplates([a], {
            CACHEBUSTER: Math.round(1E10 * Math.random()),
            CONTENTPLAYHEAD: p.getVastTracker().progressFormated()
          })[0];
        }
        return c;
      }
    }
    var n = new Xa(),
      f = this,
      p = a.getAdTracker(),
      d = function (a) {
        var b = -1,
          c = p.getVastTracker();
        c && (b = c.skipDelay);
        if (null == a.skipOffset && 0 > b) return -1;
        a = ~~a.skipOffset;
        b = ~~b;
        var d = Math.max(b, a);
        if (0 > d) return -1;
        d = 0 < a && a < b ? a : d;
        c && c.setSkipDelay(d);
        return d;
      }(g);
    this.getType = function () {
      return "vast";
    };
    this.initAd = function () {
      p.onAdLog("initAd");
      init();
    };
    this.resizeAd = function () {
      p.onAdLog("resizeAd");
      setTimeout(function () {
        p.onAdSizeChange();
      }, 1);
    };
    this.startAd = function () {
      p.onAdLog("startAd");
      p.onAdStarted();
      p.onAdImpression();
      b.promisePlay();
    };
    this.stopAd = function () {
      p.onAdLog("stopAd");
      p.onAdStopped();
    };
    this.pauseAd = function () {
      p.onAdLog("pauseAd");
      b.pause();
    };
    this.resumeAd = function () {
      p.onAdLog("resumeAd");
      b.promisePlay();
    };
    this.skipAd = function () {
      f.destroy();
      p.onAdLog("skipAd");
      p.onAdSkipped();
    };
    this.clickAd = function () {
      f.pauseAd();
      p.onAdClickThru(e(), void 0, !0);
    };
    this.volume = function (a) {
      if (void 0 !== a) {
        var c = 0 === a;
        b.volume(a);
        b.muted(c);
      }
      return b.muted() ? 0 : b.volume();
    };
    this.mute = function (a) {
      b.trigger("mute", a);
    };
    this.muteByHover = function (c) {
      var d = c ? 0 : a.defaultVolume(),
        e = !b.isPaused();
      c || b.volume() || b.volume(d);
      b.muted(c);
      e && b.play();
    };
    this.getAdDuration = function () {
      return b.duration();
    };
    this.getAdRemainingTime = function () {
      return b.duration() - b.currentTime();
    };
    this.getAdSkippableState = function () {
      return -1 < d && b.currentTime() > d;
    };
    this.skipOffset = function () {
      return d;
    };
    this.destroy = function () {
      b.offAll();
      b.pause();
      n.offAll();
      b.destroy();
    };
    this.isMuted = function () {
      return b.muted() || 0 === b.volume();
    };
    this.isPaused = function () {
      return b.isPaused();
    };
    this.onMute = function (a) {
      b.on("mute", a);
    };
    this.onAdTimeUpdate = function (a) {
      b.on("timeupdate", function () {
        a(b.currentTime());
      });
    };
    (function () {
      b.one("canplay", f.startAd);
      b.on("durationchange", p.onAdDurationChange);
      b.on("ended", function () {
        p.onAdCompleted();
        setTimeout(p.onAdStopped, 1);
      });
      b.on("volumechange", function () {
        p.onAdVolumeChange(b.volume());
      });
      b.on("error", p.onAdError);
      b.on("loadedmetadata", p.onAdLoaded);
      b.on("pause", p.onAdPaused);
      b.on("play", p.onAdPlaying);
      b.on("skipDelay", function () {
        p.onAdSkipped(b.duration());
      });
      b.on("fullscreenChange", p.onAdSizeChange);
    })();
  }
  function Gb(a, b, g) {
    function e(a) {
      return function () {
        L.clear();
        n(a);
      };
    }
    function n(a) {
      d || K.init(function () {
        B.pauseAd();
        Q.init(l.onAdStopped, 50);
      }, a || 100);
    }
    function f() {
      L.clear();
      K.clear();
      Q.clear();
    }
    function p(a) {
      var b,
        c = this;
      this.init = function (d, e) {
        c.clear();
        b = setTimeout(function () {
          l.onAdLog(a);
          d();
        }, e);
      };
      this.clear = function () {
        b && clearTimeout(b);
        b = 0;
      };
    }
    var d,
      c,
      l,
      r,
      m = new Xa(),
      v = !1,
      w = !1,
      z = !1,
      u,
      E,
      C,
      q = !0,
      I = !1,
      G = !1,
      F = !0,
      J = !1,
      D = U,
      B = this;
    this.getPlayerListeners = function () {
      return m;
    };
    this.adStop = function () {
      q = !0;
      f();
    };
    this.skipAd = function () {
      c && c.skipAd();
    };
    this.setAdPlayerWrapper = function (a) {
      c = a;
    };
    this.setAdTracker = function (a) {
      l = a;
    };
    this.getAdTracker = function () {
      return l;
    };
    this.setSkipForceStop = function (a) {
      d = a;
    };
    this.sizeController = function (a) {
      a && (r = a);
      return r;
    };
    this.getAdDuration = function () {
      if (c) return c.getAdDuration();
    };
    this.getAdRemainingTime = function () {
      if (c) return c.getAdRemainingTime();
    };
    this.skipOffset = function () {
      if (c) return c.skipOffset();
    };
    this.getAdSkippableState = function () {
      if (c) return c.getAdSkippableState();
    };
    this.resize = function (d, e, g) {
      m.off(x.adLoaded, D);
      D = function () {
        c && c.resizeAd(d, e, g);
        b.calcFit();
        a && a.calcFit();
      };
      m.one(x.adLoaded, D);
      D();
    };
    this.isFullscreen = function () {
      return b.isFullscreen();
    };
    this.initAdPlayer = function () {
      a && (a.play(), a.pause());
    };
    this.isUserClicked = function (a) {
      void 0 !== a && (G = a);
      return G;
    };
    this.isPaused = function () {
      if (c) return c.isPaused();
    };
    this.pauseAd = function () {
      q || c && (c.isPaused() || c.pauseAd());
    };
    this.resumeAd = function () {
      q || c && c.isPaused() && c.resumeAd();
    };
    this.muteByHover = function (a) {
      if (!q) {
        var b = a ? 0 : B.defaultVolume();
        c && (B.isVast() ? c.muteByHover(a) : c.volume(b));
      }
    };
    this.isMuted = function () {
      if (c) return c.isMuted();
    };
    this.mute = function (a) {
      B.isVast() ? c.mute(a) : m.trigger("mute", a);
    };
    this.onMute = function (a) {
      if (B.isVast()) c.onMute(a);else m.on("mute", a);
    };
    this.defaultVolume = function () {
      return b.volume() || 1;
    };
    this.volume = function (a) {
      if (c) return void 0 !== a && c.volume(a), c.volume();
    };
    this.destroy = function () {
      d = !1;
      f();
      l.setVastTracker(null);
      c && (c.destroy(), c = null);
    };
    this.isVpaid = function () {
      return c && "vpaid" === c.getType();
    };
    this.isLikeIma = function () {
      return c && ("ima" === c.getType() || "youtube" === c.getType() || "fw" === c.getType() || "yandex" === c.getType());
    };
    this.isIma = function () {
      return c && "ima" === c.getType();
    };
    this.isYa = function () {
      return c && "yandex" === c.getType();
    };
    this.isYt = function () {
      return c && "youtube" === c.getType();
    };
    this.isFw = function () {
      return c && "fw" === c.getType();
    };
    this.isVast = function () {
      return c && "vast" === c.getType();
    };
    this.forceFile = function (a) {
      void 0 !== a && (F = a);
      return F;
    };
    this.adType = function (a) {
      void 0 !== a && (u = 0 === a ? "PRE" : 0 < a ? "MID" : -1 === a ? "POST" : "X");
      return u;
    };
    this.adVideoType = function (a) {
      void 0 !== a && (E = a);
      return E;
    };
    this.soundByHover = function (a) {
      void 0 !== a && (w = a) && m.trigger(x.addSoundByHover);
      return w;
    };
    this.volumeChanged = function (a) {
      void 0 !== a && (v = a);
      return v;
    };
    this.adStart = function () {
      C || K.init(B.adClose, g);
      m.trigger(x.adStart);
    };
    this.onAdStart = function (a, b) {
      m.on(x.adStart, a, b);
    };
    this.onAdLoaded = function (a, b) {
      m.on(x.adLoaded, a, b);
    };
    this.onAdStarted = function (a, b) {
      m.on(x.adStarted, a, b);
    };
    this.onAdError = function (a, b) {
      m.on(x.adError, a, b);
    };
    this.onAdSkipped = function (a, b) {
      m.on(x.adSkipped, a, b);
    };
    this.onAdStopped = function (a, b) {
      m.on(x.adStopped, a, b);
    };
    this.onAdCompleted = function (a, b) {
      m.on(x.adCompleted, a, b);
    };
    this.onAdTimeUpdate = function (a) {
      m.on("timeupdate", a);
    };
    this.offAdTimeUpdate = function (a) {
      m.off("timeupdate", a);
    };
    this.onAdCurrentPercent = function (a) {
      m.on(x.adCurrentPercent, a);
    };
    this.onAddSoundByHover = function (a) {
      m.on(x.addSoundByHover, a);
    };
    this.onAddImpression = function (a) {
      m.on(x.adImpression, a);
    };
    this.getWrapper = function () {
      return a && a.getWrapper();
    };
    this.onAdPaused = function (a, b) {
      m.on(x.adPaused, a, b);
    };
    this.onAdResumed = function (a, b) {
      m.on(x.adResumed, a, b);
    };
    this.isUserClose = function () {
      return z;
    };
    this.adUserClose = function () {
      z = !0;
      l && l.onAdUserClose();
      B.adClose();
    };
    this.videoUserClose = function () {
      z = !0;
      B.adClose();
    };
    this.adClose = function () {
      J || (c ? (n(), c.stopAd()) : B.globalStop());
    };
    this.onAdVolumeChange = function (a, b) {
      m.on(x.adVolumeChange, a, b);
    };
    this.clickAd = function () {
      c && c.clickAd();
    };
    this.onAdClicked = function (a) {
      m.on(x.adClickThru, a);
    };
    this.toggleFullScreened = function () {
      b.isFullscreen() ? b.fullscreenClose() : b.fullscreenOpen();
    };
    this.forceShow = function () {
      m.trigger(x.forceShow);
    };
    this.onForceShow = function (a, b) {
      m.on(x.forceShow, a, b);
    };
    this.isAdStarted = function () {
      return I;
    };
    this.globalShow = function () {
      m.trigger(x.globalShowed);
    };
    this.onGlobalShowed = function (a, b) {
      m.on(x.globalShowed, a, b);
    };
    this.globalLoad = function () {
      l.onAdLog("globalLoad");
      m.trigger(x.globalLoaded);
    };
    this.globalStop = function () {
      m.trigger(x.beforeGlobalStopped);
      l.onAdLog("globalStopped");
      J = !0;
      setTimeout(function () {
        m.trigger(x.globalStopped);
      }, 200);
    };
    this.onGlobalLoaded = function (a) {
      m.on(x.globalLoaded, a);
    };
    this.onGlobalStopped = function (a) {
      m.on(x.globalStopped, a);
    };
    this.onBeforeGlobalStop = function (a) {
      m.on(x.beforeGlobalStopped, a);
    };
    this.setDisableAdWaitingTimer = function (a) {
      C = a;
    };
    var N = function () {
      I && (w = !1, b.off("volumechange", N));
      v = !0;
    };
    b.on("volumechange", N);
    B.onAdStarted(function () {
      q = !1;
      I = !0;
      f();
    });
    B.onAdClicked(B.pauseAd);
    B.onAdError(e());
    B.onAdSkipped(e());
    B.onAdCompleted(function () {
      B.isVpaid() && e(1E3)();
    });
    var L = new function () {
      var a;
      this.init = function () {
        a || (a = setInterval(function () {
          var a = B.getAdDuration(),
            b = B.getAdRemainingTime(),
            c = -1;
          0 < a && 0 <= b && (c = a - b);
          m.trigger("timeupdate", c);
          l.onAdTimeUpdate(c, a);
        }, 100));
      };
      this.clear = function () {
        a && clearInterval(a);
        a = 0;
      };
    }();
    var K = new p("waiting timeout");
    var Q = new p("stop timeout");
    B.onAdStarted(L.init);
    B.onAdResumed(L.init);
    B.onAdLoaded(L.clear);
    B.onAdPaused(L.clear);
    B.onAdCompleted(L.clear);
    B.onAdStopped(f);
    B.onGlobalStopped(f);
  }
  function Bc(a, b, g) {
    function e(a) {
      b.countdown && (0 > a ? N.hide() : N.show().text(Ta(a)));
    }
    function n() {
      f(a.isMuted() ? a.defaultVolume() : 0);
    }
    function f(b) {
      a.isUserClicked(!0);
      a.volume(b);
      r();
      aa.hide();
      a.volumeChanged(!0);
    }
    function p() {
      H = !0;
    }
    function d() {
      H = !1;
    }
    function c() {
      H || a.muteByHover(!0);
    }
    function l() {
      H || a.muteByHover(!1);
    }
    function r() {
      a.soundByHover() && (a.soundByHover(!1), A.log("adSoundByHoverOff"), G.off("mouseenter", l).off("mouseleave", c), x.off("mouseenter", p).off("mouseleave", d));
    }
    function m() {
      function b(a) {
        0 > a && (a = 0);
        var b = a;
        .5 < b ? c.removeClass("orp-vol-mid orp-vol-off") : 0 === b ? c.removeClass("orp-vol-mid").addClass("orp-vol-off") : c.removeClass("orp-vol-off").addClass("orp-vol-mid");
        d.width(100 * a + "%");
      }
      var c = C(".orp-c-vol"),
        d = C(".orp-c-vol-curr"),
        e;
      b(a.isMuted() ? a.defaultVolume() : 0);
      Cb(C(".orp-c-vol-changer"), d, function () {
        c.addClass("orp-isSelected");
      }, function (a) {
        f(a);
      }, function (a) {
        f(a);
        a && (e = a);
        c.removeClass("orp-isSelected");
      });
      C(".orp-c-vol-toggle").click(function () {
        c.hasClass("orp-vol-off") ? f(e || a.defaultVolume()) : a.volume(0);
      });
      a.onAdVolumeChange(function () {
        b(a.volume());
      });
    }
    function v() {
      C(".orp-ctrls .orp-c-play").click(function () {
        a.isUserClicked(!0);
        G.hasClass("orp-isPlaying") ? a.pauseAd() : a.resumeAd();
      });
    }
    function w() {
      sa.click(function () {
        a.toggleFullScreened();
      });
    }
    function z() {
      function b(c) {
        0 > a.skipOffset() ? a.offAdTimeUpdate(b) : (K.show().unbind("click"), c = Math.ceil(a.skipOffset() - c), 0 < c ? K.addClass("orp-vast-skip-button").text(O("$$$You can skip this ad in$$$") + " " + c).addClass("orp-counter") : (a.offAdTimeUpdate(b), a.getAdTracker().onAdSkippableStateChange(), K.text(O("$$$Skip Ad$$$")).removeClass("orp-counter").addClass("orp-vast-skip-button"), K.unbind("click").click(function () {
          a.isUserClicked(!0);
          a.skipAd();
        })));
      }
      a.onAdTimeUpdate(b);
    }
    function u() {
      a.isVpaid() || a.isLikeIma() || (P.show(), P.unbind("click").click(function () {
        a.isUserClicked(!0);
        a.clickAd();
      }), g || Bb || (L.show(), L.unbind("click").click(function () {
        a.isUserClicked(!0);
        a.clickAd();
      })));
    }
    function E(a) {
      Ya.empty();
      a && (a.forEach(function (a) {
        var b = q("\x3ca\x3e\x3c/a\x3e");
        b.addClass("orp-control orp-social-" + a.type).attr("target", "_blank").attr("href", a.link);
        Ya.append(b);
      }), Ya.show().addClass("orp-length-" + a.length));
    }
    function C(a) {
      return G.find(a);
    }
    var H = !1,
      I = !1,
      G = q(a.getWrapper()),
      F = G.parents(".orp-light-player-wrapper"),
      J = !0;
    q(G).append(q('\x3cdiv class\x3d"orp-control orp-tap-unmute" style\x3d"display: none"\x3e' + O("$$$Tap to unmute$$$") + '\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-more" style\x3d"display: none"\x3e' + O("$$$Learn more$$$") + '\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-skip" style\x3d"display: none"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-close-bg" style\x3d"display: none;"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-close" style\x3d"display: none"\x3e\x3c/div\x3e' + fb(b) + '\x3cdiv class\x3d"orp-control orp-socials" style\x3d"display: none"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-timer" style\x3d"display: none"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-vol" style\x3d"display: none"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrls" style\x3d"display: none"\x3e\x3cdiv class\x3d"orp-ctrl orp-c-play"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-vol"\x3e\x3cdiv class\x3d"orp-c-vol-toggle"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-vol-changer"\x3e\x3cdiv class\x3d"orp-c-vol-curr"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-ctrl orp-c-screen" style\x3d"display: none"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-progress-bg" style\x3d"display: none"\x3e\x3cdiv class\x3d"orp-control orp-progress"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-ctrl orp-c-play orp-c-play-big" style\x3d"display: none"\x3e\x3ci\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-init orp-init-placeholder"\x3e\x3cdiv class\x3d"orp-init-button"\x3e\x3cdiv class\x3d"orp-lp-loader-dots"\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-0"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-1"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-2"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-3"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-4"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-5"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-6"\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-lp-loader-dot orp-lp-loader-dot-7"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"orp-control orp-blocker orp-vast-blocker" style\x3d"display: none"\x3e\x3c/div\x3e'));
    var D = C(".orp-progress-bg"),
      B = C(".orp-progress"),
      N = C(".orp-timer"),
      L = C(".orp-more"),
      K = C(".orp-skip"),
      Q = C(".orp-c-play-big"),
      M = C(".orp-vol"),
      T = C(".orp-close"),
      V = C(".orp-close-bg"),
      P = C(".orp-blocker"),
      x = C(".orp-close,.orp-vol,.orp-c-play i,.orp-tap-unmute"),
      pa = C(".orp-title"),
      aa = C(".orp-tap-unmute"),
      Ya = C(".orp-socials"),
      Ga = C(".orp-ctrls"),
      sa = C(".orp-c-screen");
    (function () {
      if (!g) a.onAdTimeUpdate(function (b) {
        if (0 > b) D.hide(), e(-1);else {
          var c = a.getAdDuration(),
            d = 0;
          c && (d = 100 * b / c, e(c - b));
          I || (D.show(), B.width(d + "%"));
        }
      });
    })();
    (function () {
      function b() {
        A.log("set fnSoundByHover");
        G.on("mouseenter", l).on("mouseleave", c).one("touchstart", function () {
          r();
        });
        x.on("mouseenter", p).on("mouseleave", d);
      }
      g || (G.toggleClass("orp-is-muted", a.isMuted()), a.onAdVolumeChange(function () {
        G.toggleClass("orp-is-muted", a.isMuted());
      }), M.click(n), a.soundByHover() ? b() : a.onAddSoundByHover(b));
    })();
    (function () {
      if (b.closeButton || b.stickyCloseButton) b.stickyCloseButton && F.addClass("orp-sticky-close"), b.closeButton && setTimeout(function () {
        T.show();
        V.show();
      }, 1E3 * ~~b.closeDelay), T.click(a.adUserClose);
    })();
    (function () {
      Q.click(function () {
        a.isUserClicked(!0);
        a.resumeAd();
      });
    })();
    (function () {
      b.tapToUnmute && aa.click(function () {
        f(a.defaultVolume());
      });
    })();
    b.controls && (m(), v(), w());
    a.onAdResumed(function () {
      G.addClass("orp-isPlaying");
      Q.hide();
    });
    a.onAdPaused(function () {
      G.removeClass("orp-isPlaying");
      Q.show();
    });
    this.init = function (c) {
      -1 < a.skipOffset() && K.show();
      u();
      z();
      E(c.tag.socialLinks);
      g || (I = a.isYa() || a.isVpaid() || a.isYt(), I || (b.barColor && B.css("background-color", b.barColor), D.show()));
      G.removeClass("orp-isOver").addClass("orp-isPlaying");
      G.toggleClass("orp-ima-container", a.isLikeIma() && !a.isFw() && !a.isYt());
      G.toggleClass("orp-ya-container", a.isYa());
      G.toggleClass("orp-yt-container", a.isYt());
      g || pa.show();
      g || a.isYa() || (b.tapToUnmute && a.adVideoType() && (!a.volumeChanged() || J) && a.isMuted() && aa.show(), a.adVideoType() && M.show(), b.controls && a.isIma() && (Ga.show(), M.hide(), G.addClass("orp-isControlsDisplay"), !Fa && "rewarded" !== b.type && sa.show(), W || Hb || G.addClass("orp-isHiddenControls"), Hb && G.addClass("orp-ipad-os")), G.toggleClass("orp-is-muted", a.isMuted()), J = !1);
    };
    this.reset = function () {
      D.hide();
      B.width("0");
      e(-1);
      L.hide();
      K.hide().removeClass("orp-vast-skip-button");
      Q.hide();
      P.hide();
      M.hide();
      pa.hide();
      aa.hide();
      Ya.hide();
      Ga.hide();
      G.removeClass("orp-isControlsDisplay");
    };
    this.off = function () {
      r();
    };
    a.onGlobalStopped(function () {
      G.removeClass("orp-isPlaying").addClass("orp-isOver");
    });
    (function () {
      function b() {
        d = setTimeout(function () {
          G.addClass("orp-isHiddenControls");
        }, 3E3);
      }
      function c(a) {
        a ? G.hasClass("orp-isPlaying") && b() : (G.removeClass("orp-isHiddenControls"), d && clearTimeout(d), d = 0);
      }
      var d;
      W || (G.mousemove(function () {
        c(!1);
      }), G.mouseleave(function () {
        c(!0);
      }), C(".orp-ctrls").mouseenter(function () {
        c(!1);
      }), a.onAdPaused(function () {
        c(!1);
      }));
    })();
  }
  function Zb(a, b, g, e) {
    function n() {
      B.isLikeIma() || B.destroy();
      B.isAdStarted();
      (V || a.inStream()) && Q.sendOpportunity();
      if (Q.tryReplayAd()) Q.isShown() && (e(!0), H());else if (B.isUserClose() || T) H(), z();else {
        var c = Q.isMidRoll();
        if (!a.inStream() && !c) {
          B.forceFile(!!b.src() && (g.forceFile || Q.isAdStartedLoop() && P));
          if (!B.forceFile()) {
            z();
            return;
          }
          g.advertising.controls || b.trigger(x.hideScreen);
          b.preload("metadata");
        }
        c && Q.isMidRoll(!1);
        H();
        E(f);
      }
    }
    function f() {
      P = !1;
      B.adStop();
      b.src() || b.getVideo().error || b.trigger("error");
      !a.inStream() && B.isUserClose() || !b.src() ? B.globalStop() : (void 0 !== F && J !== F && (b.muted(J), F = void 0), b.ended() || b.getVideo().error || (b.one("canplay", B.globalShow), pa && (b.off("timeupdate", p), b.on("timeupdate", p), pa = !1), Qa(function () {
        b.play();
      }, Ia)));
    }
    function p() {
      0 < b.currentTime() && (b.off("timeupdate", p), A.event(A.types.content, g.advertising));
    }
    function d() {
      B.onAdLoaded(function () {
        B.volume(J ? 0 : D);
        J === B.isMuted() || B.mute(J);
        void 0 === F && (F = J);
      }, !0);
      B.onAdStart(c);
      B.onForceShow(C);
      B.onAdStarted(function () {
        b.isPaused() || b.pause();
        Q.started();
        var a = Q.getAdOptions();
        N.init(a);
        G.calcFit();
        !P && a.tag.file && (P = !0);
        K.start(a);
        C();
        if (B.isLikeIma()) {
          a = B.isFw();
          var c = B.isYa(),
            d = B.isYt();
          b.trigger("adShow");
          A.log(a && "fw adStart" || c && "ya adStart" || d && "yt adStart" || "ima adStart");
          d || !b.muted() && !B.isUserClicked() || (B.mute(b.muted()), B.volume(b.muted() ? 0 : b.volume() || 1));
          var e = Q.getAdOptions();
          A.event(A.types.started, e, a && "FW" || c && "YA" || d && "YT" || "IMA");
          b.pause();
        } else a = Q.getAdOptions(), A.event(A.types.started, a, "VAST");
      });
      if (g.advertising[O("iu")]) B.onAddImpression(l);else B.onAdStarted(l);
      B.onAdSkipped(r);
      B.onAdCompleted(r);
      B.onAdStopped(function () {
        r();
        Q.adNext();
      });
      B.onGlobalStopped(N.off);
    }
    function c() {
      V = !0;
      K.start(Q.getAdOptions());
      Q.sendOpportunity();
      Q.start();
    }
    function l() {
      var a = Q.getAdOptions();
      kb(a);
      lb(a);
    }
    function r() {
      -1 < B.volume() && (J = B.isMuted(), D = B.volume());
      N.reset();
    }
    function m() {
      function a() {
        if (!B.isAdStarted()) {
          var a = g.advertising.passback;
          q.isFunction(a) ? a() : (a = window[a], q.isFunction(a) && a());
        }
      }
      if (g.advertising && g.advertising.passback) B.onGlobalStopped(a);
    }
    function v() {
      b.one(x.beforeComplete, function () {
        b.isPlaylist ? Qa(z, !0) : Q.inProgress() ? (T = !0, e(!0)) : M.post() ? (T = !0, e(!0), Q.load(ha.POST)) : Q.postRoll() ? T = !0 : Qa(z, !0);
      });
    }
    function w() {
      function a() {
        M.checkMid(b.currentTime()) && (Q.load(ha.MID), Q.isMidRoll(!0));
      }
      b.one("canplay", function () {
        if (M.createMid(b.duration())) b.on("timeupdate", a);
      });
    }
    function z() {
      var a;
      if (a = !B.isUserClose()) a = b.isPlaylist && !b.isPlaylistOver ? !0 : Ca(ta) || ta--;
      a && Q.isMaxFailOk(2) && !b.isError() ? (pa = !0, T = !1, b.muted() && !G.muted() && (J = !0, G.muted(J)), b.src() && ((mb || b.isYTContent) && b.pause(), b.currentTime(0)), e(!0), H(), v(), u()) : (T = !1, E(B.globalStop));
    }
    function u() {
      M.refreshMid();
      M.pre() ? Q.load(ha.PRE) : f();
    }
    function E(a) {
      V ? (Q.sendOpportunity(), a()) : (B.onAdStart(a, !0), B.globalLoad());
    }
    function C() {
      I.addClass("orp-jsShow");
    }
    function H() {
      I.removeClass("orp-jsShow");
    }
    g = q.extend(!0, {}, g);
    var I = q('\x3cdiv class\x3d"orp-proVideo orp-controls-wrapper"\x3e\x3c/div\x3e');
    q(b.getWrapper()).parent().append(I);
    var G,
      F,
      J = !0,
      D,
      B,
      N,
      L,
      K,
      Q,
      M,
      T = !1,
      V,
      P = !1,
      ta = 0,
      pa = !0;
    this.soundBehavior = function (a) {
      J = a;
      D = b.volume();
      W && b.volume(1);
      J !== b.muted() && b.muted(J);
      G && (J !== G.muted() && G.muted(J), G.volume(J ? 0 : D), G.muted(J));
    };
    this.build = function (c) {
      g.advertising && g.advertising.tag && g.advertising.tag.length ? (ta = g.advertising.lifecycleLoop || 0, Za.prepare(g.advertising), g.file && !a.inStream() && (g.autoStart && b.preload("none"), b.src(ja(g.file))), G = c(I, !1), b.on(x.beforePlay, u), v(), w(), B = new Gb(G, b, g.advertising.creativeTimeout), L = new Fb(B.getPlayerListeners()), B.setAdTracker(L), c = g.advertising ? q.extend({}, {
        tapToUnmute: g.tapToUnmute,
        type: g.type
      }, g.advertising) : {}, N = new Bc(B, c, a.isAdapter()), K = new Cc(B), Q = new Dc(a, b, G, B, n, g, f), M = new Ec(c), d()) : (B = new Gb(G, b, null), L = new Fb(B.getPlayerListeners()), B.setAdTracker(L), b.on(x.beforePlay, f), b.one(x.beforeComplete, B.globalStop));
      m();
      return B;
    };
  }
  function Dc(a, b, g, e, n, f, p) {
    function d(c) {
      function d() {
        var a = q.extend(!0, {}, f.advertising);
        a._pAdType = aa;
        a.tag = f.advertising.tag.filter(function (a) {
          return (!a.breakScheduleType || !0 === a[pa]) && !(c && !1 === a[c]) && !(M && !1 === a.replay) && !(a.shown && !1 === a.repeat) && !Sa(a.vtId, a) && !(!x && "googima" === a.client);
        });
        return a;
      }
      N = !1;
      if (0 === d().tag.length) var n = !1;else G = new Fc(function (a) {
        return "googima" === a.tag.client ? new Gc(e, b, g, a) : "bidding" === a.tag.type ? new Hc(e, a) : "freewheel" === a.tag.type ? new Ic(e, b, g, a) : "yandex" === a.tag.type ? new Jc(e, b, g, a) : "youtube" === a.tag.type ? new Kc(e, b, g, a) : new nb(e, a);
      }, function (a) {
        B = !1;
        e.setDisableAdWaitingTimer(!0 === a.isYt);
        if (a.isIma || "freewheel" === a.getOptions().tag.type || a.isYa || a.isYt) {
          J = a;
          var b = v;
        } else "bidding" === a.getOptions().tag.type && (a = a.getClient()), F = a, b = m;
        D.setAdvertisingOptions(a.getOptions());
        b();
      }, l, d(), function (b, c) {
        if ("yandex" === b.type || "youtube" === b.type) return c();
        var d = b.realUrl;
        d || (d = b.url, b.realUrl = d);
        Oa(d, e.sizeController().height(), e.sizeController().width(), f.appParams, a.getElement(), f.advertising, function (a) {
          b.url = a;
          c();
        });
      }), G.start(), n = !0;
      return n;
    }
    function c() {
      if (J || F) return (J || F).getOptions();
    }
    function l() {
      H();
      N || Q++;
      if (!N && 0 < L) {
        L--;
        var a = d("rotation");
      } else a = void 0;
      a || (!e.isUserClose() && (Ca(K) || 0 < K) && r() ? (Ca(K) || K--, E(), a = d()) : a = void 0);
      a || n();
    }
    function r(a) {
      return Q < 10 * f.advertising.tag.length * (a || 1);
    }
    function m() {
      e.destroy();
      e.adType(0);
      var c = F && F.getNext(!B, N);
      B = !1;
      if (c || N) {
        if (!c || b.isError()) n();else {
          b.trigger("adShow");
          D.setVastTracker(new Ha.tracker(c.ad, c.creative));
          var d = new Lc(a, e, c.ad, c.creative, D);
          T = w(function () {
            d.init(b, p, F.getOptions(), z);
          });
          e.globalLoad();
        }
      } else H(), G.tryNext();
    }
    function v() {
      T = function () {
        J.load(w(J.start));
      };
      e.globalLoad();
    }
    function w(c) {
      return function () {
        if (!b.isError() && !a.d()) if (A.log("call start"), x || P || b.ended() || !b.isPaused() || N) c();else b.one("play", c);
      };
    }
    function z(a) {
      g.src(a);
      return g;
    }
    function u(a) {
      E();
      f.advertising && f.advertising.tag.length && (K = C(a), f.advertising.tag.forEach(function (a) {
        delete a.shown;
      }));
      P = !1;
    }
    function E() {
      f.advertising && f.advertising.tag.length && (L = f.advertising.rotation || 0);
    }
    function C(a) {
      var b = f.advertising.replay || 0,
        c = function () {
          return a && f.advertising.breakSchedule && f.advertising.breakSchedule.find(function (b) {
            return a === b.type;
          });
        }();
      return c && void 0 !== c.replay ? c.replay : b;
    }
    function H() {
      e.destroy();
      J && J.destroy();
      J = F = null;
    }
    function I(a) {
      return function () {
        V = !1;
        a();
      };
    }
    n = I(n);
    p = I(p);
    var G,
      F,
      J,
      D = e.getAdTracker(),
      B = !1,
      N = !1,
      L = 0,
      K = 0,
      Q = 0,
      M = !1,
      T,
      V = !1,
      P = !1,
      x = !1,
      pa = ha.PRE,
      aa,
      O = !1;
    u(ha.PRE);
    this.isMidRoll = function (a) {
      void 0 !== a && (O = a);
      return O;
    };
    this.postRoll = function () {
      return J && J.startPostRoll();
    };
    this.sendOpportunity = function () {
      G && G.sendOpportunity();
      e.setSkipForceStop(!0);
      G && G.callErrors(e.getAdTracker().onAdErrorStatic);
      e.setSkipForceStop(!1);
    };
    this.inProgress = function () {
      return V;
    };
    this.load = function (a) {
      V || (pa = a, x = pa === ha.PRE, aa = a, V = !0, T = N = B = M = !1, u(pa), d() || n());
    };
    this.adNext = function () {
      N && (e.isUserClose() || J) ? n() : J ? (H(), G.tryNext()) : m();
    };
    this.tryReplayAd = function () {
      if (!e.isUserClose() && (Ca(K) || 0 < K) && r()) return l(), !0;
    };
    this.getAdOptions = c;
    this.start = function () {
      T && T();
      T = !1;
    };
    this.started = function () {
      Q = 0;
      P = M = B = N = !0;
      c().tag.shown = !0;
    };
    this.isMaxFailOk = r;
    this.isAdStartedLoop = function () {
      return M;
    };
    this.isShown = function () {
      return P;
    };
  }
  function Ec(a) {
    function b(a) {
      return n && n.find(function (b) {
        return a === b.type;
      });
    }
    function g(a) {
      function c(a) {
        if (!a) return [];
        var b = a.split(/, +| ?, ?| +/);
        b.forEach(function (a, c) {
          b[c] = ~~a;
        });
        return b;
      }
      var d = b(ha.MID);
      if (!a || !d) return [];
      var e = [];
      d.startOn && (e = e.concat(c(d.startOn)));
      d.startOnPercent && c(d.startOnPercent).forEach(function (b) {
        e.push(Math.floor(a * b / 100));
      });
      e.sort(function (a, b) {
        return a - b;
      });
      return e = e.filter(function (b, c, d) {
        return d.indexOf(b) === c && b <= a;
      });
    }
    function e(a) {
      function b(b) {
        c = -1;
        a.forEach(function (a, d) {
          -1 === c && a >= b && (c = d);
        });
      }
      var c = 0,
        d = 0;
      this.check = function (e) {
        d > e && b(e);
        d = e;
        if (-1 === c) return !1;
        if (e >= a[c]) return a.splice(c, 1), b(e), !0;
      };
    }
    var n = a.breakSchedule,
      f,
      p,
      d = this;
    this.pre = function () {
      return !n || !!b(ha.PRE);
    };
    this.post = function () {
      return !!b(ha.POST);
    };
    this.mid = function () {
      return !!b(ha.MID);
    };
    this.createMid = function (a) {
      p = a;
      a = g(a);
      if (a.length) return f = new e(a), !0;
    };
    this.refreshMid = function () {
      p && f && d.createMid(p);
    };
    this.checkMid = function (a) {
      return f && f.check(a);
    };
  }
  function Lc(a, b, g, e, n) {
    function f() {
      H && H.find(".orp-jsProElement").remove();
    }
    function p() {
      (function (a) {
        function d() {
          u.onclick = function () {
            if (b.isPaused()) b.resumeAd();else {
              n.onAdClickThru(a.nonlinearClickTrackingURLTemplates, null, null, adPlayed.currentTime());
              var d = c(n.getVastTracker(), a.nonlinearClickThroughURLTemplate);
              d && window.open(d, "_blank");
            }
          };
        }
        function e() {
          p = function (b) {
            void 0 === r ? z.off("expandedAd", p) : (0 < ~~a.expandedWidth && (v.width = b ? a.expandedWidth : a.width, r.style.width = b ? a.expandedWidth : a.width), 0 < ~~a.expandedHeight && (v.height = b ? a.expandedHeight : a.height));
          };
          z.on("fullscreenChange", p);
        }
        function g() {
          r.appendChild(I);
          I.onclick = function () {
            n.onAdUserClose();
            m();
          };
          setTimeout(function () {
            I.style.display = "block";
          }, 1E3 * ~~a.minSuggestedDuration);
        }
        function m() {
          "function" === typeof p && z.off("fullscreenChange", p);
          f();
        }
        if (void 0 !== a) {
          var l = !1,
            p;
          var r = document.createElement("div");
          r.className = "orp-jsProElement orp-nonlinear";
          var u = a.iframeResource ? document.createElement("iframe") : document.createElement("div");
          r.appendChild(u);
          var I = document.createElement("div");
          I.className = "orp-jsProElement orp-close";
          I.style.display = "none";
          0 < ~~a.width && (u.width = a.width, r.style.width = a.width);
          0 < ~~a.height && (u.height = a.height);
          0 < ~~a.expandedWidth && (l = !0, u.setAttribute("expandedWidth", a.expandedWidth));
          0 < ~~a.expandedHeight && (l = !0, u.setAttribute("expandedHeight", a.expandedHeight));
          0 < ~~a.minSuggestedDuration && u.setAttribute("minSuggestedDuration", a.minSuggestedDuration);
          u.setAttribute("scalable", !!a.scalable);
          u.setAttribute("maintainAspectRatio", !!a.maintainAspectRatio);
          if (a.nonlinearClickThroughURLTemplate) {
            d();
            var w = "cursor:pointer;";
          }
          u.setAttribute("style", w);
          if (a.staticResource && -1 < a.type.indexOf("image")) {
            var v = document.createElement("img");
            v.src = ja(ja(a.staticResource));
            u.appendChild(v);
          }
          a.iframeResource && (v = a.iframeResource, u.src = ja(v));
          a.htmlResource && (v = a.htmlResource, u.innerHTML = v);
          void 0 !== v && (0 < ~~a.width && (v.width = a.width), 0 < ~~a.height && (v.height = a.height), l && e(), g(), z.one(x.beforeComplete, m), z.getWrapper().appendChild(r), n.onAdLoaded());
        }
      })(m(u.sort(function (a, b) {
        return a.width - b.width;
      })));
    }
    function d() {
      function a() {
        var a = "",
          d = b.iframeResource ? document.createElement("iframe") : document.createElement("div");
        d.className = "orp-jsProElement orp-vast-icon ";
        void 0 !== b.xPosition && (a += "number" === typeof b.xPosition ? "left:" + b.xPosition + "px;" : b.xPosition + ":0;");
        void 0 !== b.yPosition && (a += "number" === typeof b.yPosition ? "top:" + b.yPosition + "px;" : b.yPosition + ":0;");
        0 < ~~b.width && (a += "width:" + b.width + "px;");
        0 < ~~b.height && (a += "height:" + b.height + "px;");
        l.clickThroughURLTemplate && (a += "cursor:pointer;", d.onclick = function () {
          if (z.isPaused()) return z.play(), !1;
          l.click();
          var a = c(l);
          a && window.open(a, "_blank");
        });
        d.setAttribute("style", a);
        if (b.staticResource && -1 < b.type.indexOf("image")) {
          var e = document.createElement("img");
          e.className = "orp-jsProElement orp-vast-icon-img";
          e.src = ja(b.staticResource);
          e.onerror = function () {
            this.remove();
          };
          0 < ~~b.width && (e.width = b.width);
          0 < ~~b.height && (e.height = b.height);
          d.appendChild(e);
        } else b.iframeResource ? (e = b.iframeResource, d.src = ja(e)) : b.htmlResource && (e = b.htmlResource, d.innerHTML = e);
        void 0 !== e && (z.getWrapper().appendChild(d), l.load());
        return d;
      }
      if (e.icons && e.icons.length) {
        var b = e.icons[0],
          d = ~~b.offset,
          f = ~~b.duration,
          m,
          l = new Ha.iconTracker(g, b),
          n = function () {
            l.setProgress(z.currentTime());
            null === m && (-1 === d || z.currentTime() >= d) && (m = a(), -1 === f && z.off("timeupdate", n));
            0 < f && m && z.currentTime() >= f && (m.parentNode && m.parentNode.removeChild(m), z.off("timeupdate", n));
          };
        z.on("timeupdate", n);
      }
    }
    function c(a, b) {
      if (b = b || a.clickThroughURLTemplate) {
        a.setProgress(z.currentTime());
        var c = Ha.util.resolveURLTemplates([b], {
          CACHEBUSTER: Math.round(1E10 * Math.random()),
          CONTENTPLAYHEAD: a.progressFormated()
        })[0];
      }
      return c;
    }
    function l(a, b) {
      void 0 !== a && Ha.util.track(a, b);
    }
    function r(a, b) {
      if (!C) {
        d = b.variations;
        if (!d || !d.length) {
          l(a.errorURLTemplates, {
            ERRORCODE: 401
          });
          return;
        }
        return d;
      }
      var c = b.mediaFiles;
      if (c.length) {
        var d = function (a) {
          for (var b = 0; b < c.length; b++) w(c[b]) ? a.vpaid.push(c[b]) : "" !== z.canPlayType(c[b].mimeType) && a.media.push({
            src: c[b].fileURL,
            type: c[b].mimeType,
            width: c[b].width,
            height: c[b].height,
            bitrate: c[b].bitrate
          });
          return a;
        }({
          media: [],
          vpaid: []
        });
        if (0 < d.media.length) return m(d.media.sort(function (a, b) {
          return a.width - b.width || b.bitrate - a.bitrate;
        }));
        if (0 < d.vpaid.length) return d.vpaid[0];
      } else l(a.errorURLTemplates, {
        ERRORCODE: 401
      });
    }
    function m(a) {
      return v(a.filter(function (a) {
        a = a.type.toLowerCase();
        return "video/mp4" === a || "video/webm" === a || "video/ogg" === a;
      })) || v(a);
    }
    function v(a) {
      if (a && a.length) {
        for (var c, d = b.sizeController().width(), e = 1; e < a.length; e++) {
          c = a[e - 1];
          if (!(d >= c.width && d >= a[e].width && c.width !== a[e].width) && d <= a[e].width) return c;
          if (a[e].bitrate > c.bitrate || a[e].width > c.width || a[e].height > c.height) c = a[e];
        }
        return void 0 !== c ? c : a[0];
      }
    }
    function w(a) {
      return !!a && "VPAID" === a.apiFramework && -1 !== a.mimeType.indexOf("javascript");
    }
    var z,
      u,
      E,
      C = "linear" === e.type,
      H;
    this.init = function (c, m, l, v) {
      E = l;
      z = c;
      u = r(g, e);
      if (void 0 === u) n.onAdError(403, g.errorURLTemplates);else if (b.adVideoType(C), u.src = ja(u.src), u.fileURL = ja(u.fileURL), w(u)) {
        E.tag._isVpaid = !0;
        z = v(u.src);
        try {
          Mc(a, z, E, n).init(u, e);
        } catch (D) {
          n.onAdError("startVPAID");
        }
      } else E.tag._isVpaid = void 0, C ? (z = v(u.src), H = q(z.getWrapper()).parents(".orp-controls-wrapper"), f(), b.setAdPlayerWrapper(new Ac(b, z, l))) : "nonlinear" === e.type && (f(), p(), b.onAdLoaded(function () {
        m();
      })), d(e);
    };
  }
  function nb(a, b) {
    function g(a, b) {
      a = e(a);
      for (var c = 0; c < a.length; c++) {
        var d = new r(a[c]);
        b.addChild(d);
        a[c].ads && g(a[c].ads, d);
      }
      return b;
    }
    function e(a) {
      var b = a.filter(function (a) {
        return null != a.sequence;
      }).sort(function (a, b) {
        return ~~a.sequence - ~~b.sequence;
      });
      a = a.filter(function (a) {
        return null == a.sequence;
      });
      return b.concat(a);
    }
    function n(a, b) {
      z = null == z ? p(w[0], a) : f(z, a, b);
      if (null != z) {
        var c = null != z.value.sequence;
        u = e(z.value.creatives.filter(function (a) {
          return "linear" === a.type || !c && "nonlinear" === a.type;
        }));
      }
    }
    function f(a, b, c) {
      a = "root" !== a.value || c ? a.parent : a;
      if (null != a) return a.showed = !0, a.children.splice(0, 1), p(a, b, c);
    }
    function p(a, b, c) {
      if (null == a || !w.length) return null;
      if (a && a.children.length) return p(a.children[0], b, c);
      if ("root" == a.value) return null;
      if (null != a.value.sequence || !c) {
        if (a.wrapper || !b && a.parent.showed && null == a.value.sequence) return f(a.parent, b, c);
        a.showed = !0;
        return a;
      }
    }
    function d(a) {
      return a ? a.splice(0, 1)[0] : a;
    }
    function c() {
      function a(a) {
        return a.active && 0 < a.adBreak.length ? !0 : a.active = !1;
      }
      return a(v.preRoll) ? v.preRoll : a(v.midRoll) ? v.midRoll : a(v.postRoll) ? v.postRoll : null;
    }
    function l() {
      q && q.trackingEvent && new VMAP.tracker(q.trackingEvent).breakEnd();
      var a = c();
      if (null == a) return null;
      q = d(a.adBreak);
      if (!q) return null;
      q.trackingEvent && new VMAP.tracker(q.trackingEvent).breakStart();
      w = q.vastAdData;
      return m.getNext();
    }
    function r(a) {
      this.value = a;
      this.showed = this.wrapper = !1;
      this.children = [];
      this.parent = null;
      this.addChild = function (a) {
        a.parent = this;
        this.wrapper = !0;
        this.children.push(a);
      };
    }
    var m = this,
      v = {
        preRoll: {
          active: !1,
          adBreak: []
        },
        midRoll: {
          active: !1,
          adBreak: []
        },
        postRoll: {
          active: !1,
          adBreak: []
        }
      },
      w = [],
      z,
      u,
      q,
      C = [],
      H = 0;
    this.getOptions = function () {
      return b;
    };
    this.getContent = function (a, c) {
      function e(a) {
        var b = a.tag.url.trim();
        za(b, "\x3c") && (a.response = new DOMParser().parseFromString(b, "text/xml"));
      }
      b.tag && "bidding" === b.tag.type || A.event(A.types.request, b);
      b.requestTimeout && (b.timeout = b.requestTimeout);
      b.withCredentials = !0;
      var m = 0,
        f = !1;
      (function (a, b, l) {
        m++;
        e(a);
        Ha.client.get(a.tag.url, a, function (a, e) {
          a && b && "start" == b.timeOffset && C.push(a);
          if (a) {
            var n = g(a.ads, new r("root")).children;
            q ? q.vastAdData = !q.allowMultipleAds && 1 < n.length ? [d(n)] : n : w = n;
          }
          q && "start" == q.timeOffset && H--;
          if (a) l(b), f = !0;else if (!f && 0 === --m) {
            var p;
            e ? p = e.message || "error" : a || (p = "no ad");
            c(p);
          }
        });
      })(b, null, a);
    };
    this.getNext = function (a, b) {
      null != z && u && 0 !== u.length || w && 0 !== w.length && (null == w[0].value.sequence && b || n(a, b));
      var c;
      u && u.length && (c = d(u));
      return void 0 !== c ? {
        ad: z.value,
        creative: c,
        adShowed: !a
      } : l();
    };
  }
  function Mc(a, b, g, e) {
    return new function (b, f) {
      var g = a.getAdController(),
        d = this;
      this.id = "vpaid" + Math.random();
      this.iframe = null;
      this.vpClassName = "orp-vpaid-element";
      this.vpaidContaine = null;
      this.init = function (c, l) {
        function n() {
          e.onAdError("callbackIframeError");
          w();
        }
        function m() {
          var c = d.iframe.contentWindow.getVPAIDAd;
          if (c && "function" === typeof c) {
            if (c = new Z(a, b, f, c(), w, e), c.handshakeVersion("2.0"), c.checkVPAIDInterface()) {
              g.setAdPlayerWrapper(c);
              c.setCallbacksForCreative();
              var m = g.sizeController().width(),
                n = g.sizeController().height();
              c.initAd(m, n, "normal", -1, {
                AdParameters: l.adParameters
              }, {
                slot: d.iframe.contentWindow.document.querySelector("." + d.vpClassName),
                videoSlot: b.getVideo()
              });
            } else e.onAdError("checkVPAIDInterface false"), w();
          } else e.onAdError("getVPAIDAd not foud"), w();
        }
        function p(a, b) {
          var c = document.createElement("iframe");
          c.title = "pro";
          c.marginWidth = "0";
          c.marginHeight = "0";
          c.frameBorder = "0";
          c.width = "100%";
          c.height = "100%";
          c.style.margin = "0px";
          c.style.padding = "0px";
          c.style.border = "none";
          b && (c.style.zIndex = b);
          c.setAttribute("SCROLLING", "NO");
          a.innerHTML = "";
          a.appendChild(c);
          return c;
        }
        d.vpaidContaine = document.createElement("div");
        d.vpaidContaine.className = "orp-vpaid-container";
        q(b.getWrapper()).prepend(d.vpaidContaine);
        var w = function () {
          b.pause();
          q(d.vpaidContaine).hide();
          Nc && g.isAdStarted() || setTimeout(function () {
            q(d.vpaidContaine).remove();
          }, 1E3);
        };
        try {
          var z = '\x3cdiv class\x3d"' + d.vpClassName + '" style\x3d"height: 100%"\x3e\x3c/div\x3e\x3cscript type\x3d"text/javascript" src\x3d"' + c.fileURL + '"\x3e\x3c/script\x3e';
          d.iframe = p(d.vpaidContaine, c.zIndex);
          Na(d.iframe, d.id, z, m, n);
        } catch (u) {
          e.onAdError("setIframeContent", u), w();
        }
      };
    }(b, g);
  }
  function Oc(a) {
    this.start = a.adStart;
    this.show = U;
    this.resumeAdAfterClick = a.resumeAd;
    this.off = U;
  }
  function Pc(a, b) {
    function g() {
      p();
      var b = ob(E, a.sizeController().height(!0)),
        c = b >= m.playPercent;
      b >= m.showPercent && e() || !d || (u = w || c, !r && a.isPaused() || !u ? a.pauseAd() : a.resumeAd(), !a.isFullscreen() && w && C !== c && a.sizeController().stickyState(!c), C = c);
    }
    function e() {
      if (d) return !1;
      if (!c || l) return !0;
      A.log("wait ini");
      a.adStart();
      return l = !0;
    }
    function n(a) {
      r = !a;
      A.log("isAutoStarted: " + r);
    }
    function f(b) {
      A.log("showAd remove ivm-hidden");
      a.getElement().removeClass("orp-player-ipm-hidden");
      b || (d = !0, g());
    }
    function p() {
      function b(a) {
        !0 !== H[a] && (void 0 === H[a] ? (H[a] = !0, setTimeout(function () {
          H[a] = !1;
        }, 3E3)) : (H[a] = !0, A.log("init element is at the end of html"), "send" === a && A.event(A.types.error, m, "init element is at the end of html")));
      }
      if (!H.send && !d) {
        var c = v.get(0).document.body.offsetHeight,
          e = a.sizeController().height(!0) * m.playPercent / 100,
          g = E.offset().top,
          f = v.get(0);
        g + e > c && (b("log"), f.innerHeight + f.scrollY >= f.document.body.offsetHeight && b("send"));
      }
    }
    var d,
      c,
      l,
      r = !0,
      m = q.extend({}, {
        showPercent: 30,
        playPercent: 30
      }, b.advertising),
      v = q(da()),
      w = m.sticky,
      z = w && m.startAsSticky,
      u,
      E = function () {
        var b = db(a.getElement().get(0));
        return b ? q(b) : a.getElement();
      }(),
      C = !1,
      H = {};
    this.show = function (a) {
      f(a);
    };
    this.resumeAdAfterClick = function () {
      n(!1);
      g();
    };
    this.off = function () {
      v.off("scroll resize", g);
      w && !C && a.sizeController().stickyState(!1);
      a.isUserClose() || c && !a.noAd() || !a.showDefaultTag(!0) ? (a.getElement().addClass("orp-force-hide-player"), a.clearViewElement()) : (a.getElement().addClass("orp-rel"), f());
    };
    this.start = function () {
      c || (g(), u && d && (d = !1, u && e()));
      c ? (l = d = !1, u && e(), g()) : (c = !0, a.onAdStart(function () {
        d = !0;
      }), a.onAdPaused(function () {
        u && n(!0);
      }), a.onAdResumed(function () {
        n(!1);
      }), a.onAdClicked(function () {
        n(!0);
      }), z && (d = !1, C = null, e()), g(), v.on("scroll resize", g));
    };
  }
  function Ib(a) {
    function b(b) {
      g || (a.getElement().removeClass("orp-player-ivm-hidden"), b || (A.log("showAd remove ivm-hidden"), g = !0, a.resumeAd()));
    }
    var g;
    this.start = a.adStart;
    this.show = function (a) {
      b(a);
    };
    this.resumeAdAfterClick = a.resumeAd;
    this.off = function () {
      a.isUserClose() || g && !a.noAd() || !a.showDefaultTag(!0) ? (a.getElement().addClass("orp-player-ivm-hidden"), a.clearViewElement()) : b(!0);
    };
  }
  function Qc(a, b) {
    function g() {
      var b = ob(u, a.sizeController().height(!0));
      b >= r.showPercent && e() || !f || (b = b >= r.playPercent, z = v || b, !l && a.isPaused() || !z ? a.pauseAd() : a.resumeAd(), !a.isFullscreen() && v && E !== b && a.sizeController().stickyState(!b), E = b);
    }
    function e() {
      if (f) return !1;
      if (!p || d) return !0;
      A.log("wait ini");
      a.adStart();
      return d = !0;
    }
    function n(a) {
      l = !a;
      A.log("isAutoStarted: " + l);
    }
    var f,
      p,
      d,
      c,
      l = !0,
      r = q.extend({}, {
        showPercent: 30,
        playPercent: 30
      }, b.advertising),
      m = q(da()),
      v = r.sticky,
      w = v && r.startAsSticky,
      z,
      u = function () {
        var b = db(a.getElement().get(0));
        return b ? q(b) : a.getElement();
      }(),
      E = !1;
    this.show = function (a) {
      a || f || (A.log("showAd InBanner"), f = !0, g());
    };
    this.resumeAdAfterClick = function () {
      n(!1);
      g();
    };
    this.off = function () {
      m.off("scroll", g);
      v && !E && a.sizeController().stickyState(!1);
      a.isUserClose() ? a.showDefaultTag() || a.createStub() : a.showDefaultTag() || a.isForceFile() && p && (!a.noAd() || f || c) || a.createStub();
    };
    this.start = function () {
      p || (g(), z && f && (f = !1, z && e()));
      p ? (f && (c = !0), d = f = !1, z && e()) : (p = !0, a.onAdStart(function () {
        f = !0;
      }), a.onAdPaused(function () {
        z && n(!0);
      }), a.onAdResumed(function () {
        n(!1);
      }), a.onAdClicked(function () {
        n(!0);
      }), w && (f = !1, E = null, e()), m.on("scroll", g));
      g();
    };
  }
  function Rc(a) {
    this.show = this.start = U;
    this.resumeAdAfterClick = a.resumeAd;
    this.off = U;
  }
  function Eb(a) {
    function b() {
      A.log("viewPlugin adReady");
      d();
      r.start();
    }
    function g() {
      A.log("viewPlugin adShow");
      r.show();
    }
    function e() {
      A.log("viewPlugin adHide");
      f();
      r.off();
    }
    function n() {
      z.hidden || (f(), r.resumeAdAfterClick());
    }
    function f() {
      q(z).off("visibilitychange", n);
    }
    function p() {
      u.onGlobalLoaded(b);
      u.onForceShow(function () {
        A.log("viewPlugin force adShow");
        r.show(!1);
      });
      u.onAdStarted(g);
      u.onGlobalShowed(g, !0);
      u.onGlobalStopped(e, !0);
      u.onAdClicked(function () {
        f();
        q(z).on("visibilitychange", n);
      });
    }
    function d() {
      function a() {
        return v.hasClass("orp-player-ipm-hidden") || v.hasClass("orp-player-ivm-hidden");
      }
      function b() {
        a() ? u.isVpaid() && (v.addClass("orp-proReady"), setTimeout(function () {
          v.removeClass("orp-proReady");
        }, 50)) : clearInterval(d);
      }
      c();
      var d;
      a() && (d = setInterval(b, 2E3));
    }
    function c() {
      if (v.hasClass("orp-player-ipm-hidden")) {
        var a = q(u.getWrapper());
        0 < a.css("height") || (a.css("height", u.sizeController().height()), u.onAdStarted(function () {
          a.css("height", "");
        }, !0));
      }
    }
    var l = this,
      r,
      m,
      v,
      w = !1,
      z = a.getElement().ownerDocument,
      u;
    this.getElement = function () {
      return v;
    };
    this.adStart = function () {
      u.adStart();
    };
    this.resumeAd = function () {
      u.resumeAd();
    };
    this.isPaused = function () {
      return u.isPaused();
    };
    this.pauseAd = function () {
      u.pauseAd();
    };
    this.sizeController = function () {
      return a.getSizeController();
    };
    this.resize = function (a, b, c) {
      u.resize(a, b, c);
    };
    this.setDisableResizeAd = function (b) {
      a.setDisableResizeAd(b);
    };
    this.noAd = function () {
      return !u.isAdStarted();
    };
    this.isUserClose = function () {
      return u.isUserClose();
    };
    this.isVpaid = function () {
      return u.isVpaid();
    };
    this.isLikeIma = function () {
      return u.isLikeIma();
    };
    this.isForceFile = function () {
      return u.forceFile();
    };
    this.isFullscreen = function () {
      return u.isFullscreen();
    };
    this.onAdStart = function (a) {
      u.onAdStart(a);
    };
    this.onAdPaused = function (a) {
      u.onAdPaused(a);
    };
    this.onAdResumed = function (a) {
      u.onAdResumed(a);
    };
    this.onAdClicked = function (a) {
      u.onAdClicked(a);
    };
    this.showDefaultTag = function (b) {
      if (!m.advertising || !m.advertising.defaultTag) return !1;
      A.event(A.types.default, m.advertising);
      var c = m.advertising.defaultTag || "",
        d = -1 !== c.indexOf("$$insertOutOfPlayer$$");
      Oa(c, u.sizeController().height(), u.sizeController().width(), m.appParams, a.getElement(), m.advertising, function (a) {
        v = l.createStub();
        d ? v.after(a.replace("$$insertOutOfPlayer$$", "")) : (v.html(a), b && (a = q('\x3cdiv class\x3d"orp-close"\x3e\x3c/div\x3e'), v.append(a), a.click(function () {
          v.addClass("orp-force-hide-player orp-force-hide-margin");
          l.clearViewElement();
        })));
      });
      a.destroy();
      return !d;
    };
    this.createStub = function () {
      var b = q("\x3cdiv\x3e\x3c/div\x3e");
      b.attr("class", v.attr("class")).attr("style", v.attr("style")).addClass("orp-defaultTag");
      b.addClass(W ? "orp-isMobile" : "orp-notMobile");
      if (w && u.isAdStarted()) {
        "absolute" !== b.css("position") && b.css("position", "relative");
        var c = m.advertising,
          d = c.copyright,
          e = d && d.icon ? d.icon : c.copyrightIcon,
          g = d && d.link ? d.link : c.copyrightLink;
        c = d && d.text ? d.text : c.copyrightText;
        e = e ? '\x3cimg src\x3d"' + e + '" /\x3e' : "";
        c = c ? c : "";
        g ? b.append('\x3ca href\x3d"' + g + '" class\x3d"orp-powered" target\x3d"_blank"\x3e\x3cspan\x3e' + c + "\x3c/span\x3e " + e + "\x3c/a\x3e") : b.append('\x3cdiv class\x3d"orp-powered"\x3e\x3cspan\x3e' + c + "\x3c/span\x3e " + e + "\x3c/div\x3e");
      }
      u.sizeController().getAspectRatio() && b.append(q("\x3cdiv\x3e\x3c/div\x3e").css("paddingBottom", 100 * u.sizeController().getAspectRatio() + "%"));
      v.replaceWith(b);
      a.destroy();
      return v = b;
    };
    this.clearViewElement = function () {
      setTimeout(function () {
        var b = q("\x3cdiv\x3e\x3c/div\x3e").attr("class", v.attr("class")).attr("style", v.attr("style"));
        v.replaceWith(b);
        a.destroy();
      }, 1E3);
    };
    a.one(x.startLoad, function (b) {
      m = q.extend({}, m, b);
      u = a.getAdController();
      v = q(a.getElement());
      b = !1 === m.inView || "inPage" === m.type;
      var c = !0 === m.inView || "inView" === m.type,
        d = "inBanner" === m.type,
        e = "rewarded" === m.type,
        g = "inStream" === m.type;
      if (d && m.advertising) {
        var f = m.advertising.copyright;
        w = (f && f.icon ? f.icon : m.advertising.copyrightIcon) || (f && f.text ? f.text : m.advertising.copyrightText);
      } else w = !1;
      a.isAdapter() ? r = new Rc(l) : b ? (r = new Pc(l, m), v.addClass("orp-player-ipm orp-player-ipm-hidden")) : c ? (r = new Ib(l), v.addClass("orp-player-ivm-hidden orp-player-ivm-" + Tb(m.advertising, "position", "BR"))) : e ? (r = new Ib(l), v.addClass("orp-player-ivm-hidden orp-player-rewarded")) : d ? (r = new Qc(l, m), v.addClass("orp-player-ipm")) : g && (r = new Oc(l, m));
      Ab(v, !0);
      m.margin && v.css("margin", m.margin);
      p();
    });
    a.one(x.showAd, function () {
      r.show(!0);
    });
  }
  function Fc(a, b, g, e, n) {
    function f() {
      function a(a, c, d, e) {
        Qa(function () {
          m(a, c, d, !1, e);
          I && I.ok || r(a) || v();
        }, !b);
      }
      q(e.tag).each(function (b, c) {
        var e = E;
        E++;
        "bidding" === c.type && C++;
        d(c, function (b) {
          b.getContent(function () {
            a(e, b, !0);
          }, function (c) {
            a(e, b, !1, c);
          });
        });
      });
      var b = !0;
    }
    function p() {
      var a = E,
        c = e.tag[a];
      c ? (E++, d(c, function (c) {
        c.getContent(function () {
          m(a, c, !0, !0);
          b(c);
        }, function (b) {
          m(a, c, !1, !1, b);
          p();
        });
      })) : g();
    }
    function d(b, d) {
      c(b, function (b) {
        d(a(b));
      });
    }
    function c(a, b) {
      var c = q.extend(!0, {}, e);
      n(a, function () {
        c.tag = a;
        b(c);
      });
    }
    function l() {
      e.bestTimeout ? setTimeout(function () {
        F = !0;
        I || v();
      }, e.bestTimeout) : F = !0;
    }
    function r(a) {
      if (F || I || !z(H[a])) return !1;
      var b = 0,
        c = 0;
      q(H).each(function (a, d) {
        d && b++;
        z(d) && c++;
      });
      return b !== E && c !== C;
    }
    function m(a, b, c, d, e) {
      H[a] = {
        client: b,
        ok: c,
        error: e
      };
      d && (I = H[a]);
      w();
    }
    function v() {
      var a = 0;
      q(H).each(function (c, d) {
        if (d) if (a++, d && !d.ok) c === x && x++;else if (H[0] || F || c === x) return I = u(d), b(I.client), !1;
      });
      I && I.ok || a !== E || (I = !0, g());
    }
    function w() {
      D && H.some(function (a) {
        var b = I === a;
        a.sentOpportunity || !b && a.ok || (a.sentOpportunity = !0, A.event(A.types.opportunity, a.client.getOptions()), pb(a.client.getOptions()));
        return b || void 0 === a;
      });
    }
    function z(a) {
      return a && "bidding" === a.client.getOptions().tag.type;
    }
    function u(a) {
      z(a) && q(H).each(function (b, c) {
        z(c) && c.ok && c.client.getOptions().tag._cpm > a.client.getOptions().tag._cpm && (a = c);
      });
      return a;
    }
    var E = 0,
      C = 0,
      H = [],
      I = !1,
      x = 0,
      F = !1,
      J = !0 === e.sequential,
      D,
      B = this;
    this.callErrors = function (a) {
      H.forEach(function (b) {
        b.error && (a(b.error), b.error = !1);
      });
    };
    this.tryNext = function () {
      J ? p() : !0 !== I && (I.ok = !1, v());
    };
    this.start = function () {
      J ? p() : (f(), l());
      return B;
    };
    this.sendOpportunity = function () {
      D = !0;
      w();
    };
  }
  function Sc(a, b, g) {
    function e(b, d) {
      a.addEventListener(b, function (a) {
        a.getAd().isLinear() && d();
      });
    }
    function n() {
      var b = a.getCurrentAd();
      return b && b.getDuration ? b.getDuration() : 0;
    }
    var f = !0;
    b.volume() || a.getVolume();
    var p,
      d = g.getAdTracker();
    (function () {
      function b() {
        var b = a.getCurrentAd().getContentType();
        return b && (0 === b.indexOf("text") || 0 === b.indexOf("image"));
      }
      function l(a) {
        return function () {
          d.onProgressPercent(a);
        };
      }
      e(google.ima.AdEvent.Type.STARTED, function () {
        p = n();
        g.adType(a.getCurrentAd().getAdPodInfo().getTimeOffset());
        g.adVideoType(!b());
        f = !1;
        d.onAdStarted();
        d.onAdImpression();
      });
      e(google.ima.AdEvent.Type.PAUSED, function () {
        f = !0;
        d.onAdPaused();
      });
      e(google.ima.AdEvent.Type.RESUMED, function () {
        f = !1;
        d.onAdPlaying();
      });
      e(google.ima.AdEvent.Type.LOADED, d.onAdLoaded);
      e(google.ima.AdEvent.Type.USER_CLOSE, d.onAdUserClose);
      e(google.ima.AdEvent.Type.CLICK, d.onAdClickThru);
      e(google.ima.AdEvent.Type.FIRST_QUARTILE, l(25));
      e(google.ima.AdEvent.Type.MIDPOINT, l(50));
      e(google.ima.AdEvent.Type.THIRD_QUARTILE, l(75));
      e(google.ima.AdEvent.Type.COMPLETE, d.onAdCompleted);
      e(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, d.onAdSkippableStateChange);
      e(google.ima.AdEvent.Type.SKIPPED, d.onAdSkipped);
    })();
    this.getType = function () {
      return "ima";
    };
    this.isPaused = function () {
      return f;
    };
    this.pauseAd = function () {
      a.pause();
    };
    this.skipAd = function () {
      d.onAdLog("skipAd");
      a.skip();
    };
    this.clickAd = function () {
      d.onAdLog("not implement clickAd");
    };
    this.play = function () {
      a.resume();
    };
    this.resumeAd = function () {
      a.resume();
    };
    this.volume = function (b) {
      void 0 !== b && (a.setVolume(b), setTimeout(function () {
        d.onAdVolumeChange(b);
      }, 1));
      return a.getVolume();
    };
    this.isMuted = function () {
      return 0 === a.getVolume();
    };
    this.getAdDuration = function () {
      return p = n() || p;
    };
    this.getAdRemainingTime = function () {
      return a.getRemainingTime();
    };
    this.skipOffset = function () {
      return -1;
    };
    this.getAdSkippableState = function () {
      return a.getAdSkippableState();
    };
    this.stopAd = function () {
      a.stop();
    };
    this.resizeAd = function (c, e, f) {
      void 0 === f && !!f !== b.isFullscreen() && g.toggleFullScreened();
      a.resize(c, e, f ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL);
      setTimeout(function () {
        d.onAdSizeChange(f);
      }, 1);
    };
    this.destroy = function () {
      a.destroy();
    };
  }
  function Gc(a, b, g, e) {
    function n(c) {
      var d = new google.ima.AdsRenderingSettings();
      d.restoreCustomPlaybackStateOnAdBreakComplete = !1;
      l = c.getAdsManager(b.getVideo(), d);
      u = new Sc(l, b, a);
      a.setAdPlayerWrapper(u);
      l.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, f);
      l.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, p);
      E();
    }
    function f(a) {
      a = a.getError && a.getError();
      C.onAdError(a || "onError", a);
    }
    function p() {
      g.pause();
      C.onAdStopped();
    }
    function d(a, b) {
      cb("https://imasdk.googleapis.com/js/sdkloader/ima3.js", a, function () {
        A.event(A.types.error, e, "load js");
        b();
      }, function () {
        return window.google && google.ima && google.ima.AdsLoader;
      });
    }
    function c(a) {
      if (a) {
        var c = [];
        a.forEach(function (a) {
          c.push(a);
          -1 === a && (v = !0);
        });
        b.trigger(x.timeTags, c);
      }
    }
    var l,
      r,
      m,
      v,
      w,
      z,
      u,
      E,
      C = a.getAdTracker();
    this.isIma = !0;
    this.getOptions = function () {
      return e;
    };
    this.load = function (b) {
      w = a.sizeController().width();
      z = a.sizeController().height();
      E = b;
      try {
        m = new google.ima.AdDisplayContainer(g.getWrapper(), g.getVideo());
        r = new google.ima.AdsLoader(m);
        r.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, n, !1);
        r.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, f, !1);
        var c = new google.ima.AdsRequest();
        c.adTagUrl = ja(e.tag.url);
        c.linearAdSlotWidth = w;
        c.linearAdSlotHeight = z;
        c.nonLinearAdSlotWidth = w;
        c.nonLinearAdSlotHeight = z;
        c.setAdWillAutoPlay(!0);
        void 0 !== e.tag.willPlayMuted && c.setAdWillPlayMuted(e.tag.willPlayMuted);
        c.forceNonLinearFullSlot = !0;
        r.requestAds(c);
        A.event(A.types.request, e);
      } catch (G) {
        C.onAdError("load", G);
      }
    };
    this.start = function () {
      try {
        try {
          m.initialize(), l.init(w, z, b.isFullscreen() ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL), q(g.getWrapper()).parent().parent().filter(".orp-proVideo").show(), c(l.getCuePoints()), l.start();
        } catch (H) {
          C.onAdError("start2", H);
        }
      } catch (H) {
        C.onAdError("start", H);
      }
    };
    this.destroy = function () {
      l && l.destroy();
    };
    this.getContent = function (a, b) {
      d(a, b);
    };
    this.startPostRoll = function () {
      if (v) return r.contentComplete(), !0;
    };
  }
  function Tc(a, b, g) {
    function e(b, c) {
      a.subscribe(b, c);
    }
    var n = !0,
      f;
    b.volume() || a.getAdVolume();
    var p = g.getAdTracker();
    this.getType = function () {
      return "yandex";
    };
    this.isPaused = function () {
      return n = "play" !== a.getAdPlayingState();
    };
    this.pauseAd = function () {
      a.pauseAd();
    };
    this.skipAd = function () {
      p.onAdLog("skipAd");
      a.skipAd();
    };
    this.clickAd = function () {
      p.onAdLog("not implement clickAd");
    };
    this.playAd = function () {
      a.playAd();
    };
    this.play = function () {
      a.resumeAd();
    };
    this.resumeAd = function () {
      a.resumeAd();
    };
    this.volume = function (b) {
      void 0 !== b && (a.setAdVolume(b), setTimeout(function () {
        p.onAdVolumeChange(b);
      }, 1));
      return a.getAdVolume();
    };
    this.isMuted = function () {
      return 0 === a.getAdVolume();
    };
    this.getAdDuration = function () {
      return a.getAdDuration();
    };
    this.getAdRemainingTime = function () {
      return a.getAdRemainingTime();
    };
    this.skipOffset = function () {
      return -1;
    };
    this.getAdSkippableState = function () {
      return a.getAdSkippableState();
    };
    this.stopAd = function () {
      a.stopAd();
    };
    this.resizeAd = function (a, b, e) {
      setTimeout(function () {
        p.onAdSizeChange(e);
      }, 1);
    };
    this.destroy = function () {
      a && a.destroy && a.destroy();
    };
    (function () {
      function a(a) {
        return function () {
          p.onProgressPercent(a);
        };
      }
      e(x.adLoaded, p.onAdLoaded);
      e(x.adStarted, function () {
        f = !0;
        g.adVideoType(!0);
        n = !1;
      });
      e("AdPodStarted", p.onAdStarted);
      e("AdPodImpression", p.onAdImpression);
      e("AdPodVideoFirstQuartile", a(25));
      e("AdPodVideoMidpoint", a(50));
      e("AdPodVideoThirdQuartile", a(75));
      e("AdUserClose", p.onAdUserClose);
      e("AllAdPodVideoComplete", p.onAdCompleted);
      e("AdPlayingStateChange", function (a) {
        if (f) if ("play" === a.playingState) p.onAdPlaying();else if ("pause" === a.playingState) p.onAdPaused();
      });
      e(x.adVolumeChange, p.onAdVolumeChange);
      e(x.adClickThru, p.onAdClickThru);
      e(x.adSkippableStateChange, p.onAdSkippableStateChange);
      e(x.adSkipped, p.onAdSkipped);
      e(x.adCompleted, p.onAdCompleted);
    })();
  }
  function Jc(a, b, g, e) {
    function n(b) {
      ya.videoAd.loadModule("AdLoader").then(function (a) {
        A.log("yandex ad create");
        return a.AdLoader.create(b);
      }).then(function (a) {
        A.log("yandex ad load");
        return a.loadAd();
      }).then(function (a) {
        A.log("yandex ad viewer");
        a.preload({
          videoSlot: g.getVideo()
        });
        return new Promise(function (b) {
          b(a);
        });
      }).then(function (b) {
        A.log("yandex ad start");
        l.onAdLoaded();
        d = b.createPlaybackController(g.getVideo(), g.getWrapper(), {
          skipDelay: 2
        });
        c = new Tc(d, g, a);
        a.setAdPlayerWrapper(c);
        d.subscribe(x.adStopped, f);
        d.playAd();
      }).catch(function (a) {
        l.onAdError("setup", a);
      });
      A.event(A.types.request, e);
    }
    function f() {
      g.pause();
      l.onAdStopped();
    }
    function p(a, b) {
      cb("https://an.yandex.ru/system/video-ads-sdk/adsdk.js", a, function () {
        A.event(A.types.error, e, "load js ya");
        b();
      }, function () {
        return !!window.ya;
      });
    }
    var d,
      c,
      l = a.getAdTracker();
    this.isYa = !0;
    this.getOptions = function () {
      return e;
    };
    this.load = function (a) {
      q(g.getWrapper()).parent().parent().filter(".orp-proVideo").show();
      a();
    };
    this.start = function () {
      try {
        var a = "string" === typeof e.tag.url ? JSON.parse(e.tag.url) : e.tag.url;
        n(a);
      } catch (m) {
        l.onAdError("start", m);
      }
    };
    this.destroy = function () {
      d && d.destroy && d.destroy();
    };
    this.getContent = function (a, b) {
      p(a, b);
    };
    this.startPostRoll = U;
  }
  function Hc(a, b) {
    function g(a, b) {
      var c = l.pbjs;
      c.logging = A.debugMode();
      var e = "code" + Math.random(),
        f = d;
      f.code = e;
      var g = f.minCpm || 0;
      delete f.minCpm;
      c.que.push(function () {
        c.addAdUnits(f);
        c.setConfig({
          useBidCache: !0,
          cache: {
            url: "https://prebid.adnxs.com/pbc/v1/cache"
          }
        });
        c.requestBids({
          bidsBackHandler: function (c) {
            if (c && c[e] && c[e].bids && c[e].bids[0]) {
              c = c[e].bids;
              var d;
              for (d in c) if (c.hasOwnProperty(d)) {
                var f = c[d],
                  l = f,
                  m = f.vastUrl || f.vastXml;
                if (!m) try {
                  m = f.adResponse.ad.video.content;
                } catch (D) {}
                l.urlOrXml = m;
                if (f.urlOrXml && f.cpm >= g) {
                  g = f.cpm;
                  var n = f;
                }
              }
              if (n) {
                a(n.urlOrXml, n.cpm);
                return;
              }
            }
            b();
          }
        });
      });
    }
    function e(a, c) {
      var e = {
          command: "PPCP:prebidRequest",
          messageId: "APP:" + Math.random()
        },
        f = function (b) {
          if (b && b.data && "string" === typeof b.data) {
            try {
              var d = JSON.parse(b.data);
            } catch (I) {
              A.log(I);
              return;
            }
            "PPCP:prebidResponse" === d.command && d.messageId === e.messageId && (m && clearTimeout(m), window.removeEventListener("message", f), A.log(d), d.url && "failed" !== d.url ? a(d.url, d.cpm) : c());
          }
        };
      window.addEventListener("message", f);
      l.postMessage(JSON.stringify(e), "*");
      var g = Math.max(d.prebidTimeout || 0, b.requestTimeout);
      if (g) {
        var m = setTimeout(function () {
          A.log("prebidClient requestTimeout");
          l.removeEventListener("message", f);
          c();
        }, g);
        d.prebidTimeout = g;
      }
      l.prebidPluginCP.doPrebid(d);
    }
    function n(e, f) {
      function g() {
        0 === --n && e();
      }
      function m() {
        f();
        f = U;
      }
      var n = 1;
      c = q("\x3ciframe\x3e\x3c/iframe\x3e").hide();
      q(a.getWrapper()).append(c);
      Na(c[0], "" + Math.random(), null, function () {
        l = c[0].contentWindow;
        d = Ba(b.tag.url);
        d.prebidPath || (d.prebidPath = "https://serving.stat-rock.com/player/pb/3.21.0.js");
        ia(d.prebidPath, g, m, U, l.document.body).id = "prebidJsScript";
        d.biddersSpec && ++n && ia("https://serving.stat-rock.com/player/pb/cp.0.1.6.c.js", g, m, U, l.document.body);
      });
    }
    function f() {
      c && c.remove();
    }
    var p,
      d,
      c,
      l,
      r = f;
    this.getClient = function () {
      return p;
    };
    this.getOptions = function () {
      return b;
    };
    this.getContent = function (c, l) {
      r = function () {
        l();
        f();
      };
      ib(n, !0)(function () {
        A.event(A.types.request, b);
        (d.biddersSpec ? e : g)(function (d, e) {
          b.tag._cpm = e || 0;
          b.tag.url = d;
          p = new nb(a, b);
          p.getContent(c, l);
          f();
        }, r);
      }, r);
    };
  }
  function Uc(a, b, g, e, n, f) {
    function p(a, c) {
      b.addEventListener(a, c);
    }
    function d() {
      function b() {
        c = !0;
        r.onAdPaused();
      }
      function d() {
        c = !1;
        r.onAdPlaying();
      }
      function e(a, b, c) {
        if (b === a.subType) return c(), !0;
      }
      function f(a) {
        return function () {
          r.onProgressPercent(a);
        };
      }
      var g = f(25),
        l = f(50),
        n = f(75);
      return function (c) {
        e(c, a.EVENT_AD_PAUSE, b) || e(c, a.EVENT_AD_RESUME, d) || e(c, a.EVENT_AD_CLOSE, r.onAdUserClose) || e(c, a.EVENT_AD_CLICK, r.onAdClickThru) || e(c, a.EVENT_AD_FIRST_QUARTILE, g) || e(c, a.EVENT_AD_MIDPOINT, l) || e(c, a.EVENT_AD_THIRD_QUARTILE, n) || e(c, a.EVENT_AD_COMPLETE, r.onAdCompleted);
      };
    }
    var c = !0;
    e.volume() || b.getAdVolume();
    var l = function (a) {
        a = a.skipOffset;
        return null == a ? -1 : ~~a;
      }(f),
      r = n.getAdTracker();
    (function () {
      g.setParameter(a.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE, !1);
      r.onAdLoaded();
      p(a.EVENT_SLOT_STARTED, function () {
        n.adType(0);
        n.adVideoType(!0);
        c = !1;
        r.onAdStarted();
        r.onAdImpression();
        g.d;
      });
      p(a.EVENT_AD, d());
    })();
    this.getType = function () {
      return "fw";
    };
    this.isPaused = function () {
      return c;
    };
    this.pauseAd = function () {
      g.pause();
    };
    this.skipAd = function () {
      r.onAdLog("skipAd");
      g.skipCurrentAd();
    };
    this.clickAd = function () {
      r.onAdLog("not implement clickAd");
    };
    this.play = function () {
      g.resume();
    };
    this.resumeAd = function () {
      g.resume();
    };
    this.volume = function (a) {
      void 0 !== a && (b.setAdVolume(a), setTimeout(function () {
        r.onAdVolumeChange(a);
      }, 1));
      return b.getAdVolume();
    };
    this.isMuted = function () {
      return 0 === b.getAdVolume();
    };
    this.getAdDuration = function () {
      return g.getTotalDuration();
    };
    this.getAdRemainingTime = function () {
      return g.getTotalDuration() - g.getPlayheadTime();
    };
    this.stopAd = function () {
      g.stop();
    };
    this.resizeAd = function (a, b, c) {
      setTimeout(function () {
        r.onAdSizeChange(c);
      }, 1);
    };
    this.destroy = function () {
      b.dispose();
    };
    this.skipOffset = function () {
      return l;
    };
    this.getAdSkippableState = function () {
      return -1 < l && g.getPlayheadTime() > l;
    };
  }
  function Ic(a, b, g, e) {
    function n(n) {
      var p = window.tv && window.tv.freewheel && window.tv.freewheel.SDK;
      p.setLogLevel(A.debugMode() ? p.LOG_LEVEL_INFO : p.LOG_LEVEL_QUIET);
      var q = m.networkId;
      d = new p.AdManager();
      d.setNetwork(q);
      d.setServer(m.serverUrl);
      c = d.newContext();
      c.setProfile(m.profileId);
      c.setSiteSection(m.sectionId, q);
      c.setVideoAsset(m.videoAssetId || "ok", b.duration() || 500, q);
      c.setContentVideoElement(g.getVideo());
      c.addTemporalSlot("Preroll_1", p.ADUNIT_PREROLL, 0);
      c.addEventListener(p.EVENT_REQUEST_COMPLETE, function (d) {
        if (d.success && null !== c) {
          d = c.getTemporalSlots();
          for (var f = 0; f < d.length; f++) {
            var g = d[f];
            console.debug("SLOT - ", g);
            g.getTimePositionClass() === p.TIME_POSITION_CLASS_PREROLL && l.push(g);
          }
          if (l[0]) a.setAdPlayerWrapper(new Uc(p, c, l[0], b, a, e)), n();else r.onAdError("empty tags", void 0);
        } else r.onAdError("!e.success", void 0);
      });
      c.addEventListener(p.EVENT_SLOT_ENDED, f);
      c.submitRequest();
      A.event(A.types.request, e);
    }
    function f() {
      g.pause();
      r.onAdStopped();
    }
    function p(a, b) {
      function c() {
        return window.tv && window.tv.freewheel && window.tv.freewheel.SDK;
      }
      function d() {
        A.event(A.types.error, e, "load js");
        b();
      }
      a: {
        try {
          m = JSON.parse(e.tag.url);
          break a;
        } catch (E) {
          A.log(E);
        }
        m = void 0;
      }
      m ? cb(m.managerUrl, a, d, c) : d();
    }
    var d,
      c,
      l = [],
      r = a.getAdTracker(),
      m;
    this.getOptions = function () {
      return e;
    };
    this.getContent = function (a, b) {
      p(a, b);
    };
    this.load = function (a) {
      try {
        n(a);
      } catch (w) {
        r.onAdError("load", w);
      }
    };
    this.start = function () {
      try {
        try {
          l[0].play();
        } catch (v) {
          r.onAdError("start2", v);
        }
      } catch (v) {
        r.onAdError("start", v);
      }
    };
    this.destroy = function () {
      l[0] && l[0].stop();
    };
    this.startPostRoll = U;
  }
  function Vc(a, b, g, e, n) {
    var f = this,
      p = !0,
      d,
      c,
      l,
      r,
      m,
      q,
      w,
      z = e.getAdTracker();
    (function () {
      z.onAdLoaded();
      b.addEventListener("onStateChange", function (b) {
        c || !W && b.data !== a.PlayerState.PLAYING ? b.data === a.PlayerState.PLAYING ? (p = !1, z.onAdPlaying()) : b.data === a.PlayerState.PAUSED ? (p = !0, z.onAdPaused()) : b.data === a.PlayerState.ENDED && (z.onProgressPercent(100), z.onAdCompleted(), z.onAdStopped()) : (c = !0, p = !1, z.onAdStarted(), z.onAdImpression());
      });
      e.onAdTimeUpdate(function () {
        function a(a) {
          var c = Math.floor(100 * b.getCurrentTime() / f.getAdDuration()) >= a;
          c && z.onProgressPercent(a);
          return c;
        }
        !l && a(0) && (l = !0);
        !r && a(25) && (r = !0);
        !m && a(50) && (m = !0);
        !q && a(75) && (q = !0);
      });
      e.adType(0);
      e.adVideoType(!0);
      e.forceShow();
      (w = g.muted()) && b.mute() || b.unMute();
      d = 100 * g.volume();
      b.setVolume(d);
    })();
    this.getType = function () {
      return "youtube";
    };
    this.isPaused = function () {
      return p;
    };
    this.pauseAd = function () {
      b.pauseVideo();
    };
    this.skipAd = function () {
      z.onAdLog("skipAd");
      b.stopVideo();
      z.onAdSkipped();
      z.onAdStopped();
    };
    this.clickAd = function () {
      z.onAdLog("not implement clickAd");
    };
    this.play = function () {
      b.playVideo();
    };
    this.resumeAd = function () {
      b.playVideo();
    };
    this.volume = function (a) {
      void 0 !== a && (b.setVolume(100 * a), (w = 0 === a) ? b.isMuted() || b.mute() : (d = 100 * a, b.isMuted() && b.unMute()), setTimeout(function () {
        z.onAdVolumeChange(a);
      }, 100));
      if (b.isMuted()) return 0;
      a = b.getVolume();
      return 0 < a ? a / 100 : a;
    };
    this.isMuted = function () {
      return b.isMuted();
    };
    this.getAdDuration = function () {
      return b.getDuration();
    };
    this.getAdRemainingTime = function () {
      return f.getAdDuration() - b.getCurrentTime();
    };
    this.skipOffset = function () {
      return isNaN(n.skipOffset) ? -1 : ~~n.skipOffset;
    };
    this.getAdSkippableState = function () {
      return -1;
    };
    this.stopAd = function () {
      z.onAdLog("stopAd");
      b.stopVideo();
      z.onAdStopped();
    };
    this.resizeAd = function (a, c, d) {
      b.setSize(a, c);
      setTimeout(function () {
        z.onAdSizeChange(d);
      }, 1);
    };
    this.destroy = function () {
      b.destroy();
    };
  }
  function Kc(a, b, g, e) {
    function n(n) {
      q(g.getWrapper()).parent().parent().filter(".orp-proVideo").show();
      q("\x3cdiv\x3e").attr("id", r).addClass("orp-yt-player").prependTo(q(g.getVideo()).parent());
      A.event(A.types.request, e);
      var m = Ba(e.tag.url);
      c = new (d().Player)(r, {
        width: a.sizeController().width(),
        height: a.sizeController().height(),
        videoId: m.videoId || m,
        playerVars: {
          controls: 0,
          disablekb: 1,
          fs: 0
        },
        events: {
          onReady: function () {
            0 === c.getDuration() ? f("yt duration is 0") : (l = new Vc(d(), c, b, a, e), a.setAdPlayerWrapper(l), n());
          },
          onError: f
        }
      });
    }
    function f(a, b) {
      m.onAdError(a, b);
    }
    function p(a, c) {
      ia("https://www.youtube.com/iframe_api", function () {
        d().loaded ? a() : d().ready(a);
      }, function () {
        A.event(A.types.error, e, "load js yt");
        c();
      }, function () {
        return !!d();
      }, b.getVideo());
    }
    function d() {
      return xa(b.getVideo()).YT;
    }
    var c,
      l,
      r = "orp-yt-player-id-" + Math.random(),
      m = a.getAdTracker();
    this.isYt = !0;
    this.getOptions = function () {
      return e;
    };
    this.load = function (a) {
      setTimeout(function () {
        try {
          n(a);
        } catch (w) {
          f("load", w);
        }
      }, 1);
    };
    this.start = function () {};
    this.destroy = function () {
      try {
        c && c.destroy && c.destroy();
      } catch (v) {
        A.event(A.types.error, e, "destroy");
      }
    };
    this.getContent = function (a, b) {
      p(a, b);
    };
    this.startPostRoll = U;
  }
  function Cc(a) {
    function b(b) {
      if (!b.isSend) {
        b.isSend = !0;
        var d = a.adVideoType() ? "VIDEO" : "STATIC";
        A.viewed(b.rate, g, a.adType(), d);
        a.getPlayerListeners().trigger(x.adVideo[b.percent]);
      }
    }
    var g,
      e = 0,
      n = [{
        percent: 0,
        rate: O("0IDWEE_V")
      }, {
        percent: 25,
        rate: O("5I_WEDE2V")
      }, {
        percent: 50,
        rate: O("0I_WEDE5V")
      }, {
        percent: 75,
        rate: O("5I_WEDE7V")
      }, {
        percent: 100,
        rate: O("0I1WDE_E0V")
      }],
      f = q.extend(!0, [], n);
    a.onAdTimeUpdate(function (g) {
      var d = a.getAdDuration(),
        c = f[e];
      d && c && (void 0 === c.time && (c.time = c.percent * d / 100, 100 === c.percent && (c.time -= .6)), g > c.time && (e++, b(c)));
    });
    a.onAdCurrentPercent(function (a) {
      q(f).each(function (d, c) {
        if (c.percent === a) return b(c), !1;
      });
    });
    this.start = function (a) {
      g = a;
      f = q.extend(!0, [], n);
      e = 0;
    };
  }
  var q = function (a, b) {
      function g(a, b) {
        b = b || X;
        var k = b.createElement("script");
        k.text = a;
        b.head.appendChild(k).parentNode.removeChild(k);
      }
      function e(a) {
        var b = !!a && "length" in a && a.length,
          k = h.type(a);
        return "function" !== k && !h.isWindow(a) && ("array" === k || 0 === b || "number" == typeof b && 0 < b && b - 1 in a);
      }
      function n(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      }
      function f(a, b, c) {
        return h.isFunction(b) ? h.grep(a, function (a, k) {
          return !!b.call(a, k, a) !== c;
        }) : b.nodeType ? h.grep(a, function (a) {
          return a === b !== c;
        }) : "string" != typeof b ? h.grep(a, function (a) {
          return -1 < qb.call(b, a) !== c;
        }) : Ia.test(b) ? h.filter(b, a, c) : (b = h.filter(b, a), h.grep(a, function (a) {
          return -1 < qb.call(b, a) !== c && 1 === a.nodeType;
        }));
      }
      function p(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a;
      }
      function d(a) {
        var b = {};
        return h.each(a.match(ma) || [], function (a, k) {
          b[k] = !0;
        }), b;
      }
      function c(a) {
        return a;
      }
      function l(a) {
        throw a;
      }
      function r(a, b, c, d) {
        var k;
        try {
          a && h.isFunction(k = a.promise) ? k.call(a).done(b).fail(c) : a && h.isFunction(k = a.then) ? k.call(a, b, c) : b.apply(void 0, [a].slice(d));
        } catch (Ja) {
          c.apply(void 0, [Ja]);
        }
      }
      function m() {
        X.removeEventListener("DOMContentLoaded", m);
        a.removeEventListener("load", m);
        h.ready();
      }
      function q() {
        this.expando = h.expando + q.uid++;
      }
      function w(a, b, c) {
        var k;
        if (void 0 === c && 1 === a.nodeType) if (k = "data-" + b.replace(db, "-$\x26").toLowerCase(), c = a.getAttribute(k), "string" == typeof c) {
          try {
            k = c, c = "true" === k || "false" !== k && ("null" === k ? null : k === +k + "" ? +k : cb.test(k) ? JSON.parse(k) : k);
          } catch (ba) {}
          ka.set(a, b, c);
        } else c = void 0;
        return c;
      }
      function z(a, b, c, d) {
        var k,
          t = 1,
          y = 20,
          R = d ? function () {
            return d.cur();
          } : function () {
            return h.css(a, b, "");
          },
          e = R(),
          f = c && c[3] || (h.cssNumber[b] ? "" : "px"),
          g = (h.cssNumber[b] || "px" !== f && +e) && rb.exec(h.css(a, b));
        if (g && g[3] !== f) {
          f = f || g[3];
          c = c || [];
          g = +e || 1;
          do t = t || ".5", g /= t, h.style(a, b, g + f); while (t !== (t = R() / e) && 1 !== t && --y);
        }
        return c && (g = +g || +e || 0, k = c[1] ? g + (c[1] + 1) * c[2] : +c[2], d && (d.unit = f, d.start = g, d.end = k)), k;
      }
      function u(a, b) {
        for (var k, c, t = [], d = 0, e = a.length; d < e; d++) if (c = a[d], c.style) if (k = c.style.display, b) {
          if ("none" === k && (t[d] = S.get(c, "display") || null, t[d] || (c.style.display = "")), "" === c.style.display && Jb(c)) {
            k = d;
            var f = void 0;
            var g = c.ownerDocument;
            var l = c.nodeName;
            g = (c = Ra[l]) ? c : (f = g.body.appendChild(g.createElement(l)), c = h.css(f, "display"), f.parentNode.removeChild(f), "none" === c && (c = "block"), Ra[l] = c, c);
            t[k] = g;
          }
        } else "none" !== k && (t[d] = "none", S.set(c, "display", k));
        for (d = 0; d < e; d++) null != t[d] && (a[d].style.display = t[d]);
        return a;
      }
      function E(a, b) {
        var k;
        return k = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && n(a, b) ? h.merge([a], k) : k;
      }
      function C(a, b) {
        for (var k = 0, c = a.length; k < c; k++) S.set(a[k], "globalEval", !b || S.get(b[k], "globalEval"));
      }
      function A(a, b, c, d, e) {
        for (var k, t, y, R, f = b.createDocumentFragment(), g = [], ba = 0, l = a.length; ba < l; ba++) if (k = a[ba], k || 0 === k) if ("object" === h.type(k)) h.merge(g, k.nodeType ? [k] : k);else if (jb.test(k)) {
          t = t || f.appendChild(b.createElement("div"));
          y = (Va.exec(k) || ["", ""])[1].toLowerCase();
          y = na[y] || na._default;
          t.innerHTML = y[1] + h.htmlPrefilter(k) + y[2];
          for (y = y[0]; y--;) t = t.lastChild;
          h.merge(g, t.childNodes);
          t = f.firstChild;
          t.textContent = "";
        } else g.push(b.createTextNode(k));
        f.textContent = "";
        for (ba = 0; k = g[ba++];) if (d && -1 < h.inArray(k, d)) e && e.push(k);else if (R = h.contains(k.ownerDocument, k), t = E(f.appendChild(k), "script"), R && C(t), c) for (y = 0; k = t[y++];) Wa.test(k.type || "") && c.push(k);
        return f;
      }
      function x() {
        return !0;
      }
      function G() {
        return !1;
      }
      function F() {
        try {
          return X.activeElement;
        } catch (k) {}
      }
      function J(a, b, c, d, e, f) {
        var k, t;
        if ("object" == typeof b) {
          "string" != typeof c && (d = d || c, c = void 0);
          for (t in b) J(a, t, c, d, b[t], f);
          return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = G;else if (!e) return a;
        return 1 === f && (k = e, e = function (a) {
          return h().off(a), k.apply(this, arguments);
        }, e.guid = k.guid || (k.guid = h.guid++)), a.each(function () {
          h.event.add(this, b, e, d, c);
        });
      }
      function D(a, b) {
        return n(a, "table") && n(11 !== b.nodeType ? b : b.firstChild, "tr") ? h("\x3etbody", a)[0] || a : a;
      }
      function B(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
      }
      function N(a) {
        var b = yb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
      }
      function L(a, b) {
        var k, c, t, d, e, f;
        if (1 === b.nodeType) {
          if (S.hasData(a) && (k = S.access(a), c = S.set(b, k), f = k.events)) for (t in delete c.handle, c.events = {}, f) for (k = 0, c = f[t].length; k < c; k++) h.event.add(b, t, f[t][k]);
          ka.hasData(a) && (d = ka.access(a), e = h.extend({}, d), ka.set(b, e));
        }
      }
      function K(a, b, c, d) {
        b = la.apply([], b);
        var k,
          t,
          y,
          e = 0,
          R = a.length,
          f = R - 1,
          l = b[0],
          n = h.isFunction(l);
        if (n || 1 < R && "string" == typeof l && !ca.checkClone && xb.test(l)) return a.each(function (k) {
          var t = a.eq(k);
          n && (b[0] = l.call(this, k, t.html()));
          K(t, b, c, d);
        });
        if (R && (k = A(b, a[0].ownerDocument, !1, a, d), t = k.firstChild, 1 === k.childNodes.length && (k = t), t || d)) {
          t = h.map(E(k, "script"), B);
          for (y = t.length; e < R; e++) {
            var m = k;
            e !== f && (m = h.clone(m, !0, !0), y && h.merge(t, E(m, "script")));
            c.call(a[e], m, e);
          }
          if (y) for (k = t[t.length - 1].ownerDocument, h.map(t, N), e = 0; e < y; e++) m = t[e], Wa.test(m.type || "") && !S.access(m, "globalEval") && h.contains(k, m) && (m.src ? h._evalUrl && h._evalUrl(m.src) : g(m.textContent.replace(zb, ""), k));
        }
        return a;
      }
      function Q(a, b, c) {
        for (var k = b ? h.filter(b, a) : a, t = 0; null != (b = k[t]); t++) c || 1 !== b.nodeType || h.cleanData(E(b)), b.parentNode && (c && h.contains(b.ownerDocument, b) && C(E(b, "script")), b.parentNode.removeChild(b));
        return a;
      }
      function M(a, b, c) {
        var k,
          t,
          d,
          y,
          e = a.style;
        return c = c || Kb(a), c && (y = c.getPropertyValue(b) || c[b], "" !== y || h.contains(a.ownerDocument, a) || (y = h.style(a, b)), !ca.pixelMarginRight() && bc.test(y) && eb.test(b) && (k = e.width, t = e.minWidth, d = e.maxWidth, e.minWidth = e.maxWidth = e.width = y, y = c.width, e.width = k, e.minWidth = t, e.maxWidth = d)), void 0 !== y ? y + "" : y;
      }
      function T(a, b) {
        return {
          get: function () {
            return a() ? void delete this.get : (this.get = b).apply(this, arguments);
          }
        };
      }
      function V(a) {
        var b = h.cssProps[a];
        if (!b) {
          b = h.cssProps;
          a: {
            var k = a;
            if (!(k in ib)) {
              for (var c = k[0].toUpperCase() + k.slice(1), d = hb.length; d--;) if (k = hb[d] + c, k in ib) break a;
              k = void 0;
            }
          }
          b = b[a] = k || a;
        }
        return b;
      }
      function P(a, b, c) {
        return (a = rb.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b;
      }
      function ta(a, b, c, d, e) {
        var k = 0;
        for (b = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; 4 > b; b += 2) "margin" === c && (k += h.css(a, c + Ka[b], !0, e)), d ? ("content" === c && (k -= h.css(a, "padding" + Ka[b], !0, e)), "margin" !== c && (k -= h.css(a, "border" + Ka[b] + "Width", !0, e))) : (k += h.css(a, "padding" + Ka[b], !0, e), "padding" !== c && (k += h.css(a, "border" + Ka[b] + "Width", !0, e)));
        return k;
      }
      function O(a, b, c) {
        var k,
          d = Kb(a),
          t = M(a, b, d),
          y = "border-box" === h.css(a, "boxSizing", !1, d);
        return bc.test(t) ? t : (k = y && (ca.boxSizingReliable() || t === a.style[b]), "auto" === t && (t = a["offset" + b[0].toUpperCase() + b.slice(1)]), t = parseFloat(t) || 0, t + ta(a, b, c || (y ? "border" : "content"), k, d) + "px");
      }
      function aa(a, b, c, d, h) {
        return new aa.prototype.init(a, b, c, d, h);
      }
      function U() {
        Lb && (!1 === X.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(U) : a.setTimeout(U, h.fx.interval), h.fx.tick());
      }
      function Ga() {
        return a.setTimeout(function () {
          $a = void 0;
        }), $a = h.now();
      }
      function sa(a, b) {
        var k = 0,
          c = {
            height: a
          };
        for (b = b ? 1 : 0; 4 > k; k += 2 - b) {
          var d = Ka[k];
          c["margin" + d] = c["padding" + d] = a;
        }
        return b && (c.opacity = c.width = a), c;
      }
      function ra(a, b, c) {
        for (var k, d = (W.tweeners[b] || []).concat(W.tweeners["*"]), t = 0, h = d.length; t < h; t++) if (k = d[t].call(c, b, a)) return k;
      }
      function Z(a, b) {
        var k, c, d, t, e;
        for (k in a) if (c = h.camelCase(k), d = b[c], t = a[k], Array.isArray(t) && (d = t[1], t = a[k] = t[0]), k !== c && (a[c] = t, delete a[k]), e = h.cssHooks[c], e && "expand" in e) for (k in t = e.expand(t), delete a[c], t) k in a || (a[k] = t[k], b[k] = d);else b[c] = d;
      }
      function W(a, b, c) {
        var k,
          d = 0,
          t = W.prefilters.length,
          e = h.Deferred().always(function () {
            delete y.elem;
          }),
          y = function () {
            if (k) return !1;
            var b = $a || Ga();
            b = Math.max(0, f.startTime + f.duration - b);
            for (var c = 1 - (b / f.duration || 0), d = 0, t = f.tweens.length; d < t; d++) f.tweens[d].run(c);
            return e.notifyWith(a, [f, c, b]), 1 > c && t ? b : (t || e.notifyWith(a, [f, 1, 0]), e.resolveWith(a, [f]), !1);
          },
          f = e.promise({
            elem: a,
            props: h.extend({}, b),
            opts: h.extend(!0, {
              specialEasing: {},
              easing: h.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || Ga(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, k) {
              var c = h.Tween(a, f.opts, b, k, f.opts.specialEasing[b] || f.opts.easing);
              return f.tweens.push(c), c;
            },
            stop: function (b) {
              var c = 0,
                d = b ? f.tweens.length : 0;
              if (k) return this;
              for (k = !0; c < d; c++) f.tweens[c].run(1);
              return b ? (e.notifyWith(a, [f, 1, 0]), e.resolveWith(a, [f, b])) : e.rejectWith(a, [f, b]), this;
            }
          });
        c = f.props;
        for (Z(c, f.opts.specialEasing); d < t; d++) if (b = W.prefilters[d].call(f, a, c, f.opts)) return h.isFunction(b.stop) && (h._queueHooks(f.elem, f.opts.queue).stop = h.proxy(b.stop, b)), b;
        return h.map(c, ra, f), h.isFunction(f.opts.start) && f.opts.start.call(a, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), h.fx.timer(h.extend(y, {
          elem: a,
          anim: f,
          queue: f.opts.queue
        })), f;
      }
      function qa(a) {
        return (a.match(ma) || []).join(" ");
      }
      function ua(a) {
        return a.getAttribute && a.getAttribute("class") || "";
      }
      function ha(a, b, c, d) {
        var k;
        if (Array.isArray(b)) h.each(b, function (b, k) {
          c || Ib.test(a) ? d(a, k) : ha(a + "[" + ("object" == typeof k && null != k ? b : "") + "]", k, c, d);
        });else if (c || "object" !== h.type(b)) d(a, b);else for (k in b) ha(a + "[" + k + "]", b[k], c, d);
      }
      function Mb(a) {
        return function (b, k) {
          "string" != typeof b && (k = b, b = "*");
          var c,
            d = 0,
            t = b.toLowerCase().match(ma) || [];
          if (h.isFunction(k)) for (; c = t[d++];) "+" === c[0] ? (c = c.slice(1) || "*", (a[c] = a[c] || []).unshift(k)) : (a[c] = a[c] || []).push(k);
        };
      }
      function ja(a, b, c, d) {
        function k(y) {
          var f;
          return t[y] = !0, h.each(a[y] || [], function (a, h) {
            var y = h(b, c, d);
            return "string" != typeof y || e || t[y] ? e ? !(f = y) : void 0 : (b.dataTypes.unshift(y), k(y), !1);
          }), f;
        }
        var t = {},
          e = a === cc;
        return k(b.dataTypes[0]) || !t["*"] && k("*");
      }
      function da(a, b) {
        var k,
          c,
          d = h.ajaxSettings.flatOptions || {};
        for (k in b) void 0 !== b[k] && ((d[k] ? a : c || (c = {}))[k] = b[k]);
        return c && h.extend(!0, a, c), a;
      }
      var va = [],
        X = a.document,
        sb = Object.getPrototypeOf,
        wa = va.slice,
        la = va.concat,
        tb = va.push,
        qb = va.indexOf,
        Nb = {},
        La = Nb.toString,
        fa = Nb.hasOwnProperty,
        ia = fa.toString,
        xa = ia.call(Object),
        ca = {},
        h = function (a, b) {
          return new h.fn.init(a, b);
        },
        Ba = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Da = /^-ms-/,
        Ea = /-([a-z])/g,
        Ha = function (a, b) {
          return b.toUpperCase();
        };
      h.fn = h.prototype = {
        jquery: "3.2.1",
        constructor: h,
        length: 0,
        toArray: function () {
          return wa.call(this);
        },
        get: function (a) {
          return null == a ? wa.call(this) : 0 > a ? this[a + this.length] : this[a];
        },
        pushStack: function (a) {
          a = h.merge(this.constructor(), a);
          return a.prevObject = this, a;
        },
        each: function (a) {
          return h.each(this, a);
        },
        map: function (a) {
          return this.pushStack(h.map(this, function (b, k) {
            return a.call(b, k, b);
          }));
        },
        slice: function () {
          return this.pushStack(wa.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (a) {
          var b = this.length;
          a = +a + (0 > a ? b : 0);
          return this.pushStack(0 <= a && a < b ? [this[a]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: tb,
        sort: va.sort,
        splice: va.splice
      };
      h.extend = h.fn.extend = function () {
        var a,
          b,
          c,
          d,
          e = arguments[0] || {},
          f = 1,
          g = arguments.length,
          l = !1;
        "boolean" == typeof e && (l = e, e = arguments[f] || {}, f++);
        "object" == typeof e || h.isFunction(e) || (e = {});
        for (f === g && (e = this, f--); f < g; f++) if (null != (a = arguments[f])) for (b in a) {
          var n = e[b];
          var m = a[b];
          e !== m && (l && m && (h.isPlainObject(m) || (c = Array.isArray(m))) ? (c ? (c = !1, d = n && Array.isArray(n) ? n : []) : d = n && h.isPlainObject(n) ? n : {}, e[b] = h.extend(l, d, m)) : void 0 !== m && (e[b] = m));
        }
        return e;
      };
      h.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
          throw Error(a);
        },
        noop: function () {},
        isFunction: function (a) {
          return "function" === h.type(a);
        },
        isWindow: function (a) {
          return null != a && a === a.window;
        },
        isNumeric: function (a) {
          var b = h.type(a);
          return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        },
        isPlainObject: function (a) {
          var b, k;
          return !(!a || "[object Object]" !== La.call(a)) && (!(b = sb(a)) || (k = fa.call(b, "constructor") && b.constructor, "function" == typeof k && ia.call(k) === xa));
        },
        isEmptyObject: function (a) {
          for (var b in a) return !1;
          return !0;
        },
        type: function (a) {
          return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? Nb[La.call(a)] || "object" : typeof a;
        },
        globalEval: function (a) {
          g(a);
        },
        camelCase: function (a) {
          return a.replace(Da, "ms-").replace(Ea, Ha);
        },
        each: function (a, b) {
          var k,
            c = 0;
          if (e(a)) for (k = a.length; c < k && !1 !== b.call(a[c], c, a[c]); c++);else for (c in a) if (!1 === b.call(a[c], c, a[c])) break;
          return a;
        },
        trim: function (a) {
          return null == a ? "" : (a + "").replace(Ba, "");
        },
        makeArray: function (a, b) {
          var c = b || [];
          return null != a && (e(Object(a)) ? h.merge(c, "string" == typeof a ? [a] : a) : tb.call(c, a)), c;
        },
        inArray: function (a, b, c) {
          return null == b ? -1 : qb.call(b, a, c);
        },
        merge: function (a, b) {
          for (var c = +b.length, k = 0, d = a.length; k < c; k++) a[d++] = b[k];
          return a.length = d, a;
        },
        grep: function (a, b, c) {
          for (var k = [], d = 0, t = a.length, e = !c; d < t; d++) c = !b(a[d], d), c !== e && k.push(a[d]);
          return k;
        },
        map: function (a, b, c) {
          var k,
            d = 0,
            t = [];
          if (e(a)) for (k = a.length; d < k; d++) {
            var h = b(a[d], d, c);
            null != h && t.push(h);
          } else for (d in a) h = b(a[d], d, c), null != h && t.push(h);
          return la.apply([], t);
        },
        guid: 1,
        proxy: function (a, b) {
          var c, k, d;
          if ("string" == typeof b && (c = a[b], b = a, a = c), h.isFunction(a)) return k = wa.call(arguments, 2), d = function () {
            return a.apply(b || this, k.concat(wa.call(arguments)));
          }, d.guid = a.guid = a.guid || h.guid++, d;
        },
        now: Date.now,
        support: ca
      });
      "function" == typeof Symbol && (h.fn[Symbol.iterator] = va[Symbol.iterator]);
      h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        Nb["[object " + b + "]"] = b.toLowerCase();
      });
      var Ma = function (a) {
        function b(a, b, c, k) {
          var d,
            t,
            e,
            h,
            f = b && b.ownerDocument,
            y = b ? b.nodeType : 9;
          if (c = c || [], "string" != typeof a || !a || 1 !== y && 9 !== y && 11 !== y) return c;
          if (!k && ((b ? b.ownerDocument || b : T) !== D && ia(b), b = b || D, A)) {
            if (11 !== y && (h = ka.exec(a))) if (d = h[1]) {
              if (9 === y) {
                if (!(t = b.getElementById(d))) return c;
                if (t.id === d) return c.push(t), c;
              } else {
                if (f && (t = f.getElementById(d)) && Q(b, t) && t.id === d) return c.push(t), c;
              }
            } else {
              if (h[2]) return ra.apply(c, b.getElementsByTagName(a)), c;
              if ((d = h[3]) && ea.getElementsByClassName && b.getElementsByClassName) return ra.apply(c, b.getElementsByClassName(d)), c;
            }
            if (!(!ea.qsa || aa[a + " "] || x && x.test(a))) {
              if (1 !== y) {
                f = b;
                var g = a;
              } else if ("object" !== b.nodeName.toLowerCase()) {
                (e = b.getAttribute("id")) ? e = e.replace(la, ma) : b.setAttribute("id", e = L);
                t = oa(a);
                for (d = t.length; d--;) t[d] = "#" + e + " " + r(t[d]);
                g = t.join(",");
                f = sb.test(a) && m(b.parentNode) || b;
              }
              if (g) try {
                return ra.apply(c, f.querySelectorAll(g)), c;
              } catch (bd) {} finally {
                e === L && b.removeAttribute("id");
              }
            }
          }
          return V(a.replace(Z, "$1"), b, c, k);
        }
        function c() {
          function a(c, k) {
            return b.push(c + " ") > Y.cacheLength && delete a[b.shift()], a[c + " "] = k;
          }
          var b = [];
          return a;
        }
        function k(a) {
          return a[L] = !0, a;
        }
        function d(a) {
          var b = D.createElement("fieldset");
          try {
            return !!a(b);
          } catch ($c) {
            return !1;
          } finally {
            b.parentNode && b.parentNode.removeChild(b);
          }
        }
        function e(a, b) {
          for (var c = a.split("|"), k = c.length; k--;) Y.attrHandle[c[k]] = b;
        }
        function h(a, b) {
          var c = b && a,
            k = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
          if (k) return k;
          if (c) for (; c = c.nextSibling;) if (c === b) return -1;
          return a ? 1 : -1;
        }
        function f(a) {
          return function (b) {
            return "input" === b.nodeName.toLowerCase() && b.type === a;
          };
        }
        function g(a) {
          return function (b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a;
          };
        }
        function l(a) {
          return function (b) {
            return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && va(b) === a : b.disabled === a : "label" in b && b.disabled === a;
          };
        }
        function n(a) {
          return k(function (b) {
            return b = +b, k(function (c, k) {
              for (var d, t = a([], c.length, b), e = t.length; e--;) c[d = t[e]] && (c[d] = !(k[d] = c[d]));
            });
          });
        }
        function m(a) {
          return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function p() {}
        function r(a) {
          for (var b = 0, c = a.length, k = ""; b < c; b++) k += a[b].value;
          return k;
        }
        function u(a, b, c) {
          var k = b.dir,
            d = b.next,
            t = d || k,
            e = c && "parentNode" === t,
            h = G++;
          return b.first ? function (b, c, d) {
            for (; b = b[k];) if (1 === b.nodeType || e) return a(b, c, d);
            return !1;
          } : function (b, c, f) {
            var y,
              g,
              l,
              n = [I, h];
            if (f) for (; b = b[k];) {
              if ((1 === b.nodeType || e) && a(b, c, f)) return !0;
            } else for (; b = b[k];) if (1 === b.nodeType || e) if (l = b[L] || (b[L] = {}), g = l[b.uniqueID] || (l[b.uniqueID] = {}), d && d === b.nodeName.toLowerCase()) b = b[k] || b;else {
              if ((y = g[t]) && y[0] === I && y[1] === h) return n[2] = y[2];
              if (g[t] = n, n[2] = a(b, c, f)) return !0;
            }
            return !1;
          };
        }
        function q(a) {
          return 1 < a.length ? function (b, c, k) {
            for (var d = a.length; d--;) if (!a[d](b, c, k)) return !1;
            return !0;
          } : a[0];
        }
        function w(a, b, c, k, d) {
          for (var t, e = [], h = 0, f = a.length, y = null != b; h < f; h++) (t = a[h]) && (c && !c(t, k, d) || (e.push(t), y && b.push(h)));
          return e;
        }
        function F(a, c, d, t, e, h) {
          return t && !t[L] && (t = F(t)), e && !e[L] && (e = F(e, h)), k(function (k, h, f, y) {
            var g,
              l = [],
              n = [],
              m = h.length,
              R;
            if (!(R = k)) {
              R = c || "*";
              for (var p = f.nodeType ? [f] : f, ba = [], ab = 0, Ja = p.length; ab < Ja; ab++) b(R, p[ab], ba);
              R = ba;
            }
            R = !a || !k && c ? R : w(R, l, a, f, y);
            p = d ? e || (k ? a : m || t) ? [] : h : R;
            if (d && d(R, p, f, y), t) {
              var r = w(p, n);
              t(r, [], f, y);
              for (f = r.length; f--;) (g = r[f]) && (p[n[f]] = !(R[n[f]] = g));
            }
            if (k) {
              if (e || a) {
                if (e) {
                  r = [];
                  for (f = p.length; f--;) (g = p[f]) && r.push(R[f] = g);
                  e(null, p = [], r, y);
                }
                for (f = p.length; f--;) (g = p[f]) && -1 < (r = e ? U(k, g) : l[f]) && (k[r] = !(h[r] = g));
              }
            } else p = w(p === h ? p.splice(m, p.length) : p), e ? e(null, h, p, y) : ra.apply(h, p);
          });
        }
        function B(a) {
          var b,
            c,
            k = a.length,
            d = Y.relative[a[0].type];
          var t = d || Y.relative[" "];
          for (var e = d ? 1 : 0, h = u(function (a) {
              return a === b;
            }, t, !0), f = u(function (a) {
              return -1 < U(b, a);
            }, t, !0), y = [function (a, c, k) {
              a = !d && (k || c !== K) || ((b = c).nodeType ? h(a, c, k) : f(a, c, k));
              return b = null, a;
            }]; e < k; e++) if (t = Y.relative[a[e].type]) y = [u(q(y), t)];else {
            if (t = Y.filter[a[e].type].apply(null, a[e].matches), t[L]) {
              for (c = ++e; c < k && !Y.relative[a[c].type]; c++);
              return F(1 < e && q(y), 1 < e && r(a.slice(0, e - 1).concat({
                value: " " === a[e - 2].type ? "*" : ""
              })).replace(Z, "$1"), t, e < c && B(a.slice(e, c)), c < k && B(a = a.slice(c)), c < k && r(a));
            }
            y.push(t);
          }
          return q(y);
        }
        function v(a, c) {
          var d = 0 < c.length,
            t = 0 < a.length,
            e = function (k, e, h, f, y) {
              var g,
                l,
                n = 0,
                m = "0",
                R = k && [],
                p = [],
                ba = K,
                r = k || t && Y.find.TAG("*", y),
                Ja = I += null == ba ? 1 : Math.random() || .1,
                ab = r.length;
              for (y && (K = e === D || e || y); m !== ab && null != (g = r[m]); m++) {
                if (t && g) {
                  var u = 0;
                  for (e || g.ownerDocument === D || (ia(g), h = !A); l = a[u++];) if (l(g, e || D, h)) {
                    f.push(g);
                    break;
                  }
                  y && (I = Ja);
                }
                d && ((g = !l && g) && n--, k && R.push(g));
              }
              if (n += m, d && m !== n) {
                for (u = 0; l = c[u++];) l(R, p, e, h);
                if (k) {
                  if (0 < n) for (; m--;) R[m] || p[m] || (p[m] = Ga.call(f));
                  p = w(p);
                }
                ra.apply(f, p);
                y && !k && 0 < p.length && 1 < n + c.length && b.uniqueSort(f);
              }
              return y && (I = Ja, K = ba), R;
            };
          return d ? k(e) : e;
        }
        var z,
          J,
          V,
          K,
          P,
          N,
          D,
          M,
          A,
          x,
          E,
          C,
          Q,
          L = "sizzle" + 1 * new Date(),
          T = a.document,
          I = 0,
          G = 0,
          H = c(),
          ta = c(),
          aa = c(),
          O = function (a, b) {
            return a === b && (N = !0), 0;
          },
          pa = {}.hasOwnProperty,
          S = [],
          Ga = S.pop,
          X = S.push,
          ra = S.push,
          sa = S.slice,
          U = function (a, b) {
            for (var c = 0, k = a.length; c < k; c++) if (a[c] === b) return c;
            return -1;
          },
          W = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
          Z = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
          ca = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
          tb = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
          Ya = RegExp("\x3d[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
          ha = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
          Mb = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
          La = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
            PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
          },
          ja = /^(?:input|select|textarea|button)$/i,
          ua = /^h\d$/i,
          qa = /^[^{]+\{\s*\[native \w/,
          ka = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          sb = /[+~]/,
          da = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
          fa = function (a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320);
          },
          la = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ma = function (a, b) {
            return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
          },
          na = function () {
            ia();
          },
          va = u(function (a) {
            return !0 === a.disabled && ("form" in a || "label" in a);
          }, {
            dir: "parentNode",
            next: "legend"
          });
        try {
          ra.apply(S = sa.call(T.childNodes), T.childNodes), S[T.childNodes.length].nodeType;
        } catch (ab) {
          ra = {
            apply: S.length ? function (a, b) {
              X.apply(a, sa.call(b));
            } : function (a, b) {
              for (var c = a.length, k = 0; a[c++] = b[k++];);
              a.length = c - 1;
            }
          };
        }
        var ea = b.support = {};
        var wa = b.isXML = function (a) {
          a = a && (a.ownerDocument || a).documentElement;
          return !!a && "HTML" !== a.nodeName;
        };
        var ia = b.setDocument = function (a) {
          var b, c;
          a = a ? a.ownerDocument || a : T;
          return a !== D && 9 === a.nodeType && a.documentElement ? (D = a, M = D.documentElement, A = !wa(D), T !== D && (c = D.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", na, !1) : c.attachEvent && c.attachEvent("onunload", na)), ea.attributes = d(function (a) {
            return a.className = "i", !a.getAttribute("className");
          }), ea.getElementsByTagName = d(function (a) {
            return a.appendChild(D.createComment("")), !a.getElementsByTagName("*").length;
          }), ea.getElementsByClassName = qa.test(D.getElementsByClassName), ea.getById = d(function (a) {
            return M.appendChild(a).id = L, !D.getElementsByName || !D.getElementsByName(L).length;
          }), ea.getById ? (Y.filter.ID = function (a) {
            var b = a.replace(da, fa);
            return function (a) {
              return a.getAttribute("id") === b;
            };
          }, Y.find.ID = function (a, b) {
            if ("undefined" != typeof b.getElementById && A) {
              var c = b.getElementById(a);
              return c ? [c] : [];
            }
          }) : (Y.filter.ID = function (a) {
            var b = a.replace(da, fa);
            return function (a) {
              return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b;
            };
          }, Y.find.ID = function (a, b) {
            if ("undefined" != typeof b.getElementById && A) {
              var c,
                k,
                d = b.getElementById(a);
              if (d) {
                if (c = d.getAttributeNode("id"), c && c.value === a) return [d];
                var t = b.getElementsByName(a);
                for (k = 0; d = t[k++];) if (c = d.getAttributeNode("id"), c && c.value === a) return [d];
              }
              return [];
            }
          }), Y.find.TAG = ea.getElementsByTagName ? function (a, b) {
            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : ea.qsa ? b.querySelectorAll(a) : void 0;
          } : function (a, b) {
            var c,
              k = [],
              d = 0,
              t = b.getElementsByTagName(a);
            if ("*" === a) {
              for (; c = t[d++];) 1 === c.nodeType && k.push(c);
              return k;
            }
            return t;
          }, Y.find.CLASS = ea.getElementsByClassName && function (a, b) {
            if ("undefined" != typeof b.getElementsByClassName && A) return b.getElementsByClassName(a);
          }, E = [], x = [], (ea.qsa = qa.test(D.querySelectorAll)) && (d(function (a) {
            M.appendChild(a).innerHTML = "\x3ca id\x3d'" + L + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + L + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
            a.querySelectorAll("[msallowcapture^\x3d'']").length && x.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            a.querySelectorAll("[selected]").length || x.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
            a.querySelectorAll("[id~\x3d" + L + "-]").length || x.push("~\x3d");
            a.querySelectorAll(":checked").length || x.push(":checked");
            a.querySelectorAll("a#" + L + "+*").length || x.push(".#.+[+~]");
          }), d(function (a) {
            a.innerHTML = "\x3ca href\x3d'' disabled\x3d'disabled'\x3e\x3c/a\x3e\x3cselect disabled\x3d'disabled'\x3e\x3coption/\x3e\x3c/select\x3e";
            var b = D.createElement("input");
            b.setAttribute("type", "hidden");
            a.appendChild(b).setAttribute("name", "D");
            a.querySelectorAll("[name\x3dd]").length && x.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
            2 !== a.querySelectorAll(":enabled").length && x.push(":enabled", ":disabled");
            M.appendChild(a).disabled = !0;
            2 !== a.querySelectorAll(":disabled").length && x.push(":enabled", ":disabled");
            a.querySelectorAll("*,:x");
            x.push(",.*:");
          })), (ea.matchesSelector = qa.test(C = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && d(function (a) {
            ea.disconnectedMatch = C.call(a, "*");
            C.call(a, "[s!\x3d'']:x");
            E.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
          }), x = x.length && new RegExp(x.join("|")), E = E.length && new RegExp(E.join("|")), b = qa.test(M.compareDocumentPosition), Q = b || qa.test(M.contains) ? function (a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a,
              k = b && b.parentNode;
            return a === k || !(!k || 1 !== k.nodeType || !(c.contains ? c.contains(k) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(k)));
          } : function (a, b) {
            if (b) for (; b = b.parentNode;) if (b === a) return !0;
            return !1;
          }, O = b ? function (a, b) {
            if (a === b) return N = !0, 0;
            var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
            return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !ea.sortDetached && b.compareDocumentPosition(a) === c ? a === D || a.ownerDocument === T && Q(T, a) ? -1 : b === D || b.ownerDocument === T && Q(T, b) ? 1 : P ? U(P, a) - U(P, b) : 0 : 4 & c ? -1 : 1);
          } : function (a, b) {
            if (a === b) return N = !0, 0;
            var c = 0;
            var k = a.parentNode;
            var d = b.parentNode,
              t = [a],
              e = [b];
            if (!k || !d) return a === D ? -1 : b === D ? 1 : k ? -1 : d ? 1 : P ? U(P, a) - U(P, b) : 0;
            if (k === d) return h(a, b);
            for (k = a; k = k.parentNode;) t.unshift(k);
            for (k = b; k = k.parentNode;) e.unshift(k);
            for (; t[c] === e[c];) c++;
            return c ? h(t[c], e[c]) : t[c] === T ? -1 : e[c] === T ? 1 : 0;
          }, D) : D;
        };
        b.matches = function (a, c) {
          return b(a, null, null, c);
        };
        b.matchesSelector = function (a, c) {
          if ((a.ownerDocument || a) !== D && ia(a), c = c.replace(Ya, "\x3d'$1']"), !(!ea.matchesSelector || !A || aa[c + " "] || E && E.test(c) || x && x.test(c))) try {
            var k = C.call(a, c);
            if (k || ea.disconnectedMatch || a.document && 11 !== a.document.nodeType) return k;
          } catch (ad) {}
          return 0 < b(c, D, null, [a]).length;
        };
        b.contains = function (a, b) {
          return (a.ownerDocument || a) !== D && ia(a), Q(a, b);
        };
        b.attr = function (a, b) {
          (a.ownerDocument || a) !== D && ia(a);
          var c = Y.attrHandle[b.toLowerCase()];
          c = c && pa.call(Y.attrHandle, b.toLowerCase()) ? c(a, b, !A) : void 0;
          return void 0 !== c ? c : ea.attributes || !A ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null;
        };
        b.escape = function (a) {
          return (a + "").replace(la, ma);
        };
        b.error = function (a) {
          throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function (a) {
          var b,
            c = [],
            k = 0,
            d = 0;
          if (N = !ea.detectDuplicates, P = !ea.sortStable && a.slice(0), a.sort(O), N) {
            for (; b = a[d++];) b === a[d] && (k = c.push(d));
            for (; k--;) a.splice(c[k], 1);
          }
          return P = null, a;
        };
        var ac = b.getText = function (a) {
          var b,
            c = "",
            k = 0;
          if (b = a.nodeType) {
            if (1 === b || 9 === b || 11 === b) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += ac(a);
            } else {
              if (3 === b || 4 === b) return a.nodeValue;
            }
          } else for (; b = a[k++];) c += ac(b);
          return c;
        };
        var Y = b.selectors = {
          cacheLength: 50,
          createPseudo: k,
          match: La,
          attrHandle: {},
          find: {},
          relative: {
            "\x3e": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (a) {
              return a[1] = a[1].replace(da, fa), a[3] = (a[3] || a[4] || a[5] || "").replace(da, fa), "~\x3d" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
            },
            CHILD: function (a) {
              return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a;
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return La.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ha.test(c) && (b = oa(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
            }
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(da, fa).toLowerCase();
              return "*" === a ? function () {
                return !0;
              } : function (a) {
                return a.nodeName && a.nodeName.toLowerCase() === b;
              };
            },
            CLASS: function (a) {
              var b = H[a + " "];
              return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), H(a, function (a) {
                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
              }));
            },
            ATTR: function (a, c, k) {
              return function (d) {
                d = b.attr(d, a);
                return null == d ? "!\x3d" === c : !c || (d += "", "\x3d" === c ? d === k : "!\x3d" === c ? d !== k : "^\x3d" === c ? k && 0 === d.indexOf(k) : "*\x3d" === c ? k && -1 < d.indexOf(k) : "$\x3d" === c ? k && d.slice(-k.length) === k : "~\x3d" === c ? -1 < (" " + d.replace(W, " ") + " ").indexOf(k) : "|\x3d" === c && (d === k || d.slice(0, k.length + 1) === k + "-"));
              };
            },
            CHILD: function (a, b, c, k, d) {
              var t = "nth" !== a.slice(0, 3),
                e = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === k && 0 === d ? function (a) {
                return !!a.parentNode;
              } : function (b, c, f) {
                var y, g;
                c = t !== e ? "nextSibling" : "previousSibling";
                var l = b.parentNode,
                  n = h && b.nodeName.toLowerCase();
                f = !f && !h;
                var m = !1;
                if (l) {
                  if (t) {
                    for (; c;) {
                      for (y = b; y = y[c];) if (h ? y.nodeName.toLowerCase() === n : 1 === y.nodeType) return !1;
                      var R = c = "only" === a && !R && "nextSibling";
                    }
                    return !0;
                  }
                  if (R = [e ? l.firstChild : l.lastChild], e && f) {
                    y = l;
                    var p = y[L] || (y[L] = {});
                    var ba = p[y.uniqueID] || (p[y.uniqueID] = {});
                    var r = ba[a] || [];
                    m = (g = r[0] === I && r[1]) && r[2];
                    for (y = g && l.childNodes[g]; y = ++g && y && y[c] || (m = g = 0) || R.pop();) if (1 === y.nodeType && ++m && y === b) {
                      ba[a] = [I, g, m];
                      break;
                    }
                  } else if (f && (y = b, p = y[L] || (y[L] = {}), ba = p[y.uniqueID] || (p[y.uniqueID] = {}), r = ba[a] || [], g = r[0] === I && r[1], m = g), !1 === m) for (; (y = ++g && y && y[c] || (m = g = 0) || R.pop()) && ((h ? y.nodeName.toLowerCase() !== n : 1 !== y.nodeType) || !++m || (f && (p = y[L] || (y[L] = {}), ba = p[y.uniqueID] || (p[y.uniqueID] = {}), ba[a] = [I, m]), y !== b)););
                  return m -= d, m === k || 0 === m % k && 0 <= m / k;
                }
              };
            },
            PSEUDO: function (a, c) {
              var d,
                t = Y.pseudos[a] || Y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
              return t[L] ? t(c) : 1 < t.length ? (d = [a, a, "", c], Y.setFilters.hasOwnProperty(a.toLowerCase()) ? k(function (a, b) {
                for (var k, d = t(a, c), e = d.length; e--;) k = U(a, d[e]), a[k] = !(b[k] = d[e]);
              }) : function (a) {
                return t(a, 0, d);
              }) : t;
            }
          },
          pseudos: {
            not: k(function (a) {
              var b = [],
                c = [],
                d = J(a.replace(Z, "$1"));
              return d[L] ? k(function (a, b, c, k) {
                var t;
                c = d(a, null, k, []);
                for (k = a.length; k--;) (t = c[k]) && (a[k] = !(b[k] = t));
              }) : function (a, k, t) {
                return b[0] = a, d(b, null, t, c), b[0] = null, !c.pop();
              };
            }),
            has: k(function (a) {
              return function (c) {
                return 0 < b(a, c).length;
              };
            }),
            contains: k(function (a) {
              return a = a.replace(da, fa), function (b) {
                return -1 < (b.textContent || b.innerText || ac(b)).indexOf(a);
              };
            }),
            lang: k(function (a) {
              return Mb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(da, fa).toLowerCase(), function (b) {
                var c;
                do if (c = A ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              };
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === M;
            },
            focus: function (a) {
              return a === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
            },
            enabled: l(!1),
            disabled: l(!0),
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return "input" === b && !!a.checked || "option" === b && !!a.selected;
            },
            selected: function (a) {
              return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling) if (6 > a.nodeType) return !1;
              return !0;
            },
            parent: function (a) {
              return !Y.pseudos.empty(a);
            },
            header: function (a) {
              return ua.test(a.nodeName);
            },
            input: function (a) {
              return ja.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return "input" === b && "button" === a.type || "button" === b;
            },
            text: function (a) {
              var b;
              return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
            },
            first: n(function () {
              return [0];
            }),
            last: n(function (a, b) {
              return [b - 1];
            }),
            eq: n(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: n(function (a, b) {
              for (var c = 0; c < b; c += 2) a.push(c);
              return a;
            }),
            odd: n(function (a, b) {
              for (var c = 1; c < b; c += 2) a.push(c);
              return a;
            }),
            lt: n(function (a, b, c) {
              for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
              return a;
            }),
            gt: n(function (a, b, c) {
              for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
              return a;
            })
          }
        };
        Y.pseudos.nth = Y.pseudos.eq;
        for (z in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) Y.pseudos[z] = f(z);
        for (z in {
          submit: !0,
          reset: !0
        }) Y.pseudos[z] = g(z);
        p.prototype = Y.filters = Y.pseudos;
        Y.setFilters = new p();
        var oa = b.tokenize = function (a, c) {
          var k, d, t, e, h;
          if (e = ta[a + " "]) return c ? 0 : e.slice(0);
          e = a;
          var f = [];
          for (h = Y.preFilter; e;) {
            y && !(k = ca.exec(e)) || (k && (e = e.slice(k[0].length) || e), f.push(d = []));
            var y = !1;
            (k = tb.exec(e)) && (y = k.shift(), d.push({
              value: y,
              type: k[0].replace(Z, " ")
            }), e = e.slice(y.length));
            for (t in Y.filter) !(k = La[t].exec(e)) || h[t] && !(k = h[t](k)) || (y = k.shift(), d.push({
              value: y,
              type: t,
              matches: k
            }), e = e.slice(y.length));
            if (!y) break;
          }
          return c ? e.length : e ? b.error(a) : ta(a, f).slice(0);
        };
        return J = b.compile = function (a, b) {
          var c,
            k = [],
            d = [],
            t = aa[a + " "];
          if (!t) {
            b || (b = oa(a));
            for (c = b.length; c--;) t = B(b[c]), t[L] ? k.push(t) : d.push(t);
            t = aa(a, v(d, k));
            t.selector = a;
          }
          return t;
        }, V = b.select = function (a, b, c, k) {
          var d,
            t,
            e,
            h,
            f,
            y = "function" == typeof a && a,
            g = !k && oa(a = y.selector || a);
          if (c = c || [], 1 === g.length) {
            if (t = g[0] = g[0].slice(0), 2 < t.length && "ID" === (e = t[0]).type && 9 === b.nodeType && A && Y.relative[t[1].type]) {
              if (b = (Y.find.ID(e.matches[0].replace(da, fa), b) || [])[0], !b) return c;
              y && (b = b.parentNode);
              a = a.slice(t.shift().value.length);
            }
            for (d = La.needsContext.test(a) ? 0 : t.length; d-- && (e = t[d], !Y.relative[h = e.type]);) if ((f = Y.find[h]) && (k = f(e.matches[0].replace(da, fa), sb.test(t[0].type) && m(b.parentNode) || b))) {
              if (t.splice(d, 1), a = k.length && r(t), !a) return ra.apply(c, k), c;
              break;
            }
          }
          return (y || J(a, g))(k, b, !A, c, !b || sb.test(a) && m(b.parentNode) || b), c;
        }, ea.sortStable = L.split("").sort(O).join("") === L, ea.detectDuplicates = !!N, ia(), ea.sortDetached = d(function (a) {
          return 1 & a.compareDocumentPosition(D.createElement("fieldset"));
        }), d(function (a) {
          return a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e", "#" === a.firstChild.getAttribute("href");
        }) || e("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), ea.attributes && d(function (a) {
          return a.innerHTML = "\x3cinput/\x3e", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || e("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), d(function (a) {
          return null == a.getAttribute("disabled");
        }) || e("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, c) {
          var k;
          if (!c) return !0 === a[b] ? b.toLowerCase() : (k = a.getAttributeNode(b)) && k.specified ? k.value : null;
        }), b;
      }(a);
      h.find = Ma;
      h.expr = Ma.selectors;
      h.expr[":"] = h.expr.pseudos;
      h.uniqueSort = h.unique = Ma.uniqueSort;
      h.text = Ma.getText;
      h.isXMLDoc = Ma.isXML;
      h.contains = Ma.contains;
      h.escapeSelector = Ma.escape;
      var bb = function (a, b, c) {
          for (var k = [], d = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
            if (d && h(a).is(c)) break;
            k.push(a);
          }
          return k;
        },
        za = function (a, b) {
          for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
          return c;
        },
        Aa = h.expr.match.needsContext,
        Ca = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ia = /^.[^:#\[\.,]*$/;
      h.filter = function (a, b, c) {
        var k = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === k.nodeType ? h.find.matchesSelector(k, a) ? [k] : [] : h.find.matches(a, h.grep(b, function (a) {
          return 1 === a.nodeType;
        }));
      };
      h.fn.extend({
        find: function (a) {
          var b,
            c = this.length,
            k = this;
          if ("string" != typeof a) return this.pushStack(h(a).filter(function () {
            for (b = 0; b < c; b++) if (h.contains(k[b], this)) return !0;
          }));
          var d = this.pushStack([]);
          for (b = 0; b < c; b++) h.find(a, k[b], d);
          return 1 < c ? h.uniqueSort(d) : d;
        },
        filter: function (a) {
          return this.pushStack(f(this, a || [], !1));
        },
        not: function (a) {
          return this.pushStack(f(this, a || [], !0));
        },
        is: function (a) {
          return !!f(this, "string" == typeof a && Aa.test(a) ? h(a) : a || [], !1).length;
        }
      });
      var Pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (h.fn.init = function (a, b, c) {
        var k, d;
        if (!a) return this;
        if (c = c || Qa, "string" == typeof a) {
          if (k = "\x3c" === a[0] && "\x3e" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Pa.exec(a), !k || !k[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
          if (k[1]) {
            if (b = b instanceof h ? b[0] : b, h.merge(this, h.parseHTML(k[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), Ca.test(k[1]) && h.isPlainObject(b)) for (k in b) h.isFunction(this[k]) ? this[k](b[k]) : this.attr(k, b[k]);
            return this;
          }
          return d = X.getElementById(k[2]), d && (this[0] = d, this.length = 1), this;
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : h.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(h) : h.makeArray(a, this);
      }).prototype = h.fn;
      var Qa = h(X);
      var Sa = /^(?:parents|prev(?:Until|All))/,
        Ua = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
      h.fn.extend({
        has: function (a) {
          var b = h(a, this),
            c = b.length;
          return this.filter(function () {
            for (var a = 0; a < c; a++) if (h.contains(this, b[a])) return !0;
          });
        },
        closest: function (a, b) {
          var c,
            k = 0,
            d = this.length,
            t = [],
            e = "string" != typeof a && h(a);
          if (!Aa.test(a)) for (; k < d; k++) for (c = this[k]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (e ? -1 < e.index(c) : 1 === c.nodeType && h.find.matchesSelector(c, a))) {
            t.push(c);
            break;
          }
          return this.pushStack(1 < t.length ? h.uniqueSort(t) : t);
        },
        index: function (a) {
          return a ? "string" == typeof a ? qb.call(h(a), this[0]) : qb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (a, b) {
          return this.pushStack(h.uniqueSort(h.merge(this.get(), h(a, b))));
        },
        addBack: function (a) {
          return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
      });
      h.each({
        parent: function (a) {
          return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        parents: function (a) {
          return bb(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return bb(a, "parentNode", c);
        },
        next: function (a) {
          return p(a, "nextSibling");
        },
        prev: function (a) {
          return p(a, "previousSibling");
        },
        nextAll: function (a) {
          return bb(a, "nextSibling");
        },
        prevAll: function (a) {
          return bb(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return bb(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return bb(a, "previousSibling", c);
        },
        siblings: function (a) {
          return za((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return za(a.firstChild);
        },
        contents: function (a) {
          return n(a, "iframe") ? a.contentDocument : (n(a, "template") && (a = a.content || a), h.merge([], a.childNodes));
        }
      }, function (a, b) {
        h.fn[a] = function (c, k) {
          var d = h.map(this, b, c);
          return "Until" !== a.slice(-5) && (k = c), k && "string" == typeof k && (d = h.filter(k, d)), 1 < this.length && (Ua[a] || h.uniqueSort(d), Sa.test(a) && d.reverse()), this.pushStack(d);
        };
      });
      var ma = /[^\x20\t\r\n\f]+/g;
      h.Callbacks = function (a) {
        a = "string" == typeof a ? d(a) : h.extend({}, a);
        var b,
          c,
          k,
          e,
          f = [],
          g = [],
          l = -1,
          n = function () {
            e = e || a.once;
            for (k = b = !0; g.length; l = -1) for (c = g.shift(); ++l < f.length;) !1 === f[l].apply(c[0], c[1]) && a.stopOnFalse && (l = f.length, c = !1);
            a.memory || (c = !1);
            b = !1;
            e && (f = c ? [] : "");
          },
          m = {
            add: function () {
              return f && (c && !b && (l = f.length - 1, g.push(c)), function Xc(b) {
                h.each(b, function (b, c) {
                  h.isFunction(c) ? a.unique && m.has(c) || f.push(c) : c && c.length && "string" !== h.type(c) && Xc(c);
                });
              }(arguments), c && !b && n()), this;
            },
            remove: function () {
              return h.each(arguments, function (a, b) {
                for (var c; -1 < (c = h.inArray(b, f, c));) f.splice(c, 1), c <= l && l--;
              }), this;
            },
            has: function (a) {
              return a ? -1 < h.inArray(a, f) : 0 < f.length;
            },
            empty: function () {
              return f && (f = []), this;
            },
            disable: function () {
              return e = g = [], f = c = "", this;
            },
            disabled: function () {
              return !f;
            },
            lock: function () {
              return e = g = [], c || b || (f = c = ""), this;
            },
            locked: function () {
              return !!e;
            },
            fireWith: function (a, c) {
              return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || n()), this;
            },
            fire: function () {
              return m.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!k;
            }
          };
        return m;
      };
      h.extend({
        Deferred: function (b) {
          var k = [["notify", "progress", h.Callbacks("memory"), h.Callbacks("memory"), 2], ["resolve", "done", h.Callbacks("once memory"), h.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", h.Callbacks("once memory"), h.Callbacks("once memory"), 1, "rejected"]],
            d = "pending",
            e = {
              state: function () {
                return d;
              },
              always: function () {
                return f.done(arguments).fail(arguments), this;
              },
              "catch": function (a) {
                return e.then(null, a);
              },
              pipe: function () {
                var a = arguments;
                return h.Deferred(function (b) {
                  h.each(k, function (c, k) {
                    var d = h.isFunction(a[k[4]]) && a[k[4]];
                    f[k[1]](function () {
                      var a = d && d.apply(this, arguments);
                      a && h.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[k[0] + "With"](this, d ? [a] : arguments);
                    });
                  });
                  a = null;
                }).promise();
              },
              then: function (b, d, t) {
                function e(b, k, d, t) {
                  return function () {
                    var y = this,
                      g = arguments,
                      n = function () {
                        var a;
                        if (!(b < f)) {
                          if (a = d.apply(y, g), a === k.promise()) throw new TypeError("Thenable self-resolution");
                          var m = a && ("object" == typeof a || "function" == typeof a) && a.then;
                          h.isFunction(m) ? t ? m.call(a, e(f, k, c, t), e(f, k, l, t)) : (f++, m.call(a, e(f, k, c, t), e(f, k, l, t), e(f, k, c, k.notifyWith))) : (d !== c && (y = void 0, g = [a]), (t || k.resolveWith)(y, g));
                        }
                      },
                      m = t ? n : function () {
                        try {
                          n();
                        } catch (hc) {
                          h.Deferred.exceptionHook && h.Deferred.exceptionHook(hc, m.stackTrace), b + 1 >= f && (d !== l && (y = void 0, g = [hc]), k.rejectWith(y, g));
                        }
                      };
                    b ? m() : (h.Deferred.getStackHook && (m.stackTrace = h.Deferred.getStackHook()), a.setTimeout(m));
                  };
                }
                var f = 0;
                return h.Deferred(function (a) {
                  k[0][3].add(e(0, a, h.isFunction(t) ? t : c, a.notifyWith));
                  k[1][3].add(e(0, a, h.isFunction(b) ? b : c));
                  k[2][3].add(e(0, a, h.isFunction(d) ? d : l));
                }).promise();
              },
              promise: function (a) {
                return null != a ? h.extend(a, e) : e;
              }
            },
            f = {};
          return h.each(k, function (a, b) {
            var c = b[2],
              t = b[5];
            e[b[1]] = c.add;
            t && c.add(function () {
              d = t;
            }, k[3 - a][2].disable, k[0][2].lock);
            c.add(b[3].fire);
            f[b[0]] = function () {
              return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
            };
            f[b[0] + "With"] = c.fireWith;
          }), e.promise(f), b && b.call(f, f), f;
        },
        when: function (a) {
          var b = arguments.length,
            c = b,
            k = Array(c),
            d = wa.call(arguments),
            e = h.Deferred(),
            f = function (a) {
              return function (c) {
                k[a] = this;
                d[a] = 1 < arguments.length ? wa.call(arguments) : c;
                --b || e.resolveWith(k, d);
              };
            };
          if (1 >= b && (r(a, e.done(f(c)).resolve, e.reject, !b), "pending" === e.state() || h.isFunction(d[c] && d[c].then))) return e.then();
          for (; c--;) r(d[c], f(c), e.reject);
          return e.promise();
        }
      });
      var Xa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      h.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && Xa.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
      };
      h.readyException = function (b) {
        a.setTimeout(function () {
          throw b;
        });
      };
      var Fa = h.Deferred();
      h.fn.ready = function (a) {
        return Fa.then(a)["catch"](function (a) {
          h.readyException(a);
        }), this;
      };
      h.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (a) {
          (!0 === a ? --h.readyWait : h.isReady) || (h.isReady = !0, !0 !== a && 0 < --h.readyWait || Fa.resolveWith(X, [h]));
        }
      });
      h.ready.then = Fa.then;
      "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(h.ready) : (X.addEventListener("DOMContentLoaded", m), a.addEventListener("load", m));
      var oa = function (a, b, c, d, e, f, g) {
          var k = 0,
            t = a.length,
            y = null == c;
          if ("object" === h.type(c)) for (k in e = !0, c) oa(a, b, k, c[k], !0, f, g);else if (void 0 !== d && (e = !0, h.isFunction(d) || (g = !0), y && (g ? (b.call(a, d), b = null) : (y = b, b = function (a, b, c) {
            return y.call(h(a), c);
          })), b)) for (; k < t; k++) b(a[k], c, g ? d : d.call(a[k], k, b(a[k], c)));
          return e ? a : y ? b.call(a) : t ? b(a[0], c) : f;
        },
        Ob = function (a) {
          return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        };
      q.uid = 1;
      q.prototype = {
        cache: function (a) {
          var b = a[this.expando];
          return b || (b = {}, Ob(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
            value: b,
            configurable: !0
          }))), b;
        },
        set: function (a, b, c) {
          var k;
          a = this.cache(a);
          if ("string" == typeof b) a[h.camelCase(b)] = c;else for (k in b) a[h.camelCase(k)] = b[k];
          return a;
        },
        get: function (a, b) {
          return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][h.camelCase(b)];
        },
        access: function (a, b, c) {
          return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
          var c,
            k = a[this.expando];
          if (void 0 !== k) {
            if (void 0 !== b) for (Array.isArray(b) ? b = b.map(h.camelCase) : (b = h.camelCase(b), b = b in k ? [b] : b.match(ma) || []), c = b.length; c--;) delete k[b[c]];
            (void 0 === b || h.isEmptyObject(k)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
          }
        },
        hasData: function (a) {
          a = a[this.expando];
          return void 0 !== a && !h.isEmptyObject(a);
        }
      };
      var S = new q(),
        ka = new q(),
        cb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        db = /[A-Z]/g;
      h.extend({
        hasData: function (a) {
          return ka.hasData(a) || S.hasData(a);
        },
        data: function (a, b, c) {
          return ka.access(a, b, c);
        },
        removeData: function (a, b) {
          ka.remove(a, b);
        },
        _data: function (a, b, c) {
          return S.access(a, b, c);
        },
        _removeData: function (a, b) {
          S.remove(a, b);
        }
      });
      h.fn.extend({
        data: function (a, b) {
          var c,
            k,
            d,
            e = this[0],
            t = e && e.attributes;
          if (void 0 === a) {
            if (this.length && (d = ka.get(e), 1 === e.nodeType && !S.get(e, "hasDataAttrs"))) {
              for (c = t.length; c--;) t[c] && (k = t[c].name, 0 === k.indexOf("data-") && (k = h.camelCase(k.slice(5)), w(e, k, d[k])));
              S.set(e, "hasDataAttrs", !0);
            }
            return d;
          }
          return "object" == typeof a ? this.each(function () {
            ka.set(this, a);
          }) : oa(this, function (b) {
            var c;
            if (e && void 0 === b) {
              if ((c = ka.get(e, a), void 0 !== c) || (c = w(e, a), void 0 !== c)) return c;
            } else this.each(function () {
              ka.set(this, a, b);
            });
          }, null, b, 1 < arguments.length, null, !0);
        },
        removeData: function (a) {
          return this.each(function () {
            ka.remove(this, a);
          });
        }
      });
      h.extend({
        queue: function (a, b, c) {
          var k;
          if (a) return b = (b || "fx") + "queue", k = S.get(a, b), c && (!k || Array.isArray(c) ? k = S.access(a, b, h.makeArray(c)) : k.push(c)), k || [];
        },
        dequeue: function (a, b) {
          b = b || "fx";
          var c = h.queue(a, b),
            k = c.length,
            d = c.shift(),
            e = h._queueHooks(a, b),
            t = function () {
              h.dequeue(a, b);
            };
          "inprogress" === d && (d = c.shift(), k--);
          d && ("fx" === b && c.unshift("inprogress"), delete e.stop, d.call(a, t, e));
          !k && e && e.empty.fire();
        },
        _queueHooks: function (a, b) {
          var c = b + "queueHooks";
          return S.get(a, c) || S.access(a, c, {
            empty: h.Callbacks("once memory").add(function () {
              S.remove(a, [b + "queue", c]);
            })
          });
        }
      });
      h.fn.extend({
        queue: function (a, b) {
          var c = 2;
          return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? h.queue(this[0], a) : void 0 === b ? this : this.each(function () {
            var c = h.queue(this, a, b);
            h._queueHooks(this, a);
            "fx" === a && "inprogress" !== c[0] && h.dequeue(this, a);
          });
        },
        dequeue: function (a) {
          return this.each(function () {
            h.dequeue(this, a);
          });
        },
        clearQueue: function (a) {
          return this.queue(a || "fx", []);
        },
        promise: function (a, b) {
          var c,
            k = 1,
            d = h.Deferred(),
            e = this,
            t = this.length,
            f = function () {
              --k || d.resolveWith(e, [e]);
            };
          "string" != typeof a && (b = a, a = void 0);
          for (a = a || "fx"; t--;) (c = S.get(e[t], a + "queueHooks")) && c.empty && (k++, c.empty.add(f));
          return f(), d.promise(b);
        }
      });
      var Na = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        rb = new RegExp("^(?:([+-])\x3d|)(" + Na + ")([a-z%]*)$", "i"),
        Ka = ["Top", "Right", "Bottom", "Left"],
        Jb = function (a, b) {
          return a = b || a, "none" === a.style.display || "" === a.style.display && h.contains(a.ownerDocument, a) && "none" === h.css(a, "display");
        },
        Oa = function (a, b, c, d) {
          var k,
            e = {};
          for (k in b) e[k] = a.style[k], a.style[k] = b[k];
          c = c.apply(a, d || []);
          for (k in b) a.style[k] = e[k];
          return c;
        },
        Ra = {};
      h.fn.extend({
        show: function () {
          return u(this, !0);
        },
        hide: function () {
          return u(this);
        },
        toggle: function (a) {
          return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
            Jb(this) ? h(this).show() : h(this).hide();
          });
        }
      });
      var Ta = /^(?:checkbox|radio)$/i,
        Va = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Wa = /^$|\/(?:java|ecma)script/i,
        na = {
          option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
          thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
          col: [2, "\x3ctable\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
          tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
          td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
          _default: [0, "", ""]
        };
      na.optgroup = na.option;
      na.tbody = na.tfoot = na.colgroup = na.caption = na.thead;
      na.th = na.td;
      var jb = /<|&#?\w+;/;
      !function () {
        var a = X.createDocumentFragment().appendChild(X.createElement("div")),
          b = X.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        ca.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
        ca.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
      }();
      var Pb = X.documentElement,
        kb = /^key/,
        lb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Za = /^([^.]*)(?:\.(.+)|)/;
      h.event = {
        global: {},
        add: function (a, b, c, d, e) {
          var k, t, f, g, y, l, m, n;
          if (g = S.get(a)) for (c.handler && (k = c, c = k.handler, e = k.selector), e && h.find.matchesSelector(Pb, e), c.guid || (c.guid = h.guid++), (f = g.events) || (f = g.events = {}), (t = g.handle) || (t = g.handle = function (b) {
            return "undefined" != typeof h && h.event.triggered !== b.type ? h.event.dispatch.apply(a, arguments) : void 0;
          }), b = (b || "").match(ma) || [""], g = b.length; g--;) {
            var p = Za.exec(b[g]) || [];
            var R = n = p[1];
            p = (p[2] || "").split(".").sort();
            R && (l = h.event.special[R] || {}, R = (e ? l.delegateType : l.bindType) || R, l = h.event.special[R] || {}, y = h.extend({
              type: R,
              origType: n,
              data: d,
              handler: c,
              guid: c.guid,
              selector: e,
              needsContext: e && h.expr.match.needsContext.test(e),
              namespace: p.join(".")
            }, k), (m = f[R]) || (m = f[R] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, p, t) || a.addEventListener && a.addEventListener(R, t)), l.add && (l.add.call(a, y), y.handler.guid || (y.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, y) : m.push(y), h.event.global[R] = !0);
          }
        },
        remove: function (a, b, c, d, e) {
          var k,
            t,
            f,
            g,
            y,
            l,
            m,
            n,
            p = S.hasData(a) && S.get(a);
          if (p && (g = p.events)) {
            b = (b || "").match(ma) || [""];
            for (y = b.length; y--;) if (f = Za.exec(b[y]) || [], l = n = f[1], m = (f[2] || "").split(".").sort(), l) {
              var R = h.event.special[l] || {};
              l = (d ? R.delegateType : R.bindType) || l;
              var r = g[l] || [];
              f = f[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)");
              for (t = k = r.length; k--;) {
                var ba = r[k];
                !e && n !== ba.origType || c && c.guid !== ba.guid || f && !f.test(ba.namespace) || d && d !== ba.selector && ("**" !== d || !ba.selector) || (r.splice(k, 1), ba.selector && r.delegateCount--, R.remove && R.remove.call(a, ba));
              }
              t && !r.length && (R.teardown && !1 !== R.teardown.call(a, m, p.handle) || h.removeEvent(a, l, p.handle), delete g[l]);
            } else for (l in g) h.event.remove(a, l + b[y], c, d, !0);
            h.isEmptyObject(g) && S.remove(a, "handle events");
          }
        },
        dispatch: function (a) {
          var b = h.event.fix(a),
            c,
            k,
            d,
            e,
            f = Array(arguments.length);
          var g = (S.get(this, "events") || {})[b.type] || [];
          var l = h.event.special[b.type] || {};
          f[0] = b;
          for (c = 1; c < arguments.length; c++) f[c] = arguments[c];
          if (b.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, b)) {
            var m = h.event.handlers.call(this, b, g);
            for (c = 0; (d = m[c++]) && !b.isPropagationStopped();) for (b.currentTarget = d.elem, g = 0; (e = d.handlers[g++]) && !b.isImmediatePropagationStopped();) b.rnamespace && !b.rnamespace.test(e.namespace) || (b.handleObj = e, b.data = e.data, k = ((h.event.special[e.origType] || {}).handle || e.handler).apply(d.elem, f), void 0 !== k && !1 === (b.result = k) && (b.preventDefault(), b.stopPropagation()));
            return l.postDispatch && l.postDispatch.call(this, b), b.result;
          }
        },
        handlers: function (a, b) {
          var c,
            k = [],
            d = b.delegateCount,
            e = a.target;
          if (d && e.nodeType && !("click" === a.type && 1 <= a.button)) for (; e !== this; e = e.parentNode || this) if (1 === e.nodeType && ("click" !== a.type || !0 !== e.disabled)) {
            var f = [];
            var t = {};
            for (c = 0; c < d; c++) {
              var g = b[c];
              var l = g.selector + " ";
              void 0 === t[l] && (t[l] = g.needsContext ? -1 < h(l, this).index(e) : h.find(l, this, null, [e]).length);
              t[l] && f.push(g);
            }
            f.length && k.push({
              elem: e,
              handlers: f
            });
          }
          return e = this, d < b.length && k.push({
            elem: e,
            handlers: b.slice(d)
          }), k;
        },
        addProp: function (a, b) {
          Object.defineProperty(h.Event.prototype, a, {
            enumerable: !0,
            configurable: !0,
            get: h.isFunction(b) ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
            set: function (b) {
              Object.defineProperty(this, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b
              });
            }
          });
        },
        fix: function (a) {
          return a[h.expando] ? a : new h.Event(a);
        },
        special: {
          load: {
            noBubble: !0
          },
          focus: {
            trigger: function () {
              if (this !== F() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function () {
              if (this === F() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && n(this, "input")) return this.click(), !1;
            },
            _default: function (a) {
              return n(a.target, "a");
            }
          },
          beforeunload: {
            postDispatch: function (a) {
              void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
            }
          }
        }
      };
      h.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
      };
      h.Event = function (a, b) {
        return this instanceof h.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? x : G, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && h.extend(this, b), this.timeStamp = a && a.timeStamp || h.now(), void (this[h.expando] = !0)) : new h.Event(a, b);
      };
      h.Event.prototype = {
        constructor: h.Event,
        isDefaultPrevented: G,
        isPropagationStopped: G,
        isImmediatePropagationStopped: G,
        isSimulated: !1,
        preventDefault: function () {
          var a = this.originalEvent;
          this.isDefaultPrevented = x;
          a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function () {
          var a = this.originalEvent;
          this.isPropagationStopped = x;
          a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var a = this.originalEvent;
          this.isImmediatePropagationStopped = x;
          a && !this.isSimulated && a.stopImmediatePropagation();
          this.stopPropagation();
        }
      };
      h.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && kb.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && lb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        }
      }, h.event.addProp);
      h.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (a, b) {
        h.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = a.relatedTarget,
              k = a.handleObj;
            return d && (d === this || h.contains(this, d)) || (a.type = k.origType, c = k.handler.apply(this, arguments), a.type = b), c;
          }
        };
      });
      h.fn.extend({
        on: function (a, b, c, d) {
          return J(this, a, b, c, d);
        },
        one: function (a, b, c, d) {
          return J(this, a, b, c, d, 1);
        },
        off: function (a, b, c) {
          var d, k;
          if (a && a.preventDefault && a.handleObj) return d = a.handleObj, h(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
          if ("object" == typeof a) {
            for (k in a) this.off(k, b, a[k]);
            return this;
          }
          return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = G), this.each(function () {
            h.event.remove(this, a, c, b);
          });
        }
      });
      var ob = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        pb = /<script|<style|<link/i,
        xb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        yb = /^true\/(.*)/,
        zb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      h.extend({
        htmlPrefilter: function (a) {
          return a.replace(ob, "\x3c$1\x3e\x3c/$2\x3e");
        },
        clone: function (a, b, c) {
          var d,
            k = a.cloneNode(!0),
            e = h.contains(a.ownerDocument, a);
          if (!(ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || h.isXMLDoc(a))) {
            var f = E(k);
            var t = E(a);
            var g = 0;
            for (d = t.length; g < d; g++) {
              var l = t[g],
                m = f[g],
                n = m.nodeName.toLowerCase();
              "input" === n && Ta.test(l.type) ? m.checked = l.checked : "input" !== n && "textarea" !== n || (m.defaultValue = l.defaultValue);
            }
          }
          if (b) if (c) for (t = t || E(a), f = f || E(k), g = 0, d = t.length; g < d; g++) L(t[g], f[g]);else L(a, k);
          return f = E(k, "script"), 0 < f.length && C(f, !e && E(a, "script")), k;
        },
        cleanData: function (a) {
          for (var b, c, d, k = h.event.special, e = 0; void 0 !== (c = a[e]); e++) if (Ob(c)) {
            if (b = c[S.expando]) {
              if (b.events) for (d in b.events) k[d] ? h.event.remove(c, d) : h.removeEvent(c, d, b.handle);
              c[S.expando] = void 0;
            }
            c[ka.expando] && (c[ka.expando] = void 0);
          }
        }
      });
      h.fn.extend({
        detach: function (a) {
          return Q(this, a, !0);
        },
        remove: function (a) {
          return Q(this, a);
        },
        text: function (a) {
          return oa(this, function (a) {
            return void 0 === a ? h.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
            });
          }, null, a, arguments.length);
        },
        append: function () {
          return K(this, arguments, function (a) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, a).appendChild(a);
          });
        },
        prepend: function () {
          return K(this, arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var b = D(this, a);
              b.insertBefore(a, b.firstChild);
            }
          });
        },
        before: function () {
          return K(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function () {
          return K(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        empty: function () {
          for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (h.cleanData(E(a, !1)), a.textContent = "");
          return this;
        },
        clone: function (a, b) {
          return a = null != a && a, b = null == b ? a : b, this.map(function () {
            return h.clone(this, a, b);
          });
        },
        html: function (a) {
          return oa(this, function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if ("string" == typeof a && !pb.test(a) && !na[(Va.exec(a) || ["", ""])[1].toLowerCase()]) {
              a = h.htmlPrefilter(a);
              try {
                for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (h.cleanData(E(b, !1)), b.innerHTML = a);
                b = 0;
              } catch (Ja) {}
            }
            b && this.empty().append(a);
          }, null, a, arguments.length);
        },
        replaceWith: function () {
          var a = [];
          return K(this, arguments, function (b) {
            var c = this.parentNode;
            0 > h.inArray(this, a) && (h.cleanData(E(this)), c && c.replaceChild(b, this));
          }, a);
        }
      });
      h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (a, b) {
        h.fn[a] = function (a) {
          for (var c = [], d = h(a), k = d.length - 1, e = 0; e <= k; e++) a = e === k ? this : this.clone(!0), h(d[e])[b](a), tb.apply(c, a.get());
          return this.pushStack(c);
        };
      });
      var eb = /^margin/,
        bc = new RegExp("^(" + Na + ")(?!px)[a-z%]+$", "i"),
        Kb = function (b) {
          var c = b.ownerDocument.defaultView;
          return c && c.opener || (c = a), c.getComputedStyle(b);
        };
      !function () {
        function b() {
          if (l) {
            l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            l.innerHTML = "";
            Pb.appendChild(g);
            var b = a.getComputedStyle(l);
            c = "1%" !== b.top;
            f = "2px" === b.marginLeft;
            d = "4px" === b.width;
            l.style.marginRight = "50%";
            e = "4px" === b.marginRight;
            Pb.removeChild(g);
            l = null;
          }
        }
        var c,
          d,
          e,
          f,
          g = X.createElement("div"),
          l = X.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === l.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(l), h.extend(ca, {
          pixelPosition: function () {
            return b(), c;
          },
          boxSizingReliable: function () {
            return b(), d;
          },
          pixelMarginRight: function () {
            return b(), e;
          },
          reliableMarginLeft: function () {
            return b(), f;
          }
        }));
      }();
      var Ab = /^(none|table(?!-c[ea]).+)/,
        fb = /^--/,
        Bb = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        gb = {
          letterSpacing: "0",
          fontWeight: "400"
        },
        hb = ["Webkit", "Moz", "ms"],
        ib = X.createElement("div").style;
      h.extend({
        cssHooks: {
          opacity: {
            get: function (a, b) {
              if (b) {
                var c = M(a, "opacity");
                return "" === c ? "1" : c;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {
          "float": "cssFloat"
        },
        style: function (a, b, c, d) {
          if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var k,
              e,
              f,
              t = h.camelCase(b),
              g = fb.test(b),
              l = a.style;
            return g || (b = V(t)), f = h.cssHooks[b] || h.cssHooks[t], void 0 === c ? f && "get" in f && void 0 !== (k = f.get(a, !1, d)) ? k : l[b] : (e = typeof c, "string" === e && (k = rb.exec(c)) && k[1] && (c = z(a, b, k), e = "number"), null != c && c === c && ("number" === e && (c += k && k[3] || (h.cssNumber[t] ? "" : "px")), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (l[b] = "inherit"), f && "set" in f && void 0 === (c = f.set(a, c, d)) || (g ? l.setProperty(b, c) : l[b] = c)), void 0);
          }
        },
        css: function (a, b, c, d) {
          var k,
            e,
            f,
            g = h.camelCase(b);
          return fb.test(b) || (b = V(g)), f = h.cssHooks[b] || h.cssHooks[g], f && "get" in f && (k = f.get(a, !0, c)), void 0 === k && (k = M(a, b, d)), "normal" === k && b in gb && (k = gb[b]), "" === c || c ? (e = parseFloat(k), !0 === c || isFinite(e) ? e || 0 : k) : k;
        }
      });
      h.each(["height", "width"], function (a, b) {
        h.cssHooks[b] = {
          get: function (a, c, d) {
            if (c) return !Ab.test(h.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? O(a, b, d) : Oa(a, Bb, function () {
              return O(a, b, d);
            });
          },
          set: function (a, c, d) {
            var k,
              e = d && Kb(a);
            d = d && ta(a, b, d, "border-box" === h.css(a, "boxSizing", !1, e), e);
            return d && (k = rb.exec(c)) && "px" !== (k[3] || "px") && (a.style[b] = c, c = h.css(a, b)), P(a, c, d);
          }
        };
      });
      h.cssHooks.marginLeft = T(ca.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(M(a, "marginLeft")) || a.getBoundingClientRect().left - Oa(a, {
          marginLeft: 0
        }, function () {
          return a.getBoundingClientRect().left;
        })) + "px";
      });
      h.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (a, b) {
        h.cssHooks[a + b] = {
          expand: function (c) {
            var d = 0,
              k = {};
            for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) k[a + Ka[d] + b] = c[d] || c[d - 2] || c[0];
            return k;
          }
        };
        eb.test(a) || (h.cssHooks[a + b].set = P);
      });
      h.fn.extend({
        css: function (a, b) {
          return oa(this, function (a, b, c) {
            var d,
              k = {},
              e = 0;
            if (Array.isArray(b)) {
              c = Kb(a);
              for (d = b.length; e < d; e++) k[b[e]] = h.css(a, b[e], !1, c);
              return k;
            }
            return void 0 !== c ? h.style(a, b, c) : h.css(a, b);
          }, a, b, 1 < arguments.length);
        }
      });
      h.Tween = aa;
      aa.prototype = {
        constructor: aa,
        init: function (a, b, c, d, e, f) {
          this.elem = a;
          this.prop = c;
          this.easing = e || h.easing._default;
          this.options = b;
          this.start = this.now = this.cur();
          this.end = d;
          this.unit = f || (h.cssNumber[c] ? "" : "px");
        },
        cur: function () {
          var a = aa.propHooks[this.prop];
          return a && a.get ? a.get(this) : aa.propHooks._default.get(this);
        },
        run: function (a) {
          var b,
            c = aa.propHooks[this.prop];
          return this.options.duration ? this.pos = b = h.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : aa.propHooks._default.set(this), this;
        }
      };
      aa.prototype.init.prototype = aa.prototype;
      aa.propHooks = {
        _default: {
          get: function (a) {
            var b;
            return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = h.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
          },
          set: function (a) {
            h.fx.step[a.prop] ? h.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[h.cssProps[a.prop]] && !h.cssHooks[a.prop] ? a.elem[a.prop] = a.now : h.style(a.elem, a.prop, a.now + a.unit);
          }
        }
      };
      aa.propHooks.scrollTop = aa.propHooks.scrollLeft = {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
      };
      h.easing = {
        linear: function (a) {
          return a;
        },
        swing: function (a) {
          return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
      };
      h.fx = aa.prototype.init;
      h.fx.step = {};
      var $a,
        Lb,
        Cb = /^(?:toggle|show|hide)$/,
        Db = /queueHooks$/;
      h.Animation = h.extend(W, {
        tweeners: {
          "*": [function (a, b) {
            var c = this.createTween(a, b);
            return z(c.elem, a, rb.exec(b), c), c;
          }]
        },
        tweener: function (a, b) {
          h.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(ma);
          for (var c, d = 0, k = a.length; d < k; d++) c = a[d], W.tweeners[c] = W.tweeners[c] || [], W.tweeners[c].unshift(b);
        },
        prefilters: [function (a, b, c) {
          var d,
            k,
            e,
            f,
            g,
            t,
            l,
            m,
            n = "width" in b || "height" in b,
            p = this,
            y = {},
            r = a.style,
            q = a.nodeType && Jb(a),
            w = S.get(a, "fxshow");
          c.queue || (f = h._queueHooks(a, "fx"), null == f.unqueued && (f.unqueued = 0, g = f.empty.fire, f.empty.fire = function () {
            f.unqueued || g();
          }), f.unqueued++, p.always(function () {
            p.always(function () {
              f.unqueued--;
              h.queue(a, "fx").length || f.empty.fire();
            });
          }));
          for (d in b) if (k = b[d], Cb.test(k)) {
            if (delete b[d], e = e || "toggle" === k, k === (q ? "hide" : "show")) {
              if ("show" !== k || !w || void 0 === w[d]) continue;
              q = !0;
            }
            y[d] = w && w[d] || h.style(a, d);
          }
          if (t = !h.isEmptyObject(b), t || !h.isEmptyObject(y)) for (d in n && 1 === a.nodeType && (c.overflow = [r.overflow, r.overflowX, r.overflowY], l = w && w.display, null == l && (l = S.get(a, "display")), m = h.css(a, "display"), "none" === m && (l ? m = l : (u([a], !0), l = a.style.display || l, m = h.css(a, "display"), u([a]))), ("inline" === m || "inline-block" === m && null != l) && "none" === h.css(a, "float") && (t || (p.done(function () {
            r.display = l;
          }), null == l && (m = r.display, l = "none" === m ? "" : m)), r.display = "inline-block")), c.overflow && (r.overflow = "hidden", p.always(function () {
            r.overflow = c.overflow[0];
            r.overflowX = c.overflow[1];
            r.overflowY = c.overflow[2];
          })), t = !1, y) t || (w ? "hidden" in w && (q = w.hidden) : w = S.access(a, "fxshow", {
            display: l
          }), e && (w.hidden = !q), q && u([a], !0), p.done(function () {
            q || u([a]);
            S.remove(a, "fxshow");
            for (d in y) h.style(a, d, y[d]);
          })), t = ra(q ? w[d] : 0, d, p), d in w || (w[d] = t.start, q && (t.end = t.start, t.start = 0));
        }],
        prefilter: function (a, b) {
          b ? W.prefilters.unshift(a) : W.prefilters.push(a);
        }
      });
      h.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? h.extend({}, a) : {
          complete: c || !c && b || h.isFunction(a) && a,
          duration: a,
          easing: c && b || b && !h.isFunction(b) && b
        };
        return h.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in h.fx.speeds ? d.duration = h.fx.speeds[d.duration] : d.duration = h.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
          h.isFunction(d.old) && d.old.call(this);
          d.queue && h.dequeue(this, d.queue);
        }, d;
      };
      h.fn.extend({
        fadeTo: function (a, b, c, d) {
          return this.filter(Jb).css("opacity", 0).show().end().animate({
            opacity: b
          }, a, c, d);
        },
        animate: function (a, b, c, d) {
          var k = h.isEmptyObject(a),
            e = h.speed(b, c, d);
          b = function () {
            var b = W(this, h.extend({}, a), e);
            (k || S.get(this, "finish")) && b.stop(!0);
          };
          return b.finish = b, k || !1 === e.queue ? this.each(b) : this.queue(e.queue, b);
        },
        stop: function (a, b, c) {
          var d = function (a) {
            var b = a.stop;
            delete a.stop;
            b(c);
          };
          return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
            var b = !0,
              k = null != a && a + "queueHooks",
              e = h.timers,
              f = S.get(this);
            if (k) f[k] && f[k].stop && d(f[k]);else for (k in f) f[k] && f[k].stop && Db.test(k) && d(f[k]);
            for (k = e.length; k--;) e[k].elem !== this || null != a && e[k].queue !== a || (e[k].anim.stop(c), b = !1, e.splice(k, 1));
            !b && c || h.dequeue(this, a);
          });
        },
        finish: function (a) {
          return !1 !== a && (a = a || "fx"), this.each(function () {
            var b = S.get(this),
              c = b[a + "queue"];
            var d = b[a + "queueHooks"];
            var k = h.timers,
              e = c ? c.length : 0;
            b.finish = !0;
            h.queue(this, a, []);
            d && d.stop && d.stop.call(this, !0);
            for (d = k.length; d--;) k[d].elem === this && k[d].queue === a && (k[d].anim.stop(!0), k.splice(d, 1));
            for (d = 0; d < e; d++) c[d] && c[d].finish && c[d].finish.call(this);
            delete b.finish;
          });
        }
      });
      h.each(["toggle", "show", "hide"], function (a, b) {
        var c = h.fn[b];
        h.fn[b] = function (a, d, k) {
          return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(sa(b, !0), a, d, k);
        };
      });
      h.each({
        slideDown: sa("show"),
        slideUp: sa("hide"),
        slideToggle: sa("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (a, b) {
        h.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      });
      h.timers = [];
      h.fx.tick = function () {
        var a = 0,
          b = h.timers;
        for ($a = h.now(); a < b.length; a++) {
          var c = b[a];
          c() || b[a] !== c || b.splice(a--, 1);
        }
        b.length || h.fx.stop();
        $a = void 0;
      };
      h.fx.timer = function (a) {
        h.timers.push(a);
        h.fx.start();
      };
      h.fx.interval = 13;
      h.fx.start = function () {
        Lb || (Lb = !0, U());
      };
      h.fx.stop = function () {
        Lb = null;
      };
      h.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      };
      h.fn.delay = function (b, c) {
        return b = h.fx ? h.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
          var k = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(k);
          };
        });
      };
      (function () {
        var a = X.createElement("input"),
          b = X.createElement("select").appendChild(X.createElement("option"));
        a.type = "checkbox";
        ca.checkOn = "" !== a.value;
        ca.optSelected = b.selected;
        a = X.createElement("input");
        a.value = "t";
        a.type = "radio";
        ca.radioValue = "t" === a.value;
      })();
      var ub = h.expr.attrHandle;
      h.fn.extend({
        attr: function (a, b) {
          return oa(this, h.attr, a, b, 1 < arguments.length);
        },
        removeAttr: function (a) {
          return this.each(function () {
            h.removeAttr(this, a);
          });
        }
      });
      h.extend({
        attr: function (a, b, c) {
          var d,
            k,
            e = a.nodeType;
          if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof a.getAttribute ? h.prop(a, b, c) : (1 === e && h.isXMLDoc(a) || (k = h.attrHooks[b.toLowerCase()] || (h.expr.match.bool.test(b) ? Eb : void 0)), void 0 !== c ? null === c ? void h.removeAttr(a, b) : k && "set" in k && void 0 !== (d = k.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : k && "get" in k && null !== (d = k.get(a, b)) ? d : (d = h.find.attr(a, b), null == d ? void 0 : d));
        },
        attrHooks: {
          type: {
            set: function (a, b) {
              if (!ca.radioValue && "radio" === b && n(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b;
              }
            }
          }
        },
        removeAttr: function (a, b) {
          var c,
            d = 0,
            k = b && b.match(ma);
          if (k && 1 === a.nodeType) for (; c = k[d++];) a.removeAttribute(c);
        }
      });
      var Eb = {
        set: function (a, b, c) {
          return !1 === b ? h.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
      };
      h.each(h.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ub[b] || h.find.attr;
        ub[b] = function (a, b, d) {
          var k,
            e,
            f = b.toLowerCase();
          return d || (e = ub[f], ub[f] = k, k = null != c(a, b, d) ? f : null, ub[f] = e), k;
        };
      });
      var Fb = /^(?:input|select|textarea|button)$/i,
        Gb = /^(?:a|area)$/i;
      h.fn.extend({
        prop: function (a, b) {
          return oa(this, h.prop, a, b, 1 < arguments.length);
        },
        removeProp: function (a) {
          return this.each(function () {
            delete this[h.propFix[a] || a];
          });
        }
      });
      h.extend({
        prop: function (a, b, c) {
          var d,
            k,
            e = a.nodeType;
          if (3 !== e && 8 !== e && 2 !== e) return 1 === e && h.isXMLDoc(a) || (b = h.propFix[b] || b, k = h.propHooks[b]), void 0 !== c ? k && "set" in k && void 0 !== (d = k.set(a, c, b)) ? d : a[b] = c : k && "get" in k && null !== (d = k.get(a, b)) ? d : a[b];
        },
        propHooks: {
          tabIndex: {
            get: function (a) {
              var b = h.find.attr(a, "tabindex");
              return b ? parseInt(b, 10) : Fb.test(a.nodeName) || Gb.test(a.nodeName) && a.href ? 0 : -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      ca.optSelected || (h.propHooks.selected = {
        get: function (a) {
          a = a.parentNode;
          return a && a.parentNode && a.parentNode.selectedIndex, null;
        },
        set: function (a) {
          a = a.parentNode;
          a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
        }
      });
      h.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        h.propFix[this.toLowerCase()] = this;
      });
      h.fn.extend({
        addClass: function (a) {
          var b,
            c,
            d,
            k,
            e,
            f,
            g = 0;
          if (h.isFunction(a)) return this.each(function (b) {
            h(this).addClass(a.call(this, b, ua(this)));
          });
          if ("string" == typeof a && a) for (b = a.match(ma) || []; c = this[g++];) if (k = ua(c), d = 1 === c.nodeType && " " + qa(k) + " ") {
            for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
            d = qa(d);
            k !== d && c.setAttribute("class", d);
          }
          return this;
        },
        removeClass: function (a) {
          var b,
            c,
            d,
            k,
            e,
            f,
            g = 0;
          if (h.isFunction(a)) return this.each(function (b) {
            h(this).removeClass(a.call(this, b, ua(this)));
          });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof a && a) for (b = a.match(ma) || []; c = this[g++];) if (k = ua(c), d = 1 === c.nodeType && " " + qa(k) + " ") {
            for (f = 0; e = b[f++];) for (; -1 < d.indexOf(" " + e + " ");) d = d.replace(" " + e + " ", " ");
            d = qa(d);
            k !== d && c.setAttribute("class", d);
          }
          return this;
        },
        toggleClass: function (a, b) {
          var c = typeof a;
          return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : h.isFunction(a) ? this.each(function (c) {
            h(this).toggleClass(a.call(this, c, ua(this), b), b);
          }) : this.each(function () {
            var b, d;
            if ("string" === c) {
              var e = 0;
              var k = h(this);
              for (d = a.match(ma) || []; b = d[e++];) k.hasClass(b) ? k.removeClass(b) : k.addClass(b);
            } else void 0 !== a && "boolean" !== c || (b = ua(this), b && S.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : S.get(this, "__className__") || ""));
          });
        },
        hasClass: function (a) {
          var b,
            c = 0;
          for (a = " " + a + " "; b = this[c++];) if (1 === b.nodeType && -1 < (" " + qa(ua(b)) + " ").indexOf(a)) return !0;
          return !1;
        }
      });
      var Hb = /\r/g;
      h.fn.extend({
        val: function (a) {
          var b,
            c,
            d,
            e = this[0];
          if (arguments.length) return d = h.isFunction(a), this.each(function (c) {
            var e;
            1 === this.nodeType && (e = d ? a.call(this, c, h(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = h.map(e, function (a) {
              return null == a ? "" : a + "";
            })), b = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
          });
          if (e) return b = h.valHooks[e.type] || h.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(Hb, "") : null == c ? "" : c);
        }
      });
      h.extend({
        valHooks: {
          option: {
            get: function (a) {
              var b = h.find.attr(a, "value");
              return null != b ? b : qa(h.text(a));
            }
          },
          select: {
            get: function (a) {
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                k = "select-one" === a.type,
                f = k ? null : [],
                g = k ? e + 1 : d.length;
              for (c = 0 > e ? g : k ? e : 0; c < g; c++) if (b = d[c], !(!b.selected && c !== e || b.disabled || b.parentNode.disabled && n(b.parentNode, "optgroup"))) {
                if (a = h(b).val(), k) return a;
                f.push(a);
              }
              return f;
            },
            set: function (a, b) {
              for (var c, d, e = a.options, k = h.makeArray(b), f = e.length; f--;) d = e[f], (d.selected = -1 < h.inArray(h.valHooks.option.get(d), k)) && (c = !0);
              return c || (a.selectedIndex = -1), k;
            }
          }
        }
      });
      h.each(["radio", "checkbox"], function () {
        h.valHooks[this] = {
          set: function (a, b) {
            if (Array.isArray(b)) return a.checked = -1 < h.inArray(h(a).val(), b);
          }
        };
        ca.checkOn || (h.valHooks[this].get = function (a) {
          return null === a.getAttribute("value") ? "on" : a.value;
        });
      });
      var mb = /^(?:focusinfocus|focusoutblur)$/;
      h.extend(h.event, {
        trigger: function (b, c, d, e) {
          var k,
            f,
            g,
            l,
            m,
            n = [d || X],
            p = fa.call(b, "type") ? b.type : b;
          var t = fa.call(b, "namespace") ? b.namespace.split(".") : [];
          if (k = f = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !mb.test(p + h.event.triggered) && (-1 < p.indexOf(".") && (t = p.split("."), p = t.shift(), t.sort()), g = 0 > p.indexOf(":") && "on" + p, b = b[h.expando] ? b : new h.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = t.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : h.makeArray(c, [b]), m = h.event.special[p] || {}, e || !m.trigger || !1 !== m.trigger.apply(d, c))) {
            if (!e && !m.noBubble && !h.isWindow(d)) {
              var r = m.delegateType || p;
              for (mb.test(r + p) || (k = k.parentNode); k; k = k.parentNode) n.push(k), f = k;
              f === (d.ownerDocument || X) && n.push(f.defaultView || f.parentWindow || a);
            }
            for (t = 0; (k = n[t++]) && !b.isPropagationStopped();) b.type = 1 < t ? r : m.bindType || p, (l = (S.get(k, "events") || {})[b.type] && S.get(k, "handle")) && l.apply(k, c), (l = g && k[g]) && l.apply && Ob(k) && (b.result = l.apply(k, c), !1 === b.result && b.preventDefault());
            return b.type = p, e || b.isDefaultPrevented() || m._default && !1 !== m._default.apply(n.pop(), c) || !Ob(d) || g && h.isFunction(d[p]) && !h.isWindow(d) && (f = d[g], f && (d[g] = null), h.event.triggered = p, d[p](), h.event.triggered = void 0, f && (d[g] = f)), b.result;
          }
        },
        simulate: function (a, b, c) {
          a = h.extend(new h.Event(), c, {
            type: a,
            isSimulated: !0
          });
          h.event.trigger(a, null, b);
        }
      });
      h.fn.extend({
        trigger: function (a, b) {
          return this.each(function () {
            h.event.trigger(a, b, this);
          });
        },
        triggerHandler: function (a, b) {
          var c = this[0];
          if (c) return h.event.trigger(a, b, c, !0);
        }
      });
      h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        h.fn[b] = function (a, c) {
          return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b);
        };
      });
      h.fn.extend({
        hover: function (a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        }
      });
      ca.focusin = "onfocusin" in a;
      ca.focusin || h.each({
        focus: "focusin",
        blur: "focusout"
      }, function (a, b) {
        var c = function (a) {
          h.event.simulate(b, a.target, h.event.fix(a));
        };
        h.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = S.access(d, b);
            e || d.addEventListener(a, c, !0);
            S.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = S.access(d, b) - 1;
            e ? S.access(d, b, e) : (d.removeEventListener(a, c, !0), S.remove(d, b));
          }
        };
      });
      var vb = a.location,
        nb = h.now(),
        ec = /\?/;
      h.parseXML = function (b) {
        if (!b || "string" != typeof b) return null;
        try {
          var c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (y) {
          c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + b), c;
      };
      var Ib = /\[\]$/,
        ic = /\r?\n/g,
        Qb = /^(?:submit|button|image|reset|file)$/i,
        Rb = /^(?:input|select|textarea|keygen)/i;
      h.param = function (a, b) {
        var c,
          d = [],
          e = function (a, b) {
            var c = h.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(null == c ? "" : c);
          };
        if (Array.isArray(a) || a.jquery && !h.isPlainObject(a)) h.each(a, function () {
          e(this.name, this.value);
        });else for (c in a) ha(c, a[c], b, e);
        return d.join("\x26");
      };
      h.fn.extend({
        serialize: function () {
          return h.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var a = h.prop(this, "elements");
            return a ? h.makeArray(a) : this;
          }).filter(function () {
            var a = this.type;
            return this.name && !h(this).is(":disabled") && Rb.test(this.nodeName) && !Qb.test(a) && (this.checked || !Ta.test(a));
          }).map(function (a, b) {
            var c = h(this).val();
            return null == c ? null : Array.isArray(c) ? h.map(c, function (a) {
              return {
                name: b.name,
                value: a.replace(ic, "\r\n")
              };
            }) : {
              name: b.name,
              value: c.replace(ic, "\r\n")
            };
          }).get();
        }
      });
      var Sb = /%20/g,
        Tb = /#.*$/,
        Ub = /([?&])_=[^&]*/,
        Vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Wb = /^(?:GET|HEAD)$/,
        Xb = /^\/\//,
        jc = {},
        cc = {},
        kc = "*/".concat("*"),
        fc = X.createElement("a");
      fc.href = vb.href;
      h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: vb.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vb.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
          accepts: {
            "*": kc,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": h.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function (a, b) {
          return b ? da(da(a, h.ajaxSettings), b) : da(h.ajaxSettings, a);
        },
        ajaxPrefilter: Mb(jc),
        ajaxTransport: Mb(cc),
        ajax: function (b, c) {
          function d(b, c, d, f) {
            var m,
              n,
              y,
              F = c;
            if (!P) {
              P = !0;
              g && a.clearTimeout(g);
              e = void 0;
              k = f || "";
              v.readyState = 0 < b ? 4 : 0;
              f = 200 <= b && 300 > b || 304 === b;
              if (d) {
                var B = p;
                for (var z = v, D, V, K, x, M = B.contents, N = B.dataTypes; "*" === N[0];) N.shift(), void 0 === D && (D = B.mimeType || z.getResponseHeader("Content-Type"));
                if (D) for (V in M) if (M[V] && M[V].test(D)) {
                  N.unshift(V);
                  break;
                }
                if (N[0] in d) K = N[0];else {
                  for (V in d) {
                    if (!N[0] || B.converters[V + " " + N[0]]) {
                      K = V;
                      break;
                    }
                    x || (x = V);
                  }
                  K = K || x;
                }
                d = K ? (K !== N[0] && N.unshift(K), d[K]) : void 0;
                B = d;
              }
              a: {
                d = p;
                D = B;
                V = v;
                K = f;
                var A, L, E;
                B = {};
                z = d.dataTypes.slice();
                if (z[1]) for (A in d.converters) B[A.toLowerCase()] = d.converters[A];
                for (x = z.shift(); x;) if (d.responseFields[x] && (V[d.responseFields[x]] = D), !E && K && d.dataFilter && (D = d.dataFilter(D, d.dataType)), E = x, x = z.shift()) if ("*" === x) x = E;else if ("*" !== E && E !== x) {
                  if (A = B[E + " " + x] || B["* " + x], !A) for (C in B) if (L = C.split(" "), L[1] === x && (A = B[E + " " + L[0]] || B["* " + L[0]])) {
                    !0 === A ? A = B[C] : !0 !== B[C] && (x = L[0], z.unshift(L[1]));
                    break;
                  }
                  if (!0 !== A) if (A && d["throws"]) D = A(D);else try {
                    D = A(D);
                  } catch (Yc) {
                    var C = {
                      state: "parsererror",
                      error: A ? Yc : "No conversion from " + E + " to " + x
                    };
                    break a;
                  }
                }
                C = {
                  state: "success",
                  data: D
                };
              }
              B = C;
              f ? (p.ifModified && (y = v.getResponseHeader("Last-Modified"), y && (h.lastModified[J] = y), y = v.getResponseHeader("etag"), y && (h.etag[J] = y)), 204 === b || "HEAD" === p.type ? F = "nocontent" : 304 === b ? F = "notmodified" : (F = B.state, m = B.data, n = B.error, f = !n)) : (n = F, !b && F || (F = "error", 0 > b && (b = 0)));
              v.status = b;
              v.statusText = (c || F) + "";
              f ? q.resolveWith(t, [m, F, v]) : q.rejectWith(t, [v, F, n]);
              v.statusCode(w);
              w = void 0;
              l && r.trigger(f ? "ajaxSuccess" : "ajaxError", [v, p, f ? m : n]);
              u.fireWith(t, [v, F]);
              l && (r.trigger("ajaxComplete", [v, p]), --h.active || h.event.trigger("ajaxStop"));
            }
          }
          "object" == typeof b && (c = b, b = void 0);
          c = c || {};
          var e,
            k,
            f,
            g,
            l,
            m,
            n,
            p = h.ajaxSetup({}, c),
            t = p.context || p,
            r = p.context && (t.nodeType || t.jquery) ? h(t) : h.event,
            q = h.Deferred(),
            u = h.Callbacks("once memory"),
            w = p.statusCode || {},
            F = {},
            B = {},
            z = "canceled",
            v = {
              readyState: 0,
              getResponseHeader: function (a) {
                var b;
                if (P) {
                  if (!f) for (f = {}; b = Vb.exec(k);) f[b[1].toLowerCase()] = b[2];
                  b = f[a.toLowerCase()];
                }
                return null == b ? null : b;
              },
              getAllResponseHeaders: function () {
                return P ? k : null;
              },
              setRequestHeader: function (a, b) {
                return null == P && (a = B[a.toLowerCase()] = B[a.toLowerCase()] || a, F[a] = b), this;
              },
              overrideMimeType: function (a) {
                return null == P && (p.mimeType = a), this;
              },
              statusCode: function (a) {
                var b;
                if (a) if (P) v.always(a[v.status]);else for (b in a) w[b] = [w[b], a[b]];
                return this;
              },
              abort: function (a) {
                a = a || z;
                return e && e.abort(a), d(0, a), this;
              }
            };
          if (q.promise(v), p.url = ((b || p.url || vb.href) + "").replace(Xb, vb.protocol + "//"), p.type = c.method || c.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(ma) || [""], null == p.crossDomain) {
            var D = X.createElement("a");
            try {
              D.href = p.url, D.href = D.href, p.crossDomain = fc.protocol + "//" + fc.host != D.protocol + "//" + D.host;
            } catch (dc) {
              p.crossDomain = !0;
            }
          }
          if (p.data && p.processData && "string" != typeof p.data && (p.data = h.param(p.data, p.traditional)), ja(jc, p, c, v), P) return v;
          (l = h.event && p.global) && 0 === h.active++ && h.event.trigger("ajaxStart");
          p.type = p.type.toUpperCase();
          p.hasContent = !Wb.test(p.type);
          var J = p.url.replace(Tb, "");
          p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Sb, "+")) : (n = p.url.slice(J.length), p.data && (J += (ec.test(J) ? "\x26" : "?") + p.data, delete p.data), !1 === p.cache && (J = J.replace(Ub, "$1"), n = (ec.test(J) ? "\x26" : "?") + "_\x3d" + nb++ + n), p.url = J + n);
          p.ifModified && (h.lastModified[J] && v.setRequestHeader("If-Modified-Since", h.lastModified[J]), h.etag[J] && v.setRequestHeader("If-None-Match", h.etag[J]));
          (p.data && p.hasContent && !1 !== p.contentType || c.contentType) && v.setRequestHeader("Content-Type", p.contentType);
          v.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + kc + "; q\x3d0.01" : "") : p.accepts["*"]);
          for (m in p.headers) v.setRequestHeader(m, p.headers[m]);
          if (p.beforeSend && (!1 === p.beforeSend.call(t, v, p) || P)) return v.abort();
          if (z = "abort", u.add(p.complete), v.done(p.success), v.fail(p.error), e = ja(cc, p, c, v)) {
            if (v.readyState = 1, l && r.trigger("ajaxSend", [v, p]), P) return v;
            p.async && 0 < p.timeout && (g = a.setTimeout(function () {
              v.abort("timeout");
            }, p.timeout));
            try {
              var P = !1;
              e.send(F, d);
            } catch (dc) {
              if (P) throw dc;
              d(-1, dc);
            }
          } else d(-1, "No Transport");
          return v;
        },
        getJSON: function (a, b, c) {
          return h.get(a, b, c, "json");
        },
        getScript: function (a, b) {
          return h.get(a, void 0, b, "script");
        }
      });
      h.each(["get", "post"], function (a, b) {
        h[b] = function (a, c, d, e) {
          return h.isFunction(c) && (e = e || d, d = c, c = void 0), h.ajax(h.extend({
            url: a,
            type: b,
            dataType: e,
            data: c,
            success: d
          }, h.isPlainObject(a) && a));
        };
      });
      h._evalUrl = function (a) {
        return h.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          "throws": !0
        });
      };
      h.fn.extend({
        wrapAll: function (a) {
          var b;
          return this[0] && (h.isFunction(a) && (a = a.call(this[0])), b = h(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
            for (var a = this; a.firstElementChild;) a = a.firstElementChild;
            return a;
          }).append(this)), this;
        },
        wrapInner: function (a) {
          return h.isFunction(a) ? this.each(function (b) {
            h(this).wrapInner(a.call(this, b));
          }) : this.each(function () {
            var b = h(this),
              c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a);
          });
        },
        wrap: function (a) {
          var b = h.isFunction(a);
          return this.each(function (c) {
            h(this).wrapAll(b ? a.call(this, c) : a);
          });
        },
        unwrap: function (a) {
          return this.parent(a).not("body").each(function () {
            h(this).replaceWith(this.childNodes);
          }), this;
        }
      });
      h.expr.pseudos.hidden = function (a) {
        return !h.expr.pseudos.visible(a);
      };
      h.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
      };
      h.ajaxSettings.xhr = function () {
        try {
          return new a.XMLHttpRequest();
        } catch (k) {}
      };
      var Yb = {
          0: 200,
          1223: 204
        },
        wb = h.ajaxSettings.xhr();
      ca.cors = !!wb && "withCredentials" in wb;
      ca.ajax = wb = !!wb;
      h.ajaxTransport(function (b) {
        var c, d;
        if (ca.cors || wb && !b.crossDomain) return {
          send: function (e, f) {
            var k,
              h = b.xhr();
            if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (k in b.xhrFields) h[k] = b.xhrFields[k];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType);
            b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
            for (k in e) h.setRequestHeader(k, e[k]);
            c = function (a) {
              return function () {
                c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Yb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                  binary: h.response
                } : {
                  text: h.responseText
                }, h.getAllResponseHeaders()));
              };
            };
            h.onload = c();
            d = h.onerror = c("error");
            void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
              4 === h.readyState && a.setTimeout(function () {
                c && d();
              });
            };
            c = c("abort");
            try {
              h.send(b.hasContent && b.data || null);
            } catch (Wc) {
              if (c) throw Wc;
            }
          },
          abort: function () {
            c && c();
          }
        };
      });
      h.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
      });
      h.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function (a) {
            return h.globalEval(a), a;
          }
        }
      });
      h.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET");
      });
      h.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
          var b, c;
          return {
            send: function (d, e) {
              b = h("\x3cscript\x3e").prop({
                charset: a.scriptCharset,
                src: a.url
              }).on("load error", c = function (a) {
                b.remove();
                c = null;
                a && e("error" === a.type ? 404 : 200, a.type);
              });
              X.head.appendChild(b[0]);
            },
            abort: function () {
              c && c();
            }
          };
        }
      });
      var lc = [],
        gc = /(=)\?(?=&|$)|\?\?/;
      h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var a = lc.pop() || h.expando + "_" + nb++;
          return this[a] = !0, a;
        }
      });
      h.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
          f,
          k,
          g = !1 !== b.jsonp && (gc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && gc.test(b.data) && "data");
        if (g || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = h.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, g ? b[g] = b[g].replace(gc, "$1" + e) : !1 !== b.jsonp && (b.url += (ec.test(b.url) ? "\x26" : "?") + b.jsonp + "\x3d" + e), b.converters["script json"] = function () {
          return k || h.error(e + " was not called"), k[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
          k = arguments;
        }, d.always(function () {
          void 0 === f ? h(a).removeProp(e) : a[e] = f;
          b[e] && (b.jsonpCallback = c.jsonpCallback, lc.push(e));
          k && h.isFunction(f) && f(k[0]);
          k = f = void 0;
        }), "script";
      });
      ca.createHTMLDocument = function () {
        var a = X.implementation.createHTMLDocument("").body;
        return a.innerHTML = "\x3cform\x3e\x3c/form\x3e\x3cform\x3e\x3c/form\x3e", 2 === a.childNodes.length;
      }();
      h.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var d, e, f;
        return b || (ca.createHTMLDocument ? (b = X.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = X.location.href, b.head.appendChild(d)) : b = X), e = Ca.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = A([a], b, f), f && f.length && h(f).remove(), h.merge([], e.childNodes));
      };
      h.fn.load = function (a, b, c) {
        var d,
          e,
          f,
          k = this,
          g = a.indexOf(" ");
        return -1 < g && (d = qa(a.slice(g)), a = a.slice(0, g)), h.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), 0 < k.length && h.ajax({
          url: a,
          type: e || "GET",
          dataType: "html",
          data: b
        }).done(function (a) {
          f = arguments;
          k.html(d ? h("\x3cdiv\x3e").append(h.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
          k.each(function () {
            c.apply(this, f || [a.responseText, b, a]);
          });
        }), this;
      };
      h.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        h.fn[b] = function (a) {
          return this.on(b, a);
        };
      });
      h.expr.pseudos.animated = function (a) {
        return h.grep(h.timers, function (b) {
          return a === b.elem;
        }).length;
      };
      h.offset = {
        setOffset: function (a, b, c) {
          var d,
            e,
            f,
            k = h.css(a, "position"),
            g = h(a),
            l = {};
          "static" === k && (a.style.position = "relative");
          var p = g.offset();
          var m = h.css(a, "top");
          var n = h.css(a, "left");
          ("absolute" === k || "fixed" === k) && -1 < (m + n).indexOf("auto") ? (d = g.position(), f = d.top, e = d.left) : (f = parseFloat(m) || 0, e = parseFloat(n) || 0);
          h.isFunction(b) && (b = b.call(a, c, h.extend({}, p)));
          null != b.top && (l.top = b.top - p.top + f);
          null != b.left && (l.left = b.left - p.left + e);
          "using" in b ? b.using.call(a, l) : g.css(l);
        }
      };
      h.fn.extend({
        offset: function (a) {
          if (arguments.length) return void 0 === a ? this : this.each(function (b) {
            h.offset.setOffset(this, a, b);
          });
          var b,
            c,
            d,
            e,
            f = this[0];
          if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
            top: d.top + e.pageYOffset - c.clientTop,
            left: d.left + e.pageXOffset - c.clientLeft
          }) : {
            top: 0,
            left: 0
          };
        },
        position: function () {
          if (this[0]) {
            var a,
              b,
              c = this[0],
              d = {
                top: 0,
                left: 0
              };
            return "fixed" === h.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n(a[0], "html") || (d = a.offset()), d = {
              top: d.top + h.css(a[0], "borderTopWidth", !0),
              left: d.left + h.css(a[0], "borderLeftWidth", !0)
            }), {
              top: b.top - d.top - h.css(c, "marginTop", !0),
              left: b.left - d.left - h.css(c, "marginLeft", !0)
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var a = this.offsetParent; a && "static" === h.css(a, "position");) a = a.offsetParent;
            return a || Pb;
          });
        }
      });
      h.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (a, b) {
        var c = "pageYOffset" === b;
        h.fn[a] = function (d) {
          return oa(this, function (a, d, e) {
            var f;
            return h.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
          }, a, d, arguments.length);
        };
      });
      h.each(["top", "left"], function (a, b) {
        h.cssHooks[b] = T(ca.pixelPosition, function (a, c) {
          if (c) return c = M(a, b), bc.test(c) ? h(a).position()[b] + "px" : c;
        });
      });
      h.each({
        Height: "height",
        Width: "width"
      }, function (a, b) {
        h.each({
          padding: "inner" + a,
          content: b,
          "": "outer" + a
        }, function (c, d) {
          h.fn[d] = function (e, f) {
            var k = arguments.length && (c || "boolean" != typeof e),
              g = c || (!0 === e || !0 === f ? "margin" : "border");
            return oa(this, function (b, c, e) {
              var f;
              return h.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? h.css(b, c, g) : h.style(b, c, e, g);
            }, b, k ? e : void 0, k);
          };
        });
      });
      h.fn.extend({
        bind: function (a, b, c) {
          return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
          return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
          return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
          return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
      });
      h.holdReady = function (a) {
        a ? h.readyWait++ : h.ready(!0);
      };
      h.isArray = Array.isArray;
      h.parseJSON = JSON.parse;
      h.nodeName = n;
      "function" == typeof define && define.amd && define("jquery", [], function () {
        return h;
      });
      var Zb = a.jQuery,
        $b = a.$;
      return h.noConflict = function (b) {
        return a.$ === h && (a.$ = $b), b && a.jQuery === h && (a.jQuery = Zb), h;
      }, b || (a.jQuery = a.$ = h), h;
    }(window, !0),
    yb = [],
    W = /(android|iphone|ipad|ipod)/i.test(navigator.userAgent),
    Hb = navigator.maxTouchPoints && 2 < navigator.maxTouchPoints && /MacIntel/.test(navigator.platform);
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  var Ia = /(Safari)/i.test(navigator.userAgent) && !/(Chrome)/i.test(navigator.userAgent),
    mb = !!window.MSInputMethodContext && !!document.documentMode,
    Rb = "https:" === window.location.protocol,
    Nc = mb || Ia;
  navigator.userAgent.toLowerCase().indexOf("firefox");
  var Fa;
  (function () {
    function a(a) {
      q.event.special[a] = {
        setup: function (b, e, n) {
          this.addEventListener(a, n, {
            passive: !0
          });
        }
      };
    }
    (function () {
      var a = !1;
      try {
        var g = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          }
        });
        window.addEventListener("testPassive", null, g);
        window.removeEventListener("testPassive", null, g);
      } catch (e) {}
      return a;
    })() && (a("touchstart"), a("touchmove"));
  })();
  var za = function () {
      return "1".startsWith ? function (a, b) {
        return a.startsWith(b);
      } : function (a, b) {
        return 0 === a.indexOf(b);
      };
    }(),
    Za = {
      prepare: function (a) {
        var b = {};
        a.tag && a.tag.forEach(function (a) {
          a.sentEvents = b;
        });
      },
      getIteration: function (a, b) {
        function g(a) {
          if (a[b]) return 1;
          a[b] = !0;
          return 0;
        }
        return g(a.tag.sentEvents, b) + g(a.tag, b);
      }
    },
    Vb = function () {
      return function (a) {
        if (!(a && -1 < Da(a).indexOf(".cdn.ampproject.org"))) return a;
        var b = RegExp(".cdn.ampproject.org(?:/.{1,4}){0,6}/(.*)", "gi").exec(a);
        return b && 1 < b.length ? "https://" + b[1] : a;
      };
    }(),
    Da = function () {
      var a = /^[^:\/?#]*:\/\/\/?([^:\/?#]*)/;
      return function (b) {
        return b ? (b = b.match(a)) && 1 < b.length ? b[1] : "" : "";
      };
    }(),
    xb = function () {
      var a = Va(),
        b = [];
      return {
        setStorage: function (g, e) {
          b[g] = e;
          a && localStorage.setItem(g, e);
        },
        getStorage: function (g, e) {
          if (!a) return void 0 === b[g] ? e : b[g];
          var n = localStorage.getItem(g);
          return null === n ? e : n;
        }
      };
    }(),
    O = function (a) {
      if (!a) return a;
      if (5 < a.length && 0 === a.indexOf("$$$") && a.lastIndexOf("$$$") === a.length - 3) return a.substr(3, a.length - 6);
      a = a.split("");
      for (var b = Math.floor(a.length / 2), g = 0; g < b; g += 2) {
        var e = a.length - g - 1,
          n = a[e];
        a[e] = a[g];
        a[g] = n;
      }
      return a.join("");
    },
    Pa = O("mtcpk:o/-eavsng.itrtsr/cs.toh"),
    Zc = O("p1.2s1"),
    Bb = !1,
    fa = O("dltcemenaIp"),
    A = new function () {
      function a(a, d, f, l, p, m) {
        d = d || {};
        var q = {};
        a: {
          if ((a === w || a === C) && d.tag) {
            var u = Za.getIteration(d, a);
            if (2 === u && (a === C || a === w && !d.tag.rc)) {
              u = !0;
              break a;
            }
            u && (q.d = u);
          }
          u = !1;
        }
        if (!u && (u = ~~d.ap, 1 >= u || a !== w && a !== C ? u = !1 : (q.ap = u, u = !(1 > Math.random() * u)), !u)) {
          u = d.tag ? d.tag.url ? d.tag : 1 === d.tag.length ? d.tag[0] : void 0 : void 0;
          q[I] = d.id;
          q[G] = a;
          q[F] = d[F];
          q[J] = u && u.id;
          u && u[D] && (q[D] = u[D]);
          u && u[B] && (q[B] = u[B]);
          q[N] = f ? f + "" : f;
          p && (q[L] = p);
          m && (q[K] = m);
          q.u = Ua();
          q.t = Date.now() - c;
          q.v = Zc;
          if (f = O("paxhIf3yh1ttaB04O8HnWYGfrH2XIxIrJ9vrs7KCPawOVMAKQsnf")) q.p = f;
          if (f = O("")) q.w = f;
          d._constructor && (q.width = d._constructor.getApi().getAdWidth());
          n(q, d);
          q.r = Math.random();
          !d.sendEventsAsBatch || a !== C && a !== w && a !== r || xb.getStorage("ap.log", !1) ? M.length ? (M.push(q), g(), f = !0) : f = void 0 : (M.push(q), 100 <= M.length ? g() : T || (T = setTimeout(g, d.sendEventsAsBatch)), f = !0);
          f || b(l, q);
          e(a, d);
        }
      }
      function b(a, b) {
        var c = new Image();
        c.crossOrigin = "Anonymous";
        a && (c.onload = function () {
          a: try {
            var b = document.createElement(O("savnac")).getContext("2d");
            b.drawImage(c, 0, 0);
            var d = b.getImageData(0, 0, 1, 1).data,
              e;
            for (e in d) if (255 !== d[e]) break a;
            a();
          } catch (Ga) {}
        });
        c.src = Pa + Q + q.param(b);
      }
      function g() {
        T && (clearTimeout(T), T = 0);
        if (M.length) {
          var a = M;
          M = [];
          q.ajax({
            type: "POST",
            url: Pa + Q,
            data: JSON.stringify(a),
            contentType: "application/json",
            success: function (c, d, e) {
              200 === e.status && "image/gif" === e.getResponseHeader("content-type") && (a.forEach(function (a) {
                a.z = (a.z || "") + "sg:1;";
                b(U, a);
              }), xb.setStorage("ap.log", "1"));
            }
          });
        }
      }
      function e(a, b) {
        var c = b.clickUrl;
        a === A.types.click && c && q("body").append(q("\x3ciframe/\x3e").on("load", function () {
          q(this).remove();
        }).hide().attr("src", ja(c)));
      }
      function n(a, b) {
        function c(a, b) {
          b && (d += a + ":" + b + ";");
        }
        var d = "";
        c("p", b._pType);
        c("pt", b._pAdType);
        c("v", b._vType || b.type);
        var e = b.tag;
        e && (c("c", e.client), c("t", e.type), c("vp", e._isVpaid && "1"));
        xb.getStorage("ap.log", !1) && c("sg", "2");
        d && (a.z = d);
      }
      var f = /dMod_/.test(navigator.userAgent),
        p = da().location.hash,
        d,
        c = Date.now(),
        l = O("TNII"),
        r = O("DODAEL"),
        m = O("DTTRAES"),
        v = O("RRROE"),
        w = O("TEEUQSR"),
        z = O("TEUAFLD"),
        u = O("KLICC"),
        x = O("NMIRSESPOI"),
        C = O("YPIOUTRNPTO"),
        H = O("TOETNNC"),
        I = O("di"),
        G = O("eypt"),
        F = fa,
        J = O("dagIt"),
        D = O("dtIv"),
        B = O("pm"),
        N = O("eeassgm"),
        L = O("Aypet"),
        K = O("AoptTnteynec"),
        Q = O("?v//jog/ls11/"),
        M = [],
        T;
      this.types = {
        init: l,
        loaded: r,
        started: m,
        error: v,
        request: w,
        default: z,
        click: u,
        impression: x,
        opportunity: C,
        content: H
      };
      this.prepare = function (a, b) {
        a._constructor = b;
        a.advertising && (a.advertising._constructor = b, a.advertising._pType = a._pType, a.advertising._vType = a._vType || a.type);
      };
      this.debugMode = function (a) {
        void 0 !== a && (f = a);
        return f;
      };
      this.log = function (a) {
        if (f || -1 !== p.indexOf("dMod_")) {
          if (window.console) try {
            console.log(a);
          } catch (P) {}
          W && (d || (d = q("\x3cdiv class\x3d'logMobEl'\x3e\x3c/div\x3e"), q("body").append(d)), d.append(a + "\x3cbr/\x3e"));
        }
      };
      this.initError = function (b, c, d) {
        var e = {};
        d ? e = d.advertising : e[fa] = O("Hpv_42oQSI7crqHe1Dwo8wpEu8VEw7KCBYGHKl8nzVxEWeyGiEaO") || b && (q(b).attr("data-id") || b.id) || "initError";
        a(A.types.error, e, "init " + c);
      };
      this.event = function (b, c, d, e) {
        a(b, c, d, e);
      };
      this.viewed = function (b, c, d, e) {
        a(b, c, null, null, d, e);
      };
    }(),
    Sa,
    kb,
    pb,
    lb;
  (function () {
    function a(a, e) {
      if (a && e) {
        var f = b(a, "frequencyCapping get");
        if (f) {
          var d = ++f.counterShowed;
          localStorage.setItem(a, f.timeExpire + "." + d + "." + f.frequency);
        } else f = e.split("/"), d = parseInt(f[1]), d = new Date(new Date().setHours(new Date().getHours() + d)).getTime(), (f = g(a, d, 1, f[0], "frequencyCapping create")) && localStorage.setItem(a, f.timeExpire + "." + f.counterShowed + "." + f.frequency);
      }
    }
    function b(a, b) {
      var e = localStorage.getItem(a);
      if (e) return e = e.split("."), g(a, parseInt(e[0]), parseInt(e[1]), parseInt(e[2]), b);
    }
    function g(a, b, e, d, c) {
      if (isNaN(b) || isNaN(e) || isNaN(d)) localStorage.removeItem(a), A.event(A.types.error, {
        placementId: a
      }, c);else return {
        timeExpire: b,
        counterShowed: e,
        frequency: d
      };
    }
    var e = Va();
    Sa = function (a, f) {
      function g(a, c) {
        if (!a || !c) return !1;
        if (!e) return !0;
        var d = b(a, "frequencyCapping reached");
        return !d || d.counterShowed < d.frequency ? !1 : new Date().getTime() >= d.timeExpire ? (localStorage.removeItem(a), !1) : !0;
      }
      return g(a, f.frequencyCapping) || g("o:" + a, f.opportunitiesFrequencyCapping);
    };
    kb = function (b) {
      b.placementId && a(b.placementId, b.frequencyCapping);
      b.tag && b.tag.vtId && a(b.tag.vtId, b.tag.frequencyCapping);
    };
    pb = function (b) {
      var e = Za.getIteration(b, "FC_OPPORTUNITY");
      b.placementId && 1 > e && a("o:" + b.placementId, b.opportunitiesFrequencyCapping);
      b.tag && b.tag.vtId && 2 > e && a("o:" + b.tag.vtId, b.tag.opportunitiesFrequencyCapping);
    };
    lb = function (a) {
      a && (a.placementId && localStorage.removeItem("o:" + a.placementId), a.tag && a.tag.vtId && localStorage.removeItem("o:" + a.tag.vtId));
    };
    e || (lb = pb = kb = U);
  })();
  var ob;
  (function () {
    var a = da(),
      b = q(a);
    ob = function (g, e) {
      var n = g.offset().top,
        f = b.scrollTop(),
        p = a.innerHeight;
      n = f > n ? n + e - f : f + p - n;
      if (0 >= n) return 0;
      n = Math.min(n, p, e);
      return Math.floor(100 * n / e);
    };
  })();
  var Ea = [];
  la.setup = function (a) {
    function b() {
      return "inView" === a.type || "rewarded" === a.type;
    }
    function g() {
      var a = q("\x3cspan\x3e\x3c/span\x3e");
      b() ? q("body", da().document).append(a) : q(db(document.body)).after(a);
      return a.get(0);
    }
    a && (a._pType = "st");
    if (a.safeFrame || b()) return la(g()).setup(a);
    document.write("\x3cspan\x3e\x3c/span\x3e");
    return la(q("span:last").get(0)).setup(a);
  };
  la.push = function (a) {
    function b(b) {
      function c(c, e, f) {
        var g = Ra(a[c], d.attr("data-" + c));
        g && ("true" === g ? g = !0 : "false" === g && (g = !1), (f || b)[e || c] = g);
      }
      var d = q("#" + f);
      if (!b && !d.attr("data-file")) return g();
      b = b || {};
      b._pType = "pl";
      b[fa] = f;
      c("file");
      c("autoStart");
      c("muted");
      c("width");
      c("height");
      c("_type");
      b.advertising && Sa(f, b.advertising) && (b.advertising.tag = []);
      b.advertising && c("advertising-passback", "passback", b.advertising);
      b.after && (p = n(p, b.after, b.type));
      e(b);
      p ? g(new la(hb(p, f, !0))).setup(b) : g(new la(f)).setup(b);
    }
    function g(b) {
      a.init && a.init(b);
      return b;
    }
    function e(b) {
      a.appParams && (b.appParams = a.appParams);
      a.clickUrl && b.advertising && (b.advertising.clickUrl = a.clickUrl);
    }
    function n(a, b, e) {
      b = b.trim();
      if ("TOP_IFRAME" !== b) return eval(b);
      for (b = window; b.parent.frameElement;) b = b.parent;
      return "inView" === e || "rewarded" === e ? b.parent.document.body : b.frameElement || a;
    }
    if (q.isFunction(a)) return setTimeout(a, 1), g();
    var f = a.id || a,
      p = a.after;
    q.get(Pa + "/v1/placements/" + f + "/code/js/1", function () {
      var b = Wb(a.appParams);
      b.url = Ua();
      b.b = Math.random();
      return b;
    }(), b).fail(function (a, c, e) {
      A.event(A.types.error, {
        placementId: f
      }, "get options " + a.status + " " + c + " " + e);
      b();
    });
  };
  var x = {
      resetStatus: "resetStatus",
      startLoad: "startLoad",
      endLoad: "endLoad",
      beforePlay: "beforePlay",
      beforeComplete: "beforeComplete",
      beforeGlobalStopped: "beforeGlobalStopped",
      time: "timeUpdate",
      timeTags: "timeTags",
      showAd: "showAd",
      hideScreen: "hideScreen",
      apiReady: "apiReady",
      addSoundByHover: "addSoundByHover",
      close: "close",
      forceShow: "forceShow",
      adStart: "AdStart",
      adLoaded: "AdLoaded",
      adStarted: "AdStarted",
      adImpression: "AdImpression",
      adStopped: "AdStopped",
      adPaused: "AdPaused",
      adResumed: "AdPlaying",
      adClickThru: "AdClickThru",
      adCompleted: "AdCompleted",
      adError: "AdError",
      adSkippableStateChange: "AdSkippableStateChange",
      adSkipped: "AdSkipped",
      adCurrentPercent: "AdCurrentPercent",
      adVolumeChange: "AdVolumeChange",
      adSizeChange: "AdSizeChange",
      adUserClose: "AdUserClose",
      adVideo: {
        0: "AdVideoStart",
        25: "AdVideoFirstQuartile",
        50: "AdVideoMidpoint",
        75: "AdVideoThirdQuartile",
        100: "AdVideoComplete"
      },
      globalShowed: "globalShowed",
      globalLoaded: "globalLoaded",
      globalStopped: "globalStopped"
    },
    ha = {
      PRE: "PRE",
      MID: "MID",
      POST: "POST"
    };
  (function () {
    (function () {
      try {
        var a = document.currentScript;
        return !a || a.src && -1 !== a.src.indexOf("adapter1");
      } catch (b) {
        return !0;
      }
    })() && (window.getVPAIDAd = function () {
      return new tc();
    });
  })();
  var Z = function (a, b, g, e, n, f) {
    function p(a) {
      return function () {
        f.onProgressPercent(a);
      };
    }
    function d(a) {
      return function () {
        f.onAdLog(a);
      };
    }
    function c(a) {
      return function (b) {
        m.ended();
        a(b);
      };
    }
    function l(a, b) {
      return function () {
        try {
          return a.apply(m._creative, arguments);
        } catch (C) {
          A.log(C), b && (f.onAdError("tryCatchVpaidWrap"), m.ended());
        }
      };
    }
    function r() {
      function a(a) {
        function b(b, c, e) {
          d[b] = {
            setter: a.__lookupSetter__(b),
            getter: a.__lookupGetter__(b)
          };
          a.__defineSetter__(b, c);
          a.__defineGetter__(b, e);
        }
        function c(a) {
          var b = a;
          return {
            setter: function (a) {
              b = a;
            },
            getter: function () {
              return b;
            }
          };
        }
        var d = {};
        try {
          var e = c(!0);
          b("muted", e.setter, e.setter);
          e = c(0);
          b("volume", e.setter, e.setter);
        } catch (D) {
          return A.log(D), U;
        }
        return function () {
          try {
            d.muted && b("muted", d.muted.setter, d.muted.getter), d.volume && b("volume", d.volume.setter, d.volume.getter);
          } catch (D) {
            A.log(D);
          }
        };
      }
      if (b.getVideo().muted) {
        var c = a(b.getVideo());
        var d = setInterval(function () {
          try {
            b.getVideo().muted || (b.getVideo().muted = !0), 0 < m.getAdVolume() && (m.setAdVolume(0), b.play());
          } catch (H) {
            q();
          }
        }, 50);
        q = function () {
          clearInterval(d);
          q = U;
          c && c();
        };
      }
    }
    var m = this,
      q = U;
    this._creative = e;
    this.player = b;
    this.callbacks = {};
    this.methods = "handshakeVersion initAd startAd stopAd skipAd resizeAd pauseAd resumeAd expandAd collapseAd subscribe unsubscribe".split(" ");
    var w = this.isEnded = !1,
      z;
    this.getType = function () {
      return "vpaid";
    };
    this.isPaused = function () {
      return z;
    };
    this.skipAd = function () {
      m.destroy();
      f.onAdLog("skipAd");
      f.onAdSkipped();
    };
    this.clickAd = function () {
      f.onAdLog("not implement clickAd");
    };
    this.volume = function (a) {
      if (w) return void 0 !== a && (f.onAdLog("volume: " + a), m.setAdVolume(a)), m.getAdVolume();
    };
    this.isMuted = function () {
      if (w) return 0 === m.getAdVolume();
    };
    this.destroy = function () {
      m.ended("call destroy");
    };
    this.checkVPAIDInterface = function () {
      return m.methods.every(function (a) {
        return m._creative[a] && "function" === typeof m._creative[a];
      });
    };
    this.ended = function (a) {
      f.onAdLog("vpaid ended is alredy ended: " + m.isEnded + ",   error: " + a);
      if (!m.isEnded) {
        if (m._creative) {
          f.onAdLog("unSubscribeCreative");
          for (var b in m.callbacks) m.callbacks.hasOwnProperty(b) && m._creative.unsubscribe(m.callbacks[b], b);
        }
        m.isEnded = !0;
        n();
        q();
      }
    };
    this.skipOffset = function () {
      return -1;
    };
    Z.prototype.setCallbacksForCreative = function () {
      m.callbacks = {
        AdStarted: m.onAdStarted,
        AdStopped: c(f.onAdStopped),
        AdSkipped: c(f.onAdSkipped),
        AdLoaded: m.onAdLoaded,
        AdLinearChange: d("AdLinearChange"),
        AdSizeChange: m.onAdSizeChange,
        AdExpandedChange: d("AdExpandedChange"),
        AdSkippableStateChange: f.onAdSkippableStateChange,
        AdDurationChange: d("AdDurationChange"),
        AdRemainingTimeChange: U,
        AdVolumeChange: m.onAdVolumeChange,
        AdImpression: f.onAdImpression,
        AdClickThru: f.onAdClickThru,
        AdInteraction: d("AdInteraction"),
        AdVideoStart: p(0),
        AdVideoFirstQuartile: p(25),
        AdVideoMidpoint: p(50),
        AdVideoThirdQuartile: p(75),
        AdVideoComplete: f.onAdCompleted,
        AdUserAcceptInvitation: d("AdUserAcceptInvitation"),
        AdUserMinimize: d("AdUserMinimize"),
        AdUserClose: f.onAdUserClose,
        AdPaused: m.onAdPaused,
        AdPlaying: m.onAdPlaying,
        AdError: c(f.onAdError),
        AdLog: f.onAdLog
      };
      for (var a in m.callbacks) m.callbacks.hasOwnProperty(a) && m._creative.subscribe(m.callbacks[a], a, m);
    };
    Z.prototype.unsubscribeEvents = function () {
      f.onAdLog("unSubscribeCreative");
      for (var a in m.callbacks) m.callbacks.hasOwnProperty(a) && m._creative.unsubscribe(m.callbacks[a], a);
    };
    Z.prototype.handshakeVersion = function (a) {
      return m._creative.handshakeVersion(a);
    };
    Z.prototype.initAd = function (a, b, c, d, e, f) {
      r();
      m._creative.initAd(a, b, c, d, e, f);
    };
    Z.prototype.onAdStarted = function () {
      z = !1;
      f.onAdStarted();
      setTimeout(q, 1500);
    };
    Z.prototype.onAdPaused = function () {
      z = !0;
      f.onAdLog("onAdPaused");
      f.onAdPaused();
    };
    Z.prototype.onAdPlaying = function () {
      z = !1;
      f.onAdLog("onAdPlaying");
      f.onAdPlaying();
    };
    Z.prototype.getAdExpanded = function () {
      f.onAdLog("getAdExpanded");
      return l(m._creative.getAdExpanded)();
    };
    Z.prototype.getAdSkippableState = function () {
      f.onAdLog("getAdSkippableState");
      return l(m._creative.getAdSkippableState)();
    };
    Z.prototype.onAdSizeChange = function () {
      f.onAdLog("Adsizechangedto:  w\x3d" + l(m._creative.getAdWidth)() + " h\x3d" + l(m._creative.getAdHeight)());
      f.onAdSizeChange();
    };
    Z.prototype.getAdDuration = function () {
      return l(m._creative.getAdDuration)();
    };
    Z.prototype.getAdRemainingTime = function () {
      return m._creative.getAdRemainingTime ? l(m._creative.getAdRemainingTime)() : m._creative.getRemainingTime ? l(m._creative.getRemainingTime)() : -2;
    };
    Z.prototype.getAdLinear = function () {
      f.onAdLog("getAdLinear");
      return l(m._creative.getAdLinear)();
    };
    Z.prototype.onAdLoaded = function () {
      f.onAdLog("ad has been loaded  isAdLoaded before: " + w);
      w || (z = w = !0, f.onAdLoaded(), l(m._creative.startAd, !0)());
    };
    Z.prototype.setAdVolume = function (a) {
      f.onAdLog("setAdVolume: " + a);
      b.muted(0 === a);
      l(m._creative.setAdVolume)(a);
    };
    Z.prototype.getAdVolume = function () {
      return l(m._creative.getAdVolume)();
    };
    Z.prototype.onAdVolumeChange = function () {
      var a = l(m._creative.getAdVolume)();
      q === U && b.muted(0 === a);
      f.onAdVolumeChange(a);
    };
    Z.prototype.resizeAd = function (a, b, c) {
      w && (c = c ? "fullscreen" : "normal", f.onAdLog("resizeAd width, height, viewMode: " + a + b + c), l(m._creative.resizeAd)(a, b, c));
    };
    Z.prototype.pauseAd = function () {
      w && (f.onAdLog("pauseAd"), l(m._creative.pauseAd)());
    };
    Z.prototype.resumeAd = function () {
      w && (f.onAdLog("resumeAd"), l(m._creative.resumeAd, !0)());
    };
    Z.prototype.expandAd = function () {
      w && (f.onAdLog("expandAd"), l(m._creative.expandAd)());
    };
    Z.prototype.collapseAd = function () {
      w && (f.onAdLog("collapseAd"), l(m._creative.collapseAd, !0)());
    };
    Z.prototype.stopAd = function () {
      w && (f.onAdLog("stopAd"), l(m._creative.stopAd, !0)());
    };
  };
  var Ha = function () {
    return function n(b, g, e) {
      function f(c, d) {
        if (!g[c]) {
          if (!b[c]) {
            var l = "function" == typeof require && require;
            if (!d && l) return l(c, !0);
            if (p) return p(c, !0);
            l = Error("Cannot find module '" + c + "'");
            throw l.code = "MODULE_NOT_FOUND", l;
          }
          l = g[c] = {
            exports: {}
          };
          b[c][0].call(l.exports, function (d) {
            var e = b[c][1][d];
            return f(e ? e : d);
          }, l, l.exports, n, b, g, e);
        }
        return g[c].exports;
      }
      for (var p = "function" == typeof require && require, d = 0; d < e.length; d++) f(e[d]);
      return f;
    }({
      1: [function (b, g, e) {
        function n() {
          this._events = this._events || {};
          this._maxListeners = this._maxListeners || void 0;
        }
        function f(b) {
          return "function" === typeof b;
        }
        function p(b) {
          return "object" === typeof b && null !== b;
        }
        g.exports = n;
        n.EventEmitter = n;
        n.prototype._events = void 0;
        n.prototype._maxListeners = void 0;
        n.defaultMaxListeners = 10;
        n.prototype.setMaxListeners = function (b) {
          if ("number" !== typeof b || 0 > b || isNaN(b)) throw TypeError("n must be a positive number");
          this._maxListeners = b;
          return this;
        };
        n.prototype.emit = function (b) {
          var c;
          this._events || (this._events = {});
          if ("error" === b && (!this._events.error || p(this._events.error) && !this._events.error.length)) {
            var d = arguments[1];
            if (d instanceof Error) throw d;
            var e = Error('Uncaught, unspecified "error" event. (' + d + ")");
            e.context = d;
            throw e;
          }
          e = this._events[b];
          if (void 0 === e) return !1;
          if (f(e)) switch (arguments.length) {
            case 1:
              e.call(this);
              break;
            case 2:
              e.call(this, arguments[1]);
              break;
            case 3:
              e.call(this, arguments[1], arguments[2]);
              break;
            default:
              d = Array.prototype.slice.call(arguments, 1), e.apply(this, d);
          } else if (p(e)) {
            d = Array.prototype.slice.call(arguments, 1);
            var g = e.slice();
            e = g.length;
            for (c = 0; c < e; c++) g[c].apply(this, d);
          }
          return !0;
        };
        n.prototype.addListener = function (b, c) {
          var d;
          if (!f(c)) throw TypeError("listener must be a function");
          this._events || (this._events = {});
          this._events.newListener && this.emit("newListener", b, f(c.listener) ? c.listener : c);
          this._events[b] ? p(this._events[b]) ? this._events[b].push(c) : this._events[b] = [this._events[b], c] : this._events[b] = c;
          p(this._events[b]) && !this._events[b].warned && (d = void 0 !== this._maxListeners ? this._maxListeners : n.defaultMaxListeners) && 0 < d && this._events[b].length > d && (this._events[b].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[b].length), "function" === typeof console.trace && console.trace());
          return this;
        };
        n.prototype.on = n.prototype.addListener;
        n.prototype.once = function (b, c) {
          function d() {
            this.removeListener(b, d);
            e || (e = !0, c.apply(this, arguments));
          }
          if (!f(c)) throw TypeError("listener must be a function");
          var e = !1;
          d.listener = c;
          this.on(b, d);
          return this;
        };
        n.prototype.removeListener = function (b, c) {
          if (!f(c)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[b]) return this;
          var d = this._events[b];
          var e = d.length;
          var g = -1;
          if (d === c || f(d.listener) && d.listener === c) delete this._events[b], this._events.removeListener && this.emit("removeListener", b, c);else if (p(d)) {
            for (; 0 < e--;) if (d[e] === c || d[e].listener && d[e].listener === c) {
              g = e;
              break;
            }
            if (0 > g) return this;
            1 === d.length ? (d.length = 0, delete this._events[b]) : d.splice(g, 1);
            this._events.removeListener && this.emit("removeListener", b, c);
          }
          return this;
        };
        n.prototype.removeAllListeners = function (b) {
          if (!this._events) return this;
          if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[b] && delete this._events[b], this;
          if (0 === arguments.length) {
            for (c in this._events) "removeListener" !== c && this.removeAllListeners(c);
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
          }
          var c = this._events[b];
          if (f(c)) this.removeListener(b, c);else if (c) for (; c.length;) this.removeListener(b, c[c.length - 1]);
          delete this._events[b];
          return this;
        };
        n.prototype.listeners = function (b) {
          return this._events && this._events[b] ? f(this._events[b]) ? [this._events[b]] : this._events[b].slice() : [];
        };
        n.prototype.listenerCount = function (b) {
          if (this._events) {
            b = this._events[b];
            if (f(b)) return 1;
            if (b) return b.length;
          }
          return 0;
        };
        n.listenerCount = function (b, c) {
          return b.listenerCount(c);
        };
      }, {}],
      2: [function (b, g, e) {
        b = function () {
          return function () {
            this.survey = this.pricing = this.advertiser = this.description = this.title = this.system = this.sequence = this.id = null;
            this.errorURLTemplates = [];
            this.impressionURLTemplates = [];
            this.creatives = [];
            this.extensions = [];
          };
        }();
        g.exports = b;
      }, {}],
      3: [function (b, g, e) {
        var n = b("./parser");
        var f = b("./util");
        b = function () {
          function b() {}
          b.cappingFreeLunch = 0;
          b.cappingMinimumTimeInterval = 0;
          b.options = {
            withCredentials: !1,
            timeout: 2E3
          };
          b.get = function (b, c, f) {
            var d = +new Date();
            var g = e.extend = function (b, c) {
              var d;
              for (d in c) {
                var e = c[d];
                b[d] = e;
              }
              return b;
            };
            if (!f) {
              "function" === typeof c && (f = c);
              var l = {};
            }
            l = g(g({}, this.options), c);
            this.totalCallsTimeout < d ? (this.totalCalls = 1, this.totalCallsTimeout = d + 36E5) : this.totalCalls++;
            if (this.cappingFreeLunch >= this.totalCalls) f(null, Error("VAST call canceled \ufffd\ufffd\ufffd FreeLunch capping not reached yet " + this.totalCalls + "/" + this.cappingFreeLunch));else {
              c = d - this.lastSuccessfullAd;
              if (0 > c) this.lastSuccessfullAd = 0;else if (c < this.cappingMinimumTimeInterval) {
                f(null, Error("VAST call canceled \ufffd\ufffd\ufffd (" + this.cappingMinimumTimeInterval + ")ms minimum interval reached"));
                return;
              }
              return n.parse(b, l, function (b) {
                return function (b, c) {
                  return f(b, c);
                };
              }(this));
            }
          };
          (function () {
            var d = f.storage;
            var c = Object.defineProperty;
            ["lastSuccessfullAd", "totalCalls", "totalCallsTimeout"].forEach(function (e) {
              c(b, e, {
                get: function () {
                  return d.getItem(e);
                },
                set: function (b) {
                  return d.setItem(e, b);
                },
                configurable: !1,
                enumerable: !0
              });
            });
            null == b.lastSuccessfullAd && (b.lastSuccessfullAd = 0);
            null == b.totalCalls && (b.totalCalls = 0);
            null == b.totalCallsTimeout && (b.totalCallsTimeout = 0);
          })();
          return b;
        }();
        g.exports = b;
      }, {
        "./parser": 12,
        "./util": 18
      }],
      4: [function (b, g, e) {
        b = function () {
          return function () {
            this.id = null;
            this.height = this.width = 0;
            this.companionClickThroughURLTemplate = this.iframeResource = this.htmlResource = this.staticResource = this.type = null;
            this.trackingEvents = {};
          };
        }();
        g.exports = b;
      }, {}],
      5: [function (b, g, e) {
        var n = function (b, c) {
            function d() {
              this.constructor = b;
            }
            for (var e in c) f.call(c, e) && (b[e] = c[e]);
            d.prototype = c.prototype;
            b.prototype = new d();
            b.__super__ = c.prototype;
            return b;
          },
          f = {}.hasOwnProperty;
        var p = function () {
          return function () {
            this.trackingEvents = {};
          };
        }();
        b = function (b) {
          function c() {
            c.__super__.constructor.apply(this, arguments);
            this.type = "linear";
            this.duration = 0;
            this.skipDelay = null;
            this.mediaFiles = [];
            this.videoClickThroughURLTemplate = null;
            this.videoClickTrackingURLTemplates = [];
            this.videoCustomClickURLTemplates = [];
            this.adParameters = null;
            this.icons = [];
          }
          n(c, b);
          return c;
        }(p);
        e = function (b) {
          function c() {
            c.__super__.constructor.apply(this, arguments);
            this.type = "nonlinear";
            this.variations = [];
          }
          n(c, b);
          return c;
        }(p);
        p = function (b) {
          function c() {
            this.type = "companion";
            this.variations = [];
          }
          n(c, b);
          return c;
        }(p);
        g.exports = {
          VASTCreativeLinear: b,
          VASTCreativeNonLinear: e,
          VASTCreativeCompanion: p
        };
      }, {}],
      6: [function (b, g, e) {
        b = function () {
          return function () {
            this.attributes = {};
            this.children = [];
          };
        }();
        g.exports = b;
      }, {}],
      7: [function (b, g, e) {
        b = function () {
          return function () {
            this.value = this.name = null;
            this.attributes = {};
          };
        }();
        g.exports = b;
      }, {}],
      8: [function (b, g, e) {
        b = function () {
          return function () {
            this.program = null;
            this.yPosition = this.xPosition = this.width = this.height = 0;
            this.offset = this.apiFramework = null;
            this.duration = 0;
            this.iconClickThroughURLTemplate = this.iframeResource = this.htmlResource = this.staticResource = this.type = null;
            this.iconClickTrackingURLTemplates = [];
            this.iconViewTrackingURLTemplate = null;
          };
        }();
        g.exports = b;
      }, {}],
      9: [function (b, g, e) {
        g.exports = {
          client: b("./client"),
          tracker: b("./tracker"),
          iconTracker: b("./iconTracker"),
          parser: b("./parser"),
          util: b("./util")
        };
      }, {
        "./client": 3,
        "./parser": 12,
        "./tracker": 14,
        "./iconTracker": 19,
        "./util": 18
      }],
      10: [function (b, g, e) {
        b = function () {
          return function () {
            this.fileURL = this.id = null;
            this.deliveryType = "progressive";
            this.codec = this.mimeType = null;
            this.height = this.width = this.maxBitrate = this.minBitrate = this.bitrate = 0;
            this.maintainAspectRatio = this.scalable = this.apiFramework = null;
          };
        }();
        g.exports = b;
      }, {}],
      11: [function (b, g, e) {
        b = function () {
          return function () {
            this.id = null;
            this.height = this.width = 0;
            this.expandedHeight = this.expandedWidth = null;
            this.minSuggestedDuration = 0;
            this.apiFramework = "static";
            this.nonlinearClickThroughURLTemplate = this.iframeResource = this.htmlResource = this.staticResource = this.type = null;
            this.nonlinearClickTrackingURLTemplates = [];
          };
        }();
        g.exports = b;
      }, {}],
      12: [function (b, g, e) {
        var n = [].indexOf || function (b) {
          for (var c = 0, d = this.length; c < d; c++) if (c in this && this[c] === b) return c;
          return -1;
        };
        var f = b("./urlhandler");
        var p = b("./response");
        var d = b("./ad");
        var c = b("./extension");
        var l = b("./extensionchild");
        var q = b("./util");
        var m = b("./creative").VASTCreativeLinear;
        var v = b("./creative").VASTCreativeCompanion;
        var w = b("./creative").VASTCreativeNonLinear;
        var z = b("./mediafile");
        var u = b("./icon");
        var x = b("./companionad");
        var C = b("./nonlinear");
        var H = b("events").EventEmitter;
        b = function () {
          function b() {}
          var e = [];
          b.addURLTemplateFilter = function (b) {
            "function" === typeof b && e.push(b);
          };
          b.removeURLTemplateFilter = function () {
            return e.pop();
          };
          b.countURLTemplateFilters = function () {
            return e.length;
          };
          b.clearUrlTemplateFilters = function () {
            return e = [];
          };
          b.parse = function (b, c, d) {
            d || ("function" === typeof c && (d = c), c = {});
            return this._parse(b, null, c, function (b, c) {
              return d(c, b);
            });
          };
          b.vent = new H();
          b.track = function (b, c) {
            this.vent.emit("VAST-error", c);
            c && 302 === c.ERRORCODE && A.log("vast errorCode 302 Wrapper limit reached");
            return q.track(b, c);
          };
          b.on = function (b, c) {
            return this.vent.on(b, c);
          };
          b.once = function (b, c) {
            return this.vent.once(b, c);
          };
          b._parse = function (b, c, d, g) {
            function l(b, c) {
              b.ads = b.ads || [];
              b._forEvents = [];
              c.ads.forEach(function (c) {
                -1 === b.ads.indexOf(c) && (b.ads.push(c), b._forEvents.push(c));
                b._forEvents = b._forEvents.concat(c._forEvents || []);
                c._forEvents = [];
              });
              return b._forEvents;
            }
            var m;
            g || ("function" === typeof d && (g = d), d = {});
            var q = 0;
            for (m = e.length; q < m; q++) {
              var r = e[q];
              b = r(b);
            }
            null == c && (c = []);
            c.push(b);
            return f.get(b, d, function (e) {
              return function (f, m) {
                var q;
                if (null != f) return g(f);
                var r = new p();
                if (null == (null != m ? m.documentElement : void 0) || "VAST" !== m.documentElement.nodeName) return g(Error("Invalid VAST XMLDocument"));
                var u = m.documentElement.childNodes;
                var w = 0;
                for (q = u.length; w < q; w++) {
                  var B = u[w];
                  "Error" === B.nodeName && r.errorURLTemplates.push(e.parseNodeText(B));
                }
                u = m.documentElement.childNodes;
                w = 0;
                for (q = u.length; w < q; w++) if (B = u[w], "Ad" === B.nodeName) {
                  var v = e.parseAdElement(B);
                  null != v ? r.ads.push(v) : e.track(r.errorURLTemplates, {
                    ERRORCODE: 101
                  });
                }
                var z = function (b) {
                  var c;
                  null == b && (b = !1);
                  if (r) {
                    var d = !0;
                    var f = r.ads;
                    var m = 0;
                    for (c = f.length; m < c; m++) {
                      v = f[m];
                      if (null != v.nextWrapperURL) return;
                      0 < v.creatives.length && (d = !1);
                    }
                    d && (b || e.track(r.errorURLTemplates, {
                      ERRORCODE: 303
                    }));
                    0 === r.ads.length && (r = null);
                    return g(null, r);
                  }
                };
                for (B = r.ads.length; B--;) v = r.ads[B], null != v.nextWrapperURL && function (f) {
                  var g;
                  if (5 <= c.length || (g = f.nextWrapperURL, 0 <= n.call(c, g))) e.track(f.errorURLTemplates, {
                    ERRORCODE: 302
                  }), r.ads.splice(r.ads.indexOf(f), 1), z();else return 0 === f.nextWrapperURL.indexOf("//") ? (g = location.protocol, f.nextWrapperURL = "" + g + f.nextWrapperURL) : -1 === f.nextWrapperURL.indexOf("://") && (g = b.slice(0, b.lastIndexOf("/")), f.nextWrapperURL = g + "/" + f.nextWrapperURL), e._parse(f.nextWrapperURL, c, d, function (b, c) {
                    var d, g, m, p;
                    var n = !1;
                    if (null != b) e.track(f.errorURLTemplates, {
                      ERRORCODE: 301
                    }), r.ads.splice(r.ads.indexOf(f), 1), n = !0;else if (null == c) e.track(f.errorURLTemplates, {
                      ERRORCODE: 303
                    }), r.ads.splice(r.ads.indexOf(f), 1), n = !0;else {
                      r.errorURLTemplates = r.errorURLTemplates.concat(c.errorURLTemplates);
                      var q = l(f, c);
                      var w = 0;
                      for (g = q.length; w < g; w++) {
                        var u = q[w];
                        u.errorURLTemplates = f.errorURLTemplates.concat(u.errorURLTemplates);
                        u.impressionURLTemplates = f.impressionURLTemplates.concat(u.impressionURLTemplates);
                        u.extensions = f.extensions.concat(u.extensions);
                        if (null != f.trackingEvents) {
                          var B = u.creatives;
                          var v = 0;
                          for (m = B.length; v < m; v++) {
                            var F = B[v];
                            if (null != f.trackingEvents[F.type]) {
                              var D = Object.keys(f.trackingEvents[F.type]);
                              var x = 0;
                              for (p = D.length; x < p; x++) {
                                var K = D[x];
                                (d = F.trackingEvents)[K] || (d[K] = []);
                                F.trackingEvents[K] = F.trackingEvents[K].concat(f.trackingEvents[F.type][K]);
                              }
                            }
                          }
                        }
                        if (null != f.videoClickTrackingURLTemplates) for (p = u.creatives, m = 0, K = p.length; m < K; m++) F = p[m], "linear" === F.type && (F.videoClickTrackingURLTemplates = F.videoClickTrackingURLTemplates.concat(f.videoClickTrackingURLTemplates));
                        if (null != f.videoCustomClickURLTemplates) for (p = u.creatives, m = 0, K = p.length; m < K; m++) F = p[m], "linear" === F.type && (F.videoCustomClickURLTemplates = F.videoCustomClickURLTemplates.concat(f.videoCustomClickURLTemplates));
                        if (null != f.videoClickThroughURLTemplate) for (m = u.creatives, K = 0, u = m.length; K < u; K++) F = m[K], "linear" === F.type && null == F.videoClickThroughURLTemplate && (F.videoClickThroughURLTemplate = f.videoClickThroughURLTemplate);
                      }
                    }
                    delete f.nextWrapperURL;
                    return z(n);
                  });
                }(v);
                return z();
              };
            }(this));
          };
          b.childByName = function (b, c) {
            var d;
            var e = b.childNodes;
            var f = 0;
            for (d = e.length; f < d; f++) {
              var g = e[f];
              if (g.nodeName === c) return g;
            }
          };
          b.childsByName = function (b, c) {
            var d;
            var e = [];
            var f = b.childNodes;
            var g = 0;
            for (d = f.length; g < d; g++) {
              var m = f[g];
              m.nodeName === c && e.push(m);
            }
            return e;
          };
          b.parseAdElement = function (b) {
            var c, d;
            var e = b.childNodes;
            var f = 0;
            for (c = e.length; f < c; f++) {
              var g = e[f];
              if ("Wrapper" === (d = g.nodeName) || "InLine" === d) {
                this.copyNodeAttribute("id", b, g);
                this.copyNodeAttribute("sequence", b, g);
                if ("Wrapper" === g.nodeName) return this.parseWrapperElement(g);
                if ("InLine" === g.nodeName) return this.parseInLineElement(g);
              }
            }
          };
          b.parseWrapperElement = function (b) {
            var c = this.parseInLineElement(b);
            var d = this.childByName(b, "VASTAdTagURI");
            null != d ? c.nextWrapperURL = this.parseNodeText(d) : (d = this.childByName(b, "VASTAdTagURL"), null != d && (c.nextWrapperURL = this.parseNodeText(this.childByName(d, "URL"))));
            var e = c.creatives;
            b = 0;
            for (d = e.length; b < d; b++) {
              var f = e[b];
              "linear" !== f.type && "nonlinear" !== f.type || null == f || (null != f.trackingEvents && (c.trackingEvents || (c.trackingEvents = {}), c.trackingEvents[f.type] = f.trackingEvents), null != f.videoClickTrackingURLTemplates && (c.videoClickTrackingURLTemplates = f.videoClickTrackingURLTemplates), null != f.videoClickThroughURLTemplate && (c.videoClickThroughURLTemplate = f.videoClickThroughURLTemplate), null != f.videoCustomClickURLTemplates && (c.videoCustomClickURLTemplates = f.videoCustomClickURLTemplates));
            }
            if (null != c.nextWrapperURL) return c;
          };
          b.parseInLineElement = function (b) {
            var c, e, f;
            var g = new d();
            g.id = b.getAttribute("id") || null;
            g.sequence = b.getAttribute("sequence") || null;
            var m = b.childNodes;
            b = 0;
            for (c = m.length; b < c; b++) {
              var l = m[b];
              switch (l.nodeName) {
                case "Error":
                  g.errorURLTemplates.push(this.parseNodeText(l));
                  break;
                case "Impression":
                  g.impressionURLTemplates.push(this.parseNodeText(l));
                  break;
                case "Creatives":
                  var p = this.childsByName(l, "Creative");
                  l = 0;
                  for (e = p.length; l < e; l++) {
                    var n = p[l];
                    var q = n.childNodes;
                    n = 0;
                    for (f = q.length; n < f; n++) {
                      var r = q[n];
                      switch (r.nodeName) {
                        case "Linear":
                          (r = this.parseCreativeLinearElement(r)) && g.creatives.push(r);
                          break;
                        case "NonLinearAds":
                          (r = this.parseNonLinear(r)) && g.creatives.push(r);
                          break;
                        case "CompanionAds":
                          (r = this.parseCompanionAd(r)) && g.creatives.push(r);
                      }
                    }
                  }
                  break;
                case "Extensions":
                  this.parseExtension(g.extensions, this.childsByName(l, "Extension"));
                  break;
                case "AdSystem":
                  g.system = {
                    value: this.parseNodeText(l),
                    version: l.getAttribute("version") || null
                  };
                  break;
                case "AdTitle":
                  g.title = this.parseNodeText(l);
                  break;
                case "Description":
                  g.description = this.parseNodeText(l);
                  break;
                case "Advertiser":
                  g.advertiser = this.parseNodeText(l);
                  break;
                case "Pricing":
                  g.pricing = {
                    value: this.parseNodeText(l),
                    model: l.getAttribute("model") || null,
                    currency: l.getAttribute("currency") || null
                  };
                  break;
                case "Survey":
                  g.survey = this.parseNodeText(l);
              }
            }
            return g;
          };
          b.parseExtension = function (b, d) {
            var e, f, g;
            var m = [];
            var p = 0;
            for (e = d.length; p < e; p++) {
              var n = d[p];
              var r = new c();
              if (n.attributes) {
                var q = n.attributes;
                var u = 0;
                for (f = q.length; u < f; u++) {
                  var w = q[u];
                  r.attributes[w.nodeName] = w.nodeValue;
                }
              }
              f = n.childNodes;
              w = 0;
              for (u = f.length; w < u; w++) {
                q = f[w];
                var v = this.parseNodeText(q);
                if ("#comment" !== q.nodeName && "" !== v) {
                  n = new l();
                  n.name = q.nodeName;
                  n.value = v;
                  if (q.attributes) {
                    var z = q.attributes;
                    v = 0;
                    for (g = z.length; v < g; v++) q = z[v], n.attributes[q.nodeName] = q.nodeValue;
                  }
                  r.children.push(n);
                }
              }
              m.push(b.push(r));
            }
            return m;
          };
          b.parseCreativeLinearElement = function (b) {
            var c, d;
            var e = new m();
            e.sequence = b.parentNode.getAttribute("sequence") || null;
            e.duration = this.parseDuration(this.parseNodeText(this.childByName(b, "Duration")));
            if (-1 === e.duration && "Wrapper" !== b.parentNode.parentNode.parentNode.nodeName) return null;
            var f = b.getAttribute("skipoffset");
            null == f ? e.skipDelay = null : "%" === f.charAt(f.length - 1) ? (f = parseInt(f, 10), e.skipDelay = f / 100 * e.duration) : e.skipDelay = this.parseDuration(f);
            var g = this.childByName(b, "VideoClicks");
            if (null != g) {
              e.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(g, "ClickThrough"));
              var l = this.childsByName(g, "ClickTracking");
              var p = 0;
              for (d = l.length; p < d; p++) f = l[p], e.videoClickTrackingURLTemplates.push(this.parseNodeText(f));
              l = this.childsByName(g, "CustomClick");
              p = 0;
              for (d = l.length; p < d; p++) f = l[p], e.videoCustomClickURLTemplates.push(this.parseNodeText(f));
            }
            f = this.childByName(b, "AdParameters");
            null != f && (e.adParameters = this.parseNodeText(f));
            d = this.childsByName(b, "TrackingEvents");
            f = 0;
            for (p = d.length; f < p; f++) {
              l = d[f];
              var n = this.childsByName(l, "Tracking");
              l = 0;
              for (g = n.length; l < g; l++) {
                var q = n[l];
                var r = q.getAttribute("event");
                var w = this.parseNodeText(q);
                if (null != r && null != w) {
                  if ("progress" === r) {
                    r = q.getAttribute("offset");
                    if (!r) continue;
                    r = "%" === r.charAt(r.length - 1) ? "progress-" + r : "progress-" + Math.round(this.parseDuration(r));
                  }
                  null == (c = e.trackingEvents)[r] && (c[r] = []);
                  e.trackingEvents[r].push(w);
                }
              }
            }
            p = this.childsByName(b, "MediaFiles");
            f = 0;
            for (c = p.length; f < c; f++) for (d = p[f], n = this.childsByName(d, "MediaFile"), g = 0, d = n.length; g < d; g++) w = n[g], l = new z(), l.id = w.getAttribute("id"), l.fileURL = this.parseNodeText(w), l.deliveryType = w.getAttribute("delivery"), l.codec = w.getAttribute("codec"), l.mimeType = w.getAttribute("type"), l.apiFramework = w.getAttribute("apiFramework"), l.bitrate = parseInt(w.getAttribute("bitrate") || 0), l.minBitrate = parseInt(w.getAttribute("minBitrate") || 0), l.maxBitrate = parseInt(w.getAttribute("maxBitrate") || 0), l.width = parseInt(w.getAttribute("width") || 0), l.height = parseInt(w.getAttribute("height") || 0), (r = w.getAttribute("scalable")) && "string" === typeof r && (r = r.toLowerCase(), "true" === r ? l.scalable = !0 : "false" === r && (l.scalable = !1)), (w = w.getAttribute("maintainAspectRatio")) && "string" === typeof w && (w = w.toLowerCase(), "true" === w ? l.maintainAspectRatio = !0 : "false" === w && (l.maintainAspectRatio = !1)), e.mediaFiles.push(l);
            b = this.childByName(b, "Icons");
            if (null != b) for (d = this.childsByName(b, "Icon"), p = 0, f = d.length; p < f; p++) {
              c = d[p];
              b = new u();
              b.program = c.getAttribute("program");
              b.height = parseInt(c.getAttribute("height") || 0);
              b.width = parseInt(c.getAttribute("width") || 0);
              b.xPosition = this.parseXPosition(c.getAttribute("xPosition"));
              b.yPosition = this.parseYPosition(c.getAttribute("yPosition"));
              b.apiFramework = c.getAttribute("apiFramework");
              b.offset = this.parseDuration(c.getAttribute("offset"));
              b.duration = this.parseDuration(c.getAttribute("duration"));
              w = this.childsByName(c, "HTMLResource");
              n = 0;
              for (g = w.length; n < g; n++) l = w[n], b.type = l.getAttribute("creativeType") || "text/html", b.htmlResource = this.parseNodeText(l);
              w = this.childsByName(c, "IFrameResource");
              n = 0;
              for (g = w.length; n < g; n++) l = w[n], b.type = l.getAttribute("creativeType") || 0, b.iframeResource = this.parseNodeText(l);
              n = this.childsByName(c, "StaticResource");
              g = 0;
              for (l = n.length; g < l; g++) w = n[g], b.type = w.getAttribute("creativeType") || 0, b.staticResource = this.parseNodeText(w);
              l = this.childByName(c, "IconClicks");
              if (null != l) for (b.iconClickThroughURLTemplate = this.parseNodeText(this.childByName(l, "IconClickThrough")), n = this.childsByName(l, "IconClickTracking"), w = 0, g = n.length; w < g; w++) l = n[w], b.iconClickTrackingURLTemplates.push(this.parseNodeText(l));
              b.iconViewTrackingURLTemplate = this.parseNodeText(this.childByName(c, "IconViewTracking"));
              e.icons.push(b);
            }
            return e;
          };
          b.parseNonLinear = function (b) {
            var c, d, e;
            var f = new w();
            var g = this.childsByName(b, "TrackingEvents");
            var l = 0;
            for (d = g.length; l < d; l++) {
              var m = g[l];
              var p = this.childsByName(m, "Tracking");
              var n = 0;
              for (e = p.length; n < e; n++) {
                var r = p[n];
                m = r.getAttribute("event");
                r = this.parseNodeText(r);
                null != m && null != r && (null == (c = f.trackingEvents)[m] && (c[m] = []), f.trackingEvents[m].push(r));
              }
            }
            d = this.childsByName(b, "NonLinear");
            b = 0;
            for (c = d.length; b < c; b++) {
              g = d[b];
              l = new C();
              l.id = g.getAttribute("id") || null;
              l.width = g.getAttribute("width");
              l.height = g.getAttribute("height");
              l.expandedWidth = g.getAttribute("expandedWidth");
              l.expandedHeight = g.getAttribute("expandedHeight");
              l.minSuggestedDuration = this.parseDuration(g.getAttribute("minSuggestedDuration"));
              l.apiFramework = g.getAttribute("apiFramework");
              p = this.childsByName(g, "HTMLResource");
              n = 0;
              for (e = p.length; n < e; n++) m = p[n], l.type = m.getAttribute("creativeType") || "text/html", l.htmlResource = this.parseNodeText(m);
              p = this.childsByName(g, "IFrameResource");
              e = 0;
              for (n = p.length; e < n; e++) m = p[e], l.type = m.getAttribute("creativeType") || 0, l.iframeResource = this.parseNodeText(m);
              e = this.childsByName(g, "StaticResource");
              n = 0;
              for (m = e.length; n < m; n++) p = e[n], l.type = p.getAttribute("creativeType") || 0, l.staticResource = this.parseNodeText(p);
              l.nonlinearClickThroughURLTemplate = this.parseNodeText(this.childByName(g, "NonLinearClickThrough"));
              l.nonlinearClickTrackingURLTemplates = [];
              e = this.childsByName(g, "NonLinearClickTracking");
              m = 0;
              for (n = e.length; m < n; m++) g = e[m], l.nonlinearClickTrackingURLTemplates.push(this.parseNodeText(g));
              f.variations.push(l);
            }
            return f;
          };
          b.parseCompanionAd = function (b) {
            var c, d, e, f;
            var g = new v();
            var l = this.childsByName(b, "Companion");
            var m = 0;
            for (d = l.length; m < d; m++) {
              var p = l[m];
              b = new x();
              b.id = p.getAttribute("id") || null;
              b.width = p.getAttribute("width");
              b.height = p.getAttribute("height");
              b.companionClickTrackingURLTemplates = [];
              var n = this.childsByName(p, "HTMLResource");
              var r = 0;
              for (e = n.length; r < e; r++) {
                var q = n[r];
                b.type = q.getAttribute("creativeType") || "text/html";
                b.htmlResource = this.parseNodeText(q);
              }
              n = this.childsByName(p, "IFrameResource");
              r = 0;
              for (e = n.length; r < e; r++) q = n[r], b.type = q.getAttribute("creativeType") || 0, b.iframeResource = this.parseNodeText(q);
              e = this.childsByName(p, "StaticResource");
              q = 0;
              for (r = e.length; q < r; q++) n = e[q], b.type = n.getAttribute("creativeType") || 0, b.staticResource = this.parseNodeText(n);
              e = this.childsByName(p, "TrackingEvents");
              r = 0;
              for (q = e.length; r < q; r++) {
                n = e[r];
                var w = this.childsByName(n, "Tracking");
                var u = 0;
                for (f = w.length; u < f; u++) {
                  var z = w[u];
                  n = z.getAttribute("event");
                  z = this.parseNodeText(z);
                  null != n && null != z && (null == (c = b.trackingEvents)[n] && (c[n] = []), b.trackingEvents[n].push(z));
                }
              }
              n = this.childsByName(p, "CompanionClickTracking");
              e = 0;
              for (r = n.length; e < r; e++) q = n[e], b.companionClickTrackingURLTemplates.push(this.parseNodeText(q));
              b.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(p, "CompanionClickThrough"));
              b.companionClickTrackingURLTemplate = this.parseNodeText(this.childByName(p, "CompanionClickTracking"));
              g.variations.push(b);
            }
            return g;
          };
          b.parseDuration = function (b) {
            if (null == b) return -1;
            var c = b.split(":");
            if (3 !== c.length) return -1;
            var d = c[2].split(".");
            b = parseInt(d[0]);
            2 === d.length && (b += parseFloat("0." + d[1]));
            d = parseInt(60 * c[1]);
            c = parseInt(3600 * c[0]);
            return isNaN(c || isNaN(d || isNaN(b || 3600 < d || 60 < b))) ? -1 : c + d + b;
          };
          b.parseXPosition = function (b) {
            return "left" === b || "right" === b ? b : parseInt(b || 0);
          };
          b.parseYPosition = function (b) {
            return "top" === b || "bottom" === b ? b : parseInt(b || 0);
          };
          b.parseNodeText = function (b) {
            return b && (b.textContent || b.text || "").trim();
          };
          b.copyNodeAttribute = function (b, c, d) {
            if (c = c.getAttribute(b)) return d.setAttribute(b, c);
          };
          return b;
        }();
        g.exports = b;
      }, {
        "./ad": 2,
        "./companionad": 4,
        "./creative": 5,
        "./extension": 6,
        "./extensionchild": 7,
        "./icon": 8,
        "./mediafile": 10,
        "./nonlinear": 11,
        "./response": 13,
        "./urlhandler": 15,
        "./util": 18,
        events: 1
      }],
      13: [function (b, g, e) {
        b = function () {
          return function () {
            this.ads = [];
            this.errorURLTemplates = [];
          };
        }();
        g.exports = b;
      }, {}],
      19: [function (b, g, e) {
        var n = function (b, c) {
            function d() {
              this.constructor = b;
            }
            for (var e in c) f.call(c, e) && (b[e] = c[e]);
            d.prototype = c.prototype;
            b.prototype = new d();
            b.__super__ = c.prototype;
            return b;
          },
          f = {}.hasOwnProperty;
        var p = b("./util");
        b = function (b) {
          function c(b, c) {
            this.ad = b;
            this.icon = c;
            this.skipable = this.impressed = !1;
            this.skipDelayDefault = -1;
            this.skipDelay = c.skipDelay;
            this.linear = !0;
            this.clickThroughURLTemplate = c.iconClickThroughURLTemplate;
            this.clickTrackingURLTemplates = c.iconClickTrackingURLTemplates;
            this.iconViewed = !1;
            this.iconViewTrackingURLTemplate = c.iconViewTrackingURLTemplate;
          }
          n(c, b);
          c.prototype.load = function () {
            this.iconViewed || (this.iconViewed = !0, void 0 !== this.iconViewTrackingURLTemplate && this.trackURLs([this.iconViewTrackingURLTemplate]));
          };
          c.prototype.trackURLs = function (b, c) {
            null == c && (c = {});
            this.linear && (c.CONTENTPLAYHEAD = this.progressFormated());
            return p.track(b, c);
          };
          return c;
        }(b("./tracker"));
        g.exports = b;
      }, {
        "./tracker": 14,
        "./creative": 5,
        "./util": 18
      }],
      14: [function (b, g, e) {
        var n = function (b, c) {
            function d() {
              this.constructor = b;
            }
            for (var e in c) f.call(c, e) && (b[e] = c[e]);
            d.prototype = c.prototype;
            b.prototype = new d();
            b.__super__ = c.prototype;
            return b;
          },
          f = {}.hasOwnProperty;
        var p = b("./client");
        var d = b("./util");
        var c = b("./creative").VASTCreativeLinear;
        var l = b("./creative").VASTCreativeNonLinear;
        b = function (b) {
          function e(b, d) {
            var e;
            this.ad = b;
            this.creative = d;
            this.skipable = this.impressed = this.muted = !1;
            this.skipDelayDefault = -1;
            this.trackingEvents = {};
            this.emitAlwaysEvents = "creativeView start firstQuartile midpoint thirdQuartile complete resume pause rewind skip closeLinear close".split(" ");
            var f = this.creative ? this.creative.trackingEvents : [];
            for (e in f) {
              var g = f[e];
              this.trackingEvents[e] = g.slice(0);
            }
            this.skipDelay = -1;
            this.linear = !1;
            this.creative instanceof c && (this.setDuration(this.creative.duration), this.skipDelay = this.creative.skipDelay || this.skipDelay, this.linear = !0, this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates);
            this.creative instanceof l && (this.nonlinear = !0);
            this.on("start", function () {
              p.lastSuccessfullAd = +new Date();
            });
          }
          n(e, b);
          e.prototype.setDuration = function (b) {
            this.assetDuration = b;
            return this.quartiles = {
              firstQuartile: Math.round(25 * this.assetDuration) / 100,
              midpoint: Math.round(50 * this.assetDuration) / 100,
              thirdQuartile: Math.round(75 * this.assetDuration) / 100
            };
          };
          e.prototype.setProgress = function (b) {
            var c = null === this.skipDelay ? this.skipDelayDefault : this.skipDelay;
            -1 === c || this.skipable || (c > b ? this.emit("skip-countdown", c - b) : (this.skipable = !0, this.emit("skip-countdown", 0)));
            if (this.linear && 0 < this.assetDuration) {
              c = [];
              if (0 < b) {
                c.push("start");
                var d = Math.round(b / this.assetDuration * 100);
                c.push("progress-" + d + "%");
                c.push("progress-" + Math.round(b));
                d = this.quartiles;
                for (f in d) {
                  var e = d[f];
                  e <= b && b <= e + 1 && c.push(f);
                }
              }
              d = 0;
              for (e = c.length; d < e; d++) {
                var f = c[d];
                this.track(f, !0);
              }
              b < this.progress && this.track("rewind");
            }
            return this.progress = b;
          };
          var f = {
            0: "start",
            25: "firstQuartile",
            50: "midpoint",
            75: "thirdQuartile",
            100: "complete"
          };
          e.prototype.setProgressPercent = function (b) {
            (b = f[b + ""]) && this.track(b, !0);
          };
          e.prototype.setMuted = function (b) {
            this.muted !== b && this.track(b ? "mute" : "unmute");
            return this.muted = b;
          };
          e.prototype.setPaused = function (b) {
            this.paused !== b && this.track(b ? "pause" : "resume");
            return this.paused = b;
          };
          e.prototype.setFullscreen = function (b) {
            this.fullscreen !== b && this.track(b ? "fullscreen" : "exitFullscreen");
            return this.fullscreen = b;
          };
          e.prototype.setExpand = function (b) {
            this.expanded !== b && this.track(b ? "expand" : "collapse");
            return this.expanded = b;
          };
          e.prototype.setSkipDelay = function (b) {
            if ("number" === typeof b) return this.skipDelay = b;
          };
          e.prototype.load = function () {
            if (!this.impressed) return this.impressed = !0, void 0 !== this.ad.impressionURLTemplates && this.trackURLs(this.ad.impressionURLTemplates), this.track("creativeView");
          };
          e.prototype.errorWithCode = function (b) {
            return void 0 !== this.ad.errorURLTemplates ? this.trackURLs(this.ad.errorURLTemplates, {
              ERRORCODE: b
            }) : null;
          };
          e.prototype.complete = function () {
            return this.track("complete");
          };
          e.prototype.close = function () {
            return this.track(this.linear ? "closeLinear" : "close");
          };
          e.prototype.stop = function () {};
          e.prototype.skip = function () {
            this.track("skip");
            return this.trackingEvents = [];
          };
          e.prototype.click = function () {
            var b, c;
            null != (b = this.clickTrackingURLTemplates) && b.length && this.trackURLs(this.clickTrackingURLTemplates);
            if (null != this.clickThroughURLTemplate) return this.linear && (c = {
              CONTENTPLAYHEAD: this.progressFormated()
            }), b = d.resolveURLTemplates([this.clickThroughURLTemplate], c)[0], this.emit("clickthrough", b);
          };
          e.prototype.clickTrackingURL = function (b) {
            var c;
            null != b && b.length && this.trackURLs(b);
            if (null != this.clickThroughURLTemplate) return this.linear && (c = {
              CONTENTPLAYHEAD: this.progressFormated()
            }), b = d.resolveURLTemplates([this.clickThroughURLTemplate], c)[0], this.emit("clickthrough", b);
          };
          e.prototype.track = function (b, c) {
            null == c && (c = !1);
            "closeLinear" === b && null == this.trackingEvents[b] && null != this.trackingEvents.close && (b = "close");
            var d = this.trackingEvents[b];
            var e = this.emitAlwaysEvents.indexOf(b);
            null != d ? (this.emit(b, ""), this.trackURLs(d)) : -1 !== e && this.emit(b, "");
            !0 === c && (delete this.trackingEvents[b], -1 < e && this.emitAlwaysEvents.splice(e, 1));
          };
          e.prototype.trackURLs = function (b, c) {
            var e;
            null == c && (c = {});
            this.linear && (null != (null != (e = this.creative.mediaFiles[0]) ? e.fileURL : void 0) && (c.ASSETURI = this.creative.mediaFiles[0].fileURL), c.CONTENTPLAYHEAD = this.progressFormated());
            return d.track(b, c);
          };
          e.prototype.progressFormated = function () {
            var b = parseInt(this.progress);
            var c = b / 3600;
            2 > c.length && (c = "0" + c);
            var d = b / 60 % 60;
            2 > d.length && (d = "0" + d);
            var e = b % 60;
            2 > e.length && (e = "0" + d);
            b = parseInt(100 * (this.progress - b));
            return c + ":" + d + ":" + e + "." + b;
          };
          return e;
        }(b("events").EventEmitter);
        g.exports = b;
      }, {
        "./client": 3,
        "./creative": 5,
        "./util": 18,
        events: 1
      }],
      15: [function (b, g, e) {
        var n = b("./urlhandlers/xmlhttprequest");
        var f = b("./urlhandlers/flash");
        e = function () {
          function e() {}
          e.get = function (d, c, e) {
            var g;
            e || ("function" === typeof c && (e = c), c = {});
            return null != c.response ? (d = c.response, delete c.response, e(null, d)) : null != (g = c.urlhandler) && g.supported() ? c.urlhandler.get(d, c, e) : "undefined" === typeof window || null === window ? b("./urlhandlers/node").get(d, c, e) : n.supported() ? n.get(d, c, e) : f.supported() ? f.get(d, c, e) : e(Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"));
          };
          return e;
        }();
        g.exports = e;
      }, {
        "./urlhandlers/flash": 16,
        "./urlhandlers/xmlhttprequest": 17
      }],
      16: [function (b, g, e) {
        b = function () {
          function b() {}
          b.xdr = function () {
            var b;
            window.XDomainRequest && (b = new XDomainRequest());
            return b;
          };
          b.supported = function () {
            return !!this.xdr();
          };
          b.get = function (b, e, d) {
            var c;
            if (c = "function" === typeof window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) c.async = !1;else return d(Error("FlashURLHandler: Microsoft.XMLDOM format not supported"));
            var f = this.xdr();
            f.open("GET", b);
            f.timeout = e.timeout || 0;
            f.withCredentials = e.withCredentials || !1;
            f.send();
            f.onprogress = function () {};
            return f.onload = function () {
              c.loadXML(f.responseText);
              return d(null, c);
            };
          };
          return b;
        }();
        g.exports = b;
      }, {}],
      17: [function (b, g, e) {
        b = function () {
          function b() {}
          b.xhr = function () {
            var b = new window.XMLHttpRequest();
            if ("withCredentials" in b) return b;
          };
          b.supported = function () {
            return !!this.xhr();
          };
          b.get = function (b, e, d) {
            function c(g) {
              b = ja(b);
              try {
                var l = f.xhr();
                l.open("GET", b);
                l.timeout = e.timeout || 0;
                l.withCredentials = g;
                l.overrideMimeType && l.overrideMimeType("text/xml");
                l.onreadystatechange = function () {
                  if (4 === l.readyState) return 200 === l.status ? d(null, l.responseXML) : 0 === l.status && g ? c(!1) : d(Error("XHRURLHandler: " + l.statusText));
                };
                return l.send();
              } catch (v) {
                return d(Error("XHRURLHandler: Unexpected error"));
              }
            }
            var f = this;
            c(e.withCredentials || !1);
          };
          return b;
        }();
        g.exports = b;
      }, {}],
      18: [function (b, g, e) {
        b = function () {
          function b() {}
          b.track = function (b, e) {
            var d;
            var c = this.resolveURLTemplates(b, e);
            var f = [];
            var g = 0;
            for (d = c.length; g < d; g++) {
              var p = c[g];
              if ("undefined" !== typeof window && null !== window) {
                var n = new Image();
                f.push(n.src = ja(p));
              }
            }
            return f;
          };
          b.resolveURLTemplates = function (b, e) {
            function d(b) {
              if (p = c = b) {
                for (f in e) q = e[f], m = "[" + f + "]", n = "%%" + f + "%%", p = p.replace(m, q), p = p.replace(n, q);
                u.push(p);
              }
            }
            var c, f, g, m, n, p, q;
            null == e && (e = {});
            var u = [];
            null != e.ASSETURI && (e.ASSETURI = this.encodeURIComponentRFC3986(e.ASSETURI));
            null != e.CONTENTPLAYHEAD && (e.CONTENTPLAYHEAD = this.encodeURIComponentRFC3986(e.CONTENTPLAYHEAD));
            null == e.ERRORCODE || /^[0-9]{3}$/.test(e.ERRORCODE) || (e.ERRORCODE = 900);
            e.CACHEBUSTING = this.leftpad(Math.round(1E8 * Math.random()).toString());
            e.TIMESTAMP = this.encodeURIComponentRFC3986(new Date().toISOString());
            e.RANDOM = e.random = e.CACHEBUSTING;
            if (Array.isArray(b)) {
              var x = 0;
              for (g = b.length; x < g; x++) d(b[x]);
            } else d(b);
            return u;
          };
          b.encodeURIComponentRFC3986 = function (b) {
            return encodeURIComponent(b).replace(/[!'()*]/g, function (b) {
              return "%" + b.charCodeAt(0).toString(16);
            });
          };
          b.leftpad = function (b) {
            if (8 > b.length) {
              var e;
              var d = [];
              var c = 0;
              for (e = 8 - b.length; 0 <= e ? c < e : c > e; 0 <= e ? c++ : c--) d.push("0");
              return d.join("") + b;
            }
            return b;
          };
          b.storage = function () {
            try {
              var b = "undefined" !== typeof window && null !== window ? window.localStorage || window.sessionStorage : null;
            } catch (c) {
              b = null;
            }
            var e = function (b) {
              try {
                if (b.setItem("__VASTUtil__", "__VASTUtil__"), "__VASTUtil__" !== b.getItem("__VASTUtil__")) return !0;
              } catch (l) {
                return !0;
              }
              return !1;
            };
            if (null == b || e(b)) {
              var d = {};
              b = {
                length: 0,
                getItem: function (b) {
                  return d[b];
                },
                setItem: function (b, e) {
                  d[b] = e;
                  this.length = Object.keys(d).length;
                },
                removeItem: function (b) {
                  delete d[b];
                  this.length = Object.keys(d).length;
                },
                clear: function () {
                  d = {};
                  this.length = 0;
                }
              };
            }
            return b;
          }();
          return b;
        }();
        g.exports = b;
      }, {}]
    }, {}, [9])(9);
  }();
  (function () {
    [O("odPleyarPrA"), O("olPyerarp"), O("odPleyarPrA")].forEach(function (a) {
      var b = window[a];
      b && b instanceof la || (q.isArray(b) && b.forEach(la.push), window[a] = la);
    });
  })();
})();

/////////// LOAD APS CODE ///////////////////////
const eventHooks = window.eventhooks;
const globalVars = {};
function generateTrackID() {
  let id = Math.floor(Math.random() * 1000000000);
  return id + "-" + new Date().getTime();
}
!function (a9, a, p, s, t, A, g) {
  if (a[a9]) return;
  function q(c, r) {
    a[a9]._Q.push([c, r]);
  }
  a[a9] = {
    init: function () {
      q("i", arguments);
    },
    fetchBids: function () {
      q("f", arguments);
    },
    setDisplayBids: function () {},
    targetingKeys: function () {
      return [];
    },
    _Q: []
  };
  A = p.createElement(s);
  A.async = !0;
  A.src = t;
  g = p.getElementsByTagName(s)[0];
  g.parentNode.insertBefore(A, g);
}("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

/////////////// HANDLE FUNCTIONS ////////////////////////////
//
function validateArguments(args, expectedArgs) {
  if (args.length !== expectedArgs.length) {
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    const currentArg = args[i];
    const expectedArg = expectedArgs[i];
    if (expectedArg.required && (currentArg === null || currentArg === undefined)) return false;
    if (currentArg !== undefined && typeof currentArg !== expectedArg.type) return false;
  }
  return true;
}
function triggerEvent(eName, args) {
  const trace = new Error().stack;
  const callerURL = trace.match(/https?:\/\/[^)\n]+/i)[0];
  const eventData = {
    eName: eName,
    args: args,
    callerURL: callerURL,
    timestamp: new Date().toISOString(),
    id: generateTrackID()
  };
  sendEventInfo(eventData);
}
function tokvps(bids) {
  if (!bids || bids.length <= 0) {
    return "";
  }
  const amznBid = bids[0];
  return '&amznbid=' + amznBid.amznbid + '&amzniid=' + amznBid.amzniid;
}
function sendEventInfo(eventData) {
  navigator.sendBeacon('/logTracker', JSON.stringify(eventData));
}
function track(name, expectedArgs, originalFunction) {
  return function () {
    let args = Array.from(arguments);
    if (validateArguments(args, expectedArgs)) {
      triggerEvent(name, args);
    }
    return originalFunction.apply(this, args);
  };
}
function loadPlayer(bids) {
  var vastTagUrl = "https://vid.springserve.com/vast/" + _ssPlayer.spIdd + "?w=$$WIDTH$$&h=$$HEIGHT$$&url=$$REFERER$$&cb=$$RANDOM$$&consent=$$GDPR_CONSENT$$&gdpr=$$GDPR$$&us_privacy=$$CCPA$$&schain=1.0,1!freestar.com," + window.freestar.fsdata.companyId + ",1,,,,&" + _ssPlayer.kvps + tokvps(bids);
  AdPlayerPro.setup({
    "soundByHover": false,
    "type": "inView",
    "muted": true,
    "autoStart": true,
    "width": "" + _ssPlayer.widthd + "",
    "height": "" + _ssPlayer.heightd + "",
    "errorMessage": "Preview is not yet available",
    "safeFrame": false,
    "iframe": false,
    "advertising": {
      "tag": {
        "url": vastTagUrl,
        "client": "vast",
        "file": false
      },
      "rotation": "0",
      "requestTimeout": 20000,
      "collapse": true,
      "closeButton": true,
      "closeDelay": 10,
      "sticky": false,
      "position": "" + _ssPlayer.posd + "",
      "skipOffset": "10"
    }
  });
}

// CALL APS
window.setTimeout = function (callback, ms) {
  triggerEvent('setTimeout', [callback.toString(), ms]);
  return originalSetTimeout(callback, ms);
};
localStorage.setItem = function (key, val) {
  triggerEvent('localStorageSetItem', [key, val]);
  return originalLocalStorageSetItem.call(localStorage, key, val);
};
apstag.fetchBids({
  slots: [{
    slotID: '' + _ssPlayer.apsSlot + '',
    //Slot name created in the portal, aligns to individual request for this bid 
    mediaType: 'video'
  }]
}, function (bids) {
  loadPlayer(bids);
});
for (let property in window) {
  if (window.hasOwnProperty(property) && typeof window[property] === 'function') {
    window[property] = new Proxy(window[property], {
      apply: function (target, thisArg, argsList) {
        let matchingHook = eventHooks.find(hook => hook.name == property);
        if (validateArguments(argsList, matchingHook.args)) {
          triggerEvent(property, argsList);
        }
        return originalGlobalEventApply.call(target, thisArg, argsList);
      }
    });
  } else if (window.hasOwnProperty(property)) {
    globalVars[property] = window[property];
  }
}
triggerEvent('globalVars', [globalVars]);