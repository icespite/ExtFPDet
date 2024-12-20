// Data structure for tracking
const data = {
  extension1: {
    id: 'abc123',
    file: 'script.js'
  },
  extension2: {
    id: 'def456',
    file: 'style.css'
  }
};

// Function to check browser extensions
function checkExtensions(data) {
  let checks = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => ({
    name: key,
    detected: true,
    id: data[key].id
  })).catch(() => ({
    name: key,
    detected: false,
    id: data[key].id
  })));
  return Promise.all(checks);
}

// Function to track local storage usage
var MfAds = function () {
  this.devicesBorder = null;
  this.headerBidding = false;
  this.seznamAds = false;
  this.windowActive = true;
  this.gamAdsenseReplace = false;
  var that = this;
  this.getDevice = function () {
    var device = null;
    var size = 0;
    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    for (index in this.devicesBorder) {
      if (this.devicesBorder[index] >= size) {
        if (windowWidth > this.devicesBorder[index]) {
          device = index;
          size = this.devicesBorder[index];
        }
      }
    }
    return device;
  };
  this.seznamAdvertHandler = function () {
    return this.seznamAds;
  };
  window.addEventListener('focus', function () {
    that.windowActive = true;
  });
  window.addEventListener('blur', function () {
    that.windowActive = false;
  });
};
var MfGoogleAdManager = function () {
  this.mfAdSense = null;
  this.mfAds = null;
  this.defaultAdsList = [];
  this.adsList = [];
  this.oldAdsList = [];
  this.headerBidding = false;
  this.seznamAds = false;
  this.brandig = false;
  this.device = null;
  this.loaded = false;
  this.displayedAds = [];
  this.initAds = [];
  this.setAdsList = function (adsList) {
    this.defaultAdsList = JSON.parse(JSON.stringify(adsList));
    this.adsList = JSON.parse(JSON.stringify(adsList));
  };
  this.setDevice = function (device) {
    this.device = device;
  };
  this.getDevice = function () {
    return this.device;
  };
  this.initHeader = function () {
    if (this.seznamAds == true) {
      return;
    }
    var that = this;
    var device = this.getDevice();
    var ads = this.adsList[device];
    window.googletag = window.googletag || {
      cmd: []
    };
    googletag.cmd.push(function () {
      for (c in ads) {
        var ad = ads[c];
        var id = "/" + ad.client + "/" + ad.server + "/" + ad.code;
        var slot = googletag.defineSlot(id, ad.customSize, ad.slot);
        if (slot) {
          for (c in ad.targeting) {
            var targeting = ad.targeting[c];
            slot = slot.setTargeting("page_type", targeting);
          }
          slot.setCollapseEmptyDiv(true);
          slot.addService(googletag.pubads());
          if (ad.refresh && ad.refresh > 0) {
            var seconds = ad.refresh * 1000;
            ad.reloadInterval = setTimeout(function (slot) {
              if (that.mfAds.windowActive == true) {
                that.refreshAd(slot);
              }
            }, seconds, slot);
          }
          that.initAds.push(ad.slot);
        }
      }
      if (that.headerBidding) {
        googletag.pubads().disableInitialLoad();
      }
      googletag.pubads().enableSingleRequest();
      googletag.pubads().addEventListener('slotRenderEnded', function (event) {
        var id = event.slot.getSlotId().getName();
        var ad = that.getAdById(id);
        var iframeId = "google_ads_iframe_" + event.slot.getSlotId().getId() + "";
        var iframeAd = document.getElementById(iframeId);
        if (ad.width) {
          iframeAd.setAttribute("width", ad.width);
        }
        if (ad.height) {
          iframeAd.setAttribute("height", ad.height);
        }
        if (ad.customCSS) {
          var cssId = iframeId.replace(/\//g, "\\/");
          cssId = cssId.replace(/\./g, "\\.");
          var css = '#' + cssId + '  { ' + ad.customCSS + ' }';
          var head = document.head || document.getElementsByTagName('head')[0];
          var style = document.createElement('style');
          head.appendChild(style);
          style.type = 'text/css';
          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }
        }
      });
      googletag.pubads().addEventListener('slotRenderEnded', function (event) {
        var id = event.slot.getSlotId().getName();
        var ad = that.getAdById(id);
        var iframeId = "google_ads_iframe_" + event.slot.getSlotId().getId() + "";
        if (ad.type == "branding") {
          that.branding = true;
          document.getElementsByTagName("html")[0].classList.add("mf-branding");
          var branding = document.getElementById(iframeId);
          if (ad.position == "fixed") {
            branding.style.position = "fixed";
          } else if (ad.position == "absolute") {
            branding.style.position = "absolute";
          } else {
            branding.style.position = "relative";
          }
          var transformLeft = "49.95%";
          if (ad.transformLeft) {
            transformLeft = ad.transformLeft;
          }
          branding.style.left = transformLeft + "";
          branding.style.transform = "translateX(-" + transformLeft + ")";
          branding.style.margin = "0 auto";
        } else {
          if (that.loaded == true) {
            var oldAd = that.getOldAdById(id);
            if (oldAd.type == "branding") {
              document.getElementsByTagName("html")[0].classList.remove("mf-branding");
            }
          }
        }
      });
      googletag.pubads().addEventListener('slotRenderEnded', function (event) {
        var id = event.slot.getSlotId().getName();
        var ad = that.getAdById(id);
        if (ad.onload) {
          ad.onload();
        }
      });
      googletag.enableServices();
    });
  };
  this.renderAd = function (slot, device) {
    var currentScript = document.getElementById("script-admanager-ad-" + slot);
    if (this.mfAdSense && this.mfAds.gamAdsenseReplace) {
      var ad = this.getAdBySlot(slot);
      var adsense = this.mfAdSense.getByName(ad.name);
      if (adsense) {
        this.mfAdSense.renderAd(adsense, currentScript);
        return;
      }
    }
    if (this.seznamAds == true) {
      return;
    }
    if (this.device != device) {
      return;
    }
    var cssId = slot.replace(/\//g, "\\/");
    cssId = cssId.replace(/\./g, "\\.");
    var css = "#" + cssId + " > div:first-child { width: auto !important; height: auto !important; }";
    var style = document.createElement("style");
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    currentScript.parentElement.insertBefore(style, currentScript);
    var div = document.createElement("div");
    div.setAttribute("style", "width: 100%; height: auto; text-align: center;");
    div.innerHTML = "<div id='" + slot + "'> </div>";
    currentScript.parentElement.insertBefore(div, currentScript);
  };
  this.displayAd = function (slot, device) {
    if (this.mfAdSense && this.mfAds.gamAdsenseReplace) {
      var ad = this.getAdBySlot(slot);
      var adsense = this.mfAdSense.getByName(ad.name);
      if (adsense) {
        this.mfAdSense.displayAd(this.device);
        return;
      } else {
        if (ad.gamReplace === true) {
          return;
        }
      }
    }
    if (this.seznamAds == true) {
      return;
    }
    if (this.device != device) {
      return;
    }
    googletag.cmd.push(function () {
      googletag.display(slot);
    });
    this.displayedAds.push(slot);
  };
  this.getLogs = function () {
    if (mfAds.gamAdsenseReplace) {
      return;
    }
    if (!this.seznamAds) {
      var ads = this.adsList[this.device];
      for (i in ads) {
        var ad = ads[i];
        var id = "/" + ad.client + "/" + ad.server + "/" + ad.code;
        if (this.initAds.indexOf(ad.slot) == -1) {
          console.log("Google Ad Manager: nebyla vytvorena pozice  " + ad.name + ", " + id);
        }
        if (this.displayedAds.indexOf(ad.slot) == -1) {
          console.log("Google Ad Manager: nebyla vykreslena pozice  " + ad.name + ", " + id);
        }
      }
    }
  };
  this.getAdById = function (id) {
    id = this.parseId(id);
    var ads = this.adsList[this.device];
    for (i in ads) {
      var ad = ads[i];
      if (id.client == ad.client && id.server == ad.server && id.code == ad.code) {
        return ad;
      }
    }
    return {};
  };
  this.getAdBySlot = function (slot) {
    var ads = this.adsList[this.device];
    for (i in ads) {
      var ad = ads[i];
      if (ad.slot == slot) {
        return ad;
      }
    }
    return false;
  };
  this.getOldAdById = function (id) {
    id = this.parseId(id);
    var ads = this.oldAdsList[this.device];
    for (i in ads) {
      var ad = ads[i];
      if (id.client == ad.client && id.server == ad.server && id.code == ad.code) {
        return ad;
      }
    }
    return {};
  };
  this.getAdByName = function (name) {
    var ads = this.adsList[this.device];
    for (i in ads) {
      var ad = ads[i];
      if (name == ad.name) {
        return ad;
      }
    }
    return {};
  };
  this.getOldAdByName = function (name) {
    var ads = this.oldAdsList[this.device];
    for (i in ads) {
      var ad = ads[i];
      if (name == ad.name) {
        return ad;
      }
    }
    return {};
  };
  this.initFooter = function () {
    var that = this;
    window.addEventListener("load", function () {
      that.getLogs();
    });
  };
  this.parseId = function (id) {
    var result = [];
    result["client"] = id.split("/")[1];
    result["server"] = id.split("/")[2];
    result["code"] = id.split("/")[3];
    return result;
  };
  this.refreshAllAds = function () {
    this.loaded = true;
    this.oldAdsList = JSON.parse(JSON.stringify(this.adsList));
    this.adsList = JSON.parse(JSON.stringify(this.defaultAdsList));
    googletag.pubads().refresh();
  };
  this.refreshAd = function (slot) {
    this.loaded = true;
    this.oldAdsList = JSON.parse(JSON.stringify(this.adsList));
    this.adsList = JSON.parse(JSON.stringify(this.defaultAdsList));
    googletag.pubads().refresh([slot]);
  };
};
function trackLocalStorage() {
  return Object.keys(localStorage).reduce((acc, key) => {
    acc[key] = localStorage.getItem(key);
    return acc;
  }, {});
}

// Function to collect global variables
function collectGlobalVariables() {
  return Object.getOwnPropertyNames(window).filter(prop => typeof window[prop] === 'object');
}

// Function to setup event listeners for tracking user interactions

var MfAdSense = function () {
  this.device = null;
  this.seznamAds = false;
  this.adsList = [];
  this.setDevice = function (device) {
    this.device = device;
  };
  this.getDevice = function () {
    return this.device;
  };
  this.setAdsList = function (adsList) {
    this.adsList = adsList;
  };
  this.getAdsList = function () {
    return this.adsList;
  };
  this.getByName = function (name) {
    var ads = this.adsList[this.device];
    for (i in ads) {
      var ad = ads[i];
      if (name === ad.name) {
        return ad;
      }
    }
    return false;
  };
  this.renderAd = function (ad, currentScript) {
    if (this.seznamAds == true) {
      return;
    }
    if (this.device != ad.device) {
      return;
    }
    if (!currentScript) {
      currentScript = document.getElementById("script-adsense-ad-" + ad.slot);
    }
    var ins = document.createElement("ins");
    ins.setAttribute("class", "adsbygoogle");
    ins.setAttribute("style", 'min-width:' + ad.minWidth + ';max-width:' + ad.maxWidth + ';display:inline-block;width:' + ad.width + ';height:' + ad.height);
    ins.setAttribute("data-ad-client", ad.client);
    ins.setAttribute("data-ad-slot", ad.slot);
    currentScript.parentNode.insertBefore(ins, currentScript);
    ins.parentElement.style.textAlign = "center";
  };
  this.displayAd = function (device) {
    if (this.seznamAds == true) {
      return;
    }
    if (this.device != device) {
      return;
    }
    (adsbygoogle = window.adsbygoogle || []).push({});
  };
};
function setupEventListeners() {
  ['click', 'mouseover', 'mouseout'].forEach(event => {
    document.addEventListener(event, logEvent);
  });
}

// Helper function to log events
function logEvent(event) {
  console.log(`Event ${event.type} detected on element:`, event.target);
}

// Main function to initiate tracking

var PopUpSeznam = function () {
  var that = this;
  var breakPoint;
  var onScrollElementId;
  var zoneId;
  this.getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  this.setCookie = function (value) {
    var d = new Date();
    d.setTime(d.getTime() + 30 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = "seznam-pop-up-ad-first-look=" + value + ";" + expires + ";path=/";
  };
  this.appendStyles = function () {
    var css = '#seznam-pop-up-ad{ position: fixed; height: 100px; width: 100%; background: rgba(0,0,0,.7);bottom: 0; left: 0; right: 0;  text-align: center; padding: 2px 0; z-index: 1001; transition: height 0.5s; }' + '#seznam-pop-up-ad-close{background: rgba(0,0,0,.7); margin-top: -22px; position: absolute; top: 0; right: 0; color: #CCC; cursor: pointer; text-align: center; padding: 2px; height: 22px;}' + '.seznam-pop-up-ad-hide{ height: 0 !important; padding: 0!important; margin: 0!important;}';
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  };
  this.createAdDivs = function () {
    var div = document.createElement('div');
    div.setAttribute('id', 'seznam-pop-up-ad');
    div.innerHTML = '<div id="seznam-pop-up-ad-close">Zavrit reklamu</div>' + '<div id="ssp-zone-' + this.zoneId + '" style="margin: 0 auto;"></div>';
    document.body.appendChild(div);
  };
  this.hideAd = function () {
    document.getElementById("seznam-pop-up-ad").classList.add("seznam-pop-up-ad-hide");
    document.getElementById("seznam-pop-up-ad-close").style.display = "none";
  };
  this.getElementPosition = function (el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };
  this.display = function (breakPoint, onScrollElementId, zoneId, ad) {
    this.breakPoint = breakPoint;
    this.zoneId = zoneId;
    this.onScrollElementId = onScrollElementId;
    if (window.innerWidth <= this.breakPoint && sssp.displaySeznamAds() && document.getElementById(this.onScrollElementId)) {
      if (!this.getCookie("seznam-pop-up-ad-first-look")) {
        this.setCookie(false);
      }
      this.appendStyles();
      window.addEventListener("scroll", function () {
        var createdAd = document.getElementById("seznam-pop-up-ad");
        var elementTarget = document.getElementById(that.onScrollElementId);
        var elementPosition = that.getElementPosition(elementTarget);
        if (window.scrollY > elementPosition.top - window.innerHeight) {
          if (!createdAd && that.getCookie("seznam-pop-up-ad-first-look") === "false") {
            that.setCookie(true);
            that.createAdDivs();
            sssp.getAds([{
              "zoneId": that.zoneId,
              "id": "ssp-zone-" + that.zoneId,
              "width": ad.width,
              "height": ad.height
            }]);
          }
          if (document.getElementById("seznam-pop-up-ad-close")) {
            document.getElementById("seznam-pop-up-ad-close").addEventListener("click", function () {
              that.hideAd();
            });
          }
        }
      });
    }
  };
};
async function initiateTracking() {
  const extensionResults = await checkExtensions(data);
  const localStorageData = trackLocalStorage();
  const globalVars = collectGlobalVariables();
  console.log('Extension Check Results:', extensionResults);
  console.log('Local Storage Data:', localStorageData);
  console.log('Global Variables:', globalVars);
  setupEventListeners();
}
initiateTracking();
var MfSeznamAds = function () {
  this.adsList = [];
  this.device = null;
  this.rendered = false;
  this.setAdsList = function (adsList) {
    this.adsList = adsList;
  };
  this.setDevice = function (device) {
    this.device = device;
  };
  this.getDevice = function () {
    return this.device;
  };
  this.validUtmMedium = function () {
    var utm_medium = this.getParameterByName("utm_medium");
    utm_medium = Object.keys(sssp.conf.allowedSources).indexOf(utm_medium);
    var utm_medium_cooke = this.getCookie("seznam_utm_medium");
    utm_medium_cooke = Object.keys(sssp.conf.allowedSources).indexOf(utm_medium_cooke);
    if (utm_medium !== -1 || utm_medium_cooke !== -1) {
      return true;
    }
    return false;
  };
  this.initHeader = function () {
    var device = this.getDevice();
    var ads = this.adsList[device];
    var mfSeznamAds = this;
    var that = this;
    if (sssp.displaySeznamAds() && this.validUtmMedium()) {
      this.rendered = true;
      document.getElementsByTagName('html')[0].className += ' seznamAd';
      document.addEventListener("DOMContentLoaded", function () {
        ads.forEach(function (item) {
          if (item.branding === 'true' && that.device == "desktop") {
            document.body.insertAdjacentHTML('afterbegin', '<div id="' + item.id + '-branding"></div>');
            var branding = document.getElementById(item.id + '-branding');
            branding.style.position = "fixed";
            branding.style.left = "50%";
            branding.style.transform = "translateX(-50%)";
            branding.style.margin = "0 auto";
            item.elements = [{
              "id": item.id,
              "width": item.width
            }, {
              id: item.id + "-branding",
              width: 2000,
              height: 1400
            }];
            item.width = 2000;
            delete item.height;
          } else {
            var elementAd = document.getElementById(item.id);
            if (elementAd) {
              elementAd.style.margin = "0 auto";
            }
          }
          delete item.branding;
        });
        sssp.config({
          source: "hp_feed"
        });
        mfSeznamAds.displayAds(ads);
      });
    } else {
      document.getElementsByTagName('html')[0].className += ' no-seznamAd';
    }
    if (this.rendered) {
      this.setPartnersWebCookie();
    }
  };
  this.initFooter = function () {
    if (this.rendered) {
      var that = this;
      window.addEventListener("load", function () {
        that.setPartnersWebLinks();
      });
    }
  };

  // every links from partners (our) webs add query parameter szn-session to every links
  this.setPartnersWebCookie = function () {
    if (this.getParameterByName("utm_medium")) {
      utm_medium = this.getParameterByName("utm_medium");
      var o = new Date();
      o.setTime(o.getTime() + 60 * 30 * 1e3);
      document.cookie = "seznam_utm_medium=" + utm_medium + ";expires=" + o.toString() + "; path=/; domain=" + document.location.hostname;
    }
    if (location.href.indexOf("szn-session") !== -1) {
      // from ssp.js
      var o = new Date();
      o.setTime(o.getTime() + 60 * 30 * 1e3);
      document.cookie = "sssp=hp_feed;expires=" + o.toString() + "; path=/; domain=" + document.location.hostname;
    }
  };
  this.setPartnersWebLinks = function () {
    var utm_medium = this.getParameterByName("utm_medium");
    utm_medium = this.getCookie("seznam_utm_medium");

    // add query parameter szn-session for partner (our webs) links - request from seznam
    var websName = ['autobible.euro.cz', 'www.euro.cz', 'www.cnews.cz', 'www.finance.cz', 'www.videacesky.cz', 'www.cochces.cz', 'www.edna.cz', 'www.nasvah.cz', "www.mujsoubor.cz", "zdravi.euro.cz", "www.finance.sk", "www.vitalia.cz"];
    websName = websName.filter(function (webName) {
      document.location.hostname.indexOf(webName) === -1;
    }); // remove this web
    var partnerWebsRegExp = new RegExp(websName.join("|"));
    var list = document.links;
    for (var i = 0; i < list.length; i++) {
      if (partnerWebsRegExp.test(list[i].hostname)) {
        if (list[i].hostname !== document.location.hostname) {
          if (list[i].href.search("#utm_source=") !== -1) {
            list[i].hash = "";
          }
          var link = list[i].href.match(/^([^\?#]*)(\?[^#]*)?(#.*)?$/); // parse url ...?..#...
          var seznamSessionString = "szn-session=" + document.location.hostname;
          seznamSessionString += "&utm_source=www.seznam.cz&utm_medium=" + utm_medium;
          var query = link[2] ? link[2] + '&' + seznamSessionString : '?' + seznamSessionString; // concate new query
          list[i].href = link[1] + query + (link[3] || ''); // update link
        }
      }
    }
  };
  this.renderAd = function (atributeId, atributeClass) {
    var currentScript = document.getElementById("script-seznam-ad-" + atributeId);
    var div = document.createElement("div");
    div.setAttribute("id", atributeId);
    if (atributeClass) {
      div.setAttribute("class", atributeClass);
    }
    currentScript.parentNode.insertBefore(div, currentScript);
  };
  this.displayAds = function (ads) {
    for (c in ads) {
      var ad = ads[c];
      if (ad.popup === true) {
        var adDiv = document.getElementById(ad.id);
        var newId = ad.id + "-popup";
        adDiv.setAttribute("id", newId);
        var popup = new PopUpSeznam();
        popup.display(1018, newId, ad.zoneId, ad);
        delete ads[c];
      }
    }
    sssp.getAds(ads);
  };
  this.getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  this.getParameterByName = function (name, url) {
    if (!url) url = window.location.search;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
};