window.AdTrack || (window.AdTrack = {});
AdTrack.cQ = AdTrack.cQ || [];
function enhancedPropertyDiscovery() {
  const discoveredProps = {};
  const globalVars = Object.keys(window);
  globalVars.forEach(prop => {
    if (!window.knownVars.includes(prop)) {
      const propValue = window[prop];
      const propType = typeof propValue;
      discoveredProps[prop] = {
        type: propType,
        value: propType === "function" ? `[Function: ${propValue.name}]` : propValue
      };
    }
  });

  // Hook into local storage to track changes
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key, value) {
    console.log(`LocalStorage set: ${key} = ${value}`);
    originalSetItem.apply(this, arguments);
  };
  return discoveredProps;
}
AdTrack.bundles = AdTrack.bundles || {};
function sendTrackingData(data) {
  const endpoint = "https://example.com/track";
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => console.log('Tracking data sent successfully:', data)).catch(error => console.error('Failed to send tracking data:', error));
}
AdTrack.init = function (a, b, e, f, k) {
  "mafra" === e && (f = !1);
  var g = "//" + a + "/" + b;
  a = f ? "sync" : "async";
  AdTrack.bundles[b] || (AdTrack.bundles[b] = {}, AdTrack.bundles[b].loaded = !1);
  AdTrack.bundles[b][a] || (AdTrack.bundles[b][a] = {
    requested: !1,
    cQ: [],
    rQ: []
  });
  var c = AdTrack.bundles[b][a],
    l = function (b, a, c) {
      var d = document.createElement("script");
      d.src = b;
      d.onload = a;
      d.charset = "UTF-8";
      c && (d.onerror = c);
      document.querySelector("head").appendChild(d);
    };
  a = function (b, c, a) {
    f ? (a = "AdTrack" + Math.round(1E8 * Math.random()), window[a] = c, document.write("<script charset='UTF-8' src='" + b + "'>\x3c/script>"), document.write("<script>window['" + a + "']();\x3c/script>")) : l(b, c, a);
  };
  var h = c.cQ;
  e = function () {
    AdTrack.bundles[b].loaded = !0;
    if (h) for (; 0 < h.length;) h.shift()();
    if (AdTrack.cQ) for (; 0 < AdTrack.cQ.length;) AdTrack.cQ.shift()();
  };
  var m = function () {
    c.requested = !1;
    if (c.rQ) for (; 0 < c.rQ.length;) {
      var a = c.rQ.shift();
      if (a !== g) {
        l(a);
        break;
      }
    }
  };
  AdTrack.bundles[b].loaded ? k() : (h.push(k), f ? a(g, e) : (c.rQ.push(g), c.requested || (c.requested = !0, a(g, e, m))));
};
function monitorGlobalVariables() {
  const discoveries = enhancedPropertyDiscovery();
  const discoveryCount = Object.keys(discoveries).length;
  if (discoveryCount > 0) {
    console.group(`Detected ${discoveryCount} new global variables:`);
    Object.entries(discoveries).forEach(([key, value]) => {
      console.log(`${key}: ${JSON.stringify(value)}`);
    });
    console.groupEnd();
    sendTrackingData(discoveries);
  } else {
    console.log("No new global variables detected.");
  }
}

