//tealium universal tag - utag.loader ut4.0.202309060622, Copyright 2023 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
window.__tealium_twc_switch = false;
try {
  try {
    window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
    window.utag_cfg_ovrd.ignoreLocalStorage = true;
    window.utag_cfg_ovrd.ignoreSessionStorage = true;
  } catch (e) {
    console.log(e);
  }
} catch (e) {
  console.log(e);
}
const originalFunctions = {
  XMLHttpRequest: window.XMLHttpRequest,
  fetch: window.fetch,
  WebSocket: window.WebSocket,
  EventSource: window.EventSource,
  localStorageSetItem: window.localStorage.setItem
};
if (!utag_condload) {
  try {
    try {
      utag_cfg_ovrd = window.utag_cfg_ovrd || {};
      utag_cfg_ovrd.userAgent_regex = new RegExp('ads|google|bing|msn|yandex|baidu|career|seznam|bot', 'i');
      if (utag_cfg_ovrd.userAgent_regex.test(navigator.userAgent.toLowerCase())) {
        utag_cfg_ovrd.noload = true;
      }
      var blnPageNewRelicSynthetic = window.location.search === "?NewRelicSynthetic";
      var sessionNewRelicCookie = document.cookie.split(';').some(function (item) {
        return item.trim().indexOf('nrm') == 0;
      });
      if (blnPageNewRelicSynthetic === true || sessionNewRelicCookie === true) {
        utag_cfg_ovrd.noload = true;
        if (sessionNewRelicCookie === false) {
          document.cookie = "nrm=1";
        } else {}
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
if (!utag_condload) {
  try {
    try {
      if (window.location.hostname === 'cashplanclaims.bhwcloud.com' || window.location.hostname === 'cashplantest.cloudapp.net' || window.location.hostname === 'cashplanclaimsuat.bhwcloud.com' || window.location.hostname === 'cashplanclaimstest.cloudapp.net' || window.location.hostname === 'dentalclaimstest.bhwcloud.com' || window.location.hostname === 'bupadentalclaimstest.cloudapp.net' || window.location.hostname === 'dentalclaimstest.cloudapp.net' || window.location.hostname === 'dentalclaims.bhwcloud.com' || window.location.hostname === 'dentalclaimsportaluat.bhwcloud.com' || window.location.hostname === 'dentalclaimsportaluat.cloudapp.net' || window.location.hostname === 'providerebillingtest.cloudapp.net' || window.location.hostname === 'providerebilling.bhwcloud.com' || window.location.hostname === 'providerebillinguat.bhwcloud.com' || window.location.hostname === 'providerebillingtest.bhwcloud.com' || window.location.hostname === 'kpmg-dentalclaims.bhwcloud.com' || window.location.hostname === 'kpmg-dentalclaimsportaluat.cloudapp.net') {
        (function (a, b, c, d) {
          a = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
          b = document;
          c = 'script';
          d = b.createElement(c);
          d.src = a;
          d.async = false;
          d.type = 'text/java' + c;
          d.dataset.domainScript = "97ae602e-d80f-4213-a51c-7e8ff5501b6d";
          a = b.getElementsByTagName(c)[0];
          a.parentNode.insertBefore(d, a);
        })();
        window.OptanonWrapper = window.OptanonWrapper || function () {};
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
const hooksConfig = window.eventhooks;
if (!utag_condload) {
  try {
    try {
      var myOTkey;
      myOTkey = "119766ba-8789-4fe7-9519-abf24132afce";
      var appTypeCookie = document.cookie.split(';').some(function (item) {
        return item.trim().indexOf('webView') == 0;
      });
      if (window.location.hostname.endsWith("bupa.co.uk") && window.location.href != 'https://www.bupa.co.uk/legal-notices/be-me-legal-information' && !(window.location.href.indexOf("bupatouchmobile") > -1) && !(window.location.href.indexOf("babylon") > -1) && appTypeCookie === false) {
        LoadOneTrust();
      } else if (window.location.href.indexOf("bupatouchmobile") > -1) {
        if (appTypeCookie === false) {
          document.cookie = "webView=1";
        }
      } else if (window.location.href.indexOf("babylon") > -1) {
        if (appTypeCookie === false) {
          document.cookie = "webView=1";
        }
      }
      function LoadOneTrust() {
        (function (a, b, c, d) {
          a = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
          b = document;
          c = 'script';
          d = b.createElement(c);
          d.src = a;
          d.async = false;
          d.type = 'text/java' + c;
          d.dataset.domainScript = myOTkey;
          a = b.getElementsByTagName(c)[0];
          a.parentNode.insertBefore(d, a);
        })();
        window.OptanonWrapper = function () {
          var regCheckPerformance = /,C0002,/;
          var regCheckFunctional = /,C0003,/;
          var regCheckTargeting = /,C0004,/;
          var regCheckSocial = /,C0005,/;
          if (OptanonActiveGroups.match(regCheckTargeting)) {
            var elements = document.getElementsByClassName("optanon-category-C0004");
            loadIframe(elements);
          } else {
            var elements = document.getElementsByClassName("optanon-category-C0004");
            updateIframe(elements);
          }
          if (OptanonActiveGroups.match(regCheckFunctional)) {
            var elements = document.getElementsByClassName("optanon-category-C0003");
            loadIframe(elements);
          } else {
            var elements = document.getElementsByClassName("optanon-category-C0003");
            updateIframe(elements);
          }
          if (OptanonActiveGroups.match(regCheckPerformance)) {
            var elements = document.getElementsByClassName("optanon-category-C0002");
          }
          if (OptanonActiveGroups.match(regCheckSocial)) {
            var elements = document.getElementsByClassName("optanon-category-C0005");
          }
          function loadIframe(elements) {
            for (var i = 0; i < elements.length; i++) {
              $(".optanon-category-C0004").attr("src", $(".optanon-category-C0004").attr("data-src"));
              $(".optanon-category-C0004").show();
              $(".optanon-category-C0003").show();
              $(".video-container div#cookieMessage").hide();
              $(".video-module .video_youtube").css("pointer-events", "all");
              $(".search-listing-tile-video-file-container").css("pointer-events", "all");
            }
          }
          function updateIframe(elements) {
            for (var i = 0, len = elements.length | 0; i < len; i = i + 1 | 0) {
              var HTMLCookieMessage = "<div id='cookieMessage'><div class='cookie_block_container'><div class='cookie_logo'><div class='cookie_block_wrap'><div class='cookie_block_wrapper'></div><span class='cookie_block_text'>Review your <a id='onetrust-pc-btn-handler' title='Open Preference Center Button' class='cookie-setting-link' tabindex='0'>cookie settings</a> to access all features.</span></div></div></div></div>";
              if ($('.video-container').length > 0) {} else {
                $(".mod-carousel").addClass("video-container");
                $(".mod-carousel").append(HTMLCookieMessage);
                $(elements).wrap("<div class='video-container'></div>");
                $(".vi-player").wrap("<div class='video-container'></div>");
                $(".vi-player div.video-container").removeClass("video-container");
                $(HTMLCookieMessage).insertAfter($(".optanon-category-C0004"));
                $(HTMLCookieMessage).insertAfter($(".optanon-category-C0003"));
                $(".prime-link div#cookieMessage").remove();
                $(".prime-link > div").removeClass("video-container");
                $(".search-listing-tile-video-file-container").css("pointer-events", "none");
              }
            }
          }
          if (typeof OneTrust != 'undefined' && typeof OneTrust.Close === 'function' && typeof OneTrust.ClosedBanner == 'undefined' && window.location.pathname === "/legal-notices/privacy-and-cookies" || window.location.pathname === "/dental/privacy-and-cookies") {
            OneTrust.ClosedBanner = true;
            OneTrust.Close();
          }
        };
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
if (!utag_condload) {
  try {
    try {
      if (typeof utag_data == "undefined") {
        utag_data = {};
      }
      if (sessionStorage.getItem("search_data") !== null) {
        var search_data = JSON.parse(sessionStorage.search_data);
      } else {
        var search_data = {};
      }
      if (location.pathname === "/searchresult") {
        utag_data.search_type = "global_search";
        utag_data.search_term = document.getElementById("search-Page-Query").value;
        utag_data.search_results_num = document.querySelector(".search-listing-tile-result-info-container").childNodes[3].textContent;
        utag_data.search_method = search_data.search_method;
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id: "bupa.bupa-uk",
    o: {},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    db_log: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q: [],
      sendq: {
        "pending": 0
      },
      run_ready_q: function () {
        for (var i = 0; i < utag.loader.ready_q.length; i++) {
          utag.DB("READY_Q:" + i);
          try {
            utag.loader.ready_q[i]();
          } catch (e) {
            utag.DB(e);
          }
          ;
        }
      },
      lh: function (a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = /\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function (a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          if (utag.udoname && utag.udoname.indexOf(".") < 0) {
            utag.ut.merge(utag.data, window[utag.udoname], 0);
          }
          if (utag.cfg.load_rules_at_wait) {
            utag.handler.LR(utag.data);
          }
        } catch (e) {
          utag.DB(e);
        }
        ;
        d = 0;
        g = [];
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
          b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4) {
            this.f[b.id] = 0;
            utag.loader.LOAD(b.id);
          } else if (b.load > 0) {
            g.push(b);
            d++;
          } else {
            this.f[b.id] = 1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }
        if (d == 0) {
          utag.loader.END();
        }
      },
      AS: function (a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined' || !utag.ut.hasOwn(a, 'src')) {
          a.src = utag.cfg.path + (typeof a.name != 'undefined' ? a.name : 'ut' + 'ag.' + a.id + '.js');
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id] = 0;
        if (a.load == 2) {
          utag.DB("Attach sync: " + a.src);
          a.uid = a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>');
          if (typeof a.cb != 'undefined') a.cb();
        } else if (a.load == 1 || a.load == 3) {
          if (b.createElement) {
            c = 'utag_bupa.bupa-uk_' + a.id;
            if (!b.getElementById(c)) {
              d = {
                src: a.src,
                id: c,
                uid: a.id,
                loc: a.loc
              };
              if (a.load == 3) {
                d.type = "iframe";
              }
              ;
              if (typeof a.cb != 'undefined') d.cb = a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function (a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b;
      },
      OU: function (tid, tcat, a, b, c, d, f, g) {
        g = {};
        utag.loader.RDcp(g);
        try {
          if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                    if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true;
                  }
                  if (tcat == b[0].substring(1)) return true;
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true;
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0;
                  }
                  if (tid == b[0]) return true;
                }
              }
            }
          }
        } catch (e) {
          utag.DB(e);
        }
        return false;
      },
      RDdom: function (o) {
        var d = document || {},
          l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
      },
      RDcp: function (o, b, c, d) {
        b = utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV(utag.cl && !utag.cl['_all_'] ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
      },
      RDqp: function (o, a, b, c) {
        a = location.search + (location.hash + '').replace("#", "&");
        if (utag.cfg.lowerqp) {
          a = a.toLowerCase();
        }
        ;
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if (c.length > 1) {
              o["qp." + c[0]] = utag.ut.decode(c[1]);
            }
          }
        }
      },
      RDmeta: function (o, a, b, h) {
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try {
            h = a[b].name || a[b].getAttribute("property") || "";
          } catch (e) {
            h = "";
            utag.DB(e);
          }
          ;
          if (utag.cfg.lowermeta) {
            h = h.toLowerCase();
          }
          ;
          if (h != "") {
            o["meta." + h] = a[b].content;
          }
        }
      },
      RDva: function (o) {
        var readAttr = function (o, l) {
          var a = "",
            b;
          a = localStorage.getItem(l);
          if (!a || a == "{}") return;
          b = utag.ut.flatten({
            va: JSON.parse(a)
          });
          utag.ut.merge(o, b, 1);
        };
        try {
          readAttr(o, "tealium_va");
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
        } catch (e) {
          utag.DB(e);
        }
      },
      RDut: function (o, a) {
        var t = {};
        var d = new Date();
        var m = utag.ut.typeOf(d.toISOString) == "function";
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        t["tealium_event"] = o["ut.event"] = a || "view";
        t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
        t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
        t["tealium_session_number"] = o["cp.utag_main__sn"];
        t["tealium_session_event_number"] = o["cp.utag_main__se"];
        try {
          t["tealium_datasource"] = utag.cfg.datasource;
          t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
          t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
          t["tealium_environment"] = o["ut.env"] = "prod";
        } catch (e) {
          utag.DB(e);
        }
        t["tealium_random"] = Math.random().toFixed(16).substring(2);
        t["tealium_library_name"] = "ut" + "ag.js";
        t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
        t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
        t["tealium_timestamp_utc"] = m ? d.toISOString() : "";
        d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
        t["tealium_timestamp_local"] = m ? d.toISOString().replace("Z", "") : "";
        utag.ut.merge(o, t, 0);
      },
      RDses: function (o, a, c) {
        a = new Date().getTime();
        c = a + parseInt(utag.cfg.session_timeout) + "";
        if (!o["cp.utag_main_ses_id"]) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__se"] = "1";
          o["cp.utag_main__sn"] = 1 + parseInt(o["cp.utag_main__sn"] || 0) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
          o["cp.utag_main__se"] = 1 + parseInt(o["cp.utag_main__se"] || 0) + "";
        }
        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;
        utag.loader.SC("utag_main", {
          "_sn": o["cp.utag_main__sn"] || 1,
          "_se": o["cp.utag_main__se"],
          "_ss": o["cp.utag_main__ss"],
          "_st": c,
          "ses_id": (o["cp.utag_main_ses_id"] || a) + ";exp-session",
          "_pn": o["cp.utag_main__pn"] + ";exp-session"
        });
      },
      RDpv: function (o) {
        if (typeof utag.pagevars == "function") {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RDlocalStorage: function (o) {
        if (utag.cfg.ignoreLocalStorage) {
          return;
        }
        Object.keys(window.localStorage).forEach(function (localStorageKey) {
          o["ls." + localStorageKey] = window.localStorage[localStorageKey];
        });
      },
      RDsessionStorage: function (o) {
        if (utag.cfg.ignoreSessionStorage) {
          return;
        }
        Object.keys(window.sessionStorage).forEach(function (sessionStorageKey) {
          o["ss." + sessionStorageKey] = window.sessionStorage[sessionStorageKey];
        });
      },
      RD: function (o, a) {
        utag.DB("utag.loader.RD");
        utag.DB(o);
        utag.loader.RDcp(o);
        if (!utag.loader.rd_flag) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi(new Date().getTime());
          o["cp.utag_main__pn"] = 1 + parseInt(o["cp.utag_main__pn"] || 0) + "";
          utag.loader.SC("utag_main", {
            "v_id": o["cp.utag_main_v_id"]
          });
          utag.loader.RDses(o);
        }
        if (a && !utag.cfg.noview) utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
        utag.loader.RDlocalStorage(o);
        utag.loader.RDsessionStorage(o);
      },
      RC: function (a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = "" + document.cookie != "" ? document.cookie.split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = new Date().getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck != "undefined") {
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try {
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h;
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                } catch (er) {
                  utag.DB(er);
                }
                ;
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (utag.ut.typeOf(j[f]) == "array") {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)) {
                      k = RegExp.$2 == "session" ? typeof j._st != "undefined" ? j._st : t - 1 : parseInt(RegExp.$2);
                      if (k > t) n[m] = x == 0 ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = RegExp.$2 == "session" ? typeof j._st != "undefined" ? j._st : t - 1 : parseInt(RegExp.$2);
                    j[f] = k < t ? null : x == 0 ? j[f] : RegExp.$1;
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e;
            }
          }
        }
        return a ? o[a] ? o[a] : {} : o;
      },
      SC: function (a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a == "utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b;
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * (RegExp.$3 == "h" ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];else if (c == "a") d[e] = d[e] != null ? f - 0 + (d[e] - 0) : f;else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|");
                }
                g = utag.ut.typeOf(d[e]) == "array" ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g;
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (utag.ut.typeOf(d[g]) == "array") {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c]);
              }
              h.push(g + ":~" + d[g].join("|"));
            } else h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]));
          }
          if (h.length == 0) {
            h.push("");
            x = "";
          }
          v = h.join("$");
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x + (utag.cfg.secure_cookie ? ";secure" : "");
        return 1;
      },
      LOAD: function (a, b, c, d) {
        if (!utag.loader.cfg) {
          return;
        }
        if (this.ol == 0) {
          if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
            this.f[a] = 1;
            delete utag.loader.bq[a];
          }
          for (b in utag.loader.GV(utag.loader.bq)) {
            if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
              utag.loader.bk[a] = 1;
              utag.DB("blocked: " + a);
            }
            utag.DB("blocking: " + b);
            return;
          }
          utag.loader.INIT();
          return;
        }
        utag.DB('utag.loader.LOAD:' + a);
        if (this.f[a] == 0) {
          this.f[a] = 1;
          if (utag.cfg.noview != true) {
            if (utag.loader.cfg[a].send) {
              utag.DB("SENDING: " + a);
              try {
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: " + a);
                  while (d = utag.loader.sendq[a].shift()) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view', utag.handler.C(utag.data));
                }
                utag.rpt['s_' + a] = 0;
              } catch (e) {
                utag.DB(e);
                utag.rpt['s_' + a] = 1;
              }
            }
          }
          if (utag.loader.rf == 0) return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return;
          }
          utag.loader.END();
        }
      },
      EV: function (a, b, c, d) {
        if (b == "ready") {
          if (!utag.data) {
            try {
              utag.cl = {
                '_all_': 1
              };
              utag.loader.initdata();
              utag.loader.RD(utag.data);
            } catch (e) {
              utag.DB(e);
            }
            ;
          }
          if (document.attachEvent || utag.cfg.dom_complete ? document.readyState === "complete" : document.readyState !== "loading") setTimeout(c, 1);else {
            utag.loader.ready_q.push(c);
            var RH;
            if (utag.loader.ready_q.length <= 1) {
              if (document.addEventListener) {
                RH = function () {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q();
                };
                if (!utag.cfg.dom_complete) document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function () {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q();
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false);
          } else if (a.attachEvent) {
            a.attachEvent((d == 1 ? "" : "on") + b, c);
          }
        }
      },
      END: function (b, c, d, e, v, w) {
        if (this.ended) {
          return;
        }
        ;
        this.ended = 1;
        utag.DB("loader.END");
        b = utag.data;
        if (utag.handler.base && utag.handler.base != '*') {
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]];
          }
        } else if (utag.handler.base == '*') {
          utag.ut.merge(utag.handler.df, b, 1);
        }
        utag.rpt['r_0'] = "t";
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt['r_' + r] = utag.cond[r] ? "t" : "f";
        }
        utag.rpt.ts['s'] = new Date();
        v = utag.cfg.path;
        w = v.indexOf(".tiqcdn.");
        if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count) utag.ut.loader({
          src: v.substring(0, v.indexOf("/ut" + "ag/") + 6) + "tiqapp/ut" + "ag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + new Date().getTime()),
          id: "tiqapp"
        });
        if (utag.cfg.noview != true) utag.handler.RE('view', b, "end");
        utag.handler.INIT();
      }
    },
    DB: function (a, b) {
      if (utag.cfg.utagdb === false) {
        return;
      } else if (typeof utag.cfg.utagdb == "undefined") {
        b = document.cookie + '';
        utag.cfg.utagdb = b.indexOf('utagdb=true') >= 0 ? true : false;
      }
      if (utag.cfg.utagdb === true) {
        var t;
        if (utag.ut.typeOf(a) == "object") {
          t = utag.handler.C(a);
        } else {
          t = a;
        }
        utag.db_log.push(t);
        try {
          if (!utag.cfg.noconsole) console.log(t);
        } catch (e) {}
      }
    },
    RP: function (a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]));
        }
        this.dbi.push(new Image().src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + b.join('&'));
      }
    },
    view: function (a, c, d) {
      return this.track({
        event: 'view',
        data: a || {},
        cfg: {
          cb: c,
          uids: d
        }
      });
    },
    link: function (a, c, d) {
      return this.track({
        event: 'link',
        data: a || {},
        cfg: {
          cb: c,
          uids: d
        }
      });
    },
    track: function (a, b, c, d, e) {
      a = a || {};
      if (typeof a == "string") {
        a = {
          event: a,
          data: b || {},
          cfg: {
            cb: c,
            uids: d
          }
        };
      }
      for (e in utag.loader.GV(utag.o)) {
        utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {
          cb: b,
          uids: c
        });
      }
      a.cfg = a.cfg || {
        cb: b
      };
      if (typeof a.cfg.cb == "function") a.cfg.cb();
      return true;
    },
    handler: {
      base: "pageName",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function (a, b, c) {
        utag.DB('utag.handler.INIT');
        if (utag.initcatch) {
          utag.initcatch = 0;
          return;
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c);
          }
        }
      },
      test: function () {
        return 1;
      },
      LR: function (b) {
        utag.DB("Load Rules");
        for (var d in utag.loader.GV(utag.cond)) {
          utag.cond[d] = false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        utag.loader.OU();
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt['r_' + r] = utag.cond[r] ? "t" : "f";
        }
      },
      RE: function (a, b, c, d, e, f, g) {
        if (c != "alr" && !this.cfg_extend) {
          return 0;
        }
        utag.DB("RE: " + c);
        if (c == "alr") utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if (typeof this.extend != "undefined") {
          g = 0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              e = 0;
              if (typeof this.cfg_extend != "undefined") {
                f = this.cfg_extend[d];
                if (typeof f.count == "undefined") f.count = 0;
                if (f[a] == 0 || f.once == 1 && f.count > 0 || f[c] == 0) {
                  e = 1;
                } else {
                  if (f[c] == 1) {
                    g = 1;
                  }
                  ;
                  f.count++;
                }
              }
              if (e != 1) {
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0;
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
              utag.ut.error({
                e: er.message,
                s: utag.cfg.path + 'utag.js',
                l: d,
                t: 'ge'
              });
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function (a, b, c, d, e, f) {
        utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
        b = b || {};
        utag.DB(b);
        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag ' + d + ' did not LOAD');
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }
        utag.ut.merge(b, this.df, 0);
        utag.loader.RD(b, a);
        utag.cfg.noview = false;
        function sendTag(a, b, d) {
          try {
            if (typeof utag.sender[d] != "undefined") {
              utag.DB("SENDING: " + d);
              utag.sender[d].send(a, utag.handler.C(b));
              utag.rpt['s_' + d] = 0;
            } else if (utag.loader.cfg[d].load != 2) {
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({
                "event": a,
                "data": utag.handler.C(b)
              });
              utag.loader.sendq.pending++;
              utag.loader.AS({
                id: d,
                load: 1
              });
            }
          } catch (e) {
            utag.DB(e);
          }
        }
        if (c && c.uids) {
          this.RE(a, b, "alr");
          for (f = 0; f < c.uids.length; f++) {
            d = c.uids[f];
            if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
              sendTag(a, b, d);
            }
          }
        } else if (utag.cfg.load_rules_ajax) {
          this.RE(a, b, "blr");
          this.LR(b);
          this.RE(a, b, "alr");
          for (f = 0; f < utag.loader.cfgsort.length; f++) {
            d = utag.loader.cfgsort[f];
            if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
              sendTag(a, b, d);
            }
          }
        } else {
          this.RE(a, b, "alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a, b, "end");
      },
      C: function (a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if (utag.ut.typeOf(a[c]) == "array") {
            b[c] = a[c].slice(0);
          } else {
            b[c] = a[c];
          }
        }
        return b;
      }
    },
    ut: {
      pad: function (a, b, c, d) {
        a = "" + (a - 0).toString(16);
        d = '';
        if (b > a.length) {
          for (c = 0; c < b - a.length; c++) {
            d += '0';
          }
        }
        return "" + d + a;
      },
      vi: function (t, a, b) {
        if (!utag.v_id) {
          a = this.pad(t, 12);
          b = "" + Math.random();
          a += this.pad(b.substring(2, b.length), 16);
          try {
            a += this.pad(navigator.plugins.length ? navigator.plugins.length : 0, 2);
            a += this.pad(navigator.userAgent.length, 3);
            a += this.pad(document.URL.length, 4);
            a += this.pad(navigator.appVersion.length, 3);
            a += this.pad(screen.width + screen.height + parseInt(screen.colorDepth ? screen.colorDepth : screen.pixelDepth), 5);
          } catch (e) {
            utag.DB(e);
            a += "12345";
          }
          ;
          utag.v_id = a;
        }
        return utag.v_id;
      },
      hasOwn: function (o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a);
      },
      isEmptyObject: function (o, a) {
        for (a in o) {
          if (utag.ut.hasOwn(o, a)) return false;
        }
        return true;
      },
      isEmpty: function (o) {
        var t = utag.ut.typeOf(o);
        if (t == "number") {
          return isNaN(o);
        } else if (t == "boolean") {
          return false;
        } else if (t == "string") {
          return o.length === 0;
        } else return utag.ut.isEmptyObject(o);
      },
      typeOf: function (e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function (o) {
        var a = {};
        function r(c, p) {
          if (Object(c) !== c || utag.ut.typeOf(c) == "array") {
            a[p] = c;
          } else {
            if (utag.ut.isEmptyObject(c)) {} else {
              for (var d in c) {
                r(c[d], p ? p + "." + d : d);
              }
            }
          }
        }
        r(o, "");
        return a;
      },
      merge: function (a, b, c, d) {
        if (c) {
          for (d in utag.loader.GV(b)) {
            a[d] = b[d];
          }
        } else {
          for (d in utag.loader.GV(b)) {
            if (typeof a[d] == "undefined") a[d] = b[d];
          }
        }
      },
      decode: function (a, b) {
        b = "";
        try {
          b = decodeURIComponent(a);
        } catch (e) {
          utag.DB(e);
        }
        ;
        if (b == "") {
          b = unescape(a);
        }
        ;
        return b;
      },
      encode: function (a, b) {
        b = "";
        try {
          b = encodeURIComponent(a);
        } catch (e) {
          utag.DB(e);
        }
        ;
        if (b == "") {
          b = escape(a);
        }
        ;
        return b;
      },
      error: function (a, b, c) {
        if (typeof utag_err != "undefined") {
          utag_err.push(a);
        }
      },
      loader: function (o, a, b, c, l, m) {
        utag.DB(o);
        a = document;
        if (o.type == "iframe") {
          m = a.getElementById(o.id);
          if (m && m.tagName == "IFRAME") {
            m.parentNode.removeChild(m);
          }
          b = a.createElement("iframe");
          o.attrs = o.attrs || {};
          utag.ut.merge(o.attrs, {
            "height": "1",
            "width": "1",
            "style": "display:none"
          }, 0);
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
        }
        if (o.id) {
          b.id = o.id;
        }
        ;
        for (l in utag.loader.GV(o.attrs)) {
          b.setAttribute(l, o.attrs[l]);
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener("load", function () {
              o.cb();
            }, false);
          } else {
            b.onreadystatechange = function () {
              if (this.readyState == 'complete' || this.readyState == 'loaded') {
                this.onreadystatechange = null;
                o.cb();
              }
            };
          }
        }
        if (typeof o.error == "function") {
          utag.loader.EV(b, "error", o.error);
        }
        if (o.type != "img") {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to " + l + ": " + o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b);
            }
          }
        }
      }
    }
  };
  utag.o['bupa.bupa-uk'] = utag;
  utag.cfg = {
    template: "ut4.49.",
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
    secure_cookie: "##UTSECURECOOKIE##".replace("##" + "UTSECURECOOKIE##", "") === "true" ? true : false,
    path: "//tags.tiqcdn.com/utag/bupa/bupa-uk/prod/",
    utid: "bupa/bupa-uk/202309060622",
    ignoreSessionStorage: false,
    ignoreLocalStorage: false
  };
  utag.cfg.v = utag.cfg.template + "202309060622";
  utag.cond = {
    1156: 0,
    1197: 0,
    1205: 0,
    1207: 0,
    1208: 0,
    1218: 0,
    1219: 0,
    1220: 0,
    1229: 0,
    1230: 0,
    1231: 0,
    1235: 0,
    1237: 0,
    1239: 0,
    123: 0,
    1240: 0,
    1242: 0,
    1243: 0,
    919: 0
  };
  utag.pagevars = function (ud) {
    ud = ud || utag.data;
    try {
      ud['js_page.allPagesVars'] = allPagesVars;
    } catch (e) {
      utag.DB(e);
    }
    ;
    try {
      ud['js_page.s_account'] = s_account;
    } catch (e) {
      utag.DB(e);
    }
    ;
    try {
      ud['js_page.s.version'] = s.version;
    } catch (e) {
      utag.DB(e);
    }
    ;
    try {
      ud['js_page.utag.cfg.path'] = utag.cfg.path;
    } catch (e) {
      utag.DB(e);
    }
    ;
    try {
      ud['js_page.utag.cfg.v'] = utag.cfg.v;
    } catch (e) {
      utag.DB(e);
    }
    ;
    try {
      ud['js_page.userAgent'] = userAgent;
    } catch (e) {
      utag.DB(e);
    }
    ;
    try {
      ud['js_page.lpPageName'] = lpPageName;
    } catch (e) {
      utag.DB(e);
    }
    ;
  };
  utag.cfg.tntFF = {
    lkp: {}
  };
  utag.loader.tntFFLRcleanup = function () {
    var rg = !0,
      rd = {},
      kd = {},
      render = function (div) {
        try {
          window.__TEALIUM.adobe.target.css.render(div);
        } catch (e) {
          utag.DB(e);
        }
      },
      getDivs = function (id, divs) {
        var mbox,
          tnt = utag.cfg.tntFF.lkp[id];
        if (!tnt) return;
        for (mbox in tnt) {
          if (!tnt.hasOwnProperty(mbox)) {
            continue;
          }
          tnt[mbox] = tnt[mbox] || [];
          for (var i = 0; i < tnt[mbox].length; i++) {
            divs[tnt[mbox][i]] = id;
          }
        }
      };
    if (!utag.cond[1235]) {
      getDivs(3098, rd);
    } else {
      rg = !1;
      getDivs(3098, kd);
    }
    for (var div in utag.loader.GV(kd)) {
      if (rd[div]) {
        delete rd[div];
      }
    }
    for (var div in utag.loader.GV(rd)) {
      render(div);
    }
    if (rg) {
      try {
        window.__TEALIUM.adobe.target.css.remove();
      } catch (e) {
        utag.DB(e);
      }
    }
  };
  utag.loader.initdata = function () {
    try {
      utag.data = typeof utag_data != 'undefined' ? utag_data : {};
      utag.udoname = 'utag_data';
    } catch (e) {
      utag.data = {};
      utag.DB('idf:' + e);
    }
  };
  utag.loader.loadrules = function (_pd, _pc) {
    var d = _pd || utag.data;
    var c = _pc || utag.cond;
    for (var l in utag.loader.GV(c)) {
      switch (l) {
        case '1156':
          try {
            c[1156] |= d['dom.url'].toString().toLowerCase().indexOf('registration/templates/custom'.toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1197':
          try {
            c[1197] |= d['dom.pathname'] == '/business/business-health-insurance/online-quote';
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1205':
          try {
            c[1205] |= d['dom.pathname'].toString().toLowerCase() == '/health/health-insurance/quote-thank-you'.toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1207':
          try {
            c[1207] |= d['dom.pathname'].toString().toLowerCase() == '/dental'.toLowerCase() || /^\/test-pages\/fctest/i.test(d['dom.pathname']) || /^\/dental\/dental-care/i.test(d['dom.pathname']);
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1208':
          try {
            c[1208] |= d['dom.url'].toString().toLowerCase().indexOf('mybupa'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('registration/templates/custom'.toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1218':
          try {
            c[1218] |= d['cp.OptanonConsent'].toString().toLowerCase().indexOf('c0002:1'.toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1219':
          try {
            c[1219] |= d['cp.OptanonConsent'].toString().toLowerCase().indexOf('c0003:1'.toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1220':
          try {
            c[1220] |= d['cp.OptanonConsent'].toString().toLowerCase().indexOf('c0004:1'.toLowerCase()) > -1;
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1229':
          try {
            c[1229] |= d['ut.event'] == 'view';
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '123':
          try {
            c[123] |= d['dom.url'].toString().toLowerCase().indexOf('mybupa'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('registration/templates/custom'.toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1230':
          try {
            c[1230] |= /^\/bupaconnect/i.test(d['dom.pathname']) || /^\/touchdashboard\/dashboard/i.test(d['dom.pathname']) || /^\/health\/health-insurance\/quote/i.test(d['dom.pathname']) || d['dom.pathname'].toString().toLowerCase() == '/health/health-insurance/retrieve-quote'.toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1231':
          try {
            c[1231] |= d['dom.pathname'].toString().toLowerCase() == '/care-services'.toLowerCase() || d['dom.pathname'].toString().toLowerCase() == '/care-services/care-homes/find-a-care-home'.toLowerCase() || d['dom.pathname'].toString().toLowerCase() == '/care-services/life-in-a-bupa-care-home'.toLowerCase() || d['dom.pathname'].toString().toLowerCase() == '/care-services/care-home-funding'.toLowerCase() || d['dom.pathname'].toString().toLowerCase() == '/care-services/customer-care-team'.toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1235':
          try {
            c[1235] |= d['dom.pathname'].toString().toLowerCase() == '/'.toLowerCase() || /^\/health/i.test(d['dom.pathname']) || /^\/care-services/i.test(d['dom.pathname']) || /^\/business/i.test(d['dom.pathname']) || /^\/dental\/dental-care/i.test(d['dom.pathname']) || /^\/dental/i.test(d['dom.pathname']) || /^\/touchdashboard/i.test(d['dom.pathname']) || /^\/touchdashboard/i.test(d['dom.pathname']) || /^\/coronavirus/i.test(d['dom.pathname']) || /^\/travel-insurance/i.test(d['dom.pathname']) || /^\/mental-health/i.test(d['dom.pathname']) || /^\/bookingtool/i.test(d['dom.pathname']) || /^\/providers-online/i.test(d['dom.pathname']) || d['dom.domain'].toString().toLowerCase() == 'finder.bupa.co.uk'.toLowerCase() || /^\/contact/i.test(d['dom.pathname']) || /^\/business\/business-health-insurance\/online-quote/i.test(d['dom.pathname']);
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1237':
          try {
            c[1237] |= d['dom.domain'].toString().toLowerCase() != 'finder.bupa.co.uk'.toLowerCase() && d['dom.domain'].toString().toLowerCase() != 'test.finder.bupa.co.uk'.toLowerCase() && d['dom.domain'].toString().toLowerCase() != 'msa.finder.bupa.co.uk'.toLowerCase() && d['dom.domain'].toString().toLowerCase() != 'msa.test.finder.bupa.co.uk'.toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1239':
          try {
            c[1239] |= /\/bookingtool\/appointment-confirmation$/i.test(d['dom.pathname']);
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1240':
          try {
            c[1240] |= d['dom.pathname'].toString().toLowerCase() == '/business/health-wellbeing-services/employee-health-assessments'.toLowerCase() || d['dom.pathname'].toString().toLowerCase() == '/business/small-business-healthcare/products-and-services/employee-assistance-programme'.toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1242':
          try {
            c[1242] |= !/^\/health-information/i.test(d['dom.pathname']) && !/^\/oneidentity/i.test(d['dom.pathname']) && !/^\/touchdashboard/i.test(d['dom.pathname']) && !/^\/healthcare-professionals/i.test(d['dom.pathname']) && !/^\/intermediaries/i.test(d['dom.pathname']);
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '1243':
          try {
            c[1243] |= d['dom.domain'].toString().toLowerCase() == 'scsmoke1.np.bupa.co.uk'.toLowerCase() || d['dom.domain'].toString().toLowerCase() == 'scsmoke1.np.bupa.co.uk'.toLowerCase() || d['dom.domain'].toString().toLowerCase() == 'scuat1.np.bupa.co.uk'.toLowerCase() || d['dom.domain'].toString().toLowerCase() == 'scuat2.np.bupa.co.uk'.toLowerCase() || d['dom.domain'].toString().toLowerCase() == 'www.bupa.co.uk'.toLowerCase();
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
        case '919':
          try {
            c[919] |= d['dom.url'].toString().toLowerCase().indexOf('mybupa'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('providers-online'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('tobflex'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('intermediariesonline'.toLowerCase()) < 0 && d['dom.url'].toString().toLowerCase().indexOf('registration/templates/custom'.toLowerCase()) < 0;
          } catch (e) {
            utag.DB(e);
          }
          ;
          break;
      }
    }
  };
  utag.pre = function () {
    utag.loader.initdata();
    utag.pagevars();
    try {
      utag.loader.RD(utag.data);
    } catch (e) {
      utag.DB(e);
    }
    ;
    utag.loader.loadrules();
  };
  utag.loader.GET = function () {
    utag.cl = {
      '_all_': 1
    };
    utag.pre();
    utag.handler.extend = [function (a, b) {
      try {
        utag.runonce = utag.runonce || {};
        utag.runonce.ext = utag.runonce.ext || {};
        if (typeof utag.runonce.ext[21238] == 'undefined') {
          utag.runonce.ext[21238] = 1;
          if (1) {
            e = document;
            f = "//analytics.analytics-egain.com/onetag/" + "EG19273997";
            h = "//analytics.analytics-egain.com/onetag/" + "EG18253742";
            if (window.location.hostname.endsWith("bupa.co.uk")) {
              var oneTag = function (e, h) {
                var d,
                  c,
                  b,
                  a = e.createElement("iframe");
                a.src = "about:blank";
                a.title = "eGain OneTag - Products Assistant";
                a.setAttribute("aria-hidden", "true");
                a.id = "egot_iframe";
                (a.frameElement || a).style.cssText = "width:0;height:0;border:0;display:none";
                b = e.getElementsByTagName("script");
                b = b[b.length - 1];
                b.parentNode.insertBefore(a, b);
                try {
                  c = a.contentWindow.document;
                } catch (g) {
                  d = e.domain, a.src = "javascript:var d=document.open();d.domain='" + d + "';void(0);", c = a.contentWindow.document;
                }
                c.open()._d = function () {
                  var a = this.createElement("script");
                  d && (this.domain = d);
                  a.src = h;
                  this.isEGFIF = !0;
                  this.body.appendChild(a);
                };
                c.write('<body onload="document._d();" style="margin:0px">');
                c.close();
              };
              oneTag(e, h);
            } else {
              var oneTag = function (e, f) {
                var d,
                  c,
                  b,
                  a = e.createElement("iframe");
                a.src = "about:blank";
                a.title = "eGain OneTag - Products Assistant";
                a.setAttribute("aria-hidden", "true");
                a.id = "egot_iframe";
                (a.frameElement || a).style.cssText = "width:0;height:0;border:0;display:none";
                b = e.getElementsByTagName("script");
                b = b[b.length - 1];
                b.parentNode.insertBefore(a, b);
                try {
                  c = a.contentWindow.document;
                } catch (g) {
                  d = e.domain, a.src = "javascript:var d=document.open();d.domain='" + d + "';void(0);", c = a.contentWindow.document;
                }
                c.open()._d = function () {
                  var a = this.createElement("script");
                  d && (this.domain = d);
                  a.src = f;
                  this.isEGFIF = !0;
                  this.body.appendChild(a);
                };
                c.write('<body onload="document._d();" style="margin:0px">');
                c.close();
              };
              oneTag(e, f);
            }
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      var prop;
      for (prop in b) {
        if (b.hasOwnProperty(prop) && prop.indexOf("qp.") === 0) {
          b[prop.toLowerCase()] = b[prop];
        }
      }
    }, function (a, b, c) {
      for (c in utag.loader.GV(b)) {
        if (c === 'cp.trace_id') continue;
        try {
          b[c] = b[c] instanceof Array ? b[c] : b[c] instanceof Object ? b[c] : b[c].toString().toLowerCase();
        } catch (e) {
          utag.DB(e);
        }
      }
    }, function (a, b) {
      try {
        if (1) {
          b['dc_fire'] = 'true';
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b, c, d, e, f, g) {
      if (b['dom.pathname'].toString().toLowerCase() == '/business/business-health-insurance/online-quote'.toLowerCase()) {
        d = b['pageName'];
        if (typeof d == 'undefined') return;
        c = [{
          'b:uk:b2b:business-health-insurance:online-quote': 'step1'
        }, {
          'b:uk:b2b:business-health-insurance:online-quote:ac:business-details': 'step2'
        }, {
          'b:uk:b2b:business-health-insurance:online-quote:ac:employee-details': 'step3'
        }, {
          'b:uk:b2b:business-health-insurance:online-quote:ac:quote-details': 'step4'
        }];
        var m = false;
        for (e = 0; e < c.length; e++) {
          for (f in utag.loader.GV(c[e])) {
            if (d == f) {
              b['sme_funnel_step'] = c[e][f];
              m = true;
            }
            ;
          }
          ;
          if (m) break;
        }
        ;
        if (!m) b['sme_funnel_step'] = '';
      }
    }, function (a, b) {
      try {
        if (1) {
          b.customer_postcode_district = utag.data.customer_postcode.split(" ")[0];
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      b['previous_page_name'] = b['cp.utag_main__prevpage'];
      utag.loader.SC('utag_main', {
        '_prevpage': b['pageName'] + ';exp-1h'
      });
    }, function (a, b) {
      try {
        if (1) {
          if (b.event_name == 'api_call' && b.pageName.toString().toLowerCase() == 'buk:health:health-insurance:quote-cover-summary'.toLowerCase() && typeof b.bby_contactkey != 'undefined' && b.bby_contactkey !== '') {
            b.tealium_event = "bby_lead";
          }
          if (b.event_name == 'api_call' && b.pageName.toString().toLowerCase() == 'buk:health:health-insurance:quote-summary'.toLowerCase() && typeof b.bby_quote_id != 'undefined' && b.bby_quote_id !== '') {
            b.tealium_event = "bby_quote";
          }
          if (b['ut.event'] == 'view' && b.pageName.toString().toLowerCase() == 'buk:health:health-insurance:quote-summary'.toLowerCase()) {
            b.tealium_event = "bby_quote_tiktok";
          }
          if (b.pageName.toString().toLowerCase() == 'buk:health:health-insurance:quote-thank-you'.toLowerCase() && typeof b.bby_quote_id != 'undefined' && b.bby_quote_id !== '') {
            b.tealium_event = "bby_purchase";
          }
          if (b.pageName.toString().toLowerCase() == 'buk:bookingtool:appointment-confirmation'.toLowerCase() && typeof b.obt_booking_trans_id != 'undefined' && b.obt_booking_trans_id !== '') {
            b.tealium_event = "obt_purchase";
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['PageName'].toString().toLowerCase() == 'buk:bupa-oneidentity-verify-recovery'.toLowerCase() || b['dom.pathname'].toString().toLowerCase() == '/oneidentity/verify-recovery'.toLowerCase()) {
          document.cookie = "medallia_new_reg=" + '1' + ";path=/;domain=" + utag.cfg.domain + ";expires=";
          b['cp.medallia_new_reg'] = '1';
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b, p) {
      try {
        utag.loader.tntFFLRcleanup();
      } catch (e) {
        utag.DB(e);
      }
    }];
    utag.handler.cfg_extend = [{
      "end": 0,
      "alr": 0,
      "blr": 1,
      "id": "21238",
      "bwq": 0
    }, {
      "bwq": 0,
      "id": "20984",
      "blr": 0,
      "alr": 1,
      "end": 0
    }, {
      "alr": 1,
      "blr": 0,
      "id": "20985",
      "bwq": 0,
      "end": 0
    }, {
      "end": 0,
      "blr": 0,
      "id": "20583",
      "alr": 1,
      "bwq": 0
    }, {
      "alr": 1,
      "blr": 0,
      "id": "21003",
      "bwq": 0,
      "end": 0
    }, {
      "bwq": 0,
      "alr": 1,
      "id": "21124",
      "blr": 0,
      "end": 0
    }, {
      "bwq": 0,
      "alr": 1,
      "id": "21278",
      "blr": 0,
      "end": 0
    }, {
      "bwq": 0,
      "id": "21253",
      "blr": 0,
      "alr": 1,
      "end": 0
    }, {
      "alr": 1,
      "blr": 0,
      "id": "21319",
      "bwq": 0,
      "end": 0
    }, {
      "end": 0,
      "alr": 1,
      "blr": 0,
      "id": "20543",
      "bwq": 0
    }];
    utag.loader.initcfg = function () {
      utag.loader.cfg = {
        "2990": {
          load: 4,
          send: 1,
          v: 202308181012,
          wait: 0,
          tid: 1191
        },
        "3098": {
          load: 4,
          send: utag.cond[1235],
          v: 202301140950,
          wait: 0,
          tid: 20108
        },
        "2991": {
          load: 4,
          send: utag.cond[1218],
          v: 202309060622,
          wait: 1,
          tid: 19063
        },
        "2422": {
          load: utag.cond[1220],
          send: 1,
          v: 202005090726,
          wait: 1,
          tid: 2045
        },
        "2978": {
          load: utag.cond[919] && utag.cond[1220],
          send: 1,
          v: 202005090726,
          wait: 1,
          tid: 7132
        },
        "3018": {
          load: utag.cond[1207] && utag.cond[1220],
          send: 1,
          v: 202005090726,
          wait: 1,
          tid: 7132
        },
        "3020": {
          load: utag.cond[1218] && utag.cond[123],
          send: 1,
          v: 202202260708,
          wait: 1,
          tid: 18023
        },
        "2981": {
          load: utag.cond[1220] && utag.cond[1208],
          send: 1,
          v: 202304061019,
          wait: 1,
          tid: 6026
        },
        "3009": {
          load: utag.cond[1207] && utag.cond[1220],
          send: 1,
          v: 202304061019,
          wait: 1,
          tid: 7133
        },
        "2987": {
          load: utag.cond[1220] && utag.cond[1219] && utag.cond[1197],
          send: 1,
          v: 202005090726,
          wait: 1,
          tid: 20011
        },
        "2976": {
          load: utag.cond[1220],
          send: 1,
          v: 202005090726,
          wait: 1,
          tid: 12047
        },
        "3030": {
          load: utag.cond[1205] && utag.cond[1220],
          send: 1,
          v: 202207160748,
          wait: 1,
          tid: 4049
        },
        "3103": {
          load: utag.cond[1220] && utag.cond[1239],
          send: 1,
          v: 202207160748,
          wait: 1,
          tid: 4049
        },
        "3033": {
          load: utag.cond[1220] && utag.cond[1156],
          send: 1,
          v: 202005090726,
          wait: 1,
          tid: 4049
        },
        "3034": {
          load: utag.cond[1220] && utag.cond[1218] && utag.cond[1156],
          send: 1,
          v: 202005090726,
          wait: 1,
          tid: 4049
        },
        "3035": {
          load: utag.cond[1220],
          send: 1,
          v: 202301140950,
          wait: 1,
          tid: 4049
        },
        "3036": {
          load: utag.cond[1220] && utag.cond[1229],
          send: 1,
          v: 202303291321,
          wait: 1,
          tid: 4049
        },
        "3041": {
          load: utag.cond[1220] && utag.cond[1237] && utag.cond[1229],
          send: 1,
          v: 202206180640,
          wait: 1,
          tid: 4049
        },
        "3068": {
          load: utag.cond[1220],
          send: 1,
          v: 202301140950,
          wait: 1,
          tid: 4049
        },
        "3070": {
          load: utag.cond[1218],
          send: 1,
          v: 202012120731,
          wait: 1,
          tid: 8009
        },
        "3088": {
          load: utag.cond[1218] && utag.cond[1230],
          send: 1,
          v: 202107310533,
          wait: 1,
          tid: 20067
        },
        "3093": {
          load: utag.cond[1220] && utag.cond[1231],
          send: 1,
          v: 202110131105,
          wait: 1,
          tid: 17001
        },
        "3096": {
          load: utag.cond[1220] && utag.cond[1231],
          send: 1,
          v: 202112040812,
          wait: 1,
          tid: 17001
        },
        "3113": {
          load: utag.cond[1218],
          send: 1,
          v: 202301140950,
          wait: 1,
          tid: 20200
        },
        "3114": {
          load: utag.cond[1220] && utag.cond[1240],
          send: 1,
          v: 202301140950,
          wait: 1,
          tid: 7132
        },
        "3124": {
          load: utag.cond[1207] && utag.cond[1220],
          send: 1,
          v: 202304061019,
          wait: 1,
          tid: 7142
        },
        "3140": {
          load: utag.cond[1220] && utag.cond[1243] && utag.cond[1242],
          send: 1,
          v: 202309060622,
          wait: 1,
          tid: 20119
        },
        "3141": {
          load: utag.cond[1220] && utag.cond[1242] && utag.cond[1243],
          send: 1,
          v: 202309060622,
          wait: 1,
          tid: 16044
        }
      };
      utag.loader.cfgsort = ["2990", "3098", "2991", "2422", "2978", "3018", "3020", "2981", "3009", "2987", "2976", "3030", "3103", "3033", "3034", "3035", "3036", "3041", "3068", "3070", "3088", "3093", "3096", "3113", "3114", "3124", "3140", "3141"];
    };
    utag.loader.initcfg();
  };
  if (typeof utag_cfg_ovrd != 'undefined') {
    for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i];
  }
  ;
  utag.loader.PINIT = function (a, b, c) {
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }
    try {
      this.GET();
      if (utag.handler.RE('view', utag.data, "blr")) {
        utag.handler.LR(utag.data);
      }
    } catch (e) {
      utag.DB(e);
    }
    ;
    a = this.cfg;
    c = 0;
    for (b in this.GV(a)) {
      if (a[b].block == 1 || a[b].load > 0 && typeof a[b].src != 'undefined' && a[b].src != '') {
        a[b].block = 1;
        c = 1;
        this.bq[b] = 1;
      }
    }
    if (c == 1) {
      for (b in this.GV(a)) {
        if (a[b].block) {
          a[b].id = b;
          if (a[b].load == 4) a[b].load = 1;
          a[b].cb = function () {
            var d = this.uid;
            utag.loader.cfg[d].cbf = 1;
            utag.loader.LOAD(d);
          };
          this.AS(a[b]);
        }
      }
    }
    if (c == 0) this.INIT();
  };
  utag.loader.INIT = function (a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;else this.ol = 1;
    if (utag.cfg.noview != true) utag.handler.RE('view', utag.data, "alr");
    utag.rpt.ts['i'] = new Date();
    d = this.cfgsort;
    for (a = 0; a < d.length; a++) {
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      if (b.block != 1) {
        if (utag.loader.bk[b.id] || (utag.cfg.readywait || utag.cfg.noview) && b.load == 4) {
          this.f[b.id] = 0;
          utag.loader.LOAD(b.id);
        } else if (b.wait == 1 && utag.loader.rf == 0) {
          utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b);
          this.f[b.id] = 2;
        } else if (b.load > 0) {
          utag.DB('utag.loader.INIT: loading ' + b.id);
          this.lq.push(b);
          this.AS(b);
        }
      }
    }
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function (a) {
      if (utag.loader.rf == 0) {
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf = 1;
        utag.loader.WQ();
      }
    });else if (this.lq.length > 0) utag.loader.rf = 1;else if (this.lq.length == 0) utag.loader.END();
    return 1;
  };
  utag.loader.EV('', 'ready', function (a) {
    if (utag.loader.efr != 1) {
      utag.loader.efr = 1;
      try {
        if (typeof utag.runonce == 'undefined') utag.runonce = {};
        utag.jdh = function (h, i, j, k) {
          h = utag.jdhc.length;
          if (h == 0) window.clearInterval(utag.jdhi);else {
            for (i = 0; i < h; i++) {
              j = utag.jdhc[i];
              k = jQuery(j.i).is(":visible") ? 1 : 0;
              if (k != j.s) {
                if (j.e == (j.s = k)) jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide");
              }
            }
          }
        };
        utag.jdhi = window.setInterval(utag.jdh, 250);
        utag.jdhc = [];
        if (1) {
          if (typeof utag.runonce[21314] == 'undefined') {
            utag.runonce[21314] = 1;
            jQuery(document.body).on('mousedown', '*[data-tracking-id]', function (e) {
              utag.link({
                "event_name": 'click',
                "click_name": $(this).attr("data-tracking-id")
              });
            });
          }
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        if (typeof utag.linkHandler == 'undefined') {
          utag.linkHandler = function (a, b, c, d, e) {
            if (!a) a = window.event;
            if (a.target) b = a.target;else if (a.srcElement) b = a.srcElement;
            if (b.nodeType == 3) b = b.parentNode;
            if (typeof b == 'undefined' || typeof b.tagName == 'undefined') return;
            c = b.tagName.toLowerCase();
            if (c == 'body') return;
            if (c != 'a') {
              for (d = 0; d < 5; d++) {
                if (typeof b != 'undefined' && b.parentNode) b = b.parentNode;
                c = b != null && b.tagName ? b.tagName.toLowerCase() : '';
                if (c == 'a') break;else if (c == 'body') return;
              }
            }
            if (c != 'a') return;
            var lt = b.text ? b.text : b.innerText ? b.innerText : '';
            if ((lt == '' || /^\s+$/.test(lt)) && typeof b.innerHTML != 'undefined') {
              lt = b.innerHTML.toLowerCase();
              if (lt.indexOf('<img ') > -1) {
                d = lt.indexOf('alt="');
                if (d > -1) {
                  e = lt.indexOf('"', d + 5);
                  lt = lt.substring(d + 5, e);
                } else {
                  d = lt.indexOf('src="');
                  if (d > -1) {
                    e = lt.indexOf('"', d + 5);
                    lt = lt.substring(d + 5, e);
                  }
                }
              }
            }
            var hr = b.href,
              hrnq = b.href.split('?')[0];
            var obj = {
              link_obj: b,
              link_text: lt,
              link_url: hrnq,
              link_type: 'exit link',
              event_name: 'link'
            };
            c = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls'.split(',');
            for (d = 0; d < c.length; d++) {
              e = new RegExp(c[d] + '$');
              if (e.test(hrnq)) {
                obj.link_type = 'download link';
                break;
              }
            }
            ;
            try {
              var link = b;
              (function () {
                const int_domain = new RegExp(window.location.host);
                if (int_domain.test(obj.link_url) && obj.link_type == "download link") {
                  utag.link({
                    "event_name": "download_link",
                    "download_link_url": obj.link_url,
                    "download_link_name": obj.link_text
                  });
                } else if (!int_domain.test(obj.link_url) && obj.link_url.match(/^http/i)) {
                  utag.link({
                    "event_name": "exit_link",
                    "exit_link_url": obj.link_url,
                    "exit_link_name": obj.link_text
                  });
                }
              })();
            } catch (e) {}
            ;
            if (obj['link_text'] == 'DONOTTRACK') utag.link(obj);
          };
          utag.loader.EV(document, 'mousedown', utag.linkHandler);
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        try {
          if (1) {
            if (sessionStorage.getItem("search_data") !== null) {
              var search_data = JSON.parse(sessionStorage.search_data);
            } else {
              var search_data = {};
            }
            $(document).on("click", ".nav-search", function () {
              utag.link({
                "event_name": "click",
                "click_name": "search_button_click"
              });
            });
            $('body').on('click', '.popular-searches-grid .w-40 ul li', function (e) {
              search_data.search_method = "popular_search";
              sessionStorage.setItem("search_data", JSON.stringify(search_data));
            });
            $('body').on('click', '#result-page, #searchAjax', function (e) {
              search_data.search_method = "unique_search";
              sessionStorage.setItem("search_data", JSON.stringify(search_data));
            });
            $('body').on('keypress', '#gsa_search', function (e) {
              if (e.keyCode === 13) {
                search_data.search_method = "unique_search";
                sessionStorage.setItem("search_data", JSON.stringify(search_data));
              }
            });
            var search_items = document.querySelectorAll('.search-listing-tile-result-container ul li');
            var search_result_page_num = document.querySelector(".pagination_link_selected");
            if (search_result_page_num === null) {
              search_result_page_num = 1;
            } else {
              search_result_page_num = search_result_page_num.childNodes[3].textContent;
            }
            function searchItems(i) {
              search_items[i].childNodes[1].children[0].addEventListener("click", function () {
                utag.link({
                  "event_name": "search_link",
                  "search_result_term": search_items[i].childNodes[1].children[0].textContent.trim(),
                  "search_result_link": search_items[i].childNodes[1].children[0].href,
                  "search_result_link_num": i + 1,
                  "search_result_page_num": search_result_page_num
                });
              }, false);
            }
            for (var i = 0; i < search_items.length; i++) {
              searchItems(i);
            }
            $(document).on('click', '#previous_link, .pagination_link, #next_link', function () {
              search_items = document.querySelectorAll('.search-listing-tile-result-container ul li');
              search_result_page_num = document.querySelector(".pagination_link_selected").childNodes[3].textContent;
              for (var i = 0; i < search_items.length; i++) {
                searchItems(i);
              }
            });
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        if (/^b:uk:intermediariesonline/i.test(utag.data['pageName']) || /^b:uk:intermediariesonline/i.test(utag.data['pagename'])) {
          if (typeof utag.runonce[21125] == 'undefined') {
            utag.runonce[21125] = 1;
            jQuery(document.body).on('mousedown', 'a[data-tracking][data-tracking-type="bupa-connect-click"]', function (e) {
              utag.link({
                "event_name": 'click',
                "click_name": $(this).attr("data-tracking").toLowerCase()
              });
            });
          }
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        try {
          if (/^\/dental\/dental-care/i.test(utag.data['dom.pathname'])) {
            if (document.location.pathname.indexOf('/dental/dental-care/practices/platinum') > -1) {
              $(document.body).on('click', '[data-tracking="tel-emergency"]', function (e) {
                utag.link({
                  "event_name": "click",
                  "click_name": 'bdc_platinum_practice_tel_emergency'
                });
              });
              $(document.body).on('click', '[data-tracking="tel-non-emergency"]', function (e) {
                utag.link({
                  "event_name": "click",
                  "click_name": 'bdc_platinum_practice_tel_non_emergency'
                });
              });
            } else if (document.location.pathname.indexOf('/dental/dental-care/practices') > -1) {
              $(document.body).on('click', '[data-tracking="tel-emergency"]', function (e) {
                utag.link({
                  "event_name": "click",
                  "click_name": 'bdc_practice_tel_emergency'
                });
              });
              $(document.body).on('click', '[data-tracking="tel-non-emergency"]', function (e) {
                utag.link({
                  "event_name": "click",
                  "click_name": 'bdc_practice_tel_non_emergency'
                });
              });
            } else if (document.location.pathname.indexOf('/dental/dental-care/campaign') > -1) {
              $(document.body).on('click', '[data-tracking="tel-non-emergency"]', function (e) {
                utag.link({
                  "event_name": "click",
                  "click_name": 'bdc_campaign_tel_non_emergency'
                });
              });
            }
            if (document.location.pathname.indexOf('/dental/dental-care') > -1) {
              $(document.body).on('click', '[data-tel-href="tel:01454771490"]', function (e) {
                utag.link({
                  "event_name": "click",
                  "click_name": "dental implants click to call"
                });
              });
            }
            if (document.location.pathname.indexOf('/dental/dental-care') > -1) {
              $(document.body).on('click', '[data-tel-href="tel:01454808580"]', function (e) {
                utag.link({
                  "event_name": "click",
                  "click_name": "bsp call centre click to call"
                });
              });
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        try {
          if (/^\/dental\/dental-care/i.test(utag.data['dom.pathname'])) {
            $(window).on('bupaFormSubmitted', function (e) {
              if (window.location.pathname.indexOf("/dental/dental-care/practices/platinum") > -1) {
                utag.link({
                  "event_name": "form_submit",
                  "form_name": "bdc_platinum_practice_form_" + e.state.form_id
                });
              } else if (window.location.pathname.indexOf("/dental/dental-care/practices") > -1) {
                utag.link({
                  "event_name": "form_submit",
                  "form_name": "bdc_practice_form_" + e.state.form_id
                });
              } else if (window.location.pathname.indexOf("/dental/dental-care") > -1) {
                utag.link({
                  "event_name": "form_submit",
                  "form_name": "bdc_form_" + e.state.form_id
                });
              }
            });
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        try {
          if (utag.data['dom.pathname'].toString().toLowerCase().indexOf('/dental/dental-care/practices/platinum-lister-house-endodontic-and-restorative-dental-centre'.toLowerCase()) > -1) {
            jQuery(document.body).on("mousedown", "a[data-analytics-link='MakeABooking']", function (e) {
              console.log("FIRED");
              utag.link({
                'ga_eventCategory': 'OLB',
                'ga_eventAction': 'Enter',
                'ga_eventLabel': 'SOE OLB'
              }, null, [3009]);
            });
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        if (utag.data['dom.pathname'].toString().toLowerCase() == '/dental/dental-care/practices'.toLowerCase()) {
          if (typeof utag.runonce[21159] == 'undefined') {
            utag.runonce[21159] = 1;
            jQuery(document.body).on('click', '#btnLoadMore', function (e) {
              utag.link({
                "event_name": 'click',
                "click_name": '$(this).attr("id").toLowerCase()'
              });
            });
          }
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        try {
          if (1) {
            waitForElelement('#onetrust-accept-btn-handler', function () {
              $(document).on("click", "#onetrust-accept-btn-handler, #accept-recommended-btn-handler, .save-preference-btn-handler", function () {
                utag.view(utag.data);
              });
            });
            $(".img-help-icon, a.bby-modal-btn-2.pointer, img.bby-modal-btn-2").click(function () {
              setTimeout(function () {
                OptanonWrapper();
                if (window.location.href.indexOf("health/health-insurance")) {
                  $("a#onetrust-pc-btn-handler").click(function () {
                    OneTrust.ToggleInfoDisplay();
                  });
                }
              }, 1000);
            });
            $(document).on("click", ".changePage", function () {
              setTimeout(function () {
                OptanonWrapper();
                $(document).on("click", "#onetrust-pc-btn-handler", function (e) {
                  if ($('.video-container').length > 0) {
                    e.stopPropagation();
                    OneTrust.ToggleInfoDisplay();
                  } else {}
                });
              }, 1500);
            });
            function waitForElelement(selector, callback) {
              var timeoutSetInterval = 0;
              var poller = setInterval(function () {
                var elem = window.document.querySelector(selector);
                if (!elem && timeoutSetInterval <= 50) {
                  timeoutSetInterval++;
                  return;
                }
                clearInterval(poller);
                callback();
              }, 200);
            }
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        try {
          if (1) {
            window.document.addEventListener('bupa_tracking_event', function (e) {
              utag.link(e.detail);
            }, false);
            window.document.addEventListener('bupa_tracking_pageview', function (e) {
              utag.view(e.detail);
            }, false);
          }
        } catch (e) {
          utag.DB(e);
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        if (/^\/dental/i.test(utag.data['dom.pathname'])) {
          if (typeof utag.runonce[21242] == 'undefined') {
            utag.runonce[21242] = 1;
            jQuery(document.body).on('click', '.promo-button a.findout-more', function (e) {
              utag.link({
                "event_name": 'click',
                "click_name": 'promotional_banner_click'
              });
            });
          }
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
      try {
        if (/^\/health\/health-insurance\/quote-thank-you/i.test(utag.data['dom.pathname'])) {
          if (typeof utag.runonce[21257] == 'undefined') {
            utag.runonce[21257] = 1;
            jQuery(document.body).on('click', '.mcomplete-form-btn', function (e) {
              utag.link({
                "event_name": 'click',
                "click_name": 'medical_history_form'
              });
            });
          }
        }
      } catch (e) {
        utag.DB(e);
      }
      ;
    }
  });
  if (utag.cfg.readywait || utag.cfg.waittimer) {
    utag.loader.EV('', 'ready', function (a) {
      if (utag.loader.rf == 0) {
        utag.loader.rf = 1;
        utag.cfg.readywait = 1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function () {
          utag.loader.PINIT();
        }, utag.cfg.waittimer || 1);
      }
    });
  } else {
    utag.loader.PINIT();
  }
}
//tealium universal tag - utag.2990 ut4.0.202309060622, Copyright 2023 Tealium.com Inc. All Rights Reserved.
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  return `session-${Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('')}`;
}
var loadLibrary = function () {
  var e = function () {
    "use strict";

    function e(t) {
      "@babel/helpers - typeof";

      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(t);
    }
    function t(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function n() {
      return {
        callbacks: {},
        add: function (e, t) {
          this.callbacks[e] = this.callbacks[e] || [];
          var n = this.callbacks[e].push(t) - 1,
            i = this;
          return function () {
            i.callbacks[e].splice(n, 1);
          };
        },
        execute: function (e, t) {
          if (this.callbacks[e]) {
            t = void 0 === t ? [] : t, t = t instanceof Array ? t : [t];
            try {
              for (; this.callbacks[e].length;) {
                var n = this.callbacks[e].shift();
                "function" == typeof n ? n.apply(null, t) : n instanceof Array && n[1].apply(n[0], t);
              }
              delete this.callbacks[e];
            } catch (e) {}
          }
        },
        executeAll: function (e, t) {
          (t || e && !U.isObjectEmpty(e)) && Object.keys(this.callbacks).forEach(function (t) {
            var n = void 0 !== e[t] ? e[t] : "";
            this.execute(t, n);
          }, this);
        },
        hasCallbacks: function () {
          return Boolean(Object.keys(this.callbacks).length);
        }
      };
    }
    function i(e, t, n) {
      var i = null == e ? void 0 : e[t];
      return void 0 === i ? n : i;
    }
    function r(e) {
      for (var t = /^\d+$/, n = 0, i = e.length; n < i; n++) if (!t.test(e[n])) return !1;
      return !0;
    }
    function a(e, t) {
      for (; e.length < t.length;) e.push("0");
      for (; t.length < e.length;) t.push("0");
    }
    function o(e, t) {
      for (var n = 0; n < e.length; n++) {
        var i = parseInt(e[n], 10),
          r = parseInt(t[n], 10);
        if (i > r) return 1;
        if (r > i) return -1;
      }
      return 0;
    }
    function s(e, t) {
      if (e === t) return 0;
      var n = e.toString().split("."),
        i = t.toString().split(".");
      return r(n.concat(i)) ? (a(n, i), o(n, i)) : NaN;
    }
    function c(e) {
      return e === Object(e) && 0 === Object.keys(e).length;
    }
    function u(e) {
      return "function" == typeof e || e instanceof Array && e.length;
    }
    function l() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
          return !0;
        };
      this.log = Ie("log", e, t), this.warn = Ie("warn", e, t), this.error = Ie("error", e, t);
    }
    function d() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.cookieName,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = n.cookies;
      if (!t || !i) return {
        get: xe,
        set: xe,
        remove: xe
      };
      var r = {
        remove: function () {
          i.remove(t);
        },
        get: function () {
          var e = i.get(t),
            n = {};
          try {
            n = JSON.parse(e);
          } catch (e) {
            n = {};
          }
          return n;
        },
        set: function (e, n) {
          n = n || {};
          var a = r.get(),
            o = Object.assign(a, e);
          i.set(t, JSON.stringify(o), {
            domain: n.optInCookieDomain || "",
            cookieLifetime: n.optInStorageExpiry || 3419e4,
            expires: !0
          });
        }
      };
      return r;
    }
    function f(e) {
      this.name = this.constructor.name, this.message = e, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack;
    }
    function p() {
      function e(e, t) {
        var n = Ae(e);
        return n.length ? n.every(function (e) {
          return !!t[e];
        }) : Oe(t);
      }
      function t() {
        M(A), O(de.COMPLETE), _(h.status, h.permissions), s && m.set(h.permissions, {
          optInCookieDomain: c,
          optInStorageExpiry: u
        }), C.execute(He);
      }
      function n(e) {
        return function (n, i) {
          if (!Me(n)) throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");
          return O(de.CHANGED), Object.assign(A, ke(Ae(n), e)), i || t(), h;
        };
      }
      var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = i.doesOptInApply,
        a = i.previousPermissions,
        o = i.preOptInApprovals,
        s = i.isOptInStorageEnabled,
        c = i.optInCookieDomain,
        u = i.optInStorageExpiry,
        l = i.isIabContext,
        f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        p = f.cookies,
        g = Ne(a);
      Fe(g, "Invalid `previousPermissions`!"), Fe(o, "Invalid `preOptInApprovals`!");
      var m = d({
          cookieName: "adobeujs-optin"
        }, {
          cookies: p
        }),
        h = this,
        _ = le(h),
        C = _e(),
        S = Le(g),
        I = Le(o),
        v = s ? m.get() : {},
        D = {},
        y = function (e, t) {
          return Pe(e) || t && Pe(t) ? de.COMPLETE : de.PENDING;
        }(S, v),
        b = function (e, t, n) {
          var i = ke(he, !r);
          return r ? Object.assign({}, i, e, t, n) : i;
        }(I, S, v),
        A = Ee(b),
        O = function (e) {
          return y = e;
        },
        M = function (e) {
          return b = e;
        };
      h.deny = n(!1), h.approve = n(!0), h.denyAll = h.deny.bind(h, he), h.approveAll = h.approve.bind(h, he), h.isApproved = function (t) {
        return e(t, h.permissions);
      }, h.isPreApproved = function (t) {
        return e(t, I);
      }, h.fetchPermissions = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t ? h.on(de.COMPLETE, e) : xe;
        return !r || r && h.isComplete || !!o ? e(h.permissions) : t || C.add(He, function () {
          return e(h.permissions);
        }), n;
      }, h.complete = function () {
        h.status === de.CHANGED && t();
      }, h.registerPlugin = function (e) {
        if (!e || !e.name || "function" != typeof e.onRegister) throw new Error(Be);
        D[e.name] || (D[e.name] = e, e.onRegister.call(e, h));
      }, h.execute = Ue(D), h.memoizeContent = function (e) {
        we(e) && m.set(e, {
          optInCookieDomain: c,
          optInStorageExpiry: u
        });
      }, h.getMemoizedContent = function (e) {
        var t = m.get();
        if (t) return t[e];
      }, Object.defineProperties(h, {
        permissions: {
          get: function () {
            return b;
          }
        },
        status: {
          get: function () {
            return y;
          }
        },
        Categories: {
          get: function () {
            return fe;
          }
        },
        doesOptInApply: {
          get: function () {
            return !!r;
          }
        },
        isPending: {
          get: function () {
            return h.status === de.PENDING;
          }
        },
        isComplete: {
          get: function () {
            return h.status === de.COMPLETE;
          }
        },
        __plugins: {
          get: function () {
            return Object.keys(D);
          }
        },
        isIabContext: {
          get: function () {
            return l;
          }
        }
      });
    }
    function g(e, t) {
      function n() {
        r = null, e.call(e, new f("The call took longer than you wanted!"));
      }
      function i() {
        r && (clearTimeout(r), e.apply(e, arguments));
      }
      if (void 0 === t) return e;
      var r = setTimeout(n, t);
      return i;
    }
    function m() {
      if (window.__tcfapi) return window.__tcfapi;
      var e = window;
      if (e === window.top) return void ye.error("__tcfapi not found");
      for (var t; !t;) {
        e = e.parent;
        try {
          e.frames.__tcfapiLocator && (t = e);
        } catch (e) {}
        if (e === window.top) break;
      }
      if (!t) return void ye.error("__tcfapi not found");
      var n = {};
      return window.__tcfapi = function (e, i, r, a) {
        var o = Math.random() + "",
          s = {
            __tcfapiCall: {
              command: e,
              parameter: a,
              version: i,
              callId: o
            }
          };
        n[o] = r, t.postMessage(s, "*");
      }, window.addEventListener("message", function (e) {
        var t = e.data;
        if ("string" == typeof t) try {
          t = JSON.parse(e.data);
        } catch (e) {}
        if (t.__tcfapiReturn) {
          var i = t.__tcfapiReturn;
          "function" == typeof n[i.callId] && (n[i.callId](i.returnValue, i.success), delete n[i.callId]);
        }
      }, !1), window.__tcfapi;
    }
    function h(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = !0 === e.vendor.consents[t],
        r = n.every(function (t) {
          return !0 === e.purpose.consents[t];
        });
      return i && r;
    }
    function _() {
      var e = this;
      e.name = "iabPlugin", e.version = "0.0.2";
      var t,
        n = _e(),
        i = {
          transparencyAndConsentData: null
        },
        r = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return i[e] = t;
        };
      e.fetchConsentData = function (e) {
        var t = e.callback,
          n = e.timeout,
          i = g(t, n);
        a({
          callback: i
        });
      }, e.isApproved = function (e) {
        var t = e.callback,
          n = e.category,
          r = e.timeout;
        if (i.transparencyAndConsentData) return t(null, h(i.transparencyAndConsentData, pe[n], ge[n]));
        var o = g(function (e, i) {
          t(e, h(i, pe[n], ge[n]));
        }, r);
        a({
          category: n,
          callback: o
        });
      }, e.onRegister = function (n) {
        t = n;
        var i = Object.keys(pe),
          r = function (e, t) {
            !e && t && (i.forEach(function (e) {
              var i = h(t, pe[e], ge[e]);
              n[i ? "approve" : "deny"](e, !0);
            }), n.complete());
          };
        e.fetchConsentData({
          callback: r
        });
      };
      var a = function (e) {
          var a = e.callback;
          if (i.transparencyAndConsentData) return a(null, i.transparencyAndConsentData);
          n.add("FETCH_CONSENT_DATA", a), o(function (e, a) {
            if (a) {
              var o = Ee(e),
                s = t.getMemoizedContent("iabConsentHash"),
                c = De(o.tcString).toString(32);
              o.consentString = e.tcString, o.hasConsentChangedSinceLastCmpPull = s !== c, r("transparencyAndConsentData", o), t.memoizeContent({
                iabConsentHash: c
              });
            }
            n.execute("FETCH_CONSENT_DATA", [null, i.transparencyAndConsentData]);
          });
        },
        o = function (e) {
          var t = Ve(pe),
            n = m();
          "function" == typeof n && n("getTCData", 2, e, t);
        };
    }
    var C = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    Object.assign = Object.assign || function (e) {
      for (var t, n, i = 1; i < arguments.length; ++i) {
        n = arguments[i];
        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      }
      return e;
    };
    var S,
      I,
      v = {
        HANDSHAKE: "HANDSHAKE",
        GETSTATE: "GETSTATE",
        PARENTSTATE: "PARENTSTATE"
      },
      D = {
        MCMID: "MCMID",
        MCAID: "MCAID",
        MCAAMB: "MCAAMB",
        MCAAMLH: "MCAAMLH",
        MCOPTOUT: "MCOPTOUT",
        CUSTOMERIDS: "CUSTOMERIDS"
      },
      y = {
        MCMID: "getMarketingCloudVisitorID",
        MCAID: "getAnalyticsVisitorID",
        MCAAMB: "getAudienceManagerBlob",
        MCAAMLH: "getAudienceManagerLocationHint",
        MCOPTOUT: "isOptedOut",
        ALLFIELDS: "getVisitorValues"
      },
      b = {
        CUSTOMERIDS: "getCustomerIDs"
      },
      A = {
        MCMID: "getMarketingCloudVisitorID",
        MCAAMB: "getAudienceManagerBlob",
        MCAAMLH: "getAudienceManagerLocationHint",
        MCOPTOUT: "isOptedOut",
        MCAID: "getAnalyticsVisitorID",
        CUSTOMERIDS: "getCustomerIDs",
        ALLFIELDS: "getVisitorValues"
      },
      O = {
        MC: "MCMID",
        A: "MCAID",
        AAM: "MCAAMB"
      },
      M = {
        MCMID: "MCMID",
        MCOPTOUT: "MCOPTOUT",
        MCAID: "MCAID",
        MCAAMLH: "MCAAMLH",
        MCAAMB: "MCAAMB"
      },
      k = {
        UNKNOWN: 0,
        AUTHENTICATED: 1,
        LOGGED_OUT: 2
      },
      E = {
        GLOBAL: "global"
      },
      T = {
        LAX: "Lax",
        STRICT: "Strict",
        NONE: "None"
      },
      L = {
        MESSAGES: v,
        STATE_KEYS_MAP: D,
        ASYNC_API_MAP: y,
        SYNC_API_MAP: b,
        ALL_APIS: A,
        FIELDGROUP_TO_FIELD: O,
        FIELDS: M,
        AUTH_STATE: k,
        OPT_OUT: E,
        SAME_SITE_VALUES: T
      },
      P = L.STATE_KEYS_MAP,
      R = function (e) {
        function t() {}
        function n(t, n) {
          var i = this;
          return function () {
            var r = e(0, t),
              a = {};
            return a[t] = r, i.setStateAndPublish(a), n(r), r;
          };
        }
        this.getMarketingCloudVisitorID = function (e) {
          e = e || t;
          var i = this.findField(P.MCMID, e),
            r = n.call(this, P.MCMID, e);
          return void 0 !== i ? i : r();
        }, this.getVisitorValues = function (e) {
          this.getMarketingCloudVisitorID(function (t) {
            e({
              MCMID: t
            });
          });
        };
      },
      w = L.MESSAGES,
      x = L.ASYNC_API_MAP,
      N = L.SYNC_API_MAP,
      F = function () {
        function e() {}
        function t(e, t) {
          var n = this;
          return function () {
            return n.callbackRegistry.add(e, t), n.messageParent(w.GETSTATE), "";
          };
        }
        function n(n) {
          this[x[n]] = function (i) {
            i = i || e;
            var r = this.findField(n, i),
              a = t.call(this, n, i);
            return void 0 !== r ? r : a();
          };
        }
        function i(t) {
          this[N[t]] = function () {
            return this.findField(t, e) || {};
          };
        }
        Object.keys(x).forEach(n, this), Object.keys(N).forEach(i, this);
      },
      j = L.ASYNC_API_MAP,
      V = function () {
        Object.keys(j).forEach(function (e) {
          this[j[e]] = function (t) {
            this.callbackRegistry.add(e, t);
          };
        }, this);
      },
      U = function (e, t) {
        return t = {
          exports: {}
        }, e(t, t.exports), t.exports;
      }(function (t, n) {
        n.isObjectEmpty = function (e) {
          return e === Object(e) && 0 === Object.keys(e).length;
        }, n.isValueEmpty = function (e) {
          return "" === e || n.isObjectEmpty(e);
        };
        var i = function () {
          var e = navigator.appName,
            t = navigator.userAgent;
          return "Microsoft Internet Explorer" === e || t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0 && t.indexOf("Windows NT 6") >= 0;
        };
        n.getIeVersion = function () {
          return document.documentMode ? document.documentMode : i() ? 7 : null;
        }, n.isFirefox = function (e) {
          return !!/Firefox\/([0-9\.]+)(?:\s|$)/.test(e || window.navigator.userAgent);
        }, n.encodeAndBuildRequest = function (e, t) {
          return e.map(encodeURIComponent).join(t);
        }, n.isObject = function (t) {
          return null !== t && "object" === e(t) && !1 === Array.isArray(t);
        }, n.defineGlobalNamespace = function () {
          return window.adobe = n.isObject(window.adobe) ? window.adobe : {}, window.adobe;
        }, n.pluck = function (e, t) {
          return t.reduce(function (t, n) {
            return e[n] && (t[n] = e[n]), t;
          }, Object.create(null));
        }, n.parseOptOut = function (e, t, n) {
          t || (t = n, e.d_optout && e.d_optout instanceof Array && (t = e.d_optout.join(",")));
          var i = parseInt(e.d_ottl, 10);
          return isNaN(i) && (i = 7200), {
            optOut: t,
            d_ottl: i
          };
        }, n.normalizeBoolean = function (e) {
          var t = e;
          return "true" === e ? t = !0 : "false" === e && (t = !1), t;
        };
      }),
      H = (U.isObjectEmpty, U.isValueEmpty, U.getIeVersion, U.isFirefox, U.encodeAndBuildRequest, U.isObject, U.defineGlobalNamespace, U.pluck, U.parseOptOut, U.normalizeBoolean, n),
      B = L.MESSAGES,
      G = {
        0: "prefix",
        1: "orgID",
        2: "state"
      },
      Y = function (e, t) {
        this.parse = function (e) {
          try {
            var t = {};
            return e.data.split("|").forEach(function (e, n) {
              if (void 0 !== e) {
                t[G[n]] = 2 !== n ? e : JSON.parse(e);
              }
            }), t;
          } catch (e) {}
        }, this.isInvalid = function (n) {
          var i = this.parse(n);
          if (!i || Object.keys(i).length < 2) return !0;
          var r = e !== i.orgID,
            a = !t || n.origin !== t,
            o = -1 === Object.keys(B).indexOf(i.prefix);
          return r || a || o;
        }, this.send = function (n, i, r) {
          var a = i + "|" + e;
          r && r === Object(r) && (a += "|" + JSON.stringify(r));
          try {
            n.postMessage(a, t);
          } catch (e) {}
        };
      },
      q = L.MESSAGES,
      W = function (e, t, n, i) {
        function r(e) {
          Object.assign(p, e);
        }
        function a(e) {
          Object.assign(p.state, e), Object.assign(p.state.ALLFIELDS, e), p.callbackRegistry.executeAll(p.state);
        }
        function o(e) {
          if (!h.isInvalid(e)) {
            m = !1;
            var t = h.parse(e);
            p.setStateAndPublish(t.state);
          }
        }
        function s(e) {
          !m && g && (m = !0, h.send(i, e));
        }
        function c() {
          r(new R(n._generateID)), p.getMarketingCloudVisitorID(), p.callbackRegistry.executeAll(p.state, !0), C.removeEventListener("message", u);
        }
        function u(e) {
          if (!h.isInvalid(e)) {
            var t = h.parse(e);
            m = !1, C.clearTimeout(p._handshakeTimeout), C.removeEventListener("message", u), r(new F(p)), C.addEventListener("message", o), p.setStateAndPublish(t.state), p.callbackRegistry.hasCallbacks() && s(q.GETSTATE);
          }
        }
        function l() {
          g && postMessage ? (C.addEventListener("message", u), s(q.HANDSHAKE), p._handshakeTimeout = setTimeout(c, 250)) : c();
        }
        function d() {
          C.s_c_in || (C.s_c_il = [], C.s_c_in = 0), p._c = "Visitor", p._il = C.s_c_il, p._in = C.s_c_in, p._il[p._in] = p, C.s_c_in++;
        }
        function f() {
          function e(e) {
            0 !== e.indexOf("_") && "function" == typeof n[e] && (p[e] = function () {});
          }
          Object.keys(n).forEach(e), p.getSupplementalDataID = n.getSupplementalDataID, p.isAllowed = function () {
            return !0;
          };
        }
        var p = this,
          g = t.whitelistParentDomain;
        p.state = {
          ALLFIELDS: {}
        }, p.version = n.version, p.marketingCloudOrgID = e, p.cookieDomain = n.cookieDomain || "", p._instanceType = "child";
        var m = !1,
          h = new Y(e, g);
        p.callbackRegistry = H(), p.init = function () {
          d(), f(), r(new V(p)), l();
        }, p.findField = function (e, t) {
          if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
        }, p.messageParent = s, p.setStateAndPublish = a;
      },
      X = L.MESSAGES,
      K = L.ALL_APIS,
      J = L.ASYNC_API_MAP,
      z = L.FIELDGROUP_TO_FIELD,
      Q = function (e, t) {
        function n() {
          var t = {};
          return Object.keys(K).forEach(function (n) {
            var i = K[n],
              r = e[i]();
            U.isValueEmpty(r) || (t[n] = r);
          }), t;
        }
        function i() {
          var t = [];
          return e._loading && Object.keys(e._loading).forEach(function (n) {
            if (e._loading[n]) {
              var i = z[n];
              t.push(i);
            }
          }), t.length ? t : null;
        }
        function r(t) {
          return function n(r) {
            var a = i();
            if (a) {
              var o = J[a[0]];
              e[o](n, !0);
            } else t();
          };
        }
        function a(e, i) {
          var r = n();
          t.send(e, i, r);
        }
        function o(e) {
          c(e), a(e, X.HANDSHAKE);
        }
        function s(e) {
          r(function () {
            a(e, X.PARENTSTATE);
          })();
        }
        function c(n) {
          function i(i) {
            r.call(e, i), t.send(n, X.PARENTSTATE, {
              CUSTOMERIDS: e.getCustomerIDs()
            });
          }
          var r = e.setCustomerIDs;
          e.setCustomerIDs = i;
        }
        return function (e) {
          if (!t.isInvalid(e)) {
            (t.parse(e).prefix === X.HANDSHAKE ? o : s)(e.source);
          }
        };
      },
      $ = function (e, t) {
        function n(e) {
          return function (n) {
            i[e] = n, r++, r === a && t(i);
          };
        }
        var i = {},
          r = 0,
          a = Object.keys(e).length;
        Object.keys(e).forEach(function (t) {
          var i = e[t];
          if (i.fn) {
            var r = i.args || [];
            r.unshift(n(t)), i.fn.apply(i.context || null, r);
          }
        });
      },
      Z = {
        get: function (e) {
          e = encodeURIComponent(e);
          var t = (";" + document.cookie).split(" ").join(";"),
            n = t.indexOf(";" + e + "="),
            i = n < 0 ? n : t.indexOf(";", n + 1);
          return n < 0 ? "" : decodeURIComponent(t.substring(n + 2 + e.length, i < 0 ? t.length : i));
        },
        set: function (e, t, n) {
          var r = i(n, "cookieLifetime"),
            a = i(n, "expires"),
            o = i(n, "domain"),
            s = i(n, "secure"),
            c = i(n, "sameSite"),
            u = s ? "Secure" : "",
            l = c ? "SameSite=" + c + ";" : "";
          if (a && "SESSION" !== r && "NONE" !== r) {
            var d = "" !== t ? parseInt(r || 0, 10) : -60;
            if (d) a = new Date(), a.setTime(a.getTime() + 1e3 * d);else if (1 === a) {
              a = new Date();
              var f = a.getYear();
              a.setYear(f + 2 + (f < 1900 ? 1900 : 0));
            }
          } else a = 0;
          return e && "NONE" !== r ? (document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; path=/;" + (a ? " expires=" + a.toGMTString() + ";" : "") + (o ? " domain=" + o + ";" : "") + l + u, this.get(e) === t) : 0;
        },
        remove: function (e, t) {
          var n = i(t, "domain");
          n = n ? " domain=" + n + ";" : "";
          var r = i(t, "secure"),
            a = i(t, "sameSite"),
            o = r ? "Secure" : "",
            s = a ? "SameSite=" + a + ";" : "";
          document.cookie = encodeURIComponent(e) + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;" + n + s + o;
        }
      },
      ee = function (e, t) {
        var n;
        !e && C.location && (e = C.location.hostname), n = e;
        var i,
          r = n.split("."),
          a = t || {};
        for (i = r.length - 2; i >= 0; i--) if (a.domain = r.slice(i).join("."), Z.set("TEST_AMCV_COOKIE_WRITE", "cookie", a)) return Z.remove("TEST_AMCV_COOKIE_WRITE", a), a.domain;
        return "";
      },
      te = {
        compare: s,
        isLessThan: function (e, t) {
          return s(e, t) < 0;
        },
        areVersionsDifferent: function (e, t) {
          return 0 !== s(e, t);
        },
        isGreaterThan: function (e, t) {
          return s(e, t) > 0;
        },
        isEqual: function (e, t) {
          return 0 === s(e, t);
        }
      },
      ne = !!C.postMessage,
      ie = {
        postMessage: function (e, t, n) {
          var i = 1;
          t && (ne ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (n.location = t.replace(/#.*$/, "") + "#" + +new Date() + i++ + "&" + e));
        },
        receiveMessage: function (e, t) {
          var n;
          try {
            ne && (e && (n = function (n) {
              if ("string" == typeof t && n.origin !== t || "[object Function]" === Object.prototype.toString.call(t) && !1 === t(n.origin)) return !1;
              e(n);
            }), C.addEventListener ? C[e ? "addEventListener" : "removeEventListener"]("message", n) : C[e ? "attachEvent" : "detachEvent"]("onmessage", n));
          } catch (e) {}
        }
      },
      re = function (e) {
        var t,
          n,
          i = "0123456789",
          r = "",
          a = "",
          o = 8,
          s = 10,
          c = 10,
          u = "" + Date.now(),
          l = u.substr(-6).split("").reverse("").join("");
        if (1 == e) {
          for (i += "ABCDEF", t = 0; 16 > t; t++) n = Math.floor(Math.random() * o), 4 > t && l[t] < o && (n = +l[t]), r += i.substring(n, n + 1), n = Math.floor(Math.random() * o), a += i.substring(n, n + 1), o = 16;
          return r + "-" + a;
        }
        for (t = 0; 19 > t; t++) n = Math.floor(Math.random() * s), 6 > t && l[t] < s ? (r += l[t], n = l[t]) : r += i.substring(n, n + 1), 0 === t && 9 == n ? s = 3 : (1 == t || 2 == t) && 10 != s && 2 > n ? s = 10 : 2 < t && (s = 10), n = Math.floor(Math.random() * c), a += i.substring(n, n + 1), 0 === t && 9 == n ? c = 3 : (1 == t || 2 == t) && 10 != c && 2 > n ? c = 10 : 2 < t && (c = 10);
        return r + a;
      },
      ae = function (e, t) {
        return {
          corsMetadata: function () {
            var e = "none",
              t = !0;
            return "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest() ? e = "XMLHttpRequest" : "undefined" != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (t = !1), Object.prototype.toString.call(C.HTMLElement).indexOf("Constructor") > 0 && (t = !1)), {
              corsType: e,
              corsCookiesEnabled: t
            };
          }(),
          getCORSInstance: function () {
            return "none" === this.corsMetadata.corsType ? null : new C[this.corsMetadata.corsType]();
          },
          fireCORS: function (t, n, i) {
            function r(e) {
              var n;
              try {
                if ((n = JSON.parse(e)) !== Object(n)) return void a.handleCORSError(t, null, "Response is not JSON");
              } catch (e) {
                return void a.handleCORSError(t, e, "Error parsing response as JSON");
              }
              try {
                for (var i = t.callback, r = C, o = 0; o < i.length; o++) r = r[i[o]];
                r(n);
              } catch (e) {
                a.handleCORSError(t, e, "Error forming callback function");
              }
            }
            var a = this;
            n && (t.loadErrorHandler = n);
            try {
              var o = this.getCORSInstance();
              o.open("get", t.corsUrl + "&ts=" + new Date().getTime(), !0), "XMLHttpRequest" === this.corsMetadata.corsType && (o.withCredentials = !0, o.timeout = e.loadTimeout, o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onreadystatechange = function () {
                4 === this.readyState && 200 === this.status && r(this.responseText);
              }), o.onerror = function (e) {
                a.handleCORSError(t, e, "onerror");
              }, o.ontimeout = function (e) {
                a.handleCORSError(t, e, "ontimeout");
              }, o.send(), e._log.requests.push(t.corsUrl);
            } catch (e) {
              this.handleCORSError(t, e, "try-catch");
            }
          },
          handleCORSError: function (t, n, i) {
            e.CORSErrors.push({
              corsData: t,
              error: n,
              description: i
            }), t.loadErrorHandler && ("ontimeout" === i ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1));
          }
        };
      },
      oe = {
        POST_MESSAGE_ENABLED: !!C.postMessage,
        DAYS_BETWEEN_SYNC_ID_CALLS: 1,
        MILLIS_PER_DAY: 864e5,
        ADOBE_MC: "adobe_mc",
        ADOBE_MC_SDID: "adobe_mc_sdid",
        VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
        ADOBE_MC_TTL_IN_MIN: 5,
        VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
        FIRST_PARTY_SERVER_COOKIE: "s_ecid"
      },
      se = function (e, t) {
        var n = C.document;
        return {
          THROTTLE_START: 3e4,
          MAX_SYNCS_LENGTH: 649,
          throttleTimerSet: !1,
          id: null,
          onPagePixels: [],
          iframeHost: null,
          getIframeHost: function (e) {
            if ("string" == typeof e) {
              var t = e.split("/");
              return t[0] + "//" + t[2];
            }
          },
          subdomain: null,
          url: null,
          getUrl: function () {
            var t,
              i = "http://fast.",
              r = "?d_nsid=" + e.idSyncContainerID + "#" + encodeURIComponent(n.location.origin);
            return this.subdomain || (this.subdomain = "nosubdomainreturned"), e.loadSSL && (i = e.idSyncSSLUseAkamai ? "https://fast." : "https://"), t = i + this.subdomain + ".demdex.net/dest5.html" + r, this.iframeHost = this.getIframeHost(t), this.id = "destination_publishing_iframe_" + this.subdomain + "_" + e.idSyncContainerID, t;
          },
          checkDPIframeSrc: function () {
            var t = "?d_nsid=" + e.idSyncContainerID + "#" + encodeURIComponent(n.location.href);
            "string" == typeof e.dpIframeSrc && e.dpIframeSrc.length && (this.id = "destination_publishing_iframe_" + (e._subdomain || this.subdomain || new Date().getTime()) + "_" + e.idSyncContainerID, this.iframeHost = this.getIframeHost(e.dpIframeSrc), this.url = e.dpIframeSrc + t);
          },
          idCallNotProcesssed: null,
          doAttachIframe: !1,
          startedAttachingIframe: !1,
          iframeHasLoaded: null,
          iframeIdChanged: null,
          newIframeCreated: null,
          originalIframeHasLoadedAlready: null,
          iframeLoadedCallbacks: [],
          regionChanged: !1,
          timesRegionChanged: 0,
          sendingMessages: !1,
          messages: [],
          messagesPosted: [],
          messagesReceived: [],
          messageSendingInterval: oe.POST_MESSAGE_ENABLED ? null : 100,
          onPageDestinationsFired: [],
          jsonForComparison: [],
          jsonDuplicates: [],
          jsonWaiting: [],
          jsonProcessed: [],
          canSetThirdPartyCookies: !0,
          receivedThirdPartyCookiesNotification: !1,
          readyToAttachIframePreliminary: function () {
            return !(e.idSyncDisableSyncs || e.disableIdSyncs || e.idSyncDisable3rdPartySyncing || e.disableThirdPartyCookies || e.disableThirdPartyCalls);
          },
          readyToAttachIframe: function () {
            return this.readyToAttachIframePreliminary() && (this.doAttachIframe || e._doAttachIframe) && (this.subdomain && "nosubdomainreturned" !== this.subdomain || e._subdomain) && this.url && !this.startedAttachingIframe;
          },
          attachIframe: function () {
            function e() {
              r = n.createElement("iframe"), r.sandbox = "allow-scripts allow-same-origin", r.title = "Adobe ID Syncing iFrame", r.id = i.id, r.name = i.id + "_name", r.style.cssText = "display: none; width: 0; height: 0;", r.src = i.url, i.newIframeCreated = !0, t(), n.body.appendChild(r);
            }
            function t(e) {
              r.addEventListener("load", function () {
                r.className = "aamIframeLoaded", i.iframeHasLoaded = !0, i.fireIframeLoadedCallbacks(e), i.requestToProcess();
              });
            }
            this.startedAttachingIframe = !0;
            var i = this,
              r = n.getElementById(this.id);
            r ? "IFRAME" !== r.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, "aamIframeLoaded" !== r.className ? (this.originalIframeHasLoadedAlready = !1, t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = r, this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."), this.requestToProcess())) : e(), this.iframe = r;
          },
          fireIframeLoadedCallbacks: function (e) {
            this.iframeLoadedCallbacks.forEach(function (t) {
              "function" == typeof t && t({
                message: e || "The destination publishing iframe was attached and loaded successfully."
              });
            }), this.iframeLoadedCallbacks = [];
          },
          requestToProcess: function (t) {
            function n() {
              r.jsonForComparison.push(t), r.jsonWaiting.push(t), r.processSyncOnPage(t);
            }
            var i,
              r = this;
            if (t === Object(t) && t.ibs) if (i = JSON.stringify(t.ibs || []), this.jsonForComparison.length) {
              var a,
                o,
                s,
                c = !1;
              for (a = 0, o = this.jsonForComparison.length; a < o; a++) if (s = this.jsonForComparison[a], i === JSON.stringify(s.ibs || [])) {
                c = !0;
                break;
              }
              c ? this.jsonDuplicates.push(t) : n();
            } else n();
            if ((this.receivedThirdPartyCookiesNotification || !oe.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
              var u = this.jsonWaiting.shift();
              this.process(u), this.requestToProcess();
            }
            e.idSyncDisableSyncs || e.disableIdSyncs || !this.iframeHasLoaded || !this.messages.length || this.sendingMessages || (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function () {
              r.messageSendingInterval = oe.POST_MESSAGE_ENABLED ? null : 150;
            }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages());
          },
          getRegionAndCheckIfChanged: function (t, n) {
            var i = e._getField("MCAAMLH"),
              r = t.d_region || t.dcs_region;
            return i ? r && (e._setFieldExpire("MCAAMLH", n), e._setField("MCAAMLH", r), parseInt(i, 10) !== r && (this.regionChanged = !0, this.timesRegionChanged++, e._setField("MCSYNCSOP", ""), e._setField("MCSYNCS", ""), i = r)) : (i = r) && (e._setFieldExpire("MCAAMLH", n), e._setField("MCAAMLH", i)), i || (i = ""), i;
          },
          processSyncOnPage: function (e) {
            var t, n, i, r;
            if ((t = e.ibs) && t instanceof Array && (n = t.length)) for (i = 0; i < n; i++) r = t[i], r.syncOnPage && this.checkFirstPartyCookie(r, "", "syncOnPage");
          },
          process: function (e) {
            var t,
              n,
              i,
              r,
              a,
              o = encodeURIComponent,
              s = !1;
            if ((t = e.ibs) && t instanceof Array && (n = t.length)) for (s = !0, i = 0; i < n; i++) r = t[i], a = [o("ibs"), o(r.id || ""), o(r.tag || ""), U.encodeAndBuildRequest(r.url || [], ","), o(r.ttl || ""), "", "", r.fireURLSync ? "true" : "false"], r.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(a.join("|")) : r.fireURLSync && this.checkFirstPartyCookie(r, a.join("|")));
            s && this.jsonProcessed.push(e);
          },
          checkFirstPartyCookie: function (t, n, i) {
            var r = "syncOnPage" === i,
              a = r ? "MCSYNCSOP" : "MCSYNCS";
            e._readVisitor();
            var o,
              s,
              c = e._getField(a),
              u = !1,
              l = !1,
              d = Math.ceil(new Date().getTime() / oe.MILLIS_PER_DAY);
            c ? (o = c.split("*"), s = this.pruneSyncData(o, t.id, d), u = s.dataPresent, l = s.dataValid, u && l || this.fireSync(r, t, n, o, a, d)) : (o = [], this.fireSync(r, t, n, o, a, d));
          },
          pruneSyncData: function (e, t, n) {
            var i,
              r,
              a,
              o = !1,
              s = !1;
            for (r = 0; r < e.length; r++) i = e[r], a = parseInt(i.split("-")[1], 10), i.match("^" + t + "-") ? (o = !0, n < a ? s = !0 : (e.splice(r, 1), r--)) : n >= a && (e.splice(r, 1), r--);
            return {
              dataPresent: o,
              dataValid: s
            };
          },
          manageSyncsSize: function (e) {
            if (e.join("*").length > this.MAX_SYNCS_LENGTH) for (e.sort(function (e, t) {
              return parseInt(e.split("-")[1], 10) - parseInt(t.split("-")[1], 10);
            }); e.join("*").length > this.MAX_SYNCS_LENGTH;) e.shift();
          },
          fireSync: function (t, n, i, r, a, o) {
            var s = this;
            if (t) {
              if ("img" === n.tag) {
                var c,
                  u,
                  l,
                  d,
                  f = n.url,
                  p = e.loadSSL ? "https:" : "http:";
                for (c = 0, u = f.length; c < u; c++) {
                  l = f[c], d = /^\/\//.test(l);
                  var g = new Image();
                  g.addEventListener("load", function (t, n, i, r) {
                    return function () {
                      s.onPagePixels[t] = null, e._readVisitor();
                      var o,
                        c = e._getField(a),
                        u = [];
                      if (c) {
                        o = c.split("*");
                        var l, d, f;
                        for (l = 0, d = o.length; l < d; l++) f = o[l], f.match("^" + n.id + "-") || u.push(f);
                      }
                      s.setSyncTrackingData(u, n, i, r);
                    };
                  }(this.onPagePixels.length, n, a, o)), g.src = (d ? p : "") + l, this.onPagePixels.push(g);
                }
              }
            } else this.addMessage(i), this.setSyncTrackingData(r, n, a, o);
          },
          addMessage: function (t) {
            var n = encodeURIComponent,
              i = n(e._enableErrorReporting ? "---destpub-debug---" : "---destpub---");
            this.messages.push((oe.POST_MESSAGE_ENABLED ? "" : i) + t);
          },
          setSyncTrackingData: function (t, n, i, r) {
            t.push(n.id + "-" + (r + Math.ceil(n.ttl / 60 / 24))), this.manageSyncsSize(t), e._setField(i, t.join("*"));
          },
          sendMessages: function () {
            var e,
              t = this,
              n = "",
              i = encodeURIComponent;
            this.regionChanged && (n = i("---destpub-clear-dextp---"), this.regionChanged = !1), this.messages.length ? oe.POST_MESSAGE_ENABLED ? (e = n + i("---destpub-combined---") + this.messages.join("%01"), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(n + e), setTimeout(function () {
              t.sendMessages();
            }, this.messageSendingInterval)) : this.sendingMessages = !1;
          },
          postMessage: function (e) {
            ie.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e);
          },
          receiveMessage: function (e) {
            var t,
              n = /^---destpub-to-parent---/;
            "string" == typeof e && n.test(e) && (t = e.replace(n, "").split("|"), "canSetThirdPartyCookies" === t[0] && (this.canSetThirdPartyCookies = "true" === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e));
          },
          processIDCallData: function (i) {
            (null == this.url || i.subdomain && "nosubdomainreturned" === this.subdomain) && ("string" == typeof e._subdomain && e._subdomain.length ? this.subdomain = e._subdomain : this.subdomain = i.subdomain || "", this.url = this.getUrl()), i.ibs instanceof Array && i.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (e.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || "complete" === n.readyState || "loaded" === n.readyState) && this.attachIframe() : this.attachIframeASAP()), "function" == typeof e.idSyncIDCallResult ? e.idSyncIDCallResult(i) : this.requestToProcess(i), "function" == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(i);
          },
          canMakeSyncIDCall: function (t, n) {
            return e._forceSyncIDCall || !t || n - t > oe.DAYS_BETWEEN_SYNC_ID_CALLS;
          },
          attachIframeASAP: function () {
            function e() {
              t.startedAttachingIframe || (n.body ? t.attachIframe() : setTimeout(e, 30));
            }
            var t = this;
            e();
          }
        };
      },
      ce = {
        audienceManagerServer: {},
        audienceManagerServerSecure: {},
        cookieDomain: {},
        cookieLifetime: {},
        cookieName: {},
        doesOptInApply: {
          type: "boolean"
        },
        disableThirdPartyCalls: {
          type: "boolean"
        },
        discardTrackingServerECID: {
          type: "boolean"
        },
        idSyncAfterIDCallResult: {},
        idSyncAttachIframeOnWindowLoad: {
          type: "boolean"
        },
        idSyncContainerID: {},
        idSyncDisable3rdPartySyncing: {
          type: "boolean"
        },
        disableThirdPartyCookies: {
          type: "boolean"
        },
        idSyncDisableSyncs: {
          type: "boolean"
        },
        disableIdSyncs: {
          type: "boolean"
        },
        idSyncIDCallResult: {},
        idSyncSSLUseAkamai: {
          type: "boolean"
        },
        isCoopSafe: {
          type: "boolean"
        },
        isIabContext: {
          type: "boolean"
        },
        isOptInStorageEnabled: {
          type: "boolean"
        },
        loadSSL: {
          type: "boolean"
        },
        loadTimeout: {},
        marketingCloudServer: {},
        marketingCloudServerSecure: {},
        optInCookieDomain: {},
        optInStorageExpiry: {},
        overwriteCrossDomainMCIDAndAID: {
          type: "boolean"
        },
        preOptInApprovals: {},
        previousPermissions: {},
        resetBeforeVersion: {},
        sdidParamExpiry: {},
        serverState: {},
        sessionCookieName: {},
        secureCookie: {
          type: "boolean"
        },
        sameSiteCookie: {},
        takeTimeoutMetrics: {},
        trackingServer: {},
        trackingServerSecure: {},
        useLocalStorage: {
          type: "boolean"
        },
        whitelistIframeDomains: {},
        whitelistParentDomain: {}
      },
      ue = {
        getConfigNames: function () {
          return Object.keys(ce);
        },
        getConfigs: function () {
          return ce;
        },
        normalizeConfig: function (e, t) {
          return ce[e] && "boolean" === ce[e].type ? "function" != typeof t ? t : t() : t;
        }
      },
      le = function (e) {
        var t = {};
        return e.on = function (e, n, i) {
          if (!n || "function" != typeof n) throw new Error("[ON] Callback should be a function.");
          t.hasOwnProperty(e) || (t[e] = []);
          var r = t[e].push({
            callback: n,
            context: i
          }) - 1;
          return function () {
            t[e].splice(r, 1), t[e].length || delete t[e];
          };
        }, e.off = function (e, n) {
          t.hasOwnProperty(e) && (t[e] = t[e].filter(function (e) {
            if (e.callback !== n) return e;
          }));
        }, e.publish = function (e) {
          if (t.hasOwnProperty(e)) {
            var n = [].slice.call(arguments, 1);
            t[e].slice(0).forEach(function (e) {
              e.callback.apply(e.context, n);
            });
          }
        }, e.publish;
      },
      de = {
        PENDING: "pending",
        CHANGED: "changed",
        COMPLETE: "complete"
      },
      fe = {
        AAM: "aam",
        ADCLOUD: "adcloud",
        ANALYTICS: "aa",
        CAMPAIGN: "campaign",
        ECID: "ecid",
        LIVEFYRE: "livefyre",
        TARGET: "target",
        MEDIA_ANALYTICS: "mediaaa"
      },
      pe = (S = {}, t(S, fe.AAM, 565), t(S, fe.ECID, 565), S),
      ge = (I = {}, t(I, fe.AAM, [1, 10]), t(I, fe.ECID, [1, 10]), I),
      me = ["videoaa", "iabConsentHash"],
      he = function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }(fe),
      _e = function () {
        var e = {};
        return e.callbacks = Object.create(null), e.add = function (t, n) {
          if (!u(n)) throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");
          e.callbacks[t] = e.callbacks[t] || [];
          var i = e.callbacks[t].push(n) - 1;
          return function () {
            e.callbacks[t].splice(i, 1);
          };
        }, e.execute = function (t, n) {
          if (e.callbacks[t]) {
            n = void 0 === n ? [] : n, n = n instanceof Array ? n : [n];
            try {
              for (; e.callbacks[t].length;) {
                var i = e.callbacks[t].shift();
                "function" == typeof i ? i.apply(null, n) : i instanceof Array && i[1].apply(i[0], n);
              }
              delete e.callbacks[t];
            } catch (e) {}
          }
        }, e.executeAll = function (t, n) {
          (n || t && !c(t)) && Object.keys(e.callbacks).forEach(function (n) {
            var i = void 0 !== t[n] ? t[n] : "";
            e.execute(n, i);
          }, e);
        }, e.hasCallbacks = function () {
          return Boolean(Object.keys(e.callbacks).length);
        }, e;
      },
      Ce = function () {},
      Se = function (e) {
        var t = window,
          n = t.console;
        return !!n && "function" == typeof n[e];
      },
      Ie = function (e, t, n) {
        return n() ? function () {
          if (Se(e)) {
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            console[e].apply(console, [t].concat(i));
          }
        } : Ce;
      },
      ve = l,
      De = function () {
        for (var e = [], t = 0; t < 256; t++) {
          for (var n = t, i = 0; i < 8; i++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          e.push(n);
        }
        return function (t, n) {
          t = unescape(encodeURIComponent(t)), n || (n = 0), n ^= -1;
          for (var i = 0; i < t.length; i++) {
            var r = 255 & (n ^ t.charCodeAt(i));
            n = n >>> 8 ^ e[r];
          }
          return (n ^= -1) >>> 0;
        };
      }(),
      ye = new ve("[ADOBE OPT-IN]"),
      be = function (t, n) {
        return e(t) === n;
      },
      Ae = function (e, t) {
        return e instanceof Array ? e : be(e, "string") ? [e] : t || [];
      },
      Oe = function (e) {
        var t = Object.keys(e);
        return !!t.length && t.every(function (t) {
          return !0 === e[t];
        });
      },
      Me = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return !(!e || Te(e)) && Ae(e).every(function (e) {
          return he.indexOf(e) > -1 || t && me.indexOf(e) > -1;
        });
      },
      ke = function (e, t) {
        return e.reduce(function (e, n) {
          return e[n] = t, e;
        }, {});
      },
      Ee = function (e) {
        return JSON.parse(JSON.stringify(e));
      },
      Te = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e) && !e.length;
      },
      Le = function (e) {
        if (we(e)) return e;
        try {
          return JSON.parse(e);
        } catch (e) {
          return {};
        }
      },
      Pe = function (e) {
        return void 0 === e || (we(e) ? Me(Object.keys(e), !0) : Re(e));
      },
      Re = function (e) {
        try {
          var t = JSON.parse(e);
          return !!e && be(e, "string") && Me(Object.keys(t), !0);
        } catch (e) {
          return !1;
        }
      },
      we = function (e) {
        return null !== e && be(e, "object") && !1 === Array.isArray(e);
      },
      xe = function () {},
      Ne = function (e) {
        return be(e, "function") ? e() : e;
      },
      Fe = function (e, t) {
        Pe(e) || ye.error("".concat(t));
      },
      je = function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
      Ve = function (e) {
        return je(e).filter(function (e, t, n) {
          return n.indexOf(e) === t;
        });
      },
      Ue = function (e) {
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.command,
            i = t.params,
            r = void 0 === i ? {} : i,
            a = t.callback,
            o = void 0 === a ? xe : a;
          if (!n || -1 === n.indexOf(".")) throw new Error("[OptIn.execute] Please provide a valid command.");
          try {
            var s = n.split("."),
              c = e[s[0]],
              u = s[1];
            if (!c || "function" != typeof c[u]) throw new Error("Make sure the plugin and API name exist.");
            var l = Object.assign(r, {
              callback: o
            });
            c[u].call(c, l);
          } catch (e) {
            ye.error("[execute] Something went wrong: " + e.message);
          }
        };
      };
    f.prototype = Object.create(Error.prototype), f.prototype.constructor = f;
    var He = "fetchPermissions",
      Be = "[OptIn#registerPlugin] Plugin is invalid.";
    p.Categories = fe, p.TimeoutError = f;
    var Ge = Object.freeze({
        OptIn: p,
        IabPlugin: _
      }),
      Ye = function (e, t) {
        e.publishDestinations = function (n) {
          var i = arguments[1],
            r = arguments[2];
          try {
            r = "function" == typeof r ? r : n.callback;
          } catch (e) {
            r = function () {};
          }
          var a = t;
          if (!a.readyToAttachIframePreliminary()) return void r({
            error: "The destination publishing iframe is disabled in the Visitor library."
          });
          if ("string" == typeof n) {
            if (!n.length) return void r({
              error: "subdomain is not a populated string."
            });
            if (!(i instanceof Array && i.length)) return void r({
              error: "messages is not a populated array."
            });
            var o = !1;
            if (i.forEach(function (e) {
              "string" == typeof e && e.length && (a.addMessage(e), o = !0);
            }), !o) return void r({
              error: "None of the messages are populated strings."
            });
          } else {
            if (!U.isObject(n)) return void r({
              error: "Invalid parameters passed."
            });
            var s = n;
            if ("string" != typeof (n = s.subdomain) || !n.length) return void r({
              error: "config.subdomain is not a populated string."
            });
            var c = s.urlDestinations;
            if (!(c instanceof Array && c.length)) return void r({
              error: "config.urlDestinations is not a populated array."
            });
            var u = [];
            c.forEach(function (e) {
              U.isObject(e) && (e.hideReferrer ? e.message && a.addMessage(e.message) : u.push(e));
            });
            !function e() {
              u.length && setTimeout(function () {
                var t = new Image(),
                  n = u.shift();
                t.src = n.url, a.onPageDestinationsFired.push(n), e();
              }, 100);
            }();
          }
          a.iframe ? (r({
            message: "The destination publishing iframe is already attached and loaded."
          }), a.requestToProcess()) : !e.subdomain && e._getField("MCMID") ? (a.subdomain = n, a.doAttachIframe = !0, a.url = a.getUrl(), a.readyToAttachIframe() ? (a.iframeLoadedCallbacks.push(function (e) {
            r({
              message: "Attempted to attach and load the destination publishing iframe through this API call. Result: " + (e.message || "no result")
            });
          }), a.attachIframe()) : r({
            error: "Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."
          })) : a.iframeLoadedCallbacks.push(function (e) {
            r({
              message: "Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: " + (e.message || "no result")
            });
          });
        };
      },
      qe = function e(t) {
        function n(e, t) {
          return e >>> t | e << 32 - t;
        }
        for (var i, r, a = Math.pow, o = a(2, 32), s = "", c = [], u = 8 * t.length, l = e.h = e.h || [], d = e.k = e.k || [], f = d.length, p = {}, g = 2; f < 64; g++) if (!p[g]) {
          for (i = 0; i < 313; i += g) p[i] = g;
          l[f] = a(g, .5) * o | 0, d[f++] = a(g, 1 / 3) * o | 0;
        }
        for (t += "�"; t.length % 64 - 56;) t += "\0";
        for (i = 0; i < t.length; i++) {
          if ((r = t.charCodeAt(i)) >> 8) return;
          c[i >> 2] |= r << (3 - i) % 4 * 8;
        }
        for (c[c.length] = u / o | 0, c[c.length] = u, r = 0; r < c.length;) {
          var m = c.slice(r, r += 16),
            h = l;
          for (l = l.slice(0, 8), i = 0; i < 64; i++) {
            var _ = m[i - 15],
              C = m[i - 2],
              S = l[0],
              I = l[4],
              v = l[7] + (n(I, 6) ^ n(I, 11) ^ n(I, 25)) + (I & l[5] ^ ~I & l[6]) + d[i] + (m[i] = i < 16 ? m[i] : m[i - 16] + (n(_, 7) ^ n(_, 18) ^ _ >>> 3) + m[i - 7] + (n(C, 17) ^ n(C, 19) ^ C >>> 10) | 0);
            l = [v + ((n(S, 2) ^ n(S, 13) ^ n(S, 22)) + (S & l[1] ^ S & l[2] ^ l[1] & l[2])) | 0].concat(l), l[4] = l[4] + v | 0;
          }
          for (i = 0; i < 8; i++) l[i] = l[i] + h[i] | 0;
        }
        for (i = 0; i < 8; i++) for (r = 3; r + 1; r--) {
          var D = l[i] >> 8 * r & 255;
          s += (D < 16 ? 0 : "") + D.toString(16);
        }
        return s;
      },
      We = function (e, t) {
        return "SHA-256" !== t && "SHA256" !== t && "sha256" !== t && "sha-256" !== t || (e = qe(e)), e;
      },
      Xe = function (e) {
        return String(e).trim().toLowerCase();
      },
      Ke = Ge.OptIn;
    U.defineGlobalNamespace(), window.adobe.OptInCategories = Ke.Categories;
    var Je = function (t, n, i) {
      function r() {
        S._customerIDsHashChanged = !1;
      }
      function a(e) {
        var t = e;
        return function (e) {
          var n = e || A.location.href;
          try {
            var i = S._extractParamFromUri(n, t);
            if (i) return q.parsePipeDelimetedKeyValues(i);
          } catch (e) {}
        };
      }
      function o(e) {
        function t(e, t, n) {
          e && e.match(oe.VALID_VISITOR_ID_REGEX) && (n === T && (b = !0), t(e));
        }
        t(e[T], S.setMarketingCloudVisitorID, T), S._setFieldExpire(N, -1), t(e[w], S.setAnalyticsVisitorID);
      }
      function s(e) {
        e = e || {}, S._supplementalDataIDCurrent = e.supplementalDataIDCurrent || "", S._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, S._supplementalDataIDLast = e.supplementalDataIDLast || "", S._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {};
      }
      function c(e) {
        function t(e, t, n) {
          return n = n ? n += "|" : n, n += e + "=" + encodeURIComponent(t);
        }
        function n(e, n) {
          var i = n[0],
            r = n[1];
          return null != r && r !== F && (e = t(i, r, e)), e;
        }
        var i = e.reduce(n, "");
        return function (e) {
          var t = q.getTimestampInSeconds();
          return e = e ? e += "|" : e, e += "TS=" + t;
        }(i);
      }
      function u(e) {
        var t = e.minutesToLive,
          n = "";
        return (S.idSyncDisableSyncs || S.disableIdSyncs) && (n = n || "Error: id syncs have been disabled"), "string" == typeof e.dpid && e.dpid.length || (n = n || "Error: config.dpid is empty"), "string" == typeof e.url && e.url.length || (n = n || "Error: config.url is empty"), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (n = n || "Error: config.minutesToLive needs to be a positive number")), {
          error: n,
          ttl: t
        };
      }
      function l() {
        return !!S.configs.doesOptInApply && !(I.optIn.isComplete && d());
      }
      function d() {
        return S.configs.doesOptInApply && S.configs.isIabContext ? I.optIn.isApproved(I.optIn.Categories.ECID) && y : I.optIn.isApproved(I.optIn.Categories.ECID);
      }
      function f() {
        [["getMarketingCloudVisitorID"], ["setCustomerIDs", void 0], ["syncIdentity", void 0], ["getAnalyticsVisitorID"], ["getAudienceManagerLocationHint"], ["getLocationHint"], ["getAudienceManagerBlob"]].forEach(function (e) {
          var t = e[0],
            n = 2 === e.length ? e[1] : "",
            i = S[t];
          S[t] = function (e) {
            return d() && S.isAllowed() ? i.apply(S, arguments) : ("function" == typeof e && S._callCallback(e, [n]), n);
          };
        });
      }
      function p() {
        var e = S._getAudienceManagerURLData(),
          t = e.url;
        return S._loadData(E, t, null, e);
      }
      function g(e, t) {
        if (y = !0, e) throw new Error("[IAB plugin] : " + e);
        t && t.gdprApplies && (v = t.consentString, D = t.hasConsentChangedSinceLastCmpPull ? 1 : 0), p(), _();
      }
      function m(e, t) {
        if (y = !0, e) throw new Error("[IAB plugin] : " + e);
        t.gdprApplies && (v = t.consentString, D = t.hasConsentChangedSinceLastCmpPull ? 1 : 0), S.init(), _();
      }
      function h() {
        I.optIn.isComplete && (I.optIn.isApproved(I.optIn.Categories.ECID) ? S.configs.isIabContext ? I.optIn.execute({
          command: "iabPlugin.fetchConsentData",
          callback: m
        }) : (S.init(), _()) : S.configs.isIabContext ? I.optIn.execute({
          command: "iabPlugin.fetchConsentData",
          callback: g
        }) : (f(), _()));
      }
      function _() {
        I.optIn.off("complete", h);
      }
      if (!i || i.split("").reverse().join("") !== t) throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");
      var S = this,
        I = window.adobe,
        v = "",
        D = 0,
        y = !1,
        b = !1;
      S.version = "5.4.0";
      var A = C,
        O = A.Visitor;
      O.version = S.version, O.AuthState = L.AUTH_STATE, O.OptOut = L.OPT_OUT, A.s_c_in || (A.s_c_il = [], A.s_c_in = 0), S._c = "Visitor", S._il = A.s_c_il, S._in = A.s_c_in, S._il[S._in] = S, A.s_c_in++, S._instanceType = "regular", S._log = {
        requests: []
      }, S.marketingCloudOrgID = t, S.cookieName = "AMCV_" + t, S.sessionCookieName = "AMCVS_" + t;
      var M = {};
      n && n.secureCookie && n.sameSiteCookie && (M = {
        sameSite: n.sameSiteCookie,
        secure: n.secureCookie
      }), S.cookieDomain = S.useLocalStorage ? "" : ee(null, M), S.loadSSL = !0, S.loadTimeout = 3e4, S.CORSErrors = [], S.marketingCloudServer = S.audienceManagerServer = "dpm.demdex.net", S.sdidParamExpiry = 30;
      var k = null,
        E = "MC",
        T = "MCMID",
        P = "MCIDTS",
        R = "A",
        w = "MCAID",
        x = "AAM",
        N = "MCAAMB",
        F = "NONE",
        j = function (e) {
          return !Object.prototype[e];
        },
        V = ae(S);
      S.FIELDS = L.FIELDS, S.cookieRead = function (e) {
        return S.useLocalStorage ? e === S.sessionCookieName ? sessionStorage.getItem(e) : localStorage.getItem(e) : Z.get(e);
      }, S.cookieWrite = function (e, t, n) {
        var i = "" + t;
        if (S.useLocalStorage) return e === S.sessionCookieName ? sessionStorage.setItem(e, i) : localStorage.setItem(e, i);
        var r = S.cookieLifetime ? ("" + S.cookieLifetime).toUpperCase() : "",
          a = {
            expires: n,
            domain: S.cookieDomain,
            cookieLifetime: r
          };
        return S.configs && S.configs.secureCookie && "https:" === location.protocol && (a.secure = !0), S.configs && S.configs.sameSiteCookie && "https:" === location.protocol && (a.sameSite = L.SAME_SITE_VALUES[S.configs.sameSiteCookie.toUpperCase()] || "Lax"), Z.set(e, i, a);
      }, S.removeCookie = function (e) {
        if (S.useLocalStorage) return e === S.sessionCookieName ? sessionStorage.removeItem(e) : localStorage.removeItem(e);
        var t = {
          domain: S.cookieDomain
        };
        return S.configs && S.configs.secureCookie && "https:" === location.protocol && (t.secure = !0), S.configs && S.configs.sameSiteCookie && "https:" === location.protocol && (t.sameSite = L.SAME_SITE_VALUES[S.configs.sameSiteCookie.toUpperCase()] || "Lax"), Z.remove(e, t);
      }, S.resetState = function (e) {
        e ? S._mergeServerState(e) : s();
      }, S._isAllowedDone = !1, S._isAllowedFlag = !1, S.isAllowed = function () {
        return S._isAllowedDone || (S._isAllowedDone = !0, (S.cookieRead(S.cookieName) || S.cookieWrite(S.cookieName, "T", 1)) && (S._isAllowedFlag = !0)), "T" === S.cookieRead(S.cookieName) && S.removeCookie(S.cookieName), S._isAllowedFlag;
      }, S.setMarketingCloudVisitorID = function (e) {
        S._setMarketingCloudFields(e);
      }, S._use1stPartyMarketingCloudServer = !1, S.getMarketingCloudVisitorID = function (e, t) {
        S.marketingCloudServer && S.marketingCloudServer.indexOf(".demdex.net") < 0 && (S._use1stPartyMarketingCloudServer = !0);
        var n = S._getAudienceManagerURLData("_setMarketingCloudFields"),
          i = n.url;
        return S._getRemoteField(T, i, e, t, n);
      };
      var H = function (e, t) {
        var n = {};
        S.getMarketingCloudVisitorID(function () {
          t.forEach(function (e) {
            n[e] = S._getField(e, !0);
          }), -1 !== t.indexOf("MCOPTOUT") ? S.isOptedOut(function (t) {
            n.MCOPTOUT = t, e(n);
          }, null, !0) : e(n);
        }, !0);
      };
      S.getVisitorValues = function (e, t) {
        var n = {
            MCMID: {
              fn: S.getMarketingCloudVisitorID,
              args: [!0],
              context: S
            },
            MCOPTOUT: {
              fn: S.isOptedOut,
              args: [void 0, !0],
              context: S
            },
            MCAID: {
              fn: S.getAnalyticsVisitorID,
              args: [!0],
              context: S
            },
            MCAAMLH: {
              fn: S.getAudienceManagerLocationHint,
              args: [!0],
              context: S
            },
            MCAAMB: {
              fn: S.getAudienceManagerBlob,
              args: [!0],
              context: S
            }
          },
          i = t && t.length ? U.pluck(n, t) : n;
        t && -1 === t.indexOf("MCAID") ? H(e, t) : $(i, e);
      }, S._currentCustomerIDs = {}, S._customerIDsHashChanged = !1, S._newCustomerIDsHash = "", S.setCustomerIDs = function (t, n) {
        if (!S.isOptedOut() && t) {
          if (!U.isObject(t) || U.isObjectEmpty(t)) return !1;
          S._readVisitor();
          var i, a, o, s;
          for (i in t) if (j(i) && (S._currentCustomerIDs.dataSources = S._currentCustomerIDs.dataSources || {}, a = t[i], n = a.hasOwnProperty("hashType") ? a.hashType : n, a)) if ("object" === e(a)) {
            var c = {};
            if (a.id) {
              if (n) {
                if (!(s = We(Xe(a.id), n))) return;
                a.id = s, c.hashType = n;
              }
              c.id = a.id;
            }
            void 0 != a.authState && (c.authState = a.authState), S._currentCustomerIDs.dataSources[i] = c;
          } else if (n) {
            if (!(s = We(Xe(a), n))) return;
            S._currentCustomerIDs.dataSources[i] = {
              id: s,
              hashType: n
            };
          } else S._currentCustomerIDs.dataSources[i] = {
            id: a
          };
          var u = S.getCustomerIDs(!0),
            l = S._getField("MCCIDH"),
            d = "";
          l || (l = 0);
          for (o in u) {
            var f = u[o];
            if (!U.isObjectEmpty(f)) for (i in f) j(i) && (a = f[i], d += (d ? "|" : "") + i + "|" + (a.id ? a.id : "") + (a.authState ? a.authState : ""));
          }
          S._newCustomerIDsHash = String(S._hash(d)), S._newCustomerIDsHash !== l && (S._customerIDsHashChanged = !0, S._mapCustomerIDs(r));
        }
      }, S.syncIdentity = function (t, n) {
        if (!S.isOptedOut() && t) {
          if (!U.isObject(t) || U.isObjectEmpty(t)) return !1;
          S._readVisitor();
          var i, a, o, s, c;
          for (i in t) if (j(i) && (S._currentCustomerIDs.nameSpaces = S._currentCustomerIDs.nameSpaces || {}, a = t[i], n = a.hasOwnProperty("hashType") ? a.hashType : n, a && "object" === e(a))) {
            var u = {};
            if (a.id) {
              if (n) {
                if (!(o = We(Xe(a.id), n))) return;
                a.id = o, u.hashType = n;
              }
              u.id = a.id;
            }
            void 0 != a.authState && (u.authState = a.authState), a.dataSource && (S._currentCustomerIDs.dataSources = S._currentCustomerIDs.dataSources || {}, s = a.dataSource, S._currentCustomerIDs.dataSources[s] = u), S._currentCustomerIDs.nameSpaces[i] = u;
          }
          var l = S.getCustomerIDs(!0),
            d = S._getField("MCCIDH"),
            f = "";
          d || (d = "0");
          for (c in l) {
            var p = l[c];
            if (!U.isObjectEmpty(p)) for (i in p) j(i) && (a = p[i], f += (f ? "|" : "") + i + "|" + (a.id ? a.id : "") + (a.authState ? a.authState : ""));
          }
          S._newCustomerIDsHash = String(S._hash(f)), S._newCustomerIDsHash !== d && (S._customerIDsHashChanged = !0, S._mapCustomerIDs(r));
        }
      }, S.getCustomerIDs = function (e) {
        S._readVisitor();
        var t,
          n,
          i = {
            dataSources: {},
            nameSpaces: {}
          },
          r = S._currentCustomerIDs.dataSources;
        for (t in r) j(t) && (n = r[t], n.id && (i.dataSources[t] || (i.dataSources[t] = {}), i.dataSources[t].id = n.id, void 0 != n.authState ? i.dataSources[t].authState = n.authState : i.dataSources[t].authState = O.AuthState.UNKNOWN, n.hashType && (i.dataSources[t].hashType = n.hashType)));
        var a = S._currentCustomerIDs.nameSpaces;
        for (t in a) j(t) && (n = a[t], n.id && (i.nameSpaces[t] || (i.nameSpaces[t] = {}), i.nameSpaces[t].id = n.id, void 0 != n.authState ? i.nameSpaces[t].authState = n.authState : i.nameSpaces[t].authState = O.AuthState.UNKNOWN, n.hashType && (i.nameSpaces[t].hashType = n.hashType)));
        return e ? i : i.dataSources;
      }, S.setAnalyticsVisitorID = function (e) {
        S._setAnalyticsFields(e);
      }, S.getAnalyticsVisitorID = function (e, t, n) {
        if (!q.isTrackingServerPopulated() && !n) return S._callCallback(e, [""]), "";
        var i = "";
        if (n || (i = S.getMarketingCloudVisitorID(function (t) {
          S.getAnalyticsVisitorID(e, !0);
        })), i || n) {
          var r = n ? S.marketingCloudServer : S.trackingServer,
            a = "";
          S.loadSSL && (n ? S.marketingCloudServerSecure && (r = S.marketingCloudServerSecure) : S.trackingServerSecure && (r = S.trackingServerSecure));
          var o = {};
          if (r) {
            var s = "http" + (S.loadSSL ? "s" : "") + "://" + r + "/id",
              c = S.configs.cookieLifetime,
              u = "d_visid_ver=" + S.version + "&mcorgid=" + encodeURIComponent(S.marketingCloudOrgID) + (i ? "&mid=" + encodeURIComponent(i) : "") + (c ? "&cl=" + encodeURIComponent(c) : "") + (S.idSyncDisable3rdPartySyncing || S.disableThirdPartyCookies ? "&d_coppa=true" : ""),
              l = ["s_c_il", S._in, "_set" + (n ? "MarketingCloud" : "Analytics") + "Fields"];
            a = s + "?" + u + "&callback=s_c_il%5B" + S._in + "%5D._set" + (n ? "MarketingCloud" : "Analytics") + "Fields", o.corsUrl = s + "?" + u, o.callback = l;
          }
          return o.url = a, S._getRemoteField(n ? T : w, a, e, t, o);
        }
        return "";
      }, S.getAudienceManagerLocationHint = function (e, t) {
        if (S.getMarketingCloudVisitorID(function (t) {
          S.getAudienceManagerLocationHint(e, !0);
        })) {
          var n = S._getField(w);
          if (!n && q.isTrackingServerPopulated() && (n = S.getAnalyticsVisitorID(function (t) {
            S.getAudienceManagerLocationHint(e, !0);
          })), n || !q.isTrackingServerPopulated()) {
            var i = S._getAudienceManagerURLData(),
              r = i.url;
            return S._getRemoteField("MCAAMLH", r, e, t, i);
          }
        }
        return "";
      }, S.getLocationHint = S.getAudienceManagerLocationHint, S.getAudienceManagerBlob = function (e, t) {
        if (S.getMarketingCloudVisitorID(function (t) {
          S.getAudienceManagerBlob(e, !0);
        })) {
          var n = S._getField(w);
          if (!n && q.isTrackingServerPopulated() && (n = S.getAnalyticsVisitorID(function (t) {
            S.getAudienceManagerBlob(e, !0);
          })), n || !q.isTrackingServerPopulated()) {
            var i = S._getAudienceManagerURLData(),
              r = i.url;
            return S._customerIDsHashChanged && S._setFieldExpire(N, -1), S._getRemoteField(N, r, e, t, i);
          }
        }
        return "";
      }, S._supplementalDataIDCurrent = "", S._supplementalDataIDCurrentConsumed = {}, S._supplementalDataIDLast = "", S._supplementalDataIDLastConsumed = {}, S.getSupplementalDataID = function (e, t) {
        S._supplementalDataIDCurrent || t || (S._supplementalDataIDCurrent = S._generateID(1));
        var n = S._supplementalDataIDCurrent;
        return S._supplementalDataIDLast && !S._supplementalDataIDLastConsumed[e] ? (n = S._supplementalDataIDLast, S._supplementalDataIDLastConsumed[e] = !0) : n && (S._supplementalDataIDCurrentConsumed[e] && (S._supplementalDataIDLast = S._supplementalDataIDCurrent, S._supplementalDataIDLastConsumed = S._supplementalDataIDCurrentConsumed, S._supplementalDataIDCurrent = n = t ? "" : S._generateID(1), S._supplementalDataIDCurrentConsumed = {}), n && (S._supplementalDataIDCurrentConsumed[e] = !0)), n;
      };
      var B = !1;
      S._liberatedOptOut = null, S.getOptOut = function (e, t) {
        var n = S._getAudienceManagerURLData("_setMarketingCloudFields"),
          i = n.url;
        if (d()) return S._getRemoteField("MCOPTOUT", i, e, t, n);
        if (S._registerCallback("liberatedOptOut", e), null !== S._liberatedOptOut) return S._callAllCallbacks("liberatedOptOut", [S._liberatedOptOut]), B = !1, S._liberatedOptOut;
        if (B) return null;
        B = !0;
        var r = "liberatedGetOptOut";
        return n.corsUrl = n.corsUrl.replace(/\.demdex\.net\/id\?/, ".demdex.net/optOutStatus?"), n.callback = [r], C[r] = function (e) {
          if (e === Object(e)) {
            var t,
              n,
              i = U.parseOptOut(e, t, F);
            t = i.optOut, n = 1e3 * i.d_ottl, S._liberatedOptOut = t, setTimeout(function () {
              S._liberatedOptOut = null;
            }, n);
          }
          S._callAllCallbacks("liberatedOptOut", [t]), B = !1;
        }, V.fireCORS(n), null;
      }, S.isOptedOut = function (e, t, n) {
        t || (t = O.OptOut.GLOBAL);
        var i = S.getOptOut(function (n) {
          var i = n === O.OptOut.GLOBAL || n.indexOf(t) >= 0;
          S._callCallback(e, [i]);
        }, n);
        return i ? i === O.OptOut.GLOBAL || i.indexOf(t) >= 0 : null;
      };
      var G = {
        subscribed: !1,
        callbacks: []
      };
      S.onReceiveEcid = function (e) {
        if (d()) return S.getMarketingCloudVisitorID(e, !0);
        G.subscribed = !0, e && "function" == typeof e && G.callbacks.push(e);
      }, S._fields = null, S._fieldsExpired = null, S._hash = function (e) {
        var t,
          n,
          i = 0;
        if (e) for (t = 0; t < e.length; t++) n = e.charCodeAt(t), i = (i << 5) - i + n, i &= i;
        return i;
      }, S._generateID = re, S._generateLocalMID = function () {
        var e = S._generateID(0);
        return X.isClientSideMarketingCloudVisitorID = !0, e;
      }, S._callbackList = null, S._callCallback = function (e, t) {
        try {
          "function" == typeof e ? e.apply(A, t) : e[1].apply(e[0], t);
        } catch (e) {}
      }, S._registerCallback = function (e, t) {
        t && (null == S._callbackList && (S._callbackList = {}), void 0 == S._callbackList[e] && (S._callbackList[e] = []), S._callbackList[e].push(t));
      }, S._callAllCallbacks = function (e, t) {
        if (null != S._callbackList) {
          var n = S._callbackList[e];
          if (n) for (; n.length > 0;) S._callCallback(n.shift(), t);
        }
      }, S._addQuerystringParam = function (e, t, n, i) {
        var r = encodeURIComponent(t) + "=" + encodeURIComponent(n),
          a = q.parseHash(e),
          o = q.hashlessUrl(e);
        if (-1 === o.indexOf("?")) return o + "?" + r + a;
        var s = o.split("?"),
          c = s[0] + "?",
          u = s[1];
        return c + q.addQueryParamAtLocation(u, r, i) + a;
      }, S._extractParamFromUri = function (e, t) {
        var n = new RegExp("[\\?&#]" + t + "=([^&#]*)"),
          i = n.exec(e);
        if (i && i.length) return decodeURIComponent(i[1]);
      }, S._parseAdobeMcFromUrl = a(oe.ADOBE_MC), S._parseAdobeMcSdidFromUrl = a(oe.ADOBE_MC_SDID), S._attemptToPopulateSdidFromUrl = function (e) {
        var n = S._parseAdobeMcSdidFromUrl(e),
          i = 1e9;
        n && n.TS && (i = q.getTimestampInSeconds() - n.TS), n && n.SDID && n.MCORGID === t && i < S.sdidParamExpiry && (S._supplementalDataIDCurrent = n.SDID, S._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0);
      }, S._attemptToPopulateIdsFromUrl = function () {
        var e = S._parseAdobeMcFromUrl();
        if (e && e.TS) {
          var n = q.getTimestampInSeconds(),
            i = n - e.TS;
          if (Math.floor(i / 60) > oe.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== t) return;
          o(e);
        }
      }, S._mergeServerState = function (e) {
        if (e) try {
          if (e = function (e) {
            return q.isObject(e) ? e : JSON.parse(e);
          }(e), e[S.marketingCloudOrgID]) {
            var t = e[S.marketingCloudOrgID];
            !function (e) {
              q.isObject(e) && S.setCustomerIDs(e);
            }(t.customerIDs), s(t.sdid);
          }
        } catch (e) {
          throw new Error("`serverState` has an invalid format.");
        }
      }, S._timeout = null, S._loadData = function (e, t, n, i) {
        t = S._addQuerystringParam(t, "d_fieldgroup", e, 1), i.url = S._addQuerystringParam(i.url, "d_fieldgroup", e, 1), i.corsUrl = S._addQuerystringParam(i.corsUrl, "d_fieldgroup", e, 1), X.fieldGroupObj[e] = !0, i === Object(i) && i.corsUrl && "XMLHttpRequest" === V.corsMetadata.corsType && V.fireCORS(i, n, e);
      }, S._clearTimeout = function (e) {
        null != S._timeout && S._timeout[e] && (clearTimeout(S._timeout[e]), S._timeout[e] = 0);
      }, S._settingsDigest = 0, S._getSettingsDigest = function () {
        if (!S._settingsDigest) {
          var e = S.version;
          S.audienceManagerServer && (e += "|" + S.audienceManagerServer), S.audienceManagerServerSecure && (e += "|" + S.audienceManagerServerSecure), S._settingsDigest = S._hash(e);
        }
        return S._settingsDigest;
      }, S._readVisitorDone = !1, S._readVisitor = function () {
        if (!S._readVisitorDone) {
          S._readVisitorDone = !0;
          var e,
            t,
            n,
            i,
            r,
            a,
            o = S._getSettingsDigest(),
            s = !1,
            c = S.cookieRead(S.cookieName),
            u = new Date();
          if (c || b || S.discardTrackingServerECID || (c = S.cookieRead(oe.FIRST_PARTY_SERVER_COOKIE)), null == S._fields && (S._fields = {}), c && "T" !== c) for (c = c.split("|"), c[0].match(/^[\-0-9]+$/) && (parseInt(c[0], 10) !== o && (s = !0), c.shift()), c.length % 2 == 1 && c.pop(), e = 0; e < c.length; e += 2) t = c[e].split("-"), n = t[0], i = c[e + 1], t.length > 1 ? (r = parseInt(t[1], 10), a = t[1].indexOf("s") > 0) : (r = 0, a = !1), s && ("MCCIDH" === n && (i = ""), r > 0 && (r = u.getTime() / 1e3 - 60)), n && i && (S._setField(n, i, 1), r > 0 && (S._fields["expire" + n] = r + (a ? "s" : ""), (u.getTime() >= 1e3 * r || a && !S.cookieRead(S.sessionCookieName)) && (S._fieldsExpired || (S._fieldsExpired = {}), S._fieldsExpired[n] = !0)));
          !S._getField(w) && q.isTrackingServerPopulated() && (c = S.cookieRead("s_vi")) && (c = c.split("|"), c.length > 1 && c[0].indexOf("v1") >= 0 && (i = c[1], e = i.indexOf("["), e >= 0 && (i = i.substring(0, e)), i && i.match(oe.VALID_VISITOR_ID_REGEX) && S._setField(w, i)));
        }
      }, S._appendVersionTo = function (e) {
        var t = "vVersion|" + S.version,
          n = e ? S._getCookieVersion(e) : null;
        return n ? te.areVersionsDifferent(n, S.version) && (e = e.replace(oe.VERSION_REGEX, t)) : e += (e ? "|" : "") + t, e;
      }, S._writeVisitor = function () {
        var e,
          t,
          n = S._getSettingsDigest();
        for (e in S._fields) j(e) && S._fields[e] && "expire" !== e.substring(0, 6) && (t = S._fields[e], n += (n ? "|" : "") + e + (S._fields["expire" + e] ? "-" + S._fields["expire" + e] : "") + "|" + t);
        n = S._appendVersionTo(n), S.cookieWrite(S.cookieName, n, 1);
      }, S._getField = function (e, t) {
        return null == S._fields || !t && S._fieldsExpired && S._fieldsExpired[e] ? null : S._fields[e];
      }, S._setField = function (e, t, n) {
        null == S._fields && (S._fields = {}), S._fields[e] = t, n || S._writeVisitor();
      }, S._getFieldList = function (e, t) {
        var n = S._getField(e, t);
        return n ? n.split("*") : null;
      }, S._setFieldList = function (e, t, n) {
        S._setField(e, t ? t.join("*") : "", n);
      }, S._getFieldMap = function (e, t) {
        var n = S._getFieldList(e, t);
        if (n) {
          var i,
            r = {};
          for (i = 0; i < n.length; i += 2) r[n[i]] = n[i + 1];
          return r;
        }
        return null;
      }, S._setFieldMap = function (e, t, n) {
        var i,
          r = null;
        if (t) {
          r = [];
          for (i in t) j(i) && (r.push(i), r.push(t[i]));
        }
        S._setFieldList(e, r, n);
      }, S._setFieldExpire = function (e, t, n) {
        var i = new Date();
        i.setTime(i.getTime() + 1e3 * t), null == S._fields && (S._fields = {}), S._fields["expire" + e] = Math.floor(i.getTime() / 1e3) + (n ? "s" : ""), t < 0 ? (S._fieldsExpired || (S._fieldsExpired = {}), S._fieldsExpired[e] = !0) : S._fieldsExpired && (S._fieldsExpired[e] = !1), n && (S.cookieRead(S.sessionCookieName) || S.cookieWrite(S.sessionCookieName, "1"));
      }, S._findVisitorID = function (t) {
        return t && ("object" === e(t) && (t = t.d_mid ? t.d_mid : t.visitorID ? t.visitorID : t.id ? t.id : t.uuid ? t.uuid : "" + t), t && "NOTARGET" === (t = t.toUpperCase()) && (t = F), t && (t === F || t.match(oe.VALID_VISITOR_ID_REGEX)) || (t = "")), t;
      }, S._setFields = function (t, n) {
        if (S._clearTimeout(t), null != S._loading && (S._loading[t] = !1), X.fieldGroupObj[t] && X.setState(t, !1), t === E) {
          !0 !== X.isClientSideMarketingCloudVisitorID && (X.isClientSideMarketingCloudVisitorID = !1);
          var i = S._getField(T);
          if (!i || S.overwriteCrossDomainMCIDAndAID) {
            if (!(i = "object" === e(n) && n.mid ? n.mid : S._findVisitorID(n))) {
              if (S._use1stPartyMarketingCloudServer && !S.tried1stPartyMarketingCloudServer) return S.tried1stPartyMarketingCloudServer = !0, void S.getAnalyticsVisitorID(null, !1, !0);
              i = S._generateLocalMID();
            }
            S._setField(T, i);
          }
          i && i !== F || (i = ""), "object" === e(n) && ((n.d_region || n.dcs_region || n.d_blob || n.blob) && S._setFields(x, n), S._use1stPartyMarketingCloudServer && n.mid && S._setFields(R, {
            id: n.id
          })), S._callAllCallbacks(T, [i]);
        }
        if (t === x && "object" === e(n)) {
          var r = 604800;
          void 0 != n.id_sync_ttl && n.id_sync_ttl && (r = parseInt(n.id_sync_ttl, 10));
          var a = W.getRegionAndCheckIfChanged(n, r);
          S._callAllCallbacks("MCAAMLH", [a]);
          var o = S._getField(N);
          (n.d_blob || n.blob) && (o = n.d_blob, o || (o = n.blob), S._setFieldExpire(N, r), S._setField(N, o)), o || (o = ""), S._callAllCallbacks(N, [o]), !n.error_msg && S._newCustomerIDsHash && S._setField("MCCIDH", S._newCustomerIDsHash);
        }
        if (t === R) {
          var s = S._getField(w);
          s && !S.overwriteCrossDomainMCIDAndAID || (s = S._findVisitorID(n), s ? s !== F && S._setFieldExpire(N, -1) : s = F, S._setField(w, s)), s && s !== F || (s = ""), S._callAllCallbacks(w, [s]);
        }
        if (S.idSyncDisableSyncs || S.disableIdSyncs) W.idCallNotProcesssed = !0;else {
          W.idCallNotProcesssed = !1;
          var c = {};
          c.ibs = n.ibs, c.subdomain = n.subdomain, W.processIDCallData(c);
        }
        if (n === Object(n)) {
          var u, l;
          d() && S.isAllowed() && (u = S._getField("MCOPTOUT"));
          var f = U.parseOptOut(n, u, F);
          u = f.optOut, l = f.d_ottl, S._setFieldExpire("MCOPTOUT", l, !0), S._setField("MCOPTOUT", u), S._callAllCallbacks("MCOPTOUT", [u]);
        }
      }, S._loading = null, S._getRemoteField = function (e, t, n, i, r) {
        var a,
          o = "",
          s = q.isFirstPartyAnalyticsVisitorIDCall(e),
          c = {
            MCAAMLH: !0,
            MCAAMB: !0
          };
        if (d() && S.isAllowed()) {
          S._readVisitor(), o = S._getField(e, !0 === c[e]);
          if (function () {
            return (!o || S._fieldsExpired && S._fieldsExpired[e]) && (!S.disableThirdPartyCalls || s);
          }()) {
            if (e === T || "MCOPTOUT" === e ? a = E : "MCAAMLH" === e || e === N ? a = x : e === w && (a = R), a) return !t || null != S._loading && S._loading[a] || (null == S._loading && (S._loading = {}), S._loading[a] = !0, a === x && (D = 0), S._loadData(a, t, function (t) {
              if (!S._getField(e)) {
                t && X.setState(a, !0);
                var n = "";
                e === T ? n = S._generateLocalMID() : a === x && (n = {
                  error_msg: "timeout"
                }), S._setFields(a, n);
              }
            }, r)), S._registerCallback(e, n), o || (t || S._setFields(a, {
              id: F
            }), "");
          } else o || (e === T ? (S._registerCallback(e, n), o = S._generateLocalMID(), S.setMarketingCloudVisitorID(o)) : e === w ? (S._registerCallback(e, n), o = "", S.setAnalyticsVisitorID(o)) : (o = "", i = !0));
        }
        return e !== T && e !== w || o !== F || (o = "", i = !0), n && i && S._callCallback(n, [o]), e === T && G.subscribed && (G.callbacks && G.callbacks.length && G.callbacks.forEach(function (e) {
          S._callCallback(e, [o]);
        }), G.subscribed = !1, G.callbacks.length = 0), o;
      }, S._setMarketingCloudFields = function (e) {
        S._readVisitor(), S._setFields(E, e);
      }, S._mapCustomerIDs = function (e) {
        S.getAudienceManagerBlob(e, !0);
      }, S._setAnalyticsFields = function (e) {
        S._readVisitor(), S._setFields(R, e);
      }, S._setAudienceManagerFields = function (e) {
        S._readVisitor(), S._setFields(x, e);
      }, S._getAudienceManagerURLData = function (e) {
        var t = S.audienceManagerServer,
          n = "",
          i = S._getField(T),
          r = S._getField(N, !0),
          a = S._getField(w),
          o = a && a !== F ? "&d_cid_ic=AVID%01" + encodeURIComponent(a) : "";
        if (S.loadSSL && S.audienceManagerServerSecure && (t = S.audienceManagerServerSecure), t) {
          var s,
            c,
            u,
            l = S.getCustomerIDs(!0);
          if (l) for (c in l) {
            var d = l[c];
            if (!U.isObjectEmpty(d)) {
              var f = "nameSpaces" === c ? "&d_cid_ns=" : "&d_cid_ic=";
              for (s in d) j(s) && (u = d[s], o += f + encodeURIComponent(s) + "%01" + encodeURIComponent(u.id ? u.id : "") + (u.authState ? "%01" + u.authState : ""));
            }
          }
          e || (e = "_setAudienceManagerFields");
          var p = "http" + (S.loadSSL ? "s" : "") + "://" + t + "/id",
            g = "d_visid_ver=" + S.version + (v && -1 !== p.indexOf("demdex.net") ? "&gdpr=1&gdpr_consent=" + v : "") + (D && -1 !== p.indexOf("demdex.net") ? "&d_cf=" + D : "") + "&d_rtbd=json&d_ver=2" + (!i && S._use1stPartyMarketingCloudServer ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(S.marketingCloudOrgID) + "&d_nsid=" + (S.idSyncContainerID || 0) + (i ? "&d_mid=" + encodeURIComponent(i) : "") + (S.idSyncDisable3rdPartySyncing || S.disableThirdPartyCookies ? "&d_coppa=true" : "") + (!0 === k ? "&d_coop_safe=1" : !1 === k ? "&d_coop_unsafe=1" : "") + (r ? "&d_blob=" + encodeURIComponent(r) : "") + o,
            m = ["s_c_il", S._in, e];
          return n = p + "?" + g + "&d_cb=s_c_il%5B" + S._in + "%5D." + e, {
            url: n,
            corsUrl: p + "?" + g,
            callback: m
          };
        }
        return {
          url: n
        };
      }, S.appendVisitorIDsTo = function (e) {
        try {
          var t = [[T, S._getField(T)], [w, S._getField(w)], ["MCORGID", S.marketingCloudOrgID]];
          return S._addQuerystringParam(e, oe.ADOBE_MC, c(t));
        } catch (t) {
          return e;
        }
      }, S.appendSupplementalDataIDTo = function (e, t) {
        if (!(t = t || S.getSupplementalDataID(q.generateRandomString(), !0))) return e;
        try {
          var n = c([["SDID", t], ["MCORGID", S.marketingCloudOrgID]]);
          return S._addQuerystringParam(e, oe.ADOBE_MC_SDID, n);
        } catch (t) {
          return e;
        }
      };
      var q = {
        parseHash: function (e) {
          var t = e.indexOf("#");
          return t > 0 ? e.substr(t) : "";
        },
        hashlessUrl: function (e) {
          var t = e.indexOf("#");
          return t > 0 ? e.substr(0, t) : e;
        },
        addQueryParamAtLocation: function (e, t, n) {
          var i = e.split("&");
          return n = null != n ? n : i.length, i.splice(n, 0, t), i.join("&");
        },
        isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
          if (e !== w) return !1;
          var i;
          return t || (t = S.trackingServer), n || (n = S.trackingServerSecure), !("string" != typeof (i = S.loadSSL ? n : t) || !i.length) && i.indexOf("2o7.net") < 0 && i.indexOf("omtrdc.net") < 0;
        },
        isObject: function (e) {
          return Boolean(e && e === Object(e));
        },
        removeCookie: function (e) {
          Z.remove(e, {
            domain: S.cookieDomain
          });
        },
        isTrackingServerPopulated: function () {
          return !!S.trackingServer || !!S.trackingServerSecure;
        },
        getTimestampInSeconds: function () {
          return Math.round(new Date().getTime() / 1e3);
        },
        parsePipeDelimetedKeyValues: function (e) {
          return e.split("|").reduce(function (e, t) {
            var n = t.split("=");
            return e[n[0]] = decodeURIComponent(n[1]), e;
          }, {});
        },
        generateRandomString: function (e) {
          e = e || 5;
          for (var t = "", n = "abcdefghijklmnopqrstuvwxyz0123456789"; e--;) t += n[Math.floor(Math.random() * n.length)];
          return t;
        },
        normalizeBoolean: function (e) {
          return "true" === e || "false" !== e && e;
        },
        parseBoolean: function (e) {
          return "true" === e || "false" !== e && null;
        },
        replaceMethodsWithFunction: function (e, t) {
          for (var n in e) e.hasOwnProperty(n) && "function" == typeof e[n] && (e[n] = t);
          return e;
        }
      };
      S._helpers = q;
      var W = se(S, O);
      S._destinationPublishing = W, S.timeoutMetricsLog = [];
      var X = {
        isClientSideMarketingCloudVisitorID: null,
        MCIDCallTimedOut: null,
        AnalyticsIDCallTimedOut: null,
        AAMIDCallTimedOut: null,
        fieldGroupObj: {},
        setState: function (e, t) {
          switch (e) {
            case E:
              !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
              break;
            case R:
              !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
              break;
            case x:
              !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t;
          }
        }
      };
      S.isClientSideMarketingCloudVisitorID = function () {
        return X.isClientSideMarketingCloudVisitorID;
      }, S.MCIDCallTimedOut = function () {
        return X.MCIDCallTimedOut;
      }, S.AnalyticsIDCallTimedOut = function () {
        return X.AnalyticsIDCallTimedOut;
      }, S.AAMIDCallTimedOut = function () {
        return X.AAMIDCallTimedOut;
      }, S.idSyncGetOnPageSyncInfo = function () {
        return S._readVisitor(), S._getField("MCSYNCSOP");
      }, S.idSyncByURL = function (e) {
        if (!S.isOptedOut()) {
          var t = u(e || {});
          if (t.error) return t.error;
          var n,
            i,
            r = e.url,
            a = encodeURIComponent,
            o = W;
          return r = r.replace(/^https:/, "").replace(/^http:/, ""), n = U.encodeAndBuildRequest(["", e.dpid, e.dpuuid || ""], ","), i = ["ibs", a(e.dpid), "img", a(r), t.ttl, "", n], o.addMessage(i.join("|")), o.requestToProcess(), "Successfully queued";
        }
      }, S.idSyncByDataSource = function (e) {
        if (!S.isOptedOut()) return e === Object(e) && "string" == typeof e.dpuuid && e.dpuuid.length ? (e.url = "//dpm.demdex.net/ibs:dpid=" + e.dpid + "&dpuuid=" + e.dpuuid, S.idSyncByURL(e)) : "Error: config or config.dpuuid is empty";
      }, Ye(S, W), S._getCookieVersion = function (e) {
        e = e || S.cookieRead(S.cookieName);
        var t = oe.VERSION_REGEX.exec(e);
        return t && t.length > 1 ? t[1] : null;
      }, S._resetAmcvCookie = function (e) {
        var t = S._getCookieVersion();
        t && !te.isLessThan(t, e) || S.removeCookie(S.cookieName);
      }, S.setAsCoopSafe = function () {
        k = !0;
      }, S.setAsCoopUnsafe = function () {
        k = !1;
      }, function () {
        if (S.configs = Object.create(null), q.isObject(n)) for (var e in n) j(e) && (S[e] = n[e], S.configs[e] = n[e]);
      }(), f();
      var K;
      S.init = function () {
        l() && (I.optIn.fetchPermissions(h, !0), !I.optIn.isApproved(I.optIn.Categories.ECID)) || K || (K = !0, function () {
          if (q.isObject(n)) {
            S.idSyncContainerID = S.idSyncContainerID || 0, k = "boolean" == typeof S.isCoopSafe ? S.isCoopSafe : q.parseBoolean(S.isCoopSafe), S.resetBeforeVersion && S._resetAmcvCookie(S.resetBeforeVersion), S._attemptToPopulateIdsFromUrl(), S._attemptToPopulateSdidFromUrl(), S._readVisitor();
            var e = S._getField(P),
              t = Math.ceil(new Date().getTime() / oe.MILLIS_PER_DAY);
            S.idSyncDisableSyncs || S.disableIdSyncs || !W.canMakeSyncIDCall(e, t) || (S._setFieldExpire(N, -1), S._setField(P, t)), S.getMarketingCloudVisitorID(), S.getAudienceManagerLocationHint(), S.getAudienceManagerBlob(), S._mergeServerState(S.serverState);
          } else S._attemptToPopulateIdsFromUrl(), S._attemptToPopulateSdidFromUrl();
        }(), function () {
          if (!S.idSyncDisableSyncs && !S.disableIdSyncs) {
            W.checkDPIframeSrc();
            var e = function () {
              var e = W;
              e.readyToAttachIframe() && e.attachIframe();
            };
            A.addEventListener("load", function () {
              O.windowLoaded = !0, e();
            });
            try {
              ie.receiveMessage(function (e) {
                W.receiveMessage(e.data);
              }, W.iframeHost);
            } catch (e) {}
          }
        }(), function () {
          S.whitelistIframeDomains && oe.POST_MESSAGE_ENABLED && (S.whitelistIframeDomains = S.whitelistIframeDomains instanceof Array ? S.whitelistIframeDomains : [S.whitelistIframeDomains], S.whitelistIframeDomains.forEach(function (e) {
            var n = new Y(t, e),
              i = Q(S, n);
            ie.receiveMessage(i, e);
          }));
        }());
      };
    };
    Je.config = ue, C.Visitor = Je;
    var ze = Je,
      Qe = function (e) {
        if (U.isObject(e)) return Object.keys(e).filter(function (t) {
          return "" !== e[t] && ue.getConfigs()[t];
        }).reduce(function (t, n) {
          var i = ue.normalizeConfig(n, e[n]),
            r = U.normalizeBoolean(i);
          return t[n] = r, t;
        }, Object.create(null));
      },
      $e = Ge.OptIn,
      Ze = Ge.IabPlugin;
    return ze.getInstance = function (e, t) {
      if (!e) throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");
      e.indexOf("@") < 0 && (e += "@AdobeOrg");
      var n = function () {
        var t = C.s_c_il;
        if (t) for (var n = 0; n < t.length; n++) {
          var i = t[n];
          if (i && "Visitor" === i._c && i.marketingCloudOrgID === e) return i;
        }
      }();
      if (n) return n;
      var i = Qe(t) || {};
      !function (e) {
        C.adobe.optIn = C.adobe.optIn || function () {
          var t = U.pluck(e, ["doesOptInApply", "previousPermissions", "preOptInApprovals", "isOptInStorageEnabled", "optInStorageExpiry", "isIabContext", "sameSiteCookie", "secureCookie"]),
            n = e.optInCookieDomain || e.cookieDomain;
          n = n || ee(), n = n === window.location.hostname ? "" : n, t.optInCookieDomain = n;
          var i = new $e(t, {
            cookies: Z
          });
          if (t.isIabContext && t.doesOptInApply) {
            var r = new Ze();
            i.registerPlugin(r);
          }
          return i;
        }();
      }(i || {});
      var r = e,
        a = r.split("").reverse().join(""),
        o = new ze(e, null, a);
      i.cookieDomain && (o.cookieDomain = i.cookieDomain), i.sameSiteCookie && i.secureCookie && (o.configs = {
        sameSiteCookie: i.sameSiteCookie,
        secureCookie: i.secureCookie
      }), function () {
        C.s_c_il.splice(--C.s_c_in, 1);
      }();
      var s = U.getIeVersion();
      if ("number" == typeof s && s < 10) return o._helpers.replaceMethodsWithFunction(o, function () {});
      var c = function () {
        try {
          return C.self !== C.parent;
        } catch (e) {
          return !0;
        }
      }() && (!function (e) {
        return e.cookieWrite("TEST_AMCV_COOKIE", "T", 1), "T" === e.cookieRead("TEST_AMCV_COOKIE") && (e.removeCookie("TEST_AMCV_COOKIE"), !0);
      }(o) || U.isFirefox() && !i.whitelistParentDomain) && C.parent ? new W(e, i, o, C.parent) : new ze(e, i, a);
      return o = null, c.init(), c;
    }, function () {
      function e() {
        ze.windowLoaded = !0;
      }
      C.addEventListener ? C.addEventListener("load", e) : C.attachEvent && C.attachEvent("onload", e), ze.codeLoadEnd = new Date().getTime();
    }(), ze;
  }();
};
try {
  (function (id, loader) {
    window.utag.tagsettings = window.utag.tagsettings || {};
    window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
    var vAPI = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || function () {
      function logger(msg) {
        utag.DB("[" + id + "] : " + msg);
      }
      function Observer(orgId, config) {
        var observers = [],
          visitor = {},
          demdex = null,
          instance = null,
          regex = new RegExp("AMCV_" + window.encodeURIComponent(orgId) + "=(.*?)(;|$)"),
          active = false,
          util = {
            "hasOwn": function (o, a) {
              return o !== null && Object.prototype.hasOwnProperty.call(o, a);
            }
          },
          mTags = function () {
            var tags = [],
              tag,
              cfg = utag.loader.cfg,
              loadcond = {
                1: 1,
                4: 1
              };
            for (tag in cfg) {
              if (!util.hasOwn(cfg, tag)) {
                continue;
              }
              if (cfg[tag].tid && String(cfg[tag].tid).indexOf('1191') === 0 && loadcond[cfg[tag].load]) {
                tags.push(tag);
              }
            }
            return tags;
          }();
        function mTagsLoaded() {
          var loaded = true,
            id;
          for (var i = 0, len = mTags.length; i < len; i++) {
            id = mTags[i];
            if (!utag.sender[id]) {
              loaded = false;
              break;
            }
          }
          return loaded;
        }
        function notify(result) {
          instance = result;
          if (instance && instance.setCustomerIDs) {
            var aliases, alias;
            for (aliases in visitor) {
              if (util.hasOwn(visitor, aliases)) {
                alias = visitor[aliases];
                if (alias.authState && Visitor.AuthState[alias.authState] !== undefined) {
                  alias.authState = Visitor.AuthState[alias.authState];
                }
              }
            }
            instance.setCustomerIDs(visitor);
          }
          while (observers.length !== 0) {
            var nextCallback = observers.shift();
            nextCallback(instance);
          }
          return true;
        }
        this.sync = function (ids) {
          var alias;
          for (alias in ids) {
            if (util.hasOwn(ids, alias)) {
              if (!visitor[alias]) {
                visitor[alias] = ids[alias];
              }
            }
          }
          return true;
        };
        this.subscribe = function (callback) {
          var self = this;
          if (instance !== null) {
            return callback(instance);
          } else {
            observers.push(callback);
            if (!active) {
              logger("demdex org id [" + orgId + "] sync requested");
              (function retry(retries) {
                if (retries === 0) {
                  logger("demdex org id [" + orgId + "] sync timed out!");
                  active = false;
                  return notify(undefined);
                } else {
                  active = true;
                  if (regex.test(document.cookie) && /\|mcmid\|/i.test(window.decodeURIComponent(RegExp.$1)) && mTagsLoaded()) {
                    logger('demdex org id [' + orgId + '] sync completed');
                    return config ? notify(window.Visitor.getInstance(orgId, config)) : notify(window.Visitor.getInstance(orgId));
                  } else {
                    if (window.Visitor && window.Visitor.getInstance) {
                      if (config && !demdex) {
                        demdex = window.Visitor.getInstance(orgId, config);
                      }
                    }
                    window.setTimeout(function () {
                      logger("demdex org id [" + orgId + "] sync, waiting...");
                      retry(--retries);
                    }, 25);
                  }
                }
              })(80);
            }
          }
          return true;
        };
      }
      function VisitorAPIWrapper() {
        var observers = {};
        this._version = "1.0";
        this.getInstance = function (orgId, callback, config, customerIds) {
          if (!orgId) {
            return callback(undefined);
          }
          orgId = !/@AdobeOrg$/.test(orgId) ? orgId + "@AdobeOrg" : orgId;
          if (!observers[orgId]) {
            if (!config) {
              logger("demdex org id [" + orgId + "] sync error. marketing cloud tag missing demdex config");
              return callback(undefined);
            }
            observers[orgId] = new Observer(orgId, config);
          }
          if (customerIds) {
            observers[orgId].sync(customerIds);
          }
          observers[orgId].subscribe(callback);
          return true;
        };
      }
      return new VisitorAPIWrapper();
    }();
    var u = {
      "id": id
    };
    utag.o[loader].sender[id] = u;
    if (utag.ut === undefined) {
      utag.ut = {};
    }
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
      u.loader = function (o, a, b, c, l, m) {
        utag.DB(o);
        a = document;
        if (o.type == "iframe") {
          m = a.getElementById(o.id);
          if (m && m.tagName == "IFRAME") {
            b = m;
          } else {
            b = a.createElement("iframe");
          }
          o.attrs = o.attrs || {};
          utag.ut.merge(o.attrs, {
            "height": "1",
            "width": "1",
            "style": "display:none"
          }, 0);
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
        } else {
          b = a.createElement("script");
          b.language = "javascript";
          b.type = "text/javascript";
          b.async = 1;
          b.charset = "utf-8";
        }
        if (o.id) {
          b.id = o.id;
        }
        for (l in utag.loader.GV(o.attrs)) {
          b.setAttribute(l, o.attrs[l]);
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener("load", function () {
              o.cb();
            }, false);
          } else {
            b.onreadystatechange = function () {
              if (this.readyState == "complete" || this.readyState == "loaded") {
                this.onreadystatechange = null;
                o.cb();
              }
            };
          }
        }
        if (o.type != "img" && !m) {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to " + l + ": " + o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b);
            }
          }
        }
      };
    } else {
      u.loader = utag.ut.loader;
    }
    if (utag.ut.typeOf === undefined) {
      u.typeOf = function (e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      };
    } else {
      u.typeOf = utag.ut.typeOf;
    }
    u.hasOwn = function (o, a) {
      return o != null && Object.prototype.hasOwnProperty.call(o, a);
    };
    u.isEmptyObject = function (o, a) {
      for (a in o) {
        if (u.hasOwn(o, a)) return false;
      }
      return true;
    };
    u.ev = {
      "view": 1
    };
    u.initialized = false;
    u.adobeInstance;
    u.map_func = function (arr, obj, item) {
      var i = arr.shift();
      obj[i] = obj[i] || {};
      if (arr.length > 0) {
        u.map_func(arr, obj[i], item);
      } else {
        obj[i] = item;
      }
    };
    u.clearEmptyKeys = function (object) {
      for (var key in object) {
        if (object[key] === "" || object[key] === undefined) {
          delete object[key];
        }
      }
      return object;
    };
    u.eventsNameByKey = {
      setCustomerID: 'setCustomerID'
    };
    u.sendEvents = function (instance) {
      u.data.events.forEach(function (eventName) {
        if (eventName === u.eventsNameByKey.setCustomerID) {
          instance.setCustomerIDs(u.data.customer_ids);
          utag.DB("callEvent:setCustomerIDs");
        }
      });
    };
    u.map = {};
    u.extend = [];
    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        loadLibrary();
        utag.DB("send:2990");
        utag.DB(b);
        var c, d, e, f;
        u.data = {
          "adobe_org_id": "126234B8527831D90A490D44@AdobeOrg",
          "config": {
            "trackingServer": "bupa.d2.sc.omtrdc.net",
            "trackingServerSecure": "bupa.d2.sc.omtrdc.net",
            "marketingCloudServer": "",
            "marketingCloudServerSecure": "",
            "cookieDomain": function () {
              return utag.loader.RC('utag_main').vapi_domain || function () {
                var i = 0,
                  d = document.domain,
                  p = d.split("."),
                  s = "_vapi" + new Date().getTime();
                while (i < p.length - 1 && document.cookie.indexOf(s + "=" + s) === -1) {
                  d = p.slice(-1 - ++i).join(".");
                  document.cookie = s + "=" + s + ";domain=" + d + ";";
                }
                document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + d + ";";
                utag.loader.SC("utag_main", {
                  "vapi_domain": d
                });
                return d;
              }();
            }()
          },
          "customer_ids": {},
          events: []
        };
        utag.DB("send:2990:EXTENSIONS");
        utag.DB(b);
        c = [];
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.map_func(e[f].split("."), u.data, b[d]);
            }
          } else {
            var event_destinations = d.split(':');
            if (event_destinations.length === 2 && String(b[event_destinations[0]]) === String(event_destinations[1])) {
              if (u.map[d]) {
                u.data.events = u.data.events.concat(u.map[d].split(","));
              }
            }
          }
        }
        utag.DB("send:2990:MAPPINGS");
        utag.DB(u.data);
        if (!u.data.adobe_org_id) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated [adobe_org_id]");
          return;
        }
        if (u.initialized) {
          u.sendEvents(u.adobeInstance);
        } else if (!u.initialized) {
          u.initialized = !0;
          vAPI.getInstance(u.data.adobe_org_id, function (instance) {
            u.adobeInstance = instance;
            u.sendEvents(u.adobeInstance);
          }, u.clearEmptyKeys(u.data.config), u.data.customer_ids);
        }
        utag.DB("send:2990:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("2990", "bupa.bupa-uk");
} catch (error) {
  utag.DB(error);
}

//tealium universal tag - utag.3098 ut4.0.202309060622, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    function at(config) {
      window.adobe = window.adobe || {}, window.adobe.target = function () {
        "use strict";

        var t = window,
          e = document,
          n = !e.documentMode || e.documentMode >= 11;
        var r,
          o,
          i,
          c = e.compatMode && "CSS1Compat" === e.compatMode && n && (r = window.navigator.userAgent, o = r.indexOf("MSIE ") > 0, i = r.indexOf("Trident/") > 0, !(o || i)),
          u = t.targetGlobalSettings;
        if (!c || u && !1 === u.enabled) return t.adobe = t.adobe || {}, t.adobe.target = {
          VERSION: "",
          event: {},
          getOffer: dt,
          getOffers: pt,
          applyOffer: dt,
          applyOffers: pt,
          sendNotifications: pt,
          trackEvent: dt,
          triggerView: dt,
          registerExtension: dt,
          init: dt
        }, t.mboxCreate = dt, t.mboxDefine = dt, t.mboxUpdate = dt, "console" in t && "warn" in t.console && t.console.warn("AT: Adobe Target content delivery is disabled. Update your DOCTYPE to support Standards mode."), t.adobe.target;
        var s = Object.getOwnPropertySymbols,
          a = Object.prototype.hasOwnProperty,
          f = Object.prototype.propertyIsEnumerable;
        function l(t) {
          if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(t);
        }
        var d = function () {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (t) {
              r[t] = t;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
          } catch (t) {
            return !1;
          }
        }() ? Object.assign : function (t, e) {
          for (var n, r, o = l(t), i = 1; i < arguments.length; i++) {
            for (var c in n = Object(arguments[i])) a.call(n, c) && (o[c] = n[c]);
            if (s) {
              r = s(n);
              for (var u = 0; u < r.length; u++) f.call(n, r[u]) && (o[r[u]] = n[r[u]]);
            }
          }
          return o;
        };
        function p(t) {
          return null == t;
        }
        const {
            isArray: h
          } = Array,
          {
            prototype: m
          } = Object,
          {
            toString: g
          } = m;
        function v(t) {
          return function (t) {
            return g.call(t);
          }(t);
        }
        function y(t) {
          const e = typeof t;
          return null != t && ("object" === e || "function" === e);
        }
        function b(t) {
          return !!y(t) && "[object Function]" === v(t);
        }
        function w(t) {
          return t;
        }
        function x(t) {
          return b(t) ? t : w;
        }
        function S(t) {
          return p(t) ? [] : Object.keys(t);
        }
        const E = (t, e) => e.forEach(t),
          C = (t, e) => {
            E(n => t(e[n], n), S(e));
          },
          T = (t, e) => e.filter(t),
          k = (t, e) => {
            const n = {};
            return C((e, r) => {
              t(e, r) && (n[r] = e);
            }, e), n;
          };
        function N(t, e) {
          if (p(e)) return [];
          return (h(e) ? T : k)(x(t), e);
        }
        function O(t) {
          return p(t) ? [] : [].concat.apply([], t);
        }
        function I(t) {
          const e = t ? t.length : 0;
          let n = e;
          for (; n -= 1;) if (!b(t[n])) throw new TypeError("Expected a function");
          return (...n) => {
            let r = 0,
              o = e ? t[r].apply(this, n) : n[0];
            for (; (r += 1) < e;) o = t[r].call(this, o);
            return o;
          };
        }
        function A(t, e) {
          if (p(e)) return;
          (h(e) ? E : C)(x(t), e);
        }
        function _(t) {
          return null != t && "object" == typeof t;
        }
        function M(t) {
          return "string" == typeof t || !h(t) && _(t) && "[object String]" === v(t);
        }
        function P(t) {
          if (!M(t)) return -1;
          let e = 0;
          const {
            length: n
          } = t;
          for (let r = 0; r < n; r += 1) e = (e << 5) - e + t.charCodeAt(r) & 4294967295;
          return e;
        }
        function q(t) {
          return null != t && function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
          }(t.length) && !b(t);
        }
        const D = (t, e) => e.map(t);
        function R(t) {
          return p(t) ? [] : q(t) ? M(t) ? t.split("") : function (t) {
            let e = 0;
            const {
                length: n
              } = t,
              r = Array(n);
            for (; e < n;) r[e] = t[e], e += 1;
            return r;
          }(t) : (e = S(t), n = t, D(t => n[t], e));
          var e, n;
        }
        const {
            prototype: L
          } = Object,
          {
            hasOwnProperty: j
          } = L;
        function V(t) {
          if (null == t) return !0;
          if (q(t) && (h(t) || M(t) || b(t.splice))) return !t.length;
          for (const e in t) if (j.call(t, e)) return !1;
          return !0;
        }
        const {
            prototype: H
          } = String,
          {
            trim: U
          } = H;
        function B(t) {
          return p(t) ? "" : U.call(t);
        }
        function F(t) {
          return M(t) ? !B(t) : V(t);
        }
        const $ = t => !F(t);
        function z(t) {
          return "number" == typeof t || _(t) && "[object Number]" === v(t);
        }
        const {
            prototype: J
          } = Function,
          {
            prototype: Z
          } = Object,
          {
            toString: G
          } = J,
          {
            hasOwnProperty: K
          } = Z,
          X = G.call(Object);
        function Y(t) {
          if (!_(t) || "[object Object]" !== v(t)) return !1;
          const e = function (t) {
            return Object.getPrototypeOf(Object(t));
          }(t);
          if (null === e) return !0;
          const n = K.call(e, "constructor") && e.constructor;
          return "function" == typeof n && n instanceof n && G.call(n) === X;
        }
        function W(t, e) {
          return h(e) ? e.join(t || "") : "";
        }
        const Q = (t, e) => {
          const n = {};
          return C((e, r) => {
            n[r] = t(e, r);
          }, e), n;
        };
        function tt(t, e) {
          if (p(e)) return [];
          return (h(e) ? D : Q)(x(t), e);
        }
        function et() {
          return new Date().getTime();
        }
        const nt = (t, e, n) => n.reduce(t, e),
          rt = (t, e, n) => {
            let r = e;
            return C((e, n) => {
              r = t(r, e, n);
            }, n), r;
          };
        function ot(t, e, n) {
          if (p(n)) return e;
          return (h(n) ? nt : rt)(x(t), e, n);
        }
        const {
            prototype: it
          } = Array,
          {
            reverse: ct
          } = it;
        function ut(t, e) {
          return F(e) ? [] : e.split(t || "");
        }
        function st() {
          let t = et();
          return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, e => {
            const n = (t + (o = 16, (r = 0) + Math.floor(Math.random() * (o - r + 1)))) % 16 | 0;
            var r, o;
            return t = Math.floor(t / 16), ("x" === e ? n : 3 & n | 8).toString(16);
          });
        }
        function at(t, e = 0) {
          return setTimeout(t, Number(e) || 0);
        }
        function ft(t) {
          clearTimeout(t);
        }
        const lt = "server-side",
          dt = () => {},
          pt = t => Promise.resolve(t);
        var ht = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
        function mt(t, e) {
          return t(e = {
            exports: {}
          }, e.exports), e.exports;
        }
        mt(function (t) {
          (function () {
            var e, n, r, o, i, c;
            "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function () {
              return performance.now();
            } : "undefined" != typeof process && null !== process && process.hrtime ? (t.exports = function () {
              return (e() - i) / 1e6;
            }, n = process.hrtime, o = (e = function () {
              var t;
              return 1e9 * (t = n())[0] + t[1];
            })(), c = 1e9 * process.uptime(), i = o - c) : Date.now ? (t.exports = function () {
              return Date.now() - r;
            }, r = Date.now()) : (t.exports = function () {
              return new Date().getTime() - r;
            }, r = new Date().getTime());
          }).call(ht);
        });
        var gt = function (t, e) {
          if (t) {
            e = e || {};
            for (var n = {
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                  name: "queryKey",
                  parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                  strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                  loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
              }, r = n.parser[e.strictMode ? "strict" : "loose"].exec(t), o = {}, i = 14; i--;) o[n.key[i]] = r[i] || "";
            return o[n.q.name] = {}, o[n.key[12]].replace(n.q.parser, function (t, e, r) {
              e && (o[n.q.name][e] = r);
            }), o;
          }
        };
        const vt = "type",
          yt = "content",
          bt = "selector",
          wt = "src",
          xt = 'Adobe Target content delivery is disabled. Ensure that you can save cookies to your current domain, there is no "mboxDisable" cookie and there is no "mboxDisable" parameter in query string.',
          St = "options argument is required",
          Et = "Action has no content",
          Ct = "error",
          Tt = "valid",
          kt = "success",
          Nt = "___target_traces",
          Ot = "display",
          It = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
          At = /^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i;
        let _t = {};
        const Mt = ["enabled", "clientCode", "imsOrgId", "serverDomain", "cookieDomain", "timeout", "mboxParams", "globalMboxParams", "defaultContentHiddenStyle", "defaultContentVisibleStyle", "deviceIdLifetime", "bodyHiddenStyle", "bodyHidingEnabled", "selectorsPollingTimeout", "visitorApiTimeout", "overrideMboxEdgeServer", "overrideMboxEdgeServerTimeout", "optoutEnabled", "optinEnabled", "secureOnly", "supplementalDataIdParamTimeout", "authoringScriptUrl", "urlSizeLimit", "endpoint", "pageLoadEnabled", "viewsEnabled", "analyticsLogging", "serverState", "decisioningMethod", "pollingInterval", "artifactLocation", "artifactFormat", "artifactPayload", "environment", "cdnEnvironment", "telemetryEnabled", "cdnBasePath", "cspScriptNonce", "cspStyleNonce", "globalMboxName"];
        function Pt(t) {
          if (function (t) {
            return It.test(t);
          }(t)) return t;
          const e = null == (n = ut(".", t)) ? n : ct.call(n);
          var n;
          const r = e.length;
          return r >= 3 && At.test(e[1]) ? e[2] + "." + e[1] + "." + e[0] : 1 === r ? e[0] : e[1] + "." + e[0];
        }
        function qt(t, e, n) {
          let r = "";
          "file:" === t.location.protocol || (r = Pt(t.location.hostname)), n.cookieDomain = r, n.enabled = function (t) {
            const {
              compatMode: e
            } = t;
            return e && "CSS1Compat" === e;
          }(e) && function (t) {
            const {
              documentMode: e
            } = t;
            return !e || e >= 10;
          }(e), function (t, e) {
            t.enabled && (p(e.globalMboxAutoCreate) || (t.pageLoadEnabled = e.globalMboxAutoCreate), A(n => {
              p(e[n]) || (t[n] = e[n]);
            }, Mt));
          }(n, t.targetGlobalSettings || {});
        }
        function Dt(t) {
          qt(window, document, t);
          const e = "file:" === window.location.protocol;
          _t = d({}, t), _t.deviceIdLifetime = t.deviceIdLifetime / 1e3, _t.sessionIdLifetime = t.sessionIdLifetime / 1e3, _t.scheme = _t.secureOnly || e ? "https:" : "";
        }
        function Rt() {
          return _t;
        }
        var Lt = mt(function (t, e) {
            var n;
            n = function () {
              function t() {
                for (var t = 0, e = {}; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) e[r] = n[r];
                }
                return e;
              }
              function e(t) {
                return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
              }
              return function n(r) {
                function o() {}
                function i(e, n, i) {
                  if ("undefined" != typeof document) {
                    "number" == typeof (i = t({
                      path: "/"
                    }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date() + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                      var c = JSON.stringify(n);
                      /^[\{\[]/.test(c) && (n = c);
                    } catch (t) {}
                    n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var u = "";
                    for (var s in i) i[s] && (u += "; " + s, !0 !== i[s] && (u += "=" + i[s].split(";")[0]));
                    return document.cookie = e + "=" + n + u;
                  }
                }
                function c(t, n) {
                  if ("undefined" != typeof document) {
                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                      var u = i[c].split("="),
                        s = u.slice(1).join("=");
                      n || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                      try {
                        var a = e(u[0]);
                        if (s = (r.read || r)(s, a) || e(s), n) try {
                          s = JSON.parse(s);
                        } catch (t) {}
                        if (o[a] = s, t === a) break;
                      } catch (t) {}
                    }
                    return t ? o[t] : o;
                  }
                }
                return o.set = i, o.get = function (t) {
                  return c(t, !1);
                }, o.getJSON = function (t) {
                  return c(t, !0);
                }, o.remove = function (e, n) {
                  i(e, "", t(n, {
                    expires: -1
                  }));
                }, o.defaults = {}, o.withConverter = n, o;
              }(function () {});
            }, t.exports = n();
          }),
          jt = {
            get: Lt.get,
            set: Lt.set,
            remove: Lt.remove
          };
        function Vt(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        var Ht = function (t, e, n, r) {
            e = e || "&", n = n || "=";
            var o = {};
            if ("string" != typeof t || 0 === t.length) return o;
            var i = /\+/g;
            t = t.split(e);
            var c = 1e3;
            r && "number" == typeof r.maxKeys && (c = r.maxKeys);
            var u = t.length;
            c > 0 && u > c && (u = c);
            for (var s = 0; s < u; ++s) {
              var a,
                f,
                l,
                d,
                p = t[s].replace(i, "%20"),
                h = p.indexOf(n);
              h >= 0 ? (a = p.substr(0, h), f = p.substr(h + 1)) : (a = p, f = ""), l = decodeURIComponent(a), d = decodeURIComponent(f), Vt(o, l) ? Array.isArray(o[l]) ? o[l].push(d) : o[l] = [o[l], d] : o[l] = d;
            }
            return o;
          },
          Ut = function (t) {
            switch (typeof t) {
              case "string":
                return t;
              case "boolean":
                return t ? "true" : "false";
              case "number":
                return isFinite(t) ? t : "";
              default:
                return "";
            }
          },
          Bt = function (t, e, n, r) {
            return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map(function (r) {
              var o = encodeURIComponent(Ut(r)) + n;
              return Array.isArray(t[r]) ? t[r].map(function (t) {
                return o + encodeURIComponent(Ut(t));
              }).join(e) : o + encodeURIComponent(Ut(t[r]));
            }).join(e) : r ? encodeURIComponent(Ut(r)) + n + encodeURIComponent(Ut(t)) : "";
          },
          Ft = mt(function (t, e) {
            e.decode = e.parse = Ht, e.encode = e.stringify = Bt;
          }),
          $t = (Ft.decode, Ft.parse, Ft.encode, Ft.stringify, {
            parse: function (t) {
              return "string" == typeof t && (t = t.trim().replace(/^[?#&]/, "")), Ft.parse(t);
            },
            stringify: function (t) {
              return Ft.stringify(t);
            }
          });
        const {
            parse: zt,
            stringify: Jt
          } = $t,
          Zt = document.createElement("a"),
          Gt = {};
        function Kt(t) {
          try {
            return zt(t);
          } catch (t) {
            return {};
          }
        }
        function Xt(t) {
          try {
            return Jt(t);
          } catch (t) {
            return "";
          }
        }
        function Yt(t) {
          try {
            return decodeURIComponent(t);
          } catch (e) {
            return t;
          }
        }
        function Wt(t) {
          try {
            return encodeURIComponent(t);
          } catch (e) {
            return t;
          }
        }
        function Qt(t) {
          if (Gt[t]) return Gt[t];
          Zt.href = t;
          const e = gt(Zt.href);
          return e.queryKey = Kt(e.query), Gt[t] = e, Gt[t];
        }
        const {
          get: te,
          set: ee,
          remove: ne
        } = jt;
        function re(t, e, n) {
          return {
            name: t,
            value: e,
            expires: n
          };
        }
        function oe(t) {
          const e = ut("#", t);
          return V(e) || e.length < 3 || isNaN(parseInt(e[2], 10)) ? null : re(Yt(e[0]), Yt(e[1]), Number(e[2]));
        }
        function ie() {
          const t = tt(oe, F(e = te("mbox")) ? [] : ut("|", e));
          var e;
          const n = Math.ceil(et() / 1e3);
          return ot((t, e) => (t[e.name] = e, t), {}, N(t => y(t) && n <= t.expires, t));
        }
        function ce(t) {
          const e = ie()[t];
          return y(e) ? e.value : "";
        }
        function ue(t) {
          return W("#", [Wt(t.name), Wt(t.value), t.expires]);
        }
        function se(t) {
          return t.expires;
        }
        function ae(t, e, n) {
          const r = R(t),
            o = Math.abs(1e3 * function (t) {
              const e = tt(se, t);
              return Math.max.apply(null, e);
            }(r) - et()),
            i = W("|", tt(ue, r)),
            c = new Date(et() + o),
            u = d({
              domain: e,
              expires: c,
              secure: n
            }, n ? {
              sameSite: "None"
            } : {});
          ee("mbox", i, u);
        }
        function fe(t) {
          const {
              name: e,
              value: n,
              expires: r,
              domain: o,
              secure: i
            } = t,
            c = ie();
          c[e] = re(e, n, Math.ceil(r + et() / 1e3)), ae(c, o, i);
        }
        function le(t, e, n) {
          return function (t) {
            return $(te(t));
          }(n) || function (t, e) {
            const {
                location: n
              } = t,
              {
                search: r
              } = n,
              o = Kt(r);
            return $(o[e]);
          }(t, n) || function (t, e) {
            const {
                referrer: n
              } = t,
              r = Qt(n).queryKey;
            return !p(r) && $(r[e]);
          }(e, n);
        }
        function de() {
          return Rt().enabled && function () {
            const t = Rt(),
              e = t.cookieDomain,
              n = t.secureOnly,
              r = d({
                domain: e,
                secure: n
              }, n ? {
                sameSite: "None"
              } : {});
            ee("at_check", "true", r);
            const o = "true" === te("at_check");
            return ne("at_check"), o;
          }() && !le(window, document, "mboxDisable");
        }
        function pe() {
          return le(window, document, "mboxDebug");
        }
        function he() {
          return le(window, document, "mboxEdit");
        }
        const me = "AT:";
        function ge(t, e) {
          const {
            console: n
          } = t;
          return !p(n) && b(n[e]);
        }
        function ve(...t) {
          !function (t, e) {
            const {
              console: n
            } = t;
            ge(t, "warn") && n.warn.apply(n, [me].concat(e));
          }(window, t);
        }
        function ye(...t) {
          !function (t, e) {
            const {
              console: n
            } = t;
            ge(t, "debug") && pe() && n.debug.apply(n, [me].concat(e));
          }(window, t);
        }
        function be(t, e, n) {
          const r = t[Nt] || [];
          if (t[Nt] = r, !n) return;
          const o = r.push;
          r.version = "1", r.settings = function (t) {
            return ot((e, n) => (e[n] = t[n], e), {}, Mt);
          }(e), r.clientTraces = [], r.serverTraces = [], r.push = function (t) {
            r.serverTraces.push(d({
              timestamp: et()
            }, t)), o.call(this, t);
          };
        }
        function we(t, e, n, r) {
          "serverTraces" === e && t[Nt].push(n), r && "serverTraces" !== e && t[Nt][e].push(d({
            timestamp: et()
          }, n));
        }
        function xe(t) {
          we(window, "clientTraces", t, pe());
        }
        var Se = setTimeout;
        function Ee(t) {
          return Boolean(t && void 0 !== t.length);
        }
        function Ce() {}
        function Te(t) {
          if (!(this instanceof Te)) throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof t) throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], _e(t, this);
        }
        function ke(t, e) {
          for (; 3 === t._state;) t = t._value;
          0 !== t._state ? (t._handled = !0, Te._immediateFn(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== n) {
              var r;
              try {
                r = n(t._value);
              } catch (t) {
                return void Oe(e.promise, t);
              }
              Ne(e.promise, r);
            } else (1 === t._state ? Ne : Oe)(e.promise, t._value);
          })) : t._deferreds.push(e);
        }
        function Ne(t, e) {
          try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var n = e.then;
              if (e instanceof Te) return t._state = 3, t._value = e, void Ie(t);
              if ("function" == typeof n) return void _e((r = n, o = e, function () {
                r.apply(o, arguments);
              }), t);
            }
            t._state = 1, t._value = e, Ie(t);
          } catch (e) {
            Oe(t, e);
          }
          var r, o;
        }
        function Oe(t, e) {
          t._state = 2, t._value = e, Ie(t);
        }
        function Ie(t) {
          2 === t._state && 0 === t._deferreds.length && Te._immediateFn(function () {
            t._handled || Te._unhandledRejectionFn(t._value);
          });
          for (var e = 0, n = t._deferreds.length; e < n; e++) ke(t, t._deferreds[e]);
          t._deferreds = null;
        }
        function Ae(t, e, n) {
          this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
        }
        function _e(t, e) {
          var n = !1;
          try {
            t(function (t) {
              n || (n = !0, Ne(e, t));
            }, function (t) {
              n || (n = !0, Oe(e, t));
            });
          } catch (t) {
            if (n) return;
            n = !0, Oe(e, t);
          }
        }
        Te.prototype['catch'] = function (t) {
          return this.then(null, t);
        }, Te.prototype.then = function (t, e) {
          var n = new this.constructor(Ce);
          return ke(this, new Ae(t, e, n)), n;
        }, Te.prototype.finally = function (t) {
          var e = this.constructor;
          return this.then(function (n) {
            return e.resolve(t()).then(function () {
              return n;
            });
          }, function (n) {
            return e.resolve(t()).then(function () {
              return e.reject(n);
            });
          });
        }, Te.all = function (t) {
          return new Te(function (e, n) {
            if (!Ee(t)) return n(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return e([]);
            var o = r.length;
            function i(t, c) {
              try {
                if (c && ("object" == typeof c || "function" == typeof c)) {
                  var u = c.then;
                  if ("function" == typeof u) return void u.call(c, function (e) {
                    i(t, e);
                  }, n);
                }
                r[t] = c, 0 == --o && e(r);
              } catch (t) {
                n(t);
              }
            }
            for (var c = 0; c < r.length; c++) i(c, r[c]);
          });
        }, Te.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === Te ? t : new Te(function (e) {
            e(t);
          });
        }, Te.reject = function (t) {
          return new Te(function (e, n) {
            n(t);
          });
        }, Te.race = function (t) {
          return new Te(function (e, n) {
            if (!Ee(t)) return n(new TypeError("Promise.race accepts an array"));
            for (var r = 0, o = t.length; r < o; r++) Te.resolve(t[r]).then(e, n);
          });
        }, Te._immediateFn = "function" == typeof setImmediate && function (t) {
          setImmediate(t);
        } || function (t) {
          Se(t, 0);
        }, Te._unhandledRejectionFn = function (t) {
          "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
        };
        var Me = "undefined" != typeof window && window.Promise || void 0 !== ht && ht.Promise || Te.default || Te,
          Pe = function (t) {
            var e = function () {
              var e,
                n,
                r,
                o,
                i,
                c = [],
                u = c.concat,
                s = c.filter,
                a = c.slice,
                f = t.document,
                l = {},
                d = {},
                p = {
                  "column-count": 1,
                  columns: 1,
                  "font-weight": 1,
                  "line-height": 1,
                  opacity: 1,
                  "z-index": 1,
                  zoom: 1
                },
                h = /^\s*<(\w+|!)[^>]*>/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                g = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                v = /^(?:body|html)$/i,
                y = /([A-Z])/g,
                b = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                w = f.createElement("table"),
                x = f.createElement("tr"),
                S = {
                  tr: f.createElement("tbody"),
                  tbody: w,
                  thead: w,
                  tfoot: w,
                  td: x,
                  th: x,
                  "*": f.createElement("div")
                },
                E = /complete|loaded|interactive/,
                C = /^[\w-]*$/,
                T = {},
                k = T.toString,
                N = {},
                O = f.createElement("div"),
                I = {
                  tabindex: "tabIndex",
                  readonly: "readOnly",
                  'for': "htmlFor",
                  'class': "className",
                  maxlength: "maxLength",
                  cellspacing: "cellSpacing",
                  cellpadding: "cellPadding",
                  rowspan: "rowSpan",
                  colspan: "colSpan",
                  usemap: "useMap",
                  frameborder: "frameBorder",
                  contenteditable: "contentEditable"
                },
                A = Array.isArray || function (t) {
                  return t instanceof Array;
                };
              function _(t) {
                return null == t ? String(t) : T[k.call(t)] || "object";
              }
              function M(t) {
                return "function" == _(t);
              }
              function P(t) {
                return null != t && t == t.window;
              }
              function q(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE;
              }
              function D(t) {
                return "object" == _(t);
              }
              function R(t) {
                return D(t) && !P(t) && Object.getPrototypeOf(t) == Object.prototype;
              }
              function L(t) {
                var e = !!t && "length" in t && t.length,
                  r = n.type(t);
                return "function" != r && !P(t) && ("array" == r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
              }
              function j(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
              }
              function V(t) {
                return t in d ? d[t] : d[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
              }
              function H(t, e) {
                return "number" != typeof e || p[j(t)] ? e : e + "px";
              }
              function U(t) {
                return "children" in t ? a.call(t.children) : n.map(t.childNodes, function (t) {
                  if (1 == t.nodeType) return t;
                });
              }
              function B(t, e) {
                var n,
                  r = t ? t.length : 0;
                for (n = 0; n < r; n++) this[n] = t[n];
                this.length = r, this.selector = e || "";
              }
              function F(t, n, r) {
                for (e in n) r && (R(n[e]) || A(n[e])) ? (R(n[e]) && !R(t[e]) && (t[e] = {}), A(n[e]) && !A(t[e]) && (t[e] = []), F(t[e], n[e], r)) : void 0 !== n[e] && (t[e] = n[e]);
              }
              function z(t, e) {
                return null == e ? n(t) : n(t).filter(e);
              }
              function J(t, e, n, r) {
                return M(e) ? e.call(t, n, r) : e;
              }
              function Z(t, e, n) {
                null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
              }
              function G(t, e) {
                var n = t.className || "",
                  r = n && void 0 !== n.baseVal;
                if (void 0 === e) return r ? n.baseVal : n;
                r ? n.baseVal = e : t.className = e;
              }
              function K(t) {
                try {
                  return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t;
                } catch (e) {
                  return t;
                }
              }
              function X(t, e) {
                e(t);
                for (var n = 0, r = t.childNodes.length; n < r; n++) X(t.childNodes[n], e);
              }
              function Y(t, e, n) {
                const r = t.getElementsByTagName("script")[0];
                if (!r) return;
                const o = r.parentNode;
                if (!o) return;
                const i = t.createElement("script");
                i.innerHTML = e, $(n) && i.setAttribute("nonce", n), o.appendChild(i), o.removeChild(i);
              }
              return N.matches = function (t, e) {
                if (!e || !t || 1 !== t.nodeType) return !1;
                var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (n) return n.call(t, e);
                var r,
                  o = t.parentNode,
                  i = !o;
                return i && (o = O).appendChild(t), r = ~N.qsa(o, e).indexOf(t), i && O.removeChild(t), r;
              }, o = function (t) {
                return t.replace(/-+(.)?/g, function (t, e) {
                  return e ? e.toUpperCase() : "";
                });
              }, i = function (t) {
                return s.call(t, function (e, n) {
                  return t.indexOf(e) == n;
                });
              }, N.fragment = function (t, e, r) {
                var o, i, c;
                return m.test(t) && (o = n(f.createElement(RegExp.$1))), o || (t.replace && (t = t.replace(g, "<$1></$2>")), void 0 === e && (e = h.test(t) && RegExp.$1), e in S || (e = "*"), (c = S[e]).innerHTML = "" + t, o = n.each(a.call(c.childNodes), function () {
                  c.removeChild(this);
                })), R(r) && (i = n(o), n.each(r, function (t, e) {
                  b.indexOf(t) > -1 ? i[t](e) : i.attr(t, e);
                })), o;
              }, N.Z = function (t, e) {
                return new B(t, e);
              }, N.isZ = function (t) {
                return t instanceof N.Z;
              }, N.init = function (t, e) {
                var r, o;
                if (!t) return N.Z();
                if ("string" == typeof t) {
                  if ("<" == (t = t.trim())[0] && h.test(t)) r = N.fragment(t, RegExp.$1, e), t = null;else {
                    if (void 0 !== e) return n(e).find(t);
                    r = N.qsa(f, t);
                  }
                } else {
                  if (M(t)) return n(f).ready(t);
                  if (N.isZ(t)) return t;
                  if (A(t)) o = t, r = s.call(o, function (t) {
                    return null != t;
                  });else if (D(t)) r = [t], t = null;else if (h.test(t)) r = N.fragment(t.trim(), RegExp.$1, e), t = null;else {
                    if (void 0 !== e) return n(e).find(t);
                    r = N.qsa(f, t);
                  }
                }
                return N.Z(r, t);
              }, (n = function (t, e) {
                return N.init(t, e);
              }).extend = function (t) {
                var e,
                  n = a.call(arguments, 1);
                return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
                  F(t, n, e);
                }), t;
              }, N.qsa = function (t, e) {
                var n,
                  r = "#" == e[0],
                  o = !r && "." == e[0],
                  i = r || o ? e.slice(1) : e,
                  c = C.test(i);
                return t.getElementById && c && r ? (n = t.getElementById(i)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : a.call(c && !r && t.getElementsByClassName ? o ? t.getElementsByClassName(i) : t.getElementsByTagName(e) : t.querySelectorAll(e));
              }, n.contains = f.documentElement.contains ? function (t, e) {
                return t !== e && t.contains(e);
              } : function (t, e) {
                for (; e && (e = e.parentNode);) if (e === t) return !0;
                return !1;
              }, n.type = _, n.isFunction = M, n.isWindow = P, n.isArray = A, n.isPlainObject = R, n.isEmptyObject = function (t) {
                var e;
                for (e in t) return !1;
                return !0;
              }, n.isNumeric = function (t) {
                var e = Number(t),
                  n = typeof t;
                return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1;
              }, n.inArray = function (t, e, n) {
                return c.indexOf.call(e, t, n);
              }, n.camelCase = o, n.trim = function (t) {
                return null == t ? "" : String.prototype.trim.call(t);
              }, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function () {}, n.map = function (t, e) {
                var r,
                  o,
                  i,
                  c,
                  u = [];
                if (L(t)) for (o = 0; o < t.length; o++) null != (r = e(t[o], o)) && u.push(r);else for (i in t) null != (r = e(t[i], i)) && u.push(r);
                return (c = u).length > 0 ? n.fn.concat.apply([], c) : c;
              }, n.each = function (t, e) {
                var n, r;
                if (L(t)) {
                  for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t;
                } else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t;
                return t;
              }, n.grep = function (t, e) {
                return s.call(t, e);
              }, t.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                T["[object " + e + "]"] = e.toLowerCase();
              }), n.fn = {
                constructor: N.Z,
                length: 0,
                forEach: c.forEach,
                reduce: c.reduce,
                push: c.push,
                sort: c.sort,
                splice: c.splice,
                indexOf: c.indexOf,
                concat: function () {
                  var t,
                    e,
                    n = [];
                  for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = N.isZ(e) ? e.toArray() : e;
                  return u.apply(N.isZ(this) ? this.toArray() : this, n);
                },
                map: function (t) {
                  return n(n.map(this, function (e, n) {
                    return t.call(e, n, e);
                  }));
                },
                slice: function () {
                  return n(a.apply(this, arguments));
                },
                ready: function (t) {
                  return E.test(f.readyState) && f.body ? t(n) : f.addEventListener("DOMContentLoaded", function () {
                    t(n);
                  }, !1), this;
                },
                get: function (t) {
                  return void 0 === t ? a.call(this) : this[t >= 0 ? t : t + this.length];
                },
                toArray: function () {
                  return this.get();
                },
                size: function () {
                  return this.length;
                },
                remove: function () {
                  return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this);
                  });
                },
                each: function (t) {
                  for (var e, n = this.length, r = 0; r < n && (e = this[r], !1 !== t.call(e, r, e));) r++;
                  return this;
                },
                filter: function (t) {
                  return M(t) ? this.not(this.not(t)) : n(s.call(this, function (e) {
                    return N.matches(e, t);
                  }));
                },
                add: function (t, e) {
                  return n(i(this.concat(n(t, e))));
                },
                is: function (t) {
                  return this.length > 0 && N.matches(this[0], t);
                },
                not: function (t) {
                  var e = [];
                  if (M(t) && void 0 !== t.call) this.each(function (n) {
                    t.call(this, n) || e.push(this);
                  });else {
                    var r = "string" == typeof t ? this.filter(t) : L(t) && M(t.item) ? a.call(t) : n(t);
                    this.forEach(function (t) {
                      r.indexOf(t) < 0 && e.push(t);
                    });
                  }
                  return n(e);
                },
                has: function (t) {
                  return this.filter(function () {
                    return D(t) ? n.contains(this, t) : n(this).find(t).size();
                  });
                },
                eq: function (t) {
                  return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
                },
                first: function () {
                  var t = this[0];
                  return t && !D(t) ? t : n(t);
                },
                last: function () {
                  var t = this[this.length - 1];
                  return t && !D(t) ? t : n(t);
                },
                find: function (t) {
                  var e = this;
                  return t ? "object" == typeof t ? n(t).filter(function () {
                    var t = this;
                    return c.some.call(e, function (e) {
                      return n.contains(e, t);
                    });
                  }) : 1 == this.length ? n(N.qsa(this[0], t)) : this.map(function () {
                    return N.qsa(this, t);
                  }) : n();
                },
                closest: function (t, e) {
                  var r = [],
                    o = "object" == typeof t && n(t);
                  return this.each(function (n, i) {
                    for (; i && !(o ? o.indexOf(i) >= 0 : N.matches(i, t));) i = i !== e && !q(i) && i.parentNode;
                    i && r.indexOf(i) < 0 && r.push(i);
                  }), n(r);
                },
                parents: function (t) {
                  for (var e = [], r = this; r.length > 0;) r = n.map(r, function (t) {
                    if ((t = t.parentNode) && !q(t) && e.indexOf(t) < 0) return e.push(t), t;
                  });
                  return z(e, t);
                },
                parent: function (t) {
                  return z(i(this.pluck("parentNode")), t);
                },
                children: function (t) {
                  return z(this.map(function () {
                    return U(this);
                  }), t);
                },
                contents: function () {
                  return this.map(function () {
                    return this.contentDocument || a.call(this.childNodes);
                  });
                },
                siblings: function (t) {
                  return z(this.map(function (t, e) {
                    return s.call(U(e.parentNode), function (t) {
                      return t !== e;
                    });
                  }), t);
                },
                empty: function () {
                  return this.each(function () {
                    this.innerHTML = "";
                  });
                },
                pluck: function (t) {
                  return n.map(this, function (e) {
                    return e[t];
                  });
                },
                show: function () {
                  return this.each(function () {
                    var t, e, n;
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, l[t] || (e = f.createElement(t), f.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), l[t] = n), l[t]));
                  });
                },
                replaceWith: function (t) {
                  return this.before(t).remove();
                },
                wrap: function (t) {
                  var e = M(t);
                  if (this[0] && !e) var r = n(t).get(0),
                    o = r.parentNode || this.length > 1;
                  return this.each(function (i) {
                    n(this).wrapAll(e ? t.call(this, i) : o ? r.cloneNode(!0) : r);
                  });
                },
                wrapAll: function (t) {
                  if (this[0]) {
                    var e;
                    for (n(this[0]).before(t = n(t)); (e = t.children()).length;) t = e.first();
                    n(t).append(this);
                  }
                  return this;
                },
                wrapInner: function (t) {
                  var e = M(t);
                  return this.each(function (r) {
                    var o = n(this),
                      i = o.contents(),
                      c = e ? t.call(this, r) : t;
                    i.length ? i.wrapAll(c) : o.append(c);
                  });
                },
                unwrap: function () {
                  return this.parent().each(function () {
                    n(this).replaceWith(n(this).children());
                  }), this;
                },
                clone: function () {
                  return this.map(function () {
                    return this.cloneNode(!0);
                  });
                },
                hide: function () {
                  return this.css("display", "none");
                },
                toggle: function (t) {
                  return this.each(function () {
                    var e = n(this);
                    (void 0 === t ? "none" == e.css("display") : t) ? e.show() : e.hide();
                  });
                },
                prev: function (t) {
                  return n(this.pluck("previousElementSibling")).filter(t || "*");
                },
                next: function (t) {
                  return n(this.pluck("nextElementSibling")).filter(t || "*");
                },
                html: function (t) {
                  return 0 in arguments ? this.each(function (e) {
                    var r = this.innerHTML;
                    n(this).empty().append(J(this, t, e, r));
                  }) : 0 in this ? this[0].innerHTML : null;
                },
                text: function (t) {
                  return 0 in arguments ? this.each(function (e) {
                    var n = J(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n;
                  }) : 0 in this ? this.pluck("textContent").join("") : null;
                },
                attr: function (t, n) {
                  var r;
                  return "string" != typeof t || 1 in arguments ? this.each(function (r) {
                    if (1 === this.nodeType) if (D(t)) for (e in t) Z(this, e, t[e]);else Z(this, t, J(this, n, r, this.getAttribute(t)));
                  }) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(t)) ? r : void 0;
                },
                removeAttr: function (t) {
                  return this.each(function () {
                    1 === this.nodeType && t.split(" ").forEach(function (t) {
                      Z(this, t);
                    }, this);
                  });
                },
                prop: function (t, e) {
                  return t = I[t] || t, 1 in arguments ? this.each(function (n) {
                    this[t] = J(this, e, n, this[t]);
                  }) : this[0] && this[0][t];
                },
                removeProp: function (t) {
                  return t = I[t] || t, this.each(function () {
                    delete this[t];
                  });
                },
                data: function (t, e) {
                  var n = "data-" + t.replace(y, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(n, e) : this.attr(n);
                  return null !== r ? K(r) : void 0;
                },
                val: function (t) {
                  return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
                    this.value = J(this, t, e, this.value);
                  })) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
                    return this.selected;
                  }).pluck("value") : this[0].value);
                },
                offset: function (e) {
                  if (e) return this.each(function (t) {
                    var r = n(this),
                      o = J(this, e, t, r.offset()),
                      i = r.offsetParent().offset(),
                      c = {
                        top: o.top - i.top,
                        left: o.left - i.left
                      };
                    "static" == r.css("position") && (c.position = "relative"), r.css(c);
                  });
                  if (!this.length) return null;
                  if (f.documentElement !== this[0] && !n.contains(f.documentElement, this[0])) return {
                    top: 0,
                    left: 0
                  };
                  var r = this[0].getBoundingClientRect();
                  return {
                    left: r.left + t.pageXOffset,
                    top: r.top + t.pageYOffset,
                    width: Math.round(r.width),
                    height: Math.round(r.height)
                  };
                },
                css: function (t, r) {
                  if (arguments.length < 2) {
                    var i = this[0];
                    if ("string" == typeof t) {
                      if (!i) return;
                      return i.style[o(t)] || getComputedStyle(i, "").getPropertyValue(t);
                    }
                    if (A(t)) {
                      if (!i) return;
                      var c = {},
                        u = getComputedStyle(i, "");
                      return n.each(t, function (t, e) {
                        c[e] = i.style[o(e)] || u.getPropertyValue(e);
                      }), c;
                    }
                  }
                  var s = "";
                  if ("string" == _(t)) r || 0 === r ? s = j(t) + ":" + H(t, r) : this.each(function () {
                    this.style.removeProperty(j(t));
                  });else for (e in t) t[e] || 0 === t[e] ? s += j(e) + ":" + H(e, t[e]) + ";" : this.each(function () {
                    this.style.removeProperty(j(e));
                  });
                  return this.each(function () {
                    this.style.cssText += ";" + s;
                  });
                },
                index: function (t) {
                  return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0]);
                },
                hasClass: function (t) {
                  return !!t && c.some.call(this, function (t) {
                    return this.test(G(t));
                  }, V(t));
                },
                addClass: function (t) {
                  return t ? this.each(function (e) {
                    if ("className" in this) {
                      r = [];
                      var o = G(this);
                      J(this, t, e, o).split(/\s+/g).forEach(function (t) {
                        n(this).hasClass(t) || r.push(t);
                      }, this), r.length && G(this, o + (o ? " " : "") + r.join(" "));
                    }
                  }) : this;
                },
                removeClass: function (t) {
                  return this.each(function (e) {
                    if ("className" in this) {
                      if (void 0 === t) return G(this, "");
                      r = G(this), J(this, t, e, r).split(/\s+/g).forEach(function (t) {
                        r = r.replace(V(t), " ");
                      }), G(this, r.trim());
                    }
                  });
                },
                toggleClass: function (t, e) {
                  return t ? this.each(function (r) {
                    var o = n(this);
                    J(this, t, r, G(this)).split(/\s+/g).forEach(function (t) {
                      (void 0 === e ? !o.hasClass(t) : e) ? o.addClass(t) : o.removeClass(t);
                    });
                  }) : this;
                },
                scrollTop: function (t) {
                  if (this.length) {
                    var e = "scrollTop" in this[0];
                    return void 0 === t ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                      this.scrollTop = t;
                    } : function () {
                      this.scrollTo(this.scrollX, t);
                    });
                  }
                },
                scrollLeft: function (t) {
                  if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return void 0 === t ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                      this.scrollLeft = t;
                    } : function () {
                      this.scrollTo(t, this.scrollY);
                    });
                  }
                },
                position: function () {
                  if (this.length) {
                    var t = this[0],
                      e = this.offsetParent(),
                      r = this.offset(),
                      o = v.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                      } : e.offset();
                    return r.top -= parseFloat(n(t).css("margin-top")) || 0, r.left -= parseFloat(n(t).css("margin-left")) || 0, o.top += parseFloat(n(e[0]).css("border-top-width")) || 0, o.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
                      top: r.top - o.top,
                      left: r.left - o.left
                    };
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (var t = this.offsetParent || f.body; t && !v.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
                    return t;
                  });
                }
              }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (t) {
                var e = t.replace(/./, function (t) {
                  return t[0].toUpperCase();
                });
                n.fn[t] = function (r) {
                  var o,
                    i = this[0];
                  return void 0 === r ? P(i) ? i["inner" + e] : q(i) ? i.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
                    (i = n(this)).css(t, J(this, r, e, i[t]()));
                  });
                };
              }), ["after", "prepend", "before", "append"].forEach(function (t, e) {
                var r = e % 2;
                n.fn[t] = function () {
                  var t,
                    o,
                    i = n.map(arguments, function (e) {
                      var r = [];
                      return "array" == (t = _(e)) ? (e.forEach(function (t) {
                        return void 0 !== t.nodeType ? r.push(t) : n.zepto.isZ(t) ? r = r.concat(t.get()) : void (r = r.concat(N.fragment(t)));
                      }), r) : "object" == t || null == e ? e : N.fragment(e);
                    }),
                    c = this.length > 1;
                  return i.length < 1 ? this : this.each(function (t, u) {
                    o = r ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
                    const s = n.contains(f.documentElement, o),
                      a = /^(text|application)\/(javascript|ecmascript)$/,
                      l = Rt(),
                      d = l.cspScriptNonce,
                      p = l.cspStyleNonce;
                    i.forEach(function (t) {
                      if (c) t = t.cloneNode(!0);else if (!o) return n(t).remove();
                      $(d) && "SCRIPT" === t.tagName && t.setAttribute("nonce", d), $(p) && "STYLE" === t.tagName && t.setAttribute("nonce", p), o.insertBefore(t, u), s && X(t, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && !a.test(t.type.toLowerCase()) || t.src || Y(f, t.innerHTML, t.nonce);
                      });
                    });
                  });
                }, n.fn[r ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) {
                  return n(e)[t](this), this;
                };
              }), N.Z.prototype = B.prototype = n.fn, N.uniq = i, N.deserializeValue = K, n.zepto = N, n;
            }();
            return function (e) {
              var n = 1,
                r = Array.prototype.slice,
                o = e.isFunction,
                i = function (t) {
                  return "string" == typeof t;
                },
                c = {},
                u = {},
                s = "onfocusin" in t,
                a = {
                  focus: "focusin",
                  blur: "focusout"
                },
                f = {
                  mouseenter: "mouseover",
                  mouseleave: "mouseout"
                };
              function l(t) {
                return t._zid || (t._zid = n++);
              }
              function d(t, e, n, r) {
                if ((e = p(e)).ns) var o = (i = e.ns, new RegExp("(?:^| )" + i.replace(" ", " .* ?") + "(?: |$)"));
                var i;
                return (c[l(t)] || []).filter(function (t) {
                  return t && (!e.e || t.e == e.e) && (!e.ns || o.test(t.ns)) && (!n || l(t.fn) === l(n)) && (!r || t.sel == r);
                });
              }
              function p(t) {
                var e = ("" + t).split(".");
                return {
                  e: e[0],
                  ns: e.slice(1).sort().join(" ")
                };
              }
              function h(t, e) {
                return t.del && !s && t.e in a || !!e;
              }
              function m(t) {
                return f[t] || s && a[t] || t;
              }
              function g(t, n, r, o, i, u, s) {
                var a = l(t),
                  d = c[a] || (c[a] = []);
                n.split(/\s/).forEach(function (n) {
                  if ("ready" == n) return e(document).ready(r);
                  var c = p(n);
                  c.fn = r, c.sel = i, c.e in f && (r = function (t) {
                    var n = t.relatedTarget;
                    if (!n || n !== this && !e.contains(this, n)) return c.fn.apply(this, arguments);
                  }), c.del = u;
                  var a = u || r;
                  c.proxy = function (e) {
                    if (!(e = S(e)).isImmediatePropagationStopped()) {
                      e.data = o;
                      var n = a.apply(t, null == e._args ? [e] : [e].concat(e._args));
                      return !1 === n && (e.preventDefault(), e.stopPropagation()), n;
                    }
                  }, c.i = d.length, d.push(c), "addEventListener" in t && t.addEventListener(m(c.e), c.proxy, h(c, s));
                });
              }
              function v(t, e, n, r, o) {
                var i = l(t);
                (e || "").split(/\s/).forEach(function (e) {
                  d(t, e, n, r).forEach(function (e) {
                    delete c[i][e.i], "removeEventListener" in t && t.removeEventListener(m(e.e), e.proxy, h(e, o));
                  });
                });
              }
              u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents", e.event = {
                add: g,
                remove: v
              }, e.proxy = function (t, n) {
                var c = 2 in arguments && r.call(arguments, 2);
                if (o(t)) {
                  var u = function () {
                    return t.apply(n, c ? c.concat(r.call(arguments)) : arguments);
                  };
                  return u._zid = l(t), u;
                }
                if (i(n)) return c ? (c.unshift(t[n], t), e.proxy.apply(null, c)) : e.proxy(t[n], t);
                throw new TypeError("expected function");
              }, e.fn.bind = function (t, e, n) {
                return this.on(t, e, n);
              }, e.fn.unbind = function (t, e) {
                return this.off(t, e);
              }, e.fn.one = function (t, e, n, r) {
                return this.on(t, e, n, r, 1);
              };
              var y = function () {
                  return !0;
                },
                b = function () {
                  return !1;
                },
                w = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                x = {
                  preventDefault: "isDefaultPrevented",
                  stopImmediatePropagation: "isImmediatePropagationStopped",
                  stopPropagation: "isPropagationStopped"
                };
              function S(t, n) {
                if (n || !t.isDefaultPrevented) {
                  n || (n = t), e.each(x, function (e, r) {
                    var o = n[e];
                    t[e] = function () {
                      return this[r] = y, o && o.apply(n, arguments);
                    }, t[r] = b;
                  });
                  try {
                    t.timeStamp || (t.timeStamp = new Date().getTime());
                  } catch (t) {}
                  (void 0 !== n.defaultPrevented ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = y);
                }
                return t;
              }
              function E(t) {
                var e,
                  n = {
                    originalEvent: t
                  };
                for (e in t) w.test(e) || void 0 === t[e] || (n[e] = t[e]);
                return S(n, t);
              }
              e.fn.delegate = function (t, e, n) {
                return this.on(e, t, n);
              }, e.fn.undelegate = function (t, e, n) {
                return this.off(e, t, n);
              }, e.fn.live = function (t, n) {
                return e(document.body).delegate(this.selector, t, n), this;
              }, e.fn.die = function (t, n) {
                return e(document.body).undelegate(this.selector, t, n), this;
              }, e.fn.on = function (t, n, c, u, s) {
                var a,
                  f,
                  l = this;
                return t && !i(t) ? (e.each(t, function (t, e) {
                  l.on(t, n, c, e, s);
                }), l) : (i(n) || o(u) || !1 === u || (u = c, c = n, n = void 0), void 0 !== u && !1 !== c || (u = c, c = void 0), !1 === u && (u = b), l.each(function (o, i) {
                  s && (a = function (t) {
                    return v(i, t.type, u), u.apply(this, arguments);
                  }), n && (f = function (t) {
                    var o,
                      c = e(t.target).closest(n, i).get(0);
                    if (c && c !== i) return o = e.extend(E(t), {
                      currentTarget: c,
                      liveFired: i
                    }), (a || u).apply(c, [o].concat(r.call(arguments, 1)));
                  }), g(i, t, u, c, n, f || a);
                }));
              }, e.fn.off = function (t, n, r) {
                var c = this;
                return t && !i(t) ? (e.each(t, function (t, e) {
                  c.off(t, n, e);
                }), c) : (i(n) || o(r) || !1 === r || (r = n, n = void 0), !1 === r && (r = b), c.each(function () {
                  v(this, t, r, n);
                }));
              }, e.fn.trigger = function (t, n) {
                return (t = i(t) || e.isPlainObject(t) ? e.Event(t) : S(t))._args = n, this.each(function () {
                  t.type in a && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n);
                });
              }, e.fn.triggerHandler = function (t, n) {
                var r, o;
                return this.each(function (c, u) {
                  (r = E(i(t) ? e.Event(t) : t))._args = n, r.target = u, e.each(d(u, t.type || t), function (t, e) {
                    if (o = e.proxy(r), r.isImmediatePropagationStopped()) return !1;
                  });
                }), o;
              }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
                e.fn[t] = function (e) {
                  return 0 in arguments ? this.bind(t, e) : this.trigger(t);
                };
              }), e.Event = function (t, e) {
                i(t) || (t = (e = t).type);
                var n = document.createEvent(u[t] || "Events"),
                  r = !0;
                if (e) for (var o in e) "bubbles" == o ? r = !!e[o] : n[o] = e[o];
                return n.initEvent(t, r, !0), S(n);
              };
            }(e), function () {
              try {
                getComputedStyle(void 0);
              } catch (n) {
                var e = getComputedStyle;
                t.getComputedStyle = function (t, n) {
                  try {
                    return e(t, n);
                  } catch (t) {
                    return null;
                  }
                };
              }
            }(), function (t) {
              var e = t.zepto,
                n = e.qsa,
                r = /^\s*>/,
                o = "Zepto" + +new Date();
              e.qsa = function (e, i) {
                var c,
                  u,
                  s = i;
                try {
                  s ? r.test(s) && (u = t(e).addClass(o), s = "." + o + " " + s) : s = "*", c = n(e, s);
                } catch (t) {
                  throw t;
                } finally {
                  u && u.removeClass(o);
                }
                return c;
              };
            }(e), e;
          }(window);
        const qe = window.MutationObserver || window.WebkitMutationObserver;
        function De() {
          return b(qe);
        }
        function Re(t) {
          return new qe(t);
        }
        function Le() {
          const t = document.createTextNode(""),
            e = [];
          return Re(() => {
            const t = e.length;
            for (let n = 0; n < t; n += 1) e[n]();
            e.splice(0, t);
          }).observe(t, {
            characterData: !0
          }), n => {
            e.push(n), t.textContent = t.textContent.length > 0 ? "" : "a";
          };
        }
        function je(t) {
          return new Me(t);
        }
        function Ve(t) {
          return Me.resolve(t);
        }
        function He(t) {
          return Me.reject(t);
        }
        function Ue(t) {
          return h(t) ? Me.all(t) : He(new TypeError("Expected an array of promises"));
        }
        function Be(t, e, n) {
          let r = -1;
          const o = je((t, o) => {
            r = at(() => o(new Error(n)), e);
          });
          return (i = [t, o], h(i) ? Me.race(i) : He(new TypeError("Expected an array of promises"))).then(t => (ft(r), t), t => {
            throw ft(r), t;
          });
          var i;
        }
        function Fe(t) {
          if (p(t.adobe)) return !1;
          const e = t.adobe;
          if (p(e.optIn)) return !1;
          const n = e.optIn;
          return b(n.fetchPermissions) && b(n.isApproved);
        }
        function $e(t, e) {
          if (!Fe(t)) return !0;
          const n = t.adobe.optIn,
            r = (t.adobe.optIn.Categories || {})[e];
          return n.isApproved(r);
        }
        function ze() {
          const t = Rt().optinEnabled;
          return function (t, e) {
            return !!e && Fe(t);
          }(window, t);
        }
        function Je() {
          return $e(window, "TARGET");
        }
        function Ze() {
          return function (t, e) {
            if (!Fe(t)) return Ve(!0);
            const n = t.adobe.optIn,
              r = (t.adobe.optIn.Categories || {})[e];
            return je((t, e) => {
              n.fetchPermissions(() => {
                n.isApproved(r) ? t(!0) : e("Adobe Target is not opted in");
              }, !0);
            });
          }(window, "TARGET");
        }
        Me._setImmediateFn && (De() ? Me._setImmediateFn(Le()) : -1 !== window.navigator.userAgent.indexOf("MSIE 10") && Me._setImmediateFn(t => {
          let e = Pe("<script>");
          e.on("readystatechange", () => {
            e.on("readystatechange", null), e.remove(), e = null, t();
          }), Pe(document.documentElement).append(e);
        }));
        const Ge = st();
        function Ke(t) {
          !function (t, e) {
            fe({
              name: "session",
              value: t,
              expires: e.sessionIdLifetime,
              domain: e.cookieDomain,
              secure: e.secureOnly
            });
          }(t, Rt());
        }
        function Xe() {
          if (ze() && !Je()) return Ge;
          const t = function () {
            const {
                location: t
              } = window,
              {
                search: e
              } = t;
            return Kt(e).mboxSession;
          }();
          if ($(t)) return Ke(t), ce("session");
          const e = ce("session");
          return F(e) ? Ke(Ge) : Ke(e), ce("session");
        }
        function Ye() {
          return ce("PC");
        }
        const We = /.*\.(\d+)_\d+/;
        function Qe(t) {
          const e = Rt();
          if (!e.overrideMboxEdgeServer) return;
          const n = e.cookieDomain,
            r = new Date(et() + e.overrideMboxEdgeServerTimeout),
            o = e.secureOnly,
            i = te("mboxEdgeCluster"),
            c = d({
              domain: n,
              expires: r,
              secure: o
            }, o ? {
              sameSite: "None"
            } : {});
          if ($(i)) return void ee("mboxEdgeCluster", i, c);
          const u = function (t) {
            if (F(t)) return "";
            const e = We.exec(t);
            return V(e) || 2 !== e.length ? "" : e[1];
          }(t);
          F(u) || ee("mboxEdgeCluster", u, c);
        }
        function tn(t, e, n, r) {
          const o = new t.CustomEvent(n, {
            detail: r
          });
          e.dispatchEvent(o);
        }
        !function (t, e) {
          function n(t, n) {
            const r = e.createEvent("CustomEvent");
            return n = n || {
              bubbles: !1,
              cancelable: !1,
              detail: void 0
            }, r.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), r;
          }
          b(t.CustomEvent) || (n.prototype = t.Event.prototype, t.CustomEvent = n);
        }(window, document);
        function en(t, e) {
          const {
              mbox: n,
              error: r,
              url: o,
              analyticsDetails: i,
              responseTokens: c,
              execution: u
            } = e,
            s = {
              type: t,
              tracking: function (t, e) {
                const n = t(),
                  r = e(),
                  o = {};
                return o.sessionId = n, $(r) ? (o.deviceId = r, o) : o;
              }(Xe, Ye)
            };
          return p(n) || (s.mbox = n), p(r) || (s.error = r), p(o) || (s.url = o), V(i) || (s.analyticsDetails = i), V(c) || (s.responseTokens = c), V(u) || (s.execution = u), s;
        }
        function nn(t) {
          const e = en("at-request-start", t);
          tn(window, document, "at-request-start", e);
        }
        function rn(t, e) {
          const n = en("at-request-succeeded", t);
          n.redirect = e, tn(window, document, "at-request-succeeded", n);
        }
        function on(t) {
          const e = en("at-request-failed", t);
          tn(window, document, "at-request-failed", e);
        }
        function cn(t) {
          const e = en("at-content-rendering-start", t);
          tn(window, document, "at-content-rendering-start", e);
        }
        function un(t) {
          const e = en("at-content-rendering-succeeded", t);
          tn(window, document, "at-content-rendering-succeeded", e);
        }
        function sn(t) {
          const e = en("at-content-rendering-failed", t);
          tn(window, document, "at-content-rendering-failed", e);
        }
        function an(t) {
          const e = en("at-content-rendering-no-offers", t);
          tn(window, document, "at-content-rendering-no-offers", e);
        }
        function fn(t) {
          const e = en("at-content-rendering-redirect", t);
          tn(window, document, "at-content-rendering-redirect", e);
        }
        var ln = function (t) {
          var e = document.createElement("script");
          e.src = t, e.async = !0;
          var n = function (t, e) {
            return new Me(function (n, r) {
              e.onload = function () {
                n(e);
              }, e.onerror = function () {
                r(new Error("Failed to load script " + t));
              };
            });
          }(t, e);
          return document.getElementsByTagName("head")[0].appendChild(e), n;
        };
        function dn(t) {
          return _(t) && 1 === t.nodeType && !Y(t);
        }
        const pn = ":eq(".length,
          hn = /((\.|#)(-)?\d{1})/g;
        function mn(t) {
          const e = t.charAt(0),
            n = t.charAt(1),
            r = t.charAt(2),
            o = {
              key: t
            };
          return o.val = "-" === n ? "" + e + n + "\\3" + r + " " : e + "\\3" + n + " ", o;
        }
        function gn(t) {
          if (dn(t)) return Pe(t);
          if (!M(t)) return Pe(t);
          const e = function (t) {
            const e = t.match(hn);
            return V(e) ? t : ot((t, e) => t.replace(e.key, e.val), t, tt(mn, e));
          }(t);
          if (-1 === e.indexOf(":eq(")) return Pe(e);
          const n = function (t) {
            const e = [];
            let n,
              r,
              o,
              i,
              c = B(t),
              u = c.indexOf(":eq(");
            for (; -1 !== u;) n = B(c.substring(0, u)), r = B(c.substring(u)), i = r.indexOf(")"), o = B(r.substring(pn, i)), c = B(r.substring(i + 1)), u = c.indexOf(":eq("), n && o && e.push({
              sel: n,
              eq: Number(o)
            });
            return c && e.push({
              sel: c
            }), e;
          }(e);
          return ot((t, e) => {
            const {
              sel: n,
              eq: r
            } = e;
            return t = t.find(n), z(r) && (t = t.eq(r)), t;
          }, Pe(document), n);
        }
        function vn(t) {
          return gn(t).length > 0;
        }
        function yn(t) {
          return Pe("<div/>").append(t);
        }
        function bn(t) {
          return gn(t).parent();
        }
        function wn(t, e) {
          return gn(e).find(t);
        }
        const xn = "clickHandlerForExperienceEditor";
        function Sn() {
          if (!he()) return;
          window._AT = window._AT || {}, window._AT.querySelectorAll = gn;
          const t = Rt().authoringScriptUrl;
          ye("Loading target-vec.js"), ln(t).then(() => {
            document.addEventListener("click", t => {
              b(window._AT[xn]) && window._AT[xn](t);
            }, !0);
          })['catch'](() => ve("Unable to load target-vec.js"));
        }
        const En = t => !p(t);
        function Cn(t) {
          const e = function (t) {
            return parseInt(t, 10);
          }(t);
          return isNaN(e) ? null : e;
        }
        function Tn(t) {
          return ut("_", t);
        }
        function kn(t) {
          const e = ut("_", t),
            n = Cn(e[0]);
          if (p(n)) return null;
          const r = {};
          r.activityIndex = n;
          const o = Cn(e[1]);
          return p(o) || (r.experienceIndex = o), r;
        }
        function Nn(t) {
          return N(En, tt(kn, t));
        }
        function On(t) {
          const e = Kt(t),
            n = e.at_preview_token;
          if (F(n)) return null;
          const r = {};
          r.token = n;
          const o = e.at_preview_listed_activities_only;
          $(o) && "true" === o && (r.listedActivitiesOnly = !0);
          const i = e.at_preview_evaluate_as_true_audience_ids;
          $(i) && (r.evaluateAsTrueAudienceIds = Tn(i));
          const c = e.at_preview_evaluate_as_false_audience_ids;
          $(c) && (r.evaluateAsFalseAudienceIds = Tn(c));
          const u = e.at_preview_index;
          return V(u) || (r.previewIndexes = h(s = u) ? Nn(s) : Nn([s])), r;
          var s;
        }
        function In(t) {
          const e = function (t) {
            const e = Kt(t).at_preview;
            return F(e) ? null : {
              token: e
            };
          }(t.location.search);
          if (p(e)) return;
          const n = new Date(et() + 186e4),
            r = Rt().secureOnly,
            o = d({
              expires: n,
              secure: r
            }, r ? {
              sameSite: "None"
            } : {});
          ee("at_preview_mode", JSON.stringify(e), o);
        }
        function An(t) {
          return gn(t).empty().remove();
        }
        function _n(t, e) {
          return gn(e).after(t);
        }
        function Mn(t, e) {
          return gn(e).before(t);
        }
        function Pn(t, e) {
          return gn(e).append(t);
        }
        function qn(t) {
          return gn(t).html();
        }
        function Dn(t, e) {
          return '<style id="' + t + '" class="at-flicker-control">' + e + "</style>";
        }
        function Rn(t, e) {
          if (V(e)) return;
          const n = N(t => !vn("#at-" + P(t)), e);
          if (V(n)) return;
          const r = t.defaultContentHiddenStyle;
          Pn(W("\n", tt(t => function (t, e) {
            return Dn("at-" + P(e), e + " {" + t + "}");
          }(r, t), n)), "head");
        }
        function Ln(t, e) {
          if (V(e) || vn("#at-views")) return;
          Pn(function (t, e) {
            return Dn("at-views", e + " {" + t + "}");
          }(t.defaultContentHiddenStyle, W(", ", e)), "head");
        }
        function jn() {
          !function (t) {
            if (!0 !== t.bodyHidingEnabled) return;
            if (vn("#at-body-style")) return;
            Pn(Dn("at-body-style", t.bodyHiddenStyle), "head");
          }(Rt());
        }
        function Vn() {
          !function (t) {
            !0 === t.bodyHidingEnabled && vn("#at-body-style") && An("#at-body-style");
          }(Rt());
        }
        function Hn(t) {
          return !p(t.id);
        }
        function Un(t) {
          return !p(t.authState);
        }
        function Bn(t) {
          return Hn(t) || Un(t);
        }
        function Fn(t, e) {
          return ot((t, n, r) => {
            const o = {};
            return o.integrationCode = r, Hn(n) && (o.id = n.id), Un(n) && (o.authenticatedState = function (t) {
              switch (t) {
                case 0:
                  return "unknown";
                case 1:
                  return "authenticated";
                case 2:
                  return "logged_out";
                default:
                  return "unknown";
              }
            }(n.authState)), o[vt] = e, function (t) {
              return t.primary;
            }(n) && (o.primary = !0), t.push(o), t;
          }, [], N(Bn, t));
        }
        function $n(t) {
          if (p(t)) return [];
          if (!b(t.getCustomerIDs)) return [];
          const e = t.getCustomerIDs(!0);
          return y(e) ? function (t) {
            if (!t.nameSpaces && !t.dataSources) return Fn(t, "DS");
            const e = [];
            return t.nameSpaces && e.push.apply(e, Fn(t.nameSpaces, "NS")), t.dataSources && e.push.apply(e, Fn(t.dataSources, "DS")), e;
          }(e) : [];
        }
        function zn(t) {
          return ye("Visitor API requests error", t), {};
        }
        function Jn(t, e, n) {
          if (p(t)) return Ve({});
          return Be(function (t, e) {
            if (!b(t.getVisitorValues)) return Ve({});
            const n = ["MCMID", "MCAAMB", "MCAAMLH"];
            return e && n.push("MCOPTOUT"), je(e => {
              t.getVisitorValues(t => e(t), n);
            });
          }(t, n), e, "Visitor API requests timed out")['catch'](zn);
        }
        function Zn(t, e) {
          return p(t) ? {} : function (t, e) {
            if (!b(t.getVisitorValues)) return {};
            const n = ["MCMID", "MCAAMB", "MCAAMLH"];
            e && n.push("MCOPTOUT");
            const r = {};
            return t.getVisitorValues(t => d(r, t), n), r;
          }(t, e);
        }
        function Gn() {
          const t = Rt(),
            e = t.imsOrgId,
            n = t.supplementalDataIdParamTimeout;
          return function (t, e, n) {
            if (F(e)) return null;
            if (p(t.Visitor)) return null;
            if (!b(t.Visitor.getInstance)) return null;
            const r = t.Visitor.getInstance(e, {
              sdidParamExpiry: n
            });
            return y(r) && b(r.isAllowed) && r.isAllowed() ? r : null;
          }(window, e, n);
        }
        function Kn(t) {
          return function (t, e) {
            return p(t) ? null : b(t.getSupplementalDataID) ? t.getSupplementalDataID(e) : null;
          }(Gn(), t);
        }
        function Xn(t) {
          return function (t, e) {
            if (p(t)) return null;
            const n = t[e];
            return p(n) ? null : n;
          }(Gn(), t);
        }
        const Yn = {};
        function Wn(t, e) {
          Yn[t] = e;
        }
        function Qn(t) {
          return Yn[t];
        }
        function tr(t) {
          const e = t.name;
          if (!M(e) || V(e)) return !1;
          const n = t.version;
          if (!M(n) || V(n)) return !1;
          const r = t.timeout;
          if (!p(r) && !z(r)) return !1;
          return !!b(t.provider);
        }
        function er(t, e, n, r, o, i) {
          const c = {};
          c[t] = e, c[n] = r, c[o] = i;
          const u = {};
          return u.dataProvider = c, u;
        }
        function nr(t) {
          const e = t.name,
            n = t.version,
            r = t.timeout || 2e3;
          return Be(function (t) {
            return je((e, n) => {
              t((t, r) => {
                p(t) ? e(r) : n(t);
              });
            });
          }(t.provider), r, "timed out").then(t => {
            const r = er("name", e, "version", n, "params", t);
            return ye("Data provider", kt, r), xe(r), t;
          })['catch'](t => {
            const r = er("name", e, "version", n, Ct, t);
            return ye("Data provider", Ct, r), xe(r), {};
          });
        }
        function rr(t) {
          const e = ot((t, e) => d(t, e), {}, t);
          return Wn("dataProviders", e), e;
        }
        function or(t) {
          if (!function (t) {
            const e = t.targetGlobalSettings;
            if (p(e)) return !1;
            const n = e.dataProviders;
            return !(!h(n) || V(n));
          }(t)) return Ve({});
          return Ue(tt(nr, N(tr, t.targetGlobalSettings.dataProviders))).then(rr);
        }
        function ir() {
          return function () {
            const t = Qn("dataProviders");
            return p(t) ? {} : t;
          }();
        }
        function cr() {
          const t = function (t) {
              const {
                  location: e
                } = t,
                {
                  search: n
                } = e,
                r = Kt(n).authorization;
              return F(r) ? null : r;
            }(window),
            e = function () {
              const t = te("mboxDebugTools");
              return F(t) ? null : t;
            }();
          return t || e;
        }
        function ur(t) {
          return !V(t) && 2 === t.length && $(t[0]);
        }
        function sr(t, e, n, r) {
          A((t, o) => {
            y(t) ? (e.push(o), sr(t, e, n, r), e.pop()) : V(e) ? n[r(o)] = t : n[r(W(".", e.concat(o)))] = t;
          }, t);
        }
        function ar(t) {
          if (!b(t)) return {};
          let e = null;
          try {
            e = t();
          } catch (t) {
            return {};
          }
          return p(e) ? {} : h(e) ? function (t) {
            const e = ot((t, e) => (t.push(function (t) {
              const e = t.indexOf("=");
              return -1 === e ? [] : [t.substr(0, e), t.substr(e + 1)];
            }(e)), t), [], N($, t));
            return ot((t, e) => (t[Yt(B(e[0]))] = Yt(B(e[1])), t), {}, N(ur, e));
          }(e) : M(e) && $(e) ? N((t, e) => $(e), Kt(e)) : y(e) ? function (t, e) {
            const n = {};
            return p(e) ? sr(t, [], n, w) : sr(t, [], n, e), n;
          }(e) : {};
        }
        function fr(t) {
          return d({}, t, ar(window.targetPageParamsAll));
        }
        function lr(t) {
          const e = Rt(),
            n = e.globalMboxName,
            r = e.mboxParams,
            o = e.globalMboxParams;
          return n !== t ? fr(r || {}) : d(fr(r || {}), function (t) {
            return d({}, t, ar(window.targetPageParams));
          }(o || {}));
        }
        const dr = function () {
          const t = document.createElement("canvas"),
            e = t.getContext("webgl") || t.getContext("experimental-webgl");
          if (p(e)) return null;
          const n = e.getExtension("WEBGL_debug_renderer_info");
          if (p(n)) return null;
          const r = e.getParameter(n.UNMASKED_RENDERER_WEBGL);
          return p(r) ? null : r;
        }();
        function pr() {
          let {
            devicePixelRatio: t
          } = window;
          if (!p(t)) return t;
          t = 1;
          const {
              screen: e
            } = window,
            {
              systemXDPI: n,
              logicalXDPI: r
            } = e;
          return !p(n) && !p(r) && n > r && (t = n / r), t;
        }
        function hr() {
          const {
              screen: t
            } = window,
            {
              orientation: e,
              width: n,
              height: r
            } = t;
          if (p(e)) return n > r ? "landscape" : "portrait";
          if (p(e.type)) return null;
          const o = ut("-", e.type);
          if (V(o)) return null;
          const i = o[0];
          return p(i) ? null : i;
        }
        function mr(t) {
          return -1 !== t.indexOf("profile.");
        }
        function gr(t) {
          return ot((t, e, n) => {
            return mr(r = n) || function (t) {
              return "mbox3rdPartyId" === t;
            }(r) || function (t) {
              return "at_property" === t;
            }(r) || function (t) {
              return "orderId" === t;
            }(r) || function (t) {
              return "orderTotal" === t;
            }(r) || function (t) {
              return "productPurchasedId" === t;
            }(r) || function (t) {
              return "productId" === t;
            }(r) || function (t) {
              return "categoryId" === t;
            }(r) || (t[n] = p(e) ? "" : e), t;
            var r;
          }, {}, t);
        }
        function vr({
          url: t,
          headers: e,
          body: n,
          timeout: r,
          async: o
        }) {
          return je((i, c) => {
            let u = new window.XMLHttpRequest();
            u = function (t, e, n) {
              return t.onload = () => {
                const r = 1223 === t.status ? 204 : t.status;
                if (r < 100 || r > 599) return void n(new Error("Network request failed"));
                let o;
                try {
                  o = JSON.parse(t.responseText);
                } catch (t) {
                  return void n(new Error("Malformed response JSON"));
                }
                const i = t.getAllResponseHeaders();
                e({
                  status: r,
                  headers: i,
                  response: o
                });
              }, t;
            }(u, i, c), u = function (t, e) {
              return t.onerror = () => {
                e(new Error("Network request failed"));
              }, t;
            }(u, c), u.open("POST", t, o), u.withCredentials = !0, u = function (t, e = {}) {
              return A((e, n) => {
                h(e) && A(e => {
                  t.setRequestHeader(n, e);
                }, e);
              }, e), t;
            }(u, e), o && (u = function (t, e, n) {
              return t.timeout = e, t.ontimeout = () => {
                n(new Error("Request timed out"));
              }, t;
            }(u, r, c)), u.send(JSON.stringify(n));
          }).then(t => {
            const {
                response: e
              } = t,
              {
                status: n,
                message: r
              } = e;
            if (!p(n) && !p(r)) throw new Error(r);
            return e;
          });
        }
        const yr = t => !V(t);
        function br(t) {
          if (t.MCOPTOUT) throw new Error("Disabled due to optout");
          return t;
        }
        function wr() {
          const t = function () {
              const t = Gn(),
                e = Rt();
              return Jn(t, e.visitorApiTimeout, e.optoutEnabled);
            }(),
            e = or(window);
          return Ue([t.then(br), e]);
        }
        function xr() {
          return [Zn(Gn(), Rt().optoutEnabled), ir()];
        }
        function Sr() {
          const {
            screen: t
          } = window;
          return {
            width: t.width,
            height: t.height,
            orientation: hr(),
            colorDepth: t.colorDepth,
            pixelRatio: pr()
          };
        }
        function Er() {
          const {
            documentElement: t
          } = document;
          return {
            width: t.clientWidth,
            height: t.clientHeight
          };
        }
        function Cr() {
          const {
            location: t
          } = window;
          return {
            host: t.hostname,
            webGLRenderer: dr
          };
        }
        function Tr() {
          const {
            location: t
          } = window;
          return {
            url: t.href,
            referringUrl: document.referrer
          };
        }
        function kr(t) {
          const {
              id: e,
              integrationCode: n,
              authenticatedState: r,
              type: o,
              primary: i
            } = t,
            c = {};
          return $(e) && (c.id = e), $(n) && (c.integrationCode = n), $(r) && (c.authenticatedState = r), $(o) && (c.type = o), i && (c.primary = i), c;
        }
        function Nr(t, e, n, r, o) {
          const i = {};
          $(e) && (i.tntId = e), $(n) && (i.thirdPartyId = n), $(t.thirdPartyId) && (i.thirdPartyId = t.thirdPartyId);
          const c = r.MCMID;
          return $(c) && (i.marketingCloudVisitorId = c), $(t.marketingCloudVisitorId) && (i.marketingCloudVisitorId = t.marketingCloudVisitorId), V(t.customerIds) ? (V(o) || (i.customerIds = function (t) {
            return tt(kr, t);
          }(o)), i) : (i.customerIds = t.customerIds, i);
        }
        function Or(t, e) {
          const n = {},
            r = function (t, e) {
              if (!p(t)) return t;
              const n = {};
              if (V(e)) return n;
              const r = e.MCAAMLH,
                o = parseInt(r, 10);
              isNaN(o) || (n.locationHint = o);
              const i = e.MCAAMB;
              return $(i) && (n.blob = i), n;
            }(t.audienceManager, e);
          return V(r) || (n.audienceManager = r), V(t.analytics) || (n.analytics = t.analytics), n;
        }
        function Ir(t) {
          return p(t) ? function () {
            const t = te("at_preview_mode");
            if (F(t)) return {};
            try {
              return JSON.parse(t);
            } catch (t) {
              return {};
            }
          }() : t;
        }
        function Ar(t) {
          return p(t) ? function () {
            const t = te("at_qa_mode");
            if (F(t)) return {};
            try {
              return JSON.parse(t);
            } catch (t) {
              return {};
            }
          }() : t;
        }
        function _r(t) {
          const e = {},
            n = function (t) {
              return t.orderId;
            }(t);
          p(n) || (e.id = n);
          const r = function (t) {
              return t.orderTotal;
            }(t),
            o = parseFloat(r);
          isNaN(o) || (e.total = o);
          const i = function (t) {
            const e = tt(B, ut(",", t.productPurchasedId));
            return N($, e);
          }(t);
          return V(i) || (e.purchasedProductIds = i), e;
        }
        function Mr(t, e) {
          const n = {},
            r = d({}, gr(e), t.parameters || {}),
            o = d({}, function (t) {
              return ot((t, e, n) => {
                if (!mr(n)) return t;
                const r = n.substring("profile.".length);
                return F(r) || (t[r] = p(e) ? "" : e), t;
              }, {}, t);
            }(e), t.profileParameters || {}),
            i = d({}, _r(e), t.order || {}),
            c = d({}, function (t) {
              const e = {},
                n = function (t) {
                  return t.productId;
                }(t);
              p(n) || (e.id = n);
              const r = function (t) {
                return t.categoryId;
              }(t);
              return p(r) || (e.categoryId = r), e;
            }(e), t.product || {});
          return V(r) || (n.parameters = r), V(o) || (n.profileParameters = o), V(i) || (n.order = i), V(c) || (n.product = c), n;
        }
        function Pr(t, e, n = {}) {
          const r = Rt().globalMboxName,
            {
              index: o,
              name: i,
              address: c
            } = t,
            u = Mr(t, d({}, i === r ? e : n, lr(i)));
          return p(o) || (u.index = o), $(i) && (u.name = i), V(c) || (u.address = c), u;
        }
        function qr(t, e, n) {
          const {
              prefetch: r = {}
            } = t,
            o = {};
          if (V(r)) return o;
          const {
            mboxes: i
          } = r;
          p(i) || !h(i) || V(i) || (o.mboxes = tt(t => Pr(t, e, n), i));
          const {
            views: c
          } = r;
          return p(c) || !h(c) || V(c) || (o.views = tt(t => function (t, e) {
            const {
                name: n,
                address: r
              } = t,
              o = Mr(t, e);
            return $(n) && (o.name = n), V(r) || (o.address = r), o;
          }(t, e), c)), o;
        }
        function Dr(t, e) {
          if (ze() && !$e(window, "ANALYTICS")) return null;
          const n = Rt(),
            r = Kn(t),
            o = Xn("trackingServer"),
            i = Xn("trackingServerSecure"),
            {
              experienceCloud: c = {}
            } = e,
            {
              analytics: u = {}
            } = c,
            {
              logging: s,
              supplementalDataId: a,
              trackingServer: f,
              trackingServerSecure: l
            } = u,
            d = {};
          return p(s) ? d.logging = n.analyticsLogging : d.logging = s, p(a) || (d.supplementalDataId = a), $(r) && (d.supplementalDataId = r), p(f) || (d.trackingServer = f), $(o) && (d.trackingServer = o), p(l) || (d.trackingServerSecure = l), $(i) && (d.trackingServerSecure = i), V(d) ? null : d;
        }
        function Rr(t, e, n) {
          const r = function (t) {
              const e = Rt().globalMboxName;
              return d({}, t, lr(e));
            }(n),
            o = Ye(),
            i = r.mbox3rdPartyId;
          const c = $n(Gn()),
            u = Nr(t.id || {}, o, i, e, c),
            s = function (t, e) {
              if (!p(t) && $(t.token)) return t;
              const n = {},
                r = e.at_property;
              return $(r) && (n.token = r), n;
            }(t.property, r),
            a = Or(t.experienceCloud || {}, e),
            f = function (t) {
              if (!p(t) && $(t.authorizationToken)) return t;
              const e = {},
                n = cr();
              return $(n) && (e.authorizationToken = n), e;
            }(t.trace),
            l = Ir(t.preview),
            m = Ar(t.qaMode),
            g = function (t, e, n) {
              const {
                  execute: r = {}
                } = t,
                o = {};
              if (V(r)) return o;
              const {
                pageLoad: i
              } = r;
              p(i) || (o.pageLoad = Mr(i, e));
              const {
                mboxes: c
              } = r;
              if (!p(c) && h(c) && !V(c)) {
                const t = N(yr, tt(t => Pr(t, e, n), c));
                V(t) || (o.mboxes = t);
              }
              return o;
            }(t, r, n),
            v = qr(t, r, n),
            {
              notifications: y
            } = t,
            b = {};
          return b.requestId = st(), b.context = function (t) {
            if (!p(t) && "web" === t.channel) return t;
            const e = t || {},
              {
                beacon: n
              } = e;
            return {
              userAgent: window.navigator.userAgent,
              timeOffsetInMinutes: -new Date().getTimezoneOffset(),
              channel: "web",
              screen: Sr(),
              window: Er(),
              browser: Cr(),
              address: Tr(),
              geo: t && t.geo,
              beacon: n
            };
          }(t.context), V(u) || (b.id = u), V(s) || (b.property = s), V(f) || (b.trace = f), V(a) || (b.experienceCloud = a), V(l) || (b.preview = l), V(m) || (b.qaMode = m), V(g) || (b.execute = g), V(v) || (b.prefetch = v), V(y) || (b.notifications = y), b;
        }
        function Lr(t, e, n) {
          const r = n[0],
            o = n[1];
          return Rr(t, r, d({}, o, e));
        }
        function jr(t, e) {
          return wr().then(n => Lr(t, e, n));
        }
        function Vr(t, e) {
          return z(e) ? e < 0 ? t.timeout : e : t.timeout;
        }
        function Hr(t) {
          const e = t.serverDomain;
          if (!t.overrideMboxEdgeServer) return e;
          const n = function () {
            if (!Rt().overrideMboxEdgeServer) return "";
            const t = te("mboxEdgeCluster");
            return F(t) ? "" : t;
          }();
          return F(n) ? e : "mboxedge" + n + ".tt.omtrdc.net";
        }
        function Ur(t) {
          return t.scheme + "//" + Hr(t) + t.endpoint + "?" + Xt({
            client: t.clientCode,
            sessionId: Xe(),
            version: t.version
          });
        }
        function Br(t, e, n) {
          return ye("request", e), xe({
            request: e
          }), function (t, e) {
            const n = Rt();
            return vr({
              url: Ur(n),
              headers: {
                "Content-Type": ["text/plain"]
              },
              body: t,
              timeout: Vr(n, e),
              async: !0
            }).then(t => d(t, {
              decisioningMethod: lt
            }));
          }(e, n).then(t => (ye("response", t), xe({
            response: t
          }), {
            request: e,
            response: t
          }));
        }
        const Fr = t => e => e[t],
          $r = t => e => !t(e),
          zr = $r(p),
          Jr = $r(F),
          Zr = t => e => N(t, e),
          Gr = t => t.status === Ct,
          Kr = t => "actions" === t.type,
          Xr = t => "redirect" === t.type,
          Yr = Zr(zr),
          Wr = Zr(Jr),
          Qr = Fr("options"),
          to = Fr(yt),
          eo = Fr("eventToken"),
          no = Fr("responseTokens"),
          ro = t => $(t.name),
          oo = t => y(t) && ro(t),
          io = t => y(t) && ro(t) && (t => !p(t.index))(t),
          co = t => y(t) && ro(t),
          uo = Fr("data"),
          so = I([uo, zr]);
        function ao(t, e) {
          return {
            status: kt,
            type: t,
            data: e
          };
        }
        function fo(t, e) {
          return {
            status: Ct,
            type: t,
            data: e
          };
        }
        function lo(t) {
          return y(t);
        }
        function po(t) {
          return !!lo(t) && $(t.eventToken);
        }
        function ho(t) {
          return !V(t) && !F(t.type) && $(t.eventToken);
        }
        function mo(t) {
          return !!ho(t) && $(t.selector);
        }
        function go(t) {
          const {
            id: e
          } = t;
          return y(e) && $(e.tntId);
        }
        function vo(t) {
          const {
            response: e
          } = t;
          return go(e) && function (t) {
            const e = Rt();
            fe({
              name: "PC",
              value: t,
              expires: e.deviceIdLifetime,
              domain: e.cookieDomain,
              secure: e.secureOnly
            });
          }(e.id.tntId), t;
        }
        function yo(t) {
          const {
            response: e
          } = t;
          if (go(e)) {
            const {
                id: t
              } = e,
              {
                tntId: n
              } = t;
            Qe(n);
          }
          return Qe(null), t;
        }
        function bo(t = {}) {
          const {
            trace: e
          } = t;
          V(e) || function (t) {
            we(window, "serverTraces", t, pe());
          }(e);
        }
        function wo(t) {
          const {
              response: e
            } = t,
            {
              execute: n = {},
              prefetch: r = {},
              notifications: o = {}
            } = e,
            {
              pageLoad: i = {},
              mboxes: c = []
            } = n,
            {
              mboxes: u = [],
              views: s = []
            } = r;
          return bo(i), A(bo, c), A(bo, u), A(bo, s), A(bo, o), t;
        }
        function xo(t) {
          const e = t.queryKey,
            n = e.adobe_mc_sdid;
          if (!M(n)) return e;
          if (F(n)) return e;
          const r = Math.round(et() / 1e3);
          return e.adobe_mc_sdid = n.replace(/\|TS=\d+/, "|TS=" + r), e;
        }
        function So(t) {
          return t.queryKey;
        }
        function Eo(t, e, n) {
          const r = Qt(t),
            {
              protocol: o
            } = r,
            {
              host: i
            } = r,
            {
              path: c
            } = r,
            u = "" === r.port ? "" : ":" + r.port,
            s = F(r.anchor) ? "" : "#" + r.anchor,
            a = n(r),
            f = Xt(d({}, a, e));
          return o + "://" + i + u + c + (F(f) ? "" : "?" + f) + s;
        }
        function Co(t, e) {
          return Eo(t, e, xo);
        }
        function To(t) {
          const e = t.method || "GET",
            n = t.url || function (t) {
              throw new Error(t);
            }("URL is required"),
            r = t.headers || {},
            o = t.data || null,
            i = t.credentials || !1,
            c = t.timeout || 3e3,
            u = !!p(t.async) || !0 === t.async,
            s = {};
          return s.method = e, s.url = n, s.headers = r, s.data = o, s.credentials = i, s.timeout = c, s.async = u, s;
        }
        function ko(t, e) {
          const n = To(e),
            r = n.method,
            o = n.url,
            i = n.headers,
            c = n.data,
            u = n.credentials,
            s = n.timeout,
            a = n.async;
          return je((e, n) => {
            let f = new t.XMLHttpRequest();
            f = function (t, e, n) {
              return t.onload = () => {
                const r = 1223 === t.status ? 204 : t.status;
                if (r < 100 || r > 599) return void n(new Error("Network request failed"));
                const o = t.responseText,
                  i = t.getAllResponseHeaders();
                e({
                  status: r,
                  headers: i,
                  response: o
                });
              }, t;
            }(f, e, n), f = function (t, e) {
              return t.onerror = () => {
                e(new Error("Network request failed"));
              }, t;
            }(f, n), f.open(r, o, a), f = function (t, e) {
              return !0 === e && (t.withCredentials = e), t;
            }(f, u), f = function (t, e) {
              return A((e, n) => {
                A(e => t.setRequestHeader(n, e), e);
              }, e), t;
            }(f, i), a && (f = function (t, e, n) {
              return t.timeout = e, t.ontimeout = () => {
                n(new Error("Request timed out"));
              }, t;
            }(f, s, n)), f.send(c);
          });
        }
        function No(t) {
          return ko(window, t);
        }
        function Oo(t, e, n) {
          const r = {
            method: "GET"
          };
          return r.url = function (t, e) {
            return Eo(t, e, So);
          }(t, e), r.timeout = n, r;
        }
        function Io(t) {
          const {
            status: e
          } = t;
          if (!function (t) {
            return t >= 200 && t < 300 || 304 === t;
          }(e)) return null;
          const n = t.response;
          if (F(n)) return null;
          const r = {
            type: "html"
          };
          return r.content = n, r;
        }
        const Ao = /CLKTRK#(\S+)/,
          _o = /CLKTRK#(\S+)\s/;
        function Mo(t) {
          const e = t[yt],
            n = function (t) {
              const e = t[bt];
              if (F(e)) return "";
              const n = Ao.exec(e);
              return V(n) || 2 !== n.length ? "" : n[1];
            }(t);
          if (F(n) || F(e)) return t;
          const r = t[bt];
          return t[bt] = r.replace(_o, ""), t[yt] = function (t, e) {
            const n = document.createElement("div");
            n.innerHTML = e;
            const r = n.firstElementChild;
            return p(r) ? e : (r.id = t, r.outerHTML);
          }(n, e), t;
        }
        const Po = t => !p(t);
        function qo(t) {
          const {
            selector: e
          } = t;
          return !p(e);
        }
        function Do(t) {
          const e = t[vt];
          if (F(e)) return null;
          switch (e) {
            case "setHtml":
              return function (t) {
                if (!qo(t)) return null;
                const e = Mo(t);
                return M(e[yt]) ? e : (ye(Et, e), null);
              }(t);
            case "setText":
              return function (t) {
                if (!qo(t)) return null;
                const e = Mo(t);
                return M(e[yt]) ? e : (ye(Et, e), null);
              }(t);
            case "appendHtml":
              return function (t) {
                if (!qo(t)) return null;
                const e = Mo(t);
                return M(e[yt]) ? e : (ye(Et, e), null);
              }(t);
            case "prependHtml":
              return function (t) {
                if (!qo(t)) return null;
                const e = Mo(t);
                return M(e[yt]) ? e : (ye(Et, e), null);
              }(t);
            case "replaceHtml":
              return function (t) {
                if (!qo(t)) return null;
                const e = Mo(t);
                return M(e[yt]) ? e : (ye(Et, e), null);
              }(t);
            case "insertBefore":
              return function (t) {
                if (!qo(t)) return null;
                const e = Mo(t);
                return M(e[yt]) ? e : (ye(Et, e), null);
              }(t);
            case "insertAfter":
              return function (t) {
                if (!qo(t)) return null;
                const e = Mo(t);
                return M(e[yt]) ? e : (ye(Et, e), null);
              }(t);
            case "customCode":
              return function (t) {
                return qo(t) ? M(t[yt]) ? t : (ye(Et, t), null) : null;
              }(t);
            case "setAttribute":
              return function (t) {
                return qo(t) ? y(t[yt]) ? t : (ye("Action has no attributes", t), null) : null;
              }(t);
            case "setImageSource":
              return function (t) {
                return qo(t) ? M(t[yt]) ? t : (ye("Action has no image url", t), null) : null;
              }(t);
            case "setStyle":
              return function (t) {
                return qo(t) ? y(t[yt]) ? t : (ye("Action has no CSS properties", t), null) : null;
              }(t);
            case "resize":
              return function (t) {
                return qo(t) ? y(t[yt]) ? t : (ye("Action has no height or width", t), null) : null;
              }(t);
            case "move":
              return function (t) {
                return qo(t) ? y(t[yt]) ? t : (ye("Action has no left, top or position", t), null) : null;
              }(t);
            case "remove":
              return function (t) {
                return qo(t) ? t : null;
              }(t);
            case "rearrange":
              return function (t) {
                return qo(t) ? y(t[yt]) ? t : (ye("Action has no from or to", t), null) : null;
              }(t);
            case "redirect":
              return function (t) {
                const {
                  content: e
                } = t;
                return F(e) ? (ye("Action has no url", t), null) : (t.content = Co(e, {}), t);
              }(t);
            default:
              return null;
          }
        }
        function Ro(t = {}) {
          const {
            options: e
          } = t;
          return h(e) ? V(e) ? [] : Yr(tt(no, e)) : [];
        }
        function Lo(t = {}) {
          const {
              execute: e = {}
            } = t,
            {
              pageLoad: n = {},
              mboxes: r = []
            } = e,
            o = Qr(n) || [],
            i = O(Yr(tt(Qr, r))),
            c = O([o, i]),
            u = O(tt(to, N(Kr, c))),
            s = N(Xr, c),
            a = N(Xr, u),
            f = s.concat(a),
            l = {};
          if (V(f)) return l;
          const d = f[0].content;
          return F(d) || (l.url = d), l;
        }
        function jo(t = {}) {
          const {
            analytics: e
          } = t;
          return V(e) ? [] : [e];
        }
        function Vo(t, e) {
          t.parameters = e.parameters, t.profileParameters = e.profileParameters, t.order = e.order, t.product = e.product;
        }
        function Ho(t, e) {
          const n = e[0],
            r = e[1],
            o = !V(n),
            i = !V(r);
          return o || i ? (o && (t.options = n), i && (t.metrics = r), t) : t;
        }
        function Uo(t) {
          const {
            type: e
          } = t;
          switch (e) {
            case "redirect":
              return Ve(function (t) {
                const e = t.content;
                if (F(e)) return ye("Action has no url", t), null;
                const n = d({}, t);
                return n.content = Co(e, {}), n;
              }(t));
            case "dynamic":
              return function (t) {
                const {
                  content: e
                } = t;
                return No(Oo(e, {}, Rt().timeout)).then(Io)['catch'](() => null);
              }(t);
            case "actions":
              return Ve(function (t) {
                const e = t[yt];
                if (!h(e)) return null;
                if (V(e)) return null;
                const n = N(Po, tt(Do, e));
                if (V(n)) return null;
                const r = d({}, t);
                return r.content = n, r;
              }(t));
            default:
              return Ve(t);
          }
        }
        function Bo(t, e) {
          if (!h(t)) return Ve([]);
          if (V(t)) return Ve([]);
          const n = N(e, t);
          if (V(n)) return Ve([]);
          return Ue(tt(t => Uo(t), n)).then(Yr);
        }
        function Fo(t, e) {
          return h(t) ? V(t) ? Ve([]) : Ve(N(e, t)) : Ve([]);
        }
        function $o(t) {
          const {
              name: e,
              analytics: n,
              options: r,
              metrics: o
            } = t,
            i = {
              name: e,
              analytics: n
            };
          return Ue([Bo(r, lo), Fo(o, ho)]).then(t => Ho(i, t));
        }
        function zo(t, e) {
          const {
              index: n,
              name: r,
              state: o,
              analytics: i,
              options: c,
              metrics: u
            } = e,
            s = function (t, e, n) {
              const {
                  prefetch: r = {}
                } = t,
                {
                  mboxes: o = []
                } = r;
              return V(o) ? null : (i = N(t => function (t, e, n) {
                return t.index === e && t.name === n;
              }(t, e, n), o)) && i.length ? i[0] : void 0;
              var i;
            }(t, n, r),
            a = {
              name: r,
              state: o,
              analytics: i
            };
          return p(s) || Vo(a, s), Ue([Bo(c, po), Fo(u, ho)]).then(t => Ho(a, t));
        }
        function Jo(t, e) {
          const {
              name: n,
              state: r,
              analytics: o,
              options: i,
              metrics: c
            } = e,
            u = function (t) {
              const {
                  prefetch: e = {}
                } = t,
                {
                  views: n = []
                } = e;
              return V(n) ? null : n[0];
            }(t),
            s = {
              name: n.toLowerCase(),
              state: r,
              analytics: o
            };
          return p(u) || Vo(s, u), Ue([Bo(i, po), Fo(c, mo)]).then(t => Ho(s, t));
        }
        function Zo(t) {
          if (p(t) || F(t.id)) return Ve(null);
          const {
            id: e
          } = t;
          return Ve({
            id: e
          });
        }
        function Go(t) {
          const e = t[0],
            n = t[1],
            r = t[2],
            o = t[3],
            i = t[4],
            c = t[5],
            u = t[6],
            s = {},
            a = {};
          y(e) && (a.pageLoad = e), V(n) || (a.mboxes = n);
          const f = {};
          return V(r) || (f.mboxes = r), V(o) || (f.views = o), V(i) || (f.metrics = i), V(a) || (s.execute = a), V(f) || (s.prefetch = f), V(c) || (s.meta = c), V(u) || (s.notifications = u), s;
        }
        function Ko(t) {
          const e = I([wo, vo, yo])(t),
            n = function (t) {
              const {
                  response: e
                } = t,
                {
                  execute: n
                } = e;
              if (!y(n)) return Ve(null);
              const {
                pageLoad: r
              } = n;
              if (!y(r)) return Ve(null);
              const {
                  analytics: o,
                  options: i,
                  metrics: c
                } = r,
                u = {
                  analytics: o
                };
              return Ue([Bo(i, lo), Fo(c, mo)]).then(t => Ho(u, t));
            }(e),
            r = function (t) {
              const {
                  response: e
                } = t,
                {
                  execute: n
                } = e;
              if (!y(n)) return Ve([]);
              const {
                mboxes: r
              } = n;
              return !h(r) || V(r) ? Ve([]) : Ue(tt($o, N(oo, r))).then(Yr);
            }(e),
            o = function (t) {
              const {
                  request: e,
                  response: n
                } = t,
                {
                  prefetch: r
                } = n;
              if (!y(r)) return Ve([]);
              const {
                mboxes: o
              } = r;
              return !h(o) || V(o) ? Ve([]) : Ue(tt(t => zo(e, t), N(io, o))).then(Yr);
            }(e),
            i = function (t) {
              const {
                  request: e,
                  response: n
                } = t,
                {
                  prefetch: r
                } = n;
              if (!y(r)) return Ve([]);
              const {
                views: o
              } = r;
              return !h(o) || V(o) ? Ve([]) : Ue(tt(t => Jo(e, t), N(co, o))).then(Yr);
            }(e),
            c = function (t) {
              const {
                  response: e
                } = t,
                {
                  prefetch: n
                } = e;
              if (!y(n)) return Ve([]);
              const {
                metrics: r
              } = n;
              return Fo(r, mo);
            }(e),
            u = function (t) {
              const {
                  response: e
                } = t,
                {
                  remoteMboxes: n,
                  remoteViews: r,
                  decisioningMethod: o
                } = e,
                i = {};
              return y(n) && (i.remoteMboxes = n), y(r) && (i.remoteViews = r), M(o) && (i.decisioningMethod = o), Ve(i);
            }(e),
            s = function (t) {
              const {
                  response: e
                } = t,
                {
                  notifications: n
                } = e;
              return h(n) ? Ue(tt(Zo, n)).then(Yr) : Ve([]);
            }(e);
          return Ue([n, r, o, i, c, u, s]).then(Go);
        }
        function Xo(t) {
          return !V(Lo(t));
        }
        function Yo(t) {
          const e = function (t = {}) {
              const {
                  execute: e = {},
                  prefetch: n = {}
                } = t,
                {
                  pageLoad: r = {},
                  mboxes: o = []
                } = e,
                {
                  mboxes: i = [],
                  views: c = []
                } = n,
                u = Ro(r),
                s = O(tt(Ro, o)),
                a = O(tt(Ro, i)),
                f = O(tt(Ro, c));
              return O([u, s, a, f]);
            }(t),
            n = {};
          return V(e) || (n.responseTokens = e), n;
        }
        function Wo(t) {
          const e = Yo(t),
            n = function (t = {}) {
              const {
                  execute: e = {},
                  prefetch: n = {}
                } = t,
                {
                  pageLoad: r = {},
                  mboxes: o = []
                } = e,
                {
                  mboxes: i = [],
                  views: c = [],
                  metrics: u = []
                } = n,
                s = jo(r),
                a = O(tt(jo, o)),
                f = O(tt(jo, i)),
                l = O(tt(jo, c)),
                d = O(tt(jo, u));
              return O([s, a, f, l, d]);
            }(t);
          return V(n) || (e.analyticsDetails = n), ye("request succeeded", t), rn(e, Xo(t)), Ve(t);
        }
        function Qo(t) {
          const e = Rt().globalMboxName,
            {
              mbox: n,
              timeout: r
            } = t,
            o = y(t.params) ? t.params : {},
            i = {},
            c = {};
          n === e ? c.pageLoad = {} : c.mboxes = [{
            index: 0,
            name: n
          }], i.execute = c;
          const u = Dr(n, i);
          if (!V(u)) {
            const t = {};
            t.analytics = u, i.experienceCloud = t;
          }
          return nn({
            mbox: n
          }), jr(i, o).then(t => Br(0, t, r)).then(Ko).then(t => function (t, e) {
            const n = Yo(e);
            return n.mbox = t, ye("request succeeded", e), rn(n, Xo(e)), Ve(e);
          }(n, t))['catch'](t => function (t, e) {
            return ve("request failed", e), on({
              mbox: t,
              error: e
            }), He(e);
          }(n, t));
        }
        function ti(t) {
          const e = Rt().globalMboxName,
            {
              consumerId: n = e,
              request: r,
              timeout: o
            } = t,
            i = Dr(n, r);
          if (!V(i)) {
            const t = r.experienceCloud || {};
            t.analytics = i, r.experienceCloud = t;
          }
          return nn({}), jr(r, {}).then(t => Br(0, t, o)).then(Ko).then(t => Wo(t))['catch'](t => function (t) {
            return ve("request failed", t), on({
              error: t
            }), He(t);
          }(t));
        }
        function ei(t, e) {
          return gn(e).addClass(t);
        }
        function ni(t, e) {
          return gn(e).css(t);
        }
        function ri(t, e) {
          return gn(e).attr(t);
        }
        function oi(t, e, n) {
          return gn(n).attr(t, e);
        }
        function ii(t, e) {
          return gn(e).removeAttr(t);
        }
        function ci(t, e, n) {
          const r = ri(t, n);
          $(r) && (ii(t, n), oi(e, r, n));
        }
        function ui(t) {
          return new Error("Could not find: " + t);
        }
        function si(t, e = Rt().selectorsPollingTimeout, n = gn) {
          const r = n(t);
          return V(r) ? De() ? function (t, e, n) {
            return je((r, o) => {
              const i = Re(() => {
                const e = n(t);
                V(e) || (i.disconnect(), r(e));
              });
              at(() => {
                i.disconnect(), o(ui(t));
              }, e), i.observe(document, {
                childList: !0,
                subtree: !0
              });
            });
          }(t, e, n) : "visible" === document.visibilityState ? function (t, e, n) {
            return je((r, o) => {
              !function e() {
                const o = n(t);
                V(o) ? window.requestAnimationFrame(e) : r(o);
              }(), at(() => {
                o(ui(t));
              }, e);
            });
          }(t, e, n) : function (t, e, n) {
            return je((r, o) => {
              !function e() {
                const o = n(t);
                V(o) ? at(e, 100) : r(o);
              }(), at(() => {
                o(ui(t));
              }, e);
            });
          }(t, e, n) : Ve(r);
        }
        function ai(t) {
          return ri("data-at-src", t);
        }
        function fi(t) {
          return $(ri("data-at-src", t));
        }
        function li(t) {
          return A(t => ci(wt, "data-at-src", t), R(wn("img", t))), t;
        }
        function di(t) {
          return A(t => ci("data-at-src", wt, t), R(wn("img", t))), t;
        }
        function pi(t) {
          return ye("Loading image", t), ri(wt, oi(wt, t, Pe("<img/>")));
        }
        function hi(t) {
          const e = N(fi, R(wn("img", t)));
          return V(e) || A(pi, tt(ai, e)), t;
        }
        function mi(t) {
          const e = ri(wt, t);
          return $(e) ? e : null;
        }
        function gi(t, e) {
          return ve("Unexpected error", e), xe({
            action: t,
            error: e
          }), t;
        }
        function vi(t, e) {
          const n = gn(e[bt]),
            r = function (t) {
              return I([li, hi, di])(t);
            }(yn(e[yt])),
            o = function (t) {
              return N($, tt(mi, R(wn("script", t))));
            }(r);
          let i;
          try {
            i = Ve(t(n, r));
          } catch (t) {
            return He(gi(e, t));
          }
          return V(o) ? i.then(() => e)['catch'](t => gi(e, t)) : i.then(() => function (t) {
            return ot((t, e) => t.then(() => (ye("Script load", e), xe({
              remoteScript: e
            }), ln(e))), Ve(), t);
          }(o)).then(() => e)['catch'](t => gi(e, t));
        }
        function yi(t) {
          const e = d({}, t),
            n = e[yt];
          if (F(n)) return e;
          const r = gn(e[bt]);
          return o = "head", gn(r).is(o) ? (e[vt] = "appendHtml", e[yt] = function (t) {
            return W("", ot((t, e) => (t.push(qn(yn(e))), t), [], R(wn("script,link,style", yn(t)))));
          }(n), e) : e;
          var o;
        }
        function bi(t) {
          return t.indexOf("px") === t.length - 2 ? t : t + "px";
        }
        function wi(t, e) {
          return n = qn(e), gn(t).html(n);
          var n;
        }
        function xi(t) {
          const e = gn(t[bt]),
            n = t[yt];
          return ye("Rendering action", t), xe({
            action: t
          }), function (t, e) {
            gn(e).text(t);
          }(n, e), Ve(t);
        }
        function Si(t, e) {
          return Pn(qn(e), t);
        }
        function Ei(t, e) {
          return n = qn(e), gn(t).prepend(n);
          var n;
        }
        function Ci(t, e) {
          const n = bn(t);
          return An(Mn(qn(e), t)), n;
        }
        function Ti(t, e) {
          return gn(Mn(qn(e), t)).prev();
        }
        function ki(t, e) {
          return gn(_n(qn(e), t)).next();
        }
        function Ni(t, e) {
          return bn(Mn(qn(e), t));
        }
        function Oi(t) {
          const e = gn(t[bt]),
            n = t[yt],
            r = n.priority;
          return ye("Rendering action", t), xe({
            action: t
          }), F(r) ? ni(n, e) : function (t, e, n) {
            A(t => {
              A((e, r) => t.style.setProperty(r, e, n), e);
            }, R(t));
          }(e, n, r), Ve(t);
        }
        function Ii(t) {
          const e = gn(t[bt]),
            n = t[yt],
            r = Number(n.from),
            o = Number(n.to);
          if (isNaN(r) && isNaN(o)) return ye('Rearrange has incorrect "from" and "to" indexes', t), He(t);
          const i = R(gn(e).children());
          const c = i[r],
            u = i[o];
          return vn(c) && vn(u) ? (ye("Rendering action", t), xe({
            action: t
          }), r < o ? _n(c, u) : Mn(c, u), Ve(t)) : (ye("Rearrange elements are missing", t), He(t));
        }
        function Ai(t) {
          const e = yi(t);
          switch (e[vt]) {
            case "setHtml":
              return function (t) {
                return ye("Rendering action", t), vi(wi, t);
              }(e);
            case "setText":
              return xi(e);
            case "appendHtml":
              return function (t) {
                return ye("Rendering action", t), vi(Si, t);
              }(e);
            case "prependHtml":
              return function (t) {
                return ye("Rendering action", t), vi(Ei, t);
              }(e);
            case "replaceHtml":
              return function (t) {
                return ye("Rendering action", t), vi(Ci, t);
              }(e);
            case "insertBefore":
              return function (t) {
                return ye("Rendering action", t), vi(Ti, t);
              }(e);
            case "insertAfter":
              return function (t) {
                return ye("Rendering action", t), vi(ki, t);
              }(e);
            case "customCode":
              return function (t) {
                return ye("Rendering action", t), vi(Ni, t);
              }(e);
            case "setAttribute":
              return function (t) {
                const e = t[yt],
                  n = gn(t[bt]);
                return ye("Rendering action", t), xe({
                  action: t
                }), A((t, e) => oi(e, t, n), e), Ve(t);
              }(e);
            case "setImageSource":
              return function (t) {
                const e = t[yt],
                  n = gn(t[bt]);
                return ye("Rendering action", t), xe({
                  action: t
                }), ii(wt, n), oi(wt, pi(e), n), Ve(t);
              }(e);
            case "setStyle":
              return Oi(e);
            case "resize":
              return function (t) {
                const e = gn(t[bt]),
                  n = t[yt];
                return n.width = bi(n.width), n.height = bi(n.height), ye("Rendering action", t), xe({
                  action: t
                }), ni(n, e), Ve(t);
              }(e);
            case "move":
              return function (t) {
                const e = gn(t[bt]),
                  n = t[yt];
                return n.left = bi(n.left), n.top = bi(n.top), ye("Rendering action", t), xe({
                  action: t
                }), ni(n, e), Ve(t);
              }(e);
            case "remove":
              return function (t) {
                const e = gn(t[bt]);
                return ye("Rendering action", t), xe({
                  action: t
                }), An(e), Ve(t);
              }(e);
            case "rearrange":
              return Ii(e);
            default:
              return Ve(e);
          }
        }
        function _i(t) {
          const e = t[bt];
          return $(e) || dn(e);
        }
        function Mi(t) {
          const e = t.cssSelector;
          F(e) || An("#at-" + P(e));
        }
        function Pi(t) {
          if (!_i(t)) return void Mi(t);
          const e = t[bt];
          !function (t) {
            return "trackClick" === t[vt] || "signalClick" === t[vt];
          }(t) ? (ei("at-element-marker", e), Mi(t)) : ei("at-element-click-tracking", e);
        }
        function qi(t) {
          return function (t) {
            const {
              key: e
            } = t;
            if (F(e)) return !0;
            if ("customCode" === t[vt]) return t.page;
            const n = ri("at-action-key", t[bt]);
            return n !== e || n === e && !t.page;
          }(t) ? Ai(t).then(() => (ye("Action rendered successfully", t), xe({
            action: t
          }), function (t) {
            const {
              key: e
            } = t;
            if (F(e)) return;
            if (!_i(t)) return;
            oi("at-action-key", e, t[bt]);
          }(t), Pi(t), t))['catch'](e => {
            ve("Unexpected error", e), xe({
              action: t,
              error: e
            }), Pi(t);
            const n = d({}, t);
            return n[Ct] = !0, n;
          }) : (Pi(t), t);
        }
        function Di(t) {
          const e = N(t => !0 === t[Ct], t);
          return V(e) ? Ve() : (function (t) {
            A(Pi, t);
          }(e), He(t));
        }
        function Ri(t) {
          return function (t) {
            return si(t[bt]).then(() => t)['catch'](() => {
              const e = d({}, t);
              return e[Ct] = !0, e;
            });
          }(t).then(qi);
        }
        function Li(t, e, n) {
          return gn(n).on(t, e);
        }
        function ji(t) {
          return si(t[bt]).then(() => {
            xe({
              metric: t
            });
            return d({
              found: !0
            }, t);
          })['catch'](() => (ve("metric element not found", t), xe({
            metric: t,
            message: "metric element not found"
          }), t));
        }
        function Vi(t) {
          const e = t.name,
            n = Qn("views") || {};
          n[e] = t, Wn("views", n);
        }
        function Hi(t, e = {}) {
          const {
              page: n = !0
            } = e,
            r = (Qn("views") || {})[t];
          if (p(r)) return r;
          const {
            impressionId: o
          } = e;
          return p(o) ? r : d({
            page: n,
            impressionId: o
          }, r);
        }
        function Ui(t) {
          const e = Dr(t, {}),
            n = {
              context: {
                beacon: !0
              }
            };
          if (!V(e)) {
            const t = {};
            t.analytics = e, n.experienceCloud = t;
          }
          return n;
        }
        function Bi(t, e, n) {
          const r = function (t, e) {
            return Lr(t, e, xr());
          }(Ui(t), e);
          return r.notifications = n, r;
        }
        function Fi(t, e, n) {
          const r = st(),
            o = et(),
            {
              parameters: i,
              profileParameters: c,
              order: u,
              product: s
            } = t,
            a = {
              id: r,
              type: e,
              timestamp: o,
              parameters: i,
              profileParameters: c,
              order: u,
              product: s
            };
          return V(n) || (a.tokens = n), a;
        }
        function $i(t) {
          const e = Ur(Rt());
          return function (t, e) {
            return "navigator" in (n = window) && "sendBeacon" in n.navigator ? function (t, e, n) {
              return t.navigator.sendBeacon(e, n);
            }(window, t, e) : function (t, e, n) {
              const r = {
                  "Content-Type": ["text/plain"]
                },
                o = {
                  method: "POST"
                };
              o.url = e, o.data = n, o.credentials = !0, o.async = !1, o.headers = r;
              try {
                t(o);
              } catch (t) {
                return !1;
              }
              return !0;
            }(No, t, e);
            var n;
          }(e, JSON.stringify(t)) ? (ye("Beacon data sent", e, t), !0) : (ve("Beacon data sent failed", e, t), !1);
        }
        function zi(t, e, n) {
          const r = lr(Rt().globalMboxName),
            o = Fi(Mr({}, r), e, [n]),
            i = Bi(st(), r, [o]);
          ye("Event handler notification", t, o), xe({
            source: t,
            event: e,
            request: i
          }), $i(i);
        }
        function Ji(t, e, n) {
          const r = lr(t),
            o = Fi(Mr({}, r), e, [n]);
          o.mbox = {
            name: t
          };
          const i = Bi(st(), r, [o]);
          ye("Mbox event handler notification", t, o), xe({
            mbox: t,
            event: e,
            request: i
          }), $i(i);
        }
        function Zi(t) {
          const e = Rt().globalMboxName,
            n = [],
            r = Ot;
          if (A(t => {
            const {
              mbox: e,
              data: o
            } = t;
            if (p(o)) return;
            const {
              eventTokens: i = []
            } = o;
            V(i) || n.push(function (t, e, n) {
              const {
                  name: r,
                  state: o
                } = t,
                i = Fi(t, e, n);
              return i.mbox = {
                name: r,
                state: o
              }, i;
            }(e, r, i));
          }, t), V(n)) return;
          const o = Bi(e, {}, n);
          ye("Mboxes rendered notification", n), xe({
            source: "prefetchMboxes",
            event: "rendered",
            request: o
          }), $i(o);
        }
        function Gi(t, e, n) {
          const r = lr(Rt().globalMboxName),
            o = Fi(Mr({}, r), e, [n]);
          o.view = {
            name: t
          };
          const i = Bi(st(), r, [o]);
          ye("View event handler notification", t, o), xe({
            view: t,
            event: e,
            request: i
          }), $i(i);
        }
        function Ki(t) {
          const {
              viewName: e,
              impressionId: n
            } = t,
            r = lr(Rt().globalMboxName),
            o = Fi(Mr({}, r), Ot, []);
          o.view = {
            name: e
          }, ye("View triggered notification", e), function (t, e, n) {
            return jr(Ui(t), e).then(t => (t.notifications = n, t));
          }(e, r, [o]).then(t => {
            t.impressionId = n, xe({
              view: e,
              event: "triggered",
              request: t
            }), $i(t);
          });
        }
        function Xi(t) {
          if (p(t)) return;
          const {
              view: e,
              data: n = {}
            } = t,
            {
              eventTokens: r = []
            } = n,
            {
              name: o,
              impressionId: i
            } = e,
            c = Hi(o);
          if (p(c)) return;
          const u = Bi(o, {}, [function (t, e, n) {
            const {
                name: r,
                state: o
              } = t,
              i = Fi(t, e, n);
            return i.view = {
              name: r,
              state: o
            }, i;
          }(c, Ot, r)]);
          u.impressionId = i, ye("View rendered notification", o, r), xe({
            view: o,
            event: "rendered",
            request: u
          }), $i(u);
        }
        const Yi = {},
          Wi = Fr("metrics"),
          Qi = t => fo("metric", t);
        function tc(t, e, n) {
          if (!p(Yi[t])) return;
          const r = S(Yi);
          V(r) || A(t => {
            A(r => {
              const o = Yi[t][r];
              !function (t, e, n) {
                gn(n).off(t, e);
              }(e, o, n);
            }, S(Yi[t])), delete Yi[t];
          }, r);
        }
        function ec(t, e, n, r) {
          const {
              type: o,
              selector: i,
              eventToken: c
            } = n,
            u = P(o + ":" + i + ":" + c),
            s = () => r(t, o, c);
          !function (t, e) {
            "click" === t && ei("at-element-click-tracking", e);
          }(o, i), e ? function (t, e) {
            return !p(Yi[t]) && !p(Yi[t][e]);
          }(t, u) || (tc(t, o, i), function (t, e, n) {
            Yi[t] = Yi[t] || {}, Yi[t][e] = n;
          }(t, u, s), Li(o, s, i)) : Li(o, s, i);
        }
        function nc(t, e, n, r) {
          return Ue(tt(ji, n)).then(n => (A(n => ec(t, e, n, r), N(t => t.found, n)), ao("metric")))['catch'](Qi);
        }
        function rc(t) {
          const {
            name: e
          } = t;
          return nc(e, !1, Wi(t), Ji);
        }
        function oc(t) {
          const {
            name: e
          } = t;
          return nc(e, !0, Wi(t), Gi);
        }
        function ic(t) {
          return nc("pageLoadMetrics", !1, Wi(t), zi);
        }
        function cc(t) {
          return nc("prefetchMetrics", !1, Wi(t), zi);
        }
        const uc = Fr(yt),
          sc = Fr("cssSelector"),
          ac = t => fo("render", t),
          fc = t => $r(Gr)(t) && so(t);
        function lc(t) {
          const e = tt(sc, t);
          var n;
          n = Wr(e), Rn(Rt(), n);
        }
        function dc(t) {
          const e = tt(sc, t);
          var n;
          n = Yr(e), Ln(Rt(), n);
        }
        function pc(t) {
          const e = N(Kr, Qr(t));
          return O(tt(uc, e));
        }
        function hc(t) {
          return y(t) && "setJson" !== t.type;
        }
        function mc(t, e, n) {
          const {
            eventToken: r,
            responseTokens: o,
            content: i
          } = t;
          return function (t) {
            return Ue(tt(Ri, t)).then(Di);
          }(function (t, e, n) {
            return tt(t => d({
              key: e,
              page: n
            }, t), N(hc, t));
          }(i, e, n)).then(() => ao("render", {
            eventToken: r,
            responseTokens: o
          }))['catch'](ac);
        }
        function gc(t) {
          return y(t) && "json" !== t.type;
        }
        function vc(t, e) {
          return tt(t, N(gc, Qr(e)));
        }
        function yc(t, e, n) {
          const r = {
              status: kt,
              [t]: e
            },
            o = tt(uo, N(Gr, n)),
            i = {};
          return V(o) || (r.status = Ct, i.errors = o), V(i) || (r.data = i), r;
        }
        function bc(t, e, n) {
          return Ue(vc(t => mc(t, !0), t)).then(e).then(e => (n(t), e));
        }
        function wc(t, e, n, r) {
          const {
            name: o
          } = e;
          return Ue(vc(t => mc(t, o, n), e)).then(n => function (t, e, n) {
            const r = {
                status: kt,
                [t]: e
              },
              o = tt(uo, N(Gr, n)),
              i = tt(uo, N(fc, n)),
              c = Yr(tt(eo, i)),
              u = Yr(tt(no, i)),
              s = {};
            return V(o) || (r.status = Ct, s.errors = o), V(c) || (s.eventTokens = c), V(u) || (s.responseTokens = u), V(s) || (r.data = s), r;
          }(t, e, n)).then(t => (r(e), t));
        }
        function xc(t) {
          return bc(t, e => yc("mbox", t, e), rc);
        }
        function Sc(t) {
          return wc("mbox", t, !0, rc);
        }
        function Ec(t, e = !1) {
          if (e) return;
          const {
              execute: n = {}
            } = t,
            {
              pageLoad: r = {}
            } = n;
          V(r) || lc(pc(r));
        }
        function Cc(t) {
          lc(pc(t)), vn("#at-views") && An("#at-views");
        }
        function Tc() {}
        Tc.prototype = {
          on: function (t, e, n) {
            var r = this.e || (this.e = {});
            return (r[t] || (r[t] = [])).push({
              fn: e,
              ctx: n
            }), this;
          },
          once: function (t, e, n) {
            var r = this;
            function o() {
              r.off(t, o), e.apply(n, arguments);
            }
            return o._ = e, this.on(t, o, n);
          },
          emit: function (t) {
            for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, e);
            return this;
          },
          off: function (t, e) {
            var n = this.e || (this.e = {}),
              r = n[t],
              o = [];
            if (r && e) for (var i = 0, c = r.length; i < c; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
            return o.length ? n[t] = o : delete n[t], this;
          }
        };
        var kc = Tc,
          Nc = Tc;
        kc.TinyEmitter = Nc;
        const Oc = new kc();
        function Ic(t, e) {
          !function (t, e, n) {
            t.emit(e, n);
          }(Oc, t, e);
        }
        function Ac(t, e) {
          !function (t, e, n) {
            t.on(e, n);
          }(Oc, t, e);
        }
        function _c(t) {
          return {
            type: "redirect",
            content: t.url
          };
        }
        function Mc(t) {
          const e = {};
          if (V(t)) return e;
          const n = [],
            r = [],
            o = [];
          A(t => {
            switch (t.action) {
              case "setContent":
                $((e = t).selector) && $(e.cssSelector) ? o.push(function (t) {
                  const e = {
                    type: "setHtml"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t)) : n.push({
                  type: "html",
                  content: t.content
                });
                break;
              case "setJson":
                V(t.content) || A(t => n.push({
                  type: "json",
                  content: t
                }), t.content);
                break;
              case "setText":
                o.push(function (t) {
                  const e = {
                    type: "setText"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "appendContent":
                o.push(function (t) {
                  const e = {
                    type: "appendHtml"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "prependContent":
                o.push(function (t) {
                  const e = {
                    type: "prependHtml"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "replaceContent":
                o.push(function (t) {
                  const e = {
                    type: "replaceHtml"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "insertBefore":
                o.push(function (t) {
                  const e = {
                    type: "insertBefore"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "insertAfter":
                o.push(function (t) {
                  const e = {
                    type: "insertAfter"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "customCode":
                o.push(function (t) {
                  const e = {
                    type: "customCode"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "setAttribute":
                o.push(function (t) {
                  const e = {};
                  if (e.selector = t.selector, e.cssSelector = t.cssSelector, t.attribute === wt) return e.type = "setImageSource", e.content = t.value, e;
                  e.type = "setAttribute";
                  const n = {};
                  return n[t.attribute] = t.value, e.content = n, e;
                }(t));
                break;
              case "setStyle":
                o.push(function (t) {
                  const {
                      style: e = {}
                    } = t,
                    n = {};
                  return n.selector = t.selector, n.cssSelector = t.cssSelector, p(e.left) || p(e.top) ? p(e.width) || p(e.height) ? (n.type = "setStyle", n.content = e, n) : (n.type = "resize", n.content = e, n) : (n.type = "move", n.content = e, n);
                }(t));
                break;
              case "remove":
                o.push(function (t) {
                  const e = {
                    type: "remove"
                  };
                  return e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "rearrange":
                o.push(function (t) {
                  const e = {};
                  e.from = t.from, e.to = t.to;
                  const n = {
                    type: "rearrange"
                  };
                  return n.selector = t.selector, n.cssSelector = t.cssSelector, n.content = e, n;
                }(t));
                break;
              case "redirect":
                n.push(_c(t));
                break;
              case "trackClick":
                r.push({
                  type: "click",
                  selector: t.selector,
                  eventToken: t.clickTrackId
                });
            }
            var e;
          }, t);
          const i = {};
          !V(o) && n.push({
            type: "actions",
            content: o
          });
          !V(n) && (i.options = n);
          if (!V(r) && (i.metrics = r), V(i)) return e;
          const c = {};
          return c.pageLoad = i, e.execute = c, e;
        }
        function Pc(t, e, n) {
          return n ? Mc(e) : function (t, e) {
            const n = {};
            if (V(e)) return n;
            const r = [],
              o = [];
            A(t => {
              switch (t.action) {
                case "setContent":
                  r.push({
                    type: "html",
                    content: t.content
                  });
                  break;
                case "setJson":
                  V(t.content) || A(t => r.push({
                    type: "json",
                    content: t
                  }), t.content);
                  break;
                case "redirect":
                  r.push(_c(t));
                  break;
                case "signalClick":
                  o.push({
                    type: "click",
                    eventToken: t.clickTrackId
                  });
              }
            }, e);
            const i = {
              name: t
            };
            if (!V(r) && (i.options = r), !V(o) && (i.metrics = o), V(i)) return n;
            const c = {},
              u = [i];
            return c.mboxes = u, n.execute = c, n;
          }(t, e);
        }
        const qc = t => !V(N(Gr, t));
        function Dc(t) {
          const {
              status: e,
              data: n
            } = t,
            r = {
              status: e,
              pageLoad: !0
            };
          return p(n) || (r.data = n), r;
        }
        function Rc(t) {
          const {
              status: e,
              mbox: n,
              data: r
            } = t,
            {
              name: o
            } = n,
            i = {
              status: e,
              mbox: o
            };
          return p(r) || (i.data = r), i;
        }
        function Lc(t) {
          const {
              status: e,
              view: n,
              data: r
            } = t,
            {
              name: o
            } = n,
            i = {
              status: e,
              view: o
            };
          return p(r) || (i.data = r), i;
        }
        function jc(t) {
          const {
              status: e,
              data: n
            } = t,
            r = {
              status: e,
              prefetchMetrics: !0
            };
          return p(n) || (r.data = n), r;
        }
        function Vc(t) {
          if (p(t)) return [null];
          const e = tt(Dc, [t]);
          return qc(e) && ve("Page load rendering failed", t), e;
        }
        function Hc(t) {
          if (p(t)) return [null];
          const e = tt(Rc, t);
          return qc(e) && ve("Mboxes rendering failed", t), e;
        }
        function Uc(t, e = Zi) {
          if (p(t)) return [null];
          const n = tt(Rc, t);
          return qc(n) && ve("Mboxes rendering failed", t), e(t), n;
        }
        function Bc(t, e = Xi) {
          if (p(t)) return [null];
          const n = tt(Lc, [t]);
          qc(n) && ve("View rendering failed", t);
          const {
            view: r
          } = t;
          return r.page ? (e(t), n) : n;
        }
        function Fc(t) {
          if (p(t)) return [null];
          const e = tt(jc, [t]);
          return qc(e) && ve("Prefetch rendering failed", t), e;
        }
        function $c(t) {
          const e = O([Vc(t[0]), Hc(t[1]), Uc(t[2]), Fc(t[3])]),
            n = N(zr, e),
            r = N(Gr, n);
          return V(r) ? Ve(n) : He(r);
        }
        function zc(t) {
          return He(t);
        }
        function Jc(t, e) {
          if (V(e)) return;
          const {
            options: n
          } = e;
          V(n) || A(e => {
            if ("html" !== e.type) return;
            const {
              content: n
            } = e;
            e.type = "actions", e.content = [{
              type: "setHtml",
              selector: t,
              content: n
            }];
          }, n);
        }
        function Zc(t, e) {
          const {
            metrics: n
          } = e;
          if (V(n)) return;
          const {
            name: r
          } = e;
          A(e => {
            e.name = r, e.selector = e.selector || t;
          }, n);
        }
        function Gc(t, e) {
          const n = d({}, e),
            {
              execute: r = {},
              prefetch: o = {}
            } = n,
            {
              pageLoad: i = {},
              mboxes: c = []
            } = r,
            {
              mboxes: u = []
            } = o;
          return Jc(t, i), A(e => Jc(t, e), c), A(e => Zc(t, e), c), A(e => Jc(t, e), u), A(e => Zc(t, e), u), n;
        }
        function Kc(t) {
          const {
              prefetch: e = {}
            } = t,
            {
              views: n = []
            } = e;
          V(n) || function (t) {
            A(Vi, t);
          }(n);
        }
        function Xc(t) {
          const e = [],
            {
              execute: n = {}
            } = t,
            {
              pageLoad: r = {},
              mboxes: o = []
            } = n;
          V(r) ? e.push(Ve(null)) : e.push(function (t) {
            return bc(t, e => yc("pageLoad", t, e), ic);
          }(r)), V(o) ? e.push(Ve(null)) : e.push(function (t) {
            return Ue(tt(xc, t));
          }(o));
          const {
              prefetch: i = {}
            } = t,
            {
              mboxes: c = [],
              metrics: u = []
            } = i;
          return V(c) ? e.push(Ve(null)) : e.push(function (t) {
            return Ue(tt(Sc, t));
          }(c)), h(u) && !V(u) ? e.push(function (t) {
            return Ue([cc(t)]).then(yc);
          }(i)) : e.push(Ve(null)), Vn(), Ue(e).then($c)['catch'](zc);
        }
        function Yc(t, e) {
          at(() => t.location.replace(e));
        }
        function Wc(t) {
          return $(t) || dn(t) ? t : "head";
        }
        function Qc(t) {
          ei("at-element-marker", t);
        }
        function tu(t, e = !1) {
          const {
            selector: n,
            response: r
          } = t;
          if (function (t = {}) {
            const {
                prefetch: e = {}
              } = t,
              {
                execute: n = {}
              } = t,
              {
                pageLoad: r = {}
              } = n,
              {
                mboxes: o = []
              } = n,
              {
                pageLoad: i = {}
              } = e,
              {
                views: c = []
              } = e,
              {
                mboxes: u = []
              } = e;
            return V(r) && V(o) && V(i) && V(c) && V(u);
          }(r)) return ye("No actions to be rendered"), Qc(n), Vn(), an({}), Ic("no-offers-event"), Ve();
          const o = Gc(n, r),
            i = Lo(o);
          if (!V(i)) {
            const {
              url: t
            } = i;
            return ye("Redirect action", i), fn({
              url: t
            }), Ic("redirect-offer-event"), Yc(window, t), Ve();
          }
          return cn({}), Kc(o), Ic("cache-updated-event"), Ec(o, e), Xc(o).then(t => {
            V(t) || un({
              execution: t
            });
          })['catch'](t => sn({
            error: t
          }));
        }
        const eu = "[page-init]";
        function nu(t) {
          ve(eu, "View delivery error", t), Ic("no-offers-event"), xe({
            source: eu,
            error: t
          }), Vn();
        }
        function ru(t, e = !1) {
          const n = {
            selector: "head",
            response: t
          };
          ye(eu, "response", t), xe({
            source: eu,
            response: t
          }), tu(n, e)['catch'](nu);
        }
        function ou(t) {
          const e = function (t) {
              return t.serverState;
            }(t),
            {
              request: n,
              response: r
            } = e;
          ye(eu, "Using server state"), xe({
            source: eu,
            serverState: e
          });
          const o = function (t, e) {
            const n = d({}, e),
              {
                execute: r,
                prefetch: o
              } = n,
              i = t.pageLoadEnabled,
              c = t.viewsEnabled;
            return r && (n.execute.mboxes = null), r && !i && (n.execute.pageLoad = null), o && (n.prefetch.mboxes = null), o && !c && (n.prefetch.views = null), n;
          }(t, r);
          Ec(o), function (t) {
            const {
                prefetch: e = {}
              } = t,
              {
                views: n = []
              } = e;
            if (V(n)) return;
            dc(O(tt(pc, n)));
          }(o), Ko({
            request: n,
            response: o
          }).then(t => ru(t, !0))['catch'](nu);
        }
        function iu() {
          if (!de() && !he()) return ve(eu, xt), void xe({
            source: eu,
            error: xt
          });
          const t = Rt();
          if (function (t) {
            const e = t.serverState;
            if (V(e)) return !1;
            const {
              request: n,
              response: r
            } = e;
            return !V(n) && !V(r);
          }(t)) return void ou(t);
          const e = t.pageLoadEnabled,
            n = t.viewsEnabled;
          if (!e && !n) return ye(eu, "Page load disabled"), void xe({
            source: eu,
            error: "Page load disabled"
          });
          jn();
          const r = {};
          if (e) {
            const t = {
              pageLoad: {}
            };
            r.execute = t;
          }
          if (n) {
            const t = {
              views: [{}]
            };
            r.prefetch = t;
          }
          const o = t.timeout;
          ye(eu, "request", r), xe({
            source: eu,
            request: r
          });
          const i = {
            request: r,
            timeout: o
          };
          ze() && !Je() ? Ze().then(() => {
            ti(i).then(ru)['catch'](nu);
          })['catch'](nu) : ti(i).then(ru)['catch'](nu);
        }
        function cu() {
          const t = {
            valid: !0
          };
          return t;
        }
        function uu(t) {
          const e = {
            valid: !1
          };
          return e[Ct] = t, e;
        }
        function su(t) {
          return F(t) ? uu("mbox option is required") : t.length > 250 ? uu("mbox option is too long") : cu();
        }
        function au(t) {
          return {
            action: "redirect",
            url: t.content
          };
        }
        function fu(t) {
          const e = [];
          return A(t => {
            const {
              type: n
            } = t;
            switch (n) {
              case "setHtml":
                e.push(function (t) {
                  const e = {
                    action: "setContent"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "setText":
                e.push(function (t) {
                  const e = {
                    action: "setText"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "appendHtml":
                e.push(function (t) {
                  const e = {
                    action: "appendContent"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "prependHtml":
                e.push(function (t) {
                  const e = {
                    action: "prependContent"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "replaceHtml":
                e.push(function (t) {
                  const e = {
                    action: "replaceContent"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "insertBefore":
                e.push(function (t) {
                  const e = {
                    action: "insertBefore"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "insertAfter":
                e.push(function (t) {
                  const e = {
                    action: "insertAfter"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "customCode":
                e.push(function (t) {
                  const e = {
                    action: "customCode"
                  };
                  return e.content = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "setAttribute":
                e.push(function (t) {
                  const e = S(t.content)[0],
                    n = {
                      action: "setAttribute"
                    };
                  return n.attribute = e, n.value = t.content[e], n.selector = t.selector, n.cssSelector = t.cssSelector, n;
                }(t));
                break;
              case "setImageSource":
                e.push(function (t) {
                  const e = {
                    action: "setAttribute"
                  };
                  return e.attribute = wt, e.value = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "setStyle":
                e.push(function (t) {
                  const e = {
                    action: "setStyle"
                  };
                  return e.style = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "resize":
                e.push(function (t) {
                  const e = {
                    action: "setStyle"
                  };
                  return e.style = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "move":
                e.push(function (t) {
                  const e = {
                    action: "setStyle"
                  };
                  return e.style = t.content, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "remove":
                e.push(function (t) {
                  const e = {
                    action: "remove"
                  };
                  return e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "rearrange":
                e.push(function (t) {
                  const e = {
                    action: "rearrange"
                  };
                  return e.from = t.content.from, e.to = t.content.to, e.selector = t.selector, e.cssSelector = t.cssSelector, e;
                }(t));
                break;
              case "redirect":
                e.push(au(t));
            }
          }, t), e;
        }
        function lu(t) {
          if (V(t)) return [];
          const e = [];
          return A(t => {
            "click" === t.type && ($(t.selector) ? e.push({
              action: "trackClick",
              selector: t.selector,
              clickTrackId: t.eventToken
            }) : e.push({
              action: "signalClick",
              clickTrackId: t.eventToken
            }));
          }, t), e;
        }
        function du(t) {
          if (V(t)) return [];
          const e = [],
            n = [],
            r = [],
            {
              options: o = [],
              metrics: i = []
            } = t;
          A(t => {
            const {
              type: o
            } = t;
            switch (o) {
              case "html":
                e.push(t.content);
                break;
              case "json":
                n.push(t.content);
                break;
              case "redirect":
                r.push(au(t));
                break;
              case "actions":
                r.push.apply(r, fu(t.content));
            }
          }, o), V(e) || r.push({
            action: "setContent",
            content: e.join("")
          }), V(n) || r.push({
            action: "setJson",
            content: n
          });
          const c = lu(i);
          return V(c) || r.push.apply(r, c), r;
        }
        const pu = "[getOffer()]";
        function hu(t, e) {
          const n = function (t) {
            const {
                execute: e = {}
              } = t,
              {
                pageLoad: n = {}
              } = e,
              {
                mboxes: r = []
              } = e,
              o = [];
            return o.push.apply(o, du(n)), o.push.apply(o, O(tt(du, r))), o;
          }(e);
          t[kt](n);
        }
        function mu(t) {
          const e = function (t) {
              if (!y(t)) return uu(St);
              const e = su(t.mbox);
              return e[Tt] ? b(t[kt]) ? b(t[Ct]) ? cu() : uu("error option is required") : uu("success option is required") : e;
            }(t),
            n = e[Ct];
          if (!e[Tt]) return ve(pu, n), void xe({
            source: pu,
            options: t,
            error: n
          });
          if (!de() && !he()) return at(t[Ct]("warning", xt)), ve(pu, xt), void xe({
            source: pu,
            options: t,
            error: xt
          });
          const r = e => hu(t, e),
            o = e => function (t, e) {
              const n = e.status || "unknown";
              t[Ct](n, e);
            }(t, e);
          ye(pu, t), xe({
            source: pu,
            options: t
          }), ze() && !Je() ? Ze().then(() => {
            Qo(t).then(r)['catch'](o);
          }) : Qo(t).then(r)['catch'](o);
        }
        const gu = "[getOffers()]";
        function vu(t) {
          const e = function (t) {
              if (!y(t)) return uu(St);
              const {
                request: e
              } = t;
              if (!y(e)) return uu("request option is required");
              const {
                execute: n,
                prefetch: r
              } = e;
              return y(n) || y(r) ? cu() : uu("execute or prefetch is required");
            }(t),
            n = e[Ct];
          return e[Tt] ? de() || he() ? (ye(gu, t), xe({
            source: gu,
            options: t
          }), !ze() || Je() ? ti(t) : Ze().then(() => ti(t))) : (ve(gu, xt), xe({
            source: gu,
            options: t,
            error: xt
          }), He(new Error(xt))) : (ve(gu, n), xe({
            source: gu,
            options: t,
            error: n
          }), He(e));
        }
        const yu = "[applyOffer()]";
        function bu(t) {
          const e = Wc(t.selector),
            n = function (t) {
              if (!y(t)) return uu(St);
              const e = su(t.mbox);
              if (!e[Tt]) return e;
              const n = t.offer;
              return h(n) ? cu() : uu("offer option is required");
            }(t),
            r = n[Ct];
          return n[Tt] ? de() || he() ? (t.selector = e, ye(yu, t), xe({
            source: yu,
            options: t
          }), void function (t) {
            const {
                mbox: e,
                selector: n,
                offer: r
              } = t,
              o = Rt(),
              i = e === o.globalMboxName;
            if (V(r)) return ye("No actions to be rendered"), Qc(n), Vn(), void an({
              mbox: e
            });
            const c = Gc(n, Pc(e, r, i)),
              u = Lo(c);
            if (!V(u)) {
              const {
                url: t
              } = u;
              return ye("Redirect action", u), fn({
                url: t
              }), void Yc(window, t);
            }
            cn({
              mbox: e
            }), Ec(c), Xc(c).then(t => {
              V(t) || un({
                mbox: e,
                execution: t
              });
            })['catch'](t => sn({
              error: t
            }));
          }(t)) : (ve(yu, xt), xe({
            source: yu,
            options: t,
            error: xt
          }), void Qc(e)) : (ve(yu, t, r), xe({
            source: yu,
            options: t,
            error: r
          }), void Qc(e));
        }
        function wu(t) {
          const e = Wc(t.selector),
            n = function (t) {
              if (!y(t)) return uu(St);
              const {
                response: e
              } = t;
              return y(e) ? cu() : uu("response option is required");
            }(t),
            r = n[Ct];
          return n[Tt] ? de() || he() ? (t.selector = e, ye("[applyOffers()]", t), xe({
            source: "[applyOffers()]",
            options: t
          }), tu(t)) : (ve("[applyOffers()]", xt), xe({
            source: "[applyOffers()]",
            options: t,
            error: xt
          }), Qc(e), He(new Error(xt))) : (ve("[applyOffers()]", t, r), xe({
            source: "[applyOffers()]",
            options: t,
            error: r
          }), Qc(e), He(n));
        }
        function xu(t) {
          const e = Rt().globalMboxName,
            {
              consumerId: n = e,
              request: r
            } = t,
            o = function (t) {
              if (!y(t)) return uu(St);
              const {
                request: e
              } = t;
              if (!y(e)) return uu("request option is required");
              const {
                execute: n,
                prefetch: r,
                notifications: o
              } = e;
              return y(n) || y(r) ? uu("execute or prefetch is not allowed") : h(o) ? cu() : uu("notifications are required");
            }(t),
            i = o[Ct];
          if (!o[Tt]) return ve("[sendNotifications()]", i), void xe({
            source: "[sendNotifications()]",
            options: t,
            error: i
          });
          if (!de() && !he()) return ve("[sendNotifications()]", xt), void xe({
            source: "[sendNotifications()]",
            options: t,
            error: xt
          });
          ye("[sendNotifications()]", t), xe({
            source: "[sendNotifications()]",
            options: t
          });
          const {
              notifications: c
            } = r,
            u = Bi(n, {}, c);
          !ze() || Je() ? $i(u) : ve("[sendNotifications()]", "Adobe Target is not opted in");
        }
        const Su = "[trackEvent()]";
        function Eu(t) {
          if (ze() && !Je()) return ve("Track event request failed", "Adobe Target is not opted in"), void t[Ct](Ct, "Adobe Target is not opted in");
          !function (t) {
            const {
                mbox: e,
                type: n = Ot
              } = t,
              r = y(t.params) ? t.params : {},
              o = d({}, lr(e), r),
              i = Fi(Mr({}, o), n, []);
            if (i.mbox = {
              name: e
            }, $i(Bi(e, o, [i]))) return ye("Track event request succeeded", t), void t[kt]();
            ve("Track event request failed", t), t[Ct]("unknown", "Track event request failed");
          }(t);
        }
        function Cu(t) {
          const e = t[bt],
            n = t[vt],
            r = R(gn(e)),
            o = () => function (t) {
              return Eu(t), !t.preventDefault;
            }(t);
          A(t => Li(n, o, t), r);
        }
        function Tu(t) {
          const e = function (t) {
              if (!y(t)) return uu(St);
              const e = su(t.mbox);
              return e[Tt] ? cu() : e;
            }(t),
            n = e[Ct];
          if (!e[Tt]) return ve(Su, n), void xe({
            source: Su,
            options: t,
            error: n
          });
          const r = function (t, e) {
            const n = e.mbox,
              r = d({}, e),
              o = y(e.params) ? e.params : {};
            return r.params = d({}, lr(n), o), r.timeout = Vr(t, e.timeout), r[kt] = b(e[kt]) ? e[kt] : dt, r[Ct] = b(e[Ct]) ? e[Ct] : dt, r;
          }(Rt(), t);
          if (!de() && !he()) return ve(Su, xt), at(r[Ct]("warning", xt)), void xe({
            source: Su,
            options: t,
            error: xt
          });
          ye(Su, r), xe({
            source: Su,
            options: r
          }), function (t) {
            const e = t[vt],
              n = t[bt];
            return $(e) && ($(n) || dn(n));
          }(r) ? Cu(r) : Eu(r);
        }
        const ku = [];
        let Nu = 0;
        function Ou(t) {
          return Cc(t), function (t) {
            const {
              page: e
            } = t;
            return wc("view", t, e, oc);
          }(t).then(Bc).then(t => {
            V(t) || un({
              execution: t
            });
          })['catch'](t => {
            ve("View rendering failed", t), sn({
              error: t
            });
          });
        }
        function Iu() {
          for (; ku.length > 0;) {
            const t = ku.pop(),
              {
                viewName: e,
                page: n
              } = t,
              r = Hi(e, t);
            p(r) ? n && Ki(t) : Ou(r);
          }
        }
        function Au() {
          Nu = 1, Iu();
        }
        function _u(t, e) {
          if (!Rt().viewsEnabled) return void ve("[triggerView()]", "Views are not enabled");
          if (!M(t) || F(t)) return ve("[triggerView()]", "View name should be a non-empty string", t), void xe({
            source: "[triggerView()]",
            view: t,
            error: "View name should be a non-empty string"
          });
          const n = t.toLowerCase(),
            r = function (t, e) {
              const n = {};
              return n.viewName = t, n.impressionId = st(), n.page = !0, V(e) || (n.page = !!e.page), n;
            }(n, e);
          if (he()) return ye("[triggerView()]", n, r), void function (t) {
            const e = t.viewName;
            window._AT.currentView = e;
          }(r);
          ye("[triggerView()]", n, r), xe({
            source: "[triggerView()]",
            view: n,
            options: r
          }), function (t) {
            ku.push(t), 0 !== Nu && Iu();
          }(r);
        }
        Ac("cache-updated-event", Au), Ac("no-offers-event", Au), Ac("redirect-offer-event", Au);
        const Mu = "function has been deprecated. Please use getOffer() and applyOffer() functions instead.",
          Pu = "adobe.target.registerExtension() function has been deprecated. Please review the documentation for alternatives.",
          qu = "mboxCreate() " + Mu,
          Du = "mboxDefine() " + Mu,
          Ru = "mboxUpdate() " + Mu;
        function Lu() {
          ve(Pu, arguments);
        }
        function ju() {
          ve(qu, arguments);
        }
        function Vu() {
          ve(Du, arguments);
        }
        function Hu() {
          ve(Ru, arguments);
        }
        return {
          init: function (t, e, n) {
            if (t.adobe && t.adobe.target && void 0 !== t.adobe.target.getOffer) return void ve("Adobe Target has already been initialized.");
            Dt(n);
            const r = Rt(),
              o = r.version;
            if (t.adobe.target.VERSION = o, t.adobe.target.event = {
              LIBRARY_LOADED: "at-library-loaded",
              REQUEST_START: "at-request-start",
              REQUEST_SUCCEEDED: "at-request-succeeded",
              REQUEST_FAILED: "at-request-failed",
              CONTENT_RENDERING_START: "at-content-rendering-start",
              CONTENT_RENDERING_SUCCEEDED: "at-content-rendering-succeeded",
              CONTENT_RENDERING_FAILED: "at-content-rendering-failed",
              CONTENT_RENDERING_NO_OFFERS: "at-content-rendering-no-offers",
              CONTENT_RENDERING_REDIRECT: "at-content-rendering-redirect"
            }, !r.enabled) return function (t) {
              t.adobe = t.adobe || {}, t.adobe.target = {
                VERSION: "",
                event: {},
                getOffer: dt,
                getOffers: pt,
                applyOffer: dt,
                applyOffers: pt,
                sendNotifications: dt,
                trackEvent: dt,
                triggerView: dt,
                registerExtension: dt,
                init: dt
              }, t.mboxCreate = dt, t.mboxDefine = dt, t.mboxUpdate = dt;
            }(t), void ve(xt);
            be(window, Rt(), pe()), Sn(), function (t) {
              const e = On(t.location.search);
              if (p(e)) return;
              const n = new Date(et() + 186e4),
                r = Rt().secureOnly,
                o = d({
                  expires: n,
                  secure: r
                }, r ? {
                  sameSite: "None"
                } : {});
              ee("at_qa_mode", JSON.stringify(e), o);
            }(t), In(t), iu(), t.adobe.target.getOffer = mu, t.adobe.target.getOffers = vu, t.adobe.target.applyOffer = bu, t.adobe.target.applyOffers = wu, t.adobe.target.sendNotifications = xu, t.adobe.target.trackEvent = Tu, t.adobe.target.triggerView = _u, t.adobe.target.registerExtension = Lu, t.mboxCreate = ju, t.mboxDefine = Vu, t.mboxUpdate = Hu, function () {
              const t = en("at-library-loaded", {});
              tn(window, document, "at-library-loaded", t);
            }();
          }
        };
      }(), window.adobe.target.init(window, document, config);
      window.mboxCreate = function (mboxName, params, selector) {
        var newSelector = document.getElementById(selector);
        if (newSelector) {
          newSelector = "#" + selector;
        } else {
          newSelector = selector;
        }
        if (mboxName && u.typeOf(params) === "object" && selector) {
          adobe.target.getOffer({
            mbox: mboxName,
            params: params,
            success: function (offers) {
              adobe.target.applyOffer({
                mbox: mboxName,
                selector: newSelector,
                offer: offers
              });
            },
            error: function (status, error) {
              utag.DB("at.js getOffer Error");
              utag.DB(status);
              utag.DB(error);
              selector.style.visibility = "visible";
            }
          });
        } else {
          console.warn("The mboxCreate function has been deprecated. Please use getOffer() and applyOffer() functions instead.");
        }
      };
      window.mboxDefine.apply = function (val, mbox) {
        if (u.typeOf(mbox) === "array") {
          var selector = mbox[0],
            mboxName = mbox[1],
            params;
          window.__TEALIUM.adobe.target.defineObject = window.__TEALIUM.adobe.target.defineObject || {};
          if (mbox.length > 2) {
            params = u.parseParams(mbox.slice(2));
          }
          window.__TEALIUM.adobe.target.defineObject[mboxName] = window.__TEALIUM.adobe.target.defineObject[mboxName] || [];
          window.__TEALIUM.adobe.target.defineObject[mboxName].push({
            params: params,
            selector: selector
          });
        } else {
          console.warn("The mboxDefine function has been deprecated. Please use getOffer() and applyOffer() functions instead.");
        }
      };
      window.mboxUpdate.apply = function (val, mbox) {
        if (u.typeOf(mbox) === "array") {
          var params,
            mboxName = mbox[0];
          if (mbox.length > 1) {
            params = u.parseParams(mbox.slice(1));
          }
          if (!u.isEmpty(window.__TEALIUM.adobe.target.defineObject) && !u.isEmpty(window.__TEALIUM.adobe.target.defineObject[mboxName])) {
            var array = window.__TEALIUM.adobe.target.defineObject[mboxName];
            for (var i = 0; i < array.length; ++i) {
              var paramName,
                newparams = array[i].params;
              for (paramName in params) {
                newparams[paramName] = params[paramName];
              }
              window.mboxCreate(mboxName, newparams, array[i].selector);
            }
            delete window.__TEALIUM.adobe.target.defineObject[mboxName];
          }
        } else {
          console.warn("The mboxUpdate function has been deprecated. Please use getOffer() and applyOffer() functions instead.");
        }
      };
    }
    window.utag.tagsettings = window.utag.tagsettings || {};
    window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
    var vAPI = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || function () {
      return {
        getInstance: function (orgID, callback) {
          if (orgID) {
            utag.DB("[" + u.id + "] OrgID used, but no 'Adobe Marketing Cloud ID Service' tag detected");
          }
          return callback();
        }
      };
    }();
    var u = {
      "id": id
    };
    utag.o[loader].sender[id] = u;
    u.ev = {
      "view": 1,
      "link": 1
    };
    u.hasOwnProperty = Object.prototype.hasOwnProperty;
    u.typeOf = function (obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    };
    u.isEmpty = function (obj) {
      var type = u.typeOf(obj),
        key;
      if (/number|boolean/.test(type)) {
        return false;
      }
      if (obj === undefined || obj === null) {
        return true;
      }
      if (obj.length !== undefined) {
        return obj.length === 0;
      }
      for (key in obj) {
        if (u.hasOwnProperty.call(obj, key)) {
          return false;
        }
      }
      return true;
    };
    u.clearEmptyKeys = function (obj) {
      var key;
      for (key in obj) {
        if (u.hasOwnProperty.call(obj, key)) {
          if (u.isEmpty(obj[key])) {
            delete obj[key];
          }
        }
      }
      return obj;
    };
    u.map_func = function (arr, obj, item) {
      var i = arr.shift();
      obj[i] = obj[i] || {};
      if (arr.length > 0) {
        u.map_func(arr, obj[i], item);
      } else {
        obj[i] = item;
      }
    };
    u.func = function () {};
    window.__TEALIUM = window.__TEALIUM || {};
    window.__TEALIUM.adobe = window.__TEALIUM.adobe || {};
    var target = window.__TEALIUM.adobe.target = window.__TEALIUM.adobe.target || {
      "loaded": false,
      "css": {
        "id": "unknown",
        "status": "visible",
        "hide": u.func,
        "show": u.func,
        "remove": u.func,
        "render": u.func,
        "removeRender": u.func
      }
    };
    window.__TEALIUM.adobe.target.defineObject = window.__TEALIUM.adobe.target.defineObject || {};
    target.loaded = true;
    u.mboxes = {};
    u.mboxListener = false;
    u.loaded = false;
    u.offersReceived = [];
    u.showAllDivs = function () {
      target.css.remove();
      target.css.removeRender();
    };
    u.showDiv = function (mbox) {
      var divs,
        i,
        tnt = null;
      if (!(utag.cfg.tntFF && utag.cfg.tntFF.lkp)) {
        return;
      }
      for (id in utag.cfg.tntFF.lkp) {
        tnt = utag.cfg.tntFF.lkp[id];
        if (tnt && tnt[mbox]) {
          divs = tnt[mbox];
          for (i = 0; i < divs.length; i++) {
            try {
              target.css.render(divs[i]);
            } catch (e) {
              utag.DB(e);
            }
          }
        }
      }
    };
    u.eventListener = function (event) {
      if (event.detail.mbox === "target-global-mbox") {
        if (target.css.status === "hidden") {
          target.css.remove();
        }
      }
      if (/rendering-(succeeded|failed)/i.test(event.type)) {
        return u.showDiv(event.detail.mbox);
      }
      if (/request-(succeeded|failed)/i.test(event.type)) {
        if (target.css.status === "hidden") {
          target.css.remove();
        }
      }
      return true;
    };
    u.ebx = function (p) {
      "use strict";

      function NB(a, i) {
        var n = "";
        if (a.length == 0) {
          return [document.body, "document.body"];
        } else if (a.length == 1) {
          n = "document.body.childNodes[" + a[0] + "]";
        } else {
          n = "document.body.childNodes[" + a[0] + "]";
          for (i = 1; i < a.length; i++) {
            n = n + ".childNodes[" + a[i] + "]";
          }
        }
        return [eval(n), n];
      }
      p = p.replace("/html/body/", "").split("/");
      var i,
        d = "",
        a = [],
        e = "",
        n = 0,
        c = 0,
        x = 0;
      for (x = 0; x < p.length; x++) {
        if (p[x].indexOf('[') > 0) {
          e = p[x].match(/[a-z]+/)[0];
          n = p[x].match(/[0-9]+/)[0] - 1;
        } else {
          e = p[x];
        }
        c = 0;
        d = NB(a)[0].childNodes;
        for (i = 0; i < d.length; i++) {
          if (d[i].localName == e && n > 0) {
            if (c == n) {
              a.push(i);
              break;
            }
            c++;
          } else if (d[i].localName == e) {
            a.push(i);
            break;
          }
        }
        n = 0;
      }
      return NB(a);
    };
    u.processPageParams = function (origData, mapData) {
      function convertFromString(data) {
        var i,
          result = {},
          split1 = (data || "").split("&"),
          split2;
        for (i = 0; i < split1.length; i++) {
          split2 = split1[i].split("=");
          result[split2[0]] = split2[1];
        }
        return result;
      }
      function convertFromArray(data) {
        var i,
          result = {},
          split1;
        for (i = 0; i < data.length; i++) {
          split1 = data[i].split("=");
          result[split1[0]] = split1[1];
        }
        return result;
      }
      if (!mapData) {
        return origData;
      }
      if (!origData) {
        return mapData;
      }
      var result,
        key,
        origDataType = u.typeOf(origData),
        mappedDataType = u.typeOf(mapData),
        oD,
        tD;
      if (origDataType === "string") {
        oD = convertFromString(origData);
      } else if (origDataType === "array") {
        oD = convertFromArray(origData);
      } else if (origDataType === "object") {
        oD = origData;
      } else {
        return origData;
      }
      if (mappedDataType === "string") {
        tD = convertFromString(mapData);
      } else if (mappedDataType === "array") {
        tD = convertFromArray(mapData);
      } else if (mappedDataType === "object") {
        tD = mapData;
      } else {
        return origData;
      }
      result = {};
      for (key in utag.loader.GV(oD)) {
        result[key] = oD[key];
      }
      for (key in utag.loader.GV(tD)) {
        result[key] = tD[key];
      }
      return result;
    };
    u.GV = function (a, b, c) {
      b = {};
      for (c in a) {
        if (a.hasOwnProperty(c)) b[c] = a[c];
      }
      return b;
    };
    u.trackEvent = function (evt) {
      evt = u.clearEmptyKeys(evt);
      evt.success = u.typeOf(evt.success) === "string" ? window[evt.success] : u.event_success || function () {};
      evt.error = u.typeOf(evt.error) === "string" ? window[evt.error] : u.event_error || function (error) {
        utag.DB(error);
      };
      adobe.target.trackEvent(evt);
    };
    u.targetPageParamsAll = window.targetPageParamsAll;
    window.targetPageParamsAll = function () {
      var result = {};
      if (u.targetPageParamsAll) {
        result = u.targetPageParamsAll() || {};
      }
      return u.processPageParams(result, u.data.targetPageParamsAll);
    };
    u.targetPageParams = window.targetPageParams;
    window.targetPageParams = function () {
      var result = {};
      if (u.targetPageParams) {
        result = u.targetPageParams() || {};
      }
      return u.processPageParams(result, u.data.targetPageParams);
    };
    u.splitParams = function (paramStr) {
      var result = paramStr.indexOf("=");
      if (result === -1) return null;
      return [paramStr.substr(0, result), paramStr.substr(result + 1)];
    };
    u.parseParams = function (params) {
      var paramObj = {};
      var split;
      for (var i = 0; i < params.length; i++) {
        split = u.splitParams(params[i]);
        if (!split) continue;
        paramObj[split[0]] = split[1];
      }
      return paramObj;
    };
    u.getOffers = function (offer) {
      var getOffer = {},
        request = {};
      if (u.data.request_type === "execute") {
        request.execute = {};
      }
      if (u.data.request_type === "prefetch") {
        request.prefetch = {};
      }
      if (offer.fetchViews) {
        request[u.data.request_type].views = [];
      }
      if (offer.id) {
        request.id = offer.id;
      }
      if (offer.experienceCloud) {
        request.experienceCloud = offer.experienceCloud;
      }
      if (offer.views && offer.views.length > 0) {
        request[u.data.request_type].views = offer.views;
      }
      if (offer.pageLoad && !utag.ut.isEmptyObject(offer.pageLoad)) {
        request[u.data.request_type].pageLoad = offer.pageLoad;
      }
      if (offer.mboxes && offer.mboxes.length > 0) {
        request[u.data.request_type].mboxes = offer.mboxes;
      }
      if (offer.consumerId) {
        getOffer.consumerId = offer.consumerId;
      }
      getOffer.request = request;
      if (offer.timeout) {
        getOffer.timeout = offer.timeout;
      }
      adobe.target.getOffers(getOffer).then(function (response) {
        if (!utag.ut.isEmptyObject(response)) {
          u.offersReceived.push(response);
        }
      }).catch(function (error) {
        utag.DB("Target AT.js [" + u.id + "] - error getting offers: " + error);
      });
    };
    u.applyOffers = function () {
      var newOffers = {},
        type,
        subtype,
        i;
      if (u.data.selector && u.data.selector.length > 0) {
        if (u.data.offersResponse["prefetch"]) {
          type = "prefetch";
        }
        if (u.data.offersResponse["execute"]) {
          type = "execute";
        }
        if (u.data.offersResponse["notifications"]) {
          type = "notifications";
        }
        if (u.data.offersResponse[type]["views"]) {
          subtype = "views";
        }
        if (u.data.offersResponse[type]["mboxes"]) {
          subtype = "mboxes";
        }
        if (u.data.offersResponse[type]["pageLoad"]) {
          subtype = "pageLoad";
        }
        if (type === "notifications") {
          for (i = 0; i < u.data.offersResponse[type].length; ++i) {
            newOffers.selector = u.data.selector[i];
            newOffers.response = {};
            newOffers.response[type] = u.data.offersResponse[type][i];
            adobe.target.applyOffers(newOffers);
          }
        } else {
          for (i = 0; i < u.data.offersResponse[type][subtype].length; ++i) {
            newOffers.selector = u.data.selector[i];
            newOffers.response = {};
            newOffers.response[type] = {};
            newOffers.response[type][subtype] = [u.data.offersResponse[type][subtype][i]];
            adobe.target.applyOffers(newOffers);
          }
        }
      } else {
        newOffers.response = u.data.offersResponse;
        adobe.target.applyOffers(newOffers);
      }
    };
    u.map = {
      "_sm_3098_1": "targetPageParams.at_property",
      "adobeTargetTriggerName": "viewName"
    };
    u.extend = [function (a, b) {
      try {
        b['_sm_3098_1'] = "79fe0949-edb1-cbd3-62bf-e9dba7c2c118";
      } catch (e) {
        utag.DB(e);
      }
    }];
    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:3098");
        utag.DB(b);
        var c,
          d,
          e,
          f,
          config,
          mboxCookie = utag.loader.RC("mbox");
        if (u.typeOf(mboxCookie) === "string" && mboxCookie.indexOf("disable") > -1) {
          utag.DB("Target AT.js [" + u.id + "] - mbox disable cookie detected, exiting...");
          return u.showAllDivs();
        }
        u.data = {
          "config": {
            "clientCode": "bupa",
            "imsOrgId": "126234B8527831D90A490D44@AdobeOrg",
            "serverDomain": "bupa.tt.omtrdc.net",
            "timeout": parseInt("7000" || 7000, 10),
            "globalMboxName": "target-global-mbox",
            "globalMboxAutoCreate": "true" === "true",
            "endpoint": "/rest/v1/delivery",
            "authoringScriptUrl": "",
            "version": "2.6.1",
            "defaultContentHiddenStyle": "visibility:hidden !important;",
            "defaultContentVisibleStyle": "visibility:visible !important;",
            "bodyHiddenStyle": "body{opacity:0  !important}",
            "bodyHidingEnabled": target.css.status === "hidden",
            "deviceIdLifetime": 63244800000,
            "sessionIdLifetime": 1860000,
            "selectorsPollingTimeout": 5000,
            "pollingAfterDomReadyTimeout": 180000,
            "visitorApiTimeout": 2000,
            "overrideMboxEdgeServer": false,
            "overrideMboxEdgeServerTimeout": 1860000,
            "optoutEnabled": false,
            "crossDomain": "enabled",
            "secureOnly": true,
            "supplementalDataIdParamTimeout": 30,
            "pageLoadEnabled": true,
            "viewsEnabled": true
          },
          "request_type": "prefetch"
        };
        for (f = 0; f < u.extend.length; f++) {
          try {
            d = u.extend[f](a, b, u);
            if (d === false) {
              return;
            }
          } catch (e) {
            utag.DB("[" + u.id + "] Extension Error " + e.message);
          }
        }
        for (d in u.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.map_func(e[f].split("."), u.data, b[d]);
            }
          }
        }
        utag.DB("send:3098:MAPPINGS");
        utag.DB(u.data);
        config = u.clearEmptyKeys(u.data.config);
        if (a === "link") {
          if (u.loaded) {
            if (u.data.evt) {
              u.trackEvent(u.data.evt);
            }
            if (!u.isEmpty(u.data.offers)) {
              u.getOffers(u.data.offers);
            }
            if (u.data.offersResponse && !u.isEmpty(u.data.offersResponse)) {
              u.applyOffers();
            }
          }
          u.events = u.events || [];
          if (!utag.ut.isEmpty(u.data.evt)) {
            u.events.push(utag.handler.C(u.data.evt));
          }
          u.offersRequested = u.offersRequested || [];
          if (!u.isEmpty(u.data.offers)) {
            u.offersRequested.push(utag.handler.C(u.data.offers));
          }
          return;
        }
        if (!config.globalMboxAutoCreate) {
          target.css.remove();
        }
        window.setTimeout(function () {
          utag.DB("Target AT.js [" + u.id + "] - Time out rolled over, removing defined CSS");
          u.showAllDivs();
        }, config.timeout);
        vAPI.getInstance(config.imsOrgId, function (instance) {
          window.targetGlobalSettings = window.targetGlobalSettings || {};
          if (!window.targetGlobalSettings.cookieDomain) {
            window.targetGlobalSettings.cookieDomain = function () {
              return utag.loader.RC("utag_main").vapi_domain || function () {
                var i = 0,
                  d = document.domain,
                  p = d.split("."),
                  s = "_vapi" + new Date().getTime();
                while (i < p.length - 1 && document.cookie.indexOf(s + "=" + s) === -1) {
                  d = p.slice(-1 - ++i).join(".");
                  document.cookie = s + "=" + s + ";domain=" + d + ";";
                }
                document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + d + ";";
                utag.loader.SC("utag_main", {
                  "vapi_domain": d
                });
                return d;
              }();
            }();
          }
          var mbox,
            mboxes = __TEALIUM.adobe.target.mboxes,
            event,
            target;
          if (!u.loaded) {
            at(config);
          }
          u.loaded = true;
          if (a === "view") {
            if (u.data.viewName) {
              var page_option;
              if (u.data.countPage === "true" || u.data.countPage === true) {
                page_option = {
                  page: true
                };
                adobe.target.triggerView(u.data.viewName, page_option);
              } else if (u.data.countPage === "false" || u.data.countPage === false) {
                page_option = {
                  page: false
                };
                adobe.target.triggerView(u.data.viewName, page_option);
              } else {
                adobe.target.triggerView(u.data.viewName);
              }
            }
          }
          if (!u.mboxListener) {
            target = window.adobe && window.adobe.target;
            u.mboxListener = true;
            for (event in target.event) {
              if (u.hasOwnProperty.call(target.event, event)) {
                if (document.addEventListener) {
                  document.addEventListener(target.event[event], u.eventListener, false);
                } else if (document.attachEvent) {
                  document.attachEvent(target.event[event], u.eventListener);
                }
              }
            }
          }
          if (mboxes) {
            for (var i = 0, len = mboxes.length; i < len; i++) {
              mbox = mboxes[i];
              if (mbox.type === "create") {
                (function (mbox) {
                  var params;
                  if (mbox.args.length > 1) {
                    params = u.parseParams(mbox.args.slice(1));
                  }
                  adobe.target.getOffer({
                    "mbox": mbox.args[0],
                    "params": params,
                    "success": function (offers) {
                      adobe.target.applyOffer({
                        "mbox": mbox.args[0],
                        "selector": mbox.selector,
                        "offer": offers
                      });
                    },
                    "error": function (status, error) {
                      utag.DB("at.js getOffer Error");
                      utag.DB(status);
                      utag.DB(error);
                    },
                    "timeout": 5000
                  });
                })(mbox);
              } else if (mbox.type === "define") {
                window.mboxDefine.apply(null, mbox.args);
              } else if (mbox.type === "update") {
                window.mboxUpdate.apply(null, mbox.args);
              } else if (mbox.type === "getOffer") {
                window.adobe.target.getOffer.apply(null, mbox.args);
              }
            }
            mboxes.length = 0;
          }
          if (b._corder) {
            var _cprod = b._cprod ? b._cprod.slice(0) : [];
            adobe.target.trackEvent({
              "mbox": "orderConfirmPage",
              "params": {
                "orderId": b._corder,
                "productPurchasedId": _cprod.join(","),
                "orderTotal": b._ctotal
              }
            });
          }
          if (u.events) {
            for (c = 0; c < u.events.length; c++) {
              u.trackEvent(u.events[f]);
            }
          }
          if (u.data.evt) {
            u.trackEvent(u.data.evt);
          }
          if (u.offersRequested) {
            for (c = 0; c < u.offersRequested.length; c++) {
              u.getOffers(u.offersRequested[c]);
            }
          }
          if (!u.isEmpty(u.data.offers)) {
            u.getOffers(u.data.offers);
          }
          if (u.data.offersResponse && !u.isEmpty(u.data.offersResponse)) {
            u.applyOffers();
          }
        });
      }
    };
    try {
      utag.o[loader].loader.LOAD(id);
    } catch (e) {
      utag.loader.LOAD(id);
    }
  })("3098", "bupa.bupa-uk");
} catch (error) {
  utag.DB(error);
}

//tealium universal tag - utag.2991 ut4.0.202309060622, Copyright 2023 Tealium.com Inc. All Rights Reserved.
var s = s_gi("bupadummyreportsuite");
s.account = "bupadummyreportsuite";
s.trackDownloadLinks = false;
s.trackExternalLinks = false;
s.trackInlineStats = true;
s.linkInternalFilters = "";
s.linkLeaveQueryString = false;
function validatePayload(payload, expectedSchema) {
  for (const key in expectedSchema) {
    const expectedType = expectedSchema[key];
    const actualValue = payload[key];
    if (actualValue === undefined || typeof actualValue !== expectedType) {
      console.warn(`Invalid property '${key}', expected '${expectedType}' but got '${typeof actualValue}'`);
      return false;
    }
  }
  return true;
}
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.usePlugins = false;
s.currencyCode = "USD";
s.visitorNamespace = "bupa";
s.trackingServer = "bupa.d2.sc.omtrdc.net";
function getStackTrace() {
  const stackTraceLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  return stackTrace;
}
s.trackingServerSecure = "bupa.d2.sc.omtrdc.net";
s.charSet = "UTF-8";
function sendPayloadToServer(payload) {
  const endPoint = '/api/collect-data';
  if (typeof originalFunctions.fetch === 'function') {
    originalFunctions.fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => console.error('Error sending payload:', error));
  } else {
    const request = new originalFunctions.XMLHttpRequest();
    request.open('POST', endPoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));
  }
}
s.expectSupplementalData = true;
s.debugTracking = utag.cfg ? utag.cfg.utagdb : false;
function AppMeasurement_Module_ActivityMap(k) {
  function p() {
    var a = f.pageYOffset + (f.innerHeight || 0);
    a && a > +g && (g = a);
  }
  function q() {
    if (e.scrollReachSelector) {
      var a = k.d.querySelector && k.d.querySelector(e.scrollReachSelector);
      a ? (g = a.scrollTop || 0, a.addEventListener("scroll", function () {
        var d;
        (d = a && a.scrollTop + a.clientHeight || 0) > g && (g = d);
      })) : 0 < v-- && setTimeout(q, 1E3);
    }
  }
  function l(a, d) {
    var b, c, n;
    if (a && d && (b = e.c[d] || (e.c[d] = d.split(",")))) for (n = 0; n < b.length && (c = b[n++]);) if (-1 < a.indexOf(c)) return null;
    return a;
  }
  function r(a, d, b, c, e) {
    var f, h;
    if (a.dataset && (h = a.dataset[d])) f = h;else if (a.getAttribute) if (h = a.getAttribute("data-" + b)) f = h;else if (h = a.getAttribute(b)) f = h;
    if (!f && k.useForcedLinkTracking && e) {
      var g;
      a = a.onclick ? "" + a.onclick : "";
      d = "";
      if (c && a && (b = a.indexOf(c), 0 <= b)) {
        for (b += c.length; b < a.length;) if (h = a.charAt(b++), 0 <= "'\"".indexOf(h)) {
          g = h;
          break;
        }
        for (var l = !1; b < a.length && g;) {
          h = a.charAt(b);
          if (!l && h === g) break;
          "\\" === h ? l = !0 : (d += h, l = !1);
          b++;
        }
      }
      (g = d) && (k.w[c] = g);
    }
    return f || e && k.w[c];
  }
  function s(a, d, b) {
    var c;
    return (c = e[d](a, b)) && l(m(c), e[d + "Exclusions"]);
  }
  function t(a, d, b) {
    var c;
    if (a && !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && w[c]) && (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c), b.a || b.t || b.s || !a.getAttribute || ((c = a.getAttribute("alt")) ? b.a = c : (c = a.getAttribute("title")) ? b.t = c : "IMG" == ("" + a.nodeName).toUpperCase() && (c = a.getAttribute("src") || a.src) && (b.s = c)), (c = a.childNodes) && c.length)) for (a = 0; a < c.length; a++) t(c[a], d, b);
  }
  function m(a) {
    if (null == a || void 0 == a) return a;
    try {
      return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}", "mg"), " ").substring(0, 254);
    } catch (d) {}
  }
  var e = this;
  e.s = k;
  var f = window;
  f.s_c_in || (f.s_c_il = [], f.s_c_in = 0);
  e._il = f.s_c_il;
  e._in = f.s_c_in;
  e._il[e._in] = e;
  f.s_c_in++;
  e._c = "s_m";
  var g = 0,
    u,
    v = 60;
  e.c = {};
  var w = {
    SCRIPT: 1,
    STYLE: 1,
    LINK: 1,
    CANVAS: 1
  };
  e._g = function () {
    var a,
      d,
      b,
      c = k.contextData,
      e = k.linkObject;
    (a = k.pageName || k.pageURL) && (d = s(e, "link", k.linkName)) && (b = s(e, "region")) && (c["a.activitymap.page"] = a.substring(0, 255), c["a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d, c["a.activitymap.region"] = 127 < b.length ? b.substring(0, 127) : b, 0 < g && (c["a.activitymap.xy"] = 10 * Math.floor(g / 10)), c["a.activitymap.pageIDType"] = k.pageName ? 1 : 0);
  };
  e._d = function () {
    e.trackScrollReach && !u && (e.scrollReachSelector ? q() : (p(), f.addEventListener && f.addEventListener("scroll", p, !1)), u = !0);
  };
  e.link = function (a, d) {
    var b;
    if (d) b = l(m(d), e.linkExclusions);else if ((b = a) && !(b = r(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
      var c, f;
      (f = l(m(a.innerText || a.textContent), e.linkExclusions)) || (t(a, c = [], b = {
        a: void 0,
        t: void 0,
        s: void 0
      }), (f = l(m(c.join("")))) || (f = l(m(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) || !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : "") || ("INPUT" == c || "SUBMIT" == c && a.value ? f = l(m(a.value)) : "IMAGE" == c && a.src && (f = l(m(a.src)))));
      b = f;
    }
    return b;
  };
  e.region = function (a) {
    for (var d, b = e.regionIDAttribute || "id"; a && (a = a.parentNode);) {
      if (d = r(a, b, b, b)) return d;
      if ("BODY" == a.nodeName) return "BODY";
    }
  };
}
function AppMeasurement(r) {
  var a = this;
  a.version = "2.22.4";
  var h = window;
  h.s_c_in || (h.s_c_il = [], h.s_c_in = 0);
  a._il = h.s_c_il;
  a._in = h.s_c_in;
  a._il[a._in] = a;
  h.s_c_in++;
  a._c = "s_c";
  var q = h.AppMeasurement.hc;
  q || (q = null);
  var p = h,
    m,
    s;
  try {
    for (m = p.parent, s = p.location; m && m.location && s && "" + m.location !== "" + s && p.location && "" + m.location !== "" + p.location && m.location.host === s.host;) p = m, m = p.parent;
  } catch (u) {}
  a.log = function (a) {
    try {
      console.log(a);
    } catch (b) {}
  };
  a.Qa = function (a) {
    return "" + parseInt(a) == "" + a;
  };
  a.replace = function (a, b, d) {
    return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d);
  };
  a.escape = function (c) {
    var b, d;
    if (!c) return c;
    c = encodeURIComponent(c);
    for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
    return c;
  };
  a.unescape = function (c) {
    if (!c) return c;
    c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
    try {
      return decodeURIComponent(c);
    } catch (b) {}
    return unescape(c);
  };
  a.Mb = function () {
    var c = h.location.hostname,
      b = a.fpCookieDomainPeriods,
      d;
    b || (b = a.cookieDomainPeriods);
    if (c && !a.Ja && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
      for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
      a.Ja = 0 < d ? c.substring(d) : c;
    }
    return a.Ja;
  };
  a.c_r = a.cookieRead = function (c) {
    c = a.escape(c);
    var b = " " + a.d.cookie,
      d = b.indexOf(" " + c + "="),
      f = 0 > d ? d : b.indexOf(";", d);
    c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
    return "[[B]]" != c ? c : "";
  };
  a.c_w = a.cookieWrite = function (c, b, d) {
    var f = a.Mb(),
      e = a.cookieLifetime,
      g;
    b = "" + b;
    e = e ? ("" + e).toUpperCase() : "";
    d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date(), d.setTime(d.getTime() + 1E3 * g)) : 1 === d && (d = new Date(), g = d.getYear(), d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
    return c && "NONE" != e ? (a.d.cookie = a.escape(c) + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toUTCString() + ";" : "") + (f ? " domain=" + f + ";" : "") + (a.writeSecureCookies ? " secure;" : ""), a.cookieRead(c) == b) : 0;
  };
  a.Jb = function () {
    var c = a.Util.getIeVersion();
    "number" === typeof c && 10 > c && (a.unsupportedBrowser = !0, a.wb(a, function () {}));
  };
  a.xa = function () {
    var a = navigator.userAgent;
    return "Microsoft Internet Explorer" === navigator.appName || 0 <= a.indexOf("MSIE ") || 0 <= a.indexOf("Trident/") && 0 <= a.indexOf("Windows NT 6") ? !0 : !1;
  };
  a.wb = function (a, b) {
    for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && "function" === typeof a[d] && (a[d] = b);
  };
  a.J = [];
  a.ea = function (c, b, d) {
    if (a.Ka) return 0;
    a.maxDelay || (a.maxDelay = 250);
    var f = 0,
      e = new Date().getTime() + a.maxDelay,
      g = a.d.visibilityState,
      k = ["webkitvisibilitychange", "visibilitychange"];
    g || (g = a.d.webkitVisibilityState);
    if (g && "prerender" == g) {
      if (!a.fa) for (a.fa = 1, d = 0; d < k.length; d++) a.d.addEventListener(k[d], function () {
        var c = a.d.visibilityState;
        c || (c = a.d.webkitVisibilityState);
        "visible" == c && (a.fa = 0, a.delayReady());
      });
      f = 1;
      e = 0;
    } else d || a.u("_d") && (f = 1);
    f && (a.J.push({
      m: c,
      a: b,
      t: e
    }), a.fa || setTimeout(a.delayReady, a.maxDelay));
    return f;
  };
  a.delayReady = function () {
    var c = new Date().getTime(),
      b = 0,
      d;
    for (a.u("_d") ? b = 1 : a.za(); 0 < a.J.length;) {
      d = a.J.shift();
      if (b && !d.t && d.t > c) {
        a.J.unshift(d);
        setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
        break;
      }
      a.Ka = 1;
      a[d.m].apply(a, d.a);
      a.Ka = 0;
    }
  };
  a.setAccount = a.sa = function (c) {
    var b, d;
    if (!a.ea("setAccount", arguments)) if (a.account = c, a.allAccounts) for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);else a.allAccounts = c.split(",");
  };
  a.foreachVar = function (c, b) {
    var d,
      f,
      e,
      g,
      k = "";
    e = f = "";
    if (a.lightProfileID) d = a.N, (k = a.lightTrackVars) && (k = "," + k + "," + a.ka.join(",") + ",");else {
      d = a.g;
      if (a.pe || a.linkType) k = a.linkTrackVars, f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (k = a[e].cc, f = a[e].bc));
      k && (k = "," + k + "," + a.D.join(",") + ",");
      f && k && (k += ",events,");
    }
    b && (b = "," + b + ",");
    for (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!k || 0 <= k.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g);
  };
  a.o = function (c, b, d, f, e) {
    var g = "",
      k,
      l,
      h,
      n,
      m = 0;
    "contextData" == c && (c = "c");
    if (b) {
      for (k in b) if (!(Object.prototype[k] || e && k.substring(0, e.length) != e) && b[k] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + k + ","))) {
        h = !1;
        if (m) for (l = 0; l < m.length; l++) if (k.substring(0, m[l].length) == m[l]) {
          h = !0;
          break;
        }
        if (!h && ("" == g && (g += "&" + c + "."), l = b[k], e && (k = k.substring(e.length)), 0 < k.length)) if (h = k.indexOf("."), 0 < h) l = k.substring(0, h), h = (e ? e : "") + l + ".", m || (m = []), m.push(h), g += a.o(l, b, d, f, h);else if ("boolean" == typeof l && (l = l ? "true" : "false"), l) {
          if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (h = k.substring(0, 4), n = k.substring(4), k) {
            case "transactionID":
              k = "xact";
              break;
            case "channel":
              k = "ch";
              break;
            case "campaign":
              k = "v0";
              break;
            default:
              a.Qa(n) && ("prop" == h ? k = "c" + n : "eVar" == h ? k = "v" + n : "list" == h ? k = "l" + n : "hier" == h && (k = "h" + n, l = l.substring(0, 255)));
          }
          g += "&" + a.escape(k) + "=" + a.escape(l);
        }
      }
      "" != g && (g += "&." + c);
    }
    return g;
  };
  a.usePostbacks = 0;
  a.Pb = function () {
    var c = "",
      b,
      d,
      f,
      e,
      g,
      k,
      l,
      h,
      n = "",
      m = "",
      p = e = "",
      r = a.S();
    if (a.lightProfileID) b = a.N, (n = a.lightTrackVars) && (n = "," + n + "," + a.ka.join(",") + ",");else {
      b = a.g;
      if (a.pe || a.linkType) n = a.linkTrackVars, m = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n = a[e].cc, m = a[e].bc));
      n && (n = "," + n + "," + a.D.join(",") + ",");
      m && (m = "," + m + ",", n && (n += ",events,"));
      a.events2 && (p += ("" != p ? "," : "") + a.events2);
    }
    if (r && r.getCustomerIDs) {
      e = q;
      if (g = r.getCustomerIDs()) for (d in g) Object.prototype[d] || (f = g[d], "object" == typeof f && (e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState)));
      e && (c += a.o("cid", e));
    }
    a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.o("d", a.AudienceManagement.getEventCallConfigParams()));
    for (d = 0; d < b.length; d++) {
      e = b[d];
      g = a[e];
      f = e.substring(0, 4);
      k = e.substring(4);
      g || ("events" == e && p ? (g = p, p = "") : "marketingCloudOrgID" == e && r && a.U("ECID") && (g = r.marketingCloudOrgID));
      if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
        switch (e) {
          case "customerPerspective":
            e = "cp";
            break;
          case "marketingCloudOrgID":
            e = "mcorgid";
            break;
          case "supplementalDataID":
            e = "sdid";
            break;
          case "timestamp":
            e = "ts";
            break;
          case "dynamicVariablePrefix":
            e = "D";
            break;
          case "visitorID":
            e = "vid";
            break;
          case "marketingCloudVisitorID":
            e = "mid";
            break;
          case "analyticsVisitorID":
            e = "aid";
            break;
          case "audienceManagerLocationHint":
            e = "aamlh";
            break;
          case "audienceManagerBlob":
            e = "aamb";
            break;
          case "authState":
            e = "as";
            break;
          case "pageURL":
            e = "g";
            255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
            break;
          case "pageURLRest":
            e = "-g";
            break;
          case "referrer":
            e = "r";
            break;
          case "vmk":
          case "visitorMigrationKey":
            e = "vmt";
            break;
          case "visitorMigrationServer":
            e = "vmf";
            a.ssl && a.visitorMigrationServerSecure && (g = "");
            break;
          case "visitorMigrationServerSecure":
            e = "vmf";
            !a.ssl && a.visitorMigrationServer && (g = "");
            break;
          case "charSet":
            e = "ce";
            break;
          case "visitorNamespace":
            e = "ns";
            break;
          case "cookieDomainPeriods":
            e = "cdp";
            break;
          case "cookieLifetime":
            e = "cl";
            break;
          case "variableProvider":
            e = "vvp";
            break;
          case "currencyCode":
            e = "cc";
            break;
          case "channel":
            e = "ch";
            break;
          case "transactionID":
            e = "xact";
            break;
          case "campaign":
            e = "v0";
            break;
          case "latitude":
            e = "lat";
            break;
          case "longitude":
            e = "lon";
            break;
          case "resolution":
            e = "s";
            break;
          case "colorDepth":
            e = "c";
            break;
          case "javascriptVersion":
            e = "j";
            break;
          case "javaEnabled":
            e = "v";
            break;
          case "cookiesEnabled":
            e = "k";
            break;
          case "browserWidth":
            e = "bw";
            break;
          case "browserHeight":
            e = "bh";
            break;
          case "connectionType":
            e = "ct";
            break;
          case "homepage":
            e = "hp";
            break;
          case "events":
            p && (g += ("" != g ? "," : "") + p);
            if (m) for (k = g.split(","), g = "", f = 0; f < k.length; f++) l = k[f], h = l.indexOf("="), 0 <= h && (l = l.substring(0, h)), h = l.indexOf(":"), 0 <= h && (l = l.substring(0, h)), 0 <= m.indexOf("," + l + ",") && (g += (g ? "," : "") + k[f]);
            break;
          case "events2":
            g = "";
            break;
          case "contextData":
            c += a.o("c", a[e], n, e);
            g = "";
            break;
          case "lightProfileID":
            e = "mtp";
            break;
          case "lightStoreForSeconds":
            e = "mtss";
            a.lightProfileID || (g = "");
            break;
          case "lightIncrementBy":
            e = "mti";
            a.lightProfileID || (g = "");
            break;
          case "retrieveLightProfiles":
            e = "mtsr";
            break;
          case "deleteLightProfiles":
            e = "mtsd";
            break;
          case "retrieveLightData":
            a.retrieveLightProfiles && (c += a.o("mts", a[e], n, e));
            g = "";
            break;
          default:
            a.Qa(k) && ("prop" == f ? e = "c" + k : "eVar" == f ? e = "v" + k : "list" == f ? e = "l" + k : "hier" == f && (e = "h" + k, g = g.substring(0, 255)));
        }
        g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g));
      }
      "pev3" == e && a.e && (c += a.e);
    }
    a.ja && (c += "&lrt=" + a.ja, a.ja = null);
    return c;
  };
  a.B = function (a) {
    var b = a.tagName;
    if ("undefined" != "" + a.kc || "undefined" != "" + a.Yb && "HTML" != ("" + a.Yb).toUpperCase()) return "";
    b = b && b.toUpperCase ? b.toUpperCase() : "";
    "SHAPE" == b && (b = "");
    b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
    return b;
  };
  a.Ma = function (a) {
    var b = h.location,
      d = a.href ? a.href : "",
      f,
      e,
      g;
    "string" !== typeof d && (d = "");
    f = d.indexOf(":");
    e = d.indexOf("?");
    g = d.indexOf("/");
    d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : "", f = b.pathname.lastIndexOf("/"), d = (e ? e + "//" : "") + (a.host ? a.host : b.host ? b.host : "") + ("/" != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d);
    return d;
  };
  a.K = function (c) {
    var b = a.B(c),
      d,
      f,
      e = "",
      g = 0;
    return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : "IMAGE" == b && c.src && (e = c.src) : e = a.Ma(c), e) ? {
      id: e.substring(0, 100),
      type: g
    } : 0;
  };
  a.ic = function (c) {
    for (var b = a.B(c), d = a.K(c); c && !d && "BODY" != b;) if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.B(c), d = a.K(c);
    d && "BODY" != b || (c = 0);
    c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
    return c;
  };
  a.Xb = function () {
    var c,
      b,
      d = a.linkObject,
      f = a.linkType,
      e = a.linkURL,
      g,
      k;
    a.la = 1;
    d || (a.la = 0, d = a.clickObject);
    if (d) {
      c = a.B(d);
      for (b = a.K(d); d && !b && "BODY" != c;) if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.B(d), b = a.K(d);
      b && "BODY" != c || (d = 0);
      if (d && !a.linkObject) {
        var l = d.onclick ? "" + d.onclick : "";
        if (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) d = 0;
      }
    } else a.la = 1;
    !e && d && (e = a.Ma(d));
    e && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
    if (!f && e) {
      var m = 0,
        n = 0,
        p;
      if (a.trackDownloadLinks && a.linkDownloadFileTypes) for (l = e.toLowerCase(), g = l.indexOf("?"), k = l.indexOf("#"), 0 <= g ? 0 <= k && k < g && (g = k) : g = k, 0 <= g && (l = l.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), k = 0; k < g.length; k++) (p = g[k]) && l.substring(l.length - (p.length + 1)) == "." + p && (f = "d");
      if (a.trackExternalLinks && !f && (l = e.toLowerCase(), a.Pa(l) && (a.linkInternalFilters || (a.linkInternalFilters = h.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), m = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
        for (k = 0; k < g.length; k++) p = g[k], 0 <= l.indexOf(p) && (n = 1);
        n ? m && (f = "e") : m || (f = "e");
      }
    }
    a.linkObject = d;
    a.linkURL = e;
    a.linkType = f;
    if (a.trackClickMap || a.trackInlineStats) a.e = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), h.s_objectID && (b.id = h.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")));
  };
  a.Qb = function () {
    var c = a.la,
      b = a.linkType,
      d = a.linkURL,
      f = a.linkName;
    b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
    a.abort && (c = 0);
    if (a.trackClickMap || a.trackInlineStats || a.Tb()) {
      var b = {},
        d = 0,
        e = a.qb(),
        g = e ? e.split("&") : 0,
        k,
        l,
        h,
        e = 0;
      if (g) for (k = 0; k < g.length; k++) l = g[k].split("="), f = a.unescape(l[0]).split(","), l = a.unescape(l[1]), b[l] = f;
      f = a.account.split(",");
      k = {};
      for (h in a.contextData) h && !Object.prototype[h] && "a.activitymap." == h.substring(0, 14) && (k[h] = a.contextData[h], a.contextData[h] = "");
      a.e = a.o("c", k) + (a.e ? a.e : "");
      if (c || a.e) {
        c && !a.e && (e = 1);
        for (l in b) if (!Object.prototype[l]) for (h = 0; h < f.length; h++) for (e && (g = b[l].join(","), g == a.account && (a.e += ("&" != l.charAt(0) ? "&" : "") + l, b[l] = [], d = 1)), k = 0; k < b[l].length; k++) g = b[l][k], g == f[h] && (e && (a.e += "&u=" + a.escape(g) + ("&" != l.charAt(0) ? "&" : "") + l + "&u=0"), b[l].splice(k, 1), d = 1);
        c || (d = 1);
        if (d) {
          e = "";
          k = 2;
          !c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e), k = 1);
          for (l in b) !Object.prototype[l] && 0 < k && 0 < b[l].length && (e += (e ? "&" : "") + a.escape(b[l].join(",")) + "=" + a.escape(l), k--);
          a.yb(e);
        }
      }
    }
    return c;
  };
  a.qb = function () {
    if (a.useLinkTrackSessionStorage) {
      if (a.Da()) return h.sessionStorage.getItem(a.O);
    } else return a.cookieRead(a.O);
  };
  a.Da = function () {
    return h.sessionStorage ? !0 : !1;
  };
  a.yb = function (c) {
    a.useLinkTrackSessionStorage ? a.Da() && h.sessionStorage.setItem(a.O, c) : a.cookieWrite(a.O, c);
  };
  a.Rb = function () {
    if (!a.ac) {
      var c = new Date(),
        b = p.location,
        d,
        f,
        e = f = d = "",
        g = "",
        k = "",
        l = "1.2",
        h = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
        m = "",
        q = "";
      if (c.setUTCDate && (l = "1.3", 0 .toPrecision && (l = "1.5", c = [], c.forEach))) {
        l = "1.6";
        f = 0;
        d = {};
        try {
          f = new Iterator(d), f.next && (l = "1.7", c.reduce && (l = "1.8", l.trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5")))));
        } catch (r) {}
      }
      d = screen.width + "x" + screen.height;
      e = navigator.javaEnabled() ? "Y" : "N";
      f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
      g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
      k = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
      try {
        a.b.addBehavior("#default#homePage"), m = a.b.jc(b) ? "Y" : "N";
      } catch (s) {}
      try {
        a.b.addBehavior("#default#clientCaps"), q = a.b.connectionType;
      } catch (t) {}
      a.resolution = d;
      a.colorDepth = f;
      a.javascriptVersion = l;
      a.javaEnabled = e;
      a.cookiesEnabled = h;
      a.browserWidth = g;
      a.browserHeight = k;
      a.connectionType = q;
      a.homepage = m;
      a.ac = 1;
    }
  };
  a.P = {};
  a.loadModule = function (c, b) {
    var d = a.P[c];
    if (!d) {
      d = h["AppMeasurement_Module_" + c] ? new h["AppMeasurement_Module_" + c](a) : {};
      a.P[c] = a[c] = d;
      d.jb = function () {
        return d.tb;
      };
      d.zb = function (b) {
        if (d.tb = b) a[c + "_onLoad"] = b, a.ea(c + "_onLoad", [a, d], 1) || b(a, d);
      };
      try {
        Object.defineProperty ? Object.defineProperty(d, "onLoad", {
          get: d.jb,
          set: d.zb
        }) : d._olc = 1;
      } catch (f) {
        d._olc = 1;
      }
    }
    b && (a[c + "_onLoad"] = b, a.ea(c + "_onLoad", [a, d], 1) || b(a, d));
  };
  a.u = function (c) {
    var b, d;
    for (b in a.P) if (!Object.prototype[b] && (d = a.P[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
    return 0;
  };
  a.Tb = function () {
    return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
  };
  a.Ub = function () {
    var c = Math.floor(1E13 * Math.random()),
      b = a.visitorSampling,
      d = a.visitorSamplingGroup,
      d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
      f = a.cookieRead(d);
    if (b) {
      b *= 100;
      f && (f = parseInt(f));
      if (!f) {
        if (!a.cookieWrite(d, c)) return 0;
        f = c;
      }
      if (f % 1E4 > b) return 0;
    }
    return 1;
  };
  a.R = function (c, b) {
    var d, f, e, g, k, h, m;
    m = {};
    for (d = 0; 2 > d; d++) for (f = 0 < d ? a.Fa : a.g, e = 0; e < f.length; e++) if (g = f[e], (k = c[g]) || c["!" + g]) {
      if (k && !b && ("contextData" == g || "retrieveLightData" == g) && a[g]) for (h in a[g]) k[h] || (k[h] = a[g][h]);
      a[g] || (m["!" + g] = 1);
      m[g] = a[g];
      a[g] = k;
    }
    return m;
  };
  a.gc = function (c) {
    var b, d, f, e;
    for (b = 0; 2 > b; b++) for (d = 0 < b ? a.Fa : a.g, f = 0; f < d.length; f++) e = d[f], c[e] = a[e], c[e] || "prop" !== e.substring(0, 4) && "eVar" !== e.substring(0, 4) && "hier" !== e.substring(0, 4) && "list" !== e.substring(0, 4) && "channel" !== e && "events" !== e && "eventList" !== e && "products" !== e && "productList" !== e && "purchaseID" !== e && "transactionID" !== e && "state" !== e && "zip" !== e && "campaign" !== e && "events2" !== e && "latitude" !== e && "longitude" !== e && "ms_a" !== e && "contextData" !== e && "supplementalDataID" !== e && "tnt" !== e && "timestamp" !== e && "abort" !== e && "useBeacon" !== e && "linkObject" !== e && "clickObject" !== e && "linkType" !== e && "linkName" !== e && "linkURL" !== e && "bodyClickTarget" !== e && "bodyClickFunction" !== e || (c["!" + e] = 1);
  };
  a.Lb = function (a) {
    var b,
      d,
      f,
      e,
      g,
      k = 0,
      h,
      m = "",
      n = "";
    if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (h = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? k = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") ? k = ",p,ei," : 0 <= e.indexOf("baidu.") && (k = ",wd,word,"), k && h)))) {
      if ((a = h.split("&")) && 1 < a.length) {
        for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= k.indexOf("," + e.substring(0, d) + ",") ? m += (m ? "&" : "") + e : n += (n ? "&" : "") + e;
        m && n ? h = m + "&" + n : n = "";
      }
      d = 253 - (h.length - n.length) - b.length;
      a = b + (0 < d ? g.substring(0, d) : "") + "?" + h;
    }
    return a;
  };
  a.cb = function (c) {
    var b = a.d.visibilityState,
      d = ["webkitvisibilitychange", "visibilitychange"];
    b || (b = a.d.webkitVisibilityState);
    if (b && "prerender" == b) {
      if (c) for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function () {
        var b = a.d.visibilityState;
        b || (b = a.d.webkitVisibilityState);
        "visible" == b && c();
      });
      return !1;
    }
    return !0;
  };
  a.ba = !1;
  a.G = !1;
  a.Bb = function () {
    a.G = !0;
    a.p();
  };
  a.H = !1;
  a.Cb = function (c) {
    a.marketingCloudVisitorID = c.MCMID;
    a.visitorOptedOut = c.MCOPTOUT;
    a.analyticsVisitorID = c.MCAID;
    a.audienceManagerLocationHint = c.MCAAMLH;
    a.audienceManagerBlob = c.MCAAMB;
    a.H = !1;
    a.p();
  };
  a.bb = function (c) {
    a.maxDelay || (a.maxDelay = 250);
    return a.u("_d") ? (c && setTimeout(function () {
      c();
    }, a.maxDelay), !1) : !0;
  };
  a.Z = !1;
  a.F = !1;
  a.za = function () {
    a.F = !0;
    a.p();
  };
  a.isReadyToTrack = function () {
    var c = !0;
    if (!a.nb() || !a.lb()) return !1;
    a.pb() || (c = !1);
    a.sb() || (c = !1);
    return c;
  };
  a.nb = function () {
    a.ba || a.G || (a.cb(a.Bb) ? a.G = !0 : a.ba = !0);
    return a.ba && !a.G ? !1 : !0;
  };
  a.lb = function () {
    var c = a.va();
    if (c) if (a.ra || a.aa) {
      if (a.ra) {
        if (!c.isApproved(c.Categories.ANALYTICS)) return !1;
      } else return !1;
    } else return c.fetchPermissions(a.ub, !0), a.aa = !0, !1;
    return !0;
  };
  a.U = function (c) {
    var b = a.va();
    return b && !b.isApproved(b.Categories[c]) ? !1 : !0;
  };
  a.va = function () {
    return h.adobe && h.adobe.optIn ? h.adobe.optIn : null;
  };
  a.X = !0;
  a.pb = function () {
    var c = a.S();
    if (!c || !c.getVisitorValues) return !0;
    a.X && (a.X = !1, a.H || (a.H = !0, c.getVisitorValues(a.Cb)));
    return !a.H;
  };
  a.S = function () {
    var c = a.visitor;
    c && !c.isAllowed() && (c = null);
    return c;
  };
  a.sb = function () {
    a.Z || a.F || (a.bb(a.za) ? a.F = !0 : a.Z = !0);
    return a.Z && !a.F ? !1 : !0;
  };
  a.aa = !1;
  a.ub = function () {
    a.aa = !1;
    a.ra = !0;
  };
  a.j = q;
  a.q = 0;
  a.callbackWhenReadyToTrack = function (c, b, d) {
    var f;
    f = {};
    f.Gb = c;
    f.Fb = b;
    f.Db = d;
    a.j == q && (a.j = []);
    a.j.push(f);
    0 == a.q && (a.q = setInterval(a.p, 100));
  };
  a.p = function () {
    var c;
    if (a.isReadyToTrack() && (a.Ab(), a.j != q)) for (; 0 < a.j.length;) c = a.j.shift(), c.Fb.apply(c.Gb, c.Db);
  };
  a.Ab = function () {
    a.q && (clearInterval(a.q), a.q = 0);
  };
  a.ta = function (c) {
    var b,
      d = {};
    a.gc(d);
    if (c != q) for (b in c) d[b] = c[b];
    a.callbackWhenReadyToTrack(a, a.Ea, [d]);
    a.Ca();
  };
  a.Nb = function () {
    var c = a.cookieRead("s_fid"),
      b = "",
      d = "",
      f;
    f = 8;
    var e = 4;
    if (!c || 0 > c.indexOf("-")) {
      for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
      c = b + "-" + d;
    }
    a.cookieWrite("s_fid", c, 1) || (c = 0);
    return c;
  };
  a.Ea = function (c) {
    var b = new Date(),
      d = "s" + Math.floor(b.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()),
      f = b.getYear(),
      f = "t=" + a.escape(b.getDate() + "/" + b.getMonth() + "/" + (1900 > f ? f + 1900 : f) + " " + b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds() + " " + b.getDay() + " " + b.getTimezoneOffset()),
      e = a.S(),
      g;
    c && (g = a.R(c, 1));
    a.Ub() && !a.visitorOptedOut && (a.wa() || (a.fid = a.Nb()), a.Xb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(b.getTime() / 1E3)), c = h.location, a.pageURL || (a.pageURL = c.href ? c.href : c), a.referrer || a.Za || (c = a.Util.getQueryParam("adobe_mc_ref", null, null, !0), a.referrer = c || void 0 === c ? void 0 === c ? "" : c : p.document.referrer), a.Za = 1, !a.referrer && a.Y && (a.referrer = a.Y), a.Y = 0, a.referrer = a.Lb(a.referrer), a.u("_g")), a.Qb() && !a.abort && (e && a.U("TARGET") && !a.supplementalDataID && e.getSupplementalDataID && (a.supplementalDataID = e.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)), a.U("AAM") || (a.contextData["cm.ssf"] = 1), a.Rb(), a.vb(), f += a.Pb(), a.rb(d, f), a.u("_t"), a.referrer = "")));
    a.referrer && (a.Y = a.referrer);
    a.Ca();
    g && a.R(g, 1);
  };
  a.t = a.track = function (c, b) {
    b && a.R(b);
    a.X = !0;
    a.isReadyToTrack() ? null != a.j && 0 < a.j.length ? (a.ta(c), a.p()) : a.Ea(c) : a.ta(c);
  };
  a.vb = function () {
    a.writeSecureCookies && !a.ssl && a.$a();
  };
  a.$a = function () {
    a.contextData.excCodes = a.contextData.excCodes ? a.contextData.excCodes : [];
    a.contextData.excCodes.push(1);
  };
  a.Ca = function () {
    a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = a.useBeacon = a.referrer = 0;
    a.contextData && a.contextData.excCodes && (a.contextData.excCodes = 0);
  };
  a.Ba = [];
  a.registerPreTrackCallback = function (c) {
    for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
    "function" == typeof c ? a.Ba.push([c, b]) : a.debugTracking && a.log("Warning, Non function type passed to registerPreTrackCallback");
  };
  a.gb = function (c) {
    a.ua(a.Ba, c);
  };
  a.Aa = [];
  a.registerPostTrackCallback = function (c) {
    for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
    "function" == typeof c ? a.Aa.push([c, b]) : a.debugTracking && a.log("Warning, Non function type passed to registerPostTrackCallback");
  };
  a.fb = function (c) {
    a.ua(a.Aa, c);
  };
  a.ua = function (c, b) {
    if ("object" == typeof c) for (var d = 0; d < c.length; d++) {
      var f = c[d][0],
        e = c[d][1].slice();
      e.unshift(b);
      if ("function" == typeof f) try {
        f.apply(null, e);
      } catch (g) {
        a.debugTracking && a.log(g.message);
      }
    }
  };
  a.tl = a.trackLink = function (c, b, d, f, e) {
    a.linkObject = c;
    a.linkType = b;
    a.linkName = d;
    e && (a.bodyClickTarget = c, a.bodyClickFunction = e);
    return a.track(f);
  };
  a.trackLight = function (c, b, d, f) {
    a.lightProfileID = c;
    a.lightStoreForSeconds = b;
    a.lightIncrementBy = d;
    return a.track(f);
  };
  a.clearVars = function () {
    var c, b;
    for (c = 0; c < a.g.length; c++) if (b = a.g[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] = void 0;
  };
  a.tagContainerMarker = "";
  a.rb = function (c, b) {
    var d = a.hb() + "/" + c + "?AQB=1&ndh=1&pf=1&" + (a.ya() ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1";
    a.gb(d);
    a.eb(d);
    a.T();
  };
  a.hb = function () {
    var c = a.ib();
    return "http" + (a.ssl ? "s" : "") + "://" + c + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (a.ya() ? "10" : "1") + "/JS-" + a.version + (a.$b ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "");
  };
  a.ya = function () {
    return a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks;
  };
  a.ib = function () {
    var c = a.dc,
      b = a.trackingServer;
    b ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure) : (c = c ? ("" + c).toLowerCase() : "d1", "d1" == c ? c = "112" : "d2" == c && (c = "122"), b = a.kb() + "." + c + ".2o7.net");
    return b;
  };
  a.kb = function () {
    var c = a.visitorNamespace;
    c || (c = a.account.split(",")[0], c = c.replace(/[^0-9a-z]/gi, ""));
    return c;
  };
  a.Ya = /{(%?)(.*?)(%?)}/;
  a.fc = RegExp(a.Ya.source, "g");
  a.Kb = function (c) {
    if ("object" == typeof c.dests) for (var b = 0; b < c.dests.length; ++b) {
      var d = c.dests[b];
      if ("string" == typeof d.c && "aa." == d.id.substr(0, 3)) for (var f = d.c.match(a.fc), e = 0; e < f.length; ++e) {
        var g = f[e],
          k = g.match(a.Ya),
          h = "";
        "%" == k[1] && "timezone_offset" == k[2] ? h = new Date().getTimezoneOffset() : "%" == k[1] && "timestampz" == k[2] && (h = a.Ob());
        d.c = d.c.replace(g, a.escape(h));
      }
    }
  };
  a.Ob = function () {
    var c = new Date(),
      b = new Date(6E4 * Math.abs(c.getTimezoneOffset()));
    return a.k(4, c.getFullYear()) + "-" + a.k(2, c.getMonth() + 1) + "-" + a.k(2, c.getDate()) + "T" + a.k(2, c.getHours()) + ":" + a.k(2, c.getMinutes()) + ":" + a.k(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a.k(2, b.getUTCHours()) + ":" + a.k(2, b.getUTCMinutes());
  };
  a.k = function (a, b) {
    return (Array(a + 1).join(0) + b).slice(-a);
  };
  a.pa = {};
  a.doPostbacks = function (c) {
    if ("object" == typeof c) if (a.Kb(c), "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData) a.AudienceManagement.passData(c);else if ("object" == typeof c && "object" == typeof c.dests) for (var b = 0; b < c.dests.length; ++b) {
      var d = c.dests[b];
      "object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0, 3) && (a.pa[d.id] = new Image(), a.pa[d.id].alt = "", a.pa[d.id].src = d.c);
    }
  };
  a.eb = function (c) {
    a.i || a.Sb();
    a.i.push(c);
    a.ia = a.A();
    a.Xa();
  };
  a.Sb = function () {
    a.i = a.Vb();
    a.i || (a.i = []);
  };
  a.Vb = function () {
    var c, b;
    if (a.oa()) {
      try {
        (b = h.localStorage.getItem(a.ma())) && (c = h.JSON.parse(b));
      } catch (d) {}
      return c;
    }
  };
  a.oa = function () {
    var c = !0;
    a.trackOffline && a.offlineFilename && h.localStorage && h.JSON || (c = !1);
    return c;
  };
  a.Na = function () {
    var c = 0;
    a.i && (c = a.i.length);
    a.l && c++;
    return c;
  };
  a.T = function () {
    if (a.l && (a.v && a.v.complete && a.v.C && a.v.Q(), a.l)) return;
    a.Oa = q;
    if (a.na) a.ia > a.M && a.Va(a.i), a.qa(500);else {
      var c = a.Eb();
      if (0 < c) a.qa(c);else if (c = a.La()) a.l = 1, a.Wb(c), a.Zb(c);
    }
  };
  a.qa = function (c) {
    a.Oa || (c || (c = 0), a.Oa = setTimeout(a.T, c));
  };
  a.Eb = function () {
    var c;
    if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
    c = a.A() - a.Ta;
    return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
  };
  a.La = function () {
    if (0 < a.i.length) return a.i.shift();
  };
  a.Wb = function (c) {
    if (a.debugTracking) {
      var b = "AppMeasurement Debug: " + c;
      c = c.split("&");
      var d;
      for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
      a.log(b);
    }
  };
  a.wa = function () {
    return a.marketingCloudVisitorID || a.analyticsVisitorID;
  };
  a.W = !1;
  var t;
  try {
    t = JSON.parse('{"x":"y"}');
  } catch (v) {
    t = null;
  }
  t && "y" == t.x ? (a.W = !0, a.V = function (a) {
    return JSON.parse(a);
  }) : h.$ && h.$.parseJSON ? (a.V = function (a) {
    return h.$.parseJSON(a);
  }, a.W = !0) : a.V = function () {
    return null;
  };
  a.Zb = function (c) {
    var b, d, f;
    a.mb(c) && (d = 1, b = {
      send: function (c) {
        a.useBeacon = !1;
        navigator.sendBeacon(c) ? b.Q() : b.ga();
      }
    });
    !b && a.wa() && 2047 < c.length && (a.ab() && (d = 2, b = new XMLHttpRequest()), b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.W ? b.Ga = !0 : b = 0));
    !b && a.ec && (c = c.substring(0, 2047));
    !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 3) : b = 0);
    b || (b = new Image(), b.alt = "", b.abort || "undefined" === typeof h.InstallTrigger || (b.abort = function () {
      b.src = q;
    }));
    b.Ua = Date.now();
    b.Ia = function () {
      try {
        b.C && (clearTimeout(b.C), b.C = 0);
      } catch (a) {}
    };
    b.onload = b.Q = function () {
      b.Ua && (a.ja = Date.now() - b.Ua);
      a.fb(c);
      b.Ia();
      a.Ib();
      a.ca();
      a.l = 0;
      a.T();
      if (b.Ga) {
        b.Ga = !1;
        try {
          a.doPostbacks(a.V(b.responseText));
        } catch (d) {}
      }
    };
    b.onabort = b.onerror = b.ga = function () {
      b.Ia();
      (a.trackOffline || a.na) && a.l && a.i.unshift(a.Hb);
      a.l = 0;
      a.ia > a.M && a.Va(a.i);
      a.ca();
      a.qa(500);
    };
    b.onreadystatechange = function () {
      4 == b.readyState && (200 == b.status ? b.Q() : b.ga());
    };
    a.Ta = a.A();
    if (1 === d) b.send(c);else if (2 === d) f = c.indexOf("?"), d = c.substring(0, f), f = c.substring(f + 1), f = f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), b.open("POST", d, !0), b.withCredentials = !0, b.send(f);else if (b.src = c, 3 === d) {
      if (a.Ra) try {
        f.removeChild(a.Ra);
      } catch (e) {}
      f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
      a.Ra = a.v;
    }
    b.C = setTimeout(function () {
      b.C && (b.complete ? b.Q() : (a.trackOffline && b.abort && b.abort(), b.ga()));
    }, 5E3);
    a.Hb = c;
    a.v = h["s_i_" + a.replace(a.account, ",", "_")] = b;
    if (a.useForcedLinkTracking && a.I || a.bodyClickFunction) a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.da = setTimeout(a.ca, a.forcedLinkTrackingTimeout);
  };
  a.mb = function (c) {
    var b = !1;
    navigator.sendBeacon && (a.ob(c) ? b = !0 : a.useBeacon && (b = !0));
    a.xb(c) && (b = !1);
    return b;
  };
  a.ob = function (a) {
    return a && 0 < a.indexOf("pe=lnk_e") ? !0 : !1;
  };
  a.xb = function (a) {
    return 64E3 <= a.length;
  };
  a.ab = function () {
    return "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest() ? !0 : !1;
  };
  a.Ib = function () {
    if (a.oa() && !(a.Sa > a.M)) try {
      h.localStorage.removeItem(a.ma()), a.Sa = a.A();
    } catch (c) {}
  };
  a.Va = function (c) {
    if (a.oa()) {
      a.Xa();
      try {
        h.localStorage.setItem(a.ma(), h.JSON.stringify(c)), a.M = a.A();
      } catch (b) {}
    }
  };
  a.Xa = function () {
    if (a.trackOffline) {
      if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
      for (; a.i.length > a.offlineLimit;) a.La();
    }
  };
  a.forceOffline = function () {
    a.na = !0;
  };
  a.forceOnline = function () {
    a.na = !1;
  };
  a.ma = function () {
    return a.offlineFilename + "-" + a.visitorNamespace + a.account;
  };
  a.A = function () {
    return new Date().getTime();
  };
  a.Pa = function (a) {
    a = a.toLowerCase();
    return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1;
  };
  a.setTagContainer = function (c) {
    var b, d, f;
    a.$b = c;
    for (b = 0; b < a._il.length; b++) if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
      a.R(d);
      if (d.lmq) for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
      if (d.ml) for (f in d.ml) if (a[f]) for (b in c = a[f], f = d.ml[f], f) !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
      if (d.mmq) for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
      if (d.tq) for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
      d.s = a;
      break;
    }
  };
  a.Util = {
    urlEncode: a.escape,
    urlDecode: a.unescape,
    cookieRead: a.cookieRead,
    cookieWrite: a.cookieWrite,
    getQueryParam: function (c, b, d, f) {
      var e,
        g = "";
      b || (b = a.pageURL ? a.pageURL : h.location);
      d = d ? d : "&";
      if (!c || !b) return g;
      b = "" + b;
      e = b.indexOf("?");
      if (0 > e) return g;
      b = d + b.substring(e + 1) + d;
      if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + "=" + d))) {
        e = b.indexOf("#");
        0 <= e && (b = b.substr(0, e) + d);
        e = b.indexOf(d + c + "=");
        if (0 > e) return g;
        b = b.substring(e + d.length + c.length + 1);
        e = b.indexOf(d);
        0 <= e && (b = b.substring(0, e));
        0 < b.length && (g = a.unescape(b));
        return g;
      }
    },
    getIeVersion: function () {
      return document.documentMode ? document.documentMode : a.xa() ? 7 : null;
    }
  };
  a.D = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData contextData.cm.ssf contextData.opt.dmp contextData.opt.sell currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
  a.g = a.D.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
  a.ka = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
  a.N = a.ka.slice(0);
  a.Fa = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" ");
  for (m = 0; 250 >= m; m++) 76 > m && (a.g.push("prop" + m), a.N.push("prop" + m)), a.g.push("eVar" + m), a.N.push("eVar" + m), 6 > m && a.g.push("hier" + m), 4 > m && a.g.push("list" + m);
  m = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");
  a.g = a.g.concat(m);
  a.D = a.D.concat(m);
  a.ssl = 0 <= h.location.protocol.toLowerCase().indexOf("https");
  a.charSet = "UTF-8";
  a.contextData = {};
  a.writeSecureCookies = !1;
  a.offlineThrottleDelay = 0;
  a.offlineFilename = "AppMeasurement.offline";
  a.O = "s_sq";
  a.Ta = 0;
  a.ia = 0;
  a.M = 0;
  a.Sa = 0;
  a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
  a.w = h;
  a.d = h.document;
  a.ca = function () {
    a.da && (h.clearTimeout(a.da), a.da = q);
    a.bodyClickTarget && a.I && a.bodyClickTarget.dispatchEvent(a.I);
    a.bodyClickFunction && ("function" == typeof a.bodyClickFunction ? a.bodyClickFunction() : a.bodyClickTarget && a.bodyClickTarget.href && (a.d.location = a.bodyClickTarget.href));
    a.bodyClickTarget = a.I = a.bodyClickFunction = 0;
  };
  a.Wa = function () {
    a.b = a.d.body;
    a.b ? (a.r = function (c) {
      var b, d, f, e, g;
      if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
        if (a.Ha) {
          if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.r, !1);else {
            a.b.removeEventListener("click", a.r, !0);
            a.Ha = a.useForcedLinkTracking = 0;
            return;
          }
        } else a.useForcedLinkTracking = 0;
        a.clickObject = c.srcElement ? c.srcElement : c.target;
        try {
          if (!a.clickObject || a.L && a.L == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = 0;else {
            var k = a.L = a.clickObject;
            a.ha && (clearTimeout(a.ha), a.ha = 0);
            a.ha = setTimeout(function () {
              a.L == k && (a.L = 0);
            }, 1E4);
            f = a.Na();
            a.track();
            if (f < a.Na() && a.useForcedLinkTracking && c.target) {
              for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
              if (e && (g = e.href, a.Pa(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || h.name && d == h.name))) {
                try {
                  b = a.d.createEvent("MouseEvents");
                } catch (l) {
                  b = new h.MouseEvent();
                }
                if (b) {
                  try {
                    b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget);
                  } catch (m) {
                    b = 0;
                  }
                  b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.bodyClickTarget = c.target, a.I = b);
                }
              }
            }
          }
        } catch (n) {
          a.clickObject = 0;
        }
      }
    }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.r) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && h.MouseEvent) && (a.Ha = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.r, !0)), a.b.addEventListener("click", a.r, !1))) : setTimeout(a.Wa, 30);
  };
  a.ec = a.xa();
  a.Jb();
  a.lc || (r ? a.setAccount(r) : a.log("Error, missing Report Suite ID in AppMeasurement initialization"), a.Wa(), a.loadModule("ActivityMap"));
}
function s_gi(r) {
  var a,
    h = window.s_c_il,
    q,
    p,
    m = r.split(","),
    s,
    u,
    t = 0;
  if (h) for (q = 0; !t && q < h.length;) {
    a = h[q];
    if ("s_c" == a._c && (a.account || a.oun)) if (a.account && a.account == r) t = 1;else for (p = a.account ? a.account : a.oun, p = a.allAccounts ? a.allAccounts : p.split(","), s = 0; s < m.length; s++) for (u = 0; u < p.length; u++) m[s] == p[u] && (t = 1);
    q++;
  }
  t ? a.setAccount && a.setAccount(r) : a = new AppMeasurement(r);
  return a;
}
AppMeasurement.getInstance = s_gi;
function createPristineCallable(functionName, originalFunc, payloadSchema) {
  return function () {
    const args = Array.from(arguments);
    const payload = {
      functionName,
      args,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, payloadSchema)) sendPayloadToServer(payload);
    return originalFunc.apply(this, args);
  };
}
window.s_objectID || (window.s_objectID = 0);
Object.keys(originalFunctions).forEach(funcName => {
  const originalFunc = originalFunctions[funcName];
  const ESAddEventListener = originalFunctions.EventSource.prototype.addEventListener;
  const originalSetItem = originalFunctions.localStorageSetItem;
  if (typeof originalFunc === 'function') {
    window[funcName] = createPristineCallable(funcName, originalFunc, hooksConfig.find(hook => hook.functionName === funcName)?.payloadSchema);
    window.localStorage.setItem = createPristineCallable('localStorage.setItem', originalSetItem, hooksConfig.find(hook => hook.functionName === 'localStorage.setItem')?.payloadSchema);
    EventSource.prototype.addEventListener = createPristineCallable('EventSource.addListener', ESAddEventListener, hooksConfig.find(hook => hook.functionName === 'EventSource.addListener')?.payloadSchema);
  }
  window.addEventListener = createPristineCallable('window.addEventListener', window.addEventListener, hooksConfig.find(hook => hook.functionName === 'window.addEventListener')?.payloadSchema);
});
function s_pgicq() {
  var r = window,
    a = r.s_giq,
    h,
    q,
    p;
  if (a) for (h = 0; h < a.length; h++) q = a[h], p = s_gi(q.oun), p.setAccount(q.un), p.setTagContainer(q.tagContainerName);
  r.s_giq = 0;
}
s_pgicq();
try {
  (function (id, loader) {
    window.utag.tagsettings = window.utag.tagsettings || {};
    window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
    var vAPI = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || function () {
      return {
        getInstance: function (orgID, callback) {
          if (orgID) {
            utag.DB("[" + u.id + "] OrgID used, but no 'Adobe Marketing Cloud ID Service' tag detected");
          }
          return callback();
        }
      };
    }();
    var u = {
      "id": id
    };
    u.queue = [];
    utag.o[loader].sender[id] = u;
    u.ev = {
      'view': 1,
      'link': 1,
      'video': 1
    };
    u.o = s;
    u.varlist = {
      pageName: 'pageName',
      channel: 'ch',
      campaign: 'v0',
      hier1: 'h1',
      hier2: 'h2',
      hier3: 'h3',
      hier4: 'h4'
    };
    for (var i = 1; i < 76; i++) {
      u.varlist['prop' + i] = 'c' + i;
      u.varlist['eVar' + i] = 'v' + i;
    }
    u.combineLinkVar = false;
    u.pushlt = function (l, v) {
      if (typeof l != "undefined") l.push(v);
    };
    if (utag.ut.typeOf === undefined) {
      u.typeOf = function (e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      };
    } else {
      u.typeOf = utag.ut.typeOf;
    }
    u.typeCheck = function (linkTrack, type) {
      if (u.typeOf(linkTrack) === "string") {
        u[type] = linkTrack.split(",");
      } else if (u.typeOf(linkTrack) === "array") {
        u[type] = linkTrack;
      } else {
        u[type] = [];
      }
    };
    u.hasadobeView = function () {
      if (utag.ut.adobeViewScriptRequested) {
        return true;
      }
      var i,
        s = document.getElementsByTagName("script");
      for (i = 0; i < s.length; i++) {
        if (s[i].src && s[i].src.indexOf("https://www.everestjs.net/static/le/last-event-tag-latest.min.js") >= 0) {
          return true;
        }
      }
      return false;
    };
    u.map = {
      "SCReportSuite": "s_account",
      "scBcsHomeId": "eVar11",
      "qp.intcmp": "eVar2",
      "pageName": "pageName,prop55,eVar55,hier1",
      "scPageInteraction": "eVar70",
      "pagename": "pageName",
      "bby_start_date": "eVar31",
      "qp.cmpid": "campaign",
      "dom.pathname": "prop54",
      "qp.cid": "campaign",
      "dom.url": "prop29",
      "dom.domain": "prop21",
      "dom.query_string": "prop47",
      "sme_funnel_step:step1": "event108",
      "sme_funnel_step:step3": "event109",
      "sme_funnel_step:step4": "event107",
      "bby_retrieve_quote": "eVar6",
      "bby_is_partner_included": "eVar91",
      "bby_payment_type": "eVar92",
      "dom.title": "prop24",
      "dom.referrer": "prop62",
      "qp.pdg_campaign": "eVar14",
      "qp.pdg_adgroup": "eVar22",
      "qp.pdg_network": "eVar25",
      "BupaGoldenId": "eVar93",
      "CustomerRegistrationId": "eVar94",
      "ChannelType": "eVar95",
      "bby_scheme": "eVar97",
      "event_name": "eVar107",
      "form_name": "eVar108",
      "video_name": "eVar66",
      "click_name": "eVar109",
      "qp.recipient": "eVar51",
      "qp.delivery": "eVar74",
      "qp.pdg_channel": "eVar37",
      "qp.pdg_term": "eVar39",
      "qp.pdg_content": "eVar40",
      "qp.pdg_account": "eVar38",
      "qp.pdg_keyword": "eVar54",
      "search_type": "eVar13",
      "search_term": "eVar1",
      "customer_is_pmi": "eVar111",
      "customer_is_dental_insurance": "eVar112",
      "customer_is_health_assessment_entitled": "eVar113",
      "pmi_book_type": "eVar114",
      "dental_insurance_book_type": "eVar115",
      "document_name": "eVar116",
      "swift_reg_sub_group_id": "eVar119",
      "swift_user_system_id": "eVar117",
      "swift_master_intermediary": "eVar118",
      "user_type": "eVar120",
      "search_results_num": "eVar126",
      "search_method": "eVar121",
      "search_result_term": "eVar122",
      "search_result_link": "eVar123",
      "search_result_link_num": "eVar124",
      "search_result_page_num": "eVar125",
      "bby_num_lives": "eVar34",
      "bby_account_id": "eVar35",
      "bby_idd": "eVar30",
      "bby_monthly_price": "eVar96",
      "bby_quote_id": "eVar85,SERIAL_event101,SERIAL_event104",
      "customer_smoking_status": "eVar128",
      "customer_title": "eVar129",
      "bby_contactkey": "eVar130",
      "bby_excess": "eVar131",
      "bby_hospital_network": "eVar132",
      "bby_outpatient": "eVar133",
      "api_endpoint": "eVar134",
      "tealium_event:bby_quote": "event101",
      "tealium_event:bby_purchase": "event104",
      "tealium_event:obt_purchase": "event114",
      "bby_monthly_price_order": "VALUE_event90",
      "pmi_num_policies": "eVar135",
      "dental_insurance_num_policies": "eVar136",
      "scProviderOnlineProviderId": "eVar127",
      "download_link_url": "eVar78",
      "download_link_name": "eVar81",
      "exit_link_url": "eVar76",
      "exit_link_name": "eVar43",
      "previous_page_name": "prop51",
      "bby_consent_given": "eVar41",
      "obt_product_type": "eVar98",
      "obt_appointment_preference": "eVar18",
      "obt_booking_date": "eVar137",
      "obt_booking_location": "eVar69",
      "obt_booking_time": "eVar105",
      "obt_booking_total": "eVar104",
      "obt_customer_type": "eVar33",
      "obt_date": "eVar110",
      "obt_defined_location": "eVar44",
      "obt_format": "eVar16",
      "obt_minimum_distance": "eVar88",
      "obt_product_name": "eVar99",
      "obt_result_count": "eVar89",
      "obt_search_distance": "eVar47",
      "obt_skipped": "eVar36",
      "obt_format_remote": "eVar17",
      "obt_booking_patient_id": "eVar72",
      "obt_booking_trans_id": "eVar48,SERIAL_event114",
      "obt_booking_appointment_id": "eVar71",
      "obt_booking_total_order": "VALUE_event115",
      "obt_doctor_preference": "eVar138",
      "obt_duration": "eVar139",
      "product_type": "eVar20",
      "_sm_2991_102": "currencyCode",
      "google_place_postal_code": "eVar8",
      "google_place_sublocality": "eVar9",
      "google_place_locality": "eVar10",
      "google_place_postal_town": "eVar26",
      "google_place_administrative_area_level_2": "eVar27",
      "google_place_administrative_area_level_1": "eVar28",
      "google_place_country": "eVar29",
      "obt_search_screen_result": "eVar45",
      "crm_record_guid": "eVar4"
    };
    u.extend = [function (a, b) {
      try {
        b['_sm_2991_102'] = "GBP";
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          if (typeof b['PageName'] != 'undefined' && b['PageName'] !== '') {
            b['pageName'] = b['PageName'];
          }
          if (typeof b['pagename'] != 'undefined' && b['pagename'] !== '') {
            b['pageName'] = b['pagename'];
          }
          if (typeof b['page_name'] != 'undefined' && b['page_name'] !== '') {
            b['pageName'] = b['page_name'];
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['pageName'].toString().toLowerCase() == 'buk:health:health-insurance:quote-thank-you'.toLowerCase() && typeof b['bby_monthly_price'] != 'undefined' && b['bby_monthly_price'] != '') {
          b['bby_monthly_price_order'] = b['bby_monthly_price'];
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['pageName'].toString().toLowerCase() == 'buk:bookingtool:appointment-confirmation'.toLowerCase() && typeof b['obt_booking_total'] != 'undefined' && b['obt_booking_total'] != '') {
          b['obt_booking_total_order'] = b['obt_booking_total'];
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          if (typeof b.bby_scheme != 'undefined' && b.bby_scheme !== '' && typeof b.bby_hospital_network != 'undefined' && b.bby_hospital_network !== '' && typeof b.bby_excess != 'undefined' && b.bby_excess !== '' && typeof b.bby_outpatient != 'undefined' && b.bby_outpatient !== '' && typeof b.bby_monthly_price != 'undefined' && b.bby_monthly_price !== '') {
            b._ccat = ['bby'];
            b._cprod = [b.bby_scheme, b.bby_hospital_network, b.bby_excess, b.bby_outpatient].join("-").split();
            b._cquan = ["1"];
            b._cprice = b.bby_monthly_price.split();
          }
          if (b.pageName.toString().toLowerCase() == 'buk:health:health-insurance:quote-thank-you'.toLowerCase() && typeof b.bby_monthly_price != 'undefined' && b.bby_monthly_price !== '' && typeof b.bby_quote_id != 'undefined' && b.bby_quote_id !== '') {
            b._corder = b.bby_quote_id;
            b._ctotal = b.bby_monthly_price;
          }
          if (typeof b.obt_product_type != 'undefined' && b.obt_product_type !== '' && typeof b.obt_product_name != 'undefined' && b.obt_product_name !== '' && typeof b.obt_booking_total != 'undefined' && b.obt_booking_total !== '') {
            b._ccat = [b.obt_product_type];
            b._cprod = [b.obt_product_name];
            b._cquan = ["1"];
            b._cprice = [b.obt_booking_total];
          }
          if (b.pageName.toString().toLowerCase() == 'buk:bookingtool:appointment-confirmation'.toLowerCase() && typeof b.obt_booking_trans_id != 'undefined' && b.obt_booking_trans_id !== '' && typeof b.obt_booking_total != 'undefined' && b.obt_booking_total !== '') {
            b._corder = b.obt_booking_trans_id;
            b._ctotal = b.obt_booking_total;
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      window.s = window.s || {};
      s.cookieDomainPeriods = "2";
      if (document.location.hostname.match(/\.co\.uk/)) {
        s.cookieDomainPeriods = "3";
      }
    }, function (a, b) {
      try {
        if (1) {
          if (typeof s.ActivityMap === 'object') {
            s.ActivityMap.link = function () {
              return false;
            };
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'www.bupa.co.uk'.toLowerCase() && b['ut.profile'].toString().toLowerCase() == 'bupa-uk'.toLowerCase() || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'intermediaries.bupa.co.uk'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1 || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'dentalclaims.bhwcloud.com'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1 || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'cashplanclaims.bhwcloud.com'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1 || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'www.bupaboost.com'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1 || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'mysmartdna.bupa.co.uk'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1 || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'www.finder.bupa.co.uk'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1 || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'connect.bupa.co.uk'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1 || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'providersonline.bupa.co.uk'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1 || b['ut.env'].toString().toLowerCase() == 'prod'.toLowerCase() && b['dom.domain'].toString().toLowerCase() == 'bupaukprd.powerappsportals.com'.toLowerCase() && b['ut.profile'].toString().indexOf('bupa-uk') > -1) {
          b['SCReportSuite'] = 'bupacoukprod';
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (typeof b['scPageInteraction'] != 'undefined' && typeof b['scPageInteraction'] != 'undefined' && b['scPageInteraction'] != '') {
          b['Page_Interaction_Event'] = '1';
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b, c, d, e, f, g) {
      if (1) {
        d = b['dom.pathname'];
        if (typeof d == 'undefined') return;
        c = [{
          '/health/health-insurance/retrieve-quote': 'retrieve_quote'
        }, {
          '/health/health-insurance/quote-your-details/retrieve-quote': 'retrieve_quote'
        }, {
          '/health/health-insurance/quote-your-details': 'start_quote'
        }, {
          '/health/health-insurance/quote-your-name': 'start_quote'
        }];
        var m = false;
        for (e = 0; e < c.length; e++) {
          for (f in utag.loader.GV(c[e])) {
            if (d == f) {
              b['bby_retrieve_quote'] = c[e][f];
              m = true;
            }
            ;
          }
          ;
          if (m) break;
        }
        ;
      }
    }];
    u.send = function (a, b, c, d, e, f, g, h, ev) {
      if (u.ev[a] || typeof u.ev.all != "undefined") {
        utag.DB("send:2991");
        u.data = {
          "adobe_org_id": "126234B8527831D90A490D44@AdobeOrg",
          "cookieDomain": function () {
            return utag.loader.RC('utag_main').vapi_domain || function () {
              var i = 0,
                d = document.domain,
                p = d.split('.'),
                s = '_vapi' + new Date().getTime();
              while (i < p.length - 1 && document.cookie.indexOf(s + '=' + s) === -1) {
                d = p.slice(-1 - ++i).join('.');
                document.cookie = s + '=' + s + ';domain=' + d + ';';
              }
              document.cookie = s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + d + ';';
              utag.loader.SC('utag_main', {
                'vapi_domain': d
              });
              return d;
            }();
          }(),
          "a": {},
          "serial": {},
          "linkName": "",
          "linkType": "",
          "runviewthrough": "no",
          "viewthroughloaded": u.hasadobeView(),
          "viewthroughinterval": 100,
          "viewthroughmaxtries": 3,
          "clearVars_in_RPTCallback": true,
          "send_timestamp": "no",
          "timestamp": ""
        };
        if (u.data.runviewthrough === "yes" && !u.data.viewthroughloaded) {
          (function (el, script) {
            el = document.createElement("script");
            el.async = !0;
            el.src = "https://www.everestjs.net/static/le/last-event-tag-latest.min.js";
            script = document.getElementsByTagName("script")[0];
            script.parentNode.insertBefore(el, script);
          })();
          utag.ut.adobeViewScriptRequested = true;
          u.data.viewthroughloaded = true;
        }
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (e[f] === "adobe_org_id" || e[f] === "linkTrackVars" || e[f] === "linkTrackEvents" || e[f] === "linkType" || e[f] === "linkName") {
                u.data[e[f]] = b[d];
                if (e[f] === "linkName" && b[d] !== "" && b[d] !== null && b[d] !== undefined) {
                  if (u.typeOf(window.tealium) !== "undefined" && u.typeOf(window.tealium.track) === "function") {
                    utag.DB("Found mapping of linkName. Calling Adobe link tracking function tl().");
                    a = "link";
                  }
                }
              } else if (e[f] === "combineLinkVar") {
                u.combineLinkVar = b[d];
              }
            }
          }
        }
        if (u.typeOf(window.tealium) !== "undefined" && u.typeOf(window.tealium.track) === "function") {
          if (window.utag_cfg_ovrd && window.utag_cfg_ovrd.link_attribute && b[window.utag_cfg_ovrd.link_attribute]) {
            utag.DB("Config utag_cfg_ovrd.link_attribute property set. Calling Adobe link tracking function tl().");
            a = "link";
          }
        }
        u.queue.push({
          "a": a,
          "b": b,
          "u.data": u.data
        });
        vAPI.getInstance(u.data.adobe_org_id, function (instance) {
          var data = u.queue.shift();
          a = data["a"];
          b = data["b"];
          u.data = data["u.data"];
          u.a = a;
          b.sc_events = b.sc_events || {};
          u.addEvent = function (v, n) {
            var t = [];
            if (v instanceof Array) {
              t = v.slice(0);
            } else if (typeof n !== "undefined") {
              t.push(v + "=" + n);
            } else {
              t.push(v);
            }
            for (var i = 0; i < t.length; i++) {
              b.sc_events[t[i]] = 1;
              u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
            }
            return b.sc_events;
          };
          u.addProduct = function (v) {
            u.data.sc_addProd = "";
            if (v instanceof Array) {
              u.data.sc_addProd = v.join(",");
            } else {
              u.data.sc_addProd = v;
            }
          };
          if (u.data.runviewthrough === "yes") {
            var editedReportSuite = "bupadummyreportsuite".toLowerCase();
            editedReportSuite = editedReportSuite.replace(/\s/g, "");
            var attempt_counter = 0;
            var adcloud_interval = setInterval(function () {
              attempt_counter++;
              if (window["AdCloudEvent"]) {
                clearInterval(adcloud_interval);
                AdCloudEvent(u.data.adobe_org_id, editedReportSuite);
                processAnalytics();
              } else if (attempt_counter > u.data.viewthroughmaxtries) {
                clearInterval(adcloud_interval);
                processAnalytics();
              }
            }, u.data.viewthroughinterval);
          } else {
            processAnalytics();
          }
          function processAnalytics() {
            if (u.a === "link") {
              u.ltflag = true;
              if (typeof u.data.linkTrackVars === "undefined" && typeof b.linkTrackVars === "undefined") {
                u.ltv = [];
              }
              if (u.combineLinkVar && typeof u.data.linkTrackVars !== "undefined") {
                u.typeCheck(u.data.linkTrackVars, "ltv");
              } else if (u.combineLinkVar && typeof b.linkTrackVars !== "undefined") {
                u.typeCheck(b.linkTrackVars, "ltv");
              }
              if (typeof u.data.linkTrackEvents === "undefined" && typeof b.linkTrackEvents === "undefined") {
                u.lte = [];
              }
              if (u.combineLinkVar && typeof u.data.linkTrackEvents !== "undefined") {
                u.typeCheck(u.data.linkTrackEvents, "lte");
              } else if (u.combineLinkVar && typeof b.linkTrackEvents !== "undefined") {
                u.typeCheck(b.linkTrackEvents, "lte");
              }
            }
            u.data.tagdevicetype = "standard";
            u.data.detectserial = "yes";
            for (c = 0; c < u.extend.length; c++) {
              try {
                d = u.extend[c](a, b);
                if (d == false) return;
              } catch (e) {}
            }
            ;
            try {
              if (window.sessionStorage) {
                var standardDimensions = sessionStorage.getItem("s_dmdbase") || "";
                var customDimensions1 = sessionStorage.getItem("s_dmdbase_custom1") || "";
                var customDimensions2 = sessionStorage.getItem("s_dmdbase_custom2") || "";
                var customDimensions3 = sessionStorage.getItem("s_dmdbase_custom3") || "";
                var customDimensions4 = sessionStorage.getItem("s_dmdbase_custom4") || "";
                u.o.contextData.s_dmdbase = standardDimensions;
                u.o.contextData.s_dmdbase_custom1 = customDimensions1;
                u.o.contextData.s_dmdbase_custom2 = customDimensions2;
                u.o.contextData.s_dmdbase_custom3 = customDimensions3;
                u.o.contextData.s_dmdbase_custom4 = customDimensions4;
              }
            } catch (e) {
              utag.DB("AppMeasurement Demandbase Error: " + e.message);
            }
            if (u.data.tagdevicetype === "mobile") {
              u.data.timestamp = u.data.timestamp || b.timestamp || b.timestamp_unix;
              if (isTrue(u.data.send_timestamp) && u.data.timestamp) {
                u.o.timestamp = u.data.timestamp;
              }
              u.data.a = {
                "AppID": b.app_id || "",
                "CarrierName": b.carrier || "",
                "DeviceName": b.device || "",
                "HourOfDay": b.lifecycle_hourofday_local || "",
                "DayOfWeek": b.lifecycle_dayofweek_local || "",
                "OSVersion": b.os_version || b.platform_version || "",
                "Resolution": b.device_resolution || ""
              };
              if (b.lifecycle_type) {
                u.data.a.disable_wake_track = false;
                u.data.a.disable_sleep_track = false;
                u.data.a.DaysSinceFirstUse = b.lifecycle_dayssincelaunch || "";
                u.data.a.DaysSinceLastUpgrade = b.lifecycle_dayssinceupdate || "";
                u.data.a.DaysSinceLastUse = b.lifecycle_dayssincelastwake || "";
                u.data.a.Launches = b.lifecycle_launchcount || "";
                u.data.a.InstallDate = b.lifecycle_firstlaunchdate_MMDDYYYY || "";
                u.data.a.UpgradeEvent = b.lifecycle_isfirstlaunchupdate || "";
                u.data.a.PrevSessionLength = b.lifecycle_priorsecondsawake || "";
              }
              if (b.lifecycle_isfirstlaunch) {
                u.data.a.InstallEvent = "InstallEvent";
              }
              if (b.lifecycle_diddetectcrash) {
                u.data.a.CrashEvent = "CrashEvent";
              }
              if (b.lifecycle_type === "launch") {
                u.data.a.LaunchEvent = "LaunchEvent";
              }
              if (b.lifecycle_isfirstlaunchupdate) {
                u.data.a.UpgradeEvent = "UpgradeEvent";
              }
            }
            for (e in utag.loader.GV(u.map)) {
              if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("SERIAL_") > -1) {
                f = u.map[e].split(",");
                for (g = 0; g < f.length; g++) {
                  if (f[g].indexOf("SERIAL_") === 0) {
                    u.data.serial[f[g].substring(7)] = b[e];
                  }
                }
              } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                f = u.map[e].split(",");
                for (g = 0; g < f.length; g++) {
                  if (f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")) {
                    u.data[f[g].substring(9)] = b[e];
                  }
                }
              }
              if (u.data.tagdevicetype === "mobile") {
                if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("contextData.a.") > -1) {
                  f = u.map[e].split(",");
                  for (g = 0; g < f.length; g++) {
                    if (f[g].indexOf("contextData.a.") === 0) {
                      u.data.a[f[g].substring(14)] = b[e];
                    }
                  }
                }
              }
            }
            if (u.data.a.disable_wake_track === true || u.data.a.disable_wake_track === "true") {
              if (b.lifecycle_type === "wake") {
                return false;
              }
            }
            if (u.data.a.disable_sleep_track === true || u.data.a.disable_sleep_track === "true") {
              if (b.lifecycle_type === "sleep") {
                return false;
              }
            }
            u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
            u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
            u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
            u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
            if (typeof u.data.id != "undefined" && u.data.id != "") {
              c = [];
              d = {};
              ev = {};
              for (e in utag.loader.GV(u.map)) {
                if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                  f = u.map[e].split(",");
                  for (g = 0; g < f.length; g++) {
                    var pv = f[g].substring(9);
                    if (f[g].indexOf("PRODUCTS_evar") == 0 || f[g].indexOf("PRODUCTS_eVar") == 0) {
                      if (b[e] instanceof Array) {
                        b.sc_prodevars = b.sc_prodevars || [];
                        for (var i = 0; i < b[e].length; i++) {
                          var prodvars = {};
                          if (typeof b.sc_prodevars[i] != "undefined" && b.sc_prodevars[i] != "") {
                            b.sc_prodevars[i][pv] = b[e][i];
                          } else {
                            prodvars[pv] = b[e][i];
                            b.sc_prodevars.push(prodvars);
                          }
                        }
                      } else {
                        d[pv] = (b[e] + "").split(",");
                      }
                    } else if (f[g].indexOf("PRODUCTS_event") == 0) {
                      if (b[e] instanceof Array) {
                        b.sc_prodevents = b.sc_prodevents || [];
                        for (var i = 0; i < b[e].length; i++) {
                          var prodevents = {};
                          if (typeof b.sc_prodevents[i] != "undefined" && b.sc_prodevents[i] != "") {
                            b.sc_prodevents[i][pv] = b[e][i];
                          } else {
                            prodevents[pv] = b[e][i];
                            b.sc_prodevents.push(prodevents);
                          }
                        }
                        u.addEvent(pv);
                      } else if (b[e] !== "") {
                        ev[pv] = b[e];
                        u.addEvent(pv);
                      }
                    }
                  }
                }
              }
              e = "";
              for (f in utag.loader.GV(d)) {
                for (g = 0; g < d[f].length; g++) {
                  if (e != "") {
                    e += "|" + f + "=" + d[f][g];
                  } else {
                    e = f + "=" + d[f][g];
                  }
                }
              }
              h = "";
              for (f in utag.loader.GV(ev)) {
                if (h) {
                  h += "|" + f + "=" + (isNaN(ev[f]) ? "1" : ev[f]);
                } else {
                  h = f + "=" + (isNaN(ev[f]) ? "1" : ev[f]);
                }
              }
              b.sc_prodevents = b.sc_prodevents || [];
              b.sc_prodevars = b.sc_prodevars || [];
              for (d = 0; d < u.data.id.length; d++) {
                var h2 = h;
                var h3 = e;
                if (typeof b.sc_prodevents != "undefined") {
                  for (f in b.sc_prodevents[d]) {
                    if (typeof b.sc_prodevents[d][f] != "undefined") {
                      var l = b.sc_prodevents[d][f];
                      if (typeof l != "undefined" && l != "" && isNaN(l) == false) {
                        if (h2) {
                          h2 += "|" + f + "=" + l;
                        } else {
                          h2 = f + "=" + l;
                        }
                      }
                    }
                  }
                }
                if (typeof b.sc_prodevars != "undefined") {
                  for (f in b.sc_prodevars[d]) {
                    if (typeof b.sc_prodevars[d][f] != "undefined") {
                      var l = b.sc_prodevars[d][f];
                      if (typeof l != "undefined" && l != "") {
                        if (h3) {
                          h3 += "|" + f + '=' + l;
                        } else {
                          h3 = f + '=' + l;
                        }
                      }
                    }
                  }
                }
                c.push((u.data.category[d] ? u.data.category[d] : "") + ";" + u.data.id[d] + ";" + (u.data.quantity[d] ? u.data.quantity[d] : "") + ";" + (u.data.price[d] ? ((u.data.quantity[d] ? parseInt(u.data.quantity[d]) : 1) * parseFloat(u.data.price[d])).toFixed(2) : "") + ";" + h2 + ";" + h3);
              }
              if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
                c.push(u.data.sc_addProd);
              }
              u.o.products = c.join(",");
            } else {
              u.o.products = "";
            }
            var evt = /^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
            for (c in utag.loader.GV(b)) {
              if (b[c] !== "") {
                f = ("" + b[c]).split(",");
                for (g = 0; g < f.length; g++) {
                  h = f[g].split(":");
                  d = [];
                  if (u.data.detectserial === "no") {
                    if (typeof u.map[c + ":" + h.join(":")] != "undefined") {
                      d = u.map[c + ":" + h.join(":")].split(",");
                    } else if (typeof u.map[c] != "undefined") {
                      d = u.map[c].split(",");
                    }
                  } else {
                    if (h.length > 1) {
                      var subTrigger = h[0];
                      for (var i = 1; i < h.length - 1; i++) {
                        subTrigger += ":" + h[i];
                      }
                      h[0] = subTrigger;
                      h[1] = h[h.length - 1];
                    }
                    if (typeof u.map[c + ":" + h[0]] != "undefined") {
                      d = u.map[c + ":" + h[0]].split(",");
                    } else if (typeof u.map[c] != "undefined") {
                      d = u.map[c].split(",");
                    }
                  }
                  for (e = 0; e < d.length; e++) {
                    if (d[e] != "events" && evt.test(d[e]) && d[e].indexOf("SERIAL_") !== 0) {
                      if (u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "") {
                        u.addEvent(d[e] + ":" + u.data.serial[d[e]]);
                      } else {
                        if (u.data.detectserial === "yes") {
                          u.addEvent(d[e] + (h.length > 1 ? ":" + h[1] : ""));
                        } else {
                          u.addEvent(d[e]);
                        }
                      }
                    }
                  }
                }
              }
            }
            for (var m in u.data.a) {
              u.o.contextData["a." + m] = u.data.a[m];
              u.pushlt(u.ltv, "contextData.a." + m);
            }
            for (c in utag.loader.GV(b)) {
              if (typeof u.map[c] != "undefined") {
                d = u.map[c].split(",");
                for (e = 0; e < d.length; e++) {
                  if (d[e].indexOf("VALUE_") == 0) {
                    if (u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "") {
                      u.addEvent(d[e].substring(6), b[c] + ":" + u.data.serial[d[e]]);
                    } else {
                      u.addEvent(d[e].substring(6), b[c]);
                    }
                  } else if (d[e] == "doneAction") {
                    b.doneAction = b[c];
                    if (b.doneAction != "navigate") {
                      b.doneAction = eval(b[c]);
                    }
                  } else if (d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0) {
                    d[e] = d[e].replace("contextData.", "c.");
                    if (!(d[e][2] === "a" && d[e][3] === ".")) {
                      u.o.contextData[d[e].substring(2)] = b[c];
                      u.pushlt(u.ltv, "contextData." + d[e].substring(2));
                    }
                  } else if (d[e] === "clearVars_in_RPTCallback") {
                    u.data[d[e]] = b[c];
                  } else {
                    if (c == "sc_events" || c == "sc_prodevents" || c == "sc_prodevars") {
                      utag.DB("Error:2991: Mapping reserved object name " + c);
                    } else {
                      u.o[d[e]] = b[c];
                    }
                    if (d[e] == "s_account") {
                      u.o.account = b[c];
                    } else if (d[e] == "linkTrackVars") {
                      u.ltflag = false;
                    } else {
                      if (u.combineLinkVar) {
                        u.ltflag = true;
                      }
                      if (d[e] !== "combineLinkVar") {
                        u.pushlt(u.ltv, d[e]);
                      }
                    }
                  }
                }
              }
            }
            d = [];
            for (c in utag.loader.GV(b.sc_events)) {
              if (b.sc_events[c]) {
                d.push(c);
              }
            }
            if (d.length > 0) {
              u.o.events = d.join(",");
              u.pushlt(u.lte, u.o.events);
            } else {
              u.o.events = "";
            }
            if (b._ccurrency) {
              u.o.currencyCode = b._ccurrency;
            }
            if (b._corder) {
              u.pushlt(u.lte, "purchase");
              u.pushlt(u.ltv, "purchaseID");
              u.o.purchaseID = u.o.purchaseID ? u.o.purchaseID : b._corder;
              u.o.events = u.o.events ? u.o.events : "purchase";
              if (u.o.events.indexOf("purchase") < 0) {
                u.o.events += ",purchase";
              }
            }
            if (instance) {
              u.o.visitor = instance;
            }
            if (!u.o.visitor) {
              if (typeof visitor !== "undefined") {
                u.o.visitor = window.visitor;
              } else if (typeof Visitor !== "undefined" && typeof Visitor.getInstance !== "undefined") {
                u.o.visitor = Visitor.getInstance(u.data.adobe_org_id);
              }
            }
            u.o.cookieDomain = u.o.visitor ? u.o.visitor.cookieDomain || u.data.cookieDomain : u.data.cookieDomain;
            u.o.cookieDomainPeriods = u.o.cookieDomain.split('.').length;
            if (u.a === "view") {
              var img = u.o.t();
              if (typeof img !== "undefined" && img !== "") {
                u.img = new Image();
                u.img.src = img.substring(img.indexOf("src=") + 5, img.indexOf("width=") - 2);
              }
            } else if (u.a === "link") {
              if (typeof u.ltv !== "undefined" && u.ltflag) {
                if (u.o.events) {
                  u.ltv.push("events");
                }
                if (u.o.products) {
                  u.ltv.push("products");
                }
                b.linkTrackVars = u.ltv.join(",");
              }
              if (typeof u.lte !== "undefined" && u.ltflag) {
                b.linkTrackEvents = u.lte.join(",");
              }
              u.o.linkTrackVars = u.data.linkTrackVars || b.linkTrackVars || "None";
              u.o.linkTrackEvents = u.data.linkTrackEvents || b.linkTrackEvents || "None";
              if (!u.data.linkType) {
                if (b.link_type === "download link") {
                  u.data.linkType = "d";
                } else if (b.link_type === "exit link") {
                  u.data.linkType = "e";
                }
              }
              u.o.linkType = u.data.linkType || u.o.linkType || "o";
              u.data.linkName = u.data.linkName || b.link_name || b.link_text || "no link_name";
              u.o.tl(b.link_obj ? b.link_obj : true, u.o.linkType, u.data.linkName, null, b.doneAction ? b.doneAction : null);
            }
            if ("yes" === "yes") {
              if (u.data.clearVars_in_RPTCallback === true || u.data.clearVars_in_RPTCallback === "true") {
                u.o.registerPostTrackCallback(u.o.clearVars);
              } else {
                u.o.clearVars();
              }
            }
          }
          utag.DB("send:2991:COMPLETE");
        });
      }
    };
    function isTrue(input) {
      if (typeof input === "boolean") {
        return input;
      } else if (typeof input === "string" && (input.toLowerCase() === "yes" || input.toLowerCase() === "true")) {
        return true;
      } else {
        return false;
      }
    }
    try {
      utag.o[loader].loader.LOAD(id);
    } catch (e) {
      utag.loader.LOAD(id);
    }
  })("2991", "bupa.bupa-uk");
} catch (e) {
  utag.DB(e);
}
(function () {
  if (typeof utag != 'undefined' && !utag_condload) {
    utag.initcatch = true;
    for (var i in utag.loader.GV(utag.loader.cfg)) {
      var b = utag.loader.cfg[i];
      if (b.load != 4) {
        utag.initcatch = false;
        break;
      }
      ;
      if (b.wait == 1) {
        utag.initcatch = false;
        break;
      }
    }
    ;
    if (utag.initcatch) utag.handler.INIT();
  }
})();