(function (g) {
  var window = this;
  'use strict';
  var a8 = function (a) {
      g.km(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.cb()).toString(36));
      return a;
    },
    b8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.wga(a.B, b, c);
    },
    kub = function (a) {
      if (a instanceof g.op) return a;
      if ("function" == typeof a.Fk) return a.Fk(!1);
      if (g.Va(a)) {
        var b = 0,
          c = new g.op();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.R2;
            if (b in a) return g.pp(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    lub = function (a, b, c) {
      if (g.Va(a)) g.Xb(a, b, c);else for (a = kub(a);;) {
        var d = a.next();
        if (d.done) break;
        b.call(c, d.value, void 0, a);
      }
    },
    mub = function (a, b) {
      var c = [];
      lub(b, function (d) {
        try {
          var e = g.es.prototype.B.call(this, d, !0);
        } catch (f) {
          if ("Storage: Invalid value was encountered" == f) return;
          throw f;
        }
        void 0 === e ? c.push(d) : g.jla(e) && c.push(d);
      }, a);
      return c;
    },
    nub = function (a, b) {
      mub(a, b).forEach(function (c) {
        g.es.prototype.remove.call(this, c);
      }, a);
    },
    oub = function (a) {
      if (a.va) {
        if (a.va.locationOverrideToken) return {
          locationOverrideToken: a.va.locationOverrideToken
        };
        if (null != a.va.latitudeE7 && null != a.va.longitudeE7) return {
          latitudeE7: a.va.latitudeE7,
          longitudeE7: a.va.longitudeE7
        };
      }
      return null;
    },
    pub = function (a, b) {
      g.Cb(a, b) || a.push(b);
    },
    qub = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    rub = function (a, b) {
      return g.bd(a, b);
    },
    sub = function (a) {
      try {
        return g.Pa.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")");
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    c8 = function (a) {
      if (g.Pa.JSON) try {
        return g.Pa.JSON.parse(a);
      } catch (b) {}
      return sub(a);
    },
    tub = function (a, b, c, d) {
      var e = new g.cm(null);
      a && g.dm(e, a);
      b && g.em(e, b);
      c && g.fm(e, c);
      d && (e.C = d);
      return e;
    },
    uub = function () {
      this.j = d8();
      this.j.Yo("/client_streamz/youtube/living_room/mdx/channel/opened", {
        jh: 3,
        ih: "channel_type"
      });
    },
    vub = function (a, b) {
      a.j.kq("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    wub = function () {
      this.j = d8();
      this.j.Yo("/client_streamz/youtube/living_room/mdx/channel/closed", {
        jh: 3,
        ih: "channel_type"
      });
    },
    xub = function (a, b) {
      a.j.kq("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    yub = function () {
      this.j = d8();
      this.j.Yo("/client_streamz/youtube/living_room/mdx/channel/message_received", {
        jh: 3,
        ih: "channel_type"
      });
    },
    zub = function (a, b) {
      a.j.kq("/client_streamz/youtube/living_room/mdx/channel/message_received", b);
    },
    Aub = function () {
      this.j = d8();
      this.j.Yo("/client_streamz/youtube/living_room/mdx/channel/error", {
        jh: 3,
        ih: "channel_type"
      });
    },
    Bub = function (a, b) {
      a.j.kq("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    Cub = function () {
      this.j = d8();
      this.j.Yo("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps");
    },
    Dub = function () {
      this.j = d8();
      this.j.Yo("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps");
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
      new g.wr();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", Eub(this, a.capabilities || ""), Fub(this, a.compatibleSenderThemes || ""), Gub(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN");
    },
    Eub = function (a, b) {
      a.capabilities.clear();
      g.tp(b.split(","), g.bb(rub, Hub)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    Fub = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.tp(b.split(","), g.bb(rub, Iub)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    Gub = function (a, b) {
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
    Jub = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType
      };
    },
    Kub = function (a) {
      return new f8(a);
    },
    Lub = function (a) {
      return Array.isArray(a) ? g.En(a, Kub) : [];
    },
    h8 = function (a) {
      return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null";
    },
    Mub = function (a) {
      return Array.isArray(a) ? "[" + g.En(a, h8).join(",") + "]" : "null";
    },
    Nub = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
        var b = 16 * Math.random() | 0;
        return ("x" == a ? b : b & 3 | 8).toString(16);
      });
    },
    Oub = function (a) {
      return g.En(a, function (b) {
        return {
          key: b.id,
          name: b.name
        };
      });
    },
    Pub = function (a, b) {
      return g.zb(a, function (c) {
        return c || b ? !c != !b ? !1 : c.id == b.id : !0;
      });
    },
    i8 = function (a, b) {
      return g.zb(a, function (c) {
        return g8(c, b);
      });
    },
    Qub = function () {
      var a = (0, g.PB)();
      a && nub(a, a.j.Fk(!0));
    },
    j8 = function () {
      var a = g.SB("yt-remote-connected-devices") || [];
      g.Ub(a);
      return a;
    },
    Rub = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.En(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    Sub = function (a) {
      g.RB("yt-remote-connected-devices", a, 86400);
    },
    k8 = function () {
      if (Tub) return Tub;
      var a = g.SB("yt-remote-device-id");
      a || (a = Nub(), g.RB("yt-remote-device-id", a, 31536E3));
      for (var b = j8(), c = 1, d = a; g.Cb(b, d);) c++, d = a + "#" + c;
      return Tub = d;
    },
    Uub = function () {
      var a = j8(),
        b = k8();
      g.UB() && g.Wb(a, b);
      a = Rub(a);
      if (0 == a.length) try {
        g.SA("remote_sid");
      } catch (c) {} else try {
        g.QA("remote_sid", a.join(","), -1);
      } catch (c) {}
    },
    Vub = function () {
      return g.SB("yt-remote-session-browser-channel");
    },
    Wub = function () {
      return g.SB("yt-remote-local-screens") || [];
    },
    Xub = function () {
      g.RB("yt-remote-lounge-token-expiration", !0, 86400);
    },
    Yub = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.En(Wub(), function (d) {
          return d.loungeToken;
        }),
        c = g.En(a, function (d) {
          return d.loungeToken;
        });
      g.Fn(c, function (d) {
        return !g.Cb(b, d);
      }) && Xub();
      g.RB("yt-remote-local-screens", a, 31536E3);
    },
    l8 = function (a) {
      a || (g.TB("yt-remote-session-screen-id"), g.TB("yt-remote-session-video-id"));
      Uub();
      a = j8();
      g.Fb(a, k8());
      Sub(a);
    },
    Zub = function () {
      if (!m8) {
        var a = g.ns();
        a && (m8 = new g.Kr(a));
      }
    },
    $ub = function () {
      Zub();
      return m8 ? !!m8.get("yt-remote-use-staging-server") : !1;
    },
    n8 = function (a, b) {
      g.hE[a] = !0;
      var c = g.fE();
      c && c.publish.apply(c, arguments);
      g.hE[a] = !1;
    },
    avb = function () {},
    d8 = function () {
      if (!o8) {
        o8 = new g.Vf(new avb());
        var a = g.gA("client_streamz_web_flush_count", -1);
        -1 !== a && (o8.D = a);
      }
      return o8;
    },
    bvb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    cvb = function (a) {
      return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a));
    },
    dvb = function () {
      return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null;
    },
    p8 = function (a) {
      a.length ? evb(a.shift(), function () {
        p8(a);
      }) : fvb();
    },
    gvb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    evb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.rl(d, g.at(a));
      (document.head || document.documentElement).appendChild(d);
    },
    hvb = function () {
      var a = bvb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    fvb = function () {
      var a = dvb();
      a && a(!1, "No cast extension found");
    },
    jvb = function () {
      if (ivb) {
        var a = 2,
          b = dvb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        evb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", fvb, c);
      }
    },
    kvb = function () {
      jvb();
      var a = hvb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    mvb = function () {
      jvb();
      var a = hvb();
      a.push.apply(a, g.pa(lvb.map(gvb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    q8 = function (a, b, c) {
      g.G.call(this);
      this.K = null != c ? (0, g.$a)(a, c) : a;
      this.Xi = b;
      this.G = (0, g.$a)(this.I1, this);
      this.j = !1;
      this.B = 0;
      this.C = this.Oc = null;
      this.D = [];
    },
    r8 = function (a, b, c) {
      g.G.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Xi = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.Oc = null;
    },
    nvb = function (a) {
      a.Oc = g.Tf(function () {
        a.Oc = null;
        a.j && !a.B && (a.j = !1, nvb(a));
      }, a.Xi);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    s8 = function () {},
    ovb = function () {
      g.wb.call(this, "p");
    },
    pvb = function () {
      g.wb.call(this, "o");
    },
    rvb = function () {
      return qvb = qvb || new g.Cd();
    },
    svb = function (a) {
      g.wb.call(this, "serverreachability", a);
    },
    t8 = function (a) {
      var b = rvb();
      b.dispatchEvent(new svb(b, a));
    },
    tvb = function (a) {
      g.wb.call(this, "statevent", a);
    },
    u8 = function (a) {
      var b = rvb();
      b.dispatchEvent(new tvb(b, a));
    },
    uvb = function (a, b, c, d) {
      g.wb.call(this, "timingevent", a);
      this.size = b;
      this.SA = d;
    },
    v8 = function (a, b) {
      if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
      return g.Pa.setTimeout(function () {
        a();
      }, b);
    },
    vvb = function () {},
    w8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Bd = c;
      this.Tc = d || 1;
      this.ob = new g.pm(this);
      this.Hb = 45E3;
      a = g.UL ? 125 : void 0;
      this.tb = new g.Sf(a);
      this.Pa = null;
      this.C = !1;
      this.ma = this.kb = this.S = this.Va = this.Ca = this.Vb = this.ea = null;
      this.ra = [];
      this.j = null;
      this.va = 0;
      this.K = this.Ja = null;
      this.Zb = -1;
      this.Oa = !1;
      this.zb = 0;
      this.fb = null;
      this.Ac = this.Za = this.zc = this.Ga = !1;
      this.B = new wvb();
    },
    wvb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    yvb = function (a, b, c) {
      a.Va = 1;
      a.S = a8(b.clone());
      a.ma = c;
      a.Ga = !0;
      xvb(a, null);
    },
    xvb = function (a, b) {
      a.Ca = Date.now();
      x8(a);
      a.kb = a.S.clone();
      b8(a.kb, "t", a.Tc);
      a.va = 0;
      var c = a.G.Va;
      a.B = new wvb();
      a.j = zvb(a.G, c ? b : null, !a.ma);
      0 < a.zb && (a.fb = new r8((0, g.$a)(a.AS, a, a.j), a.zb));
      a.ob.Ua(a.j, "readystatechange", a.L1);
      b = a.Pa ? g.kd(a.Pa) : {};
      a.ma ? (a.Ja || (a.Ja = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.kb, a.Ja, a.ma, b)) : (a.Ja = "GET", a.j.send(a.kb, a.Ja, null, b));
      t8(1);
    },
    Avb = function (a) {
      return a.j ? "GET" == a.Ja && 2 != a.Va && a.G.Ue : !1;
    },
    Evb = function (a, b, c) {
      for (var d = !0, e; !a.Oa && a.va < c.length;) if (e = Bvb(a, c), e == y8) {
        4 == b && (a.K = 4, u8(14), d = !1);
        break;
      } else if (e == Cvb) {
        a.K = 4;
        u8(15);
        d = !1;
        break;
      } else Dvb(a, e);
      Avb(a) && e != y8 && e != Cvb && (a.B.j = "", a.va = 0);
      4 != b || 0 != c.length || a.B.B || (a.K = 1, u8(16), d = !1);
      a.C = a.C && d;
      d ? 0 < c.length && !a.Ac && (a.Ac = !0, a.G.uP(a)) : (z8(a), A8(a));
    },
    Bvb = function (a, b) {
      var c = a.va,
        d = b.indexOf("\n", c);
      if (-1 == d) return y8;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Cvb;
      d += 1;
      if (d + c > b.length) return y8;
      b = b.slice(d, d + c);
      a.va = d + c;
      return b;
    },
    x8 = function (a) {
      a.Vb = Date.now() + a.Hb;
      Fvb(a, a.Hb);
    },
    Fvb = function (a, b) {
      if (null != a.ea) throw Error("WatchDog timer not null");
      a.ea = v8((0, g.$a)(a.J1, a), b);
    },
    B8 = function (a) {
      a.ea && (g.Pa.clearTimeout(a.ea), a.ea = null);
    },
    A8 = function (a) {
      a.G.nh() || a.Oa || Gvb(a.G, a);
    },
    z8 = function (a) {
      B8(a);
      g.ob(a.fb);
      a.fb = null;
      a.tb.stop();
      a.ob.Sf();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    Dvb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Ih && (c.j == a || Hvb(c.B, a))) if (!a.Za && Hvb(c.B, a) && 3 == c.Ih) {
          try {
            var d = c.Kf.j.parse(b);
          } catch (A) {
            d = null;
          }
          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0]) a: {
              if (!c.ma) {
                if (c.j) if (c.j.Ca + 3E3 < a.Ca) C8(c), D8(c);else break a;
                Ivb(c);
                u8(18);
              }
            } else c.Zd = e[1], 0 < c.Zd - c.fb && 37500 > e[2] && c.Za && 0 == c.ra && !c.va && (c.va = v8((0, g.$a)(c.M1, c), 6E3));
            if (1 >= Jvb(c.B) && c.ud) {
              try {
                c.ud();
              } catch (A) {}
              c.ud = void 0;
            }
          } else E8(c, 11);
        } else if ((a.Za || c.j == a) && C8(c), !g.bc(b)) for (e = c.Kf.j.parse(b), b = 0; b < e.length; b++) {
          var f = e[b];
          c.fb = f[0];
          f = f[1];
          if (2 == c.Ih) {
            if ("c" == f[0]) {
              c.D = f[1];
              c.Ac = f[2];
              var h = f[3];
              null != h && (c.BS = h);
              var l = f[5];
              null != l && "number" === typeof l && 0 < l && (c.ob = 1.5 * l);
              d = c;
              var m = a.KN();
              if (m) {
                var n = g.Vk(m, "X-Client-Wire-Protocol");
                if (n) {
                  var p = d.B;
                  !p.j && (g.ec(n, "spdy") || g.ec(n, "quic") || g.ec(n, "h2")) && (p.D = p.G, p.j = new Set(), p.B && (Kvb(p, p.B), p.B = null));
                }
                if (d.Ga) {
                  var q = g.Vk(m, "X-HTTP-Session-Id");
                  q && (d.Ke = q, g.km(d.Pa, d.Ga, q));
                }
              }
              c.Ih = 3;
              c.G && c.G.HS();
              c.Wc && (c.wd = Date.now() - a.Ca);
              d = c;
              var t = a;
              d.Kd = Lvb(d, d.Va ? d.Ac : null, d.Tc);
              if (t.Za) {
                Mvb(d.B, t);
                var u = t,
                  y = d.ob;
                y && u.setTimeout(y);
                u.ea && (B8(u), x8(u));
                d.j = t;
              } else Nvb(d);
              0 < c.C.length && F8(c);
            } else "stop" != f[0] && "close" != f[0] || E8(c, 7);
          } else 3 == c.Ih && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? E8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.GS(f), c.ra = 0);
        }
        t8(4);
      } catch (A) {}
    },
    Ovb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Pvb = function (a) {
      this.G = a || 10;
      g.Pa.PerformanceNavigationTiming ? (a = g.Pa.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Pa.chrome && g.Pa.chrome.loadTimes && g.Pa.chrome.loadTimes() && g.Pa.chrome.loadTimes().wasFetchedViaSpdy);
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    Qvb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    Jvb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    Hvb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    Kvb = function (a, b) {
      a.j ? a.j.add(b) : a.B = b;
    },
    Mvb = function (a, b) {
      a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b);
    },
    Rvb = function (a) {
      if (null != a.B) return a.C.concat(a.B.ra);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.v(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
        return b;
      }
      return g.Ib(a.C);
    },
    Svb = function (a, b) {
      var c = new vvb();
      if (g.Pa.Image) {
        var d = new Image();
        d.onload = g.bb(G8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.bb(G8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.bb(G8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.bb(G8, c, d, "TestLoadImage: timeout", !1, b);
        g.Pa.setTimeout(function () {
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
    Tvb = function () {
      this.j = new s8();
    },
    Uvb = function (a, b, c) {
      var d = c || "";
      try {
        g.bm(a, function (e, f) {
          var h = e;
          g.Xa(e) && (h = g.tk(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
      }
    },
    H8 = function (a, b, c) {
      return c && c.I6 ? c.I6[a] || b : b;
    },
    Vvb = function (a) {
      this.C = [];
      this.Ac = this.Kd = this.Pa = this.Tc = this.j = this.Ke = this.Ga = this.Oa = this.S = this.Vb = this.ea = null;
      this.hg = this.kb = 0;
      this.Wf = H8("failFast", !1, a);
      this.Za = this.va = this.ma = this.K = this.G = null;
      this.Bd = !0;
      this.Zd = this.fb = -1;
      this.zc = this.ra = this.Ca = 0;
      this.Vf = H8("baseRetryDelayMs", 5E3, a);
      this.jg = H8("retryDelaySeedMs", 1E4, a);
      this.Xf = H8("forwardChannelMaxRetries", 2, a);
      this.Td = H8("forwardChannelRequestTimeoutMs", 2E4, a);
      this.Je = a && a.Bgb || void 0;
      this.Ue = a && a.xgb || !1;
      this.ob = void 0;
      this.Va = a && a.Raa || !1;
      this.D = "";
      this.B = new Pvb(a && a.Pdb);
      this.Kf = new Tvb();
      this.Hb = a && a.jeb || !1;
      this.zb = a && a.Vdb || !1;
      this.Hb && this.zb && (this.zb = !1);
      this.og = a && a.Jdb || !1;
      a && a.leb && (this.Bd = !1);
      this.Wc = !this.Hb && this.Bd && a && a.Tdb || !1;
      this.Dd = void 0;
      a && a.EX && 0 < a.EX && (this.Dd = a.EX);
      this.ud = void 0;
      this.wd = 0;
      this.tb = !1;
      this.Zb = this.Ja = null;
    },
    D8 = function (a) {
      a.j && (Wvb(a), a.j.cancel(), a.j = null);
    },
    Xvb = function (a) {
      D8(a);
      a.ma && (g.Pa.clearTimeout(a.ma), a.ma = null);
      C8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Pa.clearTimeout(a.K), a.K = null);
    },
    F8 = function (a) {
      Qvb(a.B) || a.K || (a.K = !0, g.Jf(a.DS, a), a.Ca = 0);
    },
    Zvb = function (a, b) {
      if (Jvb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return a.C = b.ra.concat(a.C), !0;
      if (1 == a.Ih || 2 == a.Ih || a.Ca >= (a.Wf ? 0 : a.Xf)) return !1;
      a.K = v8((0, g.$a)(a.DS, a, b), Yvb(a, a.Ca));
      a.Ca++;
      return !0;
    },
    awb = function (a, b) {
      var c;
      b ? c = b.Bd : c = a.kb++;
      var d = a.Pa.clone();
      g.km(d, "SID", a.D);
      g.km(d, "RID", c);
      g.km(d, "AID", a.fb);
      I8(a, d);
      a.S && a.ea && g.om(d, a.S, a.ea);
      c = new w8(a, a.D, c, a.Ca + 1);
      null === a.S && (c.Pa = a.ea);
      b && (a.C = b.ra.concat(a.C));
      b = $vb(a, c, 1E3);
      c.setTimeout(Math.round(.5 * a.Td) + Math.round(.5 * a.Td * Math.random()));
      Kvb(a.B, c);
      yvb(c, d, b);
    },
    I8 = function (a, b) {
      a.Oa && g.Rc(a.Oa, function (c, d) {
        g.km(b, d, c);
      });
      a.G && g.bm({}, function (c, d) {
        g.km(b, d, c);
      });
    },
    $vb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.$a)(a.G.N1, a.G, a) : null;
      a: for (var e = a.C, f = -1;;) {
        var h = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;else try {
            Uvb(p, h, "req" + n + "_");
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
      b.ra = a;
      return d;
    },
    Nvb = function (a) {
      a.j || a.ma || (a.zc = 1, g.Jf(a.CS, a), a.ra = 0);
    },
    Ivb = function (a) {
      if (a.j || a.ma || 3 <= a.ra) return !1;
      a.zc++;
      a.ma = v8((0, g.$a)(a.CS, a), Yvb(a, a.ra));
      a.ra++;
      return !0;
    },
    Wvb = function (a) {
      null != a.Ja && (g.Pa.clearTimeout(a.Ja), a.Ja = null);
    },
    bwb = function (a) {
      a.j = new w8(a, a.D, "rpc", a.zc);
      null === a.S && (a.j.Pa = a.ea);
      a.j.zb = 0;
      var b = a.Kd.clone();
      g.km(b, "RID", "rpc");
      g.km(b, "SID", a.D);
      g.km(b, "AID", a.fb);
      g.km(b, "CI", a.Za ? "0" : "1");
      !a.Za && a.Dd && g.km(b, "TO", a.Dd);
      g.km(b, "TYPE", "xmlhttp");
      I8(a, b);
      a.S && a.ea && g.om(b, a.S, a.ea);
      a.ob && a.j.setTimeout(a.ob);
      var c = a.j;
      a = a.Ac;
      c.Va = 1;
      c.S = a8(b.clone());
      c.ma = null;
      c.Ga = !0;
      xvb(c, a);
    },
    C8 = function (a) {
      null != a.va && (g.Pa.clearTimeout(a.va), a.va = null);
    },
    Gvb = function (a, b) {
      var c = null;
      if (a.j == b) {
        C8(a);
        Wvb(a);
        a.j = null;
        var d = 2;
      } else if (Hvb(a.B, b)) c = b.ra, Mvb(a.B, b), d = 1;else return;
      if (0 != a.Ih) if (b.C) {
        if (1 == d) {
          c = b.ma ? b.ma.length : 0;
          b = Date.now() - b.Ca;
          var e = a.Ca;
          d = rvb();
          d.dispatchEvent(new uvb(d, c, b, e));
          F8(a);
        } else Nvb(a);
      } else {
        var f = b.Zb;
        e = b.getLastError();
        if (3 == e || 0 == e && 0 < f || !(1 == d && Zvb(a, b) || 2 == d && Ivb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
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
    Yvb = function (a, b) {
      var c = a.Vf + Math.floor(Math.random() * a.jg);
      a.isActive() || (c *= 2);
      return c * b;
    },
    E8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.G && (c = null);
        var d = (0, g.$a)(a.Xaa, a);
        c || (c = new g.cm("//www.google.com/images/cleardot.gif"), g.Pa.location && "http" == g.Pa.location.protocol || g.dm(c, "https"), a8(c));
        Svb(c.toString(), d);
      } else u8(2);
      a.Ih = 0;
      a.G && a.G.FS(b);
      cwb(a);
      Xvb(a);
    },
    cwb = function (a) {
      a.Ih = 0;
      a.Zb = [];
      if (a.G) {
        var b = Rvb(a.B);
        if (0 != b.length || 0 != a.C.length) g.Jb(a.Zb, b), g.Jb(a.Zb, a.C), a.B.C.length = 0, g.Ib(a.C), a.C.length = 0;
        a.G.ES();
      }
    },
    dwb = function (a) {
      if (0 == a.Ih) return a.Zb;
      var b = [];
      g.Jb(b, Rvb(a.B));
      g.Jb(b, a.C);
      return b;
    },
    Lvb = function (a, b, c) {
      var d = g.lm(c);
      "" != d.j ? (b && g.em(d, b + "." + d.j), g.fm(d, d.D)) : (d = g.Pa.location, d = tub(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
      b = a.Ga;
      c = a.Ke;
      b && c && g.km(d, b, c);
      g.km(d, "VER", a.BS);
      I8(a, d);
      return d;
    },
    zvb = function (a, b, c) {
      if (b && !a.Va) throw Error("Can't create secondary domain capable XhrIo object.");
      b = c && a.Ue && !a.Je ? new g.xk(new g.Yl({
        n_: !0
      })) : new g.xk(a.Je);
      b.K = a.Va;
      return b;
    },
    ewb = function () {},
    fwb = function () {
      if (g.Pe && !g.Mc(10)) throw Error("Environmental error: no available transport.");
    },
    K8 = function (a, b) {
      g.Cd.call(this);
      this.j = new Vvb(b);
      this.G = a;
      this.B = b && b.t7 || null;
      a = b && b.s7 || null;
      b && b.Odb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
        "X-Client-Protocol": "webchannel"
      });
      this.j.ea = a;
      a = b && b.gfb || null;
      b && b.LX && (a ? a["X-WebChannel-Content-Type"] = b.LX : a = {
        "X-WebChannel-Content-Type": b.LX
      });
      b && b.dV && (a ? a["X-WebChannel-Client-Profile"] = b.dV : a = {
        "X-WebChannel-Client-Profile": b.dV
      });
      this.j.Vb = a;
      (a = b && b.ffb) && !g.bc(a) && (this.j.S = a);
      this.K = b && b.Raa || !1;
      this.D = b && b.Wfb || !1;
      (b = b && b.D6) && !g.bc(b) && (this.j.Ga = b, g.ad(this.B, b) && g.ed(this.B, b));
      this.C = new J8(this);
    },
    gwb = function (a) {
      ovb.call(this);
      a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
      var b = a.__sm__;
      b ? this.data = (this.j = g.Yc(b)) ? g.fd(b, this.j) : b : this.data = a;
    },
    hwb = function (a) {
      pvb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    J8 = function (a) {
      this.j = a;
    },
    iwb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    jwb = function (a) {
      return dwb(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && (b = b.__data__, b = a.B.D ? sub(b) : b);
        return b;
      });
    },
    L8 = function (a, b) {
      if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
      return g.Pa.setTimeout(function () {
        a();
      }, b);
    },
    N8 = function (a) {
      M8.dispatchEvent(new kwb(M8, a));
    },
    kwb = function (a) {
      g.wb.call(this, "statevent", a);
    },
    O8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.S = c;
      this.K = d || 1;
      this.B = 45E3;
      this.C = new g.pm(this);
      this.G = new g.Sf();
      this.G.setInterval(250);
    },
    mwb = function (a, b, c) {
      a.Kx = 1;
      a.As = a8(b.clone());
      a.Tu = c;
      a.Ga = !0;
      lwb(a, null);
    },
    nwb = function (a, b, c, d, e) {
      a.Kx = 1;
      a.As = a8(b.clone());
      a.Tu = null;
      a.Ga = c;
      e && (a.PZ = !1);
      lwb(a, d);
    },
    lwb = function (a, b) {
      a.Jx = Date.now();
      P8(a);
      a.Cs = a.As.clone();
      b8(a.Cs, "t", a.K);
      a.WF = 0;
      a.jj = a.j.KK(a.j.SB() ? b : null);
      0 < a.IK && (a.UF = new r8((0, g.$a)(a.IS, a, a.jj), a.IK));
      a.C.Ua(a.jj, "readystatechange", a.P1);
      b = a.Su ? g.kd(a.Su) : {};
      a.Tu ? (a.VF = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.jj.send(a.Cs, a.VF, a.Tu, b)) : (a.VF = "GET", a.PZ && !g.Nc && (b.Connection = "close"), a.jj.send(a.Cs, a.VF, null, b));
      a.j.Qn(1);
    },
    qwb = function (a, b) {
      var c = a.WF,
        d = b.indexOf("\n", c);
      if (-1 == d) return owb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return pwb;
      d += 1;
      if (d + c > b.length) return owb;
      b = b.slice(d, d + c);
      a.WF = d + c;
      return b;
    },
    swb = function (a, b) {
      a.Jx = Date.now();
      P8(a);
      var c = b ? window.location.hostname : "";
      a.Cs = a.As.clone();
      g.km(a.Cs, "DOMAIN", c);
      g.km(a.Cs, "t", a.K);
      try {
        a.zo = new ActiveXObject("htmlfile");
      } catch (m) {
        Q8(a);
        a.Bs = 7;
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
            if (f in S8) f = S8[f];else if (f in rwb) f = S8[f] = rwb[f];else {
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
      g.Rd("b/12014412");
      c = g.me(d);
      a.zo.open();
      a.zo.write(g.le(c));
      a.zo.close();
      a.zo.parentWindow.m = (0, g.$a)(a.n$, a);
      a.zo.parentWindow.d = (0, g.$a)(a.MY, a, !0);
      a.zo.parentWindow.rpcClose = (0, g.$a)(a.MY, a, !1);
      c = a.zo.createElement("DIV");
      a.zo.parentWindow.document.body.appendChild(c);
      d = g.ae(a.Cs.toString()) || g.je;
      d = g.ye(g.Zd(d));
      g.Rd("b/12014412");
      d = g.me('<iframe src="' + d + '"></iframe>');
      g.Sba(c, d);
      a.j.Qn(1);
    },
    P8 = function (a) {
      a.JK = Date.now() + a.B;
      twb(a, a.B);
    },
    twb = function (a, b) {
      if (null != a.Lx) throw Error("WatchDog timer not null");
      a.Lx = L8((0, g.$a)(a.O1, a), b);
    },
    uwb = function (a) {
      a.Lx && (g.Pa.clearTimeout(a.Lx), a.Lx = null);
    },
    R8 = function (a) {
      a.j.nh() || a.Ru || a.j.XF(a);
    },
    Q8 = function (a) {
      uwb(a);
      g.ob(a.UF);
      a.UF = null;
      a.G.stop();
      a.C.Sf();
      if (a.jj) {
        var b = a.jj;
        a.jj = null;
        b.abort();
        b.dispose();
      }
      a.zo && (a.zo = null);
    },
    vwb = function (a, b) {
      try {
        a.j.JS(a, b), a.j.Qn(4);
      } catch (c) {}
    },
    xwb = function (a, b, c, d, e) {
      if (0 == d) c(!1);else {
        var f = e || 0;
        d--;
        wwb(a, b, function (h) {
          h ? c(!0) : g.Pa.setTimeout(function () {
            xwb(a, b, c, d, f);
          }, f);
        });
      }
    },
    wwb = function (a, b, c) {
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
      g.Pa.setTimeout(function () {
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
    ywb = function (a) {
      this.j = a;
      this.B = new s8();
    },
    zwb = function (a) {
      var b = U8(a.j, a.oC, "/mail/images/cleardot.gif");
      a8(b);
      xwb(b.toString(), 5E3, (0, g.$a)(a.A4, a), 3, 2E3);
      a.Qn(1);
    },
    Awb = function (a) {
      var b = a.j.K;
      if (null != b) N8(5), b ? (N8(11), V8(a.j, a, !1)) : (N8(12), V8(a.j, a, !0));else if (a.Rj = new O8(a), a.Rj.Su = a.LK, b = a.j, b = U8(b, b.SB() ? a.RB : null, a.MK), N8(5), !g.Pe || g.Mc(10)) b8(b, "TYPE", "xmlhttp"), nwb(a.Rj, b, !1, a.RB, !1);else {
        b8(b, "TYPE", "html");
        var c = a.Rj;
        a = !!a.RB;
        c.Kx = 3;
        c.As = a8(b.clone());
        swb(c, a);
      }
    },
    Bwb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new s8();
      this.ea = a || null;
      this.K = null != b ? b : null;
      this.ma = c || !1;
    },
    Cwb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Dwb = function (a, b, c, d) {
      g.wb.call(this, "timingevent", a);
      this.size = b;
      this.SA = d;
    },
    Ewb = function (a) {
      g.wb.call(this, "serverreachability", a);
    },
    Gwb = function (a) {
      a.Q1(1, 0);
      a.YF = U8(a, null, a.NK);
      Fwb(a);
    },
    Hwb = function (a) {
      a.Ss && (a.Ss.abort(), a.Ss = null);
      a.Tg && (a.Tg.cancel(), a.Tg = null);
      a.iq && (g.Pa.clearTimeout(a.iq), a.iq = null);
      W8(a);
      a.dk && (a.dk.cancel(), a.dk = null);
      a.Ds && (g.Pa.clearTimeout(a.Ds), a.Ds = null);
    },
    Iwb = function (a, b) {
      if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new Cwb(a.R1++, b));
      2 != a.j && 3 != a.j || Fwb(a);
    },
    Jwb = function (a) {
      var b = 0;
      a.Tg && b++;
      a.dk && b++;
      return b;
    },
    Fwb = function (a) {
      a.dk || a.Ds || (a.Ds = L8((0, g.$a)(a.NS, a), 0), a.Nx = 0);
    },
    Mwb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.UB = Math.floor(1E5 * Math.random());
          b = a.UB++;
          var c = new O8(a, "", b);
          c.Su = a.Ho;
          var d = Kwb(a),
            e = a.YF.clone();
          g.km(e, "RID", b);
          g.km(e, "CVER", "1");
          X8(a, e);
          mwb(c, e, d);
          a.dk = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? Lwb(a, b) : 0 == a.B.length || a.dk || Lwb(a));
    },
    Lwb = function (a, b) {
      if (b) {
        if (6 < a.Uu) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.UB - 1;
          b = Kwb(a);
        } else c = b.S, b = b.Tu;
      } else c = a.UB++, b = Kwb(a);
      var d = a.YF.clone();
      g.km(d, "SID", a.D);
      g.km(d, "RID", c);
      g.km(d, "AID", a.Ox);
      X8(a, d);
      c = new O8(a, a.D, c, a.Nx + 1);
      c.Su = a.Ho;
      c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
      a.dk = c;
      mwb(c, d, b);
    },
    X8 = function (a, b) {
      a.Mi && (a = a.Mi.RS()) && g.Rc(a, function (c, d) {
        g.km(b, d, c);
      });
    },
    Kwb = function (a) {
      var b = Math.min(a.B.length, 1E3),
        c = ["count=" + b];
      if (6 < a.Uu && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = {
        cA: e.cA
      }, f++) {
        e.cA = a.B[f].j;
        var h = a.B[f].map;
        e.cA = 6 >= a.Uu ? f : e.cA - d;
        try {
          g.Rc(h, function (l) {
            return function (m, n) {
              c.push("req" + l.cA + "_" + n + "=" + encodeURIComponent(m));
            };
          }(e));
        } catch (l) {
          c.push("req" + e.cA + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    Nwb = function (a) {
      a.Tg || a.iq || (a.S = 1, a.iq = L8((0, g.$a)(a.MS, a), 0), a.Mx = 0);
    },
    Pwb = function (a) {
      if (a.Tg || a.iq || 3 <= a.Mx) return !1;
      a.S++;
      a.iq = L8((0, g.$a)(a.MS, a), Owb(a, a.Mx));
      a.Mx++;
      return !0;
    },
    V8 = function (a, b, c) {
      a.kK = null == a.K ? c : !a.K;
      a.Io = b.hq;
      a.ma || Gwb(a);
    },
    W8 = function (a) {
      null != a.Vu && (g.Pa.clearTimeout(a.Vu), a.Vu = null);
    },
    Owb = function (a, b) {
      var c = 5E3 + Math.floor(1E4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    Y8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Mi && (c = null);
        var d = (0, g.$a)(a.Waa, a);
        c || (c = new g.cm("//www.google.com/images/cleardot.gif"), a8(c));
        wwb(c.toString(), 1E4, d);
      } else N8(2);
      Qwb(a, b);
    },
    Qwb = function (a, b) {
      a.j = 0;
      a.Mi && a.Mi.OS(b);
      Rwb(a);
      Hwb(a);
    },
    Rwb = function (a) {
      a.j = 0;
      a.Io = -1;
      if (a.Mi) if (0 == a.C.length && 0 == a.B.length) a.Mi.OK();else {
        var b = g.Ib(a.C),
          c = g.Ib(a.B);
        a.C.length = 0;
        a.B.length = 0;
        a.Mi.OK(b, c);
      }
    },
    U8 = function (a, b, c) {
      var d = g.lm(c);
      if ("" != d.j) b && g.em(d, b + "." + d.j), g.fm(d, d.D);else {
        var e = window.location;
        d = tub(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.TB && g.Rc(a.TB, function (f, h) {
        g.km(d, h, f);
      });
      g.km(d, "VER", a.Uu);
      X8(a, d);
      return d;
    },
    Swb = function () {},
    Twb = function () {
      this.j = [];
      this.B = [];
    },
    Uwb = function (a) {
      g.wb.call(this, "channelMessage");
      this.message = a;
    },
    Vwb = function (a) {
      g.wb.call(this, "channelError");
      this.error = a;
    },
    Wwb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Z8 = function (a, b) {
      g.G.call(this);
      this.j = new g.fr(this.f$, 0, this);
      g.H(this, this.j);
      this.Xi = 5E3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.$a)(a, b));else if (a && "function" === typeof a.handleEvent) a = (0, g.$a)(a.handleEvent, a);else throw Error("Invalid listener argument");
      this.C = a;
    },
    Xwb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? function () {
        return "";
      } : d;
      e = void 0 === e ? !1 : e;
      this.Ca = a;
      this.S = b;
      this.C = new g.Jr();
      this.B = new Z8(this.taa, this);
      this.j = null;
      this.va = !1;
      this.K = null;
      this.ea = "";
      this.ma = this.G = 0;
      this.D = [];
      this.Va = c;
      this.ra = d;
      this.Za = e;
      this.Pa = new uub();
      this.Ja = new wub();
      this.Oa = new yub();
      this.Ga = new Aub();
      this.fb = new Cub();
      this.kb = new Dub();
    },
    Ywb = function (a) {
      if (a.j) {
        var b = a.ra(),
          c = a.j.Ho || {};
        b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Ho = c;
      }
    },
    $8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.Pj(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.Qj(a) || "";
      a = g.lc();
      0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.ic(a, "10.0") && (this.B = !1));
    },
    a9 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.dk(c + b, {});
    },
    Zwb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5E3,
        withCredentials: !1,
        onSuccess: g.bb(a.D, d, !0),
        onError: g.bb(a.C, e),
        onTimeout: g.bb(a.G, e)
      };
      c && (a.postParams = c, a.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      });
      return g.GA(b, a);
    },
    $wb = function (a, b) {
      g.Cd.call(this);
      var c = this;
      this.Gd = a();
      this.Gd.subscribe("handlerOpened", this.V1, this);
      this.Gd.subscribe("handlerClosed", this.T1, this);
      this.Gd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Gd.subscribe("handlerMessage", this.U1, this);
      this.j = b;
    },
    axb = function (a, b, c) {
      var d = this;
      c = void 0 === c ? function () {
        return "";
      } : c;
      var e = void 0 === e ? new fwb() : e;
      var f = void 0 === f ? new g.Jr() : f;
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
        0 === (null == (h = d.channel) ? void 0 : Jvb(new iwb(h, h.j).j.B)) && d.connect(d.ma, d.S);
      });
      this.D = {};
      this.B = {};
      this.va = !1;
      this.logger = null;
      this.ra = [];
      this.Yg = void 0;
      this.Pa = new uub();
      this.Ja = new wub();
      this.Oa = new yub();
      this.Ga = new Aub();
    },
    bxb = function (a) {
      g.sd(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.ma = null;
        a.S = 0;
        for (var b = g.v(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
        a.ra = [];
        a.qa("webChannelOpened");
        vub(a.Pa, "WEB_CHANNEL");
      });
      g.sd(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.qa("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : jwb(new iwb(b, b.j));
        c && (a.ra = [].concat(g.pa(c)));
        xub(a.Ja, "WEB_CHANNEL");
      });
      g.sd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.qa("webChannelMessage", new Wwb(c[0], c[1]));
        a.Yg = b.statusCode;
        zub(a.Oa, "WEB_CHANNEL");
      });
      g.sd(a.channel, "o", function () {
        401 === a.Yg || a.C.start();
        a.qa("webChannelError");
        Bub(a.Ga, "WEB_CHANNEL");
      });
    },
    cxb = function (a) {
      var b = a.Ca();
      b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    dxb = function (a) {
      g.Cd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.Y1, this);
      this.j.subscribe("webChannelClosed", this.W1, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.X1, this);
    },
    exb = function (a, b, c, d, e) {
      function f() {
        return new Xwb(a9(a, "/bc"), b, !1, c, d);
      }
      c = void 0 === c ? function () {
        return "";
      } : c;
      return g.fA("enable_mdx_web_channel_desktop") ? new dxb(function () {
        return new axb(a9(a, "/wc"), b, c);
      }) : new $wb(f, e);
    },
    ixb = function () {
      var a = fxb;
      gxb();
      b9.push(a);
      hxb();
    },
    c9 = function (a, b) {
      gxb();
      var c = jxb(a, String(b));
      0 == b9.length ? kxb(c) : (hxb(), g.Xb(b9, function (d) {
        d(c);
      }));
    },
    d9 = function (a) {
      c9("CP", a);
    },
    gxb = function () {
      b9 || (b9 = g.Ra("yt.mdx.remote.debug.handlers_") || [], g.Qa("yt.mdx.remote.debug.handlers_", b9));
    },
    kxb = function (a) {
      var b = (e9 + 1) % 50;
      e9 = b;
      f9[b] = a;
      g9 || (g9 = 49 == b);
    },
    hxb = function () {
      var a = b9;
      if (f9[0]) {
        var b = g9 ? e9 : -1;
        do {
          b = (b + 1) % 50;
          var c = f9[b];
          g.Xb(a, function (d) {
            d(c);
          });
        } while (b != e9);
        f9 = Array(50);
        e9 = -1;
        g9 = !1;
      }
    },
    jxb = function (a, b) {
      var c = (Date.now() - lxb) / 1E3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    h9 = function (a) {
      g.qG.call(this);
      this.K = a;
      this.screens = [];
    },
    mxb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
      a.screens.push(b);
      return !0;
    },
    nxb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.tp(a.screens, function (f) {
        return !!Pub(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = mxb(a, b[d]) || c;
      return c;
    },
    oxb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.tp(a.screens, function (d) {
        return !(d || b ? !d != !b ? 0 : d.id == b.id : 1);
      });
      return a.screens.length < c;
    },
    pxb = function (a, b, c, d, e) {
      g.qG.call(this);
      this.C = a;
      this.S = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.Oc = NaN;
    },
    j9 = function (a) {
      h9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      i9(this);
      this.info("Initializing with " + Mub(this.screens));
    },
    qxb = function (a) {
      if (a.screens.length) {
        var b = g.En(a.screens, function (d) {
            return d.id;
          }),
          c = a9(a.B, "/pairing/get_lounge_token_batch");
        Zwb(a.B, c, {
          screen_ids: b.join(",")
        }, (0, g.$a)(a.b6, a), (0, g.$a)(a.a6, a));
      }
    },
    i9 = function (a) {
      if (g.fA("deprecate_pair_servlet_enabled")) return nxb(a, []);
      var b = Lub(Wub());
      b = g.tp(b, function (c) {
        return !c.uuid;
      });
      return nxb(a, b);
    },
    k9 = function (a, b) {
      Yub(g.En(a.screens, Jub));
      b && Xub();
    },
    sxb = function (a, b) {
      g.qG.call(this);
      this.K = b;
      b = (b = g.SB("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Cb(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      rxb("Initialized with " + g.tk(this.j));
    },
    txb = function (a, b, c) {
      var d = a9(a.G, "/pairing/get_screen_availability");
      Zwb(a.G, d, {
        lounge_token: b.token
      }, (0, g.$a)(function (e) {
        e = e.screens || [];
        for (var f = e.length, h = 0; h < f; ++h) if (e[h].loungeToken == b.token) {
          c("online" == e[h].status);
          return;
        }
        c(!1);
      }, a), (0, g.$a)(function () {
        c(!1);
      }, a));
    },
    vxb = function (a, b) {
      a: if (qub(b) != qub(a.j)) var c = !1;else {
        c = g.$c(b);
        for (var d = c.length, e = 0; e < d; ++e) if (!a.j[c[e]]) {
          c = !1;
          break a;
        }
        c = !0;
      }
      c || (rxb("Updated online screens: " + g.tk(a.j)), a.j = b, a.qa("screenChange"));
      uxb(a);
    },
    l9 = function (a) {
      isNaN(a.C) || g.CA(a.C);
      a.C = g.AA((0, g.$a)(a.KQ, a), 0 < a.D && a.D < g.cb() ? 2E4 : 1E4);
    },
    rxb = function (a) {
      c9("OnlineScreenService", a);
    },
    wxb = function (a) {
      var b = {};
      g.Xb(a.K(), function (c) {
        c.token ? b[c.token] = c.id : this.gg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    uxb = function (a) {
      a = g.$c(g.Tc(a.j, function (b) {
        return b;
      }));
      g.Ub(a);
      a.length ? g.RB("yt-remote-online-screen-ids", a.join(","), 60) : g.TB("yt-remote-online-screen-ids");
    },
    m9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      h9.call(this, "ScreenService");
      this.D = a;
      this.S = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      xxb(this);
    },
    zxb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Ok(),
        l = c ? i8(h, c) : null;
      c && (a.S || l) || (l = i8(h, b));
      if (l) {
        l.uuid = b;
        var m = n9(a, l);
        txb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else c ? yxb(a, c, (0, g.$a)(function (n) {
        var p = n9(this, new f8({
          name: d,
          screenId: c,
          loungeToken: n,
          dialId: b || ""
        }));
        txb(this.j, p, function (q) {
          e(q ? p : null);
        });
      }, a), f) : e(null);
    },
    Axb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d) if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    Bxb = function (a, b, c) {
      txb(a.j, b, c);
    },
    yxb = function (a, b, c, d) {
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
      g.GA(a9(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    Cxb = function (a) {
      a.screens = a.B.Ok();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + Mub(a.screens));
    },
    xxb = function (a) {
      Dxb(a);
      a.B = new j9(a.D);
      a.B.subscribe("screenChange", (0, g.$a)(a.l6, a));
      Cxb(a);
      a.S || (a.C = Lub(g.SB("yt-remote-automatic-screen-cache") || []));
      Dxb(a);
      a.info("Initializing automatic screens: " + Mub(a.C));
      a.j = new sxb(a.D, (0, g.$a)(a.Ok, a, !0));
      a.j.subscribe("screenChange", (0, g.$a)(function () {
        this.qa("onlineScreenChange");
      }, a));
    },
    n9 = function (a, b) {
      var c = a.get(b.id);
      c ? (c.uuid = b.uuid, b = c) : ((c = i8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.S || Exb(a));
      Dxb(a);
      a.G[b.uuid] = b.id;
      g.RB("yt-remote-device-id-map", a.G, 31536E3);
      return b;
    },
    Exb = function (a) {
      a = g.tp(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.RB("yt-remote-automatic-screen-cache", g.En(a, Jub));
    },
    Dxb = function (a) {
      a.G = g.SB("yt-remote-device-id-map") || {};
    },
    o9 = function (a, b, c) {
      g.qG.call(this);
      this.Ga = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    p9 = function (a, b) {
      a.j = b;
      a.qa("sessionScreen", a.j);
    },
    Fxb = function (a, b) {
      a.j && (a.j.token = b, n9(a.D, a.j));
      a.qa("sessionScreen", a.j);
    },
    q9 = function (a, b) {
      c9(a.Ga, b);
    },
    r9 = function (a, b, c) {
      o9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.ra = (0, g.$a)(this.f2, this);
      this.Ja = (0, g.$a)(this.u$, this);
      this.va = g.AA(function () {
        Gxb(d, null);
      }, 12E4);
      this.S = this.G = this.K = this.ma = 0;
      this.Ca = !1;
      this.ea = "unknown";
    },
    Ixb = function (a, b) {
      g.CA(a.S);
      a.S = 0;
      0 == b ? Hxb(a) : a.S = g.AA(function () {
        Hxb(a);
      }, b);
    },
    Hxb = function (a) {
      Jxb(a, "getLoungeToken");
      g.CA(a.G);
      a.G = g.AA(function () {
        Kxb(a, null);
      }, 3E4);
    },
    Jxb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.tk());
      var c = {};
      c.type = b;
      a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function () {}, (0, g.$a)(function () {
        q9(this, "Failed to send message: " + b + ".");
      }, a)) : q9(a, "Sending yt message without session: " + g.tk(c));
    },
    Lxb = function (a, b) {
      b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.iW(b, function (c) {
        p9(a, c);
      }, function () {
        return a.Ej();
      }, 5)) : a.Ej(Error("Waiting for session status timed out."));
    },
    Nxb = function (a, b, c) {
      a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
      var d = new f8(b);
      Mxb(a, d, function (e) {
        e ? (a.Ca = !0, n9(a.D, d), p9(a, d), a.ea = "unknown", Ixb(a, c)) : (g.kA(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Ej());
      }, 5);
    },
    Gxb = function (a, b) {
      g.CA(a.va);
      a.va = 0;
      b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Nxb(a, {
        name: a.B.friendlyName,
        screenId: b.screenId,
        loungeToken: b.loungeToken,
        dialId: b.deviceId,
        screenIdType: "shortLived"
      }, b.loungeTokenRefreshIntervalMs) : (g.kA(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Lxb(a, b.screenId))) : (g.kA(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Lxb(a, b.screenId)) : Lxb(a, b.screenId) : a.Ej(Error("Waiting for session status timed out."));
    },
    Kxb = function (a, b) {
      g.CA(a.G);
      a.G = 0;
      var c = null;
      if (b) {
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      } else c = "noLoungeTokenResponse";
      c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.ea = c, Ixb(a, 3E4)) : (Fxb(a, b.loungeToken), a.Ca = !1, a.ea = "unknown", Ixb(a, b.loungeTokenRefreshIntervalMs));
    },
    Mxb = function (a, b, c, d) {
      g.CA(a.K);
      a.K = 0;
      Bxb(a.D, b, function (e) {
        e || 0 > d ? c(e) : a.K = g.AA(function () {
          Mxb(a, b, c, d - 1);
        }, 300);
      });
    },
    Oxb = function (a) {
      g.CA(a.ma);
      a.ma = 0;
      g.CA(a.K);
      a.K = 0;
      g.CA(a.va);
      a.va = 0;
      g.CA(a.G);
      a.G = 0;
      g.CA(a.S);
      a.S = 0;
    },
    s9 = function (a, b, c, d) {
      o9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.ma = null;
      this.Ja = "";
      this.Va = c;
      this.Pa = null;
      this.va = function () {};
      this.ea = NaN;
      this.Oa = (0, g.$a)(this.j2, this);
      this.G = function () {};
      this.S = this.K = 0;
      this.ra = !1;
      this.Ca = "unknown";
    },
    t9 = function (a) {
      var b;
      return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo));
    },
    Pxb = function (a) {
      a.G = a.D.US(a.Ja, a.B.label, a.B.friendlyName, t9(a), function (b, c) {
        a.G = function () {};
        a.ra = !0;
        p9(a, b);
        "shortLived" == b.idType && 0 < c && u9(a, c);
      }, function (b) {
        a.G = function () {};
        a.Ej(b);
      });
    },
    Qxb = function (a) {
      var b = {};
      b.pairingCode = a.Ja;
      b.theme = a.Va;
      $ub() && (b.env_useStageMdx = 1);
      return g.ck(b);
    },
    Rxb = function (a) {
      return new Promise(function (b) {
        a.Ja = Nub();
        if (a.Pa) {
          var c = new chrome.cast.DialLaunchResponse(!0, Qxb(a));
          b(c);
          Pxb(a);
        } else a.va = function () {
          g.CA(a.ea);
          a.va = function () {};
          a.ea = NaN;
          var d = new chrome.cast.DialLaunchResponse(!0, Qxb(a));
          b(d);
          Pxb(a);
        }, a.ea = g.AA(function () {
          a.va();
        }, 100);
      });
    },
    Txb = function (a, b, c) {
      a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
      var d = new f8(b);
      return new Promise(function (e) {
        Sxb(a, d, function (f) {
          f ? (a.ra = !0, n9(a.D, d), p9(a, d), u9(a, c)) : g.kA(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
          e(f);
        }, 5);
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : Rxb(a);
      });
    },
    Uxb = function (a, b) {
      var c = a.ma.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        zxb(a.D, c, b, d, function (f) {
          f && f.token && p9(a, f);
          e(f);
        }, function (f) {
          q9(a, "Failed to get DIAL screen: " + f);
          e(null);
        });
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Rxb(a);
      });
    },
    Sxb = function (a, b, c, d) {
      g.CA(a.K);
      a.K = 0;
      Bxb(a.D, b, function (e) {
        e || 0 > d ? c(e) : a.K = g.AA(function () {
          Sxb(a, b, c, d - 1);
        }, 300);
      });
    },
    u9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      t9(a) && (g.CA(a.S), a.S = 0, 0 == b ? Vxb(a) : a.S = g.AA(function () {
        Vxb(a);
      }, b));
    },
    Vxb = function (a) {
      t9(a) && a.C.getDialAppInfo(function (b) {
        a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
        b = b.extraData || {};
        var c = null;
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
        c ? (a.Ca = c, u9(a, 3E4)) : (a.ra = !1, a.Ca = "unknown", Fxb(a, b.loungeToken), u9(a, b.loungeTokenRefreshIntervalMs));
      }, function (b) {
        a.info("getDialAppInfo error: " + b);
        a.Ca = "noLoungeTokenResponse";
        u9(a, 3E4);
      });
    },
    Wxb = function (a) {
      g.CA(a.K);
      a.K = 0;
      g.CA(a.S);
      a.S = 0;
      a.G();
      a.G = function () {};
      g.CA(a.ea);
    },
    v9 = function (a, b) {
      o9.call(this, a, b, "ManualSession");
      this.C = g.AA((0, g.$a)(this.Wz, this, null), 150);
    },
    w9 = function (a, b) {
      g.qG.call(this);
      this.config_ = b;
      this.B = a;
      this.ma = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.ea = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.S = !1;
      this.C = [];
      this.G = (0, g.$a)(this.s9, this);
    },
    Xxb = function (a, b) {
      return b ? g.zb(a.C, function (c) {
        return g8(b, c.label);
      }, a) : null;
    },
    x9 = function (a) {
      c9("Controller", a);
    },
    fxb = function (a) {
      window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a);
    },
    y9 = function (a) {
      return a.S || !!a.C.length || !!a.j;
    },
    z9 = function (a, b, c) {
      b != a.j && (g.ob(a.j), (a.j = b) ? (c ? a.qa("yt-remote-cast2-receiver-resumed", b.B) : a.qa("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.$a)(a.KY, a, b)), b.subscribe("sessionFailed", function () {
        return Yxb(a, b);
      }), b.j ? a.qa("yt-remote-cast2-session-change", b.j) : c && a.j.Wz(null)) : a.qa("yt-remote-cast2-session-change", null));
    },
    Yxb = function (a, b) {
      a.j == b && a.qa("yt-remote-cast2-session-failed");
    },
    Zxb = function (a) {
      var b = a.B.SS(),
        c = a.j && a.j.B;
      a = g.En(b, function (d) {
        c && g8(d, c.label) && (c = null);
        var e = d.uuid ? d.uuid : d.id,
          f = Xxb(this, d);
        f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
        return f;
      }, a);
      c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
      return a;
    },
    fyb = function (a, b, c, d) {
      d.disableCastApi ? A9("Cannot initialize because disabled by Mdx config.") : $xb() ? ayb(b, d) && (byb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? cyb(a, c) : (window.__onGCastApiAvailable = function (e, f) {
        e ? cyb(a, c) : (B9("Failed to load cast API: " + f), dyb(!1), byb(!1), g.TB("yt-remote-cast-available"), g.TB("yt-remote-cast-receiver"), eyb(), c(!1));
      }, d.loadCastApiSetupScript ? g.Ipa("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= bvb() && kvb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? fvb() : 89 <= bvb() ? mvb() : (jvb(), p8(lvb.map(gvb))))) : A9("Cannot initialize because not running Chrome");
    },
    eyb = function () {
      A9("dispose");
      var a = C9();
      a && a.dispose();
      g.Qa("yt.mdx.remote.cloudview.instance_", null);
      gyb(!1);
      g.kE(hyb);
      hyb.length = 0;
    },
    D9 = function () {
      return !!g.SB("yt-remote-cast-installed");
    },
    iyb = function () {
      var a = g.SB("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    jyb = function () {
      A9("clearCurrentReceiver");
      g.TB("yt-remote-cast-receiver");
    },
    kyb = function () {
      return D9() ? C9() ? C9().getCastSession() : (B9("getCastSelector: Cast is not initialized."), null) : (B9("getCastSelector: Cast API is not installed!"), null);
    },
    lyb = function () {
      D9() ? C9() ? E9() ? (A9("Requesting cast selector."), C9().requestSession()) : (A9("Wait for cast API to be ready to request the session."), hyb.push(g.jE("yt-remote-cast2-api-ready", lyb))) : B9("requestCastSelector: Cast is not initialized.") : B9("requestCastSelector: Cast API is not installed!");
    },
    F9 = function (a, b) {
      E9() ? C9().setConnectedScreenStatus(a, b) : B9("setConnectedScreenStatus called before ready.");
    },
    $xb = function () {
      var a = 0 <= g.lc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.wJ || a;
    },
    myb = function (a, b) {
      C9().init(a, b);
    },
    ayb = function (a, b) {
      var c = !1;
      C9() || (a = new w9(a, b), a.subscribe("yt-remote-cast2-availability-change", function (d) {
        g.RB("yt-remote-cast-available", d);
        n8("yt-remote-cast2-availability-change", d);
      }), a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
        A9("onReceiverSelected: " + d.friendlyName);
        g.RB("yt-remote-cast-receiver", d);
        n8("yt-remote-cast2-receiver-selected", d);
      }), a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
        A9("onReceiverResumed: " + d.friendlyName);
        g.RB("yt-remote-cast-receiver", d);
        n8("yt-remote-cast2-receiver-resumed", d);
      }), a.subscribe("yt-remote-cast2-session-change", function (d) {
        A9("onSessionChange: " + h8(d));
        d || g.TB("yt-remote-cast-receiver");
        n8("yt-remote-cast2-session-change", d);
      }), g.Qa("yt.mdx.remote.cloudview.instance_", a), c = !0);
      A9("cloudview.createSingleton_: " + c);
      return c;
    },
    C9 = function () {
      return g.Ra("yt.mdx.remote.cloudview.instance_");
    },
    cyb = function (a, b) {
      dyb(!0);
      byb(!1);
      myb(a, function (c) {
        c ? (gyb(!0), g.lE("yt-remote-cast2-api-ready")) : (B9("Failed to initialize cast API."), dyb(!1), g.TB("yt-remote-cast-available"), g.TB("yt-remote-cast-receiver"), eyb());
        b(c);
      });
    },
    A9 = function (a) {
      c9("cloudview", a);
    },
    B9 = function (a) {
      c9("cloudview", a);
    },
    dyb = function (a) {
      A9("setCastInstalled_ " + a);
      g.RB("yt-remote-cast-installed", a);
    },
    E9 = function () {
      return !!g.Ra("yt.mdx.remote.cloudview.apiReady_");
    },
    gyb = function (a) {
      A9("setApiReady_ " + a);
      g.Qa("yt.mdx.remote.cloudview.apiReady_", a);
    },
    byb = function (a) {
      g.Qa("yt.mdx.remote.cloudview.initializing_", a);
    },
    G9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.S = 0;
      this.trackData = null;
      this.Tk = this.Bp = !1;
      this.ma = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    nyb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.Bp = !1;
      a.Tk = !1;
      a.S = 0;
      a.K = g.cb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.ma = 0;
      a.C = NaN;
      a.B = !1;
    },
    H9 = function (a) {
      return a.isPlaying() ? (g.cb() - a.K) / 1E3 : 0;
    },
    I9 = function (a, b) {
      a.S = b;
      a.K = g.cb();
    },
    J9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.cb() - a.K) / 1E3 + a.S;
        case -1E3:
          return 0;
      }
      return a.S;
    },
    K9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && nyb(a);
    },
    oyb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.ld(a.trackData);
      b.hasPrevious = a.Bp;
      b.hasNext = a.Tk;
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
      g.qG.call(this);
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new Twb();
      this.B = this.j = null;
      this.ea = (0, g.$a)(this.k8, this);
      this.S = (0, g.$a)(this.mE, this);
      this.ma = (0, g.$a)(this.j8, this);
      this.va = (0, g.$a)(this.n8, this);
      var c = 0;
      a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.dR, this), pyb(this))) : c = 3;
      0 != c && (b ? this.dR(c) : g.AA((0, g.$a)(function () {
        this.dR(c);
      }, this), 0));
      (a = kyb()) && L9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.va);
    },
    N9 = function (a) {
      return new G9(a.D.getPlayerContextData());
    },
    pyb = function (a) {
      g.Xb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function (b) {
        this.K.push(this.D.subscribe(b, g.bb(this.q9, b), this));
      }, a);
    },
    qyb = function (a) {
      g.Xb(a.K, function (b) {
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
    ryb = function (a, b, c) {
      var d = N9(a);
      I9(d, c);
      -1E3 != d.playerState && (d.playerState = b);
      Q9(a, d);
    },
    R9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    Q9 = function (a, b) {
      qyb(a);
      a.D.setPlayerContextData(oyb(b));
      pyb(a);
    },
    L9 = function (a, b) {
      a.B && (a.B.removeUpdateListener(a.ea), a.B.removeMediaListener(a.S), a.mE(null));
      a.B = b;
      a.B && (d9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.ea), a.B.addMediaListener(a.S), a.B.media.length && a.mE(a.B.media[0]));
    },
    syb = function (a) {
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
      return (0, g.$a)(function (d) {
        this.gg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
        d.code != chrome.cast.ErrorCode.TIMEOUT && (this.gg("Retrying " + b + " using MDx browser channel."), R9(this, b, c));
      }, a);
    },
    V9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.qG.call(this);
      var e = this;
      this.K = NaN;
      this.Ja = !1;
      this.ea = this.ma = this.ra = this.Ca = NaN;
      this.va = [];
      this.G = this.S = this.D = this.j = this.B = null;
      this.Pa = a;
      this.Oa = d;
      this.va.push(g.FB(window, "beforeunload", function () {
        e.iz(2);
      }));
      this.C = [];
      this.j = new G9();
      this.Va = b.id;
      this.Ga = b.idType;
      this.B = exb(this.Pa, c, this.YS, "shortLived" == this.Ga, this.Va);
      this.B.Ua("channelOpened", function () {
        tyb(e);
      });
      this.B.Ua("channelClosed", function () {
        T9("Channel closed");
        isNaN(e.K) ? l8(!0) : l8();
        e.dispose();
      });
      this.B.Ua("channelError", function (f) {
        l8();
        isNaN(e.iD()) ? (1 == f && "shortLived" == e.Ga && e.qa("browserChannelAuthError", f), T9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ja = !0, T9("Channel error: " + f + " with reconnection in " + e.iD() + " ms"), U9(e, 2));
      });
      this.B.Ua("channelMessage", function (f) {
        uyb(e, f);
      });
      this.B.Pr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.UB() && g.RB("yt-remote-session-video-id", f);
      });
    },
    vyb = function (a) {
      return g.zb(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    T9 = function (a) {
      c9("conn", a);
    },
    U9 = function (a, b) {
      a.qa("proxyStateChange", b);
    },
    wyb = function (a) {
      a.K = g.AA(function () {
        T9("Connecting timeout");
        a.iz(1);
      }, 2E4);
    },
    xyb = function (a) {
      g.CA(a.K);
      a.K = NaN;
    },
    yyb = function (a) {
      g.CA(a.Ca);
      a.Ca = NaN;
    },
    Ayb = function (a) {
      zyb(a);
      a.ra = g.AA(function () {
        W9(a, "getNowPlaying");
      }, 2E4);
    },
    zyb = function (a) {
      g.CA(a.ra);
      a.ra = NaN;
    },
    tyb = function (a) {
      T9("Channel opened");
      a.Ja && (a.Ja = !1, yyb(a), a.Ca = g.AA(function () {
        T9("Timing out waiting for a screen.");
        a.iz(1);
      }, 15E3));
    },
    Cyb = function (a, b) {
      var c = null;
      if (b) {
        var d = vyb(a);
        d && (c = {
          clientName: d.clientName,
          deviceMake: d.brand,
          deviceModel: d.model,
          osVersion: d.osVersion
        });
      }
      g.Qa("yt.mdx.remote.remoteClient_", c);
      b && (xyb(a), yyb(a));
      c = a.B.Lz() && isNaN(a.K);
      b == c ? b && (U9(a, 1), W9(a, "getSubtitlesTrack")) : b ? (a.eW() && a.j.reset(), U9(a, 1), W9(a, "getNowPlaying"), Byb(a)) : a.iz(1);
    },
    Dyb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId && (g.dd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.qa("remotePlayerChange"));
    },
    Eyb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      K9(a.j, d, e);
      a.qa("remoteQueueChange", c);
    },
    Gyb = function (a, b) {
      b.params = b.params || {};
      Eyb(a, b, "NOW_PLAYING_MAY_CHANGE");
      Fyb(a, b);
      a.qa("autoplayDismissed");
    },
    Fyb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      I9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1E3 == a.j.playerState && (c = -1E3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.ma = isNaN(c) ? 0 : c;
      a.j.xl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? Ayb(a) : zyb(a);
      a.qa("remotePlayerChange");
    },
    Hyb = function (a, b) {
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
        a.qa("remotePlayerChange");
      }
    },
    Iyb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.qa("remotePlayerChange");
    },
    Jyb = function (a, b) {
      a.S = b.params.videoId;
      a.qa("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    Kyb = function (a, b) {
      a.S = b.params.videoId || null;
      a.qa("autoplayUpNext", a.S);
    },
    Lyb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.qa("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.qa("autoplayDismissed");
    },
    Myb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.Bp = "true" == b.params.hasPrevious;
      a.j.Tk = c;
      a.qa("previousNextChange");
    },
    uyb = function (a, b) {
      b = b.message;
      b.params ? T9("Received: action=" + b.action + ", params=" + g.tk(b.params)) : T9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = c8(b.params.devices);
          a.C = g.En(b, function (d) {
            return new e8(d);
          });
          b = !!g.zb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          Cyb(a, b);
          b = a.eX("mlm");
          a.qa("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Gb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          Cyb(a, !1);
          break;
        case "remoteConnected":
          var c = new e8(c8(b.params.device));
          g.zb(a.C, function (d) {
            return d.equals(c);
          }) || pub(a.C, c);
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
          Eyb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          Gyb(a, b);
          break;
        case "onStateChange":
          Fyb(a, b);
          break;
        case "onAdStateChange":
          Hyb(a, b);
          break;
        case "onVolumeChanged":
          Iyb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          Dyb(a, b);
          break;
        case "nowAutoplaying":
          Jyb(a, b);
          break;
        case "autoplayDismissed":
          a.qa("autoplayDismissed");
          break;
        case "autoplayUpNext":
          Kyb(a, b);
          break;
        case "onAutoplayModeChanged":
          Lyb(a, b);
          break;
        case "onHasPreviousNextChanged":
          Myb(a, b);
          break;
        case "requestAssistedSignIn":
          a.qa("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.qa("loopModeChange", b.params.loopMode);
          break;
        default:
          T9("Unrecognized action: " + b.action);
      }
    },
    Byb = function (a) {
      g.CA(a.ea);
      a.ea = g.AA(function () {
        a.iz(1);
      }, 864E5);
    },
    W9 = function (a, b, c) {
      c ? T9("Sending: action=" + b + ", params=" + g.tk(c)) : T9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    Nyb = function (a) {
      h9.call(this, "ScreenServiceProxy");
      this.lh = a;
      this.j = [];
      this.j.push(this.lh.$_s("screenChange", (0, g.$a)(this.o2, this)));
      this.j.push(this.lh.$_s("onlineScreenChange", (0, g.$a)(this.Z8, this)));
    },
    Syb = function (a, b) {
      Zub();
      if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.dA("MDX_CONFIG") || b;
        Qub();
        Uub();
        X9 || (X9 = new $8(b ? b.loungeApiHost : void 0), $ub() && (X9.j = "/api/loungedev"));
        Y9 || (Y9 = g.Ra("yt.mdx.remote.deferredProxies_") || [], g.Qa("yt.mdx.remote.deferredProxies_", Y9));
        Oyb();
        var c = Z9();
        if (!c) {
          var d = new m9(X9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Qa("yt.mdx.remote.screenService_", d);
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
          g.Qa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
          fyb(a, d, function (f) {
            f ? $9() && F9($9(), "YouTube TV") : d.subscribe("onlineScreenChange", function () {
              n8("yt-remote-receiver-availability-change");
            });
          }, e);
        }
        b && !g.Ra("yt.mdx.remote.initialized_") && (g.Qa("yt.mdx.remote.initialized_", !0), a$("Initializing: " + g.tk(b)), b$.push(g.jE("yt-remote-cast2-api-ready", function () {
          n8("yt-remote-api-ready");
        })), b$.push(g.jE("yt-remote-cast2-availability-change", function () {
          n8("yt-remote-receiver-availability-change");
        })), b$.push(g.jE("yt-remote-cast2-receiver-selected", function () {
          c$(null);
          n8("yt-remote-auto-connect", "cast-selector-receiver");
        })), b$.push(g.jE("yt-remote-cast2-receiver-resumed", function () {
          n8("yt-remote-receiver-resumed", "cast-selector-receiver");
        })), b$.push(g.jE("yt-remote-cast2-session-change", Pyb)), b$.push(g.jE("yt-remote-connection-change", function (f) {
          f ? F9($9(), "YouTube TV") : d$() || (F9(null, null), jyb());
        })), b$.push(g.jE("yt-remote-cast2-session-failed", function () {
          n8("yt-remote-connection-failed");
        })), a = Qyb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.fA("desktop_enable_autoplay") && e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), a$(" -- with channel params: " + g.tk(a)), a ? (g.RB("yt-remote-session-app", a.app), g.RB("yt-remote-session-name", a.name)) : (g.TB("yt-remote-session-app"), g.TB("yt-remote-session-name")), g.Qa("yt.mdx.remote.channelParams_", a), c.start(), $9() || Ryb());
      }
    },
    Tyb = function () {
      var a = Z9().lh.$_gos();
      var b = e$();
      b && f$() && (Pub(a, b) || a.push(b));
      return Oub(a);
    },
    Vyb = function () {
      var a = Uyb();
      !a && D9() && iyb() && (a = {
        key: "cast-selector-receiver",
        name: iyb()
      });
      return a;
    },
    Uyb = function () {
      var a = Tyb(),
        b = e$();
      b || (b = d$());
      return g.zb(a, function (c) {
        return b && g8(b, c.key) ? !0 : !1;
      });
    },
    e$ = function () {
      var a = $9();
      if (!a) return null;
      var b = Z9().Ok();
      return i8(b, a);
    },
    Pyb = function (a) {
      a$("remote.onCastSessionChange_: " + h8(a));
      if (a) {
        var b = e$();
        if (b && b.id == a.id) {
          if (F9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) g$ && (g$.token = a), (b = f$()) && b.Pr(a);
        } else b && h$(), i$(a, 1);
      } else f$() && h$();
    },
    h$ = function () {
      E9() ? C9().stopSession() : B9("stopSession called before API ready.");
      var a = f$();
      a && (a.disconnect(1), Wyb(null));
    },
    Xyb = function () {
      var a = f$();
      return !!a && 3 != a.getProxyState();
    },
    a$ = function (a) {
      c9("remote", a);
    },
    Z9 = function () {
      if (!Yyb) {
        var a = g.Ra("yt.mdx.remote.screenService_");
        Yyb = a ? new Nyb(a) : null;
      }
      return Yyb;
    },
    $9 = function () {
      return g.Ra("yt.mdx.remote.currentScreenId_");
    },
    Zyb = function (a) {
      g.Qa("yt.mdx.remote.currentScreenId_", a);
    },
    $yb = function () {
      return g.Ra("yt.mdx.remote.connectData_");
    },
    c$ = function (a) {
      g.Qa("yt.mdx.remote.connectData_", a);
    },
    f$ = function () {
      return g.Ra("yt.mdx.remote.connection_");
    },
    Wyb = function (a) {
      var b = f$();
      c$(null);
      a || Zyb("");
      g.Qa("yt.mdx.remote.connection_", a);
      Y9 && (g.Xb(Y9, function (c) {
        c(a);
      }), Y9.length = 0);
      b && !a ? n8("yt-remote-connection-change", !1) : !b && a && n8("yt-remote-connection-change", !0);
    },
    d$ = function () {
      var a = g.UB();
      if (!a) return null;
      var b = Z9();
      if (!b) return null;
      b = b.Ok();
      return i8(b, a);
    },
    i$ = function (a, b) {
      $9();
      e$() && e$();
      if (j$) g$ = a;else {
        Zyb(a.id);
        var c = g.Ra("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new V9(X9, a, Qyb(), c);
        a.connect(b, $yb());
        a.subscribe("beforeDisconnect", function (d) {
          n8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          f$() && (f$(), Wyb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = e$();
          d && "shortLived" == d.idType && (E9() ? C9().handleBrowserChannelAuthError() : B9("refreshLoungeToken called before API ready."));
        });
        Wyb(a);
      }
    },
    Ryb = function () {
      var a = d$();
      a ? (a$("Resume connection to: " + h8(a)), i$(a, 0)) : (l8(), jyb(), a$("Skipping connecting because no session screen found."));
    },
    Oyb = function () {
      var a = Qyb();
      if (g.dd(a)) {
        a = k8();
        var b = g.SB("yt-remote-session-name") || "",
          c = g.SB("yt-remote-session-app") || "";
        a = {
          device: "REMOTE_CONTROL",
          id: a,
          name: b,
          app: c,
          mdxVersion: 3
        };
        a.authuser = String(g.dA("SESSION_INDEX", "0"));
        (b = g.dA("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Qa("yt.mdx.remote.channelParams_", a);
      }
    },
    Qyb = function () {
      return g.Ra("yt.mdx.remote.channelParams_") || {};
    },
    czb = function (a, b, c) {
      g.G.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Gc = c;
      this.events = new g.tJ(this);
      this.ea = this.events.V(this.J, "onVolumeChange", function (e) {
        azb(d, e);
      });
      this.D = !1;
      this.G = new g.aP(64);
      this.j = new g.fr(this.i_, 500, this);
      this.B = new g.fr(this.k_, 1E3, this);
      this.S = new q8(this.uba, 0, this);
      this.C = {};
      this.ma = new g.fr(this.X_, 1E3, this);
      this.K = new r8(this.seekTo, 1E3, this);
      g.H(this, this.events);
      this.events.V(b, "onCaptionsTrackListChanged", this.J8);
      this.events.V(b, "captionschanged", this.h8);
      this.events.V(b, "captionssettingschanged", this.t_);
      this.events.V(b, "videoplayerreset", this.aJ);
      this.events.V(b, "mdxautoplaycancel", function () {
        d.Gc.rV();
      });
      b.N("enable_mdx_video_play_directly") && this.events.V(b, "videodatachange", function () {
        bzb(d.module) || k$(d) || l$(d, 0);
      });
      a = this.Gc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.GY, this);
      a.subscribe("remotePlayerChange", this.sE, this);
      a.subscribe("remoteQueueChange", this.aJ, this);
      a.subscribe("previousNextChange", this.DY, this);
      a.subscribe("nowAutoplaying", this.yY, this);
      a.subscribe("autoplayDismissed", this.dY, this);
      g.H(this, this.j);
      g.H(this, this.B);
      g.H(this, this.S);
      g.H(this, this.ma);
      g.H(this, this.K);
      this.t_();
      this.aJ();
      this.sE();
    },
    azb = function (a, b) {
      if (k$(a)) {
        a.Gc.unsubscribe("remotePlayerChange", a.sE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = N9(a.Gc);
        if (c !== d.volume || b !== d.muted) a.Gc.setVolume(c, b), a.ma.start();
        a.Gc.subscribe("remotePlayerChange", a.sE, a);
      }
    },
    dzb = function (a) {
      a.Dc(0);
      a.j.stop();
      a.yc(new g.aP(64));
    },
    ezb = function (a, b) {
      if (k$(a) && !a.D) {
        var c = null;
        b && (c = {
          style: a.J.getSubtitlesUserSettings()
        }, g.md(c, b));
        a.Gc.XS(a.J.getVideoData(1).videoId, c);
        a.C = N9(a.Gc).trackData;
      }
    },
    l$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Gc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ca, oub(c));
      a.yc(new g.aP(1));
    },
    fzb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", {
          SW: 1
        });
        c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0);
      } else a.J.setOption("captions", "track", {});
    },
    k$ = function (a) {
      return N9(a.Gc).videoId === a.J.getVideoData(1).videoId;
    },
    m$ = function () {
      g.X.call(this, {
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
      this.j = new g.CQ(this, 250);
      this.cancelButton = this.Ia("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ia("ytp-mdx-privacy-popup-confirm");
      g.H(this, this.j);
      this.V(this.cancelButton, "click", this.B);
      this.V(this.confirmButton, "click", this.C);
    },
    n$ = function (a) {
      g.X.call(this, {
        I: "div",
        T: "ytp-remote",
        X: [{
          I: "div",
          T: "ytp-remote-display-status",
          X: [{
            I: "div",
            T: "ytp-remote-display-status-icon",
            X: [g.lGa()]
          }, {
            I: "div",
            T: "ytp-remote-display-status-text",
            Aa: "{{statustext}}"
          }]
        }]
      });
      this.api = a;
      this.j = new g.CQ(this, 250);
      g.H(this, this.j);
      this.V(a, "presentingplayerstatechange", this.onStateChange);
      this.Ec(a.Lb());
    },
    o$ = function (a, b) {
      g.lV.call(this, "Play on", 1, a, b);
      this.J = a;
      this.vu = {};
      this.V(a, "onMdxReceiversChange", this.D);
      this.V(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    gzb = function (a) {
      g.dT.call(this, a);
      this.Lp = {
        key: Nub(),
        name: "This computer"
      };
      this.Xl = null;
      this.subscriptions = [];
      this.kQ = this.Gc = null;
      this.vu = [this.Lp];
      this.Us = this.Lp;
      this.nf = new g.aP(64);
      this.qX = 0;
      this.Ph = -1;
      this.LE = !1;
      this.KE = this.IA = null;
      if (!g.CL(this.player.W()) && !g.DL(this.player.W())) {
        a = this.player;
        var b = g.LR(a);
        b && (b = b.un()) && (b = new o$(a, b), g.H(this, b));
        b = new n$(a);
        g.H(this, b);
        g.cS(a, b.element, 4);
        this.IA = new m$();
        g.H(this, this.IA);
        g.cS(a, this.IA.element, 4);
        this.LE = !!d$();
      }
    },
    p$ = function (a) {
      a.KE && (a.player.removeEventListener("presentingplayerstatechange", a.KE), a.KE = null);
    },
    hzb = function (a, b, c) {
      a.nf = c;
      a.player.qa("presentingplayerstatechange", new g.GO(c, b));
    },
    q$ = function (a, b) {
      if (b.key !== a.Us.key) if (b.key === a.Lp.key) h$();else if (bzb(a) && izb(a), a.Us = b, !a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.DL(a.player.W())) {
        var c = a.player.getPlaylistId();
        var d = a.player.getVideoData(1);
        var e = d.videoId;
        if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted")) d = null;else {
          var f = a.player.getPlaylist();
          if (f) {
            var h = [];
            for (var l = 0; l < f.length; l++) h[l] = g.aT(f, l).videoId;
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
          (d = oub(d)) && (a.locationInfo = d);
          d = a;
        }
        a$("Connecting to: " + g.tk(b));
        "cast-selector-receiver" == b.key ? (c$(d || null), b = d || null, E9() ? C9().setLaunchParams(b) : B9("setLaunchParams called before ready.")) : !d && Xyb() && $9() == b.key ? n8("yt-remote-connection-change", !0) : (h$(), c$(d || null), d = Z9().Ok(), (b = i8(d, b.key)) && i$(b, 1));
      }
    },
    bzb = function (a) {
      var b;
      (b = !a.player.W().N("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.dA("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.dA("SESSION_INDEX") && !g.dA("LOGGED_IN"))) || a.LE || !a.IA);
      return b ? !1 : g.QL(a.player.W()) || g.TL(a.player.W());
    },
    izb = function (a) {
      a.player.Lb().isPlaying() ? a.player.pauseVideo() : (a.KE = function (b) {
        !a.LE && g.IO(b, 8) && (a.player.pauseVideo(), p$(a));
      }, a.player.addEventListener("presentingplayerstatechange", a.KE));
      a.IA && a.IA.xd();
      f$() || (j$ = !0);
    };
  g.Wu.prototype.qt = g.ba(0, function () {
    return g.Pi(this, 6);
  });
  var rwb = {
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
    Hub = {
      ama: "atp",
      q_a: "ska",
      CXa: "que",
      CPa: "mus",
      p_a: "sus",
      rBa: "dsp",
      IYa: "seq",
      fOa: "mic",
      Jsa: "dpa",
      ina: "cds",
      tPa: "mlm",
      xsa: "dsdtr",
      cQa: "ntb",
      nab: "vsp",
      zta: "scn",
      QXa: "rpe"
    },
    Iub = {
      S3: "u",
      CLASSIC: "cl",
      B3: "k",
      Y0: "i",
      J0: "cr",
      H3: "m",
      V0: "g",
      fU: "up"
    };
  e8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var m8,
    Tub = "";
  avb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.fA("enable_client_streamz_web")) {
      a = g.v(a);
      for (var c = a.next(); !c.done; c = a.next()) c = g.Sea(c.value), c = {
        serializedIncrementBatch: g.eg(c.j())
      }, g.tC("streamzIncremented", c, {
        sendIsolatedPayload: b
      });
    }
  };
  var o8,
    ivb = cvb("loadCastFramework") || cvb("loadCastApplicationFramework"),
    lvb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
  g.db(q8, g.G);
  g.k = q8.prototype;
  g.k.H1 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.Oc ? this.C = g.cb() + this.Xi : this.Oc = g.Tf(this.G, this.Xi);
  };
  g.k.stop = function () {
    this.Oc && (g.Pa.clearTimeout(this.Oc), this.Oc = null);
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
  g.k.ya = function () {
    this.stop();
    q8.Uf.ya.call(this);
  };
  g.k.I1 = function () {
    this.Oc && (g.Pa.clearTimeout(this.Oc), this.Oc = null);
    this.C ? (this.Oc = g.Tf(this.G, this.C - g.cb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D));
  };
  g.x(r8, g.G);
  g.k = r8.prototype;
  g.k.HK = function (a) {
    this.C = arguments;
    this.Oc || this.B ? this.j = !0 : nvb(this);
  };
  g.k.stop = function () {
    this.Oc && (g.Pa.clearTimeout(this.Oc), this.Oc = null, this.j = !1, this.C = null);
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.Oc || (this.j = !1, nvb(this));
  };
  g.k.ya = function () {
    g.G.prototype.ya.call(this);
    this.stop();
  };
  s8.prototype.stringify = function (a) {
    return g.Pa.JSON.stringify(a, void 0);
  };
  s8.prototype.parse = function (a) {
    return g.Pa.JSON.parse(a, void 0);
  };
  g.db(ovb, g.wb);
  g.db(pvb, g.wb);
  var qvb = null;
  g.db(svb, g.wb);
  g.db(tvb, g.wb);
  g.db(uvb, g.wb);
  vvb.prototype.info = function () {};
  vvb.prototype.warning = function () {};
  var Cvb = {},
    y8 = {};
  g.k = w8.prototype;
  g.k.setTimeout = function (a) {
    this.Hb = a;
  };
  g.k.L1 = function (a) {
    a = a.target;
    var b = this.fb;
    b && 3 == g.Ak(a) ? b.HK() : this.AS(a);
  };
  g.k.AS = function (a) {
    try {
      if (a == this.j) a: {
        var b = g.Ak(this.j),
          c = this.j.B,
          d = this.j.getStatus();
        if (!(3 > b) && (3 != b || g.UL || this.j && (this.B.B || g.Tk(this.j) || g.Uk(this.j)))) {
          this.Oa || 4 != b || 7 == c || (8 == c || 0 >= d ? t8(3) : t8(2));
          B8(this);
          var e = this.j.getStatus();
          this.Zb = e;
          b: if (Avb(this)) {
            var f = g.Uk(this.j);
            a = "";
            var h = f.length,
              l = 4 == g.Ak(this.j);
            if (!this.B.C) {
              if ("undefined" === typeof TextDecoder) {
                z8(this);
                A8(this);
                var m = "";
                break b;
              }
              this.B.C = new g.Pa.TextDecoder();
            }
            for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
              stream: l && c == h - 1
            });
            f.splice(0, h);
            this.B.j += a;
            this.va = 0;
            m = this.B.j;
          } else m = g.Tk(this.j);
          if (this.C = 200 == e) {
            if (this.zc && !this.Za) {
              b: {
                if (this.j) {
                  var n = g.Vk(this.j, "X-HTTP-Initial-Response");
                  if (n && !g.bc(n)) {
                    var p = n;
                    break b;
                  }
                }
                p = null;
              }
              if (e = p) this.Za = !0, Dvb(this, e);else {
                this.C = !1;
                this.K = 3;
                u8(12);
                z8(this);
                A8(this);
                break a;
              }
            }
            this.Ga ? (Evb(this, b, m), g.UL && this.C && 3 == b && (this.ob.Ua(this.tb, "tick", this.K1), this.tb.start())) : Dvb(this, m);
            4 == b && z8(this);
            this.C && !this.Oa && (4 == b ? Gvb(this.G, this) : (this.C = !1, x8(this)));
          } else g.Ifa(this.j), 400 == e && 0 < m.indexOf("Unknown SID") ? (this.K = 3, u8(12)) : (this.K = 0, u8(13)), z8(this), A8(this);
        }
      }
    } catch (q) {} finally {}
  };
  g.k.K1 = function () {
    if (this.j) {
      var a = g.Ak(this.j),
        b = g.Tk(this.j);
      this.va < b.length && (B8(this), Evb(this, a, b), this.C && 4 != a && x8(this));
    }
  };
  g.k.cancel = function () {
    this.Oa = !0;
    z8(this);
  };
  g.k.J1 = function () {
    this.ea = null;
    var a = Date.now();
    0 <= a - this.Vb ? (2 != this.Va && (t8(3), u8(17)), z8(this), this.K = 2, A8(this)) : Fvb(this, this.Vb - a);
  };
  g.k.getLastError = function () {
    return this.K;
  };
  g.k.KN = function () {
    return this.j;
  };
  Pvb.prototype.cancel = function () {
    this.C = Rvb(this);
    if (this.B) this.B.cancel(), this.B = null;else if (this.j && 0 !== this.j.size) {
      for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
      this.j.clear();
    }
  };
  g.k = Vvb.prototype;
  g.k.BS = 8;
  g.k.Ih = 1;
  g.k.connect = function (a, b, c, d) {
    u8(0);
    this.Tc = a;
    this.Oa = b || {};
    c && void 0 !== d && (this.Oa.OSID = c, this.Oa.OAID = d);
    this.Za = this.Bd;
    this.Pa = Lvb(this, null, this.Tc);
    F8(this);
  };
  g.k.disconnect = function () {
    Xvb(this);
    if (3 == this.Ih) {
      var a = this.kb++,
        b = this.Pa.clone();
      g.km(b, "SID", this.D);
      g.km(b, "RID", a);
      g.km(b, "TYPE", "terminate");
      I8(this, b);
      a = new w8(this, this.D, a);
      a.Va = 2;
      a.S = a8(b.clone());
      b = !1;
      if (g.Pa.navigator && g.Pa.navigator.sendBeacon) try {
        b = g.Pa.navigator.sendBeacon(a.S.toString(), "");
      } catch (c) {}
      !b && g.Pa.Image && (new Image().src = a.S, b = !0);
      b || (a.j = zvb(a.G, null), a.j.send(a.S));
      a.Ca = Date.now();
      x8(a);
    }
    cwb(this);
  };
  g.k.nh = function () {
    return 0 == this.Ih;
  };
  g.k.getState = function () {
    return this.Ih;
  };
  g.k.DS = function (a) {
    if (this.K) if (this.K = null, 1 == this.Ih) {
      if (!a) {
        this.kb = Math.floor(1E5 * Math.random());
        a = this.kb++;
        var b = new w8(this, "", a),
          c = this.ea;
        this.Vb && (c ? (c = g.kd(c), g.md(c, this.Vb)) : c = this.Vb);
        null !== this.S || this.zb || (b.Pa = c, c = null);
        var d;
        if (this.Hb) a: {
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
        d = $vb(this, b, d);
        e = this.Pa.clone();
        g.km(e, "RID", a);
        g.km(e, "CVER", 22);
        this.Ga && g.km(e, "X-HTTP-Session-Id", this.Ga);
        I8(this, e);
        c && (this.zb ? d = "headers=" + g.we(g.xga(c)) + "&" + d : this.S && g.om(e, this.S, c));
        Kvb(this.B, b);
        this.og && g.km(e, "TYPE", "init");
        this.Hb ? (g.km(e, "$req", d), g.km(e, "SID", "null"), b.zc = !0, yvb(b, e, null)) : yvb(b, e, d);
        this.Ih = 2;
      }
    } else 3 == this.Ih && (a ? awb(this, a) : 0 == this.C.length || Qvb(this.B) || awb(this));
  };
  g.k.CS = function () {
    this.ma = null;
    bwb(this);
    if (this.Wc && !(this.tb || null == this.j || 0 >= this.wd)) {
      var a = 2 * this.wd;
      this.Ja = v8((0, g.$a)(this.g8, this), a);
    }
  };
  g.k.g8 = function () {
    this.Ja && (this.Ja = null, this.Za = !1, this.tb = !0, u8(10), D8(this), bwb(this));
  };
  g.k.uP = function (a) {
    this.j == a && this.Wc && !this.tb && (Wvb(this), this.tb = !0, u8(11));
  };
  g.k.M1 = function () {
    null != this.va && (this.va = null, D8(this), Ivb(this), u8(19));
  };
  g.k.Xaa = function (a) {
    a ? u8(2) : u8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = ewb.prototype;
  g.k.HS = function () {};
  g.k.GS = function () {};
  g.k.FS = function () {};
  g.k.ES = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.N1 = function () {};
  g.db(K8, g.Cd);
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
    } else this.D && (c = {}, c.__data__ = g.tk(a), a = c);
    b.C.push(new Ovb(b.hg++, a));
    3 == b.Ih && F8(b);
  };
  K8.prototype.ya = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    K8.Uf.ya.call(this);
  };
  g.db(gwb, ovb);
  g.db(hwb, pvb);
  g.db(J8, ewb);
  J8.prototype.HS = function () {
    this.j.dispatchEvent("m");
  };
  J8.prototype.GS = function (a) {
    this.j.dispatchEvent(new gwb(a));
  };
  const nativeSetTimeout = window.setTimeout;
  J8.prototype.FS = function (a) {
    this.j.dispatchEvent(new hwb(a));
  };
  J8.prototype.ES = function () {
    this.j.dispatchEvent("n");
  };
  var M8 = new g.Cd();
  g.x(kwb, g.wb);
  g.k = O8.prototype;
  g.k.Su = null;
  g.k.gq = !1;
  g.k.Lx = null;
  g.k.JK = null;
  g.k.Jx = null;
  g.k.Kx = null;
  g.k.As = null;
  g.k.Cs = null;
  const nativeSetInterval = window.setInterval;
  g.k.Tu = null;
  g.k.jj = null;
  const nativeLocalStorage = localStorage;
  g.k.WF = 0;
  g.k.zo = null;
  g.k.VF = null;
  g.k.Bs = null;
  g.k.QB = -1;
  const eventHooks = window.eventHooks;
  g.k.PZ = !0;
  g.k.Ru = !1;
  g.k.IK = 0;
  g.k.UF = null;
  var pwb = {},
    owb = {};
  g.k = O8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.P1 = function (a) {
    a = a.target;
    var b = this.UF;
    b && 3 == g.Ak(a) ? b.HK() : this.IS(a);
  };
  g.k.IS = function (a) {
    try {
      if (a == this.jj) a: {
        var b = g.Ak(this.jj),
          c = this.jj.B,
          d = this.jj.getStatus();
        if (g.Pe && !g.Mc(10) || g.Nc && !g.Lc("420+")) {
          if (4 > b) break a;
        } else if (3 > b || 3 == b && !g.Tk(this.jj)) break a;
        this.Ru || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Qn(3) : this.j.Qn(2));
        uwb(this);
        var e = this.jj.getStatus();
        this.QB = e;
        var f = g.Tk(this.jj);
        if (this.gq = 200 == e) {
          4 == b && Q8(this);
          if (this.Ga) {
            for (a = !0; !this.Ru && this.WF < f.length;) {
              var h = qwb(this, f);
              if (h == owb) {
                4 == b && (this.Bs = 4, N8(15), a = !1);
                break;
              } else if (h == pwb) {
                this.Bs = 4;
                N8(16);
                a = !1;
                break;
              } else vwb(this, h);
            }
            4 == b && 0 == f.length && (this.Bs = 1, N8(17), a = !1);
            this.gq = this.gq && a;
            a || (Q8(this), R8(this));
          } else vwb(this, f);
          this.gq && !this.Ru && (4 == b ? this.j.XF(this) : (this.gq = !1, P8(this)));
        } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Bs = 3, N8(13)) : (this.Bs = 0, N8(14)), Q8(this), R8(this);
      }
    } catch (l) {} finally {}
  };
  g.k.n$ = function (a) {
    L8((0, g.$a)(this.m$, this, a), 0);
  };
  g.k.m$ = function (a) {
    this.Ru || (uwb(this), vwb(this, a), P8(this));
  };
  g.k.MY = function (a) {
    L8((0, g.$a)(this.l$, this, a), 0);
  };
  g.k.l$ = function (a) {
    this.Ru || (Q8(this), this.gq = a, this.j.XF(this), this.j.Qn(4));
  };
  g.k.cancel = function () {
    this.Ru = !0;
    Q8(this);
  };
  g.k.O1 = function () {
    this.Lx = null;
    var a = Date.now();
    0 <= a - this.JK ? (2 != this.Kx && this.j.Qn(3), Q8(this), this.Bs = 2, N8(18), R8(this)) : twb(this, this.JK - a);
  };
  const domEvents = ['click', 'blur', 'focus', 'change'];
  g.k.getLastError = function () {
    return this.Bs;
  };
  g.k = ywb.prototype;
  g.k.LK = null;
  g.k.Rj = null;
  g.k.xJ = !1;
  g.k.l_ = null;
  g.k.gH = null;
  g.k.GO = null;
  g.k.MK = null;
  g.k.Ul = null;
  g.k.hq = -1;
  g.k.RB = null;
  g.k.oC = null;
  g.k.connect = function (a) {
    this.MK = a;
    a = U8(this.j, null, this.MK);
    N8(3);
    this.l_ = Date.now();
    var b = this.j.ea;
    null != b ? (this.RB = b[0], (this.oC = b[1]) ? (this.Ul = 1, zwb(this)) : (this.Ul = 2, Awb(this))) : (b8(a, "MODE", "init"), this.Rj = new O8(this), this.Rj.Su = this.LK, nwb(this.Rj, a, !1, null, !0), this.Ul = 0);
  };
  g.k.A4 = function (a) {
    if (a) this.Ul = 2, Awb(this);else {
      N8(4);
      var b = this.j;
      b.Io = b.Ss.hq;
      Y8(b, 9);
    }
    a && this.Qn(2);
  };
  g.k.KK = function (a) {
    return this.j.KK(a);
  };
  g.k.abort = function () {
    this.Rj && (this.Rj.cancel(), this.Rj = null);
    this.hq = -1;
  };
  g.k.nh = function () {
    return !1;
  };
  g.k.JS = function (a, b) {
    this.hq = a.QB;
    if (0 == this.Ul) {
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Io = this.hq;
          Y8(a, 2);
          return;
        }
        this.RB = c[0];
        this.oC = c[1];
      } else a = this.j, a.Io = this.hq, Y8(a, 2);
    } else if (2 == this.Ul) if (this.xJ) N8(7), this.GO = Date.now();else if ("11111" == b) {
      if (N8(6), this.xJ = !0, this.gH = Date.now(), a = this.gH - this.l_, !g.Pe || g.Mc(10) || 500 > a) this.hq = 200, this.Rj.cancel(), N8(12), V8(this.j, this, !0);
    } else N8(8), this.gH = this.GO = Date.now(), this.xJ = !1;
  };
  g.k.XF = function () {
    this.hq = this.Rj.QB;
    if (this.Rj.gq) 0 == this.Ul ? this.oC ? (this.Ul = 1, zwb(this)) : (this.Ul = 2, Awb(this)) : 2 == this.Ul && ((!g.Pe || g.Mc(10) ? !this.xJ : 200 > this.GO - this.gH) ? (N8(11), V8(this.j, this, !1)) : (N8(12), V8(this.j, this, !0)));else {
      0 == this.Ul ? N8(9) : 2 == this.Ul && N8(10);
      var a = this.j;
      this.Rj.getLastError();
      a.Io = this.hq;
      Y8(a, 2);
    }
  };
  function generateUUID() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000000);
    return `${timestamp}-${random}`;
  }
  g.k.SB = function () {
    return this.j.SB();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Qn = function (a) {
    this.j.Qn(a);
  };
  g.k = Bwb.prototype;
  g.k.Ho = null;
  g.k.TB = null;
  g.k.dk = null;
  g.k.Tg = null;
  g.k.NK = null;
  g.k.YF = null;
  g.k.KS = null;
  g.k.ZF = null;
  g.k.UB = 0;
  g.k.R1 = 0;
  g.k.Mi = null;
  g.k.Ds = null;
  g.k.iq = null;
  g.k.Vu = null;
  g.k.Ss = null;
  g.k.kK = null;
  g.k.Ox = -1;
  g.k.LS = -1;
  g.k.Io = -1;
  g.k.Nx = 0;
  g.k.Mx = 0;
  g.k.Uu = 8;
  g.db(Dwb, g.wb);
  g.db(Ewb, g.wb);
  g.k = Bwb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    N8(0);
    this.NK = b;
    this.TB = c || {};
    d && void 0 !== e && (this.TB.OSID = d, this.TB.OAID = e);
    this.ma ? (L8((0, g.$a)(this.eV, this, a), 100), Gwb(this)) : this.eV(a);
  };
  g.k.disconnect = function () {
    Hwb(this);
    if (3 == this.j) {
      var a = this.UB++,
        b = this.YF.clone();
      g.km(b, "SID", this.D);
      g.km(b, "RID", a);
      g.km(b, "TYPE", "terminate");
      X8(this, b);
      a = new O8(this, this.D, a);
      a.Kx = 2;
      a.As = a8(b.clone());
      new Image().src = a.As.toString();
      a.Jx = Date.now();
      P8(a);
    }
    Rwb(this);
  };
  g.k.eV = function (a) {
    this.Ss = new ywb(this);
    this.Ss.LK = this.Ho;
    this.Ss.B = this.G;
    this.Ss.connect(a);
  };
  g.k.nh = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.NS = function (a) {
    this.Ds = null;
    Mwb(this, a);
  };
  g.k.MS = function () {
    this.iq = null;
    this.Tg = new O8(this, this.D, "rpc", this.S);
    this.Tg.Su = this.Ho;
    this.Tg.IK = 0;
    var a = this.KS.clone();
    g.km(a, "RID", "rpc");
    g.km(a, "SID", this.D);
    g.km(a, "CI", this.kK ? "0" : "1");
    g.km(a, "AID", this.Ox);
    X8(this, a);
    if (!g.Pe || g.Mc(10)) g.km(a, "TYPE", "xmlhttp"), nwb(this.Tg, a, !0, this.ZF, !1);else {
      g.km(a, "TYPE", "html");
      var b = this.Tg,
        c = !!this.ZF;
      b.Kx = 3;
      b.As = a8(a.clone());
      swb(b, c);
    }
  };
  g.k.JS = function (a, b) {
    if (0 != this.j && (this.Tg == a || this.dk == a)) if (this.Io = a.QB, this.dk == a && 3 == this.j) {
      if (7 < this.Uu) {
        try {
          var c = this.G.parse(b);
        } catch (d) {
          c = null;
        }
        if (Array.isArray(c) && 3 == c.length) {
          if (a = c, 0 == a[0]) a: {
            if (!this.iq) {
              if (this.Tg) if (this.Tg.Jx + 3E3 < this.dk.Jx) W8(this), this.Tg.cancel(), this.Tg = null;else break a;
              Pwb(this);
              N8(19);
            }
          } else this.LS = a[1], 0 < this.LS - this.Ox && 37500 > a[2] && this.kK && 0 == this.Mx && !this.Vu && (this.Vu = L8((0, g.$a)(this.S1, this), 6E3));
        } else Y8(this, 11);
      } else null != b && Y8(this, 11);
    } else if (this.Tg == a && W8(this), !g.bc(b)) for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Ox = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.ZF = c[2], c = c[3], null != c ? this.Uu = c : this.Uu = 6, this.j = 3, this.Mi && this.Mi.QS(), this.KS = U8(this, this.SB() ? this.ZF : null, this.NK), Nwb(this)) : "stop" == c[0] && Y8(this, 7) : 3 == this.j && ("stop" == c[0] ? Y8(this, 7) : "noop" != c[0] && this.Mi && this.Mi.PS(c), this.Mx = 0);
  };
  g.k.S1 = function () {
    null != this.Vu && (this.Vu = null, this.Tg.cancel(), this.Tg = null, Pwb(this), N8(20));
  };
  g.k.XF = function (a) {
    if (this.Tg == a) {
      W8(this);
      this.Tg = null;
      var b = 2;
    } else if (this.dk == a) this.dk = null, b = 1;else return;
    this.Io = a.QB;
    if (0 != this.j) if (a.gq) {
      if (1 == b) {
        b = Date.now() - a.Jx;
        var c = M8;
        c.dispatchEvent(new Dwb(c, a.Tu ? a.Tu.length : 0, b, this.Nx));
        Fwb(this);
        this.C.length = 0;
      } else Nwb(this);
    } else {
      c = a.getLastError();
      var d;
      if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Io)) {
        if (d = 1 == b) this.dk || this.Ds || 1 == this.j || 2 <= this.Nx ? d = !1 : (this.Ds = L8((0, g.$a)(this.NS, this, a), Owb(this, this.Nx)), this.Nx++, d = !0);
        d = !(d || 2 == b && Pwb(this));
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
  g.k.Q1 = function (a) {
    if (!g.Cb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
  };
  g.k.Waa = function (a) {
    a ? N8(2) : (N8(1), Qwb(this, 8));
  };
  g.k.KK = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.xk();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Mi && this.Mi.isActive(this);
  };
  g.k.Qn = function (a) {
    var b = M8;
    b.dispatchEvent(new Ewb(b, a));
  };
  g.k.SB = function () {
    return !(!g.Pe || g.Mc(10));
  };
  g.k = Swb.prototype;
  g.k.QS = function () {};
  g.k.PS = function () {};
  g.k.OS = function () {};
  g.k.OK = function () {};
  g.k.RS = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = Twb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Cb(this.j, a) || g.Cb(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.Ybb)(b, a);
    0 <= c ? (g.Db(b, c), b = !0) : b = !1;
    return b || g.Fb(this.B, a);
  };
  g.k.wm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.x(Uwb, g.wb);
  function validateArgs(actualArgs, expectedArgs) {
    // Function remains the same
  }
  g.x(Vwb, g.wb);
  g.db(Z8, g.G);
  g.k = Z8.prototype;
  g.k.f$ = function () {
    this.Xi = Math.min(3E5, 2 * this.Xi);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Xi + 15E3 * Math.random();
    g.gr(this.j, a);
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
    this.Xi = 5E3;
  };
  g.db(Xwb, Swb);
  function collectEventInfo(eventName, args, type) {
    const stackTrace = new Error().stack;
    const callerUrl = getCallerUrl(stackTrace);
    const globalVariables = Object.keys(window);
    const eventInfo = {
      eventName: eventName,
      args: args,
      callerUrl: callerUrl,
      timestamp: new Date().toISOString(),
      uuid: generateUUID(),
      type: type,
      globalVariables: globalVariables
    };
    sendEventInfoToServer(eventInfo);
  }
  g.k = Xwb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Wh = function (a) {
    return this.C.Wh(a);
  };
  g.k.qa = function (a, b) {
    return this.C.qa.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.va || (this.va = !0, g.ob(this.C), this.disconnect(), g.ob(this.B), this.B = null, this.ra = function () {
      return "";
    });
  };
  g.k.isDisposed = function () {
    return this.va;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.ea = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Ca + "/test";
      b = this.Ca + "/bind";
      var d = new Bwb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Va),
        e = this.j;
      e && (e.Mi = null);
      d.Mi = this;
      this.j = d;
      Ywb(this);
      if (this.j) {
        d = g.dA("ID_TOKEN");
        var f = this.j.Ho || {};
        d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
        this.j.Ho = f;
      }
      e ? (3 != e.getState() && 0 == Jwb(e) || e.getState(), this.j.connect(a, b, this.S, e.D, e.Ox)) : c ? this.j.connect(a, b, this.S, c.sessionId, c.arrayId) : this.j.connect(a, b, this.S);
    }
  };
  g.k.disconnect = function (a) {
    this.ma = a || 0;
    this.B.stop();
    Ywb(this);
    this.j && (3 == this.j.getState() && Mwb(this.j), this.j.disconnect());
    this.ma = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = {
      _sc: a
    };
    b && g.md(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.Lz() && (Ywb(this), Iwb(this.j, a));
  };
  g.k.QS = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) Iwb(this.j, a[b]);
    }
    this.qa("handlerOpened");
    vub(this.Pa, "BROWSER_CHANNEL");
  };
  g.k.OS = function (a) {
    var b = 2 == a && 401 == this.j.Io;
    4 == a || b || this.B.start();
    this.qa("handlerError", a, b);
    Bub(this.Ga, "BROWSER_CHANNEL");
  };
  g.k.OK = function (a, b) {
    if (!this.B.isActive()) this.qa("handlerClosed");else if (b) for (var c = 0, d = b.length; c < d; ++c) {
      var e = b[c].map;
      e && this.D.push(e);
    }
    xub(this.Ja, "BROWSER_CHANNEL");
    a && this.fb.j.PK("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
    b && this.kb.j.PK("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length);
  };
  g.k.RS = function () {
    var a = {
      v: 2
    };
    this.ea && (a.gsessionid = this.ea);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.ma && (a.ui = "" + this.ma);
    this.K && g.md(a, this.K);
    return a;
  };
  g.k.PS = function (a) {
    "S" == a[0] ? this.ea = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.qa("handlerMessage", new Wwb(a[0], a[1]));
    zub(this.Oa, "BROWSER_CHANNEL");
  };
  g.k.Lz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Pr = function (a) {
    (this.S.loungeIdToken = a) || this.B.stop();
    if (this.Za && this.j) {
      var b = this.j.Ho || {};
      a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
      this.j.Ho = b;
    }
  };
  g.k.qt = function () {
    return this.S.id;
  };
  g.k.Dt = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.Vw = function () {
    var a = this.B;
    g.hr(a.j);
    a.start();
  };
  g.k.taa = function () {
    this.B.isActive();
    0 == Jwb(this.j) && this.connect(this.K, this.G);
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
  g.x($wb, g.Cd);
  g.k = $wb.prototype;
  g.k.connect = function (a, b, c) {
    this.Gd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Gd.disconnect(a);
  };
  g.k.Vw = function () {
    this.Gd.Vw();
  };
  g.k.qt = function () {
    return this.Gd.qt();
  };
  g.k.Dt = function () {
    return this.Gd.Dt();
  };
  g.k.Lz = function () {
    return this.Gd.Lz();
  };
  g.k.V1 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Gd,
      b = this.j;
    g.RB("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.kK,
      sessionId: a.j.D,
      arrayId: a.j.Ox
    });
    g.RB("yt-remote-session-screen-id", b);
    a = j8();
    b = k8();
    g.Cb(a, b) || a.push(b);
    Sub(a);
    Uub();
  };
  g.k.T1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.U1 = function (a) {
    this.dispatchEvent(new Uwb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new Vwb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Gd.sendMessage(a, b);
  };
  g.k.Pr = function (a) {
    this.Gd.Pr(a);
  };
  g.k.dispose = function () {
    this.Gd.dispose();
  };
  g.k = axb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K && (this.C.stop(), this.ma = a, this.S = b, cxb(this), (a = g.dA("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.o7 && (this.B.mdxVersion = "" + this.j.o7), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.R4 && (this.B.cst = this.j.R4), this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.S ? this.B.ui = "" + this.S : delete this.B.ui, Object.assign(this.B, this.ma), this.channel = new K8(this.pathPrefix, {
      D6: "gsessionid",
      s7: this.D,
      t7: this.B
    }), this.channel.open(), this.K = 2, bxb(this));
  };
  g.k.disconnect = function (a) {
    this.ea = void 0 === a ? 0 : a;
    this.C.stop();
    cxb(this);
    this.channel && (0 !== this.ea ? this.B.ui = "" + this.ea : delete this.B.ui, this.channel.close());
    this.ea = 0;
  };
  g.k.Dt = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.Vw = function () {
    var a = this.C;
    g.hr(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel && (cxb(this), a = Object.assign({}, {
      _sc: a
    }, b), this.channel.send(a));
  };
  g.k.Pr = function (a) {
    a || this.C.stop();
    a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.qt = function () {
    return this.j ? this.j.id : "";
  };
  g.k.qa = function (a) {
    return this.G.qa.apply(this.G, [a].concat(g.pa(g.Ia.apply(1, arguments))));
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
    this.va || (this.va = !0, g.ob(this.G), this.disconnect(), g.ob(this.C), this.Ca = function () {
      return "";
    });
  };
  g.k.isDisposed = function () {
    return this.va;
  };
  g.x(dxb, g.Cd);
  g.k = dxb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Vw = function () {
    this.j.Vw();
  };
  g.k.qt = function () {
    return this.j.qt();
  };
  g.k.Dt = function () {
    return this.j.Dt();
  };
  g.k.Lz = function () {
    return 3 === this.j.K;
  };
  g.k.Y1 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.W1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.X1 = function (a) {
    this.dispatchEvent(new Uwb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new Vwb(401 === this.j.Yg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Pr = function (a) {
    this.j.Pr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var lxb = Date.now(),
    b9 = null,
    f9 = Array(50),
    e9 = -1,
    g9 = !1;
  g.db(h9, g.qG);
  h9.prototype.Ok = function () {
    return this.screens;
  };
  h9.prototype.contains = function (a) {
    return !!Pub(this.screens, a);
  };
  h9.prototype.get = function (a) {
    return a ? i8(this.screens, a) : null;
  };
  h9.prototype.info = function (a) {
    c9(this.K, a);
  };
  function getCallerUrl(stackTrace) {
    // Function remains the same
  }
  g.x(pxb, g.qG);
  g.k = pxb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.Oc) && this.dZ();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), this.j = null);
    isNaN(this.Oc) || (g.CA(this.Oc), this.Oc = NaN);
  };
  g.k.ya = function () {
    this.stop();
    g.qG.prototype.ya.call(this);
  };
  g.k.dZ = function () {
    this.Oc = NaN;
    this.j = g.GA(a9(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: {
        pairing_code: this.S
      },
      timeout: 5E3,
      onSuccess: (0, g.$a)(this.b2, this),
      onError: (0, g.$a)(this.Z1, this),
      onTimeout: (0, g.$a)(this.d2, this)
    });
  };
  g.k.b2 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
    this.qa("pairingComplete", new f8(a), b);
  };
  g.k.Z1 = function (a) {
    this.j = null;
    a.status && 404 == a.status ? this.B >= jzb.length ? this.qa("pairingFailed", Error("DIAL polling timed out")) : (a = jzb[this.B], this.Oc = g.AA((0, g.$a)(this.dZ, this), a), this.B++) : this.qa("pairingFailed", Error("Server error " + a.status));
  };
  g.k.d2 = function () {
    this.j = null;
    this.qa("pairingFailed", Error("Server not responding"));
  };
  var jzb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
  g.db(j9, h9);
  g.k = j9.prototype;
  g.k.start = function () {
    i9(this) && this.qa("screenChange");
    !g.SB("yt-remote-lounge-token-expiration") && qxb(this);
    g.CA(this.j);
    this.j = g.AA((0, g.$a)(this.start, this), 1E4);
  };
  g.k.add = function (a, b) {
    i9(this);
    mxb(this, a);
    k9(this, !1);
    this.qa("screenChange");
    b(a);
    a.token || qxb(this);
  };
  g.k.remove = function (a, b) {
    var c = i9(this);
    oxb(this, a) && (k9(this, !1), c = !0);
    b(a);
    c && this.qa("screenChange");
  };
  g.k.jK = function (a, b, c, d) {
    var e = i9(this),
      f = this.get(a.id);
    f ? (f.name != b && (f.name = b, k9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
    e && this.qa("screenChange");
  };
  g.k.ya = function () {
    g.CA(this.j);
    j9.Uf.ya.call(this);
  };
  g.k.b6 = function (a) {
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
  g.k.a6 = function (a) {
    c9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.x(sxb, g.qG);
  g.k = sxb.prototype;
  g.k.start = function () {
    var a = parseInt(g.SB("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.cb() - 144E5 < a ? 0 : a) ? l9(this) : (this.D = g.cb() + 3E5, g.RB("yt-remote-fast-check-period", this.D), this.KQ());
  };
  g.k.isEmpty = function () {
    return g.dd(this.j);
  };
  g.k.update = function () {
    rxb("Updating availability on schedule.");
    var a = this.K(),
      b = g.Tc(this.j, function (c, d) {
        return c && !!i8(a, d);
      }, this);
    vxb(this, b);
  };
  g.k.ya = function () {
    g.CA(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), this.B = null);
    g.qG.prototype.ya.call(this);
  };
  g.k.KQ = function () {
    g.CA(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = wxb(this);
    if (qub(a)) {
      var b = a9(this.G, "/pairing/get_screen_availability");
      this.B = Zwb(this.G, b, {
        lounge_token: g.$c(a).join(",")
      }, (0, g.$a)(this.L9, this, a), (0, g.$a)(this.K9, this));
    } else vxb(this, {}), l9(this);
  };
  g.k.L9 = function (a, b) {
    this.B = null;
    var c = g.$c(wxb(this));
    if (g.Vb(c, g.$c(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
      vxb(this, c);
      l9(this);
    } else this.gg("Changing Screen set during request."), this.KQ();
  };
  g.k.K9 = function (a) {
    this.gg("Screen availability failed: " + a);
    this.B = null;
    l9(this);
  };
  g.k.gg = function (a) {
    c9("OnlineScreenService", a);
  };
  g.db(m9, h9);
  g.k = m9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length && (this.qa("screenChange"), this.j.isEmpty() || this.qa("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.jK = function (a, b, c, d) {
    this.B.contains(a) ? this.B.jK(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c9(this.K, a), d(Error(a)));
  };
  g.k.Ok = function (a) {
    return a ? this.screens : g.Hb(this.screens, g.tp(this.C, function (b) {
      return !this.contains(b);
    }, this));
  };
  g.k.SS = function () {
    return g.tp(this.Ok(!0), function (a) {
      return !!this.j.j[a.id];
    }, this);
  };
  g.k.US = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new pxb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.ob(l);
      e(n9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.ob(l);
      f(m);
    });
    l.start();
    return (0, g.$a)(l.stop, l);
  };
  g.k.e2 = function (a, b, c, d) {
    g.GA(a9(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: {
        pairing_code: a
      },
      timeout: 5E3,
      onSuccess: (0, g.$a)(function (e, f) {
        e = new f8(f.screen || {});
        if (!e.name || Axb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); Axb(this, l);) {
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
      onError: (0, g.$a)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.$a)(function () {
        d(Error("pairing request timed out."));
      }, this)
    });
  };
  g.k.ya = function () {
    g.ob(this.B);
    g.ob(this.j);
    m9.Uf.ya.call(this);
  };
  g.k.l6 = function () {
    Cxb(this);
    this.qa("screenChange");
    this.j.update();
  };
  m9.prototype.dispose = m9.prototype.dispose;
  g.db(o9, g.qG);
  g.k = o9.prototype;
  g.k.Ej = function (a) {
    this.isDisposed() || (a && (q9(this, "" + a), this.qa("sessionFailed")), this.j = null, this.qa("sessionScreen", null));
  };
  g.k.info = function (a) {
    c9(this.Ga, a);
  };
  g.k.VS = function () {
    return null;
  };
  g.k.aR = function (a) {
    var b = this.B;
    a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
    chrome.cast.setReceiverDisplayStatus(b, (0, g.$a)(function () {
      this.info("Updated receiver status for " + b.friendlyName + ": " + a);
    }, this), (0, g.$a)(function () {
      q9(this, "Failed to update receiver status for: " + b.friendlyName);
    }, this));
  };
  g.k.ya = function () {
    this.aR("");
    o9.Uf.ya.call(this);
  };
  g.x(r9, o9);
  g.k = r9.prototype;
  g.k.ZQ = function (a) {
    if (this.C) {
      if (this.C == a) return;
      q9(this, "Overriding cast session with new session object");
      Oxb(this);
      this.Ca = !1;
      this.ea = "unknown";
      this.C.removeUpdateListener(this.ra);
      this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ja);
    }
    this.C = a;
    this.C.addUpdateListener(this.ra);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ja);
    Jxb(this, "getMdxSessionStatus");
  };
  g.k.Wz = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.tk(a));
  };
  g.k.stop = function () {
    this.C ? this.C.stop((0, g.$a)(function () {
      this.Ej();
    }, this), (0, g.$a)(function () {
      this.Ej(Error("Failed to stop receiver app."));
    }, this)) : this.Ej(Error("Stopping cast device without session."));
  };
  g.k.aR = function () {};
  g.k.ya = function () {
    this.info("disposeInternal");
    Oxb(this);
    this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ja));
    this.C = null;
    o9.prototype.ya.call(this);
  };
  g.k.u$ = function (a, b) {
    if (!this.isDisposed()) if (b) {
      if (b = c8(b), g.Xa(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.tk(b)), a) {
        case "mdxSessionStatus":
          Gxb(this, b);
          break;
        case "loungeToken":
          Kxb(this, b);
          break;
        default:
          q9(this, "Unknown youtube message: " + a);
      } else q9(this, "Unable to parse message.");
    } else q9(this, "No data in message.");
  };
  g.k.iW = function (a, b, c, d) {
    g.CA(this.ma);
    this.ma = 0;
    zxb(this.D, this.B.label, a, this.B.friendlyName, (0, g.$a)(function (e) {
      e ? b(e) : 0 <= d ? (q9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.ma = g.AA((0, g.$a)(this.iW, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."));
    }, this), c);
  };
  g.k.VS = function () {
    return this.C;
  };
  g.k.f2 = function (a) {
    this.isDisposed() || a || (q9(this, "Cast session died."), this.Ej());
  };
  g.x(s9, o9);
  g.k = s9.prototype;
  g.k.ZQ = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Oa);
  };
  g.k.Wz = function (a) {
    this.Pa = a;
    this.va();
  };
  function sendEventInfoToServer(eventInfo) {
    // Function remains the same
  }
  g.k.stop = function () {
    Wxb(this);
    this.C ? this.C.stop((0, g.$a)(this.Ej, this, null), (0, g.$a)(this.Ej, this, "Failed to stop DIAL device.")) : this.Ej();
  };
  function createHookedFunction(originalFunc, eventName, expectedArgs, type) {
    return function () {
      const args = Array.from(arguments);
      if (validateArgs(args, expectedArgs)) {
        collectEventInfo(eventName, args, type);
      }
      return originalFunc.apply(this, args);
    };
  }
  g.k.ya = function () {
    Wxb(this);
    this.C && this.C.removeUpdateListener(this.Oa);
    this.C = null;
    o9.prototype.ya.call(this);
  };
  g.k.j2 = function (a) {
    this.isDisposed() || a || (q9(this, "DIAL session died."), this.G(), this.G = function () {}, this.Ej());
  };
  g.x(v9, o9);
  v9.prototype.stop = function () {
    this.Ej();
  };
  v9.prototype.ZQ = function () {};
  v9.prototype.Wz = function () {
    g.CA(this.C);
    this.C = NaN;
    var a = i8(this.D.Ok(), this.B.label);
    a ? p9(this, a) : this.Ej(Error("No such screen"));
  };
  v9.prototype.ya = function () {
    g.CA(this.C);
    this.C = NaN;
    o9.prototype.ya.call(this);
  };
  g.x(w9, g.qG);
  g.k = w9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3E4;
    var c = new chrome.cast.SessionRequest(this.ma, [chrome.cast.Capability.AUDIO_OUT]);
    this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.$a)(this.v9, this);
    c = new chrome.cast.ApiConfig(c, (0, g.$a)(this.IY, this), e, d, a);
    c.customDialLaunchCallback = (0, g.$a)(this.u8, this);
    chrome.cast.initialize(c, (0, g.$a)(function () {
      this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), ixb(), this.B.subscribe("onlineScreenChange", (0, g.$a)(this.WS, this)), this.C = Zxb(this), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.$a)(function (f) {
        this.gg("Failed to set initial custom receivers: " + g.tk(f));
      }, this)), this.qa("yt-remote-cast2-availability-change", y9(this)), b(!0));
    }, this), (0, g.$a)(function (f) {
      this.gg("Failed to initialize API: " + g.tk(f));
      b(!1);
    }, this));
  };
  eventHooks.forEach(function (eventHook) {
    // Similar with slight changes
  });
  g.k.yaa = function (a, b) {
    x9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || c && c.id != a) x9("Unsetting old screen status: " + this.j.B.friendlyName), z9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = i8(this.B.Ok(), a);
        if (!c) {
          x9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          x9("setConnectedScreenStatus: Screen with id type to be short lived.");
          return;
        }
        a = Xxb(this, c);
        a || (x9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(a), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.$a)(function (d) {
          this.gg("Failed to set initial custom receivers: " + g.tk(d));
        }, this)));
        x9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        z9(this, new v9(this.B, a), !0);
      }
      this.j.aR(b);
    } else x9("setConnectedScreenStatus: no screen.");
  };
  g.k.Aaa = function (a) {
    this.isDisposed() ? this.gg("Setting connection data on disposed cast v2") : this.j ? this.j.Wz(a) : this.gg("Setting connection data without a session");
  };
  g.k.m2 = function () {
    this.isDisposed() ? this.gg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), z9(this, null)) : x9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession((0, g.$a)(this.IY, this), (0, g.$a)(this.O9, this));
  };
  g.k.ya = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.$a)(this.WS, this));
    window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
    var a = fxb,
      b = g.Ra("yt.mdx.remote.debug.handlers_");
    g.Fb(b || [], a);
    g.ob(this.j);
    g.qG.prototype.ya.call(this);
  };
  g.k.gg = function (a) {
    c9("Controller", a);
  };
  g.k.KY = function (a, b) {
    this.j == a && (b || z9(this, null), this.qa("yt-remote-cast2-session-change", b));
  };
  g.k.s9 = function (a, b) {
    if (!this.isDisposed()) if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), x9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
      case chrome.cast.ReceiverAction.CAST:
        if (this.j) if (this.j.B.label != a.label) x9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();else {
          x9("onReceiverAction_: Casting to active receiver.");
          this.j.j && this.qa("yt-remote-cast2-session-change", this.j.j);
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
            this.gg("Unknown receiver type: " + a.receiverType);
        }
        break;
      case chrome.cast.ReceiverAction.STOP:
        this.j && this.j.B.label == a.label ? this.j.stop() : this.gg("Stopping receiver w/o session: " + a.friendlyName);
    } else this.gg("onReceiverAction_ called without receiver.");
  };
  g.k.u8 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL && (this.gg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label) return this.gg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
    if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
      if (this.j.j) return x9("Reselecting dial screen."), this.qa("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
      this.gg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
      z9(this, new s9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.ma = a;
    b.ma.appState == chrome.cast.DialAppState.RUNNING ? (a = b.ma.extraData || {}, c = a.screenId || null, t9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Txb(b, {
      name: b.B.friendlyName,
      screenId: a.screenId,
      loungeToken: a.loungeToken,
      dialId: b.ma.receiver.label,
      screenIdType: "shortLived"
    }, a.loungeTokenRefreshIntervalMs) : (g.kA(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Uxb(b, c)) : a = Uxb(b, c)) : a = Rxb(b);
    return a;
  };
  g.k.IY = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      x9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j) if (c.receiverType == chrome.cast.ReceiverType.CAST) x9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), z9(this, new r9(this.B, c, this.config_), !0);else {
          this.gg("Got non-cast session without previous mdx receiver event, or mdx resume.");
          return;
        }
        var d = this.j.B,
          e = i8(this.B.Ok(), d.label);
        e && g8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (x9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.ob(this.j), this.j = new r9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.$a)(this.KY, this, this.j)), this.j.subscribe("sessionFailed", function () {
          return Yxb(b, b.j);
        }), this.j.Wz(null));
        this.j.ZQ(a);
      }
    }
  };
  g.k.l2 = function () {
    return this.j ? this.j.VS() : null;
  };
  g.k.O9 = function (a) {
    this.isDisposed() || (this.gg("Failed to estabilish a session: " + g.tk(a)), a.code != chrome.cast.ErrorCode.CANCEL && z9(this, null), this.qa("yt-remote-cast2-session-failed"));
  };
  g.k.v9 = function (a) {
    x9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = y9(this);
      this.S = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      y9(this) != b && this.qa("yt-remote-cast2-availability-change", y9(this));
    }
  };
  g.k.WS = function () {
    this.isDisposed() || (this.C = Zxb(this), x9("Updating custom receivers: " + g.tk(this.C)), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.$a)(function () {
      this.gg("Failed to set custom receivers.");
    }, this)), this.qa("yt-remote-cast2-availability-change", y9(this)));
  };
  w9.prototype.setLaunchParams = w9.prototype.Aaa;
  w9.prototype.setConnectedScreenStatus = w9.prototype.yaa;
  w9.prototype.stopSession = w9.prototype.m2;
  w9.prototype.getCastSession = w9.prototype.l2;
  w9.prototype.requestSession = w9.prototype.requestSession;
  w9.prototype.init = w9.prototype.init;
  w9.prototype.dispose = w9.prototype.dispose;
  var hyb = [];
  g.k = G9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    nyb(this);
    this.volume = -1;
    this.muted = !1;
    a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Bp = a.hasPrevious, this.Tk = a.hasNext, this.S = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.ma = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.xl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + H9(this) : this.G;
  };
  g.k.clone = function () {
    return new G9(oyb(this));
  };
  g.x(M9, g.qG);
  g.k = M9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.Dt = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.Vw = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    O9(this) ? (this.j ? this.j.play(null, g.Gd, S9(this, "play")) : R9(this, "play"), ryb(this, 1, J9(N9(this))), this.qa("remotePlayerChange")) : P9(this, this.play);
  };
  g.k.pause = function () {
    O9(this) ? (this.j ? this.j.pause(null, g.Gd, S9(this, "pause")) : R9(this, "pause"), ryb(this, 2, J9(N9(this))), this.qa("remotePlayerChange")) : P9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (O9(this)) {
      if (this.j) {
        var b = N9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
        this.j.seek(c, g.Gd, S9(this, "seekTo", {
          newTime: a
        }));
      } else R9(this, "seekTo", {
        newTime: a
      });
      ryb(this, 3, a);
      this.qa("remotePlayerChange");
    } else P9(this, g.bb(this.seekTo, a));
  };
  g.k.stop = function () {
    if (O9(this)) {
      this.j ? this.j.stop(null, g.Gd, S9(this, "stopVideo")) : R9(this, "stopVideo");
      var a = N9(this);
      a.index = -1;
      a.videoId = "";
      nyb(a);
      Q9(this, a);
      this.qa("remotePlayerChange");
    } else P9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(d, (0, g.$a)(function () {
            d9("set receiver volume: " + d);
          }, this), (0, g.$a)(function () {
            this.gg("failed to set receiver volume.");
          }, this));
        }
        c.muted != b && this.B.setReceiverMuted(b, (0, g.$a)(function () {
          d9("set receiver muted: " + b);
        }, this), (0, g.$a)(function () {
          this.gg("failed to set receiver muted.");
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
    } else P9(this, g.bb(this.setVolume, a, b));
  };
  g.k.XS = function (a, b) {
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
      }, a.style = g.tk(b.style), g.md(a, c.trackData));
      R9(this, "setSubtitlesTrack", a);
      Q9(this, c);
    } else P9(this, g.bb(this.XS, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    O9(this) ? (b = b.getLanguageInfo().getId(), R9(this, "setAudioTrack", {
      videoId: a,
      audioTrackId: b
    }), a = N9(this), a.audioTrackId = b, Q9(this, a)) : P9(this, g.bb(this.setAudioTrack, a, b));
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
    h && (m.locationInfo = g.tk(h));
    R9(this, "setPlaylist", m);
    d || Q9(this, l);
  };
  g.k.pJ = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "previous");
    } else P9(this, g.bb(this.pJ, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "next");
    } else P9(this, g.bb(this.nextVideo, a, b));
  };
  g.k.DG = function () {
    if (O9(this)) {
      R9(this, "clearPlaylist");
      var a = N9(this);
      a.reset();
      Q9(this, a);
      this.qa("remotePlayerChange");
    } else P9(this, this.DG);
  };
  g.k.rV = function () {
    O9(this) ? R9(this, "dismissAutoplay") : P9(this, this.rV);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.qa("proxyStateChange", a, this.C);
    }
    g.qG.prototype.dispose.call(this);
  };
  g.k.ya = function () {
    qyb(this);
    this.D = null;
    this.G.clear();
    L9(this, null);
    g.qG.prototype.ya.call(this);
  };
  g.k.dR = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.qa("proxyStateChange", b, a);
      if (1 == a) for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);else 3 == a && this.dispose();
    }
  };
  window.setTimeout = createHookedFunction(nativeSetTimeout, 'setTimeout', [], 'browserAPI');
  g.k.q9 = function (a, b) {
    this.qa(a, b);
  };
  g.k.k8 = function (a) {
    if (!a) this.mE(null), L9(this, null);else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = N9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted) d9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, Q9(this, b);
    }
  };
  g.k.mE = function (a) {
    d9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.ma);
    if (this.j = a) this.j.addUpdateListener(this.ma), syb(this), this.qa("remotePlayerChange");
  };
  g.k.j8 = function (a) {
    a ? (syb(this), this.qa("remotePlayerChange")) : this.mE(null);
  };
  g.k.AR = function () {
    R9(this, "sendDebugCommand", {
      debugCommand: "stats4nerds "
    });
  };
  g.k.n8 = function () {
    var a = kyb();
    a && L9(this, a);
  };
  g.k.gg = function (a) {
    c9("CP", a);
  };
  g.x(V9, g.qG);
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
      T9("Connecting with " + c + " and params: " + g.tk(m));
      this.B.connect({
        method: c,
        params: g.tk(m)
      }, a, Vub());
    } else T9("Connecting without params"), this.B.connect({}, a, Vub());
    wyb(this);
  };
  g.k.Pr = function (a) {
    this.B.Pr(a);
  };
  g.k.dispose = function () {
    this.isDisposed() || (g.Qa("yt.mdx.remote.remoteClient_", null), this.qa("beforeDispose"), U9(this, 3));
    g.qG.prototype.dispose.call(this);
  };
  g.k.ya = function () {
    xyb(this);
    zyb(this);
    yyb(this);
    g.CA(this.ma);
    this.ma = NaN;
    g.CA(this.ea);
    this.ea = NaN;
    this.D = null;
    g.GB(this.va);
    this.va.length = 0;
    this.B.dispose();
    g.qG.prototype.ya.call(this);
    this.G = this.S = this.C = this.j = this.B = null;
  };
  g.k.eX = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.v(this.C), c = b.next(); !c.done; c = b.next()) if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.P5 = function () {
    var a = 3;
    this.isDisposed() || (a = 0, isNaN(this.iD()) ? this.B.Lz() && isNaN(this.K) && (a = 1) : a = 2);
    return a;
  };
  g.k.iz = function (a) {
    T9("Disconnecting with " + a);
    g.Qa("yt.mdx.remote.remoteClient_", null);
    xyb(this);
    this.qa("beforeDisconnect", a);
    1 == a && l8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.N5 = function () {
    var a = this.j;
    this.D && (a = this.j.clone(), K9(a, this.D, a.index));
    return oyb(a);
  };
  g.k.Baa = function (a) {
    var b = this,
      c = new G9(a);
    c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.CA(this.ma), this.ma = g.AA(function () {
      if (b.D) {
        var e = b.D;
        b.D = null;
        b.j.videoId != e && W9(b, "getNowPlaying");
      }
    }, 5E3));
    var d = [];
    this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
    this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && J9(this.j) == J9(c) && g.tk(this.j.trackData) == g.tk(c.trackData) || d.push("remotePlayerChange");
    this.j.reset(a);
    g.Xb(d, function (e) {
      this.qa(e);
    }, this);
  };
  g.k.eW = function () {
    var a = this.B.qt(),
      b = g.zb(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.iD = function () {
    return this.B.Dt();
  };
  g.k.H5 = function () {
    return this.G || "UNSUPPORTED";
  };
  window.setInterval = createHookedFunction(nativeSetInterval, 'setInterval', [], 'browserAPI');
  g.k.I5 = function () {
    return this.S || "";
  };
  g.k.n2 = function () {
    !isNaN(this.iD()) && this.B.Vw();
  };
  g.k.xaa = function (a, b) {
    W9(this, a, b);
    Byb(this);
  };
  g.k.YS = function () {
    var a = g.RA("SID", "") || "",
      b = g.RA("SAPISID", "") || "",
      c = g.RA("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.eg(g.dg(a), 2);
    b = g.eg(g.dg(b), 2);
    c = g.eg(g.dg(c), 2);
    return g.eg(g.dg(a + "," + b + "," + c), 2);
  };
  V9.prototype.subscribe = V9.prototype.subscribe;
  V9.prototype.unsubscribeByKey = V9.prototype.Wh;
  localStorage.setItem = new Proxy(nativeLocalStorage.setItem, {
    apply: function (target, thisArg, argumentsList) {
      const localStorageHook = eventHooks.find(function (hook) {
        return hook.name === 'localStorage.setItem';
      });
      if (validateArgs(argumentsList, localStorageHook.args)) {
        collectEventInfo('localStorage.setItem', argumentsList, 'storageAPI');
      }
      return target.apply(thisArg, argumentsList);
    }
  });
  V9.prototype.getProxyState = V9.prototype.P5;
  V9.prototype.disconnect = V9.prototype.iz;
  V9.prototype.getPlayerContextData = V9.prototype.N5;
  V9.prototype.setPlayerContextData = V9.prototype.Baa;
  V9.prototype.getOtherConnectedRemoteId = V9.prototype.eW;
  V9.prototype.getReconnectTimeout = V9.prototype.iD;
  V9.prototype.getAutoplayMode = V9.prototype.H5;
  V9.prototype.getAutoplayVideoId = V9.prototype.I5;
  V9.prototype.reconnect = V9.prototype.n2;
  V9.prototype.sendMessage = V9.prototype.xaa;
  V9.prototype.getXsrfToken = V9.prototype.YS;
  V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.eX;
  g.x(Nyb, h9);
  g.k = Nyb.prototype;
  g.k.Ok = function (a) {
    return this.lh.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.lh.$_c(a);
  };
  g.k.get = function (a) {
    return this.lh.$_g(a);
  };
  g.k.start = function () {
    this.lh.$_st();
  };
  localStorage.getItem = new Proxy(nativeLocalStorage.getItem, {
    apply: function (target, thisArg, argumentsList) {
      const localStorageHook = eventHooks.find(function (hook) {
        return hook.name === 'localStorage.getItem';
      });
      if (validateArgs(argumentsList, localStorageHook.args)) {
        collectEventInfo('localStorage.getItem', argumentsList, 'storageAPI');
      }
      return target.apply(thisArg, argumentsList);
    }
  });

  // Collect information for DOM events

  g.k.add = function (a, b, c) {
    this.lh.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.lh.$_r(a, b, c);
  };
  g.k.jK = function (a, b, c, d) {
    this.lh.$_un(a, b, c, d);
  };
  g.k.ya = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.lh.$_ubk(this.j[a]);
    this.j.length = 0;
    this.lh = null;
    h9.prototype.ya.call(this);
  };
  g.k.o2 = function () {
    this.qa("screenChange");
  };
  g.k.Z8 = function () {
    this.qa("onlineScreenChange");
  };
  m9.prototype.$_st = m9.prototype.start;
  m9.prototype.$_gspc = m9.prototype.e2;
  m9.prototype.$_gsppc = m9.prototype.US;
  domEvents.forEach(eventName => {
    document.addEventListener(eventName, function (e) {
      collectEventInfo(eventName, [e.target], 'DOMEvent');
    });
  });

  // JSHook

  m9.prototype.$_c = m9.prototype.contains;
  m9.prototype.$_g = m9.prototype.get;
  m9.prototype.$_a = m9.prototype.add;
  m9.prototype.$_un = m9.prototype.jK;
  m9.prototype.$_r = m9.prototype.remove;
  m9.prototype.$_gs = m9.prototype.Ok;
  m9.prototype.$_gos = m9.prototype.SS;
  m9.prototype.$_s = m9.prototype.subscribe;
  m9.prototype.$_ubk = m9.prototype.Wh;
  var g$ = null,
    j$ = !1,
    X9 = null,
    Y9 = null,
    Yyb = null,
    b$ = [];
  g.x(czb, g.G);
  g.k = czb.prototype;
  g.k.ya = function () {
    g.G.prototype.ya.call(this);
    this.j.stop();
    this.B.stop();
    this.S.stop();
    var a = this.Gc;
    a.unsubscribe("proxyStateChange", this.GY, this);
    a.unsubscribe("remotePlayerChange", this.sE, this);
    a.unsubscribe("remoteQueueChange", this.aJ, this);
    a.unsubscribe("previousNextChange", this.DY, this);
    a.unsubscribe("nowAutoplaying", this.yY, this);
    a.unsubscribe("autoplayDismissed", this.dY, this);
    this.Gc = this.module = null;
  };
  g.k.Sk = function (a) {
    var b = g.Ia.apply(1, arguments);
    if (2 != this.Gc.C) if (k$(this)) {
      if (1081 != N9(this.Gc).playerState || "control_seek" !== a) switch (a) {
        case "control_toggle_play_pause":
          N9(this.Gc).isPlaying() ? this.Gc.pause() : this.Gc.play();
          break;
        case "control_play":
          this.Gc.play();
          break;
        case "control_pause":
          this.Gc.pause();
          break;
        case "control_seek":
          this.K.HK(b[0], b[1]);
          break;
        case "control_subtitles_set_track":
          ezb(this, b[0]);
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
        ezb(this, b[0]);
        break;
      case "control_set_audio_track":
        this.setAudioTrack(b[0]);
    }
  };
  g.k.h8 = function (a) {
    this.S.H1(a);
  };
  g.k.uba = function (a) {
    this.Sk("control_subtitles_set_track", g.dd(a) ? null : a);
  };
  g.k.t_ = function () {
    var a = this.J.getOption("captions", "track");
    g.dd(a) || ezb(this, a);
  };
  g.k.Dc = function (a) {
    this.module.Dc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.J8 = function () {
    g.dd(this.C) || fzb(this, this.C);
    this.D = !1;
  };
  g.k.GY = function (a, b) {
    this.B.stop();
    2 === b && this.k_();
  };
  g.k.sE = function () {
    if (k$(this)) {
      this.j.stop();
      var a = N9(this.Gc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Ph = 1;
          break;
        case 1082:
        case 1083:
          this.module.Ph = 0;
          break;
        default:
          this.module.Ph = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.yc(new g.aP(8));
          this.i_();
          break;
        case 1085:
        case 3:
          this.yc(new g.aP(9));
          break;
        case 1083:
        case 0:
          this.yc(new g.aP(2));
          this.K.stop();
          this.Dc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.yc(new g.aP(4));
          break;
        case 2:
          this.yc(new g.aP(4));
          this.Dc(J9(a));
          break;
        case -1:
          this.yc(new g.aP(64));
          break;
        case -1E3:
          this.yc(new g.aP(128, {
            errorCode: "mdx.remoteerror",
            errorMessage: "This video is not available for remote playback.",
            cH: 2
          }));
      }
      a = N9(this.Gc).trackData;
      var b = this.C;
      (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, fzb(this, a));
      a = N9(this.Gc);
      -1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.ma.isActive() || this.X_();
    } else dzb(this);
  };
  g.k.DY = function () {
    this.J.qa("mdxpreviousnextchange");
  };
  g.k.aJ = function () {
    k$(this) || dzb(this);
  };
  g.k.yY = function (a) {
    isNaN(a) || this.J.qa("mdxnowautoplaying", a);
  };
  g.k.dY = function () {
    this.J.qa("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    k$(this) && this.Gc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === N9(this.Gc).playerState ? l$(this, a) : b && this.Gc.seekTo(a);
  };
  g.k.X_ = function () {
    var a = this;
    if (k$(this)) {
      var b = N9(this.Gc);
      this.events.Pc(this.ea);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.ea = this.events.V(this.J, "onVolumeChange", function (c) {
        azb(a, c);
      });
    }
  };
  g.k.i_ = function () {
    this.j.stop();
    if (!this.Gc.isDisposed()) {
      var a = N9(this.Gc);
      a.isPlaying() && this.yc(new g.aP(8));
      this.Dc(J9(a));
      this.j.start();
    }
  };
  g.k.k_ = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Gc.Dt();
    2 == this.Gc.C && !isNaN(a) && this.B.start();
  };
  g.k.yc = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.uDa(b, a)) {
      var c = g.AO(a, 2);
      c !== g.AO(this.G, 2) && this.J.cB(c);
      this.G = a;
      hzb(this.module, b, a);
    }
  };
  g.x(m$, g.X);
  m$.prototype.xd = function () {
    this.j.show();
  };
  m$.prototype.Ob = function () {
    this.j.hide();
  };
  m$.prototype.B = function () {
    n8("mdx-privacy-popup-cancel");
    this.Ob();
  };
  m$.prototype.C = function () {
    n8("mdx-privacy-popup-confirm");
    this.Ob();
  };
  g.x(n$, g.X);
  n$.prototype.onStateChange = function (a) {
    this.Ec(a.state);
  };
  n$.prototype.Ec = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
      };
      a = g.AO(a, 128) ? g.PO("Error on $RECEIVER_NAME", b) : a.isPlaying() || g.fP(a) ? g.PO("Playing on $RECEIVER_NAME", b) : g.PO("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.x(o$, g.lV);
  o$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.vu = g.Yb(a, this.j, this), g.mV(this, g.En(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Tj(a), this.enable(!0)) : this.enable(!1);
  };
  o$.prototype.j = function (a) {
    return a.key;
  };
  o$.prototype.Ek = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.vu[a].name;
  };
  o$.prototype.Ah = function (a) {
    g.lV.prototype.Ah.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.vu[a]);
    this.Nb.Ob();
  };
  g.x(gzb, g.dT);
  g.k = gzb.prototype;
  g.k.create = function () {
    var a = this.player.W(),
      b = g.BL(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
    };
    Syb(b, a);
    this.subscriptions.push(g.jE("yt-remote-before-disconnect", this.f8, this));
    this.subscriptions.push(g.jE("yt-remote-connection-change", this.w9, this));
    this.subscriptions.push(g.jE("yt-remote-receiver-availability-change", this.FY, this));
    this.subscriptions.push(g.jE("yt-remote-auto-connect", this.u9, this));
    this.subscriptions.push(g.jE("yt-remote-receiver-resumed", this.t9, this));
    this.subscriptions.push(g.jE("mdx-privacy-popup-confirm", this.N$, this));
    this.subscriptions.push(g.jE("mdx-privacy-popup-cancel", this.M$, this));
    this.FY();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.dT.prototype.load.call(this);
    this.Xl = new czb(this, this.player, this.Gc);
    var a = (a = $yb()) ? a.currentTime : 0;
    var b = Xyb() ? new M9(f$(), void 0) : null;
    0 == a && b && (a = J9(N9(b)));
    0 !== a && this.Dc(a);
    hzb(this, this.nf, this.nf);
    this.player.Xp(6);
  };
  g.k.unload = function () {
    this.player.qa("mdxautoplaycanceled");
    this.Us = this.Lp;
    g.pb(this.Xl, this.Gc);
    this.Gc = this.Xl = null;
    g.dT.prototype.unload.call(this);
    this.player.Xp(5);
    p$(this);
  };
  g.k.ya = function () {
    g.kE(this.subscriptions);
    g.dT.prototype.ya.call(this);
  };
  g.k.oE = function (a) {
    var b = g.Ia.apply(1, arguments);
    this.loaded && this.Xl.Sk.apply(this.Xl, [a].concat(g.pa(b)));
  };
  g.k.getAdState = function () {
    return this.Ph;
  };
  g.k.Bp = function () {
    return this.Gc ? N9(this.Gc).Bp : !1;
  };
  g.k.Tk = function () {
    return this.Gc ? N9(this.Gc).Tk : !1;
  };
  g.k.Dc = function (a, b) {
    this.qX = a || 0;
    this.player.qa("progresssync", a, b);
    this.player.Ra("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.qX;
  };
  g.k.getProgressState = function () {
    var a = N9(this.Gc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Oh(),
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
    this.Gc && this.Gc.nextVideo();
  };
  g.k.pJ = function () {
    this.Gc && this.Gc.pJ();
  };
  g.k.f8 = function (a) {
    1 === a && (this.kQ = this.Gc ? N9(this.Gc) : null);
  };
  g.k.w9 = function () {
    var a = Xyb() ? new M9(f$(), void 0) : null;
    if (a) {
      var b = this.Us;
      this.loaded && this.unload();
      this.Gc = a;
      this.kQ = null;
      b.key !== this.Lp.key && (this.Us = b, this.load());
    } else g.ob(this.Gc), this.Gc = null, this.loaded && (this.unload(), (a = this.kQ) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, J9(a)));
    this.player.qa("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.FY = function () {
    var a = [this.Lp],
      b = a.concat,
      c = Tyb();
    D9() && g.SB("yt-remote-cast-available") && c.push({
      key: "cast-selector-receiver",
      name: "Cast..."
    });
    this.vu = b.call(a, c);
    a = Vyb() || this.Lp;
    q$(this, a);
    this.player.Ra("onMdxReceiversChange");
  };
  g.k.u9 = function () {
    var a = Vyb();
    q$(this, a);
  };
  g.k.t9 = function () {
    this.Us = Vyb();
  };
  g.k.N$ = function () {
    this.LE = !0;
    p$(this);
    j$ = !1;
    g$ && i$(g$, 1);
    g$ = null;
  };
  g.k.M$ = function () {
    this.LE = !1;
    p$(this);
    q$(this, this.Lp);
    this.Us = this.Lp;
    j$ = !1;
    g$ = null;
    this.player.playVideo();
  };
  g.k.Jh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.vu;
      case "currentReceiver":
        return b && ("cast-selector-receiver" === b.key ? lyb() : q$(this, b)), this.loaded ? this.Us : this.Lp;
      case "quickCast":
        return 2 === this.vu.length && "cast-selector-receiver" === this.vu[1].key ? (b && lyb(), !0) : !1;
    }
  };
  g.k.AR = function () {
    this.Gc.AR();
  };
  g.k.yl = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.cT("remote", gzb);
  Object.keys(window).forEach(function (key) {
    if (typeof window[key] === 'function') {
      const originalFunc = window[key];
      window[key] = createHookedFunction(originalFunc, key, [], 'JSHook');
    }
  });
})(_yt_player);