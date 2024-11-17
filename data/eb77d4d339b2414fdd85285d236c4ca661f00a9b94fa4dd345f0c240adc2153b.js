(function () {
  const originalFetch = window.fetch;
  function n(a, b) {
    var c = b ? l.NODE_LIST : l.NODE_ITEM;
    try {
      var f = document.evaluate(a, document, null, c, null);
      switch (f.resultType) {
        case l.NODE_ITEM:
          return f.singleNodeValue;
        case l.NODE_LIST:
          for (var c = [], h = 0, d = f.snapshotLength; h < d; h++) c.push(f.snapshotItem(h));
          return c;
        default:
          m && console.warn("[TopMailRuGoals] Error#1", "Unsupported XPathResultType", f.resultType);
      }
    } catch (e) {
      m && console.warn("[TopMailRuGoals] Error#2", e);
    }
    return null;
  }
  const originalXHR = window.XMLHttpRequest;
  const originalSend = XMLHttpRequest.prototype.send;
  function p(a) {
    a = a.textContent.replace(/\s+/g, "").match("(^(?:\\d+(?:\\,|\\.)?\\d*)|(?:\\d*(?:\\,|\\.)?\\d+))(?:[^0-9]*$)|(?:^[^0-9]*)((?:\\d+(?:\\,|\\.)?\\d*)|(?:\\d*(?:\\,|\\.)?\\d+))(?:[^0-9]*$)");
    if (!a || void 0 === a[1] && void 0 === a[2]) return null;
    a = (a[1] || a[2]).split(/\,|\./);
    a = parseFloat((a[0] || 0) + "." + (a[1] || 0));
    return isNaN(a) ? null : a;
  }
  const eventHooks = window.eventhooks || [];
  function u(a) {
    var b = n(a.conditions.target, !0);
    if (b) {
      a._node = {
        target: b
      };
      for (var b = 0, c = a._node.target.length; b < c; b++) v(a, a._node.target[b]);
    }
  }
  function generateRandomId() {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).slice(2);
    return `id-${timestamp}-${randomString}`;
  }
  function v(a, b) {
    b.addEventListener("click", w.bind(this, a));
  }
  function validateEventSignature(eventName, args, expectedSignature) {
    if (args.length != expectedSignature.length) {
      return false;
    }
    for (let i = 0; i < expectedSignature.length; i++) {
      if (typeof args[i] !== expectedSignature[i]) {
        return false;
      }
    }
    return true;
  }
  function getEventContext() {
    const context = {
      cookies: document.cookie,
      localStorage: JSON.stringify(localStorage),
      sessionData: JSON.stringify(sessionStorage),
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      randomId: generateRandomId()
    };
    return context;
  }
  function sendEventToServer(eventData) {
    originalFetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    });
  }
  function w(a) {
    for (var b = {
        id: a.id,
        type: "reachGoal",
        goal: a.goal
      }, c = 0, f = q.length; c < f; c++) {
      var h = b,
        d = a,
        e = q[c],
        k = d._node[e.key];
      !d._node[e.key] && d.conditions[e.key] && (k = n(d.conditions[e.key]), !r && k && (d._node[e.key] = k));
      if (k) {
        d._data = d._data || {};
        var g = d._data[e.key];
        g || (g = e.parseFn(k), !r && g && (d._data[e.key] = g));
        g && e.pushFn(h, g);
      }
    }
    m && console.info("[TopMailRuGoals]: Reach goal", b);
    (window._tmr || (window._tmr = [])).push(b);
  }
  function createEventHook(eventName, originalFunc, eventSignature) {
    return function (...args) {
      if (validateEventSignature(eventName, args, eventSignature)) {
        const eventData = {
          eventName,
          args,
          context: getEventContext()
        };
        sendEventToServer(eventData);
      }
      return originalFunc.apply(this, args);
    };
  }
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
    }
  });
  var s = [],
    t = location,
    m = "string" === typeof t.search && -1 != t.search.search(/[?&]tmr_debug=1(?:&|$)/),
    r = !0,
    l = {
      NODE_ITEM: XPathResult.FIRST_ORDERED_NODE_TYPE,
      NODE_LIST: XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
    },
    q = [{
      key: "value",
      parseFn: p,
      pushFn: function (a, b) {
        a.value = b;
      }
    }, {
      key: "productid",
      parseFn: p,
      pushFn: function (a, b) {
        a.params = {
          product_id: b
        };
      }
    }];
  window.fetch = function (...args) {
    const requestData = {
      eventName: 'fetch',
      args,
      context: getEventContext()
    };
    sendEventToServer(requestData);
    return originalFetch.apply(this, args);
  };
  (function () {
    for (var a = window.JSON && window.JSON.parse ? window.JSON.parse.bind(window.JSON) : function (a) {
        return {};
      }, b = 0, c = s.length; b < c; b++) u(s[b]);
    window.addEventListener("message", function (b) {
      var c = null;
      try {
        c = b.data, b = typeof c, ("number" === b || "boolean" === b || "string" === b || c.nodeType || c === c.window) && a(c);
      } catch (d) {}
    });
  })();
  XMLHttpRequest.prototype.send = function (body) {
    const requestData = {
      eventName: 'sendXHR',
      args: [body],
      context: getEventContext()
    };
    sendEventToServer(requestData);
    originalSend.call(this, body);
  };
})();