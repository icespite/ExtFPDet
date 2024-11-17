"use strict";

const originalXMLHttpRequest = window.XMLHttpRequest;
function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
const originalEventSource = window.EventSource;
const originalSetTimeout = window.setTimeout;
const originalLocalStorageSetItem = window.localStorage.setItem;
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
const originalLocalStorageGetItem = window.localStorage.getItem;
const hooksConfig = window.eventhooks;
let globalVarCollection = {};
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
setInterval(() => {
  globalVarCollection = {
    ...window
  };
}, 1000);
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
function _defineProperty(e, t, n) {
  return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function validatePayload(payload, expectedSchema) {
  for (const key in expectedSchema) {
    if (expectedSchema.hasOwnProperty(key)) {
      const expectedType = expectedSchema[key];
      const actualValue = payload[key];
      if (actualValue === undefined) {
        console.warn(`Missing required property '${key}' in payload`);
        return false;
      }
      if (typeof actualValue !== expectedType) {
        console.warn(`Invalid type for property '${key}' in payload, expected '${expectedType}' but got '${typeof actualValue}'`);
        return false;
      }
    }
  }
  return true;
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
function _toPropertyKey(e) {
  e = _toPrimitive(e, "string");
  return "symbol" === _typeof(e) ? e : String(e);
}
function createHookedFunction(functionName, originalFunc, payloadSchema) {
  return function () {
    const args = Array.from(arguments);
    const payload = {
      functionName,
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId(),
      globalVariables: globalVarCollection
    };
    if (validatePayload(payload, payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalFunc.apply(this, args);
  };
}
function _toPrimitive(e, t) {
  if ("object" !== _typeof(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (void 0 === n) return ("string" === t ? String : Number)(e);
  n = n.call(e, t || "default");
  if ("object" !== _typeof(n)) return n;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
for (const hook of hooksConfig) {
  const originalFunc = window[hook.functionName];
  if (typeof originalFunc === 'function') {
    window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
  }
}
window.addEventListener('click', event => {
  const payload = {
    eventName: 'click',
    target: event.target,
    timestamp: Date.now(),
    sessionId: generateSessionId(),
    globalVariables: globalVarCollection
  };
  sendPayloadToServer(payload);
});
var AuthService = function () {
  function e() {
    _classCallCheck(this, e), _defineProperty(this, "httpService", new HttpService());
  }
  return _createClass(e, [{
    key: "signIn",
    value: function (e) {
      var o = this;
      return new Promise(function (t, n) {
        o.httpService.post("/Login/Login", e).then(function (e) {
          t(e);
        }).catch(function (e) {
          n(e);
        });
      });
    }
  }, {
    key: "checkoutGuest",
    value: function (e) {
      var o = this;
      return new Promise(function (t, n) {
        o.httpService.get("/checkout/checkoutemail?Email=" + encodeURIComponent(e)).then(function (e) {
          t(e);
        }).catch(function (e) {
          n(e);
        });
      });
    }
  }, {
    key: "verifyOTP",
    value: function (e, t) {
      var o = this,
        r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = {
          Email: e,
          code: t
        };
      return new Promise(function (t, n) {
        o.httpService.post(r ? "/UpdateProfile/VerifyTokenUpdate" : "/RegisterAccount/VerifyToken", i, null).then(function (e) {
          t(e);
        }).catch(function (e) {
          n(e);
        });
      });
    }
  }, {
    key: "resendOTP",
    value: function (e) {
      var n = this,
        o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        r = {
          Email: e
        };
      return new Promise(function (t) {
        n.httpService.post(o ? "/UpdateProfile/SendVerifyEmail" : "/RegisterAccount/ReSendVerifyEmail", r, null).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "submitStepRegisterAccount",
    value: function (e, n, o) {
      var r = this;
      return new Promise(function (t) {
        r.httpService.post(e, n, o).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "getSegments",
    value: function (e) {
      var n = this;
      return new Promise(function (t) {
        n.httpService.get("/RegisterAccount/GetSegments?areaCode=" + e).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "subscribeNewsletter",
    value: function (e) {
      var n = this;
      return new Promise(function (t) {
        n.httpService.post("/newsletter/subscribe", e, null).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "uploadDocuments",
    value: function (e, o) {
      return new Promise(function (t, n) {
        new HttpService().uploadFile("/RegisterAccount/UploadDocuments?token=".concat(e), o).then(function (e) {
          t(e);
        }).catch(function (e) {
          n(e);
        });
      });
    }
  }, {
    key: "forgotPassword",
    value: function (e) {
      var n = this;
      return new Promise(function (t) {
        n.httpService.post("/ResetPassword/ForgotPassword", {
          email: e
        }).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "resetPassword",
    value: function (e) {
      var n = this;
      return new Promise(function (t) {
        n.httpService.post("/ResetPassword/ResetPassword", e).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "verifyCode",
    value: function (e) {
      var n = this;
      return new Promise(function (t) {
        n.httpService.post("/ResetPassword/VerifyCode", e).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "forgotUsername",
    value: function (e) {
      var n = this;
      return new Promise(function (t) {
        n.httpService.post("/ForgotUsername/Forgot", e).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "getStateForCountry",
    value: function (e) {
      var n = this;
      return new Promise(function (t) {
        n.httpService.get("/AddressBook/GetStateForCountry?countryCode=" + e).then(function (e) {
          t(e);
        }).catch(function (e) {
          reject(e);
        });
      });
    }
  }]), e;
}();
BN.domContentLoadedFncList.push(function () {
  BN.AuthService = new AuthService();
});
window.setTimeout = function (callback, delay) {
  const payload = {
    functionName: 'setTimeout',
    args: [callback, delay],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId(),
    globalVariables: globalVarCollection
  };
  if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'setTimeout').payloadSchema)) {
    sendPayloadToServer(payload);
  }
  return originalSetTimeout(callback, delay);
};
window.localStorage.setItem = function (key, value) {
  const payload = {
    functionName: 'localStorage.setItem',
    args: [key, value],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId(),
    globalVariables: globalVarCollection
  };
  if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.setItem').payloadSchema)) {
    sendPayloadToServer(payload);
  }
  return originalLocalStorageSetItem.call(window.localStorage, key, value);
};
window.localStorage.getItem = function (key) {
  const payload = {
    functionName: 'localStorage.getItem',
    args: [key],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateSessionId(),
    globalVariables: globalVarCollection
  };
  if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.getItem').payloadSchema)) {
    sendPayloadToServer(payload);
  }
  return originalLocalStorageGetItem.call(window.localStorage, key);
};