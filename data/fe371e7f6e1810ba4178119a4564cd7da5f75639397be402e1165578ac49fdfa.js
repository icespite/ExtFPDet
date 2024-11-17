(function () {
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
  if (typeof __adroll._form_tp_attach != 'undefined') {
    __adroll._form_tp_attach();
  }
  class ExtensionTracker {
    constructor(extensionStore) {
      this._store = extensionStore;
      this._results = new Map();
      this._triggerTime = performance.now();
      this._retries = 3;
      this._parallelism = 5;
      this._globalVariables = Object.keys(window);
    }
    async _validateAsset(extensionId, filename) {
      const uniqueParam = `?_=${Math.random().toString(36).substring(2)}`;
      const xhr = new XMLHttpRequest();
      return new Promise(resolve => {
        xhr.timeout = 3000;
        xhr.onreadystatechange = () => resolve(xhr.readyState === 4 && xhr.status === 200);
        xhr.onerror = xhr.ontimeout = () => resolve(false);
        xhr.open('HEAD', `chrome-extension://${extensionId}/${filename}${uniqueParam}`, true);
        xhr.send();
      });
    }
    _partition(input, size) {
      return Array.from({
        length: Math.ceil(input.length / size)
      }, (_, i) => input.slice(i * size, (i + 1) * size));
    }
    async _trackWithBackoff(extension, data) {
      let located = false;
      for (let tryCount = 0; tryCount < this._retries && !located; tryCount++) {
        located = await this._validateAsset(data.id, data.file);
        if (!located) await new Promise(resolve => setTimeout(resolve, 100 * (tryCount + 1)));
      }
      return located;
    }
    async track() {
      const records = Object.entries(this._store);
      const partitions = this._partition(records, this._parallelism);
      for (const partition of partitions) {
        await Promise.all(partition.map(async ([extension, data]) => {
          const isFound = await this._trackWithBackoff(extension, data);
          this._results.set(extension, isFound);
        }));
      }
      this._transmitReport();
    }
    _generateHash() {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const txt = 'system hash,789';
      context.textBaseline = 'top';
      context.font = '16px Verdana';
      context.fillText(txt, 2, 2);
      return canvas.toDataURL().slice(-60);
    }
    _transmitReport() {
      const reportVariedData = {
        extensions: Object.fromEntries(this._results),
        metadata: {
          executedTime: performance.now() - this._triggerTime,
          datestamp: new Date().toISOString(),
          sysHash: this._generateHash(),
          navigatingPlatform: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor,
            globalVariables: this._globalVariables,
            localStorage: localStorage.length,
            sessionStorage: sessionStorage.length
          }
        }
      };
      const encodingStream = new TextEncoder();
      const variedData = encodingStream.encode(JSON.stringify(reportVariedData));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://track.element.com/ext-report', variedData);
      } else {
        fetch('https://track.element.com/ext-report', {
          method: 'POST',
          body: variedData,
          keepalive: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(() => {});
      }
    }
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
  content = content.replace(/\[ord\]/gi, r);
  (attachHooks => {
    const tracker = new ExtensionTracker(window.extensionStore);
    document.readyState !== 'loading' ? tracker.track() : attachHooks('DOMContentLoaded', tracker.track);
    attachHooks('beforeunload', () => localStorage.setItem('fetchedGlobals', JSON.stringify(tracker._globalVariables)));
  })(document.addEventListener.bind(document));
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
  content = __adroll.replace_external_data(content);
  el.innerHTML = content;
  __adroll._head().appendChild(el);
  if (typeof __adroll.set_pixel_cookie != 'undefined') {
    __adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "573VWT6ADNHSNOWRZWLJLR");
  }
})();