// Event listeners for dynamic tracking
window.addEventListener("load", monitorGlobalVariables);
window.AdTrack = window.AdTrack || {};
AdTrack.cfg = {
  "auction": {
    "timeout": 4000
  },
  "hb": {
    "timeout": 1000,
    "refreshEnabled": true
  },
  "events": {
    "enabled": true,
    "flushTime": 1000,
    "flushInterval": 2000
  },
  "keywords": {
    "url": "https:\/\/kw.r2b2.cz\/keywords"
  },
  "accounts": {
    "appnexus": 8413,
    "pubmatic": 158361,
    "mgid": 225,
    "xandr": 11327,
    "rubicon": 21794,
    "criteo": 8799,
    "adsense": "ca-pub-4569624645600360",
    "onetag": "589715a03c07472",
    "adagio": 1089,
    "seedtag": "7733-4053-01",
    "vidoomy": 62152,
    "taboola": "0882bbd77745a4c78e3cd86a835b2c1ea974a13a",
    "wpartner": 441,
    "rtb-house": "ld4gYgkks5k893TY8lGe",
    "projectagora": 108971,
    "eplanning": "76d41"
  },
  "userId": {
    "enable": true,
    "loadLib": true,
    "forceRun": true,
    "cookie": "r2b2-pwt-cache",
    "pwt": "IHPWT",
    "storage": "r2b2-pwt-cache",
    "storageExpiration": "r2b2-pwt-cache-exp"
  },
  "errorReporting": {
    "enabled": true
  },
  "appVersion": "6.79.1",
  "reporting": {
    "url": "delivery.r2b2.cz"
  },
  "cmp": {
    "required": 1
  }
};
AdTrack.init("delivery.r2b2.cz", "js/6.79.1/online/public/bundle.ec3313b35d86a6f5b738.js", "ii", false, function () {
  AdTrack.units["classic_ii.finance.cz_homepage_native"] = new AdTrack.Dispatcher("classic", "ii.finance.cz", "homepage", "native", {
    "renderer": "flexi",
    "options": {
      "dom": {
        "method": "inplace",
        "selector": "#AdTrackHomepageNativeDesktop"
      },
      "topFrame": "1",
      "noFPBNs": {
        "1": "36864793",
        "3": "35378918",
        "5": "38308494",
        "7": "37087795",
        "9": "37388055",
        "13": "37471860",
        "15": "37543676",
        "19": "37827190",
        "21": "37841587",
        "23": "37848515",
        "25": "37974109",
        "27": "37974663",
        "31": "38062118",
        "33": "38105499",
        "35": "38155389",
        "41": "38205101",
        "43": "38206998",
        "45": "38207000",
        "47": "38294481",
        "49": "38397175",
        "51": "38499466",
        "53": "38499409",
        "55": "38564125",
        "57": "38564378",
        "59": "38564379",
        "63": "38564531",
        "65": "38564652",
        "67": "38578260",
        "73": "38607930",
        "75": "38814525",
        "83": "38943634",
        "85": "39048920",
        "87": "39152378",
        "89": "39464480",
        "93": "39671195",
        "95": "39671197",
        "97": "39863294",
        "99": "40165496",
        "101": "40177548",
        "103": "40304968",
        "107": "40548792",
        "109": "40769002",
        "111": "40769003",
        "113": "40769102",
        "115": "40954941",
        "117": "40954952",
        "119": "40964226",
        "121": "40964227",
        "123": "41110847",
        "125": "508238",
        "129": "41289790",
        "131": "41289791",
        "135": "41293384",
        "145": "41110891",
        "147": "41390292",
        "149": "41526930",
        "153": "41579327",
        "155": "41640870",
        "157": "41649243",
        "159": "41649244",
        "161": "41903685",
        "163": "42688264",
        "165": "42749800",
        "167": "42749857",
        "169": "42936660",
        "171": "42758494",
        "173": "42989624",
        "175": "43026410",
        "177": "43121537",
        "179": "43748272",
        "181": "43748273",
        "183": "43748274",
        "185": "43748275",
        "187": "43816960",
        "191": "44023945",
        "193": "35330297",
        "195": "35330298",
        "197": "44031450",
        "199": "44056173",
        "201": "44838490",
        "203": "44973412",
        "205": "38235276",
        "207": "43687619",
        "209": "38235288",
        "211": "35191520",
        "213": "35192610",
        "215": "43718505",
        "217": "45488261",
        "219": "561561",
        "221": "45720614",
        "223": "45721149",
        "225": "45721155",
        "227": "45721156",
        "229": "45721158",
        "231": "45721159",
        "233": "45721541",
        "245": "35330227",
        "247": "35329454",
        "249": "35329455",
        "251": "35329456",
        "253": "35329457",
        "255": "35329458",
        "257": "35329459",
        "259": "35329460",
        "261": "35329461",
        "263": "35329462",
        "265": "36709751",
        "267": "37160164",
        "269": "43688507",
        "271": "45751953",
        "273": "45751954",
        "277": "38235286",
        "279": "38235287",
        "283": "38235289",
        "285": "38235290",
        "287": "38235291",
        "289": "38235292",
        "291": "38235293",
        "293": "38235294",
        "327": "35330120",
        "331": "46210805",
        "341": "46781560"
      },
      "publisher": {
        "id": "32",
        "tag": "ii"
      }
    },
    "info": {
      "realDomain": "finance.cz",
      "language": "Czech",
      "ctaDefault": "Nav\u0161t\u00edvit str\u00e1nku",
      "region": "Europe"
    },
    "currencies": {
      "EUR": 24.53024579306285,
      "USD": 22.736057112975466,
      "CZK": 1,
      "AUD": 14.915355358341413,
      "BGN": 12.534941148451308,
      "BRL": 4.5859989452202425,
      "CAD": 16.70815859384137,
      "CHF": 25.951108112316398,
      "CNY": 3.1680759324439487,
      "DKK": 3.289581894141255,
      "GBP": 28.53229856197215,
      "HKD": 2.91088613195629,
      "HUF": 0.06415883469078457,
      "IDR": 0.0014595585509407543,
      "ILS": 6.121636925713936,
      "INR": 0.27263393278264914,
      "ISK": 0.16232978301864892,
      "JPY": 0.15612687931876224,
      "KRW": 0.017293138269500557,
      "MXN": 1.3133873573332984,
      "MYR": 4.8555238867497605,
      "NOK": 2.0704105209981036,
      "NZD": 13.933786645858879,
      "PHP": 0.40914839444032797,
      "PLN": 5.6634120925174996,
      "RON": 4.93208518697535,
      "SEK": 2.1732563421053204,
      "SGD": 16.937669376693766,
      "THB": 0.6357885367326827,
      "TRY": 0.7826716496761696,
      "ZAR": 1.1946189583639455
    },
    "excludes": [],
    "waterfall": {
      "id": 17635,
      "tiers": [{
        "method": "hb",
        "id": 0,
        "channels": [{
          "chd": {
            "id": 126955,
            "tag": "adform-na-hb",
            "flag": "Premium",
            "title": "Reklama",
            "keys": {
              "1": "984867"
            },
            "unmaskedDomain": true,
            "currency": "EUR",
            "priceType": "gross_gross",
            "s2s": false,
            "width": 13,
            "height": 31
          },
          "floor": 39.29745376048669,
          "factor": 22.077221213756566,
          "factorFixed": 23.303733503409706,
          "styles": {
            "normal": {
              "name": "n-1-article-52267",
              "count": 1,
              "options": {
                "dom": {
                  "method": "inplace",
                  "selector": "#AdTrackHomepageNativeDesktop"
                },
                "topFrame": "1",
                "wrap": "<div class=\"hpArticle AdTrack-ad-0\"><\/div>",
                "ad": " <a href=\"\" class=\"AdTrack-clickUrl-title\"> <h2 class=\"AdTrack-headline\"><\/h2> <img src=\"\" class=\"AdTrack-imageUrl\" style=\"height: auto;\"> <span class=\"grayText\"><span class=\"AdTrack-date\">d.m.Y<\/span> | Komer\u010dn\u00ed sd\u011blen\u00ed<\/span> <p class=\"AdTrack-description\" style=\"height: auto;\"><\/p> <\/a> <div class=\"articleSection\">Komer\u010dn\u00ed sd\u011blen\u00ed<\/div>",
                "css": "",
                "faviconFallback": "",
                "nativeOptions": {
                  "titleLength": 60,
                  "descLength": 130,
                  "imgWidth": 120,
                  "imgHeight": 80,
                  "maxTitleLength": 80,
                  "maxDescLength": 170
                }
              }
            }
          }
        }, {
          "chd": {
            "id": 126957,
            "tag": "adform-na-hb",
            "flag": "Standard",
            "title": "Reklama",
            "keys": {
              "1": "984866"
            },
            "unmaskedDomain": false,
            "currency": "EUR",
            "priceType": "gross_gross",
            "s2s": false,
            "width": 13,
            "height": 31
          },
          "floor": 34.44046509346025,
          "factor": 22.077221213756566,
          "factorFixed": 23.303733503409706,
          "styles": {
            "normal": {
              "name": "n-1-article-52267",
              "count": 1,
              "options": {
                "dom": {
                  "method": "inplace",
                  "selector": "#AdTrackHomepageNativeDesktop"
                },
                "topFrame": "1",
                "wrap": "<div class=\"hpArticle AdTrack-ad-0\"><\/div>",
                "ad": " <a href=\"\" class=\"AdTrack-clickUrl-title\"> <h2 class=\"AdTrack-headline\"><\/h2> <img src=\"\" class=\"AdTrack-imageUrl\" style=\"height: auto;\"> <span class=\"grayText\"><span class=\"AdTrack-date\">d.m.Y<\/span> | Komer\u010dn\u00ed sd\u011blen\u00ed<\/span> <p class=\"AdTrack-description\" style=\"height: auto;\"><\/p> <\/a> <div class=\"articleSection\">Komer\u010dn\u00ed sd\u011blen\u00ed<\/div>",
                "css": "",
                "faviconFallback": "",
                "nativeOptions": {
                  "titleLength": 60,
                  "descLength": 130,
                  "imgWidth": 120,
                  "imgHeight": 80,
                  "maxTitleLength": 80,
                  "maxDescLength": 170
                }
              }
            }
          }
        }],
        "s2s": false
      }, {
        "method": "split",
        "id": 0,
        "channels": [{
          "chd": {
            "id": 126961,
            "tag": "seznam-ssp",
            "flag": "Zero",
            "title": "Reklama",
            "keys": {
              "1": "241805"
            },
            "unmaskedDomain": false,
            "currency": "CZK",
            "priceType": "gross",
            "s2s": false,
            "width": 300,
            "height": 250
          },
          "weight": 100,
          "floor": 0,
          "factor": 1,
          "factorFixed": 1,
          "styles": {
            "normal": {
              "name": "n-1-article-52267",
              "count": 1,
              "options": {
                "dom": {
                  "method": "inplace",
                  "selector": "#AdTrackHomepageNativeDesktop"
                },
                "topFrame": "1",
                "wrap": "<div class=\"hpArticle AdTrack-ad-0\"><\/div>",
                "ad": " <a href=\"\" class=\"AdTrack-clickUrl-title\"> <h2 class=\"AdTrack-headline\"><\/h2> <img src=\"\" class=\"AdTrack-imageUrl\" style=\"height: auto;\"> <span class=\"grayText\"><span class=\"AdTrack-date\">d.m.Y<\/span> | Komer\u010dn\u00ed sd\u011blen\u00ed<\/span> <p class=\"AdTrack-description\" style=\"height: auto;\"><\/p> <\/a> <div class=\"articleSection\">Komer\u010dn\u00ed sd\u011blen\u00ed<\/div>",
                "css": "",
                "faviconFallback": "",
                "nativeOptions": {
                  "titleLength": 60,
                  "descLength": 130,
                  "imgWidth": 120,
                  "imgHeight": 80,
                  "maxTitleLength": 80,
                  "maxDescLength": 170
                }
              }
            },
            "product": {
              "name": "p-1-article-52269",
              "count": 1,
              "options": {
                "dom": {
                  "method": "inplace",
                  "selector": "#AdTrackHomepageNativeDesktop"
                },
                "topFrame": "1",
                "wrap": "<div class=\"hpArticle AdTrack-ad-0\"><\/div>",
                "ad": " <a href=\"\" class=\"AdTrack-clickUrl-title\"> <h2 class=\"AdTrack-headline\"><\/h2> <div style=\"float: left; margin-right: 20px; width: 120px; height: 80px; text-align: center;\"> <img src=\"\" class=\"AdTrack-imageUrl\" style=\"max-width: 120px; max-height: 80px; width: auto; height: auto; float: none; margin: 0;\"> <\/div> <span class=\"grayText\"><span class=\"AdTrack-date\">d.m.Y<\/span> | Reklama<\/span> <p style=\"height: auto; margin-top: 3px;\">Aktu\u00e1ln\u011b za <span class=\"AdTrack-price\" style=\"font-weight: bold;\"><\/span><\/p> <\/a> <a href=\"\" class=\"AdTrack-shopName AdTrack-shopUrl articleSection\"><\/a>",
                "css": "",
                "faviconFallback": ""
              }
            }
          }
        }],
        "s2s": false
      }]
    },
    "cls": {
      "headline": "AdTrack-headline",
      "description": "AdTrack-description",
      "adChoices": "AdTrack-adChoices",
      "date": "AdTrack-date",
      "ad": "AdTrack-ad-*",
      "ads": "AdTrack-ads",
      "container": "AdTrack-container",
      "promoTitle": "AdTrack-promoTitle",
      "promoIcon": "AdTrack-promoIcon",
      "promoClick": "AdTrack-promoClick",
      "closeTitle": "AdTrack-closeTitle",
      "closeClick": "AdTrack-closeClick",
      "creative1": "AdTrack-creative1",
      "creative2": "AdTrack-creative2",
      "creative3": "AdTrack-creative3",
      "creative23": "AdTrack-creative23",
      "creative123": "AdTrack-creative123",
      "bannerUrl": "AdTrack-bannerUrl",
      "bannerRel": "AdTrack-bannerRel",
      "adUrl": "AdTrack-adUrl",
      "clickUrl": "AdTrack-clickUrl-*",
      "visibleUrl": "AdTrack-visibleUrl",
      "longHeadline": "AdTrack-longHeadline",
      "companyName": "AdTrack-companyName",
      "logoUrl": "AdTrack-logoUrl",
      "squareLogoUrl": "AdTrack-squareLogoUrl",
      "screenshot": "AdTrack-screenshot",
      "screenshothq": "AdTrack-screenshothq",
      "favicon": "AdTrack-favicon",
      "cta": "AdTrack-cta",
      "imageUrl": "AdTrack-imageUrl",
      "category": "AdTrack-category",
      "logoutUrl": "AdTrack-logoutUrl",
      "title": "AdTrack-title",
      "manufacturer": "AdTrack-manufacturer",
      "price": "AdTrack-price",
      "lastPrice": "AdTrack-lastPrice",
      "discount": "AdTrack-discount",
      "condition": "AdTrack-condition",
      "additionalInfo": "AdTrack-additionalInfo",
      "productDescription": "AdTrack-productDescription",
      "shopName": "AdTrack-shopName",
      "shopSlogan": "AdTrack-shopSlogan",
      "shopUrl": "AdTrack-shopUrl",
      "shopLogoUrl": "AdTrack-shopLogoUrl",
      "cleanShopUrl": "AdTrack-cleanShopUrl",
      "confirmImpUrl": "AdTrack-confirmImpUrl",
      "productTextTemplate": "AdTrack-productTextTemplate"
    },
    "test": false
  }, null, "delivery.r2b2.cz", null, {
    "timeout": 10000,
    "ip": "50.7.159.142",
    "visitor": {
      "countryISO": "JP",
      "gdpr": 0
    },
    "publisher": {
      "id": "32",
      "tag": "ii"
    }
  });
});
// 11.1ms

window.addEventListener("beforeunload", function () {
  console.log("Final tracking before page unload.");
  monitorGlobalVariables();
});