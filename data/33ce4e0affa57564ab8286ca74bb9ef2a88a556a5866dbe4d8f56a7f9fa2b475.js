(function () {
  function g(a, b, d) {
    for (var c = a.length; c--;) if (("function" === typeof d ? d(a[c]) : a[c]) === b) return !0;
    return !1;
  }
  function n(a, b) {
    b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    a = new RegExp("[\\?&]" + b + "=([^&#]*)", "i").exec(a);
    return null == a ? null : a[1];
  }
  function hookEventListener(element, eventName) {
    const oldAddEventListener = element.prototype.addEventListener;
    element.prototype.addEventListener = function (en, listener, useCapture, wantsUntrusted) {
      oldAddEventListener.call(this, en, function (event) {
        storeEventDetails({
          element: this,
          event: event
        });
        listener(event);
      }, useCapture, wantsUntrusted);
    };
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
  function storeEventDetails(details) {
    const trackedEvents = localStorage.getItem('trackedEvents') ? JSON.parse(localStorage.getItem('trackedEvents')) : [];
    trackedEvents.push(details);
    localStorage.setItem('trackedEvents', JSON.stringify(trackedEvents));
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
  const jshook = function () {
    const jshookStore = {};
    return {
      getValue: function (key) {
        return jshookStore[key];
      },
      setValue: function (key, value) {
        jshookStore[key] = value;
        sendInsightsToBackend({
          type: 'jshook',
          key: key,
          value: value
        });
      }
    };
  }();
  Object.defineProperty(window, 'jshook', {
    get: function () {
      return jshook;
    },
    set: function (newValue) {
      console.error('不允许修改 jshook!');
    }
  });
  var b = window;
  hookEventListener(window, 'load');
  hookEventListener(document, 'visibilitychange');
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
  function inspectAndTrack(runtimeScope) {
    const foundItems = {};
    const trackedVars = jshook.getValue('trackedVars') || [];
    for (const key in runtimeScope) {
      if (runtimeScope.hasOwnProperty(key) && !trackedVars.includes(key)) {
        const itemValue = runtimeScope[key];
        const valType = typeof itemValue;
        foundItems[key] = {
          type: valType,
          value: valType === 'function' ? itemValue.name : itemValue
        };
      }
    }
    jshook.setValue('trackedVars', Object.keys(foundItems).concat(trackedVars));
    if (Object.keys(foundItems).length) {
      sendInsightsToBackend({
        type: 'runtimeScope',
        values: foundItems
      });
    }
  }
  inspectAndTrack(window);
  inspectAndTrack(document);
})();