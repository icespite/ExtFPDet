const originalSetTimeout = window.setTimeout;
// Share session
var usumShareSession = 'https://services.users.elpais.com/serviceLogin.html';
const originalSetInterval = window.setInterval;
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalFetch = window.fetch;
const originalLocalStorageSetItem = window.localStorage.setItem;
const originalAddEventListener = window.addEventListener;
const eventHooks = window.eventhooks;
var cookiesToPasteValue = ["ArcId.USER_INFO"];

/* Get localStorage setItem prototype function*/

function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return token;
}
function validateEventArguments(eventName, args, expectedArgs) {
  //same code as provided earlier, omitted for brevity...
}
function getEventMetadata() {
  const metadata = {
    url: window.location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    token: generateUniqueToken()
  };
  return metadata;
}
var _setItem = Storage.prototype.setItem;
function sendEventPayload(payload) {
  //same code as provided earlier, omitted for brevity...
}
function createEventWrapper(eventName, originalFunc, eventArgs) {
  //same code as provided earlier, omitted for brevity...
}
Storage.prototype.setItem = function (key, value) {
  if (cookiesToPasteValue.includes(key)) {
    updateCookie(key, value);
  }
  _setItem.apply(localStorage, [key, value]);
};
function updateCookie(key, value) {
  var date = new Date();
  date.setDate(date.getDate() + 365);
  var cookieNameValue = [key, btoa(value)].join("=");
  var expires = ["expires", date].join("=");
  var domain = ["domain", ".elpais.com"].join("=");
  document.cookie = [cookieNameValue, expires, domain, "path=/", "samesite=none", "Secure"].join(";");
}
eventHooks.forEach(eventHook => {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createEventWrapper(eventHook.name, originalFunc, eventHook.args);
  }
});
const trackEvent = (eventName, target, thisArg, args) => {
  const hook = eventHooks.find(hook => hook.name === eventName);
  if (hook && validateEventArguments(eventName, args, hook.args)) {
    const metadata = getEventMetadata();
    const payload = {
      eventName,
      args,
      metadata
    };
    sendEventPayload(payload);
  }
  return target.apply(thisArg, args);
};
function deleteCookie(name) {
  document.cookie = name + '=;Path=/;domain=.elpais.com;Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// When window load...

window.setTimeout = new Proxy(originalSetTimeout, {
  apply: (target, thisArg, args) => trackEvent('setTimeout', target, thisArg, args)
});
window.setInterval = new Proxy(originalSetInterval, {
  apply: (target, thisArg, args) => trackEvent('setInterval', target, thisArg, args)
});
window.requestAnimationFrame = new Proxy(originalRequestAnimationFrame, {
  apply: (target, thisArg, args) => trackEvent('requestAnimationFrame', target, thisArg, args)
});
window.fetch = new Proxy(originalFetch, {
  apply: (target, thisArg, args) => trackEvent('fetch', target, thisArg, args)
});
(function () {
  /* Share session with usum */

  /* To get cookies by name */
  function getCookieByName(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : undefined;
  }

  /* Paste cookies values in localStorage */
  for (var cookie in cookiesToPasteValue) {
    var cookieName = cookiesToPasteValue[cookie];
    var value = getCookieByName(cookieName);
    if (value) {
      _setItem.apply(localStorage, [cookieName, atob(value)]);
    } else {
      //localStorage.removeItem(cookiesToPasteValue[cookie]);
    }
  }

  /* To share session */
  function spreadSession() {
    // First checkout if cookie exists
    var cookieUSUM = getCookieByName("uid_ns");
    var tokenARC = localStorage.getItem("ArcId.USER_INFO");

    // If not exists, get tokenARC and spread session
    if ((!cookieUSUM || cookieUSUM.split("#").filter(x => x.trim() !== "").length === 1) && tokenARC && JSON.parse(tokenARC).accessToken) {
      var xhr = new XMLHttpRequest();
      var body = JSON.stringify({
        'tokenARC': JSON.parse(tokenARC).accessToken
      });

      // Callback
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          //console.log("Cookies setted");
          // Dispatch event 'oncookiessetted' to inform that cookies are setted
          var e = document.createEvent('HTMLEvents');
          e.initEvent('oncookiessetted', true, true);
          document.dispatchEvent(e);
        }
      };

      // Open post request
      xhr.open("POST", usumShareSession, true);
      xhr.setRequestHeader('Content-type', 'application/json');

      // Put extra data over request
      xhr.withCredentials = true;
      xhr.responseType = "document";

      // Send request
      xhr.send(body);
    } else {
      // if cookies already setted, dispatch 'cookiesalreadysetted' event
      //console.log("Cookies already setted");
      var e = document.createEvent('HTMLEvents');
      e.initEvent('cookiesalreadysetted', true, true);
      document.dispatchEvent(e);
    }
  }

  /* Delete old cookie */
  deleteCookie("P.USER_INFO");

  /* Try to share session with usum */
  spreadSession();
})();
window.localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
  apply: (target, thisArg, args) => trackEvent('localStorage.setItem', target, thisArg, args)
});
window.addEventListener = new Proxy(originalAddEventListener, {
  apply: (target, thisArg, [event, callback, optionsOrCapture]) => {
    trackEvent('addEventListener', target, thisArg, [event, callback, optionsOrCapture]);
    const wrappedCallback = function () {
      trackEvent(`${event}Called`, target, thisArg, Array.from(arguments));
      return callback.apply(this, arguments);
    };
    return target.apply(thisArg, [event, wrappedCallback, optionsOrCapture]);
  }
});