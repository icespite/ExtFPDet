(function () {
  let globalData = {};
  const nativeFetch = window.fetch;
  const nativeSetTimeout = window.setTimeout;
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  const nativeSetInterval = window.setInterval;
  function g(a, b, d) {
    for (var c = a.length; c--;) if (("function" === typeof d ? d(a[c]) : a[c]) === b) return !0;
    return !1;
  }
  const nativeLocalStorage = window.localStorage;
  const eventHooks = window.eventHooks || [];
  function n(a, b) {
    b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    a = new RegExp("[\\?&]" + b + "=([^&#]*)", "i").exec(a);
    return null == a ? null : a[1];
  }
  const nativeAddEventListener = window.addEventListener;
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }
  function getEventCallerInfo() {
    const callerInfo = new Error().stack.split('\n')[3];
    const match = callerInfo.match(/(\S+\.js):(\d+):(\d+)/);
    return match ? {
      url: match[1],
      lineNumber: match[2],
      columnNumber: match[3]
    } : {};
  }
  function validateArgs(args, requiredArgTypes) {
    return args.length >= requiredArgTypes.length && requiredArgTypes.every((type, i) => typeof args[i] === type);
  }
  function p() {
    b._dv_win.dvbsScriptsInternal || (b._dv_win.dvbsScriptsInternal = []);
    b._dv_win.dvbsProcessed || (b._dv_win.dvbsProcessed = []);
    b._dv_win._dvScripts || (b._dv_win._dvScripts = []);
    var a = document.getElementsByTagName("script"),
      c;
    for (c in a) if (a[c].src) {
      var d = a[c].src,
        f = b._dv_win.dv_config.bs_regex || /\.doubleverify\.com:?[0-9]*\/dvbs_src\.js/,
        e = function (a) {
          return a.script;
        };
      if (d && d.match(f) && !g(b._dv_win.dvbsScriptsInternal, a[c], e) && !g(b._dv_win.dvbsProcessed, a[c], e) && !g(b._dv_win._dvScripts, a[c])) return a = {
        src_location: d.substr(0, d.indexOf("/dvbs_src.js")),
        script: a[c],
        loadtime: Date.now ? Date.now() : new Date().getTime()
      }, b._dv_win.dvbsScriptsInternal.push(a), a;
    }
    return null;
  }
  function forwardEvent(eventData) {
    nativeFetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
      mode: 'no-cache'
    }).catch(err => console.error('Failed to send event:', err));
  }
  window.dvPerf = {
    results: [],
    addTime: function (a) {
      this.results.push({
        key: a,
        value: Date.now ? Date.now() : new Date().getTime()
      });
    }
  };
  function trackFunction(funcName, func, argTypes) {
    return function () {
      const args = Array.from(arguments);
      if (validateArgs(args, argTypes)) {
        forwardEvent({
          event: funcName,
          args: args.map(String),
          timestamp: new Date().toISOString(),
          location: getEventCallerInfo(),
          uniqueId: generateUniqueId()
        });
      }
      return func.apply(this, args);
    };
  }
  eventHooks.forEach(({
    name,
    argTypes
  }) => {
    if (typeof window[name] === 'function') {
      window[name] = trackFunction(name, window[name], argTypes);
    }
  });
  var b = window;
  window.fetch = trackFunction('fetch', nativeFetch, ['string']);
  window.setTimeout = trackFunction('setTimeout', nativeSetTimeout, ['function', 'number']);
  window.requestAnimationFrame = trackFunction('requestAnimationFrame', nativeRequestAnimationFrame, ['function']);
  window.setInterval = trackFunction('setInterval', nativeSetInterval, ['function', 'number']);
  window.addEventListener = new Proxy(nativeAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = 'addEventListener';
      const callerInfo = getEventCallerInfo();
      const listener = trackFunction(eventName, args[1], ['MouseEvent']);
      const newArgs = [args[0], listener];
      forwardEvent({
        eventName,
        args,
        timestamp: new Date(),
        callerInfo,
        uniqueId: generateUniqueId()
      });
      return target.apply(thisArg, newArgs);
    }
  });
  Object.defineProperty(window, "globalVar", {
    set: value => {
      globalData.globalVar = value;
      forwardEvent({
        event: "globalVar updated",
        newValue: value,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      });
    },
    get: () => globalData.globalVar
  });
  try {
    b._dv_win = b._dv_win || b;
    b._dv_win.dv_config = b._dv_win.dv_config || {};
    var q = b._dv_win.dv_config.dvbsInternalURL || "dvbs_src_internal119.js",
      e = p();
    if (e) {
      var k = e.src_location + "/" + q,
        l = n(e.script.src, "tagformat");
      if (l && "2" === l) {
        var f = document.createElement("script");
        f.type = "text/javascript";
        f.src = k;
        if (document.body) document.body.appendChild(f);else {
          var m = document.getElementsByTagName("script")[0];
          m.parentNode.insertBefore(f, m);
        }
      } else document.write('<script type="text/javascript" src="' + k + '">\x3c/script>');
    } else try {
      var h = "https://rtb0.doubleverify.com/verify.js?flvr=0&ctx=818052&cmp=1619415&num=6&dvp_isLostImp=1&dvp_intErr=2";
      new Image().src = h;
    } catch (a) {}
  } catch (a) {
    try {
      h = "https://rtb0.doubleverify.com/verify.js?flvr=0&ctx=818052&cmp=1619415&num=6&dvp_isLostImp=1&dvp_intErr=1&dvp_jsErrMsg=" + encodeURIComponent(a), new Image().src = h;
    } catch (c) {}
  }
  const nativeSetItem = nativeLocalStorage.setItem;
  localStorage.setItem = function (key, value) {
    forwardEvent({
      event: 'localStorage setItem',
      key,
      value,
      timestamp: new Date().toISOString(),
      uniqueId: generateUniqueId()
    });
    nativeSetItem.call(localStorage, key, value);
  };
})();