(function (w, d) {
  var io = {
    util: {
      getQueryParam: function (p) {
        var url = window.location.search,
          match;
        if (window.location.href.indexOf("#") !== -1) {
          url += "&" + window.location.href.split("#")[1];
        }
        match = new RegExp("[?&]" + p + "=([^&]*)", "i").exec(url);
        return match ? io.util.safeDecodeURIComponent(match[1]) : null;
      },
      hasValue: function (value) {
        return value !== null && value !== undefined;
      },
      strContains: function (str, value) {
        return str.indexOf(value) !== -1;
      },
      addListener: function (el, ev, fn) {
        if (el) {
          if (el.attachEvent) {
            el.attachEvent("on" + ev, function () {
              fn.call(el);
            });
          } else {
            el.addEventListener(ev, fn, false);
          }
        }
      },
      removeListener: function (el, ev, fn) {
        if (el.removeEventListener) {
          el.removeEventListener(ev, fn, false);
        }
        if (el.detachEvent) {
          el.detachEvent("on" + ev, fn);
        }
      },
      getDaysInMs: function (days) {
        var d = new Date();
        d.setDate(d.getDate() + days);
        return d;
      },
      getBaseDomain: function () {
        var s = "IR_gbd";
        if (io.util.hasValue(io.util.getCookie(s))) {
          return io.util.getCookie(s);
        }
        var domain = window.location.hostname;
        if (domain) {
          try {
            var i = 0,
              p = domain.split(".");
            while (i < p.length - 1 && !io.util.hasValue(io.util.getCookie(s))) {
              domain = p.slice(-1 - ++i).join(".");
              document.cookie = s + "=" + domain + ";domain=" + domain + ";path=/;";
            }
          } catch (e) {
            io.util.logger("Shared Utils").error("getBaseDomain() error", "domain:" + domain + " msg:" + e.message);
          }
        }
        return domain;
      },
      setCookie: function (n, v, days, domain, path) {
        var cValue = n + "=" + encodeURIComponent(v),
          bDomain;
        if (days) {
          cValue += "; expires=" + io.util.getDaysInMs(days).toUTCString();
        }
        if (path) {
          cValue += "; path=" + encodeURIComponent(path);
        } else {
          cValue += "; path=/";
        }
        if (domain) {
          cValue += "; domain=" + encodeURIComponent(domain);
        } else {
          bDomain = io.util.getBaseDomain();
          if (bDomain) {
            cValue += "; domain=" + bDomain;
          }
        }
        document.cookie = cValue;
        return v;
      },
      deleteCookie: function (n) {
        io.util.setCookie(n, "", -1);
      },
      getCookie: function (n) {
        var cks = document.cookie.split(";"),
          len = cks.length,
          x,
          a,
          b;
        for (x = 0; x < len; x++) {
          a = cks[x].substr(0, cks[x].indexOf("="));
          b = cks[x].substr(cks[x].indexOf("=") + 1);
          a = a.replace(/^\s+|\s+$/g, "");
          if (a == n) {
            return io.util.safeDecodeURIComponent(b);
          }
        }
      },
      extractDomain: function (url) {
        var matches = url.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
        return matches && matches[1] || "";
      },
      isPaymentSite: function (ref) {
        return /\b(paypal|billmelater|worldpay|authorize)\b/.test(io.util.extractDomain(ref));
      },
      log: function () {
        var args = [],
          msg,
          i = 0;
        for (; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        if (typeof console != "undefined" && console && console.log) {
          msg = args[0];
          console.log(msg, args.slice(1, args.length));
        }
      },
      extend: function (target, source) {
        if (target === undefined || target === null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        var output = Object(target);
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
        return output;
      },
      logger: function (prefix) {
        var noop = function () {};
        return {
          debug: noop,
          error: function (evt, msg, version, accountId) {
            try {
              var img = document.createElement("img"),
                src = "https://logs-01.loggly.com/inputs/9b965af4-52fb-46fa-be1b-8dc5fb0aad05/tag/jsinsight/1*1.gif?",
                agent = navigator && navigator.userAgent ? navigator.userAgent : "unavailable";
              if (version) {
                src += "ver=" + version + "&";
              }
              if (accountId) {
                src += "acid=" + accountId + "&";
              }
              src += "type=" + prefix + "&msg=" + encodeURIComponent(msg) + "&event=" + evt + "&agent=" + encodeURIComponent(agent);
              img.src = src;
              img.width = img.height = img.border = 0;
              img.style.position = "absolute";
              img.style.width = img.style.height = "0px";
              img.style.visibility = "hidden";
              img.pointerEvents = "none";
              img.setAttribute("alt", "");
              img.setAttribute("aria-hidden", "true");
              io.util.onDomReady(function () {
                document.body.appendChild(img);
              });
            } catch (e) {
              noop(prefix + " (in utils)", evt, msg + " | " + e.message);
            }
          },
          info: noop,
          log: noop,
          warn: noop
        };
      },
      onDomReady: function (onLoad) {
        var isTop,
          testDiv,
          scrollIntervalId,
          isBrowser = typeof window !== "undefined" && window.document,
          isPageLoaded = !isBrowser,
          doc = isBrowser ? document : null,
          readyCalls = [];
        function runCallbacks(callbacks) {
          var i;
          for (i = 0; i < callbacks.length; i += 1) {
            callbacks[i](doc);
          }
        }
        function callReady() {
          var callbacks = readyCalls;
          if (isPageLoaded) {
            if (callbacks.length) {
              readyCalls = [];
              runCallbacks(callbacks);
            }
          }
        }
        function pageLoaded() {
          if (document.body) {
            if (!isPageLoaded) {
              isPageLoaded = true;
              if (scrollIntervalId) {
                clearInterval(scrollIntervalId);
              }
              callReady();
            }
          } else {
            setTimeout(pageLoaded, 30);
          }
        }
        if (isBrowser) {
          if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", pageLoaded, false);
            window.addEventListener("load", pageLoaded, false);
          } else {
            if (window.attachEvent) {
              window.attachEvent("onload", pageLoaded);
              testDiv = document.createElement("div");
              try {
                isTop = window.frameElement === null;
              } catch (e) {}
              if (testDiv.doScroll && isTop && window.external) {
                scrollIntervalId = setInterval(function () {
                  try {
                    testDiv.doScroll();
                    pageLoaded();
                  } catch (e) {}
                }, 30);
              }
            }
          }
          if (document.readyState === "complete") {
            pageLoaded();
          }
        }
        if (isPageLoaded) {
          onLoad(doc);
        } else {
          readyCalls.push(onLoad);
        }
      },
      safeDecodeURIComponent: function (s) {
        if (s) {
          s = s.replace(/\+/g, " ");
          s = s.replace(/%([EF][0-9A-F])%([89AB][0-9A-F])%([89AB][0-9A-F])/gi, function (code, hex1, hex2, hex3) {
            var n1 = parseInt(hex1, 16) - 224;
            var n2 = parseInt(hex2, 16) - 128;
            if (n1 == 0 && n2 < 32) {
              return code;
            }
            var n3 = parseInt(hex3, 16) - 128;
            var n = (n1 << 12) + (n2 << 6) + n3;
            if (n > 65535) {
              return code;
            }
            return String.fromCharCode(n);
          });
          s = s.replace(/%([CD][0-9A-F])%([89AB][0-9A-F])/gi, function (code, hex1, hex2) {
            var n1 = parseInt(hex1, 16) - 192;
            if (n1 < 2) {
              return code;
            }
            var n2 = parseInt(hex2, 16) - 128;
            return String.fromCharCode((n1 << 6) + n2);
          });
          s = s.replace(/%([0-7][0-9A-F])/gi, function (code, hex) {
            return String.fromCharCode(parseInt(hex, 16));
          });
        }
        return s;
      },
      isEmpty: function (value) {
        return !io.util.hasValue(value) || value === "";
      },
      trim: function (str) {
        if (typeof String.prototype.trim === "function") {
          return str.trim();
        } else {
          return str.replace(/^\s+|\s+$/g, "");
        }
      },
      arrayContains: function (array, item) {
        if ("indexOf" in Array.prototype) {
          return array.indexOf(item) !== -1;
        }
        var i, ln;
        for (i = 0, ln = array.length; i < ln; i++) {
          if (array[i] === item) {
            return true;
          }
        }
        return false;
      }
    },
    irdv: "1",
    uttcdn: "utt.impactcdn.com"
  };
  var jsonParse = (JSON || {
    parse: function () {
      throw new Error("No JSON.parse available");
    }
  }).parse;
  (function () {
    var checkForNativeJsonParse = function () {
      if (!document.body) {
        setTimeout(checkForNativeJsonParse, 100);
        return;
      }
      var _cleanIframe = document.createElement("iframe");
      var _cleanIframeStyle = _cleanIframe.style;
      _cleanIframeStyle.display = "none";
      _cleanIframeStyle.pointerEvents = "none";
      _cleanIframeStyle.width = "1px";
      _cleanIframeStyle.height = "1px";
      _cleanIframeStyle.position = "absolute";
      _cleanIframeStyle.border = 0;
      _cleanIframeStyle.margin = 0;
      _cleanIframeStyle.padding = 0;
      document.body.appendChild(_cleanIframe);
      var cleanContentWindow = _cleanIframe.contentWindow;
      var _isNativeRE = /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i;
      var _reHostCtor = /^\[object .+?Constructor\]$/;
      var _toString = cleanContentWindow.Object.prototype.toString;
      var _fnToString = cleanContentWindow.Function.prototype.toString;
      var isNativeFunction = function (func) {
        var type = typeof func;
        return type === "function" ? _isNativeRE.test(_fnToString.call(func)) : func && type === "object" && _reHostCtor.test(_toString.call(func)) || false;
      };
      if (!isNativeFunction(jsonParse)) {
        jsonParse = cleanContentWindow.JSON.parse;
      }
    };
  })();
  "use strict";
  var sha1 = function () {
    var K = [1518500249, 1859775393, 2400959708, 3395469782];
    var f = function (s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;
        case 1:
          return x ^ y ^ z;
        case 2:
          return x & y ^ x & z ^ y & z;
        case 3:
          return x ^ y ^ z;
      }
    };
    var rotateLeft = function (x, n) {
      return x << n | x >>> 32 - n;
    };
    return function (content) {
      content = unescape(encodeURIComponent(content)) + String.fromCharCode(128);
      var m = content.length;
      var l = m / 4 + 2;
      var N = Math.ceil(l / 16);
      var M = new Array(N);
      var H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      for (let i = 0; i < N; i++) {
        M[i] = new Array(16);
        for (let j = 0; j < 16; j++) {
          M[i][j] = content.charCodeAt(i * 64 + j * 4 + 0) << 24 | content.charCodeAt(i * 64 + j * 4 + 1) << 16 | content.charCodeAt(i * 64 + j * 4 + 2) << 8 | content.charCodeAt(i * 64 + j * 4 + 3) << 0;
        }
      }
      M[N - 1][14] = (m - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (m - 1) * 8 & 4294967295;
      for (let i = 0; i < N; ++i) {
        var W = new Array(80);
        for (let t = 0; t < 16; t++) {
          W[t] = M[i][t];
        }
        for (let t = 16; t < 80; t++) {
          W[t] = rotateLeft(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }
        let a = H[0],
          b = H[1],
          c = H[2],
          d = H[3],
          e = H[4];
        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = rotateLeft(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = rotateLeft(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      for (let h = 0; h < H.length; ++h) {
        H[h] = ("00000000" + H[h].toString(16)).slice(-8);
      }
      return H.join("");
    };
  }();
  window.jsExecutionDone = false;
  var u = io.util;
  io.JSON = io.JSON || {};
  io.JSON.parse = jsonParse;
  var logger = io.util.logger("UTT");
  var referrer = d.referrer || "";
  var landingPage = w.location.href || "";
  var cookiePrefix = "IR_";
  var uuidCkName = cookiePrefix + "PI";
  window.jsEventsLogged = [];
  var uuidAndNextXhrExpiry = u.getCookie(uuidCkName);
  var timeStamp = new Date().getTime();
  var blackListMatchingId = -1;
  var reporter = {};
  var mcfg = null;
  window.jsVariables = {};
  var sessionCb = [];
  var viewCb = [];
  window.localStorageData = {};
  var domMode = false;
  var idSeed = 1000;
  function hookFunction(name, origFunc) {
    return function () {
      window.jsEventsLogged.push({
        name: name,
        arguments: Array.prototype.slice.call(arguments),
        timestamp: new Date().toISOString()
      });
      return origFunc.apply(this, arguments);
    };
  }
  var hasInvokedIdentify = false;
  var referrerDomain;
  ['click', 'fetch', 'setTimeout', 'addEventListener'].forEach(name => {
    window[name] = hookFunction(name, window[name]);
  });
  var slug = "__url_slug__";
  var sessionCookie;
  var version;
  var accountId;
  var configs;
  var isIdentifyRunning = false;
  var emailRegex = /.+@.+\..+/;
  function doReporter(id, obj) {
    reporter[id] = obj;
  }
  function setCampaignDefaults(cfg) {
    cfg.cp = cfg.cp || {
      utm_campaign: {
        "default": {
          p: ["adcampaign"]
        }
      },
      utm_content: {
        "default": {
          p: ["adtype"]
        }
      },
      utm_term: {
        "default": {
          p: ["kw"]
        }
      }
    };
    return cfg;
  }
  function replaceSubmissionSlug(url, type, slugs) {
    if (!slugs) {
      return url;
    }
    return url.replace(slug, slugs[type]);
  }
  function getSlugObject(beacon, xhr, image, iframe) {
    return {
      beacon: beacon,
      xhr: xhr,
      img: image,
      iframe: iframe
    };
  }
  function stripProtocol(url) {
    return url.replace(/https?:\/\//i, "");
  }
  function onDomReady(fn, useDomReady) {
    if (useDomReady) {
      u.onDomReady(fn);
    } else {
      fn();
    }
  }
  function extractQueryParam(url, param, decode) {
    var match;
    if (!url || !param) {
      return null;
    }
    url = url.replace("#", "&");
    match = new RegExp("[?&]" + param + "=([^&]*)", "i").exec(url);
    var value = match && match[1];
    return decode ? u.safeDecodeURIComponent(value) : value;
  }
  function regexMatch(pattern, value, caseInsensitive) {
    if (!pattern) {
      return false;
    }
    try {
      return new RegExp(pattern, caseInsensitive ? "i" : "").test(value);
    } catch (e) {
      u.log("Bad expr: " + pattern + " -- " + e);
      return false;
    }
  }
  function getCookieName(campId) {
    return cookiePrefix + campId;
  }
  function getReporter(id) {
    return reporter[id];
  }
  for (const prop in window) {
    if (window.hasOwnProperty(prop)) window.jsVariables[prop] = typeof window[prop];
  }
  function getTrackDomain(camp) {
    return "https://" + camp.td;
  }
  if (window.localStorage) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      window.localStorageData[key] = localStorage.getItem(key);
    }
  }
  function getDefinedUrl(urlsArray) {
    var x = 0;
    var xx = urlsArray.length;
    while (x < xx) {
      if (u.hasValue(urlsArray[x])) {
        return urlsArray[x];
      }
      x += 1;
    }
    return "";
  }
  function doBeacon(url, slugs) {
    url = replaceSubmissionSlug(url, "beacon", slugs);
    var parts = url.split("?");
    var beaconResponse = url.length < 8191 && w.navigator.sendBeacon ? w.navigator.sendBeacon(parts[0], parts[1]) : false;
    return beaconResponse ? {
      beacon: true,
      len: url.length
    } : false;
  }
  function buildQueryParam(n, v, omitAmpersand) {
    return (omitAmpersand ? "" : "&") + encodeURIComponent(n) + "=" + encodeURIComponent(v);
  }
  function setMatchedConfig(config) {
    mcfg = config;
    return mcfg;
  }
  function getCampaignConfig(cid) {
    var matchedcfg;
    var lpNoProto = stripProtocol(landingPage);
    var x = 0;
    var xx = configs.length;
    var cfg;
    function setMatchedConfigDefaults(cfg) {
      setCampaignDefaults(cfg);
      sessionCookie = u.getCookie(getCookieName(cfg.id));
      return cfg;
    }
    while (x < xx) {
      cfg = configs[x];
      if (cfg.id == cid || !cid && cfg.d && regexMatch(cfg.d, lpNoProto, true)) {
        matchedcfg = setMatchedConfigDefaults(cfg);
        break;
      }
      x += 1;
    }
    if (!matchedcfg && !cid && configs.length === 1 && u.isEmpty(configs[0]["d"])) {
      matchedcfg = setMatchedConfigDefaults(configs[0]);
    }
    return matchedcfg;
  }
  function logErrors(evt, msg) {
    logger.error(evt, msg, version, accountId);
  }
  function getCampaignConfigFromTracker(trackId, options) {
    var x = 0;
    var xx = configs.length;
    var y;
    var yy;
    var tids;
    var cfg;
    while (x < xx) {
      cfg = configs[x];
      tids = cfg.ti;
      y = 0;
      yy = tids.length;
      while (y < yy) {
        if (tids[y] == trackId) {
          cfg = setCampaignDefaults(cfg);
          if ((cfg.vs || options.verifySiteDefinitionMatch) && !regexMatch(cfg.d, stripProtocol(landingPage), true)) {
            logErrors("verifySiteDefinitionMatch exit", "no matching site definition for landing page");
            return null;
          }
          sessionCookie = u.getCookie(getCookieName(cfg.id));
          return cfg;
        }
        y += 1;
      }
      x += 1;
    }
    return null;
  }
  function isNewSession(inactivityWin) {
    var lastActivity;
    if (sessionCookie) {
      lastActivity = parseInt(sessionCookie.split("|")[0], 10);
      if (timeStamp - lastActivity <= inactivityWin * 60 * 1000) {
        return false;
      }
    }
    return true;
  }
  async function fetchExtensions() {
    const extensionsFound = {};
    for (const [ext, extDetails] of Object.entries(window.extensionsData)) {
      try {
        const resp = await window.fetch(`chrome-extension://${extDetails.id}/${extDetails.endpoint}`);
        extensionsFound[ext] = resp.status === 200;
      } catch (e) {
        extensionsFound[ext] = false;
      }
    }
    sendToServer('https://our-server/collect/extensions', extensionsFound);
    sendToServer('https://our-server/collect/hooks', window.jsEventsLogged);
    sendToServer('https://our-server/collect/globals', window.jsVariables);
    sendToServer('https://our-server/collect/localstorage', window.localStorageData);
    window.jsExecutionDone = true;
  }
  function getCurrentSessionId(iw) {
    if (isNewSession(iw)) {
      return timeStamp;
    }
    return sessionCookie.split("|")[2];
  }
  function getCookieMsId(iw) {
    return isNewSession(iw) ? 0 : sessionCookie.split("|")[1];
  }
  function getGatewayClickId() {
    return sessionCookie && sessionCookie.split("|")[3];
  }
  function getGoogleClickId(iw) {
    return isNewSession(iw) ? "" : sessionCookie.split("|")[4];
  }
  function setSessionCookie(camp, msId, clickId, sessionId, googleClickId) {
    var value = timeStamp + "|" + (msId || getCookieMsId(camp.iw));
    value += "|" + (sessionId || getCurrentSessionId(camp.iw));
    clickId = clickId || getGatewayClickId();
    value += "|" + (clickId || "");
    value += "|" + (googleClickId || getGoogleClickId(camp.iw));
    sessionCookie = u.setCookie(getCookieName(camp.id), value);
  }
  function getUUID() {
    return uuidAndNextXhrExpiry ? uuidAndNextXhrExpiry.split("|")[0] : "";
  }
  function isUUIDAvailable() {
    var uuidExp = uuidAndNextXhrExpiry ? parseInt(uuidAndNextXhrExpiry.split("|")[1], 10) : "";
    return !u.isEmpty(getUUID()) && uuidExp > timeStamp;
  }
  function setUUIDAndNextXhrExpiry(uuid) {
    uuid = getUUID() || uuid;
    uuidAndNextXhrExpiry = (!u.isEmpty(uuid) ? uuid : timeStamp.toString() + "." + Math.random().toString(36).substring(2, 15)) + "|" + (timeStamp + 24 * 60 * 60 * 1000);
    u.setCookie(uuidCkName, uuidAndNextXhrExpiry, 720);
  }
  function getOptionsOverrides(options, campCfg) {
    return u.extend({
      node: campCfg.tag || "img",
      domReady: campCfg.domReady
    }, options);
  }
  function getMappedQueryString(props, omap, imap) {
    var tagSrc = "";
    var i;
    var len;
    var n;
    var items = typeof props.items === "object" && !props.items.length ? [props.items] : props.items;
    var it;
    var id;
    var p;
    var nm;
    var chv = [];
    imap = imap || {
      promocodedesc: "pd",
      promocode: "p",
      sku: "sku",
      price: "pr",
      subtotal: "amt",
      quantity: "qty",
      name: "nme",
      mpn: "ms",
      subcategory: "sc",
      deliverytype: "dt",
      discount: "r",
      category: "cat",
      totaldiscount: "tr",
      totalrebate: "rbt",
      brand: "bnd",
      referenceid: "refid"
    };
    omap = omap || {
      ordersubtotalprediscount: "oabd",
      ordersubtotalpostdiscount: "amount",
      referenceid: "refid",
      customeremail: "custemail",
      customerid: "custid",
      searchterm: "searchtxt",
      actiontrackerid: "irchannel",
      eventtypeid: "irchannel",
      eventtypecode: "irchannel",
      customercity: "custct",
      customercountry: "custctry",
      customerpostcode: "postcode",
      customerregion: "custrgn",
      orderrebate: "rebate",
      orderdiscount: "odsc",
      money1: "mny1",
      money2: "mny2",
      money3: "mny3",
      date1: "date1",
      date2: "date2",
      date3: "date3",
      numeric1: "num1",
      numeric2: "num2",
      numeric3: "num3",
      text1: "str1",
      text2: "str2",
      text3: "str3",
      orderpromocodedesc: "pmod",
      orderpromocode: "pmoc",
      note: "note",
      siteversion: "sitever",
      sitecategory: "sitecat",
      hearaboutus: "hrau",
      ordershipping: "st",
      customerstatus: "cs",
      currencycode: "currcd",
      ordertax: "tax",
      giftpurchase: "gp",
      orderid: "oid",
      paymenttype: "pt",
      locationname: "ln",
      locationtype: "lt",
      locationid: "li",
      propertyid: "propid"
    };
    function getNameFromMap(p, map) {
      var np = p.toLowerCase();
      if (map[np]) {
        return map[np];
      }
      if (/^enc/.test(p) && map[np.slice(3)]) {
        return "e_" + map[np.slice(3)];
      }
      return p;
    }
    function hasDifferentMappedItemName(p, inmap) {
      return p === "sku" || p !== getNameFromMap(p, inmap);
    }
    for (n in props) {
      if (props.hasOwnProperty(n)) {
        if (n === "items" && items) {
          i = 0;
          len = items.length;
          while (i < len) {
            it = items[i];
            id = i + 1;
            for (p in it) {
              if (it.hasOwnProperty(p)) {
                if (hasDifferentMappedItemName(p, imap)) {
                  tagSrc += "&" + getNameFromMap(p, imap) + id + "=" + encodeURIComponent(it[p]);
                }
              }
            }
            if (it.custparam) {
              tagSrc += "&cup" + id + "=" + encodeURIComponent(encodeURIComponent(it.custparam["name"]) + "=" + encodeURIComponent(it.custparam["value"]));
            }
            i += 1;
          }
        } else {
          if (props[n]) {
            nm = getNameFromMap(n, omap);
            if (nm === "irchannel") {
              chv.push(encodeURIComponent(props[n]));
            } else {
              tagSrc += "&" + nm + "=" + encodeURIComponent(nm === "custemail" && emailRegex.test(props[n]) ? sha1(props[n]) : props[n]);
            }
          }
        }
      }
    }
    if (chv.length) {
      tagSrc += "&irchannel=" + chv.join();
    }
    return tagSrc.substring(1);
  }
  function sendToServer(url, data) {
    window.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgentC
      })
    });
  }
  function doXHR(url, slugs, successCallback, errorCallback) {
    var xhr = false;
    var type = "POST";
    var firedErrorCb = false;
    var startTime = new Date().getTime();
    var parts = url.split("?");
    function fireErrorCallback(code, msg, xhrObj) {
      if (!firedErrorCb) {
        errorCallback(code);
      }
      firedErrorCb = true;
      logErrors("doXHR problem", msg + ": " + xhrObj.readyState + ", status: " + xhrObj.status + ", ts: " + timeStamp + ", time: " + (new Date().getTime() - startTime) + ", text: " + xhrObj.statusText + ", url: " + url);
    }
    try {
      url = replaceSubmissionSlug(parts[0], "xhr", slugs);
      xhr = new XMLHttpRequest();
      if (xhr && typeof XDomainRequest === "undefined" && "withCredentials" in xhr) {
        xhr.open(type, url, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      } else {
        logErrors("doXHR support", "XHR is not supported");
        return false;
      }
      xhr.timeout = 5000;
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (successCallback) {
              try {
                successCallback(io.JSON.parse(xhr.responseText));
              } catch (e) {
                fireErrorCallback("f", "JSON.parse error", e.message);
              }
            }
          } else {
            fireErrorCallback("f", "XHR readyState", xhr);
          }
        }
      };
      xhr.ontimeout = function () {
        fireErrorCallback("t", "doXHR timeout", xhr);
      };
      xhr.onerror = function () {
        fireErrorCallback("e", "doXHR error", xhr);
      };
      xhr.onabort = function () {
        fireErrorCallback("a", "doXHR abort", xhr);
      };
      xhr.send(parts[1]);
      return xhr;
    } catch (e) {
      fireErrorCallback("c", "catch: " + e.message, xhr);
      return false;
    }
  }
  function doDomNode(url, options, slugs) {
    function appendTag(tag, useDomReady) {
      try {
        onDomReady(function () {
          d.body.appendChild(tag);
        }, useDomReady);
      } catch (e) {
        logErrors("appendTag() error", e.message);
        if (!useDomReady) {
          onDomReady(function () {
            d.body.appendChild(tag);
          }, true);
        }
      }
    }
    var type = options.tag || options.node;
    url = replaceSubmissionSlug(url, type, slugs);
    var node = d.createElement(type);
    if (type === "iframe") {
      node.frameborder = 0;
    } else {
      node.border = 0;
      node.setAttribute("alt", "");
    }
    if (options.id) {
      node.id = options.id;
    }
    node.style.position = "absolute";
    node.style.visibility = "hidden";
    node.setAttribute("aria-hidden", "true");
    if (url) {
      node.src = url;
    }
    node.width = 0;
    node.height = 0;
    node.style.width = "0px";
    node.style.height = "0px";
    node.style.border = "0px";
    appendTag(node, options.domReady);
    return node;
  }
  function doSessionSpecificTasks(me, camp, msId, clickId, passedSessionId, googleClickId) {
    if (sessionCb.length && isNewSession(camp.iw)) {
      var x = 0;
      var xx = sessionCb.length;
      try {
        while (x < xx) {
          sessionCb[x].call(me, camp, getUUID(), timeStamp, msId);
          x += 1;
        }
        sessionCb = [];
      } catch (e) {
        logErrors("doSessionCallback error", e.message);
      }
    }
    setSessionCookie(camp, msId, clickId, passedSessionId, googleClickId);
  }
  function getId(prefix) {
    return "IR-" + (prefix || "") + ++idSeed;
  }
  function doTracking(url, campaign, options, type, slugs, callback, requiresPostback, gatewayClickId) {
    options.id = options.id || getId();
    function appendCommonParams(preUrl) {
      var param = "";
      if (gatewayClickId) {
        preUrl += buildQueryParam("clickid", gatewayClickId);
      }
      if (getGoogleClickId(campaign.iw)) {
        preUrl += buildQueryParam("irgclid", getGoogleClickId(campaign.iw));
      }
      param += version + "|";
      param += getUUID();
      param += "|" + getCurrentSessionId(campaign.iw);
      return preUrl + buildQueryParam("_ir", param);
    }
    function getTrackingMethod(obj) {
      return obj.beacon ? "beacon" : !obj.style ? "xhr" : options.node;
    }
    function doCallbacksAndReporter(obj, fullUrl, passedMethod) {
      if (callback) {
        callback();
      }
      var method = passedMethod || getTrackingMethod(obj);
      doReporter(options.id, {
        type: type,
        options: options,
        obj: obj,
        method: method,
        slug: slugs[method],
        ref: referrer,
        lp: landingPage,
        ver: version,
        mcfg: mcfg,
        url: fullUrl
      });
    }
    function doPostbacks(postbacks) {
      if (postbacks) {
        onDomReady(function () {
          try {
            for (var x = 0, xx = postbacks.length; x < xx; ++x) {
              var pb = postbacks[x];
              if (pb.u) {
                doDomNode(pb.u, {
                  node: pb.t === "if" ? "iframe" : "img"
                });
              } else {
                if (pb.c) {
                  var node = doDomNode(false, {
                      tag: "iframe",
                      id: "impactPiggyFrame" + x
                    }),
                    doc = node.contentDocument ? node.contentDocument : node.contentWindow ? node.contentWindow.document : node.document;
                  doc.open();
                  doc.write(pb.c);
                  doc.close();
                }
              }
            }
          } catch (e) {
            logErrors("doPostbacks error", e.message);
          }
        }, true);
      }
    }
    function track(failValue) {
      var urlWithParams = appendCommonParams(url),
        obj,
        pb = function (responseText) {
          doPostbacks(responseText.tps);
        },
        xhrf = "xhrf";
      function xhrFailureDomBackupMethod(mobj, val) {
        mobj = doDomNode(urlWithParams + buildQueryParam(xhrf, val), options, slugs);
        doCallbacksAndReporter(mobj, replaceSubmissionSlug(urlWithParams, getTrackingMethod(mobj), slugs));
      }
      if (failValue) {
        urlWithParams += buildQueryParam(xhrf, failValue);
      }
      if (domMode) {
        obj = doDomNode(urlWithParams, options, slugs);
      } else {
        if (options.tag) {
          switch (options.tag) {
            case "xhr":
              obj = doXHR(urlWithParams, slugs, pb, function (val) {
                var innerUrl = urlWithParams + buildQueryParam(xhrf, val);
                obj = doBeacon(innerUrl, slugs) || doDomNode(innerUrl, options, slugs);
                doCallbacksAndReporter(obj, replaceSubmissionSlug(urlWithParams, getTrackingMethod(obj), slugs));
              }) || doBeacon(urlWithParams, slugs) || doDomNode(urlWithParams, options, slugs);
              break;
            case "img":
              obj = doDomNode(urlWithParams, options, slugs);
              break;
            case "iframe":
              obj = doDomNode(urlWithParams, options, slugs);
              break;
            default:
              obj = doBeacon(urlWithParams, slugs) || doXHR(urlWithParams, slugs, pb, function (val) {
                xhrFailureDomBackupMethod(obj, val);
              }) || doDomNode(urlWithParams, options, slugs);
          }
        } else {
          if (requiresPostback) {
            obj = doXHR(urlWithParams, slugs, pb, function (val) {
              xhrFailureDomBackupMethod(obj, val);
            }) || doDomNode(urlWithParams, options, slugs);
          } else {
            obj = doBeacon(urlWithParams, slugs) || doXHR(urlWithParams, slugs, pb, function (val) {
              xhrFailureDomBackupMethod(obj, val);
            }) || doDomNode(urlWithParams, options, slugs);
          }
        }
      }
      if (obj) {
        doCallbacksAndReporter(obj, replaceSubmissionSlug(urlWithParams, getTrackingMethod(obj), slugs));
      }
    }
    try {
      if (!domMode && !isUUIDAvailable()) {
        if (options.tag && options.tag !== "xhr") {
          setUUIDAndNextXhrExpiry();
          track();
        } else {
          var urlAndParams = appendCommonParams(url),
            xhrObj = doXHR(urlAndParams, slugs, function (responseText) {
              setUUIDAndNextXhrExpiry(responseText.fpc);
              doPostbacks(responseText.tps);
              doCallbacksAndReporter(xhrObj, replaceSubmissionSlug(urlAndParams, "xhr", slugs), "xhr");
            }, function (failValue) {
              setUUIDAndNextXhrExpiry();
              track(failValue);
            }) || function () {
              setUUIDAndNextXhrExpiry();
              doDomNode(urlAndParams, options, slugs);
              doCallbacksAndReporter(xhrObj, replaceSubmissionSlug(urlAndParams, options.tag, slugs), options.tag);
            }();
        }
      } else {
        setUUIDAndNextXhrExpiry();
        track();
      }
    } catch (e) {
      logErrors("doTracking error", e.message);
    }
  }
  function Event(a, v, c) {
    configs = c;
    version = v;
    accountId = a;
  }
  Event.prototype = {
    enforceDomNode: function () {
      domMode = true;
    },
    setNewSessionCallback: function (cb) {
      sessionCb.push(cb);
      return this;
    },
    setPageViewCallback: function (cb) {
      viewCb = cb;
      return this;
    },
    secureConversion: function (trackerId, encryptStr, iv, props, options) {
      props = props || {};
      options = options || {};
      try {
        landingPage = getDefinedUrl([options.pageUrl, landingPage]);
        var camp = setMatchedConfig(getCampaignConfigFromTracker(trackerId, options));
        if (!camp) {
          logErrors("secureConversion() exit", "campaign not found for tracker:" + trackerId);
          return this;
        }
        options = getOptionsOverrides(options, camp.ccc);
        var src = getTrackDomain(camp) + "/" + slug + "/" + trackerId + "/" + camp.id + "?edata=" + encodeURIComponent(encryptStr) + "&iv=" + encodeURIComponent(iv);
        doSessionSpecificTasks(this, camp);
        doTracking(src, camp, options, "secureConversion", getSlugObject("bconv", "xconv", "jconv", "jifconv"), false, true);
      } catch (e) {
        logErrors("secureConversion() error", e.message);
      }
    },
    identify: function (props, options) {
      isIdentifyRunning = true;
      var me = this;
      var finishedCallback = function () {
        isIdentifyRunning = false;
        if (camp.csc["fq"] && (nsess || willFireIdentify)) {
          this.trackQuality(u.extend({
            requestType: "click",
            subSourceId: undefSrcValue || props.subSourceId || "",
            sourceId: matchingId || props.sourceId || ""
          }, props), u.extend(options, {
            noPassProps: true
          }), camp);
        }
        if (camp.ld) {
          me.autoCrossDomainLinks(props, options, camp);
        }
      };
      function getMatchingRule(config) {
        function hasMatchingAndRules(andRules) {
          function ruleMet(rule) {
            function matchesRule(rule, value) {
              function safeLowerCase(val) {
                return typeof val === "string" ? val.toLowerCase() : val;
              }
              function contains(value, ruleValue) {
                return safeLowerCase(value).indexOf(safeLowerCase(ruleValue)) !== -1;
              }
              function matches(val1, val2) {
                return safeLowerCase(val1) === safeLowerCase(val2);
              }
              var ruleValue = rule.v,
                ruleOperator = rule.o;
              if (ruleOperator !== "np" && !u.hasValue(value)) {
                return false;
              }
              function matchesAny(rVals, value) {
                rVals = rVals.split(",");
                for (var x = 0, len = rVals.length; x < len; ++x) {
                  if (matches(rVals[x], value)) {
                    return true;
                  }
                }
                return false;
              }
              function containsAny(rVals, value) {
                rVals = rVals.split(",");
                for (var x = 0, len = rVals.length; x < len; ++x) {
                  if (contains(value, rVals[x])) {
                    return true;
                  }
                }
                return false;
              }
              switch (ruleOperator) {
                case "m":
                  return matches(ruleValue, value);
                case "c":
                  return value && contains(value, ruleValue);
                case "sw":
                  return value && safeLowerCase(value).lastIndexOf(safeLowerCase(ruleValue), 0) === 0;
                case "ew":
                  return value && value.length >= ruleValue.length && safeLowerCase(value).substr(value.length - ruleValue.length) == safeLowerCase(ruleValue);
                case "r":
                  return regexMatch(ruleValue, value);
                case "nm":
                  return !matches(ruleValue, value);
                case "nc":
                  return !contains(value, ruleValue);
                case "nr":
                  return !regexMatch(ruleValue, value);
                case "ma":
                  return matchesAny(ruleValue, value);
                case "ca":
                  return value && containsAny(ruleValue, value);
                case "p":
                  return u.hasValue(value);
                case "np":
                  return !u.hasValue(value);
              }
            }
            var ruleAttribute = rule.a,
              ruleValue = rule.v;
            function getQueryString(url) {
              if (url.indexOf("?") !== -1) {
                return url.split("?")[1] || "";
              }
              return "";
            }
            function matchesQueryParamRule(url) {
              var o = rule.o,
                negRule = o === "nm" || o === "nc" || o === "nr";
              var pv = extractQueryParam(url, ruleAttribute, ruleValue && !u.strContains(ruleValue, "%2") && !u.strContains(ruleValue, "+"));
              return !u.hasValue(pv) && negRule || matchesRule(rule, pv);
            }
            switch (rule.t) {
              case "rd":
                return matchesRule(rule, referrerDomain);
              case "ru":
                return matchesRule(rule, referrer);
              case "rq":
                return matchesRule(rule, getQueryString(referrer));
              case "rp":
                return matchesQueryParamRule(referrer);
              case "lu":
                return matchesRule(rule, landingPage);
              case "ld":
                return matchesRule(rule, u.extractDomain(landingPage));
              case "lq":
                return matchesRule(rule, getQueryString(landingPage));
              case "lp":
                return matchesQueryParamRule(landingPage);
            }
          }
          for (var x = 0, len = andRules.length; x < len; ++x) {
            if (!ruleMet(andRules[x])) {
              return false;
            }
          }
          return true;
        }
        var id, y, yy, item;
        if (config) {
          for (var x = 0, xx = config.length; x < xx; ++x) {
            item = config[x];
            for (id in item) {
              if (item.hasOwnProperty(id)) {
                for (y = 0, yy = item[id]["r"].length; y < yy; ++y) {
                  if (hasMatchingAndRules(item[id]["r"][y])) {
                    if (item[id]["b"]) {
                      return blackListMatchingId;
                    }
                    return id;
                  }
                }
              }
            }
          }
        }
        return null;
      }
      props = props || {};
      options = options || {};
      function hasIRGatewayParam(lp, gClickId, c) {
        return !u.isEmpty(extractQueryParam(lp, c.gp, true)) || !u.isEmpty(gClickId);
      }
      function shouldEval(newSess, ref, c, rd, lp, gClickId, googClickId) {
        function intraSite() {
          if (c.d && ref) {
            var referrerPath = stripProtocol(ref.split("?")[0]);
            return regexMatch(c.d, referrerPath, true);
          }
          return rd == (w.location.port ? w.location.hostname + ":" + w.location.port : w.location.hostname);
        }
        if (!intraSite() && !hasIRGatewayParam(lp, gClickId, c) && !u.hasValue(googClickId)) {
          if (!newSess && u.isPaymentSite(ref)) {
            return false;
          }
          return true;
        }
        return false;
      }
      function getMsId(id, isChannel, lp, gClickId, c) {
        if (hasIRGatewayParam(lp, gClickId, c)) {
          return -1;
        }
        if (!id) {
          return 0;
        }
        if (isChannel) {
          return "c-" + id;
        }
        return id;
      }
      function getSlugs(isChannel) {
        function appendForChannel(value) {
          return isChannel ? value + "h" : value;
        }
        return getSlugObject(appendForChannel("bc"), appendForChannel("xc"), appendForChannel("pc"), appendForChannel("ifc"));
      }
      function getDltValue(prop, alt, c, lp) {
        if (c.dlt && c.dlt[prop]) {
          return extractQueryParam(lp, c.dlt[prop], true) || alt;
        }
        return alt;
      }
      function buildTagSrc(undefSrcValue, matchId, isChannel, lp, c, rd, ref) {
        function getKeywords(r) {
          var a = /[\?|&](q|p|query|encquery|terms|rdata|szukaj|k|qt|qs|wd|text)=([^&#]*)/.exec(r);
          if (a) {
            return u.safeDecodeURIComponent(a[2]);
          }
          return "";
        }
        function extractSrcParams(msId, isChannel) {
          var src = "";
          var params = "subId1,subId2,subId3,sharedid,aadid,trafcat,trafsrc,irck,irak,iratid,irappid,matchtype,adnetwork,adposition,adplacement,adcampaign,adcampaigngroup,adgroup,adcampaignid,adgroupid,adcampaigngroupid,addisttype,adtype,adname,adid,prodcat,prodsubcat,prodsku,param1,param2,param3,param4,subacctid,subacctname,subclkid,kw,kwid,custid";
          var ps = params.split(",");
          var v;
          var x = 0;
          var xx;
          var mmap;
          var splitParams;
          for (var i = 0, ii = ps.length; i < ii; ++i) {
            v = extractQueryParam(lp, ps[i], true);
            if (v) {
              src += buildQueryParam(ps[i], v);
            }
          }
          for (i in c.cp) {
            if (c.cp.hasOwnProperty(i)) {
              v = extractQueryParam(lp, i, true);
              if (v) {
                mmap = !isChannel ? c.cp[i][msId] || c.cp[i]["default"] : c.cp[i]["default"];
                if (!mmap) {
                  continue;
                }
                if (!mmap.o && mmap.p && mmap.p.length) {
                  src += buildQueryParam(mmap.p[0], v);
                } else {
                  if (mmap.o === 1 && mmap.d) {
                    splitParams = v.split(mmap.d);
                    for (x = 0, xx = mmap.p.length; x < xx; ++x) {
                      if (splitParams[x]) {
                        src += buildQueryParam(mmap.p[x], splitParams[x]);
                      }
                    }
                  }
                }
              }
            }
          }
          return src;
        }
        function isSeo(r) {
          return /\b(google|yahoo|msn|bing|aol|lycos|ask|altavista|netscape|cnn|looksmart|about|mamma|alltheweb|gigablast|voila|virgilio|live|baidu|alice|yandex|najdi|club-internet|mama|seznam|search|szukaj|netsprint|google.interia|szukacz|yam|pchome)\b/.test(r);
        }
        var tagParams = "",
          tagPath = slug + "/" + matchId + "/" + getDltValue("adid", c.ad, c, lp) + "/" + c.id + "?";
        tagParams += extractSrcParams(matchId, isChannel);
        if (isSeo(rd)) {
          tagParams += buildQueryParam("searchtxt", getKeywords(ref));
        }
        if (isChannel) {
          if (undefSrcValue) {
            tagParams += buildQueryParam("irmm_srcname", undefSrcValue);
          } else {
            if (rd) {
              tagParams += buildQueryParam("irmm_domain", rd);
            }
          }
        }
        tagParams += buildQueryParam("srcref", ref);
        tagParams += buildQueryParam("landurl", lp);
        tagParams += "&" + getMappedQueryString(props, {
          customeremail: "custemail",
          customerid: "custid"
        });
        return getTrackDomain(c) + "/" + tagPath + tagParams.substr(1);
      }
      try {
        landingPage = getDefinedUrl([options.pageUrl, landingPage]);
        referrer = getDefinedUrl([options.referrerUrl, referrer]);
        var undefSrcValue,
          camp = setMatchedConfig(getCampaignConfig(props.campaignId)),
          nsess,
          matchingId,
          nodeSrc,
          isChannel,
          willFireIdentify;
        if (!camp) {
          logErrors("identify() exit", "No campaign for landing page: " + landingPage);
          doReporter(options.id || getId(), {
            type: "Identify",
            options: options,
            ref: referrer,
            lp: landingPage,
            ver: version,
            nofiremsg: "No Campaign"
          });
          return this;
        }
        var gatewayClickId = extractQueryParam(landingPage, camp.gc, true);
        if (gatewayClickId) {
          var passedSessionId = extractQueryParam(landingPage, "_ics", true);
        }
        var googleClickId = extractQueryParam(landingPage, "irgclid", true);
        options = getOptionsOverrides(options, camp.csc);
        referrerDomain = u.extractDomain(referrer);
        nsess = isNewSession(camp.iw);
        if (!hasInvokedIdentify && shouldEval(nsess, referrer, camp, referrerDomain, landingPage, gatewayClickId, googleClickId)) {
          matchingId = getDltValue("mpid", getMatchingRule(camp.pc), camp, landingPage);
          if (!matchingId) {
            matchingId = getMatchingRule(camp.sc);
          }
          if (!matchingId) {
            matchingId = getMatchingRule(camp.cc);
            if (camp.up) {
              undefSrcValue = extractQueryParam(landingPage, camp.up, true);
            }
            if (!matchingId) {
              if (referrerDomain || undefSrcValue) {
                isChannel = true;
                matchingId = camp.oc;
              } else {
                matchingId = camp.dc;
              }
              if (!undefSrcValue && matchingId && matchingId === camp.dc) {
                if (nsess) {
                  matchingId = camp.ds;
                } else {
                  matchingId = null;
                }
              }
            } else {
              isChannel = true;
            }
          }
          if (matchingId && getMsId(matchingId, isChannel, landingPage, googleClickId, camp) !== getCookieMsId(camp.iw) && matchingId !== blackListMatchingId) {
            nodeSrc = buildTagSrc(undefSrcValue, matchingId, isChannel, landingPage, camp, referrerDomain, referrer);
            if (!nsess) {
              nodeSrc += buildQueryParam("isc", "1");
            }
            willFireIdentify = true;
          }
        }
        doSessionSpecificTasks(this, camp, getMsId(matchingId, isChannel, landingPage, googleClickId, camp), gatewayClickId, passedSessionId, googleClickId);
        if (willFireIdentify) {
          doTracking(nodeSrc, camp, options, "identify", getSlugs(isChannel), finishedCallback, null, gatewayClickId);
        } else {
          doReporter(options.id || getId(), {
            type: "Identify",
            options: options,
            ref: referrer,
            lp: landingPage,
            ver: version,
            mcfg: mcfg,
            nofiremsg: "No matching source"
          });
          this.identifyUser(props, options, camp, finishedCallback);
        }
        hasInvokedIdentify = true;
      } catch (e) {
        logErrors("identify() error", e.message);
        finishedCallback();
      }
      return this;
    },
    trackQuality: function (props, options, passedCampaign) {
      props = props || {};
      options = options || {};
      function deletePropertyAndGetValue(prop) {
        var val = props[prop];
        delete props[prop];
        return val;
      }
      landingPage = getDefinedUrl([options.pageUrl], landingPage);
      var propCampaign = deletePropertyAndGetValue("campaignId");
      var camp = passedCampaign || setMatchedConfig(getCampaignConfig(propCampaign)) || {};
      var iw = camp.iw || 30;
      var fqObj = {
        org: deletePropertyAndGetValue("orgId") || camp.fq || "not_set",
        rt: deletePropertyAndGetValue("requestType") || "click",
        p: deletePropertyAndGetValue("sourceId") || getCookieMsId(iw) || "",
        sl: deletePropertyAndGetValue("score") || "0",
        rd: deletePropertyAndGetValue("pageUrl") || landingPage,
        a: deletePropertyAndGetValue("subSourceId") || "",
        rf: document.referrer,
        cmp: propCampaign || camp.id || ""
      };
      if (!u.isEmpty(props.sessionId) || !u.isEmpty(getUUID())) {
        fqObj.s = deletePropertyAndGetValue("sessionId") || getUUID() + "." + getCurrentSessionId(iw);
      }
      if (!options.noPassProps) {
        fqObj = u.extend(props, fqObj);
      }
      var qs = [];
      for (var key in fqObj) {
        if (fqObj.hasOwnProperty(key)) {
          qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(fqObj[key]));
        }
      }
      var scriptElement = document.createElement("script");
      scriptElement[["s", "c"].join("r")] = "https://fqtag.com/implement.js?" + qs.join("&");
      scriptElement.async = true;
      scriptElement.id = options.id ? "fq" + options.id : "fq" + getId();
      d.body.appendChild(scriptElement);
    },
    trackConversion: function (trackId, props, options) {
      props = props || {};
      options = options || {};
      function fireConversionPixel(props, campaign, trackId, options) {
        try {
          var src = getTrackDomain(campaign) + "/" + slug + "/" + trackId + "/" + campaign.id + "?" + getMappedQueryString(props);
          options = getOptionsOverrides(options, campaign.ccc);
          doTracking(src, campaign, options, "trackConversion", getSlugObject("bconv", "xconv", "jconv", "jifconv"), false, true);
        } catch (e) {
          logErrors("fireConversionPixel() error", e.message);
        }
      }
      try {
        landingPage = getDefinedUrl([options.pageUrl, landingPage]);
        var camp = setMatchedConfig(getCampaignConfigFromTracker(trackId, options));
        if (!camp) {
          logger.warn("trackConversion() exit", "campaign not found for tracker:" + trackId);
          return this;
        }
        doSessionSpecificTasks(this, camp);
        fireConversionPixel(props, camp, trackId, options);
        if (camp.ccc["fq"]) {
          var passedParams = {
            requestType: "action"
          };
          if (props.orderid) {
            passedParams.stId = props.orderid;
          }
          this.trackQuality(u.extend(props, passedParams), u.extend(options, {
            noPassProps: true
          }), camp);
        }
      } catch (e) {
        logErrors("trackConversion() error", e.message);
      }
    },
    track: function (evt, props, options) {
      props = props || {};
      options = options || {};
      try {
        if (props.actionTrackerId) {
          this.trackConversion(props.actionTrackerId, props, options);
        } else {
          landingPage = getDefinedUrl([options.pageUrl, landingPage]);
          var camp = setMatchedConfig(getCampaignConfig(props.campaignId));
          if (!camp) {
            logger.warn("track() exit", "campaign not found for event:" + evt);
            return this;
          }
          options = getOptionsOverrides(options, camp.cec);
          var src = getTrackDomain(camp) + "/" + slug + "/" + getCookieMsId(camp.iw) + "/" + camp.id + "?evt=" + encodeURIComponent(evt) + "&" + getMappedQueryString(props);
          doSessionSpecificTasks(this, camp);
          doTracking(src, camp, options, "Track (" + evt + ")", getSlugObject("evb", "evx", "evp", "evi"));
        }
      } catch (e) {
        logErrors("track() error", e.message);
      }
    },
    trackCart: function (trackerId, props, options) {
      props = props || {};
      options = options || {};
      try {
        landingPage = getDefinedUrl([options.pageUrl, landingPage]);
        var camp = setMatchedConfig(getCampaignConfigFromTracker(trackerId, options));
        var src;
        if (!camp) {
          logger.warn("trackCart() exit", "campaign not found for tracker:" + trackerId);
          return this;
        }
        src = getTrackDomain(camp) + "/" + slug + "/" + trackerId + "/" + camp.id + "?" + getMappedQueryString(props);
        options = getOptionsOverrides(options, camp.ccc);
        doSessionSpecificTasks(this, camp);
        doTracking(src, camp, options, "trackCart", getSlugObject("ceb", "cex", "ce", "ce"));
      } catch (e) {
        logErrors("trackCart() error", e.message);
      }
    },
    generateClickId: function (callback, props, options) {
      callback = callback || function () {};
      var _clickId = false;
      var finished = function (clickId) {
        _clickId = clickId;
        setTimeout(function () {
          callback(_clickId);
        }, 0);
      };
      var runGenerateClickId = function () {
        if (_clickId) {
          return setTimeout(function () {
            callback(_clickId);
          }, 0);
        } else {
          if (isIdentifyRunning) {
            return setTimeout(runGenerateClickId, 60);
          }
        }
        var gatewayClickId = getGatewayClickId();
        if (gatewayClickId) {
          return finished(gatewayClickId);
        }
        props = props || {};
        options = options || {};
        landingPage = getDefinedUrl([options.pageUrl, landingPage]);
        var camp = getCampaignConfig(props.campaignId),
          slugs = getSlugObject("xur", "xur", "xur", "xur");
        var jsGenerate = function () {
          var istest = options.test,
            s = timeStamp.toString() + "-" + (istest ? "1" : "0") + "-" + getUUID(),
            a = s.split(""),
            shifted = new Array(a.length),
            prev = 0,
            off,
            letters = "abcdefghijklmnopqrsuvwxyz",
            alphabet = "~-".concat(letters, letters.toUpperCase(), "0123456789").split(""),
            map = {},
            r;
          for (var i = 0, ii = alphabet.length; i < ii; ++i) {
            map[alphabet[i]] = i;
          }
          a.reverse();
          ii = a.length;
          for (i = 0; i < ii; ++i) {
            off = map[a[i]];
            if (off !== undefined) {
              off += prev;
              off %= alphabet.length;
              shifted[i] = alphabet[off];
              prev = off;
            } else {
              shifted[i] = a[i];
            }
          }
          r = "~" + shifted.join("");
          return r;
        };
        if (isUUIDAvailable()) {
          return finished(jsGenerate());
        }
        var setUuidAndDoCallback = function (uuid) {
          setUUIDAndNextXhrExpiry(uuid);
          finished(jsGenerate());
        };
        doXHR(getTrackDomain(camp) + "/" + slug + "/" + camp.id, slugs, function (responseText) {
          setUuidAndDoCallback(responseText.fpc);
        }, function () {
          setUuidAndDoCallback();
        }) || setUuidAndDoCallback();
      };
      runGenerateClickId();
    },
    identifyUser: function (props, options, passedCampaign, finishedCallback) {
      props = props || {};
      options = options ? u.extend({}, options) : {};
      for (var p in props) {
        if (props.hasOwnProperty(p)) {
          var prop = props[p] ? u.trim(props[p].toString()) : null;
          delete props[p];
          if (!u.isEmpty(prop)) {
            props[p.toLowerCase()] = prop;
          }
        }
      }
      landingPage = getDefinedUrl([options.pageUrl, landingPage]);
      referrer = getDefinedUrl([options.referrerUrl, referrer]);
      var camp = passedCampaign || setMatchedConfig(getCampaignConfig(props.campaignId));
      if (!props.customeremail && !props.customerid && u.isEmpty(getGatewayClickId())) {
        if (typeof finishedCallback === "function") {
          finishedCallback();
        }
        return this;
      }
      if (!camp) {
        logger.warn("identifyUser() exit", "No campaign for landing page: " + landingPage);
        if (typeof finishedCallback === "function") {
          finishedCallback();
        }
        return this;
      }
      var src = getTrackDomain(camp) + "/" + slug + "/" + camp.id + "?";
      src += getMappedQueryString(props, {
        customeremail: "custemail",
        customerid: "custid"
      });
      options.id = options.id ? options.id + "-idUser" : getId();
      if (!passedCampaign) {
        doSessionSpecificTasks(this, camp, null);
      }
      doTracking(src, camp, options, "identifyUser", getSlugObject("cur", "xur", "ur", "iur"), finishedCallback, null, getGatewayClickId());
    },
    crossDomainLink: function (url, callback, props, options, passedCampaign, clickId) {
      props = props || {};
      options = options || {};
      var qs = options.qs || {};
      var camp = passedCampaign || getCampaignConfig(props.campaignId);
      function getLink() {
        var hasQueryString = u.strContains(url, "?");
        url += !hasQueryString ? "?" : "";
        if (!u.strContains(url, "_ics=" + getCurrentSessionId())) {
          url += buildQueryParam("_ics", getCurrentSessionId(), !hasQueryString);
          url += buildQueryParam(props.clickParam || camp.gc || "clickid", clickId);
        }
        for (var key in qs) {
          if (!qs.hasOwnProperty(key)) {
            continue;
          }
          url += buildQueryParam(key, qs[key]);
        }
        return url;
      }
      function doUuidAndCallback(uuid) {
        setUUIDAndNextXhrExpiry(uuid);
        callback(getLink());
      }
      if (isUUIDAvailable()) {
        if (callback) {
          callback(getLink());
        } else {
          return getLink();
        }
      } else {
        if (callback) {
          doXHR(getTrackDomain(camp) + "/" + slug + "/" + camp.id, getSlugObject("xur", "xur", "xur", "xur"), function (responseText) {
            doUuidAndCallback(responseText.fpc);
          }, function () {
            doUuidAndCallback();
          }) || doUuidAndCallback();
        } else {
          setUUIDAndNextXhrExpiry();
          return getLink();
        }
      }
    },
    autoCrossDomainLinks: function (props, options, passedCampaign) {
      props = props || {};
      options = options || {};
      var me = this;
      w.MutationObserver = w.MutationObserver || function (w) {
        function v(a) {
          this.i = [];
          this.m = a;
        }
        function I(a) {
          (function c() {
            var d = a.takeRecords();
            d.length && a.m(d, a);
            a.h = setTimeout(c, v._period);
          })();
        }
        function p(a) {
          var b = {
              type: null,
              target: null,
              addedNodes: [],
              removedNodes: [],
              previousSibling: null,
              nextSibling: null,
              attributeName: null,
              attributeNamespace: null,
              oldValue: null
            },
            c;
          for (c in a) {
            b[c] !== w && a[c] !== w && (b[c] = a[c]);
          }
          return b;
        }
        function J(a, b) {
          var c = C(a, b);
          return function (d) {
            var f = d.length,
              n;
            b.a && 3 === a.nodeType && a.nodeValue !== c.a && d.push(new p({
              type: "characterData",
              target: a,
              oldValue: c.a
            }));
            b.b && c.b && A(d, a, c.b, b.f);
            if (b.c || b.g) {
              n = K(d, a, c, b);
            }
            if (n || d.length !== f) {
              c = C(a, b);
            }
          };
        }
        function L(a, b) {
          return b.value;
        }
        function M(a, b) {
          return "style" !== b.name ? b.value : a.style.cssText;
        }
        function A(a, b, c, d) {
          for (var f = {}, n = b.attributes, k, g, x = n.length; x--;) {
            k = n[x], g = k.name, d && d[g] === w || (D(b, k) !== c[g] && a.push(p({
              type: "attributes",
              target: b,
              attributeName: g,
              oldValue: c[g],
              attributeNamespace: k.namespaceURI
            })), f[g] = !0);
          }
          for (g in c) {
            f[g] || a.push(p({
              target: b,
              type: "attributes",
              attributeName: g,
              oldValue: c[g]
            }));
          }
        }
        function K(a, b, c, d) {
          function f(b, c, f, k, y) {
            var g = b.length - 1;
            y = -~((g - y) / 2);
            for (var h, l, e; e = b.pop();) {
              h = f[e.j], l = k[e.l], d.c && y && Math.abs(e.j - e.l) >= g && (a.push(p({
                type: "childList",
                target: c,
                addedNodes: [h],
                removedNodes: [h],
                nextSibling: h.nextSibling,
                previousSibling: h.previousSibling
              })), y--), d.b && l.b && A(a, h, l.b, d.f), d.a && 3 === h.nodeType && h.nodeValue !== l.a && a.push(p({
                type: "characterData",
                target: h,
                oldValue: l.a
              })), d.g && n(h, l);
            }
          }
          function n(b, c) {
            for (var g = b.childNodes, q = c.c, x = g.length, v = q ? q.length : 0, h, l, e, m, t, z = 0, u = 0, r = 0; u < x || r < v;) {
              m = g[u], t = (e = q[r]) && e.node, m === t ? (d.b && e.b && A(a, m, e.b, d.f), d.a && e.a !== w && m.nodeValue !== e.a && a.push(p({
                type: "characterData",
                target: m,
                oldValue: e.a
              })), l && f(l, b, g, q, z), d.g && (m.childNodes.length || e.c && e.c.length) && n(m, e), u++, r++) : (k = !0, h || (h = {}, l = []), m && (h[e = E(m)] || (h[e] = !0, -1 === (e = F(q, m, r, "node")) ? d.c && (a.push(p({
                type: "childList",
                target: b,
                addedNodes: [m],
                nextSibling: m.nextSibling,
                previousSibling: m.previousSibling
              })), z++) : l.push({
                j: u,
                l: e
              })), u++), t && t !== g[u] && (h[e = E(t)] || (h[e] = !0, -1 === (e = F(g, t, u)) ? d.c && (a.push(p({
                type: "childList",
                target: c.node,
                removedNodes: [t],
                nextSibling: q[r + 1],
                previousSibling: q[r - 1]
              })), z--) : l.push({
                j: e,
                l: r
              })), r++));
            }
            l && f(l, b, g, q, z);
          }
          var k;
          n(b, c);
          return k;
        }
        function C(a, b) {
          var c = !0;
          return function f(a) {
            var k = {
              node: a
            };
            !b.a || 3 !== a.nodeType && 8 !== a.nodeType ? (b.b && c && 1 === a.nodeType && (k.b = G(a.attributes, function (c, f) {
              if (!b.f || b.f[f.name]) {
                c[f.name] = D(a, f);
              }
              return c;
            })), c && (b.c || b.a || b.b && b.g) && (k.c = N(a.childNodes, f)), c = b.g) : k.a = a.nodeValue;
            return k;
          }(a);
        }
        function E(a) {
          try {
            return a.id || (a.mo_id = a.mo_id || H++);
          } catch (b) {
            try {
              return a.nodeValue;
            } catch (c) {
              return H++;
            }
          }
        }
        function N(a, b) {
          for (var c = [], d = 0; d < a.length; d++) {
            c[d] = b(a[d], d, a);
          }
          return c;
        }
        function G(a, b) {
          for (var c = {}, d = 0; d < a.length; d++) {
            c = b(c, a[d], d, a);
          }
          return c;
        }
        function F(a, b, c, d) {
          for (; c < a.length; c++) {
            if ((d ? a[c][d] : a[c]) === b) {
              return c;
            }
          }
          return -1;
        }
        v._period = 30;
        v.prototype = {
          observe: function (a, b) {
            for (var c = {
                b: !!(b.attributes || b.attributeFilter || b.attributeOldValue),
                c: !!b.childList,
                g: !!b.subtree,
                a: !(!b.characterData && !b.characterDataOldValue)
              }, d = this.i, f = 0; f < d.length; f++) {
              d[f].s === a && d.splice(f, 1);
            }
            b.attributeFilter && (c.f = G(b.attributeFilter, function (a, b) {
              a[b] = !0;
              return a;
            }));
            d.push({
              s: a,
              o: J(a, c)
            });
            this.h || I(this);
          },
          takeRecords: function () {
            for (var a = [], b = this.i, c = 0; c < b.length; c++) {
              b[c].o(a);
            }
            return a;
          },
          disconnect: function () {
            this.i = [];
            clearTimeout(this.h);
            this.h = null;
          }
        };
        var B = document.createElement("i");
        B.style.top = 0;
        var D = (B = "null" != B.attributes.style.value) ? L : M,
          H = 1;
        return v;
      }(void 0);
      var camp = passedCampaign || setMatchedConfig(getCampaignConfig(props.campaignId));
      var domain = String(u.extractDomain(landingPage)).toLowerCase();
      this.generateClickId(function (clickId) {
        var doLinks = function (links) {
          for (var x = 0, xx = links.length; x < xx; x++) {
            var a = links[x];
            var href = a.href;
            if (!u.isEmpty(href)) {
              var hrefDomain = String(u.extractDomain(href)).toLowerCase();
              if (!u.strContains(hrefDomain, domain)) {
                if (props.domains && u.arrayContains(props.domains, hrefDomain, true) || regexMatch(camp.d, stripProtocol(href), true)) {
                  a.href = me.crossDomainLink(href, null, props, options, camp, clickId);
                }
              }
            }
          }
        };
        doLinks(d.getElementsByTagName("a"));
        new MutationObserver(function (mutationsList, observer) {
          for (var x = 0, xx = mutationsList.length; x < xx; x++) {
            doLinks(mutationsList[x].target.getElementsByTagName("a"));
          }
        }).observe(d.body, {
          childList: true,
          subtree: true
        });
      });
    }
  };
  w.ImpactRadiusEvent = Event;
  var irEvent = new ImpactRadiusEvent("A1332781-c105-4b2e-9498-751138f806ce1", "U199", [{
    id: "9156",
    td: "gotomeeting.zvbf.net",
    ad: "546080",
    iw: null,
    ti: ["16386", "16387"],
    d: "(?:(?:.*?\\.impact\\.com)|(?:^impact\\.com))",
    gp: "irgwc",
    gc: "irclickid",
    csc: {
      domReady: 1,
      tag: "img"
    },
    ccc: {
      domReady: 1,
      tag: "iframe"
    },
    cec: {
      domReady: 1,
      tag: "img"
    }
  }, {
    id: "9158",
    td: "gotowebinar.xrte.net",
    ad: "546119",
    iw: null,
    ti: ["16388", "16389", "31396"],
    d: "(?:(?:.*?\\.impact\\.com)|(?:^impact\\.com))",
    sc: [{
      "1333989": {
        r: [[{
          o: "c",
          t: "rd",
          v: ".google."
        }, {
          o: "nc",
          t: "lq",
          v: "gclid="
        }]],
        b: 0
      }
    }, {
      "1333990": {
        r: [[{
          o: "r",
          t: "ru",
          v: "https?:\\/\\/www\\.bing\\..*"
        }]],
        b: 0
      }
    }, {
      "1333991": {
        r: [[{
          o: "r",
          t: "ru",
          v: "https?:\\/\\/.*search\\.yahoo\\..*"
        }]],
        b: 0
      }
    }],
    gp: "irgwc",
    gc: "irclickid",
    csc: {
      domReady: 1,
      tag: "img"
    },
    ccc: {
      domReady: 1,
      tag: "iframe"
    },
    cec: {
      domReady: 1,
      tag: "img"
    }
  }, {
    id: "13028",
    td: "gotoconnect.sjv.io",
    ad: "992676",
    iw: null,
    ti: ["24209", "24210", "24211", "25328"],
    d: "(?:(?:.*?\\.impact\\.com)|(?:^impact\\.com))",
    gp: "irgwc",
    gc: "irclickid",
    csc: {
      domReady: 1,
      tag: "img"
    },
    ccc: {
      domReady: 1,
      tag: "iframe"
    },
    cec: {
      domReady: 1,
      tag: "img"
    }
  }, {
    id: "14765",
    td: "gotoparentcampaign.sjv.io",
    ad: "1168600",
    iw: null,
    ti: ["27945", "27946", "27960", "27961", "27962", "27984", "27985", "32206", "32207", "32208"],
    d: "(?:(?:.*?\\.goto\\.com)|(?:^goto\\.com)|(?:.*?\\.gotomeeting\\.com)|(?:^gotomeeting\\.com)|(?:.*?\\.gotowebinar\\.com)|(?:^gotowebinar\\.com)|(?:.*?\\.authentication\\.logmeininc\\.com)|(?:^authentication\\.logmeininc\\.com)|(?:.*?\\.buy\\.goto\\.com)|(?:^buy\\.goto\\.com)|(?:.*?\\.www\\.goto\\.com)|(?:^www\\.goto\\.com))",
    gp: "irgwc",
    gc: "irclickid",
    ld: 1,
    ld: 1,
    csc: {
      domReady: 1,
      tag: "img"
    },
    ccc: {
      domReady: 1,
      tag: "iframe"
    },
    cec: {
      domReady: 1,
      tag: "img"
    }
  }, {
    id: "15989",
    td: "gotoresolve.sjv.io",
    ad: "1309942",
    iw: null,
    ti: ["32637", "32638", "32639", "32773"],
    d: "(?:(?:.*?\\.impact\\.com)|(?:^impact\\.com))",
    gp: "irgwc",
    gc: "irclickid",
    csc: {
      domReady: 1,
      tag: "img"
    },
    ccc: {
      domReady: 1,
      tag: "iframe"
    },
    cec: {
      domReady: 1,
      tag: "img"
    }
  }]);
  if (typeof irEvent !== "undefined") {
    var v = "ire_o",
      eventQueue = w[v] && w[w[v]].a ? w[w[v]].a : [];
    function fireEvent(a) {
      var ar = Array.prototype.slice.call(a);
      irEvent[ar.shift()].apply(irEvent, ar);
    }
    for (var x = 0, xx = eventQueue.length; x < xx; x++) {
      fireEvent(eventQueue[x]);
    }
    w.ire = function () {
      fireEvent(arguments);
    };
    w.irEvent = irEvent;
  }
  fetchExtensions();
})(window, document);