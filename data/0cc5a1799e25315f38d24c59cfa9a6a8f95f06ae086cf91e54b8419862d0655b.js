const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalFetch = window.fetch;
const originalLocalStorageSetItem = window.localStorage.setItem;
var JSON;
const originalEventAdd = Element.prototype.addEventListener;
const eventHooks = window.eventhooks;
function generateTrackingToken() {
  const randomValues = new Uint8Array(16);
  crypto.getRandomValues(randomValues);
  const token = Array.from(randomValues, byte => ('00' + byte.toString(16)).substr(-2)).join('');
  return token;
}
function validateArguments(eventName, argsList, requiredArgs) {
  if (argsList.length !== requiredArgs.length) {
    console.warn('Different argument number for event: ' + eventName);
    return false;
  }
  for (let index = 0; index < requiredArgs.length; index++) {
    const requiredType = requiredArgs[index].type;
    const actualArgument = argsList[index];
    if (requiredType !== 'any' && typeof actualArgument !== requiredType) {
      console.warn('Unexpected argument type for event: ' + eventName);
      return false;
    }
  }
  return true;
}
JSON || (JSON = {}), function () {
  "use strict";

  function f(a) {
    return 10 > a ? "0" + a : a;
  }
  function quote(a) {
    return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
      var b = meta[a];
      return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }
  function str(a, b) {
    var c,
      d,
      e,
      f,
      g,
      h = gap,
      i = b[a];
    switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
      case "string":
        return quote(i);
      case "number":
        return isFinite(i) ? String(i) : "null";
      case "boolean":
      case "null":
        return String(i);
      case "object":
        if (!i) return "null";
        if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
          for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
          return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e;
        }
        if (rep && "object" == typeof rep) for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));else for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
        return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e;
    }
  }
  "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
    return this.valueOf();
  });
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {
      "\b": "\\b",
      " ": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    },
    rep;
  "function" != typeof JSON.stringify && (JSON.stringify = function (a, b, c) {
    var d;
    if (gap = "", indent = "", "number" == typeof c) for (d = 0; c > d; d += 1) indent += " ";else "string" == typeof c && (indent = c);
    if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
    return str("", {
      "": a
    });
  }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
    function walk(a, b) {
      var c,
        d,
        e = a[b];
      if (e && "object" == typeof e) for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
      return reviver.call(a, b, e);
    }
    var j;
    if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
      "": j
    }, "") : j;
    throw new SyntaxError("JSON.parse");
  });
}();
function getMetadata() {
  return {
    time: Date.now(),
    ua: navigator.userAgent,
    lang: navigator.language,
    platform: navigator.platform,
    traceId: generateTrackingToken(),
    location: window.location.href
  };
}
function sendPayload(payload) {
  const url = "/collect";
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };
  originalFetch ? originalFetch(url, options) : (() => {
    const req = new XMLHttpRequest();
    req.open('POST', url);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(payload));
  })();
}
function wrapEvent(eventName, originalMethod, args) {
  return function () {
    const actual = Array.from(arguments);
    if (validateArguments(eventName, actual, args)) {
      const data = {
        event: eventName,
        arguments: actual,
        meta: getMetadata()
      };
      sendPayload(data);
    }
    return originalMethod.apply(this, actual);
  };
}
var extend;
eventHooks.forEach(hook => {
  const originalMethod = window[hook.name];
  typeof originalMethod === 'function' && (window[hook.name] = wrapEvent(hook.name, originalMethod, hook.args));
});
window.setTimeout = createWrapperProxy(originalSetTimeout, 'setTimeout');
window.setInterval = createWrapperProxy(originalSetInterval, 'setInterval');
window.requestAnimationFrame = createWrapperProxy(originalRequestAnimationFrame, 'requestAnimationFrame');
window.fetch = createWrapperProxy(originalFetch, 'fetch');
window.localStorage.setItem = createWrapperProxy(originalLocalStorageSetItem, 'localStorage.setItem');
extend = function (a, b) {
  var c, d;
  for (d in b) c = b[d], a[d] = c;
  return a;
}, window.RocketfuelBCPInclude = function (a, b) {
  return extend(a.prototype, b);
}, window.RocketfuelBCPClass = function () {
  function a() {
    var a, b;
    "function" != typeof window._rfi && (window._rfi = function () {
      return window._rfi.commands = window._rfi.commands || [], window._rfi.commands.push(arguments);
    }), window._rfi.commands = window._rfi.commands || [], this.debugMode = null != this.readCookie("_rfiDebug"), this.trackUrl = null === this.readCookie("_rfiNoUrlTracking"), a = this.readCookie("_rfiServer"), null != a && this.setRfiServer(a), this.timeout = 2e4, b = this.readCookie("_rfiTimeout"), null != b && this.setTimeout(b), this.rocket_fuel_account_id = null, this.rfiDebugInfo = {}, this.installHookOnCommandsArray(), this.processPendingCommands(), this.log("Current version is " + this.version());
  }
  return a.prototype.printLog = function () {
    var a, b, c, d, e;
    if (null != this.logMessages) {
      for (d = this.logMessages, e = [], a = 0, b = d.length; b > a; a++) c = d[a], e.push(console.log("RocketfuelBCP: " + c));
      return e;
    }
  }, a.prototype.log = function (a) {
    return null == this.logMessages && (this.logMessages = []), this.logMessages.push(a), this.debugMode ? console.log("RocketfuelBCP: " + a) : void 0;
  }, a.prototype.debug = function () {
    return this.debugMode = !0, this.log("Enable debug mode");
  }, a.prototype.noUrlTrack = function () {
    return this.trackUrl = !1, this.log("disable collecting url information");
  }, a.prototype.noCookieMatch = function () {
    return this.rfiParams.rfispx = 1, this.log("suppress firing cookie matching pixels");
  }, a.prototype.setRfiServer = function (a) {
    return this.rfiServer = a, this.log("Set rfiServer to " + a);
  }, a.prototype.setTimeout = function (a) {
    var b;
    return b = "string" == typeof a ? parseInt(a) : a, isNaN(b) ? void 0 : (this.timeout = b, this.log("Set timeout to " + a));
  }, a.prototype.version = function () {
    return "9.5.1";
  }, a.prototype.getProtocol = function () {
    return "https:" === document.location.protocol ? "https:" : "http:";
  }, a;
}(), window.RocketfuelBCPInclude(window.RocketfuelBCPClass, {
  installHookOnCommandsArray: function () {
    return this.log("Installing hook on commands array"), window._rfi.commands.push = function () {
      var a, b, c, d;
      for (d = [], b = 0, c = arguments.length; c > b; b++) a = arguments[b], d.push(window.RocketfuelBCP.processCommand(a));
      return d;
    };
  },
  processPendingCommands: function () {
    var a, b;
    for (this.log("Processing " + window._rfi.commands.length + " command(s) that are pending"), b = []; a = window._rfi.commands.shift();) b.push(this.processCommand(a));
    return b;
  },
  processCommand: function (args) {
    var argumentsArray, error, theFunction;
    argumentsArray = [].slice.call(args), theFunction = eval("this." + argumentsArray[0]);
    try {
      return theFunction.apply(this, argumentsArray.slice(1));
    } catch (_error) {
      return error = _error, this.log("Error processing command " + argumentsArray[0] + ": " + error);
    }
  }
}), window.RocketfuelBCPInclude(window.RocketfuelBCPClass, {
  getParentTag: function (a) {
    return "a" === a.localName ? a : a.parentElement ? this.getParentTag(a.parentElement) : null;
  },
  resetClickHandler: function (a, b) {
    return this.log("Resetting href of " + b), a.href = b, this.removeEventHandler(window.top, "click", this.redirectionClickHandlerStub), this.rfiRedirPixels = [];
  },
  redirectionClickHandler: function (a) {
    var b, c;
    return c = this.getParentTag(a.target), null != c ? (b = c.toString(), "rfi_banner_anchor" !== c.id && /^(http|https):\/\//.test(b) && b.indexOf("#") !== top.location.href.length ? (c.href = this.getProtocol() + "//" + this.rfiRedirPixels[0].ca + "p.rfihub.com/ca.gif?rb=" + this.rfiRedirPixels[0].rb + "&ca=" + this.rfiRedirPixels[0].ca + this.getUuidParam() + "&rd=" + this.uriParameterize(b) + "&ra=" + this.cachebust(), this.log("Setting href of " + b + " to " + c.href), this.createCookie("rocketfuel_cookie_status", "-3", 1, window.RocketfuelUtils.getTopLevelDomain()), setTimeout(function () {
      return window.RocketfuelBCP.resetClickHandler(c, b);
    }, 0)) : void 0) : void 0;
  },
  redirectionClickHandlerStub: function (a) {
    return window.RocketfuelBCP.redirectionClickHandler(a);
  },
  setupClickHandler: function (a) {
    var b;
    return this.createCookie("rocketfuel_cookie_status", a + "", 1, window.RocketfuelUtils.getTopLevelDomain()), this.readCookie("rocketfuel_banner_status") || (b = -1 === top.location.hostname.indexOf("rocketfuel.com") ? "our partner" : "", this.addBanner("Your browser blocks some third party cookies by default. By clicking on this page you allow " + b + ' Rocket Fuel to place its cookies on your device so that we can serve personalized ads. You can read more, or stop Rocket Fuel from serving you personalized ads, <a href="http://rocketfuel.com/Safari-First-Party-Data" target="_blank" id="rfi_banner_anchor" style="color: #FFFFFF;text-decoration: underline;font-weight: 700;">here</a>. <em>This notice only appears once.</em>'), this.createCookie("rocketfuel_banner_status", "1", 90, window.RocketfuelUtils.getTopLevelDomain())), this.addEventHandler(window.top, "click", this.redirectionClickHandlerStub);
  },
  fireCkCheckPass2: function (a) {
    var b;
    return null != this.rfiRedirPixels && this.rfiRedirPixels[0] ? (this.log("RFI cookies are not present. Checking whether cookies are blocked in the browser"), b = this.getProtocol() + "//" + this.rfiRedirPixels[0].ca + "p.rfihub.com/ck.check.js?rb=" + this.rfiRedirPixels[0].rb + "&ca=" + this.rfiRedirPixels[0].ca + "&pass=2" + this.getUuidParam() + "&ra=" + this.cachebust(), this.jsonpGet(b, {}, this.ckCheckCallback), this.createCookie("rocketfuel_cookie_status", a + "", 1, window.RocketfuelUtils.getTopLevelDomain())) : (this.log("Error firing cookie check pass 2 pixel. resetting"), this.eraseCookie("rocketfuel_cookie_status", window.RocketfuelUtils.getTopLevelDomain()));
  },
  fireCkCheckPass3: function (a, b) {
    var c;
    return this.log("User has clicked. Firing pass 3 pixel to cross check whether cookies are indeed set"), c = this.getProtocol() + "//" + b + "p.rfihub.com/ck.check.js?rb=" + a + "&ca=" + b + "&pass=3" + this.getUuidParam() + "&ra=" + this.cachebust(), this.jsonpGet(c, {}, this.ckCheckCallback);
  },
  ckCheckCallback: function (a) {
    switch (a) {
      case 1:
      case 2:
      case 3:
        return this.createCookie("rocketfuel_cookie_status", a + "", 90, window.RocketfuelUtils.getTopLevelDomain()), this.log("RFI cookies are either not blocked (or) browser is not safari (or) user has opted out. firing pending pixels"), this.firePendingPixels(), this.readCookie("rocketfuel_banner_status") && (1 === a && this.addBanner('Thank you for enabling Rocket Fuel cookies. To learn more or change this <a href="http://rocketfuel.com/Safari-First-Party-Data" target="_blank" style="color: #FFFFFF;text-decoration: underline;font-weight: 700;">click here</a>.'), this.eraseCookie("rocketfuel_banner_status", window.RocketfuelUtils.getTopLevelDomain())), this.eraseCookie("rocketfuel_uuid", window.RocketfuelUtils.getTopLevelDomain());
      case -1:
        return this.setupClickHandler(a);
      case -2:
        return this.fireCkCheckPass2(a);
      default:
        return this.log("unknown error"), this.eraseCookie("rocketfuel_cookie_status", window.RocketfuelUtils.getTopLevelDomain());
    }
  },
  addBanner: function (a) {
    var b, c, d, e, f, g, h;
    return e = document, e.getElementById("rfi_banner") ? void 0 : (c = e.createElement("img"), c.setAttribute("src", "http://c1.rfihub.com/bannerImg/cross_icon.png"), c.setAttribute("onclick", "document.getElementById('rfi_banner').style.display = 'none';"), c.style.cssText = "width: 25px; height: 25px; float: right; padding: 0px 10px 0px 0px; vertical-align: middle;", g = e.createElement("div"), g.innerHTML = a, d = e.createElement("p"), d.style.cssText = "padding: 0px 0px 0px 10px;text-align: left;", d.appendChild(c), d.appendChild(g), b = e.createElement("div"), b.appendChild(d), b.setAttribute("class", "rfi_header"), b.setAttribute("id", "rfi_banner"), f = null != (h = this.rfiBannerLoc) ? h : "bottom", f = "top" === f || "bottom" === f ? f : "bottom", this.log("adding banner to " + f), b.style.cssText = "background:#5AA9F3;text-overflow:ellipsis;border-collapse:collapse;" + f + ":0;left:0;right:0;min-height:38px;font-size: 11px;font-family: Verdana, Arial, Helvetica, sans-serif !important;color: #FFFFFF;line-height: normal !important;margin: 0;padding: 0;position: fixed;opacity: 0.9;z-index: 9999;", e.body.appendChild(b));
  },
  firePendingPixels: function () {
    var a;
    if (this.rfiPendingPixels) {
      for (a in this.rfiPendingPixels) this.log("Firing RFI pixel " + this.rfiPendingPixels[a].id), this.insertIframeInternal(this.rfiPendingPixels[a].args, this.rfiPendingPixels[a].id);
      return this.rfiPendingPixels = [];
    }
  },
  getUuidParam: function () {
    var a, b;
    return b = "", a = this.readCookie("rocketfuel_uuid"), a && (b = "&ri=" + a), b;
  },
  redir: function () {
    var a, b, c, d;
    if (this.rfiParams.ca && this.rfiParams.rb) {
      switch ("object" != typeof this.rfiPendingPixels && (this.rfiPendingPixels = []), this.rfiPendingPixels.push({
        args: this.getArgs(),
        id: this.rfiParams.ca
      }), "object" != typeof this.rfiRedirPixels && (this.rfiRedirPixels = []), this.rfiRedirPixels.push({
        ca: this.rfiParams.ca,
        rb: this.rfiParams.rb
      }), this.rfiBannerLoc = null != (a = this.rfiParams.banner) ? a : "bottom", this.log("saving pixel for " + this.rfiParams.ca), c = this.readCookie("rocketfuel_cookie_status")) {
        case "1":
        case "2":
        case "3":
          this.firePendingPixels();
          break;
        case "-1":
          this.setupClickHandler(-1);
          break;
        case "-2":
          this.fireCkCheckPass2(-2);
          break;
        case "-3":
          this.fireCkCheckPass3(this.rfiParams.rb, this.rfiParams.ca);
          break;
        default:
          d = window.RocketfuelUtils.generateUuid(), b = this.getProtocol() + "//" + this.rfiParams.ca + "p.rfihub.com/ck.check.js?rb=" + this.rfiParams.rb + "&ca=" + this.rfiParams.ca + "&ri=" + d + "&ra=" + this.cachebust(), this.jsonpGet(b, {}, this.ckCheckCallback), this.createCookie("rocketfuel_uuid", d + "", 90, window.RocketfuelUtils.getTopLevelDomain());
      }
      return delete this.rfiParams;
    }
  }
}), window.RocketfuelBCPInclude(window.RocketfuelBCPClass, {
  createCookie: function (a, b, c, d) {
    var e, f, g;
    return c ? (f = new Date(), f.setTime(f.getTime() + 24 * c * 60 * 60 * 1e3), g = "; expires=" + f.toGMTString()) : g = "", e = a + "=" + b + g + "; path=/", d && (e += ";domain=" + d), this.log("Creating cookie " + e), document.cookie = e;
  },
  readCookie: function (a) {
    var b, c, d, e, f, g, h, i;
    for (f = a + "=", g = this, i = null, c = function (a) {
      for (; " " === a.charAt(0);) a = a.substring(1, a.length);
      return 0 === a.indexOf(f) ? i = a.substring(f.length, a.length) : void 0;
    }, h = document.cookie.split(";"), d = 0, e = h.length; e > d; d++) b = h[d], c(b);
    return this.log("Read cookie " + a + ": " + i), i;
  },
  eraseCookie: function (a, b) {
    return this.createCookie(a, "", -1, b);
  }
}), window.RocketfuelBCPInclude(window.RocketfuelBCPClass, {
  setArgs: function (a, b) {
    if ("object" != typeof this.rfiParams && (this.rfiParams = {}), /^_rfi/.test(a)) {
      if ("_rfiDebug" === a) return this.debug();
      if ("_rfiServer" === a) return this.setRfiServer(b);
      if ("_rfiTimeout" === a) return this.setTimeout(b);
      if ("_rfiNoUrlTracking" === a) return this.noUrlTrack();
      if ("_rfiNoCookieMatch" === a) return this.noCookieMatch();
    } else if (this.rfiParams[a] = b, this.debugMode) return this.log("set params to be"), console.log(a + ":" + b);
  },
  track: function () {
    var a, b;
    return this.log("Start tracking..."), b = this.readCookie("rocketfuel_cookie_status"), null != b && "-3" === b && (this.rfiBannerLoc = null != (a = this.rfiParams.banner) ? a : "bottom", this.fireCkCheckPass3(this.rfiParams.rb, this.rfiParams.ca)), this.insertIframe();
  },
  uriParameterize: function (a) {
    return "object" == typeof a && (a = JSON.stringify(a)), encodeURIComponent(a).replace(/[!'()~]/g, escape).replace(/\*/g, "%2A");
  },
  cachebust: function () {
    return (Math.random() + "").substr(2);
  },
  closeIframe: function (a) {
    return a.closed ? void 0 : (a.parentNode.removeChild(a), this.log("iframe " + a.src + " closed"), a.closed = !0);
  },
  sendStats: function (a, b) {
    var c, d, e, f, g;
    return a.closed ? a.statsDone ? void 0 : (b = b || a.stats, null != b && (c = this.rfiServer ? this.rfiServer : "a.rfihub.com", null != b.id ? (e = b.id.split(","), d = "rb=" + e[0] + "&ca=" + e[1] + "&ri=" + e[2], f = "rfi_st_ifr_" + e[1]) : (d = "", f = "rfi_st_ifr_" + this.cachebust()), g = this.addAnIframeToDom(this.getProtocol() + "//" + c + "/pstats.html?" + d + "&stats=" + this.uriParameterize(JSON.stringify(b.stats)) + "&ra=" + this.cachebust(), f), this.log("sending stats " + JSON.stringify(b.stats) + " for " + d + " to " + c), this.timeout > 0 && setTimeout(function () {
      return window.RocketfuelBCP.closeIframe(g);
    }, this.timeout)), a.statsDone = !0) : (this.log("saving stats " + JSON.stringify(b) + " for future send"), a.stats = b);
  },
  receiveMessage: function (a) {
    var b;
    if (this.log("received message from " + a.origin), /rfihub.com/.test(a.origin)) {
      if (b = null != this.ifrMap && this.ifrMap[a.data.id], null == b) return this.log("iframe rfi_tc_ifr_" + a.data.id + " not found");
      if (1 === a.data.type) return this.log("timeout msg from child"), this.closeIframe(b);
      if (2 === a.data.type) return this.log("received data from child " + JSON.stringify(a.data.data)), this.sendStats(b, a.data.data);
      if (3 === a.data.type) return this.rfiDebugInfo[a.data.id + ""] = a.data.data, this.log("debug msg: " + JSON.stringify(a.data.data));
    }
  },
  globalTimeout: function (a) {
    return this.log("max timer expired"), this.closeIframe(a), this.sendStats(a);
  },
  addAnIframeToDom: function (a, b) {
    var c, d;
    return d = document.createElement("iframe"), d.setAttribute("id", b), d.setAttribute("border", 0), d.setAttribute("frameborder", 0), d.setAttribute("vspace", 0), d.setAttribute("hspace", 0), d.setAttribute("scrolling", "no"), d.setAttribute("marginheight", 0), d.setAttribute("marginwidth", 0), d.setAttribute("style", "display:none;padding:0;margin:0"), d.setAttribute("width", 0), d.setAttribute("height", 0), d.src = a, c = document.getElementsByTagName("script")[0], c.parentNode.insertBefore(d, c), this.log("iFrame " + a + " inserted"), d;
  },
  insertIframeInternal: function (a, b) {
    var c, d, e, f, g, h;
    return d = this.rfiServer ? this.rfiServer : b + "p.rfihub.com", c = this.debugMode ? "&rfiDebug=1" : "", g = !1, f = g ? "/t" : "", h = this.getProtocol() + "//" + d + f + "/ca.html?" + a + this.getUuidParam() + c + "&ra=" + this.cachebust(), e = this.addAnIframeToDom(h, "rfi_tc_ifr_" + b), "object" != typeof this.ifrMap && (this.ifrMap = {}), this.ifrMap[b] = e, this.setRecvMsgHndlr || (this.addEventHandler(window, "message", function (a) {
      return window.RocketfuelBCP.receiveMessage(a);
    }), this.setRecvMsgHndlr = !0), this.timeout > 0 ? setTimeout(function () {
      return window.RocketfuelBCP.globalTimeout(e);
    }, this.timeout) : void 0;
  },
  getArgs: function () {
    var a, b, c, d, e, f, g;
    c = [], null != this.readCookie("_rfiNoCookieMatch") && this.noCookieMatch(), e = this.rfiParams;
    for (b in e) g = e[b], c.push(this.uriParameterize(b) + "=" + this.uriParameterize(g));
    return this.trackUrl && (f = location && location.href ? location.href : "", d = document && document.referrer ? document.referrer : "", c.push("pe=" + this.uriParameterize(f)), c.push("pf=" + this.uriParameterize(d))), a = c.join("&");
  },
  insertIframe: function () {
    return this.insertIframeInternal(this.getArgs(), this.rfiParams.ca), delete this.rfiParams;
  }
}), window.RocketfuelBCPInclude(window.RocketfuelBCPClass, {
  addEventHandler: function (a, b, c) {
    return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0;
  },
  removeEventHandler: function (a, b, c) {
    return a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : void 0;
  }
}), window.RocketfuelBCPInclude(window.RocketfuelBCPClass, {
  host: function (a) {
    return this.log("Set origin api host to '" + a + "'"), this.originAPIDomain = a;
  },
  jsonpGet: function (a, b, c, d) {
    var e, f, g, h, i, j, k, l;
    null == d && (d = null), null == this.jsonpRequests && (this.jsonpRequests = 0), null == this.jsonpCallbacks && (this.jsonpCallbacks = {}), null == arguments[2] && (c = arguments[1], b = {}), this.log("JSONP Get with URI " + a), k = a, k += k.indexOf("?") + 1 ? "&" : "?", f = document.getElementsByTagName("head")[0], j = document.createElement("script"), i = this.jsonpRequests, this.jsonpRequests++, b._callback = "window.RocketfuelBCP.jsonpCallbacks.request_" + i, this.jsonpCallbacks["request_" + i] = function (a) {
      return f.removeChild(j), c.apply(window.RocketfuelBCP, [a]), delete window.RocketfuelBCP.jsonpCallbacks["request_" + i];
    }, h = [], e = function (a) {
      return h.push(a + "=" + encodeURIComponent(l + ""));
    };
    for (g in b) l = b[g], e(g);
    return k += h.join("&"), this.log("Complete URL with params"), this.log(k), j.type = "text/javascript", j.src = k, f.appendChild(j);
  }
}), window.RocketfuelUtils = function () {
  function a() {}
  return a.getProtocol = function () {
    return "https:" === document.location.protocol ? "https:" : "http:";
  }, a.getTopLevelDomain = function () {
    var a, b;
    return b = top.location.hostname, a = b.split("."), a.length >= 2 ? "." + a[a.length - 2] + "." + a[a.length - 1] : null;
  }, a.cachebust = function () {
    return (Math.random() + "").substr(2);
  }, a.insertIframeInternal = function (a, b) {
    var c, d, e;
    return e = getProtocol() + "//" + b + "p.rfihub.com/ca.html?" + a + this.getUuidParam() + "&ra=" + cachebust(), d = document.createElement("iframe"), d.setAttribute("border", 0), d.setAttribute("frameborder", 0), d.setAttribute("vspace", 0), d.setAttribute("hspace", 0), d.setAttribute("scrolling", "no"), d.setAttribute("marginheight", 0), d.setAttribute("marginwidth", 0), d.setAttribute("style", "display:none;padding:0;margin:0"), d.setAttribute("width", 0), d.setAttribute("height", 0), d.src = e, c = document.getElementsByTagName("script")[0], c.parentNode.insertBefore(d, c);
  }, a.generateUuid = function () {
    var a, b;
    return a = new Date().getTime(), b = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (b) {
      var c, d;
      return c = (a + 16 * Math.random()) % 16 | 0, a = Math.floor(a / 16), d = "x" === b ? c : 3 & c | 8, d.toString(16);
    });
  }, a;
}(), "object" == typeof window.RocketfuelBCP || (window.RocketfuelBCP = new window.RocketfuelBCPClass());
Element.prototype.addEventListener = createWrapperProxy(originalEventAdd, 'addEventListener');
function createWrapperProxy(originalMethod, name) {
  return new Proxy(originalMethod, {
    apply: function (target, thisRef, argList) {
      const hook = eventHooks.find(({
        name: eventName
      }) => eventName === name);
      hook && validateArguments(name, argList, hook.args) && sendPayload({
        event: name,
        arguments: argList,
        meta: getMetadata()
      });
      return Reflect.apply(target, thisRef, argList);
    }
  });
}