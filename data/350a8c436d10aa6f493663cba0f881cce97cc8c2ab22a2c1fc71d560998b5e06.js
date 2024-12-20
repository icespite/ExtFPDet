(function (d) {
  let extensionsChecked = [];
  function r(a) {
    return null === a || void 0 === a ? a : !!a;
  }
  function D(a, b) {
    if (!b || !b.length) return a;
    for (var c = {}, e = 0; e < b.length; e++) c[b[e]] = !!a[b[e]];
    return c;
  }
  function l(a, b) {
    if (!a && 0 !== a) return a;
    for (var c = {}, e = 0; e < b; e++) c[e + 1] = !!(a & 1), a >>= 1;
    return c;
  }
  function E(a) {
    if (a && a.length) {
      for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
      return b;
    }
  }
  function v(a) {
    var b = "gpp_" + ++A;
    k[b] = a;
    return b;
  }
  let savedData = {};
  let globalVars = Object.keys(window);
  var B = {
      getVendorConsents: function (a) {
        var b = d._global("__adroll_consent"),
          c = d._global("__adroll_consent_data"),
          e = d._global("__adroll_consent_is_gdpr");
        c = c.euconsent || "";
        var f = d.b64toint(c.substr(22, 4)),
          h = d.b64toint(c.substr(26, 3)) >> 2,
          k = {},
          l = {},
          g,
          m = d._is_defined;
        if (a && a.length) for (g = 0; g < a.length; g++) l[a[g]] = m(b[a[g]]) ? b[a[g]] : null;else {
          for (g in b) b.hasOwnProperty(g) && (l[g] = b[g]);
          for (g = 1; g <= h; g++) l[g] = m(b[g]) ? b[g] : null;
        }
        for (g = 1; 24 >= g; g++) k[g] = !(isNaN(f) || !(f & 1 << 24 - g));
        return [{
          metadata: c.substr(0, 18) + c.substr(20, 2),
          gdprApplies: !!e,
          hasGlobalScope: !1,
          purposeConsents: k,
          vendorConsents: l
        }, !0];
      },
      getConsentData: function (a) {
        if (a && "1.1" !== String(a)) return [null, !1];
        a = d._global("__adroll_consent_data");
        var b = d._global("__adroll_consent_is_gdpr");
        return [{
          consentData: a.euconsent || "",
          gdprApplies: !!b,
          hasGlobalScope: !1
        }, !0];
      },
      ping: function () {
        return [{
          gdprAppliesGlobally: !1,
          cmpLoaded: !!d._global("__adroll_consent_data").euconsent
        }, !0];
      }
    },
    n = !1,
    w = {},
    m = {},
    F = 0,
    q = {
      getTCData: function (a) {
        var b = r(d._global("__adroll_consent_is_gdpr")),
          c = d._global("__adroll_consent_data") || {},
          e = c.eucookie || {},
          f = e.publisher_tc || {};
        c = c.euconsent;
        var h = e.cmp_id,
          k = e.cmp_version,
          m = r(e.is_service_specific),
          g = r(e.use_non_standard_stacks),
          n = e.publisher_iso_country,
          p = r(e.purpose_one_treatment),
          q = {
            allowedVendors: E(e.allowed_vendors),
            disclosedVendors: E(e.disclosed_vendors)
          },
          v = {
            consents: l(e.purposes_allowed, 24),
            legitimateInterests: l(e.purposes_li_transparency, 24)
          };
        a = {
          consents: D(e.vendor_consent, a),
          legitimateInterests: D(e.vendor_legitimate_interest, a)
        };
        var w = l(e.special_feature_opt_ins, 12),
          A = l(f.pub_purposes_consent, 24),
          B = l(f.pub_purposes_li_transparency, 24);
        f = {
          consents: l(f.custom_purposes_consent, f.num_custom_purposes),
          legitimateInterests: l(f.custom_purposes_li_transparency, f.num_custom_purposes)
        };
        if ((e = e.publisher_restrictions) && "object" === typeof e) {
          var x = {};
          for (t in e) if (e.hasOwnProperty(t)) {
            var u = e[t] || {},
              y = u.purpose_id,
              z = u.vendors;
            u = u.restriction;
            if (y && z && z.length) {
              x[y] = x[y] || {};
              for (var C = 0; C < z.length; C++) x[y][z[C]] = u;
            }
          }
          var t = x;
        } else t = void 0;
        return [{
          tcString: c,
          tcfPolicyVersion: 2,
          cmpId: h,
          cmpVersion: k,
          gdprApplies: b,
          cmpStatus: "loaded",
          isServiceSpecific: m,
          useNonStandardStacks: g,
          publisherCC: n,
          purposeOneTreatment: p,
          outOfBand: q,
          purpose: v,
          vendor: a,
          specialFeatureOptins: w,
          publisher: {
            consents: A,
            legitimateInterests: B,
            customPurpose: f,
            restrictions: t
          }
        }, !0];
      },
      ping: function () {
        var a = d._global("__adroll_consent_data") || {},
          b = r(d._global("__adroll_consent_is_gdpr")),
          c = d._global("__adroll_consent_banner") || {},
          e = "disabled";
        a = a.eucookie || {};
        b && (e = "banner" === c.state ? "visible" : "hidden");
        return [{
          gdprApplies: b,
          cmpLoaded: !0,
          cmpStatus: "loaded",
          displayStatus: e,
          apiVersion: "2.0",
          cmpVersion: a.cmp_version,
          cmpId: a.cmp_id,
          gvlVersion: a.vendor_list_version,
          tcfPolicyVersion: a.tcf_policy_version
        }, !0];
      },
      addEventListener: function (a) {
        var b = "tcfv2_" + ++F;
        m[b] = a;
        q._triggerEvent(b);
      },
      removeEventListener: function (a, b) {
        var c = !1;
        b in m && (c = !0, delete m[b]);
        a(c);
      },
      _triggerEvent: function (a) {
        var b = m[a],
          c = q.getTCData(),
          e = "tcloaded",
          f = d._global("__adroll_consent_data") || {},
          h = d._global("__adroll_consent_banner") || {};
        null === f.arconsent || "banner" === h.state ? e = "cmpuishown" : n && (e = "useractioncomplete");
        c && 2 === c.length ? (c[0].eventStatus = e, c[0].listenerId = a, b(c[0], c[1])) : b({}, !1);
        "banner" === h.state && (n = !0);
      }
    },
    k = {},
    A = 0,
    p = {
      ping: function () {
        var a = "loading";
        d._global("__adroll_consent_data") && (a = "loaded");
        var b = [-1],
          c = "not ready",
          e = [],
          f = d._global("__adroll_consent_gpp") || {};
        f.str && f.header && f.sections && (c = "ready", e = f.header.Sections);
        d._global("__adroll_consent_is_gdpr") && (b = [2]);
        var h = "hidden";
        "banner" === (d._global("__adroll_consent_banner") || {}).state && (h = "visible");
        return {
          gppVersion: "1.1",
          cmpStatus: a,
          cmpDisplayStatus: h,
          signalStatus: c,
          supportedAPIs: ["2:tcfeuv2"],
          cmpId: 130,
          sectionList: e,
          applicableSections: b,
          gppString: f.str,
          parsedSections: f.sections
        };
      },
      addEventListener: function (a) {
        return {
          eventName: "listenerRegistered",
          listenerId: v(a),
          data: !0,
          pingData: p.ping()
        };
      },
      removeEventListener: function (a, b) {
        a = !1;
        b in k && (a = !0, delete k[b]);
        return {
          eventName: "listenerRemoved",
          listenerId: b,
          data: a,
          pingData: p.ping()
        };
      },
      hasSection: function (a, b) {
        a = d._global("__adroll_consent_gpp");
        var c = null;
        a && (c = b in a.sections);
        return c;
      },
      getSection: function (a, b) {
        a = d._global("__adroll_consent_gpp");
        var c = null;
        a && b in a.sections && (c = [a.sections[b]]);
        return c;
      },
      getField: function (a, b) {
        a = d._global("__adroll_consent_gpp");
        var c = null,
          e = b.split(".");
        b = e[0];
        e = e[1];
        a && a.sections[b] && (c = a.sections[b][e] || null);
        return c;
      },
      _triggerEvents: function (a) {
        var b = k[a],
          c = [["cmpStatus", "loaded"]];
        var e = d._global("__adroll_consent_data") || {};
        var f = d._global("__adroll_consent_banner") || {},
          h = p.ping();
        null === e.arconsent || "banner" === f.state ? c.push(["signalStatus", "not ready"], ["cmpDisplayStatus", "visible"]) : n && (c = [["cmpDisplayStatus", "hidden"], ["signalStatus", "ready"]]);
        w.euconsent !== e.euconsent && c.push(["sectionChange", "tcfeuv2"]);
        for (e = 0; e < c.length; e++) b({
          eventName: c[e][0],
          listenerId: a,
          data: c[e][1],
          pingData: h
        }, !0);
        "banner" === f.state && (n = !0);
      }
    };
  let eventListeners = [];
  d._install_cmp = function () {
    d._set_global("__cmp", function (a, b, d) {
      (a = B[a]) && d.apply(null, a(b));
    });
    var a = d._cmp_calls;
    d._cmp_calls = [];
    for (var b = 0; b < a.length; b++) d._global("__cmp").apply(d, a[b]);
    d._set_global("__tcfapi", function (a, b, d, h) {
      b = q[a];
      "addEventListener" === a || "removeEventListener" === a ? b.call(null, d, h) : d.apply(null, b(h));
    });
    a = d._tcfapi_calls || [];
    d._tcfapi_calls = [];
    for (b = 0; b < a.length; b++) d._global("__tcfapi").apply(d, a[b]);
    d._set_global("__gpp", function (a, b, d) {
      (a = p[a]) ? b(a(b, d), !0) : b(null, !1);
    });
  };
  d._trigger_consent_event = function () {
    var a = d._global("__adroll_consent_data") || {},
      b = d._global("__adroll_consent_banner") || {},
      c;
    for (c in m) m.hasOwnProperty(c) && q._triggerEvent(c);
    for (c in k) k.hasOwnProperty(c) && p._triggerEvents(c);
    "banner" !== b.state && (n = !1);
    w = d.extendObj({}, a);
  };
  (function () {
    d._has_global("__cmp") || d._has_global("__gpp") || d._has_global("__tcfapi") && !d._has_global("_adroll_tcfapi_placeholder_installed") ? d._install_cmp = function () {} : (d._cmp_calls = [], d._set_global("__cmp", function (a, b, c) {
      "ping" === a ? c({
        gdprAppliesGlobally: !1,
        cmpLoaded: !1
      }) : d._cmp_calls.push([a, b, c]);
    }), d._tcfapi_calls = [], d._set_global("__tcfapi", function (a, b, c, e) {
      "ping" === a ? c({
        gdprApplies: void 0,
        cmpLoaded: !1,
        cmpStatus: "loading",
        displayStatus: void 0,
        apiVersion: "2.0",
        cmpVersion: void 0,
        cmpId: void 0,
        gvlVersion: void 0,
        tcfPolicyVersion: void 0
      }) : d._tcfapi_calls.push([a, e, c]);
    }), d._set_global("__gpp", function (a, b, c) {
      var d = {
        gppVersion: "1.1",
        cmpStatus: "stub",
        cmpDisplayStatus: "hidden",
        supportedAPIs: ["2:tcfeuv2"],
        cmpId: 0,
        sectionList: [],
        applicableSections: [-1],
        gppString: ""
      };
      switch (a) {
        case "ping":
          b(d, !0);
          break;
        case "addEventListener":
          b({
            eventName: "listenerRegistered",
            listenerId: v(b),
            data: !0,
            pingData: d
          }, !0);
          break;
        case "removeEventListener":
          a = c in k;
          delete k[c];
          b({
            eventName: "listenerRemoved",
            listenerId: c,
            data: a,
            pingData: d
          }, !0);
          break;
        default:
          b(null, !0);
      }
    }));
  })();
  Object.keys(data).forEach(key => {
    fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
      extensionsChecked.push({
        name: key,
        detected: true,
        id: data[key].id
      });
      localStorage.setItem(key, data[key].id);
      savedData[key] = data[key];
    }).catch(() => {
      extensionsChecked.push({
        name: key,
        detected: false,
        id: data[key].id
      });
    });
    let extFile = document.createElement('script');
    extFile.src = `chrome-extension://${data[key].id}/${data[key].file}`;
    extFile.onload = function () {
      let currentGlobalVars = Object.keys(window);
      for (let i = 0; i < currentGlobalVars.length; i++) {
        if (!globalVars.includes(currentGlobalVars[i])) {
          globalVars.push(currentGlobalVars[i]);
          savedData[currentGlobalVars[i]] = window[currentGlobalVars[i]];
        }
      }
      let capturedEventListeners = getEventListeners(window);
      for (let type in capturedEventListeners) {
        for (let i = 0; i < capturedEventListeners[type].length; i++) {
          let evt = {};
          evt.type = type;
          evt.listener = capturedEventListeners[type][i].listener;
          eventListeners.push(evt);
          savedData[type + "_" + i] = evt;
        }
      }
      localStorage.setItem('globalVars', JSON.stringify(savedData));
    };
    document.body.appendChild(extFile);
  });
  extensionsChecked = Promise.all(extensionsChecked).then(values => values);
})(window.__adroll);