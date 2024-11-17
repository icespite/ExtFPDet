(function (g) {
  var window = this;
  'use strict';
  var a8 = function (a) {
      g.ko(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.eb()).toString(36));
      return a;
    },
    b8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.kga(a.B, b, c);
    },
    gub = function (a) {
      if (a instanceof g.hs) return a;
      if ("function" == typeof a.yk) return a.yk(!1);
      if (g.Wa(a)) {
        var b = 0,
          c = new g.hs();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.N2;
            if (b in a) return g.is(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    hub = function (a, b, c) {
      if (g.Wa(a)) g.Yb(a, b, c);else for (a = gub(a);;) {
        var d = a.next();
        if (d.done) break;
        b.call(c, d.value, void 0, a);
      }
    },
    iub = function (a, b) {
      var c = [];
      hub(b, function (d) {
        try {
          var e = g.Hu.prototype.B.call(this, d, !0);
        } catch (f) {
          if ("Storage: Invalid value was encountered" == f) return;
          throw f;
        }
        void 0 === e ? c.push(d) : g.Xka(e) && c.push(d);
      }, a);
      return c;
    },
    jub = function (a, b) {
      iub(a, b).forEach(function (c) {
        g.Hu.prototype.remove.call(this, c);
      }, a);
    },
    kub = function (a) {
      if (a.qa) {
        if (a.qa.locationOverrideToken) return {
          locationOverrideToken: a.qa.locationOverrideToken
        };
        if (null != a.qa.latitudeE7 && null != a.qa.longitudeE7) return {
          latitudeE7: a.qa.latitudeE7,
          longitudeE7: a.qa.longitudeE7
        };
      }
      return null;
    },
    lub = function (a, b) {
      g.Db(a, b) || a.push(b);
    },
    mub = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    nub = function (a, b) {
      return g.hd(a, b);
    },
    oub = function (a) {
      try {
        return g.Qa.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")");
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    c8 = function (a) {
      if (g.Qa.JSON) try {
        return g.Qa.JSON.parse(a);
      } catch (b) {}
      return oub(a);
    },
    pub = function (a, b, c, d) {
      var e = new g.bo(null);
      a && g.co(e, a);
      b && g.eo(e, b);
      c && g.fo(e, c);
      d && (e.C = d);
      return e;
    },
    qub = function () {
      this.j = d8();
      this.j.Oo("/client_streamz/youtube/living_room/mdx/channel/opened", {
        hh: 3,
        gh: "channel_type"
      });
    },
    rub = function (a, b) {
      a.j.gq("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    sub = function () {
      this.j = d8();
      this.j.Oo("/client_streamz/youtube/living_room/mdx/channel/closed", {
        hh: 3,
        gh: "channel_type"
      });
    },
    tub = function (a, b) {
      a.j.gq("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    uub = function () {
      this.j = d8();
      this.j.Oo("/client_streamz/youtube/living_room/mdx/channel/message_received", {
        hh: 3,
        gh: "channel_type"
      });
    },
    vub = function (a, b) {
      a.j.gq("/client_streamz/youtube/living_room/mdx/channel/message_received", b);
    },
    wub = function () {
      this.j = d8();
      this.j.Oo("/client_streamz/youtube/living_room/mdx/channel/error", {
        hh: 3,
        gh: "channel_type"
      });
    },
    xub = function (a, b) {
      a.j.gq("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    yub = function () {
      this.j = d8();
      this.j.Oo("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps");
    },
    zub = function () {
      this.j = d8();
      this.j.Oo("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps");
    },
    e8 = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.lu();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", Aub(this, a.capabilities || ""), Bub(this, a.compatibleSenderThemes || ""), Cub(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN");
    },
    Aub = function (a, b) {
      a.capabilities.clear();
      g.ms(b.split(","), g.db(nub, Dub)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    Bub = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.ms(b.split(","), g.db(nub, Eub)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    Cub = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    f8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    g8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    Fub = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType
      };
    },
    Gub = function (a) {
      return new f8(a);
    },
    Hub = function (a) {
      return Array.isArray(a) ? g.Tp(a, Gub) : [];
    },
    h8 = function (a) {
      return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null";
    },
    Iub = function (a) {
      return Array.isArray(a) ? "[" + g.Tp(a, h8).join(",") + "]" : "null";
    },
    Jub = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
        var b = 16 * Math.random() | 0;
        return ("x" == a ? b : b & 3 | 8).toString(16);
      });
    },
    Kub = function (a) {
      return g.Tp(a, function (b) {
        return {
          key: b.id,
          name: b.name
        };
      });
    },
    Lub = function (a, b) {
      return g.Bb(a, function (c) {
        return c || b ? !c != !b ? !1 : c.id == b.id : !0;
      });
    },
    i8 = function (a, b) {
      return g.Bb(a, function (c) {
        return g8(c, b);
      });
    },
    Mub = function () {
      var a = (0, g.wD)();
      a && jub(a, a.j.yk(!0));
    },
    j8 = function () {
      var a = g.yD("yt-remote-connected-devices") || [];
      g.Ub(a);
      return a;
    },
    Nub = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Tp(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    Oub = function (a) {
      g.xD("yt-remote-connected-devices", a, 86400);
    },
    k8 = function () {
      if (Pub) return Pub;
      var a = g.yD("yt-remote-device-id");
      a || (a = Jub(), g.xD("yt-remote-device-id", a, 31536E3));
      for (var b = j8(), c = 1, d = a; g.Db(b, d);) c++, d = a + "#" + c;
      return Pub = d;
    },
    Qub = function () {
      var a = j8(),
        b = k8();
      g.AD() && g.Xb(a, b);
      a = Nub(a);
      if (0 == a.length) try {
        g.Hma("remote_sid");
      } catch (c) {} else try {
        g.PC("remote_sid", a.join(","), -1);
      } catch (c) {}
    },
    Rub = function () {
      return g.yD("yt-remote-session-browser-channel");
    },
    Sub = function () {
      return g.yD("yt-remote-local-screens") || [];
    },
    Tub = function () {
      g.xD("yt-remote-lounge-token-expiration", !0, 86400);
    },
    Uub = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Tp(Sub(), function (d) {
          return d.loungeToken;
        }),
        c = g.Tp(a, function (d) {
          return d.loungeToken;
        });
      g.Up(c, function (d) {
        return !g.Db(b, d);
      }) && Tub();
      g.xD("yt-remote-local-screens", a, 31536E3);
    },
    l8 = function (a) {
      a || (g.zD("yt-remote-session-screen-id"), g.zD("yt-remote-session-video-id"));
      Qub();
      a = j8();
      g.Fb(a, k8());
      Oub(a);
    },
    Vub = function () {
      if (!m8) {
        var a = g.Qu();
        a && (m8 = new g.Eu(a));
      }
    },
    Wub = function () {
      Vub();
      return m8 ? !!m8.get("yt-remote-use-staging-server") : !1;
    },
    n8 = function (a, b) {
      g.lF[a] = !0;
      var c = g.jF();
      c && c.publish.apply(c, arguments);
      g.lF[a] = !1;
    },
    Xub = function () {},
    d8 = function () {
      if (!o8) {
        o8 = new g.ig(new Xub());
        var a = g.kC("client_streamz_web_flush_count", -1);
        -1 !== a && (o8.D = a);
      }
      return o8;
    },
    Yub = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    Zub = function (a) {
      return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a));
    },
    $ub = function () {
      return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null;
    },
    p8 = function (a) {
      a.length ? avb(a.shift(), function () {
        p8(a);
      }) : bvb();
    },
    cvb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    avb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.Dn(d, g.Dv(a));
      (document.head || document.documentElement).appendChild(d);
    },
    dvb = function () {
      var a = Yub(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    bvb = function () {
      var a = $ub();
      a && a(!1, "No cast extension found");
    },
    fvb = function () {
      if (evb) {
        var a = 2,
          b = $ub(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        avb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", bvb, c);
      }
    },
    gvb = function () {
      fvb();
      var a = dvb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    ivb = function () {
      fvb();
      var a = dvb();
      a.push.apply(a, g.qa(hvb.map(cvb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    q8 = function (a, b, c) {
      g.J.call(this);
      this.K = null != c ? (0, g.cb)(a, c) : a;
      this.Si = b;
      this.G = (0, g.cb)(this.Q0, this);
      this.j = !1;
      this.B = 0;
      this.C = this.pd = null;
      this.D = [];
    },
    r8 = function (a, b, c) {
      g.J.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Si = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.pd = null;
    },
    jvb = function (a) {
      a.pd = g.gg(function () {
        a.pd = null;
        a.j && !a.B && (a.j = !1, jvb(a));
      }, a.Si);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    s8 = function () {},
    kvb = function () {
      g.xb.call(this, "p");
    },
    lvb = function () {
      g.xb.call(this, "o");
    },
    nvb = function () {
      return mvb = mvb || new g.Gd();
    },
    ovb = function (a) {
      g.xb.call(this, "serverreachability", a);
    },
    t8 = function (a) {
      var b = nvb();
      b.dispatchEvent(new ovb(b, a));
    },
    pvb = function (a) {
      g.xb.call(this, "statevent", a);
    },
    u8 = function (a) {
      var b = nvb();
      b.dispatchEvent(new pvb(b, a));
    },
    qvb = function (a, b, c, d) {
      g.xb.call(this, "timingevent", a);
      this.size = b;
      this.HA = d;
    },
    v8 = function (a, b) {
      if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
      return g.Qa.setTimeout(function () {
        a();
      }, b);
    },
    rvb = function () {},
    w8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Ad = c;
      this.Kc = d || 1;
      this.kb = new g.po(this);
      this.Cb = 45E3;
      a = g.NS ? 125 : void 0;
      this.tb = new g.fg(a);
      this.Pa = null;
      this.C = !1;
      this.ma = this.gb = this.S = this.Va = this.Ca = this.Vb = this.ea = null;
      this.va = [];
      this.j = null;
      this.qa = 0;
      this.K = this.Fa = null;
      this.Mb = -1;
      this.Oa = !1;
      this.zb = 0;
      this.eb = null;
      this.Bc = this.Ya = this.uc = this.Ia = !1;
      this.B = new svb();
    },
    svb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    uvb = function (a, b, c) {
      a.Va = 1;
      a.S = a8(b.clone());
      a.ma = c;
      a.Ia = !0;
      tvb(a, null);
    },
    tvb = function (a, b) {
      a.Ca = Date.now();
      x8(a);
      a.gb = a.S.clone();
      b8(a.gb, "t", a.Kc);
      a.qa = 0;
      var c = a.G.Va;
      a.B = new svb();
      a.j = vvb(a.G, c ? b : null, !a.ma);
      0 < a.zb && (a.eb = new r8((0, g.cb)(a.jS, a, a.j), a.zb));
      a.kb.Ta(a.j, "readystatechange", a.T0);
      b = a.Pa ? g.pd(a.Pa) : {};
      a.ma ? (a.Fa || (a.Fa = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.gb, a.Fa, a.ma, b)) : (a.Fa = "GET", a.j.send(a.gb, a.Fa, null, b));
      t8(1);
    },
    wvb = function (a) {
      return a.j ? "GET" == a.Fa && 2 != a.Va && a.G.We : !1;
    },
    Avb = function (a, b, c) {
      for (var d = !0, e; !a.Oa && a.qa < c.length;) if (e = xvb(a, c), e == y8) {
        4 == b && (a.K = 4, u8(14), d = !1);
        break;
      } else if (e == yvb) {
        a.K = 4;
        u8(15);
        d = !1;
        break;
      } else zvb(a, e);
      wvb(a) && e != y8 && e != yvb && (a.B.j = "", a.qa = 0);
      4 != b || 0 != c.length || a.B.B || (a.K = 1, u8(16), d = !1);
      a.C = a.C && d;
      d ? 0 < c.length && !a.Bc && (a.Bc = !0, a.G.gP(a)) : (z8(a), A8(a));
    },
    xvb = function (a, b) {
      var c = a.qa,
        d = b.indexOf("\n", c);
      if (-1 == d) return y8;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return yvb;
      d += 1;
      if (d + c > b.length) return y8;
      b = b.slice(d, d + c);
      a.qa = d + c;
      return b;
    },
    x8 = function (a) {
      a.Vb = Date.now() + a.Cb;
      Bvb(a, a.Cb);
    },
    Bvb = function (a, b) {
      if (null != a.ea) throw Error("WatchDog timer not null");
      a.ea = v8((0, g.cb)(a.R0, a), b);
    },
    B8 = function (a) {
      a.ea && (g.Qa.clearTimeout(a.ea), a.ea = null);
    },
    A8 = function (a) {
      a.G.kh() || a.Oa || Cvb(a.G, a);
    },
    z8 = function (a) {
      B8(a);
      g.sb(a.eb);
      a.eb = null;
      a.tb.stop();
      a.kb.Pf();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    zvb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Ih && (c.j == a || Dvb(c.B, a))) if (!a.Ya && Dvb(c.B, a) && 3 == c.Ih) {
          try {
            var d = c.Gf.j.parse(b);
          } catch (z) {
            d = null;
          }
          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0]) a: {
              if (!c.ma) {
                if (c.j) if (c.j.Ca + 3E3 < a.Ca) C8(c), D8(c);else break a;
                Evb(c);
                u8(18);
              }
            } else c.Ud = e[1], 0 < c.Ud - c.eb && 37500 > e[2] && c.Ya && 0 == c.va && !c.qa && (c.qa = v8((0, g.cb)(c.U0, c), 6E3));
            if (1 >= Fvb(c.B) && c.qd) {
              try {
                c.qd();
              } catch (z) {}
              c.qd = void 0;
            }
          } else E8(c, 11);
        } else if ((a.Ya || c.j == a) && C8(c), !g.dc(b)) for (e = c.Gf.j.parse(b), b = 0; b < e.length; b++) {
          var f = e[b];
          c.eb = f[0];
          f = f[1];
          if (2 == c.Ih) {
            if ("c" == f[0]) {
              c.D = f[1];
              c.Bc = f[2];
              var h = f[3];
              null != h && (c.kS = h);
              var l = f[5];
              null != l && "number" === typeof l && 0 < l && (c.kb = 1.5 * l);
              d = c;
              var m = a.yN();
              if (m) {
                var n = g.zm(m, "X-Client-Wire-Protocol");
                if (n) {
                  var p = d.B;
                  !p.j && (g.gc(n, "spdy") || g.gc(n, "quic") || g.gc(n, "h2")) && (p.D = p.G, p.j = new Set(), p.B && (Gvb(p, p.B), p.B = null));
                }
                if (d.Ia) {
                  var q = g.zm(m, "X-HTTP-Session-Id");
                  q && (d.Me = q, g.ko(d.Pa, d.Ia, q));
                }
              }
              c.Ih = 3;
              c.G && c.G.qS();
              c.Wc && (c.Sd = Date.now() - a.Ca);
              d = c;
              var r = a;
              d.Md = Hvb(d, d.Va ? d.Bc : null, d.Kc);
              if (r.Ya) {
                Ivb(d.B, r);
                var t = r,
                  w = d.kb;
                w && t.setTimeout(w);
                t.ea && (B8(t), x8(t));
                d.j = r;
              } else Jvb(d);
              0 < c.C.length && F8(c);
            } else "stop" != f[0] && "close" != f[0] || E8(c, 7);
          } else 3 == c.Ih && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? E8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.pS(f), c.va = 0);
        }
        t8(4);
      } catch (z) {}
    },
    Kvb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Lvb = function (a) {
      this.G = a || 10;
      g.Qa.PerformanceNavigationTiming ? (a = g.Qa.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Qa.chrome && g.Qa.chrome.loadTimes && g.Qa.chrome.loadTimes() && g.Qa.chrome.loadTimes().wasFetchedViaSpdy);
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    Mvb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    Fvb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    Dvb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    Gvb = function (a, b) {
      a.j ? a.j.add(b) : a.B = b;
    },
    Ivb = function (a, b) {
      a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b);
    },
    Nvb = function (a) {
      if (null != a.B) return a.C.concat(a.B.va);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.u(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.va);
        return b;
      }
      return g.Kb(a.C);
    },
    Ovb = function (a, b) {
      var c = new rvb();
      if (g.Qa.Image) {
        var d = new Image();
        d.onload = g.db(G8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.db(G8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.db(G8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.db(G8, c, d, "TestLoadImage: timeout", !1, b);
        g.Qa.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1E4);
        d.src = a;
      } else b(!1);
    },
    G8 = function (a, b, c, d, e) {
      try {
        b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
      } catch (f) {}
    },
    Pvb = function () {
      this.j = new s8();
    },
    Qvb = function (a, b, c) {
      var d = c || "";
      try {
        g.ao(a, function (e, f) {
          var h = e;
          g.Xa(e) && (h = g.om(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
      }
    },
    H8 = function (a, b, c) {
      return c && c.R5 ? c.R5[a] || b : b;
    },
    Rvb = function (a) {
      this.C = [];
      this.Bc = this.Md = this.Pa = this.Kc = this.j = this.Me = this.Ia = this.Oa = this.S = this.Vb = this.ea = null;
      this.dg = this.gb = 0;
      this.Tf = H8("failFast", !1, a);
      this.Ya = this.qa = this.ma = this.K = this.G = null;
      this.Ad = !0;
      this.Ud = this.eb = -1;
      this.uc = this.va = this.Ca = 0;
      this.Sf = H8("baseRetryDelayMs", 5E3, a);
      this.eg = H8("retryDelaySeedMs", 1E4, a);
      this.Uf = H8("forwardChannelMaxRetries", 2, a);
      this.Td = H8("forwardChannelRequestTimeoutMs", 2E4, a);
      this.Le = a && a.Zfb || void 0;
      this.We = a && a.Wfb || !1;
      this.kb = void 0;
      this.Va = a && a.I$ || !1;
      this.D = "";
      this.B = new Lvb(a && a.tdb);
      this.Gf = new Pvb();
      this.Cb = a && a.Idb || !1;
      this.zb = a && a.ydb || !1;
      this.Cb && this.zb && (this.zb = !1);
      this.fg = a && a.ndb || !1;
      a && a.Kdb && (this.Ad = !1);
      this.Wc = !this.Cb && this.Ad && a && a.wdb || !1;
      this.Dd = void 0;
      a && a.jX && 0 < a.jX && (this.Dd = a.jX);
      this.qd = void 0;
      this.Sd = 0;
      this.tb = !1;
      this.Mb = this.Fa = null;
    },
    D8 = function (a) {
      a.j && (Svb(a), a.j.cancel(), a.j = null);
    },
    Tvb = function (a) {
      D8(a);
      a.ma && (g.Qa.clearTimeout(a.ma), a.ma = null);
      C8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Qa.clearTimeout(a.K), a.K = null);
    },
    F8 = function (a) {
      Mvb(a.B) || a.K || (a.K = !0, g.Qf(a.mS, a), a.Ca = 0);
    },
    Vvb = function (a, b) {
      if (Fvb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return a.C = b.va.concat(a.C), !0;
      if (1 == a.Ih || 2 == a.Ih || a.Ca >= (a.Tf ? 0 : a.Uf)) return !1;
      a.K = v8((0, g.cb)(a.mS, a, b), Uvb(a, a.Ca));
      a.Ca++;
      return !0;
    },
    Xvb = function (a, b) {
      var c;
      b ? c = b.Ad : c = a.gb++;
      var d = a.Pa.clone();
      g.ko(d, "SID", a.D);
      g.ko(d, "RID", c);
      g.ko(d, "AID", a.eb);
      I8(a, d);
      a.S && a.ea && g.oo(d, a.S, a.ea);
      c = new w8(a, a.D, c, a.Ca + 1);
      null === a.S && (c.Pa = a.ea);
      b && (a.C = b.va.concat(a.C));
      b = Wvb(a, c, 1E3);
      c.setTimeout(Math.round(.5 * a.Td) + Math.round(.5 * a.Td * Math.random()));
      Gvb(a.B, c);
      uvb(c, d, b);
    },
    I8 = function (a, b) {
      a.Oa && g.Tc(a.Oa, function (c, d) {
        g.ko(b, d, c);
      });
      a.G && g.ao({}, function (c, d) {
        g.ko(b, d, c);
      });
    },
    Wvb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.cb)(a.G.V0, a.G, a) : null;
      a: for (var e = a.C, f = -1;;) {
        var h = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;else try {
            Qvb(p, h, "req" + n + "_");
          } catch (q) {
            d && d(p);
          }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.va = a;
      return d;
    },
    Jvb = function (a) {
      a.j || a.ma || (a.uc = 1, g.Qf(a.lS, a), a.va = 0);
    },
    Evb = function (a) {
      if (a.j || a.ma || 3 <= a.va) return !1;
      a.uc++;
      a.ma = v8((0, g.cb)(a.lS, a), Uvb(a, a.va));
      a.va++;
      return !0;
    },
    Svb = function (a) {
      null != a.Fa && (g.Qa.clearTimeout(a.Fa), a.Fa = null);
    },
    Yvb = function (a) {
      a.j = new w8(a, a.D, "rpc", a.uc);
      null === a.S && (a.j.Pa = a.ea);
      a.j.zb = 0;
      var b = a.Md.clone();
      g.ko(b, "RID", "rpc");
      g.ko(b, "SID", a.D);
      g.ko(b, "AID", a.eb);
      g.ko(b, "CI", a.Ya ? "0" : "1");
      !a.Ya && a.Dd && g.ko(b, "TO", a.Dd);
      g.ko(b, "TYPE", "xmlhttp");
      I8(a, b);
      a.S && a.ea && g.oo(b, a.S, a.ea);
      a.kb && a.j.setTimeout(a.kb);
      var c = a.j;
      a = a.Bc;
      c.Va = 1;
      c.S = a8(b.clone());
      c.ma = null;
      c.Ia = !0;
      tvb(c, a);
    },
    C8 = function (a) {
      null != a.qa && (g.Qa.clearTimeout(a.qa), a.qa = null);
    },
    Cvb = function (a, b) {
      var c = null;
      if (a.j == b) {
        C8(a);
        Svb(a);
        a.j = null;
        var d = 2;
      } else if (Dvb(a.B, b)) c = b.va, Ivb(a.B, b), d = 1;else return;
      if (0 != a.Ih) if (b.C) {
        if (1 == d) {
          c = b.ma ? b.ma.length : 0;
          b = Date.now() - b.Ca;
          var e = a.Ca;
          d = nvb();
          d.dispatchEvent(new qvb(d, c, b, e));
          F8(a);
        } else Jvb(a);
      } else {
        var f = b.Mb;
        e = b.getLastError();
        if (3 == e || 0 == e && 0 < f || !(1 == d && Vvb(a, b) || 2 == d && Evb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
          case 1:
            E8(a, 5);
            break;
          case 4:
            E8(a, 10);
            break;
          case 3:
            E8(a, 6);
            break;
          default:
            E8(a, 2);
        }
      }
    },
    Uvb = function (a, b) {
      var c = a.Sf + Math.floor(Math.random() * a.eg);
      a.isActive() || (c *= 2);
      return c * b;
    },
    E8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.G && (c = null);
        var d = (0, g.cb)(a.O$, a);
        c || (c = new g.bo("//www.google.com/images/cleardot.gif"), g.Qa.location && "http" == g.Qa.location.protocol || g.co(c, "https"), a8(c));
        Ovb(c.toString(), d);
      } else u8(2);
      a.Ih = 0;
      a.G && a.G.oS(b);
      Zvb(a);
      Tvb(a);
    },
    Zvb = function (a) {
      a.Ih = 0;
      a.Mb = [];
      if (a.G) {
        var b = Nvb(a.B);
        if (0 != b.length || 0 != a.C.length) g.Lb(a.Mb, b), g.Lb(a.Mb, a.C), a.B.C.length = 0, g.Kb(a.C), a.C.length = 0;
        a.G.nS();
      }
    },
    $vb = function (a) {
      if (0 == a.Ih) return a.Mb;
      var b = [];
      g.Lb(b, Nvb(a.B));
      g.Lb(b, a.C);
      return b;
    },
    Hvb = function (a, b, c) {
      var d = g.lo(c);
      "" != d.j ? (b && g.eo(d, b + "." + d.j), g.fo(d, d.D)) : (d = g.Qa.location, d = pub(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
      b = a.Ia;
      c = a.Me;
      b && c && g.ko(d, b, c);
      g.ko(d, "VER", a.kS);
      I8(a, d);
      return d;
    },
    vvb = function (a, b, c) {
      if (b && !a.Va) throw Error("Can't create secondary domain capable XhrIo object.");
      b = c && a.We && !a.Le ? new g.sm(new g.Xn({
        GZ: !0
      })) : new g.sm(a.Le);
      b.K = a.Va;
      return b;
    },
    awb = function () {},
    bwb = function () {
      if (g.bf && !g.Nc(10)) throw Error("Environmental error: no available transport.");
    },
    K8 = function (a, b) {
      g.Gd.call(this);
      this.j = new Rvb(b);
      this.G = a;
      this.B = b && b.B6 || null;
      a = b && b.A6 || null;
      b && b.sdb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
        "X-Client-Protocol": "webchannel"
      });
      this.j.ea = a;
      a = b && b.Heb || null;
      b && b.qX && (a ? a["X-WebChannel-Content-Type"] = b.qX : a = {
        "X-WebChannel-Content-Type": b.qX
      });
      b && b.KU && (a ? a["X-WebChannel-Client-Profile"] = b.KU : a = {
        "X-WebChannel-Client-Profile": b.KU
      });
      this.j.Vb = a;
      (a = b && b.Geb) && !g.dc(a) && (this.j.S = a);
      this.K = b && b.I$ || !1;
      this.D = b && b.xfb || !1;
      (b = b && b.M5) && !g.dc(b) && (this.j.Ia = b, g.gd(this.B, b) && g.md(this.B, b));
      this.C = new J8(this);
    },
    cwb = function (a) {
      kvb.call(this);
      a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
      var b = a.__sm__;
      b ? this.data = (this.j = g.Yc(b)) ? g.nd(b, this.j) : b : this.data = a;
    },
    dwb = function (a) {
      lvb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    J8 = function (a) {
      this.j = a;
    },
    ewb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    fwb = function (a) {
      return $vb(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && (b = b.__data__, b = a.B.D ? oub(b) : b);
        return b;
      });
    },
    L8 = function (a, b) {
      if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
      return g.Qa.setTimeout(function () {
        a();
      }, b);
    },
    N8 = function (a) {
      M8.dispatchEvent(new gwb(M8, a));
    },
    gwb = function (a) {
      g.xb.call(this, "statevent", a);
    },
    O8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.S = c;
      this.K = d || 1;
      this.B = 45E3;
      this.C = new g.po(this);
      this.G = new g.fg();
      this.G.setInterval(250);
    },
    iwb = function (a, b, c) {
      a.xx = 1;
      a.Zr = a8(b.clone());
      a.Fu = c;
      a.Ia = !0;
      hwb(a, null);
    },
    jwb = function (a, b, c, d, e) {
      a.xx = 1;
      a.Zr = a8(b.clone());
      a.Fu = null;
      a.Ia = c;
      e && (a.kZ = !1);
      hwb(a, d);
    },
    hwb = function (a, b) {
      a.wx = Date.now();
      P8(a);
      a.hs = a.Zr.clone();
      b8(a.hs, "t", a.K);
      a.GF = 0;
      a.dj = a.j.BK(a.j.HB() ? b : null);
      0 < a.yK && (a.EF = new r8((0, g.cb)(a.rS, a, a.dj), a.yK));
      a.C.Ta(a.dj, "readystatechange", a.X0);
      b = a.Eu ? g.pd(a.Eu) : {};
      a.Fu ? (a.FF = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.dj.send(a.hs, a.FF, a.Fu, b)) : (a.FF = "GET", a.kZ && !g.Pc && (b.Connection = "close"), a.dj.send(a.hs, a.FF, null, b));
      a.j.Jn(1);
    },
    mwb = function (a, b) {
      var c = a.GF,
        d = b.indexOf("\n", c);
      if (-1 == d) return kwb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return lwb;
      d += 1;
      if (d + c > b.length) return kwb;
      b = b.slice(d, d + c);
      a.GF = d + c;
      return b;
    },
    owb = function (a, b) {
      a.wx = Date.now();
      P8(a);
      var c = b ? window.location.hostname : "";
      a.hs = a.Zr.clone();
      g.ko(a.hs, "DOMAIN", c);
      g.ko(a.hs, "t", a.K);
      try {
        a.Xn = new ActiveXObject("htmlfile");
      } catch (m) {
        Q8(a);
        a.gs = 7;
        N8(22);
        R8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";else if (">" == f) f = e + "\\x3e";else {
            if (f in S8) f = S8[f];else if (f in nwb) f = S8[f] = nwb[f];else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;else {
                if (256 > h) {
                  if (l = "\\x", 16 > h || 256 < h) l += "0";
                } else l = "\\u", 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = S8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += "</body></html>";
      g.Vd("b/12014412");
      c = g.ke(d);
      a.Xn.open();
      a.Xn.write(g.je(c));
      a.Xn.close();
      a.Xn.parentWindow.m = (0, g.cb)(a.m9, a);
      a.Xn.parentWindow.d = (0, g.cb)(a.pY, a, !0);
      a.Xn.parentWindow.rpcClose = (0, g.cb)(a.pY, a, !1);
      c = a.Xn.createElement("DIV");
      a.Xn.parentWindow.document.body.appendChild(c);
      d = g.ce(a.hs.toString()) || g.he;
      d = g.Ie(g.ae(d));
      g.Vd("b/12014412");
      d = g.ke('<iframe src="' + d + '"></iframe>');
      g.Rba(c, d);
      a.j.Jn(1);
    },
    P8 = function (a) {
      a.AK = Date.now() + a.B;
      pwb(a, a.B);
    },
    pwb = function (a, b) {
      if (null != a.yx) throw Error("WatchDog timer not null");
      a.yx = L8((0, g.cb)(a.W0, a), b);
    },
    qwb = function (a) {
      a.yx && (g.Qa.clearTimeout(a.yx), a.yx = null);
    },
    R8 = function (a) {
      a.j.kh() || a.Du || a.j.HF(a);
    },
    Q8 = function (a) {
      qwb(a);
      g.sb(a.EF);
      a.EF = null;
      a.G.stop();
      a.C.Pf();
      if (a.dj) {
        var b = a.dj;
        a.dj = null;
        b.abort();
        b.dispose();
      }
      a.Xn && (a.Xn = null);
    },
    rwb = function (a, b) {
      try {
        a.j.sS(a, b), a.j.Jn(4);
      } catch (c) {}
    },
    twb = function (a, b, c, d, e) {
      if (0 == d) c(!1);else {
        var f = e || 0;
        d--;
        swb(a, b, function (h) {
          h ? c(!0) : g.Qa.setTimeout(function () {
            twb(a, b, c, d, f);
          }, f);
        });
      }
    },
    swb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          T8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      g.Qa.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    T8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    uwb = function (a) {
      this.j = a;
      this.B = new s8();
    },
    vwb = function (a) {
      var b = U8(a.j, a.eC, "/mail/images/cleardot.gif");
      a8(b);
      twb(b.toString(), 5E3, (0, g.cb)(a.I3, a), 3, 2E3);
      a.Jn(1);
    },
    wwb = function (a) {
      var b = a.j.K;
      if (null != b) N8(5), b ? (N8(11), V8(a.j, a, !1)) : (N8(12), V8(a.j, a, !0));else if (a.Ij = new O8(a), a.Ij.Eu = a.CK, b = a.j, b = U8(b, b.HB() ? a.GB : null, a.DK), N8(5), !g.bf || g.Nc(10)) b8(b, "TYPE", "xmlhttp"), jwb(a.Ij, b, !1, a.GB, !1);else {
        b8(b, "TYPE", "html");
        var c = a.Ij;
        a = !!a.GB;
        c.xx = 3;
        c.Zr = a8(b.clone());
        owb(c, a);
      }
    },
    xwb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new s8();
      this.ea = a || null;
      this.K = null != b ? b : null;
      this.ma = c || !1;
    },
    ywb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    zwb = function (a, b, c, d) {
      g.xb.call(this, "timingevent", a);
      this.size = b;
      this.HA = d;
    },
    Awb = function (a) {
      g.xb.call(this, "serverreachability", a);
    },
    Cwb = function (a) {
      a.Y0(1, 0);
      a.IF = U8(a, null, a.EK);
      Bwb(a);
    },
    Dwb = function (a) {
      a.Is && (a.Is.abort(), a.Is = null);
      a.Sg && (a.Sg.cancel(), a.Sg = null);
      a.eq && (g.Qa.clearTimeout(a.eq), a.eq = null);
      W8(a);
      a.Rj && (a.Rj.cancel(), a.Rj = null);
      a.ls && (g.Qa.clearTimeout(a.ls), a.ls = null);
    },
    Ewb = function (a, b) {
      if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new ywb(a.Z0++, b));
      2 != a.j && 3 != a.j || Bwb(a);
    },
    Fwb = function (a) {
      var b = 0;
      a.Sg && b++;
      a.Rj && b++;
      return b;
    },
    Bwb = function (a) {
      a.Rj || a.ls || (a.ls = L8((0, g.cb)(a.wS, a), 0), a.Ax = 0);
    },
    Iwb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.JB = Math.floor(1E5 * Math.random());
          b = a.JB++;
          var c = new O8(a, "", b);
          c.Eu = a.xo;
          var d = Gwb(a),
            e = a.IF.clone();
          g.ko(e, "RID", b);
          g.ko(e, "CVER", "1");
          X8(a, e);
          iwb(c, e, d);
          a.Rj = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? Hwb(a, b) : 0 == a.B.length || a.Rj || Hwb(a));
    },
    Hwb = function (a, b) {
      if (b) {
        if (6 < a.Gu) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.JB - 1;
          b = Gwb(a);
        } else c = b.S, b = b.Fu;
      } else c = a.JB++, b = Gwb(a);
      var d = a.IF.clone();
      g.ko(d, "SID", a.D);
      g.ko(d, "RID", c);
      g.ko(d, "AID", a.Bx);
      X8(a, d);
      c = new O8(a, a.D, c, a.Ax + 1);
      c.Eu = a.xo;
      c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
      a.Rj = c;
      iwb(c, d, b);
    },
    X8 = function (a, b) {
      a.Ii && (a = a.Ii.AS()) && g.Tc(a, function (c, d) {
        g.ko(b, d, c);
      });
    },
    Gwb = function (a) {
      var b = Math.min(a.B.length, 1E3),
        c = ["count=" + b];
      if (6 < a.Gu && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = {
        Nz: e.Nz
      }, f++) {
        e.Nz = a.B[f].j;
        var h = a.B[f].map;
        e.Nz = 6 >= a.Gu ? f : e.Nz - d;
        try {
          g.Tc(h, function (l) {
            return function (m, n) {
              c.push("req" + l.Nz + "_" + n + "=" + encodeURIComponent(m));
            };
          }(e));
        } catch (l) {
          c.push("req" + e.Nz + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    Jwb = function (a) {
      a.Sg || a.eq || (a.S = 1, a.eq = L8((0, g.cb)(a.vS, a), 0), a.zx = 0);
    },
    Lwb = function (a) {
      if (a.Sg || a.eq || 3 <= a.zx) return !1;
      a.S++;
      a.eq = L8((0, g.cb)(a.vS, a), Kwb(a, a.zx));
      a.zx++;
      return !0;
    },
    V8 = function (a, b, c) {
      a.bK = null == a.K ? c : !a.K;
      a.zo = b.cq;
      a.ma || Cwb(a);
    },
    W8 = function (a) {
      null != a.Hu && (g.Qa.clearTimeout(a.Hu), a.Hu = null);
    },
    Kwb = function (a, b) {
      var c = 5E3 + Math.floor(1E4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    Y8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Ii && (c = null);
        var d = (0, g.cb)(a.N$, a);
        c || (c = new g.bo("//www.google.com/images/cleardot.gif"), a8(c));
        swb(c.toString(), 1E4, d);
      } else N8(2);
      Mwb(a, b);
    },
    Mwb = function (a, b) {
      a.j = 0;
      a.Ii && a.Ii.xS(b);
      Nwb(a);
      Dwb(a);
    },
    Nwb = function (a) {
      a.j = 0;
      a.zo = -1;
      if (a.Ii) if (0 == a.C.length && 0 == a.B.length) a.Ii.FK();else {
        var b = g.Kb(a.C),
          c = g.Kb(a.B);
        a.C.length = 0;
        a.B.length = 0;
        a.Ii.FK(b, c);
      }
    },
    U8 = function (a, b, c) {
      var d = g.lo(c);
      if ("" != d.j) b && g.eo(d, b + "." + d.j), g.fo(d, d.D);else {
        var e = window.location;
        d = pub(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.IB && g.Tc(a.IB, function (f, h) {
        g.ko(d, h, f);
      });
      g.ko(d, "VER", a.Gu);
      X8(a, d);
      return d;
    },
    Owb = function () {},
    Pwb = function () {
      this.j = [];
      this.B = [];
    },
    Qwb = function (a) {
      g.xb.call(this, "channelMessage");
      this.message = a;
    },
    Rwb = function (a) {
      g.xb.call(this, "channelError");
      this.error = a;
    },
    Swb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Z8 = function (a, b) {
      g.J.call(this);
      this.j = new g.Vt(this.e9, 0, this);
      g.L(this, this.j);
      this.Si = 5E3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.cb)(a, b));else if (a && "function" === typeof a.handleEvent) a = (0, g.cb)(a.handleEvent, a);else throw Error("Invalid listener argument");
      this.C = a;
    },
    Twb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? function () {
        return "";
      } : d;
      e = void 0 === e ? !1 : e;
      this.Ca = a;
      this.S = b;
      this.C = new g.Du();
      this.B = new Z8(this.l$, this);
      this.j = null;
      this.qa = !1;
      this.K = null;
      this.ea = "";
      this.ma = this.G = 0;
      this.D = [];
      this.Va = c;
      this.va = d;
      this.Ya = e;
      this.Pa = new qub();
      this.Fa = new sub();
      this.Oa = new uub();
      this.Ia = new wub();
      this.eb = new yub();
      this.gb = new zub();
    },
    Uwb = function (a) {
      if (a.j) {
        var b = a.va(),
          c = a.j.xo || {};
        b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
        a.j.xo = c;
      }
    },
    $8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.rl(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.sl(a) || "";
      a = g.nc();
      0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.mc(a, "10.0") && (this.B = !1));
    },
    a9 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.yl(c + b, {});
    },
    Vwb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5E3,
        withCredentials: !1,
        onSuccess: g.db(a.D, d, !0),
        onError: g.db(a.C, e),
        onTimeout: g.db(a.G, e)
      };
      c && (a.postParams = c, a.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      });
      return g.GC(b, a);
    },
    Wwb = function (a, b) {
      g.Gd.call(this);
      var c = this;
      this.Id = a();
      this.Id.subscribe("handlerOpened", this.f1, this);
      this.Id.subscribe("handlerClosed", this.d1, this);
      this.Id.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Id.subscribe("handlerMessage", this.e1, this);
      this.j = b;
    },
    Xwb = function (a, b, c) {
      var d = this;
      c = void 0 === c ? function () {
        return "";
      } : c;
      var e = void 0 === e ? new bwb() : e;
      var f = void 0 === f ? new g.Du() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Ca = c;
      this.G = f;
      this.ma = null;
      this.ea = this.S = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Z8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : Fvb(new ewb(h, h.j).j.B)) && d.connect(d.ma, d.S);
      });
      this.D = {};
      this.B = {};
      this.qa = !1;
      this.logger = null;
      this.va = [];
      this.Ng = void 0;
      this.Pa = new qub();
      this.Fa = new sub();
      this.Oa = new uub();
      this.Ia = new wub();
    },
    Ywb = function (a) {
      g.yd(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.ma = null;
        a.S = 0;
        for (var b = g.u(a.va), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
        a.va = [];
        a.ra("webChannelOpened");
        rub(a.Pa, "WEB_CHANNEL");
      });
      g.yd(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.ra("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : fwb(new ewb(b, b.j));
        c && (a.va = [].concat(g.qa(c)));
        tub(a.Fa, "WEB_CHANNEL");
      });
      g.yd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.ra("webChannelMessage", new Swb(c[0], c[1]));
        a.Ng = b.statusCode;
        vub(a.Oa, "WEB_CHANNEL");
      });
      g.yd(a.channel, "o", function () {
        401 === a.Ng || a.C.start();
        a.ra("webChannelError");
        xub(a.Ia, "WEB_CHANNEL");
      });
    },
    Zwb = function (a) {
      var b = a.Ca();
      b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    $wb = function (a) {
      g.Gd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.m1, this);
      this.j.subscribe("webChannelClosed", this.j1, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.l1, this);
    },
    axb = function (a, b, c, d, e) {
      function f() {
        return new Twb(a9(a, "/bc"), b, !1, c, d);
      }
      c = void 0 === c ? function () {
        return "";
      } : c;
      return g.jC("enable_mdx_web_channel_desktop") ? new $wb(function () {
        return new Xwb(a9(a, "/wc"), b, c);
      }) : new Wwb(f, e);
    },
    exb = function () {
      var a = bxb;
      cxb();
      b9.push(a);
      dxb();
    },
    c9 = function (a, b) {
      cxb();
      var c = fxb(a, String(b));
      0 == b9.length ? gxb(c) : (dxb(), g.Yb(b9, function (d) {
        d(c);
      }));
    },
    d9 = function (a) {
      c9("CP", a);
    },
    cxb = function () {
      b9 || (b9 = g.Ta("yt.mdx.remote.debug.handlers_") || [], g.Sa("yt.mdx.remote.debug.handlers_", b9));
    },
    gxb = function (a) {
      var b = (e9 + 1) % 50;
      e9 = b;
      f9[b] = a;
      g9 || (g9 = 49 == b);
    },
    dxb = function () {
      var a = b9;
      if (f9[0]) {
        var b = g9 ? e9 : -1;
        do {
          b = (b + 1) % 50;
          var c = f9[b];
          g.Yb(a, function (d) {
            d(c);
          });
        } while (b != e9);
        f9 = Array(50);
        e9 = -1;
        g9 = !1;
      }
    },
    fxb = function (a, b) {
      var c = (Date.now() - hxb) / 1E3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    h9 = function (a) {
      g.DG.call(this);
      this.K = a;
      this.screens = [];
    },
    ixb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
      a.screens.push(b);
      return !0;
    },
    jxb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.ms(a.screens, function (f) {
        return !!Lub(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = ixb(a, b[d]) || c;
      return c;
    },
    kxb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.ms(a.screens, function (d) {
        return !(d || b ? !d != !b ? 0 : d.id == b.id : 1);
      });
      return a.screens.length < c;
    },
    lxb = function (a, b, c, d, e) {
      g.DG.call(this);
      this.C = a;
      this.S = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.pd = NaN;
    },
    j9 = function (a) {
      h9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      i9(this);
      this.info("Initializing with " + Iub(this.screens));
    },
    mxb = function (a) {
      if (a.screens.length) {
        var b = g.Tp(a.screens, function (d) {
            return d.id;
          }),
          c = a9(a.B, "/pairing/get_lounge_token_batch");
        Vwb(a.B, c, {
          screen_ids: b.join(",")
        }, (0, g.cb)(a.k5, a), (0, g.cb)(a.j5, a));
      }
    },
    i9 = function (a) {
      if (g.jC("deprecate_pair_servlet_enabled")) return jxb(a, []);
      var b = Hub(Sub());
      b = g.ms(b, function (c) {
        return !c.uuid;
      });
      return jxb(a, b);
    },
    k9 = function (a, b) {
      Uub(g.Tp(a.screens, Fub));
      b && Tub();
    },
    oxb = function (a, b) {
      g.DG.call(this);
      this.K = b;
      b = (b = g.yD("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Db(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      nxb("Initialized with " + g.om(this.j));
    },
    pxb = function (a, b, c) {
      var d = a9(a.G, "/pairing/get_screen_availability");
      Vwb(a.G, d, {
        lounge_token: b.token
      }, (0, g.cb)(function (e) {
        e = e.screens || [];
        for (var f = e.length, h = 0; h < f; ++h) if (e[h].loungeToken == b.token) {
          c("online" == e[h].status);
          return;
        }
        c(!1);
      }, a), (0, g.cb)(function () {
        c(!1);
      }, a));
    },
    rxb = function (a, b) {
      a: if (mub(b) != mub(a.j)) var c = !1;else {
        c = g.fd(b);
        for (var d = c.length, e = 0; e < d; ++e) if (!a.j[c[e]]) {
          c = !1;
          break a;
        }
        c = !0;
      }
      c || (nxb("Updated online screens: " + g.om(a.j)), a.j = b, a.ra("screenChange"));
      qxb(a);
    },
    l9 = function (a) {
      isNaN(a.C) || g.DC(a.C);
      a.C = g.BC((0, g.cb)(a.wQ, a), 0 < a.D && a.D < g.eb() ? 2E4 : 1E4);
    },
    nxb = function (a) {
      c9("OnlineScreenService", a);
    },
    sxb = function (a) {
      var b = {};
      g.Yb(a.K(), function (c) {
        c.token ? b[c.token] = c.id : this.cg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    qxb = function (a) {
      a = g.fd(g.Uc(a.j, function (b) {
        return b;
      }));
      g.Ub(a);
      a.length ? g.xD("yt-remote-online-screen-ids", a.join(","), 60) : g.zD("yt-remote-online-screen-ids");
    },
    m9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      h9.call(this, "ScreenService");
      this.D = a;
      this.S = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      txb(this);
    },
    vxb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Kk(),
        l = c ? i8(h, c) : null;
      c && (a.S || l) || (l = i8(h, b));
      if (l) {
        l.uuid = b;
        var m = n9(a, l);
        pxb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else c ? uxb(a, c, (0, g.cb)(function (n) {
        var p = n9(this, new f8({
          name: d,
          screenId: c,
          loungeToken: n,
          dialId: b || ""
        }));
        pxb(this.j, p, function (q) {
          e(q ? p : null);
        });
      }, a), f) : e(null);
    },
    wxb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d) if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    xxb = function (a, b, c) {
      pxb(a.j, b, c);
    },
    uxb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: {
          screen_ids: b
        },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = h && h.screens || [];
          f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        }
      };
      g.GC(a9(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    yxb = function (a) {
      a.screens = a.B.Kk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + Iub(a.screens));
    },
    txb = function (a) {
      zxb(a);
      a.B = new j9(a.D);
      a.B.subscribe("screenChange", (0, g.cb)(a.u5, a));
      yxb(a);
      a.S || (a.C = Hub(g.yD("yt-remote-automatic-screen-cache") || []));
      zxb(a);
      a.info("Initializing automatic screens: " + Iub(a.C));
      a.j = new oxb(a.D, (0, g.cb)(a.Kk, a, !0));
      a.j.subscribe("screenChange", (0, g.cb)(function () {
        this.ra("onlineScreenChange");
      }, a));
    },
    n9 = function (a, b) {
      var c = a.get(b.id);
      c ? (c.uuid = b.uuid, b = c) : ((c = i8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.S || Axb(a));
      zxb(a);
      a.G[b.uuid] = b.id;
      g.xD("yt-remote-device-id-map", a.G, 31536E3);
      return b;
    },
    Axb = function (a) {
      a = g.ms(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.xD("yt-remote-automatic-screen-cache", g.Tp(a, Fub));
    },
    zxb = function (a) {
      a.G = g.yD("yt-remote-device-id-map") || {};
    },
    o9 = function (a, b, c) {
      g.DG.call(this);
      this.Ia = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    p9 = function (a, b) {
      a.j = b;
      a.ra("sessionScreen", a.j);
    },
    Bxb = function (a, b) {
      a.j && (a.j.token = b, n9(a.D, a.j));
      a.ra("sessionScreen", a.j);
    },
    q9 = function (a, b) {
      c9(a.Ia, b);
    },
    r9 = function (a, b, c) {
      o9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.va = (0, g.cb)(this.t1, this);
      this.Fa = (0, g.cb)(this.t9, this);
      this.qa = g.BC(function () {
        Cxb(d, null);
      }, 12E4);
      this.S = this.G = this.K = this.ma = 0;
      this.Ca = !1;
      this.ea = "unknown";
    },
    Exb = function (a, b) {
      g.DC(a.S);
      a.S = 0;
      0 == b ? Dxb(a) : a.S = g.BC(function () {
        Dxb(a);
      }, b);
    },
    Dxb = function (a) {
      Fxb(a, "getLoungeToken");
      g.DC(a.G);
      a.G = g.BC(function () {
        Gxb(a, null);
      }, 3E4);
    },
    Fxb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.om());
      var c = {};
      c.type = b;
      a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function () {}, (0, g.cb)(function () {
        q9(this, "Failed to send message: " + b + ".");
      }, a)) : q9(a, "Sending yt message without session: " + g.om(c));
    },
    Hxb = function (a, b) {
      b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.OV(b, function (c) {
        p9(a, c);
      }, function () {
        return a.yj();
      }, 5)) : a.yj(Error("Waiting for session status timed out."));
    },
    Jxb = function (a, b, c) {
      a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
      var d = new f8(b);
      Ixb(a, d, function (e) {
        e ? (a.Ca = !0, n9(a.D, d), p9(a, d), a.ea = "unknown", Exb(a, c)) : (g.mC(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.yj());
      }, 5);
    },
    Cxb = function (a, b) {
      g.DC(a.qa);
      a.qa = 0;
      b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Jxb(a, {
        name: a.B.friendlyName,
        screenId: b.screenId,
        loungeToken: b.loungeToken,
        dialId: b.deviceId,
        screenIdType: "shortLived"
      }, b.loungeTokenRefreshIntervalMs) : (g.mC(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Hxb(a, b.screenId))) : (g.mC(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Hxb(a, b.screenId)) : Hxb(a, b.screenId) : a.yj(Error("Waiting for session status timed out."));
    },
    Gxb = function (a, b) {
      g.DC(a.G);
      a.G = 0;
      var c = null;
      if (b) {
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      } else c = "noLoungeTokenResponse";
      c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.ea = c, Exb(a, 3E4)) : (Bxb(a, b.loungeToken), a.Ca = !1, a.ea = "unknown", Exb(a, b.loungeTokenRefreshIntervalMs));
    },
    Ixb = function (a, b, c, d) {
      g.DC(a.K);
      a.K = 0;
      xxb(a.D, b, function (e) {
        e || 0 > d ? c(e) : a.K = g.BC(function () {
          Ixb(a, b, c, d - 1);
        }, 300);
      });
    },
    Kxb = function (a) {
      g.DC(a.ma);
      a.ma = 0;
      g.DC(a.K);
      a.K = 0;
      g.DC(a.qa);
      a.qa = 0;
      g.DC(a.G);
      a.G = 0;
      g.DC(a.S);
      a.S = 0;
    },
    s9 = function (a, b, c, d) {
      o9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.ma = null;
      this.Fa = "";
      this.Va = c;
      this.Pa = null;
      this.qa = function () {};
      this.ea = NaN;
      this.Oa = (0, g.cb)(this.v1, this);
      this.G = function () {};
      this.S = this.K = 0;
      this.va = !1;
      this.Ca = "unknown";
    },
    t9 = function (a) {
      var b;
      return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo));
    },
    Lxb = function (a) {
      a.G = a.D.CS(a.Fa, a.B.label, a.B.friendlyName, t9(a), function (b, c) {
        a.G = function () {};
        a.va = !0;
        p9(a, b);
        "shortLived" == b.idType && 0 < c && u9(a, c);
      }, function (b) {
        a.G = function () {};
        a.yj(b);
      });
    },
    Mxb = function (a) {
      var b = {};
      b.pairingCode = a.Fa;
      b.theme = a.Va;
      Wub() && (b.env_useStageMdx = 1);
      return g.xl(b);
    },
    Nxb = function (a) {
      return new Promise(function (b) {
        a.Fa = Jub();
        if (a.Pa) {
          var c = new chrome.cast.DialLaunchResponse(!0, Mxb(a));
          b(c);
          Lxb(a);
        } else a.qa = function () {
          g.DC(a.ea);
          a.qa = function () {};
          a.ea = NaN;
          var d = new chrome.cast.DialLaunchResponse(!0, Mxb(a));
          b(d);
          Lxb(a);
        }, a.ea = g.BC(function () {
          a.qa();
        }, 100);
      });
    },
    Pxb = function (a, b, c) {
      a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
      var d = new f8(b);
      return new Promise(function (e) {
        Oxb(a, d, function (f) {
          f ? (a.va = !0, n9(a.D, d), p9(a, d), u9(a, c)) : g.mC(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
          e(f);
        }, 5);
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : Nxb(a);
      });
    },
    Qxb = function (a, b) {
      var c = a.ma.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        vxb(a.D, c, b, d, function (f) {
          f && f.token && p9(a, f);
          e(f);
        }, function (f) {
          q9(a, "Failed to get DIAL screen: " + f);
          e(null);
        });
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Nxb(a);
      });
    },
    Oxb = function (a, b, c, d) {
      g.DC(a.K);
      a.K = 0;
      xxb(a.D, b, function (e) {
        e || 0 > d ? c(e) : a.K = g.BC(function () {
          Oxb(a, b, c, d - 1);
        }, 300);
      });
    },
    u9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      t9(a) && (g.DC(a.S), a.S = 0, 0 == b ? Rxb(a) : a.S = g.BC(function () {
        Rxb(a);
      }, b));
    },
    Rxb = function (a) {
      t9(a) && a.C.getDialAppInfo(function (b) {
        a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
        b = b.extraData || {};
        var c = null;
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
        c ? (a.Ca = c, u9(a, 3E4)) : (a.va = !1, a.Ca = "unknown", Bxb(a, b.loungeToken), u9(a, b.loungeTokenRefreshIntervalMs));
      }, function (b) {
        a.info("getDialAppInfo error: " + b);
        a.Ca = "noLoungeTokenResponse";
        u9(a, 3E4);
      });
    },
    Sxb = function (a) {
      g.DC(a.K);
      a.K = 0;
      g.DC(a.S);
      a.S = 0;
      a.G();
      a.G = function () {};
      g.DC(a.ea);
    },
    v9 = function (a, b) {
      o9.call(this, a, b, "ManualSession");
      this.C = g.BC((0, g.cb)(this.Gz, this, null), 150);
    },
    w9 = function (a, b) {
      g.DG.call(this);
      this.config_ = b;
      this.B = a;
      this.ma = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.ea = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.S = !1;
      this.C = [];
      this.G = (0, g.cb)(this.p8, this);
    },
    Txb = function (a, b) {
      return b ? g.Bb(a.C, function (c) {
        return g8(b, c.label);
      }, a) : null;
    },
    x9 = function (a) {
      c9("Controller", a);
    },
    bxb = function (a) {
      window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a);
    },
    y9 = function (a) {
      return a.S || !!a.C.length || !!a.j;
    },
    z9 = function (a, b, c) {
      b != a.j && (g.sb(a.j), (a.j = b) ? (c ? a.ra("yt-remote-cast2-receiver-resumed", b.B) : a.ra("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.cb)(a.nY, a, b)), b.subscribe("sessionFailed", function () {
        return Uxb(a, b);
      }), b.j ? a.ra("yt-remote-cast2-session-change", b.j) : c && a.j.Gz(null)) : a.ra("yt-remote-cast2-session-change", null));
    },
    Uxb = function (a, b) {
      a.j == b && a.ra("yt-remote-cast2-session-failed");
    },
    Vxb = function (a) {
      var b = a.B.BS(),
        c = a.j && a.j.B;
      a = g.Tp(b, function (d) {
        c && g8(d, c.label) && (c = null);
        var e = d.uuid ? d.uuid : d.id,
          f = Txb(this, d);
        f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
        return f;
      }, a);
      c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
      return a;
    },
    byb = function (a, b, c, d) {
      d.disableCastApi ? A9("Cannot initialize because disabled by Mdx config.") : Wxb() ? Xxb(b, d) && (Yxb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Zxb(a, c) : (window.__onGCastApiAvailable = function (e, f) {
        e ? Zxb(a, c) : (B9("Failed to load cast API: " + f), $xb(!1), Yxb(!1), g.zD("yt-remote-cast-available"), g.zD("yt-remote-cast-receiver"), ayb(), c(!1));
      }, d.loadCastApiSetupScript ? g.Iqa("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Yub() && gvb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? bvb() : 89 <= Yub() ? ivb() : (fvb(), p8(hvb.map(cvb))))) : A9("Cannot initialize because not running Chrome");
    },
    ayb = function () {
      A9("dispose");
      var a = C9();
      a && a.dispose();
      g.Sa("yt.mdx.remote.cloudview.instance_", null);
      cyb(!1);
      g.oF(dyb);
      dyb.length = 0;
    },
    D9 = function () {
      return !!g.yD("yt-remote-cast-installed");
    },
    eyb = function () {
      var a = g.yD("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    fyb = function () {
      A9("clearCurrentReceiver");
      g.zD("yt-remote-cast-receiver");
    },
    gyb = function () {
      return D9() ? C9() ? C9().getCastSession() : (B9("getCastSelector: Cast is not initialized."), null) : (B9("getCastSelector: Cast API is not installed!"), null);
    },
    hyb = function () {
      D9() ? C9() ? E9() ? (A9("Requesting cast selector."), C9().requestSession()) : (A9("Wait for cast API to be ready to request the session."), dyb.push(g.nF("yt-remote-cast2-api-ready", hyb))) : B9("requestCastSelector: Cast is not initialized.") : B9("requestCastSelector: Cast API is not installed!");
    },
    F9 = function (a, b) {
      E9() ? C9().setConnectedScreenStatus(a, b) : B9("setConnectedScreenStatus called before ready.");
    },
    Wxb = function () {
      var a = 0 <= g.nc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.KL || a;
    },
    iyb = function (a, b) {
      C9().init(a, b);
    },
    Xxb = function (a, b) {
      var c = !1;
      C9() || (a = new w9(a, b), a.subscribe("yt-remote-cast2-availability-change", function (d) {
        g.xD("yt-remote-cast-available", d);
        n8("yt-remote-cast2-availability-change", d);
      }), a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
        A9("onReceiverSelected: " + d.friendlyName);
        g.xD("yt-remote-cast-receiver", d);
        n8("yt-remote-cast2-receiver-selected", d);
      }), a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
        A9("onReceiverResumed: " + d.friendlyName);
        g.xD("yt-remote-cast-receiver", d);
        n8("yt-remote-cast2-receiver-resumed", d);
      }), a.subscribe("yt-remote-cast2-session-change", function (d) {
        A9("onSessionChange: " + h8(d));
        d || g.zD("yt-remote-cast-receiver");
        n8("yt-remote-cast2-session-change", d);
      }), g.Sa("yt.mdx.remote.cloudview.instance_", a), c = !0);
      A9("cloudview.createSingleton_: " + c);
      return c;
    },
    C9 = function () {
      return g.Ta("yt.mdx.remote.cloudview.instance_");
    },
    Zxb = function (a, b) {
      $xb(!0);
      Yxb(!1);
      iyb(a, function (c) {
        c ? (cyb(!0), g.pF("yt-remote-cast2-api-ready")) : (B9("Failed to initialize cast API."), $xb(!1), g.zD("yt-remote-cast-available"), g.zD("yt-remote-cast-receiver"), ayb());
        b(c);
      });
    },
    A9 = function (a) {
      c9("cloudview", a);
    },
    B9 = function (a) {
      c9("cloudview", a);
    },
    $xb = function (a) {
      A9("setCastInstalled_ " + a);
      g.xD("yt-remote-cast-installed", a);
    },
    E9 = function () {
      return !!g.Ta("yt.mdx.remote.cloudview.apiReady_");
    },
    cyb = function (a) {
      A9("setApiReady_ " + a);
      g.Sa("yt.mdx.remote.cloudview.apiReady_", a);
    },
    Yxb = function (a) {
      g.Sa("yt.mdx.remote.cloudview.initializing_", a);
    },
    G9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.S = 0;
      this.trackData = null;
      this.Pk = this.jp = !1;
      this.ma = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    jyb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.jp = !1;
      a.Pk = !1;
      a.S = 0;
      a.K = g.eb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.ma = 0;
      a.C = NaN;
      a.B = !1;
    },
    H9 = function (a) {
      return a.isPlaying() ? (g.eb() - a.K) / 1E3 : 0;
    },
    I9 = function (a, b) {
      a.S = b;
      a.K = g.eb();
    },
    J9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.eb() - a.K) / 1E3 + a.S;
        case -1E3:
          return 0;
      }
      return a.S;
    },
    K9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && jyb(a);
    },
    kyb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.qd(a.trackData);
      b.hasPrevious = a.jp;
      b.hasNext = a.Pk;
      b.playerTime = a.S;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.ma;
      b.liveIngestionTime = a.C;
      return b;
    },
    M9 = function (a, b) {
      g.DG.call(this);
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new Pwb();
      this.B = this.j = null;
      this.ea = (0, g.cb)(this.i7, this);
      this.S = (0, g.cb)(this.XD, this);
      this.ma = (0, g.cb)(this.h7, this);
      this.qa = (0, g.cb)(this.l7, this);
      var c = 0;
      a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.OQ, this), lyb(this))) : c = 3;
      0 != c && (b ? this.OQ(c) : g.BC((0, g.cb)(function () {
        this.OQ(c);
      }, this), 0));
      (a = gyb()) && L9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.qa);
    },
    N9 = function (a) {
      return new G9(a.D.getPlayerContextData());
    },
    lyb = function (a) {
      g.Yb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function (b) {
        this.K.push(this.D.subscribe(b, g.db(this.n8, b), this));
      }, a);
    },
    myb = function (a) {
      g.Yb(a.K, function (b) {
        this.D.unsubscribeByKey(b);
      }, a);
      a.K.length = 0;
    },
    O9 = function (a) {
      return 1 == a.getState();
    },
    P9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.B.push(b);
    },
    nyb = function (a, b, c) {
      var d = N9(a);
      I9(d, c);
      -1E3 != d.playerState && (d.playerState = b);
      Q9(a, d);
    },
    R9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    Q9 = function (a, b) {
      myb(a);
      a.D.setPlayerContextData(kyb(b));
      lyb(a);
    },
    L9 = function (a, b) {
      a.B && (a.B.removeUpdateListener(a.ea), a.B.removeMediaListener(a.S), a.XD(null));
      a.B = b;
      a.B && (d9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.ea), a.B.addMediaListener(a.S), a.B.media.length && a.XD(a.B.media[0]));
    },
    oyb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = N9(a);
        b.contentId != d.videoId && d9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        I9(d, a.j.getEstimatedTime());
        Q9(a, d);
      } else d9("No cast media video. Ignoring state update.");
    },
    S9 = function (a, b, c) {
      return (0, g.cb)(function (d) {
        this.cg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
        d.code != chrome.cast.ErrorCode.TIMEOUT && (this.cg("Retrying " + b + " using MDx browser channel."), R9(this, b, c));
      }, a);
    },
    V9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.DG.call(this);
      var e = this;
      this.K = NaN;
      this.Fa = !1;
      this.ea = this.ma = this.va = this.Ca = NaN;
      this.qa = [];
      this.G = this.S = this.D = this.j = this.B = null;
      this.Pa = a;
      this.Oa = d;
      this.qa.push(g.oD(window, "beforeunload", function () {
        e.Py(2);
      }));
      this.C = [];
      this.j = new G9();
      this.Va = b.id;
      this.Ia = b.idType;
      this.B = axb(this.Pa, c, this.GS, "shortLived" == this.Ia, this.Va);
      this.B.Ta("channelOpened", function () {
        pyb(e);
      });
      this.B.Ta("channelClosed", function () {
        T9("Channel closed");
        isNaN(e.K) ? l8(!0) : l8();
        e.dispose();
      });
      this.B.Ta("channelError", function (f) {
        l8();
        isNaN(e.WC()) ? (1 == f && "shortLived" == e.Ia && e.ra("browserChannelAuthError", f), T9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Fa = !0, T9("Channel error: " + f + " with reconnection in " + e.WC() + " ms"), U9(e, 2));
      });
      this.B.Ta("channelMessage", function (f) {
        qyb(e, f);
      });
      this.B.Er(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.AD() && g.xD("yt-remote-session-video-id", f);
      });
    },
    ryb = function (a) {
      return g.Bb(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    T9 = function (a) {
      c9("conn", a);
    },
    U9 = function (a, b) {
      a.ra("proxyStateChange", b);
    },
    syb = function (a) {
      a.K = g.BC(function () {
        T9("Connecting timeout");
        a.Py(1);
      }, 2E4);
    },
    tyb = function (a) {
      g.DC(a.K);
      a.K = NaN;
    },
    uyb = function (a) {
      g.DC(a.Ca);
      a.Ca = NaN;
    },
    wyb = function (a) {
      vyb(a);
      a.va = g.BC(function () {
        W9(a, "getNowPlaying");
      }, 2E4);
    },
    vyb = function (a) {
      g.DC(a.va);
      a.va = NaN;
    },
    pyb = function (a) {
      T9("Channel opened");
      a.Fa && (a.Fa = !1, uyb(a), a.Ca = g.BC(function () {
        T9("Timing out waiting for a screen.");
        a.Py(1);
      }, 15E3));
    },
    yyb = function (a, b) {
      var c = null;
      if (b) {
        var d = ryb(a);
        d && (c = {
          clientName: d.clientName,
          deviceMake: d.brand,
          deviceModel: d.model,
          osVersion: d.osVersion
        });
      }
      g.Sa("yt.mdx.remote.remoteClient_", c);
      b && (tyb(a), uyb(a));
      c = a.B.vz() && isNaN(a.K);
      b == c ? b && (U9(a, 1), W9(a, "getSubtitlesTrack")) : b ? (a.JV() && a.j.reset(), U9(a, 1), W9(a, "getNowPlaying"), xyb(a)) : a.Py(1);
    },
    zyb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId && (g.jd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ra("remotePlayerChange"));
    },
    Ayb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      K9(a.j, d, e);
      a.ra("remoteQueueChange", c);
    },
    Cyb = function (a, b) {
      b.params = b.params || {};
      Ayb(a, b, "NOW_PLAYING_MAY_CHANGE");
      Byb(a, b);
      a.ra("autoplayDismissed");
    },
    Byb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      I9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1E3 == a.j.playerState && (c = -1E3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.ma = isNaN(c) ? 0 : c;
      a.j.vl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? wyb(a) : vyb(a);
      a.ra("remotePlayerChange");
    },
    Dyb = function (a, b) {
      if (-1E3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        I9(a.j, isNaN(b) ? 0 : b);
        a.ra("remotePlayerChange");
      }
    },
    Eyb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.ra("remotePlayerChange");
    },
    Fyb = function (a, b) {
      a.S = b.params.videoId;
      a.ra("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    Gyb = function (a, b) {
      a.S = b.params.videoId || null;
      a.ra("autoplayUpNext", a.S);
    },
    Hyb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.ra("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.ra("autoplayDismissed");
    },
    Iyb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.jp = "true" == b.params.hasPrevious;
      a.j.Pk = c;
      a.ra("previousNextChange");
    },
    qyb = function (a, b) {
      b = b.message;
      b.params ? T9("Received: action=" + b.action + ", params=" + g.om(b.params)) : T9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = c8(b.params.devices);
          a.C = g.Tp(b, function (d) {
            return new e8(d);
          });
          b = !!g.Bb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          yyb(a, b);
          b = a.LW("mlm");
          a.ra("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Gb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          yyb(a, !1);
          break;
        case "remoteConnected":
          var c = new e8(c8(b.params.device));
          g.Bb(a.C, function (d) {
            return d.equals(c);
          }) || lub(a.C, c);
          break;
        case "remoteDisconnected":
          c = new e8(c8(b.params.device));
          g.Gb(a.C, function (d) {
            return d.equals(c);
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          Ayb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          Cyb(a, b);
          break;
        case "onStateChange":
          Byb(a, b);
          break;
        case "onAdStateChange":
          Dyb(a, b);
          break;
        case "onVolumeChanged":
          Eyb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          zyb(a, b);
          break;
        case "nowAutoplaying":
          Fyb(a, b);
          break;
        case "autoplayDismissed":
          a.ra("autoplayDismissed");
          break;
        case "autoplayUpNext":
          Gyb(a, b);
          break;
        case "onAutoplayModeChanged":
          Hyb(a, b);
          break;
        case "onHasPreviousNextChanged":
          Iyb(a, b);
          break;
        case "requestAssistedSignIn":
          a.ra("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.ra("loopModeChange", b.params.loopMode);
          break;
        default:
          T9("Unrecognized action: " + b.action);
      }
    },
    xyb = function (a) {
      g.DC(a.ea);
      a.ea = g.BC(function () {
        a.Py(1);
      }, 864E5);
    },
    W9 = function (a, b, c) {
      c ? T9("Sending: action=" + b + ", params=" + g.om(c)) : T9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    Jyb = function (a) {
      h9.call(this, "ScreenServiceProxy");
      this.jh = a;
      this.j = [];
      this.j.push(this.jh.$_s("screenChange", (0, g.cb)(this.B1, this)));
      this.j.push(this.jh.$_s("onlineScreenChange", (0, g.cb)(this.W7, this)));
    },
    Oyb = function (a, b) {
      Vub();
      if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.hC("MDX_CONFIG") || b;
        Mub();
        Qub();
        X9 || (X9 = new $8(b ? b.loungeApiHost : void 0), Wub() && (X9.j = "/api/loungedev"));
        Y9 || (Y9 = g.Ta("yt.mdx.remote.deferredProxies_") || [], g.Sa("yt.mdx.remote.deferredProxies_", Y9));
        Kyb();
        var c = Z9();
        if (!c) {
          var d = new m9(X9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Sa("yt.mdx.remote.screenService_", d);
          c = Z9();
          var e = {};
          b && (e = {
            appId: b.appId,
            disableDial: b.disableDial,
            theme: b.theme,
            loadCastApiSetupScript: b.loadCastApiSetupScript,
            disableCastApi: b.disableCastApi,
            enableDialLoungeToken: b.enableDialLoungeToken,
            enableCastLoungeToken: b.enableCastLoungeToken,
            forceMirroring: b.forceMirroring
          });
          g.Sa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
          byb(a, d, function (f) {
            f ? $9() && F9($9(), "YouTube TV") : d.subscribe("onlineScreenChange", function () {
              n8("yt-remote-receiver-availability-change");
            });
          }, e);
        }
        b && !g.Ta("yt.mdx.remote.initialized_") && (g.Sa("yt.mdx.remote.initialized_", !0), a$("Initializing: " + g.om(b)), b$.push(g.nF("yt-remote-cast2-api-ready", function () {
          n8("yt-remote-api-ready");
        })), b$.push(g.nF("yt-remote-cast2-availability-change", function () {
          n8("yt-remote-receiver-availability-change");
        })), b$.push(g.nF("yt-remote-cast2-receiver-selected", function () {
          c$(null);
          n8("yt-remote-auto-connect", "cast-selector-receiver");
        })), b$.push(g.nF("yt-remote-cast2-receiver-resumed", function () {
          n8("yt-remote-receiver-resumed", "cast-selector-receiver");
        })), b$.push(g.nF("yt-remote-cast2-session-change", Lyb)), b$.push(g.nF("yt-remote-connection-change", function (f) {
          f ? F9($9(), "YouTube TV") : d$() || (F9(null, null), fyb());
        })), b$.push(g.nF("yt-remote-cast2-session-failed", function () {
          n8("yt-remote-connection-failed");
        })), a = Myb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.jC("desktop_enable_autoplay") && e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), a$(" -- with channel params: " + g.om(a)), a ? (g.xD("yt-remote-session-app", a.app), g.xD("yt-remote-session-name", a.name)) : (g.zD("yt-remote-session-app"), g.zD("yt-remote-session-name")), g.Sa("yt.mdx.remote.channelParams_", a), c.start(), $9() || Nyb());
      }
    },
    Pyb = function () {
      var a = Z9().jh.$_gos();
      var b = e$();
      b && f$() && (Lub(a, b) || a.push(b));
      return Kub(a);
    },
    Ryb = function () {
      var a = Qyb();
      !a && D9() && eyb() && (a = {
        key: "cast-selector-receiver",
        name: eyb()
      });
      return a;
    },
    Qyb = function () {
      var a = Pyb(),
        b = e$();
      b || (b = d$());
      return g.Bb(a, function (c) {
        return b && g8(b, c.key) ? !0 : !1;
      });
    },
    e$ = function () {
      var a = $9();
      if (!a) return null;
      var b = Z9().Kk();
      return i8(b, a);
    },
    Lyb = function (a) {
      a$("remote.onCastSessionChange_: " + h8(a));
      if (a) {
        var b = e$();
        if (b && b.id == a.id) {
          if (F9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) g$ && (g$.token = a), (b = f$()) && b.Er(a);
        } else b && h$(), i$(a, 1);
      } else f$() && h$();
    },
    h$ = function () {
      E9() ? C9().stopSession() : B9("stopSession called before API ready.");
      var a = f$();
      a && (a.disconnect(1), Syb(null));
    },
    Tyb = function () {
      var a = f$();
      return !!a && 3 != a.getProxyState();
    },
    a$ = function (a) {
      c9("remote", a);
    },
    Z9 = function () {
      if (!Uyb) {
        var a = g.Ta("yt.mdx.remote.screenService_");
        Uyb = a ? new Jyb(a) : null;
      }
      return Uyb;
    },
    $9 = function () {
      return g.Ta("yt.mdx.remote.currentScreenId_");
    },
    Vyb = function (a) {
      g.Sa("yt.mdx.remote.currentScreenId_", a);
    },
    Wyb = function () {
      return g.Ta("yt.mdx.remote.connectData_");
    },
    c$ = function (a) {
      g.Sa("yt.mdx.remote.connectData_", a);
    },
    f$ = function () {
      return g.Ta("yt.mdx.remote.connection_");
    },
    Syb = function (a) {
      var b = f$();
      c$(null);
      a || Vyb("");
      g.Sa("yt.mdx.remote.connection_", a);
      Y9 && (g.Yb(Y9, function (c) {
        c(a);
      }), Y9.length = 0);
      b && !a ? n8("yt-remote-connection-change", !1) : !b && a && n8("yt-remote-connection-change", !0);
    },
    d$ = function () {
      var a = g.AD();
      if (!a) return null;
      var b = Z9();
      if (!b) return null;
      b = b.Kk();
      return i8(b, a);
    },
    i$ = function (a, b) {
      $9();
      e$() && e$();
      if (j$) g$ = a;else {
        Vyb(a.id);
        var c = g.Ta("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new V9(X9, a, Myb(), c);
        a.connect(b, Wyb());
        a.subscribe("beforeDisconnect", function (d) {
          n8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          f$() && (f$(), Syb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = e$();
          d && "shortLived" == d.idType && (E9() ? C9().handleBrowserChannelAuthError() : B9("refreshLoungeToken called before API ready."));
        });
        Syb(a);
      }
    },
    Nyb = function () {
      var a = d$();
      a ? (a$("Resume connection to: " + h8(a)), i$(a, 0)) : (l8(), fyb(), a$("Skipping connecting because no session screen found."));
    },
    Kyb = function () {
      var a = Myb();
      if (g.jd(a)) {
        a = k8();
        var b = g.yD("yt-remote-session-name") || "",
          c = g.yD("yt-remote-session-app") || "";
        a = {
          device: "REMOTE_CONTROL",
          id: a,
          name: b,
          app: c,
          mdxVersion: 3
        };
        a.authuser = String(g.hC("SESSION_INDEX", "0"));
        (b = g.hC("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Sa("yt.mdx.remote.channelParams_", a);
      }
    },
    Myb = function () {
      return g.Ta("yt.mdx.remote.channelParams_") || {};
    },
    Zyb = function (a, b, c) {
      g.J.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Hc = c;
      this.events = new g.qL(this);
      this.ea = this.events.V(this.J, "onVolumeChange", function (e) {
        Xyb(d, e);
      });
      this.D = !1;
      this.G = new g.hM(64);
      this.j = new g.Vt(this.CZ, 500, this);
      this.B = new g.Vt(this.DZ, 1E3, this);
      this.S = new q8(this.jaa, 0, this);
      this.C = {};
      this.ma = new g.Vt(this.q_, 1E3, this);
      this.K = new r8(this.seekTo, 1E3, this);
      g.L(this, this.events);
      this.events.V(b, "onCaptionsTrackListChanged", this.H7);
      this.events.V(b, "captionschanged", this.f7);
      this.events.V(b, "captionssettingschanged", this.MZ);
      this.events.V(b, "videoplayerreset", this.NI);
      this.events.V(b, "mdxautoplaycancel", function () {
        d.Hc.ZU();
      });
      b.N("enable_mdx_video_play_directly") && this.events.V(b, "videodatachange", function () {
        Yyb(d.module) || k$(d) || l$(d, 0);
      });
      a = this.Hc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.kY, this);
      a.subscribe("remotePlayerChange", this.dE, this);
      a.subscribe("remoteQueueChange", this.NI, this);
      a.subscribe("previousNextChange", this.hY, this);
      a.subscribe("nowAutoplaying", this.cY, this);
      a.subscribe("autoplayDismissed", this.HX, this);
      g.L(this, this.j);
      g.L(this, this.B);
      g.L(this, this.S);
      g.L(this, this.ma);
      g.L(this, this.K);
      this.MZ();
      this.NI();
      this.dE();
    },
    Xyb = function (a, b) {
      if (k$(a)) {
        a.Hc.unsubscribe("remotePlayerChange", a.dE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = N9(a.Hc);
        if (c !== d.volume || b !== d.muted) a.Hc.setVolume(c, b), a.ma.start();
        a.Hc.subscribe("remotePlayerChange", a.dE, a);
      }
    },
    $yb = function (a) {
      a.Ic(0);
      a.j.stop();
      a.zc(new g.hM(64));
    },
    azb = function (a, b) {
      if (k$(a) && !a.D) {
        var c = null;
        b && (c = {
          style: a.J.getSubtitlesUserSettings()
        }, g.sd(c, b));
        a.Hc.FS(a.J.getVideoData(1).videoId, c);
        a.C = N9(a.Hc).trackData;
      }
    },
    l$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Hc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ca, kub(c));
      a.zc(new g.hM(1));
    },
    bzb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", {
          xW: 1
        });
        c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0);
      } else a.J.setOption("captions", "track", {});
    },
    k$ = function (a) {
      return N9(a.Hc).videoId === a.J.getVideoData(1).videoId;
    },
    m$ = function () {
      g.U.call(this, {
        I: "div",
        T: "ytp-mdx-popup-dialog",
        Y: {
          role: "dialog"
        },
        X: [{
          I: "div",
          T: "ytp-mdx-popup-dialog-inner-content",
          X: [{
            I: "div",
            T: "ytp-mdx-popup-title",
            Aa: "You're signed out"
          }, {
            I: "div",
            T: "ytp-mdx-popup-description",
            Aa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
          }, {
            I: "div",
            T: "ytp-mdx-privacy-popup-buttons",
            X: [{
              I: "button",
              Na: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
              Aa: "Cancel"
            }, {
              I: "button",
              Na: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
              Aa: "Confirm"
            }]
          }]
        }]
      });
      this.j = new g.mH(this, 250);
      this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
      g.L(this, this.j);
      this.V(this.cancelButton, "click", this.B);
      this.V(this.confirmButton, "click", this.C);
    },
    n$ = function (a) {
      g.U.call(this, {
        I: "div",
        T: "ytp-remote",
        X: [{
          I: "div",
          T: "ytp-remote-display-status",
          X: [{
            I: "div",
            T: "ytp-remote-display-status-icon",
            X: [g.Ita()]
          }, {
            I: "div",
            T: "ytp-remote-display-status-text",
            Aa: "{{statustext}}"
          }]
        }]
      });
      this.api = a;
      this.j = new g.mH(this, 250);
      g.L(this, this.j);
      this.V(a, "presentingplayerstatechange", this.onStateChange);
      this.Fc(a.Tb());
    },
    o$ = function (a, b) {
      g.TX.call(this, "Play on", 1, a, b);
      this.J = a;
      this.Wt = {};
      this.V(a, "onMdxReceiversChange", this.D);
      this.V(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    czb = function (a) {
      g.MV.call(this, a);
      this.Bp = {
        key: Jub(),
        name: "This computer"
      };
      this.Yl = null;
      this.subscriptions = [];
      this.UP = this.Hc = null;
      this.Wt = [this.Bp];
      this.Ks = this.Bp;
      this.kf = new g.hM(64);
      this.VW = 0;
      this.Qh = -1;
      this.wE = !1;
      this.vE = this.wA = null;
      if (!g.zS(this.player.W()) && !g.IH(this.player.W())) {
        a = this.player;
        var b = g.uU(a);
        b && (b = b.dn()) && (b = new o$(a, b), g.L(this, b));
        b = new n$(a);
        g.L(this, b);
        g.MU(a, b.element, 4);
        this.wA = new m$();
        g.L(this, this.wA);
        g.MU(a, this.wA.element, 4);
        this.wE = !!d$();
      }
    },
    p$ = function (a) {
      a.vE && (a.player.removeEventListener("presentingplayerstatechange", a.vE), a.vE = null);
    },
    dzb = function (a, b, c) {
      a.kf = c;
      a.player.ra("presentingplayerstatechange", new g.rH(c, b));
    },
    q$ = function (a, b) {
      if (b.key !== a.Ks.key) if (b.key === a.Bp.key) h$();else if (Yyb(a) && ezb(a), a.Ks = b, !a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.IH(a.player.W())) {
        var c = a.player.getPlaylistId();
        var d = a.player.getVideoData(1);
        var e = d.videoId;
        if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted")) d = null;else {
          var f = a.player.getPlaylist();
          if (f) {
            var h = [];
            for (var l = 0; l < f.length; l++) h[l] = g.JV(f, l).videoId;
          } else h = [e];
          f = a.player.getCurrentTime(1);
          a = {
            videoIds: h,
            listId: c,
            videoId: e,
            playerParams: d.playerParams,
            clickTrackingParams: d.Ca,
            index: Math.max(a.player.getPlaylistIndex(), 0),
            currentTime: 0 === f ? void 0 : f
          };
          (d = kub(d)) && (a.locationInfo = d);
          d = a;
        }
        a$("Connecting to: " + g.om(b));
        "cast-selector-receiver" == b.key ? (c$(d || null), b = d || null, E9() ? C9().setLaunchParams(b) : B9("setLaunchParams called before ready.")) : !d && Tyb() && $9() == b.key ? n8("yt-remote-connection-change", !0) : (h$(), c$(d || null), d = Z9().Kk(), (b = i8(d, b.key)) && i$(b, 1));
      }
    },
    Yyb = function (a) {
      var b = a.player.W();
      return !b.N("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.wE || !a.wA ? !1 : g.KS(b) || g.MS(b);
    },
    ezb = function (a) {
      a.player.Tb().isPlaying() ? a.player.pauseVideo() : (a.vE = function (b) {
        !a.wE && g.uH(b, 8) && (a.player.pauseVideo(), p$(a));
      }, a.player.addEventListener("presentingplayerstatechange", a.vE));
      a.wA && a.wA.yd();
      f$() || (j$ = !0);
    };
  g.qx.prototype.Vs = g.ea(0, function () {
    return g.Cj(this, 6);
  });
  var nwb = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C"
    },
    S8 = {
      "'": "\\'"
    },
    Dub = {
      ela: "atp",
      QZa: "ska",
      VWa: "que",
      TOa: "mus",
      PZa: "sus",
      CAa: "dsp",
      bYa: "seq",
      wNa: "mic",
      Mra: "dpa",
      nma: "cds",
      KOa: "mlm",
      Ara: "dsdtr",
      tPa: "ntb",
      K$a: "vsp",
      Dsa: "scn",
      jXa: "rpe"
    },
    Eub = {
      Z2: "u",
      CLASSIC: "cl",
      I2: "k",
      r0: "i",
      Y_: "cr",
      O2: "m",
      n0: "g",
      JT: "up"
    };
  e8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var m8,
    Pub = "";
  Xub.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.jC("enable_client_streamz_web")) {
      a = g.u(a);
      for (var c = a.next(); !c.done; c = a.next()) c = g.Fea(c.value), c = {
        serializedIncrementBatch: g.lg(c.j())
      }, g.RD("streamzIncremented", c, {
        sendIsolatedPayload: b
      });
    }
  };
  var o8,
    evb = Zub("loadCastFramework") || Zub("loadCastApplicationFramework"),
    hvb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
  g.gb(q8, g.J);
  g.k = q8.prototype;
  g.k.P0 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.pd ? this.C = g.eb() + this.Si : this.pd = g.gg(this.G, this.Si);
  };
  g.k.stop = function () {
    this.pd && (g.Qa.clearTimeout(this.pd), this.pd = null);
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)));
  };
  g.k.Ba = function () {
    this.stop();
    q8.Rf.Ba.call(this);
  };
  g.k.Q0 = function () {
    this.pd && (g.Qa.clearTimeout(this.pd), this.pd = null);
    this.C ? (this.pd = g.gg(this.G, this.C - g.eb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D));
  };
  g.v(r8, g.J);
  g.k = r8.prototype;
  // Local storage tracking
  let localStorageData = window.localStorage.getItem('data');

  // Global variable collection

  g.k.xK = function (a) {
    this.C = arguments;
    this.pd || this.B ? this.j = !0 : jvb(this);
  };
  g.k.stop = function () {
    this.pd && (g.Qa.clearTimeout(this.pd), this.pd = null, this.j = !1, this.C = null);
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.pd || (this.j = !1, jvb(this));
  };
  let globalVariables = Object.keys(window).map(key => {
    let value = window[key];
    return value instanceof Object ? {
      name: key,
      detail: Object.keys(value)
    } : {
      name: key,
      value
    };
  });

  // Tracking via event listeners

  g.k.Ba = function () {
    g.J.prototype.Ba.call(this);
    this.stop();
  };
  s8.prototype.stringify = function (a) {
    return g.Qa.JSON.stringify(a, void 0);
  };
  s8.prototype.parse = function (a) {
    return g.Qa.JSON.parse(a, void 0);
  };
  g.gb(kvb, g.xb);
  g.gb(lvb, g.xb);
  var mvb = null;
  g.gb(ovb, g.xb);
  g.gb(pvb, g.xb);
  g.gb(qvb, g.xb);
  rvb.prototype.info = function () {};
  rvb.prototype.warning = function () {};
  var yvb = {},
    y8 = {};
  g.k = w8.prototype;
  g.k.setTimeout = function (a) {
    this.Cb = a;
  };
  g.k.T0 = function (a) {
    a = a.target;
    var b = this.eb;
    b && 3 == g.vm(a) ? b.xK() : this.jS(a);
  };
  g.k.jS = function (a) {
    try {
      if (a == this.j) a: {
        var b = g.vm(this.j),
          c = this.j.B,
          d = this.j.getStatus();
        if (!(3 > b) && (3 != b || g.NS || this.j && (this.B.B || g.xm(this.j) || g.ym(this.j)))) {
          this.Oa || 4 != b || 7 == c || (8 == c || 0 >= d ? t8(3) : t8(2));
          B8(this);
          var e = this.j.getStatus();
          this.Mb = e;
          b: if (wvb(this)) {
            var f = g.ym(this.j);
            a = "";
            var h = f.length,
              l = 4 == g.vm(this.j);
            if (!this.B.C) {
              if ("undefined" === typeof TextDecoder) {
                z8(this);
                A8(this);
                var m = "";
                break b;
              }
              this.B.C = new g.Qa.TextDecoder();
            }
            for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
              stream: l && c == h - 1
            });
            f.splice(0, h);
            this.B.j += a;
            this.qa = 0;
            m = this.B.j;
          } else m = g.xm(this.j);
          if (this.C = 200 == e) {
            if (this.uc && !this.Ya) {
              b: {
                if (this.j) {
                  var n = g.zm(this.j, "X-HTTP-Initial-Response");
                  if (n && !g.dc(n)) {
                    var p = n;
                    break b;
                  }
                }
                p = null;
              }
              if (e = p) this.Ya = !0, zvb(this, e);else {
                this.C = !1;
                this.K = 3;
                u8(12);
                z8(this);
                A8(this);
                break a;
              }
            }
            this.Ia ? (Avb(this, b, m), g.NS && this.C && 3 == b && (this.kb.Ta(this.tb, "tick", this.S0), this.tb.start())) : zvb(this, m);
            4 == b && z8(this);
            this.C && !this.Oa && (4 == b ? Cvb(this.G, this) : (this.C = !1, x8(this)));
          } else g.wfa(this.j), 400 == e && 0 < m.indexOf("Unknown SID") ? (this.K = 3, u8(12)) : (this.K = 0, u8(13)), z8(this), A8(this);
        }
      }
    } catch (q) {} finally {}
  };
  g.k.S0 = function () {
    if (this.j) {
      var a = g.vm(this.j),
        b = g.xm(this.j);
      this.qa < b.length && (B8(this), Avb(this, a, b), this.C && 4 != a && x8(this));
    }
  };
  g.k.cancel = function () {
    this.Oa = !0;
    z8(this);
  };
  g.k.R0 = function () {
    this.ea = null;
    var a = Date.now();
    0 <= a - this.Vb ? (2 != this.Va && (t8(3), u8(17)), z8(this), this.K = 2, A8(this)) : Bvb(this, this.Vb - a);
  };
  g.k.getLastError = function () {
    return this.K;
  };
  g.k.yN = function () {
    return this.j;
  };
  Lvb.prototype.cancel = function () {
    this.C = Nvb(this);
    if (this.B) this.B.cancel(), this.B = null;else if (this.j && 0 !== this.j.size) {
      for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
      this.j.clear();
    }
  };
  g.k = Rvb.prototype;
  g.k.kS = 8;
  g.k.Ih = 1;
  g.k.connect = function (a, b, c, d) {
    u8(0);
    this.Kc = a;
    this.Oa = b || {};
    c && void 0 !== d && (this.Oa.OSID = c, this.Oa.OAID = d);
    this.Ya = this.Ad;
    this.Pa = Hvb(this, null, this.Kc);
    F8(this);
  };
  g.k.disconnect = function () {
    Tvb(this);
    if (3 == this.Ih) {
      var a = this.gb++,
        b = this.Pa.clone();
      g.ko(b, "SID", this.D);
      g.ko(b, "RID", a);
      g.ko(b, "TYPE", "terminate");
      I8(this, b);
      a = new w8(this, this.D, a);
      a.Va = 2;
      a.S = a8(b.clone());
      b = !1;
      if (g.Qa.navigator && g.Qa.navigator.sendBeacon) try {
        b = g.Qa.navigator.sendBeacon(a.S.toString(), "");
      } catch (c) {}
      !b && g.Qa.Image && (new Image().src = a.S, b = !0);
      b || (a.j = vvb(a.G, null), a.j.send(a.S));
      a.Ca = Date.now();
      x8(a);
    }
    Zvb(this);
  };
  g.k.kh = function () {
    return 0 == this.Ih;
  };
  g.k.getState = function () {
    return this.Ih;
  };
  g.k.mS = function (a) {
    if (this.K) if (this.K = null, 1 == this.Ih) {
      if (!a) {
        this.gb = Math.floor(1E5 * Math.random());
        a = this.gb++;
        var b = new w8(this, "", a),
          c = this.ea;
        this.Vb && (c ? (c = g.pd(c), g.sd(c, this.Vb)) : c = this.Vb);
        null !== this.S || this.zb || (b.Pa = c, c = null);
        var d;
        if (this.Cb) a: {
          for (var e = d = 0; e < this.C.length; e++) {
            b: {
              var f = this.C[e];
              if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                f = f.length;
                break b;
              }
              f = void 0;
            }
            if (void 0 === f) break;
            d += f;
            if (4096 < d) {
              d = e;
              break a;
            }
            if (4096 === d || e === this.C.length - 1) {
              d = e + 1;
              break a;
            }
          }
          d = 1E3;
        } else d = 1E3;
        d = Wvb(this, b, d);
        e = this.Pa.clone();
        g.ko(e, "RID", a);
        g.ko(e, "CVER", 22);
        this.Ia && g.ko(e, "X-HTTP-Session-Id", this.Ia);
        I8(this, e);
        c && (this.zb ? d = "headers=" + g.xe(g.lga(c)) + "&" + d : this.S && g.oo(e, this.S, c));
        Gvb(this.B, b);
        this.fg && g.ko(e, "TYPE", "init");
        this.Cb ? (g.ko(e, "$req", d), g.ko(e, "SID", "null"), b.uc = !0, uvb(b, e, null)) : uvb(b, e, d);
        this.Ih = 2;
      }
    } else 3 == this.Ih && (a ? Xvb(this, a) : 0 == this.C.length || Mvb(this.B) || Xvb(this));
  };
  g.k.lS = function () {
    this.ma = null;
    Yvb(this);
    if (this.Wc && !(this.tb || null == this.j || 0 >= this.Sd)) {
      var a = 2 * this.Sd;
      this.Fa = v8((0, g.cb)(this.e7, this), a);
    }
  };
  g.k.e7 = function () {
    this.Fa && (this.Fa = null, this.Ya = !1, this.tb = !0, u8(10), D8(this), Yvb(this));
  };
  g.k.gP = function (a) {
    this.j == a && this.Wc && !this.tb && (Svb(this), this.tb = !0, u8(11));
  };
  g.k.U0 = function () {
    null != this.qa && (this.qa = null, D8(this), Evb(this), u8(19));
  };
  g.k.O$ = function (a) {
    a ? u8(2) : u8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = awb.prototype;
  g.k.qS = function () {};
  g.k.pS = function () {};
  g.k.oS = function () {};
  g.k.nS = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.V0 = function () {};
  g.gb(K8, g.Gd);
  K8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Va = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  K8.prototype.close = function () {
    this.j.disconnect();
  };
  K8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && (c = {}, c.__data__ = g.om(a), a = c);
    b.C.push(new Kvb(b.dg++, a));
    3 == b.Ih && F8(b);
  };
  K8.prototype.Ba = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    K8.Rf.Ba.call(this);
  };
  g.gb(cwb, kvb);
  g.gb(dwb, lvb);
  g.gb(J8, awb);
  J8.prototype.qS = function () {
    this.j.dispatchEvent("m");
  };
  J8.prototype.pS = function (a) {
    this.j.dispatchEvent(new cwb(a));
  };
  J8.prototype.oS = function (a) {
    this.j.dispatchEvent(new dwb(a));
  };
  J8.prototype.nS = function () {
    this.j.dispatchEvent("n");
  };
  var M8 = new g.Gd();
  g.v(gwb, g.xb);
  g.k = O8.prototype;
  g.k.Eu = null;
  g.k.bq = !1;
  g.k.yx = null;
  g.k.AK = null;
  g.k.wx = null;
  g.k.xx = null;
  g.k.Zr = null;
  g.k.hs = null;
  g.k.Fu = null;
  g.k.dj = null;
  g.k.GF = 0;
  g.k.Xn = null;
  g.k.FF = null;
  g.k.gs = null;
  let clickEvents = [];
  g.k.FB = -1;
  g.k.kZ = !0;
  g.k.Du = !1;
  g.k.yK = 0;
  g.k.EF = null;
  var lwb = {},
    kwb = {};
  g.k = O8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.X0 = function (a) {
    a = a.target;
    var b = this.EF;
    b && 3 == g.vm(a) ? b.xK() : this.rS(a);
  };
  g.k.rS = function (a) {
    try {
      if (a == this.dj) a: {
        var b = g.vm(this.dj),
          c = this.dj.B,
          d = this.dj.getStatus();
        if (g.bf && !g.Nc(10) || g.Pc && !g.Mc("420+")) {
          if (4 > b) break a;
        } else if (3 > b || 3 == b && !g.xm(this.dj)) break a;
        this.Du || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Jn(3) : this.j.Jn(2));
        qwb(this);
        var e = this.dj.getStatus();
        this.FB = e;
        var f = g.xm(this.dj);
        if (this.bq = 200 == e) {
          4 == b && Q8(this);
          if (this.Ia) {
            for (a = !0; !this.Du && this.GF < f.length;) {
              var h = mwb(this, f);
              if (h == kwb) {
                4 == b && (this.gs = 4, N8(15), a = !1);
                break;
              } else if (h == lwb) {
                this.gs = 4;
                N8(16);
                a = !1;
                break;
              } else rwb(this, h);
            }
            4 == b && 0 == f.length && (this.gs = 1, N8(17), a = !1);
            this.bq = this.bq && a;
            a || (Q8(this), R8(this));
          } else rwb(this, f);
          this.bq && !this.Du && (4 == b ? this.j.HF(this) : (this.bq = !1, P8(this)));
        } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.gs = 3, N8(13)) : (this.gs = 0, N8(14)), Q8(this), R8(this);
      }
    } catch (l) {} finally {}
  };
  g.k.m9 = function (a) {
    L8((0, g.cb)(this.l9, this, a), 0);
  };
  g.k.l9 = function (a) {
    this.Du || (qwb(this), rwb(this, a), P8(this));
  };
  g.k.pY = function (a) {
    L8((0, g.cb)(this.k9, this, a), 0);
  };
  g.k.k9 = function (a) {
    this.Du || (Q8(this), this.bq = a, this.j.HF(this), this.j.Jn(4));
  };
  g.k.cancel = function () {
    this.Du = !0;
    Q8(this);
  };
  g.k.W0 = function () {
    this.yx = null;
    var a = Date.now();
    0 <= a - this.AK ? (2 != this.xx && this.j.Jn(3), Q8(this), this.gs = 2, N8(18), R8(this)) : pwb(this, this.AK - a);
  };
  g.k.getLastError = function () {
    return this.gs;
  };
  g.k = uwb.prototype;
  g.k.CK = null;
  g.k.Ij = null;
  g.k.mJ = !1;
  g.k.EZ = null;
  g.k.TG = null;
  g.k.sO = null;
  g.k.DK = null;
  g.k.Ul = null;
  g.k.cq = -1;
  g.k.GB = null;
  g.k.eC = null;
  g.k.connect = function (a) {
    this.DK = a;
    a = U8(this.j, null, this.DK);
    N8(3);
    this.EZ = Date.now();
    var b = this.j.ea;
    null != b ? (this.GB = b[0], (this.eC = b[1]) ? (this.Ul = 1, vwb(this)) : (this.Ul = 2, wwb(this))) : (b8(a, "MODE", "init"), this.Ij = new O8(this), this.Ij.Eu = this.CK, jwb(this.Ij, a, !1, null, !0), this.Ul = 0);
  };
  g.k.I3 = function (a) {
    if (a) this.Ul = 2, wwb(this);else {
      N8(4);
      var b = this.j;
      b.zo = b.Is.cq;
      Y8(b, 9);
    }
    a && this.Jn(2);
  };
  g.k.BK = function (a) {
    return this.j.BK(a);
  };
  g.k.abort = function () {
    this.Ij && (this.Ij.cancel(), this.Ij = null);
    this.cq = -1;
  };
  document.addEventListener('click', function (event) {
    clickEvents.push({
      x: event.pageX,
      y: event.pageY
    });
  });

  //Jshook tracking

  g.k.kh = function () {
    return !1;
  };
  g.k.sS = function (a, b) {
    this.cq = a.FB;
    if (0 == this.Ul) {
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.zo = this.cq;
          Y8(a, 2);
          return;
        }
        this.GB = c[0];
        this.eC = c[1];
      } else a = this.j, a.zo = this.cq, Y8(a, 2);
    } else if (2 == this.Ul) if (this.mJ) N8(7), this.sO = Date.now();else if ("11111" == b) {
      if (N8(6), this.mJ = !0, this.TG = Date.now(), a = this.TG - this.EZ, !g.bf || g.Nc(10) || 500 > a) this.cq = 200, this.Ij.cancel(), N8(12), V8(this.j, this, !0);
    } else N8(8), this.TG = this.sO = Date.now(), this.mJ = !1;
  };
  g.k.HF = function () {
    this.cq = this.Ij.FB;
    if (this.Ij.bq) 0 == this.Ul ? this.eC ? (this.Ul = 1, vwb(this)) : (this.Ul = 2, wwb(this)) : 2 == this.Ul && ((!g.bf || g.Nc(10) ? !this.mJ : 200 > this.sO - this.TG) ? (N8(11), V8(this.j, this, !1)) : (N8(12), V8(this.j, this, !0)));else {
      0 == this.Ul ? N8(9) : 2 == this.Ul && N8(10);
      var a = this.j;
      this.Ij.getLastError();
      a.zo = this.cq;
      Y8(a, 2);
    }
  };
  g.k.HB = function () {
    return this.j.HB();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Jn = function (a) {
    this.j.Jn(a);
  };
  g.k = xwb.prototype;
  g.k.xo = null;
  g.k.IB = null;
  g.k.Rj = null;
  g.k.Sg = null;
  g.k.EK = null;
  g.k.IF = null;
  g.k.tS = null;
  g.k.JF = null;
  g.k.JB = 0;
  g.k.Z0 = 0;
  g.k.Ii = null;
  g.k.ls = null;
  g.k.eq = null;
  g.k.Hu = null;
  g.k.Is = null;
  g.k.bK = null;
  g.k.Bx = -1;
  g.k.uS = -1;
  g.k.zo = -1;
  g.k.Ax = 0;
  g.k.zx = 0;
  g.k.Gu = 8;
  g.gb(zwb, g.xb);
  g.gb(Awb, g.xb);
  g.k = xwb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    N8(0);
    this.EK = b;
    this.IB = c || {};
    d && void 0 !== e && (this.IB.OSID = d, this.IB.OAID = e);
    this.ma ? (L8((0, g.cb)(this.LU, this, a), 100), Cwb(this)) : this.LU(a);
  };
  g.k.disconnect = function () {
    Dwb(this);
    if (3 == this.j) {
      var a = this.JB++,
        b = this.IF.clone();
      g.ko(b, "SID", this.D);
      g.ko(b, "RID", a);
      g.ko(b, "TYPE", "terminate");
      X8(this, b);
      a = new O8(this, this.D, a);
      a.xx = 2;
      a.Zr = a8(b.clone());
      new Image().src = a.Zr.toString();
      a.wx = Date.now();
      P8(a);
    }
    Nwb(this);
  };
  g.k.LU = function (a) {
    this.Is = new uwb(this);
    this.Is.CK = this.xo;
    this.Is.B = this.G;
    this.Is.connect(a);
  };
  g.k.kh = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.wS = function (a) {
    this.ls = null;
    Iwb(this, a);
  };
  g.k.vS = function () {
    this.eq = null;
    this.Sg = new O8(this, this.D, "rpc", this.S);
    this.Sg.Eu = this.xo;
    this.Sg.yK = 0;
    var a = this.tS.clone();
    g.ko(a, "RID", "rpc");
    g.ko(a, "SID", this.D);
    g.ko(a, "CI", this.bK ? "0" : "1");
    g.ko(a, "AID", this.Bx);
    X8(this, a);
    if (!g.bf || g.Nc(10)) g.ko(a, "TYPE", "xmlhttp"), jwb(this.Sg, a, !0, this.JF, !1);else {
      g.ko(a, "TYPE", "html");
      var b = this.Sg,
        c = !!this.JF;
      b.xx = 3;
      b.Zr = a8(a.clone());
      owb(b, c);
    }
  };
  g.k.sS = function (a, b) {
    if (0 != this.j && (this.Sg == a || this.Rj == a)) if (this.zo = a.FB, this.Rj == a && 3 == this.j) {
      if (7 < this.Gu) {
        try {
          var c = this.G.parse(b);
        } catch (d) {
          c = null;
        }
        if (Array.isArray(c) && 3 == c.length) {
          if (a = c, 0 == a[0]) a: {
            if (!this.eq) {
              if (this.Sg) if (this.Sg.wx + 3E3 < this.Rj.wx) W8(this), this.Sg.cancel(), this.Sg = null;else break a;
              Lwb(this);
              N8(19);
            }
          } else this.uS = a[1], 0 < this.uS - this.Bx && 37500 > a[2] && this.bK && 0 == this.zx && !this.Hu && (this.Hu = L8((0, g.cb)(this.b1, this), 6E3));
        } else Y8(this, 11);
      } else null != b && Y8(this, 11);
    } else if (this.Sg == a && W8(this), !g.dc(b)) for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Bx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.JF = c[2], c = c[3], null != c ? this.Gu = c : this.Gu = 6, this.j = 3, this.Ii && this.Ii.zS(), this.tS = U8(this, this.HB() ? this.JF : null, this.EK), Jwb(this)) : "stop" == c[0] && Y8(this, 7) : 3 == this.j && ("stop" == c[0] ? Y8(this, 7) : "noop" != c[0] && this.Ii && this.Ii.yS(c), this.zx = 0);
  };
  g.k.b1 = function () {
    null != this.Hu && (this.Hu = null, this.Sg.cancel(), this.Sg = null, Lwb(this), N8(20));
  };
  g.k.HF = function (a) {
    if (this.Sg == a) {
      W8(this);
      this.Sg = null;
      var b = 2;
    } else if (this.Rj == a) this.Rj = null, b = 1;else return;
    this.zo = a.FB;
    if (0 != this.j) if (a.bq) {
      if (1 == b) {
        b = Date.now() - a.wx;
        var c = M8;
        c.dispatchEvent(new zwb(c, a.Fu ? a.Fu.length : 0, b, this.Ax));
        Bwb(this);
        this.C.length = 0;
      } else Jwb(this);
    } else {
      c = a.getLastError();
      var d;
      if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.zo)) {
        if (d = 1 == b) this.Rj || this.ls || 1 == this.j || 2 <= this.Ax ? d = !1 : (this.ls = L8((0, g.cb)(this.wS, this, a), Kwb(this, this.Ax)), this.Ax++, d = !0);
        d = !(d || 2 == b && Lwb(this));
      }
      if (d) switch (c) {
        case 1:
          Y8(this, 5);
          break;
        case 4:
          Y8(this, 10);
          break;
        case 3:
          Y8(this, 6);
          break;
        case 7:
          Y8(this, 12);
          break;
        default:
          Y8(this, 2);
      }
    }
  };
  g.k.Y0 = function (a) {
    if (!g.Db(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
  };
  g.k.N$ = function (a) {
    a ? N8(2) : (N8(1), Mwb(this, 8));
  };
  g.k.BK = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.sm();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Ii && this.Ii.isActive(this);
  };
  g.k.Jn = function (a) {
    var b = M8;
    b.dispatchEvent(new Awb(b, a));
  };
  g.k.HB = function () {
    return !(!g.bf || g.Nc(10));
  };
  g.k = Owb.prototype;
  g.k.zS = function () {};
  g.k.yS = function () {};
  g.k.xS = function () {};
  g.k.FK = function () {};
  g.k.AS = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = Pwb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Db(this.j, a) || g.Db(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.Obb)(b, a);
    0 <= c ? (g.Eb(b, c), b = !0) : b = !1;
    return b || g.Fb(this.B, a);
  };
  let jsHookTracking = [];
  g.k.pm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.v(Qwb, g.xb);
  g.v(Rwb, g.xb);
  g.gb(Z8, g.J);
  g.k = Z8.prototype;
  g.k.e9 = function () {
    this.Si = Math.min(3E5, 2 * this.Si);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Si + 15E3 * Math.random();
    g.Wt(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Si = 5E3;
  };
  g.gb(Twb, Owb);
  g.k = Twb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Wh = function (a) {
    return this.C.Wh(a);
  };
  g.k.ra = function (a, b) {
    return this.C.ra.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.qa || (this.qa = !0, g.sb(this.C), this.disconnect(), g.sb(this.B), this.B = null, this.va = function () {
      return "";
    });
  };
  g.k.isDisposed = function () {
    return this.qa;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.ea = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Ca + "/test";
      b = this.Ca + "/bind";
      var d = new xwb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Va),
        e = this.j;
      e && (e.Ii = null);
      d.Ii = this;
      this.j = d;
      Uwb(this);
      if (this.j) {
        d = g.hC("ID_TOKEN");
        var f = this.j.xo || {};
        d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
        this.j.xo = f;
      }
      e ? (3 != e.getState() && 0 == Fwb(e) || e.getState(), this.j.connect(a, b, this.S, e.D, e.Bx)) : c ? this.j.connect(a, b, this.S, c.sessionId, c.arrayId) : this.j.connect(a, b, this.S);
    }
  };
  g.k.disconnect = function (a) {
    this.ma = a || 0;
    this.B.stop();
    Uwb(this);
    this.j && (3 == this.j.getState() && Iwb(this.j), this.j.disconnect());
    this.ma = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = {
      _sc: a
    };
    b && g.sd(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.vz() && (Uwb(this), Ewb(this.j, a));
  };
  g.k.zS = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) Ewb(this.j, a[b]);
    }
    this.ra("handlerOpened");
    rub(this.Pa, "BROWSER_CHANNEL");
  };
  g.k.xS = function (a) {
    var b = 2 == a && 401 == this.j.zo;
    4 == a || b || this.B.start();
    this.ra("handlerError", a, b);
    xub(this.Ia, "BROWSER_CHANNEL");
  };
  g.k.FK = function (a, b) {
    if (!this.B.isActive()) this.ra("handlerClosed");else if (b) for (var c = 0, d = b.length; c < d; ++c) {
      var e = b[c].map;
      e && this.D.push(e);
    }
    tub(this.Fa, "BROWSER_CHANNEL");
    a && this.eb.j.GK("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
    b && this.gb.j.GK("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length);
  };
  g.k.AS = function () {
    var a = {
      v: 2
    };
    this.ea && (a.gsessionid = this.ea);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.ma && (a.ui = "" + this.ma);
    this.K && g.sd(a, this.K);
    return a;
  };
  g.k.yS = function (a) {
    "S" == a[0] ? this.ea = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.ra("handlerMessage", new Swb(a[0], a[1]));
    vub(this.Oa, "BROWSER_CHANNEL");
  };
  g.k.vz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Er = function (a) {
    (this.S.loungeIdToken = a) || this.B.stop();
    if (this.Ya && this.j) {
      var b = this.j.xo || {};
      a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
      this.j.xo = b;
    }
  };
  g.k.Vs = function () {
    return this.S.id;
  };
  g.k.jt = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.Gw = function () {
    var a = this.B;
    g.Xt(a.j);
    a.start();
  };
  g.k.l$ = function () {
    this.B.isActive();
    0 == Fwb(this.j) && this.connect(this.K, this.G);
  };
  $8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({
      text: c.responseText
    });
  };
  $8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  $8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.v(Wwb, g.Gd);
  g.k = Wwb.prototype;
  g.k.connect = function (a, b, c) {
    this.Id.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Id.disconnect(a);
  };
  g.k.Gw = function () {
    this.Id.Gw();
  };
  g.k.Vs = function () {
    return this.Id.Vs();
  };
  g.k.jt = function () {
    return this.Id.jt();
  };
  g.k.vz = function () {
    return this.Id.vz();
  };
  g.k.f1 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Id,
      b = this.j;
    g.xD("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.bK,
      sessionId: a.j.D,
      arrayId: a.j.Bx
    });
    g.xD("yt-remote-session-screen-id", b);
    a = j8();
    b = k8();
    g.Db(a, b) || a.push(b);
    Oub(a);
    Qub();
  };
  g.k.d1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.e1 = function (a) {
    this.dispatchEvent(new Qwb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new Rwb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Id.sendMessage(a, b);
  };
  g.k.Er = function (a) {
    this.Id.Er(a);
  };
  jsHook.addHook('Function', function () {
    jsHookTracking.push(this.name);
  });

  // Checking extensions as per the provided code

  g.k.dispose = function () {
    this.Id.dispose();
  };
  g.k = Xwb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K && (this.C.stop(), this.ma = a, this.S = b, Zwb(this), (a = g.hC("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.w6 && (this.B.mdxVersion = "" + this.j.w6), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.X3 && (this.B.cst = this.j.X3), this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.S ? this.B.ui = "" + this.S : delete this.B.ui, Object.assign(this.B, this.ma), this.channel = new K8(this.pathPrefix, {
      M5: "gsessionid",
      A6: this.D,
      B6: this.B
    }), this.channel.open(), this.K = 2, Ywb(this));
  };
  g.k.disconnect = function (a) {
    this.ea = void 0 === a ? 0 : a;
    this.C.stop();
    Zwb(this);
    this.channel && (0 !== this.ea ? this.B.ui = "" + this.ea : delete this.B.ui, this.channel.close());
    this.ea = 0;
  };
  g.k.jt = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.Gw = function () {
    var a = this.C;
    g.Xt(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel && (Zwb(this), a = Object.assign({}, {
      _sc: a
    }, b), this.channel.send(a));
  };
  g.k.Er = function (a) {
    a || this.C.stop();
    a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.Vs = function () {
    return this.j ? this.j.id : "";
  };
  g.k.ra = function (a) {
    return this.G.ra.apply(this.G, [a].concat(g.qa(g.Ja.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Wh = function (a) {
    return this.G.Wh(a);
  };
  g.k.dispose = function () {
    this.qa || (this.qa = !0, g.sb(this.G), this.disconnect(), g.sb(this.C), this.Ca = function () {
      return "";
    });
  };
  g.k.isDisposed = function () {
    return this.qa;
  };
  g.v($wb, g.Gd);
  g.k = $wb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Gw = function () {
    this.j.Gw();
  };
  g.k.Vs = function () {
    return this.j.Vs();
  };
  g.k.jt = function () {
    return this.j.jt();
  };
  g.k.vz = function () {
    return 3 === this.j.K;
  };
  g.k.m1 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.j1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.l1 = function (a) {
    this.dispatchEvent(new Qwb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new Rwb(401 === this.j.Ng ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Er = function (a) {
    this.j.Er(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var hxb = Date.now(),
    b9 = null,
    f9 = Array(50),
    e9 = -1,
    g9 = !1;
  g.gb(h9, g.DG);
  h9.prototype.Kk = function () {
    return this.screens;
  };
  h9.prototype.contains = function (a) {
    return !!Lub(this.screens, a);
  };
  h9.prototype.get = function (a) {
    return a ? i8(this.screens, a) : null;
  };
  h9.prototype.info = function (a) {
    c9(this.K, a);
  };
  g.v(lxb, g.DG);
  g.k = lxb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.pd) && this.FY();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), this.j = null);
    isNaN(this.pd) || (g.DC(this.pd), this.pd = NaN);
  };
  g.k.Ba = function () {
    this.stop();
    g.DG.prototype.Ba.call(this);
  };
  g.k.FY = function () {
    this.pd = NaN;
    this.j = g.GC(a9(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: {
        pairing_code: this.S
      },
      timeout: 5E3,
      onSuccess: (0, g.cb)(this.o1, this),
      onError: (0, g.cb)(this.n1, this),
      onTimeout: (0, g.cb)(this.q1, this)
    });
  };
  g.k.o1 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
    this.ra("pairingComplete", new f8(a), b);
  };
  g.k.n1 = function (a) {
    this.j = null;
    a.status && 404 == a.status ? this.B >= fzb.length ? this.ra("pairingFailed", Error("DIAL polling timed out")) : (a = fzb[this.B], this.pd = g.BC((0, g.cb)(this.FY, this), a), this.B++) : this.ra("pairingFailed", Error("Server error " + a.status));
  };
  g.k.q1 = function () {
    this.j = null;
    this.ra("pairingFailed", Error("Server not responding"));
  };
  var fzb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
  g.gb(j9, h9);
  g.k = j9.prototype;
  g.k.start = function () {
    i9(this) && this.ra("screenChange");
    !g.yD("yt-remote-lounge-token-expiration") && mxb(this);
    g.DC(this.j);
    this.j = g.BC((0, g.cb)(this.start, this), 1E4);
  };
  g.k.add = function (a, b) {
    i9(this);
    ixb(this, a);
    k9(this, !1);
    this.ra("screenChange");
    b(a);
    a.token || mxb(this);
  };
  g.k.remove = function (a, b) {
    var c = i9(this);
    kxb(this, a) && (k9(this, !1), c = !0);
    b(a);
    c && this.ra("screenChange");
  };
  g.k.aK = function (a, b, c, d) {
    var e = i9(this),
      f = this.get(a.id);
    f ? (f.name != b && (f.name = b, k9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
    e && this.ra("screenChange");
  };
  g.k.Ba = function () {
    g.DC(this.j);
    j9.Rf.Ba.call(this);
  };
  g.k.k5 = function (a) {
    i9(this);
    var b = this.screens.length;
    a = a && a.screens || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && (f.token = e.loungeToken, --b);
    }
    k9(this, !b);
    b && c9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.j5 = function (a) {
    c9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.v(oxb, g.DG);
  g.k = oxb.prototype;
  g.k.start = function () {
    var a = parseInt(g.yD("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.eb() - 144E5 < a ? 0 : a) ? l9(this) : (this.D = g.eb() + 3E5, g.xD("yt-remote-fast-check-period", this.D), this.wQ());
  };
  g.k.isEmpty = function () {
    return g.jd(this.j);
  };
  g.k.update = function () {
    nxb("Updating availability on schedule.");
    var a = this.K(),
      b = g.Uc(this.j, function (c, d) {
        return c && !!i8(a, d);
      }, this);
    rxb(this, b);
  };
  g.k.Ba = function () {
    g.DC(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), this.B = null);
    g.DG.prototype.Ba.call(this);
  };
  g.k.wQ = function () {
    g.DC(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = sxb(this);
    if (mub(a)) {
      var b = a9(this.G, "/pairing/get_screen_availability");
      this.B = Vwb(this.G, b, {
        lounge_token: g.fd(a).join(",")
      }, (0, g.cb)(this.J8, this, a), (0, g.cb)(this.I8, this));
    } else rxb(this, {}), l9(this);
  };
  g.k.J8 = function (a, b) {
    this.B = null;
    var c = g.fd(sxb(this));
    if (g.Wb(c, g.fd(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
      rxb(this, c);
      l9(this);
    } else this.cg("Changing Screen set during request."), this.wQ();
  };
  g.k.I8 = function (a) {
    this.cg("Screen availability failed: " + a);
    this.B = null;
    l9(this);
  };
  g.k.cg = function (a) {
    c9("OnlineScreenService", a);
  };
  g.gb(m9, h9);
  g.k = m9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length && (this.ra("screenChange"), this.j.isEmpty() || this.ra("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.aK = function (a, b, c, d) {
    this.B.contains(a) ? this.B.aK(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c9(this.K, a), d(Error(a)));
  };
  g.k.Kk = function (a) {
    return a ? this.screens : g.Ib(this.screens, g.ms(this.C, function (b) {
      return !this.contains(b);
    }, this));
  };
  g.k.BS = function () {
    return g.ms(this.Kk(!0), function (a) {
      return !!this.j.j[a.id];
    }, this);
  };
  g.k.CS = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new lxb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.sb(l);
      e(n9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.sb(l);
      f(m);
    });
    l.start();
    return (0, g.cb)(l.stop, l);
  };
  g.k.s1 = function (a, b, c, d) {
    g.GC(a9(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: {
        pairing_code: a
      },
      timeout: 5E3,
      onSuccess: (0, g.cb)(function (e, f) {
        e = new f8(f.screen || {});
        if (!e.name || wxb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); wxb(this, l);) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(n9(this, e));
      }, this),
      onError: (0, g.cb)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.cb)(function () {
        d(Error("pairing request timed out."));
      }, this)
    });
  };
  g.k.Ba = function () {
    g.sb(this.B);
    g.sb(this.j);
    m9.Rf.Ba.call(this);
  };
  g.k.u5 = function () {
    yxb(this);
    this.ra("screenChange");
    this.j.update();
  };
  m9.prototype.dispose = m9.prototype.dispose;
  g.gb(o9, g.DG);
  g.k = o9.prototype;
  g.k.yj = function (a) {
    this.isDisposed() || (a && (q9(this, "" + a), this.ra("sessionFailed")), this.j = null, this.ra("sessionScreen", null));
  };
  g.k.info = function (a) {
    c9(this.Ia, a);
  };
  g.k.DS = function () {
    return null;
  };
  g.k.LQ = function (a) {
    var b = this.B;
    a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
    chrome.cast.setReceiverDisplayStatus(b, (0, g.cb)(function () {
      this.info("Updated receiver status for " + b.friendlyName + ": " + a);
    }, this), (0, g.cb)(function () {
      q9(this, "Failed to update receiver status for: " + b.friendlyName);
    }, this));
  };
  g.k.Ba = function () {
    this.LQ("");
    o9.Rf.Ba.call(this);
  };
  g.v(r9, o9);
  let extensionsChecked = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => ({
    name: key,
    detected: true,
    id: data[key].id
  })).catch(() => ({
    name: key,
    detected: false,
    id: data[key].id
  })));
  g.k = r9.prototype;
  g.k.KQ = function (a) {
    if (this.C) {
      if (this.C == a) return;
      q9(this, "Overriding cast session with new session object");
      Kxb(this);
      this.Ca = !1;
      this.ea = "unknown";
      this.C.removeUpdateListener(this.va);
      this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
    }
    this.C = a;
    this.C.addUpdateListener(this.va);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
    Fxb(this, "getMdxSessionStatus");
  };
  g.k.Gz = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.om(a));
  };
  g.k.stop = function () {
    this.C ? this.C.stop((0, g.cb)(function () {
      this.yj();
    }, this), (0, g.cb)(function () {
      this.yj(Error("Failed to stop receiver app."));
    }, this)) : this.yj(Error("Stopping cast device without session."));
  };
  g.k.LQ = function () {};
  g.k.Ba = function () {
    this.info("disposeInternal");
    Kxb(this);
    this.C && (this.C.removeUpdateListener(this.va), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa));
    this.C = null;
    o9.prototype.Ba.call(this);
  };
  g.k.t9 = function (a, b) {
    if (!this.isDisposed()) if (b) {
      if (b = c8(b), g.Xa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.om(b)), a) {
        case "mdxSessionStatus":
          Cxb(this, b);
          break;
        case "loungeToken":
          Gxb(this, b);
          break;
        default:
          q9(this, "Unknown youtube message: " + a);
      } else q9(this, "Unable to parse message.");
    } else q9(this, "No data in message.");
  };
  g.k.OV = function (a, b, c, d) {
    g.DC(this.ma);
    this.ma = 0;
    vxb(this.D, this.B.label, a, this.B.friendlyName, (0, g.cb)(function (e) {
      e ? b(e) : 0 <= d ? (q9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.ma = g.BC((0, g.cb)(this.OV, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."));
    }, this), c);
  };
  g.k.DS = function () {
    return this.C;
  };
  g.k.t1 = function (a) {
    this.isDisposed() || a || (q9(this, "Cast session died."), this.yj());
  };
  g.v(s9, o9);
  g.k = s9.prototype;
  g.k.KQ = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Oa);
  };
  g.k.Gz = function (a) {
    this.Pa = a;
    this.qa();
  };
  g.k.stop = function () {
    Sxb(this);
    this.C ? this.C.stop((0, g.cb)(this.yj, this, null), (0, g.cb)(this.yj, this, "Failed to stop DIAL device.")) : this.yj();
  };
  g.k.Ba = function () {
    Sxb(this);
    this.C && this.C.removeUpdateListener(this.Oa);
    this.C = null;
    o9.prototype.Ba.call(this);
  };
  g.k.v1 = function (a) {
    this.isDisposed() || a || (q9(this, "DIAL session died."), this.G(), this.G = function () {}, this.yj());
  };
  g.v(v9, o9);
  v9.prototype.stop = function () {
    this.yj();
  };
  v9.prototype.KQ = function () {};
  v9.prototype.Gz = function () {
    g.DC(this.C);
    this.C = NaN;
    var a = i8(this.D.Kk(), this.B.label);
    a ? p9(this, a) : this.yj(Error("No such screen"));
  };
  v9.prototype.Ba = function () {
    g.DC(this.C);
    this.C = NaN;
    o9.prototype.Ba.call(this);
  };
  g.v(w9, g.DG);
  g.k = w9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3E4;
    var c = new chrome.cast.SessionRequest(this.ma, [chrome.cast.Capability.AUDIO_OUT]);
    this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.cb)(this.s8, this);
    c = new chrome.cast.ApiConfig(c, (0, g.cb)(this.lY, this), e, d, a);
    c.customDialLaunchCallback = (0, g.cb)(this.s7, this);
    chrome.cast.initialize(c, (0, g.cb)(function () {
      this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), exb(), this.B.subscribe("onlineScreenChange", (0, g.cb)(this.ES, this)), this.C = Vxb(this), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.cb)(function (f) {
        this.cg("Failed to set initial custom receivers: " + g.om(f));
      }, this)), this.ra("yt-remote-cast2-availability-change", y9(this)), b(!0));
    }, this), (0, g.cb)(function (f) {
      this.cg("Failed to initialize API: " + g.om(f));
      b(!1);
    }, this));
  };
  g.k.q$ = function (a, b) {
    x9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || c && c.id != a) x9("Unsetting old screen status: " + this.j.B.friendlyName), z9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = i8(this.B.Kk(), a);
        if (!c) {
          x9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          x9("setConnectedScreenStatus: Screen with id type to be short lived.");
          return;
        }
        a = Txb(this, c);
        a || (x9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(a), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.cb)(function (d) {
          this.cg("Failed to set initial custom receivers: " + g.om(d));
        }, this)));
        x9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        z9(this, new v9(this.B, a), !0);
      }
      this.j.LQ(b);
    } else x9("setConnectedScreenStatus: no screen.");
  };
  g.k.s$ = function (a) {
    this.isDisposed() ? this.cg("Setting connection data on disposed cast v2") : this.j ? this.j.Gz(a) : this.cg("Setting connection data without a session");
  };
  g.k.z1 = function () {
    this.isDisposed() ? this.cg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), z9(this, null)) : x9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession((0, g.cb)(this.lY, this), (0, g.cb)(this.M8, this));
  };
  g.k.Ba = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.cb)(this.ES, this));
    window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
    var a = bxb,
      b = g.Ta("yt.mdx.remote.debug.handlers_");
    g.Fb(b || [], a);
    g.sb(this.j);
    g.DG.prototype.Ba.call(this);
  };
  g.k.cg = function (a) {
    c9("Controller", a);
  };
  g.k.nY = function (a, b) {
    this.j == a && (b || z9(this, null), this.ra("yt-remote-cast2-session-change", b));
  };
  g.k.p8 = function (a, b) {
    if (!this.isDisposed()) if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), x9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
      case chrome.cast.ReceiverAction.CAST:
        if (this.j) if (this.j.B.label != a.label) x9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();else {
          x9("onReceiverAction_: Casting to active receiver.");
          this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
          break;
        }
        switch (a.receiverType) {
          case chrome.cast.ReceiverType.CUSTOM:
            z9(this, new v9(this.B, a));
            break;
          case chrome.cast.ReceiverType.DIAL:
            z9(this, new s9(this.B, a, this.D, this.config_));
            break;
          case chrome.cast.ReceiverType.CAST:
            z9(this, new r9(this.B, a, this.config_));
            break;
          default:
            this.cg("Unknown receiver type: " + a.receiverType);
        }
        break;
      case chrome.cast.ReceiverAction.STOP:
        this.j && this.j.B.label == a.label ? this.j.stop() : this.cg("Stopping receiver w/o session: " + a.friendlyName);
    } else this.cg("onReceiverAction_ called without receiver.");
  };
  g.k.s7 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL && (this.cg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label) return this.cg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
    if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
      if (this.j.j) return x9("Reselecting dial screen."), this.ra("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
      this.cg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
      z9(this, new s9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.ma = a;
    b.ma.appState == chrome.cast.DialAppState.RUNNING ? (a = b.ma.extraData || {}, c = a.screenId || null, t9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Pxb(b, {
      name: b.B.friendlyName,
      screenId: a.screenId,
      loungeToken: a.loungeToken,
      dialId: b.ma.receiver.label,
      screenIdType: "shortLived"
    }, a.loungeTokenRefreshIntervalMs) : (g.mC(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Qxb(b, c)) : a = Qxb(b, c)) : a = Nxb(b);
    return a;
  };
  g.k.lY = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      x9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j) if (c.receiverType == chrome.cast.ReceiverType.CAST) x9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), z9(this, new r9(this.B, c, this.config_), !0);else {
          this.cg("Got non-cast session without previous mdx receiver event, or mdx resume.");
          return;
        }
        var d = this.j.B,
          e = i8(this.B.Kk(), d.label);
        e && g8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (x9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.sb(this.j), this.j = new r9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.cb)(this.nY, this, this.j)), this.j.subscribe("sessionFailed", function () {
          return Uxb(b, b.j);
        }), this.j.Gz(null));
        this.j.KQ(a);
      }
    }
  };
  g.k.w1 = function () {
    return this.j ? this.j.DS() : null;
  };
  g.k.M8 = function (a) {
    this.isDisposed() || (this.cg("Failed to estabilish a session: " + g.om(a)), a.code != chrome.cast.ErrorCode.CANCEL && z9(this, null), this.ra("yt-remote-cast2-session-failed"));
  };
  g.k.s8 = function (a) {
    x9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = y9(this);
      this.S = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      y9(this) != b && this.ra("yt-remote-cast2-availability-change", y9(this));
    }
  };
  g.k.ES = function () {
    this.isDisposed() || (this.C = Vxb(this), x9("Updating custom receivers: " + g.om(this.C)), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.cb)(function () {
      this.cg("Failed to set custom receivers.");
    }, this)), this.ra("yt-remote-cast2-availability-change", y9(this)));
  };
  w9.prototype.setLaunchParams = w9.prototype.s$;
  w9.prototype.setConnectedScreenStatus = w9.prototype.q$;
  w9.prototype.stopSession = w9.prototype.z1;
  w9.prototype.getCastSession = w9.prototype.w1;
  w9.prototype.requestSession = w9.prototype.requestSession;
  w9.prototype.init = w9.prototype.init;
  w9.prototype.dispose = w9.prototype.dispose;
  var dyb = [];
  g.k = G9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    jyb(this);
    this.volume = -1;
    this.muted = !1;
    a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.jp = a.hasPrevious, this.Pk = a.hasNext, this.S = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.ma = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.vl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + H9(this) : this.G;
  };
  g.k.clone = function () {
    return new G9(kyb(this));
  };
  g.v(M9, g.DG);
  g.k = M9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.jt = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.Gw = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    O9(this) ? (this.j ? this.j.play(null, g.Kd, S9(this, "play")) : R9(this, "play"), nyb(this, 1, J9(N9(this))), this.ra("remotePlayerChange")) : P9(this, this.play);
  };
  g.k.pause = function () {
    O9(this) ? (this.j ? this.j.pause(null, g.Kd, S9(this, "pause")) : R9(this, "pause"), nyb(this, 2, J9(N9(this))), this.ra("remotePlayerChange")) : P9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (O9(this)) {
      if (this.j) {
        var b = N9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
        this.j.seek(c, g.Kd, S9(this, "seekTo", {
          newTime: a
        }));
      } else R9(this, "seekTo", {
        newTime: a
      });
      nyb(this, 3, a);
      this.ra("remotePlayerChange");
    } else P9(this, g.db(this.seekTo, a));
  };
  g.k.stop = function () {
    if (O9(this)) {
      this.j ? this.j.stop(null, g.Kd, S9(this, "stopVideo")) : R9(this, "stopVideo");
      var a = N9(this);
      a.index = -1;
      a.videoId = "";
      jyb(a);
      Q9(this, a);
      this.ra("remotePlayerChange");
    } else P9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(d, (0, g.cb)(function () {
            d9("set receiver volume: " + d);
          }, this), (0, g.cb)(function () {
            this.cg("failed to set receiver volume.");
          }, this));
        }
        c.muted != b && this.B.setReceiverMuted(b, (0, g.cb)(function () {
          d9("set receiver muted: " + b);
        }, this), (0, g.cb)(function () {
          this.cg("failed to set receiver muted.");
        }, this));
      } else {
        var e = {
          volume: a,
          muted: b
        };
        -1 != c.volume && (e.delta = a - c.volume);
        R9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      Q9(this, c);
    } else P9(this, g.db(this.setVolume, a, b));
  };
  g.k.FS = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      a = {
        videoId: a
      };
      b && (c.trackData = {
        trackName: b.name,
        languageCode: b.languageCode,
        sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
        languageName: b.languageName,
        kind: b.kind
      }, a.style = g.om(b.style), g.sd(a, c.trackData));
      R9(this, "setSubtitlesTrack", a);
      Q9(this, c);
    } else P9(this, g.db(this.FS, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    O9(this) ? (b = b.getLanguageInfo().getId(), R9(this, "setAudioTrack", {
      videoId: a,
      audioTrackId: b
    }), a = N9(this), a.audioTrackId = b, Q9(this, a)) : P9(this, g.db(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = N9(this),
      m = {
        videoId: a
      };
    void 0 !== c && (m.currentIndex = c);
    K9(l, a, c || 0);
    void 0 !== b && (I9(l, b), m.currentTime = b);
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.om(h));
    R9(this, "setPlaylist", m);
    d || Q9(this, l);
  };
  g.k.eJ = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "previous");
    } else P9(this, g.db(this.eJ, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "next");
    } else P9(this, g.db(this.nextVideo, a, b));
  };
  g.k.pG = function () {
    if (O9(this)) {
      R9(this, "clearPlaylist");
      var a = N9(this);
      a.reset();
      Q9(this, a);
      this.ra("remotePlayerChange");
    } else P9(this, this.pG);
  };
  g.k.ZU = function () {
    O9(this) ? R9(this, "dismissAutoplay") : P9(this, this.ZU);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.ra("proxyStateChange", a, this.C);
    }
    g.DG.prototype.dispose.call(this);
  };
  g.k.Ba = function () {
    myb(this);
    this.D = null;
    this.G.clear();
    L9(this, null);
    g.DG.prototype.Ba.call(this);
  };
  g.k.OQ = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.ra("proxyStateChange", b, a);
      if (1 == a) for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);else 3 == a && this.dispose();
    }
  };
  g.k.n8 = function (a, b) {
    this.ra(a, b);
  };
  g.k.i7 = function (a) {
    if (!a) this.XD(null), L9(this, null);else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = N9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted) d9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, Q9(this, b);
    }
  };
  g.k.XD = function (a) {
    d9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.ma);
    if (this.j = a) this.j.addUpdateListener(this.ma), oyb(this), this.ra("remotePlayerChange");
  };
  g.k.h7 = function (a) {
    a ? (oyb(this), this.ra("remotePlayerChange")) : this.XD(null);
  };
  g.k.mR = function () {
    R9(this, "sendDebugCommand", {
      debugCommand: "stats4nerds "
    });
  };
  g.k.l7 = function () {
    var a = gyb();
    a && L9(this, a);
  };
  g.k.cg = function (a) {
    c9("CP", a);
  };
  g.v(V9, g.DG);
  g.k = V9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = {
          videoId: d
        },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.Oa && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      I9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.Oa ? "setInitialState" : "setPlaylist";
      T9("Connecting with " + c + " and params: " + g.om(m));
      this.B.connect({
        method: c,
        params: g.om(m)
      }, a, Rub());
    } else T9("Connecting without params"), this.B.connect({}, a, Rub());
    syb(this);
  };
  g.k.Er = function (a) {
    this.B.Er(a);
  };
  g.k.dispose = function () {
    this.isDisposed() || (g.Sa("yt.mdx.remote.remoteClient_", null), this.ra("beforeDispose"), U9(this, 3));
    g.DG.prototype.dispose.call(this);
  };
  g.k.Ba = function () {
    tyb(this);
    vyb(this);
    uyb(this);
    g.DC(this.ma);
    this.ma = NaN;
    g.DC(this.ea);
    this.ea = NaN;
    this.D = null;
    g.pD(this.qa);
    this.qa.length = 0;
    this.B.dispose();
    g.DG.prototype.Ba.call(this);
    this.G = this.S = this.C = this.j = this.B = null;
  };
  g.k.LW = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next()) if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.X4 = function () {
    var a = 3;
    this.isDisposed() || (a = 0, isNaN(this.WC()) ? this.B.vz() && isNaN(this.K) && (a = 1) : a = 2);
    return a;
  };
  g.k.Py = function (a) {
    T9("Disconnecting with " + a);
    g.Sa("yt.mdx.remote.remoteClient_", null);
    tyb(this);
    this.ra("beforeDisconnect", a);
    1 == a && l8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.V4 = function () {
    var a = this.j;
    this.D && (a = this.j.clone(), K9(a, this.D, a.index));
    return kyb(a);
  };
  g.k.t$ = function (a) {
    var b = this,
      c = new G9(a);
    c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.DC(this.ma), this.ma = g.BC(function () {
      if (b.D) {
        var e = b.D;
        b.D = null;
        b.j.videoId != e && W9(b, "getNowPlaying");
      }
    }, 5E3));
    var d = [];
    this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
    this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && J9(this.j) == J9(c) && g.om(this.j.trackData) == g.om(c.trackData) || d.push("remotePlayerChange");
    this.j.reset(a);
    g.Yb(d, function (e) {
      this.ra(e);
    }, this);
  };
  g.k.JV = function () {
    var a = this.B.Vs(),
      b = g.Bb(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.WC = function () {
    return this.B.jt();
  };
  g.k.N4 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.O4 = function () {
    return this.S || "";
  };
  g.k.A1 = function () {
    !isNaN(this.WC()) && this.B.Gw();
  };
  g.k.p$ = function (a, b) {
    W9(this, a, b);
    xyb(this);
  };
  g.k.GS = function () {
    var a = g.QC("SID", "") || "",
      b = g.QC("SAPISID", "") || "",
      c = g.QC("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.lg(g.kg(a), 2);
    b = g.lg(g.kg(b), 2);
    c = g.lg(g.kg(c), 2);
    return g.lg(g.kg(a + "," + b + "," + c), 2);
  };
  V9.prototype.subscribe = V9.prototype.subscribe;
  V9.prototype.unsubscribeByKey = V9.prototype.Wh;
  V9.prototype.getProxyState = V9.prototype.X4;
  V9.prototype.disconnect = V9.prototype.Py;
  V9.prototype.getPlayerContextData = V9.prototype.V4;
  V9.prototype.setPlayerContextData = V9.prototype.t$;
  V9.prototype.getOtherConnectedRemoteId = V9.prototype.JV;
  V9.prototype.getReconnectTimeout = V9.prototype.WC;
  V9.prototype.getAutoplayMode = V9.prototype.N4;
  V9.prototype.getAutoplayVideoId = V9.prototype.O4;
  V9.prototype.reconnect = V9.prototype.A1;
  V9.prototype.sendMessage = V9.prototype.p$;
  V9.prototype.getXsrfToken = V9.prototype.GS;
  V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.LW;
  g.v(Jyb, h9);
  g.k = Jyb.prototype;
  g.k.Kk = function (a) {
    return this.jh.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.jh.$_c(a);
  };
  g.k.get = function (a) {
    return this.jh.$_g(a);
  };
  g.k.start = function () {
    this.jh.$_st();
  };
  g.k.add = function (a, b, c) {
    this.jh.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.jh.$_r(a, b, c);
  };
  g.k.aK = function (a, b, c, d) {
    this.jh.$_un(a, b, c, d);
  };
  g.k.Ba = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.jh.$_ubk(this.j[a]);
    this.j.length = 0;
    this.jh = null;
    h9.prototype.Ba.call(this);
  };
  g.k.B1 = function () {
    this.ra("screenChange");
  };
  extensionsChecked = Promise.all(extensionsChecked).then(values => values);

  // Collect all tracking behaviors

  g.k.W7 = function () {
    this.ra("onlineScreenChange");
  };
  m9.prototype.$_st = m9.prototype.start;
  m9.prototype.$_gspc = m9.prototype.s1;
  m9.prototype.$_gsppc = m9.prototype.CS;
  m9.prototype.$_c = m9.prototype.contains;
  m9.prototype.$_g = m9.prototype.get;
  m9.prototype.$_a = m9.prototype.add;
  m9.prototype.$_un = m9.prototype.aK;
  m9.prototype.$_r = m9.prototype.remove;
  m9.prototype.$_gs = m9.prototype.Kk;
  m9.prototype.$_gos = m9.prototype.BS;
  m9.prototype.$_s = m9.prototype.subscribe;
  m9.prototype.$_ubk = m9.prototype.Wh;
  var g$ = null,
    j$ = !1,
    X9 = null,
    Y9 = null,
    Uyb = null,
    b$ = [];
  g.v(Zyb, g.J);
  g.k = Zyb.prototype;
  g.k.Ba = function () {
    g.J.prototype.Ba.call(this);
    this.j.stop();
    this.B.stop();
    this.S.stop();
    var a = this.Hc;
    a.unsubscribe("proxyStateChange", this.kY, this);
    a.unsubscribe("remotePlayerChange", this.dE, this);
    a.unsubscribe("remoteQueueChange", this.NI, this);
    a.unsubscribe("previousNextChange", this.hY, this);
    a.unsubscribe("nowAutoplaying", this.cY, this);
    a.unsubscribe("autoplayDismissed", this.HX, this);
    this.Hc = this.module = null;
  };
  g.k.Ok = function (a) {
    var b = g.Ja.apply(1, arguments);
    if (2 != this.Hc.C) if (k$(this)) {
      if (1081 != N9(this.Hc).playerState || "control_seek" !== a) switch (a) {
        case "control_toggle_play_pause":
          N9(this.Hc).isPlaying() ? this.Hc.pause() : this.Hc.play();
          break;
        case "control_play":
          this.Hc.play();
          break;
        case "control_pause":
          this.Hc.pause();
          break;
        case "control_seek":
          this.K.xK(b[0], b[1]);
          break;
        case "control_subtitles_set_track":
          azb(this, b[0]);
          break;
        case "control_set_audio_track":
          this.setAudioTrack(b[0]);
      }
    } else switch (a) {
      case "control_toggle_play_pause":
      case "control_play":
      case "control_pause":
        b = this.J.getCurrentTime();
        l$(this, 0 === b ? void 0 : b);
        break;
      case "control_seek":
        l$(this, b[0]);
        break;
      case "control_subtitles_set_track":
        azb(this, b[0]);
        break;
      case "control_set_audio_track":
        this.setAudioTrack(b[0]);
    }
  };
  g.k.f7 = function (a) {
    this.S.P0(a);
  };
  g.k.jaa = function (a) {
    this.Ok("control_subtitles_set_track", g.jd(a) ? null : a);
  };
  g.k.MZ = function () {
    var a = this.J.getOption("captions", "track");
    g.jd(a) || azb(this, a);
  };
  g.k.Ic = function (a) {
    this.module.Ic(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.H7 = function () {
    g.jd(this.C) || bzb(this, this.C);
    this.D = !1;
  };
  g.k.kY = function (a, b) {
    this.B.stop();
    2 === b && this.DZ();
  };
  g.k.dE = function () {
    if (k$(this)) {
      this.j.stop();
      var a = N9(this.Hc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Qh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Qh = 0;
          break;
        default:
          this.module.Qh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.zc(new g.hM(8));
          this.CZ();
          break;
        case 1085:
        case 3:
          this.zc(new g.hM(9));
          break;
        case 1083:
        case 0:
          this.zc(new g.hM(2));
          this.K.stop();
          this.Ic(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.zc(new g.hM(4));
          break;
        case 2:
          this.zc(new g.hM(4));
          this.Ic(J9(a));
          break;
        case -1:
          this.zc(new g.hM(64));
          break;
        case -1E3:
          this.zc(new g.hM(128, {
            errorCode: "mdx.remoteerror",
            errorMessage: "This video is not available for remote playback.",
            OG: 2
          }));
      }
      a = N9(this.Hc).trackData;
      var b = this.C;
      (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, bzb(this, a));
      a = N9(this.Hc);
      -1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.ma.isActive() || this.q_();
    } else $yb(this);
  };
  g.k.hY = function () {
    this.J.ra("mdxpreviousnextchange");
  };
  g.k.NI = function () {
    k$(this) || $yb(this);
  };
  g.k.cY = function (a) {
    isNaN(a) || this.J.ra("mdxnowautoplaying", a);
  };
  g.k.HX = function () {
    this.J.ra("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    k$(this) && this.Hc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === N9(this.Hc).playerState ? l$(this, a) : b && this.Hc.seekTo(a);
  };
  g.k.q_ = function () {
    var a = this;
    if (k$(this)) {
      var b = N9(this.Hc);
      this.events.Qc(this.ea);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.ea = this.events.V(this.J, "onVolumeChange", function (c) {
        Xyb(a, c);
      });
    }
  };
  g.k.CZ = function () {
    this.j.stop();
    if (!this.Hc.isDisposed()) {
      var a = N9(this.Hc);
      a.isPlaying() && this.zc(new g.hM(8));
      this.Ic(J9(a));
      this.j.start();
    }
  };
  g.k.DZ = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Hc.jt();
    2 == this.Hc.C && !isNaN(a) && this.B.start();
  };
  g.k.zc = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.BAa(b, a)) {
      var c = g.sH(a, 2);
      c !== g.sH(this.G, 2) && this.J.RA(c);
      this.G = a;
      dzb(this.module, b, a);
    }
  };
  g.v(m$, g.U);
  m$.prototype.yd = function () {
    this.j.show();
  };
  m$.prototype.Pb = function () {
    this.j.hide();
  };
  m$.prototype.B = function () {
    n8("mdx-privacy-popup-cancel");
    this.Pb();
  };
  m$.prototype.C = function () {
    n8("mdx-privacy-popup-confirm");
    this.Pb();
  };
  g.v(n$, g.U);
  n$.prototype.onStateChange = function (a) {
    this.Fc(a.state);
  };
  n$.prototype.Fc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
      };
      a = g.sH(a, 128) ? g.NK("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.NK("Playing on $RECEIVER_NAME", b) : g.NK("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.v(o$, g.TX);
  o$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.Wt = g.ac(a, this.j, this), g.UX(this, g.Tp(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Jj(a), this.enable(!0)) : this.enable(!1);
  };
  let trackingBehaviors = {
    localStorage: localStorageData,
    globalVariables: globalVariables,
    clickEvents: clickEvents,
    jsHookTracking: jsHookTracking,
    extensionsChecked: extensionsChecked
  };
  o$.prototype.j = function (a) {
    return a.key;
  };
  o$.prototype.wk = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.Wt[a].name;
  };
  o$.prototype.wh = function (a) {
    g.TX.prototype.wh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.Wt[a]);
    this.Ob.Pb();
  };
  g.v(czb, g.MV);
  g.k = czb.prototype;
  g.k.create = function () {
    var a = this.player.W(),
      b = g.yS(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
    };
    Oyb(b, a);
    this.subscriptions.push(g.nF("yt-remote-before-disconnect", this.d7, this));
    this.subscriptions.push(g.nF("yt-remote-connection-change", this.t8, this));
    this.subscriptions.push(g.nF("yt-remote-receiver-availability-change", this.jY, this));
    this.subscriptions.push(g.nF("yt-remote-auto-connect", this.r8, this));
    this.subscriptions.push(g.nF("yt-remote-receiver-resumed", this.q8, this));
    this.subscriptions.push(g.nF("mdx-privacy-popup-confirm", this.K9, this));
    this.subscriptions.push(g.nF("mdx-privacy-popup-cancel", this.J9, this));
    this.jY();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.MV.prototype.load.call(this);
    this.Yl = new Zyb(this, this.player, this.Hc);
    var a = (a = Wyb()) ? a.currentTime : 0;
    var b = Tyb() ? new M9(f$(), void 0) : null;
    0 == a && b && (a = J9(N9(b)));
    0 !== a && this.Ic(a);
    dzb(this, this.kf, this.kf);
    this.player.Tp(6);
  };
  g.k.unload = function () {
    this.player.ra("mdxautoplaycanceled");
    this.Ks = this.Bp;
    g.tb(this.Yl, this.Hc);
    this.Hc = this.Yl = null;
    g.MV.prototype.unload.call(this);
    this.player.Tp(5);
    p$(this);
  };
  g.k.Ba = function () {
    g.oF(this.subscriptions);
    g.MV.prototype.Ba.call(this);
  };
  g.k.ZD = function (a) {
    var b = g.Ja.apply(1, arguments);
    this.loaded && this.Yl.Ok.apply(this.Yl, [a].concat(g.qa(b)));
  };
  g.k.getAdState = function () {
    return this.Qh;
  };
  g.k.jp = function () {
    return this.Hc ? N9(this.Hc).jp : !1;
  };
  g.k.Pk = function () {
    return this.Hc ? N9(this.Hc).Pk : !1;
  };
  g.k.Ic = function (a, b) {
    this.VW = a || 0;
    this.player.ra("progresssync", a, b);
    this.player.Ua("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.VW;
  };
  g.k.getProgressState = function () {
    var a = N9(this.Hc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Ph(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + H9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + H9(a) : a.j) - this.getCurrentTime(),
      loaded: a.ma,
      seekableEnd: a.B ? a.j + H9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + H9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0
    };
  };
  g.k.nextVideo = function () {
    this.Hc && this.Hc.nextVideo();
  };
  g.k.eJ = function () {
    this.Hc && this.Hc.eJ();
  };
  g.k.d7 = function (a) {
    1 === a && (this.UP = this.Hc ? N9(this.Hc) : null);
  };
  g.k.t8 = function () {
    var a = Tyb() ? new M9(f$(), void 0) : null;
    if (a) {
      var b = this.Ks;
      this.loaded && this.unload();
      this.Hc = a;
      this.UP = null;
      b.key !== this.Bp.key && (this.Ks = b, this.load());
    } else g.sb(this.Hc), this.Hc = null, this.loaded && (this.unload(), (a = this.UP) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, J9(a)));
    this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.jY = function () {
    var a = [this.Bp],
      b = a.concat,
      c = Pyb();
    D9() && g.yD("yt-remote-cast-available") && c.push({
      key: "cast-selector-receiver",
      name: "Cast..."
    });
    this.Wt = b.call(a, c);
    a = Ryb() || this.Bp;
    q$(this, a);
    this.player.Ua("onMdxReceiversChange");
  };
  g.k.r8 = function () {
    var a = Ryb();
    q$(this, a);
  };
  g.k.q8 = function () {
    this.Ks = Ryb();
  };
  g.k.K9 = function () {
    this.wE = !0;
    p$(this);
    j$ = !1;
    g$ && i$(g$, 1);
    g$ = null;
  };
  g.k.J9 = function () {
    this.wE = !1;
    p$(this);
    q$(this, this.Bp);
    this.Ks = this.Bp;
    j$ = !1;
    g$ = null;
    this.player.playVideo();
  };
  g.k.Jh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Wt;
      case "currentReceiver":
        return b && ("cast-selector-receiver" === b.key ? hyb() : q$(this, b)), this.loaded ? this.Ks : this.Bp;
      case "quickCast":
        return 2 === this.Wt.length && "cast-selector-receiver" === this.Wt[1].key ? (b && hyb(), !0) : !1;
    }
  };
  g.k.mR = function () {
    this.Hc.mR();
  };
  g.k.wl = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !== (null == (a = g.hC("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.hC("SESSION_INDEX") && !g.hC("LOGGED_IN"));
  };
  g.LV("remote", czb);
})(_yt_player);