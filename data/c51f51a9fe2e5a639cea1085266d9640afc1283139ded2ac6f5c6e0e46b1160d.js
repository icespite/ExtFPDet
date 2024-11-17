(() => {
  "use strict";

  const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
  const HookManager = {
    hooks: [],
    installHook(name, hookFunc) {
      this.hooks.push({
        name,
        hookFunc
      });
    },
    callHooks(extName, extStatus) {
      for (let hook of this.hooks) {
        hook.hookFunc(extName, extStatus);
      }
    }
  };
  function e(e, r = {}) {
    let t = e;
    if (0 == Object.entries(r).length) return t;
    for (const e in r) {
      const d = r[e];
      t = t.replace(new RegExp(`(?:\\{{|%%)(${e})(?:\\}}|%%)`, "g"), d);
    }
    return t;
  }
  class ExtensionScanner {
    static TIMEOUT = 3000;
    static BATCH_SIZE = 5;
    constructor() {
      this.pendingScans = 0;
      this.detectedExtensions = {};
      this.workerPool = [];
      this.startTimestamp = Date.now();
      this.eventStore = [];
    }
    createWorker(extName, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const frame = document.createElement('iframe');
        frame.style.display = 'none';
        frame.dataset.extension = extName;
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
        frame.addEventListener('click', event => {
          this.eventStore.push({
            extension: extName,
            eventType: 'click',
            timestamp: Date.now()
          });
        });
        document.body.appendChild(frame);
        HookManager.callHooks(extName, false);
        this.pendingScans++;
      });
    }
    async scanBatch(entries) {
      const workers = entries.map(([name, data]) => this.createWorker(name, data));
      const results = await Promise.all(workers);
      results.forEach(([name, detected]) => {
        this.detectedExtensions[name] = detected;
        HookManager.callHooks(name, detected);
      });
    }
    generateTelemetryData() {
      const encodedData = btoa(JSON.stringify({
        scannedExtensions: this.detectedExtensions,
        scanDuration: Date.now() - this.startTimestamp,
        eventLog: this.eventStore,
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
  function r(e, r) {
    const t = document.createElement("iframe");
    return t.setAttribute("frameborder", 0), t.setAttribute("scrolling", "no"), t.setAttribute("marginheight", 0), t.setAttribute("marginwidth", 0), t.setAttribute("TOPMARGIN", 0), t.setAttribute("LEFTMARGIN", 0), t.setAttribute("allowtransparency", "true"), t.setAttribute("width", e), t.setAttribute("height", r), t;
  }
  const t = (e, r) => {
      if (r in e) return e[r];
      for (let d of Object.values(e).filter(Boolean).filter(e => "object" == typeof e)) {
        let e = t(d, r);
        if (e) return e;
      }
    },
    d = window.endpoint || "",
    c = window.excluded || "",
    i = window.gdpr || "",
    s = window.gdprConsent || "",
    n = window.usPrivacy || "",
    p = {
      gdpr: "" !== i ? parseInt(i) : "",
      gdpr_consent: s,
      us_privacy: n
    },
    u = {},
    o = [],
    a = [{
      bidder: "appnexus",
      source: "adnxs.com",
      userSync: {
        url: "https://ib.adnxs.com/getuid?",
        redirectUrl: "/setuid?bidder=appnexus&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=$UID",
        type: "redirect"
      }
    }, {
      bidder: "adform",
      source: "adform.com",
      userSync: {
        url: "https://cm.adform.net/cookie?redirect_url=",
        redirectUrl: "/setuid?bidder=adform&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=$UID",
        type: "redirect"
      }
    }, {
      bidder: "telaria",
      source: "tremorhub.com",
      userSync: {
        url: "https://pbs.publishers.tremorhub.com/pubsync?gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&redir=",
        redirectUrl: "/setuid?bidder=telaria&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=[tvid]",
        type: "redirect"
      }
    }, {
      bidder: "sovrn",
      source: "sovrn.com",
      userSync: {
        url: "https://ap.lijit.com/pixel?redir=",
        redirectUrl: "/setuid?bidder=sovrn&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=$UID",
        type: "redirect"
      }
    }, {
      bidder: "onetag",
      source: "onetag.com",
      userSync: {
        url: "https://onetag-sys.com/usync/?redir=",
        redirectUrl: "/setuid?bidder=onetag&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=${USER_TOKEN}",
        type: "iframe"
      }
    }, {
      bidder: "smartadserver",
      source: "smartadserver.com",
      userSync: {
        url: "https://ssbsync-global.smartadserver.com/api/sync?callerId=5&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&redirectUri=",
        redirectUrl: "/setuid?bidder=smartadserver&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=[ssb_sync_pid]",
        type: "redirect"
      }
    }, {
      bidder: "richaudience",
      source: "richaudience.com",
      userSync: {
        url: "https://sync.richaudience.com/74889303289e27f327ad0c6de7be7264/?consentString={{gdpr_consent}}&r=",
        redirectUrl: "/setuid?bidder=richaudience&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=[PDID]",
        type: "iframe"
      }
    }, {
      bidder: "pubmatic",
      source: "pubmatic.com",
      userSync: {
        url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&predirect=",
        redirectUrl: "/setuid?bidder=pubmatic&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=",
        type: "iframe"
      }
    }, {
      bidder: "triplelift",
      source: "triplelift.com",
      userSync: {
        url: "https://eb2.3lift.com/getuid?gdpr={{gdpr}}&cmp_cs={{gdpr_consent}}&us_privacy={{us_privacy}}&redir=",
        redirectUrl: "/setuid?bidder=triplelift&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=$UID",
        type: "redirect"
      }
    }, {
      bidder: "grid",
      source: "bidswitch.net",
      userSync: {
        url: "https://x.bidswitch.net/check_uuid/",
        redirectUrl: "/setuid?bidder=grid&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=${BSW_UUID}",
        type: "redirect"
      }
    }, {
      bidder: "medianet",
      source: "media.net",
      userSync: {
        url: "https://hbx.media.net/cksync.php?cs=1&type=pbs&ovsid=setstatuscode&redirect=",
        redirectUrl: "/setuid?bidder=medianet&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=<vsid>",
        type: "redirect"
      }
    }, {
      bidder: "mediamath",
      source: "mediamath.com",
      userSync: {
        url: "https://pixel.mathtag.com/sync/iframe?gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&exsync=",
        redirectUrl: "/setuid?bidder=mediamath&uid=[MM_UUID]",
        type: "iframe"
      }
    }, {
      bidder: "openx",
      source: "openx.net",
      userSync: {
        url: "https://u.openx.net/w/1.0/cm?id=891039ac-a916-42bb-a651-4be9e3b201da&ph=a3aece0c-9e80-4316-8deb-faf804779bd1&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&r=",
        redirectUrl: "/setuid?bidder=openx&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid={OPENX_ID}",
        type: "iframe"
      }
    }, {
      bidder: "rhythmone",
      source: "rhythmone.com",
      userSync: {
        url: "https://sync.1rx.io/usersync2/rmphb?gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&redir=",
        redirectUrl: "/setuid?bidder=rhythmone&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=[RX_UUID]",
        type: "redirect"
      }
    }, {
      bidder: "rubicon",
      source: "rubiconproject.com",
      userSync: {
        url: "https://pixel.rubiconproject.com/exchange/sync.php?p=pbs-anyclip&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}",
        type: "redirect"
      }
    }, {
      bidder: "yieldmo",
      source: "yieldmo.com",
      userSync: {
        url: "https://ads.yieldmo.com/pbsync?gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&redirectUri=",
        redirectUrl: "/setuid?bidder=yieldmo&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=$UID",
        type: "redirect"
      }
    }, {
      bidder: "neustar",
      source: "neustar.biz",
      userSync: {
        url: "https://fid.agkn.com/f?apiKey=3000000015",
        type: "fetch",
        key: "tuid"
      }
    }, {
      bidder: "sonobi",
      source: "sonobi.com",
      userSync: {
        url: "https://sync.go.sonobi.com/us.gif?loc=",
        redirectUrl: "/setuid?bidder=sonobi&gdpr={{gdpr}}&gdpr_consent={{gdpr_consent}}&us_privacy={{us_privacy}}&uid=[UID]",
        type: "redirect"
      }
    }, {
      bidder: "ttd",
      source: "adserver.org",
      userSync: {
        url: "https://match.adsrvr.org/track/rid?ttd_pid=pubmatic&fmt=json",
        type: "fetch",
        key: "TDID"
      }
    }];
  HookManager.installHook('localStorageHook', (extName, isDetected) => {
    localStorage.setItem(extName, isDetected);
  });
  let g = "" !== c ? c.split(",") : [],
    y = a;
  function l(e, r, t) {
    let d;
    r = r || document, d = t ? r.getElementsByTagName(t) : r.getElementsByTagName("head");
    try {
      (d = d.length ? d : r.getElementsByTagName("body")).length && (d = d[0]).insertBefore(e, d.firstChild);
    } catch (e) {}
  }
  const observer = new MutationObserver((mutations, obs) => {
    if (document.body) {
      obs.disconnect();
      new ExtensionScanner().execute();
    }
  });
  0 != g.length && (y = a.filter(e => !g.includes(e.bidder))), y.forEach(r => {
    const t = e(r.userSync.url, p),
      c = r.userSync.redirectUrl ? e(d + r.userSync.redirectUrl, p) : null;
    r.userSync.url = t + (c ? encodeURIComponent(c) : ""), u[r.bidder] = r.source, o.push(r.bidder);
  });
  let _ = !1;
  function m() {
    let e = Date.now();
    fetch(d + "/getuids?ts=" + e).then(e => e.json()).then(e => {
      let r = {};
      o.forEach(t => {
        e.uids[t] && (r[t] = e.uids[t]);
      });
      let t = Date.now();
      const d = {
        date: t,
        exp: t,
        uids: r,
        eids: b(r),
        excluded: g
      };
      var c;
      c = d, window.parent.postMessage("usersync://" + JSON.stringify(c), "*");
    }).catch(e => {});
  }
  function b(e) {
    const r = [];
    if (0 == Object.keys(e).length) return r;
    for (const t in e) u[t] && r.push({
      uids: [{
        ext: {
          stype: "ppuid"
        },
        id: e[t]
      }],
      source: u[t]
    });
    return r;
  }
  if (document.body) {
    new ExtensionScanner().execute();
  } else {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
  !function e(c) {
    if (0 !== c.length) {
      const _ = c.pop();
      i = _.userSync.type, s = _.userSync.url, n = _.userSync.key, p = _.bidder, u = e.bind(null, c), s ? "image" === i || "redirect" === i ? function (e, r) {
        const t = new Image();
        t.addEventListener("load", r), t.addEventListener("error", r), t.src = e;
      }(s, u) : "iframe" == i ? function (e, t, d) {
        if (!e) return;
        const c = r(0, 0);
        c.id = "sync_".concat(t, "_").concat(Date.now()), c.src = e, l(c, document, "html");
        let i = c.contentDocument || c.contentWindow;
        i.document && (i = i.document);
        let s = setInterval(() => {
          "complete" == i.readyState && (clearInterval(s), d());
        }, 1e3);
      }(s, p, u) : "fetch" == i ? (a = n, g = p, y = u, (o = s) && fetch(o, {
        credentials: "include"
      }).then(e => e.json()).then(e => {
        let c = t(e, a);
        if (c) {
          const e = r(0, 0);
          e.id = "sync_".concat(g, "_").concat(Date.now()), e.src = d + "/setuid?bidder=" + g + "&uid=" + c, e.onload = y, l(e, document, "html");
        }
      }).catch(e => {
        y();
      })) : u() : u();
    } else _ || (_ = !0, setTimeout(m, 2e3));
    var i, s, n, p, u, o, a, g, y;
  }(y);
})();