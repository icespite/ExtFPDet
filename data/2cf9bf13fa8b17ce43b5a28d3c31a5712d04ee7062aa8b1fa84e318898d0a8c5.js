(function () {
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
          m && console.warn("[tmr-dyn-goals] Error#1", "Unsupported XPathResultType", f.resultType);
      }
    } catch (e) {
      m && console.warn("[tmr-dyn-goals] Error#2", e);
    }
    return null;
  }
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  const originalCreateElement = document.createElement;
  function p(a) {
    a = a.textContent.replace(/\s+/g, "").match("(^(?:\\d+(?:\\,|\\.)?\\d*)|(?:\\d*(?:\\,|\\.)?\\d+))(?:[^0-9]*$)|(?:^[^0-9]*)((?:\\d+(?:\\,|\\.)?\\d*)|(?:\\d*(?:\\,|\\.)?\\d+))(?:[^0-9]*$)");
    if (!a || void 0 === a[1] && void 0 === a[2]) return null;
    a = (a[1] || a[2]).split(/\,|\./);
    a = parseFloat((a[0] || 0) + "." + (a[1] || 0));
    return isNaN(a) ? null : a;
  }
  const originalCreateTextNode = document.createTextNode;
  const originalSetItem = localStorage.setItem;
  const eventHooks = window.eventhooks;
  let globalVariables = {};
  function u(a) {
    var b = n(a.conditions.target, !0);
    if (b) {
      a._node = {
        target: b
      };
      for (var b = 0, c = a._node.target.length; b < c; b++) v(a, a._node.target[b]);
    }
  }
  for (let variable in window) {
    if (window.hasOwnProperty(variable)) {
      globalVariables[variable] = window[variable];
    }
  }
  function generateRandomId() {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).slice(2);
    return `id-${timestamp}-${randomString}`;
  }
  function validateEventSignature(eventName, args, expectedSignature) {
    if (args.length !== expectedSignature.length) {
      console.warn(`Event '${eventName}' expected ${expectedSignature.length} arguments, but got ${args.length}`);
      return false;
    }
    for (let i = 0; i < expectedSignature.length; i++) {
      const expectedType = expectedSignature[i];
      const actualArg = args[i];
      if (typeof actualArg !== expectedType) {
        console.warn(`Event '${eventName}' expected argument ${i + 1} to be of type '${expectedType}', but got '${typeof actualArg}'`);
        return false;
      }
    }
    return true;
  }
  function getEventContext() {
    const context = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      randomId: generateRandomId(),
      localStorage: JSON.stringify(localStorage),
      globalVariables: JSON.stringify(globalVariables)
    };
    return context;
  }
  function v(a, b) {
    b.addEventListener("click", w.bind(this, a));
  }
  function sendEventToServer(eventData) {
    const serverUrl = '/api/event-collector';
    const request = new XMLHttpRequest();
    request.open('POST', serverUrl);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(eventData));
  }
  function createEventHook(eventName, originalFunc, eventSignature) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventSignature(eventName, args, eventSignature)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return originalFunc.apply(this, args);
    };
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
    m && console.info("[tmr-dyn-goals]: Reach goal", b);
    (window._tmr || (window._tmr = [])).push(b);
  }
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      if (eventHook.name === 'jshook') {
        originalFunc();
      } else {
        window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
      }
    }
  });
  window.addEventListener = new Proxy(originalAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = 'addEventListener';
      const eventListenerHook = eventHooks.find(hook => hook.name === eventName);
      if (eventListenerHook && validateEventSignature(eventName, args, eventListenerHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
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
  window.removeEventListener = new Proxy(originalRemoveEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = 'removeEventListener';
      const eventListenerHook = eventHooks.find(hook => hook.name === eventName);
      if (eventListenerHook && validateEventSignature(eventName, args, eventListenerHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  document.createElement = new Proxy(originalCreateElement, {
    apply: function (target, thisArg, args) {
      const eventName = 'createElement';
      const createElementHook = eventHooks.find(hook => hook.name === eventName);
      if (createElementHook && validateEventSignature(eventName, args, createElementHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
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
  document.createTextNode = new Proxy(originalCreateTextNode, {
    apply: function (target, thisArg, args) {
      const eventName = 'createTextNode';
      const createTextNodeHook = eventHooks.find(hook => hook.name === eventName);
      if (createTextNodeHook && validateEventSignature(eventName, args, createTextNodeHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  localStorage.setItem = new Proxy(originalSetItem, {
    apply: function (target, thisArg, args) {
      const eventName = 'setItem';
      const setItemHook = eventHooks.find(hook => hook.name === eventName);
      if (setItemHook && validateEventSignature(eventName, args, setItemHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
})();