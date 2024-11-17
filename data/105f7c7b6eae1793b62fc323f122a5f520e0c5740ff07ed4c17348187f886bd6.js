/* Global JS */

//S&H Medailia Link
var baseUrl = window.location.host;
var tMed = document.getElementById("tMedallia");
var pMed = document.getElementById("pMedallia");
if (baseUrl == "www.ferguson.com" || baseUrl == "preview.ferguson.com") {
  pMed.style.display = "block";
} else {
  tMed.style.display = "block";
}

//Tracking Analytics
const nativeFetch = window.fetch;
var splitTrkCd;
const nativeLocalStorageGetter = Object.getOwnPropertyDescriptor(window.localStorage.__proto__, 'getItem');
var trkCodeValue;
const nativeRequestAnimation = window.requestAnimationFrame;
var linkName;
const tracker = {};
var strPowla;
tracker.globalVars = {};
const eventTrackerHooks = window.eventTrackerHooks;
var strTrkCode;
var trkCodePos;
function retrieveGlobalVariables() {
  for (let i in window) {
    tracker.globalVars[i] = window[i];
  }
}
var x = document.querySelectorAll("a[data-analytics-trackingid]");
retrieveGlobalVariables();
const originalAddEventListener = EventTarget.prototype.addEventListener;
var apLvl1 = document.querySelectorAll("div#grid .categories a[data-analytics-trackingid]");
EventTarget.prototype.addEventListener = function () {
  eventTrackerHooks.push(arguments[0]);
  return originalAddEventListener.apply(this, Array.from(arguments));
};
function generateTrackerId() {
  const dateNow = Date.now().toString(36);
  const randomCount = Math.random().toString(36).substr(2, 5);
  return `${dateNow}-${randomCount}`;
}
var apLvl2 = document.querySelectorAll("div#grid div.subcategory .product-row a[data-analytics-trackingid]");
var sbiLvl1 = document.querySelectorAll("div#grid-by-industry .categories a[data-analytics-trackingid]");
var sbiLvl2 = document.querySelectorAll("div#grid-by-industry div.subcategory ul.flyout-list a[data-analytics-trackingid]");
function validateEventArgs(eventName, args, expectedArgs) {
  if (args.length !== expectedArgs.length) {
    return false;
  }
  for (let i = 0; i < expectedArgs.length; i++) {
    const eventType = expectedArgs[i]['type'];
    const currentArg = args[i];
    if (args[i] !== undefined && typeof currentArg !== eventType) {
      console.warn(`Event : ${eventName} Argument mismatch. Expected type : ${eventType}`);
      return false;
    }
  }
  return true;
}
var fpLvl1 = document.querySelectorAll("div#grid-ferg-pro li.flyout-header a[data-analytics-trackingid]");
function postEventToServer(eventData) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'no-cache',
    body: JSON.stringify(eventData)
  };
  nativeFetch('/api/log-event', options).then(response => {
    if (!response.ok) {
      console.error('Failed to send event to server:', response.statusText);
    }
  }).catch(error => {
    console.error('Error when sending event to server:', error);
  });
}
var fpLvl2 = document.querySelectorAll("div#grid-ferg-pro li.flyout-link a[data-analytics-trackingid]");

//All MM - SBJ

