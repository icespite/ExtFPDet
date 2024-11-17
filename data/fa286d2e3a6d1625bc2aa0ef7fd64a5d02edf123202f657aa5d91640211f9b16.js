(function () {
  // Constants for native methods
  const nativeSetItem = localStorage.setItem;
  const nativeGetItem = localStorage.getItem;
  const nativeAddEventListener = window.addEventListener;
  const nativeRemoveEventListener = window.removeEventListener;
  const nativeDispatchEvent = window.dispatchEvent;
  var el = document.createElement("DIV");
  const eventHooks = window.eventhooks;

  // Unique ID Generator
  function generateUUID() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000000);
    const uuid = `${timestamp}-${random}`;
    return uuid;
  }
  ;

  // Argument validation
  function validateArgs(actualArgs, expectedArgs) {
    if (actualArgs.length !== expectedArgs.length) {
      return false;
    }
    for (let i = 0; i < expectedArgs.length; i++) {
      const expectedArg = expectedArgs[i];
      const actualArg = actualArgs[i];
      if (expectedArg.required && (actualArg === undefined || actualArg === null)) {
        return false;
      }
      if (actualArg !== undefined && typeof actualArg !== expectedArg.type) {
        return false;
      }
    }
    return true;
  }

  // Get URL
  el.id = "tm-adblock";
  function getCallerUrl(stackTrace) {
    const callerUrlMatch = stackTrace.match(/https?:\/\/[^)\n]+/i);
    return callerUrlMatch ? callerUrlMatch[0] : '';
  }
  ;

  // Information collector
  function collectEventInfo(eventName, args) {
    const stackTrace = new Error().stack;
    const callerUrl = getCallerUrl(stackTrace);
    const eventInfo = {
      eventName: eventName,
      args: args,
      callerUrl: callerUrl,
      timestamp: new Date().toISOString(),
      uuid: generateUUID()
    };
    sendEventInfoToServer(eventInfo);
  }

  // Sending info to server
  function sendEventInfoToServer(eventInfo) {
    navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
  }

  // Proxying the methods
  el.style.display = "none";
  function createHookedFunction(originalFunc, eventName, expectedArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateArgs(args, expectedArgs)) {
        collectEventInfo(eventName, args);
      }
      return originalFunc.apply(this, args);
    };
  }
  window.addEventListener = new Proxy(nativeAddEventListener, {
    apply: function (target, thisArg, argumentsList) {
      const addEventListenerHook = eventHooks.find(function (hook) {
        return hook.name === 'addEventListener';
      });
      if (validateArgs(argumentsList, addEventListenerHook.args)) {
        collectEventInfo('addEventListener', argumentsList);
      }
      return target.apply(thisArg, argumentsList);
    }
  });
  window.removeEventListener = new Proxy(nativeRemoveEventListener, {
    apply: function (target, thisArg, argumentsList) {
      const removeEventListenerHook = eventHooks.find(function (hook) {
        return hook.name === 'removeEventListener';
      });
      if (validateArgs(argumentsList, removeEventListenerHook.args)) {
        collectEventInfo('removeEventListener', argumentsList);
      }
      return target.apply(thisArg, argumentsList);
    }
  });
  document.body.appendChild(el);
  window.dispatchEvent = new Proxy(nativeDispatchEvent, {
    apply: function (target, thisArg, argumentsList) {
      const dispatchEventHook = eventHooks.find(function (hook) {
        return hook.name === 'dispatchEvent';
      });
      if (validateArgs(argumentsList, dispatchEventHook.args)) {
        collectEventInfo('dispatchEvent', argumentsList);
      }
      return target.apply(thisArg, argumentsList);
    }
  });
  localStorage.setItem = new Proxy(nativeSetItem, {
    apply: function (target, thisArg, argumentsList) {
      let key = argumentsList[0];
      let value = argumentsList[1];
      collectEventInfo('setItem', [key, value]);
      return target.apply(thisArg, argumentsList);
    }
  });
  localStorage.getItem = new Proxy(nativeGetItem, {
    apply: function (target, thisArg, argumentsList) {
      const key = argumentsList[0];
      collectEventInfo('getItem', [key]);
      return target.apply(thisArg, argumentsList);
    }
  });
})();