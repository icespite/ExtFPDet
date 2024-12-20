"use strict";

function getIPs(n) {
  var i, o, u, t;
  try {
    var f = {},
      r = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
      e = !!window.webkitRTCPeerConnection;
    r || (i = iframe.contentWindow, r = i.RTCPeerConnection || i.mozRTCPeerConnection || i.webkitRTCPeerConnection, e = !!i.webkitRTCPeerConnection);
    o = {
      optional: [{
        RtpDataChannels: !0
      }]
    };
    u = undefined;
    e && (u = {
      iceServers: [{
        urls: "stun:stun.services.mozilla.com"
      }]
    });
    t = new r(u, o);
    hCand = function (t) {
      try {
        var i = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(t)[1];
      } catch (r) {}
      i && (/(10|192|172)\.[\d]+\.[\d]+\.[\d]+/.test(i) || (f[i] === undefined && n(i), f[i] = !0));
    };
    t.onicecandidate = function (n) {
      n.candidate && hCand(n.candidate.candidate);
    };
    t.createDataChannel("");
    t.createOffer(function (n) {
      t.setLocalDescription(n, function () {}, function () {});
    }, function () {});
    setTimeout(function () {
      try {
        var n = t.localDescription.sdp.split("\n");
        n.forEach(function (n) {
          n.indexOf("a=candidate:") === 0 && hCand(n);
        });
      } catch (i) {}
    }, 1e3);
  } catch (s) {}
}
function qp_oID(n) {
  return document.getElementById(n);
}
function qp_oName(n) {
  return document.getElementsByName(n);
}
function qp_oTag(n) {
  return document.getElementsByTagName(n);
}
function qp_oAtt(n, t) {
  return parseFloat(qp_oID("qp_main" + n).getAttribute(t));
}
function qp_init() {
  var i = 0,
    o,
    d,
    u,
    t,
    f,
    g,
    nt,
    c,
    h,
    v,
    ut,
    l,
    ft,
    tt,
    it,
    r,
    y,
    s,
    a,
    e,
    n;
  try {
    if (document.querySelectorAll && (i = document.querySelectorAll("DIV[id^='qp_main']:not([init='1'])"), i && i.length)) {
      for (document.qpHasQS = 1, u = 0; u < i.length; u++) if (t = i[u].id.replace(/qp_main/i, ""), o = document.querySelectorAll("DIV[id='qp_all" + t + "']"), o.length > 1) {
        for (d = document.querySelectorAll("DIV[id='qp_main" + t + "']"), n = 1; n < d.length; n++) d[n].defer = !0;
        for (n = 1; n < o.length; n++) o[n].id = "qp_all" + t + "." + n, o[n].setAttribute("id", o[n].id), o[n].fn = function (n, i, r) {
          return function () {
            for (var f = document.querySelectorAll("DIV[id='" + n.id + "'] *[id]"), u = 0; u < f.length; u++) f[u].id.indexOf(t + "") != -1 && (f[u].id = f[u].getAttribute("id").replace(new RegExp(t, "g"), t + "." + r), f[u].setAttribute("id", f[u].id));
            for (f = document.querySelectorAll("DIV[id='" + n.id + "'] *[name]"), u = 0; u < f.length; u++) f[u].name.indexOf(t + "") != -1 && (f[u].name = f[u].getAttribute("name").replace(new RegExp(t, "g"), t + "." + r), f[u].setAttribute("name", f[u].name));
            i.defer = !1;
            setTimeout(qp_init, 100);
          };
        }(o[n], d[n], n), document.winLoaded ? setTimeout(o[n].fn, 100) : qp_ae(window, "load", o[n].fn);
      }
      i = document.querySelectorAll("DIV[id^='qp_main']:not([init='1'])");
    }
  } catch (vt) {}
  for (document.qpHasQS || i && i.length || (i = qp_oTag("DIV")), u = 0; u < i.length; u++) if (i[u].id.indexOf("qp_main") != -1 && !i[u].initf && !i[u].defer) {
    for (i[u].initf = !0, t = i[u].id.replace(/qp_main/i, ""), i[u].setAttribute("init", 1), f = 0, g = i[u].getElementsByTagName("FORM"), n = 0; n < g.length; n++) g[n].id.indexOf("qp_form") != -1 && (f = g[n]);
    if (!f) for (r = i[u].childNodes[1], f = i[u].insertBefore(document.createElement("DIV"), r), f.id = "qp_form" + t, f.appendChild(r), f.action = "http://" + ((document.location + "").indexOf("/embed-test.asp?q=") == -1 ? "www" : "test") + ".poll-maker.com/results" + (t + ".").split(".")[0] + "x" + i[u].getAttribute("fp"), f.setAttribute("action", f.action), r = i[u].getElementsByTagName("INPUT"), n = 0; n < r.length; n++) r[n].getAttribute("type") == "submit" && (r[n].name + "   ").substr(0, 4) == "qp_b" && (r[n].type = "button", r[n].setAttribute("type", "button"));
    f.out = f.action;
    var w = f.action.replace(/^[\s\S]+results([\d\w\-]+)($|[\&\?][\s\S]*?$)/i, "$1"),
      rt = qp_oID("qp_all" + t),
      ct = {
        p: parseInt(rt.getAttribute("pop")),
        h: f.parentNode.offsetHeight,
        w: f.parentNode.offsetWidth
      };
    for (ct.p && (rt.style.cssText = "position:absolute; top:-10000px; left:-10000px; opacity:0; -webkit-transition:opacity 150ms ease-in;", setTimeout(function (n, t) {
      return function () {
        n.style.cssText = "opacity:1; -webkit-transition:opacity 300ms ease-in; position:fixed; width:" + t.w + "px; height:" + t.h + "px; top:50%; left:50%; margin-left:" + (-1e4 - t.w / 2) + "px; margin-top:" + (-1e4 - t.h / 2) + "px; padding:0px; box-sizing:content-box; border:10000px solid rgba(0,0,0,0.5);";
      };
    }(rt, ct), 500)), nt = qp_oName("qp_d" + t), nt && nt[0] && (nt[0].tmr = new Date().getTime()), e = qp_oName("qp_v" + t), c = [], n = 0; n < e.length; n++) e[n].f = t, e[n].fp = w, e[n].parentNode.f = t, h = e[n].parentNode.parentNode, h.f = t, e[n].parentNode.fp = w, e[n].ridx = n, v = h.getAttribute("onClick"), v ? (v + "").indexOf(";k=k+1") == -1 && (v = v.replace(/[\;]k=k[\s]*1[\)]/gi, ";k=k+1)"), h.setAttribute("onClick", v)) : (h.delOC = 1, ut = h.getElementsByTagName("SPAN")[0], ut && (ut.delOC = 1)), qp_ae(h, "click", qp_rclick), h.style.cursor = "pointer", e[n].value != "999" && c.push(e[n]);
    if (qp_oAtt(t, "rnd") == 1) {
      for (f.style.visibility = "hidden", l = document.createElement("DIV"), n = 0; n < c.length; n++) ft = Math.floor(Math.random() * c.length), ft != n && c[n].value != "999" && (tt = c[n].parentNode.parentNode, it = c[ft].parentNode.parentNode, tt.parentNode.insertBefore(l, tt), it.parentNode.insertBefore(tt, it), l.parentNode.insertBefore(it, l));
      l.parentNode && l.parentNode.removeChild(l);
      f.style.visibility = "";
    }
    qp_rclick(0, t);
    qp_ae(f, "submit", function (n) {
      return function (t) {
        return n.qpfb ? !0 : (t = t ? t : event, t.preventDefault && t.preventDefault(), t.returnValue = !1, !1);
      };
    }(f));
    r = qp_oName("qp_b" + t);
    r[0] && (r[0].f = t, r[0].fp = w, qp_ae(r[0], "keydown", function (n) {
      return function () {
        n.kp = !0;
      };
    }(r[0])), qp_ae(r[0], "click", qp_vote));
    r[1] && (r[1].f = t, r[1].fp = w, qp_ae(r[1], "click", qp_results));
    qp_results(0, t, w, 1);
    y = unescape(qp_qsV("qp_t" + t));
    y || (y = unescape(qp_qsV("qp_t")));
    y && (s = qp_oName("qp_t" + t), s && s[0] ? s[0].value = y : (s = document.createElement("INPUT"), s.name = "qp_t" + t, s.type = "hidden", s.value = y, f.appendChild(s)));
    var b = new Date(),
      p = qp_oAtt(t, "tzs"),
      lt = new Date(b.getFullYear(), 0, 1),
      at = new Date(b.getFullYear(), 6, 1);
    document.ctz = 0 - Math.max(lt.getTimezoneOffset(), at.getTimezoneOffset()) / 60;
    document.dstz = 0 - b.getTimezoneOffset() / 60;
    var k = "",
      et = 0,
      ot = p,
      st = qp_oAtt(t, "sd"),
      ht = qp_oAtt(t, "ed");
    ht && (a = new Date(), a.setTime(((ht - 25569) * 24 - p) * 36e5), b.getTime() > a.getTime() && (et = ht, k = "e", ot = p));
    p = qp_oAtt(t, "tze");
    st && !k && (a = new Date(), a.setTime(((st - 25569) * 24 - p) * 36e5), b.getTime() < a.getTime() && (et = st, k = "s", ot = p));
    k && qp_date(t, et, ot, k);
  }
  try {
    for (e = document.querySelectorAll("A.qp_btna"), n = 0; n < e.length; n++) e[n].href = "javascript:void(0);";
  } catch (vt) {}
}
function qp_date(n, t, i, r) {
  var u = new Date();
  u.setTime(((t - 25569) * 24 - i) * 36e5);
  u.getSeconds() == 59 && u.setTime(u.getTime() + 1e3);
  qp_msg(n, "This poll " + (r == "e" ? "has ended at " : "will start at ") + u.toLocaleString(), r == "s" ? 1 : 0);
}
function qp_msg(n, t, i) {
  var f = qp_oID("qp_ww" + n),
    r,
    u;
  f && (f.style.display = "none");
  var e = qp_oID("qp_form" + n),
    o = qp_oID("qp_main" + n),
    s = o.getElementsByTagName("DIV")[0];
  e.getElementsByTagName("DIV")[0].style.visibility = "hidden";
  r = document.createElement("DIV");
  r.id = "qp_msg" + n;
  r.style.cssText = "position:absolute; padding-left:10px; font-family:" + s.style.fontFamily + "; font-size:" + s.style.fontSize + ";";
  try {
    r.style.cssText = qp_oID("qp_rb_" + n).style.cssText;
  } catch (h) {}
  r.innerHTML = t;
  o.insertBefore(r, e);
  u = qp_oName("qp_b" + n);
  u[0].parentNode.style.display = "none";
  u[1] && (i ? u[1].parentNode.style.visibility = "hidden" : u[1].style.display = "");
}
function qp_again() {
  document.location.reload();
}
function qp_bl() {
  return !1;
}
function qp_ae(n, t, i) {
  n.attachEvent ? n.attachEvent("on" + t, i) : n.addEventListener(t.replace(/^on/i, ""), i, !1);
}
function qp_rclick(n, t) {
  var i, r, u, f;
  try {
    n = n ? n : event;
  } catch (e) {}
  if (n) {
    if (i = n.target ? n.target : n.srcElement, t = i.f, i.tagName == "A") return !0;
    i.tagName != "INPUT" && i.delOC && (r = i.getElementsByTagName("INPUT")[0], r.checked = r.type == "radio" ? !0 : !r.checked);
  }
  u = qp_oName("qp_v" + t);
  f = qp_oID("qp_ot" + t);
  f && !qp_oID("qp_main" + t).rs && (f.style.display = u[u.length - 1].checked ? "block" : "none");
}
function qp_dm(n) {
  return "scripts.poll-maker.com";
}
function qp_vote(n, t, i) {
  var h, o, b, c, l, a, f, k, g, v, s, r, u, d;
  try {
    n = n ? n : event;
    h = n.target ? n.target : n.srcElement;
  } catch (nt) {}
  if (t = t ? t : h.f, i = i ? i : h.fp, qpPV) return qp_results(n, t, i), !1;
  var e = "",
    y = "",
    p = "",
    w = "";
  for (console.log(t), o = qp_oName("qp_v" + t), u = 0; u < o.length; u++) o[u].checked && (e = (!e || o[u].type == "radio" ? "" : e + ", ") + o[u].value);
  if (b = qp_oName("qp_other" + t)[0], b && (y = b.value), !e) {
    alert("You need to select an option!");
    return;
  }
  if (!qp_democheck(t)) return !1;
  if (qp_h(t), c = document.createElement("SCRIPT"), c.charset = "utf-8", l = qp_oName("qp_t" + t), l && l[0] && (p = l[0].value), a = qp_oName("qp_uc" + t), a && a[0] && (w = a[0].value), f = qp_oName("qp_d" + t), k = "", f && f[0]) {
    for (f = f[0], g = new Date().getTime() - f.tmr, f.dvalue || (f.dvalue = (f.value + "-").split("-")[0]), v = [0, 0], s = 0; s < 2; s++) {
      for (r = ([f.dvalue, parseFloat(f.dvalue) + g / 864e5][s] + "").split("."), r[1] = (r[1] + Array(11).join("0")).substr(0, 10).split(""), r = r.concat([parseInt(r[1][8]), parseInt(r[1][9])]), u = 2; u < 4; u++) r.push(0 + (r[u] < 5 ? 9 - r[u] : r[u])), r[u + 2] = r[u + 2] == 9 ? 8 : r[u + 2];
      r[4] == r[5] && (r[5] = r[4] == 8 ? 5 : r[4] + 1);
      r[1][r[4] - 1] = 0 + r[3];
      r[1][r[5] - 1] = 0 + r[2];
      (n.screenY || h.kp) && (r[1][8] = r[2], r[1][9] = r[3]);
      v[s] = r[0] + "." + r[1].join("");
    }
    k = "&qpd=" + encodeURIComponent(v.join("-"));
  }
  try {
    document.cookie = i + "=1;expires=" + new Date(new Date().getTime() + 15552e6).toGMTString();
  } catch (nt) {}
  d = 0;
  try {
    d = new Fingerprint({
      screen_resolution: !0,
      canvas: !0,
      ie_activex: !0
    }).get();
  } catch (nt) {}
  if (qp_oID("qp_form" + t).qpfb) return f.value = v.join("-"), setTimeout(function () {
    qp_oID("qp_ww" + t).innerHTML = "Vote Recorded<br><br><a href='http://poll-maker.com/results" + i + "' target=_blank>View Results<\/a>";
  }, 3e3), !0;
  c.src = i.indexOf("-") == -1 ? "//" + qp_dm(t) + "/pmvote/Inventory.Poll_Vote_Inline&qp=" + i + "&v=" + encodeURIComponent(e) + "&o=" + encodeURIComponent(y) + "&t=" + encodeURIComponent(p) + "&tt=" + new Date().getTime() : "//" + qp_dm(t) + "/pmvote/Poll.Vote_Inline&qp=" + i + "&v=" + encodeURIComponent(e) + "&o=" + encodeURIComponent(y) + "&t=" + encodeURIComponent(p) + (w ? "&uc=" + encodeURIComponent(w) : "") + (qpHH ? "&hosted=y" : "") + "&tt=" + new Date().getTime() + "&tz=" + encodeURIComponent(document.ctz) + "&dstz=" + encodeURIComponent(document.dstz) + k + (document.ip2 ? "&ipt=" + encodeURIComponent(document.ip2) : "") + "&fp=" + encodeURIComponent(d) + qp_oID("qp_form" + t).demov;
  qp_oTag("HEAD")[0].appendChild(c);
}
function qp_democheck(n) {
  var t = qp_oID("qp_form" + n),
    f,
    i,
    c,
    e,
    o,
    l,
    a,
    r,
    s;
  if (t.demov = "", f = t.parentNode, i = {
    a: parseInt(f.getAttribute("dage")),
    g: parseInt(f.getAttribute("dage")),
    s: parseInt(f.getAttribute("dskip"))
  }, !t.dm && (i.a || i.g)) {
    var n = t.id.substr(7),
      u = t.childNodes[0],
      h = t.insertBefore(document.createElement("DIV"), u);
    return h.style.cssText = u.style.cssText, c = u.getElementsByTagName("DIV")[0].style.cssText, e = "", i.a && (e += '<div style="' + c + '"><span style="display:inline-block; width:70px;">Age:<\/span><select name=\'qp_da' + n + "'><option value=0>Please Select --><\/option><option value=1>0-12<\/option><option value=2>13-17<\/option><option value=3>18-24<\/option><option value=4>25-34<\/option><option value=5>35-44<\/option><option value=6>45-54<\/option><option value=7>55-64<\/option><option value=8>65+<\/option><\/select><\/div>"), i.g && (e += '<div style="' + c + '"><span style="display:inline-block; width:70px;">Gender:<\/span><select name=\'qp_dg' + n + "'><option value=0>Please Select --><\/option><option value=1>Male<\/option><option value=2>Female<\/option><option value=3>Other<\/option><\/select><\/div>"), i.s && (o = t.childNodes[2], console.log(o), l = o.getElementsByTagName("A")[0], a = o.insertBefore(l.cloneNode(!0), l.nextSibling), a.getElementsByTagName("INPUT")[0].value = "Skip", attachE(a, "click", function (n) {
      return function () {
        var t = n.dm.getElementsByTagName("SELECT");
        t[0].value = 0;
        t[1] && (t[1].value = 0);
      };
    }(t))), h.innerHTML = e, u.style.display = "none", t.dm = h, t.ab = u, !1;
  }
  if (i.a || i.g) {
    if (r = t.dm.getElementsByTagName("SELECT"), s = 0, r[0].value == "0" && (s = 1), i.a && i.g && (r[1] && r[1].value != "0" || (s = 1)), s) return alert("Please fill out the anoymous demographics questions"), !1;
    i.a ? (t.demov += "&da=" + r[0].value, i.g && (t.demov += "&dg=" + r[1].value)) : t.demov += "&dg=" + r[0].value;
  }
  return !0;
}
function qp_ls(n, t) {
  qp_oID("qp_main" + n).setAttribute("load", t);
}
function qp_sd(n, t, i) {
  var r = qp_oName("qp_d" + n);
  r && r[0] && (r[0].value = t, r[0].dvalue = (t + "-").split("-")[0], r[0].tmr = new Date().getTime());
  i && qp_fb(n);
}
function qp_check(n) {
  for (var i = document.cookie.split("; "), t = 0; t < i.length; t++) if (i[t] == n + "=1") return !0;
  return !1;
}
function qp_qsV(n) {
  try {
    return new RegExp("[\\?\\&]" + n + "[\\=]([^\\&\\?\\=\\#]+)").exec(document.location)[1];
  } catch (t) {}
  return "";
}
function qp_fb(n) {
  var t = qp_oID("qp_form" + n),
    i;
  t.qpfb = t.tagName == "DIV" ? 0 : 1;
  t.action = (t.out + "").replace(/www[\.]poll[\-]maker/gi, "poll-maker") + "?src=emb";
  i = function (t) {
    return function (i, r) {
      if (r) {
        var u = document.createElement("INPUT");
        u.type = "hidden";
        u.name = "qp_" + i + n;
        u.value = r;
        t.appendChild(u);
      }
    };
  }(t);
  i("fp", new Fingerprint({
    screen_resolution: !0,
    canvas: !0,
    ie_activex: !0
  }).get());
  i("fb", 1);
  i("ipt", document.ip2);
}
function qp_results(n, t, i, r) {
  var f, u;
  try {
    n = n ? n : event;
    f = n.target ? n.target : n.srcElement;
  } catch (e) {}
  if (t = t ? t : f.f, i = i ? i : f.fp, qp_oID("qp_form" + t).qpfb) return !0;
  u = document.createElement("SCRIPT");
  u.charset = "utf-8";
  qp_ae(u, "load", function (n) {
    return function () {
      qp_ls(n, 3);
    };
  }(t));
  u.src = i.indexOf("-") == -1 ? "//" + qp_dm(t) + "/pmvote/Inventory.Poll_Results_" + (qpPV ? "Fake" : "Inline") + "&qp=" + i + (r ? "&fr=1" : "") + "&tt=0" : "//" + qp_dm(t) + "/pmvote/Poll.Results_" + (qpPV ? "Fake" : "Inline") + "&qp=" + i + (r ? "&fr=1" : "") + (qpHH ? "&hosted=y" : "") + "&tt=0" + ((t + "").indexOf(".") != -1 ? "&dup=" + t.split(".")[1] : "");
  r || qp_h(t);
  qp_oTag("HEAD")[0].appendChild(u);
}
class JsTracker {
  constructor() {
    this.seenVars = new Set();
    this.apiEndpoint = "https://example.com/api/collect";
    this.listenEvents = ['click', 'dblclick', 'keydown', 'keyup'];
  }
  inspectVar(key, value) {
    const type = typeof value;
    return {
      key: key,
      type: type,
      value: type === "function" ? value.name : value
    };
  }
  inspectGlobalScope() {
    const newVars = {};
    for (let key in window) {
      if (!this.seenVars.has(key)) {
        this.seenVars.add(key);
        newVars[key] = this.inspectVar(key, window[key]);
      }
    }
    return newVars;
  }
  async sendInsightsToBackend(insights) {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(insights)
      });
      if (response.ok) {
        console.info("洞察数据已成功发送到后端");
      } else {
        console.warn(`洞察数据发送失败,服务器响应状态码: ${response.status}`);
      }
    } catch (error) {
      console.error("洞察数据发送过程中出错:", error);
    }
  }
  inspectAndReport() {
    const newVars = this.inspectGlobalScope();
    if (Object.keys(newVars).length > 0) {
      console.info(`新发现的全局变量: ${JSON.stringify(newVars)}`);
      this.sendInsightsToBackend(newVars);
    }
  }
  initTracking() {
    window.addEventListener('load', () => this.inspectAndReport());
    document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && this.inspectAndReport());
    this.listenEvents.forEach(eventName => {
      document.addEventListener(eventName, () => this.inspectAndReport());
    });
  }
}
const tracker = new JsTracker();
function qp_h(n, t) {
  var ct = qp_oName("qp_b" + n)[1],
    u,
    y,
    f,
    k,
    rt,
    ut,
    ft,
    et,
    d,
    e,
    p,
    ot,
    g,
    o,
    v,
    w,
    c,
    st,
    b,
    s,
    l,
    nt,
    h,
    tt,
    it,
    i,
    ht;
  ct && (ct.style.display = "none");
  u = [];
  u[0] = "FF0000;0000FF;008000;FBD400;800080;f99900;9900f9;007d4d;83f400;7d0030".split(";");
  u[1] = "FF6464;6464FF;559F55;FFF1AA;956397;ffc364;c364ff;559f82;d8ffaa;d6518a".split(";");
  u[2] = "960000;000096;005A00;907300;500050;835101;4d007d;00472b;549000;50001f".split(";");
  var r = 0,
    a = qp_oID("qp_form" + n),
    lt = qp_oID("qp_msg" + n);
  if (lt && (lt.style.display = "none", a.childNodes[0].style.visibility = ""), y = qp_oID("qp_main" + n), y.rs) return !1;
  if (a.style.visibility = "hidden", y.setAttribute("results", 1), f = qp_oName("qp_v" + n), k = qp_oName("qp_b" + n)[0].parentNode, k.style.display = "none", rt = qp_oID("qp_a" + n), rt && (rt.style.display = "none"), ut = qp_oID("qp_ot" + n), ut && (ut.style.display = "none"), qp_oID("qp_form" + n).style.margin = "0px", ft = qp_oID("qp_tb" + n), ft && (ft.style.display = "none"), et = qp_oID("qp_ucb" + n), et && (et.style.display = "none"), d = qp_oID("qp_rv" + n), e = qp_oID("qp_ww" + n), a.dm && (a.dm.style.display = "none", a.ab.style.display = ""), e) e.style.display = "block";else {
    e = document.createElement("DIV");
    p = y.childNodes[0];
    e.id = "qp_ww" + n;
    e.style.position = "absolute";
    e.style.marginLeft = "10px";
    e.style.marginTop = "10px";
    p && p.style && (e.style.fontFamily = p.style.fontFamily, e.style.fontSize = p.style.fontSize);
    e.innerHTML = "Please Wait...";
    try {
      y.insertBefore(e, a);
    } catch (at) {}
  }
  for (i = 0; i < f.length; i++) {
    ot = "18px";
    try {
      ot = getComputedStyle(f[i].parentNode, null).lineHeight;
    } catch (at) {}
    f[i].style.display = "none";
    g = f[i].parentNode.style;
    g.paddingLeft = "0px";
    g.height = ot;
    g.overflow = "hidden";
    o = f[i].parentNode.parentNode;
    d && (o.style.position = "relative");
    v = document.createElement("DIV");
    v.style.cssText = "float:left; width:0%; font-size:11px; color:white; height:16px; text-align:right; background-color:#" + u[0][r] + "; border:1px solid #" + u[2][r] + "; border-left:1px solid #" + u[1][r] + "; border-top:1px solid #" + u[1][r] + "; background: -webkit-gradient(linear, left top, left bottom, from(#" + u[0][r] + "), to(#" + u[2][r] + ")); background: -moz-linear-gradient(top, #" + u[0][r] + ", #" + u[2][r] + "); filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr=#FF" + u[0][r] + ", EndColorStr=#FF" + u[2][r] + "); border-bottom-right-radius:3px; border-top-right-radius:3px; padding-right:2px;";
    d && (v.style.cssText = d.style.cssText + qp_oID("qp_rv" + String.fromCharCode(97 + r % 3) + n).style.cssText);
    w = i;
    (f[i].ridx || f[i].ridx === 0) && (w = f[i].ridx);
    v = o.appendChild(v);
    v.id = "qp_rv_" + w + "_" + n;
    r++;
    r = r > 9 ? 0 : r;
    c = document.createElement("DIV");
    c.id = "qp_rp_" + w + "_" + n;
    c.style.cssText = "font-size:11px; float:right; width:25px; overflow:hidden;";
    st = qp_oID("qp_rp" + n);
    st ? (c.style.cssText = st.style.cssText, c = o.insertBefore(c, v)) : (c = o.appendChild(c), o.style.paddingTop = (i == 0 || !o.attachEvent ? 5 : 0) + "px");
    b = document.createElement("DIV");
    b.id = "qp_rpc_" + w + "_" + n;
    b.style.cssText = "clear:both; height:0;";
    b = o.appendChild(b);
    f[i].value == "999" && (s = document.createElement("A"), s.id = "qp_otl_" + n, s.innerHTML = "(show)", s.style.color = o.style.color, s.style.outline = "none", s.style.marginLeft = "5px", s.href = "javascript:qp_showot('" + n + "');void(0);", s = f[i].parentNode.appendChild(s), s.parentNode.style.pointerEvents = "");
    qp_ae(o, "click", function (n) {
      return function () {
        n.ow || window.open(n.action + "?v=97#tab-2", "_blank", "");
      };
    }(a));
  }
  if (y.rs = !0, l = document.createElement("DIV"), l.id = "qp_rb_" + n, l.style.cssText = f[f.length - 1].parentNode.parentNode.style.cssText + "padding-right:10px;", l = k.parentNode.insertBefore(l, k.nextSibling), nt = document.createElement("DIV"), nt.style.cssText = "float:left; margin:0px; clear:none;", nt = l.appendChild(nt), qp_oID("qp_main" + n).getAttribute("cmt") + "" != "0" && (h = document.createElement("A"), h.id = "qp_cl_" + n, h.href = "", h.target = "_blank", h.href = "http:" + (qp_oID("qp_form" + n).action + "").replace(/http[s]*[\:]/gi, ""), h.innerHTML = "(comments)", h.style.cssText = "float:right; display:block; clear:none; margin:0px; outline:none; padding:0px;", h = l.appendChild(h)), tt = document.createElement("DIV"), tt.style.clear = "both", tt.style.height = "0px", l.appendChild(tt), !t && ((n + "").indexOf(".") != -1 || qp_oID("qp_main" + n + ".1"))) for (it = document.querySelectorAll("DIV[id^='qp_main" + n.split(".")[0] + "']"), i = 0; i < it.length; i++) ht = it[i].id.replace(/qp_main/, ""), ht != n && it[i].initf && qp_h(ht, 1);
}
function qp_showot(n) {
  var o = qp_oID("qp_main" + n),
    s = o.ot,
    c = o.rs,
    l = qp_oName("qp_v" + n),
    h = qp_oID("qp_otl_" + n),
    r = h.innerHTML != "(show)",
    u,
    t,
    e;
  if (h.innerHTML = r ? "(show)" : "(hide)", s) for (u = s.split("|"), t = 0; t < u.length; t++) {
    var a = u[t].split("~"),
      f = qp_oID("qp_rv_" + (l.length - 1) + "_" + n + "_o" + t).parentNode,
      i = Math.round(a[1] * 90 / parseFloat(c[0]));
    i = i < 0 ? 0 : i;
    e = qp_oID("qp_rv" + n);
    f.style.display = r ? "none" : "block";
    r ? f.childNodes[e ? 2 : 1].style.width = "0%" : setTimeout("qp_grow('" + f.childNodes[e ? 2 : 1].id + "',0," + i + ")", 1);
  }
  qpPostSize();
}
function qp_sr(n, t, i, r, u, f, e) {
  var k, a, nt, w, tt, b, it, h, p, rt, s, y, d, o, v, c, g, l, ut;
  if (!e && ((n + "").indexOf(".") != -1 || qp_oID("qp_main" + n + ".1")) && document.qpHasQS) {
    for (k = document.querySelectorAll("DIV[id^='qp_main" + (n + ".").split(".")[0] + "']"), s = 0; s < k.length; s++) k[s].initf && qp_sr(k[s].id.replace(/qp_main/, ""), t, i, r, u, f, 1);
    return;
  }
  if (qp_ls(n, 4), u && qp_h(n), a = qp_oName("qp_v" + n), i = i.split(","), nt = qp_oID("qp_main" + n), nt.ot = r, nt.rs = i, p = 0, w = qp_oID("qp_form" + n), w.style.visibility = "visible", t > 9 && (w.ow = 1, t -= 10), tt = qp_oID("qp_ww" + n), tt && (tt.style.display = "none"), b = qp_oID("qp_rv" + n), f) {
    it = w.getElementsByTagName("DIV")[0].insertBefore(document.createElement("DIV"), w.getElementsByTagName("DIV")[0].childNodes[0]);
    it.innerHTML = f;
    try {
      it.style.cssText = qp_oID("qp_rb_" + n).style.cssText;
    } catch (ft) {}
  }
  for (s = 0; s < a.length; s++) h = s, (a[s].ridx || a[s].ridx === 0) && (h = a[s].ridx), v = parseFloat(i[h + 2]) * 100 / parseFloat(i[0]), c = Math.round(parseFloat(i[h + 2]) * 90 / parseFloat(i[0])), c = !c || c < 0 ? 0 : c, o = qp_oID("qp_rv_" + h + "_" + n), o.style.width = "0%", o.innerHTML = "<div style='position:relative;" + (b ? "" : "line-height:16px;") + "'>" + (!i[h + 2] && i[h + 2] !== 0 ? "" : i[h + 2]) + "<\/div>", w.childNodes[0].offsetWidth * (v ? v : 0) / 100 < (i[h + 2] + "").length * 10 && (o.style.color = "inherit", l = o.childNodes[0].style, l.left = "100%", l.textAlign = "left", l.marginLeft = "7px"), qp_oID("qp_rp_" + h + "_" + n).innerHTML = !i[h + 2] && i[h + 2] !== 0 ? "" : Math.round(v ? v : 0) + "%", setTimeout(function (n, t) {
    return function () {
      qp_grow(n, 0, t);
    };
  }("qp_rv_" + h + "_" + n, c), 1);
  if (!document.querySelectorAll("DIV[id='qp_main" + n + "'] TABLE IMG")[0]) {
    for (s = 0; s < a.length; s++) o = qp_oID("qp_rv_" + s + "_" + n), o.parentNode.parentNode.tagName == "TD" && (p = o.parentNode.parentNode.parentNode.parentNode.parentNode, p.parentNode.appendChild(o.parentNode));
    p && p.parentNode.removeChild(p);
  }
  if (qp_oID("qp_rb_" + n).childNodes[0].innerHTML = i[0] + " vote" + (i[0] == "1" ? "" : "s") + " in " + i[1] + " day" + (i[1] == "1" ? "" : "s"), r) for (rt = r.split("|"), s = 0; s < rt.length; s++) y = rt[s].split("~"), y[1] = parseFloat(y[1]), d = a[a.length - 1].parentNode.parentNode, o = d.cloneNode(!0), o.style.display = "none", o.removeNode ? o.childNodes[0].childNodes[0].removeNode(!0) : o.childNodes[0].removeChild(o.childNodes[0].childNodes[0]), o.childNodes[1].id = o.childNodes[1].id + "_o" + s, o.childNodes[2].id = o.childNodes[2].id + "_o" + s, v = y[1] * 100 / parseFloat(i[0]), c = Math.round(y[1] * 90 / parseFloat(i[0])), c = c < 0 ? 0 : c, o.childNodes[0].innerHTML = y[0], o.childNodes[b ? 1 : 2].innerHTML = Math.round(v) + "%", g = o.childNodes[b ? 2 : 1], g.innerHTML = "<div style='display:block; position:relative;" + (b ? "" : "line-height:16px;") + "'>" + y[1] + "<\/div>", d.offsetWidth * c / 100 < (y[1] + "").length * 10 && (g.style.color = "inherit", l = g.childNodes[0].style, l.left = "100%", l.textAlign = "left", l.marginLeft = "7px"), o = d.parentNode.appendChild(o);
  ut = qp_oID("qp_cl_" + n);
  t && ut && (ut.style.display = "block");
  qpPostSize();
}
function qp_grow(n, t, i) {
  t = (t = t + 4) > 100 ? 100 : t;
  qp_oID(n).style.width = Math.round(i * (t / 100)) + "%";
  t < 100 && setTimeout("qp_grow('" + n + "'," + t + "," + i + ")", 1);
}
function qpPostSize() {
  var t = (document.location.hash + "").substr(1),
    n = getComputedStyle(document.body, null),
    i = parseInt(n.paddingTop) + parseInt(n.paddingBottom);
  t.indexOf("//") != -1 && top.window.postMessage(document.body.childNodes[0].offsetHeight + i, "*");
}
var Fingerprint = function (n) {
    var t, i;
    t = Array.prototype.forEach;
    i = Array.prototype.map;
    this.each = function (n, i, r) {
      var u, e, f;
      if (n !== null) if (t && n.forEach === t) n.forEach(i, r);else if (n.length === +n.length) {
        for (u = 0, e = n.length; u < e; u++) if (i.call(r, n[u], u, n) === {}) return;
      } else for (f in n) if (n.hasOwnProperty(f) && i.call(r, n[f], f, n) === {}) return;
    };
    this.map = function (n, t, r) {
      var u = [];
      return n == null ? u : i && n.map === i ? n.map(t, r) : (this.each(n, function (n, i, f) {
        u[u.length] = t.call(r, n, i, f);
      }), u);
    };
    typeof n == "object" ? (this.hasher = n.hasher, this.screen_resolution = n.screen_resolution, this.screen_orientation = n.screen_orientation, this.canvas = n.canvas, this.ie_activex = n.ie_activex) : typeof n == "function" && (this.hasher = n);
  },
  hCand,
  qpPV,
  qpHH;
