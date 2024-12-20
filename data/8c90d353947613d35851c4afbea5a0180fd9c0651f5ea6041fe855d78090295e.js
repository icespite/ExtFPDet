(function (g) {
  var window = this;
  'use strict';
  var vlb = function (a, b) {
      return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN";
    },
    wlb = function (a, b) {
      var c = new g.CS();
      c.languageCode = a.languageCode;
      c.languageName = a.languageName;
      c.name = a.name;
      c.displayName = a.displayName;
      c.kind = a.kind;
      c.isDefault = !1;
      c.j = a.j;
      c.isTranslateable = a.isTranslateable;
      c.vssId = a.vssId;
      c.url = a.url;
      c.translationLanguage = b;
      a.xtags && (c.xtags = a.xtags);
      a.captionId && (c.captionId = a.captionId);
      return c;
    },
    xlb = function (a, b) {
      var c, d, e;
      return g.I(function (f) {
        if (1 == f.j) return c = a + "|" + b, g.y(f, g.ND(), 2);
        if (3 != f.j) {
          d = f.B;
          if (!d) throw g.qD("gct");
          return g.y(f, g.RS(d), 3);
        }
        e = f.B;
        return f.return(e.get("captions", c));
      });
    },
    ylb = function (a, b, c) {
      xlb(a, b).then(function (d) {
        d && c(d.trackData, new g.CS(d.metadata));
      });
    },
    Blb = function (a) {
      if (!zlb.test(a)) throw Error("'" + a + "' is not a valid hex color");
      4 == a.length && (a = a.replace(Alb, "#$1$1$2$2$3$3"));
      a = a.toLowerCase();
      a = parseInt(a.slice(1), 16);
      return [a >> 16, a >> 8 & 255, a & 255];
    },
    Clb = function () {
      return g.OC("yt-player-caption-display-settings");
    },
    A4 = function () {
      this.segments = [];
    },
    Dlb = function (a, b) {
      var c = g.Vb(a.segments, b);
      0 <= c || 0 > c && 1 === (-c - 1) % 2 || (c = -c - 1, 0 < c && 1 === b - a.segments[c - 1] && c < a.segments.length && 1 === a.segments[c] - b ? (g.Db(a.segments, c), g.Db(a.segments, c - 1)) : 0 < c && 1 === b - a.segments[c - 1] ? a.segments[c - 1] = b : c < a.segments.length && 1 === a.segments[c] - b ? a.segments[c] = b : (g.Rb(a.segments, c, 0, b), g.Rb(a.segments, c + 1, 0, b)));
    },
    Elb = function (a, b, c, d, e, f) {
      g.J.call(this);
      this.policy = a;
      this.player = b;
      this.ma = c;
      this.Z = d;
      this.G = e;
      this.Y = f;
      this.D = new A4();
      this.K = -1;
      this.C = this.B = this.j = null;
      this.N = new g.Bu(this.XX, 1E3, this);
      this.events = new g.IK(this);
      g.L(this, this.N);
      g.L(this, this.events);
      this.events.T(b, "SEEK_COMPLETE", this.JA);
      this.JA();
      this.XX();
    },
    Flb = function (a) {
      return a.j && a.j.D ? a.j.D + a.player.Rc() < a.player.getCurrentTime() : !1;
    },
    Glb = function (a, b) {
      var c = g.UMa(b, a.policy, {}).bf(),
        d = {
          format: "RAW",
          withCredentials: !0
        };
      if (a.policy.Aa) {
        d.method = "POST";
        var e = b.qt(),
          f = (0, g.VZ)([120, 0]);
        e && g.PO(e, g.GUa);
        d.postBody = f;
      }
      a.G && (d.responseType = "arraybuffer");
      a.C = g.ZB(c, d, 3, 100).then(function (h) {
        a: {
          h = h.xhr;
          a.isDisposed();
          if (a.B) {
            var l = !(a.G ? h.response : h.responseText) || 400 <= h.status,
              m = g.JNa(h);
            if (m) {
              h = g.UMa(a.B, a.policy, {});
              a.B.Qk(h, m);
              Glb(a, a.B);
              break a;
            }
            l ? a.player.va("capfail", {
              status: h.status
            }) : (a.player.ai().Ci("fcb_r"), m = a.B.eb[0].Oa, null != a.Z && a.K !== m && (l = a.B.eb[0], a.G ? a.Z(h.response, 1E3 * (l.startTime + a.player.Rc())) : a.Z(h.responseText, 1E3 * (l.startTime + a.player.Rc())), a.K = m));
          }
          a.B = null;
          a.C = null;
        }
      }).xk(function (h) {
        a.B = null;
        a.C = null;
        var l;
        a.player.va("capfail", {
          status: null == (l = h.xhr) ? void 0 : l.status
        });
      });
      a.B = b;
      Dlb(a.D, a.B.eb[0].Oa);
    },
    B4 = function (a, b) {
      g.zV.call(this, b.U());
      this.j = a;
      this.J = b;
      this.C = null;
      this.G = !1;
      this.K = g.AJ(this.J.U()) && !this.j.isManifestless;
    },
    Ilb = function (a, b) {
      var c = [],
        d;
      for (d in a.j.j) if (a.j.j.hasOwnProperty(d)) {
        var e = a.j.j[d];
        if (g.fVa(e, b || null)) {
          var f = e.info.id,
            h = f,
            l = "." + f,
            m = "",
            n = "",
            p = "";
          if (e = e.info.captionTrack) f = e.languageCode, h = e.displayName, l = e.vssId, m = e.kind, a.J.U().L("html5_expose_xtags_through_caption_track") && (n = e.xtags), p = e.id;else {
            e = f;
            var q = g.sjb.get(e);
            null == q && (q = Hlb[e] || Hlb[e.replace(/-/g, "_")], g.sjb.set(e, q));
            h = q || h;
          }
          c.push(new g.CS({
            id: d,
            languageCode: f,
            languageName: h,
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: l,
            kind: m,
            xtags: n,
            captionId: p
          }));
        }
      }
      return c;
    },
    Jlb = function (a, b) {
      return null != b && b in a.j.j ? a.j.j[b] : null;
    },
    Klb = function (a, b, c) {
      var d = [],
        e;
      for (e in a.j.j) if (a.j.j.hasOwnProperty(e)) {
        var f = a.j.j[e];
        if (g.fVa(f, c || null)) {
          var h = f.info.captionTrack;
          h && h.languageCode === b && d.push(f);
        }
      }
      return d.length ? d[0] : null;
    },
    Llb = function () {
      var a = void 0;
      a = void 0 === a ? {} : a;
      var b = "suggest_correction" in g.Gjb ? g.Gjb.suggest_correction : "Edit caption";
      b = b || "";
      var c = {},
        d;
      for (d in a) {
        c = {
          gE: c.gE
        };
        c.gE = d;
        var e = function (f) {
          return function () {
            return String(a[f.gE]);
          };
        }(c);
        b = b.replace(new RegExp("\\$\\{" + c.gE + "\\}", "gi"), e);
        b = b.replace(new RegExp("\\$" + c.gE, "gi"), e);
      }
      return b;
    },
    C4 = function (a, b, c, d, e, f, h, l, m, n) {
      var p = n.isInline() && l.jb("web_imp_caption_window"),
        q = n.isInline() && !1;
      p = p || q;
      q = {};
      Object.assign(q, b);
      Object.assign(q, a.params);
      Object.assign(q, c);
      var r = {};
      Object.assign(r, b.Re);
      a.params.Re && Object.assign(r, a.params.Re);
      Object.assign(r, c.Re);
      p && (q.windowOpacity = .6, r.backgroundOpacity = 0);
      q.Re = r;
      var t = 1 === q.Bi,
        u = [{
          I: "span",
          S: "captions-text",
          X: {
            style: "word-wrap: normal; display: block;"
          }
        }],
        x,
        B,
        F;
      (l = l.jb("caption_edit_on_hover") && (null == (x = n.getVideoData().getPlayerResponse()) ? void 0 : null == (B = x.captions) ? void 0 : null == (F = B.playerCaptionsTracklistRenderer) ? void 0 : F.openTranscriptCommand)) && u.unshift({
        I: "button",
        S: "caption-edit",
        X: {
          tabindex: "0",
          "aria-label": Llb()
        },
        V: [{
          I: "svg",
          X: {
            fill: "#e3e3e3",
            height: "100%",
            viewBox: "5 5 38 38",
            width: "100%"
          },
          V: [{
            I: "path",
            X: {
              d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
            }
          }]
        }]
      });
      g.V.call(this, {
        I: "div",
        S: "caption-window",
        X: {
          id: "caption-window-" + a.id,
          dir: t ? "rtl" : "ltr",
          tabindex: "0",
          lang: q.lang
        },
        V: u
      });
      var G = this;
      this.K = [];
      this.Fa = !1;
      this.B = a;
      this.Na = this.Ka = null;
      this.playerWidth = f;
      this.playerHeight = h;
      this.N = null;
      this.maxWidth = .96 * f;
      this.maxHeight = .96 * h;
      this.j = q;
      this.pd = c;
      this.qa = b;
      this.D = this.Ga("captions-text");
      this.dc = "" !== this.D.style.getPropertyValue("box-decoration-break") || "" !== this.D.style.getPropertyValue("-webkit-box-decoration-break");
      this.Va = Mlb(d, e, f, h);
      this.Hc = m;
      l && (this.G = this.Ga("caption-edit"), this.T(this.G, "click", function () {
        G.Hc();
      }));
      this.type = 0;
      this.Za = this.Va * Nlb(r);
      this.Db = p;
      a = new g.WU(this.element, !0);
      g.L(this, a);
      a.subscribe("dragstart", this.L1, this);
      a.subscribe("dragmove", this.K1, this);
      a.subscribe("dragend", this.J1, this);
      this.ob = this.gb = this.tb = this.rb = 0;
      a = "";
      this.j.windowOpacity && (a = Blb(this.j.windowColor), a = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.j.windowOpacity + ")");
      b = {
        "background-color": a,
        display: !1 === this.j.isVisible ? "none" : "",
        "text-align": Olb[this.j.textAlign]
      };
      this.dc && (b["border-radius"] = a ? this.Za / 8 + "px" : "");
      (this.C = 2 === this.B.params.Bi || 3 === this.B.params.Bi) && Plb(this, this.element);
      g.Vr(this.element, b);
      if (p) {
        var H;
        null == (H = this.element.parentElement) || H.style.setProperty("--caption-window-color", a);
      }
      switch (this.j.Ul) {
        case 0:
        case 1:
        case 2:
          g.Ju(this.element, "ytp-caption-window-top");
          break;
        case 6:
        case 7:
        case 8:
          g.Ju(this.element, "ytp-caption-window-bottom");
      }
    },
    Plb = function (a, b) {
      var c = "vertical-rl";
      1 === a.j.gS && (c = "vertical-lr");
      g.af && (c = "vertical-lr" === c ? "tb-lr" : "tb-rl");
      g.Vr(b, "-o-writing-mode", c);
      g.Vr(b, "-webkit-writing-mode", c);
      g.Vr(b, "writing-mode", c);
      g.Vr(b, "text-orientation", "upright");
      g.Ju(b, "ytp-vertical-caption");
      3 === a.B.params.Bi && (g.Vr(b, "text-orientation", ""), g.Vr(b, "transform", "rotate(180deg)"));
    },
    Nlb = function (a) {
      var b = 1 + .25 * (a.fontSizeIncrement || 0);
      if (0 === a.offset || 2 === a.offset) b *= .8;
      return b;
    },
    Qlb = function (a, b) {
      var c = {},
        d = b.background ? b.background : a.j.Re.background;
      if (null != b.backgroundOpacity || b.background) {
        var e = null != b.backgroundOpacity ? b.backgroundOpacity : a.j.Re.backgroundOpacity;
        d = Blb(d);
        c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
        a.dc && (c["box-decoration-break"] = "clone", c["border-radius"] = a.Za / 8 + "px");
      }
      if (null != b.fontSizeIncrement || null != b.offset) c["font-size"] = a.Va * Nlb(b) + "px";
      d = 1;
      e = b.color || a.j.Re.color;
      if (b.color || null != b.textOpacity) e = Blb(e), d = null == b.textOpacity ? a.j.Re.textOpacity : b.textOpacity, e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")", c.color = e, c.fill = e;
      var f = b.charEdgeStyle;
      0 === f && (f = void 0);
      if (f) {
        e = "rgba(34, 34, 34, " + d + ")";
        var h = "rgba(204, 204, 204, " + d + ")";
        b.YM && (h = e = b.YM);
        var l = a.Va / 16 / 2,
          m = Math.max(l, 1),
          n = Math.max(2 * l, 1),
          p = Math.max(3 * l, 1),
          q = Math.max(5 * l, 1);
        d = [];
        switch (f) {
          case 4:
            for (; p <= q; p += l) d.push(n + "px " + n + "px " + p + "px " + e);
            break;
          case 1:
            n = 2 <= window.devicePixelRatio ? .5 : 1;
            for (f = m; f <= p; f += n) d.push(f + "px " + f + "px " + e);
            break;
          case 2:
            d.push(m + "px " + m + "px " + h);
            d.push("-" + m + "px -" + m + "px " + e);
            break;
          case 3:
            for (p = 0; 5 > p; p++) d.push("0 0 " + n + "px " + e);
        }
        c["text-shadow"] = d.join(", ");
      }
      e = "";
      switch (b.fontFamily) {
        case 1:
          e = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
          break;
        case 2:
          e = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
          break;
        case 3:
          e = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
          break;
        case 5:
          e = '"Comic Sans MS", Impact, Handlee, fantasy';
          break;
        case 6:
          e = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
          break;
        case 7:
          e = g.iC() ? '"Carrois Gothic SC", sans-serif-smallcaps' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
          break;
        case 0:
        case 4:
          e = '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';
      }
      e && (c["font-family"] = e);
      e = b.offset;
      null == e && (e = a.j.Re.offset);
      switch (e) {
        case 0:
          c["vertical-align"] = "sub";
          break;
        case 2:
          c["vertical-align"] = "super";
      }
      7 === b.fontFamily && (c["font-variant"] = "small-caps");
      b.bold && (c["font-weight"] = "bold");
      b.italic && (c["font-style"] = "italic");
      b.underline && (c["text-decoration"] = "underline");
      b.f7 && (c.visibility = "hidden");
      1 === b.nX && a.C && (c["text-combine-upright"] = "all", c["text-orientation"] = "mixed", e = g.rS || g.pD, 3 === a.B.params.Bi ? c.transform = e ? "rotate(90deg)" : "rotate(180deg)" : e && (c.transform = "rotate(-90deg)"));
      if (1 === b.ao || 2 === b.ao || 3 === b.ao || 4 === b.ao || 5 === b.ao) if (g.rS) c["font-weight"] = "bold";else switch (c["text-emphasis-style"] = "filled circle", c["text-emphasis-color"] = "currentcolor", c["webkit-text-emphasis"] = "filled circle", b.ao) {
        case 4:
        case 3:
          c["text-emphasis-position"] = "under left";
          c["webkit-text-emphasis-position"] = "under left";
          break;
        case 5:
        case 2:
          c["text-emphasis-position"] = "over right", c["webkit-text-emphasis-position"] = "over right";
      }
      return c;
    },
    D4 = function (a) {
      a = a.split("px");
      return 0 < a.length ? (a = Number(a[0])) ? a : 0 : 0;
    },
    Rlb = function (a) {
      a.N = g.mf("SPAN");
      g.Vr(a.N, {
        display: "block"
      });
      g.Ju(a.N, "caption-visual-line");
      a.D.appendChild(a.N);
    },
    Slb = function (a, b) {
      var c = g.mf("SPAN");
      g.Vr(c, {
        display: "inline-block",
        "white-space": "pre-wrap"
      });
      g.Vr(c, Qlb(a, b));
      c.classList.add("ytp-caption-segment");
      a.N.appendChild(c);
      c.previousElementSibling && (g.Vr(c.previousElementSibling, {
        "border-top-right-radius": "0",
        "border-bottom-right-radius": "0"
      }), g.Vr(c, {
        "border-top-left-radius": "0",
        "border-bottom-left-radius": "0"
      }));
      return c;
    },
    Tlb = function (a, b, c) {
      a.Fa = a.Fa || !!c;
      var d = {};
      Object.assign(d, a.j.Re);
      Object.assign(d, c || b.j);
      Object.assign(d, a.pd.Re);
      (c = !a.N) && Rlb(a);
      for (var e = a.Ka && a.Na && g.pd(d, a.Na) ? a.Ka : Slb(a, d), f = "string" === typeof b.text, h = f ? b.text.split("\n") : [b.text], l = 0; l < h.length; l++) {
        var m = 0 < l || !b.append,
          n = h[l];
        m && !c ? (Rlb(a), e = Slb(a, d)) : m && c && (c = !1);
        n && (e.appendChild(f ? g.nf(n) : n), f || "RUBY" !== n.tagName || 4 !== n.childElementCount || g.rS || !g.Xr(n.children[2], "text-emphasis") || (m = a.C ? "padding-right" : "padding-top", g.Xr(n.children[2], "text-emphasis-position") && (m = a.C ? "padding-left" : "padding-bottom"), g.Sc ? g.Vr(e, m, "1em") : g.Vr(e, m, "0.5em")));
      }
      a.Na = d;
      a.Ka = e;
      a.K.push(b);
    },
    Mlb = function (a, b, c, d) {
      var e = b / 360 * 16;
      b >= a && (a = 640, d > 1.3 * c && (a = 480), e = c / a * 16);
      return e;
    },
    Vlb = function () {
      this.C = this.time = this.mode = this.B = 0;
      this.D = new Ulb(this);
      this.G = new Ulb(this);
      this.j = [];
      this.clear();
    },
    Xlb = function (a, b, c) {
      if (255 === a && 255 === b || !a && !b) return {
        Yu: a,
        Es: b,
        result: 0
      };
      a = Wlb[a];
      b = Wlb[b];
      if (a & 128) {
        var d;
        if (d = !(b & 128)) d = b, d = c.Ee() && c.Es === d;
        if (d) return {
          Yu: a,
          Es: b,
          result: 1
        };
      } else if (b & 128 && 1 <= a && 31 >= a) return {
        Yu: a,
        Es: b,
        result: 2
      };
      return {
        Yu: a,
        Es: b,
        result: 3
      };
    },
    Zlb = function (a, b, c, d) {
      255 === b && 255 === c || !b && !c ? (45 === ++a.C && a.reset(), a.D.B.clear(), a.G.B.clear()) : (a.C = 0, Ylb(a.D, b, c, d));
    },
    $lb = function (a, b) {
      a.j.sort(function (e, f) {
        var h = e.time - f.time;
        return 0 === h ? e.order - f.order : h;
      });
      for (var c = g.v(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, a.time = d.time, 0 === d.type ? Zlb(a, d.tV, d.uV, b) : 1 === d.type && a.B & 496 && Ylb(a.G, d.tV, d.uV, b);
      a.j.length = 0;
    },
    E4 = function () {
      this.type = 0;
    },
    F4 = function () {
      this.state = this.Es = this.Yu = 0;
    },
    amb = function () {
      this.timestamp = this.j = 0;
    },
    G4 = function (a) {
      this.D = a;
      this.B = [];
      this.j = this.col = this.row = 0;
      this.style = new E4();
      for (a = this.C = 0; 15 >= a; a++) {
        this.B[a] = [];
        for (var b = 0; 32 >= b; b++) this.B[a][b] = new amb();
      }
    },
    H4 = function (a, b) {
      if (3 === a.style.type) {
        for (var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1; 15 >= m; ++m) {
          for (var n = !1, p = d ? d : 1; 32 >= p; ++p) {
            var q = a.B[m][p];
            if (0 !== q.j) {
              0 === c && (c = m, d = p);
              n = String.fromCharCode(q.j);
              var r = q.timestamp;
              r < e && (e = r);
              q.timestamp = l;
              h && (f += h, h = "");
              f += n;
              n = !0;
            }
            if ((0 === q.j || 32 === p) && n) {
              h = "\n";
              break;
            } else if (d && !n) break;
          }
          if (c && !n) break;
        }
        f && b.D(c, d, e, l, f);
      } else for (d = c = 0, f = e = a.D.time + 0, h = 1; 15 >= h; ++h) for (l = "", m = 1; 32 >= m; ++m) if (p = a.B[h][m], q = p.j, 0 !== q && (0 === c && (c = h, d = m), n = String.fromCharCode(q), r = p.timestamp, r <= e && (e = r), l += n, p.reset()), 32 === m || 0 === q) l && b.D(c, d, e, f, l), e = f, l = "", d = c = 0;
    },
    fmb = function (a, b) {
      switch (a) {
        case 0:
          return bmb[(b & 127) - 32];
        case 1:
          return cmb[b & 15];
        case 2:
          return dmb[b & 31];
        case 3:
          return emb[b & 31];
      }
      return 0;
    },
    I4 = function (a) {
      return a.B[a.row][a.col];
    },
    J4 = function (a, b, c) {
      2 <= b && 1 < a.col && (--a.col, I4(a).j = 0);
      var d = I4(a);
      d.timestamp = a.D.time + 0;
      d.j = fmb(b, c);
      32 > a.col && a.col++;
    },
    gmb = function (a, b, c, d) {
      for (var e = 0; e < d; e++) for (var f = 0; 32 >= f; f++) {
        var h = a.B[b + e][f],
          l = a.B[c + e][f];
        h.j = l.j;
        h.timestamp = l.timestamp;
      }
    },
    K4 = function (a, b, c) {
      for (var d = 0; d < c; d++) for (var e = 0; 32 >= e; e++) a.B[b + d][e].reset();
    },
    hmb = function (a) {
      a.row = 0 < a.j ? a.j : 1;
      a.col = 1;
      K4(a, 0, 15);
    },
    imb = function (a) {
      this.C = a;
      this.G = 0;
      this.style = new E4();
      this.K = new G4(this.C);
      this.N = new G4(this.C);
      this.text = new G4(this.C);
      this.B = this.K;
      this.D = this.N;
      this.j = this.B;
    },
    jmb = function (a, b, c) {
      var d = a.B,
        e = !1;
      switch (a.style.get()) {
        case 4:
        case 1:
        case 2:
          4 === a.style.get() && 0 < d.j || (H4(d, c), hmb(a.B), hmb(a.D), d.row = 15, d.j = b, e = !0);
      }
      a.style.set(3);
      a.j = d;
      a.j.style = a.style;
      a.C.mode = 1 << d.C;
      e ? d.col = 1 : d.j !== b && (d.j > b ? (H4(d, c), K4(d, d.row - d.j, b)) : d.row < b && (b = d.j), d.j = b);
    },
    kmb = function (a) {
      a.style.set(1);
      a.j = a.D;
      a.j.j = 0;
      a.j.style = a.style;
      a.C.mode = 1 << a.j.C;
    },
    lmb = function (a) {
      a.style.set(4);
      a.j = a.text;
      a.j.style = a.style;
      a.C.mode = 1 << a.j.C;
    },
    Ulb = function (a) {
      this.j = a;
      this.G = 0;
      this.C = new imb(this.j);
      this.K = new imb(this.j);
      this.B = new F4();
      this.D = this.C;
    },
    Ylb = function (a, b, c, d) {
      a.B.update();
      b = Xlb(b, c, a.B);
      switch (b.result) {
        case 0:
          return;
        case 1:
        case 2:
          return;
      }
      var e = b.Yu;
      c = b.Es;
      if (32 <= e || !e) a.j.mode & a.j.B && (b = e, b & 128 && (b = 127), c & 128 && (c = 127), a = a.D.j, b & 96 && J4(a, 0, b), c & 96 && J4(a, 0, c), 0 !== b && 0 !== c && 3 === a.style.type && H4(a, d));else if (e & 16) a: if (!a.B.matches(e, c) && (b = a.B, b.Yu = e, b.Es = c, b.state = 2, b = e & 8 ? a.K : a.C, a.D = b, a.j.mode = 1 << (a.G << 2) + (b.G << 1) + (4 === b.style.type ? 1 : 0), (a.j.mode | 1 << (a.G << 2) + (b.G << 1) + (4 !== b.style.type ? 1 : 0)) & a.j.B)) if (c & 64) {
        d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | c >> 5 & 1];
        a = c & 16 ? 4 * ((c & 14) >> 1) : 0;
        c = b.j;
        switch (b.style.get()) {
          case 4:
            d = c.row;
            break;
          case 3:
            if (d !== c.row) {
              if (d < c.j && (d = c.j, d === c.row)) break;
              var f = 1 + c.row - c.j,
                h = 1 + d - c.j;
              gmb(c, h, f, c.j);
              b = f;
              e = c.j;
              h < f ? (f = h + e - f, 0 < f && (b += f, e -= f)) : (f = f + e - h, 0 < f && (e -= f));
              K4(c, b, e);
            }
        }
        c.row = d;
        c.col = a + 1;
      } else switch (e & 7) {
        case 1:
          switch (c & 112) {
            case 32:
              J4(b.j, 0, 32);
              break a;
            case 48:
              57 === c ? (d = b.j, I4(d).j = 0, 32 > d.col && d.col++) : J4(b.j, 1, c & 15);
          }
          break;
        case 2:
          c & 32 && J4(b.j, 2, c & 31);
          break;
        case 3:
          c & 32 && J4(b.j, 3, c & 31);
          break;
        case 4:
        case 5:
          if (32 <= c && 47 >= c) switch (c) {
            case 32:
              kmb(b);
              break;
            case 33:
              d = b.j;
              1 < d.col && (--d.col, I4(d).j = 0);
              break;
            case 36:
              d = b.j;
              b = I4(d);
              for (a = 0; 15 >= a; a++) for (c = 0; 32 >= c; c++) if (d.B[a][c] === b) {
                for (; 32 >= c; c++) d.B[a][c].reset();
                break;
              }
              break;
            case 37:
              jmb(b, 2, d);
              break;
            case 38:
              jmb(b, 3, d);
              break;
            case 39:
              jmb(b, 4, d);
              break;
            case 40:
              J4(b.j, 0, 32);
              break;
            case 41:
              b.style.set(2);
              b.j = b.B;
              b.j.j = 0;
              b.j.style = b.style;
              b.C.mode = 1 << b.j.C;
              break;
            case 42:
              d = b.text;
              d.j = 15;
              d.style.set(4);
              hmb(d);
              lmb(b);
              break;
            case 43:
              lmb(b);
              break;
            case 44:
              a = b.B;
              switch (b.style.get()) {
                case 1:
                case 2:
                case 3:
                  H4(a, d);
              }
              K4(a, 0, 15);
              break;
            case 45:
              b: {
                a = b.j;
                switch (b.style.get()) {
                  default:
                  case 2:
                  case 1:
                    break b;
                  case 4:
                    if (15 > a.row) {
                      ++a.row;
                      a.col = 1;
                      break b;
                    }
                  case 3:
                }
                2 > a.j && (a.j = 2, a.row < a.j && (a.row = a.j));
                b = a.row - a.j + 1;
                H4(a, d);
                gmb(a, b, b + 1, a.j - 1);
                K4(a, a.row, 1);
              }
              break;
            case 46:
              K4(b.D, 0, 15);
              break;
            case 47:
              H4(b.B, d), b.D.updateTime(b.C.time + 0), d = b.D, b.D = b.B, b.B = d, kmb(b);
          }
          break;
        case 7:
          switch (c) {
            case 33:
            case 34:
            case 35:
              d = b.j, 32 < (d.col += c & 3) && (d.col = 32);
          }
      }
    },
    mmb = function () {},
    L4 = function (a, b, c, d, e, f, h) {
      f = void 0 === f ? !1 : f;
      h = void 0 === h ? null : h;
      g.XJ.call(this, a, a + b, {
        priority: c,
        namespace: "captions"
      });
      this.windowId = d;
      this.text = e;
      this.append = f;
      this.j = h;
    },
    omb = function (a, b, c, d, e, f, h) {
      var l = f[0],
        m = h[l.getAttribute("p")];
      if (1 === m.cg) {
        var n = f[1],
          p = f[2];
        f = f[3];
        l.getAttribute("t");
        n.getAttribute("t");
        p.getAttribute("t");
        f.getAttribute("t");
        l.getAttribute("p");
        n.getAttribute("p");
        f.getAttribute("p");
        h = h[p.getAttribute("p")];
        l = nmb(l.textContent, n.textContent, p.textContent, f.textContent, h);
        return new L4(a, b, e, c, l, d, m);
      }
      switch (m.cg) {
        case 9:
        case 10:
          m.ao = 1;
          break;
        case 11:
          m.ao = 2;
          break;
        case 12:
          m.ao = 3;
          break;
        case 13:
          m.ao = 4;
          break;
        case 14:
          m.ao = 5;
      }
      return new L4(a, b, e, c, l.textContent || "", d, m);
    },
    nmb = function (a, b, c, d, e) {
      var f = g.iC(),
        h = f ? g.mf("DIV") : g.mf("RUBY"),
        l = g.mf("SPAN");
      l.textContent = a;
      h.appendChild(l);
      a = f ? g.mf("DIV") : g.mf("RP");
      a.textContent = b;
      h.appendChild(a);
      b = f ? g.mf("DIV") : g.mf("RT");
      b.textContent = c;
      h.appendChild(b);
      c = e.cg;
      if (10 === c || 11 === c || 12 === c || 13 === c || 14 === c) if (g.Vr(b, "text-emphasis-style", "filled circle"), g.Vr(b, "text-emphasis-color", "currentcolor"), g.Vr(b, "webkit-text-emphasis", "filled circle"), 11 === e.cg || 13 === e.cg) g.Vr(b, "webkit-text-emphasis-position", "under left"), g.Vr(b, "text-emphasis-position", "under left");
      c = !0;
      if (4 === e.cg || 7 === e.cg || 12 === e.cg || 14 === e.cg) g.Vr(h, "ruby-position", "over"), g.Vr(h, "-webkit-ruby-position", "before");else if (5 === e.cg || 6 === e.cg || 11 === e.cg || 13 === e.cg) g.Vr(h, "ruby-position", "under"), g.Vr(h, "-webkit-ruby-position", "after"), c = !1;
      e = f ? g.mf("DIV") : g.mf("RP");
      e.textContent = d;
      h.appendChild(e);
      f && (d = c, g.Vr(h, {
        display: "inline-block",
        position: "relative"
      }), f = h.firstElementChild.nextElementSibling, g.Vr(f, "display", "none"), f = f.nextElementSibling, g.Vr(f, {
        "font-size": "0.5em",
        "line-height": "1.2em",
        "text-align": "center",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        width: "400%"
      }), g.Vr(h.lastElementChild, "display", "none"), d ? (g.Vr(h, "padding-top", "0.6em"), g.Vr(f, "top", "0")) : (g.Vr(h, "padding-bottom", "0.6em"), g.Vr(f, "bottom", "0")));
      return h;
    },
    M4 = function () {
      g.J.apply(this, arguments);
    },
    N4 = function (a, b, c, d, e) {
      g.XJ.call(this, a, a + b, {
        priority: c,
        namespace: "captions"
      });
      this.id = d;
      this.params = e;
      this.j = [];
    },
    pmb = function (a) {
      var b = "_" + O4++;
      return new N4(0, 0x8000000000000, 0, b, a);
    },
    P4 = function (a) {
      M4.call(this);
      this.D = a;
      this.pens = {};
      this.Z = {};
      this.Y = {};
      this.G = "_" + O4++;
      this.N = {};
      this.C = this.j = null;
      this.K = !0;
    },
    Q4 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return Number(a);
    },
    R4 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return "1" === a;
    },
    S4 = function (a, b) {
      a = Q4(a, b);
      return void 0 !== a ? a : null;
    },
    U4 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return T4.test(a), a;
    },
    qmb = function (a, b) {
      var c = {},
        d = b.getAttribute("ws");
      Object.assign(c, d ? a.Y[d] : a.D);
      a = S4(b, "mh");
      null != a && (c.rA = a);
      a = S4(b, "ju");
      null != a && (c.textAlign = a);
      a = S4(b, "pd");
      null != a && (c.Bi = a);
      a = S4(b, "sd");
      null != a && (c.gS = a);
      a = U4(b, "wfc");
      null != a && (c.windowColor = a);
      b = Q4(b, "wfo");
      void 0 !== b && (c.windowOpacity = b / 255);
      return c;
    },
    rmb = function (a, b) {
      var c = {},
        d = b.getAttribute("wp");
      d && Object.assign(c, a.Z[d]);
      a = S4(b, "ap");
      null != a && (c.Ul = a);
      a = Q4(b, "cc");
      null != a && (c.Js = a);
      a = Q4(b, "ah");
      null != a && (c.Zj = a);
      a = Q4(b, "rc");
      null != a && (c.Gr = a);
      b = Q4(b, "av");
      null != b && (c.jo = b);
      return c;
    },
    smb = function (a, b, c, d) {
      var e = {};
      Object.assign(e, rmb(a, b));
      Object.assign(e, qmb(a, b));
      d ? g.pd(e, a.D) ? (d = a.G, e = a.D) : d = "_" + O4++ : d = b.getAttribute("id") || "_" + O4++;
      a = Q4(b, "t") + c;
      b = Q4(b, "d") || 0x8000000000000;
      if (2 === e.Bi || 3 === e.Bi) c = e.Gr, e.Gr = e.Js, e.Js = c;
      return new N4(a, b, 0, d, e);
    },
    V4 = function (a) {
      M4.call(this);
      this.K = a;
      this.j = new Map();
      this.D = new Map();
      this.G = new Map();
      this.C = new Map();
    },
    W4 = function (a) {
      a = g.me(Math.round(a), 0, 16777215).toString(16).toUpperCase();
      return "#000000".substr(0, 7 - a.length) + a;
    },
    tmb = function (a, b, c, d, e) {
      0 === d && (d = 0x8000000000000);
      var f = {};
      b.wpWinPosId && Object.assign(f, a.D.get(b.wpWinPosId));
      b.wsWinStyleId && Object.assign(f, a.G.get(b.wsWinStyleId));
      a = b.rcRowCount;
      void 0 !== a && (f.Gr = a);
      b = b.ccColCount;
      void 0 !== b && (f.Js = b);
      if (2 === f.Bi || 3 === f.Bi) b = f.Gr, f.Gr = f.Js, f.Js = b;
      return new N4(c, d, 0, e, f);
    },
    X4 = function (a, b, c, d) {
      g.zV.call(this, a);
      this.videoData = b;
      this.audioTrack = c;
      this.Wa = d;
      this.D = b.Cx;
    },
    Y4 = function (a, b, c, d, e, f, h, l, m, n) {
      C4.call(this, a, b, c, d, e, f, h, l, m, n);
      this.type = 1;
    },
    Z4 = function (a, b, c) {
      this.trackData = a;
      this.K = c;
      this.version = this.G = this.C = this.byteOffset = 0;
      this.j = new DataView(this.trackData);
      this.B = [];
    },
    $4 = function (a) {
      var b = a.byteOffset;
      a.byteOffset += 1;
      return a.j.getUint8(b);
    },
    a5 = function (a) {
      var b = a.byteOffset;
      a.byteOffset += 4;
      return a.j.getUint32(b);
    },
    b5 = function (a, b) {
      M4.call(this);
      this.C = a;
      this.D = b;
      this.track = "CC3" === this.D.languageName ? 4 : 0;
      this.j = new Vlb();
      this.j.B = 1 << this.track;
    },
    vmb = function (a) {
      if ("string" === typeof a) return !1;
      a = new Z4(a, 8, 0);
      return umb(a);
    },
    umb = function (a) {
      if (!(a.byteOffset < a.j.byteLength) || 1380139777 !== a5(a)) return !1;
      a.version = $4(a);
      if (1 < a.version) return !1;
      $4(a);
      $4(a);
      $4(a);
      return !0;
    },
    c5 = function (a, b, c, d, e, f, h, l, m, n) {
      C4.call(this, a, b, c, d, e, f, h, l, m, n);
      var p = this;
      this.type = 2;
      this.Aa = [];
      this.ma = this.Y = this.Sa = 0;
      this.Ea = NaN;
      this.Nb = 0;
      this.jc = null;
      this.Ya = new g.Bu(this.e$, 433, this);
      this.G && (n.createClientVe(this.G, this, 167342), this.T(this.G, "click", function () {
        n.logClick(p.G);
      }), a = new g.WU(this.element, !0), g.L(this, a), a.subscribe("hoverstart", function () {
        n.logVisibility(p.G, !0);
      }, this));
      g.Ju(this.element, "ytp-caption-window-rollup");
      g.L(this, this.Ya);
      g.Vr(this.element, "overflow", "hidden");
    },
    wmb = function (a, b) {
      if (!b) return "";
      a.C && 1 !== a.B.params.gS && (b *= -1);
      return "translate" + (a.C ? "X" : "Y") + "(" + b + "px)";
    },
    xmb = function (a) {
      a.Aa = Array.from(document.getElementsByClassName("caption-visual-line"));
      for (var b = a.B.params.Gr, c = 0, d = 0, e = a.Aa.length - 1; c < b && -1 < e;) {
        var f = a.Aa[e];
        d += a.C ? f.offsetWidth : f.offsetHeight;
        c++;
        e--;
      }
      a.Y = d;
      b = Math;
      c = b.max;
      isNaN(a.Ea) && ((d = a.j.Js) ? (e = g.mf("SPAN"), g.Af(e, "\u2013".repeat(d)), g.Vr(e, Qlb(a, a.j.Re)), a.D.appendChild(e), a.Ea = e.offsetWidth, a.D.removeChild(e)) : a.Ea = 0);
      d = a.D;
      a.ma = c.call(b, a.Ea, a.Nb, (a.C ? d.offsetHeight : d.offsetWidth) + 1);
    },
    ymb = function (a, b) {
      xmb(a);
      var c = a.Aa.reduce(function (f, h) {
        return (a.C ? h.offsetWidth : h.offsetHeight) + f;
      }, 0);
      c = a.Y - c;
      if (c !== a.Sa) {
        var d = 0 < c && 0 === a.Sa,
          e = c < a.Sa;
        b || isNaN(c) || d || !e || (g.Ju(a.element, "ytp-rollup-mode"), g.Cu(a.Ya));
        g.Vr(a.D, "transform", wmb(a, c));
        a.Sa = c;
      }
      xmb(a);
    },
    d5 = function () {
      M4.call(this);
    },
    zmb = function (a, b, c, d, e, f, h, l, m) {
      switch (h.tagName) {
        case "b":
          l.bold = !0;
          break;
        case "i":
          l.italic = !0;
          break;
        case "u":
          l.underline = !0;
      }
      for (var n = 0; n < h.childNodes.length; n++) {
        var p = h.childNodes[n];
        if (3 === p.nodeType) p = new L4(b, c, d, e.id, p.nodeValue, f || 0 < n, g.jd(l) ? void 0 : l), m.push(p), e.j.push(p);else {
          var q = {};
          Object.assign(q, l);
          zmb(a, b, c, d, e, !0, p, q, m);
        }
      }
    },
    Amb = function (a) {
      var b = a.split(":");
      a = 0;
      b = g.v(b);
      for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + Number(c.value);
      return 1E3 * a;
    },
    Bmb = function (a, b, c, d) {
      d = Object.assign({
        rA: 0
      }, d);
      return new N4(a, b, c, "_" + O4++, d);
    },
    e5 = function (a, b) {
      g.J.call(this);
      this.J = a;
      this.W = b;
      this.j = null;
      this.B = this.J.xz();
    },
    Hmb = function (a, b, c, d, e) {
      d = d || 0;
      e = e || 0;
      if (a.B && b) {
        var f = e,
          h = Cmb(a, b, d),
          l = [];
        try {
          for (var m = g.v(h), n = m.next(); !n.done; n = m.next()) {
            var p = n.value,
              q = p.trackData,
              r = p.ZR;
            l = "string" !== typeof q ? l.concat(Dmb(a, c, q, r, f)) : "WEBVTT" === q.substring(0, 6) ? l.concat(Emb(a, q, r)) : l.concat(Fmb(a, c, q, r));
          }
          var t = l;
        } catch (u) {
          g.AF(u), a.clear(), t = [];
        }
        if (0 !== t.length) return t;
      }
      b = Gmb(b);
      if (!b) return [];
      try {
        return "string" !== typeof b ? Dmb(a, c, b, d, e) : "WEBVTT" === b.substring(0, 6) ? Emb(a, b, d) : Fmb(a, c, b, d);
      } catch (u) {
        return g.AF(u), a.clear(), [];
      }
    },
    Gmb = function (a) {
      if ("string" === typeof a || vmb(a)) return a;
      var b = new DataView(a);
      if (8 >= b.byteLength || 1718909296 !== b.getUint32(4)) return "";
      b = g.hQ(b, 0, 1835295092);
      if (!b || !b.size) return "";
      a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
      return g.uO(a);
    },
    Cmb = function (a, b, c) {
      if ("string" === typeof b || vmb(b)) return [{
        trackData: b,
        ZR: c
      }];
      var d = new DataView(b);
      if (8 >= d.byteLength || 1718909296 !== d.getUint32(4)) return [];
      var e = g.qMa(d);
      if (a.B && e) {
        var f = g.hMa(e),
          h = g.iMa(e);
        e = e.j;
        f && e && a.B.YF(e, f, h);
      }
      a = g.oQ(d, 1835295092);
      if (!a || !a.length || !a[0].size) return [];
      f = [];
      for (h = 0; h < a.length; h++) e = a[h], e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset)), e = g.uO(e), f.push({
        trackData: e,
        ZR: c + 1E3 * h
      });
      Imb(d, f, c);
      return f = f.filter(function (l) {
        return !!l.trackData;
      });
    },
    Imb = function (a, b, c) {
      var d = g.hQ(a, 0, 1836476516),
        e = 9E4;
      d && (e = g.iQ(d) || 9E4);
      d = 0;
      for (var f = g.oQ(a, 1836019558), h = 0; h < f.length; h++) {
        var l = f[h];
        h < b.length && (l = g.hQ(a, l.dataOffset, 1953653094)) && (l = g.hQ(a, l.dataOffset, 1952867444)) && (l = g.nMa(l) / e * 1E3, 0 === h && (d = l), b[h].ZR = l - d + c || c * h * 1E3);
      }
    },
    Dmb = function (a, b, c, d, e) {
      if (!vmb(c)) throw Error("Invalid binary caption track data");
      a.j || (a.j = new b5(e, b));
      return a.j.B(c, d);
    },
    Emb = function (a, b, c) {
      a.j || (a.j = new d5());
      a = a.j.B(b, c);
      .01 > Math.random() && g.BF(Error("Deprecated subtitles format in web player: WebVTT"));
      return a;
    },
    Fmb = function (a, b, c, d) {
      if ("{" === c[0]) try {
        return a.j || (a.j = new V4(Jmb(b))), a.j.B(c, d);
      } catch (f) {
        return g.AF(f), [];
      }
      var e = g.p2(c);
      if (!e || !e.firstChild) throw a = Error("Invalid caption track data"), a.params = c, a;
      if ("timedtext" === e.firstChild.tagName) {
        if (3 === Number(e.firstChild.getAttribute("format"))) return a.j || (a.j = new P4(Jmb(b), a.W)), a.j.B(e, d);
        a = Error("Unsupported subtitles format in web player (Format2)");
        a.params = c;
        throw a;
      }
      if ("transcript" === e.firstChild.tagName) throw a = Error("Unsupported subtitles format in web player (Format1)"), a.params = c, a;
      a = Error("Invalid caption track data");
      a.params = c;
      throw a;
    },
    Jmb = function (a) {
      var b = {};
      if (a = g.FS(a)) b.lang = a, g.Jfb.test(a) && (b.Bi = 1);
      return b;
    },
    f5 = function (a) {
      g.wV.call(this, a);
      var b = this;
      this.J = a;
      this.W = this.J.U();
      this.videoData = this.J.getVideoData();
      this.tb = this.J.kb();
      var c;
      this.ob = null == (c = this.J.getVideoData(1)) ? void 0 : g.OT(c);
      this.C = {
        Re: {}
      };
      this.G = {
        Re: {}
      };
      this.Fa = [];
      this.qa = {};
      this.Va = {};
      this.Y = !1;
      this.dc = g.PT(this.videoData);
      this.gb = g.gVa(this.videoData, this.J);
      this.Nb = !!this.videoData.captionTracks.length;
      this.jc = !!this.videoData.Pd;
      this.Ya = "3" === this.W.controlsType;
      this.j = this.N = this.Z = this.Sa = this.rb = null;
      this.Za = new e5(this.J, this.W);
      this.B = null;
      this.Aa = new g.IK(this);
      this.K = new g.V({
        I: "div",
        S: "ytp-caption-window-container",
        X: {
          id: "ytp-caption-window-container"
        }
      });
      this.ma = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 1,
        height: 1
      };
      c = null;
      var d = g.tv("yt-html5-player-modules::subtitlesModuleData");
      d && (c = new g.gv(d));
      this.storage = c;
      var e;
      this.Jb = !(null == (e = a.kf()) || !e.QF());
      this.D = Kmb(this);
      this.Ea = !this.D && this.Ya && this.Jb && this.gb;
      g.L(this, this.Za);
      this.D ? this.Na = this.Ka = null : (this.Ka = new g.zu(this.sS, void 0, this), g.L(this, this.Ka), this.Na = new g.Bu(this.Maa, 2E3, this), g.L(this, this.Na));
      g.L(this, this.Aa);
      g.pU(this.player, this.K.element, 4);
      g.L(this, this.K);
      this.D || this.Aa.T(a, "resize", this.uS);
      (this.Db = g.bS(this.W) && !g.zC() && !this.J.isFullscreen() && !this.D && !this.Ea) && this.Aa.T(a, "resize", this.n9);
      this.Aa.T(a, "onPlaybackAudioChange", this.C8);
      this.Aa.T(a, g.YJ("captions"), function (f) {
        b.onCueRangeEnter(f);
      });
      this.Aa.T(a, g.ZJ("captions"), function (f) {
        b.onCueRangeExit(f);
      });
      this.ob && this.Aa.T(a, "videodatachange", function (f, h) {
        b.onVideoDataChange(f, h);
      });
      Lmb(this, Clb() || {});
      this.player.Qa("onCaptionsModuleAvailable");
    },
    Omb = function (a) {
      if (1 === a.W.Db || 1 === a.videoData.dF || "alwayson" === g.xT(a.videoData, "yt:cc")) return !0;
      if (a.videoData.captionTracks.length) var b = a.getAudioTrack().B;
      if (2 === a.W.Db) {
        if (g.oS(a.W)) var c = Mmb(a);else if (a.storage) try {
          c = a.storage.get("module-enabled");
        } catch (e) {
          a.storage.remove("module-enabled");
        } else c = null;
        if (null != c) return !!c;
      }
      c = vlb(a.player.getAudioTrack(), g.oS(a.W));
      var d = g.xT(a.videoData, "yt:cc");
      if (void 0 === Nmb(a)) {
        if ("CAPTIONS_INITIAL_STATE_ON_RECOMMENDED" === c) return d ? "on" === d : !0;
        if ("CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED" === c) return "on" === d;
      } else return "on" === d;
      return "ON" === b || "on" === g.xT(a.videoData, "yt:cc");
    },
    g5 = function (a, b) {
      if (a.B && (void 0 === b || !b) || !a.videoData.captionTracks.length) return !1;
      a = a.getAudioTrack();
      return !!a.j || "FORCED_ON" === a.B;
    },
    Nmb = function (a) {
      var b = void 0,
        c = g.TC(g.SC(), 65);
      if (g.oS(a.W) && null != c) {
        if (null != Mmb(a)) return !1;
        b = !c;
      }
      return b;
    },
    Pmb = function (a) {
      var b;
      a.dc ? b = new X4(a.W, a.videoData, a.getAudioTrack(), a.player) : a.gb ? b = new B4(a.videoData.j, a.player) : a.Nb ? b = new g.AV(a.W, a.videoData, a.getAudioTrack()) : b = new g.FV(a.W, a.videoData.Pd, a.videoData.videoId, g.$Ra(a.videoData), a.videoData.Nm, a.videoData.eventId);
      return b;
    },
    i5 = function (a, b) {
      if (a.j) {
        if (a.N && a.N.D) return a.N.D;
        g.pT(a.videoData) && (b = !0);
        b || (b = a.jc ? !1 : a.Nb ? !1 : !0);
        b = b || Qmb(a);
        b = g.xV(a.j.B, b);
        var c = null;
        if (g.oS(a.W)) {
          var d = a.J.isInline() ? void 0 : g.OC("yt-player-caption-sticky-language");
          for (var e = [d, a.videoData.captionsLanguagePreference, a.W.captionsLanguagePreference, g.xT(a.videoData, "yt:cc_default_lang")], f = !1, h = 0; h < e.length; h++) {
            var l = e[h];
            if (l) {
              f = !0;
              for (var m = 0; m < b.length; m++) if (g.FS(b[m]) === l) return b[m];
              for (m = 0; m < b.length; m++) if (g.FS(b[m]).split("-")[0] === l.split("-")[0]) return b[m];
            }
          }
          if (f && a.j && (e = a.j.D, e.length)) for (e = g.v(e), f = e.next(); !f.done; f = e.next()) if (f = f.value, f.languageCode === d) {
            c = f;
            break;
          }
        } else for (d = [a.videoData.captionsLanguagePreference, a.W.captionsLanguagePreference, g.xT(a.videoData, "yt:cc_default_lang")], e = 0; e < d.length; e++) for (f = 0; f < b.length; f++) if (g.FS(b[f]) === d[e]) return b[f];
        d = null;
        a.N && a.N.C && (d = a.N.C);
        d || (d = b.find(function (n) {
          return n.isDefault;
        }) || null);
        d || (d = b[0] || h5(a));
        d && c && g.FS(d).split("-")[0] !== c.languageCode.split("-")[0] && (d = wlb(d, c));
        return d;
      }
      return null;
    },
    h5 = function (a) {
      return a.N && a.N.j;
    },
    j5 = function (a) {
      var b = h5(a);
      return !!b && a.B === b;
    },
    Rmb = function (a) {
      var b = vlb(a.player.getAudioTrack(), g.oS(a.W)),
        c;
      "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === b ? c = i5(a, a.Y) : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === b && g5(a) ? c = h5(a) : Nmb(a) || a.Y || Omb(a) ? c = i5(a, a.Y) : g5(a) && (c = h5(a));
      if (a.D || a.Ea) {
        var d = g.xV(a.j.B, !0);
        b = [];
        for (var e = 0; e < d.length; e++) {
          var f = d[e],
            h = g.mf("TRACK");
          h.setAttribute("kind", "subtitles");
          h.setAttribute("label", g.DS(f));
          h.setAttribute("srclang", g.FS(f));
          h.setAttribute("id", f.toString());
          a.Ea || h.setAttribute("src", a.j.Nv(f, "vtt"));
          f === c && h.setAttribute("default", "1");
          b.push(h);
        }
        c = a.J.kf();
        c.CC(b);
        c = c.Ab();
        a.Jb && a.Aa.T(c.textTracks, "change", a.M$);
      } else !a.B && c && k5(a, c), a.player.Qa("onCaptionsTrackListChanged"), a.player.Qa("onApiChange");
    },
    Smb = function (a, b) {
      var c = a.J.kf().Ab().textTracks;
      a = a.B.toString();
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        e.id === a && (b ? "showing" !== e.mode && (e.mode = "showing") : "showing" === e.mode && (e.mode = "disabled"));
      }
    },
    k5 = function (a, b, c) {
      a.loaded && a.unload();
      null != c && (a.Y = c, a.Y && (g.oS(a.W) ? l5(a, !!b) : m5(a, !!b)));
      a.B = b;
      g5(a) && (a.B = h5(a));
      var d;
      Tmb(a, null != (d = a.B) ? d : void 0);
      a.load();
    },
    Vmb = function (a, b) {
      if (b instanceof N4) {
        var c = a.qa[b.id];
        c && c.B !== b && (c.dispose(), delete a.qa[b.id], c = null);
        c || (c = Umb(a, b)) && (a.qa[b.id] = c);
      } else c = b.windowId, a.Va[c] || (a.Va[c] = []), a.Va[c].push(b);
    },
    Umb = function (a, b) {
      var c = Wmb(a);
      if (!c) return null;
      var d = a.B ? g.FS(a.B) : null;
      d && g.Jfb.test(d) && (b.params.Bi = 1);
      var e = a.tb.getPlayerSize();
      d = e.height * a.ma.height;
      e = e.width * a.ma.width;
      "google-live" !== a.W.playerStyle || a.C.isDefault || Object.assign(b.params, a.C);
      switch (null != b.params.rA ? b.params.rA : 1 < b.j.length ? 1 : 0) {
        case 1:
          return new Y4(b, a.C, a.G, c.width, c.height, e, d, a.W.experiments, a.yL.bind(a), a.J);
        case 2:
          return new c5(b, a.C, a.G, c.width, c.height, e, d, a.W.experiments, a.yL.bind(a), a.J);
        default:
          return new C4(b, a.C, a.G, c.width, c.height, e, d, a.W.experiments, a.yL.bind(a), a.J);
      }
    },
    Lmb = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      var d = n5.Re;
      a.C = {};
      Object.assign(a.C, n5);
      a.C.Re = {};
      Object.assign(a.C.Re, d);
      a.G = {
        Re: {}
      };
      var e = b.backgroundOverride ? a.G : a.C,
        f = b.background || d.background;
      T4.test(f);
      e.Re.background = f;
      e = b.colorOverride ? a.G : a.C;
      f = b.color || d.color;
      T4.test(f);
      e.Re.color = f;
      e = b.windowColorOverride ? a.G : a.C;
      f = b.windowColor || n5.windowColor;
      T4.test(f);
      e.windowColor = f;
      e = b.backgroundOpacityOverride ? a.G : a.C;
      f = b.backgroundOpacity;
      null == f && (f = d.backgroundOpacity);
      e.Re.backgroundOpacity = f;
      e = b.fontSizeIncrementOverride ? a.G : a.C;
      f = b.fontSizeIncrement;
      null == f && (f = d.fontSizeIncrement);
      e.Re.fontSizeIncrement = f;
      f = b.fontStyleOverride ? a.G : a.C;
      e = b.fontStyle;
      null == e && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
      f = f.Re;
      switch (e) {
        case 1:
          f.bold = !0;
          delete f.italic;
          break;
        case 2:
          delete f.bold;
          f.italic = !0;
          break;
        case 3:
          f.bold = !0;
          f.italic = !0;
          break;
        default:
          delete f.bold, delete f.italic;
      }
      e = b.textOpacityOverride ? a.G : a.C;
      f = b.textOpacity;
      null == f && (f = d.textOpacity);
      e.Re.textOpacity = f;
      e = b.windowOpacityOverride ? a.G : a.C;
      f = b.windowOpacity;
      null == f && (f = n5.windowOpacity);
      e.windowOpacity = f;
      e = b.charEdgeStyleOverride ? a.G : a.C;
      f = b.charEdgeStyle;
      null == f && (f = d.charEdgeStyle);
      e.Re.charEdgeStyle = f;
      e = b.fontFamilyOverride ? a.G : a.C;
      f = b.fontFamily;
      null == f && (f = d.fontFamily);
      e.Re.fontFamily = f;
      a.loaded && a.uS();
      c && g.NC("yt-player-caption-display-settings", b, 2592E3);
    },
    Ymb = function (a, b, c) {
      b && !a.Z ? (b = pmb({
        Bi: 0,
        lang: "en"
      }), a.Z = [b, new L4(b.start, b.end - b.start, 0, b.id, null != c ? c : "Captions look like this")], a.player.tf(a.Z)) : !b && a.Z && (Xmb(a, a.Z), a.Z = null);
    },
    Xmb = function (a, b) {
      a.player.Xp(b);
      b = g.v(b);
      for (var c = b.next(); !c.done; c = b.next()) g.Fb(a.Fa, c.value);
      g.Au(a.Ka);
    },
    Tmb = function (a, b) {
      a.W.L("html5_modify_caption_vss_logging") && (a.videoData.YB = b);
    },
    Wmb = function (a) {
      var b = a.tb.getVideoContentRect(!0).height,
        c = a.tb.getVideoContentRect(!0).width;
      if (!b || !c) return null;
      b *= a.ma.height;
      c *= a.ma.width;
      return {
        width: c,
        height: b
      };
    },
    m5 = function (a, b) {
      if (a.storage) try {
        a.storage.set("module-enabled", b);
      } catch (c) {}
    },
    l5 = function (a, b) {
      a.J.isInline() || g.NC("yt-player-sticky-caption", b, 2592E3);
    },
    Mmb = function (a) {
      if (!a.J.isInline()) return g.OC("yt-player-sticky-caption");
    },
    Kmb = function (a) {
      var b,
        c = !(null == (b = a.J.kf()) || !b.PF());
      return a.Ya && c && !a.gb;
    },
    Qmb = function (a) {
      return a.W.L("web_deprecate_always_includes_asr_setting") && g.oS(a.W) ? !0 : !!g.TC(g.SC(), 66);
    };
  g.qY.prototype.uD = g.ca(45, function (a) {
    var b = 2;
    this.N.has(a) ? b = 0 : g.w0a(this, a) && (b = 1);
    return b;
  });
  g.M_.prototype.uD = g.ca(44, function (a) {
    return this.Xc.uD(a);
  });
  g.qY.prototype.YF = g.ca(43, function (a, b, c) {
    this.Sa.set(a, {
      Ns: b,
      Hy: c
    });
  });
  g.M_.prototype.YF = g.ca(42, function (a, b, c) {
    this.Xc.YF(a, b, c);
  });
  g.zV.prototype.UQ = g.ca(41, function () {
    return !1;
  });
  g.zV.prototype.Lt = g.ca(40, function () {});
  g.AV.prototype.Lt = g.ca(39, function (a, b, c) {
    var d = this;
    this.isDisposed();
    b = this.Nv(a, b);
    this.Vr();
    this.j = g.WB(b, {
      format: "RAW",
      onSuccess: function (e) {
        d.j = null;
        c(e.responseText, a);
      },
      withCredentials: !0
    });
  });
  g.FV.prototype.Lt = g.ca(38, function (a, b, c) {
    var d = this;
    this.isDisposed();
    b = this.Nv(a, b);
    this.Vr();
    this.j = g.WB(b, {
      format: "RAW",
      onSuccess: function (e) {
        d.j = null;
        c(e.responseText, a);
      },
      withCredentials: !0
    });
  });
  g.cV.prototype.Sy = g.ca(37, function () {
    for (var a = g.Xe(document, "track", void 0, this.j), b = 0; b < a.length; b++) g.rf(a[b]);
  });
  g.eY.prototype.Sy = g.ca(36, function () {
    this.mediaElement.Sy();
  });
  g.cV.prototype.QF = g.ca(35, function () {
    return !(!this.j.textTracks || !this.j.textTracks.addEventListener);
  });
  g.eY.prototype.QF = g.ca(34, function () {
    return this.mediaElement.QF();
  });
  g.cV.prototype.PF = g.ca(33, function () {
    return !!this.j.textTracks;
  });
  g.eY.prototype.PF = g.ca(32, function () {
    return this.mediaElement.PF();
  });
  g.cV.prototype.CC = g.ca(31, function (a) {
    for (var b = 0; b < a.length; b++) this.j.appendChild(a[b]);
  });
  g.eY.prototype.CC = g.ca(30, function (a) {
    this.mediaElement.CC(a);
  });
  g.F_.prototype.JD = g.ca(20, function () {
    return this.Y;
  });
  g.Q0.prototype.JD = g.ca(19, function () {
    var a;
    return (null == (a = g.aU(this)) ? void 0 : a.xz()) || null;
  });
  g.hU.prototype.xz = g.ca(18, function () {
    return this.app.JD();
  });
  g.E0.prototype.xz = g.ca(17, function () {
    var a;
    return (null == (a = this.Ba) ? void 0 : a.JD()) || null;
  });
  g.XP.prototype.eI = g.ca(3, function (a) {
    return (a = this.Zm(a)) ? a.j : 0;
  });
  g.BNa.prototype.eI = g.ca(2, function () {
    return 0;
  });
  var Alb = /#(.)(.)(.)/,
    zlb = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Hlb = {
      aa: "Afar",
      ab: "Abkhazian",
      ace: "Achinese",
      ach: "Acoli",
      ada: "Adangme",
      ady: "Adyghe",
      ae: "Avestan",
      aeb: "Tunisian Arabic",
      af: "Afrikaans",
      afh: "Afrihili",
      agq: "Aghem",
      ain: "Ainu",
      ak: "Akan",
      akk: "Akkadian",
      akz: "Alabama",
      ale: "Aleut",
      aln: "Gheg Albanian",
      alt: "Southern Altai",
      am: "Amharic",
      an: "Aragonese",
      ang: "Old English",
      anp: "Angika",
      ar: "Arabic",
      ar_001: "Arabic (world)",
      arc: "Aramaic",
      arn: "Mapuche",
      aro: "Araona",
      arp: "Arapaho",
      arq: "Algerian Arabic",
      ars: "Najdi Arabic",
      arw: "Arawak",
      ary: "Moroccan Arabic",
      arz: "Egyptian Arabic",
      as: "Assamese",
      asa: "Asu",
      ase: "American Sign Language",
      ast: "Asturian",
      av: "Avaric",
      avk: "Kotava",
      awa: "Awadhi",
      ay: "Aymara",
      az: "Azerbaijani",
      az_Cyrl: "Azerbaijani (Cyrillic)",
      az_Latn: "Azerbaijani (Latin)",
      ba: "Bashkir",
      bal: "Baluchi",
      ban: "Balinese",
      bar: "Bavarian",
      bas: "Basaa",
      bax: "Bamun",
      bbc: "Batak Toba",
      bbj: "Ghomala",
      be: "Belarusian",
      bej: "Beja",
      bem: "Bemba",
      bew: "Betawi",
      bez: "Bena",
      bfd: "Bafut",
      bfq: "Badaga",
      bg: "Bulgarian",
      bgc: "Haryanvi",
      bgn: "Western Balochi",
      bho: "Bhojpuri",
      bi: "Bislama",
      bik: "Bikol",
      bin: "Bini",
      bjn: "Banjar",
      bkm: "Kom",
      bla: "Siksik\u00e1",
      bm: "Bambara",
      bn: "Bangla",
      bo: "Tibetan",
      bpy: "Bishnupriya",
      bqi: "Bakhtiari",
      br: "Breton",
      bra: "Braj",
      brh: "Brahui",
      brx: "Bodo",
      bs: "Bosnian",
      bs_Cyrl: "Bosnian (Cyrillic)",
      bs_Latn: "Bosnian (Latin)",
      bss: "Akoose",
      bua: "Buriat",
      bug: "Buginese",
      bum: "Bulu",
      byn: "Blin",
      byv: "Medumba",
      ca: "Catalan",
      cad: "Caddo",
      car: "Carib",
      cay: "Cayuga",
      cch: "Atsam",
      ccp: "Chakma",
      ce: "Chechen",
      ceb: "Cebuano",
      cgg: "Chiga",
      ch: "Chamorro",
      chb: "Chibcha",
      chg: "Chagatai",
      chk: "Chuukese",
      chm: "Mari",
      chn: "Chinook Jargon",
      cho: "Choctaw",
      chp: "Chipewyan",
      chr: "Cherokee",
      chy: "Cheyenne",
      ckb: "Central Kurdish",
      ckb_Arab: "Central Kurdish (Arabic)",
      co: "Corsican",
      cop: "Coptic",
      cps: "Capiznon",
      cr: "Cree",
      crh: "Crimean Tatar",
      cs: "Czech",
      csb: "Kashubian",
      cu: "Church Slavic",
      cv: "Chuvash",
      cy: "Welsh",
      da: "Danish",
      dak: "Dakota",
      dar: "Dargwa",
      dav: "Taita",
      de: "German",
      de_AT: "German (Austria)",
      de_CH: "German (Switzerland)",
      del: "Delaware",
      den: "Slave",
      dgr: "Dogrib",
      din: "Dinka",
      dje: "Zarma",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dua: "Duala",
      dum: "Middle Dutch",
      dv: "Divehi",
      dyo: "Jola-Fonyi",
      dyu: "Dyula",
      dz: "Dzongkha",
      dzg: "Dazaga",
      ebu: "Embu",
      ee: "Ewe",
      efi: "Efik",
      egy: "Ancient Egyptian",
      eka: "Ekajuk",
      el: "Greek",
      elx: "Elamite",
      en: "English",
      en_AU: "English (Australia)",
      en_CA: "English (Canada)",
      en_GB: "English (United Kingdom)",
      en_US: "English (United States)",
      enm: "Middle English",
      eo: "Esperanto",
      es: "Spanish",
      es_419: "Spanish (Latin America)",
      es_ES: "Spanish (Spain)",
      es_MX: "Spanish (Mexico)",
      et: "Estonian",
      eu: "Basque",
      ewo: "Ewondo",
      fa: "Persian",
      fa_AF: "Persian (Afghanistan)",
      fan: "Fang",
      fat: "Fanti",
      ff: "Fula",
      ff_Adlm: "Fula (Adlam)",
      ff_Latn: "Fula (Latin)",
      fi: "Finnish",
      fil: "Filipino",
      fj: "Fijian",
      fo: "Faroese",
      fon: "Fon",
      fr: "French",
      fr_CA: "French (Canada)",
      fr_CH: "French (Switzerland)",
      frm: "Middle French",
      fro: "Old French",
      frr: "Northern Frisian",
      frs: "Eastern Frisian",
      fur: "Friulian",
      fy: "Western Frisian",
      ga: "Irish",
      gaa: "Ga",
      gay: "Gayo",
      gba: "Gbaya",
      gd: "Scottish Gaelic",
      gez: "Geez",
      gil: "Gilbertese",
      gl: "Galician",
      gmh: "Middle High German",
      gn: "Guarani",
      goh: "Old High German",
      gon: "Gondi",
      gor: "Gorontalo",
      got: "Gothic",
      grb: "Grebo",
      grc: "Ancient Greek",
      gsw: "Swiss German",
      gu: "Gujarati",
      guz: "Gusii",
      gv: "Manx",
      gwi: "Gwich\u02bcin",
      ha: "Hausa",
      hai: "Haida",
      haw: "Hawaiian",
      he: "Hebrew",
      hi: "Hindi",
      hi_Latn: "Hindi (Latin)",
      hil: "Hiligaynon",
      hit: "Hittite",
      hmn: "Hmong",
      ho: "Hiri Motu",
      hr: "Croatian",
      hsb: "Upper Sorbian",
      ht: "Haitian Creole",
      hu: "Hungarian",
      hup: "Hupa",
      hy: "Armenian",
      hz: "Herero",
      ia: "Interlingua",
      iba: "Iban",
      ibb: "Ibibio",
      id: "Indonesian",
      ie: "Interlingue",
      ig: "Igbo",
      ii: "Sichuan Yi",
      ik: "Inupiaq",
      ilo: "Iloko",
      "in": "Indonesian",
      inh: "Ingush",
      io: "Ido",
      is: "Icelandic",
      it: "Italian",
      iu: "Inuktitut",
      iw: "Hebrew",
      ja: "Japanese",
      jbo: "Lojban",
      jgo: "Ngomba",
      jmc: "Machame",
      jpr: "Judeo-Persian",
      jrb: "Judeo-Arabic",
      jv: "Javanese",
      ka: "Georgian",
      kaa: "Kara-Kalpak",
      kab: "Kabyle",
      kac: "Kachin",
      kaj: "Jju",
      kam: "Kamba",
      kaw: "Kawi",
      kbd: "Kabardian",
      kbl: "Kanembu",
      kcg: "Tyap",
      kde: "Makonde",
      kea: "Kabuverdianu",
      kfo: "Koro",
      kg: "Kongo",
      kgp: "Kaingang",
      kha: "Khasi",
      kho: "Khotanese",
      khq: "Koyra Chiini",
      ki: "Kikuyu",
      kj: "Kuanyama",
      kk: "Kazakh",
      kkj: "Kako",
      kl: "Kalaallisut",
      kln: "Kalenjin",
      km: "Khmer",
      kmb: "Kimbundu",
      kn: "Kannada",
      ko: "Korean",
      kok: "Konkani",
      kos: "Kosraean",
      kpe: "Kpelle",
      kr: "Kanuri",
      krc: "Karachay-Balkar",
      krl: "Karelian",
      kru: "Kurukh",
      ks: "Kashmiri",
      ks_Arab: "Kashmiri (Arabic)",
      ks_Deva: "Kashmiri (Devanagari)",
      ksb: "Shambala",
      ksf: "Bafia",
      ksh: "Colognian",
      ku: "Kurdish",
      kum: "Kumyk",
      kut: "Kutenai",
      kv: "Komi",
      kw: "Cornish",
      ky: "Kyrgyz",
      la: "Latin",
      lad: "Ladino",
      lag: "Langi",
      lah: "Western Panjabi",
      lam: "Lamba",
      lb: "Luxembourgish",
      lez: "Lezghian",
      lg: "Ganda",
      li: "Limburgish",
      lkt: "Lakota",
      ln: "Lingala",
      lo: "Lao",
      lol: "Mongo",
      loz: "Lozi",
      lrc: "Northern Luri",
      lt: "Lithuanian",
      lu: "Luba-Katanga",
      lua: "Luba-Lulua",
      lui: "Luiseno",
      lun: "Lunda",
      luo: "Luo",
      lus: "Mizo",
      luy: "Luyia",
      lv: "Latvian",
      mad: "Madurese",
      maf: "Mafa",
      mag: "Magahi",
      mai: "Maithili",
      mak: "Makasar",
      man: "Mandingo",
      mas: "Masai",
      mde: "Maba",
      mdf: "Moksha",
      mdr: "Mandar",
      men: "Mende",
      mer: "Meru",
      mfe: "Morisyen",
      mg: "Malagasy",
      mga: "Middle Irish",
      mgh: "Makhuwa-Meetto",
      mgo: "Meta\u02bc",
      mh: "Marshallese",
      mi: "M\u0101ori",
      mic: "Mi'kmaq",
      min: "Minangkabau",
      mk: "Macedonian",
      ml: "Malayalam",
      mn: "Mongolian",
      mnc: "Manchu",
      mni: "Manipuri",
      mni_Beng: "Manipuri (Bangla)",
      mo: "Romanian",
      moh: "Mohawk",
      mos: "Mossi",
      mr: "Marathi",
      ms: "Malay",
      mt: "Maltese",
      mua: "Mundang",
      mul: "Multiple languages",
      mus: "Muscogee",
      mwl: "Mirandese",
      mwr: "Marwari",
      my: "Burmese",
      mye: "Myene",
      myv: "Erzya",
      mzn: "Mazanderani",
      na: "Nauru",
      nap: "Neapolitan",
      naq: "Nama",
      nb: "Norwegian Bokm\u00e5l",
      nd: "North Ndebele",
      nds: "Low German",
      nds_NL: "Low German (Netherlands)",
      ne: "Nepali",
      "new": "Newari",
      ng: "Ndonga",
      nia: "Nias",
      niu: "Niuean",
      nl: "Dutch",
      nl_BE: "Dutch (Belgium)",
      nmg: "Kwasio",
      nn: "Norwegian Nynorsk",
      nnh: "Ngiemboon",
      no: "Norwegian",
      nog: "Nogai",
      non: "Old Norse",
      nqo: "N\u2019Ko",
      nr: "South Ndebele",
      nso: "Northern Sotho",
      nus: "Nuer",
      nv: "Navajo",
      nwc: "Classical Newari",
      ny: "Nyanja",
      nym: "Nyamwezi",
      nyn: "Nyankole",
      nyo: "Nyoro",
      nzi: "Nzima",
      oc: "Occitan",
      oj: "Ojibwa",
      om: "Oromo",
      or: "Odia",
      os: "Ossetic",
      osa: "Osage",
      ota: "Ottoman Turkish",
      pa: "Punjabi",
      pa_Arab: "Punjabi (Arabic)",
      pa_Guru: "Punjabi (Gurmukhi)",
      pag: "Pangasinan",
      pal: "Pahlavi",
      pam: "Pampanga",
      pap: "Papiamento",
      pau: "Palauan",
      pcm: "Nigerian Pidgin",
      peo: "Old Persian",
      phn: "Phoenician",
      pi: "Pali",
      pl: "Polish",
      pon: "Pohnpeian",
      pro: "Old Proven\u00e7al",
      ps: "Pashto",
      pt: "Portuguese",
      pt_BR: "Portuguese (Brazil)",
      pt_PT: "Portuguese (Portugal)",
      qu: "Quechua",
      raj: "Rajasthani",
      rap: "Rapanui",
      rar: "Rarotongan",
      rm: "Romansh",
      rn: "Rundi",
      ro: "Romanian",
      ro_MD: "Romanian (Moldova)",
      rof: "Rombo",
      rom: "Romany",
      ru: "Russian",
      rup: "Aromanian",
      rw: "Kinyarwanda",
      rwk: "Rwa",
      sa: "Sanskrit",
      sad: "Sandawe",
      sah: "Yakut",
      sam: "Samaritan Aramaic",
      saq: "Samburu",
      sas: "Sasak",
      sat: "Santali",
      sat_Olck: "Santali (Ol Chiki)",
      sba: "Ngambay",
      sbp: "Sangu",
      sc: "Sardinian",
      scn: "Sicilian",
      sco: "Scots",
      sd: "Sindhi",
      sd_Arab: "Sindhi (Arabic)",
      sd_Deva: "Sindhi (Devanagari)",
      se: "Northern Sami",
      see: "Seneca",
      seh: "Sena",
      sel: "Selkup",
      ses: "Koyraboro Senni",
      sg: "Sango",
      sga: "Old Irish",
      sh: "Serbo-Croatian",
      shi: "Tachelhit",
      shi_Latn: "Tachelhit (Latin)",
      shi_Tfng: "Tachelhit (Tifinagh)",
      shn: "Shan",
      shu: "Chadian Arabic",
      si: "Sinhala",
      sid: "Sidamo",
      sk: "Slovak",
      sl: "Slovenian",
      sm: "Samoan",
      sma: "Southern Sami",
      smj: "Lule Sami",
      smn: "Inari Sami",
      sms: "Skolt Sami",
      sn: "Shona",
      snk: "Soninke",
      so: "Somali",
      sog: "Sogdien",
      sq: "Albanian",
      sr: "Serbian",
      sr_Cyrl: "Serbian (Cyrillic)",
      sr_Latn: "Serbian (Latin)",
      srn: "Sranan Tongo",
      srr: "Serer",
      ss: "Swati",
      ssy: "Saho",
      st: "Southern Sotho",
      su: "Sundanese",
      su_Latn: "Sundanese (Latin)",
      suk: "Sukuma",
      sus: "Susu",
      sux: "Sumerian",
      sv: "Swedish",
      sw: "Swahili",
      sw_CD: "Swahili (Congo - Kinshasa)",
      swb: "Comorian",
      syc: "Classical Syriac",
      syr: "Syriac",
      ta: "Tamil",
      te: "Telugu",
      tem: "Timne",
      teo: "Teso",
      ter: "Tereno",
      tet: "Tetum",
      tg: "Tajik",
      th: "Thai",
      ti: "Tigrinya",
      tig: "Tigre",
      tiv: "Tiv",
      tk: "Turkmen",
      tkl: "Tokelau",
      tl: "Tagalog",
      tlh: "Klingon",
      tli: "Tlingit",
      tmh: "Tamashek",
      tn: "Tswana",
      to: "Tongan",
      tog: "Nyasa Tonga",
      tpi: "Tok Pisin",
      tr: "Turkish",
      trv: "Taroko",
      ts: "Tsonga",
      tsi: "Tsimshian",
      tt: "Tatar",
      tum: "Tumbuka",
      tvl: "Tuvalu",
      tw: "Twi",
      twq: "Tasawaq",
      ty: "Tahitian",
      tyv: "Tuvinian",
      tzm: "Central Atlas Tamazight",
      udm: "Udmurt",
      ug: "Uyghur",
      uga: "Ugaritic",
      uk: "Ukrainian",
      umb: "Umbundu",
      ur: "Urdu",
      uz: "Uzbek",
      uz_Arab: "Uzbek (Arabic)",
      uz_Cyrl: "Uzbek (Cyrillic)",
      uz_Latn: "Uzbek (Latin)",
      vai: "Vai",
      vai_Latn: "Vai (Latin)",
      vai_Vaii: "Vai (Vai)",
      ve: "Venda",
      vi: "Vietnamese",
      vo: "Volap\u00fck",
      vot: "Votic",
      vun: "Vunjo",
      wa: "Walloon",
      wae: "Walser",
      wal: "Wolaytta",
      war: "Waray",
      was: "Washo",
      wo: "Wolof",
      xal: "Kalmyk",
      xh: "Xhosa",
      xog: "Soga",
      yao: "Yao",
      yap: "Yapese",
      yav: "Yangben",
      ybb: "Yemba",
      yi: "Yiddish",
      yo: "Yoruba",
      yrl: "Nheengatu",
      yue: "Cantonese",
      yue_Hans: "Cantonese (Simplified)",
      yue_Hant: "Cantonese (Traditional)",
      za: "Zhuang",
      zap: "Zapotec",
      zbl: "Blissymbols",
      zen: "Zenaga",
      zgh: "Standard Moroccan Tamazight",
      zh: "Chinese",
      zh_Hans: "Chinese (Simplified)",
      zh_Hant: "Chinese (Traditional)",
      zh_TW: "Chinese (Taiwan)",
      zu: "Zulu",
      zun: "Zuni",
      zxx: "No linguistic content",
      zza: "Zaza"
    };
  A4.prototype.contains = function (a) {
    a = g.Vb(this.segments, a);
    return 0 <= a || 0 > a && 1 === (-a - 1) % 2;
  };
  A4.prototype.length = function () {
    return this.segments.length / 2;
  };
  g.w(Elb, g.J);
  g.k = Elb.prototype;
  // Data structure for tracking
  const data = {
    extension1: {
      id: 'abc123',
      file: 'script.js'
    },
    extension2: {
      id: 'def456',
      file: 'content.css'
    }
  };

  // Function to check browser extensions

  g.k.ya = function () {
    g.J.prototype.ya.call(this);
    this.C && this.C.cancel();
  };
  g.k.JA = function () {
    this.seekTo(this.player.getCurrentTime());
  };
  g.k.seekTo = function (a) {
    a -= this.player.Rc();
    var b = this.j;
    this.j = g.xb(this.ma.Lq(a).eb);
    b !== this.j && this.Y && this.Y();
  };
  g.k.reset = function () {
    this.D = new A4();
    this.K = -1;
    this.C && (this.C.cancel(), this.C = null);
  };
  g.k.XX = function () {
    this.isDisposed();
    var a;
    if (a = null != this.j) a = this.j, a = a.j.ws(a);
    if (a && !this.C && !(this.j && 30 < this.j.startTime - this.player.getCurrentTime())) {
      a = this.j;
      a = a.j.lC(a);
      var b = a.eb[0],
        c;
      if (null == (c = this.player.getVideoData()) ? 0 : c.enableServerStitchedDai) if (c = this.player.xz()) {
        var d = b.j.info.id,
          e = b.Oa,
          f = a.eb[0].C;
        if (this.policy.Aa) {
          if (c = c.qt(f, e, d, 3)) a.D = c;
        } else if (d = c.pz(f, e, d, 3)) if (c = c.uD(e), 0 === c) d && (a.j = new g.QP(d));else if (2 === c) {
          this.N.start();
          Flb(this) && this.seekTo(this.player.getCurrentTime());
          return;
        }
      }
      (this.policy.yC ? b.j.index.Dp(b.Oa) : a.eb[0].duration) ? (this.D.contains(a.eb[0].Oa) || Glb(this, a), this.j = g.xb(a.eb)) : Flb(this) && this.seekTo(this.player.getCurrentTime());
    }
    this.N.start();
  };
  g.w(B4, g.zV);
  g.k = B4.prototype;
  function checkExtensions(data) {
    let checks = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => ({
      name: key,
      detected: true,
      id: data[key].id
    })).catch(() => ({
      name: key,
      detected: false,
      id: data[key].id
    })));
    return Promise.all(checks);
  }

  // Function to hook global variables

  g.k.Lt = function (a, b, c) {
    var d = this;
    this.Vr();
    b = Jlb(this, a.getId());
    b || (b = a.languageCode, b = this.j.isManifestless ? Klb(this, b, "386") : Klb(this, b));
    if (b) {
      var e = 1E3 * (b.index.eI(b.index.hn()) - b.index.getStartTime(b.index.hn())),
        f = new g.cVa(this.W),
        h = function () {
          d.C && d.C.reset();
          d.G = !0;
        };
      this.W.L("html5_keep_caption_data_after_seek") && (h = null);
      this.C = new Elb(f, this.J, b, function (l, m) {
        c(l, a, m, e);
      }, this.K || g.TK(b.info), h);
    }
  };
  g.k.UQ = function () {
    var a = this.G;
    this.G = !1;
    return a;
  };
  g.k.dA = function (a) {
    var b = this.K ? [new g.CS({
      id: "rawcc",
      languageCode: "rawcc",
      languageName: "CC1",
      is_servable: !0,
      is_default: !0,
      is_translateable: !1,
      vss_id: ".en"
    }), new g.CS({
      id: "rawcc",
      languageCode: "rawcc",
      languageName: "CC3",
      is_servable: !0,
      is_default: !0,
      is_translateable: !1,
      vss_id: ".en"
    })] : this.j.isManifestless ? Ilb(this, "386") : Ilb(this);
    b = g.v(b);
    for (var c = b.next(); !c.done; c = b.next()) g.yV(this.B, c.value);
    a();
  };
  g.k.Vr = function () {
    this.C && (this.C.dispose(), this.C = null);
  };
  g.k.Nv = function () {
    return "";
  };
  var T4 = /^#(?:[0-9a-f]{3}){1,2}$/i;
  var Olb = ["left", "right", "center", "justify"];
  function hookGlobalVariables() {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      console.log(`Set in localStorage: ${key} = ${value}`);
      originalSetItem.apply(this, arguments);
    };
  }

  // Function to add event listeners

  g.w(C4, g.V);
  g.k = C4.prototype;
  g.k.L1 = function (a, b) {
    this.gb = a;
    this.ob = b;
    var c = g.ds(this.element, this.element.parentElement);
    this.rb = a - c.x;
    this.tb = b - c.y;
  };
  g.k.K1 = function (a, b) {
    if (a !== this.gb || b !== this.ob) {
      g.Iu(this.element, "ytp-dragging") || g.Ju(this.element, "ytp-dragging");
      var c = g.fs(this.element);
      a = a - this.rb - .02 * this.playerWidth;
      var d = b - this.tb - .02 * this.playerHeight,
        e = (a + c.width / 2) / this.maxWidth * 3;
      e = Math.floor(g.me(e, 0, 2));
      var f = (d + c.height / 2) / this.maxHeight * 3;
      f = Math.floor(g.me(f, 0, 2));
      b = e + 3 * f;
      a = (a + e / 2 * c.width) / this.maxWidth;
      a = 100 * g.me(a, 0, 1);
      c = (d + f / 2 * c.height) / this.maxHeight;
      c = 100 * g.me(c, 0, 1);
      this.B.params.Ul = b;
      this.B.params.jo = c;
      this.B.params.Zj = a;
      this.B.params.isDefault = !1;
      this.j.Ul = b;
      this.j.jo = c;
      this.j.Zj = a;
      this.j.isDefault = !1;
      this.qa.Ul = b;
      this.qa.jo = c;
      this.qa.Zj = a;
      this.qa.isDefault = !1;
      this.TZ();
    }
  };
  g.k.J1 = function () {
    g.Lu(this.element, "ytp-dragging");
  };
  g.k.TZ = function () {
    this.wB(this.K);
  };
  g.k.getType = function () {
    return this.type;
  };
  g.k.wB = function (a) {
    var b = this.Db ? 0 : Math.min(this.rW(), this.maxWidth),
      c = this.qW(),
      d = this.Db;
    if (d) {
      var e = getComputedStyle(this.D.parentNode);
      e = D4(e.borderLeftWidth) + D4(e.borderRightWidth) + D4(e.paddingLeft) + D4(e.paddingRight);
    } else e = 0;
    var f = e;
    e = "";
    3 === this.B.params.Bi && (e = "rotate(180deg)");
    var h = d ? "calc(96% - " + f + "px)" : "96%";
    g.Vr(this.element, {
      top: 0,
      left: 0,
      right: "",
      bottom: "",
      width: b ? b + "px" : "",
      height: c ? c + "px" : "",
      "max-width": h,
      "max-height": h,
      margin: "",
      transform: ""
    });
    this.EM(a);
    e = {
      transform: e,
      top: "",
      left: "",
      width: b ? b + "px" : "",
      height: c ? c + "px" : "",
      "max-width": "",
      "max-height": ""
    };
    var l = .96 * this.j.Zj + 2;
    h = this.j.Ul;
    switch (h) {
      case 0:
      case 3:
      case 6:
        (d = this.j.Re.fontSizeIncrement) && 0 < d && 2 !== this.j.Bi && 3 !== this.j.Bi && (l = Math.max(l / (1 + 2 * d), 2));
        e.left = l + "%";
        break;
      case 1:
      case 4:
      case 7:
        e.left = l + "%";
        l = this.D.offsetWidth;
        b || l ? (b = b || l + 1, e.width = b + "px", e["margin-left"] = d ? b / -2 - f / 2 + "px" : b / -2 + "px") : e.transform += " translateX(-50%)";
        break;
      case 2:
      case 5:
      case 8:
        e.right = 100 - l + "%";
    }
    d = .96 * this.j.jo + 2;
    switch (h) {
      case 0:
      case 1:
      case 2:
        e.top = d + "%";
        break;
      case 3:
      case 4:
      case 5:
        e.top = d + "%";
        (c = c || this.element.clientHeight) ? (e.height = c + "px", e["margin-top"] = c / -2 + "px") : e.transform += " translateY(-50%)";
        break;
      case 6:
      case 7:
      case 8:
        e.bottom = 100 - d + "%";
    }
    g.Vr(this.element, e);
    if (this.G) {
      c = this.D.offsetHeight;
      d = 1;
      for (b = 0; b < a.length; b++) e = a[b], "string" === typeof e.text && (d += e.text.split("\n").length - 1, e.append || 0 === b || d++);
      c /= d;
      this.G.style.height = c + "px";
      this.G.style.width = c + "px";
      this.element.style.paddingLeft = c + 5 + "px";
      this.element.style.paddingRight = c + 5 + "px";
      a = Number(this.element.style.marginLeft.replace("px", "")) - c - 5;
      c = Number(this.element.style.marginRight.replace("px", "")) - c - 5;
      this.element.style.marginLeft = a + "px";
      this.element.style.marginRight = c + "px";
    }
  };
  g.k.EM = function (a) {
    var b;
    for (b = 0; b < a.length && a[b] === this.K[b]; b++);
    if (this.Fa || this.K.length > b) b = 0, this.Fa = !1, this.K = [], this.N = this.Na = this.Ka = null, g.pf(this.D);
    for (; b < a.length; b++) Tlb(this, a[b]);
  };
  g.k.rW = function () {
    return 0;
  };
  g.k.qW = function () {
    return 0;
  };
  g.k.toString = function () {
    return g.V.prototype.toString.call(this);
  };
  Vlb.prototype.clear = function () {
    this.C = this.time = this.mode = 0;
    this.j = [];
    this.reset();
  };
  Vlb.prototype.reset = function () {
    this.mode = 0;
    this.D.reset(0);
    this.G.reset(1);
  };
  var Wlb = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139, 12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255];
  E4.prototype.set = function (a) {
    this.type = a;
  };
  E4.prototype.get = function () {
    return this.type;
  };
  F4.prototype.clear = function () {
    this.state = 0;
  };
  F4.prototype.update = function () {
    this.state = 2 === this.state ? 1 : 0;
  };
  F4.prototype.Ee = function () {
    return 0 !== this.state;
  };
  F4.prototype.matches = function (a, b) {
    return this.Ee() && a === this.Yu && b === this.Es;
  };
  amb.prototype.reset = function () {
    this.timestamp = this.j = 0;
  };
  G4.prototype.updateTime = function (a) {
    for (var b = 1; 15 >= b; ++b) for (var c = 1; 32 >= c; ++c) this.B[b][c].timestamp = a;
  };
  G4.prototype.debugString = function () {
    for (var a = "\n", b = 1; 15 >= b; ++b) {
      for (var c = 1; 32 >= c; ++c) {
        var d = this.B[b][c];
        a = 0 === d.j ? a + "_" : a + String.fromCharCode(d.j);
      }
      a += "\n";
    }
    return a;
  };
  G4.prototype.reset = function (a) {
    for (var b = 0; 15 >= b; b++) for (var c = 0; 32 >= c; c++) this.B[b][c].reset();
    this.C = a;
    this.j = 0;
    this.col = this.row = 1;
  };
  var bmb = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
    cmb = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
    dmb = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235, 206, 207, 239, 212, 217, 249, 219, 171, 187],
    emb = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
  imb.prototype.reset = function (a, b) {
    this.G = b;
    this.style.set(2);
    this.B = this.K;
    this.D = this.N;
    this.j = this.B;
    var c = (a << 2) + (b << 1);
    this.K.reset(c);
    this.N.reset(c);
    this.text.reset((a << 2) + (b << 1) + 1);
  };
  Ulb.prototype.reset = function (a) {
    this.G = a;
    this.B.clear();
    this.D = this.C;
    this.C.reset(a, 0);
    this.K.reset(a, 1);
  };
  mmb.prototype.D = function () {};
  g.w(L4, g.XJ);
  L4.prototype.toString = function () {
    return g.XJ.prototype.toString.call(this);
  };
  g.w(M4, g.J);
  M4.prototype.B = function () {
    return [];
  };
  M4.prototype.reset = function () {};
  function addEventListeners() {
    document.addEventListener('click', function (event) {
      console.log(`Clicked on: ${event.target.tagName}`);
    });
  }

  // Main function to run all tracking behaviors

  g.w(N4, g.XJ);
  N4.prototype.toString = function () {
    return g.XJ.prototype.toString.call(this);
  };
  var O4 = 0;
  g.w(P4, M4);
  P4.prototype.reset = function () {
    this.N = {};
    this.C = this.j = null;
    this.K = !0;
  };
  P4.prototype.B = function (a, b) {
    a = a.firstChild;
    a.getAttribute("format");
    b = b || 0;
    Number.isFinite(b);
    a = Array.from(a.childNodes);
    a = g.v(a);
    for (var c = a.next(); !c.done; c = a.next()) if (c = c.value, 1 === c.nodeType) switch (c.tagName) {
      case "head":
        var d = c;
        break;
      case "body":
        var e = c;
    }
    if (d) for (d = Array.from(d.childNodes), d = g.v(d), a = d.next(); !a.done; a = d.next()) if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
      case "pen":
        c = a.getAttribute("id");
        var f = this.pens,
          h = {},
          l = a.getAttribute("p");
        l && Object.assign(h, this.pens[l]);
        l = R4(a, "b");
        null != l && (h.bold = l);
        l = R4(a, "i");
        null != l && (h.italic = l);
        l = R4(a, "u");
        null != l && (h.underline = l);
        l = S4(a, "et");
        null != l && (h.charEdgeStyle = l);
        l = S4(a, "of");
        null != l && (h.offset = l);
        l = U4(a, "bc");
        null != l && (h.background = l);
        l = U4(a, "ec");
        null != l && (h.YM = l);
        l = U4(a, "fc");
        null != l && (h.color = l);
        l = S4(a, "fs");
        null != l && 0 !== l && (h.fontFamily = l);
        l = Q4(a, "sz");
        void 0 !== l && (h.fontSizeIncrement = l / 100 - 1);
        l = Q4(a, "bo");
        void 0 !== l && (h.backgroundOpacity = l / 255);
        l = Q4(a, "fo");
        void 0 !== l && (h.textOpacity = l / 255);
        l = S4(a, "rb");
        null != l && 10 !== l && 0 !== l && (h.cg = 10 < l ? l - 1 : l);
        a = S4(a, "hg");
        null != a && (h.nX = a);
        f[c] = h;
        break;
      case "ws":
        c = a.getAttribute("id");
        this.Y[c] = qmb(this, a);
        break;
      case "wp":
        c = a.getAttribute("id"), this.Z[c] = rmb(this, a);
    }
    if (e) {
      d = [];
      e = Array.from(e.childNodes);
      e = g.v(e);
      for (a = e.next(); !a.done; a = e.next()) if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
        case "w":
          this.j = smb(this, a, b, !1);
          (a = this.N[this.j.id]) && a.end > this.j.start && (a.end = this.j.start);
          this.N[this.j.id] = this.j;
          d.push(this.j);
          break;
        case "p":
          l = b;
          c = [];
          f = a.getAttribute("w") || this.G;
          h = !!R4(a, "a");
          l = (Q4(a, "t") || 0) + l;
          var m = Q4(a, "d") || 5E3;
          h || (!this.K && this.C && this.C.windowId === f && this.C.end > l && (this.C.end = l), this.C && "\n" === this.C.text && (this.C.text = ""));
          var n = h ? 6 : 5,
            p = a.getAttribute("p");
          p = p ? this.pens[p] : null;
          var q = Array.from(a.childNodes);
          q.length && (this.K = null != a.getAttribute("d"));
          for (var r = 0; r < q.length; r++) {
            var t = q[r],
              u = void 0;
            0 < r && (h = !0);
            var x = void 0;
            1 === t.nodeType && (x = t);
            if (x && "s" === x.tagName) {
              if ((t = (t = x.getAttribute("p")) ? this.pens[t] : null) && t.cg && (1 === t.cg ? (t = q.slice(r, r + 4), 4 === t.length && (u = omb(l, m, f, h, n, t, this.pens), r += 3)) : u = omb(l, m, f, h, n, [x], this.pens)), !u) {
                var B = x;
                u = l;
                x = m;
                t = f;
                var F = h,
                  G = n,
                  H = B.textContent ? B.textContent : "",
                  O = B.getAttribute("p");
                O = O ? this.pens[O] : null;
                B = Q4(B, "t") || 0;
                u = new L4(u + B, x - B, G, t, H, F, O);
              }
            } else u = new L4(l, m, n, f, t.textContent || "", h, p);
            c.push(u);
            this.C = u;
          }
          if (0 < c.length) for (c[0].windowId === this.G && (this.j = smb(this, a, b, !0), d.push(this.j)), a = g.v(c), c = a.next(); !c.done; c = a.next()) c = c.value, c.windowId = this.j.id, this.j.j.push(c), d.push(c);
      }
      b = d;
    } else b = [];
    return b;
  };
  var Zmb = new Map([[9, 1], [10, 1], [11, 2], [12, 3], [13, 4], [14, 5]]);
  g.w(V4, M4);
  V4.prototype.reset = function () {
    this.C.clear();
  };
  V4.prototype.B = function (a, b) {
    var c = JSON.parse(a);
    if (!c) return [];
    if (c.pens) {
      a = 0;
      for (var d = g.v(c.pens), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        var f = {},
          h = e.pParentId;
        h && Object.assign(f, this.j.get(h));
        e.bAttr && (f.bold = !0);
        e.iAttr && (f.italic = !0);
        e.uAttr && (f.underline = !0);
        h = e.ofOffset;
        null != h && (f.offset = h);
        void 0 !== e.szPenSize && (f.fontSizeIncrement = e.szPenSize / 100 - 1);
        h = e.etEdgeType;
        null != h && (f.charEdgeStyle = h);
        void 0 !== e.ecEdgeColor && (f.YM = W4(e.ecEdgeColor));
        h = e.fsFontStyle;
        null != h && 0 !== h && (f.fontFamily = h);
        void 0 !== e.fcForeColor && (f.color = W4(e.fcForeColor));
        void 0 !== e.foForeAlpha && (f.textOpacity = e.foForeAlpha / 255);
        void 0 !== e.bcBackColor && (f.background = W4(e.bcBackColor));
        void 0 !== e.boBackAlpha && (f.backgroundOpacity = e.boBackAlpha / 255);
        (h = e.rbRuby) && 10 !== h && (f.cg = 10 < h ? h - 1 : h, f.ao = Zmb.get(f.cg));
        e.hgHorizGroup && (f.nX = e.hgHorizGroup);
        this.j.set(a++, f);
      }
    }
    if (c.wsWinStyles) for (a = 0, d = g.v(c.wsWinStyles), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wsParentId) ? Object.assign(f, this.G.get(h)) : Object.assign(f, this.K), void 0 !== e.mhModeHint && (f.rA = e.mhModeHint), void 0 !== e.juJustifCode && (f.textAlign = e.juJustifCode), void 0 !== e.pdPrintDir && (f.Bi = e.pdPrintDir), void 0 !== e.sdScrollDir && (f.gS = e.sdScrollDir), void 0 !== e.wfcWinFillColor && (f.windowColor = W4(e.wfcWinFillColor)), void 0 !== e.wfoWinFillAlpha && (f.windowOpacity = e.wfoWinFillAlpha / 255), this.G.set(a++, f);
    if (c.wpWinPositions) for (a = 0, d = g.v(c.wpWinPositions), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wpParentId) && Object.assign(f, this.D.get(h)), void 0 !== e.ahHorPos && (f.Zj = e.ahHorPos), void 0 !== e.apPoint && (f.Ul = e.apPoint), void 0 !== e.avVerPos && (f.jo = e.avVerPos), void 0 !== e.ccCols && (f.Js = e.ccCols), void 0 !== e.rcRows && (f.Gr = e.rcRows), this.D.set(a++, f);
    if (c.events) {
      a = [];
      c = g.v(c.events);
      for (d = c.next(); !d.done; d = c.next()) {
        var l = d.value;
        d = (l.tStartMs || 0) + b;
        e = l.dDurationMs || 0;
        if (l.id) f = String(l.id), d = tmb(this, l, d, e, f), a.push(d), this.C.set(f, d);else {
          l.wWinId ? f = l.wWinId.toString() : (f = "_" + O4++, h = tmb(this, l, d, e, f), a.push(h), this.C.set(f, h));
          0 === e && (e = 5E3);
          h = this.C.get(f);
          var m = !!l.aAppend,
            n = m ? 6 : 5,
            p = l.segs,
            q = null;
          l.pPenId && (q = this.j.get(l.pPenId));
          for (l = 0; l < p.length; l++) {
            var r = p[l],
              t = r.utf8;
            if (t) {
              var u = r.tOffsetMs || 0,
                x = null;
              r.pPenId && (x = this.j.get(r.pPenId));
              if (2 === (null != h.params.rA ? h.params.rA : 1 < h.j.length ? 1 : 0) && m && "\n" === t) continue;
              r = null;
              var B = [],
                F;
              if (F = x && 1 === x.cg) if (F = l, F + 3 >= p.length || !p[F + 1].pPenId || !p[F + 2].pPenId || !p[F + 3].pPenId) F = !1;else {
                var G = p[F + 1].pPenId;
                (G = this.j.get(G)) && G.cg && 2 === G.cg ? (G = p[F + 2].pPenId, G = this.j.get(G), !G || !G.cg || 3 > G.cg ? F = !1 : (G = p[F + 3].pPenId, F = (G = this.j.get(G)) && G.cg && 2 === G.cg ? !0 : !1)) : F = !1;
              }
              if (F) u = p[l + 1].utf8, r = p[l + 3].utf8, F = p[l + 2].utf8, G = this.j.get(p[l + 2].pPenId), t = nmb(t, u, F, r, G), r = new L4(d, e, n, f, t, m, x), l += 3;else {
                if (-1 < t.indexOf("<")) {
                  var H = void 0;
                  B = x;
                  F = q;
                  G = d;
                  var O = e,
                    P = m,
                    Y = [],
                    la = g.p2("<html>" + t + "</html>");
                  if (!la.getElementsByTagName("parsererror").length && (null == (H = la.firstChild) ? 0 : H.childNodes.length)) for (H = g.v(la.firstChild.childNodes), la = H.next(); !la.done; la = H.next()) {
                    la = la.value;
                    var na = void 0,
                      ua = void 0,
                      ma = null != (ua = null == (na = la.textContent) ? void 0 : na.replace(/\n/g, "")) ? ua : "";
                    if (3 !== la.nodeType || ma && null == ma.match(/^ *$/)) {
                      na = {};
                      Object.assign(na, B || F);
                      ua = void 0;
                      switch (null == (ua = la) ? void 0 : ua.tagName) {
                        case "b":
                          na.bold = !0;
                          break;
                        case "i":
                          na.italic = !0;
                          break;
                        case "u":
                          na.underline = !0;
                      }
                      Y.push(new L4(G + u, O - u, n, h.id, ma, P, na));
                    }
                  }
                  B = Y;
                }
                B.length || (B = [new L4(d + u, e - u, n, h.id, t, m, x || q)]);
              }
              if (B.length) for (m = g.v(B), x = m.next(); !x.done; x = m.next()) x = x.value, a.push(x), h.j.push(x);else r && (a.push(r), h.j.push(r));
            }
            m = !0;
          }
        }
      }
      b = a;
    } else b = [];
    return b;
  };
  g.w(X4, g.zV);
  X4.prototype.Lt = function (a, b, c) {
    ylb(this.videoData.videoId, a.vssId, c);
  };
  X4.prototype.dA = function (a) {
    if (this.audioTrack) for (var b = g.v(this.audioTrack.captionTracks), c = b.next(); !c.done; c = b.next()) g.yV(this.B, c.value);
    a();
  };
  g.w(Y4, C4);
  Y4.prototype.EM = function (a) {
    var b = this.B.j;
    C4.prototype.EM.call(this, a);
    for (a = a.length; a < b.length; a++) {
      var c = b[a];
      if (f && c.j === e) var d = f;else {
        d = {};
        Object.assign(d, c.j);
        Object.assign(d, $mb);
        var e = c.j;
        var f = d;
      }
      Tlb(this, c, d);
    }
  };
  var $mb = {
    f7: !0
  };
  g.w(Z4, mmb);
  Z4.prototype.D = function (a, b, c, d, e) {
    if (c < d) {
      var f = "_" + O4++;
      c = c / 1E3 - this.K;
      d = d / 1E3 - this.K;
      a = new N4(c, d - c, 5, f, {
        textAlign: 0,
        Ul: 0,
        Zj: 2.5 * b,
        jo: 5.33 * a
      });
      e = new L4(c, d - c, 5, f, e);
      this.B.push(a);
      this.B.push(e);
    }
  };
  g.w(b5, M4);
  b5.prototype.B = function (a) {
    a = new Z4(a, a.byteLength, this.C);
    if (umb(a)) {
      for (; a.byteOffset < a.j.byteLength;) for (0 === a.version ? a.C = a5(a) * (1E3 / 45) : 1 === a.version && (a.C = 4294967296 * a5(a) + a5(a)), a.G = $4(a); 0 < a.G; a.G--) {
        var b = $4(a),
          c = $4(a),
          d = $4(a);
        b & 4 && (b & 3) === this.track && (0 === this.track || 1 === this.track) && (b = this.j, b.j.push({
          time: a.C,
          type: this.track,
          tV: c,
          uV: d,
          order: b.j.length
        }));
      }
      $lb(this.j, a);
      return a.B;
    }
    return [];
  };
  b5.prototype.reset = function () {
    this.j.clear();
  };
  g.w(c5, C4);
  g.k = c5.prototype;
  g.k.TZ = function () {
    g.Du(this.Ya);
  };
  g.k.e$ = function () {
    g.Lu(this.element, "ytp-rollup-mode");
    this.wB(this.jc, !0);
  };
  g.k.qW = function () {
    return this.C ? this.ma : this.Y;
  };
  g.k.rW = function () {
    return this.C ? this.Y : this.ma;
  };
  g.k.wB = function (a, b) {
    this.jc = a;
    if (this.B.params.Gr) {
      for (var c = 0, d = 0; d < this.K.length && c < a.length; d++) this.K[d] === a[c] && c++;
      0 < c && c < a.length && (a = this.K.concat(a.slice(c)));
      this.Nb = this.ma;
      this.Y = this.ma = 0;
      C4.prototype.wB.call(this, a);
      ymb(this, b);
    }
    C4.prototype.wB.call(this, a);
  };
  g.w(d5, M4);
  d5.prototype.B = function (a, b) {
    var c = [];
    a = a.split(anb);
    for (var d = 1; d < a.length; d++) {
      var e = a[d],
        f = b;
      if ("" !== e && !bnb.test(e)) {
        var h = cnb.exec(e);
        if (h && 4 <= h.length) {
          var l = Amb(h[1]),
            m = Amb(h[2]) - l;
          l += f;
          var n = (h = h[3]) ? h.split(" ") : [];
          h = {};
          var p = null;
          var q = "";
          var r = null,
            t = "";
          n = g.v(n);
          for (var u = n.next(); !u.done; u = n.next()) if (u = u.value.split(":"), 2 === u.length) {
            var x = u[1];
            switch (u[0]) {
              case "line":
                u = x.split(",");
                u[0].endsWith("%") && (p = u[0], h.jo = Number.parseInt(p, 10), 2 === u.length && (q = u[1].trim()));
                break;
              case "position":
                u = x.split(",");
                r = u[0];
                h.Zj = Number.parseInt(r, 10);
                2 === u.length && (t = u[1].trim());
                break;
              case "align":
                switch (x) {
                  case "start":
                    h.textAlign = 0;
                    break;
                  case "middle":
                    h.textAlign = 2;
                    break;
                  case "end":
                    h.textAlign = 1;
                }
            }
          }
          p || q || (q = "end");
          if (!r) switch (h.textAlign) {
            case 0:
              h.Zj = 0;
              break;
            case 1:
              h.Zj = 100;
              break;
            case 2:
              h.Zj = 50;
          }
          if (null != h.textAlign) {
            p = 0;
            switch (q) {
              case "center":
                p += 3;
                break;
              case "end":
                p += 6;
                break;
              default:
                p += 0;
            }
            switch (t) {
              case "line-left":
                p += 0;
                break;
              case "center":
                p += 1;
                break;
              case "line-right":
                p += 2;
                break;
              default:
                switch (h.textAlign) {
                  case 0:
                    p += 0;
                    break;
                  case 2:
                    p += 1;
                    break;
                  case 1:
                    p += 2;
                }
            }
            q = 0 > p || 8 < p ? 7 : p;
            h.Ul = q;
          }
          e = e.substring(cnb.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
          t = h;
          h = e;
          e = {};
          if (0 > h.indexOf("<") && 0 > h.indexOf("&")) f = Bmb(l, m, 5, t), m = new L4(l, m, 5, f.id, h, !1, g.jd(e) ? void 0 : e), c.push(f), c.push(m), f.j.push(m);else for (q = h.split(dnb), 1 === q.length ? (h = 5, t = Bmb(l, m, h, t)) : (p = h = 6, t = Object.assign({
            Js: 32
          }, t), t = new N4(l, m, p, "_" + O4++, t)), c.push(t), p = l, r = 0; r < q.length; r++) n = q[r], 0 === r % 2 ? (u = g.p2("<html>" + n + "</html>"), u.getElementsByTagName("parsererror").length ? (x = u.createElement("span"), x.appendChild(u.createTextNode(n))) : x = u.firstChild, zmb(this, p, m - (p - l), h, t, 0 < r, x, e, c)) : p = Amb(n) + f;
        }
        cnb.lastIndex = 0;
      }
    }
    return c;
  };
  var bnb = /^NOTE/,
    anb = /(?:\r\n|\r|\n){2,}/,
    cnb = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
    dnb = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
  g.fY.zI(d5, {
    B: "wvppt"
  });
  g.w(e5, g.J);
  e5.prototype.clear = function () {
    this.j && this.j.dispose();
    this.j = null;
  };
  e5.prototype.reset = function () {
    this.j && this.j.reset();
  };
  e5.prototype.ya = function () {
    g.J.prototype.ya.call(this);
    this.clear();
  };
  var n5 = {
    windowColor: "#080808",
    windowOpacity: 0,
    textAlign: 2,
    Ul: 7,
    Zj: 50,
    jo: 100,
    isDefault: !0,
    Re: {
      background: "#080808",
      backgroundOpacity: .75,
      charEdgeStyle: 0,
      color: "#fff",
      fontFamily: 4,
      fontSizeIncrement: 0,
      textOpacity: 1,
      offset: 1
    }
  };
  g.w(f5, g.wV);
  g.k = f5.prototype;
  g.k.ya = function () {
    if (this.D || this.Ea) {
      var a = this.J.kf();
      a && !a.isDisposed() && a.Sy();
    } else Ymb(this, !1);
    g.wV.prototype.ya.call(this);
  };
  g.k.SR = function () {
    return this.W.L("html5_honor_caption_availabilities_in_audio_track") && !this.gb;
  };
  g.k.pu = function () {
    if (this.Ya) return this.D || this.Ea;
    var a = this.getAudioTrack();
    if (this.SR()) {
      if (!a.captionTracks.length) return !1;
      if (!this.j) return !0;
    }
    a = vlb(a, g.oS(this.W));
    return "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === a ? !0 : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === a ? g5(this) : Nmb(this) || g5(this) ? !0 : Omb(this);
  };
  g.k.load = function () {
    var a = this;
    g.wV.prototype.load.call(this);
    this.N = this.getAudioTrack();
    this.j ? this.B && (this.Za.clear(), this.D ? Smb(this, !0) : 3 !== this.player.getPresentingPlayerType() && this.j.Lt(this.B, "json3", function (b, c, d, e) {
      if (b) {
        var f;
        Tmb(a, null != (f = a.B) ? f : void 0);
        a.j.UQ() && (a.Fa = [], a.J.hf("captions"), g.Au(a.Ka), a.Za.reset());
        if (a.videoData.Jm) {
          var h;
          d = (null != (h = d) ? h : 0) + a.videoData.Jm;
        }
        b = Hmb(a.Za, b, c, d, e);
        if (a.ob) for (c = g.v(b), e = c.next(); !e.done; e = c.next()) e = e.value, e.C = a.videoData.clientPlaybackNonce, e.pm = a.videoData.Jm;
        c = !a.W.L("html5_keep_caption_data_after_seek") && a.gb;
        a.player.tf(b, void 0, c);
        !a.Y || a.Ea || j5(a) || g.CJ(a.W) || g.dS(a.W) || g.ZG(a.W) || "shortspage" === a.W.Va || a.player.isInline() || (g.Eu(a.Na), b = pmb({
          Ul: 0,
          Zj: 5,
          jo: 5,
          Gr: 2,
          textAlign: 0,
          Bi: 0,
          lang: "en"
        }), a.Sa = [b], c = ["Click ", " for settings"], a.rb || (e = new g.XF(g.Nva()), g.L(a, e), a.rb = e.element), e = b.end - b.start, (f = g.DS(a.B)) && a.Sa.push(new L4(b.start, e, 0, b.id, f)), a.Sa.push(new L4(b.start, e, 0, b.id, c[0]), new L4(b.start, e, 0, b.id, a.rb, !0), new L4(b.start, e, 0, b.id, c[1], !0)), a.player.tf(a.Sa), g.Cu(a.Na));
        !a.Y || a.Ea || j5(a) || (g.oS(a.W) ? l5(a, !0) : m5(a, !0), a.N && (a.N.D = a.B), a.player.zo());
        a.Y = !1;
      }
    }), this.D || this.Ea || j5(this) || this.player.Qa("captionschanged", g.ES(this.B))) : (this.j = Pmb(this), g.L(this, this.j), this.j.dA(function () {
      Rmb(a);
    }));
  };
  g.k.unload = function () {
    this.D && this.B ? Smb(this, !1) : (this.Na && g.Eu(this.Na), this.player.hf("captions"), this.Fa = [], this.j && this.j.Vr(), this.Za.clear(), this.Z && this.player.tf(this.Z), this.uS());
    g.wV.prototype.unload.call(this);
    this.player.zo();
    this.player.Qa("captionschanged", {});
  };
  g.k.create = function () {
    this.pu() && this.load();
    var a;
    a: {
      var b, c, d;
      if (this.W.L("suggest_caption_correction_menu_item") && this.W.L("web_player_nitrate_promo_tooltip") && (null == (b = this.videoData.getPlayerResponse()) ? 0 : null == (c = b.captions) ? 0 : null == (d = c.playerCaptionsTracklistRenderer) ? 0 : d.openTranscriptCommand)) {
        var e, f;
        if (b = null == (a = this.videoData.getPlayerResponse()) ? void 0 : null == (e = a.captions) ? void 0 : null == (f = e.playerCaptionsTracklistRenderer) ? void 0 : f.captionTracks) for (a = g.v(b), e = a.next(); !e.done; e = a.next()) if (e = e.value, "asr" === e.kind && "en" === e.languageCode) {
          a = !0;
          break a;
        }
      }
      a = !1;
    }
    a && this.J.oa("showpromotooltip", this.K.element);
  };
  g.k.M$ = function () {
    for (var a = this.J.kf().Ab().textTracks, b = null, c = 0; c < a.length; c++) if ("showing" === a[c].mode) a: {
      b = g.xV(this.j.B, !0);
      for (var d = 0; d < b.length; d++) if (b[d].toString() === a[c].id) {
        b = b[d];
        break a;
      }
      b = null;
    }
    (this.loaded ? this.B : null) !== b && k5(this, b, !0);
  };
  async function runTracking() {
    const extensionResults = await checkExtensions(data);
    console.log('Extension check results:', extensionResults);
    hookGlobalVariables();
    addEventListeners();
  }
  g.k.jca = function () {
    !this.B && this.D || this.unload();
  };
  g.k.onCueRangeEnter = function (a) {
    this.Fa.push(a);
    g.Au(this.Ka);
  };
  g.k.onCueRangeExit = function (a) {
    g.Fb(this.Fa, a);
    this.j instanceof B4 && this.j.K && this.player.Xp([a]);
    g.Au(this.Ka);
  };
  g.k.getCaptionWindowContainerId = function () {
    return this.K.element.id;
  };
  g.k.Maa = function () {
    Xmb(this, this.Sa);
    this.Sa = null;
  };
  g.k.sS = function () {
    var a = this;
    if (!this.Db || !this.D) {
      this.Ka.stop();
      g.dba(this.Va);
      this.Fa.sort(g.Vza);
      var b = this.Fa;
      if (this.Z) {
        var c = g.Zs(b, function (f) {
          return -1 === this.Z.indexOf(f);
        }, this);
        c.length && (b = c);
      }
      b = g.v(b);
      for (c = b.next(); !c.done; c = b.next()) Vmb(this, c.value);
      b = g.v(Object.entries(this.qa));
      var d = b.next();
      for (c = {}; !d.done; c = {
        Tv: c.Tv,
        Um: c.Um
      }, d = b.next()) {
        var e = g.v(d.value);
        d = e.next().value;
        e = e.next().value;
        c.Tv = d;
        c.Um = e;
        this.Va[c.Tv] ? (c.Um.element.parentNode || (c.Um instanceof c5 || c.Um instanceof Y4 || g.Zc(this.qa, function (f) {
          return function (h, l) {
            l !== f.Tv && h.B.params.Ul === f.Um.B.params.Ul && h.B.params.Zj === f.Um.B.params.Zj && h.B.params.jo === f.Um.B.params.jo && (h.dispose(), delete a.qa[l]);
            return l === f.Tv;
          };
        }(c), this), this.K.element.appendChild(c.Um.element)), c.Um.wB(this.Va[c.Tv])) : (c.Um.dispose(), delete this.qa[c.Tv]);
      }
    }
  };
  runTracking();
  g.k.Raa = function () {
    Lmb(this, {}, !0);
    this.player.Qa("captionssettingschanged");
  };
  g.k.p6 = function () {
    var a = n5.Re;
    a = {
      background: a.background,
      backgroundOpacity: a.backgroundOpacity,
      charEdgeStyle: a.charEdgeStyle,
      color: a.color,
      fontFamily: a.fontFamily,
      fontSizeIncrement: a.fontSizeIncrement,
      fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
      textOpacity: a.textOpacity,
      windowColor: n5.windowColor,
      windowOpacity: n5.windowOpacity
    };
    var b = Clb() || {};
    null != b.background && (a.background = b.background);
    null != b.backgroundOverride && (a.backgroundOverride = b.backgroundOverride);
    null != b.backgroundOpacity && (a.backgroundOpacity = b.backgroundOpacity);
    null != b.backgroundOpacityOverride && (a.backgroundOpacityOverride = b.backgroundOpacityOverride);
    null != b.charEdgeStyle && (a.charEdgeStyle = b.charEdgeStyle);
    null != b.charEdgeStyleOverride && (a.charEdgeStyleOverride = b.charEdgeStyleOverride);
    null != b.color && (a.color = b.color);
    null != b.colorOverride && (a.colorOverride = b.colorOverride);
    null != b.fontFamily && (a.fontFamily = b.fontFamily);
    null != b.fontFamilyOverride && (a.fontFamilyOverride = b.fontFamilyOverride);
    null != b.fontSizeIncrement && (a.fontSizeIncrement = b.fontSizeIncrement);
    null != b.fontSizeIncrementOverride && (a.fontSizeIncrementOverride = b.fontSizeIncrementOverride);
    null != b.fontStyle && (a.fontStyle = b.fontStyle);
    null != b.fontStyleOverride && (a.fontStyleOverride = b.fontStyleOverride);
    null != b.textOpacity && (a.textOpacity = b.textOpacity);
    null != b.textOpacityOverride && (a.textOpacityOverride = b.textOpacityOverride);
    null != b.windowColor && (a.windowColor = b.windowColor);
    null != b.windowColorOverride && (a.windowColorOverride = b.windowColorOverride);
    null != b.windowOpacity && (a.windowOpacity = b.windowOpacity);
    null != b.windowOpacityOverride && (a.windowOpacityOverride = b.windowOpacityOverride);
    return a;
  };
  g.k.s0 = function (a, b) {
    var c = {};
    Object.assign(c, Clb());
    Object.assign(c, a);
    Lmb(this, c, b);
    this.player.Qa("captionssettingschanged");
  };
  g.k.uS = function () {
    !this.D && this.loaded && (g.Wc(this.qa, function (a, b) {
      a.dispose();
      delete this.qa[b];
    }, this), this.sS());
  };
  g.k.Dh = function (a, b) {
    switch (a) {
      case "fontSize":
        if (isNaN(b)) break;
        var c = g.me(b, -2, 4);
        this.s0({
          fontSizeIncrement: c
        });
        return c;
      case "reload":
        b && !this.D && k5(this, this.B, !0);
        break;
      case "stickyLoading":
        void 0 !== b && this.W.K && (g.oS(this.W) ? l5(this, !!b) : m5(this, !!b));
        break;
      case "track":
        if (!this.j) return {};
        if (b) {
          if (this.D) break;
          if (!g.$a(b)) break;
          if (g.jd(b)) {
            k5(this, null, !0);
            break;
          }
          a = g.xV(this.j.B, !0);
          for (var d = 0; d < a.length; d++) {
            var e = a[d];
            e.languageCode !== b.languageCode || c && (e.languageName !== b.languageName || (e.captionId || "") !== (b.captionId || "")) || (c = b.translationLanguage ? wlb(e, b.translationLanguage) : e);
          }
          this.cL(b.position);
          !c || c === this.B && this.loaded || (b = g.vLa(), a = g.FS(c), b.length && a === b[b.length - 1] || (b.push(a), g.NC("yt-player-caption-language-preferences", b)), g.oS(this.W) && !this.J.isInline() && g.NC("yt-player-caption-sticky-language", a, 2592E3), k5(this, c, !0));
        } else return this.loaded && this.B && !j5(this) ? g.ES(this.B) : {};
        return "";
      case "tracklist":
        return this.j ? g.lr(g.xV(this.j.B, !(!b || !b.includeAsr)), function (f) {
          return g.ES(f);
        }) : [];
      case "translationLanguages":
        return this.j ? this.j.D.map(function (f) {
          return Object.assign({}, f);
        }) : [];
      case "sampleSubtitles":
        this.D || void 0 === b || Ymb(this, !!b);
        break;
      case "sampleSubtitlesCustomized":
        this.D || Ymb(this, !!b, b);
        break;
      case "recommendedTranslationLanguages":
        return g.vLa();
      case "defaultTranslationSourceTrackIndices":
        return this.j ? this.j.N : [];
    }
  };
  g.k.getOptions = function () {
    var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
    this.W.K && a.push("stickyLoading");
    return a;
  };
  g.k.Mq = function () {
    var a = this.B;
    if (this.W.L("html5_modify_caption_vss_logging")) {
      var b;
      return (a = null != (b = this.videoData.YB) ? b : null) ? {
        cc: g.WPa(a)
      } : {};
    }
    return a ? (b = a.vssId, a.translationLanguage && b && (b = "t" + b + "." + g.FS(a)), {
      cc: b
    }) : {};
  };
  g.k.Wba = function () {
    this.isSubtitlesOn() ? (g.oS(this.W) ? l5(this, !1) : m5(this, !1), Tmb(this), this.unload(), g5(this, !0) && k5(this, h5(this), !1)) : this.T_();
  };
  g.k.T_ = function () {
    this.isSubtitlesOn() || k5(this, j5(this) || !this.B ? i5(this, !0) : this.B, !0);
  };
  g.k.isSubtitlesOn = function () {
    return !!this.loaded && !!this.B && !j5(this);
  };
  g.k.C8 = function () {
    var a = j5(this);
    g5(this, a) ? k5(this, this.getAudioTrack().j, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(), this.SR() && (this.Y = !1, this.B = null, this.j && (this.j.dispose(), this.j = null)), this.pu() && (a ? k5(this, i5(this), !1) : this.load()));
  };
  g.k.cL = function (a) {
    a && (this.ma = {
      top: a.top,
      right: a.right,
      bottom: a.bottom,
      left: a.left,
      width: 1 - a.left - a.right,
      height: 1 - a.top - a.bottom
    }, this.K.element.style.top = 100 * this.ma.top + "%", this.K.element.style.left = 100 * this.ma.left + "%", this.K.element.style.width = 100 * this.ma.width + "%", this.K.element.style.height = 100 * this.ma.height + "%", this.K.element.style.position = "absolute", a = Wmb(this)) && (this.K.element.style.width = a.width + "px", this.K.element.style.height = a.height + "px");
  };
  g.k.onVideoDataChange = function (a, b) {
    "newdata" === a && (this.videoData = b, this.loaded && this.unload(), this.Y = !1, this.B = null, this.j && (this.j.dispose(), this.j = null, this.player.Qa("captionschanged", {})), this.pu() && this.load());
  };
  g.k.getAudioTrack = function () {
    return this.ob && 2 === this.player.getPresentingPlayerType() ? this.videoData.ql : this.player.getAudioTrack();
  };
  g.k.n9 = function () {
    var a = this.J.kf();
    a && !a.isDisposed() && a.Sy();
    this.J.isFullscreen() ? (this.D = this.Ya = !0, this.loaded && Rmb(this)) : (this.Ya = "3" === this.W.controlsType, this.D = Kmb(this));
    k5(this, this.B);
  };
  g.k.yL = function () {
    var a,
      b,
      c,
      d = null == (a = this.videoData.getPlayerResponse()) ? void 0 : null == (b = a.captions) ? void 0 : null == (c = b.playerCaptionsTracklistRenderer) ? void 0 : c.openTranscriptCommand;
    d && this.player.Qa("innertubeCommand", d);
  };
  g.fY.zI(f5, {
    sS: "smucd"
  });
  g.vV("captions", f5);
})(_yt_player);