const originalAddEventListener = window.addEventListener;
const originalCreateElement = document.createElement;
var um_services = {
  ulog: {
    urid: "ulog",
    name: "ULOG",
    name_ja: "ブログ"
  },
  que: {
    urid: "que",
    name: "QUE9",
    name_ja: "Q&A"
  },
  img: {
    urid: "img",
    name: "IMELOG",
    name_ja: "画像"
  }
};
const originalSetItem = localStorage.setItem;
const originalGetItem = localStorage.getItem;
const originalXHR = window.XMLHttpRequest.prototype.open;
var um_services_ja = {
  uranai: {
    tls: 1,
    name: "占ツク"
  },
  commu: {
    tls: 1,
    name: "COMMU"
  },
  iralog: {
    tls: 1,
    name: "IRALOG",
    name_ja: "イラスト"
  },
  aruaru: {
    urid: "aruaru",
    name: "ARUARU",
    name_ja: "あるある"
  }
};
const originalFetch = window.fetch;
const eventHooks = window.eventhooks;
var um_promotions = {};
window.globalVarCollection = {};
function generateRandomId() {
  return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + new Date().getTime().toString(36);
}
var um_promotions_ja = {
  ulog: {
    text: "ULOGで簡単にブログをはじめよう！",
    link: "http://bit.ly/1FzCmfl"
  },
  que: {
    text: "気軽に質問、質問コミュニティ QUE9",
    link: "http://bit.ly/1z7tyv2"
  }
};
function validateEventSignature(eventName, args, expectedSignature) {
  let pass = args.length === expectedSignature.length;
  for (let i = 0; pass && i < args.length; i++) {
    pass = typeof args[i] === expectedSignature[i];
  }
  return pass;
}
if (document.location.protocol == "https:") {
  var cprotocol = "https://";
} else {
  var cprotocol = "http://";
}
function getEventContext() {
  return {
    url: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    randomId: generateRandomId()
  };
}
function sendEventToServer(eventData) {
  var serverUrl = '/api/event-collector';
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", serverUrl, true);
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  xmlhttp.send(JSON.stringify(eventData));
}
function createEventHook(eventName, originalFunc, eventSignature) {
  return function () {
    const args = Array.prototype.slice.call(arguments);
    if (validateEventSignature(eventName, args, eventSignature)) {
      const context = getEventContext();
      sendEventToServer({
        eventName,
        args,
        context
      });
    }
    return originalFunc.apply(this, args);
  };
}
function getUMServices(g) {
  var q = $.cookie("umud");
  if (q == "" || q == null) {
    q = [];
  } else {
    q = q.split(",");
  }
  var m = um_services;
  var l = um_services_ja;
  var n = 0;
  if (g.locale.match(/^ja/)) {
    $.extend(m, l);
    n = 1;
  }
  var e;
  var j = {};
  var o = [];
  var c = document.location.href;
  c = c.replace("https://", "http://");
  var k = "";
  for (e in m) {
    var h = m[e];
    if (h.tls == 1) {
      var b = "http://" + e + ".nosv.org/";
    } else {
      if (h.urid != undefined) {
        var b = "http://" + h.urid + ".u.nosv.org/";
      } else {
        var b = "http://" + e + ".u.nosv.org/";
      }
    }
    if (c.indexOf(b) == -1) {
      if (h.newicon == 1) {
        var p = ' <span style="color:#fff;font-size:0.5em;display:inline-block;background-color:red;padding:0px 3px">N</span>';
      } else {
        var p = "";
      }
      if (n && h.name_ja != undefined) {
        var a = h.name_ja;
      } else {
        var a = h.name;
      }
      j[e] = '<a href="' + b + '" style="color:#505050">' + a + "</a>" + p;
    } else {
      k = e;
    }
  }
  var f = {};
  for (e in q) {
    f[q[e]] = 1;
    if (j[q[e]] != "" && j[q[e]] != undefined) {
      o.push(j[q[e]]);
    }
  }
  for (e in m) {
    if (f[e] == 1) {
      continue;
    }
    if (j[e] != "" && j[e] != undefined) {
      o.push(j[e]);
    }
  }
  if (k != "") {
    var d = [];
    for (e in q) {
      if (q[e] != k) {
        d.push(q[e]);
      }
    }
    d.unshift(k);
    if (d.length > g.maxhist) {
      d.pop();
    }
    $.cookie("umud", d.join(","), {
      expires: 14,
      path: "/",
      domain: "nosv.org"
    });
  }
  return o;
}
function createGlobalVarKeyValHook(variableName, value) {
  window.globalVarCollection[variableName] = value;
}
eventHooks.forEach(eventHook => {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
  }
});
function getUMPromotions(d) {
  var a = um_promotions;
  var f = um_promotions_ja;
  var c = 0;
  if (d.locale.match(/^ja/)) {
    $.extend(a, f);
    c = 1;
  }
  var e = [];
  for (var h in a) {
    e.push(h);
  }
  var b = e[Math.floor(Math.random() * e.length)];
  var g = a[b];
  if (g.text != undefined && g.link != undefined) {
    return '<a href="' + g.link + '">' + g.text + "</a>";
  }
}
function js_rand(b, a) {
  var c = arguments.length;
  if (c === 0) {
    b = 0;
    a = 2147483647;
  } else {
    if (c === 1) {
      return 0;
    }
  }
  return Math.floor(Math.random() * (a - b + 1)) + b;
}
window.addEventListener = createEventHook('addEventListener', originalAddEventListener, ["string", "function"]);
(function (a, b) {
  a.fn.umbar = function (c) {
    var e, d;
    c = a.extend({
      barstyle: "border-bottom:solid 1px #f0f0f0;",
      marginBottom: "8",
      locale: "ja",
      maxhist: 6,
      smartphone: 1
    }, c);
    this.each(function () {
      var g = "";
      g += '<style type="text/css">';
      g += '#umbar{text-align:left;font-family:Meiryo,"Osaka",helvetica,verdana,arial,sans-serif;font-size:12px;}.umclmn{float:left}';
      g += "</style>";
      var i = a(this).width();
      var h = i - 70;
      if (i > 400 || c.smartphone != 1) {
        c.barstyle += ";margin-bottom:" + c.marginBottom + "px;border-bottom:solid 1px #ccc;";
        h -= 50;
      }
      g += '<div id="umbar" style="background-color:#fff;padding:3px;' + c.barstyle + '" class="clearfix">';
      g += '<div class="umclmn" style="width:26px;margin-left:1px">';
      g += '<a href="http://umedia.nosv.org/"><img src="' + cprotocol + 'cimg.nosv.org/umedia/img/icon.png" style="width:18px;height:18px;margin-top:1px;" align="absmiddle"></a> ';
      g += "</div>";
      g += '<div id="umlinks" class="umclmn" style="overflow:hidden;line-height:20px;height:20px;width:' + h + 'px;">';
      if (0 && js_rand(1, 10) > 7) {
        g += getUMPromotions(c);
      } else {
        var f = getUMServices(c);
        g += f.join('<span style="color:#f0f0f0"> | </span>');
      }
      g += "</div>";
      g += '<div class="umclmn" style="line-height:20px;text-align:right;float:right;padding-right:4px;width:28px">';
      g += '<a href="http://umedia.nosv.org/"><img src="' + cprotocol + 'cimg.nosv.org/umedia/img/list.gif" style="width:14px;height:14px;margin-top:3px"></a>';
      g += "</div>";
      g += "</div>";
      a("body").css({
        "padding-top": "0px",
        "margin-top": "0"
      });
      a(this).prepend(g);
      a(window).resize(function () {
        a("#umlinks").css("width", a("#umbar").width() - 70 + "px");
      });
    });
    return this;
  };
})(jQuery);
window.XMLHttpRequest.prototype.open = createEventHook('sendRequest', originalXHR, ["string", "string"]);
(function (a, b) {
  a.fn.umicon = function (d) {
    var f, e;
    d = a.extend({
      relative: false,
      locale: "ja",
      maxhist: 4,
      top: 10,
      left: 10
    }, d);
    function c(g) {}
    this.each(function () {
      var i = a(this).offset().left;
      var h = "";
      var g = getUMServices(d);
      if (d.relative) {
        h += '<div style="position:relative">';
      } else {
        d.left += i;
      }
      h += '<div style="position:absolute;left:' + d.left + "px;top:" + d.top + 'px;">';
      h += '<a href="http://umedia.nosv.org/"><img src="' + cprotocol + 'cimg.nosv.org/umedia/img/icon.png" style="width:20px;height:20px;"></a>';
      h += "</div>";
      if (d.relative) {
        h += "</div>";
      }
      a(this).append(h);
    });
    return this;
  };
})(jQuery);
window.fetch = createEventHook('fetch', originalFetch, ["string"]);
document.createElement = createEventHook('createElement', originalCreateElement, ["string"]);
localStorage.setItem = createEventHook('localStorageSetItem', originalSetItem, ["string", "string"]);
localStorage.getItem = createEventHook('localStorageGetItem', originalGetItem, ["string"]);
for (let key in window) {
  if (!window.hasOwnProperty(key)) continue;
  const originalVar = window[key];
  if (typeof originalVar === 'object' || typeof originalVar === 'function') {
    createGlobalVarKeyValHook(key, originalVar);
  }
}