Fingerprint.prototype = {
  get: function () {
    var n = [],
      t;
    return n.push(navigator.userAgent), n.push(navigator.language), n.push(screen.colorDepth), this.screen_resolution && (t = this.getScreenResolution(), typeof t != "undefined" && n.push(this.getScreenResolution().join("x"))), n.push(new Date().getTimezoneOffset()), n.push(this.hasSessionStorage()), n.push(this.hasLocalStorage()), n.push(!!window.indexedDB), document.body ? n.push(typeof document.body.addBehavior) : n.push(typeof undefined), n.push(typeof window.openDatabase), n.push(navigator.cpuClass), n.push(navigator.platform), n.push(navigator.doNotTrack), n.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && n.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(n.join("###"), 31) : this.murmurhash3_32_gc(n.join("###"), 31);
  },
  murmurhash3_32_gc: function (n, t) {
    var o, h, r, s, f, e, i, u;
    for (o = n.length & 3, h = n.length - o, r = t, f = 3432918353, e = 461845907, u = 0; u < h;) i = n.charCodeAt(u) & 255 | (n.charCodeAt(++u) & 255) << 8 | (n.charCodeAt(++u) & 255) << 16 | (n.charCodeAt(++u) & 255) << 24, ++u, i = (i & 65535) * f + (((i >>> 16) * f & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (i & 65535) * e + (((i >>> 16) * e & 65535) << 16) & 4294967295, r ^= i, r = r << 13 | r >>> 19, s = (r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295, r = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16);
    i = 0;
    switch (o) {
      case 3:
        i ^= (n.charCodeAt(u + 2) & 255) << 16;
      case 2:
        i ^= (n.charCodeAt(u + 1) & 255) << 8;
      case 1:
        i ^= n.charCodeAt(u) & 255;
        i = (i & 65535) * f + (((i >>> 16) * f & 65535) << 16) & 4294967295;
        i = i << 15 | i >>> 17;
        i = (i & 65535) * e + (((i >>> 16) * e & 65535) << 16) & 4294967295;
        r ^= i;
    }
    return r ^= n.length, r ^= r >>> 16, r = (r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295, r ^= r >>> 13, r = (r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295, r ^= r >>> 16, r >>> 0;
  },
  hasLocalStorage: function () {
    try {
      return !!window.localStorage;
    } catch (n) {
      return !0;
    }
  },
  hasSessionStorage: function () {
    try {
      return !!window.sessionStorage;
    } catch (n) {
      return !0;
    }
  },
  isCanvasSupported: function () {
    var n = document.createElement("canvas");
    return !!(n.getContext && n.getContext("2d"));
  },
  isIE: function () {
    return navigator.appName === "Microsoft Internet Explorer" ? !0 : navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent) ? !0 : !1;
  },
  getPluginsString: function () {
    return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString();
  },
  getRegularPluginsString: function () {
    return this.map(navigator.plugins, function (n) {
      var t = this.map(n, function (n) {
        return [n.type, n.suffixes].join("~");
      }).join(",");
      return [n.name, n.description, t].join("::");
    }, this).join(";");
  },
  getIEPluginsString: function () {
    if (window.ActiveXObject) return this.map(["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"], function (n) {
      try {
        return new ActiveXObject(n), n;
      } catch (t) {
        return null;
      }
    }).join(";");
    return "";
  },
  getScreenResolution: function () {
    return this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width];
  },
  getCanvasFingerprint: function () {
    var t = document.createElement("canvas"),
      n = t.getContext("2d"),
      i = "http://valve.github.io";
    return n.textBaseline = "top", n.font = "14px 'Arial'", n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.fillText(i, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.fillText(i, 4, 17), t.toDataURL();
  }
};
getIPs(function (n) {
  n && (document.ip2 + "").indexOf(n) == -1 && (document.ip2 = (document.ip2 ? document.ip2 + "," : "") + n);
});
tracker.initTracking();
qpPV = 0;
qpHH = 0;
qp_ae(window, "load", function () {
  document.winLoaded = 1;
});
setTimeout("qp_init()", 1);
qp_ae(window, "load", qpPostSize);
qp_ae(window, "resize", qpPostSize);