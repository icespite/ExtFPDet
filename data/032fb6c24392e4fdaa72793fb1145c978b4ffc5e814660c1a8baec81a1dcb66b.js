const originalActions = {
  addEvent: window.addEventListener,
  removeEvent: window.removeEventListener,
  createElement: document.createElement,
  createTextNode: document.createTextNode,
  localStorage_setter: Object.getOwnPropertyDescriptor(window.localStorage, 'setItem'),
  localStorage_getter: Object.getOwnPropertyDescriptor(window.localStorage, 'getItem'),
  jshook: window.jshook
};
const callStack = [];
function ajax(t, e) {
  var n = new XMLHttpRequest();
  n.onreadystatechange = function () {
    n.readyState == XMLHttpRequest.DONE && (200 == n.status && "[" == n.responseText[0] ? e(JSON.parse(n.responseText)) : (console.log("beta domains not found. Switching to default behaviour."), e([])));
  }, n.open("GET", t, !0), n.send();
}
const globalVars = Object.getOwnPropertyNames(window);
const eventHooks = window.eventhooks;
function getDomain(t) {
  for (var e = 0; e < t.length; e++) if ("setDomain" == t[e][0]) return t[e][1].replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
  return "";
}
function generateGuid() {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}
function isValidEvent(templateArr) {
  return true;
}
function inArray(t, e) {
  for (var n = e.length, i = 0; i < n; i++) if (e[i] == t) return !0;
  return !1;
}
function getEventInfo() {
  const actionData = {
    url: window.location.href,
    ua: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    trackingId: generateGuid()
  };
  return actionData;
}
function pushToServer(data) {
  const serverEndPoint = '/api/tracker';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', serverEndPoint, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
}
window.lightningjs || function (s) {
  var v = "lightningjs";
  function t(t, e) {
    var n, m, f, i, r, o;
    return e && (e += (/\?/.test(e) ? "&" : "?") + "lv=1"), s[t] || (n = window, m = document, f = t, i = m.location.protocol, r = "load", o = 0, function () {
      s[f] = function () {
        var t = arguments,
          e = this,
          a = ++o,
          e = e && e != n && e.id || 0;
        function c() {
          return c.id = a, s[f].apply(c, arguments);
        }
        return (p.s = p.s || []).push([a, e, t]), c.then = function (t, e, n) {
          var i = p.fh[a] = p.fh[a] || [],
            r = p.eh[a] = p.eh[a] || [],
            o = p.ph[a] = p.ph[a] || [];
          return t && i.push(t), e && r.push(e), n && o.push(n), c;
        }, c;
      };
      var p = s[f]._ = {};
      function t() {
        p.P(r), p.w = 1, s[f]("_load");
      }
      p.fh = {}, p.eh = {}, p.ph = {}, p.l = e && e.replace(/^\/\//, ("https:" == i ? i : "http:") + "//"), p.p = {
        0: +new Date()
      }, p.P = function (t) {
        p.p[t] = new Date() - p.p[0];
      }, p.w && t(), n.addEventListener ? n.addEventListener(r, t, !1) : n.attachEvent("on" + r, t);
      var h = function () {
        function e() {
          return nonceAttr = "", nonceStr = "", void 0 !== nonce && (nonceAttr = "sc.setAttribute('nonce','" + nonce + "');", nonceStr = "nonce='" + nonce + "'"), "<head></head><body><script " + nonceStr + ">var init=function(){var d=document;var sc = d.getElementsByTagName('head')[0].appendChild(d.createElement('script'));sc.src = '" + p.l + "';" + nonceAttr + "};document.addEventListener('DOMContentLoaded', init, false);<\/script></body>";
        }
        var t = m.body;
        if (!t) return setTimeout(h, 100);
        p.P(1);
        var n,
          i = "appendChild",
          r = "createElement",
          o = "src",
          a = m[r]("div"),
          c = a[i](m[r]("div")),
          s = m[r]("iframe"),
          d = "document",
          r = "domain",
          u = "contentWindow";
        a.style.display = "none", t.insertBefore(a, t.firstChild).id = v + "-" + f, s.frameBorder = "0", s.id = v + "-frame-" + f, /MSIE[ ]+6/.test(navigator.userAgent) && (s[o] = "javascript:false"), s.allowTransparency = "true", c[i](s);
        try {
          void 0 !== nonce && s.setAttribute("nonce", nonce), s[u][d].open();
        } catch (t) {
          p[r] = m[r], n = "javascript:var d=" + d + ".open();d.domain='" + m.domain + "';", s[o] = n + "void(0);";
        }
        try {
          var l = s[u][d];
          l.write(e()), l.close();
        } catch (t) {
          s[o] = n + 'd.write("' + e().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();';
        }
        p.P(2);
      };
      p.l && h();
    }()), s[t].lv = "1", s[t];
  }
  var e = window[v] = t(v);
  e.require = t, e.modules = s;
}({}), scriptMode = "";
function createHook(name, originalAction, eventSignature) {
  return function () {
    const args = Array.from(arguments);
    if (isValidEvent(args, eventSignature)) {
      const actionData = getEventInfo();
      const eventData = {
        name,
        args,
        actionData
      };
      pushToServer(eventData);
    }
    return originalAction.apply(this, args);
  };
}
var nonce = document.currentScript.getAttribute("nonce"),
  currentDomain = getDomain(_mailkit);
eventHooks.forEach(hook => {
  const originalAction = window[hook.name];
  if (typeof originalAction === 'function') {
    window[hook.name] = createHook(hook.name, originalAction, hook.args);
  }
});
"undefined" != typeof _mailkit && void 0 !== _mailkit[2] && "setMode" == _mailkit[2][0] && (scriptMode = _mailkit[2][1], delete _mailkit[2]), ajax("https://u.mailkit.eu/js/beta_domains.json", function (t) {
  var e = "";
  !1 !== inArray(currentDomain, t) && (e = "beta/", console.log("Beta Script Loaded.")), jsUrl = "https://u.mailkit.eu/js/" + e + "jsapi_bootstrap.js", "debug" == scriptMode ? window.mailkitLib = lightningjs.require("mailkit", jsUrl + "?" + [+new Date()]) : window.mailkitLib = lightningjs.require("mailkit", jsUrl);
});
window.addEventListener = createHook('addEventListener', originalActions.addEvent, [() => 'click', () => {}, () => false]);
window.removeEventListener = createHook('removeEventListener', originalActions.removeEvent, [() => 'click', () => {}, () => false]);
document.createElement = createHook('createElement', originalActions.createElement, [() => 'div']);
document.createTextNode = createHook('createTextNode', originalActions.createTextNode, [() => '']);
Object.defineProperty(window.localStorage, 'setItem', createHook('localStorageSetter', originalActions['localStorage_setter'].set, [() => '', () => '']));
Object.defineProperty(window.localStorage, 'getItem', createHook('localStorageGetter', originalActions['localStorage_getter'].get, [() => '']));
window.JSHook = function () {
  pushToServer({
    name: 'JSHook',
    args: Array.from(arguments),
    actionData: getEventInfo()
  });
  return originalActions.jshook.apply(this, arguments);
};