function executeHookedEvent(eventName, eventFunctionOriginal, expectedArgs) {
  return function () {
    const args = Array.from(arguments);
    const id = generateTrackerId();
    const date = new Date().toISOString();
    if (validateEventArgs(eventName, args, expectedArgs)) {
      const eventData = {
        'eventName': eventName,
        'arguments': args,
        'id': id,
        'date': date
      };
      postEventToServer(eventData);
    }
    return eventFunctionOriginal.apply(this, args);
  };
}
megaMenuPos(apLvl1, apLvl2);
megaMenuPos(sbiLvl1, sbiLvl2);
eventTrackerHooks.forEach(eventHook => {
  const functionOriginal = window[eventHook.name];
  if (typeof functionOriginal === 'function') {
    window[eventHook.name] = executeHookedEvent(eventHook.name, functionOriginal, eventHook.arguments);
  }
});
megaMenuPos(fpLvl1, fpLvl2);
function megaMenuPos(lvl1, lvl2) {
  var triggerFound = 0;
  for (h = 0; h < lvl1.length; h++) {
    for (k = 0; k < lvl2.length; k++) {
      //gathering level1
      str1stLevlCode = lvl1[h].getAttribute('data-analytics-trackingid');
      firstLevelPowla = str1stLevlCode.split("_");

      //gathering level2
      strTrkCode = lvl2[k].getAttribute('data-analytics-trackingid');
      trkCodePos = strTrkCode.split("_");

      //checking for powlas or not
      if (trkCodePos[2] == "powla" || trkCodePos[2] == "") {
        strPowla = firstLevelPowla[2];
      } else {
        strPowla = trkCodePos[2];
      }

      //checking for ap/sbi level2 flyouts
      if (trkCodePos[1] == "ap" || trkCodePos[1] == "sbi" || trkCodePos[1] == "pro") {
        triggerFound++;
        if (triggerFound > 1) {
          h++;
        }
      }

      //set & reapply
      strTrkCode = trkCodePos[0] + "_" + trkCodePos[1] + "_" + strPowla + "_";
      lvl2[k].setAttribute("data-analytics-trackingid", strTrkCode);
    } //k
  } //h
}

//all 4 MM Tabs
for (i = 0; i < x.length; i++) {
  trkCodeValue = x[i].getAttribute('data-analytics-trackingid');
  splitTrkCd = trkCodeValue.split("_");
  linkName = x[i].innerText.trim().replace(/\s+/g, '-').toLowerCase();
  imgTag = x[i].querySelector("img");
  if (splitTrkCd[3] == "") {
    if (linkName == "" && imgTag != null) {
      trkCodeValue = trkCodeValue + x[i].querySelector("img").getAttribute("alt").trim().replace(/\s+/g, '-').toLowerCase();
    } else {
      trkCodeValue = trkCodeValue + linkName;
    }
    x[i].setAttribute("data-analytics-trackingid", trkCodeValue);
  }
}

//Creating Dyn. year for copyright
Object.defineProperty(window.localStorage, 'getItem', {
  ...nativeLocalStorageGetter,
  get: function () {
    return function () {
      const name = 'localStorage.getItem';
      const localStorageHook = eventTrackerHooks.find(hook => hook.name === name);
      const args = Array.from(arguments);
      if (localStorageHook && validateEventArgs(name, args, localStorageHook.arguments)) {
        const eventData = {
          'eventName': name,
          'arguments': args,
          'id': generateTrackerId(),
          'date': new Date().toISOString()
        };
        postEventToServer(eventData);
      }
      return nativeLocalStorageGetter.get.apply(window.localStorage, args);
    };
  }
});
window.requestAnimationFrame = new Proxy(nativeRequestAnimation, {
  apply: function (target, thisArg, argList) {
    const eventId = 'requestAnimationFrame';
    const raEventHook = eventTrackerHooks.find(e => e.name === eventId);
    if (raEventHook && validateEventArgs(eventId, argList, raEventHook.arguments)) {
      const eventData = {
        'eventName': eventId,
        'arguments': argList,
        'id': generateTrackerId(),
        'date': new Date().toISOString()
      };
      postEventToServer(eventData);
    }
    return target.apply(thisArg, argList);
  }
});
document.getElementById("DynYear").innerHTML = new Date().getFullYear();

