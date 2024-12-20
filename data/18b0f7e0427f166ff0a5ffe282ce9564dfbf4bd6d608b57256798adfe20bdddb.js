const originalAddEventListener = window.addEventListener;
function getCookie(t) {
  var e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return e ? decodeURIComponent(e[1]) : void 0;
}
const originalRemoveEventListener = window.removeEventListener;
const originalCreateElement = document.createElement;
function setCookie(t, e) {
  var i = new Date();
  i.setTime(i.getTime() + 36e5), document.cookie = t + "=" + e + ";Domain=." + global_domain + ";expires=" + i.toUTCString();
}
const originalSetTextContent = Node.prototype.setTextContent;
const originalLocalStorageSetItem = localStorage.setItem;
function setCookieU(t, e) {
  var i = new Date();
  i.setTime(i.getTime() + 1e3 * global_uid_expire), document.cookie = t + "=" + e + ";Domain=." + global_domain + ";expires=" + i.toUTCString();
}
const originalLocalStorageGetItem = localStorage.getItem;
const eventHooks = window.eventhooks;
function insert_counter(t) {
  null !== t && "object" == typeof t && counter_array.push(t);
}
const globalVars = Object.keys(window);
function get_ref() {
  var t = document.referrer,
    e = getCookie("r");
  if (e && e.length > 0 && e != document.domain) return e;
  if (t && t.length > 3) try {
    t = new URL(t).hostname;
  } catch (e) {
    t = "";
  } else t = "";
  return t.length > 0 && t != document.domain ? (setCookie("r", t), t) : "";
}
function generateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).slice(2);
  return `id-${timestamp}-${randomString}`;
}
function isVisible(t) {
  var e = window.innerHeight;
  return t.getBoundingClientRect().top + window.pageYOffset < e + window.pageYOffset;
}
function validateEventSignature(eventName, args, expectedSignature) {
  if (args.length !== expectedSignature.length) {
    console.warn(`Event '${eventName}' expected ${expectedSignature.length} arguments, but got ${args.length}`);
    return false;
  }
  for (let i = 0; i < expectedSignature.length; i++) {
    const expectedType = expectedSignature[i];
    const actualArg = args[i];
    if (typeof actualArg !== expectedType) {
      console.warn(`Event '${eventName}' expected argument ${i + 1} to be of type '${expectedType}', but got '${typeof actualArg}'`);
      return false;
    }
  }
  return true;
}
function c3(t, e, i, o) {
  var n = global_uid;
  0 == n.length && (n = getCookie("uid")), insert_counter({
    video_id: t,
    cat_id: e,
    target: "show",
    pos: i,
    uid: n
  });
}
function getEventContext() {
  const context = {
    url: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: Date.now(),
    randomId: generateRandomId(),
    globalVars: globalVars.filter(varName => window[varName] !== null)
  };
  return context;
}
function dc3(t, e, i, o) {
  var n = global_uid;
  0 == n.length && (n = getCookie("uid")), insert_counter({
    sid: t,
    did: e,
    cat_id: i,
    target: "dshow",
    pos: o,
    uid: n
  });
}
function sendEventToServer(eventData) {
  const serverUrl = '/api/event-collector';
  const request = new XMLHttpRequest();
  request.open('POST', serverUrl);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(eventData));
}
function c(t, e, i, o, n, a, d) {
  var r = global_uid;
  0 == r.length && (r = getCookie("uid")), insert_counter({
    video_id: t,
    cat_id: e,
    target: "click",
    pos: o,
    uid: r,
    thumb_id: d
  }), counter_send();
}
window.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, args) {
    const eventName = 'addEventListener';
    const eventContext = getEventContext();
    const eventData = {
      eventName,
      args,
      context: eventContext
    };
    sendEventToServer(eventData);
    return target.apply(thisArg, args);
  }
});
function dc(t, e, i, o) {
  var n = global_uid;
  0 == n.length && (n = getCookie("uid")), insert_counter({
    sid: t,
    did: e,
    cat_id: o,
    target: "dclick",
    pos: i,
    uid: n
  }), void 0 !== mode && "ajax" == mode && counter_send();
}
window.removeEventListener = new Proxy(originalRemoveEventListener, {
  apply: function (target, thisArg, args) {
    const eventName = 'removeEventListener';
    const eventContext = getEventContext();
    const eventData = {
      eventName,
      args,
      context: eventContext
    };
    sendEventToServer(eventData);
    return target.apply(thisArg, args);
  }
});
document.createElement = new Proxy(originalCreateElement, {
  apply: function (target, thisArg, args) {
    const eventName = 'createElement';
    const eventContext = getEventContext();
    const eventData = {
      eventName,
      elementType: args[0],
      context: eventContext
    };
    sendEventToServer(eventData);
    return target.apply(thisArg, args);
  }
});
Node.prototype.textContent = new Proxy(originalSetTextContent, {
  apply: function (target, thisArg, args) {
    const eventName = 'setNodeTextContent';
    const eventContext = getEventContext();
    const eventData = {
      eventName,
      content: args[0],
      context: eventContext
    };
    sendEventToServer(eventData);
    return target.apply(thisArg, args);
  }
});
function counter_send() {
  var t = [],
    e = [],
    i = [],
    o = [];
  if (counter_array.length > 0) for (; counter_array.length > 0;) {
    var n = counter_array.pop();
    n.target && "click" === n.target ? e.push(n) : n.target && "show" === n.target ? t.push(n) : n.target && "dshow" === n.target ? o.push(n) : n.target && "dclick" === n.target && i.push(n);
  }
  if (t.length > 0) {
    var a = "show",
      d = "",
      r = 0,
      s = "";
    g = void 0 === (g = getQueryParams("p")) ? 0 : g, t.forEach(function (t) {
      d += (0 == r ? "" : ",") + t.cat_id + "_" + t.video_id + "_" + t.pos, s = t.uid, r++;
    }), (u = {}).list = d, u.target = a, u.width = window.innerWidth, u.lang = global_br_lang, u.t = Math.random(), u.uid = s, u.r = get_ref(), u.p = g, global_sort && global_sort.length > 0 && (u.s = global_sort), "object" == typeof ajax && void 0 !== ajax.get ? ajax.get("/userdata_n", u, function () {}) : $.get("/userdata_n", u, function (t) {}, "json");
  }
  if (e.length > 0) {
    a = "click", d = "", r = 0, s = "";
    g = void 0 === (g = getQueryParams("p")) ? 0 : g, e.forEach(function (t) {
      d += (0 == r ? "" : ",") + t.cat_id + "_" + t.video_id + "_" + t.pos + (t.video_id && t.video_id > 0 && t.thumb_id ? "_" + t.thumb_id : ""), s = t.uid, r++;
    }), (u = {}).list = d, u.target = a, u.width = window.innerWidth, u.lang = global_br_lang, u.t = Math.random(), u.uid = s, u.r = get_ref(), u.p = g, global_sort && global_sort.length > 0 && (u.s = global_sort), "object" == typeof ajax && void 0 !== ajax.get ? ajax.get("/userdata_n", u, function () {}) : $.get("/userdata_n", u, function (t) {}, "json");
  }
  if (o.length > 0) {
    a = "dshow", d = "", r = 0, s = "";
    var l = "";
    g = void 0 === (g = getQueryParams("p")) ? 0 : g, o.forEach(function (t) {
      d += (0 == r ? "" : ",") + t.cat_id + "_" + t.did + "_" + t.pos, s = t.uid, l = t.sid, r++;
    }), (u = {}).list = d, u.sid = l, u.target = a, u.width = window.innerWidth, u.lang = global_br_lang, u.t = Math.random(), u.uid = s, u.r = get_ref(), u.p = g;
  }
  if (i.length > 0) {
    var g, u;
    a = "dclick", d = "", r = 0, s = "", l = "";
    g = void 0 === (g = getQueryParams("p")) ? 0 : g, i.forEach(function (t) {
      d += (0 == r ? "" : ",") + t.cat_id + "_" + t.did + "_" + t.pos, s = t.uid, l = t.sid, r++;
    }), (u = {}).list = d, u.sid = l, u.target = a, u.width = window.innerWidth, u.lang = global_br_lang, u.t = Math.random(), u.uid = s, u.r = get_ref(), u.p = g;
  }
}
function showImages() {
  for (var t = document.getElementsByClassName("mon"), e = 0; e < t.length; e++) if (t[e].classList.contains("mon")) {
    var i = t[e].getAttribute("data-vid"),
      o = t[e].getAttribute("data-cid"),
      n = t[e].getAttribute("data-pid");
    i = null !== i ? parseInt(i) : 0, o = null === o || isNaN(o) ? 0 : parseInt(o), n = null !== n ? parseInt(n) : 0, isVisible(t[e]) && (i > 0 || o > 0) && null == visibled[i + " " + o] && 1 == loaded[i + " " + o] && (visibled[i + " " + o] = 1, c3(i, o, n, nol ? 0 : 1), nol = 0);
  }
  t = document.getElementsByClassName("don");
  nol = 1;
  for (e = 0; e < t.length; e++) if (t[e].classList.contains("don")) {
    var a = t[e].getAttribute("data-sid");
    a = parseInt(a) > 0 ? parseInt(a) : 0;
    var d = t[e].getAttribute("data-did");
    d = parseInt(d) > 0 ? parseInt(d) : 0;
    o = t[e].getAttribute("data-cid");
    o = parseInt(o) > 0 ? parseInt(o) : 0;
    n = t[e].getAttribute("data-pid");
    n = parseInt(n) > 0 ? parseInt(n) : 0, isVisible(t[e]) && a > 0 && d > 0 && null == visibled[a + "-don-" + d] && (dc3(a, d, o, n), nol = 0, visibled[a + "-don-" + d] = 1);
  }
}
function mainload() {
  setInterval(counter_send, 1200);
  get_ref(), null == getCookie("uid") && setCookieU("uid", global_uid), showImages();
  setInterval(showImages, 1200);
}
localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
  apply: function (target, thisArg, args) {
    const eventName = 'localStorageSetItem';
    const eventContext = getEventContext();
    const eventData = {
      eventName,
      key: args[0],
      value: args[1],
      context: eventContext
    };
    sendEventToServer(eventData);
    return target.apply(thisArg, args);
  }
});
function getQueryParams(t) {
  var e = window.location.search;
  e = e.split("+").join(" ");
  for (var i, o = {}, n = /[?&]?([^=]+)=([^&]*)/g; i = n.exec(e);) o[decodeURIComponent(i[1])] = decodeURIComponent(i[2]);
  return o.p;
}
localStorage.getItem = new Proxy(originalLocalStorageGetItem, {
  apply: function (target, thisArg, args) {
    const eventName = 'localStorageGetItem';
    const eventContext = getEventContext();
    const eventData = {
      eventName,
      key: args[0],
      value: originalLocalStorageGetItem.call(thisArg, args[0]),
      context: eventContext
    };
    sendEventToServer(eventData);
    return target.apply(thisArg, args);
  }
});
"function" == typeof docReady ? docReady(mainload) : $(mainload);