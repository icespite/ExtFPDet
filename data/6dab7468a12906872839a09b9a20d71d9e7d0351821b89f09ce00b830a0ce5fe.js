let originalLocalStorageSetItem = localStorage.setItem;
let originalLocalStorageGetItem = localStorage.getItem;
const originalFetch = window.fetch;
const originalRequest = window.Request;
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function (e, t) {
    return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), a(t), t;
  } : a(jQuery);
}(function (O) {
  "use strict";

  var d = /\r?\n/g,
    h = {},
    X = (h.fileapi = void 0 !== O('<input type="file">').get(0).files, h.formdata = void 0 !== window.FormData, !!O.fn.prop);
  function o(e) {
    var t = e.data;
    e.isDefaultPrevented() || (e.preventDefault(), O(e.target).closest("form").ajaxSubmit(t));
  }
  function i(e) {
    var t = e.target,
      a = O(t);
    if (!a.is("[type=submit],[type=image]")) {
      var r = a.closest("[type=submit]");
      if (0 === r.length) return;
      t = r[0];
    }
    var n = t.form;
    "image" === (n.clk = t).type && (void 0 !== e.offsetX ? (n.clk_x = e.offsetX, n.clk_y = e.offsetY) : "function" == typeof O.fn.offset ? (r = a.offset(), n.clk_x = e.pageX - r.left, n.clk_y = e.pageY - r.top) : (n.clk_x = e.pageX - t.offsetLeft, n.clk_y = e.pageY - t.offsetTop)), setTimeout(function () {
      n.clk = n.clk_x = n.clk_y = null;
    }, 100);
  }
  function C() {
    var e;
    O.fn.ajaxSubmit.debug && (e = "[jquery.form] " + Array.prototype.join.call(arguments, ""), window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e));
  }
  O.fn.attr2 = function () {
    var e;
    return X && ((e = this.prop.apply(this, arguments)) && e.jquery || "string" == typeof e) ? e : this.attr.apply(this, arguments);
  }, O.fn.ajaxSubmit = function (F, e, t, a) {
    if (this.length) {
      var E,
        L = this,
        e = ("function" == typeof F ? F = {
          success: F
        } : "string" == typeof F || !1 === F && 0 < arguments.length ? (F = {
          url: F,
          data: e,
          dataType: t
        }, "function" == typeof a && (F.success = a)) : void 0 === F && (F = {}), E = F.method || F.type || this.attr2("method"), t = (t = (t = "string" == typeof (e = F.url || this.attr2("action")) ? O.trim(e) : "") || window.location.href || "") && (t.match(/^([^#]+)/) || [])[1], a = /(MSIE|Trident)/.test(navigator.userAgent || "") && /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", F = O.extend(!0, {
          url: t,
          success: O.ajaxSettings.success,
          type: E || O.ajaxSettings.type,
          iframeSrc: a
        }, F), {});
      if (this.trigger("form-pre-serialize", [this, F, e]), e.veto) C("ajaxSubmit: submit vetoed via form-pre-serialize trigger");else if (F.beforeSerialize && !1 === F.beforeSerialize(this, F)) C("ajaxSubmit: submit aborted via beforeSerialize callback");else {
        var t = F.traditional,
          M = (void 0 === t && (t = O.ajaxSettings.traditional), []),
          r = this.formToArray(F.semantic, M, F.filtering);
        if (F.data && (a = O.isFunction(F.data) ? F.data(r) : F.data, F.extraData = a, l = O.param(a, t)), F.beforeSubmit && !1 === F.beforeSubmit(r, this, F)) C("ajaxSubmit: submit aborted via beforeSubmit callback");else if (this.trigger("form-submit-validate", [r, this, F, e]), e.veto) C("ajaxSubmit: submit vetoed via form-submit-validate trigger");else {
          var o,
            n,
            i,
            a = O.param(r, t),
            s = (l && (a = a ? a + "&" + l : l), "GET" === F.type.toUpperCase() ? (F.url += (0 <= F.url.indexOf("?") ? "&" : "?") + a, F.data = null) : F.data = a, []);
          F.resetForm && s.push(function () {
            L.resetForm();
          }), F.clearForm && s.push(function () {
            L.clearForm(F.includeHidden);
          }), !F.dataType && F.target ? (o = F.success || function () {}, s.push(function (e, t, a) {
            var r = arguments,
              n = F.replaceTarget ? "replaceWith" : "html";
            O(F.target)[n](e).each(function () {
              o.apply(this, r);
            });
          })) : F.success && (O.isArray(F.success) ? O.merge(s, F.success) : s.push(F.success)), F.success = function (e, t, a) {
            for (var r = F.context || this, n = 0, o = s.length; n < o; n++) s[n].apply(r, [e, t, a || L, L]);
          }, F.error && (n = F.error, F.error = function (e, t, a) {
            var r = F.context || this;
            n.apply(r, [e, t, a, L]);
          }), F.complete && (i = F.complete, F.complete = function (e, t) {
            var a = F.context || this;
            i.apply(a, [e, t, L]);
          });
          var c,
            e = 0 < O("input[type=file]:enabled", this).filter(function () {
              return "" !== O(this).val();
            }).length,
            t = "multipart/form-data",
            l = L.attr("enctype") === t || L.attr("encoding") === t,
            a = h.fileapi && h.formdata;
          C("fileAPI :" + a), !1 !== F.iframe && (F.iframe || (e || l) && !a) ? F.closeKeepAlive ? O.get(F.closeKeepAlive, function () {
            c = f(r);
          }) : c = f(r) : c = (e || l) && a ? function (e) {
            for (var a = new FormData(), t = 0; t < e.length; t++) a.append(e[t].name, e[t].value);
            if (F.extraData) {
              var r = function (e) {
                var t,
                  a,
                  r = O.param(e, F.traditional).split("&"),
                  n = r.length,
                  o = [];
                for (t = 0; t < n; t++) r[t] = r[t].replace(/\+/g, " "), a = r[t].split("="), o.push([decodeURIComponent(a[0]), decodeURIComponent(a[1])]);
                return o;
              }(F.extraData);
              for (t = 0; t < r.length; t++) r[t] && a.append(r[t][0], r[t][1]);
            }
            F.data = null;
            var n = O.extend(!0, {}, O.ajaxSettings, F, {
              contentType: !1,
              processData: !1,
              cache: !1,
              type: E || "POST"
            });
            F.uploadProgress && (n.xhr = function () {
              var e = O.ajaxSettings.xhr();
              return e.upload && e.upload.addEventListener("progress", function (e) {
                var t = 0,
                  a = e.loaded || e.position,
                  r = e.total;
                e.lengthComputable && (t = Math.ceil(a / r * 100)), F.uploadProgress(e, a, r, t);
              }, !1), e;
            });
            n.data = null;
            var o = n.beforeSend;
            return n.beforeSend = function (e, t) {
              F.formData ? t.data = F.formData : t.data = a, o && o.call(this, e, t);
            }, O.ajax(n);
          }(r) : O.ajax(F), L.removeData("jqxhr").data("jqxhr", c);
          for (var u = 0; u < M.length; u++) M[u] = null;
          this.trigger("form-submit-notify", [this, F]);
        }
      }
    } else C("ajaxSubmit: skipping submit process - no element selected");
    return this;
    function f(e) {
      var t,
        a,
        l,
        u,
        f,
        d,
        m,
        p,
        h,
        o = L[0],
        g = O.Deferred();
      if (g.abort = function (e) {
        m.abort(e);
      }, e) for (a = 0; a < M.length; a++) t = O(M[a]), X ? t.prop("disabled", !1) : t.removeAttr("disabled");
      (l = O.extend(!0, {}, O.ajaxSettings, F)).context = l.context || l;
      var v,
        x,
        r,
        y,
        b,
        T,
        j,
        w,
        i,
        S,
        s = "jqFormIO" + new Date().getTime(),
        c = o.ownerDocument,
        k = L.closest("body");
      return l.iframeTarget ? (r = (f = O(l.iframeTarget, c)).attr2("name")) ? s = r : f.attr2("name", s) : (f = O('<iframe name="' + s + '" src="' + l.iframeSrc + '" />', c)).css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px"
      }), d = f[0], m = {
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: "n/a",
        getAllResponseHeaders: function () {},
        getResponseHeader: function () {},
        setRequestHeader: function () {},
        abort: function (e) {
          var t = "timeout" === e ? "timeout" : "aborted";
          C("aborting upload... " + t), this.aborted = 1;
          try {
            d.contentWindow.document.execCommand && d.contentWindow.document.execCommand("Stop");
          } catch (e) {}
          f.attr("src", l.iframeSrc), m.error = t, l.error && l.error.call(l.context, m, t, e), u && O.event.trigger("ajaxError", [m, l, t]), l.complete && l.complete.call(l.context, m, t);
        }
      }, (u = l.global) && 0 == O.active++ && O.event.trigger("ajaxStart"), u && O.event.trigger("ajaxSend", [m, l]), l.beforeSend && !1 === l.beforeSend.call(l.context, m, l) ? (l.global && O.active--, g.reject()) : m.aborted ? g.reject() : ((e = o.clk) && (r = e.name) && !e.disabled && (l.extraData = l.extraData || {}, l.extraData[r] = e.value, "image" === e.type) && (l.extraData[r + ".x"] = o.clk_x, l.extraData[r + ".y"] = o.clk_y), v = 1, x = 2, e = O("meta[name=csrf-token]").attr("content"), (r = O("meta[name=csrf-param]").attr("content")) && e && (l.extraData = l.extraData || {}, l.extraData[r] = e), l.forceSync ? n() : setTimeout(n, 10), T = 50, w = O.parseXML || function (e, t) {
        return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = new DOMParser().parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null;
      }, i = O.parseJSON || function (e) {
        return window.eval("(" + e + ")");
      }, S = function (e, t, a) {
        var r = e.getResponseHeader("content-type") || "",
          n = ("xml" === t || !t) && 0 <= r.indexOf("xml"),
          e = n ? e.responseXML : e.responseText;
        return n && "parsererror" === e.documentElement.nodeName && O.error && O.error("parsererror"), "string" == typeof (e = a && a.dataFilter ? a.dataFilter(e, t) : e) && (("json" === t || !t) && 0 <= r.indexOf("json") ? e = i(e) : ("script" === t || !t) && 0 <= r.indexOf("javascript") && O.globalEval(e)), e;
      }), g;
      function D(t) {
        var a = null;
        try {
          t.contentWindow && (a = t.contentWindow.document);
        } catch (e) {
          C("cannot get iframe.contentWindow document: " + e);
        }
        if (!a) try {
          a = t.contentDocument || t.document;
        } catch (e) {
          C("cannot get iframe.contentDocument: " + e), a = t.document;
        }
        return a;
      }
      function n() {
        var e = L.attr2("target"),
          t = L.attr2("action"),
          a = L.attr("enctype") || L.attr("encoding") || "multipart/form-data";
        o.setAttribute("target", s), E && !/post/i.test(E) || o.setAttribute("method", "POST"), t !== l.url && o.setAttribute("action", l.url), l.skipEncodingOverride || E && !/post/i.test(E) || L.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), l.timeout && (h = setTimeout(function () {
          p = !0, A(v);
        }, l.timeout));
        var r = [];
        try {
          if (l.extraData) for (var n in l.extraData) l.extraData.hasOwnProperty(n) && (O.isPlainObject(l.extraData[n]) && l.extraData[n].hasOwnProperty("name") && l.extraData[n].hasOwnProperty("value") ? r.push(O('<input type="hidden" name="' + l.extraData[n].name + '">', c).val(l.extraData[n].value).appendTo(o)[0]) : r.push(O('<input type="hidden" name="' + n + '">', c).val(l.extraData[n]).appendTo(o)[0]));
          l.iframeTarget || f.appendTo(k), d.attachEvent ? d.attachEvent("onload", A) : d.addEventListener("load", A, !1), setTimeout(function e() {
            try {
              var t = D(d).readyState;
              C("state = " + t), t && "uninitialized" === t.toLowerCase() && setTimeout(e, 50);
            } catch (e) {
              C("Server abort: ", e, " (", e.name, ")"), A(x), h && clearTimeout(h), h = void 0;
            }
          }, 15);
          try {
            o.submit();
          } catch (e) {
            document.createElement("form").submit.apply(o);
          }
        } finally {
          o.setAttribute("action", t), o.setAttribute("enctype", a), e ? o.setAttribute("target", e) : L.removeAttr("target"), O(r).remove();
        }
      }
      function A(t) {
        if (!m.aborted && !j) if ((b = D(d)) || (C("cannot access response document"), t = x), t === v && m) m.abort("timeout"), g.reject(m, "timeout");else if (t === x && m) m.abort("server abort"), g.reject(m, "error", "server abort");else if (b && b.location.href !== l.iframeSrc || p) {
          d.detachEvent ? d.detachEvent("onload", A) : d.removeEventListener("load", A, !1);
          var a,
            t = "success";
          try {
            if (p) throw "timeout";
            var e = "xml" === l.dataType || b.XMLDocument || O.isXMLDoc(b);
            if (C("isXml=" + e), !e && window.opera && (null === b.body || !b.body.innerHTML) && --T) return C("requeing onLoad callback, DOM not available"), void setTimeout(A, 250);
            var r,
              n,
              o,
              i = b.body || b.documentElement,
              s = (m.responseText = i ? i.innerHTML : null, m.responseXML = b.XMLDocument || b, e && (l.dataType = "xml"), m.getResponseHeader = function (e) {
                return {
                  "content-type": l.dataType
                }[e.toLowerCase()];
              }, i && (m.status = Number(i.getAttribute("status")) || m.status, m.statusText = i.getAttribute("statusText") || m.statusText), (l.dataType || "").toLowerCase()),
              c = /(json|script|text)/.test(s);
            c || l.textarea ? (r = b.getElementsByTagName("textarea")[0]) ? (m.responseText = r.value, m.status = Number(r.getAttribute("status")) || m.status, m.statusText = r.getAttribute("statusText") || m.statusText) : c && (n = b.getElementsByTagName("pre")[0], o = b.getElementsByTagName("body")[0], n ? m.responseText = n.textContent || n.innerText : o && (m.responseText = o.textContent || o.innerText)) : "xml" === s && !m.responseXML && m.responseText && (m.responseXML = w(m.responseText));
            try {
              y = S(m, s, l);
            } catch (e) {
              t = "parsererror", m.error = a = e || t;
            }
          } catch (e) {
            C("error caught: ", e), t = "error", m.error = a = e || t;
          }
          m.aborted && (C("upload aborted"), t = null), "success" === (t = m.status ? 200 <= m.status && m.status < 300 || 304 === m.status ? "success" : "error" : t) ? (l.success && l.success.call(l.context, y, "success", m), g.resolve(m.responseText, "success", m), u && O.event.trigger("ajaxSuccess", [m, l])) : t && (void 0 === a && (a = m.statusText), l.error && l.error.call(l.context, m, t, a), g.reject(m, "error", a), u) && O.event.trigger("ajaxError", [m, l, a]), u && O.event.trigger("ajaxComplete", [m, l]), u && ! --O.active && O.event.trigger("ajaxStop"), l.complete && l.complete.call(l.context, m, t), j = !0, l.timeout && clearTimeout(h), setTimeout(function () {
            l.iframeTarget ? f.attr("src", l.iframeSrc) : f.remove(), m.responseXML = null;
          }, 100);
        }
      }
    }
  }, O.fn.ajaxForm = function (e, t, a, r) {
    var n;
    return ("string" == typeof e || !1 === e && 0 < arguments.length) && (e = {
      url: e,
      data: t,
      dataType: a
    }, "function" == typeof r) && (e.success = r), (e = e || {}).delegation = e.delegation && O.isFunction(O.fn.on), e.delegation || 0 !== this.length ? e.delegation ? (O(document).off("submit.form-plugin", this.selector, o).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, e, o).on("click.form-plugin", this.selector, e, i), this) : (e.beforeFormUnbind && e.beforeFormUnbind(this, e), this.ajaxFormUnbind().on("submit.form-plugin", e, o).on("click.form-plugin", e, i)) : (n = {
      s: this.selector,
      c: this.context
    }, !O.isReady && n.s ? (C("DOM not ready, queuing ajaxForm"), O(function () {
      O(n.s, n.c).ajaxForm(e);
    })) : C("terminating; zero elements found by selector" + (O.isReady ? "" : " (DOM not ready)")), this);
  }, O.fn.ajaxFormUnbind = function () {
    return this.off("submit.form-plugin click.form-plugin");
  }, O.fn.formToArray = function (e, t, a) {
    var r = [];
    if (0 !== this.length) {
      var n = this[0],
        o = this.attr("id"),
        i = (i = e || void 0 === n.elements ? n.getElementsByTagName("*") : n.elements) && O.makeArray(i);
      if ((i = o && (e || /(Edge|Trident)\//.test(navigator.userAgent)) && (o = O(':input[form="' + o + '"]').get()).length ? (i || []).concat(o) : i) && i.length) {
        for (var s, c, l, u, f, d = 0, m = (i = O.isFunction(a) ? O.map(i, a) : i).length; d < m; d++) if ((f = (l = i[d]).name) && !l.disabled) if (e && n.clk && "image" === l.type) n.clk === l && (r.push({
          name: f,
          value: O(l).val(),
          type: l.type
        }), r.push({
          name: f + ".x",
          value: n.clk_x
        }, {
          name: f + ".y",
          value: n.clk_y
        }));else if ((c = O.fieldValue(l, !0)) && c.constructor === Array) for (t && t.push(l), s = 0, u = c.length; s < u; s++) r.push({
          name: f,
          value: c[s]
        });else if (h.fileapi && "file" === l.type) {
          t && t.push(l);
          var p = l.files;
          if (p.length) for (s = 0; s < p.length; s++) r.push({
            name: f,
            value: p[s],
            type: l.type
          });else r.push({
            name: f,
            value: "",
            type: l.type
          });
        } else null != c && (t && t.push(l), r.push({
          name: f,
          value: c,
          type: l.type,
          required: l.required
        }));
        !e && n.clk && (f = (a = (o = O(n.clk))[0]).name) && !a.disabled && "image" === a.type && (r.push({
          name: f,
          value: o.val()
        }), r.push({
          name: f + ".x",
          value: n.clk_x
        }, {
          name: f + ".y",
          value: n.clk_y
        }));
      }
    }
    return r;
  }, O.fn.formSerialize = function (e) {
    return O.param(this.formToArray(e));
  }, O.fn.fieldSerialize = function (n) {
    var o = [];
    return this.each(function () {
      var e = this.name;
      if (e) {
        var t = O.fieldValue(this, n);
        if (t && t.constructor === Array) for (var a = 0, r = t.length; a < r; a++) o.push({
          name: e,
          value: t[a]
        });else null != t && o.push({
          name: this.name,
          value: t
        });
      }
    }), O.param(o);
  }, O.fn.fieldValue = function (e) {
    for (var t = [], a = 0, r = this.length; a < r; a++) {
      var n = this[a],
        n = O.fieldValue(n, e);
      null == n || n.constructor === Array && !n.length || (n.constructor === Array ? O.merge(t, n) : t.push(n));
    }
    return t;
  }, O.fieldValue = function (e, t) {
    var a = e.name,
      r = e.type,
      n = e.tagName.toLowerCase();
    if ((t = void 0 === t ? !0 : t) && (!a || e.disabled || "reset" === r || "button" === r || ("checkbox" === r || "radio" === r) && !e.checked || ("submit" === r || "image" === r) && e.form && e.form.clk !== e || "select" === n && -1 === e.selectedIndex)) return null;
    if ("select" !== n) return O(e).val().replace(d, "\r\n");
    t = e.selectedIndex;
    if (t < 0) return null;
    for (var o = [], i = e.options, s = "select-one" === r, c = s ? t + 1 : i.length, l = s ? t : 0; l < c; l++) {
      var u = i[l];
      if (u.selected && !u.disabled) {
        var f = (f = u.value) || (u.attributes && u.attributes.value && !u.attributes.value.specified ? u.text : u.value);
        if (s) return f;
        o.push(f);
      }
    }
    return o;
  }, O.fn.clearForm = function (e) {
    return this.each(function () {
      O("input,select,textarea", this).clearFields(e);
    });
  }, O.fn.clearFields = O.fn.clearInputs = function (a) {
    var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var e = this.type,
        t = this.tagName.toLowerCase();
      r.test(e) || "textarea" === t ? this.value = "" : "checkbox" === e || "radio" === e ? this.checked = !1 : "select" === t ? this.selectedIndex = -1 : "file" === e ? /MSIE/.test(navigator.userAgent) ? O(this).replaceWith(O(this).clone(!0)) : O(this).val("") : a && (!0 === a && /hidden/.test(e) || "string" == typeof a && O(this).is(a)) && (this.value = "");
    });
  }, O.fn.resetForm = function () {
    return this.each(function () {
      var t = O(this),
        e = this.tagName.toLowerCase();
      switch (e) {
        case "input":
          this.checked = this.defaultChecked;
        case "textarea":
          return this.value = this.defaultValue, !0;
        case "option":
        case "optgroup":
          var a = t.parents("select");
          return a.length && a[0].multiple ? "option" === e ? this.selected = this.defaultSelected : t.find("option").resetForm() : a.resetForm(), !0;
        case "select":
          return t.find("option").each(function (e) {
            if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1;
          }), !0;
        case "label":
          var a = O(t.attr("for")),
            r = t.find("input,select,textarea");
          return a[0] && r.unshift(a[0]), r.resetForm(), !0;
        case "form":
          return "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset(), !0;
        default:
          return t.find("form,input,label,select,textarea").resetForm(), !0;
      }
    });
  }, O.fn.enable = function (e) {
    return void 0 === e && (e = !0), this.each(function () {
      this.disabled = !e;
    });
  }, O.fn.selected = function (t) {
    return void 0 === t && (t = !0), this.each(function () {
      var e = this.type;
      "checkbox" === e || "radio" === e ? this.checked = t : "option" === this.tagName.toLowerCase() && (e = O(this).parent("select"), t && e[0] && "select-one" === e[0].type && e.find("option").selected(!1), this.selected = t);
    });
  }, O.fn.ajaxSubmit.debug = !1;
});
const nativePostMessage = window.postMessage;
const nativeAddEventListener = window.addEventListener;
const nativeRemoveEventListener = window.removeEventListener;
const nativeDispatchEvent = window.dispatchEvent;
const eventHooks = window.eventhooks;
function generateUUID() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000000);
  return `${timestamp}-${random}`;
}
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
;
/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 JÃ¶rn Zaefferer; Licensed MIT */

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
function getCallerUrl(stackTrace) {
  const callerUrlMatch = stackTrace.match(/https?:\/\/[^)\n]+/i);
  return callerUrlMatch ? callerUrlMatch[0] : '';
}
function sendEventInfoToServer(eventInfo) {
  navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
}
function createHookedFunction(originalFunc, eventName, expectedArgs) {
  return function () {
    const args = Array.from(arguments);
    if (validateArgs(args, expectedArgs)) {
      collectEventInfo(eventName, args);
    }
    return originalFunc.apply(this, args);
  };
}
eventHooks.forEach(function (eventHook) {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createHookedFunction(originalFunc, eventHook.name, eventHook.args);
  }
});
localStorage.setItem = function (key, value) {
  collectEventInfo("localStorage.setItem", [key, value]);
  return originalLocalStorageSetItem.apply(this, arguments);
};
localStorage.getItem = function (key) {
  collectEventInfo("localStorage.getItem", [key]);
  return originalLocalStorageGetItem.apply(this, arguments);
};
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0;
        }
        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    },
    valid: function () {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList));
      }), c.errorList = d), b;
    },
    rules: function (b, c) {
      if (this.length) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0];
        if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;
          case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
              i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required");
            }), i) : (delete e[j.name], f);
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
          required: h
        }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
          remote: h
        })), g;
      }
    }
  }), a.extend(a.expr[":"], {
    blank: function (b) {
      return !a.trim("" + a(b).val());
    },
    filled: function (b) {
      var c = a(b).val();
      return null !== c && !!a.trim("" + c);
    },
    unchecked: function (b) {
      return !a(b).prop("checked");
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c);
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function (a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
      },
      onfocusout: function (a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      },
      onkeyup: function (b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
      },
      onclick: function (a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      },
      unhighlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      }
    },
    setDefaults: function (b) {
      a.extend(a.validator.defaults, b);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}."),
      step: a.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function () {
        function b(b) {
          var c = a.data(this.form, "validator"),
            d = "on" + b.type.replace(/^validate/, ""),
            e = c.settings;
          e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
        }
        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c,
          d = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            d[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
      },
      form: function () {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function () {
        this.prepareForm();
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
        return this.valid();
      },
      element: function (b) {
        var c,
          d,
          e = this.clean(b),
          f = this.validationTargetFor(e),
          g = this,
          h = !0;
        return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = h && g.check(e)));
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h;
      },
      showErrors: function (b) {
        if (b) {
          var c = this;
          a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return {
              message: a,
              element: c.findByName(b)[0]
            };
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function () {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(b);
      },
      resetElements: function (a) {
        var b;
        if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },
      objectLength: function (a) {
        var b,
          c = 0;
        for (b in a) a[b] && c++;
        return c;
      },
      hideErrors: function () {
        this.hideThese(this.toHide);
      },
      hideThese: function (a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide();
      },
      valid: function () {
        return 0 === this.size();
      },
      size: function () {
        return this.errorList.length;
      },
      focusInvalid: function () {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (b) {}
      },
      findLastActive: function () {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      },
      elements: function () {
        var b = this,
          c = {};
        return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name");
          return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0, !0);
        });
      },
      clean: function (b) {
        return a(b)[0];
      },
      errors: function () {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext);
      },
      resetInternals: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
      },
      reset: function () {
        this.resetInternals(), this.currentElements = a([]);
      },
      prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function (a) {
        this.reset(), this.toHide = this.errorsFor(a);
      },
      elementValue: function (b) {
        var c,
          d,
          e = a(b),
          f = b.type;
        return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
      },
      check: function (b) {
        b = this.validationTargetFor(this.clean(b));
        var c,
          d,
          e,
          f = a(b).rules(),
          g = a.map(f, function (a, b) {
            return b;
          }).length,
          h = !1,
          i = this.elementValue(b);
        if ("function" == typeof f.normalizer) {
          if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
          delete f.normalizer;
        }
        for (d in f) {
          e = {
            method: d,
            parameters: f[d]
          };
          try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;
              continue;
            }
            if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1;
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j;
          }
        }
        if (!h) return this.objectLength(f) && this.successList.push(b), !0;
      },
      customDataMessage: function (b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      },
      customMessage: function (a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b]);
      },
      findDefined: function () {
        for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
      },
      defaultMessage: function (b, c) {
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
          e = /\$?\{(\d+)\}/g;
        return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
      },
      formatAndAdd: function (a, b) {
        var c = this.defaultMessage(a, b);
        this.errorList.push({
          message: c,
          element: a,
          method: b.method
        }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
      },
      addWrapper: function (a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      },
      defaultShowErrors: function () {
        var a, b, c;
        for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function () {
        return a(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function (b, c) {
        var d,
          e,
          f,
          g,
          h = this.errorsFor(b),
          i = this.idOrName(b),
          j = a(b).attr("aria-describedby");
        h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
      },
      errorsFor: function (b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
          d = a(b).attr("aria-describedby"),
          e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
      },
      escapeCssMeta: function (a) {
        return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function (a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      },
      validationTargetFor: function (b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
      },
      checkable: function (a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function (b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
      },
      getLength: function (b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;
          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
        }
        return b.length;
      },
      depend: function (a, b) {
        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0;
      },
      dependTypes: {
        "boolean": function (a) {
          return a;
        },
        string: function (b, c) {
          return !!a(b, c.form).length;
        },
        "function": function (a, b) {
          return a(b);
        }
      },
      optional: function (b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      },
      startRequest: function (b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
      },
      stopRequest: function (b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function (b, c) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, {
            method: c
          })
        });
      },
      destroy: function () {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function (b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    },
    classRules: function (b) {
      var c = {},
        d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    },
    normalizeAttributeRule: function (a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
    },
    attributeRules: function (b) {
      var c,
        d,
        e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function (b) {
      var c,
        d,
        e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
      return e;
    },
    staticRules: function (b) {
      var c = {},
        d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    },
    normalizeRules: function (b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];
        if (e.param || e.depends) {
          var f = !0;
          switch (typeof e.depends) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;
            case "function":
              f = e.depends.call(c, c);
          }
          f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]));
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    },
    normalizeRule: function (b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }
      return b;
    },
    addMethod: function (b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    },
    methods: {
      required: function (b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";
        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0;
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
      },
      email: function (a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      },
      url: function (a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a);
      },
      date: function (a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
      },
      dateISO: function (a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
      },
      number: function (a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      },
      digits: function (a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      minlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d;
      },
      maxlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || d >= e;
      },
      rangelength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1];
      },
      min: function (a, b, c) {
        return this.optional(b) || a >= c;
      },
      max: function (a, b, c) {
        return this.optional(b) || c >= a;
      },
      range: function (a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      },
      step: function (b, c, d) {
        var e = a(c).attr("type"),
          f = "Step attribute on input type " + e + " is not supported.",
          g = ["text", "number", "range"],
          h = new RegExp("\\b" + e + "\\b"),
          i = e && !h.test(g.join());
        if (i) throw new Error(f);
        return this.optional(c) || b % d === 0;
      },
      equalTo: function (b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      },
      remote: function (b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";
        e = "string" == typeof e && e || "remote";
        var f,
          g,
          h,
          i = this.previousValue(c, e);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
          url: d
        } || d, h = a.param(a.extend({
          data: b
        }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: g,
          context: f.currentForm,
          success: function (a) {
            var d,
              g,
              h,
              j = a === !0 || "true" === a;
            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
              method: e,
              parameters: b
            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
          }
        }, d)), "pending");
      }
    }
  });
  var b,
    c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
      f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
  });
});
fetch = function (input, init) {
  collectEventInfo("fetch", [input, init]);
  return originalFetch.apply(this, arguments);
};
Request = function (input, init) {
  collectEventInfo("Request", [input, init]);
  return originalRequest.apply(this, arguments);
};
;
window.postMessage = new Proxy(nativePostMessage, {
  apply: function (target, thisArg, argumentsList) {
    const postMessageHook = eventHooks.find(function (hook) {
      return hook.name === 'postMessage';
    });
    if (validateArgs(argumentsList, postMessageHook.args)) {
      collectEventInfo('postMessage', argumentsList);
    }
    return target.apply(thisArg, argumentsList);
  }
});
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
Object.keys(window).forEach(key => {
  if (/^on/.test(key)) {
    window.addEventListener(key.slice(2), function (event) {
      collectEventInfo(key, [event]);
    });
  }
});