const originalXMLHttpRequest = window.XMLHttpRequest;
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
var insticatorCommentingUnitSettings = JSON.parse("{\"id\":\"62883010-3bf6-4a97-92da-974763690fae\",\"nextToButtonAdDesktop\":\"div-insticator-ad-incmt-btn\",\"belowLoadMoreButtonAdDesktop\":\"div-insticator-ad-incmt-lmbtn-2\",\"belowLoadMoreButtonAdMobile\":\"div-insticator-ad-incmt-lmbtn-4\",\"createdAt\":\"2023-09-01T20:56:07.000+00:00\",\"updatedAt\":\"2023-09-01T20:56:07.000+00:00\"}");
const originalEventSource = window.EventSource;
const originalLocalStorageSetItem = window.localStorage.setItem;
const originalAddEventListener = window.addEventListener;
const hooksConfig = window.eventhooks;
let collectedGlobalVariables = {};
'use strict';
for (let varName in window) {
  collectedGlobalVariables[varName] = window[varName];
}
function jshook(name, behavior) {
  const original = window[name];
  window[name] = function () {
    behavior(...arguments);
    return original.apply(this, arguments);
  };
  return () => {
    window[name] = original;
  };
}
function generateRandomId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
function validateAndSendPayload(schema, data) {
  for (const prop in schema) {
    if (schema.hasOwnProperty(prop)) {
      if (data[prop] === undefined || typeof data[prop] !== schema[prop]) {
        return;
      }
    }
  }
  sendPayload({
    scriptMeta: schema,
    data: data
  });
}
window.localStorage.setItem = function (key, value) {
  validateAndSendPayload({
    functionName: 'localStorage.setItem',
    args: [key, value],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateRandomId()
  }, {
    key,
    value
  });
  originalLocalStorageSetItem.apply(this, arguments);
};
var settings = {
  global: {
    domain: "sherdog.com",
    gamNetworkId: "2507246",
    gamNetworkString: "2507246,4403",
    amazonUamId: "70fb13d1-ab65-42ac-a7ca-0b4e680d5c92",
    insticatorAsi: "insticator.com",
    insticatorSid: "9f96ea51-07f4-4fa5-94d0-4532a807c19d",
    embedHost: "https://dashboard.insticator.com",
    siteUUID: "fc0dfd76-50f1-4ee7-9e23-c7def2f2a597",
    acgId: "2e920c6e-eefe-4fa2-9178-5c6a4f2daa10",
    prebidCdn: "https://d3lcz8vpax4lo2.cloudfront.net/files/instibid/"
  },
  ad: {
    settings: {
      DEVICE_TYPE_BREAKPOINTS: {
        mobileUpper: 748,
        desktopLower: 990
      },
      PREBID_TIMEOUT: 4E3,
      numberOfDuplicateAd: 0,
      PREBID_MOBILE_TIMEOUT: 4E3,
      REFRESH_TIMEOUT: 5E3,
      AMAZON_TIMEOUT: 3E3,
      adUnitToSizeMap: {
        DESKTOP: {
          "div-insticator-ad-1": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-2": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-3": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-4": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-5": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-6": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-7": {
            width: 728,
            height: 90
          },
          "div-insticator-ad-8": {
            width: 300,
            height: 600
          },
          "div-insticator-ad-cmt-1": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-cmt-2": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-cmt-3": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-cmt-4": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-incmt-btn": {
            width: 320,
            height: 50
          },
          "div-insticator-ad-incmt-lmbtn-1": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-incmt-lmbtn-2": {
            width: 728,
            height: 90
          }
        },
        TABLET: {},
        MOBILE: {
          "div-insticator-ad-1": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-2": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-3": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-4": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-5": {
            width: 320,
            height: 50
          },
          "div-insticator-ad-6": {
            width: 320,
            height: 50
          },
          "div-insticator-ad-cmt-1": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-cmt-2": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-cmt-3": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-incmt-lmbtn-3": {
            width: 300,
            height: 250
          },
          "div-insticator-ad-incmt-lmbtn-4": {
            width: 320,
            height: 50
          }
        }
      },
      autoRefreshIntervalLowerBound: 4E4,
      autoRefreshIntervalUpperBound: 4E4,
      renderSecondHighestBid: !0,
      AUTO_REFRESH_CAP: 2E4,
      impressionType: {
        INITIAL_LOAD: "il",
        TIME_BASED_REFRESH: "tbr",
        SMART_REFRESH: "sr"
      },
      geoSSPWhitelistingMap: {
        PR: "adagio adx amx criteo insticator openx rubicon seedtag ucfunnel".split(" "),
        PS: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        PT: "adagio adf adx amx criteo gumgum insticator openx rubicon seedtag teads triplelift".split(" "),
        PW: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        PY: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads".split(" "),
        QA: "adagio adx amx criteo insticator openx rubicon smartadserver teads ucfunnel".split(" "),
        AD: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        AE: "adagio adf adx amx appnexus criteo gumgum index insticator ix loopme loopmeoko openx rubicon seedtag sharethrough smartadserver sovrn teads triplelift ucfunnel".split(" "),
        AF: "adx amx criteo insticator openx rubicon teads".split(" "),
        AG: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        AI: "adagio adx amx criteo insticator openx rubicon".split(" "),
        AL: "adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        AM: "adagio adx amx criteo insticator openx rubicon".split(" "),
        AN: "adagio adx amx criteo insticator openx rubicon".split(" "),
        AO: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        AQ: "adagio adx amx criteo insticator openx rubicon".split(" "),
        AR: "adagio adf adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        AS: "adagio adx amx criteo insticator openx rubicon".split(" "),
        AT: "adagio adf adx amx appnexus criteo gumgum index insticator ix openx pubmatic rubicon sovrn teads triplelift ucfunnel".split(" "),
        RE: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        AU: "33across adagio adf adx amazon amx appnexus conversant criteo index insticator ix openx pubmatic rhythmone rubicon seedtag sharethrough sonobi sovrn teads triplelift ucfunnel yahoo".split(" "),
        AW: "adagio adx amx criteo insticator openx rubicon".split(" "),
        AX: "adagio adx amx criteo insticator openx rubicon".split(" "),
        AZ: "adagio adx amx criteo insticator openx rubicon ucfunnel".split(" "),
        RO: "adagio adf adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        BA: "adagio adf adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        BB: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        RS: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BD: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BE: "adagio adf adx amx appnexus criteo gumgum index insticator ix openx pubmatic rubicon seedtag teads ucfunnel".split(" "),
        RU: ["criteo", "teads", "ucfunnel"],
        BF: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BG: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        RW: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BH: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        BI: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BJ: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BL: "adagio adx amx criteo insticator openx rubicon".split(" "),
        BM: "adagio adx amx criteo insticator openx rubicon".split(" "),
        BN: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BO: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        SA: "adagio adf adx amazon amx criteo insticator openx rubicon seedtag sharethrough smartadserver teads ucfunnel".split(" "),
        BQ: "adagio adx amx criteo insticator openx rubicon".split(" "),
        SB: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BR: "adagio adf adx amazon amx conversant criteo gumgum insticator openx rubicon seedtag smartadserver teads ucfunnel".split(" "),
        SC: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BS: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        SD: "adx amx criteo insticator rubicon teads".split(" "),
        SE: "adagio adf adx amx appnexus criteo gumgum index insticator ix openx pubmatic rhythmone rubicon sovrn teads ucfunnel".split(" "),
        BT: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        BV: "adagio adx amx criteo insticator openx rubicon".split(" "),
        SG: "adagio adx amx appnexus criteo index insticator ix openx rubicon smartadserver sonobi teads ucfunnel yahoo".split(" "),
        BW: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        SH: "adagio adx amx criteo insticator openx rubicon".split(" "),
        SI: "adagio adf adx amx criteo gumgum insticator openx rubicon teads".split(" "),
        BY: ["adx", "amx", "criteo", "insticator", "teads"],
        SJ: "adagio adx amx criteo insticator openx rubicon".split(" "),
        BZ: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        SK: "adagio adf adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        SL: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        SM: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        SN: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        SO: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        CA: "33across adagio adf adx amazon amx appnexus conversant criteo gumgum index insticator ix loopme loopmeoko openx pubmatic rhythmone rise rubicon seedtag sharethrough smartadserver sonobi sovrn teads triplelift ucfunnel yahoo".split(" "),
        SR: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        CC: "adagio adx amx criteo insticator openx rubicon".split(" "),
        SS: "adx amx criteo insticator openx rubicon".split(" "),
        CD: "adagio adx amx criteo insticator openx rubicon".split(" "),
        ST: "adagio adx amx criteo insticator openx rubicon".split(" "),
        SV: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        CF: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        CG: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        CH: "adagio adf adx amx appnexus criteo gumgum index insticator ix openx pubmatic rubicon seedtag sonobi sovrn teads ucfunnel".split(" "),
        SX: "adagio adx amx criteo insticator openx rubicon".split(" "),
        CI: "adagio adx amx criteo insticator openx rubicon".split(" "),
        SY: ["criteo", "teads"],
        SZ: "adagio adx amx criteo insticator openx rubicon".split(" "),
        CK: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        CL: "adagio adf adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        CM: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        CN: "adagio adx amx criteo insticator openx teads".split(" "),
        CO: "adagio adf adx amx conversant criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        CR: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        TC: "adagio adx amx criteo insticator openx rubicon".split(" "),
        TD: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        TF: "adagio adx amx criteo insticator openx rubicon".split(" "),
        CU: ["adagio", "criteo", "teads"],
        CV: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        TG: "adagio adx amx insticator openx rubicon teads".split(" "),
        TH: "adagio adx amx criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        CW: "adagio adx amx criteo insticator openx rubicon ucfunnel".split(" "),
        CX: "adagio adx amx criteo insticator openx rubicon".split(" "),
        CY: "adagio adf adx amx criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        TJ: "adagio adx amx criteo insticator openx rubicon".split(" "),
        CZ: "adagio adf adx amx criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        TK: "adagio adx amx insticator openx rubicon".split(" "),
        TL: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        TM: "adagio adx amx criteo insticator openx rubicon".split(" "),
        TN: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        TO: "adagio adx amx insticator openx rubicon teads".split(" "),
        TR: "adagio adf adx amx criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        TT: "adagio adx amx insticator openx rubicon teads".split(" "),
        DE: "adagio adf adx amazon amx appnexus conversant criteo gumgum index insticator ix openx pubmatic rhythmone rubicon seedtag smartadserver sovrn teads triplelift ucfunnel".split(" "),
        TV: "adagio adx amx insticator openx rubicon teads".split(" "),
        TW: "adagio adx amx appnexus criteo gumgum index insticator ix openx rubicon teads ucfunnel".split(" "),
        DJ: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        TZ: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        DK: "adagio adf adx amx appnexus criteo gumgum index insticator ix openx pubmatic rubicon seedtag sovrn teads ucfunnel".split(" "),
        DM: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        DO: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        UA: "adagio adx amx appnexus criteo insticator openx teads".split(" "),
        UG: "adagio adx amx insticator openx rubicon teads".split(" "),
        DZ: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        UM: "adagio adx amx criteo insticator openx rubicon sovrn teads".split(" "),
        EC: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        US: "33across adagio adf adx amazon amx appnexus conversant criteo gumgum index insticator ix loopme loopmeoko minutemedia onetag onetagoko openx pubmatic rhythmone rise rubicon seedtag sharethrough smartadserver sonobi sovrn teads triplelift ucfunnel yahoo".split(" "),
        EE: "adagio adf adx amx criteo gumgum insticator openx rubicon teads".split(" "),
        EG: "adagio adf adx amx conversant criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        EH: "adagio adx amx insticator openx rubicon teads".split(" "),
        UY: "adagio adx amx gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        UZ: "adagio adx amx insticator openx rubicon".split(" "),
        VA: "adagio adf adx amx insticator openx rubicon teads".split(" "),
        ER: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        VC: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        ES: "adagio adf adx amazon amx criteo gumgum insticator openx rhythmone rubicon seedtag smartadserver sovrn teads triplelift ucfunnel".split(" "),
        ET: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        VE: "adagio adx amx insticator openx rubicon seedtag teads ucfunnel".split(" "),
        VG: "adagio adx amx criteo insticator openx rubicon".split(" "),
        VI: "adagio adx amx criteo insticator openx rubicon".split(" "),
        VN: "adagio adx amx gumgum insticator openx rubicon teads ucfunnel".split(" "),
        VU: "adagio adx amx insticator openx rubicon teads".split(" "),
        FI: "adagio adf adx amx appnexus criteo gumgum index insticator ix openx pubmatic rubicon seedtag smartadserver sovrn teads".split(" "),
        FJ: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        FK: "adagio adx amx criteo insticator openx rubicon".split(" "),
        FM: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        FO: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        FR: "adagio adf adx amazon amx conversant criteo gumgum insticator openx rhythmone rubicon seedtag smartadserver teads triplelift ucfunnel".split(" "),
        WF: "adagio adx amx insticator openx rubicon".split(" "),
        GA: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        GB: "adagio adf adx amazon amx appnexus conversant criteo gumgum index insticator ix loopme loopmeoko minutemedia openx pubmatic rhythmone rise rubicon seedtag sharethrough smartadserver sonobi sovrn teads triplelift ucfunnel".split(" "),
        WS: "adagio adx amx criteo insticator openx rubicon".split(" "),
        GD: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        GE: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        GF: "adagio adx amx criteo insticator openx rubicon".split(" "),
        GG: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        GH: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        GI: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        GL: "adagio adx amx criteo insticator openx rubicon".split(" "),
        GM: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        GN: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        GP: "adagio adx amx criteo insticator openx rubicon".split(" "),
        GQ: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        GR: "adagio adf adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        GS: "adagio adx amx criteo insticator openx rubicon".split(" "),
        GT: "adagio adf adx amx criteo insticator openx rubicon seedtag teads ucfunnel".split(" "),
        GU: "adagio adx amx criteo insticator openx rubicon".split(" "),
        GW: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        GY: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        XK: "adagio adx amx criteo insticator openx rubicon".split(" "),
        HK: "adagio adx amx appnexus criteo index insticator ix openx pubmatic rubicon sonobi sovrn teads ucfunnel".split(" "),
        HM: "adagio adx amx criteo insticator openx rubicon".split(" "),
        HN: "adagio adx amx criteo insticator openx rubicon seedtag teads ucfunnel".split(" "),
        HR: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        HT: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        YE: "adagio adx amx insticator openx rubicon teads".split(" "),
        HU: "adagio adf adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        ID: "adagio adx amx criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        YT: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        IE: "adagio adf adx amazon amx criteo gumgum insticator openx rubicon seedtag smartadserver sovrn teads triplelift ucfunnel".split(" "),
        IL: "adagio adf adx amx criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        IM: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        IN: "adagio adx amazon amx criteo insticator openx rubicon seedtag teads ucfunnel".split(" "),
        IO: "adagio adx amx criteo insticator openx rubicon".split(" "),
        ZA: "adagio adf adx amx criteo gumgum insticator openx rubicon smartadserver teads ucfunnel".split(" "),
        IQ: "adx amx criteo insticator openx rubicon teads".split(" "),
        IR: ["criteo", "teads"],
        IS: "adagio adf adx amx criteo gumgum insticator openx rubicon teads".split(" "),
        IT: "adagio adf adx amazon amx appnexus conversant criteo index insticator ix openx rhythmone rubicon seedtag smartadserver teads triplelift ucfunnel".split(" "),
        ZM: "adagio adx amx insticator openx rubicon teads".split(" "),
        JE: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        ZW: "adagio adx amx insticator openx rubicon teads".split(" "),
        JM: "adagio adx amx criteo gumgum insticator openx rubicon teads".split(" "),
        JO: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        JP: "adagio adf adx amazon amx appnexus criteo gumgum index insticator ix openx pubmatic rubicon sonobi teads ucfunnel".split(" "),
        KE: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        KG: "adagio adx amx criteo insticator openx rubicon".split(" "),
        KH: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        KI: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        KM: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        KN: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        KP: ["criteo", "teads"],
        KR: "adagio adx amx criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        KW: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        KY: "adagio adx amx criteo insticator openx rubicon".split(" "),
        KZ: "adagio adx amx criteo insticator openx rubicon".split(" "),
        LA: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        LB: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        LC: "adagio adx amx criteo gumgum insticator openx rubicon teads".split(" "),
        LI: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        LK: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        LR: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        LS: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        LT: "adagio adf adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        LU: "adagio adf adx amx criteo gumgum insticator openx rubicon teads".split(" "),
        LV: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        LY: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MA: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads".split(" "),
        MC: "adagio adf adx amx criteo insticator openx rubicon teads".split(" "),
        MD: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        ME: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MF: "adagio adx amx criteo insticator openx rubicon".split(" "),
        MG: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MH: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MK: "adagio adx amx criteo insticator openx rubicon".split(" "),
        ML: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MM: "adagio adx amx criteo insticator openx rubicon".split(" "),
        MN: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MO: "adagio adx amx criteo insticator openx rubicon".split(" "),
        MP: "adagio adx amx criteo insticator openx rubicon".split(" "),
        MQ: "adagio adx amx criteo insticator openx rubicon".split(" "),
        MR: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MS: "adagio adx amx criteo insticator openx rubicon".split(" "),
        MT: "adagio adf adx amx criteo gumgum insticator openx rubicon teads".split(" "),
        MU: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MV: "adagio adx amx criteo gumgum insticator openx rubicon teads".split(" "),
        MW: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        MX: "adagio adf adx amazon amx conversant criteo gumgum index insticator ix openx rubicon seedtag teads triplelift ucfunnel".split(" "),
        MY: "adagio adx amx criteo gumgum insticator openx rubicon teads ucfunnel".split(" "),
        MZ: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        NA: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        NC: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        NE: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        NF: "adagio adx amx criteo insticator openx rubicon".split(" "),
        NG: "adagio adx amx criteo insticator loopme loopmeoko openx rubicon teads".split(" "),
        NI: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        NL: "adagio adf adx amx criteo gumgum insticator openx rubicon seedtag teads triplelift ucfunnel".split(" "),
        NO: "adagio adf adx amx appnexus criteo gumgum index insticator ix openx pubmatic rubicon seedtag smartadserver sonobi teads ucfunnel".split(" "),
        NP: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        NR: "adagio adx amx criteo insticator openx rubicon".split(" "),
        NU: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        NZ: "33across adagio adf adx amazon amx appnexus conversant criteo index insticator ix openx rhythmone rubicon smartadserver sovrn teads triplelift ucfunnel".split(" "),
        OM: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        PA: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        PE: "adagio adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        PF: "adagio adx amx criteo insticator openx rubicon".split(" "),
        PG: "adagio adx amx criteo insticator openx rubicon teads".split(" "),
        PH: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        PK: "adagio adx amx criteo insticator openx rubicon teads ucfunnel".split(" "),
        PL: "adagio adf adx amx criteo gumgum insticator openx rubicon seedtag teads ucfunnel".split(" "),
        PM: "adagio adx amx criteo insticator openx rubicon".split(" "),
        PN: "adagio adx amx criteo insticator openx rubicon".split(" ")
      },
      divToAdUnitMap: {
        DESKTOP: {
          "div-insticator-ad-1": "sherdog.com_Web_300x250_1",
          "div-insticator-ad-2": "sherdog.com_Web_300x250_2",
          "div-insticator-ad-3": "sherdog.com_Web_300x250_3",
          "div-insticator-ad-4": "sherdog.com_Web_300x250_4",
          "div-insticator-ad-5": "sherdog.com_Web_300x250_5",
          "div-insticator-ad-6": "sherdog.com_Web_300x250_6",
          "div-insticator-ad-7": "sherdog.com_Web_728x90_1",
          "div-insticator-ad-8": "sherdog.com_Web_300x600_1",
          "div-insticator-ad-cmt-1": "sherdog.com_Web_300x250_cmt_1",
          "div-insticator-ad-cmt-2": "sherdog.com_Web_300x250_cmt_2",
          "div-insticator-ad-cmt-3": "sherdog.com_Web_300x250_cmt_3",
          "div-insticator-ad-cmt-4": "sherdog.com_Web_300x250_cmt_4",
          "div-insticator-ad-incmt-btn": "sherdog.com_Web_320x50_incmt_btn",
          "div-insticator-ad-incmt-lmbtn-1": "sherdog.com_Web_300x250_incmt_lmbtn",
          "div-insticator-ad-incmt-lmbtn-2": "sherdog.com_Web_728x90_incmt_lmbtn"
        },
        MOBILE: {
          "div-insticator-ad-1": "sherdog.com_Mobile_300x250_1",
          "div-insticator-ad-2": "sherdog.com_Mobile_300x250_2",
          "div-insticator-ad-3": "sherdog.com_Mobile_300x250_3",
          "div-insticator-ad-4": "sherdog.com_Mobile_300x250_4",
          "div-insticator-ad-5": "sherdog.com_Mobile_320x50_1",
          "div-insticator-ad-6": "sherdog.com_Mobile_320x50_2",
          "div-insticator-ad-cmt-1": "sherdog.com_Mobile_300x250_cmt_1",
          "div-insticator-ad-cmt-2": "sherdog.com_Mobile_300x250_cmt_2",
          "div-insticator-ad-cmt-3": "sherdog.com_Mobile_300x250_cmt_3",
          "div-insticator-ad-incmt-lmbtn-3": "sherdog.com_Mobile_300x250_incmt_lmbtn",
          "div-insticator-ad-incmt-lmbtn-4": "sherdog.com_Mobile_320x50_incmt_lmbtn"
        },
        TABLET: {}
      },
      mockup: {
        on: !1
      },
      showHouseAds: !0,
      testGroupNumber: String(window.insticator_tg || 2),
      adUnitSettings: {
        DESKTOP: {
          multiSizeOn: ["div-insticator-ad-incmt-btn", "div-insticator-ad-incmt-lmbtn-1", "div-insticator-ad-incmt-lmbtn-2"],
          adRefreshOn: "div-insticator-ad-1 div-insticator-ad-2 div-insticator-ad-3 div-insticator-ad-4 div-insticator-ad-5 div-insticator-ad-6 div-insticator-ad-7 div-insticator-ad-8 div-insticator-ad-cmt-1 div-insticator-ad-cmt-2 div-insticator-ad-cmt-3 div-insticator-ad-cmt-4 div-insticator-ad-incmt-btn div-insticator-ad-incmt-lmbtn-1 div-insticator-ad-incmt-lmbtn-2".split(" "),
          fixedHeightOn: "div-insticator-ad-3 div-insticator-ad-4 div-insticator-ad-5 div-insticator-ad-6 div-insticator-ad-7 div-insticator-ad-8 div-insticator-ad-cmt-1 div-insticator-ad-incmt-btn div-insticator-ad-incmt-lmbtn-1 div-insticator-ad-incmt-lmbtn-2".split(" "),
          enabledGAM: "div-insticator-ad-1 div-insticator-ad-2 div-insticator-ad-3 div-insticator-ad-4 div-insticator-ad-5 div-insticator-ad-6 div-insticator-ad-7 div-insticator-ad-8 div-insticator-ad-cmt-1 div-insticator-ad-cmt-2 div-insticator-ad-cmt-3 div-insticator-ad-cmt-4 div-insticator-ad-incmt-btn div-insticator-ad-incmt-lmbtn-1 div-insticator-ad-incmt-lmbtn-2".split(" "),
          multiSizeConfig: {
            "div-insticator-ad-1": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-2": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-3": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-4": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-5": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-6": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-7": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-8": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-cmt-1": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-cmt-2": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-cmt-3": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-cmt-4": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-incmt-btn": [[320, 50]],
            "div-insticator-ad-incmt-lmbtn-1": [[300, 250], [320, 100], [320, 50]],
            "div-insticator-ad-incmt-lmbtn-2": [[468, 60], [728, 90], [320, 50]]
          },
          enableVideo: "div-insticator-ad-1 div-insticator-ad-2 div-insticator-ad-3 div-insticator-ad-4 div-insticator-ad-5 div-insticator-ad-6 div-insticator-ad-cmt-1 div-insticator-ad-cmt-2 div-insticator-ad-cmt-3 div-insticator-ad-cmt-4 div-insticator-ad-incmt-lmbtn-1".split(" "),
          adunitRotation: {},
          adUnitType: {
            "div-insticator-ad-1": "CEU",
            "div-insticator-ad-2": "CEU",
            "div-insticator-ad-3": "STANDALONE",
            "div-insticator-ad-4": "STANDALONE",
            "div-insticator-ad-5": "STANDALONE",
            "div-insticator-ad-6": "STANDALONE",
            "div-insticator-ad-7": "STANDALONE",
            "div-insticator-ad-8": "STANDALONE",
            "div-insticator-ad-cmt-1": "COMMENTING",
            "div-insticator-ad-cmt-2": "COMMENTING",
            "div-insticator-ad-cmt-3": "COMMENTING",
            "div-insticator-ad-cmt-4": "COMMENTING",
            "div-insticator-ad-incmt-btn": "COMMENTING",
            "div-insticator-ad-incmt-lmbtn-1": "COMMENTING",
            "div-insticator-ad-incmt-lmbtn-2": "COMMENTING"
          }
        },
        MOBILE: {
          multiSizeOn: ["div-insticator-ad-incmt-lmbtn-3", "div-insticator-ad-incmt-lmbtn-4"],
          adRefreshOn: "div-insticator-ad-1 div-insticator-ad-2 div-insticator-ad-3 div-insticator-ad-4 div-insticator-ad-5 div-insticator-ad-6 div-insticator-ad-cmt-1 div-insticator-ad-cmt-2 div-insticator-ad-cmt-3 div-insticator-ad-incmt-lmbtn-3 div-insticator-ad-incmt-lmbtn-4".split(" "),
          fixedHeightOn: "div-insticator-ad-1 div-insticator-ad-2 div-insticator-ad-3 div-insticator-ad-4 div-insticator-ad-5 div-insticator-ad-6 div-insticator-ad-cmt-1 div-insticator-ad-cmt-2 div-insticator-ad-cmt-3 div-insticator-ad-incmt-lmbtn-3 div-insticator-ad-incmt-lmbtn-4".split(" "),
          enabledGAM: "div-insticator-ad-1 div-insticator-ad-2 div-insticator-ad-3 div-insticator-ad-4 div-insticator-ad-5 div-insticator-ad-6 div-insticator-ad-cmt-1 div-insticator-ad-cmt-2 div-insticator-ad-cmt-3 div-insticator-ad-incmt-lmbtn-3 div-insticator-ad-incmt-lmbtn-4".split(" "),
          multiSizeConfig: {
            "div-insticator-ad-1": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-2": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-3": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-4": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-5": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-6": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-cmt-1": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-cmt-2": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-cmt-3": [[468, 60], [300, 600], [728, 90], [970, 90], [160, 600], [300, 250], [120, 600], [970, 250], [250, 250]],
            "div-insticator-ad-incmt-lmbtn-3": [[300, 250]],
            "div-insticator-ad-incmt-lmbtn-4": [[320, 50]]
          },
          enableVideo: "div-insticator-ad-1 div-insticator-ad-2 div-insticator-ad-3 div-insticator-ad-4 div-insticator-ad-cmt-1 div-insticator-ad-cmt-2 div-insticator-ad-cmt-3 div-insticator-ad-incmt-lmbtn-3".split(" "),
          adunitRotation: {},
          adUnitType: {
            "div-insticator-ad-1": "CEU",
            "div-insticator-ad-2": "CEU",
            "div-insticator-ad-3": "STANDALONE",
            "div-insticator-ad-4": "STANDALONE",
            "div-insticator-ad-5": "STANDALONE",
            "div-insticator-ad-6": "STANDALONE",
            "div-insticator-ad-cmt-1": "COMMENTING",
            "div-insticator-ad-cmt-2": "COMMENTING",
            "div-insticator-ad-cmt-3": "COMMENTING",
            "div-insticator-ad-incmt-lmbtn-3": "COMMENTING",
            "div-insticator-ad-incmt-lmbtn-4": "COMMENTING"
          }
        },
        TABLET: {}
      },
      enableCustomPrebid: {
        on: !1,
        customScript: "https://df80k0z3fi8zg.cloudfront.net/files/instibid/fc0dfd76-50f1-4ee7-9e23-c7def2f2a597.js"
      },
      isOkoSite: !1,
      enableInterstitialDesktop: !1,
      enableInterstitialMobile: !1,
      siteUrl: "sherdog.com",
      amazonBidMap: {
        "1ai57nk": "1.77",
        "8nb400": "35",
        tktzb4: "0.02",
        b0u4u8: "12",
        "103kfsw": "2.77",
        "1huugao": "2.79",
        "13ueygw": "1.65",
        "1yx5hc0": "1.71",
        "191pce8": "7.85",
        h3c934: "2.32",
        d7hxq8: "1.6",
        "1cq1yps": "1.61",
        "1t5vwn4": "5.15",
        "1xe7pq8": "2.67",
        "1hzu8zk": "0.23",
        m84qo0: "3.5",
        "1mfnr40": "0.31",
        "144ejuo": "0.93",
        "19o6fi8": "1.13",
        "4luiv4": "0.92",
        "1phjabk": "2.39",
        "1lvokcg": "0.95",
        "2ib3eo": "25",
        tutkow: "1.3",
        "11mi7eo": "1.81",
        "1vv9y4g": "1.23",
        c461a8: "32",
        rwwf0g: "1.14",
        "1dk0qv4": "0.25",
        azl6o0: "1.76",
        fpea68: "0.72",
        hnbfuo: "1.68",
        "1uhbz7k": "1.63",
        "19e6u4g": "1.45",
        "58blz4": "5.4",
        o123nk: "0.62",
        "3udn28": "7.4",
        t0usjk: "0.66",
        p50h6o: "0.14",
        hdbugw: "0.4",
        "1dwi8lc": "6.65",
        md4jcw: "0.94",
        ir9tds: "1.5",
        gtcnpc: "1.04",
        s0n9j4: "16.5",
        kk76dc: "2.62",
        "1cb2kn4": "2.89",
        "9vmt4w": "1.44",
        lvn8xs: "5.5",
        exxedc: "7.6",
        "1v8sv0g": "7.95",
        "1wa9c74": "3.15",
        "17b9vr4": "3.65",
        "9ln7r4": "0.16",
        csijnk: "2.88",
        "14odqm8": "0.29",
        nibv28: "11.5",
        "13kfd34": "0.37",
        "1frxhxc": "0.09",
        "15kuf40": "7.65",
        "1fmxp8g": "2.65",
        "56g6ps": "31",
        lt5clc: "0.38",
        p00ohs: "2.7",
        "50twxs": "2.84",
        "13ffke8": "2.93",
        "3rvqps": "2.28",
        "7dqgow": "0.12",
        tic2yo: "7.7",
        "1xbptds": "7.15",
        "1b24ef4": "1.93",
        q8yups: "0.46",
        "1odkwsg": "2.07",
        "1181s": "3.4",
        ug1pmo: "12.5",
        "126he68": "1.97",
        ms3xfk: "2.86",
        "112j0n4": "2.45",
        "1hfv280": "0.87",
        "16wahog": "0.13",
        "5kt3pc": "3.8",
        "1mzmxvk": "1.27",
        iha800: "0.22",
        xgoao0: "0.74",
        c61gjk: "6.4",
        hxb18g: "0.86",
        "4vu48w": "2.2",
        t5ul8g: "4.5",
        "1m8622o": "7.35",
        wz708w: "5.7",
        u7b2f4: "6.1",
        "4buxhc": "1.64",
        i2atxc: "4.7",
        gocv0g: "3.6",
        zol1q8: "0.85",
        "1a85m9s": "0.49",
        "18cqcxs": "6.85",
        xvnoqo: "2.66",
        "1bm3l6o": "1.29",
        "135fz0g": "4.85",
        b9ks1s: "0.64",
        e1gpvk: "0.24",
        "2nxd6o": "1.96",
        "1gbwoow": "1.05",
        fzdvk0: "2",
        "8cp1j4": "3",
        "1manyf4": "2.87",
        vtzojk: "10.5",
        pf02kg: "1.42",
        "1t3e0ao": "0.03",
        "1itt14w": "2.47",
        "1du0c8w": "1.53",
        onj6rk: "5.9",
        "73qvb4": "2.04",
        dhhj40: "0.88",
        "1l1ps74": "2.31",
        "11whssg": "0.69",
        "15icirk": "2.53",
        nh2ww0: "1.26",
        "162bpj4": "1.89",
        "1urbklc": "0.91",
        "4s39q8": "15",
        "1yi639c": "2.99",
        "1exyps0": "1.85",
        "1w59ji8": "2.51",
        qqg54w: "8.5",
        kz6kg0: "1.34",
        "1qlhnuo": "2.11",
        g84irk: "18",
        "1cg2dc0": "0.33",
        "108k8hs": "0.21",
        "11ri03k": "3.25",
        "1yn5vy8": "0.43",
        "1jds7wg": "1.83",
        cdj5kw: "0.96",
        vsqqdc: "0.26",
        rmwtmo: "1.46",
        "10sjf9c": "1.17",
        zelgcg: "1.7",
        fcabcw: "30",
        "69s35s": "0.6",
        "46v4sg": "4.2",
        elfwn4: "1.2",
        "1qvh98g": "0.19",
        ol1af4: "0.78",
        mx3q4g: "0.3",
        "18k81z4": "0.81",
        hptc74: "6.8",
        "1ijtfr4": "1.19",
        "1e3zxmo": "1.21",
        "1krq6tc": "1.03",
        "7xpngg": "1.08",
        "12hp8g": "6.6",
        "7wgpa8": "19",
        "18z7g1s": "2.73",
        "10ijtvk": "1.49",
        "146wg74": "6.05",
        "1d01k3k": "0.89",
        ehp24g: "14",
        "1nylips": "3.35",
        "1v6ayo0": "2.83",
        "1glwa2o": "2.33",
        "1oxk3k0": "1.43",
        bjkdfk: "1.92",
        g9dgxs: "0.08",
        hf79q8: "26",
        "130g6bk": "1.01",
        "1wf94w0": "0.59",
        jl8lj4: "0.54",
        "9gnf28": "2.72",
        evfi0w: "2.48",
        "7plhc0": "27",
        "1mpnchs": "1.59",
        "1bh3shs": "3.85",
        drh4hs: "2.16",
        "1nm40zk": "5.75",
        sgvls0: "0.5",
        "19478qo": "0.17",
        k1gxs0: "13.5",
        "6tr9xc": "0.76",
        std3i8: "6.9",
        faew3k: "4.4",
        ov0vsw: "2.06",
        "1jsrlz4": "4.55",
        "1njm4n4": "0.63",
        "1i2c5c0": "5.35",
        "1g1x3b4": "1.37",
        mn44qo: "2.22",
        "176a328": "1.41",
        "1rpg1ds": "2.43",
        ypmgw0: "4.9",
        "158cxds": "1.25",
        "1u7cdts": "0.35",
        qdyneo: "4.3",
        h0ucqo: "10",
        u4t62o: "0.98",
        "41vc3k": "0.36",
        qsy1hc: "0.82",
        "1lbpdkw": "0.39",
        "19y60w0": "2.41",
        "1hpunls": "2.15",
        "23y6f4": "1.8",
        "1bw36kg": "0.97",
        "1i9tudc": "1.51",
        "19qobuo": "6.25",
        yd4z5s: "6.5",
        gjd2bk: "1.36",
        "1txcsg0": "2.27",
        aplla8: "0.48",
        "1p01zwg": "6.55",
        nr2i9s: "2.54",
        "1y36p6o": "1.07",
        "1onki68": "0.15",
        "1ietn28": "3.75",
        kf7dog: "1.98",
        "14ydc00": "1.57",
        "8rofls": "1.72",
        "1df0y68": "2.81",
        zykn40: "2.13",
        aflzwg: "2.4",
        as3hmo: "5.6",
        "1tc3y8": "21",
        r7xfk0: "2.74",
        "807jsw": "6.2",
        "10dk16o": "4.05",
        k57sao: "0.7",
        "1s4ffgg": "4.35",
        yum9kw: "2.34",
        wmpiio: "2.5",
        "1tddlog": "1.31",
        "1lloyyo": "1.67",
        "4fls00": "17",
        g4do8w: "2.64",
        "1privpc": "0.47",
        zzsw0: "1.48",
        "1xt73sw": "1.39",
        yan2tc: "1.38",
        s6w0e8: "2.42",
        "1ez6yo": "5",
        y0nhfk: "0.1",
        "1l6pkw0": "2.95",
        cniqyo: "2.24",
        "1gvvvgg": "0.41",
        "18p7uo0": "4.65",
        "18a8glc": "1.73",
        n73bi8: "1.58",
        "1sjetj4": "0.67",
        a5meio: "1.12",
        "16yse0w": "5.25",
        "1oikphc": "2.71",
        djzfgg: "6",
        "13afrpc": "2.29",
        xbohz4: "3.3",
        "55tpmo": "0.28",
        f5f3eo: "0.56",
        "1steeww": "1.95",
        "1enz4e8": "0.57",
        "1h5vgu8": "1.69",
        n9l7uo: "6.7",
        "1n9mj9c": "2.55",
        "1xj7if4": "0.11",
        khpa0w: "7.1",
        "2gfo5c": "5.8",
        "1jga48w": "6.95",
        ebgb9c: "1.52",
        ahhf5s: "28",
        "1f7yb5s": "0.73",
        eatu68: "22",
        "11cim0w": "0.53",
        ykmo74: "1.06",
        "12qgkxs": "1.33",
        "9aeo74": "20",
        ujsk5c: "2.9",
        "1012jgg": "7.25",
        "1a35tkw": "3.05",
        "1ntlq0w": "1.91",
        "1u2cl4w": "2.91",
        "1k7r01s": "0.07",
        "1xo7b40": "3.95",
        "2wnb4": "29",
        "6m9kw0": "7",
        x6opa8: "1.86",
        "1yd6akg": "2.35",
        "1bc3zsw": "0.01",
        uyry80: "1.62",
        "1cik9og": "5.45",
        "9qn0g0": "4",
        "17g9og0": "1.09",
        "1cv1reo": "3.45",
        "610qo": "0.84",
        vir4zk: "2.18",
        "1uwbda8": "4.75",
        bdbmkg: "16",
        "3wvjeo": "2.92",
        "5zshs0": "2.52",
        "1wz8bnk": "0.75",
        j3rb40: "6.3",
        jv86ww: "1.82",
        sqv75s: "1.78",
        "1p7joxs": "1.11",
        "1s9f85c": "1.79",
        taudxc: "1.94",
        rrwmbk: "3.7",
        "1q1ih34": "1.75",
        "11f0idc": "5.65",
        "1qbi2gw": "0.83",
        "1rfgg00": "1.15",
        i7amm8: "2.14",
        ffeosg: "1.84",
        "16cbaww": "0.77",
        pozny8: "1.1",
        "16raozk": "2.69",
        w2qbr4: "1.54",
        lo5jwg: "2.94",
        rff4lc: "5.3",
        qiyg3k: "1.74",
        cv0g00: "8",
        "1x97x1c": "2.03",
        q1h5og: "7.5",
        "1v1b5z4": "2.19",
        pyz9c0: "2.38",
        "1khqlfk": "1.35",
        "1tnd728": "0.99",
        "6jrojk": "1.88",
        "1mknjsw": "4.15",
        "1goe6f4": "7.45",
        "15xbwu8": "4.45",
        "15sc45c": "0.61",
        "1b4mark": "7.05",
        "1j3smio": "0.55",
        "1jxreo0": "1.99",
        "37wjy8": "1.32",
        "19ze9s": "1.16",
        "17q99ts": "2.37",
        lj5r7k: "2.3",
        ciiy9s: "4.8",
        "6v083k": "11",
        h8c1s0: "2.96",
        "1gqw2rk": "2.97",
        "1b74740": "2.57",
        wcpx4w: "1.22",
        "5ftb0g": "1.56",
        jg8su8: "3.1",
        "7b8kcg": "7.8",
        tfu6m8: "2.58",
        fl0ykg: "34",
        jb905c: "2.46",
        zaults: "14.5",
        yzm29s: "2.98",
        "12syha8": "6.45",
        ku6rr4: "3.9",
        cxiccg: "0.32",
        "1ypnsao": "5.55",
        "12bh6v4": "2.61",
        g0m4g: "2.12",
        xqnw1s: "2.02",
        "1jnrta8": "0.71",
        ib1h4w: "17.5",
        "2dxrsw": "0.68",
        "1808v7k": "0.45",
        jsqakg: "9.5",
        "1qqhgjk": "2.75",
        "87p8u8": "2.36",
        "2xwykg": "0.04",
        wwp3wg: "0.58",
        bok64g: "2.56",
        uesrgg: "2.26",
        nm2pkw: "5.1",
        z4luyo: "0.42",
        vnqxog: "2.82",
        q07i8: "0.2",
        "1ujtvk0": "6.75",
        "1vlacqo": "1.55",
        "1qdzytc": "5.95",
        "35enls": "9",
        "14jdxxc": "2.85",
        "1sye7ls": "2.59",
        "1r5gum8": "1.47",
        "1rzfmrk": "0.51",
        "1wp8q9s": "1.87",
        b4kzcw: "3.2",
        "1rrxxq8": "7.55",
        "12ggzk0": "0.05",
        p8rbpc: "15.5",
        "1vbarcw": "0.27",
        rcx88w: "0.18",
        "91o0zk": "0.8",
        "1k593pc": "7.75",
        "1pcjhmo": "4.95",
        "1c62ry8": "2.25",
        vl91c0: "7.3",
        "3hw5c0": "1",
        c7wvsw: "24",
        iesbnk: "7.9",
        "1vxrugw": "6.35",
        "9bnmdc": "2.08",
        "1e8zqbk": "5.05",
        "1fhxwjk": "2.01",
        ob1p1c: "1.9",
        j19erk: "1.18",
        "16mawao": "2.05",
        "7nq22o": "1.4",
        "1da15hc": "2.17",
        "1as4t1c": "0.65",
        "1tyl1c": "0.52",
        r2xmv4: "2.1",
        uoscu8: "0.34",
        l965ts: "1.02",
        "5z60ow": "23",
        "1ku835s": "6.15",
        "1m5o5q8": "2.23",
        "1o3lbeo": "0.79",
        vxqj28: "4.1",
        "14ee58g": "2.21",
        wvg5q8: "18.5",
        "1k2r7cw": "2.63",
        m34xz4: "1.66",
        "9e5ips": "7.2",
        "1edzj0g": "2.49",
        n5udc0: "19.5",
        "18u7ncw": "2.09",
        l0etc: "2.76",
        "78qo00": "2.68",
        "1jyznk": "2.44",
        "1tidedc": "3.55",
        icafb4: "2.78",
        gbvda8: "5.2",
        dwgx6o: "2.8",
        "5pswe8": "1.24",
        "1h0vo5c": "4.25",
        v8rjls: "0.9",
        "1fag7i8": "5.85",
        "6yr2m8": "4.6",
        "2sx5vk": "2.6",
        m9czk: "13",
        "8hou80": "0.44",
        kp6z28: "0.06",
        "3si7sw": "33",
        c3jk74: "1.28"
      },
      adlPropertyId: "insticator",
      enablePreventAdOnBotCrawler: !0,
      botFilters: [],
      enableConfiant: !0,
      myPropertyId: "Fseez_-nDyWQXIJsbnoKkKTHXC4",
      enableRequestsOnAllAdUnits: !1,
      enableRefreshOnInactiveTab: !0,
      enableSovrnBeacon: !0,
      enableCaptify: !1,
      enableNonPersonalizedAds: !1,
      enableStickyAdUnits: !1,
      useAmazonHeaderBidding: !0,
      enableAutoRefresh: !0,
      enableInfinityAdUnits: !1,
      enableSpaRouting: !1,
      enablePrebidAnalyticsAdapter: !1,
      eventURL: "https://event.insticator.com/v1/event",
      enableRonNetworkSetting: !1,
      ronNetworkId: {},
      enableVideoModule: !1
    },
    variables: {
      hbFills: {},
      adSlots: {},
      enableFixedHeight: !0,
      domainWhitelist: {
        on: !1,
        list: ["hunchme.com", "insticator.com", "sherdog.com"]
      },
      enableMcm: !0,
      enableTablet: !1,
      styleOverrideMap: {
        desktop: {
          "div-insticator-ad-cmt-2": "width: 300px !important; height: 250px !important; padding-top: 15px !important;text-aligh:center!important;",
          "div-insticator-ad-cmt-3": "width:300px!important;min-height:280px!important;",
          "div-insticator-ad-cmt-4": "width:300px!important;padding-bottom:25px!important;min-height:280px!important;",
          "div-insticator-ad-cmt-1": "width: 300px !important; height: 250px !important; padding-top: 15px !important;"
        },
        mobile: {
          "div-insticator-ad-cmt-2": "width: 300px !important; height: 250px !important; text-align:center!important;padding-bottom:15px!important;",
          "div-insticator-ad-cmt-3": "width: 300px !important; height: 250px !important; text-align:center!important;padding-bottom:15px!important;",
          "div-insticator-ad-1": "padding-top:15px;",
          "div-insticator-ad-cmt-1": "width: 300px !important; height: 250px !important; text-align:center!important;padding-bottom:15px!important;"
        }
      }
    }
  },
  passback: {
    passbackInfoJson: {
      DESKTOP: {},
      TABLET: {},
      MOBILE: {}
    },
    passbackCreativeMap: {
      default: ""
    }
  },
  visitor: {
    hashedEmailsEndpoint: "https://h99w9l39sa.execute-api.us-east-1.amazonaws.com/prod"
  },
  tracking: {
    embeds: {
      "19e5420e-0a2d-4276-841b-78619429c6ad": !0,
      "928302f1-8107-47a7-97be-915bcd8bf3bc": !0
    }
  },
  smartRefresh: {
    enableSmartRefresh: !0,
    initialAutoRefresh: 0,
    minimumRefreshInterval: 40,
    refreshBidsInterval: 40,
    refreshAdsCheckInterval: 5,
    refreshAdsCap: 100,
    thresholdToBeInactive: 60,
    firstRefreshCheckTime: 40,
    adRenderMarginDesktop: 1E3,
    adRenderMarginMobile: 1E3,
    userIsActive: !0,
    adunitStatusMap: {},
    handles: {
      refreshBidsHandle: null,
      refreshSlotHandle: null
    },
    smartRefreshExclusion: ["US", "GB", "CA"]
  },
  id: {
    identityLink: {
      storage: {
        expires: 7,
        name: "idl_env",
        type: "cookie"
      },
      params: {
        pid: "88"
      }
    },
    criteo: 1,
    lotamePanoramaId: {
      params: {
        clientId: "17248"
      }
    },
    sharedId: {
      storage: {
        expires: 365,
        name: "_pubcid",
        type: "cookie"
      }
    },
    unifiedId: {
      storage: {
        expires: 60,
        name: "pbjs-unifiedid",
        type: "cookie"
      },
      params: {
        url: "//match.adsrvr.org/track/rid?ttd_pid\x3dmp4hjl8\x26fmt\x3djson"
      }
    },
    id5Id: {
      storage: {
        expires: 90,
        name: "id5id",
        type: "html5",
        refreshInSeconds: 28800
      },
      params: {
        partner: 369
      }
    }
  },
  sspDiscrepancyMap: {
    ucfunnel: 5,
    criteo: 0,
    gumgum: 0,
    sonobi: 0,
    amx: 0,
    ix: 0,
    yieldnexus: 60,
    districtm: 20,
    rhythmone: 60,
    synacormedia: 99,
    appnexus: 18,
    "33across": 0,
    pubmatic: 0,
    sharethrough: 22,
    rubicon: 0,
    adagio: 1,
    minutemedia: 0,
    conversant: 0,
    openx: 2,
    sovrn: 0,
    mediago: 0,
    aol: 0
  },
  bidderJson: {
    "div-insticator-ad-7": [{
      name: "33across",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          mid: "1642153"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          placementId: "21357782"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          inSlot: "18045"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          siteId: "579236"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "762882"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          placement_id: "610b5788710c23998f78"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          tagid: "754916"
        }
      }
    }],
    "div-insticator-ad-8": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          mid: "1642153"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          placementId: "21357782"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          inSlot: "18040"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          siteId: "579236"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "762882"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          placement_id: "7103a465cfae24c9ef67"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 600]],
        params: {
          tagid: "754911"
        }
      }
    }],
    "div-insticator-ad-incmt-btn": [{
      name: "33across",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          mid: "1642153"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum"
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "762882"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          placement_id: "5d58704f7719d9cfda92"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[320, 50]],
        params: {
          tagid: "754928"
        }
      }
    }],
    "div-insticator-ad-cmt-2": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357788"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81516"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81531"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579237"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "739552"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "739554"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "d45a44430f5b05ef9ae0"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "8fed2fa9cf7a16729326"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754924"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754924"
        }
      }
    }],
    "div-insticator-ad-cmt-3": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357788"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81517"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81532"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579237"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "1594794"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "1594802"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "f83dd4bda75ef5ceb15f"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "f42cecad00b330c9ccb8"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754924"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754924"
        }
      }
    }],
    "div-insticator-ad-cmt-4": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81518"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "1594796"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "8797672c8e44dc647251"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754924"
        }
      }
    }],
    "div-insticator-ad-1": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18035"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18050"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "762882"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "762884"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "a3163f1ee2381603a3d2"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "bd7277af98445f95dca2"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      }
    }],
    "div-insticator-ad-2": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18036"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18051"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "739552"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "739554"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "d45a44430f5b05ef9ae0"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "8fed2fa9cf7a16729326"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      }
    }],
    "div-insticator-ad-3": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18037"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18052"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "1594794"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "1594802"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "f83dd4bda75ef5ceb15f"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "f42cecad00b330c9ccb8"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      }
    }],
    "div-insticator-ad-4": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18038"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18053"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "1594796"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "1594804"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "8797672c8e44dc647251"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "b1ba4cbec4fc9f0507a0"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      }
    }],
    "div-insticator-ad-5": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          placementId: "21357782"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18039"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          inSlot: "18055"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          siteId: "579236"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "1594798"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "762884"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "7c58056d53b4ae70b191"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          placement_id: "b7adad96690927fddbf8"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          tagid: "754918"
        }
      }
    }],
    "div-insticator-ad-6": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          siteId: "atx4xsU7Or6R0PaKlId8sQ",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357782"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          placementId: "21357782"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "18035"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          inSlot: "18056"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          adUnitId: "01EX2DK7MW4BNN8TS2R0AT576D"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579236"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          siteId: "579236"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "1594800"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "739554"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "3fd38f4fbb72fd27cd99"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          placement_id: "c6a061073e4f8f817573"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754915"
        }
      },
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          tagid: "754918"
        }
      }
    }],
    "div-insticator-ad-incmt-lmbtn-4": [{
      name: "33across",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum"
    }, {
      name: "insticator",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "762884"
        }
      }
    }, {
      name: "sonobi",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          placement_id: "65bd59bc05f298529853"
        }
      }
    }, {
      name: "sovrn",
      mobile: {
        sizeArray: [[320, 50]],
        params: {
          tagid: "754928"
        }
      }
    }],
    "div-insticator-ad-incmt-lmbtn-3": [{
      name: "33across",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81530"
        }
      }
    }, {
      name: "insticator",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "762884"
        }
      }
    }, {
      name: "sonobi",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "e2871b671781a76a64d9"
        }
      }
    }, {
      name: "sovrn",
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754924"
        }
      }
    }],
    "div-insticator-ad-incmt-lmbtn-2": [{
      name: "33across",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[728, 90], [468, 60]],
        params: {
          mid: "1642153"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[728, 90], [468, 60]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[728, 90], [468, 60]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          inSlot: "81525"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[728, 90], [468, 60]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[728, 90], [468, 60]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[728, 90], [468, 60]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "762882"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[728, 90]],
        params: {
          placement_id: "d52f431df612e6c0998f"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[728, 90], [468, 60]],
        params: {
          tagid: "754925"
        }
      }
    }],
    "div-insticator-ad-incmt-lmbtn-1": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          mid: "1642153"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81515"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[320, 50], [300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[320, 50], [300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[320, 50], [300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "762882"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          placement_id: "3d1f6793923e67e787fb"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[320, 50], [320, 100], [300, 250]],
        params: {
          tagid: "754924"
        }
      }
    }],
    "div-insticator-ad-cmt-1": [{
      name: "33across",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "bAsyo8U7Or6PeLaKkv7mNO",
          productId: "siab"
        }
      }
    }, {
      name: "adf",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642153"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          mid: "1642155"
        }
      }
    }, {
      name: "amazon"
    }, {
      name: "amx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagId: "aW5zdGljYXRvci5jb20"
        }
      }
    }, {
      name: "appnexus",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357788"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placementId: "21357788"
        }
      }
    }, {
      name: "criteo",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          networkId: "11816"
        }
      }
    }, {
      name: "gumgum",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81515"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          inSlot: "81530"
        }
      }
    }, {
      name: "insticator",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          adUnitId: "01EX2DNVF3S3KPG9JQ7WE5GW9N"
        }
      }
    }, {
      name: "ix",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579237"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          siteId: "579237"
        }
      }
    }, {
      name: "minutemedia",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "01garg96c88b"
        }
      }
    }, {
      name: "openx",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600268",
          delDomain: "insticator-d.openx.net"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          unit: "558600266",
          delDomain: "insticator-d.openx.net"
        }
      }
    }, {
      name: "pubmatic",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          publisherId: "95054"
        }
      }
    }, {
      name: "rise",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          org: "6124caed9c7adb0001c028d8"
        }
      }
    }, {
      name: "rubicon",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155342",
          zoneId: "762882"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          accountId: "17062",
          siteId: "155344",
          zoneId: "762884"
        }
      }
    }, {
      name: "sonobi",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "a3163f1ee2381603a3d2"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          placement_id: "bd7277af98445f95dca2"
        }
      }
    }, {
      name: "sovrn",
      desktop: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754924"
        }
      },
      mobile: {
        sizeArray: [[300, 250]],
        params: {
          tagid: "754924"
        }
      }
    }]
  },
  euCountries: "AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE RD".split(" ")
};
window.addEventListener = function (eventName, functionName) {
  validateAndSendPayload({
    functionName: 'addEventListener',
    args: [eventName, functionName],
    stackTrace: getStackTrace(),
    timestamp: Date.now(),
    sessionId: generateRandomId()
  }, {
    eventName,
    functionName
  });
  originalAddEventListener.apply(this, arguments);
};
const defaultFunctionHook = (functionName, originalFunction) => {
  return function () {
    const args = Array.from(arguments);
    validateAndSendPayload({
      functionName,
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateRandomId()
    }, {
      args
    });
    return originalFunction.apply(this, args);
  };
};
window.XMLHttpRequest = jshook('XMLHttpRequest', defaultFunctionHook);
window.fetch = jshook('fetch', defaultFunctionHook);
!function () {
  "use strict";

  const e = 18e5;
  let t, i;
  function n() {
    return globalThis && (globalThis.settings || {}).ad ? globalThis.settings : t;
  }
  function o(t, i, n = !1, o = e) {
    try {
      if (window.localStorage && "function" == typeof window.localStorage.setItem) {
        const e = new Date(Date.now() + (n ? 9e10 : o)).toUTCString();
        window.localStorage.setItem(`${t}.exp`, e), window.localStorage.setItem(t, i);
      } else r(t, i, n, o);
    } catch (e) {
      r(t, i, n, o);
    }
  }
  function s(e) {
    try {
      if (window.localStorage && "function" == typeof window.localStorage.getItem) {
        const t = window.localStorage.getItem(`${e}.exp`) || "0";
        return new Date(t).getTime() - Date.now() > 0 && window.localStorage.getItem(e) || "";
      }
      return a(e);
    } catch (t) {
      return a(e);
    }
  }
  function r(t, i, n = !1, o = e) {
    const s = new Date();
    s.setTime(s.getTime() + (n ? 9e10 : o)), document.cookie = `${t}=${i};expires=${s.toUTCString()};path=/`;
  }
  function a(e) {
    const t = document.cookie.match(new RegExp(`(^|;) ?${e}=([^;]*)(;|$)`));
    return t ? t[2] : "";
  }
  function c(e) {
    "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e);
  }
  function d() {
    window.Insticator = window.Insticator || {
      ad: {
        loadAd: function (e) {
          window.Insticator.ad.q.push(e);
        },
        q: []
      }
    };
    const {
      ad: e
    } = window.Insticator;
    return (null == e ? void 0 : e.q) && Array.isArray(e.q) || ((null == e ? void 0 : e.q) || (e.q = []), u()), [...new Set(e.q)];
  }
  function u() {
    const {
        divToAdUnitMap: e
      } = n().ad.settings,
      t = e[l()],
      i = document.querySelectorAll('*[id^="div-insticator-ad"]'),
      {
        ad: o
      } = window.Insticator,
      s = [];
    return i.forEach(e => {
      const i = e.id;
      t[i] ? o.q.includes(i) || (B.logMessage("Missed: " + i), o.q.push(i), s.push(i)) : (e.remove(), B.logMessage(`Misconfigured: ${i}. Removed from DOM.`));
    }), s;
  }
  function l() {
    return i || function () {
      const e = n(),
        {
          DEVICE_TYPE_BREAKPOINTS: {
            desktopLower: t,
            mobileUpper: o
          }
        } = e.ad.settings,
        {
          enableTablet: s
        } = e.ad.variables;
      let r = "DESKTOP";
      if (s) {
        const e = Math.min(window.innerWidth, window.screen.width);
        e <= t && (r = "MOBILE"), o < e && e < t && (r = "TABLET");
      } else (/(android|bb\d |meego). mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (r = "MOBILE");
      return i = r, i;
    }();
  }
  function h() {
    return window != window.top;
  }
  function p() {
    return h() && window.location.hostname.startsWith("comment.instiengage");
  }
  function g(e, t) {
    if (null != n().ad.settings.divToAdUnitMap[e][t]) return n().global.domain + "-" + t;
  }
  function f(e) {
    const t = document.getElementById(e);
    t && (t.style.display = "flex", t.style.alignItems = "center", t.style.justifyContent = "center", t.style.margin = "auto");
  }
  function m(e, t, i) {
    const n = document.getElementById(e);
    if (n) if ("" === n.style.width || "" === n.style.height) {
      const e = "width:" + t + "px;height:" + i + "px;",
        o = n.style.cssText;
      n.setAttribute("style", o + e);
    } else n.style.width = t + "px", n.style.height = i + "px";
  }
  function b(e) {
    return ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "UK", "GB"].includes(e);
  }
  let w = !1,
    v = !1;
  function y(e) {
    w = e;
  }
  function I() {
    return w;
  }
  function A(e, t, i) {
    const n = function (e = "300", t = "250") {
        const i = document.createElement("iframe");
        return i.className = "instiIframe", i.width = e + "px", i.height = t + "px", i.frameBorder = "0", i.scrolling = "no", i.marginHeight = "0", i.marginWidth = "0", i.style.marginTop = "0", i.style.marginLeft = "0", i;
      }(t, i),
      o = document.getElementById(e);
    return o && o.appendChild(n), n;
  }
  function O(e, t) {
    var i, n, o;
    null === (i = e.contentWindow) || void 0 === i || i.document.open(), null === (n = e.contentWindow) || void 0 === n || n.document.write(t), null === (o = e.contentWindow) || void 0 === o || o.document.close();
  }
  function S(e) {
    const t = document.getElementById(e);
    if (t) {
      for (; t.hasChildNodes();) t.firstChild && t.removeChild(t.firstChild);
      return !0;
    }
    return !1;
  }
  function T() {
    return window.crypto && "function" == typeof window.crypto.getRandomValues ? window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 : Math.random();
  }
  function _() {
    let e = new Date().getTime(),
      t = "undefined" != typeof performance && performance.now && 1e3 * performance.now() || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
      let n = 16 * T();
      return e > 0 ? (n = (e + n) % 16 | 0, e = Math.floor(e / 16)) : (n = (t + n) % 16 | 0, t = Math.floor(t / 16)), ("x" === i ? n : 3 & n | 8).toString(16);
    });
  }
  function x(e, t) {
    if ("Proxy" in window) return new Proxy(e, t);
  }
  function P(e) {
    return !!document.getElementById(e);
  }
  function M(e) {
    for (const t in e) if (e.hasOwnProperty(t)) return !1;
    return !0;
  }
  function C(e) {
    try {
      return JSON.parse(JSON.stringify(e));
    } catch (e) {
      return null;
    }
  }
  function k() {
    return !(document.hidden || document.msHidden || document.webkitHidden || document.mozHidden);
  }
  const B = function () {
    window.Insticator = window.Insticator || {};
    const {
      logger: e = {
        logMessage: e => e
      }
    } = window.Insticator;
    return e;
  }();
  let E = {},
    j = {};
  function R(e) {
    var t;
    return null === (t = j[e]) || void 0 === t ? void 0 : t[0];
  }
  function N() {
    return n().ad.settings.useAmazonHeaderBidding;
  }
  function D(e) {
    var t;
    let i = function () {
      const e = [],
        t = n();
      return d().forEach(t => {
        E[t] && e.push(E[t]);
      }), {
        slots: e,
        timeout: t.ad.settings.AMAZON_TIMEOUT
      };
    }();
    if (e && e.length && (i.slots = i.slots.filter(t => e.includes(t.slotID))), B.logMessage("amazonUamBids: " + JSON.stringify(i)), (null === (t = null == i ? void 0 : i.slots) || void 0 === t ? void 0 : t.length) > 0) {
      const e = $();
      e && e.fetchBids(i, function (e) {
        B.logMessage("Got all bid bidResponses for UAM: " + JSON.stringify(e)), function (e) {
          const {
            settings: t
          } = n().ad;
          e.forEach(e => {
            var i;
            const n = t.amazonBidMap[e.amznbid];
            "" != e.amzniid && n && (j[e.slotID] = j[e.slotID] || [], e.bidderCode = "amazon", e.cpm = n, e.cacheTime = Date.now(), j[e.slotID].push(e), j[e.slotID].sort(function (e, t) {
              return t.cpm - e.cpm;
            })), null === (i = j[e.slotID]) || void 0 === i || i.map((e, t) => {
              (Date.now() - e.cacheTime) / 1e3 / 60 > 9.5 && (B.logMessage("Amazon bid expired for " + e.slotID + ":" + JSON.stringify(e)), j[e.slotID].splice(t, 1));
            }), B.logMessage("Amazon bid store for " + e.slotID + " : " + JSON.stringify(j[e.slotID]));
          });
        }(e), googletag.cmd.push(function () {
          Object.keys(j).forEach(function (e) {
            const t = e,
              i = j[e][0];
            if (i) for (let e = 0; e < Object.keys(i).length; e++) {
              const n = Object.keys(i)[e];
              n.startsWith("amzn") && xt(t, n, i[n]);
            }
          });
        });
      });
    }
  }
  function U(e, t = "") {
    const i = l();
    try {
      const n = {
        slotID: t || e,
        slotName: "/" + settings.global.gamNetworkId + "/" + settings.ad.settings.divToAdUnitMap[i][e],
        sizes: [settings.ad.settings.adUnitToSizeMap[i][e].width, settings.ad.settings.adUnitToSizeMap[i][e].height],
        slotParams: {
          gpid: g(i, e) + t
        }
      };
      E[n.slotID] = n;
    } catch (e) {
      B.logMessage("Error: defineAmzBid: " + e);
    }
  }
  function $() {
    const e = document.querySelector("#amazonBidsIframe");
    return "IFRAME" == (null == e ? void 0 : e.tagName) && e.contentWindow ? e.contentWindow.apstag : void 0;
  }
  const z = `<html><head>\n                <link rel='dns-prefetch' href='https://c.amazon-adsystem.com'>\n                <link rel='preconnect' href='https://c.amazon-adsystem.com' crossorigin>\n                <script async src='https://c.amazon-adsystem.com/aax2/apstag.js'><\/script>\n                <script>\n                    const tcfapiIframeStub =${function () {
    let e,
      t = window;
    const i = {};
    for (; t;) {
      try {
        if (t.frames.__tcfapiLocator) {
          e = t;
          break;
        }
      } catch (e) {}
      if (t === window.top) break;
      t = t.parent;
    }
    window.__tcfapi = function (t, n, o, s) {
      if (e) {
        const r = Math.random() + "",
          a = {
            __tcfapiCall: {
              command: t,
              parameter: s,
              version: n,
              callId: r
            }
          };
        i[r] = o, e.postMessage(a, "*");
      } else o({
        msg: "CMP not found"
      }, !1);
    }, window.addEventListener("message", function (e) {
      let t = {};
      try {
        t = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
      } catch (e) {}
      const n = t.__tcfapiReturn;
      n && "function" == typeof i[n.callId] && (i[n.callId](n.returnValue, n.success), i[n.callId] = null);
    }, !1);
  }};\n                    tcfapiIframeStub();\n                    const loadApsTag =${function () {
    var e, t, i;
    !function (e, t, i, n, o, s, r) {
      function a(i, n) {
        t[e]._Q.push([i, n]);
      }
      t[e] || (t[e] = {
        init: function () {
          a("i", arguments);
        },
        fetchBids: function () {
          a("f", arguments);
        },
        setDisplayBids: function () {},
        targetingKeys: function () {
          return [];
        },
        dpa: function () {
          a("di", arguments);
        },
        rpa: function () {
          a("ri", arguments);
        },
        upa: function () {
          a("ui", arguments);
        },
        _Q: []
      });
    }("apstag", window), window.apstag.init({
      pubID: null === (e = parent.Insticator.amazonSettings) || void 0 === e ? void 0 : e.amazonUamId,
      adServer: "googletag",
      schain: {
        ver: "1.0",
        complete: 1,
        nodes: [{
          asi: null === (t = parent.Insticator.amazonSettings) || void 0 === t ? void 0 : t.insticatorAsi,
          sid: null === (i = parent.Insticator.amazonSettings) || void 0 === i ? void 0 : i.insticatorSid,
          hp: 1
        }]
      },
      gdpr: {
        cmpTimeout: 1e3
      }
    });
  }};\n                    loadApsTag();\n                    window.parent.postMessage({'apstagLoaded': true}, "*" )\n                <\/script>\n            </head><body></body></html>`;
  let F = "UNKNOWN",
    V = "UNKNOWN",
    L = {};
  function W() {
    return F;
  }
  function q() {
    return L;
  }
  function G(e) {
    L = e;
  }
  function H(e) {
    F = e;
  }
  function K() {
    return V;
  }
  function Z(e) {
    V = e;
  }
  const J = {
      initAdUnits: !1,
      initPrebid: !1,
      addAdUnitsForAuction: !1,
      defineGAMSlots: !1
    },
    X = e => J.initPrebid = e,
    Y = e => J.addAdUnitsForAuction = e,
    Q = e => J.defineGAMSlots = e,
    ee = () => J;
  (window.Insticator || {}).getContainerState = ee;
  const te = window.top || window,
    ie = window.location !== te.location,
    ne = function () {
      let e = ie ? document.referrer : window.location.href;
      if (e && e.match(/^https?:\/\/tpc\.googlesyndication\.com/) && (e = ""), !e && ie) try {
        let t = 0,
          i = window.parent;
        for (; !e && t < 20;) t++, e = i.document.referrer, e && e.match(/^https?:\/\/tpc\.googlesyndication\.com/) && (e = ""), i = i.parent;
      } catch (e) {}
      "" === e && (e = "https://" + settings.global.domain);
      const t = (e.match(/(?:[\w\d-_]+\.)+[\w\d-_]+(:\d+)?/) || [])[0] || "",
        i = (e.match(/^https?:/) || [])[0] || "",
        n = (e.match(/\?[^#]*/) || [])[0] || "",
        o = (e.match(/\w(\/.*\/|$)/) || [])[1] || "/";
      return {
        _host: t,
        _url: `${i}//${t}`,
        _fullUrl: e,
        _search: n,
        _path: o,
        _protocol: i,
        _isSecure: "https:" === i
      };
    }(),
    oe = function () {
      const e = {};
      return ne._search.slice(1).split(/&/).map(function (t) {
        const i = t.split(/=/);
        e[i[0]] = i[1];
      }), e;
    }(),
    se = {
      _version: window.insticatorHeaderCodeVersion,
      _fakeVersion: "7.49.0",
      _isIframe: ie,
      _library: "insticator",
      _instanceId: _(),
      _altInstanceId: _(),
      _partitionKey: `${_()}:${_()}`.substr(0, 73 - Math.round(20 * T())),
      _shardId: `shardId-00000000000${Math.floor(4 * Math.random() + 1)}`,
      _postMessageUrl: (window.location.href.match(/https?:\/\/(?:[\w\d-_]+\.)+[\w\d-_]+(:\d+)?/) || [])[0],
      _site: {
        _host: ne._host,
        _url: ne._url,
        _fullUrl: ne._fullUrl,
        _path: ne._path,
        _search: ne._search,
        _fullPath: ne._fullUrl.replace(/^https?:/, ""),
        _protocol: ne._protocol,
        _referrer: document.referrer,
        _characterSet: document.characterSet || document.charset,
        _isSecure: ne._isSecure
      },
      _navigator: {
        _vendor: navigator.vendor || "",
        _language: navigator.language || "",
        _userAgent: navigator.userAgent,
        _connectionSpeed: ["downlink", "bandwidth"].reduce((e, t) => e || (navigator.connection || navigator.mozConnection || navigator.webkitConnection || {})[t], null),
        _browser: (() => {
          const e = navigator.userAgent.toLowerCase();
          return e.indexOf("edge") > -1 ? "edge" : e.indexOf("edg") > -1 ? "chrome-edge" : e.indexOf("opr") > -1 && window.opr ? "opera" : e.indexOf("chrome") > -1 && window.chrome ? "chrome" : e.indexOf("trident") > -1 ? "ie" : e.indexOf("firefox") > -1 ? "firefox" : e.indexOf("safari") > -1 ? "safari" : "other";
        })(),
        _cookieEnabled: navigator.cookieEnabled,
        _doNotTrack: "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
      },
      _endpoints: {
        _adblock: "https://insticator.com/ads.js",
        _userObject: "",
        _userXsi: ""
      },
      _device: (ie ? window.screen.width : window.innerWidth) < 728 ? "mobile" : "desktop",
      _cookieNames: {
        _test: "ins.test",
        _userId: "ins.user.id",
        _userXsi: "ins.user.xsi",
        _userTier: "ins.user.tier",
        _userScore: "ins.user.score",
        _consent: "ins.consent",
        _adblock: "ins.adblock",
        _pageCount: "ins.page.count",
        _auctionCount: "ins.auction.count",
        _timestamp: "ins.timestamp",
        _userSum: "ins.userSum",
        _continuousZeroValueRenders: "ins.continuousZeroValueRenders",
        _continuousBelowThresholdRenders: "ins.continuousBelowThresholdRenders"
      },
      _time: {
        _month: 2592e6,
        _week: 6048e5,
        _day: 864e5,
        _hour: 36e5,
        _minute: 6e4,
        _now: 0,
        _start: Date.now()
      },
      _trueString: "true",
      _falseString: "false",
      _nullString: "null",
      _isAdblockEnabled: null,
      _sessionLength: 18e5
    },
    re = [];
  let ae = isNaN(((window.performance || {}).timing || {}).connectStart) ? Date.now() : window.performance.timing.connectStart;
  const ce = new class {
    constructor() {
      Object.defineProperty(this, "endpoint", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "payload", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "bidIdMap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "updateAndSend", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: () => {
          const e = he(Se.getBidIdMap(), this.bidIdMap);
          M(e) || (this.payload = this.getBidData(e), this.send());
        }
      }), Object.defineProperty(this, "debouncedSend", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: le(this.updateAndSend, 500)
      }), this.payload = [], this.endpoint = "", this.bidIdMap = {};
    }
    setEndpoint() {
      this.endpoint = n().ad.settings.dataEndpoint || "";
    }
    send() {
      const e = this.endpoint,
        t = n();
      if (!this.endpoint) return void B.logMessage(`No endpoint for payload: ${JSON.stringify(this.payload)}`);
      !function t(i) {
        const n = [];
        if (i.length < 32) i.length && ue(e, i);else {
          for (; n.length < 32;) n.push(i.pop());
          ue(e, n), t(i);
        }
      }(this.payload);
      const i = [],
        o = ve();
      for (; re.length;) i.push({
        id: _(),
        timestamp: ge(),
        message: re.shift().toString(),
        initTime: Ae.initTime,
        network: o || se._site._host,
        siteUUID: t.global.siteUUID,
        site: t.global.domain,
        url: se._site._fullUrl,
        hostName: se._site._host,
        version: se._version,
        testGroup: t.testGroup || "",
        device: l(),
        gdprApplies: b(F),
        auctionId: Ae.currentAuctionId,
        instanceId: se._instanceId,
        refreshCount: Ae.auctionCount - 1,
        user: L,
        page: ke.exportForLogs(),
        valueTracker: Se.exportForLogs()
      });
      i.length && function (e, t) {
        const i = new Date(ge()),
          n = `${i.getUTCFullYear()}-${(i.getUTCMonth() + 1).toString().padStart(2, "0")}-${i.getUTCDate().toString().padStart(2, "0")}`;
        de(e, t.map(e => `{"index":{"_id":"${e.id}","_index":"errors-${n}","retry_on_conflict":1}\n${JSON.stringify(e)}\n`).join(""));
      }(e, i), B.logMessage(`Payload sent to ${e}`);
    }
    getBidData(e) {
      const t = [],
        i = b(F),
        o = n(),
        s = Ne(),
        r = !1 !== (o.ad.settings.floors || {}).useDataToFloor,
        a = Se.getBidIdMap(),
        c = ve();
      for (const n in e) {
        if (!e.hasOwnProperty(n)) continue;
        const d = a[n];
        if (0 === d.cents && !d.isRendered) continue;
        d.incrementSendCount(), this.bidIdMap[d.id] = d.clone();
        const u = {
          id: d.id,
          cents: d.cents,
          cpm: d.cpm,
          timestamp: d.createdAt,
          divId: d.divId,
          bidder: d.bidderName,
          width: d.width,
          height: d.height,
          size: `${d.width}x${d.height}`,
          requestTime: d.requestTime,
          responseTime: d.responseTime,
          renderTime: d.renderTime,
          isEbda: d.isEbda,
          isWinner: d.isWinner,
          isRendered: d.isRendered,
          isViewed: d.isViewed,
          sendCount: d.sendCount,
          network: c || se._site._host,
          siteUUID: o.global.siteUUID,
          site: o.global.domain,
          hostName: se._site._host,
          browser: se._navigator._browser,
          connectionSpeed: se._navigator._connectionSpeed,
          auctionId: Ae.currentAuctionId,
          initTime: Ae.initTime,
          version: se._version,
          testGroup: o.testGroup || "",
          device: l(),
          auctionCount: Ae.auctionCount,
          auctionOpportunityCount: Ae.auctionOpportunityCount,
          totalAuctionCount: Ae.totalAuctionCount,
          refreshCount: Ae.auctionCount - 1,
          numAugmentsApplied: Te.numAugmentsApplied,
          valueTracker: Se.exportForLogs(d),
          page: ke.exportForLogs(),
          doNotTrack: se._navigator._doNotTrack,
          gdprApplies: i,
          useDataToFloor: r,
          instanceId: se._instanceId
        };
        void 0 !== d.isOnScreen && (u.page.isOnScreen = d.isOnScreen), d.lineItemId && (u.lineItemId = d.lineItemId), "country" in L && L.country && !i && !se._navigator._doNotTrack && (u.user = L, u.user.isActive = d.isUserActive, u.user.tier = s.tier), t.push(u);
      }
      return t;
    }
    sendViewabilityMetrics() {}
    establishConnection() {
      if (!this.endpoint) return;
      const e = fe();
      pe(this.endpoint, "", function (t) {
        let i = (t || {}).t || null;
        if (i) {
          const t = new Date().getFullYear();
          i = i.replace(/\s\+\d{4}$/, "").replace(`${t}:`, `${t} `);
          const n = new Date(i).getTime(),
            o = fe() - e;
          ae = n ? 1e3 * n + o : ae;
        }
      }, null, {
        _withCredentials: !0,
        _contentType: "application/json",
        _method: "OPTIONS"
      });
    }
    renew() {
      Ae.prevAuctionId in ce.bidIdMap && delete ce.bidIdMap[Ae.prevAuctionId];
    }
  }();
  function de(e, t) {
    "function" == typeof navigator.sendBeacon && navigator.sendBeacon(e, t) || pe(e, t, null, null, {
      _withCredentials: !0,
      _contentType: "application/json"
    });
  }
  function ue(e, t) {
    return de(e, JSON.stringify({
      Records: t.map(e => ({
        Data: btoa(JSON.stringify(e)),
        PartitionKey: se._partitionKey
      })),
      StreamName: "insticator-header-analytics"
    }));
  }
  function le(e, t) {
    let i;
    return function () {
      clearTimeout(i), i = setTimeout(e, t);
    };
  }
  function he(e, t) {
    const i = Array.isArray(e),
      n = i ? [] : {};
    let o;
    for (const s in e) e.hasOwnProperty(s) && "function" != typeof e[s] && ("object" == typeof t[s] && "object" == typeof e[s] ? (o = he(e[s], t[s]), M(o) || (i ? n.push(o) : n[s] = o)) : t[s] !== e[s] && (i ? n.push(e[s]) : n[s] = e[s]));
    return n;
  }
  function pe(e, t, i, n, o = {}) {
    const s = ["POST", "GET", "HEAD", "OPTIONS"].includes(o._method) ? o._method : "POST",
      r = new XMLHttpRequest();
    r.open(s, e, !0), r.withCredentials = !1 !== o._withCredentials, r.onreadystatechange = function () {
      if (r.readyState === XMLHttpRequest.DONE) if (200 === r.status) {
        let e = {},
          t = {};
        try {
          e = JSON.parse(r.responseText);
        } catch (e) {}
        try {
          t = JSON.parse('{"' + r.getAllResponseHeaders().replace(/\r*\n/g, '","').replace(/(:\s)/g, '":"').replace(/,"$/, "}"));
        } catch (e) {}
        if ("function" == typeof i) i(e, t);else if (Array.isArray(i)) {
          const n = i.shift();
          n && n.apply(n, [e, t, ...i]);
        }
      } else if ("function" == typeof n) n(r.responseText, r.status, r.statusText, r.getAllResponseHeaders()), e !== se._endpoints._adblock && r.status && 204 !== r.status && me(`Ajax error (${r.statusText}: ${r.responseText}, ${e})`);else if (Array.isArray(n)) {
        const e = n.shift();
        e && e.apply(e, [r.statusText, r.status, r.responseText, ...n]);
      }
    }, r.setRequestHeader("Content-Type", o._contentType || "text/plain");
    for (const e in o._headers) o._headers.hasOwnProperty(e) && r.setRequestHeader(e, o._headers[e]);
    r.send("POST" === s ? t : null);
  }
  const ge = function () {
    const e = parseInt(s(se._cookieNames._timestamp), 10) || 0;
    return function () {
      const t = Date.now(),
        i = (ae && Math.abs(e - ae) > se._time._minute ? ae : e) + fe();
      return t < i || t - i > 6 * se._time._minute ? i : t;
    };
  }();
  function fe() {
    return Date.now() - ae;
  }
  function me(e, t) {
    if (t || (t = new Error()), t.message = `Insticator Error: ${e} (${t.message})`, "dev" === (n().global.env || "prod")) throw t;
    return re.push(t), t;
  }
  function be(e, t) {
    if (!e || !e.getBoundingClientRect) return 0;
    const i = window[t ? "innerHeight" : "innerWidth"],
      n = e.getBoundingClientRect()[t ? "top" : "left"],
      o = e.getBoundingClientRect()[t ? "bottom" : "right"],
      s = o - n;
    return n > i || o <= 0 ? 0 : n >= 0 && o <= i ? 1 : n < 0 && o > i ? i / s : n < 0 && o <= i ? o / s : n >= 0 && o > i ? (i - n) / s : 0;
  }
  const we = new class {
    constructor() {
      Object.defineProperty(this, "callbackArray", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "update", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e => {
          this.callbackArray.pop(), this.callbackArray.push(e);
        }
      }), Object.defineProperty(this, "updateMultiple", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e => {
          this.callbackArray.unshift(e);
        }
      }), Object.defineProperty(this, "execute", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (...e) => {
          try {
            this.callbackArray[0](...e);
          } catch (e) {
            me("CallbackManger.execute error", e);
          }
        }
      }), Object.defineProperty(this, "executeMultiple", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: (...e) => {
          let t = this.callbackArray.length;
          for (; t--;) {
            const i = this.callbackArray[t];
            try {
              i(this.callbackArray, t, ...e);
            } catch (e) {
              me("CallbackManager.executeMultiple error", e);
            }
          }
        }
      }), this.callbackArray = [() => {}];
    }
  }();
  function ve() {
    const e = n(),
      t = Object.keys(e.ad.settings.ronNetworkId)[0];
    return t && e.ad.settings.ronNetworkId[t].isOn ? t : "";
  }
  const ye = "beforeInitPlaceholder";
  class Ie {
    constructor() {
      Object.defineProperty(this, "currentAuctionId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "prevAuctionId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionCount", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "totalAuctionCount", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionOpportunityCount", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "initTime", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionIds", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isAuctionBeforeInitSet", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isPositionDone", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isPositionRendered", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "bids", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionBeforeInitFunctions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionInitFunctions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionEndFunctions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionRenderedFunctions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.currentAuctionId = "", this.prevAuctionId = "", this.auctionCount = 0, this.totalAuctionCount = +s(se._cookieNames._auctionCount) || 0, this.auctionOpportunityCount = 0, this.initTime = 0, this.auctionIds = [], this.isAuctionBeforeInitSet = {}, this.auctionBeforeInitFunctions = [], this.auctionInitFunctions = [], this.auctionEndFunctions = [], this.auctionRenderedFunctions = [], this.isPositionDone = {}, this.isPositionRendered = {}, this.bids = {};
    }
    setDivIds(e, t) {
      for (const i of t) this.isPositionDone[e][i] = !1, this.isPositionRendered[e][i] = !1;
    }
    isRefresh() {
      return this.auctionCount > 1;
    }
    onAuctionBeforeInit(e) {
      this.auctionBeforeInitFunctions.push(e);
    }
    onAuctionInit(e) {
      this.auctionInitFunctions.push(e);
    }
    onAuctionEnd(e) {
      this.auctionEndFunctions.push(e);
    }
    onAuctionRendered(e) {
      this.auctionRenderedFunctions.push(e);
    }
    resetAuctionBeforeInit() {
      this.isAuctionBeforeInitSet[ye] = !1;
    }
    auctionBeforeInit() {
      if (!this.isAuctionBeforeInitSet[ye]) {
        this.isAuctionBeforeInitSet[ye] = !0, this.auctionOpportunityCount++;
        for (const e of this.auctionBeforeInitFunctions) e();
      }
    }
    auctionInit(e) {
      if (e && this.currentAuctionId !== e) {
        this.isAuctionBeforeInitSet[e] = this.isAuctionBeforeInitSet[ye], delete this.isAuctionBeforeInitSet[ye], this.initTime = fe(), this.auctionCount++, this.totalAuctionCount++, this.prevAuctionId = this.currentAuctionId, this.currentAuctionId = e, this.isPositionDone[e] = {}, this.isPositionRendered[e] = {}, this.auctionIds.push(e);
        for (const t of this.auctionInitFunctions) t(e, this.auctionCount);
      }
    }
    endAuctionForPosition(e, t) {
      if (e && e in this.isPositionDone && !this.isPositionDone[e][t]) {
        this.isPositionDone[e][t] = !0;
        for (const t in this.isPositionDone[e]) if (!this.isPositionDone[e][t]) return;
        this.auctionEnd();
      }
    }
    auctionRenderedForPosition(e, t) {
      if (e && e in this.isPositionRendered && !this.isPositionRendered[e][t]) {
        this.isPositionRendered[e][t] = !0;
        const i = Se.getWinningBid(e, t);
        i && i.markRendered();
        for (const t in this.isPositionRendered[e]) if (!this.isPositionRendered[e][t]) return;
        this.auctionRendered(e);
      }
    }
    save() {
      o(se._cookieNames._auctionCount, `${this.totalAuctionCount}`);
    }
    clearOldData() {
      if (!(this.auctionIds.length < 10)) for (let e = 0; e < 10; e++) {
        const e = this.auctionIds.shift();
        e && (delete this.isAuctionBeforeInitSet[e], delete this.isPositionDone[e], delete this.isPositionRendered[e]);
      }
    }
    auctionEnd() {
      for (const e of this.auctionEndFunctions) e(this.currentAuctionId, this.auctionCount);
    }
    auctionRendered(e) {
      for (const t of this.auctionRenderedFunctions) t(e, this.auctionCount);
    }
    reset() {
      const e = new Ie();
      for (const t in e) this[t] = e[t];
    }
  }
  const Ae = new Ie();
  class Oe {
    constructor() {
      Object.defineProperty(this, "winningBid", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "bidIdMap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "bidders", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "cpm", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "cpmSum", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "cpmMax", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "cpmAverage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "rpa", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "impressionTier", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "userSum", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "rpaSum", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "rpaMax", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "rpaAverage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "currentAuctionValue", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "currentAuctionId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "prevAuctionId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionIds", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "continuousZeroValueAuctions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "continuousBelowThresholdAuctions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isCountLocked", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.winningBid = {}, this.bidIdMap = {}, this.bidders = {}, this.cpm = {}, this.cpmSum = {}, this.cpmMax = {}, this.cpmAverage = {}, this.impressionTier = {}, this.userSum = +s(se._cookieNames._userSum) || 0, this.rpa = {}, this.rpaSum = 0, this.rpaMax = 0, this.rpaAverage = 0, this.currentAuctionValue = 0, this.currentAuctionId = "", this.prevAuctionId = "", this.auctionIds = [], this.continuousZeroValueAuctions = +s(se._cookieNames._continuousZeroValueRenders) || 0, this.continuousBelowThresholdAuctions = +s(se._cookieNames._continuousBelowThresholdRenders) || 0, this.isCountLocked = !1;
    }
    setAuctionId(e) {
      this.currentAuctionId !== e && (this.prevAuctionId = this.currentAuctionId, this.currentAuctionId = e, this.auctionIds.push(e)), e in this.rpa || (this.rpa[e] = 0), e in this.cpm || (this.cpm[e] = {}), e in this.winningBid || (this.winningBid[e] = {}), e in this.bidIdMap || (this.bidIdMap[e] = {}), ye in this.impressionTier ? (this.impressionTier[e] = this.impressionTier[ye], delete this.impressionTier[ye]) : e in this.impressionTier || (this.impressionTier[e] = 0);
    }
    setDivIds(e, t) {
      for (const i of t) this.cpm[e][i] = 0, this.cpmSum[i] = this.cpmSum[i] || 0, this.cpmAverage[i] = this.cpmAverage[i] || 0, this.cpmMax[i] = this.cpmMax[i] || 0;
    }
    setImpressionTier(e) {
      const t = n().ad.settings.valueTracker || {},
        i = e || ye,
        o = {
          MOBILE: [{
            isOnScreen: !1
          }, {
            isOnScreen: !0
          }, {
            country: ["US", "CA", "GB"],
            isOnScreen: !0
          }, {
            browser: ["chrome", "safari", "other"],
            country: ["US", "CA", "GB"],
            isOnScreen: !0
          }, {
            isUserActive: !0,
            browser: ["chrome", "safari", "other"],
            country: ["US", "CA", "GB"],
            isOnScreen: !0
          }, {
            ">cpmAverage": .1,
            isUserActive: !0,
            browser: ["chrome", "safari", "other"],
            country: ["US", "CA", "GB"],
            isOnScreen: !0
          }, {
            belowThresholdCount: 0,
            ">cpmAverage": .5,
            browser: ["chrome", "safari", "other"],
            isUserActive: !0,
            country: ["US", "CA", "GB"],
            isOnScreen: !0
          }],
          DESKTOP: [{
            isOnScreen: !1,
            "<cpmAverage": .03
          }, {
            isOnScreen: !1,
            ">cpmAverage": .03
          }, {
            isOnScreen: !1,
            ">cpmAverage": 1
          }, {
            isOnScreen: !0
          }, {
            country: ["US", "CA", "GB"],
            isOnScreen: !0,
            ">cpmAverage": .03
          }, {
            ">connectionSpeed": 8,
            country: ["US", "CA", "GB"],
            isOnScreen: !0,
            ">cpmAverage": .03
          }, {
            isUserActive: !0,
            belowThresholdCount: 0,
            "!browser": ["firefox", "other", "safari"],
            ">connectionSpeed": 8,
            country: ["US", "CA", "GB"],
            isOnScreen: !0,
            ">cpmAverage": .5
          }]
        },
        s = "MOBILE" === l() ? "MOBILE" : "DESKTOP",
        r = ((s in (t.impressionTiers || {}) ? t.impressionTiers : o) || {})[s] || o[s];
      this.impressionTier[i] = 0;
      for (const e in r) Te.matchesTargeting(r[+e]) && (this.impressionTier[i] = +e);
    }
    getImpressionTier(e = this.currentAuctionId) {
      return e in this.impressionTier && this.impressionTier[e] || 0;
    }
    getRpaAverage() {
      return this.rpaAverage;
    }
    getCpmAverage(e) {
      if (e) return this.cpmAverage[e] || 0;
      const t = Object.keys(this.cpmAverage);
      return t.reduce((e, t) => e + this.cpmAverage[t], 0) / t.length || 0;
    }
    getCpmMax(e) {
      return e ? this.cpmMax[e] || 0 : Object.keys(this.cpmMax).reduce((e, t) => e > this.cpmMax[t] ? e : this.cpmMax[t], 0);
    }
    getPageValueSoFar() {
      return this.rpaSum;
    }
    getCurrentAuctionValue() {
      return this.rpa[this.currentAuctionId] || 0;
    }
    getPrevAuctionValue() {
      return this.rpa[this.prevAuctionId] || 0;
    }
    getBidIdMap(e = this.currentAuctionId) {
      return this.bidIdMap[e];
    }
    getWinningBid(e, t) {
      return (this.winningBid[e] || {})[t] || new Be("none", e, t, 0, [0, 0]);
    }
    addWinningBid(e, t, i) {
      if (!e) return void B.logMessage(`No auctionId (${e}) for ${t}, ${i.bidderName}`);
      e in this.cpm || (this.cpm[e] = {}, this.winningBid[e] = {});
      const n = this.winningBid[e][t];
      this.winningBid[e][t] = n && n.cpm > i.cpm ? n : i;
      const o = +this.cpm[e][t] || 0;
      this.cpm[e][t] = o < i.cpm ? +i.cpm : o;
    }
    addBidToIdMap(e) {
      const t = this.currentAuctionId;
      t in this.bidIdMap || (this.bidIdMap[t] = {}), this.bidIdMap[t][e.id] = e;
    }
    addBidder(e, t) {
      e in this.bidders || (this.bidders[e] = {}), t in this.bidders[e] || (this.bidders[e][t] = {
        requestCount: 0,
        continuousZeroCount: 0,
        continuousBelowThresholdCount: 0,
        cpmSum: 0,
        cpmMax: 0,
        cpmAverage: 0,
        zeroStreak: 0,
        thresholdStreak: 0
      });
    }
    updateRequestCounts(e, t) {
      t in this.bidders[e] && this.bidders[e][t].requestCount++;
    }
    shouldThrottleBidder(e, t) {
      const i = n().ad.settings.valueTracker || {},
        o = (i.removeBidders || []).includes(e);
      if (je && !isNaN(je.tier) && je.tier >= 4 && !o) return B.logMessage(`user.tier is ${je.tier} so not throttling k?`), !1;
      if (this.bidders[e] && this.bidders[e][t]) {
        const n = i.throttleBiddersAfter || 0,
          s = this.bidders[e][t],
          r = i.bidderCpmThreshold > 0 ? "continuousBelowThresholdCount" : "continuousZeroCount";
        return s && !M(s) && n > 0 && s[r] > n || o;
      }
      return !1;
    }
    filterTagsByTier(e) {
      const t = this.currentAuctionId;
      return !isNaN(e) && e >= 0 && t in this.impressionTier && !isNaN(this.impressionTier[t]) && e !== this.impressionTier[t];
    }
    updateResponseCounts(e, t) {
      t.bidderName && !(t.bidderName in this.bidders) && (this.bidders[t.bidderName] = {}, e in this.bidders[t.bidderName] || (this.bidders[t.bidderName] = {
        requestCount: 1,
        continuousZeroCount: 0,
        continuousBelowThresholdCount: 0,
        cpmSum: 0,
        cpmMax: 0,
        cpmAverage: 0,
        zeroStreak: 0,
        thresholdStreak: 0
      }));
      const i = this.bidders[t.bidderName][e];
      i.cpmSum += t.cpm, i.cpmAverage = i.cpmSum / i.requestCount, t.cpm > i.cpmMax && (i.cpmMax = t.cpm);
    }
    updateBidderActivity() {
      var e;
      const t = (null === (e = n().ad.settings) || void 0 === e ? void 0 : e.valueTracker) || {},
        i = void 0 !== t.bidderCpmThreshold ? t.bidderCpmThreshold : .03;
      for (const e in this.bidders) for (const t in this.bidders[e]) {
        const n = this.bidders[e][t];
        n.cpmMax < i ? n.continuousBelowThresholdCount++ : (n.thresholdStreak = n.continuousBelowThresholdCount, n.continuousBelowThresholdCount = 0), 0 === n.cpmMax ? n.continuousZeroCount++ : (n.zeroStreak = n.continuousZeroCount, n.continuousZeroCount = 0), n.cpmMax = 0;
      }
    }
    getBidderStats(e) {
      if (e && e.bidderName in this.bidders && e.divId in this.bidders[e.bidderName]) return this.bidders[e.bidderName][e.divId];
    }
    calculate(e) {
      var t;
      const i = (null === (t = n().ad.settings) || void 0 === t ? void 0 : t.valueTracker) || {},
        o = Ae.auctionCount || 1,
        s = i.rpaThreshold || .03;
      let r = 0;
      for (const t in this.cpm[e]) {
        const i = +this.cpm[e][t];
        r += i, this.cpmSum[t] += i, this.cpmAverage[t] = this.cpmSum[t] / o, i > this.cpmMax[t] && (this.cpmMax[t] = i);
      }
      this.currentAuctionValue = r, this.rpa[e] = r, this.rpaSum += r, this.rpaAverage = this.rpaSum / o, this.userSum += r, r > this.rpaMax && (this.rpaMax = r), 0 === r ? this.continuousZeroValueAuctions++ : this.continuousZeroValueAuctions = 0, r < s ? this.continuousBelowThresholdAuctions++ : this.continuousBelowThresholdAuctions = 0;
    }
    exportForLogs(e) {
      return {
        cpmAverage: this.getCpmAverage(e && e.divId),
        cpmMax: this.getCpmMax(e && e.divId),
        rpaAverage: this.rpaAverage,
        rpaSum: this.rpaSum,
        rpaMax: this.rpaMax,
        userSum: this.userSum,
        currentAuctionValue: this.currentAuctionValue,
        continuousZeroValueAuctions: this.continuousZeroValueAuctions,
        continuousBelowThresholdAuctions: this.continuousBelowThresholdAuctions,
        bidder: this.getBidderStats(e),
        impressionTier: this.impressionTier[e ? e.auctionId : this.currentAuctionId]
      };
    }
    save() {
      o(se._cookieNames._userSum, `${this.userSum}`), o(se._cookieNames._continuousZeroValueRenders, `${this.continuousZeroValueAuctions}`), o(se._cookieNames._continuousBelowThresholdRenders, `${this.continuousBelowThresholdAuctions}`);
    }
    clearOldData() {
      if (!(this.auctionIds.length < 10)) for (let e = 0; e < 10; e++) {
        const e = this.auctionIds.shift();
        e && (delete this.winningBid[e], delete this.bidIdMap[e], delete this.cpm[e], delete this.rpa[e], delete this.impressionTier[e]);
      }
    }
    reset() {
      const e = new Oe();
      for (const t in e) this[t] = e[t];
    }
  }
  const Se = new Oe();
  window.Insticator && (window.Insticator.valueTracker = Se);
  const Te = new class {
    constructor(e, t) {
      Object.defineProperty(this, "pageName", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "layoutName", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "numAugmentsApplied", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.pageName = e || "default", this.layoutName = t || "default", this.numAugmentsApplied = 0;
    }
    matchesTargeting(e, t) {
      const i = q() || {},
        n = this.pageName,
        o = this.layoutName,
        r = e.operator || "&&",
        a = "||" !== r,
        c = Object.keys(e),
        d = Date.now(),
        u = new Date(new Date(d).toLocaleString("en-US", {
          timeZone: "America/New_York"
        }));
      return 0 === c.length || c.reduce(function (a, c) {
        if ("operator" === c) return a;
        let h = "===",
          p = "||",
          g = !1;
        const f = Array.isArray(e[c]) ? e[c] : [e[c]];
        return ["!", ">", "<"].includes(c[0]) && (h = "!" === c[0] ? "!==" : c[0], c = c.slice(1), p = "&&", g = !0), _e(r, a, f.reduce(function (e, r) {
          const a = i || {},
            f = je || {};
          switch (c) {
            case "country":
              return _e(p, e, _e(h, a && a.country, r));
            case "region":
              return _e(p, e, _e(h, a && a.region, r));
            case "city":
              return _e(p, e, _e(h, a.city, r));
            case "zip":
              return _e(p, e, _e(h, a.zip, r));
            case "connectionSpeed":
              return _e(p, e, _e(h, se._navigator._connectionSpeed, r));
            case "isUserActive":
              return _e(p, e, _e(h, I(), r));
            case "browser":
              return _e(p, e, _e(h, se._navigator._browser, r));
            case "rpaAverage":
              return _e(p, e, _e(h, Se.getRpaAverage(), +r));
            case "rpaMax":
              return _e(p, e, _e(h, Se.rpaMax, +r));
            case "pageValue":
              return _e(p, e, _e(h, Se.getPageValueSoFar(), +r));
            case "cpmAverage":
              return _e(p, e, _e(h, Se.getCpmAverage(), +r));
            case "cpmMax":
              return _e(p, e, _e(h, Se.getCpmMax(), +r));
            case "userTier":
              return _e(p, e, _e(h, f.tier, +r));
            case "impressionTier":
              return _e(p, e, _e(h, Se.getImpressionTier(), +r));
            case "zeroCount":
              return _e(p, e, _e(h, Se.continuousZeroValueAuctions, +r));
            case "belowThresholdCount":
              return _e(p, e, _e(h, Se.continuousBelowThresholdAuctions, +r));
            case "device":
              return _e(p, e, _e(h, l(), r));
            case "isOnScreen":
              return _e(p, e, _e(h, ke.isOnScreen, r));
            case "adblock":
              return _e(p, e, _e(h, se._isAdblockEnabled, r));
            case "uniqueClick":
              const i = +s(`ins.${t}.clicked`) || 0,
                c = {
                  month: se._time._month,
                  week: se._time._week,
                  day: se._time._day,
                  hour: se._time._hour,
                  minute: se._time._minute
                };
              return _e(p, e, d - i >= (c[r || ""] || se._time._day));
            case "mode":
              return _e(p, e, _e(h, Ae.auctionCount > 1, "refresh" === r));
            case "page":
              return _e(p, e, _e(h, n, r));
            case "layout":
              return _e(p, e, _e(h, o, r));
            case "pageCount":
              return _e(p, e, _e(h, ke.count, r));
            case "refreshCount":
              return _e(p, e, _e(h, Ae.auctionCount - 1, r));
            case "auctionCountMultiple":
              return _e(p, e, Ae.auctionOpportunityCount % r == 0);
            case "auctionCount":
              return _e(p, e, _e(h, Ae.auctionCount, r));
            case "totalAuctionCount":
              return _e(p, e, _e(h, Ae.totalAuctionCount, r));
            case "afterZero":
              return _e(p, e, Se.continuousZeroValueAuctions > r);
            case "quarter":
              return _e(p, e, Math.ceil((u.getMonth() + 1) / 3) === r);
            case "monthOfQuarter":
              return _e(p, e, ((u.getMonth() + 1) % 3 || 3) === r);
            case "hourOfDay":
              return _e(p, e, u.getHours() === r);
            case "rand":
              return _e(p, e, T() < r);
          }
          return g;
        }, g));
      }, a);
    }
    runIfMatches(e, t, i) {
      return this.matchesTargeting(t, i) && e();
    }
    augmentConfig(e, t) {
      let i = (t = t.reverse()).length;
      for (; i--;) {
        const n = t[i],
          o = n.revertWhen,
          s = n.revertOnce;
        if (Array.isArray(n.targeting) && n.targeting.reduce((e, t) => e || this.matchesTargeting(t || {}), !1)) {
          const r = Me(e, n.modify || {});
          s ? t.push({
            modify: r,
            targeting: s,
            isRevert: !0
          }) : o && t.push({
            modify: r,
            targeting: o,
            revertWhen: n.targeting,
            isRevert: !0
          }), t.splice(i, 1), this.numAugmentsApplied++;
        }
      }
    }
  }();
  function _e(e, t, i) {
    return void 0 !== t && void 0 !== i && new Function("l", "r", `return l ${e} r`)(t, i);
  }
  function xe(e, t, i) {
    for (const n in e) if (e.hasOwnProperty(n) && e[+n][t] === i) return n;
    return null;
  }
  function Pe(e, t, i) {
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (o[t] === i) return o;
    }
    return null;
  }
  function Me(e, t) {
    const i = {};
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const o = n.split(/[.[]/),
        s = t[n];
      let r = C(e),
        a = "c";
      for (let t = 0; t < o.length; t++) {
        const i = o[t].replace(/]/, ""),
          n = i.split(/=/);
        let s;
        if (i === n[0]) {
          if (s = i, void 0 === r[s] && t < o.length - 1) {
            r = {};
            try {
              new Function("c", `${a}["${s}"] = {}`)(e);
            } catch (e) {}
          } else r = r[s];
        } else s = xe(r, n[0], n[1]), r = Pe(r, n[0], n[1]);
        a += `["${s}"]`;
      }
      if ("string" == typeof s) try {
        new Function("c", "o", `eval('o["${n}"] = ${a};')`)(e, i), new Function("c", "v", `eval('${a} = ${s};')`)(e, s);
      } catch (t) {
        new Function("c", "o", `eval('o["${n}"] = ${a};')`)(e, i), new Function("c", "v", `eval('${a} = v;')`)(e, s);
      } else try {
        new Function("c", "o", `eval('o["${n}"] = ${a};')`)(e, i), new Function("c", "v", `eval('${a} = v;')`)(e, s);
      } catch (e) {}
      B.logMessage(`Updated ${a} to ${s}`);
    }
    return i;
  }
  class Ce {
    constructor(e, t) {
      Object.defineProperty(this, "divId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "$div", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "$ad", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "useDemandFrom", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sizes", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "shouldSkipRefresh", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isViewed", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.divId = e, this.$div = document.getElementById(e), this.$ad = null, this.sizes = t || [], this.shouldSkipRefresh = !1, this.isViewed = !1, this.useDemandFrom = "";
    }
    disableRefresh() {
      this.shouldSkipRefresh = !0;
    }
    enableRefresh() {
      this.shouldSkipRefresh = !1;
    }
    markViewed() {
      this.isViewed = !0;
    }
    addDiv() {
      this.$div || (this.$div = document.getElementById(this.divId));
    }
    setDemand(e) {
      this.useDemandFrom = e;
    }
    isVisible() {
      return !(!this.$div || !(this.$div.offsetWidth || this.$div.offsetHeight || this.$div.getClientRects().length));
    }
  }
  const ke = new class {
    constructor() {
      Object.defineProperty(this, "id", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "positions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "count", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "width", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "height", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "screenWidth", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "screenHeight", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isOnScreen", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "numVisiblePositions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.id = _(), this.width = window.innerWidth, this.height = window.innerHeight, this.screenWidth = window.screen.width, this.screenHeight = window.screen.height, this.isOnScreen = k(), this.positions = {};
      const e = +s(se._cookieNames._pageCount) || 0;
      this.count = e + 1, o(se._cookieNames._pageCount, `${this.count}`), this.numVisiblePositions = 0;
    }
    resetPositions(e) {
      const t = this.positions;
      this.positions = {};
      for (const i of e) {
        const e = t[i];
        this.positions[i] = new Ce(i), e && (this.positions[i].shouldSkipRefresh = e.shouldSkipRefresh, this.positions[i].useDemandFrom = e.useDemandFrom, this.positions[i].sizes = e.sizes);
      }
    }
    addNewPosition(e, t, i) {
      const n = new Ce(t, i);
      n.setDemand(e), this.positions[t] = n;
    }
    setIsOnScreen(e) {
      this.isOnScreen = void 0 === e ? k() : e;
    }
    setNumVisiblePositions() {
      this.numVisiblePositions = 0;
      for (const e in this.positions) this.numVisiblePositions += +this.positions[e].isVisible();
    }
    getPosition(e, t = Object.keys(this.positions)) {
      return e in this.positions || (e = t.reduce((e, t) => {
        const i = ke.positions[t];
        return i && i.useDemandFrom === e ? t : e;
      }, e)), this.positions[e];
    }
    exportForLogs() {
      return {
        id: this.id,
        count: this.count,
        width: this.width,
        height: this.height,
        screenWidth: this.screenWidth,
        screenHeight: this.screenHeight,
        isOnScreen: this.isOnScreen,
        numVisiblePositions: this.numVisiblePositions
      };
    }
  }();
  class Be {
    constructor(e, t, i, n, o) {
      Object.defineProperty(this, "id", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "bidderName", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "auctionId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "cpm", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "cents", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "width", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "height", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "createdAt", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sendCount", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isRendered", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isWinner", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isViewed", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isUserActive", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isOnScreen", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "renderTime", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "responseTime", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "requestTime", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "divId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "lineItemId", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "isEbda", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.id = _(), this.bidderName = e, this.auctionId = t, this.divId = i, this.cpm = n, this.cents = Math.floor(100 * n), this.createdAt = ge(), this.sendCount = 0, this.isRendered = !1, this.isWinner = !1, this.isViewed = !1, this.isUserActive = I(), this.isOnScreen = k(), this.renderTime = 0, this.responseTime = 0, this.requestTime = Ae.initTime, this.lineItemId = 0, this.isEbda = !1, Array.isArray(o) && 2 == o.length ? (this.width = o[0], this.height = o[1]) : (this.width = 0, this.height = 0);
    }
    update(e, t) {
      this.bidderName = e, this.cpm = t / 100, this.cents = t;
    }
    setLineItemId(e) {
      this.lineItemId = e;
    }
    markEbda(e) {
      this.bidderName = e, this.isEbda = !0;
    }
    markRendered() {
      this.isRendered = !0, this.renderTime = fe() - (Ae.initTime + this.requestTime);
    }
    markWinner() {
      this.isWinner = !0, this.responseTime = fe() - (Ae.initTime + this.requestTime);
    }
    markViewed() {
      this.isViewed = !0;
    }
    incrementSendCount() {
      this.sendCount++;
    }
    clone() {
      const e = new Be(this.bidderName, this.auctionId, this.divId, this.cpm, [this.width, this.height]);
      for (const t in this) "function" != typeof this[t] && (e[t] = this[t]);
      return e;
    }
  }
  class Ee {
    constructor() {
      Object.defineProperty(this, "defaultTiers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "tier", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      });
      const e = "MOBILE" === l() ? "MOBILE" : "DESKTOP",
        t = +s(se._cookieNames._userTier);
      this.defaultTiers = {
        DESKTOP: {
          div: [3, 10, 70, 110, 170, 250],
          anchor: [15, 50, 100, 180, 220, 300]
        },
        MOBILE: {
          div: [3, 10, 50, 80, 110, 200],
          anchor: [10, 32, 85, 100, 170, 250]
        }
      }[e], this.tier = !isNaN(t) && t > 0 ? t : 0;
    }
    getValidTier(e = this.defaultTiers.div.length) {
      let t = this.tier < 0 ? 0 : this.tier;
      return t >= e && (t = e - 1), Math.floor(t);
    }
    storeUserTier(e) {
      e < this.tier && e < 1 && (e = this.tier), o(se._cookieNames._userTier, `${e}`), this.tier = e;
    }
    exportForLogs() {
      const e = q();
      return e.location && e.location.length ? {
        tier: this.tier,
        location: e.location,
        ip: e.ip,
        country: e.country,
        region: e.region,
        city: e.city,
        zip: e.zip
      } : {
        tier: this.tier
      };
    }
  }
  let je;
  function Re() {
    je || (je = new Ee());
  }
  function Ne() {
    return je || Re(), je;
  }
  window.instBid = window.instBid || {
    que: []
  };
  const De = "https://cdn.insticator.com/files/instibid/fallback/InstBid.js";
  function Ue() {
    const {
        enableCustomPrebid: e
      } = n().ad.settings,
      {
        siteUUID: t,
        acgId: i,
        prebidCdn: o
      } = n().global;
    if (!window.instBid.libLoaded && !function () {
      try {
        let e = [],
          t = document.head.childNodes || [];
        for (let i = 0; i < t.length; i++) t[i].src && e.push(t[i].src);
        return e.filter(e => (e || "").includes("files/instibid")).length > 0;
      } catch (e) {
        return !1;
      }
    }()) {
      const n = document.createElement("script");
      n.type = "text/javascript", n.async = !0, e.on ? n.src = e.customScript : n.src = o + t + "/" + i + ".js";
      const s = document.getElementsByTagName("head")[0];
      s.insertBefore(n, s.firstChild), n.onerror = () => {
        B.logMessage("The script didn't load correctly. Loading fallback InstBid"), n.src = De, s.insertBefore(n, s.firstChild);
      };
    }
    Ae.auctionBeforeInit(), $e(), X(!0);
  }
  function $e() {
    const e = n(),
      {
        insticatorAsi: t,
        insticatorSid: i
      } = n().global;
    window.instBid.que.push(function () {
      const o = K();
      function s() {
        return Array.isArray(e.visitor.visitorHashedEmails) && e.visitor.visitorHashedEmails.length ? e.visitor.visitorHashedEmails[0] : "";
      }
      const r = {
          id5Id: {
            pd: function () {
              let e = "",
                t = s(),
                i = !1;
              return t && (e = "1=" + t, i = !0), "UNKNOWN" !== o && (i && (e += "&"), e += "10=" + o), btoa(e);
            }()
          },
          fabrickId: {
            e: s(),
            i4: "UNKNOWN" !== o ? o : ""
          },
          connectId: {
            he: s()
          },
          admixerId: {
            e: s()
          },
          publinkId: {
            e: s()
          },
          pubProvidedId: {
            eids: [{
              source: e.global.domain,
              uids: [{
                id: function () {
                  const {
                    getCookie: e,
                    setCookie: t
                  } = window.Insticator.cookieUtils;
                  let i = e && e("instiPubProvided");
                  return i || (i = _(), t && t("instiPubProvided", i, 120)), i;
                }(),
                atype: 1,
                ext: {
                  stype: "ppuid"
                }
              }]
            }]
          }
        },
        a = {
          maxRequestsPerOrigin: 6,
          useBidCache: !0,
          disableAjaxTimeout: !0,
          userSync: {
            filterSettings: {
              all: {
                bidders: "*",
                filter: "include"
              }
            },
            syncsPerBidder: 50,
            syncDelay: 3e3,
            userIds: function (e, t) {
              const i = [];
              for (const n in e) {
                const o = n,
                  {
                    storage: s
                  } = e[n],
                  {
                    params: r
                  } = e[n],
                  a = {
                    name: o
                  };
                s && (a.storage = s), r && (a.params = r), Object.keys(t).includes(o) && (a.params = Object.assign(Object.assign({}, a.params), t[o])), i.push(a);
              }
              return i;
            }(e.id, r)
          },
          improvedigital: {
            singleRequest: !0,
            usePrebidSizes: !0
          },
          pubcid: {
            expInterval: 43800
          },
          rubicon: {
            singleRequest: !0
          },
          schain: {
            validation: "strict",
            config: {
              ver: "1.0",
              complete: 1,
              nodes: [{
                asi: t,
                sid: i,
                hp: 1
              }]
            }
          }
        };
      b(W()) && a && window.__tcfapi && (a.consentManagement = {
        gdpr: {
          cmpApi: "iab",
          timeout: 3e3,
          defaultGdprScope: !0
        }
      }), window.instBid.bidderSettings = function () {
        const e = n();
        const t = {
            standard: {
              adserverTargeting: [{
                key: "ib",
                val: function (e) {
                  switch (e.bidderCode) {
                    case "ix":
                      return "indexExchange";
                    case "emx_digital":
                      return "brealtime";
                    case "districtm":
                      return "districtmDMX";
                    default:
                      return e.bidderCode;
                  }
                }
              }, {
                key: "iaid",
                val: function (e) {
                  return e.adId;
                }
              }, {
                key: "iba",
                val: function (t) {
                  B.logMessage("New bid for: " + t.adUnitCode + " from: " + t.bidderCode + " at cpm: " + t.cpm + " with size: " + t.size);
                  const i = (n = t.cpm) <= 100 ? Math.floor(100 * n) : n < 450 ? (100 * Math.floor(n)).toFixed() : 44900;
                  var n;
                  return t.adUnitCode in e.ad.variables.hbFills ? t.cpm > e.ad.variables.hbFills[t.adUnitCode].cpm && (B.logMessage("New higher bid for: " + t.adUnitCode + " with adId: " + t.adId + " at cpm: " + t.cpm + " with size: " + t.size), e.ad.variables.hbFills[t.adUnitCode] = {
                    cpm: t.cpm,
                    adId: t.adId,
                    bidderCode: t.bidderCode,
                    size: t.size
                  }) : e.ad.variables.hbFills[t.adUnitCode] = {
                    cpm: t.cpm,
                    adId: t.adId,
                    bidderCode: t.bidderCode,
                    size: t.size
                  }, function (e) {
                    return ("00000" + e).slice(-5);
                  }(i);
                }
              }, {
                key: "ics",
                val: function (e) {
                  return e.size;
                }
              }],
              storageAllowed: !0
            }
          },
          i = e.sspDiscrepancyMap;
        return Object.keys(i).forEach(e => {
          t[e] = {
            bidCpmAdjustment: function (t) {
              return t * (1 - (i[e] || 0) / 100);
            }
          };
        }), t;
      }(), window.instBid.setConfig(a);
    });
  }
  function ze() {
    const e = W(),
      {
        euContries: t = []
      } = n();
    return t.includes(e) ? "adx.adform.net" : "US" === e || "UNKNOWN" === e ? "adx2.adform.net" : "adx3.adform.net";
  }
  function Fe(e, t) {
    let i;
    try {
      i = function (e, t) {
        const {
            bidderJson: i,
            ad: o
          } = n(),
          {
            divToAdUnitMap: s
          } = o.settings,
          r = i[e],
          a = l().toLowerCase(),
          c = {
            code: t || e,
            mediaTypes: {
              banner: {
                sizes: []
              }
            },
            ortb2Imp: {},
            bids: []
          };
        return r && r.forEach(t => {
          const {
              name: i
            } = t,
            o = t[a] || {},
            {
              params: r = {},
              sizeArray: d = []
            } = C(o);
          if (!o || !d.length) return void B.logMessage(`ERROR: No bidder ${i} size for div: ${e}`);
          if (function (e) {
            const t = W(),
              {
                geoSSPWhitelistingMap: i
              } = n().ad.settings,
              o = i[t];
            return !("UNKNOWN" === t || !o || o.includes(e) || "ix" === e && o.includes("index"));
          }(i)) return void B.logMessage(`Bidder ${i} is geo blocked`);
          if (Se.addBidder(i, e), Se.shouldThrottleBidder(i, e)) return void B.logMessage(`Bidder ${i} is throttled for ${e}`);
          if (Se.filterTagsByTier(r.tagTier)) return void B.logMessage(`Bidder ${i} excluding tier ${r.tagTier} for ${e}`);
          Se.updateRequestCounts(i, e), delete r.tagTier, c.mediaTypes.banner.sizes = d;
          const u = g(l(), e);
          if (c.ortb2Imp = {
            ext: {
              gpid: u,
              data: {
                pbadslot: u
              }
            }
          }, "ix" === i) d.forEach(e => {
            const t = Object.assign({}, r);
            t.size = e, c.bids.push({
              bidder: i,
              params: t
            });
          });else if ("insticator" === i) {
            const t = s[a.toUpperCase()][e];
            t && (r.adUnitName = t), c.bids.push({
              bidder: i,
              params: r
            });
          } else "adf" === i ? c.bids.push({
            bidder: i,
            params: Object.assign(Object.assign({}, r), {
              adxDomain: ze()
            })
          }) : c.bids.push({
            bidder: i,
            params: r
          });
        }), c;
      }(e, t);
    } catch (e) {
      console.error(e);
    }
    window.instBid.que.push(function () {
      i.bids && window.instBid.addAdUnits(i), Qe(t || e, !0);
    });
  }
  function Ve(e, t) {
    e.forEach(e => nt(e, t));
  }
  function Le(e, t = []) {
    const i = n().ad.settings,
      o = i.PREBID_TIMEOUT || 3e3;
    t = t.filter(P), i.refreshOnlyViewed && Ae.isRefresh() && (t = t.filter(e => {
      const t = ke.getPosition(e);
      return t && !t.shouldSkipRefresh;
    })), Ve(t, !0), t.length ? window.instBid.que.push(function () {
      let i;
      Ae.auctionBeforeInit(), He(), window.instBid.requestBids({
        adUnitCodes: t,
        bidsBackHandler: (n, o, s) => {
          i = s, B.logMessage(`auctionId: ${s} timedOut: ${o}`), B.logMessage(JSON.stringify(n)), googletag.cmd.push(function () {
            window.instBid.setTargetingForGPTAsync();
          }), We(e, t, s), Ve(t, !1);
          for (const e in n) n[e] && Array.isArray(n[e].bids) && n[e].bids.forEach(t => {
            const i = t.size.split(/x/i).map(e => +e),
              n = new Be(t.bidderCode, s, e, +t.cpm, i);
            Se.updateResponseCounts(e, n);
          });
        },
        timeout: o
      }), setTimeout(() => {
        const n = t.filter(ot);
        n.length && !i && (B.logMessage("prebid failed"), Ve(n, !1), We(e, n, "failed"));
      }, o + 100);
    }) : (Ae.auctionBeforeInit(), Ae.resetAuctionBeforeInit());
  }
  function We(e, t, i) {
    const {
        lazyLoad: o
      } = n(),
      s = t || d();
    if (s.forEach(e => function (e, t) {
      try {
        !function (e, t) {
          xt(t, "aid", e);
        }(e, t), function (e) {
          const t = window.instBid.getAdserverTargetingForAdUnitCode(e);
          0 != Object.keys(t).length && null != t.ib || (xt(e, "ib", "nofill"), xt(e, "iaid", "nofill"), xt(e, "iba", "0"));
        }(t), function (e) {
          xt(e, "at", "visible" === document.visibilityState ? "1" : "0");
        }(t), function (e) {
          xt(e, "h", new Date().getUTCHours().toString());
        }(t), function (e, t) {
          const i = n().ad.settings.testGroupNumber,
            o = `${Ne().tier}`,
            s = `${Se.getImpressionTier(e)}`;
          o && (xt(t, "utier", o), xt(t, "tg_utier", `${i}_${o}`)), s && (xt(t, "itier", `${s}`), xt(t, "tg_itier", `${i}_${s}`));
        }(e, t);
      } catch (e) {
        console.warn(e);
      }
    }(i, e)), e) s.forEach(e => function (e, t) {
      const i = ct(e);
      Je(e, i.timesRefreshed + 1), xt(e, mt, i.refreshType), xt(e, "auto_refresh_counter", i.timesRefreshed + ""), At(e, !1, t);
    }(e, i));else {
      const e = rt("lazyLoad", i);
      s.forEach(t => {
        if (o) {
          const i = document.getElementById(t);
          i && e.observe(i);
        } else Ot(t, i);
      }), function () {
        const e = n(),
          {
            testGroupNumber: t,
            enableInterstitialDesktop: i,
            enableInterstitialMobile: o
          } = e.ad.settings,
          s = l();
        (i && "DESKTOP" == s || o && "MOBILE" == s) && googletag.cmd.push(function () {
          const e = googletag.defineOutOfPageSlot(Pt("interstitial"), googletag.enums.OutOfPageFormat.INTERSTITIAL);
          e && (e.addService(googletag.pubads()), e.setTargeting(bt, t), googletag.display(e));
        });
      }();
    }
  }
  function qe(e) {
    e.length && Le(!1, e);
  }
  function Ge(e, t) {
    const {
      variables: i
    } = n().ad;
    i.hbFills = {}, window.instBid.getConfig().schain || $e(), e.length && (N() && D(), e.forEach(e => Xe(e, t)), Le(!0, e));
  }
  function He() {
    window.instBid.que.push(() => {
      window.instBid.onEvent("auctionInit", function e(t) {
        t.auctionId && (Ae.auctionInit(t.auctionId), window.instBid.offEvent("auctionInit", e));
      });
    });
  }
  window.Insticator = window.Insticator || {
    q: []
  };
  let Ke = {};
  const Ze = (e, t) => {
      Ke[e] && (Ke[e].lastDisplayed = t);
    },
    Je = (e, t) => {
      Ke[e] && (Ke[e].timesRefreshed = t);
    },
    Xe = (e, t) => {
      Ke[e] && (Ke[e].refreshType = t);
    },
    Ye = (e, t) => {
      Ke[e] && (Ke[e].inView = t);
    },
    Qe = (e, t) => {
      Ke[e] && (Ke[e].bidAdded = t);
    },
    et = (e, t) => {
      Ke[e] && (Ke[e].GAMEnabled = t);
    },
    tt = (e, t) => {
      Ke[e] && (Ke[e].dip = t);
    },
    it = e => Ke[e] && Ke[e].dip,
    nt = (e, t) => {
      Ke[e] && (Ke[e].bip = t);
    },
    ot = e => Ke[e] && Ke[e].bip,
    st = e => Ke[e] && Ke[e].GAMEnabled;
  function rt(e, t = Ae.currentAuctionId) {
    const i = n(),
      {
        adRenderMarginDesktop: o = 0,
        adRenderMarginMobile: s = 0
      } = i.smartRefresh || {},
      {
        desktopMargin: r = 0,
        mobileMargin: a = 0
      } = i.lazyLoad || {},
      c = "DESKTOP" === l();
    let d;
    d = "lazyLoad" === e ? c ? r : a : c ? o : s;
    const u = [];
    for (let e = 0; e <= 10; e++) u.push(e / 10);
    return new IntersectionObserver(i => {
      i.forEach(i => {
        const n = i.target.id,
          o = ct(n);
        "lazyLoad" === e ? i.isIntersecting && o && !o.lastDisplayed && o.bidAdded && o.GAMEnabled && Ot(n, t || Ae.currentAuctionId) : i.isIntersecting ? (Ye(n, !0), o.lastDisplayed && o.inViewPercentage > 0 && at(n) && (Ze(n, Date.now()), Ge([n], "sr"))) : Ye(n, !1);
      });
    }, {
      rootMargin: `${d}px`,
      root: null,
      threshold: "lazyLoad" === e ? [0, 1] : u
    });
  }
  const at = e => {
      const t = ct(e);
      return !!t && Math.floor((Date.now() - t.lastDisplayed) / 1e3) >= n().smartRefresh.minimumRefreshInterval;
    },
    ct = e => Ke[e],
    dt = (e, t) => {
      const i = document.getElementById(e);
      i && "IntersectionObserver" in window && t.observe(i);
    },
    ut = () => {
      pt(), googletag.cmd.push(function () {
        googletag.pubads().addEventListener("slotVisibilityChanged", function (e) {
          const t = e.slot.getSlotElementId();
          ct(t) && ((e, t) => {
            Ke[e] && (Ke[e].inViewPercentage = t);
          })(t, e.inViewPercentage);
        });
      }), d().forEach(e => {
        lt(e), dt(e, rt("sr")), et(e, Ct(e));
      }), J.initAdUnits = true;
    },
    lt = e => (Ke[e] || P(e) && (Ke[e] = {
      timesRefreshed: 0,
      lastDisplayed: 0,
      bidAdded: !1,
      GAMEnabled: !1,
      refreshType: "tbr",
      inView: !1,
      inViewPercentage: 0,
      dip: !1,
      bip: !1
    }), Ke[e]),
    ht = e => (lt(e) && dt(e, rt("sr")), Ke[e]),
    pt = () => {
      Ke = {};
    };
  function gt(e) {
    const {
        variables: t,
        settings: i
      } = n().ad,
      o = [];
    if (t.hbFills[e] && o.push(t.hbFills[e]), N()) {
      const t = R(e);
      null != t && (t.cpm = +i.amazonBidMap[t.amznbid], t.cpm && o.push(t));
    }
    return Ct(e) || B.logMessage("GAM disabled: Highest bids for " + e + ": " + JSON.stringify(o)), 1 == o.length ? o[0] : o.sort(function (e, t) {
      return t.cpm - e.cpm;
    })[0];
  }
  (window.Insticator || {}).getAdUnitStates = function () {
    return Ke;
  }, window.googletag = window.googletag || {
    cmd: []
  };
  const ft = {},
    mt = "it",
    bt = "tg",
    wt = "shb",
    vt = {
      4813229186: "Fluct",
      4857715324: "Improve Digital",
      4598230798: "Index Exchange",
      5162987890: "InMobi",
      4774268805: "Media.net (EB)",
      4883438803: "OpenX",
      4608247084: "PubMatic",
      4656148987: "Rubicon Project",
      5209069603: "Sharethrough",
      5080193451: "SmartAdserver",
      5042147177: "Sonobi",
      4654463669: "Sovrn",
      5065483429: "TripleLift",
      4857714883: "Unruly RhythmOne"
    },
    yt = [4584751619, 5231261991];
  function It(e) {
    const {
      passbackInfoJson: t
    } = settings.passback;
    let i = t[l().toUpperCase()][e];
    return i || (i = "default"), i;
  }
  function At(e, t, i) {
    !function (e) {
      const t = It(e);
      return !(function (e) {
        const {
            variables: t
          } = n().ad,
          i = t.hbFills[e],
          o = !!N() && R(e);
        return i || o;
      }(e) || !t || "default" === t.toLowerCase());
    }(e) ? googletag.cmd.push(function () {
      const o = gt(e);
      if (o) {
        const t = o.size.split(/x/i).map(e => +e),
          n = new Be(o.bidderCode, i, e, +o.cpm, t);
        Se.addWinningBid(i, e, n);
      }
      Ae.endAuctionForPosition(i, e), st(e) ? function (e, t) {
        try {
          return function (e, t) {
            let i = n();
            const {
              testGroupNumber: o,
              impressionType: s,
              showHouseAds: r
            } = i.ad.settings;
            xt(e, bt, o), xt(e, wt, r ? "1" : "0"), t && xt(e, mt, s.INITIAL_LOAD);
          }(e, t), function (e) {
            const t = n(),
              i = Mt(e);
            t.ad.variables.enableFixedHeight && i && (300 === i.width && 250 === i.height ? m(e, 336, 280) : m(e, i.width, i.height));
          }(e), (kt() || []).includes(e) && P(e);
        } catch (e) {
          return console.error(e), !1;
        }
      }(e, t) && (t ? (googletag.display(e), googletag.pubads().isInitialLoadDisabled() && googletag.pubads().refresh([ft[e]]), tt(e, !0)) : googletag.pubads().refresh([ft[e]])) : window.instBid.que.push(function () {
        tt(e, !0), function (e, t) {
          const {
              ad: i
            } = settings,
            n = l(),
            o = gt(t),
            s = null == o ? void 0 : o.size.split("x");
          if (null == o) {
            const e = Mt(t);
            try {
              i.settings.showHouseAds && function (e, t, i) {
                if (S(e)) {
                  B.logMessage("GAM disabled: No fill - loading Backfill ad for " + e);
                  const n = A(e, t, i),
                    o = settings.global.embedHost + "/embeds/backfillad?dimension=" + t + "x" + i + "&siteURL=" + settings.global.domain;
                  n.src = o, Ze(e, Date.now()), tt(e, !1);
                }
              }(t, e.width, e.height);
            } catch (e) {
              B.logMessage("Error: loadBidderAd - " + e);
            }
          } else "amazon" == o.bidderCode ? N() ? (B.logMessage("GAM disabled: Loading Amazon ad for " + t + " with amzniid " + o.amzniid), function (e, t, i, n) {
            if (S(e)) {
              const o = A(e, i, n),
                s = function (e) {
                  return "<style type='text/css'>body{margin:0;padding:0;}</style><script>var w = window;for (i = 0; i < 10; i++) {w = w.parent;if (w.Insticator.amazonRender) {try {w.Insticator.amazonRender(document, '" + e + "');break;} catch (e) {continue;}}}<\/script>";
                }(t);
              O(o, s), Ze(e, Date.now()), tt(e, !1);
            }
          }(t, o.amzniid, s[0], s[1])) : B.logMessage("GAM disabled: Attempting to load Amazon ad for " + t) : (B.logMessage("GAM disabled: Loading Instbid ad from " + o.bidderCode + " for " + t + " with adid " + o.adId), function (e, t, i, n) {
            if (S(e)) {
              const o = A(e, i, n),
                s = function (e) {
                  return "<style type='text/css'>body{margin:0;padding:0;}</style><script>var w = window;for (i = 0; i < 10; i++) {w = w.parent;if (w.instBid) {try {w.instBid.renderAd(document, '" + e + "');break;} catch (e) {continue;}}}<\/script>";
                }(t);
              O(o, s), Ze(e, Date.now()), tt(e, !1);
            }
          }(t, o.adId, s[0], s[1]));
          i.variables.enableFixedHeight && i.settings.adUnitSettings[n].fixedHeightOn.includes(t) && f(t);
          let r = new Be("none", e, t, 0, [0, 0]);
          if (o) {
            const i = o.size.split(/x/i).map(e => +e);
            r = new Be(o.bidderCode, e, t, +o.cpm, i);
          }
          Se.addWinningBid(e, t, r), Ae.auctionRenderedForPosition(e, t);
        }(i, e), Ae.auctionRenderedForPosition(i, e);
      });
    }) : (function (e, t) {
      const i = Mt(e);
      !function (e, t, i, n) {
        const {
          passbackCreativeMap: o
        } = settings.passback;
        if (S(e)) {
          let s = o[t];
          s && (s = s.replace(/{width}/g, i).replace(/{height}/g, n).replace(/{domain}/g, settings.global.domain), O(A(e, i, n), s));
        }
      }(e, t, i.width + "", i.height + "");
    }(e, It(e)), Ae.endAuctionForPosition(i, e));
  }
  function Ot(e, t = Ae.currentAuctionId) {
    At(e, !0, t);
  }
  function St(e, t) {
    const i = t || e;
    if (!st(i)) return;
    const o = Pt(e),
      s = function (e) {
        const {
          adUnitToSizeMap: t,
          divToAdUnitMap: i
        } = n().ad.settings;
        return t[l()][e];
      }(e);
    if (!s) return B.logMessage("Ad unit size missing. Ad serving failed " + i);
    const r = [s.width, s.height],
      a = ke.positions[e];
    a && Array.isArray(a.sizes) && a.sizes.push(r), googletag.cmd.push(function () {
      const e = googletag.defineSlot(o, r, i);
      i && e && (ft[i] = e.addService(googletag.pubads()));
    });
  }
  function Tt() {
    d().forEach(e => {
      St(e);
    }), Q(!0);
  }
  function _t() {
    googletag.cmd.push(function () {
      googletag.enableServices();
    });
  }
  function xt(e, t, i) {
    googletag.cmd.push(function () {
      ft[e] && ft[e].setTargeting(t, i);
    });
  }
  function Pt(e) {
    const {
        divToAdUnitMap: t,
        siteUrl: i,
        enableRonNetworkSetting: n,
        ronNetworkId: o
      } = window.settings.ad.settings,
      s = t[l()],
      {
        gamNetworkString: r
      } = settings.global;
    let a = r;
    if (n && o) {
      const e = window.location.host,
        t = Object.keys(o || {});
      if (t.length) {
        const i = t.find(t => e.includes(t));
        if (i) {
          const e = o[i].id,
            t = o[i].isOn;
          if (e) {
            const i = r.split(",")[0];
            a = "true" == t ? i + "," + e : i;
          }
        }
      }
    }
    return "interstitial" == e ? "/" + a + "/" + i + "-interstitial" : "/" + a + "/" + s[e];
  }
  function Mt(e) {
    const t = n(),
      i = l();
    return t.ad.settings.adUnitToSizeMap[i][e];
  }
  function Ct(e) {
    var t, i;
    const {
      adUnitSettings: o
    } = n().ad.settings;
    return null === (i = null === (t = o[l()]) || void 0 === t ? void 0 : t.enabledGAM) || void 0 === i ? void 0 : i.includes(e);
  }
  function kt() {
    return googletag.pubads().getSlots().map(e => e.getSlotElementId());
  }
  function Bt(e, t) {
    const i = Object.keys(ft).map(e => ft[e].getAdUnitPath());
    if (!t) try {
      return e(googletag.pubads().getSlots().filter(e => !i.includes(e.getAdUnitPath())));
    } catch (e) {
      console.error(e);
    }
    return e(t);
  }
  var Et = function (e, t, i, n) {
    return new (i || (i = Promise))(function (o, s) {
      function r(e) {
        try {
          c(n.next(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
          e(t);
        })).then(r, a);
      }
      c((n = n.apply(e, t || [])).next());
    });
  };
  let jt = [];
  function Rt() {
    d().forEach(e => {
      Nt(e);
    });
  }
  function Nt(e) {
    return Et(this, void 0, void 0, function* () {
      var t;
      null != (null === (t = window.federatedObj) || void 0 === t ? void 0 : t.pageview_id) || p() || h() || (window.federatedObj || (window.federatedObj = {}), window.federatedObj.pageview_id = _());
      const i = l(),
        o = n(),
        s = window.federatedObj.pageview_id,
        {
          accountUUID: r
        } = window.Insticator,
        {
          siteUUID: a
        } = o.global,
        {
          adUnitSettings: c,
          divToAdUnitMap: d,
          eventURL: u
        } = o.ad.settings;
      let g = c[i].adUnitType[e];
      if (P(e) || (g = "HIDDEN"), g) {
        if (jt.includes(g)) B.logMessage("Ad unit event of type '" + g + "' already sent");else {
          jt.push(g);
          const t = u + "?event_name=event_adunit-load",
            n = [],
            o = d[i];
          for (const e in o) n.push(o[e]);
          try {
            const i = {
              pageview_id: s,
              adUnits: n,
              site_uuid: a,
              account_uuid: r,
              ad_unit_type: g,
              page_url: window.location.href
            };
            yield fetch(t, {
              method: "POST",
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
              body: JSON.stringify(i)
            }), B.logMessage("Ad unit event sent for " + e + " as '" + g + "'");
          } catch (e) {
            B.logMessage("Async call unable to complete, " + e);
          }
        }
      } else B.logMessage("Ad unit event not sent. divId not found.");
    });
  }
  var Dt = function (e, t, i, n) {
    return new (i || (i = Promise))(function (o, s) {
      function r(e) {
        try {
          c(n.next(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
          e(t);
        })).then(r, a);
      }
      c((n = n.apply(e, t || [])).next());
    });
  };
  function Ut(e, t) {
    const i = e + Date.now(),
      {
        enableInfinityAdUnits: o
      } = n().ad.settings;
    googletag.cmd.push(function () {
      const s = ee(),
        {
          initAdUnits: r,
          defineGAMSlots: a
        } = s,
        {
          q: c
        } = window.Insticator.ad;
      if (t || o) !function (e, t) {
        const {
            adUnitSettings: i,
            divToAdUnitMap: o
          } = n().ad.settings,
          {
            passbackInfoJson: s
          } = settings.passback,
          r = l(),
          a = document.getElementById(e);
        a && (ke.addNewPosition(e, t), window.Insticator.ad.q.push(t), a.setAttribute("id", t), ht(t), et(t, Ct(e)), o[r][t] = o[r][e], s[r][t] = s[r][e], i[r].adUnitType[t] = i[r].adUnitType[e], i[r].fixedHeightOn.push(t), Fe(e, t), St(e, t), N() && U(e, t), qe([t]));
      }(e, i);else if (r || a) {
        if (!ct(e) && ht(e)) {
          const t = (window.instBid.adUnits || []).map(e => e.code),
            i = kt();
          c.includes(e) || c.push(e), t.includes(e) || Fe(e), !i.includes(e) && Ct(e) && (et(e, !0), St(e)), qe([e]);
        } else ot(e) || it(e) || Ot(e);
      } else c.push(e);
    }), googletag.cmd.push(() => {
      Nt(t || o ? i : e);
    });
  }
  function $t() {
    c(() => {
      u(), d().forEach(e => {
        googletag.cmd.push(function () {
          var t;
          (null === (t = ct(e)) || void 0 === t ? void 0 : t.lastDisplayed) || ot(e) || it(e) || n().ad.settings.refreshOnlyViewed || (B.logMessage("missed loadAd: " + e), Ut(e, !1));
        });
      });
    });
  }
  function zt() {
    let e;
    c(() => {
      e = setInterval(() => {
        if (Lt()) return B.logMessage("stop RMA"), void clearInterval(e);
        $t();
      }, 500);
    });
  }
  let Ft = null,
    Vt = !1;
  const Lt = () => Vt;
  function Wt() {
    const e = n(),
      {
        minimumRefreshInterval: t,
        refreshAdsCap: i
      } = e.smartRefresh,
      {
        autoRefreshIntervalUpperBound: o,
        autoRefreshIntervalLowerBound: s,
        AUTO_REFRESH_CAP: r
      } = e.ad.settings;
    let a;
    a = qt() ? 1e3 * t : Math.floor(Math.random() * (o - s)) + s, Ft = setInterval(() => {
      if (Vt = !0, function () {
        const {
          enableRefreshOnInactiveTab: e
        } = n().ad.settings;
        return !("hidden" === document.visibilityState && !e);
      }()) {
        let e = d();
        if (qt()) {
          const t = e.filter(e => {
            let t = ct(e);
            return t && t.inView && i >= t.timesRefreshed && at(e);
          });
          I() && Ge(t, "sr");
        } else Ge(e.filter(e => {
          let t = ct(e);
          return t && r >= t.timesRefreshed && t.lastDisplayed;
        }), "tbr");
      }
      $t();
    }, a);
  }
  function qt() {
    const {
        enableSmartRefresh: e,
        smartRefreshExclusion: t
      } = n().smartRefresh,
      i = W();
    return !!e && "UNKNOWN" !== i && !t.includes(i);
  }
  function Gt() {}
  const Ht = () => {
    setTimeout(function () {
      jt = [], Rt();
    }), ut(), googletag.cmd.push(function () {
      const e = Object.values(ft);
      e.length && googletag.destroySlots(e);
    }), Tt(), _t(), Vt = !1, qe(d()), clearInterval(Ft), Wt(), zt();
  };
  !function (e) {
    t = e, window.Insticator && (window.Insticator.settings = e);
  }(globalThis.settings);
  try {
    if (function () {
      try {
        const {
            videoPlayerParam: e
          } = n().global,
          t = window.location.href,
          i = (e || []).filter(e => new RegExp(e.urlPattern.slice(1, -1)).test(t));
        i.forEach((e, t) => {
          if (e) {
            const {
                token: i,
                cid: n,
                expressionType: o,
                expression: s
              } = e,
              r = document.createElement("script");
            r.innerHTML = `\n                !function(n){if(!window.cnx){window.cnx={},window.cnx.cmd=[];var t=n.createElement('iframe');t.src='javascript:false'; t.display='none',t.onload=function(){var n=t.contentWindow.document,c=n.createElement('script');c.src='//cd.connatix.com/connatix.player.js?cid=${n}',c.setAttribute('async','1'),c.setAttribute('type','text/javascript'),n.body.appendChild(c)},n.head.appendChild(t)}}(document);\n            `;
            const a = "inst-connatix-player-" + _(),
              c = document.createElement("script");
            c.id = a, c.innerHTML = `\n                (new Image()).src = 'https://capi.connatix.com/tr/si?token=${i}&cid=${n}';\n                cnx.cmd.push(function() {\n                    cnx({\n                        playerId: "${i}"\n                    }).render("${a}");\n                });\n            `;
            const d = "XPATH" === o ? document.evaluate(s, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : document.querySelector(s);
            d ? (0 === t && d.appendChild(r), d.appendChild(c), B.logMessage("Video player " + i + " appended")) : B.logMessage("No video player target element found for " + i);
          }
        }), i.length || B.logMessage("No video player configured");
      } catch (e) {
        console.warn(e);
      }
    }(), !function () {
      let e = n().ad.variables;
      if (e.domainWhitelist.on) {
        const t = window.location.hostname;
        return !(!e.domainWhitelist.list.some(e => t && t.includes(e)) && !p());
      }
      return B.logMessage("Domain whitelist not enabled."), !0;
    }()) throw "domain not allowed";
    if (function () {
      const e = n();
      if (!e.ad.settings.enablePreventAdOnBotCrawler) return !1;
      const t = `/${["proxy", "bot", "crawl", "spider", "rigor.com", "naver.me", "pagepeeker.com", "scraper", "scrapy.org", "seositecheckup.com", "lighthouse", "adbeat", "alexa", "http", "datadog", "asana", "dataprovider", "daum", "mediapartners", "outbrain", "statuscake", "tigerbrokers", "css_validator", "wordpress.com", "facebookexternalhit"].concat(e.ad.settings.botFilters).join("|")}/`;
      return null !== new RegExp(t, "gi").exec(window.navigator.userAgent);
    }()) throw "bot not allowed";
    !function () {
      const {
        initAnchorAd: e
      } = window.Insticator;
      n().anchorUnitConfigs && e && e(l());
    }(), ut(), function () {
      if (v) return;
      const e = n();
      let t;
      function i() {
        clearTimeout(t), t = setTimeout(() => {
          y(!1);
        }, 1e3 * (e.smartRefresh.thresholdToBeInactive || 30)), I() || y(!0);
      }
      ["load", "click", "keydown", "touchstart", "mousemove", "mousedown", "scroll"].forEach(e => {
        window.addEventListener(e, i, !0);
      }), v = !0;
    }(), c(() => {
      try {
        !p() && function () {
          const {
              divToAdUnitMap: e
            } = globalThis.settings.ad.settings,
            t = e[l()];
          return Object.keys(t).some(e => e.includes("-cmt-"));
        }() && function () {
          const e = document.createElement("style");
          e.type = "text/css", e.id = "insticator-commenting-ads-styles";
          const t = e => `${e} > div { display: flex !important; }`;
          e.textContent = `\n      ${t(".insticator-unit.type-commenting .insticator-ads")}\n      ${t(".insticator-unit.type-products .insticator-ads")}\n      ${t("#insticator-container")}\n      ${".insticator-ads", ".insticator-ads { display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap; clear: both; }"}\n    `, ((e, t = window) => {
            const i = t.document.getElementById(e.id);
            i ? i.textContent = e.textContent : t.document.head.appendChild(e);
          })(e);
        }();
      } catch (e) {
        console.warn(e);
      }
    }), function () {
      var e, t, i, n, o;
      t = this, i = void 0, o = function* () {
        const {
            getCookie: t,
            setCookie: i
          } = (null === (e = window.Insticator) || void 0 === e ? void 0 : e.cookieUtils) || {
            getCookie: () => "",
            setCookie: () => ""
          },
          n = "plsVisitorGeo",
          o = "plsVisitorIp",
          s = "plsGeoObj",
          r = t(n),
          a = t(o),
          c = t(s);
        try {
          if (r && a && c) {
            H(r), Z(a);
            const e = JSON.parse(c);
            if (e.location) return G(e), !0;
          }
          const e = yield fetch("https://geoip.insticator.com/json/"),
            t = yield e.json(),
            d = {
              ip: t.ip,
              country: t.country_code,
              region: t.region_code,
              city: t.city,
              zip: t.zip_code,
              location: `${t.latitude},${t.longitude}`
            };
          return i(n, t.country_code, 1), i(o, t.ip, 1), i(s, JSON.stringify(d), 1), H(t.country_code), Z(t.ip), G(d), Ue(), !0;
        } catch (e) {
          return B.logMessage("Geo: Error getting data - " + e), !1;
        }
      }, new ((n = void 0) || (n = Promise))(function (e, s) {
        function r(e) {
          try {
            c(o.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            c(o.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function c(t) {
          var i;
          t.done ? e(t.value) : (i = t.value, i instanceof n ? i : new n(function (e) {
            e(i);
          })).then(r, a);
        }
        c((o = o.apply(t, i || [])).next());
      });
    }(), function () {
      Dt(this, void 0, void 0, function* () {
        yield function () {
          return Dt(this, void 0, void 0, function* () {
            return new Promise((e, t) => {
              window.__tcfapi ? (B.logMessage("GDPR: CMP exists.  Getting consent data."), window.__tcfapi("addEventListener", 2, (i, o) => function (e, t, i, o) {
                var s, r, a;
                const {
                  setCookie: c
                } = window.Insticator.cookieUtils;
                let d = n().ad.variables;
                try {
                  e.gdprApplies ? !t || "useractioncomplete" !== e.eventStatus && "tcloaded" !== e.eventStatus || (d.consentData = e, !(null !== (a = null === (r = null === (s = d.consentData) || void 0 === s ? void 0 : s.purpose) || void 0 === r ? void 0 : r.consents[1]) && void 0 !== a && a) && c && (c("plsVisitorGeo", "", 0), c("plsVisitorIp", "", 0), c("plsGeoObj", "", 0), B.logMessage("GDPR: Purpose 1 is false or undefined. Removing geo cookies.")), i(!0)) : (B.logMessage("GDPR: GDPR does not apply."), i(!0));
                } catch (e) {
                  o("GDPR error: " + e), i(!1);
                }
              }(i, o, e, t))) : (B.logMessage("GDPR: No CMP"), e(!0));
            });
          });
        }();
      });
    }();
    const e = globalThis && n(),
      t = {
        tests: [{
          name: "default",
          traffic: 100,
          session: !1,
          modify: {}
        }]
      },
      i = function (e, t = "") {
        if (!e) return "control";
        const i = t || s(se._cookieNames._test);
        let n = "";
        if (i) {
          const o = e.reduce((e, t) => e || (i === t.name ? t : null), null);
          if (o) {
            if (o.session || t) n = i;else {
              let t = 0;
              const i = [];
              if (e.forEach(function (e) {
                e.traffic > 0 && (e.session ? t += e.traffic : i.push(e));
              }), t > 0 && i.length > 0) {
                const n = 100 - t;
                e = i.map(e => (e.traffic += e.traffic / n * t, e));
              }
            }
          } else n = "";
        }
        if (!n) {
          const t = 100 * T();
          let i = 0;
          for (let o = 0; o < e.length; o++) {
            const s = e[o];
            if (!(i < t || 0 === i)) break;
            i += s.traffic, n = s.name;
          }
        }
        return o(se._cookieNames._test, n), n;
      }(t.tests || e.tests || [], oe.test);
    !function (e, t, i, n) {
      !function (e, t) {
        const i = [],
          n = [];
        for (i.push(t), n.push(e); i.length;) {
          for (const e in i[0]) i[0].hasOwnProperty(e) && ("object" != typeof i[0][e] || M(i[0][e]) || Array.isArray(i[0][e]) || !(e in n[0]) ? "object" == typeof n[0] && (n[0][e] = i[0][e]) : (i.push(i[0][e]), n.push(n[0][e])));
          i.shift(), n.shift();
        }
      }(e, t);
      const o = Pe(i, "name", n);
      e.testGroup = n, B.logMessage(`In test group: "${n}"`), o && Me(e, o.modify);
    }(e, t, t.tests || e.tests || [], i), function () {
      const e = n(),
        t = e.ad.settings;
      He(), Ae.onAuctionBeforeInit(() => {
        B.logMessage("About to initialize next auction"), Ae.isRefresh() || Re(), Se.setImpressionTier(), Te.augmentConfig(e, e.augments || []);
        const i = d();
        Ae.isRefresh() && (Y(!1), i.forEach(e => {
          const i = ke.getPosition(e);
          i && (function (e) {
            window.instBid.que.push(function () {
              window.instBid.removeAdUnit(e), Qe(e, !1);
            });
          }(e), i.isViewed && i.enableRefresh(), t.refreshOnlyViewed && !i.isViewed ? i.disableRefresh() : i.useDemandFrom && i.useDemandFrom !== e ? Fe(i.useDemandFrom, e) : Fe(e));
        }), Y(!0)), ke.resetPositions(i), ke.setIsOnScreen(), ke.setNumVisiblePositions(), $e(), ce.setEndpoint();
      }), Ae.onAuctionInit((e, t) => {
        Ae.auctionBeforeInit(), B.logMessage(`Auction ${t} with id ${e} initialized!`);
        const i = d();
        Ae.setDivIds(e, i), Se.setAuctionId(e), Se.setDivIds(e, i), 1 === t ? ce.establishConnection() : ce.renew(), we.updateMultiple(function (e, t) {
          const i = {};
          let n = 0;
          const o = [function () {
            if (0 === ke.numVisiblePositions) return !1;
            if (e !== Ae.currentAuctionId && Ae.auctionCount - t > 3) return !0;
            if (n === ke.numVisiblePositions) return !0;
            const o = fe();
            return Object.keys(ke.positions).forEach(function (t) {
              const s = ke.positions[t],
                r = Se.getWinningBid(e, t);
              var a;
              r.isRendered && !r.isViewed && s && (r.isRendered && s.$div && be(a = s.$div, !0) * be(a, !1) > .5 ? i[t] ? o - i[t] > 1e3 && r && (r.markViewed(), s.markViewed(), B.logMessage(`👁 ${t} viewed`), n++) : i[t] = o : i[t] = 0);
            }), !1;
          }];
          return function (e, t) {
            o.reduce((e, t) => t() && e, !0) && e.splice(t, 1);
          };
        }(e, t)), Ae.save();
      }), Ae.onAuctionEnd((e, t) => {
        Ae.auctionInit(e), B.logMessage(`Auction ${t} end for ${e}`);
        const i = d();
        if (window.instBid && window.instBid.getAllWinningBids) {
          let t = window.instBid.getBidResponses();
          t && Array.isArray(t) || (t = []), t.forEach(t => {
            const i = t.adUnitCode;
            if (t.cpm > 0) {
              const n = t.size.split(/x/i).map(e => +e),
                o = new Be(t.bidderCode, e, i, +t.cpm, n);
              Se.addWinningBid(e, i, o), Se.getWinningBid(e, i).markWinner();
            }
          });
        }
        i.forEach(e => {
          const t = ke.getPosition(e);
          t && t.addDiv();
        });
      }), Ae.onAuctionRendered((e, t) => {
        B.logMessage(`Auction ${t} rendered for ${e}`);
        const i = d();
        window.instBid && window.instBid.getAllWinningBids && (window.instBid.getAllWinningBids() || []).forEach(t => {
          const n = ke.getPosition(t.adUnitCode, i),
            o = n && n.divId || t.adUnitCode;
          if (t.cpm > 0) {
            const i = t.size.split(/x/i).map(e => +e),
              n = new Be(t.bidderCode, e, o, +t.cpm, i);
            Se.addWinningBid(e, o, n), n.markWinner();
          }
        });
        const n = Ne(),
          o = [];
        let s = 0;
        for (const t of i) {
          const i = Se.getWinningBid(e, t);
          i.isRendered || i.markRendered(), Se.addBidToIdMap(i);
          const r = n.defaultTiers[t.match(/^.*anchor.*$/i) ? "anchor" : "div"] || [];
          if (r.length) {
            s += i.cents;
            for (let e = 0; e < r.length; e++) void 0 === o[e] && (o[e] = 1), o[e] += r[e];
          }
        }
        const r = o.length;
        let a = s > o[r - 1] ? r : -1;
        if (-1 === a) for (let e = 0; e < r; e++) if (s < o[e]) {
          a = e;
          break;
        }
        n.storeUserTier(a), Se.updateBidderActivity(), Se.calculate(e), Se.save(), B.logMessage(`ValueTracker: ${JSON.stringify(Se.exportForLogs())}`), ce.debouncedSend(), t >= 20 && t % 10 == 0 && (Ae.clearOldData(), Se.clearOldData());
      });
    }(), Ue(), d().forEach(e => {
      Fe(e);
    }), Y(!0), qe(d()), function () {
      if (!googletag || !googletag.apiReady) {
        const e = document.createElement("script");
        e.async = !0, e.type = "text/javascript", e.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        const t = document.getElementsByTagName("script")[0];
        t.parentNode && t.parentNode.insertBefore(e, t);
      }
      googletag.cmd.push(function () {
        const e = n(),
          t = googletag.pubads();
        (e.ad.settings.override || {}).gptRefresh && (t.refresh = Bt.bind(t.refresh, t.refresh)), t.addEventListener("slotOnload", function (e) {
          e.slot.getSlotElementId().startsWith("div-insticator-ad-");
        }), t.addEventListener("slotRenderEnded", function (e) {
          const t = e.slot.getSlotElementId();
          if (t.startsWith("div-insticator-ad-")) {
            const i = (e.slot.getTargeting("aid") || [])[0],
              o = +(e.advertiserId || 0),
              s = +(e.lineItemId || 0),
              r = (e.companyIds || [0])[0],
              a = 5046746103 === o,
              c = yt.includes(o),
              d = o in vt || r in vt,
              u = !(s || d),
              h = (49737376 === o || u) && e.isBackfill,
              p = n(),
              g = l();
            p.ad.variables.enableFixedHeight && p.ad.settings.adUnitSettings[g].fixedHeightOn.includes(t) ? f(t) : function (e) {
              try {
                const t = document.getElementById(e),
                  i = Number(t.style.width.replace("px", "")),
                  n = Number(t.style.height.replace("px", "")),
                  o = t.getElementsByTagName("iframe")[0];
                if (void 0 !== o) {
                  const t = function (s) {
                    const r = o.clientWidth,
                      a = o.clientHeight;
                    1 === r || 1 === a ? setTimeout(function () {
                      t(s - 1);
                    }, 200) : i == r && n == a || m(e, r, a);
                  };
                  t(5);
                }
              } catch (e) {}
            }(t), function (e) {
              var t, i;
              const o = n(),
                s = l().toLocaleLowerCase(),
                r = null === (i = null === (t = o.ad.variables.styleOverrideMap) || void 0 === t ? void 0 : t[s]) || void 0 === i ? void 0 : i[e];
              if (r) {
                let t = document.getElementById(e);
                null == t || t.setAttribute("style", t.style.cssText + r);
              }
            }(t), N() && function (e) {
              googletag.cmd.push(function () {
                const t = e.slot.getSlotElementId(),
                  i = e.slot.getTargetingKeys();
                i.includes("amzniid") && (i.forEach(t => {
                  t.startsWith("amzn") && e.slot.clearTargeting(t);
                }), B.logMessage("Targeting: Removing Amazon targeting for: " + t));
              });
            }(e), Ze(t, Date.now()), tt(t, !1);
            let b = Se.getWinningBid(i, t);
            const w = gt(t),
              v = ke.getPosition(t);
            let y;
            v ? (v.addDiv(), y = v.$div) : y = document.getElementById(t);
            const I = y ? y.querySelector("iframe") : null,
              A = [0, 0];
            if (I && I.width && I.height && (A[0] = +I.width.replace(/[^0-9]/, ""), A[1] = +I.height.replace(/[^0-9]/, "")), w && (0 === b.cents || +w.cpm > b.cpm)) {
              const e = w.size.split(/x/i).map(e => +e);
              b = new Be(w.bidderCode, i, t, +w.cpm, e[0] && e[1] ? e : A);
            } else b = new Be(a ? "backfill" : "none", i, t, 0, A);
            if (!a && !c) {
              const e = d ? vt[o] || vt[r] : u ? "adx" : h ? "adsense" : "unknown";
              "unknown" !== e && b.update(e, b.cents + 1), d && b.markEbda(e);
            }
            s && b.setLineItemId(s), Se.addWinningBid(i, t, b), Ae.auctionRenderedForPosition(i, t);
          }
        });
      });
    }(), N() && (window.addEventListener("message", e => {
      e.origin == window.location.origin && e.data.apstagLoaded && D();
    }), function (e) {
      const {
          global: t
        } = n(),
        i = {
          amazonUamId: t.amazonUamId,
          insticatorAsi: t.insticatorAsi,
          insticatorSid: t.insticatorSid
        };
      window.Insticator.amazonSettings = i;
      const o = document.createElement("iframe");
      o.src = "javascript:false", o.setAttribute("style", "width: 0px; height: 0px; border: 0px; margin: 0px; position:absolute; left: -10000px"), o.id = "amazonBidsIframe", o.title = "Intentionally blank", o.setAttribute("aria-hidden", "true"), o.srcdoc = e;
      try {
        document.body.append(o);
      } catch (e) {
        B.logMessage(e), c(() => document.body.append(o));
      }
    }(z), window.Insticator.amazonRender = function (e, t) {
      const i = $();
      if (null == i || i.renderImp(e, t), i) for (const e in j) {
        const i = j[e].findIndex(e => e.amzniid == t);
        i > -1 && (B.logMessage("Remove bid from Amazon bid store for " + e + ": " + t), j[e].splice(i, 1));
      }
    }, d().forEach(e => U(e))), Tt(), _t(), function () {
      const {
        enableConfiant: e,
        myPropertyId: t
      } = n().ad.settings;
      if (e) {
        window.confiant = window.confiant || {}, window.confiant[t] = window.confiant[t] || {
          clientSettings: {}
        };
        const e = window.confiant[t].clientSettings || (window.confiant[t].clientSettings = {});
        e.callback = Gt, e.prebidNameSpace = "instBid";
        const i = document.createElement("script");
        i.type = "text/javascript", i.async = !0, i.src = "https://cdn.confiant-integrations.net/" + t + "/gpt_and_prebid/config.js";
        const n = document.getElementsByTagName("head")[0];
        n.insertBefore(i, n.firstChild);
      }
    }(), Rt(), window.Insticator && window.Insticator.ad && "function" != typeof window.Insticator.ad.start && (window.Insticator.ad.start = Wt, window.Insticator.ad.stop = function () {
      clearInterval(Ft);
    }), Wt(), function () {
      const {
        insticatorCommentingUnitSettings: e
      } = window;
      e && "comment.instiengage.com" === window.location.host && googletag.cmd.push(function () {
        googletag.pubads().set("page_url", n().global.domain);
      }), window.Insticator.ad.loadAd = Ut, window.Insticator.ad.loadInCommentingAd = function (t) {
        try {
          const i = l(),
            n = i.charAt(0) + i.slice(1).toLowerCase(),
            o = e[t + n];
          if (window.document.getElementById(t).setAttribute("id", o), o && "DISABLED" !== o) return Ut(o, !0);
        } catch (e) {
          B.logMessage("ERROR loadInCommentingAd: " + e);
        }
      }, window.Insticator.ad.recoverMissingAds = $t;
    }(), function () {
      const {
          enableSpaRouting: e
        } = n().ad.settings,
        t = {
          apply: (e, t, i) => (Ht(), e.apply(t, i))
        };
      e && (history.pushState = x(history.pushState, t), history.replaceState = x(history.replaceState, t), window.addEventListener("popstate", Ht));
    }(), zt(), window.setInterval(we.executeMultiple, 100);
  } catch (e) {
    null != window.Sentry && window.sendSentryExcpetion && window.sendSentryExcpetion(e), console.error("header code error: ", e);
  }
}();
window.WebSocket = jshook('WebSocket', defaultFunctionHook);
window.EventSource = jshook('EventSource', defaultFunctionHook);