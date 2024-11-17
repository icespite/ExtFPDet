import { c as g } from "./LoginWidget-34fb458a.js";
const nativeFetch = window.fetch;
const nativeLocalStorage = window.localStorage;
const nativeSetTimeout = window.setTimeout;
const c = new Map();
const nativeSetInterval = window.setInterval;
let n = null;
const nativeAddEventListener = EventTarget.prototype.addEventListener;
const [h, o, w, p] = ["replace", "push", "skip", ""];
const nativeRemoveEventListener = EventTarget.prototype.removeEventListener;
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${randomNum}`;
}
class s {
  static register(t, {
    open: e,
    close: a
  }) {
    c.set(t, {
      open: e,
      close: a
    }), s._checkHash(t);
  }
  static execute(t, ...e) {
    s._set(t, {}, ...e);
  }
  static replace(t = p, ...e) {
    s._set(t, {
      mode: h,
      jump: !0
    }, ...e);
  }
  static jump(t = p, ...e) {
    s._set(t, {
      mode: o,
      jump: !0
    }, ...e);
  }
  static clear() {
    s._set(p);
  }
  static _set(t, {
    mode: e = o,
    jump: a = !1
  } = {}, ...i) {
    const r = t ? `#${[t, ...i].join("/")}` : " ",
      l = `#${t}`;
    t === n && g(`switching to the the same name as current location! 
                keep history short! replace states when possible!`, t, ...i), c.get(n) && !a && c.get(n).close(...i), n = t, e === h ? window.history.replaceState(t, l, r) : e === o && window.history.pushState(t, l, r), c.get(t) && !a && c.get(t).open(...i);
  }
  static _onChange() {
    const t = s._getHash();
    s._set(t.name, {
      mode: w
    }, ...t.params);
  }
  static _checkHash(t) {
    const e = s._getHash();
    t === e.name && s._set(e.name, {
      mode: h
    }, ...e.params);
  }
  static _getHash() {
    const [t, ...e] = document.location.hash.slice(1).split("/");
    return {
      name: t,
      params: e
    };
  }
  static _listen() {
    window.addEventListener("popstate", s._onChange, !0);
  }
}
function logEvent(eventName, details) {
  console.log(`Event: ${eventName}`, details);
}
s._listen();
function sendEventToServer(eventData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData),
    mode: 'cors',
    cache: 'no-cache'
  };
  nativeFetch('/api/log-event', requestOptions).then(response => {
    if (!response.ok) {
      console.error('Failed to send event to server:', response.statusText);
    }
  }).catch(error => {
    console.error('Error sending event to server:', error);
  });
}
function trackEvent(eventName, args) {
  const eventData = {
    eventName,
    args,
    timestamp: new Date().toISOString(),
    uniqueId: generateUniqueId()
  };
  sendEventToServer(eventData);
}
window.fetch = new Proxy(nativeFetch, {
  apply: function (target, thisArg, args) {
    trackEvent('fetch', args);
    return Reflect.apply(target, thisArg, args);
  }
});
window.localStorage.setItem = new Proxy(nativeLocalStorage.setItem, {
  apply: function (target, thisArg, args) {
    trackEvent('localStorageSetItem', args);
    return Reflect.apply(target, thisArg, args);
  }
});
window.HistoryModule = s;
window.setTimeout = new Proxy(nativeSetTimeout, {
  apply: function (target, thisArg, args) {
    trackEvent('setTimeout', args);
    return Reflect.apply(target, thisArg, args);
  }
});
window.setInterval = new Proxy(nativeSetInterval, {
  apply: function (target, thisArg, args) {
    trackEvent('setInterval', args);
    return Reflect.apply(target, thisArg, args);
  }
});
export { s as H };
EventTarget.prototype.addEventListener = new Proxy(nativeAddEventListener, {
  apply: function (target, thisArg, args) {
    trackEvent('addEventListener', {
      type: args[0],
      listener: args[1].toString()
    });
    return Reflect.apply(target, thisArg, args);
  }
});
EventTarget.prototype.removeEventListener = new Proxy(nativeRemoveEventListener, {
  apply: function (target, thisArg, args) {
    trackEvent('removeEventListener', {
      type: args[0],
      listener: args[1].toString()
    });
    return Reflect.apply(target, thisArg, args);
  }
});