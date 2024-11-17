const globalFuncs = ['postMessage', 'addEventListener', 'removeEventListener', 'dispatchEvent', 'localStorage.setItem', 'localStorage.getItem'];
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js-eu1.hsadspixel.net/fb.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("hs-ads-pixel-25782305", 0, {
  "data-ads-portal-id": 25782305,
  "data-ads-env": "prod",
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 25782305,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "eu1"
});
var _hsp = window._hsp = window._hsp || [];
const globalObjects = ['localStorage', 'sessionStorage'];
const originalGlobalFuncs = {};
let globStore = {};
_hsp.push(['addEnabledFeatureGates', []]);
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js-eu1.hs-banner.com/v2/25782305/banner.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("cookieBanner-25782305", 0, {
  "data-cookieconsent": "ignore",
  "data-hs-ignore": true,
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 25782305,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "eu1"
});
globalFuncs.forEach(func => {
  let splitFunc = func.split('.');
  let originalFunc = splitFunc.length > 1 ? window[splitFunc[0]][splitFunc[1]] : window[func];
  originalGlobalFuncs[func] = originalFunc;
  let proxyFunc = new Proxy(originalFunc, {
    apply: function (target, thisArg, args) {
      console.log(`[Track] Function ${func} is called`);
      trackFuncCall(func, args);
      return target.apply(thisArg, args);
    }
  });
  if (splitFunc.length > 1) window[splitFunc[0]][splitFunc[1]] = proxyFunc;else window[func] = proxyFunc;
});
globalObjects.forEach(object => {
  let originalObject = window[object];
  let proxyObject = new Proxy(originalObject, {
    set: function (target, prop, value) {
      trackObjectChange(object, prop, value);
      return Reflect.set(target, prop, value);
    },
    get: function (target, prop) {
      if (typeof target[prop] === 'function') return function (...args) {
        trackFuncCall(`${object}.${prop}`, args);
        return target[prop].apply(this, args);
      };
      trackVarRetrieve(object, prop);
      return Reflect.get(target, prop);
    }
  });
  window[object] = proxyObject;
});
!function (e, t) {
  if (!document.getElementById(e)) {
    var c = document.createElement("script");
    c.src = "https://js-eu1.hs-analytics.net/analytics/1694084100000/25782305.js", c.type = "text/javascript", c.id = e;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(c, n);
  }
}("hs-analytics");
function trackFuncCall(func, args) {
  let log = {
    event: 'Function Call',
    function: func,
    arguments: args
  };
  globStore[func] = globStore[func] ? [...globStore[func], log] : [log];
  sendToServer(log);
}
function trackObjectChange(object, prop, value) {
  let log = {
    event: 'Change Value',
    object: object,
    property: prop,
    newValue: value
  };
  globStore[prop] = globStore[prop] ? [...globStore[prop], log] : [log];
  sendToServer(log);
}
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js-eu1.hscollectedforms.net/collectedforms.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("CollectedForms-25782305", 0, {
  "crossorigin": "anonymous",
  "data-leadin-portal-id": 25782305,
  "data-leadin-env": "prod",
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 25782305,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "eu1"
});
function trackVarRetrieve(object, prop) {
  let log = {
    event: 'Retrieve Value',
    object: object,
    property: prop
  };
  globStore[prop] = globStore[prop] ? [...globStore[prop], log] : [log];
  sendToServer(log);
}
function sendToServer(data) {
  navigator.sendBeacon('/log', JSON.stringify(data));
}