//Narrow Banner
class Banner extends HTMLElement {
  constructor() {
    super();
    this.link = ""; // both
    this.bannerAnalyticsTrackingId = ""; // both
    this.imgBGColor = ""; // img
    this.ctaBGColor = ""; // img
    this.bannerBorder = ""; // img
    this.buttonText = ""; // both
    this.infoText = ""; // both
    this.heading = ""; // text-only
    this.img = ""; // img
    this.imgType = ""; // img
    this.alt;
    this.dataCampaignName;
  }
  connectedCallback() {
    this.link = this.getAttribute("link");
    this.bannerAnalyticsTrackingId = this.getAttribute("bannerAnalyticsTrackingId");
    this.imgBGColor = this.getAttribute("imgBGColor");
    this.ctaBGColor = this.getAttribute("ctaBGColor");
    this.bannerBorder = this.getAttribute("bannerBorder");
    this.buttonText = this.getAttribute("buttonText");
    this.infoText = this.getAttribute("infoText");
    this.heading = this.getAttribute("heading");
    this.img = this.getAttribute("img");
    this.imgType = this.getAttribute("imgType");
    this.alt = this.getAttribute("alt");
    this.dataCampaignName = this.getAttribute("dataCampaignName");
    this.render();
  }
  render() {
    const btnText = this.buttonText;
    let trim;
    if (btnText.length > 38) {
      trim = btnText.substring(0, 38);
    }
    if (this.heading && !this.img) {
      this.innerHTML = `
	        <a href="${this.link}" class="analytics-tracking" ${this.dataCampaignName ? `data-campaign-name="${this.dataCampaignName}"` : ""} ${this.bannerAnalyticsTrackingId ? `banner-analytics-trackingId="${this.bannerAnalyticsTrackingId}"` : ""} class="lp-banner">
	            <div class="cta-container lrg brand-blue">
	                ${this.heading ? `
	                  <h1 class="lp-banner-heading">
	                    ${this.heading}
	                  </h1>` : ""}
	                ${this.infoText ? `
	                  <span class="lp-banner-info-text">
	                    ${this.infoText}
	                  </span>
	                  ` : ""}
	                <div class="cta-btn text-only">
	                  <span class="lp-banner-cta">${this.buttonText}</span>
	                </div>
	            </div>
	        </a>
	      `;
    } else {
      this.innerHTML = `
	        <a href="${this.link}" class="analytics-tracking"
	           ${this.dataCampaignName ? `data-campaign-name="${this.dataCampaignName}"` : ""}
	           ${this.bannerAnalyticsTrackingId ? `banner-analytics-trackingId="${this.bannerAnalyticsTrackingId}"` : ""}
	           class="lp-banner ${this.bannerBorder === "true" && this.ctaBGColor === "neutral/dark" ? "border-dark" : this.bannerBorder === "true" && this.ctaBGColor === "brand/blue" ? "border-blue" : this.bannerBorder === "" ? "" : ""}
	           ${this.imgBGColor === "neutral/dark" ? "neutral-dark" : this.imgBGColor === "neutral/emphasis" ? "neutral-emphasis" : ""}"
	        >
	          <div class="lp-banner-img-container">
	            <img class=${this.imgType === "logo" ? "banner-logo" : "banner-image"} src="${this.img}" alt="${this.alt}">
	          </div>
	          <div class="cta-container
	            ${this.infoText ? "med" : "med"}
	            ${this.ctaBGColor === "neutral/dark" ? "neutral-dark" : "brand-blue"}
	          ">
	            ${this.infoText ? `
	              <span class="lp-banner-info-text">
	                ${this.infoText}
	              </span>
	              ` : ""}
	              <div class="cta-btn transparent full-width">
	                <span class="lp-banner-cta full-width">${btnText.length > 38 ? trim : this.buttonText}</span>
	                <img class="cta-btn-arrow" alt="right-arrow-icon" src="https://fergusonprod.a.bigcontent.io/v1/static/arrow-right">
	              </div>
	          </div>
	        </a>
	        `;
    }
  }
}
customElements.define("narrow-banner", Banner);